webpackJsonp([0], {
    0: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var r = n(1),
            l = (a(r), n(31)),
            o = n(169),
            i = n(292),
            s = n(385);
        n(829), n(866), o.registry.addFactory("history", [], i.createStatefulHistory);
        var u = new o.Context(o.registry);
        (0, l.render)(u.create(s.createRouter), document.getElementById("main-container")), window.addEventListener("dragover", function(e) {
            return e.preventDefault()
        }, !1), window.addEventListener("drop", function(e) {
            return e.preventDefault()
        }, !1)
    },
    169: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Registry = t.AltRegistry = t.Context = t.registry = void 0;
        var a = n(170),
            r = n(249);
        t.registry = new a.AltRegistry;
        t.Context = r.Context, t.AltRegistry = a.AltRegistry, t.Registry = r.Registry
    },
    292: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r() {
            var e = (0, o.default)(s.default);
            return s.default.listen(function(t) {
                e.pathname = t.pathname
            }), (0, u.assign)(e, f), e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = n(246),
            o = a(l);
        t.createStatefulHistory = r;
        var i = n(293),
            s = a(i),
            u = n(379),
            c = n(381),
            d = a(c),
            f = {
                pushRelative: function(e, t) {
                    var n = (0, d.default)(e).absoluteTo(this.pathname).toString();
                    this.push(n, t)
                }
            }
    },
    293: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(294),
            r = n(357);
        t.default = (0, a.useRouterHistory)(r.createHashHistory)({
            queryKey: !1
        })
    },
    385: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e, t, n, a, r, l, s, u, d, f, p, m) {
            return o.default.createElement(i.Router, {
                history: c.default
            }, o.default.createElement(i.Route, {
                name: "Home",
                path: "/",
                component: e
            }, o.default.createElement(i.IndexRoute, {
                component: n
            }), o.default.createElement(i.Route, {
                path: "bundle/:bundleName",
                component: a
            }), o.default.createElement(i.Route, {
                name: "Borrow licenses for offline usage",
                path: "borrow(/:bundleName)",
                component: r
            }), u, d, f, p, o.default.createElement(i.Route, {
                name: "About",
                path: "/about",
                component: l
            }), o.default.createElement(i.Route, {
                name: "Settings",
                path: "settings",
                component: s
            }), o.default.createElement(i.Route, {
                name: "Licenses",
                path: "/licenses",
                component: m
            })), o.default.createElement(i.Route, {
                name: "Enable Online Licensing",
                path: "/firstRun",
                component: t
            }), o.default.createElement(i.Route, {
                name: "Error",
                path: "*",
                component: S.ErrorPage
            }))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.createRouter = r;
        var l = n(1),
            o = a(l),
            i = n(294),
            s = n(169),
            u = n(293),
            c = a(u),
            d = n(386),
            f = a(d),
            p = n(613),
            m = a(p),
            E = n(614),
            h = n(616),
            g = a(h),
            v = n(632),
            y = a(v),
            b = n(769),
            N = a(b),
            S = n(779),
            w = n(780),
            T = a(w),
            _ = n(801),
            O = n(809),
            x = n(813),
            C = n(822),
            I = n(824),
            L = a(I);
        s.registry.addFactory(r, [f.default, m.default, g.default, y.default, T.default, E.createAboutPage, N.default, _.createOfflineBorrowWizard, C.createBorrowedSummaryRoute, O.createNotificationsRoute, x.createOfflineActivationRoute, L.default])
    },
    386: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e, t, n) {
            return function(a) {
                function r() {
                    return (0, o.default)(this, r), (0, c.default)(this, a.apply(this, arguments))
                }
                return (0, f.default)(r, a), r.prototype.componentWillMount = function() {
                    e.getStatus()
                }, r.prototype.render = function() {
                    var a = this.props,
                        r = a.routes,
                        l = a.children,
                        o = a.params;
                    return m.default.createElement(v.default, {
                        actions: e,
                        store: t
                    }, m.default.createElement(b.Header, {
                        renameSite: e.renameSite,
                        logoUrl: "/img/chaos_logo.svg",
                        menu: m.default.createElement(n, null),
                        routes: r
                    }, m.default.createElement(N.StatusBar, {
                        pathname: o.bundleName,
                        callbacks: e
                    })), m.default.cloneElement(l, e))
                }, (0, s.default)(r, null, [{
                    key: "defaultProps",
                    get: function() {
                        return {
                            routes: [],
                            children: null
                        }
                    }
                }, {
                    key: "propTypes",
                    get: function() {
                        return {
                            routes: h.default.array,
                            children: h.default.oneOfType([h.default.arrayOf(h.default.element), h.default.element])
                        }
                    }
                }]), r
            }(m.default.Component)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = n(171),
            o = a(l),
            i = n(279),
            s = a(i),
            u = n(172),
            c = a(u),
            d = n(241),
            f = a(d);
        t.default = r;
        var p = n(1),
            m = a(p),
            E = n(387),
            h = a(E),
            g = n(389),
            v = a(g),
            y = n(169),
            b = n(401),
            N = n(408),
            S = n(587),
            w = n(588),
            T = a(w),
            _ = n(590),
            O = a(_);
        y.registry.addFactory(r, [T.default, O.default, S.createMenu])
    },
    401: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Header = void 0;
        var r = n(171),
            l = a(r),
            o = n(279),
            i = a(o),
            s = n(172),
            u = a(s),
            c = n(241),
            d = a(c),
            f = n(1),
            p = a(f),
            m = n(387),
            E = a(m),
            h = n(402),
            g = a(h),
            v = n(379),
            y = a(v);
        t.Header = function(e) {
            function t() {
                return (0, l.default)(this, t), (0, u.default)(this, e.apply(this, arguments))
            }
            return (0, d.default)(t, e), t.prototype.render = function() {
                var e = this,
                    t = {
                        low: "info",
                        medium: "warning",
                        high: "danger"
                    },
                    n = this.props.status,
                    a = n.user,
                    r = n.site,
                    l = y.default.get(this.props, "status.notifications.flpVersionDownloaded", null),
                    o = y.default.get(this.props, "status.notifications.flpVersion", null),
                    i = ["expiringOnline", "expiringOffline", "expiringDongle"].map(function(t) {
                        var n = y.default.get(e.props, "status.notifications." + t + ".expiration", []);
                        return n.mode = t.substr("expiring".length), n
                    }),
                    s = y.default.filter(y.default.mapValues(y.default.get(this.props, "status.notifications", {}), function(e, t) {
                        return e.key = t, e
                    }), function(e) {
                        return "medium" === e.severity || "high" === e.severity
                    });
                return p.default.createElement("div", {
                    className: "container header",
                    id: "header"
                }, p.default.createElement("div", {
                    className: "row logo"
                }, p.default.createElement("div", {
                    className: "col-xs-12"
                }, p.default.createElement("a", {
                    href: "#/"
                }, p.default.createElement("img", {
                    src: this.props.logoUrl,
                    alt: "Chaos Group logo",
                    id: "logo"
                })))), p.default.createElement("div", {
                    className: "row"
                }, p.default.createElement("div", {
                    className: "col-xs-12 col-sm-6",
                    style: {
                        padding: "10px 15px",
                        fontSize: "1.25em"
                    }
                }, p.default.createElement("strong", {
                    className: "text-uppercase"
                }, "License Server"), p.default.createElement("span", null, " | "), p.default.createElement("span", {
                    id: "version"
                }, this.props.status.version), p.default.createElement("br", null), p.default.createElement("span", {
                    className: "text-muted",
                    style: {
                        fontSize: "0.75em"
                    }
                }, "Copyright ©2017 ", p.default.createElement("a", {
                    href: "http://www.chaosgroup.com/",
                    target: "_blank"
                }, "Chaos Software"))), p.default.createElement("div", {
                    className: "col-xs-12 col-sm-6 text-right"
                }, p.default.createElement("div", {
                    id: "userName",
                    className: "userName"
                }, a ? p.default.createElement("img", {
                    src: "/img/user.svg"
                }) : null, a), p.default.createElement("div", {
                    id: "siteName",
                    className: "siteName"
                }, r ? p.default.createElement("img", {
                    src: "/img/monitor.svg"
                }) : null, p.default.createElement(g.default, {
                    text: r,
                    onSave: function(t) {
                        return e.props.renameSite(t)
                    }
                })), this.props.menu)), p.default.createElement("div", {
                    className: "row"
                }, p.default.cloneElement(this.props.children, this.props)), null != l ? p.default.createElement("div", {
                    className: "row alert-warning"
                }, p.default.createElement("div", {
                    className: "col-xs-12 text-uppercase"
                }, p.default.createElement("strong", {
                    style: {
                        fontSize: "1.25em"
                    }
                }, "Update available:"), "  License Server | ", l.versionStr, "  release date: ", new Date(l.releaseDate).toDateString(), " ", p.default.createElement("a", {
                    className: "btn btn-sm btn-primary pull-right",
                    target: "_blank",
                    href: "/update"
                }, "Install"))) : null, null != o && null == o.directDownload ? p.default.createElement("div", {
                    className: "row alert-warning"
                }, p.default.createElement("div", {
                    className: "col-xs-12 text-uppercase"
                }, p.default.createElement("strong", {
                    style: {
                        fontSize: "1.25em"
                    }
                }, "Update available:"), "  License Server | ", o.versionStr, "  release date: ", new Date(o.releaseDate).toDateString(), " ", p.default.createElement("a", {
                    className: "btn btn-sm btn-primary pull-right",
                    target: "_blank",
                    href: o.downloadUrl
                }, "Download"))) : null, i.map(function(e) {
                    return e && e.length ? p.default.createElement("div", {
                        key: e.mode,
                        className: "row alert-" + (t[e.severity] || "warning")
                    }, p.default.createElement("div", {
                        className: "col-xs-12 text-uppercase"
                    }, p.default.createElement("strong", {
                        style: {
                            fontSize: "1.25em"
                        }
                    }, e.mode, " licenses expire soon:"), p.default.createElement("div", null, e.map(function(e) {
                        return e.productLabel + " (" + new Date(e.expiryDate).toDateString() + ")"
                    }).join(", ")))) : null
                }), y.default.map(s, function(n, a) {
                    return p.default.createElement("div", {
                        key: a,
                        className: "row alert-" + t[n.severity]
                    }, p.default.createElement("div", {
                        className: "col-xs-6 text-uppercase"
                    }, p.default.createElement("strong", {
                        style: {
                            fontSize: "1.25em"
                        }
                    }, n.title), p.default.createElement("div", null, n.message)), p.default.createElement("div", {
                        className: "col-xs-6 text-uppercase text-right"
                    }, (n.actions || []).map(function(e, t) {
                        return p.default.createElement("a", {
                            key: t,
                            style: {
                                margin: "5px"
                            },
                            className: "btn btn-sm btn-primary",
                            href: e.link
                        }, e.label)
                    }), p.default.createElement("a", {
                        className: "btn btn-sm btn-text",
                        onClick: function() {
                            return e.props.hideNotification(n.key)
                        }
                    }, "Dismiss")))
                }))
            }, (0, i.default)(t, null, [{
                key: "defaultProps",
                get: function() {
                    return {
                        logoUrl: "",
                        status: {
                            dongle: {
                                enabled: !1,
                                available: !1
                            },
                            offline: {
                                enabled: !1,
                                available: !1
                            },
                            online: {
                                enabled: !1,
                                available: !1
                            },
                            site: null,
                            user: null,
                            version: ""
                        },
                        menu: null,
                        getTourData: function() {
                            return {
                                id: "header"
                            }
                        },
                        renameSite: function() {},
                        children: null
                    }
                }
            }, {
                key: "propTypes",
                get: function() {
                    return {
                        dongle: E.default.shape({
                            enabled: E.default.bool,
                            available: E.default.bool
                        }),
                        online: E.default.shape({
                            enabled: E.default.bool,
                            available: E.default.bool
                        }),
                        offline: E.default.shape({
                            enabled: E.default.bool,
                            available: E.default.bool
                        }),
                        logoUrl: E.default.string,
                        status: E.default.object,
                        getTourData: E.default.func,
                        renameSite: E.default.func,
                        menu: E.default.element,
                        children: E.default.oneOfType([E.default.arrayOf(E.default.element), E.default.element])
                    }
                }
            }]), t
        }(p.default.Component)
    },
    402: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(403),
            l = a(r),
            o = n(171),
            i = a(o),
            s = n(279),
            u = a(s),
            c = n(172),
            d = a(c),
            f = n(241),
            p = a(f),
            m = n(1),
            E = a(m),
            h = n(387),
            g = a(h),
            v = function(e) {
                function t(n) {
                    (0, i.default)(this, t);
                    var a = (0, d.default)(this, e.call(this, n));
                    return a.state = {
                        text: n.text,
                        editing: n.editing
                    }, a
                }
                return (0, p.default)(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    this.setState(e)
                }, t.prototype._edit = function() {
                    var e = this;
                    this.setState({
                        editing: !0
                    }), (0, l.default)(function() {
                        e.refs.editor.focus(), e.refs.editor.select()
                    })
                }, t.prototype._save = function() {
                    var e = this;
                    this.refs.editor.value && (this.setState({
                        text: this.refs.editor.value,
                        editing: !1
                    }), (0, l.default)(function() {
                        e.props.onSave(e.state.text)
                    }))
                }, t.prototype._cancel = function() {
                    this.setState({
                        editing: !1
                    })
                }, t.prototype._keyAction = function(e) {
                    13 === e.keyCode ? this._save() : 27 === e.keyCode && this._cancel()
                }, t.prototype._renderElement = function() {
                    var e = this;
                    return this.state.editing ? E.default.createElement("span", {
                        style: {
                            display: "inline-block"
                        }
                    }, E.default.createElement("input", {
                        type: "text",
                        ref: "editor",
                        className: "input-sm",
                        style: {
                            minWidth: 200,
                            border: "1px solid #000000"
                        },
                        onKeyDown: function(t) {
                            return e._keyAction(t)
                        },
                        defaultValue: this.state.text
                    }), E.default.createElement("button", {
                        onClick: function() {
                            return e._save()
                        },
                        style: {
                            border: "1px solid black",
                            background: "transparent",
                            borderLeftWidth: 0,
                            top: -2,
                            position: "relative"
                        }
                    }, E.default.createElement("img", {
                        src: "img/ok.svg",
                        style: {
                            height: 26,
                            padding: "5px"
                        }
                    }))) : E.default.createElement("span", {
                        style: {
                            cursor: "pointer"
                        },
                        onClick: function() {
                            return e._edit()
                        }
                    }, this.state.text)
                }, t.prototype.render = function() {
                    return this._renderElement()
                }, (0, u.default)(t, null, [{
                    key: "propTypes",
                    get: function() {
                        return {
                            text: g.default.string,
                            editing: g.default.bool,
                            onSave: g.default.func
                        }
                    }
                }, {
                    key: "defaultProps",
                    get: function() {
                        return {
                            text: "",
                            editing: !1,
                            onSave: function() {}
                        }
                    }
                }]), t
            }(E.default.Component);
        t.default = v
    },
    403: function(e, t, n) {
        e.exports = {
            default: n(404),
            __esModule: !0
        }
    },
    404: function(e, t, n) {
        n(405), e.exports = n(184).setImmediate
    },
    405: function(e, t, n) {
        var a = n(182),
            r = n(406);
        a(a.G + a.B, {
            setImmediate: r.set,
            clearImmediate: r.clear
        })
    },
    406: function(e, t, n) {
        var a, r, l, o = n(185),
            i = n(407),
            s = n(215),
            u = n(194),
            c = n(183),
            d = c.process,
            f = c.setImmediate,
            p = c.clearImmediate,
            m = c.MessageChannel,
            E = 0,
            h = {},
            g = "onreadystatechange",
            v = function() {
                var e = +this;
                if (h.hasOwnProperty(e)) {
                    var t = h[e];
                    delete h[e], t()
                }
            },
            y = function(e) {
                v.call(e.data)
            };
        f && p || (f = function(e) {
            for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
            return h[++E] = function() {
                i("function" == typeof e ? e : Function(e), t)
            }, a(E), E
        }, p = function(e) {
            delete h[e]
        }, "process" == n(207)(d) ? a = function(e) {
            d.nextTick(o(v, e, 1))
        } : m ? (r = new m, l = r.port2, r.port1.onmessage = y, a = o(l.postMessage, l, 1)) : c.addEventListener && "function" == typeof postMessage && !c.importScripts ? (a = function(e) {
            c.postMessage(e + "", "*")
        }, c.addEventListener("message", y, !1)) : a = g in u("script") ? function(e) {
            s.appendChild(u("script"))[g] = function() {
                s.removeChild(this), v.call(e)
            }
        } : function(e) {
            setTimeout(o(v, e, 1), 0)
        }), e.exports = {
            set: f,
            clear: p
        }
    },
    407: function(e, t) {
        e.exports = function(e, t, n) {
            var a = void 0 === n;
            switch (t.length) {
                case 0:
                    return a ? e() : e.call(n);
                case 1:
                    return a ? e(t[0]) : e.call(n, t[0]);
                case 2:
                    return a ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
                case 3:
                    return a ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
                case 4:
                    return a ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
            }
            return e.apply(n, t)
        }
    },
    408: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.StatusBar = void 0;
        var r = n(409),
            l = a(r),
            o = n(171),
            i = a(o),
            s = n(279),
            u = a(s),
            c = n(172),
            d = a(c),
            f = n(241),
            p = a(f),
            m = n(1),
            E = a(m),
            h = n(387),
            g = a(h),
            v = n(414),
            y = a(v),
            b = n(416),
            N = n(577),
            S = n(578),
            w = n(581),
            T = n(580);
        t.StatusBar = function(e) {
            function t() {
                return (0, i.default)(this, t), (0, d.default)(this, e.apply(this, arguments))
            }
            return (0, p.default)(t, e), t.prototype.render = function() {
                var e = this.props.status,
                    t = e.dongle,
                    n = e.offline,
                    a = e.online,
                    r = function(e) {
                        var t = e.enabled,
                            n = e.available;
                        return t ? n ? "status-icon-ok" : "status-icon-warning" : "status-icon-disabled"
                    },
                    o = " ➟ ",
                    i = E.default.createElement("span", {
                        className: "spaced-items"
                    }, E.default.createElement("span", {
                        className: "status-icon " + r(a)
                    }), n.enabled ? E.default.createElement(T.OfflineIcon, null) : null, "Online Licensing"),
                    s = E.default.createElement("span", null, E.default.createElement("span", {
                        className: "status-icon " + r(t)
                    }), " Dongle"),
                    u = E.default.createElement("div", {
                        className: t.enabled ? "details" : "inline"
                    }, E.default.createElement(w.DongleSummary, (0, l.default)({}, t, this.props.callbacks, {
                        setDongleState: this.props.callbacks.setDongleState,
                        readonly: this.props.status.readonly,
                        platform: this.props.status.platform
                    }))),
                    c = "status-dropdown btn-sm statusbar-btn",
                    d = this.props.bundles[this.props.pathname],
                    f = d ? [d.label, d.version].join(" ") : "Oops!";
                return E.default.createElement("div", null, E.default.createElement("div", {
                    className: "col-xs-12 col-sm-6",
                    id: "breadcrumbs"
                }, E.default.createElement(y.default, {
                    separator: o,
                    routes: this.props.routes,
                    displayMissingText: f,
                    setDocumentTitle: !0
                })), E.default.createElement("div", {
                    className: "col-xs-12 col-sm-6 text-right"
                }, E.default.createElement("div", {
                    id: "statusbar"
                }, E.default.createElement(b.DropdownButton, {
                    id: "online-status-dropdown",
                    pullRight: !0,
                    title: i,
                    className: c
                }, E.default.createElement("div", {
                    className: "details"
                }, E.default.createElement(N.OnlineSummary, (0, l.default)({}, a, this.props.callbacks, {
                    readonly: this.props.status.readonly,
                    offlineEnabled: n.enabled
                }), E.default.createElement(S.OfflineSummary, (0, l.default)({}, n, {
                    onlineEnabled: a.enabled,
                    isOnline: Boolean(a.available),
                    onBorrow: this.props.callbacks.onBorrow,
                    onRelease: this.props.callbacks.onRelease,
                    onRenew: this.props.callbacks.renew,
                    readonly: this.props.status.readonly
                }))))), t.enabled ? E.default.createElement(b.DropdownButton, {
                    id: "dongle-status-dropdown",
                    pullRight: !0,
                    title: t.enabled ? s : enableDongle,
                    className: c,
                    children: u
                }) : u)))
            }, (0, u.default)(t, null, [{
                key: "defaultProps",
                get: function() {
                    return {
                        status: {
                            enabled: !1,
                            available: !1
                        }
                    }
                }
            }, {
                key: "propTypes",
                get: function() {
                    return {
                        online: g.default.object,
                        offline: g.default.object,
                        dongle: g.default.object,
                        status: g.default.shape({
                            enabled: g.default.bool,
                            available: g.default.bool
                        })
                    }
                }
            }]), t
        }(E.default.Component)
    },
    577: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.OnlineSummary = void 0;
        var r = n(171),
            l = a(r),
            o = n(279),
            i = a(o),
            s = n(172),
            u = a(s),
            c = n(241),
            d = a(c),
            f = n(1),
            p = a(f),
            m = n(387),
            E = a(m),
            h = n(294);
        t.OnlineSummary = function(e) {
            function t() {
                (0, l.default)(this, t);
                var n = (0, u.default)(this, e.call(this));
                return n.state = {
                    confirmModal: !1
                }, n
            }
            return (0, d.default)(t, e), t.prototype.renderActions = function() {
                var e = this,
                    t = null;
                this.props.enabled && this.props.available ? t = this.state.confirmModal ? p.default.createElement("div", {
                    className: "confirm-disable-online"
                }, p.default.createElement("h5", null, "Are you sure you want to deactivate your license server?"), p.default.createElement("span", null, "You will not be able to use your online or borrowed licenses."), p.default.createElement("div", {
                    className: "confirm-disable-buttons"
                }, p.default.createElement("button", {
                    className: "btn btn-default pull-right",
                    onClick: function() {
                        return e.setState({
                            confirmModal: !1
                        })
                    }
                }, "No"), p.default.createElement("button", {
                    "data-name": "confirm-disable",
                    className: "btn btn-danger pull-right",
                    onClick: function() {
                        e.setState({
                            confirmModal: !1
                        }), e.props.disableOnline()
                    }
                }, "Yes"))) : p.default.createElement("a", {
                    "data-name": "disable-online",
                    className: "btn btn-default" + (this.props.readonly ? " disabled" : ""),
                    onClick: this.props.readonly ? function() {} : function() {
                        return e.setState({
                            confirmModal: !0
                        })
                    },
                    title: "Disable Online Licensing"
                }, "Deactivate") : this.props.enabled || this.props.offlineEnabled || (t = p.default.createElement("a", {
                    className: "btn btn-success",
                    onClick: this.props.enableOnline,
                    title: "Enable Online Licensing"
                }, this.props.available ? "Enable" : "Offline Activation"));
                var n = !this.state.confirmModal && !this.props.offlineEnabled && this.props.enabled && this.props.available;
                return p.default.createElement("div", {
                    className: "row"
                }, n ? p.default.createElement("div", {
                    className: "col-xs-6"
                }, p.default.createElement(h.Link, {
                    className: "btn-height text-muted",
                    onClick: this.props.onBorrow
                }, "Use licenses offline")) : null, p.default.createElement("div", {
                    style: {
                        paddingTop: "15px"
                    },
                    className: "text-right col-xs-" + (n ? "6" : "12")
                }, t))
            }, t.prototype.renderSuggestions = function() {
                var e = this.props.enabled ? p.default.createElement("div", {
                    className: "col-xs-12"
                }, " ", p.default.createElement(h.Link, {
                    to: "/borrow-offline",
                    onClick: this.props.onBorrow,
                    className: "text-muted btn-height"
                }, "Use licenses offline")) : null;
                return p.default.createElement("div", {
                    className: "row"
                }, e, p.default.createElement("div", {
                    className: "col-xs-12"
                }, "Connection might be unavailable due to the following reasons:", p.default.createElement("ul", {
                    className: "summary-help"
                }, p.default.createElement("li", null, "Proxy settings are configured incorrectly", p.default.createElement("a", {
                    className: "pull-right text-uppercase",
                    onClick: this.props.onConfigureProxy
                }, "Configure")), p.default.createElement("hr", null), p.default.createElement("li", null, "Firewall blocks license server connections"), p.default.createElement("hr", null), p.default.createElement("li", null, "Internet connection is unavailable")), p.default.createElement("div", {
                    className: "troubleshooting-info"
                }, "For more information about possible solutions to these issues, please visit the", " ", p.default.createElement("a", {
                    target: "_blank",
                    href: "https://docs.chaosgroup.com/display/LICENSE/Troubleshooting"
                }, "documentation page"))))
            }, t.prototype.render = function() {
                return p.default.createElement("div", {
                    className: "container-fluid"
                }, p.default.createElement("div", {
                    className: "text-uppercase"
                }, "Online licensing"), this.props.available ? null : this.renderSuggestions(), this.renderActions(), this.props.children)
            }, (0, i.default)(t, null, [{
                key: "defaultProps",
                get: function() {
                    return {
                        enabled: !1,
                        available: !1,
                        readonly: !0
                    }
                }
            }, {
                key: "propTypes",
                get: function() {
                    return {
                        enabled: E.default.bool,
                        available: E.default.bool,
                        readonly: E.default.bool,
                        enableOnline: E.default.func,
                        disableOnline: E.default.func,
                        offlineEnabled: E.default.bool,
                        onConfigure: E.default.func,
                        onConfigureProxy: E.default.func,
                        onBorrow: E.default.func
                    }
                }
            }]), t
        }(p.default.Component)
    },
    578: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.OfflineSummary = void 0;
        var r = n(171),
            l = a(r),
            o = n(279),
            i = a(o),
            s = n(172),
            u = a(s),
            c = n(241),
            d = a(c),
            f = n(1),
            p = a(f),
            m = n(387),
            E = a(m),
            h = n(579);
        t.OfflineSummary = function(e) {
            function t() {
                (0, l.default)(this, t);
                var n = (0, u.default)(this, e.call(this));
                return n.state = {
                    confirmModal: !1
                }, n
            }
            return (0, d.default)(t, e), t.prototype.renderDisabled = function() {
                return null
            }, t.prototype.renderUnavailable = function() {
                return p.default.createElement("div", {
                    className: "container-fluid"
                }, p.default.createElement("br", null), "Offline licensing might be unavailable due to the following reasons:", p.default.createElement("ul", null, p.default.createElement("li", null, "License server update is necessary", p.default.createElement("a", {
                    className: "pull-right text-uppercase",
                    target: "_blank",
                    href: "https://download.chaosgroup.com/license-server"
                }, "Check")), p.default.createElement("li", null, "Borrowed licenses expired", p.default.createElement("a", {
                    className: "pull-right text-uppercase",
                    onClick: this.props.onRenew
                }, "Renew"))), p.default.createElement("hr", null), this._renderReleaseButton())
            }, t.prototype.componentWillReceiveProps = function(e) {
                e.enabled || this.setState({
                    confirmModal: !1
                })
            }, t.prototype._renderReleaseButton = function() {
                var e = this;
                return this.props.isOnline ? this.state.confirmModal ? p.default.createElement("div", {
                    className: "confirm-disable-online"
                }, p.default.createElement("h5", null, "Are you sure you want to release your borrowed licenses?"), p.default.createElement("span", null, "You will not be able to work offline."), p.default.createElement("div", {
                    className: "confirm-disable-buttons"
                }, p.default.createElement("button", {
                    className: "btn btn-default pull-right",
                    onClick: function() {
                        return e.setState({
                            confirmModal: !1
                        })
                    }
                }, "No"), p.default.createElement("button", {
                    "data-name": "confirm-disable",
                    className: "btn btn-primary pull-right",
                    onClick: this.props.readonly ? function() {} : this.props.onRelease
                }, "Yes"))) : p.default.createElement("div", {
                    className: "row"
                }, p.default.createElement("div", {
                    className: "text-right col-xs-12"
                }, p.default.createElement("a", {
                    className: "btn btn-default" + (this.props.readonly ? " disabled" : ""),
                    onClick: this.props.readonly ? function() {} : function() {
                        return e.setState({
                            confirmModal: !0
                        })
                    },
                    title: "Release Offline Licenses"
                }, "Release"))) : null
            }, t.prototype.renderDetails = function() {
                return p.default.createElement("div", null, p.default.createElement("hr", null), p.default.createElement(h.BorrowedLicensesList, {
                    licenses: this.props.licenses,
                    renew: this.props.renew,
                    expires: this.props.expires
                }), this._renderReleaseButton())
            }, t.prototype.render = function() {
                return this.props.enabled ? this.props.available ? this.renderDetails() : this.renderUnavailable() : this.renderDisabled()
            }, (0, i.default)(t, null, [{
                key: "defaultProps",
                get: function() {
                    return {
                        onlineEnabled: !1,
                        isOnline: !1,
                        enabled: !1,
                        available: !1,
                        expires: 0,
                        renew: !1,
                        readonly: !0,
                        licenses: []
                    }
                }
            }, {
                key: "propTypes",
                get: function() {
                    return {
                        onlineEnabled: E.default.bool,
                        isOnline: E.default.bool,
                        enabled: E.default.bool,
                        available: E.default.bool,
                        expires: E.default.oneOfType([E.default.number, E.default.string]),
                        renew: E.default.bool,
                        readonly: E.default.bool,
                        licenses: E.default.array,
                        onBorrow: E.default.func,
                        onRelease: E.default.func,
                        onRenew: E.default.func
                    }
                }
            }]), t
        }(p.default.Component)
    },
    579: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.BorrowedLicensesList = void 0;
        var r = n(171),
            l = a(r),
            o = n(279),
            i = a(o),
            s = n(172),
            u = a(s),
            c = n(241),
            d = a(c),
            f = n(1),
            p = a(f),
            m = n(387),
            E = a(m),
            h = n(580);
        t.BorrowedLicensesList = function(e) {
            function t() {
                return (0, l.default)(this, t), (0, u.default)(this, e.apply(this, arguments))
            }
            return (0, d.default)(t, e), t.prototype.render = function() {
                var e = this.props.licenses;
                return p.default.createElement("div", {
                    className: "row"
                }, e.length > 0 ? p.default.createElement("div", {
                    className: "col-xs-12"
                }, p.default.createElement("div", {
                    className: "text-muted",
                    "data-expiration": !0
                }, p.default.createElement(h.OfflineIcon, null), "Licenses available offline until ", new Date(this.props.expires).toDateString(), this.props.renew ? p.default.createElement("span", {
                    className: "autokeep"
                }) : null), p.default.createElement("table", {
                    className: "table table-condensed"
                }, p.default.createElement("thead", {
                    className: "text-muted"
                }, p.default.createElement("tr", null, p.default.createElement("td", null, "Product Name"), p.default.createElement("td", {
                    className: "text-right"
                }, "Interface"), p.default.createElement("td", {
                    className: "text-right"
                }, "Render"), p.default.createElement("td", {
                    className: "text-right"
                }, "Distributed"))), p.default.createElement("tbody", null, e.map(function(e, t) {
                    return p.default.createElement("tr", {
                        key: t
                    }, p.default.createElement("td", null, e.productLabel), p.default.createElement("td", {
                        className: "text-right"
                    }, e[1]), p.default.createElement("td", {
                        className: "text-right"
                    }, e[2]), p.default.createElement("td", {
                        className: "text-right"
                    }, e[4]))
                })))) : p.default.createElement("div", {
                    className: "col-xs-12 text-muted"
                }, "No licenses are borrowed for offline usage."))
            }, (0, i.default)(t, null, [{
                key: "propTypes",
                get: function() {
                    return {
                        licenses: E.default.arrayOf(E.default.shape({
                            1: E.default.number,
                            2: E.default.number,
                            4: E.default.number
                        })),
                        expires: E.default.oneOfType([E.default.string, E.default.number]),
                        renew: E.default.bool
                    }
                }
            }, {
                key: "defaultProps",
                get: function() {
                    return {
                        licenses: [],
                        renew: !1,
                        expires: null
                    }
                }
            }]), t
        }(p.default.Component)
    },
    580: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r() {
            return o.default.createElement("img", {
                src: "/img/lightning.svg",
                title: "You have online licenses borrowed for offline usage.",
                className: "offline-icon"
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.OfflineIcon = r;
        var l = n(1),
            o = a(l)
    },
    581: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DongleSummary = void 0;
        var r = n(582),
            l = a(r),
            o = n(171),
            i = a(o),
            s = n(279),
            u = a(s),
            c = n(172),
            d = a(c),
            f = n(241),
            p = a(f),
            m = n(1),
            E = a(m),
            h = n(387),
            g = a(h),
            v = n(586);
        t.DongleSummary = function(e) {
            function t() {
                (0, i.default)(this, t);
                var n = (0, d.default)(this, e.call(this));
                return n.state = {
                    loading: !1
                }, n
            }
            return (0, p.default)(t, e), t.prototype.componentWillReceiveProps = function(e) {
                this.props.enabled !== e.enabled && this.setState({
                    loading: !1
                })
            }, t.prototype._setDongleState = function(e) {
                this.props.readonly || (this.setState({
                    loading: !0
                }), this.props.setDongleState(e))
            }, t.prototype.renderDisabled = function() {
                return E.default.createElement("a", {
                    className: "btn btn-text btn-height" + (this.props.readonly || this.state.loading ? " disabled" : ""),
                    id: "enable-dongle",
                    "data-action": "dongle.enable",
                    onClick: this._setDongleState.bind(this, !0),
                    title: "Enable Dongle Subsystem"
                }, "Enable Dongle")
            }, t.prototype.renderUnavailable = function() {
                var e = "https://www.wibu.com/downloads-user-software.html",
                    t = encodeURI("tx_wibudownloads_downloadlist[searchTerm]"),
                    n = "WibuKey Runtime",
                    a = "",
                    r = this.props.platform;
                "win32" === r ? a = "for Windows" : "darwin" === r ? a = "for Mac" : ["freebsd", "linux", "sunos"].indexOf(r) !== -1 && (a = "for Linux");
                var l = (n + " " + a).trim().replace(/ /g, "+"),
                    o = "WibuKey_for_Users",
                    i = e + "?" + t + "=" + l + "#" + o;
                return E.default.createElement("div", {
                    className: "container-fluid"
                }, E.default.createElement(v.LoadingOverlay, {
                    loading: this.state.loading,
                    container: this,
                    message: "Please wait..."
                }), E.default.createElement("div", {
                    className: "text-uppercase dongle-summary-heading"
                }, "Dongle licensing"), E.default.createElement("div", {
                    className: "row"
                }, E.default.createElement("div", {
                    className: "col-xs-6 text-muted disable-dongle-tooltip"
                }, "Not using a dongle?"), E.default.createElement("div", {
                    className: "text-right col-xs-6"
                }, E.default.createElement("a", {
                    className: "btn btn-default" + (this.props.readonly ? " disabled" : ""),
                    "data-action": "dongle.disable",
                    onClick: this._setDongleState.bind(this, !1),
                    title: "Disable Dongle Licensing"
                }, "Disable"))), E.default.createElement("hr", null), "Dongle licensing might be unavailable due to the following reasons:", E.default.createElement("ul", {
                    className: "summary-help"
                }, E.default.createElement("li", null, "USB dongle is missing or damaged"), E.default.createElement("hr", null), E.default.createElement("li", null, "WibuKey runtime is not installed", E.default.createElement("a", {
                    className: "pull-right text-uppercase",
                    target: "_blank",
                    href: i
                }, "Install WibuKey")), E.default.createElement("hr", null), E.default.createElement("li", null, "WibuKey runtime is installed incorrectly"), E.default.createElement("hr", null), E.default.createElement("li", null, "Dongle service is not running", E.default.createElement("a", {
                    className: "pull-right text-uppercase" + (this.props.readonly ? " disabled" : ""),
                    onClick: this.props.readonly ? function() {} : this.props.restartDongle
                }, "Restart Service"))))
            }, t.prototype.renderDetails = function() {
                var e = this,
                    t = 0 !== (0, l.default)(this.props.dongles).length;
                return E.default.createElement("div", {
                    className: "container-fluid"
                }, E.default.createElement(v.LoadingOverlay, {
                    loading: this.state.loading,
                    container: this,
                    message: "Please wait..."
                }), E.default.createElement("div", {
                    className: "text-uppercase"
                }, "Dongle licensing"), E.default.createElement("div", {
                    className: "row"
                }, t ? E.default.createElement("div", {
                    className: "col-xs-12"
                }, E.default.createElement("table", {
                    className: "table table-condensed"
                }, E.default.createElement("thead", {
                    className: "text-muted"
                }, E.default.createElement("tr", null, E.default.createElement("td", null, "Serial Number"), E.default.createElement("td", {
                    className: "text-right"
                }, "Expires"))), E.default.createElement("tbody", null, (0, l.default)(this.props.dongles).map(function(t) {
                    var n = e.props.dongles[t].expires;
                    return E.default.createElement("tr", {
                        key: t
                    }, E.default.createElement("td", null, t), E.default.createElement("td", {
                        className: "text-right"
                    }, n ? new Date(n).toDateString() : "Never"))
                })))) : E.default.createElement("div", {
                    className: "col-xs-12 text-muted"
                }, "No dongles available")), E.default.createElement("hr", null), E.default.createElement("div", {
                    className: "row"
                }, E.default.createElement("div", {
                    className: "col-xs-6"
                }, t ? E.default.createElement("a", {
                    className: "btn btn-text",
                    onClick: this.props.onUpgrade,
                    title: "Upgrade Dongle Licenses"
                }, "Upgrade") : null), E.default.createElement("div", {
                    className: "text-right col-xs-6"
                }, E.default.createElement("a", {
                    className: "btn btn-danger" + (this.props.readonly ? " disabled" : ""),
                    "data-action": "dongle.disable",
                    onClick: this._setDongleState.bind(this, !1),
                    title: "Disable Dongle Licensing"
                }, "Disable"))))
            }, t.prototype.render = function() {
                return this.props.enabled ? this.props.available ? this.renderDetails() : this.renderUnavailable() : this.renderDisabled()
            }, (0, u.default)(t, null, [{
                key: "defaultProps",
                get: function() {
                    var e = function() {};
                    return {
                        platform: "",
                        enabled: !1,
                        available: !1,
                        readonly: !0,
                        dongles: {},
                        setDongleState: e,
                        restartDongle: e,
                        onUpgrade: e
                    }
                }
            }, {
                key: "propTypes",
                get: function() {
                    return {
                        platform: g.default.oneOf(["", "darwin", "freebsd", "linux", "sunos", "win32"]),
                        enabled: g.default.bool,
                        available: g.default.bool,
                        readonly: g.default.bool,
                        dongles: g.default.object,
                        setDongleState: g.default.func.isRequired,
                        restartDongle: g.default.func.isRequired,
                        onUpgrade: g.default.func.isRequired
                    }
                }
            }]), t
        }(E.default.Component)
    },
    582: function(e, t, n) {
        e.exports = {
            default: n(583),
            __esModule: !0
        }
    },
    583: function(e, t, n) {
        n(584), e.exports = n(184).Object.keys
    },
    584: function(e, t, n) {
        var a = n(219),
            r = n(203);
        n(585)("keys", function() {
            return function(e) {
                return r(a(e))
            }
        })
    },
    585: function(e, t, n) {
        var a = n(182),
            r = n(184),
            l = n(193);
        e.exports = function(e, t) {
            var n = (r.Object || {})[e] || Object[e],
                o = {};
            o[e] = t(n), a(a.S + a.F * l(function() {
                n(1)
            }), "Object", o)
        }
    },
    586: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.LoadingOverlay = void 0;
        var r = n(171),
            l = a(r),
            o = n(279),
            i = a(o),
            s = n(172),
            u = a(s),
            c = n(241),
            d = a(c),
            f = n(1),
            p = a(f),
            m = n(387),
            E = a(m),
            h = n(416);
        t.LoadingOverlay = function(e) {
            function t() {
                return (0, l.default)(this, t), (0, u.default)(this, e.apply(this, arguments))
            }
            return (0, d.default)(t, e), t.prototype.render = function() {
                return p.default.createElement(h.Modal, {
                    show: this.props.loading,
                    container: this.props.container,
                    "aria-labelledby": "contained-modal-title"
                }, p.default.createElement(h.Modal.Body, null, this.props.message))
            }, (0, i.default)(t, null, [{
                key: "propTypes",
                get: function() {
                    return {
                        loading: E.default.bool,
                        container: E.default.instanceOf(p.default.Component),
                        message: E.default.string
                    }
                }
            }, {
                key: "defaultProps",
                get: function() {
                    return {
                        loading: !1,
                        message: "LOADING"
                    }
                }
            }]), t
        }(p.default.Component);
    },
    587: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e, t, n, a) {
            var r = function(r) {
                function l() {
                    return (0, o.default)(this, l), (0, s.default)(this, r.apply(this, arguments))
                }
                return (0, c.default)(l, r), l.prototype.componentWillMount = function() {
                    e.getTourDescription(), n.getErrors()
                }, l.prototype.render = function() {
                    var n = {
                        notifications: function() {
                            return {
                                store: a,
                                value: a.getErrorCount()
                            }
                        },
                        tourData: function() {
                            return {
                                store: t,
                                value: t.getTourData()
                            }
                        }
                    };
                    return f.default.createElement(m.default, {
                        stores: n,
                        actions: {
                            actions: e
                        }
                    }, f.default.createElement(S.Menu, null))
                }, l
            }(f.default.Component);
            return r
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = n(171),
            o = a(l),
            i = n(172),
            s = a(i),
            u = n(241),
            c = a(u);
        t.createMenu = r;
        var d = n(1),
            f = a(d),
            p = n(389),
            m = a(p),
            E = n(169),
            h = n(588),
            g = a(h),
            v = n(590),
            y = a(v),
            b = n(608),
            N = n(609),
            S = n(611);
        E.registry.addFactory(r, [g.default, y.default, b.ErrorListActions, N.ErrorListStore])
    },
    588: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r() {
            document.body.click()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var l = n(250),
            o = a(l),
            i = n(171),
            s = a(i);
        t.closeDropdownButton = r;
        var u = n(169),
            c = n(589),
            d = function() {
                function e() {
                    (0, s.default)(this, e), this.generateActions.apply(this, (0, o.default)((0, c.asyncActions)("getStatus")).concat((0, o.default)((0, c.asyncActions)("getTourDescription")), (0, o.default)((0, c.asyncActions)("disableOnline")), (0, o.default)((0, c.asyncActions)("onRelease")), (0, o.default)((0, c.asyncActions)("getBundleNames")), (0, o.default)((0, c.asyncActions)("renameSite")), (0, o.default)((0, c.asyncActions)("setDongleState")), (0, o.default)((0, c.asyncActions)("hideNotification")), (0, o.default)((0, c.asyncActions)("restartDongle")), ["disable", "release", "configure", "upgrade", "renew", "onBorrow", "viewNotifications", "enableOnline", "goHome", "onUpgrade"]))
                }
                return e.prototype.onConfigure = function() {
                    window.location.href = "#/settings", r()
                }, e.prototype.onConfigureProxy = function() {
                    window.location.href = "#/settings?focus=proxy", r()
                }, e
            }();
        t.default = d, u.registry.addActions(d, [])
    },
    589: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e) {
            return [e, e + "Success", e + "Error"]
        }

        function l(e, t, n) {
            var a = {
                success: t[e + "Success"],
                error: t[e + "Error"]
            };
            if ("function" != typeof a.success || "function" != typeof a.error) throw new Error("missing proper action method for handling async outcome for " + e);
            return (0, i.default)({}, e, {
                remote: n,
                success: a.success,
                error: a.error
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(260),
            i = a(o);
        t.asyncActions = r, t.sourceMethod = l
    },
    590: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(409),
            l = a(r),
            o = n(591),
            i = a(o),
            s = n(171),
            u = a(s),
            c = n(169),
            d = n(588),
            f = a(d),
            p = n(596),
            m = a(p),
            E = n(604),
            h = n(379),
            g = a(h),
            v = function() {
                function e(t, n) {
                    (0, u.default)(this, e), this.state = {
                        bundles: {},
                        error: null,
                        tourData: {
                            error: null
                        },
                        status: {
                            online: {
                                enabled: !1,
                                available: !1
                            },
                            offline: {
                                enabled: !1,
                                available: !1,
                                expires: null,
                                licenses: [],
                                renew: !1
                            },
                            dongle: {
                                enabled: !1,
                                available: !1
                            },
                            version: "",
                            build: ""
                        }
                    }, this.pollingTimeout = 250, this.bindActions(t), this.registerAsync(n)
                }
                return e.getPlatform = function() {
                    return g.default.get(this.state, ["status", "platform"], "")
                }, e.getTourData = function() {
                    return g.default.cloneDeep(this.state.tourData)
                }, e.getOnlineEnabled = function() {
                    return g.default.get(this.state, ["status", "online", "enabled"], !1)
                }, e.getOnlineActivating = function() {
                    return g.default.get(this.state, ["status", "online", "activating"], !1)
                }, e.getOnlineStatus = function() {
                    return g.default.cloneDeep(this.state.status.online || {
                        enabled: !1,
                        available: !1
                    })
                }, e.getVersion = function() {
                    return this.state.status.version
                }, e.getBuild = function() {
                    return this.state.status.build
                }, e.prototype.activating = function() {
                    return this.isActivating() || this.isActive() && this.isReadingBundles()
                }, e.prototype.onUpgrade = function() {
                    window.location.href = g.default.get(this.state, ["status", "dongle", "url"], "") + "/upgrade"
                }, e.prototype.disableOnline = function() {
                    this.getInstance().disableOnline(), this.preventDefault()
                }, e.prototype.disableOnlineSuccess = function() {
                    this.getStatus();
                    var e = g.default.cloneDeep(this.state.status);
                    e.online = {
                        enabled: !1,
                        available: !1
                    }, this.setState({
                        status: e
                    })
                }, e.prototype.onRelease = function() {
                    this.getInstance().onRelease(), this.preventDefault()
                }, e.prototype.onReleaseSuccess = function() {
                    this.getInstance().getStatus()
                }, e.prototype.getBundleNamesSuccess = function(e) {
                    var t = {};
                    for (var n in e) t[n] = e[n];
                    this.setState({
                        bundles: t
                    })
                }, e.prototype.getBundleNamesError = function() {
                    this.setState({
                        bundles: {}
                    })
                }, e.getBundleName = function(e) {
                    return g.default.get(this.state, ["bundles", e], "")
                }, e.prototype.getStatus = function() {
                    this.getInstance().getStatus(), this.getInstance().getTourDescription(), this.getInstance().getBundleNames(), this.preventDefault()
                }, e.prototype.isActivating = function() {
                    return g.default.get(this.state, ["status", "online", "activating"], !1)
                }, e.prototype.isActive = function() {
                    return g.default.get(this.state, ["status", "online", "enabled"], !1)
                }, e.prototype.isReadingBundles = function() {
                    return 0 === g.default.keys(g.default.get(this, ["state", "bundles"])).length
                }, e.prototype.getStatusSuccess = function(e) {
                    var t = this;
                    this.setState({
                        status: e
                    }), this.activating() && !this.polling && (this.polling = !0, (0, E.exponentialBackoffRetry)(500, null, function() {
                        return t.getStatus(), t.activating() ? i.default.reject("still activating") : (t.polling = !1, i.default.resolve("done"))
                    }))
                }, e.prototype.getStatusError = function(e) {
                    this.setState({
                        error: e
                    })
                }, e.prototype.getTourDescriptionSuccess = function(e) {
                    var t = (0, l.default)({}, this.state);
                    t.tourData = e, this.setState(t)
                }, e.prototype.getTourDescriptionError = function(e) {
                    var t = (0, l.default)({}, this.state);
                    t.tourData = {
                        error: e
                    }, this.setState(t)
                }, e.prototype.onBorrow = function() {
                    var e = this.state.status.online;
                    window.location.href = e.available ? "#/borrow" : "#/borrow-offline", (0, d.closeDropdownButton)()
                }, e.prototype.viewNotifications = function() {
                    window.location.href = "#/notifications"
                }, e.getNotifications = function() {
                    return g.default.get(this.state, "status.notifications", {})
                }, e.prototype.enableOnline = function() {
                    var e = g.default.get(this.state, "status.online.available", !1);
                    window.location.href = e ? "/activate" : "#/offline-activation", (0, d.closeDropdownButton)()
                }, e.prototype.goHome = function() {
                    window.location.href = "#/"
                }, e.prototype.renameSite = function(e) {
                    this.getInstance().renameSite(e)
                }, e.prototype.renameSiteSuccess = function(e) {
                    this.getInstance().getStatus()
                }, e.prototype.renameSiteError = function(e) {
                    this.getInstance().getStatus()
                }, e.prototype.setDongleState = function(e) {
                    this.getInstance().setDongleState(e)
                }, e.prototype.setDongleStateSuccess = function() {
                    (0, d.closeDropdownButton)(), this.getStatus()
                }, e.prototype.setDongleStateError = function() {
                    (0, d.closeDropdownButton)()
                }, e.prototype.hideNotification = function(e) {
                    this.getInstance().hideNotification(e)
                }, e.prototype.hideNotificationSuccess = function() {
                    this.getStatus()
                }, e.prototype.hideNotificationError = function() {}, e.prototype.restartDongle = function() {
                    this.getInstance().restartDongle(), this.preventDefault()
                }, e.prototype.restartDongleSuccess = function() {
                    var e = this;
                    setTimeout(function() {
                        return e.getStatus()
                    }, 500)
                }, e.prototype.restartDongleError = function() {}, e
            }();
        t.default = v, c.registry.addStore(v, [f.default, m.default])
    },
    591: function(e, t, n) {
        e.exports = {
            default: n(592),
            __esModule: !0
        }
    },
    592: function(e, t, n) {
        n(238), n(176), n(220), n(593), e.exports = n(184).Promise
    },
    593: function(e, t, n) {
        "use strict";
        var a, r, l, o = n(181),
            i = n(183),
            s = n(185),
            u = n(258),
            c = n(182),
            d = n(190),
            f = n(186),
            p = n(269),
            m = n(270),
            E = n(594),
            h = n(406).set,
            g = n(595)(),
            v = "Promise",
            y = i.TypeError,
            b = i.process,
            N = i[v],
            b = i.process,
            S = "process" == u(b),
            w = function() {},
            T = !! function() {
                try {
                    var e = N.resolve(1),
                        t = (e.constructor = {})[n(217)("species")] = function(e) {
                            e(w, w)
                        };
                    return (S || "function" == typeof PromiseRejectionEvent) && e.then(w) instanceof t
                } catch (e) {}
            }(),
            _ = function(e, t) {
                return e === t || e === N && t === l
            },
            O = function(e) {
                var t;
                return !(!d(e) || "function" != typeof(t = e.then)) && t
            },
            x = function(e) {
                return _(N, e) ? new C(e) : new r(e)
            },
            C = r = function(e) {
                var t, n;
                this.promise = new e(function(e, a) {
                    if (void 0 !== t || void 0 !== n) throw y("Bad Promise constructor");
                    t = e, n = a
                }), this.resolve = f(t), this.reject = f(n)
            },
            I = function(e) {
                try {
                    e()
                } catch (e) {
                    return {
                        error: e
                    }
                }
            },
            L = function(e, t) {
                if (!e._n) {
                    e._n = !0;
                    var n = e._c;
                    g(function() {
                        for (var a = e._v, r = 1 == e._s, l = 0, o = function(t) {
                                var n, l, o = r ? t.ok : t.fail,
                                    i = t.resolve,
                                    s = t.reject,
                                    u = t.domain;
                                try {
                                    o ? (r || (2 == e._h && M(e), e._h = 1), o === !0 ? n = a : (u && u.enter(), n = o(a), u && u.exit()), n === t.promise ? s(y("Promise-chain cycle")) : (l = O(n)) ? l.call(n, i, s) : i(n)) : s(a)
                                } catch (e) {
                                    s(e)
                                }
                            }; n.length > l;) o(n[l++]);
                        e._c = [], e._n = !1, t && !e._h && A(e)
                    })
                }
            },
            A = function(e) {
                h.call(i, function() {
                    var t, n, a, r = e._v;
                    if (R(e) && (t = I(function() {
                            S ? b.emit("unhandledRejection", r, e) : (n = i.onunhandledrejection) ? n({
                                promise: e,
                                reason: r
                            }) : (a = i.console) && a.error && a.error("Unhandled promise rejection", r)
                        }), e._h = S || R(e) ? 2 : 1), e._a = void 0, t) throw t.error
                })
            },
            R = function(e) {
                if (1 == e._h) return !1;
                for (var t, n = e._a || e._c, a = 0; n.length > a;)
                    if (t = n[a++], t.fail || !R(t.promise)) return !1;
                return !0
            },
            M = function(e) {
                h.call(i, function() {
                    var t;
                    S ? b.emit("rejectionHandled", e) : (t = i.onrejectionhandled) && t({
                        promise: e,
                        reason: e._v
                    })
                })
            },
            P = function(e) {
                var t = this;
                t._d || (t._d = !0, t = t._w || t, t._v = e, t._s = 2, t._a || (t._a = t._c.slice()), L(t, !0))
            },
            D = function(e) {
                var t, n = this;
                if (!n._d) {
                    n._d = !0, n = n._w || n;
                    try {
                        if (n === e) throw y("Promise can't be resolved itself");
                        (t = O(e)) ? g(function() {
                            var a = {
                                _w: n,
                                _d: !1
                            };
                            try {
                                t.call(e, s(D, a, 1), s(P, a, 1))
                            } catch (e) {
                                P.call(a, e)
                            }
                        }): (n._v = e, n._s = 1, L(n, !1))
                    } catch (e) {
                        P.call({
                            _w: n,
                            _d: !1
                        }, e)
                    }
                }
            };
        T || (N = function(e) {
            p(this, N, v, "_h"), f(e), a.call(this);
            try {
                e(s(D, this, 1), s(P, this, 1))
            } catch (e) {
                P.call(this, e)
            }
        }, a = function(e) {
            this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
        }, a.prototype = n(268)(N.prototype, {
            then: function(e, t) {
                var n = x(E(this, N));
                return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = S ? b.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && L(this, !1), n.promise
            },
            catch: function(e) {
                return this.then(void 0, e)
            }
        }), C = function() {
            var e = new a;
            this.promise = e, this.resolve = s(D, e, 1), this.reject = s(P, e, 1)
        }), c(c.G + c.W + c.F * !T, {
            Promise: N
        }), n(216)(N, v), n(271)(v), l = n(184)[v], c(c.S + c.F * !T, v, {
            reject: function(e) {
                var t = x(this),
                    n = t.reject;
                return n(e), t.promise
            }
        }), c(c.S + c.F * (o || !T), v, {
            resolve: function(e) {
                if (e instanceof N && _(e.constructor, this)) return e;
                var t = x(this),
                    n = t.resolve;
                return n(e), t.promise
            }
        }), c(c.S + c.F * !(T && n(259)(function(e) {
            N.all(e).catch(w)
        })), v, {
            all: function(e) {
                var t = this,
                    n = x(t),
                    a = n.resolve,
                    r = n.reject,
                    l = I(function() {
                        var n = [],
                            l = 0,
                            o = 1;
                        m(e, !1, function(e) {
                            var i = l++,
                                s = !1;
                            n.push(void 0), o++, t.resolve(e).then(function(e) {
                                s || (s = !0, n[i] = e, --o || a(n))
                            }, r)
                        }), --o || a(n)
                    });
                return l && r(l.error), n.promise
            },
            race: function(e) {
                var t = this,
                    n = x(t),
                    a = n.reject,
                    r = I(function() {
                        m(e, !1, function(e) {
                            t.resolve(e).then(n.resolve, a)
                        })
                    });
                return r && a(r.error), n.promise
            }
        })
    },
    594: function(e, t, n) {
        var a = n(189),
            r = n(186),
            l = n(217)("species");
        e.exports = function(e, t) {
            var n, o = a(e).constructor;
            return void 0 === o || void 0 == (n = a(o)[l]) ? t : r(n)
        }
    },
    595: function(e, t, n) {
        var a = n(183),
            r = n(406).set,
            l = a.MutationObserver || a.WebKitMutationObserver,
            o = a.process,
            i = a.Promise,
            s = "process" == n(207)(o);
        e.exports = function() {
            var e, t, n, u = function() {
                var a, r;
                for (s && (a = o.domain) && a.exit(); e;) {
                    r = e.fn, e = e.next;
                    try {
                        r()
                    } catch (a) {
                        throw e ? n() : t = void 0, a
                    }
                }
                t = void 0, a && a.enter()
            };
            if (s) n = function() {
                o.nextTick(u)
            };
            else if (l) {
                var c = !0,
                    d = document.createTextNode("");
                new l(u).observe(d, {
                    characterData: !0
                }), n = function() {
                    d.data = c = !c
                }
            } else if (i && i.resolve) {
                var f = i.resolve();
                n = function() {
                    f.then(u)
                }
            } else n = function() {
                r.call(a, u)
            };
            return function(a) {
                var r = {
                    fn: a,
                    next: void 0
                };
                t && (t.next = r), e || (e = r, n()), t = r
            }
        }
    },
    596: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e) {
            return (0, o.default)({}, (0, c.sourceMethod)("getStatus", e, function() {
                return (0, p.promiseBody)(s.default.get("/status"))
            }), (0, c.sourceMethod)("getTourDescription", e, function() {
                return (0, p.promiseBody)(s.default.get("/tourDescription.json"))
            }), (0, c.sourceMethod)("disableOnline", e, function() {
                return (0, p.promiseBody)(s.default.post("/deactivate"))
            }), (0, c.sourceMethod)("onRelease", e, function() {
                return (0, p.promiseBody)(s.default.post("/offline/release"))
            }), (0, c.sourceMethod)("getBundleNames", e, function() {
                return (0, p.promiseBody)(s.default.get("/bundles"))
            }), (0, c.sourceMethod)("renameSite", e, function(e, t) {
                return (0, p.promiseBody)(s.default.post("/site/rename").send({
                    name: t
                }))
            }), (0, c.sourceMethod)("setDongleState", e, function(e, t) {
                return (0, p.promiseBody)(s.default.post(t ? "/dongle/enable" : "/dongle/disable"))
            }), (0, c.sourceMethod)("hideNotification", e, function(e, t) {
                return (0, p.promiseBody)(s.default.post("/notification/hide/" + t))
            }), (0, c.sourceMethod)("restartDongle", e, function() {
                return (0, p.promiseBody)(s.default.post("/dongle/disable")).then(function() {
                    return (0, p.promiseBody)(s.default.post("/dongle/enable"))
                })
            }))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = n(409),
            o = a(l);
        t.default = r;
        var i = n(597),
            s = a(i),
            u = n(169),
            c = n(589),
            d = n(588),
            f = a(d),
            p = n(603);
        u.registry.addFactory(r, [f.default])
    },
    603: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e, t) {
            return new s.default(function(n, a) {
                c.default[e](t).end(function(e, t) {
                    var r = t.body;
                    return e ? a(e) : n(r)
                })
            })
        }

        function l(e) {
            return new s.default(function(t, n) {
                e.end(function(e, a) {
                    var r = a.body;
                    return e ? n(e) : t(r)
                })
            })
        }

        function o(e) {
            return function(t, n) {
                return new s.default(function(e, t) {
                    var a = new FileReader;
                    a.onload = function() {
                        e(a.result)
                    }, a.onerror = t, a.readAsArrayBuffer(n)
                }).then(function(e) {
                    return new Uint8Array(e)
                }).then(function(t) {
                    return l(c.default.post(e).set("Content-Type", "application/octet-stream").send(t))
                })
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(591),
            s = a(i);
        t.asyncRequest = r, t.promiseBody = l, t.fileUploadToUrl = o;
        var u = n(597),
            c = a(u)
    },
    604: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e, t, n) {
            return new u.default(function(a, r) {
                function l(e) {
                    s || (s = !0, clearInterval(u), a(e))
                }

                function o(t) {
                    i < e || (s = !0, clearInterval(u), r(t))
                }
                var i = 0,
                    s = !1,
                    u = setInterval(function() {
                        i++, i > e || n().then(l, o)
                    }, t)
            })
        }

        function l(e, t, n) {
            return new u.default(function(a) {
                function r() {
                    setTimeout(function() {
                        n().then(a, r)
                    }, o), o = Math.min(2 * o, l)
                }
                var l = (0, i.default)(t) ? t : 36e5,
                    o = e;
                r()
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(605),
            i = a(o),
            s = n(591),
            u = a(s);
        t.delayedRetry = r, t.exponentialBackoffRetry = l
    },
    605: function(e, t, n) {
        e.exports = {
            default: n(606),
            __esModule: !0
        }
    },
    606: function(e, t, n) {
        n(607), e.exports = n(184).Number.isFinite
    },
    607: function(e, t, n) {
        var a = n(182),
            r = n(183).isFinite;
        a(a.S, "Number", {
            isFinite: function(e) {
                return "number" == typeof e && r(e)
            }
        })
    },
    608: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ErrorListActions = void 0;
        var r = n(250),
            l = a(r),
            o = n(171),
            i = a(o),
            s = n(169),
            u = n(589),
            c = t.ErrorListActions = function e() {
                (0, i.default)(this, e), this.generateActions.apply(this, (0, l.default)((0, u.asyncActions)("getErrors")).concat((0, l.default)((0, u.asyncActions)("acknowledgeError"))))
            };
        s.registry.addActions(c, [])
    },
    609: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ErrorListStore = void 0;
        var r = n(582),
            l = a(r),
            o = n(171),
            i = a(o),
            s = n(379),
            u = a(s),
            c = n(169),
            d = n(608),
            f = n(610),
            p = t.ErrorListStore = function() {
                function e(t, n) {
                    (0, i.default)(this, e), this.state = {
                        loading: !1,
                        loadingError: null,
                        errors: {}
                    }, this.bindActions(t), this.registerAsync(n)
                }
                return e.getErrorCount = function() {
                    return (0, l.default)(this.state.errors).length
                }, e.prototype.getErrors = function() {
                    this.setState({
                        loading: !0,
                        loadingError: null
                    }), this.getInstance().getErrors()
                }, e.prototype.getErrorsSuccess = function(e) {
                    this.setState({
                        loading: !1,
                        loadingError: null,
                        errors: e
                    })
                }, e.prototype.getErrorsError = function(e) {
                    this.setState({
                        loading: !1,
                        loadingError: e.toString(),
                        errors: {}
                    })
                }, e.prototype.acknowledgeError = function(e) {
                    this.getInstance().acknowledgeError(e)
                }, e.prototype.acknowledgeErrorSuccess = function(e) {
                    var t = u.default.clone(this.state.errors);
                    u.default.unset(t, e) && this.setState({
                        errors: t
                    })
                }, e.prototype.getErrorsError = function() {}, e
            }();
        c.registry.addStore(p, [d.ErrorListActions, f.createErrorListSource])
    },
    610: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e) {
            return (0, s.default)({}, (0, c.sourceMethod)("getErrors", e, function() {
                return (0, d.promiseBody)(p.default.get("/errors"))
            }), (0, c.sourceMethod)("acknowledgeError", e, function(e, t) {
                return new o.default(function(e, n) {
                    p.default.post("/errors/" + t).end(function(a) {
                        return a ? n(a) : e(t)
                    })
                })
            }))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = n(591),
            o = a(l),
            i = n(409),
            s = a(i);
        t.createErrorListSource = r;
        var u = n(169),
            c = n(589),
            d = n(603),
            f = n(597),
            p = a(f),
            m = n(608);
        u.registry.addFactory(r, [m.ErrorListActions])
    },
    611: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Menu = void 0;
        var r = n(171),
            l = a(r),
            o = n(279),
            i = a(o),
            s = n(172),
            u = a(s),
            c = n(241),
            d = a(c),
            f = n(1),
            p = a(f),
            m = n(387),
            E = a(m),
            h = n(416),
            g = n(612),
            v = a(g);
        t.Menu = function(e) {
            function t() {
                return (0, l.default)(this, t), (0, u.default)(this, e.apply(this, arguments))
            }
            return (0, d.default)(t, e), t.prototype.render = function() {
                var e = this,
                    t = this.props,
                    n = t.notifications,
                    a = t.actions,
                    r = p.default.createElement("div", {
                        className: "menu-icon"
                    }, n ? p.default.createElement("div", {
                        className: "notification"
                    }) : null);
                return p.default.createElement(h.DropdownButton, {
                    bsSize: "large",
                    id: "menu",
                    noCaret: !0,
                    pullRight: !0,
                    title: r,
                    style: {
                        textShadow: "0px 1px 0px #333",
                        fontWeight: "bold"
                    }
                }, p.default.createElement(h.MenuItem, {
                    onClick: a.viewNotifications
                }, "Notifications", n ? p.default.createElement("div", {
                    className: "notification-number"
                }, "(", n, ")") : null), p.default.createElement(h.MenuItem, {
                    divider: !0
                }), p.default.createElement(h.MenuItem, {
                    href: "#/settings"
                }, "Settings"), p.default.createElement(h.MenuItem, {
                    divider: !0
                }), p.default.createElement(h.MenuItem, {
                    target: "_blank",
                    href: "https://docs.chaosgroup.com/display/LICENSE/Online+Licensing"
                }, "Help ", p.default.createElement("span", {
                    className: "external-link"
                })), p.default.createElement(h.MenuItem, {
                    onClick: function() {
                        var t = e.props.tourData;
                        v.default.configure({
                            showPrevButton: !0
                        }), v.default.startTour(t)
                    }
                }, "Take Tour"), p.default.createElement(h.MenuItem, {
                    href: "#/about"
                }, "About"))
            }, (0, i.default)(t, null, [{
                key: "propTypes",
                get: function() {
                    return {
                        notifications: E.default.number,
                        enabled: E.default.bool,
                        actions: E.default.shape({
                            enableOnline: E.default.func,
                            disableOnline: E.default.func,
                            onBorrow: E.default.func,
                            viewNotifications: E.default.func
                        }),
                        tourData: E.default.shape({
                            version: E.default.number,
                            id: E.default.string,
                            steps: E.default.array
                        })
                    }
                }
            }, {
                key: "defaultProps",
                get: function() {
                    var e = function() {};
                    return {
                        notifications: 0,
                        enabled: !1,
                        actions: {
                            enableOnline: e,
                            disableOnline: e,
                            onBorrow: e,
                            viewNotifications: e
                        },
                        tourData: {
                            version: 1,
                            id: "header",
                            steps: []
                        }
                    }
                }
            }]), t
        }(p.default.Component)
    },
    613: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e, t) {
            return function(n) {
                function a() {
                    return (0, o.default)(this, a), (0, c.default)(this, n.apply(this, arguments))
                }
                return (0, f.default)(a, n), a.prototype.componentWillMount = function() {
                    e.getStatus()
                }, a.prototype.render = function() {
                    var e = {
                        online: function() {
                            return {
                                store: t,
                                value: t.getOnlineEnabled()
                            }
                        }
                    };
                    return m.default.createElement(v.default, {
                        stores: e
                    }, m.default.createElement(T, {
                        history: this.props.history
                    }))
                }, a
            }(m.default.Component)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = n(171),
            o = a(l),
            i = n(279),
            s = a(i),
            u = n(172),
            c = a(u),
            d = n(241),
            f = a(d);
        t.default = r;
        var p = n(1),
            m = a(p),
            E = n(387),
            h = a(E),
            g = n(389),
            v = a(g),
            y = n(169),
            b = n(590),
            N = a(b),
            S = n(588),
            w = a(S),
            T = function(e) {
                function t() {
                    return (0, o.default)(this, t), (0, c.default)(this, e.apply(this, arguments))
                }
                return (0, f.default)(t, e), t.prototype.render = function() {
                    var e = this;
                    return this.props.online ? (setTimeout(function() {
                        return e.props.history.push("/")
                    }, 0), m.default.createElement("div", {
                        className: "screen-wrapper"
                    }, m.default.createElement("div", {
                        className: "enable-prompt"
                    }, m.default.createElement("h1", null, "Online licensing is already enabled"), m.default.createElement("div", {
                        className: "skip"
                    }, m.default.createElement("a", {
                        href: "#",
                        className: "btn btn-group-xs pull-right"
                    }, "Click here to proceed ", m.default.createElement("span", {
                        className: "arrow"
                    }, "›")))))) : m.default.createElement("div", {
                        className: "screen-wrapper"
                    }, m.default.createElement("div", {
                        className: "enable-prompt"
                    }, m.default.createElement("div", {
                        className: "cg-first-run-logo full-width pull-left"
                    }, m.default.createElement("img", {
                        className: "pull-left",
                        src: "/img/chaos_logo.svg",
                        width: "200px"
                    })), m.default.createElement("a", {
                        href: "/activate"
                    }, m.default.createElement("h2", {
                        className: "enable-link text-center full-width"
                    }, "enable online licensing")), m.default.createElement("div", {
                        className: "skip"
                    }, m.default.createElement("a", {
                        href: "#",
                        className: "btn btn-text pull-right"
                    }, "Skip This Step ", m.default.createElement("span", {
                        className: "arrow"
                    }, "›")))))
                }, (0, s.default)(t, null, [{
                    key: "defaultProps",
                    get: function() {
                        return {
                            online: !1,
                            history: {
                                push: function() {}
                            }
                        }
                    }
                }, {
                    key: "propTypes",
                    get: function() {
                        return {
                            online: h.default.bool,
                            history: h.default.shape({
                                push: h.default.func
                            })
                        }
                    }
                }]), t
            }(m.default.Component);
        y.registry.addFactory(r, [w.default, N.default])
    },
    614: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e) {
            var t = function() {
                return {
                    store: e,
                    value: {
                        version: e.getVersion(),
                        build: e.getBuild()
                    }
                }
            };
            return function() {
                return o.default.createElement(s.default, {
                    store: t
                }, o.default.createElement(c.AboutPage, null))
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.createAboutPage = r;
        var l = n(1),
            o = a(l),
            i = n(389),
            s = a(i),
            u = n(169),
            c = n(615),
            d = n(590),
            f = a(d);
        u.registry.addFactory(r, [f.default])
    },
    615: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.AboutPage = void 0;
        var r = n(171),
            l = a(r),
            o = n(279),
            i = a(o),
            s = n(172),
            u = a(s),
            c = n(241),
            d = a(c),
            f = n(1),
            p = a(f),
            m = n(387),
            E = a(m),
            h = n(294);
        t.AboutPage = function(e) {
            function t() {
                return (0, l.default)(this, t), (0, u.default)(this, e.apply(this, arguments))
            }
            return (0, d.default)(t, e), t.prototype.render = function() {
                var e = {
                    about: {
                        padding: "15px 45px"
                    },
                    version: {
                        fontWeight: "bold"
                    }
                };
                return p.default.createElement("div", {
                    className: "container",
                    id: "about",
                    style: e.about
                }, p.default.createElement("div", {
                    className: "server-info"
                }, p.default.createElement("h4", {
                    className: "pull-right",
                    style: {
                        marginTop: 0
                    }
                }, p.default.createElement(h.Link, {
                    to: "/licenses"
                }, "Third-party licenses")), p.default.createElement("h3", {
                    style: {
                        textTransform: "uppercase"
                    }
                }, "License Server ", p.default.createElement("span", {
                    className: "version"
                }, this.props.version), p.default.createElement("span", {
                    className: "text-muted",
                    style: {
                        fontWeight: "normal"
                    }
                }, " (build: ", this.props.build, ")"))), p.default.createElement("hr", null), this.props.eula)
            }, (0, i.default)(t, null, [{
                key: "defaultProps",
                get: function() {
                    return {
                        version: "loading...",
                        build: "loading...",
                        eula: p.default.createElement("div", {
                            id: "eula"
                        }, p.default.createElement("h2", null, "LICENSE SERVER AGREEMENT"), p.default.createElement("h3", null, "IMPORTANT - PLEASE READ CAREFULLY:"), p.default.createElement("p", null, 'THE COMPANY licenses the License Server ("THE LICENSE SERVER") to you (either you as an individual or the legal entity for which you represent and warrant that you have the right, power and authority to act on behalf of and bind to this agreement) ("THE LICENSEE") only upon the condition that you accept all of the terms and conditions contained in this LICENSE SERVER AGREEMENT ("THE AGREEMENT"). This is a license agreement and not an agreement for sale.'), p.default.createElement("p", null, 'THE LICENSE SERVER is used to prevent usage of unlicensed versions or copies of particular COMPANY\'s Software Product. For the purpose of this Agreement "Software Product" shall mean any software program over which THE COMPANY has intellectual property rights.'), p.default.createElement("p", null, 'In order to work properly, THE LICENSE SERVER requires: i) a Hardware Lock ("THE DONGLE"), provided by THE COMPANY directly or via its authorized reseller; or ii) an internet connection to THE COMPANY\'s online licensing service; or iii) one or more software license files ("THE LICENSE FILES"), provided by THE COMPANY.'), p.default.createElement("p", null, "By installing, accessing, or otherwise copying or using all or any portion of THE LICENSE SERVER you agree to be legally bound by THE AGREEMENT. If THE LICENSEE does not agree to any or all of the terms in THE AGREEMENT, THE LICENSEE must not install, access, or otherwise copy or use THE LICENSE SERVER or THE DONGLE (if applicable) and may, within thirty (30) days from the date of acquisition, return, for a refund (if applicable), THE LICENSE SERVER, THE DONGLE and any accompanying documentation and materials to THE COMPANY or its authorized reseller from which THE LICENSE SERVER and THE DONGLE were acquired."), p.default.createElement("ol", {
                            style: {
                                listStyleType: "decimal"
                            }
                        }, p.default.createElement("li", null, p.default.createElement("p", null, p.default.createElement("strong", null, "SCOPE")), p.default.createElement("ol", {
                            style: {
                                listStyleType: "decimal"
                            }
                        }, p.default.createElement("li", null, p.default.createElement("p", null, "THE COMPANY licenses and THE LICENSEE accepts the following non-sublicensable, non-exclusive, non-transferable (except if the latter is permitted by applicable law) right and license:"), p.default.createElement("ol", {
                            style: {
                                listStyleType: "lower-alpha"
                            }
                        }, p.default.createElement("li", null, "to install THE LICENSE SERVER, to load it, to view it on a computer screen, to execute it, to use it, to transmit it to a distance, to keep it on a computer storage device;"), p.default.createElement("li", null, "to create a back-up copy of THE LICENSE SERVER, if that is needed for the specific use that THE LICENSE SERVER has been acquired for and LICENSEE keeps all copyright notices and other marks of ownership on each copy, or partial copy, of THE LICENSE SERVER, if any. The back-up copy is for LICENSEE's own internal use only and cannot be provided to any third parties;"), p.default.createElement("li", null, "to benefit commercially from using THE LICENSE SERVER in the authorized manner considering the restrictions in Article 3.1. below."))), p.default.createElement("li", null, "THE COMPANY licenses to THE LICENSEE the rights referred to in Article 1.1 for 1 (one) copy of THE LICENSE SERVER."), p.default.createElement("li", null, "A copy of THE LICENSE SERVER constitutes of all computer files provided to THE LICENSEE by THE COMPANY (including but not limited to installation files, binary executable files, library files, configuration files and documentation files)."), p.default.createElement("li", null, "By this AGREEMENT no intellectual property rights of THE COMPANY, or other rights not specified herein, respectively, are being transferred or licensed to THE LICENSEE."))), p.default.createElement("li", null, p.default.createElement("p", null, p.default.createElement("strong", null, "RIGHTS AND OBLIGATIONS OF THE COMPANY")), p.default.createElement("ol", {
                            style: {
                                listStyleType: "decimal"
                            }
                        }, p.default.createElement("li", null, "THE COMPANY shall have to furnish THE LICENSEE via electronic way with the copies of THE LICENSE SERVER whose rights for use, as defined in Article 1.1., are being licensed by THE AGREEMENT."), p.default.createElement("li", null, "THE COMPANY shall have to keep confidential any of THE LICENSEE's trade secrets, as well as any other information or data THE COMPANY may become aware of during or in relation with the execution of THE AGREEMENT, except where such information or data is required by applicable law."), p.default.createElement("li", null, "THE COMPANY shall keep the right to make any changes, improvements and corrections it deems necessary to THE LICENSE SERVER."), p.default.createElement("li", null, "THE COMPANY shall not be responsible for any problems that may appear during or because of the use of THE LICENSE SERVER."), p.default.createElement("li", null, 'THE COMPANY shall not be liable in case THE LICENSEE is not able to use any or all of THE LICENSE SERVER\'s features due to a force majeure (including, but not limited to short-circuits, power outages, internet network malfunctions, administrative limitations and others such as a war, strike, riot, crime, or an event described by the legal term "act of God" e.g., flooding, earthquake, etc.).'))), p.default.createElement("li", null, p.default.createElement("p", null, p.default.createElement("strong", null, "RIGHTS AND OBLIGATIONS OF THE LICENSEE")), p.default.createElement("ol", {
                            style: {
                                listStyleType: "decimal"
                            }
                        }, p.default.createElement("li", null, p.default.createElement("p", null, "THE LICENSEE shall not:"), p.default.createElement("ol", {
                            style: {
                                listStyleType: "lower-alpha"
                            }
                        }, p.default.createElement("li", null, "make copies or otherwise reproduce THE LICENSE SERVER except for back-up copies made only for their own usage and which cannot be provided to any third parties;"), p.default.createElement("li", null, "replicate THE DONGLE, if any;"), p.default.createElement("li", null, "use THE LICENSE SERVER, THE DONGLE and/or THE LICENSE FILES to develop new software which is substantially similar to the expression of THE LICENSE SERVER and/or THE LICENSE FILES;"), p.default.createElement("li", null, "redistribute or give away in any way (lease, rent, lend, donate, exchange, share or other) THE LICENSE SERVER,THE DONGLE, and/or THE LICENSE FILES to any third parties. The LICENSEE is not allowed to sell, transfer, assign or grant access to the acquired LICENSE SERVER, THE DONGLE and/or THE LICENSE FILES to a third party. LICENSEE ensures that THE LICENSE SERVER, THE DONGLE and THE LICENSE FILES are used only by LICENSEE personally, in case LICENSEE is an individual, or by LICENSEE's employees, on LICENSEE's behalf, in case LICENSE is a legal entity, and LICENSEE is responsible for compliance with the terms of this AGREEMENT by its employee;"), p.default.createElement("li", null, "THE LICENSE SERVER, THE DONGLE and THE LICENSE FILES cannot be used for commercial render-farm service that provide third parties with contracted/on demand rendering services. Render-farm service providers will need a separate agreement with THE COMPANY;"), p.default.createElement("li", null, "make any translation, adaptation, arrangement and any other alteration of THE LICENSE SERVER and/or THE LICENSE FILES or make any reproduction, distribution, communication, display or performance to the public of the results of such acts;"), p.default.createElement("li", null, "adapt or reverse compile or reverse engineer the whole or any part of THE LICENSE SERVER;"), p.default.createElement("li", null, "adapt or reverse engineer or otherwise tamper with THE DONGLE and/or THE LICENSE FILES;"), p.default.createElement("li", null, "remove or alter any copyright or other proprietary notice from THE LICENSE SERVER and/or THE LICENSE FILES;"), p.default.createElement("li", null, "use THE LICENSE SERVER and/or THE LICENSE FILES in a manner that infringes any third party's copyrights or any other rights;"), p.default.createElement("li", null, "participate in any illegal, deceptive, misleading, unethical practices and activities which may be detrimental to THE COMPANY."))), p.default.createElement("li", null, "THE LICENSEE shall notify THE COMPANY immediately if THE LICENSEE becomes aware of any unauthorized use of the whole or any part of THE LICENSE SERVER, THE DONGLE, and/or THE LICENSE FILES by any third party. The notification shall be made to: contacts@chaosgroup.com."), p.default.createElement("li", null, "THE LICENSEE shall be entitled only to the rights specified in Article 1.1 of this AGREEMENT."), p.default.createElement("li", null, "THE LICENSEE shall be obligated to provide THE COMPANY with any information needed for the accurate completion of the AGREEMENT's objective."), p.default.createElement("li", null, "THE LICENSEE shall be obligated to keep confidential any of THE COMPANY's trade secrets, as well as any other information they may become aware of during or in relation with the execution of this AGREEMENT, except where such information is required by applicable law."))), p.default.createElement("li", null, p.default.createElement("p", null, p.default.createElement("strong", null, "PROTECTION MECHANISMS")), p.default.createElement("ol", {
                            style: {
                                listStyleType: "decimal"
                            }
                        }, p.default.createElement("li", null, p.default.createElement("p", null, "THE LICENSE SERVER may include one or more protection schemes to prevent usage of unlicensed copies of the Software Products, as follows:"), p.default.createElement("ol", {
                            style: {
                                listStyleType: "lower-alpha"
                            }
                        }, p.default.createElement("li", null, "THE DONGLE, and/or"), p.default.createElement("li", null, "an internet connection to THE COMPANY's online licensing service, and/or"), p.default.createElement("li", null, "THE LICENSE FILES"))), p.default.createElement("li", null, "If THE DONGLE proves to be defective within 24 months from the date of purchase by the LICENSEE and the defect is not a result of physical damage, improper handling or any other improper use as specified by the manufacturer of THE DONGLE, THE COMPANY shall replace it after receiving the defective one. All shipping costs and any other taxes are to be covered by the LICENSEE."), p.default.createElement("li", null, "If the defect has arisen from improper handling, physical damage or any other way of improper use, THE COMPANY has no obligations to replace the defective DONGLE free of charge and the replacement must be paid according to the prices set out by THE COMPANY or its authorized reseller."), p.default.createElement("li", null, "If any defect has arisen later than 24 months of the date of purchase by THE LICENSEE, THE COMPANY has no obligations to replace the defective DONGLE free of charge. In this case the replacement must be paid according to the prices set out by THE COMPANY or its authorized reseller."), p.default.createElement("li", null, "THE DONGLE and/or THE LICENSE FILES may contain one or more licenses for different Software Products licensed by THE COMPANY to THE LICENSEE. The total number of licenses to be put on THE DONGLE and/or THE LICENSE FILES must not exceed the number of licenses for said Software Products acquired by THE LICENSEE. If THE LICENSEE already has another DONGLE provided by THE COMPANY, THE LICENSEE is not obliged to buy a separate DONGLE for each new license that THE LICENSEE acquires. If THE LICENSEE already has acquired LICENSE FILES provided by THE COMPANY, THE LICENSEE is obliged to acquire separate LICENSE FILES for each new license that THE LICENSEE acquires."), p.default.createElement("li", null, "In case THE DONGLE is lost or stolen, THE LICENSEE is allowed to purchase a new DONGLE according to the prices set out by THE COMPANY or its authorized reseller. THE LICENSEE will be charged additionally for the shipping costs and any other taxes. THE COMPANY keeps its right to refuse to replace a DONGLE at its own discretion."), p.default.createElement("li", null, "Under the provisions defined in Article 4, if a DONGLE needs to be replaced, the COMPANY keeps its right to provide THE LICENSEE with a suitable replacement which may differ from the original."))), p.default.createElement("li", null, p.default.createElement("p", null, p.default.createElement("strong", null, "COLLATERAL PRODUCTS")), p.default.createElement("ol", {
                            style: {
                                listStyleType: "decimal"
                            }
                        }, p.default.createElement("li", null, "THE LICENSE SERVER,THE DONGLE, and/or THE LICENSE FILES may be accompanied, may contain or COMPANY may provide from time to time other own and/or third party's software, drivers, data, documents, materials, etc. (COLLATERAL PRODUCTS). COLLATERAL PRODUCTS may include, be subject to or provided in accordance with other terms in addition to or different from the terms set forth in this Agreement. Unless such terms are included or referenced COLLATERAL PRODUCTS are subject to this Agreement. In case such terms apply LICENSEE agrees to comply with them."), p.default.createElement("li", null, "LICENSEE will take sole responsibility for acquiring and complying with any licenses that may be necessary to use or to use in a different way any third party's software, data, documents or other materials. LICENSEE acknowledges and agrees that COMPANY has no responsibility for, and makes no representations or warranties regarding, such third party's software, data, documents or other materials or LICENSEE's use of such third party's software, data, documents or other materials."))), p.default.createElement("li", null, p.default.createElement("p", null, p.default.createElement("strong", null, "PRIVACY (IN CASE LICENSEE IS AN INDIVIDUAL)")), p.default.createElement("ol", {
                            style: {
                                listStyleType: "decimal"
                            }
                        }, p.default.createElement("li", null, "LICENSEE acknowledges and agrees that in order to acquire and use THE LICENSE SERVER through THE COMPANY's online licensing service and/or THE LICENSE FILES, LICENSEE (and third parties acting on LICENSEE's behalf) may have to provide, and COMPANY and its resellers (and third parties acting on behalf of COMPANY and its resellers) may acquire, certain personal information and data with respect to LICENSEE. By accepting the AGREEMENT LICENSEE hereby consents to COMPANY processing such information and data. COMPANY is a registered data administrator (Bulgarian Personal Data Protection Act (01 Jan. 2002 and as amended from time to time)) and as such COMPANY takes appropriate technical measures to protect LICENSEE's personal information and data. Personal information and data provided to COMPANY in connection with this AGREEMENT may be processed in Bulgaria or any other country in which COMPANY or its subsidiaries, affiliates or resellers maintain facilities. By acquiring THE LICENSE SERVER, LICENSEE consents to the transfer of such information outside of LICENSEE's country. In any case such personal information and data will be processed only for the purposes of this Agreement and for the time it is effective."), p.default.createElement("li", null, "Personal information and data may be processed only for the performance of this AGREEMENT, for administration and authentication purposes necessary for the execution of the AGREEMENT, compliance with a legal obligation or to respond to support inquiries."), p.default.createElement("li", null, "COMPANY may provide personal information and data to its subsidiaries and affiliates or resellers in connection with the provision, maintenance, administration or usage of THE LICENSE SERVER. Personally identifiable information and data will not be disclosed to external third parties not described herein without LICENSEE's consent. If COMPANY is required, by law or otherwise, to provide personal information and data to an authorized organization, LICENSEE would be informed prior to such disclosure. LICENSEE's account is password protected and all information is on a secure server, which only a limited number of COMPANY's employees can access. If LICENSEE suspects that someone else knows his password, or is using it, LICENSEE shall inform COMPANY and change the password immediately."), p.default.createElement("li", null, "COMPANY will keep LICENSEE's personal information and data for as long as necessary to fulfil the above purposes or as required by law. LICENSEE may modify and correct incomplete or inaccurate data at any time by notifying COMPANY of any change to contacts@chaosgroup.com."))), p.default.createElement("li", null, p.default.createElement("p", null, p.default.createElement("strong", null, "DISCLAIMER OF WARRANTY")), p.default.createElement("p", null, "LICENSEE ACKNOWLEDGES AND AGREES THAT THE LICENSE SERVER, THE LICENSE FILES, ANY OTHER SOFTWARE OR SUPPORT OR OTHER SERVICES ARE MADE AVAILABLE ON AN AS-IS BASIS WITHOUT ANY WARRANTIES OF ANY KIND AND COMPANY DISCLAIMS TO THE MAXIMUM EXTENT PERMITTED BY LAW, ALL WARRANTIES, TERMS, REPRESENTATIONS, OR CONDITIONS OF ANY KIND, EXPRESS OR IMPLIED (WHETHER BY STATUTE, LAW, CUSTOM, USAGE OR OTHERWISE) INCLUDING, WITHOUT LIMITATION, ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, SECURITY OR NON-INFRINGEMENT. COMPANY DOES NOT WARRANT THAT THE LICENSE SERVER, THE LICENSE FILES, ANY OTHER SOFTWARE, WILL MEET LICENSEE'S EXPECTATIONS, THAT THEIR PERFORMANCE OR OUTPUT WILL BE UNINTERRUPTED, ERROR-FREE, ACCURATE, RELIABLE, OR COMPLETE NOR THAT DEFECTS OR FAULTS WILL BE CORRECTED. NOTHING IN THE FOREGOING RESTRICTS THE EFFECT OF WARRANTIES OR CONDITIONS WHICH MAY BE IMPLIED BY LAW WHICH CANNOT BE EXCLUDED, RESTRICTED OR MODIFIED BY A CONTRACTUAL RESTRICTION.")), p.default.createElement("li", null, p.default.createElement("p", null, p.default.createElement("strong", null, "LIMITATIONS OF LIABILITY")), p.default.createElement("p", null, "IN NO EVENT WILL COMPANY OR ITS LICENSORS BE LIABLE (DIRECTLY OR INDIRECTLY) TO LICENSEE OR ANY OTHER THIRD PARTY FOR ANY LOSS, DAMAGES, CLAIMS, OR COSTS WHATSOEVER INCLUDING, NOT LIMITED TO ANY INCIDENTAL, SPECIAL, INDIRECT, CONSEQUENTIAL, PUNITIVE DAMAGES OR DAMAGES FROM BUSINESS INTERRUPTION, LOSS OF PROFITS, REVENUE, BUSINESS OR DATA, EVEN IF COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH LOSS, DAMAGES, CLAIMS, OR COSTS. LICENSEE ACKNOWLEDGES AND AGREES THAT IN ANY EVENT THE ENTIRE AGGREGATE LIABILITY OF COMPANY AND ITS LICENSORS ARISING OUT OF OR IN CONNECTION TO THIS AGREEMENT SHALL BE LIMITED TO DAMAGES OF AN AMOUNT EQUAL TO THE AMOUNT OF THE INITIAL PURCHASE PRICE ORIGINALLY PAID BY THE LICENSEE FOR THE DONGLE, EVEN IF THAT AMOUNT MAY BE SUBSTANTIALLY DISPROPORTIONATE TO THE REMEDY CLAIMED. COMPANY DOES NOT SEEK TO LIMIT ITS WARRANTY OR REMEDIES TO ANY EXTENT NOT PERMITTED BY LAW.")), p.default.createElement("li", null, p.default.createElement("p", null, p.default.createElement("strong", null, "DURATION AND TERMINATION")), p.default.createElement("ol", {
                            style: {
                                listStyleType: "decimal"
                            }
                        }, p.default.createElement("li", null, "This AGREEMENT is effective until terminated."), p.default.createElement("li", null, "THE LICENSEE may terminate this AGREEMENT at any time by notifying THE COMPANY and, respectively, by destroying THE LICENSE SERVER, destroying or returning THE DONGLE to THE COMPANY, destroying THE LICENSE FILES, destroying related documentation and all copies thereof. Upon the termination of THE AGREEMENT, THE LICENSEE shall cease all use of THE LICENSE SERVER, use of THE COMPANY's online licensing service and destroy or return to the COMPANY all DONGLES, if any,"), p.default.createElement("li", null, "This AGREEMENT will terminate immediately without notice from THE COMPANY if THE LICENSEE fails to comply with any provision of this AGREEMENT."))), p.default.createElement("li", null, p.default.createElement("p", null, p.default.createElement("strong", null, "OTHER PROVISIONS")), p.default.createElement("ol", {
                            style: {
                                listStyleType: "decimal"
                            }
                        }, p.default.createElement("li", null, "This AGREEMENT is governed by Bulgarian law. Any dispute about the existence and the validity of THE AGREEMENT, or in relation with THE AGREEMENT or with a breach of it, including any dispute and discrepancy about the effect, interpretation, termination, performance or failure to execute it, will be settled by negotiations. In the event no solution is achieved, the dispute will be referred for resolution to the Court of Arbitration at the Bulgarian Industrial Association (BIA) in accordance with its Rules. The place of arbitration shall be Sofia, Bulgaria. Nothing in the foregoing will prevent COMPANY from bringing an action for infringement of intellectual property rights in any country where such infringement is alleged to occur."), p.default.createElement("li", null, "In the event any of the terms of THE AGREEMENT is declared void because it conflicts with the applicable law, the rest of the terms and the AGREEMENT as a whole shall remain in full effect. Such invalid term shall be superseded by the legal provisions."), p.default.createElement("li", null, "The parties hereto shall be obligated not to disclose to any third party any part of the information exchanged in the negotiations held between them during or in relation with the execution of THE AGREEMENT, except where such information is required by applicable law."), p.default.createElement("li", null, "Any amendment or modification of THE AGREEMENT shall only be made by an additional agreement made in writing between the parties (annex) and signed by both of them."), p.default.createElement("li", null, "LICENSEE may not assign this AGREEMENT or any rights hereunder (whether by purchase of stock or assets, merger, change of control, operation of law, or otherwise) without COMPANY's prior written consent, which may be withheld at COMPANY's sole and absolute discretion, and any unauthorized purported assignment by LICENSEE will be void. LICENSEE acknowledges and agrees that COMPANY may assign or sub-contract any of its rights or obligations under this AGREEMENT."), p.default.createElement("li", null, "No term or provision of this AGREEMENT will be considered waived, and no breach excused, unless such waiver is in writing signed on behalf of the party against which the waiver is asserted. No waiver (whether express or implied) will constitute consent to, waiver of, or excuse of any other, different, or subsequent breach."), p.default.createElement("li", null, "This AGREEMENT and any other terms referenced in this AGREEMENT represent the complete and entire agreement between the parties regarding the subject matter hereof and supersede any and all prior proposals, agreements, representations and understandings between the parties, whether written or oral, regarding the subject matter hereof."), p.default.createElement("li", null, "Headings used in this AGREEMENT are provided for convenience only and shall not be used to construe meaning or intent."), p.default.createElement("li", null, "V-Ray and the V-Ray logo, CHAOSGROUP and CHAOSGROUP logo, Phoenix FD and the Phoenix FD logo are registered trademarks of Chaos Software Ltd. All other brand names, product names, or trademarks belong to their respective holders.")))))
                    }
                }
            }, {
                key: "propTypes",
                get: function() {
                    return {
                        version: E.default.string,
                        build: E.default.string,
                        eula: E.default.node
                    }
                }
            }]), t
        }(p.default.Component)
    },
    616: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e, t) {
            return function(n) {
                function a() {
                    return (0, o.default)(this, a), (0, s.default)(this, n.apply(this, arguments))
                }
                return (0, c.default)(a, n), a.prototype.render = function() {
                    return f.default.createElement(m.default, {
                        stores: [t]
                    }, f.default.createElement(b.BundleList, {
                        bundles: function() {
                            return t.state.bundles
                        }(),
                        activating: t.getOnlineActivating(),
                        activated: t.getOnlineEnabled(),
                        activateLicensing: e.enableOnline
                    }))
                }, a
            }(f.default.Component)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = n(171),
            o = a(l),
            i = n(172),
            s = a(i),
            u = n(241),
            c = a(u);
        t.default = r;
        var d = n(1),
            f = a(d),
            p = n(389),
            m = a(p),
            E = n(588),
            h = a(E),
            g = n(590),
            v = a(g),
            y = n(169),
            b = n(617);
        y.registry.addFactory(r, [h.default, v.default])
    },
    617: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.BundleList = void 0;
        var r = n(582),
            l = a(r),
            o = n(171),
            i = a(o),
            s = n(279),
            u = a(s),
            c = n(172),
            d = a(c),
            f = n(241),
            p = a(f),
            m = n(1),
            E = a(m),
            h = n(387),
            g = a(h),
            v = n(618),
            y = n(619),
            b = a(y);
        t.BundleList = function(e) {
            function t() {
                return (0, i.default)(this, t), (0, d.default)(this, e.apply(this, arguments))
            }
            return (0, p.default)(t, e), t.prototype.render = function() {
                var e = this.props.bundles,
                    t = (0, l.default)(e);
                return this.props.error ? E.default.createElement("div", {
                    className: "container text-center",
                    id: "product-list"
                }, E.default.createElement("h3", {
                    className: "text-uppercase"
                }, this.props.error)) : this.props.activating ? E.default.createElement("div", {
                    className: "container text-center",
                    id: "product-list"
                }, E.default.createElement("h3", {
                    className: "text-uppercase"
                }, "License server is activating - please wait..."), E.default.createElement(b.default, {
                    spinnerName: "rotating-plane"
                })) : 0 === t.length ? E.default.createElement("div", {
                    className: "container text-center",
                    id: "product-list"
                }, this.props.activated ? E.default.createElement("h2", {
                    className: "text-uppercase"
                }, "No licenses available") : E.default.createElement("div", null, E.default.createElement("h2", {
                    className: "text-center full-width text-uppercase"
                }, E.default.createElement("a", {
                    onClick: this.props.activateLicensing
                }, "Enable online licensing")), E.default.createElement("h3", {
                    style: {
                        fontWeight: 300
                    }
                }, "or insert a hardware license dongle."))) : E.default.createElement("div", {
                    className: "container",
                    id: "product-list"
                }, t.map(function(n, a) {
                    return E.default.createElement("div", {
                        key: n,
                        className: a == t.length - 1 && t.length % 2 == 1 ? "col-xs-12 col-sm-12" : "col-xs-12 col-sm-6"
                    }, E.default.createElement(v.BundleTile, {
                        label: e[n].label,
                        version: e[n].version,
                        url: "#/bundle/" + n
                    }))
                }))
            }, (0, u.default)(t, null, [{
                key: "defaultProps",
                get: function() {
                    return {
                        bundles: {},
                        error: null,
                        activateLicensing: function() {},
                        activating: !1,
                        activated: !1
                    }
                }
            }, {
                key: "propTypes",
                get: function() {
                    return {
                        bundles: g.default.object,
                        error: g.default.string,
                        activateLicensing: g.default.func,
                        activating: g.default.bool,
                        activated: g.default.bool
                    }
                }
            }]), t
        }(E.default.Component)
    },
    618: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.BundleTile = void 0;
        var r = n(171),
            l = a(r),
            o = n(279),
            i = a(o),
            s = n(172),
            u = a(s),
            c = n(241),
            d = a(c),
            f = n(1),
            p = a(f),
            m = n(387),
            E = a(m);
        t.BundleTile = function(e) {
            function t() {
                return (0, l.default)(this, t), (0, u.default)(this, e.apply(this, arguments))
            }
            return (0, d.default)(t, e), t.prototype.render = function() {
                var e = this.props.label.split(" | "),
                    t = e.pop(),
                    n = e.pop(),
                    a = this.props,
                    r = a.id,
                    l = a.url,
                    o = a.version,
                    i = {
                        src: "/img/" + n + "_logo.svg",
                        alt: n + " Logo"
                    },
                    s = null;
                if (o) {
                    var u = o.indexOf("beta");
                    s = u >= 0 ? p.default.createElement("div", null, p.default.createElement("div", {
                        className: "bundle-version"
                    }, o.replace(" beta", "").replace("-beta", "")), p.default.createElement("div", {
                        className: "bundle-beta"
                    }, "beta")) : p.default.createElement("div", {
                        className: "bundle-version"
                    }, o)
                }
                return l ? p.default.createElement("a", {
                    href: l,
                    id: r,
                    className: "bundle-tile"
                }, p.default.createElement("div", null, p.default.createElement("div", {
                    className: "logo-holder " + (n ? n.replace("-", "").toLowerCase() + "-logo" : "")
                }, n ? p.default.createElement("img", i) : null), p.default.createElement("div", {
                    className: "bundle-name"
                }, t), s)) : p.default.createElement("div", {
                    id: r,
                    className: "bundle-tile"
                }, p.default.createElement("div", {
                    className: "logo-holder " + (n ? n.replace("-", "").toLowerCase() + "-logo" : "")
                }, n ? p.default.createElement("img", i) : null), p.default.createElement("div", {
                    className: "bundle-name"
                }, t), s)
            }, (0, i.default)(t, null, [{
                key: "propTypes",
                get: function() {
                    return {
                        id: E.default.string,
                        url: E.default.string,
                        label: E.default.string,
                        version: E.default.string
                    }
                }
            }, {
                key: "defaultProps",
                get: function() {
                    return {
                        id: "",
                        url: "",
                        label: "",
                        version: ""
                    }
                }
            }]), t
        }(p.default.Component)
    },
    619: function(e, t, n) {
        var a, r;
        a = n(1), r = n(420), e.exports = a.createClass({
            displayName: "SpinKit",
            propTypes: {
                spinnerName: a.PropTypes.string.isRequired,
                noFadeIn: a.PropTypes.bool,
                overrideSpinnerClassName: a.PropTypes.string
            },
            getDefaultProps: function() {
                return {
                    spinnerName: "three-bounce",
                    noFadeIn: !1,
                    overrideSpinnerClassName: ""
                }
            },
            render: function() {
                var e, t;
                switch (e = {
                    "fade-in": !this.props.noFadeIn,
                    spinner: "" === this.props.overrideSpinnerClassName
                }, e[this.props.overrideSpinnerClassName] = this.props.overrideSpinnerClassName, t = r(e), this.props.className && (t = t + " " + this.props.className), this.props.noFadeIn || n(620), this.props.spinnerName) {
                    case "three-bounce":
                        return n(622), a.createElement("div", Object.assign({}, this.props, {
                            className: "three-bounce " + t
                        }), a.createElement("div", {
                            className: "bounce1"
                        }), a.createElement("div", {
                            className: "bounce2"
                        }), a.createElement("div", {
                            className: "bounce3"
                        }));
                    case "double-bounce":
                        return n(623), a.createElement("div", Object.assign({}, this.props, {
                            className: "double-bounce " + t
                        }), a.createElement("div", {
                            className: "double-bounce1"
                        }), a.createElement("div", {
                            className: "double-bounce2"
                        }));
                    case "rotating-plane":
                        return n(624), a.createElement("div", Object.assign({}, this.props, {
                            className: t
                        }), a.createElement("div", {
                            className: "rotating-plane"
                        }));
                    case "wave":
                        return n(625), a.createElement("div", Object.assign({}, this.props, {
                            className: "wave " + t
                        }), a.createElement("div", {
                            className: "rect1"
                        }), a.createElement("div", {
                            className: "rect2"
                        }), a.createElement("div", {
                            className: "rect3"
                        }), a.createElement("div", {
                            className: "rect4"
                        }), a.createElement("div", {
                            className: "rect5"
                        }));
                    case "wandering-cubes":
                        return n(626), a.createElement("div", Object.assign({}, this.props, {
                            className: "wandering-cubes " + t
                        }), a.createElement("div", {
                            className: "cube1"
                        }), a.createElement("div", {
                            className: "cube2"
                        }));
                    case "pulse":
                        return n(627), a.createElement("div", Object.assign({}, this.props, {
                            className: t
                        }), a.createElement("div", {
                            className: "pulse"
                        }));
                    case "chasing-dots":
                        return n(628), a.createElement("div", Object.assign({}, this.props, {
                            className: t
                        }), a.createElement("div", {
                            className: "chasing-dots"
                        }, a.createElement("div", {
                            className: "dot1"
                        }), a.createElement("div", {
                            className: "dot2"
                        })));
                    case "circle":
                        return n(629), a.createElement("div", Object.assign({}, this.props, {
                            className: "circle-wrapper " + t
                        }), a.createElement("div", {
                            className: "circle1 circle"
                        }), a.createElement("div", {
                            className: "circle2 circle"
                        }), a.createElement("div", {
                            className: "circle3 circle"
                        }), a.createElement("div", {
                            className: "circle4 circle"
                        }), a.createElement("div", {
                            className: "circle5 circle"
                        }), a.createElement("div", {
                            className: "circle6 circle"
                        }), a.createElement("div", {
                            className: "circle7 circle"
                        }), a.createElement("div", {
                            className: "circle8 circle"
                        }), a.createElement("div", {
                            className: "circle9 circle"
                        }), a.createElement("div", {
                            className: "circle10 circle"
                        }), a.createElement("div", {
                            className: "circle11 circle"
                        }), a.createElement("div", {
                            className: "circle12 circle"
                        }));
                    case "cube-grid":
                        return n(630), a.createElement("div", Object.assign({}, this.props, {
                            className: "cube-grid " + t
                        }), a.createElement("div", {
                            className: "cube"
                        }), a.createElement("div", {
                            className: "cube"
                        }), a.createElement("div", {
                            className: "cube"
                        }), a.createElement("div", {
                            className: "cube"
                        }), a.createElement("div", {
                            className: "cube"
                        }), a.createElement("div", {
                            className: "cube"
                        }), a.createElement("div", {
                            className: "cube"
                        }), a.createElement("div", {
                            className: "cube"
                        }), a.createElement("div", {
                            className: "cube"
                        }));
                    case "wordpress":
                        return n(631), a.createElement("div", Object.assign({}, this.props, {
                            className: t
                        }), a.createElement("div", {
                            className: "wordpress"
                        }, a.createElement("span", {
                            className: "inner-circle"
                        })))
                }
            }
        })
    },
    620: function(e, t) {},
    622: function(e, t) {},
    623: function(e, t) {},
    624: function(e, t) {},
    625: function(e, t) {},
    626: function(e, t) {},
    627: function(e, t) {},
    628: function(e, t) {},
    629: function(e, t) {},
    630: function(e, t) {},
    631: function(e, t) {},
    632: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e, t) {
            return function(n) {
                function a() {
                    return (0, o.default)(this, a), (0, c.default)(this, n.apply(this, arguments))
                }
                return (0, f.default)(a, n), a.prototype.componentWillMount = function() {
                    e.getBundleSummary(this.props.params.bundleName)
                }, a.prototype.componentWillUnmount = function() {
                    e.clearState()
                }, a.prototype.render = function() {
                    var n = this;
                    return m.default.createElement(v.default, {
                        store: t
                    }, m.default.createElement(T.BundleSummary, {
                        getProductDetails: e.getProductDetails,
                        refreshData: function() {
                            return e.getBundleSummary(n.props.params.bundleName)
                        }
                    }))
                }, (0, s.default)(a, null, [{
                    key: "defaultProps",
                    get: function() {
                        return {
                            params: {
                                bundleName: ""
                            }
                        }
                    }
                }, {
                    key: "propTypes",
                    get: function() {
                        return {
                            params: h.default.object,
                            "params.bundleName": h.default.string
                        }
                    }
                }]), a
            }(m.default.Component)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = n(171),
            o = a(l),
            i = n(279),
            s = a(i),
            u = n(172),
            c = a(u),
            d = n(241),
            f = a(d);
        t.default = r;
        var p = n(1),
            m = a(p),
            E = n(387),
            h = a(E),
            g = n(389),
            v = a(g),
            y = n(633),
            b = a(y),
            N = n(634),
            S = a(N),
            w = n(169),
            T = n(646);
        w.registry.addFactory(r, [b.default, S.default])
    },
    633: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(250),
            l = a(r),
            o = n(171),
            i = a(o),
            s = n(169),
            u = n(589),
            c = function e() {
                (0, i.default)(this, e), this.generateActions.apply(this, (0, l.default)((0, u.asyncActions)("getBundleSummary")).concat((0, l.default)((0, u.asyncActions)("getProductDetails")), ["clearState"]))
            };
        t.default = c, s.registry.addActions(c, [])
    },
    634: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(260),
            l = a(r),
            o = n(635),
            i = a(o),
            s = n(409),
            u = a(s),
            c = n(171),
            d = a(c),
            f = n(169),
            p = n(633),
            m = a(p),
            E = n(588),
            h = a(E),
            g = n(637),
            v = a(g),
            y = function() {
                function e(t, n, a) {
                    (0, d.default)(this, e), this.state = {
                        id: null,
                        bundles: {},
                        tables: {},
                        chosenTable: "",
                        lastUpdate: null
                    }, this.bindActions(t), this.bindActions(a), this.registerAsync(n)
                }
                return e.prototype.getBundleSummary = function(e) {
                    this.setState({
                        id: e
                    }), this.getInstance().getBundleSummary(), "" !== this.state.chosenTable && this.getInstance().getProductDetails(), this.preventDefault()
                }, e.prototype.getStatusSuccess = function() {
                    null != this.state.bundleName && this.getInstance().getBundleSummary(), this.preventDefault()
                }, e.prototype.getBundleSummarySuccess = function(e) {
                    var t = (0, u.default)({}, this.state);
                    t = (0, u.default)(t, (0, u.default)({
                        bundleName: e.label
                    }, JSON.parse((0, i.default)(e)))), t.lastUpdate = new Date, this.setState(t)
                }, e.prototype.getBundleSummaryError = function(e) {
                    this.setState({
                        error: e,
                        lastUpdate: new Date
                    })
                }, e.prototype.getProductDetails = function(e) {
                    var t = e.productId,
                        n = e.licenseType,
                        a = e.dataType,
                        r = [t, n, a].join(".");
                    return r == this.state.chosenTable ? void this.setState({
                        chosenTable: "",
                        tables: {}
                    }) : (this.setState({
                        chosenTable: r
                    }), this.getInstance().getProductDetails(), void this.preventDefault())
                }, e.prototype.clearState = function() {
                    this.setState({
                        chosenTable: "",
                        lastUpdate: null
                    })
                }, e.prototype.getProductDetailsSuccess = function(e) {
                    var t = e.productId,
                        n = e.dataType,
                        a = e.data;
                    this.setState({
                        tables: (0, l.default)({}, t, (0, l.default)({}, n, a))
                    })
                }, e.prototype.getProductDetailsError = function(e) {
                    this.setState({
                        chosenTable: "",
                        tables: {}
                    })
                }, e
            }();
        t.default = y, f.registry.addStore(y, [m.default, v.default, h.default])
    },
    635: function(e, t, n) {
        e.exports = {
            default: n(636),
            __esModule: !0
        }
    },
    636: function(e, t, n) {
        var a = n(184),
            r = a.JSON || (a.JSON = {
                stringify: JSON.stringify
            });
        e.exports = function(e) {
            return r.stringify.apply(r, arguments)
        }
    },
    637: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e) {
            return (0, c.default)({}, (0, m.sourceMethod)("getBundleSummary", e, function(e) {
                return new s.default(function(t, n) {
                    (0, g.noCache)(f.default.get("/bundle/" + e.id + "/summary")).end(function(e, a) {
                        var r = a.body;
                        return e ? n(e) : t(r)
                    })
                })
            }), (0, m.sourceMethod)("getProductDetails", e, function(e) {
                var t = e.chosenTable.split("."),
                    n = (0, o.default)(t, 3),
                    a = n[0],
                    r = n[1],
                    l = n[2];
                return new s.default(function(e, t) {
                    return /(^free$)|(^engaged$)|(^total$)/.test(l) ? void f.default.get("/product/" + a + "/" + l).end(function(n, o) {
                        n ? t({
                            productId: a,
                            dataType: l,
                            error: n
                        }) : e({
                            productId: a,
                            dataType: l,
                            licenseType: r,
                            data: o.body
                        })
                    }) : void t({
                        productId: a,
                        dataType: l,
                        error: "Invalid data type - must be [free / engaged / total]"
                    })
                })
            }))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = n(638),
            o = a(l),
            i = n(591),
            s = a(i),
            u = n(409),
            c = a(u);
        t.default = r;
        var d = n(597),
            f = a(d),
            p = n(169),
            m = n(589),
            E = n(633),
            h = a(E),
            g = n(645);
        p.registry.addFactory(r, [h.default])
    },
    638: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.__esModule = !0;
        var r = n(639),
            l = a(r),
            o = n(642),
            i = a(o);
        t.default = function() {
            function e(e, t) {
                var n = [],
                    a = !0,
                    r = !1,
                    l = void 0;
                try {
                    for (var o, s = (0, i.default)(e); !(a = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); a = !0);
                } catch (e) {
                    r = !0, l = e
                } finally {
                    try {
                        !a && s.return && s.return()
                    } finally {
                        if (r) throw l
                    }
                }
                return n
            }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if ((0, l.default)(Object(t))) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }()
    },
    639: function(e, t, n) {
        e.exports = {
            default: n(640),
            __esModule: !0
        }
    },
    640: function(e, t, n) {
        n(220), n(176), e.exports = n(641)
    },
    641: function(e, t, n) {
        var a = n(258),
            r = n(217)("iterator"),
            l = n(199);
        e.exports = n(184).isIterable = function(e) {
            var t = Object(e);
            return void 0 !== t[r] || "@@iterator" in t || l.hasOwnProperty(a(t))
        }
    },
    642: function(e, t, n) {
        e.exports = {
            default: n(643),
            __esModule: !0
        }
    },
    643: function(e, t, n) {
        n(220), n(176), e.exports = n(644)
    },
    644: function(e, t, n) {
        var a = n(189),
            r = n(257);
        e.exports = n(184).getIterator = function(e) {
            var t = r(e);
            if ("function" != typeof t) throw TypeError(e + " is not iterable!");
            return a(t.call(e))
        }
    },
    645: function(e, t) {
        "use strict";

        function n(e) {
            return e.set("X-Requested-With", "XMLHttpRequest"), e.set("Expires", "-1"), e.set("Cache-Control", "no-cache,no-store,must-revalidate,max-age=-1,private"), e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.noCache = n;
        t.PRODUCT_TYPE = {
            INTERFACE: 1,
            RENDER: 2,
            DR: 4
        }, t.INVERSE_PRODUCT_TYPE = {
            1: "Interface",
            2: "Render",
            4: "Distributed"
        }
    },
    646: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.BundleSummary = void 0;
        var r = n(409),
            l = a(r),
            o = n(171),
            i = a(o),
            s = n(279),
            u = a(s),
            c = n(172),
            d = a(c),
            f = n(241),
            p = a(f),
            m = n(1),
            E = a(m),
            h = n(387),
            g = a(h),
            v = (n(294), n(619)),
            y = a(v),
            b = n(645),
            N = n(647),
            S = n(618),
            w = n(648),
            T = n(649),
            _ = n(650),
            O = n(651);
        t.BundleSummary = function(e) {
            function t() {
                return (0, i.default)(this, t), (0, d.default)(this, e.apply(this, arguments))
            }
            return (0, p.default)(t, e), t.prototype.render = function() {
                var e = this;
                if (this.props.error) return E.default.createElement("div", {
                    className: "container bundle-summary"
                }, E.default.createElement("h2", {
                    style: {
                        textAlign: "center"
                    }
                }, "There was an error retrieving the products summary - ", this.props.error));
                var t = this.props,
                    n = t.engaged,
                    a = t.free,
                    r = t.total,
                    o = t.productLabels,
                    i = t.bundleName,
                    s = t.version,
                    u = t.products,
                    c = t.lastUpdate;
                return c ? u && 0 !== u.length ? E.default.createElement("div", {
                    className: "container bundle-summary"
                }, E.default.createElement(O.Refresher, {
                    autoRefreshPeriod: 300,
                    onRefresh: this.props.refreshData,
                    lastUpdate: this.props.lastUpdate
                }), E.default.createElement(S.BundleTile, {
                    id: "bundle-header",
                    label: i,
                    version: s
                }), E.default.createElement("div", {
                    className: "product-table-header text-muted"
                }, E.default.createElement("div", {
                    className: "hidden-xs col-md-4"
                }, "Product Name"), E.default.createElement("div", {
                    className: "hidden-xs col-md-2"
                }, "License Type"), E.default.createElement("div", {
                    className: "col-xs-4 col-md-2 text-right",
                    width: "12.5%"
                }, "Total"), E.default.createElement("div", {
                    className: "col-xs-4 col-md-2 text-right",
                    width: "12.5%"
                }, "Engaged"), E.default.createElement("div", {
                    className: "col-xs-4 col-md-2 text-right",
                    width: "12.5%"
                }, "Free")), E.default.createElement("div", {
                    className: "summary-data"
                }, u.sort(function(e, t) {
                    return o[e].localeCompare(o[t])
                }).map(function(t, i) {
                    return E.default.createElement("div", {
                        className: "table product-table",
                        key: i
                    }, ["Interface", "Render", "DR"].map(function(s, u) {
                        var c = b.PRODUCT_TYPE[s.toUpperCase()],
                            d = {
                                className: "data-breakdown arrow-up",
                                productId: t,
                                productType: c,
                                chosen: e.props.chosenTable
                            },
                            f = e.props.tables[t] || {},
                            p = d.className,
                            m = {
                                productId: t,
                                productType: c,
                                name: o[t],
                                total: r[t][c],
                                engaged: n[t][c],
                                free: a[t][c],
                                onClick: e.props.getProductDetails
                            };
                        return E.default.createElement(N.ProductRow, (0, l.default)({
                            key: i + u
                        }, m), E.default.createElement(w.TotalTable, (0, l.default)({}, f.total, d, {
                            className: p + " total-arrow"
                        })), E.default.createElement(T.EngagedTable, (0, l.default)({}, f.engaged, d, {
                            className: p + " engaged-arrow"
                        })), E.default.createElement(_.FreeTable, (0, l.default)({}, f.free, d, {
                            className: p + " free-arrow"
                        })))
                    }))
                }))) : E.default.createElement("div", {
                    className: "container text-center bundle-summary"
                }, E.default.createElement("h1", {
                    className: "text-uppercase"
                }, "Oops!"), E.default.createElement("h2", null, "Something went wrong"), E.default.createElement("h4", null, "We cannot find any licenses for ", i.replace("|", "for")), E.default.createElement("br", null), E.default.createElement("h4", null, E.default.createElement("strong", null, "Possible causes are:")), E.default.createElement("div", {
                    className: "causes"
                }, E.default.createElement("h4", {
                    className: "row"
                }, "You are not ", E.default.createElement("a", {
                    href: "/activate"
                }, "logged in"), " to your account."), E.default.createElement("h4", {
                    className: "row"
                }, "Offline licenses are not available on this system."), E.default.createElement("h4", {
                    className: "row"
                }, "Dongle licenses are not available on this system."))) : E.default.createElement("div", {
                    className: "container text-center bundle-summary"
                }, E.default.createElement(y.default, {
                    spinnerName: "rotating-plane"
                }), E.default.createElement("h3", {
                    className: "text-uppercase"
                }, "Loading Product Summary ..."));
            }, (0, u.default)(t, null, [{
                key: "defaultProps",
                get: function() {
                    return {
                        bundleName: "V-Ray | Unknown",
                        version: "",
                        error: null,
                        total: {},
                        engaged: {},
                        free: {},
                        productLabels: {},
                        products: [],
                        tables: {},
                        chosenTable: "",
                        getProductDetails: function() {},
                        refreshData: function() {},
                        lastUpdate: new Date
                    }
                }
            }, {
                key: "propTypes",
                get: function() {
                    return {
                        engaged: g.default.object,
                        free: g.default.object,
                        total: g.default.object,
                        productLabels: g.default.object,
                        bundleName: g.default.string,
                        version: g.default.string,
                        products: g.default.array,
                        error: g.default.any,
                        tables: g.default.object,
                        chosenTable: g.default.string,
                        getProductDetails: g.default.func,
                        refreshData: g.default.func,
                        lastUpdate: g.default.instanceOf(Date)
                    }
                }
            }]), t
        }(E.default.Component)
    },
    647: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ProductRow = void 0;
        var r = n(171),
            l = a(r),
            o = n(279),
            i = a(o),
            s = n(172),
            u = a(s),
            c = n(241),
            d = a(c),
            f = n(1),
            p = a(f),
            m = n(387),
            E = a(m),
            h = n(645);
        t.ProductRow = function(e) {
            function t() {
                return (0, l.default)(this, t), (0, u.default)(this, e.apply(this, arguments))
            }
            return (0, d.default)(t, e), t.prototype.render = function() {
                var e = this;
                return this.props.total < 1 ? null : p.default.createElement("div", {
                    className: "product-row"
                }, p.default.createElement("div", {
                    className: "col-md-4 product-name"
                }, this.props.name), p.default.createElement("div", {
                    className: "col-xs-12 col-md-2"
                }, h.INVERSE_PRODUCT_TYPE[this.props.productType]), ["total", "engaged", "free"].map(function(t, n) {
                    var a = e.props[t],
                        r = {
                            productId: e.props.productId,
                            dataType: t,
                            licenseType: e.props.productType
                        };
                    return p.default.createElement("div", {
                        key: n,
                        className: "col-xs-4 col-md-2 text-right count"
                    }, a > 0 ? p.default.createElement("a", {
                        className: "breakdown",
                        onClick: function() {
                            return e.props.onClick(r)
                        }
                    }, a) : p.default.createElement("span", null, a))
                }), this.props.children)
            }, (0, i.default)(t, null, [{
                key: "defaultProps",
                get: function() {
                    return {
                        name: "Unknown product",
                        productId: 0,
                        productType: 0,
                        total: 0,
                        engaged: 0,
                        free: 0,
                        children: null,
                        onClick: function() {}
                    }
                }
            }, {
                key: "propTypes",
                get: function() {
                    return {
                        name: E.default.string,
                        productId: E.default.number,
                        productType: E.default.number,
                        total: E.default.number,
                        engaged: E.default.number,
                        free: E.default.number,
                        children: E.default.node,
                        onClick: E.default.func
                    }
                }
            }]), t
        }(p.default.Component)
    },
    648: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.TotalTable = void 0;
        var r = n(409),
            l = a(r),
            o = n(171),
            i = a(o),
            s = n(279),
            u = a(s),
            c = n(172),
            d = a(c),
            f = n(241),
            p = a(f),
            m = n(1),
            E = a(m),
            h = n(387),
            g = a(h);
        t.TotalTable = function(e) {
            function t() {
                return (0, i.default)(this, t), (0, d.default)(this, e.apply(this, arguments))
            }
            return (0, p.default)(t, e), t.prototype.render = function() {
                var e = this,
                    t = [];
                return ["Online", "Offline", "Dongle"].forEach(function(n) {
                    e.props[n.toLowerCase()].forEach(function(a) {
                        a[e.props.productType] > 0 && t.push((0, l.default)({}, a, {
                            mode: n
                        }))
                    })
                }), 0 === t.length ? null : this.props.chosen !== this.props.productId + "." + this.props.productType + ".total" ? null : E.default.createElement("div", {
                    className: this.props.className,
                    id: this.props.id
                }, E.default.createElement("div", {
                    className: "row table-heading"
                }, E.default.createElement("div", {
                    className: "col-xs-6 text-left text-uppercase"
                }, "Available Licenses"), E.default.createElement("div", {
                    className: "col-xs-6 text-right"
                }, "Expires")), E.default.createElement("hr", {
                    style: {
                        margin: "10px 0px",
                        borderColor: "black"
                    }
                }), t.map(function(t, n) {
                    var a = t.details && t.details.keep,
                        r = t.details && t.details.dongleId;
                    return E.default.createElement("div", {
                        className: "total-table-row row",
                        key: n
                    }, E.default.createElement("div", {
                        className: "total-table-mode col-xs-offset-4 col-xs-2"
                    }, t.mode, " ", r ? " #" + r : null), E.default.createElement("div", {
                        className: "total-table-type col-xs-2 text-right"
                    }, t[e.props.productType]), E.default.createElement("div", {
                        className: "total-table-renew col-xs-4 text-right"
                    }, E.default.createElement("span", {
                        className: a ? "autokeep" : "no-keep"
                    }), t.expiryDate ? new Date(t.expiryDate).toDateString() : "Never"))
                }))
            }, (0, u.default)(t, null, [{
                key: "defaultProps",
                get: function() {
                    return {
                        online: [],
                        offline: [],
                        dongle: [],
                        id: null,
                        productId: 0,
                        productType: 0,
                        chosen: "",
                        className: null
                    }
                }
            }, {
                key: "propTypes",
                get: function() {
                    return {
                        online: g.default.array,
                        offline: g.default.array,
                        dongle: g.default.array,
                        id: g.default.string,
                        productId: g.default.number,
                        productType: g.default.number,
                        chosen: g.default.string,
                        className: g.default.string
                    }
                }
            }]), t
        }(E.default.Component)
    },
    649: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.EngagedTable = void 0;
        var r = n(171),
            l = a(r),
            o = n(279),
            i = a(o),
            s = n(172),
            u = a(s),
            c = n(241),
            d = a(c),
            f = n(1),
            p = a(f),
            m = n(387),
            E = a(m);
        t.EngagedTable = function(e) {
            function t() {
                return (0, l.default)(this, t), (0, u.default)(this, e.apply(this, arguments))
            }
            return (0, d.default)(t, e), t.prototype.sessionTable = function(e) {
                var t = this;
                return 0 === e.length ? null : p.default.createElement("div", null, p.default.createElement("div", {
                    className: "row table-heading"
                }, p.default.createElement("div", {
                    className: "col-xs-8 text-uppercase"
                }, "Active Sessions"), p.default.createElement("div", {
                    className: "col-xs-2 text-right"
                }), p.default.createElement("div", {
                    className: "col-xs-2 text-right"
                }, "Last Active")), p.default.createElement("hr", {
                    style: {
                        margin: "10px 0px",
                        borderColor: "black"
                    }
                }), e.map(function(e, n) {
                    var a = e.details.hostname ? p.default.createElement("span", {
                        className: "hostname"
                    }, "(", e.details.hostname, ")") : null;
                    return p.default.createElement("div", {
                        className: "engaged-row row",
                        key: n
                    }, p.default.createElement("div", {
                        className: "engaged-location col-xs-offset-4 col-xs-4"
                    }, e.details.ip, " ", a, " @ ", p.default.createElement("strong", null, e.details.location || "Unknown")), p.default.createElement("div", {
                        className: "engaged-type col-xs-2 text-right"
                    }, e[t.props.productType]), p.default.createElement("div", {
                        className: "engaged-last-active col-xs-2 text-right"
                    }, e.details.lastActive, " seconds ago"))
                }))
            }, t.prototype.borrowedTable = function(e) {
                var t = this;
                return 0 === e.length ? null : p.default.createElement("div", null, p.default.createElement("div", {
                    className: "row table-heading"
                }, p.default.createElement("div", {
                    className: "col-xs-8 text-uppercase"
                }, "Borrowed Licenses"), p.default.createElement("div", {
                    className: "col-xs-2 text-right"
                }), p.default.createElement("div", {
                    className: "col-xs-2 text-right"
                }, "Expires")), p.default.createElement("hr", {
                    style: {
                        margin: "10px 0px",
                        borderColor: "black"
                    }
                }), e.map(function(e, n) {
                    return p.default.createElement("div", {
                        className: "borrowed-table-row row",
                        key: n
                    }, p.default.createElement("div", {
                        className: "borrowed-table-location col-xs-offset-4 col-xs-4"
                    }, e.details.location || "Unknown"), p.default.createElement("div", {
                        className: "borrowed-table-type col-xs-2 text-right"
                    }, e[t.props.productType]), p.default.createElement("div", {
                        className: "borrowed-table-expires col-xs-2 text-right"
                    }, new Date(e.details.expires).toDateString()))
                }))
            }, t.prototype.render = function() {
                var e = this.props;
                if (e.chosen !== e.productId + "." + e.productType + ".engaged") return null;
                var t = e.online.concat(e.offline).concat(e.dongle).filter(function(t) {
                        return t[e.productType] > 0
                    }),
                    n = t.filter(function(e) {
                        return "session" == e.mode
                    }),
                    a = t.filter(function(e) {
                        return "borrowed" == e.mode
                    });
                return n.length + a.length === 0 ? null : p.default.createElement("div", {
                    className: this.props.className
                }, this.sessionTable(n), this.borrowedTable(a))
            }, (0, i.default)(t, null, [{
                key: "defaultProps",
                get: function() {
                    return {
                        online: [],
                        offline: [],
                        dongle: [],
                        id: null,
                        productId: 0,
                        productType: 0,
                        chosen: "",
                        details: {
                            location: "",
                            ip: "",
                            hostname: null,
                            lastActive: 0,
                            expires: 0
                        }
                    }
                }
            }, {
                key: "propTypes",
                get: function() {
                    return {
                        id: E.default.string,
                        productId: E.default.number,
                        productType: E.default.number,
                        className: E.default.string,
                        chosen: E.default.string,
                        details: E.default.shape({
                            location: E.default.string,
                            ip: E.default.string,
                            hostname: E.default.string,
                            lastActive: E.default.number,
                            expires: E.default.number
                        })
                    }
                }
            }]), t
        }(p.default.Component)
    },
    650: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.FreeTable = void 0;
        var r = n(171),
            l = a(r),
            o = n(279),
            i = a(o),
            s = n(172),
            u = a(s),
            c = n(241),
            d = a(c),
            f = n(1),
            p = a(f),
            m = n(387),
            E = a(m);
        t.FreeTable = function(e) {
            function t() {
                return (0, l.default)(this, t), (0, u.default)(this, e.apply(this, arguments))
            }
            return (0, d.default)(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = this.props,
                    n = t.online,
                    a = t.offline,
                    r = t.dongle,
                    l = t.productType;
                if (e.chosen !== e.productId + "." + l + ".free") return null;
                var o = [{
                    amount: n[l],
                    mode: "Online"
                }, {
                    amount: a[l],
                    mode: "Offline"
                }, {
                    amount: r[l],
                    mode: "Dongle"
                }].filter(function(e) {
                    return e.amount > 0
                });
                return 0 === o.length ? null : p.default.createElement("div", {
                    className: this.props.className,
                    id: this.props.id
                }, p.default.createElement("div", {
                    className: "row table-heading"
                }, p.default.createElement("div", {
                    className: "col-xs-6 text-uppercase"
                }, "Free Licenses"), p.default.createElement("div", {
                    className: "col-xs-6 text-right"
                })), p.default.createElement("hr", {
                    style: {
                        margin: "10px 0px",
                        borderColor: "black"
                    }
                }), o.map(function(e, t) {
                    return p.default.createElement("div", {
                        className: "free-table-row row",
                        key: t
                    }, p.default.createElement("div", {
                        className: "free-table-mode col-xs-offset-4 col-xs-2"
                    }, e.mode), p.default.createElement("div", {
                        className: "free-table-amount col-xs-6 text-right"
                    }, e.amount))
                }))
            }, (0, i.default)(t, null, [{
                key: "defaultProps",
                get: function() {
                    return {
                        online: {},
                        offline: {},
                        dongle: {},
                        chosen: "",
                        productId: 0,
                        productType: 0,
                        className: null,
                        id: null
                    }
                }
            }, {
                key: "propTypes",
                get: function() {
                    return {
                        online: E.default.object,
                        offline: E.default.object,
                        dongle: E.default.object,
                        chosen: E.default.string,
                        productId: E.default.number,
                        productType: E.default.number,
                        className: E.default.string,
                        id: E.default.string
                    }
                }
            }]), t
        }(p.default.Component)
    },
    651: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Refresher = t.StalenessText = void 0;
        var r = n(171),
            l = a(r),
            o = n(279),
            i = a(o),
            s = n(172),
            u = a(s),
            c = n(241),
            d = a(c),
            f = n(1),
            p = a(f),
            m = n(387),
            E = a(m),
            h = n(416),
            g = n(652),
            v = a(g);
        t.StalenessText = function(e) {
            function t() {
                return (0, l.default)(this, t), (0, u.default)(this, e.apply(this, arguments))
            }
            return (0, d.default)(t, e), t.prototype.componentWillMount = function() {
                var e = this;
                this._interval = setInterval(function() {
                    return e.setState({})
                }, 1e3)
            }, t.prototype.componentWillUnmount = function() {
                clearInterval(this._interval)
            }, t.prototype.render = function() {
                var e = Math.round((0, v.default)().diff(this.props.lastUpdate) / 1e3);
                return p.default.createElement("small", {
                    className: "text-muted"
                }, "last updated ", e, " second(s) ago")
            }, (0, i.default)(t, null, [{
                key: "propTypes",
                get: function() {
                    return {
                        lastUpdate: E.default.instanceOf(Date)
                    }
                }
            }, {
                key: "defaultProps",
                get: function() {
                    return {
                        lastUpdate: new Date
                    }
                }
            }]), t
        }(p.default.Component), t.Refresher = function(e) {
            function t(n) {
                (0, l.default)(this, t);
                var a = (0, u.default)(this, e.call(this, n));
                return a._timer = null, a._resetTimer(n), a
            }
            return (0, d.default)(t, e), t.prototype._resetTimer = function(e) {
                null != this._timer && clearTimeout(this._timer), 0 !== e.autoRefreshPeriod && (this._timer = setTimeout(function() {
                    return e.onRefresh()
                }, 1e3 * e.autoRefreshPeriod))
            }, (0, i.default)(t, null, [{
                key: "propTypes",
                get: function() {
                    return {
                        lastUpdate: E.default.instanceOf(Date),
                        onRefresh: E.default.func,
                        autoRefreshPeriod: E.default.number
                    }
                }
            }, {
                key: "defaultProps",
                get: function() {
                    return {
                        lastUpdate: new Date,
                        onRefresh: function() {
                            return window.location.reload()
                        },
                        autoRefreshPeriod: 0
                    }
                }
            }]), t.prototype.componentWillReceiveProps = function(e) {
                this._resetTimer(e)
            }, t.prototype.render = function() {
                var e = this;
                return p.default.createElement("div", {
                    className: "refresher text-right"
                }, p.default.createElement(h.Button, {
                    style: {
                        backgroundColor: "#edeef0"
                    },
                    className: "btn btn-sm btn-text no-border",
                    onClick: function() {
                        return e.props.onRefresh()
                    },
                    bsSize: "small"
                }, "↻"))
            }, t
        }(p.default.Component)
    },
    769: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e, t, n) {
            return function(a) {
                function r() {
                    return (0, o.default)(this, r), (0, c.default)(this, a.apply(this, arguments))
                }
                return (0, f.default)(r, a), r.prototype.componentWillMount = function() {
                    e.getSettings()
                }, r.prototype.componentWillUnmount = function() {
                    e.clearSettingsError()
                }, r.prototype.render = function() {
                    var a = function() {
                        return n.getPlatform()
                    };
                    return m.default.createElement(v.default, {
                        store: t,
                        inject: {
                            platform: a
                        }
                    }, m.default.createElement(O.SettingsView, {
                        onSave: e.saveSettings,
                        setExpertMode: e.setExpertMode,
                        focus: this.props.location.query.focus
                    }))
                }, (0, s.default)(r, null, [{
                    key: "propTypes",
                    get: function() {
                        return {
                            location: h.default.shape({
                                query: h.default.shape({
                                    focus: h.default.string
                                })
                            })
                        }
                    }
                }, {
                    key: "defaultProps",
                    get: function() {
                        return {
                            location: {
                                query: {
                                    focus: null
                                }
                            }
                        }
                    }
                }]), r
            }(m.default.Component)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = n(171),
            o = a(l),
            i = n(279),
            s = a(i),
            u = n(172),
            c = a(u),
            d = n(241),
            f = a(d);
        t.default = r;
        var p = n(1),
            m = a(p),
            E = n(387),
            h = a(E),
            g = n(389),
            v = a(g),
            y = n(770),
            b = a(y),
            N = n(771),
            S = a(N),
            w = n(590),
            T = a(w),
            _ = n(169),
            O = n(773);
        _.registry.addFactory(r, [b.default, S.default, T.default])
    },
    770: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(250),
            l = a(r),
            o = n(171),
            i = a(o),
            s = n(169),
            u = n(589),
            c = function e() {
                (0, i.default)(this, e), this.generateActions.apply(this, (0, l.default)((0, u.asyncActions)("getSettings")).concat(["saveSettings", "clearSettingsError", "saveSettingsError", "setExpertMode"]))
            };
        t.default = c, s.registry.addActions(c, [])
    },
    771: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(171),
            l = a(r),
            o = n(169),
            i = n(770),
            s = a(i),
            u = n(588),
            c = a(u),
            d = n(772),
            f = a(d),
            p = n(379),
            m = a(p),
            E = function() {
                function e(t, n, a) {
                    (0, l.default)(this, e), this.state = {
                        loading: !0,
                        error: null,
                        expertMode: !1,
                        settings: {
                            file: "",
                            portal: "https://ols.chaosgroup.com",
                            proxy: {
                                host: "",
                                port: 0,
                                type: "none",
                                username: "",
                                password: ""
                            },
                            diagnostics: {
                                logFile: "",
                                size: 0,
                                level: "info"
                            },
                            local: {
                                vrolHost: "0.0.0.0",
                                vrolPort: 30304,
                                dongleEnabled: !0,
                                vrlPort: 30314
                            },
                            readonly: !0
                        }
                    }, this.bindActions(t), this.bindActions(a), this.registerAsync(n)
                }
                return e.prototype.getSettings = function() {
                    this.getInstance().getSettings(), this.setState({
                        loading: !0
                    })
                }, e.prototype.getStatusSuccess = function() {
                    this.getSettings()
                }, e.prototype.getSettingsSuccess = function(e) {
                    this.setState({
                        settings: e,
                        loading: !1
                    })
                }, e.prototype.getSettingsError = function(e) {
                    this.setState({
                        error: "Could not get settings - " + e.response.status + " " + e.message,
                        loading: !1
                    })
                }, e.prototype.clearSettingsError = function() {
                    this.setState({
                        error: null
                    })
                }, e.prototype.saveSettings = function(e) {
                    return m.default.isEqual(this.state.settings, e) ? void this.preventDefault() : (this.setState({
                        loading: !0,
                        error: null,
                        settings: e
                    }), void this.getInstance().saveSettings(e))
                }, e.prototype.saveSettingsError = function(e) {
                    this.setState({
                        error: e.response.text,
                        loading: !1
                    })
                }, e.prototype.setExpertMode = function(e) {
                    this.setState({
                        expertMode: e
                    })
                }, e
            }();
        t.default = E, o.registry.addStore(E, [s.default, f.default, c.default])
    },
    772: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r() {
            return new u.default(function(e, t) {
                d.default.get("/status").end(function(n, a) {
                    n ? t(n) : a.body && a.body.ready ? e(a.body) : t(new Error("Server not ready."))
                })
            })
        }

        function l(e, t) {
            return (0, i.default)({}, (0, p.sourceMethod)("getSettings", e, function() {
                return new u.default(function(e, t) {
                    d.default.get("/config").end(function(n, a) {
                        return n ? t(n) : e(a.body)
                    })
                })
            }), {
                saveSettings: {
                    remote: function(e, n) {
                        return new u.default(function(e, a) {
                            d.default.post("/config").send(n).end(function(n) {
                                return n ? void a(n) : void(0, m.delayedRetry)(30, 1e3, function() {
                                    return t.getStatus(), r()
                                }).then(e, a)
                            })
                        })
                    },
                    success: e.getSettings,
                    error: e.saveSettingsError
                }
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(409),
            i = a(o),
            s = n(591),
            u = a(s);
        t.default = l;
        var c = n(597),
            d = a(c),
            f = n(169),
            p = n(589),
            m = n(604),
            E = n(770),
            h = a(E),
            g = n(588),
            v = a(g);
        f.registry.addFactory(l, [h.default, v.default])
    },
    773: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e) {
            return parseInt(e, 10)
        }

        function l(e) {
            return "true" === e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SettingsView = void 0;
        var o = n(171),
            i = a(o),
            s = n(172),
            u = a(s),
            c = n(279),
            d = a(c),
            f = n(241),
            p = a(f),
            m = n(1),
            E = a(m),
            h = n(387),
            g = a(h),
            v = n(379),
            y = a(v),
            b = n(774),
            N = n(586),
            S = n(775),
            w = n(416),
            T = n(776),
            _ = n(294),
            O = n(777),
            x = a(O);
        n(778);
        t.SettingsView = function(e) {
            function t(n) {
                (0, i.default)(this, t);
                var a = (0, u.default)(this, e.call(this, n));
                return a.state = a._propsToState(n), a
            }
            return (0, p.default)(t, e), (0, d.default)(t, null, [{
                key: "propTypes",
                get: function() {
                    return {
                        platform: g.default.string,
                        loading: g.default.bool,
                        error: g.default.string,
                        settings: g.default.object,
                        onSave: g.default.func,
                        expertMode: g.default.bool,
                        setExpertMode: g.default.func,
                        focusProxy: g.default.bool
                    }
                }
            }, {
                key: "defaultProps",
                get: function() {
                    return {
                        loading: !1,
                        error: null,
                        expertMode: !1,
                        setExpertMode: function() {
                            throw new Error("no handler for setting/unsettings expert mode")
                        },
                        platform: "",
                        settings: {
                            file: "",
                            portal: "https://ols.chaosgroup.com",
                            proxy: {
                                host: "",
                                port: 0,
                                type: "none",
                                username: "",
                                password: ""
                            },
                            diagnostics: {
                                logFile: "",
                                size: 0,
                                level: "info"
                            },
                            local: {
                                vrolHost: "0.0.0.0",
                                vrolPort: 30304,
                                dongleEnabled: !0,
                                vrlPort: 30314
                            },
                            readonly: !0
                        },
                        onSave: function() {},
                        focusProxy: !1
                    }
                }
            }]), t.prototype._propsToState = function(e) {
                return {
                    settings: y.default.cloneDeep(e.settings),
                    error: e.error,
                    loading: e.loading
                }
            }, t.prototype._focusStyle = function(e) {
                return this.props.focus === e ? {
                    border: "1px solid #0db5fe"
                } : null
            }, t.prototype._bindValue = function(e) {
                var t = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y.default.identity;
                return function(a) {
                    var r = n(a.target.value),
                        l = y.default.cloneDeep(t.state);
                    y.default.set(l, e, r), t.setState(l)
                }
            }, t.prototype.componentWillReceiveProps = function(e) {
                this.setState(this._propsToState(e))
            }, t.prototype._reset = function() {
                var e = this._propsToState(t.defaultProps).settings,
                    n = this.state.settings;
                e.readonly = !1, e.file = n.file, e.diagnostics.logFile = n.diagnostics.logFile, e.diagnostics.size = n.diagnostics.size, this.setState({
                    settings: e
                })
            }, t.prototype._save = function() {
                this._validate() && this.props.onSave(this.state.settings)
            }, t.prototype._validate = function() {
                return x.default.rules.hostURL.rule(y.default.get(this.state, "settings.portal", ""))
            }, t.prototype.render = function() {
                var e = this,
                    t = this.state.settings.readonly,
                    n = this.props.expertMode;
                return E.default.createElement("div", {
                    className: "container modal-container settings-container"
                }, E.default.createElement("div", {
                    className: "row"
                }, E.default.createElement("div", {
                    className: "panel panel-default"
                }, E.default.createElement(b.ErrorLine, {
                    error: this.props.error
                }), E.default.createElement(N.LoadingOverlay, {
                    loading: this.state.loading,
                    container: this,
                    message: "Please wait..."
                }), E.default.createElement("div", {
                    className: "pull-right",
                    style: {
                        paddingRight: "10px"
                    }
                }, E.default.createElement("form", null, E.default.createElement(w.FormGroup, null, E.default.createElement(w.Checkbox, {
                    checked: n,
                    onChange: function(t) {
                        return e.props.setExpertMode(t.target.checked)
                    }
                }, E.default.createElement("strong", null, "Expert Mode"))))), E.default.createElement("div", {
                    className: "panel-heading"
                }, E.default.createElement("h3", {
                    className: "panel-title text-uppercase"
                }, "Settings")), t ? E.default.createElement("div", {
                    className: "panel-body text-warning text-center bg-warning"
                }, "License server settings can only be changed through the license server machine itself.") : null, E.default.createElement("div", {
                    className: "panel-body container-fluid"
                }, E.default.createElement("h6", {
                    className: "text-uppercase"
                }, "Configuration File"), E.default.createElement("hr", {
                    className: "compact"
                }), E.default.createElement("div", {
                    className: "row"
                }, E.default.createElement("div", {
                    className: "col-md-3 text-uppercase"
                }), E.default.createElement("form", {
                    className: "form-horizontal col-md-9"
                }, E.default.createElement("fieldset", {
                    disabled: t
                }, E.default.createElement("div", {
                    className: "form-group"
                }, E.default.createElement("label", {
                    className: "col-md-3 control-label"
                }, "File Name:"), E.default.createElement("div", {
                    className: "col-md-9"
                }, E.default.createElement("input", {
                    type: "text",
                    className: "input full-width input-disabled",
                    value: this.state.settings.file,
                    readOnly: "true"
                })))))), E.default.createElement("h6", {
                    className: "text-uppercase"
                }, "Connection"), E.default.createElement("hr", {
                    className: "compact"
                }), E.default.createElement("div", {
                    className: "row"
                }, E.default.createElement("div", {
                    className: "col-md-3 text-uppercase"
                }), E.default.createElement(x.default.components.Form, {
                    className: "col-md-9 form-horizontal",
                    readOnly: t
                }, E.default.createElement("fieldset", {
                    disabled: t
                }, E.default.createElement(S.ProxySettings, {
                    value: this.state.settings.proxy,
                    platform: this.props.platform,
                    onChange: this._bindValue("settings.proxy"),
                    focused: "proxy" === this.props.focus,
                    disabled: t
                }), n ? E.default.createElement("div", {
                    className: "form-group"
                }, E.default.createElement("label", {
                    className: "col-md-3 control-label"
                }, "Online Service URL:"), E.default.createElement("div", {
                    className: "col-md-9"
                }, E.default.createElement(x.default.components.Input, {
                    type: "url",
                    className: "input full-width",
                    pattern: "https?://.+",
                    name: "settings.portal",
                    value: this.state.settings.portal,
                    onChange: this._bindValue("settings.portal"),
                    validations: ["required", "hostURL"]
                }))) : null))), E.default.createElement("h6", {
                    className: "text-uppercase"
                }, "License Server"), E.default.createElement("hr", {
                    className: "compact"
                }), E.default.createElement("div", {
                    className: "row"
                }, E.default.createElement("div", {
                    className: "col-md-3 text-uppercase"
                }), E.default.createElement("form", {
                    className: "col-md-9 form-horizontal"
                }, E.default.createElement("fieldset", {
                    disabled: t
                }, n ? E.default.createElement("div", {
                    className: "form-group"
                }, E.default.createElement("label", {
                    className: "col-md-3 control-label"
                }, "Network Visibility:"), E.default.createElement("div", {
                    className: "col-md-5"
                }, E.default.createElement("select", {
                    className: "input full-width" + (t ? " input-disabled" : ""),
                    value: this.state.settings.local.vrolHost,
                    onChange: this._bindValue("settings.local.vrolHost"),
                    readOnly: t
                }, E.default.createElement("option", {
                    value: "0.0.0.0"
                }, "Visible to Local Network"), E.default.createElement("option", {
                    value: "127.0.0.1"
                }, "Visible from This Machine"))), E.default.createElement("label", {
                    className: "col-md-2 control-label"
                }, "Port:"), E.default.createElement("div", {
                    className: "col-md-2"
                }, E.default.createElement("input", {
                    type: "number",
                    className: "input full-width",
                    min: "0",
                    value: this.state.settings.local.vrolPort,
                    name: "settings.local.vrolPort",
                    onChange: this._bindValue("settings.local.vrolPort", r),
                    readOnly: t
                }))) : null, E.default.createElement("div", {
                    className: "form-group"
                }, E.default.createElement("label", {
                    className: "col-md-3 control-label"
                }, "Dongle Subsystem:"), E.default.createElement("div", {
                    className: "col-md-5"
                }, E.default.createElement("select", {
                    className: "input full-width" + (t ? " input-disabled" : ""),
                    value: this.state.settings.local.dongleEnabled,
                    name: "settings.local.dongleEnabled",
                    onChange: this._bindValue("settings.local.dongleEnabled", l),
                    style: this._focusStyle("dongle"),
                    readOnly: t
                }, E.default.createElement("option", {
                    value: "true"
                }, "Enabled"), E.default.createElement("option", {
                    value: "false"
                }, "Disabled"))), this.state.settings.local.dongleEnabled && n ? E.default.createElement("label", {
                    className: "col-md-2 control-label"
                }, E.default.createElement("i", {
                    className: "fi-usb"
                }), " Port:") : null, E.default.createElement("div", {
                    className: "col-md-2"
                }, this.state.settings.local.dongleEnabled && n ? E.default.createElement("input", {
                    type: "number",
                    className: "input full-width",
                    min: "0",
                    value: this.state.settings.local.vrlPort,
                    name: "settings.local.vrlPort",
                    onChange: this._bindValue("settings.local.vrlPort", r),
                    readOnly: t
                }) : null))))), E.default.createElement("h6", {
                    className: "text-uppercase"
                }, "Diagnostics"), E.default.createElement("hr", {
                    className: "compact"
                }), E.default.createElement("div", {
                    className: "row"
                }, E.default.createElement("div", {
                    className: "col-md-3 text-uppercase"
                }), E.default.createElement("form", {
                    className: "col-md-9 form-horizontal"
                }, E.default.createElement("div", {
                    className: "form-group"
                }, E.default.createElement("label", {
                    className: "col-md-3 control-label"
                }, "Log Directory:"), E.default.createElement("div", {
                    className: "col-md-9"
                }, E.default.createElement("fieldset", {
                    disabled: t
                }, E.default.createElement("input", {
                    type: "text",
                    className: "input col-md-8 input-disabled",
                    value: this.state.settings.diagnostics.logFile,
                    readOnly: "true"
                }), E.default.createElement("div", {
                    className: "log-size input col-md-4 no-border"
                }, E.default.createElement("label", {
                    className: "control-label"
                }, "Log size:"), (0, T.closestReadable)(this.state.settings.diagnostics.size))))), E.default.createElement("div", {
                    className: "form-group"
                }, E.default.createElement("label", {
                    className: "col-md-3 control-label"
                }, "Log Level:"), E.default.createElement("div", {
                    className: "col-md-9"
                }, E.default.createElement("select", {
                    className: "input full-width" + (t ? " input-disabled" : ""),
                    value: this.state.settings.diagnostics.level,
                    disabled: t,
                    onChange: this._bindValue("settings.diagnostics.level"),
                    readOnly: t
                }, E.default.createElement("option", {
                    value: "error"
                }, "Errors Only"), E.default.createElement("option", {
                    value: "warn"
                }, "Errors and Warnings"), E.default.createElement("option", {
                    value: "info"
                }, "Detailed"), E.default.createElement("option", {
                    value: "debug"
                }, "Verbose"), E.default.createElement("option", {
                    value: "trace"
                }, "Extra Verbose"))))))), t ? E.default.createElement("div", {
                    className: "panel-footer text-right"
                }, E.default.createElement(_.Link, {
                    to: "/",
                    className: "btn btn-default no-border"
                }, "Close")) : E.default.createElement("div", {
                    className: "panel-footer text-right"
                }, E.default.createElement("button", {
                    name: "do-reset",
                    onClick: function() {
                        return e._reset()
                    },
                    className: "btn btn-warning no-border pull-left"
                }, "Reset to Defaults"), E.default.createElement("button", {
                    name: "do-save",
                    onClick: function() {
                        return e._save()
                    },
                    className: "btn btn-primary no-border",
                    disabled: !this._validate() || this.props.loading
                }, "Save"), E.default.createElement(_.Link, {
                    to: "/",
                    className: "btn btn-default no-border"
                }, "Close")))))
            }, t
        }(E.default.Component)
    },
    774: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ErrorLine = void 0;
        var r = n(171),
            l = a(r),
            o = n(279),
            i = a(o),
            s = n(172),
            u = a(s),
            c = n(241),
            d = a(c),
            f = n(1),
            p = a(f),
            m = n(387),
            E = a(m);
        t.ErrorLine = function(e) {
            function t() {
                return (0, l.default)(this, t), (0, u.default)(this, e.apply(this, arguments))
            }
            return (0, d.default)(t, e), t.prototype.render = function() {
                return this.props.error ? p.default.createElement("div", {
                    className: "text-danger bg-danger text-center",
                    style: {
                        padding: "10px 15px",
                        marginTop: 0
                    }
                }, this.props.error) : null
            }, (0, i.default)(t, null, [{
                key: "propTypes",
                get: function() {
                    return {
                        error: E.default.string
                    }
                }
            }, {
                key: "defaultProps",
                get: function() {
                    return {
                        error: null
                    }
                }
            }]), t
        }(p.default.Component)
    },
    775: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e) {
            return parseInt(e, 10)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ProxySettings = void 0;
        var l = n(582),
            o = a(l),
            i = n(260),
            s = a(i),
            u = n(279),
            c = a(u),
            d = n(172),
            f = a(d),
            p = n(241),
            m = a(p),
            E = n(171),
            h = a(E),
            g = n(1),
            v = a(g),
            y = n(387),
            b = a(y),
            N = n(379),
            S = a(N),
            w = "none",
            T = "auto",
            _ = function e(t) {
                (0, h.default)(this, e), this.target = {
                    value: t
                }
            };
        t.ProxySettings = function(e) {
            function t() {
                return (0, h.default)(this, t), (0, f.default)(this, e.apply(this, arguments))
            }
            return (0, m.default)(t, e), t.prototype._bindValue = function(e) {
                var t = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S.default.identity;
                return function(a) {
                    var r = n(a.target.value),
                        l = S.default.cloneDeep(t.props.value);
                    S.default.set(l, e, r), t.props.onChange(new _(l))
                }
            }, t.prototype.render = function() {
                var e, t = (e = {}, (0, s.default)(e, w, "None"), (0, s.default)(e, "http", "HTTP Proxy"), (0, s.default)(e, "https", "HTTPS Proxy"), e);
                /^(darwin|win32)/.test(this.props.platform) && (t[T] = "Automatic Proxy Detection");
                var n = this.props.value.type !== w,
                    a = this.props.value.type !== T,
                    l = this.props.focused ? {
                        border: "1px solid #0db5fe"
                    } : null;
                return v.default.createElement("fieldset", {
                    disabled: this.props.disabled
                }, v.default.createElement("div", {
                    className: "form-group"
                }, v.default.createElement("label", {
                    className: "col-md-3 control-label"
                }, "Use Proxy:"), v.default.createElement("div", {
                    className: "col-md-9"
                }, v.default.createElement("select", {
                    style: l,
                    className: "input full-width" + (this.props.disabled ? " input-disabled" : ""),
                    value: this.props.value.type,
                    name: "type",
                    onChange: this._bindValue("type"),
                    readOnly: this.props.disabled
                }, (0, o.default)(t).map(function(e) {
                    return v.default.createElement("option", {
                        key: e,
                        value: e
                    }, t[e])
                })))), n && a ? v.default.createElement("div", {
                    className: "form-group"
                }, v.default.createElement("label", {
                    className: " col-md-3 control-label"
                }, "IP or Hostname:"), v.default.createElement("div", {
                    className: "col-md-5"
                }, v.default.createElement("input", {
                    type: "text",
                    className: "input full-width",
                    value: this.props.value.host,
                    onChange: this._bindValue("host"),
                    pattern: "^(?!.*://).*"
                })), v.default.createElement("label", {
                    className: "col-md-2 control-label"
                }, "Port:"), v.default.createElement("div", {
                    className: "col-md-2"
                }, v.default.createElement("input", {
                    type: "number",
                    className: "input full-width",
                    value: this.props.value.port,
                    name: "port",
                    min: "0",
                    onChange: this._bindValue("port", r)
                }))) : null, n ? v.default.createElement("div", {
                    className: "form-group"
                }, v.default.createElement("label", {
                    className: "col-md-3 control-label"
                }, "Username:"), v.default.createElement("div", {
                    className: "col-md-3"
                }, v.default.createElement("input", {
                    type: "text",
                    className: "input full-width",
                    value: this.props.value.username,
                    onChange: this._bindValue("username")
                })), v.default.createElement("label", {
                    className: "col-md-3 control-label"
                }, "Password:"), v.default.createElement("div", {
                    className: "col-md-3"
                }, v.default.createElement("input", {
                    type: "password",
                    className: "input full-width",
                    value: this.props.value.password,
                    onChange: this._bindValue("password")
                }))) : null)
            }, (0, c.default)(t, null, [{
                key: "propTypes",
                get: function() {
                    return {
                        value: b.default.shape({
                            type: b.default.oneOf([w, "http", "https", T]),
                            host: b.default.string,
                            port: b.default.number,
                            username: b.default.string,
                            password: b.default.string
                        }),
                        disabled: b.default.bool,
                        onChange: b.default.func,
                        focused: b.default.bool,
                        platform: b.default.string
                    }
                }
            }, {
                key: "defaultProps",
                get: function() {
                    return {
                        value: {
                            type: w,
                            host: "",
                            port: 0,
                            username: "",
                            password: ""
                        },
                        disabled: !1,
                        onChange: function() {},
                        focused: !1,
                        platform: ""
                    }
                }
            }]), t
        }(v.default.Component)
    },
    776: function(e, t) {
        "use strict";

        function n(e) {
            var t = e,
                n = -1,
                a = [" kB", " MB", " GB", " TB", "PB", "EB", "ZB", "YB"];
            do t /= 1024, n++; while (t > 1024);
            return Math.max(t, .1).toFixed(1) + a[n]
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.closestReadable = n
    },
    778: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var r = n(409),
            l = a(r),
            o = n(1),
            i = a(o),
            s = n(777),
            u = a(s),
            c = document.createElement("a"),
            d = function(e) {
                return c.href = e, ("http:" === c.protocol || "https:" === c.protocol) && !(c.username || c.password || c.pathname.replace("/", "") || c.hash || c.search)
            };
        (0, l.default)(u.default.rules, {
            required: {
                rule: function(e) {
                    return e.trim()
                },
                hint: function() {
                    return i.default.createElement("span", {
                        className: "error is-visible"
                    }, "Required")
                }
            },
            hostURL: {
                rule: function(e) {
                    return d(e)
                },
                hint: function() {
                    return i.default.createElement("span", {
                        className: "error is-visible"
                    }, "Invalid address")
                }
            }
        })
    },
    779: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r() {
            return i.default.createElement("div", {
                className: "error-page",
                style: {
                    fontSize: "1.5em",
                    padding: "1em"
                }
            }, i.default.createElement("h1", null, "Activation request timed out"), i.default.createElement("h3", null, "Possible causes:"), i.default.createElement("p", null, "There was an error with the license server"), i.default.createElement("p", null, "You have not set your ", i.default.createElement(s.Link, {
                to: "/settings?focus=proxy"
            }, "proxy settings"), " correctly"), i.default.createElement("h4", null, i.default.createElement(s.Link, {
                to: "/"
            }, "Go Back")))
        }

        function l(e) {
            var t = e.params,
                n = e.location,
                a = n && n.query || {},
                l = t && t.splat;
            if ("activation_timeout" === a.type) return i.default.createElement(r, null);
            var o = u[l] && l || c,
                f = a.message || u[o] || d;
            return i.default.createElement("div", {
                className: "error-page"
            }, i.default.createElement("h1", null, o), i.default.createElement("h3", null, f), i.default.createElement("h4", null, i.default.createElement(s.Link, {
                to: "/"
            }, "Go Back")))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ErrorPage = l;
        var o = n(1),
            i = a(o),
            s = n(294),
            u = {
                403: "You do not have permissions to view this page",
                404: "The page you're looking for does not exist",
                408: "The request timed out",
                500: "There was an error with the server - Please try again later"
            },
            c = 404,
            d = "An unknown error occurred"
    },
    780: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e, t) {
            return function(n) {
                function a() {
                    return (0, s.default)(this, a), (0, f.default)(this, n.apply(this, arguments))
                }
                return (0, m.default)(a, n), a.prototype.componentWillMount = function() {
                    e.getBundles(this.props.params.bundleName)
                }, a.prototype.componentWillUnmount = function() {
                    e.resetState()
                }, a.prototype.render = function() {
                    var n = this,
                        a = this.props;
                    return h.default.createElement(b.default, {
                        inject: {
                            bundleName: function() {
                                return L.default.get(a, ["params", "bundleName"], "")
                            }
                        },
                        store: t,
                        actions: e
                    }, h.default.createElement(_.BorrowWizard, (0, o.default)({}, this.props, {
                        onComplete: e.selectBundles,
                        onAdded: e.addLicense,
                        onRemove: e.removeLicense,
                        onBorrow: function() {
                            setTimeout(x.default.push.bind(null, "/"), 2e3), n.props.onBorrow()
                        },
                        borrowLicenses: e.borrowLicenses
                    })))
                }, (0, c.default)(a, null, [{
                    key: "propTypes",
                    get: function() {
                        return {
                            params: v.default.shape({
                                bundleName: v.default.string
                            }),
                            onBorrow: v.default.func
                        }
                    }
                }]), a
            }(h.default.Component)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = n(409),
            o = a(l),
            i = n(171),
            s = a(i),
            u = n(279),
            c = a(u),
            d = n(172),
            f = a(d),
            p = n(241),
            m = a(p);
        t.default = r;
        var E = n(1),
            h = a(E),
            g = n(387),
            v = a(g),
            y = n(389),
            b = a(y),
            N = n(781),
            S = a(N),
            w = n(782),
            T = a(w),
            _ = n(784),
            O = n(293),
            x = a(O),
            C = n(169),
            I = n(379),
            L = a(I);
        C.registry.addFactory(r, [S.default, T.default])
    },
    781: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(250),
            l = a(r),
            o = n(171),
            i = a(o),
            s = n(169),
            u = n(589),
            c = function e() {
                (0, i.default)(this, e), this.generateActions.apply(this, (0, l.default)((0, u.asyncActions)("getBundles")).concat((0, l.default)((0, u.asyncActions)("getBundlesDetails")), (0, l.default)((0, u.asyncActions)("borrowLicenses")), ["selectBundles", "prev", "next", "addLicense", "removeLicense", "resetState"]))
            };
        t.default = c, s.registry.addActions(c, [])
    },
    782: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r() {
            var e;
            return e = {}, (0, E.default)(e, T, 0), (0, E.default)(e, _, 0), (0, E.default)(e, O, 0), e
        }

        function l(e) {
            for (var t in e) {
                var n = e[t];
                n[T] || n[_] || n[O] || v.default.unset(e, t)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = n(250),
            i = a(o),
            s = n(582),
            u = a(s),
            c = n(635),
            d = a(c),
            f = n(171),
            p = a(f),
            m = n(260),
            E = a(m),
            h = n(169),
            g = n(379),
            v = a(g),
            y = n(645),
            b = n(781),
            N = a(b),
            S = n(783),
            w = a(S),
            T = y.PRODUCT_TYPE.INTERFACE,
            _ = y.PRODUCT_TYPE.RENDER,
            O = y.PRODUCT_TYPE.DR,
            x = function() {
                function e(t, n) {
                    (0, p.default)(this, e), this._initialState = {
                        step: 0,
                        online: !0,
                        bundles: {},
                        licenses: {},
                        idToName: {},
                        nameToId: {},
                        free: {},
                        borrowError: null,
                        borrowing: !1
                    }, this.state = JSON.parse((0, d.default)(this._initialState)), this.bindActions(t), this.registerAsync(n)
                }
                return e.prototype.resetState = function() {
                    this.setState(this._initialState)
                }, e.prototype.prev = function() {
                    this.setState({
                        step: this.state.step - 1
                    })
                }, e.prototype.next = function() {
                    this.setState({
                        step: this.state.step + 1
                    })
                }, e.prototype.getBundles = function(e) {
                    this.getInstance().getBundles(e), this.preventDefault()
                }, e.prototype.getBundlesSuccess = function(e) {
                    var t = e.json,
                        n = e.selectedBundleId,
                        a = JSON.parse((0, d.default)(t));
                    this.getBundlesDetails((0, u.default)(a));
                    for (var r in a) a[r].amount = r == n ? 1 : 0;
                    this.setState({
                        bundles: a
                    })
                }, e.prototype.getBundlesDetails = function(e) {
                    this.getInstance().getBundlesDetails(e), this.preventDefault()
                }, e.prototype.getBundlesDetailsSuccess = function(e) {
                    var t = v.default.assign.apply(v.default, [{}].concat((0, i.default)(e))),
                        n = {},
                        a = {},
                        r = {},
                        l = {},
                        o = {};
                    for (var s in t) {
                        var u = t[s];
                        v.default.assign(r, u.total), v.default.assign(l, u.free), v.default.assign(o, u.engaged);
                        for (var c in u.productLabels) {
                            var d = u.productLabels[c];
                            n[d] = Number(c), a[c] = d
                        }
                    }
                    this.setState({
                        nameToId: n,
                        idToName: a,
                        total: r,
                        free: l,
                        engaged: o
                    })
                }, e.prototype.selectBundles = function(e) {
                    this.setState({
                        licenses: this.computeLicenses(e)
                    }), this.next()
                }, e.prototype.clearBundles = function() {
                    this.setState({
                        bundles: {}
                    })
                }, e.prototype.computeLicenses = function(e) {
                    var t = {};
                    for (var n in e)
                        for (var a = e[n], r = this.state.bundles[n], l = 0; l < r.products.length; l++) {
                            var o = r.products[l];
                            t[o] = this._addLicense(o, a, t[o])
                        }
                    return t
                }, e.prototype.borrowLicenses = function(e) {
                    this.setState({
                        borrowError: null,
                        borrowing: !0
                    }), this.getInstance().borrowLicenses(e)
                }, e.prototype.borrowLicensesSuccess = function() {
                    this.setState({
                        borrowError: null,
                        borrowing: !1
                    }), window.location.href = "#/borrowed-summary"
                }, e.prototype.borrowLicensesError = function(e) {
                    this.setState({
                        borrowError: e.response ? e.response.text : e.toString(),
                        borrowing: !1
                    })
                }, e.prototype.removeLicense = function(e) {
                    var t = e.productId,
                        n = e.type,
                        a = void 0 === n ? "" : n,
                        r = v.default.clone(this.state.licenses);
                    v.default.set(r, [t, a], 0) && (l(r, t), this.setState({
                        licenses: r
                    }))
                }, e.prototype.addLicense = function(e) {
                    var t = v.default.clone(this.state.licenses);
                    t[e] = this._addLicense(e, 1, t[e]), this.setState({
                        licenses: t
                    })
                }, e.prototype._addLicense = function(e) {
                    var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (t = {}, (0, E.default)(t, T, 0), (0, E.default)(t, _, 0), (0, E.default)(t, O, 0), t),
                        l = this.state.free[e] || r();
                    for (var o in l) l[o] > 0 && (a[o] += n);
                    return a
                }, e
            }();
        t.default = x, h.registry.addStore(x, [N.default, w.default])
    },
    783: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e) {
            return (0, f.default)({}, (0, h.sourceMethod)("getBundles", e, function(e, t) {
                return new c.default(function(e, n) {
                    m.default.get("/bundles/online").end(function(a, r) {
                        a ? n(a) : e({
                            json: r.body,
                            selectedBundleId: t
                        })
                    })
                })
            }), (0, h.sourceMethod)("getBundlesDetails", e, function(e, t) {
                var n = [],
                    a = !0,
                    r = !1,
                    l = void 0;
                try {
                    for (var i, u = function() {
                            var e = i.value;
                            n.push(new c.default(function(t, n) {
                                m.default.get("/bundle/" + e + "/summary/borrow").end(function(a, r) {
                                    a ? n(a) : t((0, o.default)({}, e, r.body))
                                })
                            }))
                        }, d = (0, s.default)(t); !(a = (i = d.next()).done); a = !0) u()
                } catch (e) {
                    r = !0, l = e
                } finally {
                    try {
                        !a && d.return && d.return()
                    } finally {
                        if (r) throw l
                    }
                }
                return c.default.all(n)
            }), (0, h.sourceMethod)("borrowLicenses", e, function(e, t) {
                return (0, g.promiseBody)(m.default.post("/offline/reserve").send(t))
            }))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = n(260),
            o = a(l),
            i = n(642),
            s = a(i),
            u = n(591),
            c = a(u),
            d = n(409),
            f = a(d);
        t.default = r;
        var p = n(597),
            m = a(p),
            E = n(169),
            h = n(589),
            g = n(603),
            v = n(781),
            y = a(v);
        E.registry.addFactory(r, [y.default])
    },
    784: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.BorrowWizard = void 0;
        var r = n(409),
            l = a(r),
            o = n(171),
            i = a(o),
            s = n(172),
            u = a(s),
            c = n(279),
            d = a(c),
            f = n(241),
            p = a(f),
            m = n(1),
            E = a(m),
            h = (n(294), n(387)),
            g = a(h),
            v = n(785),
            y = a(v),
            b = n(786),
            N = a(b),
            S = n(799),
            w = a(S),
            T = n(800),
            _ = a(T);
        t.BorrowWizard = function(e) {
            function t(n) {
                (0, i.default)(this, t);
                var a = (0, u.default)(this, e.call(this, n));
                return a.state = {
                    licenses: {}
                }, a
            }
            return (0, p.default)(t, e), (0, d.default)(t, null, [{
                key: "defaultProps",
                get: function() {
                    return {
                        step: 0,
                        online: !0,
                        bundleName: "",
                        bundles: {}
                    }
                }
            }, {
                key: "propTypes",
                get: function() {
                    return {
                        step: g.default.number,
                        online: g.default.bool,
                        params: g.default.object,
                        bundles: g.default.object,
                        onComplete: g.default.func,
                        onBorrowComplete: g.default.func,
                        borrowLicenses: g.default.func
                    }
                }
            }]), t.prototype.currentPage = function() {
                var e = this;
                if (this.props.online) switch (this.props.step) {
                    case 0:
                        return E.default.createElement(_.default, {
                            next: this.props.next
                        });
                    case 1:
                        return E.default.createElement(y.default, this.props);
                    case 2:
                        return E.default.createElement(N.default, (0, l.default)({}, this.props, {
                            onComplete: function(t) {
                                return e.setState({
                                    licenses: t
                                })
                            },
                            borrowLicenses: this.props.borrowLicenses
                        }));
                    case 3:
                        return E.default.createElement(w.default, (0, l.default)({}, this.props, {
                            licenses: this.state.licenses
                        }));
                    default:
                        throw new Error("Unknown borrow wizard step.")
                } else setTimeout(function() {
                    window.location.href = "#/borrow-offline"
                }, 1);
                return null
            }, t.prototype.render = function() {
                return E.default.createElement("div", {
                    className: "container"
                }, E.default.createElement("div", {
                    className: "row"
                }, this.currentPage()))
            }, t
        }(E.default.Component)
    },
    785: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(582),
            l = a(r),
            o = n(171),
            i = a(o),
            s = n(279),
            u = a(s),
            c = n(172),
            d = a(c),
            f = n(241),
            p = a(f),
            m = n(379),
            E = a(m),
            h = n(1),
            g = a(h),
            v = n(387),
            y = a(v),
            b = n(416),
            N = n(294),
            S = function(e) {
                function t(n) {
                    (0, i.default)(this, t);
                    var a = (0, d.default)(this, e.call(this, n));
                    return a.state = a._propsToState(n), a
                }
                return (0, p.default)(t, e), t.prototype._propsToState = function(e) {
                    return {
                        bundles: E.default.cloneDeep(e.bundles)
                    }
                }, t.prototype._bundleAmounts = function() {
                    var e = E.default.mapValues(this.state.bundles, function(e) {
                        return e.amount || 0
                    });
                    return E.default.pickBy(e, function(e) {
                        return e > 0
                    })
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.setState(this._propsToState(e))
                }, t.prototype.bundleItem = function(e) {
                    var t = this,
                        n = this.state.bundles[e],
                        a = n.label.split(" | "),
                        r = a.pop(),
                        l = a.pop(),
                        o = {
                            src: "/img/" + (l || "") + "_logo.svg",
                            alt: l + " Logo"
                        },
                        i = function(n) {
                            var a = E.default.cloneDeep(t.state);
                            a.bundles[e].amount = parseInt(n.target.value, 10), t.setState(a)
                        },
                        s = function() {
                            var n = E.default.cloneDeep(t.state),
                                a = n.bundles[e];
                            a.amount = (a.amount || 0) + 1, t.setState(n)
                        };
                    return g.default.createElement("div", {
                        key: e,
                        className: "row borrow-select-bundle-tile"
                    }, g.default.createElement("div", {
                        className: "col-md-offset-3 col-md-6"
                    }, g.default.createElement("a", {
                        className: "bundle-tile-small no-select",
                        onClick: s
                    }, l ? g.default.createElement("div", {
                        className: "logo-holder " + (l ? l.replace("-", "").toLowerCase() + "-logo" : "")
                    }, g.default.createElement("img", o)) : null, g.default.createElement("div", {
                        className: "bundle-name"
                    }, r), g.default.createElement("div", {
                        className: "bundle-version"
                    }, n.version), g.default.createElement("input", {
                        type: "number",
                        min: "0",
                        className: "form-control borrow-select-bundle-input",
                        value: n.amount,
                        onChange: i,
                        onClick: function(e) {
                            return e.stopPropagation()
                        }
                    }))))
                }, t.prototype.render = function() {
                    var e = this,
                        t = g.default.createElement("h3", {
                            className: "text-uppercase"
                        }, "Borrow Licenses - Select Products (Step 2/4)"),
                        n = g.default.createElement("div", {
                            className: "text-right"
                        }, g.default.createElement(N.Link, {
                            className: "btn btn-default no-border",
                            to: "/"
                        }, "Close"), g.default.createElement("button", {
                            className: "btn btn-default no-border wizard-prev",
                            onClick: this.props.prev
                        }, "Back"), g.default.createElement("a", {
                            className: "btn btn-primary borrow-preview wizard-next",
                            onClick: function() {
                                return e.props.onComplete(e._bundleAmounts())
                            }
                        }, "Preview"));
                    return g.default.createElement(b.Panel, {
                        className: "borrow",
                        header: t,
                        footer: n
                    }, g.default.createElement("p", null, "Enter the number of machines you plan on working with these products."), g.default.createElement("p", null, "Appropriate number and type of licenses will be added to the list of licenses to borrow. You will be able to further adjust these values at the next page."), g.default.createElement("div", {
                        className: "borrow-list"
                    }, g.default.createElement("div", {
                        className: "row text-muted"
                    }, g.default.createElement("div", {
                        className: "col-xs-offset-1 col-xs-5 col-md-offset-3 col-md-4"
                    }, "Product"), g.default.createElement("div", {
                        className: "col-xs-5 col-md-2 text-right"
                    }, "Number of Machines")), g.default.createElement("hr", {
                        className: "select-products-hr"
                    }), (0, l.default)(this.props.bundles).map(this.bundleItem.bind(this))))
                }, (0, u.default)(t, null, [{
                    key: "defaultProps",
                    get: function() {
                        return {
                            bundles: {},
                            onComplete: function() {},
                            onClose: function() {}
                        }
                    }
                }, {
                    key: "propTypes",
                    get: function() {
                        return {
                            bundles: y.default.object,
                            onComplete: y.default.func,
                            onClose: y.default.func
                        }
                    }
                }]), t
            }(g.default.Component);
        t.default = S
    },
    786: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e) {
            function t(t) {
                for (var r = e.free, l = e.onRemove, o = S.PRODUCT_TYPE.INTERFACE, i = S.PRODUCT_TYPE.RENDER, s = S.PRODUCT_TYPE.DR, u = n[t], c = function(e) {
                        13 != e.which && 13 != e.keyCode || e.preventDefault()
                    }, d = [], f = [o, i, s], p = function() {
                        var e = f[m];
                        0 !== u[e] && d.push(g.default.createElement("div", {
                            key: e,
                            className: "borrow-row"
                        }, g.default.createElement("div", {
                            className: "col-md-offset-1 col-md-4 product-name"
                        }, a[t]), g.default.createElement("div", {
                            className: "col-md-2"
                        }, S.INVERSE_PRODUCT_TYPE[e]), g.default.createElement("div", {
                            className: "col-md-2 license-type"
                        }, g.default.createElement("input", {
                            type: "number",
                            className: "input col-xs-12 col-md-6 col-lg-7",
                            name: t + "." + e,
                            defaultValue: u[e],
                            min: "1",
                            max: r[t][e],
                            onKeyDown: c
                        }), g.default.createElement("div", {
                            className: "input borrow-max col-xs-12 col-md-6 col-lg-5"
                        }, r[t][e])), g.default.createElement("div", {
                            className: "col-xs-12 col-md-2 remove-button"
                        }, g.default.createElement("button", {
                            className: "btn btn-error borrow-remove full-width",
                            onClick: function() {
                                return l({
                                    productId: t,
                                    type: e
                                })
                            }
                        }, "Remove"))))
                    }, m = 0; m < f.length; m++) p();
                return 0 === d.length ? null : g.default.createElement("div", {
                    className: "product-rows",
                    key: t
                }, d)
            }
            var n = e.licenses,
                a = e.idToName,
                r = e.borrowLicenses,
                o = e.prev,
                i = e.onAdded,
                s = e.borrowing,
                u = e.borrowError,
                c = g.default.createElement("h3", {
                    className: "text-uppercase"
                }, "Borrow Licenses - Preview Licenses (Step 3/4)"),
                d = "col-xs-12 col-md-2 btn pull-right",
                f = g.default.createElement("div", {
                    className: "text-right",
                    style: {
                        height: "45px"
                    }
                }, g.default.createElement("button", {
                    className: d + " wizard-next btn-primary",
                    onClick: function() {
                        var e = document.getElementsByTagName("form")[0];
                        e && e.checkValidity() && r(l())
                    },
                    disabled: E.default.isEmpty(n)
                }, "Borrow"), g.default.createElement("button", {
                    className: d + " btn-default no-border wizard-prev",
                    onClick: o
                }, "Back"), g.default.createElement(y.Link, {
                    className: d + " btn-default borrow-close",
                    to: "/"
                }, "Close")),
                m = (0, p.default)(n),
                h = E.default.difference((0, p.default)(a), m),
                b = h.map(function(e) {
                    return {
                        value: e,
                        label: a[e]
                    }
                }),
                _ = g.default.createElement(N.default, {
                    className: "col-md-offset-1 col-md-10 add-licenses-input",
                    placeholder: "Add another license",
                    name: "new-license",
                    options: b,
                    ignoreCase: !0,
                    matchProp: "label",
                    mathPos: "any",
                    noResultsText: "No products available",
                    onChange: function(e) {
                        return i(Number(e.value))
                    }
                }),
                O = g.default.createElement(v.Tooltip, {
                    id: "auto-renew-help"
                }, "When the borrow time of the licenses is about to expire, the system will automatically try to re-borrow them for another two week period.", g.default.createElement("br", null), g.default.createElement("br", null), "Requires internet connection near the expiry period."),
                x = g.default.createElement("div", {
                    className: "row keep-row"
                }, g.default.createElement("div", {
                    className: "push-right"
                }), g.default.createElement(v.OverlayTrigger, {
                    placement: "left",
                    overlay: O
                }, g.default.createElement("div", {
                    className: "keep-hover-info"
                })), g.default.createElement("label", {
                    htmlFor: "renew",
                    className: "keep-label"
                }, "Auto-renew licenses"), g.default.createElement("div", {
                    className: "keep pull-right"
                }, g.default.createElement("input", {
                    className: "keep-input",
                    id: "renew",
                    type: "checkbox",
                    name: "renew"
                }), g.default.createElement("label", {
                    className: "keep-paddle",
                    htmlFor: "renew"
                }, g.default.createElement("span", {
                    className: "sr-only"
                }, "Auto-renew licenses")))),
                C = u;
            return "PERMISSION_DENIED" == u ? C = "The licenses you are attempting to borrow could not be borrowed. There are not enough available licenses or they are about to expire." : "RATE_LIMITED" == u ? C = "Too many borrowing attempts. Please try again later." : "FILE_SYSTEM_ERROR" == u ? C = "The licenses you are attempting to borrow could not be saved." : "UNKNOWN_ERROR" == u && (C = "The licenses you are attempting to borrow could not be borrowed."), g.default.createElement(v.Panel, {
                className: "borrow modal-container",
                header: c,
                footer: f
            }, g.default.createElement(w.LoadingOverlay, {
                loading: s,
                container: this,
                message: "BORROWING"
            }), g.default.createElement(T.ErrorLine, {
                error: C
            }), g.default.createElement("p", null, "Preview and adjust the precise number of licenses to borrow."), g.default.createElement("form", {
                className: "borrow-list"
            }, g.default.createElement("div", {
                className: "row text-muted"
            }, g.default.createElement("div", {
                className: "col-md-offset-1 col-md-4"
            }, "Product Name"), g.default.createElement("div", {
                className: "col-md-2"
            }, "License Type"), g.default.createElement("div", {
                className: "col-md-2"
            }, "Number of Licenses"), g.default.createElement("div", {
                className: "col-md-offset-1 col-md-1"
            }, "Remove")), g.default.createElement("hr", null), E.default.isEmpty(n) ? g.default.createElement("div", {
                className: "row"
            }, g.default.createElement("div", {
                className: "col-md-12 text-center no-products-message"
            }, "No products are selected for borrowing.")) : (0, p.default)(n).map(t), g.default.createElement("div", {
                className: "row add-licenses"
            }, _), E.default.isEmpty(n) ? null : x))
        }

        function l() {
            var e = S.PRODUCT_TYPE.INTERFACE,
                t = S.PRODUCT_TYPE.RENDER,
                n = S.PRODUCT_TYPE.DR,
                a = {},
                r = E.default.concat.apply(E.default, [
                    []
                ].concat((0, d.default)(document.querySelectorAll("input[type=number]")))),
                l = document.getElementById("renew");
            r.forEach(function(r) {
                var l, o = r.name,
                    s = r.value,
                    c = o.split("."),
                    d = (0, u.default)(c, 2),
                    f = d[0],
                    p = d[1];
                a[f] = a[f] || (l = {}, (0, i.default)(l, e, 0), (0, i.default)(l, t, 0), (0, i.default)(l, n, 0), l), a[f][p] = Number(s), a[f].productId = Number(f)
            });
            for (var o in a) {
                var s = 0 + E.default.get(a, o + "." + e, 0) + E.default.get(a, o + "." + t, 0) + E.default.get(a, o + "." + n, 0);
                0 === s && delete a[o]
            }
            return E.default.isEmpty(a) ? {} : (a.renew = Boolean(l.checked), a)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(260),
            i = a(o),
            s = n(638),
            u = a(s),
            c = n(250),
            d = a(c),
            f = n(582),
            p = a(f);
        t.default = r;
        var m = n(379),
            E = a(m),
            h = n(1),
            g = a(h),
            v = n(416),
            y = n(294),
            b = n(787),
            N = a(b),
            S = n(645),
            w = n(586),
            T = n(774)
    },
    799: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e) {
            var t = l(e.props.licenses);
            t.onreadystatechange = function() {
                var t = Boolean(this.readyState == XMLHttpRequest.DONE);
                t && (e.setState({
                    loaded: t
                }), e.props.onBorrow())
            }, e.setState({
                xhr: t
            })
        }

        function l(e) {
            var t = new XMLHttpRequest;
            return t.open("POST", "/offline/reserve", !0), t.setRequestHeader("Content-Type", "application/json"), t.send((0, i.default)(e)), t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = n(635),
            i = a(o),
            s = n(171),
            u = a(s),
            c = n(279),
            d = a(c),
            f = n(172),
            p = a(f),
            m = n(241),
            E = a(m),
            h = n(1),
            g = a(h),
            v = n(379),
            y = a(v),
            b = n(416),
            N = n(294),
            S = n(387),
            w = a(S),
            T = function(e) {
                function t(n) {
                    (0, u.default)(this, t);
                    var a = (0, p.default)(this, e.call(this, n));
                    return a.state = {
                        xhr: null,
                        loaded: !1
                    }, a
                }
                return (0, E.default)(t, e), t.prototype.componentWillUpdate = function() {
                    this.state.xhr || y.default.isEmpty(this.props.licenses) || r(this)
                }, t.prototype.componentWillMount = function() {
                    this.state.xhr || y.default.isEmpty(this.props.licenses) || r(this)
                }, t.prototype.render = function() {
                    var e = g.default.createElement("h3", {
                            className: "text-uppercase"
                        }, "Borrow Licenses - Finish (Step 4/4)"),
                        t = g.default.createElement("div", {
                            className: "text-right"
                        }, g.default.createElement(N.Link, {
                            className: "btn btn-default",
                            to: "/"
                        }, "Close")),
                        n = void 0;
                    switch (!0) {
                        case y.default.isEmpty(this.props.licenses):
                            n = "No Licenses Selected. Please try again";
                            break;
                        case this.state.loaded:
                            n = "Licenses successfully borrowed!";
                            break;
                        default:
                            n = "Please wait while licenses are borrowed..."
                    }
                    return g.default.createElement(b.Panel, {
                        className: "borrow",
                        header: e,
                        footer: t
                    }, g.default.createElement("h1", null, n))
                }, (0, d.default)(t, null, [{
                    key: "propTypes",
                    get: function() {
                        return {
                            licenses: w.default.object,
                            onBorrow: w.default.func
                        }
                    }
                }, {
                    key: "defaultProps",
                    get: function() {
                        return {
                            licenses: {},
                            onBorrowComplete: function() {}
                        }
                    }
                }]), t
            }(g.default.Component);
        t.default = T
    },
    800: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e) {
            var t = e.next,
                n = "https://docs.chaosgroup.com/display/LICENSE/Borrowing+Licenses+for+Offline+Use";
            return o.default.createElement("div", {
                className: "borrow panel panel-default"
            }, o.default.createElement("h3", {
                className: "text-uppercase panel-title panel-heading"
            }, "Borrow Licenses - About borrowing (step 1/4)"), o.default.createElement("div", {
                className: "borrow-info panel-body"
            }, o.default.createElement("div", null, "This wizard will guide you through the steps necessary to use your Online Licenses while disconnected from the Internet."), o.default.createElement("br", null), o.default.createElement("hr", null), o.default.createElement("p", null, o.default.createElement("b", null, "Note: "), o.default.createElement("a", {
                href: n,
                target: "_blank"
            }, "Borrowing a license"), " ", "reserves one of your floating licenses for 14 days, making it unavailable to other license servers until you return it."), o.default.createElement("p", null, "It is recommended that you borrow a license only when necessary.")), o.default.createElement("div", {
                className: "text-right panel-footer"
            }, o.default.createElement(i.Link, {
                className: "btn btn-default borrow-close",
                to: "/"
            }, "Close"), o.default.createElement("button", {
                className: "btn btn-primary wizard-next",
                onClick: t
            }, "Next")))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = r;
        var l = n(1),
            o = a(l),
            i = n(294)
    },
    801: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e, t, n) {
            function a(e, n) {
                E.default.get(t.state, "status.online.available") && n({
                    pathname: "/borrow"
                })
            }
            var r = function(e) {
                function t() {
                    return (0, o.default)(this, t), (0, s.default)(this, e.apply(this, arguments))
                }
                return (0, c.default)(t, e), t.prototype.render = function() {
                    return p.default.createElement("div", {
                        className: "container"
                    }, p.default.createElement("div", {
                        className: "row"
                    }, p.default.createElement(n, null)))
                }, t
            }(p.default.Component);
            return p.default.createElement(b.Route, {
                name: "Upload Borrow File",
                path: "borrow-offline",
                component: r,
                onEnter: a
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = n(171),
            o = a(l),
            i = n(172),
            s = a(i),
            u = n(241),
            c = a(u);
        t.createOfflineBorrowWizard = r;
        var d = n(169),
            f = n(1),
            p = a(f),
            m = n(379),
            E = a(m),
            h = n(802),
            g = n(804),
            v = n(590),
            y = a(v),
            b = n(294);
        d.registry.addFactory(r, [g.OfflineBorrowStore, y.default, h.createUploadFile])
    },
    802: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e, t, n, a) {
            var r = function(r) {
                function l() {
                    return (0, o.default)(this, l), (0, s.default)(this, r.apply(this, arguments))
                }
                return (0, c.default)(l, r), l.prototype.componentWillMount = function() {
                    n.getStatus()
                }, l.prototype.render = function() {
                    return p.default.createElement(E.default, {
                        stores: [t, a]
                    }, p.default.createElement(S.UploadFileView, {
                        offlineBorrow: t.state,
                        uploadFile: e.uploadFile,
                        offlineStatus: a.state.status.offline
                    }))
                }, l
            }(p.default.Component);
            return r
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = n(171),
            o = a(l),
            i = n(172),
            s = a(i),
            u = n(241),
            c = a(u);
        t.createUploadFile = r;
        var d = n(169),
            f = n(1),
            p = a(f),
            m = n(389),
            E = a(m),
            h = n(803),
            g = n(804),
            v = n(588),
            y = a(v),
            b = n(590),
            N = a(b),
            S = n(807);
        d.registry.addFactory(r, [h.OfflineBorrowActions, g.OfflineBorrowStore, y.default, N.default])
    },
    803: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.OfflineBorrowActions = void 0;
        var r = n(250),
            l = a(r),
            o = n(171),
            i = a(o),
            s = n(169),
            u = n(589),
            c = t.OfflineBorrowActions = function e() {
                (0, i.default)(this, e), this.generateActions.apply(this, (0, l.default)((0, u.asyncActions)("uploadFile")))
            };
        s.registry.addActions(c, [])
    },
    804: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.OfflineBorrowStore = void 0;
        var r = n(171),
            l = a(r),
            o = n(169),
            i = n(803),
            s = n(805),
            u = n(806),
            c = t.OfflineBorrowStore = function() {
                function e(t, n, a) {
                    (0, l.default)(this, e), this.state = {
                        view: u.VIEW_UPLOAD_FILE,
                        file: null,
                        uploading: !1,
                        uploadingError: null
                    }, this.bindActions(t), this.registerAsync(n), this.history = a
                }
                return e.prototype.uploadFile = function(e) {
                    this.setState({
                        file: e,
                        uploading: !0,
                        uploadingError: null
                    }), this.getInstance().uploadFile(e)
                }, e.prototype.uploadFileSuccess = function() {
                    this.setState({
                        uploading: !1,
                        view: u.VIEW_SUCCESS
                    }), this.history.push("/borrowed-summary")
                }, e.prototype.uploadFileError = function(e) {
                    this.setState({
                        uploading: !1,
                        uploadingError: e.toString()
                    })
                }, e.canRenderSummary = function() {
                    return this.state.view === u.VIEW_SUCCESS
                }, e
            }();
        o.registry.addStore(c, [i.OfflineBorrowActions, s.createOfflineBorrowWizardSource, "history"])
    },
    805: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e) {
            return (0, o.default)({}, (0, u.sourceMethod)("uploadFile", e, (0, c.fileUploadToUrl)("/offline")))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = n(409),
            o = a(l);
        t.createOfflineBorrowWizardSource = r;
        var i = n(169),
            s = n(803),
            u = n(589),
            c = n(603);
        i.registry.addFactory(r, [s.OfflineBorrowActions])
    },
    806: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.VIEW_UPLOAD_FILE = "upload-file", t.VIEW_SUCCESS = "upload-file-success"
    },
    807: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r() {
            return f.default.createElement("h3", {
                className: "text-uppercase"
            }, "Borrow Licenses - Upload Offline File (Step 1/2)")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.UploadFileView = void 0;
        var l = n(171),
            o = a(l),
            i = n(172),
            s = a(i),
            u = n(241),
            c = a(u),
            d = n(1),
            f = a(d),
            p = n(416),
            m = n(808),
            E = a(m),
            h = n(774),
            g = n(586);
        t.UploadFileView = function(e) {
            function t() {
                return (0, o.default)(this, t), (0, s.default)(this, e.apply(this, arguments))
            }
            return (0, c.default)(t, e), t.prototype.render = function() {
                var e = this,
                    t = this.props,
                    n = t.uploadFile,
                    a = t.offlineBorrow,
                    l = (t.offlineStatus, f.default.createElement("div", {
                        className: "text-right"
                    }, f.default.createElement("a", {
                        className: "btn btn-primary borrow-preview wizard-next",
                        onClick: function() {
                            return null != e.state ? n(e.state.file) : alert("Select an offline license file to upload.")
                        }
                    }, "Upload")));
                return f.default.createElement(p.Panel, {
                    className: "borrow",
                    header: r(),
                    footer: l
                }, f.default.createElement(g.LoadingOverlay, {
                    message: "UPLOADING",
                    loading: a.uploading,
                    container: this
                }), f.default.createElement(h.ErrorLine, {
                    error: a.uploadingError
                }), f.default.createElement("div", {
                    className: "row"
                }, f.default.createElement("div", {
                    className: "col-xs-12 bg-warning text-warning text-center",
                    style: {
                        padding: "10px 15px",
                        marginTop: 0
                    }
                }, "Connection to Online Licensing is unavailable. If this is not intended, try fixing connection ", f.default.createElement("a", {
                    href: "#/settings?focus=proxy"
                }, f.default.createElement("strong", null, "settings")), ".")), f.default.createElement("hr", {
                    className: "compact"
                }), f.default.createElement("p", {
                    style: {
                        fontSize: "larger"
                    }
                }, "You can still borrow licenses for offline usage:"), f.default.createElement("ul", {
                    style: {
                        fontSize: "larger"
                    }
                }, f.default.createElement("li", null, "Visit ", f.default.createElement("a", {
                    href: "https://my.chaosgroup.com",
                    target: "_blank"
                }, "my.chaosgroup.com"), " on a machine with Internet connection available"), f.default.createElement("li", null, "Follow the provided instructions for borrowing licenses"), f.default.createElement("li", null, "Download offline license file (offline.bin)"), f.default.createElement("li", null, "Provide the offline license file (offline.bin) in the area below")), f.default.createElement(E.default, {
                    multiple: !1,
                    disablePreview: !0,
                    onDrop: function(t) {
                        return e.setState({
                            file: t[0]
                        })
                    },
                    className: "fileArea",
                    activeStyle: {
                        border: "1px solid black",
                        background: "#ebebeb"
                    }
                }, f.default.createElement("h3", {
                    className: "text-uppercase text-muted"
                }, "Click here or drag an offline license file"), f.default.createElement("div", {
                    style: {
                        fontSize: "larger"
                    }
                }, null != this.state ? f.default.createElement("p", null, "Offline license file: ", f.default.createElement("strong", null, this.state.file.name)) : f.default.createElement("p", null, f.default.createElement("img", {
                    src: "/img/upload.png",
                    className: "fileIcon"
                })), null != this.state ? f.default.createElement("p", null, "Press 'Upload' button below to continue.") : null)))
            }, t
        }(f.default.Component)
    },
    809: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e, t, n) {
            var a = function(a) {
                function r() {
                    return (0, i.default)(this, r), (0, u.default)(this, a.apply(this, arguments))
                }
                return (0, d.default)(r, a), r.prototype.componentWillMount = function() {
                    e.getStatus()
                }, r.prototype.render = function() {
                    var a = {
                        notifications: function() {
                            return {
                                store: t,
                                value: t.getNotifications()
                            }
                        }
                    };
                    return p.default.createElement("div", {
                        className: "container"
                    }, p.default.createElement("div", {
                        className: "row"
                    }, p.default.createElement(n, null)), p.default.createElement("div", {
                        className: "row"
                    }, p.default.createElement(E.default, {
                        stores: a
                    }, p.default.createElement(w.NotificationsView, {
                        hideNotification: e.hideNotification
                    }))))
                }, r
            }(p.default.Component);
            return a
        }

        function l(e) {
            return p.default.createElement(h.Route, {
                path: "notifications",
                name: "Notifications",
                component: e
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(171),
            i = a(o),
            s = n(172),
            u = a(s),
            c = n(241),
            d = a(c);
        t.createNotificationsPage = r, t.createNotificationsRoute = l;
        var f = n(1),
            p = a(f),
            m = n(389),
            E = a(m),
            h = n(294),
            g = n(169),
            v = n(588),
            y = a(v),
            b = n(590),
            N = a(b),
            S = n(810),
            w = n(812);
        g.registry.addFactory(r, [y.default, N.default, S.createErrorList]), g.registry.addFactory(l, [r])
    },
    810: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e, t) {
            var n = function(n) {
                function a() {
                    return (0, o.default)(this, a), (0, s.default)(this, n.apply(this, arguments))
                }
                return (0, c.default)(a, n), a.prototype.componentWillMount = function() {
                    e.getErrors()
                }, a.prototype.render = function() {
                    return f.default.createElement(m.default, {
                        store: t
                    }, f.default.createElement(v.ErrorListView, {
                        onAcknowledge: e.acknowledgeError
                    }))
                }, a
            }(f.default.Component);
            return n
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = n(171),
            o = a(l),
            i = n(172),
            s = a(i),
            u = n(241),
            c = a(u);
        t.createErrorList = r;
        var d = n(1),
            f = a(d),
            p = n(389),
            m = a(p),
            E = n(169),
            h = n(608),
            g = n(609),
            v = n(811);
        E.registry.addFactory(r, [h.ErrorListActions, g.ErrorListStore])
    },
    811: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e) {
            var t = (e.loading, e.loadingError),
                n = e.errors,
                a = e.onAcknowledge,
                r = (0, o.default)(n).map(function(e) {
                    var t = d.default.clone(n[e]);
                    return t.time = new Date(t.time), t.err && (t.msg += " (" + t.err.message + ")"), t
                }).sort(function(e, t) {
                    return t.time - e.time
                });
            return s.default.createElement(u.Panel, {
                header: s.default.createElement("span", {
                    className: "text-uppercase"
                }, "Server Messages")
            }, s.default.createElement(f.ErrorLine, {
                error: t
            }), d.default.isEmpty(n) ? s.default.createElement("div", {
                className: "no-error-messages"
            }, "No messages to show.") : s.default.createElement("table", {
                className: "table table-striped"
            }, s.default.createElement("thead", null, s.default.createElement("tr", {
                className: "text-muted"
            }, s.default.createElement("th", {
                className: "text-center"
            }, "Date / Time"), s.default.createElement("th", {
                width: "70%"
            }, "Message"), s.default.createElement("th", {
                className: "text-center"
            }, "Acknowledge"))), s.default.createElement("tbody", null, r.map(function(e) {
                return s.default.createElement("tr", {
                    key: e.key
                }, s.default.createElement("td", {
                    style: {
                        verticalAlign: "middle"
                    }
                }, e.time.toLocaleString()), s.default.createElement("td", {
                    style: {
                        verticalAlign: "middle"
                    }
                }, e.msg), s.default.createElement("td", {
                    style: {
                        verticalAlign: "middle"
                    },
                    className: "text-center"
                }, s.default.createElement("a", {
                    className: "btn btn-text btn-ack",
                    onClick: function() {
                        return a(e.key)
                    }
                }, s.default.createElement("img", {
                    className: "ok-tick",
                    src: "/img/ok.svg"
                }))))
            }))), s.default.createElement("a", {
                href: "/logs/download",
                download: "diagnostics.zip",
                className: "pull-right btn btn-primary"
            }, "Download Logs"))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = n(582),
            o = a(l);
        t.ErrorListView = r;
        var i = n(1),
            s = a(i),
            u = n(416),
            c = n(379),
            d = a(c),
            f = n(774);
        n(586)
    },
    812: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e) {
            return e.notifications && 0 !== (0, i.default)(e.notifications).length ? u.default.createElement(c.Panel, {
                header: u.default.createElement("span", {
                    className: "text-uppercase"
                }, "Notifications")
            }, (0, i.default)(e.notifications).map(function(t) {
                var n = e.notifications[t];
                switch (t) {
                    case "flpVersion":
                        return u.default.createElement("div", {
                            key: t,
                            className: "row"
                        }, u.default.createElement("div", {
                            className: "col-xs-12"
                        }, u.default.createElement("strong", null, "Update Available"), u.default.createElement("br", null), u.default.createElement("a", {
                            className: "btn btn-sm btn-primary pull-right",
                            target: "_blank",
                            href: n.downloadUrl
                        }, "Download"), "License Server | ", n.versionStr, " ", u.default.createElement("br", null), "Release date: ", new Date(n.releaseDate).toDateString()));
                    case "expiringOnline":
                    case "expiringOffline":
                    case "expiringDongle":
                        return u.default.createElement("div", {
                            key: t,
                            className: "row"
                        }, u.default.createElement("div", {
                            className: "col-xs-12"
                        }, u.default.createElement("strong", null, t.substr("expiring".length), " License", 1 == n.expiration.length ? " " : "s ", "expiring soon"), u.default.createElement("br", null), n.expiration.map(function(e, t) {
                            return u.default.createElement("p", {
                                key: t
                            }, e.productLabel, " ", u.default.createElement("br", null), "Expiry Date: ", new Date(e.expiryDate).toDateString())
                        })));
                    default:
                        return u.default.createElement("div", {
                            key: t,
                            className: "row"
                        }, u.default.createElement("div", {
                            className: "col-xs-6"
                        }, u.default.createElement("strong", null, n.title), u.default.createElement("br", null), n.message.split("\n").reduce(l(u.default.createElement.bind(null, "br")), [])), u.default.createElement("div", {
                            className: "col-xs-6 text-right"
                        }, (n.actions || []).map(function(e, t) {
                            return u.default.createElement("a", {
                                key: t,
                                style: {
                                    margin: "5px"
                                },
                                className: "btn btn-sm btn-default",
                                href: e.link
                            }, e.label)
                        }), u.default.createElement("a", {
                            style: {
                                margin: "5px"
                            },
                            className: "btn btn-sm btn-text",
                            onClick: function() {
                                return e.hideNotification(t)
                            }
                        }, "Dismiss")))
                }
            }).reduce(l(u.default.createElement.bind(null, "hr")), [])) : null
        }

        function l(e) {
            return function(t, n, a, r) {
                return t.push(n), a + 1 < r.length && t.push(e({
                    key: a
                })), t
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(582),
            i = a(o);
        t.NotificationsView = r;
        var s = n(1),
            u = a(s),
            c = n(416)
    },
    813: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e, t, n, a, r, l) {
            function i(t, n) {
                (h.default.get(e.state, "status.online.available") || h.default.get(e.state, "status.online.enabled")) && n({
                    pathname: "/"
                })
            }
            var u = function(e) {
                function t() {
                    return (0, s.default)(this, t), (0, c.default)(this, e.apply(this, arguments))
                }
                return (0, f.default)(t, e), t.prototype.render = function() {
                    return m.default.createElement("div", {
                        className: "container"
                    }, m.default.createElement("div", {
                        className: "row"
                    }, m.default.createElement("div", null, m.default.createElement(v.IndexLink, (0, o.default)({}, x, {
                        to: "/offline-activation"
                    }), "Overview"), m.default.createElement(v.Link, (0, o.default)({}, x, {
                        to: "/offline-activation/download-request"
                    }), "Download"), m.default.createElement(v.Link, (0, o.default)({}, x, {
                        to: "/offline-activation/portal-activation"
                    }), "Activation"), m.default.createElement(v.Link, (0, o.default)({}, x, {
                        to: "/offline-activation/upload-certificate"
                    }), "Upload"))), m.default.createElement("div", {
                        className: "row",
                        "data-panel-min-height": !0
                    }, this.props.children))
                }, t
            }(m.default.Component);
            return m.default.createElement(v.Route, {
                path: "/offline-activation",
                name: "Offline Activation",
                component: u,
                onEnter: i
            }, m.default.createElement(v.IndexRoute, {
                name: "Overview",
                component: t
            }), m.default.createElement(v.Route, {
                path: "download-request",
                name: "Download Request",
                component: n
            }), m.default.createElement(v.Route, {
                path: "portal-activation",
                name: "Portal Activation",
                component: a
            }), m.default.createElement(v.Route, {
                path: "upload-certificate",
                name: "Upload Certificate",
                component: r
            }), m.default.createElement(v.Route, {
                path: "activation-successful",
                name: "Activation Successful",
                component: l
            }))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = n(409),
            o = a(l),
            i = n(171),
            s = a(i),
            u = n(172),
            c = a(u),
            d = n(241),
            f = a(d);
        t.createOfflineActivationRoute = r;
        var p = n(1),
            m = a(p),
            E = n(379),
            h = a(E),
            g = n(169),
            v = n(294),
            y = n(814),
            b = n(817),
            N = n(818),
            S = n(819),
            w = n(820),
            T = n(821),
            _ = n(590),
            O = a(_),
            x = {
                className: "link-wizard-offline-menu",
                activeClassName: "link-wizard-offline-menu-active"
            };
        g.registry.addFactory(r, [O.default, b.createChooseResolutionPage, N.createDownloadRequestPage, S.createUsePortalActivationPage, w.createUploadActivationPage, T.createActivationSuccessfulPage, y.OfflineActivationStore])
    },
    814: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.OfflineActivationStore = void 0;
        var r, l, o = n(171),
            i = a(o),
            s = n(169),
            u = n(815),
            c = n(816);
        t.OfflineActivationStore = (r = s.registry.store(["history", u.OfflineActivationActions, c.createOfflineActivationSource]), r(l = function() {
            function e(t, n, a) {
                (0, i.default)(this, e), this.state = {
                    file: null,
                    errorUploading: null,
                    uploading: !1
                }, this.history = t, this.bindActions(n), this.registerAsync(a)
            }
            return e.prototype.chooseResolution = function() {
                this.history.push("offline-activation")
            }, e.prototype.downloadRequestStep = function() {
                this.history.push("offline-activation/download-request")
            }, e.prototype.usePortalActivationStep = function() {
                this.history.push("offline-activation/portal-activation")
            }, e.prototype.uploadActivationStep = function() {
                this.history.push("offline-activation/upload-certificate")
            }, e.prototype.uploadActivationFile = function(e) {
                this.setState({
                    file: e,
                    errorUploading: null,
                    uploading: !0
                }), this.getInstance().uploadActivationFile(e)
            }, e.prototype.uploadActivationFileSuccess = function(e) {
                this.setState({
                    errorUploading: null,
                    uploading: !1
                }), this.history.push("offline-activation/activation-successful")
            }, e.prototype.uploadActivationFileError = function(e) {
                this.setState({
                    errorUploading: e.toString(),
                    uploading: !1
                })
            }, e
        }()) || l)
    },
    815: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.OfflineActivationActions = void 0;
        var r, l, o = n(250),
            i = a(o),
            s = n(171),
            u = a(s),
            c = n(169),
            d = n(589);
        t.OfflineActivationActions = (r = c.registry.actions([]), r(l = function e() {
            (0, u.default)(this, e), this.generateActions.apply(this, ["chooseResolution", "downloadRequestStep", "usePortalActivationStep", "uploadActivationStep"].concat((0, i.default)((0, d.asyncActions)("uploadActivationFile"))))
        }) || l)
    },
    816: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e) {
            return (0, o.default)({}, (0, s.sourceMethod)("uploadActivationFile", e, (0, u.fileUploadToUrl)("/crt")))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = n(409),
            o = a(l);
        t.createOfflineActivationSource = r;
        var i = n(169),
            s = n(589),
            u = n(603),
            c = n(815);
        i.registry.addFactory(r, [c.OfflineActivationActions])
    },
    817: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e, t) {
            var n = function(n) {
                function a() {
                    return (0, o.default)(this, a), (0, s.default)(this, n.apply(this, arguments))
                }
                return (0, c.default)(a, n), a.prototype.render = function() {
                    var n = p.default.createElement(m.ButtonToolbar, null, p.default.createElement(m.Button, {
                        onClick: e.downloadRequestStep,
                        bsStyle: "primary",
                        className: "pull-right wizard-next"
                    }, "Activate Offline"), p.default.createElement(m.Button, {
                        onClick: t.goHome,
                        bsStyle: "default",
                        className: "pull-right"
                    }, "Close"));
                    return p.default.createElement(m.Panel, {
                        footer: n
                    }, p.default.createElement("div", {
                        className: "row"
                    }, p.default.createElement("div", {
                        className: "col-xs-12 bg-warning text-warning text-center",
                        style: {
                            padding: "10px 15px",
                            marginTop: 0
                        }
                    }, "Automatic activation requires connection to Online Licensing, which is currently unavailable. If this is not intended, try fixing connection ", p.default.createElement("a", {
                        href: "#/settings?focus=proxy"
                    }, p.default.createElement("strong", null, "settings")), ".")), p.default.createElement("hr", {
                        className: "compact"
                    }), p.default.createElement("p", {
                        style: {
                            fontSize: "larger"
                        }
                    }, "You can still enable online licensing if you intend to use this computer without Internet connection."), p.default.createElement("p", {
                        style: {
                            fontSize: "larger"
                        }
                    }, "Press 'Activate offline' button below to continue."))
                }, a
            }(p.default.Component);
            return n
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = n(171),
            o = a(l),
            i = n(172),
            s = a(i),
            u = n(241),
            c = a(u);
        t.createChooseResolutionPage = r;
        var d = n(169),
            f = n(1),
            p = a(f),
            m = n(416),
            E = n(815),
            h = n(588),
            g = a(h);
        d.registry.addFactory(r, [E.OfflineActivationActions, g.default])
    },
    818: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e) {
            var t = function(t) {
                function n() {
                    return (0, o.default)(this, n), (0, s.default)(this, t.apply(this, arguments))
                }
                return (0, c.default)(n, t), n.prototype.render = function() {
                    return p.default.createElement(m.Panel, {
                        footer: p.default.createElement(m.ButtonToolbar, null, p.default.createElement(m.Button, {
                            onClick: e.usePortalActivationStep,
                            bsStyle: "primary",
                            className: "pull-right wizard-next"
                        }, "Next"), p.default.createElement(m.Button, {
                            onClick: e.chooseResolution,
                            bsStyle: "default",
                            className: "pull-right wizard-prev"
                        }, "Back"))
                    }, p.default.createElement("p", {
                        style: {
                            fontSize: "larger"
                        }
                    }, "Download an activation request file (cert.csr):"), p.default.createElement("a", {
                        href: "/csr",
                        download: "cert.csr",
                        title: "Activation request file"
                    }, p.default.createElement("div", {
                        className: "fileArea"
                    }, p.default.createElement("h3", {
                        className: "text-uppercase text-muted"
                    }, "Click here to download an activation request file"), p.default.createElement("div", null, p.default.createElement("p", null, p.default.createElement("img", {
                        src: "/img/download.png",
                        className: "fileIcon"
                    }))))), p.default.createElement("p", {
                        style: {
                            fontSize: "larger",
                            marginTop: 20
                        }
                    }, "Press the 'Next' button below to continue when ready."))
                }, n
            }(p.default.Component);
            return t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = n(171),
            o = a(l),
            i = n(172),
            s = a(i),
            u = n(241),
            c = a(u);
        t.createDownloadRequestPage = r;
        var d = n(169),
            f = n(1),
            p = a(f),
            m = n(416),
            E = n(815);
        d.registry.addFactory(r, [E.OfflineActivationActions])
    },
    819: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e) {
            var t = function(t) {
                function n() {
                    return (0, o.default)(this, n), (0, s.default)(this, t.apply(this, arguments))
                }
                return (0, c.default)(n, t), n.prototype.render = function() {
                    var t = p.default.createElement(m.ButtonToolbar, null, p.default.createElement(m.Button, {
                        onClick: e.uploadActivationStep,
                        bsStyle: "primary",
                        className: "pull-right wizard-next"
                    }, "Next"), p.default.createElement(m.Button, {
                        onClick: e.downloadRequestStep,
                        bsStyle: "default",
                        className: "pull-right wizard-prev"
                    }, "Back"));
                    return p.default.createElement(m.Panel, {
                        footer: t
                    }, p.default.createElement("ul", {
                        style: {
                            fontSize: "larger"
                        }
                    }, p.default.createElement("li", null, "Copy the activation request file (cert.csr) to a machine with Internet connection available"), p.default.createElement("li", null, "Visit ", p.default.createElement("a", {
                        href: "https://my.chaosgroup.com",
                        target: "_blank"
                    }, "my.chaosgroup.com")), p.default.createElement("li", null, "Follow the provided instructions to activate workstation as described", p.default.createElement("a", {
                        href: "https://docs.chaosgroup.com/display/LICENSE/Online+Licensing",
                        target: "_blank"
                    }, " here ")), p.default.createElement("li", null, "Copy the activation file (cert.csr) to this machine"), p.default.createElement("li", null, "Press the 'Next' button below to continue when ready")))
                }, n
            }(p.default.Component);
            return t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = n(171),
            o = a(l),
            i = n(172),
            s = a(i),
            u = n(241),
            c = a(u);
        t.createUsePortalActivationPage = r;
        var d = n(169),
            f = n(1),
            p = a(f),
            m = n(416),
            E = n(815);
        d.registry.addFactory(r, [E.OfflineActivationActions])
    },
    820: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e, t) {
            var n = function(t) {
                function n(e) {
                    (0, o.default)(this, n);
                    var a = (0, s.default)(this, t.call(this, e));
                    return a.state = {
                        file: null
                    }, a
                }
                return (0, c.default)(n, t), n.prototype.render = function() {
                    var t = this,
                        n = p.default.createElement(m.ButtonToolbar, null, p.default.createElement(m.Button, {
                            onClick: function() {
                                return e.uploadActivationFile(t.state.file)
                            },
                            bsStyle: "primary",
                            className: "pull-right wizard-next"
                        }, "Upload"), p.default.createElement(m.Button, {
                            onClick: e.usePortalActivationStep,
                            bsStyle: "default",
                            className: "pull-right wizard-prev"
                        }, "Back"));
                    return p.default.createElement(m.Panel, {
                        footer: n
                    }, p.default.createElement(y.LoadingOverlay, {
                        loading: this.props.uploading,
                        container: this,
                        message: "UPLOADING"
                    }), p.default.createElement(b.ErrorLine, {
                        error: this.props.errorUploading
                    }), p.default.createElement("p", {
                        style: {
                            fontSize: "larger"
                        }
                    }, "Provide the activation certificate file (cert.crt) in the area below:"), p.default.createElement(v.default, {
                        multiple: !1,
                        disablePreview: !0,
                        onDrop: function(e) {
                            return t.setState({
                                file: e[0]
                            })
                        },
                        className: "fileArea",
                        activeStyle: {
                            border: "1px solid black",
                            background: "#ebebeb"
                        }
                    }, p.default.createElement("h3", {
                        className: "text-uppercase text-muted"
                    }, "Click here or drag an activation file"), p.default.createElement("div", {
                        style: {
                            fontSize: "larger"
                        }
                    }, null != this.state.file ? p.default.createElement("p", null, "Activation file: ", p.default.createElement("strong", null, this.state.file.name)) : p.default.createElement("p", null, p.default.createElement("img", {
                        src: "/img/upload.png",
                        className: "fileIcon"
                    })), null != this.state.file ? p.default.createElement("p", null, "Press 'Upload' button below to continue.") : null)))
                }, n
            }(p.default.Component);
            return function(e) {
                return p.default.createElement(S.default, {
                    store: t
                }, p.default.createElement(n, null))
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = n(171),
            o = a(l),
            i = n(172),
            s = a(i),
            u = n(241),
            c = a(u);
        t.createUploadActivationPage = r;
        var d = n(169),
            f = n(1),
            p = a(f),
            m = n(416),
            E = n(815),
            h = n(814),
            g = n(808),
            v = a(g),
            y = n(586),
            b = n(774),
            N = n(389),
            S = a(N);
        d.registry.addFactory(r, [E.OfflineActivationActions, h.OfflineActivationStore])
    },
    821: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r() {
            function e() {
                var e = o.default.createElement(s.ButtonToolbar, {
                    className: "text-right"
                }, o.default.createElement(i.Link, {
                    to: "/",
                    className: "btn btn-default pull-right"
                }, "Close"));
                return o.default.createElement(s.Panel, {
                    footer: e
                }, o.default.createElement("h2", {
                    className: "text-center",
                    style: {
                        padding: "4em"
                    }
                }, "Site successfully activated"))
            }
            return e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.createActivationSuccessfulPage = r;
        var l = n(1),
            o = a(l),
            i = n(294),
            s = n(416),
            u = n(169);
        u.registry.addFactory(r, [])
    },
    822: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e, t) {
            var n = function(n) {
                function a() {
                    return (0, i.default)(this, a), (0, u.default)(this, n.apply(this, arguments))
                }
                return (0, d.default)(a, n), a.prototype.componentWillMount = function() {
                    setTimeout(function() {
                        return e.getStatus()
                    }, 1e3), setTimeout(function() {
                        return e.getStatus()
                    }, 5e3)
                }, a.prototype.render = function() {
                    return m.default.createElement(g.default, {
                        stores: [t]
                    }, m.default.createElement(S.BorrowedSummaryView, {
                        offlineStatus: t.state.status.offline
                    }))
                }, a
            }(m.default.Component);
            return n
        }

        function l(e) {
            return m.default.createElement(E.Route, {
                path: "/borrowed-summary",
                name: "Borrowed Summary",
                component: e
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(171),
            i = a(o),
            s = n(172),
            u = a(s),
            c = n(241),
            d = a(c);
        t.createBorrowedSummary = r, t.createBorrowedSummaryRoute = l;
        var f = n(169),
            p = n(1),
            m = a(p),
            E = n(294),
            h = n(389),
            g = a(h),
            v = n(588),
            y = a(v),
            b = n(590),
            N = a(b),
            S = n(823);
        f.registry.addFactory(r, [y.default, N.default]), f.registry.addFactory(l, [r])
    },
    823: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e) {
            var t = e.offlineStatus,
                n = o.default.createElement("h3", {
                    className: "text-uppercase"
                }, "Borrowed Licenses - Summary"),
                a = o.default.createElement("div", {
                    className: "text-right"
                }, o.default.createElement(c.Link, {
                    className: "btn btn-default",
                    to: "/"
                }, "Close"));
            return o.default.createElement("div", {
                className: "container"
            }, o.default.createElement("div", {
                className: "row"
            }, o.default.createElement(i.Panel, {
                className: "borrow",
                header: n,
                footer: a
            }, o.default.createElement(u.Refresher, null), o.default.createElement(s.BorrowedLicensesList, {
                licenses: t.licenses,
                renew: t.renew,
                expires: t.expires
            }))))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.BorrowedSummaryView = r;
        var l = n(1),
            o = a(l),
            i = n(416),
            s = n(579),
            u = n(651),
            c = n(294)
    },
    824: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e, t) {
            return function(n) {
                function a() {
                    return (0, o.default)(this, a), (0, c.default)(this, n.apply(this, arguments))
                }
                return (0, f.default)(a, n), a.prototype.componentWillMount = function() {
                    e.getLicenses()
                }, a.prototype.render = function() {
                    return m.default.createElement(v.default, {
                        actions: e,
                        store: t
                    }, m.default.createElement(b.Licenses, null))
                }, (0, s.default)(a, null, [{
                    key: "defaultProps",
                    get: function() {
                        return {
                            routes: []
                        }
                    }
                }, {
                    key: "propTypes",
                    get: function() {
                        return {
                            routes: h.default.array
                        }
                    }
                }]), a
            }(m.default.Component)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = n(171),
            o = a(l),
            i = n(279),
            s = a(i),
            u = n(172),
            c = a(u),
            d = n(241),
            f = a(d);
        t.default = r;
        var p = n(1),
            m = a(p),
            E = n(387),
            h = a(E),
            g = n(389),
            v = a(g),
            y = n(169),
            b = n(825),
            N = n(826),
            S = a(N),
            w = n(827),
            T = a(w);
        y.registry.addFactory(r, [S.default, T.default])
    },
    825: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e) {
            var t = e.licenses,
                n = e.error,
                a = e.loading;
            if (n) return c.default.createElement("div", {
                className: "container text-center"
            }, c.default.createElement("h3", null, "There was an error loading the licenses:"), c.default.createElement("h4", {
                style: {
                    color: "#cc3333"
                }
            }, n.message));
            if (a) return c.default.createElement("div", {
                className: "container text-center"
            }, c.default.createElement("h3", null, "Loading Licenses..."), c.default.createElement(f.default, {
                spinnerName: "rotating-plane"
            }));
            if (0 === (0, s.default)(t).length) return c.default.createElement("div", {
                className: "container"
            }, c.default.createElement("h3", null, "No third-party licenses"));
            var r = {
                fontWeight: "bolder"
            };
            return c.default.createElement("div", {
                className: "container"
            }, c.default.createElement("h3", null, "Third-party open source software used by License Server"), c.default.createElement("table", {
                className: "table table-hover license-table"
            }, c.default.createElement("thead", null, c.default.createElement("tr", null, c.default.createElement("th", {
                width: "42.5%",
                style: r,
                className: "text-right"
            }, "Package name"), c.default.createElement("th", {
                width: "15%",
                style: r,
                className: "text-center"
            }, "Version"), c.default.createElement("th", {
                width: "42.5%",
                style: r
            }, "License"))), c.default.createElement("tbody", null, (0, s.default)(t).sort().map(function(e, n) {
                var a = t[e],
                    r = e.split("@"),
                    l = (0, o.default)(r, 2),
                    i = l[0],
                    s = l[1];
                return c.default.createElement("tr", {
                    key: n
                }, c.default.createElement("td", {
                    className: "text-right"
                }, c.default.createElement("a", {
                    href: "https://npmjs.org/package/" + i,
                    target: "blank"
                }, i)), c.default.createElement("td", {
                    className: "text-center"
                }, s), c.default.createElement("td", null, a.spdx ? c.default.createElement("a", {
                    href: "https://spdx.org/licenses/" + a.license,
                    target: "blank"
                }, a.license) : c.default.createElement("span", null, a.license || "UNKNOWN")))
            }))))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = n(638),
            o = a(l),
            i = n(582),
            s = a(i);
        t.Licenses = r;
        var u = n(1),
            c = a(u),
            d = n(619),
            f = a(d)
    },
    826: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(250),
            l = a(r),
            o = n(171),
            i = a(o),
            s = n(169),
            u = n(589),
            c = function e() {
                (0, i.default)(this, e), this.generateActions.apply(this, (0, l.default)((0, u.asyncActions)("getLicenses")))
            };
        t.default = c, s.registry.addActions(c, [])
    },
    827: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n(171),
            l = a(r),
            o = n(169),
            i = n(826),
            s = a(i),
            u = n(828),
            c = a(u),
            d = function() {
                function e(t, n) {
                    (0, l.default)(this, e), this.state = {
                        licenses: {},
                        error: null,
                        loading: !0
                    }, this.bindActions(t), this.registerAsync(n)
                }
                return e.prototype.getLicenses = function() {
                    this.getInstance().getLicenses()
                }, e.prototype.getLicensesSuccess = function(e) {
                    this.setState({
                        licenses: e,
                        loading: !1
                    })
                }, e.prototype.getLicensesError = function(e) {
                    this.setState({
                        error: e,
                        loading: !1
                    })
                }, e
            }();
        t.default = d, o.registry.addStore(d, [s.default, c.default])
    },
    828: function(e, t, n) {
        "use strict";

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e) {
            return (0, o.default)({}, (0, c.sourceMethod)("getLicenses", e, function() {
                return (0, p.promiseBody)(s.default.get("/licenses.json"))
            }))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = n(409),
            o = a(l);
        t.default = r;
        var i = n(597),
            s = a(i),
            u = n(169),
            c = n(589),
            d = n(826),
            f = a(d),
            p = n(603);
        u.registry.addFactory(r, [f.default])
    },
    829: function(e, t, n) {
        n(830), e.exports = n(833).Object.assign
    },
    830: function(e, t, n) {
        var a = n(831);
        a(a.S + a.F, "Object", {
            assign: n(849)
        })
    },
    831: function(e, t, n) {
        var a = n(832),
            r = n(833),
            l = n(834),
            o = n(844),
            i = n(847),
            s = "prototype",
            u = function(e, t, n) {
                var c, d, f, p, m = e & u.F,
                    E = e & u.G,
                    h = e & u.S,
                    g = e & u.P,
                    v = e & u.B,
                    y = E ? a : h ? a[t] || (a[t] = {}) : (a[t] || {})[s],
                    b = E ? r : r[t] || (r[t] = {}),
                    N = b[s] || (b[s] = {});
                E && (n = t);
                for (c in n) d = !m && y && void 0 !== y[c], f = (d ? y : n)[c], p = v && d ? i(f, a) : g && "function" == typeof f ? i(Function.call, f) : f, y && o(y, c, f, e & u.U), b[c] != f && l(b, c, p), g && N[c] != f && (N[c] = f)
            };
        a.core = r, u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, e.exports = u
    },
    832: function(e, t) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    },
    833: function(e, t) {
        var n = e.exports = {
            version: "2.4.0"
        };
        "number" == typeof __e && (__e = n)
    },
    834: function(e, t, n) {
        var a = n(835),
            r = n(843);
        e.exports = n(839) ? function(e, t, n) {
            return a.f(e, t, r(1, n))
        } : function(e, t, n) {
            return e[t] = n, e
        }
    },
    835: function(e, t, n) {
        var a = n(836),
            r = n(838),
            l = n(842),
            o = Object.defineProperty;
        t.f = n(839) ? Object.defineProperty : function(e, t, n) {
            if (a(e), t = l(t, !0), a(n), r) try {
                return o(e, t, n)
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e
        }
    },
    836: function(e, t, n) {
        var a = n(837);
        e.exports = function(e) {
            if (!a(e)) throw TypeError(e + " is not an object!");
            return e
        }
    },
    837: function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    },
    838: function(e, t, n) {
        e.exports = !n(839) && !n(840)(function() {
            return 7 != Object.defineProperty(n(841)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    },
    839: function(e, t, n) {
        e.exports = !n(840)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    },
    840: function(e, t) {
        e.exports = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    },
    841: function(e, t, n) {
        var a = n(837),
            r = n(832).document,
            l = a(r) && a(r.createElement);
        e.exports = function(e) {
            return l ? r.createElement(e) : {}
        }
    },
    842: function(e, t, n) {
        var a = n(837);
        e.exports = function(e, t) {
            if (!a(e)) return e;
            var n, r;
            if (t && "function" == typeof(n = e.toString) && !a(r = n.call(e))) return r;
            if ("function" == typeof(n = e.valueOf) && !a(r = n.call(e))) return r;
            if (!t && "function" == typeof(n = e.toString) && !a(r = n.call(e))) return r;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    843: function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    },
    844: function(e, t, n) {
        var a = n(832),
            r = n(834),
            l = n(845),
            o = n(846)("src"),
            i = "toString",
            s = Function[i],
            u = ("" + s).split(i);
        n(833).inspectSource = function(e) {
            return s.call(e)
        }, (e.exports = function(e, t, n, i) {
            var s = "function" == typeof n;
            s && (l(n, "name") || r(n, "name", t)), e[t] !== n && (s && (l(n, o) || r(n, o, e[t] ? "" + e[t] : u.join(String(t)))), e === a ? e[t] = n : i ? e[t] ? e[t] = n : r(e, t, n) : (delete e[t], r(e, t, n)))
        })(Function.prototype, i, function() {
            return "function" == typeof this && this[o] || s.call(this)
        })
    },
    845: function(e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return n.call(e, t)
        }
    },
    846: function(e, t) {
        var n = 0,
            a = Math.random();
        e.exports = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + a).toString(36))
        }
    },
    847: function(e, t, n) {
        var a = n(848);
        e.exports = function(e, t, n) {
            if (a(e), void 0 === t) return e;
            switch (n) {
                case 1:
                    return function(n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function(n, a) {
                        return e.call(t, n, a)
                    };
                case 3:
                    return function(n, a, r) {
                        return e.call(t, n, a, r)
                    }
            }
            return function() {
                return e.apply(t, arguments)
            }
        }
    },
    848: function(e, t) {
        e.exports = function(e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
        }
    },
    849: function(e, t, n) {
        "use strict";
        var a = n(850),
            r = n(863),
            l = n(864),
            o = n(865),
            i = n(853),
            s = Object.assign;
        e.exports = !s || n(840)(function() {
            var e = {},
                t = {},
                n = Symbol(),
                a = "abcdefghijklmnopqrst";
            return e[n] = 7, a.split("").forEach(function(e) {
                t[e] = e
            }), 7 != s({}, e)[n] || Object.keys(s({}, t)).join("") != a
        }) ? function(e, t) {
            for (var n = o(e), s = arguments.length, u = 1, c = r.f, d = l.f; s > u;)
                for (var f, p = i(arguments[u++]), m = c ? a(p).concat(c(p)) : a(p), E = m.length, h = 0; E > h;) d.call(p, f = m[h++]) && (n[f] = p[f]);
            return n
        } : s
    },
    850: function(e, t, n) {
        var a = n(851),
            r = n(862);
        e.exports = Object.keys || function(e) {
            return a(e, r)
        }
    },
    851: function(e, t, n) {
        var a = n(845),
            r = n(852),
            l = n(856)(!1),
            o = n(860)("IE_PROTO");
        e.exports = function(e, t) {
            var n, i = r(e),
                s = 0,
                u = [];
            for (n in i) n != o && a(i, n) && u.push(n);
            for (; t.length > s;) a(i, n = t[s++]) && (~l(u, n) || u.push(n));
            return u
        }
    },
    852: function(e, t, n) {
        var a = n(853),
            r = n(855);
        e.exports = function(e) {
            return a(r(e))
        }
    },
    853: function(e, t, n) {
        var a = n(854);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == a(e) ? e.split("") : Object(e)
        }
    },
    854: function(e, t) {
        var n = {}.toString;
        e.exports = function(e) {
            return n.call(e).slice(8, -1)
        }
    },
    855: function(e, t) {
        e.exports = function(e) {
            if (void 0 == e) throw TypeError("Can't call method on  " + e);
            return e
        }
    },
    856: function(e, t, n) {
        var a = n(852),
            r = n(857),
            l = n(859);
        e.exports = function(e) {
            return function(t, n, o) {
                var i, s = a(t),
                    u = r(s.length),
                    c = l(o, u);
                if (e && n != n) {
                    for (; u > c;)
                        if (i = s[c++], i != i) return !0
                } else
                    for (; u > c; c++)
                        if ((e || c in s) && s[c] === n) return e || c || 0;
                return !e && -1
            }
        }
    },
    857: function(e, t, n) {
        var a = n(858),
            r = Math.min;
        e.exports = function(e) {
            return e > 0 ? r(a(e), 9007199254740991) : 0
        }
    },
    858: function(e, t) {
        var n = Math.ceil,
            a = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? a : n)(e)
        }
    },
    859: function(e, t, n) {
        var a = n(858),
            r = Math.max,
            l = Math.min;
        e.exports = function(e, t) {
            return e = a(e), e < 0 ? r(e + t, 0) : l(e, t)
        }
    },
    860: function(e, t, n) {
        var a = n(861)("keys"),
            r = n(846);
        e.exports = function(e) {
            return a[e] || (a[e] = r(e))
        }
    },
    861: function(e, t, n) {
        var a = n(832),
            r = "__core-js_shared__",
            l = a[r] || (a[r] = {});
        e.exports = function(e) {
            return l[e] || (l[e] = {})
        }
    },
    862: function(e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    863: function(e, t) {
        t.f = Object.getOwnPropertySymbols
    },
    864: function(e, t) {
        t.f = {}.propertyIsEnumerable
    },
    865: function(e, t, n) {
        var a = n(855);
        e.exports = function(e) {
            return Object(a(e))
        }
    },
    866: function(e, t) {}
});
