"use strict";

function e(e) {
    var n = {};
    return e.on("connection", function(e) {
        var t = e.remoteAddress + ":" + e.remotePort;
        n[t] = e, e.on("close", function() {
            delete n[t]
        })
    }), e.destroy = function(t) {
        e.close(t);
        for (var r in n) n[r].destroy()
    }, e
}

function n() {
    function e(e) {
        return e.msg.split("").reduce(function(e, n) {
            var t = (e << 5) - e + n.charCodeAt(0);
            return t & t
        }, 0)
    }
    h.system.info("Initializing basic UI HTTP routes."), j.get("/upgrade", function(e, n) {
        return n.redirect("http://127.0.0.1:" + (v.vrlservice.port || 30314) + "/upgrade")
    }), j.get("/update", b.createUpdateRoute(y));
    var n = new Set;
    j.post("/notification/hide/:key", function(e, t) {
        var r = e.params.key;
        n.add(r), t.sendStatus(200)
    }), j.get("/status", function(e, t) {
        var r, s, o;
        if (t.set("Expires", -1), h.user.trace("Getting overall system status."), N) {
            r = {};
            for (s in O) o = O[s], r[s] = o.getState.bind(o);
            g.parallel(r, function(r, s) {
                var o, i, a, u;
                if (r) t.status(500).send(r), h.system.warn(r, "Could not read component state.");
                else {
                    s.version = L, s.build = D, s.platform = process.platform, s.ready = !0, s.notifications = {}, s.offline.expires = O.offline.state.expiryDate, Object.assign(s.notifications, O.online.state.notifications, O.offline.state.notifications, O.dongle.state.notifications, y.notifications);
                    for (o in s.notifications) i = s.notifications[o], (n.has(o) || i.from > Date.now() || i.to < Date.now()) && delete s.notifications[o];
                    a = O.online.state.user || O.offline.state.user, a && (s.user = a.username || a.userId), u = O.online.state.site || O.offline.state.site, u && (s.site = u.name), s.readonly = !!!e.local, t.json(s)
                }
            })
        } else t.json({
            ready: !1,
            version: L
        })
    }), j.use(require("./lib/settings.router").create(T, k)), j.get("/errors", function(n, t) {
        var r, s, o, i, a, u, l, c;
        t.set("Expires", -1), r = {}, s = !0, o = !1, i = void 0;
        try {
            for (a = h.errorStream.records[Symbol.iterator](); !(s = (u = a.next()).done); s = !0) l = u.value, c = e(l), r[c] = l, l.key = c
        } catch (d) {
            o = !0, i = d
        } finally {
            try {
                !s && a["return"] && a["return"]()
            } finally {
                if (o) throw i
            }
        }
        t.json(r)
    }), j.post("/errors/:key", function(n, t) {
        var r, s, o = n.params.key;
        for (r = 0; r < h.errorStream.records.length; r++) s = h.errorStream.records[r], e(s) == o && (h.errorStream.records.splice(r, 1), --r);
        t.sendStatus(200)
    })
}

