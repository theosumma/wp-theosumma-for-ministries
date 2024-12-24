function HC(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var Uy = { exports: {} }, kv = {}, zy = { exports: {} }, Qt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lC;
function eL() {
  if (lC) return Qt;
  lC = 1;
  var c = Symbol.for("react.element"), f = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), w = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), M = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), J = Symbol.iterator;
  function Z(A) {
    return A === null || typeof A != "object" ? null : (A = J && A[J] || A["@@iterator"], typeof A == "function" ? A : null);
  }
  var le = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, I = Object.assign, ae = {};
  function Pe(A, x, P) {
    this.props = A, this.context = x, this.refs = ae, this.updater = P || le;
  }
  Pe.prototype.isReactComponent = {}, Pe.prototype.setState = function(A, x) {
    if (typeof A != "object" && typeof A != "function" && A != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, A, x, "setState");
  }, Pe.prototype.forceUpdate = function(A) {
    this.updater.enqueueForceUpdate(this, A, "forceUpdate");
  };
  function wt() {
  }
  wt.prototype = Pe.prototype;
  function De(A, x, P) {
    this.props = A, this.context = x, this.refs = ae, this.updater = P || le;
  }
  var Te = De.prototype = new wt();
  Te.constructor = De, I(Te, Pe.prototype), Te.isPureReactComponent = !0;
  var ve = Array.isArray, Ke = Object.prototype.hasOwnProperty, Ce = { current: null }, qe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Re(A, x, P) {
    var Y, ce = {}, se = null, ke = null;
    if (x != null) for (Y in x.ref !== void 0 && (ke = x.ref), x.key !== void 0 && (se = "" + x.key), x) Ke.call(x, Y) && !qe.hasOwnProperty(Y) && (ce[Y] = x[Y]);
    var Ae = arguments.length - 2;
    if (Ae === 1) ce.children = P;
    else if (1 < Ae) {
      for (var Ne = Array(Ae), vt = 0; vt < Ae; vt++) Ne[vt] = arguments[vt + 2];
      ce.children = Ne;
    }
    if (A && A.defaultProps) for (Y in Ae = A.defaultProps, Ae) ce[Y] === void 0 && (ce[Y] = Ae[Y]);
    return { $$typeof: c, type: A, key: se, ref: ke, props: ce, _owner: Ce.current };
  }
  function nt(A, x) {
    return { $$typeof: c, type: A.type, key: x, ref: A.ref, props: A.props, _owner: A._owner };
  }
  function Be(A) {
    return typeof A == "object" && A !== null && A.$$typeof === c;
  }
  function rt(A) {
    var x = { "=": "=0", ":": "=2" };
    return "$" + A.replace(/[=:]/g, function(P) {
      return x[P];
    });
  }
  var _t = /\/+/g;
  function pt(A, x) {
    return typeof A == "object" && A !== null && A.key != null ? rt("" + A.key) : x.toString(36);
  }
  function Ie(A, x, P, Y, ce) {
    var se = typeof A;
    (se === "undefined" || se === "boolean") && (A = null);
    var ke = !1;
    if (A === null) ke = !0;
    else switch (se) {
      case "string":
      case "number":
        ke = !0;
        break;
      case "object":
        switch (A.$$typeof) {
          case c:
          case f:
            ke = !0;
        }
    }
    if (ke) return ke = A, ce = ce(ke), A = Y === "" ? "." + pt(ke, 0) : Y, ve(ce) ? (P = "", A != null && (P = A.replace(_t, "$&/") + "/"), Ie(ce, x, P, "", function(vt) {
      return vt;
    })) : ce != null && (Be(ce) && (ce = nt(ce, P + (!ce.key || ke && ke.key === ce.key ? "" : ("" + ce.key).replace(_t, "$&/") + "/") + A)), x.push(ce)), 1;
    if (ke = 0, Y = Y === "" ? "." : Y + ":", ve(A)) for (var Ae = 0; Ae < A.length; Ae++) {
      se = A[Ae];
      var Ne = Y + pt(se, Ae);
      ke += Ie(se, x, P, Ne, ce);
    }
    else if (Ne = Z(A), typeof Ne == "function") for (A = Ne.call(A), Ae = 0; !(se = A.next()).done; ) se = se.value, Ne = Y + pt(se, Ae++), ke += Ie(se, x, P, Ne, ce);
    else if (se === "object") throw x = String(A), Error("Objects are not valid as a React child (found: " + (x === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : x) + "). If you meant to render a collection of children, use an array instead.");
    return ke;
  }
  function ct(A, x, P) {
    if (A == null) return A;
    var Y = [], ce = 0;
    return Ie(A, Y, "", "", function(se) {
      return x.call(P, se, ce++);
    }), Y;
  }
  function St(A) {
    if (A._status === -1) {
      var x = A._result;
      x = x(), x.then(function(P) {
        (A._status === 0 || A._status === -1) && (A._status = 1, A._result = P);
      }, function(P) {
        (A._status === 0 || A._status === -1) && (A._status = 2, A._result = P);
      }), A._status === -1 && (A._status = 0, A._result = x);
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var ft = { current: null }, ie = { transition: null }, ze = { ReactCurrentDispatcher: ft, ReactCurrentBatchConfig: ie, ReactCurrentOwner: Ce };
  function fe() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Qt.Children = { map: ct, forEach: function(A, x, P) {
    ct(A, function() {
      x.apply(this, arguments);
    }, P);
  }, count: function(A) {
    var x = 0;
    return ct(A, function() {
      x++;
    }), x;
  }, toArray: function(A) {
    return ct(A, function(x) {
      return x;
    }) || [];
  }, only: function(A) {
    if (!Be(A)) throw Error("React.Children.only expected to receive a single React element child.");
    return A;
  } }, Qt.Component = Pe, Qt.Fragment = d, Qt.Profiler = g, Qt.PureComponent = De, Qt.StrictMode = m, Qt.Suspense = U, Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ze, Qt.act = fe, Qt.cloneElement = function(A, x, P) {
    if (A == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + A + ".");
    var Y = I({}, A.props), ce = A.key, se = A.ref, ke = A._owner;
    if (x != null) {
      if (x.ref !== void 0 && (se = x.ref, ke = Ce.current), x.key !== void 0 && (ce = "" + x.key), A.type && A.type.defaultProps) var Ae = A.type.defaultProps;
      for (Ne in x) Ke.call(x, Ne) && !qe.hasOwnProperty(Ne) && (Y[Ne] = x[Ne] === void 0 && Ae !== void 0 ? Ae[Ne] : x[Ne]);
    }
    var Ne = arguments.length - 2;
    if (Ne === 1) Y.children = P;
    else if (1 < Ne) {
      Ae = Array(Ne);
      for (var vt = 0; vt < Ne; vt++) Ae[vt] = arguments[vt + 2];
      Y.children = Ae;
    }
    return { $$typeof: c, type: A.type, key: ce, ref: se, props: Y, _owner: ke };
  }, Qt.createContext = function(A) {
    return A = { $$typeof: w, _currentValue: A, _currentValue2: A, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, A.Provider = { $$typeof: T, _context: A }, A.Consumer = A;
  }, Qt.createElement = Re, Qt.createFactory = function(A) {
    var x = Re.bind(null, A);
    return x.type = A, x;
  }, Qt.createRef = function() {
    return { current: null };
  }, Qt.forwardRef = function(A) {
    return { $$typeof: S, render: A };
  }, Qt.isValidElement = Be, Qt.lazy = function(A) {
    return { $$typeof: $, _payload: { _status: -1, _result: A }, _init: St };
  }, Qt.memo = function(A, x) {
    return { $$typeof: M, type: A, compare: x === void 0 ? null : x };
  }, Qt.startTransition = function(A) {
    var x = ie.transition;
    ie.transition = {};
    try {
      A();
    } finally {
      ie.transition = x;
    }
  }, Qt.unstable_act = fe, Qt.useCallback = function(A, x) {
    return ft.current.useCallback(A, x);
  }, Qt.useContext = function(A) {
    return ft.current.useContext(A);
  }, Qt.useDebugValue = function() {
  }, Qt.useDeferredValue = function(A) {
    return ft.current.useDeferredValue(A);
  }, Qt.useEffect = function(A, x) {
    return ft.current.useEffect(A, x);
  }, Qt.useId = function() {
    return ft.current.useId();
  }, Qt.useImperativeHandle = function(A, x, P) {
    return ft.current.useImperativeHandle(A, x, P);
  }, Qt.useInsertionEffect = function(A, x) {
    return ft.current.useInsertionEffect(A, x);
  }, Qt.useLayoutEffect = function(A, x) {
    return ft.current.useLayoutEffect(A, x);
  }, Qt.useMemo = function(A, x) {
    return ft.current.useMemo(A, x);
  }, Qt.useReducer = function(A, x, P) {
    return ft.current.useReducer(A, x, P);
  }, Qt.useRef = function(A) {
    return ft.current.useRef(A);
  }, Qt.useState = function(A) {
    return ft.current.useState(A);
  }, Qt.useSyncExternalStore = function(A, x, P) {
    return ft.current.useSyncExternalStore(A, x, P);
  }, Qt.useTransition = function() {
    return ft.current.useTransition();
  }, Qt.version = "18.3.1", Qt;
}
var Vv = { exports: {} };
Vv.exports;
var uC;
function tL() {
  return uC || (uC = 1, function(c, f) {
    var d = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    d.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var m = "18.3.1", g = Symbol.for("react.element"), T = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), M = Symbol.for("react.provider"), $ = Symbol.for("react.context"), J = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), le = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), ae = Symbol.for("react.lazy"), Pe = Symbol.for("react.offscreen"), wt = Symbol.iterator, De = "@@iterator";
      function Te(R) {
        if (R === null || typeof R != "object")
          return null;
        var D = wt && R[wt] || R[De];
        return typeof D == "function" ? D : null;
      }
      var ve = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ke = {
        transition: null
      }, Ce = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, qe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Re = {}, nt = null;
      function Be(R) {
        nt = R;
      }
      Re.setExtraStackFrame = function(R) {
        nt = R;
      }, Re.getCurrentStack = null, Re.getStackAddendum = function() {
        var R = "";
        nt && (R += nt);
        var D = Re.getCurrentStack;
        return D && (R += D() || ""), R;
      };
      var rt = !1, _t = !1, pt = !1, Ie = !1, ct = !1, St = {
        ReactCurrentDispatcher: ve,
        ReactCurrentBatchConfig: Ke,
        ReactCurrentOwner: qe
      };
      St.ReactDebugCurrentFrame = Re, St.ReactCurrentActQueue = Ce;
      function ft(R) {
        {
          for (var D = arguments.length, Q = new Array(D > 1 ? D - 1 : 0), ee = 1; ee < D; ee++)
            Q[ee - 1] = arguments[ee];
          ze("warn", R, Q);
        }
      }
      function ie(R) {
        {
          for (var D = arguments.length, Q = new Array(D > 1 ? D - 1 : 0), ee = 1; ee < D; ee++)
            Q[ee - 1] = arguments[ee];
          ze("error", R, Q);
        }
      }
      function ze(R, D, Q) {
        {
          var ee = St.ReactDebugCurrentFrame, we = ee.getStackAddendum();
          we !== "" && (D += "%s", Q = Q.concat([we]));
          var et = Q.map(function(Ye) {
            return String(Ye);
          });
          et.unshift("Warning: " + D), Function.prototype.apply.call(console[R], console, et);
        }
      }
      var fe = {};
      function A(R, D) {
        {
          var Q = R.constructor, ee = Q && (Q.displayName || Q.name) || "ReactClass", we = ee + "." + D;
          if (fe[we])
            return;
          ie("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", D, ee), fe[we] = !0;
        }
      }
      var x = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(R) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(R, D, Q) {
          A(R, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(R, D, Q, ee) {
          A(R, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(R, D, Q, ee) {
          A(R, "setState");
        }
      }, P = Object.assign, Y = {};
      Object.freeze(Y);
      function ce(R, D, Q) {
        this.props = R, this.context = D, this.refs = Y, this.updater = Q || x;
      }
      ce.prototype.isReactComponent = {}, ce.prototype.setState = function(R, D) {
        if (typeof R != "object" && typeof R != "function" && R != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, R, D, "setState");
      }, ce.prototype.forceUpdate = function(R) {
        this.updater.enqueueForceUpdate(this, R, "forceUpdate");
      };
      {
        var se = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ke = function(R, D) {
          Object.defineProperty(ce.prototype, R, {
            get: function() {
              ft("%s(...) is deprecated in plain JavaScript React classes. %s", D[0], D[1]);
            }
          });
        };
        for (var Ae in se)
          se.hasOwnProperty(Ae) && ke(Ae, se[Ae]);
      }
      function Ne() {
      }
      Ne.prototype = ce.prototype;
      function vt(R, D, Q) {
        this.props = R, this.context = D, this.refs = Y, this.updater = Q || x;
      }
      var Bt = vt.prototype = new Ne();
      Bt.constructor = vt, P(Bt, ce.prototype), Bt.isPureReactComponent = !0;
      function Lt() {
        var R = {
          current: null
        };
        return Object.seal(R), R;
      }
      var Ft = Array.isArray;
      function Kt(R) {
        return Ft(R);
      }
      function wn(R) {
        {
          var D = typeof Symbol == "function" && Symbol.toStringTag, Q = D && R[Symbol.toStringTag] || R.constructor.name || "Object";
          return Q;
        }
      }
      function en(R) {
        try {
          return qt(R), !1;
        } catch {
          return !0;
        }
      }
      function qt(R) {
        return "" + R;
      }
      function zn(R) {
        if (en(R))
          return ie("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", wn(R)), qt(R);
      }
      function Er(R, D, Q) {
        var ee = R.displayName;
        if (ee)
          return ee;
        var we = D.displayName || D.name || "";
        return we !== "" ? Q + "(" + we + ")" : Q;
      }
      function Jn(R) {
        return R.displayName || "Context";
      }
      function Bn(R) {
        if (R == null)
          return null;
        if (typeof R.tag == "number" && ie("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
          return R.displayName || R.name || null;
        if (typeof R == "string")
          return R;
        switch (R) {
          case w:
            return "Fragment";
          case T:
            return "Portal";
          case U:
            return "Profiler";
          case S:
            return "StrictMode";
          case Z:
            return "Suspense";
          case le:
            return "SuspenseList";
        }
        if (typeof R == "object")
          switch (R.$$typeof) {
            case $:
              var D = R;
              return Jn(D) + ".Consumer";
            case M:
              var Q = R;
              return Jn(Q._context) + ".Provider";
            case J:
              return Er(R, R.render, "ForwardRef");
            case I:
              var ee = R.displayName || null;
              return ee !== null ? ee : Bn(R.type) || "Memo";
            case ae: {
              var we = R, et = we._payload, Ye = we._init;
              try {
                return Bn(Ye(et));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Ur = Object.prototype.hasOwnProperty, $r = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, er, Rr, sr;
      sr = {};
      function _r(R) {
        if (Ur.call(R, "ref")) {
          var D = Object.getOwnPropertyDescriptor(R, "ref").get;
          if (D && D.isReactWarning)
            return !1;
        }
        return R.ref !== void 0;
      }
      function _n(R) {
        if (Ur.call(R, "key")) {
          var D = Object.getOwnPropertyDescriptor(R, "key").get;
          if (D && D.isReactWarning)
            return !1;
        }
        return R.key !== void 0;
      }
      function Br(R, D) {
        var Q = function() {
          er || (er = !0, ie("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        Q.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: Q,
          configurable: !0
        });
      }
      function Ir(R, D) {
        var Q = function() {
          Rr || (Rr = !0, ie("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        Q.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: Q,
          configurable: !0
        });
      }
      function Hr(R) {
        if (typeof R.ref == "string" && qe.current && R.__self && qe.current.stateNode !== R.__self) {
          var D = Bn(qe.current.type);
          sr[D] || (ie('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D, R.ref), sr[D] = !0);
        }
      }
      var Le = function(R, D, Q, ee, we, et, Ye) {
        var Tt = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: g,
          // Built-in properties that belong on the element
          type: R,
          key: D,
          ref: Q,
          props: Ye,
          // Record the component responsible for creating this element.
          _owner: et
        };
        return Tt._store = {}, Object.defineProperty(Tt._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Tt, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ee
        }), Object.defineProperty(Tt, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: we
        }), Object.freeze && (Object.freeze(Tt.props), Object.freeze(Tt)), Tt;
      };
      function at(R, D, Q) {
        var ee, we = {}, et = null, Ye = null, Tt = null, jt = null;
        if (D != null) {
          _r(D) && (Ye = D.ref, Hr(D)), _n(D) && (zn(D.key), et = "" + D.key), Tt = D.__self === void 0 ? null : D.__self, jt = D.__source === void 0 ? null : D.__source;
          for (ee in D)
            Ur.call(D, ee) && !$r.hasOwnProperty(ee) && (we[ee] = D[ee]);
        }
        var fn = arguments.length - 2;
        if (fn === 1)
          we.children = Q;
        else if (fn > 1) {
          for (var pn = Array(fn), vn = 0; vn < fn; vn++)
            pn[vn] = arguments[vn + 2];
          Object.freeze && Object.freeze(pn), we.children = pn;
        }
        if (R && R.defaultProps) {
          var hn = R.defaultProps;
          for (ee in hn)
            we[ee] === void 0 && (we[ee] = hn[ee]);
        }
        if (et || Ye) {
          var Nn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          et && Br(we, Nn), Ye && Ir(we, Nn);
        }
        return Le(R, et, Ye, Tt, jt, qe.current, we);
      }
      function Ot(R, D) {
        var Q = Le(R.type, D, R.ref, R._self, R._source, R._owner, R.props);
        return Q;
      }
      function F(R, D, Q) {
        if (R == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + R + ".");
        var ee, we = P({}, R.props), et = R.key, Ye = R.ref, Tt = R._self, jt = R._source, fn = R._owner;
        if (D != null) {
          _r(D) && (Ye = D.ref, fn = qe.current), _n(D) && (zn(D.key), et = "" + D.key);
          var pn;
          R.type && R.type.defaultProps && (pn = R.type.defaultProps);
          for (ee in D)
            Ur.call(D, ee) && !$r.hasOwnProperty(ee) && (D[ee] === void 0 && pn !== void 0 ? we[ee] = pn[ee] : we[ee] = D[ee]);
        }
        var vn = arguments.length - 2;
        if (vn === 1)
          we.children = Q;
        else if (vn > 1) {
          for (var hn = Array(vn), Nn = 0; Nn < vn; Nn++)
            hn[Nn] = arguments[Nn + 2];
          we.children = hn;
        }
        return Le(R.type, et, Ye, Tt, jt, fn, we);
      }
      function O(R) {
        return typeof R == "object" && R !== null && R.$$typeof === g;
      }
      var ue = ".", ge = ":";
      function be(R) {
        var D = /[=:]/g, Q = {
          "=": "=0",
          ":": "=2"
        }, ee = R.replace(D, function(we) {
          return Q[we];
        });
        return "$" + ee;
      }
      var _e = !1, Xe = /\/+/g;
      function Oe(R) {
        return R.replace(Xe, "$&/");
      }
      function Ve(R, D) {
        return typeof R == "object" && R !== null && R.key != null ? (zn(R.key), be("" + R.key)) : D.toString(36);
      }
      function bt(R, D, Q, ee, we) {
        var et = typeof R;
        (et === "undefined" || et === "boolean") && (R = null);
        var Ye = !1;
        if (R === null)
          Ye = !0;
        else
          switch (et) {
            case "string":
            case "number":
              Ye = !0;
              break;
            case "object":
              switch (R.$$typeof) {
                case g:
                case T:
                  Ye = !0;
              }
          }
        if (Ye) {
          var Tt = R, jt = we(Tt), fn = ee === "" ? ue + Ve(Tt, 0) : ee;
          if (Kt(jt)) {
            var pn = "";
            fn != null && (pn = Oe(fn) + "/"), bt(jt, D, pn, "", function(Rd) {
              return Rd;
            });
          } else jt != null && (O(jt) && (jt.key && (!Tt || Tt.key !== jt.key) && zn(jt.key), jt = Ot(
            jt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            Q + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (jt.key && (!Tt || Tt.key !== jt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Oe("" + jt.key) + "/"
            ) : "") + fn
          )), D.push(jt));
          return 1;
        }
        var vn, hn, Nn = 0, tn = ee === "" ? ue : ee + ge;
        if (Kt(R))
          for (var Po = 0; Po < R.length; Po++)
            vn = R[Po], hn = tn + Ve(vn, Po), Nn += bt(vn, D, Q, hn, we);
        else {
          var yu = Te(R);
          if (typeof yu == "function") {
            var Cs = R;
            yu === Cs.entries && (_e || ft("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), _e = !0);
            for (var ws = yu.call(Cs), ao, xs = 0; !(ao = ws.next()).done; )
              vn = ao.value, hn = tn + Ve(vn, xs++), Nn += bt(vn, D, Q, hn, we);
          } else if (et === "object") {
            var Ns = String(R);
            throw new Error("Objects are not valid as a React child (found: " + (Ns === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : Ns) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Nn;
      }
      function It(R, D, Q) {
        if (R == null)
          return R;
        var ee = [], we = 0;
        return bt(R, ee, "", "", function(et) {
          return D.call(Q, et, we++);
        }), ee;
      }
      function Vn(R) {
        var D = 0;
        return It(R, function() {
          D++;
        }), D;
      }
      function bn(R, D, Q) {
        It(R, function() {
          D.apply(this, arguments);
        }, Q);
      }
      function tr(R) {
        return It(R, function(D) {
          return D;
        }) || [];
      }
      function nr(R) {
        if (!O(R))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return R;
      }
      function pr(R) {
        var D = {
          $$typeof: $,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: R,
          _currentValue2: R,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        D.Provider = {
          $$typeof: M,
          _context: D
        };
        var Q = !1, ee = !1, we = !1;
        {
          var et = {
            $$typeof: $,
            _context: D
          };
          Object.defineProperties(et, {
            Provider: {
              get: function() {
                return ee || (ee = !0, ie("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), D.Provider;
              },
              set: function(Ye) {
                D.Provider = Ye;
              }
            },
            _currentValue: {
              get: function() {
                return D._currentValue;
              },
              set: function(Ye) {
                D._currentValue = Ye;
              }
            },
            _currentValue2: {
              get: function() {
                return D._currentValue2;
              },
              set: function(Ye) {
                D._currentValue2 = Ye;
              }
            },
            _threadCount: {
              get: function() {
                return D._threadCount;
              },
              set: function(Ye) {
                D._threadCount = Ye;
              }
            },
            Consumer: {
              get: function() {
                return Q || (Q = !0, ie("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), D.Consumer;
              }
            },
            displayName: {
              get: function() {
                return D.displayName;
              },
              set: function(Ye) {
                we || (ft("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Ye), we = !0);
              }
            }
          }), D.Consumer = et;
        }
        return D._currentRenderer = null, D._currentRenderer2 = null, D;
      }
      var zr = -1, vr = 0, Wr = 1, Yr = 2;
      function ca(R) {
        if (R._status === zr) {
          var D = R._result, Q = D();
          if (Q.then(function(et) {
            if (R._status === vr || R._status === zr) {
              var Ye = R;
              Ye._status = Wr, Ye._result = et;
            }
          }, function(et) {
            if (R._status === vr || R._status === zr) {
              var Ye = R;
              Ye._status = Yr, Ye._result = et;
            }
          }), R._status === zr) {
            var ee = R;
            ee._status = vr, ee._result = Q;
          }
        }
        if (R._status === Wr) {
          var we = R._result;
          return we === void 0 && ie(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, we), "default" in we || ie(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, we), we.default;
        } else
          throw R._result;
      }
      function Na(R) {
        var D = {
          // We use these fields to store the result.
          _status: zr,
          _result: R
        }, Q = {
          $$typeof: ae,
          _payload: D,
          _init: ca
        };
        {
          var ee, we;
          Object.defineProperties(Q, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return ee;
              },
              set: function(et) {
                ie("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ee = et, Object.defineProperty(Q, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return we;
              },
              set: function(et) {
                ie("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), we = et, Object.defineProperty(Q, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return Q;
      }
      function Xi(R) {
        R != null && R.$$typeof === I ? ie("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof R != "function" ? ie("forwardRef requires a render function but was given %s.", R === null ? "null" : typeof R) : R.length !== 0 && R.length !== 2 && ie("forwardRef render functions accept exactly two parameters: props and ref. %s", R.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), R != null && (R.defaultProps != null || R.propTypes != null) && ie("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var D = {
          $$typeof: J,
          render: R
        };
        {
          var Q;
          Object.defineProperty(D, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return Q;
            },
            set: function(ee) {
              Q = ee, !R.name && !R.displayName && (R.displayName = ee);
            }
          });
        }
        return D;
      }
      var Oo;
      Oo = Symbol.for("react.module.reference");
      function k(R) {
        return !!(typeof R == "string" || typeof R == "function" || R === w || R === U || ct || R === S || R === Z || R === le || Ie || R === Pe || rt || _t || pt || typeof R == "object" && R !== null && (R.$$typeof === ae || R.$$typeof === I || R.$$typeof === M || R.$$typeof === $ || R.$$typeof === J || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        R.$$typeof === Oo || R.getModuleId !== void 0));
      }
      function he(R, D) {
        k(R) || ie("memo: The first argument must be a component. Instead received: %s", R === null ? "null" : typeof R);
        var Q = {
          $$typeof: I,
          type: R,
          compare: D === void 0 ? null : D
        };
        {
          var ee;
          Object.defineProperty(Q, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return ee;
            },
            set: function(we) {
              ee = we, !R.name && !R.displayName && (R.displayName = we);
            }
          });
        }
        return Q;
      }
      function ye() {
        var R = ve.current;
        return R === null && ie(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), R;
      }
      function ht(R) {
        var D = ye();
        if (R._context !== void 0) {
          var Q = R._context;
          Q.Consumer === R ? ie("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : Q.Provider === R && ie("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return D.useContext(R);
      }
      function $t(R) {
        var D = ye();
        return D.useState(R);
      }
      function Xt(R, D, Q) {
        var ee = ye();
        return ee.useReducer(R, D, Q);
      }
      function gt(R) {
        var D = ye();
        return D.useRef(R);
      }
      function Vt(R, D) {
        var Q = ye();
        return Q.useEffect(R, D);
      }
      function rr(R, D) {
        var Q = ye();
        return Q.useInsertionEffect(R, D);
      }
      function gn(R, D) {
        var Q = ye();
        return Q.useLayoutEffect(R, D);
      }
      function Mn(R, D) {
        var Q = ye();
        return Q.useCallback(R, D);
      }
      function Vr(R, D) {
        var Q = ye();
        return Q.useMemo(R, D);
      }
      function cn(R, D, Q) {
        var ee = ye();
        return ee.useImperativeHandle(R, D, Q);
      }
      function Ga(R, D) {
        {
          var Q = ye();
          return Q.useDebugValue(R, D);
        }
      }
      function ar() {
        var R = ye();
        return R.useTransition();
      }
      function fa(R) {
        var D = ye();
        return D.useDeferredValue(R);
      }
      function Mt() {
        var R = ye();
        return R.useId();
      }
      function Zi(R, D, Q) {
        var ee = ye();
        return ee.useSyncExternalStore(R, D, Q);
      }
      var Ji = 0, Mo, da, hs, Gr, ms, ys, gs;
      function Rl() {
      }
      Rl.__reactDisabledLog = !0;
      function cu() {
        {
          if (Ji === 0) {
            Mo = console.log, da = console.info, hs = console.warn, Gr = console.error, ms = console.group, ys = console.groupCollapsed, gs = console.groupEnd;
            var R = {
              configurable: !0,
              enumerable: !0,
              value: Rl,
              writable: !0
            };
            Object.defineProperties(console, {
              info: R,
              log: R,
              warn: R,
              error: R,
              group: R,
              groupCollapsed: R,
              groupEnd: R
            });
          }
          Ji++;
        }
      }
      function eo() {
        {
          if (Ji--, Ji === 0) {
            var R = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: P({}, R, {
                value: Mo
              }),
              info: P({}, R, {
                value: da
              }),
              warn: P({}, R, {
                value: hs
              }),
              error: P({}, R, {
                value: Gr
              }),
              group: P({}, R, {
                value: ms
              }),
              groupCollapsed: P({}, R, {
                value: ys
              }),
              groupEnd: P({}, R, {
                value: gs
              })
            });
          }
          Ji < 0 && ie("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Ni = St.ReactCurrentDispatcher, Qa;
      function Uo(R, D, Q) {
        {
          if (Qa === void 0)
            try {
              throw Error();
            } catch (we) {
              var ee = we.stack.trim().match(/\n( *(at )?)/);
              Qa = ee && ee[1] || "";
            }
          return `
` + Qa + R;
        }
      }
      var Di = !1, _l;
      {
        var bl = typeof WeakMap == "function" ? WeakMap : Map;
        _l = new bl();
      }
      function zo(R, D) {
        if (!R || Di)
          return "";
        {
          var Q = _l.get(R);
          if (Q !== void 0)
            return Q;
        }
        var ee;
        Di = !0;
        var we = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var et;
        et = Ni.current, Ni.current = null, cu();
        try {
          if (D) {
            var Ye = function() {
              throw Error();
            };
            if (Object.defineProperty(Ye.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Ye, []);
              } catch (tn) {
                ee = tn;
              }
              Reflect.construct(R, [], Ye);
            } else {
              try {
                Ye.call();
              } catch (tn) {
                ee = tn;
              }
              R.call(Ye.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (tn) {
              ee = tn;
            }
            R();
          }
        } catch (tn) {
          if (tn && ee && typeof tn.stack == "string") {
            for (var Tt = tn.stack.split(`
`), jt = ee.stack.split(`
`), fn = Tt.length - 1, pn = jt.length - 1; fn >= 1 && pn >= 0 && Tt[fn] !== jt[pn]; )
              pn--;
            for (; fn >= 1 && pn >= 0; fn--, pn--)
              if (Tt[fn] !== jt[pn]) {
                if (fn !== 1 || pn !== 1)
                  do
                    if (fn--, pn--, pn < 0 || Tt[fn] !== jt[pn]) {
                      var vn = `
` + Tt[fn].replace(" at new ", " at ");
                      return R.displayName && vn.includes("<anonymous>") && (vn = vn.replace("<anonymous>", R.displayName)), typeof R == "function" && _l.set(R, vn), vn;
                    }
                  while (fn >= 1 && pn >= 0);
                break;
              }
          }
        } finally {
          Di = !1, Ni.current = et, eo(), Error.prepareStackTrace = we;
        }
        var hn = R ? R.displayName || R.name : "", Nn = hn ? Uo(hn) : "";
        return typeof R == "function" && _l.set(R, Nn), Nn;
      }
      function Ss(R, D, Q) {
        return zo(R, !1);
      }
      function Es(R) {
        var D = R.prototype;
        return !!(D && D.isReactComponent);
      }
      function Yt(R, D, Q) {
        if (R == null)
          return "";
        if (typeof R == "function")
          return zo(R, Es(R));
        if (typeof R == "string")
          return Uo(R);
        switch (R) {
          case Z:
            return Uo("Suspense");
          case le:
            return Uo("SuspenseList");
        }
        if (typeof R == "object")
          switch (R.$$typeof) {
            case J:
              return Ss(R.render);
            case I:
              return Yt(R.type, D, Q);
            case ae: {
              var ee = R, we = ee._payload, et = ee._init;
              try {
                return Yt(et(we), D, Q);
              } catch {
              }
            }
          }
        return "";
      }
      var Rs = {}, fu = St.ReactDebugCurrentFrame;
      function Vo(R) {
        if (R) {
          var D = R._owner, Q = Yt(R.type, R._source, D ? D.type : null);
          fu.setExtraStackFrame(Q);
        } else
          fu.setExtraStackFrame(null);
      }
      function _s(R, D, Q, ee, we) {
        {
          var et = Function.call.bind(Ur);
          for (var Ye in R)
            if (et(R, Ye)) {
              var Tt = void 0;
              try {
                if (typeof R[Ye] != "function") {
                  var jt = Error((ee || "React class") + ": " + Q + " type `" + Ye + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[Ye] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw jt.name = "Invariant Violation", jt;
                }
                Tt = R[Ye](D, Ye, ee, Q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (fn) {
                Tt = fn;
              }
              Tt && !(Tt instanceof Error) && (Vo(we), ie("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ee || "React class", Q, Ye, typeof Tt), Vo(null)), Tt instanceof Error && !(Tt.message in Rs) && (Rs[Tt.message] = !0, Vo(we), ie("Failed %s type: %s", Q, Tt.message), Vo(null));
            }
        }
      }
      function Gt(R) {
        if (R) {
          var D = R._owner, Q = Yt(R.type, R._source, D ? D.type : null);
          Be(Q);
        } else
          Be(null);
      }
      var du;
      du = !1;
      function Tl() {
        if (qe.current) {
          var R = Bn(qe.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
      function xt(R) {
        if (R !== void 0) {
          var D = R.fileName.replace(/^.*[\\\/]/, ""), Q = R.lineNumber;
          return `

Check your code at ` + D + ":" + Q + ".";
        }
        return "";
      }
      function vi(R) {
        return R != null ? xt(R.__source) : "";
      }
      var jn = {};
      function pa(R) {
        var D = Tl();
        if (!D) {
          var Q = typeof R == "string" ? R : R.displayName || R.name;
          Q && (D = `

Check the top-level render call using <` + Q + ">.");
        }
        return D;
      }
      function Ka(R, D) {
        if (!(!R._store || R._store.validated || R.key != null)) {
          R._store.validated = !0;
          var Q = pa(D);
          if (!jn[Q]) {
            jn[Q] = !0;
            var ee = "";
            R && R._owner && R._owner !== qe.current && (ee = " It was passed a child from " + Bn(R._owner.type) + "."), Gt(R), ie('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Q, ee), Gt(null);
          }
        }
      }
      function jo(R, D) {
        if (typeof R == "object") {
          if (Kt(R))
            for (var Q = 0; Q < R.length; Q++) {
              var ee = R[Q];
              O(ee) && Ka(ee, D);
            }
          else if (O(R))
            R._store && (R._store.validated = !0);
          else if (R) {
            var we = Te(R);
            if (typeof we == "function" && we !== R.entries)
              for (var et = we.call(R), Ye; !(Ye = et.next()).done; )
                O(Ye.value) && Ka(Ye.value, D);
          }
        }
      }
      function xn(R) {
        {
          var D = R.type;
          if (D == null || typeof D == "string")
            return;
          var Q;
          if (typeof D == "function")
            Q = D.propTypes;
          else if (typeof D == "object" && (D.$$typeof === J || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          D.$$typeof === I))
            Q = D.propTypes;
          else
            return;
          if (Q) {
            var ee = Bn(D);
            _s(Q, R.props, "prop", ee, R);
          } else if (D.PropTypes !== void 0 && !du) {
            du = !0;
            var we = Bn(D);
            ie("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", we || "Unknown");
          }
          typeof D.getDefaultProps == "function" && !D.getDefaultProps.isReactClassApproved && ie("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Fn(R) {
        {
          for (var D = Object.keys(R.props), Q = 0; Q < D.length; Q++) {
            var ee = D[Q];
            if (ee !== "children" && ee !== "key") {
              Gt(R), ie("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ee), Gt(null);
              break;
            }
          }
          R.ref !== null && (Gt(R), ie("Invalid attribute `ref` supplied to `React.Fragment`."), Gt(null));
        }
      }
      function bs(R, D, Q) {
        var ee = k(R);
        if (!ee) {
          var we = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (we += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var et = vi(D);
          et ? we += et : we += Tl();
          var Ye;
          R === null ? Ye = "null" : Kt(R) ? Ye = "array" : R !== void 0 && R.$$typeof === g ? (Ye = "<" + (Bn(R.type) || "Unknown") + " />", we = " Did you accidentally export a JSX literal instead of a component?") : Ye = typeof R, ie("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ye, we);
        }
        var Tt = at.apply(this, arguments);
        if (Tt == null)
          return Tt;
        if (ee)
          for (var jt = 2; jt < arguments.length; jt++)
            jo(arguments[jt], R);
        return R === w ? Fn(Tt) : xn(Tt), Tt;
      }
      var br = !1;
      function va(R) {
        var D = bs.bind(null, R);
        return D.type = R, br || (br = !0, ft("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(D, "type", {
          enumerable: !1,
          get: function() {
            return ft("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: R
            }), R;
          }
        }), D;
      }
      function hi(R, D, Q) {
        for (var ee = F.apply(this, arguments), we = 2; we < arguments.length; we++)
          jo(arguments[we], ee.type);
        return xn(ee), ee;
      }
      function pu(R, D) {
        var Q = Ke.transition;
        Ke.transition = {};
        var ee = Ke.transition;
        Ke.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          R();
        } finally {
          if (Ke.transition = Q, Q === null && ee._updatedFibers) {
            var we = ee._updatedFibers.size;
            we > 10 && ft("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), ee._updatedFibers.clear();
          }
        }
      }
      var Cl = !1, wl = null;
      function Fo(R) {
        if (wl === null)
          try {
            var D = ("require" + Math.random()).slice(0, 7), Q = c && c[D];
            wl = Q.call(c, "timers").setImmediate;
          } catch {
            wl = function(we) {
              Cl === !1 && (Cl = !0, typeof MessageChannel > "u" && ie("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var et = new MessageChannel();
              et.port1.onmessage = we, et.port2.postMessage(void 0);
            };
          }
        return wl(R);
      }
      var qa = 0, to = !1;
      function xl(R) {
        {
          var D = qa;
          qa++, Ce.current === null && (Ce.current = []);
          var Q = Ce.isBatchingLegacy, ee;
          try {
            if (Ce.isBatchingLegacy = !0, ee = R(), !Q && Ce.didScheduleLegacyUpdate) {
              var we = Ce.current;
              we !== null && (Ce.didScheduleLegacyUpdate = !1, ro(we));
            }
          } catch (hn) {
            throw no(D), hn;
          } finally {
            Ce.isBatchingLegacy = Q;
          }
          if (ee !== null && typeof ee == "object" && typeof ee.then == "function") {
            var et = ee, Ye = !1, Tt = {
              then: function(hn, Nn) {
                Ye = !0, et.then(function(tn) {
                  no(D), qa === 0 ? vu(tn, hn, Nn) : hn(tn);
                }, function(tn) {
                  no(D), Nn(tn);
                });
              }
            };
            return !to && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Ye || (to = !0, ie("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Tt;
          } else {
            var jt = ee;
            if (no(D), qa === 0) {
              var fn = Ce.current;
              fn !== null && (ro(fn), Ce.current = null);
              var pn = {
                then: function(hn, Nn) {
                  Ce.current === null ? (Ce.current = [], vu(jt, hn, Nn)) : hn(jt);
                }
              };
              return pn;
            } else {
              var vn = {
                then: function(hn, Nn) {
                  hn(jt);
                }
              };
              return vn;
            }
          }
        }
      }
      function no(R) {
        R !== qa - 1 && ie("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), qa = R;
      }
      function vu(R, D, Q) {
        {
          var ee = Ce.current;
          if (ee !== null)
            try {
              ro(ee), Fo(function() {
                ee.length === 0 ? (Ce.current = null, D(R)) : vu(R, D, Q);
              });
            } catch (we) {
              Q(we);
            }
          else
            D(R);
        }
      }
      var ki = !1;
      function ro(R) {
        if (!ki) {
          ki = !0;
          var D = 0;
          try {
            for (; D < R.length; D++) {
              var Q = R[D];
              do
                Q = Q(!0);
              while (Q !== null);
            }
            R.length = 0;
          } catch (ee) {
            throw R = R.slice(D + 1), ee;
          } finally {
            ki = !1;
          }
        }
      }
      var hu = bs, Ts = hi, mi = va, mu = {
        map: It,
        forEach: bn,
        count: Vn,
        toArray: tr,
        only: nr
      };
      f.Children = mu, f.Component = ce, f.Fragment = w, f.Profiler = U, f.PureComponent = vt, f.StrictMode = S, f.Suspense = Z, f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = St, f.act = xl, f.cloneElement = Ts, f.createContext = pr, f.createElement = hu, f.createFactory = mi, f.createRef = Lt, f.forwardRef = Xi, f.isValidElement = O, f.lazy = Na, f.memo = he, f.startTransition = pu, f.unstable_act = xl, f.useCallback = Mn, f.useContext = ht, f.useDebugValue = Ga, f.useDeferredValue = fa, f.useEffect = Vt, f.useId = Mt, f.useImperativeHandle = cn, f.useInsertionEffect = rr, f.useLayoutEffect = gn, f.useMemo = Vr, f.useReducer = Xt, f.useRef = gt, f.useState = $t, f.useSyncExternalStore = Zi, f.useTransition = ar, f.version = m, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Vv, Vv.exports)), Vv.exports;
}
var sC;
function $v() {
  if (sC) return zy.exports;
  sC = 1;
  var c = {};
  return c.NODE_ENV === "production" ? zy.exports = eL() : zy.exports = tL(), zy.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cC;
function nL() {
  if (cC) return kv;
  cC = 1;
  var c = $v(), f = Symbol.for("react.element"), d = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, g = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function w(S, U, M) {
    var $, J = {}, Z = null, le = null;
    M !== void 0 && (Z = "" + M), U.key !== void 0 && (Z = "" + U.key), U.ref !== void 0 && (le = U.ref);
    for ($ in U) m.call(U, $) && !T.hasOwnProperty($) && (J[$] = U[$]);
    if (S && S.defaultProps) for ($ in U = S.defaultProps, U) J[$] === void 0 && (J[$] = U[$]);
    return { $$typeof: f, type: S, key: Z, ref: le, props: J, _owner: g.current };
  }
  return kv.Fragment = d, kv.jsx = w, kv.jsxs = w, kv;
}
var Av = {}, fC;
function rL() {
  if (fC) return Av;
  fC = 1;
  var c = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return c.NODE_ENV !== "production" && function() {
    var f = $v(), d = Symbol.for("react.element"), m = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), U = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), J = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), le = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), ae = Symbol.iterator, Pe = "@@iterator";
    function wt(k) {
      if (k === null || typeof k != "object")
        return null;
      var he = ae && k[ae] || k[Pe];
      return typeof he == "function" ? he : null;
    }
    var De = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Te(k) {
      {
        for (var he = arguments.length, ye = new Array(he > 1 ? he - 1 : 0), ht = 1; ht < he; ht++)
          ye[ht - 1] = arguments[ht];
        ve("error", k, ye);
      }
    }
    function ve(k, he, ye) {
      {
        var ht = De.ReactDebugCurrentFrame, $t = ht.getStackAddendum();
        $t !== "" && (he += "%s", ye = ye.concat([$t]));
        var Xt = ye.map(function(gt) {
          return String(gt);
        });
        Xt.unshift("Warning: " + he), Function.prototype.apply.call(console[k], console, Xt);
      }
    }
    var Ke = !1, Ce = !1, qe = !1, Re = !1, nt = !1, Be;
    Be = Symbol.for("react.module.reference");
    function rt(k) {
      return !!(typeof k == "string" || typeof k == "function" || k === g || k === w || nt || k === T || k === $ || k === J || Re || k === I || Ke || Ce || qe || typeof k == "object" && k !== null && (k.$$typeof === le || k.$$typeof === Z || k.$$typeof === S || k.$$typeof === U || k.$$typeof === M || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      k.$$typeof === Be || k.getModuleId !== void 0));
    }
    function _t(k, he, ye) {
      var ht = k.displayName;
      if (ht)
        return ht;
      var $t = he.displayName || he.name || "";
      return $t !== "" ? ye + "(" + $t + ")" : ye;
    }
    function pt(k) {
      return k.displayName || "Context";
    }
    function Ie(k) {
      if (k == null)
        return null;
      if (typeof k.tag == "number" && Te("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof k == "function")
        return k.displayName || k.name || null;
      if (typeof k == "string")
        return k;
      switch (k) {
        case g:
          return "Fragment";
        case m:
          return "Portal";
        case w:
          return "Profiler";
        case T:
          return "StrictMode";
        case $:
          return "Suspense";
        case J:
          return "SuspenseList";
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case U:
            var he = k;
            return pt(he) + ".Consumer";
          case S:
            var ye = k;
            return pt(ye._context) + ".Provider";
          case M:
            return _t(k, k.render, "ForwardRef");
          case Z:
            var ht = k.displayName || null;
            return ht !== null ? ht : Ie(k.type) || "Memo";
          case le: {
            var $t = k, Xt = $t._payload, gt = $t._init;
            try {
              return Ie(gt(Xt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ct = Object.assign, St = 0, ft, ie, ze, fe, A, x, P;
    function Y() {
    }
    Y.__reactDisabledLog = !0;
    function ce() {
      {
        if (St === 0) {
          ft = console.log, ie = console.info, ze = console.warn, fe = console.error, A = console.group, x = console.groupCollapsed, P = console.groupEnd;
          var k = {
            configurable: !0,
            enumerable: !0,
            value: Y,
            writable: !0
          };
          Object.defineProperties(console, {
            info: k,
            log: k,
            warn: k,
            error: k,
            group: k,
            groupCollapsed: k,
            groupEnd: k
          });
        }
        St++;
      }
    }
    function se() {
      {
        if (St--, St === 0) {
          var k = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ct({}, k, {
              value: ft
            }),
            info: ct({}, k, {
              value: ie
            }),
            warn: ct({}, k, {
              value: ze
            }),
            error: ct({}, k, {
              value: fe
            }),
            group: ct({}, k, {
              value: A
            }),
            groupCollapsed: ct({}, k, {
              value: x
            }),
            groupEnd: ct({}, k, {
              value: P
            })
          });
        }
        St < 0 && Te("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ke = De.ReactCurrentDispatcher, Ae;
    function Ne(k, he, ye) {
      {
        if (Ae === void 0)
          try {
            throw Error();
          } catch ($t) {
            var ht = $t.stack.trim().match(/\n( *(at )?)/);
            Ae = ht && ht[1] || "";
          }
        return `
` + Ae + k;
      }
    }
    var vt = !1, Bt;
    {
      var Lt = typeof WeakMap == "function" ? WeakMap : Map;
      Bt = new Lt();
    }
    function Ft(k, he) {
      if (!k || vt)
        return "";
      {
        var ye = Bt.get(k);
        if (ye !== void 0)
          return ye;
      }
      var ht;
      vt = !0;
      var $t = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Xt;
      Xt = ke.current, ke.current = null, ce();
      try {
        if (he) {
          var gt = function() {
            throw Error();
          };
          if (Object.defineProperty(gt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(gt, []);
            } catch (ar) {
              ht = ar;
            }
            Reflect.construct(k, [], gt);
          } else {
            try {
              gt.call();
            } catch (ar) {
              ht = ar;
            }
            k.call(gt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ar) {
            ht = ar;
          }
          k();
        }
      } catch (ar) {
        if (ar && ht && typeof ar.stack == "string") {
          for (var Vt = ar.stack.split(`
`), rr = ht.stack.split(`
`), gn = Vt.length - 1, Mn = rr.length - 1; gn >= 1 && Mn >= 0 && Vt[gn] !== rr[Mn]; )
            Mn--;
          for (; gn >= 1 && Mn >= 0; gn--, Mn--)
            if (Vt[gn] !== rr[Mn]) {
              if (gn !== 1 || Mn !== 1)
                do
                  if (gn--, Mn--, Mn < 0 || Vt[gn] !== rr[Mn]) {
                    var Vr = `
` + Vt[gn].replace(" at new ", " at ");
                    return k.displayName && Vr.includes("<anonymous>") && (Vr = Vr.replace("<anonymous>", k.displayName)), typeof k == "function" && Bt.set(k, Vr), Vr;
                  }
                while (gn >= 1 && Mn >= 0);
              break;
            }
        }
      } finally {
        vt = !1, ke.current = Xt, se(), Error.prepareStackTrace = $t;
      }
      var cn = k ? k.displayName || k.name : "", Ga = cn ? Ne(cn) : "";
      return typeof k == "function" && Bt.set(k, Ga), Ga;
    }
    function Kt(k, he, ye) {
      return Ft(k, !1);
    }
    function wn(k) {
      var he = k.prototype;
      return !!(he && he.isReactComponent);
    }
    function en(k, he, ye) {
      if (k == null)
        return "";
      if (typeof k == "function")
        return Ft(k, wn(k));
      if (typeof k == "string")
        return Ne(k);
      switch (k) {
        case $:
          return Ne("Suspense");
        case J:
          return Ne("SuspenseList");
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case M:
            return Kt(k.render);
          case Z:
            return en(k.type, he, ye);
          case le: {
            var ht = k, $t = ht._payload, Xt = ht._init;
            try {
              return en(Xt($t), he, ye);
            } catch {
            }
          }
        }
      return "";
    }
    var qt = Object.prototype.hasOwnProperty, zn = {}, Er = De.ReactDebugCurrentFrame;
    function Jn(k) {
      if (k) {
        var he = k._owner, ye = en(k.type, k._source, he ? he.type : null);
        Er.setExtraStackFrame(ye);
      } else
        Er.setExtraStackFrame(null);
    }
    function Bn(k, he, ye, ht, $t) {
      {
        var Xt = Function.call.bind(qt);
        for (var gt in k)
          if (Xt(k, gt)) {
            var Vt = void 0;
            try {
              if (typeof k[gt] != "function") {
                var rr = Error((ht || "React class") + ": " + ye + " type `" + gt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof k[gt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw rr.name = "Invariant Violation", rr;
              }
              Vt = k[gt](he, gt, ht, ye, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (gn) {
              Vt = gn;
            }
            Vt && !(Vt instanceof Error) && (Jn($t), Te("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ht || "React class", ye, gt, typeof Vt), Jn(null)), Vt instanceof Error && !(Vt.message in zn) && (zn[Vt.message] = !0, Jn($t), Te("Failed %s type: %s", ye, Vt.message), Jn(null));
          }
      }
    }
    var Ur = Array.isArray;
    function $r(k) {
      return Ur(k);
    }
    function er(k) {
      {
        var he = typeof Symbol == "function" && Symbol.toStringTag, ye = he && k[Symbol.toStringTag] || k.constructor.name || "Object";
        return ye;
      }
    }
    function Rr(k) {
      try {
        return sr(k), !1;
      } catch {
        return !0;
      }
    }
    function sr(k) {
      return "" + k;
    }
    function _r(k) {
      if (Rr(k))
        return Te("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(k)), sr(k);
    }
    var _n = De.ReactCurrentOwner, Br = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ir, Hr, Le;
    Le = {};
    function at(k) {
      if (qt.call(k, "ref")) {
        var he = Object.getOwnPropertyDescriptor(k, "ref").get;
        if (he && he.isReactWarning)
          return !1;
      }
      return k.ref !== void 0;
    }
    function Ot(k) {
      if (qt.call(k, "key")) {
        var he = Object.getOwnPropertyDescriptor(k, "key").get;
        if (he && he.isReactWarning)
          return !1;
      }
      return k.key !== void 0;
    }
    function F(k, he) {
      if (typeof k.ref == "string" && _n.current && he && _n.current.stateNode !== he) {
        var ye = Ie(_n.current.type);
        Le[ye] || (Te('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ie(_n.current.type), k.ref), Le[ye] = !0);
      }
    }
    function O(k, he) {
      {
        var ye = function() {
          Ir || (Ir = !0, Te("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", he));
        };
        ye.isReactWarning = !0, Object.defineProperty(k, "key", {
          get: ye,
          configurable: !0
        });
      }
    }
    function ue(k, he) {
      {
        var ye = function() {
          Hr || (Hr = !0, Te("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", he));
        };
        ye.isReactWarning = !0, Object.defineProperty(k, "ref", {
          get: ye,
          configurable: !0
        });
      }
    }
    var ge = function(k, he, ye, ht, $t, Xt, gt) {
      var Vt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: k,
        key: he,
        ref: ye,
        props: gt,
        // Record the component responsible for creating this element.
        _owner: Xt
      };
      return Vt._store = {}, Object.defineProperty(Vt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Vt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ht
      }), Object.defineProperty(Vt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $t
      }), Object.freeze && (Object.freeze(Vt.props), Object.freeze(Vt)), Vt;
    };
    function be(k, he, ye, ht, $t) {
      {
        var Xt, gt = {}, Vt = null, rr = null;
        ye !== void 0 && (_r(ye), Vt = "" + ye), Ot(he) && (_r(he.key), Vt = "" + he.key), at(he) && (rr = he.ref, F(he, $t));
        for (Xt in he)
          qt.call(he, Xt) && !Br.hasOwnProperty(Xt) && (gt[Xt] = he[Xt]);
        if (k && k.defaultProps) {
          var gn = k.defaultProps;
          for (Xt in gn)
            gt[Xt] === void 0 && (gt[Xt] = gn[Xt]);
        }
        if (Vt || rr) {
          var Mn = typeof k == "function" ? k.displayName || k.name || "Unknown" : k;
          Vt && O(gt, Mn), rr && ue(gt, Mn);
        }
        return ge(k, Vt, rr, $t, ht, _n.current, gt);
      }
    }
    var _e = De.ReactCurrentOwner, Xe = De.ReactDebugCurrentFrame;
    function Oe(k) {
      if (k) {
        var he = k._owner, ye = en(k.type, k._source, he ? he.type : null);
        Xe.setExtraStackFrame(ye);
      } else
        Xe.setExtraStackFrame(null);
    }
    var Ve;
    Ve = !1;
    function bt(k) {
      return typeof k == "object" && k !== null && k.$$typeof === d;
    }
    function It() {
      {
        if (_e.current) {
          var k = Ie(_e.current.type);
          if (k)
            return `

Check the render method of \`` + k + "`.";
        }
        return "";
      }
    }
    function Vn(k) {
      return "";
    }
    var bn = {};
    function tr(k) {
      {
        var he = It();
        if (!he) {
          var ye = typeof k == "string" ? k : k.displayName || k.name;
          ye && (he = `

Check the top-level render call using <` + ye + ">.");
        }
        return he;
      }
    }
    function nr(k, he) {
      {
        if (!k._store || k._store.validated || k.key != null)
          return;
        k._store.validated = !0;
        var ye = tr(he);
        if (bn[ye])
          return;
        bn[ye] = !0;
        var ht = "";
        k && k._owner && k._owner !== _e.current && (ht = " It was passed a child from " + Ie(k._owner.type) + "."), Oe(k), Te('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ye, ht), Oe(null);
      }
    }
    function pr(k, he) {
      {
        if (typeof k != "object")
          return;
        if ($r(k))
          for (var ye = 0; ye < k.length; ye++) {
            var ht = k[ye];
            bt(ht) && nr(ht, he);
          }
        else if (bt(k))
          k._store && (k._store.validated = !0);
        else if (k) {
          var $t = wt(k);
          if (typeof $t == "function" && $t !== k.entries)
            for (var Xt = $t.call(k), gt; !(gt = Xt.next()).done; )
              bt(gt.value) && nr(gt.value, he);
        }
      }
    }
    function zr(k) {
      {
        var he = k.type;
        if (he == null || typeof he == "string")
          return;
        var ye;
        if (typeof he == "function")
          ye = he.propTypes;
        else if (typeof he == "object" && (he.$$typeof === M || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        he.$$typeof === Z))
          ye = he.propTypes;
        else
          return;
        if (ye) {
          var ht = Ie(he);
          Bn(ye, k.props, "prop", ht, k);
        } else if (he.PropTypes !== void 0 && !Ve) {
          Ve = !0;
          var $t = Ie(he);
          Te("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", $t || "Unknown");
        }
        typeof he.getDefaultProps == "function" && !he.getDefaultProps.isReactClassApproved && Te("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vr(k) {
      {
        for (var he = Object.keys(k.props), ye = 0; ye < he.length; ye++) {
          var ht = he[ye];
          if (ht !== "children" && ht !== "key") {
            Oe(k), Te("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ht), Oe(null);
            break;
          }
        }
        k.ref !== null && (Oe(k), Te("Invalid attribute `ref` supplied to `React.Fragment`."), Oe(null));
      }
    }
    var Wr = {};
    function Yr(k, he, ye, ht, $t, Xt) {
      {
        var gt = rt(k);
        if (!gt) {
          var Vt = "";
          (k === void 0 || typeof k == "object" && k !== null && Object.keys(k).length === 0) && (Vt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var rr = Vn();
          rr ? Vt += rr : Vt += It();
          var gn;
          k === null ? gn = "null" : $r(k) ? gn = "array" : k !== void 0 && k.$$typeof === d ? (gn = "<" + (Ie(k.type) || "Unknown") + " />", Vt = " Did you accidentally export a JSX literal instead of a component?") : gn = typeof k, Te("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", gn, Vt);
        }
        var Mn = be(k, he, ye, $t, Xt);
        if (Mn == null)
          return Mn;
        if (gt) {
          var Vr = he.children;
          if (Vr !== void 0)
            if (ht)
              if ($r(Vr)) {
                for (var cn = 0; cn < Vr.length; cn++)
                  pr(Vr[cn], k);
                Object.freeze && Object.freeze(Vr);
              } else
                Te("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              pr(Vr, k);
        }
        if (qt.call(he, "key")) {
          var Ga = Ie(k), ar = Object.keys(he).filter(function(Zi) {
            return Zi !== "key";
          }), fa = ar.length > 0 ? "{key: someKey, " + ar.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Wr[Ga + fa]) {
            var Mt = ar.length > 0 ? "{" + ar.join(": ..., ") + ": ...}" : "{}";
            Te(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, fa, Ga, Mt, Ga), Wr[Ga + fa] = !0;
          }
        }
        return k === g ? vr(Mn) : zr(Mn), Mn;
      }
    }
    function ca(k, he, ye) {
      return Yr(k, he, ye, !0);
    }
    function Na(k, he, ye) {
      return Yr(k, he, ye, !1);
    }
    var Xi = Na, Oo = ca;
    Av.Fragment = g, Av.jsx = Xi, Av.jsxs = Oo;
  }(), Av;
}
var dC;
function aL() {
  if (dC) return Uy.exports;
  dC = 1;
  var c = {};
  return c.NODE_ENV === "production" ? Uy.exports = nL() : Uy.exports = rL(), Uy.exports;
}
var re = aL(), sn = $v();
const Kn = /* @__PURE__ */ HC(sn);
var dd = {}, Vy = { exports: {} }, ci = {}, jy = { exports: {} }, IE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pC;
function iL() {
  return pC || (pC = 1, function(c) {
    function f(ie, ze) {
      var fe = ie.length;
      ie.push(ze);
      e: for (; 0 < fe; ) {
        var A = fe - 1 >>> 1, x = ie[A];
        if (0 < g(x, ze)) ie[A] = ze, ie[fe] = x, fe = A;
        else break e;
      }
    }
    function d(ie) {
      return ie.length === 0 ? null : ie[0];
    }
    function m(ie) {
      if (ie.length === 0) return null;
      var ze = ie[0], fe = ie.pop();
      if (fe !== ze) {
        ie[0] = fe;
        e: for (var A = 0, x = ie.length, P = x >>> 1; A < P; ) {
          var Y = 2 * (A + 1) - 1, ce = ie[Y], se = Y + 1, ke = ie[se];
          if (0 > g(ce, fe)) se < x && 0 > g(ke, ce) ? (ie[A] = ke, ie[se] = fe, A = se) : (ie[A] = ce, ie[Y] = fe, A = Y);
          else if (se < x && 0 > g(ke, fe)) ie[A] = ke, ie[se] = fe, A = se;
          else break e;
        }
      }
      return ze;
    }
    function g(ie, ze) {
      var fe = ie.sortIndex - ze.sortIndex;
      return fe !== 0 ? fe : ie.id - ze.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var T = performance;
      c.unstable_now = function() {
        return T.now();
      };
    } else {
      var w = Date, S = w.now();
      c.unstable_now = function() {
        return w.now() - S;
      };
    }
    var U = [], M = [], $ = 1, J = null, Z = 3, le = !1, I = !1, ae = !1, Pe = typeof setTimeout == "function" ? setTimeout : null, wt = typeof clearTimeout == "function" ? clearTimeout : null, De = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Te(ie) {
      for (var ze = d(M); ze !== null; ) {
        if (ze.callback === null) m(M);
        else if (ze.startTime <= ie) m(M), ze.sortIndex = ze.expirationTime, f(U, ze);
        else break;
        ze = d(M);
      }
    }
    function ve(ie) {
      if (ae = !1, Te(ie), !I) if (d(U) !== null) I = !0, St(Ke);
      else {
        var ze = d(M);
        ze !== null && ft(ve, ze.startTime - ie);
      }
    }
    function Ke(ie, ze) {
      I = !1, ae && (ae = !1, wt(Re), Re = -1), le = !0;
      var fe = Z;
      try {
        for (Te(ze), J = d(U); J !== null && (!(J.expirationTime > ze) || ie && !rt()); ) {
          var A = J.callback;
          if (typeof A == "function") {
            J.callback = null, Z = J.priorityLevel;
            var x = A(J.expirationTime <= ze);
            ze = c.unstable_now(), typeof x == "function" ? J.callback = x : J === d(U) && m(U), Te(ze);
          } else m(U);
          J = d(U);
        }
        if (J !== null) var P = !0;
        else {
          var Y = d(M);
          Y !== null && ft(ve, Y.startTime - ze), P = !1;
        }
        return P;
      } finally {
        J = null, Z = fe, le = !1;
      }
    }
    var Ce = !1, qe = null, Re = -1, nt = 5, Be = -1;
    function rt() {
      return !(c.unstable_now() - Be < nt);
    }
    function _t() {
      if (qe !== null) {
        var ie = c.unstable_now();
        Be = ie;
        var ze = !0;
        try {
          ze = qe(!0, ie);
        } finally {
          ze ? pt() : (Ce = !1, qe = null);
        }
      } else Ce = !1;
    }
    var pt;
    if (typeof De == "function") pt = function() {
      De(_t);
    };
    else if (typeof MessageChannel < "u") {
      var Ie = new MessageChannel(), ct = Ie.port2;
      Ie.port1.onmessage = _t, pt = function() {
        ct.postMessage(null);
      };
    } else pt = function() {
      Pe(_t, 0);
    };
    function St(ie) {
      qe = ie, Ce || (Ce = !0, pt());
    }
    function ft(ie, ze) {
      Re = Pe(function() {
        ie(c.unstable_now());
      }, ze);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(ie) {
      ie.callback = null;
    }, c.unstable_continueExecution = function() {
      I || le || (I = !0, St(Ke));
    }, c.unstable_forceFrameRate = function(ie) {
      0 > ie || 125 < ie ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : nt = 0 < ie ? Math.floor(1e3 / ie) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return Z;
    }, c.unstable_getFirstCallbackNode = function() {
      return d(U);
    }, c.unstable_next = function(ie) {
      switch (Z) {
        case 1:
        case 2:
        case 3:
          var ze = 3;
          break;
        default:
          ze = Z;
      }
      var fe = Z;
      Z = ze;
      try {
        return ie();
      } finally {
        Z = fe;
      }
    }, c.unstable_pauseExecution = function() {
    }, c.unstable_requestPaint = function() {
    }, c.unstable_runWithPriority = function(ie, ze) {
      switch (ie) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ie = 3;
      }
      var fe = Z;
      Z = ie;
      try {
        return ze();
      } finally {
        Z = fe;
      }
    }, c.unstable_scheduleCallback = function(ie, ze, fe) {
      var A = c.unstable_now();
      switch (typeof fe == "object" && fe !== null ? (fe = fe.delay, fe = typeof fe == "number" && 0 < fe ? A + fe : A) : fe = A, ie) {
        case 1:
          var x = -1;
          break;
        case 2:
          x = 250;
          break;
        case 5:
          x = 1073741823;
          break;
        case 4:
          x = 1e4;
          break;
        default:
          x = 5e3;
      }
      return x = fe + x, ie = { id: $++, callback: ze, priorityLevel: ie, startTime: fe, expirationTime: x, sortIndex: -1 }, fe > A ? (ie.sortIndex = fe, f(M, ie), d(U) === null && ie === d(M) && (ae ? (wt(Re), Re = -1) : ae = !0, ft(ve, fe - A))) : (ie.sortIndex = x, f(U, ie), I || le || (I = !0, St(Ke))), ie;
    }, c.unstable_shouldYield = rt, c.unstable_wrapCallback = function(ie) {
      var ze = Z;
      return function() {
        var fe = Z;
        Z = ze;
        try {
          return ie.apply(this, arguments);
        } finally {
          Z = fe;
        }
      };
    };
  }(IE)), IE;
}
var HE = {}, vC;
function oL() {
  return vC || (vC = 1, function(c) {
    var f = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    f.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var d = !1, m = !1, g = 5;
      function T(Le, at) {
        var Ot = Le.length;
        Le.push(at), U(Le, at, Ot);
      }
      function w(Le) {
        return Le.length === 0 ? null : Le[0];
      }
      function S(Le) {
        if (Le.length === 0)
          return null;
        var at = Le[0], Ot = Le.pop();
        return Ot !== at && (Le[0] = Ot, M(Le, Ot, 0)), at;
      }
      function U(Le, at, Ot) {
        for (var F = Ot; F > 0; ) {
          var O = F - 1 >>> 1, ue = Le[O];
          if ($(ue, at) > 0)
            Le[O] = at, Le[F] = ue, F = O;
          else
            return;
        }
      }
      function M(Le, at, Ot) {
        for (var F = Ot, O = Le.length, ue = O >>> 1; F < ue; ) {
          var ge = (F + 1) * 2 - 1, be = Le[ge], _e = ge + 1, Xe = Le[_e];
          if ($(be, at) < 0)
            _e < O && $(Xe, be) < 0 ? (Le[F] = Xe, Le[_e] = at, F = _e) : (Le[F] = be, Le[ge] = at, F = ge);
          else if (_e < O && $(Xe, at) < 0)
            Le[F] = Xe, Le[_e] = at, F = _e;
          else
            return;
        }
      }
      function $(Le, at) {
        var Ot = Le.sortIndex - at.sortIndex;
        return Ot !== 0 ? Ot : Le.id - at.id;
      }
      var J = 1, Z = 2, le = 3, I = 4, ae = 5;
      function Pe(Le, at) {
      }
      var wt = typeof performance == "object" && typeof performance.now == "function";
      if (wt) {
        var De = performance;
        c.unstable_now = function() {
          return De.now();
        };
      } else {
        var Te = Date, ve = Te.now();
        c.unstable_now = function() {
          return Te.now() - ve;
        };
      }
      var Ke = 1073741823, Ce = -1, qe = 250, Re = 5e3, nt = 1e4, Be = Ke, rt = [], _t = [], pt = 1, Ie = null, ct = le, St = !1, ft = !1, ie = !1, ze = typeof setTimeout == "function" ? setTimeout : null, fe = typeof clearTimeout == "function" ? clearTimeout : null, A = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function x(Le) {
        for (var at = w(_t); at !== null; ) {
          if (at.callback === null)
            S(_t);
          else if (at.startTime <= Le)
            S(_t), at.sortIndex = at.expirationTime, T(rt, at);
          else
            return;
          at = w(_t);
        }
      }
      function P(Le) {
        if (ie = !1, x(Le), !ft)
          if (w(rt) !== null)
            ft = !0, _r(Y);
          else {
            var at = w(_t);
            at !== null && _n(P, at.startTime - Le);
          }
      }
      function Y(Le, at) {
        ft = !1, ie && (ie = !1, Br()), St = !0;
        var Ot = ct;
        try {
          var F;
          if (!m) return ce(Le, at);
        } finally {
          Ie = null, ct = Ot, St = !1;
        }
      }
      function ce(Le, at) {
        var Ot = at;
        for (x(Ot), Ie = w(rt); Ie !== null && !d && !(Ie.expirationTime > Ot && (!Le || Jn())); ) {
          var F = Ie.callback;
          if (typeof F == "function") {
            Ie.callback = null, ct = Ie.priorityLevel;
            var O = Ie.expirationTime <= Ot, ue = F(O);
            Ot = c.unstable_now(), typeof ue == "function" ? Ie.callback = ue : Ie === w(rt) && S(rt), x(Ot);
          } else
            S(rt);
          Ie = w(rt);
        }
        if (Ie !== null)
          return !0;
        var ge = w(_t);
        return ge !== null && _n(P, ge.startTime - Ot), !1;
      }
      function se(Le, at) {
        switch (Le) {
          case J:
          case Z:
          case le:
          case I:
          case ae:
            break;
          default:
            Le = le;
        }
        var Ot = ct;
        ct = Le;
        try {
          return at();
        } finally {
          ct = Ot;
        }
      }
      function ke(Le) {
        var at;
        switch (ct) {
          case J:
          case Z:
          case le:
            at = le;
            break;
          default:
            at = ct;
            break;
        }
        var Ot = ct;
        ct = at;
        try {
          return Le();
        } finally {
          ct = Ot;
        }
      }
      function Ae(Le) {
        var at = ct;
        return function() {
          var Ot = ct;
          ct = at;
          try {
            return Le.apply(this, arguments);
          } finally {
            ct = Ot;
          }
        };
      }
      function Ne(Le, at, Ot) {
        var F = c.unstable_now(), O;
        if (typeof Ot == "object" && Ot !== null) {
          var ue = Ot.delay;
          typeof ue == "number" && ue > 0 ? O = F + ue : O = F;
        } else
          O = F;
        var ge;
        switch (Le) {
          case J:
            ge = Ce;
            break;
          case Z:
            ge = qe;
            break;
          case ae:
            ge = Be;
            break;
          case I:
            ge = nt;
            break;
          case le:
          default:
            ge = Re;
            break;
        }
        var be = O + ge, _e = {
          id: pt++,
          callback: at,
          priorityLevel: Le,
          startTime: O,
          expirationTime: be,
          sortIndex: -1
        };
        return O > F ? (_e.sortIndex = O, T(_t, _e), w(rt) === null && _e === w(_t) && (ie ? Br() : ie = !0, _n(P, O - F))) : (_e.sortIndex = be, T(rt, _e), !ft && !St && (ft = !0, _r(Y))), _e;
      }
      function vt() {
      }
      function Bt() {
        !ft && !St && (ft = !0, _r(Y));
      }
      function Lt() {
        return w(rt);
      }
      function Ft(Le) {
        Le.callback = null;
      }
      function Kt() {
        return ct;
      }
      var wn = !1, en = null, qt = -1, zn = g, Er = -1;
      function Jn() {
        var Le = c.unstable_now() - Er;
        return !(Le < zn);
      }
      function Bn() {
      }
      function Ur(Le) {
        if (Le < 0 || Le > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Le > 0 ? zn = Math.floor(1e3 / Le) : zn = g;
      }
      var $r = function() {
        if (en !== null) {
          var Le = c.unstable_now();
          Er = Le;
          var at = !0, Ot = !0;
          try {
            Ot = en(at, Le);
          } finally {
            Ot ? er() : (wn = !1, en = null);
          }
        } else
          wn = !1;
      }, er;
      if (typeof A == "function")
        er = function() {
          A($r);
        };
      else if (typeof MessageChannel < "u") {
        var Rr = new MessageChannel(), sr = Rr.port2;
        Rr.port1.onmessage = $r, er = function() {
          sr.postMessage(null);
        };
      } else
        er = function() {
          ze($r, 0);
        };
      function _r(Le) {
        en = Le, wn || (wn = !0, er());
      }
      function _n(Le, at) {
        qt = ze(function() {
          Le(c.unstable_now());
        }, at);
      }
      function Br() {
        fe(qt), qt = -1;
      }
      var Ir = Bn, Hr = null;
      c.unstable_IdlePriority = ae, c.unstable_ImmediatePriority = J, c.unstable_LowPriority = I, c.unstable_NormalPriority = le, c.unstable_Profiling = Hr, c.unstable_UserBlockingPriority = Z, c.unstable_cancelCallback = Ft, c.unstable_continueExecution = Bt, c.unstable_forceFrameRate = Ur, c.unstable_getCurrentPriorityLevel = Kt, c.unstable_getFirstCallbackNode = Lt, c.unstable_next = ke, c.unstable_pauseExecution = vt, c.unstable_requestPaint = Ir, c.unstable_runWithPriority = se, c.unstable_scheduleCallback = Ne, c.unstable_shouldYield = Jn, c.unstable_wrapCallback = Ae, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(HE)), HE;
}
var hC;
function WC() {
  if (hC) return jy.exports;
  hC = 1;
  var c = {};
  return c.NODE_ENV === "production" ? jy.exports = iL() : jy.exports = oL(), jy.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mC;
function lL() {
  if (mC) return ci;
  mC = 1;
  var c = $v(), f = WC();
  function d(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++) r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var m = /* @__PURE__ */ new Set(), g = {};
  function T(n, r) {
    w(n, r), w(n + "Capture", r);
  }
  function w(n, r) {
    for (g[n] = r, n = 0; n < r.length; n++) m.add(r[n]);
  }
  var S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), U = Object.prototype.hasOwnProperty, M = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, $ = {}, J = {};
  function Z(n) {
    return U.call(J, n) ? !0 : U.call($, n) ? !1 : M.test(n) ? J[n] = !0 : ($[n] = !0, !1);
  }
  function le(n, r, o, u) {
    if (o !== null && o.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return u ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function I(n, r, o, u) {
    if (r === null || typeof r > "u" || le(n, r, o, u)) return !0;
    if (u) return !1;
    if (o !== null) switch (o.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function ae(n, r, o, u, p, h, _) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = p, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = h, this.removeEmptyString = _;
  }
  var Pe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Pe[n] = new ae(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Pe[r] = new ae(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Pe[n] = new ae(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Pe[n] = new ae(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Pe[n] = new ae(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Pe[n] = new ae(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Pe[n] = new ae(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Pe[n] = new ae(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Pe[n] = new ae(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var wt = /[\-:]([a-z])/g;
  function De(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      wt,
      De
    );
    Pe[r] = new ae(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(wt, De);
    Pe[r] = new ae(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(wt, De);
    Pe[r] = new ae(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Pe[n] = new ae(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Pe.xlinkHref = new ae("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Pe[n] = new ae(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Te(n, r, o, u) {
    var p = Pe.hasOwnProperty(r) ? Pe[r] : null;
    (p !== null ? p.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (I(r, o, p, u) && (o = null), u || p === null ? Z(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : p.mustUseProperty ? n[p.propertyName] = o === null ? p.type === 3 ? !1 : "" : o : (r = p.attributeName, u = p.attributeNamespace, o === null ? n.removeAttribute(r) : (p = p.type, o = p === 3 || p === 4 && o === !0 ? "" : "" + o, u ? n.setAttributeNS(u, r, o) : n.setAttribute(r, o))));
  }
  var ve = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ke = Symbol.for("react.element"), Ce = Symbol.for("react.portal"), qe = Symbol.for("react.fragment"), Re = Symbol.for("react.strict_mode"), nt = Symbol.for("react.profiler"), Be = Symbol.for("react.provider"), rt = Symbol.for("react.context"), _t = Symbol.for("react.forward_ref"), pt = Symbol.for("react.suspense"), Ie = Symbol.for("react.suspense_list"), ct = Symbol.for("react.memo"), St = Symbol.for("react.lazy"), ft = Symbol.for("react.offscreen"), ie = Symbol.iterator;
  function ze(n) {
    return n === null || typeof n != "object" ? null : (n = ie && n[ie] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var fe = Object.assign, A;
  function x(n) {
    if (A === void 0) try {
      throw Error();
    } catch (o) {
      var r = o.stack.trim().match(/\n( *(at )?)/);
      A = r && r[1] || "";
    }
    return `
` + A + n;
  }
  var P = !1;
  function Y(n, r) {
    if (!n || P) return "";
    P = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (q) {
          var u = q;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (q) {
          u = q;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (q) {
          u = q;
        }
        n();
      }
    } catch (q) {
      if (q && u && typeof q.stack == "string") {
        for (var p = q.stack.split(`
`), h = u.stack.split(`
`), _ = p.length - 1, N = h.length - 1; 1 <= _ && 0 <= N && p[_] !== h[N]; ) N--;
        for (; 1 <= _ && 0 <= N; _--, N--) if (p[_] !== h[N]) {
          if (_ !== 1 || N !== 1)
            do
              if (_--, N--, 0 > N || p[_] !== h[N]) {
                var L = `
` + p[_].replace(" at new ", " at ");
                return n.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", n.displayName)), L;
              }
            while (1 <= _ && 0 <= N);
          break;
        }
      }
    } finally {
      P = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? x(n) : "";
  }
  function ce(n) {
    switch (n.tag) {
      case 5:
        return x(n.type);
      case 16:
        return x("Lazy");
      case 13:
        return x("Suspense");
      case 19:
        return x("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Y(n.type, !1), n;
      case 11:
        return n = Y(n.type.render, !1), n;
      case 1:
        return n = Y(n.type, !0), n;
      default:
        return "";
    }
  }
  function se(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case qe:
        return "Fragment";
      case Ce:
        return "Portal";
      case nt:
        return "Profiler";
      case Re:
        return "StrictMode";
      case pt:
        return "Suspense";
      case Ie:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case rt:
        return (n.displayName || "Context") + ".Consumer";
      case Be:
        return (n._context.displayName || "Context") + ".Provider";
      case _t:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case ct:
        return r = n.displayName || null, r !== null ? r : se(n.type) || "Memo";
      case St:
        r = n._payload, n = n._init;
        try {
          return se(n(r));
        } catch {
        }
    }
    return null;
  }
  function ke(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return se(r);
      case 8:
        return r === Re ? "StrictMode" : "Mode";
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
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function Ae(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Ne(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function vt(n) {
    var r = Ne(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var p = o.get, h = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return p.call(this);
      }, set: function(_) {
        u = "" + _, h.call(this, _);
      } }), Object.defineProperty(n, r, { enumerable: o.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(_) {
        u = "" + _;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Bt(n) {
    n._valueTracker || (n._valueTracker = vt(n));
  }
  function Lt(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var o = r.getValue(), u = "";
    return n && (u = Ne(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== o ? (r.setValue(n), !0) : !1;
  }
  function Ft(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Kt(n, r) {
    var o = r.checked;
    return fe({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function wn(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    o = Ae(r.value != null ? r.value : o), n._wrapperState = { initialChecked: u, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function en(n, r) {
    r = r.checked, r != null && Te(n, "checked", r, !1);
  }
  function qt(n, r) {
    en(n, r);
    var o = Ae(r.value), u = r.type;
    if (o != null) u === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Er(n, r.type, o) : r.hasOwnProperty("defaultValue") && Er(n, r.type, Ae(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function zn(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, o || r === n.value || (n.value = r), n.defaultValue = r;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function Er(n, r, o) {
    (r !== "number" || Ft(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var Jn = Array.isArray;
  function Bn(n, r, o, u) {
    if (n = n.options, r) {
      r = {};
      for (var p = 0; p < o.length; p++) r["$" + o[p]] = !0;
      for (o = 0; o < n.length; o++) p = r.hasOwnProperty("$" + n[o].value), n[o].selected !== p && (n[o].selected = p), p && u && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + Ae(o), r = null, p = 0; p < n.length; p++) {
        if (n[p].value === o) {
          n[p].selected = !0, u && (n[p].defaultSelected = !0);
          return;
        }
        r !== null || n[p].disabled || (r = n[p]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Ur(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(d(91));
    return fe({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function $r(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null) throw Error(d(92));
        if (Jn(o)) {
          if (1 < o.length) throw Error(d(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: Ae(o) };
  }
  function er(n, r) {
    var o = Ae(r.value), u = Ae(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), u != null && (n.defaultValue = "" + u);
  }
  function Rr(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function sr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function _r(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? sr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var _n, Br = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, u, p) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, u, p);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (_n = _n || document.createElement("div"), _n.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = _n.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function Ir(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Hr = {
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
    strokeWidth: !0
  }, Le = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Hr).forEach(function(n) {
    Le.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Hr[r] = Hr[n];
    });
  });
  function at(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || Hr.hasOwnProperty(n) && Hr[n] ? ("" + r).trim() : r + "px";
  }
  function Ot(n, r) {
    n = n.style;
    for (var o in r) if (r.hasOwnProperty(o)) {
      var u = o.indexOf("--") === 0, p = at(o, r[o], u);
      o === "float" && (o = "cssFloat"), u ? n.setProperty(o, p) : n[o] = p;
    }
  }
  var F = fe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function O(n, r) {
    if (r) {
      if (F[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(d(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(d(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(d(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(d(62));
    }
  }
  function ue(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
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
  var ge = null;
  function be(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var _e = null, Xe = null, Oe = null;
  function Ve(n) {
    if (n = Li(n)) {
      if (typeof _e != "function") throw Error(d(280));
      var r = n.stateNode;
      r && (r = Zc(r), _e(n.stateNode, n.type, r));
    }
  }
  function bt(n) {
    Xe ? Oe ? Oe.push(n) : Oe = [n] : Xe = n;
  }
  function It() {
    if (Xe) {
      var n = Xe, r = Oe;
      if (Oe = Xe = null, Ve(n), r) for (n = 0; n < r.length; n++) Ve(r[n]);
    }
  }
  function Vn(n, r) {
    return n(r);
  }
  function bn() {
  }
  var tr = !1;
  function nr(n, r, o) {
    if (tr) return n(r, o);
    tr = !0;
    try {
      return Vn(n, r, o);
    } finally {
      tr = !1, (Xe !== null || Oe !== null) && (bn(), It());
    }
  }
  function pr(n, r) {
    var o = n.stateNode;
    if (o === null) return null;
    var u = Zc(o);
    if (u === null) return null;
    o = u[r];
    e: switch (r) {
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
        (u = !u.disabled) || (n = n.type, u = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !u;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (o && typeof o != "function") throw Error(d(231, r, typeof o));
    return o;
  }
  var zr = !1;
  if (S) try {
    var vr = {};
    Object.defineProperty(vr, "passive", { get: function() {
      zr = !0;
    } }), window.addEventListener("test", vr, vr), window.removeEventListener("test", vr, vr);
  } catch {
    zr = !1;
  }
  function Wr(n, r, o, u, p, h, _, N, L) {
    var q = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, q);
    } catch (me) {
      this.onError(me);
    }
  }
  var Yr = !1, ca = null, Na = !1, Xi = null, Oo = { onError: function(n) {
    Yr = !0, ca = n;
  } };
  function k(n, r, o, u, p, h, _, N, L) {
    Yr = !1, ca = null, Wr.apply(Oo, arguments);
  }
  function he(n, r, o, u, p, h, _, N, L) {
    if (k.apply(this, arguments), Yr) {
      if (Yr) {
        var q = ca;
        Yr = !1, ca = null;
      } else throw Error(d(198));
      Na || (Na = !0, Xi = q);
    }
  }
  function ye(n) {
    var r = n, o = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (o = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? o : null;
  }
  function ht(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function $t(n) {
    if (ye(n) !== n) throw Error(d(188));
  }
  function Xt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = ye(n), r === null) throw Error(d(188));
      return r !== n ? null : n;
    }
    for (var o = n, u = r; ; ) {
      var p = o.return;
      if (p === null) break;
      var h = p.alternate;
      if (h === null) {
        if (u = p.return, u !== null) {
          o = u;
          continue;
        }
        break;
      }
      if (p.child === h.child) {
        for (h = p.child; h; ) {
          if (h === o) return $t(p), n;
          if (h === u) return $t(p), r;
          h = h.sibling;
        }
        throw Error(d(188));
      }
      if (o.return !== u.return) o = p, u = h;
      else {
        for (var _ = !1, N = p.child; N; ) {
          if (N === o) {
            _ = !0, o = p, u = h;
            break;
          }
          if (N === u) {
            _ = !0, u = p, o = h;
            break;
          }
          N = N.sibling;
        }
        if (!_) {
          for (N = h.child; N; ) {
            if (N === o) {
              _ = !0, o = h, u = p;
              break;
            }
            if (N === u) {
              _ = !0, u = h, o = p;
              break;
            }
            N = N.sibling;
          }
          if (!_) throw Error(d(189));
        }
      }
      if (o.alternate !== u) throw Error(d(190));
    }
    if (o.tag !== 3) throw Error(d(188));
    return o.stateNode.current === o ? n : r;
  }
  function gt(n) {
    return n = Xt(n), n !== null ? Vt(n) : null;
  }
  function Vt(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = Vt(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var rr = f.unstable_scheduleCallback, gn = f.unstable_cancelCallback, Mn = f.unstable_shouldYield, Vr = f.unstable_requestPaint, cn = f.unstable_now, Ga = f.unstable_getCurrentPriorityLevel, ar = f.unstable_ImmediatePriority, fa = f.unstable_UserBlockingPriority, Mt = f.unstable_NormalPriority, Zi = f.unstable_LowPriority, Ji = f.unstable_IdlePriority, Mo = null, da = null;
  function hs(n) {
    if (da && typeof da.onCommitFiberRoot == "function") try {
      da.onCommitFiberRoot(Mo, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Gr = Math.clz32 ? Math.clz32 : gs, ms = Math.log, ys = Math.LN2;
  function gs(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (ms(n) / ys | 0) | 0;
  }
  var Rl = 64, cu = 4194304;
  function eo(n) {
    switch (n & -n) {
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
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Ni(n, r) {
    var o = n.pendingLanes;
    if (o === 0) return 0;
    var u = 0, p = n.suspendedLanes, h = n.pingedLanes, _ = o & 268435455;
    if (_ !== 0) {
      var N = _ & ~p;
      N !== 0 ? u = eo(N) : (h &= _, h !== 0 && (u = eo(h)));
    } else _ = o & ~p, _ !== 0 ? u = eo(_) : h !== 0 && (u = eo(h));
    if (u === 0) return 0;
    if (r !== 0 && r !== u && !(r & p) && (p = u & -u, h = r & -r, p >= h || p === 16 && (h & 4194240) !== 0)) return r;
    if (u & 4 && (u |= o & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= u; 0 < r; ) o = 31 - Gr(r), p = 1 << o, u |= n[o], r &= ~p;
    return u;
  }
  function Qa(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
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
        return r + 5e3;
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
  function Uo(n, r) {
    for (var o = n.suspendedLanes, u = n.pingedLanes, p = n.expirationTimes, h = n.pendingLanes; 0 < h; ) {
      var _ = 31 - Gr(h), N = 1 << _, L = p[_];
      L === -1 ? (!(N & o) || N & u) && (p[_] = Qa(N, r)) : L <= r && (n.expiredLanes |= N), h &= ~N;
    }
  }
  function Di(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function _l() {
    var n = Rl;
    return Rl <<= 1, !(Rl & 4194240) && (Rl = 64), n;
  }
  function bl(n) {
    for (var r = [], o = 0; 31 > o; o++) r.push(n);
    return r;
  }
  function zo(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Gr(r), n[r] = o;
  }
  function Ss(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var p = 31 - Gr(o), h = 1 << p;
      r[p] = 0, u[p] = -1, n[p] = -1, o &= ~h;
    }
  }
  function Es(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var u = 31 - Gr(o), p = 1 << u;
      p & r | n[u] & r && (n[u] |= r), o &= ~p;
    }
  }
  var Yt = 0;
  function Rs(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var fu, Vo, _s, Gt, du, Tl = !1, xt = [], vi = null, jn = null, pa = null, Ka = /* @__PURE__ */ new Map(), jo = /* @__PURE__ */ new Map(), xn = [], Fn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function bs(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        vi = null;
        break;
      case "dragenter":
      case "dragleave":
        jn = null;
        break;
      case "mouseover":
      case "mouseout":
        pa = null;
        break;
      case "pointerover":
      case "pointerout":
        Ka.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        jo.delete(r.pointerId);
    }
  }
  function br(n, r, o, u, p, h) {
    return n === null || n.nativeEvent !== h ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: u, nativeEvent: h, targetContainers: [p] }, r !== null && (r = Li(r), r !== null && Vo(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, p !== null && r.indexOf(p) === -1 && r.push(p), n);
  }
  function va(n, r, o, u, p) {
    switch (r) {
      case "focusin":
        return vi = br(vi, n, r, o, u, p), !0;
      case "dragenter":
        return jn = br(jn, n, r, o, u, p), !0;
      case "mouseover":
        return pa = br(pa, n, r, o, u, p), !0;
      case "pointerover":
        var h = p.pointerId;
        return Ka.set(h, br(Ka.get(h) || null, n, r, o, u, p)), !0;
      case "gotpointercapture":
        return h = p.pointerId, jo.set(h, br(jo.get(h) || null, n, r, o, u, p)), !0;
    }
    return !1;
  }
  function hi(n) {
    var r = fo(n.target);
    if (r !== null) {
      var o = ye(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = ht(o), r !== null) {
            n.blockedOn = r, du(n.priority, function() {
              _s(o);
            });
            return;
          }
        } else if (r === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function pu(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = hu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var u = new o.constructor(o.type, o);
        ge = u, o.target.dispatchEvent(u), ge = null;
      } else return r = Li(o), r !== null && Vo(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function Cl(n, r, o) {
    pu(n) && o.delete(r);
  }
  function wl() {
    Tl = !1, vi !== null && pu(vi) && (vi = null), jn !== null && pu(jn) && (jn = null), pa !== null && pu(pa) && (pa = null), Ka.forEach(Cl), jo.forEach(Cl);
  }
  function Fo(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Tl || (Tl = !0, f.unstable_scheduleCallback(f.unstable_NormalPriority, wl)));
  }
  function qa(n) {
    function r(p) {
      return Fo(p, n);
    }
    if (0 < xt.length) {
      Fo(xt[0], n);
      for (var o = 1; o < xt.length; o++) {
        var u = xt[o];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (vi !== null && Fo(vi, n), jn !== null && Fo(jn, n), pa !== null && Fo(pa, n), Ka.forEach(r), jo.forEach(r), o = 0; o < xn.length; o++) u = xn[o], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < xn.length && (o = xn[0], o.blockedOn === null); ) hi(o), o.blockedOn === null && xn.shift();
  }
  var to = ve.ReactCurrentBatchConfig, xl = !0;
  function no(n, r, o, u) {
    var p = Yt, h = to.transition;
    to.transition = null;
    try {
      Yt = 1, ki(n, r, o, u);
    } finally {
      Yt = p, to.transition = h;
    }
  }
  function vu(n, r, o, u) {
    var p = Yt, h = to.transition;
    to.transition = null;
    try {
      Yt = 4, ki(n, r, o, u);
    } finally {
      Yt = p, to.transition = h;
    }
  }
  function ki(n, r, o, u) {
    if (xl) {
      var p = hu(n, r, o, u);
      if (p === null) Od(n, r, u, ro, o), bs(n, u);
      else if (va(p, n, r, o, u)) u.stopPropagation();
      else if (bs(n, u), r & 4 && -1 < Fn.indexOf(n)) {
        for (; p !== null; ) {
          var h = Li(p);
          if (h !== null && fu(h), h = hu(n, r, o, u), h === null && Od(n, r, u, ro, o), h === p) break;
          p = h;
        }
        p !== null && u.stopPropagation();
      } else Od(n, r, u, null, o);
    }
  }
  var ro = null;
  function hu(n, r, o, u) {
    if (ro = null, n = be(u), n = fo(n), n !== null) if (r = ye(n), r === null) n = null;
    else if (o = r.tag, o === 13) {
      if (n = ht(r), n !== null) return n;
      n = null;
    } else if (o === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return ro = n, null;
  }
  function Ts(n) {
    switch (n) {
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
        switch (Ga()) {
          case ar:
            return 1;
          case fa:
            return 4;
          case Mt:
          case Zi:
            return 16;
          case Ji:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var mi = null, mu = null, R = null;
  function D() {
    if (R) return R;
    var n, r = mu, o = r.length, u, p = "value" in mi ? mi.value : mi.textContent, h = p.length;
    for (n = 0; n < o && r[n] === p[n]; n++) ;
    var _ = o - n;
    for (u = 1; u <= _ && r[o - u] === p[h - u]; u++) ;
    return R = p.slice(n, 1 < u ? 1 - u : void 0);
  }
  function Q(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function ee() {
    return !0;
  }
  function we() {
    return !1;
  }
  function et(n) {
    function r(o, u, p, h, _) {
      this._reactName = o, this._targetInst = p, this.type = u, this.nativeEvent = h, this.target = _, this.currentTarget = null;
      for (var N in n) n.hasOwnProperty(N) && (o = n[N], this[N] = o ? o(h) : h[N]);
      return this.isDefaultPrevented = (h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1) ? ee : we, this.isPropagationStopped = we, this;
    }
    return fe(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = ee);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = ee);
    }, persist: function() {
    }, isPersistent: ee }), r;
  }
  var Ye = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Tt = et(Ye), jt = fe({}, Ye, { view: 0, detail: 0 }), fn = et(jt), pn, vn, hn, Nn = fe({}, jt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Bc, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== hn && (hn && n.type === "mousemove" ? (pn = n.screenX - hn.screenX, vn = n.screenY - hn.screenY) : vn = pn = 0, hn = n), pn);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : vn;
  } }), tn = et(Nn), Po = fe({}, Nn, { dataTransfer: 0 }), yu = et(Po), Cs = fe({}, jt, { relatedTarget: 0 }), ws = et(Cs), ao = fe({}, Ye, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), xs = et(ao), Ns = fe({}, Ye, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Rd = et(Ns), gg = fe({}, Ye, { data: 0 }), Xv = et(gg), Zv = {
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
    MozPrintableKey: "Unidentified"
  }, _d = {
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
    224: "Meta"
  }, Jv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function eh(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Jv[n]) ? !!r[n] : !1;
  }
  function Bc() {
    return eh;
  }
  var Sg = fe({}, jt, { key: function(n) {
    if (n.key) {
      var r = Zv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = Q(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? _d[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Bc, charCode: function(n) {
    return n.type === "keypress" ? Q(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Q(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), io = et(Sg), Eg = fe({}, Nn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ic = et(Eg), bd = fe({}, jt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Bc }), Td = et(bd), Rg = fe({}, Ye, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Hc = et(Rg), th = fe({}, Nn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ha = et(th), oo = [9, 13, 27, 32], In = S && "CompositionEvent" in window, Da = null;
  S && "documentMode" in document && (Da = document.documentMode);
  var Cd = S && "TextEvent" in window && !Da, Ds = S && (!In || Da && 8 < Da && 11 >= Da), nh = " ", gu = !1;
  function rh(n, r) {
    switch (n) {
      case "keyup":
        return oo.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ah(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var $o = !1;
  function _g(n, r) {
    switch (n) {
      case "compositionend":
        return ah(r);
      case "keypress":
        return r.which !== 32 ? null : (gu = !0, nh);
      case "textInput":
        return n = r.data, n === nh && gu ? null : n;
      default:
        return null;
    }
  }
  function bg(n, r) {
    if ($o) return n === "compositionend" || !In && rh(n, r) ? (n = D(), R = mu = mi = null, $o = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Ds && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Tg = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function wd(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Tg[n.type] : r === "textarea";
  }
  function ih(n, r, o, u) {
    bt(u), r = qc(r, "onChange"), 0 < r.length && (o = new Tt("onChange", "change", null, o, u), n.push({ event: o, listeners: r }));
  }
  var ks = null, As = null;
  function oh(n) {
    _h(n, 0);
  }
  function lo(n) {
    var r = _u(n);
    if (Lt(r)) return n;
  }
  function xd(n, r) {
    if (n === "change") return r;
  }
  var Nd = !1;
  if (S) {
    var Wc;
    if (S) {
      var Dd = "oninput" in document;
      if (!Dd) {
        var lh = document.createElement("div");
        lh.setAttribute("oninput", "return;"), Dd = typeof lh.oninput == "function";
      }
      Wc = Dd;
    } else Wc = !1;
    Nd = Wc && (!document.documentMode || 9 < document.documentMode);
  }
  function uh() {
    ks && (ks.detachEvent("onpropertychange", sh), As = ks = null);
  }
  function sh(n) {
    if (n.propertyName === "value" && lo(As)) {
      var r = [];
      ih(r, As, n, be(n)), nr(oh, r);
    }
  }
  function Cg(n, r, o) {
    n === "focusin" ? (uh(), ks = r, As = o, ks.attachEvent("onpropertychange", sh)) : n === "focusout" && uh();
  }
  function wg(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return lo(As);
  }
  function xg(n, r) {
    if (n === "click") return lo(r);
  }
  function Ng(n, r) {
    if (n === "input" || n === "change") return lo(r);
  }
  function ch(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var yi = typeof Object.is == "function" ? Object.is : ch;
  function Su(n, r) {
    if (yi(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var o = Object.keys(n), u = Object.keys(r);
    if (o.length !== u.length) return !1;
    for (u = 0; u < o.length; u++) {
      var p = o[u];
      if (!U.call(r, p) || !yi(n[p], r[p])) return !1;
    }
    return !0;
  }
  function fh(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function dh(n, r) {
    var o = fh(n);
    n = 0;
    for (var u; o; ) {
      if (o.nodeType === 3) {
        if (u = n + o.textContent.length, n <= r && u >= r) return { node: o, offset: r - n };
        n = u;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = fh(o);
    }
  }
  function ph(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? ph(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function vh() {
    for (var n = window, r = Ft(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o) n = r.contentWindow;
      else break;
      r = Ft(n.document);
    }
    return r;
  }
  function Ls(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Nl(n) {
    var r = vh(), o = n.focusedElem, u = n.selectionRange;
    if (r !== o && o && o.ownerDocument && ph(o.ownerDocument.documentElement, o)) {
      if (u !== null && Ls(o)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in o) o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var p = o.textContent.length, h = Math.min(u.start, p);
          u = u.end === void 0 ? h : Math.min(u.end, p), !n.extend && h > u && (p = u, u = h, h = p), p = dh(o, h);
          var _ = dh(
            o,
            u
          );
          p && _ && (n.rangeCount !== 1 || n.anchorNode !== p.node || n.anchorOffset !== p.offset || n.focusNode !== _.node || n.focusOffset !== _.offset) && (r = r.createRange(), r.setStart(p.node, p.offset), n.removeAllRanges(), h > u ? (n.addRange(r), n.extend(_.node, _.offset)) : (r.setEnd(_.node, _.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++) n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Yc = S && "documentMode" in document && 11 >= document.documentMode, Dl = null, Bo = null, Os = null, kd = !1;
  function hh(n, r, o) {
    var u = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    kd || Dl == null || Dl !== Ft(u) || (u = Dl, "selectionStart" in u && Ls(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), Os && Su(Os, u) || (Os = u, u = qc(Bo, "onSelect"), 0 < u.length && (r = new Tt("onSelect", "select", null, r, o), n.push({ event: r, listeners: u }), r.target = Dl)));
  }
  function Gc(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var Eu = { animationend: Gc("Animation", "AnimationEnd"), animationiteration: Gc("Animation", "AnimationIteration"), animationstart: Gc("Animation", "AnimationStart"), transitionend: Gc("Transition", "TransitionEnd") }, Qc = {}, mh = {};
  S && (mh = document.createElement("div").style, "AnimationEvent" in window || (delete Eu.animationend.animation, delete Eu.animationiteration.animation, delete Eu.animationstart.animation), "TransitionEvent" in window || delete Eu.transitionend.transition);
  function Ms(n) {
    if (Qc[n]) return Qc[n];
    if (!Eu[n]) return n;
    var r = Eu[n], o;
    for (o in r) if (r.hasOwnProperty(o) && o in mh) return Qc[n] = r[o];
    return n;
  }
  var jr = Ms("animationend"), Ad = Ms("animationiteration"), yh = Ms("animationstart"), gh = Ms("transitionend"), Sh = /* @__PURE__ */ new Map(), Eh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Io(n, r) {
    Sh.set(n, r), T(r, [n]);
  }
  for (var Kc = 0; Kc < Eh.length; Kc++) {
    var Us = Eh[Kc], zs = Us.toLowerCase(), Dg = Us[0].toUpperCase() + Us.slice(1);
    Io(zs, "on" + Dg);
  }
  Io(jr, "onAnimationEnd"), Io(Ad, "onAnimationIteration"), Io(yh, "onAnimationStart"), Io("dblclick", "onDoubleClick"), Io("focusin", "onFocus"), Io("focusout", "onBlur"), Io(gh, "onTransitionEnd"), w("onMouseEnter", ["mouseout", "mouseover"]), w("onMouseLeave", ["mouseout", "mouseover"]), w("onPointerEnter", ["pointerout", "pointerover"]), w("onPointerLeave", ["pointerout", "pointerover"]), T("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), T("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), T("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), T("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), T("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), T("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var uo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), kg = new Set("cancel close invalid load scroll toggle".split(" ").concat(uo));
  function Rh(n, r, o) {
    var u = n.type || "unknown-event";
    n.currentTarget = o, he(u, r, void 0, n), n.currentTarget = null;
  }
  function _h(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var u = n[o], p = u.event;
      u = u.listeners;
      e: {
        var h = void 0;
        if (r) for (var _ = u.length - 1; 0 <= _; _--) {
          var N = u[_], L = N.instance, q = N.currentTarget;
          if (N = N.listener, L !== h && p.isPropagationStopped()) break e;
          Rh(p, N, q), h = L;
        }
        else for (_ = 0; _ < u.length; _++) {
          if (N = u[_], L = N.instance, q = N.currentTarget, N = N.listener, L !== h && p.isPropagationStopped()) break e;
          Rh(p, N, q), h = L;
        }
      }
    }
    if (Na) throw n = Xi, Na = !1, Xi = null, n;
  }
  function Sn(n, r) {
    var o = r[$d];
    o === void 0 && (o = r[$d] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    o.has(u) || (Ld(r, n, 2, !1), o.add(u));
  }
  function Vs(n, r, o) {
    var u = 0;
    r && (u |= 4), Ld(o, n, u, r);
  }
  var so = "_reactListening" + Math.random().toString(36).slice(2);
  function Ai(n) {
    if (!n[so]) {
      n[so] = !0, m.forEach(function(o) {
        o !== "selectionchange" && (kg.has(o) || Vs(o, !1, n), Vs(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[so] || (r[so] = !0, Vs("selectionchange", !1, r));
    }
  }
  function Ld(n, r, o, u) {
    switch (Ts(r)) {
      case 1:
        var p = no;
        break;
      case 4:
        p = vu;
        break;
      default:
        p = ki;
    }
    o = p.bind(null, r, o, n), p = void 0, !zr || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (p = !0), u ? p !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: p }) : n.addEventListener(r, o, !0) : p !== void 0 ? n.addEventListener(r, o, { passive: p }) : n.addEventListener(r, o, !1);
  }
  function Od(n, r, o, u, p) {
    var h = u;
    if (!(r & 1) && !(r & 2) && u !== null) e: for (; ; ) {
      if (u === null) return;
      var _ = u.tag;
      if (_ === 3 || _ === 4) {
        var N = u.stateNode.containerInfo;
        if (N === p || N.nodeType === 8 && N.parentNode === p) break;
        if (_ === 4) for (_ = u.return; _ !== null; ) {
          var L = _.tag;
          if ((L === 3 || L === 4) && (L = _.stateNode.containerInfo, L === p || L.nodeType === 8 && L.parentNode === p)) return;
          _ = _.return;
        }
        for (; N !== null; ) {
          if (_ = fo(N), _ === null) return;
          if (L = _.tag, L === 5 || L === 6) {
            u = h = _;
            continue e;
          }
          N = N.parentNode;
        }
      }
      u = u.return;
    }
    nr(function() {
      var q = h, me = be(o), Se = [];
      e: {
        var pe = Sh.get(n);
        if (pe !== void 0) {
          var He = Tt, Ze = n;
          switch (n) {
            case "keypress":
              if (Q(o) === 0) break e;
            case "keydown":
            case "keyup":
              He = io;
              break;
            case "focusin":
              Ze = "focus", He = ws;
              break;
            case "focusout":
              Ze = "blur", He = ws;
              break;
            case "beforeblur":
            case "afterblur":
              He = ws;
              break;
            case "click":
              if (o.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              He = tn;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              He = yu;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              He = Td;
              break;
            case jr:
            case Ad:
            case yh:
              He = xs;
              break;
            case gh:
              He = Hc;
              break;
            case "scroll":
              He = fn;
              break;
            case "wheel":
              He = ha;
              break;
            case "copy":
            case "cut":
            case "paste":
              He = Rd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              He = Ic;
          }
          var tt = (r & 4) !== 0, Xn = !tt && n === "scroll", B = tt ? pe !== null ? pe + "Capture" : null : pe;
          tt = [];
          for (var V = q, G; V !== null; ) {
            G = V;
            var xe = G.stateNode;
            if (G.tag === 5 && xe !== null && (G = xe, B !== null && (xe = pr(V, B), xe != null && tt.push(Ru(V, xe, G)))), Xn) break;
            V = V.return;
          }
          0 < tt.length && (pe = new He(pe, Ze, null, o, me), Se.push({ event: pe, listeners: tt }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (pe = n === "mouseover" || n === "pointerover", He = n === "mouseout" || n === "pointerout", pe && o !== ge && (Ze = o.relatedTarget || o.fromElement) && (fo(Ze) || Ze[gi])) break e;
          if ((He || pe) && (pe = me.window === me ? me : (pe = me.ownerDocument) ? pe.defaultView || pe.parentWindow : window, He ? (Ze = o.relatedTarget || o.toElement, He = q, Ze = Ze ? fo(Ze) : null, Ze !== null && (Xn = ye(Ze), Ze !== Xn || Ze.tag !== 5 && Ze.tag !== 6) && (Ze = null)) : (He = null, Ze = q), He !== Ze)) {
            if (tt = tn, xe = "onMouseLeave", B = "onMouseEnter", V = "mouse", (n === "pointerout" || n === "pointerover") && (tt = Ic, xe = "onPointerLeave", B = "onPointerEnter", V = "pointer"), Xn = He == null ? pe : _u(He), G = Ze == null ? pe : _u(Ze), pe = new tt(xe, V + "leave", He, o, me), pe.target = Xn, pe.relatedTarget = G, xe = null, fo(me) === q && (tt = new tt(B, V + "enter", Ze, o, me), tt.target = G, tt.relatedTarget = Xn, xe = tt), Xn = xe, He && Ze) t: {
              for (tt = He, B = Ze, V = 0, G = tt; G; G = kl(G)) V++;
              for (G = 0, xe = B; xe; xe = kl(xe)) G++;
              for (; 0 < V - G; ) tt = kl(tt), V--;
              for (; 0 < G - V; ) B = kl(B), G--;
              for (; V--; ) {
                if (tt === B || B !== null && tt === B.alternate) break t;
                tt = kl(tt), B = kl(B);
              }
              tt = null;
            }
            else tt = null;
            He !== null && Md(Se, pe, He, tt, !1), Ze !== null && Xn !== null && Md(Se, Xn, Ze, tt, !0);
          }
        }
        e: {
          if (pe = q ? _u(q) : window, He = pe.nodeName && pe.nodeName.toLowerCase(), He === "select" || He === "input" && pe.type === "file") var ot = xd;
          else if (wd(pe)) if (Nd) ot = Ng;
          else {
            ot = wg;
            var Et = Cg;
          }
          else (He = pe.nodeName) && He.toLowerCase() === "input" && (pe.type === "checkbox" || pe.type === "radio") && (ot = xg);
          if (ot && (ot = ot(n, q))) {
            ih(Se, ot, o, me);
            break e;
          }
          Et && Et(n, pe, q), n === "focusout" && (Et = pe._wrapperState) && Et.controlled && pe.type === "number" && Er(pe, "number", pe.value);
        }
        switch (Et = q ? _u(q) : window, n) {
          case "focusin":
            (wd(Et) || Et.contentEditable === "true") && (Dl = Et, Bo = q, Os = null);
            break;
          case "focusout":
            Os = Bo = Dl = null;
            break;
          case "mousedown":
            kd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            kd = !1, hh(Se, o, me);
            break;
          case "selectionchange":
            if (Yc) break;
          case "keydown":
          case "keyup":
            hh(Se, o, me);
        }
        var Rt;
        if (In) e: {
          switch (n) {
            case "compositionstart":
              var ut = "onCompositionStart";
              break e;
            case "compositionend":
              ut = "onCompositionEnd";
              break e;
            case "compositionupdate":
              ut = "onCompositionUpdate";
              break e;
          }
          ut = void 0;
        }
        else $o ? rh(n, o) && (ut = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (ut = "onCompositionStart");
        ut && (Ds && o.locale !== "ko" && ($o || ut !== "onCompositionStart" ? ut === "onCompositionEnd" && $o && (Rt = D()) : (mi = me, mu = "value" in mi ? mi.value : mi.textContent, $o = !0)), Et = qc(q, ut), 0 < Et.length && (ut = new Xv(ut, n, null, o, me), Se.push({ event: ut, listeners: Et }), Rt ? ut.data = Rt : (Rt = ah(o), Rt !== null && (ut.data = Rt)))), (Rt = Cd ? _g(n, o) : bg(n, o)) && (q = qc(q, "onBeforeInput"), 0 < q.length && (me = new Xv("onBeforeInput", "beforeinput", null, o, me), Se.push({ event: me, listeners: q }), me.data = Rt));
      }
      _h(Se, r);
    });
  }
  function Ru(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function qc(n, r) {
    for (var o = r + "Capture", u = []; n !== null; ) {
      var p = n, h = p.stateNode;
      p.tag === 5 && h !== null && (p = h, h = pr(n, o), h != null && u.unshift(Ru(n, h, p)), h = pr(n, r), h != null && u.push(Ru(n, h, p))), n = n.return;
    }
    return u;
  }
  function kl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Md(n, r, o, u, p) {
    for (var h = r._reactName, _ = []; o !== null && o !== u; ) {
      var N = o, L = N.alternate, q = N.stateNode;
      if (L !== null && L === u) break;
      N.tag === 5 && q !== null && (N = q, p ? (L = pr(o, h), L != null && _.unshift(Ru(o, L, N))) : p || (L = pr(o, h), L != null && _.push(Ru(o, L, N)))), o = o.return;
    }
    _.length !== 0 && n.push({ event: r, listeners: _ });
  }
  var bh = /\r\n?/g, Ud = /\u0000|\uFFFD/g;
  function Th(n) {
    return (typeof n == "string" ? n : "" + n).replace(bh, `
`).replace(Ud, "");
  }
  function js(n, r, o) {
    if (r = Th(r), Th(n) !== r && o) throw Error(d(425));
  }
  function Xc() {
  }
  var zd = null, Vd = null;
  function Al(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Fs = typeof setTimeout == "function" ? setTimeout : void 0, Ps = typeof clearTimeout == "function" ? clearTimeout : void 0, jd = typeof Promise == "function" ? Promise : void 0, Ch = typeof queueMicrotask == "function" ? queueMicrotask : typeof jd < "u" ? function(n) {
    return jd.resolve(null).then(n).catch(Fd);
  } : Fs;
  function Fd(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Pd(n, r) {
    var o = r, u = 0;
    do {
      var p = o.nextSibling;
      if (n.removeChild(o), p && p.nodeType === 8) if (o = p.data, o === "/$") {
        if (u === 0) {
          n.removeChild(p), qa(r);
          return;
        }
        u--;
      } else o !== "$" && o !== "$?" && o !== "$!" || u++;
      o = p;
    } while (o);
    qa(r);
  }
  function ka(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function $s(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var o = n.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (r === 0) return n;
          r--;
        } else o === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var co = Math.random().toString(36).slice(2), Xa = "__reactFiber$" + co, Bs = "__reactProps$" + co, gi = "__reactContainer$" + co, $d = "__reactEvents$" + co, Ag = "__reactListeners$" + co, Lg = "__reactHandles$" + co;
  function fo(n) {
    var r = n[Xa];
    if (r) return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[gi] || o[Xa]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null) for (n = $s(n); n !== null; ) {
          if (o = n[Xa]) return o;
          n = $s(n);
        }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function Li(n) {
    return n = n[Xa] || n[gi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function _u(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(d(33));
  }
  function Zc(n) {
    return n[Bs] || null;
  }
  var mt = [], Si = -1;
  function En(n) {
    return { current: n };
  }
  function it(n) {
    0 > Si || (n.current = mt[Si], mt[Si] = null, Si--);
  }
  function on(n, r) {
    Si++, mt[Si] = n.current, n.current = r;
  }
  var Za = {}, hr = En(Za), Dt = En(!1), Qr = Za;
  function Aa(n, r) {
    var o = n.type.contextTypes;
    if (!o) return Za;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r) return u.__reactInternalMemoizedMaskedChildContext;
    var p = {}, h;
    for (h in o) p[h] = r[h];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = p), p;
  }
  function ir(n) {
    return n = n.childContextTypes, n != null;
  }
  function ma() {
    it(Dt), it(hr);
  }
  function Oi(n, r, o) {
    if (hr.current !== Za) throw Error(d(168));
    on(hr, r), on(Dt, o);
  }
  function Ho(n, r, o) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function") return o;
    u = u.getChildContext();
    for (var p in u) if (!(p in r)) throw Error(d(108, ke(n) || "Unknown", p));
    return fe({}, o, u);
  }
  function Ll(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Za, Qr = hr.current, on(hr, n), on(Dt, Dt.current), !0;
  }
  function wh(n, r, o) {
    var u = n.stateNode;
    if (!u) throw Error(d(169));
    o ? (n = Ho(n, r, Qr), u.__reactInternalMemoizedMergedChildContext = n, it(Dt), it(hr), on(hr, n)) : it(Dt), on(Dt, o);
  }
  var po = null, Wo = !1, Tr = !1;
  function Jc(n) {
    po === null ? po = [n] : po.push(n);
  }
  function xh(n) {
    Wo = !0, Jc(n);
  }
  function Mi() {
    if (!Tr && po !== null) {
      Tr = !0;
      var n = 0, r = Yt;
      try {
        var o = po;
        for (Yt = 1; n < o.length; n++) {
          var u = o[n];
          do
            u = u(!0);
          while (u !== null);
        }
        po = null, Wo = !1;
      } catch (p) {
        throw po !== null && (po = po.slice(n + 1)), rr(ar, Mi), p;
      } finally {
        Yt = r, Tr = !1;
      }
    }
    return null;
  }
  var Ja = [], Yo = 0, ei = null, Ol = 0, ya = [], ga = 0, Ei = null, Sa = 1, Cr = "";
  function Ml(n, r) {
    Ja[Yo++] = Ol, Ja[Yo++] = ei, ei = n, Ol = r;
  }
  function Go(n, r, o) {
    ya[ga++] = Sa, ya[ga++] = Cr, ya[ga++] = Ei, Ei = n;
    var u = Sa;
    n = Cr;
    var p = 32 - Gr(u) - 1;
    u &= ~(1 << p), o += 1;
    var h = 32 - Gr(r) + p;
    if (30 < h) {
      var _ = p - p % 5;
      h = (u & (1 << _) - 1).toString(32), u >>= _, p -= _, Sa = 1 << 32 - Gr(r) + p | o << p | u, Cr = h + n;
    } else Sa = 1 << h | o << p | u, Cr = n;
  }
  function ef(n) {
    n.return !== null && (Ml(n, 1), Go(n, 1, 0));
  }
  function tf(n) {
    for (; n === ei; ) ei = Ja[--Yo], Ja[Yo] = null, Ol = Ja[--Yo], Ja[Yo] = null;
    for (; n === Ei; ) Ei = ya[--ga], ya[ga] = null, Cr = ya[--ga], ya[ga] = null, Sa = ya[--ga], ya[ga] = null;
  }
  var La = null, Oa = null, Dn = !1, ti = null;
  function Bd(n, r) {
    var o = Pa(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function Id(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, La = n, Oa = ka(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, La = n, Oa = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = Ei !== null ? { id: Sa, overflow: Cr } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = Pa(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, La = n, Oa = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Hd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function nf(n) {
    if (Dn) {
      var r = Oa;
      if (r) {
        var o = r;
        if (!Id(n, r)) {
          if (Hd(n)) throw Error(d(418));
          r = ka(o.nextSibling);
          var u = La;
          r && Id(n, r) ? Bd(u, o) : (n.flags = n.flags & -4097 | 2, Dn = !1, La = n);
        }
      } else {
        if (Hd(n)) throw Error(d(418));
        n.flags = n.flags & -4097 | 2, Dn = !1, La = n;
      }
    }
  }
  function Wd(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    La = n;
  }
  function rf(n) {
    if (n !== La) return !1;
    if (!Dn) return Wd(n), Dn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Al(n.type, n.memoizedProps)), r && (r = Oa)) {
      if (Hd(n)) throw Nh(), Error(d(418));
      for (; r; ) Bd(n, r), r = ka(r.nextSibling);
    }
    if (Wd(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(d(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                Oa = ka(n.nextSibling);
                break e;
              }
              r--;
            } else o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Oa = null;
      }
    } else Oa = La ? ka(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Nh() {
    for (var n = Oa; n; ) n = ka(n.nextSibling);
  }
  function bu() {
    Oa = La = null, Dn = !1;
  }
  function or(n) {
    ti === null ? ti = [n] : ti.push(n);
  }
  var Og = ve.ReactCurrentBatchConfig;
  function Qo(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1) throw Error(d(309));
          var u = o.stateNode;
        }
        if (!u) throw Error(d(147, n));
        var p = u, h = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === h ? r.ref : (r = function(_) {
          var N = p.refs;
          _ === null ? delete N[h] : N[h] = _;
        }, r._stringRef = h, r);
      }
      if (typeof n != "string") throw Error(d(284));
      if (!o._owner) throw Error(d(290, n));
    }
    return n;
  }
  function Tu(n, r) {
    throw n = Object.prototype.toString.call(r), Error(d(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Ko(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Dh(n) {
    function r(B, V) {
      if (n) {
        var G = B.deletions;
        G === null ? (B.deletions = [V], B.flags |= 16) : G.push(V);
      }
    }
    function o(B, V) {
      if (!n) return null;
      for (; V !== null; ) r(B, V), V = V.sibling;
      return null;
    }
    function u(B, V) {
      for (B = /* @__PURE__ */ new Map(); V !== null; ) V.key !== null ? B.set(V.key, V) : B.set(V.index, V), V = V.sibling;
      return B;
    }
    function p(B, V) {
      return B = ol(B, V), B.index = 0, B.sibling = null, B;
    }
    function h(B, V, G) {
      return B.index = G, n ? (G = B.alternate, G !== null ? (G = G.index, G < V ? (B.flags |= 2, V) : G) : (B.flags |= 2, V)) : (B.flags |= 1048576, V);
    }
    function _(B) {
      return n && B.alternate === null && (B.flags |= 2), B;
    }
    function N(B, V, G, xe) {
      return V === null || V.tag !== 6 ? (V = Cp(G, B.mode, xe), V.return = B, V) : (V = p(V, G), V.return = B, V);
    }
    function L(B, V, G, xe) {
      var ot = G.type;
      return ot === qe ? me(B, V, G.props.children, xe, G.key) : V !== null && (V.elementType === ot || typeof ot == "object" && ot !== null && ot.$$typeof === St && Ko(ot) === V.type) ? (xe = p(V, G.props), xe.ref = Qo(B, V, G), xe.return = B, xe) : (xe = Df(G.type, G.key, G.props, null, B.mode, xe), xe.ref = Qo(B, V, G), xe.return = B, xe);
    }
    function q(B, V, G, xe) {
      return V === null || V.tag !== 4 || V.stateNode.containerInfo !== G.containerInfo || V.stateNode.implementation !== G.implementation ? (V = Af(G, B.mode, xe), V.return = B, V) : (V = p(V, G.children || []), V.return = B, V);
    }
    function me(B, V, G, xe, ot) {
      return V === null || V.tag !== 7 ? (V = Kl(G, B.mode, xe, ot), V.return = B, V) : (V = p(V, G), V.return = B, V);
    }
    function Se(B, V, G) {
      if (typeof V == "string" && V !== "" || typeof V == "number") return V = Cp("" + V, B.mode, G), V.return = B, V;
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case Ke:
            return G = Df(V.type, V.key, V.props, null, B.mode, G), G.ref = Qo(B, null, V), G.return = B, G;
          case Ce:
            return V = Af(V, B.mode, G), V.return = B, V;
          case St:
            var xe = V._init;
            return Se(B, xe(V._payload), G);
        }
        if (Jn(V) || ze(V)) return V = Kl(V, B.mode, G, null), V.return = B, V;
        Tu(B, V);
      }
      return null;
    }
    function pe(B, V, G, xe) {
      var ot = V !== null ? V.key : null;
      if (typeof G == "string" && G !== "" || typeof G == "number") return ot !== null ? null : N(B, V, "" + G, xe);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case Ke:
            return G.key === ot ? L(B, V, G, xe) : null;
          case Ce:
            return G.key === ot ? q(B, V, G, xe) : null;
          case St:
            return ot = G._init, pe(
              B,
              V,
              ot(G._payload),
              xe
            );
        }
        if (Jn(G) || ze(G)) return ot !== null ? null : me(B, V, G, xe, null);
        Tu(B, G);
      }
      return null;
    }
    function He(B, V, G, xe, ot) {
      if (typeof xe == "string" && xe !== "" || typeof xe == "number") return B = B.get(G) || null, N(V, B, "" + xe, ot);
      if (typeof xe == "object" && xe !== null) {
        switch (xe.$$typeof) {
          case Ke:
            return B = B.get(xe.key === null ? G : xe.key) || null, L(V, B, xe, ot);
          case Ce:
            return B = B.get(xe.key === null ? G : xe.key) || null, q(V, B, xe, ot);
          case St:
            var Et = xe._init;
            return He(B, V, G, Et(xe._payload), ot);
        }
        if (Jn(xe) || ze(xe)) return B = B.get(G) || null, me(V, B, xe, ot, null);
        Tu(V, xe);
      }
      return null;
    }
    function Ze(B, V, G, xe) {
      for (var ot = null, Et = null, Rt = V, ut = V = 0, Gn = null; Rt !== null && ut < G.length; ut++) {
        Rt.index > ut ? (Gn = Rt, Rt = null) : Gn = Rt.sibling;
        var an = pe(B, Rt, G[ut], xe);
        if (an === null) {
          Rt === null && (Rt = Gn);
          break;
        }
        n && Rt && an.alternate === null && r(B, Rt), V = h(an, V, ut), Et === null ? ot = an : Et.sibling = an, Et = an, Rt = Gn;
      }
      if (ut === G.length) return o(B, Rt), Dn && Ml(B, ut), ot;
      if (Rt === null) {
        for (; ut < G.length; ut++) Rt = Se(B, G[ut], xe), Rt !== null && (V = h(Rt, V, ut), Et === null ? ot = Rt : Et.sibling = Rt, Et = Rt);
        return Dn && Ml(B, ut), ot;
      }
      for (Rt = u(B, Rt); ut < G.length; ut++) Gn = He(Rt, B, ut, G[ut], xe), Gn !== null && (n && Gn.alternate !== null && Rt.delete(Gn.key === null ? ut : Gn.key), V = h(Gn, V, ut), Et === null ? ot = Gn : Et.sibling = Gn, Et = Gn);
      return n && Rt.forEach(function(ll) {
        return r(B, ll);
      }), Dn && Ml(B, ut), ot;
    }
    function tt(B, V, G, xe) {
      var ot = ze(G);
      if (typeof ot != "function") throw Error(d(150));
      if (G = ot.call(G), G == null) throw Error(d(151));
      for (var Et = ot = null, Rt = V, ut = V = 0, Gn = null, an = G.next(); Rt !== null && !an.done; ut++, an = G.next()) {
        Rt.index > ut ? (Gn = Rt, Rt = null) : Gn = Rt.sibling;
        var ll = pe(B, Rt, an.value, xe);
        if (ll === null) {
          Rt === null && (Rt = Gn);
          break;
        }
        n && Rt && ll.alternate === null && r(B, Rt), V = h(ll, V, ut), Et === null ? ot = ll : Et.sibling = ll, Et = ll, Rt = Gn;
      }
      if (an.done) return o(
        B,
        Rt
      ), Dn && Ml(B, ut), ot;
      if (Rt === null) {
        for (; !an.done; ut++, an = G.next()) an = Se(B, an.value, xe), an !== null && (V = h(an, V, ut), Et === null ? ot = an : Et.sibling = an, Et = an);
        return Dn && Ml(B, ut), ot;
      }
      for (Rt = u(B, Rt); !an.done; ut++, an = G.next()) an = He(Rt, B, ut, an.value, xe), an !== null && (n && an.alternate !== null && Rt.delete(an.key === null ? ut : an.key), V = h(an, V, ut), Et === null ? ot = an : Et.sibling = an, Et = an);
      return n && Rt.forEach(function(am) {
        return r(B, am);
      }), Dn && Ml(B, ut), ot;
    }
    function Xn(B, V, G, xe) {
      if (typeof G == "object" && G !== null && G.type === qe && G.key === null && (G = G.props.children), typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case Ke:
            e: {
              for (var ot = G.key, Et = V; Et !== null; ) {
                if (Et.key === ot) {
                  if (ot = G.type, ot === qe) {
                    if (Et.tag === 7) {
                      o(B, Et.sibling), V = p(Et, G.props.children), V.return = B, B = V;
                      break e;
                    }
                  } else if (Et.elementType === ot || typeof ot == "object" && ot !== null && ot.$$typeof === St && Ko(ot) === Et.type) {
                    o(B, Et.sibling), V = p(Et, G.props), V.ref = Qo(B, Et, G), V.return = B, B = V;
                    break e;
                  }
                  o(B, Et);
                  break;
                } else r(B, Et);
                Et = Et.sibling;
              }
              G.type === qe ? (V = Kl(G.props.children, B.mode, xe, G.key), V.return = B, B = V) : (xe = Df(G.type, G.key, G.props, null, B.mode, xe), xe.ref = Qo(B, V, G), xe.return = B, B = xe);
            }
            return _(B);
          case Ce:
            e: {
              for (Et = G.key; V !== null; ) {
                if (V.key === Et) if (V.tag === 4 && V.stateNode.containerInfo === G.containerInfo && V.stateNode.implementation === G.implementation) {
                  o(B, V.sibling), V = p(V, G.children || []), V.return = B, B = V;
                  break e;
                } else {
                  o(B, V);
                  break;
                }
                else r(B, V);
                V = V.sibling;
              }
              V = Af(G, B.mode, xe), V.return = B, B = V;
            }
            return _(B);
          case St:
            return Et = G._init, Xn(B, V, Et(G._payload), xe);
        }
        if (Jn(G)) return Ze(B, V, G, xe);
        if (ze(G)) return tt(B, V, G, xe);
        Tu(B, G);
      }
      return typeof G == "string" && G !== "" || typeof G == "number" ? (G = "" + G, V !== null && V.tag === 6 ? (o(B, V.sibling), V = p(V, G), V.return = B, B = V) : (o(B, V), V = Cp(G, B.mode, xe), V.return = B, B = V), _(B)) : o(B, V);
    }
    return Xn;
  }
  var qo = Dh(!0), kh = Dh(!1), af = En(null), vo = null, qn = null, je = null;
  function ni() {
    je = qn = vo = null;
  }
  function Ma(n) {
    var r = af.current;
    it(af), n._currentValue = r;
  }
  function Yd(n, r, o) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === o) break;
      n = n.return;
    }
  }
  function Cu(n, r) {
    vo = n, je = qn = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Kr = !0), n.firstContext = null);
  }
  function ri(n) {
    var r = n._currentValue;
    if (je !== n) if (n = { context: n, memoizedValue: r, next: null }, qn === null) {
      if (vo === null) throw Error(d(308));
      qn = n, vo.dependencies = { lanes: 0, firstContext: n };
    } else qn = qn.next = n;
    return r;
  }
  var Ul = null;
  function Gd(n) {
    Ul === null ? Ul = [n] : Ul.push(n);
  }
  function cr(n, r, o, u) {
    var p = r.interleaved;
    return p === null ? (o.next = o, Gd(r)) : (o.next = p.next, p.next = o), r.interleaved = o, ho(n, u);
  }
  function ho(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; ) n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var Xo = !1;
  function Qd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Kd(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Ua(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function za(n, r, o) {
    var u = n.updateQueue;
    if (u === null) return null;
    if (u = u.shared, rn & 2) {
      var p = u.pending;
      return p === null ? r.next = r : (r.next = p.next, p.next = r), u.pending = r, ho(n, o);
    }
    return p = u.interleaved, p === null ? (r.next = r, Gd(u)) : (r.next = p.next, p.next = r), u.interleaved = r, ho(n, o);
  }
  function of(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, Es(n, o);
    }
  }
  function Ah(n, r) {
    var o = n.updateQueue, u = n.alternate;
    if (u !== null && (u = u.updateQueue, o === u)) {
      var p = null, h = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var _ = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          h === null ? p = h = _ : h = h.next = _, o = o.next;
        } while (o !== null);
        h === null ? p = h = r : h = h.next = r;
      } else p = h = r;
      o = { baseState: u.baseState, firstBaseUpdate: p, lastBaseUpdate: h, shared: u.shared, effects: u.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function lf(n, r, o, u) {
    var p = n.updateQueue;
    Xo = !1;
    var h = p.firstBaseUpdate, _ = p.lastBaseUpdate, N = p.shared.pending;
    if (N !== null) {
      p.shared.pending = null;
      var L = N, q = L.next;
      L.next = null, _ === null ? h = q : _.next = q, _ = L;
      var me = n.alternate;
      me !== null && (me = me.updateQueue, N = me.lastBaseUpdate, N !== _ && (N === null ? me.firstBaseUpdate = q : N.next = q, me.lastBaseUpdate = L));
    }
    if (h !== null) {
      var Se = p.baseState;
      _ = 0, me = q = L = null, N = h;
      do {
        var pe = N.lane, He = N.eventTime;
        if ((u & pe) === pe) {
          me !== null && (me = me.next = {
            eventTime: He,
            lane: 0,
            tag: N.tag,
            payload: N.payload,
            callback: N.callback,
            next: null
          });
          e: {
            var Ze = n, tt = N;
            switch (pe = r, He = o, tt.tag) {
              case 1:
                if (Ze = tt.payload, typeof Ze == "function") {
                  Se = Ze.call(He, Se, pe);
                  break e;
                }
                Se = Ze;
                break e;
              case 3:
                Ze.flags = Ze.flags & -65537 | 128;
              case 0:
                if (Ze = tt.payload, pe = typeof Ze == "function" ? Ze.call(He, Se, pe) : Ze, pe == null) break e;
                Se = fe({}, Se, pe);
                break e;
              case 2:
                Xo = !0;
            }
          }
          N.callback !== null && N.lane !== 0 && (n.flags |= 64, pe = p.effects, pe === null ? p.effects = [N] : pe.push(N));
        } else He = { eventTime: He, lane: pe, tag: N.tag, payload: N.payload, callback: N.callback, next: null }, me === null ? (q = me = He, L = Se) : me = me.next = He, _ |= pe;
        if (N = N.next, N === null) {
          if (N = p.shared.pending, N === null) break;
          pe = N, N = pe.next, pe.next = null, p.lastBaseUpdate = pe, p.shared.pending = null;
        }
      } while (!0);
      if (me === null && (L = Se), p.baseState = L, p.firstBaseUpdate = q, p.lastBaseUpdate = me, r = p.shared.interleaved, r !== null) {
        p = r;
        do
          _ |= p.lane, p = p.next;
        while (p !== r);
      } else h === null && (p.shared.lanes = 0);
      Bl |= _, n.lanes = _, n.memoizedState = Se;
    }
  }
  function Lh(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var u = n[r], p = u.callback;
      if (p !== null) {
        if (u.callback = null, u = o, typeof p != "function") throw Error(d(191, p));
        p.call(u);
      }
    }
  }
  var Is = {}, Ui = En(Is), wu = En(Is), xu = En(Is);
  function zl(n) {
    if (n === Is) throw Error(d(174));
    return n;
  }
  function qd(n, r) {
    switch (on(xu, r), on(wu, n), on(Ui, Is), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : _r(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = _r(r, n);
    }
    it(Ui), on(Ui, r);
  }
  function Nu() {
    it(Ui), it(wu), it(xu);
  }
  function Oh(n) {
    zl(xu.current);
    var r = zl(Ui.current), o = _r(r, n.type);
    r !== o && (on(wu, n), on(Ui, o));
  }
  function Xd(n) {
    wu.current === n && (it(Ui), it(wu));
  }
  var Pn = En(0);
  function Hs(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var o = r.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Zd = [];
  function uf() {
    for (var n = 0; n < Zd.length; n++) Zd[n]._workInProgressVersionPrimary = null;
    Zd.length = 0;
  }
  var sf = ve.ReactCurrentDispatcher, Jd = ve.ReactCurrentBatchConfig, mo = 0, Ue = null, dt = null, Nt = null, kn = !1, Ea = !1, Du = 0, Mg = 0;
  function Fr() {
    throw Error(d(321));
  }
  function ep(n, r) {
    if (r === null) return !1;
    for (var o = 0; o < r.length && o < n.length; o++) if (!yi(n[o], r[o])) return !1;
    return !0;
  }
  function Ws(n, r, o, u, p, h) {
    if (mo = h, Ue = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, sf.current = n === null || n.memoizedState === null ? Va : Ug, n = o(u, p), Ea) {
      h = 0;
      do {
        if (Ea = !1, Du = 0, 25 <= h) throw Error(d(301));
        h += 1, Nt = dt = null, r.updateQueue = null, sf.current = Tn, n = o(u, p);
      } while (Ea);
    }
    if (sf.current = Vi, r = dt !== null && dt.next !== null, mo = 0, Nt = dt = Ue = null, kn = !1, r) throw Error(d(300));
    return n;
  }
  function de() {
    var n = Du !== 0;
    return Du = 0, n;
  }
  function Rn() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Nt === null ? Ue.memoizedState = Nt = n : Nt = Nt.next = n, Nt;
  }
  function lt() {
    if (dt === null) {
      var n = Ue.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = dt.next;
    var r = Nt === null ? Ue.memoizedState : Nt.next;
    if (r !== null) Nt = r, dt = n;
    else {
      if (n === null) throw Error(d(310));
      dt = n, n = { memoizedState: dt.memoizedState, baseState: dt.baseState, baseQueue: dt.baseQueue, queue: dt.queue, next: null }, Nt === null ? Ue.memoizedState = Nt = n : Nt = Nt.next = n;
    }
    return Nt;
  }
  function zi(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Ri(n) {
    var r = lt(), o = r.queue;
    if (o === null) throw Error(d(311));
    o.lastRenderedReducer = n;
    var u = dt, p = u.baseQueue, h = o.pending;
    if (h !== null) {
      if (p !== null) {
        var _ = p.next;
        p.next = h.next, h.next = _;
      }
      u.baseQueue = p = h, o.pending = null;
    }
    if (p !== null) {
      h = p.next, u = u.baseState;
      var N = _ = null, L = null, q = h;
      do {
        var me = q.lane;
        if ((mo & me) === me) L !== null && (L = L.next = { lane: 0, action: q.action, hasEagerState: q.hasEagerState, eagerState: q.eagerState, next: null }), u = q.hasEagerState ? q.eagerState : n(u, q.action);
        else {
          var Se = {
            lane: me,
            action: q.action,
            hasEagerState: q.hasEagerState,
            eagerState: q.eagerState,
            next: null
          };
          L === null ? (N = L = Se, _ = u) : L = L.next = Se, Ue.lanes |= me, Bl |= me;
        }
        q = q.next;
      } while (q !== null && q !== h);
      L === null ? _ = u : L.next = N, yi(u, r.memoizedState) || (Kr = !0), r.memoizedState = u, r.baseState = _, r.baseQueue = L, o.lastRenderedState = u;
    }
    if (n = o.interleaved, n !== null) {
      p = n;
      do
        h = p.lane, Ue.lanes |= h, Bl |= h, p = p.next;
      while (p !== n);
    } else p === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function yo(n) {
    var r = lt(), o = r.queue;
    if (o === null) throw Error(d(311));
    o.lastRenderedReducer = n;
    var u = o.dispatch, p = o.pending, h = r.memoizedState;
    if (p !== null) {
      o.pending = null;
      var _ = p = p.next;
      do
        h = n(h, _.action), _ = _.next;
      while (_ !== p);
      yi(h, r.memoizedState) || (Kr = !0), r.memoizedState = h, r.baseQueue === null && (r.baseState = h), o.lastRenderedState = h;
    }
    return [h, u];
  }
  function _i() {
  }
  function ku(n, r) {
    var o = Ue, u = lt(), p = r(), h = !yi(u.memoizedState, p);
    if (h && (u.memoizedState = p, Kr = !0), u = u.queue, Ys(cf.bind(null, o, u, n), [n]), u.getSnapshot !== r || h || Nt !== null && Nt.memoizedState.tag & 1) {
      if (o.flags |= 2048, jl(9, Au.bind(null, o, u, p, r), void 0, null), Hn === null) throw Error(d(349));
      mo & 30 || Vl(o, r, p);
    }
    return p;
  }
  function Vl(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = Ue.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ue.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function Au(n, r, o, u) {
    r.value = o, r.getSnapshot = u, ff(r) && df(n);
  }
  function cf(n, r, o) {
    return o(function() {
      ff(r) && df(n);
    });
  }
  function ff(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !yi(n, o);
    } catch {
      return !0;
    }
  }
  function df(n) {
    var r = ho(n, 1);
    r !== null && ai(r, n, 1, -1);
  }
  function pf(n) {
    var r = Rn();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: zi, lastRenderedState: n }, r.queue = n, n = n.dispatch = Mh.bind(null, Ue, n), [r.memoizedState, n];
  }
  function jl(n, r, o, u) {
    return n = { tag: n, create: r, destroy: o, deps: u, next: null }, r = Ue.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ue.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (u = o.next, o.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function vf() {
    return lt().memoizedState;
  }
  function Lu(n, r, o, u) {
    var p = Rn();
    Ue.flags |= n, p.memoizedState = jl(1 | r, o, void 0, u === void 0 ? null : u);
  }
  function Ou(n, r, o, u) {
    var p = lt();
    u = u === void 0 ? null : u;
    var h = void 0;
    if (dt !== null) {
      var _ = dt.memoizedState;
      if (h = _.destroy, u !== null && ep(u, _.deps)) {
        p.memoizedState = jl(r, o, h, u);
        return;
      }
    }
    Ue.flags |= n, p.memoizedState = jl(1 | r, o, h, u);
  }
  function hf(n, r) {
    return Lu(8390656, 8, n, r);
  }
  function Ys(n, r) {
    return Ou(2048, 8, n, r);
  }
  function mf(n, r) {
    return Ou(4, 2, n, r);
  }
  function yf(n, r) {
    return Ou(4, 4, n, r);
  }
  function gf(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Sf(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Ou(4, 4, gf.bind(null, r, n), o);
  }
  function Gs() {
  }
  function Qs(n, r) {
    var o = lt();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && ep(r, u[1]) ? u[0] : (o.memoizedState = [n, r], n);
  }
  function Fl(n, r) {
    var o = lt();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && ep(r, u[1]) ? u[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function Ef(n, r, o) {
    return mo & 21 ? (yi(o, r) || (o = _l(), Ue.lanes |= o, Bl |= o, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Kr = !0), n.memoizedState = o);
  }
  function tp(n, r) {
    var o = Yt;
    Yt = o !== 0 && 4 > o ? o : 4, n(!0);
    var u = Jd.transition;
    Jd.transition = {};
    try {
      n(!1), r();
    } finally {
      Yt = o, Jd.transition = u;
    }
  }
  function Rf() {
    return lt().memoizedState;
  }
  function np(n, r, o) {
    var u = Ti(n);
    if (o = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null }, Mu(n)) rp(r, o);
    else if (o = cr(n, r, o, u), o !== null) {
      var p = gr();
      ai(o, n, u, p), Uu(o, r, u);
    }
  }
  function Mh(n, r, o) {
    var u = Ti(n), p = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (Mu(n)) rp(r, p);
    else {
      var h = n.alternate;
      if (n.lanes === 0 && (h === null || h.lanes === 0) && (h = r.lastRenderedReducer, h !== null)) try {
        var _ = r.lastRenderedState, N = h(_, o);
        if (p.hasEagerState = !0, p.eagerState = N, yi(N, _)) {
          var L = r.interleaved;
          L === null ? (p.next = p, Gd(r)) : (p.next = L.next, L.next = p), r.interleaved = p;
          return;
        }
      } catch {
      } finally {
      }
      o = cr(n, r, p, u), o !== null && (p = gr(), ai(o, n, u, p), Uu(o, r, u));
    }
  }
  function Mu(n) {
    var r = n.alternate;
    return n === Ue || r !== null && r === Ue;
  }
  function rp(n, r) {
    Ea = kn = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function Uu(n, r, o) {
    if (o & 4194240) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, Es(n, o);
    }
  }
  var Vi = { readContext: ri, useCallback: Fr, useContext: Fr, useEffect: Fr, useImperativeHandle: Fr, useInsertionEffect: Fr, useLayoutEffect: Fr, useMemo: Fr, useReducer: Fr, useRef: Fr, useState: Fr, useDebugValue: Fr, useDeferredValue: Fr, useTransition: Fr, useMutableSource: Fr, useSyncExternalStore: Fr, useId: Fr, unstable_isNewReconciler: !1 }, Va = { readContext: ri, useCallback: function(n, r) {
    return Rn().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: ri, useEffect: hf, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Lu(
      4194308,
      4,
      gf.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return Lu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Lu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = Rn();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var u = Rn();
    return r = o !== void 0 ? o(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = np.bind(null, Ue, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = Rn();
    return n = { current: n }, r.memoizedState = n;
  }, useState: pf, useDebugValue: Gs, useDeferredValue: function(n) {
    return Rn().memoizedState = n;
  }, useTransition: function() {
    var n = pf(!1), r = n[0];
    return n = tp.bind(null, n[1]), Rn().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var u = Ue, p = Rn();
    if (Dn) {
      if (o === void 0) throw Error(d(407));
      o = o();
    } else {
      if (o = r(), Hn === null) throw Error(d(349));
      mo & 30 || Vl(u, r, o);
    }
    p.memoizedState = o;
    var h = { value: o, getSnapshot: r };
    return p.queue = h, hf(cf.bind(
      null,
      u,
      h,
      n
    ), [n]), u.flags |= 2048, jl(9, Au.bind(null, u, h, o, r), void 0, null), o;
  }, useId: function() {
    var n = Rn(), r = Hn.identifierPrefix;
    if (Dn) {
      var o = Cr, u = Sa;
      o = (u & ~(1 << 32 - Gr(u) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = Du++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else o = Mg++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Ug = {
    readContext: ri,
    useCallback: Qs,
    useContext: ri,
    useEffect: Ys,
    useImperativeHandle: Sf,
    useInsertionEffect: mf,
    useLayoutEffect: yf,
    useMemo: Fl,
    useReducer: Ri,
    useRef: vf,
    useState: function() {
      return Ri(zi);
    },
    useDebugValue: Gs,
    useDeferredValue: function(n) {
      var r = lt();
      return Ef(r, dt.memoizedState, n);
    },
    useTransition: function() {
      var n = Ri(zi)[0], r = lt().memoizedState;
      return [n, r];
    },
    useMutableSource: _i,
    useSyncExternalStore: ku,
    useId: Rf,
    unstable_isNewReconciler: !1
  }, Tn = { readContext: ri, useCallback: Qs, useContext: ri, useEffect: Ys, useImperativeHandle: Sf, useInsertionEffect: mf, useLayoutEffect: yf, useMemo: Fl, useReducer: yo, useRef: vf, useState: function() {
    return yo(zi);
  }, useDebugValue: Gs, useDeferredValue: function(n) {
    var r = lt();
    return dt === null ? r.memoizedState = n : Ef(r, dt.memoizedState, n);
  }, useTransition: function() {
    var n = yo(zi)[0], r = lt().memoizedState;
    return [n, r];
  }, useMutableSource: _i, useSyncExternalStore: ku, useId: Rf, unstable_isNewReconciler: !1 };
  function Ra(n, r) {
    if (n && n.defaultProps) {
      r = fe({}, r), n = n.defaultProps;
      for (var o in n) r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  function zu(n, r, o, u) {
    r = n.memoizedState, o = o(u, r), o = o == null ? r : fe({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var Zo = { isMounted: function(n) {
    return (n = n._reactInternals) ? ye(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var u = gr(), p = Ti(n), h = Ua(u, p);
    h.payload = r, o != null && (h.callback = o), r = za(n, h, p), r !== null && (ai(r, n, p, u), of(r, n, p));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var u = gr(), p = Ti(n), h = Ua(u, p);
    h.tag = 1, h.payload = r, o != null && (h.callback = o), r = za(n, h, p), r !== null && (ai(r, n, p, u), of(r, n, p));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = gr(), u = Ti(n), p = Ua(o, u);
    p.tag = 2, r != null && (p.callback = r), r = za(n, p, u), r !== null && (ai(r, n, u, o), of(r, n, u));
  } };
  function Ks(n, r, o, u, p, h, _) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, h, _) : r.prototype && r.prototype.isPureReactComponent ? !Su(o, u) || !Su(p, h) : !0;
  }
  function Uh(n, r, o) {
    var u = !1, p = Za, h = r.contextType;
    return typeof h == "object" && h !== null ? h = ri(h) : (p = ir(r) ? Qr : hr.current, u = r.contextTypes, h = (u = u != null) ? Aa(n, p) : Za), r = new r(o, h), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Zo, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = p, n.__reactInternalMemoizedMaskedChildContext = h), r;
  }
  function zh(n, r, o, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, u), r.state !== n && Zo.enqueueReplaceState(r, r.state, null);
  }
  function ap(n, r, o, u) {
    var p = n.stateNode;
    p.props = o, p.state = n.memoizedState, p.refs = {}, Qd(n);
    var h = r.contextType;
    typeof h == "object" && h !== null ? p.context = ri(h) : (h = ir(r) ? Qr : hr.current, p.context = Aa(n, h)), p.state = n.memoizedState, h = r.getDerivedStateFromProps, typeof h == "function" && (zu(n, r, h, o), p.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (r = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), r !== p.state && Zo.enqueueReplaceState(p, p.state, null), lf(n, o, p, u), p.state = n.memoizedState), typeof p.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Vu(n, r) {
    try {
      var o = "", u = r;
      do
        o += ce(u), u = u.return;
      while (u);
      var p = o;
    } catch (h) {
      p = `
Error generating stack: ` + h.message + `
` + h.stack;
    }
    return { value: n, source: r, stack: p, digest: null };
  }
  function qs(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function ip(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var op = typeof WeakMap == "function" ? WeakMap : Map;
  function lp(n, r, o) {
    o = Ua(-1, o), o.tag = 3, o.payload = { element: null };
    var u = r.value;
    return o.callback = function() {
      xf || (xf = !0, Ep = u), ip(n, r);
    }, o;
  }
  function Vh(n, r, o) {
    o = Ua(-1, o), o.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var p = r.value;
      o.payload = function() {
        return u(p);
      }, o.callback = function() {
        ip(n, r);
      };
    }
    var h = n.stateNode;
    return h !== null && typeof h.componentDidCatch == "function" && (o.callback = function() {
      ip(n, r), typeof u != "function" && (nl === null ? nl = /* @__PURE__ */ new Set([this]) : nl.add(this));
      var _ = r.stack;
      this.componentDidCatch(r.value, { componentStack: _ !== null ? _ : "" });
    }), o;
  }
  function jh(n, r, o) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new op();
      var p = /* @__PURE__ */ new Set();
      u.set(r, p);
    } else p = u.get(r), p === void 0 && (p = /* @__PURE__ */ new Set(), u.set(r, p));
    p.has(o) || (p.add(o), n = Hg.bind(null, n, r, o), r.then(n, n));
  }
  function Xs(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Fh(n, r, o, u, p) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = p, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = Ua(-1, 1), r.tag = 2, za(o, r, 1))), o.lanes |= 1), n);
  }
  var Ph = ve.ReactCurrentOwner, Kr = !1;
  function qr(n, r, o, u) {
    r.child = n === null ? kh(r, null, o, u) : qo(r, n.child, o, u);
  }
  function Jo(n, r, o, u, p) {
    o = o.render;
    var h = r.ref;
    return Cu(r, p), u = Ws(n, r, o, u, h, p), o = de(), n !== null && !Kr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~p, ji(n, r, p)) : (Dn && o && ef(r), r.flags |= 1, qr(n, r, u, p), r.child);
  }
  function ju(n, r, o, u, p) {
    if (n === null) {
      var h = o.type;
      return typeof h == "function" && !Tp(h) && h.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = h, el(n, r, h, u, p)) : (n = Df(o.type, null, u, r, r.mode, p), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (h = n.child, !(n.lanes & p)) {
      var _ = h.memoizedProps;
      if (o = o.compare, o = o !== null ? o : Su, o(_, u) && n.ref === r.ref) return ji(n, r, p);
    }
    return r.flags |= 1, n = ol(h, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function el(n, r, o, u, p) {
    if (n !== null) {
      var h = n.memoizedProps;
      if (Su(h, u) && n.ref === r.ref) if (Kr = !1, r.pendingProps = u = h, (n.lanes & p) !== 0) n.flags & 131072 && (Kr = !0);
      else return r.lanes = n.lanes, ji(n, r, p);
    }
    return tl(n, r, o, u, p);
  }
  function _f(n, r, o) {
    var u = r.pendingProps, p = u.children, h = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, on($l, ea), ea |= o;
    else {
      if (!(o & 1073741824)) return n = h !== null ? h.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, on($l, ea), ea |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = h !== null ? h.baseLanes : o, on($l, ea), ea |= u;
    }
    else h !== null ? (u = h.baseLanes | o, r.memoizedState = null) : u = o, on($l, ea), ea |= u;
    return qr(n, r, p, o), r.child;
  }
  function _a(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function tl(n, r, o, u, p) {
    var h = ir(o) ? Qr : hr.current;
    return h = Aa(r, h), Cu(r, p), o = Ws(n, r, o, u, h, p), u = de(), n !== null && !Kr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~p, ji(n, r, p)) : (Dn && u && ef(r), r.flags |= 1, qr(n, r, o, p), r.child);
  }
  function Ut(n, r, o, u, p) {
    if (ir(o)) {
      var h = !0;
      Ll(r);
    } else h = !1;
    if (Cu(r, p), r.stateNode === null) ec(n, r), Uh(r, o, u), ap(r, o, u, p), u = !0;
    else if (n === null) {
      var _ = r.stateNode, N = r.memoizedProps;
      _.props = N;
      var L = _.context, q = o.contextType;
      typeof q == "object" && q !== null ? q = ri(q) : (q = ir(o) ? Qr : hr.current, q = Aa(r, q));
      var me = o.getDerivedStateFromProps, Se = typeof me == "function" || typeof _.getSnapshotBeforeUpdate == "function";
      Se || typeof _.UNSAFE_componentWillReceiveProps != "function" && typeof _.componentWillReceiveProps != "function" || (N !== u || L !== q) && zh(r, _, u, q), Xo = !1;
      var pe = r.memoizedState;
      _.state = pe, lf(r, u, _, p), L = r.memoizedState, N !== u || pe !== L || Dt.current || Xo ? (typeof me == "function" && (zu(r, o, me, u), L = r.memoizedState), (N = Xo || Ks(r, o, N, u, pe, L, q)) ? (Se || typeof _.UNSAFE_componentWillMount != "function" && typeof _.componentWillMount != "function" || (typeof _.componentWillMount == "function" && _.componentWillMount(), typeof _.UNSAFE_componentWillMount == "function" && _.UNSAFE_componentWillMount()), typeof _.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof _.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = L), _.props = u, _.state = L, _.context = q, u = N) : (typeof _.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      _ = r.stateNode, Kd(n, r), N = r.memoizedProps, q = r.type === r.elementType ? N : Ra(r.type, N), _.props = q, Se = r.pendingProps, pe = _.context, L = o.contextType, typeof L == "object" && L !== null ? L = ri(L) : (L = ir(o) ? Qr : hr.current, L = Aa(r, L));
      var He = o.getDerivedStateFromProps;
      (me = typeof He == "function" || typeof _.getSnapshotBeforeUpdate == "function") || typeof _.UNSAFE_componentWillReceiveProps != "function" && typeof _.componentWillReceiveProps != "function" || (N !== Se || pe !== L) && zh(r, _, u, L), Xo = !1, pe = r.memoizedState, _.state = pe, lf(r, u, _, p);
      var Ze = r.memoizedState;
      N !== Se || pe !== Ze || Dt.current || Xo ? (typeof He == "function" && (zu(r, o, He, u), Ze = r.memoizedState), (q = Xo || Ks(r, o, q, u, pe, Ze, L) || !1) ? (me || typeof _.UNSAFE_componentWillUpdate != "function" && typeof _.componentWillUpdate != "function" || (typeof _.componentWillUpdate == "function" && _.componentWillUpdate(u, Ze, L), typeof _.UNSAFE_componentWillUpdate == "function" && _.UNSAFE_componentWillUpdate(u, Ze, L)), typeof _.componentDidUpdate == "function" && (r.flags |= 4), typeof _.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof _.componentDidUpdate != "function" || N === n.memoizedProps && pe === n.memoizedState || (r.flags |= 4), typeof _.getSnapshotBeforeUpdate != "function" || N === n.memoizedProps && pe === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = Ze), _.props = u, _.state = Ze, _.context = L, u = q) : (typeof _.componentDidUpdate != "function" || N === n.memoizedProps && pe === n.memoizedState || (r.flags |= 4), typeof _.getSnapshotBeforeUpdate != "function" || N === n.memoizedProps && pe === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return Fu(n, r, o, u, h, p);
  }
  function Fu(n, r, o, u, p, h) {
    _a(n, r);
    var _ = (r.flags & 128) !== 0;
    if (!u && !_) return p && wh(r, o, !1), ji(n, r, h);
    u = r.stateNode, Ph.current = r;
    var N = _ && typeof o.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && _ ? (r.child = qo(r, n.child, null, h), r.child = qo(r, null, N, h)) : qr(n, r, N, h), r.memoizedState = u.state, p && wh(r, o, !0), r.child;
  }
  function up(n) {
    var r = n.stateNode;
    r.pendingContext ? Oi(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Oi(n, r.context, !1), qd(n, r.containerInfo);
  }
  function zg(n, r, o, u, p) {
    return bu(), or(p), r.flags |= 256, qr(n, r, o, u), r.child;
  }
  var sp = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Zs(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Pu(n, r, o) {
    var u = r.pendingProps, p = Pn.current, h = !1, _ = (r.flags & 128) !== 0, N;
    if ((N = _) || (N = n !== null && n.memoizedState === null ? !1 : (p & 2) !== 0), N ? (h = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (p |= 1), on(Pn, p & 1), n === null)
      return nf(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (_ = u.children, n = u.fallback, h ? (u = r.mode, h = r.child, _ = { mode: "hidden", children: _ }, !(u & 1) && h !== null ? (h.childLanes = 0, h.pendingProps = _) : h = kf(_, u, 0, null), n = Kl(n, u, o, null), h.return = r, n.return = r, h.sibling = n, r.child = h, r.child.memoizedState = Zs(o), r.memoizedState = sp, n) : cp(r, _));
    if (p = n.memoizedState, p !== null && (N = p.dehydrated, N !== null)) return Vg(n, r, _, u, N, p, o);
    if (h) {
      h = u.fallback, _ = r.mode, p = n.child, N = p.sibling;
      var L = { mode: "hidden", children: u.children };
      return !(_ & 1) && r.child !== p ? (u = r.child, u.childLanes = 0, u.pendingProps = L, r.deletions = null) : (u = ol(p, L), u.subtreeFlags = p.subtreeFlags & 14680064), N !== null ? h = ol(N, h) : (h = Kl(h, _, o, null), h.flags |= 2), h.return = r, u.return = r, u.sibling = h, r.child = u, u = h, h = r.child, _ = n.child.memoizedState, _ = _ === null ? Zs(o) : { baseLanes: _.baseLanes | o, cachePool: null, transitions: _.transitions }, h.memoizedState = _, h.childLanes = n.childLanes & ~o, r.memoizedState = sp, u;
    }
    return h = n.child, n = h.sibling, u = ol(h, { mode: "visible", children: u.children }), !(r.mode & 1) && (u.lanes = o), u.return = r, u.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function cp(n, r) {
    return r = kf({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Js(n, r, o, u) {
    return u !== null && or(u), qo(r, n.child, null, o), n = cp(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Vg(n, r, o, u, p, h, _) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, u = qs(Error(d(422))), Js(n, r, _, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (h = u.fallback, p = r.mode, u = kf({ mode: "visible", children: u.children }, p, 0, null), h = Kl(h, p, _, null), h.flags |= 2, u.return = r, h.return = r, u.sibling = h, r.child = u, r.mode & 1 && qo(r, n.child, null, _), r.child.memoizedState = Zs(_), r.memoizedState = sp, h);
    if (!(r.mode & 1)) return Js(n, r, _, null);
    if (p.data === "$!") {
      if (u = p.nextSibling && p.nextSibling.dataset, u) var N = u.dgst;
      return u = N, h = Error(d(419)), u = qs(h, u, void 0), Js(n, r, _, u);
    }
    if (N = (_ & n.childLanes) !== 0, Kr || N) {
      if (u = Hn, u !== null) {
        switch (_ & -_) {
          case 4:
            p = 2;
            break;
          case 16:
            p = 8;
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
            p = 32;
            break;
          case 536870912:
            p = 268435456;
            break;
          default:
            p = 0;
        }
        p = p & (u.suspendedLanes | _) ? 0 : p, p !== 0 && p !== h.retryLane && (h.retryLane = p, ho(n, p), ai(u, n, p, -1));
      }
      return _p(), u = qs(Error(d(421))), Js(n, r, _, u);
    }
    return p.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Wg.bind(null, n), p._reactRetry = r, null) : (n = h.treeContext, Oa = ka(p.nextSibling), La = r, Dn = !0, ti = null, n !== null && (ya[ga++] = Sa, ya[ga++] = Cr, ya[ga++] = Ei, Sa = n.id, Cr = n.overflow, Ei = r), r = cp(r, u.children), r.flags |= 4096, r);
  }
  function bf(n, r, o) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), Yd(n.return, r, o);
  }
  function fp(n, r, o, u, p) {
    var h = n.memoizedState;
    h === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: o, tailMode: p } : (h.isBackwards = r, h.rendering = null, h.renderingStartTime = 0, h.last = u, h.tail = o, h.tailMode = p);
  }
  function dp(n, r, o) {
    var u = r.pendingProps, p = u.revealOrder, h = u.tail;
    if (qr(n, r, u.children, o), u = Pn.current, u & 2) u = u & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && bf(n, o, r);
        else if (n.tag === 19) bf(n, o, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      u &= 1;
    }
    if (on(Pn, u), !(r.mode & 1)) r.memoizedState = null;
    else switch (p) {
      case "forwards":
        for (o = r.child, p = null; o !== null; ) n = o.alternate, n !== null && Hs(n) === null && (p = o), o = o.sibling;
        o = p, o === null ? (p = r.child, r.child = null) : (p = o.sibling, o.sibling = null), fp(r, !1, p, o, h);
        break;
      case "backwards":
        for (o = null, p = r.child, r.child = null; p !== null; ) {
          if (n = p.alternate, n !== null && Hs(n) === null) {
            r.child = p;
            break;
          }
          n = p.sibling, p.sibling = o, o = p, p = n;
        }
        fp(r, !0, o, null, h);
        break;
      case "together":
        fp(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function ec(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function ji(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), Bl |= r.lanes, !(o & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(d(153));
    if (r.child !== null) {
      for (n = r.child, o = ol(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; ) n = n.sibling, o = o.sibling = ol(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function ja(n, r, o) {
    switch (r.tag) {
      case 3:
        up(r), bu();
        break;
      case 5:
        Oh(r);
        break;
      case 1:
        ir(r.type) && Ll(r);
        break;
      case 4:
        qd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, p = r.memoizedProps.value;
        on(af, u._currentValue), u._currentValue = p;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (on(Pn, Pn.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? Pu(n, r, o) : (on(Pn, Pn.current & 1), n = ji(n, r, o), n !== null ? n.sibling : null);
        on(Pn, Pn.current & 1);
        break;
      case 19:
        if (u = (o & r.childLanes) !== 0, n.flags & 128) {
          if (u) return dp(n, r, o);
          r.flags |= 128;
        }
        if (p = r.memoizedState, p !== null && (p.rendering = null, p.tail = null, p.lastEffect = null), on(Pn, Pn.current), u) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, _f(n, r, o);
    }
    return ji(n, r, o);
  }
  var Fi, bi, tc, $u;
  Fi = function(n, r) {
    for (var o = r.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6) n.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === r) break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === r) return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }, bi = function() {
  }, tc = function(n, r, o, u) {
    var p = n.memoizedProps;
    if (p !== u) {
      n = r.stateNode, zl(Ui.current);
      var h = null;
      switch (o) {
        case "input":
          p = Kt(n, p), u = Kt(n, u), h = [];
          break;
        case "select":
          p = fe({}, p, { value: void 0 }), u = fe({}, u, { value: void 0 }), h = [];
          break;
        case "textarea":
          p = Ur(n, p), u = Ur(n, u), h = [];
          break;
        default:
          typeof p.onClick != "function" && typeof u.onClick == "function" && (n.onclick = Xc);
      }
      O(o, u);
      var _;
      o = null;
      for (q in p) if (!u.hasOwnProperty(q) && p.hasOwnProperty(q) && p[q] != null) if (q === "style") {
        var N = p[q];
        for (_ in N) N.hasOwnProperty(_) && (o || (o = {}), o[_] = "");
      } else q !== "dangerouslySetInnerHTML" && q !== "children" && q !== "suppressContentEditableWarning" && q !== "suppressHydrationWarning" && q !== "autoFocus" && (g.hasOwnProperty(q) ? h || (h = []) : (h = h || []).push(q, null));
      for (q in u) {
        var L = u[q];
        if (N = p != null ? p[q] : void 0, u.hasOwnProperty(q) && L !== N && (L != null || N != null)) if (q === "style") if (N) {
          for (_ in N) !N.hasOwnProperty(_) || L && L.hasOwnProperty(_) || (o || (o = {}), o[_] = "");
          for (_ in L) L.hasOwnProperty(_) && N[_] !== L[_] && (o || (o = {}), o[_] = L[_]);
        } else o || (h || (h = []), h.push(
          q,
          o
        )), o = L;
        else q === "dangerouslySetInnerHTML" ? (L = L ? L.__html : void 0, N = N ? N.__html : void 0, L != null && N !== L && (h = h || []).push(q, L)) : q === "children" ? typeof L != "string" && typeof L != "number" || (h = h || []).push(q, "" + L) : q !== "suppressContentEditableWarning" && q !== "suppressHydrationWarning" && (g.hasOwnProperty(q) ? (L != null && q === "onScroll" && Sn("scroll", n), h || N === L || (h = [])) : (h = h || []).push(q, L));
      }
      o && (h = h || []).push("style", o);
      var q = h;
      (r.updateQueue = q) && (r.flags |= 4);
    }
  }, $u = function(n, r, o, u) {
    o !== u && (r.flags |= 4);
  };
  function Xr(n, r) {
    if (!Dn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var o = null; r !== null; ) r.alternate !== null && (o = r), r = r.sibling;
        o === null ? n.tail = null : o.sibling = null;
        break;
      case "collapsed":
        o = n.tail;
        for (var u = null; o !== null; ) o.alternate !== null && (u = o), o = o.sibling;
        u === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : u.sibling = null;
    }
  }
  function nn(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, u = 0;
    if (r) for (var p = n.child; p !== null; ) o |= p.lanes | p.childLanes, u |= p.subtreeFlags & 14680064, u |= p.flags & 14680064, p.return = n, p = p.sibling;
    else for (p = n.child; p !== null; ) o |= p.lanes | p.childLanes, u |= p.subtreeFlags, u |= p.flags, p.return = n, p = p.sibling;
    return n.subtreeFlags |= u, n.childLanes = o, r;
  }
  function jg(n, r, o) {
    var u = r.pendingProps;
    switch (tf(r), r.tag) {
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
        return nn(r), null;
      case 1:
        return ir(r.type) && ma(), nn(r), null;
      case 3:
        return u = r.stateNode, Nu(), it(Dt), it(hr), uf(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (rf(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ti !== null && (Wl(ti), ti = null))), bi(n, r), nn(r), null;
      case 5:
        Xd(r);
        var p = zl(xu.current);
        if (o = r.type, n !== null && r.stateNode != null) tc(n, r, o, u, p), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null) throw Error(d(166));
            return nn(r), null;
          }
          if (n = zl(Ui.current), rf(r)) {
            u = r.stateNode, o = r.type;
            var h = r.memoizedProps;
            switch (u[Xa] = r, u[Bs] = h, n = (r.mode & 1) !== 0, o) {
              case "dialog":
                Sn("cancel", u), Sn("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                Sn("load", u);
                break;
              case "video":
              case "audio":
                for (p = 0; p < uo.length; p++) Sn(uo[p], u);
                break;
              case "source":
                Sn("error", u);
                break;
              case "img":
              case "image":
              case "link":
                Sn(
                  "error",
                  u
                ), Sn("load", u);
                break;
              case "details":
                Sn("toggle", u);
                break;
              case "input":
                wn(u, h), Sn("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!h.multiple }, Sn("invalid", u);
                break;
              case "textarea":
                $r(u, h), Sn("invalid", u);
            }
            O(o, h), p = null;
            for (var _ in h) if (h.hasOwnProperty(_)) {
              var N = h[_];
              _ === "children" ? typeof N == "string" ? u.textContent !== N && (h.suppressHydrationWarning !== !0 && js(u.textContent, N, n), p = ["children", N]) : typeof N == "number" && u.textContent !== "" + N && (h.suppressHydrationWarning !== !0 && js(
                u.textContent,
                N,
                n
              ), p = ["children", "" + N]) : g.hasOwnProperty(_) && N != null && _ === "onScroll" && Sn("scroll", u);
            }
            switch (o) {
              case "input":
                Bt(u), zn(u, h, !0);
                break;
              case "textarea":
                Bt(u), Rr(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof h.onClick == "function" && (u.onclick = Xc);
            }
            u = p, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            _ = p.nodeType === 9 ? p : p.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = sr(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = _.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = _.createElement(o, { is: u.is }) : (n = _.createElement(o), o === "select" && (_ = n, u.multiple ? _.multiple = !0 : u.size && (_.size = u.size))) : n = _.createElementNS(n, o), n[Xa] = r, n[Bs] = u, Fi(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (_ = ue(o, u), o) {
                case "dialog":
                  Sn("cancel", n), Sn("close", n), p = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Sn("load", n), p = u;
                  break;
                case "video":
                case "audio":
                  for (p = 0; p < uo.length; p++) Sn(uo[p], n);
                  p = u;
                  break;
                case "source":
                  Sn("error", n), p = u;
                  break;
                case "img":
                case "image":
                case "link":
                  Sn(
                    "error",
                    n
                  ), Sn("load", n), p = u;
                  break;
                case "details":
                  Sn("toggle", n), p = u;
                  break;
                case "input":
                  wn(n, u), p = Kt(n, u), Sn("invalid", n);
                  break;
                case "option":
                  p = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, p = fe({}, u, { value: void 0 }), Sn("invalid", n);
                  break;
                case "textarea":
                  $r(n, u), p = Ur(n, u), Sn("invalid", n);
                  break;
                default:
                  p = u;
              }
              O(o, p), N = p;
              for (h in N) if (N.hasOwnProperty(h)) {
                var L = N[h];
                h === "style" ? Ot(n, L) : h === "dangerouslySetInnerHTML" ? (L = L ? L.__html : void 0, L != null && Br(n, L)) : h === "children" ? typeof L == "string" ? (o !== "textarea" || L !== "") && Ir(n, L) : typeof L == "number" && Ir(n, "" + L) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (g.hasOwnProperty(h) ? L != null && h === "onScroll" && Sn("scroll", n) : L != null && Te(n, h, L, _));
              }
              switch (o) {
                case "input":
                  Bt(n), zn(n, u, !1);
                  break;
                case "textarea":
                  Bt(n), Rr(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + Ae(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, h = u.value, h != null ? Bn(n, !!u.multiple, h, !1) : u.defaultValue != null && Bn(
                    n,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof p.onClick == "function" && (n.onclick = Xc);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u = !!u.autoFocus;
                  break e;
                case "img":
                  u = !0;
                  break e;
                default:
                  u = !1;
              }
            }
            u && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return nn(r), null;
      case 6:
        if (n && r.stateNode != null) $u(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null) throw Error(d(166));
          if (o = zl(xu.current), zl(Ui.current), rf(r)) {
            if (u = r.stateNode, o = r.memoizedProps, u[Xa] = r, (h = u.nodeValue !== o) && (n = La, n !== null)) switch (n.tag) {
              case 3:
                js(u.nodeValue, o, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && js(u.nodeValue, o, (n.mode & 1) !== 0);
            }
            h && (r.flags |= 4);
          } else u = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(u), u[Xa] = r, r.stateNode = u;
        }
        return nn(r), null;
      case 13:
        if (it(Pn), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Dn && Oa !== null && r.mode & 1 && !(r.flags & 128)) Nh(), bu(), r.flags |= 98560, h = !1;
          else if (h = rf(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!h) throw Error(d(318));
              if (h = r.memoizedState, h = h !== null ? h.dehydrated : null, !h) throw Error(d(317));
              h[Xa] = r;
            } else bu(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            nn(r), h = !1;
          } else ti !== null && (Wl(ti), ti = null), h = !0;
          if (!h) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = o, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, r.mode & 1 && (n === null || Pn.current & 1 ? fr === 0 && (fr = 3) : _p())), r.updateQueue !== null && (r.flags |= 4), nn(r), null);
      case 4:
        return Nu(), bi(n, r), n === null && Ai(r.stateNode.containerInfo), nn(r), null;
      case 10:
        return Ma(r.type._context), nn(r), null;
      case 17:
        return ir(r.type) && ma(), nn(r), null;
      case 19:
        if (it(Pn), h = r.memoizedState, h === null) return nn(r), null;
        if (u = (r.flags & 128) !== 0, _ = h.rendering, _ === null) if (u) Xr(h, !1);
        else {
          if (fr !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (_ = Hs(n), _ !== null) {
              for (r.flags |= 128, Xr(h, !1), u = _.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = o, o = r.child; o !== null; ) h = o, n = u, h.flags &= 14680066, _ = h.alternate, _ === null ? (h.childLanes = 0, h.lanes = n, h.child = null, h.subtreeFlags = 0, h.memoizedProps = null, h.memoizedState = null, h.updateQueue = null, h.dependencies = null, h.stateNode = null) : (h.childLanes = _.childLanes, h.lanes = _.lanes, h.child = _.child, h.subtreeFlags = 0, h.deletions = null, h.memoizedProps = _.memoizedProps, h.memoizedState = _.memoizedState, h.updateQueue = _.updateQueue, h.type = _.type, n = _.dependencies, h.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
              return on(Pn, Pn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          h.tail !== null && cn() > Il && (r.flags |= 128, u = !0, Xr(h, !1), r.lanes = 4194304);
        }
        else {
          if (!u) if (n = Hs(_), n !== null) {
            if (r.flags |= 128, u = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), Xr(h, !0), h.tail === null && h.tailMode === "hidden" && !_.alternate && !Dn) return nn(r), null;
          } else 2 * cn() - h.renderingStartTime > Il && o !== 1073741824 && (r.flags |= 128, u = !0, Xr(h, !1), r.lanes = 4194304);
          h.isBackwards ? (_.sibling = r.child, r.child = _) : (o = h.last, o !== null ? o.sibling = _ : r.child = _, h.last = _);
        }
        return h.tail !== null ? (r = h.tail, h.rendering = r, h.tail = r.sibling, h.renderingStartTime = cn(), r.sibling = null, o = Pn.current, on(Pn, u ? o & 1 | 2 : o & 1), r) : (nn(r), null);
      case 22:
      case 23:
        return Wu(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && r.mode & 1 ? ea & 1073741824 && (nn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : nn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(d(156, r.tag));
  }
  function Fg(n, r) {
    switch (tf(r), r.tag) {
      case 1:
        return ir(r.type) && ma(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Nu(), it(Dt), it(hr), uf(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Xd(r), null;
      case 13:
        if (it(Pn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(d(340));
          bu();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return it(Pn), null;
      case 4:
        return Nu(), null;
      case 10:
        return Ma(r.type._context), null;
      case 22:
      case 23:
        return Wu(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Tf = !1, mr = !1, $h = typeof WeakSet == "function" ? WeakSet : Set, Ge = null;
  function Pl(n, r) {
    var o = n.ref;
    if (o !== null) if (typeof o == "function") try {
      o(null);
    } catch (u) {
      Yn(n, r, u);
    }
    else o.current = null;
  }
  function pp(n, r, o) {
    try {
      o();
    } catch (u) {
      Yn(n, r, u);
    }
  }
  var Bh = !1;
  function vp(n, r) {
    if (zd = xl, n = vh(), Ls(n)) {
      if ("selectionStart" in n) var o = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        o = (o = n.ownerDocument) && o.defaultView || window;
        var u = o.getSelection && o.getSelection();
        if (u && u.rangeCount !== 0) {
          o = u.anchorNode;
          var p = u.anchorOffset, h = u.focusNode;
          u = u.focusOffset;
          try {
            o.nodeType, h.nodeType;
          } catch {
            o = null;
            break e;
          }
          var _ = 0, N = -1, L = -1, q = 0, me = 0, Se = n, pe = null;
          t: for (; ; ) {
            for (var He; Se !== o || p !== 0 && Se.nodeType !== 3 || (N = _ + p), Se !== h || u !== 0 && Se.nodeType !== 3 || (L = _ + u), Se.nodeType === 3 && (_ += Se.nodeValue.length), (He = Se.firstChild) !== null; )
              pe = Se, Se = He;
            for (; ; ) {
              if (Se === n) break t;
              if (pe === o && ++q === p && (N = _), pe === h && ++me === u && (L = _), (He = Se.nextSibling) !== null) break;
              Se = pe, pe = Se.parentNode;
            }
            Se = He;
          }
          o = N === -1 || L === -1 ? null : { start: N, end: L };
        } else o = null;
      }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (Vd = { focusedElem: n, selectionRange: o }, xl = !1, Ge = r; Ge !== null; ) if (r = Ge, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, Ge = n;
    else for (; Ge !== null; ) {
      r = Ge;
      try {
        var Ze = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Ze !== null) {
              var tt = Ze.memoizedProps, Xn = Ze.memoizedState, B = r.stateNode, V = B.getSnapshotBeforeUpdate(r.elementType === r.type ? tt : Ra(r.type, tt), Xn);
              B.__reactInternalSnapshotBeforeUpdate = V;
            }
            break;
          case 3:
            var G = r.stateNode.containerInfo;
            G.nodeType === 1 ? G.textContent = "" : G.nodeType === 9 && G.documentElement && G.removeChild(G.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(d(163));
        }
      } catch (xe) {
        Yn(r, r.return, xe);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, Ge = n;
        break;
      }
      Ge = r.return;
    }
    return Ze = Bh, Bh = !1, Ze;
  }
  function nc(n, r, o) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var p = u = u.next;
      do {
        if ((p.tag & n) === n) {
          var h = p.destroy;
          p.destroy = void 0, h !== void 0 && pp(r, o, h);
        }
        p = p.next;
      } while (p !== u);
    }
  }
  function rc(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & n) === n) {
          var u = o.create;
          o.destroy = u();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function hp(n) {
    var r = n.ref;
    if (r !== null) {
      var o = n.stateNode;
      switch (n.tag) {
        case 5:
          n = o;
          break;
        default:
          n = o;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function mp(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, mp(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Xa], delete r[Bs], delete r[$d], delete r[Ag], delete r[Lg])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Ih(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function yp(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Ih(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function gp(n, r, o) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = Xc));
    else if (u !== 4 && (n = n.child, n !== null)) for (gp(n, r, o), n = n.sibling; n !== null; ) gp(n, r, o), n = n.sibling;
  }
  function ac(n, r, o) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null)) for (ac(n, r, o), n = n.sibling; n !== null; ) ac(n, r, o), n = n.sibling;
  }
  var lr = null, yr = !1;
  function Zr(n, r, o) {
    for (o = o.child; o !== null; ) go(n, r, o), o = o.sibling;
  }
  function go(n, r, o) {
    if (da && typeof da.onCommitFiberUnmount == "function") try {
      da.onCommitFiberUnmount(Mo, o);
    } catch {
    }
    switch (o.tag) {
      case 5:
        mr || Pl(o, r);
      case 6:
        var u = lr, p = yr;
        lr = null, Zr(n, r, o), lr = u, yr = p, lr !== null && (yr ? (n = lr, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : lr.removeChild(o.stateNode));
        break;
      case 18:
        lr !== null && (yr ? (n = lr, o = o.stateNode, n.nodeType === 8 ? Pd(n.parentNode, o) : n.nodeType === 1 && Pd(n, o), qa(n)) : Pd(lr, o.stateNode));
        break;
      case 4:
        u = lr, p = yr, lr = o.stateNode.containerInfo, yr = !0, Zr(n, r, o), lr = u, yr = p;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!mr && (u = o.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          p = u = u.next;
          do {
            var h = p, _ = h.destroy;
            h = h.tag, _ !== void 0 && (h & 2 || h & 4) && pp(o, r, _), p = p.next;
          } while (p !== u);
        }
        Zr(n, r, o);
        break;
      case 1:
        if (!mr && (Pl(o, r), u = o.stateNode, typeof u.componentWillUnmount == "function")) try {
          u.props = o.memoizedProps, u.state = o.memoizedState, u.componentWillUnmount();
        } catch (N) {
          Yn(o, r, N);
        }
        Zr(n, r, o);
        break;
      case 21:
        Zr(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (mr = (u = mr) || o.memoizedState !== null, Zr(n, r, o), mr = u) : Zr(n, r, o);
        break;
      default:
        Zr(n, r, o);
    }
  }
  function Bu(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new $h()), r.forEach(function(u) {
        var p = bp.bind(null, n, u);
        o.has(u) || (o.add(u), u.then(p, p));
      });
    }
  }
  function Jr(n, r) {
    var o = r.deletions;
    if (o !== null) for (var u = 0; u < o.length; u++) {
      var p = o[u];
      try {
        var h = n, _ = r, N = _;
        e: for (; N !== null; ) {
          switch (N.tag) {
            case 5:
              lr = N.stateNode, yr = !1;
              break e;
            case 3:
              lr = N.stateNode.containerInfo, yr = !0;
              break e;
            case 4:
              lr = N.stateNode.containerInfo, yr = !0;
              break e;
          }
          N = N.return;
        }
        if (lr === null) throw Error(d(160));
        go(h, _, p), lr = null, yr = !1;
        var L = p.alternate;
        L !== null && (L.return = null), p.return = null;
      } catch (q) {
        Yn(p, r, q);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) So(r, n), r = r.sibling;
  }
  function So(n, r) {
    var o = n.alternate, u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Jr(r, n), Pi(n), u & 4) {
          try {
            nc(3, n, n.return), rc(3, n);
          } catch (tt) {
            Yn(n, n.return, tt);
          }
          try {
            nc(5, n, n.return);
          } catch (tt) {
            Yn(n, n.return, tt);
          }
        }
        break;
      case 1:
        Jr(r, n), Pi(n), u & 512 && o !== null && Pl(o, o.return);
        break;
      case 5:
        if (Jr(r, n), Pi(n), u & 512 && o !== null && Pl(o, o.return), n.flags & 32) {
          var p = n.stateNode;
          try {
            Ir(p, "");
          } catch (tt) {
            Yn(n, n.return, tt);
          }
        }
        if (u & 4 && (p = n.stateNode, p != null)) {
          var h = n.memoizedProps, _ = o !== null ? o.memoizedProps : h, N = n.type, L = n.updateQueue;
          if (n.updateQueue = null, L !== null) try {
            N === "input" && h.type === "radio" && h.name != null && en(p, h), ue(N, _);
            var q = ue(N, h);
            for (_ = 0; _ < L.length; _ += 2) {
              var me = L[_], Se = L[_ + 1];
              me === "style" ? Ot(p, Se) : me === "dangerouslySetInnerHTML" ? Br(p, Se) : me === "children" ? Ir(p, Se) : Te(p, me, Se, q);
            }
            switch (N) {
              case "input":
                qt(p, h);
                break;
              case "textarea":
                er(p, h);
                break;
              case "select":
                var pe = p._wrapperState.wasMultiple;
                p._wrapperState.wasMultiple = !!h.multiple;
                var He = h.value;
                He != null ? Bn(p, !!h.multiple, He, !1) : pe !== !!h.multiple && (h.defaultValue != null ? Bn(
                  p,
                  !!h.multiple,
                  h.defaultValue,
                  !0
                ) : Bn(p, !!h.multiple, h.multiple ? [] : "", !1));
            }
            p[Bs] = h;
          } catch (tt) {
            Yn(n, n.return, tt);
          }
        }
        break;
      case 6:
        if (Jr(r, n), Pi(n), u & 4) {
          if (n.stateNode === null) throw Error(d(162));
          p = n.stateNode, h = n.memoizedProps;
          try {
            p.nodeValue = h;
          } catch (tt) {
            Yn(n, n.return, tt);
          }
        }
        break;
      case 3:
        if (Jr(r, n), Pi(n), u & 4 && o !== null && o.memoizedState.isDehydrated) try {
          qa(r.containerInfo);
        } catch (tt) {
          Yn(n, n.return, tt);
        }
        break;
      case 4:
        Jr(r, n), Pi(n);
        break;
      case 13:
        Jr(r, n), Pi(n), p = n.child, p.flags & 8192 && (h = p.memoizedState !== null, p.stateNode.isHidden = h, !h || p.alternate !== null && p.alternate.memoizedState !== null || (uc = cn())), u & 4 && Bu(n);
        break;
      case 22:
        if (me = o !== null && o.memoizedState !== null, n.mode & 1 ? (mr = (q = mr) || me, Jr(r, n), mr = q) : Jr(r, n), Pi(n), u & 8192) {
          if (q = n.memoizedState !== null, (n.stateNode.isHidden = q) && !me && n.mode & 1) for (Ge = n, me = n.child; me !== null; ) {
            for (Se = Ge = me; Ge !== null; ) {
              switch (pe = Ge, He = pe.child, pe.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  nc(4, pe, pe.return);
                  break;
                case 1:
                  Pl(pe, pe.return);
                  var Ze = pe.stateNode;
                  if (typeof Ze.componentWillUnmount == "function") {
                    u = pe, o = pe.return;
                    try {
                      r = u, Ze.props = r.memoizedProps, Ze.state = r.memoizedState, Ze.componentWillUnmount();
                    } catch (tt) {
                      Yn(u, o, tt);
                    }
                  }
                  break;
                case 5:
                  Pl(pe, pe.return);
                  break;
                case 22:
                  if (pe.memoizedState !== null) {
                    Iu(Se);
                    continue;
                  }
              }
              He !== null ? (He.return = pe, Ge = He) : Iu(Se);
            }
            me = me.sibling;
          }
          e: for (me = null, Se = n; ; ) {
            if (Se.tag === 5) {
              if (me === null) {
                me = Se;
                try {
                  p = Se.stateNode, q ? (h = p.style, typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none") : (N = Se.stateNode, L = Se.memoizedProps.style, _ = L != null && L.hasOwnProperty("display") ? L.display : null, N.style.display = at("display", _));
                } catch (tt) {
                  Yn(n, n.return, tt);
                }
              }
            } else if (Se.tag === 6) {
              if (me === null) try {
                Se.stateNode.nodeValue = q ? "" : Se.memoizedProps;
              } catch (tt) {
                Yn(n, n.return, tt);
              }
            } else if ((Se.tag !== 22 && Se.tag !== 23 || Se.memoizedState === null || Se === n) && Se.child !== null) {
              Se.child.return = Se, Se = Se.child;
              continue;
            }
            if (Se === n) break e;
            for (; Se.sibling === null; ) {
              if (Se.return === null || Se.return === n) break e;
              me === Se && (me = null), Se = Se.return;
            }
            me === Se && (me = null), Se.sibling.return = Se.return, Se = Se.sibling;
          }
        }
        break;
      case 19:
        Jr(r, n), Pi(n), u & 4 && Bu(n);
        break;
      case 21:
        break;
      default:
        Jr(
          r,
          n
        ), Pi(n);
    }
  }
  function Pi(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var o = n.return; o !== null; ) {
            if (Ih(o)) {
              var u = o;
              break e;
            }
            o = o.return;
          }
          throw Error(d(160));
        }
        switch (u.tag) {
          case 5:
            var p = u.stateNode;
            u.flags & 32 && (Ir(p, ""), u.flags &= -33);
            var h = yp(n);
            ac(n, h, p);
            break;
          case 3:
          case 4:
            var _ = u.stateNode.containerInfo, N = yp(n);
            gp(n, N, _);
            break;
          default:
            throw Error(d(161));
        }
      } catch (L) {
        Yn(n, n.return, L);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Pg(n, r, o) {
    Ge = n, Hh(n);
  }
  function Hh(n, r, o) {
    for (var u = (n.mode & 1) !== 0; Ge !== null; ) {
      var p = Ge, h = p.child;
      if (p.tag === 22 && u) {
        var _ = p.memoizedState !== null || Tf;
        if (!_) {
          var N = p.alternate, L = N !== null && N.memoizedState !== null || mr;
          N = Tf;
          var q = mr;
          if (Tf = _, (mr = L) && !q) for (Ge = p; Ge !== null; ) _ = Ge, L = _.child, _.tag === 22 && _.memoizedState !== null ? Wh(p) : L !== null ? (L.return = _, Ge = L) : Wh(p);
          for (; h !== null; ) Ge = h, Hh(h), h = h.sibling;
          Ge = p, Tf = N, mr = q;
        }
        Sp(n);
      } else p.subtreeFlags & 8772 && h !== null ? (h.return = p, Ge = h) : Sp(n);
    }
  }
  function Sp(n) {
    for (; Ge !== null; ) {
      var r = Ge;
      if (r.flags & 8772) {
        var o = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              mr || rc(5, r);
              break;
            case 1:
              var u = r.stateNode;
              if (r.flags & 4 && !mr) if (o === null) u.componentDidMount();
              else {
                var p = r.elementType === r.type ? o.memoizedProps : Ra(r.type, o.memoizedProps);
                u.componentDidUpdate(p, o.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
              }
              var h = r.updateQueue;
              h !== null && Lh(r, h, u);
              break;
            case 3:
              var _ = r.updateQueue;
              if (_ !== null) {
                if (o = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    o = r.child.stateNode;
                    break;
                  case 1:
                    o = r.child.stateNode;
                }
                Lh(r, _, o);
              }
              break;
            case 5:
              var N = r.stateNode;
              if (o === null && r.flags & 4) {
                o = N;
                var L = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    L.autoFocus && o.focus();
                    break;
                  case "img":
                    L.src && (o.src = L.src);
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
              if (r.memoizedState === null) {
                var q = r.alternate;
                if (q !== null) {
                  var me = q.memoizedState;
                  if (me !== null) {
                    var Se = me.dehydrated;
                    Se !== null && qa(Se);
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
              throw Error(d(163));
          }
          mr || r.flags & 512 && hp(r);
        } catch (pe) {
          Yn(r, r.return, pe);
        }
      }
      if (r === n) {
        Ge = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, Ge = o;
        break;
      }
      Ge = r.return;
    }
  }
  function Iu(n) {
    for (; Ge !== null; ) {
      var r = Ge;
      if (r === n) {
        Ge = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, Ge = o;
        break;
      }
      Ge = r.return;
    }
  }
  function Wh(n) {
    for (; Ge !== null; ) {
      var r = Ge;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              rc(4, r);
            } catch (L) {
              Yn(r, o, L);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var p = r.return;
              try {
                u.componentDidMount();
              } catch (L) {
                Yn(r, p, L);
              }
            }
            var h = r.return;
            try {
              hp(r);
            } catch (L) {
              Yn(r, h, L);
            }
            break;
          case 5:
            var _ = r.return;
            try {
              hp(r);
            } catch (L) {
              Yn(r, _, L);
            }
        }
      } catch (L) {
        Yn(r, r.return, L);
      }
      if (r === n) {
        Ge = null;
        break;
      }
      var N = r.sibling;
      if (N !== null) {
        N.return = r.return, Ge = N;
        break;
      }
      Ge = r.return;
    }
  }
  var Yh = Math.ceil, Cf = ve.ReactCurrentDispatcher, Hu = ve.ReactCurrentOwner, Fa = ve.ReactCurrentBatchConfig, rn = 0, Hn = null, Un = null, Wn = 0, ea = 0, $l = En(0), fr = 0, ic = null, Bl = 0, wf = 0, oc = 0, lc = null, wr = null, uc = 0, Il = 1 / 0, Eo = null, xf = !1, Ep = null, nl = null, rl = !1, $i = null, al = 0, sc = 0, Rp = null, cc = -1, fc = 0;
  function gr() {
    return rn & 6 ? cn() : cc !== -1 ? cc : cc = cn();
  }
  function Ti(n) {
    return n.mode & 1 ? rn & 2 && Wn !== 0 ? Wn & -Wn : Og.transition !== null ? (fc === 0 && (fc = _l()), fc) : (n = Yt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Ts(n.type)), n) : 1;
  }
  function ai(n, r, o, u) {
    if (50 < sc) throw sc = 0, Rp = null, Error(d(185));
    zo(n, o, u), (!(rn & 2) || n !== Hn) && (n === Hn && (!(rn & 2) && (wf |= o), fr === 4 && Bi(n, Wn)), Cn(n, u), o === 1 && rn === 0 && !(r.mode & 1) && (Il = cn() + 500, Wo && Mi()));
  }
  function Cn(n, r) {
    var o = n.callbackNode;
    Uo(n, r);
    var u = Ni(n, n === Hn ? Wn : 0);
    if (u === 0) o !== null && gn(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (o != null && gn(o), r === 1) n.tag === 0 ? xh(Nf.bind(null, n)) : Jc(Nf.bind(null, n)), Ch(function() {
        !(rn & 6) && Mi();
      }), o = null;
      else {
        switch (Rs(u)) {
          case 1:
            o = ar;
            break;
          case 4:
            o = fa;
            break;
          case 16:
            o = Mt;
            break;
          case 536870912:
            o = Ji;
            break;
          default:
            o = Mt;
        }
        o = tm(o, Hl.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function Hl(n, r) {
    if (cc = -1, fc = 0, rn & 6) throw Error(d(327));
    var o = n.callbackNode;
    if (Gu() && n.callbackNode !== o) return null;
    var u = Ni(n, n === Hn ? Wn : 0);
    if (u === 0) return null;
    if (u & 30 || u & n.expiredLanes || r) r = Yu(n, u);
    else {
      r = u;
      var p = rn;
      rn |= 2;
      var h = Qh();
      (Hn !== n || Wn !== r) && (Eo = null, Il = cn() + 500, il(n, r));
      do
        try {
          Ig();
          break;
        } catch (N) {
          Gh(n, N);
        }
      while (!0);
      ni(), Cf.current = h, rn = p, Un !== null ? r = 0 : (Hn = null, Wn = 0, r = fr);
    }
    if (r !== 0) {
      if (r === 2 && (p = Di(n), p !== 0 && (u = p, r = dc(n, p))), r === 1) throw o = ic, il(n, 0), Bi(n, u), Cn(n, cn()), o;
      if (r === 6) Bi(n, u);
      else {
        if (p = n.current.alternate, !(u & 30) && !$g(p) && (r = Yu(n, u), r === 2 && (h = Di(n), h !== 0 && (u = h, r = dc(n, h))), r === 1)) throw o = ic, il(n, 0), Bi(n, u), Cn(n, cn()), o;
        switch (n.finishedWork = p, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(d(345));
          case 2:
            Ql(n, wr, Eo);
            break;
          case 3:
            if (Bi(n, u), (u & 130023424) === u && (r = uc + 500 - cn(), 10 < r)) {
              if (Ni(n, 0) !== 0) break;
              if (p = n.suspendedLanes, (p & u) !== u) {
                gr(), n.pingedLanes |= n.suspendedLanes & p;
                break;
              }
              n.timeoutHandle = Fs(Ql.bind(null, n, wr, Eo), r);
              break;
            }
            Ql(n, wr, Eo);
            break;
          case 4:
            if (Bi(n, u), (u & 4194240) === u) break;
            for (r = n.eventTimes, p = -1; 0 < u; ) {
              var _ = 31 - Gr(u);
              h = 1 << _, _ = r[_], _ > p && (p = _), u &= ~h;
            }
            if (u = p, u = cn() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * Yh(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = Fs(Ql.bind(null, n, wr, Eo), u);
              break;
            }
            Ql(n, wr, Eo);
            break;
          case 5:
            Ql(n, wr, Eo);
            break;
          default:
            throw Error(d(329));
        }
      }
    }
    return Cn(n, cn()), n.callbackNode === o ? Hl.bind(null, n) : null;
  }
  function dc(n, r) {
    var o = lc;
    return n.current.memoizedState.isDehydrated && (il(n, r).flags |= 256), n = Yu(n, r), n !== 2 && (r = wr, wr = o, r !== null && Wl(r)), n;
  }
  function Wl(n) {
    wr === null ? wr = n : wr.push.apply(wr, n);
  }
  function $g(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null)) for (var u = 0; u < o.length; u++) {
          var p = o[u], h = p.getSnapshot;
          p = p.value;
          try {
            if (!yi(h(), p)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (o = r.child, r.subtreeFlags & 16384 && o !== null) o.return = r, r = o;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Bi(n, r) {
    for (r &= ~oc, r &= ~wf, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - Gr(r), u = 1 << o;
      n[o] = -1, r &= ~u;
    }
  }
  function Nf(n) {
    if (rn & 6) throw Error(d(327));
    Gu();
    var r = Ni(n, 0);
    if (!(r & 1)) return Cn(n, cn()), null;
    var o = Yu(n, r);
    if (n.tag !== 0 && o === 2) {
      var u = Di(n);
      u !== 0 && (r = u, o = dc(n, u));
    }
    if (o === 1) throw o = ic, il(n, 0), Bi(n, r), Cn(n, cn()), o;
    if (o === 6) throw Error(d(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Ql(n, wr, Eo), Cn(n, cn()), null;
  }
  function Yl(n, r) {
    var o = rn;
    rn |= 1;
    try {
      return n(r);
    } finally {
      rn = o, rn === 0 && (Il = cn() + 500, Wo && Mi());
    }
  }
  function Gl(n) {
    $i !== null && $i.tag === 0 && !(rn & 6) && Gu();
    var r = rn;
    rn |= 1;
    var o = Fa.transition, u = Yt;
    try {
      if (Fa.transition = null, Yt = 1, n) return n();
    } finally {
      Yt = u, Fa.transition = o, rn = r, !(rn & 6) && Mi();
    }
  }
  function Wu() {
    ea = $l.current, it($l);
  }
  function il(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, Ps(o)), Un !== null) for (o = Un.return; o !== null; ) {
      var u = o;
      switch (tf(u), u.tag) {
        case 1:
          u = u.type.childContextTypes, u != null && ma();
          break;
        case 3:
          Nu(), it(Dt), it(hr), uf();
          break;
        case 5:
          Xd(u);
          break;
        case 4:
          Nu();
          break;
        case 13:
          it(Pn);
          break;
        case 19:
          it(Pn);
          break;
        case 10:
          Ma(u.type._context);
          break;
        case 22:
        case 23:
          Wu();
      }
      o = o.return;
    }
    if (Hn = n, Un = n = ol(n.current, null), Wn = ea = r, fr = 0, ic = null, oc = wf = Bl = 0, wr = lc = null, Ul !== null) {
      for (r = 0; r < Ul.length; r++) if (o = Ul[r], u = o.interleaved, u !== null) {
        o.interleaved = null;
        var p = u.next, h = o.pending;
        if (h !== null) {
          var _ = h.next;
          h.next = p, u.next = _;
        }
        o.pending = u;
      }
      Ul = null;
    }
    return n;
  }
  function Gh(n, r) {
    do {
      var o = Un;
      try {
        if (ni(), sf.current = Vi, kn) {
          for (var u = Ue.memoizedState; u !== null; ) {
            var p = u.queue;
            p !== null && (p.pending = null), u = u.next;
          }
          kn = !1;
        }
        if (mo = 0, Nt = dt = Ue = null, Ea = !1, Du = 0, Hu.current = null, o === null || o.return === null) {
          fr = 1, ic = r, Un = null;
          break;
        }
        e: {
          var h = n, _ = o.return, N = o, L = r;
          if (r = Wn, N.flags |= 32768, L !== null && typeof L == "object" && typeof L.then == "function") {
            var q = L, me = N, Se = me.tag;
            if (!(me.mode & 1) && (Se === 0 || Se === 11 || Se === 15)) {
              var pe = me.alternate;
              pe ? (me.updateQueue = pe.updateQueue, me.memoizedState = pe.memoizedState, me.lanes = pe.lanes) : (me.updateQueue = null, me.memoizedState = null);
            }
            var He = Xs(_);
            if (He !== null) {
              He.flags &= -257, Fh(He, _, N, h, r), He.mode & 1 && jh(h, q, r), r = He, L = q;
              var Ze = r.updateQueue;
              if (Ze === null) {
                var tt = /* @__PURE__ */ new Set();
                tt.add(L), r.updateQueue = tt;
              } else Ze.add(L);
              break e;
            } else {
              if (!(r & 1)) {
                jh(h, q, r), _p();
                break e;
              }
              L = Error(d(426));
            }
          } else if (Dn && N.mode & 1) {
            var Xn = Xs(_);
            if (Xn !== null) {
              !(Xn.flags & 65536) && (Xn.flags |= 256), Fh(Xn, _, N, h, r), or(Vu(L, N));
              break e;
            }
          }
          h = L = Vu(L, N), fr !== 4 && (fr = 2), lc === null ? lc = [h] : lc.push(h), h = _;
          do {
            switch (h.tag) {
              case 3:
                h.flags |= 65536, r &= -r, h.lanes |= r;
                var B = lp(h, L, r);
                Ah(h, B);
                break e;
              case 1:
                N = L;
                var V = h.type, G = h.stateNode;
                if (!(h.flags & 128) && (typeof V.getDerivedStateFromError == "function" || G !== null && typeof G.componentDidCatch == "function" && (nl === null || !nl.has(G)))) {
                  h.flags |= 65536, r &= -r, h.lanes |= r;
                  var xe = Vh(h, N, r);
                  Ah(h, xe);
                  break e;
                }
            }
            h = h.return;
          } while (h !== null);
        }
        qh(o);
      } catch (ot) {
        r = ot, Un === o && o !== null && (Un = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Qh() {
    var n = Cf.current;
    return Cf.current = Vi, n === null ? Vi : n;
  }
  function _p() {
    (fr === 0 || fr === 3 || fr === 2) && (fr = 4), Hn === null || !(Bl & 268435455) && !(wf & 268435455) || Bi(Hn, Wn);
  }
  function Yu(n, r) {
    var o = rn;
    rn |= 2;
    var u = Qh();
    (Hn !== n || Wn !== r) && (Eo = null, il(n, r));
    do
      try {
        Bg();
        break;
      } catch (p) {
        Gh(n, p);
      }
    while (!0);
    if (ni(), rn = o, Cf.current = u, Un !== null) throw Error(d(261));
    return Hn = null, Wn = 0, fr;
  }
  function Bg() {
    for (; Un !== null; ) Kh(Un);
  }
  function Ig() {
    for (; Un !== null && !Mn(); ) Kh(Un);
  }
  function Kh(n) {
    var r = em(n.alternate, n, ea);
    n.memoizedProps = n.pendingProps, r === null ? qh(n) : Un = r, Hu.current = null;
  }
  function qh(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (o = Fg(o, r), o !== null) {
          o.flags &= 32767, Un = o;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          fr = 6, Un = null;
          return;
        }
      } else if (o = jg(o, r, ea), o !== null) {
        Un = o;
        return;
      }
      if (r = r.sibling, r !== null) {
        Un = r;
        return;
      }
      Un = r = n;
    } while (r !== null);
    fr === 0 && (fr = 5);
  }
  function Ql(n, r, o) {
    var u = Yt, p = Fa.transition;
    try {
      Fa.transition = null, Yt = 1, Xh(n, r, o, u);
    } finally {
      Fa.transition = p, Yt = u;
    }
    return null;
  }
  function Xh(n, r, o, u) {
    do
      Gu();
    while ($i !== null);
    if (rn & 6) throw Error(d(327));
    o = n.finishedWork;
    var p = n.finishedLanes;
    if (o === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current) throw Error(d(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var h = o.lanes | o.childLanes;
    if (Ss(n, h), n === Hn && (Un = Hn = null, Wn = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || rl || (rl = !0, tm(Mt, function() {
      return Gu(), null;
    })), h = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || h) {
      h = Fa.transition, Fa.transition = null;
      var _ = Yt;
      Yt = 1;
      var N = rn;
      rn |= 4, Hu.current = null, vp(n, o), So(o, n), Nl(Vd), xl = !!zd, Vd = zd = null, n.current = o, Pg(o), Vr(), rn = N, Yt = _, Fa.transition = h;
    } else n.current = o;
    if (rl && (rl = !1, $i = n, al = p), h = n.pendingLanes, h === 0 && (nl = null), hs(o.stateNode), Cn(n, cn()), r !== null) for (u = n.onRecoverableError, o = 0; o < r.length; o++) p = r[o], u(p.value, { componentStack: p.stack, digest: p.digest });
    if (xf) throw xf = !1, n = Ep, Ep = null, n;
    return al & 1 && n.tag !== 0 && Gu(), h = n.pendingLanes, h & 1 ? n === Rp ? sc++ : (sc = 0, Rp = n) : sc = 0, Mi(), null;
  }
  function Gu() {
    if ($i !== null) {
      var n = Rs(al), r = Fa.transition, o = Yt;
      try {
        if (Fa.transition = null, Yt = 16 > n ? 16 : n, $i === null) var u = !1;
        else {
          if (n = $i, $i = null, al = 0, rn & 6) throw Error(d(331));
          var p = rn;
          for (rn |= 4, Ge = n.current; Ge !== null; ) {
            var h = Ge, _ = h.child;
            if (Ge.flags & 16) {
              var N = h.deletions;
              if (N !== null) {
                for (var L = 0; L < N.length; L++) {
                  var q = N[L];
                  for (Ge = q; Ge !== null; ) {
                    var me = Ge;
                    switch (me.tag) {
                      case 0:
                      case 11:
                      case 15:
                        nc(8, me, h);
                    }
                    var Se = me.child;
                    if (Se !== null) Se.return = me, Ge = Se;
                    else for (; Ge !== null; ) {
                      me = Ge;
                      var pe = me.sibling, He = me.return;
                      if (mp(me), me === q) {
                        Ge = null;
                        break;
                      }
                      if (pe !== null) {
                        pe.return = He, Ge = pe;
                        break;
                      }
                      Ge = He;
                    }
                  }
                }
                var Ze = h.alternate;
                if (Ze !== null) {
                  var tt = Ze.child;
                  if (tt !== null) {
                    Ze.child = null;
                    do {
                      var Xn = tt.sibling;
                      tt.sibling = null, tt = Xn;
                    } while (tt !== null);
                  }
                }
                Ge = h;
              }
            }
            if (h.subtreeFlags & 2064 && _ !== null) _.return = h, Ge = _;
            else e: for (; Ge !== null; ) {
              if (h = Ge, h.flags & 2048) switch (h.tag) {
                case 0:
                case 11:
                case 15:
                  nc(9, h, h.return);
              }
              var B = h.sibling;
              if (B !== null) {
                B.return = h.return, Ge = B;
                break e;
              }
              Ge = h.return;
            }
          }
          var V = n.current;
          for (Ge = V; Ge !== null; ) {
            _ = Ge;
            var G = _.child;
            if (_.subtreeFlags & 2064 && G !== null) G.return = _, Ge = G;
            else e: for (_ = V; Ge !== null; ) {
              if (N = Ge, N.flags & 2048) try {
                switch (N.tag) {
                  case 0:
                  case 11:
                  case 15:
                    rc(9, N);
                }
              } catch (ot) {
                Yn(N, N.return, ot);
              }
              if (N === _) {
                Ge = null;
                break e;
              }
              var xe = N.sibling;
              if (xe !== null) {
                xe.return = N.return, Ge = xe;
                break e;
              }
              Ge = N.return;
            }
          }
          if (rn = p, Mi(), da && typeof da.onPostCommitFiberRoot == "function") try {
            da.onPostCommitFiberRoot(Mo, n);
          } catch {
          }
          u = !0;
        }
        return u;
      } finally {
        Yt = o, Fa.transition = r;
      }
    }
    return !1;
  }
  function Zh(n, r, o) {
    r = Vu(o, r), r = lp(n, r, 1), n = za(n, r, 1), r = gr(), n !== null && (zo(n, 1, r), Cn(n, r));
  }
  function Yn(n, r, o) {
    if (n.tag === 3) Zh(n, n, o);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Zh(r, n, o);
        break;
      } else if (r.tag === 1) {
        var u = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (nl === null || !nl.has(u))) {
          n = Vu(o, n), n = Vh(r, n, 1), r = za(r, n, 1), n = gr(), r !== null && (zo(r, 1, n), Cn(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Hg(n, r, o) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = gr(), n.pingedLanes |= n.suspendedLanes & o, Hn === n && (Wn & o) === o && (fr === 4 || fr === 3 && (Wn & 130023424) === Wn && 500 > cn() - uc ? il(n, 0) : oc |= o), Cn(n, r);
  }
  function Jh(n, r) {
    r === 0 && (n.mode & 1 ? (r = cu, cu <<= 1, !(cu & 130023424) && (cu = 4194304)) : r = 1);
    var o = gr();
    n = ho(n, r), n !== null && (zo(n, r, o), Cn(n, o));
  }
  function Wg(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), Jh(n, o);
  }
  function bp(n, r) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var u = n.stateNode, p = n.memoizedState;
        p !== null && (o = p.retryLane);
        break;
      case 19:
        u = n.stateNode;
        break;
      default:
        throw Error(d(314));
    }
    u !== null && u.delete(r), Jh(n, o);
  }
  var em;
  em = function(n, r, o) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Dt.current) Kr = !0;
    else {
      if (!(n.lanes & o) && !(r.flags & 128)) return Kr = !1, ja(n, r, o);
      Kr = !!(n.flags & 131072);
    }
    else Kr = !1, Dn && r.flags & 1048576 && Go(r, Ol, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        ec(n, r), n = r.pendingProps;
        var p = Aa(r, hr.current);
        Cu(r, o), p = Ws(null, r, u, n, p, o);
        var h = de();
        return r.flags |= 1, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, ir(u) ? (h = !0, Ll(r)) : h = !1, r.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Qd(r), p.updater = Zo, r.stateNode = p, p._reactInternals = r, ap(r, u, n, o), r = Fu(null, r, u, !0, h, o)) : (r.tag = 0, Dn && h && ef(r), qr(null, r, p, o), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (ec(n, r), n = r.pendingProps, p = u._init, u = p(u._payload), r.type = u, p = r.tag = Gg(u), n = Ra(u, n), p) {
            case 0:
              r = tl(null, r, u, n, o);
              break e;
            case 1:
              r = Ut(null, r, u, n, o);
              break e;
            case 11:
              r = Jo(null, r, u, n, o);
              break e;
            case 14:
              r = ju(null, r, u, Ra(u.type, n), o);
              break e;
          }
          throw Error(d(
            306,
            u,
            ""
          ));
        }
        return r;
      case 0:
        return u = r.type, p = r.pendingProps, p = r.elementType === u ? p : Ra(u, p), tl(n, r, u, p, o);
      case 1:
        return u = r.type, p = r.pendingProps, p = r.elementType === u ? p : Ra(u, p), Ut(n, r, u, p, o);
      case 3:
        e: {
          if (up(r), n === null) throw Error(d(387));
          u = r.pendingProps, h = r.memoizedState, p = h.element, Kd(n, r), lf(r, u, null, o);
          var _ = r.memoizedState;
          if (u = _.element, h.isDehydrated) if (h = { element: u, isDehydrated: !1, cache: _.cache, pendingSuspenseBoundaries: _.pendingSuspenseBoundaries, transitions: _.transitions }, r.updateQueue.baseState = h, r.memoizedState = h, r.flags & 256) {
            p = Vu(Error(d(423)), r), r = zg(n, r, u, o, p);
            break e;
          } else if (u !== p) {
            p = Vu(Error(d(424)), r), r = zg(n, r, u, o, p);
            break e;
          } else for (Oa = ka(r.stateNode.containerInfo.firstChild), La = r, Dn = !0, ti = null, o = kh(r, null, u, o), r.child = o; o; ) o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (bu(), u === p) {
              r = ji(n, r, o);
              break e;
            }
            qr(n, r, u, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Oh(r), n === null && nf(r), u = r.type, p = r.pendingProps, h = n !== null ? n.memoizedProps : null, _ = p.children, Al(u, p) ? _ = null : h !== null && Al(u, h) && (r.flags |= 32), _a(n, r), qr(n, r, _, o), r.child;
      case 6:
        return n === null && nf(r), null;
      case 13:
        return Pu(n, r, o);
      case 4:
        return qd(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = qo(r, null, u, o) : qr(n, r, u, o), r.child;
      case 11:
        return u = r.type, p = r.pendingProps, p = r.elementType === u ? p : Ra(u, p), Jo(n, r, u, p, o);
      case 7:
        return qr(n, r, r.pendingProps, o), r.child;
      case 8:
        return qr(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return qr(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (u = r.type._context, p = r.pendingProps, h = r.memoizedProps, _ = p.value, on(af, u._currentValue), u._currentValue = _, h !== null) if (yi(h.value, _)) {
            if (h.children === p.children && !Dt.current) {
              r = ji(n, r, o);
              break e;
            }
          } else for (h = r.child, h !== null && (h.return = r); h !== null; ) {
            var N = h.dependencies;
            if (N !== null) {
              _ = h.child;
              for (var L = N.firstContext; L !== null; ) {
                if (L.context === u) {
                  if (h.tag === 1) {
                    L = Ua(-1, o & -o), L.tag = 2;
                    var q = h.updateQueue;
                    if (q !== null) {
                      q = q.shared;
                      var me = q.pending;
                      me === null ? L.next = L : (L.next = me.next, me.next = L), q.pending = L;
                    }
                  }
                  h.lanes |= o, L = h.alternate, L !== null && (L.lanes |= o), Yd(
                    h.return,
                    o,
                    r
                  ), N.lanes |= o;
                  break;
                }
                L = L.next;
              }
            } else if (h.tag === 10) _ = h.type === r.type ? null : h.child;
            else if (h.tag === 18) {
              if (_ = h.return, _ === null) throw Error(d(341));
              _.lanes |= o, N = _.alternate, N !== null && (N.lanes |= o), Yd(_, o, r), _ = h.sibling;
            } else _ = h.child;
            if (_ !== null) _.return = h;
            else for (_ = h; _ !== null; ) {
              if (_ === r) {
                _ = null;
                break;
              }
              if (h = _.sibling, h !== null) {
                h.return = _.return, _ = h;
                break;
              }
              _ = _.return;
            }
            h = _;
          }
          qr(n, r, p.children, o), r = r.child;
        }
        return r;
      case 9:
        return p = r.type, u = r.pendingProps.children, Cu(r, o), p = ri(p), u = u(p), r.flags |= 1, qr(n, r, u, o), r.child;
      case 14:
        return u = r.type, p = Ra(u, r.pendingProps), p = Ra(u.type, p), ju(n, r, u, p, o);
      case 15:
        return el(n, r, r.type, r.pendingProps, o);
      case 17:
        return u = r.type, p = r.pendingProps, p = r.elementType === u ? p : Ra(u, p), ec(n, r), r.tag = 1, ir(u) ? (n = !0, Ll(r)) : n = !1, Cu(r, o), Uh(r, u, p), ap(r, u, p, o), Fu(null, r, u, !0, n, o);
      case 19:
        return dp(n, r, o);
      case 22:
        return _f(n, r, o);
    }
    throw Error(d(156, r.tag));
  };
  function tm(n, r) {
    return rr(n, r);
  }
  function Yg(n, r, o, u) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Pa(n, r, o, u) {
    return new Yg(n, r, o, u);
  }
  function Tp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Gg(n) {
    if (typeof n == "function") return Tp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === _t) return 11;
      if (n === ct) return 14;
    }
    return 2;
  }
  function ol(n, r) {
    var o = n.alternate;
    return o === null ? (o = Pa(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function Df(n, r, o, u, p, h) {
    var _ = 2;
    if (u = n, typeof n == "function") Tp(n) && (_ = 1);
    else if (typeof n == "string") _ = 5;
    else e: switch (n) {
      case qe:
        return Kl(o.children, p, h, r);
      case Re:
        _ = 8, p |= 8;
        break;
      case nt:
        return n = Pa(12, o, r, p | 2), n.elementType = nt, n.lanes = h, n;
      case pt:
        return n = Pa(13, o, r, p), n.elementType = pt, n.lanes = h, n;
      case Ie:
        return n = Pa(19, o, r, p), n.elementType = Ie, n.lanes = h, n;
      case ft:
        return kf(o, p, h, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Be:
            _ = 10;
            break e;
          case rt:
            _ = 9;
            break e;
          case _t:
            _ = 11;
            break e;
          case ct:
            _ = 14;
            break e;
          case St:
            _ = 16, u = null;
            break e;
        }
        throw Error(d(130, n == null ? n : typeof n, ""));
    }
    return r = Pa(_, o, r, p), r.elementType = n, r.type = u, r.lanes = h, r;
  }
  function Kl(n, r, o, u) {
    return n = Pa(7, n, u, r), n.lanes = o, n;
  }
  function kf(n, r, o, u) {
    return n = Pa(22, n, u, r), n.elementType = ft, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function Cp(n, r, o) {
    return n = Pa(6, n, null, r), n.lanes = o, n;
  }
  function Af(n, r, o) {
    return r = Pa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function wp(n, r, o, u, p) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = bl(0), this.expirationTimes = bl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = bl(0), this.identifierPrefix = u, this.onRecoverableError = p, this.mutableSourceEagerHydrationData = null;
  }
  function ql(n, r, o, u, p, h, _, N, L) {
    return n = new wp(n, r, o, N, L), r === 1 ? (r = 1, h === !0 && (r |= 8)) : r = 0, h = Pa(3, null, null, r), n.current = h, h.stateNode = n, h.memoizedState = { element: u, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Qd(h), n;
  }
  function Qg(n, r, o) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ce, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: o };
  }
  function xp(n) {
    if (!n) return Za;
    n = n._reactInternals;
    e: {
      if (ye(n) !== n || n.tag !== 1) throw Error(d(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (ir(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(d(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (ir(o)) return Ho(n, o, r);
    }
    return r;
  }
  function Np(n, r, o, u, p, h, _, N, L) {
    return n = ql(o, u, !0, n, p, h, _, N, L), n.context = xp(null), o = n.current, u = gr(), p = Ti(o), h = Ua(u, p), h.callback = r ?? null, za(o, h, p), n.current.lanes = p, zo(n, p, u), Cn(n, u), n;
  }
  function pc(n, r, o, u) {
    var p = r.current, h = gr(), _ = Ti(p);
    return o = xp(o), r.context === null ? r.context = o : r.pendingContext = o, r = Ua(h, _), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = za(p, r, _), n !== null && (ai(n, p, _, h), of(n, p, _)), _;
  }
  function Lf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Dp(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function kp(n, r) {
    Dp(n, r), (n = n.alternate) && Dp(n, r);
  }
  function Kg() {
    return null;
  }
  var nm = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Of(n) {
    this._internalRoot = n;
  }
  vc.prototype.render = Of.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(d(409));
    pc(n, r, null, null);
  }, vc.prototype.unmount = Of.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Gl(function() {
        pc(null, n, null, null);
      }), r[gi] = null;
    }
  };
  function vc(n) {
    this._internalRoot = n;
  }
  vc.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Gt();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < xn.length && r !== 0 && r < xn[o].priority; o++) ;
      xn.splice(o, 0, n), o === 0 && hi(n);
    }
  };
  function Mf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Ro(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function rm() {
  }
  function qg(n, r, o, u, p) {
    if (p) {
      if (typeof u == "function") {
        var h = u;
        u = function() {
          var q = Lf(_);
          h.call(q);
        };
      }
      var _ = Np(r, u, n, 0, null, !1, !1, "", rm);
      return n._reactRootContainer = _, n[gi] = _.current, Ai(n.nodeType === 8 ? n.parentNode : n), Gl(), _;
    }
    for (; p = n.lastChild; ) n.removeChild(p);
    if (typeof u == "function") {
      var N = u;
      u = function() {
        var q = Lf(L);
        N.call(q);
      };
    }
    var L = ql(n, 0, !1, null, null, !1, !1, "", rm);
    return n._reactRootContainer = L, n[gi] = L.current, Ai(n.nodeType === 8 ? n.parentNode : n), Gl(function() {
      pc(r, L, o, u);
    }), L;
  }
  function Uf(n, r, o, u, p) {
    var h = o._reactRootContainer;
    if (h) {
      var _ = h;
      if (typeof p == "function") {
        var N = p;
        p = function() {
          var L = Lf(_);
          N.call(L);
        };
      }
      pc(r, _, n, p);
    } else _ = qg(o, r, n, p, u);
    return Lf(_);
  }
  fu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = eo(r.pendingLanes);
          o !== 0 && (Es(r, o | 1), Cn(r, cn()), !(rn & 6) && (Il = cn() + 500, Mi()));
        }
        break;
      case 13:
        Gl(function() {
          var u = ho(n, 1);
          if (u !== null) {
            var p = gr();
            ai(u, n, 1, p);
          }
        }), kp(n, 1);
    }
  }, Vo = function(n) {
    if (n.tag === 13) {
      var r = ho(n, 134217728);
      if (r !== null) {
        var o = gr();
        ai(r, n, 134217728, o);
      }
      kp(n, 134217728);
    }
  }, _s = function(n) {
    if (n.tag === 13) {
      var r = Ti(n), o = ho(n, r);
      if (o !== null) {
        var u = gr();
        ai(o, n, r, u);
      }
      kp(n, r);
    }
  }, Gt = function() {
    return Yt;
  }, du = function(n, r) {
    var o = Yt;
    try {
      return Yt = n, r();
    } finally {
      Yt = o;
    }
  }, _e = function(n, r, o) {
    switch (r) {
      case "input":
        if (qt(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; ) o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var u = o[r];
            if (u !== n && u.form === n.form) {
              var p = Zc(u);
              if (!p) throw Error(d(90));
              Lt(u), qt(u, p);
            }
          }
        }
        break;
      case "textarea":
        er(n, o);
        break;
      case "select":
        r = o.value, r != null && Bn(n, !!o.multiple, r, !1);
    }
  }, Vn = Yl, bn = Gl;
  var Xg = { usingClientEntryPoint: !1, Events: [Li, _u, Zc, bt, It, Yl] }, hc = { findFiberByHostInstance: fo, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Zg = { bundleType: hc.bundleType, version: hc.version, rendererPackageName: hc.rendererPackageName, rendererConfig: hc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ve.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = gt(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: hc.findFiberByHostInstance || Kg, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var mc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!mc.isDisabled && mc.supportsFiber) try {
      Mo = mc.inject(Zg), da = mc;
    } catch {
    }
  }
  return ci.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xg, ci.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Mf(r)) throw Error(d(200));
    return Qg(n, r, null, o);
  }, ci.createRoot = function(n, r) {
    if (!Mf(n)) throw Error(d(299));
    var o = !1, u = "", p = nm;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (p = r.onRecoverableError)), r = ql(n, 1, !1, null, null, o, !1, u, p), n[gi] = r.current, Ai(n.nodeType === 8 ? n.parentNode : n), new Of(r);
  }, ci.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(d(188)) : (n = Object.keys(n).join(","), Error(d(268, n)));
    return n = gt(r), n = n === null ? null : n.stateNode, n;
  }, ci.flushSync = function(n) {
    return Gl(n);
  }, ci.hydrate = function(n, r, o) {
    if (!Ro(r)) throw Error(d(200));
    return Uf(null, n, r, !0, o);
  }, ci.hydrateRoot = function(n, r, o) {
    if (!Mf(n)) throw Error(d(405));
    var u = o != null && o.hydratedSources || null, p = !1, h = "", _ = nm;
    if (o != null && (o.unstable_strictMode === !0 && (p = !0), o.identifierPrefix !== void 0 && (h = o.identifierPrefix), o.onRecoverableError !== void 0 && (_ = o.onRecoverableError)), r = Np(r, null, n, 1, o ?? null, p, !1, h, _), n[gi] = r.current, Ai(n), u) for (n = 0; n < u.length; n++) o = u[n], p = o._getVersion, p = p(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, p] : r.mutableSourceEagerHydrationData.push(
      o,
      p
    );
    return new vc(r);
  }, ci.render = function(n, r, o) {
    if (!Ro(r)) throw Error(d(200));
    return Uf(null, n, r, !1, o);
  }, ci.unmountComponentAtNode = function(n) {
    if (!Ro(n)) throw Error(d(40));
    return n._reactRootContainer ? (Gl(function() {
      Uf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[gi] = null;
      });
    }), !0) : !1;
  }, ci.unstable_batchedUpdates = Yl, ci.unstable_renderSubtreeIntoContainer = function(n, r, o, u) {
    if (!Ro(o)) throw Error(d(200));
    if (n == null || n._reactInternals === void 0) throw Error(d(38));
    return Uf(n, r, o, !1, u);
  }, ci.version = "18.3.1-next-f1338f8080-20240426", ci;
}
var fi = {}, yC;
function uL() {
  if (yC) return fi;
  yC = 1;
  var c = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return c.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var f = $v(), d = WC(), m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, g = !1;
    function T(e) {
      g = e;
    }
    function w(e) {
      if (!g) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        U("warn", e, a);
      }
    }
    function S(e) {
      if (!g) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        U("error", e, a);
      }
    }
    function U(e, t, a) {
      {
        var i = m.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var s = a.map(function(v) {
          return String(v);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var M = 0, $ = 1, J = 2, Z = 3, le = 4, I = 5, ae = 6, Pe = 7, wt = 8, De = 9, Te = 10, ve = 11, Ke = 12, Ce = 13, qe = 14, Re = 15, nt = 16, Be = 17, rt = 18, _t = 19, pt = 21, Ie = 22, ct = 23, St = 24, ft = 25, ie = !0, ze = !1, fe = !1, A = !1, x = !1, P = !0, Y = !1, ce = !0, se = !0, ke = !0, Ae = !0, Ne = /* @__PURE__ */ new Set(), vt = {}, Bt = {};
    function Lt(e, t) {
      Ft(e, t), Ft(e + "Capture", t);
    }
    function Ft(e, t) {
      vt[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), vt[e] = t;
      {
        var a = e.toLowerCase();
        Bt[a] = e, e === "onDoubleClick" && (Bt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Ne.add(t[i]);
    }
    var Kt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", wn = Object.prototype.hasOwnProperty;
    function en(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function qt(e) {
      try {
        return zn(e), !1;
      } catch {
        return !0;
      }
    }
    function zn(e) {
      return "" + e;
    }
    function Er(e, t) {
      if (qt(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, en(e)), zn(e);
    }
    function Jn(e) {
      if (qt(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", en(e)), zn(e);
    }
    function Bn(e, t) {
      if (qt(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, en(e)), zn(e);
    }
    function Ur(e, t) {
      if (qt(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, en(e)), zn(e);
    }
    function $r(e) {
      if (qt(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", en(e)), zn(e);
    }
    function er(e) {
      if (qt(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", en(e)), zn(e);
    }
    var Rr = 0, sr = 1, _r = 2, _n = 3, Br = 4, Ir = 5, Hr = 6, Le = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", at = Le + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ot = new RegExp("^[" + Le + "][" + at + "]*$"), F = {}, O = {};
    function ue(e) {
      return wn.call(O, e) ? !0 : wn.call(F, e) ? !1 : Ot.test(e) ? (O[e] = !0, !0) : (F[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function ge(e, t, a) {
      return t !== null ? t.type === Rr : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function be(e, t, a, i) {
      if (a !== null && a.type === Rr)
        return !1;
      switch (typeof t) {
        case "function":
        // $FlowIssue symbol is perfectly valid here
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var l = e.toLowerCase().slice(0, 5);
          return l !== "data-" && l !== "aria-";
        }
        default:
          return !1;
      }
    }
    function _e(e, t, a, i) {
      if (t === null || typeof t > "u" || be(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case _n:
            return !t;
          case Br:
            return t === !1;
          case Ir:
            return isNaN(t);
          case Hr:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Xe(e) {
      return Ve.hasOwnProperty(e) ? Ve[e] : null;
    }
    function Oe(e, t, a, i, l, s, v) {
      this.acceptsBooleans = t === _r || t === _n || t === Br, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = v;
    }
    var Ve = {}, bt = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    bt.forEach(function(e) {
      Ve[e] = new Oe(
        e,
        Rr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Ve[t] = new Oe(
        t,
        sr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Ve[e] = new Oe(
        e,
        _r,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Ve[e] = new Oe(
        e,
        _r,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Ve[e] = new Oe(
        e,
        _n,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Ve[e] = new Oe(
        e,
        _n,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Ve[e] = new Oe(
        e,
        Br,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Ve[e] = new Oe(
        e,
        Hr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Ve[e] = new Oe(
        e,
        Ir,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var It = /[\-\:]([a-z])/g, Vn = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(It, Vn);
      Ve[t] = new Oe(
        t,
        sr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(It, Vn);
      Ve[t] = new Oe(
        t,
        sr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(It, Vn);
      Ve[t] = new Oe(
        t,
        sr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Ve[e] = new Oe(
        e,
        sr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var bn = "xlinkHref";
    Ve[bn] = new Oe(
      "xlinkHref",
      sr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Ve[e] = new Oe(
        e,
        sr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var tr = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, nr = !1;
    function pr(e) {
      !nr && tr.test(e) && (nr = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function zr(e, t, a, i) {
      if (i.mustUseProperty) {
        var l = i.propertyName;
        return e[l];
      } else {
        Er(a, t), i.sanitizeURL && pr("" + a);
        var s = i.attributeName, v = null;
        if (i.type === Br) {
          if (e.hasAttribute(s)) {
            var y = e.getAttribute(s);
            return y === "" ? !0 : _e(t, a, i, !1) ? y : y === "" + a ? a : y;
          }
        } else if (e.hasAttribute(s)) {
          if (_e(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === _n)
            return a;
          v = e.getAttribute(s);
        }
        return _e(t, a, i, !1) ? v === null ? a : v : v === "" + a ? a : v;
      }
    }
    function vr(e, t, a, i) {
      {
        if (!ue(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var l = e.getAttribute(t);
        return Er(a, t), l === "" + a ? a : l;
      }
    }
    function Wr(e, t, a, i) {
      var l = Xe(t);
      if (!ge(t, l, i)) {
        if (_e(t, a, l, i) && (a = null), i || l === null) {
          if (ue(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Er(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var v = l.mustUseProperty;
        if (v) {
          var y = l.propertyName;
          if (a === null) {
            var E = l.type;
            e[y] = E === _n ? !1 : "";
          } else
            e[y] = a;
          return;
        }
        var b = l.attributeName, C = l.attributeNamespace;
        if (a === null)
          e.removeAttribute(b);
        else {
          var j = l.type, z;
          j === _n || j === Br && a === !0 ? z = "" : (Er(a, b), z = "" + a, l.sanitizeURL && pr(z.toString())), C ? e.setAttributeNS(C, b, z) : e.setAttribute(b, z);
        }
      }
    }
    var Yr = Symbol.for("react.element"), ca = Symbol.for("react.portal"), Na = Symbol.for("react.fragment"), Xi = Symbol.for("react.strict_mode"), Oo = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), he = Symbol.for("react.context"), ye = Symbol.for("react.forward_ref"), ht = Symbol.for("react.suspense"), $t = Symbol.for("react.suspense_list"), Xt = Symbol.for("react.memo"), gt = Symbol.for("react.lazy"), Vt = Symbol.for("react.scope"), rr = Symbol.for("react.debug_trace_mode"), gn = Symbol.for("react.offscreen"), Mn = Symbol.for("react.legacy_hidden"), Vr = Symbol.for("react.cache"), cn = Symbol.for("react.tracing_marker"), Ga = Symbol.iterator, ar = "@@iterator";
    function fa(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ga && e[Ga] || e[ar];
      return typeof t == "function" ? t : null;
    }
    var Mt = Object.assign, Zi = 0, Ji, Mo, da, hs, Gr, ms, ys;
    function gs() {
    }
    gs.__reactDisabledLog = !0;
    function Rl() {
      {
        if (Zi === 0) {
          Ji = console.log, Mo = console.info, da = console.warn, hs = console.error, Gr = console.group, ms = console.groupCollapsed, ys = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: gs,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Zi++;
      }
    }
    function cu() {
      {
        if (Zi--, Zi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Mt({}, e, {
              value: Ji
            }),
            info: Mt({}, e, {
              value: Mo
            }),
            warn: Mt({}, e, {
              value: da
            }),
            error: Mt({}, e, {
              value: hs
            }),
            group: Mt({}, e, {
              value: Gr
            }),
            groupCollapsed: Mt({}, e, {
              value: ms
            }),
            groupEnd: Mt({}, e, {
              value: ys
            })
          });
        }
        Zi < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var eo = m.ReactCurrentDispatcher, Ni;
    function Qa(e, t, a) {
      {
        if (Ni === void 0)
          try {
            throw Error();
          } catch (l) {
            var i = l.stack.trim().match(/\n( *(at )?)/);
            Ni = i && i[1] || "";
          }
        return `
` + Ni + e;
      }
    }
    var Uo = !1, Di;
    {
      var _l = typeof WeakMap == "function" ? WeakMap : Map;
      Di = new _l();
    }
    function bl(e, t) {
      if (!e || Uo)
        return "";
      {
        var a = Di.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Uo = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = eo.current, eo.current = null, Rl();
      try {
        if (t) {
          var v = function() {
            throw Error();
          };
          if (Object.defineProperty(v.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(v, []);
            } catch (X) {
              i = X;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (X) {
              i = X;
            }
            e.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (X) {
            i = X;
          }
          e();
        }
      } catch (X) {
        if (X && i && typeof X.stack == "string") {
          for (var y = X.stack.split(`
`), E = i.stack.split(`
`), b = y.length - 1, C = E.length - 1; b >= 1 && C >= 0 && y[b] !== E[C]; )
            C--;
          for (; b >= 1 && C >= 0; b--, C--)
            if (y[b] !== E[C]) {
              if (b !== 1 || C !== 1)
                do
                  if (b--, C--, C < 0 || y[b] !== E[C]) {
                    var j = `
` + y[b].replace(" at new ", " at ");
                    return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), typeof e == "function" && Di.set(e, j), j;
                  }
                while (b >= 1 && C >= 0);
              break;
            }
        }
      } finally {
        Uo = !1, eo.current = s, cu(), Error.prepareStackTrace = l;
      }
      var z = e ? e.displayName || e.name : "", K = z ? Qa(z) : "";
      return typeof e == "function" && Di.set(e, K), K;
    }
    function zo(e, t, a) {
      return bl(e, !0);
    }
    function Ss(e, t, a) {
      return bl(e, !1);
    }
    function Es(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Yt(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return bl(e, Es(e));
      if (typeof e == "string")
        return Qa(e);
      switch (e) {
        case ht:
          return Qa("Suspense");
        case $t:
          return Qa("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ye:
            return Ss(e.render);
          case Xt:
            return Yt(e.type, t, a);
          case gt: {
            var i = e, l = i._payload, s = i._init;
            try {
              return Yt(s(l), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Rs(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case I:
          return Qa(e.type);
        case nt:
          return Qa("Lazy");
        case Ce:
          return Qa("Suspense");
        case _t:
          return Qa("SuspenseList");
        case M:
        case J:
        case Re:
          return Ss(e.type);
        case ve:
          return Ss(e.type.render);
        case $:
          return zo(e.type);
        default:
          return "";
      }
    }
    function fu(e) {
      try {
        var t = "", a = e;
        do
          t += Rs(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Vo(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var l = t.displayName || t.name || "";
      return l !== "" ? a + "(" + l + ")" : a;
    }
    function _s(e) {
      return e.displayName || "Context";
    }
    function Gt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Na:
          return "Fragment";
        case ca:
          return "Portal";
        case Oo:
          return "Profiler";
        case Xi:
          return "StrictMode";
        case ht:
          return "Suspense";
        case $t:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case he:
            var t = e;
            return _s(t) + ".Consumer";
          case k:
            var a = e;
            return _s(a._context) + ".Provider";
          case ye:
            return Vo(e, e.render, "ForwardRef");
          case Xt:
            var i = e.displayName || null;
            return i !== null ? i : Gt(e.type) || "Memo";
          case gt: {
            var l = e, s = l._payload, v = l._init;
            try {
              return Gt(v(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function du(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Tl(e) {
      return e.displayName || "Context";
    }
    function xt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case St:
          return "Cache";
        case De:
          var i = a;
          return Tl(i) + ".Consumer";
        case Te:
          var l = a;
          return Tl(l._context) + ".Provider";
        case rt:
          return "DehydratedFragment";
        case ve:
          return du(a, a.render, "ForwardRef");
        case Pe:
          return "Fragment";
        case I:
          return a;
        case le:
          return "Portal";
        case Z:
          return "Root";
        case ae:
          return "Text";
        case nt:
          return Gt(a);
        case wt:
          return a === Xi ? "StrictMode" : "Mode";
        case Ie:
          return "Offscreen";
        case Ke:
          return "Profiler";
        case pt:
          return "Scope";
        case Ce:
          return "Suspense";
        case _t:
          return "SuspenseList";
        case ft:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case $:
        case M:
        case Be:
        case J:
        case qe:
        case Re:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var vi = m.ReactDebugCurrentFrame, jn = null, pa = !1;
    function Ka() {
      {
        if (jn === null)
          return null;
        var e = jn._debugOwner;
        if (e !== null && typeof e < "u")
          return xt(e);
      }
      return null;
    }
    function jo() {
      return jn === null ? "" : fu(jn);
    }
    function xn() {
      vi.getCurrentStack = null, jn = null, pa = !1;
    }
    function Fn(e) {
      vi.getCurrentStack = e === null ? null : jo, jn = e, pa = !1;
    }
    function bs() {
      return jn;
    }
    function br(e) {
      pa = e;
    }
    function va(e) {
      return "" + e;
    }
    function hi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return er(e), e;
        default:
          return "";
      }
    }
    var pu = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Cl(e, t) {
      pu[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function wl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Fo(e) {
      return e._valueTracker;
    }
    function qa(e) {
      e._valueTracker = null;
    }
    function to(e) {
      var t = "";
      return e && (wl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function xl(e) {
      var t = wl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      er(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var l = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return l.call(this);
          },
          set: function(y) {
            er(y), i = "" + y, s.call(this, y);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var v = {
          getValue: function() {
            return i;
          },
          setValue: function(y) {
            er(y), i = "" + y;
          },
          stopTracking: function() {
            qa(e), delete e[t];
          }
        };
        return v;
      }
    }
    function no(e) {
      Fo(e) || (e._valueTracker = xl(e));
    }
    function vu(e) {
      if (!e)
        return !1;
      var t = Fo(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = to(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function ki(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var ro = !1, hu = !1, Ts = !1, mi = !1;
    function mu(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function R(e, t) {
      var a = e, i = t.checked, l = Mt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return l;
    }
    function D(e, t) {
      Cl("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !hu && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ka() || "A component", t.type), hu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !ro && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ka() || "A component", t.type), ro = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: hi(t.value != null ? t.value : i),
        controlled: mu(t)
      };
    }
    function Q(e, t) {
      var a = e, i = t.checked;
      i != null && Wr(a, "checked", i, !1);
    }
    function ee(e, t) {
      var a = e;
      {
        var i = mu(t);
        !a._wrapperState.controlled && i && !mi && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), mi = !0), a._wrapperState.controlled && !i && !Ts && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Ts = !0);
      }
      Q(e, t);
      var l = hi(t.value), s = t.type;
      if (l != null)
        s === "number" ? (l === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != l) && (a.value = va(l)) : a.value !== va(l) && (a.value = va(l));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Tt(a, t.type, l) : t.hasOwnProperty("defaultValue") && Tt(a, t.type, hi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function we(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, s = l === "submit" || l === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var v = va(i._wrapperState.initialValue);
        a || v !== i.value && (i.value = v), i.defaultValue = v;
      }
      var y = i.name;
      y !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, y !== "" && (i.name = y);
    }
    function et(e, t) {
      var a = e;
      ee(a, t), Ye(a, t);
    }
    function Ye(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Er(a, "name");
        for (var l = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < l.length; s++) {
          var v = l[s];
          if (!(v === e || v.form !== e.form)) {
            var y = Rm(v);
            if (!y)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            vu(v), ee(v, y);
          }
        }
      }
    }
    function Tt(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || ki(e.ownerDocument) !== e) && (a == null ? e.defaultValue = va(e._wrapperState.initialValue) : e.defaultValue !== va(a) && (e.defaultValue = va(a)));
    }
    var jt = !1, fn = !1, pn = !1;
    function vn(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? f.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || fn || (fn = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (pn || (pn = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !jt && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), jt = !0);
    }
    function hn(e, t) {
      t.value != null && e.setAttribute("value", va(hi(t.value)));
    }
    var Nn = Array.isArray;
    function tn(e) {
      return Nn(e);
    }
    var Po;
    Po = !1;
    function yu() {
      var e = Ka();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Cs = ["value", "defaultValue"];
    function ws(e) {
      {
        Cl("select", e);
        for (var t = 0; t < Cs.length; t++) {
          var a = Cs[t];
          if (e[a] != null) {
            var i = tn(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, yu()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, yu());
          }
        }
      }
    }
    function ao(e, t, a, i) {
      var l = e.options;
      if (t) {
        for (var s = a, v = {}, y = 0; y < s.length; y++)
          v["$" + s[y]] = !0;
        for (var E = 0; E < l.length; E++) {
          var b = v.hasOwnProperty("$" + l[E].value);
          l[E].selected !== b && (l[E].selected = b), b && i && (l[E].defaultSelected = !0);
        }
      } else {
        for (var C = va(hi(a)), j = null, z = 0; z < l.length; z++) {
          if (l[z].value === C) {
            l[z].selected = !0, i && (l[z].defaultSelected = !0);
            return;
          }
          j === null && !l[z].disabled && (j = l[z]);
        }
        j !== null && (j.selected = !0);
      }
    }
    function xs(e, t) {
      return Mt({}, t, {
        value: void 0
      });
    }
    function Ns(e, t) {
      var a = e;
      ws(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Po && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Po = !0);
    }
    function Rd(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? ao(a, !!t.multiple, i, !1) : t.defaultValue != null && ao(a, !!t.multiple, t.defaultValue, !0);
    }
    function gg(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? ao(a, !!t.multiple, l, !1) : i !== !!t.multiple && (t.defaultValue != null ? ao(a, !!t.multiple, t.defaultValue, !0) : ao(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Xv(e, t) {
      var a = e, i = t.value;
      i != null && ao(a, !!t.multiple, i, !1);
    }
    var Zv = !1;
    function _d(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Mt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: va(a._wrapperState.initialValue)
      });
      return i;
    }
    function Jv(e, t) {
      var a = e;
      Cl("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Zv && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ka() || "A component"), Zv = !0);
      var i = t.value;
      if (i == null) {
        var l = t.children, s = t.defaultValue;
        if (l != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (tn(l)) {
              if (l.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              l = l[0];
            }
            s = l;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: hi(i)
      };
    }
    function eh(e, t) {
      var a = e, i = hi(t.value), l = hi(t.defaultValue);
      if (i != null) {
        var s = va(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      l != null && (a.defaultValue = va(l));
    }
    function Bc(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Sg(e, t) {
      eh(e, t);
    }
    var io = "http://www.w3.org/1999/xhtml", Eg = "http://www.w3.org/1998/Math/MathML", Ic = "http://www.w3.org/2000/svg";
    function bd(e) {
      switch (e) {
        case "svg":
          return Ic;
        case "math":
          return Eg;
        default:
          return io;
      }
    }
    function Td(e, t) {
      return e == null || e === io ? bd(t) : e === Ic && t === "foreignObject" ? io : e;
    }
    var Rg = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, l);
        });
      } : e;
    }, Hc, th = Rg(function(e, t) {
      if (e.namespaceURI === Ic && !("innerHTML" in e)) {
        Hc = Hc || document.createElement("div"), Hc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Hc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), ha = 1, oo = 3, In = 8, Da = 9, Cd = 11, Ds = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === oo) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, nh = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, gu = {
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
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function rh(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var ah = ["Webkit", "ms", "Moz", "O"];
    Object.keys(gu).forEach(function(e) {
      ah.forEach(function(t) {
        gu[rh(t, e)] = gu[e];
      });
    });
    function $o(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(gu.hasOwnProperty(e) && gu[e]) ? t + "px" : (Ur(t, e), ("" + t).trim());
    }
    var _g = /([A-Z])/g, bg = /^ms-/;
    function Tg(e) {
      return e.replace(_g, "-$1").toLowerCase().replace(bg, "-ms-");
    }
    var wd = function() {
    };
    {
      var ih = /^(?:webkit|moz|o)[A-Z]/, ks = /^-ms-/, As = /-(.)/g, oh = /;\s*$/, lo = {}, xd = {}, Nd = !1, Wc = !1, Dd = function(e) {
        return e.replace(As, function(t, a) {
          return a.toUpperCase();
        });
      }, lh = function(e) {
        lo.hasOwnProperty(e) && lo[e] || (lo[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Dd(e.replace(ks, "ms-"))
        ));
      }, uh = function(e) {
        lo.hasOwnProperty(e) && lo[e] || (lo[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, sh = function(e, t) {
        xd.hasOwnProperty(t) && xd[t] || (xd[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(oh, "")));
      }, Cg = function(e, t) {
        Nd || (Nd = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, wg = function(e, t) {
        Wc || (Wc = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      wd = function(e, t) {
        e.indexOf("-") > -1 ? lh(e) : ih.test(e) ? uh(e) : oh.test(t) && sh(e, t), typeof t == "number" && (isNaN(t) ? Cg(e, t) : isFinite(t) || wg(e, t));
      };
    }
    var xg = wd;
    function Ng(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var l = e[i];
            if (l != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Tg(i)) + ":", t += $o(i, l, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function ch(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var l = i.indexOf("--") === 0;
          l || xg(i, t[i]);
          var s = $o(i, t[i], l);
          i === "float" && (i = "cssFloat"), l ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function yi(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Su(e) {
      var t = {};
      for (var a in e)
        for (var i = nh[a] || [a], l = 0; l < i.length; l++)
          t[i[l]] = a;
      return t;
    }
    function fh(e, t) {
      {
        if (!t)
          return;
        var a = Su(e), i = Su(t), l = {};
        for (var s in a) {
          var v = a[s], y = i[s];
          if (y && v !== y) {
            var E = v + "," + y;
            if (l[E])
              continue;
            l[E] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", yi(e[v]) ? "Removing" : "Updating", v, y);
          }
        }
      }
    }
    var dh = {
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
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, ph = Mt({
      menuitem: !0
    }, dh), vh = "__html";
    function Ls(e, t) {
      if (t) {
        if (ph[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(vh in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Nl(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        // These are reserved SVG and MathML elements.
        // We don't mind this list too much because we expect it to never grow.
        // The alternative is to track the namespace in a few places which is convoluted.
        // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
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
    var Yc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Dl = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Bo = {}, Os = new RegExp("^(aria)-[" + at + "]*$"), kd = new RegExp("^(aria)[A-Z][" + at + "]*$");
    function hh(e, t) {
      {
        if (wn.call(Bo, t) && Bo[t])
          return !0;
        if (kd.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Dl.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Bo[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Bo[t] = !0, !0;
        }
        if (Os.test(t)) {
          var l = t.toLowerCase(), s = Dl.hasOwnProperty(l) ? l : null;
          if (s == null)
            return Bo[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Bo[t] = !0, !0;
        }
      }
      return !0;
    }
    function Gc(e, t) {
      {
        var a = [];
        for (var i in t) {
          var l = hh(e, i);
          l || a.push(i);
        }
        var s = a.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Eu(e, t) {
      Nl(e, t) || Gc(e, t);
    }
    var Qc = !1;
    function mh(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Qc && (Qc = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Ms = function() {
    };
    {
      var jr = {}, Ad = /^on./, yh = /^on[^A-Z]/, gh = new RegExp("^(aria)-[" + at + "]*$"), Sh = new RegExp("^(aria)[A-Z][" + at + "]*$");
      Ms = function(e, t, a, i) {
        if (wn.call(jr, t) && jr[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), jr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, v = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var y = v.hasOwnProperty(l) ? v[l] : null;
          if (y != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, y), jr[t] = !0, !0;
          if (Ad.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), jr[t] = !0, !0;
        } else if (Ad.test(t))
          return yh.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), jr[t] = !0, !0;
        if (gh.test(t) || Sh.test(t))
          return !0;
        if (l === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), jr[t] = !0, !0;
        if (l === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), jr[t] = !0, !0;
        if (l === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), jr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), jr[t] = !0, !0;
        var E = Xe(t), b = E !== null && E.type === Rr;
        if (Yc.hasOwnProperty(l)) {
          var C = Yc[l];
          if (C !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, C), jr[t] = !0, !0;
        } else if (!b && t !== l)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), jr[t] = !0, !0;
        return typeof a == "boolean" && be(t, a, E, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), jr[t] = !0, !0) : b ? !0 : be(t, a, E, !1) ? (jr[t] = !0, !1) : ((a === "false" || a === "true") && E !== null && E.type === _n && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), jr[t] = !0), !0);
      };
    }
    var Eh = function(e, t, a) {
      {
        var i = [];
        for (var l in t) {
          var s = Ms(e, l, t[l], a);
          s || i.push(l);
        }
        var v = i.map(function(y) {
          return "`" + y + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e);
      }
    };
    function Io(e, t, a) {
      Nl(e, t) || Eh(e, t, a);
    }
    var Kc = 1, Us = 2, zs = 4, Dg = Kc | Us | zs, uo = null;
    function kg(e) {
      uo !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), uo = e;
    }
    function Rh() {
      uo === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), uo = null;
    }
    function _h(e) {
      return e === uo;
    }
    function Sn(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === oo ? t.parentNode : t;
    }
    var Vs = null, so = null, Ai = null;
    function Ld(e) {
      var t = qu(e);
      if (t) {
        if (typeof Vs != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Rm(a);
          Vs(t.stateNode, t.type, i);
        }
      }
    }
    function Od(e) {
      Vs = e;
    }
    function Ru(e) {
      so ? Ai ? Ai.push(e) : Ai = [e] : so = e;
    }
    function qc() {
      return so !== null || Ai !== null;
    }
    function kl() {
      if (so) {
        var e = so, t = Ai;
        if (so = null, Ai = null, Ld(e), t)
          for (var a = 0; a < t.length; a++)
            Ld(t[a]);
      }
    }
    var Md = function(e, t) {
      return e(t);
    }, bh = function() {
    }, Ud = !1;
    function Th() {
      var e = qc();
      e && (bh(), kl());
    }
    function js(e, t, a) {
      if (Ud)
        return e(t, a);
      Ud = !0;
      try {
        return Md(e, t, a);
      } finally {
        Ud = !1, Th();
      }
    }
    function Xc(e, t, a) {
      Md = e, bh = a;
    }
    function zd(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Vd(e, t, a) {
      switch (e) {
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
          return !!(a.disabled && zd(t));
        default:
          return !1;
      }
    }
    function Al(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Rm(a);
      if (i === null)
        return null;
      var l = i[t];
      if (Vd(t, e.type, i))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var Fs = !1;
    if (Kt)
      try {
        var Ps = {};
        Object.defineProperty(Ps, "passive", {
          get: function() {
            Fs = !0;
          }
        }), window.addEventListener("test", Ps, Ps), window.removeEventListener("test", Ps, Ps);
      } catch {
        Fs = !1;
      }
    function jd(e, t, a, i, l, s, v, y, E) {
      var b = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, b);
      } catch (C) {
        this.onError(C);
      }
    }
    var Ch = jd;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Fd = document.createElement("react");
      Ch = function(t, a, i, l, s, v, y, E, b) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var C = document.createEvent("Event"), j = !1, z = !0, K = window.event, X = Object.getOwnPropertyDescriptor(window, "event");
        function te() {
          Fd.removeEventListener(ne, yt, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = K);
        }
        var Fe = Array.prototype.slice.call(arguments, 3);
        function yt() {
          j = !0, te(), a.apply(i, Fe), z = !1;
        }
        var st, Jt = !1, Ht = !1;
        function H(W) {
          if (st = W.error, Jt = !0, st === null && W.colno === 0 && W.lineno === 0 && (Ht = !0), W.defaultPrevented && st != null && typeof st == "object")
            try {
              st._suppressLogging = !0;
            } catch {
            }
        }
        var ne = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", H), Fd.addEventListener(ne, yt, !1), C.initEvent(ne, !1, !1), Fd.dispatchEvent(C), X && Object.defineProperty(window, "event", X), j && z && (Jt ? Ht && (st = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : st = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(st)), window.removeEventListener("error", H), !j)
          return te(), jd.apply(this, arguments);
      };
    }
    var Pd = Ch, ka = !1, $s = null, co = !1, Xa = null, Bs = {
      onError: function(e) {
        ka = !0, $s = e;
      }
    };
    function gi(e, t, a, i, l, s, v, y, E) {
      ka = !1, $s = null, Pd.apply(Bs, arguments);
    }
    function $d(e, t, a, i, l, s, v, y, E) {
      if (gi.apply(this, arguments), ka) {
        var b = fo();
        co || (co = !0, Xa = b);
      }
    }
    function Ag() {
      if (co) {
        var e = Xa;
        throw co = !1, Xa = null, e;
      }
    }
    function Lg() {
      return ka;
    }
    function fo() {
      if (ka) {
        var e = $s;
        return ka = !1, $s = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Li(e) {
      return e._reactInternals;
    }
    function _u(e) {
      return e._reactInternals !== void 0;
    }
    function Zc(e, t) {
      e._reactInternals = t;
    }
    var mt = (
      /*                      */
      0
    ), Si = (
      /*                */
      1
    ), En = (
      /*                    */
      2
    ), it = (
      /*                       */
      4
    ), on = (
      /*                */
      16
    ), Za = (
      /*                 */
      32
    ), hr = (
      /*                     */
      64
    ), Dt = (
      /*                   */
      128
    ), Qr = (
      /*            */
      256
    ), Aa = (
      /*                          */
      512
    ), ir = (
      /*                     */
      1024
    ), ma = (
      /*                      */
      2048
    ), Oi = (
      /*                    */
      4096
    ), Ho = (
      /*                   */
      8192
    ), Ll = (
      /*             */
      16384
    ), wh = ma | it | hr | Aa | ir | Ll, po = (
      /*               */
      32767
    ), Wo = (
      /*                   */
      32768
    ), Tr = (
      /*                */
      65536
    ), Jc = (
      /* */
      131072
    ), xh = (
      /*                       */
      1048576
    ), Mi = (
      /*                    */
      2097152
    ), Ja = (
      /*                 */
      4194304
    ), Yo = (
      /*                */
      8388608
    ), ei = (
      /*               */
      16777216
    ), Ol = (
      /*              */
      33554432
    ), ya = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      it | ir | 0
    ), ga = En | it | on | Za | Aa | Oi | Ho, Ei = it | hr | Aa | Ho, Sa = ma | on, Cr = Ja | Yo | Mi, Ml = m.ReactCurrentOwner;
    function Go(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (En | Oi)) !== mt && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === Z ? a : null;
    }
    function ef(e) {
      if (e.tag === Ce) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function tf(e) {
      return e.tag === Z ? e.stateNode.containerInfo : null;
    }
    function La(e) {
      return Go(e) === e;
    }
    function Oa(e) {
      {
        var t = Ml.current;
        if (t !== null && t.tag === $) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", xt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var l = Li(e);
      return l ? Go(l) === l : !1;
    }
    function Dn(e) {
      if (Go(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function ti(e) {
      var t = e.alternate;
      if (!t) {
        var a = Go(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, l = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var v = s.alternate;
        if (v === null) {
          var y = s.return;
          if (y !== null) {
            i = l = y;
            continue;
          }
          break;
        }
        if (s.child === v.child) {
          for (var E = s.child; E; ) {
            if (E === i)
              return Dn(s), e;
            if (E === l)
              return Dn(s), t;
            E = E.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== l.return)
          i = s, l = v;
        else {
          for (var b = !1, C = s.child; C; ) {
            if (C === i) {
              b = !0, i = s, l = v;
              break;
            }
            if (C === l) {
              b = !0, l = s, i = v;
              break;
            }
            C = C.sibling;
          }
          if (!b) {
            for (C = v.child; C; ) {
              if (C === i) {
                b = !0, i = v, l = s;
                break;
              }
              if (C === l) {
                b = !0, l = v, i = s;
                break;
              }
              C = C.sibling;
            }
            if (!b)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== l)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== Z)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Bd(e) {
      var t = ti(e);
      return t !== null ? Id(t) : null;
    }
    function Id(e) {
      if (e.tag === I || e.tag === ae)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Id(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Hd(e) {
      var t = ti(e);
      return t !== null ? nf(t) : null;
    }
    function nf(e) {
      if (e.tag === I || e.tag === ae)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== le) {
          var a = nf(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Wd = d.unstable_scheduleCallback, rf = d.unstable_cancelCallback, Nh = d.unstable_shouldYield, bu = d.unstable_requestPaint, or = d.unstable_now, Og = d.unstable_getCurrentPriorityLevel, Qo = d.unstable_ImmediatePriority, Tu = d.unstable_UserBlockingPriority, Ko = d.unstable_NormalPriority, Dh = d.unstable_LowPriority, qo = d.unstable_IdlePriority, kh = d.unstable_yieldValue, af = d.unstable_setDisableYieldValue, vo = null, qn = null, je = null, ni = !1, Ma = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Yd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        se && (e = Mt({}, e, {
          getLaneLabelMap: Xo,
          injectProfilingHooks: ho
        })), vo = t.inject(e), qn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Cu(e, t) {
      if (qn && typeof qn.onScheduleFiberRoot == "function")
        try {
          qn.onScheduleFiberRoot(vo, e, t);
        } catch (a) {
          ni || (ni = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function ri(e, t) {
      if (qn && typeof qn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Dt) === Dt;
          if (ke) {
            var i;
            switch (t) {
              case ja:
                i = Qo;
                break;
              case Fi:
                i = Tu;
                break;
              case bi:
                i = Ko;
                break;
              case tc:
                i = qo;
                break;
              default:
                i = Ko;
                break;
            }
            qn.onCommitFiberRoot(vo, e, i, a);
          }
        } catch (l) {
          ni || (ni = !0, S("React instrumentation encountered an error: %s", l));
        }
    }
    function Ul(e) {
      if (qn && typeof qn.onPostCommitFiberRoot == "function")
        try {
          qn.onPostCommitFiberRoot(vo, e);
        } catch (t) {
          ni || (ni = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Gd(e) {
      if (qn && typeof qn.onCommitFiberUnmount == "function")
        try {
          qn.onCommitFiberUnmount(vo, e);
        } catch (t) {
          ni || (ni = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function cr(e) {
      if (typeof kh == "function" && (af(e), T(e)), qn && typeof qn.setStrictMode == "function")
        try {
          qn.setStrictMode(vo, e);
        } catch (t) {
          ni || (ni = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function ho(e) {
      je = e;
    }
    function Xo() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Ws; a++) {
          var i = Ug(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Qd(e) {
      je !== null && typeof je.markCommitStarted == "function" && je.markCommitStarted(e);
    }
    function Kd() {
      je !== null && typeof je.markCommitStopped == "function" && je.markCommitStopped();
    }
    function Ua(e) {
      je !== null && typeof je.markComponentRenderStarted == "function" && je.markComponentRenderStarted(e);
    }
    function za() {
      je !== null && typeof je.markComponentRenderStopped == "function" && je.markComponentRenderStopped();
    }
    function of(e) {
      je !== null && typeof je.markComponentPassiveEffectMountStarted == "function" && je.markComponentPassiveEffectMountStarted(e);
    }
    function Ah() {
      je !== null && typeof je.markComponentPassiveEffectMountStopped == "function" && je.markComponentPassiveEffectMountStopped();
    }
    function lf(e) {
      je !== null && typeof je.markComponentPassiveEffectUnmountStarted == "function" && je.markComponentPassiveEffectUnmountStarted(e);
    }
    function Lh() {
      je !== null && typeof je.markComponentPassiveEffectUnmountStopped == "function" && je.markComponentPassiveEffectUnmountStopped();
    }
    function Is(e) {
      je !== null && typeof je.markComponentLayoutEffectMountStarted == "function" && je.markComponentLayoutEffectMountStarted(e);
    }
    function Ui() {
      je !== null && typeof je.markComponentLayoutEffectMountStopped == "function" && je.markComponentLayoutEffectMountStopped();
    }
    function wu(e) {
      je !== null && typeof je.markComponentLayoutEffectUnmountStarted == "function" && je.markComponentLayoutEffectUnmountStarted(e);
    }
    function xu() {
      je !== null && typeof je.markComponentLayoutEffectUnmountStopped == "function" && je.markComponentLayoutEffectUnmountStopped();
    }
    function zl(e, t, a) {
      je !== null && typeof je.markComponentErrored == "function" && je.markComponentErrored(e, t, a);
    }
    function qd(e, t, a) {
      je !== null && typeof je.markComponentSuspended == "function" && je.markComponentSuspended(e, t, a);
    }
    function Nu(e) {
      je !== null && typeof je.markLayoutEffectsStarted == "function" && je.markLayoutEffectsStarted(e);
    }
    function Oh() {
      je !== null && typeof je.markLayoutEffectsStopped == "function" && je.markLayoutEffectsStopped();
    }
    function Xd(e) {
      je !== null && typeof je.markPassiveEffectsStarted == "function" && je.markPassiveEffectsStarted(e);
    }
    function Pn() {
      je !== null && typeof je.markPassiveEffectsStopped == "function" && je.markPassiveEffectsStopped();
    }
    function Hs(e) {
      je !== null && typeof je.markRenderStarted == "function" && je.markRenderStarted(e);
    }
    function Zd() {
      je !== null && typeof je.markRenderYielded == "function" && je.markRenderYielded();
    }
    function uf() {
      je !== null && typeof je.markRenderStopped == "function" && je.markRenderStopped();
    }
    function sf(e) {
      je !== null && typeof je.markRenderScheduled == "function" && je.markRenderScheduled(e);
    }
    function Jd(e, t) {
      je !== null && typeof je.markForceUpdateScheduled == "function" && je.markForceUpdateScheduled(e, t);
    }
    function mo(e, t) {
      je !== null && typeof je.markStateUpdateScheduled == "function" && je.markStateUpdateScheduled(e, t);
    }
    var Ue = (
      /*                         */
      0
    ), dt = (
      /*                 */
      1
    ), Nt = (
      /*                    */
      2
    ), kn = (
      /*               */
      8
    ), Ea = (
      /*              */
      16
    ), Du = Math.clz32 ? Math.clz32 : ep, Mg = Math.log, Fr = Math.LN2;
    function ep(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Mg(t) / Fr | 0) | 0;
    }
    var Ws = 31, de = (
      /*                        */
      0
    ), Rn = (
      /*                          */
      0
    ), lt = (
      /*                        */
      1
    ), zi = (
      /*    */
      2
    ), Ri = (
      /*             */
      4
    ), yo = (
      /*            */
      8
    ), _i = (
      /*                     */
      16
    ), ku = (
      /*                */
      32
    ), Vl = (
      /*                       */
      4194240
    ), Au = (
      /*                        */
      64
    ), cf = (
      /*                        */
      128
    ), ff = (
      /*                        */
      256
    ), df = (
      /*                        */
      512
    ), pf = (
      /*                        */
      1024
    ), jl = (
      /*                        */
      2048
    ), vf = (
      /*                        */
      4096
    ), Lu = (
      /*                        */
      8192
    ), Ou = (
      /*                        */
      16384
    ), hf = (
      /*                       */
      32768
    ), Ys = (
      /*                       */
      65536
    ), mf = (
      /*                       */
      131072
    ), yf = (
      /*                       */
      262144
    ), gf = (
      /*                       */
      524288
    ), Sf = (
      /*                       */
      1048576
    ), Gs = (
      /*                       */
      2097152
    ), Qs = (
      /*                            */
      130023424
    ), Fl = (
      /*                             */
      4194304
    ), Ef = (
      /*                             */
      8388608
    ), tp = (
      /*                             */
      16777216
    ), Rf = (
      /*                             */
      33554432
    ), np = (
      /*                             */
      67108864
    ), Mh = Fl, Mu = (
      /*          */
      134217728
    ), rp = (
      /*                          */
      268435455
    ), Uu = (
      /*               */
      268435456
    ), Vi = (
      /*                        */
      536870912
    ), Va = (
      /*                   */
      1073741824
    );
    function Ug(e) {
      {
        if (e & lt)
          return "Sync";
        if (e & zi)
          return "InputContinuousHydration";
        if (e & Ri)
          return "InputContinuous";
        if (e & yo)
          return "DefaultHydration";
        if (e & _i)
          return "Default";
        if (e & ku)
          return "TransitionHydration";
        if (e & Vl)
          return "Transition";
        if (e & Qs)
          return "Retry";
        if (e & Mu)
          return "SelectiveHydration";
        if (e & Uu)
          return "IdleHydration";
        if (e & Vi)
          return "Idle";
        if (e & Va)
          return "Offscreen";
      }
    }
    var Tn = -1, Ra = Au, zu = Fl;
    function Zo(e) {
      switch (Jo(e)) {
        case lt:
          return lt;
        case zi:
          return zi;
        case Ri:
          return Ri;
        case yo:
          return yo;
        case _i:
          return _i;
        case ku:
          return ku;
        case Au:
        case cf:
        case ff:
        case df:
        case pf:
        case jl:
        case vf:
        case Lu:
        case Ou:
        case hf:
        case Ys:
        case mf:
        case yf:
        case gf:
        case Sf:
        case Gs:
          return e & Vl;
        case Fl:
        case Ef:
        case tp:
        case Rf:
        case np:
          return e & Qs;
        case Mu:
          return Mu;
        case Uu:
          return Uu;
        case Vi:
          return Vi;
        case Va:
          return Va;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Ks(e, t) {
      var a = e.pendingLanes;
      if (a === de)
        return de;
      var i = de, l = e.suspendedLanes, s = e.pingedLanes, v = a & rp;
      if (v !== de) {
        var y = v & ~l;
        if (y !== de)
          i = Zo(y);
        else {
          var E = v & s;
          E !== de && (i = Zo(E));
        }
      } else {
        var b = a & ~l;
        b !== de ? i = Zo(b) : s !== de && (i = Zo(s));
      }
      if (i === de)
        return de;
      if (t !== de && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === de) {
        var C = Jo(i), j = Jo(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          C >= j || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          C === _i && (j & Vl) !== de
        )
          return t;
      }
      (i & Ri) !== de && (i |= a & _i);
      var z = e.entangledLanes;
      if (z !== de)
        for (var K = e.entanglements, X = i & z; X > 0; ) {
          var te = el(X), Fe = 1 << te;
          i |= K[te], X &= ~Fe;
        }
      return i;
    }
    function Uh(e, t) {
      for (var a = e.eventTimes, i = Tn; t > 0; ) {
        var l = el(t), s = 1 << l, v = a[l];
        v > i && (i = v), t &= ~s;
      }
      return i;
    }
    function zh(e, t) {
      switch (e) {
        case lt:
        case zi:
        case Ri:
          return t + 250;
        case yo:
        case _i:
        case ku:
        case Au:
        case cf:
        case ff:
        case df:
        case pf:
        case jl:
        case vf:
        case Lu:
        case Ou:
        case hf:
        case Ys:
        case mf:
        case yf:
        case gf:
        case Sf:
        case Gs:
          return t + 5e3;
        case Fl:
        case Ef:
        case tp:
        case Rf:
        case np:
          return Tn;
        case Mu:
        case Uu:
        case Vi:
        case Va:
          return Tn;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Tn;
      }
    }
    function ap(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, l = e.pingedLanes, s = e.expirationTimes, v = a; v > 0; ) {
        var y = el(v), E = 1 << y, b = s[y];
        b === Tn ? ((E & i) === de || (E & l) !== de) && (s[y] = zh(E, t)) : b <= t && (e.expiredLanes |= E), v &= ~E;
      }
    }
    function Vu(e) {
      return Zo(e.pendingLanes);
    }
    function qs(e) {
      var t = e.pendingLanes & ~Va;
      return t !== de ? t : t & Va ? Va : de;
    }
    function ip(e) {
      return (e & lt) !== de;
    }
    function op(e) {
      return (e & rp) !== de;
    }
    function lp(e) {
      return (e & Qs) === e;
    }
    function Vh(e) {
      var t = lt | Ri | _i;
      return (e & t) === de;
    }
    function jh(e) {
      return (e & Vl) === e;
    }
    function Xs(e, t) {
      var a = zi | Ri | yo | _i;
      return (t & a) !== de;
    }
    function Fh(e, t) {
      return (t & e.expiredLanes) !== de;
    }
    function Ph(e) {
      return (e & Vl) !== de;
    }
    function Kr() {
      var e = Ra;
      return Ra <<= 1, (Ra & Vl) === de && (Ra = Au), e;
    }
    function qr() {
      var e = zu;
      return zu <<= 1, (zu & Qs) === de && (zu = Fl), e;
    }
    function Jo(e) {
      return e & -e;
    }
    function ju(e) {
      return Jo(e);
    }
    function el(e) {
      return 31 - Du(e);
    }
    function _f(e) {
      return el(e);
    }
    function _a(e, t) {
      return (e & t) !== de;
    }
    function tl(e, t) {
      return (e & t) === t;
    }
    function Ut(e, t) {
      return e | t;
    }
    function Fu(e, t) {
      return e & ~t;
    }
    function up(e, t) {
      return e & t;
    }
    function zg(e) {
      return e;
    }
    function sp(e, t) {
      return e !== Rn && e < t ? e : t;
    }
    function Zs(e) {
      for (var t = [], a = 0; a < Ws; a++)
        t.push(e);
      return t;
    }
    function Pu(e, t, a) {
      e.pendingLanes |= t, t !== Vi && (e.suspendedLanes = de, e.pingedLanes = de);
      var i = e.eventTimes, l = _f(t);
      i[l] = a;
    }
    function cp(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var l = el(i), s = 1 << l;
        a[l] = Tn, i &= ~s;
      }
    }
    function Js(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Vg(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = de, e.pingedLanes = de, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, l = e.eventTimes, s = e.expirationTimes, v = a; v > 0; ) {
        var y = el(v), E = 1 << y;
        i[y] = de, l[y] = Tn, s[y] = Tn, v &= ~E;
      }
    }
    function bf(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, l = a; l; ) {
        var s = el(l), v = 1 << s;
        // Is this one of the newly entangled lanes?
        v & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), l &= ~v;
      }
    }
    function fp(e, t) {
      var a = Jo(t), i;
      switch (a) {
        case Ri:
          i = zi;
          break;
        case _i:
          i = yo;
          break;
        case Au:
        case cf:
        case ff:
        case df:
        case pf:
        case jl:
        case vf:
        case Lu:
        case Ou:
        case hf:
        case Ys:
        case mf:
        case yf:
        case gf:
        case Sf:
        case Gs:
        case Fl:
        case Ef:
        case tp:
        case Rf:
        case np:
          i = ku;
          break;
        case Vi:
          i = Uu;
          break;
        default:
          i = Rn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Rn ? Rn : i;
    }
    function dp(e, t, a) {
      if (Ma)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var l = _f(a), s = 1 << l, v = i[l];
          v.add(t), a &= ~s;
        }
    }
    function ec(e, t) {
      if (Ma)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var l = _f(t), s = 1 << l, v = a[l];
          v.size > 0 && (v.forEach(function(y) {
            var E = y.alternate;
            (E === null || !i.has(E)) && i.add(y);
          }), v.clear()), t &= ~s;
        }
    }
    function ji(e, t) {
      return null;
    }
    var ja = lt, Fi = Ri, bi = _i, tc = Vi, $u = Rn;
    function Xr() {
      return $u;
    }
    function nn(e) {
      $u = e;
    }
    function jg(e, t) {
      var a = $u;
      try {
        return $u = e, t();
      } finally {
        $u = a;
      }
    }
    function Fg(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Tf(e, t) {
      return e > t ? e : t;
    }
    function mr(e, t) {
      return e !== 0 && e < t;
    }
    function $h(e) {
      var t = Jo(e);
      return mr(ja, t) ? mr(Fi, t) ? op(t) ? bi : tc : Fi : ja;
    }
    function Ge(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Pl;
    function pp(e) {
      Pl = e;
    }
    function Bh(e) {
      Pl(e);
    }
    var vp;
    function nc(e) {
      vp = e;
    }
    var rc;
    function hp(e) {
      rc = e;
    }
    var mp;
    function Ih(e) {
      mp = e;
    }
    var yp;
    function gp(e) {
      yp = e;
    }
    var ac = !1, lr = [], yr = null, Zr = null, go = null, Bu = /* @__PURE__ */ new Map(), Jr = /* @__PURE__ */ new Map(), So = [], Pi = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Pg(e) {
      return Pi.indexOf(e) > -1;
    }
    function Hh(e, t, a, i, l) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: l,
        targetContainers: [i]
      };
    }
    function Sp(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          yr = null;
          break;
        case "dragenter":
        case "dragleave":
          Zr = null;
          break;
        case "mouseover":
        case "mouseout":
          go = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Bu.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Jr.delete(i);
          break;
        }
      }
    }
    function Iu(e, t, a, i, l, s) {
      if (e === null || e.nativeEvent !== s) {
        var v = Hh(t, a, i, l, s);
        if (t !== null) {
          var y = qu(t);
          y !== null && vp(y);
        }
        return v;
      }
      e.eventSystemFlags |= i;
      var E = e.targetContainers;
      return l !== null && E.indexOf(l) === -1 && E.push(l), e;
    }
    function Wh(e, t, a, i, l) {
      switch (t) {
        case "focusin": {
          var s = l;
          return yr = Iu(yr, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var v = l;
          return Zr = Iu(Zr, e, t, a, i, v), !0;
        }
        case "mouseover": {
          var y = l;
          return go = Iu(go, e, t, a, i, y), !0;
        }
        case "pointerover": {
          var E = l, b = E.pointerId;
          return Bu.set(b, Iu(Bu.get(b) || null, e, t, a, i, E)), !0;
        }
        case "gotpointercapture": {
          var C = l, j = C.pointerId;
          return Jr.set(j, Iu(Jr.get(j) || null, e, t, a, i, C)), !0;
        }
      }
      return !1;
    }
    function Yh(e) {
      var t = Sc(e.target);
      if (t !== null) {
        var a = Go(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Ce) {
            var l = ef(a);
            if (l !== null) {
              e.blockedOn = l, yp(e.priority, function() {
                rc(a);
              });
              return;
            }
          } else if (i === Z) {
            var s = a.stateNode;
            if (Ge(s)) {
              e.blockedOn = tf(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Cf(e) {
      for (var t = mp(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < So.length && mr(t, So[i].priority); i++)
        ;
      So.splice(i, 0, a), i === 0 && Yh(a);
    }
    function Hu(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = uc(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var l = e.nativeEvent, s = new l.constructor(l.type, l);
          kg(s), l.target.dispatchEvent(s), Rh();
        } else {
          var v = qu(i);
          return v !== null && vp(v), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Fa(e, t, a) {
      Hu(e) && a.delete(t);
    }
    function rn() {
      ac = !1, yr !== null && Hu(yr) && (yr = null), Zr !== null && Hu(Zr) && (Zr = null), go !== null && Hu(go) && (go = null), Bu.forEach(Fa), Jr.forEach(Fa);
    }
    function Hn(e, t) {
      e.blockedOn === t && (e.blockedOn = null, ac || (ac = !0, d.unstable_scheduleCallback(d.unstable_NormalPriority, rn)));
    }
    function Un(e) {
      if (lr.length > 0) {
        Hn(lr[0], e);
        for (var t = 1; t < lr.length; t++) {
          var a = lr[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      yr !== null && Hn(yr, e), Zr !== null && Hn(Zr, e), go !== null && Hn(go, e);
      var i = function(y) {
        return Hn(y, e);
      };
      Bu.forEach(i), Jr.forEach(i);
      for (var l = 0; l < So.length; l++) {
        var s = So[l];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; So.length > 0; ) {
        var v = So[0];
        if (v.blockedOn !== null)
          break;
        Yh(v), v.blockedOn === null && So.shift();
      }
    }
    var Wn = m.ReactCurrentBatchConfig, ea = !0;
    function $l(e) {
      ea = !!e;
    }
    function fr() {
      return ea;
    }
    function ic(e, t, a) {
      var i = Il(t), l;
      switch (i) {
        case ja:
          l = Bl;
          break;
        case Fi:
          l = wf;
          break;
        case bi:
        default:
          l = oc;
          break;
      }
      return l.bind(null, t, a, e);
    }
    function Bl(e, t, a, i) {
      var l = Xr(), s = Wn.transition;
      Wn.transition = null;
      try {
        nn(ja), oc(e, t, a, i);
      } finally {
        nn(l), Wn.transition = s;
      }
    }
    function wf(e, t, a, i) {
      var l = Xr(), s = Wn.transition;
      Wn.transition = null;
      try {
        nn(Fi), oc(e, t, a, i);
      } finally {
        nn(l), Wn.transition = s;
      }
    }
    function oc(e, t, a, i) {
      ea && lc(e, t, a, i);
    }
    function lc(e, t, a, i) {
      var l = uc(e, t, a, i);
      if (l === null) {
        iS(e, t, i, wr, a), Sp(e, i);
        return;
      }
      if (Wh(l, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Sp(e, i), t & zs && Pg(e)) {
        for (; l !== null; ) {
          var s = qu(l);
          s !== null && Bh(s);
          var v = uc(e, t, a, i);
          if (v === null && iS(e, t, i, wr, a), v === l)
            break;
          l = v;
        }
        l !== null && i.stopPropagation();
        return;
      }
      iS(e, t, i, null, a);
    }
    var wr = null;
    function uc(e, t, a, i) {
      wr = null;
      var l = Sn(i), s = Sc(l);
      if (s !== null) {
        var v = Go(s);
        if (v === null)
          s = null;
        else {
          var y = v.tag;
          if (y === Ce) {
            var E = ef(v);
            if (E !== null)
              return E;
            s = null;
          } else if (y === Z) {
            var b = v.stateNode;
            if (Ge(b))
              return tf(v);
            s = null;
          } else v !== s && (s = null);
        }
      }
      return wr = s, null;
    }
    function Il(e) {
      switch (e) {
        // Used by SimpleEventPlugin:
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
        // Used by polyfills:
        // eslint-disable-next-line no-fallthrough
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        // Only enableCreateEventHandleAPI:
        // eslint-disable-next-line no-fallthrough
        case "beforeblur":
        case "afterblur":
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return ja;
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
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Fi;
        case "message": {
          var t = Og();
          switch (t) {
            case Qo:
              return ja;
            case Tu:
              return Fi;
            case Ko:
            case Dh:
              return bi;
            case qo:
              return tc;
            default:
              return bi;
          }
        }
        default:
          return bi;
      }
    }
    function Eo(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function xf(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Ep(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function nl(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var rl = null, $i = null, al = null;
    function sc(e) {
      return rl = e, $i = fc(), !0;
    }
    function Rp() {
      rl = null, $i = null, al = null;
    }
    function cc() {
      if (al)
        return al;
      var e, t = $i, a = t.length, i, l = fc(), s = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var v = a - e;
      for (i = 1; i <= v && t[a - i] === l[s - i]; i++)
        ;
      var y = i > 1 ? 1 - i : void 0;
      return al = l.slice(e, y), al;
    }
    function fc() {
      return "value" in rl ? rl.value : rl.textContent;
    }
    function gr(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Ti() {
      return !0;
    }
    function ai() {
      return !1;
    }
    function Cn(e) {
      function t(a, i, l, s, v) {
        this._reactName = a, this._targetInst = l, this.type = i, this.nativeEvent = s, this.target = v, this.currentTarget = null;
        for (var y in e)
          if (e.hasOwnProperty(y)) {
            var E = e[y];
            E ? this[y] = E(s) : this[y] = s[y];
          }
        var b = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return b ? this.isDefaultPrevented = Ti : this.isDefaultPrevented = ai, this.isPropagationStopped = ai, this;
      }
      return Mt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Ti);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Ti);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Ti
      }), t;
    }
    var Hl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, dc = Cn(Hl), Wl = Mt({}, Hl, {
      view: 0,
      detail: 0
    }), $g = Cn(Wl), Bi, Nf, Yl;
    function Gl(e) {
      e !== Yl && (Yl && e.type === "mousemove" ? (Bi = e.screenX - Yl.screenX, Nf = e.screenY - Yl.screenY) : (Bi = 0, Nf = 0), Yl = e);
    }
    var Wu = Mt({}, Wl, {
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
      getModifierState: bp,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Gl(e), Bi);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Nf;
      }
    }), il = Cn(Wu), Gh = Mt({}, Wu, {
      dataTransfer: 0
    }), Qh = Cn(Gh), _p = Mt({}, Wl, {
      relatedTarget: 0
    }), Yu = Cn(_p), Bg = Mt({}, Hl, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Ig = Cn(Bg), Kh = Mt({}, Hl, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), qh = Cn(Kh), Ql = Mt({}, Hl, {
      data: 0
    }), Xh = Cn(Ql), Gu = Xh, Zh = {
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
      MozPrintableKey: "Unidentified"
    }, Yn = {
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
      224: "Meta"
    };
    function Hg(e) {
      if (e.key) {
        var t = Zh[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = gr(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Yn[e.keyCode] || "Unidentified" : "";
    }
    var Jh = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Wg(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Jh[e];
      return i ? !!a[i] : !1;
    }
    function bp(e) {
      return Wg;
    }
    var em = Mt({}, Wl, {
      key: Hg,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: bp,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? gr(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? gr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), tm = Cn(em), Yg = Mt({}, Wu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Pa = Cn(Yg), Tp = Mt({}, Wl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: bp
    }), Gg = Cn(Tp), ol = Mt({}, Hl, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Df = Cn(ol), Kl = Mt({}, Wu, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), kf = Cn(Kl), Cp = [9, 13, 27, 32], Af = 229, wp = Kt && "CompositionEvent" in window, ql = null;
    Kt && "documentMode" in document && (ql = document.documentMode);
    var Qg = Kt && "TextEvent" in window && !ql, xp = Kt && (!wp || ql && ql > 8 && ql <= 11), Np = 32, pc = String.fromCharCode(Np);
    function Lf() {
      Lt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Lt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Lt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Lt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Dp = !1;
    function kp(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Kg(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function nm(e, t) {
      return e === "keydown" && t.keyCode === Af;
    }
    function Of(e, t) {
      switch (e) {
        case "keyup":
          return Cp.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Af;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function vc(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Mf(e) {
      return e.locale === "ko";
    }
    var Ro = !1;
    function rm(e, t, a, i, l) {
      var s, v;
      if (wp ? s = Kg(t) : Ro ? Of(t, i) && (s = "onCompositionEnd") : nm(t, i) && (s = "onCompositionStart"), !s)
        return null;
      xp && !Mf(i) && (!Ro && s === "onCompositionStart" ? Ro = sc(l) : s === "onCompositionEnd" && Ro && (v = cc()));
      var y = um(a, s);
      if (y.length > 0) {
        var E = new Xh(s, t, null, i, l);
        if (e.push({
          event: E,
          listeners: y
        }), v)
          E.data = v;
        else {
          var b = vc(i);
          b !== null && (E.data = b);
        }
      }
    }
    function qg(e, t) {
      switch (e) {
        case "compositionend":
          return vc(t);
        case "keypress":
          var a = t.which;
          return a !== Np ? null : (Dp = !0, pc);
        case "textInput":
          var i = t.data;
          return i === pc && Dp ? null : i;
        default:
          return null;
      }
    }
    function Uf(e, t) {
      if (Ro) {
        if (e === "compositionend" || !wp && Of(e, t)) {
          var a = cc();
          return Rp(), Ro = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!kp(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return xp && !Mf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Xg(e, t, a, i, l) {
      var s;
      if (Qg ? s = qg(t, i) : s = Uf(t, i), !s)
        return null;
      var v = um(a, "onBeforeInput");
      if (v.length > 0) {
        var y = new Gu("onBeforeInput", "beforeinput", null, i, l);
        e.push({
          event: y,
          listeners: v
        }), y.data = s;
      }
    }
    function hc(e, t, a, i, l, s, v) {
      rm(e, t, a, i, l), Xg(e, t, a, i, l);
    }
    var Zg = {
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
      week: !0
    };
    function mc(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Zg[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function n(e) {
      if (!Kt)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function r() {
      Lt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function o(e, t, a, i) {
      Ru(i);
      var l = um(t, "onChange");
      if (l.length > 0) {
        var s = new dc("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: l
        });
      }
    }
    var u = null, p = null;
    function h(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function _(e) {
      var t = [];
      o(t, p, e, Sn(e)), js(N, t);
    }
    function N(e) {
      jR(e, 0);
    }
    function L(e) {
      var t = $f(e);
      if (vu(t))
        return e;
    }
    function q(e, t) {
      if (e === "change")
        return t;
    }
    var me = !1;
    Kt && (me = n("input") && (!document.documentMode || document.documentMode > 9));
    function Se(e, t) {
      u = e, p = t, u.attachEvent("onpropertychange", He);
    }
    function pe() {
      u && (u.detachEvent("onpropertychange", He), u = null, p = null);
    }
    function He(e) {
      e.propertyName === "value" && L(p) && _(e);
    }
    function Ze(e, t, a) {
      e === "focusin" ? (pe(), Se(t, a)) : e === "focusout" && pe();
    }
    function tt(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return L(p);
    }
    function Xn(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function B(e, t) {
      if (e === "click")
        return L(t);
    }
    function V(e, t) {
      if (e === "input" || e === "change")
        return L(t);
    }
    function G(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Tt(e, "number", e.value);
    }
    function xe(e, t, a, i, l, s, v) {
      var y = a ? $f(a) : window, E, b;
      if (h(y) ? E = q : mc(y) ? me ? E = V : (E = tt, b = Ze) : Xn(y) && (E = B), E) {
        var C = E(t, a);
        if (C) {
          o(e, C, i, l);
          return;
        }
      }
      b && b(t, y, a), t === "focusout" && G(y);
    }
    function ot() {
      Ft("onMouseEnter", ["mouseout", "mouseover"]), Ft("onMouseLeave", ["mouseout", "mouseover"]), Ft("onPointerEnter", ["pointerout", "pointerover"]), Ft("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Et(e, t, a, i, l, s, v) {
      var y = t === "mouseover" || t === "pointerover", E = t === "mouseout" || t === "pointerout";
      if (y && !_h(i)) {
        var b = i.relatedTarget || i.fromElement;
        if (b && (Sc(b) || Hp(b)))
          return;
      }
      if (!(!E && !y)) {
        var C;
        if (l.window === l)
          C = l;
        else {
          var j = l.ownerDocument;
          j ? C = j.defaultView || j.parentWindow : C = window;
        }
        var z, K;
        if (E) {
          var X = i.relatedTarget || i.toElement;
          if (z = a, K = X ? Sc(X) : null, K !== null) {
            var te = Go(K);
            (K !== te || K.tag !== I && K.tag !== ae) && (K = null);
          }
        } else
          z = null, K = a;
        if (z !== K) {
          var Fe = il, yt = "onMouseLeave", st = "onMouseEnter", Jt = "mouse";
          (t === "pointerout" || t === "pointerover") && (Fe = Pa, yt = "onPointerLeave", st = "onPointerEnter", Jt = "pointer");
          var Ht = z == null ? C : $f(z), H = K == null ? C : $f(K), ne = new Fe(yt, Jt + "leave", z, i, l);
          ne.target = Ht, ne.relatedTarget = H;
          var W = null, Ee = Sc(l);
          if (Ee === a) {
            var Qe = new Fe(st, Jt + "enter", K, i, l);
            Qe.target = H, Qe.relatedTarget = Ht, W = Qe;
          }
          L1(e, ne, W, z, K);
        }
      }
    }
    function Rt(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ut = typeof Object.is == "function" ? Object.is : Rt;
    function Gn(e, t) {
      if (ut(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var l = 0; l < a.length; l++) {
        var s = a[l];
        if (!wn.call(t, s) || !ut(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function an(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function ll(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function am(e, t) {
      for (var a = an(e), i = 0, l = 0; a; ) {
        if (a.nodeType === oo) {
          if (l = i + a.textContent.length, i <= t && l >= t)
            return {
              node: a,
              offset: t - i
            };
          i = l;
        }
        a = an(ll(a));
      }
    }
    function f1(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var l = i.anchorNode, s = i.anchorOffset, v = i.focusNode, y = i.focusOffset;
      try {
        l.nodeType, v.nodeType;
      } catch {
        return null;
      }
      return d1(e, l, s, v, y);
    }
    function d1(e, t, a, i, l) {
      var s = 0, v = -1, y = -1, E = 0, b = 0, C = e, j = null;
      e: for (; ; ) {
        for (var z = null; C === t && (a === 0 || C.nodeType === oo) && (v = s + a), C === i && (l === 0 || C.nodeType === oo) && (y = s + l), C.nodeType === oo && (s += C.nodeValue.length), (z = C.firstChild) !== null; )
          j = C, C = z;
        for (; ; ) {
          if (C === e)
            break e;
          if (j === t && ++E === a && (v = s), j === i && ++b === l && (y = s), (z = C.nextSibling) !== null)
            break;
          C = j, j = C.parentNode;
        }
        C = z;
      }
      return v === -1 || y === -1 ? null : {
        start: v,
        end: y
      };
    }
    function p1(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var l = i.getSelection(), s = e.textContent.length, v = Math.min(t.start, s), y = t.end === void 0 ? v : Math.min(t.end, s);
        if (!l.extend && v > y) {
          var E = y;
          y = v, v = E;
        }
        var b = am(e, v), C = am(e, y);
        if (b && C) {
          if (l.rangeCount === 1 && l.anchorNode === b.node && l.anchorOffset === b.offset && l.focusNode === C.node && l.focusOffset === C.offset)
            return;
          var j = a.createRange();
          j.setStart(b.node, b.offset), l.removeAllRanges(), v > y ? (l.addRange(j), l.extend(C.node, C.offset)) : (j.setEnd(C.node, C.offset), l.addRange(j));
        }
      }
    }
    function wR(e) {
      return e && e.nodeType === oo;
    }
    function xR(e, t) {
      return !e || !t ? !1 : e === t ? !0 : wR(e) ? !1 : wR(t) ? xR(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function v1(e) {
      return e && e.ownerDocument && xR(e.ownerDocument.documentElement, e);
    }
    function h1(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function NR() {
      for (var e = window, t = ki(); t instanceof e.HTMLIFrameElement; ) {
        if (h1(t))
          e = t.contentWindow;
        else
          return t;
        t = ki(e.document);
      }
      return t;
    }
    function Jg(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function m1() {
      var e = NR();
      return {
        focusedElem: e,
        selectionRange: Jg(e) ? g1(e) : null
      };
    }
    function y1(e) {
      var t = NR(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && v1(a)) {
        i !== null && Jg(a) && S1(a, i);
        for (var l = [], s = a; s = s.parentNode; )
          s.nodeType === ha && l.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var v = 0; v < l.length; v++) {
          var y = l[v];
          y.element.scrollLeft = y.left, y.element.scrollTop = y.top;
        }
      }
    }
    function g1(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = f1(e), t || {
        start: 0,
        end: 0
      };
    }
    function S1(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : p1(e, t);
    }
    var E1 = Kt && "documentMode" in document && document.documentMode <= 11;
    function R1() {
      Lt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var zf = null, eS = null, Ap = null, tS = !1;
    function _1(e) {
      if ("selectionStart" in e && Jg(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function b1(e) {
      return e.window === e ? e.document : e.nodeType === Da ? e : e.ownerDocument;
    }
    function DR(e, t, a) {
      var i = b1(a);
      if (!(tS || zf == null || zf !== ki(i))) {
        var l = _1(zf);
        if (!Ap || !Gn(Ap, l)) {
          Ap = l;
          var s = um(eS, "onSelect");
          if (s.length > 0) {
            var v = new dc("onSelect", "select", null, t, a);
            e.push({
              event: v,
              listeners: s
            }), v.target = zf;
          }
        }
      }
    }
    function T1(e, t, a, i, l, s, v) {
      var y = a ? $f(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (mc(y) || y.contentEditable === "true") && (zf = y, eS = a, Ap = null);
          break;
        case "focusout":
          zf = null, eS = null, Ap = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          tS = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          tS = !1, DR(e, i, l);
          break;
        // Chrome and IE fire non-standard event when selection is changed (and
        // sometimes when it hasn't). IE's event fires out of order with respect
        // to key and input events on deletion, so we discard it.
        //
        // Firefox doesn't support selectionchange, so check selection status
        // after each key entry. The selection changes after keydown and before
        // keyup, but we check on keydown as well in the case of holding down a
        // key, when multiple keydown events are fired but only one keyup is.
        // This is also our approach for IE handling, for the reason above.
        case "selectionchange":
          if (E1)
            break;
        // falls through
        case "keydown":
        case "keyup":
          DR(e, i, l);
      }
    }
    function im(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Vf = {
      animationend: im("Animation", "AnimationEnd"),
      animationiteration: im("Animation", "AnimationIteration"),
      animationstart: im("Animation", "AnimationStart"),
      transitionend: im("Transition", "TransitionEnd")
    }, nS = {}, kR = {};
    Kt && (kR = document.createElement("div").style, "AnimationEvent" in window || (delete Vf.animationend.animation, delete Vf.animationiteration.animation, delete Vf.animationstart.animation), "TransitionEvent" in window || delete Vf.transitionend.transition);
    function om(e) {
      if (nS[e])
        return nS[e];
      if (!Vf[e])
        return e;
      var t = Vf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in kR)
          return nS[e] = t[a];
      return e;
    }
    var AR = om("animationend"), LR = om("animationiteration"), OR = om("animationstart"), MR = om("transitionend"), UR = /* @__PURE__ */ new Map(), zR = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Qu(e, t) {
      UR.set(e, t), Lt(t, [e]);
    }
    function C1() {
      for (var e = 0; e < zR.length; e++) {
        var t = zR[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Qu(a, "on" + i);
      }
      Qu(AR, "onAnimationEnd"), Qu(LR, "onAnimationIteration"), Qu(OR, "onAnimationStart"), Qu("dblclick", "onDoubleClick"), Qu("focusin", "onFocus"), Qu("focusout", "onBlur"), Qu(MR, "onTransitionEnd");
    }
    function w1(e, t, a, i, l, s, v) {
      var y = UR.get(t);
      if (y !== void 0) {
        var E = dc, b = t;
        switch (t) {
          case "keypress":
            if (gr(i) === 0)
              return;
          /* falls through */
          case "keydown":
          case "keyup":
            E = tm;
            break;
          case "focusin":
            b = "focus", E = Yu;
            break;
          case "focusout":
            b = "blur", E = Yu;
            break;
          case "beforeblur":
          case "afterblur":
            E = Yu;
            break;
          case "click":
            if (i.button === 2)
              return;
          /* falls through */
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          // TODO: Disabled elements should not respond to mouse events
          /* falls through */
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            E = il;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            E = Qh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            E = Gg;
            break;
          case AR:
          case LR:
          case OR:
            E = Ig;
            break;
          case MR:
            E = Df;
            break;
          case "scroll":
            E = $g;
            break;
          case "wheel":
            E = kf;
            break;
          case "copy":
          case "cut":
          case "paste":
            E = qh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            E = Pa;
            break;
        }
        var C = (s & zs) !== 0;
        {
          var j = !C && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", z = k1(a, y, i.type, C, j);
          if (z.length > 0) {
            var K = new E(y, b, null, i, l);
            e.push({
              event: K,
              listeners: z
            });
          }
        }
      }
    }
    C1(), ot(), r(), R1(), Lf();
    function x1(e, t, a, i, l, s, v) {
      w1(e, t, a, i, l, s);
      var y = (s & Dg) === 0;
      y && (Et(e, t, a, i, l), xe(e, t, a, i, l), T1(e, t, a, i, l), hc(e, t, a, i, l));
    }
    var Lp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], rS = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Lp));
    function VR(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, $d(i, t, void 0, e), e.currentTarget = null;
    }
    function N1(e, t, a) {
      var i;
      if (a)
        for (var l = t.length - 1; l >= 0; l--) {
          var s = t[l], v = s.instance, y = s.currentTarget, E = s.listener;
          if (v !== i && e.isPropagationStopped())
            return;
          VR(e, E, y), i = v;
        }
      else
        for (var b = 0; b < t.length; b++) {
          var C = t[b], j = C.instance, z = C.currentTarget, K = C.listener;
          if (j !== i && e.isPropagationStopped())
            return;
          VR(e, K, z), i = j;
        }
    }
    function jR(e, t) {
      for (var a = (t & zs) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], s = l.event, v = l.listeners;
        N1(s, v, a);
      }
      Ag();
    }
    function D1(e, t, a, i, l) {
      var s = Sn(a), v = [];
      x1(v, e, i, a, s, t), jR(v, t);
    }
    function $n(e, t) {
      rS.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = iN(t), l = O1(e);
      i.has(l) || (FR(t, e, Us, a), i.add(l));
    }
    function aS(e, t, a) {
      rS.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= zs), FR(a, e, i, t);
    }
    var lm = "_reactListening" + Math.random().toString(36).slice(2);
    function Op(e) {
      if (!e[lm]) {
        e[lm] = !0, Ne.forEach(function(a) {
          a !== "selectionchange" && (rS.has(a) || aS(a, !1, e), aS(a, !0, e));
        });
        var t = e.nodeType === Da ? e : e.ownerDocument;
        t !== null && (t[lm] || (t[lm] = !0, aS("selectionchange", !1, t)));
      }
    }
    function FR(e, t, a, i, l) {
      var s = ic(e, t, a), v = void 0;
      Fs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (v = !0), e = e, i ? v !== void 0 ? Ep(e, t, s, v) : xf(e, t, s) : v !== void 0 ? nl(e, t, s, v) : Eo(e, t, s);
    }
    function PR(e, t) {
      return e === t || e.nodeType === In && e.parentNode === t;
    }
    function iS(e, t, a, i, l) {
      var s = i;
      if (!(t & Kc) && !(t & Us)) {
        var v = l;
        if (i !== null) {
          var y = i;
          e: for (; ; ) {
            if (y === null)
              return;
            var E = y.tag;
            if (E === Z || E === le) {
              var b = y.stateNode.containerInfo;
              if (PR(b, v))
                break;
              if (E === le)
                for (var C = y.return; C !== null; ) {
                  var j = C.tag;
                  if (j === Z || j === le) {
                    var z = C.stateNode.containerInfo;
                    if (PR(z, v))
                      return;
                  }
                  C = C.return;
                }
              for (; b !== null; ) {
                var K = Sc(b);
                if (K === null)
                  return;
                var X = K.tag;
                if (X === I || X === ae) {
                  y = s = K;
                  continue e;
                }
                b = b.parentNode;
              }
            }
            y = y.return;
          }
        }
      }
      js(function() {
        return D1(e, t, a, s);
      });
    }
    function Mp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function k1(e, t, a, i, l, s) {
      for (var v = t !== null ? t + "Capture" : null, y = i ? v : t, E = [], b = e, C = null; b !== null; ) {
        var j = b, z = j.stateNode, K = j.tag;
        if (K === I && z !== null && (C = z, y !== null)) {
          var X = Al(b, y);
          X != null && E.push(Mp(b, X, C));
        }
        if (l)
          break;
        b = b.return;
      }
      return E;
    }
    function um(e, t) {
      for (var a = t + "Capture", i = [], l = e; l !== null; ) {
        var s = l, v = s.stateNode, y = s.tag;
        if (y === I && v !== null) {
          var E = v, b = Al(l, a);
          b != null && i.unshift(Mp(l, b, E));
          var C = Al(l, t);
          C != null && i.push(Mp(l, C, E));
        }
        l = l.return;
      }
      return i;
    }
    function jf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== I);
      return e || null;
    }
    function A1(e, t) {
      for (var a = e, i = t, l = 0, s = a; s; s = jf(s))
        l++;
      for (var v = 0, y = i; y; y = jf(y))
        v++;
      for (; l - v > 0; )
        a = jf(a), l--;
      for (; v - l > 0; )
        i = jf(i), v--;
      for (var E = l; E--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = jf(a), i = jf(i);
      }
      return null;
    }
    function $R(e, t, a, i, l) {
      for (var s = t._reactName, v = [], y = a; y !== null && y !== i; ) {
        var E = y, b = E.alternate, C = E.stateNode, j = E.tag;
        if (b !== null && b === i)
          break;
        if (j === I && C !== null) {
          var z = C;
          if (l) {
            var K = Al(y, s);
            K != null && v.unshift(Mp(y, K, z));
          } else if (!l) {
            var X = Al(y, s);
            X != null && v.push(Mp(y, X, z));
          }
        }
        y = y.return;
      }
      v.length !== 0 && e.push({
        event: t,
        listeners: v
      });
    }
    function L1(e, t, a, i, l) {
      var s = i && l ? A1(i, l) : null;
      i !== null && $R(e, t, i, s, !1), l !== null && a !== null && $R(e, a, l, s, !0);
    }
    function O1(e, t) {
      return e + "__bubble";
    }
    var ii = !1, Up = "dangerouslySetInnerHTML", sm = "suppressContentEditableWarning", Ku = "suppressHydrationWarning", BR = "autoFocus", yc = "children", gc = "style", cm = "__html", oS, fm, zp, IR, dm, HR, WR;
    oS = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, fm = function(e, t) {
      Eu(e, t), mh(e, t), Io(e, t, {
        registrationNameDependencies: vt,
        possibleRegistrationNames: Bt
      });
    }, HR = Kt && !document.documentMode, zp = function(e, t, a) {
      if (!ii) {
        var i = pm(a), l = pm(t);
        l !== i && (ii = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
      }
    }, IR = function(e) {
      if (!ii) {
        ii = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, dm = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, WR = function(e, t) {
      var a = e.namespaceURI === io ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var M1 = /\r\n?/g, U1 = /\u0000|\uFFFD/g;
    function pm(e) {
      $r(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(M1, `
`).replace(U1, "");
    }
    function vm(e, t, a, i) {
      var l = pm(t), s = pm(e);
      if (s !== l && (i && (ii || (ii = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, l))), a && ie))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function YR(e) {
      return e.nodeType === Da ? e : e.ownerDocument;
    }
    function z1() {
    }
    function hm(e) {
      e.onclick = z1;
    }
    function V1(e, t, a, i, l) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var v = i[s];
          if (s === gc)
            v && Object.freeze(v), ch(t, v);
          else if (s === Up) {
            var y = v ? v[cm] : void 0;
            y != null && th(t, y);
          } else if (s === yc)
            if (typeof v == "string") {
              var E = e !== "textarea" || v !== "";
              E && Ds(t, v);
            } else typeof v == "number" && Ds(t, "" + v);
          else s === sm || s === Ku || s === BR || (vt.hasOwnProperty(s) ? v != null && (typeof v != "function" && dm(s, v), s === "onScroll" && $n("scroll", t)) : v != null && Wr(t, s, v, l));
        }
    }
    function j1(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var s = t[l], v = t[l + 1];
        s === gc ? ch(e, v) : s === Up ? th(e, v) : s === yc ? Ds(e, v) : Wr(e, s, v, i);
      }
    }
    function F1(e, t, a, i) {
      var l, s = YR(a), v, y = i;
      if (y === io && (y = bd(e)), y === io) {
        if (l = Nl(e, t), !l && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var E = s.createElement("div");
          E.innerHTML = "<script><\/script>";
          var b = E.firstChild;
          v = E.removeChild(b);
        } else if (typeof t.is == "string")
          v = s.createElement(e, {
            is: t.is
          });
        else if (v = s.createElement(e), e === "select") {
          var C = v;
          t.multiple ? C.multiple = !0 : t.size && (C.size = t.size);
        }
      } else
        v = s.createElementNS(y, e);
      return y === io && !l && Object.prototype.toString.call(v) === "[object HTMLUnknownElement]" && !wn.call(oS, e) && (oS[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), v;
    }
    function P1(e, t) {
      return YR(t).createTextNode(e);
    }
    function $1(e, t, a, i) {
      var l = Nl(t, a);
      fm(t, a);
      var s;
      switch (t) {
        case "dialog":
          $n("cancel", e), $n("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          $n("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var v = 0; v < Lp.length; v++)
            $n(Lp[v], e);
          s = a;
          break;
        case "source":
          $n("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          $n("error", e), $n("load", e), s = a;
          break;
        case "details":
          $n("toggle", e), s = a;
          break;
        case "input":
          D(e, a), s = R(e, a), $n("invalid", e);
          break;
        case "option":
          vn(e, a), s = a;
          break;
        case "select":
          Ns(e, a), s = xs(e, a), $n("invalid", e);
          break;
        case "textarea":
          Jv(e, a), s = _d(e, a), $n("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Ls(t, s), V1(t, e, i, s, l), t) {
        case "input":
          no(e), we(e, a, !1);
          break;
        case "textarea":
          no(e), Bc(e);
          break;
        case "option":
          hn(e, a);
          break;
        case "select":
          Rd(e, a);
          break;
        default:
          typeof s.onClick == "function" && hm(e);
          break;
      }
    }
    function B1(e, t, a, i, l) {
      fm(t, i);
      var s = null, v, y;
      switch (t) {
        case "input":
          v = R(e, a), y = R(e, i), s = [];
          break;
        case "select":
          v = xs(e, a), y = xs(e, i), s = [];
          break;
        case "textarea":
          v = _d(e, a), y = _d(e, i), s = [];
          break;
        default:
          v = a, y = i, typeof v.onClick != "function" && typeof y.onClick == "function" && hm(e);
          break;
      }
      Ls(t, y);
      var E, b, C = null;
      for (E in v)
        if (!(y.hasOwnProperty(E) || !v.hasOwnProperty(E) || v[E] == null))
          if (E === gc) {
            var j = v[E];
            for (b in j)
              j.hasOwnProperty(b) && (C || (C = {}), C[b] = "");
          } else E === Up || E === yc || E === sm || E === Ku || E === BR || (vt.hasOwnProperty(E) ? s || (s = []) : (s = s || []).push(E, null));
      for (E in y) {
        var z = y[E], K = v != null ? v[E] : void 0;
        if (!(!y.hasOwnProperty(E) || z === K || z == null && K == null))
          if (E === gc)
            if (z && Object.freeze(z), K) {
              for (b in K)
                K.hasOwnProperty(b) && (!z || !z.hasOwnProperty(b)) && (C || (C = {}), C[b] = "");
              for (b in z)
                z.hasOwnProperty(b) && K[b] !== z[b] && (C || (C = {}), C[b] = z[b]);
            } else
              C || (s || (s = []), s.push(E, C)), C = z;
          else if (E === Up) {
            var X = z ? z[cm] : void 0, te = K ? K[cm] : void 0;
            X != null && te !== X && (s = s || []).push(E, X);
          } else E === yc ? (typeof z == "string" || typeof z == "number") && (s = s || []).push(E, "" + z) : E === sm || E === Ku || (vt.hasOwnProperty(E) ? (z != null && (typeof z != "function" && dm(E, z), E === "onScroll" && $n("scroll", e)), !s && K !== z && (s = [])) : (s = s || []).push(E, z));
      }
      return C && (fh(C, y[gc]), (s = s || []).push(gc, C)), s;
    }
    function I1(e, t, a, i, l) {
      a === "input" && l.type === "radio" && l.name != null && Q(e, l);
      var s = Nl(a, i), v = Nl(a, l);
      switch (j1(e, t, s, v), a) {
        case "input":
          ee(e, l);
          break;
        case "textarea":
          eh(e, l);
          break;
        case "select":
          gg(e, l);
          break;
      }
    }
    function H1(e) {
      {
        var t = e.toLowerCase();
        return Yc.hasOwnProperty(t) && Yc[t] || null;
      }
    }
    function W1(e, t, a, i, l, s, v) {
      var y, E;
      switch (y = Nl(t, a), fm(t, a), t) {
        case "dialog":
          $n("cancel", e), $n("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          $n("load", e);
          break;
        case "video":
        case "audio":
          for (var b = 0; b < Lp.length; b++)
            $n(Lp[b], e);
          break;
        case "source":
          $n("error", e);
          break;
        case "img":
        case "image":
        case "link":
          $n("error", e), $n("load", e);
          break;
        case "details":
          $n("toggle", e);
          break;
        case "input":
          D(e, a), $n("invalid", e);
          break;
        case "option":
          vn(e, a);
          break;
        case "select":
          Ns(e, a), $n("invalid", e);
          break;
        case "textarea":
          Jv(e, a), $n("invalid", e);
          break;
      }
      Ls(t, a);
      {
        E = /* @__PURE__ */ new Set();
        for (var C = e.attributes, j = 0; j < C.length; j++) {
          var z = C[j].name.toLowerCase();
          switch (z) {
            // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              E.add(C[j].name);
          }
        }
      }
      var K = null;
      for (var X in a)
        if (a.hasOwnProperty(X)) {
          var te = a[X];
          if (X === yc)
            typeof te == "string" ? e.textContent !== te && (a[Ku] !== !0 && vm(e.textContent, te, s, v), K = [yc, te]) : typeof te == "number" && e.textContent !== "" + te && (a[Ku] !== !0 && vm(e.textContent, te, s, v), K = [yc, "" + te]);
          else if (vt.hasOwnProperty(X))
            te != null && (typeof te != "function" && dm(X, te), X === "onScroll" && $n("scroll", e));
          else if (v && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof y == "boolean") {
            var Fe = void 0, yt = y && Y ? null : Xe(X);
            if (a[Ku] !== !0) {
              if (!(X === sm || X === Ku || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              X === "value" || X === "checked" || X === "selected")) {
                if (X === Up) {
                  var st = e.innerHTML, Jt = te ? te[cm] : void 0;
                  if (Jt != null) {
                    var Ht = WR(e, Jt);
                    Ht !== st && zp(X, st, Ht);
                  }
                } else if (X === gc) {
                  if (E.delete(X), HR) {
                    var H = Ng(te);
                    Fe = e.getAttribute("style"), H !== Fe && zp(X, Fe, H);
                  }
                } else if (y && !Y)
                  E.delete(X.toLowerCase()), Fe = vr(e, X, te), te !== Fe && zp(X, Fe, te);
                else if (!ge(X, yt, y) && !_e(X, te, yt, y)) {
                  var ne = !1;
                  if (yt !== null)
                    E.delete(yt.attributeName), Fe = zr(e, X, te, yt);
                  else {
                    var W = i;
                    if (W === io && (W = bd(t)), W === io)
                      E.delete(X.toLowerCase());
                    else {
                      var Ee = H1(X);
                      Ee !== null && Ee !== X && (ne = !0, E.delete(Ee)), E.delete(X);
                    }
                    Fe = vr(e, X, te);
                  }
                  var Qe = Y;
                  !Qe && te !== Fe && !ne && zp(X, Fe, te);
                }
              }
            }
          }
        }
      switch (v && // $FlowFixMe - Should be inferred as not undefined.
      E.size > 0 && a[Ku] !== !0 && IR(E), t) {
        case "input":
          no(e), we(e, a, !0);
          break;
        case "textarea":
          no(e), Bc(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && hm(e);
          break;
      }
      return K;
    }
    function Y1(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function lS(e, t) {
      {
        if (ii)
          return;
        ii = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function uS(e, t) {
      {
        if (ii)
          return;
        ii = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function sS(e, t, a) {
      {
        if (ii)
          return;
        ii = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function cS(e, t) {
      {
        if (t === "" || ii)
          return;
        ii = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function G1(e, t, a) {
      switch (t) {
        case "input":
          et(e, a);
          return;
        case "textarea":
          Sg(e, a);
          return;
        case "select":
          Xv(e, a);
          return;
      }
    }
    var Vp = function() {
    }, jp = function() {
    };
    {
      var Q1 = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], GR = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], K1 = GR.concat(["button"]), q1 = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], QR = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      jp = function(e, t) {
        var a = Mt({}, e || QR), i = {
          tag: t
        };
        return GR.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), K1.indexOf(t) !== -1 && (a.pTagInButtonScope = null), Q1.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var X1 = function(e, t) {
        switch (t) {
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          // Strictly speaking, seeing an <option> doesn't mean we're in a <select>
          // but
          case "option":
            return e === "#text";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
          // No special behavior since these rules fall back to "in body" mode for
          // all except special table nodes which cause bad parsing behavior anyway.
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
          case "colgroup":
            return e === "col" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return q1.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, Z1 = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, KR = {};
      Vp = function(e, t, a) {
        a = a || QR;
        var i = a.current, l = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = X1(e, l) ? null : i, v = s ? null : Z1(e, a), y = s || v;
        if (y) {
          var E = y.tag, b = !!s + "|" + e + "|" + E;
          if (!KR[b]) {
            KR[b] = !0;
            var C = e, j = "";
            if (e === "#text" ? /\S/.test(t) ? C = "Text nodes" : (C = "Whitespace text nodes", j = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : C = "<" + e + ">", s) {
              var z = "";
              E === "table" && e === "tr" && (z += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", C, E, j, z);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", C, E);
          }
        }
      };
    }
    var mm = "suppressHydrationWarning", ym = "$", gm = "/$", Fp = "$?", Pp = "$!", J1 = "style", fS = null, dS = null;
    function ex(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Da:
        case Cd: {
          t = i === Da ? "#document" : "#fragment";
          var l = e.documentElement;
          a = l ? l.namespaceURI : Td(null, "");
          break;
        }
        default: {
          var s = i === In ? e.parentNode : e, v = s.namespaceURI || null;
          t = s.tagName, a = Td(v, t);
          break;
        }
      }
      {
        var y = t.toLowerCase(), E = jp(null, y);
        return {
          namespace: a,
          ancestorInfo: E
        };
      }
    }
    function tx(e, t, a) {
      {
        var i = e, l = Td(i.namespace, t), s = jp(i.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: s
        };
      }
    }
    function MF(e) {
      return e;
    }
    function nx(e) {
      fS = fr(), dS = m1();
      var t = null;
      return $l(!1), t;
    }
    function rx(e) {
      y1(dS), $l(fS), fS = null, dS = null;
    }
    function ax(e, t, a, i, l) {
      var s;
      {
        var v = i;
        if (Vp(e, null, v.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var y = "" + t.children, E = jp(v.ancestorInfo, e);
          Vp(null, y, E);
        }
        s = v.namespace;
      }
      var b = F1(e, t, a, s);
      return Ip(l, b), ES(b, t), b;
    }
    function ix(e, t) {
      e.appendChild(t);
    }
    function ox(e, t, a, i, l) {
      switch ($1(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function lx(e, t, a, i, l, s) {
      {
        var v = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var y = "" + i.children, E = jp(v.ancestorInfo, t);
          Vp(null, y, E);
        }
      }
      return B1(e, t, a, i);
    }
    function pS(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function ux(e, t, a, i) {
      {
        var l = a;
        Vp(null, e, l.ancestorInfo);
      }
      var s = P1(e, t);
      return Ip(i, s), s;
    }
    function sx() {
      var e = window.event;
      return e === void 0 ? bi : Il(e.type);
    }
    var vS = typeof setTimeout == "function" ? setTimeout : void 0, cx = typeof clearTimeout == "function" ? clearTimeout : void 0, hS = -1, qR = typeof Promise == "function" ? Promise : void 0, fx = typeof queueMicrotask == "function" ? queueMicrotask : typeof qR < "u" ? function(e) {
      return qR.resolve(null).then(e).catch(dx);
    } : vS;
    function dx(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function px(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function vx(e, t, a, i, l, s) {
      I1(e, t, a, i, l), ES(e, l);
    }
    function XR(e) {
      Ds(e, "");
    }
    function hx(e, t, a) {
      e.nodeValue = a;
    }
    function mx(e, t) {
      e.appendChild(t);
    }
    function yx(e, t) {
      var a;
      e.nodeType === In ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && hm(a);
    }
    function gx(e, t, a) {
      e.insertBefore(t, a);
    }
    function Sx(e, t, a) {
      e.nodeType === In ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Ex(e, t) {
      e.removeChild(t);
    }
    function Rx(e, t) {
      e.nodeType === In ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function mS(e, t) {
      var a = t, i = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === In) {
          var s = l.data;
          if (s === gm)
            if (i === 0) {
              e.removeChild(l), Un(t);
              return;
            } else
              i--;
          else (s === ym || s === Fp || s === Pp) && i++;
        }
        a = l;
      } while (a);
      Un(t);
    }
    function _x(e, t) {
      e.nodeType === In ? mS(e.parentNode, t) : e.nodeType === ha && mS(e, t), Un(e);
    }
    function bx(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Tx(e) {
      e.nodeValue = "";
    }
    function Cx(e, t) {
      e = e;
      var a = t[J1], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = $o("display", i);
    }
    function wx(e, t) {
      e.nodeValue = t;
    }
    function xx(e) {
      e.nodeType === ha ? e.textContent = "" : e.nodeType === Da && e.documentElement && e.removeChild(e.documentElement);
    }
    function Nx(e, t, a) {
      return e.nodeType !== ha || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Dx(e, t) {
      return t === "" || e.nodeType !== oo ? null : e;
    }
    function kx(e) {
      return e.nodeType !== In ? null : e;
    }
    function ZR(e) {
      return e.data === Fp;
    }
    function yS(e) {
      return e.data === Pp;
    }
    function Ax(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, l;
      return t && (a = t.dgst, i = t.msg, l = t.stck), {
        message: i,
        digest: a,
        stack: l
      };
    }
    function Lx(e, t) {
      e._reactRetry = t;
    }
    function Sm(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === ha || t === oo)
          break;
        if (t === In) {
          var a = e.data;
          if (a === ym || a === Pp || a === Fp)
            break;
          if (a === gm)
            return null;
        }
      }
      return e;
    }
    function $p(e) {
      return Sm(e.nextSibling);
    }
    function Ox(e) {
      return Sm(e.firstChild);
    }
    function Mx(e) {
      return Sm(e.firstChild);
    }
    function Ux(e) {
      return Sm(e.nextSibling);
    }
    function zx(e, t, a, i, l, s, v) {
      Ip(s, e), ES(e, a);
      var y;
      {
        var E = l;
        y = E.namespace;
      }
      var b = (s.mode & dt) !== Ue;
      return W1(e, t, a, y, i, b, v);
    }
    function Vx(e, t, a, i) {
      return Ip(a, e), a.mode & dt, Y1(e, t);
    }
    function jx(e, t) {
      Ip(t, e);
    }
    function Fx(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === In) {
          var i = t.data;
          if (i === gm) {
            if (a === 0)
              return $p(t);
            a--;
          } else (i === ym || i === Pp || i === Fp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function JR(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === In) {
          var i = t.data;
          if (i === ym || i === Pp || i === Fp) {
            if (a === 0)
              return t;
            a--;
          } else i === gm && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Px(e) {
      Un(e);
    }
    function $x(e) {
      Un(e);
    }
    function Bx(e) {
      return e !== "head" && e !== "body";
    }
    function Ix(e, t, a, i) {
      var l = !0;
      vm(t.nodeValue, a, i, l);
    }
    function Hx(e, t, a, i, l, s) {
      if (t[mm] !== !0) {
        var v = !0;
        vm(i.nodeValue, l, s, v);
      }
    }
    function Wx(e, t) {
      t.nodeType === ha ? lS(e, t) : t.nodeType === In || uS(e, t);
    }
    function Yx(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === ha ? lS(a, t) : t.nodeType === In || uS(a, t));
      }
    }
    function Gx(e, t, a, i, l) {
      (l || t[mm] !== !0) && (i.nodeType === ha ? lS(a, i) : i.nodeType === In || uS(a, i));
    }
    function Qx(e, t, a) {
      sS(e, t);
    }
    function Kx(e, t) {
      cS(e, t);
    }
    function qx(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && sS(i, t);
      }
    }
    function Xx(e, t) {
      {
        var a = e.parentNode;
        a !== null && cS(a, t);
      }
    }
    function Zx(e, t, a, i, l, s) {
      (s || t[mm] !== !0) && sS(a, i);
    }
    function Jx(e, t, a, i, l) {
      (l || t[mm] !== !0) && cS(a, i);
    }
    function eN(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function tN(e) {
      Op(e);
    }
    var Ff = Math.random().toString(36).slice(2), Pf = "__reactFiber$" + Ff, gS = "__reactProps$" + Ff, Bp = "__reactContainer$" + Ff, SS = "__reactEvents$" + Ff, nN = "__reactListeners$" + Ff, rN = "__reactHandles$" + Ff;
    function aN(e) {
      delete e[Pf], delete e[gS], delete e[SS], delete e[nN], delete e[rN];
    }
    function Ip(e, t) {
      t[Pf] = e;
    }
    function Em(e, t) {
      t[Bp] = e;
    }
    function e_(e) {
      e[Bp] = null;
    }
    function Hp(e) {
      return !!e[Bp];
    }
    function Sc(e) {
      var t = e[Pf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Bp] || a[Pf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var l = JR(e); l !== null; ) {
              var s = l[Pf];
              if (s)
                return s;
              l = JR(l);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function qu(e) {
      var t = e[Pf] || e[Bp];
      return t && (t.tag === I || t.tag === ae || t.tag === Ce || t.tag === Z) ? t : null;
    }
    function $f(e) {
      if (e.tag === I || e.tag === ae)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Rm(e) {
      return e[gS] || null;
    }
    function ES(e, t) {
      e[gS] = t;
    }
    function iN(e) {
      var t = e[SS];
      return t === void 0 && (t = e[SS] = /* @__PURE__ */ new Set()), t;
    }
    var t_ = {}, n_ = m.ReactDebugCurrentFrame;
    function _m(e) {
      if (e) {
        var t = e._owner, a = Yt(e.type, e._source, t ? t.type : null);
        n_.setExtraStackFrame(a);
      } else
        n_.setExtraStackFrame(null);
    }
    function _o(e, t, a, i, l) {
      {
        var s = Function.call.bind(wn);
        for (var v in e)
          if (s(e, v)) {
            var y = void 0;
            try {
              if (typeof e[v] != "function") {
                var E = Error((i || "React class") + ": " + a + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              y = e[v](t, v, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              y = b;
            }
            y && !(y instanceof Error) && (_m(l), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, v, typeof y), _m(null)), y instanceof Error && !(y.message in t_) && (t_[y.message] = !0, _m(l), S("Failed %s type: %s", a, y.message), _m(null));
          }
      }
    }
    var RS = [], bm;
    bm = [];
    var Xl = -1;
    function Xu(e) {
      return {
        current: e
      };
    }
    function ba(e, t) {
      if (Xl < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== bm[Xl] && S("Unexpected Fiber popped."), e.current = RS[Xl], RS[Xl] = null, bm[Xl] = null, Xl--;
    }
    function Ta(e, t, a) {
      Xl++, RS[Xl] = e.current, bm[Xl] = a, e.current = t;
    }
    var _S;
    _S = {};
    var Ci = {};
    Object.freeze(Ci);
    var Zl = Xu(Ci), ul = Xu(!1), bS = Ci;
    function Bf(e, t, a) {
      return a && sl(t) ? bS : Zl.current;
    }
    function r_(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function If(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return Ci;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
          return l.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var v in i)
          s[v] = t[v];
        {
          var y = xt(e) || "Unknown";
          _o(i, s, "context", y);
        }
        return l && r_(e, t, s), s;
      }
    }
    function Tm() {
      return ul.current;
    }
    function sl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Cm(e) {
      ba(ul, e), ba(Zl, e);
    }
    function TS(e) {
      ba(ul, e), ba(Zl, e);
    }
    function a_(e, t, a) {
      {
        if (Zl.current !== Ci)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Ta(Zl, t, e), Ta(ul, a, e);
      }
    }
    function i_(e, t, a) {
      {
        var i = e.stateNode, l = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = xt(e) || "Unknown";
            _S[s] || (_S[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var v = i.getChildContext();
        for (var y in v)
          if (!(y in l))
            throw new Error((xt(e) || "Unknown") + '.getChildContext(): key "' + y + '" is not defined in childContextTypes.');
        {
          var E = xt(e) || "Unknown";
          _o(l, v, "child context", E);
        }
        return Mt({}, a, v);
      }
    }
    function wm(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Ci;
        return bS = Zl.current, Ta(Zl, a, e), Ta(ul, ul.current, e), !0;
      }
    }
    function o_(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = i_(e, t, bS);
          i.__reactInternalMemoizedMergedChildContext = l, ba(ul, e), ba(Zl, e), Ta(Zl, l, e), Ta(ul, a, e);
        } else
          ba(ul, e), Ta(ul, a, e);
      }
    }
    function oN(e) {
      {
        if (!La(e) || e.tag !== $)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case Z:
              return t.stateNode.context;
            case $: {
              var a = t.type;
              if (sl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Zu = 0, xm = 1, Jl = null, CS = !1, wS = !1;
    function l_(e) {
      Jl === null ? Jl = [e] : Jl.push(e);
    }
    function lN(e) {
      CS = !0, l_(e);
    }
    function u_() {
      CS && Ju();
    }
    function Ju() {
      if (!wS && Jl !== null) {
        wS = !0;
        var e = 0, t = Xr();
        try {
          var a = !0, i = Jl;
          for (nn(ja); e < i.length; e++) {
            var l = i[e];
            do
              l = l(a);
            while (l !== null);
          }
          Jl = null, CS = !1;
        } catch (s) {
          throw Jl !== null && (Jl = Jl.slice(e + 1)), Wd(Qo, Ju), s;
        } finally {
          nn(t), wS = !1;
        }
      }
      return null;
    }
    var Hf = [], Wf = 0, Nm = null, Dm = 0, Ii = [], Hi = 0, Ec = null, eu = 1, tu = "";
    function uN(e) {
      return _c(), (e.flags & xh) !== mt;
    }
    function sN(e) {
      return _c(), Dm;
    }
    function cN() {
      var e = tu, t = eu, a = t & ~fN(t);
      return a.toString(32) + e;
    }
    function Rc(e, t) {
      _c(), Hf[Wf++] = Dm, Hf[Wf++] = Nm, Nm = e, Dm = t;
    }
    function s_(e, t, a) {
      _c(), Ii[Hi++] = eu, Ii[Hi++] = tu, Ii[Hi++] = Ec, Ec = e;
      var i = eu, l = tu, s = km(i) - 1, v = i & ~(1 << s), y = a + 1, E = km(t) + s;
      if (E > 30) {
        var b = s - s % 5, C = (1 << b) - 1, j = (v & C).toString(32), z = v >> b, K = s - b, X = km(t) + K, te = y << K, Fe = te | z, yt = j + l;
        eu = 1 << X | Fe, tu = yt;
      } else {
        var st = y << s, Jt = st | v, Ht = l;
        eu = 1 << E | Jt, tu = Ht;
      }
    }
    function xS(e) {
      _c();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Rc(e, a), s_(e, a, i);
      }
    }
    function km(e) {
      return 32 - Du(e);
    }
    function fN(e) {
      return 1 << km(e) - 1;
    }
    function NS(e) {
      for (; e === Nm; )
        Nm = Hf[--Wf], Hf[Wf] = null, Dm = Hf[--Wf], Hf[Wf] = null;
      for (; e === Ec; )
        Ec = Ii[--Hi], Ii[Hi] = null, tu = Ii[--Hi], Ii[Hi] = null, eu = Ii[--Hi], Ii[Hi] = null;
    }
    function dN() {
      return _c(), Ec !== null ? {
        id: eu,
        overflow: tu
      } : null;
    }
    function pN(e, t) {
      _c(), Ii[Hi++] = eu, Ii[Hi++] = tu, Ii[Hi++] = Ec, eu = t.id, tu = t.overflow, Ec = e;
    }
    function _c() {
      na() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var ta = null, Wi = null, bo = !1, bc = !1, es = null;
    function vN() {
      bo && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function c_() {
      bc = !0;
    }
    function hN() {
      return bc;
    }
    function mN(e) {
      var t = e.stateNode.containerInfo;
      return Wi = Mx(t), ta = e, bo = !0, es = null, bc = !1, !0;
    }
    function yN(e, t, a) {
      return Wi = Ux(t), ta = e, bo = !0, es = null, bc = !1, a !== null && pN(e, a), !0;
    }
    function f_(e, t) {
      switch (e.tag) {
        case Z: {
          Wx(e.stateNode.containerInfo, t);
          break;
        }
        case I: {
          var a = (e.mode & dt) !== Ue;
          Gx(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Ce: {
          var i = e.memoizedState;
          i.dehydrated !== null && Yx(i.dehydrated, t);
          break;
        }
      }
    }
    function d_(e, t) {
      f_(e, t);
      var a = RA();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= on) : i.push(a);
    }
    function DS(e, t) {
      {
        if (bc)
          return;
        switch (e.tag) {
          case Z: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case I:
                var i = t.type;
                t.pendingProps, Qx(a, i);
                break;
              case ae:
                var l = t.pendingProps;
                Kx(a, l);
                break;
            }
            break;
          }
          case I: {
            var s = e.type, v = e.memoizedProps, y = e.stateNode;
            switch (t.tag) {
              case I: {
                var E = t.type, b = t.pendingProps, C = (e.mode & dt) !== Ue;
                Zx(
                  s,
                  v,
                  y,
                  E,
                  b,
                  // TODO: Delete this argument when we remove the legacy root API.
                  C
                );
                break;
              }
              case ae: {
                var j = t.pendingProps, z = (e.mode & dt) !== Ue;
                Jx(
                  s,
                  v,
                  y,
                  j,
                  // TODO: Delete this argument when we remove the legacy root API.
                  z
                );
                break;
              }
            }
            break;
          }
          case Ce: {
            var K = e.memoizedState, X = K.dehydrated;
            if (X !== null) switch (t.tag) {
              case I:
                var te = t.type;
                t.pendingProps, qx(X, te);
                break;
              case ae:
                var Fe = t.pendingProps;
                Xx(X, Fe);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function p_(e, t) {
      t.flags = t.flags & ~Oi | En, DS(e, t);
    }
    function v_(e, t) {
      switch (e.tag) {
        case I: {
          var a = e.type;
          e.pendingProps;
          var i = Nx(t, a);
          return i !== null ? (e.stateNode = i, ta = e, Wi = Ox(i), !0) : !1;
        }
        case ae: {
          var l = e.pendingProps, s = Dx(t, l);
          return s !== null ? (e.stateNode = s, ta = e, Wi = null, !0) : !1;
        }
        case Ce: {
          var v = kx(t);
          if (v !== null) {
            var y = {
              dehydrated: v,
              treeContext: dN(),
              retryLane: Va
            };
            e.memoizedState = y;
            var E = _A(v);
            return E.return = e, e.child = E, ta = e, Wi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function kS(e) {
      return (e.mode & dt) !== Ue && (e.flags & Dt) === mt;
    }
    function AS(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function LS(e) {
      if (bo) {
        var t = Wi;
        if (!t) {
          kS(e) && (DS(ta, e), AS()), p_(ta, e), bo = !1, ta = e;
          return;
        }
        var a = t;
        if (!v_(e, t)) {
          kS(e) && (DS(ta, e), AS()), t = $p(a);
          var i = ta;
          if (!t || !v_(e, t)) {
            p_(ta, e), bo = !1, ta = e;
            return;
          }
          d_(i, a);
        }
      }
    }
    function gN(e, t, a) {
      var i = e.stateNode, l = !bc, s = zx(i, e.type, e.memoizedProps, t, a, e, l);
      return e.updateQueue = s, s !== null;
    }
    function SN(e) {
      var t = e.stateNode, a = e.memoizedProps, i = Vx(t, a, e);
      if (i) {
        var l = ta;
        if (l !== null)
          switch (l.tag) {
            case Z: {
              var s = l.stateNode.containerInfo, v = (l.mode & dt) !== Ue;
              Ix(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                v
              );
              break;
            }
            case I: {
              var y = l.type, E = l.memoizedProps, b = l.stateNode, C = (l.mode & dt) !== Ue;
              Hx(
                y,
                E,
                b,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                C
              );
              break;
            }
          }
      }
      return i;
    }
    function EN(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      jx(a, e);
    }
    function RN(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Fx(a);
    }
    function h_(e) {
      for (var t = e.return; t !== null && t.tag !== I && t.tag !== Z && t.tag !== Ce; )
        t = t.return;
      ta = t;
    }
    function Am(e) {
      if (e !== ta)
        return !1;
      if (!bo)
        return h_(e), bo = !0, !1;
      if (e.tag !== Z && (e.tag !== I || Bx(e.type) && !pS(e.type, e.memoizedProps))) {
        var t = Wi;
        if (t)
          if (kS(e))
            m_(e), AS();
          else
            for (; t; )
              d_(e, t), t = $p(t);
      }
      return h_(e), e.tag === Ce ? Wi = RN(e) : Wi = ta ? $p(e.stateNode) : null, !0;
    }
    function _N() {
      return bo && Wi !== null;
    }
    function m_(e) {
      for (var t = Wi; t; )
        f_(e, t), t = $p(t);
    }
    function Yf() {
      ta = null, Wi = null, bo = !1, bc = !1;
    }
    function y_() {
      es !== null && (cT(es), es = null);
    }
    function na() {
      return bo;
    }
    function OS(e) {
      es === null ? es = [e] : es.push(e);
    }
    var bN = m.ReactCurrentBatchConfig, TN = null;
    function CN() {
      return bN.transition;
    }
    var To = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var wN = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & kn && (t = a), a = a.return;
        return t;
      }, Tc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Wp = [], Yp = [], Gp = [], Qp = [], Kp = [], qp = [], Cc = /* @__PURE__ */ new Set();
      To.recordUnsafeLifecycleWarnings = function(e, t) {
        Cc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Wp.push(e), e.mode & kn && typeof t.UNSAFE_componentWillMount == "function" && Yp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Gp.push(e), e.mode & kn && typeof t.UNSAFE_componentWillReceiveProps == "function" && Qp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Kp.push(e), e.mode & kn && typeof t.UNSAFE_componentWillUpdate == "function" && qp.push(e));
      }, To.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Wp.length > 0 && (Wp.forEach(function(z) {
          e.add(xt(z) || "Component"), Cc.add(z.type);
        }), Wp = []);
        var t = /* @__PURE__ */ new Set();
        Yp.length > 0 && (Yp.forEach(function(z) {
          t.add(xt(z) || "Component"), Cc.add(z.type);
        }), Yp = []);
        var a = /* @__PURE__ */ new Set();
        Gp.length > 0 && (Gp.forEach(function(z) {
          a.add(xt(z) || "Component"), Cc.add(z.type);
        }), Gp = []);
        var i = /* @__PURE__ */ new Set();
        Qp.length > 0 && (Qp.forEach(function(z) {
          i.add(xt(z) || "Component"), Cc.add(z.type);
        }), Qp = []);
        var l = /* @__PURE__ */ new Set();
        Kp.length > 0 && (Kp.forEach(function(z) {
          l.add(xt(z) || "Component"), Cc.add(z.type);
        }), Kp = []);
        var s = /* @__PURE__ */ new Set();
        if (qp.length > 0 && (qp.forEach(function(z) {
          s.add(xt(z) || "Component"), Cc.add(z.type);
        }), qp = []), t.size > 0) {
          var v = Tc(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, v);
        }
        if (i.size > 0) {
          var y = Tc(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, y);
        }
        if (s.size > 0) {
          var E = Tc(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, E);
        }
        if (e.size > 0) {
          var b = Tc(e);
          w(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
        if (a.size > 0) {
          var C = Tc(a);
          w(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, C);
        }
        if (l.size > 0) {
          var j = Tc(l);
          w(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, j);
        }
      };
      var Lm = /* @__PURE__ */ new Map(), g_ = /* @__PURE__ */ new Set();
      To.recordLegacyContextWarning = function(e, t) {
        var a = wN(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!g_.has(e.type)) {
          var i = Lm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Lm.set(a, i)), i.push(e));
        }
      }, To.flushLegacyContextWarning = function() {
        Lm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(xt(s) || "Component"), g_.add(s.type);
            });
            var l = Tc(i);
            try {
              Fn(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
            } finally {
              xn();
            }
          }
        });
      }, To.discardPendingWarnings = function() {
        Wp = [], Yp = [], Gp = [], Qp = [], Kp = [], qp = [], Lm = /* @__PURE__ */ new Map();
      };
    }
    var MS, US, zS, VS, jS, S_ = function(e, t) {
    };
    MS = !1, US = !1, zS = {}, VS = {}, jS = {}, S_ = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = xt(t) || "Component";
        VS[a] || (VS[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function xN(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Xp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & kn || ce) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== $) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !xN(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var l = xt(e) || "Component";
          zS[l] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l, i), zS[l] = !0);
        }
        if (a._owner) {
          var s = a._owner, v;
          if (s) {
            var y = s;
            if (y.tag !== $)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            v = y.stateNode;
          }
          if (!v)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var E = v;
          Bn(i, "ref");
          var b = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === b)
            return t.ref;
          var C = function(j) {
            var z = E.refs;
            j === null ? delete z[b] : z[b] = j;
          };
          return C._stringRef = b, C;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Om(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Mm(e) {
      {
        var t = xt(e) || "Component";
        if (jS[t])
          return;
        jS[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function E_(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function R_(e) {
      function t(H, ne) {
        if (e) {
          var W = H.deletions;
          W === null ? (H.deletions = [ne], H.flags |= on) : W.push(ne);
        }
      }
      function a(H, ne) {
        if (!e)
          return null;
        for (var W = ne; W !== null; )
          t(H, W), W = W.sibling;
        return null;
      }
      function i(H, ne) {
        for (var W = /* @__PURE__ */ new Map(), Ee = ne; Ee !== null; )
          Ee.key !== null ? W.set(Ee.key, Ee) : W.set(Ee.index, Ee), Ee = Ee.sibling;
        return W;
      }
      function l(H, ne) {
        var W = Mc(H, ne);
        return W.index = 0, W.sibling = null, W;
      }
      function s(H, ne, W) {
        if (H.index = W, !e)
          return H.flags |= xh, ne;
        var Ee = H.alternate;
        if (Ee !== null) {
          var Qe = Ee.index;
          return Qe < ne ? (H.flags |= En, ne) : Qe;
        } else
          return H.flags |= En, ne;
      }
      function v(H) {
        return e && H.alternate === null && (H.flags |= En), H;
      }
      function y(H, ne, W, Ee) {
        if (ne === null || ne.tag !== ae) {
          var Qe = OE(W, H.mode, Ee);
          return Qe.return = H, Qe;
        } else {
          var $e = l(ne, W);
          return $e.return = H, $e;
        }
      }
      function E(H, ne, W, Ee) {
        var Qe = W.type;
        if (Qe === Na)
          return C(H, ne, W.props.children, Ee, W.key);
        if (ne !== null && (ne.elementType === Qe || // Keep this check inline so it only runs on the false path:
        wT(ne, W) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Qe == "object" && Qe !== null && Qe.$$typeof === gt && E_(Qe) === ne.type)) {
          var $e = l(ne, W.props);
          return $e.ref = Xp(H, ne, W), $e.return = H, $e._debugSource = W._source, $e._debugOwner = W._owner, $e;
        }
        var Ct = LE(W, H.mode, Ee);
        return Ct.ref = Xp(H, ne, W), Ct.return = H, Ct;
      }
      function b(H, ne, W, Ee) {
        if (ne === null || ne.tag !== le || ne.stateNode.containerInfo !== W.containerInfo || ne.stateNode.implementation !== W.implementation) {
          var Qe = ME(W, H.mode, Ee);
          return Qe.return = H, Qe;
        } else {
          var $e = l(ne, W.children || []);
          return $e.return = H, $e;
        }
      }
      function C(H, ne, W, Ee, Qe) {
        if (ne === null || ne.tag !== Pe) {
          var $e = fs(W, H.mode, Ee, Qe);
          return $e.return = H, $e;
        } else {
          var Ct = l(ne, W);
          return Ct.return = H, Ct;
        }
      }
      function j(H, ne, W) {
        if (typeof ne == "string" && ne !== "" || typeof ne == "number") {
          var Ee = OE("" + ne, H.mode, W);
          return Ee.return = H, Ee;
        }
        if (typeof ne == "object" && ne !== null) {
          switch (ne.$$typeof) {
            case Yr: {
              var Qe = LE(ne, H.mode, W);
              return Qe.ref = Xp(H, null, ne), Qe.return = H, Qe;
            }
            case ca: {
              var $e = ME(ne, H.mode, W);
              return $e.return = H, $e;
            }
            case gt: {
              var Ct = ne._payload, At = ne._init;
              return j(H, At(Ct), W);
            }
          }
          if (tn(ne) || fa(ne)) {
            var yn = fs(ne, H.mode, W, null);
            return yn.return = H, yn;
          }
          Om(H, ne);
        }
        return typeof ne == "function" && Mm(H), null;
      }
      function z(H, ne, W, Ee) {
        var Qe = ne !== null ? ne.key : null;
        if (typeof W == "string" && W !== "" || typeof W == "number")
          return Qe !== null ? null : y(H, ne, "" + W, Ee);
        if (typeof W == "object" && W !== null) {
          switch (W.$$typeof) {
            case Yr:
              return W.key === Qe ? E(H, ne, W, Ee) : null;
            case ca:
              return W.key === Qe ? b(H, ne, W, Ee) : null;
            case gt: {
              var $e = W._payload, Ct = W._init;
              return z(H, ne, Ct($e), Ee);
            }
          }
          if (tn(W) || fa(W))
            return Qe !== null ? null : C(H, ne, W, Ee, null);
          Om(H, W);
        }
        return typeof W == "function" && Mm(H), null;
      }
      function K(H, ne, W, Ee, Qe) {
        if (typeof Ee == "string" && Ee !== "" || typeof Ee == "number") {
          var $e = H.get(W) || null;
          return y(ne, $e, "" + Ee, Qe);
        }
        if (typeof Ee == "object" && Ee !== null) {
          switch (Ee.$$typeof) {
            case Yr: {
              var Ct = H.get(Ee.key === null ? W : Ee.key) || null;
              return E(ne, Ct, Ee, Qe);
            }
            case ca: {
              var At = H.get(Ee.key === null ? W : Ee.key) || null;
              return b(ne, At, Ee, Qe);
            }
            case gt:
              var yn = Ee._payload, ln = Ee._init;
              return K(H, ne, W, ln(yn), Qe);
          }
          if (tn(Ee) || fa(Ee)) {
            var dr = H.get(W) || null;
            return C(ne, dr, Ee, Qe, null);
          }
          Om(ne, Ee);
        }
        return typeof Ee == "function" && Mm(ne), null;
      }
      function X(H, ne, W) {
        {
          if (typeof H != "object" || H === null)
            return ne;
          switch (H.$$typeof) {
            case Yr:
            case ca:
              S_(H, W);
              var Ee = H.key;
              if (typeof Ee != "string")
                break;
              if (ne === null) {
                ne = /* @__PURE__ */ new Set(), ne.add(Ee);
                break;
              }
              if (!ne.has(Ee)) {
                ne.add(Ee);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", Ee);
              break;
            case gt:
              var Qe = H._payload, $e = H._init;
              X($e(Qe), ne, W);
              break;
          }
        }
        return ne;
      }
      function te(H, ne, W, Ee) {
        for (var Qe = null, $e = 0; $e < W.length; $e++) {
          var Ct = W[$e];
          Qe = X(Ct, Qe, H);
        }
        for (var At = null, yn = null, ln = ne, dr = 0, un = 0, ur = null; ln !== null && un < W.length; un++) {
          ln.index > un ? (ur = ln, ln = null) : ur = ln.sibling;
          var wa = z(H, ln, W[un], Ee);
          if (wa === null) {
            ln === null && (ln = ur);
            break;
          }
          e && ln && wa.alternate === null && t(H, ln), dr = s(wa, dr, un), yn === null ? At = wa : yn.sibling = wa, yn = wa, ln = ur;
        }
        if (un === W.length) {
          if (a(H, ln), na()) {
            var sa = un;
            Rc(H, sa);
          }
          return At;
        }
        if (ln === null) {
          for (; un < W.length; un++) {
            var xi = j(H, W[un], Ee);
            xi !== null && (dr = s(xi, dr, un), yn === null ? At = xi : yn.sibling = xi, yn = xi);
          }
          if (na()) {
            var Ha = un;
            Rc(H, Ha);
          }
          return At;
        }
        for (var Wa = i(H, ln); un < W.length; un++) {
          var xa = K(Wa, H, un, W[un], Ee);
          xa !== null && (e && xa.alternate !== null && Wa.delete(xa.key === null ? un : xa.key), dr = s(xa, dr, un), yn === null ? At = xa : yn.sibling = xa, yn = xa);
        }
        if (e && Wa.forEach(function(fd) {
          return t(H, fd);
        }), na()) {
          var uu = un;
          Rc(H, uu);
        }
        return At;
      }
      function Fe(H, ne, W, Ee) {
        var Qe = fa(W);
        if (typeof Qe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          W[Symbol.toStringTag] === "Generator" && (US || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), US = !0), W.entries === Qe && (MS || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), MS = !0);
          var $e = Qe.call(W);
          if ($e)
            for (var Ct = null, At = $e.next(); !At.done; At = $e.next()) {
              var yn = At.value;
              Ct = X(yn, Ct, H);
            }
        }
        var ln = Qe.call(W);
        if (ln == null)
          throw new Error("An iterable object provided no iterator.");
        for (var dr = null, un = null, ur = ne, wa = 0, sa = 0, xi = null, Ha = ln.next(); ur !== null && !Ha.done; sa++, Ha = ln.next()) {
          ur.index > sa ? (xi = ur, ur = null) : xi = ur.sibling;
          var Wa = z(H, ur, Ha.value, Ee);
          if (Wa === null) {
            ur === null && (ur = xi);
            break;
          }
          e && ur && Wa.alternate === null && t(H, ur), wa = s(Wa, wa, sa), un === null ? dr = Wa : un.sibling = Wa, un = Wa, ur = xi;
        }
        if (Ha.done) {
          if (a(H, ur), na()) {
            var xa = sa;
            Rc(H, xa);
          }
          return dr;
        }
        if (ur === null) {
          for (; !Ha.done; sa++, Ha = ln.next()) {
            var uu = j(H, Ha.value, Ee);
            uu !== null && (wa = s(uu, wa, sa), un === null ? dr = uu : un.sibling = uu, un = uu);
          }
          if (na()) {
            var fd = sa;
            Rc(H, fd);
          }
          return dr;
        }
        for (var Dv = i(H, ur); !Ha.done; sa++, Ha = ln.next()) {
          var yl = K(Dv, H, sa, Ha.value, Ee);
          yl !== null && (e && yl.alternate !== null && Dv.delete(yl.key === null ? sa : yl.key), wa = s(yl, wa, sa), un === null ? dr = yl : un.sibling = yl, un = yl);
        }
        if (e && Dv.forEach(function(JA) {
          return t(H, JA);
        }), na()) {
          var ZA = sa;
          Rc(H, ZA);
        }
        return dr;
      }
      function yt(H, ne, W, Ee) {
        if (ne !== null && ne.tag === ae) {
          a(H, ne.sibling);
          var Qe = l(ne, W);
          return Qe.return = H, Qe;
        }
        a(H, ne);
        var $e = OE(W, H.mode, Ee);
        return $e.return = H, $e;
      }
      function st(H, ne, W, Ee) {
        for (var Qe = W.key, $e = ne; $e !== null; ) {
          if ($e.key === Qe) {
            var Ct = W.type;
            if (Ct === Na) {
              if ($e.tag === Pe) {
                a(H, $e.sibling);
                var At = l($e, W.props.children);
                return At.return = H, At._debugSource = W._source, At._debugOwner = W._owner, At;
              }
            } else if ($e.elementType === Ct || // Keep this check inline so it only runs on the false path:
            wT($e, W) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ct == "object" && Ct !== null && Ct.$$typeof === gt && E_(Ct) === $e.type) {
              a(H, $e.sibling);
              var yn = l($e, W.props);
              return yn.ref = Xp(H, $e, W), yn.return = H, yn._debugSource = W._source, yn._debugOwner = W._owner, yn;
            }
            a(H, $e);
            break;
          } else
            t(H, $e);
          $e = $e.sibling;
        }
        if (W.type === Na) {
          var ln = fs(W.props.children, H.mode, Ee, W.key);
          return ln.return = H, ln;
        } else {
          var dr = LE(W, H.mode, Ee);
          return dr.ref = Xp(H, ne, W), dr.return = H, dr;
        }
      }
      function Jt(H, ne, W, Ee) {
        for (var Qe = W.key, $e = ne; $e !== null; ) {
          if ($e.key === Qe)
            if ($e.tag === le && $e.stateNode.containerInfo === W.containerInfo && $e.stateNode.implementation === W.implementation) {
              a(H, $e.sibling);
              var Ct = l($e, W.children || []);
              return Ct.return = H, Ct;
            } else {
              a(H, $e);
              break;
            }
          else
            t(H, $e);
          $e = $e.sibling;
        }
        var At = ME(W, H.mode, Ee);
        return At.return = H, At;
      }
      function Ht(H, ne, W, Ee) {
        var Qe = typeof W == "object" && W !== null && W.type === Na && W.key === null;
        if (Qe && (W = W.props.children), typeof W == "object" && W !== null) {
          switch (W.$$typeof) {
            case Yr:
              return v(st(H, ne, W, Ee));
            case ca:
              return v(Jt(H, ne, W, Ee));
            case gt:
              var $e = W._payload, Ct = W._init;
              return Ht(H, ne, Ct($e), Ee);
          }
          if (tn(W))
            return te(H, ne, W, Ee);
          if (fa(W))
            return Fe(H, ne, W, Ee);
          Om(H, W);
        }
        return typeof W == "string" && W !== "" || typeof W == "number" ? v(yt(H, ne, "" + W, Ee)) : (typeof W == "function" && Mm(H), a(H, ne));
      }
      return Ht;
    }
    var Gf = R_(!0), __ = R_(!1);
    function NN(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Mc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Mc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function DN(e, t) {
      for (var a = e.child; a !== null; )
        mA(a, t), a = a.sibling;
    }
    var FS = Xu(null), PS;
    PS = {};
    var Um = null, Qf = null, $S = null, zm = !1;
    function Vm() {
      Um = null, Qf = null, $S = null, zm = !1;
    }
    function b_() {
      zm = !0;
    }
    function T_() {
      zm = !1;
    }
    function C_(e, t, a) {
      Ta(FS, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== PS && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = PS;
    }
    function BS(e, t) {
      var a = FS.current;
      ba(FS, t), e._currentValue = a;
    }
    function IS(e, t, a) {
      for (var i = e; i !== null; ) {
        var l = i.alternate;
        if (tl(i.childLanes, t) ? l !== null && !tl(l.childLanes, t) && (l.childLanes = Ut(l.childLanes, t)) : (i.childLanes = Ut(i.childLanes, t), l !== null && (l.childLanes = Ut(l.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function kN(e, t, a) {
      AN(e, t, a);
    }
    function AN(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var l = void 0, s = i.dependencies;
        if (s !== null) {
          l = i.child;
          for (var v = s.firstContext; v !== null; ) {
            if (v.context === t) {
              if (i.tag === $) {
                var y = ju(a), E = nu(Tn, y);
                E.tag = Fm;
                var b = i.updateQueue;
                if (b !== null) {
                  var C = b.shared, j = C.pending;
                  j === null ? E.next = E : (E.next = j.next, j.next = E), C.pending = E;
                }
              }
              i.lanes = Ut(i.lanes, a);
              var z = i.alternate;
              z !== null && (z.lanes = Ut(z.lanes, a)), IS(i.return, a, e), s.lanes = Ut(s.lanes, a);
              break;
            }
            v = v.next;
          }
        } else if (i.tag === Te)
          l = i.type === e.type ? null : i.child;
        else if (i.tag === rt) {
          var K = i.return;
          if (K === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          K.lanes = Ut(K.lanes, a);
          var X = K.alternate;
          X !== null && (X.lanes = Ut(X.lanes, a)), IS(K, a, e), l = i.sibling;
        } else
          l = i.child;
        if (l !== null)
          l.return = i;
        else
          for (l = i; l !== null; ) {
            if (l === e) {
              l = null;
              break;
            }
            var te = l.sibling;
            if (te !== null) {
              te.return = l.return, l = te;
              break;
            }
            l = l.return;
          }
        i = l;
      }
    }
    function Kf(e, t) {
      Um = e, Qf = null, $S = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (_a(a.lanes, t) && dv(), a.firstContext = null);
      }
    }
    function Sr(e) {
      zm && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if ($S !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Qf === null) {
          if (Um === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Qf = a, Um.dependencies = {
            lanes: de,
            firstContext: a
          };
        } else
          Qf = Qf.next = a;
      }
      return t;
    }
    var wc = null;
    function HS(e) {
      wc === null ? wc = [e] : wc.push(e);
    }
    function LN() {
      if (wc !== null) {
        for (var e = 0; e < wc.length; e++) {
          var t = wc[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, l = t.pending;
            if (l !== null) {
              var s = l.next;
              l.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        wc = null;
      }
    }
    function w_(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, HS(t)) : (a.next = l.next, l.next = a), t.interleaved = a, jm(e, i);
    }
    function ON(e, t, a, i) {
      var l = t.interleaved;
      l === null ? (a.next = a, HS(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function MN(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, HS(t)) : (a.next = l.next, l.next = a), t.interleaved = a, jm(e, i);
    }
    function oi(e, t) {
      return jm(e, t);
    }
    var UN = jm;
    function jm(e, t) {
      e.lanes = Ut(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ut(a.lanes, t)), a === null && (e.flags & (En | Oi)) !== mt && _T(e);
      for (var i = e, l = e.return; l !== null; )
        l.childLanes = Ut(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = Ut(a.childLanes, t) : (l.flags & (En | Oi)) !== mt && _T(e), i = l, l = l.return;
      if (i.tag === Z) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var x_ = 0, N_ = 1, Fm = 2, WS = 3, Pm = !1, YS, $m;
    YS = !1, $m = null;
    function GS(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: de
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function D_(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var l = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = l;
      }
    }
    function nu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: x_,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function ts(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var l = i.shared;
      if ($m === l && !YS && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), YS = !0), Ok()) {
        var s = l.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), l.pending = t, UN(e, a);
      } else
        return MN(e, l, t, a);
    }
    function Bm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var l = i.shared;
        if (Ph(a)) {
          var s = l.lanes;
          s = up(s, e.pendingLanes);
          var v = Ut(s, a);
          l.lanes = v, bf(e, v);
        }
      }
    }
    function QS(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var l = i.updateQueue;
        if (a === l) {
          var s = null, v = null, y = a.firstBaseUpdate;
          if (y !== null) {
            var E = y;
            do {
              var b = {
                eventTime: E.eventTime,
                lane: E.lane,
                tag: E.tag,
                payload: E.payload,
                callback: E.callback,
                next: null
              };
              v === null ? s = v = b : (v.next = b, v = b), E = E.next;
            } while (E !== null);
            v === null ? s = v = t : (v.next = t, v = t);
          } else
            s = v = t;
          a = {
            baseState: l.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: v,
            shared: l.shared,
            effects: l.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var C = a.lastBaseUpdate;
      C === null ? a.firstBaseUpdate = t : C.next = t, a.lastBaseUpdate = t;
    }
    function zN(e, t, a, i, l, s) {
      switch (a.tag) {
        case N_: {
          var v = a.payload;
          if (typeof v == "function") {
            b_();
            var y = v.call(s, i, l);
            {
              if (e.mode & kn) {
                cr(!0);
                try {
                  v.call(s, i, l);
                } finally {
                  cr(!1);
                }
              }
              T_();
            }
            return y;
          }
          return v;
        }
        case WS:
          e.flags = e.flags & ~Tr | Dt;
        // Intentional fallthrough
        case x_: {
          var E = a.payload, b;
          if (typeof E == "function") {
            b_(), b = E.call(s, i, l);
            {
              if (e.mode & kn) {
                cr(!0);
                try {
                  E.call(s, i, l);
                } finally {
                  cr(!1);
                }
              }
              T_();
            }
          } else
            b = E;
          return b == null ? i : Mt({}, i, b);
        }
        case Fm:
          return Pm = !0, i;
      }
      return i;
    }
    function Im(e, t, a, i) {
      var l = e.updateQueue;
      Pm = !1, $m = l.shared;
      var s = l.firstBaseUpdate, v = l.lastBaseUpdate, y = l.shared.pending;
      if (y !== null) {
        l.shared.pending = null;
        var E = y, b = E.next;
        E.next = null, v === null ? s = b : v.next = b, v = E;
        var C = e.alternate;
        if (C !== null) {
          var j = C.updateQueue, z = j.lastBaseUpdate;
          z !== v && (z === null ? j.firstBaseUpdate = b : z.next = b, j.lastBaseUpdate = E);
        }
      }
      if (s !== null) {
        var K = l.baseState, X = de, te = null, Fe = null, yt = null, st = s;
        do {
          var Jt = st.lane, Ht = st.eventTime;
          if (tl(i, Jt)) {
            if (yt !== null) {
              var ne = {
                eventTime: Ht,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Rn,
                tag: st.tag,
                payload: st.payload,
                callback: st.callback,
                next: null
              };
              yt = yt.next = ne;
            }
            K = zN(e, l, st, K, t, a);
            var W = st.callback;
            if (W !== null && // If the update was already committed, we should not queue its
            // callback again.
            st.lane !== Rn) {
              e.flags |= hr;
              var Ee = l.effects;
              Ee === null ? l.effects = [st] : Ee.push(st);
            }
          } else {
            var H = {
              eventTime: Ht,
              lane: Jt,
              tag: st.tag,
              payload: st.payload,
              callback: st.callback,
              next: null
            };
            yt === null ? (Fe = yt = H, te = K) : yt = yt.next = H, X = Ut(X, Jt);
          }
          if (st = st.next, st === null) {
            if (y = l.shared.pending, y === null)
              break;
            var Qe = y, $e = Qe.next;
            Qe.next = null, st = $e, l.lastBaseUpdate = Qe, l.shared.pending = null;
          }
        } while (!0);
        yt === null && (te = K), l.baseState = te, l.firstBaseUpdate = Fe, l.lastBaseUpdate = yt;
        var Ct = l.shared.interleaved;
        if (Ct !== null) {
          var At = Ct;
          do
            X = Ut(X, At.lane), At = At.next;
          while (At !== Ct);
        } else s === null && (l.shared.lanes = de);
        Tv(X), e.lanes = X, e.memoizedState = K;
      }
      $m = null;
    }
    function VN(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function k_() {
      Pm = !1;
    }
    function Hm() {
      return Pm;
    }
    function A_(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l], v = s.callback;
          v !== null && (s.callback = null, VN(v, a));
        }
    }
    var Zp = {}, ns = Xu(Zp), Jp = Xu(Zp), Wm = Xu(Zp);
    function Ym(e) {
      if (e === Zp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function L_() {
      var e = Ym(Wm.current);
      return e;
    }
    function KS(e, t) {
      Ta(Wm, t, e), Ta(Jp, e, e), Ta(ns, Zp, e);
      var a = ex(t);
      ba(ns, e), Ta(ns, a, e);
    }
    function qf(e) {
      ba(ns, e), ba(Jp, e), ba(Wm, e);
    }
    function qS() {
      var e = Ym(ns.current);
      return e;
    }
    function O_(e) {
      Ym(Wm.current);
      var t = Ym(ns.current), a = tx(t, e.type);
      t !== a && (Ta(Jp, e, e), Ta(ns, a, e));
    }
    function XS(e) {
      Jp.current === e && (ba(ns, e), ba(Jp, e));
    }
    var jN = 0, M_ = 1, U_ = 1, ev = 2, Co = Xu(jN);
    function ZS(e, t) {
      return (e & t) !== 0;
    }
    function Xf(e) {
      return e & M_;
    }
    function JS(e, t) {
      return e & M_ | t;
    }
    function FN(e, t) {
      return e | t;
    }
    function rs(e, t) {
      Ta(Co, t, e);
    }
    function Zf(e) {
      ba(Co, e);
    }
    function PN(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Gm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Ce) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || ZR(i) || yS(i))
              return t;
          }
        } else if (t.tag === _t && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var l = (t.flags & Dt) !== mt;
          if (l)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var li = (
      /*   */
      0
    ), xr = (
      /* */
      1
    ), cl = (
      /*  */
      2
    ), Nr = (
      /*    */
      4
    ), ra = (
      /*   */
      8
    ), e0 = [];
    function t0() {
      for (var e = 0; e < e0.length; e++) {
        var t = e0[e];
        t._workInProgressVersionPrimary = null;
      }
      e0.length = 0;
    }
    function $N(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var We = m.ReactCurrentDispatcher, tv = m.ReactCurrentBatchConfig, n0, Jf;
    n0 = /* @__PURE__ */ new Set();
    var xc = de, mn = null, Dr = null, kr = null, Qm = !1, nv = !1, rv = 0, BN = 0, IN = 25, oe = null, Yi = null, as = -1, r0 = !1;
    function dn() {
      {
        var e = oe;
        Yi === null ? Yi = [e] : Yi.push(e);
      }
    }
    function Me() {
      {
        var e = oe;
        Yi !== null && (as++, Yi[as] !== e && HN(e));
      }
    }
    function ed(e) {
      e != null && !tn(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", oe, typeof e);
    }
    function HN(e) {
      {
        var t = xt(mn);
        if (!n0.has(t) && (n0.add(t), Yi !== null)) {
          for (var a = "", i = 30, l = 0; l <= as; l++) {
            for (var s = Yi[l], v = l === as ? e : s, y = l + 1 + ". " + s; y.length < i; )
              y += " ";
            y += v + `
`, a += y;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function Ca() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function a0(e, t) {
      if (r0)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", oe), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, oe, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ut(e[a], t[a]))
          return !1;
      return !0;
    }
    function td(e, t, a, i, l, s) {
      xc = s, mn = t, Yi = e !== null ? e._debugHookTypes : null, as = -1, r0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = de, e !== null && e.memoizedState !== null ? We.current = rb : Yi !== null ? We.current = nb : We.current = tb;
      var v = a(i, l);
      if (nv) {
        var y = 0;
        do {
          if (nv = !1, rv = 0, y >= IN)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          y += 1, r0 = !1, Dr = null, kr = null, t.updateQueue = null, as = -1, We.current = ab, v = a(i, l);
        } while (nv);
      }
      We.current = ly, t._debugHookTypes = Yi;
      var E = Dr !== null && Dr.next !== null;
      if (xc = de, mn = null, Dr = null, kr = null, oe = null, Yi = null, as = -1, e !== null && (e.flags & Cr) !== (t.flags & Cr) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & dt) !== Ue && S("Internal React error: Expected static flag was missing. Please notify the React team."), Qm = !1, E)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return v;
    }
    function nd() {
      var e = rv !== 0;
      return rv = 0, e;
    }
    function z_(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ea) !== Ue ? t.flags &= ~(Ol | ei | ma | it) : t.flags &= ~(ma | it), e.lanes = Fu(e.lanes, a);
    }
    function V_() {
      if (We.current = ly, Qm) {
        for (var e = mn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Qm = !1;
      }
      xc = de, mn = null, Dr = null, kr = null, Yi = null, as = -1, oe = null, q_ = !1, nv = !1, rv = 0;
    }
    function fl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return kr === null ? mn.memoizedState = kr = e : kr = kr.next = e, kr;
    }
    function Gi() {
      var e;
      if (Dr === null) {
        var t = mn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Dr.next;
      var a;
      if (kr === null ? a = mn.memoizedState : a = kr.next, a !== null)
        kr = a, a = kr.next, Dr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Dr = e;
        var i = {
          memoizedState: Dr.memoizedState,
          baseState: Dr.baseState,
          baseQueue: Dr.baseQueue,
          queue: Dr.queue,
          next: null
        };
        kr === null ? mn.memoizedState = kr = i : kr = kr.next = i;
      }
      return kr;
    }
    function j_() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function i0(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function o0(e, t, a) {
      var i = fl(), l;
      a !== void 0 ? l = a(t) : l = t, i.memoizedState = i.baseState = l;
      var s = {
        pending: null,
        interleaved: null,
        lanes: de,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      };
      i.queue = s;
      var v = s.dispatch = QN.bind(null, mn, s);
      return [i.memoizedState, v];
    }
    function l0(e, t, a) {
      var i = Gi(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = Dr, v = s.baseQueue, y = l.pending;
      if (y !== null) {
        if (v !== null) {
          var E = v.next, b = y.next;
          v.next = b, y.next = E;
        }
        s.baseQueue !== v && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = v = y, l.pending = null;
      }
      if (v !== null) {
        var C = v.next, j = s.baseState, z = null, K = null, X = null, te = C;
        do {
          var Fe = te.lane;
          if (tl(xc, Fe)) {
            if (X !== null) {
              var st = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Rn,
                action: te.action,
                hasEagerState: te.hasEagerState,
                eagerState: te.eagerState,
                next: null
              };
              X = X.next = st;
            }
            if (te.hasEagerState)
              j = te.eagerState;
            else {
              var Jt = te.action;
              j = e(j, Jt);
            }
          } else {
            var yt = {
              lane: Fe,
              action: te.action,
              hasEagerState: te.hasEagerState,
              eagerState: te.eagerState,
              next: null
            };
            X === null ? (K = X = yt, z = j) : X = X.next = yt, mn.lanes = Ut(mn.lanes, Fe), Tv(Fe);
          }
          te = te.next;
        } while (te !== null && te !== C);
        X === null ? z = j : X.next = K, ut(j, i.memoizedState) || dv(), i.memoizedState = j, i.baseState = z, i.baseQueue = X, l.lastRenderedState = j;
      }
      var Ht = l.interleaved;
      if (Ht !== null) {
        var H = Ht;
        do {
          var ne = H.lane;
          mn.lanes = Ut(mn.lanes, ne), Tv(ne), H = H.next;
        } while (H !== Ht);
      } else v === null && (l.lanes = de);
      var W = l.dispatch;
      return [i.memoizedState, W];
    }
    function u0(e, t, a) {
      var i = Gi(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = l.dispatch, v = l.pending, y = i.memoizedState;
      if (v !== null) {
        l.pending = null;
        var E = v.next, b = E;
        do {
          var C = b.action;
          y = e(y, C), b = b.next;
        } while (b !== E);
        ut(y, i.memoizedState) || dv(), i.memoizedState = y, i.baseQueue === null && (i.baseState = y), l.lastRenderedState = y;
      }
      return [y, s];
    }
    function UF(e, t, a) {
    }
    function zF(e, t, a) {
    }
    function s0(e, t, a) {
      var i = mn, l = fl(), s, v = na();
      if (v) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Jf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Jf = !0);
      } else {
        if (s = t(), !Jf) {
          var y = t();
          ut(s, y) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Jf = !0);
        }
        var E = wy();
        if (E === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Xs(E, xc) || F_(i, t, s);
      }
      l.memoizedState = s;
      var b = {
        value: s,
        getSnapshot: t
      };
      return l.queue = b, Jm($_.bind(null, i, b, e), [e]), i.flags |= ma, av(xr | ra, P_.bind(null, i, b, s, t), void 0, null), s;
    }
    function Km(e, t, a) {
      var i = mn, l = Gi(), s = t();
      if (!Jf) {
        var v = t();
        ut(s, v) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Jf = !0);
      }
      var y = l.memoizedState, E = !ut(y, s);
      E && (l.memoizedState = s, dv());
      var b = l.queue;
      if (ov($_.bind(null, i, b, e), [e]), b.getSnapshot !== t || E || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      kr !== null && kr.memoizedState.tag & xr) {
        i.flags |= ma, av(xr | ra, P_.bind(null, i, b, s, t), void 0, null);
        var C = wy();
        if (C === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Xs(C, xc) || F_(i, t, s);
      }
      return s;
    }
    function F_(e, t, a) {
      e.flags |= Ll;
      var i = {
        getSnapshot: t,
        value: a
      }, l = mn.updateQueue;
      if (l === null)
        l = j_(), mn.updateQueue = l, l.stores = [i];
      else {
        var s = l.stores;
        s === null ? l.stores = [i] : s.push(i);
      }
    }
    function P_(e, t, a, i) {
      t.value = a, t.getSnapshot = i, B_(t) && I_(e);
    }
    function $_(e, t, a) {
      var i = function() {
        B_(t) && I_(e);
      };
      return a(i);
    }
    function B_(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !ut(a, i);
      } catch {
        return !0;
      }
    }
    function I_(e) {
      var t = oi(e, lt);
      t !== null && Mr(t, e, lt, Tn);
    }
    function qm(e) {
      var t = fl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: de,
        dispatch: null,
        lastRenderedReducer: i0,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = KN.bind(null, mn, a);
      return [t.memoizedState, i];
    }
    function c0(e) {
      return l0(i0);
    }
    function f0(e) {
      return u0(i0);
    }
    function av(e, t, a, i) {
      var l = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = mn.updateQueue;
      if (s === null)
        s = j_(), mn.updateQueue = s, s.lastEffect = l.next = l;
      else {
        var v = s.lastEffect;
        if (v === null)
          s.lastEffect = l.next = l;
        else {
          var y = v.next;
          v.next = l, l.next = y, s.lastEffect = l;
        }
      }
      return l;
    }
    function d0(e) {
      var t = fl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Xm(e) {
      var t = Gi();
      return t.memoizedState;
    }
    function iv(e, t, a, i) {
      var l = fl(), s = i === void 0 ? null : i;
      mn.flags |= e, l.memoizedState = av(xr | t, a, void 0, s);
    }
    function Zm(e, t, a, i) {
      var l = Gi(), s = i === void 0 ? null : i, v = void 0;
      if (Dr !== null) {
        var y = Dr.memoizedState;
        if (v = y.destroy, s !== null) {
          var E = y.deps;
          if (a0(s, E)) {
            l.memoizedState = av(t, a, v, s);
            return;
          }
        }
      }
      mn.flags |= e, l.memoizedState = av(xr | t, a, v, s);
    }
    function Jm(e, t) {
      return (mn.mode & Ea) !== Ue ? iv(Ol | ma | Yo, ra, e, t) : iv(ma | Yo, ra, e, t);
    }
    function ov(e, t) {
      return Zm(ma, ra, e, t);
    }
    function p0(e, t) {
      return iv(it, cl, e, t);
    }
    function ey(e, t) {
      return Zm(it, cl, e, t);
    }
    function v0(e, t) {
      var a = it;
      return a |= Ja, (mn.mode & Ea) !== Ue && (a |= ei), iv(a, Nr, e, t);
    }
    function ty(e, t) {
      return Zm(it, Nr, e, t);
    }
    function H_(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var l = t;
        l.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(l).join(", ") + "}");
        var s = e();
        return l.current = s, function() {
          l.current = null;
        };
      }
    }
    function h0(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, l = it;
      return l |= Ja, (mn.mode & Ea) !== Ue && (l |= ei), iv(l, Nr, H_.bind(null, t, e), i);
    }
    function ny(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Zm(it, Nr, H_.bind(null, t, e), i);
    }
    function WN(e, t) {
    }
    var ry = WN;
    function m0(e, t) {
      var a = fl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function ay(e, t) {
      var a = Gi(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (a0(i, s))
          return l[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function y0(e, t) {
      var a = fl(), i = t === void 0 ? null : t, l = e();
      return a.memoizedState = [l, i], l;
    }
    function iy(e, t) {
      var a = Gi(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (a0(i, s))
          return l[0];
      }
      var v = e();
      return a.memoizedState = [v, i], v;
    }
    function g0(e) {
      var t = fl();
      return t.memoizedState = e, e;
    }
    function W_(e) {
      var t = Gi(), a = Dr, i = a.memoizedState;
      return G_(t, i, e);
    }
    function Y_(e) {
      var t = Gi();
      if (Dr === null)
        return t.memoizedState = e, e;
      var a = Dr.memoizedState;
      return G_(t, a, e);
    }
    function G_(e, t, a) {
      var i = !Vh(xc);
      if (i) {
        if (!ut(a, t)) {
          var l = Kr();
          mn.lanes = Ut(mn.lanes, l), Tv(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, dv()), e.memoizedState = a, a;
    }
    function YN(e, t, a) {
      var i = Xr();
      nn(Fg(i, Fi)), e(!0);
      var l = tv.transition;
      tv.transition = {};
      var s = tv.transition;
      tv.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (nn(i), tv.transition = l, l === null && s._updatedFibers) {
          var v = s._updatedFibers.size;
          v > 10 && w("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function S0() {
      var e = qm(!1), t = e[0], a = e[1], i = YN.bind(null, a), l = fl();
      return l.memoizedState = i, [t, i];
    }
    function Q_() {
      var e = c0(), t = e[0], a = Gi(), i = a.memoizedState;
      return [t, i];
    }
    function K_() {
      var e = f0(), t = e[0], a = Gi(), i = a.memoizedState;
      return [t, i];
    }
    var q_ = !1;
    function GN() {
      return q_;
    }
    function E0() {
      var e = fl(), t = wy(), a = t.identifierPrefix, i;
      if (na()) {
        var l = cN();
        i = ":" + a + "R" + l;
        var s = rv++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var v = BN++;
        i = ":" + a + "r" + v.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function oy() {
      var e = Gi(), t = e.memoizedState;
      return t;
    }
    function QN(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = ss(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (X_(e))
        Z_(t, l);
      else {
        var s = w_(e, t, l, i);
        if (s !== null) {
          var v = Ia();
          Mr(s, e, i, v), J_(s, t, i);
        }
      }
      eb(e, i);
    }
    function KN(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = ss(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (X_(e))
        Z_(t, l);
      else {
        var s = e.alternate;
        if (e.lanes === de && (s === null || s.lanes === de)) {
          var v = t.lastRenderedReducer;
          if (v !== null) {
            var y;
            y = We.current, We.current = wo;
            try {
              var E = t.lastRenderedState, b = v(E, a);
              if (l.hasEagerState = !0, l.eagerState = b, ut(b, E)) {
                ON(e, t, l, i);
                return;
              }
            } catch {
            } finally {
              We.current = y;
            }
          }
        }
        var C = w_(e, t, l, i);
        if (C !== null) {
          var j = Ia();
          Mr(C, e, i, j), J_(C, t, i);
        }
      }
      eb(e, i);
    }
    function X_(e) {
      var t = e.alternate;
      return e === mn || t !== null && t === mn;
    }
    function Z_(e, t) {
      nv = Qm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function J_(e, t, a) {
      if (Ph(a)) {
        var i = t.lanes;
        i = up(i, e.pendingLanes);
        var l = Ut(i, a);
        t.lanes = l, bf(e, l);
      }
    }
    function eb(e, t, a) {
      mo(e, t);
    }
    var ly = {
      readContext: Sr,
      useCallback: Ca,
      useContext: Ca,
      useEffect: Ca,
      useImperativeHandle: Ca,
      useInsertionEffect: Ca,
      useLayoutEffect: Ca,
      useMemo: Ca,
      useReducer: Ca,
      useRef: Ca,
      useState: Ca,
      useDebugValue: Ca,
      useDeferredValue: Ca,
      useTransition: Ca,
      useMutableSource: Ca,
      useSyncExternalStore: Ca,
      useId: Ca,
      unstable_isNewReconciler: ze
    }, tb = null, nb = null, rb = null, ab = null, dl = null, wo = null, uy = null;
    {
      var R0 = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, kt = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      tb = {
        readContext: function(e) {
          return Sr(e);
        },
        useCallback: function(e, t) {
          return oe = "useCallback", dn(), ed(t), m0(e, t);
        },
        useContext: function(e) {
          return oe = "useContext", dn(), Sr(e);
        },
        useEffect: function(e, t) {
          return oe = "useEffect", dn(), ed(t), Jm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return oe = "useImperativeHandle", dn(), ed(a), h0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return oe = "useInsertionEffect", dn(), ed(t), p0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return oe = "useLayoutEffect", dn(), ed(t), v0(e, t);
        },
        useMemo: function(e, t) {
          oe = "useMemo", dn(), ed(t);
          var a = We.current;
          We.current = dl;
          try {
            return y0(e, t);
          } finally {
            We.current = a;
          }
        },
        useReducer: function(e, t, a) {
          oe = "useReducer", dn();
          var i = We.current;
          We.current = dl;
          try {
            return o0(e, t, a);
          } finally {
            We.current = i;
          }
        },
        useRef: function(e) {
          return oe = "useRef", dn(), d0(e);
        },
        useState: function(e) {
          oe = "useState", dn();
          var t = We.current;
          We.current = dl;
          try {
            return qm(e);
          } finally {
            We.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return oe = "useDebugValue", dn(), void 0;
        },
        useDeferredValue: function(e) {
          return oe = "useDeferredValue", dn(), g0(e);
        },
        useTransition: function() {
          return oe = "useTransition", dn(), S0();
        },
        useMutableSource: function(e, t, a) {
          return oe = "useMutableSource", dn(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return oe = "useSyncExternalStore", dn(), s0(e, t, a);
        },
        useId: function() {
          return oe = "useId", dn(), E0();
        },
        unstable_isNewReconciler: ze
      }, nb = {
        readContext: function(e) {
          return Sr(e);
        },
        useCallback: function(e, t) {
          return oe = "useCallback", Me(), m0(e, t);
        },
        useContext: function(e) {
          return oe = "useContext", Me(), Sr(e);
        },
        useEffect: function(e, t) {
          return oe = "useEffect", Me(), Jm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return oe = "useImperativeHandle", Me(), h0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return oe = "useInsertionEffect", Me(), p0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return oe = "useLayoutEffect", Me(), v0(e, t);
        },
        useMemo: function(e, t) {
          oe = "useMemo", Me();
          var a = We.current;
          We.current = dl;
          try {
            return y0(e, t);
          } finally {
            We.current = a;
          }
        },
        useReducer: function(e, t, a) {
          oe = "useReducer", Me();
          var i = We.current;
          We.current = dl;
          try {
            return o0(e, t, a);
          } finally {
            We.current = i;
          }
        },
        useRef: function(e) {
          return oe = "useRef", Me(), d0(e);
        },
        useState: function(e) {
          oe = "useState", Me();
          var t = We.current;
          We.current = dl;
          try {
            return qm(e);
          } finally {
            We.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return oe = "useDebugValue", Me(), void 0;
        },
        useDeferredValue: function(e) {
          return oe = "useDeferredValue", Me(), g0(e);
        },
        useTransition: function() {
          return oe = "useTransition", Me(), S0();
        },
        useMutableSource: function(e, t, a) {
          return oe = "useMutableSource", Me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return oe = "useSyncExternalStore", Me(), s0(e, t, a);
        },
        useId: function() {
          return oe = "useId", Me(), E0();
        },
        unstable_isNewReconciler: ze
      }, rb = {
        readContext: function(e) {
          return Sr(e);
        },
        useCallback: function(e, t) {
          return oe = "useCallback", Me(), ay(e, t);
        },
        useContext: function(e) {
          return oe = "useContext", Me(), Sr(e);
        },
        useEffect: function(e, t) {
          return oe = "useEffect", Me(), ov(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return oe = "useImperativeHandle", Me(), ny(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return oe = "useInsertionEffect", Me(), ey(e, t);
        },
        useLayoutEffect: function(e, t) {
          return oe = "useLayoutEffect", Me(), ty(e, t);
        },
        useMemo: function(e, t) {
          oe = "useMemo", Me();
          var a = We.current;
          We.current = wo;
          try {
            return iy(e, t);
          } finally {
            We.current = a;
          }
        },
        useReducer: function(e, t, a) {
          oe = "useReducer", Me();
          var i = We.current;
          We.current = wo;
          try {
            return l0(e, t, a);
          } finally {
            We.current = i;
          }
        },
        useRef: function(e) {
          return oe = "useRef", Me(), Xm();
        },
        useState: function(e) {
          oe = "useState", Me();
          var t = We.current;
          We.current = wo;
          try {
            return c0(e);
          } finally {
            We.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return oe = "useDebugValue", Me(), ry();
        },
        useDeferredValue: function(e) {
          return oe = "useDeferredValue", Me(), W_(e);
        },
        useTransition: function() {
          return oe = "useTransition", Me(), Q_();
        },
        useMutableSource: function(e, t, a) {
          return oe = "useMutableSource", Me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return oe = "useSyncExternalStore", Me(), Km(e, t);
        },
        useId: function() {
          return oe = "useId", Me(), oy();
        },
        unstable_isNewReconciler: ze
      }, ab = {
        readContext: function(e) {
          return Sr(e);
        },
        useCallback: function(e, t) {
          return oe = "useCallback", Me(), ay(e, t);
        },
        useContext: function(e) {
          return oe = "useContext", Me(), Sr(e);
        },
        useEffect: function(e, t) {
          return oe = "useEffect", Me(), ov(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return oe = "useImperativeHandle", Me(), ny(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return oe = "useInsertionEffect", Me(), ey(e, t);
        },
        useLayoutEffect: function(e, t) {
          return oe = "useLayoutEffect", Me(), ty(e, t);
        },
        useMemo: function(e, t) {
          oe = "useMemo", Me();
          var a = We.current;
          We.current = uy;
          try {
            return iy(e, t);
          } finally {
            We.current = a;
          }
        },
        useReducer: function(e, t, a) {
          oe = "useReducer", Me();
          var i = We.current;
          We.current = uy;
          try {
            return u0(e, t, a);
          } finally {
            We.current = i;
          }
        },
        useRef: function(e) {
          return oe = "useRef", Me(), Xm();
        },
        useState: function(e) {
          oe = "useState", Me();
          var t = We.current;
          We.current = uy;
          try {
            return f0(e);
          } finally {
            We.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return oe = "useDebugValue", Me(), ry();
        },
        useDeferredValue: function(e) {
          return oe = "useDeferredValue", Me(), Y_(e);
        },
        useTransition: function() {
          return oe = "useTransition", Me(), K_();
        },
        useMutableSource: function(e, t, a) {
          return oe = "useMutableSource", Me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return oe = "useSyncExternalStore", Me(), Km(e, t);
        },
        useId: function() {
          return oe = "useId", Me(), oy();
        },
        unstable_isNewReconciler: ze
      }, dl = {
        readContext: function(e) {
          return R0(), Sr(e);
        },
        useCallback: function(e, t) {
          return oe = "useCallback", kt(), dn(), m0(e, t);
        },
        useContext: function(e) {
          return oe = "useContext", kt(), dn(), Sr(e);
        },
        useEffect: function(e, t) {
          return oe = "useEffect", kt(), dn(), Jm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return oe = "useImperativeHandle", kt(), dn(), h0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return oe = "useInsertionEffect", kt(), dn(), p0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return oe = "useLayoutEffect", kt(), dn(), v0(e, t);
        },
        useMemo: function(e, t) {
          oe = "useMemo", kt(), dn();
          var a = We.current;
          We.current = dl;
          try {
            return y0(e, t);
          } finally {
            We.current = a;
          }
        },
        useReducer: function(e, t, a) {
          oe = "useReducer", kt(), dn();
          var i = We.current;
          We.current = dl;
          try {
            return o0(e, t, a);
          } finally {
            We.current = i;
          }
        },
        useRef: function(e) {
          return oe = "useRef", kt(), dn(), d0(e);
        },
        useState: function(e) {
          oe = "useState", kt(), dn();
          var t = We.current;
          We.current = dl;
          try {
            return qm(e);
          } finally {
            We.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return oe = "useDebugValue", kt(), dn(), void 0;
        },
        useDeferredValue: function(e) {
          return oe = "useDeferredValue", kt(), dn(), g0(e);
        },
        useTransition: function() {
          return oe = "useTransition", kt(), dn(), S0();
        },
        useMutableSource: function(e, t, a) {
          return oe = "useMutableSource", kt(), dn(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return oe = "useSyncExternalStore", kt(), dn(), s0(e, t, a);
        },
        useId: function() {
          return oe = "useId", kt(), dn(), E0();
        },
        unstable_isNewReconciler: ze
      }, wo = {
        readContext: function(e) {
          return R0(), Sr(e);
        },
        useCallback: function(e, t) {
          return oe = "useCallback", kt(), Me(), ay(e, t);
        },
        useContext: function(e) {
          return oe = "useContext", kt(), Me(), Sr(e);
        },
        useEffect: function(e, t) {
          return oe = "useEffect", kt(), Me(), ov(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return oe = "useImperativeHandle", kt(), Me(), ny(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return oe = "useInsertionEffect", kt(), Me(), ey(e, t);
        },
        useLayoutEffect: function(e, t) {
          return oe = "useLayoutEffect", kt(), Me(), ty(e, t);
        },
        useMemo: function(e, t) {
          oe = "useMemo", kt(), Me();
          var a = We.current;
          We.current = wo;
          try {
            return iy(e, t);
          } finally {
            We.current = a;
          }
        },
        useReducer: function(e, t, a) {
          oe = "useReducer", kt(), Me();
          var i = We.current;
          We.current = wo;
          try {
            return l0(e, t, a);
          } finally {
            We.current = i;
          }
        },
        useRef: function(e) {
          return oe = "useRef", kt(), Me(), Xm();
        },
        useState: function(e) {
          oe = "useState", kt(), Me();
          var t = We.current;
          We.current = wo;
          try {
            return c0(e);
          } finally {
            We.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return oe = "useDebugValue", kt(), Me(), ry();
        },
        useDeferredValue: function(e) {
          return oe = "useDeferredValue", kt(), Me(), W_(e);
        },
        useTransition: function() {
          return oe = "useTransition", kt(), Me(), Q_();
        },
        useMutableSource: function(e, t, a) {
          return oe = "useMutableSource", kt(), Me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return oe = "useSyncExternalStore", kt(), Me(), Km(e, t);
        },
        useId: function() {
          return oe = "useId", kt(), Me(), oy();
        },
        unstable_isNewReconciler: ze
      }, uy = {
        readContext: function(e) {
          return R0(), Sr(e);
        },
        useCallback: function(e, t) {
          return oe = "useCallback", kt(), Me(), ay(e, t);
        },
        useContext: function(e) {
          return oe = "useContext", kt(), Me(), Sr(e);
        },
        useEffect: function(e, t) {
          return oe = "useEffect", kt(), Me(), ov(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return oe = "useImperativeHandle", kt(), Me(), ny(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return oe = "useInsertionEffect", kt(), Me(), ey(e, t);
        },
        useLayoutEffect: function(e, t) {
          return oe = "useLayoutEffect", kt(), Me(), ty(e, t);
        },
        useMemo: function(e, t) {
          oe = "useMemo", kt(), Me();
          var a = We.current;
          We.current = wo;
          try {
            return iy(e, t);
          } finally {
            We.current = a;
          }
        },
        useReducer: function(e, t, a) {
          oe = "useReducer", kt(), Me();
          var i = We.current;
          We.current = wo;
          try {
            return u0(e, t, a);
          } finally {
            We.current = i;
          }
        },
        useRef: function(e) {
          return oe = "useRef", kt(), Me(), Xm();
        },
        useState: function(e) {
          oe = "useState", kt(), Me();
          var t = We.current;
          We.current = wo;
          try {
            return f0(e);
          } finally {
            We.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return oe = "useDebugValue", kt(), Me(), ry();
        },
        useDeferredValue: function(e) {
          return oe = "useDeferredValue", kt(), Me(), Y_(e);
        },
        useTransition: function() {
          return oe = "useTransition", kt(), Me(), K_();
        },
        useMutableSource: function(e, t, a) {
          return oe = "useMutableSource", kt(), Me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return oe = "useSyncExternalStore", kt(), Me(), Km(e, t);
        },
        useId: function() {
          return oe = "useId", kt(), Me(), oy();
        },
        unstable_isNewReconciler: ze
      };
    }
    var is = d.unstable_now, ib = 0, sy = -1, lv = -1, cy = -1, _0 = !1, fy = !1;
    function ob() {
      return _0;
    }
    function qN() {
      fy = !0;
    }
    function XN() {
      _0 = !1, fy = !1;
    }
    function ZN() {
      _0 = fy, fy = !1;
    }
    function lb() {
      return ib;
    }
    function ub() {
      ib = is();
    }
    function b0(e) {
      lv = is(), e.actualStartTime < 0 && (e.actualStartTime = is());
    }
    function sb(e) {
      lv = -1;
    }
    function dy(e, t) {
      if (lv >= 0) {
        var a = is() - lv;
        e.actualDuration += a, t && (e.selfBaseDuration = a), lv = -1;
      }
    }
    function pl(e) {
      if (sy >= 0) {
        var t = is() - sy;
        sy = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case Z:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Ke:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function T0(e) {
      if (cy >= 0) {
        var t = is() - cy;
        cy = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case Z:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Ke:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function vl() {
      sy = is();
    }
    function C0() {
      cy = is();
    }
    function w0(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function xo(e, t) {
      if (e && e.defaultProps) {
        var a = Mt({}, t), i = e.defaultProps;
        for (var l in i)
          a[l] === void 0 && (a[l] = i[l]);
        return a;
      }
      return t;
    }
    var x0 = {}, N0, D0, k0, A0, L0, cb, py, O0, M0, U0, uv;
    {
      N0 = /* @__PURE__ */ new Set(), D0 = /* @__PURE__ */ new Set(), k0 = /* @__PURE__ */ new Set(), A0 = /* @__PURE__ */ new Set(), O0 = /* @__PURE__ */ new Set(), L0 = /* @__PURE__ */ new Set(), M0 = /* @__PURE__ */ new Set(), U0 = /* @__PURE__ */ new Set(), uv = /* @__PURE__ */ new Set();
      var fb = /* @__PURE__ */ new Set();
      py = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          fb.has(a) || (fb.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, cb = function(e, t) {
        if (t === void 0) {
          var a = Gt(e) || "Component";
          L0.has(a) || (L0.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(x0, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(x0);
    }
    function z0(e, t, a, i) {
      var l = e.memoizedState, s = a(i, l);
      {
        if (e.mode & kn) {
          cr(!0);
          try {
            s = a(i, l);
          } finally {
            cr(!1);
          }
        }
        cb(t, s);
      }
      var v = s == null ? l : Mt({}, l, s);
      if (e.memoizedState = v, e.lanes === de) {
        var y = e.updateQueue;
        y.baseState = v;
      }
    }
    var V0 = {
      isMounted: Oa,
      enqueueSetState: function(e, t, a) {
        var i = Li(e), l = Ia(), s = ss(i), v = nu(l, s);
        v.payload = t, a != null && (py(a, "setState"), v.callback = a);
        var y = ts(i, v, s);
        y !== null && (Mr(y, i, s, l), Bm(y, i, s)), mo(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Li(e), l = Ia(), s = ss(i), v = nu(l, s);
        v.tag = N_, v.payload = t, a != null && (py(a, "replaceState"), v.callback = a);
        var y = ts(i, v, s);
        y !== null && (Mr(y, i, s, l), Bm(y, i, s)), mo(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Li(e), i = Ia(), l = ss(a), s = nu(i, l);
        s.tag = Fm, t != null && (py(t, "forceUpdate"), s.callback = t);
        var v = ts(a, s, l);
        v !== null && (Mr(v, a, l, i), Bm(v, a, l)), Jd(a, l);
      }
    };
    function db(e, t, a, i, l, s, v) {
      var y = e.stateNode;
      if (typeof y.shouldComponentUpdate == "function") {
        var E = y.shouldComponentUpdate(i, s, v);
        {
          if (e.mode & kn) {
            cr(!0);
            try {
              E = y.shouldComponentUpdate(i, s, v);
            } finally {
              cr(!1);
            }
          }
          E === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Gt(t) || "Component");
        }
        return E;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Gn(a, i) || !Gn(l, s) : !0;
    }
    function JN(e, t, a) {
      var i = e.stateNode;
      {
        var l = Gt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), t.childContextTypes && !uv.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & kn) === Ue && (uv.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), t.contextTypes && !uv.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & kn) === Ue && (uv.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !M0.has(t) && (M0.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Gt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var v = i.props !== a;
        i.props !== void 0 && v && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !k0.has(t) && (k0.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Gt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var y = i.state;
        y && (typeof y != "object" || tn(y)) && S("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function pb(e, t) {
      t.updater = V0, e.stateNode = t, Zc(t, e), t._reactInternalInstance = x0;
    }
    function vb(e, t, a) {
      var i = !1, l = Ci, s = Ci, v = t.contextType;
      if ("contextType" in t) {
        var y = (
          // Allow null for conditional declaration
          v === null || v !== void 0 && v.$$typeof === he && v._context === void 0
        );
        if (!y && !U0.has(t)) {
          U0.add(t);
          var E = "";
          v === void 0 ? E = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof v != "object" ? E = " However, it is set to a " + typeof v + "." : v.$$typeof === k ? E = " Did you accidentally pass the Context.Provider instead?" : v._context !== void 0 ? E = " Did you accidentally pass the Context.Consumer instead?" : E = " However, it is set to an object with keys {" + Object.keys(v).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Gt(t) || "Component", E);
        }
      }
      if (typeof v == "object" && v !== null)
        s = Sr(v);
      else {
        l = Bf(e, t, !0);
        var b = t.contextTypes;
        i = b != null, s = i ? If(e, l) : Ci;
      }
      var C = new t(a, s);
      if (e.mode & kn) {
        cr(!0);
        try {
          C = new t(a, s);
        } finally {
          cr(!1);
        }
      }
      var j = e.memoizedState = C.state !== null && C.state !== void 0 ? C.state : null;
      pb(e, C);
      {
        if (typeof t.getDerivedStateFromProps == "function" && j === null) {
          var z = Gt(t) || "Component";
          D0.has(z) || (D0.add(z), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", z, C.state === null ? "null" : "undefined", z));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof C.getSnapshotBeforeUpdate == "function") {
          var K = null, X = null, te = null;
          if (typeof C.componentWillMount == "function" && C.componentWillMount.__suppressDeprecationWarning !== !0 ? K = "componentWillMount" : typeof C.UNSAFE_componentWillMount == "function" && (K = "UNSAFE_componentWillMount"), typeof C.componentWillReceiveProps == "function" && C.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? X = "componentWillReceiveProps" : typeof C.UNSAFE_componentWillReceiveProps == "function" && (X = "UNSAFE_componentWillReceiveProps"), typeof C.componentWillUpdate == "function" && C.componentWillUpdate.__suppressDeprecationWarning !== !0 ? te = "componentWillUpdate" : typeof C.UNSAFE_componentWillUpdate == "function" && (te = "UNSAFE_componentWillUpdate"), K !== null || X !== null || te !== null) {
            var Fe = Gt(t) || "Component", yt = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            A0.has(Fe) || (A0.add(Fe), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Fe, yt, K !== null ? `
  ` + K : "", X !== null ? `
  ` + X : "", te !== null ? `
  ` + te : ""));
          }
        }
      }
      return i && r_(e, l, s), C;
    }
    function eD(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", xt(e) || "Component"), V0.enqueueReplaceState(t, t.state, null));
    }
    function hb(e, t, a, i) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== l) {
        {
          var s = xt(e) || "Component";
          N0.has(s) || (N0.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        V0.enqueueReplaceState(t, t.state, null);
      }
    }
    function j0(e, t, a, i) {
      JN(e, t, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = {}, GS(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        l.context = Sr(s);
      else {
        var v = Bf(e, t, !0);
        l.context = If(e, v);
      }
      {
        if (l.state === a) {
          var y = Gt(t) || "Component";
          O0.has(y) || (O0.add(y), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", y));
        }
        e.mode & kn && To.recordLegacyContextWarning(e, l), To.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var E = t.getDerivedStateFromProps;
      if (typeof E == "function" && (z0(e, t, E, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (eD(e, l), Im(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var b = it;
        b |= Ja, (e.mode & Ea) !== Ue && (b |= ei), e.flags |= b;
      }
    }
    function tD(e, t, a, i) {
      var l = e.stateNode, s = e.memoizedProps;
      l.props = s;
      var v = l.context, y = t.contextType, E = Ci;
      if (typeof y == "object" && y !== null)
        E = Sr(y);
      else {
        var b = Bf(e, t, !0);
        E = If(e, b);
      }
      var C = t.getDerivedStateFromProps, j = typeof C == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !j && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (s !== a || v !== E) && hb(e, l, a, E), k_();
      var z = e.memoizedState, K = l.state = z;
      if (Im(e, a, l, i), K = e.memoizedState, s === a && z === K && !Tm() && !Hm()) {
        if (typeof l.componentDidMount == "function") {
          var X = it;
          X |= Ja, (e.mode & Ea) !== Ue && (X |= ei), e.flags |= X;
        }
        return !1;
      }
      typeof C == "function" && (z0(e, t, C, a), K = e.memoizedState);
      var te = Hm() || db(e, t, s, a, z, K, E);
      if (te) {
        if (!j && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var Fe = it;
          Fe |= Ja, (e.mode & Ea) !== Ue && (Fe |= ei), e.flags |= Fe;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var yt = it;
          yt |= Ja, (e.mode & Ea) !== Ue && (yt |= ei), e.flags |= yt;
        }
        e.memoizedProps = a, e.memoizedState = K;
      }
      return l.props = a, l.state = K, l.context = E, te;
    }
    function nD(e, t, a, i, l) {
      var s = t.stateNode;
      D_(e, t);
      var v = t.memoizedProps, y = t.type === t.elementType ? v : xo(t.type, v);
      s.props = y;
      var E = t.pendingProps, b = s.context, C = a.contextType, j = Ci;
      if (typeof C == "object" && C !== null)
        j = Sr(C);
      else {
        var z = Bf(t, a, !0);
        j = If(t, z);
      }
      var K = a.getDerivedStateFromProps, X = typeof K == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !X && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (v !== E || b !== j) && hb(t, s, i, j), k_();
      var te = t.memoizedState, Fe = s.state = te;
      if (Im(t, i, s, l), Fe = t.memoizedState, v === E && te === Fe && !Tm() && !Hm() && !fe)
        return typeof s.componentDidUpdate == "function" && (v !== e.memoizedProps || te !== e.memoizedState) && (t.flags |= it), typeof s.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || te !== e.memoizedState) && (t.flags |= ir), !1;
      typeof K == "function" && (z0(t, a, K, i), Fe = t.memoizedState);
      var yt = Hm() || db(t, a, y, i, te, Fe, j) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      fe;
      return yt ? (!X && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, Fe, j), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, Fe, j)), typeof s.componentDidUpdate == "function" && (t.flags |= it), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= ir)) : (typeof s.componentDidUpdate == "function" && (v !== e.memoizedProps || te !== e.memoizedState) && (t.flags |= it), typeof s.getSnapshotBeforeUpdate == "function" && (v !== e.memoizedProps || te !== e.memoizedState) && (t.flags |= ir), t.memoizedProps = i, t.memoizedState = Fe), s.props = i, s.state = Fe, s.context = j, yt;
    }
    function Nc(e, t) {
      return {
        value: e,
        source: t,
        stack: fu(t),
        digest: null
      };
    }
    function F0(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function rD(e, t) {
      return !0;
    }
    function P0(e, t) {
      try {
        var a = rD(e, t);
        if (a === !1)
          return;
        var i = t.value, l = t.source, s = t.stack, v = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === $)
            return;
          console.error(i);
        }
        var y = l ? xt(l) : null, E = y ? "The above error occurred in the <" + y + "> component:" : "The above error occurred in one of your React components:", b;
        if (e.tag === Z)
          b = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var C = xt(e) || "Anonymous";
          b = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + C + ".");
        }
        var j = E + `
` + v + `

` + ("" + b);
        console.error(j);
      } catch (z) {
        setTimeout(function() {
          throw z;
        });
      }
    }
    var aD = typeof WeakMap == "function" ? WeakMap : Map;
    function mb(e, t, a) {
      var i = nu(Tn, a);
      i.tag = WS, i.payload = {
        element: null
      };
      var l = t.value;
      return i.callback = function() {
        qk(l), P0(e, t);
      }, i;
    }
    function $0(e, t, a) {
      var i = nu(Tn, a);
      i.tag = WS;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var s = t.value;
        i.payload = function() {
          return l(s);
        }, i.callback = function() {
          xT(e), P0(e, t);
        };
      }
      var v = e.stateNode;
      return v !== null && typeof v.componentDidCatch == "function" && (i.callback = function() {
        xT(e), P0(e, t), typeof l != "function" && Qk(this);
        var E = t.value, b = t.stack;
        this.componentDidCatch(E, {
          componentStack: b !== null ? b : ""
        }), typeof l != "function" && (_a(e.lanes, lt) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", xt(e) || "Unknown"));
      }), i;
    }
    function yb(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new aD(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(a)) {
        l.add(a);
        var s = Xk.bind(null, e, t, a);
        Ma && Cv(e, a), t.then(s, s);
      }
    }
    function iD(e, t, a, i) {
      var l = e.updateQueue;
      if (l === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        l.add(a);
    }
    function oD(e, t) {
      var a = e.tag;
      if ((e.mode & dt) === Ue && (a === M || a === ve || a === Re)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function gb(e) {
      var t = e;
      do {
        if (t.tag === Ce && PN(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function Sb(e, t, a, i, l) {
      if ((e.mode & dt) === Ue) {
        if (e === t)
          e.flags |= Tr;
        else {
          if (e.flags |= Dt, a.flags |= Jc, a.flags &= ~(wh | Wo), a.tag === $) {
            var s = a.alternate;
            if (s === null)
              a.tag = Be;
            else {
              var v = nu(Tn, lt);
              v.tag = Fm, ts(a, v, lt);
            }
          }
          a.lanes = Ut(a.lanes, lt);
        }
        return e;
      }
      return e.flags |= Tr, e.lanes = l, e;
    }
    function lD(e, t, a, i, l) {
      if (a.flags |= Wo, Ma && Cv(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        oD(a), na() && a.mode & dt && c_();
        var v = gb(t);
        if (v !== null) {
          v.flags &= ~Qr, Sb(v, t, a, e, l), v.mode & dt && yb(e, s, l), iD(v, e, s);
          return;
        } else {
          if (!ip(l)) {
            yb(e, s, l), EE();
            return;
          }
          var y = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = y;
        }
      } else if (na() && a.mode & dt) {
        c_();
        var E = gb(t);
        if (E !== null) {
          (E.flags & Tr) === mt && (E.flags |= Qr), Sb(E, t, a, e, l), OS(Nc(i, a));
          return;
        }
      }
      i = Nc(i, a), Pk(i);
      var b = t;
      do {
        switch (b.tag) {
          case Z: {
            var C = i;
            b.flags |= Tr;
            var j = ju(l);
            b.lanes = Ut(b.lanes, j);
            var z = mb(b, C, j);
            QS(b, z);
            return;
          }
          case $:
            var K = i, X = b.type, te = b.stateNode;
            if ((b.flags & Dt) === mt && (typeof X.getDerivedStateFromError == "function" || te !== null && typeof te.componentDidCatch == "function" && !gT(te))) {
              b.flags |= Tr;
              var Fe = ju(l);
              b.lanes = Ut(b.lanes, Fe);
              var yt = $0(b, K, Fe);
              QS(b, yt);
              return;
            }
            break;
        }
        b = b.return;
      } while (b !== null);
    }
    function uD() {
      return null;
    }
    var sv = m.ReactCurrentOwner, No = !1, B0, cv, I0, H0, W0, Dc, Y0, vy, fv;
    B0 = {}, cv = {}, I0 = {}, H0 = {}, W0 = {}, Dc = !1, Y0 = {}, vy = {}, fv = {};
    function $a(e, t, a, i) {
      e === null ? t.child = __(t, null, a, i) : t.child = Gf(t, e.child, a, i);
    }
    function sD(e, t, a, i) {
      t.child = Gf(t, e.child, null, i), t.child = Gf(t, null, a, i);
    }
    function Eb(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && _o(
          s,
          i,
          // Resolved props
          "prop",
          Gt(a)
        );
      }
      var v = a.render, y = t.ref, E, b;
      Kf(t, l), Ua(t);
      {
        if (sv.current = t, br(!0), E = td(e, t, v, i, y, l), b = nd(), t.mode & kn) {
          cr(!0);
          try {
            E = td(e, t, v, i, y, l), b = nd();
          } finally {
            cr(!1);
          }
        }
        br(!1);
      }
      return za(), e !== null && !No ? (z_(e, t, l), ru(e, t, l)) : (na() && b && xS(t), t.flags |= Si, $a(e, t, E, l), t.child);
    }
    function Rb(e, t, a, i, l) {
      if (e === null) {
        var s = a.type;
        if (vA(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var v = s;
          return v = cd(s), t.tag = Re, t.type = v, K0(t, s), _b(e, t, v, i, l);
        }
        {
          var y = s.propTypes;
          if (y && _o(
            y,
            i,
            // Resolved props
            "prop",
            Gt(s)
          ), a.defaultProps !== void 0) {
            var E = Gt(s) || "Unknown";
            fv[E] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", E), fv[E] = !0);
          }
        }
        var b = AE(a.type, null, i, t, t.mode, l);
        return b.ref = t.ref, b.return = t, t.child = b, b;
      }
      {
        var C = a.type, j = C.propTypes;
        j && _o(
          j,
          i,
          // Resolved props
          "prop",
          Gt(C)
        );
      }
      var z = e.child, K = tE(e, l);
      if (!K) {
        var X = z.memoizedProps, te = a.compare;
        if (te = te !== null ? te : Gn, te(X, i) && e.ref === t.ref)
          return ru(e, t, l);
      }
      t.flags |= Si;
      var Fe = Mc(z, i);
      return Fe.ref = t.ref, Fe.return = t, t.child = Fe, Fe;
    }
    function _b(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === gt) {
          var v = s, y = v._payload, E = v._init;
          try {
            s = E(y);
          } catch {
            s = null;
          }
          var b = s && s.propTypes;
          b && _o(
            b,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Gt(s)
          );
        }
      }
      if (e !== null) {
        var C = e.memoizedProps;
        if (Gn(C, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (No = !1, t.pendingProps = i = C, tE(e, l))
            (e.flags & Jc) !== mt && (No = !0);
          else return t.lanes = e.lanes, ru(e, t, l);
      }
      return G0(e, t, a, i, l);
    }
    function bb(e, t, a) {
      var i = t.pendingProps, l = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || A)
        if ((t.mode & dt) === Ue) {
          var v = {
            baseLanes: de,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = v, xy(t, a);
        } else if (_a(a, Va)) {
          var j = {
            baseLanes: de,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = j;
          var z = s !== null ? s.baseLanes : a;
          xy(t, z);
        } else {
          var y = null, E;
          if (s !== null) {
            var b = s.baseLanes;
            E = Ut(b, a);
          } else
            E = a;
          t.lanes = t.childLanes = Va;
          var C = {
            baseLanes: E,
            cachePool: y,
            transitions: null
          };
          return t.memoizedState = C, t.updateQueue = null, xy(t, E), null;
        }
      else {
        var K;
        s !== null ? (K = Ut(s.baseLanes, a), t.memoizedState = null) : K = a, xy(t, K);
      }
      return $a(e, t, l, a), t.child;
    }
    function cD(e, t, a) {
      var i = t.pendingProps;
      return $a(e, t, i, a), t.child;
    }
    function fD(e, t, a) {
      var i = t.pendingProps.children;
      return $a(e, t, i, a), t.child;
    }
    function dD(e, t, a) {
      {
        t.flags |= it;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var l = t.pendingProps, s = l.children;
      return $a(e, t, s, a), t.child;
    }
    function Tb(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Aa, t.flags |= Mi);
    }
    function G0(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && _o(
          s,
          i,
          // Resolved props
          "prop",
          Gt(a)
        );
      }
      var v;
      {
        var y = Bf(t, a, !0);
        v = If(t, y);
      }
      var E, b;
      Kf(t, l), Ua(t);
      {
        if (sv.current = t, br(!0), E = td(e, t, a, i, v, l), b = nd(), t.mode & kn) {
          cr(!0);
          try {
            E = td(e, t, a, i, v, l), b = nd();
          } finally {
            cr(!1);
          }
        }
        br(!1);
      }
      return za(), e !== null && !No ? (z_(e, t, l), ru(e, t, l)) : (na() && b && xS(t), t.flags |= Si, $a(e, t, E, l), t.child);
    }
    function Cb(e, t, a, i, l) {
      {
        switch (DA(t)) {
          case !1: {
            var s = t.stateNode, v = t.type, y = new v(t.memoizedProps, s.context), E = y.state;
            s.updater.enqueueSetState(s, E, null);
            break;
          }
          case !0: {
            t.flags |= Dt, t.flags |= Tr;
            var b = new Error("Simulated error coming from DevTools"), C = ju(l);
            t.lanes = Ut(t.lanes, C);
            var j = $0(t, Nc(b, t), C);
            QS(t, j);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var z = a.propTypes;
          z && _o(
            z,
            i,
            // Resolved props
            "prop",
            Gt(a)
          );
        }
      }
      var K;
      sl(a) ? (K = !0, wm(t)) : K = !1, Kf(t, l);
      var X = t.stateNode, te;
      X === null ? (my(e, t), vb(t, a, i), j0(t, a, i, l), te = !0) : e === null ? te = tD(t, a, i, l) : te = nD(e, t, a, i, l);
      var Fe = Q0(e, t, a, te, K, l);
      {
        var yt = t.stateNode;
        te && yt.props !== i && (Dc || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", xt(t) || "a component"), Dc = !0);
      }
      return Fe;
    }
    function Q0(e, t, a, i, l, s) {
      Tb(e, t);
      var v = (t.flags & Dt) !== mt;
      if (!i && !v)
        return l && o_(t, a, !1), ru(e, t, s);
      var y = t.stateNode;
      sv.current = t;
      var E;
      if (v && typeof a.getDerivedStateFromError != "function")
        E = null, sb();
      else {
        Ua(t);
        {
          if (br(!0), E = y.render(), t.mode & kn) {
            cr(!0);
            try {
              y.render();
            } finally {
              cr(!1);
            }
          }
          br(!1);
        }
        za();
      }
      return t.flags |= Si, e !== null && v ? sD(e, t, E, s) : $a(e, t, E, s), t.memoizedState = y.state, l && o_(t, a, !0), t.child;
    }
    function wb(e) {
      var t = e.stateNode;
      t.pendingContext ? a_(e, t.pendingContext, t.pendingContext !== t.context) : t.context && a_(e, t.context, !1), KS(e, t.containerInfo);
    }
    function pD(e, t, a) {
      if (wb(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, l = t.memoizedState, s = l.element;
      D_(e, t), Im(t, i, null, a);
      var v = t.memoizedState;
      t.stateNode;
      var y = v.element;
      if (l.isDehydrated) {
        var E = {
          element: y,
          isDehydrated: !1,
          cache: v.cache,
          pendingSuspenseBoundaries: v.pendingSuspenseBoundaries,
          transitions: v.transitions
        }, b = t.updateQueue;
        if (b.baseState = E, t.memoizedState = E, t.flags & Qr) {
          var C = Nc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return xb(e, t, y, a, C);
        } else if (y !== s) {
          var j = Nc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return xb(e, t, y, a, j);
        } else {
          mN(t);
          var z = __(t, null, y, a);
          t.child = z;
          for (var K = z; K; )
            K.flags = K.flags & ~En | Oi, K = K.sibling;
        }
      } else {
        if (Yf(), y === s)
          return ru(e, t, a);
        $a(e, t, y, a);
      }
      return t.child;
    }
    function xb(e, t, a, i, l) {
      return Yf(), OS(l), t.flags |= Qr, $a(e, t, a, i), t.child;
    }
    function vD(e, t, a) {
      O_(t), e === null && LS(t);
      var i = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, v = l.children, y = pS(i, l);
      return y ? v = null : s !== null && pS(i, s) && (t.flags |= Za), Tb(e, t), $a(e, t, v, a), t.child;
    }
    function hD(e, t) {
      return e === null && LS(t), null;
    }
    function mD(e, t, a, i) {
      my(e, t);
      var l = t.pendingProps, s = a, v = s._payload, y = s._init, E = y(v);
      t.type = E;
      var b = t.tag = hA(E), C = xo(E, l), j;
      switch (b) {
        case M:
          return K0(t, E), t.type = E = cd(E), j = G0(null, t, E, C, i), j;
        case $:
          return t.type = E = CE(E), j = Cb(null, t, E, C, i), j;
        case ve:
          return t.type = E = wE(E), j = Eb(null, t, E, C, i), j;
        case qe: {
          if (t.type !== t.elementType) {
            var z = E.propTypes;
            z && _o(
              z,
              C,
              // Resolved for outer only
              "prop",
              Gt(E)
            );
          }
          return j = Rb(
            null,
            t,
            E,
            xo(E.type, C),
            // The inner type can have defaults too
            i
          ), j;
        }
      }
      var K = "";
      throw E !== null && typeof E == "object" && E.$$typeof === gt && (K = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + E + ". " + ("Lazy element type must resolve to a class or function." + K));
    }
    function yD(e, t, a, i, l) {
      my(e, t), t.tag = $;
      var s;
      return sl(a) ? (s = !0, wm(t)) : s = !1, Kf(t, l), vb(t, a, i), j0(t, a, i, l), Q0(null, t, a, !0, s, l);
    }
    function gD(e, t, a, i) {
      my(e, t);
      var l = t.pendingProps, s;
      {
        var v = Bf(t, a, !1);
        s = If(t, v);
      }
      Kf(t, i);
      var y, E;
      Ua(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var b = Gt(a) || "Unknown";
          B0[b] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", b, b), B0[b] = !0);
        }
        t.mode & kn && To.recordLegacyContextWarning(t, null), br(!0), sv.current = t, y = td(null, t, a, l, s, i), E = nd(), br(!1);
      }
      if (za(), t.flags |= Si, typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0) {
        var C = Gt(a) || "Unknown";
        cv[C] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", C, C, C), cv[C] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof y == "object" && y !== null && typeof y.render == "function" && y.$$typeof === void 0
      ) {
        {
          var j = Gt(a) || "Unknown";
          cv[j] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", j, j, j), cv[j] = !0);
        }
        t.tag = $, t.memoizedState = null, t.updateQueue = null;
        var z = !1;
        return sl(a) ? (z = !0, wm(t)) : z = !1, t.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null, GS(t), pb(t, y), j0(t, a, l, i), Q0(null, t, a, !0, z, i);
      } else {
        if (t.tag = M, t.mode & kn) {
          cr(!0);
          try {
            y = td(null, t, a, l, s, i), E = nd();
          } finally {
            cr(!1);
          }
        }
        return na() && E && xS(t), $a(null, t, y, i), K0(t, a), t.child;
      }
    }
    function K0(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Ka();
          i && (a += `

Check the render method of \`` + i + "`.");
          var l = i || "", s = e._debugSource;
          s && (l = s.fileName + ":" + s.lineNumber), W0[l] || (W0[l] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var v = Gt(t) || "Unknown";
          fv[v] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", v), fv[v] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var y = Gt(t) || "Unknown";
          H0[y] || (S("%s: Function components do not support getDerivedStateFromProps.", y), H0[y] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var E = Gt(t) || "Unknown";
          I0[E] || (S("%s: Function components do not support contextType.", E), I0[E] = !0);
        }
      }
    }
    var q0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: Rn
    };
    function X0(e) {
      return {
        baseLanes: e,
        cachePool: uD(),
        transitions: null
      };
    }
    function SD(e, t) {
      var a = null;
      return {
        baseLanes: Ut(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function ED(e, t, a, i) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return ZS(e, ev);
    }
    function RD(e, t) {
      return Fu(e.childLanes, t);
    }
    function Nb(e, t, a) {
      var i = t.pendingProps;
      kA(t) && (t.flags |= Dt);
      var l = Co.current, s = !1, v = (t.flags & Dt) !== mt;
      if (v || ED(l, e) ? (s = !0, t.flags &= ~Dt) : (e === null || e.memoizedState !== null) && (l = FN(l, U_)), l = Xf(l), rs(t, l), e === null) {
        LS(t);
        var y = t.memoizedState;
        if (y !== null) {
          var E = y.dehydrated;
          if (E !== null)
            return wD(t, E);
        }
        var b = i.children, C = i.fallback;
        if (s) {
          var j = _D(t, b, C, a), z = t.child;
          return z.memoizedState = X0(a), t.memoizedState = q0, j;
        } else
          return Z0(t, b);
      } else {
        var K = e.memoizedState;
        if (K !== null) {
          var X = K.dehydrated;
          if (X !== null)
            return xD(e, t, v, i, X, K, a);
        }
        if (s) {
          var te = i.fallback, Fe = i.children, yt = TD(e, t, Fe, te, a), st = t.child, Jt = e.child.memoizedState;
          return st.memoizedState = Jt === null ? X0(a) : SD(Jt, a), st.childLanes = RD(e, a), t.memoizedState = q0, yt;
        } else {
          var Ht = i.children, H = bD(e, t, Ht, a);
          return t.memoizedState = null, H;
        }
      }
    }
    function Z0(e, t, a) {
      var i = e.mode, l = {
        mode: "visible",
        children: t
      }, s = J0(l, i);
      return s.return = e, e.child = s, s;
    }
    function _D(e, t, a, i) {
      var l = e.mode, s = e.child, v = {
        mode: "hidden",
        children: t
      }, y, E;
      return (l & dt) === Ue && s !== null ? (y = s, y.childLanes = de, y.pendingProps = v, e.mode & Nt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = 0, y.treeBaseDuration = 0), E = fs(a, l, i, null)) : (y = J0(v, l), E = fs(a, l, i, null)), y.return = e, E.return = e, y.sibling = E, e.child = y, E;
    }
    function J0(e, t, a) {
      return DT(e, t, de, null);
    }
    function Db(e, t) {
      return Mc(e, t);
    }
    function bD(e, t, a, i) {
      var l = e.child, s = l.sibling, v = Db(l, {
        mode: "visible",
        children: a
      });
      if ((t.mode & dt) === Ue && (v.lanes = i), v.return = t, v.sibling = null, s !== null) {
        var y = t.deletions;
        y === null ? (t.deletions = [s], t.flags |= on) : y.push(s);
      }
      return t.child = v, v;
    }
    function TD(e, t, a, i, l) {
      var s = t.mode, v = e.child, y = v.sibling, E = {
        mode: "hidden",
        children: a
      }, b;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & dt) === Ue && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== v
      ) {
        var C = t.child;
        b = C, b.childLanes = de, b.pendingProps = E, t.mode & Nt && (b.actualDuration = 0, b.actualStartTime = -1, b.selfBaseDuration = v.selfBaseDuration, b.treeBaseDuration = v.treeBaseDuration), t.deletions = null;
      } else
        b = Db(v, E), b.subtreeFlags = v.subtreeFlags & Cr;
      var j;
      return y !== null ? j = Mc(y, i) : (j = fs(i, s, l, null), j.flags |= En), j.return = t, b.return = t, b.sibling = j, t.child = b, j;
    }
    function hy(e, t, a, i) {
      i !== null && OS(i), Gf(t, e.child, null, a);
      var l = t.pendingProps, s = l.children, v = Z0(t, s);
      return v.flags |= En, t.memoizedState = null, v;
    }
    function CD(e, t, a, i, l) {
      var s = t.mode, v = {
        mode: "visible",
        children: a
      }, y = J0(v, s), E = fs(i, s, l, null);
      return E.flags |= En, y.return = t, E.return = t, y.sibling = E, t.child = y, (t.mode & dt) !== Ue && Gf(t, e.child, null, l), E;
    }
    function wD(e, t, a) {
      return (e.mode & dt) === Ue ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = lt) : yS(t) ? e.lanes = yo : e.lanes = Va, null;
    }
    function xD(e, t, a, i, l, s, v) {
      if (a)
        if (t.flags & Qr) {
          t.flags &= ~Qr;
          var H = F0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return hy(e, t, v, H);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Dt, null;
          var ne = i.children, W = i.fallback, Ee = CD(e, t, ne, W, v), Qe = t.child;
          return Qe.memoizedState = X0(v), t.memoizedState = q0, Ee;
        }
      else {
        if (vN(), (t.mode & dt) === Ue)
          return hy(
            e,
            t,
            v,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (yS(l)) {
          var y, E, b;
          {
            var C = Ax(l);
            y = C.digest, E = C.message, b = C.stack;
          }
          var j;
          E ? j = new Error(E) : j = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var z = F0(j, y, b);
          return hy(e, t, v, z);
        }
        var K = _a(v, e.childLanes);
        if (No || K) {
          var X = wy();
          if (X !== null) {
            var te = fp(X, v);
            if (te !== Rn && te !== s.retryLane) {
              s.retryLane = te;
              var Fe = Tn;
              oi(e, te), Mr(X, e, te, Fe);
            }
          }
          EE();
          var yt = F0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return hy(e, t, v, yt);
        } else if (ZR(l)) {
          t.flags |= Dt, t.child = e.child;
          var st = Zk.bind(null, e);
          return Lx(l, st), null;
        } else {
          yN(t, l, s.treeContext);
          var Jt = i.children, Ht = Z0(t, Jt);
          return Ht.flags |= Oi, Ht;
        }
      }
    }
    function kb(e, t, a) {
      e.lanes = Ut(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Ut(i.lanes, t)), IS(e.return, t, a);
    }
    function ND(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Ce) {
          var l = i.memoizedState;
          l !== null && kb(i, a, e);
        } else if (i.tag === _t)
          kb(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function DD(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Gm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function kD(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !Y0[e])
        if (Y0[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function AD(e, t) {
      e !== void 0 && !vy[e] && (e !== "collapsed" && e !== "hidden" ? (vy[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (vy[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function Ab(e, t) {
      {
        var a = tn(e), i = !a && typeof fa(e) == "function";
        if (a || i) {
          var l = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function LD(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (tn(e)) {
          for (var a = 0; a < e.length; a++)
            if (!Ab(e[a], a))
              return;
        } else {
          var i = fa(e);
          if (typeof i == "function") {
            var l = i.call(e);
            if (l)
              for (var s = l.next(), v = 0; !s.done; s = l.next()) {
                if (!Ab(s.value, v))
                  return;
                v++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function eE(e, t, a, i, l) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: l
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = l);
    }
    function Lb(e, t, a) {
      var i = t.pendingProps, l = i.revealOrder, s = i.tail, v = i.children;
      kD(l), AD(s, l), LD(v, l), $a(e, t, v, a);
      var y = Co.current, E = ZS(y, ev);
      if (E)
        y = JS(y, ev), t.flags |= Dt;
      else {
        var b = e !== null && (e.flags & Dt) !== mt;
        b && ND(t, t.child, a), y = Xf(y);
      }
      if (rs(t, y), (t.mode & dt) === Ue)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var C = DD(t.child), j;
            C === null ? (j = t.child, t.child = null) : (j = C.sibling, C.sibling = null), eE(
              t,
              !1,
              // isBackwards
              j,
              C,
              s
            );
            break;
          }
          case "backwards": {
            var z = null, K = t.child;
            for (t.child = null; K !== null; ) {
              var X = K.alternate;
              if (X !== null && Gm(X) === null) {
                t.child = K;
                break;
              }
              var te = K.sibling;
              K.sibling = z, z = K, K = te;
            }
            eE(
              t,
              !0,
              // isBackwards
              z,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            eE(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function OD(e, t, a) {
      KS(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Gf(t, null, i, a) : $a(e, t, i, a), t.child;
    }
    var Ob = !1;
    function MD(e, t, a) {
      var i = t.type, l = i._context, s = t.pendingProps, v = t.memoizedProps, y = s.value;
      {
        "value" in s || Ob || (Ob = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var E = t.type.propTypes;
        E && _o(E, s, "prop", "Context.Provider");
      }
      if (C_(t, l, y), v !== null) {
        var b = v.value;
        if (ut(b, y)) {
          if (v.children === s.children && !Tm())
            return ru(e, t, a);
        } else
          kN(t, l, a);
      }
      var C = s.children;
      return $a(e, t, C, a), t.child;
    }
    var Mb = !1;
    function UD(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (Mb || (Mb = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, s = l.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Kf(t, a);
      var v = Sr(i);
      Ua(t);
      var y;
      return sv.current = t, br(!0), y = s(v), br(!1), za(), t.flags |= Si, $a(e, t, y, a), t.child;
    }
    function dv() {
      No = !0;
    }
    function my(e, t) {
      (t.mode & dt) === Ue && e !== null && (e.alternate = null, t.alternate = null, t.flags |= En);
    }
    function ru(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), sb(), Tv(t.lanes), _a(a, t.childLanes) ? (NN(e, t), t.child) : null;
    }
    function zD(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var l = i.child;
          if (l === null)
            throw new Error("Expected parent to have a child.");
          for (; l.sibling !== t; )
            if (l = l.sibling, l === null)
              throw new Error("Expected to find the previous sibling.");
          l.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= on) : s.push(e), a.flags |= En, a;
      }
    }
    function tE(e, t) {
      var a = e.lanes;
      return !!_a(a, t);
    }
    function VD(e, t, a) {
      switch (t.tag) {
        case Z:
          wb(t), t.stateNode, Yf();
          break;
        case I:
          O_(t);
          break;
        case $: {
          var i = t.type;
          sl(i) && wm(t);
          break;
        }
        case le:
          KS(t, t.stateNode.containerInfo);
          break;
        case Te: {
          var l = t.memoizedProps.value, s = t.type._context;
          C_(t, s, l);
          break;
        }
        case Ke:
          {
            var v = _a(a, t.childLanes);
            v && (t.flags |= it);
            {
              var y = t.stateNode;
              y.effectDuration = 0, y.passiveEffectDuration = 0;
            }
          }
          break;
        case Ce: {
          var E = t.memoizedState;
          if (E !== null) {
            if (E.dehydrated !== null)
              return rs(t, Xf(Co.current)), t.flags |= Dt, null;
            var b = t.child, C = b.childLanes;
            if (_a(a, C))
              return Nb(e, t, a);
            rs(t, Xf(Co.current));
            var j = ru(e, t, a);
            return j !== null ? j.sibling : null;
          } else
            rs(t, Xf(Co.current));
          break;
        }
        case _t: {
          var z = (e.flags & Dt) !== mt, K = _a(a, t.childLanes);
          if (z) {
            if (K)
              return Lb(e, t, a);
            t.flags |= Dt;
          }
          var X = t.memoizedState;
          if (X !== null && (X.rendering = null, X.tail = null, X.lastEffect = null), rs(t, Co.current), K)
            break;
          return null;
        }
        case Ie:
        case ct:
          return t.lanes = de, bb(e, t, a);
      }
      return ru(e, t, a);
    }
    function Ub(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return zD(e, t, AE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, l = t.pendingProps;
        if (i !== l || Tm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          No = !0;
        else {
          var s = tE(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Dt) === mt)
            return No = !1, VD(e, t, a);
          (e.flags & Jc) !== mt ? No = !0 : No = !1;
        }
      } else if (No = !1, na() && uN(t)) {
        var v = t.index, y = sN();
        s_(t, y, v);
      }
      switch (t.lanes = de, t.tag) {
        case J:
          return gD(e, t, t.type, a);
        case nt: {
          var E = t.elementType;
          return mD(e, t, E, a);
        }
        case M: {
          var b = t.type, C = t.pendingProps, j = t.elementType === b ? C : xo(b, C);
          return G0(e, t, b, j, a);
        }
        case $: {
          var z = t.type, K = t.pendingProps, X = t.elementType === z ? K : xo(z, K);
          return Cb(e, t, z, X, a);
        }
        case Z:
          return pD(e, t, a);
        case I:
          return vD(e, t, a);
        case ae:
          return hD(e, t);
        case Ce:
          return Nb(e, t, a);
        case le:
          return OD(e, t, a);
        case ve: {
          var te = t.type, Fe = t.pendingProps, yt = t.elementType === te ? Fe : xo(te, Fe);
          return Eb(e, t, te, yt, a);
        }
        case Pe:
          return cD(e, t, a);
        case wt:
          return fD(e, t, a);
        case Ke:
          return dD(e, t, a);
        case Te:
          return MD(e, t, a);
        case De:
          return UD(e, t, a);
        case qe: {
          var st = t.type, Jt = t.pendingProps, Ht = xo(st, Jt);
          if (t.type !== t.elementType) {
            var H = st.propTypes;
            H && _o(
              H,
              Ht,
              // Resolved for outer only
              "prop",
              Gt(st)
            );
          }
          return Ht = xo(st.type, Ht), Rb(e, t, st, Ht, a);
        }
        case Re:
          return _b(e, t, t.type, t.pendingProps, a);
        case Be: {
          var ne = t.type, W = t.pendingProps, Ee = t.elementType === ne ? W : xo(ne, W);
          return yD(e, t, ne, Ee, a);
        }
        case _t:
          return Lb(e, t, a);
        case pt:
          break;
        case Ie:
          return bb(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function rd(e) {
      e.flags |= it;
    }
    function zb(e) {
      e.flags |= Aa, e.flags |= Mi;
    }
    var Vb, nE, jb, Fb;
    Vb = function(e, t, a, i) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === I || l.tag === ae)
          ix(e, l.stateNode);
        else if (l.tag !== le) {
          if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
        }
        if (l === t)
          return;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            return;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }, nE = function(e, t) {
    }, jb = function(e, t, a, i, l) {
      var s = e.memoizedProps;
      if (s !== i) {
        var v = t.stateNode, y = qS(), E = lx(v, a, s, i, l, y);
        t.updateQueue = E, E && rd(t);
      }
    }, Fb = function(e, t, a, i) {
      a !== i && rd(t);
    };
    function pv(e, t) {
      if (!na())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var l = e.tail, s = null; l !== null; )
              l.alternate !== null && (s = l), l = l.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function aa(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = de, i = mt;
      if (t) {
        if ((e.mode & Nt) !== Ue) {
          for (var E = e.selfBaseDuration, b = e.child; b !== null; )
            a = Ut(a, Ut(b.lanes, b.childLanes)), i |= b.subtreeFlags & Cr, i |= b.flags & Cr, E += b.treeBaseDuration, b = b.sibling;
          e.treeBaseDuration = E;
        } else
          for (var C = e.child; C !== null; )
            a = Ut(a, Ut(C.lanes, C.childLanes)), i |= C.subtreeFlags & Cr, i |= C.flags & Cr, C.return = e, C = C.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Nt) !== Ue) {
          for (var l = e.actualDuration, s = e.selfBaseDuration, v = e.child; v !== null; )
            a = Ut(a, Ut(v.lanes, v.childLanes)), i |= v.subtreeFlags, i |= v.flags, l += v.actualDuration, s += v.treeBaseDuration, v = v.sibling;
          e.actualDuration = l, e.treeBaseDuration = s;
        } else
          for (var y = e.child; y !== null; )
            a = Ut(a, Ut(y.lanes, y.childLanes)), i |= y.subtreeFlags, i |= y.flags, y.return = e, y = y.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function jD(e, t, a) {
      if (_N() && (t.mode & dt) !== Ue && (t.flags & Dt) === mt)
        return m_(t), Yf(), t.flags |= Qr | Wo | Tr, !1;
      var i = Am(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (EN(t), aa(t), (t.mode & Nt) !== Ue) {
            var l = a !== null;
            if (l) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Yf(), (t.flags & Dt) === mt && (t.memoizedState = null), t.flags |= it, aa(t), (t.mode & Nt) !== Ue) {
            var v = a !== null;
            if (v) {
              var y = t.child;
              y !== null && (t.treeBaseDuration -= y.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return y_(), !0;
    }
    function Pb(e, t, a) {
      var i = t.pendingProps;
      switch (NS(t), t.tag) {
        case J:
        case nt:
        case Re:
        case M:
        case ve:
        case Pe:
        case wt:
        case Ke:
        case De:
        case qe:
          return aa(t), null;
        case $: {
          var l = t.type;
          return sl(l) && Cm(t), aa(t), null;
        }
        case Z: {
          var s = t.stateNode;
          if (qf(t), TS(t), t0(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var v = Am(t);
            if (v)
              rd(t);
            else if (e !== null) {
              var y = e.memoizedState;
              // Check if this is a client root
              (!y.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Qr) !== mt) && (t.flags |= ir, y_());
            }
          }
          return nE(e, t), aa(t), null;
        }
        case I: {
          XS(t);
          var E = L_(), b = t.type;
          if (e !== null && t.stateNode != null)
            jb(e, t, b, i, E), e.ref !== t.ref && zb(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return aa(t), null;
            }
            var C = qS(), j = Am(t);
            if (j)
              gN(t, E, C) && rd(t);
            else {
              var z = ax(b, i, E, C, t);
              Vb(z, t, !1, !1), t.stateNode = z, ox(z, b, i, E) && rd(t);
            }
            t.ref !== null && zb(t);
          }
          return aa(t), null;
        }
        case ae: {
          var K = i;
          if (e && t.stateNode != null) {
            var X = e.memoizedProps;
            Fb(e, t, X, K);
          } else {
            if (typeof K != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var te = L_(), Fe = qS(), yt = Am(t);
            yt ? SN(t) && rd(t) : t.stateNode = ux(K, te, Fe, t);
          }
          return aa(t), null;
        }
        case Ce: {
          Zf(t);
          var st = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Jt = jD(e, t, st);
            if (!Jt)
              return t.flags & Tr ? t : null;
          }
          if ((t.flags & Dt) !== mt)
            return t.lanes = a, (t.mode & Nt) !== Ue && w0(t), t;
          var Ht = st !== null, H = e !== null && e.memoizedState !== null;
          if (Ht !== H && Ht) {
            var ne = t.child;
            if (ne.flags |= Ho, (t.mode & dt) !== Ue) {
              var W = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !x);
              W || ZS(Co.current, U_) ? Fk() : EE();
            }
          }
          var Ee = t.updateQueue;
          if (Ee !== null && (t.flags |= it), aa(t), (t.mode & Nt) !== Ue && Ht) {
            var Qe = t.child;
            Qe !== null && (t.treeBaseDuration -= Qe.treeBaseDuration);
          }
          return null;
        }
        case le:
          return qf(t), nE(e, t), e === null && tN(t.stateNode.containerInfo), aa(t), null;
        case Te:
          var $e = t.type._context;
          return BS($e, t), aa(t), null;
        case Be: {
          var Ct = t.type;
          return sl(Ct) && Cm(t), aa(t), null;
        }
        case _t: {
          Zf(t);
          var At = t.memoizedState;
          if (At === null)
            return aa(t), null;
          var yn = (t.flags & Dt) !== mt, ln = At.rendering;
          if (ln === null)
            if (yn)
              pv(At, !1);
            else {
              var dr = $k() && (e === null || (e.flags & Dt) === mt);
              if (!dr)
                for (var un = t.child; un !== null; ) {
                  var ur = Gm(un);
                  if (ur !== null) {
                    yn = !0, t.flags |= Dt, pv(At, !1);
                    var wa = ur.updateQueue;
                    return wa !== null && (t.updateQueue = wa, t.flags |= it), t.subtreeFlags = mt, DN(t, a), rs(t, JS(Co.current, ev)), t.child;
                  }
                  un = un.sibling;
                }
              At.tail !== null && or() > lT() && (t.flags |= Dt, yn = !0, pv(At, !1), t.lanes = Mh);
            }
          else {
            if (!yn) {
              var sa = Gm(ln);
              if (sa !== null) {
                t.flags |= Dt, yn = !0;
                var xi = sa.updateQueue;
                if (xi !== null && (t.updateQueue = xi, t.flags |= it), pv(At, !0), At.tail === null && At.tailMode === "hidden" && !ln.alternate && !na())
                  return aa(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              or() * 2 - At.renderingStartTime > lT() && a !== Va && (t.flags |= Dt, yn = !0, pv(At, !1), t.lanes = Mh);
            }
            if (At.isBackwards)
              ln.sibling = t.child, t.child = ln;
            else {
              var Ha = At.last;
              Ha !== null ? Ha.sibling = ln : t.child = ln, At.last = ln;
            }
          }
          if (At.tail !== null) {
            var Wa = At.tail;
            At.rendering = Wa, At.tail = Wa.sibling, At.renderingStartTime = or(), Wa.sibling = null;
            var xa = Co.current;
            return yn ? xa = JS(xa, ev) : xa = Xf(xa), rs(t, xa), Wa;
          }
          return aa(t), null;
        }
        case pt:
          break;
        case Ie:
        case ct: {
          SE(t);
          var uu = t.memoizedState, fd = uu !== null;
          if (e !== null) {
            var Dv = e.memoizedState, yl = Dv !== null;
            yl !== fd && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !A && (t.flags |= Ho);
          }
          return !fd || (t.mode & dt) === Ue ? aa(t) : _a(ml, Va) && (aa(t), t.subtreeFlags & (En | it) && (t.flags |= Ho)), null;
        }
        case St:
          return null;
        case ft:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function FD(e, t, a) {
      switch (NS(t), t.tag) {
        case $: {
          var i = t.type;
          sl(i) && Cm(t);
          var l = t.flags;
          return l & Tr ? (t.flags = l & ~Tr | Dt, (t.mode & Nt) !== Ue && w0(t), t) : null;
        }
        case Z: {
          t.stateNode, qf(t), TS(t), t0();
          var s = t.flags;
          return (s & Tr) !== mt && (s & Dt) === mt ? (t.flags = s & ~Tr | Dt, t) : null;
        }
        case I:
          return XS(t), null;
        case Ce: {
          Zf(t);
          var v = t.memoizedState;
          if (v !== null && v.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Yf();
          }
          var y = t.flags;
          return y & Tr ? (t.flags = y & ~Tr | Dt, (t.mode & Nt) !== Ue && w0(t), t) : null;
        }
        case _t:
          return Zf(t), null;
        case le:
          return qf(t), null;
        case Te:
          var E = t.type._context;
          return BS(E, t), null;
        case Ie:
        case ct:
          return SE(t), null;
        case St:
          return null;
        default:
          return null;
      }
    }
    function $b(e, t, a) {
      switch (NS(t), t.tag) {
        case $: {
          var i = t.type.childContextTypes;
          i != null && Cm(t);
          break;
        }
        case Z: {
          t.stateNode, qf(t), TS(t), t0();
          break;
        }
        case I: {
          XS(t);
          break;
        }
        case le:
          qf(t);
          break;
        case Ce:
          Zf(t);
          break;
        case _t:
          Zf(t);
          break;
        case Te:
          var l = t.type._context;
          BS(l, t);
          break;
        case Ie:
        case ct:
          SE(t);
          break;
      }
    }
    var Bb = null;
    Bb = /* @__PURE__ */ new Set();
    var yy = !1, ia = !1, PD = typeof WeakSet == "function" ? WeakSet : Set, Je = null, ad = null, id = null;
    function $D(e) {
      gi(null, function() {
        throw e;
      }), fo();
    }
    var BD = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Nt)
        try {
          vl(), t.componentWillUnmount();
        } finally {
          pl(e);
        }
      else
        t.componentWillUnmount();
    };
    function Ib(e, t) {
      try {
        os(Nr, e);
      } catch (a) {
        An(e, t, a);
      }
    }
    function rE(e, t, a) {
      try {
        BD(e, a);
      } catch (i) {
        An(e, t, i);
      }
    }
    function ID(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        An(e, t, i);
      }
    }
    function Hb(e, t) {
      try {
        Yb(e);
      } catch (a) {
        An(e, t, a);
      }
    }
    function od(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (ke && Ae && e.mode & Nt)
              try {
                vl(), i = a(null);
              } finally {
                pl(e);
              }
            else
              i = a(null);
          } catch (l) {
            An(e, t, l);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", xt(e));
        } else
          a.current = null;
    }
    function gy(e, t, a) {
      try {
        a();
      } catch (i) {
        An(e, t, i);
      }
    }
    var Wb = !1;
    function HD(e, t) {
      nx(e.containerInfo), Je = t, WD();
      var a = Wb;
      return Wb = !1, a;
    }
    function WD() {
      for (; Je !== null; ) {
        var e = Je, t = e.child;
        (e.subtreeFlags & ya) !== mt && t !== null ? (t.return = e, Je = t) : YD();
      }
    }
    function YD() {
      for (; Je !== null; ) {
        var e = Je;
        Fn(e);
        try {
          GD(e);
        } catch (a) {
          An(e, e.return, a);
        }
        xn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Je = t;
          return;
        }
        Je = e.return;
      }
    }
    function GD(e) {
      var t = e.alternate, a = e.flags;
      if ((a & ir) !== mt) {
        switch (Fn(e), e.tag) {
          case M:
          case ve:
          case Re:
            break;
          case $: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Dc && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", xt(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", xt(e) || "instance"));
              var v = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : xo(e.type, i), l);
              {
                var y = Bb;
                v === void 0 && !y.has(e.type) && (y.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", xt(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = v;
            }
            break;
          }
          case Z: {
            {
              var E = e.stateNode;
              xx(E.containerInfo);
            }
            break;
          }
          case I:
          case ae:
          case le:
          case Be:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        xn();
      }
    }
    function Do(e, t, a) {
      var i = t.updateQueue, l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var s = l.next, v = s;
        do {
          if ((v.tag & e) === e) {
            var y = v.destroy;
            v.destroy = void 0, y !== void 0 && ((e & ra) !== li ? lf(t) : (e & Nr) !== li && wu(t), (e & cl) !== li && wv(!0), gy(t, a, y), (e & cl) !== li && wv(!1), (e & ra) !== li ? Lh() : (e & Nr) !== li && xu());
          }
          v = v.next;
        } while (v !== s);
      }
    }
    function os(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var l = i.next, s = l;
        do {
          if ((s.tag & e) === e) {
            (e & ra) !== li ? of(t) : (e & Nr) !== li && Is(t);
            var v = s.create;
            (e & cl) !== li && wv(!0), s.destroy = v(), (e & cl) !== li && wv(!1), (e & ra) !== li ? Ah() : (e & Nr) !== li && Ui();
            {
              var y = s.destroy;
              if (y !== void 0 && typeof y != "function") {
                var E = void 0;
                (s.tag & Nr) !== mt ? E = "useLayoutEffect" : (s.tag & cl) !== mt ? E = "useInsertionEffect" : E = "useEffect";
                var b = void 0;
                y === null ? b = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof y.then == "function" ? b = `

It looks like you wrote ` + E + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + E + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : b = " You returned: " + y, S("%s must not return anything besides a function, which is used for clean-up.%s", E, b);
              }
            }
          }
          s = s.next;
        } while (s !== l);
      }
    }
    function QD(e, t) {
      if ((t.flags & it) !== mt)
        switch (t.tag) {
          case Ke: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, s = i.onPostCommit, v = lb(), y = t.alternate === null ? "mount" : "update";
            ob() && (y = "nested-update"), typeof s == "function" && s(l, y, a, v);
            var E = t.return;
            e: for (; E !== null; ) {
              switch (E.tag) {
                case Z:
                  var b = E.stateNode;
                  b.passiveEffectDuration += a;
                  break e;
                case Ke:
                  var C = E.stateNode;
                  C.passiveEffectDuration += a;
                  break e;
              }
              E = E.return;
            }
            break;
          }
        }
    }
    function KD(e, t, a, i) {
      if ((a.flags & Ei) !== mt)
        switch (a.tag) {
          case M:
          case ve:
          case Re: {
            if (!ia)
              if (a.mode & Nt)
                try {
                  vl(), os(Nr | xr, a);
                } finally {
                  pl(a);
                }
              else
                os(Nr | xr, a);
            break;
          }
          case $: {
            var l = a.stateNode;
            if (a.flags & it && !ia)
              if (t === null)
                if (a.type === a.elementType && !Dc && (l.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", xt(a) || "instance"), l.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", xt(a) || "instance")), a.mode & Nt)
                  try {
                    vl(), l.componentDidMount();
                  } finally {
                    pl(a);
                  }
                else
                  l.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : xo(a.type, t.memoizedProps), v = t.memoizedState;
                if (a.type === a.elementType && !Dc && (l.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", xt(a) || "instance"), l.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", xt(a) || "instance")), a.mode & Nt)
                  try {
                    vl(), l.componentDidUpdate(s, v, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    pl(a);
                  }
                else
                  l.componentDidUpdate(s, v, l.__reactInternalSnapshotBeforeUpdate);
              }
            var y = a.updateQueue;
            y !== null && (a.type === a.elementType && !Dc && (l.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", xt(a) || "instance"), l.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", xt(a) || "instance")), A_(a, y, l));
            break;
          }
          case Z: {
            var E = a.updateQueue;
            if (E !== null) {
              var b = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case I:
                    b = a.child.stateNode;
                    break;
                  case $:
                    b = a.child.stateNode;
                    break;
                }
              A_(a, E, b);
            }
            break;
          }
          case I: {
            var C = a.stateNode;
            if (t === null && a.flags & it) {
              var j = a.type, z = a.memoizedProps;
              px(C, j, z);
            }
            break;
          }
          case ae:
            break;
          case le:
            break;
          case Ke: {
            {
              var K = a.memoizedProps, X = K.onCommit, te = K.onRender, Fe = a.stateNode.effectDuration, yt = lb(), st = t === null ? "mount" : "update";
              ob() && (st = "nested-update"), typeof te == "function" && te(a.memoizedProps.id, st, a.actualDuration, a.treeBaseDuration, a.actualStartTime, yt);
              {
                typeof X == "function" && X(a.memoizedProps.id, st, Fe, yt), Yk(a);
                var Jt = a.return;
                e: for (; Jt !== null; ) {
                  switch (Jt.tag) {
                    case Z:
                      var Ht = Jt.stateNode;
                      Ht.effectDuration += Fe;
                      break e;
                    case Ke:
                      var H = Jt.stateNode;
                      H.effectDuration += Fe;
                      break e;
                  }
                  Jt = Jt.return;
                }
              }
            }
            break;
          }
          case Ce: {
            rk(e, a);
            break;
          }
          case _t:
          case Be:
          case pt:
          case Ie:
          case ct:
          case ft:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      ia || a.flags & Aa && Yb(a);
    }
    function qD(e) {
      switch (e.tag) {
        case M:
        case ve:
        case Re: {
          if (e.mode & Nt)
            try {
              vl(), Ib(e, e.return);
            } finally {
              pl(e);
            }
          else
            Ib(e, e.return);
          break;
        }
        case $: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && ID(e, e.return, t), Hb(e, e.return);
          break;
        }
        case I: {
          Hb(e, e.return);
          break;
        }
      }
    }
    function XD(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === I) {
          if (a === null) {
            a = i;
            try {
              var l = i.stateNode;
              t ? bx(l) : Cx(i.stateNode, i.memoizedProps);
            } catch (v) {
              An(e, e.return, v);
            }
          }
        } else if (i.tag === ae) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? Tx(s) : wx(s, i.memoizedProps);
            } catch (v) {
              An(e, e.return, v);
            }
        } else if (!((i.tag === Ie || i.tag === ct) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Yb(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case I:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var l;
          if (e.mode & Nt)
            try {
              vl(), l = t(i);
            } finally {
              pl(e);
            }
          else
            l = t(i);
          typeof l == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", xt(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", xt(e)), t.current = i;
      }
    }
    function ZD(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function Gb(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Gb(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === I) {
          var a = e.stateNode;
          a !== null && aN(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function JD(e) {
      for (var t = e.return; t !== null; ) {
        if (Qb(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Qb(e) {
      return e.tag === I || e.tag === Z || e.tag === le;
    }
    function Kb(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || Qb(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== I && t.tag !== ae && t.tag !== rt; ) {
          if (t.flags & En || t.child === null || t.tag === le)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & En))
          return t.stateNode;
      }
    }
    function ek(e) {
      var t = JD(e);
      switch (t.tag) {
        case I: {
          var a = t.stateNode;
          t.flags & Za && (XR(a), t.flags &= ~Za);
          var i = Kb(e);
          iE(e, i, a);
          break;
        }
        case Z:
        case le: {
          var l = t.stateNode.containerInfo, s = Kb(e);
          aE(e, s, l);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function aE(e, t, a) {
      var i = e.tag, l = i === I || i === ae;
      if (l) {
        var s = e.stateNode;
        t ? Sx(a, s, t) : yx(a, s);
      } else if (i !== le) {
        var v = e.child;
        if (v !== null) {
          aE(v, t, a);
          for (var y = v.sibling; y !== null; )
            aE(y, t, a), y = y.sibling;
        }
      }
    }
    function iE(e, t, a) {
      var i = e.tag, l = i === I || i === ae;
      if (l) {
        var s = e.stateNode;
        t ? gx(a, s, t) : mx(a, s);
      } else if (i !== le) {
        var v = e.child;
        if (v !== null) {
          iE(v, t, a);
          for (var y = v.sibling; y !== null; )
            iE(y, t, a), y = y.sibling;
        }
      }
    }
    var oa = null, ko = !1;
    function tk(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case I: {
              oa = i.stateNode, ko = !1;
              break e;
            }
            case Z: {
              oa = i.stateNode.containerInfo, ko = !0;
              break e;
            }
            case le: {
              oa = i.stateNode.containerInfo, ko = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (oa === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        qb(e, t, a), oa = null, ko = !1;
      }
      ZD(a);
    }
    function ls(e, t, a) {
      for (var i = a.child; i !== null; )
        qb(e, t, i), i = i.sibling;
    }
    function qb(e, t, a) {
      switch (Gd(a), a.tag) {
        case I:
          ia || od(a, t);
        // eslint-disable-next-line-no-fallthrough
        case ae: {
          {
            var i = oa, l = ko;
            oa = null, ls(e, t, a), oa = i, ko = l, oa !== null && (ko ? Rx(oa, a.stateNode) : Ex(oa, a.stateNode));
          }
          return;
        }
        case rt: {
          oa !== null && (ko ? _x(oa, a.stateNode) : mS(oa, a.stateNode));
          return;
        }
        case le: {
          {
            var s = oa, v = ko;
            oa = a.stateNode.containerInfo, ko = !0, ls(e, t, a), oa = s, ko = v;
          }
          return;
        }
        case M:
        case ve:
        case qe:
        case Re: {
          if (!ia) {
            var y = a.updateQueue;
            if (y !== null) {
              var E = y.lastEffect;
              if (E !== null) {
                var b = E.next, C = b;
                do {
                  var j = C, z = j.destroy, K = j.tag;
                  z !== void 0 && ((K & cl) !== li ? gy(a, t, z) : (K & Nr) !== li && (wu(a), a.mode & Nt ? (vl(), gy(a, t, z), pl(a)) : gy(a, t, z), xu())), C = C.next;
                } while (C !== b);
              }
            }
          }
          ls(e, t, a);
          return;
        }
        case $: {
          if (!ia) {
            od(a, t);
            var X = a.stateNode;
            typeof X.componentWillUnmount == "function" && rE(a, t, X);
          }
          ls(e, t, a);
          return;
        }
        case pt: {
          ls(e, t, a);
          return;
        }
        case Ie: {
          if (
            // TODO: Remove this dead flag
            a.mode & dt
          ) {
            var te = ia;
            ia = te || a.memoizedState !== null, ls(e, t, a), ia = te;
          } else
            ls(e, t, a);
          break;
        }
        default: {
          ls(e, t, a);
          return;
        }
      }
    }
    function nk(e) {
      e.memoizedState;
    }
    function rk(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var l = i.memoizedState;
          if (l !== null) {
            var s = l.dehydrated;
            s !== null && $x(s);
          }
        }
      }
    }
    function Xb(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new PD()), t.forEach(function(i) {
          var l = Jk.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Ma)
              if (ad !== null && id !== null)
                Cv(id, ad);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(l, l);
          }
        });
      }
    }
    function ak(e, t, a) {
      ad = a, id = e, Fn(t), Zb(t, e), Fn(t), ad = null, id = null;
    }
    function Ao(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l];
          try {
            tk(e, t, s);
          } catch (E) {
            An(s, t, E);
          }
        }
      var v = bs();
      if (t.subtreeFlags & ga)
        for (var y = t.child; y !== null; )
          Fn(y), Zb(y, e), y = y.sibling;
      Fn(v);
    }
    function Zb(e, t, a) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case M:
        case ve:
        case qe:
        case Re: {
          if (Ao(t, e), hl(e), l & it) {
            try {
              Do(cl | xr, e, e.return), os(cl | xr, e);
            } catch (Ct) {
              An(e, e.return, Ct);
            }
            if (e.mode & Nt) {
              try {
                vl(), Do(Nr | xr, e, e.return);
              } catch (Ct) {
                An(e, e.return, Ct);
              }
              pl(e);
            } else
              try {
                Do(Nr | xr, e, e.return);
              } catch (Ct) {
                An(e, e.return, Ct);
              }
          }
          return;
        }
        case $: {
          Ao(t, e), hl(e), l & Aa && i !== null && od(i, i.return);
          return;
        }
        case I: {
          Ao(t, e), hl(e), l & Aa && i !== null && od(i, i.return);
          {
            if (e.flags & Za) {
              var s = e.stateNode;
              try {
                XR(s);
              } catch (Ct) {
                An(e, e.return, Ct);
              }
            }
            if (l & it) {
              var v = e.stateNode;
              if (v != null) {
                var y = e.memoizedProps, E = i !== null ? i.memoizedProps : y, b = e.type, C = e.updateQueue;
                if (e.updateQueue = null, C !== null)
                  try {
                    vx(v, C, b, E, y, e);
                  } catch (Ct) {
                    An(e, e.return, Ct);
                  }
              }
            }
          }
          return;
        }
        case ae: {
          if (Ao(t, e), hl(e), l & it) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var j = e.stateNode, z = e.memoizedProps, K = i !== null ? i.memoizedProps : z;
            try {
              hx(j, K, z);
            } catch (Ct) {
              An(e, e.return, Ct);
            }
          }
          return;
        }
        case Z: {
          if (Ao(t, e), hl(e), l & it && i !== null) {
            var X = i.memoizedState;
            if (X.isDehydrated)
              try {
                Px(t.containerInfo);
              } catch (Ct) {
                An(e, e.return, Ct);
              }
          }
          return;
        }
        case le: {
          Ao(t, e), hl(e);
          return;
        }
        case Ce: {
          Ao(t, e), hl(e);
          var te = e.child;
          if (te.flags & Ho) {
            var Fe = te.stateNode, yt = te.memoizedState, st = yt !== null;
            if (Fe.isHidden = st, st) {
              var Jt = te.alternate !== null && te.alternate.memoizedState !== null;
              Jt || jk();
            }
          }
          if (l & it) {
            try {
              nk(e);
            } catch (Ct) {
              An(e, e.return, Ct);
            }
            Xb(e);
          }
          return;
        }
        case Ie: {
          var Ht = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & dt
          ) {
            var H = ia;
            ia = H || Ht, Ao(t, e), ia = H;
          } else
            Ao(t, e);
          if (hl(e), l & Ho) {
            var ne = e.stateNode, W = e.memoizedState, Ee = W !== null, Qe = e;
            if (ne.isHidden = Ee, Ee && !Ht && (Qe.mode & dt) !== Ue) {
              Je = Qe;
              for (var $e = Qe.child; $e !== null; )
                Je = $e, ok($e), $e = $e.sibling;
            }
            XD(Qe, Ee);
          }
          return;
        }
        case _t: {
          Ao(t, e), hl(e), l & it && Xb(e);
          return;
        }
        case pt:
          return;
        default: {
          Ao(t, e), hl(e);
          return;
        }
      }
    }
    function hl(e) {
      var t = e.flags;
      if (t & En) {
        try {
          ek(e);
        } catch (a) {
          An(e, e.return, a);
        }
        e.flags &= ~En;
      }
      t & Oi && (e.flags &= ~Oi);
    }
    function ik(e, t, a) {
      ad = a, id = t, Je = e, Jb(e, t, a), ad = null, id = null;
    }
    function Jb(e, t, a) {
      for (var i = (e.mode & dt) !== Ue; Je !== null; ) {
        var l = Je, s = l.child;
        if (l.tag === Ie && i) {
          var v = l.memoizedState !== null, y = v || yy;
          if (y) {
            oE(e, t, a);
            continue;
          } else {
            var E = l.alternate, b = E !== null && E.memoizedState !== null, C = b || ia, j = yy, z = ia;
            yy = y, ia = C, ia && !z && (Je = l, lk(l));
            for (var K = s; K !== null; )
              Je = K, Jb(
                K,
                // New root; bubble back up to here and stop.
                t,
                a
              ), K = K.sibling;
            Je = l, yy = j, ia = z, oE(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & Ei) !== mt && s !== null ? (s.return = l, Je = s) : oE(e, t, a);
      }
    }
    function oE(e, t, a) {
      for (; Je !== null; ) {
        var i = Je;
        if ((i.flags & Ei) !== mt) {
          var l = i.alternate;
          Fn(i);
          try {
            KD(t, l, i, a);
          } catch (v) {
            An(i, i.return, v);
          }
          xn();
        }
        if (i === e) {
          Je = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Je = s;
          return;
        }
        Je = i.return;
      }
    }
    function ok(e) {
      for (; Je !== null; ) {
        var t = Je, a = t.child;
        switch (t.tag) {
          case M:
          case ve:
          case qe:
          case Re: {
            if (t.mode & Nt)
              try {
                vl(), Do(Nr, t, t.return);
              } finally {
                pl(t);
              }
            else
              Do(Nr, t, t.return);
            break;
          }
          case $: {
            od(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && rE(t, t.return, i);
            break;
          }
          case I: {
            od(t, t.return);
            break;
          }
          case Ie: {
            var l = t.memoizedState !== null;
            if (l) {
              eT(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Je = a) : eT(e);
      }
    }
    function eT(e) {
      for (; Je !== null; ) {
        var t = Je;
        if (t === e) {
          Je = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Je = a;
          return;
        }
        Je = t.return;
      }
    }
    function lk(e) {
      for (; Je !== null; ) {
        var t = Je, a = t.child;
        if (t.tag === Ie) {
          var i = t.memoizedState !== null;
          if (i) {
            tT(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Je = a) : tT(e);
      }
    }
    function tT(e) {
      for (; Je !== null; ) {
        var t = Je;
        Fn(t);
        try {
          qD(t);
        } catch (i) {
          An(t, t.return, i);
        }
        if (xn(), t === e) {
          Je = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Je = a;
          return;
        }
        Je = t.return;
      }
    }
    function uk(e, t, a, i) {
      Je = t, sk(t, e, a, i);
    }
    function sk(e, t, a, i) {
      for (; Je !== null; ) {
        var l = Je, s = l.child;
        (l.subtreeFlags & Sa) !== mt && s !== null ? (s.return = l, Je = s) : ck(e, t, a, i);
      }
    }
    function ck(e, t, a, i) {
      for (; Je !== null; ) {
        var l = Je;
        if ((l.flags & ma) !== mt) {
          Fn(l);
          try {
            fk(t, l, a, i);
          } catch (v) {
            An(l, l.return, v);
          }
          xn();
        }
        if (l === e) {
          Je = null;
          return;
        }
        var s = l.sibling;
        if (s !== null) {
          s.return = l.return, Je = s;
          return;
        }
        Je = l.return;
      }
    }
    function fk(e, t, a, i) {
      switch (t.tag) {
        case M:
        case ve:
        case Re: {
          if (t.mode & Nt) {
            C0();
            try {
              os(ra | xr, t);
            } finally {
              T0(t);
            }
          } else
            os(ra | xr, t);
          break;
        }
      }
    }
    function dk(e) {
      Je = e, pk();
    }
    function pk() {
      for (; Je !== null; ) {
        var e = Je, t = e.child;
        if ((Je.flags & on) !== mt) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var l = a[i];
              Je = l, mk(l, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var v = s.child;
                if (v !== null) {
                  s.child = null;
                  do {
                    var y = v.sibling;
                    v.sibling = null, v = y;
                  } while (v !== null);
                }
              }
            }
            Je = e;
          }
        }
        (e.subtreeFlags & Sa) !== mt && t !== null ? (t.return = e, Je = t) : vk();
      }
    }
    function vk() {
      for (; Je !== null; ) {
        var e = Je;
        (e.flags & ma) !== mt && (Fn(e), hk(e), xn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Je = t;
          return;
        }
        Je = e.return;
      }
    }
    function hk(e) {
      switch (e.tag) {
        case M:
        case ve:
        case Re: {
          e.mode & Nt ? (C0(), Do(ra | xr, e, e.return), T0(e)) : Do(ra | xr, e, e.return);
          break;
        }
      }
    }
    function mk(e, t) {
      for (; Je !== null; ) {
        var a = Je;
        Fn(a), gk(a, t), xn();
        var i = a.child;
        i !== null ? (i.return = a, Je = i) : yk(e);
      }
    }
    function yk(e) {
      for (; Je !== null; ) {
        var t = Je, a = t.sibling, i = t.return;
        if (Gb(t), t === e) {
          Je = null;
          return;
        }
        if (a !== null) {
          a.return = i, Je = a;
          return;
        }
        Je = i;
      }
    }
    function gk(e, t) {
      switch (e.tag) {
        case M:
        case ve:
        case Re: {
          e.mode & Nt ? (C0(), Do(ra, e, t), T0(e)) : Do(ra, e, t);
          break;
        }
      }
    }
    function Sk(e) {
      switch (e.tag) {
        case M:
        case ve:
        case Re: {
          try {
            os(Nr | xr, e);
          } catch (a) {
            An(e, e.return, a);
          }
          break;
        }
        case $: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            An(e, e.return, a);
          }
          break;
        }
      }
    }
    function Ek(e) {
      switch (e.tag) {
        case M:
        case ve:
        case Re: {
          try {
            os(ra | xr, e);
          } catch (t) {
            An(e, e.return, t);
          }
          break;
        }
      }
    }
    function Rk(e) {
      switch (e.tag) {
        case M:
        case ve:
        case Re: {
          try {
            Do(Nr | xr, e, e.return);
          } catch (a) {
            An(e, e.return, a);
          }
          break;
        }
        case $: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && rE(e, e.return, t);
          break;
        }
      }
    }
    function _k(e) {
      switch (e.tag) {
        case M:
        case ve:
        case Re:
          try {
            Do(ra | xr, e, e.return);
          } catch (t) {
            An(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var vv = Symbol.for;
      vv("selector.component"), vv("selector.has_pseudo_class"), vv("selector.role"), vv("selector.test_id"), vv("selector.text");
    }
    var bk = [];
    function Tk() {
      bk.forEach(function(e) {
        return e();
      });
    }
    var Ck = m.ReactCurrentActQueue;
    function wk(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function nT() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Ck.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var xk = Math.ceil, lE = m.ReactCurrentDispatcher, uE = m.ReactCurrentOwner, la = m.ReactCurrentBatchConfig, Lo = m.ReactCurrentActQueue, Ar = (
      /*             */
      0
    ), rT = (
      /*               */
      1
    ), ua = (
      /*                */
      2
    ), Qi = (
      /*                */
      4
    ), au = 0, hv = 1, kc = 2, Sy = 3, mv = 4, aT = 5, sE = 6, Zt = Ar, Ba = null, Zn = null, Lr = de, ml = de, cE = Xu(de), Or = au, yv = null, Ey = de, gv = de, Ry = de, Sv = null, ui = null, fE = 0, iT = 500, oT = 1 / 0, Nk = 500, iu = null;
    function Ev() {
      oT = or() + Nk;
    }
    function lT() {
      return oT;
    }
    var _y = !1, dE = null, ld = null, Ac = !1, us = null, Rv = de, pE = [], vE = null, Dk = 50, _v = 0, hE = null, mE = !1, by = !1, kk = 50, ud = 0, Ty = null, bv = Tn, Cy = de, uT = !1;
    function wy() {
      return Ba;
    }
    function Ia() {
      return (Zt & (ua | Qi)) !== Ar ? or() : (bv !== Tn || (bv = or()), bv);
    }
    function ss(e) {
      var t = e.mode;
      if ((t & dt) === Ue)
        return lt;
      if ((Zt & ua) !== Ar && Lr !== de)
        return ju(Lr);
      var a = CN() !== TN;
      if (a) {
        if (la.transition !== null) {
          var i = la.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Cy === Rn && (Cy = Kr()), Cy;
      }
      var l = Xr();
      if (l !== Rn)
        return l;
      var s = sx();
      return s;
    }
    function Ak(e) {
      var t = e.mode;
      return (t & dt) === Ue ? lt : qr();
    }
    function Mr(e, t, a, i) {
      tA(), uT && S("useInsertionEffect must not schedule updates."), mE && (by = !0), Pu(e, a, i), (Zt & ua) !== de && e === Ba ? aA(t) : (Ma && dp(e, t, a), iA(t), e === Ba && ((Zt & ua) === Ar && (gv = Ut(gv, a)), Or === mv && cs(e, Lr)), si(e, i), a === lt && Zt === Ar && (t.mode & dt) === Ue && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Lo.isBatchingLegacy && (Ev(), u_()));
    }
    function Lk(e, t, a) {
      var i = e.current;
      i.lanes = t, Pu(e, t, a), si(e, a);
    }
    function Ok(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Zt & ua) !== Ar
      );
    }
    function si(e, t) {
      var a = e.callbackNode;
      ap(e, t);
      var i = Ks(e, e === Ba ? Lr : de);
      if (i === de) {
        a !== null && TT(a), e.callbackNode = null, e.callbackPriority = Rn;
        return;
      }
      var l = Jo(i), s = e.callbackPriority;
      if (s === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Lo.current !== null && a !== bE)) {
        a == null && s !== lt && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && TT(a);
      var v;
      if (l === lt)
        e.tag === Zu ? (Lo.isBatchingLegacy !== null && (Lo.didScheduleLegacyUpdate = !0), lN(fT.bind(null, e))) : l_(fT.bind(null, e)), Lo.current !== null ? Lo.current.push(Ju) : fx(function() {
          (Zt & (ua | Qi)) === Ar && Ju();
        }), v = null;
      else {
        var y;
        switch ($h(i)) {
          case ja:
            y = Qo;
            break;
          case Fi:
            y = Tu;
            break;
          case bi:
            y = Ko;
            break;
          case tc:
            y = qo;
            break;
          default:
            y = Ko;
            break;
        }
        v = TE(y, sT.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = v;
    }
    function sT(e, t) {
      if (XN(), bv = Tn, Cy = de, (Zt & (ua | Qi)) !== Ar)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = lu();
      if (i && e.callbackNode !== a)
        return null;
      var l = Ks(e, e === Ba ? Lr : de);
      if (l === de)
        return null;
      var s = !Xs(e, l) && !Fh(e, l) && !t, v = s ? Ik(e, l) : Ny(e, l);
      if (v !== au) {
        if (v === kc) {
          var y = qs(e);
          y !== de && (l = y, v = yE(e, y));
        }
        if (v === hv) {
          var E = yv;
          throw Lc(e, de), cs(e, l), si(e, or()), E;
        }
        if (v === sE)
          cs(e, l);
        else {
          var b = !Xs(e, l), C = e.current.alternate;
          if (b && !Uk(C)) {
            if (v = Ny(e, l), v === kc) {
              var j = qs(e);
              j !== de && (l = j, v = yE(e, j));
            }
            if (v === hv) {
              var z = yv;
              throw Lc(e, de), cs(e, l), si(e, or()), z;
            }
          }
          e.finishedWork = C, e.finishedLanes = l, Mk(e, v, l);
        }
      }
      return si(e, or()), e.callbackNode === a ? sT.bind(null, e) : null;
    }
    function yE(e, t) {
      var a = Sv;
      if (Ge(e)) {
        var i = Lc(e, t);
        i.flags |= Qr, eN(e.containerInfo);
      }
      var l = Ny(e, t);
      if (l !== kc) {
        var s = ui;
        ui = a, s !== null && cT(s);
      }
      return l;
    }
    function cT(e) {
      ui === null ? ui = e : ui.push.apply(ui, e);
    }
    function Mk(e, t, a) {
      switch (t) {
        case au:
        case hv:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case kc: {
          Oc(e, ui, iu);
          break;
        }
        case Sy: {
          if (cs(e, a), lp(a) && // do not delay if we're inside an act() scope
          !CT()) {
            var i = fE + iT - or();
            if (i > 10) {
              var l = Ks(e, de);
              if (l !== de)
                break;
              var s = e.suspendedLanes;
              if (!tl(s, a)) {
                Ia(), Js(e, s);
                break;
              }
              e.timeoutHandle = vS(Oc.bind(null, e, ui, iu), i);
              break;
            }
          }
          Oc(e, ui, iu);
          break;
        }
        case mv: {
          if (cs(e, a), jh(a))
            break;
          if (!CT()) {
            var v = Uh(e, a), y = v, E = or() - y, b = eA(E) - E;
            if (b > 10) {
              e.timeoutHandle = vS(Oc.bind(null, e, ui, iu), b);
              break;
            }
          }
          Oc(e, ui, iu);
          break;
        }
        case aT: {
          Oc(e, ui, iu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Uk(e) {
      for (var t = e; ; ) {
        if (t.flags & Ll) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var l = 0; l < i.length; l++) {
                var s = i[l], v = s.getSnapshot, y = s.value;
                try {
                  if (!ut(v(), y))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var E = t.child;
        if (t.subtreeFlags & Ll && E !== null) {
          E.return = t, t = E;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function cs(e, t) {
      t = Fu(t, Ry), t = Fu(t, gv), cp(e, t);
    }
    function fT(e) {
      if (ZN(), (Zt & (ua | Qi)) !== Ar)
        throw new Error("Should not already be working.");
      lu();
      var t = Ks(e, de);
      if (!_a(t, lt))
        return si(e, or()), null;
      var a = Ny(e, t);
      if (e.tag !== Zu && a === kc) {
        var i = qs(e);
        i !== de && (t = i, a = yE(e, i));
      }
      if (a === hv) {
        var l = yv;
        throw Lc(e, de), cs(e, t), si(e, or()), l;
      }
      if (a === sE)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Oc(e, ui, iu), si(e, or()), null;
    }
    function zk(e, t) {
      t !== de && (bf(e, Ut(t, lt)), si(e, or()), (Zt & (ua | Qi)) === Ar && (Ev(), Ju()));
    }
    function gE(e, t) {
      var a = Zt;
      Zt |= rT;
      try {
        return e(t);
      } finally {
        Zt = a, Zt === Ar && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Lo.isBatchingLegacy && (Ev(), u_());
      }
    }
    function Vk(e, t, a, i, l) {
      var s = Xr(), v = la.transition;
      try {
        return la.transition = null, nn(ja), e(t, a, i, l);
      } finally {
        nn(s), la.transition = v, Zt === Ar && Ev();
      }
    }
    function ou(e) {
      us !== null && us.tag === Zu && (Zt & (ua | Qi)) === Ar && lu();
      var t = Zt;
      Zt |= rT;
      var a = la.transition, i = Xr();
      try {
        return la.transition = null, nn(ja), e ? e() : void 0;
      } finally {
        nn(i), la.transition = a, Zt = t, (Zt & (ua | Qi)) === Ar && Ju();
      }
    }
    function dT() {
      return (Zt & (ua | Qi)) !== Ar;
    }
    function xy(e, t) {
      Ta(cE, ml, e), ml = Ut(ml, t);
    }
    function SE(e) {
      ml = cE.current, ba(cE, e);
    }
    function Lc(e, t) {
      e.finishedWork = null, e.finishedLanes = de;
      var a = e.timeoutHandle;
      if (a !== hS && (e.timeoutHandle = hS, cx(a)), Zn !== null)
        for (var i = Zn.return; i !== null; ) {
          var l = i.alternate;
          $b(l, i), i = i.return;
        }
      Ba = e;
      var s = Mc(e.current, null);
      return Zn = s, Lr = ml = t, Or = au, yv = null, Ey = de, gv = de, Ry = de, Sv = null, ui = null, LN(), To.discardPendingWarnings(), s;
    }
    function pT(e, t) {
      do {
        var a = Zn;
        try {
          if (Vm(), V_(), xn(), uE.current = null, a === null || a.return === null) {
            Or = hv, yv = t, Zn = null;
            return;
          }
          if (ke && a.mode & Nt && dy(a, !0), se)
            if (za(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              qd(a, i, Lr);
            } else
              zl(a, t, Lr);
          lD(e, a.return, a, t, Lr), yT(a);
        } catch (l) {
          t = l, Zn === a && a !== null ? (a = a.return, Zn = a) : a = Zn;
          continue;
        }
        return;
      } while (!0);
    }
    function vT() {
      var e = lE.current;
      return lE.current = ly, e === null ? ly : e;
    }
    function hT(e) {
      lE.current = e;
    }
    function jk() {
      fE = or();
    }
    function Tv(e) {
      Ey = Ut(e, Ey);
    }
    function Fk() {
      Or === au && (Or = Sy);
    }
    function EE() {
      (Or === au || Or === Sy || Or === kc) && (Or = mv), Ba !== null && (op(Ey) || op(gv)) && cs(Ba, Lr);
    }
    function Pk(e) {
      Or !== mv && (Or = kc), Sv === null ? Sv = [e] : Sv.push(e);
    }
    function $k() {
      return Or === au;
    }
    function Ny(e, t) {
      var a = Zt;
      Zt |= ua;
      var i = vT();
      if (Ba !== e || Lr !== t) {
        if (Ma) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (Cv(e, Lr), l.clear()), ec(e, t);
        }
        iu = ji(), Lc(e, t);
      }
      Hs(t);
      do
        try {
          Bk();
          break;
        } catch (s) {
          pT(e, s);
        }
      while (!0);
      if (Vm(), Zt = a, hT(i), Zn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return uf(), Ba = null, Lr = de, Or;
    }
    function Bk() {
      for (; Zn !== null; )
        mT(Zn);
    }
    function Ik(e, t) {
      var a = Zt;
      Zt |= ua;
      var i = vT();
      if (Ba !== e || Lr !== t) {
        if (Ma) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (Cv(e, Lr), l.clear()), ec(e, t);
        }
        iu = ji(), Ev(), Lc(e, t);
      }
      Hs(t);
      do
        try {
          Hk();
          break;
        } catch (s) {
          pT(e, s);
        }
      while (!0);
      return Vm(), hT(i), Zt = a, Zn !== null ? (Zd(), au) : (uf(), Ba = null, Lr = de, Or);
    }
    function Hk() {
      for (; Zn !== null && !Nh(); )
        mT(Zn);
    }
    function mT(e) {
      var t = e.alternate;
      Fn(e);
      var a;
      (e.mode & Nt) !== Ue ? (b0(e), a = RE(t, e, ml), dy(e, !0)) : a = RE(t, e, ml), xn(), e.memoizedProps = e.pendingProps, a === null ? yT(e) : Zn = a, uE.current = null;
    }
    function yT(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Wo) === mt) {
          Fn(t);
          var l = void 0;
          if ((t.mode & Nt) === Ue ? l = Pb(a, t, ml) : (b0(t), l = Pb(a, t, ml), dy(t, !1)), xn(), l !== null) {
            Zn = l;
            return;
          }
        } else {
          var s = FD(a, t);
          if (s !== null) {
            s.flags &= po, Zn = s;
            return;
          }
          if ((t.mode & Nt) !== Ue) {
            dy(t, !1);
            for (var v = t.actualDuration, y = t.child; y !== null; )
              v += y.actualDuration, y = y.sibling;
            t.actualDuration = v;
          }
          if (i !== null)
            i.flags |= Wo, i.subtreeFlags = mt, i.deletions = null;
          else {
            Or = sE, Zn = null;
            return;
          }
        }
        var E = t.sibling;
        if (E !== null) {
          Zn = E;
          return;
        }
        t = i, Zn = t;
      } while (t !== null);
      Or === au && (Or = aT);
    }
    function Oc(e, t, a) {
      var i = Xr(), l = la.transition;
      try {
        la.transition = null, nn(ja), Wk(e, t, a, i);
      } finally {
        la.transition = l, nn(i);
      }
      return null;
    }
    function Wk(e, t, a, i) {
      do
        lu();
      while (us !== null);
      if (nA(), (Zt & (ua | Qi)) !== Ar)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, s = e.finishedLanes;
      if (Qd(s), l === null)
        return Kd(), null;
      if (s === de && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = de, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Rn;
      var v = Ut(l.lanes, l.childLanes);
      Vg(e, v), e === Ba && (Ba = null, Zn = null, Lr = de), ((l.subtreeFlags & Sa) !== mt || (l.flags & Sa) !== mt) && (Ac || (Ac = !0, vE = a, TE(Ko, function() {
        return lu(), null;
      })));
      var y = (l.subtreeFlags & (ya | ga | Ei | Sa)) !== mt, E = (l.flags & (ya | ga | Ei | Sa)) !== mt;
      if (y || E) {
        var b = la.transition;
        la.transition = null;
        var C = Xr();
        nn(ja);
        var j = Zt;
        Zt |= Qi, uE.current = null, HD(e, l), ub(), ak(e, l, s), rx(e.containerInfo), e.current = l, Nu(s), ik(l, e, s), Oh(), bu(), Zt = j, nn(C), la.transition = b;
      } else
        e.current = l, ub();
      var z = Ac;
      if (Ac ? (Ac = !1, us = e, Rv = s) : (ud = 0, Ty = null), v = e.pendingLanes, v === de && (ld = null), z || RT(e.current, !1), ri(l.stateNode, i), Ma && e.memoizedUpdaters.clear(), Tk(), si(e, or()), t !== null)
        for (var K = e.onRecoverableError, X = 0; X < t.length; X++) {
          var te = t[X], Fe = te.stack, yt = te.digest;
          K(te.value, {
            componentStack: Fe,
            digest: yt
          });
        }
      if (_y) {
        _y = !1;
        var st = dE;
        throw dE = null, st;
      }
      return _a(Rv, lt) && e.tag !== Zu && lu(), v = e.pendingLanes, _a(v, lt) ? (qN(), e === hE ? _v++ : (_v = 0, hE = e)) : _v = 0, Ju(), Kd(), null;
    }
    function lu() {
      if (us !== null) {
        var e = $h(Rv), t = Tf(bi, e), a = la.transition, i = Xr();
        try {
          return la.transition = null, nn(t), Gk();
        } finally {
          nn(i), la.transition = a;
        }
      }
      return !1;
    }
    function Yk(e) {
      pE.push(e), Ac || (Ac = !0, TE(Ko, function() {
        return lu(), null;
      }));
    }
    function Gk() {
      if (us === null)
        return !1;
      var e = vE;
      vE = null;
      var t = us, a = Rv;
      if (us = null, Rv = de, (Zt & (ua | Qi)) !== Ar)
        throw new Error("Cannot flush passive effects while already rendering.");
      mE = !0, by = !1, Xd(a);
      var i = Zt;
      Zt |= Qi, dk(t.current), uk(t, t.current, a, e);
      {
        var l = pE;
        pE = [];
        for (var s = 0; s < l.length; s++) {
          var v = l[s];
          QD(t, v);
        }
      }
      Pn(), RT(t.current, !0), Zt = i, Ju(), by ? t === Ty ? ud++ : (ud = 0, Ty = t) : ud = 0, mE = !1, by = !1, Ul(t);
      {
        var y = t.current.stateNode;
        y.effectDuration = 0, y.passiveEffectDuration = 0;
      }
      return !0;
    }
    function gT(e) {
      return ld !== null && ld.has(e);
    }
    function Qk(e) {
      ld === null ? ld = /* @__PURE__ */ new Set([e]) : ld.add(e);
    }
    function Kk(e) {
      _y || (_y = !0, dE = e);
    }
    var qk = Kk;
    function ST(e, t, a) {
      var i = Nc(a, t), l = mb(e, i, lt), s = ts(e, l, lt), v = Ia();
      s !== null && (Pu(s, lt, v), si(s, v));
    }
    function An(e, t, a) {
      if ($D(a), wv(!1), e.tag === Z) {
        ST(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === Z) {
          ST(i, e, a);
          return;
        } else if (i.tag === $) {
          var l = i.type, s = i.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !gT(s)) {
            var v = Nc(a, e), y = $0(i, v, lt), E = ts(i, y, lt), b = Ia();
            E !== null && (Pu(E, lt, b), si(E, b));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Xk(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var l = Ia();
      Js(e, a), oA(e), Ba === e && tl(Lr, a) && (Or === mv || Or === Sy && lp(Lr) && or() - fE < iT ? Lc(e, de) : Ry = Ut(Ry, a)), si(e, l);
    }
    function ET(e, t) {
      t === Rn && (t = Ak(e));
      var a = Ia(), i = oi(e, t);
      i !== null && (Pu(i, t, a), si(i, a));
    }
    function Zk(e) {
      var t = e.memoizedState, a = Rn;
      t !== null && (a = t.retryLane), ET(e, a);
    }
    function Jk(e, t) {
      var a = Rn, i;
      switch (e.tag) {
        case Ce:
          i = e.stateNode;
          var l = e.memoizedState;
          l !== null && (a = l.retryLane);
          break;
        case _t:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), ET(e, a);
    }
    function eA(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : xk(e / 1960) * 1960;
    }
    function tA() {
      if (_v > Dk)
        throw _v = 0, hE = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      ud > kk && (ud = 0, Ty = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function nA() {
      To.flushLegacyContextWarning(), To.flushPendingUnsafeLifecycleWarnings();
    }
    function RT(e, t) {
      Fn(e), Dy(e, ei, Rk), t && Dy(e, Ol, _k), Dy(e, ei, Sk), t && Dy(e, Ol, Ek), xn();
    }
    function Dy(e, t, a) {
      for (var i = e, l = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== l && i.child !== null && s !== mt ? i = i.child : ((i.flags & t) !== mt && a(i), i.sibling !== null ? i = i.sibling : i = l = i.return);
      }
    }
    var ky = null;
    function _T(e) {
      {
        if ((Zt & ua) !== Ar || !(e.mode & dt))
          return;
        var t = e.tag;
        if (t !== J && t !== Z && t !== $ && t !== M && t !== ve && t !== qe && t !== Re)
          return;
        var a = xt(e) || "ReactComponent";
        if (ky !== null) {
          if (ky.has(a))
            return;
          ky.add(a);
        } else
          ky = /* @__PURE__ */ new Set([a]);
        var i = jn;
        try {
          Fn(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Fn(e) : xn();
        }
      }
    }
    var RE;
    {
      var rA = null;
      RE = function(e, t, a) {
        var i = kT(rA, t);
        try {
          return Ub(e, t, a);
        } catch (s) {
          if (hN() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Vm(), V_(), $b(e, t), kT(t, i), t.mode & Nt && b0(t), gi(null, Ub, null, e, t, a), Lg()) {
            var l = fo();
            typeof l == "object" && l !== null && l._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var bT = !1, _E;
    _E = /* @__PURE__ */ new Set();
    function aA(e) {
      if (pa && !GN())
        switch (e.tag) {
          case M:
          case ve:
          case Re: {
            var t = Zn && xt(Zn) || "Unknown", a = t;
            if (!_E.has(a)) {
              _E.add(a);
              var i = xt(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case $: {
            bT || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), bT = !0);
            break;
          }
        }
    }
    function Cv(e, t) {
      if (Ma) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          dp(e, i, t);
        });
      }
    }
    var bE = {};
    function TE(e, t) {
      {
        var a = Lo.current;
        return a !== null ? (a.push(t), bE) : Wd(e, t);
      }
    }
    function TT(e) {
      if (e !== bE)
        return rf(e);
    }
    function CT() {
      return Lo.current !== null;
    }
    function iA(e) {
      {
        if (e.mode & dt) {
          if (!nT())
            return;
        } else if (!wk() || Zt !== Ar || e.tag !== M && e.tag !== ve && e.tag !== Re)
          return;
        if (Lo.current === null) {
          var t = jn;
          try {
            Fn(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, xt(e));
          } finally {
            t ? Fn(e) : xn();
          }
        }
      }
    }
    function oA(e) {
      e.tag !== Zu && nT() && Lo.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function wv(e) {
      uT = e;
    }
    var Ki = null, sd = null, lA = function(e) {
      Ki = e;
    };
    function cd(e) {
      {
        if (Ki === null)
          return e;
        var t = Ki(e);
        return t === void 0 ? e : t.current;
      }
    }
    function CE(e) {
      return cd(e);
    }
    function wE(e) {
      {
        if (Ki === null)
          return e;
        var t = Ki(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = cd(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: ye,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function wT(e, t) {
      {
        if (Ki === null)
          return !1;
        var a = e.elementType, i = t.type, l = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case $: {
            typeof i == "function" && (l = !0);
            break;
          }
          case M: {
            (typeof i == "function" || s === gt) && (l = !0);
            break;
          }
          case ve: {
            (s === ye || s === gt) && (l = !0);
            break;
          }
          case qe:
          case Re: {
            (s === Xt || s === gt) && (l = !0);
            break;
          }
          default:
            return !1;
        }
        if (l) {
          var v = Ki(a);
          if (v !== void 0 && v === Ki(i))
            return !0;
        }
        return !1;
      }
    }
    function xT(e) {
      {
        if (Ki === null || typeof WeakSet != "function")
          return;
        sd === null && (sd = /* @__PURE__ */ new WeakSet()), sd.add(e);
      }
    }
    var uA = function(e, t) {
      {
        if (Ki === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        lu(), ou(function() {
          xE(e.current, i, a);
        });
      }
    }, sA = function(e, t) {
      {
        if (e.context !== Ci)
          return;
        lu(), ou(function() {
          xv(t, e, null, null);
        });
      }
    };
    function xE(e, t, a) {
      {
        var i = e.alternate, l = e.child, s = e.sibling, v = e.tag, y = e.type, E = null;
        switch (v) {
          case M:
          case Re:
          case $:
            E = y;
            break;
          case ve:
            E = y.render;
            break;
        }
        if (Ki === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var b = !1, C = !1;
        if (E !== null) {
          var j = Ki(E);
          j !== void 0 && (a.has(j) ? C = !0 : t.has(j) && (v === $ ? C = !0 : b = !0));
        }
        if (sd !== null && (sd.has(e) || i !== null && sd.has(i)) && (C = !0), C && (e._debugNeedsRemount = !0), C || b) {
          var z = oi(e, lt);
          z !== null && Mr(z, e, lt, Tn);
        }
        l !== null && !C && xE(l, t, a), s !== null && xE(s, t, a);
      }
    }
    var cA = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(l) {
          return l.current;
        }));
        return NE(e.current, i, a), a;
      }
    };
    function NE(e, t, a) {
      {
        var i = e.child, l = e.sibling, s = e.tag, v = e.type, y = null;
        switch (s) {
          case M:
          case Re:
          case $:
            y = v;
            break;
          case ve:
            y = v.render;
            break;
        }
        var E = !1;
        y !== null && t.has(y) && (E = !0), E ? fA(e, a) : i !== null && NE(i, t, a), l !== null && NE(l, t, a);
      }
    }
    function fA(e, t) {
      {
        var a = dA(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case I:
              t.add(i.stateNode);
              return;
            case le:
              t.add(i.stateNode.containerInfo);
              return;
            case Z:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function dA(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === I)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var DE;
    {
      DE = !1;
      try {
        var NT = Object.preventExtensions({});
      } catch {
        DE = !0;
      }
    }
    function pA(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = mt, this.subtreeFlags = mt, this.deletions = null, this.lanes = de, this.childLanes = de, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !DE && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var wi = function(e, t, a, i) {
      return new pA(e, t, a, i);
    };
    function kE(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function vA(e) {
      return typeof e == "function" && !kE(e) && e.defaultProps === void 0;
    }
    function hA(e) {
      if (typeof e == "function")
        return kE(e) ? $ : M;
      if (e != null) {
        var t = e.$$typeof;
        if (t === ye)
          return ve;
        if (t === Xt)
          return qe;
      }
      return J;
    }
    function Mc(e, t) {
      var a = e.alternate;
      a === null ? (a = wi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = mt, a.subtreeFlags = mt, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Cr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case J:
        case M:
        case Re:
          a.type = cd(e.type);
          break;
        case $:
          a.type = CE(e.type);
          break;
        case ve:
          a.type = wE(e.type);
          break;
      }
      return a;
    }
    function mA(e, t) {
      e.flags &= Cr | En;
      var a = e.alternate;
      if (a === null)
        e.childLanes = de, e.lanes = t, e.child = null, e.subtreeFlags = mt, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = mt, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function yA(e, t, a) {
      var i;
      return e === xm ? (i = dt, t === !0 && (i |= kn, i |= Ea)) : i = Ue, Ma && (i |= Nt), wi(Z, null, null, i);
    }
    function AE(e, t, a, i, l, s) {
      var v = J, y = e;
      if (typeof e == "function")
        kE(e) ? (v = $, y = CE(y)) : y = cd(y);
      else if (typeof e == "string")
        v = I;
      else
        e: switch (e) {
          case Na:
            return fs(a.children, l, s, t);
          case Xi:
            v = wt, l |= kn, (l & dt) !== Ue && (l |= Ea);
            break;
          case Oo:
            return gA(a, l, s, t);
          case ht:
            return SA(a, l, s, t);
          case $t:
            return EA(a, l, s, t);
          case gn:
            return DT(a, l, s, t);
          case Mn:
          // eslint-disable-next-line no-fallthrough
          case Vt:
          // eslint-disable-next-line no-fallthrough
          case Vr:
          // eslint-disable-next-line no-fallthrough
          case cn:
          // eslint-disable-next-line no-fallthrough
          case rr:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case k:
                  v = Te;
                  break e;
                case he:
                  v = De;
                  break e;
                case ye:
                  v = ve, y = wE(y);
                  break e;
                case Xt:
                  v = qe;
                  break e;
                case gt:
                  v = nt, y = null;
                  break e;
              }
            var E = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (E += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var b = i ? xt(i) : null;
              b && (E += `

Check the render method of \`` + b + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + E));
          }
        }
      var C = wi(v, a, t, l);
      return C.elementType = e, C.type = y, C.lanes = s, C._debugOwner = i, C;
    }
    function LE(e, t, a) {
      var i = null;
      i = e._owner;
      var l = e.type, s = e.key, v = e.props, y = AE(l, s, v, i, t, a);
      return y._debugSource = e._source, y._debugOwner = e._owner, y;
    }
    function fs(e, t, a, i) {
      var l = wi(Pe, e, i, t);
      return l.lanes = a, l;
    }
    function gA(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = wi(Ke, e, i, t | Nt);
      return l.elementType = Oo, l.lanes = a, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function SA(e, t, a, i) {
      var l = wi(Ce, e, i, t);
      return l.elementType = ht, l.lanes = a, l;
    }
    function EA(e, t, a, i) {
      var l = wi(_t, e, i, t);
      return l.elementType = $t, l.lanes = a, l;
    }
    function DT(e, t, a, i) {
      var l = wi(Ie, e, i, t);
      l.elementType = gn, l.lanes = a;
      var s = {
        isHidden: !1
      };
      return l.stateNode = s, l;
    }
    function OE(e, t, a) {
      var i = wi(ae, e, null, t);
      return i.lanes = a, i;
    }
    function RA() {
      var e = wi(I, null, null, Ue);
      return e.elementType = "DELETED", e;
    }
    function _A(e) {
      var t = wi(rt, null, null, Ue);
      return t.stateNode = e, t;
    }
    function ME(e, t, a) {
      var i = e.children !== null ? e.children : [], l = wi(le, i, e.key, t);
      return l.lanes = a, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function kT(e, t) {
      return e === null && (e = wi(J, null, null, Ue)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function bA(e, t, a, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = hS, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Rn, this.eventTimes = Zs(de), this.expirationTimes = Zs(Tn), this.pendingLanes = de, this.suspendedLanes = de, this.pingedLanes = de, this.expiredLanes = de, this.mutableReadLanes = de, this.finishedLanes = de, this.entangledLanes = de, this.entanglements = Zs(de), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], v = 0; v < Ws; v++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case xm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Zu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function AT(e, t, a, i, l, s, v, y, E, b) {
      var C = new bA(e, t, a, y, E), j = yA(t, s);
      C.current = j, j.stateNode = C;
      {
        var z = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        j.memoizedState = z;
      }
      return GS(j), C;
    }
    var UE = "18.3.1";
    function TA(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Jn(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: ca,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var zE, VE;
    zE = !1, VE = {};
    function LT(e) {
      if (!e)
        return Ci;
      var t = Li(e), a = oN(t);
      if (t.tag === $) {
        var i = t.type;
        if (sl(i))
          return i_(t, i, a);
      }
      return a;
    }
    function CA(e, t) {
      {
        var a = Li(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var l = Bd(a);
        if (l === null)
          return null;
        if (l.mode & kn) {
          var s = xt(a) || "Component";
          if (!VE[s]) {
            VE[s] = !0;
            var v = jn;
            try {
              Fn(l), a.mode & kn ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              v ? Fn(v) : xn();
            }
          }
        }
        return l.stateNode;
      }
    }
    function OT(e, t, a, i, l, s, v, y) {
      var E = !1, b = null;
      return AT(e, t, E, b, a, i, l, s, v);
    }
    function MT(e, t, a, i, l, s, v, y, E, b) {
      var C = !0, j = AT(a, i, C, e, l, s, v, y, E);
      j.context = LT(null);
      var z = j.current, K = Ia(), X = ss(z), te = nu(K, X);
      return te.callback = t ?? null, ts(z, te, X), Lk(j, X, K), j;
    }
    function xv(e, t, a, i) {
      Cu(t, e);
      var l = t.current, s = Ia(), v = ss(l);
      sf(v);
      var y = LT(a);
      t.context === null ? t.context = y : t.pendingContext = y, pa && jn !== null && !zE && (zE = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, xt(jn) || "Unknown"));
      var E = nu(s, v);
      E.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), E.callback = i);
      var b = ts(l, E, v);
      return b !== null && (Mr(b, l, v, s), Bm(b, l, v)), v;
    }
    function Ay(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case I:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function wA(e) {
      switch (e.tag) {
        case Z: {
          var t = e.stateNode;
          if (Ge(t)) {
            var a = Vu(t);
            zk(t, a);
          }
          break;
        }
        case Ce: {
          ou(function() {
            var l = oi(e, lt);
            if (l !== null) {
              var s = Ia();
              Mr(l, e, lt, s);
            }
          });
          var i = lt;
          jE(e, i);
          break;
        }
      }
    }
    function UT(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = sp(a.retryLane, t));
    }
    function jE(e, t) {
      UT(e, t);
      var a = e.alternate;
      a && UT(a, t);
    }
    function xA(e) {
      if (e.tag === Ce) {
        var t = Mu, a = oi(e, t);
        if (a !== null) {
          var i = Ia();
          Mr(a, e, t, i);
        }
        jE(e, t);
      }
    }
    function NA(e) {
      if (e.tag === Ce) {
        var t = ss(e), a = oi(e, t);
        if (a !== null) {
          var i = Ia();
          Mr(a, e, t, i);
        }
        jE(e, t);
      }
    }
    function zT(e) {
      var t = Hd(e);
      return t === null ? null : t.stateNode;
    }
    var VT = function(e) {
      return null;
    };
    function DA(e) {
      return VT(e);
    }
    var jT = function(e) {
      return !1;
    };
    function kA(e) {
      return jT(e);
    }
    var FT = null, PT = null, $T = null, BT = null, IT = null, HT = null, WT = null, YT = null, GT = null;
    {
      var QT = function(e, t, a) {
        var i = t[a], l = tn(e) ? e.slice() : Mt({}, e);
        return a + 1 === t.length ? (tn(l) ? l.splice(i, 1) : delete l[i], l) : (l[i] = QT(e[i], t, a + 1), l);
      }, KT = function(e, t) {
        return QT(e, t, 0);
      }, qT = function(e, t, a, i) {
        var l = t[i], s = tn(e) ? e.slice() : Mt({}, e);
        if (i + 1 === t.length) {
          var v = a[i];
          s[v] = s[l], tn(s) ? s.splice(l, 1) : delete s[l];
        } else
          s[l] = qT(
            // $FlowFixMe number or string is fine here
            e[l],
            t,
            a,
            i + 1
          );
        return s;
      }, XT = function(e, t, a) {
        if (t.length !== a.length) {
          w("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              w("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return qT(e, t, a, 0);
      }, ZT = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var l = t[a], s = tn(e) ? e.slice() : Mt({}, e);
        return s[l] = ZT(e[l], t, a + 1, i), s;
      }, JT = function(e, t, a) {
        return ZT(e, t, 0, a);
      }, FE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      FT = function(e, t, a, i) {
        var l = FE(e, t);
        if (l !== null) {
          var s = JT(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = Mt({}, e.memoizedProps);
          var v = oi(e, lt);
          v !== null && Mr(v, e, lt, Tn);
        }
      }, PT = function(e, t, a) {
        var i = FE(e, t);
        if (i !== null) {
          var l = KT(i.memoizedState, a);
          i.memoizedState = l, i.baseState = l, e.memoizedProps = Mt({}, e.memoizedProps);
          var s = oi(e, lt);
          s !== null && Mr(s, e, lt, Tn);
        }
      }, $T = function(e, t, a, i) {
        var l = FE(e, t);
        if (l !== null) {
          var s = XT(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = Mt({}, e.memoizedProps);
          var v = oi(e, lt);
          v !== null && Mr(v, e, lt, Tn);
        }
      }, BT = function(e, t, a) {
        e.pendingProps = JT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = oi(e, lt);
        i !== null && Mr(i, e, lt, Tn);
      }, IT = function(e, t) {
        e.pendingProps = KT(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = oi(e, lt);
        a !== null && Mr(a, e, lt, Tn);
      }, HT = function(e, t, a) {
        e.pendingProps = XT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = oi(e, lt);
        i !== null && Mr(i, e, lt, Tn);
      }, WT = function(e) {
        var t = oi(e, lt);
        t !== null && Mr(t, e, lt, Tn);
      }, YT = function(e) {
        VT = e;
      }, GT = function(e) {
        jT = e;
      };
    }
    function AA(e) {
      var t = Bd(e);
      return t === null ? null : t.stateNode;
    }
    function LA(e) {
      return null;
    }
    function OA() {
      return jn;
    }
    function MA(e) {
      var t = e.findFiberByHostInstance, a = m.ReactCurrentDispatcher;
      return Yd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: FT,
        overrideHookStateDeletePath: PT,
        overrideHookStateRenamePath: $T,
        overrideProps: BT,
        overridePropsDeletePath: IT,
        overridePropsRenamePath: HT,
        setErrorHandler: YT,
        setSuspenseHandler: GT,
        scheduleUpdate: WT,
        currentDispatcherRef: a,
        findHostInstanceByFiber: AA,
        findFiberByHostInstance: t || LA,
        // React Refresh
        findHostInstancesForRefresh: cA,
        scheduleRefresh: uA,
        scheduleRoot: sA,
        setRefreshHandler: lA,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: OA,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: UE
      });
    }
    var eC = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function PE(e) {
      this._internalRoot = e;
    }
    Ly.prototype.render = PE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Oy(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== In) {
          var i = zT(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      xv(e, t, null, null);
    }, Ly.prototype.unmount = PE.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        dT() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), ou(function() {
          xv(null, e, null, null);
        }), e_(t);
      }
    };
    function UA(e, t) {
      if (!Oy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      tC(e);
      var a = !1, i = !1, l = "", s = eC;
      t != null && (t.hydrate ? w("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Yr && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var v = OT(e, xm, null, a, i, l, s);
      Em(v.current, e);
      var y = e.nodeType === In ? e.parentNode : e;
      return Op(y), new PE(v);
    }
    function Ly(e) {
      this._internalRoot = e;
    }
    function zA(e) {
      e && Cf(e);
    }
    Ly.prototype.unstable_scheduleHydration = zA;
    function VA(e, t, a) {
      if (!Oy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      tC(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, l = a != null && a.hydratedSources || null, s = !1, v = !1, y = "", E = eC;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (y = a.identifierPrefix), a.onRecoverableError !== void 0 && (E = a.onRecoverableError));
      var b = MT(t, null, e, xm, i, s, v, y, E);
      if (Em(b.current, e), Op(e), l)
        for (var C = 0; C < l.length; C++) {
          var j = l[C];
          $N(b, j);
        }
      return new Ly(b);
    }
    function Oy(e) {
      return !!(e && (e.nodeType === ha || e.nodeType === Da || e.nodeType === Cd || !P));
    }
    function Nv(e) {
      return !!(e && (e.nodeType === ha || e.nodeType === Da || e.nodeType === Cd || e.nodeType === In && e.nodeValue === " react-mount-point-unstable "));
    }
    function tC(e) {
      e.nodeType === ha && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Hp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var jA = m.ReactCurrentOwner, nC;
    nC = function(e) {
      if (e._reactRootContainer && e.nodeType !== In) {
        var t = zT(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = $E(e), l = !!(i && qu(i));
      l && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ha && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function $E(e) {
      return e ? e.nodeType === Da ? e.documentElement : e.firstChild : null;
    }
    function rC() {
    }
    function FA(e, t, a, i, l) {
      if (l) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var z = Ay(v);
            s.call(z);
          };
        }
        var v = MT(
          t,
          i,
          e,
          Zu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          rC
        );
        e._reactRootContainer = v, Em(v.current, e);
        var y = e.nodeType === In ? e.parentNode : e;
        return Op(y), ou(), v;
      } else {
        for (var E; E = e.lastChild; )
          e.removeChild(E);
        if (typeof i == "function") {
          var b = i;
          i = function() {
            var z = Ay(C);
            b.call(z);
          };
        }
        var C = OT(
          e,
          Zu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          rC
        );
        e._reactRootContainer = C, Em(C.current, e);
        var j = e.nodeType === In ? e.parentNode : e;
        return Op(j), ou(function() {
          xv(t, C, a, i);
        }), C;
      }
    }
    function PA(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function My(e, t, a, i, l) {
      nC(a), PA(l === void 0 ? null : l, "render");
      var s = a._reactRootContainer, v;
      if (!s)
        v = FA(a, t, e, l, i);
      else {
        if (v = s, typeof l == "function") {
          var y = l;
          l = function() {
            var E = Ay(v);
            y.call(E);
          };
        }
        xv(t, v, e, l);
      }
      return Ay(v);
    }
    var aC = !1;
    function $A(e) {
      {
        aC || (aC = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = jA.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Gt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ha ? e : CA(e, "findDOMNode");
    }
    function BA(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Nv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Hp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return My(null, e, t, !0, a);
    }
    function IA(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Nv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Hp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return My(null, e, t, !1, a);
    }
    function HA(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Nv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !_u(e))
        throw new Error("parentComponent must be a valid React Component");
      return My(e, t, a, !1, i);
    }
    var iC = !1;
    function WA(e) {
      if (iC || (iC = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Nv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Hp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = $E(e), i = a && !qu(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return ou(function() {
          My(null, null, e, !1, function() {
            e._reactRootContainer = null, e_(e);
          });
        }), !0;
      } else {
        {
          var l = $E(e), s = !!(l && qu(l)), v = e.nodeType === ha && Nv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", v ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    pp(wA), nc(xA), hp(NA), Ih(Xr), gp(jg), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Od(G1), Xc(gE, Vk, ou);
    function YA(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Oy(t))
        throw new Error("Target container is not a DOM element.");
      return TA(e, t, null, a);
    }
    function GA(e, t, a, i) {
      return HA(e, t, a, i);
    }
    var BE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [qu, $f, Rm, Ru, kl, gE]
    };
    function QA(e, t) {
      return BE.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), UA(e, t);
    }
    function KA(e, t, a) {
      return BE.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), VA(e, t, a);
    }
    function qA(e) {
      return dT() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), ou(e);
    }
    var XA = MA({
      findFiberByHostInstance: Sc,
      bundleType: 1,
      version: UE,
      rendererPackageName: "react-dom"
    });
    if (!XA && Kt && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var oC = window.location.protocol;
      /^(https?|file):$/.test(oC) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (oC === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    fi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = BE, fi.createPortal = YA, fi.createRoot = QA, fi.findDOMNode = $A, fi.flushSync = qA, fi.hydrate = BA, fi.hydrateRoot = KA, fi.render = IA, fi.unmountComponentAtNode = WA, fi.unstable_batchedUpdates = gE, fi.unstable_renderSubtreeIntoContainer = GA, fi.version = UE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), fi;
}
var gC;
function YC() {
  if (gC) return Vy.exports;
  gC = 1;
  var c = {};
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (c.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (d) {
        console.error(d);
      }
    }
  }
  return c.NODE_ENV === "production" ? (f(), Vy.exports = lL()) : Vy.exports = uL(), Vy.exports;
}
var SC;
function sL() {
  if (SC) return dd;
  SC = 1;
  var c = {}, f = YC();
  if (c.NODE_ENV === "production")
    dd.createRoot = f.createRoot, dd.hydrateRoot = f.hydrateRoot;
  else {
    var d = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    dd.createRoot = function(m, g) {
      d.usingClientEntryPoint = !0;
      try {
        return f.createRoot(m, g);
      } finally {
        d.usingClientEntryPoint = !1;
      }
    }, dd.hydrateRoot = function(m, g, T) {
      d.usingClientEntryPoint = !0;
      try {
        return f.hydrateRoot(m, g, T);
      } finally {
        d.usingClientEntryPoint = !1;
      }
    };
  }
  return dd;
}
var cL = sL();
const fL = ({ app: c, onSelectApp: f, isActive: d }) => {
  const m = () => {
    f(c);
  };
  return /* @__PURE__ */ re.jsx(
    "a",
    {
      href: "#",
      className: `block px-4 py-2 border-b border-gray-200 ${d ? "bg-secondary font-bold" : "hover:bg-gray-100"}`,
      onClick: (g) => {
        g.preventDefault(), m();
      },
      children: c.title || c.app_id || "New App"
    }
  );
}, dL = ({ apps: c, onSelectApp: f }) => {
  const [d, m] = sn.useState(null), g = (T) => {
    m(T.app_id), f(T);
  };
  return /* @__PURE__ */ re.jsxs("div", { className: "h-full", children: [
    c.length === 0 && /* @__PURE__ */ re.jsx("div", { className: "h-full flex justify-center items-center", children: /* @__PURE__ */ re.jsx("p", { className: "text-center text-gray-500", children: "No app was created yet" }) }),
    c.map((T) => /* @__PURE__ */ re.jsx(
      fL,
      {
        app: T,
        onSelectApp: g,
        isActive: T.app_id === d
      },
      T.app_id
    ))
  ] });
};
var pL = YC();
const vL = /* @__PURE__ */ HC(pL);
var Wt = {};
function hL(c) {
  const f = new Error(c);
  if (f.stack === void 0)
    try {
      throw f;
    } catch {
    }
  return f;
}
var mL = hL, zt = mL;
function yL(c) {
  return !!c && typeof c.then == "function";
}
var Ln = yL;
function gL(c, f) {
  if (c != null)
    return c;
  throw zt(f ?? "Got unexpected null or undefined");
}
var Qn = gL;
function Pt(c, f, d) {
  return f in c ? Object.defineProperty(c, f, {
    value: d,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : c[f] = d, c;
}
class Ky {
  getValue() {
    throw zt("BaseLoadable");
  }
  toPromise() {
    throw zt("BaseLoadable");
  }
  valueMaybe() {
    throw zt("BaseLoadable");
  }
  valueOrThrow() {
    throw zt(`Loadable expected value, but in "${this.state}" state`);
  }
  promiseMaybe() {
    throw zt("BaseLoadable");
  }
  promiseOrThrow() {
    throw zt(`Loadable expected promise, but in "${this.state}" state`);
  }
  errorMaybe() {
    throw zt("BaseLoadable");
  }
  errorOrThrow() {
    throw zt(`Loadable expected error, but in "${this.state}" state`);
  }
  is(f) {
    return f.state === this.state && f.contents === this.contents;
  }
  map(f) {
    throw zt("BaseLoadable");
  }
}
class SL extends Ky {
  constructor(f) {
    super(), Pt(this, "state", "hasValue"), Pt(this, "contents", void 0), this.contents = f;
  }
  getValue() {
    return this.contents;
  }
  toPromise() {
    return Promise.resolve(this.contents);
  }
  valueMaybe() {
    return this.contents;
  }
  valueOrThrow() {
    return this.contents;
  }
  promiseMaybe() {
  }
  errorMaybe() {
  }
  map(f) {
    try {
      const d = f(this.contents);
      return Ln(d) ? zc(d) : hd(d) ? d : Bv(d);
    } catch (d) {
      return Ln(d) ? (
        // If we "suspended", then try again.
        // errors and subsequent retries will be handled in 'loading' case
        // $FlowFixMe[prop-missing]
        zc(d.next(() => this.map(f)))
      ) : qy(d);
    }
  }
}
class EL extends Ky {
  constructor(f) {
    super(), Pt(this, "state", "hasError"), Pt(this, "contents", void 0), this.contents = f;
  }
  getValue() {
    throw this.contents;
  }
  toPromise() {
    return Promise.reject(this.contents);
  }
  valueMaybe() {
  }
  promiseMaybe() {
  }
  errorMaybe() {
    return this.contents;
  }
  errorOrThrow() {
    return this.contents;
  }
  map(f) {
    return this;
  }
}
class GC extends Ky {
  constructor(f) {
    super(), Pt(this, "state", "loading"), Pt(this, "contents", void 0), this.contents = f;
  }
  getValue() {
    throw this.contents;
  }
  toPromise() {
    return this.contents;
  }
  valueMaybe() {
  }
  promiseMaybe() {
    return this.contents;
  }
  promiseOrThrow() {
    return this.contents;
  }
  errorMaybe() {
  }
  map(f) {
    return zc(this.contents.then((d) => {
      const m = f(d);
      if (hd(m)) {
        const g = m;
        switch (g.state) {
          case "hasValue":
            return g.contents;
          case "hasError":
            throw g.contents;
          case "loading":
            return g.contents;
        }
      }
      return m;
    }).catch((d) => {
      if (Ln(d))
        return d.then(() => this.map(f).contents);
      throw d;
    }));
  }
}
function Bv(c) {
  return Object.freeze(new SL(c));
}
function qy(c) {
  return Object.freeze(new EL(c));
}
function zc(c) {
  return Object.freeze(new GC(c));
}
function QC() {
  return Object.freeze(new GC(new Promise(() => {
  })));
}
function RL(c) {
  return c.every((f) => f.state === "hasValue") ? Bv(c.map((f) => f.contents)) : c.some((f) => f.state === "hasError") ? qy(Qn(c.find((f) => f.state === "hasError"), "Invalid loadable passed to loadableAll").contents) : zc(Promise.all(c.map((f) => f.contents)));
}
function KC(c) {
  const d = (Array.isArray(c) ? c : Object.getOwnPropertyNames(c).map((g) => c[g])).map((g) => hd(g) ? g : Ln(g) ? zc(g) : Bv(g)), m = RL(d);
  return Array.isArray(c) ? (
    // $FlowIssue[incompatible-return]
    m
  ) : (
    // Object.getOwnPropertyNames() has consistent key ordering with ES6
    // $FlowIssue[incompatible-call]
    m.map((g) => Object.getOwnPropertyNames(c).reduce(
      // $FlowFixMe[invalid-computed-prop]
      (T, w, S) => ({
        ...T,
        [w]: g[S]
      }),
      {}
    ))
  );
}
function hd(c) {
  return c instanceof Ky;
}
const _L = {
  of: (c) => Ln(c) ? zc(c) : hd(c) ? c : Bv(c),
  error: (c) => qy(c),
  // $FlowIssue[incompatible-return]
  loading: () => QC(),
  // $FlowIssue[unclear-type]
  all: KC,
  isLoadable: hd
};
var Fc = {
  loadableWithValue: Bv,
  loadableWithError: qy,
  loadableWithPromise: zc,
  loadableLoading: QC,
  loadableAll: KC,
  isLoadable: hd,
  RecoilLoadable: _L
}, bL = Fc.loadableWithValue, TL = Fc.loadableWithError, CL = Fc.loadableWithPromise, wL = Fc.loadableLoading, xL = Fc.loadableAll, NL = Fc.isLoadable, DL = Fc.RecoilLoadable, Iv = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  loadableWithValue: bL,
  loadableWithError: TL,
  loadableWithPromise: CL,
  loadableLoading: wL,
  loadableAll: xL,
  isLoadable: NL,
  RecoilLoadable: DL
});
const eR = {
  RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED: !0,
  // Note: RECOIL_GKS_ENABLED settings will only be honored in OSS builds of Recoil
  RECOIL_GKS_ENABLED: /* @__PURE__ */ new Set(["recoil_hamt_2020", "recoil_sync_external_store", "recoil_suppress_rerender_in_callback", "recoil_memory_managament_2020"])
};
function kL(c, f) {
  var d, m;
  const g = (d = Wt[c]) === null || d === void 0 || (m = d.toLowerCase()) === null || m === void 0 ? void 0 : m.trim();
  if (g == null || g === "")
    return;
  if (!["true", "false"].includes(g))
    throw zt(`process.env.${c} value must be 'true', 'false', or empty: ${g}`);
  f(g === "true");
}
function AL(c, f) {
  var d;
  const m = (d = Wt[c]) === null || d === void 0 ? void 0 : d.trim();
  m == null || m === "" || f(m.split(/\s*,\s*|\s+/));
}
function LL() {
  var c;
  typeof process > "u" || ((c = process) === null || c === void 0 ? void 0 : c.env) != null && (kL("RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED", (f) => {
    eR.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = f;
  }), AL("RECOIL_GKS_ENABLED", (f) => {
    f.forEach((d) => {
      eR.RECOIL_GKS_ENABLED.add(d);
    });
  }));
}
LL();
var Sd = eR;
function Xy(c) {
  return Sd.RECOIL_GKS_ENABLED.has(c);
}
Xy.setPass = (c) => {
  Sd.RECOIL_GKS_ENABLED.add(c);
};
Xy.setFail = (c) => {
  Sd.RECOIL_GKS_ENABLED.delete(c);
};
Xy.clear = () => {
  Sd.RECOIL_GKS_ENABLED.clear();
};
var On = Xy;
function OL(c, f, {
  error: d
} = {}) {
  return Wt.NODE_ENV !== "production" && console.error(c, d), null;
}
var ML = OL, Pr = ML, WE, YE, GE;
const UL = (
  // flowlint-next-line unclear-type:off
  (WE = Kn.createMutableSource) !== null && WE !== void 0 ? WE : Kn.unstable_createMutableSource
), qC = (
  // flowlint-next-line unclear-type:off
  (YE = Kn.useMutableSource) !== null && YE !== void 0 ? YE : Kn.unstable_useMutableSource
), cR = (
  // flowlint-next-line unclear-type:off
  (GE = Kn.useSyncExternalStore) !== null && GE !== void 0 ? GE : (
    // flowlint-next-line unclear-type:off
    Kn.unstable_useSyncExternalStore
  )
);
let EC = !1;
function zL() {
  var c;
  const {
    ReactCurrentDispatcher: f,
    ReactCurrentOwner: d
  } = (
    /* $FlowFixMe[prop-missing] This workaround was approved as a safer mechanism
     * to detect if the current renderer supports useSyncExternalStore()
     * https://fb.workplace.com/groups/reactjs/posts/9558682330846963/ */
    Kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  ), g = ((c = f == null ? void 0 : f.current) !== null && c !== void 0 ? c : d.currentDispatcher).useSyncExternalStore != null;
  return cR && !g && !EC && (EC = !0, Pr("A React renderer without React 18+ API support is being used with React 18+.")), g;
}
function VL() {
  return On("recoil_transition_support") ? {
    mode: "TRANSITION_SUPPORT",
    early: !0,
    concurrent: !0
  } : On("recoil_sync_external_store") && cR != null ? {
    mode: "SYNC_EXTERNAL_STORE",
    early: !0,
    concurrent: !1
  } : On("recoil_mutable_source") && qC != null && typeof window < "u" && !window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE ? On("recoil_suppress_rerender_in_callback") ? {
    mode: "MUTABLE_SOURCE",
    early: !0,
    concurrent: !0
  } : {
    mode: "MUTABLE_SOURCE",
    early: !1,
    concurrent: !1
  } : On("recoil_suppress_rerender_in_callback") ? {
    mode: "LEGACY",
    early: !0,
    concurrent: !1
  } : {
    mode: "LEGACY",
    early: !1,
    concurrent: !1
  };
}
function jL() {
  return !1;
}
var Ed = {
  createMutableSource: UL,
  useMutableSource: qC,
  useSyncExternalStore: cR,
  currentRendererSupportsUseSyncExternalStore: zL,
  reactMode: VL,
  isFastRefreshEnabled: jL
};
class fR {
  constructor(f) {
    Pt(this, "key", void 0), this.key = f;
  }
  toJSON() {
    return {
      key: this.key
    };
  }
}
class XC extends fR {
}
class ZC extends fR {
}
function FL(c) {
  return c instanceof XC || c instanceof ZC;
}
var Zy = {
  AbstractRecoilValue: fR,
  RecoilState: XC,
  RecoilValueReadOnly: ZC,
  isRecoilValue: FL
}, PL = Zy.AbstractRecoilValue, $L = Zy.RecoilState, BL = Zy.RecoilValueReadOnly, IL = Zy.isRecoilValue, Vc = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  AbstractRecoilValue: PL,
  RecoilState: $L,
  RecoilValueReadOnly: BL,
  isRecoilValue: IL
});
function HL(c, ...f) {
  let d = 0;
  return c.replace(/%s/g, () => String(f[d++]));
}
var WL = HL;
function YL(c, ...f) {
  if (Wt.NODE_ENV !== "production") {
    const d = WL.call(null, c, ...f), m = new Error(d);
    m.name = "Expectation Violation", console.error(m);
  }
}
var GL = YL, Jy = GL;
function QL(c, f) {
  return function* () {
    let d = 0;
    for (const m of c)
      yield f(m, d++);
  }();
}
var eg = QL;
const {
  isFastRefreshEnabled: KL
} = Ed;
class JC {
}
const qL = new JC(), jc = /* @__PURE__ */ new Map(), dR = /* @__PURE__ */ new Map();
function XL(c) {
  return eg(c, (f) => Qn(dR.get(f)));
}
function ZL(c) {
  if (jc.has(c)) {
    const f = `Duplicate atom key "${c}". This is a FATAL ERROR in
      production. But it is safe to ignore this warning if it occurred because of
      hot module replacement.`;
    Wt.NODE_ENV !== "production" ? KL() || Jy(f, "recoil") : console.warn(f);
  }
}
function JL(c) {
  Sd.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED && ZL(c.key), jc.set(c.key, c);
  const f = c.set == null ? new Vc.RecoilValueReadOnly(c.key) : new Vc.RecoilState(c.key);
  return dR.set(c.key, f), f;
}
class ew extends Error {
}
function eO(c) {
  const f = jc.get(c);
  if (f == null)
    throw new ew(`Missing definition for RecoilValue: "${c}""`);
  return f;
}
function tO(c) {
  return jc.get(c);
}
const Wy = /* @__PURE__ */ new Map();
function nO(c) {
  var f;
  if (!On("recoil_memory_managament_2020"))
    return;
  const d = jc.get(c);
  if (d != null && (f = d.shouldDeleteConfigOnRelease) !== null && f !== void 0 && f.call(d)) {
    var m;
    jc.delete(c), (m = tw(c)) === null || m === void 0 || m(), Wy.delete(c);
  }
}
function rO(c, f) {
  On("recoil_memory_managament_2020") && (f === void 0 ? Wy.delete(c) : Wy.set(c, f));
}
function tw(c) {
  return Wy.get(c);
}
var pi = {
  nodes: jc,
  recoilValues: dR,
  registerNode: JL,
  getNode: eO,
  getNodeMaybe: tO,
  deleteNodeConfigIfPossible: nO,
  setConfigDeletionHandler: rO,
  getConfigDeletionHandler: tw,
  recoilValuesForKeys: XL,
  NodeMissingError: ew,
  DefaultValue: JC,
  DEFAULT_VALUE: qL
};
function aO(c, f) {
  f();
}
var iO = {
  enqueueExecution: aO
};
function oO(c, f) {
  return f = { exports: {} }, c(f, f.exports), f.exports;
}
var lO = oO(function(c) {
  var f = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(F) {
    return typeof F;
  } : function(F) {
    return F && typeof Symbol == "function" && F.constructor === Symbol && F !== Symbol.prototype ? "symbol" : typeof F;
  }, d = {}, m = 5, g = Math.pow(2, m), T = g - 1, w = g / 2, S = g / 4, U = {}, M = function(O) {
    return function() {
      return O;
    };
  }, $ = d.hash = function(F) {
    var O = typeof F > "u" ? "undefined" : f(F);
    if (O === "number") return F;
    O !== "string" && (F += "");
    for (var ue = 0, ge = 0, be = F.length; ge < be; ++ge) {
      var _e = F.charCodeAt(ge);
      ue = (ue << 5) - ue + _e | 0;
    }
    return ue;
  }, J = function(O) {
    return O -= O >> 1 & 1431655765, O = (O & 858993459) + (O >> 2 & 858993459), O = O + (O >> 4) & 252645135, O += O >> 8, O += O >> 16, O & 127;
  }, Z = function(O, ue) {
    return ue >>> O & T;
  }, le = function(O) {
    return 1 << O;
  }, I = function(O, ue) {
    return J(O & ue - 1);
  }, ae = function(O, ue, ge, be) {
    var _e = be;
    if (!O) {
      var Xe = be.length;
      _e = new Array(Xe);
      for (var Oe = 0; Oe < Xe; ++Oe)
        _e[Oe] = be[Oe];
    }
    return _e[ue] = ge, _e;
  }, Pe = function(O, ue, ge) {
    var be = ge.length - 1, _e = 0, Xe = 0, Oe = ge;
    if (O)
      _e = Xe = ue;
    else
      for (Oe = new Array(be); _e < ue; )
        Oe[Xe++] = ge[_e++];
    for (++_e; _e <= be; )
      Oe[Xe++] = ge[_e++];
    return O && (Oe.length = be), Oe;
  }, wt = function(O, ue, ge, be) {
    var _e = be.length;
    if (O) {
      for (var Xe = _e; Xe >= ue; )
        be[Xe--] = be[Xe];
      return be[ue] = ge, be;
    }
    for (var Oe = 0, Ve = 0, bt = new Array(_e + 1); Oe < ue; )
      bt[Ve++] = be[Oe++];
    for (bt[ue] = ge; Oe < _e; )
      bt[++Ve] = be[Oe++];
    return bt;
  }, De = 1, Te = 2, ve = 3, Ke = 4, Ce = {
    __hamt_isEmpty: !0
  }, qe = function(O) {
    return O === Ce || O && O.__hamt_isEmpty;
  }, Re = function(O, ue, ge, be) {
    return {
      type: De,
      edit: O,
      hash: ue,
      key: ge,
      value: be,
      _modify: ie
    };
  }, nt = function(O, ue, ge) {
    return {
      type: Te,
      edit: O,
      hash: ue,
      children: ge,
      _modify: ze
    };
  }, Be = function(O, ue, ge) {
    return {
      type: ve,
      edit: O,
      mask: ue,
      children: ge,
      _modify: fe
    };
  }, rt = function(O, ue, ge) {
    return {
      type: Ke,
      edit: O,
      size: ue,
      children: ge,
      _modify: A
    };
  }, _t = function(O) {
    return O === Ce || O.type === De || O.type === Te;
  }, pt = function(O, ue, ge, be, _e) {
    for (var Xe = [], Oe = be, Ve = 0, bt = 0; Oe; ++bt)
      Oe & 1 && (Xe[bt] = _e[Ve++]), Oe >>>= 1;
    return Xe[ue] = ge, rt(O, Ve + 1, Xe);
  }, Ie = function(O, ue, ge, be) {
    for (var _e = new Array(ue - 1), Xe = 0, Oe = 0, Ve = 0, bt = be.length; Ve < bt; ++Ve)
      if (Ve !== ge) {
        var It = be[Ve];
        It && !qe(It) && (_e[Xe++] = It, Oe |= 1 << Ve);
      }
    return Be(O, Oe, _e);
  }, ct = function F(O, ue, ge, be, _e, Xe) {
    if (ge === _e) return nt(O, ge, [Xe, be]);
    var Oe = Z(ue, ge), Ve = Z(ue, _e);
    return Be(O, le(Oe) | le(Ve), Oe === Ve ? [F(O, ue + m, ge, be, _e, Xe)] : Oe < Ve ? [be, Xe] : [Xe, be]);
  }, St = function(O, ue, ge, be, _e, Xe, Oe, Ve) {
    for (var bt = _e.length, It = 0; It < bt; ++It) {
      var Vn = _e[It];
      if (ge(Oe, Vn.key)) {
        var bn = Vn.value, tr = Xe(bn);
        return tr === bn ? _e : tr === U ? (--Ve.value, Pe(O, It, _e)) : ae(O, It, Re(ue, be, Oe, tr), _e);
      }
    }
    var nr = Xe();
    return nr === U ? _e : (++Ve.value, ae(O, bt, Re(ue, be, Oe, nr), _e));
  }, ft = function(O, ue) {
    return O === ue.edit;
  }, ie = function(O, ue, ge, be, _e, Xe, Oe) {
    if (ue(Xe, this.key)) {
      var Ve = be(this.value);
      return Ve === this.value ? this : Ve === U ? (--Oe.value, Ce) : ft(O, this) ? (this.value = Ve, this) : Re(O, _e, Xe, Ve);
    }
    var bt = be();
    return bt === U ? this : (++Oe.value, ct(O, ge, this.hash, this, _e, Re(O, _e, Xe, bt)));
  }, ze = function(O, ue, ge, be, _e, Xe, Oe) {
    if (_e === this.hash) {
      var Ve = ft(O, this), bt = St(Ve, O, ue, this.hash, this.children, be, Xe, Oe);
      return bt === this.children ? this : bt.length > 1 ? nt(O, this.hash, bt) : bt[0];
    }
    var It = be();
    return It === U ? this : (++Oe.value, ct(O, ge, this.hash, this, _e, Re(O, _e, Xe, It)));
  }, fe = function(O, ue, ge, be, _e, Xe, Oe) {
    var Ve = this.mask, bt = this.children, It = Z(ge, _e), Vn = le(It), bn = I(Ve, Vn), tr = Ve & Vn, nr = tr ? bt[bn] : Ce, pr = nr._modify(O, ue, ge + m, be, _e, Xe, Oe);
    if (nr === pr) return this;
    var zr = ft(O, this), vr = Ve, Wr = void 0;
    if (tr && qe(pr)) {
      if (vr &= ~Vn, !vr) return Ce;
      if (bt.length <= 2 && _t(bt[bn ^ 1])) return bt[bn ^ 1];
      Wr = Pe(zr, bn, bt);
    } else if (!tr && !qe(pr)) {
      if (bt.length >= w) return pt(O, It, pr, Ve, bt);
      vr |= Vn, Wr = wt(zr, bn, pr, bt);
    } else
      Wr = ae(zr, bn, pr, bt);
    return zr ? (this.mask = vr, this.children = Wr, this) : Be(O, vr, Wr);
  }, A = function(O, ue, ge, be, _e, Xe, Oe) {
    var Ve = this.size, bt = this.children, It = Z(ge, _e), Vn = bt[It], bn = (Vn || Ce)._modify(O, ue, ge + m, be, _e, Xe, Oe);
    if (Vn === bn) return this;
    var tr = ft(O, this), nr = void 0;
    if (qe(Vn) && !qe(bn))
      ++Ve, nr = ae(tr, It, bn, bt);
    else if (!qe(Vn) && qe(bn)) {
      if (--Ve, Ve <= S) return Ie(O, Ve, It, bt);
      nr = ae(tr, It, Ce, bt);
    } else
      nr = ae(tr, It, bn, bt);
    return tr ? (this.size = Ve, this.children = nr, this) : rt(O, Ve, nr);
  };
  Ce._modify = function(F, O, ue, ge, be, _e, Xe) {
    var Oe = ge();
    return Oe === U ? Ce : (++Xe.value, Re(F, be, _e, Oe));
  };
  function x(F, O, ue, ge, be) {
    this._editable = F, this._edit = O, this._config = ue, this._root = ge, this._size = be;
  }
  x.prototype.setTree = function(F, O) {
    return this._editable ? (this._root = F, this._size = O, this) : F === this._root ? this : new x(this._editable, this._edit, this._config, F, O);
  };
  var P = d.tryGetHash = function(F, O, ue, ge) {
    for (var be = ge._root, _e = 0, Xe = ge._config.keyEq; ; )
      switch (be.type) {
        case De:
          return Xe(ue, be.key) ? be.value : F;
        case Te: {
          if (O === be.hash)
            for (var Oe = be.children, Ve = 0, bt = Oe.length; Ve < bt; ++Ve) {
              var It = Oe[Ve];
              if (Xe(ue, It.key)) return It.value;
            }
          return F;
        }
        case ve: {
          var Vn = Z(_e, O), bn = le(Vn);
          if (be.mask & bn) {
            be = be.children[I(be.mask, bn)], _e += m;
            break;
          }
          return F;
        }
        case Ke: {
          if (be = be.children[Z(_e, O)], be) {
            _e += m;
            break;
          }
          return F;
        }
        default:
          return F;
      }
  };
  x.prototype.tryGetHash = function(F, O, ue) {
    return P(F, O, ue, this);
  };
  var Y = d.tryGet = function(F, O, ue) {
    return P(F, ue._config.hash(O), O, ue);
  };
  x.prototype.tryGet = function(F, O) {
    return Y(F, O, this);
  };
  var ce = d.getHash = function(F, O, ue) {
    return P(void 0, F, O, ue);
  };
  x.prototype.getHash = function(F, O) {
    return ce(F, O, this);
  }, d.get = function(F, O) {
    return P(void 0, O._config.hash(F), F, O);
  }, x.prototype.get = function(F, O) {
    return Y(O, F, this);
  };
  var se = d.has = function(F, O, ue) {
    return P(U, F, O, ue) !== U;
  };
  x.prototype.hasHash = function(F, O) {
    return se(F, O, this);
  };
  var ke = d.has = function(F, O) {
    return se(O._config.hash(F), F, O);
  };
  x.prototype.has = function(F) {
    return ke(F, this);
  };
  var Ae = function(O, ue) {
    return O === ue;
  };
  d.make = function(F) {
    return new x(0, 0, {
      keyEq: F && F.keyEq || Ae,
      hash: F && F.hash || $
    }, Ce, 0);
  }, d.empty = d.make();
  var Ne = d.isEmpty = function(F) {
    return F && !!qe(F._root);
  };
  x.prototype.isEmpty = function() {
    return Ne(this);
  };
  var vt = d.modifyHash = function(F, O, ue, ge) {
    var be = {
      value: ge._size
    }, _e = ge._root._modify(ge._editable ? ge._edit : NaN, ge._config.keyEq, 0, F, O, ue, be);
    return ge.setTree(_e, be.value);
  };
  x.prototype.modifyHash = function(F, O, ue) {
    return vt(ue, F, O, this);
  };
  var Bt = d.modify = function(F, O, ue) {
    return vt(F, ue._config.hash(O), O, ue);
  };
  x.prototype.modify = function(F, O) {
    return Bt(O, F, this);
  };
  var Lt = d.setHash = function(F, O, ue, ge) {
    return vt(M(ue), F, O, ge);
  };
  x.prototype.setHash = function(F, O, ue) {
    return Lt(F, O, ue, this);
  };
  var Ft = d.set = function(F, O, ue) {
    return Lt(ue._config.hash(F), F, O, ue);
  };
  x.prototype.set = function(F, O) {
    return Ft(F, O, this);
  };
  var Kt = M(U), wn = d.removeHash = function(F, O, ue) {
    return vt(Kt, F, O, ue);
  };
  x.prototype.removeHash = x.prototype.deleteHash = function(F, O) {
    return wn(F, O, this);
  };
  var en = d.remove = function(F, O) {
    return wn(O._config.hash(F), F, O);
  };
  x.prototype.remove = x.prototype.delete = function(F) {
    return en(F, this);
  };
  var qt = d.beginMutation = function(F) {
    return new x(F._editable + 1, F._edit + 1, F._config, F._root, F._size);
  };
  x.prototype.beginMutation = function() {
    return qt(this);
  };
  var zn = d.endMutation = function(F) {
    return F._editable = F._editable && F._editable - 1, F;
  };
  x.prototype.endMutation = function() {
    return zn(this);
  };
  var Er = d.mutate = function(F, O) {
    var ue = qt(O);
    return F(ue), zn(ue);
  };
  x.prototype.mutate = function(F) {
    return Er(F, this);
  };
  var Jn = function(O) {
    return O && Bn(O[0], O[1], O[2], O[3], O[4]);
  }, Bn = function(O, ue, ge, be, _e) {
    for (; ge < O; ) {
      var Xe = ue[ge++];
      if (Xe && !qe(Xe)) return Ur(Xe, be, [O, ue, ge, be, _e]);
    }
    return Jn(_e);
  }, Ur = function(O, ue, ge) {
    switch (O.type) {
      case De:
        return {
          value: ue(O),
          rest: ge
        };
      case Te:
      case Ke:
      case ve:
        var be = O.children;
        return Bn(be.length, be, 0, ue, ge);
      default:
        return Jn(ge);
    }
  }, $r = {
    done: !0
  };
  function er(F) {
    this.v = F;
  }
  er.prototype.next = function() {
    if (!this.v) return $r;
    var F = this.v;
    return this.v = Jn(F.rest), F;
  }, er.prototype[Symbol.iterator] = function() {
    return this;
  };
  var Rr = function(O, ue) {
    return new er(Ur(O._root, ue));
  }, sr = function(O) {
    return [O.key, O.value];
  }, _r = d.entries = function(F) {
    return Rr(F, sr);
  };
  x.prototype.entries = x.prototype[Symbol.iterator] = function() {
    return _r(this);
  };
  var _n = function(O) {
    return O.key;
  }, Br = d.keys = function(F) {
    return Rr(F, _n);
  };
  x.prototype.keys = function() {
    return Br(this);
  };
  var Ir = function(O) {
    return O.value;
  }, Hr = d.values = x.prototype.values = function(F) {
    return Rr(F, Ir);
  };
  x.prototype.values = function() {
    return Hr(this);
  };
  var Le = d.fold = function(F, O, ue) {
    var ge = ue._root;
    if (ge.type === De) return F(O, ge.value, ge.key);
    for (var be = [ge.children], _e = void 0; _e = be.pop(); )
      for (var Xe = 0, Oe = _e.length; Xe < Oe; ) {
        var Ve = _e[Xe++];
        Ve && Ve.type && (Ve.type === De ? O = F(O, Ve.value, Ve.key) : be.push(Ve.children));
      }
    return O;
  };
  x.prototype.fold = function(F, O) {
    return Le(F, O, this);
  };
  var at = d.forEach = function(F, O) {
    return Le(function(ue, ge, be) {
      return F(ge, be, O);
    }, null, O);
  };
  x.prototype.forEach = function(F) {
    return at(F, this);
  };
  var Ot = d.count = function(F) {
    return F._size;
  };
  x.prototype.count = function() {
    return Ot(this);
  }, Object.defineProperty(x.prototype, "size", {
    get: x.prototype.count
  }), c.exports ? c.exports = d : (void 0).hamt = d;
});
class uO {
  constructor(f) {
    Pt(this, "_map", void 0), this._map = new Map(f == null ? void 0 : f.entries());
  }
  keys() {
    return this._map.keys();
  }
  entries() {
    return this._map.entries();
  }
  get(f) {
    return this._map.get(f);
  }
  has(f) {
    return this._map.has(f);
  }
  set(f, d) {
    return this._map.set(f, d), this;
  }
  delete(f) {
    return this._map.delete(f), this;
  }
  clone() {
    return vR(this);
  }
  toMap() {
    return new Map(this._map);
  }
}
class pR {
  // Because hamt.empty is not a function there is no way to introduce type
  // parameters on it, so empty is typed as HAMTPlusMap<string, mixed>.
  // $FlowIssue
  constructor(f) {
    if (Pt(this, "_hamt", lO.empty.beginMutation()), f instanceof pR) {
      const d = f._hamt.endMutation();
      f._hamt = d.beginMutation(), this._hamt = d.beginMutation();
    } else if (f)
      for (const [d, m] of f.entries())
        this._hamt.set(d, m);
  }
  keys() {
    return this._hamt.keys();
  }
  entries() {
    return this._hamt.entries();
  }
  get(f) {
    return this._hamt.get(f);
  }
  has(f) {
    return this._hamt.has(f);
  }
  set(f, d) {
    return this._hamt.set(f, d), this;
  }
  delete(f) {
    return this._hamt.delete(f), this;
  }
  clone() {
    return vR(this);
  }
  toMap() {
    return new Map(this._hamt);
  }
}
function vR(c) {
  return On("recoil_hamt_2020") ? new pR(c) : new uO(c);
}
var sO = {
  persistentMap: vR
}, cO = sO.persistentMap, fO = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  persistentMap: cO
});
function dO(c, ...f) {
  const d = /* @__PURE__ */ new Set();
  e: for (const m of c) {
    for (const g of f)
      if (g.has(m))
        continue e;
    d.add(m);
  }
  return d;
}
var jv = dO;
function pO(c, f) {
  const d = /* @__PURE__ */ new Map();
  return c.forEach((m, g) => {
    d.set(g, f(m, g));
  }), d;
}
var Yy = pO;
function vO() {
  return {
    nodeDeps: /* @__PURE__ */ new Map(),
    nodeToNodeSubscriptions: /* @__PURE__ */ new Map()
  };
}
function hO(c) {
  return {
    nodeDeps: Yy(c.nodeDeps, (f) => new Set(f)),
    nodeToNodeSubscriptions: Yy(c.nodeToNodeSubscriptions, (f) => new Set(f))
  };
}
function QE(c, f, d, m) {
  const {
    nodeDeps: g,
    nodeToNodeSubscriptions: T
  } = d, w = g.get(c);
  if (w && m && w !== m.nodeDeps.get(c))
    return;
  g.set(c, f);
  const S = w == null ? f : jv(f, w);
  for (const U of S)
    T.has(U) || T.set(U, /* @__PURE__ */ new Set()), Qn(T.get(U)).add(c);
  if (w) {
    const U = jv(w, f);
    for (const M of U) {
      if (!T.has(M))
        return;
      const $ = Qn(T.get(M));
      $.delete(c), $.size === 0 && T.delete(M);
    }
  }
}
function mO(c, f, d, m) {
  var g, T, w, S;
  const U = d.getState();
  m === U.currentTree.version || m === ((g = U.nextTree) === null || g === void 0 ? void 0 : g.version) || m === ((T = U.previousTree) === null || T === void 0 ? void 0 : T.version) || Pr("Tried to save dependencies to a discarded tree");
  const M = d.getGraph(m);
  if (QE(c, f, M), m === ((w = U.previousTree) === null || w === void 0 ? void 0 : w.version)) {
    const J = d.getGraph(U.currentTree.version);
    QE(c, f, J, M);
  }
  if (m === ((S = U.previousTree) === null || S === void 0 ? void 0 : S.version) || m === U.currentTree.version) {
    var $;
    const J = ($ = U.nextTree) === null || $ === void 0 ? void 0 : $.version;
    if (J !== void 0) {
      const Z = d.getGraph(J);
      QE(c, f, Z, M);
    }
  }
}
var Hv = {
  cloneGraph: hO,
  graph: vO,
  saveDepsToStore: mO
};
let yO = 0;
const gO = () => yO++;
let SO = 0;
const EO = () => SO++;
let RO = 0;
const _O = () => RO++;
var tg = {
  getNextTreeStateVersion: gO,
  getNextStoreID: EO,
  getNextComponentID: _O
};
const {
  persistentMap: RC
} = fO, {
  graph: bO
} = Hv, {
  getNextTreeStateVersion: nw
} = tg;
function rw() {
  const c = nw();
  return {
    version: c,
    stateID: c,
    transactionMetadata: {},
    dirtyAtoms: /* @__PURE__ */ new Set(),
    atomValues: RC(),
    nonvalidatedAtoms: RC()
  };
}
function TO() {
  const c = rw();
  return {
    currentTree: c,
    nextTree: null,
    previousTree: null,
    commitDepth: 0,
    knownAtoms: /* @__PURE__ */ new Set(),
    knownSelectors: /* @__PURE__ */ new Set(),
    transactionSubscriptions: /* @__PURE__ */ new Map(),
    nodeTransactionSubscriptions: /* @__PURE__ */ new Map(),
    nodeToComponentSubscriptions: /* @__PURE__ */ new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: /* @__PURE__ */ new Set(),
    graphsByVersion: (/* @__PURE__ */ new Map()).set(c.version, bO()),
    retention: {
      referenceCounts: /* @__PURE__ */ new Map(),
      nodesRetainedByZone: /* @__PURE__ */ new Map(),
      retainablesToCheckForRelease: /* @__PURE__ */ new Set()
    },
    nodeCleanupFunctions: /* @__PURE__ */ new Map()
  };
}
var aw = {
  makeEmptyTreeState: rw,
  makeEmptyStoreState: TO,
  getNextTreeStateVersion: nw
};
class iw {
}
function CO() {
  return new iw();
}
var ng = {
  RetentionZone: iw,
  retentionZone: CO
};
function wO(c, f) {
  const d = new Set(c);
  return d.add(f), d;
}
function xO(c, f) {
  const d = new Set(c);
  return d.delete(f), d;
}
function NO(c, f, d) {
  const m = new Map(c);
  return m.set(f, d), m;
}
function DO(c, f, d) {
  const m = new Map(c);
  return m.set(f, d(m.get(f))), m;
}
function kO(c, f) {
  const d = new Map(c);
  return d.delete(f), d;
}
function AO(c, f) {
  const d = new Map(c);
  return f.forEach((m) => d.delete(m)), d;
}
var ow = {
  setByAddingToSet: wO,
  setByDeletingFromSet: xO,
  mapBySettingInMap: NO,
  mapByUpdatingInMap: DO,
  mapByDeletingFromMap: kO,
  mapByDeletingMultipleFromMap: AO
};
function* LO(c, f) {
  let d = 0;
  for (const m of c)
    f(m, d++) && (yield m);
}
var hR = LO;
function OO(c, f) {
  return new Proxy(c, {
    // Compute and cache lazy property if not already done.
    get: (m, g) => (!(g in m) && g in f && (m[g] = f[g]()), m[g]),
    // This method allows user to iterate keys as normal
    ownKeys: (m) => Object.keys(m)
  });
}
var lw = OO;
const {
  getNode: Wv,
  getNodeMaybe: MO,
  recoilValuesForKeys: _C
} = pi, {
  RetentionZone: bC
} = ng, {
  setByAddingToSet: UO
} = ow, zO = Object.freeze(/* @__PURE__ */ new Set());
class VO extends Error {
}
function jO(c, f, d) {
  if (!On("recoil_memory_managament_2020"))
    return () => {
    };
  const {
    nodesRetainedByZone: m
  } = c.getState().retention;
  function g(T) {
    let w = m.get(T);
    w || m.set(T, w = /* @__PURE__ */ new Set()), w.add(f);
  }
  if (d instanceof bC)
    g(d);
  else if (Array.isArray(d))
    for (const T of d)
      g(T);
  return () => {
    if (!On("recoil_memory_managament_2020"))
      return;
    const {
      retention: T
    } = c.getState();
    function w(S) {
      const U = T.nodesRetainedByZone.get(S);
      U == null || U.delete(f), U && U.size === 0 && T.nodesRetainedByZone.delete(S);
    }
    if (d instanceof bC)
      w(d);
    else if (Array.isArray(d))
      for (const S of d)
        w(S);
  };
}
function mR(c, f, d, m) {
  const g = c.getState();
  if (g.nodeCleanupFunctions.has(d))
    return;
  const T = Wv(d), w = jO(c, d, T.retainedBy), S = T.init(c, f, m);
  g.nodeCleanupFunctions.set(d, () => {
    S(), w();
  });
}
function FO(c, f, d) {
  mR(c, c.getState().currentTree, f, d);
}
function PO(c, f) {
  var d;
  const m = c.getState();
  (d = m.nodeCleanupFunctions.get(f)) === null || d === void 0 || d(), m.nodeCleanupFunctions.delete(f);
}
function $O(c, f, d) {
  return mR(c, f, d, "get"), Wv(d).get(c, f);
}
function uw(c, f, d) {
  return Wv(d).peek(c, f);
}
function BO(c, f, d) {
  var m;
  const g = MO(f);
  return g == null || (m = g.invalidate) === null || m === void 0 || m.call(g, c), {
    ...c,
    atomValues: c.atomValues.clone().delete(f),
    nonvalidatedAtoms: c.nonvalidatedAtoms.clone().set(f, d),
    dirtyAtoms: UO(c.dirtyAtoms, f)
  };
}
function IO(c, f, d, m) {
  const g = Wv(d);
  if (g.set == null)
    throw new VO(`Attempt to set read-only RecoilValue: ${d}`);
  const T = g.set;
  return mR(c, f, d, "set"), T(c, f, m);
}
function HO(c, f, d) {
  const m = c.getState(), g = c.getGraph(f.version), T = Wv(d).nodeType;
  return lw({
    type: T
  }, {
    // $FlowFixMe[underconstrained-implicit-instantiation]
    loadable: () => uw(c, f, d),
    isActive: () => m.knownAtoms.has(d) || m.knownSelectors.has(d),
    isSet: () => T === "selector" ? !1 : f.atomValues.has(d),
    isModified: () => f.dirtyAtoms.has(d),
    // Report current dependencies.  If the node hasn't been evaluated, then
    // dependencies may be missing based on the current state.
    deps: () => {
      var w;
      return _C((w = g.nodeDeps.get(d)) !== null && w !== void 0 ? w : []);
    },
    // Reports all "current" subscribers.  Evaluating other nodes or
    // previous in-progress async evaluations may introduce new subscribers.
    subscribers: () => {
      var w, S;
      return {
        nodes: _C(hR(sw(c, f, /* @__PURE__ */ new Set([d])), (U) => U !== d)),
        components: eg((w = (S = m.nodeToComponentSubscriptions.get(d)) === null || S === void 0 ? void 0 : S.values()) !== null && w !== void 0 ? w : [], ([U]) => ({
          name: U
        }))
      };
    }
  });
}
function sw(c, f, d) {
  const m = /* @__PURE__ */ new Set(), g = Array.from(d), T = c.getGraph(f.version);
  for (let S = g.pop(); S; S = g.pop()) {
    var w;
    m.add(S);
    const U = (w = T.nodeToNodeSubscriptions.get(S)) !== null && w !== void 0 ? w : zO;
    for (const M of U)
      m.has(M) || g.push(M);
  }
  return m;
}
var ps = {
  getNodeLoadable: $O,
  peekNodeLoadable: uw,
  setNodeValue: IO,
  initializeNode: FO,
  cleanUpNode: PO,
  setUnvalidatedAtomValue_DEPRECATED: BO,
  peekNodeInfo: HO,
  getDownstreamNodes: sw
};
let cw = null;
function WO(c) {
  cw = c;
}
function YO() {
  var c;
  (c = cw) === null || c === void 0 || c();
}
var fw = {
  setInvalidateMemoizedSnapshot: WO,
  invalidateMemoizedSnapshot: YO
};
const {
  getDownstreamNodes: GO,
  getNodeLoadable: dw,
  setNodeValue: QO
} = ps, {
  getNextComponentID: KO
} = tg, {
  getNode: qO,
  getNodeMaybe: pw
} = pi, {
  DefaultValue: yR
} = pi, {
  reactMode: XO
} = Ed, {
  AbstractRecoilValue: ZO,
  RecoilState: JO,
  RecoilValueReadOnly: eM,
  isRecoilValue: tM
} = Vc, {
  invalidateMemoizedSnapshot: nM
} = fw;
function rM(c, {
  key: f
}, d = c.getState().currentTree) {
  var m, g;
  const T = c.getState();
  d.version === T.currentTree.version || d.version === ((m = T.nextTree) === null || m === void 0 ? void 0 : m.version) || d.version === ((g = T.previousTree) === null || g === void 0 ? void 0 : g.version) || Pr("Tried to read from a discarded tree");
  const w = dw(c, d, f);
  return w.state === "loading" && w.contents.catch(() => {
  }), w;
}
function aM(c, f) {
  const d = c.clone();
  return f.forEach((m, g) => {
    m.state === "hasValue" && m.contents instanceof yR ? d.delete(g) : d.set(g, m);
  }), d;
}
function iM(c, f, {
  key: d
}, m) {
  if (typeof m == "function") {
    const g = dw(c, f, d);
    if (g.state === "loading") {
      const T = `Tried to set atom or selector "${d}" using an updater function while the current state is pending, this is not currently supported.`;
      throw Pr(T), zt(T);
    } else if (g.state === "hasError")
      throw g.contents;
    return m(g.contents);
  } else
    return m;
}
function oM(c, f, d) {
  if (d.type === "set") {
    const {
      recoilValue: g,
      valueOrUpdater: T
    } = d, w = iM(c, f, g, T), S = QO(c, f, g.key, w);
    for (const [U, M] of S.entries())
      tR(f, U, M);
  } else if (d.type === "setLoadable") {
    const {
      recoilValue: {
        key: g
      },
      loadable: T
    } = d;
    tR(f, g, T);
  } else if (d.type === "markModified") {
    const {
      recoilValue: {
        key: g
      }
    } = d;
    f.dirtyAtoms.add(g);
  } else if (d.type === "setUnvalidated") {
    var m;
    const {
      recoilValue: {
        key: g
      },
      unvalidatedValue: T
    } = d, w = pw(g);
    w == null || (m = w.invalidate) === null || m === void 0 || m.call(w, f), f.atomValues.delete(g), f.nonvalidatedAtoms.set(g, T), f.dirtyAtoms.add(g);
  } else
    Pr(`Unknown action ${d.type}`);
}
function tR(c, f, d) {
  d.state === "hasValue" && d.contents instanceof yR ? c.atomValues.delete(f) : c.atomValues.set(f, d), c.dirtyAtoms.add(f), c.nonvalidatedAtoms.delete(f);
}
function vw(c, f) {
  c.replaceState((d) => {
    const m = hw(d);
    for (const g of f)
      oM(c, m, g);
    return mw(c, m), nM(), m;
  });
}
function rg(c, f) {
  if (Fv.length) {
    const d = Fv[Fv.length - 1];
    let m = d.get(c);
    m || d.set(c, m = []), m.push(f);
  } else
    vw(c, [f]);
}
const Fv = [];
function lM() {
  const c = /* @__PURE__ */ new Map();
  return Fv.push(c), () => {
    for (const [d, m] of c)
      vw(d, m);
    Fv.pop() !== c && Pr("Incorrect order of batch popping");
  };
}
function hw(c) {
  return {
    ...c,
    atomValues: c.atomValues.clone(),
    nonvalidatedAtoms: c.nonvalidatedAtoms.clone(),
    dirtyAtoms: new Set(c.dirtyAtoms)
  };
}
function mw(c, f) {
  const d = GO(c, f, f.dirtyAtoms);
  for (const T of d) {
    var m, g;
    (m = pw(T)) === null || m === void 0 || (g = m.invalidate) === null || g === void 0 || g.call(m, f);
  }
}
function yw(c, f, d) {
  rg(c, {
    type: "set",
    recoilValue: f,
    valueOrUpdater: d
  });
}
function uM(c, f, d) {
  if (d instanceof yR)
    return yw(c, f, d);
  rg(c, {
    type: "setLoadable",
    recoilValue: f,
    loadable: d
  });
}
function sM(c, f) {
  rg(c, {
    type: "markModified",
    recoilValue: f
  });
}
function cM(c, f, d) {
  rg(c, {
    type: "setUnvalidated",
    recoilValue: f,
    unvalidatedValue: d
  });
}
function fM(c, {
  key: f
}, d, m = null) {
  const g = KO(), T = c.getState();
  T.nodeToComponentSubscriptions.has(f) || T.nodeToComponentSubscriptions.set(f, /* @__PURE__ */ new Map()), Qn(T.nodeToComponentSubscriptions.get(f)).set(g, [m ?? "<not captured>", d]);
  const w = XO();
  if (w.early && (w.mode === "LEGACY" || w.mode === "MUTABLE_SOURCE")) {
    const S = c.getState().nextTree;
    S && S.dirtyAtoms.has(f) && d(S);
  }
  return {
    release: () => {
      const S = c.getState(), U = S.nodeToComponentSubscriptions.get(f);
      if (U === void 0 || !U.has(g)) {
        Pr(`Subscription missing at release time for atom ${f}. This is a bug in Recoil.`);
        return;
      }
      U.delete(g), U.size === 0 && S.nodeToComponentSubscriptions.delete(f);
    }
  };
}
function dM(c, f) {
  var d;
  const {
    currentTree: m
  } = c.getState(), g = qO(f.key);
  (d = g.clearCache) === null || d === void 0 || d.call(g, c, m);
}
var Sl = {
  RecoilValueReadOnly: eM,
  AbstractRecoilValue: ZO,
  RecoilState: JO,
  getRecoilValueAsLoadable: rM,
  setRecoilValue: yw,
  setRecoilValueLoadable: uM,
  markRecoilValueModified: sM,
  setUnvalidatedRecoilValue: cM,
  subscribeToRecoilValue: fM,
  isRecoilValue: tM,
  applyAtomValueWrites: aM,
  // TODO Remove export when deprecating initialStoreState_DEPRECATED in RecoilRoot
  batchStart: lM,
  writeLoadableToTreeState: tR,
  invalidateDownstreams: mw,
  copyTreeState: hw,
  refreshRecoilValue: dM
};
function pM(c, f, d) {
  const m = c.entries();
  let g = m.next();
  for (; !g.done; ) {
    const T = g.value;
    if (f.call(d, T[1], T[0], c))
      return !0;
    g = m.next();
  }
  return !1;
}
var vM = pM;
const {
  cleanUpNode: hM
} = ps, {
  deleteNodeConfigIfPossible: mM,
  getNode: gw
} = pi, {
  RetentionZone: Sw
} = ng, yM = 12e4, Ew = /* @__PURE__ */ new Set();
function Rw(c, f) {
  const d = c.getState(), m = d.currentTree;
  if (d.nextTree) {
    Pr("releaseNodesNowOnCurrentTree should only be called at the end of a batch");
    return;
  }
  const g = /* @__PURE__ */ new Set();
  for (const w of f)
    if (w instanceof Sw)
      for (const S of RM(d, w))
        g.add(S);
    else
      g.add(w);
  const T = gM(c, g);
  for (const w of T)
    EM(c, m, w);
}
function gM(c, f) {
  const d = c.getState(), m = d.currentTree, g = c.getGraph(m.version), T = /* @__PURE__ */ new Set(), w = /* @__PURE__ */ new Set();
  return S(f), T;
  function S(U) {
    const M = /* @__PURE__ */ new Set(), $ = SM(
      c,
      m,
      U,
      T,
      // don't descend into these
      w
      // don't descend into these
    );
    for (const I of $) {
      var J;
      if (gw(I).retainedBy === "recoilRoot") {
        w.add(I);
        continue;
      }
      if (((J = d.retention.referenceCounts.get(I)) !== null && J !== void 0 ? J : 0) > 0) {
        w.add(I);
        continue;
      }
      if (_w(I).some((Pe) => d.retention.referenceCounts.get(Pe))) {
        w.add(I);
        continue;
      }
      const ae = g.nodeToNodeSubscriptions.get(I);
      if (ae && vM(ae, (Pe) => w.has(Pe))) {
        w.add(I);
        continue;
      }
      T.add(I), M.add(I);
    }
    const Z = /* @__PURE__ */ new Set();
    for (const I of M)
      for (const ae of (le = g.nodeDeps.get(I)) !== null && le !== void 0 ? le : Ew) {
        var le;
        T.has(ae) || Z.add(ae);
      }
    Z.size && S(Z);
  }
}
function SM(c, f, d, m, g) {
  const T = c.getGraph(f.version), w = [], S = /* @__PURE__ */ new Set();
  for (; d.size > 0; )
    U(Qn(d.values().next().value));
  return w;
  function U(M) {
    if (m.has(M) || g.has(M)) {
      d.delete(M);
      return;
    }
    if (S.has(M))
      return;
    const $ = T.nodeToNodeSubscriptions.get(M);
    if ($)
      for (const J of $)
        U(J);
    S.add(M), d.delete(M), w.push(M);
  }
}
function EM(c, f, d) {
  if (!On("recoil_memory_managament_2020"))
    return;
  hM(c, d);
  const m = c.getState();
  m.knownAtoms.delete(d), m.knownSelectors.delete(d), m.nodeTransactionSubscriptions.delete(d), m.retention.referenceCounts.delete(d);
  const g = _w(d);
  for (const U of g) {
    var T;
    (T = m.retention.nodesRetainedByZone.get(U)) === null || T === void 0 || T.delete(d);
  }
  f.atomValues.delete(d), f.dirtyAtoms.delete(d), f.nonvalidatedAtoms.delete(d);
  const w = m.graphsByVersion.get(f.version);
  if (w) {
    const U = w.nodeDeps.get(d);
    if (U !== void 0) {
      w.nodeDeps.delete(d);
      for (const M of U) {
        var S;
        (S = w.nodeToNodeSubscriptions.get(M)) === null || S === void 0 || S.delete(d);
      }
    }
    w.nodeToNodeSubscriptions.delete(d);
  }
  mM(d);
}
function RM(c, f) {
  var d;
  return (d = c.retention.nodesRetainedByZone.get(f)) !== null && d !== void 0 ? d : Ew;
}
function _w(c) {
  const f = gw(c).retainedBy;
  return f === void 0 || f === "components" || f === "recoilRoot" ? [] : f instanceof Sw ? [f] : f;
}
function _M(c, f) {
  const d = c.getState();
  d.nextTree ? d.retention.retainablesToCheckForRelease.add(f) : Rw(c, /* @__PURE__ */ new Set([f]));
}
function bM(c, f, d) {
  var m;
  if (!On("recoil_memory_managament_2020"))
    return;
  const g = c.getState().retention.referenceCounts, T = ((m = g.get(f)) !== null && m !== void 0 ? m : 0) + d;
  T === 0 ? bw(c, f) : g.set(f, T);
}
function bw(c, f) {
  if (!On("recoil_memory_managament_2020"))
    return;
  c.getState().retention.referenceCounts.delete(f), _M(c, f);
}
function TM(c) {
  if (!On("recoil_memory_managament_2020"))
    return;
  const f = c.getState();
  Rw(c, f.retention.retainablesToCheckForRelease), f.retention.retainablesToCheckForRelease.clear();
}
function CM(c) {
  return c === void 0 ? "recoilRoot" : c;
}
var Pc = {
  SUSPENSE_TIMEOUT_MS: yM,
  updateRetainCount: bM,
  updateRetainCountToZero: bw,
  releaseScheduledRetainablesNow: TM,
  retainedByOptionWithDefault: CM
};
const {
  unstable_batchedUpdates: wM
} = vL;
var xM = {
  unstable_batchedUpdates: wM
};
const {
  unstable_batchedUpdates: NM
} = xM;
var DM = {
  unstable_batchedUpdates: NM
};
const {
  batchStart: kM
} = Sl, {
  unstable_batchedUpdates: AM
} = DM;
let gR = AM || ((c) => c());
const LM = (c) => {
  gR = c;
}, OM = () => gR, MM = (c) => {
  gR(() => {
    let f = () => {
    };
    try {
      f = kM(), c();
    } finally {
      f();
    }
  });
};
var ag = {
  getBatcher: OM,
  setBatcher: LM,
  batchUpdates: MM
};
function* UM(c) {
  for (const f of c)
    for (const d of f)
      yield d;
}
var Tw = UM;
const Cw = (
  // $FlowFixMe(site=recoil) Window does not have a FlowType definition https://github.com/facebook/flow/issues/6709
  typeof Window > "u" || typeof window > "u"
), zM = (c) => !Cw && // $FlowFixMe(site=recoil) Window does not have a FlowType definition https://github.com/facebook/flow/issues/6709
(c === window || c instanceof Window), VM = typeof navigator < "u" && navigator.product === "ReactNative";
var Yv = {
  isSSR: Cw,
  isReactNative: VM,
  isWindow: zM
};
function jM(c, f) {
  let d;
  return (...m) => {
    d || (d = {});
    const g = f(...m);
    return Object.hasOwnProperty.call(d, g) || (d[g] = c(...m)), d[g];
  };
}
function FM(c, f) {
  let d, m;
  return (...g) => {
    const T = f(...g);
    return d === T || (d = T, m = c(...g)), m;
  };
}
function PM(c, f) {
  let d, m;
  return [(...w) => {
    const S = f(...w);
    return d === S || (d = S, m = c(...w)), m;
  }, () => {
    d = null;
  }];
}
var $M = {
  memoizeWithArgsHash: jM,
  memoizeOneWithArgsHash: FM,
  memoizeOneWithArgsHashAndInvalidation: PM
};
const {
  batchUpdates: nR
} = ag, {
  initializeNode: BM,
  peekNodeInfo: IM
} = ps, {
  graph: HM
} = Hv, {
  getNextStoreID: WM
} = tg, {
  DEFAULT_VALUE: YM,
  recoilValues: TC,
  recoilValuesForKeys: CC
} = pi, {
  AbstractRecoilValue: GM,
  getRecoilValueAsLoadable: QM,
  setRecoilValue: wC,
  setUnvalidatedRecoilValue: KM
} = Sl, {
  updateRetainCount: Hy
} = Pc, {
  setInvalidateMemoizedSnapshot: qM
} = fw, {
  getNextTreeStateVersion: XM,
  makeEmptyStoreState: ZM
} = aw, {
  isSSR: JM
} = Yv, {
  memoizeOneWithArgsHashAndInvalidation: eU
} = $M, tU = `
Recoil Snapshots only last for the duration of the callback they are provided to. To keep a Snapshot longer, do this:

  const release = snapshot.retain();
  try {
    await doSomethingWithSnapshot(snapshot);
  } finally {
    release();
  }

This is currently a DEV-only warning but will become a thrown exception in the next release of Recoil.
`;
class ig {
  // eslint-disable-next-line fb-www/no-uninitialized-properties
  constructor(f, d) {
    Pt(this, "_store", void 0), Pt(this, "_refCount", 1), Pt(this, "getLoadable", (m) => (this.checkRefCount_INTERNAL(), QM(this._store, m))), Pt(this, "getPromise", (m) => (this.checkRefCount_INTERNAL(), this.getLoadable(m).toPromise())), Pt(this, "getNodes_UNSTABLE", (m) => {
      if (this.checkRefCount_INTERNAL(), (m == null ? void 0 : m.isModified) === !0) {
        if ((m == null ? void 0 : m.isInitialized) === !1)
          return [];
        const w = this._store.getState().currentTree;
        return CC(w.dirtyAtoms);
      }
      const g = this._store.getState().knownAtoms, T = this._store.getState().knownSelectors;
      return (m == null ? void 0 : m.isInitialized) == null ? TC.values() : m.isInitialized === !0 ? CC(Tw([g, T])) : hR(TC.values(), ({
        key: w
      }) => !g.has(w) && !T.has(w));
    }), Pt(this, "getInfo_UNSTABLE", ({
      key: m
    }) => (this.checkRefCount_INTERNAL(), IM(this._store, this._store.getState().currentTree, m))), Pt(this, "map", (m) => {
      this.checkRefCount_INTERNAL();
      const g = new rR(this, nR);
      return m(g), g;
    }), Pt(this, "asyncMap", async (m) => {
      this.checkRefCount_INTERNAL();
      const g = new rR(this, nR);
      return g.retain(), await m(g), g.autoRelease_INTERNAL(), g;
    }), this._store = {
      storeID: WM(),
      parentStoreID: d,
      getState: () => f,
      replaceState: (m) => {
        f.currentTree = m(f.currentTree);
      },
      getGraph: (m) => {
        const g = f.graphsByVersion;
        if (g.has(m))
          return Qn(g.get(m));
        const T = HM();
        return g.set(m, T), T;
      },
      subscribeToTransactions: () => ({
        release: () => {
        }
      }),
      addTransactionMetadata: () => {
        throw zt("Cannot subscribe to Snapshots");
      }
    };
    for (const m of this._store.getState().knownAtoms)
      BM(this._store, m, "get"), Hy(this._store, m, 1);
    this.autoRelease_INTERNAL();
  }
  retain() {
    if (this._refCount <= 0) {
      if (Wt.NODE_ENV !== "production")
        throw zt("Snapshot has already been released.");
      Pr("Attempt to retain() Snapshot that was already released.");
    }
    this._refCount++;
    let f = !1;
    return () => {
      f || (f = !0, this._release());
    };
  }
  /**
   * Release the snapshot on the next tick.  This means the snapshot is retained
   * during the execution of the current function using it.
   */
  autoRelease_INTERNAL() {
    JM || window.setTimeout(() => this._release(), 10);
  }
  _release() {
    if (this._refCount--, this._refCount === 0) {
      if (this._store.getState().nodeCleanupFunctions.forEach((f) => f()), this._store.getState().nodeCleanupFunctions.clear(), !On("recoil_memory_managament_2020"))
        return;
    } else this._refCount < 0 && Wt.NODE_ENV !== "production" && Pr("Snapshot released an extra time.");
  }
  isRetained() {
    return this._refCount > 0;
  }
  checkRefCount_INTERNAL() {
    On("recoil_memory_managament_2020") && this._refCount <= 0 && Wt.NODE_ENV !== "production" && Pr(tU);
  }
  getStore_INTERNAL() {
    return this.checkRefCount_INTERNAL(), this._store;
  }
  getID() {
    return this.checkRefCount_INTERNAL(), this._store.getState().currentTree.stateID;
  }
  getStoreID() {
    return this.checkRefCount_INTERNAL(), this._store.storeID;
  }
  // We want to allow the methods to be destructured and used as accessors
  /* eslint-disable fb-www/extra-arrow-initializer */
  /* eslint-enable fb-www/extra-arrow-initializer */
}
function ww(c, f, d = !1) {
  const m = c.getState(), g = d ? XM() : f.version;
  return {
    // Always clone the TreeState to isolate stores from accidental mutations.
    // For example, reading a selector from a cloned snapshot shouldn't cache
    // in the original treestate which may cause the original to skip
    // initialization of upstream atoms.
    currentTree: {
      // TODO snapshots shouldn't really have versions because a new version number
      // is always assigned when the snapshot is gone to.
      version: d ? g : f.version,
      stateID: d ? g : f.stateID,
      transactionMetadata: {
        ...f.transactionMetadata
      },
      dirtyAtoms: new Set(f.dirtyAtoms),
      atomValues: f.atomValues.clone(),
      nonvalidatedAtoms: f.nonvalidatedAtoms.clone()
    },
    commitDepth: 0,
    nextTree: null,
    previousTree: null,
    knownAtoms: new Set(m.knownAtoms),
    // FIXME here's a copy
    knownSelectors: new Set(m.knownSelectors),
    // FIXME here's a copy
    transactionSubscriptions: /* @__PURE__ */ new Map(),
    nodeTransactionSubscriptions: /* @__PURE__ */ new Map(),
    nodeToComponentSubscriptions: /* @__PURE__ */ new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: /* @__PURE__ */ new Set(),
    graphsByVersion: (/* @__PURE__ */ new Map()).set(g, c.getGraph(f.version)),
    retention: {
      referenceCounts: /* @__PURE__ */ new Map(),
      nodesRetainedByZone: /* @__PURE__ */ new Map(),
      retainablesToCheckForRelease: /* @__PURE__ */ new Set()
    },
    // FIXME here's a copy
    // Create blank cleanup handlers for atoms so snapshots don't re-run
    // atom effects.
    nodeCleanupFunctions: new Map(eg(m.nodeCleanupFunctions.entries(), ([T]) => [T, () => {
    }]))
  };
}
function nU(c) {
  const f = new ig(ZM());
  return c != null ? f.map(c) : f;
}
const [xC, xw] = eU(
  // $FlowFixMe[missing-local-annot]
  (c, f) => {
    var d;
    const m = c.getState(), g = f === "latest" ? (d = m.nextTree) !== null && d !== void 0 ? d : m.currentTree : Qn(m.previousTree);
    return new ig(ww(c, g), c.storeID);
  },
  (c, f) => {
    var d, m;
    return String(f) + String(c.storeID) + String((d = c.getState().nextTree) === null || d === void 0 ? void 0 : d.version) + String(c.getState().currentTree.version) + String((m = c.getState().previousTree) === null || m === void 0 ? void 0 : m.version);
  }
);
qM(xw);
function rU(c, f = "latest") {
  const d = xC(c, f);
  return d.isRetained() ? d : (xw(), xC(c, f));
}
class rR extends ig {
  constructor(f, d) {
    super(ww(f.getStore_INTERNAL(), f.getStore_INTERNAL().getState().currentTree, !0), f.getStoreID()), Pt(this, "_batch", void 0), Pt(this, "set", (m, g) => {
      this.checkRefCount_INTERNAL();
      const T = this.getStore_INTERNAL();
      this._batch(() => {
        Hy(T, m.key, 1), wC(this.getStore_INTERNAL(), m, g);
      });
    }), Pt(this, "reset", (m) => {
      this.checkRefCount_INTERNAL();
      const g = this.getStore_INTERNAL();
      this._batch(() => {
        Hy(g, m.key, 1), wC(this.getStore_INTERNAL(), m, YM);
      });
    }), Pt(this, "setUnvalidatedAtomValues_DEPRECATED", (m) => {
      this.checkRefCount_INTERNAL();
      const g = this.getStore_INTERNAL();
      nR(() => {
        for (const [T, w] of m.entries())
          Hy(g, T, 1), KM(g, new GM(T), w);
      });
    }), this._batch = d;
  }
}
var og = {
  Snapshot: ig,
  MutableSnapshot: rR,
  freshSnapshot: nU,
  cloneSnapshot: rU
}, aU = og.Snapshot, iU = og.MutableSnapshot, oU = og.freshSnapshot, lU = og.cloneSnapshot, lg = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Snapshot: aU,
  MutableSnapshot: iU,
  freshSnapshot: oU,
  cloneSnapshot: lU
});
function uU(...c) {
  const f = /* @__PURE__ */ new Set();
  for (const d of c)
    for (const m of d)
      f.add(m);
  return f;
}
var sU = uU;
const {
  useRef: cU
} = Kn;
function fU(c) {
  const f = cU(c);
  return f.current === c && typeof c == "function" && (f.current = c()), f;
}
var NC = fU;
const {
  getNextTreeStateVersion: dU,
  makeEmptyStoreState: Nw
} = aw, {
  cleanUpNode: pU,
  getDownstreamNodes: vU,
  initializeNode: hU,
  setNodeValue: mU,
  setUnvalidatedAtomValue_DEPRECATED: yU
} = ps, {
  graph: gU
} = Hv, {
  cloneGraph: SU
} = Hv, {
  getNextStoreID: Dw
} = tg, {
  createMutableSource: KE,
  reactMode: kw
} = Ed, {
  applyAtomValueWrites: EU
} = Sl, {
  releaseScheduledRetainablesNow: Aw
} = Pc, {
  freshSnapshot: RU
} = lg, {
  useCallback: _U,
  useContext: Lw,
  useEffect: aR,
  useMemo: bU,
  useRef: TU,
  useState: CU
} = Kn;
function Lv() {
  throw zt("This component must be used inside a <RecoilRoot> component.");
}
const Ow = Object.freeze({
  storeID: Dw(),
  getState: Lv,
  replaceState: Lv,
  getGraph: Lv,
  subscribeToTransactions: Lv,
  addTransactionMetadata: Lv
});
let iR = !1;
function DC(c) {
  if (iR)
    throw zt("An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions.");
  const f = c.getState();
  if (f.nextTree === null) {
    On("recoil_memory_managament_2020") && On("recoil_release_on_cascading_update_killswitch_2021") && f.commitDepth > 0 && Aw(c);
    const d = f.currentTree.version, m = dU();
    f.nextTree = {
      ...f.currentTree,
      version: m,
      stateID: m,
      dirtyAtoms: /* @__PURE__ */ new Set(),
      transactionMetadata: {}
    }, f.graphsByVersion.set(m, SU(Qn(f.graphsByVersion.get(d))));
  }
}
const Mw = Kn.createContext({
  current: Ow
}), ug = () => Lw(Mw), Uw = Kn.createContext(null);
function wU() {
  const c = Lw(Uw);
  return c == null && Jy("Attempted to use a Recoil hook outside of a <RecoilRoot>. <RecoilRoot> must be an ancestor of any component that uses Recoil hooks."), c;
}
function SR(c, f, d) {
  const m = vU(c, d, d.dirtyAtoms);
  for (const g of m) {
    const T = f.nodeToComponentSubscriptions.get(g);
    if (T)
      for (const [w, [S, U]] of T)
        U(d);
  }
}
function zw(c) {
  const f = c.getState(), d = f.currentTree, m = d.dirtyAtoms;
  if (m.size) {
    for (const [g, T] of f.nodeTransactionSubscriptions)
      if (m.has(g))
        for (const [w, S] of T)
          S(c);
    for (const [g, T] of f.transactionSubscriptions)
      T(c);
    (!kw().early || f.suspendedComponentResolvers.size > 0) && (SR(c, f, d), f.suspendedComponentResolvers.forEach((g) => g()), f.suspendedComponentResolvers.clear());
  }
  f.queuedComponentCallbacks_DEPRECATED.forEach((g) => g(d)), f.queuedComponentCallbacks_DEPRECATED.splice(0, f.queuedComponentCallbacks_DEPRECATED.length);
}
function xU(c) {
  const f = c.getState();
  f.commitDepth++;
  try {
    const {
      nextTree: d
    } = f;
    if (d == null)
      return;
    f.previousTree = f.currentTree, f.currentTree = d, f.nextTree = null, zw(c), f.previousTree != null ? f.graphsByVersion.delete(f.previousTree.version) : Pr("Ended batch with no previous state, which is unexpected", "recoil"), f.previousTree = null, On("recoil_memory_managament_2020") && d == null && Aw(c);
  } finally {
    f.commitDepth--;
  }
}
function NU({
  setNotifyBatcherOfChange: c
}) {
  const f = ug(), [, d] = CU([]);
  return c(() => d({})), aR(() => (c(() => d({})), () => {
    c(() => {
    });
  }), [c]), aR(() => {
    iO.enqueueExecution("Batcher", () => {
      xU(f.current);
    });
  }), null;
}
Wt.NODE_ENV !== "production" && typeof window < "u" && !window.$recoilDebugStates && (window.$recoilDebugStates = []);
function DU(c, f) {
  const d = Nw();
  return f({
    set: (m, g) => {
      const T = d.currentTree, w = mU(c, T, m.key, g), S = new Set(w.keys()), U = T.nonvalidatedAtoms.clone();
      for (const M of S)
        U.delete(M);
      d.currentTree = {
        ...T,
        dirtyAtoms: sU(T.dirtyAtoms, S),
        atomValues: EU(T.atomValues, w),
        // NB: PLEASE un-export applyAtomValueWrites when deleting this code
        nonvalidatedAtoms: U
      };
    },
    setUnvalidatedAtomValues: (m) => {
      m.forEach((g, T) => {
        d.currentTree = yU(d.currentTree, T, g);
      });
    }
  }), d;
}
function kU(c) {
  const f = RU(c), d = f.getStore_INTERNAL().getState();
  return f.retain(), d.nodeCleanupFunctions.forEach((m) => m()), d.nodeCleanupFunctions.clear(), d;
}
let kC = 0;
function AU({
  initializeState_DEPRECATED: c,
  initializeState: f,
  store_INTERNAL: d,
  // For use with React "context bridging"
  children: m
}) {
  let g;
  const T = (le) => {
    const I = g.current.graphsByVersion;
    if (I.has(le))
      return Qn(I.get(le));
    const ae = gU();
    return I.set(le, ae), ae;
  }, w = (le, I) => {
    if (I == null) {
      const {
        transactionSubscriptions: ae
      } = J.current.getState(), Pe = kC++;
      return ae.set(Pe, le), {
        release: () => {
          ae.delete(Pe);
        }
      };
    } else {
      const {
        nodeTransactionSubscriptions: ae
      } = J.current.getState();
      ae.has(I) || ae.set(I, /* @__PURE__ */ new Map());
      const Pe = kC++;
      return Qn(ae.get(I)).set(Pe, le), {
        release: () => {
          const wt = ae.get(I);
          wt && (wt.delete(Pe), wt.size === 0 && ae.delete(I));
        }
      };
    }
  }, S = (le) => {
    DC(J.current);
    for (const I of Object.keys(le))
      Qn(J.current.getState().nextTree).transactionMetadata[I] = le[I];
  }, U = (le) => {
    DC(J.current);
    const I = Qn(g.current.nextTree);
    let ae;
    try {
      iR = !0, ae = le(I);
    } finally {
      iR = !1;
    }
    ae !== I && (Wt.NODE_ENV !== "production" && typeof window < "u" && window.$recoilDebugStates.push(ae), g.current.nextTree = ae, kw().early && SR(J.current, g.current, ae), Qn(M.current)());
  }, M = TU(null), $ = _U((le) => {
    M.current = le;
  }, [M]), J = NC(() => d ?? {
    storeID: Dw(),
    getState: () => g.current,
    replaceState: U,
    getGraph: T,
    subscribeToTransactions: w,
    addTransactionMetadata: S
  });
  d != null && (J.current = d), g = NC(() => c != null ? DU(J.current, c) : f != null ? kU(f) : Nw());
  const Z = bU(() => KE == null ? void 0 : KE(g, () => g.current.currentTree.version), [g]);
  return aR(() => {
    const le = J.current;
    for (const I of new Set(le.getState().knownAtoms))
      hU(le, I, "get");
    return () => {
      for (const I of le.getState().knownAtoms)
        pU(le, I);
    };
  }, [J]), /* @__PURE__ */ Kn.createElement(Mw.Provider, {
    value: J
  }, /* @__PURE__ */ Kn.createElement(Uw.Provider, {
    value: Z
  }, /* @__PURE__ */ Kn.createElement(NU, {
    setNotifyBatcherOfChange: $
  }), m));
}
function LU(c) {
  const {
    override: f,
    ...d
  } = c, m = ug();
  return f === !1 && m.current !== Ow ? c.children : /* @__PURE__ */ Kn.createElement(AU, d);
}
function OU() {
  return ug().current.storeID;
}
var su = {
  RecoilRoot: LU,
  useStoreRef: ug,
  useRecoilMutableSource: wU,
  useRecoilStoreID: OU,
  notifyComponents_FOR_TESTING: SR,
  sendEndOfBatchNotifications_FOR_TESTING: zw
};
function MU(c, f) {
  if (c === f)
    return !0;
  if (c.length !== f.length)
    return !1;
  for (let d = 0, m = c.length; d < m; d++)
    if (c[d] !== f[d])
      return !1;
  return !0;
}
var UU = MU;
const {
  useEffect: zU,
  useRef: VU
} = Kn;
function jU(c) {
  const f = VU();
  return zU(() => {
    f.current = c;
  }), f.current;
}
var Vw = jU;
const {
  useStoreRef: FU
} = su, {
  SUSPENSE_TIMEOUT_MS: PU
} = Pc, {
  updateRetainCount: Ov
} = Pc, {
  RetentionZone: $U
} = ng, {
  useEffect: BU,
  useRef: IU
} = Kn, {
  isSSR: AC
} = Yv;
function HU(c) {
  if (On("recoil_memory_managament_2020"))
    return WU(c);
}
function WU(c) {
  const d = (Array.isArray(c) ? c : [c]).map((w) => w instanceof $U ? w : w.key), m = FU();
  BU(() => {
    if (!On("recoil_memory_managament_2020"))
      return;
    const w = m.current;
    if (g.current && !AC)
      window.clearTimeout(g.current), g.current = null;
    else
      for (const S of d)
        Ov(w, S, 1);
    return () => {
      for (const S of d)
        Ov(w, S, -1);
    };
  }, [m, ...d]);
  const g = IU(), T = Vw(d);
  if (!AC && (T === void 0 || !UU(T, d))) {
    const w = m.current;
    for (const S of d)
      Ov(w, S, 1);
    if (T)
      for (const S of T)
        Ov(w, S, -1);
    g.current && window.clearTimeout(g.current), g.current = window.setTimeout(() => {
      g.current = null;
      for (const S of d)
        Ov(w, S, -1);
    }, PU);
  }
}
var ER = HU;
function YU() {
  return "<component name not available>";
}
var Gv = YU;
const {
  batchUpdates: GU
} = ag, {
  DEFAULT_VALUE: jw
} = pi, {
  currentRendererSupportsUseSyncExternalStore: QU,
  reactMode: $c,
  useMutableSource: KU,
  useSyncExternalStore: qU
} = Ed, {
  useRecoilMutableSource: XU,
  useStoreRef: El
} = su, {
  isRecoilValue: ZU
} = Vc, {
  AbstractRecoilValue: oR,
  getRecoilValueAsLoadable: Qv,
  setRecoilValue: Gy,
  setUnvalidatedRecoilValue: JU,
  subscribeToRecoilValue: md
} = Sl, {
  useCallback: di,
  useEffect: yd,
  useMemo: Fw,
  useRef: Pv,
  useState: RR
} = Kn, {
  setByAddingToSet: ez
} = ow, {
  isSSR: tz
} = Yv;
function _R(c, f, d) {
  if (c.state === "hasValue")
    return c.contents;
  throw c.state === "loading" ? new Promise((g) => {
    const T = d.current.getState().suspendedComponentResolvers;
    T.add(g), tz && Ln(c.contents) && c.contents.finally(() => {
      T.delete(g);
    });
  }) : c.state === "hasError" ? c.contents : zt(`Invalid value of loadable atom "${f.key}"`);
}
function Ya(c, f) {
  if (!ZU(c))
    throw zt(`Invalid argument to ${f}: expected an atom or selector but got ${String(c)}`);
}
function nz() {
  const c = Gv(), f = El(), [, d] = RR([]), m = Pv(/* @__PURE__ */ new Set());
  m.current = /* @__PURE__ */ new Set();
  const g = Pv(/* @__PURE__ */ new Set()), T = Pv(/* @__PURE__ */ new Map()), w = di((U) => {
    const M = T.current.get(U);
    M && (M.release(), T.current.delete(U));
  }, [T]), S = di((U, M) => {
    T.current.has(M) && d([]);
  }, []);
  return yd(() => {
    const U = f.current;
    jv(m.current, g.current).forEach((M) => {
      if (T.current.has(M)) {
        Jy(`Double subscription to RecoilValue "${M}"`);
        return;
      }
      const $ = md(U, new oR(M), (Z) => S(Z, M), c);
      T.current.set(M, $), U.getState().nextTree ? U.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
        S(U.getState(), M);
      }) : S(U.getState(), M);
    }), jv(g.current, m.current).forEach((M) => {
      w(M);
    }), g.current = m.current;
  }), yd(() => {
    const U = T.current;
    return jv(m.current, new Set(U.keys())).forEach((M) => {
      const $ = md(f.current, new oR(M), (J) => S(J, M), c);
      U.set(M, $);
    }), () => U.forEach((M, $) => w($));
  }, [c, f, w, S]), Fw(() => {
    function U(I) {
      return Wt.NODE_ENV !== "production" && Ya(I, "useSetRecoilState"), (ae) => {
        Gy(f.current, I, ae);
      };
    }
    function M(I) {
      return Wt.NODE_ENV !== "production" && Ya(I, "useResetRecoilState"), () => Gy(f.current, I, jw);
    }
    function $(I) {
      var ae;
      Wt.NODE_ENV !== "production" && Ya(I, "useRecoilValueLoadable"), m.current.has(I.key) || (m.current = ez(m.current, I.key));
      const Pe = f.current.getState();
      return Qv(f.current, I, $c().early && (ae = Pe.nextTree) !== null && ae !== void 0 ? ae : Pe.currentTree);
    }
    function J(I) {
      Wt.NODE_ENV !== "production" && Ya(I, "useRecoilValue");
      const ae = $(I);
      return _R(ae, I, f);
    }
    function Z(I) {
      return Wt.NODE_ENV !== "production" && Ya(I, "useRecoilState"), [J(I), U(I)];
    }
    function le(I) {
      return Wt.NODE_ENV !== "production" && Ya(I, "useRecoilStateLoadable"), [$(I), U(I)];
    }
    return {
      getRecoilValue: J,
      getRecoilValueLoadable: $,
      getRecoilState: Z,
      getRecoilStateLoadable: le,
      getSetRecoilState: U,
      getResetRecoilState: M
    };
  }, [m, f]);
}
const Kv = {
  current: 0
};
function rz(c) {
  const f = El(), d = Gv(), m = di(() => {
    var S;
    Wt.NODE_ENV !== "production" && Kv.current++;
    const U = f.current, M = U.getState(), $ = $c().early && (S = M.nextTree) !== null && S !== void 0 ? S : M.currentTree;
    return {
      loadable: Qv(U, c, $),
      key: c.key
    };
  }, [f, c]), g = di((S) => {
    let U;
    return () => {
      var M, $;
      const J = S();
      return (M = U) !== null && M !== void 0 && M.loadable.is(J.loadable) && (($ = U) === null || $ === void 0 ? void 0 : $.key) === J.key ? U : (U = J, J);
    };
  }, []), T = Fw(() => g(m), [m, g]), w = di((S) => {
    const U = f.current;
    return md(U, c, S, d).release;
  }, [f, c, d]);
  return qU(
    w,
    T,
    // getSnapshot()
    T
    // getServerSnapshot() for SSR support
  ).loadable;
}
function az(c) {
  const f = El(), d = di(() => {
    var M;
    const $ = f.current, J = $.getState(), Z = $c().early && (M = J.nextTree) !== null && M !== void 0 ? M : J.currentTree;
    return Qv($, c, Z);
  }, [f, c]), m = di(() => (Wt.NODE_ENV !== "production" && Kv.current++, d()), [d]), g = Gv(), T = di((M, $) => {
    const J = f.current;
    return md(J, c, () => {
      if (!On("recoil_suppress_rerender_in_callback"))
        return $();
      const le = d();
      U.current.is(le) || $(), U.current = le;
    }, g).release;
  }, [f, c, g, d]), w = XU();
  if (w == null)
    throw zt("Recoil hooks must be used in components contained within a <RecoilRoot> component.");
  const S = KU(w, m, T), U = Pv(S);
  return yd(() => {
    U.current = S;
  }), S;
}
function lR(c) {
  const f = El(), d = Gv(), m = di(() => {
    var U;
    Wt.NODE_ENV !== "production" && Kv.current++;
    const M = f.current, $ = M.getState(), J = $c().early && (U = $.nextTree) !== null && U !== void 0 ? U : $.currentTree;
    return Qv(M, c, J);
  }, [f, c]), g = di(() => ({
    loadable: m(),
    key: c.key
  }), [m, c.key]), T = di((U) => {
    const M = g();
    return U.loadable.is(M.loadable) && U.key === M.key ? U : M;
  }, [g]);
  yd(() => {
    const U = md(f.current, c, (M) => {
      S(T);
    }, d);
    return S(T), U.release;
  }, [d, c, f, T]);
  const [w, S] = RR(g);
  return w.key !== c.key ? g().loadable : w.loadable;
}
function iz(c) {
  const f = El(), [, d] = RR([]), m = Gv(), g = di(() => {
    var S;
    Wt.NODE_ENV !== "production" && Kv.current++;
    const U = f.current, M = U.getState(), $ = $c().early && (S = M.nextTree) !== null && S !== void 0 ? S : M.currentTree;
    return Qv(U, c, $);
  }, [f, c]), T = g(), w = Pv(T);
  return yd(() => {
    w.current = T;
  }), yd(() => {
    const S = f.current, U = S.getState(), M = md(S, c, (J) => {
      var Z;
      if (!On("recoil_suppress_rerender_in_callback"))
        return d([]);
      const le = g();
      (Z = w.current) !== null && Z !== void 0 && Z.is(le) || d(le), w.current = le;
    }, m);
    if (U.nextTree)
      S.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
        w.current = null, d([]);
      });
    else {
      var $;
      if (!On("recoil_suppress_rerender_in_callback"))
        return d([]);
      const J = g();
      ($ = w.current) !== null && $ !== void 0 && $.is(J) || d(J), w.current = J;
    }
    return M.release;
  }, [m, g, c, f]), T;
}
function bR(c) {
  return Wt.NODE_ENV !== "production" && Ya(c, "useRecoilValueLoadable"), On("recoil_memory_managament_2020") && ER(c), {
    TRANSITION_SUPPORT: lR,
    // Recoil will attemp to detect if `useSyncExternalStore()` is supported with
    // `reactMode()` before calling it.  However, sometimes the host React
    // environment supports it but uses additional React renderers (such as with
    // `react-three-fiber`) which do not.  While this is technically a user issue
    // by using a renderer with React 18+ that doesn't fully support React 18 we
    // don't want to break users if it can be avoided. As the current renderer can
    // change at runtime, we need to dynamically check and fallback if necessary.
    SYNC_EXTERNAL_STORE: QU() ? rz : lR,
    MUTABLE_SOURCE: az,
    LEGACY: iz
  }[$c().mode](c);
}
function Pw(c) {
  Wt.NODE_ENV !== "production" && Ya(c, "useRecoilValue");
  const f = El(), d = bR(c);
  return _R(d, c, f);
}
function sg(c) {
  Wt.NODE_ENV !== "production" && Ya(c, "useSetRecoilState");
  const f = El();
  return di((d) => {
    Gy(f.current, c, d);
  }, [f, c]);
}
function oz(c) {
  Wt.NODE_ENV !== "production" && Ya(c, "useResetRecoilState");
  const f = El();
  return di(() => {
    Gy(f.current, c, jw);
  }, [f, c]);
}
function lz(c) {
  return Wt.NODE_ENV !== "production" && Ya(c, "useRecoilState"), [Pw(c), sg(c)];
}
function uz(c) {
  return Wt.NODE_ENV !== "production" && Ya(c, "useRecoilStateLoadable"), [bR(c), sg(c)];
}
function sz() {
  const c = El();
  return (f, d = {}) => {
    GU(() => {
      c.current.addTransactionMetadata(d), f.forEach((m, g) => JU(c.current, new oR(g), m));
    });
  };
}
function $w(c) {
  return Wt.NODE_ENV !== "production" && (Ya(c, "useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE"), $c().early || Pr("Attepmt to use a hook with UNSTABLE_TRANSITION_SUPPORT in a rendering mode incompatible with concurrent rendering.  Try enabling the recoil_sync_external_store or recoil_transition_support GKs.")), On("recoil_memory_managament_2020") && ER(c), lR(c);
}
function Bw(c) {
  Wt.NODE_ENV !== "production" && Ya(c, "useRecoilValue_TRANSITION_SUPPORT_UNSTABLE");
  const f = El(), d = $w(c);
  return _R(d, c, f);
}
function cz(c) {
  return Wt.NODE_ENV !== "production" && Ya(c, "useRecoilState_TRANSITION_SUPPORT_UNSTABLE"), [Bw(c), sg(c)];
}
var fz = {
  recoilComponentGetRecoilValueCount_FOR_TESTING: Kv,
  useRecoilInterface: nz,
  useRecoilState: lz,
  useRecoilStateLoadable: uz,
  useRecoilValue: Pw,
  useRecoilValueLoadable: bR,
  useResetRecoilState: oz,
  useSetRecoilState: sg,
  useSetUnvalidatedAtomValues: sz,
  useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: $w,
  useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: Bw,
  useRecoilState_TRANSITION_SUPPORT_UNSTABLE: cz
};
function dz(c, f) {
  const d = /* @__PURE__ */ new Map();
  for (const [m, g] of c)
    f(g, m) && d.set(m, g);
  return d;
}
var pz = dz;
function vz(c, f) {
  const d = /* @__PURE__ */ new Set();
  for (const m of c)
    f(m) && d.add(m);
  return d;
}
var hz = vz;
function mz(...c) {
  const f = /* @__PURE__ */ new Map();
  for (let d = 0; d < c.length; d++) {
    const m = c[d].keys();
    let g;
    for (; !(g = m.next()).done; )
      f.set(g.value, c[d].get(g.value));
  }
  return f;
}
var yz = mz;
const {
  batchUpdates: gz
} = ag, {
  DEFAULT_VALUE: Sz,
  getNode: Iw,
  nodes: Ez
} = pi, {
  useStoreRef: TR
} = su, {
  AbstractRecoilValue: Rz,
  setRecoilValueLoadable: _z
} = Sl, {
  SUSPENSE_TIMEOUT_MS: bz
} = Pc, {
  cloneSnapshot: Qy
} = lg, {
  useCallback: cg,
  useEffect: Hw,
  useRef: LC,
  useState: Tz
} = Kn, {
  isSSR: OC
} = Yv;
function fg(c) {
  const f = TR();
  Hw(() => f.current.subscribeToTransactions(c).release, [c, f]);
}
function MC(c) {
  const f = c.atomValues.toMap(), d = Yy(pz(f, (m, g) => {
    const w = Iw(g).persistence_UNSTABLE;
    return w != null && w.type !== "none" && m.state === "hasValue";
  }), (m) => m.contents);
  return yz(c.nonvalidatedAtoms.toMap(), d);
}
function Cz(c) {
  fg(cg((f) => {
    let d = f.getState().previousTree;
    const m = f.getState().currentTree;
    d || (Pr("Transaction subscribers notified without a previous tree being present -- this is a bug in Recoil"), d = f.getState().currentTree);
    const g = MC(m), T = MC(d), w = Yy(Ez, (U) => {
      var M, $, J, Z;
      return {
        persistence_UNSTABLE: {
          type: (M = ($ = U.persistence_UNSTABLE) === null || $ === void 0 ? void 0 : $.type) !== null && M !== void 0 ? M : "none",
          backButton: (J = (Z = U.persistence_UNSTABLE) === null || Z === void 0 ? void 0 : Z.backButton) !== null && J !== void 0 ? J : !1
        }
      };
    }), S = hz(m.dirtyAtoms, (U) => g.has(U) || T.has(U));
    c({
      atomValues: g,
      previousAtomValues: T,
      atomInfo: w,
      modifiedAtoms: S,
      transactionMetadata: {
        ...m.transactionMetadata
      }
    });
  }, [c]));
}
function wz(c) {
  fg(cg((f) => {
    const d = Qy(f, "latest"), m = Qy(f, "previous");
    c({
      snapshot: d,
      previousSnapshot: m
    });
  }, [c]));
}
function xz() {
  const c = TR(), [f, d] = Tz(() => Qy(c.current)), m = Vw(f), g = LC(), T = LC();
  if (fg(cg((S) => d(Qy(S)), [])), Hw(() => {
    const S = f.retain();
    if (g.current && !OC) {
      var U;
      window.clearTimeout(g.current), g.current = null, (U = T.current) === null || U === void 0 || U.call(T), T.current = null;
    }
    return () => {
      window.setTimeout(S, 10);
    };
  }, [f]), m !== f && !OC) {
    if (g.current) {
      var w;
      window.clearTimeout(g.current), g.current = null, (w = T.current) === null || w === void 0 || w.call(T), T.current = null;
    }
    T.current = f.retain(), g.current = window.setTimeout(() => {
      var S;
      g.current = null, (S = T.current) === null || S === void 0 || S.call(T), T.current = null;
    }, bz);
  }
  return f;
}
function Ww(c, f) {
  var d;
  const m = c.getState(), g = (d = m.nextTree) !== null && d !== void 0 ? d : m.currentTree, T = f.getStore_INTERNAL().getState().currentTree;
  gz(() => {
    const w = /* @__PURE__ */ new Set();
    for (const M of [g.atomValues.keys(), T.atomValues.keys()])
      for (const $ of M) {
        var S, U;
        ((S = g.atomValues.get($)) === null || S === void 0 ? void 0 : S.contents) !== ((U = T.atomValues.get($)) === null || U === void 0 ? void 0 : U.contents) && Iw($).shouldRestoreFromSnapshots && w.add($);
      }
    w.forEach((M) => {
      _z(c, new Rz(M), T.atomValues.has(M) ? Qn(T.atomValues.get(M)) : Sz);
    }), c.replaceState((M) => ({
      ...M,
      stateID: f.getID()
    }));
  });
}
function Nz() {
  const c = TR();
  return cg((f) => Ww(c.current, f), [c]);
}
var Yw = {
  useRecoilSnapshot: xz,
  gotoSnapshot: Ww,
  useGotoRecoilSnapshot: Nz,
  useRecoilTransactionObserver: wz,
  useTransactionObservation_DEPRECATED: Cz,
  useTransactionSubscription_DEPRECATED: fg
};
const {
  peekNodeInfo: Dz
} = ps, {
  useStoreRef: kz
} = su;
function Az() {
  const c = kz();
  return ({
    key: f
  }) => Dz(c.current, c.current.getState().currentTree, f);
}
var Lz = Az;
const {
  reactMode: Oz
} = Ed, {
  RecoilRoot: Mz,
  useStoreRef: Uz
} = su, {
  useMemo: zz
} = Kn;
function Vz() {
  Oz().mode === "MUTABLE_SOURCE" && console.warn("Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode.");
  const c = Uz().current;
  return zz(() => {
    function f({
      children: d
    }) {
      return /* @__PURE__ */ Kn.createElement(Mz, {
        store_INTERNAL: c
      }, d);
    }
    return f;
  }, [c]);
}
var jz = Vz;
const {
  loadableWithValue: Fz
} = Iv, {
  initializeNode: Pz
} = ps, {
  DEFAULT_VALUE: $z,
  getNode: Bz
} = pi, {
  copyTreeState: Iz,
  getRecoilValueAsLoadable: Hz,
  invalidateDownstreams: Wz,
  writeLoadableToTreeState: Yz
} = Sl;
function UC(c) {
  return Bz(c.key).nodeType === "atom";
}
class Gz {
  constructor(f, d) {
    Pt(this, "_store", void 0), Pt(this, "_treeState", void 0), Pt(this, "_changes", void 0), Pt(this, "get", (m) => {
      if (this._changes.has(m.key))
        return this._changes.get(m.key);
      if (!UC(m))
        throw zt("Reading selectors within atomicUpdate is not supported");
      const g = Hz(this._store, m, this._treeState);
      if (g.state === "hasValue")
        return g.contents;
      throw g.state === "hasError" ? g.contents : zt(`Expected Recoil atom ${m.key} to have a value, but it is in a loading state.`);
    }), Pt(this, "set", (m, g) => {
      if (!UC(m))
        throw zt("Setting selectors within atomicUpdate is not supported");
      if (typeof g == "function") {
        const T = this.get(m);
        this._changes.set(m.key, g(T));
      } else
        Pz(this._store, m.key, "set"), this._changes.set(m.key, g);
    }), Pt(this, "reset", (m) => {
      this.set(m, $z);
    }), this._store = f, this._treeState = d, this._changes = /* @__PURE__ */ new Map();
  }
  // Allow destructing
  // eslint-disable-next-line fb-www/extra-arrow-initializer
  newTreeState_INTERNAL() {
    if (this._changes.size === 0)
      return this._treeState;
    const f = Iz(this._treeState);
    for (const [d, m] of this._changes)
      Yz(f, d, Fz(m));
    return Wz(this._store, f), f;
  }
}
function Qz(c) {
  return (f) => {
    c.replaceState((d) => {
      const m = new Gz(c, d);
      return f(m), m.newTreeState_INTERNAL();
    });
  };
}
var Kz = {
  atomicUpdater: Qz
}, qz = Kz.atomicUpdater, Gw = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  atomicUpdater: qz
});
function Xz(c, f) {
  if (!c)
    throw new Error(f);
}
var Zz = Xz, gl = Zz;
const {
  atomicUpdater: Jz
} = Gw, {
  batchUpdates: eV
} = ag, {
  DEFAULT_VALUE: tV
} = pi, {
  useStoreRef: nV
} = su, {
  refreshRecoilValue: rV,
  setRecoilValue: zC
} = Sl, {
  cloneSnapshot: aV
} = lg, {
  gotoSnapshot: iV
} = Yw, {
  useCallback: oV
} = Kn;
class Qw {
}
const lV = new Qw();
function Kw(c, f, d, m) {
  let g = lV, T;
  if (eV(() => {
    const S = "useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";
    if (typeof f != "function")
      throw zt(S);
    const U = lw({
      ...m ?? {},
      // flowlint-line unclear-type:off
      // $FlowFixMe[missing-local-annot]
      set: ($, J) => zC(c, $, J),
      // $FlowFixMe[missing-local-annot]
      reset: ($) => zC(c, $, tV),
      // $FlowFixMe[missing-local-annot]
      refresh: ($) => rV(c, $),
      gotoSnapshot: ($) => iV(c, $),
      transact_UNSTABLE: ($) => Jz(c)($)
    }, {
      snapshot: () => {
        const $ = aV(c);
        return T = $.retain(), $;
      }
    }), M = f(U);
    if (typeof M != "function")
      throw zt(S);
    g = M(...d);
  }), g instanceof Qw && (Wt.NODE_ENV !== "production" ? gl(!1, "batchUpdates should return immediately") : gl(!1)), Ln(g))
    g = g.finally(() => {
      var S;
      (S = T) === null || S === void 0 || S();
    });
  else {
    var w;
    (w = T) === null || w === void 0 || w();
  }
  return g;
}
function uV(c, f) {
  const d = nV();
  return oV(
    // $FlowIssue[incompatible-call]
    (...m) => Kw(d.current, c, m),
    f != null ? [...f, d] : void 0
    // eslint-disable-line fb-www/react-hooks-deps
  );
}
var qw = {
  recoilCallback: Kw,
  useRecoilCallback: uV
};
const {
  useStoreRef: sV
} = su, {
  refreshRecoilValue: cV
} = Sl, {
  useCallback: fV
} = Kn;
function dV(c) {
  const f = sV();
  return fV(() => {
    const d = f.current;
    cV(d, c);
  }, [c, f]);
}
var pV = dV;
const {
  atomicUpdater: vV
} = Gw, {
  useStoreRef: hV
} = su, {
  useMemo: mV
} = Kn;
function yV(c, f) {
  const d = hV();
  return mV(
    () => (...m) => {
      vV(d.current)((T) => {
        c(T)(...m);
      });
    },
    f != null ? [...f, d] : void 0
    // eslint-disable-line fb-www/react-hooks-deps
  );
}
var gV = yV;
class SV {
  constructor(f) {
    Pt(this, "value", void 0), this.value = f;
  }
}
var EV = {
  WrappedValue: SV
}, RV = EV.WrappedValue, Xw = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  WrappedValue: RV
});
const {
  isFastRefreshEnabled: _V
} = Ed;
class VC extends Error {
}
class bV {
  // $FlowIssue[unclear-type]
  constructor(f) {
    var d, m, g;
    Pt(this, "_name", void 0), Pt(this, "_numLeafs", void 0), Pt(this, "_root", void 0), Pt(this, "_onHit", void 0), Pt(this, "_onSet", void 0), Pt(this, "_mapNodeValue", void 0), this._name = f == null ? void 0 : f.name, this._numLeafs = 0, this._root = null, this._onHit = (d = f == null ? void 0 : f.onHit) !== null && d !== void 0 ? d : () => {
    }, this._onSet = (m = f == null ? void 0 : f.onSet) !== null && m !== void 0 ? m : () => {
    }, this._mapNodeValue = (g = f == null ? void 0 : f.mapNodeValue) !== null && g !== void 0 ? g : (T) => T;
  }
  size() {
    return this._numLeafs;
  }
  // $FlowIssue[unclear-type]
  root() {
    return this._root;
  }
  get(f, d) {
    var m;
    return (m = this.getLeafNode(f, d)) === null || m === void 0 ? void 0 : m.value;
  }
  getLeafNode(f, d) {
    if (this._root == null)
      return;
    let m = this._root;
    for (; m; ) {
      if (d == null || d.onNodeVisit(m), m.type === "leaf")
        return this._onHit(m), m;
      const g = this._mapNodeValue(f(m.nodeKey));
      m = m.branches.get(g);
    }
  }
  set(f, d, m) {
    const g = () => {
      var T, w, S, U;
      let M, $;
      for (const [Pe, wt] of f) {
        var J, Z, le;
        const De = this._root;
        if ((De == null ? void 0 : De.type) === "leaf")
          throw this.invalidCacheError();
        const Te = M;
        if (M = Te ? Te.branches.get($) : De, M = (J = M) !== null && J !== void 0 ? J : {
          type: "branch",
          nodeKey: Pe,
          parent: Te,
          branches: /* @__PURE__ */ new Map(),
          branchKey: $
        }, M.type !== "branch" || M.nodeKey !== Pe)
          throw this.invalidCacheError();
        Te == null || Te.branches.set($, M), m == null || (Z = m.onNodeVisit) === null || Z === void 0 || Z.call(m, M), $ = this._mapNodeValue(wt), this._root = (le = this._root) !== null && le !== void 0 ? le : M;
      }
      const I = M ? (T = M) === null || T === void 0 ? void 0 : T.branches.get($) : this._root;
      if (I != null && (I.type !== "leaf" || I.branchKey !== $))
        throw this.invalidCacheError();
      const ae = {
        type: "leaf",
        value: d,
        parent: M,
        branchKey: $
      };
      (w = M) === null || w === void 0 || w.branches.set($, ae), this._root = (S = this._root) !== null && S !== void 0 ? S : ae, this._numLeafs++, this._onSet(ae), m == null || (U = m.onNodeVisit) === null || U === void 0 || U.call(m, ae);
    };
    try {
      g();
    } catch (T) {
      if (T instanceof VC)
        this.clear(), g();
      else
        throw T;
    }
  }
  // Returns true if leaf was actually deleted from the tree
  delete(f) {
    const d = this.root();
    if (!d)
      return !1;
    if (f === d)
      return this._root = null, this._numLeafs = 0, !0;
    let m = f.parent, g = f.branchKey;
    for (; m; ) {
      var T;
      if (m.branches.delete(g), m === d)
        return m.branches.size === 0 ? (this._root = null, this._numLeafs = 0) : this._numLeafs--, !0;
      if (m.branches.size > 0)
        break;
      g = (T = m) === null || T === void 0 ? void 0 : T.branchKey, m = m.parent;
    }
    for (; m !== d; m = m.parent)
      if (m == null)
        return !1;
    return this._numLeafs--, !0;
  }
  clear() {
    this._numLeafs = 0, this._root = null;
  }
  invalidCacheError() {
    const f = _V() ? "Possible Fast Refresh module reload detected.  This may also be caused by an selector returning inconsistent values. Resetting cache." : "Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache.";
    throw Pr(f + (this._name != null ? ` - ${this._name}` : "")), new VC();
  }
}
var TV = {
  TreeCache: bV
}, CV = TV.TreeCache, Zw = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  TreeCache: CV
});
class wV {
  constructor(f) {
    var d;
    Pt(this, "_maxSize", void 0), Pt(this, "_size", void 0), Pt(this, "_head", void 0), Pt(this, "_tail", void 0), Pt(this, "_map", void 0), Pt(this, "_keyMapper", void 0), this._maxSize = f.maxSize, this._size = 0, this._head = null, this._tail = null, this._map = /* @__PURE__ */ new Map(), this._keyMapper = (d = f.mapKey) !== null && d !== void 0 ? d : (m) => m;
  }
  head() {
    return this._head;
  }
  tail() {
    return this._tail;
  }
  size() {
    return this._size;
  }
  maxSize() {
    return this._maxSize;
  }
  has(f) {
    return this._map.has(this._keyMapper(f));
  }
  get(f) {
    const d = this._keyMapper(f), m = this._map.get(d);
    if (m)
      return this.set(f, m.value), m.value;
  }
  set(f, d) {
    const m = this._keyMapper(f);
    this._map.get(m) && this.delete(f);
    const T = this.head(), w = {
      key: f,
      right: T,
      left: null,
      value: d
    };
    T ? T.left = w : this._tail = w, this._map.set(m, w), this._head = w, this._size++, this._maybeDeleteLRU();
  }
  _maybeDeleteLRU() {
    this.size() > this.maxSize() && this.deleteLru();
  }
  deleteLru() {
    const f = this.tail();
    f && this.delete(f.key);
  }
  delete(f) {
    const d = this._keyMapper(f);
    if (!this._size || !this._map.has(d))
      return;
    const m = Qn(this._map.get(d)), g = m.right, T = m.left;
    g && (g.left = m.left), T && (T.right = m.right), m === this.head() && (this._head = g), m === this.tail() && (this._tail = T), this._map.delete(d), this._size--;
  }
  clear() {
    this._size = 0, this._head = null, this._tail = null, this._map = /* @__PURE__ */ new Map();
  }
}
var xV = {
  LRUCache: wV
}, NV = xV.LRUCache, Jw = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  LRUCache: NV
});
const {
  LRUCache: DV
} = Jw, {
  TreeCache: kV
} = Zw;
function AV({
  name: c,
  maxSize: f,
  mapNodeValue: d = (m) => m
}) {
  const m = new DV({
    maxSize: f
  }), g = new kV({
    name: c,
    mapNodeValue: d,
    onHit: (T) => {
      m.set(T, !0);
    },
    onSet: (T) => {
      const w = m.tail();
      m.set(T, !0), w && g.size() > f && g.delete(w.key);
    }
  });
  return g;
}
var jC = AV;
const LV = 15;
function qi(c, f, d) {
  if (typeof c == "string" && !c.includes('"') && !c.includes("\\"))
    return `"${c}"`;
  switch (typeof c) {
    case "undefined":
      return "";
    // JSON.stringify(undefined) returns undefined, but we always want to return a string
    case "boolean":
      return c ? "true" : "false";
    case "number":
    case "symbol":
      return String(c);
    case "string":
      return JSON.stringify(c);
    case "function":
      if ((f == null ? void 0 : f.allowFunctions) !== !0)
        throw zt("Attempt to serialize function in a Recoil cache key");
      return `__FUNCTION(${c.name})__`;
  }
  if (c === null)
    return "null";
  if (typeof c != "object") {
    var m;
    return (m = JSON.stringify(c)) !== null && m !== void 0 ? m : "";
  }
  if (Ln(c))
    return "__PROMISE__";
  if (Array.isArray(c))
    return `[${c.map((g, T) => qi(g, f, T.toString()))}]`;
  if (typeof c.toJSON == "function")
    return qi(c.toJSON(d), f, d);
  if (c instanceof Map) {
    const g = {};
    for (const [T, w] of c)
      g[typeof T == "string" ? T : qi(T, f)] = w;
    return qi(g, f, d);
  }
  return c instanceof Set ? qi(
    // $FlowFixMe[missing-local-annot]
    Array.from(c).sort((g, T) => qi(g, f).localeCompare(qi(T, f))),
    f,
    d
  ) : Symbol !== void 0 && c[Symbol.iterator] != null && typeof c[Symbol.iterator] == "function" ? qi(Array.from(c), f, d) : `{${Object.keys(c).filter((g) => c[g] !== void 0).sort().map((g) => `${qi(g, f)}:${qi(c[g], f, g)}`).join(",")}}`;
}
function OV(c, f = {
  allowFunctions: !1
}) {
  if (Wt.NODE_ENV !== "production" && typeof window < "u") {
    const d = window.performance ? window.performance.now() : 0, m = qi(c, f), g = window.performance ? window.performance.now() : 0;
    return g - d > LV && (console.groupCollapsed(`Recoil: Spent ${g - d}ms computing a cache key`), console.warn(c, m), console.groupEnd()), m;
  }
  return qi(c, f);
}
var dg = OV;
const {
  TreeCache: MV
} = Zw, Fy = {
  equality: "reference",
  eviction: "keep-all",
  maxSize: 1 / 0
};
function UV({
  equality: c = Fy.equality,
  eviction: f = Fy.eviction,
  maxSize: d = Fy.maxSize
} = Fy, m) {
  const g = zV(c);
  return VV(f, d, g, m);
}
function zV(c) {
  switch (c) {
    case "reference":
      return (f) => f;
    case "value":
      return (f) => dg(f);
  }
  throw zt(`Unrecognized equality policy ${c}`);
}
function VV(c, f, d, m) {
  switch (c) {
    case "keep-all":
      return new MV({
        name: m,
        mapNodeValue: d
      });
    case "lru":
      return jC({
        name: m,
        maxSize: Qn(f),
        mapNodeValue: d
      });
    case "most-recent":
      return jC({
        name: m,
        maxSize: 1,
        mapNodeValue: d
      });
  }
  throw zt(`Unrecognized eviction policy ${c}`);
}
var jV = UV;
function FV(c) {
  var f, d;
  if (typeof window > "u")
    return !1;
  const g = (d = (c != null ? (f = c.ownerDocument) !== null && f !== void 0 ? f : c : document).defaultView) !== null && d !== void 0 ? d : window;
  return c != null && (typeof g.Node == "function" ? c instanceof g.Node : typeof c == "object" && typeof c.nodeType == "number" && typeof c.nodeName == "string");
}
var PV = FV;
const {
  isReactNative: $V,
  isWindow: BV
} = Yv;
function IV(c) {
  if (c === null || typeof c != "object")
    return !0;
  switch (typeof c.$$typeof) {
    case "symbol":
      return !0;
    case "number":
      return !0;
  }
  return !!(c["@@__IMMUTABLE_ITERABLE__@@"] != null || c["@@__IMMUTABLE_KEYED__@@"] != null || c["@@__IMMUTABLE_INDEXED__@@"] != null || c["@@__IMMUTABLE_ORDERED__@@"] != null || c["@@__IMMUTABLE_RECORD__@@"] != null || PV(c) || Ln(c) || c instanceof Error || ArrayBuffer.isView(c) || !$V && BV(c));
}
function e1(c) {
  if (!(typeof c != "object" || IV(c))) {
    Object.freeze(c);
    for (const f in c)
      if (Object.prototype.hasOwnProperty.call(c, f)) {
        const d = c[f];
        typeof d == "object" && d != null && !Object.isFrozen(d) && e1(d);
      }
    Object.seal(c);
  }
}
var uR = e1;
function HV(c) {
  return () => null;
}
var WV = {
  startPerfBlock: HV
};
const {
  isLoadable: YV,
  loadableWithError: Py,
  loadableWithPromise: GV,
  loadableWithValue: qE
} = Iv, {
  WrappedValue: t1
} = Xw, {
  getNodeLoadable: $y,
  peekNodeLoadable: QV,
  setNodeValue: KV
} = ps, {
  saveDepsToStore: qV
} = Hv, {
  DEFAULT_VALUE: XV,
  getConfigDeletionHandler: ZV,
  getNode: JV,
  registerNode: FC
} = pi, {
  isRecoilValue: ej
} = Vc, {
  markRecoilValueModified: PC
} = Sl, {
  retainedByOptionWithDefault: tj
} = Pc, {
  recoilCallback: nj
} = qw, {
  startPerfBlock: rj
} = WV;
class n1 {
}
const Mv = new n1(), Uv = [], By = /* @__PURE__ */ new Map(), aj = /* @__PURE__ */ (() => {
  let c = 0;
  return () => c++;
})();
function r1(c) {
  let f = null;
  const {
    key: d,
    get: m,
    cachePolicy_UNSTABLE: g
  } = c, T = c.set != null ? c.set : void 0;
  if (Wt.NODE_ENV !== "production") {
    if (typeof d != "string")
      throw zt("A key option with a unique string value must be provided when creating a selector.");
    if (typeof m != "function")
      throw zt("Selectors must specify a get callback option to get the selector value.");
  }
  const w = /* @__PURE__ */ new Set(), S = jV(g ?? {
    equality: "reference",
    eviction: "keep-all"
  }, d), U = tj(c.retainedBy_UNSTABLE), M = /* @__PURE__ */ new Map();
  let $ = 0;
  function J() {
    return !On("recoil_memory_managament_2020") || $ > 0;
  }
  function Z(x) {
    return x.getState().knownSelectors.add(d), $++, () => {
      $--;
    };
  }
  function le() {
    return ZV(d) !== void 0 && !J();
  }
  function I(x, P, Y, ce, se) {
    St(P, ce, se), ae(x, Y);
  }
  function ae(x, P) {
    Ie(x, P) && pt(x), wt(P, !0);
  }
  function Pe(x, P) {
    Ie(x, P) && (Qn(Be(x)).stateVersions.clear(), wt(P, !1));
  }
  function wt(x, P) {
    const Y = By.get(x);
    if (Y != null) {
      for (const ce of Y)
        PC(ce, Qn(f));
      P && By.delete(x);
    }
  }
  function De(x, P) {
    let Y = By.get(P);
    Y == null && By.set(P, Y = /* @__PURE__ */ new Set()), Y.add(x);
  }
  function Te(x, P, Y, ce, se, ke) {
    return P.then((Ae) => {
      if (!J())
        throw pt(x), Mv;
      const Ne = qE(Ae);
      return I(x, Y, se, Ne, ce), Ae;
    }).catch((Ae) => {
      if (!J())
        throw pt(x), Mv;
      if (Ln(Ae))
        return ve(x, Ae, Y, ce, se, ke);
      const Ne = Py(Ae);
      throw I(x, Y, se, Ne, ce), Ae;
    });
  }
  function ve(x, P, Y, ce, se, ke) {
    return P.then((Ae) => {
      if (!J())
        throw pt(x), Mv;
      ke.loadingDepKey != null && ke.loadingDepPromise === P ? Y.atomValues.set(ke.loadingDepKey, qE(Ae)) : x.getState().knownSelectors.forEach((Lt) => {
        Y.atomValues.delete(Lt);
      });
      const Ne = qe(x, Y);
      if (Ne && Ne.state !== "loading") {
        if ((Ie(x, se) || Be(x) == null) && ae(x, se), Ne.state === "hasValue")
          return Ne.contents;
        throw Ne.contents;
      }
      if (!Ie(x, se)) {
        const Lt = nt(x, Y);
        if (Lt != null)
          return Lt.loadingLoadable.contents;
      }
      const [vt, Bt] = Ce(x, Y, se);
      if (vt.state !== "loading" && I(x, Y, se, vt, Bt), vt.state === "hasError")
        throw vt.contents;
      return vt.contents;
    }).catch((Ae) => {
      if (Ae instanceof n1)
        throw Mv;
      if (!J())
        throw pt(x), Mv;
      const Ne = Py(Ae);
      throw I(x, Y, se, Ne, ce), Ae;
    });
  }
  function Ke(x, P, Y, ce) {
    var se, ke, Ae, Ne;
    if (Ie(x, ce) || P.version === ((se = x.getState()) === null || se === void 0 || (ke = se.currentTree) === null || ke === void 0 ? void 0 : ke.version) || P.version === ((Ae = x.getState()) === null || Ae === void 0 || (Ne = Ae.nextTree) === null || Ne === void 0 ? void 0 : Ne.version)) {
      var vt, Bt, Lt;
      qV(d, Y, x, (vt = (Bt = x.getState()) === null || Bt === void 0 || (Lt = Bt.nextTree) === null || Lt === void 0 ? void 0 : Lt.version) !== null && vt !== void 0 ? vt : x.getState().currentTree.version);
    }
    for (const Ft of Y)
      w.add(Ft);
  }
  function Ce(x, P, Y) {
    const ce = rj(d);
    let se = !0, ke = !0;
    const Ae = () => {
      ce(), ke = !1;
    };
    let Ne, vt = !1, Bt;
    const Lt = {
      loadingDepKey: null,
      loadingDepPromise: null
    }, Ft = /* @__PURE__ */ new Map();
    function Kt({
      key: en
    }) {
      const qt = $y(x, P, en);
      switch (Ft.set(en, qt), se || (Ke(x, P, new Set(Ft.keys()), Y), Pe(x, Y)), qt.state) {
        case "hasValue":
          return qt.contents;
        case "hasError":
          throw qt.contents;
        case "loading":
          throw Lt.loadingDepKey = en, Lt.loadingDepPromise = qt.contents, qt.contents;
      }
      throw zt("Invalid Loadable state");
    }
    const wn = (en) => (...qt) => {
      if (ke)
        throw zt("Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription.");
      return f == null && (Wt.NODE_ENV !== "production" ? gl(!1, "Recoil Value can never be null") : gl(!1)), nj(
        x,
        en,
        qt,
        {
          node: f
        }
        // flowlint-line unclear-type:off
      );
    };
    try {
      Ne = m({
        get: Kt,
        getCallback: wn
      }), Ne = ej(Ne) ? Kt(Ne) : Ne, YV(Ne) && (Ne.state === "hasError" && (vt = !0), Ne = Ne.contents), Ln(Ne) ? Ne = Te(x, Ne, P, Ft, Y, Lt).finally(Ae) : Ae(), Ne = Ne instanceof t1 ? Ne.value : Ne;
    } catch (en) {
      Ne = en, Ln(Ne) ? Ne = ve(x, Ne, P, Ft, Y, Lt).finally(Ae) : (vt = !0, Ae());
    }
    return vt ? Bt = Py(Ne) : Ln(Ne) ? Bt = GV(Ne) : Bt = qE(Ne), se = !1, _t(x, Y, Ft), Ke(x, P, new Set(Ft.keys()), Y), [Bt, Ft];
  }
  function qe(x, P) {
    let Y = P.atomValues.get(d);
    if (Y != null)
      return Y;
    const ce = /* @__PURE__ */ new Set();
    try {
      Y = S.get((ke) => (typeof ke != "string" && (Wt.NODE_ENV !== "production" ? gl(!1, "Cache nodeKey is type string") : gl(!1)), $y(x, P, ke).contents), {
        onNodeVisit: (ke) => {
          ke.type === "branch" && ke.nodeKey !== d && ce.add(ke.nodeKey);
        }
      });
    } catch (ke) {
      throw zt(`Problem with cache lookup for selector "${d}": ${ke.message}`);
    }
    if (Y) {
      var se;
      P.atomValues.set(d, Y), Ke(x, P, ce, (se = Be(x)) === null || se === void 0 ? void 0 : se.executionID);
    }
    return Y;
  }
  function Re(x, P) {
    const Y = qe(x, P);
    if (Y != null)
      return pt(x), Y;
    const ce = nt(x, P);
    if (ce != null) {
      var se;
      return ((se = ce.loadingLoadable) === null || se === void 0 ? void 0 : se.state) === "loading" && De(x, ce.executionID), ce.loadingLoadable;
    }
    const ke = aj(), [Ae, Ne] = Ce(x, P, ke);
    return Ae.state === "loading" ? (rt(x, ke, Ae, Ne, P), De(x, ke)) : (pt(x), St(P, Ae, Ne)), Ae;
  }
  function nt(x, P) {
    const Y = Tw([M.has(x) ? [Qn(M.get(x))] : [], eg(hR(M, ([se]) => se !== x), ([, se]) => se)]);
    function ce(se) {
      for (const [ke, Ae] of se)
        if (!$y(x, P, ke).is(Ae))
          return !0;
      return !1;
    }
    for (const se of Y) {
      if (
        // If this execution was already checked to be valid with this version
        // of state, then let's use it!
        se.stateVersions.get(P.version) || // If the deps for the execution match our current state, then it's valid
        !ce(se.depValuesDiscoveredSoFarDuringAsyncWork)
      )
        return se.stateVersions.set(P.version, !0), se;
      se.stateVersions.set(P.version, !1);
    }
  }
  function Be(x) {
    return M.get(x);
  }
  function rt(x, P, Y, ce, se) {
    M.set(x, {
      depValuesDiscoveredSoFarDuringAsyncWork: ce,
      executionID: P,
      loadingLoadable: Y,
      stateVersions: /* @__PURE__ */ new Map([[se.version, !0]])
    });
  }
  function _t(x, P, Y) {
    if (Ie(x, P)) {
      const ce = Be(x);
      ce != null && (ce.depValuesDiscoveredSoFarDuringAsyncWork = Y);
    }
  }
  function pt(x) {
    M.delete(x);
  }
  function Ie(x, P) {
    var Y;
    return P === ((Y = Be(x)) === null || Y === void 0 ? void 0 : Y.executionID);
  }
  function ct(x) {
    return Array.from(x.entries()).map(([P, Y]) => [P, Y.contents]);
  }
  function St(x, P, Y) {
    Wt.NODE_ENV !== "production" && P.state !== "loading" && !c.dangerouslyAllowMutability && uR(P.contents), x.atomValues.set(d, P);
    try {
      S.set(ct(Y), P);
    } catch (ce) {
      throw zt(`Problem with setting cache for selector "${d}": ${ce.message}`);
    }
  }
  function ft(x) {
    if (Uv.includes(d)) {
      const P = `Recoil selector has circular dependencies: ${Uv.slice(Uv.indexOf(d)).join(" → ")}`;
      return Py(zt(P));
    }
    Uv.push(d);
    try {
      return x();
    } finally {
      Uv.pop();
    }
  }
  function ie(x, P) {
    const Y = P.atomValues.get(d);
    return Y ?? S.get((ce) => {
      var se;
      return typeof ce != "string" && (Wt.NODE_ENV !== "production" ? gl(!1, "Cache nodeKey is type string") : gl(!1)), (se = QV(x, P, ce)) === null || se === void 0 ? void 0 : se.contents;
    });
  }
  function ze(x, P) {
    return ft(() => Re(x, P));
  }
  function fe(x) {
    x.atomValues.delete(d);
  }
  function A(x, P) {
    f == null && (Wt.NODE_ENV !== "production" ? gl(!1, "Recoil Value can never be null") : gl(!1));
    for (const ce of w) {
      var Y;
      const se = JV(ce);
      (Y = se.clearCache) === null || Y === void 0 || Y.call(se, x, P);
    }
    w.clear(), fe(P), S.clear(), PC(x, f);
  }
  return T != null ? f = FC({
    key: d,
    nodeType: "selector",
    peek: ie,
    get: ze,
    set: (P, Y, ce) => {
      let se = !1;
      const ke = /* @__PURE__ */ new Map();
      function Ae({
        key: Lt
      }) {
        if (se)
          throw zt("Recoil: Async selector sets are not currently supported.");
        const Ft = $y(P, Y, Lt);
        if (Ft.state === "hasValue")
          return Ft.contents;
        if (Ft.state === "loading") {
          const Kt = `Getting value of asynchronous atom or selector "${Lt}" in a pending state while setting selector "${d}" is not yet supported.`;
          throw Pr(Kt), zt(Kt);
        } else
          throw Ft.contents;
      }
      function Ne(Lt, Ft) {
        if (se) {
          const en = "Recoil: Async selector sets are not currently supported.";
          throw Pr(en), zt(en);
        }
        const Kt = typeof Ft == "function" ? (
          // cast to any because we can't restrict type S from being a function itself without losing support for opaque types
          // flowlint-next-line unclear-type:off
          Ft(Ae(Lt))
        ) : Ft;
        KV(P, Y, Lt.key, Kt).forEach((en, qt) => ke.set(qt, en));
      }
      function vt(Lt) {
        Ne(Lt, XV);
      }
      const Bt = T({
        set: Ne,
        get: Ae,
        reset: vt
      }, ce);
      if (Bt !== void 0)
        throw Ln(Bt) ? zt("Recoil: Async selector sets are not currently supported.") : zt("Recoil: selector set should be a void function.");
      return se = !0, ke;
    },
    init: Z,
    invalidate: fe,
    clearCache: A,
    shouldDeleteConfigOnRelease: le,
    dangerouslyAllowMutability: c.dangerouslyAllowMutability,
    shouldRestoreFromSnapshots: !1,
    retainedBy: U
  }) : f = FC({
    key: d,
    nodeType: "selector",
    peek: ie,
    get: ze,
    init: Z,
    invalidate: fe,
    clearCache: A,
    shouldDeleteConfigOnRelease: le,
    dangerouslyAllowMutability: c.dangerouslyAllowMutability,
    shouldRestoreFromSnapshots: !1,
    retainedBy: U
  });
}
r1.value = (c) => new t1(c);
var gd = r1;
const {
  isLoadable: ij,
  loadableWithError: XE,
  loadableWithPromise: ZE,
  loadableWithValue: pd
} = Iv, {
  WrappedValue: a1
} = Xw, {
  peekNodeInfo: oj
} = ps, {
  DEFAULT_VALUE: Uc,
  DefaultValue: ds,
  getConfigDeletionHandler: i1,
  registerNode: lj,
  setConfigDeletionHandler: uj
} = pi, {
  isRecoilValue: sj
} = Vc, {
  getRecoilValueAsLoadable: cj,
  markRecoilValueModified: fj,
  setRecoilValue: $C,
  setRecoilValueLoadable: dj
} = Sl, {
  retainedByOptionWithDefault: pj
} = Pc, zv = (c) => c instanceof a1 ? c.value : c;
function vj(c) {
  const {
    key: f,
    persistence_UNSTABLE: d
  } = c, m = pj(c.retainedBy_UNSTABLE);
  let g = 0;
  function T(De) {
    return ZE(De.then((Te) => (w = pd(Te), Te)).catch((Te) => {
      throw w = XE(Te), Te;
    }));
  }
  let w = Ln(c.default) ? T(c.default) : ij(c.default) ? c.default.state === "loading" ? T(c.default.contents) : c.default : (
    // $FlowFixMe[incompatible-call]
    pd(zv(c.default))
  );
  M(w.contents);
  let S;
  const U = /* @__PURE__ */ new Map();
  function M(De) {
    return Wt.NODE_ENV !== "production" && c.dangerouslyAllowMutability !== !0 ? Ln(De) ? De.then((Te) => (uR(Te), Te)) : (uR(De), De) : De;
  }
  function $(De, Te) {
    const ve = Te.then((Ke) => {
      var Ce, qe;
      return ((qe = ((Ce = De.getState().nextTree) !== null && Ce !== void 0 ? Ce : De.getState().currentTree).atomValues.get(f)) === null || qe === void 0 ? void 0 : qe.contents) === ve && $C(De, wt, Ke), Ke;
    }).catch((Ke) => {
      var Ce, qe;
      throw ((qe = ((Ce = De.getState().nextTree) !== null && Ce !== void 0 ? Ce : De.getState().currentTree).atomValues.get(f)) === null || qe === void 0 ? void 0 : qe.contents) === ve && dj(De, wt, XE(Ke)), Ke;
    });
    return ve;
  }
  function J(De, Te, ve) {
    var Ke;
    g++;
    const Ce = () => {
      var Be;
      g--, (Be = U.get(De)) === null || Be === void 0 || Be.forEach((rt) => rt()), U.delete(De);
    };
    if (De.getState().knownAtoms.add(f), w.state === "loading") {
      const Be = () => {
        var rt;
        ((rt = De.getState().nextTree) !== null && rt !== void 0 ? rt : De.getState().currentTree).atomValues.has(f) || fj(De, wt);
      };
      w.contents.finally(Be);
    }
    const qe = (Ke = c.effects) !== null && Ke !== void 0 ? Ke : c.effects_UNSTABLE;
    if (qe != null) {
      let Be = function(fe) {
        if (Ie && fe.key === f) {
          const A = pt;
          return A instanceof ds ? Z(De, Te) : Ln(A) ? ZE(A.then((x) => x instanceof ds ? (
            // Cast T to S
            w.toPromise()
          ) : x)) : (
            // $FlowFixMe[incompatible-call]
            pd(A)
          );
        }
        return cj(De, fe);
      }, rt = function(fe) {
        return Be(fe).toPromise();
      }, _t = function(fe) {
        var A;
        const x = oj(De, (A = De.getState().nextTree) !== null && A !== void 0 ? A : De.getState().currentTree, fe.key);
        return Ie && fe.key === f && !(pt instanceof ds) ? {
          ...x,
          isSet: !0,
          loadable: Be(fe)
        } : x;
      }, pt = Uc, Ie = !0, ct = !1, St = null;
      const ft = (fe) => (A) => {
        if (Ie) {
          const x = Be(wt), P = x.state === "hasValue" ? x.contents : Uc;
          pt = typeof A == "function" ? (
            // cast to any because we can't restrict T from being a function without losing support for opaque types
            A(P)
          ) : A, Ln(pt) && (pt = pt.then((Y) => (St = {
            effect: fe,
            value: Y
          }, Y)));
        } else {
          if (Ln(A))
            throw zt("Setting atoms to async values is not implemented.");
          typeof A != "function" && (St = {
            effect: fe,
            value: zv(A)
          }), $C(De, wt, typeof A == "function" ? (x) => {
            const P = zv(
              // cast to any because we can't restrict T from being a function without losing support for opaque types
              A(x)
              // flowlint-line unclear-type:off
            );
            return St = {
              effect: fe,
              value: P
            }, P;
          } : zv(A));
        }
      }, ie = (fe) => () => ft(fe)(Uc), ze = (fe) => (A) => {
        var x;
        const {
          release: P
        } = De.subscribeToTransactions((Y) => {
          var ce;
          let {
            currentTree: se,
            previousTree: ke
          } = Y.getState();
          ke || (Pr("Transaction subscribers notified without a next tree being present -- this is a bug in Recoil"), ke = se);
          const Ae = (ce = se.atomValues.get(f)) !== null && ce !== void 0 ? ce : w;
          if (Ae.state === "hasValue") {
            var Ne, vt, Bt, Lt;
            const Ft = Ae.contents, Kt = (Ne = ke.atomValues.get(f)) !== null && Ne !== void 0 ? Ne : w, wn = Kt.state === "hasValue" ? Kt.contents : Uc;
            ((vt = St) === null || vt === void 0 ? void 0 : vt.effect) !== fe || ((Bt = St) === null || Bt === void 0 ? void 0 : Bt.value) !== Ft ? A(Ft, wn, !se.atomValues.has(f)) : ((Lt = St) === null || Lt === void 0 ? void 0 : Lt.effect) === fe && (St = null);
          }
        }, f);
        U.set(De, [...(x = U.get(De)) !== null && x !== void 0 ? x : [], P]);
      };
      for (const fe of qe)
        try {
          const A = fe({
            node: wt,
            storeID: De.storeID,
            parentStoreID_UNSTABLE: De.parentStoreID,
            trigger: ve,
            setSelf: ft(fe),
            resetSelf: ie(fe),
            onSet: ze(fe),
            getPromise: rt,
            getLoadable: Be,
            getInfo_UNSTABLE: _t
          });
          if (A != null) {
            var Re;
            U.set(De, [...(Re = U.get(De)) !== null && Re !== void 0 ? Re : [], A]);
          }
        } catch (A) {
          pt = A, ct = !0;
        }
      if (Ie = !1, !(pt instanceof ds)) {
        var nt;
        const fe = ct ? XE(pt) : Ln(pt) ? ZE($(De, pt)) : pd(zv(pt));
        M(fe.contents), Te.atomValues.set(f, fe), (nt = De.getState().nextTree) === null || nt === void 0 || nt.atomValues.set(f, fe);
      }
    }
    return Ce;
  }
  function Z(De, Te) {
    var ve, Ke;
    return (ve = (Ke = Te.atomValues.get(f)) !== null && Ke !== void 0 ? Ke : S) !== null && ve !== void 0 ? ve : w;
  }
  function le(De, Te) {
    if (Te.atomValues.has(f))
      return Qn(Te.atomValues.get(f));
    if (Te.nonvalidatedAtoms.has(f)) {
      if (S != null)
        return S;
      if (d == null)
        return Jy(`Tried to restore a persisted value for atom ${f} but it has no persistence settings.`), w;
      const ve = Te.nonvalidatedAtoms.get(f), Ke = d.validator(ve, Uc);
      return S = Ke instanceof ds ? w : pd(Ke), S;
    } else
      return w;
  }
  function I() {
    S = void 0;
  }
  function ae(De, Te, ve) {
    if (Te.atomValues.has(f)) {
      const Ke = Qn(Te.atomValues.get(f));
      if (Ke.state === "hasValue" && ve === Ke.contents)
        return /* @__PURE__ */ new Map();
    } else if (!Te.nonvalidatedAtoms.has(f) && ve instanceof ds)
      return /* @__PURE__ */ new Map();
    return M(ve), S = void 0, (/* @__PURE__ */ new Map()).set(f, pd(ve));
  }
  function Pe() {
    return i1(f) !== void 0 && g <= 0;
  }
  const wt = lj({
    key: f,
    nodeType: "atom",
    peek: Z,
    get: le,
    set: ae,
    init: J,
    invalidate: I,
    shouldDeleteConfigOnRelease: Pe,
    dangerouslyAllowMutability: c.dangerouslyAllowMutability,
    persistence_UNSTABLE: c.persistence_UNSTABLE ? {
      type: c.persistence_UNSTABLE.type,
      backButton: c.persistence_UNSTABLE.backButton
    } : void 0,
    shouldRestoreFromSnapshots: !0,
    retainedBy: m
  });
  return wt;
}
function CR(c) {
  if (Wt.NODE_ENV !== "production" && typeof c.key != "string")
    throw zt("A key option with a unique string value must be provided when creating an atom.");
  const {
    // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS,
    ...f
  } = c, d = "default" in c ? (
    // $FlowIssue[incompatible-type] No way to refine in Flow that property is not defined
    c.default
  ) : new Promise(() => {
  });
  return sj(d) ? hj({
    ...f,
    default: d
    // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS,
  }) : vj({
    ...f,
    default: d
  });
}
function hj(c) {
  const f = CR({
    ...c,
    default: Uc,
    persistence_UNSTABLE: c.persistence_UNSTABLE === void 0 ? void 0 : {
      ...c.persistence_UNSTABLE,
      validator: (m) => m instanceof ds ? m : Qn(c.persistence_UNSTABLE).validator(m, Uc)
    },
    // TODO Hack for now.
    effects: c.effects,
    // flowlint-line unclear-type: off
    effects_UNSTABLE: c.effects_UNSTABLE
    // flowlint-line unclear-type: off
  }), d = gd({
    key: `${c.key}__withFallback`,
    get: ({
      get: m
    }) => {
      const g = m(f);
      return g instanceof ds ? c.default : g;
    },
    // $FlowFixMe[incompatible-call]
    set: ({
      set: m
    }, g) => m(f, g),
    // This selector does not need to cache as it is a wrapper selector
    // and the selector within the wrapper selector will have a cache
    // option by default
    cachePolicy_UNSTABLE: {
      eviction: "most-recent"
    },
    dangerouslyAllowMutability: c.dangerouslyAllowMutability
  });
  return uj(d.key, i1(c.key)), d;
}
CR.value = (c) => new a1(c);
var o1 = CR;
class mj {
  constructor(f) {
    var d;
    Pt(this, "_map", void 0), Pt(this, "_keyMapper", void 0), this._map = /* @__PURE__ */ new Map(), this._keyMapper = (d = f == null ? void 0 : f.mapKey) !== null && d !== void 0 ? d : (m) => m;
  }
  size() {
    return this._map.size;
  }
  has(f) {
    return this._map.has(this._keyMapper(f));
  }
  get(f) {
    return this._map.get(this._keyMapper(f));
  }
  set(f, d) {
    this._map.set(this._keyMapper(f), d);
  }
  delete(f) {
    this._map.delete(this._keyMapper(f));
  }
  clear() {
    this._map.clear();
  }
}
var yj = {
  MapCache: mj
}, gj = yj.MapCache, Sj = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MapCache: gj
});
const {
  LRUCache: BC
} = Jw, {
  MapCache: Ej
} = Sj, Iy = {
  equality: "reference",
  eviction: "none",
  maxSize: 1 / 0
};
function Rj({
  equality: c = Iy.equality,
  eviction: f = Iy.eviction,
  maxSize: d = Iy.maxSize
} = Iy) {
  const m = _j(c);
  return bj(f, d, m);
}
function _j(c) {
  switch (c) {
    case "reference":
      return (f) => f;
    case "value":
      return (f) => dg(f);
  }
  throw zt(`Unrecognized equality policy ${c}`);
}
function bj(c, f, d) {
  switch (c) {
    case "keep-all":
      return new Ej({
        mapKey: d
      });
    case "lru":
      return new BC({
        mapKey: d,
        maxSize: Qn(f)
      });
    case "most-recent":
      return new BC({
        mapKey: d,
        maxSize: 1
      });
  }
  throw zt(`Unrecognized eviction policy ${c}`);
}
var l1 = Rj;
const {
  setConfigDeletionHandler: Tj
} = pi;
function Cj(c) {
  var f, d;
  const m = l1({
    equality: (f = (d = c.cachePolicyForParams_UNSTABLE) === null || d === void 0 ? void 0 : d.equality) !== null && f !== void 0 ? f : "value",
    eviction: "keep-all"
  });
  return (g) => {
    var T, w;
    const S = m.get(g);
    if (S != null)
      return S;
    const {
      cachePolicyForParams_UNSTABLE: U,
      ...M
    } = c, $ = "default" in c ? (
      // $FlowIssue[incompatible-type] No way to refine in Flow that property is not defined
      c.default
    ) : new Promise(() => {
    }), J = o1({
      ...M,
      key: `${c.key}__${(T = dg(g)) !== null && T !== void 0 ? T : "void"}`,
      default: typeof $ == "function" ? (
        // The default was parameterized
        // Flow doesn't know that T isn't a function, so we need to case to any
        // $FlowIssue[incompatible-use]
        $(g)
      ) : (
        // Default may be a static value, promise, or RecoilValue
        $
      ),
      retainedBy_UNSTABLE: typeof c.retainedBy_UNSTABLE == "function" ? c.retainedBy_UNSTABLE(g) : c.retainedBy_UNSTABLE,
      effects: typeof c.effects == "function" ? c.effects(g) : typeof c.effects_UNSTABLE == "function" ? c.effects_UNSTABLE(g) : (w = c.effects) !== null && w !== void 0 ? w : c.effects_UNSTABLE
      // prettier-ignore
      // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS: mapScopeRules(
      // @fb-only: options.scopeRules_APPEND_ONLY_READ_THE_DOCS,
      // @fb-only: params,
      // @fb-only: ),
    });
    return m.set(g, J), Tj(J.key, () => {
      m.delete(g);
    }), J;
  };
}
var wj = Cj;
const {
  setConfigDeletionHandler: xj
} = pi;
let Nj = 0;
function Dj(c) {
  var f, d;
  const m = l1({
    equality: (f = (d = c.cachePolicyForParams_UNSTABLE) === null || d === void 0 ? void 0 : d.equality) !== null && f !== void 0 ? f : "value",
    eviction: "keep-all"
  });
  return (g) => {
    var T;
    let w;
    try {
      w = m.get(g);
    } catch (Z) {
      throw zt(`Problem with cache lookup for selector ${c.key}: ${Z.message}`);
    }
    if (w != null)
      return w;
    const S = `${c.key}__selectorFamily/${(T = dg(g, {
      // It is possible to use functions in parameters if the user uses
      // a cache with reference equality thanks to the incrementing index.
      allowFunctions: !0
    })) !== null && T !== void 0 ? T : "void"}/${Nj++}`, U = (Z) => c.get(g)(Z), M = c.cachePolicy_UNSTABLE, $ = typeof c.retainedBy_UNSTABLE == "function" ? c.retainedBy_UNSTABLE(g) : c.retainedBy_UNSTABLE;
    let J;
    if (c.set != null) {
      const Z = c.set;
      J = gd({
        key: S,
        get: U,
        set: (I, ae) => Z(g)(I, ae),
        cachePolicy_UNSTABLE: M,
        dangerouslyAllowMutability: c.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: $
      });
    } else
      J = gd({
        key: S,
        get: U,
        cachePolicy_UNSTABLE: M,
        dangerouslyAllowMutability: c.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: $
      });
    return m.set(g, J), xj(J.key, () => {
      m.delete(g);
    }), J;
  };
}
var vs = Dj;
const kj = vs({
  key: "__constant",
  get: (c) => () => c,
  cachePolicyForParams_UNSTABLE: {
    equality: "reference"
  }
});
function Aj(c) {
  return kj(c);
}
var Lj = Aj;
const Oj = vs({
  key: "__error",
  get: (c) => () => {
    throw zt(c);
  },
  // TODO Why?
  cachePolicyForParams_UNSTABLE: {
    equality: "reference"
  }
});
function Mj(c) {
  return Oj(c);
}
var Uj = Mj;
function zj(c) {
  return c;
}
var Vj = zj;
const {
  loadableWithError: u1,
  loadableWithPromise: s1,
  loadableWithValue: c1
} = Iv;
function pg(c, f) {
  const d = Array(f.length).fill(void 0), m = Array(f.length).fill(void 0);
  for (const [g, T] of f.entries())
    try {
      d[g] = c(T);
    } catch (w) {
      m[g] = w;
    }
  return [d, m];
}
function jj(c) {
  return c != null && !Ln(c);
}
function vg(c) {
  return Array.isArray(c) ? c : Object.getOwnPropertyNames(c).map((f) => c[f]);
}
function sR(c, f) {
  return Array.isArray(c) ? f : (
    // Object.getOwnPropertyNames() has consistent key ordering with ES6
    Object.getOwnPropertyNames(c).reduce((d, m, g) => ({
      ...d,
      [m]: f[g]
    }), {})
  );
}
function vd(c, f, d) {
  const m = d.map((g, T) => g == null ? c1(f[T]) : Ln(g) ? s1(g) : u1(g));
  return sR(c, m);
}
function Fj(c, f) {
  return f.map((d, m) => (
    /**
     * it's important we use === undefined as opposed to == null, because the
     * resolved value of the async promise could be `null`, in which case we
     * don't want to use syncResults[idx], which would be undefined. If async
     * promise resolves to `undefined`, that's ok because `syncResults[idx]`
     * will also be `undefined`. That's a little hacky, but it works.
     */
    d === void 0 ? c[m] : d
  ));
}
const Pj = vs({
  key: "__waitForNone",
  get: (c) => ({
    get: f
  }) => {
    const d = vg(c), [m, g] = pg(f, d);
    return vd(c, m, g);
  },
  dangerouslyAllowMutability: !0
}), $j = vs({
  key: "__waitForAny",
  get: (c) => ({
    get: f
  }) => {
    const d = vg(c), [m, g] = pg(f, d);
    return g.some((T) => !Ln(T)) ? vd(c, m, g) : new Promise((T) => {
      for (const [w, S] of g.entries())
        Ln(S) && S.then((U) => {
          m[w] = U, g[w] = void 0, T(vd(c, m, g));
        }).catch((U) => {
          g[w] = U, T(vd(c, m, g));
        });
    });
  },
  dangerouslyAllowMutability: !0
}), Bj = vs({
  key: "__waitForAll",
  get: (c) => ({
    get: f
  }) => {
    const d = vg(c), [m, g] = pg(f, d);
    if (g.every((w) => w == null))
      return sR(c, m);
    const T = g.find(jj);
    if (T != null)
      throw T;
    return Promise.all(g).then((w) => sR(c, Fj(m, w)));
  },
  dangerouslyAllowMutability: !0
}), Ij = vs({
  key: "__waitForAllSettled",
  get: (c) => ({
    get: f
  }) => {
    const d = vg(c), [m, g] = pg(f, d);
    return g.every((T) => !Ln(T)) ? vd(c, m, g) : Promise.all(g.map((T, w) => Ln(T) ? T.then((S) => {
      m[w] = S, g[w] = void 0;
    }).catch((S) => {
      m[w] = void 0, g[w] = S;
    }) : null)).then(() => vd(c, m, g));
  },
  dangerouslyAllowMutability: !0
}), Hj = vs({
  key: "__noWait",
  get: (c) => ({
    get: f
  }) => {
    try {
      return gd.value(c1(f(c)));
    } catch (d) {
      return gd.value(Ln(d) ? s1(d) : u1(d));
    }
  },
  dangerouslyAllowMutability: !0
});
var Wj = {
  waitForNone: Pj,
  waitForAny: $j,
  waitForAll: Bj,
  waitForAllSettled: Ij,
  noWait: Hj
};
const {
  RecoilLoadable: Yj
} = Iv, {
  DefaultValue: Gj
} = pi, {
  RecoilRoot: Qj,
  useRecoilStoreID: Kj
} = su, {
  isRecoilValue: qj
} = Vc, {
  retentionZone: Xj
} = ng, {
  freshSnapshot: Zj
} = lg, {
  useRecoilState: Jj,
  useRecoilState_TRANSITION_SUPPORT_UNSTABLE: eF,
  useRecoilStateLoadable: tF,
  useRecoilValue: nF,
  useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: rF,
  useRecoilValueLoadable: aF,
  useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: iF,
  useResetRecoilState: oF,
  useSetRecoilState: lF
} = fz, {
  useGotoRecoilSnapshot: uF,
  useRecoilSnapshot: sF,
  useRecoilTransactionObserver: cF
} = Yw, {
  useRecoilCallback: fF
} = qw, {
  noWait: dF,
  waitForAll: pF,
  waitForAllSettled: vF,
  waitForAny: hF,
  waitForNone: mF
} = Wj;
var hg = {
  // Types
  DefaultValue: Gj,
  isRecoilValue: qj,
  RecoilLoadable: Yj,
  // Global Recoil environment settiongs
  RecoilEnv: Sd,
  // Recoil Root
  RecoilRoot: Qj,
  useRecoilStoreID: Kj,
  useRecoilBridgeAcrossReactRoots_UNSTABLE: jz,
  // Atoms/Selectors
  atom: o1,
  selector: gd,
  // Convenience Atoms/Selectors
  atomFamily: wj,
  selectorFamily: vs,
  constSelector: Lj,
  errorSelector: Uj,
  readOnlySelector: Vj,
  // Concurrency Helpers for Atoms/Selectors
  noWait: dF,
  waitForNone: mF,
  waitForAny: hF,
  waitForAll: pF,
  waitForAllSettled: vF,
  // Hooks for Atoms/Selectors
  useRecoilValue: nF,
  useRecoilValueLoadable: aF,
  useRecoilState: Jj,
  useRecoilStateLoadable: tF,
  useSetRecoilState: lF,
  useResetRecoilState: oF,
  useGetRecoilValueInfo_UNSTABLE: Lz,
  useRecoilRefresher_UNSTABLE: pV,
  useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: iF,
  useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: rF,
  useRecoilState_TRANSITION_SUPPORT_UNSTABLE: eF,
  // Hooks for complex operations
  useRecoilCallback: fF,
  useRecoilTransaction_UNSTABLE: gV,
  // Snapshots
  useGotoRecoilSnapshot: uF,
  useRecoilSnapshot: sF,
  useRecoilTransactionObserver_UNSTABLE: cF,
  snapshot_UNSTABLE: Zj,
  // Memory Management
  useRetain: ER,
  retentionZone: Xj
}, yF = hg.RecoilRoot, gF = hg.atom, SF = hg.useRecoilValue, mg = hg.useSetRecoilState;
const qv = gF({
  key: "infoMessageState",
  // unique ID (with respect to other atoms/selectors)
  default: {
    message: "",
    type: "info"
  }
}), EF = ({ onCreateApp: c, onCancel: f }) => {
  const [d, m] = sn.useState(""), [g, T] = sn.useState(!1), w = mg(qv), S = async (U) => {
    U.preventDefault();
    const M = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    if (!d.trim()) {
      w({ message: "App ID cannot be empty.", type: "error" });
      return;
    }
    if (!M.test(d)) {
      w({ message: "Invalid App ID. Please enter a valid UUID.", type: "error" });
      return;
    }
    T(!0), await c(d.trim()), T(!1);
  };
  return /* @__PURE__ */ re.jsxs("form", { className: "w-full h-full flex flex-col", onSubmit: S, children: [
    /* @__PURE__ */ re.jsxs("div", { className: "mb-3", children: [
      /* @__PURE__ */ re.jsx("label", { htmlFor: "tsfm-ma-app-id", className: "block text-sm font-medium text-gray-700", children: "App ID:" }),
      /* @__PURE__ */ re.jsx(
        "input",
        {
          type: "text",
          name: "app-id",
          className: "form-control w-3/4 mt-1 block border border-gray-300 rounded-md shadow-sm",
          id: "tsfm-ma-app-id",
          placeholder: "e8a9dbea-cb43-4641-b8e0-e2a1c0cf991f",
          required: !0,
          value: d,
          onChange: (U) => m(U.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ re.jsx("div", { className: "flex-grow" }),
    /* @__PURE__ */ re.jsx("div", { className: "self-end flex justify-between items-center", children: /* @__PURE__ */ re.jsxs("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ re.jsx(
        "button",
        {
          type: "button",
          className: "rounded-md p-2 bg-danger hover:bg-primary-dark text-white",
          onClick: f,
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ re.jsx(
        "button",
        {
          type: "submit",
          className: "rounded-md p-2 bg-success hover:bg-primary-dark text-white",
          disabled: g,
          children: g ? "Creating..." : "Create"
        }
      )
    ] }) })
  ] });
}, RF = async () => {
  const { postTypesEndpoint: c, nonce: f } = window.tsfmData || {};
  if (!c || !f)
    return console.error("REST API endpoint or nonce is missing."), null;
  try {
    const d = await fetch(`${c}`, {
      // Adjust endpoint as necessary
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-WP-Nonce": f
        // Include if using nonce for authentication
      }
    });
    if (!d.ok) {
      const g = await d.text();
      return console.error("Error fetching post types:", g), null;
    }
    return await d.json();
  } catch (d) {
    return console.error("Error fetching post types:", d), null;
  }
};
function yg(c, f) {
  return c.replace(/\{([^}]+)\}/g, (d, m) => {
    if (m in f)
      return f[m];
    throw new Error(`No value provided for placeholder: ${m}`);
  });
}
const _F = async (c) => {
  const { appRelatedPostTypesEndpoint: f, nonce: d } = window.tsfmData || {};
  if (!f || !d)
    return console.error("REST API endpoint or nonce is missing."), null;
  const m = yg(f, { app_id: c });
  try {
    const g = await fetch(m, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-WP-Nonce": d
      }
    });
    if (!g.ok) {
      const w = await g.text();
      return console.error("Error fetching post types:", w), null;
    }
    const T = await g.json();
    return T.success && Array.isArray(T.post_types) ? { post_types: T.post_types } : (console.error("Invalid data structure:", T), null);
  } catch (g) {
    return console.error("Error fetching post types:", g), null;
  }
}, bF = async (c) => {
  const { restBaseEndpoint: f, nonce: d } = window.tsfmData;
  if (!f || !d)
    return console.error("Missing restBaseEndpoint or nonce."), 0;
  try {
    const m = await fetch(f + `/${c}?per_page=1`, {
      method: "HEAD",
      headers: {
        "Content-Type": "application/json",
        "X-WP-Nonce": d
      }
    });
    if (!m.ok)
      return console.error("Error fetching post count:", m.statusText), 0;
    const g = m.headers.get("X-WP-Total");
    return g ? parseInt(g, 10) : (console.error("X-WP-Total header not found."), 0);
  } catch (m) {
    return console.error("Error fetching apps:", m), 0;
  }
}, TF = async (c, f) => {
  const { syncAppPosts: d, nonce: m } = window.tsfmData;
  if (!d || !m) {
    const g = "Missing syncAppPosts or nonce.";
    return console.error(g), { error: g };
  }
  try {
    const g = yg(d, { app_id: c, post_type: f }), T = await fetch(g, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-WP-Nonce": m
      }
    }), w = await T.json();
    if (T.ok && w.success)
      return { success: !0 };
    {
      const S = w.message || "Unknown error occurred.";
      return console.error("Error creating app:", S), { error: S };
    }
  } catch (g) {
    const T = g instanceof Error ? g.message : "Unexpected error occurred.";
    return console.error("Error creating app:", T), { error: T };
  }
}, JE = async (c) => {
  const { syncingStatusEndpoint: f, nonce: d } = window.tsfmData || {};
  if (!f || !d)
    return console.error("REST API endpoint or nonce is missing."), null;
  const m = yg(f, { app_id: c });
  try {
    const g = await fetch(m, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-WP-Nonce": d
      }
    });
    if (!g.ok) {
      const w = await g.text();
      return console.error("Error fetching syncing status:", w), null;
    }
    const T = await g.json();
    return T.success && typeof T.post_types == "object" ? Object.entries(T.post_types).map(
      ([w, S]) => ({
        post_type: w,
        total_posts: S.total_posts,
        total_prepared_posts: S.total_prepared_posts,
        unsynced_posts: S.unsynced_posts
      })
    ) : (console.error("Invalid data structure:", T), null);
  } catch (g) {
    return console.error("Error fetching syncing status:", g), null;
  }
};
function IC(c) {
  if (!c)
    return { isValid: !1, expired: !0, payload: null, error: "No token provided" };
  try {
    const f = c.split(".");
    if (f.length !== 3)
      return { isValid: !1, expired: !0, payload: null, error: "Invalid token format" };
    const m = f[1].replace(/-/g, "+").replace(/_/g, "/"), g = atob(m), T = JSON.parse(g), w = Math.floor(Date.now() / 1e3);
    return {
      isValid: !0,
      expired: T.exp ? w >= T.exp : !1,
      payload: T,
      error: null
    };
  } catch (f) {
    return console.error("Error decoding token:", f), { isValid: !1, expired: !0, payload: null, error: "Error decoding token" };
  }
}
const CF = async (c, f) => {
  const { getAppPosts: d, nonce: m } = window.tsfmData;
  if (!d || !m) {
    const g = "Missing getAppPosts or nonce.";
    return console.error(g), { error: g };
  }
  try {
    const g = yg(d, { app_id: c, post_type: f }), T = await fetch(g, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-WP-Nonce": m
      }
    }), w = await T.json();
    return T.ok && w.success ? { posts: w.posts } : (console.error("Error fetching apps:", w.message), { error: w.message });
  } catch (g) {
    const T = g instanceof Error ? g.message : "Unexpected error occurred.";
    return console.error("Error fetching posts:", T), { error: T };
  }
}, wF = ({ app: c, isVisible: f, toggleVisibility: d, relatedPostTypes: m, postTypes: g }) => {
  const T = sn.useRef(null), w = sn.useRef(!1), S = sn.useRef(!1), U = sn.useRef(!1), M = mg(qv), [$, J] = sn.useState(localStorage.getItem("tsfmJwtToken")), [Z, le] = sn.useState(!1), [I, ae] = sn.useState(void 0), [Pe, wt] = sn.useState(null), [De, Te] = sn.useState({ posts: [] }), [ve, Ke] = sn.useState(null), { authEndpoint: Ce, threadEndpoint: qe, theosummaFrontendUrl: Re, nonce: nt, locale: Be } = window.tsfmData, rt = () => JSON.parse(localStorage.getItem("tsfmAppsThreads") || "{}"), _t = (P) => {
    localStorage.setItem("tsfmAppsThreads", JSON.stringify(P));
  }, pt = () => {
    d(!f);
  }, Ie = async () => {
    if (S.current) return null;
    S.current = !0;
    try {
      const Y = await (await fetch(Ce, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-WP-Nonce": nt
        },
        body: JSON.stringify({}),
        credentials: "include"
      })).json();
      return Y.success && Y.token ? (localStorage.setItem("tsfmJwtToken", Y.token), J(Y.token), S.current = !1, Y.token) : (console.error("Failed to create token:", Y.message), alert("An error occurred while authenticating."), S.current = !1, null);
    } catch (P) {
      return console.error("Error creating token:", P), alert("An error occurred while authenticating."), S.current = !1, null;
    }
  }, ct = async (P = null) => {
    if (U.current) return null;
    U.current = !0;
    const Y = {
      locale: Be,
      app_id: c.app_id
    };
    P && (Y.post_id = P);
    try {
      const se = await (await fetch(qe, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-WP-Nonce": nt
        },
        body: JSON.stringify(Y),
        credentials: "include"
      })).json(), ke = se != null && se.thread_data ? JSON.parse(se.thread_data) : null;
      if (se.success && (ke != null && ke.thread_id)) {
        const Ae = rt();
        return c.has_posts ? ve && ve.post_id && (Ae[c.ID] = { [ve.post_id]: ke.thread_id }) : Ae[c.ID] = ke.thread_id, _t(Ae), U.current = !1, ke.thread_id;
      } else
        throw new Error("Failed to create thread");
    } catch (ce) {
      return console.error("Error creating thread:", ce), alert("An error occurred while creating thread."), U.current = !1, null;
    }
  }, St = (P, Y) => {
    ae(`${Re}threads/${P}?token=${Y}`);
  }, ft = async (P, Y) => {
    console.log("Checking thread status:", P, Y);
  }, ie = async () => {
    let P = $;
    if (P ? IC(P).expired && (P = await Ie()) : P = await Ie(), c.has_posts) {
      M({
        message: `Select a post type to test "${c.title}".. `,
        type: "info"
      });
      return;
    }
    const Y = rt();
    let ce = "";
    if (c.has_posts || (ce = Y[c.ID]), P && !ce) {
      const se = await ct();
      se && St(se, P);
    } else P && ce && (await ft(ce, P), St(ce, P));
    M({
      message: `You can start testing "${c.title}".. `,
      type: "info"
    });
  };
  sn.useEffect(() => {
    ie();
  }, []);
  const ze = async (P = null) => {
    if (Z) return;
    M({
      message: "The app is generating a new chat.. do not refresh the page or click any button..",
      type: "info"
    });
    const Y = ve;
    wt(null), Ke(null), Te({ posts: [] }), ae(void 0), le(!0);
    let ce = $;
    if (ce) {
      if (IC(ce).expired && (ce = await Ie(), !ce)) {
        le(!1);
        return;
      }
    } else if (ce = await Ie(), !ce) {
      le(!1);
      return;
    }
    const se = await ct(P);
    se && ce && (P && Ke(Y), await ft(se, ce), St(se, ce)), M({
      message: `You can start testing "${c.title}".. `,
      type: "info"
    }), le(!1);
  }, fe = async (P) => {
    if (w.current) return;
    w.current = !0, wt(P);
    const Y = await CF(c.app_id, P);
    Y && Y.posts && Y.posts.length > 0 ? Te({ posts: Y.posts }) : Te({ posts: [] }), M({
      message: "Select a post so you can chat with the post.. ",
      type: "info"
    }), w.current = !1;
  }, A = () => {
    if (!c.has_posts)
      ze();
    else {
      if (c.has_posts && ve && ve.post_id) {
        const P = rt();
        if (P[c.ID] && typeof P[c.ID] == "object") {
          console.log("Deleting thread for post:", ve.post_id);
          const Y = P[c.ID];
          delete Y[ve.post_id], P[c.ID] = Y, _t(P);
        }
      }
      ae(void 0), M({
        message: `Select a post type to test "${c.title}".. `,
        type: "info"
      });
    }
  }, x = async (P) => {
    if (Ke(P), c.has_posts) {
      const Y = rt();
      if (Y[c.ID] && typeof Y[c.ID] == "object" && Y[c.ID][P.post_id] && $) {
        const ce = Y[c.ID][P.post_id];
        await ft(ce, $), St(ce, $), M({
          message: "There is already a chat for this post, continue chatting.. ",
          type: "info"
        });
      }
    }
  };
  return /* @__PURE__ */ re.jsxs("div", { className: "flex flex-col h-full border border-gray-300 rounded-lg overflow-hidden font-sans bg-gray-50", children: [
    /* @__PURE__ */ re.jsxs("div", { className: "flex justify-between items-center bg-tsMain text-black px-4 py-3", children: [
      /* @__PURE__ */ re.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ re.jsx(
          "button",
          {
            type: "button",
            onClick: pt,
            className: "px-4 py-2 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition",
            children: "Back"
          }
        ),
        ve && I && /* @__PURE__ */ re.jsxs("h4", { children: [
          'Chatting with "',
          ve.post_title,
          '"'
        ] })
      ] }),
      I && /* @__PURE__ */ re.jsx(
        "button",
        {
          type: "button",
          onClick: A,
          className: `px-4 py-2 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition ${Z ? "cursor-not-allowed bg-gray-300" : ""}`,
          disabled: Z,
          children: Z ? "Creating new chat..." : "New Chat"
        }
      )
    ] }),
    /* @__PURE__ */ re.jsxs("div", { className: "flex-grow", children: [
      !I && c.has_posts && /* @__PURE__ */ re.jsxs("div", { className: "h-full w-full flex items-stretch", children: [
        m.post_types.length ? /* @__PURE__ */ re.jsx("ul", { className: "border-e-2 h-full p-2 me-2 flex flex-col gap-3 overflow-y-scroll", children: g && m.post_types.map((P, Y) => /* @__PURE__ */ re.jsx(
          "li",
          {
            onClick: () => fe(P),
            className: `bg-white rounded-md p-2 hover:cursor-pointer ${Pe == P ? "border-4" : "border"}`,
            children: g[P].name
          },
          Y
        )) }) : /* @__PURE__ */ re.jsx("p", { className: "text-center text-gray-400", children: "Please sync a post type before you can test the app." }),
        Pe && /* @__PURE__ */ re.jsx("ul", { className: "border-e-2 h-full p-2 me-2 flex flex-col gap-3 overflow-y-scroll", children: De.posts.length > 0 ? De.posts.map((P, Y) => /* @__PURE__ */ re.jsx(
          "li",
          {
            onClick: () => x(P),
            className: `bg-white rounded-md p-2 hover:cursor-pointer ${ve && ve.post_id === P.post_id ? "border-4" : "border"}`,
            children: P.post_title
          },
          Y
        )) : /* @__PURE__ */ re.jsx("p", { className: "text-center text-gray-400", children: "No synced posts found for this post type yet." }) }),
        ve !== null && /* @__PURE__ */ re.jsx("div", { className: "flex justify-center items-center flex-grow", children: /* @__PURE__ */ re.jsx(
          "button",
          {
            type: "button",
            onClick: () => ze(ve == null ? void 0 : ve.post_id),
            className: `px-4 py-2 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition ${Z ? "cursor-not-allowed bg-gray-300" : ""}`,
            disabled: Z,
            children: "Start Chatting.."
          }
        ) })
      ] }),
      I !== void 0 && /* @__PURE__ */ re.jsx(
        "iframe",
        {
          ref: T,
          className: "w-full h-full border-0 overflow-hidden",
          src: I,
          title: "TheoSumma Chat Widget"
        }
      )
    ] })
  ] });
}, xF = ["attachment", "revision", "nav_menu_item"], NF = ({ app: c, onDeleteApp: f }) => {
  const d = window.tsfmData.isAdministratorUser, m = mg(qv), [g, T] = sn.useState(!0), [w, S] = sn.useState(!1), [U, M] = sn.useState(!1), [$, J] = sn.useState(null), [Z, le] = sn.useState({}), [I, ae] = sn.useState({}), [Pe, wt] = sn.useState({ post_types: [] }), [De, Te] = sn.useState([]), ve = sn.useRef(null);
  sn.useEffect(() => (m({ message: "", type: "info" }), T(!0), S(!1), M(!1), J(null), le({}), ae({}), wt({ post_types: [] }), Te([]), (async () => {
    if (d)
      try {
        const Re = await RF();
        Re ? J(Re) : m({ message: "Failed to fetch post types.", type: "error" });
        const nt = await _F(c.app_id);
        nt ? wt(nt) : m({ message: "Failed to fetch related post types.", type: "error" });
        const Be = await JE(c.app_id);
        Be ? Te(Be) : m({ message: "Failed to fetch syncing status.", type: "error" });
      } catch (Re) {
        console.error("Error fetching data:", Re), m({ message: "An unexpected error occurred.", type: "error" });
      }
  })(), () => {
    ve.current && clearInterval(ve.current);
  }), [c.app_id]), sn.useEffect(() => {
    if (d)
      return w && !ve.current && (ve.current = setInterval(async () => {
        const Re = await JE(c.app_id);
        Re ? (Te(Re), !Re.some(
          (Be) => Be.unsynced_posts > 0 || Be.total_posts !== Be.total_prepared_posts
        ) && ve.current && (clearInterval(ve.current), ve.current = null, S(!1), m({
          message: "All syncing processes have completed.",
          type: "success"
        }))) : m({ message: "Failed to fetch syncing status during polling.", type: "error" });
      }, 1e4)), () => {
        !w && ve.current && (clearInterval(ve.current), ve.current = null);
      };
  }, [w, c.app_id, m]);
  const Ke = () => {
    if (!d) return;
    window.confirm(
      "Are you sure you want to delete this app? This action cannot be undone."
    ) && f(c.app_id);
  }, Ce = (Re) => {
    d && wt((nt) => {
      const Be = nt.post_types.includes(Re);
      let rt;
      return Be ? rt = nt.post_types.filter((_t) => _t !== Re) : rt = [...nt.post_types, Re], { ...nt, post_types: rt };
    });
  }, qe = async () => {
    if (!d || w) return;
    S(!0), T(!0), m({
      message: "Your website is feeding TheoSumma AI with the post's data in order to relate the AI answers with the requested post. Please do not refresh or exit this window.",
      type: "info"
    }), ae({}), le({});
    for (const nt of Pe.post_types) {
      const Be = await bF(nt);
      le((rt) => ({ ...rt, [nt]: Be })), ae((rt) => ({ ...rt, [nt]: 0 }));
    }
    for (const nt of Pe.post_types) {
      const Be = await TF(c.app_id, nt);
      Be != null && Be.success ? ae((rt) => ({ ...rt, [nt]: 100 })) : m({
        message: `Failed to sync post type: ${nt}. ${Be.error || ""}`,
        type: "error"
      });
    }
    const Re = await JE(c.app_id);
    Re ? Te(Re) : m({
      message: "Failed to fetch syncing status.",
      type: "error"
    }), m({
      message: "The data was prepared and was sent to TheoSumma AI. It will take time, so we are completing the work behind the scenes. Check the status later.",
      type: "success"
    }), T(!0), S(!1);
  };
  return /* @__PURE__ */ re.jsxs("div", { className: "h-full w-full ", children: [
    /* @__PURE__ */ re.jsxs(
      "div",
      {
        className: `h-full w-full p-4 border border-gray-200 rounded bg-gray-50 overflow-y-scroll ${U ? "hidden" : "flex"} flex-col overflow-y-scroll`,
        children: [
          /* @__PURE__ */ re.jsx("h3", { className: "mb-4 text-xl font-semibold", children: "App Details" }),
          /* @__PURE__ */ re.jsx("table", { className: "table-auto w-full border-collapse border border-gray-300 bg-white rounded-md", children: /* @__PURE__ */ re.jsxs("tbody", { children: [
            /* @__PURE__ */ re.jsxs("tr", { children: [
              /* @__PURE__ */ re.jsx("td", { className: "px-4 py-2 font-semibold border border-gray-200", children: "App ID" }),
              /* @__PURE__ */ re.jsx("td", { className: "px-4 py-2 border border-gray-200", children: c.app_id || "N/A" })
            ] }),
            /* @__PURE__ */ re.jsxs("tr", { children: [
              /* @__PURE__ */ re.jsx("td", { className: "px-4 py-2 font-semibold border border-gray-200", children: "Name" }),
              /* @__PURE__ */ re.jsx("td", { className: "px-4 py-2 border border-gray-200", children: c.title || "N/A" })
            ] }),
            /* @__PURE__ */ re.jsxs("tr", { children: [
              /* @__PURE__ */ re.jsx("td", { className: "px-4 py-2 font-semibold border border-gray-200", children: "Description" }),
              /* @__PURE__ */ re.jsx("td", { className: "px-4 py-2 border border-gray-200", children: c.description || "N/A" })
            ] }),
            c.accept_welcome_message && /* @__PURE__ */ re.jsxs("tr", { children: [
              /* @__PURE__ */ re.jsx("td", { className: "px-4 py-2 font-semibold border border-gray-200", children: "Welcome Message" }),
              /* @__PURE__ */ re.jsx("td", { className: "px-4 py-2 border border-gray-200", children: c.welcome_message_content || "N/A" })
            ] }),
            /* @__PURE__ */ re.jsxs("tr", { children: [
              /* @__PURE__ */ re.jsx("td", { className: "px-4 py-2 font-semibold border border-gray-200", children: "Short Code" }),
              /* @__PURE__ */ re.jsxs("td", { className: "px-4 py-2 border border-gray-200", children: [
                '[tsfm_app app-id="',
                c.ID,
                '"]'
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ re.jsx("div", { className: "mt-4", children: d && c.has_posts && $ && Object.keys($).length > 0 && /* @__PURE__ */ re.jsxs("div", { children: [
            /* @__PURE__ */ re.jsx("h4", { className: "mb-2 font-semibold", children: "Post types available for syncing with TheoSumma: (supports only syncing posts for now)" }),
            /* @__PURE__ */ re.jsx("div", { className: "flex flex-wrap", children: Object.entries($).map(([Re, nt]) => {
              if (xF.includes(Re) || Re.startsWith("wp_"))
                return null;
              const Be = Pe.post_types.includes(nt.slug);
              return /* @__PURE__ */ re.jsxs("span", { className: "inline-flex items-center me-4 mb-2", children: [
                /* @__PURE__ */ re.jsx(
                  "input",
                  {
                    type: "checkbox",
                    disabled: g,
                    checked: Be,
                    onChange: () => Ce(nt.slug),
                    className: "form-checkbox h-4 w-4 text-blue-600"
                  }
                ),
                /* @__PURE__ */ re.jsx("span", { className: "ml-2", children: nt.name })
              ] }, Re);
            }) })
          ] }) }),
          w && /* @__PURE__ */ re.jsxs("div", { className: "flex flex-col gap-3 mt-4", children: [
            /* @__PURE__ */ re.jsx("h4", { className: "mb-2 font-semibold", children: "Sync Progress" }),
            /* @__PURE__ */ re.jsxs("table", { className: "table-auto w-full border-collapse border border-gray-300 bg-white rounded-md", children: [
              /* @__PURE__ */ re.jsx("thead", { children: /* @__PURE__ */ re.jsxs("tr", { children: [
                /* @__PURE__ */ re.jsx("th", { className: "px-4 py-2 border border-gray-200", children: "Post Type" }),
                /* @__PURE__ */ re.jsx("th", { className: "px-4 py-2 border border-gray-200", children: "Progress" })
              ] }) }),
              /* @__PURE__ */ re.jsx("tbody", { children: Pe.post_types.map((Re) => {
                var rt;
                const Be = I[Re] || 0;
                return /* @__PURE__ */ re.jsxs("tr", { children: [
                  /* @__PURE__ */ re.jsxs("td", { className: "px-4 py-2 border border-gray-200", children: [
                    ((rt = $ == null ? void 0 : $[Re]) == null ? void 0 : rt.name) || Re,
                    " (",
                    Z[Re],
                    " to be prepared)"
                  ] }),
                  /* @__PURE__ */ re.jsx("td", { className: "px-4 py-2 border border-gray-200", children: /* @__PURE__ */ re.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ re.jsx("div", { className: "w-full bg-gray-200 rounded", children: /* @__PURE__ */ re.jsx(
                      "div",
                      {
                        className: `${Be === 100 ? "bg-green-600" : "bg-blue-600"} text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded`,
                        style: { width: `${Be}%` },
                        children: Be === 100 ? "Completed" : "In Progress"
                      }
                    ) }),
                    /* @__PURE__ */ re.jsx("span", { className: "text-xs", children: `${Be}%` })
                  ] }) })
                ] }, Re);
              }) })
            ] })
          ] }),
          De.length > 0 && /* @__PURE__ */ re.jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ re.jsx("h4", { className: "mb-2 font-semibold", children: "Syncing Status" }),
            /* @__PURE__ */ re.jsxs("table", { className: "table-auto w-full border-collapse border border-gray-300 bg-white rounded-md", children: [
              /* @__PURE__ */ re.jsx("thead", { children: /* @__PURE__ */ re.jsxs("tr", { children: [
                /* @__PURE__ */ re.jsx("th", { className: "px-4 py-2 border border-gray-200", children: "Post Type" }),
                /* @__PURE__ */ re.jsx("th", { className: "px-4 py-2 border border-gray-200", children: "Total Posts" }),
                /* @__PURE__ */ re.jsx("th", { className: "px-4 py-2 border border-gray-200", children: "Total Prepared Posts" }),
                /* @__PURE__ */ re.jsx("th", { className: "px-4 py-2 border border-gray-200", children: "Total Unsynced Posts" }),
                /* @__PURE__ */ re.jsx("th", { className: "px-4 py-2 border border-gray-200", children: "Syncing Status" })
              ] }) }),
              /* @__PURE__ */ re.jsx("tbody", { children: De.map((Re) => {
                const { post_type: nt, total_posts: Be, total_prepared_posts: rt, unsynced_posts: _t } = Re, pt = $ == null ? void 0 : $[nt], Ie = (pt == null ? void 0 : pt.name) || nt;
                let ct;
                return _t > 0 ? ct = /* @__PURE__ */ re.jsxs("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ re.jsxs(
                    "svg",
                    {
                      className: "animate-spin h-5 w-5 text-blue-600",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      children: [
                        /* @__PURE__ */ re.jsx(
                          "circle",
                          {
                            className: "opacity-25",
                            cx: "12",
                            cy: "12",
                            r: "10",
                            stroke: "currentColor",
                            strokeWidth: "4"
                          }
                        ),
                        /* @__PURE__ */ re.jsx(
                          "path",
                          {
                            className: "opacity-75",
                            fill: "currentColor",
                            d: "M4 12a8 8 0 018-8v8H4z"
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ re.jsx("span", { className: "ml-2 text-blue-600", children: "Syncing in progress..." })
                ] }) : Be !== rt ? ct = /* @__PURE__ */ re.jsx("span", { className: "text-yellow-600 font-semibold", children: "Sync Again" }) : ct = /* @__PURE__ */ re.jsx("span", { className: "text-green-600 font-semibold", children: "Synced" }), /* @__PURE__ */ re.jsxs("tr", { children: [
                  /* @__PURE__ */ re.jsx("td", { className: "px-4 py-2 border border-gray-200", children: Ie }),
                  /* @__PURE__ */ re.jsx("td", { className: "px-4 py-2 border border-gray-200", children: Be }),
                  /* @__PURE__ */ re.jsx("td", { className: "px-4 py-2 border border-gray-200", children: rt }),
                  /* @__PURE__ */ re.jsx("td", { className: "px-4 py-2 border border-gray-200", children: _t }),
                  /* @__PURE__ */ re.jsx("td", { className: "px-4 py-2 border border-gray-200", children: ct })
                ] }, nt);
              }) })
            ] })
          ] }),
          /* @__PURE__ */ re.jsx("div", { className: "flex-grow" }),
          /* @__PURE__ */ re.jsxs(
            "div",
            {
              className: `w-full mt-4 ${g ? "flex" : "hidden"} justify-between gap-3`,
              children: [
                /* @__PURE__ */ re.jsxs("div", { className: "flex gap-3", children: [
                  d && /* @__PURE__ */ re.jsx(
                    "button",
                    {
                      type: "button",
                      className: "rounded-md p-2 bg-red-500 hover:bg-red-600 text-white",
                      onClick: Ke,
                      children: "Delete App"
                    }
                  ),
                  d && c.has_posts && /* @__PURE__ */ re.jsx(
                    "button",
                    {
                      type: "button",
                      className: "rounded-md p-2 bg-blue-500 hover:bg-blue-600 text-white",
                      onClick: () => {
                        T(!g), m({
                          message: 'Select the post types that you want to sync with TheoSumma Service through this Application and then click "Start Syncing Process"',
                          type: "info"
                        });
                      },
                      children: "Sync Posts"
                    }
                  )
                ] }),
                /* @__PURE__ */ re.jsx(
                  "button",
                  {
                    type: "button",
                    className: "rounded-md p-2 bg-tsMain text-dark hover:bg-gray-400 hover:text-white",
                    onClick: () => {
                      M(!U);
                    },
                    children: "Test App"
                  }
                )
              ]
            }
          ),
          d && c.has_posts && /* @__PURE__ */ re.jsxs(
            "div",
            {
              className: `w-full mt-4 ${g ? "hidden" : "flex"} justify-end gap-3`,
              children: [
                /* @__PURE__ */ re.jsx(
                  "button",
                  {
                    type: "button",
                    className: "rounded-md p-2 bg-red-500 hover:bg-red-600 disabled:bg-gray-500 text-white",
                    disabled: w,
                    onClick: () => T(!g),
                    children: "Cancel Syncing Process"
                  }
                ),
                /* @__PURE__ */ re.jsx(
                  "button",
                  {
                    type: "button",
                    className: "rounded-md p-2 bg-green-500 hover:bg-green-600 disabled:bg-gray-500 text-white",
                    disabled: w,
                    onClick: qe,
                    children: "Start Syncing Process"
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    U && /* @__PURE__ */ re.jsx(
      wF,
      {
        app: c,
        isVisible: U,
        postTypes: $,
        relatedPostTypes: Pe,
        toggleVisibility: (Re) => {
          M(Re), m({
            message: "",
            type: "info"
          });
        }
      }
    )
  ] });
}, DF = () => {
  const { message: c, type: f } = SF(qv), [d, m] = sn.useState(""), [g, T] = sn.useState(null);
  sn.useEffect(() => {
    g && g.abort();
    const S = new AbortController();
    return T(S), c ? (async (M, $) => {
      m("");
      for (let J = 0; J < M.length; J++) {
        if ($.aborted)
          return;
        m((Z) => Z + M[J]), await new Promise((Z) => setTimeout(Z, 20));
      }
    })(c, S.signal) : m(""), () => {
      S.abort();
    };
  }, [c]);
  const w = (S) => S === "success" ? "text-green-800 bg-green-100 border border-green-200 p-2 rounded" : S === "error" ? "text-red-800 bg-red-100 border border-red-200 p-2 rounded" : "text-blue-800 bg-blue-100 border border-blue-200 p-2 rounded";
  return d && /* @__PURE__ */ re.jsx("div", { className: `${w(f)} min-h-[1.5em] mt-2`, children: d });
}, kF = async () => {
  const { appCrudEndpoint: c, nonce: f } = window.tsfmData;
  if (!c || !f)
    return console.error("Missing appCrudEndpoint or nonce."), null;
  try {
    const d = await fetch(c, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-WP-Nonce": f
      }
    }), m = await d.json();
    return d.ok && m.success ? m.apps : (console.error("Error fetching apps:", m.message), null);
  } catch (d) {
    return console.error("Error fetching apps:", d), null;
  }
}, AF = async (c) => {
  const { appCrudEndpoint: f, nonce: d } = window.tsfmData;
  if (!f || !d) {
    const m = "Missing appCrudEndpoint or nonce.";
    return console.error(m), { error: m };
  }
  try {
    const m = await fetch(f, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-WP-Nonce": d
      },
      body: JSON.stringify({ "app-id": c })
    }), g = await m.json();
    if (m.ok && g.success && g.app_data)
      return { appData: g.app_data };
    {
      const T = g.message || "Unknown error occurred.";
      return console.error("Error creating app:", T), { error: T };
    }
  } catch (m) {
    const g = m instanceof Error ? m.message : "Unexpected error occurred.";
    return console.error("Error creating app:", g), { error: g };
  }
}, LF = async (c) => {
  const { appCrudEndpoint: f, nonce: d } = window.tsfmData;
  if (!f || !d) {
    const m = "Missing appCrudEndpoint or nonce.";
    return console.error(m), { success: !1, error: m };
  }
  try {
    const m = await fetch(f, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "X-WP-Nonce": d
      },
      body: JSON.stringify({ "app-id": c })
    }), g = await m.json();
    if (m.ok && g.success)
      return { success: !0 };
    {
      const T = g.message || "Unknown error occurred.";
      return console.error("Error deleting app:", T), { success: !1, error: T };
    }
  } catch (m) {
    const g = m instanceof Error ? m.message : "Unexpected error occurred.";
    return console.error("Error deleting app:", g), { success: !1, error: g };
  }
}, OF = () => {
  const c = window.tsfmData.isAdministratorUser, [f, d] = sn.useState([]), [m, g] = sn.useState(null), [T, w] = sn.useState(!1), S = mg(qv);
  sn.useEffect(() => {
    (async () => {
      const I = await kF();
      I ? d(I) : S({ message: "Failed to fetch apps.", type: "error" });
    })();
  }, [S]);
  const U = async (le) => {
    if (!c) return;
    S({ message: "Creating app...", type: "info" });
    const { appData: I, error: ae } = await AF(le);
    I ? (S({ message: "App created successfully!", type: "success" }), d([...f, I]), g(I), w(!1)) : S({ message: ae || "Failed to create the app. Please try again.", type: "error" });
  }, M = async (le) => {
    if (!c || !window.confirm(
      "Are you sure you want to delete this app? This action cannot be undone."
    ))
      return;
    const { success: ae, error: Pe } = await LF(le);
    ae ? (S({ message: "App deleted successfully!", type: "success" }), d(f.filter((wt) => wt.app_id !== le)), g(null)) : S({ message: Pe || "Failed to delete the app. Please try again.", type: "error" });
  }, $ = (le) => {
    g(le), w(!1);
  }, J = () => {
    w(!0), g(null), S({ message: "Please enter the app id provided by Theosumma.", type: "info" });
  }, Z = () => {
    w(!1), S({ message: "", type: "info" });
  };
  return /* @__PURE__ */ re.jsx("div", { className: "container", children: /* @__PURE__ */ re.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ re.jsxs("div", { className: "flex justify-between items-end p-2 bg-white rounded-t-md", style: { minHeight: "5vh" }, children: [
      /* @__PURE__ */ re.jsx("h2", { className: "text-2xl font-bold", children: "TheoSumma Apps Management" }),
      c && /* @__PURE__ */ re.jsx(
        "button",
        {
          className: "rounded-md p-2 bg-primary hover:bg-primary-dark text-white h-full",
          onClick: J,
          children: "Create New App"
        }
      )
    ] }),
    /* @__PURE__ */ re.jsx("div", { style: { height: "77vh" }, className: "overflow-y-auto mt-2 bg-white rounded-b-md p-2", children: /* @__PURE__ */ re.jsxs("div", { className: "flex h-full", children: [
      /* @__PURE__ */ re.jsx("div", { className: "w-1/4 border-r border-gray-200 pr-4 h-full", children: /* @__PURE__ */ re.jsx(dL, { apps: f, onSelectApp: $ }) }),
      /* @__PURE__ */ re.jsxs("div", { className: "w-3/4 pl-4 h-full", children: [
        T && /* @__PURE__ */ re.jsx(EF, { onCreateApp: U, onCancel: Z }),
        !T && m && /* @__PURE__ */ re.jsx(NF, { app: m, onDeleteApp: M }),
        !T && !m && /* @__PURE__ */ re.jsx("div", { className: "h-full w-full flex justify-center items-center", children: /* @__PURE__ */ re.jsx("p", { className: "text-center text-gray-500", children: "Please select or create an app" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ re.jsx("div", { className: "min-h-[5vh] mt-2", children: /* @__PURE__ */ re.jsx(DF, {}) })
  ] }) });
};
document.addEventListener("DOMContentLoaded", async function() {
  cL.createRoot(document.getElementById("tsfm-manage-apps")).render(
    /* @__PURE__ */ re.jsx(sn.StrictMode, { children: /* @__PURE__ */ re.jsx(yF, { children: /* @__PURE__ */ re.jsx(OF, {}) }) })
  );
});
