(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) p(f);
  new MutationObserver((f) => {
    for (const m of f)
      if (m.type === "childList")
        for (const x of m.addedNodes)
          x.tagName === "LINK" && x.rel === "modulepreload" && p(x);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(f) {
    const m = {};
    return (
      f.integrity && (m.integrity = f.integrity),
      f.referrerPolicy && (m.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === "use-credentials"
        ? (m.credentials = "include")
        : f.crossOrigin === "anonymous"
        ? (m.credentials = "omit")
        : (m.credentials = "same-origin"),
      m
    );
  }
  function p(f) {
    if (f.ep) return;
    f.ep = !0;
    const m = a(f);
    fetch(f.href, m);
  }
})();
var Qi = { exports: {} },
  Rr = {},
  Ki = { exports: {} },
  b = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rc;
function Id() {
  if (rc) return b;
  rc = 1;
  var i = Symbol.for("react.element"),
    s = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    p = Symbol.for("react.strict_mode"),
    f = Symbol.for("react.profiler"),
    m = Symbol.for("react.provider"),
    x = Symbol.for("react.context"),
    E = Symbol.for("react.forward_ref"),
    S = Symbol.for("react.suspense"),
    k = Symbol.for("react.memo"),
    I = Symbol.for("react.lazy"),
    D = Symbol.iterator;
  function P(v) {
    return v === null || typeof v != "object"
      ? null
      : ((v = (D && v[D]) || v["@@iterator"]),
        typeof v == "function" ? v : null);
  }
  var $ = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    z = Object.assign,
    j = {};
  function O(v, R, q) {
    (this.props = v),
      (this.context = R),
      (this.refs = j),
      (this.updater = q || $);
  }
  (O.prototype.isReactComponent = {}),
    (O.prototype.setState = function (v, R) {
      if (typeof v != "object" && typeof v != "function" && v != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, v, R, "setState");
    }),
    (O.prototype.forceUpdate = function (v) {
      this.updater.enqueueForceUpdate(this, v, "forceUpdate");
    });
  function F() {}
  F.prototype = O.prototype;
  function A(v, R, q) {
    (this.props = v),
      (this.context = R),
      (this.refs = j),
      (this.updater = q || $);
  }
  var Z = (A.prototype = new F());
  (Z.constructor = A), z(Z, O.prototype), (Z.isPureReactComponent = !0);
  var te = Array.isArray,
    ae = Object.prototype.hasOwnProperty,
    we = { current: null },
    me = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Pe(v, R, q) {
    var ee,
      re = {},
      le = null,
      se = null;
    if (R != null)
      for (ee in (R.ref !== void 0 && (se = R.ref),
      R.key !== void 0 && (le = "" + R.key),
      R))
        ae.call(R, ee) && !me.hasOwnProperty(ee) && (re[ee] = R[ee]);
    var ie = arguments.length - 2;
    if (ie === 1) re.children = q;
    else if (1 < ie) {
      for (var pe = Array(ie), Ge = 0; Ge < ie; Ge++)
        pe[Ge] = arguments[Ge + 2];
      re.children = pe;
    }
    if (v && v.defaultProps)
      for (ee in ((ie = v.defaultProps), ie))
        re[ee] === void 0 && (re[ee] = ie[ee]);
    return {
      $$typeof: i,
      type: v,
      key: le,
      ref: se,
      props: re,
      _owner: we.current,
    };
  }
  function Se(v, R) {
    return {
      $$typeof: i,
      type: v.type,
      key: R,
      ref: v.ref,
      props: v.props,
      _owner: v._owner,
    };
  }
  function Le(v) {
    return typeof v == "object" && v !== null && v.$$typeof === i;
  }
  function ht(v) {
    var R = { "=": "=0", ":": "=2" };
    return (
      "$" +
      v.replace(/[=:]/g, function (q) {
        return R[q];
      })
    );
  }
  var mt = /\/+/g;
  function Xe(v, R) {
    return typeof v == "object" && v !== null && v.key != null
      ? ht("" + v.key)
      : R.toString(36);
  }
  function it(v, R, q, ee, re) {
    var le = typeof v;
    (le === "undefined" || le === "boolean") && (v = null);
    var se = !1;
    if (v === null) se = !0;
    else
      switch (le) {
        case "string":
        case "number":
          se = !0;
          break;
        case "object":
          switch (v.$$typeof) {
            case i:
            case s:
              se = !0;
          }
      }
    if (se)
      return (
        (se = v),
        (re = re(se)),
        (v = ee === "" ? "." + Xe(se, 0) : ee),
        te(re)
          ? ((q = ""),
            v != null && (q = v.replace(mt, "$&/") + "/"),
            it(re, R, q, "", function (Ge) {
              return Ge;
            }))
          : re != null &&
            (Le(re) &&
              (re = Se(
                re,
                q +
                  (!re.key || (se && se.key === re.key)
                    ? ""
                    : ("" + re.key).replace(mt, "$&/") + "/") +
                  v
              )),
            R.push(re)),
        1
      );
    if (((se = 0), (ee = ee === "" ? "." : ee + ":"), te(v)))
      for (var ie = 0; ie < v.length; ie++) {
        le = v[ie];
        var pe = ee + Xe(le, ie);
        se += it(le, R, q, pe, re);
      }
    else if (((pe = P(v)), typeof pe == "function"))
      for (v = pe.call(v), ie = 0; !(le = v.next()).done; )
        (le = le.value), (pe = ee + Xe(le, ie++)), (se += it(le, R, q, pe, re));
    else if (le === "object")
      throw (
        ((R = String(v)),
        Error(
          "Objects are not valid as a React child (found: " +
            (R === "[object Object]"
              ? "object with keys {" + Object.keys(v).join(", ") + "}"
              : R) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return se;
  }
  function vt(v, R, q) {
    if (v == null) return v;
    var ee = [],
      re = 0;
    return (
      it(v, ee, "", "", function (le) {
        return R.call(q, le, re++);
      }),
      ee
    );
  }
  function Be(v) {
    if (v._status === -1) {
      var R = v._result;
      (R = R()),
        R.then(
          function (q) {
            (v._status === 0 || v._status === -1) &&
              ((v._status = 1), (v._result = q));
          },
          function (q) {
            (v._status === 0 || v._status === -1) &&
              ((v._status = 2), (v._result = q));
          }
        ),
        v._status === -1 && ((v._status = 0), (v._result = R));
    }
    if (v._status === 1) return v._result.default;
    throw v._result;
  }
  var ke = { current: null },
    M = { transition: null },
    G = {
      ReactCurrentDispatcher: ke,
      ReactCurrentBatchConfig: M,
      ReactCurrentOwner: we,
    };
  function H() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (b.Children = {
      map: vt,
      forEach: function (v, R, q) {
        vt(
          v,
          function () {
            R.apply(this, arguments);
          },
          q
        );
      },
      count: function (v) {
        var R = 0;
        return (
          vt(v, function () {
            R++;
          }),
          R
        );
      },
      toArray: function (v) {
        return (
          vt(v, function (R) {
            return R;
          }) || []
        );
      },
      only: function (v) {
        if (!Le(v))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return v;
      },
    }),
    (b.Component = O),
    (b.Fragment = a),
    (b.Profiler = f),
    (b.PureComponent = A),
    (b.StrictMode = p),
    (b.Suspense = S),
    (b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G),
    (b.act = H),
    (b.cloneElement = function (v, R, q) {
      if (v == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            v +
            "."
        );
      var ee = z({}, v.props),
        re = v.key,
        le = v.ref,
        se = v._owner;
      if (R != null) {
        if (
          (R.ref !== void 0 && ((le = R.ref), (se = we.current)),
          R.key !== void 0 && (re = "" + R.key),
          v.type && v.type.defaultProps)
        )
          var ie = v.type.defaultProps;
        for (pe in R)
          ae.call(R, pe) &&
            !me.hasOwnProperty(pe) &&
            (ee[pe] = R[pe] === void 0 && ie !== void 0 ? ie[pe] : R[pe]);
      }
      var pe = arguments.length - 2;
      if (pe === 1) ee.children = q;
      else if (1 < pe) {
        ie = Array(pe);
        for (var Ge = 0; Ge < pe; Ge++) ie[Ge] = arguments[Ge + 2];
        ee.children = ie;
      }
      return {
        $$typeof: i,
        type: v.type,
        key: re,
        ref: le,
        props: ee,
        _owner: se,
      };
    }),
    (b.createContext = function (v) {
      return (
        (v = {
          $$typeof: x,
          _currentValue: v,
          _currentValue2: v,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (v.Provider = { $$typeof: m, _context: v }),
        (v.Consumer = v)
      );
    }),
    (b.createElement = Pe),
    (b.createFactory = function (v) {
      var R = Pe.bind(null, v);
      return (R.type = v), R;
    }),
    (b.createRef = function () {
      return { current: null };
    }),
    (b.forwardRef = function (v) {
      return { $$typeof: E, render: v };
    }),
    (b.isValidElement = Le),
    (b.lazy = function (v) {
      return { $$typeof: I, _payload: { _status: -1, _result: v }, _init: Be };
    }),
    (b.memo = function (v, R) {
      return { $$typeof: k, type: v, compare: R === void 0 ? null : R };
    }),
    (b.startTransition = function (v) {
      var R = M.transition;
      M.transition = {};
      try {
        v();
      } finally {
        M.transition = R;
      }
    }),
    (b.unstable_act = H),
    (b.useCallback = function (v, R) {
      return ke.current.useCallback(v, R);
    }),
    (b.useContext = function (v) {
      return ke.current.useContext(v);
    }),
    (b.useDebugValue = function () {}),
    (b.useDeferredValue = function (v) {
      return ke.current.useDeferredValue(v);
    }),
    (b.useEffect = function (v, R) {
      return ke.current.useEffect(v, R);
    }),
    (b.useId = function () {
      return ke.current.useId();
    }),
    (b.useImperativeHandle = function (v, R, q) {
      return ke.current.useImperativeHandle(v, R, q);
    }),
    (b.useInsertionEffect = function (v, R) {
      return ke.current.useInsertionEffect(v, R);
    }),
    (b.useLayoutEffect = function (v, R) {
      return ke.current.useLayoutEffect(v, R);
    }),
    (b.useMemo = function (v, R) {
      return ke.current.useMemo(v, R);
    }),
    (b.useReducer = function (v, R, q) {
      return ke.current.useReducer(v, R, q);
    }),
    (b.useRef = function (v) {
      return ke.current.useRef(v);
    }),
    (b.useState = function (v) {
      return ke.current.useState(v);
    }),
    (b.useSyncExternalStore = function (v, R, q) {
      return ke.current.useSyncExternalStore(v, R, q);
    }),
    (b.useTransition = function () {
      return ke.current.useTransition();
    }),
    (b.version = "18.3.1"),
    b
  );
}
var lc;
function ru() {
  return lc || ((lc = 1), (Ki.exports = Id())), Ki.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var oc;
function Od() {
  if (oc) return Rr;
  oc = 1;
  var i = ru(),
    s = Symbol.for("react.element"),
    a = Symbol.for("react.fragment"),
    p = Object.prototype.hasOwnProperty,
    f = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(E, S, k) {
    var I,
      D = {},
      P = null,
      $ = null;
    k !== void 0 && (P = "" + k),
      S.key !== void 0 && (P = "" + S.key),
      S.ref !== void 0 && ($ = S.ref);
    for (I in S) p.call(S, I) && !m.hasOwnProperty(I) && (D[I] = S[I]);
    if (E && E.defaultProps)
      for (I in ((S = E.defaultProps), S)) D[I] === void 0 && (D[I] = S[I]);
    return {
      $$typeof: s,
      type: E,
      key: P,
      ref: $,
      props: D,
      _owner: f.current,
    };
  }
  return (Rr.Fragment = a), (Rr.jsx = x), (Rr.jsxs = x), Rr;
}
var ic;
function Dd() {
  return ic || ((ic = 1), (Qi.exports = Od())), Qi.exports;
}
var K = Dd(),
  C = ru(),
  Wl = {},
  Yi = { exports: {} },
  Ye = {},
  Xi = { exports: {} },
  Gi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uc;
function Fd() {
  return (
    uc ||
      ((uc = 1),
      (function (i) {
        function s(M, G) {
          var H = M.length;
          M.push(G);
          e: for (; 0 < H; ) {
            var v = (H - 1) >>> 1,
              R = M[v];
            if (0 < f(R, G)) (M[v] = G), (M[H] = R), (H = v);
            else break e;
          }
        }
        function a(M) {
          return M.length === 0 ? null : M[0];
        }
        function p(M) {
          if (M.length === 0) return null;
          var G = M[0],
            H = M.pop();
          if (H !== G) {
            M[0] = H;
            e: for (var v = 0, R = M.length, q = R >>> 1; v < q; ) {
              var ee = 2 * (v + 1) - 1,
                re = M[ee],
                le = ee + 1,
                se = M[le];
              if (0 > f(re, H))
                le < R && 0 > f(se, re)
                  ? ((M[v] = se), (M[le] = H), (v = le))
                  : ((M[v] = re), (M[ee] = H), (v = ee));
              else if (le < R && 0 > f(se, H))
                (M[v] = se), (M[le] = H), (v = le);
              else break e;
            }
          }
          return G;
        }
        function f(M, G) {
          var H = M.sortIndex - G.sortIndex;
          return H !== 0 ? H : M.id - G.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var m = performance;
          i.unstable_now = function () {
            return m.now();
          };
        } else {
          var x = Date,
            E = x.now();
          i.unstable_now = function () {
            return x.now() - E;
          };
        }
        var S = [],
          k = [],
          I = 1,
          D = null,
          P = 3,
          $ = !1,
          z = !1,
          j = !1,
          O = typeof setTimeout == "function" ? setTimeout : null,
          F = typeof clearTimeout == "function" ? clearTimeout : null,
          A = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function Z(M) {
          for (var G = a(k); G !== null; ) {
            if (G.callback === null) p(k);
            else if (G.startTime <= M)
              p(k), (G.sortIndex = G.expirationTime), s(S, G);
            else break;
            G = a(k);
          }
        }
        function te(M) {
          if (((j = !1), Z(M), !z))
            if (a(S) !== null) (z = !0), Be(ae);
            else {
              var G = a(k);
              G !== null && ke(te, G.startTime - M);
            }
        }
        function ae(M, G) {
          (z = !1), j && ((j = !1), F(Pe), (Pe = -1)), ($ = !0);
          var H = P;
          try {
            for (
              Z(G), D = a(S);
              D !== null && (!(D.expirationTime > G) || (M && !ht()));

            ) {
              var v = D.callback;
              if (typeof v == "function") {
                (D.callback = null), (P = D.priorityLevel);
                var R = v(D.expirationTime <= G);
                (G = i.unstable_now()),
                  typeof R == "function"
                    ? (D.callback = R)
                    : D === a(S) && p(S),
                  Z(G);
              } else p(S);
              D = a(S);
            }
            if (D !== null) var q = !0;
            else {
              var ee = a(k);
              ee !== null && ke(te, ee.startTime - G), (q = !1);
            }
            return q;
          } finally {
            (D = null), (P = H), ($ = !1);
          }
        }
        var we = !1,
          me = null,
          Pe = -1,
          Se = 5,
          Le = -1;
        function ht() {
          return !(i.unstable_now() - Le < Se);
        }
        function mt() {
          if (me !== null) {
            var M = i.unstable_now();
            Le = M;
            var G = !0;
            try {
              G = me(!0, M);
            } finally {
              G ? Xe() : ((we = !1), (me = null));
            }
          } else we = !1;
        }
        var Xe;
        if (typeof A == "function")
          Xe = function () {
            A(mt);
          };
        else if (typeof MessageChannel < "u") {
          var it = new MessageChannel(),
            vt = it.port2;
          (it.port1.onmessage = mt),
            (Xe = function () {
              vt.postMessage(null);
            });
        } else
          Xe = function () {
            O(mt, 0);
          };
        function Be(M) {
          (me = M), we || ((we = !0), Xe());
        }
        function ke(M, G) {
          Pe = O(function () {
            M(i.unstable_now());
          }, G);
        }
        (i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (M) {
            M.callback = null;
          }),
          (i.unstable_continueExecution = function () {
            z || $ || ((z = !0), Be(ae));
          }),
          (i.unstable_forceFrameRate = function (M) {
            0 > M || 125 < M
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Se = 0 < M ? Math.floor(1e3 / M) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return P;
          }),
          (i.unstable_getFirstCallbackNode = function () {
            return a(S);
          }),
          (i.unstable_next = function (M) {
            switch (P) {
              case 1:
              case 2:
              case 3:
                var G = 3;
                break;
              default:
                G = P;
            }
            var H = P;
            P = G;
            try {
              return M();
            } finally {
              P = H;
            }
          }),
          (i.unstable_pauseExecution = function () {}),
          (i.unstable_requestPaint = function () {}),
          (i.unstable_runWithPriority = function (M, G) {
            switch (M) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                M = 3;
            }
            var H = P;
            P = M;
            try {
              return G();
            } finally {
              P = H;
            }
          }),
          (i.unstable_scheduleCallback = function (M, G, H) {
            var v = i.unstable_now();
            switch (
              (typeof H == "object" && H !== null
                ? ((H = H.delay),
                  (H = typeof H == "number" && 0 < H ? v + H : v))
                : (H = v),
              M)
            ) {
              case 1:
                var R = -1;
                break;
              case 2:
                R = 250;
                break;
              case 5:
                R = 1073741823;
                break;
              case 4:
                R = 1e4;
                break;
              default:
                R = 5e3;
            }
            return (
              (R = H + R),
              (M = {
                id: I++,
                callback: G,
                priorityLevel: M,
                startTime: H,
                expirationTime: R,
                sortIndex: -1,
              }),
              H > v
                ? ((M.sortIndex = H),
                  s(k, M),
                  a(S) === null &&
                    M === a(k) &&
                    (j ? (F(Pe), (Pe = -1)) : (j = !0), ke(te, H - v)))
                : ((M.sortIndex = R), s(S, M), z || $ || ((z = !0), Be(ae))),
              M
            );
          }),
          (i.unstable_shouldYield = ht),
          (i.unstable_wrapCallback = function (M) {
            var G = P;
            return function () {
              var H = P;
              P = G;
              try {
                return M.apply(this, arguments);
              } finally {
                P = H;
              }
            };
          });
      })(Gi)),
    Gi
  );
}
var ac;
function jd() {
  return ac || ((ac = 1), (Xi.exports = Fd())), Xi.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sc;
function Md() {
  if (sc) return Ye;
  sc = 1;
  var i = ru(),
    s = jd();
  function a(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var p = new Set(),
    f = {};
  function m(e, t) {
    x(e, t), x(e + "Capture", t);
  }
  function x(e, t) {
    for (f[e] = t, e = 0; e < t.length; e++) p.add(t[e]);
  }
  var E = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    S = Object.prototype.hasOwnProperty,
    k =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    I = {},
    D = {};
  function P(e) {
    return S.call(D, e)
      ? !0
      : S.call(I, e)
      ? !1
      : k.test(e)
      ? (D[e] = !0)
      : ((I[e] = !0), !1);
  }
  function $(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function z(e, t, n, r) {
    if (t === null || typeof t > "u" || $(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function j(e, t, n, r, l, o, u) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = u);
  }
  var O = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      O[e] = new j(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      O[t] = new j(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      O[e] = new j(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      O[e] = new j(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        O[e] = new j(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      O[e] = new j(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      O[e] = new j(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      O[e] = new j(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      O[e] = new j(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var F = /[\-:]([a-z])/g;
  function A(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(F, A);
      O[t] = new j(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(F, A);
        O[t] = new j(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(F, A);
      O[t] = new j(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      O[e] = new j(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (O.xlinkHref = new j(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      O[e] = new j(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function Z(e, t, n, r) {
    var l = O.hasOwnProperty(t) ? O[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (z(t, n, l, r) && (n = null),
      r || l === null
        ? P(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var te = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ae = Symbol.for("react.element"),
    we = Symbol.for("react.portal"),
    me = Symbol.for("react.fragment"),
    Pe = Symbol.for("react.strict_mode"),
    Se = Symbol.for("react.profiler"),
    Le = Symbol.for("react.provider"),
    ht = Symbol.for("react.context"),
    mt = Symbol.for("react.forward_ref"),
    Xe = Symbol.for("react.suspense"),
    it = Symbol.for("react.suspense_list"),
    vt = Symbol.for("react.memo"),
    Be = Symbol.for("react.lazy"),
    ke = Symbol.for("react.offscreen"),
    M = Symbol.iterator;
  function G(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (M && e[M]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var H = Object.assign,
    v;
  function R(e) {
    if (v === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        v = (t && t[1]) || "";
      }
    return (
      `
` +
      v +
      e
    );
  }
  var q = !1;
  function ee(e, t) {
    if (!e || q) return "";
    q = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (w) {
            var r = w;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (w) {
            r = w;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (w) {
          r = w;
        }
        e();
      }
    } catch (w) {
      if (w && r && typeof w.stack == "string") {
        for (
          var l = w.stack.split(`
`),
            o = r.stack.split(`
`),
            u = l.length - 1,
            c = o.length - 1;
          1 <= u && 0 <= c && l[u] !== o[c];

        )
          c--;
        for (; 1 <= u && 0 <= c; u--, c--)
          if (l[u] !== o[c]) {
            if (u !== 1 || c !== 1)
              do
                if ((u--, c--, 0 > c || l[u] !== o[c])) {
                  var d =
                    `
` + l[u].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      d.includes("<anonymous>") &&
                      (d = d.replace("<anonymous>", e.displayName)),
                    d
                  );
                }
              while (1 <= u && 0 <= c);
            break;
          }
      }
    } finally {
      (q = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? R(e) : "";
  }
  function re(e) {
    switch (e.tag) {
      case 5:
        return R(e.type);
      case 16:
        return R("Lazy");
      case 13:
        return R("Suspense");
      case 19:
        return R("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = ee(e.type, !1)), e;
      case 11:
        return (e = ee(e.type.render, !1)), e;
      case 1:
        return (e = ee(e.type, !0)), e;
      default:
        return "";
    }
  }
  function le(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case me:
        return "Fragment";
      case we:
        return "Portal";
      case Se:
        return "Profiler";
      case Pe:
        return "StrictMode";
      case Xe:
        return "Suspense";
      case it:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ht:
          return (e.displayName || "Context") + ".Consumer";
        case Le:
          return (e._context.displayName || "Context") + ".Provider";
        case mt:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case vt:
          return (
            (t = e.displayName || null), t !== null ? t : le(e.type) || "Memo"
          );
        case Be:
          (t = e._payload), (e = e._init);
          try {
            return le(e(t));
          } catch {}
      }
    return null;
  }
  function se(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return le(t);
      case 8:
        return t === Pe ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function ie(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function pe(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Ge(e) {
    var t = pe(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        o = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (u) {
            (r = "" + u), o.call(this, u);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (u) {
            r = "" + u;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Dr(e) {
    e._valueTracker || (e._valueTracker = Ge(e));
  }
  function su(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = pe(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Fr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Zl(e, t) {
    var n = t.checked;
    return H({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function cu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = ie(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function fu(e, t) {
    (t = t.checked), t != null && Z(e, "checked", t, !1);
  }
  function ql(e, t) {
    fu(e, t);
    var n = ie(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? bl(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && bl(e, t.type, ie(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function du(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function bl(e, t, n) {
    (t !== "number" || Fr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Hn = Array.isArray;
  function mn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        (l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ie(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function eo(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(a(91));
    return H({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function pu(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(a(92));
        if (Hn(n)) {
          if (1 < n.length) throw Error(a(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: ie(n) };
  }
  function hu(e, t) {
    var n = ie(t.value),
      r = ie(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function mu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function vu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function to(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? vu(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var jr,
    yu = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          jr = jr || document.createElement("div"),
            jr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = jr.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Vn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Wn = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Fc = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Wn).forEach(function (e) {
    Fc.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Wn[t] = Wn[e]);
    });
  });
  function gu(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Wn.hasOwnProperty(e) && Wn[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function wu(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = gu(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var jc = H(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function no(e, t) {
    if (t) {
      if (jc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(a(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(a(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(a(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(a(62));
    }
  }
  function ro(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var lo = null;
  function oo(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var io = null,
    vn = null,
    yn = null;
  function Su(e) {
    if ((e = dr(e))) {
      if (typeof io != "function") throw Error(a(280));
      var t = e.stateNode;
      t && ((t = ol(t)), io(e.stateNode, e.type, t));
    }
  }
  function ku(e) {
    vn ? (yn ? yn.push(e) : (yn = [e])) : (vn = e);
  }
  function xu() {
    if (vn) {
      var e = vn,
        t = yn;
      if (((yn = vn = null), Su(e), t)) for (e = 0; e < t.length; e++) Su(t[e]);
    }
  }
  function Eu(e, t) {
    return e(t);
  }
  function Cu() {}
  var uo = !1;
  function Pu(e, t, n) {
    if (uo) return e(t, n);
    uo = !0;
    try {
      return Eu(e, t, n);
    } finally {
      (uo = !1), (vn !== null || yn !== null) && (Cu(), xu());
    }
  }
  function Qn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ol(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(a(231, t, typeof n));
    return n;
  }
  var ao = !1;
  if (E)
    try {
      var Kn = {};
      Object.defineProperty(Kn, "passive", {
        get: function () {
          ao = !0;
        },
      }),
        window.addEventListener("test", Kn, Kn),
        window.removeEventListener("test", Kn, Kn);
    } catch {
      ao = !1;
    }
  function Mc(e, t, n, r, l, o, u, c, d) {
    var w = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, w);
    } catch (N) {
      this.onError(N);
    }
  }
  var Yn = !1,
    Mr = null,
    $r = !1,
    so = null,
    $c = {
      onError: function (e) {
        (Yn = !0), (Mr = e);
      },
    };
  function Uc(e, t, n, r, l, o, u, c, d) {
    (Yn = !1), (Mr = null), Mc.apply($c, arguments);
  }
  function Ac(e, t, n, r, l, o, u, c, d) {
    if ((Uc.apply(this, arguments), Yn)) {
      if (Yn) {
        var w = Mr;
        (Yn = !1), (Mr = null);
      } else throw Error(a(198));
      $r || (($r = !0), (so = w));
    }
  }
  function en(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function _u(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Ru(e) {
    if (en(e) !== e) throw Error(a(188));
  }
  function Bc(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = en(e)), t === null)) throw Error(a(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return Ru(l), e;
          if (o === r) return Ru(l), t;
          o = o.sibling;
        }
        throw Error(a(188));
      }
      if (n.return !== r.return) (n = l), (r = o);
      else {
        for (var u = !1, c = l.child; c; ) {
          if (c === n) {
            (u = !0), (n = l), (r = o);
            break;
          }
          if (c === r) {
            (u = !0), (r = l), (n = o);
            break;
          }
          c = c.sibling;
        }
        if (!u) {
          for (c = o.child; c; ) {
            if (c === n) {
              (u = !0), (n = o), (r = l);
              break;
            }
            if (c === r) {
              (u = !0), (r = o), (n = l);
              break;
            }
            c = c.sibling;
          }
          if (!u) throw Error(a(189));
        }
      }
      if (n.alternate !== r) throw Error(a(190));
    }
    if (n.tag !== 3) throw Error(a(188));
    return n.stateNode.current === n ? e : t;
  }
  function Nu(e) {
    return (e = Bc(e)), e !== null ? Lu(e) : null;
  }
  function Lu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Lu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Tu = s.unstable_scheduleCallback,
    zu = s.unstable_cancelCallback,
    Hc = s.unstable_shouldYield,
    Vc = s.unstable_requestPaint,
    Ee = s.unstable_now,
    Wc = s.unstable_getCurrentPriorityLevel,
    co = s.unstable_ImmediatePriority,
    Iu = s.unstable_UserBlockingPriority,
    Ur = s.unstable_NormalPriority,
    Qc = s.unstable_LowPriority,
    Ou = s.unstable_IdlePriority,
    Ar = null,
    yt = null;
  function Kc(e) {
    if (yt && typeof yt.onCommitFiberRoot == "function")
      try {
        yt.onCommitFiberRoot(Ar, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var ut = Math.clz32 ? Math.clz32 : Gc,
    Yc = Math.log,
    Xc = Math.LN2;
  function Gc(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Yc(e) / Xc) | 0)) | 0;
  }
  var Br = 64,
    Hr = 4194304;
  function Xn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Vr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      o = e.pingedLanes,
      u = n & 268435455;
    if (u !== 0) {
      var c = u & ~l;
      c !== 0 ? (r = Xn(c)) : ((o &= u), o !== 0 && (r = Xn(o)));
    } else (u = n & ~l), u !== 0 ? (r = Xn(u)) : o !== 0 && (r = Xn(o));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & l) &&
      ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - ut(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
  }
  function Jc(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Zc(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        o = e.pendingLanes;
      0 < o;

    ) {
      var u = 31 - ut(o),
        c = 1 << u,
        d = l[u];
      d === -1
        ? (!(c & n) || c & r) && (l[u] = Jc(c, t))
        : d <= t && (e.expiredLanes |= c),
        (o &= ~c);
    }
  }
  function fo(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Du() {
    var e = Br;
    return (Br <<= 1), !(Br & 4194240) && (Br = 64), e;
  }
  function po(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Gn(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - ut(t)),
      (e[t] = n);
  }
  function qc(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - ut(n),
        o = 1 << l;
      (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
    }
  }
  function ho(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - ut(n),
        l = 1 << r;
      (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
  }
  var ue = 0;
  function Fu(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var ju,
    mo,
    Mu,
    $u,
    Uu,
    vo = !1,
    Wr = [],
    Dt = null,
    Ft = null,
    jt = null,
    Jn = new Map(),
    Zn = new Map(),
    Mt = [],
    bc =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Au(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Dt = null;
        break;
      case "dragenter":
      case "dragleave":
        Ft = null;
        break;
      case "mouseover":
      case "mouseout":
        jt = null;
        break;
      case "pointerover":
      case "pointerout":
        Jn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Zn.delete(t.pointerId);
    }
  }
  function qn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [l],
        }),
        t !== null && ((t = dr(t)), t !== null && mo(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function ef(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return (Dt = qn(Dt, e, t, n, r, l)), !0;
      case "dragenter":
        return (Ft = qn(Ft, e, t, n, r, l)), !0;
      case "mouseover":
        return (jt = qn(jt, e, t, n, r, l)), !0;
      case "pointerover":
        var o = l.pointerId;
        return Jn.set(o, qn(Jn.get(o) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return (
          (o = l.pointerId), Zn.set(o, qn(Zn.get(o) || null, e, t, n, r, l)), !0
        );
    }
    return !1;
  }
  function Bu(e) {
    var t = tn(e.target);
    if (t !== null) {
      var n = en(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = _u(n)), t !== null)) {
            (e.blockedOn = t),
              Uu(e.priority, function () {
                Mu(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Qr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = go(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (lo = r), n.target.dispatchEvent(r), (lo = null);
      } else return (t = dr(n)), t !== null && mo(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Hu(e, t, n) {
    Qr(e) && n.delete(t);
  }
  function tf() {
    (vo = !1),
      Dt !== null && Qr(Dt) && (Dt = null),
      Ft !== null && Qr(Ft) && (Ft = null),
      jt !== null && Qr(jt) && (jt = null),
      Jn.forEach(Hu),
      Zn.forEach(Hu);
  }
  function bn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      vo ||
        ((vo = !0),
        s.unstable_scheduleCallback(s.unstable_NormalPriority, tf)));
  }
  function er(e) {
    function t(l) {
      return bn(l, e);
    }
    if (0 < Wr.length) {
      bn(Wr[0], e);
      for (var n = 1; n < Wr.length; n++) {
        var r = Wr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Dt !== null && bn(Dt, e),
        Ft !== null && bn(Ft, e),
        jt !== null && bn(jt, e),
        Jn.forEach(t),
        Zn.forEach(t),
        n = 0;
      n < Mt.length;
      n++
    )
      (r = Mt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Mt.length && ((n = Mt[0]), n.blockedOn === null); )
      Bu(n), n.blockedOn === null && Mt.shift();
  }
  var gn = te.ReactCurrentBatchConfig,
    Kr = !0;
  function nf(e, t, n, r) {
    var l = ue,
      o = gn.transition;
    gn.transition = null;
    try {
      (ue = 1), yo(e, t, n, r);
    } finally {
      (ue = l), (gn.transition = o);
    }
  }
  function rf(e, t, n, r) {
    var l = ue,
      o = gn.transition;
    gn.transition = null;
    try {
      (ue = 4), yo(e, t, n, r);
    } finally {
      (ue = l), (gn.transition = o);
    }
  }
  function yo(e, t, n, r) {
    if (Kr) {
      var l = go(e, t, n, r);
      if (l === null) Fo(e, t, r, Yr, n), Au(e, r);
      else if (ef(l, e, t, n, r)) r.stopPropagation();
      else if ((Au(e, r), t & 4 && -1 < bc.indexOf(e))) {
        for (; l !== null; ) {
          var o = dr(l);
          if (
            (o !== null && ju(o),
            (o = go(e, t, n, r)),
            o === null && Fo(e, t, r, Yr, n),
            o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else Fo(e, t, r, null, n);
    }
  }
  var Yr = null;
  function go(e, t, n, r) {
    if (((Yr = null), (e = oo(r)), (e = tn(e)), e !== null))
      if (((t = en(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = _u(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Yr = e), null;
  }
  function Vu(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Wc()) {
          case co:
            return 1;
          case Iu:
            return 4;
          case Ur:
          case Qc:
            return 16;
          case Ou:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var $t = null,
    wo = null,
    Xr = null;
  function Wu() {
    if (Xr) return Xr;
    var e,
      t = wo,
      n = t.length,
      r,
      l = "value" in $t ? $t.value : $t.textContent,
      o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var u = n - e;
    for (r = 1; r <= u && t[n - r] === l[o - r]; r++);
    return (Xr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Gr(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Jr() {
    return !0;
  }
  function Qu() {
    return !1;
  }
  function Je(e) {
    function t(n, r, l, o, u) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = u),
        (this.currentTarget = null);
      for (var c in e)
        e.hasOwnProperty(c) && ((n = e[c]), (this[c] = n ? n(o) : o[c]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? Jr
          : Qu),
        (this.isPropagationStopped = Qu),
        this
      );
    }
    return (
      H(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Jr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Jr));
        },
        persist: function () {},
        isPersistent: Jr,
      }),
      t
    );
  }
  var wn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    So = Je(wn),
    tr = H({}, wn, { view: 0, detail: 0 }),
    lf = Je(tr),
    ko,
    xo,
    nr,
    Zr = H({}, tr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Co,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== nr &&
              (nr && e.type === "mousemove"
                ? ((ko = e.screenX - nr.screenX), (xo = e.screenY - nr.screenY))
                : (xo = ko = 0),
              (nr = e)),
            ko);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : xo;
      },
    }),
    Ku = Je(Zr),
    of = H({}, Zr, { dataTransfer: 0 }),
    uf = Je(of),
    af = H({}, tr, { relatedTarget: 0 }),
    Eo = Je(af),
    sf = H({}, wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    cf = Je(sf),
    ff = H({}, wn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    df = Je(ff),
    pf = H({}, wn, { data: 0 }),
    Yu = Je(pf),
    hf = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    mf = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    vf = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function yf(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = vf[e])
      ? !!t[e]
      : !1;
  }
  function Co() {
    return yf;
  }
  var gf = H({}, tr, {
      key: function (e) {
        if (e.key) {
          var t = hf[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Gr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? mf[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Co,
      charCode: function (e) {
        return e.type === "keypress" ? Gr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Gr(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    wf = Je(gf),
    Sf = H({}, Zr, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Xu = Je(Sf),
    kf = H({}, tr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Co,
    }),
    xf = Je(kf),
    Ef = H({}, wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Cf = Je(Ef),
    Pf = H({}, Zr, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    _f = Je(Pf),
    Rf = [9, 13, 27, 32],
    Po = E && "CompositionEvent" in window,
    rr = null;
  E && "documentMode" in document && (rr = document.documentMode);
  var Nf = E && "TextEvent" in window && !rr,
    Gu = E && (!Po || (rr && 8 < rr && 11 >= rr)),
    Ju = " ",
    Zu = !1;
  function qu(e, t) {
    switch (e) {
      case "keyup":
        return Rf.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function bu(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Sn = !1;
  function Lf(e, t) {
    switch (e) {
      case "compositionend":
        return bu(t);
      case "keypress":
        return t.which !== 32 ? null : ((Zu = !0), Ju);
      case "textInput":
        return (e = t.data), e === Ju && Zu ? null : e;
      default:
        return null;
    }
  }
  function Tf(e, t) {
    if (Sn)
      return e === "compositionend" || (!Po && qu(e, t))
        ? ((e = Wu()), (Xr = wo = $t = null), (Sn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Gu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var zf = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function ea(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!zf[e.type] : t === "textarea";
  }
  function ta(e, t, n, r) {
    ku(r),
      (t = nl(t, "onChange")),
      0 < t.length &&
        ((n = new So("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var lr = null,
    or = null;
  function If(e) {
    wa(e, 0);
  }
  function qr(e) {
    var t = Pn(e);
    if (su(t)) return e;
  }
  function Of(e, t) {
    if (e === "change") return t;
  }
  var na = !1;
  if (E) {
    var _o;
    if (E) {
      var Ro = "oninput" in document;
      if (!Ro) {
        var ra = document.createElement("div");
        ra.setAttribute("oninput", "return;"),
          (Ro = typeof ra.oninput == "function");
      }
      _o = Ro;
    } else _o = !1;
    na = _o && (!document.documentMode || 9 < document.documentMode);
  }
  function la() {
    lr && (lr.detachEvent("onpropertychange", oa), (or = lr = null));
  }
  function oa(e) {
    if (e.propertyName === "value" && qr(or)) {
      var t = [];
      ta(t, or, e, oo(e)), Pu(If, t);
    }
  }
  function Df(e, t, n) {
    e === "focusin"
      ? (la(), (lr = t), (or = n), lr.attachEvent("onpropertychange", oa))
      : e === "focusout" && la();
  }
  function Ff(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return qr(or);
  }
  function jf(e, t) {
    if (e === "click") return qr(t);
  }
  function Mf(e, t) {
    if (e === "input" || e === "change") return qr(t);
  }
  function $f(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var at = typeof Object.is == "function" ? Object.is : $f;
  function ir(e, t) {
    if (at(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!S.call(t, l) || !at(e[l], t[l])) return !1;
    }
    return !0;
  }
  function ia(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ua(e, t) {
    var n = ia(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = ia(n);
    }
  }
  function aa(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? aa(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function sa() {
    for (var e = window, t = Fr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Fr(e.document);
    }
    return t;
  }
  function No(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Uf(e) {
    var t = sa(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      aa(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && No(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            o = Math.min(r.start, l);
          (r = r.end === void 0 ? o : Math.min(r.end, l)),
            !e.extend && o > r && ((l = r), (r = o), (o = l)),
            (l = ua(n, o));
          var u = ua(n, r);
          l &&
            u &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== u.node ||
              e.focusOffset !== u.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            o > r
              ? (e.addRange(t), e.extend(u.node, u.offset))
              : (t.setEnd(u.node, u.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Af = E && "documentMode" in document && 11 >= document.documentMode,
    kn = null,
    Lo = null,
    ur = null,
    To = !1;
  function ca(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    To ||
      kn == null ||
      kn !== Fr(r) ||
      ((r = kn),
      "selectionStart" in r && No(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (ur && ir(ur, r)) ||
        ((ur = r),
        (r = nl(Lo, "onSelect")),
        0 < r.length &&
          ((t = new So("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = kn))));
  }
  function br(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var xn = {
      animationend: br("Animation", "AnimationEnd"),
      animationiteration: br("Animation", "AnimationIteration"),
      animationstart: br("Animation", "AnimationStart"),
      transitionend: br("Transition", "TransitionEnd"),
    },
    zo = {},
    fa = {};
  E &&
    ((fa = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete xn.animationend.animation,
      delete xn.animationiteration.animation,
      delete xn.animationstart.animation),
    "TransitionEvent" in window || delete xn.transitionend.transition);
  function el(e) {
    if (zo[e]) return zo[e];
    if (!xn[e]) return e;
    var t = xn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in fa) return (zo[e] = t[n]);
    return e;
  }
  var da = el("animationend"),
    pa = el("animationiteration"),
    ha = el("animationstart"),
    ma = el("transitionend"),
    va = new Map(),
    ya =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Ut(e, t) {
    va.set(e, t), m(t, [e]);
  }
  for (var Io = 0; Io < ya.length; Io++) {
    var Oo = ya[Io],
      Bf = Oo.toLowerCase(),
      Hf = Oo[0].toUpperCase() + Oo.slice(1);
    Ut(Bf, "on" + Hf);
  }
  Ut(da, "onAnimationEnd"),
    Ut(pa, "onAnimationIteration"),
    Ut(ha, "onAnimationStart"),
    Ut("dblclick", "onDoubleClick"),
    Ut("focusin", "onFocus"),
    Ut("focusout", "onBlur"),
    Ut(ma, "onTransitionEnd"),
    x("onMouseEnter", ["mouseout", "mouseover"]),
    x("onMouseLeave", ["mouseout", "mouseover"]),
    x("onPointerEnter", ["pointerout", "pointerover"]),
    x("onPointerLeave", ["pointerout", "pointerover"]),
    m(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    m(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    m("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    m(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    m(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    m(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var ar =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Vf = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(ar)
    );
  function ga(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Ac(r, t, void 0, e), (e.currentTarget = null);
  }
  function wa(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var u = r.length - 1; 0 <= u; u--) {
            var c = r[u],
              d = c.instance,
              w = c.currentTarget;
            if (((c = c.listener), d !== o && l.isPropagationStopped()))
              break e;
            ga(l, c, w), (o = d);
          }
        else
          for (u = 0; u < r.length; u++) {
            if (
              ((c = r[u]),
              (d = c.instance),
              (w = c.currentTarget),
              (c = c.listener),
              d !== o && l.isPropagationStopped())
            )
              break e;
            ga(l, c, w), (o = d);
          }
      }
    }
    if ($r) throw ((e = so), ($r = !1), (so = null), e);
  }
  function fe(e, t) {
    var n = t[Bo];
    n === void 0 && (n = t[Bo] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Sa(t, e, 2, !1), n.add(r));
  }
  function Do(e, t, n) {
    var r = 0;
    t && (r |= 4), Sa(n, e, r, t);
  }
  var tl = "_reactListening" + Math.random().toString(36).slice(2);
  function sr(e) {
    if (!e[tl]) {
      (e[tl] = !0),
        p.forEach(function (n) {
          n !== "selectionchange" && (Vf.has(n) || Do(n, !1, e), Do(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[tl] || ((t[tl] = !0), Do("selectionchange", !1, t));
    }
  }
  function Sa(e, t, n, r) {
    switch (Vu(t)) {
      case 1:
        var l = nf;
        break;
      case 4:
        l = rf;
        break;
      default:
        l = yo;
    }
    (n = l.bind(null, t, n, e)),
      (l = void 0),
      !ao ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
  }
  function Fo(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var u = r.tag;
        if (u === 3 || u === 4) {
          var c = r.stateNode.containerInfo;
          if (c === l || (c.nodeType === 8 && c.parentNode === l)) break;
          if (u === 4)
            for (u = r.return; u !== null; ) {
              var d = u.tag;
              if (
                (d === 3 || d === 4) &&
                ((d = u.stateNode.containerInfo),
                d === l || (d.nodeType === 8 && d.parentNode === l))
              )
                return;
              u = u.return;
            }
          for (; c !== null; ) {
            if (((u = tn(c)), u === null)) return;
            if (((d = u.tag), d === 5 || d === 6)) {
              r = o = u;
              continue e;
            }
            c = c.parentNode;
          }
        }
        r = r.return;
      }
    Pu(function () {
      var w = o,
        N = oo(n),
        L = [];
      e: {
        var _ = va.get(e);
        if (_ !== void 0) {
          var U = So,
            V = e;
          switch (e) {
            case "keypress":
              if (Gr(n) === 0) break e;
            case "keydown":
            case "keyup":
              U = wf;
              break;
            case "focusin":
              (V = "focus"), (U = Eo);
              break;
            case "focusout":
              (V = "blur"), (U = Eo);
              break;
            case "beforeblur":
            case "afterblur":
              U = Eo;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              U = Ku;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              U = uf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = xf;
              break;
            case da:
            case pa:
            case ha:
              U = cf;
              break;
            case ma:
              U = Cf;
              break;
            case "scroll":
              U = lf;
              break;
            case "wheel":
              U = _f;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = df;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              U = Xu;
          }
          var W = (t & 4) !== 0,
            Ce = !W && e === "scroll",
            y = W ? (_ !== null ? _ + "Capture" : null) : _;
          W = [];
          for (var h = w, g; h !== null; ) {
            g = h;
            var T = g.stateNode;
            if (
              (g.tag === 5 &&
                T !== null &&
                ((g = T),
                y !== null &&
                  ((T = Qn(h, y)), T != null && W.push(cr(h, T, g)))),
              Ce)
            )
              break;
            h = h.return;
          }
          0 < W.length &&
            ((_ = new U(_, V, null, n, N)), L.push({ event: _, listeners: W }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((_ = e === "mouseover" || e === "pointerover"),
            (U = e === "mouseout" || e === "pointerout"),
            _ &&
              n !== lo &&
              (V = n.relatedTarget || n.fromElement) &&
              (tn(V) || V[Ct]))
          )
            break e;
          if (
            (U || _) &&
            ((_ =
              N.window === N
                ? N
                : (_ = N.ownerDocument)
                ? _.defaultView || _.parentWindow
                : window),
            U
              ? ((V = n.relatedTarget || n.toElement),
                (U = w),
                (V = V ? tn(V) : null),
                V !== null &&
                  ((Ce = en(V)), V !== Ce || (V.tag !== 5 && V.tag !== 6)) &&
                  (V = null))
              : ((U = null), (V = w)),
            U !== V)
          ) {
            if (
              ((W = Ku),
              (T = "onMouseLeave"),
              (y = "onMouseEnter"),
              (h = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((W = Xu),
                (T = "onPointerLeave"),
                (y = "onPointerEnter"),
                (h = "pointer")),
              (Ce = U == null ? _ : Pn(U)),
              (g = V == null ? _ : Pn(V)),
              (_ = new W(T, h + "leave", U, n, N)),
              (_.target = Ce),
              (_.relatedTarget = g),
              (T = null),
              tn(N) === w &&
                ((W = new W(y, h + "enter", V, n, N)),
                (W.target = g),
                (W.relatedTarget = Ce),
                (T = W)),
              (Ce = T),
              U && V)
            )
              t: {
                for (W = U, y = V, h = 0, g = W; g; g = En(g)) h++;
                for (g = 0, T = y; T; T = En(T)) g++;
                for (; 0 < h - g; ) (W = En(W)), h--;
                for (; 0 < g - h; ) (y = En(y)), g--;
                for (; h--; ) {
                  if (W === y || (y !== null && W === y.alternate)) break t;
                  (W = En(W)), (y = En(y));
                }
                W = null;
              }
            else W = null;
            U !== null && ka(L, _, U, W, !1),
              V !== null && Ce !== null && ka(L, Ce, V, W, !0);
          }
        }
        e: {
          if (
            ((_ = w ? Pn(w) : window),
            (U = _.nodeName && _.nodeName.toLowerCase()),
            U === "select" || (U === "input" && _.type === "file"))
          )
            var Q = Of;
          else if (ea(_))
            if (na) Q = Mf;
            else {
              Q = Ff;
              var Y = Df;
            }
          else
            (U = _.nodeName) &&
              U.toLowerCase() === "input" &&
              (_.type === "checkbox" || _.type === "radio") &&
              (Q = jf);
          if (Q && (Q = Q(e, w))) {
            ta(L, Q, n, N);
            break e;
          }
          Y && Y(e, _, w),
            e === "focusout" &&
              (Y = _._wrapperState) &&
              Y.controlled &&
              _.type === "number" &&
              bl(_, "number", _.value);
        }
        switch (((Y = w ? Pn(w) : window), e)) {
          case "focusin":
            (ea(Y) || Y.contentEditable === "true") &&
              ((kn = Y), (Lo = w), (ur = null));
            break;
          case "focusout":
            ur = Lo = kn = null;
            break;
          case "mousedown":
            To = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (To = !1), ca(L, n, N);
            break;
          case "selectionchange":
            if (Af) break;
          case "keydown":
          case "keyup":
            ca(L, n, N);
        }
        var X;
        if (Po)
          e: {
            switch (e) {
              case "compositionstart":
                var J = "onCompositionStart";
                break e;
              case "compositionend":
                J = "onCompositionEnd";
                break e;
              case "compositionupdate":
                J = "onCompositionUpdate";
                break e;
            }
            J = void 0;
          }
        else
          Sn
            ? qu(e, n) && (J = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (J = "onCompositionStart");
        J &&
          (Gu &&
            n.locale !== "ko" &&
            (Sn || J !== "onCompositionStart"
              ? J === "onCompositionEnd" && Sn && (X = Wu())
              : (($t = N),
                (wo = "value" in $t ? $t.value : $t.textContent),
                (Sn = !0))),
          (Y = nl(w, J)),
          0 < Y.length &&
            ((J = new Yu(J, e, null, n, N)),
            L.push({ event: J, listeners: Y }),
            X ? (J.data = X) : ((X = bu(n)), X !== null && (J.data = X)))),
          (X = Nf ? Lf(e, n) : Tf(e, n)) &&
            ((w = nl(w, "onBeforeInput")),
            0 < w.length &&
              ((N = new Yu("onBeforeInput", "beforeinput", null, n, N)),
              L.push({ event: N, listeners: w }),
              (N.data = X)));
      }
      wa(L, t);
    });
  }
  function cr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function nl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        o = l.stateNode;
      l.tag === 5 &&
        o !== null &&
        ((l = o),
        (o = Qn(e, n)),
        o != null && r.unshift(cr(e, o, l)),
        (o = Qn(e, t)),
        o != null && r.push(cr(e, o, l))),
        (e = e.return);
    }
    return r;
  }
  function En(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function ka(e, t, n, r, l) {
    for (var o = t._reactName, u = []; n !== null && n !== r; ) {
      var c = n,
        d = c.alternate,
        w = c.stateNode;
      if (d !== null && d === r) break;
      c.tag === 5 &&
        w !== null &&
        ((c = w),
        l
          ? ((d = Qn(n, o)), d != null && u.unshift(cr(n, d, c)))
          : l || ((d = Qn(n, o)), d != null && u.push(cr(n, d, c)))),
        (n = n.return);
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var Wf = /\r\n?/g,
    Qf = /\u0000|\uFFFD/g;
  function xa(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Wf,
        `
`
      )
      .replace(Qf, "");
  }
  function rl(e, t, n) {
    if (((t = xa(t)), xa(e) !== t && n)) throw Error(a(425));
  }
  function ll() {}
  var jo = null,
    Mo = null;
  function $o(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Uo = typeof setTimeout == "function" ? setTimeout : void 0,
    Kf = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ea = typeof Promise == "function" ? Promise : void 0,
    Yf =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ea < "u"
        ? function (e) {
            return Ea.resolve(null).then(e).catch(Xf);
          }
        : Uo;
  function Xf(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ao(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(l), er(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    er(t);
  }
  function At(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Ca(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Cn = Math.random().toString(36).slice(2),
    gt = "__reactFiber$" + Cn,
    fr = "__reactProps$" + Cn,
    Ct = "__reactContainer$" + Cn,
    Bo = "__reactEvents$" + Cn,
    Gf = "__reactListeners$" + Cn,
    Jf = "__reactHandles$" + Cn;
  function tn(e) {
    var t = e[gt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Ct] || n[gt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Ca(e); e !== null; ) {
            if ((n = e[gt])) return n;
            e = Ca(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function dr(e) {
    return (
      (e = e[gt] || e[Ct]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Pn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(a(33));
  }
  function ol(e) {
    return e[fr] || null;
  }
  var Ho = [],
    _n = -1;
  function Bt(e) {
    return { current: e };
  }
  function de(e) {
    0 > _n || ((e.current = Ho[_n]), (Ho[_n] = null), _n--);
  }
  function ce(e, t) {
    _n++, (Ho[_n] = e.current), (e.current = t);
  }
  var Ht = {},
    Fe = Bt(Ht),
    He = Bt(!1),
    nn = Ht;
  function Rn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ht;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      o;
    for (o in n) l[o] = t[o];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Ve(e) {
    return (e = e.childContextTypes), e != null;
  }
  function il() {
    de(He), de(Fe);
  }
  function Pa(e, t, n) {
    if (Fe.current !== Ht) throw Error(a(168));
    ce(Fe, t), ce(He, n);
  }
  function _a(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(a(108, se(e) || "Unknown", l));
    return H({}, n, r);
  }
  function ul(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Ht),
      (nn = Fe.current),
      ce(Fe, e),
      ce(He, He.current),
      !0
    );
  }
  function Ra(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(a(169));
    n
      ? ((e = _a(e, t, nn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        de(He),
        de(Fe),
        ce(Fe, e))
      : de(He),
      ce(He, n);
  }
  var Pt = null,
    al = !1,
    Vo = !1;
  function Na(e) {
    Pt === null ? (Pt = [e]) : Pt.push(e);
  }
  function Zf(e) {
    (al = !0), Na(e);
  }
  function Vt() {
    if (!Vo && Pt !== null) {
      Vo = !0;
      var e = 0,
        t = ue;
      try {
        var n = Pt;
        for (ue = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (Pt = null), (al = !1);
      } catch (l) {
        throw (Pt !== null && (Pt = Pt.slice(e + 1)), Tu(co, Vt), l);
      } finally {
        (ue = t), (Vo = !1);
      }
    }
    return null;
  }
  var Nn = [],
    Ln = 0,
    sl = null,
    cl = 0,
    et = [],
    tt = 0,
    rn = null,
    _t = 1,
    Rt = "";
  function ln(e, t) {
    (Nn[Ln++] = cl), (Nn[Ln++] = sl), (sl = e), (cl = t);
  }
  function La(e, t, n) {
    (et[tt++] = _t), (et[tt++] = Rt), (et[tt++] = rn), (rn = e);
    var r = _t;
    e = Rt;
    var l = 32 - ut(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var o = 32 - ut(t) + l;
    if (30 < o) {
      var u = l - (l % 5);
      (o = (r & ((1 << u) - 1)).toString(32)),
        (r >>= u),
        (l -= u),
        (_t = (1 << (32 - ut(t) + l)) | (n << l) | r),
        (Rt = o + e);
    } else (_t = (1 << o) | (n << l) | r), (Rt = e);
  }
  function Wo(e) {
    e.return !== null && (ln(e, 1), La(e, 1, 0));
  }
  function Qo(e) {
    for (; e === sl; )
      (sl = Nn[--Ln]), (Nn[Ln] = null), (cl = Nn[--Ln]), (Nn[Ln] = null);
    for (; e === rn; )
      (rn = et[--tt]),
        (et[tt] = null),
        (Rt = et[--tt]),
        (et[tt] = null),
        (_t = et[--tt]),
        (et[tt] = null);
  }
  var Ze = null,
    qe = null,
    he = !1,
    st = null;
  function Ta(e, t) {
    var n = ot(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function za(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Ze = e), (qe = At(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Ze = e), (qe = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = rn !== null ? { id: _t, overflow: Rt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = ot(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Ze = e),
              (qe = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Ko(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Yo(e) {
    if (he) {
      var t = qe;
      if (t) {
        var n = t;
        if (!za(e, t)) {
          if (Ko(e)) throw Error(a(418));
          t = At(n.nextSibling);
          var r = Ze;
          t && za(e, t)
            ? Ta(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (he = !1), (Ze = e));
        }
      } else {
        if (Ko(e)) throw Error(a(418));
        (e.flags = (e.flags & -4097) | 2), (he = !1), (Ze = e);
      }
    }
  }
  function Ia(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Ze = e;
  }
  function fl(e) {
    if (e !== Ze) return !1;
    if (!he) return Ia(e), (he = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !$o(e.type, e.memoizedProps))),
      t && (t = qe))
    ) {
      if (Ko(e)) throw (Oa(), Error(a(418)));
      for (; t; ) Ta(e, t), (t = At(t.nextSibling));
    }
    if ((Ia(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(a(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                qe = At(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        qe = null;
      }
    } else qe = Ze ? At(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Oa() {
    for (var e = qe; e; ) e = At(e.nextSibling);
  }
  function Tn() {
    (qe = Ze = null), (he = !1);
  }
  function Xo(e) {
    st === null ? (st = [e]) : st.push(e);
  }
  var qf = te.ReactCurrentBatchConfig;
  function pr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(a(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(a(147, e));
        var l = r,
          o = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === o
          ? t.ref
          : ((t = function (u) {
              var c = l.refs;
              u === null ? delete c[o] : (c[o] = u);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != "string") throw Error(a(284));
      if (!n._owner) throw Error(a(290, e));
    }
    return e;
  }
  function dl(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        a(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function Da(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Fa(e) {
    function t(y, h) {
      if (e) {
        var g = y.deletions;
        g === null ? ((y.deletions = [h]), (y.flags |= 16)) : g.push(h);
      }
    }
    function n(y, h) {
      if (!e) return null;
      for (; h !== null; ) t(y, h), (h = h.sibling);
      return null;
    }
    function r(y, h) {
      for (y = new Map(); h !== null; )
        h.key !== null ? y.set(h.key, h) : y.set(h.index, h), (h = h.sibling);
      return y;
    }
    function l(y, h) {
      return (y = Zt(y, h)), (y.index = 0), (y.sibling = null), y;
    }
    function o(y, h, g) {
      return (
        (y.index = g),
        e
          ? ((g = y.alternate),
            g !== null
              ? ((g = g.index), g < h ? ((y.flags |= 2), h) : g)
              : ((y.flags |= 2), h))
          : ((y.flags |= 1048576), h)
      );
    }
    function u(y) {
      return e && y.alternate === null && (y.flags |= 2), y;
    }
    function c(y, h, g, T) {
      return h === null || h.tag !== 6
        ? ((h = Ui(g, y.mode, T)), (h.return = y), h)
        : ((h = l(h, g)), (h.return = y), h);
    }
    function d(y, h, g, T) {
      var Q = g.type;
      return Q === me
        ? N(y, h, g.props.children, T, g.key)
        : h !== null &&
          (h.elementType === Q ||
            (typeof Q == "object" &&
              Q !== null &&
              Q.$$typeof === Be &&
              Da(Q) === h.type))
        ? ((T = l(h, g.props)), (T.ref = pr(y, h, g)), (T.return = y), T)
        : ((T = jl(g.type, g.key, g.props, null, y.mode, T)),
          (T.ref = pr(y, h, g)),
          (T.return = y),
          T);
    }
    function w(y, h, g, T) {
      return h === null ||
        h.tag !== 4 ||
        h.stateNode.containerInfo !== g.containerInfo ||
        h.stateNode.implementation !== g.implementation
        ? ((h = Ai(g, y.mode, T)), (h.return = y), h)
        : ((h = l(h, g.children || [])), (h.return = y), h);
    }
    function N(y, h, g, T, Q) {
      return h === null || h.tag !== 7
        ? ((h = pn(g, y.mode, T, Q)), (h.return = y), h)
        : ((h = l(h, g)), (h.return = y), h);
    }
    function L(y, h, g) {
      if ((typeof h == "string" && h !== "") || typeof h == "number")
        return (h = Ui("" + h, y.mode, g)), (h.return = y), h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case ae:
            return (
              (g = jl(h.type, h.key, h.props, null, y.mode, g)),
              (g.ref = pr(y, null, h)),
              (g.return = y),
              g
            );
          case we:
            return (h = Ai(h, y.mode, g)), (h.return = y), h;
          case Be:
            var T = h._init;
            return L(y, T(h._payload), g);
        }
        if (Hn(h) || G(h))
          return (h = pn(h, y.mode, g, null)), (h.return = y), h;
        dl(y, h);
      }
      return null;
    }
    function _(y, h, g, T) {
      var Q = h !== null ? h.key : null;
      if ((typeof g == "string" && g !== "") || typeof g == "number")
        return Q !== null ? null : c(y, h, "" + g, T);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case ae:
            return g.key === Q ? d(y, h, g, T) : null;
          case we:
            return g.key === Q ? w(y, h, g, T) : null;
          case Be:
            return (Q = g._init), _(y, h, Q(g._payload), T);
        }
        if (Hn(g) || G(g)) return Q !== null ? null : N(y, h, g, T, null);
        dl(y, g);
      }
      return null;
    }
    function U(y, h, g, T, Q) {
      if ((typeof T == "string" && T !== "") || typeof T == "number")
        return (y = y.get(g) || null), c(h, y, "" + T, Q);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case ae:
            return (
              (y = y.get(T.key === null ? g : T.key) || null), d(h, y, T, Q)
            );
          case we:
            return (
              (y = y.get(T.key === null ? g : T.key) || null), w(h, y, T, Q)
            );
          case Be:
            var Y = T._init;
            return U(y, h, g, Y(T._payload), Q);
        }
        if (Hn(T) || G(T)) return (y = y.get(g) || null), N(h, y, T, Q, null);
        dl(h, T);
      }
      return null;
    }
    function V(y, h, g, T) {
      for (
        var Q = null, Y = null, X = h, J = (h = 0), Ie = null;
        X !== null && J < g.length;
        J++
      ) {
        X.index > J ? ((Ie = X), (X = null)) : (Ie = X.sibling);
        var oe = _(y, X, g[J], T);
        if (oe === null) {
          X === null && (X = Ie);
          break;
        }
        e && X && oe.alternate === null && t(y, X),
          (h = o(oe, h, J)),
          Y === null ? (Q = oe) : (Y.sibling = oe),
          (Y = oe),
          (X = Ie);
      }
      if (J === g.length) return n(y, X), he && ln(y, J), Q;
      if (X === null) {
        for (; J < g.length; J++)
          (X = L(y, g[J], T)),
            X !== null &&
              ((h = o(X, h, J)),
              Y === null ? (Q = X) : (Y.sibling = X),
              (Y = X));
        return he && ln(y, J), Q;
      }
      for (X = r(y, X); J < g.length; J++)
        (Ie = U(X, y, J, g[J], T)),
          Ie !== null &&
            (e &&
              Ie.alternate !== null &&
              X.delete(Ie.key === null ? J : Ie.key),
            (h = o(Ie, h, J)),
            Y === null ? (Q = Ie) : (Y.sibling = Ie),
            (Y = Ie));
      return (
        e &&
          X.forEach(function (qt) {
            return t(y, qt);
          }),
        he && ln(y, J),
        Q
      );
    }
    function W(y, h, g, T) {
      var Q = G(g);
      if (typeof Q != "function") throw Error(a(150));
      if (((g = Q.call(g)), g == null)) throw Error(a(151));
      for (
        var Y = (Q = null), X = h, J = (h = 0), Ie = null, oe = g.next();
        X !== null && !oe.done;
        J++, oe = g.next()
      ) {
        X.index > J ? ((Ie = X), (X = null)) : (Ie = X.sibling);
        var qt = _(y, X, oe.value, T);
        if (qt === null) {
          X === null && (X = Ie);
          break;
        }
        e && X && qt.alternate === null && t(y, X),
          (h = o(qt, h, J)),
          Y === null ? (Q = qt) : (Y.sibling = qt),
          (Y = qt),
          (X = Ie);
      }
      if (oe.done) return n(y, X), he && ln(y, J), Q;
      if (X === null) {
        for (; !oe.done; J++, oe = g.next())
          (oe = L(y, oe.value, T)),
            oe !== null &&
              ((h = o(oe, h, J)),
              Y === null ? (Q = oe) : (Y.sibling = oe),
              (Y = oe));
        return he && ln(y, J), Q;
      }
      for (X = r(y, X); !oe.done; J++, oe = g.next())
        (oe = U(X, y, J, oe.value, T)),
          oe !== null &&
            (e &&
              oe.alternate !== null &&
              X.delete(oe.key === null ? J : oe.key),
            (h = o(oe, h, J)),
            Y === null ? (Q = oe) : (Y.sibling = oe),
            (Y = oe));
      return (
        e &&
          X.forEach(function (zd) {
            return t(y, zd);
          }),
        he && ln(y, J),
        Q
      );
    }
    function Ce(y, h, g, T) {
      if (
        (typeof g == "object" &&
          g !== null &&
          g.type === me &&
          g.key === null &&
          (g = g.props.children),
        typeof g == "object" && g !== null)
      ) {
        switch (g.$$typeof) {
          case ae:
            e: {
              for (var Q = g.key, Y = h; Y !== null; ) {
                if (Y.key === Q) {
                  if (((Q = g.type), Q === me)) {
                    if (Y.tag === 7) {
                      n(y, Y.sibling),
                        (h = l(Y, g.props.children)),
                        (h.return = y),
                        (y = h);
                      break e;
                    }
                  } else if (
                    Y.elementType === Q ||
                    (typeof Q == "object" &&
                      Q !== null &&
                      Q.$$typeof === Be &&
                      Da(Q) === Y.type)
                  ) {
                    n(y, Y.sibling),
                      (h = l(Y, g.props)),
                      (h.ref = pr(y, Y, g)),
                      (h.return = y),
                      (y = h);
                    break e;
                  }
                  n(y, Y);
                  break;
                } else t(y, Y);
                Y = Y.sibling;
              }
              g.type === me
                ? ((h = pn(g.props.children, y.mode, T, g.key)),
                  (h.return = y),
                  (y = h))
                : ((T = jl(g.type, g.key, g.props, null, y.mode, T)),
                  (T.ref = pr(y, h, g)),
                  (T.return = y),
                  (y = T));
            }
            return u(y);
          case we:
            e: {
              for (Y = g.key; h !== null; ) {
                if (h.key === Y)
                  if (
                    h.tag === 4 &&
                    h.stateNode.containerInfo === g.containerInfo &&
                    h.stateNode.implementation === g.implementation
                  ) {
                    n(y, h.sibling),
                      (h = l(h, g.children || [])),
                      (h.return = y),
                      (y = h);
                    break e;
                  } else {
                    n(y, h);
                    break;
                  }
                else t(y, h);
                h = h.sibling;
              }
              (h = Ai(g, y.mode, T)), (h.return = y), (y = h);
            }
            return u(y);
          case Be:
            return (Y = g._init), Ce(y, h, Y(g._payload), T);
        }
        if (Hn(g)) return V(y, h, g, T);
        if (G(g)) return W(y, h, g, T);
        dl(y, g);
      }
      return (typeof g == "string" && g !== "") || typeof g == "number"
        ? ((g = "" + g),
          h !== null && h.tag === 6
            ? (n(y, h.sibling), (h = l(h, g)), (h.return = y), (y = h))
            : (n(y, h), (h = Ui(g, y.mode, T)), (h.return = y), (y = h)),
          u(y))
        : n(y, h);
    }
    return Ce;
  }
  var zn = Fa(!0),
    ja = Fa(!1),
    pl = Bt(null),
    hl = null,
    In = null,
    Go = null;
  function Jo() {
    Go = In = hl = null;
  }
  function Zo(e) {
    var t = pl.current;
    de(pl), (e._currentValue = t);
  }
  function qo(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function On(e, t) {
    (hl = e),
      (Go = In = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (We = !0), (e.firstContext = null));
  }
  function nt(e) {
    var t = e._currentValue;
    if (Go !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), In === null)) {
        if (hl === null) throw Error(a(308));
        (In = e), (hl.dependencies = { lanes: 0, firstContext: e });
      } else In = In.next = e;
    return t;
  }
  var on = null;
  function bo(e) {
    on === null ? (on = [e]) : on.push(e);
  }
  function Ma(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), bo(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Nt(e, r)
    );
  }
  function Nt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var Wt = !1;
  function ei(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function $a(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Lt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Qt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), ne & 2)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Nt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), bo(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Nt(e, n)
    );
  }
  function ml(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), ho(e, n);
    }
  }
  function Ua(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var u = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          o === null ? (l = o = u) : (o = o.next = u), (n = n.next);
        } while (n !== null);
        o === null ? (l = o = t) : (o = o.next = t);
      } else l = o = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: o,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function vl(e, t, n, r) {
    var l = e.updateQueue;
    Wt = !1;
    var o = l.firstBaseUpdate,
      u = l.lastBaseUpdate,
      c = l.shared.pending;
    if (c !== null) {
      l.shared.pending = null;
      var d = c,
        w = d.next;
      (d.next = null), u === null ? (o = w) : (u.next = w), (u = d);
      var N = e.alternate;
      N !== null &&
        ((N = N.updateQueue),
        (c = N.lastBaseUpdate),
        c !== u &&
          (c === null ? (N.firstBaseUpdate = w) : (c.next = w),
          (N.lastBaseUpdate = d)));
    }
    if (o !== null) {
      var L = l.baseState;
      (u = 0), (N = w = d = null), (c = o);
      do {
        var _ = c.lane,
          U = c.eventTime;
        if ((r & _) === _) {
          N !== null &&
            (N = N.next =
              {
                eventTime: U,
                lane: 0,
                tag: c.tag,
                payload: c.payload,
                callback: c.callback,
                next: null,
              });
          e: {
            var V = e,
              W = c;
            switch (((_ = t), (U = n), W.tag)) {
              case 1:
                if (((V = W.payload), typeof V == "function")) {
                  L = V.call(U, L, _);
                  break e;
                }
                L = V;
                break e;
              case 3:
                V.flags = (V.flags & -65537) | 128;
              case 0:
                if (
                  ((V = W.payload),
                  (_ = typeof V == "function" ? V.call(U, L, _) : V),
                  _ == null)
                )
                  break e;
                L = H({}, L, _);
                break e;
              case 2:
                Wt = !0;
            }
          }
          c.callback !== null &&
            c.lane !== 0 &&
            ((e.flags |= 64),
            (_ = l.effects),
            _ === null ? (l.effects = [c]) : _.push(c));
        } else
          (U = {
            eventTime: U,
            lane: _,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null,
          }),
            N === null ? ((w = N = U), (d = L)) : (N = N.next = U),
            (u |= _);
        if (((c = c.next), c === null)) {
          if (((c = l.shared.pending), c === null)) break;
          (_ = c),
            (c = _.next),
            (_.next = null),
            (l.lastBaseUpdate = _),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (N === null && (d = L),
        (l.baseState = d),
        (l.firstBaseUpdate = w),
        (l.lastBaseUpdate = N),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (u |= l.lane), (l = l.next);
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      (sn |= u), (e.lanes = u), (e.memoizedState = L);
    }
  }
  function Aa(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(a(191, l));
          l.call(r);
        }
      }
  }
  var hr = {},
    wt = Bt(hr),
    mr = Bt(hr),
    vr = Bt(hr);
  function un(e) {
    if (e === hr) throw Error(a(174));
    return e;
  }
  function ti(e, t) {
    switch ((ce(vr, t), ce(mr, e), ce(wt, hr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : to(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = to(t, e));
    }
    de(wt), ce(wt, t);
  }
  function Dn() {
    de(wt), de(mr), de(vr);
  }
  function Ba(e) {
    un(vr.current);
    var t = un(wt.current),
      n = to(t, e.type);
    t !== n && (ce(mr, e), ce(wt, n));
  }
  function ni(e) {
    mr.current === e && (de(wt), de(mr));
  }
  var ve = Bt(0);
  function yl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var ri = [];
  function li() {
    for (var e = 0; e < ri.length; e++)
      ri[e]._workInProgressVersionPrimary = null;
    ri.length = 0;
  }
  var gl = te.ReactCurrentDispatcher,
    oi = te.ReactCurrentBatchConfig,
    an = 0,
    ye = null,
    Re = null,
    Te = null,
    wl = !1,
    yr = !1,
    gr = 0,
    bf = 0;
  function je() {
    throw Error(a(321));
  }
  function ii(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!at(e[n], t[n])) return !1;
    return !0;
  }
  function ui(e, t, n, r, l, o) {
    if (
      ((an = o),
      (ye = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (gl.current = e === null || e.memoizedState === null ? rd : ld),
      (e = n(r, l)),
      yr)
    ) {
      o = 0;
      do {
        if (((yr = !1), (gr = 0), 25 <= o)) throw Error(a(301));
        (o += 1),
          (Te = Re = null),
          (t.updateQueue = null),
          (gl.current = od),
          (e = n(r, l));
      } while (yr);
    }
    if (
      ((gl.current = xl),
      (t = Re !== null && Re.next !== null),
      (an = 0),
      (Te = Re = ye = null),
      (wl = !1),
      t)
    )
      throw Error(a(300));
    return e;
  }
  function ai() {
    var e = gr !== 0;
    return (gr = 0), e;
  }
  function St() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Te === null ? (ye.memoizedState = Te = e) : (Te = Te.next = e), Te;
  }
  function rt() {
    if (Re === null) {
      var e = ye.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Re.next;
    var t = Te === null ? ye.memoizedState : Te.next;
    if (t !== null) (Te = t), (Re = e);
    else {
      if (e === null) throw Error(a(310));
      (Re = e),
        (e = {
          memoizedState: Re.memoizedState,
          baseState: Re.baseState,
          baseQueue: Re.baseQueue,
          queue: Re.queue,
          next: null,
        }),
        Te === null ? (ye.memoizedState = Te = e) : (Te = Te.next = e);
    }
    return Te;
  }
  function wr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function si(e) {
    var t = rt(),
      n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = Re,
      l = r.baseQueue,
      o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var u = l.next;
        (l.next = o.next), (o.next = u);
      }
      (r.baseQueue = l = o), (n.pending = null);
    }
    if (l !== null) {
      (o = l.next), (r = r.baseState);
      var c = (u = null),
        d = null,
        w = o;
      do {
        var N = w.lane;
        if ((an & N) === N)
          d !== null &&
            (d = d.next =
              {
                lane: 0,
                action: w.action,
                hasEagerState: w.hasEagerState,
                eagerState: w.eagerState,
                next: null,
              }),
            (r = w.hasEagerState ? w.eagerState : e(r, w.action));
        else {
          var L = {
            lane: N,
            action: w.action,
            hasEagerState: w.hasEagerState,
            eagerState: w.eagerState,
            next: null,
          };
          d === null ? ((c = d = L), (u = r)) : (d = d.next = L),
            (ye.lanes |= N),
            (sn |= N);
        }
        w = w.next;
      } while (w !== null && w !== o);
      d === null ? (u = r) : (d.next = c),
        at(r, t.memoizedState) || (We = !0),
        (t.memoizedState = r),
        (t.baseState = u),
        (t.baseQueue = d),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do (o = l.lane), (ye.lanes |= o), (sn |= o), (l = l.next);
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function ci(e) {
    var t = rt(),
      n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var u = (l = l.next);
      do (o = e(o, u.action)), (u = u.next);
      while (u !== l);
      at(o, t.memoizedState) || (We = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, r];
  }
  function Ha() {}
  function Va(e, t) {
    var n = ye,
      r = rt(),
      l = t(),
      o = !at(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (We = !0)),
      (r = r.queue),
      fi(Ka.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (Te !== null && Te.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Sr(9, Qa.bind(null, n, r, l, t), void 0, null),
        ze === null)
      )
        throw Error(a(349));
      an & 30 || Wa(n, t, l);
    }
    return l;
  }
  function Wa(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ye.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ye.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Qa(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Ya(t) && Xa(e);
  }
  function Ka(e, t, n) {
    return n(function () {
      Ya(t) && Xa(e);
    });
  }
  function Ya(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !at(e, n);
    } catch {
      return !0;
    }
  }
  function Xa(e) {
    var t = Nt(e, 1);
    t !== null && pt(t, e, 1, -1);
  }
  function Ga(e) {
    var t = St();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: wr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = nd.bind(null, ye, e)),
      [t.memoizedState, e]
    );
  }
  function Sr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = ye.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ye.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Ja() {
    return rt().memoizedState;
  }
  function Sl(e, t, n, r) {
    var l = St();
    (ye.flags |= e),
      (l.memoizedState = Sr(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function kl(e, t, n, r) {
    var l = rt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Re !== null) {
      var u = Re.memoizedState;
      if (((o = u.destroy), r !== null && ii(r, u.deps))) {
        l.memoizedState = Sr(t, n, o, r);
        return;
      }
    }
    (ye.flags |= e), (l.memoizedState = Sr(1 | t, n, o, r));
  }
  function Za(e, t) {
    return Sl(8390656, 8, e, t);
  }
  function fi(e, t) {
    return kl(2048, 8, e, t);
  }
  function qa(e, t) {
    return kl(4, 2, e, t);
  }
  function ba(e, t) {
    return kl(4, 4, e, t);
  }
  function es(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function ts(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), kl(4, 4, es.bind(null, t, e), n)
    );
  }
  function di() {}
  function ns(e, t) {
    var n = rt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ii(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function rs(e, t) {
    var n = rt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ii(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function ls(e, t, n) {
    return an & 21
      ? (at(n, t) ||
          ((n = Du()), (ye.lanes |= n), (sn |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (We = !0)), (e.memoizedState = n));
  }
  function ed(e, t) {
    var n = ue;
    (ue = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = oi.transition;
    oi.transition = {};
    try {
      e(!1), t();
    } finally {
      (ue = n), (oi.transition = r);
    }
  }
  function os() {
    return rt().memoizedState;
  }
  function td(e, t, n) {
    var r = Gt(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      is(e))
    )
      us(t, n);
    else if (((n = Ma(e, t, n, r)), n !== null)) {
      var l = Ae();
      pt(n, e, r, l), as(n, t, r);
    }
  }
  function nd(e, t, n) {
    var r = Gt(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (is(e)) us(t, l);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var u = t.lastRenderedState,
            c = o(u, n);
          if (((l.hasEagerState = !0), (l.eagerState = c), at(c, u))) {
            var d = t.interleaved;
            d === null
              ? ((l.next = l), bo(t))
              : ((l.next = d.next), (d.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (n = Ma(e, t, l, r)),
        n !== null && ((l = Ae()), pt(n, e, r, l), as(n, t, r));
    }
  }
  function is(e) {
    var t = e.alternate;
    return e === ye || (t !== null && t === ye);
  }
  function us(e, t) {
    yr = wl = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function as(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), ho(e, n);
    }
  }
  var xl = {
      readContext: nt,
      useCallback: je,
      useContext: je,
      useEffect: je,
      useImperativeHandle: je,
      useInsertionEffect: je,
      useLayoutEffect: je,
      useMemo: je,
      useReducer: je,
      useRef: je,
      useState: je,
      useDebugValue: je,
      useDeferredValue: je,
      useTransition: je,
      useMutableSource: je,
      useSyncExternalStore: je,
      useId: je,
      unstable_isNewReconciler: !1,
    },
    rd = {
      readContext: nt,
      useCallback: function (e, t) {
        return (St().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: nt,
      useEffect: Za,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Sl(4194308, 4, es.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Sl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Sl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = St();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = St();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = td.bind(null, ye, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = St();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Ga,
      useDebugValue: di,
      useDeferredValue: function (e) {
        return (St().memoizedState = e);
      },
      useTransition: function () {
        var e = Ga(!1),
          t = e[0];
        return (e = ed.bind(null, e[1])), (St().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = ye,
          l = St();
        if (he) {
          if (n === void 0) throw Error(a(407));
          n = n();
        } else {
          if (((n = t()), ze === null)) throw Error(a(349));
          an & 30 || Wa(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          Za(Ka.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          Sr(9, Qa.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = St(),
          t = ze.identifierPrefix;
        if (he) {
          var n = Rt,
            r = _t;
          (n = (r & ~(1 << (32 - ut(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = gr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = bf++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    ld = {
      readContext: nt,
      useCallback: ns,
      useContext: nt,
      useEffect: fi,
      useImperativeHandle: ts,
      useInsertionEffect: qa,
      useLayoutEffect: ba,
      useMemo: rs,
      useReducer: si,
      useRef: Ja,
      useState: function () {
        return si(wr);
      },
      useDebugValue: di,
      useDeferredValue: function (e) {
        var t = rt();
        return ls(t, Re.memoizedState, e);
      },
      useTransition: function () {
        var e = si(wr)[0],
          t = rt().memoizedState;
        return [e, t];
      },
      useMutableSource: Ha,
      useSyncExternalStore: Va,
      useId: os,
      unstable_isNewReconciler: !1,
    },
    od = {
      readContext: nt,
      useCallback: ns,
      useContext: nt,
      useEffect: fi,
      useImperativeHandle: ts,
      useInsertionEffect: qa,
      useLayoutEffect: ba,
      useMemo: rs,
      useReducer: ci,
      useRef: Ja,
      useState: function () {
        return ci(wr);
      },
      useDebugValue: di,
      useDeferredValue: function (e) {
        var t = rt();
        return Re === null ? (t.memoizedState = e) : ls(t, Re.memoizedState, e);
      },
      useTransition: function () {
        var e = ci(wr)[0],
          t = rt().memoizedState;
        return [e, t];
      },
      useMutableSource: Ha,
      useSyncExternalStore: Va,
      useId: os,
      unstable_isNewReconciler: !1,
    };
  function ct(e, t) {
    if (e && e.defaultProps) {
      (t = H({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function pi(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : H({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var El = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? en(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ae(),
        l = Gt(e),
        o = Lt(r, l);
      (o.payload = t),
        n != null && (o.callback = n),
        (t = Qt(e, o, l)),
        t !== null && (pt(t, e, l, r), ml(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ae(),
        l = Gt(e),
        o = Lt(r, l);
      (o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = Qt(e, o, l)),
        t !== null && (pt(t, e, l, r), ml(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ae(),
        r = Gt(e),
        l = Lt(n, r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = Qt(e, l, r)),
        t !== null && (pt(t, e, r, n), ml(t, e, r));
    },
  };
  function ss(e, t, n, r, l, o, u) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, o, u)
        : t.prototype && t.prototype.isPureReactComponent
        ? !ir(n, r) || !ir(l, o)
        : !0
    );
  }
  function cs(e, t, n) {
    var r = !1,
      l = Ht,
      o = t.contextType;
    return (
      typeof o == "object" && o !== null
        ? (o = nt(o))
        : ((l = Ve(t) ? nn : Fe.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? Rn(e, l) : Ht)),
      (t = new t(n, o)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = El),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function fs(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && El.enqueueReplaceState(t, t.state, null);
  }
  function hi(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), ei(e);
    var o = t.contextType;
    typeof o == "object" && o !== null
      ? (l.context = nt(o))
      : ((o = Ve(t) ? nn : Fe.current), (l.context = Rn(e, o))),
      (l.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == "function" && (pi(e, t, o, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && El.enqueueReplaceState(l, l.state, null),
        vl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Fn(e, t) {
    try {
      var n = "",
        r = t;
      do (n += re(r)), (r = r.return);
      while (r);
      var l = n;
    } catch (o) {
      l =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function mi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function vi(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var id = typeof WeakMap == "function" ? WeakMap : Map;
  function ds(e, t, n) {
    (n = Lt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Tl || ((Tl = !0), (zi = r)), vi(e, t);
      }),
      n
    );
  }
  function ps(e, t, n) {
    (n = Lt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      (n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          vi(e, t);
        });
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == "function" &&
        (n.callback = function () {
          vi(e, t),
            typeof r != "function" &&
              (Yt === null ? (Yt = new Set([this])) : Yt.add(this));
          var u = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: u !== null ? u : "",
          });
        }),
      n
    );
  }
  function hs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new id();
      var l = new Set();
      r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = Sd.bind(null, e, t, n)), t.then(e, e));
  }
  function ms(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function vs(e, t, n, r, l) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = l), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Lt(-1, 1)), (t.tag = 2), Qt(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var ud = te.ReactCurrentOwner,
    We = !1;
  function Ue(e, t, n, r) {
    t.child = e === null ? ja(t, null, n, r) : zn(t, e.child, n, r);
  }
  function ys(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      On(t, l),
      (r = ui(e, t, n, r, o, l)),
      (n = ai()),
      e !== null && !We
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Tt(e, t, l))
        : (he && n && Wo(t), (t.flags |= 1), Ue(e, t, r, l), t.child)
    );
  }
  function gs(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" &&
        !$i(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), ws(e, t, o, r, l))
        : ((e = jl(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), !(e.lanes & l))) {
      var u = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : ir), n(u, r) && e.ref === t.ref)
      )
        return Tt(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = Zt(o, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function ws(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (ir(o, r) && e.ref === t.ref)
        if (((We = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          e.flags & 131072 && (We = !0);
        else return (t.lanes = e.lanes), Tt(e, t, l);
    }
    return yi(e, t, n, r, l);
  }
  function Ss(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          ce(Mn, be),
          (be |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            ce(Mn, be),
            (be |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = o !== null ? o.baseLanes : n),
          ce(Mn, be),
          (be |= r);
      }
    else
      o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ce(Mn, be),
        (be |= r);
    return Ue(e, t, l, n), t.child;
  }
  function ks(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function yi(e, t, n, r, l) {
    var o = Ve(n) ? nn : Fe.current;
    return (
      (o = Rn(t, o)),
      On(t, l),
      (n = ui(e, t, n, r, o, l)),
      (r = ai()),
      e !== null && !We
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Tt(e, t, l))
        : (he && r && Wo(t), (t.flags |= 1), Ue(e, t, n, l), t.child)
    );
  }
  function xs(e, t, n, r, l) {
    if (Ve(n)) {
      var o = !0;
      ul(t);
    } else o = !1;
    if ((On(t, l), t.stateNode === null))
      Pl(e, t), cs(t, n, r), hi(t, n, r, l), (r = !0);
    else if (e === null) {
      var u = t.stateNode,
        c = t.memoizedProps;
      u.props = c;
      var d = u.context,
        w = n.contextType;
      typeof w == "object" && w !== null
        ? (w = nt(w))
        : ((w = Ve(n) ? nn : Fe.current), (w = Rn(t, w)));
      var N = n.getDerivedStateFromProps,
        L =
          typeof N == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function";
      L ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((c !== r || d !== w) && fs(t, u, r, w)),
        (Wt = !1);
      var _ = t.memoizedState;
      (u.state = _),
        vl(t, r, u, l),
        (d = t.memoizedState),
        c !== r || _ !== d || He.current || Wt
          ? (typeof N == "function" && (pi(t, n, N, r), (d = t.memoizedState)),
            (c = Wt || ss(t, n, c, r, _, d, w))
              ? (L ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = d)),
            (u.props = r),
            (u.state = d),
            (u.context = w),
            (r = c))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (u = t.stateNode),
        $a(e, t),
        (c = t.memoizedProps),
        (w = t.type === t.elementType ? c : ct(t.type, c)),
        (u.props = w),
        (L = t.pendingProps),
        (_ = u.context),
        (d = n.contextType),
        typeof d == "object" && d !== null
          ? (d = nt(d))
          : ((d = Ve(n) ? nn : Fe.current), (d = Rn(t, d)));
      var U = n.getDerivedStateFromProps;
      (N =
        typeof U == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function") ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((c !== L || _ !== d) && fs(t, u, r, d)),
        (Wt = !1),
        (_ = t.memoizedState),
        (u.state = _),
        vl(t, r, u, l);
      var V = t.memoizedState;
      c !== L || _ !== V || He.current || Wt
        ? (typeof U == "function" && (pi(t, n, U, r), (V = t.memoizedState)),
          (w = Wt || ss(t, n, w, r, _, V, d) || !1)
            ? (N ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(r, V, d),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(r, V, d)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (c === e.memoizedProps && _ === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (c === e.memoizedProps && _ === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = V)),
          (u.props = r),
          (u.state = V),
          (u.context = d),
          (r = w))
        : (typeof u.componentDidUpdate != "function" ||
            (c === e.memoizedProps && _ === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (c === e.memoizedProps && _ === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return gi(e, t, n, r, o, l);
  }
  function gi(e, t, n, r, l, o) {
    ks(e, t);
    var u = (t.flags & 128) !== 0;
    if (!r && !u) return l && Ra(t, n, !1), Tt(e, t, o);
    (r = t.stateNode), (ud.current = t);
    var c =
      u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && u
        ? ((t.child = zn(t, e.child, null, o)), (t.child = zn(t, null, c, o)))
        : Ue(e, t, c, o),
      (t.memoizedState = r.state),
      l && Ra(t, n, !0),
      t.child
    );
  }
  function Es(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Pa(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Pa(e, t.context, !1),
      ti(e, t.containerInfo);
  }
  function Cs(e, t, n, r, l) {
    return Tn(), Xo(l), (t.flags |= 256), Ue(e, t, n, r), t.child;
  }
  var wi = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Si(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ps(e, t, n) {
    var r = t.pendingProps,
      l = ve.current,
      o = !1,
      u = (t.flags & 128) !== 0,
      c;
    if (
      ((c = u) ||
        (c = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      c
        ? ((o = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      ce(ve, l & 1),
      e === null)
    )
      return (
        Yo(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((u = r.children),
            (e = r.fallback),
            o
              ? ((r = t.mode),
                (o = t.child),
                (u = { mode: "hidden", children: u }),
                !(r & 1) && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = u))
                  : (o = Ml(u, r, 0, null)),
                (e = pn(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = Si(n)),
                (t.memoizedState = wi),
                e)
              : ki(t, u))
      );
    if (((l = e.memoizedState), l !== null && ((c = l.dehydrated), c !== null)))
      return ad(e, t, u, r, c, l, n);
    if (o) {
      (o = r.fallback), (u = t.mode), (l = e.child), (c = l.sibling);
      var d = { mode: "hidden", children: r.children };
      return (
        !(u & 1) && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = d),
            (t.deletions = null))
          : ((r = Zt(l, d)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        c !== null ? (o = Zt(c, o)) : ((o = pn(o, u, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (u = e.child.memoizedState),
        (u =
          u === null
            ? Si(n)
            : {
                baseLanes: u.baseLanes | n,
                cachePool: null,
                transitions: u.transitions,
              }),
        (o.memoizedState = u),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = wi),
        r
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (r = Zt(o, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function ki(e, t) {
    return (
      (t = Ml({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Cl(e, t, n, r) {
    return (
      r !== null && Xo(r),
      zn(t, e.child, null, n),
      (e = ki(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function ad(e, t, n, r, l, o, u) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = mi(Error(a(422)))), Cl(e, t, u, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (l = t.mode),
          (r = Ml({ mode: "visible", children: r.children }, l, 0, null)),
          (o = pn(o, l, u, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && zn(t, e.child, null, u),
          (t.child.memoizedState = Si(u)),
          (t.memoizedState = wi),
          o);
    if (!(t.mode & 1)) return Cl(e, t, u, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var c = r.dgst;
      return (
        (r = c), (o = Error(a(419))), (r = mi(o, r, void 0)), Cl(e, t, u, r)
      );
    }
    if (((c = (u & e.childLanes) !== 0), We || c)) {
      if (((r = ze), r !== null)) {
        switch (u & -u) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = l & (r.suspendedLanes | u) ? 0 : l),
          l !== 0 &&
            l !== o.retryLane &&
            ((o.retryLane = l), Nt(e, l), pt(r, e, l, -1));
      }
      return Mi(), (r = mi(Error(a(421)))), Cl(e, t, u, r);
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = kd.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = o.treeContext),
        (qe = At(l.nextSibling)),
        (Ze = t),
        (he = !0),
        (st = null),
        e !== null &&
          ((et[tt++] = _t),
          (et[tt++] = Rt),
          (et[tt++] = rn),
          (_t = e.id),
          (Rt = e.overflow),
          (rn = t)),
        (t = ki(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function _s(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), qo(e.return, t, n);
  }
  function xi(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = n),
        (o.tailMode = l));
  }
  function Rs(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      o = r.tail;
    if ((Ue(e, t, r.children, n), (r = ve.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && _s(e, n, t);
          else if (e.tag === 19) _s(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((ce(ve, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate),
              e !== null && yl(e) === null && (l = n),
              (n = n.sibling);
          (n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            xi(t, !1, l, n, o);
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && yl(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
          }
          xi(t, !0, n, null, o);
          break;
        case "together":
          xi(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Pl(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Tt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (sn |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(a(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Zt(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = Zt(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function sd(e, t, n) {
    switch (t.tag) {
      case 3:
        Es(t), Tn();
        break;
      case 5:
        Ba(t);
        break;
      case 1:
        Ve(t.type) && ul(t);
        break;
      case 4:
        ti(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        ce(pl, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ce(ve, ve.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? Ps(e, t, n)
            : (ce(ve, ve.current & 1),
              (e = Tt(e, t, n)),
              e !== null ? e.sibling : null);
        ce(ve, ve.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return Rs(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          ce(ve, ve.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Ss(e, t, n);
    }
    return Tt(e, t, n);
  }
  var Ns, Ei, Ls, Ts;
  (Ns = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (Ei = function () {}),
    (Ls = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = t.stateNode), un(wt.current);
        var o = null;
        switch (n) {
          case "input":
            (l = Zl(e, l)), (r = Zl(e, r)), (o = []);
            break;
          case "select":
            (l = H({}, l, { value: void 0 })),
              (r = H({}, r, { value: void 0 })),
              (o = []);
            break;
          case "textarea":
            (l = eo(e, l)), (r = eo(e, r)), (o = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = ll);
        }
        no(n, r);
        var u;
        n = null;
        for (w in l)
          if (!r.hasOwnProperty(w) && l.hasOwnProperty(w) && l[w] != null)
            if (w === "style") {
              var c = l[w];
              for (u in c) c.hasOwnProperty(u) && (n || (n = {}), (n[u] = ""));
            } else
              w !== "dangerouslySetInnerHTML" &&
                w !== "children" &&
                w !== "suppressContentEditableWarning" &&
                w !== "suppressHydrationWarning" &&
                w !== "autoFocus" &&
                (f.hasOwnProperty(w)
                  ? o || (o = [])
                  : (o = o || []).push(w, null));
        for (w in r) {
          var d = r[w];
          if (
            ((c = l != null ? l[w] : void 0),
            r.hasOwnProperty(w) && d !== c && (d != null || c != null))
          )
            if (w === "style")
              if (c) {
                for (u in c)
                  !c.hasOwnProperty(u) ||
                    (d && d.hasOwnProperty(u)) ||
                    (n || (n = {}), (n[u] = ""));
                for (u in d)
                  d.hasOwnProperty(u) &&
                    c[u] !== d[u] &&
                    (n || (n = {}), (n[u] = d[u]));
              } else n || (o || (o = []), o.push(w, n)), (n = d);
            else
              w === "dangerouslySetInnerHTML"
                ? ((d = d ? d.__html : void 0),
                  (c = c ? c.__html : void 0),
                  d != null && c !== d && (o = o || []).push(w, d))
                : w === "children"
                ? (typeof d != "string" && typeof d != "number") ||
                  (o = o || []).push(w, "" + d)
                : w !== "suppressContentEditableWarning" &&
                  w !== "suppressHydrationWarning" &&
                  (f.hasOwnProperty(w)
                    ? (d != null && w === "onScroll" && fe("scroll", e),
                      o || c === d || (o = []))
                    : (o = o || []).push(w, d));
        }
        n && (o = o || []).push("style", n);
        var w = o;
        (t.updateQueue = w) && (t.flags |= 4);
      }
    }),
    (Ts = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function kr(e, t) {
    if (!he)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Me(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function cd(e, t, n) {
    var r = t.pendingProps;
    switch ((Qo(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Me(t), null;
      case 1:
        return Ve(t.type) && il(), Me(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Dn(),
          de(He),
          de(Fe),
          li(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (fl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), st !== null && (Di(st), (st = null)))),
          Ei(e, t),
          Me(t),
          null
        );
      case 5:
        ni(t);
        var l = un(vr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          Ls(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(a(166));
            return Me(t), null;
          }
          if (((e = un(wt.current)), fl(t))) {
            (r = t.stateNode), (n = t.type);
            var o = t.memoizedProps;
            switch (((r[gt] = t), (r[fr] = o), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                fe("cancel", r), fe("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                fe("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < ar.length; l++) fe(ar[l], r);
                break;
              case "source":
                fe("error", r);
                break;
              case "img":
              case "image":
              case "link":
                fe("error", r), fe("load", r);
                break;
              case "details":
                fe("toggle", r);
                break;
              case "input":
                cu(r, o), fe("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!o.multiple }),
                  fe("invalid", r);
                break;
              case "textarea":
                pu(r, o), fe("invalid", r);
            }
            no(n, o), (l = null);
            for (var u in o)
              if (o.hasOwnProperty(u)) {
                var c = o[u];
                u === "children"
                  ? typeof c == "string"
                    ? r.textContent !== c &&
                      (o.suppressHydrationWarning !== !0 &&
                        rl(r.textContent, c, e),
                      (l = ["children", c]))
                    : typeof c == "number" &&
                      r.textContent !== "" + c &&
                      (o.suppressHydrationWarning !== !0 &&
                        rl(r.textContent, c, e),
                      (l = ["children", "" + c]))
                  : f.hasOwnProperty(u) &&
                    c != null &&
                    u === "onScroll" &&
                    fe("scroll", r);
              }
            switch (n) {
              case "input":
                Dr(r), du(r, o, !0);
                break;
              case "textarea":
                Dr(r), mu(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = ll);
            }
            (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (u = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = vu(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = u.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = u.createElement(n, { is: r.is }))
                  : ((e = u.createElement(n)),
                    n === "select" &&
                      ((u = e),
                      r.multiple
                        ? (u.multiple = !0)
                        : r.size && (u.size = r.size)))
                : (e = u.createElementNS(e, n)),
              (e[gt] = t),
              (e[fr] = r),
              Ns(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((u = ro(n, r)), n)) {
                case "dialog":
                  fe("cancel", e), fe("close", e), (l = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  fe("load", e), (l = r);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < ar.length; l++) fe(ar[l], e);
                  l = r;
                  break;
                case "source":
                  fe("error", e), (l = r);
                  break;
                case "img":
                case "image":
                case "link":
                  fe("error", e), fe("load", e), (l = r);
                  break;
                case "details":
                  fe("toggle", e), (l = r);
                  break;
                case "input":
                  cu(e, r), (l = Zl(e, r)), fe("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = H({}, r, { value: void 0 })),
                    fe("invalid", e);
                  break;
                case "textarea":
                  pu(e, r), (l = eo(e, r)), fe("invalid", e);
                  break;
                default:
                  l = r;
              }
              no(n, l), (c = l);
              for (o in c)
                if (c.hasOwnProperty(o)) {
                  var d = c[o];
                  o === "style"
                    ? wu(e, d)
                    : o === "dangerouslySetInnerHTML"
                    ? ((d = d ? d.__html : void 0), d != null && yu(e, d))
                    : o === "children"
                    ? typeof d == "string"
                      ? (n !== "textarea" || d !== "") && Vn(e, d)
                      : typeof d == "number" && Vn(e, "" + d)
                    : o !== "suppressContentEditableWarning" &&
                      o !== "suppressHydrationWarning" &&
                      o !== "autoFocus" &&
                      (f.hasOwnProperty(o)
                        ? d != null && o === "onScroll" && fe("scroll", e)
                        : d != null && Z(e, o, d, u));
                }
              switch (n) {
                case "input":
                  Dr(e), du(e, r, !1);
                  break;
                case "textarea":
                  Dr(e), mu(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + ie(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? mn(e, !!r.multiple, o, !1)
                      : r.defaultValue != null &&
                        mn(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = ll);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Me(t), null;
      case 6:
        if (e && t.stateNode != null) Ts(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(a(166));
          if (((n = un(vr.current)), un(wt.current), fl(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[gt] = t),
              (o = r.nodeValue !== n) && ((e = Ze), e !== null))
            )
              switch (e.tag) {
                case 3:
                  rl(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    rl(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[gt] = t),
              (t.stateNode = r);
        }
        return Me(t), null;
      case 13:
        if (
          (de(ve),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (he && qe !== null && t.mode & 1 && !(t.flags & 128))
            Oa(), Tn(), (t.flags |= 98560), (o = !1);
          else if (((o = fl(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(a(318));
              if (
                ((o = t.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(a(317));
              o[gt] = t;
            } else
              Tn(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            Me(t), (o = !1);
          } else st !== null && (Di(st), (st = null)), (o = !0);
          if (!o) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || ve.current & 1 ? Ne === 0 && (Ne = 3) : Mi())),
            t.updateQueue !== null && (t.flags |= 4),
            Me(t),
            null);
      case 4:
        return (
          Dn(),
          Ei(e, t),
          e === null && sr(t.stateNode.containerInfo),
          Me(t),
          null
        );
      case 10:
        return Zo(t.type._context), Me(t), null;
      case 17:
        return Ve(t.type) && il(), Me(t), null;
      case 19:
        if ((de(ve), (o = t.memoizedState), o === null)) return Me(t), null;
        if (((r = (t.flags & 128) !== 0), (u = o.rendering), u === null))
          if (r) kr(o, !1);
          else {
            if (Ne !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((u = yl(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      kr(o, !1),
                      r = u.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (o = n),
                      (e = r),
                      (o.flags &= 14680066),
                      (u = o.alternate),
                      u === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = u.childLanes),
                          (o.lanes = u.lanes),
                          (o.child = u.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = u.memoizedProps),
                          (o.memoizedState = u.memoizedState),
                          (o.updateQueue = u.updateQueue),
                          (o.type = u.type),
                          (e = u.dependencies),
                          (o.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return ce(ve, (ve.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null &&
              Ee() > $n &&
              ((t.flags |= 128), (r = !0), kr(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = yl(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                kr(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !u.alternate &&
                  !he)
              )
                return Me(t), null;
            } else
              2 * Ee() - o.renderingStartTime > $n &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), kr(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((n = o.last),
              n !== null ? (n.sibling = u) : (t.child = u),
              (o.last = u));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = Ee()),
            (t.sibling = null),
            (n = ve.current),
            ce(ve, r ? (n & 1) | 2 : n & 1),
            t)
          : (Me(t), null);
      case 22:
      case 23:
        return (
          ji(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? be & 1073741824 &&
              (Me(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Me(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function fd(e, t) {
    switch ((Qo(t), t.tag)) {
      case 1:
        return (
          Ve(t.type) && il(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Dn(),
          de(He),
          de(Fe),
          li(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return ni(t), null;
      case 13:
        if (
          (de(ve), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(a(340));
          Tn();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return de(ve), null;
      case 4:
        return Dn(), null;
      case 10:
        return Zo(t.type._context), null;
      case 22:
      case 23:
        return ji(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var _l = !1,
    $e = !1,
    dd = typeof WeakSet == "function" ? WeakSet : Set,
    B = null;
  function jn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          xe(e, t, r);
        }
      else n.current = null;
  }
  function Ci(e, t, n) {
    try {
      n();
    } catch (r) {
      xe(e, t, r);
    }
  }
  var zs = !1;
  function pd(e, t) {
    if (((jo = Kr), (e = sa()), No(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              o = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break e;
            }
            var u = 0,
              c = -1,
              d = -1,
              w = 0,
              N = 0,
              L = e,
              _ = null;
            t: for (;;) {
              for (
                var U;
                L !== n || (l !== 0 && L.nodeType !== 3) || (c = u + l),
                  L !== o || (r !== 0 && L.nodeType !== 3) || (d = u + r),
                  L.nodeType === 3 && (u += L.nodeValue.length),
                  (U = L.firstChild) !== null;

              )
                (_ = L), (L = U);
              for (;;) {
                if (L === e) break t;
                if (
                  (_ === n && ++w === l && (c = u),
                  _ === o && ++N === r && (d = u),
                  (U = L.nextSibling) !== null)
                )
                  break;
                (L = _), (_ = L.parentNode);
              }
              L = U;
            }
            n = c === -1 || d === -1 ? null : { start: c, end: d };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Mo = { focusedElem: e, selectionRange: n }, Kr = !1, B = t;
      B !== null;

    )
      if (((t = B), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (B = e);
      else
        for (; B !== null; ) {
          t = B;
          try {
            var V = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (V !== null) {
                    var W = V.memoizedProps,
                      Ce = V.memoizedState,
                      y = t.stateNode,
                      h = y.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? W : ct(t.type, W),
                        Ce
                      );
                    y.__reactInternalSnapshotBeforeUpdate = h;
                  }
                  break;
                case 3:
                  var g = t.stateNode.containerInfo;
                  g.nodeType === 1
                    ? (g.textContent = "")
                    : g.nodeType === 9 &&
                      g.documentElement &&
                      g.removeChild(g.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(a(163));
              }
          } catch (T) {
            xe(t, t.return, T);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (B = e);
            break;
          }
          B = t.return;
        }
    return (V = zs), (zs = !1), V;
  }
  function xr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          (l.destroy = void 0), o !== void 0 && Ci(t, n, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Rl(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Pi(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function Is(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Is(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[gt],
          delete t[fr],
          delete t[Bo],
          delete t[Gf],
          delete t[Jf])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Os(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Ds(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Os(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function _i(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = ll));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (_i(e, t, n), e = e.sibling; e !== null; )
        _i(e, t, n), (e = e.sibling);
  }
  function Ri(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Ri(e, t, n), e = e.sibling; e !== null; )
        Ri(e, t, n), (e = e.sibling);
  }
  var Oe = null,
    ft = !1;
  function Kt(e, t, n) {
    for (n = n.child; n !== null; ) Fs(e, t, n), (n = n.sibling);
  }
  function Fs(e, t, n) {
    if (yt && typeof yt.onCommitFiberUnmount == "function")
      try {
        yt.onCommitFiberUnmount(Ar, n);
      } catch {}
    switch (n.tag) {
      case 5:
        $e || jn(n, t);
      case 6:
        var r = Oe,
          l = ft;
        (Oe = null),
          Kt(e, t, n),
          (Oe = r),
          (ft = l),
          Oe !== null &&
            (ft
              ? ((e = Oe),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Oe.removeChild(n.stateNode));
        break;
      case 18:
        Oe !== null &&
          (ft
            ? ((e = Oe),
              (n = n.stateNode),
              e.nodeType === 8
                ? Ao(e.parentNode, n)
                : e.nodeType === 1 && Ao(e, n),
              er(e))
            : Ao(Oe, n.stateNode));
        break;
      case 4:
        (r = Oe),
          (l = ft),
          (Oe = n.stateNode.containerInfo),
          (ft = !0),
          Kt(e, t, n),
          (Oe = r),
          (ft = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !$e &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var o = l,
              u = o.destroy;
            (o = o.tag),
              u !== void 0 && (o & 2 || o & 4) && Ci(n, t, u),
              (l = l.next);
          } while (l !== r);
        }
        Kt(e, t, n);
        break;
      case 1:
        if (
          !$e &&
          (jn(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (c) {
            xe(n, t, c);
          }
        Kt(e, t, n);
        break;
      case 21:
        Kt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? (($e = (r = $e) || n.memoizedState !== null), Kt(e, t, n), ($e = r))
          : Kt(e, t, n);
        break;
      default:
        Kt(e, t, n);
    }
  }
  function js(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new dd()),
        t.forEach(function (r) {
          var l = xd.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        });
    }
  }
  function dt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var o = e,
            u = t,
            c = u;
          e: for (; c !== null; ) {
            switch (c.tag) {
              case 5:
                (Oe = c.stateNode), (ft = !1);
                break e;
              case 3:
                (Oe = c.stateNode.containerInfo), (ft = !0);
                break e;
              case 4:
                (Oe = c.stateNode.containerInfo), (ft = !0);
                break e;
            }
            c = c.return;
          }
          if (Oe === null) throw Error(a(160));
          Fs(o, u, l), (Oe = null), (ft = !1);
          var d = l.alternate;
          d !== null && (d.return = null), (l.return = null);
        } catch (w) {
          xe(l, t, w);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Ms(t, e), (t = t.sibling);
  }
  function Ms(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((dt(t, e), kt(e), r & 4)) {
          try {
            xr(3, e, e.return), Rl(3, e);
          } catch (W) {
            xe(e, e.return, W);
          }
          try {
            xr(5, e, e.return);
          } catch (W) {
            xe(e, e.return, W);
          }
        }
        break;
      case 1:
        dt(t, e), kt(e), r & 512 && n !== null && jn(n, n.return);
        break;
      case 5:
        if (
          (dt(t, e),
          kt(e),
          r & 512 && n !== null && jn(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            Vn(l, "");
          } catch (W) {
            xe(e, e.return, W);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            u = n !== null ? n.memoizedProps : o,
            c = e.type,
            d = e.updateQueue;
          if (((e.updateQueue = null), d !== null))
            try {
              c === "input" && o.type === "radio" && o.name != null && fu(l, o),
                ro(c, u);
              var w = ro(c, o);
              for (u = 0; u < d.length; u += 2) {
                var N = d[u],
                  L = d[u + 1];
                N === "style"
                  ? wu(l, L)
                  : N === "dangerouslySetInnerHTML"
                  ? yu(l, L)
                  : N === "children"
                  ? Vn(l, L)
                  : Z(l, N, L, w);
              }
              switch (c) {
                case "input":
                  ql(l, o);
                  break;
                case "textarea":
                  hu(l, o);
                  break;
                case "select":
                  var _ = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var U = o.value;
                  U != null
                    ? mn(l, !!o.multiple, U, !1)
                    : _ !== !!o.multiple &&
                      (o.defaultValue != null
                        ? mn(l, !!o.multiple, o.defaultValue, !0)
                        : mn(l, !!o.multiple, o.multiple ? [] : "", !1));
              }
              l[fr] = o;
            } catch (W) {
              xe(e, e.return, W);
            }
        }
        break;
      case 6:
        if ((dt(t, e), kt(e), r & 4)) {
          if (e.stateNode === null) throw Error(a(162));
          (l = e.stateNode), (o = e.memoizedProps);
          try {
            l.nodeValue = o;
          } catch (W) {
            xe(e, e.return, W);
          }
        }
        break;
      case 3:
        if (
          (dt(t, e), kt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            er(t.containerInfo);
          } catch (W) {
            xe(e, e.return, W);
          }
        break;
      case 4:
        dt(t, e), kt(e);
        break;
      case 13:
        dt(t, e),
          kt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((o = l.memoizedState !== null),
            (l.stateNode.isHidden = o),
            !o ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (Ti = Ee())),
          r & 4 && js(e);
        break;
      case 22:
        if (
          ((N = n !== null && n.memoizedState !== null),
          e.mode & 1 ? (($e = (w = $e) || N), dt(t, e), ($e = w)) : dt(t, e),
          kt(e),
          r & 8192)
        ) {
          if (
            ((w = e.memoizedState !== null),
            (e.stateNode.isHidden = w) && !N && e.mode & 1)
          )
            for (B = e, N = e.child; N !== null; ) {
              for (L = B = N; B !== null; ) {
                switch (((_ = B), (U = _.child), _.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    xr(4, _, _.return);
                    break;
                  case 1:
                    jn(_, _.return);
                    var V = _.stateNode;
                    if (typeof V.componentWillUnmount == "function") {
                      (r = _), (n = _.return);
                      try {
                        (t = r),
                          (V.props = t.memoizedProps),
                          (V.state = t.memoizedState),
                          V.componentWillUnmount();
                      } catch (W) {
                        xe(r, n, W);
                      }
                    }
                    break;
                  case 5:
                    jn(_, _.return);
                    break;
                  case 22:
                    if (_.memoizedState !== null) {
                      As(L);
                      continue;
                    }
                }
                U !== null ? ((U.return = _), (B = U)) : As(L);
              }
              N = N.sibling;
            }
          e: for (N = null, L = e; ; ) {
            if (L.tag === 5) {
              if (N === null) {
                N = L;
                try {
                  (l = L.stateNode),
                    w
                      ? ((o = l.style),
                        typeof o.setProperty == "function"
                          ? o.setProperty("display", "none", "important")
                          : (o.display = "none"))
                      : ((c = L.stateNode),
                        (d = L.memoizedProps.style),
                        (u =
                          d != null && d.hasOwnProperty("display")
                            ? d.display
                            : null),
                        (c.style.display = gu("display", u)));
                } catch (W) {
                  xe(e, e.return, W);
                }
              }
            } else if (L.tag === 6) {
              if (N === null)
                try {
                  L.stateNode.nodeValue = w ? "" : L.memoizedProps;
                } catch (W) {
                  xe(e, e.return, W);
                }
            } else if (
              ((L.tag !== 22 && L.tag !== 23) ||
                L.memoizedState === null ||
                L === e) &&
              L.child !== null
            ) {
              (L.child.return = L), (L = L.child);
              continue;
            }
            if (L === e) break e;
            for (; L.sibling === null; ) {
              if (L.return === null || L.return === e) break e;
              N === L && (N = null), (L = L.return);
            }
            N === L && (N = null),
              (L.sibling.return = L.return),
              (L = L.sibling);
          }
        }
        break;
      case 19:
        dt(t, e), kt(e), r & 4 && js(e);
        break;
      case 21:
        break;
      default:
        dt(t, e), kt(e);
    }
  }
  function kt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Os(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(a(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Vn(l, ""), (r.flags &= -33));
            var o = Ds(e);
            Ri(e, o, l);
            break;
          case 3:
          case 4:
            var u = r.stateNode.containerInfo,
              c = Ds(e);
            _i(e, c, u);
            break;
          default:
            throw Error(a(161));
        }
      } catch (d) {
        xe(e, e.return, d);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function hd(e, t, n) {
    (B = e), $s(e);
  }
  function $s(e, t, n) {
    for (var r = (e.mode & 1) !== 0; B !== null; ) {
      var l = B,
        o = l.child;
      if (l.tag === 22 && r) {
        var u = l.memoizedState !== null || _l;
        if (!u) {
          var c = l.alternate,
            d = (c !== null && c.memoizedState !== null) || $e;
          c = _l;
          var w = $e;
          if (((_l = u), ($e = d) && !w))
            for (B = l; B !== null; )
              (u = B),
                (d = u.child),
                u.tag === 22 && u.memoizedState !== null
                  ? Bs(l)
                  : d !== null
                  ? ((d.return = u), (B = d))
                  : Bs(l);
          for (; o !== null; ) (B = o), $s(o), (o = o.sibling);
          (B = l), (_l = c), ($e = w);
        }
        Us(e);
      } else
        l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (B = o)) : Us(e);
    }
  }
  function Us(e) {
    for (; B !== null; ) {
      var t = B;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                $e || Rl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !$e)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : ct(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var o = t.updateQueue;
                o !== null && Aa(t, o, r);
                break;
              case 3:
                var u = t.updateQueue;
                if (u !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Aa(t, u, n);
                }
                break;
              case 5:
                var c = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = c;
                  var d = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      d.autoFocus && n.focus();
                      break;
                    case "img":
                      d.src && (n.src = d.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var w = t.alternate;
                  if (w !== null) {
                    var N = w.memoizedState;
                    if (N !== null) {
                      var L = N.dehydrated;
                      L !== null && er(L);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(a(163));
            }
          $e || (t.flags & 512 && Pi(t));
        } catch (_) {
          xe(t, t.return, _);
        }
      }
      if (t === e) {
        B = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (B = n);
        break;
      }
      B = t.return;
    }
  }
  function As(e) {
    for (; B !== null; ) {
      var t = B;
      if (t === e) {
        B = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (B = n);
        break;
      }
      B = t.return;
    }
  }
  function Bs(e) {
    for (; B !== null; ) {
      var t = B;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Rl(4, t);
            } catch (d) {
              xe(t, n, d);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (d) {
                xe(t, l, d);
              }
            }
            var o = t.return;
            try {
              Pi(t);
            } catch (d) {
              xe(t, o, d);
            }
            break;
          case 5:
            var u = t.return;
            try {
              Pi(t);
            } catch (d) {
              xe(t, u, d);
            }
        }
      } catch (d) {
        xe(t, t.return, d);
      }
      if (t === e) {
        B = null;
        break;
      }
      var c = t.sibling;
      if (c !== null) {
        (c.return = t.return), (B = c);
        break;
      }
      B = t.return;
    }
  }
  var md = Math.ceil,
    Nl = te.ReactCurrentDispatcher,
    Ni = te.ReactCurrentOwner,
    lt = te.ReactCurrentBatchConfig,
    ne = 0,
    ze = null,
    _e = null,
    De = 0,
    be = 0,
    Mn = Bt(0),
    Ne = 0,
    Er = null,
    sn = 0,
    Ll = 0,
    Li = 0,
    Cr = null,
    Qe = null,
    Ti = 0,
    $n = 1 / 0,
    zt = null,
    Tl = !1,
    zi = null,
    Yt = null,
    zl = !1,
    Xt = null,
    Il = 0,
    Pr = 0,
    Ii = null,
    Ol = -1,
    Dl = 0;
  function Ae() {
    return ne & 6 ? Ee() : Ol !== -1 ? Ol : (Ol = Ee());
  }
  function Gt(e) {
    return e.mode & 1
      ? ne & 2 && De !== 0
        ? De & -De
        : qf.transition !== null
        ? (Dl === 0 && (Dl = Du()), Dl)
        : ((e = ue),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Vu(e.type))),
          e)
      : 1;
  }
  function pt(e, t, n, r) {
    if (50 < Pr) throw ((Pr = 0), (Ii = null), Error(a(185)));
    Gn(e, n, r),
      (!(ne & 2) || e !== ze) &&
        (e === ze && (!(ne & 2) && (Ll |= n), Ne === 4 && Jt(e, De)),
        Ke(e, r),
        n === 1 &&
          ne === 0 &&
          !(t.mode & 1) &&
          (($n = Ee() + 500), al && Vt()));
  }
  function Ke(e, t) {
    var n = e.callbackNode;
    Zc(e, t);
    var r = Vr(e, e === ze ? De : 0);
    if (r === 0)
      n !== null && zu(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && zu(n), t === 1))
        e.tag === 0 ? Zf(Vs.bind(null, e)) : Na(Vs.bind(null, e)),
          Yf(function () {
            !(ne & 6) && Vt();
          }),
          (n = null);
      else {
        switch (Fu(r)) {
          case 1:
            n = co;
            break;
          case 4:
            n = Iu;
            break;
          case 16:
            n = Ur;
            break;
          case 536870912:
            n = Ou;
            break;
          default:
            n = Ur;
        }
        n = Zs(n, Hs.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Hs(e, t) {
    if (((Ol = -1), (Dl = 0), ne & 6)) throw Error(a(327));
    var n = e.callbackNode;
    if (Un() && e.callbackNode !== n) return null;
    var r = Vr(e, e === ze ? De : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Fl(e, r);
    else {
      t = r;
      var l = ne;
      ne |= 2;
      var o = Qs();
      (ze !== e || De !== t) && ((zt = null), ($n = Ee() + 500), fn(e, t));
      do
        try {
          gd();
          break;
        } catch (c) {
          Ws(e, c);
        }
      while (!0);
      Jo(),
        (Nl.current = o),
        (ne = l),
        _e !== null ? (t = 0) : ((ze = null), (De = 0), (t = Ne));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = fo(e)), l !== 0 && ((r = l), (t = Oi(e, l)))),
        t === 1)
      )
        throw ((n = Er), fn(e, 0), Jt(e, r), Ke(e, Ee()), n);
      if (t === 6) Jt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          !(r & 30) &&
            !vd(l) &&
            ((t = Fl(e, r)),
            t === 2 && ((o = fo(e)), o !== 0 && ((r = o), (t = Oi(e, o)))),
            t === 1))
        )
          throw ((n = Er), fn(e, 0), Jt(e, r), Ke(e, Ee()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            dn(e, Qe, zt);
            break;
          case 3:
            if (
              (Jt(e, r),
              (r & 130023424) === r && ((t = Ti + 500 - Ee()), 10 < t))
            ) {
              if (Vr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                Ae(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = Uo(dn.bind(null, e, Qe, zt), t);
              break;
            }
            dn(e, Qe, zt);
            break;
          case 4:
            if ((Jt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var u = 31 - ut(r);
              (o = 1 << u), (u = t[u]), u > l && (l = u), (r &= ~o);
            }
            if (
              ((r = l),
              (r = Ee() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * md(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Uo(dn.bind(null, e, Qe, zt), r);
              break;
            }
            dn(e, Qe, zt);
            break;
          case 5:
            dn(e, Qe, zt);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return Ke(e, Ee()), e.callbackNode === n ? Hs.bind(null, e) : null;
  }
  function Oi(e, t) {
    var n = Cr;
    return (
      e.current.memoizedState.isDehydrated && (fn(e, t).flags |= 256),
      (e = Fl(e, t)),
      e !== 2 && ((t = Qe), (Qe = n), t !== null && Di(t)),
      e
    );
  }
  function Di(e) {
    Qe === null ? (Qe = e) : Qe.push.apply(Qe, e);
  }
  function vd(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              o = l.getSnapshot;
            l = l.value;
            try {
              if (!at(o(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Jt(e, t) {
    for (
      t &= ~Li,
        t &= ~Ll,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - ut(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function Vs(e) {
    if (ne & 6) throw Error(a(327));
    Un();
    var t = Vr(e, 0);
    if (!(t & 1)) return Ke(e, Ee()), null;
    var n = Fl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = fo(e);
      r !== 0 && ((t = r), (n = Oi(e, r)));
    }
    if (n === 1) throw ((n = Er), fn(e, 0), Jt(e, t), Ke(e, Ee()), n);
    if (n === 6) throw Error(a(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      dn(e, Qe, zt),
      Ke(e, Ee()),
      null
    );
  }
  function Fi(e, t) {
    var n = ne;
    ne |= 1;
    try {
      return e(t);
    } finally {
      (ne = n), ne === 0 && (($n = Ee() + 500), al && Vt());
    }
  }
  function cn(e) {
    Xt !== null && Xt.tag === 0 && !(ne & 6) && Un();
    var t = ne;
    ne |= 1;
    var n = lt.transition,
      r = ue;
    try {
      if (((lt.transition = null), (ue = 1), e)) return e();
    } finally {
      (ue = r), (lt.transition = n), (ne = t), !(ne & 6) && Vt();
    }
  }
  function ji() {
    (be = Mn.current), de(Mn);
  }
  function fn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Kf(n)), _e !== null))
      for (n = _e.return; n !== null; ) {
        var r = n;
        switch ((Qo(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && il();
            break;
          case 3:
            Dn(), de(He), de(Fe), li();
            break;
          case 5:
            ni(r);
            break;
          case 4:
            Dn();
            break;
          case 13:
            de(ve);
            break;
          case 19:
            de(ve);
            break;
          case 10:
            Zo(r.type._context);
            break;
          case 22:
          case 23:
            ji();
        }
        n = n.return;
      }
    if (
      ((ze = e),
      (_e = e = Zt(e.current, null)),
      (De = be = t),
      (Ne = 0),
      (Er = null),
      (Li = Ll = sn = 0),
      (Qe = Cr = null),
      on !== null)
    ) {
      for (t = 0; t < on.length; t++)
        if (((n = on[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            o = n.pending;
          if (o !== null) {
            var u = o.next;
            (o.next = l), (r.next = u);
          }
          n.pending = r;
        }
      on = null;
    }
    return e;
  }
  function Ws(e, t) {
    do {
      var n = _e;
      try {
        if ((Jo(), (gl.current = xl), wl)) {
          for (var r = ye.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          wl = !1;
        }
        if (
          ((an = 0),
          (Te = Re = ye = null),
          (yr = !1),
          (gr = 0),
          (Ni.current = null),
          n === null || n.return === null)
        ) {
          (Ne = 1), (Er = t), (_e = null);
          break;
        }
        e: {
          var o = e,
            u = n.return,
            c = n,
            d = t;
          if (
            ((t = De),
            (c.flags |= 32768),
            d !== null && typeof d == "object" && typeof d.then == "function")
          ) {
            var w = d,
              N = c,
              L = N.tag;
            if (!(N.mode & 1) && (L === 0 || L === 11 || L === 15)) {
              var _ = N.alternate;
              _
                ? ((N.updateQueue = _.updateQueue),
                  (N.memoizedState = _.memoizedState),
                  (N.lanes = _.lanes))
                : ((N.updateQueue = null), (N.memoizedState = null));
            }
            var U = ms(u);
            if (U !== null) {
              (U.flags &= -257),
                vs(U, u, c, o, t),
                U.mode & 1 && hs(o, w, t),
                (t = U),
                (d = w);
              var V = t.updateQueue;
              if (V === null) {
                var W = new Set();
                W.add(d), (t.updateQueue = W);
              } else V.add(d);
              break e;
            } else {
              if (!(t & 1)) {
                hs(o, w, t), Mi();
                break e;
              }
              d = Error(a(426));
            }
          } else if (he && c.mode & 1) {
            var Ce = ms(u);
            if (Ce !== null) {
              !(Ce.flags & 65536) && (Ce.flags |= 256),
                vs(Ce, u, c, o, t),
                Xo(Fn(d, c));
              break e;
            }
          }
          (o = d = Fn(d, c)),
            Ne !== 4 && (Ne = 2),
            Cr === null ? (Cr = [o]) : Cr.push(o),
            (o = u);
          do {
            switch (o.tag) {
              case 3:
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var y = ds(o, d, t);
                Ua(o, y);
                break e;
              case 1:
                c = d;
                var h = o.type,
                  g = o.stateNode;
                if (
                  !(o.flags & 128) &&
                  (typeof h.getDerivedStateFromError == "function" ||
                    (g !== null &&
                      typeof g.componentDidCatch == "function" &&
                      (Yt === null || !Yt.has(g))))
                ) {
                  (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                  var T = ps(o, c, t);
                  Ua(o, T);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Ys(n);
      } catch (Q) {
        (t = Q), _e === n && n !== null && (_e = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Qs() {
    var e = Nl.current;
    return (Nl.current = xl), e === null ? xl : e;
  }
  function Mi() {
    (Ne === 0 || Ne === 3 || Ne === 2) && (Ne = 4),
      ze === null || (!(sn & 268435455) && !(Ll & 268435455)) || Jt(ze, De);
  }
  function Fl(e, t) {
    var n = ne;
    ne |= 2;
    var r = Qs();
    (ze !== e || De !== t) && ((zt = null), fn(e, t));
    do
      try {
        yd();
        break;
      } catch (l) {
        Ws(e, l);
      }
    while (!0);
    if ((Jo(), (ne = n), (Nl.current = r), _e !== null)) throw Error(a(261));
    return (ze = null), (De = 0), Ne;
  }
  function yd() {
    for (; _e !== null; ) Ks(_e);
  }
  function gd() {
    for (; _e !== null && !Hc(); ) Ks(_e);
  }
  function Ks(e) {
    var t = Js(e.alternate, e, be);
    (e.memoizedProps = e.pendingProps),
      t === null ? Ys(e) : (_e = t),
      (Ni.current = null);
  }
  function Ys(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = fd(n, t)), n !== null)) {
          (n.flags &= 32767), (_e = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Ne = 6), (_e = null);
          return;
        }
      } else if (((n = cd(n, t, be)), n !== null)) {
        _e = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        _e = t;
        return;
      }
      _e = t = e;
    } while (t !== null);
    Ne === 0 && (Ne = 5);
  }
  function dn(e, t, n) {
    var r = ue,
      l = lt.transition;
    try {
      (lt.transition = null), (ue = 1), wd(e, t, n, r);
    } finally {
      (lt.transition = l), (ue = r);
    }
    return null;
  }
  function wd(e, t, n, r) {
    do Un();
    while (Xt !== null);
    if (ne & 6) throw Error(a(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(a(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = n.lanes | n.childLanes;
    if (
      (qc(e, o),
      e === ze && ((_e = ze = null), (De = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        zl ||
        ((zl = !0),
        Zs(Ur, function () {
          return Un(), null;
        })),
      (o = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || o)
    ) {
      (o = lt.transition), (lt.transition = null);
      var u = ue;
      ue = 1;
      var c = ne;
      (ne |= 4),
        (Ni.current = null),
        pd(e, n),
        Ms(n, e),
        Uf(Mo),
        (Kr = !!jo),
        (Mo = jo = null),
        (e.current = n),
        hd(n),
        Vc(),
        (ne = c),
        (ue = u),
        (lt.transition = o);
    } else e.current = n;
    if (
      (zl && ((zl = !1), (Xt = e), (Il = l)),
      (o = e.pendingLanes),
      o === 0 && (Yt = null),
      Kc(n.stateNode),
      Ke(e, Ee()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (Tl) throw ((Tl = !1), (e = zi), (zi = null), e);
    return (
      Il & 1 && e.tag !== 0 && Un(),
      (o = e.pendingLanes),
      o & 1 ? (e === Ii ? Pr++ : ((Pr = 0), (Ii = e))) : (Pr = 0),
      Vt(),
      null
    );
  }
  function Un() {
    if (Xt !== null) {
      var e = Fu(Il),
        t = lt.transition,
        n = ue;
      try {
        if (((lt.transition = null), (ue = 16 > e ? 16 : e), Xt === null))
          var r = !1;
        else {
          if (((e = Xt), (Xt = null), (Il = 0), ne & 6)) throw Error(a(331));
          var l = ne;
          for (ne |= 4, B = e.current; B !== null; ) {
            var o = B,
              u = o.child;
            if (B.flags & 16) {
              var c = o.deletions;
              if (c !== null) {
                for (var d = 0; d < c.length; d++) {
                  var w = c[d];
                  for (B = w; B !== null; ) {
                    var N = B;
                    switch (N.tag) {
                      case 0:
                      case 11:
                      case 15:
                        xr(8, N, o);
                    }
                    var L = N.child;
                    if (L !== null) (L.return = N), (B = L);
                    else
                      for (; B !== null; ) {
                        N = B;
                        var _ = N.sibling,
                          U = N.return;
                        if ((Is(N), N === w)) {
                          B = null;
                          break;
                        }
                        if (_ !== null) {
                          (_.return = U), (B = _);
                          break;
                        }
                        B = U;
                      }
                  }
                }
                var V = o.alternate;
                if (V !== null) {
                  var W = V.child;
                  if (W !== null) {
                    V.child = null;
                    do {
                      var Ce = W.sibling;
                      (W.sibling = null), (W = Ce);
                    } while (W !== null);
                  }
                }
                B = o;
              }
            }
            if (o.subtreeFlags & 2064 && u !== null) (u.return = o), (B = u);
            else
              e: for (; B !== null; ) {
                if (((o = B), o.flags & 2048))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      xr(9, o, o.return);
                  }
                var y = o.sibling;
                if (y !== null) {
                  (y.return = o.return), (B = y);
                  break e;
                }
                B = o.return;
              }
          }
          var h = e.current;
          for (B = h; B !== null; ) {
            u = B;
            var g = u.child;
            if (u.subtreeFlags & 2064 && g !== null) (g.return = u), (B = g);
            else
              e: for (u = h; B !== null; ) {
                if (((c = B), c.flags & 2048))
                  try {
                    switch (c.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rl(9, c);
                    }
                  } catch (Q) {
                    xe(c, c.return, Q);
                  }
                if (c === u) {
                  B = null;
                  break e;
                }
                var T = c.sibling;
                if (T !== null) {
                  (T.return = c.return), (B = T);
                  break e;
                }
                B = c.return;
              }
          }
          if (
            ((ne = l),
            Vt(),
            yt && typeof yt.onPostCommitFiberRoot == "function")
          )
            try {
              yt.onPostCommitFiberRoot(Ar, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (ue = n), (lt.transition = t);
      }
    }
    return !1;
  }
  function Xs(e, t, n) {
    (t = Fn(n, t)),
      (t = ds(e, t, 1)),
      (e = Qt(e, t, 1)),
      (t = Ae()),
      e !== null && (Gn(e, 1, t), Ke(e, t));
  }
  function xe(e, t, n) {
    if (e.tag === 3) Xs(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Xs(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Yt === null || !Yt.has(r)))
          ) {
            (e = Fn(n, e)),
              (e = ps(t, e, 1)),
              (t = Qt(t, e, 1)),
              (e = Ae()),
              t !== null && (Gn(t, 1, e), Ke(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Sd(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Ae()),
      (e.pingedLanes |= e.suspendedLanes & n),
      ze === e &&
        (De & n) === n &&
        (Ne === 4 || (Ne === 3 && (De & 130023424) === De && 500 > Ee() - Ti)
          ? fn(e, 0)
          : (Li |= n)),
      Ke(e, t);
  }
  function Gs(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = Hr), (Hr <<= 1), !(Hr & 130023424) && (Hr = 4194304))
        : (t = 1));
    var n = Ae();
    (e = Nt(e, t)), e !== null && (Gn(e, t, n), Ke(e, n));
  }
  function kd(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Gs(e, n);
  }
  function xd(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(a(314));
    }
    r !== null && r.delete(t), Gs(e, n);
  }
  var Js;
  Js = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || He.current) We = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (We = !1), sd(e, t, n);
        We = !!(e.flags & 131072);
      }
    else (We = !1), he && t.flags & 1048576 && La(t, cl, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Pl(e, t), (e = t.pendingProps);
        var l = Rn(t, Fe.current);
        On(t, n), (l = ui(null, t, r, e, l, n));
        var o = ai();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ve(r) ? ((o = !0), ul(t)) : (o = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              ei(t),
              (l.updater = El),
              (t.stateNode = l),
              (l._reactInternals = t),
              hi(t, r, e, n),
              (t = gi(null, t, r, !0, o, n)))
            : ((t.tag = 0), he && o && Wo(t), Ue(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Pl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Cd(r)),
            (e = ct(r, e)),
            l)
          ) {
            case 0:
              t = yi(null, t, r, e, n);
              break e;
            case 1:
              t = xs(null, t, r, e, n);
              break e;
            case 11:
              t = ys(null, t, r, e, n);
              break e;
            case 14:
              t = gs(null, t, r, ct(r.type, e), n);
              break e;
          }
          throw Error(a(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ct(r, l)),
          yi(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ct(r, l)),
          xs(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Es(t), e === null)) throw Error(a(387));
          (r = t.pendingProps),
            (o = t.memoizedState),
            (l = o.element),
            $a(e, t),
            vl(t, r, null, n);
          var u = t.memoizedState;
          if (((r = u.element), o.isDehydrated))
            if (
              ((o = {
                element: r,
                isDehydrated: !1,
                cache: u.cache,
                pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
                transitions: u.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              (l = Fn(Error(a(423)), t)), (t = Cs(e, t, r, n, l));
              break e;
            } else if (r !== l) {
              (l = Fn(Error(a(424)), t)), (t = Cs(e, t, r, n, l));
              break e;
            } else
              for (
                qe = At(t.stateNode.containerInfo.firstChild),
                  Ze = t,
                  he = !0,
                  st = null,
                  n = ja(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Tn(), r === l)) {
              t = Tt(e, t, n);
              break e;
            }
            Ue(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Ba(t),
          e === null && Yo(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (u = l.children),
          $o(r, l) ? (u = null) : o !== null && $o(r, o) && (t.flags |= 32),
          ks(e, t),
          Ue(e, t, u, n),
          t.child
        );
      case 6:
        return e === null && Yo(t), null;
      case 13:
        return Ps(e, t, n);
      case 4:
        return (
          ti(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = zn(t, null, r, n)) : Ue(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ct(r, l)),
          ys(e, t, r, l, n)
        );
      case 7:
        return Ue(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ue(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ue(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (o = t.memoizedProps),
            (u = l.value),
            ce(pl, r._currentValue),
            (r._currentValue = u),
            o !== null)
          )
            if (at(o.value, u)) {
              if (o.children === l.children && !He.current) {
                t = Tt(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var c = o.dependencies;
                if (c !== null) {
                  u = o.child;
                  for (var d = c.firstContext; d !== null; ) {
                    if (d.context === r) {
                      if (o.tag === 1) {
                        (d = Lt(-1, n & -n)), (d.tag = 2);
                        var w = o.updateQueue;
                        if (w !== null) {
                          w = w.shared;
                          var N = w.pending;
                          N === null
                            ? (d.next = d)
                            : ((d.next = N.next), (N.next = d)),
                            (w.pending = d);
                        }
                      }
                      (o.lanes |= n),
                        (d = o.alternate),
                        d !== null && (d.lanes |= n),
                        qo(o.return, n, t),
                        (c.lanes |= n);
                      break;
                    }
                    d = d.next;
                  }
                } else if (o.tag === 10) u = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((u = o.return), u === null)) throw Error(a(341));
                  (u.lanes |= n),
                    (c = u.alternate),
                    c !== null && (c.lanes |= n),
                    qo(u, n, t),
                    (u = o.sibling);
                } else u = o.child;
                if (u !== null) u.return = o;
                else
                  for (u = o; u !== null; ) {
                    if (u === t) {
                      u = null;
                      break;
                    }
                    if (((o = u.sibling), o !== null)) {
                      (o.return = u.return), (u = o);
                      break;
                    }
                    u = u.return;
                  }
                o = u;
              }
          Ue(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          On(t, n),
          (l = nt(l)),
          (r = r(l)),
          (t.flags |= 1),
          Ue(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = ct(r, t.pendingProps)),
          (l = ct(r.type, l)),
          gs(e, t, r, l, n)
        );
      case 15:
        return ws(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ct(r, l)),
          Pl(e, t),
          (t.tag = 1),
          Ve(r) ? ((e = !0), ul(t)) : (e = !1),
          On(t, n),
          cs(t, r, l),
          hi(t, r, l, n),
          gi(null, t, r, !0, e, n)
        );
      case 19:
        return Rs(e, t, n);
      case 22:
        return Ss(e, t, n);
    }
    throw Error(a(156, t.tag));
  };
  function Zs(e, t) {
    return Tu(e, t);
  }
  function Ed(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ot(e, t, n, r) {
    return new Ed(e, t, n, r);
  }
  function $i(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Cd(e) {
    if (typeof e == "function") return $i(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === mt)) return 11;
      if (e === vt) return 14;
    }
    return 2;
  }
  function Zt(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = ot(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function jl(e, t, n, r, l, o) {
    var u = 2;
    if (((r = e), typeof e == "function")) $i(e) && (u = 1);
    else if (typeof e == "string") u = 5;
    else
      e: switch (e) {
        case me:
          return pn(n.children, l, o, t);
        case Pe:
          (u = 8), (l |= 8);
          break;
        case Se:
          return (
            (e = ot(12, n, t, l | 2)), (e.elementType = Se), (e.lanes = o), e
          );
        case Xe:
          return (e = ot(13, n, t, l)), (e.elementType = Xe), (e.lanes = o), e;
        case it:
          return (e = ot(19, n, t, l)), (e.elementType = it), (e.lanes = o), e;
        case ke:
          return Ml(n, l, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Le:
                u = 10;
                break e;
              case ht:
                u = 9;
                break e;
              case mt:
                u = 11;
                break e;
              case vt:
                u = 14;
                break e;
              case Be:
                (u = 16), (r = null);
                break e;
            }
          throw Error(a(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = ot(u, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
    );
  }
  function pn(e, t, n, r) {
    return (e = ot(7, e, r, t)), (e.lanes = n), e;
  }
  function Ml(e, t, n, r) {
    return (
      (e = ot(22, e, r, t)),
      (e.elementType = ke),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Ui(e, t, n) {
    return (e = ot(6, e, null, t)), (e.lanes = n), e;
  }
  function Ai(e, t, n) {
    return (
      (t = ot(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Pd(e, t, n, r, l) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = po(0)),
      (this.expirationTimes = po(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = po(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Bi(e, t, n, r, l, o, u, c, d) {
    return (
      (e = new Pd(e, t, n, c, d)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = ot(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      ei(o),
      e
    );
  }
  function _d(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: we,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function qs(e) {
    if (!e) return Ht;
    e = e._reactInternals;
    e: {
      if (en(e) !== e || e.tag !== 1) throw Error(a(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ve(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(a(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ve(n)) return _a(e, n, t);
    }
    return t;
  }
  function bs(e, t, n, r, l, o, u, c, d) {
    return (
      (e = Bi(n, r, !0, e, l, o, u, c, d)),
      (e.context = qs(null)),
      (n = e.current),
      (r = Ae()),
      (l = Gt(n)),
      (o = Lt(r, l)),
      (o.callback = t ?? null),
      Qt(n, o, l),
      (e.current.lanes = l),
      Gn(e, l, r),
      Ke(e, r),
      e
    );
  }
  function $l(e, t, n, r) {
    var l = t.current,
      o = Ae(),
      u = Gt(l);
    return (
      (n = qs(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Lt(o, u)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Qt(l, t, u)),
      e !== null && (pt(e, l, u, o), ml(e, l, u)),
      u
    );
  }
  function Ul(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function ec(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Hi(e, t) {
    ec(e, t), (e = e.alternate) && ec(e, t);
  }
  function Rd() {
    return null;
  }
  var tc =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Vi(e) {
    this._internalRoot = e;
  }
  (Al.prototype.render = Vi.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(a(409));
      $l(e, t, null, null);
    }),
    (Al.prototype.unmount = Vi.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          cn(function () {
            $l(null, e, null, null);
          }),
            (t[Ct] = null);
        }
      });
  function Al(e) {
    this._internalRoot = e;
  }
  Al.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = $u();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Mt.length && t !== 0 && t < Mt[n].priority; n++);
      Mt.splice(n, 0, e), n === 0 && Bu(e);
    }
  };
  function Wi(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Bl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function nc() {}
  function Nd(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function () {
          var w = Ul(u);
          o.call(w);
        };
      }
      var u = bs(t, r, e, 0, null, !1, !1, "", nc);
      return (
        (e._reactRootContainer = u),
        (e[Ct] = u.current),
        sr(e.nodeType === 8 ? e.parentNode : e),
        cn(),
        u
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var c = r;
      r = function () {
        var w = Ul(d);
        c.call(w);
      };
    }
    var d = Bi(e, 0, !1, null, null, !1, !1, "", nc);
    return (
      (e._reactRootContainer = d),
      (e[Ct] = d.current),
      sr(e.nodeType === 8 ? e.parentNode : e),
      cn(function () {
        $l(t, d, n, r);
      }),
      d
    );
  }
  function Hl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var u = o;
      if (typeof l == "function") {
        var c = l;
        l = function () {
          var d = Ul(u);
          c.call(d);
        };
      }
      $l(t, u, e, l);
    } else u = Nd(n, t, e, l, r);
    return Ul(u);
  }
  (ju = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Xn(t.pendingLanes);
          n !== 0 &&
            (ho(t, n | 1), Ke(t, Ee()), !(ne & 6) && (($n = Ee() + 500), Vt()));
        }
        break;
      case 13:
        cn(function () {
          var r = Nt(e, 1);
          if (r !== null) {
            var l = Ae();
            pt(r, e, 1, l);
          }
        }),
          Hi(e, 1);
    }
  }),
    (mo = function (e) {
      if (e.tag === 13) {
        var t = Nt(e, 134217728);
        if (t !== null) {
          var n = Ae();
          pt(t, e, 134217728, n);
        }
        Hi(e, 134217728);
      }
    }),
    (Mu = function (e) {
      if (e.tag === 13) {
        var t = Gt(e),
          n = Nt(e, t);
        if (n !== null) {
          var r = Ae();
          pt(n, e, t, r);
        }
        Hi(e, t);
      }
    }),
    ($u = function () {
      return ue;
    }),
    (Uu = function (e, t) {
      var n = ue;
      try {
        return (ue = e), t();
      } finally {
        ue = n;
      }
    }),
    (io = function (e, t, n) {
      switch (t) {
        case "input":
          if ((ql(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = ol(r);
                if (!l) throw Error(a(90));
                su(r), ql(r, l);
              }
            }
          }
          break;
        case "textarea":
          hu(e, n);
          break;
        case "select":
          (t = n.value), t != null && mn(e, !!n.multiple, t, !1);
      }
    }),
    (Eu = Fi),
    (Cu = cn);
  var Ld = { usingClientEntryPoint: !1, Events: [dr, Pn, ol, ku, xu, Fi] },
    _r = {
      findFiberByHostInstance: tn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Td = {
      bundleType: _r.bundleType,
      version: _r.version,
      rendererPackageName: _r.rendererPackageName,
      rendererConfig: _r.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: te.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Nu(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: _r.findFiberByHostInstance || Rd,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vl.isDisabled && Vl.supportsFiber)
      try {
        (Ar = Vl.inject(Td)), (yt = Vl);
      } catch {}
  }
  return (
    (Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ld),
    (Ye.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Wi(t)) throw Error(a(200));
      return _d(e, t, null, n);
    }),
    (Ye.createRoot = function (e, t) {
      if (!Wi(e)) throw Error(a(299));
      var n = !1,
        r = "",
        l = tc;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Bi(e, 1, !1, null, null, n, !1, r, l)),
        (e[Ct] = t.current),
        sr(e.nodeType === 8 ? e.parentNode : e),
        new Vi(t)
      );
    }),
    (Ye.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(a(188))
          : ((e = Object.keys(e).join(",")), Error(a(268, e)));
      return (e = Nu(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Ye.flushSync = function (e) {
      return cn(e);
    }),
    (Ye.hydrate = function (e, t, n) {
      if (!Bl(t)) throw Error(a(200));
      return Hl(null, e, t, !0, n);
    }),
    (Ye.hydrateRoot = function (e, t, n) {
      if (!Wi(e)) throw Error(a(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = "",
        u = tc;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
        (t = bs(t, null, e, 1, n ?? null, l, !1, o, u)),
        (e[Ct] = t.current),
        sr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l);
      return new Al(t);
    }),
    (Ye.render = function (e, t, n) {
      if (!Bl(t)) throw Error(a(200));
      return Hl(null, e, t, !1, n);
    }),
    (Ye.unmountComponentAtNode = function (e) {
      if (!Bl(e)) throw Error(a(40));
      return e._reactRootContainer
        ? (cn(function () {
            Hl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Ct] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Ye.unstable_batchedUpdates = Fi),
    (Ye.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Bl(n)) throw Error(a(200));
      if (e == null || e._reactInternals === void 0) throw Error(a(38));
      return Hl(e, t, n, !1, r);
    }),
    (Ye.version = "18.3.1-next-f1338f8080-20240426"),
    Ye
  );
}
var cc;
function $d() {
  if (cc) return Yi.exports;
  cc = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (s) {
        console.error(s);
      }
  }
  return i(), (Yi.exports = Md()), Yi.exports;
}
var fc;
function Ud() {
  if (fc) return Wl;
  fc = 1;
  var i = $d();
  return (Wl.createRoot = i.createRoot), (Wl.hydrateRoot = i.hydrateRoot), Wl;
}
var Ad = Ud();
const Bd = "Al Quran learning , developed by RARE academy with Masum",
  Ji = [
    {
      theme: "Calm Learning",
      combinations: [
        {
          backgroundColor: "bg-blue-50",
          textColor: "text-blue-800",
          description: "Soft blue & deep blue",
        },
        {
          backgroundColor: "bg-green-50",
          textColor: "text-green-900",
          description: "Pale green & dark green",
        },
        {
          backgroundColor: "bg-yellow-100",
          textColor: "text-gray-900",
          description: "Light yellow & dark gray",
        },
      ],
    },
    {
      theme: "High Contrast",
      combinations: [
        {
          backgroundColor: "bg-white",
          textColor: "text-black",
          description: "Classic black & white",
        },
        {
          backgroundColor: "bg-gray-100",
          textColor: "text-indigo-800",
          description: "Light gray & deep indigo",
        },
        {
          backgroundColor: "bg-yellow-50",
          textColor: "text-purple-900",
          description: "Soft yellow & deep purple",
        },
      ],
    },
    {
      theme: "Pastel Soft",
      combinations: [
        {
          backgroundColor: "bg-pink-50",
          textColor: "text-pink-900",
          description: "Soft pink & deep pink",
        },
        {
          backgroundColor: "bg-blue-100",
          textColor: "text-blue-900",
          description: "Light blue & deep blue",
        },
        {
          backgroundColor: "bg-green-50",
          textColor: "text-green-900",
          description: "Pale green & dark green",
        },
      ],
    },
  ],
  Hd = [
    "أ",
    "ب",
    "ت",
    "ث",
    "ج",
    "ح",
    "خ",
    "د",
    "ذ",
    "ر",
    "ز",
    "س",
    "ش",
    "ص",
    "ض",
    "ط",
    "ظ",
    "ع",
    "غ",
    "ف",
    "ق",
    "ك",
    "ل",
    "م",
    "ن",
    "ه",
    "و",
    "ي",
  ],
  Vd = [
    "أَلِف",
    "بَاء",
    "تَاء",
    "ثَاء",
    "جِيم",
    "حَاء",
    "خَاء",
    "دَال",
    "ذَال",
    "رَاء",
    "زَاي",
    "سِين",
    "شِين",
    "صَاد",
    "ضَاد",
    "طَاء",
    "ظَاء",
    "عَين",
    "غَين",
    "فَاء",
    "قَاف",
    "كَاف",
    "لَام",
    "مِيم",
    "نُون",
    "هَاء",
    "وَاو",
    "يَاء",
  ],
  Zi = [
    { name: "", title: "", symbol: "", unicode: "", description: "" },
    {
      name: "Fathah",
      title: "যবর",
      symbol: "َ",
      unicode: "U+064E",
      description: "Short 'a' sound",
    },
    {
      name: "Kasrah",
      title: "যের",
      symbol: "ِ",
      unicode: "U+0650",
      description: "Short 'i' sound",
    },
    {
      name: "Dhammah",
      title: "পেশ",
      symbol: "ُ",
      unicode: "U+064F",
      description: "Short 'u' sound",
    },
    {
      name: "Saakinah",
      title: "সাকিন",
      symbol: "ْ",
      unicode: "U+0652",
      description: "No vowel (silent letter)",
    },
    {
      name: "AshShaddah",
      title: "তাশদীদ",
      symbol: "ّ",
      unicode: "U+0651",
      description: "Indicates doubling (gemination)",
    },
    {
      name: "FathahTanween",
      title: "দুই যবর",
      symbol: "ً",
      unicode: "U+064B",
      description: "Indicates 'an' sound (tanween)",
    },
    {
      name: "KasrahTanween",
      title: "দুই যের",
      symbol: "ٍ",
      unicode: "U+064D",
      description: "Indicates 'in' sound (tanween)",
    },
    {
      name: "DhammahTanween",
      title: "দুই পেশ",
      symbol: "ٌ",
      unicode: "U+064C",
      description: "Indicates 'un' sound (tanween)",
    },
  ];
function Wd({ selectedColor: i, arabicDiacritics: s = "", withNames: a = !1 }) {
  let p = 0;
  return K.jsxs(K.Fragment, {
    children: [
      K.jsxs("h1", {
        className: "text-center text-4xl",
        children: [
          " ",
          Bd,
          " ",
          K.jsx("br", {}),
          " আরবী বর্ণমালা ",
          s && "-" + String.fromCodePoint(parseInt(s, 16)) + "  দিয়ে",
        ],
      }),
      K.jsx(
        "div",
        {
          className: "flex flex-wrap flex-row-reverse w-[100%] space-x-1 m-4 ",
          children: Hd.map((f, m) =>
            K.jsx(
              "div",
              {
                className: " group flex-grow",
                children: K.jsxs(
                  "div",
                  {
                    className: `rtl p-10 m-1 h-[200px] ${
                      a ? "hover:text-8xl" : ""
                    }
            ${i.backgroundColor} 
            text-8xl text-center 
            ${i.textColor} rounded-lg`,
                    children: [
                      f,
                      s && String.fromCodePoint(parseInt(s, 16)),
                      a &&
                        K.jsx(
                          "div",
                          {
                            className:
                              "text-5xl text-left opacity-0 group-hover:opacity-100",
                            children: Vd[m],
                          },
                          `itemName-${p}-${m}`
                        ),
                    ],
                  },
                  `item-${p}-${m}`
                ),
              },
              `container-${p}-${m}`
            )
          ),
        },
        p
      ),
    ],
  });
}
function Qd({
  selectedTheme: i,
  setSelectedTheme: s,
  alphabetColorCombinations: a,
  setSelectedColor: p,
}) {
  const f = (m) => {
    const x = a.find((E) => E.theme === m.target.value);
    s(x), p(x.combinations[0]);
  };
  return K.jsxs(K.Fragment, {
    children: [
      K.jsx("label", {
        className: "w-full mb-2 font-semibold",
        children: "Select Theme & color combination :    ",
      }),
      K.jsx("select", {
        value: i.theme,
        onChange: f,
        className: "w-full p-2 border rounded",
        children: a.map((m) =>
          K.jsx("option", { value: m.theme, children: m.theme }, m.theme)
        ),
      }),
    ],
  });
}
function Kd({ selectedTheme: i, selectedColor: s, setSelectedColor: a }) {
  const p = (f) => {
    const m = JSON.parse(f.target.value);
    a(m);
  };
  return K.jsx(K.Fragment, {
    children: K.jsx("select", {
      value: JSON.stringify(s),
      onChange: p,
      className: "w-full p-2 border rounded ${selectedColor.backgroundColor}",
      children: i.combinations.map((f, m) =>
        K.jsx(
          "option",
          { value: JSON.stringify(f), children: f.description },
          m
        )
      ),
    }),
  });
}
function qi({ menu: i, submenu: s }) {
  return K.jsxs("div", {
    className:
      "relative group h-full text-center break-words whitespace-normal",
    children: [
      K.jsx("hr", {}),
      K.jsx("br", {}),
      K.jsx("br", {}),
      K.jsx("a", {
        className: "block px-3 py-2 rounded hover:bg-blue-700",
        href: i.src,
        children: i.title,
      }),
      s &&
        K.jsx("div", {
          className:
            "absolute left-[80px] transform -translate-y-1/2 mt-2 w-full bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition duration-300 hover:z-10",
          children: s.map((a, p) =>
            K.jsx(
              "a",
              {
                href: a.src,
                className:
                  "block py-2 px-4 rounded hover:bg-blue-700 transition-colors",
                children: a.title,
              },
              p
            )
          ),
        }),
      K.jsx("br", {}),
      K.jsx("br", {}),
      K.jsx("hr", {}),
    ],
  });
}
function Yd({
  selectedColor: i,
  selectedTheme: s,
  setSelectedTheme: a,
  setSelectedColor: p,
  alphabetColorCombinations: f,
}) {
  return K.jsxs(K.Fragment, {
    children: [
      K.jsx("button", {
        className: `md:hidden ${i.backgroundColor} ${i.textColor} p-2`,
        onClick: () => {
          document.getElementById("vertical-menu").classList.toggle("hidden");
        },
        children: "মেনু",
      }),
      K.jsxs("nav", {
        id: "vertical-menu",
        className: `${i.backgroundColor} ${i.textColor} w-32  p-4 hidden md:block`,
        children: [
          K.jsx("div", {
            className: "text-lg font-bold mb-6",
            children: "আরবী শেখা",
          }),
          K.jsxs("div", {
            className: "mb-4",
            children: [
              K.jsx(Qd, {
                selectedTheme: s,
                setSelectedTheme: (m) => {
                  a(m), p(m.combinations[0]);
                },
                alphabetColorCombinations: f,
              }),
              K.jsx(Kd, {
                selectedTheme: s,
                selectedColor: i,
                setSelectedColor: p,
              }),
            ],
          }),
          K.jsxs("ul", {
            className: "space-y-4",
            children: [
              K.jsx("div", {
                children: K.jsx(qi, {
                  menu: { title: "আরবী বর্ণমালা", src: "/" },
                  submenu: [],
                }),
              }),
              K.jsx("hr", {}),
              K.jsx("div", {
                children: K.jsx(qi, {
                  menu: { title: "হরকত", src: "" },
                  submenu: [
                    { title: "আরবী বর্ণমালা যবর সহ", src: "/fathah" },
                    { title: "আরবী বর্ণমালা যের সহ", src: "/kasrah" },
                    { title: "আরবী বর্ণমালা পেশ সহ", src: "/dhammah" },
                  ],
                }),
              }),
              K.jsx("div", {
                children: K.jsx(qi, {
                  menu: { title: "তানভীন", src: "" },
                  submenu: [
                    {
                      title: "আরবী বর্ণমালা দুই যবর সহ",
                      src: "/fathahtanween",
                    },
                    {
                      title: "আরবী বর্ণমালা দুই যের সহ",
                      src: "/kasrahtanween",
                    },
                    {
                      title: "আরবী বর্ণমালা দুই পেশ সহ",
                      src: "/dhammahtanween",
                    },
                  ],
                }),
              }),
              K.jsx("div", {}),
            ],
          }),
        ],
      }),
    ],
  });
}
var Nr = {},
  dc;
function Xd() {
  if (dc) return Nr;
  (dc = 1),
    Object.defineProperty(Nr, "__esModule", { value: !0 }),
    (Nr.parse = x),
    (Nr.serialize = k);
  const i = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    s = /^[\u0021-\u003A\u003C-\u007E]*$/,
    a =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    p = /^[\u0020-\u003A\u003D-\u007E]*$/,
    f = Object.prototype.toString,
    m = (() => {
      const P = function () {};
      return (P.prototype = Object.create(null)), P;
    })();
  function x(P, $) {
    const z = new m(),
      j = P.length;
    if (j < 2) return z;
    const O = ($ == null ? void 0 : $.decode) || I;
    let F = 0;
    do {
      const A = P.indexOf("=", F);
      if (A === -1) break;
      const Z = P.indexOf(";", F),
        te = Z === -1 ? j : Z;
      if (A > te) {
        F = P.lastIndexOf(";", A - 1) + 1;
        continue;
      }
      const ae = E(P, F, A),
        we = S(P, A, ae),
        me = P.slice(ae, we);
      if (z[me] === void 0) {
        let Pe = E(P, A + 1, te),
          Se = S(P, te, Pe);
        const Le = O(P.slice(Pe, Se));
        z[me] = Le;
      }
      F = te + 1;
    } while (F < j);
    return z;
  }
  function E(P, $, z) {
    do {
      const j = P.charCodeAt($);
      if (j !== 32 && j !== 9) return $;
    } while (++$ < z);
    return z;
  }
  function S(P, $, z) {
    for (; $ > z; ) {
      const j = P.charCodeAt(--$);
      if (j !== 32 && j !== 9) return $ + 1;
    }
    return z;
  }
  function k(P, $, z) {
    const j = (z == null ? void 0 : z.encode) || encodeURIComponent;
    if (!i.test(P)) throw new TypeError(`argument name is invalid: ${P}`);
    const O = j($);
    if (!s.test(O)) throw new TypeError(`argument val is invalid: ${$}`);
    let F = P + "=" + O;
    if (!z) return F;
    if (z.maxAge !== void 0) {
      if (!Number.isInteger(z.maxAge))
        throw new TypeError(`option maxAge is invalid: ${z.maxAge}`);
      F += "; Max-Age=" + z.maxAge;
    }
    if (z.domain) {
      if (!a.test(z.domain))
        throw new TypeError(`option domain is invalid: ${z.domain}`);
      F += "; Domain=" + z.domain;
    }
    if (z.path) {
      if (!p.test(z.path))
        throw new TypeError(`option path is invalid: ${z.path}`);
      F += "; Path=" + z.path;
    }
    if (z.expires) {
      if (!D(z.expires) || !Number.isFinite(z.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${z.expires}`);
      F += "; Expires=" + z.expires.toUTCString();
    }
    if (
      (z.httpOnly && (F += "; HttpOnly"),
      z.secure && (F += "; Secure"),
      z.partitioned && (F += "; Partitioned"),
      z.priority)
    )
      switch (
        typeof z.priority == "string" ? z.priority.toLowerCase() : void 0
      ) {
        case "low":
          F += "; Priority=Low";
          break;
        case "medium":
          F += "; Priority=Medium";
          break;
        case "high":
          F += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${z.priority}`);
      }
    if (z.sameSite)
      switch (
        typeof z.sameSite == "string" ? z.sameSite.toLowerCase() : z.sameSite
      ) {
        case !0:
        case "strict":
          F += "; SameSite=Strict";
          break;
        case "lax":
          F += "; SameSite=Lax";
          break;
        case "none":
          F += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${z.sameSite}`);
      }
    return F;
  }
  function I(P) {
    if (P.indexOf("%") === -1) return P;
    try {
      return decodeURIComponent(P);
    } catch {
      return P;
    }
  }
  function D(P) {
    return f.call(P) === "[object Date]";
  }
  return Nr;
}
Xd();
/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var pc = "popstate";
function Gd(i = {}) {
  function s(p, f) {
    let { pathname: m, search: x, hash: E } = p.location;
    return tu(
      "",
      { pathname: m, search: x, hash: E },
      (f.state && f.state.usr) || null,
      (f.state && f.state.key) || "default"
    );
  }
  function a(p, f) {
    return typeof f == "string" ? f : Tr(f);
  }
  return Zd(s, a, null, i);
}
function ge(i, s) {
  if (i === !1 || i === null || typeof i > "u") throw new Error(s);
}
function xt(i, s) {
  if (!i) {
    typeof console < "u" && console.warn(s);
    try {
      throw new Error(s);
    } catch {}
  }
}
function Jd() {
  return Math.random().toString(36).substring(2, 10);
}
function hc(i, s) {
  return { usr: i.state, key: i.key, idx: s };
}
function tu(i, s, a = null, p) {
  return {
    pathname: typeof i == "string" ? i : i.pathname,
    search: "",
    hash: "",
    ...(typeof s == "string" ? An(s) : s),
    state: a,
    key: (s && s.key) || p || Jd(),
  };
}
function Tr({ pathname: i = "/", search: s = "", hash: a = "" }) {
  return (
    s && s !== "?" && (i += s.charAt(0) === "?" ? s : "?" + s),
    a && a !== "#" && (i += a.charAt(0) === "#" ? a : "#" + a),
    i
  );
}
function An(i) {
  let s = {};
  if (i) {
    let a = i.indexOf("#");
    a >= 0 && ((s.hash = i.substring(a)), (i = i.substring(0, a)));
    let p = i.indexOf("?");
    p >= 0 && ((s.search = i.substring(p)), (i = i.substring(0, p))),
      i && (s.pathname = i);
  }
  return s;
}
function Zd(i, s, a, p = {}) {
  let { window: f = document.defaultView, v5Compat: m = !1 } = p,
    x = f.history,
    E = "POP",
    S = null,
    k = I();
  k == null && ((k = 0), x.replaceState({ ...x.state, idx: k }, ""));
  function I() {
    return (x.state || { idx: null }).idx;
  }
  function D() {
    E = "POP";
    let O = I(),
      F = O == null ? null : O - k;
    (k = O), S && S({ action: E, location: j.location, delta: F });
  }
  function P(O, F) {
    E = "PUSH";
    let A = tu(j.location, O, F);
    k = I() + 1;
    let Z = hc(A, k),
      te = j.createHref(A);
    try {
      x.pushState(Z, "", te);
    } catch (ae) {
      if (ae instanceof DOMException && ae.name === "DataCloneError") throw ae;
      f.location.assign(te);
    }
    m && S && S({ action: E, location: j.location, delta: 1 });
  }
  function $(O, F) {
    E = "REPLACE";
    let A = tu(j.location, O, F);
    k = I();
    let Z = hc(A, k),
      te = j.createHref(A);
    x.replaceState(Z, "", te),
      m && S && S({ action: E, location: j.location, delta: 0 });
  }
  function z(O) {
    let F = f.location.origin !== "null" ? f.location.origin : f.location.href,
      A = typeof O == "string" ? O : Tr(O);
    return (
      (A = A.replace(/ $/, "%20")),
      ge(
        F,
        `No window.location.(origin|href) available to create URL for href: ${A}`
      ),
      new URL(A, F)
    );
  }
  let j = {
    get action() {
      return E;
    },
    get location() {
      return i(f, x);
    },
    listen(O) {
      if (S) throw new Error("A history only accepts one active listener");
      return (
        f.addEventListener(pc, D),
        (S = O),
        () => {
          f.removeEventListener(pc, D), (S = null);
        }
      );
    },
    createHref(O) {
      return s(f, O);
    },
    createURL: z,
    encodeLocation(O) {
      let F = z(O);
      return { pathname: F.pathname, search: F.search, hash: F.hash };
    },
    push: P,
    replace: $,
    go(O) {
      return x.go(O);
    },
  };
  return j;
}
function gc(i, s, a = "/") {
  return qd(i, s, a, !1);
}
function qd(i, s, a, p) {
  let f = typeof s == "string" ? An(s) : s,
    m = bt(f.pathname || "/", a);
  if (m == null) return null;
  let x = wc(i);
  bd(x);
  let E = null;
  for (let S = 0; E == null && S < x.length; ++S) {
    let k = cp(m);
    E = ap(x[S], k, p);
  }
  return E;
}
function wc(i, s = [], a = [], p = "") {
  let f = (m, x, E) => {
    let S = {
      relativePath: E === void 0 ? m.path || "" : E,
      caseSensitive: m.caseSensitive === !0,
      childrenIndex: x,
      route: m,
    };
    S.relativePath.startsWith("/") &&
      (ge(
        S.relativePath.startsWith(p),
        `Absolute route path "${S.relativePath}" nested under path "${p}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (S.relativePath = S.relativePath.slice(p.length)));
    let k = It([p, S.relativePath]),
      I = a.concat(S);
    m.children &&
      m.children.length > 0 &&
      (ge(
        m.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${k}".`
      ),
      wc(m.children, s, I, k)),
      !(m.path == null && !m.index) &&
        s.push({ path: k, score: ip(k, m.index), routesMeta: I });
  };
  return (
    i.forEach((m, x) => {
      var E;
      if (m.path === "" || !((E = m.path) != null && E.includes("?"))) f(m, x);
      else for (let S of Sc(m.path)) f(m, x, S);
    }),
    s
  );
}
function Sc(i) {
  let s = i.split("/");
  if (s.length === 0) return [];
  let [a, ...p] = s,
    f = a.endsWith("?"),
    m = a.replace(/\?$/, "");
  if (p.length === 0) return f ? [m, ""] : [m];
  let x = Sc(p.join("/")),
    E = [];
  return (
    E.push(...x.map((S) => (S === "" ? m : [m, S].join("/")))),
    f && E.push(...x),
    E.map((S) => (i.startsWith("/") && S === "" ? "/" : S))
  );
}
function bd(i) {
  i.sort((s, a) =>
    s.score !== a.score
      ? a.score - s.score
      : up(
          s.routesMeta.map((p) => p.childrenIndex),
          a.routesMeta.map((p) => p.childrenIndex)
        )
  );
}
var ep = /^:[\w-]+$/,
  tp = 3,
  np = 2,
  rp = 1,
  lp = 10,
  op = -2,
  mc = (i) => i === "*";
function ip(i, s) {
  let a = i.split("/"),
    p = a.length;
  return (
    a.some(mc) && (p += op),
    s && (p += np),
    a
      .filter((f) => !mc(f))
      .reduce((f, m) => f + (ep.test(m) ? tp : m === "" ? rp : lp), p)
  );
}
function up(i, s) {
  return i.length === s.length && i.slice(0, -1).every((p, f) => p === s[f])
    ? i[i.length - 1] - s[s.length - 1]
    : 0;
}
function ap(i, s, a = !1) {
  let { routesMeta: p } = i,
    f = {},
    m = "/",
    x = [];
  for (let E = 0; E < p.length; ++E) {
    let S = p[E],
      k = E === p.length - 1,
      I = m === "/" ? s : s.slice(m.length) || "/",
      D = Xl(
        { path: S.relativePath, caseSensitive: S.caseSensitive, end: k },
        I
      ),
      P = S.route;
    if (
      (!D &&
        k &&
        a &&
        !p[p.length - 1].route.index &&
        (D = Xl(
          { path: S.relativePath, caseSensitive: S.caseSensitive, end: !1 },
          I
        )),
      !D)
    )
      return null;
    Object.assign(f, D.params),
      x.push({
        params: f,
        pathname: It([m, D.pathname]),
        pathnameBase: hp(It([m, D.pathnameBase])),
        route: P,
      }),
      D.pathnameBase !== "/" && (m = It([m, D.pathnameBase]));
  }
  return x;
}
function Xl(i, s) {
  typeof i == "string" && (i = { path: i, caseSensitive: !1, end: !0 });
  let [a, p] = sp(i.path, i.caseSensitive, i.end),
    f = s.match(a);
  if (!f) return null;
  let m = f[0],
    x = m.replace(/(.)\/+$/, "$1"),
    E = f.slice(1);
  return {
    params: p.reduce((k, { paramName: I, isOptional: D }, P) => {
      if (I === "*") {
        let z = E[P] || "";
        x = m.slice(0, m.length - z.length).replace(/(.)\/+$/, "$1");
      }
      const $ = E[P];
      return (
        D && !$ ? (k[I] = void 0) : (k[I] = ($ || "").replace(/%2F/g, "/")), k
      );
    }, {}),
    pathname: m,
    pathnameBase: x,
    pattern: i,
  };
}
function sp(i, s = !1, a = !0) {
  xt(
    i === "*" || !i.endsWith("*") || i.endsWith("/*"),
    `Route path "${i}" will be treated as if it were "${i.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let p = [],
    f =
      "^" +
      i
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (x, E, S) => (
            p.push({ paramName: E, isOptional: S != null }),
            S ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    i.endsWith("*")
      ? (p.push({ paramName: "*" }),
        (f += i === "*" || i === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : a
      ? (f += "\\/*$")
      : i !== "" && i !== "/" && (f += "(?:(?=\\/|$))"),
    [new RegExp(f, s ? void 0 : "i"), p]
  );
}
function cp(i) {
  try {
    return i
      .split("/")
      .map((s) => decodeURIComponent(s).replace(/\//g, "%2F"))
      .join("/");
  } catch (s) {
    return (
      xt(
        !1,
        `The URL path "${i}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`
      ),
      i
    );
  }
}
function bt(i, s) {
  if (s === "/") return i;
  if (!i.toLowerCase().startsWith(s.toLowerCase())) return null;
  let a = s.endsWith("/") ? s.length - 1 : s.length,
    p = i.charAt(a);
  return p && p !== "/" ? null : i.slice(a) || "/";
}
function fp(i, s = "/") {
  let {
    pathname: a,
    search: p = "",
    hash: f = "",
  } = typeof i == "string" ? An(i) : i;
  return {
    pathname: a ? (a.startsWith("/") ? a : dp(a, s)) : s,
    search: mp(p),
    hash: vp(f),
  };
}
function dp(i, s) {
  let a = s.replace(/\/+$/, "").split("/");
  return (
    i.split("/").forEach((f) => {
      f === ".." ? a.length > 1 && a.pop() : f !== "." && a.push(f);
    }),
    a.length > 1 ? a.join("/") : "/"
  );
}
function bi(i, s, a, p) {
  return `Cannot include a '${i}' character in a manually specified \`to.${s}\` field [${JSON.stringify(
    p
  )}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function pp(i) {
  return i.filter(
    (s, a) => a === 0 || (s.route.path && s.route.path.length > 0)
  );
}
function kc(i) {
  let s = pp(i);
  return s.map((a, p) => (p === s.length - 1 ? a.pathname : a.pathnameBase));
}
function xc(i, s, a, p = !1) {
  let f;
  typeof i == "string"
    ? (f = An(i))
    : ((f = { ...i }),
      ge(
        !f.pathname || !f.pathname.includes("?"),
        bi("?", "pathname", "search", f)
      ),
      ge(
        !f.pathname || !f.pathname.includes("#"),
        bi("#", "pathname", "hash", f)
      ),
      ge(!f.search || !f.search.includes("#"), bi("#", "search", "hash", f)));
  let m = i === "" || f.pathname === "",
    x = m ? "/" : f.pathname,
    E;
  if (x == null) E = a;
  else {
    let D = s.length - 1;
    if (!p && x.startsWith("..")) {
      let P = x.split("/");
      for (; P[0] === ".."; ) P.shift(), (D -= 1);
      f.pathname = P.join("/");
    }
    E = D >= 0 ? s[D] : "/";
  }
  let S = fp(f, E),
    k = x && x !== "/" && x.endsWith("/"),
    I = (m || x === ".") && a.endsWith("/");
  return !S.pathname.endsWith("/") && (k || I) && (S.pathname += "/"), S;
}
var It = (i) => i.join("/").replace(/\/\/+/g, "/"),
  hp = (i) => i.replace(/\/+$/, "").replace(/^\/*/, "/"),
  mp = (i) => (!i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i),
  vp = (i) => (!i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i);
function yp(i) {
  return (
    i != null &&
    typeof i.status == "number" &&
    typeof i.statusText == "string" &&
    typeof i.internal == "boolean" &&
    "data" in i
  );
}
var Ec = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Ec);
var gp = ["GET", ...Ec];
new Set(gp);
var Bn = C.createContext(null);
Bn.displayName = "DataRouter";
var Gl = C.createContext(null);
Gl.displayName = "DataRouterState";
var Cc = C.createContext({ isTransitioning: !1 });
Cc.displayName = "ViewTransition";
var wp = C.createContext(new Map());
wp.displayName = "Fetchers";
var Sp = C.createContext(null);
Sp.displayName = "Await";
var Et = C.createContext(null);
Et.displayName = "Navigation";
var zr = C.createContext(null);
zr.displayName = "Location";
var Ot = C.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Ot.displayName = "Route";
var lu = C.createContext(null);
lu.displayName = "RouteError";
function kp(i, { relative: s } = {}) {
  ge(
    Ir(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: a, navigator: p } = C.useContext(Et),
    { hash: f, pathname: m, search: x } = Or(i, { relative: s }),
    E = m;
  return (
    a !== "/" && (E = m === "/" ? a : It([a, m])),
    p.createHref({ pathname: E, search: x, hash: f })
  );
}
function Ir() {
  return C.useContext(zr) != null;
}
function hn() {
  return (
    ge(
      Ir(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    C.useContext(zr).location
  );
}
var Pc =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function _c(i) {
  C.useContext(Et).static || C.useLayoutEffect(i);
}
function xp() {
  let { isDataRoute: i } = C.useContext(Ot);
  return i ? Fp() : Ep();
}
function Ep() {
  ge(
    Ir(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let i = C.useContext(Bn),
    { basename: s, navigator: a } = C.useContext(Et),
    { matches: p } = C.useContext(Ot),
    { pathname: f } = hn(),
    m = JSON.stringify(kc(p)),
    x = C.useRef(!1);
  return (
    _c(() => {
      x.current = !0;
    }),
    C.useCallback(
      (S, k = {}) => {
        if ((xt(x.current, Pc), !x.current)) return;
        if (typeof S == "number") {
          a.go(S);
          return;
        }
        let I = xc(S, JSON.parse(m), f, k.relative === "path");
        i == null &&
          s !== "/" &&
          (I.pathname = I.pathname === "/" ? s : It([s, I.pathname])),
          (k.replace ? a.replace : a.push)(I, k.state, k);
      },
      [s, a, m, f, i]
    )
  );
}
C.createContext(null);
function Or(i, { relative: s } = {}) {
  let { matches: a } = C.useContext(Ot),
    { pathname: p } = hn(),
    f = JSON.stringify(kc(a));
  return C.useMemo(() => xc(i, JSON.parse(f), p, s === "path"), [i, f, p, s]);
}
function Cp(i, s) {
  return Rc(i, s);
}
function Rc(i, s, a, p) {
  var F;
  ge(
    Ir(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: f } = C.useContext(Et),
    { matches: m } = C.useContext(Ot),
    x = m[m.length - 1],
    E = x ? x.params : {},
    S = x ? x.pathname : "/",
    k = x ? x.pathnameBase : "/",
    I = x && x.route;
  {
    let A = (I && I.path) || "";
    Nc(
      S,
      !I || A.endsWith("*") || A.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${S}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${
        A === "/" ? "*" : `${A}/*`
      }">.`
    );
  }
  let D = hn(),
    P;
  if (s) {
    let A = typeof s == "string" ? An(s) : s;
    ge(
      k === "/" || ((F = A.pathname) == null ? void 0 : F.startsWith(k)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${k}" but pathname "${A.pathname}" was given in the \`location\` prop.`
    ),
      (P = A);
  } else P = D;
  let $ = P.pathname || "/",
    z = $;
  if (k !== "/") {
    let A = k.replace(/^\//, "").split("/");
    z = "/" + $.replace(/^\//, "").split("/").slice(A.length).join("/");
  }
  let j = gc(i, { pathname: z });
  xt(
    I || j != null,
    `No routes matched location "${P.pathname}${P.search}${P.hash}" `
  ),
    xt(
      j == null ||
        j[j.length - 1].route.element !== void 0 ||
        j[j.length - 1].route.Component !== void 0 ||
        j[j.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${P.pathname}${P.search}${P.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let O = Lp(
    j &&
      j.map((A) =>
        Object.assign({}, A, {
          params: Object.assign({}, E, A.params),
          pathname: It([
            k,
            f.encodeLocation
              ? f.encodeLocation(A.pathname).pathname
              : A.pathname,
          ]),
          pathnameBase:
            A.pathnameBase === "/"
              ? k
              : It([
                  k,
                  f.encodeLocation
                    ? f.encodeLocation(A.pathnameBase).pathname
                    : A.pathnameBase,
                ]),
        })
      ),
    m,
    a,
    p
  );
  return s && O
    ? C.createElement(
        zr.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...P,
            },
            navigationType: "POP",
          },
        },
        O
      )
    : O;
}
function Pp() {
  let i = Dp(),
    s = yp(i)
      ? `${i.status} ${i.statusText}`
      : i instanceof Error
      ? i.message
      : JSON.stringify(i),
    a = i instanceof Error ? i.stack : null,
    p = "rgba(200,200,200, 0.5)",
    f = { padding: "0.5rem", backgroundColor: p },
    m = { padding: "2px 4px", backgroundColor: p },
    x = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", i),
    (x = C.createElement(
      C.Fragment,
      null,
      C.createElement("p", null, "💿 Hey developer 👋"),
      C.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        C.createElement("code", { style: m }, "ErrorBoundary"),
        " or",
        " ",
        C.createElement("code", { style: m }, "errorElement"),
        " prop on your route."
      )
    )),
    C.createElement(
      C.Fragment,
      null,
      C.createElement("h2", null, "Unexpected Application Error!"),
      C.createElement("h3", { style: { fontStyle: "italic" } }, s),
      a ? C.createElement("pre", { style: f }, a) : null,
      x
    )
  );
}
var _p = C.createElement(Pp, null),
  Rp = class extends C.Component {
    constructor(i) {
      super(i),
        (this.state = {
          location: i.location,
          revalidation: i.revalidation,
          error: i.error,
        });
    }
    static getDerivedStateFromError(i) {
      return { error: i };
    }
    static getDerivedStateFromProps(i, s) {
      return s.location !== i.location ||
        (s.revalidation !== "idle" && i.revalidation === "idle")
        ? { error: i.error, location: i.location, revalidation: i.revalidation }
        : {
            error: i.error !== void 0 ? i.error : s.error,
            location: s.location,
            revalidation: i.revalidation || s.revalidation,
          };
    }
    componentDidCatch(i, s) {
      console.error(
        "React Router caught the following error during render",
        i,
        s
      );
    }
    render() {
      return this.state.error !== void 0
        ? C.createElement(
            Ot.Provider,
            { value: this.props.routeContext },
            C.createElement(lu.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function Np({ routeContext: i, match: s, children: a }) {
  let p = C.useContext(Bn);
  return (
    p &&
      p.static &&
      p.staticContext &&
      (s.route.errorElement || s.route.ErrorBoundary) &&
      (p.staticContext._deepestRenderedBoundaryId = s.route.id),
    C.createElement(Ot.Provider, { value: i }, a)
  );
}
function Lp(i, s = [], a = null, p = null) {
  if (i == null) {
    if (!a) return null;
    if (a.errors) i = a.matches;
    else if (s.length === 0 && !a.initialized && a.matches.length > 0)
      i = a.matches;
    else return null;
  }
  let f = i,
    m = a == null ? void 0 : a.errors;
  if (m != null) {
    let S = f.findIndex(
      (k) => k.route.id && (m == null ? void 0 : m[k.route.id]) !== void 0
    );
    ge(
      S >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        m
      ).join(",")}`
    ),
      (f = f.slice(0, Math.min(f.length, S + 1)));
  }
  let x = !1,
    E = -1;
  if (a)
    for (let S = 0; S < f.length; S++) {
      let k = f[S];
      if (
        ((k.route.HydrateFallback || k.route.hydrateFallbackElement) && (E = S),
        k.route.id)
      ) {
        let { loaderData: I, errors: D } = a,
          P =
            k.route.loader &&
            !I.hasOwnProperty(k.route.id) &&
            (!D || D[k.route.id] === void 0);
        if (k.route.lazy || P) {
          (x = !0), E >= 0 ? (f = f.slice(0, E + 1)) : (f = [f[0]]);
          break;
        }
      }
    }
  return f.reduceRight((S, k, I) => {
    let D,
      P = !1,
      $ = null,
      z = null;
    a &&
      ((D = m && k.route.id ? m[k.route.id] : void 0),
      ($ = k.route.errorElement || _p),
      x &&
        (E < 0 && I === 0
          ? (Nc(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (P = !0),
            (z = null))
          : E === I &&
            ((P = !0), (z = k.route.hydrateFallbackElement || null))));
    let j = s.concat(f.slice(0, I + 1)),
      O = () => {
        let F;
        return (
          D
            ? (F = $)
            : P
            ? (F = z)
            : k.route.Component
            ? (F = C.createElement(k.route.Component, null))
            : k.route.element
            ? (F = k.route.element)
            : (F = S),
          C.createElement(Np, {
            match: k,
            routeContext: { outlet: S, matches: j, isDataRoute: a != null },
            children: F,
          })
        );
      };
    return a && (k.route.ErrorBoundary || k.route.errorElement || I === 0)
      ? C.createElement(Rp, {
          location: a.location,
          revalidation: a.revalidation,
          component: $,
          error: D,
          children: O(),
          routeContext: { outlet: null, matches: j, isDataRoute: !0 },
        })
      : O();
  }, null);
}
function ou(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Tp(i) {
  let s = C.useContext(Bn);
  return ge(s, ou(i)), s;
}
function zp(i) {
  let s = C.useContext(Gl);
  return ge(s, ou(i)), s;
}
function Ip(i) {
  let s = C.useContext(Ot);
  return ge(s, ou(i)), s;
}
function iu(i) {
  let s = Ip(i),
    a = s.matches[s.matches.length - 1];
  return (
    ge(
      a.route.id,
      `${i} can only be used on routes that contain a unique "id"`
    ),
    a.route.id
  );
}
function Op() {
  return iu("useRouteId");
}
function Dp() {
  var p;
  let i = C.useContext(lu),
    s = zp("useRouteError"),
    a = iu("useRouteError");
  return i !== void 0 ? i : (p = s.errors) == null ? void 0 : p[a];
}
function Fp() {
  let { router: i } = Tp("useNavigate"),
    s = iu("useNavigate"),
    a = C.useRef(!1);
  return (
    _c(() => {
      a.current = !0;
    }),
    C.useCallback(
      async (f, m = {}) => {
        xt(a.current, Pc),
          a.current &&
            (typeof f == "number"
              ? i.navigate(f)
              : await i.navigate(f, { fromRouteId: s, ...m }));
      },
      [i, s]
    )
  );
}
var vc = {};
function Nc(i, s, a) {
  !s && !vc[i] && ((vc[i] = !0), xt(!1, a));
}
C.memo(jp);
function jp({ routes: i, future: s, state: a }) {
  return Rc(i, void 0, a, s);
}
function Lc(i) {
  ge(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Mp({
  basename: i = "/",
  children: s = null,
  location: a,
  navigationType: p = "POP",
  navigator: f,
  static: m = !1,
}) {
  ge(
    !Ir(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let x = i.replace(/^\/*/, "/"),
    E = C.useMemo(
      () => ({ basename: x, navigator: f, static: m, future: {} }),
      [x, f, m]
    );
  typeof a == "string" && (a = An(a));
  let {
      pathname: S = "/",
      search: k = "",
      hash: I = "",
      state: D = null,
      key: P = "default",
    } = a,
    $ = C.useMemo(() => {
      let z = bt(S, x);
      return z == null
        ? null
        : {
            location: { pathname: z, search: k, hash: I, state: D, key: P },
            navigationType: p,
          };
    }, [x, S, k, I, D, P, p]);
  return (
    xt(
      $ != null,
      `<Router basename="${x}"> is not able to match the URL "${S}${k}${I}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    $ == null
      ? null
      : C.createElement(
          Et.Provider,
          { value: E },
          C.createElement(zr.Provider, { children: s, value: $ })
        )
  );
}
function $p({ children: i, location: s }) {
  return Cp(nu(i), s);
}
function nu(i, s = []) {
  let a = [];
  return (
    C.Children.forEach(i, (p, f) => {
      if (!C.isValidElement(p)) return;
      let m = [...s, f];
      if (p.type === C.Fragment) {
        a.push.apply(a, nu(p.props.children, m));
        return;
      }
      ge(
        p.type === Lc,
        `[${
          typeof p.type == "string" ? p.type : p.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        ge(
          !p.props.index || !p.props.children,
          "An index route cannot have child routes."
        );
      let x = {
        id: p.props.id || m.join("-"),
        caseSensitive: p.props.caseSensitive,
        element: p.props.element,
        Component: p.props.Component,
        index: p.props.index,
        path: p.props.path,
        loader: p.props.loader,
        action: p.props.action,
        hydrateFallbackElement: p.props.hydrateFallbackElement,
        HydrateFallback: p.props.HydrateFallback,
        errorElement: p.props.errorElement,
        ErrorBoundary: p.props.ErrorBoundary,
        hasErrorBoundary:
          p.props.hasErrorBoundary === !0 ||
          p.props.ErrorBoundary != null ||
          p.props.errorElement != null,
        shouldRevalidate: p.props.shouldRevalidate,
        handle: p.props.handle,
        lazy: p.props.lazy,
      };
      p.props.children && (x.children = nu(p.props.children, m)), a.push(x);
    }),
    a
  );
}
var Kl = "get",
  Yl = "application/x-www-form-urlencoded";
function Jl(i) {
  return i != null && typeof i.tagName == "string";
}
function Up(i) {
  return Jl(i) && i.tagName.toLowerCase() === "button";
}
function Ap(i) {
  return Jl(i) && i.tagName.toLowerCase() === "form";
}
function Bp(i) {
  return Jl(i) && i.tagName.toLowerCase() === "input";
}
function Hp(i) {
  return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey);
}
function Vp(i, s) {
  return i.button === 0 && (!s || s === "_self") && !Hp(i);
}
var Ql = null;
function Wp() {
  if (Ql === null)
    try {
      new FormData(document.createElement("form"), 0), (Ql = !1);
    } catch {
      Ql = !0;
    }
  return Ql;
}
var Qp = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function eu(i) {
  return i != null && !Qp.has(i)
    ? (xt(
        !1,
        `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Yl}"`
      ),
      null)
    : i;
}
function Kp(i, s) {
  let a, p, f, m, x;
  if (Ap(i)) {
    let E = i.getAttribute("action");
    (p = E ? bt(E, s) : null),
      (a = i.getAttribute("method") || Kl),
      (f = eu(i.getAttribute("enctype")) || Yl),
      (m = new FormData(i));
  } else if (Up(i) || (Bp(i) && (i.type === "submit" || i.type === "image"))) {
    let E = i.form;
    if (E == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let S = i.getAttribute("formaction") || E.getAttribute("action");
    if (
      ((p = S ? bt(S, s) : null),
      (a = i.getAttribute("formmethod") || E.getAttribute("method") || Kl),
      (f =
        eu(i.getAttribute("formenctype")) ||
        eu(E.getAttribute("enctype")) ||
        Yl),
      (m = new FormData(E, i)),
      !Wp())
    ) {
      let { name: k, type: I, value: D } = i;
      if (I === "image") {
        let P = k ? `${k}.` : "";
        m.append(`${P}x`, "0"), m.append(`${P}y`, "0");
      } else k && m.append(k, D);
    }
  } else {
    if (Jl(i))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (a = Kl), (p = null), (f = Yl), (x = i);
  }
  return (
    m && f === "text/plain" && ((x = m), (m = void 0)),
    { action: p, method: a.toLowerCase(), encType: f, formData: m, body: x }
  );
}
function uu(i, s) {
  if (i === !1 || i === null || typeof i > "u") throw new Error(s);
}
async function Yp(i, s) {
  if (i.id in s) return s[i.id];
  try {
    let a = await import(i.module);
    return (s[i.id] = a), a;
  } catch (a) {
    return (
      console.error(
        `Error loading route module \`${i.module}\`, reloading page...`
      ),
      console.error(a),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Xp(i) {
  return i == null
    ? !1
    : i.href == null
    ? i.rel === "preload" &&
      typeof i.imageSrcSet == "string" &&
      typeof i.imageSizes == "string"
    : typeof i.rel == "string" && typeof i.href == "string";
}
async function Gp(i, s, a) {
  let p = await Promise.all(
    i.map(async (f) => {
      let m = s.routes[f.route.id];
      if (m) {
        let x = await Yp(m, a);
        return x.links ? x.links() : [];
      }
      return [];
    })
  );
  return bp(
    p
      .flat(1)
      .filter(Xp)
      .filter((f) => f.rel === "stylesheet" || f.rel === "preload")
      .map((f) =>
        f.rel === "stylesheet"
          ? { ...f, rel: "prefetch", as: "style" }
          : { ...f, rel: "prefetch" }
      )
  );
}
function yc(i, s, a, p, f, m) {
  let x = (S, k) => (a[k] ? S.route.id !== a[k].route.id : !0),
    E = (S, k) => {
      var I;
      return (
        a[k].pathname !== S.pathname ||
        (((I = a[k].route.path) == null ? void 0 : I.endsWith("*")) &&
          a[k].params["*"] !== S.params["*"])
      );
    };
  return m === "assets"
    ? s.filter((S, k) => x(S, k) || E(S, k))
    : m === "data"
    ? s.filter((S, k) => {
        var D;
        let I = p.routes[S.route.id];
        if (!I || !I.hasLoader) return !1;
        if (x(S, k) || E(S, k)) return !0;
        if (S.route.shouldRevalidate) {
          let P = S.route.shouldRevalidate({
            currentUrl: new URL(f.pathname + f.search + f.hash, window.origin),
            currentParams: ((D = a[0]) == null ? void 0 : D.params) || {},
            nextUrl: new URL(i, window.origin),
            nextParams: S.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof P == "boolean") return P;
        }
        return !0;
      })
    : [];
}
function Jp(i, s) {
  return Zp(
    i
      .map((a) => {
        let p = s.routes[a.route.id];
        if (!p) return [];
        let f = [p.module];
        return p.imports && (f = f.concat(p.imports)), f;
      })
      .flat(1)
  );
}
function Zp(i) {
  return [...new Set(i)];
}
function qp(i) {
  let s = {},
    a = Object.keys(i).sort();
  for (let p of a) s[p] = i[p];
  return s;
}
function bp(i, s) {
  let a = new Set();
  return (
    new Set(s),
    i.reduce((p, f) => {
      let m = JSON.stringify(qp(f));
      return a.has(m) || (a.add(m), p.push({ key: m, link: f })), p;
    }, [])
  );
}
function eh(i) {
  let s =
    typeof i == "string"
      ? new URL(
          i,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : i;
  return (
    s.pathname === "/"
      ? (s.pathname = "_root.data")
      : (s.pathname = `${s.pathname.replace(/\/$/, "")}.data`),
    s
  );
}
function th() {
  let i = C.useContext(Bn);
  return (
    uu(
      i,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    i
  );
}
function nh() {
  let i = C.useContext(Gl);
  return (
    uu(
      i,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    i
  );
}
var au = C.createContext(void 0);
au.displayName = "FrameworkContext";
function Tc() {
  let i = C.useContext(au);
  return (
    uu(i, "You must render this element inside a <HydratedRouter> element"), i
  );
}
function rh(i, s) {
  let a = C.useContext(au),
    [p, f] = C.useState(!1),
    [m, x] = C.useState(!1),
    {
      onFocus: E,
      onBlur: S,
      onMouseEnter: k,
      onMouseLeave: I,
      onTouchStart: D,
    } = s,
    P = C.useRef(null);
  C.useEffect(() => {
    if ((i === "render" && x(!0), i === "viewport")) {
      let j = (F) => {
          F.forEach((A) => {
            x(A.isIntersecting);
          });
        },
        O = new IntersectionObserver(j, { threshold: 0.5 });
      return (
        P.current && O.observe(P.current),
        () => {
          O.disconnect();
        }
      );
    }
  }, [i]),
    C.useEffect(() => {
      if (p) {
        let j = setTimeout(() => {
          x(!0);
        }, 100);
        return () => {
          clearTimeout(j);
        };
      }
    }, [p]);
  let $ = () => {
      f(!0);
    },
    z = () => {
      f(!1), x(!1);
    };
  return a
    ? i !== "intent"
      ? [m, P, {}]
      : [
          m,
          P,
          {
            onFocus: Lr(E, $),
            onBlur: Lr(S, z),
            onMouseEnter: Lr(k, $),
            onMouseLeave: Lr(I, z),
            onTouchStart: Lr(D, $),
          },
        ]
    : [!1, P, {}];
}
function Lr(i, s) {
  return (a) => {
    i && i(a), a.defaultPrevented || s(a);
  };
}
function lh({ page: i, ...s }) {
  let { router: a } = th(),
    p = C.useMemo(() => gc(a.routes, i, a.basename), [a.routes, i, a.basename]);
  return p
    ? C.createElement(ih, { page: i, matches: p, ...s })
    : (console.warn(`Tried to prefetch ${i} but no routes matched.`), null);
}
function oh(i) {
  let { manifest: s, routeModules: a } = Tc(),
    [p, f] = C.useState([]);
  return (
    C.useEffect(() => {
      let m = !1;
      return (
        Gp(i, s, a).then((x) => {
          m || f(x);
        }),
        () => {
          m = !0;
        }
      );
    }, [i, s, a]),
    p
  );
}
function ih({ page: i, matches: s, ...a }) {
  let p = hn(),
    { manifest: f, routeModules: m } = Tc(),
    { loaderData: x, matches: E } = nh(),
    S = C.useMemo(() => yc(i, s, E, f, p, "data"), [i, s, E, f, p]),
    k = C.useMemo(() => yc(i, s, E, f, p, "assets"), [i, s, E, f, p]),
    I = C.useMemo(() => {
      if (i === p.pathname + p.search + p.hash) return [];
      let $ = new Set(),
        z = !1;
      if (
        (s.forEach((O) => {
          var A;
          let F = f.routes[O.route.id];
          !F ||
            !F.hasLoader ||
            ((!S.some((Z) => Z.route.id === O.route.id) &&
              O.route.id in x &&
              (A = m[O.route.id]) != null &&
              A.shouldRevalidate) ||
            F.hasClientLoader
              ? (z = !0)
              : $.add(O.route.id));
        }),
        $.size === 0)
      )
        return [];
      let j = eh(i);
      return (
        z &&
          $.size > 0 &&
          j.searchParams.set(
            "_routes",
            s
              .filter((O) => $.has(O.route.id))
              .map((O) => O.route.id)
              .join(",")
          ),
        [j.pathname + j.search]
      );
    }, [x, p, f, S, s, i, m]),
    D = C.useMemo(() => Jp(k, f), [k, f]),
    P = oh(k);
  return C.createElement(
    C.Fragment,
    null,
    I.map(($) =>
      C.createElement("link", {
        key: $,
        rel: "prefetch",
        as: "fetch",
        href: $,
        ...a,
      })
    ),
    D.map(($) =>
      C.createElement("link", { key: $, rel: "modulepreload", href: $, ...a })
    ),
    P.map(({ key: $, link: z }) => C.createElement("link", { key: $, ...z }))
  );
}
function uh(...i) {
  return (s) => {
    i.forEach((a) => {
      typeof a == "function" ? a(s) : a != null && (a.current = s);
    });
  };
}
var zc =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  zc && (window.__reactRouterVersion = "7.0.2");
} catch {}
function ah({ basename: i, children: s, window: a }) {
  let p = C.useRef();
  p.current == null && (p.current = Gd({ window: a, v5Compat: !0 }));
  let f = p.current,
    [m, x] = C.useState({ action: f.action, location: f.location }),
    E = C.useCallback(
      (S) => {
        C.startTransition(() => x(S));
      },
      [x]
    );
  return (
    C.useLayoutEffect(() => f.listen(E), [f, E]),
    C.createElement(Mp, {
      basename: i,
      children: s,
      location: m.location,
      navigationType: m.action,
      navigator: f,
    })
  );
}
var Ic = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Oc = C.forwardRef(function (
    {
      onClick: s,
      discover: a = "render",
      prefetch: p = "none",
      relative: f,
      reloadDocument: m,
      replace: x,
      state: E,
      target: S,
      to: k,
      preventScrollReset: I,
      viewTransition: D,
      ...P
    },
    $
  ) {
    let { basename: z } = C.useContext(Et),
      j = typeof k == "string" && Ic.test(k),
      O,
      F = !1;
    if (typeof k == "string" && j && ((O = k), zc))
      try {
        let Se = new URL(window.location.href),
          Le = k.startsWith("//") ? new URL(Se.protocol + k) : new URL(k),
          ht = bt(Le.pathname, z);
        Le.origin === Se.origin && ht != null
          ? (k = ht + Le.search + Le.hash)
          : (F = !0);
      } catch {
        xt(
          !1,
          `<Link to="${k}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let A = kp(k, { relative: f }),
      [Z, te, ae] = rh(p, P),
      we = dh(k, {
        replace: x,
        state: E,
        target: S,
        preventScrollReset: I,
        relative: f,
        viewTransition: D,
      });
    function me(Se) {
      s && s(Se), Se.defaultPrevented || we(Se);
    }
    let Pe = C.createElement("a", {
      ...P,
      ...ae,
      href: O || A,
      onClick: F || m ? s : me,
      ref: uh($, te),
      target: S,
      "data-discover": !j && a === "render" ? "true" : void 0,
    });
    return Z && !j
      ? C.createElement(C.Fragment, null, Pe, C.createElement(lh, { page: A }))
      : Pe;
  });
Oc.displayName = "Link";
var sh = C.forwardRef(function (
  {
    "aria-current": s = "page",
    caseSensitive: a = !1,
    className: p = "",
    end: f = !1,
    style: m,
    to: x,
    viewTransition: E,
    children: S,
    ...k
  },
  I
) {
  let D = Or(x, { relative: k.relative }),
    P = hn(),
    $ = C.useContext(Gl),
    { navigator: z, basename: j } = C.useContext(Et),
    O = $ != null && yh(D) && E === !0,
    F = z.encodeLocation ? z.encodeLocation(D).pathname : D.pathname,
    A = P.pathname,
    Z =
      $ && $.navigation && $.navigation.location
        ? $.navigation.location.pathname
        : null;
  a ||
    ((A = A.toLowerCase()),
    (Z = Z ? Z.toLowerCase() : null),
    (F = F.toLowerCase())),
    Z && j && (Z = bt(Z, j) || Z);
  const te = F !== "/" && F.endsWith("/") ? F.length - 1 : F.length;
  let ae = A === F || (!f && A.startsWith(F) && A.charAt(te) === "/"),
    we =
      Z != null &&
      (Z === F || (!f && Z.startsWith(F) && Z.charAt(F.length) === "/")),
    me = { isActive: ae, isPending: we, isTransitioning: O },
    Pe = ae ? s : void 0,
    Se;
  typeof p == "function"
    ? (Se = p(me))
    : (Se = [
        p,
        ae ? "active" : null,
        we ? "pending" : null,
        O ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let Le = typeof m == "function" ? m(me) : m;
  return C.createElement(
    Oc,
    {
      ...k,
      "aria-current": Pe,
      className: Se,
      ref: I,
      style: Le,
      to: x,
      viewTransition: E,
    },
    typeof S == "function" ? S(me) : S
  );
});
sh.displayName = "NavLink";
var ch = C.forwardRef(
  (
    {
      discover: i = "render",
      fetcherKey: s,
      navigate: a,
      reloadDocument: p,
      replace: f,
      state: m,
      method: x = Kl,
      action: E,
      onSubmit: S,
      relative: k,
      preventScrollReset: I,
      viewTransition: D,
      ...P
    },
    $
  ) => {
    let z = mh(),
      j = vh(E, { relative: k }),
      O = x.toLowerCase() === "get" ? "get" : "post",
      F = typeof E == "string" && Ic.test(E),
      A = (Z) => {
        if ((S && S(Z), Z.defaultPrevented)) return;
        Z.preventDefault();
        let te = Z.nativeEvent.submitter,
          ae = (te == null ? void 0 : te.getAttribute("formmethod")) || x;
        z(te || Z.currentTarget, {
          fetcherKey: s,
          method: ae,
          navigate: a,
          replace: f,
          state: m,
          relative: k,
          preventScrollReset: I,
          viewTransition: D,
        });
      };
    return C.createElement("form", {
      ref: $,
      method: O,
      action: j,
      onSubmit: p ? S : A,
      ...P,
      "data-discover": !F && i === "render" ? "true" : void 0,
    });
  }
);
ch.displayName = "Form";
function fh(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Dc(i) {
  let s = C.useContext(Bn);
  return ge(s, fh(i)), s;
}
function dh(
  i,
  {
    target: s,
    replace: a,
    state: p,
    preventScrollReset: f,
    relative: m,
    viewTransition: x,
  } = {}
) {
  let E = xp(),
    S = hn(),
    k = Or(i, { relative: m });
  return C.useCallback(
    (I) => {
      if (Vp(I, s)) {
        I.preventDefault();
        let D = a !== void 0 ? a : Tr(S) === Tr(k);
        E(i, {
          replace: D,
          state: p,
          preventScrollReset: f,
          relative: m,
          viewTransition: x,
        });
      }
    },
    [S, E, k, a, p, s, i, f, m, x]
  );
}
var ph = 0,
  hh = () => `__${String(++ph)}__`;
function mh() {
  let { router: i } = Dc("useSubmit"),
    { basename: s } = C.useContext(Et),
    a = Op();
  return C.useCallback(
    async (p, f = {}) => {
      let { action: m, method: x, encType: E, formData: S, body: k } = Kp(p, s);
      if (f.navigate === !1) {
        let I = f.fetcherKey || hh();
        await i.fetch(I, a, f.action || m, {
          preventScrollReset: f.preventScrollReset,
          formData: S,
          body: k,
          formMethod: f.method || x,
          formEncType: f.encType || E,
          flushSync: f.flushSync,
        });
      } else
        await i.navigate(f.action || m, {
          preventScrollReset: f.preventScrollReset,
          formData: S,
          body: k,
          formMethod: f.method || x,
          formEncType: f.encType || E,
          replace: f.replace,
          state: f.state,
          fromRouteId: a,
          flushSync: f.flushSync,
          viewTransition: f.viewTransition,
        });
    },
    [i, s, a]
  );
}
function vh(i, { relative: s } = {}) {
  let { basename: a } = C.useContext(Et),
    p = C.useContext(Ot);
  ge(p, "useFormAction must be used inside a RouteContext");
  let [f] = p.matches.slice(-1),
    m = { ...Or(i || ".", { relative: s }) },
    x = hn();
  if (i == null) {
    m.search = x.search;
    let E = new URLSearchParams(m.search),
      S = E.getAll("index");
    if (S.some((I) => I === "")) {
      E.delete("index"),
        S.filter((D) => D).forEach((D) => E.append("index", D));
      let I = E.toString();
      m.search = I ? `?${I}` : "";
    }
  }
  return (
    (!i || i === ".") &&
      f.route.index &&
      (m.search = m.search ? m.search.replace(/^\?/, "?index&") : "?index"),
    a !== "/" && (m.pathname = m.pathname === "/" ? a : It([a, m.pathname])),
    Tr(m)
  );
}
function yh(i, s = {}) {
  let a = C.useContext(Cc);
  ge(
    a != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: p } = Dc("useViewTransitionState"),
    f = Or(i, { relative: s.relative });
  if (!a.isTransitioning) return !1;
  let m = bt(a.currentLocation.pathname, p) || a.currentLocation.pathname,
    x = bt(a.nextLocation.pathname, p) || a.nextLocation.pathname;
  return Xl(f.pathname, x) != null || Xl(f.pathname, m) != null;
}
new TextEncoder();
function gh() {
  const [i, s] = C.useState(() => {
      const f = localStorage.getItem("arabic-app-theme");
      if (f)
        try {
          return JSON.parse(f);
        } catch {
          return Ji[1];
        }
      return Ji[1];
    }),
    [a, p] = C.useState(() => {
      const f = localStorage.getItem("arabic-app-color");
      if (f)
        try {
          return JSON.parse(f);
        } catch {
          return i.combinations[0];
        }
      return i.combinations[0];
    });
  return (
    C.useEffect(() => {
      localStorage.setItem("arabic-app-theme", JSON.stringify(i));
    }, [i]),
    C.useEffect(() => {
      localStorage.setItem("arabic-app-color", JSON.stringify(a));
    }, [a]),
    console.log(Zi[Zi.findIndex((f) => f.name == "Kasrah")].unicode.slice(2)),
    K.jsxs(K.Fragment, {
      children: [
        K.jsxs("div", {
          className: "flex",
          children: [
            K.jsx(Yd, {
              selectedColor: a,
              selectedTheme: i,
              setSelectedTheme: s,
              setSelectedColor: p,
              alphabetColorCombinations: Ji,
            }),
            K.jsx(ah, {
              basename: "/react-gh-pages",
              children: K.jsx("div", {
                className: "flex-1 p-8",
                children: K.jsx($p, {
                  children: Zi.map((f, m) =>
                    K.jsx(
                      Lc,
                      {
                        path: `/${f.name.toLowerCase()}`,
                        element: K.jsx(Wd, {
                          selectedColor: a,
                          arabicDiacritics: f.unicode.slice(2),
                        }),
                      },
                      m
                    )
                  ),
                }),
              }),
            }),
          ],
        }),
        " ",
      ],
    })
  );
}
Ad.createRoot(document.getElementById("root")).render(
  K.jsx(C.StrictMode, { children: K.jsx(gh, {}) })
);