function t() {
    function e(n, r, o) {
        var i, a = {},
            u = a.key = n.url.slice(-32).toUpperCase(),
            l = o || t.getSessionHandler(u);
        return l >= s.length ? (h.user.trace(a, "License request could not be handled."), void r.status(503).send("Could not handle license request.")) : (t.isSessionTrusted(u) && (n.headers.via = "FLP " + L), i = s[l], a.mode = i.constructor.name, h.user.trace(a, "Trying to handle license request."), void(i.canHandleRequest(n) ? i.handleRequest(n, function(s, o, i, c) {
            var d, f, g, v;
            switch (a.response = s, s) {
                case 104:
                    h.user.trace(a, "License request could not be handled, continuing."), setImmediate(e, n, r, l + 1);
                    break;
                case 200:
                case 300:
                case 400:
                    if (h.user.trace(a, "License request handled."), "71047293847182939f8e0a8b8e938491" == u.toLowerCase()) try {
                        for (d = new Buffer(16), f = new Buffer(u, "hex"), g = new Buffer(i, "hex"), v = 0; v < 16; ++v) d[v] = f[v] ^ g[v];
                        u = d.toString("hex").toUpperCase(), t.updateSessionHandler(u, l, c)
                    } catch (m) {
                        h.user.error({
                            err: m
                        }, "Failed to establish license session.", a), t.updateSessionHandler(u, l, c)
                    } else t.updateSessionHandler(u, l, c);
                    r.writeHead(200, {
                        "Content-Length": o.length,
                        "Content-Type": "text/html"
                    }), r.end(o, "ascii");
                    break;
                case 403:
                case 500:
                    h.user.warn(a, "License request could not be handled."), r.writeHead(200, {
                        "Content-Length": o.length,
                        "Content-Type": "text/html"
                    }), r.end(o, "ascii");
                    break;
                default:
                    h.user.warn(a, "Unknown license handler status code %d.", s), r.sendStatus(500)
            }
        }) : (h.user.trace(a, "Handler cannot handle license request, continuing."), setImmediate(e, n, r, l + 1))))
    }

    function n(e, n) {
        try {
            e.type("application/zip"), e.set("Content-Disposition", "attachment; filename=diagnostics.zip;"), e.writeHead(200), h.system.trace("Compressing license server logs.");
            var t = d.create("zip", {});
            n && (h.system.trace("Compressing dongle server log."), t.append(new Buffer(n), {
                name: "vrlservice.enc"
            })), t.directory(v.log.directory, !1, {
                date: new Date
            }), t.finalize(), t.pipe(e)
        } catch (r) {
            h.system.error({
                err: r
            }, "Could not compress diagnostics bundle."), e.sendStatus(500)
        }
    }
    var t, s, o, i;
    h.system.info("Initializing API HTTP routes."), t = require("./sessions"), s = [O.dongle, O.offline, O.online], j.get(/^\/getlic01\/([A-Fa-f0-9]+)$/, function(n, t) {
        h.user.trace("Receiving license request."), n.connection.setKeepAlive(!0), e(n, t)
    }), j.get("/csr", function(e, n) {
        n.set("Expires", -1), O.online.auth.getCsr(e, n)
    }), j.get("/crt", function(e, n) {
        n.set("Expires", -1), O.online.auth.getCrt(e, n)
    }), j.post("/crt", function(e, n) {
        O.online.auth.offlineActivate(e, n)
    }), j.get("/activate", function(e, n) {
        O.online.auth.activate(e, n)
    }), j.post("/activate", f.json(), function(e, n) {
        return e.local ? (e.body.username && e.body.password || (h.user.error({
            req: e
        }, "missing username or password"), n.sendStatus(403)), void O.online.auth.activate(e, n)) : (h.system.warn("Activating license server from remote machine denied."), void n.sendStatus(403))
    }), j.post("/deactivate", function(e, n) {
        h.user.debug("Deactivating license server. Request from %s machine.", e.local ? "local" : "remote"), e.local ? O.online.auth.deactivate(e, n, function(e) {
            !e && r.existsSync(O.offline._offlineBin) && O.offline.release()
        }) : (h.system.warn("Deactivating license server from remote machine denied."), n.sendStatus(403))
    }), j.get("/logs/download", function(e, t) {
        t.set("Expires", -1), h.system.trace("Downloading diagnostics bundle."), r.existsSync(v.log.directory) ? (h.system.trace("Getting dongle server logs."), O.dongle.getLog(function(e, r) {
            e ? (h.system.warn(e, "Could not get dongle server log."), n(t)) : n(t, r)
        })) : (h.system.debug("Log directory not found."), t.sendStatus(404))
    }), j.post("/offline", function(e, n) {
        h.user.debug("Uploading offline bundle.");
        var t = r.createWriteStream(v.offline);
        t.once("finish", function() {
            h.user.info("Offline bundle saved at " + v.offline), setTimeout(function() {
                n.redirect("/#/offline")
            }, 1e3)
        }), t.once("error", function(e) {
            h.user.error({
                err: e
            }, "Failed to save offline bundle."), O.offline.release(), n.sendStatus(500)
        }), e.pipe(t)
    }), j.post("/offline/reserve", f.json(), function(e, n) {
        h.user.debug("Borrowing offline licenses."), O.online.auth.ok ? O.offline.reserveLicenses(e.body, function(e, t) {
            e ? (h.user.error({
                err: e
            }, "Failed to borrow offline licenses."), n.status(500).send(t)) : (h.user.info("Successfully borrowed offline licenses."), n.sendStatus(200))
        }) : (h.user.info("License server not activated, ignoring."), n.sendStatus(403))
    }), j.post("/offline/release", function(e, n) {
        h.user.debug("Releasing borrowed offline licenses."), O.online.auth.ok ? O.offline.releaseLicenses(function(e) {
            e ? (h.user.error({
                err: e
            }, "Failed to release borrowed offline licenses."), n.sendStatus(500)) : (h.user.info("Successfully released borrowed offline licenses."), setTimeout(function() {
                n.sendStatus(200)
            }, 1e3))
        }) : (h.user.info("License server not activated, ignoring."), n.sendStatus(403))
    }), j.post("/site/rename", f.json(), function(e, n) {
        h.user.debug("Renaming site, request from %s machine.", e.local ? "local" : "remote"), e.local ? O.online.auth.ok ? (h.user.info({
            req: e
        }, "Site rename request."), O.online.auth.request(e.url, {
            method: "POST",
            form: e.body
        }, function(e, t) {
            e || 200 != t.statusCode ? (h.user.debug({
                err: e,
                res: t
            }, "Could not rename site."), n.sendStatus(500)) : (h.user.debug("Site renamed successfully."), n.sendStatus(200))
        })) : (h.user.info("License server not activated, ignoring."), n.sendStatus(403)) : (h.user.warn("Renaming site from remote machine denied."), n.sendStatus(403))
    }), j.get("/sessions", function(e, n) {
        n.set("Expires", -1), h.user.trace("Getting session data."), O.online.auth.request(e.url, {}, function(e, t, r) {
            e && h.user.debug({
                err: e,
                res: t
            }, "Could not get session data."), n.status(t.statusCode).send(r)
        })
    }), o = require("./bundles"), i = new o(v, O), j.get("/bundles/:source?", i.list.bind(i)), j.get("/bundle/:bundleId/summary/:source?", i.summary.bind(i)), j.get("/product/:productId/total", i.total.bind(i)), j.get("/product/:productId/engaged", i.engaged.bind(i)), j.get("/product/:productId/free", i.free.bind(i)), j.post("/dongle/enable", function(e, n) {
        var t = O.dongle;
        v.vrlservice.enabled = !0, v.saveConfig(), t.stop(function() {
            t.start(function() {
                return n.send("starting")
            })
        })
    }), j.post("/dongle/disable", function(e, n) {
        var t = O.dongle;
        v.vrlservice.enabled = !1, v.saveConfig(), t.stop(function() {
            return n.send("stopping")
        })
    }), j.use("/api", f.json(), function(e, n) {
        if (!e.local) return h.user.warn("API calls from remote machine denied."), void n.sendStatus(403);
        var t = {
            headers: e.headers,
            method: e.method
        };
        "POST" == e.method && e.body && (t.json = e.body), "GET" == e.method && (t.encoding = null), O.online.auth.request(e.originalUrl, t, function(t, r, s) {
            if (t) n.status(500).json({
                jsonrpc: "2.0",
                code: -32e3,
                message: t.message
            });
            else if ("POST" == e.method) n.json(s);
            else {
                for (var o in r.headers) n.setHeader(o, r.headers[o]);
                n.status(r.statusCode).end(s)
            }
        })
    })
}
var r, s, o, i, a, u, l, c, d, f, g, v, m, p, h, b, y, S, w, q, C, k, E, O, x, P, N, j, I, T, L = "4.4.1",
    D = "7138";
