"use client";
!(function (e) {
  "use strict";
  var t = "undefined" != typeof document ? document.currentScript : null,
    n = Object.create,
    r = Object.defineProperty,
    o = Object.getOwnPropertyDescriptor,
    i = Object.getOwnPropertyNames,
    a = Object.getPrototypeOf,
    s = Object.prototype.hasOwnProperty,
    l = (e, t) =>
      function () {
        return (
          t || (0, e[i(e)[0]])((t = { exports: {} }).exports, t), t.exports
        );
      },
    c = l({
      "../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js"(
        e,
      ) {
        var t = Symbol.for("react.element"),
          n = Symbol.for("react.portal"),
          r = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          a = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          l = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          u = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          f = Object.assign,
          m = {};
        function g(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        function w() {}
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (w.prototype = g.prototype);
        var b = (v.prototype = new w());
        (b.constructor = v), f(b, g.prototype), (b.isPureReactComponent = !0);
        var x = Array.isArray,
          y = Object.prototype.hasOwnProperty,
          k = { current: null },
          _ = { key: !0, ref: !0, __self: !0, __source: !0 };
        function S(e, n, r) {
          var o,
            i = {},
            a = null,
            s = null;
          if (null != n)
            for (o in (void 0 !== n.ref && (s = n.ref),
            void 0 !== n.key && (a = "" + n.key),
            n))
              y.call(n, o) && !_.hasOwnProperty(o) && (i[o] = n[o]);
          var l = arguments.length - 2;
          if (1 === l) i.children = r;
          else if (1 < l) {
            for (var c = Array(l), d = 0; d < l; d++) c[d] = arguments[d + 2];
            i.children = c;
          }
          if (e && e.defaultProps)
            for (o in (l = e.defaultProps)) void 0 === i[o] && (i[o] = l[o]);
          return {
            $$typeof: t,
            type: e,
            key: a,
            ref: s,
            props: i,
            _owner: k.current,
          };
        }
        function N(e) {
          return "object" == typeof e && null !== e && e.$$typeof === t;
        }
        var C = /\/+/g;
        function E(e, t) {
          return "object" == typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function T(e, r, o, i, a) {
          var s = typeof e;
          ("undefined" !== s && "boolean" !== s) || (e = null);
          var l = !1;
          if (null === e) l = !0;
          else
            switch (s) {
              case "string":
              case "number":
                l = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case t:
                  case n:
                    l = !0;
                }
            }
          if (l)
            return (
              (a = a((l = e))),
              (e = "" === i ? "." + E(l, 0) : i),
              x(a)
                ? ((o = ""),
                  null != e && (o = e.replace(C, "$&/") + "/"),
                  T(a, r, o, "", function (e) {
                    return e;
                  }))
                : null != a &&
                  (N(a) &&
                    (a = (function (e, n) {
                      return {
                        $$typeof: t,
                        type: e.type,
                        key: n,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      a,
                      o +
                        (!a.key || (l && l.key === a.key)
                          ? ""
                          : ("" + a.key).replace(C, "$&/") + "/") +
                        e,
                    )),
                  r.push(a)),
              1
            );
          if (((l = 0), (i = "" === i ? "." : i + ":"), x(e)))
            for (var c = 0; c < e.length; c++) {
              var d = i + E((s = e[c]), c);
              l += T(s, r, o, d, a);
            }
          else if (
            ((d = (function (e) {
              return null === e || "object" != typeof e
                ? null
                : "function" == typeof (e = (p && e[p]) || e["@@iterator"])
                  ? e
                  : null;
            })(e)),
            "function" == typeof d)
          )
            for (e = d.call(e), c = 0; !(s = e.next()).done; )
              l += T((s = s.value), r, o, (d = i + E(s, c++)), a);
          else if ("object" === s)
            throw (
              ((r = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === r
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : r) +
                  "). If you meant to render a collection of children, use an array instead.",
              ))
            );
          return l;
        }
        function z(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            T(e, r, "", "", function (e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function A(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              },
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var $ = { current: null },
          M = { transition: null },
          F = {
            ReactCurrentDispatcher: $,
            ReactCurrentBatchConfig: M,
            ReactCurrentOwner: k,
          };
        (e.Children = {
          map: z,
          forEach: function (e, t, n) {
            z(
              e,
              function () {
                t.apply(this, arguments);
              },
              n,
            );
          },
          count: function (e) {
            var t = 0;
            return (
              z(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              z(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!N(e))
              throw Error(
                "React.Children.only expected to receive a single React element child.",
              );
            return e;
          },
        }),
          (e.Component = g),
          (e.Fragment = r),
          (e.Profiler = i),
          (e.PureComponent = v),
          (e.StrictMode = o),
          (e.Suspense = c),
          (e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F),
          (e.cloneElement = function (e, n, r) {
            if (null == e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  ".",
              );
            var o = f({}, e.props),
              i = e.key,
              a = e.ref,
              s = e._owner;
            if (null != n) {
              if (
                (void 0 !== n.ref && ((a = n.ref), (s = k.current)),
                void 0 !== n.key && (i = "" + n.key),
                e.type && e.type.defaultProps)
              )
                var l = e.type.defaultProps;
              for (c in n)
                y.call(n, c) &&
                  !_.hasOwnProperty(c) &&
                  (o[c] = void 0 === n[c] && void 0 !== l ? l[c] : n[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) o.children = r;
            else if (1 < c) {
              l = Array(c);
              for (var d = 0; d < c; d++) l[d] = arguments[d + 2];
              o.children = l;
            }
            return {
              $$typeof: t,
              type: e.type,
              key: i,
              ref: a,
              props: o,
              _owner: s,
            };
          }),
          (e.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: a, _context: e }),
              (e.Consumer = e)
            );
          }),
          (e.createElement = S),
          (e.createFactory = function (e) {
            var t = S.bind(null, e);
            return (t.type = e), t;
          }),
          (e.createRef = function () {
            return { current: null };
          }),
          (e.forwardRef = function (e) {
            return { $$typeof: l, render: e };
          }),
          (e.isValidElement = N),
          (e.lazy = function (e) {
            return {
              $$typeof: u,
              _payload: { _status: -1, _result: e },
              _init: A,
            };
          }),
          (e.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (e.startTransition = function (e) {
            var t = M.transition;
            M.transition = {};
            try {
              e();
            } finally {
              M.transition = t;
            }
          }),
          (e.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React.",
            );
          }),
          (e.useCallback = function (e, t) {
            return $.current.useCallback(e, t);
          }),
          (e.useContext = function (e) {
            return $.current.useContext(e);
          }),
          (e.useDebugValue = function () {}),
          (e.useDeferredValue = function (e) {
            return $.current.useDeferredValue(e);
          }),
          (e.useEffect = function (e, t) {
            return $.current.useEffect(e, t);
          }),
          (e.useId = function () {
            return $.current.useId();
          }),
          (e.useImperativeHandle = function (e, t, n) {
            return $.current.useImperativeHandle(e, t, n);
          }),
          (e.useInsertionEffect = function (e, t) {
            return $.current.useInsertionEffect(e, t);
          }),
          (e.useLayoutEffect = function (e, t) {
            return $.current.useLayoutEffect(e, t);
          }),
          (e.useMemo = function (e, t) {
            return $.current.useMemo(e, t);
          }),
          (e.useReducer = function (e, t, n) {
            return $.current.useReducer(e, t, n);
          }),
          (e.useRef = function (e) {
            return $.current.useRef(e);
          }),
          (e.useState = function (e) {
            return $.current.useState(e);
          }),
          (e.useSyncExternalStore = function (e, t, n) {
            return $.current.useSyncExternalStore(e, t, n);
          }),
          (e.useTransition = function () {
            return $.current.useTransition();
          }),
          (e.version = "18.2.0");
      },
    }),
    d = l({
      "../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"(
        e,
        t,
      ) {
        t.exports = c();
      },
    }),
    u = "bippy-0.2.7",
    p = () => {},
    h = (e) => {
      try {
        Function.prototype.toString.call(e).indexOf("^_^") > -1 &&
          setTimeout(() => {
            throw new Error(
              "React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build",
            );
          });
      } catch {}
    },
    f = !1,
    m = (e = v()) => !!f || !("checkDCE" in e),
    g = (e) => {
      const t = new Map();
      let n = 0;
      const r = {
        checkDCE: h,
        supportsFiber: !0,
        supportsFlight: !0,
        hasUnsupportedRendererAttached: !1,
        renderers: t,
        onCommitFiberRoot: p,
        onCommitFiberUnmount: p,
        onPostCommitFiberRoot: p,
        inject(o) {
          const i = ++n;
          return (
            t.set(i, o),
            r._instrumentationIsActive ||
              ((r._instrumentationIsActive = !0), e?.()),
            i
          );
        },
        _instrumentationSource: u,
        _instrumentationIsActive: !1,
      };
      try {
        Object.defineProperty(globalThis, "__REACT_DEVTOOLS_GLOBAL_HOOK__", {
          value: r,
        });
      } catch {
        w(e);
      }
      return r;
    },
    w = (e) => {
      try {
        const e = globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;
        e._instrumentationSource ||
          ((f = m(e)),
          (e.checkDCE = h),
          (e.supportsFiber = !0),
          (e.supportsFlight = !0),
          (e.hasUnsupportedRendererAttached = !1),
          (e._instrumentationSource = u),
          (e._instrumentationIsActive = !0));
      } catch {}
      e?.();
    },
    v = (e) =>
      Object.prototype.hasOwnProperty.call(
        globalThis,
        "__REACT_DEVTOOLS_GLOBAL_HOOK__",
      )
        ? (w(e), globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__)
        : g(e);
  try {
    "undefined" == typeof window ||
      (!window.document?.createElement &&
        "ReactNative" !== window.navigator?.product) ||
      (g(),
      "undefined" != typeof navigator &&
        "serviceWorker" in navigator &&
        navigator.serviceWorker
          .register(
            new URL(
              "./sw.js",
              (t && "SCRIPT" === t.tagName.toUpperCase() && t.src) ||
                new URL("auto.global.js", document.baseURI).href,
            ),
          )
          .then(() => {
            0;
          })
          .catch(() => {}));
  } catch {}
  var b,
    x,
    y,
    k,
    _,
    S,
    N,
    C,
    E,
    T,
    z,
    A,
    $,
    M = (e) => {
      switch (e.tag) {
        case 5:
        case 26:
        case 27:
          return !0;
        default:
          return "string" == typeof e.type;
      }
    },
    F = (e) => {
      switch (e.tag) {
        case 0:
        case 1:
        case 15:
        case 14:
        case 11:
          return !0;
        default:
          return !1;
      }
    },
    R = (e) => {
      const t = e.memoizedProps,
        n = e.alternate?.memoizedProps || {},
        r = e.flags ?? e.effectTag ?? 0;
      switch (e.tag) {
        case 1:
        case 0:
        case 9:
        case 11:
        case 14:
        case 15:
          return !(1 & ~r);
        default:
          return (
            !e.alternate ||
            n !== t ||
            e.alternate.memoizedState !== e.memoizedState ||
            e.alternate.ref !== e.ref
          );
      }
    },
    j = (e) => Boolean(!!(13374 & e.flags) || !!(13374 & e.subtreeFlags)),
    P = (e) => {
      switch (e.tag) {
        case 18:
        case 6:
        case 7:
        case 23:
        case 22:
          return !0;
        case 3:
          return !1;
        default: {
          const t =
            "object" == typeof e.type && null !== e.type
              ? e.type.$$typeof
              : e.type;
          switch ("symbol" == typeof t ? t.toString() : t) {
            case 60111:
            case "Symbol(react.concurrent_mode)":
            case "Symbol(react.async_mode)":
              return !0;
            default:
              return !1;
          }
        }
      }
    },
    D = (e, t, n = !1) => {
      if (!e) return null;
      if (!0 === t(e)) return e;
      let r = n ? e.return : e.child;
      for (; r; ) {
        const e = D(r, t, n);
        if (e) return e;
        r = n ? null : r.sibling;
      }
      return null;
    },
    I = (e) => {
      const t = e?.actualDuration ?? 0;
      let n = t,
        r = e?.child ?? null;
      for (; t > 0 && null != r; )
        (n -= r.actualDuration ?? 0), (r = r.sibling);
      return { selfTime: n, totalTime: t };
    },
    O = (e) => Boolean(e.updateQueue?.memoCache),
    L = (e) => {
      const t = e;
      return "function" == typeof t
        ? t
        : "object" == typeof t && t
          ? L(t.type || t.render)
          : null;
    },
    U = (e) => {
      const t = e;
      if ("function" != typeof t && ("object" != typeof t || !t)) return null;
      const n = t.displayName || t.name || null;
      if (n) return n;
      const r = L(t);
      return (r && (r.displayName || r.name)) || null;
    },
    H = (e) => {
      try {
        if ("string" == typeof e.version && e.bundleType > 0)
          return "development";
      } catch {}
      return "production";
    },
    V = () => {
      const e = v();
      return (
        Boolean(e._instrumentationIsActive) ||
        ((e = v()) => "getFiberRoots" in e)() ||
        m()
      );
    },
    B = 0,
    W = new WeakMap(),
    Y = (e) => {
      let t = W.get(e);
      return (
        !t && e.alternate && (t = W.get(e.alternate)),
        t ||
          ((t = B++),
          ((e, t = B++) => {
            W.set(e, t);
          })(e, t)),
        t
      );
    },
    X = (e, t, n) => {
      let r = t;
      for (; null != r; ) {
        W.has(r) || Y(r);
        if ((!P(r) && R(r) && e(r, "mount"), 13 === r.tag)) {
          if (null !== r.memoizedState) {
            const t = r.child,
              n = t ? t.sibling : null;
            if (n) {
              const t = n.child;
              null !== t && X(e, t, !1);
            }
          } else {
            let t = null;
            null !== r.child && (t = r.child.child), null !== t && X(e, t, !1);
          }
        } else null != r.child && X(e, r.child, !0);
        r = n ? r.sibling : null;
      }
    },
    q = (e, t, n, r) => {
      if ((W.has(t) || Y(t), !n)) return;
      W.has(n) || Y(n);
      const o = 13 === t.tag;
      !P(t) && R(t) && e(t, "update");
      const i = o && null !== n.memoizedState,
        a = o && null !== t.memoizedState;
      if (i && a) {
        const r = t.child?.sibling ?? null,
          o = n.child?.sibling ?? null;
        null !== r && null !== o && q(e, r, o);
      } else if (i && !a) {
        const n = t.child;
        null !== n && X(e, n, !0);
      } else if (!i && a) {
        G(e, n);
        const r = t.child?.sibling ?? null;
        null !== r && X(e, r, !0);
      } else if (t.child !== n.child) {
        let n = t.child;
        for (; n; ) {
          if (n.alternate) {
            const t = n.alternate;
            q(e, n, t);
          } else X(e, n, !1);
          n = n.sibling;
        }
      }
    },
    J = (e, t) => {
      (!(3 === t.tag) && P(t)) || e(t, "unmount");
    },
    G = (e, t) => {
      const n = 13 === t.tag && null !== t.memoizedState;
      let r = t.child;
      if (n) {
        const e = t.child,
          n = e?.sibling ?? null;
        r = n?.child ?? null;
      }
      for (; null !== r; )
        null !== r.return && (J(e, r), G(e, r)), (r = r.sibling);
    },
    K = 0,
    Z = new WeakMap(),
    Q = () => {
      g();
    };
  Q();
  var ee,
    te,
    ne,
    re,
    oe = {},
    ie = [],
    ae = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    se = Array.isArray;
  function le(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function ce(e) {
    e && e.parentNode && e.parentNode.removeChild(e);
  }
  function de(e, t, n) {
    var r,
      o,
      i,
      a = {};
    for (i in t)
      "key" == i ? (r = t[i]) : "ref" == i ? (o = t[i]) : (a[i] = t[i]);
    if (
      (arguments.length > 2 &&
        (a.children = arguments.length > 3 ? b.call(arguments, 2) : n),
      "function" == typeof e && null != e.defaultProps)
    )
      for (i in e.defaultProps) void 0 === a[i] && (a[i] = e.defaultProps[i]);
    return ue(e, a, r, o, null);
  }
  function ue(e, t, n, r, o) {
    var i = {
      type: e,
      props: t,
      key: n,
      ref: r,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __c: null,
      constructor: void 0,
      __v: null == o ? ++y : o,
      __i: -1,
      __u: 0,
    };
    return null == o && null != x.vnode && x.vnode(i), i;
  }
  function pe(e) {
    return e.children;
  }
  function he(e, t) {
    (this.props = e), (this.context = t);
  }
  function fe(e, t) {
    if (null == t) return e.__ ? fe(e.__, e.__i + 1) : null;
    for (var n; t < e.__k.length; t++)
      if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
    return "function" == typeof e.type ? fe(e) : null;
  }
  function me(e) {
    var t, n;
    if (null != (e = e.__) && null != e.__c) {
      for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
        if (null != (n = e.__k[t]) && null != n.__e) {
          e.__e = e.__c.base = n.__e;
          break;
        }
      return me(e);
    }
  }
  function ge(e) {
    ((!e.__d && (e.__d = !0) && _.push(e) && !we.__r++) ||
      S !== x.debounceRendering) &&
      ((S = x.debounceRendering) || N)(we);
  }
  function we() {
    var e, t, n, r, o, i, a, s;
    for (_.sort(C); (e = _.shift()); )
      e.__d &&
        ((t = _.length),
        (r = void 0),
        (i = (o = (n = e).__v).__e),
        (a = []),
        (s = []),
        n.__P &&
          (((r = le({}, o)).__v = o.__v + 1),
          x.vnode && x.vnode(r),
          Ne(
            n.__P,
            r,
            o,
            n.__n,
            n.__P.namespaceURI,
            32 & o.__u ? [i] : null,
            a,
            null == i ? fe(o) : i,
            !!(32 & o.__u),
            s,
          ),
          (r.__v = o.__v),
          (r.__.__k[r.__i] = r),
          Ce(a, r, s),
          r.__e != i && me(r)),
        _.length > t && _.sort(C));
    we.__r = 0;
  }
  function ve(e, t, n, r, o, i, a, s, l, c, d) {
    var u,
      p,
      h,
      f,
      m,
      g,
      w = (r && r.__k) || ie,
      v = t.length;
    for (
      l = (function (e, t, n, r) {
        var o,
          i,
          a,
          s,
          l,
          c = t.length,
          d = n.length,
          u = d,
          p = 0;
        for (e.__k = [], o = 0; o < c; o++)
          null != (i = t[o]) && "boolean" != typeof i && "function" != typeof i
            ? ((s = o + p),
              ((i = e.__k[o] =
                "string" == typeof i ||
                "number" == typeof i ||
                "bigint" == typeof i ||
                i.constructor == String
                  ? ue(null, i, null, null, null)
                  : se(i)
                    ? ue(pe, { children: i }, null, null, null)
                    : void 0 === i.constructor && i.__b > 0
                      ? ue(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v)
                      : i).__ = e),
              (i.__b = e.__b + 1),
              (a = null),
              -1 !== (l = i.__i = ye(i, n, s, u)) &&
                (u--, (a = n[l]) && (a.__u |= 2)),
              null == a || null === a.__v
                ? (-1 == l && p--, "function" != typeof i.type && (i.__u |= 4))
                : l !== s &&
                  (l == s - 1
                    ? p--
                    : l == s + 1
                      ? p++
                      : (l > s ? p-- : p++, (i.__u |= 4))))
            : (i = e.__k[o] = null);
        if (u)
          for (o = 0; o < d; o++)
            null != (a = n[o]) &&
              !(2 & a.__u) &&
              (a.__e == r && (r = fe(a)), Te(a, a));
        return r;
      })(n, t, w, l),
        u = 0;
      u < v;
      u++
    )
      null != (h = n.__k[u]) &&
        ((p = -1 === h.__i ? oe : w[h.__i] || oe),
        (h.__i = u),
        (g = Ne(e, h, p, o, i, a, s, l, c, d)),
        (f = h.__e),
        h.ref &&
          p.ref != h.ref &&
          (p.ref && Ee(p.ref, null, h), d.push(h.ref, h.__c || f, h)),
        null == m && null != f && (m = f),
        4 & h.__u || p.__k === h.__k
          ? (l = be(h, l, e))
          : "function" == typeof h.type && void 0 !== g
            ? (l = g)
            : f && (l = f.nextSibling),
        (h.__u &= -7));
    return (n.__e = m), l;
  }
  function be(e, t, n) {
    var r, o;
    if ("function" == typeof e.type) {
      for (r = e.__k, o = 0; r && o < r.length; o++)
        r[o] && ((r[o].__ = e), (t = be(r[o], t, n)));
      return t;
    }
    e.__e != t &&
      (t && e.type && !n.contains(t) && (t = fe(e)),
      n.insertBefore(e.__e, t || null),
      (t = e.__e));
    do {
      t = t && t.nextSibling;
    } while (null != t && 8 === t.nodeType);
    return t;
  }
  function xe(e, t) {
    return (
      (t = t || []),
      null == e ||
        "boolean" == typeof e ||
        (se(e)
          ? e.some(function (e) {
              xe(e, t);
            })
          : t.push(e)),
      t
    );
  }
  function ye(e, t, n, r) {
    var o = e.key,
      i = e.type,
      a = n - 1,
      s = n + 1,
      l = t[n];
    if (null === l || (l && o == l.key && i === l.type && !(2 & l.__u)))
      return n;
    if (
      ("function" != typeof i || i === pe || o) &&
      r > (null == l || 2 & l.__u ? 0 : 1)
    )
      for (; a >= 0 || s < t.length; ) {
        if (a >= 0) {
          if ((l = t[a]) && !(2 & l.__u) && o == l.key && i === l.type)
            return a;
          a--;
        }
        if (s < t.length) {
          if ((l = t[s]) && !(2 & l.__u) && o == l.key && i === l.type)
            return s;
          s++;
        }
      }
    return -1;
  }
  function ke(e, t, n) {
    "-" === t[0]
      ? e.setProperty(t, null == n ? "" : n)
      : (e[t] =
          null == n ? "" : "number" != typeof n || ae.test(t) ? n : n + "px");
  }
  function _e(e, t, n, r, o) {
    var i;
    e: if ("style" === t)
      if ("string" == typeof n) e.style.cssText = n;
      else {
        if (("string" == typeof r && (e.style.cssText = r = ""), r))
          for (t in r) (n && t in n) || ke(e.style, t, "");
        if (n) for (t in n) (r && n[t] === r[t]) || ke(e.style, t, n[t]);
      }
    else if ("o" === t[0] && "n" === t[1])
      (i = t !== (t = t.replace(E, "$1"))),
        (t =
          t.toLowerCase() in e || "onFocusOut" === t || "onFocusIn" === t
            ? t.toLowerCase().slice(2)
            : t.slice(2)),
        e.l || (e.l = {}),
        (e.l[t + i] = n),
        n
          ? r
            ? (n.u = r.u)
            : ((n.u = T), e.addEventListener(t, i ? A : z, i))
          : e.removeEventListener(t, i ? A : z, i);
    else {
      if ("http://www.w3.org/2000/svg" == o)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (
        "width" != t &&
        "height" != t &&
        "href" != t &&
        "list" != t &&
        "form" != t &&
        "tabIndex" != t &&
        "download" != t &&
        "rowSpan" != t &&
        "colSpan" != t &&
        "role" != t &&
        "popover" != t &&
        t in e
      )
        try {
          e[t] = null == n ? "" : n;
          break e;
        } catch (e) {}
      "function" == typeof n ||
        (null == n || (!1 === n && "-" !== t[4])
          ? e.removeAttribute(t)
          : e.setAttribute(t, "popover" == t && 1 == n ? "" : n));
    }
  }
  function Se(e) {
    return function (t) {
      if (this.l) {
        var n = this.l[t.type + e];
        if (null == t.t) t.t = T++;
        else if (t.t < n.u) return;
        return n(x.event ? x.event(t) : t);
      }
    };
  }
  function Ne(e, t, n, r, o, i, a, s, l, c) {
    var d,
      u,
      p,
      h,
      f,
      m,
      g,
      w,
      v,
      y,
      k,
      _,
      S,
      N,
      C,
      E,
      T,
      z = t.type;
    if (void 0 !== t.constructor) return null;
    128 & n.__u && ((l = !!(32 & n.__u)), (i = [(s = t.__e = n.__e)])),
      (d = x.__b) && d(t);
    e: if ("function" == typeof z)
      try {
        if (
          ((w = t.props),
          (v = "prototype" in z && z.prototype.render),
          (y = (d = z.contextType) && r[d.__c]),
          (k = d ? (y ? y.props.value : d.__) : r),
          n.__c
            ? (g = (u = t.__c = n.__c).__ = u.__E)
            : (v
                ? (t.__c = u = new z(w, k))
                : ((t.__c = u = new he(w, k)),
                  (u.constructor = z),
                  (u.render = ze)),
              y && y.sub(u),
              (u.props = w),
              u.state || (u.state = {}),
              (u.context = k),
              (u.__n = r),
              (p = u.__d = !0),
              (u.__h = []),
              (u._sb = [])),
          v && null == u.__s && (u.__s = u.state),
          v &&
            null != z.getDerivedStateFromProps &&
            (u.__s == u.state && (u.__s = le({}, u.__s)),
            le(u.__s, z.getDerivedStateFromProps(w, u.__s))),
          (h = u.props),
          (f = u.state),
          (u.__v = t),
          p)
        )
          v &&
            null == z.getDerivedStateFromProps &&
            null != u.componentWillMount &&
            u.componentWillMount(),
            v && null != u.componentDidMount && u.__h.push(u.componentDidMount);
        else {
          if (
            (v &&
              null == z.getDerivedStateFromProps &&
              w !== h &&
              null != u.componentWillReceiveProps &&
              u.componentWillReceiveProps(w, k),
            !u.__e &&
              ((null != u.shouldComponentUpdate &&
                !1 === u.shouldComponentUpdate(w, u.__s, k)) ||
                t.__v === n.__v))
          ) {
            for (
              t.__v !== n.__v &&
                ((u.props = w), (u.state = u.__s), (u.__d = !1)),
                t.__e = n.__e,
                t.__k = n.__k,
                t.__k.some(function (e) {
                  e && (e.__ = t);
                }),
                _ = 0;
              _ < u._sb.length;
              _++
            )
              u.__h.push(u._sb[_]);
            (u._sb = []), u.__h.length && a.push(u);
            break e;
          }
          null != u.componentWillUpdate && u.componentWillUpdate(w, u.__s, k),
            v &&
              null != u.componentDidUpdate &&
              u.__h.push(function () {
                u.componentDidUpdate(h, f, m);
              });
        }
        if (
          ((u.context = k),
          (u.props = w),
          (u.__P = e),
          (u.__e = !1),
          (S = x.__r),
          (N = 0),
          v)
        ) {
          for (
            u.state = u.__s,
              u.__d = !1,
              S && S(t),
              d = u.render(u.props, u.state, u.context),
              C = 0;
            C < u._sb.length;
            C++
          )
            u.__h.push(u._sb[C]);
          u._sb = [];
        } else
          do {
            (u.__d = !1),
              S && S(t),
              (d = u.render(u.props, u.state, u.context)),
              (u.state = u.__s);
          } while (u.__d && ++N < 25);
        (u.state = u.__s),
          null != u.getChildContext && (r = le(le({}, r), u.getChildContext())),
          v &&
            !p &&
            null != u.getSnapshotBeforeUpdate &&
            (m = u.getSnapshotBeforeUpdate(h, f)),
          (s = ve(
            e,
            se(
              (E =
                null != d && d.type === pe && null == d.key
                  ? d.props.children
                  : d),
            )
              ? E
              : [E],
            t,
            n,
            r,
            o,
            i,
            a,
            s,
            l,
            c,
          )),
          (u.base = t.__e),
          (t.__u &= -161),
          u.__h.length && a.push(u),
          g && (u.__E = u.__ = null);
      } catch (e) {
        if (((t.__v = null), l || null != i))
          if (e.then) {
            for (
              t.__u |= l ? 160 : 128;
              s && 8 === s.nodeType && s.nextSibling;

            )
              s = s.nextSibling;
            (i[i.indexOf(s)] = null), (t.__e = s);
          } else for (T = i.length; T--; ) ce(i[T]);
        else (t.__e = n.__e), (t.__k = n.__k);
        x.__e(e, t, n);
      }
    else
      null == i && t.__v === n.__v
        ? ((t.__k = n.__k), (t.__e = n.__e))
        : (s = t.__e =
            (function (e, t, n, r, o, i, a, s, l) {
              var c,
                d,
                u,
                p,
                h,
                f,
                m,
                g = n.props,
                w = t.props,
                v = t.type;
              if (
                ("svg" === v
                  ? (o = "http://www.w3.org/2000/svg")
                  : "math" === v
                    ? (o = "http://www.w3.org/1998/Math/MathML")
                    : o || (o = "http://www.w3.org/1999/xhtml"),
                null != i)
              )
                for (c = 0; c < i.length; c++)
                  if (
                    (h = i[c]) &&
                    "setAttribute" in h == !!v &&
                    (v ? h.localName === v : 3 === h.nodeType)
                  ) {
                    (e = h), (i[c] = null);
                    break;
                  }
              if (null == e) {
                if (null === v) return document.createTextNode(w);
                (e = document.createElementNS(o, v, w.is && w)),
                  s && (x.__m && x.__m(t, i), (s = !1)),
                  (i = null);
              }
              if (null === v) g === w || (s && e.data === w) || (e.data = w);
              else {
                if (
                  ((i = i && b.call(e.childNodes)),
                  (g = n.props || oe),
                  !s && null != i)
                )
                  for (g = {}, c = 0; c < e.attributes.length; c++)
                    g[(h = e.attributes[c]).name] = h.value;
                for (c in g)
                  if (((h = g[c]), "children" == c));
                  else if ("dangerouslySetInnerHTML" == c) u = h;
                  else if (!(c in w)) {
                    if (
                      ("value" == c && "defaultValue" in w) ||
                      ("checked" == c && "defaultChecked" in w)
                    )
                      continue;
                    _e(e, c, null, h, o);
                  }
                for (c in w)
                  (h = w[c]),
                    "children" == c
                      ? (p = h)
                      : "dangerouslySetInnerHTML" == c
                        ? (d = h)
                        : "value" == c
                          ? (f = h)
                          : "checked" == c
                            ? (m = h)
                            : (s && "function" != typeof h) ||
                              g[c] === h ||
                              _e(e, c, h, g[c], o);
                if (d)
                  s ||
                    (u &&
                      (d.__html === u.__html || d.__html === e.innerHTML)) ||
                    (e.innerHTML = d.__html),
                    (t.__k = []);
                else if (
                  (u && (e.innerHTML = ""),
                  ve(
                    e,
                    se(p) ? p : [p],
                    t,
                    n,
                    r,
                    "foreignObject" === v ? "http://www.w3.org/1999/xhtml" : o,
                    i,
                    a,
                    i ? i[0] : n.__k && fe(n, 0),
                    s,
                    l,
                  ),
                  null != i)
                )
                  for (c = i.length; c--; ) ce(i[c]);
                s ||
                  ((c = "value"),
                  "progress" === v && null == f
                    ? e.removeAttribute("value")
                    : void 0 !== f &&
                      (f !== e[c] ||
                        ("progress" === v && !f) ||
                        ("option" === v && f !== g[c])) &&
                      _e(e, c, f, g[c], o),
                  (c = "checked"),
                  void 0 !== m && m !== e[c] && _e(e, c, m, g[c], o));
              }
              return e;
            })(n.__e, t, n, r, o, i, a, l, c));
    return (d = x.diffed) && d(t), 128 & t.__u ? void 0 : s;
  }
  function Ce(e, t, n) {
    for (var r = 0; r < n.length; r++) Ee(n[r], n[++r], n[++r]);
    x.__c && x.__c(t, e),
      e.some(function (t) {
        try {
          (e = t.__h),
            (t.__h = []),
            e.some(function (e) {
              e.call(t);
            });
        } catch (e) {
          x.__e(e, t.__v);
        }
      });
  }
  function Ee(e, t, n) {
    try {
      if ("function" == typeof e) {
        var r = "function" == typeof e.__u;
        r && e.__u(), (r && null == t) || (e.__u = e(t));
      } else e.current = t;
    } catch (e) {
      x.__e(e, n);
    }
  }
  function Te(e, t, n) {
    var r, o;
    if (
      (x.unmount && x.unmount(e),
      (r = e.ref) && ((r.current && r.current !== e.__e) || Ee(r, null, t)),
      null != (r = e.__c))
    ) {
      if (r.componentWillUnmount)
        try {
          r.componentWillUnmount();
        } catch (e) {
          x.__e(e, t);
        }
      r.base = r.__P = null;
    }
    if ((r = e.__k))
      for (o = 0; o < r.length; o++)
        r[o] && Te(r[o], t, n || "function" != typeof e.type);
    n || ce(e.__e), (e.__c = e.__ = e.__e = void 0);
  }
  function ze(e, t, n) {
    return this.constructor(e, n);
  }
  function Ae(e, t, n) {
    var r, o, i, a;
    t === document && (t = document.documentElement),
      x.__ && x.__(e, t),
      (o = (r = "function" == typeof n) ? null : t.__k),
      (i = []),
      (a = []),
      Ne(
        t,
        (e = ((!r && n) || t).__k = de(pe, null, [e])),
        o || oe,
        oe,
        t.namespaceURI,
        !r && n ? [n] : o ? null : t.firstChild ? b.call(t.childNodes) : null,
        i,
        !r && n ? n : o ? o.__e : t.firstChild,
        r,
        a,
      ),
      Ce(i, e, a);
  }
  function $e(e, t) {
    var n = {
      __c: (t = "__cC" + $++),
      __: e,
      Consumer: function (e, t) {
        return e.children(t);
      },
      Provider: function (e) {
        var n, r;
        return (
          this.getChildContext ||
            ((n = new Set()),
            ((r = {})[t] = this),
            (this.getChildContext = function () {
              return r;
            }),
            (this.componentWillUnmount = function () {
              n = null;
            }),
            (this.shouldComponentUpdate = function (e) {
              this.props.value !== e.value &&
                n.forEach(function (e) {
                  (e.__e = !0), ge(e);
                });
            }),
            (this.sub = function (e) {
              n.add(e);
              var t = e.componentWillUnmount;
              e.componentWillUnmount = function () {
                n && n.delete(e), t && t.call(e);
              };
            })),
          e.children
        );
      },
    };
    return (n.Provider.__ = n.Consumer.contextType = n);
  }
  (b = ie.slice),
    (x = {
      __e: function (e, t, n, r) {
        for (var o, i, a; (t = t.__); )
          if ((o = t.__c) && !o.__)
            try {
              if (
                ((i = o.constructor) &&
                  null != i.getDerivedStateFromError &&
                  (o.setState(i.getDerivedStateFromError(e)), (a = o.__d)),
                null != o.componentDidCatch &&
                  (o.componentDidCatch(e, r || {}), (a = o.__d)),
                a)
              )
                return (o.__E = o);
            } catch (t) {
              e = t;
            }
        throw e;
      },
    }),
    (y = 0),
    (k = function (e) {
      return null != e && null == e.constructor;
    }),
    (he.prototype.setState = function (e, t) {
      var n;
      (n =
        null != this.__s && this.__s !== this.state
          ? this.__s
          : (this.__s = le({}, this.state))),
        "function" == typeof e && (e = e(le({}, n), this.props)),
        e && le(n, e),
        null != e && this.__v && (t && this._sb.push(t), ge(this));
    }),
    (he.prototype.forceUpdate = function (e) {
      this.__v && ((this.__e = !0), e && this.__h.push(e), ge(this));
    }),
    (he.prototype.render = pe),
    (_ = []),
    (N =
      "function" == typeof Promise
        ? Promise.prototype.then.bind(Promise.resolve())
        : setTimeout),
    (C = function (e, t) {
      return e.__v.__b - t.__v.__b;
    }),
    (we.__r = 0),
    (E = /(PointerCapture)$|Capture$/i),
    (T = 0),
    (z = Se(!1)),
    (A = Se(!0)),
    ($ = 0);
  var Me = 0,
    Fe = [],
    Re = x,
    je = Re.__b,
    Pe = Re.__r,
    De = Re.diffed,
    Ie = Re.__c,
    Oe = Re.unmount,
    Le = Re.__;
  function Ue(e, t) {
    Re.__h && Re.__h(te, e, Me || t), (Me = 0);
    var n = te.__H || (te.__H = { __: [], __h: [] });
    return e >= n.__.length && n.__.push({}), n.__[e];
  }
  function He(e) {
    return (
      (Me = 1),
      (function (e, t) {
        var n = Ue(ee++, 2);
        if (
          ((n.t = e),
          !n.__c &&
            ((n.__ = [
              tt(void 0, t),
              function (e) {
                var t = n.__N ? n.__N[0] : n.__[0],
                  r = n.t(t, e);
                t !== r && ((n.__N = [r, n.__[1]]), n.__c.setState({}));
              },
            ]),
            (n.__c = te),
            !te.u))
        ) {
          var r = function (e, t, r) {
            if (!n.__c.__H) return !0;
            var i = n.__c.__H.__.filter(function (e) {
              return !!e.__c;
            });
            if (
              i.every(function (e) {
                return !e.__N;
              })
            )
              return !o || o.call(this, e, t, r);
            var a = n.__c.props !== e;
            return (
              i.forEach(function (e) {
                if (e.__N) {
                  var t = e.__[0];
                  (e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (a = !0);
                }
              }),
              (o && o.call(this, e, t, r)) || a
            );
          };
          te.u = !0;
          var o = te.shouldComponentUpdate,
            i = te.componentWillUpdate;
          (te.componentWillUpdate = function (e, t, n) {
            if (this.__e) {
              var a = o;
              (o = void 0), r(e, t, n), (o = a);
            }
            i && i.call(this, e, t, n);
          }),
            (te.shouldComponentUpdate = r);
        }
        return n.__N || n.__;
      })(tt, e)
    );
  }
  function Ve(e, t) {
    var n = Ue(ee++, 3);
    !Re.__s && et(n.__H, t) && ((n.__ = e), (n.i = t), te.__H.__h.push(n));
  }
  function Be(e, t) {
    var n = Ue(ee++, 4);
    !Re.__s && et(n.__H, t) && ((n.__ = e), (n.i = t), te.__h.push(n));
  }
  function We(e) {
    return (
      (Me = 5),
      Ye(function () {
        return { current: e };
      }, [])
    );
  }
  function Ye(e, t) {
    var n = Ue(ee++, 7);
    return et(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__;
  }
  function Xe(e, t) {
    return (
      (Me = 8),
      Ye(function () {
        return e;
      }, t)
    );
  }
  function qe(e) {
    var t = te.context[e.__c],
      n = Ue(ee++, 9);
    return (
      (n.c = e),
      t ? (null == n.__ && ((n.__ = !0), t.sub(te)), t.props.value) : e.__
    );
  }
  function Je() {
    for (var e; (e = Fe.shift()); )
      if (e.__P && e.__H)
        try {
          e.__H.__h.forEach(Ze), e.__H.__h.forEach(Qe), (e.__H.__h = []);
        } catch (t) {
          (e.__H.__h = []), Re.__e(t, e.__v);
        }
  }
  (Re.__b = function (e) {
    (te = null), je && je(e);
  }),
    (Re.__ = function (e, t) {
      e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Le && Le(e, t);
    }),
    (Re.__r = function (e) {
      Pe && Pe(e), (ee = 0);
      var t = (te = e.__c).__H;
      t &&
        (ne === te
          ? ((t.__h = []),
            (te.__h = []),
            t.__.forEach(function (e) {
              e.__N && (e.__ = e.__N), (e.i = e.__N = void 0);
            }))
          : (t.__h.forEach(Ze), t.__h.forEach(Qe), (t.__h = []), (ee = 0))),
        (ne = te);
    }),
    (Re.diffed = function (e) {
      De && De(e);
      var t = e.__c;
      t &&
        t.__H &&
        (t.__H.__h.length &&
          ((1 !== Fe.push(t) && re === Re.requestAnimationFrame) ||
            ((re = Re.requestAnimationFrame) || Ke)(Je)),
        t.__H.__.forEach(function (e) {
          e.i && (e.__H = e.i), (e.i = void 0);
        })),
        (ne = te = null);
    }),
    (Re.__c = function (e, t) {
      t.some(function (e) {
        try {
          e.__h.forEach(Ze),
            (e.__h = e.__h.filter(function (e) {
              return !e.__ || Qe(e);
            }));
        } catch (n) {
          t.some(function (e) {
            e.__h && (e.__h = []);
          }),
            (t = []),
            Re.__e(n, e.__v);
        }
      }),
        Ie && Ie(e, t);
    }),
    (Re.unmount = function (e) {
      Oe && Oe(e);
      var t,
        n = e.__c;
      n &&
        n.__H &&
        (n.__H.__.forEach(function (e) {
          try {
            Ze(e);
          } catch (e) {
            t = e;
          }
        }),
        (n.__H = void 0),
        t && Re.__e(t, n.__v));
    });
  var Ge = "function" == typeof requestAnimationFrame;
  function Ke(e) {
    var t,
      n = function () {
        clearTimeout(r), Ge && cancelAnimationFrame(t), setTimeout(e);
      },
      r = setTimeout(n, 100);
    Ge && (t = requestAnimationFrame(n));
  }
  function Ze(e) {
    var t = te,
      n = e.__c;
    "function" == typeof n && ((e.__c = void 0), n()), (te = t);
  }
  function Qe(e) {
    var t = te;
    (e.__c = e.__()), (te = t);
  }
  function et(e, t) {
    return (
      !e ||
      e.length !== t.length ||
      t.some(function (t, n) {
        return t !== e[n];
      })
    );
  }
  function tt(e, t) {
    return "function" == typeof t ? t(e) : t;
  }
  var nt = Symbol.for("preact-signals");
  function rt() {
    if (st > 1) st--;
    else {
      for (var e, t = !1; void 0 !== at; ) {
        var n = at;
        for (at = void 0, lt++; void 0 !== n; ) {
          var r = n.o;
          if (((n.o = void 0), (n.f &= -3), !(8 & n.f) && ht(n)))
            try {
              n.c();
            } catch (n) {
              t || ((e = n), (t = !0));
            }
          n = r;
        }
      }
      if (((lt = 0), st--, t)) throw e;
    }
  }
  var ot,
    it = void 0,
    at = void 0,
    st = 0,
    lt = 0,
    ct = 0;
  function dt(e) {
    if (void 0 !== it) {
      var t = e.n;
      if (void 0 === t || t.t !== it)
        return (
          (t = {
            i: 0,
            S: e,
            p: it.s,
            n: void 0,
            t: it,
            e: void 0,
            x: void 0,
            r: t,
          }),
          void 0 !== it.s && (it.s.n = t),
          (it.s = t),
          (e.n = t),
          32 & it.f && e.S(t),
          t
        );
      if (-1 === t.i)
        return (
          (t.i = 0),
          void 0 !== t.n &&
            ((t.n.p = t.p),
            void 0 !== t.p && (t.p.n = t.n),
            (t.p = it.s),
            (t.n = void 0),
            (it.s.n = t),
            (it.s = t)),
          t
        );
    }
  }
  function ut(e) {
    (this.v = e), (this.i = 0), (this.n = void 0), (this.t = void 0);
  }
  function pt(e) {
    return new ut(e);
  }
  function ht(e) {
    for (var t = e.s; void 0 !== t; t = t.n)
      if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
    return !1;
  }
  function ft(e) {
    for (var t = e.s; void 0 !== t; t = t.n) {
      var n = t.S.n;
      if (
        (void 0 !== n && (t.r = n), (t.S.n = t), (t.i = -1), void 0 === t.n)
      ) {
        e.s = t;
        break;
      }
    }
  }
  function mt(e) {
    for (var t = e.s, n = void 0; void 0 !== t; ) {
      var r = t.p;
      -1 === t.i
        ? (t.S.U(t), void 0 !== r && (r.n = t.n), void 0 !== t.n && (t.n.p = r))
        : (n = t),
        (t.S.n = t.r),
        void 0 !== t.r && (t.r = void 0),
        (t = r);
    }
    e.s = n;
  }
  function gt(e) {
    ut.call(this, void 0),
      (this.x = e),
      (this.s = void 0),
      (this.g = ct - 1),
      (this.f = 4);
  }
  function wt(e) {
    var t = e.u;
    if (((e.u = void 0), "function" == typeof t)) {
      st++;
      var n = it;
      it = void 0;
      try {
        t();
      } catch (t) {
        throw ((e.f &= -2), (e.f |= 8), vt(e), t);
      } finally {
        (it = n), rt();
      }
    }
  }
  function vt(e) {
    for (var t = e.s; void 0 !== t; t = t.n) t.S.U(t);
    (e.x = void 0), (e.s = void 0), wt(e);
  }
  function bt(e) {
    if (it !== this) throw new Error("Out-of-order effect");
    mt(this), (it = e), (this.f &= -2), 8 & this.f && vt(this), rt();
  }
  function xt(e) {
    (this.x = e),
      (this.u = void 0),
      (this.s = void 0),
      (this.o = void 0),
      (this.f = 32);
  }
  function yt(e) {
    var t = new xt(e);
    try {
      t.c();
    } catch (e) {
      throw (t.d(), e);
    }
    return t.d.bind(t);
  }
  function kt(e, t) {
    x[e] = t.bind(null, x[e] || function () {});
  }
  function _t(e) {
    ot && ot(), (ot = e && e.S());
  }
  function St(e) {
    var t = this,
      n = e.data,
      r = (function (e) {
        return Ye(function () {
          return pt(e);
        }, []);
      })(n);
    r.value = n;
    var o = Ye(function () {
      for (var e = t.__v; (e = e.__); )
        if (e.__c) {
          e.__c.__$f |= 4;
          break;
        }
      return (
        (t.__$u.c = function () {
          var e,
            n = t.__$u.S(),
            r = o.value;
          n(),
            k(r) || 3 !== (null == (e = t.base) ? void 0 : e.nodeType)
              ? ((t.__$f |= 1), t.setState({}))
              : (t.base.data = r);
        }),
        new gt(function () {
          var e = r.value.value;
          return 0 === e ? 0 : !0 === e ? "" : e || "";
        })
      );
    }, []);
    return o.value;
  }
  function Nt(e, t, n, r) {
    var o = t in e && void 0 === e.ownerSVGElement,
      i = pt(n);
    return {
      o: function (e, t) {
        (i.value = e), (r = t);
      },
      d: yt(function () {
        var n = i.value.value;
        r[t] !== n &&
          ((r[t] = n),
          o ? (e[t] = n) : n ? e.setAttribute(t, n) : e.removeAttribute(t));
      }),
    };
  }
  function Ct(e, t) {
    return t - e;
  }
  function Et(e) {
    let t = e[0].name;
    const n = e.length,
      r = Math.min(4, n);
    for (let n = 1; n < r; n++) t += `, ${e[n].name}`;
    return t;
  }
  function Tt(e) {
    let t = e[0].time;
    for (let n = 1, r = e.length; n < r; n++) t += e[n].time;
    return t;
  }
  function zt(e) {
    for (let t = 0, n = e.length; t < n; t++) if (e[t].forget) return !0;
    return !1;
  }
  (ut.prototype.brand = nt),
    (ut.prototype.h = function () {
      return !0;
    }),
    (ut.prototype.S = function (e) {
      this.t !== e &&
        void 0 === e.e &&
        ((e.x = this.t), void 0 !== this.t && (this.t.e = e), (this.t = e));
    }),
    (ut.prototype.U = function (e) {
      if (void 0 !== this.t) {
        var t = e.e,
          n = e.x;
        void 0 !== t && ((t.x = n), (e.e = void 0)),
          void 0 !== n && ((n.e = t), (e.x = void 0)),
          e === this.t && (this.t = n);
      }
    }),
    (ut.prototype.subscribe = function (e) {
      var t = this;
      return yt(function () {
        var n = t.value,
          r = it;
        it = void 0;
        try {
          e(n);
        } finally {
          it = r;
        }
      });
    }),
    (ut.prototype.valueOf = function () {
      return this.value;
    }),
    (ut.prototype.toString = function () {
      return this.value + "";
    }),
    (ut.prototype.toJSON = function () {
      return this.value;
    }),
    (ut.prototype.peek = function () {
      var e = it;
      it = void 0;
      try {
        return this.value;
      } finally {
        it = e;
      }
    }),
    Object.defineProperty(ut.prototype, "value", {
      get: function () {
        var e = dt(this);
        return void 0 !== e && (e.i = this.i), this.v;
      },
      set: function (e) {
        if (e !== this.v) {
          if (lt > 100) throw new Error("Cycle detected");
          (this.v = e), this.i++, ct++, st++;
          try {
            for (var t = this.t; void 0 !== t; t = t.x) t.t.N();
          } finally {
            rt();
          }
        }
      },
    }),
    ((gt.prototype = new ut()).h = function () {
      if (((this.f &= -3), 1 & this.f)) return !1;
      if (32 == (36 & this.f)) return !0;
      if (((this.f &= -5), this.g === ct)) return !0;
      if (((this.g = ct), (this.f |= 1), this.i > 0 && !ht(this)))
        return (this.f &= -2), !0;
      var e = it;
      try {
        ft(this), (it = this);
        var t = this.x();
        (16 & this.f || this.v !== t || 0 === this.i) &&
          ((this.v = t), (this.f &= -17), this.i++);
      } catch (e) {
        (this.v = e), (this.f |= 16), this.i++;
      }
      return (it = e), mt(this), (this.f &= -2), !0;
    }),
    (gt.prototype.S = function (e) {
      if (void 0 === this.t) {
        this.f |= 36;
        for (var t = this.s; void 0 !== t; t = t.n) t.S.S(t);
      }
      ut.prototype.S.call(this, e);
    }),
    (gt.prototype.U = function (e) {
      if (
        void 0 !== this.t &&
        (ut.prototype.U.call(this, e), void 0 === this.t)
      ) {
        this.f &= -33;
        for (var t = this.s; void 0 !== t; t = t.n) t.S.U(t);
      }
    }),
    (gt.prototype.N = function () {
      if (!(2 & this.f)) {
        this.f |= 6;
        for (var e = this.t; void 0 !== e; e = e.x) e.t.N();
      }
    }),
    Object.defineProperty(gt.prototype, "value", {
      get: function () {
        if (1 & this.f) throw new Error("Cycle detected");
        var e = dt(this);
        if ((this.h(), void 0 !== e && (e.i = this.i), 16 & this.f))
          throw this.v;
        return this.v;
      },
    }),
    (xt.prototype.c = function () {
      var e = this.S();
      try {
        if (8 & this.f) return;
        if (void 0 === this.x) return;
        var t = this.x();
        "function" == typeof t && (this.u = t);
      } finally {
        e();
      }
    }),
    (xt.prototype.S = function () {
      if (1 & this.f) throw new Error("Cycle detected");
      (this.f |= 1), (this.f &= -9), wt(this), ft(this), st++;
      var e = it;
      return (it = this), bt.bind(this, e);
    }),
    (xt.prototype.N = function () {
      2 & this.f || ((this.f |= 2), (this.o = at), (at = this));
    }),
    (xt.prototype.d = function () {
      (this.f |= 8), 1 & this.f || vt(this);
    }),
    (St.displayName = "_st"),
    Object.defineProperties(ut.prototype, {
      constructor: { configurable: !0, value: void 0 },
      type: { configurable: !0, value: St },
      props: {
        configurable: !0,
        get: function () {
          return { data: this };
        },
      },
      __b: { configurable: !0, value: 1 },
    }),
    kt("__b", function (e, t) {
      if ("string" == typeof t.type) {
        var n,
          r = t.props;
        for (var o in r)
          if ("children" !== o) {
            var i = r[o];
            i instanceof ut &&
              (n || (t.__np = n = {}), (n[o] = i), (r[o] = i.peek()));
          }
      }
      e(t);
    }),
    kt("__r", function (e, t) {
      _t();
      var n,
        r,
        o = t.__c;
      o &&
        ((o.__$f &= -2),
        void 0 === (n = o.__$u) &&
          (o.__$u =
            (yt(function () {
              r = this;
            }),
            (r.c = function () {
              (o.__$f |= 1), o.setState({});
            }),
            (n = r)))),
        _t(n),
        e(t);
    }),
    kt("__e", function (e, t, n, r) {
      _t(), e(t, n, r);
    }),
    kt("diffed", function (e, t) {
      var n;
      if ((_t(), "string" == typeof t.type && (n = t.__e))) {
        var r = t.__np,
          o = t.props;
        if (r) {
          var i = n.U;
          if (i)
            for (var a in i) {
              var s = i[a];
              void 0 === s || a in r || (s.d(), (i[a] = void 0));
            }
          else n.U = i = {};
          for (var l in r) {
            var c = i[l],
              d = r[l];
            void 0 === c ? ((c = Nt(n, l, d, o)), (i[l] = c)) : c.o(d, o);
          }
        }
      }
      e(t);
    }),
    kt("unmount", function (e, t) {
      if ("string" == typeof t.type) {
        var n = t.__e;
        if (n) {
          var r = n.U;
          if (r)
            for (var o in ((n.U = void 0), r)) {
              var i = r[o];
              i && i.d();
            }
        }
      } else {
        var a = t.__c;
        if (a) {
          var s = a.__$u;
          s && ((a.__$u = void 0), s.d());
        }
      }
      e(t);
    }),
    kt("__h", function (e, t, n, r) {
      (r < 3 || 9 === r) && (t.__$f |= 2), e(t, n, r);
    }),
    (he.prototype.shouldComponentUpdate = function (e, t) {
      var n = this.__$u;
      if (!((n && void 0 !== n.s) || 4 & this.__$f)) return !0;
      if (3 & this.__$f) return !0;
      for (var r in t) return !0;
      for (var o in e)
        if ("__source" !== o && e[o] !== this.props[o]) return !0;
      for (var i in this.props) if (!(i in e)) return !0;
      return !1;
    });
  var At = (e) => {
    let t = "";
    const n = new Map();
    for (const t of e) {
      const { forget: e, time: r, aggregatedCount: o, name: i } = t;
      n.has(o) || n.set(o, []);
      const a = n.get(o);
      a && a.push({ name: i, forget: e, time: r ?? 0 });
    }
    const r = Array.from(n.keys()).sort(Ct),
      o = [];
    let i = 0;
    for (const e of r) {
      const t = n.get(e);
      if (!t) continue;
      let r = Et(t);
      const a = Tt(t),
        s = zt(t);
      (i += a),
        t.length > 4 && (r += "…"),
        e > 1 && (r += ` × ${e}`),
        s && (r = `✨${r}`),
        o.push(r);
    }
    return (
      (t = o.join(", ")),
      t.length
        ? (t.length > 40 && (t = `${t.slice(0, 40)}…`),
          i >= 0.01 && (t += ` (${Number(i.toFixed(2))}ms)`),
          t)
        : null
    );
  };
  function $t(e, t) {
    return e === t || (e != e && t != t);
  }
  var Mt = (e) => {
      const t = e.createOscillator(),
        n = e.createGain();
      t.connect(n), n.connect(e.destination);
      const r = "sine",
        o = 0.3,
        i = 0.12,
        a = [392, 600],
        s = o / a.length;
      a.forEach((n, r) => {
        t.frequency.setValueAtTime(n, e.currentTime + r * s);
      }),
        (t.type = r),
        n.gain.setValueAtTime(i, e.currentTime),
        n.gain.setTargetAtTime(0, e.currentTime + 0.7 * o, 0.05),
        t.start(),
        t.stop(e.currentTime + o);
    },
    Ft = (e, t, n) => e + (t - e) * n;
  function Rt(e) {
    var t,
      n,
      r = "";
    if ("string" == typeof e || "number" == typeof e) r += e;
    else if ("object" == typeof e)
      if (Array.isArray(e)) {
        var o = e.length;
        for (t = 0; t < o; t++)
          e[t] && (n = Rt(e[t])) && (r && (r += " "), (r += n));
      } else for (n in e) e[n] && (r && (r += " "), (r += n));
    return r;
  }
  var jt = (e) => {
      const t = Ot(e),
        { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
      return {
        getClassGroupId: (e) => {
          const n = e.split("-");
          return "" === n[0] && 1 !== n.length && n.shift(), Pt(n, t) || It(e);
        },
        getConflictingClassGroupIds: (e, t) => {
          const o = n[e] || [];
          return t && r[e] ? [...o, ...r[e]] : o;
        },
      };
    },
    Pt = (e, t) => {
      if (0 === e.length) return t.classGroupId;
      const n = e[0],
        r = t.nextPart.get(n),
        o = r ? Pt(e.slice(1), r) : void 0;
      if (o) return o;
      if (0 === t.validators.length) return;
      const i = e.join("-");
      return t.validators.find(({ validator: e }) => e(i))?.classGroupId;
    },
    Dt = /^\[(.+)\]$/,
    It = (e) => {
      if (Dt.test(e)) {
        const t = Dt.exec(e)[1],
          n = t?.substring(0, t.indexOf(":"));
        if (n) return "arbitrary.." + n;
      }
    },
    Ot = (e) => {
      const { theme: t, prefix: n } = e,
        r = { nextPart: new Map(), validators: [] };
      return (
        Vt(Object.entries(e.classGroups), n).forEach(([e, n]) => {
          Lt(n, r, e, t);
        }),
        r
      );
    },
    Lt = (e, t, n, r) => {
      e.forEach((e) => {
        if ("string" != typeof e) {
          if ("function" == typeof e)
            return Ht(e)
              ? void Lt(e(r), t, n, r)
              : void t.validators.push({ validator: e, classGroupId: n });
          Object.entries(e).forEach(([e, o]) => {
            Lt(o, Ut(t, e), n, r);
          });
        } else {
          ("" === e ? t : Ut(t, e)).classGroupId = n;
        }
      });
    },
    Ut = (e, t) => {
      let n = e;
      return (
        t.split("-").forEach((e) => {
          n.nextPart.has(e) ||
            n.nextPart.set(e, { nextPart: new Map(), validators: [] }),
            (n = n.nextPart.get(e));
        }),
        n
      );
    },
    Ht = (e) => e.isThemeGetter,
    Vt = (e, t) =>
      t
        ? e.map(([e, n]) => [
            e,
            n.map((e) =>
              "string" == typeof e
                ? t + e
                : "object" == typeof e
                  ? Object.fromEntries(
                      Object.entries(e).map(([e, n]) => [t + e, n]),
                    )
                  : e,
            ),
          ])
        : e,
    Bt = (e) => {
      if (e < 1) return { get: () => {}, set: () => {} };
      let t = 0,
        n = new Map(),
        r = new Map();
      const o = (o, i) => {
        n.set(o, i), t++, t > e && ((t = 0), (r = n), (n = new Map()));
      };
      return {
        get(e) {
          let t = n.get(e);
          return void 0 !== t
            ? t
            : void 0 !== (t = r.get(e))
              ? (o(e, t), t)
              : void 0;
        },
        set(e, t) {
          n.has(e) ? n.set(e, t) : o(e, t);
        },
      };
    },
    Wt = (e) => {
      const { separator: t, experimentalParseClassName: n } = e,
        r = 1 === t.length,
        o = t[0],
        i = t.length,
        a = (e) => {
          const n = [];
          let a,
            s = 0,
            l = 0;
          for (let c = 0; c < e.length; c++) {
            let d = e[c];
            if (0 === s) {
              if (d === o && (r || e.slice(c, c + i) === t)) {
                n.push(e.slice(l, c)), (l = c + i);
                continue;
              }
              if ("/" === d) {
                a = c;
                continue;
              }
            }
            "[" === d ? s++ : "]" === d && s--;
          }
          const c = 0 === n.length ? e : e.substring(l),
            d = c.startsWith("!");
          return {
            modifiers: n,
            hasImportantModifier: d,
            baseClassName: d ? c.substring(1) : c,
            maybePostfixModifierPosition: a && a > l ? a - l : void 0,
          };
        };
      return n ? (e) => n({ className: e, parseClassName: a }) : a;
    },
    Yt = (e) => {
      if (e.length <= 1) return e;
      const t = [];
      let n = [];
      return (
        e.forEach((e) => {
          "[" === e[0] ? (t.push(...n.sort(), e), (n = [])) : n.push(e);
        }),
        t.push(...n.sort()),
        t
      );
    },
    Xt = /\s+/;
  function qt() {
    let e,
      t,
      n = 0,
      r = "";
    for (; n < arguments.length; )
      (e = arguments[n++]) && (t = Jt(e)) && (r && (r += " "), (r += t));
    return r;
  }
  var Jt = (e) => {
    if ("string" == typeof e) return e;
    let t,
      n = "";
    for (let r = 0; r < e.length; r++)
      e[r] && (t = Jt(e[r])) && (n && (n += " "), (n += t));
    return n;
  };
  function Gt(e, ...t) {
    let n,
      r,
      o,
      i = function (s) {
        const l = t.reduce((e, t) => t(e), e());
        return (
          (n = ((e) => ({
            cache: Bt(e.cacheSize),
            parseClassName: Wt(e),
            ...jt(e),
          }))(l)),
          (r = n.cache.get),
          (o = n.cache.set),
          (i = a),
          a(s)
        );
      };
    function a(e) {
      const t = r(e);
      if (t) return t;
      const i = ((e, t) => {
        const {
            parseClassName: n,
            getClassGroupId: r,
            getConflictingClassGroupIds: o,
          } = t,
          i = [],
          a = e.trim().split(Xt);
        let s = "";
        for (let e = a.length - 1; e >= 0; e -= 1) {
          const t = a[e],
            {
              modifiers: l,
              hasImportantModifier: c,
              baseClassName: d,
              maybePostfixModifierPosition: u,
            } = n(t);
          let p = Boolean(u),
            h = r(p ? d.substring(0, u) : d);
          if (!h) {
            if (!p) {
              s = t + (s.length > 0 ? " " + s : s);
              continue;
            }
            if (((h = r(d)), !h)) {
              s = t + (s.length > 0 ? " " + s : s);
              continue;
            }
            p = !1;
          }
          const f = Yt(l).join(":"),
            m = c ? f + "!" : f,
            g = m + h;
          if (i.includes(g)) continue;
          i.push(g);
          const w = o(h, p);
          for (let e = 0; e < w.length; ++e) {
            const t = w[e];
            i.push(m + t);
          }
          s = t + (s.length > 0 ? " " + s : s);
        }
        return s;
      })(e, n);
      return o(e, i), i;
    }
    return function () {
      return i(qt.apply(null, arguments));
    };
  }
  var Kt = (e) => {
      const t = (t) => t[e] || [];
      return (t.isThemeGetter = !0), t;
    },
    Zt = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    Qt = /^\d+\/\d+$/,
    en = new Set(["px", "full", "screen"]),
    tn = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    nn =
      /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    rn = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    on = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    an =
      /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    sn = (e) => cn(e) || en.has(e) || Qt.test(e),
    ln = (e) => kn(e, "length", _n),
    cn = (e) => Boolean(e) && !Number.isNaN(Number(e)),
    dn = (e) => kn(e, "number", cn),
    un = (e) => Boolean(e) && Number.isInteger(Number(e)),
    pn = (e) => e.endsWith("%") && cn(e.slice(0, -1)),
    hn = (e) => Zt.test(e),
    fn = (e) => tn.test(e),
    mn = new Set(["length", "size", "percentage"]),
    gn = (e) => kn(e, mn, Sn),
    wn = (e) => kn(e, "position", Sn),
    vn = new Set(["image", "url"]),
    bn = (e) => kn(e, vn, Cn),
    xn = (e) => kn(e, "", Nn),
    yn = () => !0,
    kn = (e, t, n) => {
      const r = Zt.exec(e);
      return (
        !!r &&
        (r[1] ? ("string" == typeof t ? r[1] === t : t.has(r[1])) : n(r[2]))
      );
    },
    _n = (e) => nn.test(e) && !rn.test(e),
    Sn = () => !1,
    Nn = (e) => on.test(e),
    Cn = (e) => an.test(e),
    En = Gt(() => {
      const e = Kt("colors"),
        t = Kt("spacing"),
        n = Kt("blur"),
        r = Kt("brightness"),
        o = Kt("borderColor"),
        i = Kt("borderRadius"),
        a = Kt("borderSpacing"),
        s = Kt("borderWidth"),
        l = Kt("contrast"),
        c = Kt("grayscale"),
        d = Kt("hueRotate"),
        u = Kt("invert"),
        p = Kt("gap"),
        h = Kt("gradientColorStops"),
        f = Kt("gradientColorStopPositions"),
        m = Kt("inset"),
        g = Kt("margin"),
        w = Kt("opacity"),
        v = Kt("padding"),
        b = Kt("saturate"),
        x = Kt("scale"),
        y = Kt("sepia"),
        k = Kt("skew"),
        _ = Kt("space"),
        S = Kt("translate"),
        N = () => ["auto", hn, t],
        C = () => [hn, t],
        E = () => ["", sn, ln],
        T = () => ["auto", cn, hn],
        z = () => ["", "0", hn],
        A = () => [cn, hn];
      return {
        cacheSize: 500,
        separator: ":",
        theme: {
          colors: [yn],
          spacing: [sn, ln],
          blur: ["none", "", fn, hn],
          brightness: A(),
          borderColor: [e],
          borderRadius: ["none", "", "full", fn, hn],
          borderSpacing: C(),
          borderWidth: E(),
          contrast: A(),
          grayscale: z(),
          hueRotate: A(),
          invert: z(),
          gap: C(),
          gradientColorStops: [e],
          gradientColorStopPositions: [pn, ln],
          inset: N(),
          margin: N(),
          opacity: A(),
          padding: C(),
          saturate: A(),
          scale: A(),
          sepia: z(),
          skew: A(),
          space: C(),
          translate: C(),
        },
        classGroups: {
          aspect: [{ aspect: ["auto", "square", "video", hn] }],
          container: ["container"],
          columns: [{ columns: [fn] }],
          "break-after": [
            {
              "break-after": [
                "auto",
                "avoid",
                "all",
                "avoid-page",
                "page",
                "left",
                "right",
                "column",
              ],
            },
          ],
          "break-before": [
            {
              "break-before": [
                "auto",
                "avoid",
                "all",
                "avoid-page",
                "page",
                "left",
                "right",
                "column",
              ],
            },
          ],
          "break-inside": [
            { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
          ],
          "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
          box: [{ box: ["border", "content"] }],
          display: [
            "block",
            "inline-block",
            "inline",
            "flex",
            "inline-flex",
            "table",
            "inline-table",
            "table-caption",
            "table-cell",
            "table-column",
            "table-column-group",
            "table-footer-group",
            "table-header-group",
            "table-row-group",
            "table-row",
            "flow-root",
            "grid",
            "inline-grid",
            "contents",
            "list-item",
            "hidden",
          ],
          float: [{ float: ["right", "left", "none", "start", "end"] }],
          clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
          isolation: ["isolate", "isolation-auto"],
          "object-fit": [
            { object: ["contain", "cover", "fill", "none", "scale-down"] },
          ],
          "object-position": [
            {
              object: [
                "bottom",
                "center",
                "left",
                "left-bottom",
                "left-top",
                "right",
                "right-bottom",
                "right-top",
                "top",
                hn,
              ],
            },
          ],
          overflow: [
            { overflow: ["auto", "hidden", "clip", "visible", "scroll"] },
          ],
          "overflow-x": [
            { "overflow-x": ["auto", "hidden", "clip", "visible", "scroll"] },
          ],
          "overflow-y": [
            { "overflow-y": ["auto", "hidden", "clip", "visible", "scroll"] },
          ],
          overscroll: [{ overscroll: ["auto", "contain", "none"] }],
          "overscroll-x": [{ "overscroll-x": ["auto", "contain", "none"] }],
          "overscroll-y": [{ "overscroll-y": ["auto", "contain", "none"] }],
          position: ["static", "fixed", "absolute", "relative", "sticky"],
          inset: [{ inset: [m] }],
          "inset-x": [{ "inset-x": [m] }],
          "inset-y": [{ "inset-y": [m] }],
          start: [{ start: [m] }],
          end: [{ end: [m] }],
          top: [{ top: [m] }],
          right: [{ right: [m] }],
          bottom: [{ bottom: [m] }],
          left: [{ left: [m] }],
          visibility: ["visible", "invisible", "collapse"],
          z: [{ z: ["auto", un, hn] }],
          basis: [{ basis: N() }],
          "flex-direction": [
            { flex: ["row", "row-reverse", "col", "col-reverse"] },
          ],
          "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
          flex: [{ flex: ["1", "auto", "initial", "none", hn] }],
          grow: [{ grow: z() }],
          shrink: [{ shrink: z() }],
          order: [{ order: ["first", "last", "none", un, hn] }],
          "grid-cols": [{ "grid-cols": [yn] }],
          "col-start-end": [{ col: ["auto", { span: ["full", un, hn] }, hn] }],
          "col-start": [{ "col-start": T() }],
          "col-end": [{ "col-end": T() }],
          "grid-rows": [{ "grid-rows": [yn] }],
          "row-start-end": [{ row: ["auto", { span: [un, hn] }, hn] }],
          "row-start": [{ "row-start": T() }],
          "row-end": [{ "row-end": T() }],
          "grid-flow": [
            { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
          ],
          "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", hn] }],
          "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", hn] }],
          gap: [{ gap: [p] }],
          "gap-x": [{ "gap-x": [p] }],
          "gap-y": [{ "gap-y": [p] }],
          "justify-content": [
            {
              justify: [
                "normal",
                "start",
                "end",
                "center",
                "between",
                "around",
                "evenly",
                "stretch",
              ],
            },
          ],
          "justify-items": [
            { "justify-items": ["start", "end", "center", "stretch"] },
          ],
          "justify-self": [
            { "justify-self": ["auto", "start", "end", "center", "stretch"] },
          ],
          "align-content": [
            {
              content: [
                "normal",
                "start",
                "end",
                "center",
                "between",
                "around",
                "evenly",
                "stretch",
                "baseline",
              ],
            },
          ],
          "align-items": [
            { items: ["start", "end", "center", "baseline", "stretch"] },
          ],
          "align-self": [
            { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
          ],
          "place-content": [
            {
              "place-content": [
                "start",
                "end",
                "center",
                "between",
                "around",
                "evenly",
                "stretch",
                "baseline",
              ],
            },
          ],
          "place-items": [
            {
              "place-items": ["start", "end", "center", "baseline", "stretch"],
            },
          ],
          "place-self": [
            { "place-self": ["auto", "start", "end", "center", "stretch"] },
          ],
          p: [{ p: [v] }],
          px: [{ px: [v] }],
          py: [{ py: [v] }],
          ps: [{ ps: [v] }],
          pe: [{ pe: [v] }],
          pt: [{ pt: [v] }],
          pr: [{ pr: [v] }],
          pb: [{ pb: [v] }],
          pl: [{ pl: [v] }],
          m: [{ m: [g] }],
          mx: [{ mx: [g] }],
          my: [{ my: [g] }],
          ms: [{ ms: [g] }],
          me: [{ me: [g] }],
          mt: [{ mt: [g] }],
          mr: [{ mr: [g] }],
          mb: [{ mb: [g] }],
          ml: [{ ml: [g] }],
          "space-x": [{ "space-x": [_] }],
          "space-x-reverse": ["space-x-reverse"],
          "space-y": [{ "space-y": [_] }],
          "space-y-reverse": ["space-y-reverse"],
          w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", hn, t] }],
          "min-w": [{ "min-w": [hn, t, "min", "max", "fit"] }],
          "max-w": [
            {
              "max-w": [
                hn,
                t,
                "none",
                "full",
                "min",
                "max",
                "fit",
                "prose",
                { screen: [fn] },
                fn,
              ],
            },
          ],
          h: [{ h: [hn, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
          "min-h": [
            { "min-h": [hn, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
          ],
          "max-h": [
            { "max-h": [hn, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
          ],
          size: [{ size: [hn, t, "auto", "min", "max", "fit"] }],
          "font-size": [{ text: ["base", fn, ln] }],
          "font-smoothing": ["antialiased", "subpixel-antialiased"],
          "font-style": ["italic", "not-italic"],
          "font-weight": [
            {
              font: [
                "thin",
                "extralight",
                "light",
                "normal",
                "medium",
                "semibold",
                "bold",
                "extrabold",
                "black",
                dn,
              ],
            },
          ],
          "font-family": [{ font: [yn] }],
          "fvn-normal": ["normal-nums"],
          "fvn-ordinal": ["ordinal"],
          "fvn-slashed-zero": ["slashed-zero"],
          "fvn-figure": ["lining-nums", "oldstyle-nums"],
          "fvn-spacing": ["proportional-nums", "tabular-nums"],
          "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
          tracking: [
            {
              tracking: [
                "tighter",
                "tight",
                "normal",
                "wide",
                "wider",
                "widest",
                hn,
              ],
            },
          ],
          "line-clamp": [{ "line-clamp": ["none", cn, dn] }],
          leading: [
            {
              leading: [
                "none",
                "tight",
                "snug",
                "normal",
                "relaxed",
                "loose",
                sn,
                hn,
              ],
            },
          ],
          "list-image": [{ "list-image": ["none", hn] }],
          "list-style-type": [{ list: ["none", "disc", "decimal", hn] }],
          "list-style-position": [{ list: ["inside", "outside"] }],
          "placeholder-color": [{ placeholder: [e] }],
          "placeholder-opacity": [{ "placeholder-opacity": [w] }],
          "text-alignment": [
            { text: ["left", "center", "right", "justify", "start", "end"] },
          ],
          "text-color": [{ text: [e] }],
          "text-opacity": [{ "text-opacity": [w] }],
          "text-decoration": [
            "underline",
            "overline",
            "line-through",
            "no-underline",
          ],
          "text-decoration-style": [
            {
              decoration: [
                "solid",
                "dashed",
                "dotted",
                "double",
                "none",
                "wavy",
              ],
            },
          ],
          "text-decoration-thickness": [
            { decoration: ["auto", "from-font", sn, ln] },
          ],
          "underline-offset": [{ "underline-offset": ["auto", sn, hn] }],
          "text-decoration-color": [{ decoration: [e] }],
          "text-transform": [
            "uppercase",
            "lowercase",
            "capitalize",
            "normal-case",
          ],
          "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
          "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
          indent: [{ indent: C() }],
          "vertical-align": [
            {
              align: [
                "baseline",
                "top",
                "middle",
                "bottom",
                "text-top",
                "text-bottom",
                "sub",
                "super",
                hn,
              ],
            },
          ],
          whitespace: [
            {
              whitespace: [
                "normal",
                "nowrap",
                "pre",
                "pre-line",
                "pre-wrap",
                "break-spaces",
              ],
            },
          ],
          break: [{ break: ["normal", "words", "all", "keep"] }],
          hyphens: [{ hyphens: ["none", "manual", "auto"] }],
          content: [{ content: ["none", hn] }],
          "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
          "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
          "bg-opacity": [{ "bg-opacity": [w] }],
          "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
          "bg-position": [
            {
              bg: [
                "bottom",
                "center",
                "left",
                "left-bottom",
                "left-top",
                "right",
                "right-bottom",
                "right-top",
                "top",
                wn,
              ],
            },
          ],
          "bg-repeat": [
            { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
          ],
          "bg-size": [{ bg: ["auto", "cover", "contain", gn] }],
          "bg-image": [
            {
              bg: [
                "none",
                { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                bn,
              ],
            },
          ],
          "bg-color": [{ bg: [e] }],
          "gradient-from-pos": [{ from: [f] }],
          "gradient-via-pos": [{ via: [f] }],
          "gradient-to-pos": [{ to: [f] }],
          "gradient-from": [{ from: [h] }],
          "gradient-via": [{ via: [h] }],
          "gradient-to": [{ to: [h] }],
          rounded: [{ rounded: [i] }],
          "rounded-s": [{ "rounded-s": [i] }],
          "rounded-e": [{ "rounded-e": [i] }],
          "rounded-t": [{ "rounded-t": [i] }],
          "rounded-r": [{ "rounded-r": [i] }],
          "rounded-b": [{ "rounded-b": [i] }],
          "rounded-l": [{ "rounded-l": [i] }],
          "rounded-ss": [{ "rounded-ss": [i] }],
          "rounded-se": [{ "rounded-se": [i] }],
          "rounded-ee": [{ "rounded-ee": [i] }],
          "rounded-es": [{ "rounded-es": [i] }],
          "rounded-tl": [{ "rounded-tl": [i] }],
          "rounded-tr": [{ "rounded-tr": [i] }],
          "rounded-br": [{ "rounded-br": [i] }],
          "rounded-bl": [{ "rounded-bl": [i] }],
          "border-w": [{ border: [s] }],
          "border-w-x": [{ "border-x": [s] }],
          "border-w-y": [{ "border-y": [s] }],
          "border-w-s": [{ "border-s": [s] }],
          "border-w-e": [{ "border-e": [s] }],
          "border-w-t": [{ "border-t": [s] }],
          "border-w-r": [{ "border-r": [s] }],
          "border-w-b": [{ "border-b": [s] }],
          "border-w-l": [{ "border-l": [s] }],
          "border-opacity": [{ "border-opacity": [w] }],
          "border-style": [
            {
              border: ["solid", "dashed", "dotted", "double", "none", "hidden"],
            },
          ],
          "divide-x": [{ "divide-x": [s] }],
          "divide-x-reverse": ["divide-x-reverse"],
          "divide-y": [{ "divide-y": [s] }],
          "divide-y-reverse": ["divide-y-reverse"],
          "divide-opacity": [{ "divide-opacity": [w] }],
          "divide-style": [
            { divide: ["solid", "dashed", "dotted", "double", "none"] },
          ],
          "border-color": [{ border: [o] }],
          "border-color-x": [{ "border-x": [o] }],
          "border-color-y": [{ "border-y": [o] }],
          "border-color-s": [{ "border-s": [o] }],
          "border-color-e": [{ "border-e": [o] }],
          "border-color-t": [{ "border-t": [o] }],
          "border-color-r": [{ "border-r": [o] }],
          "border-color-b": [{ "border-b": [o] }],
          "border-color-l": [{ "border-l": [o] }],
          "divide-color": [{ divide: [o] }],
          "outline-style": [
            { outline: ["", "solid", "dashed", "dotted", "double", "none"] },
          ],
          "outline-offset": [{ "outline-offset": [sn, hn] }],
          "outline-w": [{ outline: [sn, ln] }],
          "outline-color": [{ outline: [e] }],
          "ring-w": [{ ring: E() }],
          "ring-w-inset": ["ring-inset"],
          "ring-color": [{ ring: [e] }],
          "ring-opacity": [{ "ring-opacity": [w] }],
          "ring-offset-w": [{ "ring-offset": [sn, ln] }],
          "ring-offset-color": [{ "ring-offset": [e] }],
          shadow: [{ shadow: ["", "inner", "none", fn, xn] }],
          "shadow-color": [{ shadow: [yn] }],
          opacity: [{ opacity: [w] }],
          "mix-blend": [
            {
              "mix-blend": [
                "normal",
                "multiply",
                "screen",
                "overlay",
                "darken",
                "lighten",
                "color-dodge",
                "color-burn",
                "hard-light",
                "soft-light",
                "difference",
                "exclusion",
                "hue",
                "saturation",
                "color",
                "luminosity",
                "plus-lighter",
                "plus-darker",
              ],
            },
          ],
          "bg-blend": [
            {
              "bg-blend": [
                "normal",
                "multiply",
                "screen",
                "overlay",
                "darken",
                "lighten",
                "color-dodge",
                "color-burn",
                "hard-light",
                "soft-light",
                "difference",
                "exclusion",
                "hue",
                "saturation",
                "color",
                "luminosity",
              ],
            },
          ],
          filter: [{ filter: ["", "none"] }],
          blur: [{ blur: [n] }],
          brightness: [{ brightness: [r] }],
          contrast: [{ contrast: [l] }],
          "drop-shadow": [{ "drop-shadow": ["", "none", fn, hn] }],
          grayscale: [{ grayscale: [c] }],
          "hue-rotate": [{ "hue-rotate": [d] }],
          invert: [{ invert: [u] }],
          saturate: [{ saturate: [b] }],
          sepia: [{ sepia: [y] }],
          "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
          "backdrop-blur": [{ "backdrop-blur": [n] }],
          "backdrop-brightness": [{ "backdrop-brightness": [r] }],
          "backdrop-contrast": [{ "backdrop-contrast": [l] }],
          "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
          "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
          "backdrop-invert": [{ "backdrop-invert": [u] }],
          "backdrop-opacity": [{ "backdrop-opacity": [w] }],
          "backdrop-saturate": [{ "backdrop-saturate": [b] }],
          "backdrop-sepia": [{ "backdrop-sepia": [y] }],
          "border-collapse": [{ border: ["collapse", "separate"] }],
          "border-spacing": [{ "border-spacing": [a] }],
          "border-spacing-x": [{ "border-spacing-x": [a] }],
          "border-spacing-y": [{ "border-spacing-y": [a] }],
          "table-layout": [{ table: ["auto", "fixed"] }],
          caption: [{ caption: ["top", "bottom"] }],
          transition: [
            {
              transition: [
                "none",
                "all",
                "",
                "colors",
                "opacity",
                "shadow",
                "transform",
                hn,
              ],
            },
          ],
          duration: [{ duration: A() }],
          ease: [{ ease: ["linear", "in", "out", "in-out", hn] }],
          delay: [{ delay: A() }],
          animate: [
            { animate: ["none", "spin", "ping", "pulse", "bounce", hn] },
          ],
          transform: [{ transform: ["", "gpu", "none"] }],
          scale: [{ scale: [x] }],
          "scale-x": [{ "scale-x": [x] }],
          "scale-y": [{ "scale-y": [x] }],
          rotate: [{ rotate: [un, hn] }],
          "translate-x": [{ "translate-x": [S] }],
          "translate-y": [{ "translate-y": [S] }],
          "skew-x": [{ "skew-x": [k] }],
          "skew-y": [{ "skew-y": [k] }],
          "transform-origin": [
            {
              origin: [
                "center",
                "top",
                "top-right",
                "right",
                "bottom-right",
                "bottom",
                "bottom-left",
                "left",
                "top-left",
                hn,
              ],
            },
          ],
          accent: [{ accent: ["auto", e] }],
          appearance: [{ appearance: ["none", "auto"] }],
          cursor: [
            {
              cursor: [
                "auto",
                "default",
                "pointer",
                "wait",
                "text",
                "move",
                "help",
                "not-allowed",
                "none",
                "context-menu",
                "progress",
                "cell",
                "crosshair",
                "vertical-text",
                "alias",
                "copy",
                "no-drop",
                "grab",
                "grabbing",
                "all-scroll",
                "col-resize",
                "row-resize",
                "n-resize",
                "e-resize",
                "s-resize",
                "w-resize",
                "ne-resize",
                "nw-resize",
                "se-resize",
                "sw-resize",
                "ew-resize",
                "ns-resize",
                "nesw-resize",
                "nwse-resize",
                "zoom-in",
                "zoom-out",
                hn,
              ],
            },
          ],
          "caret-color": [{ caret: [e] }],
          "pointer-events": [{ "pointer-events": ["none", "auto"] }],
          resize: [{ resize: ["none", "y", "x", ""] }],
          "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
          "scroll-m": [{ "scroll-m": C() }],
          "scroll-mx": [{ "scroll-mx": C() }],
          "scroll-my": [{ "scroll-my": C() }],
          "scroll-ms": [{ "scroll-ms": C() }],
          "scroll-me": [{ "scroll-me": C() }],
          "scroll-mt": [{ "scroll-mt": C() }],
          "scroll-mr": [{ "scroll-mr": C() }],
          "scroll-mb": [{ "scroll-mb": C() }],
          "scroll-ml": [{ "scroll-ml": C() }],
          "scroll-p": [{ "scroll-p": C() }],
          "scroll-px": [{ "scroll-px": C() }],
          "scroll-py": [{ "scroll-py": C() }],
          "scroll-ps": [{ "scroll-ps": C() }],
          "scroll-pe": [{ "scroll-pe": C() }],
          "scroll-pt": [{ "scroll-pt": C() }],
          "scroll-pr": [{ "scroll-pr": C() }],
          "scroll-pb": [{ "scroll-pb": C() }],
          "scroll-pl": [{ "scroll-pl": C() }],
          "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
          "snap-stop": [{ snap: ["normal", "always"] }],
          "snap-type": [{ snap: ["none", "x", "y", "both"] }],
          "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
          touch: [{ touch: ["auto", "none", "manipulation"] }],
          "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
          "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
          "touch-pz": ["touch-pinch-zoom"],
          select: [{ select: ["none", "text", "all", "auto"] }],
          "will-change": [
            { "will-change": ["auto", "scroll", "contents", "transform", hn] },
          ],
          fill: [{ fill: [e, "none"] }],
          "stroke-w": [{ stroke: [sn, ln, dn] }],
          stroke: [{ stroke: [e, "none"] }],
          sr: ["sr-only", "not-sr-only"],
          "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
        },
        conflictingClassGroups: {
          overflow: ["overflow-x", "overflow-y"],
          overscroll: ["overscroll-x", "overscroll-y"],
          inset: [
            "inset-x",
            "inset-y",
            "start",
            "end",
            "top",
            "right",
            "bottom",
            "left",
          ],
          "inset-x": ["right", "left"],
          "inset-y": ["top", "bottom"],
          flex: ["basis", "grow", "shrink"],
          gap: ["gap-x", "gap-y"],
          p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
          px: ["pr", "pl"],
          py: ["pt", "pb"],
          m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
          mx: ["mr", "ml"],
          my: ["mt", "mb"],
          size: ["w", "h"],
          "font-size": ["leading"],
          "fvn-normal": [
            "fvn-ordinal",
            "fvn-slashed-zero",
            "fvn-figure",
            "fvn-spacing",
            "fvn-fraction",
          ],
          "fvn-ordinal": ["fvn-normal"],
          "fvn-slashed-zero": ["fvn-normal"],
          "fvn-figure": ["fvn-normal"],
          "fvn-spacing": ["fvn-normal"],
          "fvn-fraction": ["fvn-normal"],
          "line-clamp": ["display", "overflow"],
          rounded: [
            "rounded-s",
            "rounded-e",
            "rounded-t",
            "rounded-r",
            "rounded-b",
            "rounded-l",
            "rounded-ss",
            "rounded-se",
            "rounded-ee",
            "rounded-es",
            "rounded-tl",
            "rounded-tr",
            "rounded-br",
            "rounded-bl",
          ],
          "rounded-s": ["rounded-ss", "rounded-es"],
          "rounded-e": ["rounded-se", "rounded-ee"],
          "rounded-t": ["rounded-tl", "rounded-tr"],
          "rounded-r": ["rounded-tr", "rounded-br"],
          "rounded-b": ["rounded-br", "rounded-bl"],
          "rounded-l": ["rounded-tl", "rounded-bl"],
          "border-spacing": ["border-spacing-x", "border-spacing-y"],
          "border-w": [
            "border-w-s",
            "border-w-e",
            "border-w-t",
            "border-w-r",
            "border-w-b",
            "border-w-l",
          ],
          "border-w-x": ["border-w-r", "border-w-l"],
          "border-w-y": ["border-w-t", "border-w-b"],
          "border-color": [
            "border-color-s",
            "border-color-e",
            "border-color-t",
            "border-color-r",
            "border-color-b",
            "border-color-l",
          ],
          "border-color-x": ["border-color-r", "border-color-l"],
          "border-color-y": ["border-color-t", "border-color-b"],
          "scroll-m": [
            "scroll-mx",
            "scroll-my",
            "scroll-ms",
            "scroll-me",
            "scroll-mt",
            "scroll-mr",
            "scroll-mb",
            "scroll-ml",
          ],
          "scroll-mx": ["scroll-mr", "scroll-ml"],
          "scroll-my": ["scroll-mt", "scroll-mb"],
          "scroll-p": [
            "scroll-px",
            "scroll-py",
            "scroll-ps",
            "scroll-pe",
            "scroll-pt",
            "scroll-pr",
            "scroll-pb",
            "scroll-pl",
          ],
          "scroll-px": ["scroll-pr", "scroll-pl"],
          "scroll-py": ["scroll-pt", "scroll-pb"],
          touch: ["touch-x", "touch-y", "touch-pz"],
          "touch-x": ["touch"],
          "touch-y": ["touch"],
          "touch-pz": ["touch"],
        },
        conflictingClassGroupModifiers: { "font-size": ["leading"] },
      };
    }),
    Tn = (...e) =>
      En(
        (function () {
          for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
            (e = arguments[n]) && (t = Rt(e)) && (r && (r += " "), (r += t));
          return r;
        })(e),
      );
  "undefined" != typeof navigator && navigator.userAgent.includes("Firefox");
  var zn = (e, t) => {
      let n = 0;
      return (r) => {
        const o = Date.now();
        if (o - n >= t) return (n = o), e(r);
      };
    },
    An = (e, t) => {
      try {
        return e();
      } catch {
        return t;
      }
    },
    $n = (e) => {
      if ("undefined" == typeof window) return null;
      try {
        const t = localStorage.getItem(e);
        return t ? JSON.parse(t) : null;
      } catch {
        return null;
      }
    },
    Mn = (e, t) => {
      if ("undefined" != typeof window)
        try {
          window.localStorage.setItem(e, JSON.stringify(t));
        } catch {}
    },
    Fn = (e) => {
      if ("undefined" != typeof window)
        try {
          window.localStorage.removeItem(e);
        } catch {}
    },
    Rn = (e) => {
      if (!e) return { name: "Unknown", wrappers: [], wrapperTypes: [] };
      const { tag: t, type: n, elementType: r } = e;
      let o = U(n);
      const i = [],
        a = [];
      if (
        O(e) ||
        15 === t ||
        14 === t ||
        n?.$$typeof === Symbol.for("react.memo") ||
        r?.$$typeof === Symbol.for("react.memo")
      ) {
        const t = O(e);
        a.push({
          type: "memo",
          title: t
            ? "This component has been auto-memoized by the React Compiler."
            : "Memoized component that skips re-renders if props are the same",
          compiler: t,
        });
      }
      if (
        (24 === t &&
          a.push({
            type: "lazy",
            title: "Lazily loaded component that supports code splitting",
          }),
        13 === t &&
          a.push({
            type: "suspense",
            title: "Component that can suspend while content is loading",
          }),
        12 === t &&
          a.push({
            type: "profiler",
            title: "Component that measures rendering performance",
          }),
        "string" == typeof o)
      ) {
        const e = /^(\w+)\((.*)\)$/;
        let t = o;
        for (; e.test(t); ) {
          const n = t.match(e);
          if (!n?.[1] || !n?.[2]) break;
          i.unshift(n[1]), (t = n[2]);
        }
        o = t;
      }
      return { name: o || "Unknown", wrappers: i, wrapperTypes: a };
    };
  function jn(e) {
    const t = e();
    function n(e, t) {
      self.postMessage([e, !1, t]);
    }
    self.addEventListener("message", (e) => {
      const [r, o] = e.data;
      try {
        Promise.resolve(t(o)).then(
          (e) =>
            (function (e, t) {
              self.postMessage([e, !0, t]);
            })(r, e),
          (e) => n(r, e),
        );
      } catch (e) {
        n(r, e);
      }
    });
  }
  var Pn = class {
      constructor(e) {
        (this.callback = e),
          (this.deferredMap = new Map()),
          (this.count = 0),
          (this.sync = !1);
      }
      setupWorker(e) {
        e.addEventListener("message", (e) => {
          const [t, n, r] = e.data,
            o = this.deferredMap.get(t);
          o && (n ? o.resolve(r) : o.reject(r), this.deferredMap.delete(t));
        });
      }
      async call(e, t) {
        if (this.sync)
          return this.setup || (this.setup = this.callback()), this.setup(e);
        this.worker ||
          ((this.worker = (function (e) {
            const t = `(${jn.toString()})(${e.toString()})`,
              n = URL.createObjectURL(new Blob([t]));
            return new Worker(n);
          })(this.callback)),
          this.setupWorker(this.worker));
        const n = (function () {
            let e, t;
            return {
              promise: new Promise((n, r) => {
                (e = n), (t = r);
              }),
              resolve(t) {
                e(t);
              },
              reject(e) {
                t(e);
              },
            };
          })(),
          r = this.count++;
        return (
          this.deferredMap.set(r, n),
          this.worker.postMessage([r, e], { transfer: t?.transfer }),
          n.promise
        );
      }
      destroy() {
        this.deferredMap.clear(), this.worker?.terminate();
      }
    },
    Dn = class {
      constructor(e) {
        (this.callback = e), (this.sync = !0);
      }
      async call(e, t) {
        return this.setup || (this.setup = this.callback()), this.setup(e);
      }
      destroy() {}
    };
  function In() {
    let e, t;
    var n;
    return (
      ((n = t || (t = {}))[(n.Commit = 1)] = "Commit"),
      (n[(n.Unstable = 2)] = "Unstable"),
      (n[(n.Unnecessary = 4)] = "Unnecessary"),
      async (t) => {
        switch (t.type) {
          case "set-canvas":
            {
              const n = t.payload.getContext("2d");
              n && (e = n);
            }
            break;
          case "resize":
            if (e) {
              const { dpi: n, width: r, height: o } = t.payload;
              (e.canvas.width = r),
                (e.canvas.height = o),
                e.resetTransform(),
                e.scale(n, n);
            }
            break;
          case "fade-out-outline":
            if (e) {
              const { dpi: n, drawingQueue: r, mergedLabels: o } = t.payload;
              e.clearRect(0, 0, e.canvas.width / n, e.canvas.height / n),
                e.save();
              for (let t = 0, n = r.length; t < n; t++) {
                const { rect: n, color: o, alpha: i, fillAlpha: a } = r[t],
                  s = `${o.r},${o.g},${o.b}`;
                (e.strokeStyle = `rgba(${s},${i})`),
                  (e.lineWidth = 1),
                  (e.fillStyle = `rgba(${s},${a})`),
                  e.beginPath(),
                  e.rect(n.x, n.y, n.width, n.height),
                  e.stroke(),
                  e.fill();
              }
              e.restore();
              for (let t = 0, n = o.length; t < n; t++) {
                const {
                    alpha: n,
                    rect: r,
                    color: i,
                    reasons: a,
                    labelText: s,
                  } = o[t],
                  l = 4 & a ? `${s}⚠️` : s;
                e.save(),
                  (e.font =
                    "11px Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace");
                const c = e.measureText(l).width,
                  d = 11,
                  u = r.x,
                  p = r.y - d - 4;
                (e.fillStyle = `rgba(${i.r},${i.g},${i.b},${n})`),
                  e.fillRect(u, p, c + 4, d + 4),
                  (e.fillStyle = `rgba(255,255,255,${n})`),
                  e.fillText(l, u + 2, p + d);
              }
            }
        }
      }
    );
  }
  (() => {
    const e = $n("use-extension-worker");
    Fn("use-extension-worker"), e ? new Dn(In) : new Pn(In);
  })(),
    "undefined" != typeof window &&
      (function e() {
        requestAnimationFrame(e);
      })();
  var On = { mount: 1, update: 2, unmount: 4 },
    Ln = 24,
    Un = 550,
    Hn = 350,
    Vn = 400,
    Bn = 240,
    Wn = "react-scan-widget-settings-v2",
    Yn = 0;
  function Xn(e, t, n, r, o, i) {
    t || (t = {});
    var a,
      s,
      l = t;
    "ref" in t && ((a = t.ref), delete t.ref);
    var c = {
      type: e,
      props: l,
      key: n,
      ref: a,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __c: null,
      constructor: void 0,
      __v: --Yn,
      __i: -1,
      __u: 0,
      __source: o,
      __self: i,
    };
    if ("function" == typeof e && (a = e.defaultProps))
      for (s in a) void 0 === l[s] && (l[s] = a[s]);
    return x.vnode && x.vnode(c), c;
  }
  var qn = {
      frameInterval: 1e3 / 60,
      speeds: { fast: 0.51, slow: 0.1, off: 0 },
    },
    Jn = ("undefined" != typeof window && window.devicePixelRatio) || 1,
    Gn = () => {
      const e = We(null),
        t = We(null),
        n = We(null),
        r = We(null),
        o = We(null),
        i = We(0),
        a = We(),
        s = We(new Map()),
        l = We(!1),
        c = We(0),
        d = (e, t, n, o) => {
          if (!o) return;
          const i = (o?.type && U(o.type)) ?? "Unknown";
          e.save(), (e.font = "12px system-ui, -apple-system, sans-serif");
          const a = "locked" === n ? 14 : 0,
            s = "locked" === n ? 6 : 0,
            l = e.measureText(i).width + 16 + a + s,
            c = t.left,
            d = t.top - 24 - 4;
          if (
            ((e.fillStyle = "rgb(37, 37, 38, .75)"),
            e.beginPath(),
            e.roundRect(c, d, l, 24, 3),
            e.fill(),
            "locked" === n)
          ) {
            const t = c + 8,
              n = d + (24 - a) / 2 + 2;
            ((e, t, n, r) => {
              e.save(),
                (e.strokeStyle = "white"),
                (e.fillStyle = "white"),
                (e.lineWidth = 1.5);
              const o = 0.6 * r,
                i = 0.5 * r,
                a = t + (r - o) / 2,
                s = n;
              e.beginPath(),
                e.arc(a + o / 2, s + i / 2, o / 2, Math.PI, 0, !1),
                e.stroke();
              const l = 0.8 * r,
                c = 0.5 * r,
                d = t + (r - l) / 2,
                u = n + i / 2;
              e.fillRect(d, u, l, c), e.restore();
            })(e, t, n, a),
              (r.current = { x: t, y: n, width: a, height: a });
          } else r.current = null;
          (e.fillStyle = "white"), (e.textBaseline = "middle");
          const u = c + 8 + ("locked" === n ? a + s : 0);
          e.fillText(i, u, d + 12), e.restore();
        },
        u = (e, t, r, o) => {
          if (!n.current) return;
          const i = n.current;
          t.clearRect(0, 0, e.width, e.height),
            (t.strokeStyle = "rgba(142, 97, 227, 0.5)"),
            (t.fillStyle = "rgba(173, 97, 230, 0.10)"),
            "locked" === r ? t.setLineDash([]) : t.setLineDash([4]),
            (t.lineWidth = 1),
            t.fillRect(i.left, i.top, i.width, i.height),
            t.strokeRect(i.left, i.top, i.width, i.height),
            d(t, i, r, o);
        },
        p = (e, t, r, o, s) => {
          if ((t.save(), !n.current))
            return (n.current = r), u(e, t, o, s), void t.restore();
          ((e, t, r, o, s) => {
            const l = cl.options.value.animationSpeed,
              d = qn.speeds[l] ?? qn.speeds.off,
              p = (a) => {
                a - c.current < qn.frameInterval
                  ? (i.current = requestAnimationFrame(p))
                  : ((c.current = a),
                    n.current
                      ? ((n.current = {
                          left: Ft(n.current.left, r.left, d),
                          top: Ft(n.current.top, r.top, d),
                          width: Ft(n.current.width, r.width, d),
                          height: Ft(n.current.height, r.height, d),
                        }),
                        u(e, t, o, s),
                        Math.abs(n.current.left - r.left) > 0.1 ||
                        Math.abs(n.current.top - r.top) > 0.1 ||
                        Math.abs(n.current.width - r.width) > 0.1 ||
                        Math.abs(n.current.height - r.height) > 0.1
                          ? (i.current = requestAnimationFrame(p))
                          : ((n.current = r),
                            u(e, t, o, s),
                            cancelAnimationFrame(i.current),
                            t.restore()))
                      : cancelAnimationFrame(i.current));
              };
            cancelAnimationFrame(i.current),
              clearTimeout(a.current),
              (i.current = requestAnimationFrame(p)),
              (a.current = setTimeout(() => {
                cancelAnimationFrame(i.current),
                  (n.current = r),
                  u(e, t, o, s),
                  t.restore();
              }, 1e3));
          })(e, t, r, o, s);
        },
        h = async (e, t, n, r) => {
          if (!e || !t || !n) return;
          const { parentCompositeFiber: o } = Ea(e),
            i = await Ca(e);
          o && i && p(t, n, i, r, o);
        },
        f = (t) => {
          if (!e.current || l.current) return;
          const i = (a) => {
              e.current &&
                "opacity" === a.propertyName &&
                l.current &&
                (e.current.removeEventListener("transitionend", i),
                ((e) => {
                  const t = e.getContext("2d");
                  t && t.clearRect(0, 0, e.width, e.height),
                    (n.current = null),
                    (r.current = null),
                    (o.current = null),
                    e.classList.remove("fade-in"),
                    (l.current = !1);
                })(e.current),
                t?.());
            },
            a = s.current.get("fade-out");
          a && (a(), s.current.delete("fade-out")),
            e.current.addEventListener("transitionend", i),
            s.current.set("fade-out", () => {
              e.current?.removeEventListener("transitionend", i);
            }),
            (l.current = !0),
            e.current.classList.remove("fade-in"),
            requestAnimationFrame(() => {
              e.current?.classList.add("fade-out");
            });
        },
        m = () => {
          e.current &&
            ((l.current = !1),
            e.current.classList.remove("fade-out"),
            requestAnimationFrame(() => {
              e.current?.classList.add("fade-in");
            }));
        },
        g = zn((r) => {
          if ("inspecting" !== ll.inspectState.peek().kind || !t.current)
            return;
          t.current.style.pointerEvents = "none";
          const i = document.elementFromPoint(r?.clientX ?? 0, r?.clientY ?? 0);
          if (
            (t.current.style.removeProperty("pointer-events"),
            clearTimeout(a.current),
            i && i !== e.current)
          ) {
            const { parentCompositeFiber: e } = Ea(i);
            if (e) {
              const t = Ma(e);
              if (t)
                return void ((e) => {
                  e !== o.current &&
                    ((o.current = e),
                    $a.has(e.tagName) ? f() : m(),
                    (ll.inspectState.value = {
                      kind: "inspecting",
                      hoveredDomElement: e,
                    }));
                })(t);
            }
          }
          n.current && e.current && !l.current && f();
        }, 32),
        w = (e, t) => {
          const n = r.current;
          if (!n) return !1;
          const o = t.getBoundingClientRect(),
            i = t.width / o.width,
            a = t.height / o.height,
            s = (e.clientX - o.left) * i,
            l = (e.clientY - o.top) * a,
            c = s / Jn,
            d = l / Jn;
          return (
            c >= n.x && c <= n.x + n.width && d >= n.y && d <= n.y + n.height
          );
        },
        v = (n) => {
          if (n.__reactScanSyntheticEvent) return;
          const r = ll.inspectState.peek(),
            i = e.current;
          return i && t.current
            ? w(n, i)
              ? (n.preventDefault(),
                n.stopPropagation(),
                void ((e) => {
                  "focused" === e.kind &&
                    (ll.inspectState.value = {
                      kind: "inspecting",
                      hoveredDomElement: e.focusedDomElement,
                    });
                })(r))
              : void (
                  "inspecting" === r.kind &&
                  ((e) => {
                    const t = [
                      "react-scan-inspect-element",
                      "react-scan-power",
                    ];
                    if (
                      e.target instanceof HTMLElement &&
                      t.includes(e.target.id)
                    )
                      return;
                    const n = o.current?.tagName;
                    if (n && $a.has(n)) return;
                    e.preventDefault(), e.stopPropagation();
                    const r =
                      o.current ??
                      document.elementFromPoint(e.clientX, e.clientY);
                    if (!r) return;
                    const i = e.composedPath().at(0);
                    if (i instanceof HTMLElement && t.includes(i.id)) {
                      const t = new MouseEvent(e.type, e);
                      return (
                        (t.__reactScanSyntheticEvent = !0),
                        void i.dispatchEvent(t)
                      );
                    }
                    const { parentCompositeFiber: a } = Ea(r);
                    if (!a) return;
                    const s = Ma(a);
                    if (!s)
                      return (
                        (o.current = null),
                        void (ll.inspectState.value = { kind: "inspect-off" })
                      );
                    ll.inspectState.value = {
                      kind: "focused",
                      focusedDomElement: s,
                      fiber: a,
                    };
                  })(n)
                )
            : void 0;
        },
        b = (t) => {
          if ("Escape" !== t.key) return;
          const r = ll.inspectState.peek();
          if (
            e.current &&
            "react-scan-root" !== document.activeElement?.id &&
            ("focused" === r.kind || "inspecting" === r.kind)
          )
            switch ((t.preventDefault(), t.stopPropagation(), r.kind)) {
              case "focused":
                m(),
                  (n.current = null),
                  (o.current = r.focusedDomElement),
                  (ll.inspectState.value = {
                    kind: "inspecting",
                    hoveredDomElement: r.focusedDomElement,
                  });
                break;
              case "inspecting":
                f(() => {
                  (Bi.value = !1),
                    (ll.inspectState.value = { kind: "inspect-off" });
                });
            }
        },
        x = (e, t) => {
          const n = e.getBoundingClientRect();
          (e.width = n.width * Jn),
            (e.height = n.height * Jn),
            t.scale(Jn, Jn),
            t.save();
        },
        y = () => {
          const t = ll.inspectState.peek(),
            r = e.current;
          if (!r) return;
          const o = r?.getContext("2d");
          o &&
            (cancelAnimationFrame(i.current),
            clearTimeout(a.current),
            x(r, o),
            (n.current = null),
            "focused" === t.kind && t.focusedDomElement
              ? h(t.focusedDomElement, r, o, "locked")
              : "inspecting" === t.kind &&
                t.hoveredDomElement &&
                h(t.hoveredDomElement, r, o, "inspecting"));
        },
        k = (t) => {
          const n = ll.inspectState.peek(),
            r = e.current;
          r &&
            ("inspecting" === n.kind || w(t, r)) &&
            (t.preventDefault(),
            t.stopPropagation(),
            t.stopImmediatePropagation());
        };
      return (
        Ve(() => {
          const r = e.current;
          if (!r) return;
          const l = r?.getContext("2d");
          if (!l) return;
          x(r, l);
          const c = ll.inspectState.subscribe((e) => {
            ((e, r, a) => {
              let l;
              switch (
                (s.current.get(e.kind)?.(),
                t.current &&
                  "inspecting" !== e.kind &&
                  (t.current.style.pointerEvents = "none"),
                i.current && cancelAnimationFrame(i.current),
                e.kind)
              ) {
                case "inspect-off":
                  return void f();
                case "inspecting":
                  h(e.hoveredDomElement, r, a, "inspecting");
                  break;
                case "focused":
                  if (!e.focusedDomElement) return;
                  o.current !== e.focusedDomElement &&
                    (o.current = e.focusedDomElement),
                    h(e.focusedDomElement, r, a, "locked"),
                    (l = ll.lastReportTime.subscribe(() => {
                      if (i.current && n.current) {
                        const { parentCompositeFiber: t } = Ea(
                          e.focusedDomElement,
                        );
                        t && h(e.focusedDomElement, r, a, "locked");
                      }
                    })),
                    l && s.current.set(e.kind, l);
              }
            })(e, r, l);
          });
          return (
            window.addEventListener("scroll", y, { passive: !0 }),
            window.addEventListener("resize", y, { passive: !0 }),
            document.addEventListener("mousemove", g, {
              passive: !0,
              capture: !0,
            }),
            document.addEventListener("pointerdown", k, { capture: !0 }),
            document.addEventListener("click", v, { capture: !0 }),
            document.addEventListener("keydown", b, { capture: !0 }),
            () => {
              (() => {
                for (const e of s.current.values()) e?.();
              })(),
                c(),
                window.removeEventListener("scroll", y),
                window.removeEventListener("resize", y),
                document.removeEventListener("mousemove", g, { capture: !0 }),
                document.removeEventListener("click", v, { capture: !0 }),
                document.removeEventListener("pointerdown", k, { capture: !0 }),
                document.removeEventListener("keydown", b, { capture: !0 }),
                i.current && cancelAnimationFrame(i.current),
                clearTimeout(a.current);
            }
          );
        }, []),
        Xn(pe, {
          children: [
            Xn("div", {
              ref: t,
              className: Tn("fixed inset-0 w-screen h-screen", "z-[214748365]"),
              style: { pointerEvents: "none" },
            }),
            Xn("canvas", {
              ref: e,
              dir: "ltr",
              className: Tn(
                "react-scan-inspector-overlay",
                "fixed inset-0 w-screen h-screen",
                "pointer-events-none",
                "z-[214748367]",
              ),
            }),
          ],
        })
      );
    };
  function Kn(e, t) {
    for (var n in e) if ("__source" !== n && !(n in t)) return !0;
    for (var r in t) if ("__source" !== r && e[r] !== t[r]) return !0;
    return !1;
  }
  function Zn(e) {
    var t,
      n,
      r = e.u,
      o = e.__;
    try {
      var i = r();
      return !(
        ((t = o) === (n = i) && (0 !== t || 1 / t == 1 / n)) ||
        (t != t && n != n)
      );
    } catch (e) {
      return !0;
    }
  }
  function Qn(e, t) {
    (this.props = e), (this.context = t);
  }
  function er(e, t) {
    function n(e) {
      var t = this.props.ref;
      return (
        !(t == e.ref) && t && (t.call ? t(null) : (t.current = null)),
        Kn(this.props, e)
      );
    }
    function r(t) {
      return (this.shouldComponentUpdate = n), de(e, t);
    }
    return (
      (r.displayName = "Memo(" + (e.displayName || e.name) + ")"),
      (r.prototype.isReactComponent = !0),
      (r.__f = !0),
      r
    );
  }
  ((Qn.prototype = new he()).isPureReactComponent = !0),
    (Qn.prototype.shouldComponentUpdate = function (e, t) {
      return Kn(this.props, e) || Kn(this.state, t);
    });
  var tr = x.__b;
  x.__b = function (e) {
    e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)),
      tr && tr(e);
  };
  var nr =
    ("undefined" != typeof Symbol &&
      Symbol.for &&
      Symbol.for("react.forward_ref")) ||
    3911;
  function rr(e) {
    function t(t) {
      if (!("ref" in t)) return e(t, null);
      var n = t.ref;
      delete t.ref;
      var r = e(t, n);
      return (t.ref = n), r;
    }
    return (
      (t.$$typeof = nr),
      (t.render = t),
      (t.prototype.isReactComponent = t.__f = !0),
      (t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")"),
      t
    );
  }
  var or = x.__e;
  x.__e = function (e, t, n, r) {
    if (e.then)
      for (var o, i = t; (i = i.__); )
        if ((o = i.__c) && o.__c)
          return (
            null == t.__e && ((t.__e = n.__e), (t.__k = n.__k)), o.__c(e, t)
          );
    or(e, t, n, r);
  };
  var ir = x.unmount;
  function ar(e, t, n) {
    return (
      e &&
        (e.__c &&
          e.__c.__H &&
          (e.__c.__H.__.forEach(function (e) {
            "function" == typeof e.__c && e.__c();
          }),
          (e.__c.__H = null)),
        null !=
          (e = (function (e, t) {
            for (var n in t) e[n] = t[n];
            return e;
          })({}, e)).__c &&
          (e.__c.__P === n && (e.__c.__P = t), (e.__c = null)),
        (e.__k =
          e.__k &&
          e.__k.map(function (e) {
            return ar(e, t, n);
          }))),
      e
    );
  }
  function sr(e, t, n) {
    return (
      e &&
        n &&
        ((e.__v = null),
        (e.__k =
          e.__k &&
          e.__k.map(function (e) {
            return sr(e, t, n);
          })),
        e.__c &&
          e.__c.__P === t &&
          (e.__e && n.appendChild(e.__e), (e.__c.__e = !0), (e.__c.__P = n))),
      e
    );
  }
  function lr() {
    (this.__u = 0), (this.o = null), (this.__b = null);
  }
  function cr(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e);
  }
  function dr() {
    (this.i = null), (this.l = null);
  }
  (x.unmount = function (e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), ir && ir(e);
  }),
    ((lr.prototype = new he()).__c = function (e, t) {
      var n = t.__c,
        r = this;
      null == r.o && (r.o = []), r.o.push(n);
      var o = cr(r.__v),
        i = !1,
        a = function () {
          i || ((i = !0), (n.__R = null), o ? o(s) : s());
        };
      n.__R = a;
      var s = function () {
        if (!--r.__u) {
          if (r.state.__a) {
            var e = r.state.__a;
            r.__v.__k[0] = sr(e, e.__c.__P, e.__c.__O);
          }
          var t;
          for (r.setState({ __a: (r.__b = null) }); (t = r.o.pop()); )
            t.forceUpdate();
        }
      };
      r.__u++ || 32 & t.__u || r.setState({ __a: (r.__b = r.__v.__k[0]) }),
        e.then(a, a);
    }),
    (lr.prototype.componentWillUnmount = function () {
      this.o = [];
    }),
    (lr.prototype.render = function (e, t) {
      if (this.__b) {
        if (this.__v.__k) {
          var n = document.createElement("div"),
            r = this.__v.__k[0].__c;
          this.__v.__k[0] = ar(this.__b, n, (r.__O = r.__P));
        }
        this.__b = null;
      }
      var o = t.__a && de(pe, null, e.fallback);
      return o && (o.__u &= -33), [de(pe, null, t.__a ? null : e.children), o];
    });
  var ur = function (e, t, n) {
    if (
      (++n[1] === n[0] && e.l.delete(t),
      e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.l.size))
    )
      for (n = e.i; n; ) {
        for (; n.length > 3; ) n.pop()();
        if (n[1] < n[0]) break;
        e.i = n = n[2];
      }
  };
  function pr(e) {
    return (
      (this.getChildContext = function () {
        return e.context;
      }),
      e.children
    );
  }
  function hr(e) {
    var t = this,
      n = e.h;
    (t.componentWillUnmount = function () {
      Ae(null, t.v), (t.v = null), (t.h = null);
    }),
      t.h && t.h !== n && t.componentWillUnmount(),
      t.v ||
        ((t.h = n),
        (t.v = {
          nodeType: 1,
          parentNode: n,
          childNodes: [],
          contains: function () {
            return !0;
          },
          appendChild: function (e) {
            this.childNodes.push(e), t.h.appendChild(e);
          },
          insertBefore: function (e, n) {
            this.childNodes.push(e), t.h.insertBefore(e, n);
          },
          removeChild: function (e) {
            this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1),
              t.h.removeChild(e);
          },
        })),
      Ae(de(pr, { context: t.context }, e.__v), t.v);
  }
  ((dr.prototype = new he()).__a = function (e) {
    var t = this,
      n = cr(t.__v),
      r = t.l.get(e);
    return (
      r[0]++,
      function (o) {
        var i = function () {
          t.props.revealOrder ? (r.push(o), ur(t, e, r)) : o();
        };
        n ? n(i) : i();
      }
    );
  }),
    (dr.prototype.render = function (e) {
      (this.i = null), (this.l = new Map());
      var t = xe(e.children);
      e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
      for (var n = t.length; n--; ) this.l.set(t[n], (this.i = [1, 0, this.i]));
      return e.children;
    }),
    (dr.prototype.componentDidUpdate = dr.prototype.componentDidMount =
      function () {
        var e = this;
        this.l.forEach(function (t, n) {
          ur(e, n, t);
        });
      });
  var fr =
      ("undefined" != typeof Symbol &&
        Symbol.for &&
        Symbol.for("react.element")) ||
      60103,
    mr =
      /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    gr = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
    wr = /[A-Z0-9]/g,
    vr = "undefined" != typeof document,
    br = function (e) {
      return (
        "undefined" != typeof Symbol && "symbol" == typeof Symbol()
          ? /fil|che|rad/
          : /fil|che|ra/
      ).test(e);
    };
  (he.prototype.isReactComponent = {}),
    [
      "componentWillMount",
      "componentWillReceiveProps",
      "componentWillUpdate",
    ].forEach(function (e) {
      Object.defineProperty(he.prototype, e, {
        configurable: !0,
        get: function () {
          return this["UNSAFE_" + e];
        },
        set: function (t) {
          Object.defineProperty(this, e, {
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    });
  var xr = x.event;
  function yr() {}
  function kr() {
    return this.cancelBubble;
  }
  function _r() {
    return this.defaultPrevented;
  }
  x.event = function (e) {
    return (
      xr && (e = xr(e)),
      (e.persist = yr),
      (e.isPropagationStopped = kr),
      (e.isDefaultPrevented = _r),
      (e.nativeEvent = e)
    );
  };
  var Sr = {
      enumerable: !1,
      configurable: !0,
      get: function () {
        return this.class;
      },
    },
    Nr = x.vnode;
  x.vnode = function (e) {
    "string" == typeof e.type &&
      (function (e) {
        var t = e.props,
          n = e.type,
          r = {},
          o = -1 === n.indexOf("-");
        for (var i in t) {
          var a = t[i];
          if (
            !(
              ("value" === i && "defaultValue" in t && null == a) ||
              (vr && "children" === i && "noscript" === n) ||
              "class" === i ||
              "className" === i
            )
          ) {
            var s = i.toLowerCase();
            "defaultValue" === i && "value" in t && null == t.value
              ? (i = "value")
              : "download" === i && !0 === a
                ? (a = "")
                : "translate" === s && "no" === a
                  ? (a = !1)
                  : "o" === s[0] && "n" === s[1]
                    ? "ondoubleclick" === s
                      ? (i = "ondblclick")
                      : "onchange" !== s ||
                          ("input" !== n && "textarea" !== n) ||
                          br(t.type)
                        ? "onfocus" === s
                          ? (i = "onfocusin")
                          : "onblur" === s
                            ? (i = "onfocusout")
                            : gr.test(i) && (i = s)
                        : (s = i = "oninput")
                    : o && mr.test(i)
                      ? (i = i.replace(wr, "-$&").toLowerCase())
                      : null === a && (a = void 0),
              "oninput" === s && r[(i = s)] && (i = "oninputCapture"),
              (r[i] = a);
          }
        }
        "select" == n &&
          r.multiple &&
          Array.isArray(r.value) &&
          (r.value = xe(t.children).forEach(function (e) {
            e.props.selected = -1 != r.value.indexOf(e.props.value);
          })),
          "select" == n &&
            null != r.defaultValue &&
            (r.value = xe(t.children).forEach(function (e) {
              e.props.selected = r.multiple
                ? -1 != r.defaultValue.indexOf(e.props.value)
                : r.defaultValue == e.props.value;
            })),
          t.class && !t.className
            ? ((r.class = t.class), Object.defineProperty(r, "className", Sr))
            : ((t.className && !t.class) || (t.class && t.className)) &&
              (r.class = r.className = t.className),
          (e.props = r);
      })(e),
      (e.$$typeof = fr),
      Nr && Nr(e);
  };
  var Cr = x.__r;
  x.__r = function (e) {
    Cr && Cr(e), e.__c;
  };
  var Er,
    Tr,
    zr = x.diffed;
  (x.diffed = function (e) {
    zr && zr(e);
    var t = e.props,
      n = e.__e;
    null != n &&
      "textarea" === e.type &&
      "value" in t &&
      t.value !== n.value &&
      (n.value = null == t.value ? "" : t.value);
  }),
    (Er = d()),
    (Tr = null != Er ? n(a(Er)) : {}),
    ((e, t, n, a) => {
      if ((t && "object" == typeof t) || "function" == typeof t)
        for (let l of i(t))
          s.call(e, l) ||
            l === n ||
            r(e, l, {
              get: () => t[l],
              enumerable: !(a = o(t, l)) || a.enumerable,
            });
    })(
      Er && Er.__esModule
        ? Tr
        : r(Tr, "default", { value: Er, enumerable: !0 }),
      Er,
    );
  var Ar,
    $r = () =>
      "undefined" == typeof window
        ? "0"
        : (void 0 === window.reactScanIdCounter &&
            (window.reactScanIdCounter = 0),
          "" + ++window.reactScanIdCounter),
    Mr = (e) => {
      let t;
      const n = new Set(),
        r = (e, r) => {
          const o = "function" == typeof e ? e(t) : e;
          if (!Object.is(o, t)) {
            const e = t;
            (t =
              (r ?? ("object" != typeof o || null === o))
                ? o
                : Object.assign({}, t, o)),
              n.forEach((n) => n(t, e));
          }
        },
        o = () => t,
        i = {
          setState: r,
          getState: o,
          getInitialState: () => a,
          subscribe: (e, r) => {
            let o, i;
            r ? ((o = e), (i = r)) : (i = e);
            let a = o ? o(t) : void 0;
            const s = (e, t) => {
              if (o) {
                const n = o(e),
                  r = o(t);
                Object.is(a, n) || ((a = n), i(n, r));
              } else i(e, t);
            };
            return n.add(s), () => n.delete(s);
          },
        },
        a = (t = e(r, o, i));
      return i;
    },
    Fr = (e) => Mr,
    Rr = (e) => e(),
    jr = class e extends Array {
      constructor(e = 25) {
        super(), (this.capacity = e);
      }
      push(...e) {
        const t = super.push(...e);
        for (; this.length > this.capacity; ) this.shift();
        return t;
      }
      static fromArray(t, n) {
        const r = new e(n);
        return r.push(...t), r;
      }
    },
    Pr = new (class {
      constructor(e) {
        (this.subscribers = new Set()), (this.currentValue = e);
      }
      subscribe(e) {
        return (
          this.subscribers.add(e),
          e(this.currentValue),
          () => {
            this.subscribers.delete(e);
          }
        );
      }
      setState(e) {
        (this.currentValue = e), this.subscribers.forEach((t) => t(e));
      }
      getCurrentState() {
        return this.currentValue;
      }
    })(new jr(150)),
    Dr = 50,
    Ir = new (class {
      constructor() {
        this.channels = {};
      }
      publish(e, t, n = !0) {
        const r = this.channels[t];
        if (!r) {
          if (!n) return;
          return (
            (this.channels[t] = { callbacks: new jr(Dr), state: new jr(Dr) }),
            void this.channels[t].state.push(e)
          );
        }
        r.state.push(e), r.callbacks.forEach((t) => t(e));
      }
      getAvailableChannels() {
        return jr.fromArray(Object.keys(this.channels), Dr);
      }
      subscribe(e, t, n = !1) {
        const r = () => (
            n ||
              this.channels[e].state.forEach((e) => {
                t(e);
              }),
            () => {
              const n = this.channels[e].callbacks.filter((e) => e !== t);
              this.channels[e].callbacks = jr.fromArray(n, Dr);
            }
          ),
          o = this.channels[e];
        return o
          ? (o.callbacks.push(t), r())
          : ((this.channels[e] = { callbacks: new jr(Dr), state: new jr(Dr) }),
            this.channels[e].callbacks.push(t),
            r());
      }
      updateChannelState(e, t, n = !0) {
        const r = this.channels[e];
        if (!r) {
          if (!n) return;
          const r = new jr(Dr),
            o = { callbacks: new jr(Dr), state: r };
          return (this.channels[e] = o), void (o.state = t(r));
        }
        r.state = t(r.state);
      }
      getChannelState(e) {
        return this.channels[e].state ?? new jr(Dr);
      }
    })(),
    Or = {
      skipProviders: !0,
      skipHocs: !0,
      skipContainers: !0,
      skipMinified: !0,
      skipUtilities: !0,
      skipBoundaries: !0,
    },
    Lr = {
      providers: [/Provider$/, /^Provider$/, /^Context$/],
      hocs: [/^with[A-Z]/, /^forward(?:Ref)?$/i, /^Forward(?:Ref)?\(/],
      containers: [/^(?:App)?Container$/, /^Root$/, /^ReactDev/],
      utilities: [
        /^Fragment$/,
        /^Suspense$/,
        /^ErrorBoundary$/,
        /^Portal$/,
        /^Consumer$/,
        /^Layout$/,
        /^Router/,
        /^Hydration/,
      ],
      boundaries: [/^Boundary$/, /Boundary$/, /^Provider$/, /Provider$/],
    },
    Ur = (e, t = Or) => {
      const n = [];
      return (
        t.skipProviders && n.push(...Lr.providers),
        t.skipHocs && n.push(...Lr.hocs),
        t.skipContainers && n.push(...Lr.containers),
        t.skipUtilities && n.push(...Lr.utilities),
        t.skipBoundaries && n.push(...Lr.boundaries),
        !n.some((t) => t.test(e))
      );
    },
    Hr = [/^[a-z]$/, /^[a-z][0-9]$/, /^_+$/, /^[A-Za-z][_$]$/, /^[a-z]{1,2}$/],
    Vr = (e) => {
      if (!e || "string" != typeof e) return !0;
      for (let t = 0; t < Hr.length; t++) if (Hr[t].test(e)) return !0;
      const t = !/[aeiou]/i.test(e),
        n = (e.match(/\d/g)?.length ?? 0) > e.length / 2,
        r = /^[a-z]+$/.test(e),
        o = /[$_]{2,}/.test(e);
      return Number(t) + Number(n) + Number(r) + Number(o) >= 2;
    },
    Br = (e) => {
      const t = U(e);
      return t
        ? t.replace(
            /^(?:Memo|Forward(?:Ref)?|With.*?)\((?<inner>.*?)\)$/,
            "$<inner>",
          )
        : "";
    },
    Wr = "never-hidden",
    Yr = null,
    Xr = (e) => {
      (() => {
        Ar?.();
        const e = () => {
          document.hidden && (Wr = Date.now());
        };
        document.addEventListener("visibilitychange", e),
          (Ar = () => {
            document.removeEventListener("visibilitychange", e);
          });
      })();
      const t = new Map(),
        n = new Map(),
        r = (r) => {
          if (!r.interactionId) return;
          if (
            (r.interactionId &&
              r.target &&
              !n.has(r.interactionId) &&
              n.set(r.interactionId, r.target),
            r.target)
          ) {
            let e = r.target;
            for (; e; ) {
              if (
                "react-scan-toolbar-root" === e.id ||
                "react-scan-root" === e.id
              )
                return;
              e = e.parentElement;
            }
          }
          const o = t.get(r.interactionId);
          if (o)
            r.duration > o.latency
              ? ((o.entries = [r]), (o.latency = r.duration))
              : r.duration === o.latency &&
                r.startTime === o.entries[0].startTime &&
                o.entries.push(r);
          else {
            const n =
              ((i = r.name),
              ["pointerup", "click"].includes(i)
                ? "pointer"
                : (i.includes("key"),
                  ["keydown", "keyup"].includes(i) ? "keyboard" : null));
            if (!n) return;
            const o = {
              id: r.interactionId,
              latency: r.duration,
              entries: [r],
              target: r.target,
              type: n,
              startTime: r.startTime,
              endTime: Date.now(),
              processingStart: r.processingStart,
              processingEnd: r.processingEnd,
              duration: r.duration,
              inputDelay: r.processingStart - r.startTime,
              processingDuration: r.processingEnd - r.processingStart,
              presentationDelay: r.duration - (r.processingEnd - r.startTime),
              timestamp: Date.now(),
              timeSinceTabInactive:
                "never-hidden" === Wr ? "never-hidden" : Date.now() - Wr,
              visibilityState: document.visibilityState,
              timeOrigin: performance.timeOrigin,
              referrer: document.referrer,
            };
            t.set(o.id, o),
              Yr ||
                (Yr = requestAnimationFrame(() => {
                  requestAnimationFrame(() => {
                    e(t.get(o.id)), (Yr = null);
                  });
                }));
          }
          var i;
        },
        o = new PerformanceObserver((e) => {
          const t = e.getEntries();
          for (let e = 0, n = t.length; e < n; e++) {
            const n = t[e];
            r(n);
          }
        });
      try {
        o.observe({ type: "event", buffered: !0, durationThreshold: 16 }),
          o.observe({ type: "first-input", buffered: !0 });
      } catch {}
      return () => o.disconnect();
    },
    qr = new jr(25),
    Jr = (e) =>
      Ir.subscribe("recording", (t) => {
        const n =
          "auto-complete-race" === t.kind
            ? qr.find((e) => e.interactionUUID === t.interactionUUID)
            : ((e, t) => {
                let n = null;
                for (const r of t) {
                  if (r.type !== e.type) continue;
                  if (null === n) {
                    n = r;
                    continue;
                  }
                  const t = (e, t) =>
                    Math.abs(e.startDateTime) - (t.startTime + t.timeOrigin);
                  t(r, e) < t(n, e) && (n = r);
                }
                return n;
              })(t.entry, qr);
        if (!n) return;
        const r = n.completeInteraction(t);
        e(r);
      }),
    Gr = (e) => {
      const t = ya(e);
      if (!t) return;
      let n = t ? U(t?.type) : "N/A";
      if (
        (n ||
          (n =
            ((e, t = () => !0) => {
              let n = e;
              for (; n; ) {
                const e = U(n.type);
                if (e && t(e)) return e;
                n = n.return;
              }
              return null;
            })(t, (e) => e.length > 2) ?? "N/A"),
        !n)
      )
        return;
      return {
        componentPath: ((e, t = Or) => {
          if (!e) return [];
          const n = new Array();
          let r = e;
          for (; r.return; ) {
            const e = Br(r.type);
            e && !Vr(e) && Ur(e, t) && n.push(e), (r = r.return);
          }
          const o = new Array(n.length);
          for (let e = 0; e < n.length; e++) o[e] = n[n.length - e - 1];
          return o;
        })(t),
        childrenTree: {},
        componentName: n,
      };
    },
    Kr = (e, t) => {
      let n = null;
      const r = (t) => {
          switch (e) {
            case "pointer":
              return "start" === t.phase
                ? "pointerup"
                : t.target instanceof HTMLInputElement ||
                    t.target instanceof HTMLSelectElement
                  ? "change"
                  : "click";
            case "keyboard":
              return "start" === t.phase ? "keydown" : "change";
          }
        },
        o = {
          current: {
            kind: "uninitialized-stage",
            interactionUUID: $r(),
            stageStart: Date.now(),
            interactionType: e,
          },
        },
        i = (n) => {
          if (
            n
              .composedPath()
              .some(
                (e) =>
                  e instanceof Element && "react-scan-toolbar-root" === e.id,
              )
          )
            return;
          if (
            (Date.now() - o.current.stageStart > 2e3 &&
              (o.current = {
                kind: "uninitialized-stage",
                interactionUUID: $r(),
                stageStart: Date.now(),
                interactionType: e,
              }),
            "uninitialized-stage" !== o.current.kind)
          )
            return;
          const i = performance.now();
          t?.onStart?.(o.current.interactionUUID);
          const s = Gr(n.target);
          if (!s) return void t?.onError?.(o.current.interactionUUID);
          const l = {},
            c = eo(l);
          o.current = {
            ...o.current,
            interactionType: e,
            blockingTimeStart: Date.now(),
            childrenTree: s.childrenTree,
            componentName: s.componentName,
            componentPath: s.componentPath,
            fiberRenders: l,
            kind: "interaction-start",
            interactionStartDetail: i,
            stopListeningForRenders: c,
          };
          const d = r({ phase: "end", target: n.target });
          document.addEventListener(d, a, { once: !0 }),
            requestAnimationFrame(() => {
              document.removeEventListener(d, a);
            });
        };
      document.addEventListener(r({ phase: "start" }), i, { capture: !0 });
      const a = (r, i, a) => {
          if ("interaction-start" !== o.current.kind && i === n)
            return (
              ("pointer" === e && r.target instanceof HTMLSelectElement) ||
                t?.onError?.(o.current.interactionUUID),
              void (o.current = {
                kind: "uninitialized-stage",
                interactionUUID: $r(),
                stageStart: Date.now(),
                interactionType: e,
              })
            );
          (n = i),
            (({ onMicroTask: e, onRAF: t, onTimeout: n, abort: r }) => {
              queueMicrotask(() => {
                !0 !== r?.() &&
                  e() &&
                  requestAnimationFrame(() => {
                    !0 !== r?.() &&
                      t() &&
                      setTimeout(() => {
                        !0 !== r?.() && n();
                      }, 0);
                  });
              });
            })({
              abort: a,
              onMicroTask: () =>
                "uninitialized-stage" !== o.current.kind &&
                ((o.current = {
                  ...o.current,
                  kind: "js-end-stage",
                  jsEndDetail: performance.now(),
                }),
                !0),
              onRAF: () =>
                "js-end-stage" !== o.current.kind &&
                "raf-stage" !== o.current.kind
                  ? (t?.onError?.(o.current.interactionUUID),
                    (o.current = {
                      kind: "uninitialized-stage",
                      interactionUUID: $r(),
                      stageStart: Date.now(),
                      interactionType: e,
                    }),
                    !1)
                  : ((o.current = {
                      ...o.current,
                      kind: "raf-stage",
                      rafStart: performance.now(),
                    }),
                    !0),
              onTimeout: () => {
                if ("raf-stage" !== o.current.kind)
                  return (
                    t?.onError?.(o.current.interactionUUID),
                    void (o.current = {
                      kind: "uninitialized-stage",
                      interactionUUID: $r(),
                      stageStart: Date.now(),
                      interactionType: e,
                    })
                  );
                const n = Date.now(),
                  r = Object.freeze({
                    ...o.current,
                    kind: "timeout-stage",
                    blockingTimeEnd: n,
                    commitEnd: performance.now(),
                  });
                o.current = {
                  kind: "uninitialized-stage",
                  interactionUUID: $r(),
                  stageStart: n,
                  interactionType: e,
                };
                let i = !1;
                const a = (e) => {
                    i = !0;
                    const n =
                        "auto-complete-race" === e.kind
                          ? e.detailedTiming.commitEnd -
                            e.detailedTiming.interactionStartDetail
                          : e.entry.latency,
                      o = {
                        detailedTiming: r,
                        latency: n,
                        completedAt: Date.now(),
                        flushNeeded: !0,
                      };
                    t?.onComplete?.(r.interactionUUID, o, e);
                    const a = qr.filter(
                      (e) => e.interactionUUID !== r.interactionUUID,
                    );
                    return (qr = jr.fromArray(a, 25)), o;
                  },
                  s = {
                    completeInteraction: a,
                    endDateTime: Date.now(),
                    startDateTime: r.blockingTimeStart,
                    type: e,
                    interactionUUID: r.interactionUUID,
                  };
                if ((qr.push(s), Qr()))
                  setTimeout(() => {
                    if (i) return;
                    a({
                      kind: "auto-complete-race",
                      detailedTiming: r,
                      interactionUUID: r.interactionUUID,
                    });
                    const e = qr.filter(
                      (e) => e.interactionUUID !== r.interactionUUID,
                    );
                    qr = jr.fromArray(e, 25);
                  }, 1e3);
                else {
                  const e = qr.filter(
                    (e) => e.interactionUUID !== r.interactionUUID,
                  );
                  (qr = jr.fromArray(e, 25)),
                    a({
                      kind: "auto-complete-race",
                      detailedTiming: r,
                      interactionUUID: r.interactionUUID,
                    });
                }
              },
            });
        },
        s = (e) => {
          const t = $r();
          a(e, t, () => t !== n);
        };
      return (
        "keyboard" === e && document.addEventListener("keypress", s),
        () => {
          document.removeEventListener(r({ phase: "start" }), i, {
            capture: !0,
          }),
            document.removeEventListener("keypress", s);
        }
      );
    },
    Zr = (e) =>
      D(e, (e) => {
        if (M(e)) return !0;
      })?.stateNode,
    Qr = () => "PerformanceEventTiming" in globalThis,
    eo = (e) => {
      const t = (t) => {
        const n = U(t.type);
        if (!n) return;
        const r = e[n];
        if (!r) {
          const r = new Set(),
            o = U(Sa(t));
          o && r.add(o);
          const { selfTime: i, totalTime: a } = I(t),
            s = ms(t),
            l = { current: [], changes: new Set(), changesCounts: new Map() },
            c = {
              fiberProps: s.fiberProps || l,
              fiberState: s.fiberState || l,
              fiberContext: s.fiberContext || l,
            };
          return void (e[n] = {
            renderCount: 1,
            parents: r,
            selfTime: i,
            totalTime: a,
            nodeInfo: [
              {
                element: Zr(t),
                name: U(t.type) ?? "Unknown",
                selfTime: I(t).selfTime,
              },
            ],
            changes: c,
          });
        }
        const o = Sa(t)?.[0]?.type;
        if (o) {
          const e = U(o);
          e && r.parents.add(e);
        }
        const { selfTime: i, totalTime: a } = I(t),
          s = ms(t);
        if (!s) return;
        const l = { current: [], changes: new Set(), changesCounts: new Map() };
        (r.changes = {
          fiberProps: to(r.changes?.fiberProps || l, s.fiberProps || l),
          fiberState: to(r.changes?.fiberState || l, s.fiberState || l),
          fiberContext: to(r.changes?.fiberContext || l, s.fiberContext || l),
        }),
          (r.renderCount += 1),
          (r.selfTime += i),
          (r.totalTime += a),
          r.nodeInfo.push({
            element: Zr(t),
            name: U(t.type) ?? "Unknown",
            selfTime: I(t).selfTime,
          });
      };
      return (
        (ll.monitor.value.interactionListeningForRenders = t),
        () => {
          ll.monitor.value?.interactionListeningForRenders === t &&
            (ll.monitor.value.interactionListeningForRenders = null);
        }
      );
    },
    to = (e, t) => {
      const n = {
        current: [...e.current],
        changes: new Set(),
        changesCounts: new Map(),
      };
      for (const e of t.current)
        n.current.some((t) => t.name === e.name) || n.current.push(e);
      for (const r of t.changes)
        if ("string" == typeof r || "number" == typeof r) {
          n.changes.add(r);
          const o = e.changesCounts.get(r) || 0,
            i = t.changesCounts.get(r) || 0;
          n.changesCounts.set(r, o + i);
        }
      return n;
    },
    no = null;
  Fr()((e) => ({
    state: { events: [] },
    actions: {
      addEvent: (t) => {
        e((e) => ({ state: { events: [...e.state.events, t] } }));
      },
      clear: () => {
        e({ state: { events: [] } });
      },
    },
  }));
  var ro = Fr()((e, t) => {
      const n = new Set();
      return {
        state: { events: [] },
        actions: {
          addEvent: (r) => {
            n.forEach((e) => e(r));
            const o = [...t().state.events, r],
              i = new Set();
            o.forEach((e) => {
              "interaction" !== e.kind &&
                ((e, t) => {
                  const n = o.find((t) => {
                    if ("long-render" !== t.kind && t.id !== e.id)
                      return (
                        (e.data.startAt <= t.data.startAt &&
                          e.data.endAt <= t.data.endAt &&
                          e.data.endAt >= t.data.startAt) ||
                        (t.data.startAt <= e.data.startAt &&
                          t.data.endAt >= e.data.startAt) ||
                        (e.data.startAt <= t.data.startAt &&
                          e.data.endAt >= t.data.endAt) ||
                        void 0
                      );
                  });
                  n && t(n);
                })(e, () => {
                  i.add(e.id);
                });
            });
            const a = o.filter((e) => !i.has(e.id));
            e(() => ({ state: { events: a } }));
          },
          addListener: (e) => (
            n.add(e),
            () => {
              n.delete(e);
            }
          ),
          clear: () => {
            e({ state: { events: [] } });
          },
        },
      };
    }),
    oo = () => {
      return (
        (e = ro.subscribe),
        (t = ro.getState),
        (n = t()),
        (r = He({ t: { __: n, u: t } })),
        (o = r[0].t),
        (i = r[1]),
        Be(
          function () {
            (o.__ = n), (o.u = t), Zn(o) && i({ t: o });
          },
          [e, n, t],
        ),
        Ve(
          function () {
            return (
              Zn(o) && i({ t: o }),
              e(function () {
                Zn(o) && i({ t: o });
              })
            );
          },
          [e],
        ),
        n
      );
      var e, t, n, r, o, i;
    },
    io = !1,
    ao = [];
  var so = () => {
      const e = Xr((e) => {
        Ir.publish({ kind: "entry-received", entry: e }, "recording");
      });
      document.addEventListener("visibilitychange", () => {
        "visible" !== document.visibilityState && (io = !0);
      }),
        (function () {
          let e, t;
          (function n() {
            let r = null;
            (no = null), (r = eo((no = {})));
            const o = performance.timeOrigin,
              i = performance.now();
            e = requestAnimationFrame(() => {
              t = setTimeout(() => {
                const e = performance.now(),
                  t = e - i,
                  a = performance.timeOrigin;
                ao.push(e);
                const s = ao.filter((t) => e - t <= 1e3),
                  l = s.length;
                if (((ao = s), t > 200 && !io)) {
                  const n = a + e,
                    r = i + o;
                  ro.getState().actions.addEvent({
                    kind: "long-render",
                    id: $r(),
                    data: {
                      endAt: n,
                      startAt: r,
                      meta: { fiberRenders: no, latency: t, fps: l },
                    },
                  });
                }
                (io = !1), r?.(), n();
              }, 0);
            });
          })();
        })();
      const t = async (e, t, n) => {
          ro.getState().actions.addEvent({
            kind: "interaction",
            id: $r(),
            data: {
              startAt: t.detailedTiming.blockingTimeStart,
              endAt: performance.now() + performance.timeOrigin,
              meta: { ...t, kind: n.kind },
            },
          });
          const r = Ir.getChannelState("recording");
          t.detailedTiming.stopListeningForRenders(),
            r.length && Ir.updateChannelState("recording", () => new jr(Dr));
        },
        n = Kr("pointer", { onComplete: t }),
        r = Kr("keyboard", { onComplete: t }),
        o = Jr((e) => {
          Pr.setState(jr.fromArray(Pr.getCurrentState().concat(e), 150));
        });
      return () => {
        e(), n(), o(), r();
      };
    },
    lo = (e) => {
      const t = e.filter((e) => e.length > 2);
      return 0 === t.length ? (e.at(-1) ?? "Unknown") : t.at(-1);
    },
    co = (e) => {
      switch (e.kind) {
        case "interaction": {
          const {
            renderTime: t,
            otherJSTime: n,
            framePreparation: r,
            frameConstruction: o,
            frameDraw: i,
          } = e;
          return t + n + r + o + (i ?? 0);
        }
        case "dropped-frames":
          return e.otherTime + e.renderTime;
      }
    },
    uo = (e) => {
      const t = co(e.timing);
      switch (e.kind) {
        case "interaction":
          return t < 200 ? "low" : t < 500 ? "needs-improvement" : "high";
        case "dropped-frames":
          return t < 50 ? "low" : t < 200 ? "needs-improvement" : "high";
      }
    },
    po = () => qe(ho),
    ho = $e(null),
    fo = ({ size: e = 24, className: t }) =>
      Xn("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        className: Tn(["lucide lucide-chevron-right", t]),
        children: Xn("path", { d: "m9 18 6-6-6-6" }),
      }),
    mo = ({ className: e = "", size: t = 24, events: n = [] }) => {
      const r = n.includes(!0),
        o = n.filter((e) => e).length,
        i = o > 99 ? ">99" : o,
        a = r ? Math.max(0.6 * t, 14) : Math.max(0.4 * t, 6);
      return Xn("div", {
        className: "relative",
        children: [
          Xn("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: t,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            className: `lucide lucide-bell ${e}`,
            children: [
              Xn("path", { d: "M10.268 21a2 2 0 0 0 3.464 0" }),
              Xn("path", {
                d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
              }),
            ],
          }),
          n.length > 0 &&
            o > 0 &&
            Xn("div", {
              className: Tn([
                "absolute",
                r ? "-top-2.5 -right-2.5" : "-top-1 -right-1",
                "rounded-full",
                "flex items-center justify-center",
                "text-[8px] font-medium text-white",
                "aspect-square",
                r ? "bg-red-500/90" : "bg-purple-500/90",
              ]),
              style: {
                width: `${a}px`,
                height: `${a}px`,
                padding: r ? "0.5px" : "0",
              },
              children: r && i,
            }),
        ],
      });
    },
    go = ({ className: e = "", size: t = 24 }) =>
      Xn("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: t,
        height: t,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        className: e,
        children: [
          Xn("path", { d: "M18 6 6 18" }),
          Xn("path", { d: "m6 6 12 12" }),
        ],
      }),
    wo = ({ className: e = "", size: t = 24 }) =>
      Xn("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: t,
        height: t,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        className: e,
        children: [
          Xn("path", {
            d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
          }),
          Xn("path", { d: "M16 9a5 5 0 0 1 0 6" }),
          Xn("path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728" }),
        ],
      }),
    vo = ({ className: e = "", size: t = 24 }) =>
      Xn("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: t,
        height: t,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        className: e,
        children: [
          Xn("path", { d: "M16 9a5 5 0 0 1 .95 2.293" }),
          Xn("path", { d: "M19.364 5.636a9 9 0 0 1 1.889 9.96" }),
          Xn("path", { d: "m2 2 20 20" }),
          Xn("path", {
            d: "m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11",
          }),
          Xn("path", { d: "M9.828 4.172A.686.686 0 0 1 11 4.657v.686" }),
        ],
      }),
    bo = ({ size: e = 24, className: t }) =>
      Xn("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        className: Tn(["lucide lucide-arrow-left", t]),
        children: [
          Xn("path", { d: "m12 19-7-7 7-7" }),
          Xn("path", { d: "M19 12H5" }),
        ],
      }),
    xo = ({ className: e = "", size: t = 24 }) =>
      Xn("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: t,
        height: t,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        className: e,
        children: [
          Xn("path", { d: "M14 4.1 12 6" }),
          Xn("path", { d: "m5.1 8-2.9-.8" }),
          Xn("path", { d: "m6 12-1.9 2" }),
          Xn("path", { d: "M7.2 2.2 8 5.1" }),
          Xn("path", {
            d: "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",
          }),
        ],
      }),
    yo = ({ className: e = "", size: t = 24 }) =>
      Xn("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: t,
        height: t,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        className: e,
        children: [
          Xn("path", { d: "M10 8h.01" }),
          Xn("path", { d: "M12 12h.01" }),
          Xn("path", { d: "M14 8h.01" }),
          Xn("path", { d: "M16 12h.01" }),
          Xn("path", { d: "M18 8h.01" }),
          Xn("path", { d: "M6 8h.01" }),
          Xn("path", { d: "M7 16h10" }),
          Xn("path", { d: "M8 12h.01" }),
          Xn("rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }),
        ],
      }),
    ko = ({ className: e = "", size: t = 24 }) =>
      Xn("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: t,
        height: t,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        className: e,
        style: { transform: "rotate(180deg)" },
        children: [
          Xn("circle", { cx: "12", cy: "12", r: "10" }),
          Xn("path", { d: "m4.9 4.9 14.2 14.2" }),
        ],
      }),
    _o = ({ className: e = "", size: t = 24 }) =>
      Xn("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: t,
        height: t,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: e,
        children: [
          Xn("polyline", { points: "22 17 13.5 8.5 8.5 13.5 2 7" }),
          Xn("polyline", { points: "16 17 22 17 22 11" }),
        ],
      }),
    So = ({ children: e, triggerContent: t, wrapperProps: n }) => {
      const [r, o] = He("closed"),
        [i, a] = He(null),
        [s, l] = He({ width: window.innerWidth, height: window.innerHeight }),
        c = We(null),
        d = We(null),
        u = qe(Vi),
        p = We(!1);
      Ve(() => {
        const e = () => {
          l({ width: window.innerWidth, height: window.innerHeight }), h();
        };
        return (
          window.addEventListener("resize", e),
          () => window.removeEventListener("resize", e)
        );
      }, []);
      const h = () => {
        if (c.current && u) {
          const e = c.current.getBoundingClientRect(),
            t = u.getBoundingClientRect(),
            n = e.left + e.width / 2,
            r = e.top,
            o = new DOMRect(n - t.left, r - t.top, e.width, e.height);
          a(o);
        }
      };
      Ve(() => {
        h();
      }, [c.current]),
        Ve(() => {
          if ("opening" === r) {
            const e = setTimeout(() => o("open"), 120);
            return () => clearTimeout(e);
          }
          if ("closing" === r) {
            const e = setTimeout(() => o("closed"), 120);
            return () => clearTimeout(e);
          }
        }, [r]),
        Ve(() => {
          const e = setInterval(() => {
            p.current || "closed" === r || o("closing");
          }, 1e3);
          return () => clearInterval(e);
        }, [r]);
      const f = () => {
        if (!i || !u) return { top: 0, left: 0 };
        const e = u.getBoundingClientRect(),
          t = d.current?.offsetHeight || 40,
          n = i.x + e.left,
          r = i.y + e.top;
        let o = n,
          a = r - 4;
        return (
          o - 87.5 < 5
            ? (o = 92.5)
            : o + 87.5 > s.width - 5 && (o = s.width - 5 - 87.5),
          a - t < 5 && (a = r + i.height + 4),
          { top: a - e.top, left: o - e.left }
        );
      };
      return Xn(pe, {
        children: [
          u &&
            i &&
            "closed" !== r &&
            ((m = Xn("div", {
              ref: d,
              className: Tn([
                "absolute z-100 bg-white text-black rounded-lg px-3 py-2 shadow-lg",
                "transform transition-all duration-120 ease-[cubic-bezier(0.23,1,0.32,1)]",
                'after:content-[""] after:absolute after:top-[100%]',
                "after:left-1/2 after:-translate-x-1/2",
                "after:w-[10px] after:h-[6px]",
                "after:border-l-[5px] after:border-l-transparent",
                "after:border-r-[5px] after:border-r-transparent",
                "after:border-t-[6px] after:border-t-white",
                "pointer-events-none",
                "opening" === r || "closing" === r
                  ? "opacity-0 translate-y-1"
                  : "opacity-100 translate-y-0",
              ]),
              style: {
                top: f().top + "px",
                left: f().left + "px",
                transform: "translate(-50%, -100%)",
                minWidth: "175px",
              },
              children: e,
            })),
            (g = u),
            (w = de(hr, { __v: m, h: g })),
            (w.containerInfo = g),
            w),
          Xn("div", {
            ref: c,
            onMouseEnter: () => {
              (p.current = !0), h(), o("opening");
            },
            onMouseLeave: () => {
              (p.current = !1), h(), o("closing");
            },
            ...n,
            children: t,
          }),
        ],
      });
      var m, g, w;
    },
    No = ({ selectedEvent: e }) => {
      const {
        notificationState: t,
        setNotificationState: n,
        setRoute: r,
      } = po();
      return Xn("div", {
        className: Tn([
          "flex w-full justify-between items-center px-3 py-2 text-xs",
        ]),
        children: [
          Xn("div", {
            className: Tn([
              "bg-[#18181B] flex items-center gap-x-1 p-1 rounded-sm",
            ]),
            children: [
              Xn("button", {
                onClick: () => {
                  r({ route: "render-visualization", routeMessage: null });
                },
                className: Tn([
                  "w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",
                  "render-visualization" === t.route ||
                  "render-explanation" === t.route
                    ? "text-white bg-[#7521c8] rounded-sm"
                    : "text-[#6E6E77] bg-[#18181B] rounded-sm",
                ]),
                children: "Ranked",
              }),
              Xn("button", {
                onClick: () => {
                  r({ route: "other-visualization", routeMessage: null });
                },
                className: Tn([
                  "w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",
                  "other-visualization" === t.route
                    ? "text-white bg-[#7521c8] rounded-sm"
                    : "text-[#6E6E77] bg-[#18181B] rounded-sm",
                ]),
                children: "Overview",
              }),
              Xn("button", {
                onClick: () => {
                  r({ route: "optimize", routeMessage: null });
                },
                className: Tn([
                  "w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",
                  "optimize" === t.route
                    ? "text-white bg-[#7521c8] rounded-sm"
                    : "text-[#6E6E77] bg-[#18181B] rounded-sm",
                ]),
                children: Xn("span", { children: "Prompts" }),
              }),
            ],
          }),
          Xn(So, {
            triggerContent: Xn("button", {
              onClick: () => {
                n((e) => {
                  e.audioNotificationsOptions.enabled &&
                    "closed" !==
                      e.audioNotificationsOptions.audioContext.state &&
                    e.audioNotificationsOptions.audioContext.close();
                  const t = new AudioContext();
                  return (
                    e.audioNotificationsOptions.enabled || Mt(t),
                    {
                      ...e,
                      audioNotificationsOptions: e.audioNotificationsOptions
                        .enabled
                        ? { audioContext: null, enabled: !1 }
                        : { audioContext: t, enabled: !0 },
                    }
                  );
                });
              },
              className: "ml-auto",
              children: Xn("div", {
                className: Tn([
                  "flex gap-x-2 justify-center items-center text-[#6E6E77]",
                ]),
                children: [
                  Xn("span", { children: "Alerts" }),
                  t.audioNotificationsOptions.enabled
                    ? Xn(wo, { size: 16, className: "text-[#6E6E77]" })
                    : Xn(vo, { size: 16, className: "text-[#6E6E77]" }),
                ],
              }),
            }),
            children: Xn(pe, {
              children: "Play a chime when a slowdown is recorded",
            }),
          }),
        ],
      });
    },
    Co = (e) => {
      let t = "";
      return (
        e
          .toSorted((e, t) => t.totalTime - e.totalTime)
          .slice(0, 30)
          .filter((e) => e.totalTime > 5)
          .forEach((e) => {
            let n = "";
            (n += "Component Name:"),
              (n += e.name),
              (n += "\n"),
              (n += `Rendered: ${e.count} times\n`),
              (n += `Sum of self times for ${e.name} is ${e.totalTime.toFixed(0)}ms\n`),
              e.changes.props.length > 0 &&
                ((n += `Changed props for all ${e.name} instances ("name:count" pairs)\n`),
                e.changes.props.forEach((e) => {
                  n += `${e.name}:${e.count}x\n`;
                })),
              e.changes.state.length > 0 &&
                ((n += `Changed state for all ${e.name} instances ("hook index:count" pairs)\n`),
                e.changes.state.forEach((e) => {
                  n += `${e.index}:${e.count}x\n`;
                })),
              e.changes.context.length > 0 &&
                ((n += `Changed context for all ${e.name} instances ("context display name (if exists):count" pairs)\n`),
                e.changes.context.forEach((e) => {
                  n += `${e.name}:${e.count}x\n`;
                })),
              (t += n),
              (t += "\n");
          }),
        t
      );
    },
    Eo = (e, t) =>
      Rr(() => {
        switch (e) {
          case "data":
            switch (t.kind) {
              case "dropped-frames":
                return (({
                  renderTime: e,
                  otherTime: t,
                  formattedReactData: n,
                }) =>
                  `I will provide you with a set of high level, and low level performance data about a large frame drop in a React App:\n### High level\n- react component render time: ${e.toFixed(0)}ms\n- how long it took to run everything else (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${t}ms\n\n### Low level\nWe also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.\n${n}`)(
                  {
                    formattedReactData: Co(t.groupedFiberRenders),
                    renderTime: t.groupedFiberRenders.reduce(
                      (e, t) => e + t.totalTime,
                      0,
                    ),
                    otherTime: t.timing.otherTime,
                  },
                );
              case "interaction":
                return (({
                  renderTime: e,
                  eHandlerTimeExcludingRenders: t,
                  toRafTime: n,
                  commitTime: r,
                  framePresentTime: o,
                  formattedReactData: i,
                }) =>
                  `I will provide you with a set of high level, and low level performance data about an interaction in a React App:\n### High level\n- react component render time: ${e.toFixed(0)}ms\n- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${t.toFixed(0)}ms\n- how long it took from the last event handler time, to the last request animation frame: ${n.toFixed(0)}ms\n\t- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time\n- how long it took from the last request animation frame to when the dom was committed: ${r.toFixed(0)}ms\n\t- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high\n${o && `- how long it took from dom commit for the frame to be presented: ${o.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}\n\n### Low level\nWe also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.\n${i}`)(
                  {
                    commitTime: t.timing.frameConstruction,
                    eHandlerTimeExcludingRenders: t.timing.otherJSTime,
                    formattedReactData: Co(t.groupedFiberRenders),
                    framePresentTime: t.timing.frameDraw,
                    renderTime: t.groupedFiberRenders.reduce(
                      (e, t) => e + t.totalTime,
                      0,
                    ),
                    toRafTime: t.timing.framePreparation,
                  },
                );
            }
          case "explanation":
            switch (t.kind) {
              case "dropped-frames":
                return (({
                  renderTime: e,
                  otherTime: t,
                  formattedReactData: n,
                }) =>
                  `Your goal will be to help me find the source of a performance problem in a React App. I collected a large dataset about this specific performance problem.\n\nWe have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown\n\n- react component render time: ${e.toFixed(0)}ms\n- other time (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${t}ms\n\n\nWe also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.\n\n${n}\n\nYou may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation\n\nIt's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:\n- find the most expensive components\n- see what's causing them to render\n- determine how you can make those state/props/context not change for a large set of the renders\n- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. \n\n\nAn important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).\n\nIt's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one, and this can add significant overhead when thousands of effects ran.\n\nIf it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.\n`)(
                  {
                    formattedReactData: Co(t.groupedFiberRenders),
                    renderTime: t.groupedFiberRenders.reduce(
                      (e, t) => e + t.totalTime,
                      0,
                    ),
                    otherTime: t.timing.otherTime,
                  },
                );
              case "interaction":
                return (({
                  interactionType: e,
                  name: t,
                  componentPath: n,
                  time: r,
                  renderTime: o,
                  eHandlerTimeExcludingRenders: i,
                  toRafTime: a,
                  commitTime: s,
                  framePresentTime: l,
                  formattedReactData: c,
                }) =>
                  `Your goal will be to help me find the source of a performance problem. I collected a large dataset about this specific performance problem.\n\nThere was a ${e} on a component named ${t}. This means, roughly, the component that handled the ${e} event was named ${t}.\n\nWe have a set of high level, and low level data about the performance issue.\n\nThe click took ${r.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.\n\nWe also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.\n\n- react component render time: ${o.toFixed(0)}ms\n- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${i.toFixed(0)}ms\n- how long it took from the last event handler time, to the last request animation frame: ${a.toFixed(0)}ms\n\t- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time\n- how long it took from the last request animation frame to when the dom was committed: ${s.toFixed(0)}ms\n\t- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high\n${l && `- how long it took from dom commit for the frame to be presented: ${l.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}\n\nWe also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.\n\n${c}\n\n\nYou may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation\n\nIt's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:\n- find the most expensive components\n- see what's causing them to render\n- determine how you can make those state/props/context not change for a large set of the renders\n- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. \n\n\nAn important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.\n\nIt's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.\n\nIf it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.\n`)(
                  {
                    commitTime: t.timing.frameConstruction,
                    componentPath: t.componentPath.join(">"),
                    eHandlerTimeExcludingRenders: t.timing.otherJSTime,
                    formattedReactData: Co(t.groupedFiberRenders),
                    framePresentTime: t.timing.frameDraw,
                    interactionType: t.type,
                    name: lo(t.componentPath),
                    renderTime: t.groupedFiberRenders.reduce(
                      (e, t) => e + t.totalTime,
                      0,
                    ),
                    time: co(t.timing),
                    toRafTime: t.timing.framePreparation,
                  },
                );
            }
          case "fix":
            switch (t.kind) {
              case "dropped-frames":
                return (({
                  renderTime: e,
                  otherTime: t,
                  formattedReactData: n,
                }) =>
                  `You will attempt to implement a performance improvement to a large slowdown in a react app\n\nYour should split your goals into 2 parts:\n- identifying the problem\n- fixing the problem\n\t- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.\n\nMake sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components\n\nOne challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:\n- you can try to work around the problem, knowing which module is slow\n- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code\n- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)\n- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)\n\n\nWe have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown\n\n- react component render time: ${e.toFixed(0)}ms\n- other time: ${t}ms\n\n\nWe also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.\n\n${n}\n\nYou may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation\n\nIt's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:\n- find the most expensive components\n- see what's causing them to render\n- determine how you can make those state/props/context not change for a large set of the renders\n- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. \n\nAn important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).\n\nIt's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.\n\nIf a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.\n\nIf renders don't seem to be the problem, see if there are any expensive CSS properties being added/mutated, or any expensive DOM Element mutations/new elements being created that could cause this slowdown. \n`)(
                  {
                    formattedReactData: Co(t.groupedFiberRenders),
                    renderTime: t.groupedFiberRenders.reduce(
                      (e, t) => e + t.totalTime,
                      0,
                    ),
                    otherTime: t.timing.otherTime,
                  },
                );
              case "interaction":
                return (({
                  interactionType: e,
                  name: t,
                  componentPath: n,
                  time: r,
                  renderTime: o,
                  eHandlerTimeExcludingRenders: i,
                  toRafTime: a,
                  commitTime: s,
                  framePresentTime: l,
                  formattedReactData: c,
                }) =>
                  `You will attempt to implement a performance improvement to a user interaction in a React app. You will be provided with data about the interaction, and the slow down.\n\nYour should split your goals into 2 parts:\n- identifying the problem\n- fixing the problem\n\t- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.\n\n\nMake sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components\n\nOne challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:\n- you can try to work around the problem, knowing which module is slow\n- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code\n- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)\n- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)\n\nThe interaction was a ${e} on the component named ${t}. This component has the following ancestors ${n}. This is the path from the component, to the root. This should be enough information to figure out where this component is in the user's code base\n\nThis path is the component that was clicked, so it should tell you roughly where component had an event handler that triggered a state change.\n\nPlease note that the leaf node of this path might not be user code (if they use a UI library), and they may contain many wrapper components that just pass through children that aren't relevant to the actual click. So make you sure analyze the path and understand what the user code is doing\n\nWe have a set of high level, and low level data about the performance issue.\n\nThe click took ${r.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.\n\nWe also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.\n\n- react component render time: ${o.toFixed(0)}ms\n- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${i.toFixed(0)}ms\n- how long it took from the last event handler time, to the last request animation frame: ${a.toFixed(0)}ms\n\t- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time\n- how long it took from the last request animation frame to when the dom was committed: ${s.toFixed(0)}ms\n\t- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high\n${l && `- how long it took from dom commit for the frame to be presented: ${l.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}\n\n\nWe also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.\n\n${c}\n\nYou may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation\n\nIt's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:\n- find the most expensive components\n- see what's causing them to render\n- determine how you can make those state/props/context not change for a large set of the renders\n- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. \n\nAn important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.\n\nIt's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.\n\nIf a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.\n\n`)(
                  {
                    commitTime: t.timing.frameConstruction,
                    componentPath: t.componentPath.join(">"),
                    eHandlerTimeExcludingRenders: t.timing.otherJSTime,
                    formattedReactData: Co(t.groupedFiberRenders),
                    framePresentTime: t.timing.frameDraw,
                    interactionType: t.type,
                    name: lo(t.componentPath),
                    renderTime: t.groupedFiberRenders.reduce(
                      (e, t) => e + t.totalTime,
                      0,
                    ),
                    time: co(t.timing),
                    toRafTime: t.timing.framePreparation,
                  },
                );
            }
        }
      }),
    To = ({ selectedEvent: e }) => {
      const [t, n] = He("fix"),
        [r, o] = He(!1);
      return Xn("div", {
        className: Tn(["w-full h-full"]),
        children: [
          Xn("div", {
            className: Tn([
              "border border-[#27272A] rounded-sm h-4/5 text-xs overflow-hidden",
            ]),
            children: [
              Xn("div", {
                className: Tn(["bg-[#18181B] p-1 rounded-t-sm"]),
                children: Xn("div", {
                  className: Tn(["flex items-center gap-x-1"]),
                  children: [
                    Xn("button", {
                      onClick: () => n("fix"),
                      className: Tn([
                        "flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",
                        "fix" === t
                          ? "text-white bg-[#7521c8]"
                          : "text-[#6E6E77] hover:text-white",
                      ]),
                      children: "Fix",
                    }),
                    Xn("button", {
                      onClick: () => n("explanation"),
                      className: Tn([
                        "flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",
                        "explanation" === t
                          ? "text-white bg-[#7521c8]"
                          : "text-[#6E6E77] hover:text-white",
                      ]),
                      children: "Explanation",
                    }),
                    Xn("button", {
                      onClick: () => n("data"),
                      className: Tn([
                        "flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",
                        "data" === t
                          ? "text-white bg-[#7521c8]"
                          : "text-[#6E6E77] hover:text-white",
                      ]),
                      children: "Data",
                    }),
                  ],
                }),
              }),
              Xn("div", {
                className: Tn(["overflow-y-auto h-full"]),
                children: Xn("pre", {
                  className: Tn([
                    "p-2 h-full",
                    "whitespace-pre-wrap break-words",
                    "text-gray-300 font-mono ",
                  ]),
                  children: Eo(t, e),
                }),
              }),
            ],
          }),
          Xn("button", {
            onClick: async () => {
              const n = Eo(t, e);
              await navigator.clipboard.writeText(n),
                o(!0),
                setTimeout(() => o(!1), 1e3);
            },
            className: Tn([
              "mt-4 px-4 py-2 bg-[#18181B] text-[#6E6E77] rounded-sm",
              "hover:text-white transition-colors duration-200",
              "flex items-center justify-center gap-x-2 text-xs",
            ]),
            children: [
              Xn("span", { children: r ? "Copied!" : "Copy Prompt" }),
              Xn("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: Tn([
                  "transition-transform duration-200",
                  r && "scale-110",
                ]),
                children: r
                  ? Xn("path", { d: "M20 6L9 17l-5-5" })
                  : Xn(pe, {
                      children: [
                        Xn("rect", {
                          width: "14",
                          height: "14",
                          x: "8",
                          y: "8",
                          rx: "2",
                          ry: "2",
                        }),
                        Xn("path", {
                          d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
                        }),
                      ],
                    }),
              }),
            ],
          }),
        ],
      });
    },
    zo = ({ selectedEvent: e }) => {
      const [t] = He(gl() ?? !1),
        { notificationState: n } = po(),
        [r, o] = He(n.routeMessage?.name ? [n.routeMessage.name] : []),
        i = qe(Vi);
      Ve(() => {
        if (n.routeMessage?.name) {
          const e = i?.querySelector("#overview-scroll-container"),
            t = i?.querySelector(
              `#react-scan-overview-bar-${n.routeMessage.name}`,
            );
          if (e && t) {
            const n =
              t.getBoundingClientRect().top - e.getBoundingClientRect().top;
            e.scrollTop = e.scrollTop + n;
          }
        }
      }, [n.route]),
        Ve(() => {
          "other-visualization" === n.route &&
            o((e) => (n.routeMessage?.name ? [n.routeMessage.name] : e));
        }, [n.route]);
      const a = ((e, t) => {
          switch (e.kind) {
            case "dropped-frames":
              return [
                ...(t
                  ? [
                      {
                        name: "Total Processing Time",
                        time: co(e.timing),
                        color: "bg-red-500",
                        kind: "total-processing-time",
                      },
                    ]
                  : [
                      {
                        name: "Renders",
                        time: e.timing.renderTime,
                        color: "bg-purple-500",
                        kind: "render",
                      },
                      {
                        name: "JavaScript, DOM updates, Draw Frame",
                        time: e.timing.otherTime,
                        color: "bg-[#4b4b4b]",
                        kind: "other-frame-drop",
                      },
                    ]),
              ];
            case "interaction":
              return [
                ...(t
                  ? []
                  : [
                      {
                        name: "Renders",
                        time: e.timing.renderTime,
                        color: "bg-purple-500",
                        kind: "render",
                      },
                    ]),
                {
                  name: t
                    ? "React Renders, Hooks, Other JavaScript"
                    : "JavaScript/React Hooks ",
                  time: e.timing.otherJSTime,
                  color: "bg-[#EFD81A]",
                  kind: "other-javascript",
                },
                {
                  name: "Update DOM and Draw New Frame",
                  time:
                    co(e.timing) - e.timing.renderTime - e.timing.otherJSTime,
                  color: "bg-[#1D3A66]",
                  kind: "other-not-javascript",
                },
              ];
          }
        })(e, t),
        s = a.reduce((e, t) => e + t.time, 0);
      return Xn("div", {
        className: "rounded-sm border border-zinc-800 text-xs",
        children: [
          Xn("div", {
            className: "p-2 border-b border-zinc-800 bg-zinc-900/50",
            children: Xn("div", {
              className: "flex items-center justify-between",
              children: [
                Xn("h3", {
                  className: "text-xs font-medium",
                  children: "What was time spent on?",
                }),
                Xn("span", {
                  className: "text-xs text-zinc-400",
                  children: ["Total: ", s.toFixed(0), "ms"],
                }),
              ],
            }),
          }),
          Xn("div", {
            className: "divide-y divide-zinc-800",
            children: a.map((t) => {
              const n = r.includes(t.kind);
              return Xn(
                "div",
                {
                  id: `react-scan-overview-bar-${t.kind}`,
                  children: [
                    Xn("button", {
                      onClick: () =>
                        o((e) =>
                          e.includes(t.kind)
                            ? e.filter((e) => e !== t.kind)
                            : [...e, t.kind],
                        ),
                      className:
                        "w-full px-3 py-2 flex items-center gap-4 hover:bg-zinc-800/50 transition-colors",
                      children: Xn("div", {
                        className: "flex-1",
                        children: [
                          Xn("div", {
                            className: "flex items-center justify-between mb-2",
                            children: [
                              Xn("div", {
                                className: "flex items-center gap-0.5",
                                children: [
                                  Xn("svg", {
                                    className:
                                      "h-4 w-4 text-zinc-400 transition-transform " +
                                      (n ? "rotate-90" : ""),
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: Xn("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2,
                                      d: "M9 5l7 7-7 7",
                                    }),
                                  }),
                                  Xn("span", {
                                    className:
                                      "font-medium flex items-center text-left",
                                    children: t.name,
                                  }),
                                ],
                              }),
                              Xn("span", {
                                className: " text-zinc-400",
                                children: [t.time.toFixed(0), "ms"],
                              }),
                            ],
                          }),
                          Xn("div", {
                            className:
                              "h-1 bg-zinc-800 rounded-full overflow-hidden",
                            children: Xn("div", {
                              className: `h-full ${t.color} transition-all`,
                              style: { width: (t.time / s) * 100 + "%" },
                            }),
                          }),
                        ],
                      }),
                    }),
                    n &&
                      Xn("div", {
                        className:
                          "bg-zinc-900/30 border-t border-zinc-800 px-2.5 py-3",
                        children: Xn("p", {
                          className: " text-zinc-400 mb-4 text-xs",
                          children: Rr(() => {
                            switch (e.kind) {
                              case "interaction":
                                switch (t.kind) {
                                  case "render":
                                    return Xn(Ro, { input: Mo(e) });
                                  case "other-javascript":
                                    return Xn(Ro, { input: Fo(e) });
                                  case "other-not-javascript":
                                    return Xn(Ro, { input: Ao(e) });
                                }
                              case "dropped-frames":
                                switch (t.kind) {
                                  case "total-processing-time":
                                    return Xn(Ro, {
                                      input: {
                                        kind: "total-processing",
                                        data: { time: co(e.timing) },
                                      },
                                    });
                                  case "render":
                                    return Xn(pe, {
                                      children: Xn(Ro, {
                                        input: {
                                          kind: "render",
                                          data: {
                                            topByTime: e.groupedFiberRenders
                                              .toSorted(
                                                (e, t) =>
                                                  t.totalTime - e.totalTime,
                                              )
                                              .slice(0, 3)
                                              .map((t) => ({
                                                name: t.name,
                                                percentage:
                                                  t.totalTime / co(e.timing),
                                              })),
                                          },
                                        },
                                      }),
                                    });
                                  case "other-frame-drop":
                                    return Xn(Ro, { input: { kind: "other" } });
                                }
                            }
                          }),
                        }),
                      }),
                  ],
                },
                t.kind,
              );
            }),
          }),
        ],
      });
    },
    Ao = (e) => {
      const t = e.groupedFiberRenders.reduce((e, t) => e + t.count, 0),
        n = e.timing.renderTime,
        r = co(e.timing);
      return t > 100
        ? {
            kind: "high-render-count-update-dom-draw-frame",
            data: {
              count: t,
              percentageOfTotal: (n / r) * 100,
              copyButton: Xn($o, {}),
            },
          }
        : { kind: "update-dom-draw-frame", data: { copyButton: Xn($o, {}) } };
    },
    $o = () => {
      const [e, t] = He(!1),
        { notificationState: n } = po();
      return Xn("button", {
        onClick: async () => {
          n.selectedEvent &&
            (await navigator.clipboard.writeText(
              Eo("explanation", n.selectedEvent),
            ),
            t(!0),
            setTimeout(() => t(!1), 1e3));
        },
        className:
          "bg-zinc-800 flex hover:bg-zinc-700 text-zinc-200 px-2 py-1 rounded gap-x-3",
        children: [
          Xn("span", { children: e ? "Copied!" : "Copy Prompt" }),
          Xn("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: Tn([
              "transition-transform duration-200",
              e && "scale-110",
            ]),
            children: e
              ? Xn("path", { d: "M20 6L9 17l-5-5" })
              : Xn(pe, {
                  children: [
                    Xn("rect", {
                      width: "14",
                      height: "14",
                      x: "8",
                      y: "8",
                      rx: "2",
                      ry: "2",
                    }),
                    Xn("path", {
                      d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
                    }),
                  ],
                }),
          }),
        ],
      });
    },
    Mo = (e) =>
      e.timing.renderTime / co(e.timing) > 0.3
        ? {
            kind: "render",
            data: {
              topByTime: e.groupedFiberRenders
                .toSorted((e, t) => t.totalTime - e.totalTime)
                .slice(0, 3)
                .map((t) => ({
                  percentage: t.totalTime / co(e.timing),
                  name: t.name,
                })),
            },
          }
        : { kind: "other" },
    Fo = (e) => {
      const t = e.groupedFiberRenders.reduce((e, t) => e + t.count, 0);
      return e.timing.otherJSTime / co(e.timing) < 0.2
        ? { kind: "js-explanation-base" }
        : e.groupedFiberRenders.find((e) => e.count > 200) ||
            e.groupedFiberRenders.reduce((e, t) => e + t.count, 0) > 500
          ? {
              kind: "high-render-count-high-js",
              data: {
                renderCount: t,
                topByCount: e.groupedFiberRenders
                  .filter((e) => e.count > 100)
                  .toSorted((e, t) => t.count - e.count)
                  .slice(0, 3),
              },
            }
          : e.timing.otherJSTime / co(e.timing) > 0.3
            ? e.timing.renderTime > 0.2
              ? { kind: "js-explanation-base" }
              : { kind: "low-render-count-high-js", data: { renderCount: t } }
            : { kind: "js-explanation-base" };
    },
    Ro = ({ input: e }) => {
      switch (e.kind) {
        case "total-processing":
          return Xn("div", {
            className: Tn([
              "text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2",
            ]),
            children: [
              Xn("p", {
                children: [
                  "This is the time it took to draw the entire frame that was presented to the user. To be at 60FPS, this number needs to be ",
                  "<=16ms",
                ],
              }),
              Xn("p", {
                children:
                  'To debug the issue, check the "Ranked" tab to see if there are significant component renders',
              }),
              Xn("p", {
                children:
                  "On a production React build, React Scan can't access the time it took for component to render. To get that information, run React Scan on a development build",
              }),
              Xn("p", {
                children: [
                  "To understand precisely what caused the slowdown while in production, use the ",
                  Xn("strong", { children: "Chrome profiler" }),
                  " and analyze the function call times.",
                ],
              }),
              Xn("p", {}),
            ],
          });
        case "render":
          return Xn("div", {
            className: Tn([
              "text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2",
            ]),
            children: [
              Xn("p", {
                children:
                  "This is the time it took React to run components, and internal logic to handle the output of your component.",
              }),
              Xn("div", {
                className: Tn(["flex flex-col"]),
                children: [
                  Xn("p", {
                    children:
                      "The slowest components for this time period were:",
                  }),
                  e.data.topByTime.map((e) =>
                    Xn(
                      "div",
                      {
                        children: [
                          Xn("strong", { children: e.name }),
                          ":",
                          " ",
                          (100 * e.percentage).toFixed(0),
                          "% of total",
                        ],
                      },
                      e.name,
                    ),
                  ),
                ],
              }),
              Xn("p", {
                children:
                  'To view the render times of all your components, and what caused them to render, go to the "Ranked" tab',
              }),
              Xn("p", {
                children:
                  'The "Ranked" tab shows the render times of every component.',
              }),
              Xn("p", {
                children:
                  "The render times of the same components are grouped together into one bar.",
              }),
              Xn("p", {
                children:
                  "Clicking the component will show you what props, state, or context caused the component to re-render.",
              }),
            ],
          });
        case "js-explanation-base":
          return Xn("div", {
            className: Tn([
              "text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2",
            ]),
            children: [
              Xn("p", {
                children:
                  "This is the period when JavaScript hooks and other JavaScript outside of React Renders run.",
              }),
              Xn("p", {
                children: [
                  "The most common culprit for high JS time is expensive hooks, like expensive callbacks inside of ",
                  Xn("code", { children: "useEffect" }),
                  "'s or a large number of useEffect's called, but this can also be JavaScript event handlers (",
                  Xn("code", { children: "'onclick'" }),
                  ", ",
                  Xn("code", { children: "'onchange'" }),
                  ") that performed expensive computation.",
                ],
              }),
              Xn("p", {
                children:
                  "If you have lots of components rendering that call hooks, like useEffect, it can add significant overhead even if the callbacks are not expensive. If this is the case, you can try optimizing the renders of those components to avoid the hook from having to run.",
              }),
              Xn("p", {
                children: [
                  "You should profile your app using the",
                  " ",
                  Xn("strong", { children: "Chrome DevTools profiler" }),
                  " to learn exactly which functions took the longest to execute.",
                ],
              }),
            ],
          });
        case "high-render-count-high-js":
          return Xn("div", {
            className: Tn([
              "text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2",
            ]),
            children: [
              Xn("p", {
                children:
                  "This is the period when JavaScript hooks and other JavaScript outside of React Renders run.",
              }),
              0 === e.data.renderCount
                ? Xn(pe, {
                    children: [
                      Xn("p", {
                        children:
                          "There were no renders, which means nothing related to React caused this slowdown. The most likely cause of the slowdown is a slow JavaScript event handler, or code related to a Web API",
                      }),
                      Xn("p", {
                        children: [
                          "You should try to reproduce the slowdown while profiling your website with the",
                          Xn("strong", {
                            children: "Chrome DevTools profiler",
                          }),
                          " to see exactly what functions took the longest to execute.",
                        ],
                      }),
                    ],
                  })
                : Xn(pe, {
                    children: [
                      " ",
                      Xn("p", {
                        children: [
                          "There were ",
                          Xn("strong", { children: e.data.renderCount }),
                          " renders, which could have contributed to the high JavaScript/Hook time if they ran lots of hooks, like ",
                          Xn("code", { children: "useEffects" }),
                          ".",
                        ],
                      }),
                      Xn("div", {
                        className: Tn(["flex flex-col"]),
                        children: [
                          Xn("p", {
                            children:
                              "You should try optimizing the renders of:",
                          }),
                          e.data.topByCount.map((e) =>
                            Xn(
                              "div",
                              {
                                children: [
                                  "- ",
                                  Xn("strong", { children: e.name }),
                                  " (rendered ",
                                  e.count,
                                  "x)",
                                ],
                              },
                              e.name,
                            ),
                          ),
                        ],
                      }),
                      "and then checking if the problem still exists.",
                      Xn("p", {
                        children: [
                          "You can also try profiling your app using the",
                          " ",
                          Xn("strong", {
                            children: "Chrome DevTools profiler",
                          }),
                          " to see exactly what functions took the longest to execute.",
                        ],
                      }),
                    ],
                  }),
            ],
          });
        case "low-render-count-high-js":
          return Xn("div", {
            className: Tn([
              "text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2",
            ]),
            children: [
              Xn("p", {
                children:
                  "This is the period when JavaScript hooks and other JavaScript outside of React Renders run.",
              }),
              Xn("p", {
                children: [
                  "There were only ",
                  Xn("strong", { children: e.data.renderCount }),
                  " renders detected, which means either you had very expensive hooks like",
                  " ",
                  Xn("code", { children: "useEffect" }),
                  "/",
                  Xn("code", { children: "useLayoutEffect" }),
                  ", or there is other JavaScript running during this interaction that took up the majority of the time.",
                ],
              }),
              Xn("p", {
                children: [
                  "To understand precisely what caused the slowdown, use the",
                  " ",
                  Xn("strong", { children: "Chrome profiler" }),
                  " and analyze the function call times.",
                ],
              }),
            ],
          });
        case "high-render-count-update-dom-draw-frame":
          return Xn("div", {
            className: Tn([
              "text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2",
            ]),
            children: [
              Xn("p", {
                children:
                  "These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction.",
              }),
              Xn("p", {
                children:
                  "This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations.",
              }),
              Xn("p", {
                children: [
                  "During this interaction, there were",
                  " ",
                  Xn("strong", { children: e.data.count }),
                  " renders, which was",
                  " ",
                  Xn("strong", {
                    children: [e.data.percentageOfTotal.toFixed(0), "%"],
                  }),
                  " of the time spent processing",
                ],
              }),
              Xn("p", {
                children:
                  "The work performed as a result of the renders may have forced the browser to spend a lot of time to draw the next frame.",
              }),
              Xn("p", {
                children:
                  'You can try optimizing the renders to see if the performance problem still exists using the "Ranked" tab.',
              }),
              Xn("p", {
                children:
                  "If you use an AI-based code editor, you can export the performance data collected as a prompt.",
              }),
              Xn("p", { children: e.data.copyButton }),
              Xn("p", {
                children:
                  "Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem.",
              }),
              Xn("p", {
                children:
                  'For a larger selection of prompts, try the "Prompts" tab',
              }),
            ],
          });
        case "update-dom-draw-frame":
          return Xn("div", {
            className: Tn([
              "text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2",
            ]),
            children: [
              Xn("p", {
                children:
                  "These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction.",
              }),
              Xn("p", {
                children:
                  "This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations.",
              }),
              Xn("p", {
                children:
                  "If you use an AI-based code editor, you can export the performance data collected as a prompt.",
              }),
              Xn("p", { children: e.data.copyButton }),
              Xn("p", {
                children:
                  "Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem.",
              }),
              Xn("p", {
                children:
                  'For a larger selection of prompts, try the "Prompts" tab',
              }),
            ],
          });
        case "other":
          return Xn("div", {
            className: Tn([
              "text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2",
            ]),
            children: [
              Xn("p", {
                children: [
                  "This is the time it took to run everything other than React renders. This can be hooks like ",
                  Xn("code", { children: "useEffect" }),
                  ", other JavaScript not part of React, or work the browser has to do to update the DOM and draw the next frame.",
                ],
              }),
              Xn("p", {
                children: [
                  "To get a better picture of what happened, profile your app using the",
                  " ",
                  Xn("strong", { children: "Chrome profiler" }),
                  " when the performance problem arises.",
                ],
              }),
            ],
          });
      }
    },
    jo = null,
    Po = null,
    Do = pt({ kind: "idle", current: null }),
    Io = null,
    Oo = () => {
      Io && cancelAnimationFrame(Io),
        (Io = requestAnimationFrame(() => {
          if (!jo || !Po) return;
          Po.clearRect(0, 0, jo.width, jo.height);
          const e = "hsl(271, 76%, 53%)",
            t = Do.value,
            { alpha: n, current: r } = Rr(() => {
              switch (t.kind) {
                case "transition": {
                  const e =
                    t.current?.alpha && t.current.alpha > 0
                      ? t.current
                      : t.transitionTo;
                  return { alpha: e ? e.alpha : 0, current: e };
                }
                case "move-out":
                  return { alpha: t.current?.alpha ?? 0, current: t.current };
                case "idle":
                  return { alpha: 1, current: t.current };
              }
            });
          switch (
            (r?.rects.forEach((t) => {
              Po &&
                ((Po.shadowColor = e),
                (Po.shadowBlur = 6),
                (Po.strokeStyle = e),
                (Po.lineWidth = 2),
                (Po.globalAlpha = n),
                Po.beginPath(),
                Po.rect(t.left, t.top, t.width, t.height),
                Po.stroke(),
                (Po.shadowBlur = 0),
                Po.beginPath(),
                Po.rect(t.left, t.top, t.width, t.height),
                Po.stroke());
            }),
            t.kind)
          ) {
            case "move-out":
              return 0 === t.current.alpha
                ? void (Do.value = { kind: "idle", current: null })
                : (t.current.alpha <= 0.01 && (t.current.alpha = 0),
                  (t.current.alpha = Math.max(0, t.current.alpha - 0.03)),
                  void Oo());
            case "transition":
              if (t.current && t.current.alpha > 0)
                return (
                  (t.current.alpha = Math.max(0, t.current.alpha - 0.03)),
                  void Oo()
                );
              if (1 === t.transitionTo.alpha)
                return void (Do.value = {
                  kind: "idle",
                  current: t.transitionTo,
                });
              (t.transitionTo.alpha = Math.min(t.transitionTo.alpha + 0.03, 1)),
                Oo();
            case "idle":
              return;
          }
        }));
    },
    Lo = null,
    Uo = () => {
      const e = Do.value.current
        ? Do.value.current
        : "transition" === Do.value.kind
          ? Do.value.transitionTo
          : null;
      e &&
        ("transition" !== Do.value.kind
          ? (Do.value = { kind: "move-out", current: { alpha: 0, ...e } })
          : (Do.value = {
              kind: "move-out",
              current:
                0 === Do.value.current?.alpha
                  ? Do.value.transitionTo
                  : (Do.value.current ?? Do.value.transitionTo),
            }));
    },
    Ho = ({ selectedEvent: e }) => {
      const { setNotificationState: t, setRoute: n } = po(),
        r = co(e.timing),
        o = r - e.timing.renderTime,
        [i] = He(gl()),
        a = e.groupedFiberRenders.map((e) => ({
          event: e,
          kind: "render",
          totalTime: i ? e.count : e.totalTime,
        })),
        s = Rr(() => {
          switch (e.kind) {
            case "dropped-frames":
              return e.timing.renderTime / r < 0.1;
            case "interaction":
              return (e.timing.otherJSTime + e.timing.renderTime) / r < 0.2;
          }
        });
      "interaction" !== e.kind ||
        i ||
        a.push({ kind: "other-javascript", totalTime: e.timing.otherJSTime }),
        s &&
          !i &&
          ("interaction" === e.kind
            ? a.push({
                kind: "other-not-javascript",
                totalTime:
                  co(e.timing) - e.timing.renderTime - e.timing.otherJSTime,
              })
            : a.push({ kind: "other-frame-drop", totalTime: o }));
      const l = We({ lastCallAt: null, timer: null }),
        c = a.reduce((e, t) => e + t.totalTime, 0);
      return Xn("div", {
        onMouseLeave: () => {
          Uo();
        },
        className: Tn(["flex flex-col h-full w-full gap-y-1"]),
        children: [
          Rr(() =>
            i && 0 === a.length
              ? Xn("div", {
                  className:
                    "flex flex-col items-center justify-center h-full text-zinc-400",
                  children: [
                    Xn("p", {
                      className: "text-sm w-full text-left text-white mb-1.5",
                      children: "No data available",
                    }),
                    Xn("p", {
                      className: "text-x w-full text-lefts",
                      children: "No data was collected during this period",
                    }),
                  ],
                })
              : 0 === a.length
                ? Xn("div", {
                    className:
                      "flex flex-col items-center justify-center h-full text-zinc-400",
                    children: [
                      Xn("p", {
                        className: "text-sm w-full text-left text-white mb-1.5",
                        children: "No renders collected",
                      }),
                      Xn("p", {
                        className: "text-x w-full text-lefts",
                        children: "There were no renders during this period",
                      }),
                    ],
                  })
                : void 0,
          ),
          a
            .toSorted((e, t) => t.totalTime - e.totalTime)
            .map((e, r) => {
              return Xn(
                "button",
                {
                  onMouseLeave: () => {
                    l.current.timer && clearTimeout(l.current.timer);
                  },
                  onMouseEnter: async () => {
                    const t = async () => {
                      if (
                        ((l.current.lastCallAt = Date.now()),
                        "render" !== e.kind)
                      ) {
                        const e = Do.value.current
                          ? Do.value.current
                          : "transition" === Do.value.kind
                            ? Do.value.transitionTo
                            : null;
                        return e
                          ? void (Do.value = {
                              kind: "move-out",
                              current: { alpha: 0, ...e },
                            })
                          : void (Do.value = { kind: "idle", current: null });
                      }
                      const t = Do.value,
                        n = Rr(() => {
                          switch (t.kind) {
                            case "transition":
                              return t.transitionTo;
                            case "idle":
                            case "move-out":
                              return t.current;
                          }
                        }),
                        r = [];
                      if ("transition" === t.kind) {
                        const n = Vo(t);
                        Rr(() => {
                          switch (n) {
                            case "fading-in":
                              return void (Do.value = {
                                kind: "transition",
                                current: t.transitionTo,
                                transitionTo: {
                                  rects: r,
                                  alpha: 0,
                                  name: e.event.name,
                                },
                              });
                            case "fading-out":
                              return void (Do.value = {
                                kind: "transition",
                                current: Do.value.current
                                  ? { alpha: 0, ...Do.value.current }
                                  : null,
                                transitionTo: {
                                  rects: r,
                                  alpha: 0,
                                  name: e.event.name,
                                },
                              });
                          }
                        });
                      } else
                        Do.value = {
                          kind: "transition",
                          transitionTo: {
                            rects: r,
                            alpha: 0,
                            name: e.event.name,
                          },
                          current: n ? { alpha: 0, ...n } : null,
                        };
                      const o = e.event.elements.filter(
                        (e) => e instanceof Element,
                      );
                      for await (const e of Ys(o))
                        e.forEach(({ boundingClientRect: e }) => {
                          r.push(e);
                        }),
                          Oo();
                    };
                    if (
                      l.current.lastCallAt &&
                      Date.now() - l.current.lastCallAt < 200
                    )
                      return (
                        l.current.timer && clearTimeout(l.current.timer),
                        void (l.current.timer = setTimeout(() => {
                          t();
                        }, 200))
                      );
                    t();
                  },
                  onClick: () => {
                    "render" === e.kind
                      ? (t((t) => ({ ...t, selectedFiber: e.event })),
                        n({ route: "render-explanation", routeMessage: null }))
                      : n({
                          route: "other-visualization",
                          routeMessage: {
                            kind: "auto-open-overview-accordion",
                            name: e.kind,
                          },
                        });
                  },
                  className: Tn([
                    "w-full flex items-center group hover:bg-[#0f0f0f] rounded-md relative transition-colors text-xs",
                  ]),
                  children: [
                    Xn("div", {
                      className: Tn(["h-full w-[90%]"]),
                      children: Xn("div", {
                        style: {
                          minWidth: "fit-content",
                          width: (e.totalTime / c) * 100 + "%",
                        },
                        className: Tn([
                          "group-hover:bg-[#5b2d89]  flex items-center bg-[#412162] rounded-sm text-white text-xs relative h-[28px] transition-all",
                          "other-frame-drop" === e.kind &&
                            "bg-[#18181B] group-hover:bg-[#272727]",
                          "other-javascript" === e.kind &&
                            "bg-[#efd81a6b] group-hover:bg-[#efda1a2f]",
                          "other-not-javascript" === e.kind &&
                            "bg-[#214379d4] group-hover:bg-[#21437982]",
                        ]),
                        children: Xn("div", {
                          className: Tn([
                            "absolute left-2 top-1/2 -translate-y-1/2 flex gap-x-2",
                          ]),
                          children: [
                            Xn("span", {
                              className: Tn([
                                "flex items-center whitespace-nowrap",
                              ]),
                              children: Rr(() => {
                                switch (e.kind) {
                                  case "other-frame-drop":
                                    return "JavaScript, DOM updates, Draw Frame";
                                  case "other-javascript":
                                    return "JavaScript/React Hooks";
                                  case "other-not-javascript":
                                    return "Update DOM and Draw New Frame";
                                  case "render":
                                    return e.event.name;
                                }
                              }),
                            }),
                            "render" === e.kind &&
                              ((o = e.event),
                              0 === o.changes.context.length &&
                                0 === o.changes.props.length &&
                                0 === o.changes.state.length) &&
                              Xn("div", {
                                style: { lineHeight: "10px" },
                                className: Tn([
                                  "px-1 py-0.5 bg-[#6a369e] flex items-center  rounded-sm font-semibold text-[8px] w-fit",
                                ]),
                                children: "Memoizable",
                              }),
                          ],
                        }),
                      }),
                    }),
                    Xn("div", {
                      className: Tn([
                        "w-[5%] min-w-fit h-full flex items-center justify-end text-[10px] pr-1 gap-x-1",
                      ]),
                      children:
                        "render" === e.kind &&
                        Xn("span", {
                          className: Tn([""]),
                          children: ["x", e.event.count],
                        }),
                    }),
                    ("render" !== e.kind || !i) &&
                      Xn("div", {
                        className: Tn([
                          "w-[5%] min-w-fit text-[#7346a0] h-full flex items-center justify-end text-[10px] pr-1 gap-x-1",
                        ]),
                        children: Xn("span", {
                          children: [
                            e.totalTime < 1 ? "<1" : e.totalTime.toFixed(0),
                            "ms",
                          ],
                        }),
                      }),
                    Xn("div", {
                      className: Tn([
                        "absolute right-0 top-1/2 transition-none  -translate-y-1/2 bg-white text-black px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity mr-16",
                        "pointer-events-none",
                      ]),
                      children: "Click to learn more",
                    }),
                  ],
                },
                r,
              );
              var o;
            }),
        ],
      });
    },
    Vo = (e) => (e.current && e.current.alpha > 0 ? "fading-out" : "fading-in"),
    Bo = ({ selectedEvent: e, selectedFiber: t }) => {
      const { setRoute: n } = po(),
        [r, o] = He(!0),
        [i] = He(gl());
      Be(() => {
        const e = localStorage.getItem("react-scan-tip-shown"),
          t = "true" === e || ("false" !== e && null);
        if (null === t)
          return (
            o(!0), void localStorage.setItem("react-scan-tip-is-shown", "true")
          );
        t || o(!1);
      }, []);
      const a =
        0 === t.changes.context.length &&
        0 === t.changes.props.length &&
        0 === t.changes.state.length;
      return Xn("div", {
        className: Tn([
          "w-full min-h-fit h-full flex flex-col py-4 pt-0 rounded-sm",
        ]),
        children: [
          Xn("div", {
            className: Tn(["flex items-start gap-x-4 "]),
            children: [
              Xn("button", {
                onClick: () => {
                  n({ route: "render-visualization", routeMessage: null });
                },
                className: Tn([
                  "text-white hover:bg-[#34343b] flex gap-x-1 justify-center items-center mb-4 w-fit px-2.5 py-1.5 text-xs rounded-sm bg-[#18181B]",
                ]),
                children: [
                  Xn(bo, { size: 14 }),
                  " ",
                  Xn("span", { children: "Overview" }),
                ],
              }),
              Xn("div", {
                className: Tn(["flex flex-col gap-y-1"]),
                children: [
                  Xn("div", {
                    className: Tn([
                      "text-sm font-bold text-white overflow-x-hidden",
                    ]),
                    children: Xn("div", {
                      className: "flex items-center gap-x-2 truncate",
                      children: t.name,
                    }),
                  }),
                  Xn("div", {
                    className: Tn(["flex gap-x-2"]),
                    children: [
                      !i &&
                        Xn(pe, {
                          children: Xn("div", {
                            className: Tn(["text-xs text-gray-400"]),
                            children: [
                              "• Render time: ",
                              t.totalTime.toFixed(0),
                              "ms",
                            ],
                          }),
                        }),
                      Xn("div", {
                        className: Tn(["text-xs text-gray-400 mb-4"]),
                        children: ["• Renders: ", t.count, "x"],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          r &&
            !a &&
            Xn("div", {
              className: Tn([
                "w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex relative",
              ]),
              children: [
                Xn("button", {
                  onClick: () => {
                    o(!1),
                      localStorage.setItem("react-scan-tip-shown", "false");
                  },
                  className: Tn([
                    "absolute right-2 top-2 rounded-sm p-1 hover:bg-[#18181B]",
                  ]),
                  children: Xn(go, { size: 12 }),
                }),
                Xn("div", { className: Tn(["w-1 bg-[#d36cff]"]) }),
                Xn("div", {
                  className: Tn(["flex-1"]),
                  children: [
                    Xn("div", {
                      className: Tn([
                        "px-3 py-2 text-gray-100 text-xs font-semibold",
                      ]),
                      children: "How to stop renders",
                    }),
                    Xn("div", {
                      className: Tn(["px-3 pb-2 text-gray-400 text-[10px]"]),
                      children:
                        "Stop the following props, state and context from changing between renders, and wrap the component in React.memo if not already",
                    }),
                  ],
                }),
              ],
            }),
          a &&
            Xn("div", {
              className: Tn([
                "w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex",
              ]),
              children: [
                Xn("div", { className: Tn(["w-1 bg-[#d36cff]"]) }),
                Xn("div", {
                  className: Tn(["flex-1"]),
                  children: [
                    Xn("div", {
                      className: Tn([
                        "px-3 py-2 text-gray-100 text-sm font-semibold",
                      ]),
                      children: "No changes detected",
                    }),
                    Xn("div", {
                      className: Tn(["px-3 pb-2 text-gray-400 text-xs"]),
                      children:
                        "This component would not of rendered if it was memoized",
                    }),
                  ],
                }),
              ],
            }),
          Xn("div", {
            className: Tn(["flex w-full"]),
            children: [
              Xn("div", {
                className: Tn([
                  "flex flex-col border border-[#27272A] rounded-l-sm overflow-hidden w-1/3",
                ]),
                children: [
                  Xn("div", {
                    className: Tn([
                      "text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center",
                    ]),
                    children: "Changed Props",
                  }),
                  t.changes.props.length > 0
                    ? t.changes.props
                        .toSorted((e, t) => t.count - e.count)
                        .map((e) =>
                          Xn(
                            "div",
                            {
                              className: Tn([
                                "flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]",
                              ]),
                              children: [
                                Xn("span", {
                                  className: Tn(["text-white "]),
                                  children: e.name,
                                }),
                                Xn("div", {
                                  className: Tn([
                                    " text-[8px]  text-[#d36cff] pl-1 py-1 ",
                                  ]),
                                  children: [e.count, "/", t.count, "x"],
                                }),
                              ],
                            },
                            e.name,
                          ),
                        )
                    : Xn("div", {
                        className: Tn([
                          "flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]",
                        ]),
                        children: "No changes",
                      }),
                ],
              }),
              Xn("div", {
                className: Tn([
                  "flex flex-col border border-[#27272A] border-l-0 overflow-hidden w-1/3",
                ]),
                children: [
                  Xn("div", {
                    className: Tn([
                      " text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center",
                    ]),
                    children: "Changed State",
                  }),
                  t.changes.state.length > 0
                    ? t.changes.state
                        .toSorted((e, t) => t.count - e.count)
                        .map((e) =>
                          Xn(
                            "div",
                            {
                              className: Tn([
                                "flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]",
                              ]),
                              children: [
                                Xn("span", {
                                  className: Tn(["text-white "]),
                                  children: ["index ", e.index],
                                }),
                                Xn("div", {
                                  className: Tn([
                                    "rounded-full  text-[#d36cff] pl-1 py-1 text-[8px]",
                                  ]),
                                  children: [e.count, "/", t.count, "x"],
                                }),
                              ],
                            },
                            e.index,
                          ),
                        )
                    : Xn("div", {
                        className: Tn([
                          "flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]",
                        ]),
                        children: "No changes",
                      }),
                ],
              }),
              Xn("div", {
                className: Tn([
                  "flex flex-col border border-[#27272A] border-l-0 rounded-r-sm overflow-hidden w-1/3",
                ]),
                children: [
                  Xn("div", {
                    className: Tn([
                      " text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center",
                    ]),
                    children: "Changed Context",
                  }),
                  t.changes.context.length > 0
                    ? t.changes.context
                        .toSorted((e, t) => t.count - e.count)
                        .map((e) =>
                          Xn(
                            "div",
                            {
                              className: Tn([
                                "flex flex-col justify-between items-center border-t  border-[#27272A] px-1 py-1 bg-[#0A0A0A] text-[10px] overflow-x-auto",
                              ]),
                              children: [
                                Xn("span", {
                                  className: Tn(["text-white "]),
                                  children: e.name,
                                }),
                                Xn("div", {
                                  className: Tn([
                                    "rounded-full text-[#d36cff] pl-1 py-1 text-[8px] text-wrap",
                                  ]),
                                  children: [e.count, "/", t.count, "x"],
                                }),
                              ],
                            },
                            e.name,
                          ),
                        )
                    : Xn("div", {
                        className: Tn([
                          "flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A] py-2",
                        ]),
                        children: "No changes",
                      }),
                ],
              }),
            ],
          }),
        ],
      });
    },
    Wo = () => {
      const { notificationState: e, setNotificationState: t } = po(),
        [n, r] = He("..."),
        o = We(null);
      if (
        (Ve(() => {
          const e = setInterval(() => {
            r((e) => ("..." === e ? "" : e + "."));
          }, 500);
          return () => clearInterval(e);
        }, []),
        !e.selectedEvent)
      )
        return Xn("div", {
          ref: o,
          className: Tn([
            "h-full w-full flex flex-col items-center justify-center relative py-2 px-4",
          ]),
          children: [
            Xn("div", {
              className: Tn([
                "p-2 flex justify-center items-center border-[#27272A] absolute top-0 right-0",
              ]),
              children: Xn("button", {
                onClick: () => {
                  (qi.value = !1), (Yi.value = !1);
                },
                children: Xn(go, { size: 18, className: "text-[#6F6F78]" }),
              }),
            }),
            Xn("div", {
              className: Tn([
                "flex flex-col items-start pt-5 bg-[#0A0A0A] p-5 rounded-sm max-w-md",
                " shadow-lg",
              ]),
              children: Xn("div", {
                className: Tn(["flex flex-col items-start gap-y-4"]),
                children: [
                  Xn("div", {
                    className: Tn(["flex items-center"]),
                    children: Xn("span", {
                      className: Tn(["text-zinc-400 font-medium text-[17px]"]),
                      children: ["Scanning for slowdowns", n],
                    }),
                  }),
                  0 !== e.events.length &&
                    Xn("p", {
                      className: Tn(["text-xs"]),
                      children: [
                        "Click on an item in the",
                        " ",
                        Xn("span", {
                          className: Tn(["text-purple-400"]),
                          children: "History",
                        }),
                        " list to get started",
                      ],
                    }),
                  Xn("p", {
                    className: Tn(["text-zinc-600 text-xs"]),
                    children:
                      "You don't need to keep this panel open for React Scan to record slowdowns",
                  }),
                  Xn("p", {
                    className: Tn(["text-zinc-600 text-xs"]),
                    children:
                      "Enable audio alerts to hear a delightful ding every time a large slowdown is recorded",
                  }),
                  Xn("button", {
                    onClick: () => {
                      if (e.audioNotificationsOptions.enabled)
                        return void t(
                          (e) => (
                            "closed" !==
                              e.audioNotificationsOptions.audioContext?.state &&
                              e.audioNotificationsOptions.audioContext?.close(),
                            {
                              ...e,
                              audioNotificationsOptions: {
                                audioContext: null,
                                enabled: !1,
                              },
                            }
                          ),
                        );
                      localStorage.setItem(
                        "react-scan-notifications-audio",
                        "true",
                      );
                      const n = new AudioContext();
                      Mt(n),
                        t((e) => ({
                          ...e,
                          audioNotificationsOptions: {
                            enabled: !0,
                            audioContext: n,
                          },
                        }));
                    },
                    className: Tn([
                      "px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-sm w-full",
                      " text-sm flex items-center gap-x-2 justify-center",
                    ]),
                    children: e.audioNotificationsOptions.enabled
                      ? Xn(pe, {
                          children: Xn("span", {
                            className: "flex items-center gap-x-1",
                            children: "Disable audio alerts",
                          }),
                        })
                      : Xn(pe, {
                          children: Xn("span", {
                            className: "flex items-center gap-x-1",
                            children: "Enable audio alerts",
                          }),
                        }),
                  }),
                ],
              }),
            }),
          ],
        });
      switch (e.route) {
        case "render-visualization":
          return Xn(Yo, {
            children: Xn(Ho, { selectedEvent: e.selectedEvent }),
          });
        case "render-explanation":
          if (!e.selectedFiber)
            throw new Error(
              "Invariant: must have selected fiber when viewing render explanation",
            );
          return Xn(Yo, {
            children: Xn(Bo, {
              selectedFiber: e.selectedFiber,
              selectedEvent: e.selectedEvent,
            }),
          });
        case "other-visualization":
          return Xn(Yo, {
            children: Xn(zo, { selectedEvent: e.selectedEvent }),
          });
        case "optimize":
          return Xn(Yo, {
            children: Xn(To, { selectedEvent: e.selectedEvent }),
          });
      }
      e.route;
    },
    Yo = ({ children: e }) => {
      const { notificationState: t } = po();
      if (!t.selectedEvent)
        throw new Error(
          "Invariant: d must have selected event when viewing render explanation",
        );
      return Xn("div", {
        className: Tn(["w-full h-full flex flex-col gap-y-2"]),
        children: [
          Xn("div", {
            className: Tn(["h-[50px] w-full"]),
            children: Xn(No, { selectedEvent: t.selectedEvent }),
          }),
          Xn("div", {
            id: "overview-scroll-container",
            className: Tn([
              "h-calc(100%-50px) flex flex-col overflow-y-auto px-3",
            ]),
            children: e,
          }),
        ],
      });
    },
    Xo = ({ selectedEvent: e }) => {
      const t = uo(e);
      switch (e.kind) {
        case "interaction":
          return Xn("div", {
            className: Tn([
              "w-full flex border-b border-[#27272A] min-h-[48px]",
            ]),
            children: Xn("div", {
              className: Tn([
                "min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4",
              ]),
              children: [
                Xn("div", {
                  className: Tn(["flex items-center gap-x-2 "]),
                  children: [
                    Xn("span", {
                      className: Tn(["text-[#5a5a5a] mr-0.5"]),
                      children: "click" === e.type ? "Clicked " : "Typed in ",
                    }),
                    Xn("span", { children: lo(e.componentPath) }),
                    Xn("div", {
                      className: Tn([
                        "w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap",
                        "low" === t && "bg-green-500/50",
                        "needs-improvement" === t && "bg-[#b77116]",
                        "high" === t && "bg-[#b94040]",
                      ]),
                      children: [co(e.timing).toFixed(0), "ms processing time"],
                    }),
                  ],
                }),
                Xn("div", {
                  className: Tn([
                    "flex items-center gap-x-2  justify-end ml-auto",
                  ]),
                  children: Xn("div", {
                    className: Tn([
                      "p-2 flex justify-center items-center border-[#27272A]",
                    ]),
                    children: Xn("button", {
                      onClick: () => {
                        (qi.value = !1), (Yi.value = !1);
                      },
                      children: Xn(go, {
                        size: 18,
                        className: "text-[#6F6F78]",
                      }),
                    }),
                  }),
                }),
              ],
            }),
          });
        case "dropped-frames":
          return Xn("div", {
            className: Tn([
              "w-full flex border-b border-[#27272A] min-h-[48px]",
            ]),
            children: Xn("div", {
              className: Tn([
                "min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4",
              ]),
              children: [
                Xn("div", {
                  className: Tn(["flex items-center gap-x-2 "]),
                  children: [
                    "FPS Drop",
                    Xn("div", {
                      className: Tn([
                        "w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap",
                        "low" === t && "bg-green-500/50",
                        "needs-improvement" === t && "bg-[#b77116]",
                        "high" === t && "bg-[#b94040]",
                      ]),
                      children: ["dropped to ", e.fps, " FPS"],
                    }),
                  ],
                }),
                Xn("div", {
                  className: Tn([
                    "flex items-center gap-x-2 w-2/4 justify-end ml-auto",
                  ]),
                  children: Xn("div", {
                    className: Tn([
                      "p-2 flex justify-center items-center border-[#27272A]",
                    ]),
                    children: Xn("button", {
                      onClick: () => {
                        (qi.value = !1), (Yi.value = !1);
                      },
                      children: Xn(go, {
                        size: 18,
                        className: "text-[#6F6F78]",
                      }),
                    }),
                  }),
                }),
              ],
            }),
          });
      }
    },
    qo = ({ event: e, shouldFlash: t }) => {
      const { notificationState: n, setNotificationState: r } = po(),
        o = uo(e),
        i = (({ shouldFlash: e }) => {
          const [t, n] = He(e);
          return (
            Ve(() => {
              if (e) {
                n(!0);
                const e = setTimeout(() => {
                  n(!1);
                }, 1e3);
                return () => clearTimeout(e);
              }
            }, [e]),
            t
          );
        })({ shouldFlash: t });
      switch (e.kind) {
        case "interaction":
          return Xn("button", {
            onClick: () => {
              r((t) => ({
                ...t,
                selectedEvent: e,
                route:
                  "other-visualization" === t.route || "optimize" === t.route
                    ? "other-visualization"
                    : "render-visualization",
                selectedFiber: null,
              }));
            },
            className: Tn([
              "pl-2 py-1.5  text-sm flex w-full items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",
              e.id === n.selectedEvent?.id && "bg-[#18181B]",
              i &&
                "after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]",
            ]),
            children: [
              Xn("div", {
                className: Tn([
                  "w-4/5 flex items-center justify-start h-full gap-x-1.5",
                ]),
                children: [
                  Xn("span", {
                    className: Tn(["min-w-fit text-xs"]),
                    children: Rr(() => {
                      switch (e.type) {
                        case "click":
                          return Xn(xo, { size: 14 });
                        case "keyboard":
                          return Xn(yo, { size: 14 });
                      }
                    }),
                  }),
                  Xn("span", {
                    className: Tn(["text-xs pr-1 truncate"]),
                    children: lo(e.componentPath),
                  }),
                ],
              }),
              Xn("div", {
                className: Tn([
                  " min-w-fit flex justify-end items-center ml-auto",
                ]),
                children: Xn("div", {
                  style: { lineHeight: "10px" },
                  className: Tn([
                    "gap-x-0.5 w-fit flex items-end justify-center h-full text-white px-1 py-1 rounded-sm font-semibold text-[10px]",
                    "low" === o && "bg-green-500/50",
                    "needs-improvement" === o && "bg-[#b77116] text-[10px]",
                    "high" === o && "bg-[#b94040]",
                  ]),
                  children: Xn("div", {
                    style: { lineHeight: "10px" },
                    className: Tn(["text-[10px] text-white flex items-end"]),
                    children: [co(e.timing).toFixed(0), "ms"],
                  }),
                }),
              }),
            ],
          });
        case "dropped-frames":
          return Xn("button", {
            onClick: () => {
              r((t) => ({
                ...t,
                selectedEvent: e,
                route:
                  "other-visualization" === t.route || "optimize" === t.route
                    ? "other-visualization"
                    : "render-visualization",
                selectedFiber: null,
              }));
            },
            className: Tn([
              "pl-2 py-1.5  w-full text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",
              e.id === n.selectedEvent?.id && "bg-[#18181B]",
              i &&
                "after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]",
            ]),
            children: [
              Xn("div", {
                className: Tn([
                  "w-4/5 flex items-center justify-start h-full text-xs truncate",
                ]),
                children: [
                  Xn(_o, { size: 14, className: "mr-1.5" }),
                  " FPS Drop",
                ],
              }),
              Xn("div", {
                className: Tn([
                  " min-w-fit flex justify-end items-center ml-auto",
                ]),
                children: Xn("div", {
                  style: { lineHeight: "10px" },
                  className: Tn([
                    "w-fit flex items-center justify-center h-full text-white px-1 py-1 rounded-sm text-[10px] font-bold",
                    "low" === o && "bg-green-500/60",
                    "needs-improvement" === o && "bg-[#b77116] text-[10px]",
                    "high" === o && "bg-[#b94040]",
                  ]),
                  children: [e.fps, " FPS"],
                }),
              }),
            ],
          });
      }
    },
    Jo = (e = 150) => {
      const { notificationState: t } = po(),
        [n, r] = He(t.events);
      return (
        Ve(() => {
          setTimeout(() => {
            r(t.events);
          }, e);
        }, [t.events]),
        [n, r]
      );
    },
    Go = () => {
      const { notificationState: e, setNotificationState: t } = po(),
        n = ((e) => {
          const t = We([]),
            [n, r] = He(new Set()),
            o = We(!0);
          return (
            Ve(() => {
              if (o.current) return (o.current = !1), void (t.current = e);
              const n = new Set(e.map((e) => e.id)),
                i = new Set(t.current.map((e) => e.id)),
                a = new Set();
              n.forEach((e) => {
                i.has(e) || a.add(e);
              }),
                a.size > 0 &&
                  (r(a),
                  setTimeout(() => {
                    r(new Set());
                  }, 2e3)),
                (t.current = e);
            }, [e]),
            (e) => n.has(e)
          );
        })(e.events),
        [r, o] = Jo(),
        i = ((a = r),
        a.reduce((e, t) => {
          const n = e.at(-1);
          if (!n) return [{ kind: "single", event: t, timestamp: t.timestamp }];
          switch (n.kind) {
            case "collapsed-keyboard":
              return "interaction" === t.kind &&
                "keyboard" === t.type &&
                t.componentPath.join("-") ===
                  n.events[0].componentPath.join("-")
                ? [
                    ...e.filter((e) => e !== n),
                    {
                      kind: "collapsed-keyboard",
                      events: [...n.events, t],
                      timestamp: Math.max(
                        ...[...n.events, t].map((e) => e.timestamp),
                      ),
                    },
                  ]
                : [...e, { kind: "single", event: t, timestamp: t.timestamp }];
            case "single":
              return "interaction" === n.event.kind &&
                "keyboard" === n.event.type &&
                "interaction" === t.kind &&
                "keyboard" === t.type &&
                n.event.componentPath.join("-") === t.componentPath.join("-")
                ? [
                    ...e.filter((e) => e !== n),
                    {
                      kind: "collapsed-keyboard",
                      events: [n.event, t],
                      timestamp: Math.max(n.event.timestamp, t.timestamp),
                    },
                  ]
                : "dropped-frames" === n.event.kind &&
                    "dropped-frames" === t.kind
                  ? [
                      ...e.filter((e) => e !== n),
                      {
                        kind: "multiple",
                        events: [n.event, t],
                        timestamp: Math.max(n.event.timestamp, t.timestamp),
                      },
                    ]
                  : [
                      ...e,
                      { kind: "single", event: t, timestamp: t.timestamp },
                    ];
            case "multiple":
              return "dropped-frames" === t.kind
                ? [
                    ...e.filter((e) => e !== n),
                    {
                      kind: "multiple",
                      events: [...n.events, t],
                      timestamp: Math.max(
                        ...[...n.events, t].map((e) => e.timestamp),
                      ),
                    },
                  ]
                : [...e, { kind: "single", event: t, timestamp: t.timestamp }];
          }
        }, [])).toSorted((e, t) => t.timestamp - e.timestamp);
      var a;
      return Xn("div", {
        className: Tn([
          "w-full h-full gap-y-2 flex flex-col border-r border-[#27272A] pt-2 overflow-y-auto",
        ]),
        children: [
          Xn("div", {
            className: Tn([
              "text-sm text-[#65656D] pl-3 pr-1 w-full flex items-center justify-between",
            ]),
            children: [
              Xn("span", { children: "History" }),
              Xn(So, {
                wrapperProps: {
                  className: "h-full flex items-center justify-center ml-auto",
                },
                triggerContent: Xn("button", {
                  className: Tn(["hover:bg-[#18181B] rounded-full p-2"]),
                  onClick: () => {
                    ro.getState().actions.clear(),
                      t((e) => ({
                        ...e,
                        selectedEvent: null,
                        selectedFiber: null,
                        route:
                          "other-visualization" === e.route
                            ? "other-visualization"
                            : "render-visualization",
                      })),
                      o([]);
                  },
                  children: Xn(ko, { className: Tn([""]), size: 16 }),
                }),
                children: Xn("div", {
                  className: Tn(["w-full flex justify-center"]),
                  children: "Clear all events",
                }),
              }),
            ],
          }),
          Xn("div", {
            className: Tn(["flex flex-col px-1 gap-y-1"]),
            children: [
              0 === i.length &&
                Xn("div", {
                  className: Tn([
                    "flex items-center justify-center text-zinc-500 text-sm py-4",
                  ]),
                  children: "No Events",
                }),
              i.map((e) =>
                Rr(() => {
                  switch (e.kind) {
                    case "collapsed-keyboard":
                      return Xn(Zo, {
                        shouldFlash: n,
                        collapsedKeyboardInput: e,
                      });
                    case "single":
                      return Xn(
                        qo,
                        { event: e.event, shouldFlash: n(e.event.id) },
                        e.event.id,
                      );
                    case "multiple":
                      return Xn(ei, { shouldFlash: n, historyItem: e });
                  }
                }),
              ),
            ],
          }),
        ],
      });
    },
    Ko = ({ children: e }) =>
      Xn("div", {
        className: "relative pl-6 flex flex-col gap-y-1",
        children: [
          Xn("div", {
            className: "absolute left-3 top-0 bottom-0 w-px bg-[#27272A]",
          }),
          e,
        ],
      }),
    Zo = ({ collapsedKeyboardInput: e, shouldFlash: t }) => {
      const [n, r] = He(!1),
        o = e.events.map(uo).reduce((e, t) => {
          switch (t) {
            case "high":
              return "high";
            case "needs-improvement":
              return "high" === e ? "high" : "needs-improvement";
            case "low":
              return e;
          }
        }, "low"),
        i = e.events.reduce((e, n) => (t(n.id) ? e + 1 : e), 0),
        a = Qo({ flashingItemsCount: i, totalEvents: e.events.length });
      return n
        ? Xn("div", {
            className: Tn(["flex flex-col gap-y-1 object-contain"]),
            children: [
              Xn("button", {
                onClick: () => r(!1),
                className: Tn([
                  "pl-1.5 py-1.5 text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",
                ]),
                children: [
                  Xn("div", {
                    className: Tn([
                      "w-4/5 flex items-center justify-start h-full text-xs truncate gap-x-1.5 min-w-fit",
                    ]),
                    children: [
                      Xn(
                        fo,
                        {
                          className:
                            "rotate-90 text-[#A1A1AA] transition-transform",
                          size: 10,
                        },
                        `chevron-${e.timestamp}`,
                      ),
                      Xn("span", {
                        className: Tn(["text-xs"]),
                        children: lo(e.events[0].componentPath),
                      }),
                    ],
                  }),
                  Xn("div", {
                    className: Tn([
                      " min-w-fit flex justify-end items-center ml-auto",
                    ]),
                    children: Xn("div", {
                      style: { lineHeight: "10px" },
                      className: Tn([
                        "w-fit flex text-[10px] items-center justify-center h-full text-white px-1 py-1 rounded-sm font-semibold",
                        "low" === o && "bg-green-500/50",
                        "needs-improvement" === o && "bg-[#b77116] text-[10px]",
                        "high" === o && "bg-[#b94040]",
                      ]),
                      children: ["x", e.events.length],
                    }),
                  }),
                ],
              }),
              Xn(Ko, {
                children: e.events
                  .toSorted((e, t) => t.timestamp - e.timestamp)
                  .map((e) => Xn(qo, { event: e, shouldFlash: !1 }, e.id)),
              }),
            ],
          })
        : Xn("button", {
            onClick: () => r(!0),
            className: Tn([
              "pl-1.5 py-1.5 text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",
              a &&
                "after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]",
            ]),
            children: [
              Xn("div", {
                className: Tn([
                  "w-4/5 flex items-center justify-start h-full text-xs truncate gap-x-1.5",
                ]),
                children: [
                  Xn(fo, {
                    className: "text-[#A1A1AA] transition-transform min-w-fit",
                    size: 10,
                  }),
                  Xn("span", {
                    className: Tn(["text-xs"]),
                    children: lo(e.events[0].componentPath),
                  }),
                ],
              }),
              Xn("div", {
                className: Tn([
                  "min-w-fit flex justify-end items-center ml-auto",
                ]),
                children: Xn("div", {
                  style: { lineHeight: "10px" },
                  className: Tn([
                    "w-fit flex text-[10px] items-center justify-center h-full text-white px-1 py-1 rounded-sm font-semibold",
                    "low" === o && "bg-green-500/50",
                    "needs-improvement" === o && "bg-[#b77116] text-[10px]",
                    "high" === o && "bg-[#b94040]",
                  ]),
                  children: ["x", e.events.length],
                }),
              }),
            ],
          });
    },
    Qo = ({ flashingItemsCount: e, totalEvents: t }) => {
      const [n, r] = He(!1),
        o = We(0),
        i = We(0);
      return (
        Ve(() => {
          if (o.current >= t) return;
          const e = Date.now() - i.current;
          if (e >= 250) {
            r(!1);
            const e = setTimeout(() => {
              (o.current = t),
                (i.current = Date.now()),
                r(!0),
                setTimeout(() => {
                  r(!1);
                }, 2e3);
            }, 50);
            return () => clearTimeout(e);
          }
          {
            const n = setTimeout(() => {
              r(!1),
                setTimeout(() => {
                  (o.current = t),
                    (i.current = Date.now()),
                    r(!0),
                    setTimeout(() => {
                      r(!1);
                    }, 2e3);
                }, 50);
            }, 250 - e);
            return () => clearTimeout(n);
          }
        }, [e]),
        n
      );
    },
    ei = ({ historyItem: e, shouldFlash: t }) => {
      po();
      const [n, r] = He(!1),
        o = e.events.map(uo).reduce((e, t) => {
          switch (t) {
            case "high":
              return "high";
            case "needs-improvement":
              return "high" === e ? "high" : "needs-improvement";
            case "low":
              return e;
          }
        }, "low"),
        i = e.events.reduce((e, n) => (t(n.id) ? e + 1 : e), 0),
        a = Qo({ flashingItemsCount: i, totalEvents: e.events.length });
      return n
        ? Xn("div", {
            className: Tn(["flex flex-col gap-y-0.5"]),
            children: [
              Xn("button", {
                onClick: () => r(!1),
                className: Tn([
                  "pl-2 py-1.5  text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",
                ]),
                children: [
                  Xn("div", {
                    className: Tn([
                      "w-4/5 flex items-center justify-start h-full text-xs truncate gap-x-1.5",
                    ]),
                    children: [
                      Xn("span", {
                        className: Tn(["min-w-fit"]),
                        children: Xn(
                          fo,
                          {
                            className:
                              "rotate-90 text-[#A1A1AA] transition-transform",
                            size: 14,
                          },
                          `chevron-${e.timestamp}`,
                        ),
                      }),
                      Xn("span", {
                        className: Tn(["text-xs"]),
                        children: "FPS Drops",
                      }),
                    ],
                  }),
                  Xn("div", {
                    className: Tn([
                      "ml-auto min-w-fit flex justify-end items-center",
                    ]),
                    children: Xn("div", {
                      style: { lineHeight: "10px" },
                      className: Tn([
                        "w-fit flex items-center text-[10px] justify-center h-full text-white px-1 py-1 rounded-sm font-semibold",
                        "low" === o && "bg-green-500/60",
                        "needs-improvement" === o && "bg-[#b77116] text-[10px]",
                        "high" === o && "bg-[#b94040]",
                      ]),
                      children: ["x", e.events.length],
                    }),
                  }),
                ],
              }),
              Xn(Ko, {
                children: e.events
                  .toSorted((e, t) => t.timestamp - e.timestamp)
                  .map((e) => Xn(qo, { event: e, shouldFlash: t(e.id) })),
              }),
            ],
          })
        : Xn("button", {
            onClick: () => r(!0),
            className: Tn([
              "pl-2  py-1.5 text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",
              "group",
              a &&
                "after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]",
            ]),
            children: [
              Xn("div", {
                className: Tn([
                  "w-4/5 flex items-center justify-start h-full text-xs truncate gap-x-1.5",
                ]),
                children: [
                  " ",
                  Xn(
                    fo,
                    {
                      className: "text-[#A1A1AA] transition-transform",
                      size: 14,
                    },
                    `chevron-${e.timestamp}`,
                  ),
                  Xn("span", {
                    className: Tn(["text-xs"]),
                    children: "FPS Drops",
                  }),
                ],
              }),
              Xn("div", {
                className: Tn([
                  "ml-auto min-w-fit flex justify-end items-center",
                ]),
                children: Xn("div", {
                  style: { lineHeight: "10px" },
                  className: Tn([
                    "w-fit flex items-center text-[10px] justify-center h-full text-white px-1 py-1 rounded-sm font-semibold",
                    "low" === o && "bg-green-500/60",
                    "needs-improvement" === o && "bg-[#b77116] text-[10px]",
                    "high" === o && "bg-[#b94040]",
                  ]),
                  children: ["x", e.events.length],
                }),
              }),
            ],
          });
    },
    ti = () => {
      const e = oo(),
        t = [];
      return (
        ((e) => {
          Ve(() => {
            const t = setInterval(() => {
              e.forEach((e) => {
                e.groupedFiberRenders &&
                  e.groupedFiberRenders.forEach((e) => {
                    if (e.deletedAll) return;
                    if (!e.elements || 0 === e.elements.length)
                      return void (e.deletedAll = !0);
                    const t = e.elements.length;
                    (e.elements = e.elements.filter((e) => e && e.isConnected)),
                      0 === e.elements.length && t > 0 && (e.deletedAll = !0);
                  });
              });
            }, 5e3);
            return () => {
              clearInterval(t);
            };
          }, [e]);
        })(t),
        e.state.events.forEach((e) => {
          const n = ((e) =>
              Object.values(e).map((e) => ({
                id: $r(),
                totalTime: e.nodeInfo.reduce((e, t) => e + t.selfTime, 0),
                count: e.nodeInfo.length,
                name: e.nodeInfo[0].name,
                deletedAll: !1,
                elements: e.nodeInfo.map((e) => e.element),
                changes: {
                  context: e.changes.fiberContext.current
                    .filter((t) =>
                      e.changes.fiberContext.changesCounts.get(t.name),
                    )
                    .map((t) => ({
                      name: String(t.name),
                      count:
                        e.changes.fiberContext.changesCounts.get(t.name) ?? 0,
                    })),
                  props: e.changes.fiberProps.current
                    .filter((t) =>
                      e.changes.fiberProps.changesCounts.get(t.name),
                    )
                    .map((t) => ({
                      name: String(t.name),
                      count:
                        e.changes.fiberProps.changesCounts.get(t.name) ?? 0,
                    })),
                  state: e.changes.fiberState.current
                    .filter((t) =>
                      e.changes.fiberState.changesCounts.get(Number(t.name)),
                    )
                    .map((t) => ({
                      index: t.name,
                      count:
                        e.changes.fiberState.changesCounts.get(
                          Number(t.name),
                        ) ?? 0,
                    })),
                },
              })))(
              "interaction" === e.kind
                ? e.data.meta.detailedTiming.fiberRenders
                : e.data.meta.fiberRenders,
            ),
            r = n.reduce((e, t) => e + t.totalTime, 0);
          switch (e.kind) {
            case "interaction": {
              const {
                  commitEnd: o,
                  jsEndDetail: i,
                  interactionStartDetail: a,
                  rafStart: s,
                } = e.data.meta.detailedTiming,
                l = Math.max(0, i - a - r),
                c = Math.max(e.data.meta.latency - (o - a), 0);
              return void t.push({
                componentPath: e.data.meta.detailedTiming.componentPath,
                groupedFiberRenders: n,
                id: e.id,
                kind: "interaction",
                memory: null,
                timestamp: e.data.startAt,
                type:
                  "keyboard" === e.data.meta.detailedTiming.interactionType
                    ? "keyboard"
                    : "click",
                timing: {
                  renderTime: r,
                  kind: "interaction",
                  otherJSTime: l,
                  framePreparation: s - i,
                  frameConstruction: o - s,
                  frameDraw: c,
                },
              });
            }
            case "long-render":
              return void t.push({
                kind: "dropped-frames",
                id: e.id,
                memory: null,
                timing: {
                  kind: "dropped-frames",
                  renderTime: r,
                  otherTime: e.data.meta.latency,
                },
                groupedFiberRenders: n,
                timestamp: e.data.startAt,
                fps: e.data.meta.fps,
              });
          }
        }),
        t
      );
    },
    ni = () => {
      const { notificationState: e, setNotificationState: t } = po(),
        n = We(null),
        r = We(null),
        o = We(0),
        [i] = Jo(),
        a = i.filter((e) => "high" === uo(e)).length;
      return (
        Ve(() => {
          const e = localStorage.getItem("react-scan-notifications-audio");
          if ("false" !== e && "true" !== e)
            return void localStorage.setItem(
              "react-scan-notifications-audio",
              "false",
            );
          "false" !== e &&
            t((e) =>
              e.audioNotificationsOptions.enabled
                ? e
                : {
                    ...e,
                    audioNotificationsOptions: {
                      enabled: !0,
                      audioContext: new AudioContext(),
                    },
                  },
            );
        }, []),
        Ve(() => {
          const { audioNotificationsOptions: t } = e;
          if (!t.enabled) return;
          if (0 === a) return;
          if (n.current && n.current >= a) return;
          r.current && clearTimeout(r.current);
          const i = Date.now() - o.current,
            s = Math.max(0, 1e3 - i);
          r.current = setTimeout(() => {
            Mt(t.audioContext),
              (n.current = a),
              (o.current = Date.now()),
              (r.current = null);
          }, s);
        }, [a]),
        Ve(() => {
          0 === a && (n.current = null);
        }, [a]),
        Ve(
          () => () => {
            r.current && clearTimeout(r.current);
          },
          [],
        ),
        null
      );
    },
    ri = rr((e, t) => {
      const n = ti(),
        [r, o] = He({
          detailsExpanded: !1,
          events: n,
          filterBy: "latest",
          moreInfoExpanded: !1,
          route: "render-visualization",
          selectedEvent:
            n.toSorted((e, t) => e.timestamp - t.timestamp).at(-1) ?? null,
          selectedFiber: null,
          routeMessage: null,
          audioNotificationsOptions: { enabled: !1, audioContext: null },
        });
      return (
        (r.events = n),
        Xn(ho.Provider, {
          value: {
            notificationState: r,
            setNotificationState: o,
            setRoute: ({ route: e, routeMessage: t }) => {
              o((n) => {
                const r = { ...n, route: e, routeMessage: t };
                switch (e) {
                  case "render-visualization":
                  case "optimize":
                  case "other-visualization":
                    return Uo(), { ...r, selectedFiber: null };
                  case "render-explanation":
                    return Uo(), r;
                }
              });
            },
          },
          children: [
            Xn(ni, {}),
            Yi.value &&
              "inspect-off" === ll.inspectState.value.kind &&
              Xn(oi, { ref: t }),
          ],
        })
      );
    }),
    oi = rr((e, t) => {
      const { notificationState: n } = po();
      return Xn("div", {
        ref: t,
        className: Tn(["h-full w-full flex flex-col"]),
        children: [
          n.selectedEvent &&
            Xn("div", {
              className: Tn([
                "w-full h-[48px] flex flex-col",
                n.moreInfoExpanded && "h-[235px]",
                n.moreInfoExpanded &&
                  "dropped-frames" === n.selectedEvent.kind &&
                  "h-[150px]",
              ]),
              children: [
                Xn(Xo, { selectedEvent: n.selectedEvent }),
                n.moreInfoExpanded && Xn(ii, {}),
              ],
            }),
          Xn("div", {
            className: Tn([
              "flex ",
              n.selectedEvent ? "h-[calc(100%-48px)]" : "h-full",
              n.moreInfoExpanded && "h-[calc(100%-200px)]",
              n.moreInfoExpanded &&
                "dropped-frames" === n.selectedEvent?.kind &&
                "h-[calc(100%-150px)]",
            ]),
            children: [
              Xn("div", {
                className: Tn(["h-full min-w-[200px]"]),
                children: Xn(Go, {}),
              }),
              Xn("div", {
                className: Tn(["w-[calc(100%-200px)] h-full overflow-y-auto"]),
                children: Xn(Wo, {}),
              }),
            ],
          }),
        ],
      });
    }),
    ii = () => {
      const { notificationState: e } = po();
      if (!e.selectedEvent)
        throw new Error("Invariant must have selected event for more info");
      const t = e.selectedEvent;
      return (
        new Date(t.timestamp),
        Xn("div", {
          className: Tn([
            "px-4 py-2 border-b border-[#27272A] bg-[#18181B]/50 h-[calc(100%-40px)]",
            "dropped-frames" === t.kind && "h-[calc(100%-25px)]",
          ]),
          children: Xn("div", {
            className: Tn(["flex flex-col gap-y-4 h-full"]),
            children: Rr(() => {
              switch (t.kind) {
                case "interaction":
                  return Xn(pe, {
                    children: [
                      Xn("div", {
                        className: Tn(["flex items-center gap-x-3"]),
                        children: [
                          Xn("span", {
                            className: "text-[#6F6F78] text-xs font-medium",
                            children:
                              "click" === t.type
                                ? "Clicked component location"
                                : "Typed in component location",
                          }),
                          Xn("div", {
                            className:
                              "font-mono text-[#E4E4E7] flex items-center bg-[#27272A] pl-2 py-1 rounded-sm overflow-x-auto",
                            children: t.componentPath
                              .toReversed()
                              .map((e, n) =>
                                Xn(pe, {
                                  children: [
                                    Xn(
                                      "span",
                                      {
                                        style: { lineHeight: "14px" },
                                        className:
                                          "text-[10px] whitespace-nowrap",
                                        children: e,
                                      },
                                      e,
                                    ),
                                    n < t.componentPath.length - 1 &&
                                      Xn("span", {
                                        className: "text-[#6F6F78] mx-0.5",
                                        children: "‹",
                                      }),
                                  ],
                                }),
                              ),
                          }),
                        ],
                      }),
                      Xn("div", {
                        className: Tn(["flex items-center gap-x-3"]),
                        children: [
                          Xn("span", {
                            className: "text-[#6F6F78] text-xs font-medium",
                            children: "Total Time",
                          }),
                          Xn("span", {
                            className:
                              "text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",
                            children: [co(t.timing).toFixed(0), "ms"],
                          }),
                        ],
                      }),
                      Xn("div", {
                        className: Tn(["flex items-center gap-x-3"]),
                        children: [
                          Xn("span", {
                            className: "text-[#6F6F78] text-xs font-medium",
                            children: "Occurred",
                          }),
                          Xn("span", {
                            className:
                              "text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",
                            children: `${((Date.now() - t.timestamp) / 1e3).toFixed(0)}s ago`,
                          }),
                        ],
                      }),
                    ],
                  });
                case "dropped-frames":
                  return Xn(pe, {
                    children: [
                      Xn("div", {
                        className: Tn(["flex items-center gap-x-3"]),
                        children: [
                          Xn("span", {
                            className: "text-[#6F6F78] text-xs font-medium",
                            children: "Total Time",
                          }),
                          Xn("span", {
                            className:
                              "text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",
                            children: [co(t.timing).toFixed(0), "ms"],
                          }),
                        ],
                      }),
                      Xn("div", {
                        className: Tn(["flex items-center gap-x-3"]),
                        children: [
                          Xn("span", {
                            className: "text-[#6F6F78] text-xs font-medium",
                            children: "Occurred",
                          }),
                          Xn("span", {
                            className:
                              "text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",
                            children: `${((Date.now() - t.timestamp) / 1e3).toFixed(0)}s ago`,
                          }),
                        ],
                      }),
                    ],
                  });
              }
            }),
          }),
        })
      );
    };
  $n("react-scann-pinned");
  var ai,
    si = rr(
      (
        {
          size: e = 15,
          name: t,
          fill: n = "currentColor",
          stroke: r = "currentColor",
          className: o,
          externalURL: i = "",
          style: a,
        },
        s,
      ) => {
        const l = Array.isArray(e) ? e[0] : e,
          c = Array.isArray(e) ? e[1] || e[0] : e,
          d = `${i}#${t}`;
        return Xn("svg", {
          ref: s,
          width: `${l}px`,
          height: `${c}px`,
          fill: n,
          stroke: r,
          className: o,
          style: {
            ...a,
            minWidth: `${l}px`,
            maxWidth: `${l}px`,
            minHeight: `${c}px`,
            maxHeight: `${c}px`,
          },
          children: [Xn("title", { children: t }), Xn("use", { href: d })],
        });
      },
    ),
    li = new WeakMap(),
    ci = {
      activeFlashes: new Map(),
      create(e) {
        const t = e.querySelector(".react-scan-flash-overlay"),
          n =
            t instanceof HTMLElement
              ? t
              : (() => {
                  const t = document.createElement("div");
                  (t.className = "react-scan-flash-overlay"), e.appendChild(t);
                  const n = ((e, t) => {
                    const n = t.bind(null, e);
                    return (
                      document.addEventListener("scroll", n, {
                        passive: !0,
                        capture: !0,
                      }),
                      () => {
                        document.removeEventListener("scroll", n, {
                          capture: !0,
                        });
                      }
                    );
                  })(e, () => {
                    e.querySelector(".react-scan-flash-overlay") &&
                      this.create(e);
                  });
                  return (
                    this.activeFlashes.set(e, {
                      element: e,
                      overlay: t,
                      scrollCleanup: n,
                    }),
                    t
                  );
                })(),
          r = li.get(n);
        r && (clearTimeout(r), li.delete(n)),
          requestAnimationFrame(() => {
            (n.style.transition = "none"), (n.style.opacity = "0.9");
            const t = setTimeout(() => {
              (n.style.transition = "opacity 150ms ease-out"),
                (n.style.opacity = "0");
              const t = setTimeout(() => {
                n.parentNode && n.parentNode.removeChild(n);
                const t = this.activeFlashes.get(e);
                t?.scrollCleanup && t.scrollCleanup(),
                  this.activeFlashes.delete(e),
                  li.delete(n);
              }, 150);
              li.set(n, t);
            }, 300);
            li.set(n, t);
          });
      },
      cleanup(e) {
        const t = this.activeFlashes.get(e);
        if (t) {
          const n = li.get(t.overlay);
          n && (clearTimeout(n), li.delete(t.overlay)),
            t.overlay.parentNode && t.overlay.parentNode.removeChild(t.overlay),
            t.scrollCleanup && t.scrollCleanup(),
            this.activeFlashes.delete(e);
        }
      },
      cleanupAll() {
        for (const [, e] of this.activeFlashes) this.cleanup(e.element);
      },
    },
    di = 1e3,
    ui = {
      updates: [],
      currentFiber: null,
      totalUpdates: 0,
      windowOffset: 0,
      currentIndex: 0,
      isViewingHistory: !1,
      latestFiber: null,
      isVisible: !1,
      playbackSpeed: 1,
    },
    pi = pt(ui),
    hi = pt(0),
    fi = [],
    mi = null,
    gi = () => {
      pi.value = { ...pi.value, isVisible: !0 };
    },
    wi = () => {
      pi.value = {
        ...pi.value,
        isVisible: !1,
        currentIndex: pi.value.updates.length - 1,
      };
    },
    vi = (e, t) => {
      pi.value = { ...pi.value, currentIndex: e, isViewingHistory: t };
    },
    bi = (e, t) => {
      if ((fi.push({ update: e, fiber: t }), !mi)) {
        const e = () => {
          (() => {
            if (0 === fi.length) return;
            const e = [...fi],
              {
                updates: t,
                totalUpdates: n,
                currentIndex: r,
                isViewingHistory: o,
              } = pi.value,
              i = [...t];
            let a = n;
            for (const { update: t } of e)
              i.length >= di && i.shift(), i.push(t), a++;
            const s = Math.max(0, a - di);
            let l;
            l = o
              ? r === n - 1
                ? i.length - 1
                : 0 === r
                  ? 0
                  : 0 === s
                    ? r
                    : r - 1
              : i.length - 1;
            const c = e[e.length - 1];
            (pi.value = {
              ...pi.value,
              latestFiber: c.fiber,
              updates: i,
              totalUpdates: a,
              windowOffset: s,
              currentIndex: l,
              isViewingHistory: o,
            }),
              (fi = fi.slice(e.length));
          })(),
            (mi = null),
            fi.length > 0 && (mi = setTimeout(e, 96));
        };
        mi = setTimeout(e, 96);
      }
    },
    xi = () => {
      mi && (clearTimeout(mi), (mi = null)), (fi = []), (pi.value = ui);
    },
    yi = pt({ query: "", matches: [], currentMatchIndex: -1 }),
    ki = pt(!1),
    _i = ({ selectedElement: e }) => {
      const t = We(null),
        n = We(null),
        [r, o] = He([]),
        [i, a] = He(!0);
      Ve(() => {
        if (!e) return;
        const t = ja(e);
        o(t);
      }, [e]),
        Ve(() => {
          let e;
          const r = () => {
              clearTimeout(e),
                (e = setTimeout(() => {
                  if (t.current && n.current) {
                    const e = t.current.offsetHeight >= n.current.offsetHeight;
                    a(e);
                  }
                }, 16));
            },
            o = new ResizeObserver(r);
          return (
            t.current && n.current && (o.observe(n.current), r()),
            () => o.disconnect()
          );
        }, []);
      const s = (e) => {
          const { parentCompositeFiber: t } = Ta(e);
          t &&
            ((ki.value = !1),
            (ll.inspectState.value = {
              kind: "focused",
              focusedDomElement: e,
              fiber: t,
            }));
        },
        l = r[0],
        c = r.slice(1).reverse();
      return Xn("div", {
        ref: t,
        className: Tn(
          "flex items-center gap-x-1",
          "px-2",
          "text-xs text-neutral-400",
          "border-b border-white/10",
          "overflow-hidden whitespace-nowrap",
        ),
        children: [
          Xn("button", {
            type: "button",
            className: "hover:text-neutral-300 transition-colors",
            onClick: () => {
              s(l.element);
            },
            children: l?.name,
          }),
          !i && c.length > 1
            ? Xn("span", {
                className:
                  "text-sm w-2.5 h-2.5 flex items-center justify-center",
                children: "…",
              })
            : c.length > 0 &&
              Xn("span", {
                className:
                  "w-2.5 h-2.5 flex items-center justify-center text-neutral-400",
                children: Xn(si, { name: "icon-chevron-right", size: 10 }),
              }),
          Xn("div", {
            className: "h-7 overflow-hidden",
            children: Xn("div", {
              ref: n,
              className: Tn(
                "flex-1 flex flex-wrap flex-row-reverse justify-end gap-x-1",
              ),
              children: c.map((e, t) =>
                Xn(
                  "div",
                  {
                    className: Tn(
                      "flex-1 flex items-center gap-x-1",
                      "flex-[0_0_auto]",
                      "h-7",
                      "hover:text-neutral-300 transition-colors",
                      "overflow-hidden",
                    ),
                    children: [
                      Xn("button", {
                        type: "button",
                        title: e.name,
                        style: { maxWidth: "160px" },
                        className: "truncate",
                        onClick: () => {
                          s(e.element);
                        },
                        children: e.name,
                      }),
                      t > 0 &&
                        Xn("span", {
                          className:
                            "w-2.5 h-2.5 flex items-center justify-center text-neutral-400",
                          children: Xn(si, {
                            name: "icon-chevron-right",
                            size: 10,
                          }),
                        }),
                    ],
                  },
                  `${e.name}-${t}`,
                ),
              ),
            }),
          }),
        ],
      });
    },
    Si = (e, t = 0, n = null) =>
      e.reduce((e, r, o) => {
        const i = r.element
            ? ((e) => {
                const t = [];
                let n = e;
                for (; n; ) {
                  const e = n.elementType,
                    r =
                      "function" == typeof e
                        ? e.displayName || e.name
                        : "string" == typeof e
                          ? e
                          : "Unknown",
                    o = void 0 !== n.index ? `[${n.index}]` : "";
                  t.unshift(`${r}${o}`), (n = n.return ?? null);
                }
                return t.join("::");
              })(r.fiber)
            : `${n}-${o}`,
          a = { ...r, depth: t, nodeId: i, parentId: n, fiber: r.fiber };
        return (
          e.push(a),
          r.children?.length && e.push(...Si(r.children, t + 1, i)),
          e
        );
      }, []),
    Ni = ["memo", "forwardRef", "lazy", "suspense"],
    Ci = (e) => {
      const t = e.match(/\[(.*?)\]/);
      if (!t) return null;
      const n = [],
        r = t[1].split(",");
      for (const e of r) {
        const t = e.trim().toLowerCase();
        t && n.push(t);
      }
      return n;
    },
    Ei = (e, t) => {
      if (0 === e.length) return !0;
      if (!t.length) return !1;
      for (const n of e) {
        let e = !1;
        for (const r of t)
          if (r.type.toLowerCase().includes(n)) {
            e = !0;
            break;
          }
        if (!e) return !1;
      }
      return !0;
    },
    Ti = ({
      node: e,
      onElementClick: t,
      collapsedNodes: n,
      onToggle: r,
      searchValue: o,
    }) => {
      const i = e.children && e.children.length > 0,
        a = n.has(e.nodeId),
        s = Xe(() => {
          e.element && t?.(e.element);
        }, [e.element, t]),
        l = Xe(() => {
          i && r(e.nodeId);
        }, [i, e.nodeId, r]),
        { highlightedText: c, typeHighlight: d } = ((e, t) =>
          Ye(() => {
            const { query: n, matches: r } = t,
              o = r.some((t) => t.nodeId === e.nodeId),
              i = Ci(n) || [],
              a = n ? n.replace(/\[.*?\]/, "").trim() : "";
            if (!n || !o)
              return {
                highlightedText: Xn("span", {
                  className: "truncate",
                  children: e.label,
                }),
                typeHighlight: !1,
              };
            let s = !0;
            if (i.length > 0)
              if (e.fiber) {
                const { wrapperTypes: t } = Rn(e.fiber);
                s = Ei(i, t);
              } else s = !1;
            let l = Xn("span", { className: "truncate", children: e.label });
            if (a)
              try {
                if (a.startsWith("/") && a.endsWith("/")) {
                  const t = a.slice(1, -1),
                    n = new RegExp(`(${t})`, "i"),
                    r = e.label.split(n);
                  l = Xn("span", {
                    className: "tree-node-search-highlight",
                    children: r.map((t, o) =>
                      n.test(t)
                        ? Xn(
                            "span",
                            {
                              className: Tn("regex", {
                                start: n.test(t) && 0 === o,
                                middle: n.test(t) && o % 2 == 1,
                                end: n.test(t) && o === r.length - 1,
                                "!ml-0": 1 === o,
                              }),
                              children: t,
                            },
                            `${e.nodeId}-${t}`,
                          )
                        : t,
                    ),
                  });
                } else {
                  const t = e.label.toLowerCase(),
                    n = a.toLowerCase(),
                    r = t.indexOf(n);
                  r >= 0 &&
                    (l = Xn("span", {
                      className: "tree-node-search-highlight",
                      children: [
                        e.label.slice(0, r),
                        Xn("span", {
                          className: "single",
                          children: e.label.slice(r, r + a.length),
                        }),
                        e.label.slice(r + a.length),
                      ],
                    }));
                }
              } catch {}
            return { highlightedText: l, typeHighlight: s && i.length > 0 };
          }, [e.label, e.nodeId, e.fiber, t]))(e, o),
        u = Ye(() => {
          if (!e.fiber) return null;
          const { wrapperTypes: t } = Rn(e.fiber),
            n = t[0];
          return Xn("span", {
            className: Tn(
              "flex items-center gap-x-1",
              "text-[10px] text-neutral-400 tracking-wide",
              "overflow-hidden",
            ),
            children: [
              n &&
                Xn(pe, {
                  children: [
                    Xn(
                      "span",
                      {
                        title: n?.title,
                        className: Tn(
                          "rounded py-[1px] px-1",
                          "bg-neutral-700 text-neutral-300",
                          "truncate",
                          {
                            "bg-[#8e61e3] text-white": "memo" === n.type,
                            "bg-yellow-300 text-black": d,
                          },
                        ),
                        children: n.type,
                      },
                      n.type,
                    ),
                    n.compiler &&
                      Xn("span", {
                        className: "text-yellow-300 ml-1",
                        children: "✨",
                      }),
                  ],
                }),
              t.length > 1 && `×${t.length}`,
            ],
          });
        }, [e.fiber, d]);
      return Xn("button", {
        type: "button",
        title: e.title,
        className: Tn(
          "flex items-center gap-x-1",
          "px-2",
          "w-full h-7",
          "text-left",
          "rounded",
          "cursor-pointer select-none",
        ),
        onClick: s,
        children: [
          Xn("button", {
            type: "button",
            onClick: l,
            className: Tn(
              "w-4 h-4 flex items-center justify-center",
              "text-left",
            ),
            children:
              i &&
              Xn(si, {
                name: "icon-chevron-right",
                size: 12,
                className: Tn("w-4 h-4", "transition-transform", {
                  "rotate-90": !a,
                }),
              }),
          }),
          c,
          u,
        ],
      });
    },
    zi = () => {
      const e = We(null),
        t = We(null),
        n = We(null),
        r = We(null),
        o = We(null),
        i = We(null),
        a = We(0),
        s = We(!1),
        l = We(!1),
        [c, d] = He([]),
        [u, p] = He(new Set()),
        [h, f] = He(0),
        [m, g] = He(yi.value),
        w = Ye(() => {
          const e = [],
            t = c,
            n = new Map(t.map((e) => [e.nodeId, e]));
          for (const r of t) {
            let t = !0,
              o = r;
            for (; o.parentId; ) {
              const e = n.get(o.parentId);
              if (!e) break;
              if (u.has(e.nodeId)) {
                t = !1;
                break;
              }
              o = e;
            }
            t && e.push(r);
          }
          return e;
        }, [u, c]),
        v = 28,
        { virtualItems: b, totalSize: x } = ((e) => {
          const {
              count: t,
              getScrollElement: n,
              estimateSize: r,
              overscan: o = 5,
            } = e,
            [i, a] = He(0),
            [s, l] = He(0),
            c = We(),
            d = We(null),
            u = We(null),
            p = r(),
            h = Xe((e) => {
              if (!d.current) return;
              const t =
                e?.[0]?.contentRect.height ??
                d.current.getBoundingClientRect().height;
              l(t);
            }, []),
            f = Xe(() => {
              null !== u.current && cancelAnimationFrame(u.current),
                (u.current = requestAnimationFrame(() => {
                  h(), (u.current = null);
                }));
            }, [h]);
          Ve(() => {
            const e = n();
            if (!e) return;
            d.current = e;
            const t = () => {
              d.current && a(d.current.scrollTop);
            };
            h(),
              c.current ||
                (c.current = new ResizeObserver(() => {
                  f();
                })),
              c.current.observe(e),
              e.addEventListener("scroll", t, { passive: !0 });
            const r = new MutationObserver(f);
            return (
              r.observe(e, { attributes: !0, childList: !0, subtree: !0 }),
              () => {
                e.removeEventListener("scroll", t),
                  c.current && c.current.disconnect(),
                  r.disconnect(),
                  null !== u.current && cancelAnimationFrame(u.current);
              }
            );
          }, [n, h, f]);
          const m = Ye(() => {
            const e = Math.floor(i / p),
              n = Math.ceil(s / p);
            return { start: Math.max(0, e - o), end: Math.min(t, e + n + o) };
          }, [i, p, s, t, o]);
          return {
            virtualItems: Ye(() => {
              const e = [];
              for (let t = m.start; t < m.end; t++)
                e.push({ key: t, index: t, start: t * p });
              return e;
            }, [m, p]),
            totalSize: t * p,
            scrollTop: i,
            containerHeight: s,
          };
        })({
          count: w.length,
          getScrollElement: () => e.current,
          estimateSize: () => v,
          overscan: 5,
        }),
        y = Xe(
          (t) => {
            (s.current = !0), o.current?.blur(), (ki.value = !0);
            const { parentCompositeFiber: n } = Ea(t);
            if (!n) return;
            ll.inspectState.value = {
              kind: "focused",
              focusedDomElement: t,
              fiber: n,
            };
            const r = w.findIndex((e) => e.element === t);
            if (-1 !== r) {
              f(r);
              const t = r * v,
                n = e.current;
              if (n) {
                const e = n.clientHeight,
                  r = n.scrollTop,
                  o = 32;
                (t < r || t + v > r + e) &&
                  n.scrollTo({
                    top: Math.max(0, t - (e - o) / 2),
                    behavior: "instant",
                  });
              }
            }
          },
          [w],
        ),
        k = Xe((e) => {
          p((t) => {
            const n = new Set(t);
            return n.has(e) ? n.delete(e) : n.add(e), n;
          });
        }, []),
        _ = Xe(
          (t) => {
            r.current?.classList.remove("!border-red-500");
            const n = [];
            if (!t)
              return void (yi.value = {
                query: t,
                matches: n,
                currentMatchIndex: -1,
              });
            if (
              t.includes("[") &&
              !t.includes("]") &&
              t.length > t.indexOf("[") + 1
            )
              return void r.current?.classList.add("!border-red-500");
            const o = Ci(t) || [];
            if (
              t.includes("[") &&
              !((e) => {
                if (0 === e.length) return !1;
                for (const t of e) {
                  let e = !1;
                  for (const n of Ni)
                    if (n.toLowerCase().includes(t)) {
                      e = !0;
                      break;
                    }
                  if (!e) return !1;
                }
                return !0;
              })(o)
            )
              return void r.current?.classList.add("!border-red-500");
            const i = t.replace(/\[.*?\]/, "").trim(),
              a = /^\/.*\/$/.test(i);
            let s = (e) => !1;
            if (i.startsWith("/") && !a && i.length > 1)
              r.current?.classList.add("!border-red-500");
            else {
              if (a)
                try {
                  const e = i.slice(1, -1),
                    t = new RegExp(e, "i");
                  s = (e) => t.test(e);
                } catch {
                  return void r.current?.classList.add("!border-red-500");
                }
              else if (i) {
                const e = i.toLowerCase();
                s = (t) => t.toLowerCase().includes(e);
              }
              for (const e of c) {
                let t = !0;
                if ((i && (t = s(e.label)), t && o.length > 0))
                  if (e.fiber) {
                    const { wrapperTypes: n } = Rn(e.fiber);
                    t = Ei(o, n);
                  } else t = !1;
                t && n.push(e);
              }
              if (
                ((yi.value = {
                  query: t,
                  matches: n,
                  currentMatchIndex: n.length > 0 ? 0 : -1,
                }),
                n.length > 0)
              ) {
                const t = n[0],
                  r = w.findIndex((e) => e.nodeId === t.nodeId);
                if (-1 !== r) {
                  const t = r * v,
                    n = e.current;
                  if (n) {
                    const e = n.clientHeight;
                    n.scrollTo({
                      top: Math.max(0, t - e / 2),
                      behavior: "instant",
                    });
                  }
                }
              }
            }
          },
          [c, w],
        ),
        S = Xe(
          (e) => {
            const t = e.currentTarget;
            t && _(t.value);
          },
          [_],
        ),
        N = Xe(
          (t) => {
            const { matches: n, currentMatchIndex: r } = yi.value;
            if (0 === n.length) return;
            const o =
              "next" === t ? (r + 1) % n.length : (r - 1 + n.length) % n.length;
            yi.value = { ...yi.value, currentMatchIndex: o };
            const i = n[o],
              a = w.findIndex((e) => e.nodeId === i.nodeId);
            if (-1 !== a) {
              f(a);
              const t = a * v,
                n = e.current;
              if (n) {
                const e = n.clientHeight;
                n.scrollTo({
                  top: Math.max(0, t - e / 2),
                  behavior: "instant",
                });
              }
            }
          },
          [w],
        ),
        C = Xe((t) => {
          if ((n.current && (n.current.style.width = `${t}px`), e.current)) {
            e.current.style.width = `${t}px`;
            const n = ((e, t) => {
              if (t <= 0) return 24;
              const n = Math.max(0, e - Bn);
              if (n < 24) return 0;
              const r = Math.min(0.3 * n, 24 * t) / t;
              return Math.max(0, Math.min(24, r));
            })(t, a.current);
            e.current.style.setProperty("--indentation-size", `${n}px`);
          }
        }, []),
        E = Xe((t) => {
          if ((t.preventDefault(), t.stopPropagation(), !e.current)) return;
          e.current.style.setProperty("pointer-events", "none"),
            (l.current = !0);
          const n = t.clientX,
            r = e.current.offsetWidth,
            o = Gi.value.dimensions.width,
            i = Math.floor(o - Un / 2),
            a = (e) => {
              const t = n - e.clientX,
                o = Math.min(i, Math.max(Bn, r + t));
              C(o);
            },
            s = () => {
              e.current &&
                (e.current.style.removeProperty("pointer-events"),
                document.removeEventListener("mousemove", a),
                document.removeEventListener("mouseup", s),
                (Gi.value = {
                  ...Gi.value,
                  componentsTree: {
                    ...Gi.value.componentsTree,
                    width: e.current.offsetWidth,
                  },
                }),
                Mn(Wn, Gi.value),
                (l.current = !1));
            };
          document.addEventListener("mousemove", a),
            document.addEventListener("mouseup", s);
        }, []),
        T = Xe(() => {
          s.current = !1;
        }, []);
      return (
        Ve(() => {
          const e = () => {
              const e = i.current;
              if (!e) return;
              const t = ((e) => {
                const t = new Map(),
                  n = [];
                for (const { element: n, name: r, fiber: o } of e) {
                  if (!n) continue;
                  let e = r;
                  const { name: i, wrappers: a } = Rn(o);
                  i &&
                    (e =
                      a.length > 0
                        ? `${a.join("(")}(${i})${")".repeat(a.length)}`
                        : i),
                    t.set(n, {
                      label: i || r,
                      title: e,
                      children: [],
                      element: n,
                      fiber: o,
                    });
                }
                for (const { element: r, depth: o } of e) {
                  if (!r) continue;
                  const e = t.get(r);
                  if (e)
                    if (0 === o) n.push(e);
                    else {
                      let n = r.parentElement;
                      for (; n; ) {
                        const r = t.get(n);
                        if (r) {
                          (r.children = r.children || []), r.children.push(e);
                          break;
                        }
                        n = n.parentElement;
                      }
                    }
                }
                return n;
              })(Fa(e));
              if (t.length > 0) {
                const e = Si(t),
                  n = e.reduce((e, t) => Math.max(e, t.depth), 0);
                (a.current = n), C(Gi.value.componentsTree.width), d(e);
              }
            },
            t = ll.inspectState.subscribe((t) => {
              if ("focused" === t.kind) {
                if (ki.value) return;
                _(""), f(0), (i.current = t.focusedDomElement), e();
              }
            });
          let n = 0;
          const r = hi.subscribe(() => {
            if ("focused" === ll.inspectState.value.kind) {
              if ((cancelAnimationFrame(n), l.current)) return;
              n = requestAnimationFrame(() => {
                (ki.value = !1), e();
              });
            }
          });
          return () => {
            t(),
              r(),
              (yi.value = { query: "", matches: [], currentMatchIndex: -1 });
          };
        }, []),
        Ve(() => {
          const e = (e) => {
            if (s.current)
              switch (e.key) {
                case "ArrowUp":
                  if ((e.preventDefault(), e.stopPropagation(), h > 0)) {
                    const e = w[h - 1];
                    e?.element && y(e.element);
                  }
                  return;
                case "ArrowDown":
                  if (
                    (e.preventDefault(), e.stopPropagation(), h < w.length - 1)
                  ) {
                    const e = w[h + 1];
                    e?.element && y(e.element);
                  }
                  return;
                case "ArrowLeft": {
                  e.preventDefault(), e.stopPropagation();
                  const t = w[h];
                  return void (t?.nodeId && k(t.nodeId));
                }
                case "ArrowRight": {
                  e.preventDefault(), e.stopPropagation();
                  const t = w[h];
                  return void (t?.nodeId && k(t.nodeId));
                }
              }
          };
          return (
            document.addEventListener("keydown", e),
            () => {
              document.removeEventListener("keydown", e);
            }
          );
        }, [h, w, y, k]),
        Ve(() => yi.subscribe(g), []),
        Ve(() => {
          const e = Gi.subscribe((e) => {
            C(e.componentsTree.width);
          });
          return () => {
            e();
          };
        }, []),
        Xn(pe, {
          children: [
            Xn("div", {
              onMouseDown: E,
              className: "relative resize-v-line",
              children: Xn("span", {
                children: Xn(si, { name: "icon-ellipsis", size: 18 }),
              }),
            }),
            Xn("div", {
              ref: n,
              className: "flex flex-col h-full",
              children: [
                Xn("div", {
                  ref: t,
                  className: "overflow-hidden",
                  children: [
                    Xn(_i, { selectedElement: i.current }),
                    Xn("div", {
                      className: "py-2 pr-2 border-b border-[#1e1e1e]",
                      children: Xn("div", {
                        ref: r,
                        title:
                          'Search components by:\n\n• Name (e.g., "Button") — Case insensitive, matches any part\n\n• Regular Expression (e.g., "/^Button/") — Use forward slashes\n\n• Wrapper Type (e.g., "[memo,forwardRef]"):\n   - Available types: memo, forwardRef, lazy, suspense\n   - Matches any part of type name (e.g., "mo" matches "memo")\n   - Use commas for multiple types\n\n• Combined Search:\n   - Mix name/regex with type: "button [for]"\n   - Will match components satisfying both conditions\n\n• Navigation:\n   - Enter → Next match\n   - Shift + Enter → Previous match\n   - Cmd/Ctrl + Enter → Select and focus match (keeps search active)\n',
                        className: Tn(
                          "relative",
                          "flex items-center gap-x-1 px-2",
                          "rounded",
                          "border border-transparent",
                          "focus-within:border-[#454545]",
                          "bg-[#1e1e1e] text-neutral-300",
                          "transition-colors",
                          "whitespace-nowrap",
                          "overflow-hidden",
                        ),
                        children: [
                          Xn(si, {
                            name: "icon-search",
                            size: 12,
                            className: " text-neutral-500",
                          }),
                          Xn("div", {
                            className: "relative flex-1 h-7 overflow-hidden",
                            children: Xn("input", {
                              ref: o,
                              type: "text",
                              value: yi.value.query,
                              onClick: (e) => {
                                e.stopPropagation(), e.currentTarget.focus();
                              },
                              onMouseDown: (e) => {
                                e.stopPropagation();
                              },
                              onKeyDown: (e) => {
                                "Escape" === e.key && e.currentTarget.blur(),
                                  yi.value.matches.length &&
                                    ("Enter" === e.key && e.shiftKey
                                      ? N("prev")
                                      : "Enter" === e.key &&
                                        (e.metaKey || e.ctrlKey
                                          ? (e.preventDefault(),
                                            e.stopPropagation(),
                                            y(
                                              yi.value.matches[
                                                yi.value.currentMatchIndex
                                              ].element,
                                            ),
                                            e.currentTarget.focus())
                                          : N("next")));
                              },
                              onChange: S,
                              className: "absolute inset-y-0 inset-x-1",
                              placeholder: "Component name, /regex/, or [type]",
                            }),
                          }),
                          yi.value.query
                            ? Xn(pe, {
                                children: [
                                  Xn("span", {
                                    className:
                                      "flex items-center gap-x-0.5 text-xs text-neutral-500",
                                    children: [
                                      yi.value.currentMatchIndex + 1,
                                      "|",
                                      yi.value.matches.length,
                                    ],
                                  }),
                                  !!yi.value.matches.length &&
                                    Xn(pe, {
                                      children: [
                                        Xn("button", {
                                          type: "button",
                                          onClick: (e) => {
                                            e.stopPropagation(), N("prev");
                                          },
                                          className:
                                            "button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",
                                          children: Xn(si, {
                                            name: "icon-chevron-right",
                                            className: "-rotate-90",
                                            size: 12,
                                          }),
                                        }),
                                        Xn("button", {
                                          type: "button",
                                          onClick: (e) => {
                                            e.stopPropagation(), N("next");
                                          },
                                          className:
                                            "button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",
                                          children: Xn(si, {
                                            name: "icon-chevron-right",
                                            className: "rotate-90",
                                            size: 12,
                                          }),
                                        }),
                                      ],
                                    }),
                                  Xn("button", {
                                    type: "button",
                                    onClick: (e) => {
                                      e.stopPropagation(), _("");
                                    },
                                    className:
                                      "button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",
                                    children: Xn(si, {
                                      name: "icon-close",
                                      size: 12,
                                    }),
                                  }),
                                ],
                              })
                            : !!c.length &&
                              Xn("span", {
                                className: "text-xs text-neutral-500",
                                children: c.length,
                              }),
                        ],
                      }),
                    }),
                  ],
                }),
                Xn("div", {
                  className: "flex-1 overflow-hidden",
                  children: Xn("div", {
                    ref: e,
                    onMouseLeave: T,
                    className: "h-full overflow-auto will-change-transform",
                    children: Xn("div", {
                      className: "relative w-full",
                      style: { height: x },
                      children: b.map((e) => {
                        const t = w[e.index];
                        if (!t) return null;
                        const n =
                            "focused" === ll.inspectState.value.kind &&
                            t.element ===
                              ll.inspectState.value.focusedDomElement,
                          r = e.index === h;
                        return Xn(
                          "div",
                          {
                            className: Tn(
                              "absolute left-0 w-full overflow-hidden",
                              "text-neutral-400 hover:text-neutral-300",
                              "bg-transparent hover:bg-[#5f3f9a]/20",
                              {
                                "text-neutral-300 bg-[#5f3f9a]/40 hover:bg-[#5f3f9a]/40":
                                  n || r,
                              },
                            ),
                            style: { top: e.start, height: v },
                            children: Xn("div", {
                              className: "w-full h-full",
                              style: {
                                paddingLeft: `calc(${t.depth} * var(--indentation-size))`,
                              },
                              children: Xn(Ti, {
                                node: t,
                                onElementClick: y,
                                collapsedNodes: u,
                                onToggle: k,
                                searchValue: m,
                              }),
                            }),
                          },
                          t.nodeId,
                        );
                      }),
                    }),
                  }),
                }),
              ],
            }),
          ],
        })
      );
    },
    Ai = () => {
      const e = We(null),
        t = We(null),
        n = Bi.value,
        [r, o] = He(null);
      Ve(
        () =>
          ll.inspectState.subscribe((e) => {
            if ("focused" !== e.kind) return;
            const t = e.fiber;
            t && o(t);
          }),
        [],
      ),
        Ve(
          () =>
            pi.subscribe((n) => {
              if ("focused" !== ll.inspectState.value.kind) return;
              if (!e.current || !t.current) return;
              const {
                  totalUpdates: r,
                  currentIndex: o,
                  updates: i,
                  isVisible: a,
                  windowOffset: s,
                } = n,
                l = Math.max(0, r - 1),
                c = a
                  ? `#${s + o} Re-render since selected`
                  : "" +
                    (0 === l
                      ? "No renders since selected"
                      : `${l} Re-renders since selected`);
              let d;
              if (l > 0 && o >= 0 && o < i.length) {
                const e = i[o]?.fiberInfo?.selfTime;
                d =
                  e > 0
                    ? e < 0.1 - Number.EPSILON
                      ? "< 0.1ms"
                      : `${Number(e.toFixed(1))}ms`
                    : void 0;
              }
              (e.current.dataset.text = `${c}${l > 0 && d ? " •" : ""}`),
                d && (t.current.dataset.text = d);
            }),
          [],
        );
      const i = Ye(() => {
        if (!r) return null;
        const { name: e, wrappers: t, wrapperTypes: n } = Rn(r),
          o = t.length
            ? `${t.join("(")}(${e})${")".repeat(t.length)}`
            : (e ?? ""),
          i = n[0];
        return Xn("span", {
          title: o,
          className: "flex items-center gap-x-1",
          children: [
            e ?? "Unknown",
            Xn("span", {
              title: i?.title,
              className:
                "flex items-center gap-x-1 text-[10px] text-purple-400",
              children:
                !!i &&
                Xn(pe, {
                  children: [
                    Xn(
                      "span",
                      {
                        className: Tn("rounded py-[1px] px-1", "truncate", {
                          "bg-purple-800 text-neutral-400": i.compiler,
                          "bg-neutral-700 text-neutral-300": !i.compiler,
                          "bg-[#5f3f9a] text-white": "memo" === i.type,
                        }),
                        children: i.type,
                      },
                      i.type,
                    ),
                    i.compiler &&
                      Xn("span", {
                        className: "text-yellow-300",
                        children: "✨",
                      }),
                  ],
                }),
            }),
            n.length > 1 &&
              Xn("span", {
                className: "text-[10px] text-neutral-400",
                children: ["×", n.length - 1],
              }),
          ],
        });
      }, [r]);
      return Xn("div", {
        className: Tn(
          "absolute inset-0 flex items-center gap-x-2",
          "translate-y-0",
          "transition-transform duration-300",
          { "-translate-y-[200%]": n },
        ),
        children: [
          i,
          Xn("div", {
            className: "flex items-center gap-x-2 mr-auto text-xs text-[#888]",
            children: Xn("span", {
              ref: e,
              className: "with-data-text cursor-pointer !overflow-visible",
              title: "Click to toggle between rerenders and total renders",
            }),
          }),
        ],
      });
    },
    $i = () => {
      const e = Bi.value;
      return Xn("span", {
        "data-text": "Settings",
        className: Tn(
          "absolute inset-0 flex items-center",
          "with-data-text",
          "-translate-y-[200%]",
          "transition-transform duration-300",
          { "translate-y-0": e },
        ),
      });
    },
    Mi = () =>
      Xn("div", {
        className: "react-scan-header",
        children: [
          Xn("div", {
            className: "relative flex-1 h-full",
            children: [Xn($i, {}), Xn(Ai, {})],
          }),
          Xn("button", {
            type: "button",
            title: "Close",
            className: "react-scan-close-button",
            onClick: () => {
              Bi.value
                ? (Bi.value = !1)
                : (ll.inspectState.value = { kind: "inspect-off" });
            },
            children: Xn(si, { name: "icon-close" }),
          }),
        ],
      }),
    Fi = class {
      constructor(e, t) {
        (this.width = e),
          (this.height = t),
          (this.maxWidth = e - 48),
          (this.maxHeight = t - 48);
      }
      rightEdge(e) {
        return this.width - e - Ln;
      }
      bottomEdge(e) {
        return this.height - e - Ln;
      }
      isFullWidth(e) {
        return e >= this.maxWidth;
      }
      isFullHeight(e) {
        return e >= this.maxHeight;
      }
    },
    Ri = () => {
      const e = window.innerWidth,
        t = window.innerHeight;
      return ai && ai.width === e && ai.height === t ? ai : (ai = new Fi(e, t));
    },
    ji = (e, t, n) => {
      const r = window.innerWidth,
        o = window.innerHeight,
        i = t === Un,
        a = i ? t : Math.min(t, r - 48),
        s = i ? n : Math.min(n, o - 48);
      let l, c;
      switch (e) {
        case "top-right":
          (l = r - a - Ln), (c = Ln);
          break;
        case "bottom-right":
          (l = r - a - Ln), (c = o - s - Ln);
          break;
        case "bottom-left":
          (l = Ln), (c = o - s - Ln);
          break;
        default:
          (l = Ln), (c = Ln);
      }
      return (
        i &&
          ((l = Math.max(Ln, Math.min(l, r - a - Ln))),
          (c = Math.max(Ln, Math.min(c, o - s - Ln)))),
        { x: l, y: c }
      );
    },
    Pi = (e, t, n) => {
      const r = n ? Un : Vn,
        o = n ? Ri().maxWidth : Ri().maxHeight,
        i = e + t;
      return Math.min(Math.max(r, i), o);
    },
    Di = ({ position: e }) => {
      const t = We(null),
        n = We(null),
        r = We(null),
        o = We(null);
      Ve(() => {
        const i = t.current;
        if (!i) return;
        const a = (t) => {
            const n =
              (t || Yi.value) &&
              ((e, t, n, r) =>
                !(!n || !r) ||
                (n || r
                  ? n
                    ? e !== t.split("-")[0]
                    : !!r && e !== t.split("-")[1]
                  : ((e, t) => {
                      const [n, r] = t.split("-");
                      return e !== n && e !== r;
                    })(e, t)))(
                e,
                Gi.value.corner,
                Gi.value.dimensions.isFullWidth,
                Gi.value.dimensions.isFullHeight,
              );
            n
              ? i.classList.remove("hidden", "pointer-events-none", "opacity-0")
              : i.classList.add("hidden", "pointer-events-none", "opacity-0");
          },
          s = Gi.subscribe((e) => {
            (null !== n.current &&
              null !== r.current &&
              null !== o.current &&
              e.dimensions.width === n.current &&
              e.dimensions.height === r.current &&
              e.corner === o.current) ||
              (a("focused" === ll.inspectState.value.kind),
              (n.current = e.dimensions.width),
              (r.current = e.dimensions.height),
              (o.current = e.corner));
          }),
          l = ll.inspectState.subscribe((e) => {
            a("focused" === e.kind);
          }),
          c = Yi.subscribe(() => {
            a("focused" === ll.inspectState.value.kind);
          });
        return () => {
          s(),
            l(),
            c(),
            (n.current = null),
            (r.current = null),
            (o.current = null);
        };
      }, []);
      const i = Xe((t) => {
          t.preventDefault(), t.stopPropagation();
          const n = Wi.value;
          if (!n) return;
          const r = n.style,
            { dimensions: o } = Gi.value,
            i = t.clientX,
            a = t.clientY,
            s = o.width,
            l = o.height,
            c = o.position;
          Gi.value = {
            ...Gi.value,
            dimensions: {
              ...o,
              isFullWidth: !1,
              isFullHeight: !1,
              width: s,
              height: l,
              position: c,
            },
          };
          let d = null;
          const u = (t) => {
              d ||
                ((r.transition = "none"),
                (d = requestAnimationFrame(() => {
                  const { newSize: n, newPosition: o } = ((e, t, n, r, o) => {
                    const i = window.innerWidth - 48,
                      a = window.innerHeight - 48;
                    let s = t.width,
                      l = t.height,
                      c = n.x,
                      d = n.y;
                    if (e.includes("right")) {
                      const e = window.innerWidth - n.x - Ln,
                        o = Math.min(t.width + r, e);
                      s = Math.min(i, Math.max(Un, o));
                    }
                    if (e.includes("left")) {
                      const e = n.x + t.width - Ln,
                        o = Math.min(t.width - r, e);
                      (s = Math.min(i, Math.max(Un, o))),
                        (c = n.x - (s - t.width));
                    }
                    if (e.includes("bottom")) {
                      const e = window.innerHeight - n.y - Ln,
                        r = Math.min(t.height + o, e);
                      l = Math.min(a, Math.max(Vn, r));
                    }
                    if (e.includes("top")) {
                      const e = n.y + t.height - Ln,
                        r = Math.min(t.height - o, e);
                      (l = Math.min(a, Math.max(Vn, r))),
                        (d = n.y - (l - t.height));
                    }
                    return (
                      (c = Math.max(
                        Ln,
                        Math.min(c, window.innerWidth - Ln - s),
                      )),
                      (d = Math.max(
                        Ln,
                        Math.min(d, window.innerHeight - Ln - l),
                      )),
                      {
                        newSize: { width: s, height: l },
                        newPosition: { x: c, y: d },
                      }
                    );
                  })(
                    e,
                    { width: s, height: l },
                    c,
                    t.clientX - i,
                    t.clientY - a,
                  );
                  (r.transform = `translate3d(${o.x}px, ${o.y}px, 0)`),
                    (r.width = `${n.width}px`),
                    (r.height = `${n.height}px`);
                  const u = Math.floor(n.width - Un / 2),
                    p = Gi.value.componentsTree.width,
                    h = Math.min(u, Math.max(Bn, p));
                  (Gi.value = {
                    ...Gi.value,
                    dimensions: {
                      isFullWidth: !1,
                      isFullHeight: !1,
                      width: n.width,
                      height: n.height,
                      position: o,
                    },
                    componentsTree: { ...Gi.value.componentsTree, width: h },
                  }),
                    (d = null);
                })));
            },
            p = () => {
              d && (cancelAnimationFrame(d), (d = null)),
                document.removeEventListener("mousemove", u),
                document.removeEventListener("mouseup", p);
              const { dimensions: e, corner: t } = Gi.value,
                o = Ri(),
                i = o.isFullWidth(e.width),
                a = o.isFullHeight(e.height);
              let s = t;
              ((i && a) || i || a) &&
                (s = ((e) => {
                  const t = Ri(),
                    n = {
                      "top-left": Math.hypot(e.x, e.y),
                      "top-right": Math.hypot(t.maxWidth - e.x, e.y),
                      "bottom-left": Math.hypot(e.x, t.maxHeight - e.y),
                      "bottom-right": Math.hypot(
                        t.maxWidth - e.x,
                        t.maxHeight - e.y,
                      ),
                    };
                  let r = "top-left";
                  for (const e in n) n[e] < n[r] && (r = e);
                  return r;
                })(e.position));
              const l = ji(s, e.width, e.height),
                c = () => {
                  n.removeEventListener("transitionend", c);
                };
              n.addEventListener("transitionend", c),
                (r.transform = `translate3d(${l.x}px, ${l.y}px, 0)`),
                (Gi.value = {
                  ...Gi.value,
                  corner: s,
                  dimensions: {
                    isFullWidth: i,
                    isFullHeight: a,
                    width: e.width,
                    height: e.height,
                    position: l,
                  },
                  lastDimensions: {
                    isFullWidth: i,
                    isFullHeight: a,
                    width: e.width,
                    height: e.height,
                    position: l,
                  },
                }),
                Mn(Wn, {
                  corner: s,
                  dimensions: Gi.value.dimensions,
                  lastDimensions: Gi.value.lastDimensions,
                  componentsTree: Gi.value.componentsTree,
                });
            };
          document.addEventListener("mousemove", u, { passive: !0 }),
            document.addEventListener("mouseup", p);
        }, []),
        a = Xe((t) => {
          t.preventDefault(), t.stopPropagation();
          const n = Wi.value;
          if (!n) return;
          const r = n.style,
            { dimensions: o, corner: i } = Gi.value,
            a = Ri(),
            s = a.isFullWidth(o.width),
            l = a.isFullHeight(o.height),
            c = s && l,
            d = (s || l) && !c;
          let u = o.width,
            p = o.height;
          const h = ((e, t, n, r, o) => {
            if (n) {
              if ("top-left" === e) return "bottom-right";
              if ("top-right" === e) return "bottom-left";
              if ("bottom-left" === e) return "top-right";
              if ("bottom-right" === e) return "top-left";
              const [n, r] = t.split("-");
              if ("left" === e) return `${n}-right`;
              if ("right" === e) return `${n}-left`;
              if ("top" === e) return `bottom-${r}`;
              if ("bottom" === e) return `top-${r}`;
            }
            if (r) {
              if ("left" === e) return `${t.split("-")[0]}-right`;
              if ("right" === e) return `${t.split("-")[0]}-left`;
            }
            if (o) {
              if ("top" === e) return `bottom-${t.split("-")[1]}`;
              if ("bottom" === e) return `top-${t.split("-")[1]}`;
            }
            return t;
          })(e, i, c, s, l);
          "left" === e || "right" === e
            ? ((u = s ? o.width : a.maxWidth), d && (u = s ? Un : a.maxWidth))
            : ((p = l ? o.height : a.maxHeight),
              d && (p = l ? Vn : a.maxHeight)),
            c && ("left" === e || "right" === e ? (u = Un) : (p = Vn));
          const f = ji(h, u, p),
            m = {
              isFullWidth: a.isFullWidth(u),
              isFullHeight: a.isFullHeight(p),
              width: u,
              height: p,
              position: f,
            },
            g = Math.floor(u - Un / 2),
            w = Gi.value.componentsTree.width,
            v = Math.floor(0.3 * u),
            b = s
              ? Bn
              : ("left" !== e && "right" !== e) || s
                ? Math.min(g, Math.max(Bn, w))
                : Math.min(g, Math.max(Bn, v));
          requestAnimationFrame(() => {
            (Gi.value = {
              corner: h,
              dimensions: m,
              lastDimensions: o,
              componentsTree: { ...Gi.value.componentsTree, width: b },
            }),
              (r.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"),
              (r.width = `${u}px`),
              (r.height = `${p}px`),
              (r.transform = `translate3d(${f.x}px, ${f.y}px, 0)`);
          }),
            Mn(Wn, {
              corner: h,
              dimensions: m,
              lastDimensions: o,
              componentsTree: { ...Gi.value.componentsTree, width: b },
            });
        }, []);
      return Xn("div", {
        ref: t,
        onMouseDown: i,
        onDblClick: a,
        className: Tn(
          "absolute z-50",
          "flex items-center justify-center",
          "group",
          "transition-colors select-none",
          "peer",
          {
            "resize-left peer/left": "left" === e,
            "resize-right peer/right z-10": "right" === e,
            "resize-top peer/top": "top" === e,
            "resize-bottom peer/bottom": "bottom" === e,
          },
        ),
        children: Xn("span", {
          className: "resize-line-wrapper",
          children: Xn("span", {
            className: "resize-line",
            children: Xn(si, {
              name: "icon-ellipsis",
              size: 18,
              className: Tn("text-neutral-400", {
                "rotate-90": "left" === e || "right" === e,
              }),
            }),
          }),
        }),
      });
    },
    Ii = ({ checked: e, onChange: t, class: n, ...r }) =>
      Xn("div", {
        className: Tn("react-scan-toggle", n),
        children: [
          Xn("input", { type: "checkbox", checked: e, onChange: t, ...r }),
          Xn("div", {}),
        ],
      }),
    Oi = ({ fps: e }) => {
      return Xn("div", {
        className: Tn(
          "flex items-center gap-x-1 px-2 w-full",
          "h-6",
          "rounded-md",
          "font-mono leading-none",
          "bg-[#141414]",
          "ring-1 ring-white/[0.08]",
        ),
        children: [
          Xn("div", {
            style: {
              color:
                ((t = e),
                t < 30 ? "#EF4444" : t < 50 ? "#F59E0B" : "rgb(214,132,245)"),
            },
            className:
              "text-sm font-semibold tracking-wide transition-colors ease-in-out w-full flex justify-center items-center",
            children: e,
          }),
          Xn("span", {
            className:
              "text-white/30 text-[11px] font-medium tracking-wide ml-auto min-w-fit",
            children: "FPS",
          }),
        ],
      });
      var t;
    },
    Li = () => {
      const e = We(null),
        t = ti(),
        [n, r] = He(t);
      Ve(() => {
        const e = setTimeout(() => {
          r(t);
        }, 600);
        return () => {
          clearTimeout(e);
        };
      }, [t.length]);
      const o = ll.inspectState,
        i = "inspecting" === o.value.kind,
        a = "focused" === o.value.kind,
        s = Xe((e) => {
          if ((e.preventDefault(), e.stopPropagation(), !cl.instrumentation))
            return;
          const t = !cl.instrumentation.isPaused.value;
          cl.instrumentation.isPaused.value = t;
          const n = $n("react-scan-options");
          Mn("react-scan-options", { ...n, enabled: !t });
        }, []);
      Ve(() => {
        const t = ll.inspectState.subscribe((e) => {
            "uninitialized" === e.kind &&
              (ll.inspectState.value = { kind: "inspect-off" });
          }),
          n = Bi.subscribe((t) => {
            e.current?.classList.toggle("text-inspect", t);
          });
        return () => {
          t(), n();
        };
      }, []);
      let l = null,
        c = "#999";
      return (
        i
          ? ((l = Xn(si, { name: "icon-inspect" })), (c = "#8e61e3"))
          : a
            ? ((l = Xn(si, { name: "icon-focus" })), (c = "#8e61e3"))
            : ((l = Xn(si, { name: "icon-inspect" })), (c = "#999")),
        Ve(
          () =>
            Yi.subscribe((e) => {
              e || Uo();
            }),
          [],
        ),
        Xn("div", {
          className:
            "flex max-h-9 min-h-9 flex-1 items-stretch overflow-hidden gap-x-[6px]",
          children: Xn("div", {
            className: "h-full flex items-center min-w-fit",
            children: [
              Xn("div", {
                className: "h-full flex items-center justify-center",
                children: Xn("button", {
                  type: "button",
                  id: "react-scan-inspect-element",
                  onClick: () => {
                    switch (ll.inspectState.value.kind) {
                      case "inspecting":
                        ll.inspectState.value = { kind: "inspect-off" };
                        break;
                      case "focused":
                        ll.inspectState.value = {
                          kind: "inspecting",
                          hoveredDomElement: null,
                        };
                        break;
                      case "inspect-off":
                        (Yi.value = !1),
                          (ll.inspectState.value = {
                            kind: "inspecting",
                            hoveredDomElement: null,
                          });
                    }
                  },
                  className:
                    "button flex items-center justify-center h-full w-full pl-3 pr-2.5",
                  style: { color: c },
                  children: l,
                }),
              }),
              Xn("div", {
                className: "h-full flex items-center justify-center",
                children: Xn("button", {
                  type: "button",
                  id: "react-scan-notifications",
                  onClick: () => {
                    (ll.inspectState.value = { kind: "inspect-off" }),
                      (Yi.value = !Yi.value);
                  },
                  className:
                    "button flex items-center justify-center h-full pl-2.5 pr-2.5",
                  style: { color: c },
                  children: Xn(mo, {
                    events: n.map((e) => "high" === uo(e)),
                    size: 16,
                    className: Tn([
                      "text-[#999]",
                      Yi.value && "text-[#8E61E3]",
                    ]),
                  }),
                }),
              }),
              Xn("div", {
                className: Tn(["min-w-fit flex flex-col items-center pl-1"]),
                children: Xn("div", {
                  className: "h-full flex items-center justify-center",
                  children: Xn(Ii, {
                    checked: !cl.instrumentation?.isPaused.value,
                    onChange: s,
                  }),
                }),
              }),
              cl.options.value.showFPS && Xn(Ui, {}),
            ],
          }),
        })
      );
    },
    Ui = () => {
      const [e, t] = He(null);
      return (
        Ve(() => {
          const e = setInterval(() => {
            t(Ns());
          }, 200);
          return () => clearInterval(e);
        }, []),
        Xn("div", {
          className: Tn(
            "flex items-center justify-end gap-x-2 px-1 ml-1 w-[72px]",
            "whitespace-nowrap text-sm text-white",
          ),
          children: null === e ? Xn(pe, { children: "️" }) : Xn(Oi, { fps: e }),
        })
      );
    },
    Hi = () => {
      const e = We(null),
        t = We(null),
        n = We(0),
        r = We(0),
        o = Xe((t = !0) => {
          if (!e.current) return;
          const o = "focused" === ll.inspectState.value.kind,
            { corner: i } = Gi.value;
          let a, s;
          if (o || Bi.value || Yi.value) {
            const e = Gi.value.lastDimensions;
            (a = Pi(e.width, 0, !0)), (s = Pi(e.height, 0, !1));
          } else {
            const e = Gi.value.dimensions;
            e.width > n.current &&
              (Gi.value = {
                ...Gi.value,
                lastDimensions: {
                  isFullWidth: e.isFullWidth,
                  isFullHeight: e.isFullHeight,
                  width: e.width,
                  height: e.height,
                  position: e.position,
                },
              }),
              (a = n.current),
              (s = r.current);
          }
          const l = ji(i, a, s),
            c = t && !(a < Un || s < Vn),
            d = e.current,
            u = d.style;
          let p = null;
          const h = () => {
            Ki(),
              d.removeEventListener("transitionend", h),
              p && (cancelAnimationFrame(p), (p = null));
          };
          d.addEventListener("transitionend", h),
            (u.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"),
            (p = requestAnimationFrame(() => {
              (u.width = `${a}px`),
                (u.height = `${s}px`),
                (u.transform = `translate3d(${l.x}px, ${l.y}px, 0)`),
                (p = null);
            }));
          const f = {
            isFullWidth: a >= window.innerWidth - 48,
            isFullHeight: s >= window.innerHeight - 48,
            width: a,
            height: s,
            position: l,
          };
          (Gi.value = {
            corner: i,
            dimensions: f,
            lastDimensions: o
              ? Gi.value.lastDimensions
              : a > n.current
                ? f
                : Gi.value.lastDimensions,
            componentsTree: Gi.value.componentsTree,
          }),
            c &&
              Mn(Wn, {
                corner: Gi.value.corner,
                dimensions: Gi.value.dimensions,
                lastDimensions: Gi.value.lastDimensions,
                componentsTree: Gi.value.componentsTree,
              }),
            Ki();
        }, []),
        i = Xe((t) => {
          if ((t.preventDefault(), !e.current || t.target.closest("button")))
            return;
          const n = e.current,
            r = n.style,
            { dimensions: o } = Gi.value,
            i = t.clientX,
            a = t.clientY,
            s = o.position.x,
            l = o.position.y;
          let c = s,
            d = l,
            u = null,
            p = !1,
            h = i,
            f = a;
          const m = (e) => {
              u ||
                ((p = !0),
                (h = e.clientX),
                (f = e.clientY),
                (u = requestAnimationFrame(() => {
                  const e = h - i,
                    t = f - a;
                  (c = Number(s) + e),
                    (d = Number(l) + t),
                    (r.transition = "none"),
                    (r.transform = `translate3d(${c}px, ${d}px, 0)`),
                    (u = null);
                })));
            },
            g = () => {
              if (!n) return;
              u && (cancelAnimationFrame(u), (u = null)),
                document.removeEventListener("mousemove", m),
                document.removeEventListener("mouseup", g);
              const e = Math.abs(h - i),
                t = Math.abs(f - a),
                w = Math.sqrt(e * e + t * t);
              if (!p || w < 60) return;
              const v = ((e, t, n, r, o = 100) => {
                const i = void 0 !== n ? e - n : 0,
                  a = void 0 !== r ? t - r : 0,
                  s = window.innerWidth / 2,
                  l = window.innerHeight / 2,
                  c = i > o,
                  d = a > o;
                if (c || i < -o) {
                  const e = t > l;
                  return c
                    ? e
                      ? "bottom-right"
                      : "top-right"
                    : e
                      ? "bottom-left"
                      : "top-left";
                }
                if (d || a < -o) {
                  const t = e > s;
                  return d
                    ? t
                      ? "bottom-right"
                      : "bottom-left"
                    : t
                      ? "top-right"
                      : "top-left";
                }
                return e > s
                  ? t > l
                    ? "bottom-right"
                    : "top-right"
                  : t > l
                    ? "bottom-left"
                    : "top-left";
              })(
                h,
                f,
                i,
                a,
                "focused" === ll.inspectState.value.kind ? 80 : 40,
              );
              if (v === Gi.value.corner) {
                r.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
                const e = Gi.value.dimensions.position;
                return void requestAnimationFrame(() => {
                  r.transform = `translate3d(${e.x}px, ${e.y}px, 0)`;
                });
              }
              const b = ji(v, o.width, o.height);
              if (c === s && d === l) return;
              const x = () => {
                (r.transition = "none"),
                  Ki(),
                  n.removeEventListener("transitionend", x),
                  u && (cancelAnimationFrame(u), (u = null));
              };
              n.addEventListener("transitionend", x),
                (r.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"),
                requestAnimationFrame(() => {
                  r.transform = `translate3d(${b.x}px, ${b.y}px, 0)`;
                }),
                (Gi.value = {
                  corner: v,
                  dimensions: {
                    isFullWidth: o.isFullWidth,
                    isFullHeight: o.isFullHeight,
                    width: o.width,
                    height: o.height,
                    position: b,
                  },
                  lastDimensions: Gi.value.lastDimensions,
                  componentsTree: Gi.value.componentsTree,
                }),
                Mn(Wn, {
                  corner: v,
                  dimensions: Gi.value.dimensions,
                  lastDimensions: Gi.value.lastDimensions,
                  componentsTree: Gi.value.componentsTree,
                });
            };
          document.addEventListener("mousemove", m, { passive: !0 }),
            document.addEventListener("mouseup", g);
        }, []);
      return (
        Ve(() => {
          if (!e.current) return;
          (e.current.style.width = "min-content"),
            (r.current = 36),
            (n.current = e.current.offsetWidth),
            (e.current.style.maxWidth = "calc(100vw - 48px)"),
            (e.current.style.maxHeight = "calc(100vh - 48px)"),
            "focused" !== ll.inspectState.value.kind &&
              (Gi.value = {
                ...Gi.value,
                dimensions: {
                  isFullWidth: !1,
                  isFullHeight: !1,
                  width: n.current,
                  height: r.current,
                  position: Gi.value.dimensions.position,
                },
              }),
            (Wi.value = e.current);
          const i = Gi.subscribe((t) => {
            if (!e.current) return;
            const { x: n, y: r } = t.dimensions.position,
              { width: o, height: i } = t.dimensions,
              a = e.current;
            requestAnimationFrame(() => {
              (a.style.transform = `translate3d(${n}px, ${r}px, 0)`),
                (a.style.width = `${o}px`),
                (a.style.height = `${i}px`);
            });
          });
          Bi.subscribe(() => {
            o();
          }),
            Yi.subscribe(() => {
              o(!1);
            }),
            Xi.subscribe(() => {
              o();
            }),
            qi.subscribe(() => {
              o();
            });
          const a = ll.inspectState.subscribe((e) => {
              t.current &&
                ("inspecting" === e.kind &&
                  ((e, t) => {
                    for (const n of t) e.classList.toggle(n);
                  })(t.current, ["opacity-0", "duration-0", "delay-0"]),
                o());
            }),
            s = () => {
              o(!0);
            };
          return (
            window.addEventListener("resize", s, { passive: !0 }),
            () => {
              window.removeEventListener("resize", s),
                a(),
                i(),
                Mn(Wn, { ...Ji, corner: Gi.value.corner });
            }
          );
        }, []),
        Xn(pe, {
          children: [
            Xn(Gn, {}),
            Xn(Vi.Provider, {
              value: e.current,
              children: Xn("div", {
                id: "react-scan-toolbar",
                dir: "ltr",
                ref: e,
                onMouseDown: i,
                className: Tn(
                  "fixed inset-0 rounded-lg shadow-lg",
                  "flex flex-col",
                  "font-mono text-[13px]",
                  "user-select-none",
                  "opacity-0",
                  "cursor-move",
                  "z-[124124124124]",
                  "animate-fade-in animation-duration-300 animation-delay-300",
                  "will-change-transform",
                ),
                children: [
                  Xn(Di, { position: "top" }),
                  Xn(Di, { position: "bottom" }),
                  Xn(Di, { position: "left" }),
                  Xn(Di, { position: "right" }),
                  Xn("div", {
                    className: Tn(
                      "flex flex-1 flex-col",
                      "overflow-hidden z-10",
                      "rounded-lg",
                      "bg-black",
                      "opacity-100",
                      "transition-[border-radius]",
                      "peer-hover/left:rounded-l-none",
                      "peer-hover/right:rounded-r-none",
                      "peer-hover/top:rounded-t-none",
                      "peer-hover/bottom:rounded-b-none",
                    ),
                    children: [
                      Xn("div", {
                        ref: t,
                        className: Tn(
                          "relative",
                          "flex-1",
                          "flex flex-col",
                          "rounded-t-lg",
                          "overflow-hidden",
                          "opacity-100",
                          "transition-[opacity]",
                        ),
                        children: [
                          "focused" === ll.inspectState.value.kind &&
                            !Yi.value &&
                            Xn(Mi, {}),
                          Xn("div", {
                            className: Tn(
                              "relative",
                              "flex-1 flex",
                              "text-white",
                              "bg-[#0A0A0A]",
                              "transition-opacity delay-150",
                              "overflow-hidden",
                              "border-b border-white/10",
                            ),
                            children: [
                              "focused" === ll.inspectState.value.kind &&
                                !Yi.value &&
                                Xn(pe, { children: [Xn(xa, {}), Xn(zi, {})] }),
                              Xn(ri, {}),
                            ],
                          }),
                        ],
                      }),
                      Xn(Li, {}),
                    ],
                  }),
                ],
              }),
            }),
          ],
        })
      );
    },
    Vi = $e(null),
    Bi = pt(!1),
    Wi = pt(null),
    Yi = pt(!1),
    Xi = pt(!1),
    qi = pt(!1),
    Ji = {
      corner: "top-left",
      dimensions: {
        isFullWidth: !1,
        isFullHeight: !1,
        width: Un,
        height: Hn,
        position: { x: Ln, y: Ln },
      },
      lastDimensions: {
        isFullWidth: !1,
        isFullHeight: !1,
        width: Un,
        height: Hn,
        position: { x: Ln, y: Ln },
      },
      componentsTree: { width: Bn },
    },
    Gi = pt(
      (() => {
        const e = $n(Wn);
        return e
          ? {
              corner: e.corner ?? Ji.corner,
              dimensions: {
                isFullWidth: !1,
                isFullHeight: !1,
                width: Un,
                height: Hn,
                position: e.dimensions.position ?? Ji.dimensions.position,
              },
              lastDimensions: e.dimensions ?? Ji.dimensions,
              componentsTree: e.componentsTree ?? Ji.componentsTree,
            }
          : (Mn(Wn, {
              corner: Ji.corner,
              dimensions: Ji.dimensions,
              lastDimensions: Ji.lastDimensions,
              componentsTree: Ji.componentsTree,
            }),
            Ji);
      })(),
    ),
    Ki = () => {
      if ("undefined" == typeof window) return;
      const { dimensions: e } = Gi.value,
        { width: t, height: n, position: r } = e;
      Gi.value = {
        ...Gi.value,
        dimensions: {
          isFullWidth: t >= window.innerWidth - 48,
          isFullHeight: n >= window.innerHeight - 48,
          width: t,
          height: n,
          position: r,
        },
      };
    };
  function Zi() {
    return !1;
  }
  var Qi = er(({ children: e }) => {
      const t = We(null),
        n = We(null),
        r = We(!1),
        [o, i] = He(!1),
        a = We(0),
        s = Xe((e = !1) => {
          const n = Array.from(t.current?.children || []);
          if (!n.length) return;
          let r = 0;
          for (const t of n) {
            const n = t;
            n.dataset.sticky &&
              (e
                ? n.style.removeProperty("top")
                : n.style.setProperty("top", `${r}px`),
              (r += n.offsetHeight));
          }
        }, []);
      return e({
        refSticky: Xe(
          (e) => {
            if (!e)
              return void requestAnimationFrame(() => {
                s();
              });
            (n.current = e),
              (t.current = e.parentElement),
              (e.dataset.sticky = "true");
            (e.onclick = () => {
              e.dataset.disableScroll ||
                t.current?.scrollTo({
                  top: Number(e.style.top) ?? 0,
                  behavior: "smooth",
                });
            }),
              s();
            t.current?.addEventListener(
              "scroll",
              () => {
                cancelAnimationFrame(a.current),
                  (a.current = requestAnimationFrame(() => {
                    if (!e || !t.current) return;
                    const n = e.getBoundingClientRect(),
                      a = t.current.getBoundingClientRect(),
                      l = Number.parseInt(getComputedStyle(e).top);
                    r.current = t.current.scrollTop > 0;
                    const c = r.current && n.top <= a.top + l;
                    c !== o && i(c), s();
                  }));
              },
              { passive: !0 },
            );
          },
          [o, s],
        ),
        isSticky: o,
        calculateStickyTop: s,
      });
    }),
    ea = (e, t) => {
      "function" == typeof e ? e(t) : null !== e && (e.current = t);
    },
    ta = (...e) =>
      Xe(
        (
          (...e) =>
          (t) => {
            for (const n of e) n && ea(n, t);
          }
        )(...e),
        [...e],
      ),
    na = er(
      ({ text: e, children: t, onCopy: n, className: r, iconSize: o = 14 }) => {
        const i = We(),
          [a, s] = He(!1);
        Ve(() => {
          if (a)
            return (
              (i.current = setTimeout(() => s(!1), 600)),
              () => {
                clearTimeout(i.current);
              }
            );
        }, [a]);
        const l = Xe(
            (t) => {
              t.preventDefault(),
                t.stopPropagation(),
                navigator.clipboard.writeText(e).then(
                  () => {
                    s(!0), n?.(!0, e);
                  },
                  () => {
                    n?.(!1, e);
                  },
                );
            },
            [e, n],
          ),
          c = Xn("button", {
            onClick: l,
            type: "button",
            className: Tn(
              "z-10",
              "flex items-center justify-center",
              "hover:text-dev-pink-400",
              "transition-colors duration-200 ease-in-out",
              "cursor-pointer",
              `size-[${o}px]`,
              r,
            ),
            children: Xn(si, {
              name: "icon-" + (a ? "check" : "copy"),
              size: [o],
              className: Tn({ "text-green-500": a }),
            }),
          });
        return t ? t({ ClipboardIcon: c, onClick: l }) : c;
      },
    ),
    ra = ({ value: e, onSave: t, onCancel: n }) => {
      const r = We(null),
        [o, i] = He("");
      Ve(() => {
        let t = "";
        try {
          t =
            e instanceof Date
              ? e.toISOString().slice(0, 16)
              : e instanceof Map ||
                  e instanceof Set ||
                  e instanceof RegExp ||
                  e instanceof Error ||
                  e instanceof ArrayBuffer ||
                  ArrayBuffer.isView(e) ||
                  ("object" == typeof e && null !== e)
                ? La(e)
                : Va(e);
        } catch {
          t = String(e);
        }
        const n = Oa(t);
        i(n),
          requestAnimationFrame(() => {
            r.current &&
              (r.current.focus(),
              "string" == typeof e
                ? r.current.setSelectionRange(1, n.length - 1)
                : r.current.select());
          });
      }, [e]);
      const a = Xe((e) => {
        const t = e.target;
        t && i(t.value);
      }, []);
      return Xn("input", {
        ref: r,
        type: e instanceof Date ? "datetime-local" : "text",
        className: "react-scan-input flex-1",
        value: o,
        onChange: a,
        onKeyDown: (r) => {
          if ("Enter" === r.key) {
            r.preventDefault();
            try {
              let n;
              if (e instanceof Date) {
                const e = new Date(o);
                if (Number.isNaN(e.getTime())) throw new Error("Invalid date");
                n = e;
              } else {
                n = Ha(o).value;
              }
              t(n);
            } catch {
              n();
            }
          } else
            "Escape" === r.key &&
              (r.preventDefault(),
              r.stopPropagation(),
              r.stopImmediatePropagation(),
              n());
        },
        onBlur: n,
        step: e instanceof Date ? 1 : void 0,
      });
    },
    oa = ({
      name: e,
      value: t,
      section: n,
      level: r,
      parentPath: o,
      objectPathMap: i = new WeakMap(),
      changedKeys: a = new Set(),
      allowEditing: s = !0,
    }) => {
      const { updates: l, currentIndex: c } = pi.value,
        d = l[c],
        u = d?.fiberInfo,
        p = We(null),
        h = Ia(u.displayName, n, o ?? "", e),
        [f, m] = He(va.expandedPaths.has(h)),
        [g, w] = He(!1),
        v = !$t(va.lastRendered.get(h), t);
      Ve(() => {
        if ("children" === e) return;
        if ("context" === n) return;
        const o = !va.lastRendered.has(h),
          i = v && p.current && !o;
        va.lastRendered.set(h, t),
          i && p.current && 0 === r && ci.create(p.current);
      }, [t, v, h, r, e, n]);
      const b = Xe(() => {
          m((e) => {
            const t = !e;
            return t ? va.expandedPaths.add(h) : va.expandedPaths.delete(h), t;
          });
        }, [h]),
        x = Ye(
          () =>
            "object" == typeof t && null !== t && "displayValue" in t
              ? String(t.displayValue)
              : La(t),
          [t],
        ),
        y = Ye(() => {
          if ("object" == typeof t && null !== t) {
            if ("value" in t) return String(Ua(t.value));
            if ("displayValue" in t) return String(t.displayValue);
          }
          return String(Ua(t));
        }, [t]),
        k = Ye(() => {
          if (!t || "object" != typeof t) return !1;
          if ("type" in t) {
            const e = t;
            switch (e.type) {
              case "array":
              case "Map":
              case "Set":
                return (e.size ?? e.length ?? 0) > 0;
              case "object":
                return (e.size ?? 0) > 0;
              case "ArrayBuffer":
              case "DataView":
                return (e.byteLength ?? 0) > 0;
              case "circular":
              case "promise":
              case "function":
              case "error":
                return !1;
              default:
                return "entries" in e || "items" in e;
            }
          }
          return Pa(t);
        }, [t]),
        { overrideProps: _, overrideHookState: S } = Aa(),
        N = Ye(
          () =>
            !!s &&
            ("props" === n ? !!_ && "children" !== e : "state" === n && !!S),
          [n, _, S, s, e],
        ),
        C = Xe(() => {
          N && w(!0);
        }, [N]),
        E = Ye(
          () =>
            !(!t || "object" != typeof t || Qa(t)) &&
            "type" in t &&
            "circular" === t.type,
          [t],
        ),
        T = Xe(
          (e) => {
            if (!e || "object" != typeof e) return null;
            if ("type" in e) {
              const t = e;
              if ("entries" in t && t.entries) {
                const e = Object.entries(t.entries);
                return 0 === e.length
                  ? null
                  : Xn("div", {
                      className: "react-scan-nested",
                      children: e.map(([e, t]) =>
                        Xn(
                          oa,
                          {
                            name: e,
                            value: t,
                            section: n,
                            level: r + 1,
                            parentPath: h,
                            objectPathMap: i,
                            changedKeys: a,
                            allowEditing: s,
                          },
                          `${h}-entry-${e}`,
                        ),
                      ),
                    });
              }
              return "items" in t && Array.isArray(t.items)
                ? 0 === t.items.length
                  ? null
                  : Xn("div", {
                      className: "react-scan-nested",
                      children: t.items.map((e, t) => {
                        const o = `${h}-item-${e.type}-${t}`;
                        return Xn(
                          oa,
                          {
                            name: `${t}`,
                            value: e,
                            section: n,
                            level: r + 1,
                            parentPath: h,
                            objectPathMap: i,
                            changedKeys: a,
                            allowEditing: s,
                          },
                          o,
                        );
                      }),
                    })
                : null;
            }
            let t;
            if (e instanceof ArrayBuffer) {
              const n = new Uint8Array(e);
              t = Array.from(n).map((e, t) => [t, e]);
            } else if (e instanceof DataView) {
              const n = new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
              t = Array.from(n).map((e, t) => [t, e]);
            } else if (ArrayBuffer.isView(e))
              if (e instanceof BigInt64Array || e instanceof BigUint64Array)
                t = Array.from({ length: e.length }, (t, n) => [n, e[n]]);
              else {
                const n = e;
                t = Array.from(n).map((e, t) => [t, e]);
              }
            else
              t =
                e instanceof Map
                  ? Array.from(e.entries()).map(([e, t]) => [String(e), t])
                  : e instanceof Set
                    ? Array.from(e).map((e, t) => [t, e])
                    : Array.isArray(e)
                      ? e.map((e, t) => [`${t}`, e])
                      : Object.entries(e);
            if (0 === t.length) return null;
            const o = !(
              e instanceof DataView ||
              e instanceof ArrayBuffer ||
              ArrayBuffer.isView(e)
            );
            return Xn("div", {
              className: "react-scan-nested",
              children: t.map(([e, t]) => {
                const s = `${h}-${"number" == typeof e ? `item-${e}` : e}`;
                return Xn(
                  oa,
                  {
                    name: String(e),
                    value: t,
                    section: n,
                    level: r + 1,
                    parentPath: h,
                    objectPathMap: i,
                    changedKeys: a,
                    allowEditing: o,
                  },
                  s,
                );
              }),
            });
          },
          [n, r, h, i, a, s],
        );
      return Xn(
        "div",
        E
          ? {
              className: "react-scan-property",
              children: Xn("div", {
                className: "react-scan-property-content",
                children: Xn("div", {
                  className: "react-scan-preview-line",
                  children: [
                    Xn("div", {
                      className: "react-scan-key",
                      children: [e, ":"],
                    }),
                    Xn("span", {
                      className: "text-yellow-500",
                      children: "[Circular Reference]",
                    }),
                  ],
                }),
              }),
            }
          : {
              ref: p,
              className: "react-scan-property",
              children: Xn("div", {
                className: "react-scan-property-content",
                children: [
                  k &&
                    Xn("button", {
                      type: "button",
                      onClick: b,
                      className: "react-scan-arrow",
                      children: Xn(si, {
                        name: "icon-chevron-right",
                        size: 12,
                        className: Tn({ "rotate-90": f }),
                      }),
                    }),
                  Xn("div", {
                    className: Tn("group", "react-scan-preview-line", {
                      "react-scan-highlight": v,
                    }),
                    children: [
                      Xn("div", {
                        className: "react-scan-key",
                        children: [e, ":"],
                      }),
                      g && Da(t, o)
                        ? Xn(ra, {
                            value: t,
                            onSave: (t) =>
                              ((e, t, n) => {
                                const {
                                    updates: r,
                                    currentIndex: i,
                                    latestFiber: a,
                                  } = pi.value,
                                  s = r[i];
                                if (!a) return;
                                const {
                                  overrideProps: l,
                                  overrideHookState: c,
                                } = Aa();
                                l &&
                                  c &&
                                  ("props" === e
                                    ? An(() => {
                                        const e = a.memoizedProps || {};
                                        let r, i;
                                        o
                                          ? ((i = o
                                              .split(".")
                                              .filter(
                                                (e) =>
                                                  "props" !== e &&
                                                  e !== U(a.type),
                                              )),
                                            i.push(t),
                                            (r = i.reduce(
                                              (e, t) =>
                                                e && "object" == typeof e
                                                  ? e[t]
                                                  : {},
                                              e,
                                            )))
                                          : ((i = [t]), (r = e[t])),
                                          $t(r, n) ||
                                            (l(a, i, n),
                                            a.alternate &&
                                              l(a.alternate, i, n));
                                      }, null)
                                    : "state" === e &&
                                      An(() => {
                                        if (o) {
                                          const e = o.split("."),
                                            r = e.indexOf("state");
                                          if (-1 === r) return;
                                          const i = e.slice(r + 1),
                                            l = i[0],
                                            d = s.stateNames.indexOf(l),
                                            u = -1 !== d ? d.toString() : "0",
                                            p = s.state.current;
                                          if (
                                            !p ||
                                            !p.find((e) => e.name === Number(l))
                                          )
                                            return;
                                          const h = Ba(
                                            p.find((e) => e.name === Number(l))
                                              ?.value,
                                            i.slice(1).concat(t),
                                            n,
                                          );
                                          c(a, u, [], h);
                                        } else {
                                          const e = s.stateNames.indexOf(t),
                                            r = -1 !== e ? e.toString() : t;
                                          c(a, r, [], n);
                                        }
                                      }, null),
                                  w(!1));
                              })(n, e, t),
                            onCancel: () => w(!1),
                          })
                        : Xn("button", {
                            type: "button",
                            className: "truncate",
                            onClick: C,
                            children: x,
                          }),
                      Xn(na, {
                        text: y,
                        className:
                          "opacity-0 transition-opacity group-hover:opacity-100",
                        children: ({ ClipboardIcon: e }) =>
                          Xn(pe, { children: e }),
                      }),
                    ],
                  }),
                  Xn("div", {
                    className: Tn("react-scan-expandable", {
                      "react-scan-expanded": f,
                    }),
                    children:
                      k &&
                      f &&
                      Xn("div", {
                        className: "react-scan-nested",
                        children: T(t),
                      }),
                  }),
                ],
              }),
            },
      );
    },
    ia = ({ refSticky: e, isSticky: t, section: n }) => {
      const r = We(null),
        o = We(null),
        { updates: i, currentIndex: a } = pi.value,
        [s, l] = He(!0),
        c = ta(r, e),
        d = Ye(() => new WeakMap(), []),
        { currentData: u, changedKeys: p } = Ye(() => {
          const e = i[a] ?? {
            props: { current: {}, changes: new Set() },
            state: { current: {}, changes: new Set() },
            context: { current: {}, changes: new Set() },
          };
          switch (n) {
            case "props":
              return {
                currentData: e.props.current,
                changedKeys: e.props.changes,
              };
            case "state":
              return {
                currentData: e.state.current,
                changedKeys: e.state.changes,
              };
            case "context":
              return {
                currentData: e.context.current,
                changedKeys: e.context.changes,
              };
            default:
              return { currentData: {}, changedKeys: new Set() };
          }
        }, [n, a, i]),
        h = Xe(() => {
          l((e) => (t && s ? e : !e));
        }, [s, t]);
      if (
        !u ||
        (Array.isArray(u) ? 0 === u.length : 0 === Object.keys(u).length)
      )
        return null;
      const f = Array.isArray(u) ? u.length : Object.keys(u).length;
      return Xn(pe, {
        children: [
          Xn("button", {
            ref: c,
            type: "button",
            onClick: h,
            "data-sticky": !0,
            className: "react-section-header",
            children: [
              Xn("div", {
                className: "w-4 h-4 flex items-center justify-center",
                children: Xn(si, {
                  name: "icon-chevron-right",
                  size: 12,
                  className: Tn({ "rotate-90": s, "rotate-0": t && s }),
                }),
              }),
              Xn("span", {
                className: "capitalize",
                children: [n, " ", !s && f > 0 && `(${f})`],
              }),
            ],
          }),
          Xn("div", {
            ref: o,
            className: "react-scan-section",
            children: Xn("div", {
              className: Tn("react-scan-expandable", {
                "react-scan-expanded py-0.5": s,
              }),
              children: Xn("div", {
                className: "overflow-hidden",
                children: Array.isArray(u)
                  ? u.map(({ name: e, value: t }) =>
                      Xn(
                        oa,
                        {
                          name: e,
                          value: t,
                          section: n,
                          level: 0,
                          objectPathMap: d,
                          changedKeys: p,
                        },
                        e,
                      ),
                    )
                  : Object.entries(u).map(([e, t]) =>
                      Xn(
                        oa,
                        {
                          name: e,
                          value: t,
                          section: n,
                          level: 0,
                          objectPathMap: d,
                          changedKeys: p,
                        },
                        e,
                      ),
                    ),
              }),
            }),
          }),
        ],
      });
    },
    aa = ({ value: e, expanded: t, onToggle: n, isNegative: r }) => {
      const { value: o, error: i } = Ka(e),
        a = Ye(() => Math.random().toString(36).slice(2), []),
        [s, l] = He(new Set());
      if (i)
        return Xn("span", {
          className: "text-gray-500 font-italic",
          children: i,
        });
      const c = (e, t = "") => {
        if (null === e || "object" != typeof e)
          return Xn("span", { children: Ga(e) });
        const n = Object.entries(e),
          o = new WeakSet();
        return Xn("div", {
          children: n.map(([e, n], i) => {
            const d = t ? `${t}.${e}` : e,
              u = `${a}.${d}`,
              p = s.has(u),
              h = null !== n && "object" == typeof n;
            let f = !1;
            return (
              h && (o.has(n) ? (f = !0) : o.add(n)),
              Xn(
                "div",
                {
                  className: Tn({ "mt-1": i > 0 }),
                  children: [
                    Xn("div", {
                      className: "flex items-center gap-1",
                      children: [
                        h &&
                          !f &&
                          Xn("button", {
                            type: "button",
                            onClick: () => {
                              l((e) => {
                                const t = new Set(e);
                                return t.has(u) ? t.delete(u) : t.add(u), t;
                              });
                            },
                            className: Tn(
                              "flex items-center",
                              "p-0 mr-1",
                              "opacity-50",
                            ),
                            children: Xn(si, {
                              name: "icon-chevron-right",
                              size: 12,
                              className: Tn(
                                "transition-[transform,color]",
                                "text-[#4ade80]",
                                {
                                  "transform rotate-90": p,
                                  "text-[#f87171]": r,
                                },
                              ),
                            }),
                          }),
                        Xn("span", {
                          className: "text-gray-500",
                          children: [e, ":"],
                        }),
                        f
                          ? Xn("span", {
                              className: "text-gray-500 font-italic",
                              children: "[Circular]",
                            })
                          : h && p
                            ? null
                            : Xn("span", { children: Ga(n) }),
                      ],
                    }),
                    h && p && !f && c(n, d),
                  ],
                },
                e,
              )
            );
          }),
        });
      };
      return Xn("div", {
        className: "flex items-start gap-1",
        children: [
          null !== o &&
            "object" == typeof o &&
            !(o instanceof Promise) &&
            Xn("button", {
              type: "button",
              onClick: n,
              className: Tn(
                "flex items-center",
                "p-0 mt-0.5 mr-1",
                "opacity-50",
              ),
              children: Xn(si, {
                name: "icon-chevron-right",
                size: 12,
                className: Tn(
                  "transition-[transform,color]",
                  "text-[#4ade80]",
                  { "transform rotate-90": t, "text-[#f87171]": r },
                ),
              }),
            }),
          Xn("div", {
            className: "flex-1",
            children: t ? c(o) : Xn("span", { children: Ga(o) }),
          }),
          Xn(na, {
            text: Ua(o),
            className: "opacity-0 transition-opacity group-hover:opacity-100",
            children: ({ ClipboardIcon: e }) => Xn(pe, { children: e }),
          }),
        ],
      });
    },
    sa = ({
      value: e,
      min: t,
      max: n,
      onChange: r,
      className: o,
      totalUpdates: i = n + 1,
    }) => {
      const a = We(null),
        s = We(e),
        l = Xe(
          (e) => {
            if (!a.current) return;
            const r = Math.max(1, n - t),
              o = e - t,
              i = t === n ? 0 : Math.min(100, Math.round((o / r) * 100));
            a.current.style.setProperty("left", `${i}%`);
          },
          [t, n],
        );
      Ve(() => {
        l(e);
      }, [t, n, e]);
      const c = Xe(
        (e) => {
          const t = e.target,
            n = Number.parseInt(t.value, 10);
          n >= i || (s.current !== n && ((s.current = n), l(n), r(e)));
        },
        [r, l, i],
      );
      return Xn("div", {
        onMouseDown: (e) => {
          e.stopPropagation();
        },
        className: Tn("react-scan-slider relative", "flex-1", o),
        children: [
          Xn("input", {
            type: "range",
            value: e,
            min: t,
            max: n,
            onChange: c,
            className: Tn(
              "react-scan-slider",
              "flex-1",
              "h-1.5",
              "bg-gray-200",
              "rounded-lg",
              "appearance-none",
              "cursor-pointer",
              o,
            ),
          }),
          Xn("div", {
            className: Tn("absolute inset-0 right-2", "pointer-events-none"),
            children: Xn("span", { ref: a }),
          }),
        ],
      });
    },
    la = er(({ refSticky: e }) => {
      const t = We(null),
        n = We(null),
        {
          currentIndex: r,
          isVisible: o,
          totalUpdates: i,
          updates: a,
        } = pi.value,
        s = Ye(() => Za(i, r), [i, r]);
      Ve(
        () => () => {
          t.current && clearInterval(t.current),
            n.current && cancelAnimationFrame(n.current);
        },
        [],
      );
      const l = Xe(() => {
          o || gi();
        }, [o]),
        c = Xe((e) => {
          e.preventDefault(),
            e.stopPropagation(),
            t.current && (clearInterval(t.current), (t.current = null)),
            wi();
        }, []);
      return V()
        ? i <= 1
          ? null
          : Xn("button", {
              ref: e,
              type: "button",
              onClick: l,
              className: "react-section-header",
              "data-disable-scroll": "true",
              children: [
                Xn("button", {
                  type: "button",
                  onClick: o ? c : void 0,
                  title: o
                    ? "Hide Re-renders History"
                    : "View Re-renders History",
                  className: "w-4 h-4 flex items-center justify-center",
                  children: Xn(si, {
                    name: "icon-gallery-horizontal-end",
                    size: 12,
                  }),
                }),
                o
                  ? Xn(pe, {
                      children: [
                        Xn("div", {
                          className: "text-xs text-gray-500",
                          children: s.leftValue,
                        }),
                        Xn(sa, {
                          min: s.min,
                          max: s.max,
                          value: s.value,
                          onChange: async (e) => {
                            const t = e.target,
                              n = Number.parseInt(t.value, 10),
                              r = Math.min(a.length - 1, Math.max(0, n));
                            let o = !1;
                            r > 0 && r < a.length - 1 && (o = !0), vi(r, o);
                          },
                          className: "flex-1",
                          totalUpdates: s.rightValue + 1,
                        }),
                        Xn("div", {
                          className: "text-xs text-gray-500",
                          children: s.rightValue,
                        }),
                      ],
                    })
                  : "View Change History",
              ],
            })
        : null;
    }),
    ca = (e) => {
      if (null == e) return { value: e };
      if ("function" == typeof e) return { value: e };
      if ("object" != typeof e) return { value: e };
      if (Qa(e)) return { value: "Promise" };
      try {
        const t = Object.getPrototypeOf(e);
        return t === Promise.prototype || "Promise" === t?.constructor?.name
          ? { value: "Promise" }
          : { value: e };
      } catch {
        return { value: null, error: "Error accessing value" };
      }
    },
    da = er(() => {
      const e = We(!1),
        [t, n] = He(!0);
      return (
        Ve(() => {
          const t = pi.subscribe(async (t) => {
            cancelAnimationFrame(0);
            const { currentIndex: r, updates: o } = t;
            0 !== r
              ? o.length > 0 && (e.current || (e.current = !0), n(!0))
              : n(!1);
          });
          return () => {
            t(), cancelAnimationFrame(0);
          };
        }, []),
        Xn(pe, {
          children: [
            e.current && Xn(Qi, { children: (e) => Xn(la, { ...e }) }),
            Xn(Qi, { children: (e) => Xn(ua, { ...e, shouldShowChanges: t }) }),
          ],
        })
      );
    }),
    ua = er(
      ({
        isSticky: e,
        refSticky: t,
        calculateStickyTop: n,
        shouldShowChanges: r,
      }) => {
        const [o, i] = He(!0);
        return Xn(pe, {
          children: [
            Xn(pa, {
              refSticky: t,
              isSticky: e,
              calculateStickyTop: n,
              isExpanded: o,
              shouldShowChanges: r,
              setIsExpanded: i,
            }),
            Xn("div", {
              className: Tn("react-scan-expandable", {
                "react-scan-expanded": o,
              }),
              children: Xn("div", {
                className: "overflow-hidden",
                children:
                  r &&
                  Xn("div", {
                    className: Tn(
                      "relative",
                      "flex flex-col gap-y-2",
                      "pl-9 pr-2",
                      'before:content-[""] before:absolute before:inset-x-0 before:bottom-0 before:h-[1px] before:bg-[#333]',
                    ),
                    children: [
                      Xn(ha, { title: "Props", isExpanded: o }),
                      Xn(ha, { title: "State", isExpanded: o }),
                      Xn(ha, { title: "Context", isExpanded: o }),
                    ],
                  }),
              }),
            }),
          ],
        });
      },
    ),
    pa = er(
      ({
        refSticky: e,
        isSticky: t,
        calculateStickyTop: n,
        isExpanded: r,
        shouldShowChanges: o,
        setIsExpanded: i,
      }) => {
        const a = We(null),
          s = We(null),
          l = We(null),
          c = We({
            isPropsChanged: !1,
            isStateChanged: !1,
            isContextChanged: !1,
          });
        Ve(() => {
          const e = zn(() => {
            const e = [];
            "true" === a.current?.dataset.flash && e.push(a.current),
              "true" === s.current?.dataset.flash && e.push(s.current),
              "true" === l.current?.dataset.flash && e.push(l.current);
            for (const t of e)
              t.classList.remove("count-flash-white"),
                t.offsetWidth,
                t.classList.add("count-flash-white");
          }, 400);
          return pi.subscribe((t) => {
            if (!a.current || !s.current || !l.current) return;
            const { currentIndex: n, updates: r } = t,
              o = r[n];
            o &&
              0 !== n &&
              (e(),
              (c.current = {
                isPropsChanged: (o.props?.changes?.size ?? 0) > 0,
                isStateChanged: (o.state?.changes?.size ?? 0) > 0,
                isContextChanged: (o.context?.changes?.size ?? 0) > 0,
              }),
              "true" !== a.current.dataset.flash &&
                (a.current.dataset.flash = c.current.isPropsChanged.toString()),
              "true" !== s.current.dataset.flash &&
                (s.current.dataset.flash = c.current.isStateChanged.toString()),
              "true" !== l.current.dataset.flash &&
                (l.current.dataset.flash =
                  c.current.isContextChanged.toString()));
          });
        }, []);
        return Xn("button", {
          ref: e,
          type: "button",
          onClick: Xe(() => {
            i((e) => (t && r ? e : !e));
          }, [i, r, t]),
          onTransitionStart: Xe(
            (e) => {
              "max-height" === e.propertyName && n(!0);
            },
            [n],
          ),
          onTransitionEnd: Xe(
            (e) => {
              "max-height" === e.propertyName && n(!1);
            },
            [n],
          ),
          className: Tn(
            "react-section-header",
            "overflow-hidden",
            "max-h-0",
            "transition-[max-height]",
            { "max-h-8": o },
          ),
          children: Xn("div", {
            className: Tn("flex-1 react-scan-expandable", {
              "react-scan-expanded": o,
            }),
            children: Xn("div", {
              className: "overflow-hidden",
              children: Xn("div", {
                className: "flex items-center whitespace-nowrap",
                children: [
                  Xn("div", {
                    className: "flex items-center gap-x-2",
                    children: [
                      Xn("div", {
                        className: "w-4 h-4 flex items-center justify-center",
                        children: Xn(si, {
                          name: "icon-chevron-right",
                          size: 12,
                          className: Tn({ "rotate-90": r, "rotate-0": t && r }),
                        }),
                      }),
                      "What changed?",
                    ],
                  }),
                  Xn("div", {
                    className: Tn(
                      "ml-auto",
                      "change-scope",
                      "opacity-0",
                      "transition-opacity duration-300 delay-150",
                      { "opacity-100": !r },
                    ),
                    children: [
                      Xn("div", { ref: a, children: "props" }),
                      Xn("div", { ref: s, children: "state" }),
                      Xn("div", { ref: l, children: "context" }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      },
    ),
    ha = er(({ title: e, isExpanded: t }) => {
      const n = We(null),
        r = We(new Set()),
        o = We(new Map()),
        i = We([]),
        [a, s] = He([]),
        [l, c] = He(new Set()),
        [d, u] = He(new Set());
      Ve(
        () =>
          pi.subscribe((t) => {
            const { currentIndex: a, updates: l } = t,
              c = a >= 0 ? l[a] : null,
              d = a > 0 ? l[a - 1] : null,
              u = c?.[e.toLowerCase()],
              p = d?.[e.toLowerCase()];
            if (!u) return;
            (n.current = c?.fiberInfo), r.current.clear();
            const h = new Map(i.current.map((e) => [e.name, e]));
            for (const { name: e, value: t } of u.current) {
              const n = u.changesCounts?.get(e) ?? 0,
                i = p?.changesCounts?.get(e) ?? 0,
                a = Math.max(n, i),
                s = p?.current.find((t) => t.name === e)?.value,
                l = !$t(t, s);
              if (a > 0 || l) {
                const { value: n, error: i } = ca(s),
                  { value: l, error: c } = ca(t),
                  d = Wa(n, l);
                o.current.set(e, {
                  name: e,
                  prevValue: s,
                  currValue: t,
                  prevError: i,
                  currError: c,
                  diff: d,
                  isFunction: "function" == typeof t,
                });
                const u = { name: e, value: t, prevValue: s, count: a },
                  p = h.get(e);
                (p && p.count === a && $t(p.value, t)) || r.current.add(e),
                  h.set(e, u);
              }
            }
            (i.current = Array.from(h.values())), s(i.current);
          }),
        [e],
      );
      const p = Xe((e) => {
          u((t) => {
            const n = new Set(t);
            return n.has(String(e)) ? n.delete(String(e)) : n.add(String(e)), n;
          });
        }, []),
        h = Xe(
          (e) =>
            n.current
              ? ((e, t) => {
                  if (Number.isNaN(Number(e))) return e;
                  const n = Number.parseInt(e);
                  return Xn("span", {
                    children: [
                      n,
                      ((e) => {
                        const t = e % 100;
                        if (t >= 11 && t <= 13) return "th";
                        switch (e % 10) {
                          case 1:
                            return "st";
                          case 2:
                            return "nd";
                          case 3:
                            return "rd";
                          default:
                            return "th";
                        }
                      })(n),
                      " hook",
                      " ",
                      Xn("span", {
                        style: { color: "#666" },
                        children: [
                          "called in ",
                          Xn("i", {
                            className: "text-[#A855F7] truncate",
                            children: t,
                          }),
                        ],
                      }),
                    ],
                  });
                })(e, n.current.displayName)
              : e,
          [],
        );
      return 0 === a.length
        ? null
        : Xn("div", {
            className: "pb-2",
            children: [
              Xn("div", {
                className: "text-xs text-[#888] mb-1.5",
                children: e,
              }),
              Xn("div", {
                className: "flex flex-col gap-2",
                children: a.map((n) => {
                  const i = d.has(String(n.name)),
                    a = o.current.get(n.name);
                  return a
                    ? Xn(
                        "div",
                        {
                          children: [
                            Xn("button", {
                              type: "button",
                              onClick: () => p(String(n.name)),
                              className: Tn(
                                "relative",
                                "flex items-center gap-2",
                                "w-full p-0 cursor-pointer text-white text-xs",
                              ),
                              children: Xn("div", {
                                className: "flex items-center gap-1.5 flex-1",
                                children: [
                                  Xn(si, {
                                    name: "icon-chevron-right",
                                    size: 12,
                                    className: Tn(
                                      "text-[#666] transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
                                      { "rotate-90": i },
                                    ),
                                  }),
                                  Xn("div", {
                                    className:
                                      "whitespace-nowrap break-words text-left font-medium flex items-center gap-x-1.5",
                                    children: [
                                      h(String(n.name)),
                                      Xn(wa, {
                                        forceFlash: t && r.current.has(n.name),
                                        count: n.count,
                                        isFunction: a.isFunction,
                                        showWarning:
                                          0 === a.diff.changes.length,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            Xn("div", {
                              className: Tn(
                                "react-scan-expandable",
                                "overflow-hidden",
                                { "react-scan-expanded": i },
                              ),
                              children: Xn("div", {
                                className:
                                  "pl-3 text-xs font-mono border-l-1 border-[#333] overflow-hidden",
                                children: Xn("div", {
                                  className: "flex flex-col gap-0.5",
                                  children:
                                    a.prevError || a.currError
                                      ? Xn(fa, {
                                          currError: a.currError,
                                          prevError: a.prevError,
                                        })
                                      : a.diff.changes.length > 0
                                        ? Xn(ma, {
                                            title: e,
                                            change: n,
                                            diff: a.diff,
                                            expandedFns: l,
                                            renderName: h,
                                            setExpandedFns: c,
                                          })
                                        : Xn(ga, {
                                            currValue: a.currValue,
                                            entryKey: n.name,
                                            expandedFns: l,
                                            prevValue: a.prevValue,
                                            setExpandedFns: c,
                                          }),
                                }),
                              }),
                            }),
                          ],
                        },
                        n.name,
                      )
                    : null;
                }),
              }),
            ],
          });
    }),
    fa = ({ prevError: e, currError: t }) =>
      Xn(pe, {
        children: [
          e &&
            Xn("div", {
              className:
                "text-[#f87171] bg-[#2a1515] px-1.5 py-[3px] rounded-[2px] italic",
              children: e,
            }),
          t &&
            Xn("div", {
              className:
                "text-[#4ade80] bg-[#1a2a1a] px-1.5 py-[3px] rounded-[2px] italic mt-0.5",
              children: t,
            }),
        ],
      }),
    ma = ({
      diff: e,
      title: t,
      renderName: n,
      change: r,
      expandedFns: o,
      setExpandedFns: i,
    }) =>
      e.changes.map((a, s) => {
        const { value: l, error: c } = ca(a.prevValue),
          { value: d, error: u } = ca(a.currentValue),
          p = "function" == typeof l || "function" == typeof d;
        let h;
        return (
          "Props" === t &&
            (h =
              a.path.length > 0
                ? `${n(String(r.name))}.${Ya(a.path)}`
                : void 0),
          "State" === t && a.path.length > 0 && (h = `state.${Ya(a.path)}`),
          h || (h = Ya(a.path)),
          Xn(
            "div",
            {
              className: Tn("flex flex-col gap-y-1", {
                "mb-4": s < e.changes.length - 1,
              }),
              children: [
                h &&
                  Xn("div", {
                    className: "text-[#666] text-[10px]",
                    children: h,
                  }),
                Xn("button", {
                  type: "button",
                  className: Tn(
                    "group",
                    "flex items-start",
                    "py-[3px] px-1.5",
                    "text-left text-[#f87171] bg-[#2a1515]",
                    "rounded-[2px]",
                    "overflow-hidden break-all",
                    p && "cursor-pointer",
                  ),
                  onClick: p
                    ? () => {
                        const e = `${Ya(a.path)}-prev`;
                        i((t) => {
                          const n = new Set(t);
                          return n.has(e) ? n.delete(e) : n.add(e), n;
                        });
                      }
                    : void 0,
                  children: [
                    Xn("span", { className: "w-3 opacity-50", children: "-" }),
                    Xn("span", {
                      className: "flex-1 whitespace-nowrap font-mono",
                      children: c
                        ? Xn("span", {
                            className: "italic text-[#f87171]",
                            children: c,
                          })
                        : p
                          ? Xn("div", {
                              className: "flex gap-1 items-start flex-col",
                              children: [
                                Xn("div", {
                                  className: "flex gap-1 items-start w-full",
                                  children: [
                                    Xn("span", {
                                      className: "flex-1 max-h-40",
                                      children: Ja(
                                        l,
                                        o.has(`${Ya(a.path)}-prev`),
                                      ),
                                    }),
                                    "function" == typeof l &&
                                      Xn(na, {
                                        text: l.toString(),
                                        className:
                                          "opacity-0 transition-opacity group-hover:opacity-100",
                                        children: ({ ClipboardIcon: e }) =>
                                          Xn(pe, { children: e }),
                                      }),
                                  ],
                                }),
                                l?.toString() === d?.toString() &&
                                  Xn("div", {
                                    className: "text-[10px] text-[#666] italic",
                                    children: "Function reference changed",
                                  }),
                              ],
                            })
                          : Xn(aa, {
                              value: l,
                              expanded: o.has(`${Ya(a.path)}-prev`),
                              onToggle: () => {
                                const e = `${Ya(a.path)}-prev`;
                                i((t) => {
                                  const n = new Set(t);
                                  return n.has(e) ? n.delete(e) : n.add(e), n;
                                });
                              },
                              isNegative: !0,
                            }),
                    }),
                  ],
                }),
                Xn("button", {
                  type: "button",
                  className: Tn(
                    "group",
                    "flex items-start",
                    "py-[3px] px-1.5",
                    "text-left text-[#4ade80] bg-[#1a2a1a]",
                    "rounded-[2px]",
                    "overflow-hidden break-all",
                    p && "cursor-pointer",
                  ),
                  onClick: p
                    ? () => {
                        const e = `${Ya(a.path)}-current`;
                        i((t) => {
                          const n = new Set(t);
                          return n.has(e) ? n.delete(e) : n.add(e), n;
                        });
                      }
                    : void 0,
                  children: [
                    Xn("span", { className: "w-3 opacity-50", children: "+" }),
                    Xn("span", {
                      className: "flex-1 whitespace-pre-wrap font-mono",
                      children: u
                        ? Xn("span", {
                            className: "italic text-[#4ade80]",
                            children: u,
                          })
                        : p
                          ? Xn("div", {
                              className: "flex gap-1 items-start flex-col",
                              children: [
                                Xn("div", {
                                  className: "flex gap-1 items-start w-full",
                                  children: [
                                    Xn("span", {
                                      className: "flex-1",
                                      children: Ja(
                                        d,
                                        o.has(`${Ya(a.path)}-current`),
                                      ),
                                    }),
                                    "function" == typeof d &&
                                      Xn(na, {
                                        text: d.toString(),
                                        className:
                                          "opacity-0 transition-opacity group-hover:opacity-100",
                                        children: ({ ClipboardIcon: e }) =>
                                          Xn(pe, { children: e }),
                                      }),
                                  ],
                                }),
                                l?.toString() === d?.toString() &&
                                  Xn("div", {
                                    className: "text-[10px] text-[#666] italic",
                                    children: "Function reference changed",
                                  }),
                              ],
                            })
                          : Xn(aa, {
                              value: d,
                              expanded: o.has(`${Ya(a.path)}-current`),
                              onToggle: () => {
                                const e = `${Ya(a.path)}-current`;
                                i((t) => {
                                  const n = new Set(t);
                                  return n.has(e) ? n.delete(e) : n.add(e), n;
                                });
                              },
                              isNegative: !1,
                            }),
                    }),
                  ],
                }),
              ],
            },
            `${h}-${r.name}-${s}`,
          )
        );
      }),
    ga = ({
      prevValue: e,
      currValue: t,
      entryKey: n,
      expandedFns: r,
      setExpandedFns: o,
    }) =>
      Xn(pe, {
        children: [
          Xn("div", {
            className:
              "group flex items-start text-[#f87171] bg-[#2a1515] py-[3px] px-1.5 rounded-[2px]",
            children: [
              Xn("span", { className: "w-3 opacity-50", children: "-" }),
              Xn("span", {
                className: "flex-1 whitespace-pre-wrap font-mono",
                children: Xn(aa, {
                  value: e,
                  expanded: r.has(`${String(n)}-prev`),
                  onToggle: () => {
                    const e = `${String(n)}-prev`;
                    o((t) => {
                      const n = new Set(t);
                      return n.has(e) ? n.delete(e) : n.add(e), n;
                    });
                  },
                  isNegative: !0,
                }),
              }),
            ],
          }),
          Xn("div", {
            className:
              "group flex items-start text-[#4ade80] bg-[#1a2a1a] py-[3px] px-1.5 rounded-[2px] mt-0.5",
            children: [
              Xn("span", { className: "w-3 opacity-50", children: "+" }),
              Xn("span", {
                className: "flex-1 whitespace-pre-wrap font-mono",
                children: Xn(aa, {
                  value: t,
                  expanded: r.has(`${String(n)}-current`),
                  onToggle: () => {
                    const e = `${String(n)}-current`;
                    o((t) => {
                      const n = new Set(t);
                      return n.has(e) ? n.delete(e) : n.add(e), n;
                    });
                  },
                  isNegative: !1,
                }),
              }),
            ],
          }),
          "object" == typeof t &&
            null !== t &&
            Xn("div", {
              className: "text-[#666] text-[10px] italic mt-1",
              children: "Reference changed but objects are the same",
            }),
        ],
      }),
    wa = ({ count: e, forceFlash: t, isFunction: n, showWarning: r }) => {
      const o = We(),
        i = We(!0),
        a = We(null),
        s = We(e);
      return (
        Ve(() => {
          const t = a.current;
          t &&
            s.current !== e &&
            (t.classList.remove("count-flash"),
            t.offsetWidth,
            t.classList.add("count-flash"),
            (s.current = e));
        }, [e]),
        Ve(() => {
          if (!i.current)
            return (
              t &&
                (o.current = setTimeout(() => {
                  a.current?.classList.add("count-flash-white"),
                    (o.current = setTimeout(() => {
                      a.current?.classList.remove("count-flash-white");
                    }, 300));
                }, 500)),
              () => {
                clearTimeout(o.current);
              }
            );
          i.current = !1;
        }, [t]),
        Xn("div", {
          ref: a,
          className: "count-badge",
          children: [
            r &&
              Xn(si, {
                name: "icon-triangle-alert",
                className: "text-yellow-500 mb-px",
                size: 14,
              }),
            n &&
              Xn(si, {
                name: "icon-function",
                className: "text-[#A855F7] mb-px",
                size: 14,
              }),
            "x",
            e,
          ],
        })
      );
    },
    va = {
      lastRendered: new Map(),
      expandedPaths: new Set(),
      cleanup: () => {
        va.lastRendered.clear(),
          va.expandedPaths.clear(),
          ci.cleanupAll(),
          cs(),
          xi();
      },
    },
    ba = class extends he {
      constructor() {
        super(...arguments),
          (this.state = { hasError: !1, error: null }),
          (this.handleReset = () => {
            this.setState({ hasError: !1, error: null }), va.cleanup();
          });
      }
      static getDerivedStateFromError(e) {
        return { hasError: !0, error: e };
      }
      render() {
        return this.state.hasError
          ? Xn("div", {
              className: "p-4 bg-red-950/50 h-screen backdrop-blur-sm",
              children: [
                Xn("div", {
                  className:
                    "flex items-center gap-2 mb-3 text-red-400 font-medium",
                  children: [
                    Xn(si, {
                      name: "icon-flame",
                      className: "text-red-500",
                      size: 16,
                    }),
                    "Something went wrong in the inspector",
                  ],
                }),
                Xn("div", {
                  className:
                    "p-3 bg-black/40 rounded font-mono text-xs text-red-300 mb-4 break-words",
                  children:
                    this.state.error?.message ||
                    JSON.stringify(this.state.error),
                }),
                Xn("button", {
                  type: "button",
                  onClick: this.handleReset,
                  className:
                    "px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2",
                  children: "Reset Inspector",
                }),
              ],
            })
          : this.props.children;
      }
    },
    xa = (function (e) {
      function t(t) {
        return (this.shouldComponentUpdate = Zi), de(e, t);
      }
      return (
        (t.displayName = `Memo(${e.displayName || e.name})`),
        (t.prototype.isReactComponent = !0),
        (t._forwarded = !0),
        t
      );
    })(() => {
      const e = We(null),
        t = We(null),
        n = Bi.value;
      return (
        Ve(() => {
          const e = (e) => {
              if (!e) return;
              t.current = e;
              const { data: n, shouldUpdate: r } = gs(e);
              if (r) {
                const t = {
                  timestamp: Date.now(),
                  fiberInfo: ts(e),
                  props: n.fiberProps,
                  state: n.fiberState,
                  context: n.fiberContext,
                  stateNames: ls(e),
                };
                bi(t, e);
              }
            },
            n = ll.inspectState.subscribe((n) => {
              if ("focused" !== n.kind || !n.focusedDomElement)
                return (t.current = null), void va.cleanup();
              "focused" === n.kind && (Bi.value = !1);
              const { parentCompositeFiber: r } = Ta(
                n.focusedDomElement,
                n.fiber,
              );
              if (!r) return;
              t.current?.type !== r.type &&
                ((t.current = r), va.cleanup(), e(r));
            }),
            r = hi.subscribe(() => {
              const n = ll.inspectState.value;
              if ("focused" !== n.kind || !n.focusedDomElement)
                return (t.current = null), void va.cleanup();
              const { parentCompositeFiber: r } = Ta(
                n.focusedDomElement,
                n.fiber,
              );
              r
                ? (e(r),
                  n.focusedDomElement.isConnected ||
                    ((t.current = null),
                    va.cleanup(),
                    (ll.inspectState.value = {
                      kind: "inspecting",
                      hoveredDomElement: null,
                    })))
                : (ll.inspectState.value = { kind: "inspect-off" });
            });
          return () => {
            n(), r(), va.cleanup();
          };
        }, []),
        Xn(ba, {
          children: Xn("div", {
            ref: e,
            className: Tn(
              "react-scan-inspector",
              "flex-1",
              "opacity-0",
              "overflow-y-auto overflow-x-hidden",
              "transition-opacity delay-0",
              "pointer-events-none",
              { "opacity-100 delay-300 pointer-events-auto": !n },
            ),
            children: [
              Xn(da, {}),
              Xn(Qi, { children: (e) => Xn(ia, { section: "props", ...e }) }),
              Xn(Qi, { children: (e) => Xn(ia, { section: "state", ...e }) }),
              Xn(Qi, { children: (e) => Xn(ia, { section: "context", ...e }) }),
            ],
          }),
        })
      );
    }),
    ya = (e) => {
      if ("__REACT_DEVTOOLS_GLOBAL_HOOK__" in window) {
        const t = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!t?.renderers) return null;
        for (const [, n] of Array.from(t.renderers))
          try {
            const t = n.findFiberByHostInstance?.(e);
            if (t) return t;
          } catch {}
      }
      if ("_reactRootContainer" in e) {
        const t = e._reactRootContainer;
        return t?._internalRoot?.current?.child ?? null;
      }
      for (const t in e)
        if (
          t.startsWith("__reactInternalInstance$") ||
          t.startsWith("__reactFiber")
        ) {
          return e[t];
        }
      return null;
    },
    ka = (e) => {
      let t = e;
      for (; t; ) {
        if (t.stateNode instanceof Element) return t.stateNode;
        if (!t.child) break;
        t = t.child;
      }
      for (; t; ) {
        if (t.stateNode instanceof Element) return t.stateNode;
        if (!t.return) break;
        t = t.return;
      }
      return null;
    },
    _a = (e) => {
      if (!e) return null;
      try {
        const t = ya(e);
        if (!t) return null;
        const n = Sa(t);
        return n ? n[0] : null;
      } catch {
        return null;
      }
    },
    Sa = (e) => {
      let t = e,
        n = null;
      for (; t; ) {
        if (F(t)) return [t, n];
        M(t) && !n && (n = t), (t = t.return);
      }
      return null;
    },
    Na = (e, t) => !!D(t, (t) => t === e),
    Ca = async (e) => {
      const t = _a(e);
      if (!t) return null;
      const n = ka(t);
      if (!n) return null;
      const r = (
        await ((o = [n]),
        new Promise((e) => {
          const t = new Map(),
            n = new IntersectionObserver((r) => {
              for (const e of r) {
                const n = e.target,
                  r = e.boundingClientRect;
                t.set(n, r);
              }
              n.disconnect(), e(t);
            });
          for (const e of o) n.observe(e);
        }))
      ).get(n);
      var o;
      return r || null;
    },
    Ea = (e) => {
      const t = _a(e);
      if (!t) return {};
      if (!ka(t)) return {};
      const n = Sa(t);
      if (!n) return {};
      const [r] = n;
      return { parentCompositeFiber: r };
    },
    Ta = (e, t) => {
      if (!e.isConnected) return {};
      let n = t ?? _a(e);
      if (!n) return {};
      let r = n,
        o = null,
        i = null;
      for (; r; )
        if (r.stateNode) {
          if (cl.instrumentation?.fiberRoots.has(r.stateNode)) {
            (o = r), (i = r.stateNode.current);
            break;
          }
          r = r.return;
        } else r = r.return;
      if (!o || !i) return {};
      if (((n = Na(n, i) ? n : (n.alternate ?? n)), !n)) return {};
      if (!ka(n)) return {};
      const a = Sa(n)?.[0];
      return a
        ? { parentCompositeFiber: Na(a, i) ? a : (a.alternate ?? a) }
        : {};
    },
    za = (e) => null !== e && "object" == typeof e,
    Aa = () => {
      let e = null,
        t = null,
        n = null;
      if ("__REACT_DEVTOOLS_GLOBAL_HOOK__" in window) {
        const r = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!r?.renderers)
          return {
            overrideProps: null,
            overrideHookState: null,
            overrideContext: null,
          };
        for (const [, o] of Array.from(r.renderers))
          try {
            const r = o;
            if (t) {
              const e = t;
              t = (t, n, o, i) => {
                let a = t.memoizedState;
                for (let e = 0; e < Number(n) && a?.next; e++) a = a.next;
                if (a?.queue) {
                  const e = a.queue;
                  if (za(e) && "dispatch" in e) {
                    return void (0, e.dispatch)(i);
                  }
                }
                e(t, n, o, i), r.overrideHookState?.(t, n, o, i);
              };
            } else r.overrideHookState && (t = r.overrideHookState);
            if (e) {
              const t = e;
              e = (e, n, o) => {
                t(e, n, o), r.overrideProps?.(e, n, o);
              };
            } else r.overrideProps && (e = r.overrideProps);
            n = (t, n, r) => {
              let o = t;
              for (; o; ) {
                const t = o.type;
                if (t === n || t?.Provider === n) {
                  e &&
                    (e(o, ["value"], r),
                    o.alternate && e(o.alternate, ["value"], r));
                  break;
                }
                o = o.return;
              }
            };
          } catch {}
      }
      return { overrideProps: e, overrideHookState: t, overrideContext: n };
    },
    $a = new Set([
      "HTML",
      "HEAD",
      "META",
      "TITLE",
      "BASE",
      "SCRIPT",
      "SCRIPT",
      "STYLE",
      "LINK",
      "NOSCRIPT",
      "SOURCE",
      "TRACK",
      "EMBED",
      "OBJECT",
      "PARAM",
      "TEMPLATE",
      "PORTAL",
      "SLOT",
      "AREA",
      "XML",
      "DOCTYPE",
      "COMMENT",
    ]),
    Ma = (e, t = !0) => {
      if (e.stateNode && "nodeType" in e.stateNode) {
        const n = e.stateNode;
        return t && n.tagName && $a.has(n.tagName.toLowerCase()) ? null : n;
      }
      let n = e.child;
      for (; n; ) {
        const e = Ma(n, t);
        if (e) return e;
        n = n.sibling;
      }
      return null;
    },
    Fa = (e = document.body) => {
      const t = [],
        n = (e, r = 0) => {
          const o = ((e) => {
            if (!e) return null;
            const { parentCompositeFiber: t } = Ea(e);
            return t && Ma(t) === e ? e : null;
          })(e);
          if (o) {
            const { parentCompositeFiber: e } = Ea(o);
            if (!e) return;
            t.push({
              element: o,
              depth: r,
              name: U(e.type) ?? "Unknown",
              fiber: e,
            });
          }
          for (const t of Array.from(e.children)) n(t, o ? r + 1 : r);
        };
      return n(e), t;
    },
    Ra = new WeakMap(),
    ja = (e) => {
      const t = [],
        n = (e) => {
          if (!e) return null;
          const { parentCompositeFiber: t } = Ea(e);
          if (!t) return null;
          return Ma(t) === e ? (Ra.set(e, t), e) : null;
        };
      let r = e;
      for (; r && r !== document.body; ) {
        const e = n(r);
        if (e) {
          const n = Ra.get(e);
          n &&
            t.unshift({
              element: e,
              depth: 0,
              name: U(n.type) ?? "Unknown",
              fiber: n,
            });
        }
        r = r.parentElement;
      }
      return t;
    },
    Pa = (e) =>
      null !== e &&
      "object" == typeof e &&
      !Qa(e) &&
      (e instanceof ArrayBuffer ||
        e instanceof DataView ||
        !!ArrayBuffer.isView(e) ||
        (e instanceof Map || e instanceof Set
          ? e.size > 0
          : Array.isArray(e)
            ? e.length > 0
            : Object.keys(e).length > 0)),
    Da = (e, t) => {
      if (null == e) return !0;
      if (Qa(e)) return !1;
      if ("function" == typeof e) return !1;
      if (t) {
        const e = t.split(".");
        let n = "";
        for (const t of e) {
          n = n ? `${n}.${t}` : t;
          const e = va.lastRendered.get(n);
          if (
            e instanceof DataView ||
            e instanceof ArrayBuffer ||
            ArrayBuffer.isView(e)
          )
            return !1;
        }
      }
      switch (e.constructor) {
        case Date:
        case RegExp:
        case Error:
          return !0;
        default:
          switch (typeof e) {
            case "string":
            case "number":
            case "boolean":
            case "bigint":
              return !0;
            default:
              return !1;
          }
      }
    },
    Ia = (e, t, n, r) =>
      n
        ? `${e}.${n}.${r}`
        : "context" !== t || r.startsWith("context.")
          ? `${e}.${t}.${r}`
          : `${e}.${t}.context.${r}`,
    Oa = (e) =>
      e
        .replace(/[<>]/g, "")
        .replace(/javascript:/gi, "")
        .replace(/data:/gi, "")
        .replace(/on\w+=/gi, "")
        .slice(0, 5e4),
    La = (e) => es(e).displayValue,
    Ua = (e) => {
      try {
        if (null === e) return "null";
        if (void 0 === e) return "undefined";
        if (Qa(e)) return "Promise";
        if ("function" == typeof e) {
          const t = e.toString();
          try {
            return t
              .replace(/\s+/g, " ")
              .replace(/{\s+/g, "{\n  ")
              .replace(/;\s+/g, ";\n  ")
              .replace(/}\s*$/g, "\n}")
              .replace(/\(\s+/g, "(")
              .replace(/\s+\)/g, ")")
              .replace(/,\s+/g, ", ");
          } catch {
            return t;
          }
        }
        switch (!0) {
          case e instanceof Date:
            return e.toISOString();
          case e instanceof RegExp:
            return e.toString();
          case e instanceof Error:
            return `${e.name}: ${e.message}`;
          case e instanceof Map:
            return JSON.stringify(Array.from(e.entries()), null, 2);
          case e instanceof Set:
            return JSON.stringify(Array.from(e), null, 2);
          case e instanceof DataView:
            return JSON.stringify(
              Array.from(new Uint8Array(e.buffer)),
              null,
              2,
            );
          case e instanceof ArrayBuffer:
            return JSON.stringify(Array.from(new Uint8Array(e)), null, 2);
          case ArrayBuffer.isView(e) && "length" in e:
            return JSON.stringify(Array.from(e), null, 2);
          case Array.isArray(e):
          case "object" == typeof e:
            return JSON.stringify(e, null, 2);
          default:
            return String(e);
        }
      } catch {
        return String(e);
      }
    },
    Ha = (e) => {
      const t = e.trim();
      switch (t) {
        case "undefined":
          return { type: "undefined", value: void 0 };
        case "null":
          return { type: "null", value: null };
        case "true":
          return { type: "boolean", value: !0 };
        case "false":
          return { type: "boolean", value: !1 };
      }
      return /^".*"$/.test(t)
        ? { type: "string", value: t.slice(1, -1) }
        : /^-?\d+(?:\.\d+)?$/.test(t)
          ? { type: "number", value: Number(t) }
          : { type: "string", value: `"${t}"` };
    },
    Va = (e) =>
      void 0 === e
        ? "undefined"
        : null === e
          ? "null"
          : "string" == typeof e
            ? `"${e}"`
            : String(e),
    Ba = (e, t, n) => {
      try {
        if (0 === t.length) return n;
        const [r, ...o] = t;
        if (Array.isArray(e) && e.every((e) => "name" in e && "value" in e)) {
          const t = e.findIndex((e) => e.name === r);
          if (-1 === t) return e;
          const i = [...e];
          return (
            0 === o.length
              ? (i[t] = { ...i[t], value: n })
              : (i[t] = { ...i[t], value: Ba(i[t].value, o, n) }),
            i
          );
        }
        if (e instanceof Map) {
          const t = new Map(e);
          if (0 === o.length) t.set(r, n);
          else {
            const e = t.get(r);
            t.set(r, Ba(e, o, n));
          }
          return t;
        }
        if (Array.isArray(e)) {
          const t = Number.parseInt(r, 10),
            i = [...e];
          return 0 === o.length ? (i[t] = n) : (i[t] = Ba(e[t], o, n)), i;
        }
        return e && "object" == typeof e
          ? 0 === o.length
            ? { ...e, [r]: n }
            : { ...e, [r]: Ba(e[r], o, n) }
          : n;
      } catch {
        return e;
      }
    },
    Wa = (e, t, n = [], r = new WeakSet()) => {
      if (e === t)
        return { type: "primitive", changes: [], hasDeepChanges: !1 };
      if ("function" == typeof e && "function" == typeof t) {
        const r = ((e, t) => {
          try {
            return (
              "function" == typeof e &&
              "function" == typeof t &&
              e.toString() === t.toString()
            );
          } catch {
            return !1;
          }
        })(e, t);
        return {
          type: "primitive",
          changes: [
            { path: n, prevValue: e, currentValue: t, sameFunction: r },
          ],
          hasDeepChanges: !r,
        };
      }
      if (
        null === e ||
        null === t ||
        void 0 === e ||
        void 0 === t ||
        "object" != typeof e ||
        "object" != typeof t
      )
        return {
          type: "primitive",
          changes: [{ path: n, prevValue: e, currentValue: t }],
          hasDeepChanges: !0,
        };
      if (r.has(e) || r.has(t))
        return {
          type: "object",
          changes: [
            { path: n, prevValue: "[Circular]", currentValue: "[Circular]" },
          ],
          hasDeepChanges: !1,
        };
      r.add(e), r.add(t);
      const o = e,
        i = t,
        a = new Set([...Object.keys(o), ...Object.keys(i)]),
        s = [];
      let l = !1;
      for (const e of a) {
        const t = o[e],
          a = i[e];
        if (t !== a)
          if (
            "object" == typeof t &&
            "object" == typeof a &&
            null !== t &&
            null !== a
          ) {
            const o = Wa(t, a, [...n, e], r);
            s.push(...o.changes), o.hasDeepChanges && (l = !0);
          } else
            s.push({ path: [...n, e], prevValue: t, currentValue: a }),
              (l = !0);
      }
      return { type: "object", changes: s, hasDeepChanges: l };
    },
    Ya = (e) =>
      0 === e.length
        ? ""
        : e.reduce(
            (e, t, n) =>
              /^\d+$/.test(t) ? `${e}[${t}]` : 0 === n ? t : `${e}.${t}`,
            "",
          );
  var Xa,
    qa,
    Ja = (e, t = !1) => {
      try {
        const n = e.toString(),
          r = n.match(/(?:function\s*)?(?:\(([^)]*)\)|([^=>\s]+))\s*=>?/);
        if (!r) return "ƒ";
        const o = (r[1] || r[2] || "").replace(/\s+/g, "");
        return t
          ? (function (e) {
              const t = e.replace(/\s+/g, " ").trim(),
                n = [];
              let r = "";
              for (let e = 0; e < t.length; e++) {
                const o = t[e];
                "=" !== o || ">" !== t[e + 1]
                  ? /[(){}[\];,<>:\?!]/.test(o)
                    ? (r.trim() && n.push(r.trim()), n.push(o), (r = ""))
                    : /\s/.test(o)
                      ? (r.trim() && n.push(r.trim()), (r = ""))
                      : (r += o)
                  : (r.trim() && n.push(r.trim()), n.push("=>"), (r = ""), e++);
              }
              r.trim() && n.push(r.trim());
              const o = [];
              for (let e = 0; e < n.length; e++) {
                const t = n[e],
                  r = n[e + 1];
                ("(" === t && ")" === r) ||
                ("[" === t && "]" === r) ||
                ("{" === t && "}" === r) ||
                ("<" === t && ">" === r)
                  ? (o.push(t + r), e++)
                  : o.push(t);
              }
              const i = new Set(),
                a = new Set();
              function s(e, t, n) {
                let r = 0;
                for (let i = n; i < o.length; i++) {
                  const n = o[i];
                  if (n === e) r++;
                  else if (n === t && (r--, 0 === r)) return i;
                }
                return -1;
              }
              for (let e = 0; e < o.length; e++)
                if ("(" === o[e]) {
                  const t = s("(", ")", e);
                  if (-1 !== t && "=>" === o[t + 1])
                    for (let n = e; n <= t; n++) i.add(n);
                }
              for (let e = 1; e < o.length; e++) {
                const t = o[e - 1],
                  n = o[e];
                if (/^[a-zA-Z0-9_$]+$/.test(t) && "<" === n) {
                  const t = s("<", ">", e);
                  if (-1 !== t) for (let n = e; n <= t; n++) a.add(n);
                }
              }
              let l = 0;
              const c = [];
              let d = "";
              function u() {
                d.trim() && c.push(d.replace(/\s+$/, "")), (d = "");
              }
              function p() {
                u(), (d = "  ".repeat(l));
              }
              const h = [];
              function f() {
                return h.length ? h[h.length - 1] : null;
              }
              function m(e, t = !1) {
                d.trim()
                  ? t || /^[),;:\].}>]$/.test(e)
                    ? (d += e)
                    : (d += ` ${e}`)
                  : (d += e);
              }
              for (let e = 0; e < o.length; e++) {
                const t = o[e],
                  n = o[e + 1] || "";
                if (["(", "{", "[", "<"].includes(t))
                  m(t),
                    h.push(t),
                    "{" === t
                      ? (l++, p())
                      : ("(" !== t && "[" !== t && "<" !== t) ||
                        (i.has(e) && "(" === t) ||
                        (a.has(e) && "<" === t) ||
                        (n !== { "(": ")", "[": "]", "<": ">" }[t] &&
                          "()" !== n &&
                          "[]" !== n &&
                          "<>" !== n &&
                          (l++, p()));
                else if ([")", "}", "]", ">"].includes(t)) {
                  const n = f();
                  (")" === t && "(" === n) ||
                  ("]" === t && "[" === n) ||
                  (">" === t && "<" === n)
                    ? (i.has(e) && ")" === t) ||
                      (a.has(e) && ">" === t) ||
                      ((l = Math.max(l - 1, 0)), p())
                    : "}" === t && "{" === n && ((l = Math.max(l - 1, 0)), p()),
                    h.pop(),
                    m(t),
                    "}" === t && p();
                } else if (/^\(\)|\[\]|\{\}|\<\>$/.test(t)) m(t);
                else if ("=>" === t) m(t);
                else if (";" === t) m(t, !0), p();
                else if ("," === t) {
                  m(t, !0);
                  const n = f();
                  (i.has(e) && "(" === n) ||
                    (a.has(e) && "<" === n) ||
                    (n && ["{", "[", "(", "<"].includes(n) && p());
                } else m(t);
              }
              return (
                u(),
                c
                  .join("\n")
                  .replace(/\n\s*\n+/g, "\n")
                  .trim()
              );
            })(n)
          : `ƒ (${o}) => ...`;
      } catch {
        return "ƒ";
      }
    },
    Ga = (e) => {
      if (null === e) return "null";
      if (void 0 === e) return "undefined";
      if ("string" == typeof e)
        return `"${e.length > 150 ? `${e.slice(0, 20)}...` : e}"`;
      if ("number" == typeof e || "boolean" == typeof e) return String(e);
      if ("function" == typeof e) return Ja(e);
      if (Array.isArray(e)) return `Array(${e.length})`;
      if (e instanceof Map) return `Map(${e.size})`;
      if (e instanceof Set) return `Set(${e.size})`;
      if (e instanceof Date) return e.toISOString();
      if (e instanceof RegExp) return e.toString();
      if (e instanceof Error) return `${e.name}: ${e.message}`;
      if ("object" == typeof e) {
        const t = Object.keys(e);
        return `{${t.length > 2 ? `${t.slice(0, 2).join(", ")}, ...` : t.join(", ")}}`;
      }
      return String(e);
    },
    Ka = (e) => {
      if (null == e) return { value: e };
      if ("function" == typeof e) return { value: e };
      if ("object" != typeof e) return { value: e };
      if (e instanceof Promise) return { value: "Promise" };
      try {
        const t = Object.getPrototypeOf(e);
        return t === Promise.prototype || "Promise" === t?.constructor?.name
          ? { value: "Promise" }
          : { value: e };
      } catch {
        return { value: null, error: "Error accessing value" };
      }
    },
    Za = (e, t) =>
      e <= di
        ? { leftValue: 0, min: 0, max: e - 1, value: t, rightValue: e - 1 }
        : { leftValue: e - di, min: 0, max: 999, value: t, rightValue: e - 1 },
    Qa = (e) =>
      !!e && (e instanceof Promise || ("object" == typeof e && "then" in e)),
    es = (e, t = 2, n = new WeakSet()) => {
      if (Qa(e)) return { type: "promise", displayValue: "Promise" };
      if (null === e) return { type: "null", displayValue: "null" };
      if (void 0 === e) return { type: "undefined", displayValue: "undefined" };
      switch (typeof e) {
        case "object":
          if (n.has(e))
            return { type: "circular", displayValue: "[Circular Reference]" };
          if (!e) return { type: "null", displayValue: "null" };
          n.add(e);
          try {
            const r = {};
            if (e instanceof Element)
              return (
                (r.type = "Element"),
                (r.tagName = e.tagName.toLowerCase()),
                (r.displayValue = e.tagName.toLowerCase()),
                r
              );
            if (e instanceof Map) {
              if (
                ((r.type = "Map"),
                (r.size = e.size),
                (r.displayValue = `Map(${e.size})`),
                t > 0)
              ) {
                const o = {};
                let i = 0;
                for (const [r, a] of e.entries()) {
                  if (i >= 50) break;
                  try {
                    o[String(r)] = es(a, t - 1, n);
                  } catch {
                    o[String(i)] = {
                      type: "error",
                      displayValue: "Error accessing Map entry",
                    };
                  }
                  i++;
                }
                r.entries = o;
              }
              return r;
            }
            if (e instanceof Set) {
              if (
                ((r.type = "Set"),
                (r.size = e.size),
                (r.displayValue = `Set(${e.size})`),
                t > 0)
              ) {
                const o = [];
                let i = 0;
                for (const r of e) {
                  if (i >= 50) break;
                  o.push(es(r, t - 1, n)), i++;
                }
                r.items = o;
              }
              return r;
            }
            if (e instanceof Date)
              return (
                (r.type = "Date"),
                (r.value = e.toISOString()),
                (r.displayValue = e.toLocaleString()),
                r
              );
            if (e instanceof RegExp)
              return (
                (r.type = "RegExp"),
                (r.value = e.toString()),
                (r.displayValue = e.toString()),
                r
              );
            if (e instanceof Error)
              return (
                (r.type = "Error"),
                (r.name = e.name),
                (r.message = e.message),
                (r.displayValue = `${e.name}: ${e.message}`),
                r
              );
            if (e instanceof ArrayBuffer)
              return (
                (r.type = "ArrayBuffer"),
                (r.byteLength = e.byteLength),
                (r.displayValue = `ArrayBuffer(${e.byteLength})`),
                r
              );
            if (e instanceof DataView)
              return (
                (r.type = "DataView"),
                (r.byteLength = e.byteLength),
                (r.displayValue = `DataView(${e.byteLength})`),
                r
              );
            if (ArrayBuffer.isView(e)) {
              const t = e;
              return (
                (r.type = t.constructor.name),
                (r.length = t.length),
                (r.byteLength = t.buffer.byteLength),
                (r.displayValue = `${t.constructor.name}(${t.length})`),
                r
              );
            }
            if (Array.isArray(e))
              return (
                (r.type = "array"),
                (r.length = e.length),
                (r.displayValue = `Array(${e.length})`),
                t > 0 && (r.items = e.slice(0, 50).map((e) => es(e, t - 1, n))),
                r
              );
            const o = Object.keys(e);
            if (
              ((r.type = "object"),
              (r.size = o.length),
              (r.displayValue =
                o.length <= 5
                  ? `{${o.join(", ")}}`
                  : `{${o.slice(0, 5).join(", ")}, ...${o.length - 5}}`),
              t > 0)
            ) {
              const i = {};
              for (const r of o.slice(0, 50))
                try {
                  i[r] = es(e[r], t - 1, n);
                } catch {
                  i[r] = {
                    type: "error",
                    displayValue: "Error accessing property",
                  };
                }
              r.entries = i;
            }
            return r;
          } finally {
            n.delete(e);
          }
        case "string":
          return { type: "string", value: e, displayValue: `"${e}"` };
        case "function":
          return {
            type: "function",
            displayValue: "ƒ()",
            name: e.name || "anonymous",
          };
        default:
          return { type: typeof e, value: e, displayValue: String(e) };
      }
    },
    ts = (e) => {
      const t = I(e);
      return {
        displayName: U(e) || "Unknown",
        type: e.type,
        key: e.key,
        id: e.index,
        selfTime: t?.selfTime ?? null,
        totalTime: t?.totalTime ?? null,
      };
    },
    ns = new Map(),
    rs = new Map(),
    os = new Map(),
    is = null,
    as = /\[(?<name>\w+),\s*set\w+\]/g,
    ss = /\(\s*{\s*(?<props>[^}]+)\s*}\s*\)/,
    ls = (e) => {
      const t = e.type?.toString?.() || "";
      return t ? Array.from(t.matchAll(as), (e) => e.groups?.name ?? "") : [];
    },
    cs = () => {
      ns.clear(), rs.clear(), os.clear(), (is = null);
    },
    ds = (e, t, n, r) => {
      const o = e.get(t),
        i = e === ns || e === os,
        a = !$t(n, r);
      if (!o)
        return (
          e.set(t, {
            count: a && i ? 1 : 0,
            currentValue: n,
            previousValue: r,
            lastUpdated: Date.now(),
          }),
          { hasChanged: a, count: a && i ? 1 : i ? 0 : 1 }
        );
      if (!$t(o.currentValue, n)) {
        const r = o.count + 1;
        return (
          e.set(t, {
            count: r,
            currentValue: n,
            previousValue: o.currentValue,
            lastUpdated: Date.now(),
          }),
          { hasChanged: !0, count: r }
        );
      }
      return { hasChanged: !1, count: o.count };
    },
    us = (e) => {
      if (!e) return {};
      if (0 === e.tag || 11 === e.tag || 15 === e.tag || 14 === e.tag) {
        let t = e.memoizedState;
        const n = {};
        let r = 0;
        for (; t; )
          t.queue && void 0 !== t.memoizedState && (n[r] = t.memoizedState),
            (t = t.next),
            r++;
        return n;
      }
      return (1 === e.tag && e.memoizedState) || {};
    },
    ps = (e) => {
      const t = e.memoizedProps || {},
        n = e.alternate?.memoizedProps || {},
        r = ((e) => {
          const t = (e.type?.toString?.() || "").match(ss);
          return t?.groups?.props
            ? t.groups.props
                .split(",")
                .map((e) => e.trim().split(":")[0].split("=")[0].trim())
                .filter(Boolean)
            : [];
        })(e),
        o = {},
        i = {},
        a = [...new Set([...r, ...Object.keys(t)])];
      for (const e of a) e in t && ((o[e] = t[e]), (i[e] = n[e]));
      const s = ((e) => {
        const t = e.memoizedProps ?? {},
          n = e.alternate?.memoizedProps ?? {},
          r = [];
        for (const e in t) {
          if ("children" === e) continue;
          const o = t[e],
            i = n[e];
          $t(o, i) || r.push({ name: e, value: o, prevValue: i, type: 1 });
        }
        return r;
      })(e).map((e) => ({
        name: e.name,
        value: e.value,
        prevValue: e.prevValue,
      }));
      return { current: o, prev: i, changes: s };
    },
    hs = (e) => {
      const t = us(e),
        n = e.alternate ? us(e.alternate) : {},
        r = [];
      for (const [o, i] of Object.entries(t)) {
        const t = 1 === e.tag ? o : Number(o);
        e.alternate &&
          !$t(n[o], i) &&
          r.push({ name: t, value: i, prevValue: n[o] });
      }
      return { current: t, prev: n, changes: r };
    },
    fs = (e) => {
      const t = vs(e),
        n = e.alternate ? vs(e.alternate) : new Map(),
        r = {},
        o = {},
        i = [],
        a = new Set();
      for (const [e, s] of t) {
        const t = s.displayName,
          l = `${t}-${e?.toString()}`;
        if (a.has(l)) continue;
        a.add(l), (r[t] = s.value);
        const c = n.get(e);
        c &&
          ((o[t] = c.value),
          $t(c.value, s.value) ||
            i.push({
              name: t,
              value: s.value,
              prevValue: c.value,
              contextType: e,
            }));
      }
      return { current: r, prev: o, changes: i };
    },
    ms = (e) => {
      const t = () => ({
        current: [],
        changes: new Set(),
        changesCounts: new Map(),
      });
      if (!e) return { fiberProps: t(), fiberState: t(), fiberContext: t() };
      const n = t();
      if (e.memoizedProps) {
        const { current: t, changes: r } = ps(e);
        for (const [e, r] of Object.entries(t))
          n.current.push({
            name: e,
            value: Qa(r) ? { type: "promise", displayValue: "Promise" } : r,
          });
        for (const e of r)
          n.changes.add(e.name), n.changesCounts.set(e.name, 1);
      }
      const r = t();
      if (e.memoizedState) {
        const { current: t, changes: n } = hs(e);
        for (const [e, n] of Object.entries(t))
          r.current.push({
            name: e,
            value: Qa(n) ? { type: "promise", displayValue: "Promise" } : n,
          });
        for (const e of n)
          r.changes.add(e.name), r.changesCounts.set(e.name, 1);
      }
      const o = t(),
        { current: i, changes: a } = fs(e);
      for (const [e, t] of Object.entries(i))
        o.current.push({
          name: e,
          value: Qa(t) ? { type: "promise", displayValue: "Promise" } : t,
        });
      for (const e of a) o.changes.add(e.name), o.changesCounts.set(e.name, 1);
      return { fiberProps: n, fiberState: r, fiberContext: o };
    },
    gs = (e) => {
      const t = () => ({
        current: [],
        changes: new Set(),
        changesCounts: new Map(),
      });
      if (!e)
        return {
          data: { fiberProps: t(), fiberState: t(), fiberContext: t() },
          shouldUpdate: !1,
        };
      let n = !1;
      const r = ((e) => {
          const t = e.type !== is;
          return (is = e.type), t;
        })(e),
        o = t();
      if (e.memoizedProps) {
        const { current: t, changes: r } = ps(e);
        for (const [e, n] of Object.entries(t))
          o.current.push({
            name: e,
            value: Qa(n) ? { type: "promise", displayValue: "Promise" } : n,
          });
        for (const e of r) {
          const { hasChanged: t, count: r } = ds(
            ns,
            e.name,
            e.value,
            e.prevValue,
          );
          t &&
            ((n = !0), o.changes.add(e.name), o.changesCounts.set(e.name, r));
        }
      }
      const i = t(),
        { current: a, changes: s } = hs(e);
      for (const [t, n] of Object.entries(a)) {
        const r = 1 === e.tag ? t : Number(t);
        i.current.push({ name: r, value: n });
      }
      for (const e of s) {
        const { hasChanged: t, count: r } = ds(
          rs,
          e.name,
          e.value,
          e.prevValue,
        );
        t && ((n = !0), i.changes.add(e.name), i.changesCounts.set(e.name, r));
      }
      const l = t(),
        { current: c, changes: d } = fs(e);
      for (const [e, t] of Object.entries(c))
        l.current.push({ name: e, value: t });
      if (!r)
        for (const e of d) {
          const { hasChanged: t, count: r } = ds(
            os,
            e.name,
            e.value,
            e.prevValue,
          );
          t &&
            ((n = !0), l.changes.add(e.name), l.changesCounts.set(e.name, r));
        }
      return (
        n || r || (o.changes.clear(), i.changes.clear(), l.changes.clear()),
        {
          data: { fiberProps: o, fiberState: i, fiberContext: l },
          shouldUpdate: n || r,
        }
      );
    },
    ws = new WeakMap(),
    vs = (e) => {
      if (!e) return new Map();
      const t = ws.get(e);
      if (t) return t;
      const n = new Map();
      let r = e;
      for (; r; ) {
        const e = r.dependencies;
        if (e?.firstContext) {
          let t = e.firstContext;
          for (; t; ) {
            const e = t.memoizedValue,
              r = t.context?.displayName;
            if (
              (n.has(e) ||
                n.set(t.context, {
                  value: e,
                  displayName: r ?? "UnnamedContext",
                  contextType: null,
                }),
              t === t.next)
            )
              break;
            t = t.next;
          }
        }
        r = r.return;
      }
      return ws.set(e, n), n;
    },
    bs = 0,
    xs = performance.now(),
    ys = 0,
    ks = !1,
    _s = [],
    Ss = (e) => {
      ys++;
      const t = performance.now(),
        n = t - xs;
      if (n >= 500) {
        const e = Math.round((ys / n) * 1e3);
        if (e !== bs) for (const t of _s) t(e);
        (bs = e), (ys = 0), (xs = t);
      }
      requestAnimationFrame(() => Ss());
    },
    Ns = () => (ks || ((ks = !0), Ss(), (bs = 60)), bs),
    Cs = new Map(),
    Es = !1,
    Ts = () => Array.from(Cs.values()),
    zs = (e, t) => {
      const n = {
        isPaused: pt(!cl.options.value.enabled),
        fiberRoots: new WeakSet(),
      };
      var r;
      return (
        Cs.set(e, { key: e, config: t, instrumentation: n }),
        Es ||
          ((Es = !0),
          (r = {
            name: "react-scan",
            onActive: t.onActive,
            onCommitFiberRoot(e, t) {
              n.fiberRoots.add(t);
              const r = Ts();
              for (const e of r) e.config.onCommitStart();
              const o = Date.now();
              ((e, t) => {
                const n = "current" in e ? e.current : e;
                let r = Z.get(e);
                r || ((r = { prevFiber: null, id: K++ }), Z.set(e, r));
                const { prevFiber: o } = r;
                if (n)
                  if (null !== o) {
                    const e =
                        o &&
                        null != o.memoizedState &&
                        null != o.memoizedState.element &&
                        !0 !== o.memoizedState.isDehydrated,
                      r =
                        null != n.memoizedState &&
                        null != n.memoizedState.element &&
                        !0 !== n.memoizedState.isDehydrated;
                    !e && r
                      ? X(t, n, !1)
                      : e && r
                        ? q(t, n, n.alternate)
                        : e && !r && J(t, n);
                  } else X(t, n, !0);
                else J(t, n);
                r.prevFiber = n;
              })(t.current, (e, t) => {
                const n = L(e.type);
                if (!n) return null;
                const r = Ts(),
                  i = [];
                for (let t = 0, n = r.length; t < n; t++)
                  r[t].config.isValidFiber(e) && i.push(t);
                if (!i.length) return null;
                const a = [];
                if (r.some((e) => e.config.trackChanges)) {
                  const t = ps(e).changes,
                    n = hs(e).changes,
                    r = fs(e).changes;
                  a.push.apply(
                    null,
                    t.map((e) => ({ type: 1, name: e.name, value: e.value })),
                  );
                  for (const t of n)
                    1 === e.tag
                      ? a.push({
                          type: 3,
                          name: t.name.toString(),
                          value: t.value,
                        })
                      : a.push({
                          type: 2,
                          name: t.name.toString(),
                          value: t.value,
                        });
                  a.push.apply(
                    null,
                    r.map((e) => ({
                      type: 4,
                      name: e.name,
                      value: e.value,
                      contextType: Number(e.contextType),
                    })),
                  );
                }
                const { selfTime: s } = I(e),
                  l = Ns(),
                  c = {
                    phase: On[t],
                    componentName: U(n),
                    count: 1,
                    changes: a,
                    time: s,
                    forget: O(e),
                    unnecessary: null,
                    didCommit: j(e),
                    fps: l,
                  };
                for (let t = 0, n = i.length; t < n; t++)
                  r[i[t]].config.onRender(e, [c], o);
              });
              for (const e of r) e.config.onCommitFinish();
            },
          }),
          v(() => {
            const e = v();
            r.onActive?.(), (e._instrumentationSource = r.name ?? u);
            const t = e.onCommitFiberRoot;
            r.onCommitFiberRoot &&
              (e.onCommitFiberRoot = (e, n, o) => {
                t && t(e, n, o), r.onCommitFiberRoot?.(e, n, o);
              });
            const n = e.onCommitFiberUnmount;
            r.onCommitFiberUnmount &&
              (e.onCommitFiberUnmount = (e, t) => {
                n && n(e, t), r.onCommitFiberUnmount?.(e, t);
              });
            const o = e.onPostCommitFiberRoot;
            r.onPostCommitFiberRoot &&
              (e.onPostCommitFiberRoot = (e, t) => {
                o && o(e, t), r.onPostCommitFiberRoot?.(e, t);
              });
          })),
        n
      );
    },
    As = (e, t) => Math.floor(e + 0.1 * (t - e)),
    $s = "115,97,230",
    Ms = (e) => {
      const t = new Map();
      for (const n of e) {
        const { name: e, count: r } = n;
        t.set(e, (t.get(e) || 0) + r);
      }
      const n = new Map();
      for (const [e, r] of t.entries()) {
        const t = n.get(r);
        t ? t.push(e) : n.set(r, [e]);
      }
      const r = Array.from(n.entries()).sort(([e], [t]) => t - e),
        o = r.length;
      let i = "";
      for (let e = 0; e < o; e++) {
        const [t, n] = r[e];
        let a = `${n.slice(0, 4).join(", ")} ×${t}`;
        a.length > 40 && (a = `${a.slice(0, 40)}…`),
          e !== o - 1 && (a += ", "),
          (i += a);
      }
      return i.length > 40 ? `${i.slice(0, 40)}…` : i;
    },
    Fs = (e) => {
      let t = 0;
      for (const n of e) t += n.width * n.height;
      return t;
    },
    Rs = (e, t) => {
      for (const {
        id: n,
        name: r,
        count: o,
        x: i,
        y: a,
        width: s,
        height: l,
        didCommit: c,
      } of t) {
        const t = {
            id: n,
            name: r,
            count: o,
            x: i,
            y: a,
            width: s,
            height: l,
            frame: 0,
            targetX: i,
            targetY: a,
            targetWidth: s,
            targetHeight: l,
            didCommit: c,
          },
          d = String(t.id),
          u = e.get(d);
        u
          ? (u.count++,
            (u.frame = 0),
            (u.targetX = i),
            (u.targetY = a),
            (u.targetWidth = s),
            (u.targetHeight = l),
            (u.didCommit = c))
          : e.set(d, t);
      }
    },
    js = null,
    Ps = null,
    Ds = null,
    Is = 1,
    Os = null,
    Ls = new Map(),
    Us = new Map(),
    Hs = new Set(),
    Vs = (e, t) => {
      if (!F(e)) return;
      const n = "string" == typeof e.type ? e.type : U(e);
      if (!n) return;
      const r = Us.get(e),
        o = ((e) => {
          const t = [],
            n = [];
          for (M(e) ? t.push(e) : e.child && n.push(e.child); n.length; ) {
            const e = n.pop();
            if (!e) break;
            M(e) ? t.push(e) : e.child && n.push(e.child),
              e.sibling && n.push(e.sibling);
          }
          return t;
        })(e),
        i = j(e);
      r
        ? (r.count++, (r.renderedAt = t))
        : (Us.set(e, {
            name: n,
            count: 1,
            elements: o.map((e) => e.stateNode),
            didCommit: i ? 1 : 0,
            renderedAt: t,
          }),
          Hs.add(e));
    },
    Bs = (e) => {
      const t = e[0];
      if (1 === e.length) return t;
      let n, r, o, i;
      for (let t = 0, a = e.length; t < a; t++) {
        const a = e[t];
        (n = null == n ? a.x : Math.min(n, a.x)),
          (r = null == r ? a.y : Math.min(r, a.y)),
          (o = null == o ? a.x + a.width : Math.max(o, a.x + a.width)),
          (i = null == i ? a.y + a.height : Math.max(i, a.y + a.height));
      }
      return null == n || null == r || null == o || null == i
        ? e[0]
        : new DOMRect(n, r, o - n, i - r);
    },
    Ws = (e) => {
      if (!(e instanceof Element)) throw new Error("Element Invariant");
    },
    Ys = async function* (e) {
      e.forEach(Ws);
      const t = new Set(e),
        n = new Set();
      let r = null,
        o = !1;
      const i = new IntersectionObserver((e) => {
        const a = [];
        for (const t of e) {
          const e = t.target;
          n.has(e) || (n.add(e), a.push(t));
        }
        a.length > 0 && r && (r(a), (r = null)),
          n.size === t.size && (i.disconnect(), (o = !0), r && r([]));
      });
      for (const e of t) i.observe(e);
      for (; !o; ) {
        const e = await new Promise((e) => {
          r = e;
        });
        e.length > 0 && (yield e);
      }
    },
    Xs =
      "undefined" != typeof SharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer,
    qs = () => {
      if (!Ds || !Ps) return;
      const e = ((e, t, n, r) => {
        e.clearRect(0, 0, t.width / n, t.height / n);
        const o = new Map(),
          i = new Map();
        for (const e of r.values()) {
          const {
            x: t,
            y: n,
            width: r,
            height: a,
            targetX: s,
            targetY: l,
            targetWidth: c,
            targetHeight: d,
            frame: u,
          } = e;
          s !== t && (e.x = As(t, s)),
            l !== n && (e.y = As(n, l)),
            c !== r && (e.width = As(r, c)),
            d !== a && (e.height = As(a, d));
          const p = `${s ?? t},${l ?? n}`,
            h = `${p},${c ?? r},${d ?? a}`,
            f = o.get(p);
          f ? f.push(e) : o.set(p, [e]);
          const m = 1 - u / 45;
          e.frame++;
          const g = i.get(h) || { x: t, y: n, width: r, height: a, alpha: m };
          m > g.alpha && (g.alpha = m), i.set(h, g);
        }
        for (const t of i.values()) {
          const { x: n, y: r, width: o, height: i, alpha: a } = t;
          (e.strokeStyle = `rgba(${$s},${a})`),
            (e.lineWidth = 1),
            e.beginPath(),
            e.rect(n, r, o, i),
            e.stroke(),
            (e.fillStyle = `rgba(${$s},${0.1 * a})`),
            e.fill();
        }
        e.font =
          "11px Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace";
        const a = new Map();
        e.textRendering = "optimizeSpeed";
        for (const t of o.values()) {
          const n = t[0],
            { x: o, y: i, frame: s } = n,
            l = 1 - s / 45,
            c = Ms(t),
            { width: d } = e.measureText(c),
            u = 11;
          if (
            (a.set(`${o},${i},${d},${c}`, {
              text: c,
              width: d,
              height: u,
              alpha: l,
              x: o,
              y: i,
              outlines: t,
            }),
            s > 45)
          )
            for (const e of t) r.delete(String(e.id));
        }
        const s = Array.from(a.entries()).sort(
          ([e, t], [n, r]) => Fs(r.outlines) - Fs(t.outlines),
        );
        for (const [t, n] of s)
          if (a.has(t))
            for (const [r, o] of a.entries()) {
              if (t === r) continue;
              const { x: i, y: s, width: l, height: c } = n,
                { x: d, y: u, width: p, height: h } = o;
              i + l > d &&
                d + p > i &&
                s + c > u &&
                u + h > s &&
                ((n.text = Ms([...n.outlines, ...o.outlines])),
                (n.width = e.measureText(n.text).width),
                a.delete(r));
            }
        for (const t of a.values()) {
          const { x: n, y: r, alpha: o, width: i, height: a, text: s } = t;
          let l = r - a - 4;
          l < 0 && (l = 0),
            (e.fillStyle = `rgba(${$s},${o})`),
            e.fillRect(n, l, i + 4, a + 4),
            (e.fillStyle = `rgba(255,255,255,${o})`),
            e.fillText(s, n + 2, l + a);
        }
        return r.size > 0;
      })(Ds, Ps, Is, Ls);
      Os = e ? requestAnimationFrame(qs) : null;
    },
    Js = "undefined" != typeof OffscreenCanvas && "undefined" != typeof Worker,
    Gs = () => Math.min(window.devicePixelRatio || 1, 2),
    Ks = () => {
      Qs();
      const e = document.createElement("div");
      e.setAttribute("data-react-scan", "true");
      const t = e.attachShadow({ mode: "open" });
      t.innerHTML =
        '<canvas style="position:fixed;top:0;left:0;pointer-events:none;z-index:2147483646" aria-hidden="true"></canvas>';
      const n = t.firstChild;
      if (!n) return null;
      (Is = Gs()), (Ps = n);
      const { innerWidth: r, innerHeight: o } = window;
      (n.style.width = `${r}px`), (n.style.height = `${o}px`);
      const i = r * Is,
        a = o * Is;
      if (((n.width = i), (n.height = a), Js))
        try {
          const e = $n("use-extension-worker");
          if ((Fn("use-extension-worker"), e)) {
            js = new Worker(
              URL.createObjectURL(
                new Blob(
                  [
                    '"use strict";(()=>{var Y="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace";var C=(t,l)=>Math.floor(t+(l-t)*.1);var _="115,97,230";var $=t=>{let l=new Map;for(let o of t){let{name:f,count:e}=o;l.set(f,(l.get(f)||0)+e)}let u=new Map;for(let[o,f]of l.entries()){let e=u.get(f);e?e.push(o):u.set(f,[o])}let m=Array.from(u.entries()).sort(([o],[f])=>f-o),s=m.length,i="";for(let o=0;o<s;o++){let[f,e]=m[o],n=`${e.slice(0,4).join(", ")} \\xD7${f}`;n.length>40&&(n=`${n.slice(0,40)}\\u2026`),o!==s-1&&(n+=", "),i+=n}return i.length>40?`${i.slice(0,40)}\\u2026`:i},S=t=>{let l=0;for(let u of t)l+=u.width*u.height;return l};var X=(t,l)=>{let u=t.getContext("2d",{alpha:!0});return u&&u.scale(l,l),u},N=(t,l,u,m)=>{t.clearRect(0,0,l.width/u,l.height/u);let s=new Map,i=new Map;for(let e of m.values()){let{x:n,y:c,width:a,height:h,targetX:r,targetY:d,targetWidth:g,targetHeight:A,frame:x}=e;r!==n&&(e.x=C(n,r)),d!==c&&(e.y=C(c,d)),g!==a&&(e.width=C(a,g)),A!==h&&(e.height=C(h,A));let O=`${r??n},${d??c}`,y=`${O},${g??a},${A??h}`,R=s.get(O);R?R.push(e):s.set(O,[e]);let M=1-x/45;e.frame++;let E=i.get(y)||{x:n,y:c,width:a,height:h,alpha:M};M>E.alpha&&(E.alpha=M),i.set(y,E)}for(let e of i.values()){let{x:n,y:c,width:a,height:h,alpha:r}=e;t.strokeStyle=`rgba(${_},${r})`,t.lineWidth=1,t.beginPath(),t.rect(n,c,a,h),t.stroke(),t.fillStyle=`rgba(${_},${r*.1})`,t.fill()}t.font=`11px ${Y}`;let o=new Map;t.textRendering="optimizeSpeed";for(let e of s.values()){let n=e[0],{x:c,y:a,frame:h}=n,r=1-h/45,d=$(e),{width:g}=t.measureText(d),A=11;o.set(`${c},${a},${g},${d}`,{text:d,width:g,height:A,alpha:r,x:c,y:a,outlines:e});let x=a-A-4;if(x<0&&(x=0),h>45)for(let O of e)m.delete(String(O.id))}let f=Array.from(o.entries()).sort(([e,n],[c,a])=>S(a.outlines)-S(n.outlines));for(let[e,n]of f)if(o.has(e))for(let[c,a]of o.entries()){if(e===c)continue;let{x:h,y:r,width:d,height:g}=n,{x:A,y:x,width:O,height:y}=a;h+d>A&&A+O>h&&r+g>x&&x+y>r&&(n.text=$([...n.outlines,...a.outlines]),n.width=t.measureText(n.text).width,o.delete(c))}for(let e of o.values()){let{x:n,y:c,alpha:a,width:h,height:r,text:d}=e,g=c-r-4;g<0&&(g=0),t.fillStyle=`rgba(${_},${a})`,t.fillRect(n,g,h+4,r+4),t.fillStyle=`rgba(255,255,255,${a})`,t.fillText(d,n+2,g+r)}return m.size>0};var p=null,w=null,b=1,L=new Map,T=null,v=()=>{if(!w||!p)return;N(w,p,b,L)?T=requestAnimationFrame(v):T=null};self.onmessage=t=>{let{type:l}=t.data;if(l==="init"&&(p=t.data.canvas,b=t.data.dpr,p&&(p.width=t.data.width,p.height=t.data.height,w=X(p,b))),!(!p||!w)){if(l==="resize"){b=t.data.dpr,p.width=t.data.width*b,p.height=t.data.height*b,w.resetTransform(),w.scale(b,b),v();return}if(l==="draw-outlines"){let{data:u,names:m}=t.data,s=new Float32Array(u);for(let i=0;i<s.length;i+=7){let o=s[i+2],f=s[i+3],e=s[i+4],n=s[i+5],c=s[i+6],a={id:s[i],name:m[i/7],count:s[i+1],x:o,y:f,width:e,height:n,frame:0,targetX:o,targetY:f,targetWidth:e,targetHeight:n,didCommit:c},h=String(a.id),r=L.get(h);r?(r.count++,r.frame=0,r.targetX=o,r.targetY=f,r.targetWidth=e,r.targetHeight=n,r.didCommit=c):L.set(h,a)}T||(T=requestAnimationFrame(v));return}if(l==="scroll"){let{deltaX:u,deltaY:m}=t.data;for(let s of L.values()){let i=s.x-u,o=s.y-m;s.targetX=i,s.targetY=o}}}};})();\n',
                  ],
                  { type: "application/javascript" },
                ),
              ),
            );
            const e = n.transferControlToOffscreen();
            js?.postMessage(
              {
                type: "init",
                canvas: e,
                width: n.width,
                height: n.height,
                dpr: Is,
              },
              [e],
            );
          }
        } catch (e) {
          console.warn("Failed to initialize OffscreenCanvas worker:", e);
        }
      js ||
        (Ds = ((e, t) => {
          const n = e.getContext("2d", { alpha: !0 });
          return n && n.scale(t, t), n;
        })(n, Is));
      let s = !1;
      window.addEventListener("resize", () => {
        s ||
          ((s = !0),
          setTimeout(() => {
            const e = window.innerWidth,
              t = window.innerHeight;
            (Is = Gs()),
              (n.style.width = `${e}px`),
              (n.style.height = `${t}px`),
              js
                ? js.postMessage({
                    type: "resize",
                    width: e,
                    height: t,
                    dpr: Is,
                  })
                : ((n.width = e * Is),
                  (n.height = t * Is),
                  Ds && (Ds.resetTransform(), Ds.scale(Is, Is)),
                  qs()),
              (s = !1);
          }));
      });
      let l = window.scrollX,
        c = window.scrollY,
        d = !1;
      return (
        window.addEventListener("scroll", () => {
          d ||
            ((d = !0),
            setTimeout(() => {
              const { scrollX: e, scrollY: t } = window,
                n = e - l,
                r = t - c;
              (l = e),
                (c = t),
                js
                  ? js.postMessage({ type: "scroll", deltaX: n, deltaY: r })
                  : requestAnimationFrame(() => {
                      ((e, t, n) => {
                        for (const r of e.values()) {
                          const e = r.x - t,
                            o = r.y - n;
                          (r.targetX = e), (r.targetY = o);
                        }
                      })(Ls, n, r);
                    }),
                (d = !1);
            }, 32));
        }),
        setInterval(() => {
          try {
            Hs.size &&
              requestAnimationFrame(() => {
                (async () => {
                  const e = [];
                  for (const t of Hs) {
                    const n = Us.get(t);
                    if (n)
                      for (let t = 0; t < n.elements.length; t++)
                        n.elements[t] instanceof Element &&
                          e.push(n.elements[t]);
                  }
                  const t = new Map();
                  Xa && clearTimeout(Xa);
                  const n = new Promise((e, t) => {
                    Xa = setTimeout(
                      () => t(new Error("Timed out getting rects")),
                      2500,
                    );
                  });
                  try {
                    await Promise.race([
                      (async () => {
                        for await (const n of Ys(e)) {
                          for (const e of n) {
                            const n = e.target,
                              r = e.intersectionRect;
                            e.isIntersecting &&
                              r.width &&
                              r.height &&
                              t.set(n, r);
                          }
                          const e = [],
                            r = [],
                            o = [];
                          for (const n of Hs) {
                            const i = Us.get(n);
                            if (!i) continue;
                            const a = [];
                            for (let e = 0; e < i.elements.length; e++) {
                              const n = i.elements[e],
                                r = t.get(n);
                              r && a.push(r);
                            }
                            a.length &&
                              (e.push(i), r.push(Bs(a)), o.push(Y(n)));
                          }
                          if (e.length > 0) {
                            const t = new Xs(7 * e.length * 4),
                              n = new Float32Array(t),
                              i = new Array(e.length);
                            let a;
                            for (let t = 0, s = e.length; t < s; t++) {
                              const s = e[t],
                                l = o[t],
                                { x: c, y: d, width: u, height: p } = r[t],
                                { count: h, name: f, didCommit: m } = s;
                              if (js) {
                                const e = 7 * t;
                                (n[e] = l),
                                  (n[e + 1] = h),
                                  (n[e + 2] = c),
                                  (n[e + 3] = d),
                                  (n[e + 4] = u),
                                  (n[e + 5] = p),
                                  (n[e + 6] = m),
                                  (i[t] = f);
                              } else
                                (a ||= new Array(e.length)),
                                  (a[t] = {
                                    id: l,
                                    name: f,
                                    count: h,
                                    x: c,
                                    y: d,
                                    width: u,
                                    height: p,
                                    didCommit: m,
                                  });
                            }
                            js
                              ? js.postMessage({
                                  type: "draw-outlines",
                                  data: t,
                                  names: i,
                                })
                              : Ps &&
                                Ds &&
                                a &&
                                (Rs(Ls, a),
                                Os || (Os = requestAnimationFrame(qs)));
                          }
                        }
                      })(),
                      n,
                    ]);
                  } catch {}
                  for (const e of Hs) Us.delete(e), Hs.delete(e);
                })();
              });
          } catch {}
        }, 32),
        t.appendChild(n),
        e
      );
    },
    Zs = () => globalThis.__REACT_SCAN_STOP__,
    Qs = () => {
      const e = document.querySelector("[data-react-scan]");
      e && e.remove();
    },
    el = (e) => !xl.has(e.memoizedProps),
    tl = ({ onActive: e }) => {
      if (Zs()) return;
      const t = zs("react-scan-devtools-0.1.0", {
        onCommitStart: () => {
          cl.options.value.onCommitStart?.();
        },
        onActive: e,
        onError() {},
        isValidFiber: el,
        onRender: (e, t, n) => {
          F(e) && ll.monitor.value?.interactionListeningForRenders?.(e, t);
          const r = cl.instrumentation?.isPaused.value,
            o =
              "inspect-off" === ll.inspectState.value.kind ||
              "uninitialized" === ll.inspectState.value.kind;
          (r && o) ||
            (r || Vs(e, n),
            cl.options.value.log &&
              ((e) => {
                const t = new Map();
                for (let n = 0, r = e.length; n < r; n++) {
                  const r = e[n];
                  if (!r.componentName) continue;
                  const o = t.get(r.componentName) ?? [],
                    i = At([
                      {
                        aggregatedCount: 1,
                        computedKey: null,
                        name: r.componentName,
                        frame: null,
                        ...r,
                        changes: {
                          type: r.changes.reduce((e, t) => e | t.type, 0),
                          unstable: r.changes.some((e) => e.unstable),
                        },
                        phase: r.phase,
                        computedCurrent: null,
                      },
                    ]);
                  if (!i) continue;
                  let a = null,
                    s = null;
                  if (r.changes)
                    for (let e = 0, t = r.changes.length; e < t; e++) {
                      const {
                        name: t,
                        prevValue: n,
                        nextValue: i,
                        unstable: l,
                        type: c,
                      } = r.changes[e];
                      1 === c
                        ? ((a ??= {}),
                          (s ??= {}),
                          (a[`${l ? "⚠️" : ""}${t} (prev)`] = n),
                          (s[`${l ? "⚠️" : ""}${t} (next)`] = i))
                        : o.push({
                            prev: n,
                            next: i,
                            type: 4 === c ? "context" : "state",
                            unstable: l ?? !1,
                          });
                    }
                  a &&
                    s &&
                    o.push({ prev: a, next: s, type: "props", unstable: !1 }),
                    t.set(i, o);
                }
                for (const [e, n] of Array.from(t.entries())) {
                  console.group(
                    `%c${e}`,
                    "background: hsla(0,0%,70%,.3); border-radius:3px; padding: 0 2px;",
                  );
                  for (const { type: e, prev: t, next: r, unstable: o } of n)
                    console.log(`${e}:`, o ? "⚠️" : "", t, "!==", r);
                  console.groupEnd();
                }
              })(t),
            "focused" === ll.inspectState.value.kind && (hi.value = Date.now()),
            cl.options.value.onRender?.(e, t));
        },
        onCommitFinish: () => {
          cl.options.value.onCommitFinish?.();
        },
        trackChanges: !1,
      });
      cl.instrumentation = t;
    },
    nl = null,
    rl = class extends he {
      constructor() {
        super(...arguments),
          (this.state = { hasError: !1, error: null }),
          (this.handleReset = () => {
            this.setState({ hasError: !1, error: null });
          });
      }
      static getDerivedStateFromError(e) {
        return console.error(e), { hasError: !0, error: e };
      }
      render() {
        return this.state.hasError
          ? Xn("div", {
              className: "fixed bottom-4 right-4 z-[124124124124]",
              children: Xn("div", {
                className: "p-3 bg-black rounded-lg shadow-lg w-80",
                children: [
                  Xn("div", {
                    className:
                      "flex items-center gap-2 mb-2 text-red-400 text-sm font-medium",
                    children: [
                      Xn(si, {
                        name: "icon-flame",
                        className: "text-red-500",
                        size: 14,
                      }),
                      "React Scan ran into a problem",
                    ],
                  }),
                  Xn("div", {
                    className:
                      "p-2 bg-black rounded font-mono text-xs text-red-300 mb-3 break-words",
                    children:
                      this.state.error?.message ||
                      JSON.stringify(this.state.error),
                  }),
                  Xn("button", {
                    type: "button",
                    onClick: this.handleReset,
                    className:
                      "px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded text-xs font-medium transition-colors flex items-center justify-center gap-1.5",
                    children: "Restart",
                  }),
                ],
              }),
            })
          : this.props.children;
      }
    },
    ol = (e) => {
      const t = document.createElement("div");
      (t.id = "react-scan-toolbar-root"),
        (window.__REACT_SCAN_TOOLBAR_CONTAINER__ = t),
        (nl = t),
        e.appendChild(t),
        Ae(Xn(rl, { children: Xn(Hi, {}) }), t);
      const n = t.remove.bind(t);
      return (
        (t.remove = () => {
          t.hasChildNodes() && ((nl = null), Ae(null, t), Ae(null, t)), n();
        }),
        t
      );
    },
    il = null,
    al = null,
    sl = () => {
      if (il && al) return { rootContainer: il, shadowRoot: al };
      ((il = document.createElement("div")).id = "react-scan-root"),
        (al = il.attachShadow({ mode: "open" }));
      const e = document.createDocumentFragment(),
        t = document.createElement("style");
      t.textContent =
        '*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}/*\n! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n5. Use the user\'s configured `sans` font-feature-settings by default.\n6. Use the user\'s configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font-family by default.\n2. Use the user\'s configured `mono` font-feature-settings by default.\n3. Use the user\'s configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\ninput:where([type=\'button\']),\ninput:where([type=\'reset\']),\ninput:where([type=\'submit\']) {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden]:where(:not([hidden="until-found"])) {\n  display: none;\n}\n.\\!container {\n  width: 100% !important;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n\n  .\\!container {\n    max-width: 640px !important;\n  }\n\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n\n  .\\!container {\n    max-width: 768px !important;\n  }\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n\n  .\\!container {\n    max-width: 1024px !important;\n  }\n\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n\n  .\\!container {\n    max-width: 1280px !important;\n  }\n\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n\n  .\\!container {\n    max-width: 1536px !important;\n  }\n\n  .container {\n    max-width: 1536px;\n  }\n}\n.pointer-events-none {\n  pointer-events: none;\n}\n.pointer-events-auto {\n  pointer-events: auto;\n}\n.visible {\n  visibility: visible;\n}\n.static {\n  position: static;\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.sticky {\n  position: sticky;\n}\n.inset-0 {\n  inset: 0px;\n}\n.inset-x-1 {\n  left: 4px;\n  right: 4px;\n}\n.inset-y-0 {\n  top: 0px;\n  bottom: 0px;\n}\n.-right-1 {\n  right: -4px;\n}\n.-right-2\\.5 {\n  right: -10px;\n}\n.-top-1 {\n  top: -4px;\n}\n.-top-2\\.5 {\n  top: -10px;\n}\n.bottom-0 {\n  bottom: 0px;\n}\n.bottom-4 {\n  bottom: 16px;\n}\n.left-0 {\n  left: 0px;\n}\n.left-2 {\n  left: 8px;\n}\n.left-3 {\n  left: 12px;\n}\n.right-0 {\n  right: 0px;\n}\n.right-2 {\n  right: 8px;\n}\n.right-4 {\n  right: 16px;\n}\n.top-0 {\n  top: 0px;\n}\n.top-1\\/2 {\n  top: 50%;\n}\n.top-2 {\n  top: 8px;\n}\n.z-10 {\n  z-index: 10;\n}\n.z-100 {\n  z-index: 100;\n}\n.z-50 {\n  z-index: 50;\n}\n.z-\\[124124124124\\] {\n  z-index: 124124124124;\n}\n.z-\\[214748365\\] {\n  z-index: 214748365;\n}\n.z-\\[214748367\\] {\n  z-index: 214748367;\n}\n.m-\\[2px\\] {\n  margin: 2px;\n}\n.mx-0\\.5 {\n  margin-left: 2px;\n  margin-right: 2px;\n}\n.\\!ml-0 {\n  margin-left: 0px !important;\n}\n.mb-1\\.5 {\n  margin-bottom: 6px;\n}\n.mb-2 {\n  margin-bottom: 8px;\n}\n.mb-3 {\n  margin-bottom: 12px;\n}\n.mb-4 {\n  margin-bottom: 16px;\n}\n.mb-px {\n  margin-bottom: 1px;\n}\n.ml-1 {\n  margin-left: 4px;\n}\n.ml-auto {\n  margin-left: auto;\n}\n.mr-0\\.5 {\n  margin-right: 2px;\n}\n.mr-1 {\n  margin-right: 4px;\n}\n.mr-1\\.5 {\n  margin-right: 6px;\n}\n.mr-16 {\n  margin-right: 64px;\n}\n.mr-auto {\n  margin-right: auto;\n}\n.mt-0\\.5 {\n  margin-top: 2px;\n}\n.mt-1 {\n  margin-top: 4px;\n}\n.mt-4 {\n  margin-top: 16px;\n}\n.block {\n  display: block;\n}\n.inline {\n  display: inline;\n}\n.flex {\n  display: flex;\n}\n.table {\n  display: table;\n}\n.grid {\n  display: grid;\n}\n.hidden {\n  display: none;\n}\n.aspect-square {\n  aspect-ratio: 1 / 1;\n}\n.h-1 {\n  height: 4px;\n}\n.h-1\\.5 {\n  height: 6px;\n}\n.h-10 {\n  height: 40px;\n}\n.h-12 {\n  height: 48px;\n}\n.h-2\\.5 {\n  height: 10px;\n}\n.h-3\\.5 {\n  height: 14px;\n}\n.h-4 {\n  height: 16px;\n}\n.h-4\\/5 {\n  height: 80%;\n}\n.h-6 {\n  height: 24px;\n}\n.h-7 {\n  height: 28px;\n}\n.h-8 {\n  height: 32px;\n}\n.h-\\[150px\\] {\n  height: 150px;\n}\n.h-\\[235px\\] {\n  height: 235px;\n}\n.h-\\[28px\\] {\n  height: 28px;\n}\n.h-\\[48px\\] {\n  height: 48px;\n}\n.h-\\[50px\\] {\n  height: 50px;\n}\n.h-\\[calc\\(100\\%-150px\\)\\] {\n  height: calc(100% - 150px);\n}\n.h-\\[calc\\(100\\%-200px\\)\\] {\n  height: calc(100% - 200px);\n}\n.h-\\[calc\\(100\\%-25px\\)\\] {\n  height: calc(100% - 25px);\n}\n.h-\\[calc\\(100\\%-40px\\)\\] {\n  height: calc(100% - 40px);\n}\n.h-\\[calc\\(100\\%-48px\\)\\] {\n  height: calc(100% - 48px);\n}\n.h-fit {\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.h-full {\n  height: 100%;\n}\n.h-screen {\n  height: 100vh;\n}\n.max-h-0 {\n  max-height: 0px;\n}\n.max-h-40 {\n  max-height: 160px;\n}\n.max-h-8 {\n  max-height: 32px;\n}\n.max-h-9 {\n  max-height: 36px;\n}\n.max-h-\\[\\"auto\\"\\] {\n  max-height: "auto";\n}\n.max-h-\\[400px\\] {\n  max-height: 400px;\n}\n.min-h-9 {\n  min-height: 36px;\n}\n.min-h-\\[48px\\] {\n  min-height: 48px;\n}\n.min-h-fit {\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n}\n.w-1 {\n  width: 4px;\n}\n.w-1\\/2 {\n  width: 50%;\n}\n.w-1\\/3 {\n  width: 33.333333%;\n}\n.w-16 {\n  width: 64px;\n}\n.w-2\\.5 {\n  width: 10px;\n}\n.w-2\\/4 {\n  width: 50%;\n}\n.w-3 {\n  width: 12px;\n}\n.w-3\\.5 {\n  width: 14px;\n}\n.w-32 {\n  width: 128px;\n}\n.w-4 {\n  width: 16px;\n}\n.w-4\\/5 {\n  width: 80%;\n}\n.w-80 {\n  width: 320px;\n}\n.w-\\[5\\%\\] {\n  width: 5%;\n}\n.w-\\[72px\\] {\n  width: 72px;\n}\n.w-\\[90\\%\\] {\n  width: 90%;\n}\n.w-\\[calc\\(100\\%-200px\\)\\] {\n  width: calc(100% - 200px);\n}\n.w-fit {\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.w-full {\n  width: 100%;\n}\n.w-px {\n  width: 1px;\n}\n.w-screen {\n  width: 100vw;\n}\n.min-w-\\[200px\\] {\n  min-width: 200px;\n}\n.min-w-fit {\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n.max-w-md {\n  max-width: 448px;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.flex-\\[0_0_auto\\] {\n  flex: 0 0 auto;\n}\n.grow {\n  flex-grow: 1;\n}\n.-translate-y-1\\/2 {\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-translate-y-\\[200\\%\\] {\n  --tw-translate-y: -200%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-0 {\n  --tw-translate-y: 0px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-1 {\n  --tw-translate-y: 4px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-rotate-90 {\n  --tw-rotate: -90deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.rotate-0 {\n  --tw-rotate: 0deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.rotate-90 {\n  --tw-rotate: 90deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.scale-110 {\n  --tw-scale-x: 1.1;\n  --tw-scale-y: 1.1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n@keyframes fadeIn {\n\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n.animate-fade-in {\n  animation: fadeIn ease-in forwards;\n}\n.cursor-ew-resize {\n  cursor: ew-resize;\n}\n.cursor-move {\n  cursor: move;\n}\n.cursor-nesw-resize {\n  cursor: nesw-resize;\n}\n.cursor-ns-resize {\n  cursor: ns-resize;\n}\n.cursor-nwse-resize {\n  cursor: nwse-resize;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.select-none {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.resize {\n  resize: both;\n}\n.appearance-none {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.flex-row-reverse {\n  flex-direction: row-reverse;\n}\n.flex-col {\n  flex-direction: column;\n}\n.flex-wrap {\n  flex-wrap: wrap;\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-end {\n  align-items: flex-end;\n}\n.items-center {\n  align-items: center;\n}\n.items-stretch {\n  align-items: stretch;\n}\n.justify-start {\n  justify-content: flex-start;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.gap-0\\.5 {\n  gap: 2px;\n}\n.gap-1 {\n  gap: 4px;\n}\n.gap-1\\.5 {\n  gap: 6px;\n}\n.gap-2 {\n  gap: 8px;\n}\n.gap-4 {\n  gap: 16px;\n}\n.gap-x-0\\.5 {\n  -moz-column-gap: 2px;\n       column-gap: 2px;\n}\n.gap-x-1 {\n  -moz-column-gap: 4px;\n       column-gap: 4px;\n}\n.gap-x-1\\.5 {\n  -moz-column-gap: 6px;\n       column-gap: 6px;\n}\n.gap-x-2 {\n  -moz-column-gap: 8px;\n       column-gap: 8px;\n}\n.gap-x-3 {\n  -moz-column-gap: 12px;\n       column-gap: 12px;\n}\n.gap-x-4 {\n  -moz-column-gap: 16px;\n       column-gap: 16px;\n}\n.gap-x-\\[6px\\] {\n  -moz-column-gap: 6px;\n       column-gap: 6px;\n}\n.gap-y-0\\.5 {\n  row-gap: 2px;\n}\n.gap-y-1 {\n  row-gap: 4px;\n}\n.gap-y-2 {\n  row-gap: 8px;\n}\n.gap-y-4 {\n  row-gap: 16px;\n}\n.space-y-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(4px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(4px * var(--tw-space-y-reverse));\n}\n.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(6px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(6px * var(--tw-space-y-reverse));\n}\n.space-y-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(8px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(8px * var(--tw-space-y-reverse));\n}\n.space-y-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(16px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(16px * var(--tw-space-y-reverse));\n}\n.divide-y > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-y-reverse: 0;\n  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));\n  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));\n}\n.divide-zinc-800 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(39 39 42 / var(--tw-divide-opacity, 1));\n}\n.overflow-auto {\n  overflow: auto;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.\\!overflow-visible {\n  overflow: visible !important;\n}\n.overflow-x-auto {\n  overflow-x: auto;\n}\n.overflow-y-auto {\n  overflow-y: auto;\n}\n.overflow-x-hidden {\n  overflow-x: hidden;\n}\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n.whitespace-pre-wrap {\n  white-space: pre-wrap;\n}\n.text-wrap {\n  text-wrap: wrap;\n}\n.break-words {\n  overflow-wrap: break-word;\n}\n.break-all {\n  word-break: break-all;\n}\n.rounded {\n  border-radius: 4px;\n}\n.rounded-\\[2px\\] {\n  border-radius: 2px;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.rounded-lg {\n  border-radius: 8px;\n}\n.rounded-md {\n  border-radius: 6px;\n}\n.rounded-sm {\n  border-radius: 2px;\n}\n.rounded-l-sm {\n  border-top-left-radius: 2px;\n  border-bottom-left-radius: 2px;\n}\n.rounded-r-sm {\n  border-top-right-radius: 2px;\n  border-bottom-right-radius: 2px;\n}\n.rounded-t-lg {\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n}\n.rounded-t-sm {\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n}\n.border {\n  border-width: 1px;\n}\n.border-4 {\n  border-width: 4px;\n}\n.border-b {\n  border-bottom-width: 1px;\n}\n.border-l-0 {\n  border-left-width: 0px;\n}\n.border-l-1 {\n  border-left-width: 1px;\n}\n.border-r {\n  border-right-width: 1px;\n}\n.border-t {\n  border-top-width: 1px;\n}\n.\\!border-red-500 {\n  --tw-border-opacity: 1 !important;\n  border-color: rgb(239 68 68 / var(--tw-border-opacity, 1)) !important;\n}\n.border-\\[\\#1e1e1e\\] {\n  --tw-border-opacity: 1;\n  border-color: rgb(30 30 30 / var(--tw-border-opacity, 1));\n}\n.border-\\[\\#27272A\\] {\n  --tw-border-opacity: 1;\n  border-color: rgb(39 39 42 / var(--tw-border-opacity, 1));\n}\n.border-\\[\\#333\\] {\n  --tw-border-opacity: 1;\n  border-color: rgb(51 51 51 / var(--tw-border-opacity, 1));\n}\n.border-gray-700\\/50 {\n  border-color: rgb(55 65 81 / 0.5);\n}\n.border-red-800\\/50 {\n  border-color: rgb(153 27 27 / 0.5);\n}\n.border-transparent {\n  border-color: transparent;\n}\n.border-white\\/10 {\n  border-color: rgb(255 255 255 / 0.1);\n}\n.border-white\\/20 {\n  border-color: rgb(255 255 255 / 0.2);\n}\n.border-yellow-800\\/50 {\n  border-color: rgb(133 77 14 / 0.5);\n}\n.border-zinc-800 {\n  --tw-border-opacity: 1;\n  border-color: rgb(39 39 42 / var(--tw-border-opacity, 1));\n}\n.bg-\\[\\#0A0A0A\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(10 10 10 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#141414\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(20 20 20 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#18181B\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(24 24 27 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#18181B\\]\\/50 {\n  background-color: rgb(24 24 27 / 0.5);\n}\n.bg-\\[\\#1D3A66\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(29 58 102 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#1a2a1a\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(26 42 26 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#1e1e1e\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 30 30 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#214379d4\\] {\n  background-color: #214379d4;\n}\n.bg-\\[\\#27272A\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(39 39 42 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#2a1515\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(42 21 21 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#412162\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(65 33 98 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#4b4b4b\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(75 75 75 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#5f3f9a\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(95 63 154 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#5f3f9a\\]\\/40 {\n  background-color: rgb(95 63 154 / 0.4);\n}\n.bg-\\[\\#6a369e\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(106 54 158 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#7521c8\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(117 33 200 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#8e61e3\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(142 97 227 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#A284F5\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(162 132 245 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#EFD81A\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 216 26 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#b77116\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(183 113 22 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#b94040\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(185 64 64 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#d36cff\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(211 108 255 / var(--tw-bg-opacity, 1));\n}\n.bg-\\[\\#efd81a6b\\] {\n  background-color: #efd81a6b;\n}\n.bg-black {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));\n}\n.bg-black\\/40 {\n  background-color: rgb(0 0 0 / 0.4);\n}\n.bg-gray-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1));\n}\n.bg-gray-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1));\n}\n.bg-gray-800\\/50 {\n  background-color: rgb(31 41 55 / 0.5);\n}\n.bg-green-500\\/50 {\n  background-color: rgb(34 197 94 / 0.5);\n}\n.bg-green-500\\/60 {\n  background-color: rgb(34 197 94 / 0.6);\n}\n.bg-neutral-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(64 64 64 / var(--tw-bg-opacity, 1));\n}\n.bg-purple-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(168 85 247 / var(--tw-bg-opacity, 1));\n}\n.bg-purple-500\\/90 {\n  background-color: rgb(168 85 247 / 0.9);\n}\n.bg-purple-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(107 33 168 / var(--tw-bg-opacity, 1));\n}\n.bg-red-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 68 68 / var(--tw-bg-opacity, 1));\n}\n.bg-red-500\\/90 {\n  background-color: rgb(239 68 68 / 0.9);\n}\n.bg-red-900\\/50 {\n  background-color: rgb(127 29 29 / 0.5);\n}\n.bg-red-950\\/40 {\n  background-color: rgb(69 10 10 / 0.4);\n}\n.bg-red-950\\/50 {\n  background-color: rgb(69 10 10 / 0.5);\n}\n.bg-transparent {\n  background-color: transparent;\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.bg-yellow-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(253 224 71 / var(--tw-bg-opacity, 1));\n}\n.bg-yellow-950\\/40 {\n  background-color: rgb(66 32 6 / 0.4);\n}\n.bg-zinc-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(39 39 42 / var(--tw-bg-opacity, 1));\n}\n.bg-zinc-900\\/30 {\n  background-color: rgb(24 24 27 / 0.3);\n}\n.bg-zinc-900\\/50 {\n  background-color: rgb(24 24 27 / 0.5);\n}\n.object-contain {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.p-0 {\n  padding: 0px;\n}\n.p-1 {\n  padding: 4px;\n}\n.p-1\\.5 {\n  padding: 6px;\n}\n.p-2 {\n  padding: 8px;\n}\n.p-3 {\n  padding: 12px;\n}\n.p-4 {\n  padding: 16px;\n}\n.p-5 {\n  padding: 20px;\n}\n.p-6 {\n  padding: 24px;\n}\n.px-1 {\n  padding-left: 4px;\n  padding-right: 4px;\n}\n.px-1\\.5 {\n  padding-left: 6px;\n  padding-right: 6px;\n}\n.px-2 {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.px-2\\.5 {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.px-3 {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n.px-4 {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.py-0\\.5 {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.py-1 {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n.py-1\\.5 {\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n.py-2 {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n.py-3 {\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n.py-4 {\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n.py-\\[1px\\] {\n  padding-top: 1px;\n  padding-bottom: 1px;\n}\n.py-\\[3px\\] {\n  padding-top: 3px;\n  padding-bottom: 3px;\n}\n.py-\\[5px\\] {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n.pb-2 {\n  padding-bottom: 8px;\n}\n.pl-1 {\n  padding-left: 4px;\n}\n.pl-1\\.5 {\n  padding-left: 6px;\n}\n.pl-2 {\n  padding-left: 8px;\n}\n.pl-2\\.5 {\n  padding-left: 10px;\n}\n.pl-3 {\n  padding-left: 12px;\n}\n.pl-5 {\n  padding-left: 20px;\n}\n.pl-6 {\n  padding-left: 24px;\n}\n.pl-9 {\n  padding-left: 36px;\n}\n.pr-1 {\n  padding-right: 4px;\n}\n.pr-2 {\n  padding-right: 8px;\n}\n.pr-2\\.5 {\n  padding-right: 10px;\n}\n.pt-0 {\n  padding-top: 0px;\n}\n.pt-2 {\n  padding-top: 8px;\n}\n.pt-5 {\n  padding-top: 20px;\n}\n.text-left {\n  text-align: left;\n}\n.font-mono {\n  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;\n}\n.text-\\[10px\\] {\n  font-size: 10px;\n}\n.text-\\[11px\\] {\n  font-size: 11px;\n}\n.text-\\[13px\\] {\n  font-size: 13px;\n}\n.text-\\[14px\\] {\n  font-size: 14px;\n}\n.text-\\[17px\\] {\n  font-size: 17px;\n}\n.text-\\[8px\\] {\n  font-size: 8px;\n}\n.text-sm {\n  font-size: 14px;\n  line-height: 20px;\n}\n.text-xs {\n  font-size: 12px;\n  line-height: 16px;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-medium {\n  font-weight: 500;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.lowercase {\n  text-transform: lowercase;\n}\n.capitalize {\n  text-transform: capitalize;\n}\n.italic {\n  font-style: italic;\n}\n.leading-6 {\n  line-height: 24px;\n}\n.leading-none {\n  line-height: 1;\n}\n.tracking-wide {\n  letter-spacing: 0.025em;\n}\n.tracking-wider {\n  letter-spacing: 0.05em;\n}\n.text-\\[\\#4ade80\\] {\n  --tw-text-opacity: 1;\n  color: rgb(74 222 128 / var(--tw-text-opacity, 1));\n}\n.text-\\[\\#5a5a5a\\] {\n  --tw-text-opacity: 1;\n  color: rgb(90 90 90 / var(--tw-text-opacity, 1));\n}\n.text-\\[\\#65656D\\] {\n  --tw-text-opacity: 1;\n  color: rgb(101 101 109 / var(--tw-text-opacity, 1));\n}\n.text-\\[\\#666\\] {\n  --tw-text-opacity: 1;\n  color: rgb(102 102 102 / var(--tw-text-opacity, 1));\n}\n.text-\\[\\#6E6E77\\] {\n  --tw-text-opacity: 1;\n  color: rgb(110 110 119 / var(--tw-text-opacity, 1));\n}\n.text-\\[\\#6F6F78\\] {\n  --tw-text-opacity: 1;\n  color: rgb(111 111 120 / var(--tw-text-opacity, 1));\n}\n.text-\\[\\#7346a0\\] {\n  --tw-text-opacity: 1;\n  color: rgb(115 70 160 / var(--tw-text-opacity, 1));\n}\n.text-\\[\\#888\\] {\n  --tw-text-opacity: 1;\n  color: rgb(136 136 136 / var(--tw-text-opacity, 1));\n}\n.text-\\[\\#8E61E3\\] {\n  --tw-text-opacity: 1;\n  color: rgb(142 97 227 / var(--tw-text-opacity, 1));\n}\n.text-\\[\\#999\\] {\n  --tw-text-opacity: 1;\n  color: rgb(153 153 153 / var(--tw-text-opacity, 1));\n}\n.text-\\[\\#A1A1AA\\] {\n  --tw-text-opacity: 1;\n  color: rgb(161 161 170 / var(--tw-text-opacity, 1));\n}\n.text-\\[\\#A284F5\\] {\n  --tw-text-opacity: 1;\n  color: rgb(162 132 245 / var(--tw-text-opacity, 1));\n}\n.text-\\[\\#A855F7\\] {\n  --tw-text-opacity: 1;\n  color: rgb(168 85 247 / var(--tw-text-opacity, 1));\n}\n.text-\\[\\#E4E4E7\\] {\n  --tw-text-opacity: 1;\n  color: rgb(228 228 231 / var(--tw-text-opacity, 1));\n}\n.text-\\[\\#d36cff\\] {\n  --tw-text-opacity: 1;\n  color: rgb(211 108 255 / var(--tw-text-opacity, 1));\n}\n.text-\\[\\#f87171\\] {\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity, 1));\n}\n.text-black {\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity, 1));\n}\n.text-blue-500 {\n  --tw-text-opacity: 1;\n  color: rgb(59 130 246 / var(--tw-text-opacity, 1));\n}\n.text-gray-100 {\n  --tw-text-opacity: 1;\n  color: rgb(243 244 246 / var(--tw-text-opacity, 1));\n}\n.text-gray-300 {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity, 1));\n}\n.text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity, 1));\n}\n.text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity, 1));\n}\n.text-green-500 {\n  --tw-text-opacity: 1;\n  color: rgb(34 197 94 / var(--tw-text-opacity, 1));\n}\n.text-inspect {\n  --tw-text-opacity: 1;\n  color: rgb(142 97 227 / var(--tw-text-opacity, 1));\n}\n.text-neutral-300 {\n  --tw-text-opacity: 1;\n  color: rgb(212 212 212 / var(--tw-text-opacity, 1));\n}\n.text-neutral-400 {\n  --tw-text-opacity: 1;\n  color: rgb(163 163 163 / var(--tw-text-opacity, 1));\n}\n.text-neutral-500 {\n  --tw-text-opacity: 1;\n  color: rgb(115 115 115 / var(--tw-text-opacity, 1));\n}\n.text-purple-400 {\n  --tw-text-opacity: 1;\n  color: rgb(192 132 252 / var(--tw-text-opacity, 1));\n}\n.text-red-300 {\n  --tw-text-opacity: 1;\n  color: rgb(252 165 165 / var(--tw-text-opacity, 1));\n}\n.text-red-400 {\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity, 1));\n}\n.text-red-500 {\n  --tw-text-opacity: 1;\n  color: rgb(239 68 68 / var(--tw-text-opacity, 1));\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.text-white\\/30 {\n  color: rgb(255 255 255 / 0.3);\n}\n.text-white\\/70 {\n  color: rgb(255 255 255 / 0.7);\n}\n.text-yellow-300 {\n  --tw-text-opacity: 1;\n  color: rgb(253 224 71 / var(--tw-text-opacity, 1));\n}\n.text-yellow-400 {\n  --tw-text-opacity: 1;\n  color: rgb(250 204 21 / var(--tw-text-opacity, 1));\n}\n.text-yellow-500 {\n  --tw-text-opacity: 1;\n  color: rgb(234 179 8 / var(--tw-text-opacity, 1));\n}\n.text-zinc-200 {\n  --tw-text-opacity: 1;\n  color: rgb(228 228 231 / var(--tw-text-opacity, 1));\n}\n.text-zinc-400 {\n  --tw-text-opacity: 1;\n  color: rgb(161 161 170 / var(--tw-text-opacity, 1));\n}\n.text-zinc-500 {\n  --tw-text-opacity: 1;\n  color: rgb(113 113 122 / var(--tw-text-opacity, 1));\n}\n.text-zinc-600 {\n  --tw-text-opacity: 1;\n  color: rgb(82 82 91 / var(--tw-text-opacity, 1));\n}\n.opacity-0 {\n  opacity: 0;\n}\n.opacity-100 {\n  opacity: 1;\n}\n.opacity-50 {\n  opacity: 0.5;\n}\n.\\!shadow {\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1) !important;\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color) !important;\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;\n}\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.outline {\n  outline-style: solid;\n}\n.ring-1 {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.ring-white\\/\\[0\\.08\\] {\n  --tw-ring-color: rgb(255 255 255 / 0.08);\n}\n.blur {\n  --tw-blur: blur(8px);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.\\!filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow) !important;\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.backdrop-blur-sm {\n  --tw-backdrop-blur: blur(4px);\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-\\[border-radius\\] {\n  transition-property: border-radius;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-\\[max-height\\] {\n  transition-property: max-height;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-\\[opacity\\] {\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-\\[transform\\2c color\\] {\n  transition-property: transform,color;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-colors {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-none {\n  transition-property: none;\n}\n.transition-opacity {\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-transform {\n  transition-property: transform;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.delay-0 {\n  transition-delay: 0s;\n}\n.delay-150 {\n  transition-delay: 150ms;\n}\n.delay-300 {\n  transition-delay: 300ms;\n}\n.duration-0 {\n  transition-duration: 0s;\n}\n.duration-200 {\n  transition-duration: 200ms;\n}\n.duration-300 {\n  transition-duration: 300ms;\n}\n.ease-\\[cubic-bezier\\(0\\.23\\2c 1\\2c 0\\.32\\2c 1\\)\\] {\n  transition-timing-function: cubic-bezier(0.23,1,0.32,1);\n}\n.ease-\\[cubic-bezier\\(0\\.25\\2c 0\\.1\\2c 0\\.25\\2c 1\\)\\] {\n  transition-timing-function: cubic-bezier(0.25,0.1,0.25,1);\n}\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.ease-out {\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n.will-change-transform {\n  will-change: transform;\n}\n.animation-duration-300 {\n  animation-duration: .3s;\n}\n.animation-delay-300 {\n  animation-delay: .3s;\n}\n\n* {\n  outline: none !important;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  backface-visibility: hidden;\n\n  /* WebKit (Chrome, Safari, Edge) specific scrollbar styles */\n  &::-webkit-scrollbar {\n    width: 6px;\n    height: 6px;\n  }\n\n  &::-webkit-scrollbar-track {\n    border-radius: 10px;\n    background: transparent;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    background: rgba(255, 255, 255, 0.3);\n  }\n\n  &::-webkit-scrollbar-thumb:hover {\n    background: rgba(255, 255, 255, .4);\n  }\n\n  &::-webkit-scrollbar-corner {\n    background: transparent;\n  }\n}\n\n@-moz-document url-prefix() {\n  * {\n    scrollbar-width: thin;\n    scrollbar-color: rgba(255, 255, 255, 0.4) transparent;\n    scrollbar-width: 6px;\n  }\n}\n\n\nbutton:hover {\n  background-image: none;\n}\n\n\nbutton {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  border-style: none;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n  transition-timing-function: linear;\n  cursor: pointer;\n}\n\ninput {\n  border-style: none;\n  background-color: transparent;\n  background-image: none;\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\ninput::-moz-placeholder {\n  font-size: 12px;\n  line-height: 16px;\n  font-style: italic;\n  --tw-text-opacity: 1;\n  color: rgb(115 115 115 / var(--tw-text-opacity, 1));\n}\n\ninput::placeholder {\n  font-size: 12px;\n  line-height: 16px;\n  font-style: italic;\n  --tw-text-opacity: 1;\n  color: rgb(115 115 115 / var(--tw-text-opacity, 1));\n}\n\ninput:-moz-placeholder-shown {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\ninput:placeholder-shown {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\nsvg {\n  height: auto;\n  width: auto;\n  pointer-events: none;\n}\n\n/*\n  Using CSS content with data attributes is more performant than:\n  1. React re-renders with JSX text content\n  2. Direct DOM manipulation methods:\n     - element.textContent (creates/updates text nodes, triggers repaint)\n     - element.innerText (triggers reflow by computing styles & layout)\n     - element.innerHTML (heavy parsing, triggers reflow, security risks)\n  3. Multiple data attributes with complex CSS concatenation\n\n  This approach:\n  - Avoids React reconciliation\n  - Uses browser\'s native CSS engine (optimized content updates)\n  - Minimizes main thread work\n  - Reduces DOM operations\n  - Avoids forced reflows (layout recalculation)\n  - Only triggers necessary repaints\n  - Keeps pseudo-element updates in render layer\n*/\n.with-data-text {\n  overflow: hidden;\n  &::before {\n    content: attr(data-text);\n  }\n  &::before {\n    display: block;\n  }\n  &::before {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n}\n\n#react-scan-toolbar {\n  position: fixed;\n  left: 0px;\n  top: 0px;\n  display: flex;\n  flex-direction: column;\n  border-radius: 8px;\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;\n  font-size: 13px;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  cursor: move;\n  opacity: 0;\n  z-index: 2147483678;\n}\n\n@keyframes fadeIn {\n\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n#react-scan-toolbar {\n  animation: fadeIn ease-in forwards;\n  animation-duration: .3s;\n  animation-delay: .3s;\n  --tw-shadow: 0 4px 12px rgba(0,0,0,0.2);\n  --tw-shadow-colored: 0 4px 12px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  place-self: start;\n}\n\n.button {\n  &:hover {\n    background: rgba(255, 255, 255, 0.1);\n  }\n\n  &:active {\n    background: rgba(255, 255, 255, 0.15);\n  }\n}\n\n.resize-line-wrapper {\n  position: absolute;\n  overflow: hidden;\n}\n\n.resize-line {\n  position: absolute;\n  inset: 0px;\n  overflow: hidden;\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n\n  svg {\n    position: absolute;\n  }\n\n  svg {\n    top: 50%;\n  }\n\n  svg {\n    left: 50%;\n  }\n\n  svg {\n    --tw-translate-x: -50%;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  svg {\n    --tw-translate-y: -50%;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n}\n\n.resize-right,\n.resize-left {\n  top: 0px;\n  bottom: 0px;\n  width: 24px;\n  cursor: ew-resize;\n\n  .resize-line-wrapper {\n    top: 0px;\n    bottom: 0px;\n  }\n\n  .resize-line-wrapper {\n    width: 50%;\n  }\n\n  &:hover {\n    .resize-line {\n      --tw-translate-x: 0px;\n      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n    }\n  }\n}\n.resize-right {\n  right: 0px;\n  --tw-translate-x: 50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n\n  .resize-line-wrapper {\n    right: 0px;\n  }\n  .resize-line {\n    border-top-right-radius: 8px;\n    border-bottom-right-radius: 8px;\n  }\n  .resize-line {\n    --tw-translate-x: -100%;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n}\n\n.resize-left {\n  left: 0px;\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n\n  .resize-line-wrapper {\n    left: 0px;\n  }\n  .resize-line {\n    border-top-left-radius: 8px;\n    border-bottom-left-radius: 8px;\n  }\n  .resize-line {\n    --tw-translate-x: 100%;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n}\n\n.resize-top,\n.resize-bottom {\n  left: 0px;\n  right: 0px;\n  height: 24px;\n  cursor: ns-resize;\n\n  .resize-line-wrapper {\n    left: 0px;\n    right: 0px;\n  }\n\n  .resize-line-wrapper {\n    height: 50%;\n  }\n\n  &:hover {\n    .resize-line {\n      --tw-translate-y: 0px;\n      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n    }\n  }\n}\n.resize-top {\n  top: 0px;\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n\n  .resize-line-wrapper {\n    top: 0px;\n  }\n  .resize-line {\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n  }\n  .resize-line {\n    --tw-translate-y: 100%;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n}\n\n.resize-bottom {\n  bottom: 0px;\n  --tw-translate-y: 50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n\n  .resize-line-wrapper {\n    bottom: 0px;\n  }\n  .resize-line {\n    border-bottom-right-radius: 8px;\n    border-bottom-left-radius: 8px;\n  }\n  .resize-line {\n    --tw-translate-y: -100%;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n}\n\n.react-scan-header {\n  display: flex;\n  align-items: center;\n  -moz-column-gap: 8px;\n       column-gap: 8px;\n  padding-left: 12px;\n  padding-right: 8px;\n  min-height: 36px;\n  border-bottom-width: 1px;\n  border-color: rgb(255 255 255 / 0.1);\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.react-scan-replay-button,\n.react-scan-close-button {\n  display: flex;\n  align-items: center;\n  padding: 4px;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  border-radius: 4px;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n}\n\n.react-scan-replay-button {\n  position: relative;\n  overflow: hidden;\n  background-color: rgb(168 85 247 / 0.5) !important;\n\n  &:hover {\n    background-color: rgb(168 85 247 / 0.25);\n  }\n\n  &.disabled {\n    opacity: 0.5;\n  }\n\n  &.disabled {\n    pointer-events: none;\n  }\n\n  &:before {\n    content: \'\';\n  }\n\n  &:before {\n    position: absolute;\n  }\n\n  &:before {\n    inset: 0px;\n  }\n\n  &:before {\n    --tw-translate-x: -100%;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  &:before {\n    animation: shimmer 2s infinite;\n    background: linear-gradient(to right,\n      transparent,\n      rgba(142, 97, 227, 0.3),\n      transparent);\n  }\n}\n\n.react-scan-close-button {\n  background-color: rgb(255 255 255 / 0.1);\n\n  &:hover {\n    background-color: rgb(255 255 255 / 0.15);\n  }\n}\n\n@keyframes shimmer {\n  100% {\n    --tw-translate-x: 100%;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n}\n\n.react-section-header {\n  position: sticky;\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  -moz-column-gap: 8px;\n       column-gap: 8px;\n  padding-left: 12px;\n  padding-right: 12px;\n  height: 32px;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  --tw-text-opacity: 1;\n  color: rgb(136 136 136 / var(--tw-text-opacity, 1));\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(34 34 34 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(10 10 10 / var(--tw-bg-opacity, 1));\n}\n\n.react-scan-section {\n  display: flex;\n  flex-direction: column;\n  padding-left: 8px;\n  padding-right: 8px;\n  --tw-text-opacity: 1;\n  color: rgb(136 136 136 / var(--tw-text-opacity, 1));\n}\n\n.react-scan-section::before {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity, 1));\n  --tw-content: attr(data-section);\n  content: var(--tw-content);\n}\n\n.react-scan-section {\n  font-size: 12px;\n  line-height: 16px;\n\n  > .react-scan-property {\n    margin-left: -14px;\n  }\n}\n\n.react-scan-property {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding-left: 32px;\n  border-left-width: 1px;\n  border-color: transparent;\n  overflow: hidden;\n}\n\n.react-scan-property-content {\n  display: flex;\n  flex: 1 1 0%;\n  flex-direction: column;\n  min-height: 24px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  max-width: 100%;\n  overflow: hidden;\n}\n\n.react-scan-string {\n  color: #9ecbff;\n}\n\n.react-scan-number {\n  color: #79c7ff;\n}\n\n.react-scan-boolean {\n  color: #56b6c2;\n}\n\n.react-scan-key {\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 240px;\n  white-space: nowrap;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n\n.react-scan-input {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));\n}\n\n@keyframes blink {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.react-scan-arrow {\n  position: absolute;\n  top: 4px;\n  left: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  height: 24px;\n  width: 24px;\n  --tw-translate-x: -100%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  z-index: 10;\n\n  > svg {\n    transition-property: transform;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms;\n  }\n}\n\n.react-scan-expandable {\n  display: grid;\n  grid-template-rows: 0fr;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 75ms;\n\n  &.react-scan-expanded {\n    grid-template-rows: 1fr;\n  }\n\n  &.react-scan-expanded {\n    transition-duration: 100ms;\n  }\n}\n\n.react-scan-nested {\n  position: relative;\n  overflow: hidden;\n\n  &:before {\n    content: \'\';\n  }\n\n  &:before {\n    position: absolute;\n  }\n\n  &:before {\n    top: 0px;\n  }\n\n  &:before {\n    left: 0px;\n  }\n\n  &:before {\n    height: 100%;\n  }\n\n  &:before {\n    width: 1px;\n  }\n\n  &:before {\n    background-color: rgb(107 114 128 / 0.3);\n  }\n}\n\n.react-scan-settings {\n  position: absolute;\n  inset: 0px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-left: 16px;\n  padding-right: 16px;\n  --tw-text-opacity: 1;\n  color: rgb(136 136 136 / var(--tw-text-opacity, 1));\n\n  >div {\n    display: flex;\n  }\n\n  >div {\n    align-items: center;\n  }\n\n  >div {\n    justify-content: space-between;\n  }\n\n  >div {\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms;\n  }\n\n  >div {\n    transition-duration: 300ms;\n  }\n}\n\n.react-scan-preview-line {\n  position: relative;\n  display: flex;\n  min-height: 24px;\n  align-items: center;\n  -moz-column-gap: 8px;\n       column-gap: 8px;\n}\n\n.react-scan-flash-overlay {\n  position: absolute;\n  inset: 0px;\n  opacity: 0;\n  z-index: 50;\n  pointer-events: none;\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n  mix-blend-mode: multiply;\n  background-color: rgb(168 85 247 / 0.9);\n}\n\n.react-scan-toggle {\n  position: relative;\n  display: inline-block;\n  height: 24px;\n  width: 40px;\n\n  input {\n    position: absolute;\n  }\n\n  input {\n    inset: 0px;\n  }\n\n  input {\n    z-index: 20;\n  }\n\n  input {\n    opacity: 0;\n  }\n\n  input {\n    cursor: pointer;\n  }\n\n  input:checked {\n    +div {\n      --tw-bg-opacity: 1;\n      background-color: rgb(95 63 154 / var(--tw-bg-opacity, 1));\n    }\n    +div {\n\n      &::before {\n        --tw-translate-x: 100%;\n        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n      }\n\n      &::before {\n        left: auto;\n      }\n\n      &::before {\n        --tw-border-opacity: 1;\n        border-color: rgb(95 63 154 / var(--tw-border-opacity, 1));\n      }\n    }\n  }\n\n  >div {\n    position: absolute;\n  }\n\n  >div {\n    inset: 4px;\n  }\n\n  >div {\n    --tw-bg-opacity: 1;\n    background-color: rgb(64 64 64 / var(--tw-bg-opacity, 1));\n  }\n\n  >div {\n    border-radius: 9999px;\n  }\n\n  >div {\n    pointer-events: none;\n  }\n\n  >div {\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms;\n  }\n\n  >div {\n    transition-duration: 300ms;\n  }\n\n  >div {\n\n    &:before {\n      --tw-content: \'\';\n      content: var(--tw-content);\n    }\n\n    &:before {\n      position: absolute;\n    }\n\n    &:before {\n      top: 50%;\n    }\n\n    &:before {\n      left: 0px;\n    }\n\n    &:before {\n      --tw-translate-y: -50%;\n      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n    }\n\n    &:before {\n      height: 16px;\n    }\n\n    &:before {\n      width: 16px;\n    }\n\n    &:before {\n      --tw-bg-opacity: 1;\n      background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n    }\n\n    &:before {\n      border-width: 2px;\n    }\n\n    &:before {\n      --tw-border-opacity: 1;\n      border-color: rgb(64 64 64 / var(--tw-border-opacity, 1));\n    }\n\n    &:before {\n      border-radius: 9999px;\n    }\n\n    &:before {\n      --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n      --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n    }\n\n    &:before {\n      transition-property: all;\n      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n      transition-duration: 150ms;\n    }\n\n    &:before {\n      transition-duration: 300ms;\n    }\n  }\n}\n\n.react-scan-flash-active {\n  opacity: 0.4;\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n}\n\n.react-scan-inspector-overlay {\n  display: flex;\n  flex-direction: column;\n  opacity: 0;\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n\n  &.fade-out {\n    opacity: 0;\n  }\n\n  &.fade-in {\n    opacity: 1;\n  }\n}\n\n.react-scan-what-changed {\n  ul {\n    list-style-type: disc;\n  }\n  ul {\n    padding-left: 16px;\n  }\n\n  li {\n    white-space: nowrap;\n  }\n\n  li {\n    > div {\n      display: flex;\n    }\n    > div {\n      align-items: center;\n    }\n    > div {\n      justify-content: space-between;\n    }\n    > div {\n      -moz-column-gap: 8px;\n           column-gap: 8px;\n    }\n  }\n}\n\n.count-badge {\n  display: flex;\n  align-items: center;\n  -moz-column-gap: 8px;\n       column-gap: 8px;\n  padding-left: 6px;\n  padding-right: 6px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  border-radius: 4px;\n  font-size: 12px;\n  line-height: 16px;\n  font-weight: 500;\n  --tw-numeric-spacing: tabular-nums;\n  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);\n  --tw-text-opacity: 1;\n  color: rgb(168 85 247 / var(--tw-text-opacity, 1));\n  background-color: rgb(168 85 247 / 0.1);\n  transform-origin: center;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-delay: 150ms;\n  transition-duration: 300ms;\n}\n\n@keyframes countFlash {\n\n  0% {\n    background-color: rgba(168, 85, 247, 0.3);\n    transform: scale(1.05);\n  }\n\n  100% {\n    background-color: rgba(168, 85, 247, 0.1);\n    transform: scale(1);\n  }\n}\n\n.count-flash {\n  animation: countFlash .3s ease-out forwards;\n}\n\n@keyframes countFlashShake {\n\n  0% {\n    transform: translateX(0);\n  }\n\n  25% {\n    transform: translateX(-5px);\n  }\n\n  50% {\n    transform: translateX(5px) scale(1.1);\n  }\n\n  75% {\n    transform: translateX(-5px);\n  }\n\n  100% {\n    transform: translateX(0);\n  }\n}\n\n.count-flash-white {\n  animation: countFlashShake .3s ease-out forwards;\n  transition-delay: 500ms !important;\n}\n\n.change-scope {\n  display: flex;\n  align-items: center;\n  -moz-column-gap: 4px;\n       column-gap: 4px;\n  --tw-text-opacity: 1;\n  color: rgb(102 102 102 / var(--tw-text-opacity, 1));\n  font-size: 12px;\n  line-height: 16px;\n  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;\n\n  > div {\n    padding-left: 6px;\n    padding-right: 6px;\n  }\n\n  > div {\n    padding-top: 2px;\n    padding-bottom: 2px;\n  }\n\n  > div {\n    transform-origin: center;\n  }\n\n  > div {\n    border-radius: 4px;\n  }\n\n  > div {\n    font-size: 12px;\n    line-height: 16px;\n  }\n\n  > div {\n    font-weight: 500;\n  }\n\n  > div {\n    --tw-numeric-spacing: tabular-nums;\n    font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);\n  }\n\n  > div {\n    transform-origin: center;\n  }\n\n  > div {\n    transition-property: all;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms;\n  }\n\n  > div {\n    transition-delay: 150ms;\n  }\n\n  > div {\n    transition-duration: 300ms;\n  }\n\n  > div {\n\n    &[data-flash="true"] {\n      background-color: rgb(168 85 247 / 0.1);\n    }\n\n    &[data-flash="true"] {\n      --tw-text-opacity: 1;\n      color: rgb(168 85 247 / var(--tw-text-opacity, 1));\n    }\n  }\n}\n\n.react-scan-slider {\n  position: relative;\n  min-height: 24px;\n\n  > input {\n    position: absolute;\n  }\n\n  > input {\n    inset: 0px;\n  }\n\n  > input {\n    opacity: 0;\n  }\n\n  &:before {\n    --tw-content: \'\';\n    content: var(--tw-content);\n  }\n\n  &:before {\n    position: absolute;\n  }\n\n  &:before {\n    left: 0px;\n    right: 0px;\n  }\n\n  &:before {\n    top: 50%;\n  }\n\n  &:before {\n    --tw-translate-y: -50%;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  &:before {\n    height: 6px;\n  }\n\n  &:before {\n    background-color: rgb(142 97 227 / 0.4);\n  }\n\n  &:before {\n    border-radius: 8px;\n  }\n\n  &:before {\n    pointer-events: none;\n  }\n\n  &:after {\n    --tw-content: \'\';\n    content: var(--tw-content);\n  }\n\n  &:after {\n    position: absolute;\n  }\n\n  &:after {\n    left: 0px;\n    right: 0px;\n  }\n\n  &:after {\n    top: -8px;\n    bottom: -8px;\n  }\n\n  &:after {\n    z-index: -10;\n  }\n\n  span {\n    position: absolute;\n  }\n\n  span {\n    left: 0px;\n  }\n\n  span {\n    top: 50%;\n  }\n\n  span {\n    --tw-translate-y: -50%;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  span {\n    height: 10px;\n  }\n\n  span {\n    width: 10px;\n  }\n\n  span {\n    border-radius: 8px;\n  }\n\n  span {\n    --tw-bg-opacity: 1;\n    background-color: rgb(142 97 227 / var(--tw-bg-opacity, 1));\n  }\n\n  span {\n    pointer-events: none;\n  }\n\n  span {\n    transition-property: transform;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms;\n  }\n\n  span {\n    transition-duration: 75ms;\n  }\n}\n\n.resize-v-line {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 20px;\n  max-width: 20px;\n  height: 100%;\n  width: 100%;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n  cursor: col-resize;\n\n  &:hover,\n  &:active {\n    > span {\n      background-color: rgb(255 255 255 / 0.1);\n    }\n\n    svg {\n      opacity: 1;\n    }\n  }\n\n  &::before {\n    --tw-content: "";\n    content: var(--tw-content);\n  }\n\n  &::before {\n    position: absolute;\n  }\n\n  &::before {\n    inset: 0px;\n  }\n\n  &::before {\n    left: 50%;\n  }\n\n  &::before {\n    --tw-translate-x: -50%;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  &::before {\n    width: 1px;\n  }\n\n  &::before {\n    background-color: rgb(255 255 255 / 0.1);\n  }\n\n  &::before {\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms;\n  }\n\n  > span {\n    position: absolute;\n  }\n\n  > span {\n    left: 50%;\n  }\n\n  > span {\n    top: 50%;\n  }\n\n  > span {\n    --tw-translate-x: -50%;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  > span {\n    --tw-translate-y: -50%;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  > span {\n    height: 18px;\n  }\n\n  > span {\n    width: 6px;\n  }\n\n  > span {\n    border-radius: 4px;\n  }\n\n  > span {\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms;\n  }\n\n  svg {\n    position: absolute;\n  }\n\n  svg {\n    left: 50%;\n  }\n\n  svg {\n    top: 50%;\n  }\n\n  svg {\n    --tw-translate-x: -50%;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  svg {\n    --tw-translate-y: -50%;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  svg {\n    --tw-rotate: 90deg;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  svg {\n    --tw-text-opacity: 1;\n    color: rgb(163 163 163 / var(--tw-text-opacity, 1));\n  }\n\n  svg {\n    opacity: 0;\n  }\n\n  svg {\n    transition-property: opacity;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms;\n  }\n\n  svg {\n    z-index: 50;\n  }\n}\n\n\n.tree-node-search-highlight {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  span {\n    padding-top: 1px;\n    padding-bottom: 1px;\n  }\n\n  span {\n    border-radius: 2px;\n  }\n\n  span {\n    --tw-bg-opacity: 1;\n    background-color: rgb(253 224 71 / var(--tw-bg-opacity, 1));\n  }\n\n  span {\n    font-weight: 500;\n  }\n\n  span {\n    --tw-text-opacity: 1;\n    color: rgb(0 0 0 / var(--tw-text-opacity, 1));\n  }\n\n  .single {\n    margin-right: 1px;\n  }\n\n  .single {\n    padding-left: 2px;\n    padding-right: 2px;\n  }\n\n  .regex {\n    padding-left: 2px;\n    padding-right: 2px;\n  }\n\n  .start {\n    margin-left: 1px;\n  }\n\n  .start {\n    border-top-left-radius: 2px;\n    border-bottom-left-radius: 2px;\n  }\n\n  .end {\n    margin-right: 1px;\n  }\n\n  .end {\n    border-top-right-radius: 2px;\n    border-bottom-right-radius: 2px;\n  }\n\n  .middle {\n    margin-left: 1px;\n    margin-right: 1px;\n  }\n\n  .middle {\n    border-radius: 2px;\n  }\n}\n\n\n.before\\:absolute::before {\n  content: var(--tw-content);\n  position: absolute;\n}\n\n\n.before\\:inset-x-0::before {\n  content: var(--tw-content);\n  left: 0px;\n  right: 0px;\n}\n\n\n.before\\:bottom-0::before {\n  content: var(--tw-content);\n  bottom: 0px;\n}\n\n\n.before\\:h-\\[1px\\]::before {\n  content: var(--tw-content);\n  height: 1px;\n}\n\n\n.before\\:bg-\\[\\#333\\]::before {\n  content: var(--tw-content);\n  --tw-bg-opacity: 1;\n  background-color: rgb(51 51 51 / var(--tw-bg-opacity, 1));\n}\n\n\n.before\\:content-\\[\\"\\"\\]::before {\n  --tw-content: "";\n  content: var(--tw-content);\n}\n\n\n.after\\:absolute::after {\n  content: var(--tw-content);\n  position: absolute;\n}\n\n\n.after\\:inset-0::after {\n  content: var(--tw-content);\n  inset: 0px;\n}\n\n\n.after\\:left-1\\/2::after {\n  content: var(--tw-content);\n  left: 50%;\n}\n\n\n.after\\:top-\\[100\\%\\]::after {\n  content: var(--tw-content);\n  top: 100%;\n}\n\n\n.after\\:h-\\[6px\\]::after {\n  content: var(--tw-content);\n  height: 6px;\n}\n\n\n.after\\:w-\\[10px\\]::after {\n  content: var(--tw-content);\n  width: 10px;\n}\n\n\n.after\\:-translate-x-1\\/2::after {\n  content: var(--tw-content);\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n\n@keyframes fadeOut {\n\n  0% {\n    content: var(--tw-content);\n    opacity: 1;\n  }\n\n  100% {\n    content: var(--tw-content);\n    opacity: 0;\n  }\n}\n\n\n.after\\:animate-\\[fadeOut_1s_ease-out_forwards\\]::after {\n  content: var(--tw-content);\n  animation: fadeOut 1s ease-out forwards;\n}\n\n\n.after\\:border-l-\\[5px\\]::after {\n  content: var(--tw-content);\n  border-left-width: 5px;\n}\n\n\n.after\\:border-r-\\[5px\\]::after {\n  content: var(--tw-content);\n  border-right-width: 5px;\n}\n\n\n.after\\:border-t-\\[6px\\]::after {\n  content: var(--tw-content);\n  border-top-width: 6px;\n}\n\n\n.after\\:border-l-transparent::after {\n  content: var(--tw-content);\n  border-left-color: transparent;\n}\n\n\n.after\\:border-r-transparent::after {\n  content: var(--tw-content);\n  border-right-color: transparent;\n}\n\n\n.after\\:border-t-white::after {\n  content: var(--tw-content);\n  --tw-border-opacity: 1;\n  border-top-color: rgb(255 255 255 / var(--tw-border-opacity, 1));\n}\n\n\n.after\\:bg-purple-500\\/30::after {\n  content: var(--tw-content);\n  background-color: rgb(168 85 247 / 0.3);\n}\n\n\n.after\\:content-\\[\\"\\"\\]::after {\n  --tw-content: "";\n  content: var(--tw-content);\n}\n\n\n.focus-within\\:border-\\[\\#454545\\]:focus-within {\n  --tw-border-opacity: 1;\n  border-color: rgb(69 69 69 / var(--tw-border-opacity, 1));\n}\n\n\n.hover\\:bg-\\[\\#0f0f0f\\]:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(15 15 15 / var(--tw-bg-opacity, 1));\n}\n\n\n.hover\\:bg-\\[\\#18181B\\]:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(24 24 27 / var(--tw-bg-opacity, 1));\n}\n\n\n.hover\\:bg-\\[\\#34343b\\]:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(52 52 59 / var(--tw-bg-opacity, 1));\n}\n\n\n.hover\\:bg-\\[\\#5f3f9a\\]\\/20:hover {\n  background-color: rgb(95 63 154 / 0.2);\n}\n\n\n.hover\\:bg-\\[\\#5f3f9a\\]\\/40:hover {\n  background-color: rgb(95 63 154 / 0.4);\n}\n\n\n.hover\\:bg-red-600:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(220 38 38 / var(--tw-bg-opacity, 1));\n}\n\n\n.hover\\:bg-red-900\\/70:hover {\n  background-color: rgb(127 29 29 / 0.7);\n}\n\n\n.hover\\:bg-white\\/5:hover {\n  background-color: rgb(255 255 255 / 0.05);\n}\n\n\n.hover\\:bg-zinc-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(63 63 70 / var(--tw-bg-opacity, 1));\n}\n\n\n.hover\\:bg-zinc-800\\/50:hover {\n  background-color: rgb(39 39 42 / 0.5);\n}\n\n\n.hover\\:text-gray-300:hover {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity, 1));\n}\n\n\n.hover\\:text-neutral-300:hover {\n  --tw-text-opacity: 1;\n  color: rgb(212 212 212 / var(--tw-text-opacity, 1));\n}\n\n\n.hover\\:text-white:hover {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n\n\n.focus\\:ring-\\[\\#A284F5\\]:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(162 132 245 / var(--tw-ring-opacity, 1));\n}\n\n\n.focus\\:ring-offset-0:focus {\n  --tw-ring-offset-width: 0px;\n}\n\n\n.group:hover .group-hover\\:bg-\\[\\#21437982\\] {\n  background-color: #21437982;\n}\n\n\n.group:hover .group-hover\\:bg-\\[\\#272727\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(39 39 39 / var(--tw-bg-opacity, 1));\n}\n\n\n.group:hover .group-hover\\:bg-\\[\\#5b2d89\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(91 45 137 / var(--tw-bg-opacity, 1));\n}\n\n\n.group:hover .group-hover\\:bg-\\[\\#efda1a2f\\] {\n  background-color: #efda1a2f;\n}\n\n\n.group:hover .group-hover\\:opacity-100 {\n  opacity: 1;\n}\n\n\n.peer\\/bottom:hover ~ .peer-hover\\/bottom\\:rounded-b-none {\n  border-bottom-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n}\n\n\n.peer\\/left:hover ~ .peer-hover\\/left\\:rounded-l-none {\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px;\n}\n\n\n.peer\\/right:hover ~ .peer-hover\\/right\\:rounded-r-none {\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px;\n}\n\n\n.peer\\/top:hover ~ .peer-hover\\/top\\:rounded-t-none {\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n}\n';
      const n = new DOMParser().parseFromString(
        '\n<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">\n  <symbol id="icon-inspect" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"/>\n    <path d="M5 3a2 2 0 0 0-2 2"/>\n    <path d="M19 3a2 2 0 0 1 2 2"/>\n    <path d="M5 21a2 2 0 0 1-2-2"/>\n    <path d="M9 3h1"/>\n    <path d="M9 21h2"/>\n    <path d="M14 3h1"/>\n    <path d="M3 9v1"/>\n    <path d="M21 9v2"/>\n    <path d="M3 14v1"/>\n  </symbol>\n\n  <symbol id="icon-focus" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"/>\n    <path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"/>\n  </symbol>\n\n  <symbol id="icon-next" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M6 9h6V5l7 7-7 7v-4H6V9z"/>\n  </symbol>\n\n  <symbol id="icon-previous" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M18 15h-6v4l-7-7 7-7v4h6v6z"/>\n  </symbol>\n\n  <symbol id="icon-close" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n    <line x1="18" y1="6" x2="6" y2="18"/>\n    <line x1="6" y1="6" x2="18" y2="18"/>\n  </symbol>\n\n  <symbol id="icon-replay" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M3 7V5a2 2 0 0 1 2-2h2"/>\n    <path d="M17 3h2a2 2 0 0 1 2 2v2"/>\n    <path d="M21 17v2a2 2 0 0 1-2 2h-2"/>\n    <path d="M7 21H5a2 2 0 0 1-2-2v-2"/>\n    <circle cx="12" cy="12" r="1"/>\n    <path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"/>\n  </symbol>\n\n  <symbol id="icon-ellipsis" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n    <circle cx="12" cy="12" r="1"/>\n    <circle cx="19" cy="12" r="1"/>\n    <circle cx="5" cy="12" r="1"/>\n  </symbol>\n\n  <symbol id="icon-copy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>\n    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>\n  </symbol>\n\n  <symbol id="icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M20 6 9 17l-5-5"/>\n  </symbol>\n\n  <symbol id="icon-chevron-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n    <path d="m9 18 6-6-6-6"/>\n  </symbol>\n\n  <symbol id="icon-settings" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3" />\n  </symbol>\n\n  <symbol id="icon-flame" viewBox="0 0 24 24">\n    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>\n  </symbol>\n\n  <symbol id="icon-function" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>\n    <path d="M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"/>\n    <path d="M9 11.2h5.7"/>\n  </symbol>\n\n  <symbol id="icon-triangle-alert" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>\n    <path d="M12 9v4"/>\n    <path d="M12 17h.01"/>\n  </symbol>\n\n  <symbol id="icon-gallery-horizontal-end" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n    <path d="M2 7v10"/><path d="M6 5v14"/>\n    <rect width="12" height="18" x="10" y="3" rx="2"/>\n  </symbol>\n\n  <symbol id="icon-search" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n    <circle cx="11" cy="11" r="8"/>\n    <line x1="21" y1="21" x2="16.65" y2="16.65"/>\n  </symbol>\n\n  <symbol id="icon-lock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>\n    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>\n  </symbol>\n\n  <symbol id="icon-lock-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>\n    <path d="M7 11V7a5 5 0 0 1 9.9-1"/>\n  </symbol>\n\n\n</svg>\n',
        "image/svg+xml",
      ).documentElement;
      al.appendChild(n);
      const r = document.createElement("div");
      return (
        (r.id = "react-scan-toolbar-root"),
        (r.className = "absolute z-2147483647"),
        e.appendChild(t),
        e.appendChild(r),
        al.appendChild(e),
        document.documentElement.appendChild(il),
        { rootContainer: il, shadowRoot: al }
      );
    },
    ll = {
      wasDetailsOpen: pt(!0),
      isInIframe: pt(
        "undefined" != typeof window && window.self !== window.top,
      ),
      inspectState: pt({ kind: "uninitialized" }),
      monitor: pt(null),
      fiberRoots: new Set(),
      reportData: new Map(),
      legacyReportData: new Map(),
      lastReportTime: pt(0),
      changesListeners: new Map(),
    },
    cl = {
      instrumentation: null,
      componentAllowList: null,
      options: pt({
        enabled: !0,
        includeChildren: !0,
        playSound: !1,
        log: !1,
        showToolbar: !0,
        _debug: !1,
        renderCountThreshold: 0,
        report: void 0,
        alwaysShowLabels: !1,
        animationSpeed: "fast",
        dangerouslyForceRunInProduction: !1,
        smoothlyAnimateOutlines: !0,
        trackUnnecessaryRenders: !1,
        showFPS: !0,
      }),
      onRender: null,
      scheduledOutlines: new Map(),
      activeOutlines: new Map(),
      Store: ll,
    };
  function dl(e) {
    return e in cl.options.value;
  }
  var ul,
    pl = (e) => {
      const t = [],
        n = {};
      for (const r in e) {
        if (!dl(r)) continue;
        const o = e[r];
        switch (r) {
          case "enabled":
          case "log":
          case "showToolbar":
          case "dangerouslyForceRunInProduction":
            "boolean" != typeof o
              ? t.push(`- ${r} must be a boolean. Got "${o}"`)
              : (n[r] = o);
            break;
          case "animationSpeed":
            ["slow", "fast", "off"].includes(o)
              ? (n[r] = o)
              : t.push(
                  `- Invalid animation speed "${o}". Using default "fast"`,
                );
            break;
          case "onCommitStart":
            "function" != typeof o
              ? t.push(`- ${r} must be a function. Got "${o}"`)
              : (n.onCommitStart = o);
            break;
          case "onCommitFinish":
            "function" != typeof o
              ? t.push(`- ${r} must be a function. Got "${o}"`)
              : (n.onCommitFinish = o);
            break;
          case "onRender":
            "function" != typeof o
              ? t.push(`- ${r} must be a function. Got "${o}"`)
              : (n.onRender = o);
            break;
          case "onPaintStart":
          case "onPaintFinish":
            "function" != typeof o
              ? t.push(`- ${r} must be a function. Got "${o}"`)
              : (n[r] = o);
            break;
          default:
            t.push(`- Unknown option "${r}"`);
        }
      }
      return (
        t.length > 0 &&
          console.warn(`[React Scan] Invalid options:\n${t.join("\n")}`),
        n
      );
    },
    hl = (e) => {
      const t = pl(e);
      if (0 === Object.keys(t).length) return;
      const n = { ...cl.options.value, ...t },
        { instrumentation: r } = cl;
      r && "enabled" in t && (r.isPaused.value = !1 === t.enabled),
        (cl.options.value = n);
      const o = $n("react-scan-options");
      return (
        Mn("react-scan-options", {
          ...n,
          enabled: n.showToolbar ? (o?.enabled ?? n.enabled ?? !0) : n.enabled,
        }),
        n
      );
    },
    fl = () => cl.options,
    ml = null,
    gl = () => {
      if (null !== ml) return ml;
      ul ??= v();
      for (const e of ul.renderers.values()) {
        "production" === H(e) && (ml = !0);
      }
      return ml;
    },
    wl = () => {
      try {
        if ("undefined" == typeof window) return;
        ll.monitor.value = {
          pendingRequests: 0,
          interactions: [],
          session: new Promise((e) => e(null)),
          url: null,
          route: null,
          apiKey: null,
          commit: null,
          branch: null,
          interactionListeningForRenders: null,
        };
        const e = $n("react-scan-options");
        if (e) {
          const { enabled: t } = e,
            n = pl({ enabled: t });
          Object.keys(n).length > 0 &&
            (cl.options.value = { ...cl.options.value, ...n });
        }
        const t = fl();
        tl({
          onActive: () => {
            const e = v();
            if (Zs()) return;
            for (const t of e.renderers.values()) {
              "production" === H(t) && (ml = !0);
            }
            if (ml && !cl.options.value.dangerouslyForceRunInProduction)
              return (
                hl({ enabled: !1, showToolbar: !1 }),
                void console.warn(
                  "[React Scan] Running in production mode is not recommended.\nIf you really need this, set dangerouslyForceRunInProduction: true in options.",
                )
              );
            so(), vl(!!t.value.showToolbar);
            const n = Ks();
            n && document.documentElement.appendChild(n),
              (globalThis.__REACT_SCAN__ = { ReactScanInternals: cl }),
              clearInterval(qa),
              (qa = setInterval(() => {}, 50)),
              console.log(
                "%c[·] %cReact Scan",
                "font-weight:bold;color:#7a68e8;font-size:20px;",
                "font-weight:bold;font-size:14px;",
              ),
              console.log(
                "Try React Scan Monitoring to target performance issues in production: https://react-scan.com/monitoring",
              );
          },
        });
        const n = "undefined" != typeof window;
        ll.monitor.value ||
          n ||
          setTimeout(() => {
            V() ||
              console.error(
                "[React Scan] Failed to load. Must import React Scan before React runs.",
              );
          }, 5e3);
      } catch (e) {
        "verbose" === cl.options.value._debug &&
          console.error("[React Scan Internal Error]", e);
      }
    },
    vl = (e) => {
      const t = window.__REACT_SCAN_TOOLBAR_CONTAINER__;
      if (!e) return void t?.remove();
      if (!nl && t) {
        t.remove();
        const { shadowRoot: e } = sl();
        return void ol(e);
      }
      if (nl && t) return;
      const { shadowRoot: n } = sl();
      ol(n);
      try {
        ((e) => {
          if (
            ((jo = document.createElement("canvas")),
            !(Po = jo.getContext("2d", { alpha: !0 })))
          )
            return null;
          const t = window.devicePixelRatio || 1,
            { innerWidth: n, innerHeight: r } = window;
          (jo.style.width = `${n}px`),
            (jo.style.height = `${r}px`),
            (jo.width = n * t),
            (jo.height = r * t),
            (jo.style.position = "fixed"),
            (jo.style.left = "0"),
            (jo.style.top = "0"),
            (jo.style.pointerEvents = "none"),
            (jo.style.zIndex = "2147483600"),
            Po.scale(t, t),
            e.appendChild(jo),
            Lo && window.removeEventListener("resize", Lo);
          const o = () => {
            if (!jo || !Po) return;
            const e = window.devicePixelRatio || 1,
              { innerWidth: t, innerHeight: n } = window;
            (jo.style.width = `${t}px`),
              (jo.style.height = `${n}px`),
              (jo.width = t * e),
              (jo.height = n * e),
              Po.scale(e, e),
              Oo();
          };
          (Lo = o),
            window.addEventListener("resize", o),
            Do.subscribe(() => {
              requestAnimationFrame(() => {
                Oo();
              });
            });
        })(document.documentElement);
      } catch (e) {
        "verbose" === cl.options.value._debug &&
          console.error(
            "[React Scan Internal Error]",
            "Failed to create notifications outline canvas",
            e,
          );
      }
    },
    bl = (e = {}) => {
      hl(e);
      ll.isInIframe.value || (!1 === e.enabled && !0 !== e.showToolbar) || wl();
    },
    xl = new WeakSet();
  Q(),
    Q(),
    "undefined" != typeof window && (bl(), (window.reactScan = bl)),
    /*! Bundled license information:

  react/cjs/react.production.min.js:
    (**
     * @license React
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     *)

  bippy/dist/chunk-ZF32UKFC.js:
    (**
     * @license bippy
     *
     * Copyright (c) Aiden Bai, Million Software, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     *)
  */ (e.ReactScanInternals = cl),
    (e.Store = ll),
    (e.getIsProduction = gl),
    (e.getOptions = fl),
    (e.getReport = (e) => {
      if (e) {
        for (const t of Array.from(ll.legacyReportData.values()))
          if (t.type === e) return t;
        return null;
      }
      return ll.legacyReportData;
    }),
    (e.ignoreScan = (e) => {
      e && "object" == typeof e && xl.add(e);
    }),
    (e.ignoredProps = xl),
    (e.onRender = (e, t) => {
      const n = cl.onRender;
      cl.onRender = (r, o) => {
        n?.(r, o), L(r.type) === e && t(r, o);
      };
    }),
    (e.scan = bl),
    (e.setOptions = hl),
    (e.start = wl),
    (e.useScan = (e = {}) => {
      hl(e), wl();
    });
})({});
