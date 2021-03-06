"use strict";

function e(e, t, n, o) {
    var s, i = new e.constructor;
    i.applyConfig(t), console.log(t, i.backend), s = new r(i, n), s.getAddressInfo(function(e) {
        return o(e, !!!e)
    }, {
        timeout: 1e4
    })
}
var t = require("express").Router,
    n = require("body-parser"),
    o = require("ols-logger").FLP,
    r = require("../handlers/online/connection-manager");
exports.create = function(r, s) {
    var i = new t,
        a = require("../config");
    return "function" != typeof r && (r = function() {}), i.get("/config", function(e, t) {
        t.set("Expires", -1), o.system.trace("Getting system configuration, request from %s machine.", e.local ? "local" : "remote");
        try {
            var n = a.getValues();
            n.readonly = !e.local, o.system.trace(n, "Returning system configuration."), t.json(n)
        } catch (r) {
            o.system.error({
                err: r
            }, "Failed to load system configuration."), t.sendStatus(500)
        }
    }), i.post("/config", n.json(), function(t, n) {
        o.system.debug("Saving system configuration, request from %s machine.", t.local ? "local" : "remote"), t.local ? ! function() {
            var i = t.body;
            e(a, i, s, function(e, t) {
                if (!t) return o.system.error({
                    conf: i
                }, "Invalid configuration provided."), void n.status(400).end("Invalid network configuration provided.");
                if (e) return o.system.error({
                    err: e
                }, "Failed to save system configuration."), void n.status(400).end("Failed to save system configuration.");
                try {
                    o.system.info({
                        conf: i
                    }, "Setting system configuration values."), a.applyConfig(i), a.saveConfig(), o.system.info("Saved system configuration, shutting down process."), n.status(200).end("Saved system configuration"), r()
                } catch (e) {
                    return o.system.error({
                        err: e
                    }, "Failed to save system configuration."), n.status(500).end("Failed to save system configuration."), void r(e)
                }
            })
        }() : (o.system.warn("Saving system configuration from remote machine denied."), n.sendStatus(403))
    }), i
};