L || D || (L = require("./package.json").version, D = "dev"), void 0 !== process.env.NODE_ENV && process.env.NODE_ENV || (process.env.NODE_ENV = "production"), process.argv.indexOf("--daemon") > 0 && (console.log("Will daemonize and exit"), require("daemon")()), "production" == process.env.NODE_ENV && process.chdir(require("path").dirname(process.execPath)), r = require("fs"), s = require("http"), o = require("path"), i = require("url"), "production" == process.env.NODE_ENV && "win32" === process.platform && ! function() {
    var e = r.createWriteStream(o.join(process.env.TEMP, "vrolservice.log")),
        n = require("os-service");
    n.run(e, function() {
        e.end(), n.stop(), S.shutdown(0)
    })
}(), a = require("express"), u = require("method-override"), l = require("cookie-parser"), c = require("compression"), d = require("archiver"), f = require("body-parser"), g = require("async"), v = require("./config"), r.existsSync(v.vrlservice.oldConfigPath) && (m = r.readFileSync(v.vrlservice.oldConfigPath), p = ("" + m).match(/\<ServerPort\>(\d+)\<\/ServerPort\>/im), p && p[1] && (v.webServer.port = parseInt(p[1], 10))), v.applyConfig(), process.env.NO_PROXY ? process.env.NO_PROXY += ",localhost,127.0.0.1,::1" : process.env.NO_PROXY = "localhost,127.0.0.1,::1", h = require("ols-logger").initialize(v.log), b = require("./lib/autoupdate"), y = b.singleton, S = require("lifecycle-manager")(v.log.name, h), S.onExit(h.finalize), h.system.info({
    version: L,
    build: D
}, "Starting license server."), w = require("resource-monitoring").ResourceMonitor, q = new w(v.monitoring, h), C = require("resource-monitoring").NetworkMonitor(q), k = new(require("./workstation"))(v, L), E = require("./handlers"), O = {};
for (x in E) P = E[x], O[x] = new P(v, k);
if (O.offline.online = O.online, O.online.auth.on("deactivated", function() {
        return O.offline.release()
    }), h.system.debug("Initializing workstation."), N = !1, k.initialize(function() {
        h.system.debug("Workstation initialized.");
        for (var e in O) O[e].start();
        S.ensureSingleInstance() && setImmediate(function() {
            N = !0, t()
        })
    }), setImmediate(n), O.dongle.on("dongleInfo", function(e) {
        if (0 !== Object.keys(e).length) {
            var n = Object.keys(e.dongles).length;
            h.user.trace("Found " + n + " dongle" + (1 === n ? "" : "s") + "."), delete e.allocation, O.online.auth.request("/dongle/v1/info", {
                json: e,
                method: "POST",
                signature: O.online.auth.sign(JSON.stringify(e))
            }, function(e, n) {
                (e || 200 != n.statusCode) && h.user.debug({
                    err: e,
                    res: n
                }, "Could not report dongle info, service unavailable.")
            })
        }
    }), h.system.debug("Configuring HTTP server."), j = a(), I = e(s.createServer(j)), T = function(e) {
        e || I.destroy(function() {
            var e, n, t, r, s, o = ["system", "user", "perf"];
            for (e = 0; e < o.length; e++) n = o[e], t = h[n], r = t.streams.find(function(e) {
                return e.stream === h.errorStream
            }), r ? (s = r.level, t.level(v.getValues().diagnostics.level), r.level = s) : t.level(v.getValues().diagnostics.level);
            O.dongle.stop(function() {
                var e = require("./handlers/dongle");
                O.dongle = new e(v, k), O.dongle.start()
            }), O.online.configure(v, k), I.listen(v.webServer.port, v.webServer.hostname, function() {
                O.online.start(), h.system.info("License server listening at %s.", i.format(v.webServer))
            })
        })
    }, "development" == process.env.NODE_ENV && j.use(function(e, n, t) {
        n.setHeader("Access-Control-Allow-Origin", "*"), t()
    }), j.use(function(e, n, t) {
        var r = e.hostname;
        e.local = "127.0.0.1" == r || "localhost" == r || "::1" == r, t()
    }), j.use(h.expressErrorHandler.bind(h)), j.use(c({
        level: 9
    })), j.use(u()), j.use(l()), j.use(C.measure), "development" === process.env.NODE_ENV) try {
    ! function() {
        var e, n = require("tiny-lr")(),
            t = require("webpack"),
            r = require("./web/webpack.config.js"),
            s = require("webpack-dev-middleware"),
            i = function() {
                n.changed({
                    body: {
                        files: [r.output.filename]
                    }
                })
            };
        n.listen(v.liveReloadPort, i), r.watch = !0, e = t(r), e.plugin("done", i), j.use(s(e, {
            publicPath: "/",
            stats: !1
        })), j.use(require("connect-livereload")(v.liveReloadPort)), j.use(a["static"](o.resolve(__dirname, "web/")))
    }()
} catch (H) {
    h.system.error({
        err: H
    })
} else j.use(a["static"](o.resolve(__dirname, "web/public")));
q.start(), I.listen(v.webServer.port, v.webServer.hostname, function() {
    h.system.info("License server running at %s.", i.format(v.webServer))
});
