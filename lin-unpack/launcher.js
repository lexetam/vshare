"use strict";
var e, r, o, s, t, c;
process.getuid && process.seteuid && process.seteuid(process.getuid()), void 0 !== process.env.XAUTHORITY && 0 == process.env.XAUTHORITY.indexOf("/tmp") && delete process.env.XAUTHORITY, e = require("url"), r = require("opn"), o = function(e) {
    var r = process.argv.indexOf(e);
    return r >= 0 && r < process.argv.length - 1 ? process.argv[r + 1] : ""
}, s = o("--ols_home"), "" != s && (console.log("Reading config from", s), process.env.OLS_HOME = s), t = require("./config"), t.applyConfig(), c = {
    protocol: "http:",
    hostname: "localhost",
    port: t.getVrolPort(),
    hash: "/firstRun",
    pathname: "/react/"
}, r(e.format(c));
