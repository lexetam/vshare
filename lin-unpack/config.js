"use strict";

function e(e) {
    var r = p.parse(e);
    return r.protocol + "//" + r.host
}

function r() {
    var e = __dirname;
    return "win32" == process.platform && process.env.COMMONPROGRAMFILES ? e = n.join(process.env.COMMONPROGRAMFILES, "ChaosGroup") : "darwin" == process.platform && process.env.HOME ? e = n.join(process.env.HOME, ".ChaosGroup") : process.env.OLS_HOME && (e = n.join(process.env.OLS_HOME, ".ChaosGroup")), "test" == process.env.NODE_ENV && (e = n.resolve(process.env.TEST_ROOT, "files/flp")), n.resolve(e, "config.json")
}

function o() {
    return /^(darwin|win32)/.test(process.platform) ? "auto" : "none"
}

function t() {
    this.configPath = r(), h.sync(n.dirname(this.configPath)), this.workDir = n.dirname(this.configPath), this.backend = "https://ols.chaosgroup.com", this.login = "https://accounts.chaosgroup.com/", this.liveReloadPort = 35729, this.proxy = {
        host: "",
        port: 0,
        type: o(),
        username: "",
        password: ""
    }, this.ssl = {
        crt: n.normalize(this.workDir + "/ssl/cert.crt"),
        key: n.normalize(this.workDir + "/ssl/cert.key"),
        csr: n.normalize(this.workDir + "/ssl/cert.csr"),
        ca: [l.readFileSync(c.rootCrtPath, {
            encoding: "ascii"
        }), l.readFileSync(c.intermediateCrtPath, {
            encoding: "ascii"
        })]
    }, this.webServer = {
        hostname: "0.0.0.0",
        port: 30304
    }, this.vrlservice = {
        enabled: !0,
        port: 30314,
        binPath: n.resolve(n.dirname(process.execPath), "./bin/vrlservice" + n.extname(process.execPath)),
        oldConfigPath: n.normalize(this.workDir + "/vrlservice.xml")
    }, this.offline = n.normalize(this.workDir + "/offline.bin"), this.log = {
        prettyPrint: !0,
        name: "FLP",
        system: {
            file: "debug"
        },
        perf: {
            file: "debug"
        },
        user: {
            file: "debug"
        },
        directory: n.join(this.workDir, "logs")
    }, "development" === process.env.NODE_ENV && (this.log.system.console = this.log.user.console = this.log.perf.console = "debug", this.vrlservice.binPath = n.resolve(__dirname, "./bin/vrlservice" + ("win32" === process.platform ? ".exe" : ".bin"))), this.monitoring = {
        interval: 60,
        keepHistoryFor: 72
    }, this.bundlePath = n.resolve(this.workDir, "bundles.json"), "test" == process.env.NODE_ENV && (this.log.directory = n.resolve(this.workDir, "../../flp_logs"), this.log.system.console = this.log.user.console = this.log.perf.console = "error")
}

function s(e) {
    return "boolean" == typeof e ? e : "true" === e
}

function i(e) {
    try {
        var r = 0;
        return l.readdirSync(e).forEach(function(o) {
            r += l.statSync(n.join(e, o)).size
        }), r
    } catch (o) {
        return console.error("Unable to obtain total log size, exception:"), console.error(o), -1
    }
}
var n = require("path"),
    l = require("fs"),
    h = require("mkdirp"),
    c = require("ols-certificate-utils"),
    p = require("url");
t.prototype.applyConfig = function(r) {
    try {
        var t = r || JSON.parse(l.readFileSync(this.configPath));
        this.backend = e(t.portal), this.proxy.host = t.proxy.host || "", this.proxy.port = t.proxy.port || 0, this.proxy.type = t.proxy.type || o(), this.proxy.username = t.proxy.username || "", this.proxy.password = t.proxy.password || "", this.webServer.hostname = t.local.vrolHost, this.webServer.port = t.local.vrolPort, this.vrlservice.enabled = s(t.local.dongleEnabled), this.vrlservice.port = t.local.vrlPort, this.log.system.file = this.log.user.file = t.diagnostics.level
    } catch (i) {
        this.saveConfig()
    }
}, t.prototype.saveConfig = function() {
    var e = {
        local: {
            vrolHost: this.webServer.hostname,
            vrolPort: this.webServer.port,
            dongleEnabled: this.vrlservice.enabled,
            vrlPort: this.vrlservice.port
        },
        portal: this.backend,
        diagnostics: {
            level: this.log.system.file
        },
        proxy: this.proxy
    };
    try {
        h.sync(n.dirname(this.configPath)), l.writeFileSync(this.configPath, JSON.stringify(e, null, "\t"))
    } catch (r) {
        throw console.error("Unable to save config file, exception:"), console.error(r), r
    }
}, t.prototype.getValues = function() {
    return {
        file: this.configPath,
        portal: this.backend,
        proxy: this.proxy,
        diagnostics: {
            logFile: this.log.directory,
            size: i(this.log.directory),
            level: this.log.system.file
        },
        local: {
            vrolHost: this.webServer.hostname,
            vrolPort: this.webServer.port,
            dongleEnabled: this.vrlservice.enabled,
            vrlPort: this.vrlservice.port
        }
    }
}, t.prototype.getVrolPort = function() {
    return this.webServer.port
}, t.prototype.getDongleServerPort = function() {
    return this.vrlservice.port
}, t.prototype.getProxy = function() {
    var e = "";
    return "none" !== this.proxy.type && this.proxy.host && this.proxy.port && ("http" === this.proxy.type ? e = "http://" : "https" === this.proxy.type && (e = "https://"), this.proxy.username && this.proxy.password && (e += this.proxy.username + ":" + this.proxy.password + "@"), e += this.proxy.host + ":" + this.proxy.port), e
}, module.exports = new t;
