﻿/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
! function(t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var i = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) n.d(r, i, function(e) {
                return t[e]
            }.bind(null, i));
        return r
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 100)
}([function(t, e) {
    t.exports = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
}, function(t, e) {
    var n = Array.isArray;
    t.exports = n
}, function(t, e, n) {
    "use strict";
    var r = {},
        i = {},
        o = [],
        a = window.Webflow || [],
        u = window.jQuery,
        c = u(window),
        s = u(document),
        l = u.isFunction,
        f = r._ = n(103),
        d = r.tram = n(53) && u.tram,
        p = !1,
        v = !1;

    function h(t) {
        r.env() && (l(t.design) && c.on("__wf_design", t.design), l(t.preview) && c.on("__wf_preview", t.preview)), l(t.destroy) && c.on("__wf_destroy", t.destroy), t.ready && l(t.ready) && function(t) {
            if (p) return void t.ready();
            if (f.contains(o, t.ready)) return;
            o.push(t.ready)
        }(t)
    }

    function E(t) {
        l(t.design) && c.off("__wf_design", t.design), l(t.preview) && c.off("__wf_preview", t.preview), l(t.destroy) && c.off("__wf_destroy", t.destroy), t.ready && l(t.ready) && function(t) {
            o = f.filter(o, function(e) {
                return e !== t.ready
            })
        }(t)
    }
    d.config.hideBackface = !1, d.config.keepInherited = !0, r.define = function(t, e, n) {
        i[t] && E(i[t]);
        var r = i[t] = e(u, f, n) || {};
        return h(r), r
    }, r.require = function(t) {
        return i[t]
    }, r.push = function(t) {
        p ? l(t) && t() : a.push(t)
    }, r.env = function(t) {
        var e = window.__wf_design,
            n = void 0 !== e;
        return t ? "design" === t ? n && e : "preview" === t ? n && !e : "slug" === t ? n && window.__wf_slug : "editor" === t ? window.WebflowEditor : "test" === t ? window.__wf_test : "frame" === t ? window !== window.top : void 0 : n
    };
    var _, g = navigator.userAgent.toLowerCase(),
        m = r.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
        I = r.env.chrome = /chrome/.test(g) && /Google/.test(navigator.vendor) && parseInt(g.match(/chrome\/(\d+)\./)[1], 10),
        y = r.env.ios = /(ipod|iphone|ipad)/.test(g);
    r.env.safari = /safari/.test(g) && !I && !y, m && s.on("touchstart mousedown", function(t) {
        _ = t.target
    }), r.validClick = m ? function(t) {
        return t === _ || u.contains(t, _)
    } : function() {
        return !0
    };
    var T, O = "resize.webflow orientationchange.webflow load.webflow";

    function A(t, e) {
        var n = [],
            r = {};
        return r.up = f.throttle(function(t) {
            f.each(n, function(e) {
                e(t)
            })
        }), t && e && t.on(e, r.up), r.on = function(t) {
            "function" == typeof t && (f.contains(n, t) || n.push(t))
        }, r.off = function(t) {
            n = arguments.length ? f.filter(n, function(e) {
                return e !== t
            }) : []
        }, r
    }

    function b(t) {
        l(t) && t()
    }

    function w() {
        T && (T.reject(), c.off("load", T.resolve)), T = new u.Deferred, c.on("load", T.resolve)
    }
    r.resize = A(c, O), r.scroll = A(c, "scroll.webflow resize.webflow orientationchange.webflow load.webflow"), r.redraw = A(), r.location = function(t) {
        window.location = t
    }, r.env() && (r.location = function() {}), r.ready = function() {
        p = !0, v ? (v = !1, f.each(i, h)) : f.each(o, b), f.each(a, b), r.resize.up()
    }, r.load = function(t) {
        T.then(t)
    }, r.destroy = function(t) {
        t = t || {}, v = !0, c.triggerHandler("__wf_destroy"), null != t.domready && (p = t.domready), f.each(i, E), r.resize.off(), r.scroll.off(), r.redraw.off(), o = [], a = [], "pending" === T.state() && w()
    }, u(r.ready), w(), t.exports = window.Webflow = r
}, function(t, e, n) {
    "use strict";
    var r = n(16);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.IX2VanillaUtils = e.IX2VanillaPlugins = e.IX2Interactions = e.IX2Events = e.IX2ElementsReducer = e.IX2EngineConstants = e.IX2EngineItemTypes = e.IX2EngineEventTypes = e.IX2EngineActionTypes = e.IX2EasingUtils = e.IX2Easings = e.IX2BrowserSupport = void 0;
    var i = r(n(30));
    e.IX2BrowserSupport = i;
    var o = r(n(83));
    e.IX2Easings = o;
    var a = r(n(85));
    e.IX2EasingUtils = a;
    var u = r(n(87));
    e.IX2EngineActionTypes = u;
    var c = r(n(88));
    e.IX2EngineEventTypes = c;
    var s = r(n(47));
    e.IX2EngineItemTypes = s;
    var l = r(n(48));
    e.IX2EngineConstants = l;
    var f = r(n(189));
    e.IX2ElementsReducer = f;
    var d = r(n(190));
    e.IX2Events = d;
    var p = r(n(191));
    e.IX2Interactions = p;
    var v = r(n(89));
    e.IX2VanillaPlugins = v;
    var h = r(n(193));
    e.IX2VanillaUtils = h
}, function(t, e, n) {
    var r = n(65),
        i = "object" == typeof self && self && self.Object === Object && self,
        o = r || i || Function("return this")();
    t.exports = o
}, function(t, e) {
    t.exports = function(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
    }
}, function(t, e, n) {
    var r = n(121),
        i = n(175),
        o = n(44),
        a = n(1),
        u = n(182);
    t.exports = function(t) {
        return "function" == typeof t ? t : null == t ? o : "object" == typeof t ? a(t) ? i(t[0], t[1]) : r(t) : u(t)
    }
}, function(t, e, n) {
    var r = n(133),
        i = n(138);
    t.exports = function(t, e) {
        var n = i(t, e);
        return r(n) ? n : void 0
    }
}, function(t, e) {
    t.exports = function(t) {
        return null != t && "object" == typeof t
    }
}, function(t, e, n) {
    var r = n(12),
        i = n(134),
        o = n(135),
        a = "[object Null]",
        u = "[object Undefined]",
        c = r ? r.toStringTag : void 0;
    t.exports = function(t) {
        return null == t ? void 0 === t ? u : a : c && c in Object(t) ? i(t) : o(t)
    }
}, function(t, e, n) {
    var r = n(64),
        i = n(38);
    t.exports = function(t) {
        return null != t && i(t.length) && !r(t)
    }
}, function(t, e) {
    function n(t) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function r(e) {
        return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? t.exports = r = function(t) {
            return n(t)
        } : t.exports = r = function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t)
        }, r(e)
    }
    t.exports = r
}, function(t, e, n) {
    var r = n(4).Symbol;
    t.exports = r
}, function(t, e, n) {
    var r = n(25),
        i = 1 / 0;
    t.exports = function(t) {
        if ("string" == typeof t || r(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -i ? "-0" : e
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    e.clone = c, e.addLast = f, e.addFirst = d, e.removeLast = p, e.removeFirst = v, e.insert = h, e.removeAt = E, e.replaceAt = _, e.getIn = g, e.set = m, e.setIn = I, e.update = y, e.updateIn = T, e.merge = O, e.mergeDeep = A, e.mergeIn = b, e.omit = w, e.addDefaults = S;
    /*!
     * Timm
     *
     * Immutability helpers with fast reads and acceptable writes.
     *
     * @copyright Guillermo Grau Panea 2016
     * @license MIT
     */
    var i = "INVALID_ARGS";

    function o(t) {
        throw new Error(t)
    }

    function a(t) {
        var e = Object.keys(t);
        return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e
    }
    var u = {}.hasOwnProperty;

    function c(t) {
        if (Array.isArray(t)) return t.slice();
        for (var e = a(t), n = {}, r = 0; r < e.length; r++) {
            var i = e[r];
            n[i] = t[i]
        }
        return n
    }

    function s(t, e, n) {
        var r = n;
        null == r && o(i);
        for (var u = !1, f = arguments.length, d = Array(f > 3 ? f - 3 : 0), p = 3; p < f; p++) d[p - 3] = arguments[p];
        for (var v = 0; v < d.length; v++) {
            var h = d[v];
            if (null != h) {
                var E = a(h);
                if (E.length)
                    for (var _ = 0; _ <= E.length; _++) {
                        var g = E[_];
                        if (!t || void 0 === r[g]) {
                            var m = h[g];
                            e && l(r[g]) && l(m) && (m = s(t, e, r[g], m)), void 0 !== m && m !== r[g] && (u || (u = !0, r = c(r)), r[g] = m)
                        }
                    }
            }
        }
        return r
    }

    function l(t) {
        var e = void 0 === t ? "undefined" : r(t);
        return null != t && ("object" === e || "function" === e)
    }

    function f(t, e) {
        return Array.isArray(e) ? t.concat(e) : t.concat([e])
    }

    function d(t, e) {
        return Array.isArray(e) ? e.concat(t) : [e].concat(t)
    }

    function p(t) {
        return t.length ? t.slice(0, t.length - 1) : t
    }

    function v(t) {
        return t.length ? t.slice(1) : t
    }

    function h(t, e, n) {
        return t.slice(0, e).concat(Array.isArray(n) ? n : [n]).concat(t.slice(e))
    }

    function E(t, e) {
        return e >= t.length || e < 0 ? t : t.slice(0, e).concat(t.slice(e + 1))
    }

    function _(t, e, n) {
        if (t[e] === n) return t;
        for (var r = t.length, i = Array(r), o = 0; o < r; o++) i[o] = t[o];
        return i[e] = n, i
    }

    function g(t, e) {
        if (!Array.isArray(e) && o(i), null != t) {
            for (var n = t, r = 0; r < e.length; r++) {
                var a = e[r];
                if (void 0 === (n = null != n ? n[a] : void 0)) return n
            }
            return n
        }
    }

    function m(t, e, n) {
        var r = null == t ? "number" == typeof e ? [] : {} : t;
        if (r[e] === n) return r;
        var i = c(r);
        return i[e] = n, i
    }

    function I(t, e, n) {
        return e.length ? function t(e, n, r, i) {
            var o = void 0,
                a = n[i];
            o = i === n.length - 1 ? r : t(l(e) && l(e[a]) ? e[a] : "number" == typeof n[i + 1] ? [] : {}, n, r, i + 1);
            return m(e, a, o)
        }(t, e, n, 0) : n
    }

    function y(t, e, n) {
        return m(t, e, n(null == t ? void 0 : t[e]))
    }

    function T(t, e, n) {
        return I(t, e, n(g(t, e)))
    }

    function O(t, e, n, r, i, o) {
        for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
        return u.length ? s.call.apply(s, [null, !1, !1, t, e, n, r, i, o].concat(u)) : s(!1, !1, t, e, n, r, i, o)
    }

    function A(t, e, n, r, i, o) {
        for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
        return u.length ? s.call.apply(s, [null, !1, !0, t, e, n, r, i, o].concat(u)) : s(!1, !0, t, e, n, r, i, o)
    }

    function b(t, e, n, r, i, o, a) {
        var u = g(t, e);
        null == u && (u = {});
        for (var c = arguments.length, l = Array(c > 7 ? c - 7 : 0), f = 7; f < c; f++) l[f - 7] = arguments[f];
        return I(t, e, l.length ? s.call.apply(s, [null, !1, !1, u, n, r, i, o, a].concat(l)) : s(!1, !1, u, n, r, i, o, a))
    }

    function w(t, e) {
        for (var n = Array.isArray(e) ? e : [e], r = !1, i = 0; i < n.length; i++)
            if (u.call(t, n[i])) {
                r = !0;
                break
            } if (!r) return t;
        for (var o = {}, c = a(t), s = 0; s < c.length; s++) {
            var l = c[s];
            n.indexOf(l) >= 0 || (o[l] = t[l])
        }
        return o
    }

    function S(t, e, n, r, i, o) {
        for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
        return u.length ? s.call.apply(s, [null, !0, !1, t, e, n, r, i, o].concat(u)) : s(!0, !1, t, e, n, r, i, o)
    }
    var R = {
        clone: c,
        addLast: f,
        addFirst: d,
        removeLast: p,
        removeFirst: v,
        insert: h,
        removeAt: E,
        replaceAt: _,
        getIn: g,
        set: m,
        setIn: I,
        update: y,
        updateIn: T,
        merge: O,
        mergeDeep: A,
        mergeIn: b,
        omit: w,
        addDefaults: S
    };
    e.default = R
}, function(t, e, n) {
    "use strict";
    var r = n(105);

    function i(t, e) {
        var n = document.createEvent("CustomEvent");
        n.initCustomEvent(e, !0, !0, null), t.dispatchEvent(n)
    }
    var o = window.jQuery,
        a = {},
        u = {
            reset: function(t, e) {
                r.triggers.reset(t, e)
            },
            intro: function(t, e) {
                r.triggers.intro(t, e), i(e, "COMPONENT_ACTIVE")
            },
            outro: function(t, e) {
                r.triggers.outro(t, e), i(e, "COMPONENT_INACTIVE")
            }
        };
    a.triggers = {}, a.types = {
        INTRO: "w-ix-intro.w-ix",
        OUTRO: "w-ix-outro.w-ix"
    }, o.extend(a.triggers, u), t.exports = a
}, function(t, e) {
    t.exports = function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var n in t)
                if (Object.prototype.hasOwnProperty.call(t, n)) {
                    var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                    r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n]
                } return e.default = t, e
    }
}, function(t, e, n) {
    var r = n(123),
        i = n(124),
        o = n(125),
        a = n(126),
        u = n(127);

    function c(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function(t, e, n) {
    var r = n(31);
    t.exports = function(t, e) {
        for (var n = t.length; n--;)
            if (r(t[n][0], e)) return n;
        return -1
    }
}, function(t, e, n) {
    var r = n(7)(Object, "create");
    t.exports = r
}, function(t, e, n) {
    var r = n(147);
    t.exports = function(t, e) {
        var n = t.__data__;
        return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
    }
}, function(t, e, n) {
    var r = n(72),
        i = n(39),
        o = n(10);
    t.exports = function(t) {
        return o(t) ? r(t) : i(t)
    }
}, function(t, e, n) {
    var r = n(165),
        i = n(8),
        o = Object.prototype,
        a = o.hasOwnProperty,
        u = o.propertyIsEnumerable,
        c = r(function() {
            return arguments
        }()) ? r : function(t) {
            return i(t) && a.call(t, "callee") && !u.call(t, "callee")
        };
    t.exports = c
}, function(t, e, n) {
    var r = n(42);
    t.exports = function(t, e, n) {
        var i = null == t ? void 0 : r(t, e);
        return void 0 === i ? n : i
    }
}, function(t, e, n) {
    var r = n(1),
        i = n(43),
        o = n(176),
        a = n(78);
    t.exports = function(t, e) {
        return r(t) ? t : i(t, e) ? [t] : o(a(t))
    }
}, function(t, e, n) {
    var r = n(9),
        i = n(8),
        o = "[object Symbol]";
    t.exports = function(t) {
        return "symbol" == typeof t || i(t) && r(t) == o
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "ActionTypes", function() {
        return o
    }), n.d(e, "default", function() {
        return a
    });
    var r = n(55),
        i = n(116),
        o = {
            INIT: "@@redux/INIT"
        };

    function a(t, e, n) {
        var u;
        if ("function" == typeof e && void 0 === n && (n = e, e = void 0), void 0 !== n) {
            if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
            return n(a)(t, e)
        }
        if ("function" != typeof t) throw new Error("Expected the reducer to be a function.");
        var c = t,
            s = e,
            l = [],
            f = l,
            d = !1;

        function p() {
            f === l && (f = l.slice())
        }

        function v() {
            return s
        }

        function h(t) {
            if ("function" != typeof t) throw new Error("Expected listener to be a function.");
            var e = !0;
            return p(), f.push(t),
                function() {
                    if (e) {
                        e = !1, p();
                        var n = f.indexOf(t);
                        f.splice(n, 1)
                    }
                }
        }

        function E(t) {
            if (!Object(r.default)(t)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
            if (void 0 === t.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
            if (d) throw new Error("Reducers may not dispatch actions.");
            try {
                d = !0, s = c(s, t)
            } finally {
                d = !1
            }
            for (var e = l = f, n = 0; n < e.length; n++) e[n]();
            return t
        }
        return E({
            type: o.INIT
        }), (u = {
            dispatch: E,
            subscribe: h,
            getState: v,
            replaceReducer: function(t) {
                if ("function" != typeof t) throw new Error("Expected the nextReducer to be a function.");
                c = t, E({
                    type: o.INIT
                })
            }
        })[i.default] = function() {
            var t, e = h;
            return (t = {
                subscribe: function(t) {
                    if ("object" != typeof t) throw new TypeError("Expected the observer to be an object.");

                    function n() {
                        t.next && t.next(v())
                    }
                    return n(), {
                        unsubscribe: e(n)
                    }
                }
            })[i.default] = function() {
                return this
            }, t
        }, u
    }
}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function(t, e, n) {
    "use strict";

    function r() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        if (0 === e.length) return function(t) {
            return t
        };
        if (1 === e.length) return e[0];
        var r = e[e.length - 1],
            i = e.slice(0, -1);
        return function() {
            return i.reduceRight(function(t, e) {
                return e(t)
            }, r.apply(void 0, arguments))
        }
    }
    n.r(e), n.d(e, "default", function() {
        return r
    })
}, function(t, e, n) {
    "use strict";
    var r = n(0);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.TRANSFORM_STYLE_PREFIXED = e.TRANSFORM_PREFIXED = e.FLEX_PREFIXED = e.ELEMENT_MATCHES = e.withBrowser = e.IS_BROWSER_ENV = void 0;
    var i = r(n(61)),
        o = "undefined" != typeof window;
    e.IS_BROWSER_ENV = o;
    var a = function(t, e) {
        return o ? t() : e
    };
    e.withBrowser = a;
    var u = a(function() {
        return (0, i.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], function(t) {
            return t in Element.prototype
        })
    });
    e.ELEMENT_MATCHES = u;
    var c = a(function() {
        var t = document.createElement("i"),
            e = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
        try {
            for (var n = e.length, r = 0; r < n; r++) {
                var i = e[r];
                if (t.style.display = i, t.style.display === i) return i
            }
            return ""
        } catch (t) {
            return ""
        }
    }, "flex");
    e.FLEX_PREFIXED = c;
    var s = a(function() {
        var t = document.createElement("i");
        if (null == t.style.transform)
            for (var e = ["Webkit", "Moz", "ms"], n = e.length, r = 0; r < n; r++) {
                var i = e[r] + "Transform";
                if (void 0 !== t.style[i]) return i
            }
        return "transform"
    }, "transform");
    e.TRANSFORM_PREFIXED = s;
    var l = s.split("transform")[0],
        f = l ? l + "TransformStyle" : "transformStyle";
    e.TRANSFORM_STYLE_PREFIXED = f
}, function(t, e) {
    t.exports = function(t, e) {
        return t === e || t != t && e != e
    }
}, function(t, e, n) {
    var r = n(7)(n(4), "Map");
    t.exports = r
}, function(t, e, n) {
    var r = n(139),
        i = n(146),
        o = n(148),
        a = n(149),
        u = n(150);

    function c(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n];
        return t
    }
}, function(t, e, n) {
    (function(t) {
        var r = n(4),
            i = n(166),
            o = e && !e.nodeType && e,
            a = o && "object" == typeof t && t && !t.nodeType && t,
            u = a && a.exports === o ? r.Buffer : void 0,
            c = (u ? u.isBuffer : void 0) || i;
        t.exports = c
    }).call(this, n(73)(t))
}, function(t, e) {
    var n = 9007199254740991,
        r = /^(?:0|[1-9]\d*)$/;
    t.exports = function(t, e) {
        var i = typeof t;
        return !!(e = null == e ? n : e) && ("number" == i || "symbol" != i && r.test(t)) && t > -1 && t % 1 == 0 && t < e
    }
}, function(t, e, n) {
    var r = n(167),
        i = n(168),
        o = n(169),
        a = o && o.isTypedArray,
        u = a ? i(a) : r;
    t.exports = u
}, function(t, e) {
    var n = 9007199254740991;
    t.exports = function(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n
    }
}, function(t, e, n) {
    var r = n(40),
        i = n(170),
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        if (!r(t)) return i(t);
        var e = [];
        for (var n in Object(t)) o.call(t, n) && "constructor" != n && e.push(n);
        return e
    }
}, function(t, e) {
    var n = Object.prototype;
    t.exports = function(t) {
        var e = t && t.constructor;
        return t === ("function" == typeof e && e.prototype || n)
    }
}, function(t, e, n) {
    var r = n(171),
        i = n(32),
        o = n(172),
        a = n(173),
        u = n(75),
        c = n(9),
        s = n(66),
        l = s(r),
        f = s(i),
        d = s(o),
        p = s(a),
        v = s(u),
        h = c;
    (r && "[object DataView]" != h(new r(new ArrayBuffer(1))) || i && "[object Map]" != h(new i) || o && "[object Promise]" != h(o.resolve()) || a && "[object Set]" != h(new a) || u && "[object WeakMap]" != h(new u)) && (h = function(t) {
        var e = c(t),
            n = "[object Object]" == e ? t.constructor : void 0,
            r = n ? s(n) : "";
        if (r) switch (r) {
            case l:
                return "[object DataView]";
            case f:
                return "[object Map]";
            case d:
                return "[object Promise]";
            case p:
                return "[object Set]";
            case v:
                return "[object WeakMap]"
        }
        return e
    }), t.exports = h
}, function(t, e, n) {
    var r = n(24),
        i = n(13);
    t.exports = function(t, e) {
        for (var n = 0, o = (e = r(e, t)).length; null != t && n < o;) t = t[i(e[n++])];
        return n && n == o ? t : void 0
    }
}, function(t, e, n) {
    var r = n(1),
        i = n(25),
        o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        a = /^\w*$/;
    t.exports = function(t, e) {
        if (r(t)) return !1;
        var n = typeof t;
        return !("number" != n && "symbol" != n && "boolean" != n && null != t && !i(t)) || a.test(t) || !o.test(t) || null != e && t in Object(e)
    }
}, function(t, e) {
    t.exports = function(t) {
        return t
    }
}, function(t, e, n) {
    var r = n(185);
    t.exports = function(t) {
        var e = r(t),
            n = e % 1;
        return e == e ? n ? e - n : e : 0
    }
}, function(t, e, n) {
    var r = n(5),
        i = n(25),
        o = NaN,
        a = /^\s+|\s+$/g,
        u = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        s = /^0o[0-7]+$/i,
        l = parseInt;
    t.exports = function(t) {
        if ("number" == typeof t) return t;
        if (i(t)) return o;
        if (r(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = r(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(a, "");
        var n = c.test(t);
        return n || s.test(t) ? l(t.slice(2), n ? 2 : 8) : u.test(t) ? o : +t
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.PLUGIN_LOTTIE = e.PLUGIN_LOTTIE_EFFECT = e.JELLO_EFFECT = e.RUBBER_BAND_EFFECT = e.FLIP_RIGHT_TO_LEFT_EFFECT = e.FLIP_LEFT_TO_RIGHT_EFFECT = e.BOUNCE_EFFECT = e.BLINK_EFFECT = e.DROP_EFFECT = e.PULSE_EFFECT = e.JIGGLE_EFFECT = e.FLIP_EFFECT = e.POP_EFFECT = e.FLY_EFFECT = e.SPIN_EFFECT = e.SHRINK_BIG_EFFECT = e.SHRINK_EFFECT = e.GROW_BIG_EFFECT = e.GROW_EFFECT = e.BLUR_EFFECT = e.SLIDE_EFFECT = e.FADE_EFFECT = e.OBJECT_VALUE = e.GENERAL_LOOP = e.GENERAL_STOP_ACTION = e.GENERAL_START_ACTION = e.GENERAL_CONTINUOUS_ACTION = e.GENERAL_DISPLAY = e.GENERAL_COMBO_CLASS = e.STYLE_TEXT_COLOR = e.STYLE_BORDER = e.STYLE_BACKGROUND_COLOR = e.STYLE_FILTER = e.STYLE_BOX_SHADOW = e.STYLE_SIZE = e.STYLE_OPACITY = e.TRANSFORM_SKEW = e.TRANSFORM_ROTATE = e.TRANSFORM_SCALE = e.TRANSFORM_MOVE = void 0;
    e.TRANSFORM_MOVE = "TRANSFORM_MOVE";
    e.TRANSFORM_SCALE = "TRANSFORM_SCALE";
    e.TRANSFORM_ROTATE = "TRANSFORM_ROTATE";
    e.TRANSFORM_SKEW = "TRANSFORM_SKEW";
    e.STYLE_OPACITY = "STYLE_OPACITY";
    e.STYLE_SIZE = "STYLE_SIZE";
    e.STYLE_BOX_SHADOW = "STYLE_BOX_SHADOW";
    e.STYLE_FILTER = "STYLE_FILTER";
    e.STYLE_BACKGROUND_COLOR = "STYLE_BACKGROUND_COLOR";
    e.STYLE_BORDER = "STYLE_BORDER";
    e.STYLE_TEXT_COLOR = "STYLE_TEXT_COLOR";
    e.GENERAL_COMBO_CLASS = "GENERAL_COMBO_CLASS";
    e.GENERAL_DISPLAY = "GENERAL_DISPLAY";
    e.GENERAL_CONTINUOUS_ACTION = "GENERAL_CONTINUOUS_ACTION";
    e.GENERAL_START_ACTION = "GENERAL_START_ACTION";
    e.GENERAL_STOP_ACTION = "GENERAL_STOP_ACTION";
    e.GENERAL_LOOP = "GENERAL_LOOP";
    e.OBJECT_VALUE = "OBJECT_VALUE";
    e.FADE_EFFECT = "FADE_EFFECT";
    e.SLIDE_EFFECT = "SLIDE_EFFECT";
    e.BLUR_EFFECT = "BLUR_EFFECT";
    e.GROW_EFFECT = "GROW_EFFECT";
    e.GROW_BIG_EFFECT = "GROW_BIG_EFFECT";
    e.SHRINK_EFFECT = "SHRINK_EFFECT";
    e.SHRINK_BIG_EFFECT = "SHRINK_BIG_EFFECT";
    e.SPIN_EFFECT = "SPIN_EFFECT";
    e.FLY_EFFECT = "FLY_EFFECT";
    e.POP_EFFECT = "POP_EFFECT";
    e.FLIP_EFFECT = "FLIP_EFFECT";
    e.JIGGLE_EFFECT = "JIGGLE_EFFECT";
    e.PULSE_EFFECT = "PULSE_EFFECT";
    e.DROP_EFFECT = "DROP_EFFECT";
    e.BLINK_EFFECT = "BLINK_EFFECT";
    e.BOUNCE_EFFECT = "BOUNCE_EFFECT";
    e.FLIP_LEFT_TO_RIGHT_EFFECT = "FLIP_LEFT_TO_RIGHT_EFFECT";
    e.FLIP_RIGHT_TO_LEFT_EFFECT = "FLIP_RIGHT_TO_LEFT_EFFECT";
    e.RUBBER_BAND_EFFECT = "RUBBER_BAND_EFFECT";
    e.JELLO_EFFECT = "JELLO_EFFECT";
    e.PLUGIN_LOTTIE_EFFECT = "PLUGIN_LOTTIE_EFFECT";
    e.PLUGIN_LOTTIE = "PLUGIN_LOTTIE"
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.RENDER_PLUGIN = e.RENDER_STYLE = e.RENDER_GENERAL = e.RENDER_TRANSFORM = e.ABSTRACT_NODE = e.PLAIN_OBJECT = e.HTML_ELEMENT = e.PRESERVE_3D = e.PARENT = e.SIBLINGS = e.IMMEDIATE_CHILDREN = e.CHILDREN = e.BAR_DELIMITER = e.COLON_DELIMITER = e.COMMA_DELIMITER = e.AUTO = e.WILL_CHANGE = e.FLEX = e.DISPLAY = e.COLOR = e.BORDER_COLOR = e.BACKGROUND = e.BACKGROUND_COLOR = e.HEIGHT = e.WIDTH = e.FILTER = e.OPACITY = e.SKEW_Y = e.SKEW_X = e.SKEW = e.ROTATE_Z = e.ROTATE_Y = e.ROTATE_X = e.SCALE_3D = e.SCALE_Z = e.SCALE_Y = e.SCALE_X = e.TRANSLATE_3D = e.TRANSLATE_Z = e.TRANSLATE_Y = e.TRANSLATE_X = e.TRANSFORM = e.CONFIG_UNIT = e.CONFIG_Z_UNIT = e.CONFIG_Y_UNIT = e.CONFIG_X_UNIT = e.CONFIG_VALUE = e.CONFIG_Z_VALUE = e.CONFIG_Y_VALUE = e.CONFIG_X_VALUE = e.BOUNDARY_SELECTOR = e.W_MOD_IX = e.W_MOD_JS = e.WF_PAGE = e.IX2_ID_DELIMITER = void 0;
    e.IX2_ID_DELIMITER = "|";
    e.WF_PAGE = "data-wf-page";
    e.W_MOD_JS = "w-mod-js";
    e.W_MOD_IX = "w-mod-ix";
    e.BOUNDARY_SELECTOR = ".w-dyn-item";
    e.CONFIG_X_VALUE = "xValue";
    e.CONFIG_Y_VALUE = "yValue";
    e.CONFIG_Z_VALUE = "zValue";
    e.CONFIG_VALUE = "value";
    e.CONFIG_X_UNIT = "xUnit";
    e.CONFIG_Y_UNIT = "yUnit";
    e.CONFIG_Z_UNIT = "zUnit";
    e.CONFIG_UNIT = "unit";
    e.TRANSFORM = "transform";
    e.TRANSLATE_X = "translateX";
    e.TRANSLATE_Y = "translateY";
    e.TRANSLATE_Z = "translateZ";
    e.TRANSLATE_3D = "translate3d";
    e.SCALE_X = "scaleX";
    e.SCALE_Y = "scaleY";
    e.SCALE_Z = "scaleZ";
    e.SCALE_3D = "scale3d";
    e.ROTATE_X = "rotateX";
    e.ROTATE_Y = "rotateY";
    e.ROTATE_Z = "rotateZ";
    e.SKEW = "skew";
    e.SKEW_X = "skewX";
    e.SKEW_Y = "skewY";
    e.OPACITY = "opacity";
    e.FILTER = "filter";
    e.WIDTH = "width";
    e.HEIGHT = "height";
    e.BACKGROUND_COLOR = "backgroundColor";
    e.BACKGROUND = "background";
    e.BORDER_COLOR = "borderColor";
    e.COLOR = "color";
    e.DISPLAY = "display";
    e.FLEX = "flex";
    e.WILL_CHANGE = "willChange";
    e.AUTO = "AUTO";
    e.COMMA_DELIMITER = ",";
    e.COLON_DELIMITER = ":";
    e.BAR_DELIMITER = "|";
    e.CHILDREN = "CHILDREN";
    e.IMMEDIATE_CHILDREN = "IMMEDIATE_CHILDREN";
    e.SIBLINGS = "SIBLINGS";
    e.PARENT = "PARENT";
    e.PRESERVE_3D = "preserve-3d";
    e.HTML_ELEMENT = "HTML_ELEMENT";
    e.PLAIN_OBJECT = "PLAIN_OBJECT";
    e.ABSTRACT_NODE = "ABSTRACT_NODE";
    e.RENDER_TRANSFORM = "RENDER_TRANSFORM";
    e.RENDER_GENERAL = "RENDER_GENERAL";
    e.RENDER_STYLE = "RENDER_STYLE";
    e.RENDER_PLUGIN = "RENDER_PLUGIN"
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.mediaQueriesDefined = e.viewportWidthChanged = e.actionListPlaybackChanged = e.elementStateChanged = e.instanceRemoved = e.instanceStarted = e.instanceAdded = e.parameterChanged = e.animationFrameChanged = e.eventStateChanged = e.testFrameRendered = e.eventListenerAdded = e.clearRequested = e.stopRequested = e.playbackRequested = e.previewRequested = e.sessionStopped = e.sessionStarted = e.sessionInitialized = e.rawDataImported = void 0;
    var r = n(3),
        i = r.IX2EngineActionTypes,
        o = i.IX2_RAW_DATA_IMPORTED,
        a = i.IX2_SESSION_INITIALIZED,
        u = i.IX2_SESSION_STARTED,
        c = i.IX2_SESSION_STOPPED,
        s = i.IX2_PREVIEW_REQUESTED,
        l = i.IX2_PLAYBACK_REQUESTED,
        f = i.IX2_STOP_REQUESTED,
        d = i.IX2_CLEAR_REQUESTED,
        p = i.IX2_EVENT_LISTENER_ADDED,
        v = i.IX2_TEST_FRAME_RENDERED,
        h = i.IX2_EVENT_STATE_CHANGED,
        E = i.IX2_ANIMATION_FRAME_CHANGED,
        _ = i.IX2_PARAMETER_CHANGED,
        g = i.IX2_INSTANCE_ADDED,
        m = i.IX2_INSTANCE_STARTED,
        I = i.IX2_INSTANCE_REMOVED,
        y = i.IX2_ELEMENT_STATE_CHANGED,
        T = i.IX2_ACTION_LIST_PLAYBACK_CHANGED,
        O = i.IX2_VIEWPORT_WIDTH_CHANGED,
        A = i.IX2_MEDIA_QUERIES_DEFINED,
        b = r.IX2EngineItemTypes,
        w = b.GENERAL_START_ACTION,
        S = (b.GENERAL_CONTINUOUS_ACTION, r.IX2VanillaUtils.reifyState);
    e.rawDataImported = function(t) {
        return {
            type: o,
            payload: Object.assign({}, S(t))
        }
    };
    e.sessionInitialized = function(t) {
        var e = t.hasBoundaryNodes;
        return {
            type: a,
            payload: {
                hasBoundaryNodes: e
            }
        }
    };
    e.sessionStarted = function() {
        return {
            type: u
        }
    };
    e.sessionStopped = function() {
        return {
            type: c
        }
    };
    e.previewRequested = function(t) {
        var e = t.rawData,
            n = t.defer;
        return {
            type: s,
            payload: {
                defer: n,
                rawData: e
            }
        }
    };
    e.playbackRequested = function(t) {
        var e = t.actionTypeId,
            n = void 0 === e ? w : e,
            r = t.actionListId,
            i = t.actionItemId,
            o = t.eventId,
            a = t.allowEvents,
            u = t.immediate,
            c = t.testManual,
            s = t.verbose,
            f = t.rawData;
        return {
            type: l,
            payload: {
                actionTypeId: n,
                actionListId: r,
                actionItemId: i,
                testManual: c,
                eventId: o,
                allowEvents: a,
                immediate: u,
                verbose: s,
                rawData: f
            }
        }
    };
    e.stopRequested = function(t) {
        return {
            type: f,
            payload: {
                actionListId: t
            }
        }
    };
    e.clearRequested = function() {
        return {
            type: d
        }
    };
    e.eventListenerAdded = function(t, e) {
        return {
            type: p,
            payload: {
                target: t,
                listenerParams: e
            }
        }
    };
    e.testFrameRendered = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return {
            type: v,
            payload: {
                step: t
            }
        }
    };
    e.eventStateChanged = function(t, e) {
        return {
            type: h,
            payload: {
                stateKey: t,
                newState: e
            }
        }
    };
    e.animationFrameChanged = function(t, e) {
        return {
            type: E,
            payload: {
                now: t,
                parameters: e
            }
        }
    };
    e.parameterChanged = function(t, e) {
        return {
            type: _,
            payload: {
                key: t,
                value: e
            }
        }
    };
    e.instanceAdded = function(t) {
        return {
            type: g,
            payload: Object.assign({}, t)
        }
    };
    e.instanceStarted = function(t, e) {
        return {
            type: m,
            payload: {
                instanceId: t,
                time: e
            }
        }
    };
    e.instanceRemoved = function(t) {
        return {
            type: I,
            payload: {
                instanceId: t
            }
        }
    };
    e.elementStateChanged = function(t, e, n, r) {
        return {
            type: y,
            payload: {
                elementId: t,
                actionTypeId: e,
                current: n,
                actionItem: r
            }
        }
    };
    e.actionListPlaybackChanged = function(t) {
        var e = t.actionListId,
            n = t.isPlaying;
        return {
            type: T,
            payload: {
                actionListId: e,
                isPlaying: n
            }
        }
    };
    e.viewportWidthChanged = function(t) {
        var e = t.width,
            n = t.mediaQueries;
        return {
            type: O,
            payload: {
                width: e,
                mediaQueries: n
            }
        }
    };
    e.mediaQueriesDefined = function() {
        return {
            type: A
        }
    }
}, function(t, e, n) {
    var r = n(97),
        i = n(51);

    function o(t, e) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = void 0
    }
    o.prototype = r(i.prototype), o.prototype.constructor = o, t.exports = o
}, function(t, e) {
    t.exports = function() {}
}, function(t, e, n) {
    var r = n(97),
        i = n(51),
        o = 4294967295;

    function a(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = o, this.__views__ = []
    }
    a.prototype = r(i.prototype), a.prototype.constructor = a, t.exports = a
}, function(t, e, n) {
    "use strict";
    var r = n(0)(n(11));
    window.tram = function(t) {
        function e(t, e) {
            return (new j.Bare).init(t, e)
        }

        function n(t) {
            return t.replace(/[A-Z]/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }

        function i(t) {
            var e = parseInt(t.slice(1), 16);
            return [e >> 16 & 255, e >> 8 & 255, 255 & e]
        }

        function o(t, e, n) {
            return "#" + (1 << 24 | t << 16 | e << 8 | n).toString(16).slice(1)
        }

        function a() {}

        function u(t, e, n) {
            s("Units do not match [" + t + "]: " + e + ", " + n)
        }

        function c(t, e, n) {
            if (void 0 !== e && (n = e), void 0 === t) return n;
            var r = n;
            return $.test(t) || !Z.test(t) ? r = parseInt(t, 10) : Z.test(t) && (r = 1e3 * parseFloat(t)), 0 > r && (r = 0), r == r ? r : n
        }

        function s(t) {
            H.debug && window && window.console.warn(t)
        }
        var l = function(t, e, n) {
                function i(t) {
                    return "object" == (0, r.default)(t)
                }

                function o(t) {
                    return "function" == typeof t
                }

                function a() {}
                return function r(u, c) {
                    function s() {
                        var t = new l;
                        return o(t.init) && t.init.apply(t, arguments), t
                    }

                    function l() {}
                    c === n && (c = u, u = Object), s.Bare = l;
                    var f, d = a[t] = u[t],
                        p = l[t] = s[t] = new a;
                    return p.constructor = s, s.mixin = function(e) {
                        return l[t] = s[t] = r(s, e)[t], s
                    }, s.open = function(t) {
                        if (f = {}, o(t) ? f = t.call(s, p, d, s, u) : i(t) && (f = t), i(f))
                            for (var n in f) e.call(f, n) && (p[n] = f[n]);
                        return o(p.init) || (p.init = u), s
                    }, s.open(c)
                }
            }("prototype", {}.hasOwnProperty),
            f = {
                ease: ["ease", function(t, e, n, r) {
                    var i = (t /= r) * t,
                        o = i * t;
                    return e + n * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + .25 * t)
                }],
                "ease-in": ["ease-in", function(t, e, n, r) {
                    var i = (t /= r) * t,
                        o = i * t;
                    return e + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i)
                }],
                "ease-out": ["ease-out", function(t, e, n, r) {
                    var i = (t /= r) * t,
                        o = i * t;
                    return e + n * (.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * t)
                }],
                "ease-in-out": ["ease-in-out", function(t, e, n, r) {
                    var i = (t /= r) * t,
                        o = i * t;
                    return e + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i)
                }],
                linear: ["linear", function(t, e, n, r) {
                    return n * t / r + e
                }],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(t, e, n, r) {
                    return n * (t /= r) * t + e
                }],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(t, e, n, r) {
                    return -n * (t /= r) * (t - 2) + e
                }],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e
                }],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(t, e, n, r) {
                    return n * (t /= r) * t * t + e
                }],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(t, e, n, r) {
                    return n * ((t = t / r - 1) * t * t + 1) + e
                }],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t * t + e : n / 2 * ((t -= 2) * t * t + 2) + e
                }],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(t, e, n, r) {
                    return n * (t /= r) * t * t * t + e
                }],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(t, e, n, r) {
                    return -n * ((t = t / r - 1) * t * t * t - 1) + e
                }],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t * t * t + e : -n / 2 * ((t -= 2) * t * t * t - 2) + e
                }],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(t, e, n, r) {
                    return n * (t /= r) * t * t * t * t + e
                }],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(t, e, n, r) {
                    return n * ((t = t / r - 1) * t * t * t * t + 1) + e
                }],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t * t * t * t + e : n / 2 * ((t -= 2) * t * t * t * t + 2) + e
                }],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(t, e, n, r) {
                    return -n * Math.cos(t / r * (Math.PI / 2)) + n + e
                }],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(t, e, n, r) {
                    return n * Math.sin(t / r * (Math.PI / 2)) + e
                }],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(t, e, n, r) {
                    return -n / 2 * (Math.cos(Math.PI * t / r) - 1) + e
                }],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(t, e, n, r) {
                    return 0 === t ? e : n * Math.pow(2, 10 * (t / r - 1)) + e
                }],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(t, e, n, r) {
                    return t === r ? e + n : n * (1 - Math.pow(2, -10 * t / r)) + e
                }],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(t, e, n, r) {
                    return 0 === t ? e : t === r ? e + n : (t /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : n / 2 * (2 - Math.pow(2, -10 * --t)) + e
                }],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(t, e, n, r) {
                    return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + e
                }],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(t, e, n, r) {
                    return n * Math.sqrt(1 - (t = t / r - 1) * t) + e
                }],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(t, e, n, r) {
                    return (t /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + e : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
                }],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(t, e, n, r, i) {
                    return void 0 === i && (i = 1.70158), n * (t /= r) * t * ((i + 1) * t - i) + e
                }],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(t, e, n, r, i) {
                    return void 0 === i && (i = 1.70158), n * ((t = t / r - 1) * t * ((i + 1) * t + i) + 1) + e
                }],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(t, e, n, r, i) {
                    return void 0 === i && (i = 1.70158), (t /= r / 2) < 1 ? n / 2 * t * t * ((1 + (i *= 1.525)) * t - i) + e : n / 2 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) + e
                }]
            },
            d = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            },
            p = document,
            v = window,
            h = "bkwld-tram",
            E = /[\-\.0-9]/g,
            _ = /[A-Z]/,
            g = "number",
            m = /^(rgb|#)/,
            I = /(em|cm|mm|in|pt|pc|px)$/,
            y = /(em|cm|mm|in|pt|pc|px|%)$/,
            T = /(deg|rad|turn)$/,
            O = "unitless",
            A = /(all|none) 0s ease 0s/,
            b = /^(width|height)$/,
            w = " ",
            S = p.createElement("a"),
            R = ["Webkit", "Moz", "O", "ms"],
            N = ["-webkit-", "-moz-", "-o-", "-ms-"],
            C = function(t) {
                if (t in S.style) return {
                    dom: t,
                    css: t
                };
                var e, n, r = "",
                    i = t.split("-");
                for (e = 0; e < i.length; e++) r += i[e].charAt(0).toUpperCase() + i[e].slice(1);
                for (e = 0; e < R.length; e++)
                    if ((n = R[e] + r) in S.style) return {
                        dom: n,
                        css: N[e] + t
                    }
            },
            L = e.support = {
                bind: Function.prototype.bind,
                transform: C("transform"),
                transition: C("transition"),
                backface: C("backface-visibility"),
                timing: C("transition-timing-function")
            };
        if (L.transition) {
            var x = L.timing.dom;
            if (S.style[x] = f["ease-in-back"][0], !S.style[x])
                for (var D in d) f[D][0] = d[D]
        }
        var P = e.frame = function() {
                var t = v.requestAnimationFrame || v.webkitRequestAnimationFrame || v.mozRequestAnimationFrame || v.oRequestAnimationFrame || v.msRequestAnimationFrame;
                return t && L.bind ? t.bind(v) : function(t) {
                    v.setTimeout(t, 16)
                }
            }(),
            M = e.now = function() {
                var t = v.performance,
                    e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
                return e && L.bind ? e.bind(t) : Date.now || function() {
                    return +new Date
                }
            }(),
            F = l(function(e) {
                function i(t, e) {
                    var n = function(t) {
                            for (var e = -1, n = t ? t.length : 0, r = []; ++e < n;) {
                                var i = t[e];
                                i && r.push(i)
                            }
                            return r
                        }(("" + t).split(w)),
                        r = n[0];
                    e = e || {};
                    var i = Q[r];
                    if (!i) return s("Unsupported property: " + r);
                    if (!e.weak || !this.props[r]) {
                        var o = i[0],
                            a = this.props[r];
                        return a || (a = this.props[r] = new o.Bare), a.init(this.$el, n, i, e), a
                    }
                }

                function o(t, e, n) {
                    if (t) {
                        var o = (0, r.default)(t);
                        if (e || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == o && e) return this.timer = new W({
                            duration: t,
                            context: this,
                            complete: a
                        }), void(this.active = !0);
                        if ("string" == o && e) {
                            switch (t) {
                                case "hide":
                                    l.call(this);
                                    break;
                                case "stop":
                                    u.call(this);
                                    break;
                                case "redraw":
                                    f.call(this);
                                    break;
                                default:
                                    i.call(this, t, n && n[1])
                            }
                            return a.call(this)
                        }
                        if ("function" == o) return void t.call(this, this);
                        if ("object" == o) {
                            var s = 0;
                            p.call(this, t, function(t, e) {
                                t.span > s && (s = t.span), t.stop(), t.animate(e)
                            }, function(t) {
                                "wait" in t && (s = c(t.wait, 0))
                            }), d.call(this), s > 0 && (this.timer = new W({
                                duration: s,
                                context: this
                            }), this.active = !0, e && (this.timer.complete = a));
                            var v = this,
                                h = !1,
                                E = {};
                            P(function() {
                                p.call(v, t, function(t) {
                                    t.active && (h = !0, E[t.name] = t.nextStyle)
                                }), h && v.$el.css(E)
                            })
                        }
                    }
                }

                function a() {
                    if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                        var t = this.queue.shift();
                        o.call(this, t.options, !0, t.args)
                    }
                }

                function u(t) {
                    var e;
                    this.timer && this.timer.destroy(), this.queue = [], this.active = !1, "string" == typeof t ? (e = {})[t] = 1 : e = "object" == (0, r.default)(t) && null != t ? t : this.props, p.call(this, e, v), d.call(this)
                }

                function l() {
                    u.call(this), this.el.style.display = "none"
                }

                function f() {
                    this.el.offsetHeight
                }

                function d() {
                    var t, e, n = [];
                    for (t in this.upstream && n.push(this.upstream), this.props)(e = this.props[t]).active && n.push(e.string);
                    n = n.join(","), this.style !== n && (this.style = n, this.el.style[L.transition.dom] = n)
                }

                function p(t, e, r) {
                    var o, a, u, c, s = e !== v,
                        l = {};
                    for (o in t) u = t[o], o in q ? (l.transform || (l.transform = {}), l.transform[o] = u) : (_.test(o) && (o = n(o)), o in Q ? l[o] = u : (c || (c = {}), c[o] = u));
                    for (o in l) {
                        if (u = l[o], !(a = this.props[o])) {
                            if (!s) continue;
                            a = i.call(this, o)
                        }
                        e.call(this, a, u)
                    }
                    r && c && r.call(this, c)
                }

                function v(t) {
                    t.stop()
                }

                function E(t, e) {
                    t.set(e)
                }

                function g(t) {
                    this.$el.css(t)
                }

                function m(t, n) {
                    e[t] = function() {
                        return this.children ? function(t, e) {
                            var n, r = this.children.length;
                            for (n = 0; r > n; n++) t.apply(this.children[n], e);
                            return this
                        }.call(this, n, arguments) : (this.el && n.apply(this, arguments), this)
                    }
                }
                e.init = function(e) {
                    if (this.$el = t(e), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, H.keepInherited && !H.fallback) {
                        var n = z(this.el, "transition");
                        n && !A.test(n) && (this.upstream = n)
                    }
                    L.backface && H.hideBackface && Y(this.el, L.backface.css, "hidden")
                }, m("add", i), m("start", o), m("wait", function(t) {
                    t = c(t, 0), this.active ? this.queue.push({
                        options: t
                    }) : (this.timer = new W({
                        duration: t,
                        context: this,
                        complete: a
                    }), this.active = !0)
                }), m("then", function(t) {
                    return this.active ? (this.queue.push({
                        options: t,
                        args: arguments
                    }), void(this.timer.complete = a)) : s("No active transition timer. Use start() or wait() before then().")
                }), m("next", a), m("stop", u), m("set", function(t) {
                    u.call(this, t), p.call(this, t, E, g)
                }), m("show", function(t) {
                    "string" != typeof t && (t = "block"), this.el.style.display = t
                }), m("hide", l), m("redraw", f), m("destroy", function() {
                    u.call(this), t.removeData(this.el, h), this.$el = this.el = null
                })
            }),
            j = l(F, function(e) {
                function n(e, n) {
                    var r = t.data(e, h) || t.data(e, h, new F.Bare);
                    return r.el || r.init(e), n ? r.start(n) : r
                }
                e.init = function(e, r) {
                    var i = t(e);
                    if (!i.length) return this;
                    if (1 === i.length) return n(i[0], r);
                    var o = [];
                    return i.each(function(t, e) {
                        o.push(n(e, r))
                    }), this.children = o, this
                }
            }),
            G = l(function(t) {
                function e() {
                    var t = this.get();
                    this.update("auto");
                    var e = this.get();
                    return this.update(t), e
                }

                function n(t) {
                    var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
                    return (e ? o(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }
                var i = 500,
                    a = "ease",
                    u = 0;
                t.init = function(t, e, n, r) {
                    this.$el = t, this.el = t[0];
                    var o = e[0];
                    n[2] && (o = n[2]), K[o] && (o = K[o]), this.name = o, this.type = n[1], this.duration = c(e[1], this.duration, i), this.ease = function(t, e, n) {
                        return void 0 !== e && (n = e), t in f ? t : n
                    }(e[2], this.ease, a), this.delay = c(e[3], this.delay, u), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = b.test(this.name), this.unit = r.unit || this.unit || H.defaultUnit, this.angle = r.angle || this.angle || H.defaultAngle, H.fallback || r.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + w + this.duration + "ms" + ("ease" != this.ease ? w + f[this.ease][0] : "") + (this.delay ? w + this.delay + "ms" : ""))
                }, t.set = function(t) {
                    t = this.convert(t, this.type), this.update(t), this.redraw()
                }, t.transition = function(t) {
                    this.active = !0, t = this.convert(t, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == t && (t = e.call(this))), this.nextStyle = t
                }, t.fallback = function(t) {
                    var n = this.el.style[this.name] || this.convert(this.get(), this.type);
                    t = this.convert(t, this.type), this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)), "auto" == t && (t = e.call(this))), this.tween = new k({
                        from: n,
                        to: t,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }, t.get = function() {
                    return z(this.el, this.name)
                }, t.update = function(t) {
                    Y(this.el, this.name, t)
                }, t.stop = function() {
                    (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, Y(this.el, this.name, this.get()));
                    var t = this.tween;
                    t && t.context && t.destroy()
                }, t.convert = function(t, e) {
                    if ("auto" == t && this.auto) return t;
                    var i, o = "number" == typeof t,
                        a = "string" == typeof t;
                    switch (e) {
                        case g:
                            if (o) return t;
                            if (a && "" === t.replace(E, "")) return +t;
                            i = "number(unitless)";
                            break;
                        case m:
                            if (a) {
                                if ("" === t && this.original) return this.original;
                                if (e.test(t)) return "#" == t.charAt(0) && 7 == t.length ? t : n(t)
                            }
                            i = "hex or rgb string";
                            break;
                        case I:
                            if (o) return t + this.unit;
                            if (a && e.test(t)) return t;
                            i = "number(px) or string(unit)";
                            break;
                        case y:
                            if (o) return t + this.unit;
                            if (a && e.test(t)) return t;
                            i = "number(px) or string(unit or %)";
                            break;
                        case T:
                            if (o) return t + this.angle;
                            if (a && e.test(t)) return t;
                            i = "number(deg) or string(angle)";
                            break;
                        case O:
                            if (o) return t;
                            if (a && y.test(t)) return t;
                            i = "number(unitless) or string(unit or %)"
                    }
                    return function(t, e) {
                        s("Type warning: Expected: [" + t + "] Got: [" + (0, r.default)(e) + "] " + e)
                    }(i, t), t
                }, t.redraw = function() {
                    this.el.offsetHeight
                }
            }),
            V = l(G, function(t, e) {
                t.init = function() {
                    e.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), m))
                }
            }),
            U = l(G, function(t, e) {
                t.init = function() {
                    e.init.apply(this, arguments), this.animate = this.fallback
                }, t.get = function() {
                    return this.$el[this.name]()
                }, t.update = function(t) {
                    this.$el[this.name](t)
                }
            }),
            X = l(G, function(t, e) {
                function n(t, e) {
                    var n, r, i, o, a;
                    for (n in t) i = (o = q[n])[0], r = o[1] || n, a = this.convert(t[n], i), e.call(this, r, a, i)
                }
                t.init = function() {
                    e.init.apply(this, arguments), this.current || (this.current = {}, q.perspective && H.perspective && (this.current.perspective = H.perspective, Y(this.el, this.name, this.style(this.current)), this.redraw()))
                }, t.set = function(t) {
                    n.call(this, t, function(t, e) {
                        this.current[t] = e
                    }), Y(this.el, this.name, this.style(this.current)), this.redraw()
                }, t.transition = function(t) {
                    var e = this.values(t);
                    this.tween = new B({
                        current: this.current,
                        values: e,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var n, r = {};
                    for (n in this.current) r[n] = n in e ? e[n] : this.current[n];
                    this.active = !0, this.nextStyle = this.style(r)
                }, t.fallback = function(t) {
                    var e = this.values(t);
                    this.tween = new B({
                        current: this.current,
                        values: e,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }, t.update = function() {
                    Y(this.el, this.name, this.style(this.current))
                }, t.style = function(t) {
                    var e, n = "";
                    for (e in t) n += e + "(" + t[e] + ") ";
                    return n
                }, t.values = function(t) {
                    var e, r = {};
                    return n.call(this, t, function(t, n, i) {
                        r[t] = n, void 0 === this.current[t] && (e = 0, ~t.indexOf("scale") && (e = 1), this.current[t] = this.convert(e, i))
                    }), r
                }
            }),
            k = l(function(e) {
                function n() {
                    var t, e, r, i = c.length;
                    if (i)
                        for (P(n), e = M(), t = i; t--;)(r = c[t]) && r.render(e)
                }
                var r = {
                    ease: f.ease[1],
                    from: 0,
                    to: 1
                };
                e.init = function(t) {
                    this.duration = t.duration || 0, this.delay = t.delay || 0;
                    var e = t.ease || r.ease;
                    f[e] && (e = f[e][1]), "function" != typeof e && (e = r.ease), this.ease = e, this.update = t.update || a, this.complete = t.complete || a, this.context = t.context || this, this.name = t.name;
                    var n = t.from,
                        i = t.to;
                    void 0 === n && (n = r.from), void 0 === i && (i = r.to), this.unit = t.unit || "", "number" == typeof n && "number" == typeof i ? (this.begin = n, this.change = i - n) : this.format(i, n), this.value = this.begin + this.unit, this.start = M(), !1 !== t.autoplay && this.play()
                }, e.play = function() {
                    var t;
                    this.active || (this.start || (this.start = M()), this.active = !0, t = this, 1 === c.push(t) && P(n))
                }, e.stop = function() {
                    var e, n, r;
                    this.active && (this.active = !1, e = this, (r = t.inArray(e, c)) >= 0 && (n = c.slice(r + 1), c.length = r, n.length && (c = c.concat(n))))
                }, e.render = function(t) {
                    var e, n = t - this.start;
                    if (this.delay) {
                        if (n <= this.delay) return;
                        n -= this.delay
                    }
                    if (n < this.duration) {
                        var r = this.ease(n, 0, 1, this.duration);
                        return e = this.startRGB ? function(t, e, n) {
                            return o(t[0] + n * (e[0] - t[0]), t[1] + n * (e[1] - t[1]), t[2] + n * (e[2] - t[2]))
                        }(this.startRGB, this.endRGB, r) : function(t) {
                            return Math.round(t * s) / s
                        }(this.begin + r * this.change), this.value = e + this.unit, void this.update.call(this.context, this.value)
                    }
                    e = this.endHex || this.begin + this.change, this.value = e + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                }, e.format = function(t, e) {
                    if (e += "", "#" == (t += "").charAt(0)) return this.startRGB = i(e), this.endRGB = i(t), this.endHex = t, this.begin = 0, void(this.change = 1);
                    if (!this.unit) {
                        var n = e.replace(E, "");
                        n !== t.replace(E, "") && u("tween", e, t), this.unit = n
                    }
                    e = parseFloat(e), t = parseFloat(t), this.begin = this.value = e, this.change = t - e
                }, e.destroy = function() {
                    this.stop(), this.context = null, this.ease = this.update = this.complete = a
                };
                var c = [],
                    s = 1e3
            }),
            W = l(k, function(t) {
                t.init = function(t) {
                    this.duration = t.duration || 0, this.complete = t.complete || a, this.context = t.context, this.play()
                }, t.render = function(t) {
                    t - this.start < this.duration || (this.complete.call(this.context), this.destroy())
                }
            }),
            B = l(k, function(t, e) {
                t.init = function(t) {
                    var e, n;
                    for (e in this.context = t.context, this.update = t.update, this.tweens = [], this.current = t.current, t.values) n = t.values[e], this.current[e] !== n && this.tweens.push(new k({
                        name: e,
                        from: this.current[e],
                        to: n,
                        duration: t.duration,
                        delay: t.delay,
                        ease: t.ease,
                        autoplay: !1
                    }));
                    this.play()
                }, t.render = function(t) {
                    var e, n, r = !1;
                    for (e = this.tweens.length; e--;)(n = this.tweens[e]).context && (n.render(t), this.current[n.name] = n.value, r = !0);
                    return r ? void(this.update && this.update.call(this.context)) : this.destroy()
                }, t.destroy = function() {
                    if (e.destroy.call(this), this.tweens) {
                        var t;
                        for (t = this.tweens.length; t--;) this.tweens[t].destroy();
                        this.tweens = null, this.current = null
                    }
                }
            }),
            H = e.config = {
                debug: !1,
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !L.transition,
                agentTests: []
            };
        e.fallback = function(t) {
            if (!L.transition) return H.fallback = !0;
            H.agentTests.push("(" + t + ")");
            var e = new RegExp(H.agentTests.join("|"), "i");
            H.fallback = e.test(navigator.userAgent)
        }, e.fallback("6.0.[2-5] Safari"), e.tween = function(t) {
            return new k(t)
        }, e.delay = function(t, e, n) {
            return new W({
                complete: e,
                duration: t,
                context: n
            })
        }, t.fn.tram = function(t) {
            return e.call(null, this, t)
        };
        var Y = t.style,
            z = t.css,
            K = {
                transform: L.transform && L.transform.css
            },
            Q = {
                color: [V, m],
                background: [V, m, "background-color"],
                "outline-color": [V, m],
                "border-color": [V, m],
                "border-top-color": [V, m],
                "border-right-color": [V, m],
                "border-bottom-color": [V, m],
                "border-left-color": [V, m],
                "border-width": [G, I],
                "border-top-width": [G, I],
                "border-right-width": [G, I],
                "border-bottom-width": [G, I],
                "border-left-width": [G, I],
                "border-spacing": [G, I],
                "letter-spacing": [G, I],
                margin: [G, I],
                "margin-top": [G, I],
                "margin-right": [G, I],
                "margin-bottom": [G, I],
                "margin-left": [G, I],
                padding: [G, I],
                "padding-top": [G, I],
                "padding-right": [G, I],
                "padding-bottom": [G, I],
                "padding-left": [G, I],
                "outline-width": [G, I],
                opacity: [G, g],
                top: [G, y],
                right: [G, y],
                bottom: [G, y],
                left: [G, y],
                "font-size": [G, y],
                "text-indent": [G, y],
                "word-spacing": [G, y],
                width: [G, y],
                "min-width": [G, y],
                "max-width": [G, y],
                height: [G, y],
                "min-height": [G, y],
                "max-height": [G, y],
                "line-height": [G, O],
                "scroll-top": [U, g, "scrollTop"],
                "scroll-left": [U, g, "scrollLeft"]
            },
            q = {};
        L.transform && (Q.transform = [X], q = {
            x: [y, "translateX"],
            y: [y, "translateY"],
            rotate: [T],
            rotateX: [T],
            rotateY: [T],
            scale: [g],
            scaleX: [g],
            scaleY: [g],
            skew: [T],
            skewX: [T],
            skewY: [T]
        }), L.transform && L.backface && (q.z = [y, "translateZ"], q.rotateZ = [T], q.scaleZ = [g], q.perspective = [I]);
        var $ = /ms/,
            Z = /s|\./;
        return t.tram = e
    }(window.jQuery)
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(27);
    n.d(e, "createStore", function() {
        return r.default
    });
    var i = n(57);
    n.d(e, "combineReducers", function() {
        return i.default
    });
    var o = n(59);
    n.d(e, "bindActionCreators", function() {
        return o.default
    });
    var a = n(60);
    n.d(e, "applyMiddleware", function() {
        return a.default
    });
    var u = n(29);
    n.d(e, "compose", function() {
        return u.default
    });
    n(58)
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(108),
        i = n(113),
        o = n(115),
        a = "[object Object]",
        u = Function.prototype,
        c = Object.prototype,
        s = u.toString,
        l = c.hasOwnProperty,
        f = s.call(Object);
    e.default = function(t) {
        if (!Object(o.default)(t) || Object(r.default)(t) != a) return !1;
        var e = Object(i.default)(t);
        if (null === e) return !0;
        var n = l.call(e, "constructor") && e.constructor;
        return "function" == typeof n && n instanceof n && s.call(n) == f
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(109).default.Symbol;
    e.default = r
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "default", function() {
        return o
    });
    var r = n(27);
    n(55), n(58);

    function i(t, e) {
        var n = e && e.type;
        return "Given action " + (n && '"' + n.toString() + '"' || "an action") + ', reducer "' + t + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
    }

    function o(t) {
        for (var e = Object.keys(t), n = {}, o = 0; o < e.length; o++) {
            var a = e[o];
            0, "function" == typeof t[a] && (n[a] = t[a])
        }
        var u, c = Object.keys(n);
        try {
            ! function(t) {
                Object.keys(t).forEach(function(e) {
                    var n = t[e];
                    if (void 0 === n(void 0, {
                            type: r.ActionTypes.INIT
                        })) throw new Error('Reducer "' + e + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                    if (void 0 === n(void 0, {
                            type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".")
                        })) throw new Error('Reducer "' + e + "\" returned undefined when probed with a random type. Don't try to handle " + r.ActionTypes.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.')
                })
            }(n)
        } catch (t) {
            u = t
        }
        return function() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                e = arguments[1];
            if (u) throw u;
            for (var r = !1, o = {}, a = 0; a < c.length; a++) {
                var s = c[a],
                    l = n[s],
                    f = t[s],
                    d = l(f, e);
                if (void 0 === d) {
                    var p = i(s, e);
                    throw new Error(p)
                }
                o[s] = d, r = r || d !== f
            }
            return r ? o : t
        }
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        "undefined" != typeof console && "function" == typeof console.error && console.error(t);
        try {
            throw new Error(t)
        } catch (t) {}
    }
    n.r(e), n.d(e, "default", function() {
        return r
    })
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        return function() {
            return e(t.apply(void 0, arguments))
        }
    }

    function i(t, e) {
        if ("function" == typeof t) return r(t, e);
        if ("object" != typeof t || null === t) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === t ? "null" : typeof t) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
        for (var n = Object.keys(t), i = {}, o = 0; o < n.length; o++) {
            var a = n[o],
                u = t[a];
            "function" == typeof u && (i[a] = r(u, e))
        }
        return i
    }
    n.r(e), n.d(e, "default", function() {
        return i
    })
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "default", function() {
        return o
    });
    var r = n(29),
        i = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        };

    function o() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return function(t) {
            return function(n, o, a) {
                var u, c = t(n, o, a),
                    s = c.dispatch,
                    l = {
                        getState: c.getState,
                        dispatch: function(t) {
                            return s(t)
                        }
                    };
                return u = e.map(function(t) {
                    return t(l)
                }), s = r.default.apply(void 0, u)(c.dispatch), i({}, c, {
                    dispatch: s
                })
            }
        }
    }
}, function(t, e, n) {
    var r = n(62)(n(184));
    t.exports = r
}, function(t, e, n) {
    var r = n(6),
        i = n(10),
        o = n(21);
    t.exports = function(t) {
        return function(e, n, a) {
            var u = Object(e);
            if (!i(e)) {
                var c = r(n, 3);
                e = o(e), n = function(t) {
                    return c(u[t], t, u)
                }
            }
            var s = t(e, n, a);
            return s > -1 ? u[c ? e[s] : s] : void 0
        }
    }
}, function(t, e, n) {
    var r = n(17),
        i = n(128),
        o = n(129),
        a = n(130),
        u = n(131),
        c = n(132);

    function s(t) {
        var e = this.__data__ = new r(t);
        this.size = e.size
    }
    s.prototype.clear = i, s.prototype.delete = o, s.prototype.get = a, s.prototype.has = u, s.prototype.set = c, t.exports = s
}, function(t, e, n) {
    var r = n(9),
        i = n(5),
        o = "[object AsyncFunction]",
        a = "[object Function]",
        u = "[object GeneratorFunction]",
        c = "[object Proxy]";
    t.exports = function(t) {
        if (!i(t)) return !1;
        var e = r(t);
        return e == a || e == u || e == o || e == c
    }
}, function(t, e, n) {
    (function(e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.exports = n
    }).call(this, n(28))
}, function(t, e) {
    var n = Function.prototype.toString;
    t.exports = function(t) {
        if (null != t) {
            try {
                return n.call(t)
            } catch (t) {}
            try {
                return t + ""
            } catch (t) {}
        }
        return ""
    }
}, function(t, e, n) {
    var r = n(151),
        i = n(8);
    t.exports = function t(e, n, o, a, u) {
        return e === n || (null == e || null == n || !i(e) && !i(n) ? e != e && n != n : r(e, n, o, a, t, u))
    }
}, function(t, e, n) {
    var r = n(152),
        i = n(155),
        o = n(156),
        a = 1,
        u = 2;
    t.exports = function(t, e, n, c, s, l) {
        var f = n & a,
            d = t.length,
            p = e.length;
        if (d != p && !(f && p > d)) return !1;
        var v = l.get(t);
        if (v && l.get(e)) return v == e;
        var h = -1,
            E = !0,
            _ = n & u ? new r : void 0;
        for (l.set(t, e), l.set(e, t); ++h < d;) {
            var g = t[h],
                m = e[h];
            if (c) var I = f ? c(m, g, h, e, t, l) : c(g, m, h, t, e, l);
            if (void 0 !== I) {
                if (I) continue;
                E = !1;
                break
            }
            if (_) {
                if (!i(e, function(t, e) {
                        if (!o(_, e) && (g === t || s(g, t, n, c, l))) return _.push(e)
                    })) {
                    E = !1;
                    break
                }
            } else if (g !== m && !s(g, m, n, c, l)) {
                E = !1;
                break
            }
        }
        return l.delete(t), l.delete(e), E
    }
}, function(t, e, n) {
    var r = n(34),
        i = n(1);
    t.exports = function(t, e, n) {
        var o = e(t);
        return i(t) ? o : r(o, n(t))
    }
}, function(t, e, n) {
    var r = n(163),
        i = n(71),
        o = Object.prototype.propertyIsEnumerable,
        a = Object.getOwnPropertySymbols,
        u = a ? function(t) {
            return null == t ? [] : (t = Object(t), r(a(t), function(e) {
                return o.call(t, e)
            }))
        } : i;
    t.exports = u
}, function(t, e) {
    t.exports = function() {
        return []
    }
}, function(t, e, n) {
    var r = n(164),
        i = n(22),
        o = n(1),
        a = n(35),
        u = n(36),
        c = n(37),
        s = Object.prototype.hasOwnProperty;
    t.exports = function(t, e) {
        var n = o(t),
            l = !n && i(t),
            f = !n && !l && a(t),
            d = !n && !l && !f && c(t),
            p = n || l || f || d,
            v = p ? r(t.length, String) : [],
            h = v.length;
        for (var E in t) !e && !s.call(t, E) || p && ("length" == E || f && ("offset" == E || "parent" == E) || d && ("buffer" == E || "byteLength" == E || "byteOffset" == E) || u(E, h)) || v.push(E);
        return v
    }
}, function(t, e) {
    t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function() {
                return t.l
            }
        }), Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function() {
                return t.i
            }
        }), t.webpackPolyfill = 1), t
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return function(n) {
            return t(e(n))
        }
    }
}, function(t, e, n) {
    var r = n(7)(n(4), "WeakMap");
    t.exports = r
}, function(t, e, n) {
    var r = n(5);
    t.exports = function(t) {
        return t == t && !r(t)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return function(n) {
            return null != n && n[t] === e && (void 0 !== e || t in Object(n))
        }
    }
}, function(t, e, n) {
    var r = n(79);
    t.exports = function(t) {
        return null == t ? "" : r(t)
    }
}, function(t, e, n) {
    var r = n(12),
        i = n(80),
        o = n(1),
        a = n(25),
        u = 1 / 0,
        c = r ? r.prototype : void 0,
        s = c ? c.toString : void 0;
    t.exports = function t(e) {
        if ("string" == typeof e) return e;
        if (o(e)) return i(e, t) + "";
        if (a(e)) return s ? s.call(e) : "";
        var n = e + "";
        return "0" == n && 1 / e == -u ? "-0" : n
    }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;) i[n] = e(t[n], n, t);
        return i
    }
}, function(t, e) {
    t.exports = function(t) {
        return function(e) {
            return null == e ? void 0 : e[t]
        }
    }
}, function(t, e) {
    t.exports = function(t, e, n, r) {
        for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
            if (e(t[o], o, t)) return o;
        return -1
    }
}, function(t, e, n) {
    "use strict";
    var r = n(0);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.inQuad = function(t) {
        return Math.pow(t, 2)
    }, e.outQuad = function(t) {
        return -(Math.pow(t - 1, 2) - 1)
    }, e.inOutQuad = function(t) {
        if ((t /= .5) < 1) return .5 * Math.pow(t, 2);
        return -.5 * ((t -= 2) * t - 2)
    }, e.inCubic = function(t) {
        return Math.pow(t, 3)
    }, e.outCubic = function(t) {
        return Math.pow(t - 1, 3) + 1
    }, e.inOutCubic = function(t) {
        if ((t /= .5) < 1) return .5 * Math.pow(t, 3);
        return .5 * (Math.pow(t - 2, 3) + 2)
    }, e.inQuart = function(t) {
        return Math.pow(t, 4)
    }, e.outQuart = function(t) {
        return -(Math.pow(t - 1, 4) - 1)
    }, e.inOutQuart = function(t) {
        if ((t /= .5) < 1) return .5 * Math.pow(t, 4);
        return -.5 * ((t -= 2) * Math.pow(t, 3) - 2)
    }, e.inQuint = function(t) {
        return Math.pow(t, 5)
    }, e.outQuint = function(t) {
        return Math.pow(t - 1, 5) + 1
    }, e.inOutQuint = function(t) {
        if ((t /= .5) < 1) return .5 * Math.pow(t, 5);
        return .5 * (Math.pow(t - 2, 5) + 2)
    }, e.inSine = function(t) {
        return 1 - Math.cos(t * (Math.PI / 2))
    }, e.outSine = function(t) {
        return Math.sin(t * (Math.PI / 2))
    }, e.inOutSine = function(t) {
        return -.5 * (Math.cos(Math.PI * t) - 1)
    }, e.inExpo = function(t) {
        return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
    }, e.outExpo = function(t) {
        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
    }, e.inOutExpo = function(t) {
        if (0 === t) return 0;
        if (1 === t) return 1;
        if ((t /= .5) < 1) return .5 * Math.pow(2, 10 * (t - 1));
        return .5 * (2 - Math.pow(2, -10 * --t))
    }, e.inCirc = function(t) {
        return -(Math.sqrt(1 - t * t) - 1)
    }, e.outCirc = function(t) {
        return Math.sqrt(1 - Math.pow(t - 1, 2))
    }, e.inOutCirc = function(t) {
        if ((t /= .5) < 1) return -.5 * (Math.sqrt(1 - t * t) - 1);
        return .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
    }, e.outBounce = function(t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
    }, e.inBack = function(t) {
        return t * t * ((o + 1) * t - o)
    }, e.outBack = function(t) {
        return (t -= 1) * t * ((o + 1) * t + o) + 1
    }, e.inOutBack = function(t) {
        var e = o;
        if ((t /= .5) < 1) return t * t * ((1 + (e *= 1.525)) * t - e) * .5;
        return .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
    }, e.inElastic = function(t) {
        var e = o,
            n = 0,
            r = 1;
        if (0 === t) return 0;
        if (1 === t) return 1;
        n || (n = .3);
        r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
        return -r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)
    }, e.outElastic = function(t) {
        var e = o,
            n = 0,
            r = 1;
        if (0 === t) return 0;
        if (1 === t) return 1;
        n || (n = .3);
        r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
        return r * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1
    }, e.inOutElastic = function(t) {
        var e = o,
            n = 0,
            r = 1;
        if (0 === t) return 0;
        if (2 == (t /= .5)) return 1;
        n || (n = .3 * 1.5);
        r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
        if (t < 1) return r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5;
        return r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1
    }, e.swingFromTo = function(t) {
        var e = o;
        return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
    }, e.swingFrom = function(t) {
        return t * t * ((o + 1) * t - o)
    }, e.swingTo = function(t) {
        return (t -= 1) * t * ((o + 1) * t + o) + 1
    }, e.bounce = function(t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
    }, e.bouncePast = function(t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
    }, e.easeInOut = e.easeOut = e.easeIn = e.ease = void 0;
    var i = r(n(84)),
        o = 1.70158,
        a = (0, i.default)(.25, .1, .25, 1);
    e.ease = a;
    var u = (0, i.default)(.42, 0, 1, 1);
    e.easeIn = u;
    var c = (0, i.default)(0, 0, .58, 1);
    e.easeOut = c;
    var s = (0, i.default)(.42, 0, .58, 1);
    e.easeInOut = s
}, function(t, e) {
    var n = 4,
        r = .001,
        i = 1e-7,
        o = 10,
        a = 11,
        u = 1 / (a - 1),
        c = "function" == typeof Float32Array;

    function s(t, e) {
        return 1 - 3 * e + 3 * t
    }

    function l(t, e) {
        return 3 * e - 6 * t
    }

    function f(t) {
        return 3 * t
    }

    function d(t, e, n) {
        return ((s(e, n) * t + l(e, n)) * t + f(e)) * t
    }

    function p(t, e, n) {
        return 3 * s(e, n) * t * t + 2 * l(e, n) * t + f(e)
    }
    t.exports = function(t, e, s, l) {
        if (!(0 <= t && t <= 1 && 0 <= s && s <= 1)) throw new Error("bezier x values must be in [0, 1] range");
        var f = c ? new Float32Array(a) : new Array(a);
        if (t !== e || s !== l)
            for (var v = 0; v < a; ++v) f[v] = d(v * u, t, s);

        function h(e) {
            for (var c = 0, l = 1, v = a - 1; l !== v && f[l] <= e; ++l) c += u;
            var h = c + (e - f[--l]) / (f[l + 1] - f[l]) * u,
                E = p(h, t, s);
            return E >= r ? function(t, e, r, i) {
                for (var o = 0; o < n; ++o) {
                    var a = p(e, r, i);
                    if (0 === a) return e;
                    e -= (d(e, r, i) - t) / a
                }
                return e
            }(e, h, t, s) : 0 === E ? h : function(t, e, n, r, a) {
                var u, c, s = 0;
                do {
                    (u = d(c = e + (n - e) / 2, r, a) - t) > 0 ? n = c : e = c
                } while (Math.abs(u) > i && ++s < o);
                return c
            }(e, c, c + u, t, s)
        }
        return function(n) {
            return t === e && s === l ? n : 0 === n ? 0 : 1 === n ? 1 : d(h(n), e, l)
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(0)(n(86)),
        i = n(0),
        o = n(16);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.optimizeFloat = c, e.createBezierEasing = function(t) {
        return u.default.apply(void 0, (0, r.default)(t))
    }, e.applyEasing = function(t, e, n) {
        if (0 === e) return 0;
        if (1 === e) return 1;
        if (n) return c(e > 0 ? n(e) : e);
        return c(e > 0 && t && a[t] ? a[t](e) : e)
    };
    var a = o(n(83)),
        u = i(n(84));

    function c(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
            r = Math.pow(n, e),
            i = Number(Math.round(t * r) / r);
        return Math.abs(i) > 1e-4 ? i : 0
    }
}, function(t, e, n) {
    var r = n(186),
        i = n(187),
        o = n(188);
    t.exports = function(t) {
        return r(t) || i(t) || o()
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.IX2_TEST_FRAME_RENDERED = e.IX2_MEDIA_QUERIES_DEFINED = e.IX2_VIEWPORT_WIDTH_CHANGED = e.IX2_ACTION_LIST_PLAYBACK_CHANGED = e.IX2_ELEMENT_STATE_CHANGED = e.IX2_INSTANCE_REMOVED = e.IX2_INSTANCE_STARTED = e.IX2_INSTANCE_ADDED = e.IX2_PARAMETER_CHANGED = e.IX2_ANIMATION_FRAME_CHANGED = e.IX2_EVENT_STATE_CHANGED = e.IX2_EVENT_LISTENER_ADDED = e.IX2_CLEAR_REQUESTED = e.IX2_STOP_REQUESTED = e.IX2_PLAYBACK_REQUESTED = e.IX2_PREVIEW_REQUESTED = e.IX2_SESSION_STOPPED = e.IX2_SESSION_STARTED = e.IX2_SESSION_INITIALIZED = e.IX2_RAW_DATA_IMPORTED = void 0;
    e.IX2_RAW_DATA_IMPORTED = "IX2_RAW_DATA_IMPORTED";
    e.IX2_SESSION_INITIALIZED = "IX2_SESSION_INITIALIZED";
    e.IX2_SESSION_STARTED = "IX2_SESSION_STARTED";
    e.IX2_SESSION_STOPPED = "IX2_SESSION_STOPPED";
    e.IX2_PREVIEW_REQUESTED = "IX2_PREVIEW_REQUESTED";
    e.IX2_PLAYBACK_REQUESTED = "IX2_PLAYBACK_REQUESTED";
    e.IX2_STOP_REQUESTED = "IX2_STOP_REQUESTED";
    e.IX2_CLEAR_REQUESTED = "IX2_CLEAR_REQUESTED";
    e.IX2_EVENT_LISTENER_ADDED = "IX2_EVENT_LISTENER_ADDED";
    e.IX2_EVENT_STATE_CHANGED = "IX2_EVENT_STATE_CHANGED";
    e.IX2_ANIMATION_FRAME_CHANGED = "IX2_ANIMATION_FRAME_CHANGED";
    e.IX2_PARAMETER_CHANGED = "IX2_PARAMETER_CHANGED";
    e.IX2_INSTANCE_ADDED = "IX2_INSTANCE_ADDED";
    e.IX2_INSTANCE_STARTED = "IX2_INSTANCE_STARTED";
    e.IX2_INSTANCE_REMOVED = "IX2_INSTANCE_REMOVED";
    e.IX2_ELEMENT_STATE_CHANGED = "IX2_ELEMENT_STATE_CHANGED";
    e.IX2_ACTION_LIST_PLAYBACK_CHANGED = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
    e.IX2_VIEWPORT_WIDTH_CHANGED = "IX2_VIEWPORT_WIDTH_CHANGED";
    e.IX2_MEDIA_QUERIES_DEFINED = "IX2_MEDIA_QUERIES_DEFINED";
    e.IX2_TEST_FRAME_RENDERED = "IX2_TEST_FRAME_RENDERED"
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ECOMMERCE_CART_CLOSE = e.ECOMMERCE_CART_OPEN = e.PAGE = e.VIEWPORT = e.ELEMENT = e.PAGE_SCROLL = e.PAGE_SCROLL_DOWN = e.PAGE_SCROLL_UP = e.PAGE_FINISH = e.PAGE_START = e.COMPONENT_INACTIVE = e.COMPONENT_ACTIVE = e.DROPDOWN_CLOSE = e.DROPDOWN_OPEN = e.SLIDER_INACTIVE = e.SLIDER_ACTIVE = e.NAVBAR_CLOSE = e.NAVBAR_OPEN = e.TAB_INACTIVE = e.TAB_ACTIVE = e.SCROLLING_IN_VIEW = e.SCROLL_OUT_OF_VIEW = e.SCROLL_INTO_VIEW = e.MOUSE_MOVE = e.MOUSE_OUT = e.MOUSE_OVER = e.MOUSE_UP = e.MOUSE_DOWN = e.MOUSE_SECOND_CLICK = e.MOUSE_CLICK = void 0;
    e.MOUSE_CLICK = "MOUSE_CLICK";
    e.MOUSE_SECOND_CLICK = "MOUSE_SECOND_CLICK";
    e.MOUSE_DOWN = "MOUSE_DOWN";
    e.MOUSE_UP = "MOUSE_UP";
    e.MOUSE_OVER = "MOUSE_OVER";
    e.MOUSE_OUT = "MOUSE_OUT";
    e.MOUSE_MOVE = "MOUSE_MOVE";
    e.SCROLL_INTO_VIEW = "SCROLL_INTO_VIEW";
    e.SCROLL_OUT_OF_VIEW = "SCROLL_OUT_OF_VIEW";
    e.SCROLLING_IN_VIEW = "SCROLLING_IN_VIEW";
    e.TAB_ACTIVE = "TAB_ACTIVE";
    e.TAB_INACTIVE = "TAB_INACTIVE";
    e.NAVBAR_OPEN = "NAVBAR_OPEN";
    e.NAVBAR_CLOSE = "NAVBAR_CLOSE";
    e.SLIDER_ACTIVE = "SLIDER_ACTIVE";
    e.SLIDER_INACTIVE = "SLIDER_INACTIVE";
    e.DROPDOWN_OPEN = "DROPDOWN_OPEN";
    e.DROPDOWN_CLOSE = "DROPDOWN_CLOSE";
    e.COMPONENT_ACTIVE = "COMPONENT_ACTIVE";
    e.COMPONENT_INACTIVE = "COMPONENT_INACTIVE";
    e.PAGE_START = "PAGE_START";
    e.PAGE_FINISH = "PAGE_FINISH";
    e.PAGE_SCROLL_UP = "PAGE_SCROLL_UP";
    e.PAGE_SCROLL_DOWN = "PAGE_SCROLL_DOWN";
    e.PAGE_SCROLL = "PAGE_SCROLL";
    e.ELEMENT = "ELEMENT";
    e.VIEWPORT = "VIEWPORT";
    e.PAGE = "PAGE";
    e.ECOMMERCE_CART_OPEN = "ECOMMERCE_CART_OPEN";
    e.ECOMMERCE_CART_CLOSE = "ECOMMERCE_CART_CLOSE"
}, function(t, e, n) {
    "use strict";
    var r = n(0)(n(26));
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isPluginType = function(t) {
        return t === o.PLUGIN_LOTTIE
    }, e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginDuration = e.getPluginOrigin = e.getPluginConfig = void 0;
    var i = n(192),
        o = n(47),
        a = n(30),
        u = (0, r.default)({}, o.PLUGIN_LOTTIE, {
            getConfig: i.getPluginConfig,
            getOrigin: i.getPluginOrigin,
            getDuration: i.getPluginDuration,
            getDestination: i.getPluginDestination,
            createInstance: i.createPluginInstance,
            render: i.renderPlugin,
            clear: i.clearPlugin
        });
    var c = function(t) {
            return function(e) {
                if (!a.IS_BROWSER_ENV) return function() {
                    return null
                };
                var n = u[e];
                if (!n) throw new Error("IX2 no plugin configured for: ".concat(e));
                var r = n[t];
                if (!r) throw new Error("IX2 invalid plugin method: ".concat(t));
                return r
            }
        },
        s = c("getConfig");
    e.getPluginConfig = s;
    var l = c("getOrigin");
    e.getPluginOrigin = l;
    var f = c("getDuration");
    e.getPluginDuration = f;
    var d = c("getDestination");
    e.getPluginDestination = d;
    var p = c("createInstance");
    e.createPluginInstance = p;
    var v = c("render");
    e.renderPlugin = v;
    var h = c("clear");
    e.clearPlugin = h
}, function(t, e, n) {
    var r = n(91),
        i = n(199)(r);
    t.exports = i
}, function(t, e, n) {
    var r = n(197),
        i = n(21);
    t.exports = function(t, e) {
        return t && r(t, e, i)
    }
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r, i = n(203),
        o = (r = i) && r.__esModule ? r : {
            default: r
        };
    e.default = o.default
}, function(t, e, n) {
    "use strict";
    var r = n(0)(n(86)),
        i = n(16),
        o = n(0);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.observeRequests = function(t) {
        j({
            store: t,
            select: function(t) {
                var e = t.ixRequest;
                return e.preview
            },
            onChange: it
        }), j({
            store: t,
            select: function(t) {
                var e = t.ixRequest;
                return e.playback
            },
            onChange: ut
        }), j({
            store: t,
            select: function(t) {
                var e = t.ixRequest;
                return e.stop
            },
            onChange: ct
        }), j({
            store: t,
            select: function(t) {
                var e = t.ixRequest;
                return e.clear
            },
            onChange: st
        })
    }, e.startEngine = lt, e.stopEngine = ft, e.stopAllActionGroups = mt, e.stopActionGroup = It, e.startActionGroup = yt;
    var a = o(n(208)),
        u = o(n(61)),
        c = o(n(23)),
        s = o(n(209)),
        l = o(n(215)),
        f = o(n(227)),
        d = o(n(228)),
        p = o(n(229)),
        v = o(n(232)),
        h = o(n(233)),
        E = o(n(92)),
        _ = n(3),
        g = n(49),
        m = i(n(236)),
        I = o(n(237)),
        y = _.IX2EngineEventTypes,
        T = y.MOUSE_CLICK,
        O = y.MOUSE_SECOND_CLICK,
        A = _.IX2EngineConstants,
        b = A.COLON_DELIMITER,
        w = A.BOUNDARY_SELECTOR,
        S = A.HTML_ELEMENT,
        R = A.RENDER_GENERAL,
        N = A.W_MOD_IX,
        C = _.IX2EngineItemTypes,
        L = C.GENERAL_START_ACTION,
        x = C.GENERAL_CONTINUOUS_ACTION,
        D = _.IX2VanillaUtils,
        P = D.getAffectedElements,
        M = D.getElementId,
        F = D.getDestinationValues,
        j = D.observeStore,
        G = D.getInstanceId,
        V = D.renderHTMLElement,
        U = D.clearAllStyles,
        X = D.getMaxDurationItemIndex,
        k = D.getComputedStyle,
        W = D.getInstanceOrigin,
        B = D.reduceListToGroup,
        H = D.shouldNamespaceEventParameter,
        Y = D.getNamespacedParameterId,
        z = D.shouldAllowMediaQuery,
        K = D.cleanupHTMLElement,
        Q = D.stringifyTarget,
        q = D.mediaQueriesEqual,
        $ = _.IX2VanillaPlugins,
        Z = $.isPluginType,
        J = $.createPluginInstance,
        tt = $.getPluginDuration,
        et = navigator.userAgent,
        nt = et.match(/iPad/i) || et.match(/iPhone/),
        rt = 12;

    function it(t, e) {
        var n = t.rawData,
            r = function() {
                lt({
                    store: e,
                    rawData: n,
                    allowEvents: !0
                }), ot()
            };
        t.defer ? setTimeout(r, 0) : r()
    }

    function ot() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }

    function at(t) {
        return t && (0, v.default)(t, "_EFFECT")
    }

    function ut(t, e) {
        var n = t.actionTypeId,
            r = t.actionListId,
            i = t.actionItemId,
            o = t.eventId,
            a = t.allowEvents,
            u = t.immediate,
            c = t.testManual,
            s = t.verbose,
            l = void 0 === s || s,
            f = t.rawData;
        if (r && i && f && u) {
            var d = f.actionLists[r];
            d && (f = B({
                actionList: d,
                actionItemId: i,
                rawData: f
            }))
        }
        if (lt({
                store: e,
                rawData: f,
                allowEvents: a,
                testManual: c
            }), r && n === L || at(n)) {
            It({
                store: e,
                actionListId: r
            }), gt({
                store: e,
                actionListId: r,
                eventId: o
            });
            var p = yt({
                store: e,
                eventId: o,
                actionListId: r,
                immediate: u,
                verbose: l
            });
            l && p && e.dispatch((0, g.actionListPlaybackChanged)({
                actionListId: r,
                isPlaying: !u
            }))
        }
    }

    function ct(t, e) {
        var n = t.actionListId;
        n ? It({
            store: e,
            actionListId: n
        }) : mt({
            store: e
        }), ft(e)
    }

    function st(t, e) {
        ft(e), U({
            store: e,
            elementApi: m
        })
    }

    function lt(t) {
        var e, n = t.store,
            i = t.rawData,
            o = t.allowEvents,
            a = t.testManual,
            l = n.getState().ixSession;
        i && n.dispatch((0, g.rawDataImported)(i)), l.active || (n.dispatch((0, g.sessionInitialized)({
            hasBoundaryNodes: Boolean(document.querySelector(w))
        })), o && (function(t) {
            var e = t.getState().ixData.eventTypeMap;
            vt(t), (0, p.default)(e, function(e, n) {
                var i = I.default[n];
                i ? function(t) {
                    var e = t.logic,
                        n = t.store,
                        i = t.events;
                    ! function(t) {
                        if (nt) {
                            var e = {},
                                n = "";
                            for (var r in t) {
                                var i = t[r],
                                    o = i.eventTypeId,
                                    a = i.target,
                                    u = m.getQuerySelector(a);
                                e[u] || o !== T && o !== O || (e[u] = !0, n += u + "{cursor: pointer;touch-action: manipulation;}")
                            }
                            if (n) {
                                var c = document.createElement("style");
                                c.textContent = n, document.body.appendChild(c)
                            }
                        }
                    }(i);
                    var o = e.types,
                        a = e.handler,
                        l = n.getState().ixData,
                        f = l.actionLists,
                        d = ht(i, _t);
                    if ((0, s.default)(d)) {
                        (0, p.default)(d, function(t, e) {
                            var o = i[e],
                                a = o.action,
                                s = o.id,
                                d = o.mediaQueries,
                                p = void 0 === d ? l.mediaQueryKeys : d,
                                v = a.config.actionListId;
                            if (q(p, l.mediaQueryKeys) || n.dispatch((0, g.mediaQueriesDefined)()), a.actionTypeId === x) {
                                var h = Array.isArray(o.config) ? o.config : [o.config];
                                h.forEach(function(e) {
                                    var i = e.continuousParameterGroupId,
                                        o = (0, c.default)(f, "".concat(v, ".continuousParameterGroups"), []),
                                        a = (0, u.default)(o, function(t) {
                                            var e = t.id;
                                            return e === i
                                        }),
                                        l = (e.smoothing || 0) / 100,
                                        d = (e.restingState || 0) / 100;
                                    a && t.forEach(function(t, i) {
                                        var o = s + b + i;
                                        ! function(t) {
                                            var e = t.store,
                                                n = t.eventStateKey,
                                                i = t.eventTarget,
                                                o = t.eventId,
                                                a = t.eventConfig,
                                                u = t.actionListId,
                                                s = t.parameterGroup,
                                                l = t.smoothing,
                                                f = t.restingValue,
                                                d = e.getState(),
                                                p = d.ixData,
                                                v = d.ixSession,
                                                h = p.events[o],
                                                E = h.eventTypeId,
                                                _ = {},
                                                g = {},
                                                I = [],
                                                y = s.continuousActionGroups,
                                                T = s.id;
                                            H(E, a) && (T = Y(n, T));
                                            var O = v.hasBoundaryNodes && i ? m.getClosestElement(i, w) : null;
                                            y.forEach(function(t) {
                                                var e = t.keyframe,
                                                    n = t.actionItems;
                                                n.forEach(function(t) {
                                                    var n = t.actionTypeId,
                                                        o = t.config.target;
                                                    if (o) {
                                                        var a = o.boundaryMode ? O : null,
                                                            u = Q(o) + b + n;
                                                        if (g[u] = function() {
                                                                var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                                                    n = arguments.length > 1 ? arguments[1] : void 0,
                                                                    i = arguments.length > 2 ? arguments[2] : void 0,
                                                                    o = (0, r.default)(e);
                                                                return o.some(function(e, r) {
                                                                    return e.keyframe === n && (t = r, !0)
                                                                }), null == t && (t = o.length, o.push({
                                                                    keyframe: n,
                                                                    actionItems: []
                                                                })), o[t].actionItems.push(i), o
                                                            }(g[u], e, t), !_[u]) {
                                                            _[u] = !0;
                                                            var c = t.config;
                                                            P({
                                                                config: c,
                                                                event: h,
                                                                eventTarget: i,
                                                                elementRoot: a,
                                                                elementApi: m
                                                            }).forEach(function(t) {
                                                                I.push({
                                                                    element: t,
                                                                    key: u
                                                                })
                                                            })
                                                        }
                                                    }
                                                })
                                            }), I.forEach(function(t) {
                                                var n = t.element,
                                                    r = t.key,
                                                    i = g[r],
                                                    a = (0, c.default)(i, "[0].actionItems[0]", {}),
                                                    s = a.actionTypeId,
                                                    d = Z(s) ? J(s)(n, a) : null,
                                                    p = F({
                                                        element: n,
                                                        actionItem: a,
                                                        elementApi: m
                                                    }, d);
                                                Tt({
                                                    store: e,
                                                    element: n,
                                                    eventId: o,
                                                    actionListId: u,
                                                    actionItem: a,
                                                    destination: p,
                                                    continuous: !0,
                                                    parameterId: T,
                                                    actionGroups: i,
                                                    smoothing: l,
                                                    restingValue: f,
                                                    pluginInstance: d
                                                })
                                            })
                                        }({
                                            store: n,
                                            eventStateKey: o,
                                            eventTarget: t,
                                            eventId: s,
                                            eventConfig: e,
                                            actionListId: v,
                                            parameterGroup: a,
                                            smoothing: l,
                                            restingValue: d
                                        })
                                    })
                                })
                            }(a.actionTypeId === L || at(a.actionTypeId)) && gt({
                                store: n,
                                actionListId: v,
                                eventId: s
                            })
                        });
                        var v = function(t) {
                                var e = n.getState(),
                                    r = e.ixSession;
                                Et(d, function(e, o, u) {
                                    var c = i[o],
                                        s = r.eventState[u],
                                        f = c.action,
                                        d = c.mediaQueries,
                                        p = void 0 === d ? l.mediaQueryKeys : d;
                                    if (z(p, r.mediaQueryKey)) {
                                        var v = function() {
                                            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                i = a({
                                                    store: n,
                                                    element: e,
                                                    event: c,
                                                    eventConfig: r,
                                                    nativeEvent: t,
                                                    eventStateKey: u
                                                }, s);
                                            (0, E.default)(i, s) || n.dispatch((0, g.eventStateChanged)(u, i))
                                        };
                                        if (f.actionTypeId === x) {
                                            var h = Array.isArray(c.config) ? c.config : [c.config];
                                            h.forEach(v)
                                        } else v()
                                    }
                                })
                            },
                            _ = (0, h.default)(v, rt),
                            I = function(t) {
                                var e = t.target,
                                    r = void 0 === e ? document : e,
                                    i = t.types,
                                    o = t.throttle;
                                i.split(" ").filter(Boolean).forEach(function(t) {
                                    var e = o ? _ : v;
                                    r.addEventListener(t, e), n.dispatch((0, g.eventListenerAdded)(r, [t, e]))
                                })
                            };
                        Array.isArray(o) ? o.forEach(I) : "string" == typeof o && I(e)
                    }
                }({
                    logic: i,
                    store: t,
                    events: e
                }) : console.warn("IX2 event type not configured: ".concat(n))
            }), t.getState().ixSession.eventListeners.length && function(t) {
                var e = function() {
                    vt(t)
                };
                pt.forEach(function(n) {
                    window.addEventListener(n, e), t.dispatch((0, g.eventListenerAdded)(window, [n, e]))
                }), e()
            }(t)
        }(n), -1 === (e = document.documentElement).className.indexOf(N) && (e.className += " ".concat(N)), n.getState().ixSession.hasDefinedMediaQueries && function(t) {
            j({
                store: t,
                select: function(t) {
                    return t.ixSession.mediaQueryKey
                },
                onChange: function() {
                    ft(t), U({
                        store: t,
                        elementApi: m
                    }), lt({
                        store: t,
                        allowEvents: !0
                    }), ot()
                }
            })
        }(n)), n.dispatch((0, g.sessionStarted)()), function(t, e) {
            ! function n(r) {
                var i = t.getState(),
                    o = i.ixSession,
                    a = i.ixParameters;
                o.active && (t.dispatch((0, g.animationFrameChanged)(r, a)), e ? function(t, e) {
                    var n = j({
                        store: t,
                        select: function(t) {
                            return t.ixSession.tick
                        },
                        onChange: function(t) {
                            e(t), n()
                        }
                    })
                }(t, n) : requestAnimationFrame(n))
            }(window.performance.now())
        }(n, a))
    }

    function ft(t) {
        var e = t.getState().ixSession;
        e.active && (e.eventListeners.forEach(dt), t.dispatch((0, g.sessionStopped)()))
    }

    function dt(t) {
        var e = t.target,
            n = t.listenerParams;
        e.removeEventListener.apply(e, n)
    }
    var pt = ["resize", "orientationchange"];

    function vt(t) {
        var e = t.getState(),
            n = e.ixSession,
            r = e.ixData,
            i = window.innerWidth;
        if (i !== n.viewportWidth) {
            var o = r.mediaQueries;
            t.dispatch((0, g.viewportWidthChanged)({
                width: i,
                mediaQueries: o
            }))
        }
    }
    var ht = function(t, e) {
            return (0, l.default)((0, d.default)(t, e), f.default)
        },
        Et = function(t, e) {
            (0, p.default)(t, function(t, n) {
                t.forEach(function(t, r) {
                    e(t, n, n + b + r)
                })
            })
        },
        _t = function(t) {
            var e = {
                target: t.target
            };
            return P({
                config: e,
                elementApi: m
            })
        };

    function gt(t) {
        var e = t.store,
            n = t.actionListId,
            r = t.eventId,
            i = e.getState(),
            o = i.ixData,
            a = i.ixSession,
            u = o.actionLists,
            s = o.events[r],
            l = u[n];
        if (l && l.useFirstGroupAsInitialState) {
            var f = (0, c.default)(l, "actionItemGroups[0].actionItems", []),
                d = (0, c.default)(s, "mediaQueries", o.mediaQueryKeys);
            if (!z(d, a.mediaQueryKey)) return;
            f.forEach(function(t) {
                var i = t.config,
                    o = t.actionTypeId,
                    a = P({
                        config: i,
                        event: s,
                        elementApi: m
                    }),
                    u = Z(o);
                a.forEach(function(i) {
                    var a = u ? J(o)(i, t) : null;
                    Tt({
                        destination: F({
                            element: i,
                            actionItem: t,
                            elementApi: m
                        }, a),
                        immediate: !0,
                        store: e,
                        element: i,
                        eventId: r,
                        actionItem: t,
                        actionListId: n,
                        pluginInstance: a
                    })
                })
            })
        }
    }

    function mt(t) {
        var e = t.store,
            n = e.getState().ixInstances;
        (0, p.default)(n, function(t) {
            if (!t.continuous) {
                var n = t.actionListId,
                    r = t.verbose;
                Ot(t, e), r && e.dispatch((0, g.actionListPlaybackChanged)({
                    actionListId: n,
                    isPlaying: !1
                }))
            }
        })
    }

    function It(t) {
        var e = t.store,
            n = t.eventId,
            r = t.eventTarget,
            i = t.eventStateKey,
            o = t.actionListId,
            a = e.getState(),
            u = a.ixInstances,
            s = a.ixSession.hasBoundaryNodes && r ? m.getClosestElement(r, w) : null;
        (0, p.default)(u, function(t) {
            var r = (0, c.default)(t, "actionItem.config.target.boundaryMode"),
                a = !i || t.eventStateKey === i;
            if (t.actionListId === o && t.eventId === n && a) {
                if (s && r && !m.elementContains(s, t.element)) return;
                Ot(t, e), t.verbose && e.dispatch((0, g.actionListPlaybackChanged)({
                    actionListId: o,
                    isPlaying: !1
                }))
            }
        })
    }

    function yt(t) {
        var e = t.store,
            n = t.eventId,
            r = t.eventTarget,
            i = t.eventStateKey,
            o = t.actionListId,
            a = t.groupIndex,
            u = void 0 === a ? 0 : a,
            s = t.immediate,
            l = t.verbose,
            f = e.getState(),
            d = f.ixData,
            p = f.ixSession,
            v = d.events[n] || {},
            h = v.mediaQueries,
            E = void 0 === h ? d.mediaQueryKeys : h,
            _ = (0, c.default)(d, "actionLists.".concat(o), {}),
            g = _.actionItemGroups,
            I = _.useFirstGroupAsInitialState;
        if (!g || !g.length) return !1;
        u >= g.length && (0, c.default)(v, "config.loop") && (u = 0), 0 === u && I && u++;
        var y = (0 === u || 1 === u && I) && at(v.action && v.action.actionTypeId) ? v.config.delay : void 0,
            T = (0, c.default)(g, [u, "actionItems"], []);
        if (!T.length) return !1;
        if (!z(E, p.mediaQueryKey)) return !1;
        var O = p.hasBoundaryNodes && r ? m.getClosestElement(r, w) : null,
            A = X(T),
            b = !1;
        return T.forEach(function(t, a) {
            var c = t.config,
                f = t.actionTypeId,
                d = Z(f),
                p = c.target;
            if (p) {
                var h = p.boundaryMode ? O : null;
                P({
                    config: c,
                    event: v,
                    eventTarget: r,
                    elementRoot: h,
                    elementApi: m
                }).forEach(function(c, p) {
                    var v = d ? J(f)(c, t) : null,
                        h = d ? tt(f)(c, t) : null;
                    b = !0;
                    var E = A === a && 0 === p,
                        _ = k({
                            element: c,
                            actionItem: t
                        }),
                        g = F({
                            element: c,
                            actionItem: t,
                            elementApi: m
                        }, v);
                    Tt({
                        store: e,
                        element: c,
                        actionItem: t,
                        eventId: n,
                        eventTarget: r,
                        eventStateKey: i,
                        actionListId: o,
                        groupIndex: u,
                        isCarrier: E,
                        computedStyle: _,
                        destination: g,
                        immediate: s,
                        verbose: l,
                        pluginInstance: v,
                        pluginDuration: h,
                        instanceDelay: y
                    })
                })
            }
        }), b
    }

    function Tt(t) {
        var e = t.store,
            n = t.computedStyle,
            r = (0, a.default)(t, ["store", "computedStyle"]),
            i = !r.continuous,
            o = r.element,
            u = r.actionItem,
            c = r.immediate,
            s = r.pluginInstance,
            l = G(),
            f = e.getState(),
            d = f.ixElements,
            p = f.ixSession,
            v = M(d, o),
            h = (d[v] || {}).refState,
            E = m.getRefType(o),
            _ = W(o, h, n, u, m, s);
        e.dispatch((0, g.instanceAdded)(Object.assign({
            instanceId: l,
            elementId: v,
            origin: _,
            refType: E
        }, r))), At(document.body, "ix2-animation-started", l), c ? function(t, e) {
            var n = t.getState().ixParameters;
            t.dispatch((0, g.instanceStarted)(e, 0)), t.dispatch((0, g.animationFrameChanged)(performance.now(), n)), bt(t.getState().ixInstances[e], t)
        }(e, l) : (j({
            store: e,
            select: function(t) {
                return t.ixInstances[l]
            },
            onChange: bt
        }), i && e.dispatch((0, g.instanceStarted)(l, p.tick)))
    }

    function Ot(t, e) {
        At(document.body, "ix2-animation-stopping", {
            instanceId: t.id,
            state: e.getState()
        });
        var n = t.elementId,
            r = t.actionItem,
            i = e.getState().ixElements[n] || {},
            o = i.ref;
        i.refType === S && K(o, r, m), e.dispatch((0, g.instanceRemoved)(t.id))
    }

    function At(t, e, n) {
        var r = document.createEvent("CustomEvent");
        r.initCustomEvent(e, !0, !0, n), t.dispatchEvent(r)
    }

    function bt(t, e) {
        var n = t.active,
            r = t.continuous,
            i = t.complete,
            o = t.elementId,
            a = t.actionItem,
            u = t.actionTypeId,
            c = t.renderType,
            s = t.current,
            l = t.groupIndex,
            f = t.eventId,
            d = t.eventTarget,
            p = t.eventStateKey,
            v = t.actionListId,
            h = t.isCarrier,
            E = t.styleProp,
            _ = t.verbose,
            I = t.pluginInstance,
            y = e.getState(),
            T = y.ixData,
            O = y.ixSession,
            A = (T.events[f] || {}).mediaQueries,
            b = void 0 === A ? T.mediaQueryKeys : A;
        if (z(b, O.mediaQueryKey) && (r || n || i)) {
            if (s || c === R && i) {
                e.dispatch((0, g.elementStateChanged)(o, u, s, a));
                var w = e.getState().ixElements[o] || {},
                    N = w.ref,
                    C = w.refType,
                    L = w.refState,
                    x = L && L[u];
                switch (C) {
                    case S:
                        V(N, L, x, f, a, E, m, c, I)
                }
            }
            if (i) {
                if (h) {
                    var D = yt({
                        store: e,
                        eventId: f,
                        eventTarget: d,
                        eventStateKey: p,
                        actionListId: v,
                        groupIndex: l + 1,
                        verbose: _
                    });
                    _ && !D && e.dispatch((0, g.actionListPlaybackChanged)({
                        actionListId: v,
                        isPlaying: !1
                    }))
                }
                Ot(t, e)
            }
        }
    }
}, function(t, e, n) {
    var r = n(95);
    t.exports = function(t, e, n) {
        "__proto__" == e && r ? r(t, e, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
        }) : t[e] = n
    }
}, function(t, e, n) {
    var r = n(7),
        i = function() {
            try {
                var t = r(Object, "defineProperty");
                return t({}, "", {}), t
            } catch (t) {}
        }();
    t.exports = i
}, function(t, e) {
    t.exports = function(t, e, n) {
        return t == t && (void 0 !== n && (t = t <= n ? t : n), void 0 !== e && (t = t >= e ? t : e)), t
    }
}, function(t, e, n) {
    var r = n(5),
        i = Object.create,
        o = function() {
            function t() {}
            return function(e) {
                if (!r(e)) return {};
                if (i) return i(e);
                t.prototype = e;
                var n = new t;
                return t.prototype = void 0, n
            }
        }();
    t.exports = o
}, function(t, e, n) {
    var r = n(250),
        i = n(251),
        o = r ? function(t) {
            return r.get(t)
        } : i;
    t.exports = o
}, function(t, e, n) {
    var r = n(252),
        i = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        for (var e = t.name + "", n = r[e], o = i.call(r, e) ? n.length : 0; o--;) {
            var a = n[o],
                u = a.func;
            if (null == u || u == t) return a.name
        }
        return e
    }
}, function(t, e, n) {
    n(101), n(102), n(104), n(15), n(106), n(258), n(259), n(260), n(261), n(266), n(267), n(268), t.exports = n(269)
}, function(t, e, n) {
    "use strict";
    var r = n(0)(n(11));
    ! function() {
        if ("undefined" != typeof window) {
            var t = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
                e = !!t && parseInt(t[1], 10) >= 16;
            if (!("objectFit" in document.documentElement.style != !1) || e) {
                var n = function(t) {
                        var e = t.parentNode;
                        ! function(t) {
                            var e = window.getComputedStyle(t, null),
                                n = e.getPropertyValue("position"),
                                r = e.getPropertyValue("overflow"),
                                i = e.getPropertyValue("display");
                            n && "static" !== n || (t.style.position = "relative"), "hidden" !== r && (t.style.overflow = "hidden"), i && "inline" !== i || (t.style.display = "block"), 0 === t.clientHeight && (t.style.height = "100%"), -1 === t.className.indexOf("object-fit-polyfill") && (t.className += " object-fit-polyfill")
                        }(e),
                        function(t) {
                            var e = window.getComputedStyle(t, null),
                                n = {
                                    "max-width": "none",
                                    "max-height": "none",
                                    "min-width": "0px",
                                    "min-height": "0px",
                                    top: "auto",
                                    right: "auto",
                                    bottom: "auto",
                                    left: "auto",
                                    "margin-top": "0px",
                                    "margin-right": "0px",
                                    "margin-bottom": "0px",
                                    "margin-left": "0px"
                                };
                            for (var r in n) e.getPropertyValue(r) !== n[r] && (t.style[r] = n[r])
                        }(t), t.style.position = "absolute", t.style.height = "100%", t.style.width = "auto", t.clientWidth > e.clientWidth ? (t.style.top = "0", t.style.marginTop = "0", t.style.left = "50%", t.style.marginLeft = t.clientWidth / -2 + "px") : (t.style.width = "100%", t.style.height = "auto", t.style.left = "0", t.style.marginLeft = "0", t.style.top = "50%", t.style.marginTop = t.clientHeight / -2 + "px")
                    },
                    i = function(t) {
                        if (void 0 === t || t instanceof Event) t = document.querySelectorAll("[data-object-fit]");
                        else if (t && t.nodeName) t = [t];
                        else {
                            if ("object" !== (0, r.default)(t) || !t.length || !t[0].nodeName) return !1;
                            t = t
                        }
                        for (var i = 0; i < t.length; i++)
                            if (t[i].nodeName) {
                                var o = t[i].nodeName.toLowerCase();
                                if ("img" === o) {
                                    if (e) continue;
                                    t[i].complete ? n(t[i]) : t[i].addEventListener("load", function() {
                                        n(this)
                                    })
                                } else "video" === o ? t[i].readyState > 0 ? n(t[i]) : t[i].addEventListener("loadedmetadata", function() {
                                    n(this)
                                }) : n(t[i])
                            } return !0
                    };
                "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", i) : i(), window.addEventListener("resize", i), window.objectFitPolyfill = i
            } else window.objectFitPolyfill = function() {
                return !1
            }
        }
    }()
}, function(t, e, n) {
    "use strict";
    var r = n(2);
    r.define("brand", t.exports = function(t) {
        var e, n = {},
            i = document,
            o = t("html"),
            a = t("body"),
            u = ".w-webflow-badge",
            c = window.location,
            s = /PhantomJS/i.test(navigator.userAgent),
            l = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";

        function f() {
            var n = i.fullScreen || i.mozFullScreen || i.webkitIsFullScreen || i.msFullscreenElement || Boolean(i.webkitFullscreenElement);
            t(e).attr("style", n ? "display: none !important;" : "")
        }

        function d() {
            var t = a.children(u),
                n = t.length && t.get(0) === e,
                i = r.env("editor");
            n ? i && t.remove() : (t.length && t.remove(), i || a.append(e))
        }
        return n.ready = function() {
            var n, r, a, u = o.attr("data-wf-status"),
                p = o.attr("data-wf-domain") || "";
            /\.webflow\.io$/i.test(p) && c.hostname !== p && (u = !0), u && !s && (e = e || (n = t('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"), r = t("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg").attr("alt", "").css({
                marginRight: "8px",
                width: "16px"
            }), a = t("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg").attr("alt", "Made in Webflow"), n.append(r, a), n[0]), d(), setTimeout(d, 500), t(i).off(l, f).on(l, f))
        }, n
    })
}, function(t, e, n) {
    "use strict";
    var r = window.$,
        i = n(53) && r.tram;
    /*!
     * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
     * _.each
     * _.map
     * _.find
     * _.filter
     * _.any
     * _.contains
     * _.delay
     * _.defer
     * _.throttle (webflow)
     * _.debounce
     * _.keys
     * _.has
     * _.now
     *
     * http://underscorejs.org
     * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     * Underscore may be freely distributed under the MIT license.
     * @license MIT
     */
    t.exports = function() {
        var t = {
                VERSION: "1.6.0-Webflow"
            },
            e = {},
            n = Array.prototype,
            r = Object.prototype,
            o = Function.prototype,
            a = (n.push, n.slice),
            u = (n.concat, r.toString, r.hasOwnProperty),
            c = n.forEach,
            s = n.map,
            l = (n.reduce, n.reduceRight, n.filter),
            f = (n.every, n.some),
            d = n.indexOf,
            p = (n.lastIndexOf, Array.isArray, Object.keys),
            v = (o.bind, t.each = t.forEach = function(n, r, i) {
                if (null == n) return n;
                if (c && n.forEach === c) n.forEach(r, i);
                else if (n.length === +n.length) {
                    for (var o = 0, a = n.length; o < a; o++)
                        if (r.call(i, n[o], o, n) === e) return
                } else {
                    var u = t.keys(n);
                    for (o = 0, a = u.length; o < a; o++)
                        if (r.call(i, n[u[o]], u[o], n) === e) return
                }
                return n
            });
        t.map = t.collect = function(t, e, n) {
            var r = [];
            return null == t ? r : s && t.map === s ? t.map(e, n) : (v(t, function(t, i, o) {
                r.push(e.call(n, t, i, o))
            }), r)
        }, t.find = t.detect = function(t, e, n) {
            var r;
            return h(t, function(t, i, o) {
                if (e.call(n, t, i, o)) return r = t, !0
            }), r
        }, t.filter = t.select = function(t, e, n) {
            var r = [];
            return null == t ? r : l && t.filter === l ? t.filter(e, n) : (v(t, function(t, i, o) {
                e.call(n, t, i, o) && r.push(t)
            }), r)
        };
        var h = t.some = t.any = function(n, r, i) {
            r || (r = t.identity);
            var o = !1;
            return null == n ? o : f && n.some === f ? n.some(r, i) : (v(n, function(t, n, a) {
                if (o || (o = r.call(i, t, n, a))) return e
            }), !!o)
        };
        t.contains = t.include = function(t, e) {
            return null != t && (d && t.indexOf === d ? -1 != t.indexOf(e) : h(t, function(t) {
                return t === e
            }))
        }, t.delay = function(t, e) {
            var n = a.call(arguments, 2);
            return setTimeout(function() {
                return t.apply(null, n)
            }, e)
        }, t.defer = function(e) {
            return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)))
        }, t.throttle = function(t) {
            var e, n, r;
            return function() {
                e || (e = !0, n = arguments, r = this, i.frame(function() {
                    e = !1, t.apply(r, n)
                }))
            }
        }, t.debounce = function(e, n, r) {
            var i, o, a, u, c, s = function s() {
                var l = t.now() - u;
                l < n ? i = setTimeout(s, n - l) : (i = null, r || (c = e.apply(a, o), a = o = null))
            };
            return function() {
                a = this, o = arguments, u = t.now();
                var l = r && !i;
                return i || (i = setTimeout(s, n)), l && (c = e.apply(a, o), a = o = null), c
            }
        }, t.defaults = function(e) {
            if (!t.isObject(e)) return e;
            for (var n = 1, r = arguments.length; n < r; n++) {
                var i = arguments[n];
                for (var o in i) void 0 === e[o] && (e[o] = i[o])
            }
            return e
        }, t.keys = function(e) {
            if (!t.isObject(e)) return [];
            if (p) return p(e);
            var n = [];
            for (var r in e) t.has(e, r) && n.push(r);
            return n
        }, t.has = function(t, e) {
            return u.call(t, e)
        }, t.isObject = function(t) {
            return t === Object(t)
        }, t.now = Date.now || function() {
            return (new Date).getTime()
        }, t.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var E = /(.)^/,
            _ = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            g = /\\|'|\r|\n|\u2028|\u2029/g,
            m = function(t) {
                return "\\" + _[t]
            };
        return t.template = function(e, n, r) {
            !n && r && (n = r), n = t.defaults({}, n, t.templateSettings);
            var i = RegExp([(n.escape || E).source, (n.interpolate || E).source, (n.evaluate || E).source].join("|") + "|$", "g"),
                o = 0,
                a = "__p+='";
            e.replace(i, function(t, n, r, i, u) {
                return a += e.slice(o, u).replace(g, m), o = u + t.length, n ? a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : i && (a += "';\n" + i + "\n__p+='"), t
            }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
            try {
                var u = new Function(n.variable || "obj", "_", a)
            } catch (t) {
                throw t.source = a, t
            }
            var c = function(e) {
                    return u.call(this, e, t)
                },
                s = n.variable || "obj";
            return c.source = "function(" + s + "){\n" + a + "}", c
        }, t
    }()
}, function(t, e, n) {
    "use strict";
    var r = n(2);
    r.define("edit", t.exports = function(t, e, n) {
        if (n = n || {}, (r.env("test") || r.env("frame")) && !n.fixture && ! function() {
                try {
                    return window.top.__Cypress__
                } catch (t) {
                    return !1
                }
            }()) return {
            exit: 1
        };
        var i, o = t(window),
            a = t(document.documentElement),
            u = document.location,
            c = "hashchange",
            s = n.load || function() {
                i = !0, window.WebflowEditor = !0, o.off(c, f),
                    function(t) {
                        var e = window.document.createElement("iframe");
                        e.src = "https://webflow.com/site/third-party-cookie-check.html", e.style.display = "none", e.sandbox = "allow-scripts allow-same-origin";
                        var n = function n(r) {
                            "WF_third_party_cookies_unsupported" === r.data ? (_(e, n), t(!1)) : "WF_third_party_cookies_supported" === r.data && (_(e, n), t(!0))
                        };
                        e.onerror = function() {
                            _(e, n), t(!1)
                        }, window.addEventListener("message", n, !1), window.document.body.appendChild(e)
                    }(function(e) {
                        t.ajax({
                            url: E("https://editor-api.webflow.com/api/editor/view"),
                            data: {
                                siteId: a.attr("data-wf-site")
                            },
                            xhrFields: {
                                withCredentials: !0
                            },
                            dataType: "json",
                            crossDomain: !0,
                            success: d(e)
                        })
                    })
            },
            l = !1;
        try {
            l = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
        } catch (t) {}

        function f() {
            i || /\?edit/.test(u.hash) && s()
        }

        function d(t) {
            return function(e) {
                e ? (e.thirdPartyCookiesSupported = t, p(h(e.bugReporterScriptPath), function() {
                    p(h(e.scriptPath), function() {
                        window.WebflowEditor(e)
                    })
                })) : console.error("Could not load editor data")
            }
        }

        function p(e, n) {
            t.ajax({
                type: "GET",
                url: e,
                dataType: "script",
                cache: !0
            }).then(n, v)
        }

        function v(t, e, n) {
            throw console.error("Could not load editor script: " + e), n
        }

        function h(t) {
            return t.indexOf("//") >= 0 ? t : E("https://editor-api.webflow.com" + t)
        }

        function E(t) {
            return t.replace(/([^:])\/\//g, "$1/")
        }

        function _(t, e) {
            window.removeEventListener("message", e, !1), t.remove()
        }
        return l ? s() : u.search ? (/[?&](edit)(?:[=&?]|$)/.test(u.search) || /\?edit$/.test(u.href)) && s() : o.on(c, f).triggerHandler(c), {}
    })
}, function(t, e, n) {
    "use strict";
    var r = window.jQuery,
        i = {},
        o = [],
        a = {
            reset: function(t, e) {
                e.__wf_intro = null
            },
            intro: function(t, e) {
                e.__wf_intro || (e.__wf_intro = !0, r(e).triggerHandler(i.types.INTRO))
            },
            outro: function(t, e) {
                e.__wf_intro && (e.__wf_intro = null, r(e).triggerHandler(i.types.OUTRO))
            }
        };
    i.triggers = {}, i.types = {
        INTRO: "w-ix-intro.w-ix",
        OUTRO: "w-ix-outro.w-ix"
    }, i.init = function() {
        for (var t = o.length, e = 0; e < t; e++) {
            var n = o[e];
            n[0](0, n[1])
        }
        o = [], r.extend(i.triggers, a)
    }, i.async = function() {
        for (var t in a) {
            var e = a[t];
            a.hasOwnProperty(t) && (i.triggers[t] = function(t, n) {
                o.push([e, n])
            })
        }
    }, i.async(), t.exports = i
}, function(t, e, n) {
    "use strict";
    var r = n(2),
        i = n(107);
    i.setEnv(r.env), r.define("ix2", t.exports = function() {
        return i
    })
}, function(t, e, n) {
    "use strict";
    var r = n(16),
        i = n(0);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.setEnv = function(t) {
        t() && (0, u.observeRequests)(s)
    }, e.init = function(t) {
        l(), (0, u.startEngine)({
            store: s,
            rawData: t,
            allowEvents: !0
        })
    }, e.destroy = l, e.actions = e.store = void 0;
    var o = n(54),
        a = i(n(119)),
        u = n(93),
        c = r(n(49));
    e.actions = c;
    var s = (0, o.createStore)(a.default);

    function l() {
        (0, u.stopEngine)(s)
    }
    e.store = s
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(56),
        i = n(111),
        o = n(112),
        a = "[object Null]",
        u = "[object Undefined]",
        c = r.default ? r.default.toStringTag : void 0;
    e.default = function(t) {
        return null == t ? void 0 === t ? u : a : c && c in Object(t) ? Object(i.default)(t) : Object(o.default)(t)
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(110),
        i = "object" == typeof self && self && self.Object === Object && self,
        o = r.default || i || Function("return this")();
    e.default = o
}, function(t, e, n) {
    "use strict";
    n.r(e),
        function(t) {
            var n = "object" == typeof t && t && t.Object === Object && t;
            e.default = n
        }.call(this, n(28))
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(56),
        i = Object.prototype,
        o = i.hasOwnProperty,
        a = i.toString,
        u = r.default ? r.default.toStringTag : void 0;
    e.default = function(t) {
        var e = o.call(t, u),
            n = t[u];
        try {
            t[u] = void 0;
            var r = !0
        } catch (t) {}
        var i = a.call(t);
        return r && (e ? t[u] = n : delete t[u]), i
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = Object.prototype.toString;
    e.default = function(t) {
        return r.call(t)
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(114),
        i = Object(r.default)(Object.getPrototypeOf, Object);
    e.default = i
}, function(t, e, n) {
    "use strict";
    n.r(e), e.default = function(t, e) {
        return function(n) {
            return t(e(n))
        }
    }
}, function(t, e, n) {
    "use strict";
    n.r(e), e.default = function(t) {
        return null != t && "object" == typeof t
    }
}, function(t, e, n) {
    "use strict";
    n.r(e),
        function(t, r) {
            var i, o = n(118);
            i = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : r;
            var a = Object(o.default)(i);
            e.default = a
        }.call(this, n(28), n(117)(t))
}, function(t, e) {
    t.exports = function(t) {
        if (!t.webpackPolyfill) {
            var e = Object.create(t);
            e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i
                }
            }), Object.defineProperty(e, "exports", {
                enumerable: !0
            }), e.webpackPolyfill = 1
        }
        return e
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        var e, n = t.Symbol;
        return "function" == typeof n ? n.observable ? e = n.observable : (e = n("observable"), n.observable = e) : e = "@@observable", e
    }
    n.r(e), n.d(e, "default", function() {
        return r
    })
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var r = n(54),
        i = n(120),
        o = n(204),
        a = n(205),
        u = n(3),
        c = n(206),
        s = n(207),
        l = u.IX2ElementsReducer.ixElements,
        f = (0, r.combineReducers)({
            ixData: i.ixData,
            ixRequest: o.ixRequest,
            ixSession: a.ixSession,
            ixElements: l,
            ixInstances: c.ixInstances,
            ixParameters: s.ixParameters
        });
    e.default = f
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ixData = void 0;
    var r = n(3).IX2EngineActionTypes.IX2_RAW_DATA_IMPORTED;
    e.ixData = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
            e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
            case r:
                return e.payload.ixData || Object.freeze({});
            default:
                return t
        }
    }
}, function(t, e, n) {
    var r = n(122),
        i = n(174),
        o = n(77);
    t.exports = function(t) {
        var e = i(t);
        return 1 == e.length && e[0][2] ? o(e[0][0], e[0][1]) : function(n) {
            return n === t || r(n, t, e)
        }
    }
}, function(t, e, n) {
    var r = n(63),
        i = n(67),
        o = 1,
        a = 2;
    t.exports = function(t, e, n, u) {
        var c = n.length,
            s = c,
            l = !u;
        if (null == t) return !s;
        for (t = Object(t); c--;) {
            var f = n[c];
            if (l && f[2] ? f[1] !== t[f[0]] : !(f[0] in t)) return !1
        }
        for (; ++c < s;) {
            var d = (f = n[c])[0],
                p = t[d],
                v = f[1];
            if (l && f[2]) {
                if (void 0 === p && !(d in t)) return !1
            } else {
                var h = new r;
                if (u) var E = u(p, v, d, t, e, h);
                if (!(void 0 === E ? i(v, p, o | a, u, h) : E)) return !1
            }
        }
        return !0
    }
}, function(t, e) {
    t.exports = function() {
        this.__data__ = [], this.size = 0
    }
}, function(t, e, n) {
    var r = n(18),
        i = Array.prototype.splice;
    t.exports = function(t) {
        var e = this.__data__,
            n = r(e, t);
        return !(n < 0 || (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, 0))
    }
}, function(t, e, n) {
    var r = n(18);
    t.exports = function(t) {
        var e = this.__data__,
            n = r(e, t);
        return n < 0 ? void 0 : e[n][1]
    }
}, function(t, e, n) {
    var r = n(18);
    t.exports = function(t) {
        return r(this.__data__, t) > -1
    }
}, function(t, e, n) {
    var r = n(18);
    t.exports = function(t, e) {
        var n = this.__data__,
            i = r(n, t);
        return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
    }
}, function(t, e, n) {
    var r = n(17);
    t.exports = function() {
        this.__data__ = new r, this.size = 0
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = this.__data__,
            n = e.delete(t);
        return this.size = e.size, n
    }
}, function(t, e) {
    t.exports = function(t) {
        return this.__data__.get(t)
    }
}, function(t, e) {
    t.exports = function(t) {
        return this.__data__.has(t)
    }
}, function(t, e, n) {
    var r = n(17),
        i = n(32),
        o = n(33),
        a = 200;
    t.exports = function(t, e) {
        var n = this.__data__;
        if (n instanceof r) {
            var u = n.__data__;
            if (!i || u.length < a - 1) return u.push([t, e]), this.size = ++n.size, this;
            n = this.__data__ = new o(u)
        }
        return n.set(t, e), this.size = n.size, this
    }
}, function(t, e, n) {
    var r = n(64),
        i = n(136),
        o = n(5),
        a = n(66),
        u = /^\[object .+?Constructor\]$/,
        c = Function.prototype,
        s = Object.prototype,
        l = c.toString,
        f = s.hasOwnProperty,
        d = RegExp("^" + l.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = function(t) {
        return !(!o(t) || i(t)) && (r(t) ? d : u).test(a(t))
    }
}, function(t, e, n) {
    var r = n(12),
        i = Object.prototype,
        o = i.hasOwnProperty,
        a = i.toString,
        u = r ? r.toStringTag : void 0;
    t.exports = function(t) {
        var e = o.call(t, u),
            n = t[u];
        try {
            t[u] = void 0;
            var r = !0
        } catch (t) {}
        var i = a.call(t);
        return r && (e ? t[u] = n : delete t[u]), i
    }
}, function(t, e) {
    var n = Object.prototype.toString;
    t.exports = function(t) {
        return n.call(t)
    }
}, function(t, e, n) {
    var r, i = n(137),
        o = (r = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
    t.exports = function(t) {
        return !!o && o in t
    }
}, function(t, e, n) {
    var r = n(4)["__core-js_shared__"];
    t.exports = r
}, function(t, e) {
    t.exports = function(t, e) {
        return null == t ? void 0 : t[e]
    }
}, function(t, e, n) {
    var r = n(140),
        i = n(17),
        o = n(32);
    t.exports = function() {
        this.size = 0, this.__data__ = {
            hash: new r,
            map: new(o || i),
            string: new r
        }
    }
}, function(t, e, n) {
    var r = n(141),
        i = n(142),
        o = n(143),
        a = n(144),
        u = n(145);

    function c(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function(t, e, n) {
    var r = n(19);
    t.exports = function() {
        this.__data__ = r ? r(null) : {}, this.size = 0
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e
    }
}, function(t, e, n) {
    var r = n(19),
        i = "__lodash_hash_undefined__",
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        var e = this.__data__;
        if (r) {
            var n = e[t];
            return n === i ? void 0 : n
        }
        return o.call(e, t) ? e[t] : void 0
    }
}, function(t, e, n) {
    var r = n(19),
        i = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        var e = this.__data__;
        return r ? void 0 !== e[t] : i.call(e, t)
    }
}, function(t, e, n) {
    var r = n(19),
        i = "__lodash_hash_undefined__";
    t.exports = function(t, e) {
        var n = this.__data__;
        return this.size += this.has(t) ? 0 : 1, n[t] = r && void 0 === e ? i : e, this
    }
}, function(t, e, n) {
    var r = n(20);
    t.exports = function(t) {
        var e = r(this, t).delete(t);
        return this.size -= e ? 1 : 0, e
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
    }
}, function(t, e, n) {
    var r = n(20);
    t.exports = function(t) {
        return r(this, t).get(t)
    }
}, function(t, e, n) {
    var r = n(20);
    t.exports = function(t) {
        return r(this, t).has(t)
    }
}, function(t, e, n) {
    var r = n(20);
    t.exports = function(t, e) {
        var n = r(this, t),
            i = n.size;
        return n.set(t, e), this.size += n.size == i ? 0 : 1, this
    }
}, function(t, e, n) {
    var r = n(63),
        i = n(68),
        o = n(157),
        a = n(161),
        u = n(41),
        c = n(1),
        s = n(35),
        l = n(37),
        f = 1,
        d = "[object Arguments]",
        p = "[object Array]",
        v = "[object Object]",
        h = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, n, E, _, g) {
        var m = c(t),
            I = c(e),
            y = m ? p : u(t),
            T = I ? p : u(e),
            O = (y = y == d ? v : y) == v,
            A = (T = T == d ? v : T) == v,
            b = y == T;
        if (b && s(t)) {
            if (!s(e)) return !1;
            m = !0, O = !1
        }
        if (b && !O) return g || (g = new r), m || l(t) ? i(t, e, n, E, _, g) : o(t, e, y, n, E, _, g);
        if (!(n & f)) {
            var w = O && h.call(t, "__wrapped__"),
                S = A && h.call(e, "__wrapped__");
            if (w || S) {
                var R = w ? t.value() : t,
                    N = S ? e.value() : e;
                return g || (g = new r), _(R, N, n, E, g)
            }
        }
        return !!b && (g || (g = new r), a(t, e, n, E, _, g))
    }
}, function(t, e, n) {
    var r = n(33),
        i = n(153),
        o = n(154);

    function a(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.__data__ = new r; ++e < n;) this.add(t[e])
    }
    a.prototype.add = a.prototype.push = i, a.prototype.has = o, t.exports = a
}, function(t, e) {
    var n = "__lodash_hash_undefined__";
    t.exports = function(t) {
        return this.__data__.set(t, n), this
    }
}, function(t, e) {
    t.exports = function(t) {
        return this.__data__.has(t)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
            if (e(t[n], n, t)) return !0;
        return !1
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return t.has(e)
    }
}, function(t, e, n) {
    var r = n(12),
        i = n(158),
        o = n(31),
        a = n(68),
        u = n(159),
        c = n(160),
        s = 1,
        l = 2,
        f = "[object Boolean]",
        d = "[object Date]",
        p = "[object Error]",
        v = "[object Map]",
        h = "[object Number]",
        E = "[object RegExp]",
        _ = "[object Set]",
        g = "[object String]",
        m = "[object Symbol]",
        I = "[object ArrayBuffer]",
        y = "[object DataView]",
        T = r ? r.prototype : void 0,
        O = T ? T.valueOf : void 0;
    t.exports = function(t, e, n, r, T, A, b) {
        switch (n) {
            case y:
                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                t = t.buffer, e = e.buffer;
            case I:
                return !(t.byteLength != e.byteLength || !A(new i(t), new i(e)));
            case f:
            case d:
            case h:
                return o(+t, +e);
            case p:
                return t.name == e.name && t.message == e.message;
            case E:
            case g:
                return t == e + "";
            case v:
                var w = u;
            case _:
                var S = r & s;
                if (w || (w = c), t.size != e.size && !S) return !1;
                var R = b.get(t);
                if (R) return R == e;
                r |= l, b.set(t, e);
                var N = a(w(t), w(e), r, T, A, b);
                return b.delete(t), N;
            case m:
                if (O) return O.call(t) == O.call(e)
        }
        return !1
    }
}, function(t, e, n) {
    var r = n(4).Uint8Array;
    t.exports = r
}, function(t, e) {
    t.exports = function(t) {
        var e = -1,
            n = Array(t.size);
        return t.forEach(function(t, r) {
            n[++e] = [r, t]
        }), n
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = -1,
            n = Array(t.size);
        return t.forEach(function(t) {
            n[++e] = t
        }), n
    }
}, function(t, e, n) {
    var r = n(162),
        i = 1,
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, n, a, u, c) {
        var s = n & i,
            l = r(t),
            f = l.length;
        if (f != r(e).length && !s) return !1;
        for (var d = f; d--;) {
            var p = l[d];
            if (!(s ? p in e : o.call(e, p))) return !1
        }
        var v = c.get(t);
        if (v && c.get(e)) return v == e;
        var h = !0;
        c.set(t, e), c.set(e, t);
        for (var E = s; ++d < f;) {
            var _ = t[p = l[d]],
                g = e[p];
            if (a) var m = s ? a(g, _, p, e, t, c) : a(_, g, p, t, e, c);
            if (!(void 0 === m ? _ === g || u(_, g, n, a, c) : m)) {
                h = !1;
                break
            }
            E || (E = "constructor" == p)
        }
        if (h && !E) {
            var I = t.constructor,
                y = e.constructor;
            I != y && "constructor" in t && "constructor" in e && !("function" == typeof I && I instanceof I && "function" == typeof y && y instanceof y) && (h = !1)
        }
        return c.delete(t), c.delete(e), h
    }
}, function(t, e, n) {
    var r = n(69),
        i = n(70),
        o = n(21);
    t.exports = function(t) {
        return r(t, o, i)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r;) {
            var a = t[n];
            e(a, n, t) && (o[i++] = a)
        }
        return o
    }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
        return r
    }
}, function(t, e, n) {
    var r = n(9),
        i = n(8),
        o = "[object Arguments]";
    t.exports = function(t) {
        return i(t) && r(t) == o
    }
}, function(t, e) {
    t.exports = function() {
        return !1
    }
}, function(t, e, n) {
    var r = n(9),
        i = n(38),
        o = n(8),
        a = {};
    a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, t.exports = function(t) {
        return o(t) && i(t.length) && !!a[r(t)]
    }
}, function(t, e) {
    t.exports = function(t) {
        return function(e) {
            return t(e)
        }
    }
}, function(t, e, n) {
    (function(t) {
        var r = n(65),
            i = e && !e.nodeType && e,
            o = i && "object" == typeof t && t && !t.nodeType && t,
            a = o && o.exports === i && r.process,
            u = function() {
                try {
                    var t = o && o.require && o.require("util").types;
                    return t || a && a.binding && a.binding("util")
                } catch (t) {}
            }();
        t.exports = u
    }).call(this, n(73)(t))
}, function(t, e, n) {
    var r = n(74)(Object.keys, Object);
    t.exports = r
}, function(t, e, n) {
    var r = n(7)(n(4), "DataView");
    t.exports = r
}, function(t, e, n) {
    var r = n(7)(n(4), "Promise");
    t.exports = r
}, function(t, e, n) {
    var r = n(7)(n(4), "Set");
    t.exports = r
}, function(t, e, n) {
    var r = n(76),
        i = n(21);
    t.exports = function(t) {
        for (var e = i(t), n = e.length; n--;) {
            var o = e[n],
                a = t[o];
            e[n] = [o, a, r(a)]
        }
        return e
    }
}, function(t, e, n) {
    var r = n(67),
        i = n(23),
        o = n(179),
        a = n(43),
        u = n(76),
        c = n(77),
        s = n(13),
        l = 1,
        f = 2;
    t.exports = function(t, e) {
        return a(t) && u(e) ? c(s(t), e) : function(n) {
            var a = i(n, t);
            return void 0 === a && a === e ? o(n, t) : r(e, a, l | f)
        }
    }
}, function(t, e, n) {
    var r = n(177),
        i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        o = /\\(\\)?/g,
        a = r(function(t) {
            var e = [];
            return 46 === t.charCodeAt(0) && e.push(""), t.replace(i, function(t, n, r, i) {
                e.push(r ? i.replace(o, "$1") : n || t)
            }), e
        });
    t.exports = a
}, function(t, e, n) {
    var r = n(178),
        i = 500;
    t.exports = function(t) {
        var e = r(t, function(t) {
                return n.size === i && n.clear(), t
            }),
            n = e.cache;
        return e
    }
}, function(t, e, n) {
    var r = n(33),
        i = "Expected a function";

    function o(t, e) {
        if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(i);
        var n = function() {
            var r = arguments,
                i = e ? e.apply(this, r) : r[0],
                o = n.cache;
            if (o.has(i)) return o.get(i);
            var a = t.apply(this, r);
            return n.cache = o.set(i, a) || o, a
        };
        return n.cache = new(o.Cache || r), n
    }
    o.Cache = r, t.exports = o
}, function(t, e, n) {
    var r = n(180),
        i = n(181);
    t.exports = function(t, e) {
        return null != t && i(t, e, r)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return null != t && e in Object(t)
    }
}, function(t, e, n) {
    var r = n(24),
        i = n(22),
        o = n(1),
        a = n(36),
        u = n(38),
        c = n(13);
    t.exports = function(t, e, n) {
        for (var s = -1, l = (e = r(e, t)).length, f = !1; ++s < l;) {
            var d = c(e[s]);
            if (!(f = null != t && n(t, d))) break;
            t = t[d]
        }
        return f || ++s != l ? f : !!(l = null == t ? 0 : t.length) && u(l) && a(d, l) && (o(t) || i(t))
    }
}, function(t, e, n) {
    var r = n(81),
        i = n(183),
        o = n(43),
        a = n(13);
    t.exports = function(t) {
        return o(t) ? r(a(t)) : i(t)
    }
}, function(t, e, n) {
    var r = n(42);
    t.exports = function(t) {
        return function(e) {
            return r(e, t)
        }
    }
}, function(t, e, n) {
    var r = n(82),
        i = n(6),
        o = n(45),
        a = Math.max;
    t.exports = function(t, e, n) {
        var u = null == t ? 0 : t.length;
        if (!u) return -1;
        var c = null == n ? 0 : o(n);
        return c < 0 && (c = a(u + c, 0)), r(t, i(e, 3), c)
    }
}, function(t, e, n) {
    var r = n(46),
        i = 1 / 0,
        o = 1.7976931348623157e308;
    t.exports = function(t) {
        return t ? (t = r(t)) === i || t === -i ? (t < 0 ? -1 : 1) * o : t == t ? t : 0 : 0 === t ? t : 0
    }
}, function(t, e) {
    t.exports = function(t) {
        if (Array.isArray(t)) {
            for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
            return n
        }
    }
}, function(t, e) {
    t.exports = function(t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
    }
}, function(t, e) {
    t.exports = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.createElementState = c, e.mergeActionState = s, e.ixElements = void 0;
    var r = n(14),
        i = n(48),
        o = n(87),
        a = {},
        u = "refState";

    function c(t, e, n, o, a) {
        var u = n === i.PLAIN_OBJECT ? (0, r.getIn)(a, ["config", "target", "objectId"]) : null;
        return (0, r.mergeIn)(t, [o], {
            id: o,
            ref: e,
            refId: u,
            refType: n
        })
    }

    function s(t, e, n, i, o) {
        var a = function(t) {
                var e = t.config;
                return l.reduce(function(t, n) {
                    var r = n[0],
                        i = n[1],
                        o = e[r],
                        a = e[i];
                    return null != o && null != a && (t[i] = a), t
                }, {})
            }(o),
            c = [e, u, n];
        return (0, r.mergeIn)(t, c, i, a)
    }
    e.ixElements = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        switch (e.type) {
            case o.IX2_SESSION_STOPPED:
                return a;
            case o.IX2_INSTANCE_ADDED:
                var n = e.payload,
                    i = n.elementId,
                    u = n.element,
                    l = n.origin,
                    f = n.actionItem,
                    d = n.refType,
                    p = f.actionTypeId,
                    v = t;
                return (0, r.getIn)(v, [i, u]) !== u && (v = c(v, u, d, i, f)), s(v, i, p, l, f);
            case o.IX2_ELEMENT_STATE_CHANGED:
                var h = e.payload;
                return s(t, h.elementId, h.actionTypeId, h.current, h.actionItem);
            default:
                return t
        }
    };
    var l = [
        [i.CONFIG_X_VALUE, i.CONFIG_X_UNIT],
        [i.CONFIG_Y_VALUE, i.CONFIG_Y_UNIT],
        [i.CONFIG_Z_VALUE, i.CONFIG_Z_UNIT],
        [i.CONFIG_VALUE, i.CONFIG_UNIT]
    ]
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.IX2_EVENT_ENGINE_EVENT_TYPES = e.DIRECTIONS = e.EVENT_APPLIES_TO = e.EVENT_ACTION_TYPES = e.BASED_ON_TYPES = e.AXES = void 0;
    e.AXES = {
        X_AXIS: "X_AXIS",
        Y_AXIS: "Y_AXIS"
    };
    e.BASED_ON_TYPES = {
        ELEMENT: "ELEMENT",
        VIEWPORT: "VIEWPORT",
        PAGE: "PAGE"
    };
    e.EVENT_ACTION_TYPES = {
        START: "START",
        STOP: "STOP",
        CONTINUOUS: "CONTINUOUS",
        CHANGE_COMBO: "CHANGE_COMBO"
    };
    e.EVENT_APPLIES_TO = {
        ELEMENT: "ELEMENT",
        CLASS: "CLASS",
        PAGE: "PAGE"
    };
    e.DIRECTIONS = {
        LEFT: "LEFT",
        RIGHT: "RIGHT",
        BOTTOM: "BOTTOM",
        TOP: "TOP",
        BOTTOM_LEFT: "BOTTOM_LEFT",
        BOTTOM_RIGHT: "BOTTOM_RIGHT",
        TOP_RIGHT: "TOP_RIGHT",
        TOP_LEFT: "TOP_LEFT",
        CLOCKWISE: "CLOCKWISE",
        COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
    };
    e.IX2_EVENT_ENGINE_EVENT_TYPES = {
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        COMPONENT_ACTIVE: "COMPONENT_ACTIVE",
        COMPONENT_INACTIVE: "COMPONENT_INACTIVE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
        ELEMENT: "ELEMENT",
        VIEWPORT: "VIEWPORT",
        PAGE: "PAGE",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE"
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.IX2_INTERACTION_TYPES = void 0;
    e.IX2_INTERACTION_TYPES = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION"
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginOrigin = e.getPluginDuration = e.getPluginConfig = void 0;
    e.getPluginConfig = function(t) {
        return t.value
    };
    e.getPluginDuration = function(t, e) {
        if ("auto" !== e.config.duration) return null;
        var n = parseFloat(t.getAttribute("data-duration"));
        return n > 0 ? 1e3 * n : 1e3 * parseFloat(t.getAttribute("data-default-duration"))
    };
    e.getPluginOrigin = function(t) {
        return t || {
            value: 0
        }
    };
    e.getPluginDestination = function(t) {
        return {
            value: t.value
        }
    };
    e.createPluginInstance = function(t) {
        var e = window.Webflow.require("lottie").createInstance(t);
        return e.stop(), e.setSubframe(!0), e
    };
    e.renderPlugin = function(t, e, n) {
        if (t) {
            var r = e[n.actionTypeId].value / 100;
            t.goToFrame(t.frames * r)
        }
    };
    e.clearPlugin = function(t) {
        window.Webflow.require("lottie").createInstance(t).stop()
    }
}, function(t, e, n) {
    "use strict";
    var r, i, o, a = n(0),
        u = a(n(11)),
        c = a(n(26)),
        s = n(0);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getInstanceId = function() {
        return "i" + w++
    }, e.getElementId = function(t, e) {
        for (var n in t) {
            var r = t[n];
            if (r && r.ref === e) return r.id
        }
        return "e" + S++
    }, e.reifyState = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = t.events,
            n = t.actionLists,
            r = t.site,
            i = (0, f.default)(e, function(t, e) {
                var n = e.eventTypeId;
                return t[n] || (t[n] = {}), t[n][e.id] = e, t
            }, {}),
            o = r && r.mediaQueries,
            a = [];
        o ? a = o.map(function(t) {
            return t.key
        }) : (o = [], console.warn("IX2 missing mediaQueries in site data"));
        return {
            ixData: {
                events: e,
                actionLists: n,
                eventTypeMap: i,
                mediaQueries: o,
                mediaQueryKeys: a
            }
        }
    }, e.observeStore = function(t) {
        var e = t.store,
            n = t.select,
            r = t.onChange,
            i = t.comparator,
            o = void 0 === i ? R : i,
            a = e.getState,
            u = (0, e.subscribe)(function() {
                var t = n(a());
                if (null == t) return void u();
                o(t, c) || r(c = t, e)
            }),
            c = n(a());
        return u
    }, e.getAffectedElements = C, e.getComputedStyle = function(t) {
        var e = t.element,
            n = t.actionItem;
        if (!y.IS_BROWSER_ENV) return {};
        switch (n.actionTypeId) {
            case I.STYLE_SIZE:
            case I.STYLE_BACKGROUND_COLOR:
            case I.STYLE_BORDER:
            case I.STYLE_TEXT_COLOR:
            case I.GENERAL_DISPLAY:
                return window.getComputedStyle(e);
            default:
                return {}
        }
    }, e.getInstanceOrigin = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = arguments.length > 3 ? arguments[3] : void 0,
            i = (arguments.length > 4 ? arguments[4] : void 0).getStyle,
            o = r.actionTypeId,
            a = r.config;
        if ((0, _.isPluginType)(o)) return (0, _.getPluginOrigin)(o)(e[o]);
        switch (o) {
            case I.TRANSFORM_MOVE:
            case I.TRANSFORM_SCALE:
            case I.TRANSFORM_ROTATE:
            case I.TRANSFORM_SKEW:
                return e[o] || M[o];
            case I.STYLE_FILTER:
                return x(e[o], r.config.filters);
            case I.STYLE_OPACITY:
                return {
                    value: (0, l.default)(parseFloat(i(t, g.OPACITY)), 1)
                };
            case I.STYLE_SIZE:
                var u, c, s = i(t, g.WIDTH),
                    f = i(t, g.HEIGHT);
                return u = a.widthUnit === g.AUTO ? L.test(s) ? parseFloat(s) : parseFloat(n.width) : (0, l.default)(parseFloat(s), parseFloat(n.width)), c = a.heightUnit === g.AUTO ? L.test(f) ? parseFloat(f) : parseFloat(n.height) : (0, l.default)(parseFloat(f), parseFloat(n.height)), {
                    widthValue: u,
                    heightValue: c
                };
            case I.STYLE_BACKGROUND_COLOR:
            case I.STYLE_BORDER:
            case I.STYLE_TEXT_COLOR:
                return function(t) {
                    var e = t.element,
                        n = t.actionTypeId,
                        r = t.computedStyle,
                        i = t.getStyle,
                        o = O[n],
                        a = i(e, o),
                        u = V.test(a) ? a : r[o],
                        c = function(t, e) {
                            var n = t.exec(e);
                            return n ? n[1] : ""
                        }(U, u).split(g.COMMA_DELIMITER);
                    return {
                        rValue: (0, l.default)(parseInt(c[0], 10), 255),
                        gValue: (0, l.default)(parseInt(c[1], 10), 255),
                        bValue: (0, l.default)(parseInt(c[2], 10), 255),
                        aValue: (0, l.default)(parseFloat(c[3]), 1)
                    }
                }({
                    element: t,
                    actionTypeId: o,
                    computedStyle: n,
                    getStyle: i
                });
            case I.GENERAL_DISPLAY:
                return {
                    value: (0, l.default)(i(t, g.DISPLAY), n.display)
                };
            case I.OBJECT_VALUE:
                return e[o] || {
                    value: 0
                };
            default:
                return
        }
    }, e.getDestinationValues = function(t) {
        var e = t.element,
            n = t.actionItem,
            r = t.elementApi,
            i = n.actionTypeId;
        if ((0, _.isPluginType)(i)) return (0, _.getPluginDestination)(i)(n.config);
        switch (i) {
            case I.TRANSFORM_MOVE:
            case I.TRANSFORM_SCALE:
            case I.TRANSFORM_ROTATE:
            case I.TRANSFORM_SKEW:
                var o = n.config,
                    a = o.xValue,
                    u = o.yValue,
                    c = o.zValue;
                return {
                    xValue: a, yValue: u, zValue: c
                };
            case I.STYLE_SIZE:
                var s = r.getStyle,
                    l = r.setStyle,
                    f = r.getProperty,
                    d = n.config,
                    p = d.widthUnit,
                    v = d.heightUnit,
                    h = n.config,
                    E = h.widthValue,
                    m = h.heightValue;
                if (!y.IS_BROWSER_ENV) return {
                    widthValue: E,
                    heightValue: m
                };
                if (p === g.AUTO) {
                    var T = s(e, g.WIDTH);
                    l(e, g.WIDTH, ""), E = f(e, "offsetWidth"), l(e, g.WIDTH, T)
                }
                if (v === g.AUTO) {
                    var O = s(e, g.HEIGHT);
                    l(e, g.HEIGHT, ""), m = f(e, "offsetHeight"), l(e, g.HEIGHT, O)
                }
                return {
                    widthValue: E, heightValue: m
                };
            case I.STYLE_BACKGROUND_COLOR:
            case I.STYLE_BORDER:
            case I.STYLE_TEXT_COLOR:
                var A = n.config,
                    b = A.rValue,
                    w = A.gValue,
                    S = A.bValue,
                    R = A.aValue;
                return {
                    rValue: b, gValue: w, bValue: S, aValue: R
                };
            case I.STYLE_FILTER:
                return n.config.filters.reduce(D, {});
            default:
                var N = n.config.value;
                return {
                    value: N
                }
        }
    }, e.getRenderType = P, e.getStyleProp = function(t, e) {
        return t === g.RENDER_STYLE ? e.replace("STYLE_", "").toLowerCase() : null
    }, e.renderHTMLElement = function(t, e, n, r, i, o, a, u, c) {
        switch (u) {
            case g.RENDER_TRANSFORM:
                return function(t, e, n, r, i) {
                    var o = G.map(function(t) {
                            var n = M[t],
                                r = e[t] || {},
                                i = r.xValue,
                                o = void 0 === i ? n.xValue : i,
                                a = r.yValue,
                                u = void 0 === a ? n.yValue : a,
                                c = r.zValue,
                                s = void 0 === c ? n.zValue : c,
                                l = r.xUnit,
                                f = void 0 === l ? "" : l,
                                d = r.yUnit,
                                p = void 0 === d ? "" : d,
                                v = r.zUnit,
                                h = void 0 === v ? "" : v;
                            switch (t) {
                                case I.TRANSFORM_MOVE:
                                    return "".concat(g.TRANSLATE_3D, "(").concat(o).concat(f, ", ").concat(u).concat(p, ", ").concat(s).concat(h, ")");
                                case I.TRANSFORM_SCALE:
                                    return "".concat(g.SCALE_3D, "(").concat(o).concat(f, ", ").concat(u).concat(p, ", ").concat(s).concat(h, ")");
                                case I.TRANSFORM_ROTATE:
                                    return "".concat(g.ROTATE_X, "(").concat(o).concat(f, ") ").concat(g.ROTATE_Y, "(").concat(u).concat(p, ") ").concat(g.ROTATE_Z, "(").concat(s).concat(h, ")");
                                case I.TRANSFORM_SKEW:
                                    return "".concat(g.SKEW, "(").concat(o).concat(f, ", ").concat(u).concat(p, ")");
                                default:
                                    return ""
                            }
                        }).join(" "),
                        a = i.setStyle;
                    X(t, y.TRANSFORM_PREFIXED, i), a(t, y.TRANSFORM_PREFIXED, o), u = r, c = n, s = u.actionTypeId, l = c.xValue, f = c.yValue, d = c.zValue, (s === I.TRANSFORM_MOVE && void 0 !== d || s === I.TRANSFORM_SCALE && void 0 !== d || s === I.TRANSFORM_ROTATE && (void 0 !== l || void 0 !== f)) && a(t, y.TRANSFORM_STYLE_PREFIXED, g.PRESERVE_3D);
                    var u, c, s, l, f, d
                }(t, e, n, i, a);
            case g.RENDER_STYLE:
                return function(t, e, n, r, i, o) {
                    var a = o.setStyle,
                        u = r.actionTypeId,
                        c = r.config;
                    switch (u) {
                        case I.STYLE_SIZE:
                            var s = r.config,
                                l = s.widthUnit,
                                d = void 0 === l ? "" : l,
                                p = s.heightUnit,
                                v = void 0 === p ? "" : p,
                                h = n.widthValue,
                                E = n.heightValue;
                            void 0 !== h && (d === g.AUTO && (d = "px"), X(t, g.WIDTH, o), a(t, g.WIDTH, h + d)), void 0 !== E && (v === g.AUTO && (v = "px"), X(t, g.HEIGHT, o), a(t, g.HEIGHT, E + v));
                            break;
                        case I.STYLE_FILTER:
                            ! function(t, e, n, r) {
                                var i = (0, f.default)(e, function(t, e, r) {
                                        return "".concat(t, " ").concat(r, "(").concat(e).concat(j(r, n), ")")
                                    }, ""),
                                    o = r.setStyle;
                                X(t, g.FILTER, r), o(t, g.FILTER, i)
                            }(t, n, c, o);
                            break;
                        case I.STYLE_BACKGROUND_COLOR:
                        case I.STYLE_BORDER:
                        case I.STYLE_TEXT_COLOR:
                            var _ = O[u],
                                m = Math.round(n.rValue),
                                y = Math.round(n.gValue),
                                T = Math.round(n.bValue),
                                A = n.aValue;
                            X(t, _, o), a(t, _, A >= 1 ? "rgb(".concat(m, ",").concat(y, ",").concat(T, ")") : "rgba(".concat(m, ",").concat(y, ",").concat(T, ",").concat(A, ")"));
                            break;
                        default:
                            var b = c.unit,
                                w = void 0 === b ? "" : b;
                            X(t, i, o), a(t, i, n.value + w)
                    }
                }(t, 0, n, i, o, a);
            case g.RENDER_GENERAL:
                return function(t, e, n) {
                    var r = n.setStyle;
                    switch (e.actionTypeId) {
                        case I.GENERAL_DISPLAY:
                            var i = e.config.value;
                            return void(i === g.FLEX && y.IS_BROWSER_ENV ? r(t, g.DISPLAY, y.FLEX_PREFIXED) : r(t, g.DISPLAY, i))
                    }
                }(t, i, a);
            case g.RENDER_PLUGIN:
                var s = i.actionTypeId;
                if ((0, _.isPluginType)(s)) return (0, _.renderPlugin)(s)(c, e, i)
        }
    }, e.clearAllStyles = function(t) {
        var e = t.store,
            n = t.elementApi,
            r = e.getState().ixData,
            i = r.events,
            o = void 0 === i ? {} : i,
            a = r.actionLists,
            u = void 0 === a ? {} : a;
        Object.keys(o).forEach(function(t) {
            var e = o[t],
                r = e.action.config,
                i = r.actionListId,
                a = u[i];
            a && W({
                actionList: a,
                event: e,
                elementApi: n
            })
        }), Object.keys(u).forEach(function(t) {
            W({
                actionList: u[t],
                elementApi: n
            })
        })
    }, e.cleanupHTMLElement = function(t, e, n) {
        var r = n.setStyle,
            i = n.getStyle,
            o = e.actionTypeId;
        if (o === I.STYLE_SIZE) {
            var a = e.config;
            a.widthUnit === g.AUTO && r(t, g.WIDTH, ""), a.heightUnit === g.AUTO && r(t, g.HEIGHT, "")
        }
        i(t, g.WILL_CHANGE) && H({
            effect: k,
            actionTypeId: o,
            elementApi: n
        })(t)
    }, e.getMaxDurationItemIndex = z, e.getActionListProgress = function(t, e) {
        var n = t.actionItemGroups,
            r = t.useFirstGroupAsInitialState,
            i = e.actionItem,
            o = e.verboseTimeElapsed,
            a = void 0 === o ? 0 : o,
            u = 0,
            c = 0;
        return n.forEach(function(t, e) {
            if (!r || 0 !== e) {
                var n = t.actionItems,
                    o = n[z(n)],
                    s = o.config,
                    l = o.actionTypeId;
                i.id === o.id && (c = u + a);
                var f = P(l) === g.RENDER_GENERAL ? 0 : s.duration;
                u += s.delay + f
            }
        }), u > 0 ? (0, E.optimizeFloat)(c / u) : 0
    }, e.reduceListToGroup = function(t) {
        var e = t.actionList,
            n = t.actionItemId,
            r = t.rawData,
            i = e.actionItemGroups,
            o = e.continuousParameterGroups,
            a = [],
            u = function(t) {
                return a.push((0, v.mergeIn)(t, ["config"], {
                    delay: 0,
                    duration: 0
                })), t.id === n
            };
        return i && i.some(function(t) {
            return t.actionItems.some(u)
        }), o && o.some(function(t) {
            return t.continuousActionGroups.some(function(t) {
                return t.actionItems.some(u)
            })
        }), (0, v.setIn)(r, ["actionLists"], (0, c.default)({}, e.id, {
            id: e.id,
            actionItemGroups: [{
                actionItems: a
            }]
        }))
    }, e.shouldNamespaceEventParameter = function(t, e) {
        var n = e.basedOn;
        return t === m.SCROLLING_IN_VIEW && (n === m.ELEMENT || null == n) || t === m.MOUSE_MOVE && n === m.ELEMENT
    }, e.getNamespacedParameterId = function(t, e) {
        return t + g.COLON_DELIMITER + e
    }, e.shouldAllowMediaQuery = function(t, e) {
        if (null == e) return !0;
        return -1 !== t.indexOf(e)
    }, e.mediaQueriesEqual = function(t, e) {
        return (0, h.default)(t && t.sort(), e && e.sort())
    }, e.stringifyTarget = function(t) {
        if ("string" == typeof t) return t;
        var e = t.id,
            n = void 0 === e ? "" : e,
            r = t.selector,
            i = void 0 === r ? "" : r,
            o = t.useEventTarget,
            a = void 0 === o ? "" : o;
        return n + g.BAR_DELIMITER + i + g.BAR_DELIMITER + a
    }, e.getItemConfigByKey = void 0;
    var l = s(n(194)),
        f = s(n(195)),
        d = s(n(201)),
        p = s(n(23)),
        v = n(14),
        h = s(n(92)),
        E = n(85),
        _ = n(89),
        g = n(48),
        m = n(88),
        I = n(47),
        y = n(30),
        T = function(t) {
            return t.trim()
        },
        O = Object.freeze((r = {}, (0, c.default)(r, I.STYLE_BACKGROUND_COLOR, g.BACKGROUND_COLOR), (0, c.default)(r, I.STYLE_BORDER, g.BORDER_COLOR), (0, c.default)(r, I.STYLE_TEXT_COLOR, g.COLOR), r)),
        A = Object.freeze((i = {}, (0, c.default)(i, y.TRANSFORM_PREFIXED, g.TRANSFORM), (0, c.default)(i, g.BACKGROUND_COLOR, g.BACKGROUND), (0, c.default)(i, g.OPACITY, g.OPACITY), (0, c.default)(i, g.FILTER, g.FILTER), (0, c.default)(i, g.WIDTH, g.WIDTH), (0, c.default)(i, g.HEIGHT, g.HEIGHT), i)),
        b = {},
        w = 1;
    var S = 1;
    var R = function(t, e) {
        return t === e
    };

    function N(t) {
        var e = (0, u.default)(t);
        return "string" === e ? {
            id: t
        } : null != t && "object" === e ? {
            id: t.id,
            objectId: t.objectId,
            selector: t.selector,
            selectorGuids: t.selectorGuids,
            appliesTo: t.appliesTo,
            useEventTarget: t.useEventTarget
        } : {}
    }

    function C(t) {
        var e = t.config,
            n = t.event,
            r = t.eventTarget,
            i = t.elementRoot,
            o = t.elementApi;
        if (!o) throw new Error("IX2 missing elementApi");
        var a = o.getValidDocument,
            u = o.getQuerySelector,
            c = o.queryDocument,
            s = o.getChildElements,
            l = o.getSiblingElements,
            f = o.matchSelector,
            d = o.elementContains,
            v = o.isSiblingNode,
            h = e.target;
        if (!h) return [];
        var E = N(h),
            _ = E.id,
            I = E.objectId,
            T = E.selector,
            O = E.selectorGuids,
            A = E.appliesTo,
            w = E.useEventTarget;
        if (I) return [b[I] || (b[I] = {})];
        if (A === m.PAGE) {
            var S = a(_);
            return S ? [S] : []
        }
        var R, C, L, x = (0, p.default)(n, "action.config.affectedElements", {})[_ || T] || {},
            D = Boolean(x.id || x.selector),
            P = n && u(N(n.target));
        if (D ? (R = x.limitAffectedElements, C = P, L = u(x)) : C = L = u({
                id: _,
                selector: T,
                selectorGuids: O
            }), n && w) {
            var M = r && (L || !0 === w) ? [r] : c(P);
            if (L) {
                if (w === g.PARENT) return c(L).filter(function(t) {
                    return M.some(function(e) {
                        return d(t, e)
                    })
                });
                if (w === g.CHILDREN) return c(L).filter(function(t) {
                    return M.some(function(e) {
                        return d(e, t)
                    })
                });
                if (w === g.SIBLINGS) return c(L).filter(function(t) {
                    return M.some(function(e) {
                        return v(e, t)
                    })
                })
            }
            return M
        }
        return null == C || null == L ? [] : y.IS_BROWSER_ENV && i ? c(L).filter(function(t) {
            return i.contains(t)
        }) : R === g.CHILDREN ? c(C, L) : R === g.IMMEDIATE_CHILDREN ? s(c(C)).filter(f(L)) : R === g.SIBLINGS ? l(c(C)).filter(f(L)) : c(L)
    }
    var L = /px/,
        x = function(t, e) {
            return e.reduce(function(t, e) {
                return null == t[e.type] && (t[e.type] = F[e.type]), t
            }, t || {})
        };
    var D = function(t, e) {
        return e && (t[e.type] = e.value || 0), t
    };

    function P(t) {
        return /^TRANSFORM_/.test(t) ? g.RENDER_TRANSFORM : /^STYLE_/.test(t) ? g.RENDER_STYLE : /^GENERAL_/.test(t) ? g.RENDER_GENERAL : /^PLUGIN_/.test(t) ? g.RENDER_PLUGIN : void 0
    }
    e.getItemConfigByKey = function(t, e, n) {
        if ((0, _.isPluginType)(t)) return (0, _.getPluginConfig)(t)(n, e);
        switch (t) {
            case I.STYLE_FILTER:
                var r = (0, d.default)(n.filters, function(t) {
                    return t.type === e
                });
                return r ? r.value : 0;
            default:
                return n[e]
        }
    };
    var M = (o = {}, (0, c.default)(o, I.TRANSFORM_MOVE, Object.freeze({
            xValue: 0,
            yValue: 0,
            zValue: 0
        })), (0, c.default)(o, I.TRANSFORM_SCALE, Object.freeze({
            xValue: 1,
            yValue: 1,
            zValue: 1
        })), (0, c.default)(o, I.TRANSFORM_ROTATE, Object.freeze({
            xValue: 0,
            yValue: 0,
            zValue: 0
        })), (0, c.default)(o, I.TRANSFORM_SKEW, Object.freeze({
            xValue: 0,
            yValue: 0
        })), o),
        F = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }),
        j = function(t, e) {
            var n = (0, d.default)(e.filters, function(e) {
                return e.type === t
            });
            if (n && n.unit) return n.unit;
            switch (t) {
                case "blur":
                    return "px";
                case "hue-rotate":
                    return "deg";
                default:
                    return "%"
            }
        },
        G = Object.keys(M);
    var V = /^rgb/,
        U = RegExp("rgba?".concat("\\(([^)]+)\\)"));

    function X(t, e, n) {
        if (y.IS_BROWSER_ENV) {
            var r = A[e];
            if (r) {
                var i = n.getStyle,
                    o = n.setStyle,
                    a = i(t, g.WILL_CHANGE);
                if (a) {
                    var u = a.split(g.COMMA_DELIMITER).map(T); - 1 === u.indexOf(r) && o(t, g.WILL_CHANGE, u.concat(r).join(g.COMMA_DELIMITER))
                } else o(t, g.WILL_CHANGE, r)
            }
        }
    }

    function k(t, e, n) {
        if (y.IS_BROWSER_ENV) {
            var r = A[e];
            if (r) {
                var i = n.getStyle,
                    o = n.setStyle,
                    a = i(t, g.WILL_CHANGE);
                a && -1 !== a.indexOf(r) && o(t, g.WILL_CHANGE, a.split(g.COMMA_DELIMITER).map(T).filter(function(t) {
                    return t !== r
                }).join(g.COMMA_DELIMITER))
            }
        }
    }

    function W(t) {
        var e = t.actionList,
            n = void 0 === e ? {} : e,
            r = t.event,
            i = t.elementApi,
            o = n.actionItemGroups,
            a = n.continuousParameterGroups;
        o && o.forEach(function(t) {
            B({
                actionGroup: t,
                event: r,
                elementApi: i
            })
        }), a && a.forEach(function(t) {
            t.continuousActionGroups.forEach(function(t) {
                B({
                    actionGroup: t,
                    event: r,
                    elementApi: i
                })
            })
        })
    }

    function B(t) {
        var e = t.actionGroup,
            n = t.event,
            r = t.elementApi;
        e.actionItems.forEach(function(t) {
            var e, i = t.actionTypeId,
                o = t.config;
            e = (0, _.isPluginType)(i) ? (0, _.clearPlugin)(i) : H({
                effect: Y,
                actionTypeId: i,
                elementApi: r
            }), C({
                config: o,
                event: n,
                elementApi: r
            }).forEach(e)
        })
    }
    var H = function(t) {
        var e = t.effect,
            n = t.actionTypeId,
            r = t.elementApi;
        return function(t) {
            switch (n) {
                case I.TRANSFORM_MOVE:
                case I.TRANSFORM_SCALE:
                case I.TRANSFORM_ROTATE:
                case I.TRANSFORM_SKEW:
                    e(t, y.TRANSFORM_PREFIXED, r);
                    break;
                case I.STYLE_FILTER:
                    e(t, g.FILTER, r);
                    break;
                case I.STYLE_OPACITY:
                    e(t, g.OPACITY, r);
                    break;
                case I.STYLE_SIZE:
                    e(t, g.WIDTH, r), e(t, g.HEIGHT, r);
                    break;
                case I.STYLE_BACKGROUND_COLOR:
                case I.STYLE_BORDER:
                case I.STYLE_TEXT_COLOR:
                    e(t, O[n], r);
                    break;
                case I.GENERAL_DISPLAY:
                    e(t, g.DISPLAY, r)
            }
        }
    };

    function Y(t, e, n) {
        var r = n.setStyle;
        k(t, e, n), r(t, e, ""), e === y.TRANSFORM_PREFIXED && r(t, y.TRANSFORM_STYLE_PREFIXED, "")
    }

    function z(t) {
        var e = 0,
            n = 0;
        return t.forEach(function(t, r) {
            var i = t.config,
                o = i.delay + i.duration;
            o >= e && (e = o, n = r)
        }), n
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return null == t || t != t ? e : t
    }
}, function(t, e, n) {
    var r = n(196),
        i = n(90),
        o = n(6),
        a = n(200),
        u = n(1);
    t.exports = function(t, e, n) {
        var c = u(t) ? r : a,
            s = arguments.length < 3;
        return c(t, o(e, 4), n, s, i)
    }
}, function(t, e) {
    t.exports = function(t, e, n, r) {
        var i = -1,
            o = null == t ? 0 : t.length;
        for (r && o && (n = t[++i]); ++i < o;) n = e(n, t[i], i, t);
        return n
    }
}, function(t, e, n) {
    var r = n(198)();
    t.exports = r
}, function(t, e) {
    t.exports = function(t) {
        return function(e, n, r) {
            for (var i = -1, o = Object(e), a = r(e), u = a.length; u--;) {
                var c = a[t ? u : ++i];
                if (!1 === n(o[c], c, o)) break
            }
            return e
        }
    }
}, function(t, e, n) {
    var r = n(10);
    t.exports = function(t, e) {
        return function(n, i) {
            if (null == n) return n;
            if (!r(n)) return t(n, i);
            for (var o = n.length, a = e ? o : -1, u = Object(n);
                (e ? a-- : ++a < o) && !1 !== i(u[a], a, u););
            return n
        }
    }
}, function(t, e) {
    t.exports = function(t, e, n, r, i) {
        return i(t, function(t, i, o) {
            n = r ? (r = !1, t) : e(n, t, i, o)
        }), n
    }
}, function(t, e, n) {
    var r = n(62)(n(202));
    t.exports = r
}, function(t, e, n) {
    var r = n(82),
        i = n(6),
        o = n(45),
        a = Math.max,
        u = Math.min;
    t.exports = function(t, e, n) {
        var c = null == t ? 0 : t.length;
        if (!c) return -1;
        var s = c - 1;
        return void 0 !== n && (s = o(n), s = n < 0 ? a(c + s, 0) : u(s, c - 1)), r(t, i(e, 3), s, !0)
    }
}, function(t, e, n) {
    "use strict";
    var r = Object.prototype.hasOwnProperty;

    function i(t, e) {
        return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e
    }
    t.exports = function(t, e) {
        if (i(t, e)) return !0;
        if ("object" != typeof t || null === t || "object" != typeof e || null === e) return !1;
        var n = Object.keys(t),
            o = Object.keys(e);
        if (n.length !== o.length) return !1;
        for (var a = 0; a < n.length; a++)
            if (!r.call(e, n[a]) || !i(t[n[a]], e[n[a]])) return !1;
        return !0
    }
}, function(t, e, n) {
    "use strict";
    var r, i = n(0)(n(26));
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ixRequest = void 0;
    var o = n(3),
        a = n(14),
        u = o.IX2EngineActionTypes,
        c = u.IX2_PREVIEW_REQUESTED,
        s = u.IX2_PLAYBACK_REQUESTED,
        l = u.IX2_STOP_REQUESTED,
        f = u.IX2_CLEAR_REQUESTED,
        d = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        },
        p = Object.create(null, (r = {}, (0, i.default)(r, c, {
            value: "preview"
        }), (0, i.default)(r, s, {
            value: "playback"
        }), (0, i.default)(r, l, {
            value: "stop"
        }), (0, i.default)(r, f, {
            value: "clear"
        }), r));
    e.ixRequest = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
            e = arguments.length > 1 ? arguments[1] : void 0;
        if (e.type in p) {
            var n = [p[e.type]];
            return (0, a.setIn)(t, [n], Object.assign({}, e.payload))
        }
        return t
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ixSession = void 0;
    var r = n(3),
        i = n(14),
        o = r.IX2EngineActionTypes,
        a = o.IX2_SESSION_INITIALIZED,
        u = o.IX2_SESSION_STARTED,
        c = o.IX2_TEST_FRAME_RENDERED,
        s = o.IX2_SESSION_STOPPED,
        l = o.IX2_EVENT_LISTENER_ADDED,
        f = o.IX2_EVENT_STATE_CHANGED,
        d = o.IX2_ANIMATION_FRAME_CHANGED,
        p = o.IX2_ACTION_LIST_PLAYBACK_CHANGED,
        v = o.IX2_VIEWPORT_WIDTH_CHANGED,
        h = o.IX2_MEDIA_QUERIES_DEFINED,
        E = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1
        };
    e.ixSession = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
            e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
            case a:
                var n = e.payload.hasBoundaryNodes;
                return (0, i.set)(t, "hasBoundaryNodes", n);
            case u:
                return (0, i.set)(t, "active", !0);
            case c:
                var r = e.payload.step,
                    o = void 0 === r ? 20 : r;
                return (0, i.set)(t, "tick", t.tick + o);
            case s:
                return E;
            case d:
                var _ = e.payload.now;
                return (0, i.set)(t, "tick", _);
            case l:
                var g = (0, i.addLast)(t.eventListeners, e.payload);
                return (0, i.set)(t, "eventListeners", g);
            case f:
                var m = e.payload,
                    I = m.stateKey,
                    y = m.newState;
                return (0, i.setIn)(t, ["eventState", I], y);
            case p:
                var T = e.payload,
                    O = T.actionListId,
                    A = T.isPlaying;
                return (0, i.setIn)(t, ["playbackState", O], A);
            case v:
                for (var b = e.payload, w = b.width, S = b.mediaQueries, R = S.length, N = null, C = 0; C < R; C++) {
                    var L = S[C],
                        x = L.key,
                        D = L.min,
                        P = L.max;
                    if (w >= D && w <= P) {
                        N = x;
                        break
                    }
                }
                return (0, i.merge)(t, {
                    viewportWidth: w,
                    mediaQueryKey: N
                });
            case h:
                return (0, i.set)(t, "hasDefinedMediaQueries", !0);
            default:
                return t
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ixInstances = void 0;
    var r = n(3),
        i = n(14),
        o = r.IX2EngineActionTypes,
        a = o.IX2_RAW_DATA_IMPORTED,
        u = o.IX2_SESSION_STOPPED,
        c = o.IX2_INSTANCE_ADDED,
        s = o.IX2_INSTANCE_STARTED,
        l = o.IX2_INSTANCE_REMOVED,
        f = o.IX2_ANIMATION_FRAME_CHANGED,
        d = r.IX2EasingUtils,
        p = d.optimizeFloat,
        v = d.applyEasing,
        h = d.createBezierEasing,
        E = r.IX2EngineConstants.RENDER_GENERAL,
        _ = r.IX2VanillaUtils,
        g = _.getItemConfigByKey,
        m = _.getRenderType,
        I = _.getStyleProp,
        y = function(t, e) {
            var n = t.position,
                r = t.parameterId,
                o = t.actionGroups,
                a = t.destinationKeys,
                u = t.smoothing,
                c = t.restingValue,
                s = t.actionTypeId,
                l = t.customEasingFn,
                f = e.payload.parameters,
                d = Math.max(1 - u, .01),
                h = f[r];
            null == h && (d = 1, h = c);
            var E, _, m, I, y = Math.max(h, 0) || 0,
                T = p(y - n),
                O = p(n + T * d),
                A = 100 * O;
            if (O === n && t.current) return t;
            for (var b = 0, w = o.length; b < w; b++) {
                var S = o[b],
                    R = S.keyframe,
                    N = S.actionItems;
                if (0 === b && (E = N[0]), A >= R) {
                    E = N[0];
                    var C = o[b + 1],
                        L = C && A !== R;
                    _ = L ? C.actionItems[0] : null, L && (m = R / 100, I = (C.keyframe - R) / 100)
                }
            }
            var x = {};
            if (E && !_)
                for (var D = 0, P = a.length; D < P; D++) {
                    var M = a[D];
                    x[M] = g(s, M, E.config)
                } else if (E && _ && void 0 !== m && void 0 !== I)
                    for (var F = (O - m) / I, j = E.config.easing, G = v(j, F, l), V = 0, U = a.length; V < U; V++) {
                        var X = a[V],
                            k = g(s, X, E.config),
                            W = (g(s, X, _.config) - k) * G + k;
                        x[X] = W
                    }
            return (0, i.merge)(t, {
                position: O,
                current: x
            })
        },
        T = function(t, e) {
            var n = t,
                r = n.active,
                o = n.origin,
                a = n.start,
                u = n.immediate,
                c = n.renderType,
                s = n.verbose,
                l = n.actionItem,
                f = n.destination,
                d = n.destinationKeys,
                h = n.pluginDuration,
                _ = n.instanceDelay,
                g = n.customEasingFn,
                m = l.config.easing,
                I = l.config,
                y = I.duration,
                T = I.delay;
            null != h && (y = h), T = null != _ ? _ : T, c === E ? y = 0 : u && (y = T = 0);
            var O = e.payload.now;
            if (r && o) {
                var A = O - (a + T);
                if (s) {
                    var b = O - a,
                        w = y + T,
                        S = p(Math.min(Math.max(0, b / w), 1));
                    t = (0, i.set)(t, "verboseTimeElapsed", w * S)
                }
                if (A < 0) return t;
                var R = p(Math.min(Math.max(0, A / y), 1)),
                    N = v(m, R, g),
                    C = {},
                    L = null;
                return d.length && (L = d.reduce(function(t, e) {
                    var n = f[e],
                        r = parseFloat(o[e]) || 0,
                        i = (parseFloat(n) - r) * N + r;
                    return t[e] = i, t
                }, {})), C.current = L, C.position = R, 1 === R && (C.active = !1, C.complete = !0), (0, i.merge)(t, C)
            }
            return t
        };
    e.ixInstances = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
            e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
            case a:
                return e.payload.ixInstances || Object.freeze({});
            case u:
                return Object.freeze({});
            case c:
                var n = e.payload,
                    r = n.instanceId,
                    o = n.elementId,
                    d = n.actionItem,
                    p = n.eventId,
                    v = n.eventTarget,
                    E = n.eventStateKey,
                    _ = n.actionListId,
                    g = n.groupIndex,
                    O = n.isCarrier,
                    A = n.origin,
                    b = n.destination,
                    w = n.immediate,
                    S = n.verbose,
                    R = n.continuous,
                    N = n.parameterId,
                    C = n.actionGroups,
                    L = n.smoothing,
                    x = n.restingValue,
                    D = n.pluginInstance,
                    P = n.pluginDuration,
                    M = n.instanceDelay,
                    F = d.actionTypeId,
                    j = m(F),
                    G = I(j, F),
                    V = Object.keys(b).filter(function(t) {
                        return null != b[t]
                    }),
                    U = d.config.easing;
                return (0, i.set)(t, r, {
                    id: r,
                    elementId: o,
                    active: !1,
                    position: 0,
                    start: 0,
                    origin: A,
                    destination: b,
                    destinationKeys: V,
                    immediate: w,
                    verbose: S,
                    current: null,
                    actionItem: d,
                    actionTypeId: F,
                    eventId: p,
                    eventTarget: v,
                    eventStateKey: E,
                    actionListId: _,
                    groupIndex: g,
                    renderType: j,
                    isCarrier: O,
                    styleProp: G,
                    continuous: R,
                    parameterId: N,
                    actionGroups: C,
                    smoothing: L,
                    restingValue: x,
                    pluginInstance: D,
                    pluginDuration: P,
                    instanceDelay: M,
                    customEasingFn: Array.isArray(U) && 4 === U.length ? h(U) : void 0
                });
            case s:
                var X = e.payload,
                    k = X.instanceId,
                    W = X.time;
                return (0, i.mergeIn)(t, [k], {
                    active: !0,
                    complete: !1,
                    start: W
                });
            case l:
                var B = e.payload.instanceId;
                if (!t[B]) return t;
                for (var H = {}, Y = Object.keys(t), z = Y.length, K = 0; K < z; K++) {
                    var Q = Y[K];
                    Q !== B && (H[Q] = t[Q])
                }
                return H;
            case f:
                for (var q = t, $ = Object.keys(t), Z = $.length, J = 0; J < Z; J++) {
                    var tt = $[J],
                        et = t[tt],
                        nt = et.continuous ? y : T;
                    q = (0, i.set)(q, tt, nt(et, e))
                }
                return q;
            default:
                return t
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ixParameters = void 0;
    var r = n(3).IX2EngineActionTypes,
        i = r.IX2_RAW_DATA_IMPORTED,
        o = r.IX2_SESSION_STOPPED,
        a = r.IX2_PARAMETER_CHANGED;
    e.ixParameters = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
            case i:
                return e.payload.ixParameters || {};
            case o:
                return {};
            case a:
                var n = e.payload,
                    r = n.key,
                    u = n.value;
                return t[r] = u, t;
            default:
                return t
        }
    }
}, function(t, e) {
    t.exports = function(t, e) {
        if (null == t) return {};
        var n, r, i = {},
            o = Object.keys(t);
        for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
        return i
    }
}, function(t, e, n) {
    var r = n(39),
        i = n(41),
        o = n(10),
        a = n(210),
        u = n(211),
        c = "[object Map]",
        s = "[object Set]";
    t.exports = function(t) {
        if (null == t) return 0;
        if (o(t)) return a(t) ? u(t) : t.length;
        var e = i(t);
        return e == c || e == s ? t.size : r(t).length
    }
}, function(t, e, n) {
    var r = n(9),
        i = n(1),
        o = n(8),
        a = "[object String]";
    t.exports = function(t) {
        return "string" == typeof t || !i(t) && o(t) && r(t) == a
    }
}, function(t, e, n) {
    var r = n(212),
        i = n(213),
        o = n(214);
    t.exports = function(t) {
        return i(t) ? o(t) : r(t)
    }
}, function(t, e, n) {
    var r = n(81)("length");
    t.exports = r
}, function(t, e) {
    var n = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    t.exports = function(t) {
        return n.test(t)
    }
}, function(t, e) {
    var n = "[\\ud800-\\udfff]",
        r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
        i = "\\ud83c[\\udffb-\\udfff]",
        o = "[^\\ud800-\\udfff]",
        a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        c = "(?:" + r + "|" + i + ")" + "?",
        s = "[\\ufe0e\\ufe0f]?" + c + ("(?:\\u200d(?:" + [o, a, u].join("|") + ")[\\ufe0e\\ufe0f]?" + c + ")*"),
        l = "(?:" + [o + r + "?", r, a, u, n].join("|") + ")",
        f = RegExp(i + "(?=" + i + ")|" + l + s, "g");
    t.exports = function(t) {
        for (var e = f.lastIndex = 0; f.test(t);) ++e;
        return e
    }
}, function(t, e, n) {
    var r = n(6),
        i = n(216),
        o = n(217);
    t.exports = function(t, e) {
        return o(t, i(r(e)))
    }
}, function(t, e) {
    var n = "Expected a function";
    t.exports = function(t) {
        if ("function" != typeof t) throw new TypeError(n);
        return function() {
            var e = arguments;
            switch (e.length) {
                case 0:
                    return !t.call(this);
                case 1:
                    return !t.call(this, e[0]);
                case 2:
                    return !t.call(this, e[0], e[1]);
                case 3:
                    return !t.call(this, e[0], e[1], e[2])
            }
            return !t.apply(this, e)
        }
    }
}, function(t, e, n) {
    var r = n(80),
        i = n(6),
        o = n(218),
        a = n(221);
    t.exports = function(t, e) {
        if (null == t) return {};
        var n = r(a(t), function(t) {
            return [t]
        });
        return e = i(e), o(t, n, function(t, n) {
            return e(t, n[0])
        })
    }
}, function(t, e, n) {
    var r = n(42),
        i = n(219),
        o = n(24);
    t.exports = function(t, e, n) {
        for (var a = -1, u = e.length, c = {}; ++a < u;) {
            var s = e[a],
                l = r(t, s);
            n(l, s) && i(c, o(s, t), l)
        }
        return c
    }
}, function(t, e, n) {
    var r = n(220),
        i = n(24),
        o = n(36),
        a = n(5),
        u = n(13);
    t.exports = function(t, e, n, c) {
        if (!a(t)) return t;
        for (var s = -1, l = (e = i(e, t)).length, f = l - 1, d = t; null != d && ++s < l;) {
            var p = u(e[s]),
                v = n;
            if (s != f) {
                var h = d[p];
                void 0 === (v = c ? c(h, p, d) : void 0) && (v = a(h) ? h : o(e[s + 1]) ? [] : {})
            }
            r(d, p, v), d = d[p]
        }
        return t
    }
}, function(t, e, n) {
    var r = n(94),
        i = n(31),
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, n) {
        var a = t[e];
        o.call(t, e) && i(a, n) && (void 0 !== n || e in t) || r(t, e, n)
    }
}, function(t, e, n) {
    var r = n(69),
        i = n(222),
        o = n(224);
    t.exports = function(t) {
        return r(t, o, i)
    }
}, function(t, e, n) {
    var r = n(34),
        i = n(223),
        o = n(70),
        a = n(71),
        u = Object.getOwnPropertySymbols ? function(t) {
            for (var e = []; t;) r(e, o(t)), t = i(t);
            return e
        } : a;
    t.exports = u
}, function(t, e, n) {
    var r = n(74)(Object.getPrototypeOf, Object);
    t.exports = r
}, function(t, e, n) {
    var r = n(72),
        i = n(225),
        o = n(10);
    t.exports = function(t) {
        return o(t) ? r(t, !0) : i(t)
    }
}, function(t, e, n) {
    var r = n(5),
        i = n(40),
        o = n(226),
        a = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        if (!r(t)) return o(t);
        var e = i(t),
            n = [];
        for (var u in t)("constructor" != u || !e && a.call(t, u)) && n.push(u);
        return n
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = [];
        if (null != t)
            for (var n in Object(t)) e.push(n);
        return e
    }
}, function(t, e, n) {
    var r = n(39),
        i = n(41),
        o = n(22),
        a = n(1),
        u = n(10),
        c = n(35),
        s = n(40),
        l = n(37),
        f = "[object Map]",
        d = "[object Set]",
        p = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        if (null == t) return !0;
        if (u(t) && (a(t) || "string" == typeof t || "function" == typeof t.splice || c(t) || l(t) || o(t))) return !t.length;
        var e = i(t);
        if (e == f || e == d) return !t.size;
        if (s(t)) return !r(t).length;
        for (var n in t)
            if (p.call(t, n)) return !1;
        return !0
    }
}, function(t, e, n) {
    var r = n(94),
        i = n(91),
        o = n(6);
    t.exports = function(t, e) {
        var n = {};
        return e = o(e, 3), i(t, function(t, i, o) {
            r(n, i, e(t, i, o))
        }), n
    }
}, function(t, e, n) {
    var r = n(230),
        i = n(90),
        o = n(231),
        a = n(1);
    t.exports = function(t, e) {
        return (a(t) ? r : i)(t, o(e))
    }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t););
        return t
    }
}, function(t, e, n) {
    var r = n(44);
    t.exports = function(t) {
        return "function" == typeof t ? t : r
    }
}, function(t, e, n) {
    var r = n(96),
        i = n(79),
        o = n(45),
        a = n(78);
    t.exports = function(t, e, n) {
        t = a(t), e = i(e);
        var u = t.length,
            c = n = void 0 === n ? u : r(o(n), 0, u);
        return (n -= e.length) >= 0 && t.slice(n, c) == e
    }
}, function(t, e, n) {
    var r = n(234),
        i = n(5),
        o = "Expected a function";
    t.exports = function(t, e, n) {
        var a = !0,
            u = !0;
        if ("function" != typeof t) throw new TypeError(o);
        return i(n) && (a = "leading" in n ? !!n.leading : a, u = "trailing" in n ? !!n.trailing : u), r(t, e, {
            leading: a,
            maxWait: e,
            trailing: u
        })
    }
}, function(t, e, n) {
    var r = n(5),
        i = n(235),
        o = n(46),
        a = "Expected a function",
        u = Math.max,
        c = Math.min;
    t.exports = function(t, e, n) {
        var s, l, f, d, p, v, h = 0,
            E = !1,
            _ = !1,
            g = !0;
        if ("function" != typeof t) throw new TypeError(a);

        function m(e) {
            var n = s,
                r = l;
            return s = l = void 0, h = e, d = t.apply(r, n)
        }

        function I(t) {
            var n = t - v;
            return void 0 === v || n >= e || n < 0 || _ && t - h >= f
        }

        function y() {
            var t = i();
            if (I(t)) return T(t);
            p = setTimeout(y, function(t) {
                var n = e - (t - v);
                return _ ? c(n, f - (t - h)) : n
            }(t))
        }

        function T(t) {
            return p = void 0, g && s ? m(t) : (s = l = void 0, d)
        }

        function O() {
            var t = i(),
                n = I(t);
            if (s = arguments, l = this, v = t, n) {
                if (void 0 === p) return function(t) {
                    return h = t, p = setTimeout(y, e), E ? m(t) : d
                }(v);
                if (_) return clearTimeout(p), p = setTimeout(y, e), m(v)
            }
            return void 0 === p && (p = setTimeout(y, e)), d
        }
        return e = o(e) || 0, r(n) && (E = !!n.leading, f = (_ = "maxWait" in n) ? u(o(n.maxWait) || 0, e) : f, g = "trailing" in n ? !!n.trailing : g), O.cancel = function() {
            void 0 !== p && clearTimeout(p), h = 0, s = v = l = p = void 0
        }, O.flush = function() {
            return void 0 === p ? d : T(i())
        }, O
    }
}, function(t, e, n) {
    var r = n(4);
    t.exports = function() {
        return r.Date.now()
    }
}, function(t, e, n) {
    "use strict";
    var r = n(0)(n(11));
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.setStyle = function(t, e, n) {
        t.style[e] = n
    }, e.getStyle = function(t, e) {
        return t.style[e]
    }, e.getProperty = function(t, e) {
        return t[e]
    }, e.matchSelector = function(t) {
        return function(e) {
            return e[o](t)
        }
    }, e.getQuerySelector = function(t) {
        var e = t.id,
            n = t.selector;
        if (e) {
            var r = e;
            if (-1 !== e.indexOf(u)) {
                var i = e.split(u),
                    o = i[0];
                if (r = i[1], o !== document.documentElement.getAttribute(l)) return null
            }
            return '[data-w-id^="'.concat(r, '"]')
        }
        return n
    }, e.getValidDocument = function(t) {
        if (null == t || t === document.documentElement.getAttribute(l)) return document;
        return null
    }, e.queryDocument = function(t, e) {
        return Array.prototype.slice.call(document.querySelectorAll(e ? t + " " + e : t))
    }, e.elementContains = function(t, e) {
        return t.contains(e)
    }, e.isSiblingNode = function(t, e) {
        return t !== e && t.parentNode === e.parentNode
    }, e.getChildElements = function(t) {
        for (var e = [], n = 0, r = (t || []).length; n < r; n++) {
            var i = t[n].children,
                o = i.length;
            if (o)
                for (var a = 0; a < o; a++) e.push(i[a])
        }
        return e
    }, e.getSiblingElements = function() {
        for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [], n = [], r = 0, i = t.length; r < i; r++) {
            var o = t[r].parentNode;
            if (o && o.children && o.children.length && -1 === n.indexOf(o)) {
                n.push(o);
                for (var a = o.firstElementChild; null != a;) - 1 === t.indexOf(a) && e.push(a), a = a.nextElementSibling
            }
        }
        return e
    }, e.getRefType = function(t) {
        if (null != t && "object" == (0, r.default)(t)) return t instanceof Element ? c : s;
        return null
    }, e.getClosestElement = void 0;
    var i = n(3),
        o = i.IX2BrowserSupport.ELEMENT_MATCHES,
        a = i.IX2EngineConstants,
        u = a.IX2_ID_DELIMITER,
        c = a.HTML_ELEMENT,
        s = a.PLAIN_OBJECT,
        l = a.WF_PAGE;
    var f = Element.prototype.closest ? function(t, e) {
        return document.documentElement.contains(t) ? t.closest(e) : null
    } : function(t, e) {
        if (!document.documentElement.contains(t)) return null;
        var n = t;
        do {
            if (n[o] && n[o](e)) return n;
            n = n.parentNode
        } while (null != n);
        return null
    };
    e.getClosestElement = f
}, function(t, e, n) {
    "use strict";
    var r, i = n(0),
        o = i(n(26)),
        a = i(n(11)),
        u = n(0);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var c, s, l, f = u(n(238)),
        d = u(n(23)),
        p = u(n(257)),
        v = n(93),
        h = n(49),
        E = n(3),
        _ = E.IX2EngineEventTypes,
        g = _.MOUSE_CLICK,
        m = _.MOUSE_SECOND_CLICK,
        I = _.MOUSE_DOWN,
        y = _.MOUSE_UP,
        T = _.MOUSE_OVER,
        O = _.MOUSE_OUT,
        A = _.DROPDOWN_CLOSE,
        b = _.DROPDOWN_OPEN,
        w = _.SLIDER_ACTIVE,
        S = _.SLIDER_INACTIVE,
        R = _.TAB_ACTIVE,
        N = _.TAB_INACTIVE,
        C = _.NAVBAR_CLOSE,
        L = _.NAVBAR_OPEN,
        x = _.MOUSE_MOVE,
        D = _.PAGE_SCROLL_DOWN,
        P = _.SCROLL_INTO_VIEW,
        M = _.COMPONENT_ACTIVE,
        F = _.COMPONENT_INACTIVE,
        j = _.SCROLL_OUT_OF_VIEW,
        G = _.PAGE_SCROLL_UP,
        V = _.SCROLLING_IN_VIEW,
        U = _.PAGE_FINISH,
        X = _.ECOMMERCE_CART_CLOSE,
        k = _.ECOMMERCE_CART_OPEN,
        W = _.PAGE_START,
        B = _.PAGE_SCROLL,
        H = _.ELEMENT,
        Y = _.VIEWPORT,
        z = _.PAGE,
        K = E.IX2EngineConstants.COLON_DELIMITER,
        Q = E.IX2VanillaUtils.getNamespacedParameterId,
        q = function(t) {
            return function(e) {
                return !("object" !== (0, a.default)(e) || !t(e)) || e
            }
        },
        $ = q(function(t) {
            return t.element === t.nativeEvent.target
        }),
        Z = q(function(t) {
            var e = t.element,
                n = t.nativeEvent;
            return e.contains(n.target)
        }),
        J = (0, f.default)([$, Z]),
        tt = function(t, e) {
            if (e) {
                var n = t.getState().ixData.events[e];
                if (n && !ut[n.eventTypeId]) return n
            }
            return null
        },
        et = function(t, e) {
            var n = t.store,
                r = t.event,
                i = t.element,
                o = t.eventStateKey,
                a = r.action,
                u = r.id,
                c = a.config,
                s = c.actionListId,
                l = c.autoStopEventId,
                f = tt(n, l);
            return f && (0, v.stopActionGroup)({
                store: n,
                eventId: l,
                eventTarget: i,
                eventStateKey: l + K + o.split(K)[1],
                actionListId: (0, d.default)(f, "action.config.actionListId")
            }), (0, v.stopActionGroup)({
                store: n,
                eventId: u,
                eventTarget: i,
                eventStateKey: o,
                actionListId: s
            }), (0, v.startActionGroup)({
                store: n,
                eventId: u,
                eventTarget: i,
                eventStateKey: o,
                actionListId: s
            }), e
        },
        nt = function(t, e) {
            return function(n, r) {
                return !0 === t(n, r) ? e(n, r) : r
            }
        },
        rt = {
            handler: nt(J, et)
        },
        it = Object.assign({}, rt, {
            types: [M, F].join(" ")
        }),
        ot = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }],
        at = {
            types: ot
        },
        ut = {
            PAGE_START: W,
            PAGE_FINISH: U
        },
        ct = (c = void 0 !== window.pageXOffset, s = "CSS1Compat" === document.compatMode ? document.documentElement : document.body, function() {
            return {
                scrollLeft: c ? window.pageXOffset : s.scrollLeft,
                scrollTop: c ? window.pageYOffset : s.scrollTop,
                stiffScrollTop: (0, p.default)(c ? window.pageYOffset : s.scrollTop, 0, s.scrollHeight - window.innerHeight),
                scrollWidth: s.scrollWidth,
                scrollHeight: s.scrollHeight,
                clientWidth: s.clientWidth,
                clientHeight: s.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            }
        }),
        st = function(t) {
            var e = t.element,
                n = t.nativeEvent,
                r = n.type,
                i = n.target,
                o = n.relatedTarget,
                a = e.contains(i);
            if ("mouseover" === r && a) return !0;
            var u = e.contains(o);
            return !("mouseout" !== r || !a || !u)
        },
        lt = function(t) {
            var e, n, r = t.element,
                i = t.event.config,
                o = ct(),
                a = o.clientWidth,
                u = o.clientHeight,
                c = i.scrollOffsetValue,
                s = "PX" === i.scrollOffsetUnit ? c : u * (c || 0) / 100;
            return e = r.getBoundingClientRect(), n = {
                left: 0,
                top: s,
                right: a,
                bottom: u - s
            }, !(e.left > n.right || e.right < n.left || e.top > n.bottom || e.bottom < n.top)
        },
        ft = function(t) {
            return function(e, n) {
                var r = e.nativeEvent.type,
                    i = -1 !== [M, F].indexOf(r) ? r === M : n.isActive,
                    o = Object.assign({}, n, {
                        isActive: i
                    });
                return n && o.isActive === n.isActive ? o : t(e, o) || o
            }
        },
        dt = function(t) {
            return function(e, n) {
                var r = {
                    elementHovered: st(e)
                };
                return (n ? r.elementHovered !== n.elementHovered : r.elementHovered) && t(e, r) || r
            }
        },
        pt = function(t) {
            return function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = ct(),
                    i = r.stiffScrollTop,
                    o = r.scrollHeight,
                    a = r.innerHeight,
                    u = e.event,
                    c = u.config,
                    s = u.eventTypeId,
                    l = c.scrollOffsetValue,
                    f = "PX" === c.scrollOffsetUnit,
                    d = o - a,
                    p = Number((i / d).toFixed(2));
                if (n && n.percentTop === p) return n;
                var v, h, E = (f ? l : a * (l || 0) / 100) / d,
                    _ = 0;
                n && (v = p > n.percentTop, _ = (h = n.scrollingDown !== v) ? p : n.anchorTop);
                var g = s === D ? p >= _ + E : p <= _ - E,
                    m = Object.assign({}, n, {
                        percentTop: p,
                        inBounds: g,
                        anchorTop: _,
                        scrollingDown: v
                    });
                return n && g && (h || m.inBounds !== n.inBounds) && t(e, m) || m
            }
        },
        vt = function(t) {
            return function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        clickCount: 0
                    },
                    r = {
                        clickCount: n.clickCount % 2 + 1
                    };
                return r.clickCount !== n.clickCount && t(e, r) || r
            }
        },
        ht = function() {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            return Object.assign({}, it, {
                handler: nt(t ? J : $, ft(function(t, e) {
                    return e.isActive ? rt.handler(t, e) : e
                }))
            })
        },
        Et = function() {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            return Object.assign({}, it, {
                handler: nt(t ? J : $, ft(function(t, e) {
                    return e.isActive ? e : rt.handler(t, e)
                }))
            })
        },
        _t = Object.assign({}, at, {
            handler: (l = function(t, e) {
                var n = e.elementVisible,
                    r = t.event;
                return !t.store.getState().ixData.events[r.action.config.autoStopEventId] && e.triggered ? e : r.eventTypeId === P === n ? (et(t), Object.assign({}, e, {
                    triggered: !0
                })) : e
            }, function(t, e) {
                var n = Object.assign({}, e, {
                    elementVisible: lt(t)
                });
                return (e ? n.elementVisible !== e.elementVisible : n.elementVisible) && l(t, n) || n
            })
        }),
        gt = (r = {}, (0, o.default)(r, w, ht()), (0, o.default)(r, S, Et()), (0, o.default)(r, b, ht()), (0, o.default)(r, A, Et()), (0, o.default)(r, L, ht(!1)), (0, o.default)(r, C, Et(!1)), (0, o.default)(r, R, ht()), (0, o.default)(r, N, Et()), (0, o.default)(r, k, {
            types: "ecommerce-cart-open",
            handler: nt(J, et)
        }), (0, o.default)(r, X, {
            types: "ecommerce-cart-close",
            handler: nt(J, et)
        }), (0, o.default)(r, g, {
            types: "click",
            handler: nt(J, vt(function(t, e) {
                var n, r, i, o = e.clickCount;
                r = (n = t).store, i = n.event.action.config.autoStopEventId, Boolean(tt(r, i)) ? 1 === o && et(t) : et(t)
            }))
        }), (0, o.default)(r, m, {
            types: "click",
            handler: nt(J, vt(function(t, e) {
                2 === e.clickCount && et(t)
            }))
        }), (0, o.default)(r, I, Object.assign({}, rt, {
            types: "mousedown"
        })), (0, o.default)(r, y, Object.assign({}, rt, {
            types: "mouseup"
        })), (0, o.default)(r, T, {
            types: "mouseover mouseout",
            handler: nt(J, dt(function(t, e) {
                e.elementHovered && et(t)
            }))
        }), (0, o.default)(r, O, {
            types: "mouseover mouseout",
            handler: nt(J, dt(function(t, e) {
                e.elementHovered || et(t)
            }))
        }), (0, o.default)(r, x, {
            types: "mousemove mouseout scroll",
            handler: function(t) {
                var e = t.store,
                    n = t.element,
                    r = t.eventConfig,
                    i = t.nativeEvent,
                    o = t.eventStateKey,
                    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0
                    },
                    u = r.basedOn,
                    c = r.selectedAxis,
                    s = r.continuousParameterGroupId,
                    l = r.reverse,
                    f = r.restingState,
                    d = void 0 === f ? 0 : f,
                    p = i.clientX,
                    v = void 0 === p ? a.clientX : p,
                    E = i.clientY,
                    _ = void 0 === E ? a.clientY : E,
                    g = i.pageX,
                    m = void 0 === g ? a.pageX : g,
                    I = i.pageY,
                    y = void 0 === I ? a.pageY : I,
                    T = "X_AXIS" === c,
                    O = "mouseout" === i.type,
                    A = d / 100,
                    b = s,
                    w = !1;
                switch (u) {
                    case Y:
                        A = T ? Math.min(v, window.innerWidth) / window.innerWidth : Math.min(_, window.innerHeight) / window.innerHeight;
                        break;
                    case z:
                        var S = ct(),
                            R = S.scrollLeft,
                            N = S.scrollTop,
                            C = S.scrollWidth,
                            L = S.scrollHeight;
                        A = T ? Math.min(R + m, C) / C : Math.min(N + y, L) / L;
                        break;
                    case H:
                    default:
                        b = Q(o, s);
                        var x = 0 === i.type.indexOf("mouse");
                        if (x && !0 !== J({
                                element: n,
                                nativeEvent: i
                            })) break;
                        var D = n.getBoundingClientRect(),
                            P = D.left,
                            M = D.top,
                            F = D.width,
                            j = D.height;
                        if (!x && ! function(t, e) {
                                return t.left > e.left && t.left < e.right && t.top > e.top && t.top < e.bottom
                            }({
                                left: v,
                                top: _
                            }, D)) break;
                        w = !0, A = T ? (v - P) / F : (_ - M) / j
                }
                return O && (A > .95 || A < .05) && (A = Math.round(A)), (u !== H || w || w !== a.elementHovered) && (A = l ? 1 - A : A, e.dispatch((0, h.parameterChanged)(b, A))), {
                    elementHovered: w,
                    clientX: v,
                    clientY: _,
                    pageX: m,
                    pageY: y
                }
            }
        }), (0, o.default)(r, B, {
            types: ot,
            handler: function(t) {
                var e = t.store,
                    n = t.eventConfig,
                    r = n.continuousParameterGroupId,
                    i = n.reverse,
                    o = ct(),
                    a = o.scrollTop / (o.scrollHeight - o.clientHeight);
                a = i ? 1 - a : a, e.dispatch((0, h.parameterChanged)(r, a))
            }
        }), (0, o.default)(r, V, {
            types: ot,
            handler: function(t) {
                var e = t.element,
                    n = t.store,
                    r = t.eventConfig,
                    i = t.eventStateKey,
                    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        scrollPercent: 0
                    },
                    a = ct(),
                    u = a.scrollLeft,
                    c = a.scrollTop,
                    s = a.scrollWidth,
                    l = a.scrollHeight,
                    f = a.clientHeight,
                    d = r.basedOn,
                    p = r.selectedAxis,
                    v = r.continuousParameterGroupId,
                    E = r.startsEntering,
                    _ = r.startsExiting,
                    g = r.addEndOffset,
                    m = r.addStartOffset,
                    I = r.addOffsetValue,
                    y = void 0 === I ? 0 : I,
                    T = r.endOffsetValue,
                    O = void 0 === T ? 0 : T;
                if (d === Y) {
                    var A = "X_AXIS" === p ? u / s : c / l;
                    return A !== o.scrollPercent && n.dispatch((0, h.parameterChanged)(v, A)), {
                        scrollPercent: A
                    }
                }
                var b = Q(i, v),
                    w = e.getBoundingClientRect(),
                    S = (m ? y : 0) / 100,
                    R = (g ? O : 0) / 100;
                S = E ? S : 1 - S, R = _ ? R : 1 - R;
                var N = w.top + Math.min(w.height * S, f),
                    C = w.top + w.height * R - N,
                    L = Math.min(f + C, l),
                    x = Math.min(Math.max(0, f - N), L) / L;
                return x !== o.scrollPercent && n.dispatch((0, h.parameterChanged)(b, x)), {
                    scrollPercent: x
                }
            }
        }), (0, o.default)(r, P, _t), (0, o.default)(r, j, _t), (0, o.default)(r, D, Object.assign({}, at, {
            handler: pt(function(t, e) {
                e.scrollingDown && et(t)
            })
        })), (0, o.default)(r, G, Object.assign({}, at, {
            handler: pt(function(t, e) {
                e.scrollingDown || et(t)
            })
        })), (0, o.default)(r, U, {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: nt($, function(t) {
                return function(e, n) {
                    var r = {
                        finished: "complete" === document.readyState
                    };
                    return !r.finished || n && n.finshed || t(e), r
                }
            }(et))
        }), (0, o.default)(r, W, {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: nt($, function(t) {
                return function(e, n) {
                    return n || t(e), {
                        started: !0
                    }
                }
            }(et))
        }), r);
    e.default = gt
}, function(t, e, n) {
    var r = n(239)();
    t.exports = r
}, function(t, e, n) {
    var r = n(50),
        i = n(240),
        o = n(98),
        a = n(99),
        u = n(1),
        c = n(253),
        s = "Expected a function",
        l = 8,
        f = 32,
        d = 128,
        p = 256;
    t.exports = function(t) {
        return i(function(e) {
            var n = e.length,
                i = n,
                v = r.prototype.thru;
            for (t && e.reverse(); i--;) {
                var h = e[i];
                if ("function" != typeof h) throw new TypeError(s);
                if (v && !E && "wrapper" == a(h)) var E = new r([], !0)
            }
            for (i = E ? i : n; ++i < n;) {
                h = e[i];
                var _ = a(h),
                    g = "wrapper" == _ ? o(h) : void 0;
                E = g && c(g[0]) && g[1] == (d | l | f | p) && !g[4].length && 1 == g[9] ? E[a(g[0])].apply(E, g[3]) : 1 == h.length && c(h) ? E[_]() : E.thru(h)
            }
            return function() {
                var t = arguments,
                    r = t[0];
                if (E && 1 == t.length && u(r)) return E.plant(r).value();
                for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n;) o = e[i].call(this, o);
                return o
            }
        })
    }
}, function(t, e, n) {
    var r = n(241),
        i = n(244),
        o = n(246);
    t.exports = function(t) {
        return o(i(t, void 0, r), t + "")
    }
}, function(t, e, n) {
    var r = n(242);
    t.exports = function(t) {
        return null != t && t.length ? r(t, 1) : []
    }
}, function(t, e, n) {
    var r = n(34),
        i = n(243);
    t.exports = function t(e, n, o, a, u) {
        var c = -1,
            s = e.length;
        for (o || (o = i), u || (u = []); ++c < s;) {
            var l = e[c];
            n > 0 && o(l) ? n > 1 ? t(l, n - 1, o, a, u) : r(u, l) : a || (u[u.length] = l)
        }
        return u
    }
}, function(t, e, n) {
    var r = n(12),
        i = n(22),
        o = n(1),
        a = r ? r.isConcatSpreadable : void 0;
    t.exports = function(t) {
        return o(t) || i(t) || !!(a && t && t[a])
    }
}, function(t, e, n) {
    var r = n(245),
        i = Math.max;
    t.exports = function(t, e, n) {
        return e = i(void 0 === e ? t.length - 1 : e, 0),
            function() {
                for (var o = arguments, a = -1, u = i(o.length - e, 0), c = Array(u); ++a < u;) c[a] = o[e + a];
                a = -1;
                for (var s = Array(e + 1); ++a < e;) s[a] = o[a];
                return s[e] = n(c), r(t, this, s)
            }
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        switch (n.length) {
            case 0:
                return t.call(e);
            case 1:
                return t.call(e, n[0]);
            case 2:
                return t.call(e, n[0], n[1]);
            case 3:
                return t.call(e, n[0], n[1], n[2])
        }
        return t.apply(e, n)
    }
}, function(t, e, n) {
    var r = n(247),
        i = n(249)(r);
    t.exports = i
}, function(t, e, n) {
    var r = n(248),
        i = n(95),
        o = n(44),
        a = i ? function(t, e) {
            return i(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: r(e),
                writable: !0
            })
        } : o;
    t.exports = a
}, function(t, e) {
    t.exports = function(t) {
        return function() {
            return t
        }
    }
}, function(t, e) {
    var n = 800,
        r = 16,
        i = Date.now;
    t.exports = function(t) {
        var e = 0,
            o = 0;
        return function() {
            var a = i(),
                u = r - (a - o);
            if (o = a, u > 0) {
                if (++e >= n) return arguments[0]
            } else e = 0;
            return t.apply(void 0, arguments)
        }
    }
}, function(t, e, n) {
    var r = n(75),
        i = r && new r;
    t.exports = i
}, function(t, e) {
    t.exports = function() {}
}, function(t, e) {
    t.exports = {}
}, function(t, e, n) {
    var r = n(52),
        i = n(98),
        o = n(99),
        a = n(254);
    t.exports = function(t) {
        var e = o(t),
            n = a[e];
        if ("function" != typeof n || !(e in r.prototype)) return !1;
        if (t === n) return !0;
        var u = i(n);
        return !!u && t === u[0]
    }
}, function(t, e, n) {
    var r = n(52),
        i = n(50),
        o = n(51),
        a = n(1),
        u = n(8),
        c = n(255),
        s = Object.prototype.hasOwnProperty;

    function l(t) {
        if (u(t) && !a(t) && !(t instanceof r)) {
            if (t instanceof i) return t;
            if (s.call(t, "__wrapped__")) return c(t)
        }
        return new i(t)
    }
    l.prototype = o.prototype, l.prototype.constructor = l, t.exports = l
}, function(t, e, n) {
    var r = n(52),
        i = n(50),
        o = n(256);
    t.exports = function(t) {
        if (t instanceof r) return t.clone();
        var e = new i(t.__wrapped__, t.__chain__);
        return e.__actions__ = o(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e
    }
}, function(t, e) {
    t.exports = function(t, e) {
        var n = -1,
            r = t.length;
        for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
        return e
    }
}, function(t, e, n) {
    var r = n(96),
        i = n(46);
    t.exports = function(t, e, n) {
        return void 0 === n && (n = e, e = void 0), void 0 !== n && (n = (n = i(n)) == n ? n : 0), void 0 !== e && (e = (e = i(e)) == e ? e : 0), r(i(t), e, n)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(2);
    r.define("links", t.exports = function(t, e) {
        var n, i, o, a = {},
            u = t(window),
            c = r.env(),
            s = window.location,
            l = document.createElement("a"),
            f = "w--current",
            d = /index\.(html|php)$/,
            p = /\/$/;

        function v(e) {
            var r = n && e.getAttribute("href-disabled") || e.getAttribute("href");
            if (l.href = r, !(r.indexOf(":") >= 0)) {
                var a = t(e);
                if (l.hash.length > 1 && l.host + l.pathname === s.host + s.pathname) {
                    if (!/^#[a-zA-Z0-9\-\_]+$/.test(l.hash)) return;
                    var u = t(l.hash);
                    u.length && i.push({
                        link: a,
                        sec: u,
                        active: !1
                    })
                } else if ("#" !== r && "" !== r) {
                    var c = l.href === s.href || r === o || d.test(r) && p.test(o);
                    E(a, f, c)
                }
            }
        }

        function h() {
            var t = u.scrollTop(),
                n = u.height();
            e.each(i, function(e) {
                var r = e.link,
                    i = e.sec,
                    o = i.offset().top,
                    a = i.outerHeight(),
                    u = .5 * n,
                    c = i.is(":visible") && o + a - u >= t && o + u <= t + n;
                e.active !== c && (e.active = c, E(r, f, c))
            })
        }

        function E(t, e, n) {
            var r = t.hasClass(e);
            n && r || (n || r) && (n ? t.addClass(e) : t.removeClass(e))
        }
        return a.ready = a.design = a.preview = function() {
            n = c && r.env("design"), o = r.env("slug") || s.pathname || "", r.scroll.off(h), i = [];
            for (var t = document.links, e = 0; e < t.length; ++e) v(t[e]);
            i.length && (r.scroll.on(h), h())
        }, a
    })
}, function(t, e, n) {
    "use strict";
    var r = n(2);
    r.define("scroll", t.exports = function(t) {
        var e, n = t(document),
            i = window,
            o = i.location,
            a = function() {
                try {
                    return Boolean(i.frameElement)
                } catch (t) {
                    return !0
                }
            }() ? null : i.history,
            u = /^[a-zA-Z0-9][\w:.-]*$/,
            c = 'a[href="#"]',
            s = 'a[href*="#"]:not(.w-tab-link):not(' + c + ")";

        function l(n) {
            if (!(r.env("design") || window.$.mobile && t(n.currentTarget).hasClass("ui-link"))) {
                var c = this.href.split("#"),
                    s = c[0] === e ? c[1] : null;
                s && function(e, n) {
                    if (!u.test(e)) return;
                    var c = t("#" + e);
                    if (!c.length) return;
                    n && (n.preventDefault(), n.stopPropagation());
                    if (o.hash !== e && a && a.pushState && (!r.env.chrome || "file:" !== o.protocol)) {
                        var s = a.state && a.state.hash;
                        s !== e && a.pushState({
                            hash: e
                        }, "", "#" + e)
                    }
                    var l = r.env("editor") ? ".w-editor-body" : "body",
                        f = t("header, " + l + " > .header, " + l + " > .w-nav:not([data-no-scroll])"),
                        d = "fixed" === f.css("position") ? f.outerHeight() : 0;
                    i.setTimeout(function() {
                        ! function(e, n) {
                            var r = t(i).scrollTop(),
                                o = e.offset().top - n;
                            if ("mid" === e.data("scroll")) {
                                var a = t(i).height() - n,
                                    u = e.outerHeight();
                                u < a && (o -= Math.round((a - u) / 2))
                            }
                            var c = 1;
                            t("body").add(e).each(function() {
                                var e = parseFloat(t(this).attr("data-scroll-time"), 10);
                                !isNaN(e) && (0 === e || e > 0) && (c = e)
                            }), Date.now || (Date.now = function() {
                                return (new Date).getTime()
                            });
                            var s = Date.now(),
                                l = i.requestAnimationFrame || i.mozRequestAnimationFrame || i.webkitRequestAnimationFrame || function(t) {
                                    i.setTimeout(t, 15)
                                },
                                f = (472.143 * Math.log(Math.abs(r - o) + 125) - 2e3) * c;
                            ! function t() {
                                var e = Date.now() - s;
                                i.scroll(0, function(t, e, n, r) {
                                    if (n > r) return e;
                                    return t + (e - t) * (i = n / r, i < .5 ? 4 * i * i * i : (i - 1) * (2 * i - 2) * (2 * i - 2) + 1);
                                    var i
                                }(r, o, e, f)), e <= f && l(t)
                            }()
                        }(c, d)
                    }, n ? 0 : 300)
                }(s, n)
            }
        }
        return {
            ready: function() {
                e = o.href.split("#")[0], n.on("click", s, l), n.on("click", c, function(t) {
                    t.preventDefault()
                })
            }
        }
    })
}, function(t, e, n) {
    "use strict";
    n(2).define("touch", t.exports = function(t) {
        var e = {},
            n = window.getSelection;

        function r(e) {
            var r, i, o = !1,
                a = !1,
                u = Math.min(Math.round(.04 * window.innerWidth), 40);

            function c(t) {
                var e = t.touches;
                e && e.length > 1 || (o = !0, e ? (a = !0, r = e[0].clientX) : r = t.clientX, i = r)
            }

            function s(e) {
                if (o) {
                    if (a && "mousemove" === e.type) return e.preventDefault(), void e.stopPropagation();
                    var r = e.touches,
                        c = r ? r[0].clientX : e.clientX,
                        s = c - i;
                    i = c, Math.abs(s) > u && n && "" === String(n()) && (! function(e, n, r) {
                        var i = t.Event(e, {
                            originalEvent: n
                        });
                        t(n.target).trigger(i, r)
                    }("swipe", e, {
                        direction: s > 0 ? "right" : "left"
                    }), f())
                }
            }

            function l(t) {
                if (o) return o = !1, a && "mouseup" === t.type ? (t.preventDefault(), t.stopPropagation(), void(a = !1)) : void 0
            }

            function f() {
                o = !1
            }
            e.addEventListener("touchstart", c, !1), e.addEventListener("touchmove", s, !1), e.addEventListener("touchend", l, !1), e.addEventListener("touchcancel", f, !1), e.addEventListener("mousedown", c, !1), e.addEventListener("mousemove", s, !1), e.addEventListener("mouseup", l, !1), e.addEventListener("mouseout", f, !1), this.destroy = function() {
                e.removeEventListener("touchstart", c, !1), e.removeEventListener("touchmove", s, !1), e.removeEventListener("touchend", l, !1), e.removeEventListener("touchcancel", f, !1), e.removeEventListener("mousedown", c, !1), e.removeEventListener("mousemove", s, !1), e.removeEventListener("mouseup", l, !1), e.removeEventListener("mouseout", f, !1), e = null
            }
        }
        return t.event.special.tap = {
            bindType: "click",
            delegateType: "click"
        }, e.init = function(e) {
            return (e = "string" == typeof e ? t(e).get(0) : e) ? new r(e) : null
        }, e.instance = e.init(document), e
    })
}, function(t, e, n) {
    "use strict";
    var r = n(0)(n(262)),
        i = n(2);
    i.define("forms", t.exports = function(t, e) {
        var n, o, a, u, c, s = {},
            l = t(document),
            f = window.location,
            d = window.XDomainRequest && !window.atob,
            p = ".w-form",
            v = /e(-)?mail/i,
            h = /^\S+@\S+$/,
            E = window.alert,
            _ = i.env(),
            g = /list-manage[1-9]?.com/i,
            m = e.debounce(function() {
                E("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
            }, 100);

        function I(e, n) {
            var r = t(n),
                i = t.data(n, p);
            i || (i = t.data(n, p, {
                form: r
            })), y(i);
            var a = r.closest("div.w-form");
            i.done = a.find("> .w-form-done"), i.fail = a.find("> .w-form-fail"), i.fileUploads = a.find(".w-file-upload"), i.fileUploads.each(function(e) {
                ! function(e, n) {
                    if (!n.fileUploads || !n.fileUploads[e]) return;
                    var r, i = t(n.fileUploads[e]),
                        o = i.find("> .w-file-upload-default"),
                        a = i.find("> .w-file-upload-uploading"),
                        u = i.find("> .w-file-upload-success"),
                        s = i.find("> .w-file-upload-error"),
                        l = o.find(".w-file-upload-input"),
                        f = o.find(".w-file-upload-label"),
                        d = f.children(),
                        p = s.find(".w-file-upload-error-msg"),
                        v = u.find(".w-file-upload-file"),
                        h = u.find(".w-file-remove-link"),
                        E = v.find(".w-file-upload-file-name"),
                        g = p.attr("data-w-size-error"),
                        m = p.attr("data-w-type-error"),
                        I = p.attr("data-w-generic-error");
                    if (_) l.on("click", function(t) {
                        t.preventDefault()
                    }), f.on("click", function(t) {
                        t.preventDefault()
                    }), d.on("click", function(t) {
                        t.preventDefault()
                    });
                    else {
                        h.on("click", function() {
                            l.removeAttr("data-value"), l.val(""), E.html(""), o.toggle(!0), u.toggle(!1)
                        }), l.on("change", function(i) {
                            (r = i.target && i.target.files && i.target.files[0]) && (o.toggle(!1), s.toggle(!1), a.toggle(!0), E.text(r.name), S() || T(n), n.fileUploads[e].uploading = !0, function(e, n) {
                                var r = {
                                    name: e.name,
                                    size: e.size
                                };
                                t.ajax({
                                    type: "POST",
                                    url: c,
                                    data: r,
                                    dataType: "json",
                                    crossDomain: !0
                                }).done(function(t) {
                                    n(null, t)
                                }).fail(function(t) {
                                    n(t)
                                })
                            }(r, b))
                        });
                        var O = f.outerHeight();
                        l.height(O), l.width(1)
                    }

                    function A(t) {
                        var r = t.responseJSON && t.responseJSON.msg,
                            i = I;
                        "string" == typeof r && 0 === r.indexOf("InvalidFileTypeError") ? i = m : "string" == typeof r && 0 === r.indexOf("MaxFileSizeError") && (i = g), p.text(i), l.removeAttr("data-value"), l.val(""), a.toggle(!1), o.toggle(!0), s.toggle(!0), n.fileUploads[e].uploading = !1, S() || y(n)
                    }

                    function b(e, n) {
                        if (e) return A(e);
                        var i = n.fileName,
                            o = n.postData,
                            a = n.fileId,
                            u = n.s3Url;
                        l.attr("data-value", a),
                            function(e, n, r, i, o) {
                                var a = new FormData;
                                for (var u in n) a.append(u, n[u]);
                                a.append("file", r, i), t.ajax({
                                    type: "POST",
                                    url: e,
                                    data: a,
                                    processData: !1,
                                    contentType: !1
                                }).done(function() {
                                    o(null)
                                }).fail(function(t) {
                                    o(t)
                                })
                            }(u, o, r, i, w)
                    }

                    function w(t) {
                        if (t) return A(t);
                        a.toggle(!1), u.css("display", "inline-block"), n.fileUploads[e].uploading = !1, S() || y(n)
                    }

                    function S() {
                        var t = n.fileUploads && n.fileUploads.toArray() || [];
                        return t.some(function(t) {
                            return t.uploading
                        })
                    }
                }(e, i)
            });
            var u = i.action = r.attr("action");
            i.handler = null, i.redirect = r.attr("data-redirect"), g.test(u) ? i.handler = b : u || (o ? i.handler = A : m())
        }

        function y(t) {
            var e = t.btn = t.form.find(':input[type="submit"]');
            t.wait = t.btn.attr("data-wait") || null, t.success = !1, e.prop("disabled", !1), t.label && e.val(t.label)
        }

        function T(t) {
            var e = t.btn,
                n = t.wait;
            e.prop("disabled", !0), n && (t.label = e.val(), e.val(n))
        }

        function O(e, n) {
            var r = null;
            return n = n || {}, e.find(':input:not([type="submit"]):not([type="file"])').each(function(i, o) {
                var a = t(o),
                    u = a.attr("type"),
                    c = a.attr("data-name") || a.attr("name") || "Field " + (i + 1),
                    s = a.val();
                if ("checkbox" === u) s = a.is(":checked");
                else if ("radio" === u) {
                    if (null === n[c] || "string" == typeof n[c]) return;
                    s = e.find('input[name="' + a.attr("name") + '"]:checked').val() || null
                }
                "string" == typeof s && (s = t.trim(s)), n[c] = s, r = r || function(t, e, n, r) {
                    var i = null;
                    "password" === e ? i = "Passwords cannot be submitted." : t.attr("required") ? r ? v.test(t.attr("type")) && (h.test(r) || (i = "Please enter a valid email address for: " + n)) : i = "Please fill out the required field: " + n : "g-recaptcha-response" !== n || r || (i = "Please confirm you’re not a robot.");
                    return i
                }(a, u, c, s)
            }), r
        }

        function A(e) {
            y(e);
            var n = e.form,
                r = {
                    name: n.attr("data-name") || n.attr("name") || "Untitled Form",
                    source: f.href,
                    test: i.env(),
                    fields: {},
                    fileUploads: {},
                    dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(n.html())
                };
            S(e);
            var a = O(n, r.fields);
            if (a) return E(a);
            r.fileUploads = function(e) {
                var n = {};
                return e.find(':input[type="file"]').each(function(e, r) {
                    var i = t(r),
                        o = i.attr("data-name") || i.attr("name") || "File " + (e + 1),
                        a = i.attr("data-value");
                    "string" == typeof a && (a = t.trim(a)), n[o] = a
                }), n
            }(n), T(e), o ? t.ajax({
                url: u,
                type: "POST",
                data: r,
                dataType: "json",
                crossDomain: !0
            }).done(function(t) {
                t && 200 === t.code && (e.success = !0), w(e)
            }).fail(function() {
                w(e)
            }) : w(e)
        }

        function b(n) {
            y(n);
            var r = n.form,
                i = {};
            if (!/^https/.test(f.href) || /^https/.test(n.action)) {
                S(n);
                var o, a = O(r, i);
                if (a) return E(a);
                T(n), e.each(i, function(t, e) {
                    v.test(e) && (i.EMAIL = t), /^((full[ _-]?)?name)$/i.test(e) && (o = t), /^(first[ _-]?name)$/i.test(e) && (i.FNAME = t), /^(last[ _-]?name)$/i.test(e) && (i.LNAME = t)
                }), o && !i.FNAME && (o = o.split(" "), i.FNAME = o[0], i.LNAME = i.LNAME || o[1]);
                var u = n.action.replace("/post?", "/post-json?") + "&c=?",
                    c = u.indexOf("u=") + 2;
                c = u.substring(c, u.indexOf("&", c));
                var s = u.indexOf("id=") + 3;
                s = u.substring(s, u.indexOf("&", s)), i["b_" + c + "_" + s] = "", t.ajax({
                    url: u,
                    data: i,
                    dataType: "jsonp"
                }).done(function(t) {
                    n.success = "success" === t.result || /already/.test(t.msg), n.success || console.info("MailChimp error: " + t.msg), w(n)
                }).fail(function() {
                    w(n)
                })
            } else r.attr("method", "post")
        }

        function w(t) {
            var e = t.form,
                n = t.redirect,
                r = t.success;
            r && n ? i.location(n) : (t.done.toggle(r), t.fail.toggle(!r), e.toggle(!r), y(t))
        }

        function S(t) {
            t.evt && t.evt.preventDefault(), t.evt = null
        }
        return s.ready = s.design = s.preview = function() {
            ! function() {
                o = t("html").attr("data-wf-site"), u = "https://webflow.com/api/v1/form/" + o, d && u.indexOf("https://webflow.com") >= 0 && (u = u.replace("https://webflow.com", "http://formdata.webflow.com"));
                if (c = "".concat(u, "/signFile"), !(n = t(p + " form")).length) return;
                n.each(I)
            }(), _ || a || function() {
                a = !0, l.on("submit", p + " form", function(e) {
                    var n = t.data(this, p);
                    n.handler && (n.evt = e, n.handler(n))
                });
                var e = [
                    ["checkbox", ".w-checkbox-input"],
                    ["radio", ".w-radio-input"]
                ];
                l.on("change", p + ' form input[type="checkbox"]:not(.w-checkbox-input)', function(e) {
                    t(e.target).siblings(".w-checkbox-input").toggleClass("w--redirected-checked")
                }), l.on("change", p + ' form input[type="radio"]', function(e) {
                    t('input[name="'.concat(e.target.name, '"]:not(').concat(".w-checkbox-input", ")")).map(function(e, n) {
                        return t(n).siblings(".w-radio-input").removeClass("w--redirected-checked")
                    });
                    var n = t(e.target);
                    n.hasClass("w-radio-input") || n.siblings(".w-radio-input").addClass("w--redirected-checked")
                }), e.forEach(function(e) {
                    var n = (0, r.default)(e, 2),
                        i = n[0],
                        o = n[1];
                    l.on("focus", p + ' form input[type="'.concat(i, '"]:not(') + o + ")", function(e) {
                        t(e.target).siblings(o).addClass("w--redirected-focus")
                    }), l.on("blur", p + ' form input[type="'.concat(i, '"]:not(') + o + ")", function(e) {
                        t(e.target).siblings(o).removeClass("w--redirected-focus")
                    })
                })
            }()
        }, s
    })
}, function(t, e, n) {
    var r = n(263),
        i = n(264),
        o = n(265);
    t.exports = function(t, e) {
        return r(t) || i(t, e) || o()
    }
}, function(t, e) {
    t.exports = function(t) {
        if (Array.isArray(t)) return t
    }
}, function(t, e) {
    t.exports = function(t, e) {
        var n = [],
            r = !0,
            i = !1,
            o = void 0;
        try {
            for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
        } catch (t) {
            i = !0, o = t
        } finally {
            try {
                r || null == u.return || u.return()
            } finally {
                if (i) throw o
            }
        }
        return n
    }
}, function(t, e) {
    t.exports = function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
}, function(t, e, n) {
    "use strict";
    var r = n(2),
        i = "w-condition-invisible",
        o = "." + i;

    function a(t) {
        return Boolean(t.$el && t.$el.closest(o).length)
    }

    function u(t, e) {
        for (var n = t; n >= 0; n--)
            if (!a(e[n])) return n;
        return -1
    }

    function c(t, e) {
        for (var n = t; n <= e.length - 1; n++)
            if (!a(e[n])) return n;
        return -1
    }

    function s(t, e, n, r) {
        var o, s, l, f = n.tram,
            d = Array.isArray,
            p = "w-lightbox-",
            v = /(^|\s+)/g,
            h = [];

        function E(t, e) {
            return h = d(t) ? t : [t], s || E.build(),
                function(t) {
                    return t.filter(function(t) {
                        return !a(t)
                    })
                }(h).length > 1 && (s.items = s.empty, h.forEach(function(t) {
                    var e = P("thumbnail"),
                        n = P("item").append(e);
                    a(t) && n.addClass(i), s.items = s.items.add(n), S(t.thumbnailUrl || t.url, function(t) {
                        t.prop("width") > t.prop("height") ? L(t, "wide") : L(t, "tall"), e.append(L(t, "thumbnail-image"))
                    })
                }), s.strip.empty().append(s.items), L(s.content, "group")), f(x(s.lightbox, "hide").trigger("focus")).add("opacity .3s").start({
                    opacity: 1
                }), L(s.html, "noscroll"), E.show(e || 0)
        }

        function _(t) {
            return function(e) {
                this === e.target && (e.stopPropagation(), e.preventDefault(), t())
            }
        }
        E.build = function() {
            return E.destroy(), (s = {
                html: n(e.documentElement),
                empty: n()
            }).arrowLeft = P("control left inactive"), s.arrowRight = P("control right inactive"), s.close = P("control close"), s.spinner = P("spinner"), s.strip = P("strip"), l = new R(s.spinner, N("hide")), s.content = P("content").append(s.spinner, s.arrowLeft, s.arrowRight, s.close), s.container = P("container").append(s.content, s.strip), s.lightbox = P("backdrop hide").append(s.container), s.strip.on("click", C("item"), y), s.content.on("swipe", T).on("click", C("left"), g).on("click", C("right"), m).on("click", C("close"), I).on("click", C("image, caption"), m), s.container.on("click", C("view"), I).on("dragstart", C("img"), A), s.lightbox.on("keydown", b).on("focusin", O), n(r).append(s.lightbox.prop("tabIndex", 0)), E
        }, E.destroy = function() {
            s && (x(s.html, "noscroll"), s.lightbox.remove(), s = void 0)
        }, E.show = function(t) {
            if (t !== o) {
                var e = h[t];
                if (!e) return E.hide();
                if (a(e)) {
                    if (t < o) {
                        var r = u(t - 1, h);
                        t = r > -1 ? r : t
                    } else {
                        var i = c(t + 1, h);
                        t = i > -1 ? i : t
                    }
                    e = h[t]
                }
                var d, p, v = o;
                return o = t, l.show(), S(e.html && (d = e.width, p = e.height, "data:image/svg+xml;charset=utf-8," + encodeURI('<svg xmlns="http://www.w3.org/2000/svg" width="' + d + '" height="' + p + '"/>')) || e.url, function(r) {
                    if (t === o) {
                        var i, a, d = P("figure", "figure").append(L(r, "image")),
                            p = P("frame").append(d),
                            E = P("view").append(p);
                        e.html && ((a = (i = n(e.html)).is("iframe")) && i.on("load", _), d.append(L(i, "embed"))), e.caption && d.append(P("caption", "figcaption").text(e.caption)), s.spinner.before(E), a || _()
                    }

                    function _() {
                        var e;
                        if (l.hide(), t === o) {
                            if (D(s.arrowLeft, "inactive", function(t, e) {
                                    return -1 === u(t - 1, e)
                                }(t, h)), D(s.arrowRight, "inactive", function(t, e) {
                                    return -1 === c(t + 1, e)
                                }(t, h)), s.view ? (f(s.view).add("opacity .3s").start({
                                    opacity: 0
                                }).then((e = s.view, function() {
                                    e.remove()
                                })), f(E).add("opacity .3s").add("transform .3s").set({
                                    x: t > v ? "80px" : "-80px"
                                }).start({
                                    opacity: 1,
                                    x: 0
                                })) : E.css("opacity", 1), s.view = E, s.items) {
                                x(s.items, "active");
                                var n = s.items.eq(t);
                                L(n, "active"),
                                    function(t) {
                                        var e, n = t.get(0),
                                            r = s.strip.get(0),
                                            i = n.offsetLeft,
                                            o = n.clientWidth,
                                            a = r.scrollLeft,
                                            u = r.clientWidth,
                                            c = r.scrollWidth - u;
                                        i < a ? e = Math.max(0, i + o - u) : i + o > u + a && (e = Math.min(i, c));
                                        null != e && f(s.strip).add("scroll-left 500ms").start({
                                            "scroll-left": e
                                        })
                                    }(n)
                            }
                        } else E.remove()
                    }
                }), E
            }
        }, E.hide = function() {
            return f(s.lightbox).add("opacity .3s").start({
                opacity: 0
            }).then(w), E
        }, E.prev = function() {
            var t = u(o - 1, h);
            t > -1 && E.show(t)
        }, E.next = function() {
            var t = c(o + 1, h);
            t > -1 && E.show(t)
        };
        var g = _(E.prev),
            m = _(E.next),
            I = _(E.hide),
            y = function(t) {
                var e = n(this).index();
                t.preventDefault(), E.show(e)
            },
            T = function(t, e) {
                t.preventDefault(), "left" === e.direction ? E.next() : "right" === e.direction && E.prev()
            },
            O = function() {
                this.focus()
            };

        function A(t) {
            t.preventDefault()
        }

        function b(t) {
            var e = t.keyCode;
            27 === e ? E.hide() : 37 === e ? E.prev() : 39 === e && E.next()
        }

        function w() {
            s && (s.strip.scrollLeft(0).empty(), x(s.html, "noscroll"), L(s.lightbox, "hide"), s.view && s.view.remove(), x(s.content, "group"), L(s.arrowLeft, "inactive"), L(s.arrowRight, "inactive"), o = s.view = void 0)
        }

        function S(t, e) {
            var n = P("img", "img");
            return n.one("load", function() {
                e(n)
            }), n.attr("src", t), n
        }

        function R(t, e, n) {
            this.$element = t, this.className = e, this.delay = n || 200, this.hide()
        }

        function N(t, e) {
            return t.replace(v, (e ? " ." : " ") + p)
        }

        function C(t) {
            return N(t, !0)
        }

        function L(t, e) {
            return t.addClass(N(e))
        }

        function x(t, e) {
            return t.removeClass(N(e))
        }

        function D(t, e, n) {
            return t.toggleClass(N(e), n)
        }

        function P(t, r) {
            return L(n(e.createElement(r || "div")), t)
        }
        return R.prototype.show = function() {
                var t = this;
                t.timeoutId || (t.timeoutId = setTimeout(function() {
                    t.$element.removeClass(t.className), delete t.timeoutId
                }, t.delay))
            }, R.prototype.hide = function() {
                if (this.timeoutId) return clearTimeout(this.timeoutId), void delete this.timeoutId;
                this.$element.addClass(this.className)
            },
            function() {
                var n = t.navigator.userAgent,
                    r = n.match(/(iPhone|iPad|iPod);[^OS]*OS (\d)/);
                if (n.indexOf("Android ") > -1 && -1 === n.indexOf("Chrome") || r && !(r[2] > 7)) {
                    var i = e.createElement("style");
                    e.head.appendChild(i), t.addEventListener("resize", o, !0), o()
                }

                function o() {
                    var e = t.innerHeight,
                        n = t.innerWidth,
                        r = ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + e + "px}.w-lightbox-view {width:" + n + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .86 * e + "px}.w-lightbox-image {max-width:" + n + "px;max-height:" + e + "px}.w-lightbox-group .w-lightbox-image {max-height:" + .86 * e + "px}.w-lightbox-strip {padding: 0 " + .01 * e + "px}.w-lightbox-item {width:" + .1 * e + "px;padding:" + .02 * e + "px " + .01 * e + "px}.w-lightbox-thumbnail {height:" + .1 * e + "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + .96 * e + "px}.w-lightbox-content {margin-top:" + .02 * e + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .84 * e + "px}.w-lightbox-image {max-width:" + .96 * n + "px;max-height:" + .96 * e + "px}.w-lightbox-group .w-lightbox-image {max-width:" + .823 * n + "px;max-height:" + .84 * e + "px}}";
                    i.textContent = r
                }
            }(), E
    }
    r.define("lightbox", t.exports = function(t) {
        var e, n, i = {},
            o = r.env(),
            a = s(window, document, t, o ? "#lightbox-mountpoint" : "body"),
            u = t(document),
            c = ".w-lightbox";

        function l(t) {
            var e, r, i = t.el.children(".w-json").html();
            if (i) {
                try {
                    i = JSON.parse(i)
                } catch (t) {
                    console.error("Malformed lightbox JSON configuration.", t)
                }! function(t) {
                    t.images && (t.images.forEach(function(t) {
                        t.type = "image"
                    }), t.items = t.images);
                    t.embed && (t.embed.type = "video", t.items = [t.embed]);
                    t.groupId && (t.group = t.groupId)
                }(i), i.items.forEach(function(e) {
                    e.$el = t.el
                }), (e = i.group) ? ((r = n[e]) || (r = n[e] = []), t.items = r, i.items.length && (t.index = r.length, r.push.apply(r, i.items))) : (t.items = i.items, t.index = 0)
            } else t.items = []
        }
        return i.ready = i.design = i.preview = function() {
            e = o && r.env("design"), a.destroy(), n = {}, u.find(c).webflowLightBox()
        }, jQuery.fn.extend({
            webflowLightBox: function() {
                t.each(this, function(n, r) {
                    var i = t.data(r, c);
                    i || (i = t.data(r, c, {
                        el: t(r),
                        mode: "images",
                        images: [],
                        embed: ""
                    })), i.el.off(c), l(i), e ? i.el.on("setting" + c, l.bind(null, i)) : i.el.on("click" + c, function(t) {
                        return function() {
                            t.items.length && a(t.items, t.index || 0)
                        }
                    }(i)).on("click" + c, function(t) {
                        t.preventDefault()
                    })
                })
            }
        }), i
    })
}, function(t, e, n) {
    "use strict";
    var r = n(2),
        i = n(15);
    r.define("navbar", t.exports = function(t, e) {
        var n, o, a, u, c = {},
            s = t.tram,
            l = t(window),
            f = t(document),
            d = r.env(),
            p = '<div class="w-nav-overlay" data-wf-ignore />',
            v = ".w-nav",
            h = "w--open",
            E = "w--nav-dropdown-open",
            _ = "w--nav-dropdown-toggle-open",
            g = "w--nav-dropdown-list-open",
            m = "w--nav-link-open",
            I = i.triggers,
            y = t();

        function T() {
            r.resize.off(O)
        }

        function O() {
            o.each(C)
        }

        function A(n, i) {
            var o = t(i),
                c = t.data(i, v);
            c || (c = t.data(i, v, {
                open: !1,
                el: o,
                config: {}
            })), c.menu = o.find(".w-nav-menu"), c.links = c.menu.find(".w-nav-link"), c.dropdowns = c.menu.find(".w-dropdown"), c.dropdownToggle = c.menu.find(".w-dropdown-toggle"), c.dropdownList = c.menu.find(".w-dropdown-list"), c.button = o.find(".w-nav-button"), c.container = o.find(".w-container"), c.outside = function(e) {
                e.outside && f.off("click" + v, e.outside);
                return function(n) {
                    var r = t(n.target);
                    u && r.closest(".w-editor-bem-EditorOverlay").length || N(e, r)
                }
            }(c), c.el.off(v), c.button.off(v), c.menu.off(v), S(c), a ? (w(c), c.el.on("setting" + v, function(t) {
                return function(n, r) {
                    r = r || {};
                    var i = l.width();
                    S(t), !0 === r.open && P(t, !0), !1 === r.open && F(t, !0), t.open && e.defer(function() {
                        i !== l.width() && R(t)
                    })
                }
            }(c))) : (! function(e) {
                if (e.overlay) return;
                e.overlay = t(p).appendTo(e.el), e.parent = e.menu.parent(), F(e, !0)
            }(c), c.button.on("click" + v, function(t) {
                return e.debounce(function() {
                    t.open ? F(t) : P(t)
                })
            }(c)), c.menu.on("click" + v, "a", function(e) {
                return function(n) {
                    var i = t(this),
                        o = i.attr("href");
                    r.validClick(n.currentTarget) ? o && 0 === o.indexOf("#") && e.open && F(e) : n.preventDefault()
                }
            }(c))), C(n, i)
        }

        function b(e, n) {
            var r = t.data(n, v);
            r && (w(r), t.removeData(n, v))
        }

        function w(t) {
            t.overlay && (F(t, !0), t.overlay.remove(), t.overlay = null)
        }

        function S(t) {
            var n = {},
                r = t.config || {},
                i = n.animation = t.el.attr("data-animation") || "default";
            n.animOver = /^over/.test(i), n.animDirect = /left$/.test(i) ? -1 : 1, r.animation !== i && t.open && e.defer(R, t), n.easing = t.el.attr("data-easing") || "ease", n.easing2 = t.el.attr("data-easing2") || "ease";
            var o = t.el.attr("data-duration");
            n.duration = null != o ? Number(o) : 400, n.docHeight = t.el.attr("data-doc-height"), t.config = n
        }

        function R(t) {
            t.open && (F(t, !0), P(t, !0))
        }
        c.ready = c.design = c.preview = function() {
            if (a = d && r.env("design"), u = r.env("editor"), n = t(document.body), !(o = f.find(v)).length) return;
            o.each(A), T(), r.resize.on(O)
        }, c.destroy = function() {
            y = t(), T(), o && o.length && o.each(b)
        };
        var N = e.debounce(function(t, e) {
            if (t.open) {
                var n = e.closest(".w-nav-menu");
                t.menu.is(n) || F(t)
            }
        });

        function C(e, n) {
            var r = t.data(n, v),
                i = r.collapsed = "none" !== r.button.css("display");
            if (!r.open || i || a || F(r, !0), r.container.length) {
                var o = function(e) {
                    var n = e.container.css(L);
                    "none" === n && (n = "");
                    return function(e, r) {
                        (r = t(r)).css(L, ""), "none" === r.css(L) && r.css(L, n)
                    }
                }(r);
                r.links.each(o), r.dropdowns.each(o)
            }
            r.open && M(r)
        }
        var L = "max-width";

        function x(t, e) {
            e.setAttribute("data-nav-menu-open", "")
        }

        function D(t, e) {
            e.removeAttribute("data-nav-menu-open")
        }

        function P(t, e) {
            if (!t.open) {
                t.open = !0, t.menu.each(x), t.links.addClass(m), t.dropdowns.addClass(E), t.dropdownToggle.addClass(_), t.dropdownList.addClass(g), t.button.addClass(h);
                var n = t.config;
                "none" !== n.animation && s.support.transform || (e = !0);
                var i = M(t),
                    o = t.menu.outerHeight(!0),
                    u = t.menu.outerWidth(!0),
                    c = t.el.height(),
                    l = t.el[0];
                if (C(0, l), I.intro(0, l), r.redraw.up(), a || f.on("click" + v, t.outside), !e) {
                    var d = "transform " + n.duration + "ms " + n.easing;
                    if (t.overlay && (y = t.menu.prev(), t.overlay.show().append(t.menu)), n.animOver) return s(t.menu).add(d).set({
                        x: n.animDirect * u,
                        height: i
                    }).start({
                        x: 0
                    }), void(t.overlay && t.overlay.width(u));
                    var p = c + o;
                    s(t.menu).add(d).set({
                        y: -p
                    }).start({
                        y: 0
                    })
                }
            }
        }

        function M(t) {
            var e = t.config,
                r = e.docHeight ? f.height() : n.height();
            return e.animOver ? t.menu.height(r) : "fixed" !== t.el.css("position") && (r -= t.el.height()), t.overlay && t.overlay.height(r), r
        }

        function F(t, e) {
            if (t.open) {
                t.open = !1, t.button.removeClass(h);
                var n = t.config;
                if (("none" === n.animation || !s.support.transform || n.duration <= 0) && (e = !0), I.outro(0, t.el[0]), f.off("click" + v, t.outside), e) return s(t.menu).stop(), void c();
                var r = "transform " + n.duration + "ms " + n.easing2,
                    i = t.menu.outerHeight(!0),
                    o = t.menu.outerWidth(!0),
                    a = t.el.height();
                if (n.animOver) s(t.menu).add(r).start({
                    x: o * n.animDirect
                }).then(c);
                else {
                    var u = a + i;
                    s(t.menu).add(r).start({
                        y: -u
                    }).then(c)
                }
            }

            function c() {
                t.menu.height(""), s(t.menu).set({
                    x: 0,
                    y: 0
                }), t.menu.each(D), t.links.removeClass(m), t.dropdowns.removeClass(E), t.dropdownToggle.removeClass(_), t.dropdownList.removeClass(g), t.overlay && t.overlay.children().length && (y.length ? t.menu.insertAfter(y) : t.menu.prependTo(t.parent), t.overlay.attr("style", "").hide()), t.el.triggerHandler("w-close")
            }
        }
        return c
    })
}, function(t, e, n) {
    "use strict";
    var r = n(2),
        i = n(15);
    r.define("slider", t.exports = function(t, e) {
        var n, o, a, u, c = {},
            s = t.tram,
            l = t(document),
            f = r.env(),
            d = ".w-slider",
            p = '<div class="w-slider-dot" data-wf-ignore />',
            v = i.triggers;

        function h() {
            (n = l.find(d)).length && (n.each(g), u = null, a || (E(), r.resize.on(_), r.redraw.on(c.redraw)))
        }

        function E() {
            r.resize.off(_), r.redraw.off(c.redraw)
        }

        function _() {
            n.filter(":visible").each(w)
        }

        function g(e, n) {
            var r = t(n),
                i = t.data(n, d);
            if (i || (i = t.data(n, d, {
                    index: 0,
                    depth: 1,
                    el: r,
                    config: {}
                })), i.mask = r.children(".w-slider-mask"), i.left = r.children(".w-slider-arrow-left"), i.right = r.children(".w-slider-arrow-right"), i.nav = r.children(".w-slider-nav"), i.slides = i.mask.children(".w-slide"), i.slides.each(v.reset), u && (i.maskWidth = 0), !s.support.transform) return i.left.hide(), i.right.hide(), i.nav.hide(), void(a = !0);
            i.el.off(d), i.left.off(d), i.right.off(d), i.nav.off(d), m(i), o ? (i.el.on("setting" + d, A(i)), O(i), i.hasTimer = !1) : (i.el.on("swipe" + d, A(i)), i.left.on("click" + d, y(i)), i.right.on("click" + d, T(i)), i.config.autoplay && !i.hasTimer && (i.hasTimer = !0, i.timerCount = 1, function t(e) {
                O(e);
                var n = e.config;
                var r = n.timerMax;
                if (r && e.timerCount++ > r) return;
                e.timerId = window.setTimeout(function() {
                    null == e.timerId || o || (T(e)(), t(e))
                }, n.delay)
            }(i))), i.nav.on("click" + d, "> div", A(i)), f || i.mask.contents().filter(function() {
                return 3 === this.nodeType
            }).remove();
            var c = r.filter(":hidden");
            c.show();
            var l = r.parents(":hidden");
            l.show(), w(e, n), c.css("display", ""), l.css("display", "")
        }

        function m(t) {
            var e = {
                crossOver: 0
            };
            e.animation = t.el.attr("data-animation") || "slide", "outin" === e.animation && (e.animation = "cross", e.crossOver = .5), e.easing = t.el.attr("data-easing") || "ease";
            var n = t.el.attr("data-duration");
            if (e.duration = null != n ? parseInt(n, 10) : 500, I(t.el.attr("data-infinite")) && (e.infinite = !0), I(t.el.attr("data-disable-swipe")) && (e.disableSwipe = !0), I(t.el.attr("data-hide-arrows")) ? e.hideArrows = !0 : t.config.hideArrows && (t.left.show(), t.right.show()), I(t.el.attr("data-autoplay"))) {
                e.autoplay = !0, e.delay = parseInt(t.el.attr("data-delay"), 10) || 2e3, e.timerMax = parseInt(t.el.attr("data-autoplay-limit"), 10);
                var r = "mousedown" + d + " touchstart" + d;
                o || t.el.off(r).one(r, function() {
                    O(t)
                })
            }
            var i = t.right.width();
            e.edge = i ? i + 40 : 100, t.config = e
        }

        function I(t) {
            return "1" === t || "true" === t
        }

        function y(t) {
            return function() {
                b(t, {
                    index: t.index - 1,
                    vector: -1
                })
            }
        }

        function T(t) {
            return function() {
                b(t, {
                    index: t.index + 1,
                    vector: 1
                })
            }
        }

        function O(t) {
            window.clearTimeout(t.timerId), t.timerId = null
        }

        function A(n) {
            return function(i, a) {
                a = a || {};
                var u = n.config;
                if (o && "setting" === i.type) {
                    if ("prev" === a.select) return y(n)();
                    if ("next" === a.select) return T(n)();
                    if (m(n), S(n), null == a.select) return;
                    ! function(n, r) {
                        var i = null;
                        r === n.slides.length && (h(), S(n)), e.each(n.anchors, function(e, n) {
                            t(e.els).each(function(e, o) {
                                t(o).index() === r && (i = n)
                            })
                        }), null != i && b(n, {
                            index: i,
                            immediate: !0
                        })
                    }(n, a.select)
                } else {
                    if ("swipe" === i.type) {
                        if (u.disableSwipe) return;
                        if (r.env("editor")) return;
                        return "left" === a.direction ? T(n)() : "right" === a.direction ? y(n)() : void 0
                    }
                    n.nav.has(i.target).length && b(n, {
                        index: t(i.target).index()
                    })
                }
            }
        }

        function b(e, n) {
            n = n || {};
            var r = e.config,
                i = e.anchors;
            e.previous = e.index;
            var a = n.index,
                c = {};
            a < 0 ? (a = i.length - 1, r.infinite && (c.x = -e.endX, c.from = 0, c.to = i[0].width)) : a >= i.length && (a = 0, r.infinite && (c.x = i[i.length - 1].width, c.from = -i[i.length - 1].x, c.to = c.from - c.x)), e.index = a;
            var l = e.nav.children().eq(e.index).addClass("w-active");
            e.nav.children().not(l).removeClass("w-active"), r.hideArrows && (e.index === i.length - 1 ? e.right.hide() : e.right.show(), 0 === e.index ? e.left.hide() : e.left.show());
            var f = e.offsetX || 0,
                d = e.offsetX = -i[e.index].x,
                p = {
                    x: d,
                    opacity: 1,
                    visibility: ""
                },
                h = t(i[e.index].els),
                E = t(i[e.previous] && i[e.previous].els),
                _ = e.slides.not(h),
                g = r.animation,
                m = r.easing,
                I = Math.round(r.duration),
                y = n.vector || (e.index > e.previous ? 1 : -1),
                T = "opacity " + I + "ms " + m,
                O = "transform " + I + "ms " + m;
            if (o || (h.each(v.intro), _.each(v.outro)), n.immediate && !u) return s(h).set(p), void w();
            if (e.index !== e.previous) {
                if ("cross" === g) {
                    var A = Math.round(I - I * r.crossOver),
                        b = Math.round(I - A);
                    return T = "opacity " + A + "ms " + m, s(E).set({
                        visibility: ""
                    }).add(T).start({
                        opacity: 0
                    }), void s(h).set({
                        visibility: "",
                        x: d,
                        opacity: 0,
                        zIndex: e.depth++
                    }).add(T).wait(b).then({
                        opacity: 1
                    }).then(w)
                }
                if ("fade" === g) return s(E).set({
                    visibility: ""
                }).stop(), void s(h).set({
                    visibility: "",
                    x: d,
                    opacity: 0,
                    zIndex: e.depth++
                }).add(T).start({
                    opacity: 1
                }).then(w);
                if ("over" === g) return p = {
                    x: e.endX
                }, s(E).set({
                    visibility: ""
                }).stop(), void s(h).set({
                    visibility: "",
                    zIndex: e.depth++,
                    x: d + i[e.index].width * y
                }).add(O).start({
                    x: d
                }).then(w);
                r.infinite && c.x ? (s(e.slides.not(E)).set({
                    visibility: "",
                    x: c.x
                }).add(O).start({
                    x: d
                }), s(E).set({
                    visibility: "",
                    x: c.from
                }).add(O).start({
                    x: c.to
                }), e.shifted = E) : (r.infinite && e.shifted && (s(e.shifted).set({
                    visibility: "",
                    x: f
                }), e.shifted = null), s(e.slides).set({
                    visibility: ""
                }).add(O).start({
                    x: d
                }))
            }

            function w() {
                h = t(i[e.index].els), _ = e.slides.not(h), "slide" !== g && (p.visibility = "hidden"), s(_).set(p)
            }
        }

        function w(e, n) {
            var r = t.data(n, d);
            if (r) return function(t) {
                var e = t.mask.width();
                if (t.maskWidth !== e) return t.maskWidth = e, !0;
                return !1
            }(r) ? S(r) : void(o && function(e) {
                var n = 0;
                if (e.slides.each(function(e, r) {
                        n += t(r).outerWidth(!0)
                    }), e.slidesWidth !== n) return e.slidesWidth = n, !0;
                return !1
            }(r) && S(r))
        }

        function S(e) {
            var n = 1,
                r = 0,
                i = 0,
                a = 0,
                u = e.maskWidth,
                c = u - e.config.edge;
            c < 0 && (c = 0), e.anchors = [{
                els: [],
                x: 0,
                width: 0
            }], e.slides.each(function(o, s) {
                i - r > c && (n++, r += u, e.anchors[n - 1] = {
                    els: [],
                    x: i,
                    width: 0
                }), a = t(s).outerWidth(!0), i += a, e.anchors[n - 1].width += a, e.anchors[n - 1].els.push(s)
            }), e.endX = i, o && (e.pages = null), e.nav.length && e.pages !== n && (e.pages = n, function(e) {
                var n, r = [],
                    i = e.el.attr("data-nav-spacing");
                i && (i = parseFloat(i) + "px");
                for (var o = 0; o < e.pages; o++) n = t(p), e.nav.hasClass("w-num") && n.text(o + 1), null != i && n.css({
                    "margin-left": i,
                    "margin-right": i
                }), r.push(n);
                e.nav.empty().append(r)
            }(e));
            var s = e.index;
            s >= n && (s = n - 1), b(e, {
                immediate: !0,
                index: s
            })
        }
        return c.ready = function() {
            o = r.env("design"), h()
        }, c.design = function() {
            o = !0, h()
        }, c.preview = function() {
            o = !1, h()
        }, c.redraw = function() {
            u = !0, h()
        }, c.destroy = E, c
    })
}, function(t, e, n) {
    "use strict";
    var r = n(2),
        i = n(15);
    r.define("tabs", t.exports = function(t) {
        var e, n, o = {},
            a = t.tram,
            u = t(document),
            c = r.env,
            s = c.safari,
            l = c(),
            f = "data-w-tab",
            d = "data-w-pane",
            p = ".w-tabs",
            v = "w--current",
            h = "w--tab-active",
            E = i.triggers,
            _ = !1;

        function g() {
            n = l && r.env("design"), (e = u.find(p)).length && (e.each(y), r.env("preview") && !_ && e.each(I), m(), r.redraw.on(o.redraw))
        }

        function m() {
            r.redraw.off(o.redraw)
        }

        function I(e, n) {
            var r = t.data(n, p);
            r && (r.links && r.links.each(E.reset), r.panes && r.panes.each(E.reset))
        }

        function y(e, r) {
            var i = p.substr(1) + "-" + e,
                o = t(r),
                a = t.data(r, p);
            if (a || (a = t.data(r, p, {
                    el: o,
                    config: {}
                })), a.current = null, a.tabIdentifier = i + "-" + f, a.paneIdentifier = i + "-" + d, a.menu = o.children(".w-tab-menu"), a.links = a.menu.children(".w-tab-link"), a.content = o.children(".w-tab-content"), a.panes = a.content.children(".w-tab-pane"), a.el.off(p), a.links.off(p), a.menu.attr("role", "tablist"), a.links.attr("tabindex", "-1"), function(t) {
                    var e = {};
                    e.easing = t.el.attr("data-easing") || "ease";
                    var n = parseInt(t.el.attr("data-duration-in"), 10);
                    n = e.intro = n == n ? n : 0;
                    var r = parseInt(t.el.attr("data-duration-out"), 10);
                    r = e.outro = r == r ? r : 0, e.immediate = !n && !r, t.config = e
                }(a), !n) {
                a.links.on("click" + p, function(t) {
                    return function(e) {
                        e.preventDefault();
                        var n = e.currentTarget.getAttribute(f);
                        n && T(t, {
                            tab: n
                        })
                    }
                }(a)), a.links.on("keydown" + p, function(t) {
                    return function(e) {
                        var n = function(t) {
                                var e = t.current;
                                return Array.prototype.findIndex.call(t.links, function(t) {
                                    return t.getAttribute(f) === e
                                }, null)
                            }(t),
                            r = e.key,
                            i = {
                                ArrowLeft: n - 1,
                                ArrowUp: n - 1,
                                ArrowRight: n + 1,
                                ArrowDown: n + 1,
                                End: t.links.length - 1,
                                Home: 0
                            };
                        if (r in i) {
                            e.preventDefault();
                            var o = i[r]; - 1 === o && (o = t.links.length - 1), o === t.links.length && (o = 0);
                            var a = t.links[o],
                                u = a.getAttribute(f);
                            u && T(t, {
                                tab: u
                            }), setTimeout(function() {
                                a.focus()
                            }, 10)
                        }
                    }
                }(a));
                var u = a.links.filter("." + v).attr(f);
                u && T(a, {
                    tab: u,
                    immediate: !0
                })
            }
        }

        function T(e, n) {
            n = n || {};
            var i = e.config,
                o = i.easing,
                u = n.tab;
            if (u !== e.current) {
                e.current = u, e.links.each(function(r, o) {
                    var a = t(o);
                    if (n.immediate || i.immediate) {
                        var c = e.panes[r];
                        o.id || (o.id = e.tabIdentifier + "-" + r), c.id || (c.id = e.paneIdentifier + "-" + r), o.href = "#" + c.id, o.setAttribute("role", "tab"), o.setAttribute("aria-controls", c.id), o.setAttribute("aria-selected", "false"), c.setAttribute("role", "tabpanel"), c.setAttribute("aria-labelledby", o.id)
                    }
                    o.getAttribute(f) === u ? a.addClass(v).removeAttr("tabindex").attr({
                        "aria-selected": "true"
                    }).each(E.intro) : a.hasClass(v) && a.removeClass(v).attr({
                        tabindex: "-1",
                        "aria-selected": "false"
                    }).each(E.outro)
                });
                var c = [],
                    l = [];
                e.panes.each(function(e, n) {
                    var r = t(n);
                    n.getAttribute(f) === u ? c.push(n) : r.hasClass(h) && l.push(n)
                });
                var d = t(c),
                    p = t(l);
                if (n.immediate || i.immediate) return d.addClass(h).each(E.intro), p.removeClass(h), void(_ || r.redraw.up());
                p.length && i.outro ? (p.each(E.outro), a(p).add("opacity " + i.outro + "ms " + o, {
                    fallback: s
                }).start({
                    opacity: 0
                }).then(g)) : g()
            }

            function g() {
                if (p.removeClass(h).css({
                        opacity: "",
                        transition: "",
                        transform: "",
                        width: "",
                        height: ""
                    }), d.addClass(h).each(E.intro), r.redraw.up(), !i.intro) return a(d).set({
                    opacity: 1
                });
                a(d).set({
                    opacity: 0
                }).redraw().add("opacity " + i.intro + "ms " + o, {
                    fallback: s
                }).start({
                    opacity: 1
                })
            }
        }
        return o.ready = o.design = o.preview = g, o.redraw = function() {
            _ = !0, g(), _ = !1
        }, o.destroy = function() {
            (e = u.find(p)).length && (e.each(I), m())
        }, o
    })
}]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e": {
            "id": "e",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "ce8e38e9-53a8-e4b9-d1db-1ada30da6624"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1585999393806
        },
        "e-2": {
            "id": "e-2",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "ce8e38e9-53a8-e4b9-d1db-1ada30da6624"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1585999393806
        },
        "e-5": {
            "id": "e-5",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-6"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".nav-link",
                "originalId": "ce8e38e9-53a8-e4b9-d1db-1ada30da6632",
                "appliesTo": "CLASS"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1585999393806
        },
        "e-6": {
            "id": "e-6",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-5"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".nav-link",
                "originalId": "ce8e38e9-53a8-e4b9-d1db-1ada30da6632",
                "appliesTo": "CLASS"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1585999393806
        },
        "e-7": {
            "id": "e-7",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-13"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e886b4f4fbaea6af11b118c|56d298f7-821f-226f-df30-83aeb81b02d3"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1582450542721
        },
        "e-8": {
            "id": "e-8",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-15"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".left-dots",
                "originalId": "5e886b4f4fbaea6af11b118c|56d298f7-821f-226f-df30-83aeb81b03e6",
                "appliesTo": "CLASS"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1575910078468
        },
        "e-9": {
            "id": "e-9",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-14"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e886b4f4fbaea6af11b118c|56d298f7-821f-226f-df30-83aeb81b02a9"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571845675760
        },
        "e-10": {
            "id": "e-10",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-19"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e886b4f4fbaea6af11b118c|56d298f7-821f-226f-df30-83aeb81b032a"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1582810073709
        },
        "e-11": {
            "id": "e-11",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-12"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".navlink.for-button.blue",
                "originalId": "5e886b4f4fbaea6af11b118c|56d298f7-821f-226f-df30-83aeb81b02c5",
                "appliesTo": "CLASS"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1582450542236
        },
        "e-12": {
            "id": "e-12",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-11"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".navlink.for-button.blue",
                "originalId": "5e886b4f4fbaea6af11b118c|56d298f7-821f-226f-df30-83aeb81b02c5",
                "appliesTo": "CLASS"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1582450542236
        },
        "e-13": {
            "id": "e-13",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-7"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e886b4f4fbaea6af11b118c|56d298f7-821f-226f-df30-83aeb81b02d3"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1582450542721
        },
        "e-14": {
            "id": "e-14",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-9"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e886b4f4fbaea6af11b118c|56d298f7-821f-226f-df30-83aeb81b02a9"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1571845675760
        },
        "e-15": {
            "id": "e-15",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-9",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-8"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".left-dots",
                "originalId": "5e886b4f4fbaea6af11b118c|56d298f7-821f-226f-df30-83aeb81b03e6",
                "appliesTo": "CLASS"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1575910078467
        },
        "e-16": {
            "id": "e-16",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e886b4f4fbaea6af11b118c|56d298f7-821f-226f-df30-83aeb81b0280"
            },
            "config": [{
                "continuousParameterGroupId": "a-5-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1582363784395
        },
        "e-17": {
            "id": "e-17",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-18"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e886b4f4fbaea6af11b118c|56d298f7-821f-226f-df30-83aeb81b02b7"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1582450540973
        },
        "e-18": {
            "id": "e-18",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-17"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e886b4f4fbaea6af11b118c|56d298f7-821f-226f-df30-83aeb81b02b7"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1582450540973
        },
        "e-20": {
            "id": "e-20",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-21"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".project-wrapper",
                "originalId": "5e886b4f4fbaea6af11b118c|142196a6-3167-24bc-1445-480196e4bfce",
                "appliesTo": "CLASS"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1582810372446
        },
        "e-21": {
            "id": "e-21",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-20"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".project-wrapper",
                "originalId": "5e886b4f4fbaea6af11b118c|142196a6-3167-24bc-1445-480196e4bfce",
                "appliesTo": "CLASS"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1582810372448
        },
        "e-22": {
            "id": "e-22",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-23"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e886b4f4fbaea6af11b118c"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1585999938095
        },
        "e-23": {
            "id": "e-23",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-22"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e886b4f4fbaea6af11b118c"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1585999938096
        },
        "e-24": {
            "id": "e-24",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e886b4f4fbaea6af11b118c"
            },
            "config": [{
                "continuousParameterGroupId": "a-15-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1586000088433
        },
        "e-25": {
            "id": "e-25",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-26"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".instagram-photo",
                "originalId": "1871b141-f6d2-1a74-5a5f-4f3b43583613",
                "appliesTo": "CLASS"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586000598679
        },
        "e-26": {
            "id": "e-26",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-25"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".instagram-photo",
                "originalId": "1871b141-f6d2-1a74-5a5f-4f3b43583613",
                "appliesTo": "CLASS"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586000598679
        },
        "e-27": {
            "id": "e-27",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e886b63bebe7d735afd80f7|c365c615-5522-f484-e58a-6508156f1018"
            },
            "config": [{
                "continuousParameterGroupId": "a-5-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1586000963622
        },
        "e-28": {
            "id": "e-28",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-29"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e886b63bebe7d735afd80f7|c365c615-5522-f484-e58a-6508156f1044"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586000963622
        },
        "e-29": {
            "id": "e-29",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-28"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e886b63bebe7d735afd80f7|c365c615-5522-f484-e58a-6508156f1044"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586000963622
        },
        "e-30": {
            "id": "e-30",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-31"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e886b63bebe7d735afd80f7|c365c615-5522-f484-e58a-6508156f1052"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586000963622
        },
        "e-31": {
            "id": "e-31",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-30"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e886b63bebe7d735afd80f7|c365c615-5522-f484-e58a-6508156f1052"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586000963622
        },
        "e-32": {
            "id": "e-32",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-33"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e886b63bebe7d735afd80f7|c365c615-5522-f484-e58a-6508156f106e"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586000963622
        },
        "e-33": {
            "id": "e-33",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-32"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e886b63bebe7d735afd80f7|c365c615-5522-f484-e58a-6508156f106e"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586000963622
        },
        "e-34": {
            "id": "e-34",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-35"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e886b63bebe7d735afd80f7|c365c615-5522-f484-e58a-6508156f10cb"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586000963622
        },
        "e-36": {
            "id": "e-36",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-37"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e886b63bebe7d735afd80f7|c365c615-5522-f484-e58a-6508156f1110"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586000963622
        },
        "e-37": {
            "id": "e-37",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-36"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e886b63bebe7d735afd80f7|c365c615-5522-f484-e58a-6508156f1110"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586000963622
        },
        "e-38": {
            "id": "e-38",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-39"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e886b63bebe7d735afd80f7"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586000974378
        },
        "e-39": {
            "id": "e-39",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-38"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e886b63bebe7d735afd80f7"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586000974380
        },
        "e-40": {
            "id": "e-40",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-41"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e886a83ab1cf8da079cc255"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586001001839
        },
        "e-41": {
            "id": "e-41",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-40"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e886a83ab1cf8da079cc255"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586001001840
        },
        "e-42": {
            "id": "e-42",
            "eventTypeId": "NAVBAR_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-43"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "ed1e0251-584b-faa6-3eaf-18a097323a44"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586001040539
        },
        "e-43": {
            "id": "e-43",
            "eventTypeId": "NAVBAR_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-42"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "ed1e0251-584b-faa6-3eaf-18a097323a44"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586001040539
        },
        "e-44": {
            "id": "e-44",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-45"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e886b7058edde9a266dcd8b|5612c16e-63f6-0156-f7ef-7ea0ccc8d9cf"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1584207476461
        },
        "e-46": {
            "id": "e-46",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-47"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e886b7058edde9a266dcd8b"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586001231567
        },
        "e-47": {
            "id": "e-47",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-46"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e886b7058edde9a266dcd8b"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586001231568
        },
        "e-48": {
            "id": "e-48",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-49"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "f3ac25c2-f7d0-72f4-8123-e86c8343e93a"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586001464950
        },
        "e-49": {
            "id": "e-49",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-48"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "f3ac25c2-f7d0-72f4-8123-e86c8343e93a"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586001464950
        },
        "e-52": {
            "id": "e-52",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e886b81bebe7d874ffd8118|23b3cca4-bc4f-7f33-3e63-a4630177a4fa"
            },
            "config": [{
                "continuousParameterGroupId": "a-24-p",
                "smoothing": 60,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1584876934528
        },
        "e-53": {
            "id": "e-53",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e886b97a6b2c1e952a06800|8dc65e66-0556-5fa1-e150-8a84ba4e5387"
            },
            "config": [{
                "continuousParameterGroupId": "a-5-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1584895562256
        },
        "e-58": {
            "id": "e-58",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-59"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e886b97a6b2c1e952a06800|8dc65e66-0556-5fa1-e150-8a84ba4e5456"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1585063718285
        },
        "e-60": {
            "id": "e-60",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-61"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e886b97a6b2c1e952a06800|9b636259-f233-aee4-1051-8084ff527103"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1584978196290
        },
        "e-61": {
            "id": "e-61",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-60"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e886b97a6b2c1e952a06800|9b636259-f233-aee4-1051-8084ff527103"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1584978196290
        },
        "e-62": {
            "id": "e-62",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-63"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e886b97a6b2c1e952a06800|d851ae27-045a-6f24-3b18-86943aaa9290"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586001795114
        },
        "e-63": {
            "id": "e-63",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-62"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e886b97a6b2c1e952a06800|d851ae27-045a-6f24-3b18-86943aaa9290"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586001795114
        },
        "e-64": {
            "id": "e-64",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-65"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e886b97a6b2c1e952a06800|166541c9-6fb6-fa4e-6881-f94067bce7bd"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586001804805
        },
        "e-65": {
            "id": "e-65",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-64"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e886b97a6b2c1e952a06800|166541c9-6fb6-fa4e-6881-f94067bce7bd"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586001804805
        },
        "e-66": {
            "id": "e-66",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-67"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e886b97a6b2c1e952a06800|dabeaa02-2ac1-fb65-b546-95bee37a1eb0"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586001812836
        },
        "e-67": {
            "id": "e-67",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-66"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e886b97a6b2c1e952a06800|dabeaa02-2ac1-fb65-b546-95bee37a1eb0"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586001812836
        },
        "e-68": {
            "id": "e-68",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-69"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e886b97a6b2c1e952a06800|392096e3-d97b-da55-1025-3a00395f5f4b"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586001823348
        },
        "e-69": {
            "id": "e-69",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-68"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e886b97a6b2c1e952a06800|392096e3-d97b-da55-1025-3a00395f5f4b"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586001823348
        },
        "e-70": {
            "id": "e-70",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-71"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e886b97a6b2c1e952a06800|2d16ecc7-a4fb-1b6a-8ee9-6d21b7d729a2"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586001832680
        },
        "e-71": {
            "id": "e-71",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-70"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e886b97a6b2c1e952a06800|2d16ecc7-a4fb-1b6a-8ee9-6d21b7d729a2"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586001832680
        },
        "e-72": {
            "id": "e-72",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e886b97a6b2c1e952a06800"
            },
            "config": [{
                "continuousParameterGroupId": "a-25-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1586001966422
        },
        "e-73": {
            "id": "e-73",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-74"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e886b97a6b2c1e952a06800"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586002120766
        },
        "e-74": {
            "id": "e-74",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-73"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e886b97a6b2c1e952a06800"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586002120769
        },
        "e-79": {
            "id": "e-79",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-80"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e8879584fbaea471c1b4b08|ace6875d-ef6b-9ed0-0722-db9fb3b0aea5"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1585477689319
        },
        "e-81": {
            "id": "e-81",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-82"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e8879584fbaea471c1b4b08|ace6875d-ef6b-9ed0-0722-db9fb3b0af32"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1585477730632
        },
        "e-83": {
            "id": "e-83",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-84"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e8879584fbaea471c1b4b08"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586011239890
        },
        "e-84": {
            "id": "e-84",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-83"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e8879584fbaea471c1b4b08"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586011239892
        },
        "e-85": {
            "id": "e-85",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-92"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e887962ab1cf812919cfc68|96906606-d0b5-2091-dcaf-746bbb275542"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1585477980735
        },
        "e-86": {
            "id": "e-86",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-91"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e887962ab1cf812919cfc68|96906606-d0b5-2091-dcaf-746bbb275518"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1585477980735
        },
        "e-87": {
            "id": "e-87",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-95"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e887962ab1cf812919cfc68|96906606-d0b5-2091-dcaf-746bbb275559"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1585478063088
        },
        "e-88": {
            "id": "e-88",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-94"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e887962ab1cf812919cfc68|96906606-d0b5-2091-dcaf-746bbb275583"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1585478063088
        },
        "e-89": {
            "id": "e-89",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-90"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e887962ab1cf812919cfc68|96906606-d0b5-2091-dcaf-746bbb275567"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1585478063088
        },
        "e-90": {
            "id": "e-90",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-89"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e887962ab1cf812919cfc68|96906606-d0b5-2091-dcaf-746bbb275567"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1585478063088
        },
        "e-91": {
            "id": "e-91",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-86"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e887962ab1cf812919cfc68|96906606-d0b5-2091-dcaf-746bbb275518"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1585477980735
        },
        "e-92": {
            "id": "e-92",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-85"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e887962ab1cf812919cfc68|96906606-d0b5-2091-dcaf-746bbb275542"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1585477980735
        },
        "e-93": {
            "id": "e-93",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-96"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e887962ab1cf812919cfc68|96906606-d0b5-2091-dcaf-746bbb275526"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1585477980735
        },
        "e-94": {
            "id": "e-94",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-88"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e887962ab1cf812919cfc68|96906606-d0b5-2091-dcaf-746bbb275583"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1585478063088
        },
        "e-95": {
            "id": "e-95",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-87"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e887962ab1cf812919cfc68|96906606-d0b5-2091-dcaf-746bbb275559"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1585478063088
        },
        "e-96": {
            "id": "e-96",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-93"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e887962ab1cf812919cfc68|96906606-d0b5-2091-dcaf-746bbb275526"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1585477980735
        },
        "e-97": {
            "id": "e-97",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-98"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e887962ab1cf812919cfc68"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586011314233
        },
        "e-98": {
            "id": "e-98",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-97"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e887962ab1cf812919cfc68"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586011314235
        },
        "e-99": {
            "id": "e-99",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-100"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e88796a516d8fef54ae0de2"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586011396956
        },
        "e-100": {
            "id": "e-100",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-99"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e88796a516d8fef54ae0de2"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586011396959
        },
        "e-101": {
            "id": "e-101",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-102"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e88799eab1cf845ce9cfcd9"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586011541511
        },
        "e-102": {
            "id": "e-102",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-101"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e88799eab1cf845ce9cfcd9"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586011541514
        },
        "e-103": {
            "id": "e-103",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-104"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e8879aabebe7d4b9cfdbbe4|8151f455-0b5b-2e7b-f1c6-0cda74991d6d"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586011611750
        },
        "e-104": {
            "id": "e-104",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-103"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e8879aabebe7d4b9cfdbbe4|8151f455-0b5b-2e7b-f1c6-0cda74991d6d"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586011611750
        },
        "e-105": {
            "id": "e-105",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-106"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e8879aabebe7d4b9cfdbbe4"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586011633301
        },
        "e-106": {
            "id": "e-106",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-105"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e8879aabebe7d4b9cfdbbe4"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586011633304
        },
        "e-107": {
            "id": "e-107",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-108"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e8879b6f99d7c7b6b6c42af"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586011670506
        },
        "e-108": {
            "id": "e-108",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-107"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e8879b6f99d7c7b6b6c42af"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586011670509
        },
        "e-109": {
            "id": "e-109",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-110"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e8879cdec626f712a274a0d|14112f9e-bd99-abda-bcf0-b19b0222faa9"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586011875426
        },
        "e-110": {
            "id": "e-110",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-109"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e8879cdec626f712a274a0d|14112f9e-bd99-abda-bcf0-b19b0222faa9"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586011875426
        },
        "e-111": {
            "id": "e-111",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-112"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e8879cdec626f712a274a0d|14112f9e-bd99-abda-bcf0-b19b0222fab6"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586011875426
        },
        "e-112": {
            "id": "e-112",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-111"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e8879cdec626f712a274a0d|14112f9e-bd99-abda-bcf0-b19b0222fab6"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586011875426
        },
        "e-113": {
            "id": "e-113",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-114"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e8879cdec626f712a274a0d|14112f9e-bd99-abda-bcf0-b19b0222fac3"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586011875426
        },
        "e-114": {
            "id": "e-114",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-113"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e8879cdec626f712a274a0d|14112f9e-bd99-abda-bcf0-b19b0222fac3"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586011875426
        },
        "e-115": {
            "id": "e-115",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-116"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e8879cdec626f712a274a0d|14112f9e-bd99-abda-bcf0-b19b0222fad0"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586011875426
        },
        "e-116": {
            "id": "e-116",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-115"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e8879cdec626f712a274a0d|14112f9e-bd99-abda-bcf0-b19b0222fad0"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586011875426
        },
        "e-117": {
            "id": "e-117",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-118"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e8879cdec626f712a274a0d|14112f9e-bd99-abda-bcf0-b19b0222fadd"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586011875426
        },
        "e-118": {
            "id": "e-118",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-117"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e8879cdec626f712a274a0d|14112f9e-bd99-abda-bcf0-b19b0222fadd"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586011875426
        },
        "e-119": {
            "id": "e-119",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-120"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e8879cdec626f712a274a0d|14112f9e-bd99-abda-bcf0-b19b0222faea"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586011875426
        },
        "e-120": {
            "id": "e-120",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-119"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e8879cdec626f712a274a0d|14112f9e-bd99-abda-bcf0-b19b0222faea"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586011875426
        },
        "e-125": {
            "id": "e-125",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-126"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e8879cdec626f712a274a0d"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586011890270
        },
        "e-126": {
            "id": "e-126",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-125"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e8879cdec626f712a274a0d"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586011890274
        },
        "e-127": {
            "id": "e-127",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-128"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e887a0758edde42eb6e0c57"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586012038885
        },
        "e-128": {
            "id": "e-128",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-127"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e887a0758edde42eb6e0c57"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586012038889
        },
        "e-129": {
            "id": "e-129",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-130"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e887a12bcf6e17e35c0b902"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586012095469
        },
        "e-130": {
            "id": "e-130",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-129"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e887a12bcf6e17e35c0b902"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586012095494
        },
        "e-131": {
            "id": "e-131",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-132"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e886bb958edde73736dce22"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586012270122
        },
        "e-132": {
            "id": "e-132",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-131"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e886bb958edde73736dce22"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586012270126
        },
        "e-133": {
            "id": "e-133",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-134"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e887a40f99d7c1c096c43dd"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586012365559
        },
        "e-134": {
            "id": "e-134",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-133"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e887a40f99d7c1c096c43dd"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586012365563
        },
        "e-135": {
            "id": "e-135",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-136"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e887a4bec626f7959274b96"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586012393696
        },
        "e-136": {
            "id": "e-136",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-135"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e887a4bec626f7959274b96"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586012393729
        },
        "e-137": {
            "id": "e-137",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-138"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e887a58bcf6e1f420c0baa5"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586012444381
        },
        "e-138": {
            "id": "e-138",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-137"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e887a58bcf6e1f420c0baa5"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586012444387
        },
        "e-139": {
            "id": "e-139",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-140"
                },
                "instant": false
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5e886d0906f67005c7cae8d5|55db6ac2-4d45-83c4-2e97-e0546e74e2b4"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1580228226029
        },
        "e-141": {
            "id": "e-141",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-142"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e886d0906f67005c7cae8d5"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586012832962
        },
        "e-142": {
            "id": "e-142",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-141"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e886d0906f67005c7cae8d5"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586012832966
        },
        "e-143": {
            "id": "e-143",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-144"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e886c1fab1cf84ecb9cca0a"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586013005980
        },
        "e-144": {
            "id": "e-144",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-143"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5e886c1fab1cf84ecb9cca0a"
            },
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1586013005984
        }
    },
    "actionLists": {
        "a": {
            "id": "a",
            "title": "Hamburger First Click",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "ce8e38e9-53a8-e4b9-d1db-1ada30da6632"
                        },
                        "xValue": -10,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "ce8e38e9-53a8-e4b9-d1db-1ada30da6632"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "ce8e38e9-53a8-e4b9-d1db-1ada30da6636"
                        },
                        "xValue": -10,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "ce8e38e9-53a8-e4b9-d1db-1ada30da6636"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "ce8e38e9-53a8-e4b9-d1db-1ada30da663a"
                        },
                        "xValue": -10,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "ce8e38e9-53a8-e4b9-d1db-1ada30da663a"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "ce8e38e9-53a8-e4b9-d1db-1ada30da663e"
                        },
                        "xValue": -10,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "ce8e38e9-53a8-e4b9-d1db-1ada30da663e"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "ce8e38e9-53a8-e4b9-d1db-1ada30da6642"
                        },
                        "xValue": -10,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "ce8e38e9-53a8-e4b9-d1db-1ada30da6642"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "ce8e38e9-53a8-e4b9-d1db-1ada30da6646"
                        },
                        "xValue": -10,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "ce8e38e9-53a8-e4b9-d1db-1ada30da6646"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-n-13",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "locked": false,
                        "target": {
                            "selector": ".navigation-menu",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aaa2"]
                        },
                        "widthValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-n-14",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "value": "none",
                        "target": {
                            "selector": ".navigation-menu",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aaa2"]
                        }
                    }
                }, {
                    "id": "a-n-15",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-1",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aa9d"]
                        },
                        "yValue": -6,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-n-16",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-2",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aa9a"]
                        },
                        "yValue": 6,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-n-17",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutBack",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-1",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aa9d"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-n-18",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutBack",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-1",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aa9d"]
                        },
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-n-19",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-2",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aa9a"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-n-20",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutBack",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-2",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aa9a"]
                        },
                        "zValue": -45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-n-21",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "locked": false,
                        "target": {
                            "selector": ".navigation-menu",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aaa2"]
                        },
                        "widthValue": 550,
                        "widthUnit": "PX",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-n-22",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "value": "flex",
                        "target": {
                            "selector": ".navigation-menu",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aaa2"]
                        }
                    }
                }, {
                    "id": "a-n-23",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "ce8e38e9-53a8-e4b9-d1db-1ada30da6632"
                        },
                        "xValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-n-24",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "ce8e38e9-53a8-e4b9-d1db-1ada30da6632"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-n-25",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 400,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "ce8e38e9-53a8-e4b9-d1db-1ada30da6636"
                        },
                        "xValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-n-26",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 400,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "ce8e38e9-53a8-e4b9-d1db-1ada30da6636"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-n-27",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 600,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "ce8e38e9-53a8-e4b9-d1db-1ada30da663a"
                        },
                        "xValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-n-28",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 600,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "ce8e38e9-53a8-e4b9-d1db-1ada30da663a"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-n-29",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 800,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "ce8e38e9-53a8-e4b9-d1db-1ada30da663e"
                        },
                        "xValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-n-30",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 800,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "ce8e38e9-53a8-e4b9-d1db-1ada30da663e"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-n-31",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 1000,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "ce8e38e9-53a8-e4b9-d1db-1ada30da6642"
                        },
                        "xValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-n-32",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 1000,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "ce8e38e9-53a8-e4b9-d1db-1ada30da6642"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-n-33",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 1200,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "ce8e38e9-53a8-e4b9-d1db-1ada30da6646"
                        },
                        "xValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-n-34",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 1200,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "ce8e38e9-53a8-e4b9-d1db-1ada30da6646"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1579532588696,
            "useFirstGroupAsInitialState": true
        },
        "a-2": {
            "id": "a-2",
            "title": "Hamburger Second Click",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-2-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutBack",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-1",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aa9d"]
                        },
                        "yValue": -6,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-2-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutBack",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-1",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aa9d"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-2-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-2",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aa9a"]
                        },
                        "yValue": 6,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-2-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutBack",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-2",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aa9a"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-2-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "ce8e38e9-53a8-e4b9-d1db-1ada30da6632"
                        },
                        "xValue": -10,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-2-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "ce8e38e9-53a8-e4b9-d1db-1ada30da6632"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-2-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "ce8e38e9-53a8-e4b9-d1db-1ada30da6646"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-2-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "ce8e38e9-53a8-e4b9-d1db-1ada30da6646"
                        },
                        "xValue": -10,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-2-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "ce8e38e9-53a8-e4b9-d1db-1ada30da6642"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-2-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "ce8e38e9-53a8-e4b9-d1db-1ada30da6642"
                        },
                        "xValue": -10,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-2-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "ce8e38e9-53a8-e4b9-d1db-1ada30da663e"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-2-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "ce8e38e9-53a8-e4b9-d1db-1ada30da663e"
                        },
                        "xValue": -10,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-2-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "ce8e38e9-53a8-e4b9-d1db-1ada30da663a"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-2-n-14",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "ce8e38e9-53a8-e4b9-d1db-1ada30da663a"
                        },
                        "xValue": -10,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-2-n-15",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "ce8e38e9-53a8-e4b9-d1db-1ada30da6636"
                        },
                        "xValue": -10,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-2-n-16",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "ce8e38e9-53a8-e4b9-d1db-1ada30da6636"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-2-n-17",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "ease",
                        "duration": 300,
                        "locked": false,
                        "target": {
                            "selector": ".navigation-menu",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aaa2"]
                        },
                        "widthValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-18",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "value": "flex",
                        "target": {
                            "selector": ".navigation-menu",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aaa2"]
                        }
                    }
                }]
            }],
            "createdOn": 1579532588696,
            "useFirstGroupAsInitialState": false
        },
        "a-3": {
            "id": "a-3",
            "title": "Navigation Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-3-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".navigation-line",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aaa0"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-3-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutBack",
                        "duration": 300,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".navigation-line",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aaa0"]
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }]
            }],
            "createdOn": 1582302573741,
            "useFirstGroupAsInitialState": true
        },
        "a-4": {
            "id": "a-4",
            "title": "Navigation Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-4-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".navigation-line",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aaa0"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }]
            }],
            "createdOn": 1582302573741,
            "useFirstGroupAsInitialState": false
        },
        "a-6": {
            "id": "a-6",
            "title": "Button Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-6-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-overlay",
                            "selectorGuids": ["b7dc7847-b7cd-9e4a-5330-d3328542f5e4"]
                        },
                        "xValue": -101,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-overlay",
                            "selectorGuids": ["b7dc7847-b7cd-9e4a-5330-d3328542f5e4"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "createdOn": 1569582512849,
            "useFirstGroupAsInitialState": true
        },
        "a-10": {
            "id": "a-10",
            "title": "Dots Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-10-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dots-text",
                            "selectorGuids": ["c4339986-5c1d-663c-3528-0d1efe88befb"]
                        },
                        "xValue": -15,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-10-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dots-text",
                            "selectorGuids": ["c4339986-5c1d-663c-3528-0d1efe88befb"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1575910118543,
            "useFirstGroupAsInitialState": false
        },
        "a-8": {
            "id": "a-8",
            "title": "Skills Animation",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-8-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".skills-overlay",
                            "selectorGuids": ["c4339986-5c1d-663c-3528-0d1efe88beea"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "locked": false,
                        "target": {
                            "selector": ".skills-overlay.development",
                            "selectorGuids": ["c4339986-5c1d-663c-3528-0d1efe88beea", "c4339986-5c1d-663c-3528-0d1efe88bf14"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "locked": false,
                        "target": {
                            "selector": ".skills-overlay.marketing",
                            "selectorGuids": ["c4339986-5c1d-663c-3528-0d1efe88beea", "c4339986-5c1d-663c-3528-0d1efe88bf09"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "locked": false,
                        "target": {
                            "selector": ".skills-overlay.lead",
                            "selectorGuids": ["c4339986-5c1d-663c-3528-0d1efe88beea", "c4339986-5c1d-663c-3528-0d1efe88bf12"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-5",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "locked": false,
                        "target": {
                            "selector": ".skills-overlay.photoshop",
                            "selectorGuids": ["c4339986-5c1d-663c-3528-0d1efe88beea", "c4339986-5c1d-663c-3528-0d1efe88bf18"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-6",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "locked": false,
                        "target": {
                            "selector": ".skills-overlay.illustration",
                            "selectorGuids": ["c4339986-5c1d-663c-3528-0d1efe88beea", "c4339986-5c1d-663c-3528-0d1efe88bf1a"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-7",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "locked": false,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".skills-overlay",
                            "selectorGuids": ["c4339986-5c1d-663c-3528-0d1efe88beea"]
                        },
                        "widthValue": 80,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-8",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "locked": false,
                        "target": {
                            "selector": ".skills-overlay.lead",
                            "selectorGuids": ["c4339986-5c1d-663c-3528-0d1efe88beea", "c4339986-5c1d-663c-3528-0d1efe88bf12"]
                        },
                        "widthValue": 41,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-9",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 200,
                        "easing": "ease",
                        "duration": 500,
                        "locked": false,
                        "target": {
                            "selector": ".skills-overlay.development",
                            "selectorGuids": ["c4339986-5c1d-663c-3528-0d1efe88beea", "c4339986-5c1d-663c-3528-0d1efe88bf14"]
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-10",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 200,
                        "easing": "ease",
                        "duration": 500,
                        "locked": false,
                        "target": {
                            "selector": ".skills-overlay.photoshop",
                            "selectorGuids": ["c4339986-5c1d-663c-3528-0d1efe88beea", "c4339986-5c1d-663c-3528-0d1efe88bf18"]
                        },
                        "widthValue": 70,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-11",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "ease",
                        "duration": 500,
                        "locked": false,
                        "target": {
                            "selector": ".skills-overlay.marketing",
                            "selectorGuids": ["c4339986-5c1d-663c-3528-0d1efe88beea", "c4339986-5c1d-663c-3528-0d1efe88bf09"]
                        },
                        "widthValue": 67,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-12",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "ease",
                        "duration": 500,
                        "locked": false,
                        "target": {
                            "selector": ".skills-overlay.illustration",
                            "selectorGuids": ["c4339986-5c1d-663c-3528-0d1efe88beea", "c4339986-5c1d-663c-3528-0d1efe88bf1a"]
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }]
            }],
            "createdOn": 1582809901645,
            "useFirstGroupAsInitialState": true
        },
        "a-7": {
            "id": "a-7",
            "title": "Button Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-7-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-overlay",
                            "selectorGuids": ["b7dc7847-b7cd-9e4a-5330-d3328542f5e4"]
                        },
                        "xValue": 100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-overlay",
                            "selectorGuids": ["b7dc7847-b7cd-9e4a-5330-d3328542f5e4"]
                        },
                        "xValue": -101,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "createdOn": 1569582544111,
            "useFirstGroupAsInitialState": false
        },
        "a-9": {
            "id": "a-9",
            "title": "Dots Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-9-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dots-text",
                            "selectorGuids": ["c4339986-5c1d-663c-3528-0d1efe88befb"]
                        },
                        "xValue": -15,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dots-text",
                            "selectorGuids": ["c4339986-5c1d-663c-3528-0d1efe88befb"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dots-text",
                            "selectorGuids": ["c4339986-5c1d-663c-3528-0d1efe88befb"]
                        },
                        "xValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dots-text",
                            "selectorGuids": ["c4339986-5c1d-663c-3528-0d1efe88befb"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1575910082046,
            "useFirstGroupAsInitialState": true
        },
        "a-5": {
            "id": "a-5",
            "title": "Banner (First) Animation",
            "continuousParameterGroups": [{
                "id": "a-5-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-5-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".square-shape",
                                "selectorGuids": ["c4339986-5c1d-663c-3528-0d1efe88bee0"]
                            },
                            "yValue": -100,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-5-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".circle-shape",
                                "selectorGuids": ["c4339986-5c1d-663c-3528-0d1efe88bee9"]
                            },
                            "yValue": -100,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-5-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".square-shape",
                                "selectorGuids": ["c4339986-5c1d-663c-3528-0d1efe88bee0"]
                            },
                            "yValue": 200,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-5-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".circle-shape",
                                "selectorGuids": ["c4339986-5c1d-663c-3528-0d1efe88bee9"]
                            },
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1582363803447
        },
        "a-11": {
            "id": "a-11",
            "title": "Project Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-11-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-first-image",
                            "selectorGuids": ["b5bf0673-a522-b4a5-9bdb-13150e2a0288"]
                        },
                        "value": 0.7,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1582810375571,
            "useFirstGroupAsInitialState": false
        },
        "a-12": {
            "id": "a-12",
            "title": "Project Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-12-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-first-image",
                            "selectorGuids": ["b5bf0673-a522-b4a5-9bdb-13150e2a0288"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1582810375571,
            "useFirstGroupAsInitialState": false
        },
        "a-13": {
            "id": "a-13",
            "title": "Go Top Scrolled Up",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-13-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".go-top",
                            "selectorGuids": ["c4339986-5c1d-663c-3528-0d1efe88becf"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-13-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "selector": ".go-top",
                            "selectorGuids": ["c4339986-5c1d-663c-3528-0d1efe88becf"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }]
            }],
            "createdOn": 1585999940829,
            "useFirstGroupAsInitialState": true
        },
        "a-14": {
            "id": "a-14",
            "title": "Go Top Scrolled Down",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-14-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "selector": ".go-top",
                            "selectorGuids": ["c4339986-5c1d-663c-3528-0d1efe88becf"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "createdOn": 1585999998340,
            "useFirstGroupAsInitialState": false
        },
        "a-15": {
            "id": "a-15",
            "title": "Banner Fade Out",
            "continuousParameterGroups": [{
                "id": "a-15-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-15-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5e886b4f4fbaea6af11b118c|56d298f7-821f-226f-df30-83aeb81b0281"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-15-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5e886b4f4fbaea6af11b118c|56d298f7-821f-226f-df30-83aeb81b0281"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 25,
                    "actionItems": [{
                        "id": "a-15-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5e886b4f4fbaea6af11b118c|56d298f7-821f-226f-df30-83aeb81b0281"
                            },
                            "yValue": 200,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-15-n-4",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5e886b4f4fbaea6af11b118c|56d298f7-821f-226f-df30-83aeb81b0281"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1586000091176
        },
        "a-16": {
            "id": "a-16",
            "title": "Instagram Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-16-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".instagram-circle",
                            "selectorGuids": ["019bc618-b3b4-38dc-ae51-6f9b12cf8d1f"]
                        },
                        "yValue": 20,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-16-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".instagram-circle",
                            "selectorGuids": ["019bc618-b3b4-38dc-ae51-6f9b12cf8d1f"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-16-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".instagram-circle",
                            "selectorGuids": ["019bc618-b3b4-38dc-ae51-6f9b12cf8d1f"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-16-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".instagram-circle",
                            "selectorGuids": ["019bc618-b3b4-38dc-ae51-6f9b12cf8d1f"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1580144601584,
            "useFirstGroupAsInitialState": true
        },
        "a-17": {
            "id": "a-17",
            "title": "Instagram Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-17-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".instagram-circle",
                            "selectorGuids": ["019bc618-b3b4-38dc-ae51-6f9b12cf8d1f"]
                        },
                        "yValue": 20,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-17-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".instagram-circle",
                            "selectorGuids": ["019bc618-b3b4-38dc-ae51-6f9b12cf8d1f"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1580144601584,
            "useFirstGroupAsInitialState": false
        },
        "a-18": {
            "id": "a-18",
            "title": "Project (2) Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-18-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-title-first",
                            "selectorGuids": ["b5bf0673-a522-b4a5-9bdb-13150e2a0285"]
                        },
                        "yValue": 20,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-18-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-title-first",
                            "selectorGuids": ["b5bf0673-a522-b4a5-9bdb-13150e2a0285"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-18-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-overlay.with-color",
                            "selectorGuids": ["b5bf0673-a522-b4a5-9bdb-13150e2a0286", "5ee205cd-6dc3-6845-871b-41553324c7cd"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-18-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-title-first",
                            "selectorGuids": ["b5bf0673-a522-b4a5-9bdb-13150e2a0285"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-18-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-title-first",
                            "selectorGuids": ["b5bf0673-a522-b4a5-9bdb-13150e2a0285"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-18-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-overlay.with-color",
                            "selectorGuids": ["b5bf0673-a522-b4a5-9bdb-13150e2a0286", "5ee205cd-6dc3-6845-871b-41553324c7cd"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1582820950144,
            "useFirstGroupAsInitialState": true
        },
        "a-19": {
            "id": "a-19",
            "title": "Project (2) Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-19-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-title-first",
                            "selectorGuids": ["b5bf0673-a522-b4a5-9bdb-13150e2a0285"]
                        },
                        "yValue": 20,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-19-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-title-first",
                            "selectorGuids": ["b5bf0673-a522-b4a5-9bdb-13150e2a0285"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-19-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-overlay.with-color",
                            "selectorGuids": ["b5bf0673-a522-b4a5-9bdb-13150e2a0286", "5ee205cd-6dc3-6845-871b-41553324c7cd"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1582820950144,
            "useFirstGroupAsInitialState": false
        },
        "a-20": {
            "id": "a-20",
            "title": "Menu Button First Click (Mobile)",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-20-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-1",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aa9d"]
                        },
                        "yValue": -6,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-20-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-2",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aa9a"]
                        },
                        "yValue": 6,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-20-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-1",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aa9d"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-20-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-1",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aa9d"]
                        },
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-20-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-2",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aa9a"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-20-n-6",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-2",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aa9a"]
                        },
                        "zValue": -45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }],
            "createdOn": 1585226727694,
            "useFirstGroupAsInitialState": true
        },
        "a-21": {
            "id": "a-21",
            "title": "Menu Button Second Click (Mobile)",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-21-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-1",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aa9d"]
                        },
                        "yValue": -6,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-21-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-1",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aa9d"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-21-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-2",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aa9a"]
                        },
                        "yValue": 6,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-21-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-2",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aa9a"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }],
            "createdOn": 1585226727694,
            "useFirstGroupAsInitialState": false
        },
        "a-22": {
            "id": "a-22",
            "title": "Hamburger (2)  First Click",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-22-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "f3ac25c2-f7d0-72f4-8123-e86c8343e955"
                        },
                        "xValue": -10,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "f3ac25c2-f7d0-72f4-8123-e86c8343e955"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "f3ac25c2-f7d0-72f4-8123-e86c8343e959"
                        },
                        "xValue": -10,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "f3ac25c2-f7d0-72f4-8123-e86c8343e959"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "f3ac25c2-f7d0-72f4-8123-e86c8343e95d"
                        },
                        "xValue": -10,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "f3ac25c2-f7d0-72f4-8123-e86c8343e95d"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "f3ac25c2-f7d0-72f4-8123-e86c8343e961"
                        },
                        "xValue": -10,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "f3ac25c2-f7d0-72f4-8123-e86c8343e961"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "f3ac25c2-f7d0-72f4-8123-e86c8343e965"
                        },
                        "xValue": -10,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "f3ac25c2-f7d0-72f4-8123-e86c8343e965"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "f3ac25c2-f7d0-72f4-8123-e86c8343e969"
                        },
                        "xValue": -10,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "f3ac25c2-f7d0-72f4-8123-e86c8343e969"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-13",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "locked": false,
                        "target": {
                            "selector": ".navigation-menu",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aaa2"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-14",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "value": "none",
                        "target": {
                            "selector": ".navigation-menu",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aaa2"]
                        }
                    }
                }, {
                    "id": "a-22-n-15",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-1",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aa9d"]
                        },
                        "yValue": -6,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-16",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-2",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aa9a"]
                        },
                        "yValue": 6,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-22-n-17",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutBack",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-1",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aa9d"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-18",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutBack",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-1",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aa9d"]
                        },
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-22-n-19",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-2",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aa9a"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-20",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutBack",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-2",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aa9a"]
                        },
                        "zValue": -45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-22-n-21",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "locked": false,
                        "target": {
                            "selector": ".navigation-menu",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aaa2"]
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-22",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "value": "flex",
                        "target": {
                            "selector": ".navigation-menu",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aaa2"]
                        }
                    }
                }, {
                    "id": "a-22-n-23",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "f3ac25c2-f7d0-72f4-8123-e86c8343e955"
                        },
                        "xValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-24",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "f3ac25c2-f7d0-72f4-8123-e86c8343e955"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-25",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 400,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "f3ac25c2-f7d0-72f4-8123-e86c8343e959"
                        },
                        "xValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-26",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 400,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "f3ac25c2-f7d0-72f4-8123-e86c8343e959"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-27",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 600,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "f3ac25c2-f7d0-72f4-8123-e86c8343e95d"
                        },
                        "xValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-28",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 600,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "f3ac25c2-f7d0-72f4-8123-e86c8343e95d"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-29",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 800,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "f3ac25c2-f7d0-72f4-8123-e86c8343e961"
                        },
                        "xValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-30",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 800,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "f3ac25c2-f7d0-72f4-8123-e86c8343e961"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-31",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 1000,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "f3ac25c2-f7d0-72f4-8123-e86c8343e965"
                        },
                        "xValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-32",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 1000,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "f3ac25c2-f7d0-72f4-8123-e86c8343e965"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-33",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 1200,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "f3ac25c2-f7d0-72f4-8123-e86c8343e969"
                        },
                        "xValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-34",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 1200,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "f3ac25c2-f7d0-72f4-8123-e86c8343e969"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1579532588696,
            "useFirstGroupAsInitialState": true
        },
        "a-23": {
            "id": "a-23",
            "title": "Hamburger (2) Second Click",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-23-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutBack",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-1",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aa9d"]
                        },
                        "yValue": -6,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-23-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutBack",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-1",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aa9d"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-23-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-2",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aa9a"]
                        },
                        "yValue": 6,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-23-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutBack",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".line-2",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aa9a"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-23-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "f3ac25c2-f7d0-72f4-8123-e86c8343e955"
                        },
                        "xValue": -10,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-23-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "f3ac25c2-f7d0-72f4-8123-e86c8343e955"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-23-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "f3ac25c2-f7d0-72f4-8123-e86c8343e969"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-23-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "f3ac25c2-f7d0-72f4-8123-e86c8343e969"
                        },
                        "xValue": -10,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-23-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "f3ac25c2-f7d0-72f4-8123-e86c8343e965"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-23-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "f3ac25c2-f7d0-72f4-8123-e86c8343e965"
                        },
                        "xValue": -10,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-23-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "f3ac25c2-f7d0-72f4-8123-e86c8343e961"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-23-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "f3ac25c2-f7d0-72f4-8123-e86c8343e961"
                        },
                        "xValue": -10,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-23-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "f3ac25c2-f7d0-72f4-8123-e86c8343e95d"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-23-n-14",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "f3ac25c2-f7d0-72f4-8123-e86c8343e95d"
                        },
                        "xValue": -10,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-23-n-15",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "f3ac25c2-f7d0-72f4-8123-e86c8343e959"
                        },
                        "xValue": -10,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-23-n-16",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "id": "f3ac25c2-f7d0-72f4-8123-e86c8343e959"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-23-n-17",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 400,
                        "easing": "ease",
                        "duration": 300,
                        "locked": false,
                        "target": {
                            "selector": ".navigation-menu",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aaa2"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-18",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "value": "flex",
                        "target": {
                            "selector": ".navigation-menu",
                            "selectorGuids": ["486f6187-fbcd-6f94-1ed1-6cc2c461aaa2"]
                        }
                    }
                }]
            }],
            "createdOn": 1579532588696,
            "useFirstGroupAsInitialState": false
        },
        "a-24": {
            "id": "a-24",
            "title": "Gallery Scroll Trigger",
            "continuousParameterGroups": [{
                "id": "a-24-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-24-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".gallery-track",
                                "selectorGuids": ["2f2894fc-93a1-a7b4-b189-e4251d6a8e5f"]
                            },
                            "xValue": 0,
                            "xUnit": "VW",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 70,
                    "actionItems": [{
                        "id": "a-24-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".gallery-track",
                                "selectorGuids": ["2f2894fc-93a1-a7b4-b189-e4251d6a8e5f"]
                            },
                            "xValue": -200,
                            "xUnit": "VW",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1549121093766
        },
        "a-25": {
            "id": "a-25",
            "title": "Page Parallax Effect",
            "continuousParameterGroups": [{
                "id": "a-25-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 20,
                    "actionItems": [{
                        "id": "a-25-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5e886b97a6b2c1e952a06800|8dc65e66-0556-5fa1-e150-8a84ba4e53ea"
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 40,
                    "actionItems": [{
                        "id": "a-25-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5e886b97a6b2c1e952a06800|8dc65e66-0556-5fa1-e150-8a84ba4e53ea"
                            },
                            "yValue": -400,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1586001971112
        },
        "slideInBottom": {
            "id": "slideInBottom",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});