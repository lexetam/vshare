"use strict";

function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function t(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
}

function n(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
var s = function() {
        function e(e, t) {
            var n, s;
            for (n = 0; n < t.length; n++) s = t[n], s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
        }
        return function(t, n, s) {
            return n && e(t.prototype, n), s && e(t, s), t
        }
    }(),
    r = require("events").EventEmitter,
    i = require("fs"),
    a = require("path"),
    o = require("request"),
    l = require("respawn"),
    u = require("ols-logger").FLP,
    c = require("./transforms"),
    h = 2592e6,
    d = function(r) {
        function d(n, s) {
            e(this, d);
            var r = t(this, (d.__proto__ || Object.getPrototypeOf(d)).call(this));
            return r.host = "127.0.0.1", r.configure(n, s), r
        }
        return n(d, r), s(d, [{
            key: "configure",
            value: function(e, t) {
                this._updateStateInterval && (clearInterval(this._updateStateInterval), delete this._updateStateInterval), this._dongleInfoInterval && (clearInterval(this._dongleInfoInterval), delete this._dongleInfoInterval), this.config = e, this.workstation = t, this.port = e.vrlservice.port, this.path = e.vrlservice.binPath, this.resetState()
            }
        }, {
            key: "start",
            value: function() {
                var e, t, n = this,
                    s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {};
                u.system.debug("Starting dongle subsystem monitoring."), this.config.vrlservice.enabled ? (u.system.info({
                    path: this.path
                }, "Dongle subsystem enabled, starting vrlservice."), this.monitor = l({
                    command: [this.path],
                    cwd: a.dirname(this.path),
                    sleep: function(e) {
                        return Math.min(Math.max(Math.pow(1.5, e), 1e3), 6e4)
                    },
                    env: {
                        VRLS_EMBEDDED_MODE: this.config.vrlservice.port
                    }
                }), this.monitor.on("spawn", function(e) {
                    u.system.info({
                        vrlservice_pid: e.pid,
                        path: n.path
                    }, "vrlservice started.")
                }), this.monitor.once("spawn", function() {
                    var e = setTimeout(function() {
                            s("Dongle server did not respond"), clearTimeout(t)
                        }, 5e3),
                        t = null,
                        r = function i() {
                            o.get(n.state.url + "/jsonstatus", function(r, a, o) {
                                return r || !o ? void(t = setTimeout(i, 100)) : (clearTimeout(e), n.updateState(), void s(r, a, o))
                            })
                        };
                    r()
                }), this.monitor.on("exit", function(e, t) {
                    u.system.warn({
                        code: e,
                        signal: t,
                        path: n.path
                    }, "vrlservice stopped."), n.resetState()
                }), this.monitor.on("warn", function(e) {
                    u.system.error({
                        err: e
                    }, "vrlservice encountered an error."), n.resetState()
                }), this.monitor.on("crash", function() {
                    u.system.error("vrlservice monitor has crashed (too many restarts or spawn error)."), n.resetState()
                }), this.monitor.start(), process.on("SIGTERM", this.stop.bind(this)), e = this.updateState.bind(this), this._updateStateInterval = setInterval(e, 1e3), t = this.reportDongleInfo.bind(this), this._dongleInfoInterval = setInterval(t, 864e5), setTimeout(t, 15e3)) : (u.system.info("Dongle subsystem disabled, ignoring."), s())
            }
        }, {
            key: "stop",
            value: function(e) {
                "function" != typeof e && (e = function() {}), u.system.trace("Shutting down dongle subsystem."), clearInterval(this._updateStateInterval), clearInterval(this._dongleInfoInterval), this.resetState(), this.monitor && "running" === this.monitor.status ? this.monitor.stop(function() {
                    u.system.info("vrlservice stopped, exiting."), e()
                }) : e()
            }
        }, {
            key: "resetState",
            value: function() {
                require("../sessions").clearSessions("dongle"), this.state = {
                    enabled: this.config.vrlservice.enabled && i.existsSync(this.path),
                    available: !1,
                    url: "http://" + this.host + ":" + this.port,
                    path: this.path,
                    licenses: [],
                    allocation: {}
                }, u.user.trace("Resetting dongle subsystem cached state.")
            }
        }, {
            key: "getState",
            value: function(e) {
                e(null, this.state)
            }
        }, {
            key: "_dedupeLicenses",
            value: function(e) {
                var t, n, s, r, i = new Map,
                    a = !0,
                    o = !1,
                    l = void 0;
                try {
                    for (t = e[Symbol.iterator](); !(a = (n = t.next()).done); a = !0) s = n.value, r = s.dongleId ^ s.productId ^ s.expires, i.has(r) ? c.addAmounts(i.get(r).amount, s.amount) : i.set(r, s)
                } catch (u) {
                    o = !0, l = u
                } finally {
                    try {
                        !a && t["return"] && t["return"]()
                    } finally {
                        if (o) throw l
                    }
                }
                return Array.from(i.values())
            }
        }, {
            key: "updateState",
            value: function() {
                var e = this;
                u.user.trace("Updating dongle subsystem cached state."), this.monitor && "running" == this.monitor.status ? o.get(this.state.url + "/jsonstatus", function(t, n, s) {
                    var r, i, a, o, l, c, d, f, p, v;
                    if (t && u.user.warn({
                            err: t
                        }, "Dongle subsystem unavailable"), r = !!s) try {
                        i = JSON.parse(s), e.state.allocation = i.allocation || {}, e.state.dongles = i.dongles || {}, e.state.available = 0 !== Object.keys(e.state.dongles).length, a = i.licenses || [], o = !0, l = !1, c = void 0;
                        try {
                            for (d = a[Symbol.iterator](); !(o = (f = d.next()).done); o = !0) p = f.value, null != p.expires && (p.expires = new Date(p.expires.year, p.expires.month - 1, p.expires.day).valueOf())
                        } catch (t) {
                            l = !0, c = t
                        } finally {
                            try {
                                !o && d["return"] && d["return"]()
                            } finally {
                                if (l) throw c
                            }
                        }
                        e.state.licenses = e._dedupeLicenses(a), v = (e.getExpiringLicenses(Date.now() + h) || []).filter(function(e) {
                            return e.expiryDate > Date.now()
                        }), e.state.notifications = e.state.notifications || {}, v.length > 0 && (e.state.notifications.expiringDongle = {
                            expiration: v
                        }), e.getExpiredLicenses().forEach(function(t) {
                            var n = new Date(t.expiryDate).toDateString();
                            e.state.notifications["expired " + t.productLabel] = {
                                title: "Dongle license expired",
                                message: t.productLabel + " license has expired on " + n + ".",
                                severity: "high",
                                from: t.expiryDate,
                                to: t.expiryDate + h,
                                actions: [{
                                    link: "/upgrade",
                                    label: "Request Renew"
                                }]
                            }
                        })
                    } catch (g) {
                        u.user.warn({
                            err: g
                        }, "Dongle subsystem JSON status unavailable.")
                    }
                    u.user.trace(e.state, "Updated dongle subsystem cached state.")
                }) : this.resetState()
            }
        }, {
            key: "reportDongleInfo",
            value: function() {
                var e = this;
                o.get({
                    url: this.state.url + "/jsonstatus",
                    json: !0
                }, function(t, n) {
                    var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    (t || 200 != n.statusCode) && u.user.info({
                        err: t,
                        res: n
                    }, "Could not report dongle info, dongle status unavailable."), e.emit("dongleInfo", s)
                })
            }
        }, {
            key: "canHandleRequest",
            value: function() {
                return this.state.enabled && this.state.available
            }
        }, {
            key: "handleRequest",
            value: function(e, t) {
                u.user.trace("Dongle subsystem handling license request."), o.get(this.state.url + e.url, function(e, n, s) {
                    e ? (u.user.error({
                        err: e
                    }, "Dongle subsystem failed to handle license request."), t(500, e.message)) : (u.user.trace({
                        res: n
                    }, "Dongle subsystem handled license request."), t(n.statusCode, s, n.headers["x-tag"]))
                })
            }
        }, {
            key: "getTotal",
            value: function(e) {
                var t, n, s, r, i, a, o, l, u, h, d, f, p = {};
                if (this.state.enabled && this.state.available) {
                    t = !0, n = !1, s = void 0;
                    try {
                        for (r = c.toUnique(e, this.state.licenses)[Symbol.iterator](); !(t = (i = r.next()).done); t = !0) a = i.value, p[a] = {
                            1: 0,
                            2: 0,
                            4: 0
                        }
                    } catch (v) {
                        n = !0, s = v
                    } finally {
                        try {
                            !t && r["return"] && r["return"]()
                        } finally {
                            if (n) throw s
                        }
                    }
                    o = !0, l = !1, u = void 0;
                    try {
                        for (h = this.state.licenses[Symbol.iterator](); !(o = (d = h.next()).done); o = !0) f = d.value, (null == f.expires || f.expires > Date.now()) && c.addAmounts(p[f.productId] || {
                            1: 0,
                            2: 0,
                            4: 0
                        }, f.amount)
                    } catch (v) {
                        l = !0, u = v
                    } finally {
                        try {
                            !o && h["return"] && h["return"]()
                        } finally {
                            if (l) throw u
                        }
                    }
                }
                return p
            }
        }, {
            key: "getTotalDetails",
            value: function(e) {
                return this.state.enabled && this.state.available && Array.isArray(this.state.licenses) ? this.state.licenses.filter(function(t) {
                    return t.productId == e && (null == t.expires || t.expires > Date.now())
                }).map(function(e) {
                    var t = Object.assign({}, e.amount);
                    return t.expiryDate = e.expires, t.details = {
                        dongleId: e.dongleId
                    }, t
                }).sort(function(e, t) {
                    return e.expiryDate < t.expiryDate
                }) : []
            }
        }, {
            key: "getEngaged",
            value: function(e) {
                var t, n, s, r, i, a, o = {};
                if (this.state.enabled && this.state.available) {
                    t = !0, n = !1, s = void 0;
                    try {
                        for (r = c.toUnique(e, this.state.licenses)[Symbol.iterator](); !(t = (i = r.next()).done); t = !0) a = i.value, o[a] = {
                            1: 0,
                            2: 0,
                            4: 0
                        }, this.state.allocation.total && this.state.allocation.total[a] && (o[a] = this.state.allocation.total[a])
                    } catch (l) {
                        n = !0, s = l
                    } finally {
                        try {
                            !t && r["return"] && r["return"]()
                        } finally {
                            if (n) throw s
                        }
                    }
                }
                return o
            }
        }, {
            key: "getEngagedDetails",
            value: function(e) {
                var t, n, s, r = [];
                if (this.state.enabled && this.state.available && this.state.allocation.sessions)
                    for (t in this.state.allocation.sessions) n = this.state.allocation.sessions[t], n.productId == parseInt(e, 10) && (s = Object.assign({}, n.amount), s.mode = "session", s.details = {
                        ip: c.numberToIp(n.ip),
                        location: "(Dongle)",
                        lastActive: Math.round(n.lastping / 1e3)
                    }, r.push(s));
                return r
            }
        }, {
            key: "getProductLabels",
            value: function(e) {
                var t, n, s, r, i, a, o = this,
                    l = {};
                if (this.state.enabled && this.state.available) {
                    t = !0, n = !1, s = void 0;
                    try {
                        for (r = function() {
                                var e = a.value,
                                    t = o.state.licenses.find(function(t) {
                                        return t.productId == e && (null == t.expires || t.expires > Date.now())
                                    });
                                t && (l[e] = t.productLabel)
                            }, i = c.toUnique(e, this.state.licenses)[Symbol.iterator](); !(t = (a = i.next()).done); t = !0) r()
                    } catch (u) {
                        n = !0, s = u
                    } finally {
                        try {
                            !t && i["return"] && i["return"]()
                        } finally {
                            if (n) throw s
                        }
                    }
                }
                return l
            }
        }, {
            key: "getLog",
            value: function(e) {
                u.system.trace("Loading dongle subsystem logs."), this.state.enabled && this.state.available ? (u.system.trace("Proxying vrlservice /getlog page."), o.get({
                    url: this.state.url + "/getlog",
                    encoding: null
                }, function(t, n, s) {
                    t ? u.system.error({
                        err: t
                    }, "Could not proxy vrlservice /getlog page.") : u.system.debug("Proxied vrlservice /getlog page."), e(t, s)
                })) : (u.system.warn("Dongle subsystem disabled or unavailable, logs not available."), e())
            }
        }, {
            key: "getExpiringLicenses",
            value: function(e) {
                return this.state.licenses.filter(function(t) {
                    return t.expires && t.expires < e
                }).map(function(e) {
                    return {
                        productLabel: e.productLabel,
                        expiryDate: e.expires
                    }
                }).sort(function(e, t) {
                    return e.expiryDate < t.expiryDate
                })
            }
        }, {
            key: "getExpiredLicenses",
            value: function() {
                return this.getExpiringLicenses(Date.now())
            }
        }]), d
    }(r);
module.exports = d;
