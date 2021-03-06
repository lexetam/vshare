"use strict";
var e = require("url"),
    t = require("opn"),
    o = require("request"),
    r = require("lodash"),
    n = require("archiver"),
    u = module.exports = {},
    i = void 0,
    s = console;
u.createConf = function(e) {
    e && (s.log("> Reading config from", e), process.env.OLS_HOME = e), i = require("../config"), i.applyConfig()
}, u.openBrowser = function(o) {
    var n = {
            protocol: "http:",
            hostname: "localhost",
            port: i.getVrolPort(),
            hash: "/firstRun",
            pathname: "/"
        },
        u = r.extend(n, o),
        s = e.format(u);
    t(s)
}, u.requestGet = function(e, t) {
    u.requestVROL(e, "GET", t, !1, null, !0)
}, u.requestPost = function(e, t, o, r) {
    u.requestVROL(e, "POST", r, t, o)
}, u.requestPostPromise = function(e, t, o) {
    return new Promise(function(r, n) {
        u.requestVROL(e, "POST", function(e, t, o) {
            return e ? n(e) : r({
                response: t,
                body: o
            })
        }, t, o)
    })
}, u.requestPostBinary = function(e, t, o) {
    u.requestVROL(e, "POST", o, void 0, t, !0)
}, u.getDongleServerPort = function() {
    return i.getDongleServerPort()
}, u._request = {}, ["get", "post"].forEach(function(e) {
    u._request[e] = function(t, r, n) {
        var u = {
            protocol: "http:",
            hostname: "localhost",
            port: i.getVrolPort(),
            pathname: t
        };
        return o[e](u, r, n)
    }
}), u.requestVROL = function(t, r, n, u, a, c) {
    var l = {
            protocol: "http:",
            hostname: "localhost",
            port: i.getVrolPort(),
            pathname: t
        },
        f = e.format(l),
        p = {
            method: r,
            url: f,
            body: a
        };
    c ? p.encoding = null : u ? (p.json = !0, p.formData = u) : a && (p.json = !0), o(p, function(e, t, o) {
        "function" == typeof n ? n(e, t, o) : s.log("Output:", o)
    })
}, u.getLogs = function() {
    var e = n.create("zip", {});
    return e.directory(i.log.directory, !1, {
        date: new Date
    }), e.finalize(), e
};
