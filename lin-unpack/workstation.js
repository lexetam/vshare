"use strict";

function e(e, r) {
    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
}

function r() {
    var e, r, i, n, s, o = a.networkInterfaces(),
        c = void 0;
    for (e in o)
        if (r = o[e], i = r.find(function(e) {
                return !e.internal
            })) {
            c = i.mac, "win32" === process.platform && (c = c.toUpperCase().replace(/:/g, "-"));
            break
        }
    return c ? (n = a.cpus(), s = n.length + "x " + n[0].model, s += " | " + a.totalmem(), s += " | " + c, t.createHash("md5").update(s).digest("hex")) : (u.system.error("Failed to load workstation MAC address."), null)
}
var i = function() {
        function e(e, r) {
            var i, t;
            for (i = 0; i < r.length; i++) t = r[i], t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
        }
        return function(r, i, t) {
            return i && e(r.prototype, i), t && e(r, t), r
        }
    }(),
    t = require("crypto"),
    n = require("fs"),
    a = require("os"),
    s = require("async"),
    o = require("node-forge"),
    c = require("ols-certificate-utils"),
    u = require("ols-logger").FLP,
    d = require("lifecycle-manager")(),
    l = require("./lib/serial_number"),
    f = Error("Private key passphrase mismatch."),
    y = function() {
        function y(r, i) {
            e(this, y), this.config = r, this.version = i, this.os = null, this.name = a.hostname(), this.machineId = null, this.key = null, this.csr = null, this.cert = null
        }
        return i(y, [{
            key: "_identifyWin32",
            value: function(e) {
                require("child_process").exec("wmic os get caption", function(r, i) {
                    if (r) return void e(r);
                    try {
                        e(null, i.split(a.EOL)[1].trim())
                    } catch (r) {
                        e(r)
                    }
                })
            }
        }, {
            key: "_identifyLinux",
            value: function(e) {
                require("getos")(function(r, i) {
                    return r ? void e(r) : void(i.dist && i.release ? e(null, i.dist + " " + i.release) : e(null, null))
                })
            }
        }, {
            key: "_identifyDarwin",
            value: function(e) {
                n.readFile("/System/Library/CoreServices/SystemVersion.plist", "ascii", function(r, i) {
                    if (r) return void e(r);
                    try {
                        var t = require("plist").parse(i);
                        t.ProductName && t.ProductVersion ? e(null, t.ProductName + " " + t.ProductVersion) : e(null, null)
                    } catch (r) {
                        e(r)
                    }
                })
            }
        }, {
            key: "identifyOS",
            value: function(e) {
                switch (process.platform) {
                    case "win32":
                        this._identifyWin32(e);
                        break;
                    case "linux":
                        this._identifyLinux(e);
                        break;
                    case "darwin":
                        this._identifyDarwin(e);
                        break;
                    default:
                        setImmediate(e, null, null)
                }
            }
        }, {
            key: "initialize",
            value: function(e) {
                var r = this;
                this.identifyOS(function(i, t) {
                    !i && t || u.system.warn({
                        err: i
                    }, "Failed identifying OS."), r.os = t || "Unknown OS", u.system.info("Loading workstation configuration."), u.system.debug("License Server running under " + r.os), s.series([function(e) {
                        return r.prepareMachineId(e)
                    }, function(e) {
                        return r.prepareCSR(e)
                    }, function(e) {
                        return r.preparePrivateKey(e)
                    }], function(i) {
                        if (i)
                            if (r.csr && !r.key) {
                                u.system.warn({
                                    err: i
                                }, "Possible machine configuration change, resetting.");
                                try {
                                    u.system.debug("Removing private key."), n.unlinkSync(r.config.ssl.key)
                                } catch (i) {
                                    u.system.warn({
                                        err: i
                                    }, "Private key not found.")
                                }
                                try {
                                    u.system.debug("Removing CSR file."), n.unlinkSync(r.config.ssl.csr)
                                } catch (i) {
                                    u.system.warn({
                                        err: i
                                    }, "CSR file not found.")
                                }
                                try {
                                    u.system.debug("Removing certificate."), n.unlinkSync(r.config.ssl.crt)
                                } catch (i) {
                                    u.system.warn({
                                        err: i
                                    }, "Certificate not found.")
                                }
                                r.initialize(e)
                            } else u.system.fatal({
                                err: i
                            }, "Failed to load workstation configuration, exiting."), d.shutdown(1);
                        else u.system.debug("Workstation configuration loaded."), r.prepareCertificate(e)
                    })
                })
            }
        }, {
            key: "prepareMachineId",
            value: function(e) {
                var r = this;
                u.system.trace("Loading hardware configuration."), l(function(i, n) {
                    if (null != i) {
                        u.system.error({
                            err: i
                        }, "failed reading serial number, fallback");
                        var s = a.cpus();
                        return r.machineId = t.createHash("md5").update(s.length + "x " + s[0].model).digest("hex"), void e()
                    }
                    r.machineId = n, u.system.debug("Hardware configuration loaded."), e()
                })
            }
        }, {
            key: "preparePrivateKey",
            value: function(e) {
                var i = this;
                u.system.trace("Loading private key."), n.readFile(this.config.ssl.key, {
                    encoding: "ascii"
                }, function(t, a) {
                    var s, d, l, y;
                    if (t) return u.system.error({
                        err: t
                    }, "Failed to read private key."), void e(t);
                    try {
                        if (u.system.trace("Decrypting private key."), s = o.pki.decryptRsaPrivateKey(a, i.machineId), !s) {
                            if (d = r(), null == d) throw u.system.error({
                                err: f
                            }, "failed to decrypt with machineId v2, v1 not available"), f;
                            if (l = o.pki.decryptRsaPrivateKey(a, d), !l) throw u.system.error({
                                err: f
                            }, "failed to decrypt with machineId v2 and v1"), f;
                            return y = c.privateKeyToPem(l, i.machineId), n.writeFileSync(i.config.ssl.key, y), i.key = y, u.system.debug("Private key passphrase updated."), void e()
                        }
                    } catch (m) {
                        return u.system.error({
                            err: m
                        }, "Failed to decrypt private key."), void e(m)
                    }
                    i.key = a, u.system.debug("Private key loaded."), e()
                })
            }
        }, {
            key: "prepareCSR",
            value: function(e) {
                var r = this;
                u.system.trace("Loading CSR."), n.readFile(this.config.ssl.csr, {
                    encoding: "ascii"
                }, function(i, t) {
                    return t ? (u.system.debug("CSR loaded."), r.csr = t, void e()) : (u.system.warn({
                        err: i
                    }, "Private key and CSR not found, generating."), void c.generateCsr({
                        name: r.name,
                        passphrase: r.machineId,
                        keyFile: r.config.ssl.key,
                        csrFile: r.config.ssl.csr
                    }, function(i) {
                        return i ? (u.system.error({
                            err: i
                        }, "Failed to generate private key and CSR."), void e(i)) : (u.system.debug(i, "Private key and CSR generated."), void n.readFile(r.config.ssl.csr, {
                            encoding: "ascii"
                        }, function(i, t) {
                            return i ? (u.system.error({
                                err: i
                            }, "Failed to read CSR."), void e(i)) : (u.system.debug("CSR loaded."), r.csr = t, void e())
                        }))
                    }))
                })
            }
        }, {
            key: "prepareCertificate",
            value: function(e) {
                var r = this;
                u.system.trace("Loading certificate."), n.readFile(this.config.ssl.crt, {
                    encoding: "ascii"
                }, function(i, n) {
                    var a, s, c, d;
                    if (i) return u.system.warn({
                        err: i
                    }, "Failed to read certificate."), void e(i);
                    if (n) try {
                        if (a = "test", s = t.privateEncrypt({
                                key: r.key,
                                passphrase: r.machineId
                            }, new Buffer(a)), s = t.publicDecrypt(n, s), s != a) throw Error("Certificate does not match private key.");
                        if (u.system.debug("Certificate loaded."), c = o.pki.certificateFromPem(n), d = new Date, !(c.validity.notBefore < d && c.validity.notAfter > d)) throw Error("Certificate is outside the validity period.");
                        r.cert = n, r.base64cert = Buffer.from(n, "ascii").toString("base64")
                    } catch (l) {
                        return u.system.warn({
                            err: l
                        }, "Invalid certificate."), void e(l)
                    }
                    e(null, n)
                })
            }
        }]), y
    }();
module.exports = y;
