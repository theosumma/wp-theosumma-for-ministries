var Fm = { exports: {} }, qp = {}, jm = { exports: {} }, yt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qC;
function Jb() {
  if (qC) return yt;
  qC = 1;
  var Z = Symbol.for("react.element"), ae = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), ct = Symbol.for("react.strict_mode"), xt = Symbol.for("react.profiler"), en = Symbol.for("react.provider"), lt = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), ft = Symbol.for("react.suspense"), Ne = Symbol.for("react.memo"), ve = Symbol.for("react.lazy"), Qe = Symbol.iterator;
  function ee(b) {
    return b === null || typeof b != "object" ? null : (b = Qe && b[Qe] || b["@@iterator"], typeof b == "function" ? b : null);
  }
  var Ue = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ue = Object.assign, Ee = {};
  function dt(b, B, De) {
    this.props = b, this.context = B, this.refs = Ee, this.updater = De || Ue;
  }
  dt.prototype.isReactComponent = {}, dt.prototype.setState = function(b, B) {
    if (typeof b != "object" && typeof b != "function" && b != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, b, B, "setState");
  }, dt.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function Fn() {
  }
  Fn.prototype = dt.prototype;
  function on(b, B, De) {
    this.props = b, this.context = B, this.refs = Ee, this.updater = De || Ue;
  }
  var tt = on.prototype = new Fn();
  tt.constructor = on, ue(tt, dt.prototype), tt.isPureReactComponent = !0;
  var je = Array.isArray, kt = Object.prototype.hasOwnProperty, Ce = { current: null }, ot = { key: !0, ref: !0, __self: !0, __source: !0 };
  function $e(b, B, De) {
    var Ve, Xe = {}, nt = null, vt = null;
    if (B != null) for (Ve in B.ref !== void 0 && (vt = B.ref), B.key !== void 0 && (nt = "" + B.key), B) kt.call(B, Ve) && !ot.hasOwnProperty(Ve) && (Xe[Ve] = B[Ve]);
    var ut = arguments.length - 2;
    if (ut === 1) Xe.children = De;
    else if (1 < ut) {
      for (var St = Array(ut), Ht = 0; Ht < ut; Ht++) St[Ht] = arguments[Ht + 2];
      Xe.children = St;
    }
    if (b && b.defaultProps) for (Ve in ut = b.defaultProps, ut) Xe[Ve] === void 0 && (Xe[Ve] = ut[Ve]);
    return { $$typeof: Z, type: b, key: nt, ref: vt, props: Xe, _owner: Ce.current };
  }
  function wn(b, B) {
    return { $$typeof: Z, type: b.type, key: B, ref: b.ref, props: b.props, _owner: b._owner };
  }
  function yn(b) {
    return typeof b == "object" && b !== null && b.$$typeof === Z;
  }
  function Xt(b) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(De) {
      return B[De];
    });
  }
  var gt = /\/+/g;
  function tn(b, B) {
    return typeof b == "object" && b !== null && b.key != null ? Xt("" + b.key) : B.toString(36);
  }
  function He(b, B, De, Ve, Xe) {
    var nt = typeof b;
    (nt === "undefined" || nt === "boolean") && (b = null);
    var vt = !1;
    if (b === null) vt = !0;
    else switch (nt) {
      case "string":
      case "number":
        vt = !0;
        break;
      case "object":
        switch (b.$$typeof) {
          case Z:
          case ae:
            vt = !0;
        }
    }
    if (vt) return vt = b, Xe = Xe(vt), b = Ve === "" ? "." + tn(vt, 0) : Ve, je(Xe) ? (De = "", b != null && (De = b.replace(gt, "$&/") + "/"), He(Xe, B, De, "", function(Ht) {
      return Ht;
    })) : Xe != null && (yn(Xe) && (Xe = wn(Xe, De + (!Xe.key || vt && vt.key === Xe.key ? "" : ("" + Xe.key).replace(gt, "$&/") + "/") + b)), B.push(Xe)), 1;
    if (vt = 0, Ve = Ve === "" ? "." : Ve + ":", je(b)) for (var ut = 0; ut < b.length; ut++) {
      nt = b[ut];
      var St = Ve + tn(nt, ut);
      vt += He(nt, B, De, St, Xe);
    }
    else if (St = ee(b), typeof St == "function") for (b = St.call(b), ut = 0; !(nt = b.next()).done; ) nt = nt.value, St = Ve + tn(nt, ut++), vt += He(nt, B, De, St, Xe);
    else if (nt === "object") throw B = String(b), Error("Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead.");
    return vt;
  }
  function Je(b, B, De) {
    if (b == null) return b;
    var Ve = [], Xe = 0;
    return He(b, Ve, "", "", function(nt) {
      return B.call(De, nt, Xe++);
    }), Ve;
  }
  function Tt(b) {
    if (b._status === -1) {
      var B = b._result;
      B = B(), B.then(function(De) {
        (b._status === 0 || b._status === -1) && (b._status = 1, b._result = De);
      }, function(De) {
        (b._status === 0 || b._status === -1) && (b._status = 2, b._result = De);
      }), b._status === -1 && (b._status = 0, b._result = B);
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var et = { current: null }, P = { transition: null }, he = { ReactCurrentDispatcher: et, ReactCurrentBatchConfig: P, ReactCurrentOwner: Ce };
  function ie() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return yt.Children = { map: Je, forEach: function(b, B, De) {
    Je(b, function() {
      B.apply(this, arguments);
    }, De);
  }, count: function(b) {
    var B = 0;
    return Je(b, function() {
      B++;
    }), B;
  }, toArray: function(b) {
    return Je(b, function(B) {
      return B;
    }) || [];
  }, only: function(b) {
    if (!yn(b)) throw Error("React.Children.only expected to receive a single React element child.");
    return b;
  } }, yt.Component = dt, yt.Fragment = A, yt.Profiler = xt, yt.PureComponent = on, yt.StrictMode = ct, yt.Suspense = ft, yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = he, yt.act = ie, yt.cloneElement = function(b, B, De) {
    if (b == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + b + ".");
    var Ve = ue({}, b.props), Xe = b.key, nt = b.ref, vt = b._owner;
    if (B != null) {
      if (B.ref !== void 0 && (nt = B.ref, vt = Ce.current), B.key !== void 0 && (Xe = "" + B.key), b.type && b.type.defaultProps) var ut = b.type.defaultProps;
      for (St in B) kt.call(B, St) && !ot.hasOwnProperty(St) && (Ve[St] = B[St] === void 0 && ut !== void 0 ? ut[St] : B[St]);
    }
    var St = arguments.length - 2;
    if (St === 1) Ve.children = De;
    else if (1 < St) {
      ut = Array(St);
      for (var Ht = 0; Ht < St; Ht++) ut[Ht] = arguments[Ht + 2];
      Ve.children = ut;
    }
    return { $$typeof: Z, type: b.type, key: Xe, ref: nt, props: Ve, _owner: vt };
  }, yt.createContext = function(b) {
    return b = { $$typeof: lt, _currentValue: b, _currentValue2: b, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, b.Provider = { $$typeof: en, _context: b }, b.Consumer = b;
  }, yt.createElement = $e, yt.createFactory = function(b) {
    var B = $e.bind(null, b);
    return B.type = b, B;
  }, yt.createRef = function() {
    return { current: null };
  }, yt.forwardRef = function(b) {
    return { $$typeof: S, render: b };
  }, yt.isValidElement = yn, yt.lazy = function(b) {
    return { $$typeof: ve, _payload: { _status: -1, _result: b }, _init: Tt };
  }, yt.memo = function(b, B) {
    return { $$typeof: Ne, type: b, compare: B === void 0 ? null : B };
  }, yt.startTransition = function(b) {
    var B = P.transition;
    P.transition = {};
    try {
      b();
    } finally {
      P.transition = B;
    }
  }, yt.unstable_act = ie, yt.useCallback = function(b, B) {
    return et.current.useCallback(b, B);
  }, yt.useContext = function(b) {
    return et.current.useContext(b);
  }, yt.useDebugValue = function() {
  }, yt.useDeferredValue = function(b) {
    return et.current.useDeferredValue(b);
  }, yt.useEffect = function(b, B) {
    return et.current.useEffect(b, B);
  }, yt.useId = function() {
    return et.current.useId();
  }, yt.useImperativeHandle = function(b, B, De) {
    return et.current.useImperativeHandle(b, B, De);
  }, yt.useInsertionEffect = function(b, B) {
    return et.current.useInsertionEffect(b, B);
  }, yt.useLayoutEffect = function(b, B) {
    return et.current.useLayoutEffect(b, B);
  }, yt.useMemo = function(b, B) {
    return et.current.useMemo(b, B);
  }, yt.useReducer = function(b, B, De) {
    return et.current.useReducer(b, B, De);
  }, yt.useRef = function(b) {
    return et.current.useRef(b);
  }, yt.useState = function(b) {
    return et.current.useState(b);
  }, yt.useSyncExternalStore = function(b, B, De) {
    return et.current.useSyncExternalStore(b, B, De);
  }, yt.useTransition = function() {
    return et.current.useTransition();
  }, yt.version = "18.3.1", yt;
}
var Kp = { exports: {} };
Kp.exports;
var XC;
function eD() {
  return XC || (XC = 1, function(Z, ae) {
    var A = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    A.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var ct = "18.3.1", xt = Symbol.for("react.element"), en = Symbol.for("react.portal"), lt = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), ft = Symbol.for("react.profiler"), Ne = Symbol.for("react.provider"), ve = Symbol.for("react.context"), Qe = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), Ue = Symbol.for("react.suspense_list"), ue = Symbol.for("react.memo"), Ee = Symbol.for("react.lazy"), dt = Symbol.for("react.offscreen"), Fn = Symbol.iterator, on = "@@iterator";
      function tt(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = Fn && h[Fn] || h[on];
        return typeof C == "function" ? C : null;
      }
      var je = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, kt = {
        transition: null
      }, Ce = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ot = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, $e = {}, wn = null;
      function yn(h) {
        wn = h;
      }
      $e.setExtraStackFrame = function(h) {
        wn = h;
      }, $e.getCurrentStack = null, $e.getStackAddendum = function() {
        var h = "";
        wn && (h += wn);
        var C = $e.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var Xt = !1, gt = !1, tn = !1, He = !1, Je = !1, Tt = {
        ReactCurrentDispatcher: je,
        ReactCurrentBatchConfig: kt,
        ReactCurrentOwner: ot
      };
      Tt.ReactDebugCurrentFrame = $e, Tt.ReactCurrentActQueue = Ce;
      function et(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            M[F - 1] = arguments[F];
          he("warn", h, M);
        }
      }
      function P(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            M[F - 1] = arguments[F];
          he("error", h, M);
        }
      }
      function he(h, C, M) {
        {
          var F = Tt.ReactDebugCurrentFrame, X = F.getStackAddendum();
          X !== "" && (C += "%s", M = M.concat([X]));
          var ge = M.map(function(fe) {
            return String(fe);
          });
          ge.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, ge);
        }
      }
      var ie = {};
      function b(h, C) {
        {
          var M = h.constructor, F = M && (M.displayName || M.name) || "ReactClass", X = F + "." + C;
          if (ie[X])
            return;
          P("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, F), ie[X] = !0;
        }
      }
      var B = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
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
        enqueueForceUpdate: function(h, C, M) {
          b(h, "forceUpdate");
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
        enqueueReplaceState: function(h, C, M, F) {
          b(h, "replaceState");
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
        enqueueSetState: function(h, C, M, F) {
          b(h, "setState");
        }
      }, De = Object.assign, Ve = {};
      Object.freeze(Ve);
      function Xe(h, C, M) {
        this.props = h, this.context = C, this.refs = Ve, this.updater = M || B;
      }
      Xe.prototype.isReactComponent = {}, Xe.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Xe.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var nt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, vt = function(h, C) {
          Object.defineProperty(Xe.prototype, h, {
            get: function() {
              et("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var ut in nt)
          nt.hasOwnProperty(ut) && vt(ut, nt[ut]);
      }
      function St() {
      }
      St.prototype = Xe.prototype;
      function Ht(h, C, M) {
        this.props = h, this.context = C, this.refs = Ve, this.updater = M || B;
      }
      var qn = Ht.prototype = new St();
      qn.constructor = Ht, De(qn, Xe.prototype), qn.isPureReactComponent = !0;
      function Fr() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var cr = Array.isArray;
      function gn(h) {
        return cr(h);
      }
      function Xn(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, M = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return M;
        }
      }
      function jn(h) {
        try {
          return xn(h), !1;
        } catch {
          return !0;
        }
      }
      function xn(h) {
        return "" + h;
      }
      function On(h) {
        if (jn(h))
          return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xn(h)), xn(h);
      }
      function yr(h, C, M) {
        var F = h.displayName;
        if (F)
          return F;
        var X = C.displayName || C.name || "";
        return X !== "" ? M + "(" + X + ")" : M;
      }
      function fr(h) {
        return h.displayName || "Context";
      }
      function Hn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case lt:
            return "Fragment";
          case en:
            return "Portal";
          case ft:
            return "Profiler";
          case S:
            return "StrictMode";
          case ee:
            return "Suspense";
          case Ue:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case ve:
              var C = h;
              return fr(C) + ".Consumer";
            case Ne:
              var M = h;
              return fr(M._context) + ".Provider";
            case Qe:
              return yr(h, h.render, "ForwardRef");
            case ue:
              var F = h.displayName || null;
              return F !== null ? F : Hn(h.type) || "Memo";
            case Ee: {
              var X = h, ge = X._payload, fe = X._init;
              try {
                return Hn(fe(ge));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var na = Object.prototype.hasOwnProperty, ra = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, dr, aa, Kn;
      Kn = {};
      function gr(h) {
        if (na.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function sn(h) {
        if (na.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function ia(h, C) {
        var M = function() {
          dr || (dr = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: M,
          configurable: !0
        });
      }
      function la(h, C) {
        var M = function() {
          aa || (aa = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: M,
          configurable: !0
        });
      }
      function ua(h) {
        if (typeof h.ref == "string" && ot.current && h.__self && ot.current.stateNode !== h.__self) {
          var C = Hn(ot.current.type);
          Kn[C] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), Kn[C] = !0);
        }
      }
      var te = function(h, C, M, F, X, ge, fe) {
        var Pe = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: xt,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: M,
          props: fe,
          // Record the component responsible for creating this element.
          _owner: ge
        };
        return Pe._store = {}, Object.defineProperty(Pe._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Pe, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: F
        }), Object.defineProperty(Pe, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: X
        }), Object.freeze && (Object.freeze(Pe.props), Object.freeze(Pe)), Pe;
      };
      function be(h, C, M) {
        var F, X = {}, ge = null, fe = null, Pe = null, it = null;
        if (C != null) {
          gr(C) && (fe = C.ref, ua(C)), sn(C) && (On(C.key), ge = "" + C.key), Pe = C.__self === void 0 ? null : C.__self, it = C.__source === void 0 ? null : C.__source;
          for (F in C)
            na.call(C, F) && !ra.hasOwnProperty(F) && (X[F] = C[F]);
        }
        var Ft = arguments.length - 2;
        if (Ft === 1)
          X.children = M;
        else if (Ft > 1) {
          for (var Pt = Array(Ft), Bt = 0; Bt < Ft; Bt++)
            Pt[Bt] = arguments[Bt + 2];
          Object.freeze && Object.freeze(Pt), X.children = Pt;
        }
        if (h && h.defaultProps) {
          var $t = h.defaultProps;
          for (F in $t)
            X[F] === void 0 && (X[F] = $t[F]);
        }
        if (ge || fe) {
          var rn = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          ge && ia(X, rn), fe && la(X, rn);
        }
        return te(h, ge, fe, Pe, it, ot.current, X);
      }
      function rt(h, C) {
        var M = te(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return M;
      }
      function zt(h, C, M) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var F, X = De({}, h.props), ge = h.key, fe = h.ref, Pe = h._self, it = h._source, Ft = h._owner;
        if (C != null) {
          gr(C) && (fe = C.ref, Ft = ot.current), sn(C) && (On(C.key), ge = "" + C.key);
          var Pt;
          h.type && h.type.defaultProps && (Pt = h.type.defaultProps);
          for (F in C)
            na.call(C, F) && !ra.hasOwnProperty(F) && (C[F] === void 0 && Pt !== void 0 ? X[F] = Pt[F] : X[F] = C[F]);
        }
        var Bt = arguments.length - 2;
        if (Bt === 1)
          X.children = M;
        else if (Bt > 1) {
          for (var $t = Array(Bt), rn = 0; rn < Bt; rn++)
            $t[rn] = arguments[rn + 2];
          X.children = $t;
        }
        return te(h.type, ge, fe, Pe, it, Ft, X);
      }
      function Ot(h) {
        return typeof h == "object" && h !== null && h.$$typeof === xt;
      }
      var _n = ".", dn = ":";
      function pr(h) {
        var C = /[=:]/g, M = {
          "=": "=0",
          ":": "=2"
        }, F = h.replace(C, function(X) {
          return M[X];
        });
        return "$" + F;
      }
      var Vt = !1, $n = /\/+/g;
      function Ut(h) {
        return h.replace($n, "$&/");
      }
      function Kt(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (On(h.key), pr("" + h.key)) : C.toString(36);
      }
      function Ga(h, C, M, F, X) {
        var ge = typeof h;
        (ge === "undefined" || ge === "boolean") && (h = null);
        var fe = !1;
        if (h === null)
          fe = !0;
        else
          switch (ge) {
            case "string":
            case "number":
              fe = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case xt:
                case en:
                  fe = !0;
              }
          }
        if (fe) {
          var Pe = h, it = X(Pe), Ft = F === "" ? _n + Kt(Pe, 0) : F;
          if (gn(it)) {
            var Pt = "";
            Ft != null && (Pt = Ut(Ft) + "/"), Ga(it, C, Pt, "", function(Vf) {
              return Vf;
            });
          } else it != null && (Ot(it) && (it.key && (!Pe || Pe.key !== it.key) && On(it.key), it = rt(
            it,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            M + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (it.key && (!Pe || Pe.key !== it.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Ut("" + it.key) + "/"
            ) : "") + Ft
          )), C.push(it));
          return 1;
        }
        var Bt, $t, rn = 0, wt = F === "" ? _n : F + dn;
        if (gn(h))
          for (var wl = 0; wl < h.length; wl++)
            Bt = h[wl], $t = wt + Kt(Bt, wl), rn += Ga(Bt, C, M, $t, X);
        else {
          var Ju = tt(h);
          if (typeof Ju == "function") {
            var is = h;
            Ju === is.entries && (Vt || et("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Vt = !0);
            for (var ls = Ju.call(is), Pi, us = 0; !(Pi = ls.next()).done; )
              Bt = Pi.value, $t = wt + Kt(Bt, us++), rn += Ga(Bt, C, M, $t, X);
          } else if (ge === "object") {
            var os = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (os === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : os) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return rn;
      }
      function ba(h, C, M) {
        if (h == null)
          return h;
        var F = [], X = 0;
        return Ga(h, F, "", "", function(ge) {
          return C.call(M, ge, X++);
        }), F;
      }
      function hl(h) {
        var C = 0;
        return ba(h, function() {
          C++;
        }), C;
      }
      function nu(h, C, M) {
        ba(h, function() {
          C.apply(this, arguments);
        }, M);
      }
      function ru(h) {
        return ba(h, function(C) {
          return C;
        }) || [];
      }
      function ml(h) {
        if (!Ot(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function qa(h) {
        var C = {
          $$typeof: ve,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
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
        C.Provider = {
          $$typeof: Ne,
          _context: C
        };
        var M = !1, F = !1, X = !1;
        {
          var ge = {
            $$typeof: ve,
            _context: C
          };
          Object.defineProperties(ge, {
            Provider: {
              get: function() {
                return F || (F = !0, P("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(fe) {
                C.Provider = fe;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(fe) {
                C._currentValue = fe;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(fe) {
                C._currentValue2 = fe;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(fe) {
                C._threadCount = fe;
              }
            },
            Consumer: {
              get: function() {
                return M || (M = !0, P("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(fe) {
                X || (et("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", fe), X = !0);
              }
            }
          }), C.Consumer = ge;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var Xa = -1, Da = 0, Ni = 1, Sr = 2;
      function jr(h) {
        if (h._status === Xa) {
          var C = h._result, M = C();
          if (M.then(function(ge) {
            if (h._status === Da || h._status === Xa) {
              var fe = h;
              fe._status = Ni, fe._result = ge;
            }
          }, function(ge) {
            if (h._status === Da || h._status === Xa) {
              var fe = h;
              fe._status = Sr, fe._result = ge;
            }
          }), h._status === Xa) {
            var F = h;
            F._status = Da, F._result = M;
          }
        }
        if (h._status === Ni) {
          var X = h._result;
          return X === void 0 && P(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, X), "default" in X || P(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, X), X.default;
        } else
          throw h._result;
      }
      function oa(h) {
        var C = {
          // We use these fields to store the result.
          _status: Xa,
          _result: h
        }, M = {
          $$typeof: Ee,
          _payload: C,
          _init: jr
        };
        {
          var F, X;
          Object.defineProperties(M, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return F;
              },
              set: function(ge) {
                P("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), F = ge, Object.defineProperty(M, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return X;
              },
              set: function(ge) {
                P("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), X = ge, Object.defineProperty(M, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return M;
      }
      function zi(h) {
        h != null && h.$$typeof === ue ? P("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? P("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && P("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && P("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Qe,
          render: h
        };
        {
          var M;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return M;
            },
            set: function(F) {
              M = F, !h.name && !h.displayName && (h.displayName = F);
            }
          });
        }
        return C;
      }
      var yl;
      yl = Symbol.for("react.module.reference");
      function R(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === lt || h === ft || Je || h === S || h === ee || h === Ue || He || h === dt || Xt || gt || tn || typeof h == "object" && h !== null && (h.$$typeof === Ee || h.$$typeof === ue || h.$$typeof === Ne || h.$$typeof === ve || h.$$typeof === Qe || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === yl || h.getModuleId !== void 0));
      }
      function I(h, C) {
        R(h) || P("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var M = {
          $$typeof: ue,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var F;
          Object.defineProperty(M, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return F;
            },
            set: function(X) {
              F = X, !h.name && !h.displayName && (h.displayName = X);
            }
          });
        }
        return M;
      }
      function W() {
        var h = je.current;
        return h === null && P(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Oe(h) {
        var C = W();
        if (h._context !== void 0) {
          var M = h._context;
          M.Consumer === h ? P("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : M.Provider === h && P("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function st(h) {
        var C = W();
        return C.useState(h);
      }
      function Et(h, C, M) {
        var F = W();
        return F.useReducer(h, C, M);
      }
      function ze(h) {
        var C = W();
        return C.useRef(h);
      }
      function at(h, C) {
        var M = W();
        return M.useEffect(h, C);
      }
      function Ln(h, C) {
        var M = W();
        return M.useInsertionEffect(h, C);
      }
      function Qt(h, C) {
        var M = W();
        return M.useLayoutEffect(h, C);
      }
      function cn(h, C) {
        var M = W();
        return M.useCallback(h, C);
      }
      function vr(h, C) {
        var M = W();
        return M.useMemo(h, C);
      }
      function At(h, C, M) {
        var F = W();
        return F.useImperativeHandle(h, C, M);
      }
      function ka(h, C) {
        {
          var M = W();
          return M.useDebugValue(h, C);
        }
      }
      function Mn() {
        var h = W();
        return h.useTransition();
      }
      function Hr(h) {
        var C = W();
        return C.useDeferredValue(h);
      }
      function Ke() {
        var h = W();
        return h.useId();
      }
      function Ui(h, C, M) {
        var F = W();
        return F.useSyncExternalStore(h, C, M);
      }
      var Ai = 0, gl, Vr, qo, Er, Xo, Ko, Zo;
      function au() {
      }
      au.__reactDisabledLog = !0;
      function Qu() {
        {
          if (Ai === 0) {
            gl = console.log, Vr = console.info, qo = console.warn, Er = console.error, Xo = console.group, Ko = console.groupCollapsed, Zo = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: au,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          Ai++;
        }
      }
      function Fi() {
        {
          if (Ai--, Ai === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: De({}, h, {
                value: gl
              }),
              info: De({}, h, {
                value: Vr
              }),
              warn: De({}, h, {
                value: qo
              }),
              error: De({}, h, {
                value: Er
              }),
              group: De({}, h, {
                value: Xo
              }),
              groupCollapsed: De({}, h, {
                value: Ko
              }),
              groupEnd: De({}, h, {
                value: Zo
              })
            });
          }
          Ai < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var fi = Tt.ReactCurrentDispatcher, Oa;
      function Sl(h, C, M) {
        {
          if (Oa === void 0)
            try {
              throw Error();
            } catch (X) {
              var F = X.stack.trim().match(/\n( *(at )?)/);
              Oa = F && F[1] || "";
            }
          return `
` + Oa + h;
        }
      }
      var di = !1, iu;
      {
        var lu = typeof WeakMap == "function" ? WeakMap : Map;
        iu = new lu();
      }
      function El(h, C) {
        if (!h || di)
          return "";
        {
          var M = iu.get(h);
          if (M !== void 0)
            return M;
        }
        var F;
        di = !0;
        var X = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var ge;
        ge = fi.current, fi.current = null, Qu();
        try {
          if (C) {
            var fe = function() {
              throw Error();
            };
            if (Object.defineProperty(fe.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(fe, []);
              } catch (wt) {
                F = wt;
              }
              Reflect.construct(h, [], fe);
            } else {
              try {
                fe.call();
              } catch (wt) {
                F = wt;
              }
              h.call(fe.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (wt) {
              F = wt;
            }
            h();
          }
        } catch (wt) {
          if (wt && F && typeof wt.stack == "string") {
            for (var Pe = wt.stack.split(`
`), it = F.stack.split(`
`), Ft = Pe.length - 1, Pt = it.length - 1; Ft >= 1 && Pt >= 0 && Pe[Ft] !== it[Pt]; )
              Pt--;
            for (; Ft >= 1 && Pt >= 0; Ft--, Pt--)
              if (Pe[Ft] !== it[Pt]) {
                if (Ft !== 1 || Pt !== 1)
                  do
                    if (Ft--, Pt--, Pt < 0 || Pe[Ft] !== it[Pt]) {
                      var Bt = `
` + Pe[Ft].replace(" at new ", " at ");
                      return h.displayName && Bt.includes("<anonymous>") && (Bt = Bt.replace("<anonymous>", h.displayName)), typeof h == "function" && iu.set(h, Bt), Bt;
                    }
                  while (Ft >= 1 && Pt >= 0);
                break;
              }
          }
        } finally {
          di = !1, fi.current = ge, Fi(), Error.prepareStackTrace = X;
        }
        var $t = h ? h.displayName || h.name : "", rn = $t ? Sl($t) : "";
        return typeof h == "function" && iu.set(h, rn), rn;
      }
      function Jo(h, C, M) {
        return El(h, !1);
      }
      function es(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function ht(h, C, M) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return El(h, es(h));
        if (typeof h == "string")
          return Sl(h);
        switch (h) {
          case ee:
            return Sl("Suspense");
          case Ue:
            return Sl("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Qe:
              return Jo(h.render);
            case ue:
              return ht(h.type, C, M);
            case Ee: {
              var F = h, X = F._payload, ge = F._init;
              try {
                return ht(ge(X), C, M);
              } catch {
              }
            }
          }
        return "";
      }
      var ts = {}, Wu = Tt.ReactDebugCurrentFrame;
      function Cl(h) {
        if (h) {
          var C = h._owner, M = ht(h.type, h._source, C ? C.type : null);
          Wu.setExtraStackFrame(M);
        } else
          Wu.setExtraStackFrame(null);
      }
      function ns(h, C, M, F, X) {
        {
          var ge = Function.call.bind(na);
          for (var fe in h)
            if (ge(h, fe)) {
              var Pe = void 0;
              try {
                if (typeof h[fe] != "function") {
                  var it = Error((F || "React class") + ": " + M + " type `" + fe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[fe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw it.name = "Invariant Violation", it;
                }
                Pe = h[fe](C, fe, F, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ft) {
                Pe = Ft;
              }
              Pe && !(Pe instanceof Error) && (Cl(X), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", M, fe, typeof Pe), Cl(null)), Pe instanceof Error && !(Pe.message in ts) && (ts[Pe.message] = !0, Cl(X), P("Failed %s type: %s", M, Pe.message), Cl(null));
            }
        }
      }
      function mt(h) {
        if (h) {
          var C = h._owner, M = ht(h.type, h._source, C ? C.type : null);
          yn(M);
        } else
          yn(null);
      }
      var Gu;
      Gu = !1;
      function uu() {
        if (ot.current) {
          var h = Hn(ot.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Ye(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), M = h.lineNumber;
          return `

Check your code at ` + C + ":" + M + ".";
        }
        return "";
      }
      function Ka(h) {
        return h != null ? Ye(h.__source) : "";
      }
      var pn = {};
      function Pr(h) {
        var C = uu();
        if (!C) {
          var M = typeof h == "string" ? h : h.displayName || h.name;
          M && (C = `

Check the top-level render call using <` + M + ">.");
        }
        return C;
      }
      function La(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var M = Pr(C);
          if (!pn[M]) {
            pn[M] = !0;
            var F = "";
            h && h._owner && h._owner !== ot.current && (F = " It was passed a child from " + Hn(h._owner.type) + "."), mt(h), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, F), mt(null);
          }
        }
      }
      function Rl(h, C) {
        if (typeof h == "object") {
          if (gn(h))
            for (var M = 0; M < h.length; M++) {
              var F = h[M];
              Ot(F) && La(F, C);
            }
          else if (Ot(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var X = tt(h);
            if (typeof X == "function" && X !== h.entries)
              for (var ge = X.call(h), fe; !(fe = ge.next()).done; )
                Ot(fe.value) && La(fe.value, C);
          }
        }
      }
      function nn(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var M;
          if (typeof C == "function")
            M = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === Qe || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === ue))
            M = C.propTypes;
          else
            return;
          if (M) {
            var F = Hn(C);
            ns(M, h.props, "prop", F, h);
          } else if (C.PropTypes !== void 0 && !Gu) {
            Gu = !0;
            var X = Hn(C);
            P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", X || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function vn(h) {
        {
          for (var C = Object.keys(h.props), M = 0; M < C.length; M++) {
            var F = C[M];
            if (F !== "children" && F !== "key") {
              mt(h), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), mt(null);
              break;
            }
          }
          h.ref !== null && (mt(h), P("Invalid attribute `ref` supplied to `React.Fragment`."), mt(null));
        }
      }
      function rs(h, C, M) {
        var F = R(h);
        if (!F) {
          var X = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (X += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ge = Ka(C);
          ge ? X += ge : X += uu();
          var fe;
          h === null ? fe = "null" : gn(h) ? fe = "array" : h !== void 0 && h.$$typeof === xt ? (fe = "<" + (Hn(h.type) || "Unknown") + " />", X = " Did you accidentally export a JSX literal instead of a component?") : fe = typeof h, P("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", fe, X);
        }
        var Pe = be.apply(this, arguments);
        if (Pe == null)
          return Pe;
        if (F)
          for (var it = 2; it < arguments.length; it++)
            Rl(arguments[it], h);
        return h === lt ? vn(Pe) : nn(Pe), Pe;
      }
      var Zn = !1;
      function Br(h) {
        var C = rs.bind(null, h);
        return C.type = h, Zn || (Zn = !0, et("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return et("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Za(h, C, M) {
        for (var F = zt.apply(this, arguments), X = 2; X < arguments.length; X++)
          Rl(arguments[X], F.type);
        return nn(F), F;
      }
      function qu(h, C) {
        var M = kt.transition;
        kt.transition = {};
        var F = kt.transition;
        kt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (kt.transition = M, M === null && F._updatedFibers) {
            var X = F._updatedFibers.size;
            X > 10 && et("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), F._updatedFibers.clear();
          }
        }
      }
      var ou = !1, su = null;
      function Tl(h) {
        if (su === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), M = Z && Z[C];
            su = M.call(Z, "timers").setImmediate;
          } catch {
            su = function(X) {
              ou === !1 && (ou = !0, typeof MessageChannel > "u" && P("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var ge = new MessageChannel();
              ge.port1.onmessage = X, ge.port2.postMessage(void 0);
            };
          }
        return su(h);
      }
      var Ma = 0, ji = !1;
      function cu(h) {
        {
          var C = Ma;
          Ma++, Ce.current === null && (Ce.current = []);
          var M = Ce.isBatchingLegacy, F;
          try {
            if (Ce.isBatchingLegacy = !0, F = h(), !M && Ce.didScheduleLegacyUpdate) {
              var X = Ce.current;
              X !== null && (Ce.didScheduleLegacyUpdate = !1, Vi(X));
            }
          } catch ($t) {
            throw Hi(C), $t;
          } finally {
            Ce.isBatchingLegacy = M;
          }
          if (F !== null && typeof F == "object" && typeof F.then == "function") {
            var ge = F, fe = !1, Pe = {
              then: function($t, rn) {
                fe = !0, ge.then(function(wt) {
                  Hi(C), Ma === 0 ? Xu(wt, $t, rn) : $t(wt);
                }, function(wt) {
                  Hi(C), rn(wt);
                });
              }
            };
            return !ji && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              fe || (ji = !0, P("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Pe;
          } else {
            var it = F;
            if (Hi(C), Ma === 0) {
              var Ft = Ce.current;
              Ft !== null && (Vi(Ft), Ce.current = null);
              var Pt = {
                then: function($t, rn) {
                  Ce.current === null ? (Ce.current = [], Xu(it, $t, rn)) : $t(it);
                }
              };
              return Pt;
            } else {
              var Bt = {
                then: function($t, rn) {
                  $t(it);
                }
              };
              return Bt;
            }
          }
        }
      }
      function Hi(h) {
        h !== Ma - 1 && P("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ma = h;
      }
      function Xu(h, C, M) {
        {
          var F = Ce.current;
          if (F !== null)
            try {
              Vi(F), Tl(function() {
                F.length === 0 ? (Ce.current = null, C(h)) : Xu(h, C, M);
              });
            } catch (X) {
              M(X);
            }
          else
            C(h);
        }
      }
      var pi = !1;
      function Vi(h) {
        if (!pi) {
          pi = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var M = h[C];
              do
                M = M(!0);
              while (M !== null);
            }
            h.length = 0;
          } catch (F) {
            throw h = h.slice(C + 1), F;
          } finally {
            pi = !1;
          }
        }
      }
      var Ku = rs, as = Za, Ja = Br, Zu = {
        map: ba,
        forEach: nu,
        count: hl,
        toArray: ru,
        only: ml
      };
      ae.Children = Zu, ae.Component = Xe, ae.Fragment = lt, ae.Profiler = ft, ae.PureComponent = Ht, ae.StrictMode = S, ae.Suspense = ee, ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tt, ae.act = cu, ae.cloneElement = as, ae.createContext = qa, ae.createElement = Ku, ae.createFactory = Ja, ae.createRef = Fr, ae.forwardRef = zi, ae.isValidElement = Ot, ae.lazy = oa, ae.memo = I, ae.startTransition = qu, ae.unstable_act = cu, ae.useCallback = cn, ae.useContext = Oe, ae.useDebugValue = ka, ae.useDeferredValue = Hr, ae.useEffect = at, ae.useId = Ke, ae.useImperativeHandle = At, ae.useInsertionEffect = Ln, ae.useLayoutEffect = Qt, ae.useMemo = vr, ae.useReducer = Et, ae.useRef = ze, ae.useState = st, ae.useSyncExternalStore = Ui, ae.useTransition = Mn, ae.version = ct, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Kp, Kp.exports)), Kp.exports;
}
var KC;
function Zp() {
  if (KC) return jm.exports;
  KC = 1;
  var Z = {};
  return Z.NODE_ENV === "production" ? jm.exports = Jb() : jm.exports = eD(), jm.exports;
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
var ZC;
function tD() {
  if (ZC) return qp;
  ZC = 1;
  var Z = Zp(), ae = Symbol.for("react.element"), A = Symbol.for("react.fragment"), ct = Object.prototype.hasOwnProperty, xt = Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, en = { key: !0, ref: !0, __self: !0, __source: !0 };
  function lt(S, ft, Ne) {
    var ve, Qe = {}, ee = null, Ue = null;
    Ne !== void 0 && (ee = "" + Ne), ft.key !== void 0 && (ee = "" + ft.key), ft.ref !== void 0 && (Ue = ft.ref);
    for (ve in ft) ct.call(ft, ve) && !en.hasOwnProperty(ve) && (Qe[ve] = ft[ve]);
    if (S && S.defaultProps) for (ve in ft = S.defaultProps, ft) Qe[ve] === void 0 && (Qe[ve] = ft[ve]);
    return { $$typeof: ae, type: S, key: ee, ref: Ue, props: Qe, _owner: xt.current };
  }
  return qp.Fragment = A, qp.jsx = lt, qp.jsxs = lt, qp;
}
var Xp = {}, JC;
function nD() {
  if (JC) return Xp;
  JC = 1;
  var Z = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return Z.NODE_ENV !== "production" && function() {
    var ae = Zp(), A = Symbol.for("react.element"), ct = Symbol.for("react.portal"), xt = Symbol.for("react.fragment"), en = Symbol.for("react.strict_mode"), lt = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), ft = Symbol.for("react.context"), Ne = Symbol.for("react.forward_ref"), ve = Symbol.for("react.suspense"), Qe = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), Ue = Symbol.for("react.lazy"), ue = Symbol.for("react.offscreen"), Ee = Symbol.iterator, dt = "@@iterator";
    function Fn(R) {
      if (R === null || typeof R != "object")
        return null;
      var I = Ee && R[Ee] || R[dt];
      return typeof I == "function" ? I : null;
    }
    var on = ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function tt(R) {
      {
        for (var I = arguments.length, W = new Array(I > 1 ? I - 1 : 0), Oe = 1; Oe < I; Oe++)
          W[Oe - 1] = arguments[Oe];
        je("error", R, W);
      }
    }
    function je(R, I, W) {
      {
        var Oe = on.ReactDebugCurrentFrame, st = Oe.getStackAddendum();
        st !== "" && (I += "%s", W = W.concat([st]));
        var Et = W.map(function(ze) {
          return String(ze);
        });
        Et.unshift("Warning: " + I), Function.prototype.apply.call(console[R], console, Et);
      }
    }
    var kt = !1, Ce = !1, ot = !1, $e = !1, wn = !1, yn;
    yn = Symbol.for("react.module.reference");
    function Xt(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === xt || R === lt || wn || R === en || R === ve || R === Qe || $e || R === ue || kt || Ce || ot || typeof R == "object" && R !== null && (R.$$typeof === Ue || R.$$typeof === ee || R.$$typeof === S || R.$$typeof === ft || R.$$typeof === Ne || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === yn || R.getModuleId !== void 0));
    }
    function gt(R, I, W) {
      var Oe = R.displayName;
      if (Oe)
        return Oe;
      var st = I.displayName || I.name || "";
      return st !== "" ? W + "(" + st + ")" : W;
    }
    function tn(R) {
      return R.displayName || "Context";
    }
    function He(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && tt("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case xt:
          return "Fragment";
        case ct:
          return "Portal";
        case lt:
          return "Profiler";
        case en:
          return "StrictMode";
        case ve:
          return "Suspense";
        case Qe:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case ft:
            var I = R;
            return tn(I) + ".Consumer";
          case S:
            var W = R;
            return tn(W._context) + ".Provider";
          case Ne:
            return gt(R, R.render, "ForwardRef");
          case ee:
            var Oe = R.displayName || null;
            return Oe !== null ? Oe : He(R.type) || "Memo";
          case Ue: {
            var st = R, Et = st._payload, ze = st._init;
            try {
              return He(ze(Et));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Je = Object.assign, Tt = 0, et, P, he, ie, b, B, De;
    function Ve() {
    }
    Ve.__reactDisabledLog = !0;
    function Xe() {
      {
        if (Tt === 0) {
          et = console.log, P = console.info, he = console.warn, ie = console.error, b = console.group, B = console.groupCollapsed, De = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: Ve,
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
        Tt++;
      }
    }
    function nt() {
      {
        if (Tt--, Tt === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Je({}, R, {
              value: et
            }),
            info: Je({}, R, {
              value: P
            }),
            warn: Je({}, R, {
              value: he
            }),
            error: Je({}, R, {
              value: ie
            }),
            group: Je({}, R, {
              value: b
            }),
            groupCollapsed: Je({}, R, {
              value: B
            }),
            groupEnd: Je({}, R, {
              value: De
            })
          });
        }
        Tt < 0 && tt("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var vt = on.ReactCurrentDispatcher, ut;
    function St(R, I, W) {
      {
        if (ut === void 0)
          try {
            throw Error();
          } catch (st) {
            var Oe = st.stack.trim().match(/\n( *(at )?)/);
            ut = Oe && Oe[1] || "";
          }
        return `
` + ut + R;
      }
    }
    var Ht = !1, qn;
    {
      var Fr = typeof WeakMap == "function" ? WeakMap : Map;
      qn = new Fr();
    }
    function cr(R, I) {
      if (!R || Ht)
        return "";
      {
        var W = qn.get(R);
        if (W !== void 0)
          return W;
      }
      var Oe;
      Ht = !0;
      var st = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Et;
      Et = vt.current, vt.current = null, Xe();
      try {
        if (I) {
          var ze = function() {
            throw Error();
          };
          if (Object.defineProperty(ze.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ze, []);
            } catch (Mn) {
              Oe = Mn;
            }
            Reflect.construct(R, [], ze);
          } else {
            try {
              ze.call();
            } catch (Mn) {
              Oe = Mn;
            }
            R.call(ze.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Mn) {
            Oe = Mn;
          }
          R();
        }
      } catch (Mn) {
        if (Mn && Oe && typeof Mn.stack == "string") {
          for (var at = Mn.stack.split(`
`), Ln = Oe.stack.split(`
`), Qt = at.length - 1, cn = Ln.length - 1; Qt >= 1 && cn >= 0 && at[Qt] !== Ln[cn]; )
            cn--;
          for (; Qt >= 1 && cn >= 0; Qt--, cn--)
            if (at[Qt] !== Ln[cn]) {
              if (Qt !== 1 || cn !== 1)
                do
                  if (Qt--, cn--, cn < 0 || at[Qt] !== Ln[cn]) {
                    var vr = `
` + at[Qt].replace(" at new ", " at ");
                    return R.displayName && vr.includes("<anonymous>") && (vr = vr.replace("<anonymous>", R.displayName)), typeof R == "function" && qn.set(R, vr), vr;
                  }
                while (Qt >= 1 && cn >= 0);
              break;
            }
        }
      } finally {
        Ht = !1, vt.current = Et, nt(), Error.prepareStackTrace = st;
      }
      var At = R ? R.displayName || R.name : "", ka = At ? St(At) : "";
      return typeof R == "function" && qn.set(R, ka), ka;
    }
    function gn(R, I, W) {
      return cr(R, !1);
    }
    function Xn(R) {
      var I = R.prototype;
      return !!(I && I.isReactComponent);
    }
    function jn(R, I, W) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return cr(R, Xn(R));
      if (typeof R == "string")
        return St(R);
      switch (R) {
        case ve:
          return St("Suspense");
        case Qe:
          return St("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case Ne:
            return gn(R.render);
          case ee:
            return jn(R.type, I, W);
          case Ue: {
            var Oe = R, st = Oe._payload, Et = Oe._init;
            try {
              return jn(Et(st), I, W);
            } catch {
            }
          }
        }
      return "";
    }
    var xn = Object.prototype.hasOwnProperty, On = {}, yr = on.ReactDebugCurrentFrame;
    function fr(R) {
      if (R) {
        var I = R._owner, W = jn(R.type, R._source, I ? I.type : null);
        yr.setExtraStackFrame(W);
      } else
        yr.setExtraStackFrame(null);
    }
    function Hn(R, I, W, Oe, st) {
      {
        var Et = Function.call.bind(xn);
        for (var ze in R)
          if (Et(R, ze)) {
            var at = void 0;
            try {
              if (typeof R[ze] != "function") {
                var Ln = Error((Oe || "React class") + ": " + W + " type `" + ze + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[ze] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ln.name = "Invariant Violation", Ln;
              }
              at = R[ze](I, ze, Oe, W, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Qt) {
              at = Qt;
            }
            at && !(at instanceof Error) && (fr(st), tt("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Oe || "React class", W, ze, typeof at), fr(null)), at instanceof Error && !(at.message in On) && (On[at.message] = !0, fr(st), tt("Failed %s type: %s", W, at.message), fr(null));
          }
      }
    }
    var na = Array.isArray;
    function ra(R) {
      return na(R);
    }
    function dr(R) {
      {
        var I = typeof Symbol == "function" && Symbol.toStringTag, W = I && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return W;
      }
    }
    function aa(R) {
      try {
        return Kn(R), !1;
      } catch {
        return !0;
      }
    }
    function Kn(R) {
      return "" + R;
    }
    function gr(R) {
      if (aa(R))
        return tt("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", dr(R)), Kn(R);
    }
    var sn = on.ReactCurrentOwner, ia = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, la, ua, te;
    te = {};
    function be(R) {
      if (xn.call(R, "ref")) {
        var I = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function rt(R) {
      if (xn.call(R, "key")) {
        var I = Object.getOwnPropertyDescriptor(R, "key").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function zt(R, I) {
      if (typeof R.ref == "string" && sn.current && I && sn.current.stateNode !== I) {
        var W = He(sn.current.type);
        te[W] || (tt('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', He(sn.current.type), R.ref), te[W] = !0);
      }
    }
    function Ot(R, I) {
      {
        var W = function() {
          la || (la = !0, tt("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        W.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: W,
          configurable: !0
        });
      }
    }
    function _n(R, I) {
      {
        var W = function() {
          ua || (ua = !0, tt("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        W.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: W,
          configurable: !0
        });
      }
    }
    var dn = function(R, I, W, Oe, st, Et, ze) {
      var at = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: A,
        // Built-in properties that belong on the element
        type: R,
        key: I,
        ref: W,
        props: ze,
        // Record the component responsible for creating this element.
        _owner: Et
      };
      return at._store = {}, Object.defineProperty(at._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(at, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Oe
      }), Object.defineProperty(at, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: st
      }), Object.freeze && (Object.freeze(at.props), Object.freeze(at)), at;
    };
    function pr(R, I, W, Oe, st) {
      {
        var Et, ze = {}, at = null, Ln = null;
        W !== void 0 && (gr(W), at = "" + W), rt(I) && (gr(I.key), at = "" + I.key), be(I) && (Ln = I.ref, zt(I, st));
        for (Et in I)
          xn.call(I, Et) && !ia.hasOwnProperty(Et) && (ze[Et] = I[Et]);
        if (R && R.defaultProps) {
          var Qt = R.defaultProps;
          for (Et in Qt)
            ze[Et] === void 0 && (ze[Et] = Qt[Et]);
        }
        if (at || Ln) {
          var cn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          at && Ot(ze, cn), Ln && _n(ze, cn);
        }
        return dn(R, at, Ln, st, Oe, sn.current, ze);
      }
    }
    var Vt = on.ReactCurrentOwner, $n = on.ReactDebugCurrentFrame;
    function Ut(R) {
      if (R) {
        var I = R._owner, W = jn(R.type, R._source, I ? I.type : null);
        $n.setExtraStackFrame(W);
      } else
        $n.setExtraStackFrame(null);
    }
    var Kt;
    Kt = !1;
    function Ga(R) {
      return typeof R == "object" && R !== null && R.$$typeof === A;
    }
    function ba() {
      {
        if (Vt.current) {
          var R = He(Vt.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function hl(R) {
      return "";
    }
    var nu = {};
    function ru(R) {
      {
        var I = ba();
        if (!I) {
          var W = typeof R == "string" ? R : R.displayName || R.name;
          W && (I = `

Check the top-level render call using <` + W + ">.");
        }
        return I;
      }
    }
    function ml(R, I) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var W = ru(I);
        if (nu[W])
          return;
        nu[W] = !0;
        var Oe = "";
        R && R._owner && R._owner !== Vt.current && (Oe = " It was passed a child from " + He(R._owner.type) + "."), Ut(R), tt('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', W, Oe), Ut(null);
      }
    }
    function qa(R, I) {
      {
        if (typeof R != "object")
          return;
        if (ra(R))
          for (var W = 0; W < R.length; W++) {
            var Oe = R[W];
            Ga(Oe) && ml(Oe, I);
          }
        else if (Ga(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var st = Fn(R);
          if (typeof st == "function" && st !== R.entries)
            for (var Et = st.call(R), ze; !(ze = Et.next()).done; )
              Ga(ze.value) && ml(ze.value, I);
        }
      }
    }
    function Xa(R) {
      {
        var I = R.type;
        if (I == null || typeof I == "string")
          return;
        var W;
        if (typeof I == "function")
          W = I.propTypes;
        else if (typeof I == "object" && (I.$$typeof === Ne || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        I.$$typeof === ee))
          W = I.propTypes;
        else
          return;
        if (W) {
          var Oe = He(I);
          Hn(W, R.props, "prop", Oe, R);
        } else if (I.PropTypes !== void 0 && !Kt) {
          Kt = !0;
          var st = He(I);
          tt("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", st || "Unknown");
        }
        typeof I.getDefaultProps == "function" && !I.getDefaultProps.isReactClassApproved && tt("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Da(R) {
      {
        for (var I = Object.keys(R.props), W = 0; W < I.length; W++) {
          var Oe = I[W];
          if (Oe !== "children" && Oe !== "key") {
            Ut(R), tt("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Oe), Ut(null);
            break;
          }
        }
        R.ref !== null && (Ut(R), tt("Invalid attribute `ref` supplied to `React.Fragment`."), Ut(null));
      }
    }
    var Ni = {};
    function Sr(R, I, W, Oe, st, Et) {
      {
        var ze = Xt(R);
        if (!ze) {
          var at = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (at += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ln = hl();
          Ln ? at += Ln : at += ba();
          var Qt;
          R === null ? Qt = "null" : ra(R) ? Qt = "array" : R !== void 0 && R.$$typeof === A ? (Qt = "<" + (He(R.type) || "Unknown") + " />", at = " Did you accidentally export a JSX literal instead of a component?") : Qt = typeof R, tt("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Qt, at);
        }
        var cn = pr(R, I, W, st, Et);
        if (cn == null)
          return cn;
        if (ze) {
          var vr = I.children;
          if (vr !== void 0)
            if (Oe)
              if (ra(vr)) {
                for (var At = 0; At < vr.length; At++)
                  qa(vr[At], R);
                Object.freeze && Object.freeze(vr);
              } else
                tt("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              qa(vr, R);
        }
        if (xn.call(I, "key")) {
          var ka = He(R), Mn = Object.keys(I).filter(function(Ui) {
            return Ui !== "key";
          }), Hr = Mn.length > 0 ? "{key: someKey, " + Mn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ni[ka + Hr]) {
            var Ke = Mn.length > 0 ? "{" + Mn.join(": ..., ") + ": ...}" : "{}";
            tt(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Hr, ka, Ke, ka), Ni[ka + Hr] = !0;
          }
        }
        return R === xt ? Da(cn) : Xa(cn), cn;
      }
    }
    function jr(R, I, W) {
      return Sr(R, I, W, !0);
    }
    function oa(R, I, W) {
      return Sr(R, I, W, !1);
    }
    var zi = oa, yl = jr;
    Xp.Fragment = xt, Xp.jsx = zi, Xp.jsxs = yl;
  }(), Xp;
}
var eR;
function rD() {
  if (eR) return Fm.exports;
  eR = 1;
  var Z = {};
  return Z.NODE_ENV === "production" ? Fm.exports = tD() : Fm.exports = nD(), Fm.exports;
}
var _a = rD(), oR = Zp(), Hf = {}, Hm = { exports: {} }, Qa = {}, Vm = { exports: {} }, dS = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tR;
function aD() {
  return tR || (tR = 1, function(Z) {
    function ae(P, he) {
      var ie = P.length;
      P.push(he);
      e: for (; 0 < ie; ) {
        var b = ie - 1 >>> 1, B = P[b];
        if (0 < xt(B, he)) P[b] = he, P[ie] = B, ie = b;
        else break e;
      }
    }
    function A(P) {
      return P.length === 0 ? null : P[0];
    }
    function ct(P) {
      if (P.length === 0) return null;
      var he = P[0], ie = P.pop();
      if (ie !== he) {
        P[0] = ie;
        e: for (var b = 0, B = P.length, De = B >>> 1; b < De; ) {
          var Ve = 2 * (b + 1) - 1, Xe = P[Ve], nt = Ve + 1, vt = P[nt];
          if (0 > xt(Xe, ie)) nt < B && 0 > xt(vt, Xe) ? (P[b] = vt, P[nt] = ie, b = nt) : (P[b] = Xe, P[Ve] = ie, b = Ve);
          else if (nt < B && 0 > xt(vt, ie)) P[b] = vt, P[nt] = ie, b = nt;
          else break e;
        }
      }
      return he;
    }
    function xt(P, he) {
      var ie = P.sortIndex - he.sortIndex;
      return ie !== 0 ? ie : P.id - he.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var en = performance;
      Z.unstable_now = function() {
        return en.now();
      };
    } else {
      var lt = Date, S = lt.now();
      Z.unstable_now = function() {
        return lt.now() - S;
      };
    }
    var ft = [], Ne = [], ve = 1, Qe = null, ee = 3, Ue = !1, ue = !1, Ee = !1, dt = typeof setTimeout == "function" ? setTimeout : null, Fn = typeof clearTimeout == "function" ? clearTimeout : null, on = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function tt(P) {
      for (var he = A(Ne); he !== null; ) {
        if (he.callback === null) ct(Ne);
        else if (he.startTime <= P) ct(Ne), he.sortIndex = he.expirationTime, ae(ft, he);
        else break;
        he = A(Ne);
      }
    }
    function je(P) {
      if (Ee = !1, tt(P), !ue) if (A(ft) !== null) ue = !0, Tt(kt);
      else {
        var he = A(Ne);
        he !== null && et(je, he.startTime - P);
      }
    }
    function kt(P, he) {
      ue = !1, Ee && (Ee = !1, Fn($e), $e = -1), Ue = !0;
      var ie = ee;
      try {
        for (tt(he), Qe = A(ft); Qe !== null && (!(Qe.expirationTime > he) || P && !Xt()); ) {
          var b = Qe.callback;
          if (typeof b == "function") {
            Qe.callback = null, ee = Qe.priorityLevel;
            var B = b(Qe.expirationTime <= he);
            he = Z.unstable_now(), typeof B == "function" ? Qe.callback = B : Qe === A(ft) && ct(ft), tt(he);
          } else ct(ft);
          Qe = A(ft);
        }
        if (Qe !== null) var De = !0;
        else {
          var Ve = A(Ne);
          Ve !== null && et(je, Ve.startTime - he), De = !1;
        }
        return De;
      } finally {
        Qe = null, ee = ie, Ue = !1;
      }
    }
    var Ce = !1, ot = null, $e = -1, wn = 5, yn = -1;
    function Xt() {
      return !(Z.unstable_now() - yn < wn);
    }
    function gt() {
      if (ot !== null) {
        var P = Z.unstable_now();
        yn = P;
        var he = !0;
        try {
          he = ot(!0, P);
        } finally {
          he ? tn() : (Ce = !1, ot = null);
        }
      } else Ce = !1;
    }
    var tn;
    if (typeof on == "function") tn = function() {
      on(gt);
    };
    else if (typeof MessageChannel < "u") {
      var He = new MessageChannel(), Je = He.port2;
      He.port1.onmessage = gt, tn = function() {
        Je.postMessage(null);
      };
    } else tn = function() {
      dt(gt, 0);
    };
    function Tt(P) {
      ot = P, Ce || (Ce = !0, tn());
    }
    function et(P, he) {
      $e = dt(function() {
        P(Z.unstable_now());
      }, he);
    }
    Z.unstable_IdlePriority = 5, Z.unstable_ImmediatePriority = 1, Z.unstable_LowPriority = 4, Z.unstable_NormalPriority = 3, Z.unstable_Profiling = null, Z.unstable_UserBlockingPriority = 2, Z.unstable_cancelCallback = function(P) {
      P.callback = null;
    }, Z.unstable_continueExecution = function() {
      ue || Ue || (ue = !0, Tt(kt));
    }, Z.unstable_forceFrameRate = function(P) {
      0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : wn = 0 < P ? Math.floor(1e3 / P) : 5;
    }, Z.unstable_getCurrentPriorityLevel = function() {
      return ee;
    }, Z.unstable_getFirstCallbackNode = function() {
      return A(ft);
    }, Z.unstable_next = function(P) {
      switch (ee) {
        case 1:
        case 2:
        case 3:
          var he = 3;
          break;
        default:
          he = ee;
      }
      var ie = ee;
      ee = he;
      try {
        return P();
      } finally {
        ee = ie;
      }
    }, Z.unstable_pauseExecution = function() {
    }, Z.unstable_requestPaint = function() {
    }, Z.unstable_runWithPriority = function(P, he) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var ie = ee;
      ee = P;
      try {
        return he();
      } finally {
        ee = ie;
      }
    }, Z.unstable_scheduleCallback = function(P, he, ie) {
      var b = Z.unstable_now();
      switch (typeof ie == "object" && ie !== null ? (ie = ie.delay, ie = typeof ie == "number" && 0 < ie ? b + ie : b) : ie = b, P) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return B = ie + B, P = { id: ve++, callback: he, priorityLevel: P, startTime: ie, expirationTime: B, sortIndex: -1 }, ie > b ? (P.sortIndex = ie, ae(Ne, P), A(ft) === null && P === A(Ne) && (Ee ? (Fn($e), $e = -1) : Ee = !0, et(je, ie - b))) : (P.sortIndex = B, ae(ft, P), ue || Ue || (ue = !0, Tt(kt))), P;
    }, Z.unstable_shouldYield = Xt, Z.unstable_wrapCallback = function(P) {
      var he = ee;
      return function() {
        var ie = ee;
        ee = he;
        try {
          return P.apply(this, arguments);
        } finally {
          ee = ie;
        }
      };
    };
  }(dS)), dS;
}
var pS = {}, nR;
function iD() {
  return nR || (nR = 1, function(Z) {
    var ae = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    ae.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var A = !1, ct = !1, xt = 5;
      function en(te, be) {
        var rt = te.length;
        te.push(be), ft(te, be, rt);
      }
      function lt(te) {
        return te.length === 0 ? null : te[0];
      }
      function S(te) {
        if (te.length === 0)
          return null;
        var be = te[0], rt = te.pop();
        return rt !== be && (te[0] = rt, Ne(te, rt, 0)), be;
      }
      function ft(te, be, rt) {
        for (var zt = rt; zt > 0; ) {
          var Ot = zt - 1 >>> 1, _n = te[Ot];
          if (ve(_n, be) > 0)
            te[Ot] = be, te[zt] = _n, zt = Ot;
          else
            return;
        }
      }
      function Ne(te, be, rt) {
        for (var zt = rt, Ot = te.length, _n = Ot >>> 1; zt < _n; ) {
          var dn = (zt + 1) * 2 - 1, pr = te[dn], Vt = dn + 1, $n = te[Vt];
          if (ve(pr, be) < 0)
            Vt < Ot && ve($n, pr) < 0 ? (te[zt] = $n, te[Vt] = be, zt = Vt) : (te[zt] = pr, te[dn] = be, zt = dn);
          else if (Vt < Ot && ve($n, be) < 0)
            te[zt] = $n, te[Vt] = be, zt = Vt;
          else
            return;
        }
      }
      function ve(te, be) {
        var rt = te.sortIndex - be.sortIndex;
        return rt !== 0 ? rt : te.id - be.id;
      }
      var Qe = 1, ee = 2, Ue = 3, ue = 4, Ee = 5;
      function dt(te, be) {
      }
      var Fn = typeof performance == "object" && typeof performance.now == "function";
      if (Fn) {
        var on = performance;
        Z.unstable_now = function() {
          return on.now();
        };
      } else {
        var tt = Date, je = tt.now();
        Z.unstable_now = function() {
          return tt.now() - je;
        };
      }
      var kt = 1073741823, Ce = -1, ot = 250, $e = 5e3, wn = 1e4, yn = kt, Xt = [], gt = [], tn = 1, He = null, Je = Ue, Tt = !1, et = !1, P = !1, he = typeof setTimeout == "function" ? setTimeout : null, ie = typeof clearTimeout == "function" ? clearTimeout : null, b = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function B(te) {
        for (var be = lt(gt); be !== null; ) {
          if (be.callback === null)
            S(gt);
          else if (be.startTime <= te)
            S(gt), be.sortIndex = be.expirationTime, en(Xt, be);
          else
            return;
          be = lt(gt);
        }
      }
      function De(te) {
        if (P = !1, B(te), !et)
          if (lt(Xt) !== null)
            et = !0, gr(Ve);
          else {
            var be = lt(gt);
            be !== null && sn(De, be.startTime - te);
          }
      }
      function Ve(te, be) {
        et = !1, P && (P = !1, ia()), Tt = !0;
        var rt = Je;
        try {
          var zt;
          if (!ct) return Xe(te, be);
        } finally {
          He = null, Je = rt, Tt = !1;
        }
      }
      function Xe(te, be) {
        var rt = be;
        for (B(rt), He = lt(Xt); He !== null && !A && !(He.expirationTime > rt && (!te || fr())); ) {
          var zt = He.callback;
          if (typeof zt == "function") {
            He.callback = null, Je = He.priorityLevel;
            var Ot = He.expirationTime <= rt, _n = zt(Ot);
            rt = Z.unstable_now(), typeof _n == "function" ? He.callback = _n : He === lt(Xt) && S(Xt), B(rt);
          } else
            S(Xt);
          He = lt(Xt);
        }
        if (He !== null)
          return !0;
        var dn = lt(gt);
        return dn !== null && sn(De, dn.startTime - rt), !1;
      }
      function nt(te, be) {
        switch (te) {
          case Qe:
          case ee:
          case Ue:
          case ue:
          case Ee:
            break;
          default:
            te = Ue;
        }
        var rt = Je;
        Je = te;
        try {
          return be();
        } finally {
          Je = rt;
        }
      }
      function vt(te) {
        var be;
        switch (Je) {
          case Qe:
          case ee:
          case Ue:
            be = Ue;
            break;
          default:
            be = Je;
            break;
        }
        var rt = Je;
        Je = be;
        try {
          return te();
        } finally {
          Je = rt;
        }
      }
      function ut(te) {
        var be = Je;
        return function() {
          var rt = Je;
          Je = be;
          try {
            return te.apply(this, arguments);
          } finally {
            Je = rt;
          }
        };
      }
      function St(te, be, rt) {
        var zt = Z.unstable_now(), Ot;
        if (typeof rt == "object" && rt !== null) {
          var _n = rt.delay;
          typeof _n == "number" && _n > 0 ? Ot = zt + _n : Ot = zt;
        } else
          Ot = zt;
        var dn;
        switch (te) {
          case Qe:
            dn = Ce;
            break;
          case ee:
            dn = ot;
            break;
          case Ee:
            dn = yn;
            break;
          case ue:
            dn = wn;
            break;
          case Ue:
          default:
            dn = $e;
            break;
        }
        var pr = Ot + dn, Vt = {
          id: tn++,
          callback: be,
          priorityLevel: te,
          startTime: Ot,
          expirationTime: pr,
          sortIndex: -1
        };
        return Ot > zt ? (Vt.sortIndex = Ot, en(gt, Vt), lt(Xt) === null && Vt === lt(gt) && (P ? ia() : P = !0, sn(De, Ot - zt))) : (Vt.sortIndex = pr, en(Xt, Vt), !et && !Tt && (et = !0, gr(Ve))), Vt;
      }
      function Ht() {
      }
      function qn() {
        !et && !Tt && (et = !0, gr(Ve));
      }
      function Fr() {
        return lt(Xt);
      }
      function cr(te) {
        te.callback = null;
      }
      function gn() {
        return Je;
      }
      var Xn = !1, jn = null, xn = -1, On = xt, yr = -1;
      function fr() {
        var te = Z.unstable_now() - yr;
        return !(te < On);
      }
      function Hn() {
      }
      function na(te) {
        if (te < 0 || te > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        te > 0 ? On = Math.floor(1e3 / te) : On = xt;
      }
      var ra = function() {
        if (jn !== null) {
          var te = Z.unstable_now();
          yr = te;
          var be = !0, rt = !0;
          try {
            rt = jn(be, te);
          } finally {
            rt ? dr() : (Xn = !1, jn = null);
          }
        } else
          Xn = !1;
      }, dr;
      if (typeof b == "function")
        dr = function() {
          b(ra);
        };
      else if (typeof MessageChannel < "u") {
        var aa = new MessageChannel(), Kn = aa.port2;
        aa.port1.onmessage = ra, dr = function() {
          Kn.postMessage(null);
        };
      } else
        dr = function() {
          he(ra, 0);
        };
      function gr(te) {
        jn = te, Xn || (Xn = !0, dr());
      }
      function sn(te, be) {
        xn = he(function() {
          te(Z.unstable_now());
        }, be);
      }
      function ia() {
        ie(xn), xn = -1;
      }
      var la = Hn, ua = null;
      Z.unstable_IdlePriority = Ee, Z.unstable_ImmediatePriority = Qe, Z.unstable_LowPriority = ue, Z.unstable_NormalPriority = Ue, Z.unstable_Profiling = ua, Z.unstable_UserBlockingPriority = ee, Z.unstable_cancelCallback = cr, Z.unstable_continueExecution = qn, Z.unstable_forceFrameRate = na, Z.unstable_getCurrentPriorityLevel = gn, Z.unstable_getFirstCallbackNode = Fr, Z.unstable_next = vt, Z.unstable_pauseExecution = Ht, Z.unstable_requestPaint = la, Z.unstable_runWithPriority = nt, Z.unstable_scheduleCallback = St, Z.unstable_shouldYield = fr, Z.unstable_wrapCallback = ut, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(pS)), pS;
}
var rR;
function sR() {
  if (rR) return Vm.exports;
  rR = 1;
  var Z = {};
  return Z.NODE_ENV === "production" ? Vm.exports = aD() : Vm.exports = iD(), Vm.exports;
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
var aR;
function lD() {
  if (aR) return Qa;
  aR = 1;
  var Z = Zp(), ae = sR();
  function A(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var ct = /* @__PURE__ */ new Set(), xt = {};
  function en(n, r) {
    lt(n, r), lt(n + "Capture", r);
  }
  function lt(n, r) {
    for (xt[n] = r, n = 0; n < r.length; n++) ct.add(r[n]);
  }
  var S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ft = Object.prototype.hasOwnProperty, Ne = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ve = {}, Qe = {};
  function ee(n) {
    return ft.call(Qe, n) ? !0 : ft.call(ve, n) ? !1 : Ne.test(n) ? Qe[n] = !0 : (ve[n] = !0, !1);
  }
  function Ue(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function ue(n, r, l, o) {
    if (r === null || typeof r > "u" || Ue(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
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
  function Ee(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var dt = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    dt[n] = new Ee(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    dt[r] = new Ee(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    dt[n] = new Ee(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    dt[n] = new Ee(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    dt[n] = new Ee(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    dt[n] = new Ee(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    dt[n] = new Ee(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    dt[n] = new Ee(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    dt[n] = new Ee(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Fn = /[\-:]([a-z])/g;
  function on(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Fn,
      on
    );
    dt[r] = new Ee(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Fn, on);
    dt[r] = new Ee(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Fn, on);
    dt[r] = new Ee(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    dt[n] = new Ee(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), dt.xlinkHref = new Ee("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    dt[n] = new Ee(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function tt(n, r, l, o) {
    var c = dt.hasOwnProperty(r) ? dt[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ue(r, l, c, o) && (l = null), o || c === null ? ee(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var je = Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, kt = Symbol.for("react.element"), Ce = Symbol.for("react.portal"), ot = Symbol.for("react.fragment"), $e = Symbol.for("react.strict_mode"), wn = Symbol.for("react.profiler"), yn = Symbol.for("react.provider"), Xt = Symbol.for("react.context"), gt = Symbol.for("react.forward_ref"), tn = Symbol.for("react.suspense"), He = Symbol.for("react.suspense_list"), Je = Symbol.for("react.memo"), Tt = Symbol.for("react.lazy"), et = Symbol.for("react.offscreen"), P = Symbol.iterator;
  function he(n) {
    return n === null || typeof n != "object" ? null : (n = P && n[P] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ie = Object.assign, b;
  function B(n) {
    if (b === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      b = r && r[1] || "";
    }
    return `
` + b + n;
  }
  var De = !1;
  function Ve(n, r) {
    if (!n || De) return "";
    De = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (z) {
          var o = z;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (z) {
          o = z;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (z) {
          o = z;
        }
        n();
      }
    } catch (z) {
      if (z && o && typeof z.stack == "string") {
        for (var c = z.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; ) E--;
        for (; 1 <= m && 0 <= E; m--, E--) if (c[m] !== d[E]) {
          if (m !== 1 || E !== 1)
            do
              if (m--, E--, 0 > E || c[m] !== d[E]) {
                var T = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T;
              }
            while (1 <= m && 0 <= E);
          break;
        }
      }
    } finally {
      De = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? B(n) : "";
  }
  function Xe(n) {
    switch (n.tag) {
      case 5:
        return B(n.type);
      case 16:
        return B("Lazy");
      case 13:
        return B("Suspense");
      case 19:
        return B("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ve(n.type, !1), n;
      case 11:
        return n = Ve(n.type.render, !1), n;
      case 1:
        return n = Ve(n.type, !0), n;
      default:
        return "";
    }
  }
  function nt(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case ot:
        return "Fragment";
      case Ce:
        return "Portal";
      case wn:
        return "Profiler";
      case $e:
        return "StrictMode";
      case tn:
        return "Suspense";
      case He:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case Xt:
        return (n.displayName || "Context") + ".Consumer";
      case yn:
        return (n._context.displayName || "Context") + ".Provider";
      case gt:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Je:
        return r = n.displayName || null, r !== null ? r : nt(n.type) || "Memo";
      case Tt:
        r = n._payload, n = n._init;
        try {
          return nt(n(r));
        } catch {
        }
    }
    return null;
  }
  function vt(n) {
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
        return nt(r);
      case 8:
        return r === $e ? "StrictMode" : "Mode";
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
  function ut(n) {
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
  function St(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Ht(n) {
    var r = St(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function qn(n) {
    n._valueTracker || (n._valueTracker = Ht(n));
  }
  function Fr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = St(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function cr(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function gn(n, r) {
    var l = r.checked;
    return ie({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Xn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = ut(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function jn(n, r) {
    r = r.checked, r != null && tt(n, "checked", r, !1);
  }
  function xn(n, r) {
    jn(n, r);
    var l = ut(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? yr(n, r.type, l) : r.hasOwnProperty("defaultValue") && yr(n, r.type, ut(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function On(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function yr(n, r, l) {
    (r !== "number" || cr(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var fr = Array.isArray;
  function Hn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + ut(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function na(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(A(91));
    return ie({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function ra(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(A(92));
        if (fr(l)) {
          if (1 < l.length) throw Error(A(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: ut(l) };
  }
  function dr(n, r) {
    var l = ut(r.value), o = ut(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function aa(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Kn(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function gr(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Kn(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var sn, ia = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (sn = sn || document.createElement("div"), sn.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = sn.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function la(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var ua = {
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
  }, te = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ua).forEach(function(n) {
    te.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ua[r] = ua[n];
    });
  });
  function be(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || ua.hasOwnProperty(n) && ua[n] ? ("" + r).trim() : r + "px";
  }
  function rt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = be(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var zt = ie({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ot(n, r) {
    if (r) {
      if (zt[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(A(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(A(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(A(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(A(62));
    }
  }
  function _n(n, r) {
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
  var dn = null;
  function pr(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Vt = null, $n = null, Ut = null;
  function Kt(n) {
    if (n = hi(n)) {
      if (typeof Vt != "function") throw Error(A(280));
      var r = n.stateNode;
      r && (r = xc(r), Vt(n.stateNode, n.type, r));
    }
  }
  function Ga(n) {
    $n ? Ut ? Ut.push(n) : Ut = [n] : $n = n;
  }
  function ba() {
    if ($n) {
      var n = $n, r = Ut;
      if (Ut = $n = null, Kt(n), r) for (n = 0; n < r.length; n++) Kt(r[n]);
    }
  }
  function hl(n, r) {
    return n(r);
  }
  function nu() {
  }
  var ru = !1;
  function ml(n, r, l) {
    if (ru) return n(r, l);
    ru = !0;
    try {
      return hl(n, r, l);
    } finally {
      ru = !1, ($n !== null || Ut !== null) && (nu(), ba());
    }
  }
  function qa(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = xc(l);
    if (o === null) return null;
    l = o[r];
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
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(A(231, r, typeof l));
    return l;
  }
  var Xa = !1;
  if (S) try {
    var Da = {};
    Object.defineProperty(Da, "passive", { get: function() {
      Xa = !0;
    } }), window.addEventListener("test", Da, Da), window.removeEventListener("test", Da, Da);
  } catch {
    Xa = !1;
  }
  function Ni(n, r, l, o, c, d, m, E, T) {
    var z = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, z);
    } catch (Q) {
      this.onError(Q);
    }
  }
  var Sr = !1, jr = null, oa = !1, zi = null, yl = { onError: function(n) {
    Sr = !0, jr = n;
  } };
  function R(n, r, l, o, c, d, m, E, T) {
    Sr = !1, jr = null, Ni.apply(yl, arguments);
  }
  function I(n, r, l, o, c, d, m, E, T) {
    if (R.apply(this, arguments), Sr) {
      if (Sr) {
        var z = jr;
        Sr = !1, jr = null;
      } else throw Error(A(198));
      oa || (oa = !0, zi = z);
    }
  }
  function W(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Oe(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function st(n) {
    if (W(n) !== n) throw Error(A(188));
  }
  function Et(n) {
    var r = n.alternate;
    if (!r) {
      if (r = W(n), r === null) throw Error(A(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return st(c), n;
          if (d === o) return st(c), r;
          d = d.sibling;
        }
        throw Error(A(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m) throw Error(A(189));
        }
      }
      if (l.alternate !== o) throw Error(A(190));
    }
    if (l.tag !== 3) throw Error(A(188));
    return l.stateNode.current === l ? n : r;
  }
  function ze(n) {
    return n = Et(n), n !== null ? at(n) : null;
  }
  function at(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = at(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var Ln = ae.unstable_scheduleCallback, Qt = ae.unstable_cancelCallback, cn = ae.unstable_shouldYield, vr = ae.unstable_requestPaint, At = ae.unstable_now, ka = ae.unstable_getCurrentPriorityLevel, Mn = ae.unstable_ImmediatePriority, Hr = ae.unstable_UserBlockingPriority, Ke = ae.unstable_NormalPriority, Ui = ae.unstable_LowPriority, Ai = ae.unstable_IdlePriority, gl = null, Vr = null;
  function qo(n) {
    if (Vr && typeof Vr.onCommitFiberRoot == "function") try {
      Vr.onCommitFiberRoot(gl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Er = Math.clz32 ? Math.clz32 : Zo, Xo = Math.log, Ko = Math.LN2;
  function Zo(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Xo(n) / Ko | 0) | 0;
  }
  var au = 64, Qu = 4194304;
  function Fi(n) {
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
  function fi(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = Fi(E) : (d &= m, d !== 0 && (o = Fi(d)));
    } else m = l & ~c, m !== 0 ? o = Fi(m) : d !== 0 && (o = Fi(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - Er(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function Oa(n, r) {
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
  function Sl(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - Er(d), E = 1 << m, T = c[m];
      T === -1 ? (!(E & l) || E & o) && (c[m] = Oa(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function di(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function iu() {
    var n = au;
    return au <<= 1, !(au & 4194240) && (au = 64), n;
  }
  function lu(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function El(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Er(r), n[r] = l;
  }
  function Jo(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Er(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function es(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Er(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var ht = 0;
  function ts(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Wu, Cl, ns, mt, Gu, uu = !1, Ye = [], Ka = null, pn = null, Pr = null, La = /* @__PURE__ */ new Map(), Rl = /* @__PURE__ */ new Map(), nn = [], vn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function rs(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Ka = null;
        break;
      case "dragenter":
      case "dragleave":
        pn = null;
        break;
      case "mouseover":
      case "mouseout":
        Pr = null;
        break;
      case "pointerover":
      case "pointerout":
        La.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Rl.delete(r.pointerId);
    }
  }
  function Zn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = hi(r), r !== null && Cl(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Br(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Ka = Zn(Ka, n, r, l, o, c), !0;
      case "dragenter":
        return pn = Zn(pn, n, r, l, o, c), !0;
      case "mouseover":
        return Pr = Zn(Pr, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return La.set(d, Zn(La.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Rl.set(d, Zn(Rl.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Za(n) {
    var r = Gi(n.target);
    if (r !== null) {
      var l = W(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Oe(l), r !== null) {
            n.blockedOn = r, Gu(n.priority, function() {
              ns(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function qu(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Ku(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        dn = o, l.target.dispatchEvent(o), dn = null;
      } else return r = hi(l), r !== null && Cl(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function ou(n, r, l) {
    qu(n) && l.delete(r);
  }
  function su() {
    uu = !1, Ka !== null && qu(Ka) && (Ka = null), pn !== null && qu(pn) && (pn = null), Pr !== null && qu(Pr) && (Pr = null), La.forEach(ou), Rl.forEach(ou);
  }
  function Tl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, uu || (uu = !0, ae.unstable_scheduleCallback(ae.unstable_NormalPriority, su)));
  }
  function Ma(n) {
    function r(c) {
      return Tl(c, n);
    }
    if (0 < Ye.length) {
      Tl(Ye[0], n);
      for (var l = 1; l < Ye.length; l++) {
        var o = Ye[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Ka !== null && Tl(Ka, n), pn !== null && Tl(pn, n), Pr !== null && Tl(Pr, n), La.forEach(r), Rl.forEach(r), l = 0; l < nn.length; l++) o = nn[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < nn.length && (l = nn[0], l.blockedOn === null); ) Za(l), l.blockedOn === null && nn.shift();
  }
  var ji = je.ReactCurrentBatchConfig, cu = !0;
  function Hi(n, r, l, o) {
    var c = ht, d = ji.transition;
    ji.transition = null;
    try {
      ht = 1, pi(n, r, l, o);
    } finally {
      ht = c, ji.transition = d;
    }
  }
  function Xu(n, r, l, o) {
    var c = ht, d = ji.transition;
    ji.transition = null;
    try {
      ht = 4, pi(n, r, l, o);
    } finally {
      ht = c, ji.transition = d;
    }
  }
  function pi(n, r, l, o) {
    if (cu) {
      var c = Ku(n, r, l, o);
      if (c === null) Zf(n, r, o, Vi, l), rs(n, o);
      else if (Br(c, n, r, l, o)) o.stopPropagation();
      else if (rs(n, o), r & 4 && -1 < vn.indexOf(n)) {
        for (; c !== null; ) {
          var d = hi(c);
          if (d !== null && Wu(d), d = Ku(n, r, l, o), d === null && Zf(n, r, o, Vi, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else Zf(n, r, o, null, l);
    }
  }
  var Vi = null;
  function Ku(n, r, l, o) {
    if (Vi = null, n = pr(o), n = Gi(n), n !== null) if (r = W(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Oe(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return Vi = n, null;
  }
  function as(n) {
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
        switch (ka()) {
          case Mn:
            return 1;
          case Hr:
            return 4;
          case Ke:
          case Ui:
            return 16;
          case Ai:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ja = null, Zu = null, h = null;
  function C() {
    if (h) return h;
    var n, r = Zu, l = r.length, o, c = "value" in Ja ? Ja.value : Ja.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return h = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function M(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function F() {
    return !0;
  }
  function X() {
    return !1;
  }
  function ge(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? F : X, this.isPropagationStopped = X, this;
    }
    return ie(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = F);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = F);
    }, persist: function() {
    }, isPersistent: F }), r;
  }
  var fe = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Pe = ge(fe), it = ie({}, fe, { view: 0, detail: 0 }), Ft = ge(it), Pt, Bt, $t, rn = ie({}, it, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: hc, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== $t && ($t && n.type === "mousemove" ? (Pt = n.screenX - $t.screenX, Bt = n.screenY - $t.screenY) : Bt = Pt = 0, $t = n), Pt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Bt;
  } }), wt = ge(rn), wl = ie({}, rn, { dataTransfer: 0 }), Ju = ge(wl), is = ie({}, it, { relatedTarget: 0 }), ls = ge(is), Pi = ie({}, fe, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), us = ge(Pi), os = ie({}, fe, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Vf = ge(os), Pm = ie({}, fe, { data: 0 }), Jp = ge(Pm), ev = {
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
  }, Pf = {
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
  }, tv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function nv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = tv[n]) ? !!r[n] : !1;
  }
  function hc() {
    return nv;
  }
  var Bm = ie({}, it, { key: function(n) {
    if (n.key) {
      var r = ev[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = M(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Pf[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: hc, charCode: function(n) {
    return n.type === "keypress" ? M(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? M(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Bi = ge(Bm), $m = ie({}, rn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), mc = ge($m), Bf = ie({}, it, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: hc }), $f = ge(Bf), Ym = ie({}, fe, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), yc = ge(Ym), rv = ie({}, rn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), $r = ge(rv), $i = [9, 13, 27, 32], Sn = S && "CompositionEvent" in window, sa = null;
  S && "documentMode" in document && (sa = document.documentMode);
  var Yf = S && "TextEvent" in window && !sa, ss = S && (!Sn || sa && 8 < sa && 11 >= sa), av = " ", eo = !1;
  function iv(n, r) {
    switch (n) {
      case "keyup":
        return $i.indexOf(r.keyCode) !== -1;
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
  function lv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var xl = !1;
  function Im(n, r) {
    switch (n) {
      case "compositionend":
        return lv(r);
      case "keypress":
        return r.which !== 32 ? null : (eo = !0, av);
      case "textInput":
        return n = r.data, n === av && eo ? null : n;
      default:
        return null;
    }
  }
  function Qm(n, r) {
    if (xl) return n === "compositionend" || !Sn && iv(n, r) ? (n = C(), h = Zu = Ja = null, xl = !1, n) : null;
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
        return ss && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Wm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function If(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Wm[n.type] : r === "textarea";
  }
  function uv(n, r, l, o) {
    Ga(o), r = Tc(r, "onChange"), 0 < r.length && (l = new Pe("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var cs = null, fs = null;
  function ov(n) {
    wv(n, 0);
  }
  function Yi(n) {
    var r = ao(n);
    if (Fr(r)) return n;
  }
  function Qf(n, r) {
    if (n === "change") return r;
  }
  var Wf = !1;
  if (S) {
    var gc;
    if (S) {
      var Gf = "oninput" in document;
      if (!Gf) {
        var sv = document.createElement("div");
        sv.setAttribute("oninput", "return;"), Gf = typeof sv.oninput == "function";
      }
      gc = Gf;
    } else gc = !1;
    Wf = gc && (!document.documentMode || 9 < document.documentMode);
  }
  function cv() {
    cs && (cs.detachEvent("onpropertychange", fv), fs = cs = null);
  }
  function fv(n) {
    if (n.propertyName === "value" && Yi(fs)) {
      var r = [];
      uv(r, fs, n, pr(n)), ml(ov, r);
    }
  }
  function Gm(n, r, l) {
    n === "focusin" ? (cv(), cs = r, fs = l, cs.attachEvent("onpropertychange", fv)) : n === "focusout" && cv();
  }
  function qm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Yi(fs);
  }
  function Xm(n, r) {
    if (n === "click") return Yi(r);
  }
  function Km(n, r) {
    if (n === "input" || n === "change") return Yi(r);
  }
  function dv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ei = typeof Object.is == "function" ? Object.is : dv;
  function to(n, r) {
    if (ei(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!ft.call(r, c) || !ei(n[c], r[c])) return !1;
    }
    return !0;
  }
  function pv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function vv(n, r) {
    var l = pv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = pv(l);
    }
  }
  function hv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? hv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function mv() {
    for (var n = window, r = cr(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = cr(n.document);
    }
    return r;
  }
  function ds(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function fu(n) {
    var r = mv(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && hv(l.ownerDocument.documentElement, l)) {
      if (o !== null && ds(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = vv(l, d);
          var m = vv(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Sc = S && "documentMode" in document && 11 >= document.documentMode, du = null, _l = null, ps = null, qf = !1;
  function yv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    qf || du == null || du !== cr(o) || (o = du, "selectionStart" in o && ds(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ps && to(ps, o) || (ps = o, o = Tc(_l, "onSelect"), 0 < o.length && (r = new Pe("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = du)));
  }
  function Ec(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var no = { animationend: Ec("Animation", "AnimationEnd"), animationiteration: Ec("Animation", "AnimationIteration"), animationstart: Ec("Animation", "AnimationStart"), transitionend: Ec("Transition", "TransitionEnd") }, Cc = {}, gv = {};
  S && (gv = document.createElement("div").style, "AnimationEvent" in window || (delete no.animationend.animation, delete no.animationiteration.animation, delete no.animationstart.animation), "TransitionEvent" in window || delete no.transitionend.transition);
  function vs(n) {
    if (Cc[n]) return Cc[n];
    if (!no[n]) return n;
    var r = no[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in gv) return Cc[n] = r[l];
    return n;
  }
  var hr = vs("animationend"), Xf = vs("animationiteration"), Sv = vs("animationstart"), Ev = vs("transitionend"), Cv = /* @__PURE__ */ new Map(), Rv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function bl(n, r) {
    Cv.set(n, r), en(r, [n]);
  }
  for (var Rc = 0; Rc < Rv.length; Rc++) {
    var hs = Rv[Rc], ms = hs.toLowerCase(), Zm = hs[0].toUpperCase() + hs.slice(1);
    bl(ms, "on" + Zm);
  }
  bl(hr, "onAnimationEnd"), bl(Xf, "onAnimationIteration"), bl(Sv, "onAnimationStart"), bl("dblclick", "onDoubleClick"), bl("focusin", "onFocus"), bl("focusout", "onBlur"), bl(Ev, "onTransitionEnd"), lt("onMouseEnter", ["mouseout", "mouseover"]), lt("onMouseLeave", ["mouseout", "mouseover"]), lt("onPointerEnter", ["pointerout", "pointerover"]), lt("onPointerLeave", ["pointerout", "pointerover"]), en("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), en("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), en("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), en("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), en("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), en("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ii = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Jm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ii));
  function Tv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, I(o, r, void 0, n), n.currentTarget = null;
  }
  function wv(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], T = E.instance, z = E.currentTarget;
          if (E = E.listener, T !== d && c.isPropagationStopped()) break e;
          Tv(c, E, z), d = T;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], T = E.instance, z = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped()) break e;
          Tv(c, E, z), d = T;
        }
      }
    }
    if (oa) throw n = zi, oa = !1, zi = null, n;
  }
  function Wt(n, r) {
    var l = r[ld];
    l === void 0 && (l = r[ld] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (Kf(r, n, 2, !1), l.add(o));
  }
  function ys(n, r, l) {
    var o = 0;
    r && (o |= 4), Kf(l, n, o, r);
  }
  var Qi = "_reactListening" + Math.random().toString(36).slice(2);
  function vi(n) {
    if (!n[Qi]) {
      n[Qi] = !0, ct.forEach(function(l) {
        l !== "selectionchange" && (Jm.has(l) || ys(l, !1, n), ys(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Qi] || (r[Qi] = !0, ys("selectionchange", !1, r));
    }
  }
  function Kf(n, r, l, o) {
    switch (as(r)) {
      case 1:
        var c = Hi;
        break;
      case 4:
        c = Xu;
        break;
      default:
        c = pi;
    }
    l = c.bind(null, r, l, n), c = void 0, !Xa || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Zf(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var E = o.stateNode.containerInfo;
        if (E === c || E.nodeType === 8 && E.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var T = m.tag;
          if ((T === 3 || T === 4) && (T = m.stateNode.containerInfo, T === c || T.nodeType === 8 && T.parentNode === c)) return;
          m = m.return;
        }
        for (; E !== null; ) {
          if (m = Gi(E), m === null) return;
          if (T = m.tag, T === 5 || T === 6) {
            o = d = m;
            continue e;
          }
          E = E.parentNode;
        }
      }
      o = o.return;
    }
    ml(function() {
      var z = d, Q = pr(l), G = [];
      e: {
        var Y = Cv.get(n);
        if (Y !== void 0) {
          var se = Pe, me = n;
          switch (n) {
            case "keypress":
              if (M(l) === 0) break e;
            case "keydown":
            case "keyup":
              se = Bi;
              break;
            case "focusin":
              me = "focus", se = ls;
              break;
            case "focusout":
              me = "blur", se = ls;
              break;
            case "beforeblur":
            case "afterblur":
              se = ls;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              se = wt;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              se = Ju;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              se = $f;
              break;
            case hr:
            case Xf:
            case Sv:
              se = us;
              break;
            case Ev:
              se = yc;
              break;
            case "scroll":
              se = Ft;
              break;
            case "wheel":
              se = $r;
              break;
            case "copy":
            case "cut":
            case "paste":
              se = Vf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              se = mc;
          }
          var Se = (r & 4) !== 0, Dn = !Se && n === "scroll", D = Se ? Y !== null ? Y + "Capture" : null : Y;
          Se = [];
          for (var x = z, L; x !== null; ) {
            L = x;
            var K = L.stateNode;
            if (L.tag === 5 && K !== null && (L = K, D !== null && (K = qa(x, D), K != null && Se.push(ro(x, K, L)))), Dn) break;
            x = x.return;
          }
          0 < Se.length && (Y = new se(Y, me, null, l, Q), G.push({ event: Y, listeners: Se }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (Y = n === "mouseover" || n === "pointerover", se = n === "mouseout" || n === "pointerout", Y && l !== dn && (me = l.relatedTarget || l.fromElement) && (Gi(me) || me[ti])) break e;
          if ((se || Y) && (Y = Q.window === Q ? Q : (Y = Q.ownerDocument) ? Y.defaultView || Y.parentWindow : window, se ? (me = l.relatedTarget || l.toElement, se = z, me = me ? Gi(me) : null, me !== null && (Dn = W(me), me !== Dn || me.tag !== 5 && me.tag !== 6) && (me = null)) : (se = null, me = z), se !== me)) {
            if (Se = wt, K = "onMouseLeave", D = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (Se = mc, K = "onPointerLeave", D = "onPointerEnter", x = "pointer"), Dn = se == null ? Y : ao(se), L = me == null ? Y : ao(me), Y = new Se(K, x + "leave", se, l, Q), Y.target = Dn, Y.relatedTarget = L, K = null, Gi(Q) === z && (Se = new Se(D, x + "enter", me, l, Q), Se.target = L, Se.relatedTarget = Dn, K = Se), Dn = K, se && me) t: {
              for (Se = se, D = me, x = 0, L = Se; L; L = pu(L)) x++;
              for (L = 0, K = D; K; K = pu(K)) L++;
              for (; 0 < x - L; ) Se = pu(Se), x--;
              for (; 0 < L - x; ) D = pu(D), L--;
              for (; x--; ) {
                if (Se === D || D !== null && Se === D.alternate) break t;
                Se = pu(Se), D = pu(D);
              }
              Se = null;
            }
            else Se = null;
            se !== null && Jf(G, Y, se, Se, !1), me !== null && Dn !== null && Jf(G, Dn, me, Se, !0);
          }
        }
        e: {
          if (Y = z ? ao(z) : window, se = Y.nodeName && Y.nodeName.toLowerCase(), se === "select" || se === "input" && Y.type === "file") var Te = Qf;
          else if (If(Y)) if (Wf) Te = Km;
          else {
            Te = qm;
            var Ae = Gm;
          }
          else (se = Y.nodeName) && se.toLowerCase() === "input" && (Y.type === "checkbox" || Y.type === "radio") && (Te = Xm);
          if (Te && (Te = Te(n, z))) {
            uv(G, Te, l, Q);
            break e;
          }
          Ae && Ae(n, Y, z), n === "focusout" && (Ae = Y._wrapperState) && Ae.controlled && Y.type === "number" && yr(Y, "number", Y.value);
        }
        switch (Ae = z ? ao(z) : window, n) {
          case "focusin":
            (If(Ae) || Ae.contentEditable === "true") && (du = Ae, _l = z, ps = null);
            break;
          case "focusout":
            ps = _l = du = null;
            break;
          case "mousedown":
            qf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            qf = !1, yv(G, l, Q);
            break;
          case "selectionchange":
            if (Sc) break;
          case "keydown":
          case "keyup":
            yv(G, l, Q);
        }
        var Fe;
        if (Sn) e: {
          switch (n) {
            case "compositionstart":
              var xe = "onCompositionStart";
              break e;
            case "compositionend":
              xe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              xe = "onCompositionUpdate";
              break e;
          }
          xe = void 0;
        }
        else xl ? iv(n, l) && (xe = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (xe = "onCompositionStart");
        xe && (ss && l.locale !== "ko" && (xl || xe !== "onCompositionStart" ? xe === "onCompositionEnd" && xl && (Fe = C()) : (Ja = Q, Zu = "value" in Ja ? Ja.value : Ja.textContent, xl = !0)), Ae = Tc(z, xe), 0 < Ae.length && (xe = new Jp(xe, n, null, l, Q), G.push({ event: xe, listeners: Ae }), Fe ? xe.data = Fe : (Fe = lv(l), Fe !== null && (xe.data = Fe)))), (Fe = Yf ? Im(n, l) : Qm(n, l)) && (z = Tc(z, "onBeforeInput"), 0 < z.length && (Q = new Jp("onBeforeInput", "beforeinput", null, l, Q), G.push({ event: Q, listeners: z }), Q.data = Fe));
      }
      wv(G, r);
    });
  }
  function ro(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function Tc(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = qa(n, l), d != null && o.unshift(ro(n, d, c)), d = qa(n, r), d != null && o.push(ro(n, d, c))), n = n.return;
    }
    return o;
  }
  function pu(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Jf(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, z = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && z !== null && (E = z, c ? (T = qa(l, d), T != null && m.unshift(ro(l, T, E))) : c || (T = qa(l, d), T != null && m.push(ro(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var xv = /\r\n?/g, ed = /\u0000|\uFFFD/g;
  function _v(n) {
    return (typeof n == "string" ? n : "" + n).replace(xv, `
`).replace(ed, "");
  }
  function gs(n, r, l) {
    if (r = _v(r), _v(n) !== r && l) throw Error(A(425));
  }
  function wc() {
  }
  var td = null, nd = null;
  function vu(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Ss = typeof setTimeout == "function" ? setTimeout : void 0, Es = typeof clearTimeout == "function" ? clearTimeout : void 0, rd = typeof Promise == "function" ? Promise : void 0, bv = typeof queueMicrotask == "function" ? queueMicrotask : typeof rd < "u" ? function(n) {
    return rd.resolve(null).then(n).catch(ad);
  } : Ss;
  function ad(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function id(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), Ma(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Ma(r);
  }
  function ca(n) {
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
  function Cs(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Wi = Math.random().toString(36).slice(2), Na = "__reactFiber$" + Wi, Rs = "__reactProps$" + Wi, ti = "__reactContainer$" + Wi, ld = "__reactEvents$" + Wi, ey = "__reactListeners$" + Wi, ty = "__reactHandles$" + Wi;
  function Gi(n) {
    var r = n[Na];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[ti] || l[Na]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Cs(n); n !== null; ) {
          if (l = n[Na]) return l;
          n = Cs(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function hi(n) {
    return n = n[Na] || n[ti], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ao(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(A(33));
  }
  function xc(n) {
    return n[Rs] || null;
  }
  var Le = [], ni = -1;
  function Gt(n) {
    return { current: n };
  }
  function Re(n) {
    0 > ni || (n.current = Le[ni], Le[ni] = null, ni--);
  }
  function Lt(n, r) {
    ni++, Le[ni] = n.current, n.current = r;
  }
  var za = {}, Yn = Gt(za), We = Gt(!1), Cr = za;
  function fa(n, r) {
    var l = n.type.contextTypes;
    if (!l) return za;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Nn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Yr() {
    Re(We), Re(Yn);
  }
  function mi(n, r, l) {
    if (Yn.current !== za) throw Error(A(168));
    Lt(Yn, r), Lt(We, l);
  }
  function Dl(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(A(108, vt(n) || "Unknown", c));
    return ie({}, l, o);
  }
  function hu(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || za, Cr = Yn.current, Lt(Yn, n), Lt(We, We.current), !0;
  }
  function Dv(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(A(169));
    l ? (n = Dl(n, r, Cr), o.__reactInternalMemoizedMergedChildContext = n, Re(We), Re(Yn), Lt(Yn, n)) : Re(We), Lt(We, l);
  }
  var qi = null, kl = !1, Jn = !1;
  function _c(n) {
    qi === null ? qi = [n] : qi.push(n);
  }
  function kv(n) {
    kl = !0, _c(n);
  }
  function yi() {
    if (!Jn && qi !== null) {
      Jn = !0;
      var n = 0, r = ht;
      try {
        var l = qi;
        for (ht = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        qi = null, kl = !1;
      } catch (c) {
        throw qi !== null && (qi = qi.slice(n + 1)), Ln(Mn, yi), c;
      } finally {
        ht = r, Jn = !1;
      }
    }
    return null;
  }
  var Ua = [], Ol = 0, Aa = null, mu = 0, Ir = [], Qr = 0, ri = null, Wr = 1, er = "";
  function yu(n, r) {
    Ua[Ol++] = mu, Ua[Ol++] = Aa, Aa = n, mu = r;
  }
  function Ll(n, r, l) {
    Ir[Qr++] = Wr, Ir[Qr++] = er, Ir[Qr++] = ri, ri = n;
    var o = Wr;
    n = er;
    var c = 32 - Er(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Er(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, Wr = 1 << 32 - Er(r) + c | l << c | o, er = d + n;
    } else Wr = 1 << d | l << c | o, er = n;
  }
  function bc(n) {
    n.return !== null && (yu(n, 1), Ll(n, 1, 0));
  }
  function Dc(n) {
    for (; n === Aa; ) Aa = Ua[--Ol], Ua[Ol] = null, mu = Ua[--Ol], Ua[Ol] = null;
    for (; n === ri; ) ri = Ir[--Qr], Ir[Qr] = null, er = Ir[--Qr], Ir[Qr] = null, Wr = Ir[--Qr], Ir[Qr] = null;
  }
  var da = null, pa = null, an = !1, Fa = null;
  function ud(n, r) {
    var l = Ea(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function od(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, da = n, pa = ca(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, da = n, pa = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = ri !== null ? { id: Wr, overflow: er } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ea(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, da = n, pa = null, !0) : !1;
      default:
        return !1;
    }
  }
  function sd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function kc(n) {
    if (an) {
      var r = pa;
      if (r) {
        var l = r;
        if (!od(n, r)) {
          if (sd(n)) throw Error(A(418));
          r = ca(l.nextSibling);
          var o = da;
          r && od(n, r) ? ud(o, l) : (n.flags = n.flags & -4097 | 2, an = !1, da = n);
        }
      } else {
        if (sd(n)) throw Error(A(418));
        n.flags = n.flags & -4097 | 2, an = !1, da = n;
      }
    }
  }
  function cd(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    da = n;
  }
  function Oc(n) {
    if (n !== da) return !1;
    if (!an) return cd(n), an = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !vu(n.type, n.memoizedProps)), r && (r = pa)) {
      if (sd(n)) throw Ov(), Error(A(418));
      for (; r; ) ud(n, r), r = ca(r.nextSibling);
    }
    if (cd(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(A(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                pa = ca(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        pa = null;
      }
    } else pa = da ? ca(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Ov() {
    for (var n = pa; n; ) n = ca(n.nextSibling);
  }
  function io() {
    pa = da = null, an = !1;
  }
  function zn(n) {
    Fa === null ? Fa = [n] : Fa.push(n);
  }
  var ny = je.ReactCurrentBatchConfig;
  function Ml(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(A(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(A(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(A(284));
      if (!l._owner) throw Error(A(290, n));
    }
    return n;
  }
  function lo(n, r) {
    throw n = Object.prototype.toString.call(r), Error(A(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Nl(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Lv(n) {
    function r(D, x) {
      if (n) {
        var L = D.deletions;
        L === null ? (D.deletions = [x], D.flags |= 16) : L.push(x);
      }
    }
    function l(D, x) {
      if (!n) return null;
      for (; x !== null; ) r(D, x), x = x.sibling;
      return null;
    }
    function o(D, x) {
      for (D = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? D.set(x.key, x) : D.set(x.index, x), x = x.sibling;
      return D;
    }
    function c(D, x) {
      return D = Yl(D, x), D.index = 0, D.sibling = null, D;
    }
    function d(D, x, L) {
      return D.index = L, n ? (L = D.alternate, L !== null ? (L = L.index, L < x ? (D.flags |= 2, x) : L) : (D.flags |= 2, x)) : (D.flags |= 1048576, x);
    }
    function m(D) {
      return n && D.alternate === null && (D.flags |= 2), D;
    }
    function E(D, x, L, K) {
      return x === null || x.tag !== 6 ? (x = Yd(L, D.mode, K), x.return = D, x) : (x = c(x, L), x.return = D, x);
    }
    function T(D, x, L, K) {
      var Te = L.type;
      return Te === ot ? Q(D, x, L.props.children, K, L.key) : x !== null && (x.elementType === Te || typeof Te == "object" && Te !== null && Te.$$typeof === Tt && Nl(Te) === x.type) ? (K = c(x, L.props), K.ref = Ml(D, x, L), K.return = D, K) : (K = tf(L.type, L.key, L.props, null, D.mode, K), K.ref = Ml(D, x, L), K.return = D, K);
    }
    function z(D, x, L, K) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== L.containerInfo || x.stateNode.implementation !== L.implementation ? (x = rf(L, D.mode, K), x.return = D, x) : (x = c(x, L.children || []), x.return = D, x);
    }
    function Q(D, x, L, K, Te) {
      return x === null || x.tag !== 7 ? (x = Mu(L, D.mode, K, Te), x.return = D, x) : (x = c(x, L), x.return = D, x);
    }
    function G(D, x, L) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = Yd("" + x, D.mode, L), x.return = D, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case kt:
            return L = tf(x.type, x.key, x.props, null, D.mode, L), L.ref = Ml(D, null, x), L.return = D, L;
          case Ce:
            return x = rf(x, D.mode, L), x.return = D, x;
          case Tt:
            var K = x._init;
            return G(D, K(x._payload), L);
        }
        if (fr(x) || he(x)) return x = Mu(x, D.mode, L, null), x.return = D, x;
        lo(D, x);
      }
      return null;
    }
    function Y(D, x, L, K) {
      var Te = x !== null ? x.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return Te !== null ? null : E(D, x, "" + L, K);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case kt:
            return L.key === Te ? T(D, x, L, K) : null;
          case Ce:
            return L.key === Te ? z(D, x, L, K) : null;
          case Tt:
            return Te = L._init, Y(
              D,
              x,
              Te(L._payload),
              K
            );
        }
        if (fr(L) || he(L)) return Te !== null ? null : Q(D, x, L, K, null);
        lo(D, L);
      }
      return null;
    }
    function se(D, x, L, K, Te) {
      if (typeof K == "string" && K !== "" || typeof K == "number") return D = D.get(L) || null, E(x, D, "" + K, Te);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case kt:
            return D = D.get(K.key === null ? L : K.key) || null, T(x, D, K, Te);
          case Ce:
            return D = D.get(K.key === null ? L : K.key) || null, z(x, D, K, Te);
          case Tt:
            var Ae = K._init;
            return se(D, x, L, Ae(K._payload), Te);
        }
        if (fr(K) || he(K)) return D = D.get(L) || null, Q(x, D, K, Te, null);
        lo(x, K);
      }
      return null;
    }
    function me(D, x, L, K) {
      for (var Te = null, Ae = null, Fe = x, xe = x = 0, Tn = null; Fe !== null && xe < L.length; xe++) {
        Fe.index > xe ? (Tn = Fe, Fe = null) : Tn = Fe.sibling;
        var Dt = Y(D, Fe, L[xe], K);
        if (Dt === null) {
          Fe === null && (Fe = Tn);
          break;
        }
        n && Fe && Dt.alternate === null && r(D, Fe), x = d(Dt, x, xe), Ae === null ? Te = Dt : Ae.sibling = Dt, Ae = Dt, Fe = Tn;
      }
      if (xe === L.length) return l(D, Fe), an && yu(D, xe), Te;
      if (Fe === null) {
        for (; xe < L.length; xe++) Fe = G(D, L[xe], K), Fe !== null && (x = d(Fe, x, xe), Ae === null ? Te = Fe : Ae.sibling = Fe, Ae = Fe);
        return an && yu(D, xe), Te;
      }
      for (Fe = o(D, Fe); xe < L.length; xe++) Tn = se(Fe, D, xe, L[xe], K), Tn !== null && (n && Tn.alternate !== null && Fe.delete(Tn.key === null ? xe : Tn.key), x = d(Tn, x, xe), Ae === null ? Te = Tn : Ae.sibling = Tn, Ae = Tn);
      return n && Fe.forEach(function(Il) {
        return r(D, Il);
      }), an && yu(D, xe), Te;
    }
    function Se(D, x, L, K) {
      var Te = he(L);
      if (typeof Te != "function") throw Error(A(150));
      if (L = Te.call(L), L == null) throw Error(A(151));
      for (var Ae = Te = null, Fe = x, xe = x = 0, Tn = null, Dt = L.next(); Fe !== null && !Dt.done; xe++, Dt = L.next()) {
        Fe.index > xe ? (Tn = Fe, Fe = null) : Tn = Fe.sibling;
        var Il = Y(D, Fe, Dt.value, K);
        if (Il === null) {
          Fe === null && (Fe = Tn);
          break;
        }
        n && Fe && Il.alternate === null && r(D, Fe), x = d(Il, x, xe), Ae === null ? Te = Il : Ae.sibling = Il, Ae = Il, Fe = Tn;
      }
      if (Dt.done) return l(
        D,
        Fe
      ), an && yu(D, xe), Te;
      if (Fe === null) {
        for (; !Dt.done; xe++, Dt = L.next()) Dt = G(D, Dt.value, K), Dt !== null && (x = d(Dt, x, xe), Ae === null ? Te = Dt : Ae.sibling = Dt, Ae = Dt);
        return an && yu(D, xe), Te;
      }
      for (Fe = o(D, Fe); !Dt.done; xe++, Dt = L.next()) Dt = se(Fe, D, xe, Dt.value, K), Dt !== null && (n && Dt.alternate !== null && Fe.delete(Dt.key === null ? xe : Dt.key), x = d(Dt, x, xe), Ae === null ? Te = Dt : Ae.sibling = Dt, Ae = Dt);
      return n && Fe.forEach(function(lh) {
        return r(D, lh);
      }), an && yu(D, xe), Te;
    }
    function Dn(D, x, L, K) {
      if (typeof L == "object" && L !== null && L.type === ot && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case kt:
            e: {
              for (var Te = L.key, Ae = x; Ae !== null; ) {
                if (Ae.key === Te) {
                  if (Te = L.type, Te === ot) {
                    if (Ae.tag === 7) {
                      l(D, Ae.sibling), x = c(Ae, L.props.children), x.return = D, D = x;
                      break e;
                    }
                  } else if (Ae.elementType === Te || typeof Te == "object" && Te !== null && Te.$$typeof === Tt && Nl(Te) === Ae.type) {
                    l(D, Ae.sibling), x = c(Ae, L.props), x.ref = Ml(D, Ae, L), x.return = D, D = x;
                    break e;
                  }
                  l(D, Ae);
                  break;
                } else r(D, Ae);
                Ae = Ae.sibling;
              }
              L.type === ot ? (x = Mu(L.props.children, D.mode, K, L.key), x.return = D, D = x) : (K = tf(L.type, L.key, L.props, null, D.mode, K), K.ref = Ml(D, x, L), K.return = D, D = K);
            }
            return m(D);
          case Ce:
            e: {
              for (Ae = L.key; x !== null; ) {
                if (x.key === Ae) if (x.tag === 4 && x.stateNode.containerInfo === L.containerInfo && x.stateNode.implementation === L.implementation) {
                  l(D, x.sibling), x = c(x, L.children || []), x.return = D, D = x;
                  break e;
                } else {
                  l(D, x);
                  break;
                }
                else r(D, x);
                x = x.sibling;
              }
              x = rf(L, D.mode, K), x.return = D, D = x;
            }
            return m(D);
          case Tt:
            return Ae = L._init, Dn(D, x, Ae(L._payload), K);
        }
        if (fr(L)) return me(D, x, L, K);
        if (he(L)) return Se(D, x, L, K);
        lo(D, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, x !== null && x.tag === 6 ? (l(D, x.sibling), x = c(x, L), x.return = D, D = x) : (l(D, x), x = Yd(L, D.mode, K), x.return = D, D = x), m(D)) : l(D, x);
    }
    return Dn;
  }
  var zl = Lv(!0), Mv = Lv(!1), Lc = Gt(null), Xi = null, bn = null, re = null;
  function ja() {
    re = bn = Xi = null;
  }
  function va(n) {
    var r = Lc.current;
    Re(Lc), n._currentValue = r;
  }
  function fd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function uo(n, r) {
    Xi = n, re = bn = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Rr = !0), n.firstContext = null);
  }
  function Ha(n) {
    var r = n._currentValue;
    if (re !== n) if (n = { context: n, memoizedValue: r, next: null }, bn === null) {
      if (Xi === null) throw Error(A(308));
      bn = n, Xi.dependencies = { lanes: 0, firstContext: n };
    } else bn = bn.next = n;
    return r;
  }
  var gu = null;
  function dd(n) {
    gu === null ? gu = [n] : gu.push(n);
  }
  function Vn(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, dd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Ki(n, o);
  }
  function Ki(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ul = !1;
  function pd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function vd(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function ha(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function ma(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, bt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Ki(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, dd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Ki(n, l);
  }
  function Mc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, es(n, l);
    }
  }
  function Nv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function Nc(n, r, l, o) {
    var c = n.updateQueue;
    Ul = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, z = T.next;
      T.next = null, m === null ? d = z : m.next = z, m = T;
      var Q = n.alternate;
      Q !== null && (Q = Q.updateQueue, E = Q.lastBaseUpdate, E !== m && (E === null ? Q.firstBaseUpdate = z : E.next = z, Q.lastBaseUpdate = T));
    }
    if (d !== null) {
      var G = c.baseState;
      m = 0, Q = z = T = null, E = d;
      do {
        var Y = E.lane, se = E.eventTime;
        if ((o & Y) === Y) {
          Q !== null && (Q = Q.next = {
            eventTime: se,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var me = n, Se = E;
            switch (Y = r, se = l, Se.tag) {
              case 1:
                if (me = Se.payload, typeof me == "function") {
                  G = me.call(se, G, Y);
                  break e;
                }
                G = me;
                break e;
              case 3:
                me.flags = me.flags & -65537 | 128;
              case 0:
                if (me = Se.payload, Y = typeof me == "function" ? me.call(se, G, Y) : me, Y == null) break e;
                G = ie({}, G, Y);
                break e;
              case 2:
                Ul = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, Y = c.effects, Y === null ? c.effects = [E] : Y.push(E));
        } else se = { eventTime: se, lane: Y, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, Q === null ? (z = Q = se, T = G) : Q = Q.next = se, m |= Y;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          Y = E, E = Y.next, Y.next = null, c.lastBaseUpdate = Y, c.shared.pending = null;
        }
      } while (!0);
      if (Q === null && (T = G), c.baseState = T, c.firstBaseUpdate = z, c.lastBaseUpdate = Q, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      xu |= m, n.lanes = m, n.memoizedState = G;
    }
  }
  function zv(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(A(191, c));
        c.call(o);
      }
    }
  }
  var Ts = {}, gi = Gt(Ts), oo = Gt(Ts), so = Gt(Ts);
  function Su(n) {
    if (n === Ts) throw Error(A(174));
    return n;
  }
  function hd(n, r) {
    switch (Lt(so, r), Lt(oo, n), Lt(gi, Ts), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : gr(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = gr(r, n);
    }
    Re(gi), Lt(gi, r);
  }
  function co() {
    Re(gi), Re(oo), Re(so);
  }
  function Uv(n) {
    Su(so.current);
    var r = Su(gi.current), l = gr(r, n.type);
    r !== l && (Lt(oo, n), Lt(gi, l));
  }
  function md(n) {
    oo.current === n && (Re(gi), Re(oo));
  }
  var hn = Gt(0);
  function ws(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
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
  var yd = [];
  function zc() {
    for (var n = 0; n < yd.length; n++) yd[n]._workInProgressVersionPrimary = null;
    yd.length = 0;
  }
  var Uc = je.ReactCurrentDispatcher, gd = je.ReactCurrentBatchConfig, Zi = 0, ne = null, ke = null, Ie = null, ln = !1, Gr = !1, fo = 0, ry = 0;
  function mr() {
    throw Error(A(321));
  }
  function Sd(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ei(n[l], r[l])) return !1;
    return !0;
  }
  function xs(n, r, l, o, c, d) {
    if (Zi = d, ne = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Uc.current = n === null || n.memoizedState === null ? ya : ay, n = l(o, c), Gr) {
      d = 0;
      do {
        if (Gr = !1, fo = 0, 25 <= d) throw Error(A(301));
        d += 1, Ie = ke = null, r.updateQueue = null, Uc.current = Zt, n = l(o, c);
      } while (Gr);
    }
    if (Uc.current = Ei, r = ke !== null && ke.next !== null, Zi = 0, Ie = ke = ne = null, ln = !1, r) throw Error(A(300));
    return n;
  }
  function $() {
    var n = fo !== 0;
    return fo = 0, n;
  }
  function qt() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ie === null ? ne.memoizedState = Ie = n : Ie = Ie.next = n, Ie;
  }
  function we() {
    if (ke === null) {
      var n = ne.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = ke.next;
    var r = Ie === null ? ne.memoizedState : Ie.next;
    if (r !== null) Ie = r, ke = n;
    else {
      if (n === null) throw Error(A(310));
      ke = n, n = { memoizedState: ke.memoizedState, baseState: ke.baseState, baseQueue: ke.baseQueue, queue: ke.queue, next: null }, Ie === null ? ne.memoizedState = Ie = n : Ie = Ie.next = n;
    }
    return Ie;
  }
  function Si(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function ai(n) {
    var r = we(), l = r.queue;
    if (l === null) throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = ke, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, T = null, z = d;
      do {
        var Q = z.lane;
        if ((Zi & Q) === Q) T !== null && (T = T.next = { lane: 0, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }), o = z.hasEagerState ? z.eagerState : n(o, z.action);
        else {
          var G = {
            lane: Q,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          };
          T === null ? (E = T = G, m = o) : T = T.next = G, ne.lanes |= Q, xu |= Q;
        }
        z = z.next;
      } while (z !== null && z !== d);
      T === null ? m = o : T.next = E, ei(o, r.memoizedState) || (Rr = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, ne.lanes |= d, xu |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Ji(n) {
    var r = we(), l = r.queue;
    if (l === null) throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      ei(d, r.memoizedState) || (Rr = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function ii() {
  }
  function po(n, r) {
    var l = ne, o = we(), c = r(), d = !ei(o.memoizedState, c);
    if (d && (o.memoizedState = c, Rr = !0), o = o.queue, _s(Ac.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Ie !== null && Ie.memoizedState.tag & 1) {
      if (l.flags |= 2048, Cu(9, vo.bind(null, l, o, c, r), void 0, null), En === null) throw Error(A(349));
      Zi & 30 || Eu(l, r, c);
    }
    return c;
  }
  function Eu(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = ne.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, ne.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function vo(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Fc(r) && jc(n);
  }
  function Ac(n, r, l) {
    return l(function() {
      Fc(r) && jc(n);
    });
  }
  function Fc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ei(n, l);
    } catch {
      return !0;
    }
  }
  function jc(n) {
    var r = Ki(n, 1);
    r !== null && Va(r, n, 1, -1);
  }
  function Hc(n) {
    var r = qt();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Si, lastRenderedState: n }, r.queue = n, n = n.dispatch = Av.bind(null, ne, n), [r.memoizedState, n];
  }
  function Cu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = ne.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, ne.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Vc() {
    return we().memoizedState;
  }
  function ho(n, r, l, o) {
    var c = qt();
    ne.flags |= n, c.memoizedState = Cu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function mo(n, r, l, o) {
    var c = we();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (ke !== null) {
      var m = ke.memoizedState;
      if (d = m.destroy, o !== null && Sd(o, m.deps)) {
        c.memoizedState = Cu(r, l, d, o);
        return;
      }
    }
    ne.flags |= n, c.memoizedState = Cu(1 | r, l, d, o);
  }
  function Pc(n, r) {
    return ho(8390656, 8, n, r);
  }
  function _s(n, r) {
    return mo(2048, 8, n, r);
  }
  function Bc(n, r) {
    return mo(4, 2, n, r);
  }
  function $c(n, r) {
    return mo(4, 4, n, r);
  }
  function Yc(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Ic(n, r, l) {
    return l = l != null ? l.concat([n]) : null, mo(4, 4, Yc.bind(null, r, n), l);
  }
  function bs() {
  }
  function Ds(n, r) {
    var l = we();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Sd(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Ru(n, r) {
    var l = we();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Sd(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Qc(n, r, l) {
    return Zi & 21 ? (ei(l, r) || (l = iu(), ne.lanes |= l, xu |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Rr = !0), n.memoizedState = l);
  }
  function Ed(n, r) {
    var l = ht;
    ht = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = gd.transition;
    gd.transition = {};
    try {
      n(!1), r();
    } finally {
      ht = l, gd.transition = o;
    }
  }
  function Wc() {
    return we().memoizedState;
  }
  function Cd(n, r, l) {
    var o = ui(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, yo(n)) Rd(r, l);
    else if (l = Vn(n, r, l, o), l !== null) {
      var c = Wn();
      Va(l, n, o, c), go(l, r, o);
    }
  }
  function Av(n, r, l) {
    var o = ui(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (yo(n)) Rd(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, ei(E, m)) {
          var T = r.interleaved;
          T === null ? (c.next = c, dd(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Vn(n, r, c, o), l !== null && (c = Wn(), Va(l, n, o, c), go(l, r, o));
    }
  }
  function yo(n) {
    var r = n.alternate;
    return n === ne || r !== null && r === ne;
  }
  function Rd(n, r) {
    Gr = ln = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function go(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, es(n, l);
    }
  }
  var Ei = { readContext: Ha, useCallback: mr, useContext: mr, useEffect: mr, useImperativeHandle: mr, useInsertionEffect: mr, useLayoutEffect: mr, useMemo: mr, useReducer: mr, useRef: mr, useState: mr, useDebugValue: mr, useDeferredValue: mr, useTransition: mr, useMutableSource: mr, useSyncExternalStore: mr, useId: mr, unstable_isNewReconciler: !1 }, ya = { readContext: Ha, useCallback: function(n, r) {
    return qt().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ha, useEffect: Pc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, ho(
      4194308,
      4,
      Yc.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return ho(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return ho(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = qt();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = qt();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Cd.bind(null, ne, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = qt();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Hc, useDebugValue: bs, useDeferredValue: function(n) {
    return qt().memoizedState = n;
  }, useTransition: function() {
    var n = Hc(!1), r = n[0];
    return n = Ed.bind(null, n[1]), qt().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = ne, c = qt();
    if (an) {
      if (l === void 0) throw Error(A(407));
      l = l();
    } else {
      if (l = r(), En === null) throw Error(A(349));
      Zi & 30 || Eu(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Pc(Ac.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Cu(9, vo.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = qt(), r = En.identifierPrefix;
    if (an) {
      var l = er, o = Wr;
      l = (o & ~(1 << 32 - Er(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = fo++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = ry++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, ay = {
    readContext: Ha,
    useCallback: Ds,
    useContext: Ha,
    useEffect: _s,
    useImperativeHandle: Ic,
    useInsertionEffect: Bc,
    useLayoutEffect: $c,
    useMemo: Ru,
    useReducer: ai,
    useRef: Vc,
    useState: function() {
      return ai(Si);
    },
    useDebugValue: bs,
    useDeferredValue: function(n) {
      var r = we();
      return Qc(r, ke.memoizedState, n);
    },
    useTransition: function() {
      var n = ai(Si)[0], r = we().memoizedState;
      return [n, r];
    },
    useMutableSource: ii,
    useSyncExternalStore: po,
    useId: Wc,
    unstable_isNewReconciler: !1
  }, Zt = { readContext: Ha, useCallback: Ds, useContext: Ha, useEffect: _s, useImperativeHandle: Ic, useInsertionEffect: Bc, useLayoutEffect: $c, useMemo: Ru, useReducer: Ji, useRef: Vc, useState: function() {
    return Ji(Si);
  }, useDebugValue: bs, useDeferredValue: function(n) {
    var r = we();
    return ke === null ? r.memoizedState = n : Qc(r, ke.memoizedState, n);
  }, useTransition: function() {
    var n = Ji(Si)[0], r = we().memoizedState;
    return [n, r];
  }, useMutableSource: ii, useSyncExternalStore: po, useId: Wc, unstable_isNewReconciler: !1 };
  function qr(n, r) {
    if (n && n.defaultProps) {
      r = ie({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function So(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : ie({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Al = { isMounted: function(n) {
    return (n = n._reactInternals) ? W(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Wn(), c = ui(n), d = ha(o, c);
    d.payload = r, l != null && (d.callback = l), r = ma(n, d, c), r !== null && (Va(r, n, c, o), Mc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Wn(), c = ui(n), d = ha(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = ma(n, d, c), r !== null && (Va(r, n, c, o), Mc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Wn(), o = ui(n), c = ha(l, o);
    c.tag = 2, r != null && (c.callback = r), r = ma(n, c, o), r !== null && (Va(r, n, o, l), Mc(r, n, o));
  } };
  function ks(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !to(l, o) || !to(c, d) : !0;
  }
  function Fv(n, r, l) {
    var o = !1, c = za, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Ha(d) : (c = Nn(r) ? Cr : Yn.current, o = r.contextTypes, d = (o = o != null) ? fa(n, c) : za), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Al, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function jv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Al.enqueueReplaceState(r, r.state, null);
  }
  function Td(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, pd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Ha(d) : (d = Nn(r) ? Cr : Yn.current, c.context = fa(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (So(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Al.enqueueReplaceState(c, c.state, null), Nc(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Eo(n, r) {
    try {
      var l = "", o = r;
      do
        l += Xe(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Os(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function wd(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var xd = typeof WeakMap == "function" ? WeakMap : Map;
  function _d(n, r, l) {
    l = ha(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      Jc || (Jc = !0, Hd = o), wd(n, r);
    }, l;
  }
  function Hv(n, r, l) {
    l = ha(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        wd(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      wd(n, r), typeof o != "function" && (Vl === null ? Vl = /* @__PURE__ */ new Set([this]) : Vl.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Vv(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new xd();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = py.bind(null, n, r, l), r.then(n, n));
  }
  function Ls(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Pv(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = ha(-1, 1), r.tag = 2, ma(l, r, 1))), l.lanes |= 1), n);
  }
  var Bv = je.ReactCurrentOwner, Rr = !1;
  function Tr(n, r, l, o) {
    r.child = n === null ? Mv(r, null, l, o) : zl(r, n.child, l, o);
  }
  function Fl(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return uo(r, c), o = xs(n, r, l, o, d, c), l = $(), n !== null && !Rr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ci(n, r, c)) : (an && l && bc(r), r.flags |= 1, Tr(n, r, o, c), r.child);
  }
  function Co(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !$d(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, jl(n, r, d, o, c)) : (n = tf(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : to, l(m, o) && n.ref === r.ref) return Ci(n, r, c);
    }
    return r.flags |= 1, n = Yl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function jl(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (to(d, o) && n.ref === r.ref) if (Rr = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (Rr = !0);
      else return r.lanes = n.lanes, Ci(n, r, c);
    }
    return Hl(n, r, l, o, c);
  }
  function Gc(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Lt(wu, br), br |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Lt(wu, br), br |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Lt(wu, br), br |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Lt(wu, br), br |= o;
    return Tr(n, r, c, l), r.child;
  }
  function Xr(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Hl(n, r, l, o, c) {
    var d = Nn(l) ? Cr : Yn.current;
    return d = fa(r, d), uo(r, c), l = xs(n, r, l, o, d, c), o = $(), n !== null && !Rr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ci(n, r, c)) : (an && o && bc(r), r.flags |= 1, Tr(n, r, l, c), r.child);
  }
  function Ze(n, r, l, o, c) {
    if (Nn(l)) {
      var d = !0;
      hu(r);
    } else d = !1;
    if (uo(r, c), r.stateNode === null) zs(n, r), Fv(r, l, o), Td(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, z = l.contextType;
      typeof z == "object" && z !== null ? z = Ha(z) : (z = Nn(l) ? Cr : Yn.current, z = fa(r, z));
      var Q = l.getDerivedStateFromProps, G = typeof Q == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      G || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== z) && jv(r, m, o, z), Ul = !1;
      var Y = r.memoizedState;
      m.state = Y, Nc(r, o, m, c), T = r.memoizedState, E !== o || Y !== T || We.current || Ul ? (typeof Q == "function" && (So(r, l, Q, o), T = r.memoizedState), (E = Ul || ks(r, l, E, o, Y, T, z)) ? (G || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = z, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, vd(n, r), E = r.memoizedProps, z = r.type === r.elementType ? E : qr(r.type, E), m.props = z, G = r.pendingProps, Y = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Ha(T) : (T = Nn(l) ? Cr : Yn.current, T = fa(r, T));
      var se = l.getDerivedStateFromProps;
      (Q = typeof se == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== G || Y !== T) && jv(r, m, o, T), Ul = !1, Y = r.memoizedState, m.state = Y, Nc(r, o, m, c);
      var me = r.memoizedState;
      E !== G || Y !== me || We.current || Ul ? (typeof se == "function" && (So(r, l, se, o), me = r.memoizedState), (z = Ul || ks(r, l, z, o, Y, me, T) || !1) ? (Q || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, me, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, me, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = me), m.props = o, m.state = me, m.context = T, o = z) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Ro(n, r, l, o, d, c);
  }
  function Ro(n, r, l, o, c, d) {
    Xr(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && Dv(r, l, !1), Ci(n, r, d);
    o = r.stateNode, Bv.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = zl(r, n.child, null, d), r.child = zl(r, null, E, d)) : Tr(n, r, E, d), r.memoizedState = o.state, c && Dv(r, l, !0), r.child;
  }
  function bd(n) {
    var r = n.stateNode;
    r.pendingContext ? mi(n, r.pendingContext, r.pendingContext !== r.context) : r.context && mi(n, r.context, !1), hd(n, r.containerInfo);
  }
  function iy(n, r, l, o, c) {
    return io(), zn(c), r.flags |= 256, Tr(n, r, l, o), r.child;
  }
  var Dd = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ms(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function To(n, r, l) {
    var o = r.pendingProps, c = hn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Lt(hn, c & 1), n === null)
      return kc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = nf(m, o, 0, null), n = Mu(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Ms(l), r.memoizedState = Dd, n) : kd(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return ly(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Yl(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Yl(E, d) : (d = Mu(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Ms(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Dd, o;
    }
    return d = n.child, n = d.sibling, o = Yl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function kd(n, r) {
    return r = nf({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Ns(n, r, l, o) {
    return o !== null && zn(o), zl(r, n.child, null, l), n = kd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function ly(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Os(Error(A(422))), Ns(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = nf({ mode: "visible", children: o.children }, c, 0, null), d = Mu(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && zl(r, n.child, null, m), r.child.memoizedState = Ms(m), r.memoizedState = Dd, d);
    if (!(r.mode & 1)) return Ns(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(A(419)), o = Os(d, o, void 0), Ns(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, Rr || E) {
      if (o = En, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
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
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Ki(n, c), Va(o, n, c, -1));
      }
      return Pd(), o = Os(Error(A(421))), Ns(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = vy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, pa = ca(c.nextSibling), da = r, an = !0, Fa = null, n !== null && (Ir[Qr++] = Wr, Ir[Qr++] = er, Ir[Qr++] = ri, Wr = n.id, er = n.overflow, ri = r), r = kd(r, o.children), r.flags |= 4096, r);
  }
  function qc(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), fd(n.return, r, l);
  }
  function Od(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Ld(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (Tr(n, r, o.children, l), o = hn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && qc(n, l, r);
        else if (n.tag === 19) qc(n, l, r);
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
      o &= 1;
    }
    if (Lt(hn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && ws(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Od(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && ws(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Od(r, !0, l, null, d);
        break;
      case "together":
        Od(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function zs(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Ci(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), xu |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(A(153));
    if (r.child !== null) {
      for (n = r.child, l = Yl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Yl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function ga(n, r, l) {
    switch (r.tag) {
      case 3:
        bd(r), io();
        break;
      case 5:
        Uv(r);
        break;
      case 1:
        Nn(r.type) && hu(r);
        break;
      case 4:
        hd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Lt(Lc, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Lt(hn, hn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? To(n, r, l) : (Lt(hn, hn.current & 1), n = Ci(n, r, l), n !== null ? n.sibling : null);
        Lt(hn, hn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return Ld(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Lt(hn, hn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Gc(n, r, l);
    }
    return Ci(n, r, l);
  }
  var Ri, li, Us, wo;
  Ri = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, li = function() {
  }, Us = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, Su(gi.current);
      var d = null;
      switch (l) {
        case "input":
          c = gn(n, c), o = gn(n, o), d = [];
          break;
        case "select":
          c = ie({}, c, { value: void 0 }), o = ie({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = na(n, c), o = na(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = wc);
      }
      Ot(l, o);
      var m;
      l = null;
      for (z in c) if (!o.hasOwnProperty(z) && c.hasOwnProperty(z) && c[z] != null) if (z === "style") {
        var E = c[z];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else z !== "dangerouslySetInnerHTML" && z !== "children" && z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && z !== "autoFocus" && (xt.hasOwnProperty(z) ? d || (d = []) : (d = d || []).push(z, null));
      for (z in o) {
        var T = o[z];
        if (E = c != null ? c[z] : void 0, o.hasOwnProperty(z) && T !== E && (T != null || E != null)) if (z === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          z,
          l
        )), l = T;
        else z === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(z, T)) : z === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(z, "" + T) : z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && (xt.hasOwnProperty(z) ? (T != null && z === "onScroll" && Wt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(z, T));
      }
      l && (d = d || []).push("style", l);
      var z = d;
      (r.updateQueue = z) && (r.flags |= 4);
    }
  }, wo = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function wr(n, r) {
    if (!an) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function _t(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function uy(n, r, l) {
    var o = r.pendingProps;
    switch (Dc(r), r.tag) {
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
        return _t(r), null;
      case 1:
        return Nn(r.type) && Yr(), _t(r), null;
      case 3:
        return o = r.stateNode, co(), Re(We), Re(Yn), zc(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Oc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Fa !== null && (Du(Fa), Fa = null))), li(n, r), _t(r), null;
      case 5:
        md(r);
        var c = Su(so.current);
        if (l = r.type, n !== null && r.stateNode != null) Us(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(A(166));
            return _t(r), null;
          }
          if (n = Su(gi.current), Oc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Na] = r, o[Rs] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Wt("cancel", o), Wt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Wt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < Ii.length; c++) Wt(Ii[c], o);
                break;
              case "source":
                Wt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Wt(
                  "error",
                  o
                ), Wt("load", o);
                break;
              case "details":
                Wt("toggle", o);
                break;
              case "input":
                Xn(o, d), Wt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Wt("invalid", o);
                break;
              case "textarea":
                ra(o, d), Wt("invalid", o);
            }
            Ot(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && gs(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && gs(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : xt.hasOwnProperty(m) && E != null && m === "onScroll" && Wt("scroll", o);
            }
            switch (l) {
              case "input":
                qn(o), On(o, d, !0);
                break;
              case "textarea":
                qn(o), aa(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = wc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Kn(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Na] = r, n[Rs] = o, Ri(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = _n(l, o), l) {
                case "dialog":
                  Wt("cancel", n), Wt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Wt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < Ii.length; c++) Wt(Ii[c], n);
                  c = o;
                  break;
                case "source":
                  Wt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Wt(
                    "error",
                    n
                  ), Wt("load", n), c = o;
                  break;
                case "details":
                  Wt("toggle", n), c = o;
                  break;
                case "input":
                  Xn(n, o), c = gn(n, o), Wt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = ie({}, o, { value: void 0 }), Wt("invalid", n);
                  break;
                case "textarea":
                  ra(n, o), c = na(n, o), Wt("invalid", n);
                  break;
                default:
                  c = o;
              }
              Ot(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? rt(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && ia(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && la(n, T) : typeof T == "number" && la(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (xt.hasOwnProperty(d) ? T != null && d === "onScroll" && Wt("scroll", n) : T != null && tt(n, d, T, m));
              }
              switch (l) {
                case "input":
                  qn(n), On(n, o, !1);
                  break;
                case "textarea":
                  qn(n), aa(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + ut(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Hn(n, !!o.multiple, d, !1) : o.defaultValue != null && Hn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = wc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return _t(r), null;
      case 6:
        if (n && r.stateNode != null) wo(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(A(166));
          if (l = Su(so.current), Su(gi.current), Oc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Na] = r, (d = o.nodeValue !== l) && (n = da, n !== null)) switch (n.tag) {
              case 3:
                gs(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && gs(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Na] = r, r.stateNode = o;
        }
        return _t(r), null;
      case 13:
        if (Re(hn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (an && pa !== null && r.mode & 1 && !(r.flags & 128)) Ov(), io(), r.flags |= 98560, d = !1;
          else if (d = Oc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(A(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(A(317));
              d[Na] = r;
            } else io(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            _t(r), d = !1;
          } else Fa !== null && (Du(Fa), Fa = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || hn.current & 1 ? Pn === 0 && (Pn = 3) : Pd())), r.updateQueue !== null && (r.flags |= 4), _t(r), null);
      case 4:
        return co(), li(n, r), n === null && vi(r.stateNode.containerInfo), _t(r), null;
      case 10:
        return va(r.type._context), _t(r), null;
      case 17:
        return Nn(r.type) && Yr(), _t(r), null;
      case 19:
        if (Re(hn), d = r.memoizedState, d === null) return _t(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) wr(d, !1);
        else {
          if (Pn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = ws(n), m !== null) {
              for (r.flags |= 128, wr(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return Lt(hn, hn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && At() > _u && (r.flags |= 128, o = !0, wr(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = ws(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), wr(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !an) return _t(r), null;
          } else 2 * At() - d.renderingStartTime > _u && l !== 1073741824 && (r.flags |= 128, o = !0, wr(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = At(), r.sibling = null, l = hn.current, Lt(hn, o ? l & 1 | 2 : l & 1), r) : (_t(r), null);
      case 22:
      case 23:
        return Do(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? br & 1073741824 && (_t(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : _t(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(A(156, r.tag));
  }
  function oy(n, r) {
    switch (Dc(r), r.tag) {
      case 1:
        return Nn(r.type) && Yr(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return co(), Re(We), Re(Yn), zc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return md(r), null;
      case 13:
        if (Re(hn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(A(340));
          io();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Re(hn), null;
      case 4:
        return co(), null;
      case 10:
        return va(r.type._context), null;
      case 22:
      case 23:
        return Do(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Xc = !1, In = !1, $v = typeof WeakSet == "function" ? WeakSet : Set, de = null;
  function Tu(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      Rn(n, r, o);
    }
    else l.current = null;
  }
  function Md(n, r, l) {
    try {
      l();
    } catch (o) {
      Rn(n, r, o);
    }
  }
  var Yv = !1;
  function Nd(n, r) {
    if (td = cu, n = mv(), ds(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var m = 0, E = -1, T = -1, z = 0, Q = 0, G = n, Y = null;
          t: for (; ; ) {
            for (var se; G !== l || c !== 0 && G.nodeType !== 3 || (E = m + c), G !== d || o !== 0 && G.nodeType !== 3 || (T = m + o), G.nodeType === 3 && (m += G.nodeValue.length), (se = G.firstChild) !== null; )
              Y = G, G = se;
            for (; ; ) {
              if (G === n) break t;
              if (Y === l && ++z === c && (E = m), Y === d && ++Q === o && (T = m), (se = G.nextSibling) !== null) break;
              G = Y, Y = G.parentNode;
            }
            G = se;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (nd = { focusedElem: n, selectionRange: l }, cu = !1, de = r; de !== null; ) if (r = de, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, de = n;
    else for (; de !== null; ) {
      r = de;
      try {
        var me = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (me !== null) {
              var Se = me.memoizedProps, Dn = me.memoizedState, D = r.stateNode, x = D.getSnapshotBeforeUpdate(r.elementType === r.type ? Se : qr(r.type, Se), Dn);
              D.__reactInternalSnapshotBeforeUpdate = x;
            }
            break;
          case 3:
            var L = r.stateNode.containerInfo;
            L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(A(163));
        }
      } catch (K) {
        Rn(r, r.return, K);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, de = n;
        break;
      }
      de = r.return;
    }
    return me = Yv, Yv = !1, me;
  }
  function As(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Md(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Fs(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function zd(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Ud(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Ud(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Na], delete r[Rs], delete r[ld], delete r[ey], delete r[ty])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Iv(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Ad(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Iv(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Fd(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = wc));
    else if (o !== 4 && (n = n.child, n !== null)) for (Fd(n, r, l), n = n.sibling; n !== null; ) Fd(n, r, l), n = n.sibling;
  }
  function js(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (js(n, r, l), n = n.sibling; n !== null; ) js(n, r, l), n = n.sibling;
  }
  var Un = null, Qn = !1;
  function xr(n, r, l) {
    for (l = l.child; l !== null; ) el(n, r, l), l = l.sibling;
  }
  function el(n, r, l) {
    if (Vr && typeof Vr.onCommitFiberUnmount == "function") try {
      Vr.onCommitFiberUnmount(gl, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        In || Tu(l, r);
      case 6:
        var o = Un, c = Qn;
        Un = null, xr(n, r, l), Un = o, Qn = c, Un !== null && (Qn ? (n = Un, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : Un.removeChild(l.stateNode));
        break;
      case 18:
        Un !== null && (Qn ? (n = Un, l = l.stateNode, n.nodeType === 8 ? id(n.parentNode, l) : n.nodeType === 1 && id(n, l), Ma(n)) : id(Un, l.stateNode));
        break;
      case 4:
        o = Un, c = Qn, Un = l.stateNode.containerInfo, Qn = !0, xr(n, r, l), Un = o, Qn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!In && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && Md(l, r, m), c = c.next;
          } while (c !== o);
        }
        xr(n, r, l);
        break;
      case 1:
        if (!In && (Tu(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          Rn(l, r, E);
        }
        xr(n, r, l);
        break;
      case 21:
        xr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (In = (o = In) || l.memoizedState !== null, xr(n, r, l), In = o) : xr(n, r, l);
        break;
      default:
        xr(n, r, l);
    }
  }
  function xo(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new $v()), r.forEach(function(o) {
        var c = Bd.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function _r(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, E = m;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 5:
              Un = E.stateNode, Qn = !1;
              break e;
            case 3:
              Un = E.stateNode.containerInfo, Qn = !0;
              break e;
            case 4:
              Un = E.stateNode.containerInfo, Qn = !0;
              break e;
          }
          E = E.return;
        }
        if (Un === null) throw Error(A(160));
        el(d, m, c), Un = null, Qn = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (z) {
        Rn(c, r, z);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) tl(r, n), r = r.sibling;
  }
  function tl(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (_r(r, n), Ti(n), o & 4) {
          try {
            As(3, n, n.return), Fs(3, n);
          } catch (Se) {
            Rn(n, n.return, Se);
          }
          try {
            As(5, n, n.return);
          } catch (Se) {
            Rn(n, n.return, Se);
          }
        }
        break;
      case 1:
        _r(r, n), Ti(n), o & 512 && l !== null && Tu(l, l.return);
        break;
      case 5:
        if (_r(r, n), Ti(n), o & 512 && l !== null && Tu(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            la(c, "");
          } catch (Se) {
            Rn(n, n.return, Se);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && jn(c, d), _n(E, m);
            var z = _n(E, d);
            for (m = 0; m < T.length; m += 2) {
              var Q = T[m], G = T[m + 1];
              Q === "style" ? rt(c, G) : Q === "dangerouslySetInnerHTML" ? ia(c, G) : Q === "children" ? la(c, G) : tt(c, Q, G, z);
            }
            switch (E) {
              case "input":
                xn(c, d);
                break;
              case "textarea":
                dr(c, d);
                break;
              case "select":
                var Y = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var se = d.value;
                se != null ? Hn(c, !!d.multiple, se, !1) : Y !== !!d.multiple && (d.defaultValue != null ? Hn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Hn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[Rs] = d;
          } catch (Se) {
            Rn(n, n.return, Se);
          }
        }
        break;
      case 6:
        if (_r(r, n), Ti(n), o & 4) {
          if (n.stateNode === null) throw Error(A(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Se) {
            Rn(n, n.return, Se);
          }
        }
        break;
      case 3:
        if (_r(r, n), Ti(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Ma(r.containerInfo);
        } catch (Se) {
          Rn(n, n.return, Se);
        }
        break;
      case 4:
        _r(r, n), Ti(n);
        break;
      case 13:
        _r(r, n), Ti(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Bs = At())), o & 4 && xo(n);
        break;
      case 22:
        if (Q = l !== null && l.memoizedState !== null, n.mode & 1 ? (In = (z = In) || Q, _r(r, n), In = z) : _r(r, n), Ti(n), o & 8192) {
          if (z = n.memoizedState !== null, (n.stateNode.isHidden = z) && !Q && n.mode & 1) for (de = n, Q = n.child; Q !== null; ) {
            for (G = de = Q; de !== null; ) {
              switch (Y = de, se = Y.child, Y.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  As(4, Y, Y.return);
                  break;
                case 1:
                  Tu(Y, Y.return);
                  var me = Y.stateNode;
                  if (typeof me.componentWillUnmount == "function") {
                    o = Y, l = Y.return;
                    try {
                      r = o, me.props = r.memoizedProps, me.state = r.memoizedState, me.componentWillUnmount();
                    } catch (Se) {
                      Rn(o, l, Se);
                    }
                  }
                  break;
                case 5:
                  Tu(Y, Y.return);
                  break;
                case 22:
                  if (Y.memoizedState !== null) {
                    _o(G);
                    continue;
                  }
              }
              se !== null ? (se.return = Y, de = se) : _o(G);
            }
            Q = Q.sibling;
          }
          e: for (Q = null, G = n; ; ) {
            if (G.tag === 5) {
              if (Q === null) {
                Q = G;
                try {
                  c = G.stateNode, z ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = G.stateNode, T = G.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = be("display", m));
                } catch (Se) {
                  Rn(n, n.return, Se);
                }
              }
            } else if (G.tag === 6) {
              if (Q === null) try {
                G.stateNode.nodeValue = z ? "" : G.memoizedProps;
              } catch (Se) {
                Rn(n, n.return, Se);
              }
            } else if ((G.tag !== 22 && G.tag !== 23 || G.memoizedState === null || G === n) && G.child !== null) {
              G.child.return = G, G = G.child;
              continue;
            }
            if (G === n) break e;
            for (; G.sibling === null; ) {
              if (G.return === null || G.return === n) break e;
              Q === G && (Q = null), G = G.return;
            }
            Q === G && (Q = null), G.sibling.return = G.return, G = G.sibling;
          }
        }
        break;
      case 19:
        _r(r, n), Ti(n), o & 4 && xo(n);
        break;
      case 21:
        break;
      default:
        _r(
          r,
          n
        ), Ti(n);
    }
  }
  function Ti(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Iv(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(A(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (la(c, ""), o.flags &= -33);
            var d = Ad(n);
            js(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Ad(n);
            Fd(n, E, m);
            break;
          default:
            throw Error(A(161));
        }
      } catch (T) {
        Rn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function sy(n, r, l) {
    de = n, Qv(n);
  }
  function Qv(n, r, l) {
    for (var o = (n.mode & 1) !== 0; de !== null; ) {
      var c = de, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || Xc;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || In;
          E = Xc;
          var z = In;
          if (Xc = m, (In = T) && !z) for (de = c; de !== null; ) m = de, T = m.child, m.tag === 22 && m.memoizedState !== null ? Wv(c) : T !== null ? (T.return = m, de = T) : Wv(c);
          for (; d !== null; ) de = d, Qv(d), d = d.sibling;
          de = c, Xc = E, In = z;
        }
        jd(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, de = d) : jd(n);
    }
  }
  function jd(n) {
    for (; de !== null; ) {
      var r = de;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              In || Fs(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !In) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : qr(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && zv(r, d, o);
              break;
            case 3:
              var m = r.updateQueue;
              if (m !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                zv(r, m, l);
              }
              break;
            case 5:
              var E = r.stateNode;
              if (l === null && r.flags & 4) {
                l = E;
                var T = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    T.autoFocus && l.focus();
                    break;
                  case "img":
                    T.src && (l.src = T.src);
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
                var z = r.alternate;
                if (z !== null) {
                  var Q = z.memoizedState;
                  if (Q !== null) {
                    var G = Q.dehydrated;
                    G !== null && Ma(G);
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
              throw Error(A(163));
          }
          In || r.flags & 512 && zd(r);
        } catch (Y) {
          Rn(r, r.return, Y);
        }
      }
      if (r === n) {
        de = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, de = l;
        break;
      }
      de = r.return;
    }
  }
  function _o(n) {
    for (; de !== null; ) {
      var r = de;
      if (r === n) {
        de = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, de = l;
        break;
      }
      de = r.return;
    }
  }
  function Wv(n) {
    for (; de !== null; ) {
      var r = de;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Fs(4, r);
            } catch (T) {
              Rn(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                Rn(r, c, T);
              }
            }
            var d = r.return;
            try {
              zd(r);
            } catch (T) {
              Rn(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              zd(r);
            } catch (T) {
              Rn(r, m, T);
            }
        }
      } catch (T) {
        Rn(r, r.return, T);
      }
      if (r === n) {
        de = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, de = E;
        break;
      }
      de = r.return;
    }
  }
  var Gv = Math.ceil, Kc = je.ReactCurrentDispatcher, bo = je.ReactCurrentOwner, Sa = je.ReactCurrentBatchConfig, bt = 0, En = null, fn = null, Cn = 0, br = 0, wu = Gt(0), Pn = 0, Hs = null, xu = 0, Zc = 0, Vs = 0, Ps = null, tr = null, Bs = 0, _u = 1 / 0, nl = null, Jc = !1, Hd = null, Vl = null, Pl = !1, wi = null, Bl = 0, $s = 0, Vd = null, Ys = -1, Is = 0;
  function Wn() {
    return bt & 6 ? At() : Ys !== -1 ? Ys : Ys = At();
  }
  function ui(n) {
    return n.mode & 1 ? bt & 2 && Cn !== 0 ? Cn & -Cn : ny.transition !== null ? (Is === 0 && (Is = iu()), Is) : (n = ht, n !== 0 || (n = window.event, n = n === void 0 ? 16 : as(n.type)), n) : 1;
  }
  function Va(n, r, l, o) {
    if (50 < $s) throw $s = 0, Vd = null, Error(A(185));
    El(n, l, o), (!(bt & 2) || n !== En) && (n === En && (!(bt & 2) && (Zc |= l), Pn === 4 && xi(n, Cn)), Jt(n, o), l === 1 && bt === 0 && !(r.mode & 1) && (_u = At() + 500, kl && yi()));
  }
  function Jt(n, r) {
    var l = n.callbackNode;
    Sl(n, r);
    var o = fi(n, n === En ? Cn : 0);
    if (o === 0) l !== null && Qt(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && Qt(l), r === 1) n.tag === 0 ? kv(ef.bind(null, n)) : _c(ef.bind(null, n)), bv(function() {
        !(bt & 6) && yi();
      }), l = null;
      else {
        switch (ts(o)) {
          case 1:
            l = Mn;
            break;
          case 4:
            l = Hr;
            break;
          case 16:
            l = Ke;
            break;
          case 536870912:
            l = Ai;
            break;
          default:
            l = Ke;
        }
        l = rh(l, bu.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function bu(n, r) {
    if (Ys = -1, Is = 0, bt & 6) throw Error(A(327));
    var l = n.callbackNode;
    if (Oo() && n.callbackNode !== l) return null;
    var o = fi(n, n === En ? Cn : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = ko(n, o);
    else {
      r = o;
      var c = bt;
      bt |= 2;
      var d = Xv();
      (En !== n || Cn !== r) && (nl = null, _u = At() + 500, $l(n, r));
      do
        try {
          dy();
          break;
        } catch (E) {
          qv(n, E);
        }
      while (!0);
      ja(), Kc.current = d, bt = c, fn !== null ? r = 0 : (En = null, Cn = 0, r = Pn);
    }
    if (r !== 0) {
      if (r === 2 && (c = di(n), c !== 0 && (o = c, r = Qs(n, c))), r === 1) throw l = Hs, $l(n, 0), xi(n, o), Jt(n, At()), l;
      if (r === 6) xi(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !cy(c) && (r = ko(n, o), r === 2 && (d = di(n), d !== 0 && (o = d, r = Qs(n, d))), r === 1)) throw l = Hs, $l(n, 0), xi(n, o), Jt(n, At()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(A(345));
          case 2:
            Lu(n, tr, nl);
            break;
          case 3:
            if (xi(n, o), (o & 130023424) === o && (r = Bs + 500 - At(), 10 < r)) {
              if (fi(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Wn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Ss(Lu.bind(null, n, tr, nl), r);
              break;
            }
            Lu(n, tr, nl);
            break;
          case 4:
            if (xi(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Er(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = At() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Gv(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Ss(Lu.bind(null, n, tr, nl), o);
              break;
            }
            Lu(n, tr, nl);
            break;
          case 5:
            Lu(n, tr, nl);
            break;
          default:
            throw Error(A(329));
        }
      }
    }
    return Jt(n, At()), n.callbackNode === l ? bu.bind(null, n) : null;
  }
  function Qs(n, r) {
    var l = Ps;
    return n.current.memoizedState.isDehydrated && ($l(n, r).flags |= 256), n = ko(n, r), n !== 2 && (r = tr, tr = l, r !== null && Du(r)), n;
  }
  function Du(n) {
    tr === null ? tr = n : tr.push.apply(tr, n);
  }
  function cy(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!ei(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
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
  function xi(n, r) {
    for (r &= ~Vs, r &= ~Zc, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Er(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function ef(n) {
    if (bt & 6) throw Error(A(327));
    Oo();
    var r = fi(n, 0);
    if (!(r & 1)) return Jt(n, At()), null;
    var l = ko(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = di(n);
      o !== 0 && (r = o, l = Qs(n, o));
    }
    if (l === 1) throw l = Hs, $l(n, 0), xi(n, r), Jt(n, At()), l;
    if (l === 6) throw Error(A(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Lu(n, tr, nl), Jt(n, At()), null;
  }
  function ku(n, r) {
    var l = bt;
    bt |= 1;
    try {
      return n(r);
    } finally {
      bt = l, bt === 0 && (_u = At() + 500, kl && yi());
    }
  }
  function Ou(n) {
    wi !== null && wi.tag === 0 && !(bt & 6) && Oo();
    var r = bt;
    bt |= 1;
    var l = Sa.transition, o = ht;
    try {
      if (Sa.transition = null, ht = 1, n) return n();
    } finally {
      ht = o, Sa.transition = l, bt = r, !(bt & 6) && yi();
    }
  }
  function Do() {
    br = wu.current, Re(wu);
  }
  function $l(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Es(l)), fn !== null) for (l = fn.return; l !== null; ) {
      var o = l;
      switch (Dc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && Yr();
          break;
        case 3:
          co(), Re(We), Re(Yn), zc();
          break;
        case 5:
          md(o);
          break;
        case 4:
          co();
          break;
        case 13:
          Re(hn);
          break;
        case 19:
          Re(hn);
          break;
        case 10:
          va(o.type._context);
          break;
        case 22:
        case 23:
          Do();
      }
      l = l.return;
    }
    if (En = n, fn = n = Yl(n.current, null), Cn = br = r, Pn = 0, Hs = null, Vs = Zc = xu = 0, tr = Ps = null, gu !== null) {
      for (r = 0; r < gu.length; r++) if (l = gu[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      gu = null;
    }
    return n;
  }
  function qv(n, r) {
    do {
      var l = fn;
      try {
        if (ja(), Uc.current = Ei, ln) {
          for (var o = ne.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          ln = !1;
        }
        if (Zi = 0, Ie = ke = ne = null, Gr = !1, fo = 0, bo.current = null, l === null || l.return === null) {
          Pn = 1, Hs = r, fn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = Cn, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var z = T, Q = E, G = Q.tag;
            if (!(Q.mode & 1) && (G === 0 || G === 11 || G === 15)) {
              var Y = Q.alternate;
              Y ? (Q.updateQueue = Y.updateQueue, Q.memoizedState = Y.memoizedState, Q.lanes = Y.lanes) : (Q.updateQueue = null, Q.memoizedState = null);
            }
            var se = Ls(m);
            if (se !== null) {
              se.flags &= -257, Pv(se, m, E, d, r), se.mode & 1 && Vv(d, z, r), r = se, T = z;
              var me = r.updateQueue;
              if (me === null) {
                var Se = /* @__PURE__ */ new Set();
                Se.add(T), r.updateQueue = Se;
              } else me.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                Vv(d, z, r), Pd();
                break e;
              }
              T = Error(A(426));
            }
          } else if (an && E.mode & 1) {
            var Dn = Ls(m);
            if (Dn !== null) {
              !(Dn.flags & 65536) && (Dn.flags |= 256), Pv(Dn, m, E, d, r), zn(Eo(T, E));
              break e;
            }
          }
          d = T = Eo(T, E), Pn !== 4 && (Pn = 2), Ps === null ? Ps = [d] : Ps.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var D = _d(d, T, r);
                Nv(d, D);
                break e;
              case 1:
                E = T;
                var x = d.type, L = d.stateNode;
                if (!(d.flags & 128) && (typeof x.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (Vl === null || !Vl.has(L)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var K = Hv(d, E, r);
                  Nv(d, K);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Zv(l);
      } catch (Te) {
        r = Te, fn === l && l !== null && (fn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Xv() {
    var n = Kc.current;
    return Kc.current = Ei, n === null ? Ei : n;
  }
  function Pd() {
    (Pn === 0 || Pn === 3 || Pn === 2) && (Pn = 4), En === null || !(xu & 268435455) && !(Zc & 268435455) || xi(En, Cn);
  }
  function ko(n, r) {
    var l = bt;
    bt |= 2;
    var o = Xv();
    (En !== n || Cn !== r) && (nl = null, $l(n, r));
    do
      try {
        fy();
        break;
      } catch (c) {
        qv(n, c);
      }
    while (!0);
    if (ja(), bt = l, Kc.current = o, fn !== null) throw Error(A(261));
    return En = null, Cn = 0, Pn;
  }
  function fy() {
    for (; fn !== null; ) Kv(fn);
  }
  function dy() {
    for (; fn !== null && !cn(); ) Kv(fn);
  }
  function Kv(n) {
    var r = nh(n.alternate, n, br);
    n.memoizedProps = n.pendingProps, r === null ? Zv(n) : fn = r, bo.current = null;
  }
  function Zv(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = oy(l, r), l !== null) {
          l.flags &= 32767, fn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Pn = 6, fn = null;
          return;
        }
      } else if (l = uy(l, r, br), l !== null) {
        fn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        fn = r;
        return;
      }
      fn = r = n;
    } while (r !== null);
    Pn === 0 && (Pn = 5);
  }
  function Lu(n, r, l) {
    var o = ht, c = Sa.transition;
    try {
      Sa.transition = null, ht = 1, Jv(n, r, l, o);
    } finally {
      Sa.transition = c, ht = o;
    }
    return null;
  }
  function Jv(n, r, l, o) {
    do
      Oo();
    while (wi !== null);
    if (bt & 6) throw Error(A(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(A(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Jo(n, d), n === En && (fn = En = null, Cn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Pl || (Pl = !0, rh(Ke, function() {
      return Oo(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Sa.transition, Sa.transition = null;
      var m = ht;
      ht = 1;
      var E = bt;
      bt |= 4, bo.current = null, Nd(n, l), tl(l, n), fu(nd), cu = !!td, nd = td = null, n.current = l, sy(l), vr(), bt = E, ht = m, Sa.transition = d;
    } else n.current = l;
    if (Pl && (Pl = !1, wi = n, Bl = c), d = n.pendingLanes, d === 0 && (Vl = null), qo(l.stateNode), Jt(n, At()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Jc) throw Jc = !1, n = Hd, Hd = null, n;
    return Bl & 1 && n.tag !== 0 && Oo(), d = n.pendingLanes, d & 1 ? n === Vd ? $s++ : ($s = 0, Vd = n) : $s = 0, yi(), null;
  }
  function Oo() {
    if (wi !== null) {
      var n = ts(Bl), r = Sa.transition, l = ht;
      try {
        if (Sa.transition = null, ht = 16 > n ? 16 : n, wi === null) var o = !1;
        else {
          if (n = wi, wi = null, Bl = 0, bt & 6) throw Error(A(331));
          var c = bt;
          for (bt |= 4, de = n.current; de !== null; ) {
            var d = de, m = d.child;
            if (de.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var z = E[T];
                  for (de = z; de !== null; ) {
                    var Q = de;
                    switch (Q.tag) {
                      case 0:
                      case 11:
                      case 15:
                        As(8, Q, d);
                    }
                    var G = Q.child;
                    if (G !== null) G.return = Q, de = G;
                    else for (; de !== null; ) {
                      Q = de;
                      var Y = Q.sibling, se = Q.return;
                      if (Ud(Q), Q === z) {
                        de = null;
                        break;
                      }
                      if (Y !== null) {
                        Y.return = se, de = Y;
                        break;
                      }
                      de = se;
                    }
                  }
                }
                var me = d.alternate;
                if (me !== null) {
                  var Se = me.child;
                  if (Se !== null) {
                    me.child = null;
                    do {
                      var Dn = Se.sibling;
                      Se.sibling = null, Se = Dn;
                    } while (Se !== null);
                  }
                }
                de = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, de = m;
            else e: for (; de !== null; ) {
              if (d = de, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  As(9, d, d.return);
              }
              var D = d.sibling;
              if (D !== null) {
                D.return = d.return, de = D;
                break e;
              }
              de = d.return;
            }
          }
          var x = n.current;
          for (de = x; de !== null; ) {
            m = de;
            var L = m.child;
            if (m.subtreeFlags & 2064 && L !== null) L.return = m, de = L;
            else e: for (m = x; de !== null; ) {
              if (E = de, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Fs(9, E);
                }
              } catch (Te) {
                Rn(E, E.return, Te);
              }
              if (E === m) {
                de = null;
                break e;
              }
              var K = E.sibling;
              if (K !== null) {
                K.return = E.return, de = K;
                break e;
              }
              de = E.return;
            }
          }
          if (bt = c, yi(), Vr && typeof Vr.onPostCommitFiberRoot == "function") try {
            Vr.onPostCommitFiberRoot(gl, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        ht = l, Sa.transition = r;
      }
    }
    return !1;
  }
  function eh(n, r, l) {
    r = Eo(l, r), r = _d(n, r, 1), n = ma(n, r, 1), r = Wn(), n !== null && (El(n, 1, r), Jt(n, r));
  }
  function Rn(n, r, l) {
    if (n.tag === 3) eh(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        eh(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Vl === null || !Vl.has(o))) {
          n = Eo(l, n), n = Hv(r, n, 1), r = ma(r, n, 1), n = Wn(), r !== null && (El(r, 1, n), Jt(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function py(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Wn(), n.pingedLanes |= n.suspendedLanes & l, En === n && (Cn & l) === l && (Pn === 4 || Pn === 3 && (Cn & 130023424) === Cn && 500 > At() - Bs ? $l(n, 0) : Vs |= l), Jt(n, r);
  }
  function th(n, r) {
    r === 0 && (n.mode & 1 ? (r = Qu, Qu <<= 1, !(Qu & 130023424) && (Qu = 4194304)) : r = 1);
    var l = Wn();
    n = Ki(n, r), n !== null && (El(n, r, l), Jt(n, l));
  }
  function vy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), th(n, l);
  }
  function Bd(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(A(314));
    }
    o !== null && o.delete(r), th(n, l);
  }
  var nh;
  nh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || We.current) Rr = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return Rr = !1, ga(n, r, l);
      Rr = !!(n.flags & 131072);
    }
    else Rr = !1, an && r.flags & 1048576 && Ll(r, mu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        zs(n, r), n = r.pendingProps;
        var c = fa(r, Yn.current);
        uo(r, l), c = xs(null, r, o, n, c, l);
        var d = $();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Nn(o) ? (d = !0, hu(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, pd(r), c.updater = Al, r.stateNode = c, c._reactInternals = r, Td(r, o, n, l), r = Ro(null, r, o, !0, d, l)) : (r.tag = 0, an && d && bc(r), Tr(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (zs(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = my(o), n = qr(o, n), c) {
            case 0:
              r = Hl(null, r, o, n, l);
              break e;
            case 1:
              r = Ze(null, r, o, n, l);
              break e;
            case 11:
              r = Fl(null, r, o, n, l);
              break e;
            case 14:
              r = Co(null, r, o, qr(o.type, n), l);
              break e;
          }
          throw Error(A(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : qr(o, c), Hl(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : qr(o, c), Ze(n, r, o, c, l);
      case 3:
        e: {
          if (bd(r), n === null) throw Error(A(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, vd(n, r), Nc(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = Eo(Error(A(423)), r), r = iy(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = Eo(Error(A(424)), r), r = iy(n, r, o, l, c);
            break e;
          } else for (pa = ca(r.stateNode.containerInfo.firstChild), da = r, an = !0, Fa = null, l = Mv(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (io(), o === c) {
              r = Ci(n, r, l);
              break e;
            }
            Tr(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Uv(r), n === null && kc(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, vu(o, c) ? m = null : d !== null && vu(o, d) && (r.flags |= 32), Xr(n, r), Tr(n, r, m, l), r.child;
      case 6:
        return n === null && kc(r), null;
      case 13:
        return To(n, r, l);
      case 4:
        return hd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = zl(r, null, o, l) : Tr(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : qr(o, c), Fl(n, r, o, c, l);
      case 7:
        return Tr(n, r, r.pendingProps, l), r.child;
      case 8:
        return Tr(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Tr(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, Lt(Lc, o._currentValue), o._currentValue = m, d !== null) if (ei(d.value, m)) {
            if (d.children === c.children && !We.current) {
              r = Ci(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var E = d.dependencies;
            if (E !== null) {
              m = d.child;
              for (var T = E.firstContext; T !== null; ) {
                if (T.context === o) {
                  if (d.tag === 1) {
                    T = ha(-1, l & -l), T.tag = 2;
                    var z = d.updateQueue;
                    if (z !== null) {
                      z = z.shared;
                      var Q = z.pending;
                      Q === null ? T.next = T : (T.next = Q.next, Q.next = T), z.pending = T;
                    }
                  }
                  d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), fd(
                    d.return,
                    l,
                    r
                  ), E.lanes |= l;
                  break;
                }
                T = T.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(A(341));
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), fd(m, l, r), m = d.sibling;
            } else m = d.child;
            if (m !== null) m.return = d;
            else for (m = d; m !== null; ) {
              if (m === r) {
                m = null;
                break;
              }
              if (d = m.sibling, d !== null) {
                d.return = m.return, m = d;
                break;
              }
              m = m.return;
            }
            d = m;
          }
          Tr(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, uo(r, l), c = Ha(c), o = o(c), r.flags |= 1, Tr(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = qr(o, r.pendingProps), c = qr(o.type, c), Co(n, r, o, c, l);
      case 15:
        return jl(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : qr(o, c), zs(n, r), r.tag = 1, Nn(o) ? (n = !0, hu(r)) : n = !1, uo(r, l), Fv(r, o, c), Td(r, o, c, l), Ro(null, r, o, !0, n, l);
      case 19:
        return Ld(n, r, l);
      case 22:
        return Gc(n, r, l);
    }
    throw Error(A(156, r.tag));
  };
  function rh(n, r) {
    return Ln(n, r);
  }
  function hy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ea(n, r, l, o) {
    return new hy(n, r, l, o);
  }
  function $d(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function my(n) {
    if (typeof n == "function") return $d(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === gt) return 11;
      if (n === Je) return 14;
    }
    return 2;
  }
  function Yl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ea(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function tf(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") $d(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case ot:
        return Mu(l.children, c, d, r);
      case $e:
        m = 8, c |= 8;
        break;
      case wn:
        return n = Ea(12, l, r, c | 2), n.elementType = wn, n.lanes = d, n;
      case tn:
        return n = Ea(13, l, r, c), n.elementType = tn, n.lanes = d, n;
      case He:
        return n = Ea(19, l, r, c), n.elementType = He, n.lanes = d, n;
      case et:
        return nf(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case yn:
            m = 10;
            break e;
          case Xt:
            m = 9;
            break e;
          case gt:
            m = 11;
            break e;
          case Je:
            m = 14;
            break e;
          case Tt:
            m = 16, o = null;
            break e;
        }
        throw Error(A(130, n == null ? n : typeof n, ""));
    }
    return r = Ea(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Mu(n, r, l, o) {
    return n = Ea(7, n, o, r), n.lanes = l, n;
  }
  function nf(n, r, l, o) {
    return n = Ea(22, n, o, r), n.elementType = et, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Yd(n, r, l) {
    return n = Ea(6, n, null, r), n.lanes = l, n;
  }
  function rf(n, r, l) {
    return r = Ea(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Id(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = lu(0), this.expirationTimes = lu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = lu(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Nu(n, r, l, o, c, d, m, E, T) {
    return n = new Id(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ea(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, pd(d), n;
  }
  function yy(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ce, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Qd(n) {
    if (!n) return za;
    n = n._reactInternals;
    e: {
      if (W(n) !== n || n.tag !== 1) throw Error(A(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Nn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(A(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Nn(l)) return Dl(n, l, r);
    }
    return r;
  }
  function Wd(n, r, l, o, c, d, m, E, T) {
    return n = Nu(l, o, !0, n, c, d, m, E, T), n.context = Qd(null), l = n.current, o = Wn(), c = ui(l), d = ha(o, c), d.callback = r ?? null, ma(l, d, c), n.current.lanes = c, El(n, c, o), Jt(n, o), n;
  }
  function Ws(n, r, l, o) {
    var c = r.current, d = Wn(), m = ui(c);
    return l = Qd(l), r.context === null ? r.context = l : r.pendingContext = l, r = ha(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = ma(c, r, m), n !== null && (Va(n, c, m, d), Mc(n, c, m)), m;
  }
  function af(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Gd(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function qd(n, r) {
    Gd(n, r), (n = n.alternate) && Gd(n, r);
  }
  function gy() {
    return null;
  }
  var ah = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function lf(n) {
    this._internalRoot = n;
  }
  Gs.prototype.render = lf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(A(409));
    Ws(n, r, null, null);
  }, Gs.prototype.unmount = lf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ou(function() {
        Ws(null, n, null, null);
      }), r[ti] = null;
    }
  };
  function Gs(n) {
    this._internalRoot = n;
  }
  Gs.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = mt();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < nn.length && r !== 0 && r < nn[l].priority; l++) ;
      nn.splice(l, 0, n), l === 0 && Za(n);
    }
  };
  function uf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function rl(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function ih() {
  }
  function Sy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var z = af(m);
          d.call(z);
        };
      }
      var m = Wd(r, o, n, 0, null, !1, !1, "", ih);
      return n._reactRootContainer = m, n[ti] = m.current, vi(n.nodeType === 8 ? n.parentNode : n), Ou(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var z = af(T);
        E.call(z);
      };
    }
    var T = Nu(n, 0, !1, null, null, !1, !1, "", ih);
    return n._reactRootContainer = T, n[ti] = T.current, vi(n.nodeType === 8 ? n.parentNode : n), Ou(function() {
      Ws(r, T, l, o);
    }), T;
  }
  function of(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var T = af(m);
          E.call(T);
        };
      }
      Ws(r, m, n, c);
    } else m = Sy(l, r, n, c, o);
    return af(m);
  }
  Wu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Fi(r.pendingLanes);
          l !== 0 && (es(r, l | 1), Jt(r, At()), !(bt & 6) && (_u = At() + 500, yi()));
        }
        break;
      case 13:
        Ou(function() {
          var o = Ki(n, 1);
          if (o !== null) {
            var c = Wn();
            Va(o, n, 1, c);
          }
        }), qd(n, 1);
    }
  }, Cl = function(n) {
    if (n.tag === 13) {
      var r = Ki(n, 134217728);
      if (r !== null) {
        var l = Wn();
        Va(r, n, 134217728, l);
      }
      qd(n, 134217728);
    }
  }, ns = function(n) {
    if (n.tag === 13) {
      var r = ui(n), l = Ki(n, r);
      if (l !== null) {
        var o = Wn();
        Va(l, n, r, o);
      }
      qd(n, r);
    }
  }, mt = function() {
    return ht;
  }, Gu = function(n, r) {
    var l = ht;
    try {
      return ht = n, r();
    } finally {
      ht = l;
    }
  }, Vt = function(n, r, l) {
    switch (r) {
      case "input":
        if (xn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = xc(o);
              if (!c) throw Error(A(90));
              Fr(o), xn(o, c);
            }
          }
        }
        break;
      case "textarea":
        dr(n, l);
        break;
      case "select":
        r = l.value, r != null && Hn(n, !!l.multiple, r, !1);
    }
  }, hl = ku, nu = Ou;
  var Ey = { usingClientEntryPoint: !1, Events: [hi, ao, xc, Ga, ba, ku] }, qs = { findFiberByHostInstance: Gi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Cy = { bundleType: qs.bundleType, version: qs.version, rendererPackageName: qs.rendererPackageName, rendererConfig: qs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: je.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = ze(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: qs.findFiberByHostInstance || gy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xs.isDisabled && Xs.supportsFiber) try {
      gl = Xs.inject(Cy), Vr = Xs;
    } catch {
    }
  }
  return Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ey, Qa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!uf(r)) throw Error(A(200));
    return yy(n, r, null, l);
  }, Qa.createRoot = function(n, r) {
    if (!uf(n)) throw Error(A(299));
    var l = !1, o = "", c = ah;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Nu(n, 1, !1, null, null, l, !1, o, c), n[ti] = r.current, vi(n.nodeType === 8 ? n.parentNode : n), new lf(r);
  }, Qa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(A(188)) : (n = Object.keys(n).join(","), Error(A(268, n)));
    return n = ze(r), n = n === null ? null : n.stateNode, n;
  }, Qa.flushSync = function(n) {
    return Ou(n);
  }, Qa.hydrate = function(n, r, l) {
    if (!rl(r)) throw Error(A(200));
    return of(null, n, r, !0, l);
  }, Qa.hydrateRoot = function(n, r, l) {
    if (!uf(n)) throw Error(A(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = ah;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Wd(r, null, n, 1, l ?? null, c, !1, d, m), n[ti] = r.current, vi(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new Gs(r);
  }, Qa.render = function(n, r, l) {
    if (!rl(r)) throw Error(A(200));
    return of(null, n, r, !1, l);
  }, Qa.unmountComponentAtNode = function(n) {
    if (!rl(n)) throw Error(A(40));
    return n._reactRootContainer ? (Ou(function() {
      of(null, null, n, !1, function() {
        n._reactRootContainer = null, n[ti] = null;
      });
    }), !0) : !1;
  }, Qa.unstable_batchedUpdates = ku, Qa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!rl(l)) throw Error(A(200));
    if (n == null || n._reactInternals === void 0) throw Error(A(38));
    return of(n, r, l, !1, o);
  }, Qa.version = "18.3.1-next-f1338f8080-20240426", Qa;
}
var Wa = {}, iR;
function uD() {
  if (iR) return Wa;
  iR = 1;
  var Z = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return Z.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var ae = Zp(), A = sR(), ct = ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, xt = !1;
    function en(e) {
      xt = e;
    }
    function lt(e) {
      if (!xt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ft("warn", e, a);
      }
    }
    function S(e) {
      if (!xt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ft("error", e, a);
      }
    }
    function ft(e, t, a) {
      {
        var i = ct.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Ne = 0, ve = 1, Qe = 2, ee = 3, Ue = 4, ue = 5, Ee = 6, dt = 7, Fn = 8, on = 9, tt = 10, je = 11, kt = 12, Ce = 13, ot = 14, $e = 15, wn = 16, yn = 17, Xt = 18, gt = 19, tn = 21, He = 22, Je = 23, Tt = 24, et = 25, P = !0, he = !1, ie = !1, b = !1, B = !1, De = !0, Ve = !1, Xe = !0, nt = !0, vt = !0, ut = !0, St = /* @__PURE__ */ new Set(), Ht = {}, qn = {};
    function Fr(e, t) {
      cr(e, t), cr(e + "Capture", t);
    }
    function cr(e, t) {
      Ht[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Ht[e] = t;
      {
        var a = e.toLowerCase();
        qn[a] = e, e === "onDoubleClick" && (qn.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        St.add(t[i]);
    }
    var gn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Xn = Object.prototype.hasOwnProperty;
    function jn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function xn(e) {
      try {
        return On(e), !1;
      } catch {
        return !0;
      }
    }
    function On(e) {
      return "" + e;
    }
    function yr(e, t) {
      if (xn(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, jn(e)), On(e);
    }
    function fr(e) {
      if (xn(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", jn(e)), On(e);
    }
    function Hn(e, t) {
      if (xn(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, jn(e)), On(e);
    }
    function na(e, t) {
      if (xn(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, jn(e)), On(e);
    }
    function ra(e) {
      if (xn(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", jn(e)), On(e);
    }
    function dr(e) {
      if (xn(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", jn(e)), On(e);
    }
    var aa = 0, Kn = 1, gr = 2, sn = 3, ia = 4, la = 5, ua = 6, te = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", be = te + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", rt = new RegExp("^[" + te + "][" + be + "]*$"), zt = {}, Ot = {};
    function _n(e) {
      return Xn.call(Ot, e) ? !0 : Xn.call(zt, e) ? !1 : rt.test(e) ? (Ot[e] = !0, !0) : (zt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function dn(e, t, a) {
      return t !== null ? t.type === aa : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function pr(e, t, a, i) {
      if (a !== null && a.type === aa)
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
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Vt(e, t, a, i) {
      if (t === null || typeof t > "u" || pr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case sn:
            return !t;
          case ia:
            return t === !1;
          case la:
            return isNaN(t);
          case ua:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function $n(e) {
      return Kt.hasOwnProperty(e) ? Kt[e] : null;
    }
    function Ut(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === gr || t === sn || t === ia, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Kt = {}, Ga = [
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
    Ga.forEach(function(e) {
      Kt[e] = new Ut(
        e,
        aa,
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
      Kt[t] = new Ut(
        t,
        Kn,
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
      Kt[e] = new Ut(
        e,
        gr,
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
      Kt[e] = new Ut(
        e,
        gr,
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
      Kt[e] = new Ut(
        e,
        sn,
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
      Kt[e] = new Ut(
        e,
        sn,
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
      Kt[e] = new Ut(
        e,
        ia,
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
      Kt[e] = new Ut(
        e,
        ua,
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
      Kt[e] = new Ut(
        e,
        la,
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
    var ba = /[\-\:]([a-z])/g, hl = function(e) {
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
      var t = e.replace(ba, hl);
      Kt[t] = new Ut(
        t,
        Kn,
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
      var t = e.replace(ba, hl);
      Kt[t] = new Ut(
        t,
        Kn,
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
      var t = e.replace(ba, hl);
      Kt[t] = new Ut(
        t,
        Kn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Kt[e] = new Ut(
        e,
        Kn,
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
    var nu = "xlinkHref";
    Kt[nu] = new Ut(
      "xlinkHref",
      Kn,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Kt[e] = new Ut(
        e,
        Kn,
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
    var ru = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, ml = !1;
    function qa(e) {
      !ml && ru.test(e) && (ml = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Xa(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        yr(a, t), i.sanitizeURL && qa("" + a);
        var s = i.attributeName, f = null;
        if (i.type === ia) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Vt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Vt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === sn)
            return a;
          f = e.getAttribute(s);
        }
        return Vt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function Da(e, t, a, i) {
      {
        if (!_n(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return yr(a, t), u === "" + a ? a : u;
      }
    }
    function Ni(e, t, a, i) {
      var u = $n(t);
      if (!dn(t, u, i)) {
        if (Vt(t, a, u, i) && (a = null), i || u === null) {
          if (_n(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (yr(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === sn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var _ = u.type, w;
          _ === sn || _ === ia && a === !0 ? w = "" : (yr(a, y), w = "" + a, u.sanitizeURL && qa(w.toString())), g ? e.setAttributeNS(g, y, w) : e.setAttribute(y, w);
        }
      }
    }
    var Sr = Symbol.for("react.element"), jr = Symbol.for("react.portal"), oa = Symbol.for("react.fragment"), zi = Symbol.for("react.strict_mode"), yl = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), I = Symbol.for("react.context"), W = Symbol.for("react.forward_ref"), Oe = Symbol.for("react.suspense"), st = Symbol.for("react.suspense_list"), Et = Symbol.for("react.memo"), ze = Symbol.for("react.lazy"), at = Symbol.for("react.scope"), Ln = Symbol.for("react.debug_trace_mode"), Qt = Symbol.for("react.offscreen"), cn = Symbol.for("react.legacy_hidden"), vr = Symbol.for("react.cache"), At = Symbol.for("react.tracing_marker"), ka = Symbol.iterator, Mn = "@@iterator";
    function Hr(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = ka && e[ka] || e[Mn];
      return typeof t == "function" ? t : null;
    }
    var Ke = Object.assign, Ui = 0, Ai, gl, Vr, qo, Er, Xo, Ko;
    function Zo() {
    }
    Zo.__reactDisabledLog = !0;
    function au() {
      {
        if (Ui === 0) {
          Ai = console.log, gl = console.info, Vr = console.warn, qo = console.error, Er = console.group, Xo = console.groupCollapsed, Ko = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Zo,
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
        Ui++;
      }
    }
    function Qu() {
      {
        if (Ui--, Ui === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ke({}, e, {
              value: Ai
            }),
            info: Ke({}, e, {
              value: gl
            }),
            warn: Ke({}, e, {
              value: Vr
            }),
            error: Ke({}, e, {
              value: qo
            }),
            group: Ke({}, e, {
              value: Er
            }),
            groupCollapsed: Ke({}, e, {
              value: Xo
            }),
            groupEnd: Ke({}, e, {
              value: Ko
            })
          });
        }
        Ui < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Fi = ct.ReactCurrentDispatcher, fi;
    function Oa(e, t, a) {
      {
        if (fi === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            fi = i && i[1] || "";
          }
        return `
` + fi + e;
      }
    }
    var Sl = !1, di;
    {
      var iu = typeof WeakMap == "function" ? WeakMap : Map;
      di = new iu();
    }
    function lu(e, t) {
      if (!e || Sl)
        return "";
      {
        var a = di.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Sl = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Fi.current, Fi.current = null, au();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (U) {
              i = U;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (U) {
              i = U;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (U) {
            i = U;
          }
          e();
        }
      } catch (U) {
        if (U && i && typeof U.stack == "string") {
          for (var p = U.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var _ = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && di.set(e, _), _;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        Sl = !1, Fi.current = s, Qu(), Error.prepareStackTrace = u;
      }
      var w = e ? e.displayName || e.name : "", N = w ? Oa(w) : "";
      return typeof e == "function" && di.set(e, N), N;
    }
    function El(e, t, a) {
      return lu(e, !0);
    }
    function Jo(e, t, a) {
      return lu(e, !1);
    }
    function es(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ht(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return lu(e, es(e));
      if (typeof e == "string")
        return Oa(e);
      switch (e) {
        case Oe:
          return Oa("Suspense");
        case st:
          return Oa("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case W:
            return Jo(e.render);
          case Et:
            return ht(e.type, t, a);
          case ze: {
            var i = e, u = i._payload, s = i._init;
            try {
              return ht(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function ts(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ue:
          return Oa(e.type);
        case wn:
          return Oa("Lazy");
        case Ce:
          return Oa("Suspense");
        case gt:
          return Oa("SuspenseList");
        case Ne:
        case Qe:
        case $e:
          return Jo(e.type);
        case je:
          return Jo(e.type.render);
        case ve:
          return El(e.type);
        default:
          return "";
      }
    }
    function Wu(e) {
      try {
        var t = "", a = e;
        do
          t += ts(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Cl(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function ns(e) {
      return e.displayName || "Context";
    }
    function mt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case oa:
          return "Fragment";
        case jr:
          return "Portal";
        case yl:
          return "Profiler";
        case zi:
          return "StrictMode";
        case Oe:
          return "Suspense";
        case st:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case I:
            var t = e;
            return ns(t) + ".Consumer";
          case R:
            var a = e;
            return ns(a._context) + ".Provider";
          case W:
            return Cl(e, e.render, "ForwardRef");
          case Et:
            var i = e.displayName || null;
            return i !== null ? i : mt(e.type) || "Memo";
          case ze: {
            var u = e, s = u._payload, f = u._init;
            try {
              return mt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Gu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function uu(e) {
      return e.displayName || "Context";
    }
    function Ye(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Tt:
          return "Cache";
        case on:
          var i = a;
          return uu(i) + ".Consumer";
        case tt:
          var u = a;
          return uu(u._context) + ".Provider";
        case Xt:
          return "DehydratedFragment";
        case je:
          return Gu(a, a.render, "ForwardRef");
        case dt:
          return "Fragment";
        case ue:
          return a;
        case Ue:
          return "Portal";
        case ee:
          return "Root";
        case Ee:
          return "Text";
        case wn:
          return mt(a);
        case Fn:
          return a === zi ? "StrictMode" : "Mode";
        case He:
          return "Offscreen";
        case kt:
          return "Profiler";
        case tn:
          return "Scope";
        case Ce:
          return "Suspense";
        case gt:
          return "SuspenseList";
        case et:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case ve:
        case Ne:
        case yn:
        case Qe:
        case ot:
        case $e:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Ka = ct.ReactDebugCurrentFrame, pn = null, Pr = !1;
    function La() {
      {
        if (pn === null)
          return null;
        var e = pn._debugOwner;
        if (e !== null && typeof e < "u")
          return Ye(e);
      }
      return null;
    }
    function Rl() {
      return pn === null ? "" : Wu(pn);
    }
    function nn() {
      Ka.getCurrentStack = null, pn = null, Pr = !1;
    }
    function vn(e) {
      Ka.getCurrentStack = e === null ? null : Rl, pn = e, Pr = !1;
    }
    function rs() {
      return pn;
    }
    function Zn(e) {
      Pr = e;
    }
    function Br(e) {
      return "" + e;
    }
    function Za(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return dr(e), e;
        default:
          return "";
      }
    }
    var qu = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function ou(e, t) {
      qu[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function su(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Tl(e) {
      return e._valueTracker;
    }
    function Ma(e) {
      e._valueTracker = null;
    }
    function ji(e) {
      var t = "";
      return e && (su(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function cu(e) {
      var t = su(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      dr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            dr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            dr(p), i = "" + p;
          },
          stopTracking: function() {
            Ma(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Hi(e) {
      Tl(e) || (e._valueTracker = cu(e));
    }
    function Xu(e) {
      if (!e)
        return !1;
      var t = Tl(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = ji(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function pi(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Vi = !1, Ku = !1, as = !1, Ja = !1;
    function Zu(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function h(e, t) {
      var a = e, i = t.checked, u = Ke({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function C(e, t) {
      ou("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Ku && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", La() || "A component", t.type), Ku = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Vi && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", La() || "A component", t.type), Vi = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Za(t.value != null ? t.value : i),
        controlled: Zu(t)
      };
    }
    function M(e, t) {
      var a = e, i = t.checked;
      i != null && Ni(a, "checked", i, !1);
    }
    function F(e, t) {
      var a = e;
      {
        var i = Zu(t);
        !a._wrapperState.controlled && i && !Ja && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Ja = !0), a._wrapperState.controlled && !i && !as && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), as = !0);
      }
      M(e, t);
      var u = Za(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Br(u)) : a.value !== Br(u) && (a.value = Br(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Pe(a, t.type, u) : t.hasOwnProperty("defaultValue") && Pe(a, t.type, Za(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function X(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Br(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function ge(e, t) {
      var a = e;
      F(a, t), fe(a, t);
    }
    function fe(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        yr(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Th(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Xu(f), F(f, p);
          }
        }
      }
    }
    function Pe(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || pi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Br(e._wrapperState.initialValue) : e.defaultValue !== Br(a) && (e.defaultValue = Br(a)));
    }
    var it = !1, Ft = !1, Pt = !1;
    function Bt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? ae.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ft || (Ft = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Pt || (Pt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !it && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), it = !0);
    }
    function $t(e, t) {
      t.value != null && e.setAttribute("value", Br(Za(t.value)));
    }
    var rn = Array.isArray;
    function wt(e) {
      return rn(e);
    }
    var wl;
    wl = !1;
    function Ju() {
      var e = La();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var is = ["value", "defaultValue"];
    function ls(e) {
      {
        ou("select", e);
        for (var t = 0; t < is.length; t++) {
          var a = is[t];
          if (e[a] != null) {
            var i = wt(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Ju()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Ju());
          }
        }
      }
    }
    function Pi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = Br(Za(a)), _ = null, w = 0; w < u.length; w++) {
          if (u[w].value === g) {
            u[w].selected = !0, i && (u[w].defaultSelected = !0);
            return;
          }
          _ === null && !u[w].disabled && (_ = u[w]);
        }
        _ !== null && (_.selected = !0);
      }
    }
    function us(e, t) {
      return Ke({}, t, {
        value: void 0
      });
    }
    function os(e, t) {
      var a = e;
      ls(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !wl && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), wl = !0);
    }
    function Vf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Pi(a, !!t.multiple, i, !1) : t.defaultValue != null && Pi(a, !!t.multiple, t.defaultValue, !0);
    }
    function Pm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Pi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Pi(a, !!t.multiple, t.defaultValue, !0) : Pi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Jp(e, t) {
      var a = e, i = t.value;
      i != null && Pi(a, !!t.multiple, i, !1);
    }
    var ev = !1;
    function Pf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Ke({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Br(a._wrapperState.initialValue)
      });
      return i;
    }
    function tv(e, t) {
      var a = e;
      ou("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !ev && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", La() || "A component"), ev = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (wt(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Za(i)
      };
    }
    function nv(e, t) {
      var a = e, i = Za(t.value), u = Za(t.defaultValue);
      if (i != null) {
        var s = Br(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Br(u));
    }
    function hc(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Bm(e, t) {
      nv(e, t);
    }
    var Bi = "http://www.w3.org/1999/xhtml", $m = "http://www.w3.org/1998/Math/MathML", mc = "http://www.w3.org/2000/svg";
    function Bf(e) {
      switch (e) {
        case "svg":
          return mc;
        case "math":
          return $m;
        default:
          return Bi;
      }
    }
    function $f(e, t) {
      return e == null || e === Bi ? Bf(t) : e === mc && t === "foreignObject" ? Bi : e;
    }
    var Ym = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, yc, rv = Ym(function(e, t) {
      if (e.namespaceURI === mc && !("innerHTML" in e)) {
        yc = yc || document.createElement("div"), yc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = yc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), $r = 1, $i = 3, Sn = 8, sa = 9, Yf = 11, ss = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === $i) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, av = {
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
    }, eo = {
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
    function iv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var lv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(eo).forEach(function(e) {
      lv.forEach(function(t) {
        eo[iv(t, e)] = eo[e];
      });
    });
    function xl(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(eo.hasOwnProperty(e) && eo[e]) ? t + "px" : (na(t, e), ("" + t).trim());
    }
    var Im = /([A-Z])/g, Qm = /^ms-/;
    function Wm(e) {
      return e.replace(Im, "-$1").toLowerCase().replace(Qm, "-ms-");
    }
    var If = function() {
    };
    {
      var uv = /^(?:webkit|moz|o)[A-Z]/, cs = /^-ms-/, fs = /-(.)/g, ov = /;\s*$/, Yi = {}, Qf = {}, Wf = !1, gc = !1, Gf = function(e) {
        return e.replace(fs, function(t, a) {
          return a.toUpperCase();
        });
      }, sv = function(e) {
        Yi.hasOwnProperty(e) && Yi[e] || (Yi[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Gf(e.replace(cs, "ms-"))
        ));
      }, cv = function(e) {
        Yi.hasOwnProperty(e) && Yi[e] || (Yi[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, fv = function(e, t) {
        Qf.hasOwnProperty(t) && Qf[t] || (Qf[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(ov, "")));
      }, Gm = function(e, t) {
        Wf || (Wf = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, qm = function(e, t) {
        gc || (gc = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      If = function(e, t) {
        e.indexOf("-") > -1 ? sv(e) : uv.test(e) ? cv(e) : ov.test(t) && fv(e, t), typeof t == "number" && (isNaN(t) ? Gm(e, t) : isFinite(t) || qm(e, t));
      };
    }
    var Xm = If;
    function Km(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Wm(i)) + ":", t += xl(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function dv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Xm(i, t[i]);
          var s = xl(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ei(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function to(e) {
      var t = {};
      for (var a in e)
        for (var i = av[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function pv(e, t) {
      {
        if (!t)
          return;
        var a = to(e), i = to(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ei(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var vv = {
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
    }, hv = Ke({
      menuitem: !0
    }, vv), mv = "__html";
    function ds(e, t) {
      if (t) {
        if (hv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(mv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function fu(e, t) {
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
    var Sc = {
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
    }, du = {
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
    }, _l = {}, ps = new RegExp("^(aria)-[" + be + "]*$"), qf = new RegExp("^(aria)[A-Z][" + be + "]*$");
    function yv(e, t) {
      {
        if (Xn.call(_l, t) && _l[t])
          return !0;
        if (qf.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = du.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), _l[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), _l[t] = !0, !0;
        }
        if (ps.test(t)) {
          var u = t.toLowerCase(), s = du.hasOwnProperty(u) ? u : null;
          if (s == null)
            return _l[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), _l[t] = !0, !0;
        }
      }
      return !0;
    }
    function Ec(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = yv(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function no(e, t) {
      fu(e, t) || Ec(e, t);
    }
    var Cc = !1;
    function gv(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Cc && (Cc = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var vs = function() {
    };
    {
      var hr = {}, Xf = /^on./, Sv = /^on[^A-Z]/, Ev = new RegExp("^(aria)-[" + be + "]*$"), Cv = new RegExp("^(aria)[A-Z][" + be + "]*$");
      vs = function(e, t, a, i) {
        if (Xn.call(hr, t) && hr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), hr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), hr[t] = !0, !0;
          if (Xf.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), hr[t] = !0, !0;
        } else if (Xf.test(t))
          return Sv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), hr[t] = !0, !0;
        if (Ev.test(t) || Cv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), hr[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), hr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), hr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), hr[t] = !0, !0;
        var v = $n(t), y = v !== null && v.type === aa;
        if (Sc.hasOwnProperty(u)) {
          var g = Sc[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), hr[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), hr[t] = !0, !0;
        return typeof a == "boolean" && pr(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), hr[t] = !0, !0) : y ? !0 : pr(t, a, v, !1) ? (hr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === sn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), hr[t] = !0), !0);
      };
    }
    var Rv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = vs(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function bl(e, t, a) {
      fu(e, t) || Rv(e, t, a);
    }
    var Rc = 1, hs = 2, ms = 4, Zm = Rc | hs | ms, Ii = null;
    function Jm(e) {
      Ii !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Ii = e;
    }
    function Tv() {
      Ii === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Ii = null;
    }
    function wv(e) {
      return e === Ii;
    }
    function Wt(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === $i ? t.parentNode : t;
    }
    var ys = null, Qi = null, vi = null;
    function Kf(e) {
      var t = No(e);
      if (t) {
        if (typeof ys != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Th(a);
          ys(t.stateNode, t.type, i);
        }
      }
    }
    function Zf(e) {
      ys = e;
    }
    function ro(e) {
      Qi ? vi ? vi.push(e) : vi = [e] : Qi = e;
    }
    function Tc() {
      return Qi !== null || vi !== null;
    }
    function pu() {
      if (Qi) {
        var e = Qi, t = vi;
        if (Qi = null, vi = null, Kf(e), t)
          for (var a = 0; a < t.length; a++)
            Kf(t[a]);
      }
    }
    var Jf = function(e, t) {
      return e(t);
    }, xv = function() {
    }, ed = !1;
    function _v() {
      var e = Tc();
      e && (xv(), pu());
    }
    function gs(e, t, a) {
      if (ed)
        return e(t, a);
      ed = !0;
      try {
        return Jf(e, t, a);
      } finally {
        ed = !1, _v();
      }
    }
    function wc(e, t, a) {
      Jf = e, xv = a;
    }
    function td(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function nd(e, t, a) {
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
          return !!(a.disabled && td(t));
        default:
          return !1;
      }
    }
    function vu(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Th(a);
      if (i === null)
        return null;
      var u = i[t];
      if (nd(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var Ss = !1;
    if (gn)
      try {
        var Es = {};
        Object.defineProperty(Es, "passive", {
          get: function() {
            Ss = !0;
          }
        }), window.addEventListener("test", Es, Es), window.removeEventListener("test", Es, Es);
      } catch {
        Ss = !1;
      }
    function rd(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var bv = rd;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var ad = document.createElement("react");
      bv = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), _ = !1, w = !0, N = window.event, U = Object.getOwnPropertyDescriptor(window, "event");
        function j() {
          ad.removeEventListener(H, Me, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = N);
        }
        var le = Array.prototype.slice.call(arguments, 3);
        function Me() {
          _ = !0, j(), a.apply(i, le), w = !1;
        }
        var _e, Rt = !1, pt = !1;
        function k(O) {
          if (_e = O.error, Rt = !0, _e === null && O.colno === 0 && O.lineno === 0 && (pt = !0), O.defaultPrevented && _e != null && typeof _e == "object")
            try {
              _e._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", k), ad.addEventListener(H, Me, !1), g.initEvent(H, !1, !1), ad.dispatchEvent(g), U && Object.defineProperty(window, "event", U), _ && w && (Rt ? pt && (_e = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : _e = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(_e)), window.removeEventListener("error", k), !_)
          return j(), rd.apply(this, arguments);
      };
    }
    var id = bv, ca = !1, Cs = null, Wi = !1, Na = null, Rs = {
      onError: function(e) {
        ca = !0, Cs = e;
      }
    };
    function ti(e, t, a, i, u, s, f, p, v) {
      ca = !1, Cs = null, id.apply(Rs, arguments);
    }
    function ld(e, t, a, i, u, s, f, p, v) {
      if (ti.apply(this, arguments), ca) {
        var y = Gi();
        Wi || (Wi = !0, Na = y);
      }
    }
    function ey() {
      if (Wi) {
        var e = Na;
        throw Wi = !1, Na = null, e;
      }
    }
    function ty() {
      return ca;
    }
    function Gi() {
      if (ca) {
        var e = Cs;
        return ca = !1, Cs = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function hi(e) {
      return e._reactInternals;
    }
    function ao(e) {
      return e._reactInternals !== void 0;
    }
    function xc(e, t) {
      e._reactInternals = t;
    }
    var Le = (
      /*                      */
      0
    ), ni = (
      /*                */
      1
    ), Gt = (
      /*                    */
      2
    ), Re = (
      /*                       */
      4
    ), Lt = (
      /*                */
      16
    ), za = (
      /*                 */
      32
    ), Yn = (
      /*                     */
      64
    ), We = (
      /*                   */
      128
    ), Cr = (
      /*            */
      256
    ), fa = (
      /*                          */
      512
    ), Nn = (
      /*                     */
      1024
    ), Yr = (
      /*                      */
      2048
    ), mi = (
      /*                    */
      4096
    ), Dl = (
      /*                   */
      8192
    ), hu = (
      /*             */
      16384
    ), Dv = Yr | Re | Yn | fa | Nn | hu, qi = (
      /*               */
      32767
    ), kl = (
      /*                   */
      32768
    ), Jn = (
      /*                */
      65536
    ), _c = (
      /* */
      131072
    ), kv = (
      /*                       */
      1048576
    ), yi = (
      /*                    */
      2097152
    ), Ua = (
      /*                 */
      4194304
    ), Ol = (
      /*                */
      8388608
    ), Aa = (
      /*               */
      16777216
    ), mu = (
      /*              */
      33554432
    ), Ir = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Re | Nn | 0
    ), Qr = Gt | Re | Lt | za | fa | mi | Dl, ri = Re | Yn | fa | Dl, Wr = Yr | Lt, er = Ua | Ol | yi, yu = ct.ReactCurrentOwner;
    function Ll(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Gt | mi)) !== Le && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === ee ? a : null;
    }
    function bc(e) {
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
    function Dc(e) {
      return e.tag === ee ? e.stateNode.containerInfo : null;
    }
    function da(e) {
      return Ll(e) === e;
    }
    function pa(e) {
      {
        var t = yu.current;
        if (t !== null && t.tag === ve) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ye(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = hi(e);
      return u ? Ll(u) === u : !1;
    }
    function an(e) {
      if (Ll(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Fa(e) {
      var t = e.alternate;
      if (!t) {
        var a = Ll(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return an(s), e;
            if (v === u)
              return an(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== ee)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function ud(e) {
      var t = Fa(e);
      return t !== null ? od(t) : null;
    }
    function od(e) {
      if (e.tag === ue || e.tag === Ee)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = od(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function sd(e) {
      var t = Fa(e);
      return t !== null ? kc(t) : null;
    }
    function kc(e) {
      if (e.tag === ue || e.tag === Ee)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== Ue) {
          var a = kc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var cd = A.unstable_scheduleCallback, Oc = A.unstable_cancelCallback, Ov = A.unstable_shouldYield, io = A.unstable_requestPaint, zn = A.unstable_now, ny = A.unstable_getCurrentPriorityLevel, Ml = A.unstable_ImmediatePriority, lo = A.unstable_UserBlockingPriority, Nl = A.unstable_NormalPriority, Lv = A.unstable_LowPriority, zl = A.unstable_IdlePriority, Mv = A.unstable_yieldValue, Lc = A.unstable_setDisableYieldValue, Xi = null, bn = null, re = null, ja = !1, va = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function fd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        nt && (e = Ke({}, e, {
          getLaneLabelMap: Ul,
          injectProfilingHooks: Ki
        })), Xi = t.inject(e), bn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function uo(e, t) {
      if (bn && typeof bn.onScheduleFiberRoot == "function")
        try {
          bn.onScheduleFiberRoot(Xi, e, t);
        } catch (a) {
          ja || (ja = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Ha(e, t) {
      if (bn && typeof bn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & We) === We;
          if (vt) {
            var i;
            switch (t) {
              case ga:
                i = Ml;
                break;
              case Ri:
                i = lo;
                break;
              case li:
                i = Nl;
                break;
              case Us:
                i = zl;
                break;
              default:
                i = Nl;
                break;
            }
            bn.onCommitFiberRoot(Xi, e, i, a);
          }
        } catch (u) {
          ja || (ja = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function gu(e) {
      if (bn && typeof bn.onPostCommitFiberRoot == "function")
        try {
          bn.onPostCommitFiberRoot(Xi, e);
        } catch (t) {
          ja || (ja = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function dd(e) {
      if (bn && typeof bn.onCommitFiberUnmount == "function")
        try {
          bn.onCommitFiberUnmount(Xi, e);
        } catch (t) {
          ja || (ja = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Vn(e) {
      if (typeof Mv == "function" && (Lc(e), en(e)), bn && typeof bn.setStrictMode == "function")
        try {
          bn.setStrictMode(Xi, e);
        } catch (t) {
          ja || (ja = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Ki(e) {
      re = e;
    }
    function Ul() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < xs; a++) {
          var i = ay(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function pd(e) {
      re !== null && typeof re.markCommitStarted == "function" && re.markCommitStarted(e);
    }
    function vd() {
      re !== null && typeof re.markCommitStopped == "function" && re.markCommitStopped();
    }
    function ha(e) {
      re !== null && typeof re.markComponentRenderStarted == "function" && re.markComponentRenderStarted(e);
    }
    function ma() {
      re !== null && typeof re.markComponentRenderStopped == "function" && re.markComponentRenderStopped();
    }
    function Mc(e) {
      re !== null && typeof re.markComponentPassiveEffectMountStarted == "function" && re.markComponentPassiveEffectMountStarted(e);
    }
    function Nv() {
      re !== null && typeof re.markComponentPassiveEffectMountStopped == "function" && re.markComponentPassiveEffectMountStopped();
    }
    function Nc(e) {
      re !== null && typeof re.markComponentPassiveEffectUnmountStarted == "function" && re.markComponentPassiveEffectUnmountStarted(e);
    }
    function zv() {
      re !== null && typeof re.markComponentPassiveEffectUnmountStopped == "function" && re.markComponentPassiveEffectUnmountStopped();
    }
    function Ts(e) {
      re !== null && typeof re.markComponentLayoutEffectMountStarted == "function" && re.markComponentLayoutEffectMountStarted(e);
    }
    function gi() {
      re !== null && typeof re.markComponentLayoutEffectMountStopped == "function" && re.markComponentLayoutEffectMountStopped();
    }
    function oo(e) {
      re !== null && typeof re.markComponentLayoutEffectUnmountStarted == "function" && re.markComponentLayoutEffectUnmountStarted(e);
    }
    function so() {
      re !== null && typeof re.markComponentLayoutEffectUnmountStopped == "function" && re.markComponentLayoutEffectUnmountStopped();
    }
    function Su(e, t, a) {
      re !== null && typeof re.markComponentErrored == "function" && re.markComponentErrored(e, t, a);
    }
    function hd(e, t, a) {
      re !== null && typeof re.markComponentSuspended == "function" && re.markComponentSuspended(e, t, a);
    }
    function co(e) {
      re !== null && typeof re.markLayoutEffectsStarted == "function" && re.markLayoutEffectsStarted(e);
    }
    function Uv() {
      re !== null && typeof re.markLayoutEffectsStopped == "function" && re.markLayoutEffectsStopped();
    }
    function md(e) {
      re !== null && typeof re.markPassiveEffectsStarted == "function" && re.markPassiveEffectsStarted(e);
    }
    function hn() {
      re !== null && typeof re.markPassiveEffectsStopped == "function" && re.markPassiveEffectsStopped();
    }
    function ws(e) {
      re !== null && typeof re.markRenderStarted == "function" && re.markRenderStarted(e);
    }
    function yd() {
      re !== null && typeof re.markRenderYielded == "function" && re.markRenderYielded();
    }
    function zc() {
      re !== null && typeof re.markRenderStopped == "function" && re.markRenderStopped();
    }
    function Uc(e) {
      re !== null && typeof re.markRenderScheduled == "function" && re.markRenderScheduled(e);
    }
    function gd(e, t) {
      re !== null && typeof re.markForceUpdateScheduled == "function" && re.markForceUpdateScheduled(e, t);
    }
    function Zi(e, t) {
      re !== null && typeof re.markStateUpdateScheduled == "function" && re.markStateUpdateScheduled(e, t);
    }
    var ne = (
      /*                         */
      0
    ), ke = (
      /*                 */
      1
    ), Ie = (
      /*                    */
      2
    ), ln = (
      /*               */
      8
    ), Gr = (
      /*              */
      16
    ), fo = Math.clz32 ? Math.clz32 : Sd, ry = Math.log, mr = Math.LN2;
    function Sd(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (ry(t) / mr | 0) | 0;
    }
    var xs = 31, $ = (
      /*                        */
      0
    ), qt = (
      /*                          */
      0
    ), we = (
      /*                        */
      1
    ), Si = (
      /*    */
      2
    ), ai = (
      /*             */
      4
    ), Ji = (
      /*            */
      8
    ), ii = (
      /*                     */
      16
    ), po = (
      /*                */
      32
    ), Eu = (
      /*                       */
      4194240
    ), vo = (
      /*                        */
      64
    ), Ac = (
      /*                        */
      128
    ), Fc = (
      /*                        */
      256
    ), jc = (
      /*                        */
      512
    ), Hc = (
      /*                        */
      1024
    ), Cu = (
      /*                        */
      2048
    ), Vc = (
      /*                        */
      4096
    ), ho = (
      /*                        */
      8192
    ), mo = (
      /*                        */
      16384
    ), Pc = (
      /*                       */
      32768
    ), _s = (
      /*                       */
      65536
    ), Bc = (
      /*                       */
      131072
    ), $c = (
      /*                       */
      262144
    ), Yc = (
      /*                       */
      524288
    ), Ic = (
      /*                       */
      1048576
    ), bs = (
      /*                       */
      2097152
    ), Ds = (
      /*                            */
      130023424
    ), Ru = (
      /*                             */
      4194304
    ), Qc = (
      /*                             */
      8388608
    ), Ed = (
      /*                             */
      16777216
    ), Wc = (
      /*                             */
      33554432
    ), Cd = (
      /*                             */
      67108864
    ), Av = Ru, yo = (
      /*          */
      134217728
    ), Rd = (
      /*                          */
      268435455
    ), go = (
      /*               */
      268435456
    ), Ei = (
      /*                        */
      536870912
    ), ya = (
      /*                   */
      1073741824
    );
    function ay(e) {
      {
        if (e & we)
          return "Sync";
        if (e & Si)
          return "InputContinuousHydration";
        if (e & ai)
          return "InputContinuous";
        if (e & Ji)
          return "DefaultHydration";
        if (e & ii)
          return "Default";
        if (e & po)
          return "TransitionHydration";
        if (e & Eu)
          return "Transition";
        if (e & Ds)
          return "Retry";
        if (e & yo)
          return "SelectiveHydration";
        if (e & go)
          return "IdleHydration";
        if (e & Ei)
          return "Idle";
        if (e & ya)
          return "Offscreen";
      }
    }
    var Zt = -1, qr = vo, So = Ru;
    function Al(e) {
      switch (Fl(e)) {
        case we:
          return we;
        case Si:
          return Si;
        case ai:
          return ai;
        case Ji:
          return Ji;
        case ii:
          return ii;
        case po:
          return po;
        case vo:
        case Ac:
        case Fc:
        case jc:
        case Hc:
        case Cu:
        case Vc:
        case ho:
        case mo:
        case Pc:
        case _s:
        case Bc:
        case $c:
        case Yc:
        case Ic:
        case bs:
          return e & Eu;
        case Ru:
        case Qc:
        case Ed:
        case Wc:
        case Cd:
          return e & Ds;
        case yo:
          return yo;
        case go:
          return go;
        case Ei:
          return Ei;
        case ya:
          return ya;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function ks(e, t) {
      var a = e.pendingLanes;
      if (a === $)
        return $;
      var i = $, u = e.suspendedLanes, s = e.pingedLanes, f = a & Rd;
      if (f !== $) {
        var p = f & ~u;
        if (p !== $)
          i = Al(p);
        else {
          var v = f & s;
          v !== $ && (i = Al(v));
        }
      } else {
        var y = a & ~u;
        y !== $ ? i = Al(y) : s !== $ && (i = Al(s));
      }
      if (i === $)
        return $;
      if (t !== $ && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === $) {
        var g = Fl(i), _ = Fl(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= _ || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === ii && (_ & Eu) !== $
        )
          return t;
      }
      (i & ai) !== $ && (i |= a & ii);
      var w = e.entangledLanes;
      if (w !== $)
        for (var N = e.entanglements, U = i & w; U > 0; ) {
          var j = jl(U), le = 1 << j;
          i |= N[j], U &= ~le;
        }
      return i;
    }
    function Fv(e, t) {
      for (var a = e.eventTimes, i = Zt; t > 0; ) {
        var u = jl(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function jv(e, t) {
      switch (e) {
        case we:
        case Si:
        case ai:
          return t + 250;
        case Ji:
        case ii:
        case po:
        case vo:
        case Ac:
        case Fc:
        case jc:
        case Hc:
        case Cu:
        case Vc:
        case ho:
        case mo:
        case Pc:
        case _s:
        case Bc:
        case $c:
        case Yc:
        case Ic:
        case bs:
          return t + 5e3;
        case Ru:
        case Qc:
        case Ed:
        case Wc:
        case Cd:
          return Zt;
        case yo:
        case go:
        case Ei:
        case ya:
          return Zt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Zt;
      }
    }
    function Td(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = jl(f), v = 1 << p, y = s[p];
        y === Zt ? ((v & i) === $ || (v & u) !== $) && (s[p] = jv(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Eo(e) {
      return Al(e.pendingLanes);
    }
    function Os(e) {
      var t = e.pendingLanes & ~ya;
      return t !== $ ? t : t & ya ? ya : $;
    }
    function wd(e) {
      return (e & we) !== $;
    }
    function xd(e) {
      return (e & Rd) !== $;
    }
    function _d(e) {
      return (e & Ds) === e;
    }
    function Hv(e) {
      var t = we | ai | ii;
      return (e & t) === $;
    }
    function Vv(e) {
      return (e & Eu) === e;
    }
    function Ls(e, t) {
      var a = Si | ai | Ji | ii;
      return (t & a) !== $;
    }
    function Pv(e, t) {
      return (t & e.expiredLanes) !== $;
    }
    function Bv(e) {
      return (e & Eu) !== $;
    }
    function Rr() {
      var e = qr;
      return qr <<= 1, (qr & Eu) === $ && (qr = vo), e;
    }
    function Tr() {
      var e = So;
      return So <<= 1, (So & Ds) === $ && (So = Ru), e;
    }
    function Fl(e) {
      return e & -e;
    }
    function Co(e) {
      return Fl(e);
    }
    function jl(e) {
      return 31 - fo(e);
    }
    function Gc(e) {
      return jl(e);
    }
    function Xr(e, t) {
      return (e & t) !== $;
    }
    function Hl(e, t) {
      return (e & t) === t;
    }
    function Ze(e, t) {
      return e | t;
    }
    function Ro(e, t) {
      return e & ~t;
    }
    function bd(e, t) {
      return e & t;
    }
    function iy(e) {
      return e;
    }
    function Dd(e, t) {
      return e !== qt && e < t ? e : t;
    }
    function Ms(e) {
      for (var t = [], a = 0; a < xs; a++)
        t.push(e);
      return t;
    }
    function To(e, t, a) {
      e.pendingLanes |= t, t !== Ei && (e.suspendedLanes = $, e.pingedLanes = $);
      var i = e.eventTimes, u = Gc(t);
      i[u] = a;
    }
    function kd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = jl(i), s = 1 << u;
        a[u] = Zt, i &= ~s;
      }
    }
    function Ns(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function ly(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = $, e.pingedLanes = $, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = jl(f), v = 1 << p;
        i[p] = $, u[p] = Zt, s[p] = Zt, f &= ~v;
      }
    }
    function qc(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = jl(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Od(e, t) {
      var a = Fl(t), i;
      switch (a) {
        case ai:
          i = Si;
          break;
        case ii:
          i = Ji;
          break;
        case vo:
        case Ac:
        case Fc:
        case jc:
        case Hc:
        case Cu:
        case Vc:
        case ho:
        case mo:
        case Pc:
        case _s:
        case Bc:
        case $c:
        case Yc:
        case Ic:
        case bs:
        case Ru:
        case Qc:
        case Ed:
        case Wc:
        case Cd:
          i = po;
          break;
        case Ei:
          i = go;
          break;
        default:
          i = qt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== qt ? qt : i;
    }
    function Ld(e, t, a) {
      if (va)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Gc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function zs(e, t) {
      if (va)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Gc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Ci(e, t) {
      return null;
    }
    var ga = we, Ri = ai, li = ii, Us = Ei, wo = qt;
    function wr() {
      return wo;
    }
    function _t(e) {
      wo = e;
    }
    function uy(e, t) {
      var a = wo;
      try {
        return wo = e, t();
      } finally {
        wo = a;
      }
    }
    function oy(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Xc(e, t) {
      return e > t ? e : t;
    }
    function In(e, t) {
      return e !== 0 && e < t;
    }
    function $v(e) {
      var t = Fl(e);
      return In(ga, t) ? In(Ri, t) ? xd(t) ? li : Us : Ri : ga;
    }
    function de(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Tu;
    function Md(e) {
      Tu = e;
    }
    function Yv(e) {
      Tu(e);
    }
    var Nd;
    function As(e) {
      Nd = e;
    }
    var Fs;
    function zd(e) {
      Fs = e;
    }
    var Ud;
    function Iv(e) {
      Ud = e;
    }
    var Ad;
    function Fd(e) {
      Ad = e;
    }
    var js = !1, Un = [], Qn = null, xr = null, el = null, xo = /* @__PURE__ */ new Map(), _r = /* @__PURE__ */ new Map(), tl = [], Ti = [
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
    function sy(e) {
      return Ti.indexOf(e) > -1;
    }
    function Qv(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function jd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Qn = null;
          break;
        case "dragenter":
        case "dragleave":
          xr = null;
          break;
        case "mouseover":
        case "mouseout":
          el = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          xo.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          _r.delete(i);
          break;
        }
      }
    }
    function _o(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Qv(t, a, i, u, s);
        if (t !== null) {
          var p = No(t);
          p !== null && Nd(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Wv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Qn = _o(Qn, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return xr = _o(xr, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return el = _o(el, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return xo.set(y, _o(xo.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, _ = g.pointerId;
          return _r.set(_, _o(_r.get(_) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Gv(e) {
      var t = Js(e.target);
      if (t !== null) {
        var a = Ll(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Ce) {
            var u = bc(a);
            if (u !== null) {
              e.blockedOn = u, Ad(e.priority, function() {
                Fs(a);
              });
              return;
            }
          } else if (i === ee) {
            var s = a.stateNode;
            if (de(s)) {
              e.blockedOn = Dc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Kc(e) {
      for (var t = Ud(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < tl.length && In(t, tl[i].priority); i++)
        ;
      tl.splice(i, 0, a), i === 0 && Gv(a);
    }
    function bo(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Bs(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          Jm(s), u.target.dispatchEvent(s), Tv();
        } else {
          var f = No(i);
          return f !== null && Nd(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Sa(e, t, a) {
      bo(e) && a.delete(t);
    }
    function bt() {
      js = !1, Qn !== null && bo(Qn) && (Qn = null), xr !== null && bo(xr) && (xr = null), el !== null && bo(el) && (el = null), xo.forEach(Sa), _r.forEach(Sa);
    }
    function En(e, t) {
      e.blockedOn === t && (e.blockedOn = null, js || (js = !0, A.unstable_scheduleCallback(A.unstable_NormalPriority, bt)));
    }
    function fn(e) {
      if (Un.length > 0) {
        En(Un[0], e);
        for (var t = 1; t < Un.length; t++) {
          var a = Un[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Qn !== null && En(Qn, e), xr !== null && En(xr, e), el !== null && En(el, e);
      var i = function(p) {
        return En(p, e);
      };
      xo.forEach(i), _r.forEach(i);
      for (var u = 0; u < tl.length; u++) {
        var s = tl[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; tl.length > 0; ) {
        var f = tl[0];
        if (f.blockedOn !== null)
          break;
        Gv(f), f.blockedOn === null && tl.shift();
      }
    }
    var Cn = ct.ReactCurrentBatchConfig, br = !0;
    function wu(e) {
      br = !!e;
    }
    function Pn() {
      return br;
    }
    function Hs(e, t, a) {
      var i = _u(t), u;
      switch (i) {
        case ga:
          u = xu;
          break;
        case Ri:
          u = Zc;
          break;
        case li:
        default:
          u = Vs;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function xu(e, t, a, i) {
      var u = wr(), s = Cn.transition;
      Cn.transition = null;
      try {
        _t(ga), Vs(e, t, a, i);
      } finally {
        _t(u), Cn.transition = s;
      }
    }
    function Zc(e, t, a, i) {
      var u = wr(), s = Cn.transition;
      Cn.transition = null;
      try {
        _t(Ri), Vs(e, t, a, i);
      } finally {
        _t(u), Cn.transition = s;
      }
    }
    function Vs(e, t, a, i) {
      br && Ps(e, t, a, i);
    }
    function Ps(e, t, a, i) {
      var u = Bs(e, t, a, i);
      if (u === null) {
        Dy(e, t, i, tr, a), jd(e, i);
        return;
      }
      if (Wv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (jd(e, i), t & ms && sy(e)) {
        for (; u !== null; ) {
          var s = No(u);
          s !== null && Yv(s);
          var f = Bs(e, t, a, i);
          if (f === null && Dy(e, t, i, tr, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Dy(e, t, i, null, a);
    }
    var tr = null;
    function Bs(e, t, a, i) {
      tr = null;
      var u = Wt(i), s = Js(u);
      if (s !== null) {
        var f = Ll(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Ce) {
            var v = bc(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === ee) {
            var y = f.stateNode;
            if (de(y))
              return Dc(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return tr = s, null;
    }
    function _u(e) {
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
          return ga;
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
          return Ri;
        case "message": {
          var t = ny();
          switch (t) {
            case Ml:
              return ga;
            case lo:
              return Ri;
            case Nl:
            case Lv:
              return li;
            case zl:
              return Us;
            default:
              return li;
          }
        }
        default:
          return li;
      }
    }
    function nl(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Jc(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Hd(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Vl(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Pl = null, wi = null, Bl = null;
    function $s(e) {
      return Pl = e, wi = Is(), !0;
    }
    function Vd() {
      Pl = null, wi = null, Bl = null;
    }
    function Ys() {
      if (Bl)
        return Bl;
      var e, t = wi, a = t.length, i, u = Is(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Bl = u.slice(e, p), Bl;
    }
    function Is() {
      return "value" in Pl ? Pl.value : Pl.textContent;
    }
    function Wn(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function ui() {
      return !0;
    }
    function Va() {
      return !1;
    }
    function Jt(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = ui : this.isDefaultPrevented = Va, this.isPropagationStopped = Va, this;
      }
      return Ke(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = ui);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = ui);
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
        isPersistent: ui
      }), t;
    }
    var bu = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Qs = Jt(bu), Du = Ke({}, bu, {
      view: 0,
      detail: 0
    }), cy = Jt(Du), xi, ef, ku;
    function Ou(e) {
      e !== ku && (ku && e.type === "mousemove" ? (xi = e.screenX - ku.screenX, ef = e.screenY - ku.screenY) : (xi = 0, ef = 0), ku = e);
    }
    var Do = Ke({}, Du, {
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
      getModifierState: Bd,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Ou(e), xi);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : ef;
      }
    }), $l = Jt(Do), qv = Ke({}, Do, {
      dataTransfer: 0
    }), Xv = Jt(qv), Pd = Ke({}, Du, {
      relatedTarget: 0
    }), ko = Jt(Pd), fy = Ke({}, bu, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), dy = Jt(fy), Kv = Ke({}, bu, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Zv = Jt(Kv), Lu = Ke({}, bu, {
      data: 0
    }), Jv = Jt(Lu), Oo = Jv, eh = {
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
    }, Rn = {
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
    function py(e) {
      if (e.key) {
        var t = eh[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Wn(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Rn[e.keyCode] || "Unidentified" : "";
    }
    var th = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function vy(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = th[e];
      return i ? !!a[i] : !1;
    }
    function Bd(e) {
      return vy;
    }
    var nh = Ke({}, Du, {
      key: py,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Bd,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Wn(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Wn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), rh = Jt(nh), hy = Ke({}, Do, {
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
    }), Ea = Jt(hy), $d = Ke({}, Du, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Bd
    }), my = Jt($d), Yl = Ke({}, bu, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), tf = Jt(Yl), Mu = Ke({}, Do, {
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
    }), nf = Jt(Mu), Yd = [9, 13, 27, 32], rf = 229, Id = gn && "CompositionEvent" in window, Nu = null;
    gn && "documentMode" in document && (Nu = document.documentMode);
    var yy = gn && "TextEvent" in window && !Nu, Qd = gn && (!Id || Nu && Nu > 8 && Nu <= 11), Wd = 32, Ws = String.fromCharCode(Wd);
    function af() {
      Fr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Fr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Fr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Fr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Gd = !1;
    function qd(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function gy(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function ah(e, t) {
      return e === "keydown" && t.keyCode === rf;
    }
    function lf(e, t) {
      switch (e) {
        case "keyup":
          return Yd.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== rf;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Gs(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function uf(e) {
      return e.locale === "ko";
    }
    var rl = !1;
    function ih(e, t, a, i, u) {
      var s, f;
      if (Id ? s = gy(t) : rl ? lf(t, i) && (s = "onCompositionEnd") : ah(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Qd && !uf(i) && (!rl && s === "onCompositionStart" ? rl = $s(u) : s === "onCompositionEnd" && rl && (f = Ys()));
      var p = ch(a, s);
      if (p.length > 0) {
        var v = new Jv(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = Gs(i);
          y !== null && (v.data = y);
        }
      }
    }
    function Sy(e, t) {
      switch (e) {
        case "compositionend":
          return Gs(t);
        case "keypress":
          var a = t.which;
          return a !== Wd ? null : (Gd = !0, Ws);
        case "textInput":
          var i = t.data;
          return i === Ws && Gd ? null : i;
        default:
          return null;
      }
    }
    function of(e, t) {
      if (rl) {
        if (e === "compositionend" || !Id && lf(e, t)) {
          var a = Ys();
          return Vd(), rl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!qd(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Qd && !uf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Ey(e, t, a, i, u) {
      var s;
      if (yy ? s = Sy(t, i) : s = of(t, i), !s)
        return null;
      var f = ch(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new Oo("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function qs(e, t, a, i, u, s, f) {
      ih(e, t, a, i, u), Ey(e, t, a, i, u);
    }
    var Cy = {
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
    function Xs(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Cy[e.type] : t === "textarea";
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
      if (!gn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function r() {
      Fr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function l(e, t, a, i) {
      ro(i);
      var u = ch(t, "onChange");
      if (u.length > 0) {
        var s = new Qs("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var o = null, c = null;
    function d(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function m(e) {
      var t = [];
      l(t, c, e, Wt(e)), gs(E, t);
    }
    function E(e) {
      _S(e, 0);
    }
    function T(e) {
      var t = vf(e);
      if (Xu(t))
        return e;
    }
    function z(e, t) {
      if (e === "change")
        return t;
    }
    var Q = !1;
    gn && (Q = n("input") && (!document.documentMode || document.documentMode > 9));
    function G(e, t) {
      o = e, c = t, o.attachEvent("onpropertychange", se);
    }
    function Y() {
      o && (o.detachEvent("onpropertychange", se), o = null, c = null);
    }
    function se(e) {
      e.propertyName === "value" && T(c) && m(e);
    }
    function me(e, t, a) {
      e === "focusin" ? (Y(), G(t, a)) : e === "focusout" && Y();
    }
    function Se(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return T(c);
    }
    function Dn(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function D(e, t) {
      if (e === "click")
        return T(t);
    }
    function x(e, t) {
      if (e === "input" || e === "change")
        return T(t);
    }
    function L(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Pe(e, "number", e.value);
    }
    function K(e, t, a, i, u, s, f) {
      var p = a ? vf(a) : window, v, y;
      if (d(p) ? v = z : Xs(p) ? Q ? v = x : (v = Se, y = me) : Dn(p) && (v = D), v) {
        var g = v(t, a);
        if (g) {
          l(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && L(p);
    }
    function Te() {
      cr("onMouseEnter", ["mouseout", "mouseover"]), cr("onMouseLeave", ["mouseout", "mouseover"]), cr("onPointerEnter", ["pointerout", "pointerover"]), cr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Ae(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !wv(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Js(y) || sp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var _ = u.ownerDocument;
          _ ? g = _.defaultView || _.parentWindow : g = window;
        }
        var w, N;
        if (v) {
          var U = i.relatedTarget || i.toElement;
          if (w = a, N = U ? Js(U) : null, N !== null) {
            var j = Ll(N);
            (N !== j || N.tag !== ue && N.tag !== Ee) && (N = null);
          }
        } else
          w = null, N = a;
        if (w !== N) {
          var le = $l, Me = "onMouseLeave", _e = "onMouseEnter", Rt = "mouse";
          (t === "pointerout" || t === "pointerover") && (le = Ea, Me = "onPointerLeave", _e = "onPointerEnter", Rt = "pointer");
          var pt = w == null ? g : vf(w), k = N == null ? g : vf(N), H = new le(Me, Rt + "leave", w, i, u);
          H.target = pt, H.relatedTarget = k;
          var O = null, q = Js(u);
          if (q === a) {
            var pe = new le(_e, Rt + "enter", N, i, u);
            pe.target = k, pe.relatedTarget = pt, O = pe;
          }
          LR(e, H, O, w, N);
        }
      }
    }
    function Fe(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var xe = typeof Object.is == "function" ? Object.is : Fe;
    function Tn(e, t) {
      if (xe(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Xn.call(t, s) || !xe(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Dt(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Il(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function lh(e, t) {
      for (var a = Dt(e), i = 0, u = 0; a; ) {
        if (a.nodeType === $i) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Dt(Il(a));
      }
    }
    function cR(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return fR(e, u, s, f, p);
    }
    function fR(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, _ = null;
      e: for (; ; ) {
        for (var w = null; g === t && (a === 0 || g.nodeType === $i) && (f = s + a), g === i && (u === 0 || g.nodeType === $i) && (p = s + u), g.nodeType === $i && (s += g.nodeValue.length), (w = g.firstChild) !== null; )
          _ = g, g = w;
        for (; ; ) {
          if (g === e)
            break e;
          if (_ === t && ++v === a && (f = s), _ === i && ++y === u && (p = s), (w = g.nextSibling) !== null)
            break;
          g = _, _ = g.parentNode;
        }
        g = w;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function dR(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = lh(e, f), g = lh(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var _ = a.createRange();
          _.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(_), u.extend(g.node, g.offset)) : (_.setEnd(g.node, g.offset), u.addRange(_));
        }
      }
    }
    function vS(e) {
      return e && e.nodeType === $i;
    }
    function hS(e, t) {
      return !e || !t ? !1 : e === t ? !0 : vS(e) ? !1 : vS(t) ? hS(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function pR(e) {
      return e && e.ownerDocument && hS(e.ownerDocument.documentElement, e);
    }
    function vR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function mS() {
      for (var e = window, t = pi(); t instanceof e.HTMLIFrameElement; ) {
        if (vR(t))
          e = t.contentWindow;
        else
          return t;
        t = pi(e.document);
      }
      return t;
    }
    function Ry(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function hR() {
      var e = mS();
      return {
        focusedElem: e,
        selectionRange: Ry(e) ? yR(e) : null
      };
    }
    function mR(e) {
      var t = mS(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && pR(a)) {
        i !== null && Ry(a) && gR(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === $r && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function yR(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = cR(e), t || {
        start: 0,
        end: 0
      };
    }
    function gR(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : dR(e, t);
    }
    var SR = gn && "documentMode" in document && document.documentMode <= 11;
    function ER() {
      Fr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var sf = null, Ty = null, Xd = null, wy = !1;
    function CR(e) {
      if ("selectionStart" in e && Ry(e))
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
    function RR(e) {
      return e.window === e ? e.document : e.nodeType === sa ? e : e.ownerDocument;
    }
    function yS(e, t, a) {
      var i = RR(a);
      if (!(wy || sf == null || sf !== pi(i))) {
        var u = CR(sf);
        if (!Xd || !Tn(Xd, u)) {
          Xd = u;
          var s = ch(Ty, "onSelect");
          if (s.length > 0) {
            var f = new Qs("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = sf;
          }
        }
      }
    }
    function TR(e, t, a, i, u, s, f) {
      var p = a ? vf(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (Xs(p) || p.contentEditable === "true") && (sf = p, Ty = a, Xd = null);
          break;
        case "focusout":
          sf = null, Ty = null, Xd = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          wy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          wy = !1, yS(e, i, u);
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
          if (SR)
            break;
        // falls through
        case "keydown":
        case "keyup":
          yS(e, i, u);
      }
    }
    function uh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var cf = {
      animationend: uh("Animation", "AnimationEnd"),
      animationiteration: uh("Animation", "AnimationIteration"),
      animationstart: uh("Animation", "AnimationStart"),
      transitionend: uh("Transition", "TransitionEnd")
    }, xy = {}, gS = {};
    gn && (gS = document.createElement("div").style, "AnimationEvent" in window || (delete cf.animationend.animation, delete cf.animationiteration.animation, delete cf.animationstart.animation), "TransitionEvent" in window || delete cf.transitionend.transition);
    function oh(e) {
      if (xy[e])
        return xy[e];
      if (!cf[e])
        return e;
      var t = cf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in gS)
          return xy[e] = t[a];
      return e;
    }
    var SS = oh("animationend"), ES = oh("animationiteration"), CS = oh("animationstart"), RS = oh("transitionend"), TS = /* @__PURE__ */ new Map(), wS = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Lo(e, t) {
      TS.set(e, t), Fr(t, [e]);
    }
    function wR() {
      for (var e = 0; e < wS.length; e++) {
        var t = wS[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Lo(a, "on" + i);
      }
      Lo(SS, "onAnimationEnd"), Lo(ES, "onAnimationIteration"), Lo(CS, "onAnimationStart"), Lo("dblclick", "onDoubleClick"), Lo("focusin", "onFocus"), Lo("focusout", "onBlur"), Lo(RS, "onTransitionEnd");
    }
    function xR(e, t, a, i, u, s, f) {
      var p = TS.get(t);
      if (p !== void 0) {
        var v = Qs, y = t;
        switch (t) {
          case "keypress":
            if (Wn(i) === 0)
              return;
          /* falls through */
          case "keydown":
          case "keyup":
            v = rh;
            break;
          case "focusin":
            y = "focus", v = ko;
            break;
          case "focusout":
            y = "blur", v = ko;
            break;
          case "beforeblur":
          case "afterblur":
            v = ko;
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
            v = $l;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Xv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = my;
            break;
          case SS:
          case ES:
          case CS:
            v = dy;
            break;
          case RS:
            v = tf;
            break;
          case "scroll":
            v = cy;
            break;
          case "wheel":
            v = nf;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Zv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Ea;
            break;
        }
        var g = (s & ms) !== 0;
        {
          var _ = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", w = kR(a, p, i.type, g, _);
          if (w.length > 0) {
            var N = new v(p, y, null, i, u);
            e.push({
              event: N,
              listeners: w
            });
          }
        }
      }
    }
    wR(), Te(), r(), ER(), af();
    function _R(e, t, a, i, u, s, f) {
      xR(e, t, a, i, u, s);
      var p = (s & Zm) === 0;
      p && (Ae(e, t, a, i, u), K(e, t, a, i, u), TR(e, t, a, i, u), qs(e, t, a, i, u));
    }
    var Kd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], _y = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Kd));
    function xS(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, ld(i, t, void 0, e), e.currentTarget = null;
    }
    function bR(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          xS(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], _ = g.instance, w = g.currentTarget, N = g.listener;
          if (_ !== i && e.isPropagationStopped())
            return;
          xS(e, N, w), i = _;
        }
    }
    function _S(e, t) {
      for (var a = (t & ms) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        bR(s, f, a);
      }
      ey();
    }
    function DR(e, t, a, i, u) {
      var s = Wt(a), f = [];
      _R(f, e, i, a, s, t), _S(f, t);
    }
    function mn(e, t) {
      _y.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = aw(t), u = MR(e);
      i.has(u) || (bS(t, e, hs, a), i.add(u));
    }
    function by(e, t, a) {
      _y.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= ms), bS(a, e, i, t);
    }
    var sh = "_reactListening" + Math.random().toString(36).slice(2);
    function Zd(e) {
      if (!e[sh]) {
        e[sh] = !0, St.forEach(function(a) {
          a !== "selectionchange" && (_y.has(a) || by(a, !1, e), by(a, !0, e));
        });
        var t = e.nodeType === sa ? e : e.ownerDocument;
        t !== null && (t[sh] || (t[sh] = !0, by("selectionchange", !1, t)));
      }
    }
    function bS(e, t, a, i, u) {
      var s = Hs(e, t, a), f = void 0;
      Ss && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Hd(e, t, s, f) : Jc(e, t, s) : f !== void 0 ? Vl(e, t, s, f) : nl(e, t, s);
    }
    function DS(e, t) {
      return e === t || e.nodeType === Sn && e.parentNode === t;
    }
    function Dy(e, t, a, i, u) {
      var s = i;
      if (!(t & Rc) && !(t & hs)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === ee || v === Ue) {
              var y = p.stateNode.containerInfo;
              if (DS(y, f))
                break;
              if (v === Ue)
                for (var g = p.return; g !== null; ) {
                  var _ = g.tag;
                  if (_ === ee || _ === Ue) {
                    var w = g.stateNode.containerInfo;
                    if (DS(w, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var N = Js(y);
                if (N === null)
                  return;
                var U = N.tag;
                if (U === ue || U === Ee) {
                  p = s = N;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      gs(function() {
        return DR(e, t, a, s);
      });
    }
    function Jd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function kR(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var _ = y, w = _.stateNode, N = _.tag;
        if (N === ue && w !== null && (g = w, p !== null)) {
          var U = vu(y, p);
          U != null && v.push(Jd(y, U, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function ch(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === ue && f !== null) {
          var v = f, y = vu(u, a);
          y != null && i.unshift(Jd(u, y, v));
          var g = vu(u, t);
          g != null && i.push(Jd(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function ff(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ue);
      return e || null;
    }
    function OR(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = ff(s))
        u++;
      for (var f = 0, p = i; p; p = ff(p))
        f++;
      for (; u - f > 0; )
        a = ff(a), u--;
      for (; f - u > 0; )
        i = ff(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = ff(a), i = ff(i);
      }
      return null;
    }
    function kS(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, _ = v.tag;
        if (y !== null && y === i)
          break;
        if (_ === ue && g !== null) {
          var w = g;
          if (u) {
            var N = vu(p, s);
            N != null && f.unshift(Jd(p, N, w));
          } else if (!u) {
            var U = vu(p, s);
            U != null && f.push(Jd(p, U, w));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function LR(e, t, a, i, u) {
      var s = i && u ? OR(i, u) : null;
      i !== null && kS(e, t, i, s, !1), u !== null && a !== null && kS(e, a, u, s, !0);
    }
    function MR(e, t) {
      return e + "__bubble";
    }
    var Pa = !1, ep = "dangerouslySetInnerHTML", fh = "suppressContentEditableWarning", Mo = "suppressHydrationWarning", OS = "autoFocus", Ks = "children", Zs = "style", dh = "__html", ky, ph, tp, LS, vh, MS, NS;
    ky = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, ph = function(e, t) {
      no(e, t), gv(e, t), bl(e, t, {
        registrationNameDependencies: Ht,
        possibleRegistrationNames: qn
      });
    }, MS = gn && !document.documentMode, tp = function(e, t, a) {
      if (!Pa) {
        var i = hh(a), u = hh(t);
        u !== i && (Pa = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, LS = function(e) {
      if (!Pa) {
        Pa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, vh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, NS = function(e, t) {
      var a = e.namespaceURI === Bi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var NR = /\r\n?/g, zR = /\u0000|\uFFFD/g;
    function hh(e) {
      ra(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(NR, `
`).replace(zR, "");
    }
    function mh(e, t, a, i) {
      var u = hh(t), s = hh(e);
      if (s !== u && (i && (Pa || (Pa = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && P))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function zS(e) {
      return e.nodeType === sa ? e : e.ownerDocument;
    }
    function UR() {
    }
    function yh(e) {
      e.onclick = UR;
    }
    function AR(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Zs)
            f && Object.freeze(f), dv(t, f);
          else if (s === ep) {
            var p = f ? f[dh] : void 0;
            p != null && rv(t, p);
          } else if (s === Ks)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && ss(t, f);
            } else typeof f == "number" && ss(t, "" + f);
          else s === fh || s === Mo || s === OS || (Ht.hasOwnProperty(s) ? f != null && (typeof f != "function" && vh(s, f), s === "onScroll" && mn("scroll", t)) : f != null && Ni(t, s, f, u));
        }
    }
    function FR(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Zs ? dv(e, f) : s === ep ? rv(e, f) : s === Ks ? ss(e, f) : Ni(e, s, f, i);
      }
    }
    function jR(e, t, a, i) {
      var u, s = zS(a), f, p = i;
      if (p === Bi && (p = Bf(e)), p === Bi) {
        if (u = fu(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Bi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Xn.call(ky, e) && (ky[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function HR(e, t) {
      return zS(t).createTextNode(e);
    }
    function VR(e, t, a, i) {
      var u = fu(t, a);
      ph(t, a);
      var s;
      switch (t) {
        case "dialog":
          mn("cancel", e), mn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          mn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Kd.length; f++)
            mn(Kd[f], e);
          s = a;
          break;
        case "source":
          mn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          mn("error", e), mn("load", e), s = a;
          break;
        case "details":
          mn("toggle", e), s = a;
          break;
        case "input":
          C(e, a), s = h(e, a), mn("invalid", e);
          break;
        case "option":
          Bt(e, a), s = a;
          break;
        case "select":
          os(e, a), s = us(e, a), mn("invalid", e);
          break;
        case "textarea":
          tv(e, a), s = Pf(e, a), mn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (ds(t, s), AR(t, e, i, s, u), t) {
        case "input":
          Hi(e), X(e, a, !1);
          break;
        case "textarea":
          Hi(e), hc(e);
          break;
        case "option":
          $t(e, a);
          break;
        case "select":
          Vf(e, a);
          break;
        default:
          typeof s.onClick == "function" && yh(e);
          break;
      }
    }
    function PR(e, t, a, i, u) {
      ph(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = h(e, a), p = h(e, i), s = [];
          break;
        case "select":
          f = us(e, a), p = us(e, i), s = [];
          break;
        case "textarea":
          f = Pf(e, a), p = Pf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && yh(e);
          break;
      }
      ds(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Zs) {
            var _ = f[v];
            for (y in _)
              _.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === ep || v === Ks || v === fh || v === Mo || v === OS || (Ht.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var w = p[v], N = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || w === N || w == null && N == null))
          if (v === Zs)
            if (w && Object.freeze(w), N) {
              for (y in N)
                N.hasOwnProperty(y) && (!w || !w.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in w)
                w.hasOwnProperty(y) && N[y] !== w[y] && (g || (g = {}), g[y] = w[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = w;
          else if (v === ep) {
            var U = w ? w[dh] : void 0, j = N ? N[dh] : void 0;
            U != null && j !== U && (s = s || []).push(v, U);
          } else v === Ks ? (typeof w == "string" || typeof w == "number") && (s = s || []).push(v, "" + w) : v === fh || v === Mo || (Ht.hasOwnProperty(v) ? (w != null && (typeof w != "function" && vh(v, w), v === "onScroll" && mn("scroll", e)), !s && N !== w && (s = [])) : (s = s || []).push(v, w));
      }
      return g && (pv(g, p[Zs]), (s = s || []).push(Zs, g)), s;
    }
    function BR(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && M(e, u);
      var s = fu(a, i), f = fu(a, u);
      switch (FR(e, t, s, f), a) {
        case "input":
          F(e, u);
          break;
        case "textarea":
          nv(e, u);
          break;
        case "select":
          Pm(e, u);
          break;
      }
    }
    function $R(e) {
      {
        var t = e.toLowerCase();
        return Sc.hasOwnProperty(t) && Sc[t] || null;
      }
    }
    function YR(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = fu(t, a), ph(t, a), t) {
        case "dialog":
          mn("cancel", e), mn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          mn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Kd.length; y++)
            mn(Kd[y], e);
          break;
        case "source":
          mn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          mn("error", e), mn("load", e);
          break;
        case "details":
          mn("toggle", e);
          break;
        case "input":
          C(e, a), mn("invalid", e);
          break;
        case "option":
          Bt(e, a);
          break;
        case "select":
          os(e, a), mn("invalid", e);
          break;
        case "textarea":
          tv(e, a), mn("invalid", e);
          break;
      }
      ds(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, _ = 0; _ < g.length; _++) {
          var w = g[_].name.toLowerCase();
          switch (w) {
            // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[_].name);
          }
        }
      }
      var N = null;
      for (var U in a)
        if (a.hasOwnProperty(U)) {
          var j = a[U];
          if (U === Ks)
            typeof j == "string" ? e.textContent !== j && (a[Mo] !== !0 && mh(e.textContent, j, s, f), N = [Ks, j]) : typeof j == "number" && e.textContent !== "" + j && (a[Mo] !== !0 && mh(e.textContent, j, s, f), N = [Ks, "" + j]);
          else if (Ht.hasOwnProperty(U))
            j != null && (typeof j != "function" && vh(U, j), U === "onScroll" && mn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var le = void 0, Me = p && Ve ? null : $n(U);
            if (a[Mo] !== !0) {
              if (!(U === fh || U === Mo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              U === "value" || U === "checked" || U === "selected")) {
                if (U === ep) {
                  var _e = e.innerHTML, Rt = j ? j[dh] : void 0;
                  if (Rt != null) {
                    var pt = NS(e, Rt);
                    pt !== _e && tp(U, _e, pt);
                  }
                } else if (U === Zs) {
                  if (v.delete(U), MS) {
                    var k = Km(j);
                    le = e.getAttribute("style"), k !== le && tp(U, le, k);
                  }
                } else if (p && !Ve)
                  v.delete(U.toLowerCase()), le = Da(e, U, j), j !== le && tp(U, le, j);
                else if (!dn(U, Me, p) && !Vt(U, j, Me, p)) {
                  var H = !1;
                  if (Me !== null)
                    v.delete(Me.attributeName), le = Xa(e, U, j, Me);
                  else {
                    var O = i;
                    if (O === Bi && (O = Bf(t)), O === Bi)
                      v.delete(U.toLowerCase());
                    else {
                      var q = $R(U);
                      q !== null && q !== U && (H = !0, v.delete(q)), v.delete(U);
                    }
                    le = Da(e, U, j);
                  }
                  var pe = Ve;
                  !pe && j !== le && !H && tp(U, le, j);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Mo] !== !0 && LS(v), t) {
        case "input":
          Hi(e), X(e, a, !0);
          break;
        case "textarea":
          Hi(e), hc(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && yh(e);
          break;
      }
      return N;
    }
    function IR(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Oy(e, t) {
      {
        if (Pa)
          return;
        Pa = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t) {
      {
        if (Pa)
          return;
        Pa = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function My(e, t, a) {
      {
        if (Pa)
          return;
        Pa = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Ny(e, t) {
      {
        if (t === "" || Pa)
          return;
        Pa = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function QR(e, t, a) {
      switch (t) {
        case "input":
          ge(e, a);
          return;
        case "textarea":
          Bm(e, a);
          return;
        case "select":
          Jp(e, a);
          return;
      }
    }
    var np = function() {
    }, rp = function() {
    };
    {
      var WR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], US = [
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
      ], GR = US.concat(["button"]), qR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], AS = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      rp = function(e, t) {
        var a = Ke({}, e || AS), i = {
          tag: t
        };
        return US.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), GR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), WR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var XR = function(e, t) {
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
            return qR.indexOf(t) === -1;
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
      }, KR = function(e, t) {
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
      }, FS = {};
      np = function(e, t, a) {
        a = a || AS;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = XR(e, u) ? null : i, f = s ? null : KR(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!FS[y]) {
            FS[y] = !0;
            var g = e, _ = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", _ = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var w = "";
              v === "table" && e === "tr" && (w += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, _, w);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var gh = "suppressHydrationWarning", Sh = "$", Eh = "/$", ap = "$?", ip = "$!", ZR = "style", zy = null, Uy = null;
    function JR(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case sa:
        case Yf: {
          t = i === sa ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : $f(null, "");
          break;
        }
        default: {
          var s = i === Sn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = $f(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = rp(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function eT(e, t, a) {
      {
        var i = e, u = $f(i.namespace, t), s = rp(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function vD(e) {
      return e;
    }
    function tT(e) {
      zy = Pn(), Uy = hR();
      var t = null;
      return wu(!1), t;
    }
    function nT(e) {
      mR(Uy), wu(zy), zy = null, Uy = null;
    }
    function rT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (np(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = rp(f.ancestorInfo, e);
          np(null, p, v);
        }
        s = f.namespace;
      }
      var y = jR(e, t, a, s);
      return op(u, y), $y(y, t), y;
    }
    function aT(e, t) {
      e.appendChild(t);
    }
    function iT(e, t, a, i, u) {
      switch (VR(e, t, a, i), t) {
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
    function lT(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = rp(f.ancestorInfo, t);
          np(null, p, v);
        }
      }
      return PR(e, t, a, i);
    }
    function Ay(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function uT(e, t, a, i) {
      {
        var u = a;
        np(null, e, u.ancestorInfo);
      }
      var s = HR(e, t);
      return op(i, s), s;
    }
    function oT() {
      var e = window.event;
      return e === void 0 ? li : _u(e.type);
    }
    var Fy = typeof setTimeout == "function" ? setTimeout : void 0, sT = typeof clearTimeout == "function" ? clearTimeout : void 0, jy = -1, jS = typeof Promise == "function" ? Promise : void 0, cT = typeof queueMicrotask == "function" ? queueMicrotask : typeof jS < "u" ? function(e) {
      return jS.resolve(null).then(e).catch(fT);
    } : Fy;
    function fT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function dT(e, t, a, i) {
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
    function pT(e, t, a, i, u, s) {
      BR(e, t, a, i, u), $y(e, u);
    }
    function HS(e) {
      ss(e, "");
    }
    function vT(e, t, a) {
      e.nodeValue = a;
    }
    function hT(e, t) {
      e.appendChild(t);
    }
    function mT(e, t) {
      var a;
      e.nodeType === Sn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && yh(a);
    }
    function yT(e, t, a) {
      e.insertBefore(t, a);
    }
    function gT(e, t, a) {
      e.nodeType === Sn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function ST(e, t) {
      e.removeChild(t);
    }
    function ET(e, t) {
      e.nodeType === Sn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Hy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Sn) {
          var s = u.data;
          if (s === Eh)
            if (i === 0) {
              e.removeChild(u), fn(t);
              return;
            } else
              i--;
          else (s === Sh || s === ap || s === ip) && i++;
        }
        a = u;
      } while (a);
      fn(t);
    }
    function CT(e, t) {
      e.nodeType === Sn ? Hy(e.parentNode, t) : e.nodeType === $r && Hy(e, t), fn(e);
    }
    function RT(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function TT(e) {
      e.nodeValue = "";
    }
    function wT(e, t) {
      e = e;
      var a = t[ZR], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = xl("display", i);
    }
    function xT(e, t) {
      e.nodeValue = t;
    }
    function _T(e) {
      e.nodeType === $r ? e.textContent = "" : e.nodeType === sa && e.documentElement && e.removeChild(e.documentElement);
    }
    function bT(e, t, a) {
      return e.nodeType !== $r || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function DT(e, t) {
      return t === "" || e.nodeType !== $i ? null : e;
    }
    function kT(e) {
      return e.nodeType !== Sn ? null : e;
    }
    function VS(e) {
      return e.data === ap;
    }
    function Vy(e) {
      return e.data === ip;
    }
    function OT(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function LT(e, t) {
      e._reactRetry = t;
    }
    function Ch(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === $r || t === $i)
          break;
        if (t === Sn) {
          var a = e.data;
          if (a === Sh || a === ip || a === ap)
            break;
          if (a === Eh)
            return null;
        }
      }
      return e;
    }
    function lp(e) {
      return Ch(e.nextSibling);
    }
    function MT(e) {
      return Ch(e.firstChild);
    }
    function NT(e) {
      return Ch(e.firstChild);
    }
    function zT(e) {
      return Ch(e.nextSibling);
    }
    function UT(e, t, a, i, u, s, f) {
      op(s, e), $y(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & ke) !== ne;
      return YR(e, t, a, p, i, y, f);
    }
    function AT(e, t, a, i) {
      return op(a, e), a.mode & ke, IR(e, t);
    }
    function FT(e, t) {
      op(t, e);
    }
    function jT(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Sn) {
          var i = t.data;
          if (i === Eh) {
            if (a === 0)
              return lp(t);
            a--;
          } else (i === Sh || i === ip || i === ap) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function PS(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Sn) {
          var i = t.data;
          if (i === Sh || i === ip || i === ap) {
            if (a === 0)
              return t;
            a--;
          } else i === Eh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function HT(e) {
      fn(e);
    }
    function VT(e) {
      fn(e);
    }
    function PT(e) {
      return e !== "head" && e !== "body";
    }
    function BT(e, t, a, i) {
      var u = !0;
      mh(t.nodeValue, a, i, u);
    }
    function $T(e, t, a, i, u, s) {
      if (t[gh] !== !0) {
        var f = !0;
        mh(i.nodeValue, u, s, f);
      }
    }
    function YT(e, t) {
      t.nodeType === $r ? Oy(e, t) : t.nodeType === Sn || Ly(e, t);
    }
    function IT(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === $r ? Oy(a, t) : t.nodeType === Sn || Ly(a, t));
      }
    }
    function QT(e, t, a, i, u) {
      (u || t[gh] !== !0) && (i.nodeType === $r ? Oy(a, i) : i.nodeType === Sn || Ly(a, i));
    }
    function WT(e, t, a) {
      My(e, t);
    }
    function GT(e, t) {
      Ny(e, t);
    }
    function qT(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && My(i, t);
      }
    }
    function XT(e, t) {
      {
        var a = e.parentNode;
        a !== null && Ny(a, t);
      }
    }
    function KT(e, t, a, i, u, s) {
      (s || t[gh] !== !0) && My(a, i);
    }
    function ZT(e, t, a, i, u) {
      (u || t[gh] !== !0) && Ny(a, i);
    }
    function JT(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function ew(e) {
      Zd(e);
    }
    var df = Math.random().toString(36).slice(2), pf = "__reactFiber$" + df, Py = "__reactProps$" + df, up = "__reactContainer$" + df, By = "__reactEvents$" + df, tw = "__reactListeners$" + df, nw = "__reactHandles$" + df;
    function rw(e) {
      delete e[pf], delete e[Py], delete e[By], delete e[tw], delete e[nw];
    }
    function op(e, t) {
      t[pf] = e;
    }
    function Rh(e, t) {
      t[up] = e;
    }
    function BS(e) {
      e[up] = null;
    }
    function sp(e) {
      return !!e[up];
    }
    function Js(e) {
      var t = e[pf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[up] || a[pf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = PS(e); u !== null; ) {
              var s = u[pf];
              if (s)
                return s;
              u = PS(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function No(e) {
      var t = e[pf] || e[up];
      return t && (t.tag === ue || t.tag === Ee || t.tag === Ce || t.tag === ee) ? t : null;
    }
    function vf(e) {
      if (e.tag === ue || e.tag === Ee)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Th(e) {
      return e[Py] || null;
    }
    function $y(e, t) {
      e[Py] = t;
    }
    function aw(e) {
      var t = e[By];
      return t === void 0 && (t = e[By] = /* @__PURE__ */ new Set()), t;
    }
    var $S = {}, YS = ct.ReactDebugCurrentFrame;
    function wh(e) {
      if (e) {
        var t = e._owner, a = ht(e.type, e._source, t ? t.type : null);
        YS.setExtraStackFrame(a);
      } else
        YS.setExtraStackFrame(null);
    }
    function al(e, t, a, i, u) {
      {
        var s = Function.call.bind(Xn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (wh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), wh(null)), p instanceof Error && !(p.message in $S) && ($S[p.message] = !0, wh(u), S("Failed %s type: %s", a, p.message), wh(null));
          }
      }
    }
    var Yy = [], xh;
    xh = [];
    var zu = -1;
    function zo(e) {
      return {
        current: e
      };
    }
    function Kr(e, t) {
      if (zu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== xh[zu] && S("Unexpected Fiber popped."), e.current = Yy[zu], Yy[zu] = null, xh[zu] = null, zu--;
    }
    function Zr(e, t, a) {
      zu++, Yy[zu] = e.current, xh[zu] = a, e.current = t;
    }
    var Iy;
    Iy = {};
    var oi = {};
    Object.freeze(oi);
    var Uu = zo(oi), Ql = zo(!1), Qy = oi;
    function hf(e, t, a) {
      return a && Wl(t) ? Qy : Uu.current;
    }
    function IS(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function mf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return oi;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Ye(e) || "Unknown";
          al(i, s, "context", p);
        }
        return u && IS(e, t, s), s;
      }
    }
    function _h() {
      return Ql.current;
    }
    function Wl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function bh(e) {
      Kr(Ql, e), Kr(Uu, e);
    }
    function Wy(e) {
      Kr(Ql, e), Kr(Uu, e);
    }
    function QS(e, t, a) {
      {
        if (Uu.current !== oi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Zr(Uu, t, e), Zr(Ql, a, e);
      }
    }
    function WS(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ye(e) || "Unknown";
            Iy[s] || (Iy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ye(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ye(e) || "Unknown";
          al(u, f, "child context", v);
        }
        return Ke({}, a, f);
      }
    }
    function Dh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || oi;
        return Qy = Uu.current, Zr(Uu, a, e), Zr(Ql, Ql.current, e), !0;
      }
    }
    function GS(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = WS(e, t, Qy);
          i.__reactInternalMemoizedMergedChildContext = u, Kr(Ql, e), Kr(Uu, e), Zr(Uu, u, e), Zr(Ql, a, e);
        } else
          Kr(Ql, e), Zr(Ql, a, e);
      }
    }
    function iw(e) {
      {
        if (!da(e) || e.tag !== ve)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case ee:
              return t.stateNode.context;
            case ve: {
              var a = t.type;
              if (Wl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Uo = 0, kh = 1, Au = null, Gy = !1, qy = !1;
    function qS(e) {
      Au === null ? Au = [e] : Au.push(e);
    }
    function lw(e) {
      Gy = !0, qS(e);
    }
    function XS() {
      Gy && Ao();
    }
    function Ao() {
      if (!qy && Au !== null) {
        qy = !0;
        var e = 0, t = wr();
        try {
          var a = !0, i = Au;
          for (_t(ga); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Au = null, Gy = !1;
        } catch (s) {
          throw Au !== null && (Au = Au.slice(e + 1)), cd(Ml, Ao), s;
        } finally {
          _t(t), qy = !1;
        }
      }
      return null;
    }
    var yf = [], gf = 0, Oh = null, Lh = 0, _i = [], bi = 0, ec = null, Fu = 1, ju = "";
    function uw(e) {
      return nc(), (e.flags & kv) !== Le;
    }
    function ow(e) {
      return nc(), Lh;
    }
    function sw() {
      var e = ju, t = Fu, a = t & ~cw(t);
      return a.toString(32) + e;
    }
    function tc(e, t) {
      nc(), yf[gf++] = Lh, yf[gf++] = Oh, Oh = e, Lh = t;
    }
    function KS(e, t, a) {
      nc(), _i[bi++] = Fu, _i[bi++] = ju, _i[bi++] = ec, ec = e;
      var i = Fu, u = ju, s = Mh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Mh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, _ = (f & g).toString(32), w = f >> y, N = s - y, U = Mh(t) + N, j = p << N, le = j | w, Me = _ + u;
        Fu = 1 << U | le, ju = Me;
      } else {
        var _e = p << s, Rt = _e | f, pt = u;
        Fu = 1 << v | Rt, ju = pt;
      }
    }
    function Xy(e) {
      nc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        tc(e, a), KS(e, a, i);
      }
    }
    function Mh(e) {
      return 32 - fo(e);
    }
    function cw(e) {
      return 1 << Mh(e) - 1;
    }
    function Ky(e) {
      for (; e === Oh; )
        Oh = yf[--gf], yf[gf] = null, Lh = yf[--gf], yf[gf] = null;
      for (; e === ec; )
        ec = _i[--bi], _i[bi] = null, ju = _i[--bi], _i[bi] = null, Fu = _i[--bi], _i[bi] = null;
    }
    function fw() {
      return nc(), ec !== null ? {
        id: Fu,
        overflow: ju
      } : null;
    }
    function dw(e, t) {
      nc(), _i[bi++] = Fu, _i[bi++] = ju, _i[bi++] = ec, Fu = t.id, ju = t.overflow, ec = e;
    }
    function nc() {
      kr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Dr = null, Di = null, il = !1, rc = !1, Fo = null;
    function pw() {
      il && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function ZS() {
      rc = !0;
    }
    function vw() {
      return rc;
    }
    function hw(e) {
      var t = e.stateNode.containerInfo;
      return Di = NT(t), Dr = e, il = !0, Fo = null, rc = !1, !0;
    }
    function mw(e, t, a) {
      return Di = zT(t), Dr = e, il = !0, Fo = null, rc = !1, a !== null && dw(e, a), !0;
    }
    function JS(e, t) {
      switch (e.tag) {
        case ee: {
          YT(e.stateNode.containerInfo, t);
          break;
        }
        case ue: {
          var a = (e.mode & ke) !== ne;
          QT(
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
          i.dehydrated !== null && IT(i.dehydrated, t);
          break;
        }
      }
    }
    function e1(e, t) {
      JS(e, t);
      var a = Eb();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Lt) : i.push(a);
    }
    function Zy(e, t) {
      {
        if (rc)
          return;
        switch (e.tag) {
          case ee: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ue:
                var i = t.type;
                t.pendingProps, WT(a, i);
                break;
              case Ee:
                var u = t.pendingProps;
                GT(a, u);
                break;
            }
            break;
          }
          case ue: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ue: {
                var v = t.type, y = t.pendingProps, g = (e.mode & ke) !== ne;
                KT(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case Ee: {
                var _ = t.pendingProps, w = (e.mode & ke) !== ne;
                ZT(
                  s,
                  f,
                  p,
                  _,
                  // TODO: Delete this argument when we remove the legacy root API.
                  w
                );
                break;
              }
            }
            break;
          }
          case Ce: {
            var N = e.memoizedState, U = N.dehydrated;
            if (U !== null) switch (t.tag) {
              case ue:
                var j = t.type;
                t.pendingProps, qT(U, j);
                break;
              case Ee:
                var le = t.pendingProps;
                XT(U, le);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function t1(e, t) {
      t.flags = t.flags & ~mi | Gt, Zy(e, t);
    }
    function n1(e, t) {
      switch (e.tag) {
        case ue: {
          var a = e.type;
          e.pendingProps;
          var i = bT(t, a);
          return i !== null ? (e.stateNode = i, Dr = e, Di = MT(i), !0) : !1;
        }
        case Ee: {
          var u = e.pendingProps, s = DT(t, u);
          return s !== null ? (e.stateNode = s, Dr = e, Di = null, !0) : !1;
        }
        case Ce: {
          var f = kT(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: fw(),
              retryLane: ya
            };
            e.memoizedState = p;
            var v = Cb(f);
            return v.return = e, e.child = v, Dr = e, Di = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Jy(e) {
      return (e.mode & ke) !== ne && (e.flags & We) === Le;
    }
    function eg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function tg(e) {
      if (il) {
        var t = Di;
        if (!t) {
          Jy(e) && (Zy(Dr, e), eg()), t1(Dr, e), il = !1, Dr = e;
          return;
        }
        var a = t;
        if (!n1(e, t)) {
          Jy(e) && (Zy(Dr, e), eg()), t = lp(a);
          var i = Dr;
          if (!t || !n1(e, t)) {
            t1(Dr, e), il = !1, Dr = e;
            return;
          }
          e1(i, a);
        }
      }
    }
    function yw(e, t, a) {
      var i = e.stateNode, u = !rc, s = UT(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function gw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = AT(t, a, e);
      if (i) {
        var u = Dr;
        if (u !== null)
          switch (u.tag) {
            case ee: {
              var s = u.stateNode.containerInfo, f = (u.mode & ke) !== ne;
              BT(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ue: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & ke) !== ne;
              $T(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function Sw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      FT(a, e);
    }
    function Ew(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return jT(a);
    }
    function r1(e) {
      for (var t = e.return; t !== null && t.tag !== ue && t.tag !== ee && t.tag !== Ce; )
        t = t.return;
      Dr = t;
    }
    function Nh(e) {
      if (e !== Dr)
        return !1;
      if (!il)
        return r1(e), il = !0, !1;
      if (e.tag !== ee && (e.tag !== ue || PT(e.type) && !Ay(e.type, e.memoizedProps))) {
        var t = Di;
        if (t)
          if (Jy(e))
            a1(e), eg();
          else
            for (; t; )
              e1(e, t), t = lp(t);
      }
      return r1(e), e.tag === Ce ? Di = Ew(e) : Di = Dr ? lp(e.stateNode) : null, !0;
    }
    function Cw() {
      return il && Di !== null;
    }
    function a1(e) {
      for (var t = Di; t; )
        JS(e, t), t = lp(t);
    }
    function Sf() {
      Dr = null, Di = null, il = !1, rc = !1;
    }
    function i1() {
      Fo !== null && (ZE(Fo), Fo = null);
    }
    function kr() {
      return il;
    }
    function ng(e) {
      Fo === null ? Fo = [e] : Fo.push(e);
    }
    var Rw = ct.ReactCurrentBatchConfig, Tw = null;
    function ww() {
      return Rw.transition;
    }
    var ll = {
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
      var xw = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & ln && (t = a), a = a.return;
        return t;
      }, ac = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, cp = [], fp = [], dp = [], pp = [], vp = [], hp = [], ic = /* @__PURE__ */ new Set();
      ll.recordUnsafeLifecycleWarnings = function(e, t) {
        ic.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && cp.push(e), e.mode & ln && typeof t.UNSAFE_componentWillMount == "function" && fp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && dp.push(e), e.mode & ln && typeof t.UNSAFE_componentWillReceiveProps == "function" && pp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && vp.push(e), e.mode & ln && typeof t.UNSAFE_componentWillUpdate == "function" && hp.push(e));
      }, ll.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        cp.length > 0 && (cp.forEach(function(w) {
          e.add(Ye(w) || "Component"), ic.add(w.type);
        }), cp = []);
        var t = /* @__PURE__ */ new Set();
        fp.length > 0 && (fp.forEach(function(w) {
          t.add(Ye(w) || "Component"), ic.add(w.type);
        }), fp = []);
        var a = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(w) {
          a.add(Ye(w) || "Component"), ic.add(w.type);
        }), dp = []);
        var i = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(w) {
          i.add(Ye(w) || "Component"), ic.add(w.type);
        }), pp = []);
        var u = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(w) {
          u.add(Ye(w) || "Component"), ic.add(w.type);
        }), vp = []);
        var s = /* @__PURE__ */ new Set();
        if (hp.length > 0 && (hp.forEach(function(w) {
          s.add(Ye(w) || "Component"), ic.add(w.type);
        }), hp = []), t.size > 0) {
          var f = ac(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = ac(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = ac(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = ac(e);
          lt(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = ac(a);
          lt(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var _ = ac(u);
          lt(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, _);
        }
      };
      var zh = /* @__PURE__ */ new Map(), l1 = /* @__PURE__ */ new Set();
      ll.recordLegacyContextWarning = function(e, t) {
        var a = xw(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!l1.has(e.type)) {
          var i = zh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], zh.set(a, i)), i.push(e));
        }
      }, ll.flushLegacyContextWarning = function() {
        zh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ye(s) || "Component"), l1.add(s.type);
            });
            var u = ac(i);
            try {
              vn(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              nn();
            }
          }
        });
      }, ll.discardPendingWarnings = function() {
        cp = [], fp = [], dp = [], pp = [], vp = [], hp = [], zh = /* @__PURE__ */ new Map();
      };
    }
    var rg, ag, ig, lg, ug, u1 = function(e, t) {
    };
    rg = !1, ag = !1, ig = {}, lg = {}, ug = {}, u1 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ye(t) || "Component";
        lg[a] || (lg[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function _w(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function mp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & ln || Xe) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== ve) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !_w(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Ye(e) || "Component";
          ig[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), ig[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== ve)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Hn(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(_) {
            var w = v.refs;
            _ === null ? delete w[y] : w[y] = _;
          };
          return g._stringRef = y, g;
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
    function Uh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Ah(e) {
      {
        var t = Ye(e) || "Component";
        if (ug[t])
          return;
        ug[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function o1(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function s1(e) {
      function t(k, H) {
        if (e) {
          var O = k.deletions;
          O === null ? (k.deletions = [H], k.flags |= Lt) : O.push(H);
        }
      }
      function a(k, H) {
        if (!e)
          return null;
        for (var O = H; O !== null; )
          t(k, O), O = O.sibling;
        return null;
      }
      function i(k, H) {
        for (var O = /* @__PURE__ */ new Map(), q = H; q !== null; )
          q.key !== null ? O.set(q.key, q) : O.set(q.index, q), q = q.sibling;
        return O;
      }
      function u(k, H) {
        var O = vc(k, H);
        return O.index = 0, O.sibling = null, O;
      }
      function s(k, H, O) {
        if (k.index = O, !e)
          return k.flags |= kv, H;
        var q = k.alternate;
        if (q !== null) {
          var pe = q.index;
          return pe < H ? (k.flags |= Gt, H) : pe;
        } else
          return k.flags |= Gt, H;
      }
      function f(k) {
        return e && k.alternate === null && (k.flags |= Gt), k;
      }
      function p(k, H, O, q) {
        if (H === null || H.tag !== Ee) {
          var pe = nS(O, k.mode, q);
          return pe.return = k, pe;
        } else {
          var oe = u(H, O);
          return oe.return = k, oe;
        }
      }
      function v(k, H, O, q) {
        var pe = O.type;
        if (pe === oa)
          return g(k, H, O.props.children, q, O.key);
        if (H !== null && (H.elementType === pe || // Keep this check inline so it only runs on the false path:
        vC(H, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof pe == "object" && pe !== null && pe.$$typeof === ze && o1(pe) === H.type)) {
          var oe = u(H, O.props);
          return oe.ref = mp(k, H, O), oe.return = k, oe._debugSource = O._source, oe._debugOwner = O._owner, oe;
        }
        var Be = tS(O, k.mode, q);
        return Be.ref = mp(k, H, O), Be.return = k, Be;
      }
      function y(k, H, O, q) {
        if (H === null || H.tag !== Ue || H.stateNode.containerInfo !== O.containerInfo || H.stateNode.implementation !== O.implementation) {
          var pe = rS(O, k.mode, q);
          return pe.return = k, pe;
        } else {
          var oe = u(H, O.children || []);
          return oe.return = k, oe;
        }
      }
      function g(k, H, O, q, pe) {
        if (H === null || H.tag !== dt) {
          var oe = Go(O, k.mode, q, pe);
          return oe.return = k, oe;
        } else {
          var Be = u(H, O);
          return Be.return = k, Be;
        }
      }
      function _(k, H, O) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var q = nS("" + H, k.mode, O);
          return q.return = k, q;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case Sr: {
              var pe = tS(H, k.mode, O);
              return pe.ref = mp(k, null, H), pe.return = k, pe;
            }
            case jr: {
              var oe = rS(H, k.mode, O);
              return oe.return = k, oe;
            }
            case ze: {
              var Be = H._payload, qe = H._init;
              return _(k, qe(Be), O);
            }
          }
          if (wt(H) || Hr(H)) {
            var It = Go(H, k.mode, O, null);
            return It.return = k, It;
          }
          Uh(k, H);
        }
        return typeof H == "function" && Ah(k), null;
      }
      function w(k, H, O, q) {
        var pe = H !== null ? H.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return pe !== null ? null : p(k, H, "" + O, q);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case Sr:
              return O.key === pe ? v(k, H, O, q) : null;
            case jr:
              return O.key === pe ? y(k, H, O, q) : null;
            case ze: {
              var oe = O._payload, Be = O._init;
              return w(k, H, Be(oe), q);
            }
          }
          if (wt(O) || Hr(O))
            return pe !== null ? null : g(k, H, O, q, null);
          Uh(k, O);
        }
        return typeof O == "function" && Ah(k), null;
      }
      function N(k, H, O, q, pe) {
        if (typeof q == "string" && q !== "" || typeof q == "number") {
          var oe = k.get(O) || null;
          return p(H, oe, "" + q, pe);
        }
        if (typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case Sr: {
              var Be = k.get(q.key === null ? O : q.key) || null;
              return v(H, Be, q, pe);
            }
            case jr: {
              var qe = k.get(q.key === null ? O : q.key) || null;
              return y(H, qe, q, pe);
            }
            case ze:
              var It = q._payload, Mt = q._init;
              return N(k, H, O, Mt(It), pe);
          }
          if (wt(q) || Hr(q)) {
            var Bn = k.get(O) || null;
            return g(H, Bn, q, pe, null);
          }
          Uh(H, q);
        }
        return typeof q == "function" && Ah(H), null;
      }
      function U(k, H, O) {
        {
          if (typeof k != "object" || k === null)
            return H;
          switch (k.$$typeof) {
            case Sr:
            case jr:
              u1(k, O);
              var q = k.key;
              if (typeof q != "string")
                break;
              if (H === null) {
                H = /* @__PURE__ */ new Set(), H.add(q);
                break;
              }
              if (!H.has(q)) {
                H.add(q);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", q);
              break;
            case ze:
              var pe = k._payload, oe = k._init;
              U(oe(pe), H, O);
              break;
          }
        }
        return H;
      }
      function j(k, H, O, q) {
        for (var pe = null, oe = 0; oe < O.length; oe++) {
          var Be = O[oe];
          pe = U(Be, pe, k);
        }
        for (var qe = null, It = null, Mt = H, Bn = 0, Nt = 0, An = null; Mt !== null && Nt < O.length; Nt++) {
          Mt.index > Nt ? (An = Mt, Mt = null) : An = Mt.sibling;
          var ea = w(k, Mt, O[Nt], q);
          if (ea === null) {
            Mt === null && (Mt = An);
            break;
          }
          e && Mt && ea.alternate === null && t(k, Mt), Bn = s(ea, Bn, Nt), It === null ? qe = ea : It.sibling = ea, It = ea, Mt = An;
        }
        if (Nt === O.length) {
          if (a(k, Mt), kr()) {
            var Ar = Nt;
            tc(k, Ar);
          }
          return qe;
        }
        if (Mt === null) {
          for (; Nt < O.length; Nt++) {
            var ci = _(k, O[Nt], q);
            ci !== null && (Bn = s(ci, Bn, Nt), It === null ? qe = ci : It.sibling = ci, It = ci);
          }
          if (kr()) {
            var wa = Nt;
            tc(k, wa);
          }
          return qe;
        }
        for (var xa = i(k, Mt); Nt < O.length; Nt++) {
          var ta = N(xa, k, Nt, O[Nt], q);
          ta !== null && (e && ta.alternate !== null && xa.delete(ta.key === null ? Nt : ta.key), Bn = s(ta, Bn, Nt), It === null ? qe = ta : It.sibling = ta, It = ta);
        }
        if (e && xa.forEach(function(jf) {
          return t(k, jf);
        }), kr()) {
          var Iu = Nt;
          tc(k, Iu);
        }
        return qe;
      }
      function le(k, H, O, q) {
        var pe = Hr(O);
        if (typeof pe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (ag || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ag = !0), O.entries === pe && (rg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), rg = !0);
          var oe = pe.call(O);
          if (oe)
            for (var Be = null, qe = oe.next(); !qe.done; qe = oe.next()) {
              var It = qe.value;
              Be = U(It, Be, k);
            }
        }
        var Mt = pe.call(O);
        if (Mt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Bn = null, Nt = null, An = H, ea = 0, Ar = 0, ci = null, wa = Mt.next(); An !== null && !wa.done; Ar++, wa = Mt.next()) {
          An.index > Ar ? (ci = An, An = null) : ci = An.sibling;
          var xa = w(k, An, wa.value, q);
          if (xa === null) {
            An === null && (An = ci);
            break;
          }
          e && An && xa.alternate === null && t(k, An), ea = s(xa, ea, Ar), Nt === null ? Bn = xa : Nt.sibling = xa, Nt = xa, An = ci;
        }
        if (wa.done) {
          if (a(k, An), kr()) {
            var ta = Ar;
            tc(k, ta);
          }
          return Bn;
        }
        if (An === null) {
          for (; !wa.done; Ar++, wa = Mt.next()) {
            var Iu = _(k, wa.value, q);
            Iu !== null && (ea = s(Iu, ea, Ar), Nt === null ? Bn = Iu : Nt.sibling = Iu, Nt = Iu);
          }
          if (kr()) {
            var jf = Ar;
            tc(k, jf);
          }
          return Bn;
        }
        for (var Gp = i(k, An); !wa.done; Ar++, wa = Mt.next()) {
          var tu = N(Gp, k, Ar, wa.value, q);
          tu !== null && (e && tu.alternate !== null && Gp.delete(tu.key === null ? Ar : tu.key), ea = s(tu, ea, Ar), Nt === null ? Bn = tu : Nt.sibling = tu, Nt = tu);
        }
        if (e && Gp.forEach(function(Zb) {
          return t(k, Zb);
        }), kr()) {
          var Kb = Ar;
          tc(k, Kb);
        }
        return Bn;
      }
      function Me(k, H, O, q) {
        if (H !== null && H.tag === Ee) {
          a(k, H.sibling);
          var pe = u(H, O);
          return pe.return = k, pe;
        }
        a(k, H);
        var oe = nS(O, k.mode, q);
        return oe.return = k, oe;
      }
      function _e(k, H, O, q) {
        for (var pe = O.key, oe = H; oe !== null; ) {
          if (oe.key === pe) {
            var Be = O.type;
            if (Be === oa) {
              if (oe.tag === dt) {
                a(k, oe.sibling);
                var qe = u(oe, O.props.children);
                return qe.return = k, qe._debugSource = O._source, qe._debugOwner = O._owner, qe;
              }
            } else if (oe.elementType === Be || // Keep this check inline so it only runs on the false path:
            vC(oe, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Be == "object" && Be !== null && Be.$$typeof === ze && o1(Be) === oe.type) {
              a(k, oe.sibling);
              var It = u(oe, O.props);
              return It.ref = mp(k, oe, O), It.return = k, It._debugSource = O._source, It._debugOwner = O._owner, It;
            }
            a(k, oe);
            break;
          } else
            t(k, oe);
          oe = oe.sibling;
        }
        if (O.type === oa) {
          var Mt = Go(O.props.children, k.mode, q, O.key);
          return Mt.return = k, Mt;
        } else {
          var Bn = tS(O, k.mode, q);
          return Bn.ref = mp(k, H, O), Bn.return = k, Bn;
        }
      }
      function Rt(k, H, O, q) {
        for (var pe = O.key, oe = H; oe !== null; ) {
          if (oe.key === pe)
            if (oe.tag === Ue && oe.stateNode.containerInfo === O.containerInfo && oe.stateNode.implementation === O.implementation) {
              a(k, oe.sibling);
              var Be = u(oe, O.children || []);
              return Be.return = k, Be;
            } else {
              a(k, oe);
              break;
            }
          else
            t(k, oe);
          oe = oe.sibling;
        }
        var qe = rS(O, k.mode, q);
        return qe.return = k, qe;
      }
      function pt(k, H, O, q) {
        var pe = typeof O == "object" && O !== null && O.type === oa && O.key === null;
        if (pe && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case Sr:
              return f(_e(k, H, O, q));
            case jr:
              return f(Rt(k, H, O, q));
            case ze:
              var oe = O._payload, Be = O._init;
              return pt(k, H, Be(oe), q);
          }
          if (wt(O))
            return j(k, H, O, q);
          if (Hr(O))
            return le(k, H, O, q);
          Uh(k, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(Me(k, H, "" + O, q)) : (typeof O == "function" && Ah(k), a(k, H));
      }
      return pt;
    }
    var Ef = s1(!0), c1 = s1(!1);
    function bw(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = vc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = vc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Dw(e, t) {
      for (var a = e.child; a !== null; )
        hb(a, t), a = a.sibling;
    }
    var og = zo(null), sg;
    sg = {};
    var Fh = null, Cf = null, cg = null, jh = !1;
    function Hh() {
      Fh = null, Cf = null, cg = null, jh = !1;
    }
    function f1() {
      jh = !0;
    }
    function d1() {
      jh = !1;
    }
    function p1(e, t, a) {
      Zr(og, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== sg && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = sg;
    }
    function fg(e, t) {
      var a = og.current;
      Kr(og, t), e._currentValue = a;
    }
    function dg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Hl(i.childLanes, t) ? u !== null && !Hl(u.childLanes, t) && (u.childLanes = Ze(u.childLanes, t)) : (i.childLanes = Ze(i.childLanes, t), u !== null && (u.childLanes = Ze(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function kw(e, t, a) {
      Ow(e, t, a);
    }
    function Ow(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === ve) {
                var p = Co(a), v = Hu(Zt, p);
                v.tag = Ph;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, _ = g.pending;
                  _ === null ? v.next = v : (v.next = _.next, _.next = v), g.pending = v;
                }
              }
              i.lanes = Ze(i.lanes, a);
              var w = i.alternate;
              w !== null && (w.lanes = Ze(w.lanes, a)), dg(i.return, a, e), s.lanes = Ze(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === tt)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Xt) {
          var N = i.return;
          if (N === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          N.lanes = Ze(N.lanes, a);
          var U = N.alternate;
          U !== null && (U.lanes = Ze(U.lanes, a)), dg(N, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var j = u.sibling;
            if (j !== null) {
              j.return = u.return, u = j;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Rf(e, t) {
      Fh = e, Cf = null, cg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Xr(a.lanes, t) && Lp(), a.firstContext = null);
      }
    }
    function Gn(e) {
      jh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (cg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Cf === null) {
          if (Fh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Cf = a, Fh.dependencies = {
            lanes: $,
            firstContext: a
          };
        } else
          Cf = Cf.next = a;
      }
      return t;
    }
    var lc = null;
    function pg(e) {
      lc === null ? lc = [e] : lc.push(e);
    }
    function Lw() {
      if (lc !== null) {
        for (var e = 0; e < lc.length; e++) {
          var t = lc[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        lc = null;
      }
    }
    function v1(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, pg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Vh(e, i);
    }
    function Mw(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, pg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Nw(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, pg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Vh(e, i);
    }
    function Ba(e, t) {
      return Vh(e, t);
    }
    var zw = Vh;
    function Vh(e, t) {
      e.lanes = Ze(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ze(a.lanes, t)), a === null && (e.flags & (Gt | mi)) !== Le && cC(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Ze(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Ze(a.childLanes, t) : (u.flags & (Gt | mi)) !== Le && cC(e), i = u, u = u.return;
      if (i.tag === ee) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var h1 = 0, m1 = 1, Ph = 2, vg = 3, Bh = !1, hg, $h;
    hg = !1, $h = null;
    function mg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: $
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function y1(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Hu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: h1,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function jo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if ($h === u && !hg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), hg = !0), M_()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, zw(e, a);
      } else
        return Nw(e, u, t, a);
    }
    function Yh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Bv(a)) {
          var s = u.lanes;
          s = bd(s, e.pendingLanes);
          var f = Ze(s, a);
          u.lanes = f, qc(e, f);
        }
      }
    }
    function yg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function Uw(e, t, a, i, u, s) {
      switch (a.tag) {
        case m1: {
          var f = a.payload;
          if (typeof f == "function") {
            f1();
            var p = f.call(s, i, u);
            {
              if (e.mode & ln) {
                Vn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Vn(!1);
                }
              }
              d1();
            }
            return p;
          }
          return f;
        }
        case vg:
          e.flags = e.flags & ~Jn | We;
        // Intentional fallthrough
        case h1: {
          var v = a.payload, y;
          if (typeof v == "function") {
            f1(), y = v.call(s, i, u);
            {
              if (e.mode & ln) {
                Vn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Vn(!1);
                }
              }
              d1();
            }
          } else
            y = v;
          return y == null ? i : Ke({}, i, y);
        }
        case Ph:
          return Bh = !0, i;
      }
      return i;
    }
    function Ih(e, t, a, i) {
      var u = e.updateQueue;
      Bh = !1, $h = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var _ = g.updateQueue, w = _.lastBaseUpdate;
          w !== f && (w === null ? _.firstBaseUpdate = y : w.next = y, _.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var N = u.baseState, U = $, j = null, le = null, Me = null, _e = s;
        do {
          var Rt = _e.lane, pt = _e.eventTime;
          if (Hl(i, Rt)) {
            if (Me !== null) {
              var H = {
                eventTime: pt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: qt,
                tag: _e.tag,
                payload: _e.payload,
                callback: _e.callback,
                next: null
              };
              Me = Me.next = H;
            }
            N = Uw(e, u, _e, N, t, a);
            var O = _e.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            _e.lane !== qt) {
              e.flags |= Yn;
              var q = u.effects;
              q === null ? u.effects = [_e] : q.push(_e);
            }
          } else {
            var k = {
              eventTime: pt,
              lane: Rt,
              tag: _e.tag,
              payload: _e.payload,
              callback: _e.callback,
              next: null
            };
            Me === null ? (le = Me = k, j = N) : Me = Me.next = k, U = Ze(U, Rt);
          }
          if (_e = _e.next, _e === null) {
            if (p = u.shared.pending, p === null)
              break;
            var pe = p, oe = pe.next;
            pe.next = null, _e = oe, u.lastBaseUpdate = pe, u.shared.pending = null;
          }
        } while (!0);
        Me === null && (j = N), u.baseState = j, u.firstBaseUpdate = le, u.lastBaseUpdate = Me;
        var Be = u.shared.interleaved;
        if (Be !== null) {
          var qe = Be;
          do
            U = Ze(U, qe.lane), qe = qe.next;
          while (qe !== Be);
        } else s === null && (u.shared.lanes = $);
        $p(U), e.lanes = U, e.memoizedState = N;
      }
      $h = null;
    }
    function Aw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function g1() {
      Bh = !1;
    }
    function Qh() {
      return Bh;
    }
    function S1(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Aw(f, a));
        }
    }
    var yp = {}, Ho = zo(yp), gp = zo(yp), Wh = zo(yp);
    function Gh(e) {
      if (e === yp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function E1() {
      var e = Gh(Wh.current);
      return e;
    }
    function gg(e, t) {
      Zr(Wh, t, e), Zr(gp, e, e), Zr(Ho, yp, e);
      var a = JR(t);
      Kr(Ho, e), Zr(Ho, a, e);
    }
    function Tf(e) {
      Kr(Ho, e), Kr(gp, e), Kr(Wh, e);
    }
    function Sg() {
      var e = Gh(Ho.current);
      return e;
    }
    function C1(e) {
      Gh(Wh.current);
      var t = Gh(Ho.current), a = eT(t, e.type);
      t !== a && (Zr(gp, e, e), Zr(Ho, a, e));
    }
    function Eg(e) {
      gp.current === e && (Kr(Ho, e), Kr(gp, e));
    }
    var Fw = 0, R1 = 1, T1 = 1, Sp = 2, ul = zo(Fw);
    function Cg(e, t) {
      return (e & t) !== 0;
    }
    function wf(e) {
      return e & R1;
    }
    function Rg(e, t) {
      return e & R1 | t;
    }
    function jw(e, t) {
      return e | t;
    }
    function Vo(e, t) {
      Zr(ul, t, e);
    }
    function xf(e) {
      Kr(ul, e);
    }
    function Hw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function qh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Ce) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || VS(i) || Vy(i))
              return t;
          }
        } else if (t.tag === gt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & We) !== Le;
          if (u)
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
    var $a = (
      /*   */
      0
    ), nr = (
      /* */
      1
    ), Gl = (
      /*  */
      2
    ), rr = (
      /*    */
      4
    ), Or = (
      /*   */
      8
    ), Tg = [];
    function wg() {
      for (var e = 0; e < Tg.length; e++) {
        var t = Tg[e];
        t._workInProgressVersionPrimary = null;
      }
      Tg.length = 0;
    }
    function Vw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ce = ct.ReactCurrentDispatcher, Ep = ct.ReactCurrentBatchConfig, xg, _f;
    xg = /* @__PURE__ */ new Set();
    var uc = $, Yt = null, ar = null, ir = null, Xh = !1, Cp = !1, Rp = 0, Pw = 0, Bw = 25, V = null, ki = null, Po = -1, _g = !1;
    function jt() {
      {
        var e = V;
        ki === null ? ki = [e] : ki.push(e);
      }
    }
    function J() {
      {
        var e = V;
        ki !== null && (Po++, ki[Po] !== e && $w(e));
      }
    }
    function bf(e) {
      e != null && !wt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", V, typeof e);
    }
    function $w(e) {
      {
        var t = Ye(Yt);
        if (!xg.has(t) && (xg.add(t), ki !== null)) {
          for (var a = "", i = 30, u = 0; u <= Po; u++) {
            for (var s = ki[u], f = u === Po ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function Jr() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function bg(e, t) {
      if (_g)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", V), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, V, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!xe(e[a], t[a]))
          return !1;
      return !0;
    }
    function Df(e, t, a, i, u, s) {
      uc = s, Yt = t, ki = e !== null ? e._debugHookTypes : null, Po = -1, _g = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = $, e !== null && e.memoizedState !== null ? ce.current = I1 : ki !== null ? ce.current = Y1 : ce.current = $1;
      var f = a(i, u);
      if (Cp) {
        var p = 0;
        do {
          if (Cp = !1, Rp = 0, p >= Bw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, _g = !1, ar = null, ir = null, t.updateQueue = null, Po = -1, ce.current = Q1, f = a(i, u);
        } while (Cp);
      }
      ce.current = sm, t._debugHookTypes = ki;
      var v = ar !== null && ar.next !== null;
      if (uc = $, Yt = null, ar = null, ir = null, V = null, ki = null, Po = -1, e !== null && (e.flags & er) !== (t.flags & er) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & ke) !== ne && S("Internal React error: Expected static flag was missing. Please notify the React team."), Xh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function kf() {
      var e = Rp !== 0;
      return Rp = 0, e;
    }
    function w1(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Gr) !== ne ? t.flags &= ~(mu | Aa | Yr | Re) : t.flags &= ~(Yr | Re), e.lanes = Ro(e.lanes, a);
    }
    function x1() {
      if (ce.current = sm, Xh) {
        for (var e = Yt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Xh = !1;
      }
      uc = $, Yt = null, ar = null, ir = null, ki = null, Po = -1, V = null, j1 = !1, Cp = !1, Rp = 0;
    }
    function ql() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return ir === null ? Yt.memoizedState = ir = e : ir = ir.next = e, ir;
    }
    function Oi() {
      var e;
      if (ar === null) {
        var t = Yt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = ar.next;
      var a;
      if (ir === null ? a = Yt.memoizedState : a = ir.next, a !== null)
        ir = a, a = ir.next, ar = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        ar = e;
        var i = {
          memoizedState: ar.memoizedState,
          baseState: ar.baseState,
          baseQueue: ar.baseQueue,
          queue: ar.queue,
          next: null
        };
        ir === null ? Yt.memoizedState = ir = i : ir = ir.next = i;
      }
      return ir;
    }
    function _1() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Dg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function kg(e, t, a) {
      var i = ql(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: $,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Ww.bind(null, Yt, s);
      return [i.memoizedState, f];
    }
    function Og(e, t, a) {
      var i = Oi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = ar, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, _ = s.baseState, w = null, N = null, U = null, j = g;
        do {
          var le = j.lane;
          if (Hl(uc, le)) {
            if (U !== null) {
              var _e = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: qt,
                action: j.action,
                hasEagerState: j.hasEagerState,
                eagerState: j.eagerState,
                next: null
              };
              U = U.next = _e;
            }
            if (j.hasEagerState)
              _ = j.eagerState;
            else {
              var Rt = j.action;
              _ = e(_, Rt);
            }
          } else {
            var Me = {
              lane: le,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            };
            U === null ? (N = U = Me, w = _) : U = U.next = Me, Yt.lanes = Ze(Yt.lanes, le), $p(le);
          }
          j = j.next;
        } while (j !== null && j !== g);
        U === null ? w = _ : U.next = N, xe(_, i.memoizedState) || Lp(), i.memoizedState = _, i.baseState = w, i.baseQueue = U, u.lastRenderedState = _;
      }
      var pt = u.interleaved;
      if (pt !== null) {
        var k = pt;
        do {
          var H = k.lane;
          Yt.lanes = Ze(Yt.lanes, H), $p(H), k = k.next;
        } while (k !== pt);
      } else f === null && (u.lanes = $);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function Lg(e, t, a) {
      var i = Oi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        xe(p, i.memoizedState) || Lp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function hD(e, t, a) {
    }
    function mD(e, t, a) {
    }
    function Mg(e, t, a) {
      var i = Yt, u = ql(), s, f = kr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), _f || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), _f = !0);
      } else {
        if (s = t(), !_f) {
          var p = t();
          xe(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), _f = !0);
        }
        var v = Dm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ls(v, uc) || b1(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, tm(k1.bind(null, i, y, e), [e]), i.flags |= Yr, Tp(nr | Or, D1.bind(null, i, y, s, t), void 0, null), s;
    }
    function Kh(e, t, a) {
      var i = Yt, u = Oi(), s = t();
      if (!_f) {
        var f = t();
        xe(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), _f = !0);
      }
      var p = u.memoizedState, v = !xe(p, s);
      v && (u.memoizedState = s, Lp());
      var y = u.queue;
      if (xp(k1.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      ir !== null && ir.memoizedState.tag & nr) {
        i.flags |= Yr, Tp(nr | Or, D1.bind(null, i, y, s, t), void 0, null);
        var g = Dm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ls(g, uc) || b1(i, t, s);
      }
      return s;
    }
    function b1(e, t, a) {
      e.flags |= hu;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Yt.updateQueue;
      if (u === null)
        u = _1(), Yt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function D1(e, t, a, i) {
      t.value = a, t.getSnapshot = i, O1(t) && L1(e);
    }
    function k1(e, t, a) {
      var i = function() {
        O1(t) && L1(e);
      };
      return a(i);
    }
    function O1(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !xe(a, i);
      } catch {
        return !0;
      }
    }
    function L1(e) {
      var t = Ba(e, we);
      t !== null && sr(t, e, we, Zt);
    }
    function Zh(e) {
      var t = ql();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: $,
        dispatch: null,
        lastRenderedReducer: Dg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Gw.bind(null, Yt, a);
      return [t.memoizedState, i];
    }
    function Ng(e) {
      return Og(Dg);
    }
    function zg(e) {
      return Lg(Dg);
    }
    function Tp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Yt.updateQueue;
      if (s === null)
        s = _1(), Yt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Ug(e) {
      var t = ql();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Jh(e) {
      var t = Oi();
      return t.memoizedState;
    }
    function wp(e, t, a, i) {
      var u = ql(), s = i === void 0 ? null : i;
      Yt.flags |= e, u.memoizedState = Tp(nr | t, a, void 0, s);
    }
    function em(e, t, a, i) {
      var u = Oi(), s = i === void 0 ? null : i, f = void 0;
      if (ar !== null) {
        var p = ar.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (bg(s, v)) {
            u.memoizedState = Tp(t, a, f, s);
            return;
          }
        }
      }
      Yt.flags |= e, u.memoizedState = Tp(nr | t, a, f, s);
    }
    function tm(e, t) {
      return (Yt.mode & Gr) !== ne ? wp(mu | Yr | Ol, Or, e, t) : wp(Yr | Ol, Or, e, t);
    }
    function xp(e, t) {
      return em(Yr, Or, e, t);
    }
    function Ag(e, t) {
      return wp(Re, Gl, e, t);
    }
    function nm(e, t) {
      return em(Re, Gl, e, t);
    }
    function Fg(e, t) {
      var a = Re;
      return a |= Ua, (Yt.mode & Gr) !== ne && (a |= Aa), wp(a, rr, e, t);
    }
    function rm(e, t) {
      return em(Re, rr, e, t);
    }
    function M1(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function jg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Re;
      return u |= Ua, (Yt.mode & Gr) !== ne && (u |= Aa), wp(u, rr, M1.bind(null, t, e), i);
    }
    function am(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return em(Re, rr, M1.bind(null, t, e), i);
    }
    function Yw(e, t) {
    }
    var im = Yw;
    function Hg(e, t) {
      var a = ql(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function lm(e, t) {
      var a = Oi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (bg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Vg(e, t) {
      var a = ql(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function um(e, t) {
      var a = Oi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (bg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Pg(e) {
      var t = ql();
      return t.memoizedState = e, e;
    }
    function N1(e) {
      var t = Oi(), a = ar, i = a.memoizedState;
      return U1(t, i, e);
    }
    function z1(e) {
      var t = Oi();
      if (ar === null)
        return t.memoizedState = e, e;
      var a = ar.memoizedState;
      return U1(t, a, e);
    }
    function U1(e, t, a) {
      var i = !Hv(uc);
      if (i) {
        if (!xe(a, t)) {
          var u = Rr();
          Yt.lanes = Ze(Yt.lanes, u), $p(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Lp()), e.memoizedState = a, a;
    }
    function Iw(e, t, a) {
      var i = wr();
      _t(oy(i, Ri)), e(!0);
      var u = Ep.transition;
      Ep.transition = {};
      var s = Ep.transition;
      Ep.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (_t(i), Ep.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && lt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Bg() {
      var e = Zh(!1), t = e[0], a = e[1], i = Iw.bind(null, a), u = ql();
      return u.memoizedState = i, [t, i];
    }
    function A1() {
      var e = Ng(), t = e[0], a = Oi(), i = a.memoizedState;
      return [t, i];
    }
    function F1() {
      var e = zg(), t = e[0], a = Oi(), i = a.memoizedState;
      return [t, i];
    }
    var j1 = !1;
    function Qw() {
      return j1;
    }
    function $g() {
      var e = ql(), t = Dm(), a = t.identifierPrefix, i;
      if (kr()) {
        var u = sw();
        i = ":" + a + "R" + u;
        var s = Rp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Pw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function om() {
      var e = Oi(), t = e.memoizedState;
      return t;
    }
    function Ww(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Qo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (H1(e))
        V1(t, u);
      else {
        var s = v1(e, t, u, i);
        if (s !== null) {
          var f = Ta();
          sr(s, e, i, f), P1(s, t, i);
        }
      }
      B1(e, i);
    }
    function Gw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Qo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (H1(e))
        V1(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === $ && (s === null || s.lanes === $)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = ce.current, ce.current = ol;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, xe(y, v)) {
                Mw(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              ce.current = p;
            }
          }
        }
        var g = v1(e, t, u, i);
        if (g !== null) {
          var _ = Ta();
          sr(g, e, i, _), P1(g, t, i);
        }
      }
      B1(e, i);
    }
    function H1(e) {
      var t = e.alternate;
      return e === Yt || t !== null && t === Yt;
    }
    function V1(e, t) {
      Cp = Xh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function P1(e, t, a) {
      if (Bv(a)) {
        var i = t.lanes;
        i = bd(i, e.pendingLanes);
        var u = Ze(i, a);
        t.lanes = u, qc(e, u);
      }
    }
    function B1(e, t, a) {
      Zi(e, t);
    }
    var sm = {
      readContext: Gn,
      useCallback: Jr,
      useContext: Jr,
      useEffect: Jr,
      useImperativeHandle: Jr,
      useInsertionEffect: Jr,
      useLayoutEffect: Jr,
      useMemo: Jr,
      useReducer: Jr,
      useRef: Jr,
      useState: Jr,
      useDebugValue: Jr,
      useDeferredValue: Jr,
      useTransition: Jr,
      useMutableSource: Jr,
      useSyncExternalStore: Jr,
      useId: Jr,
      unstable_isNewReconciler: he
    }, $1 = null, Y1 = null, I1 = null, Q1 = null, Xl = null, ol = null, cm = null;
    {
      var Yg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ge = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      $1 = {
        readContext: function(e) {
          return Gn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", jt(), bf(t), Hg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", jt(), Gn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", jt(), bf(t), tm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", jt(), bf(a), jg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", jt(), bf(t), Ag(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", jt(), bf(t), Fg(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", jt(), bf(t);
          var a = ce.current;
          ce.current = Xl;
          try {
            return Vg(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", jt();
          var i = ce.current;
          ce.current = Xl;
          try {
            return kg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", jt(), Ug(e);
        },
        useState: function(e) {
          V = "useState", jt();
          var t = ce.current;
          ce.current = Xl;
          try {
            return Zh(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", jt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", jt(), Pg(e);
        },
        useTransition: function() {
          return V = "useTransition", jt(), Bg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", jt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", jt(), Mg(e, t, a);
        },
        useId: function() {
          return V = "useId", jt(), $g();
        },
        unstable_isNewReconciler: he
      }, Y1 = {
        readContext: function(e) {
          return Gn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", J(), Hg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", J(), Gn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", J(), tm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", J(), jg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", J(), Ag(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", J(), Fg(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", J();
          var a = ce.current;
          ce.current = Xl;
          try {
            return Vg(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", J();
          var i = ce.current;
          ce.current = Xl;
          try {
            return kg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", J(), Ug(e);
        },
        useState: function(e) {
          V = "useState", J();
          var t = ce.current;
          ce.current = Xl;
          try {
            return Zh(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", J(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", J(), Pg(e);
        },
        useTransition: function() {
          return V = "useTransition", J(), Bg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", J(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", J(), Mg(e, t, a);
        },
        useId: function() {
          return V = "useId", J(), $g();
        },
        unstable_isNewReconciler: he
      }, I1 = {
        readContext: function(e) {
          return Gn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", J(), lm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", J(), Gn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", J(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", J(), am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", J(), nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", J(), rm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", J();
          var a = ce.current;
          ce.current = ol;
          try {
            return um(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", J();
          var i = ce.current;
          ce.current = ol;
          try {
            return Og(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", J(), Jh();
        },
        useState: function(e) {
          V = "useState", J();
          var t = ce.current;
          ce.current = ol;
          try {
            return Ng(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", J(), im();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", J(), N1(e);
        },
        useTransition: function() {
          return V = "useTransition", J(), A1();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", J(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", J(), Kh(e, t);
        },
        useId: function() {
          return V = "useId", J(), om();
        },
        unstable_isNewReconciler: he
      }, Q1 = {
        readContext: function(e) {
          return Gn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", J(), lm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", J(), Gn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", J(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", J(), am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", J(), nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", J(), rm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", J();
          var a = ce.current;
          ce.current = cm;
          try {
            return um(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", J();
          var i = ce.current;
          ce.current = cm;
          try {
            return Lg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", J(), Jh();
        },
        useState: function(e) {
          V = "useState", J();
          var t = ce.current;
          ce.current = cm;
          try {
            return zg(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", J(), im();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", J(), z1(e);
        },
        useTransition: function() {
          return V = "useTransition", J(), F1();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", J(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", J(), Kh(e, t);
        },
        useId: function() {
          return V = "useId", J(), om();
        },
        unstable_isNewReconciler: he
      }, Xl = {
        readContext: function(e) {
          return Yg(), Gn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Ge(), jt(), Hg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Ge(), jt(), Gn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Ge(), jt(), tm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Ge(), jt(), jg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Ge(), jt(), Ag(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Ge(), jt(), Fg(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Ge(), jt();
          var a = ce.current;
          ce.current = Xl;
          try {
            return Vg(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Ge(), jt();
          var i = ce.current;
          ce.current = Xl;
          try {
            return kg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Ge(), jt(), Ug(e);
        },
        useState: function(e) {
          V = "useState", Ge(), jt();
          var t = ce.current;
          ce.current = Xl;
          try {
            return Zh(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Ge(), jt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Ge(), jt(), Pg(e);
        },
        useTransition: function() {
          return V = "useTransition", Ge(), jt(), Bg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Ge(), jt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Ge(), jt(), Mg(e, t, a);
        },
        useId: function() {
          return V = "useId", Ge(), jt(), $g();
        },
        unstable_isNewReconciler: he
      }, ol = {
        readContext: function(e) {
          return Yg(), Gn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Ge(), J(), lm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Ge(), J(), Gn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Ge(), J(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Ge(), J(), am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Ge(), J(), nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Ge(), J(), rm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Ge(), J();
          var a = ce.current;
          ce.current = ol;
          try {
            return um(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Ge(), J();
          var i = ce.current;
          ce.current = ol;
          try {
            return Og(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Ge(), J(), Jh();
        },
        useState: function(e) {
          V = "useState", Ge(), J();
          var t = ce.current;
          ce.current = ol;
          try {
            return Ng(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Ge(), J(), im();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Ge(), J(), N1(e);
        },
        useTransition: function() {
          return V = "useTransition", Ge(), J(), A1();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Ge(), J(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Ge(), J(), Kh(e, t);
        },
        useId: function() {
          return V = "useId", Ge(), J(), om();
        },
        unstable_isNewReconciler: he
      }, cm = {
        readContext: function(e) {
          return Yg(), Gn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Ge(), J(), lm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Ge(), J(), Gn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Ge(), J(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Ge(), J(), am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Ge(), J(), nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Ge(), J(), rm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Ge(), J();
          var a = ce.current;
          ce.current = ol;
          try {
            return um(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Ge(), J();
          var i = ce.current;
          ce.current = ol;
          try {
            return Lg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Ge(), J(), Jh();
        },
        useState: function(e) {
          V = "useState", Ge(), J();
          var t = ce.current;
          ce.current = ol;
          try {
            return zg(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Ge(), J(), im();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Ge(), J(), z1(e);
        },
        useTransition: function() {
          return V = "useTransition", Ge(), J(), F1();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Ge(), J(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Ge(), J(), Kh(e, t);
        },
        useId: function() {
          return V = "useId", Ge(), J(), om();
        },
        unstable_isNewReconciler: he
      };
    }
    var Bo = A.unstable_now, W1 = 0, fm = -1, _p = -1, dm = -1, Ig = !1, pm = !1;
    function G1() {
      return Ig;
    }
    function qw() {
      pm = !0;
    }
    function Xw() {
      Ig = !1, pm = !1;
    }
    function Kw() {
      Ig = pm, pm = !1;
    }
    function q1() {
      return W1;
    }
    function X1() {
      W1 = Bo();
    }
    function Qg(e) {
      _p = Bo(), e.actualStartTime < 0 && (e.actualStartTime = Bo());
    }
    function K1(e) {
      _p = -1;
    }
    function vm(e, t) {
      if (_p >= 0) {
        var a = Bo() - _p;
        e.actualDuration += a, t && (e.selfBaseDuration = a), _p = -1;
      }
    }
    function Kl(e) {
      if (fm >= 0) {
        var t = Bo() - fm;
        fm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ee:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case kt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Wg(e) {
      if (dm >= 0) {
        var t = Bo() - dm;
        dm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ee:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case kt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Zl() {
      fm = Bo();
    }
    function Gg() {
      dm = Bo();
    }
    function qg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function sl(e, t) {
      if (e && e.defaultProps) {
        var a = Ke({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Xg = {}, Kg, Zg, Jg, e0, t0, Z1, hm, n0, r0, a0, bp;
    {
      Kg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), e0 = /* @__PURE__ */ new Set(), n0 = /* @__PURE__ */ new Set(), t0 = /* @__PURE__ */ new Set(), r0 = /* @__PURE__ */ new Set(), a0 = /* @__PURE__ */ new Set(), bp = /* @__PURE__ */ new Set();
      var J1 = /* @__PURE__ */ new Set();
      hm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          J1.has(a) || (J1.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, Z1 = function(e, t) {
        if (t === void 0) {
          var a = mt(e) || "Component";
          t0.has(a) || (t0.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Xg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Xg);
    }
    function i0(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & ln) {
          Vn(!0);
          try {
            s = a(i, u);
          } finally {
            Vn(!1);
          }
        }
        Z1(t, s);
      }
      var f = s == null ? u : Ke({}, u, s);
      if (e.memoizedState = f, e.lanes === $) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var l0 = {
      isMounted: pa,
      enqueueSetState: function(e, t, a) {
        var i = hi(e), u = Ta(), s = Qo(i), f = Hu(u, s);
        f.payload = t, a != null && (hm(a, "setState"), f.callback = a);
        var p = jo(i, f, s);
        p !== null && (sr(p, i, s, u), Yh(p, i, s)), Zi(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = hi(e), u = Ta(), s = Qo(i), f = Hu(u, s);
        f.tag = m1, f.payload = t, a != null && (hm(a, "replaceState"), f.callback = a);
        var p = jo(i, f, s);
        p !== null && (sr(p, i, s, u), Yh(p, i, s)), Zi(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = hi(e), i = Ta(), u = Qo(a), s = Hu(i, u);
        s.tag = Ph, t != null && (hm(t, "forceUpdate"), s.callback = t);
        var f = jo(a, s, u);
        f !== null && (sr(f, a, u, i), Yh(f, a, u)), gd(a, u);
      }
    };
    function eE(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & ln) {
            Vn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Vn(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", mt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Tn(a, i) || !Tn(u, s) : !0;
    }
    function Zw(e, t, a) {
      var i = e.stateNode;
      {
        var u = mt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !bp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & ln) === ne && (bp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !bp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & ln) === ne && (bp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !r0.has(t) && (r0.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", mt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Jg.has(t) && (Jg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", mt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || wt(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function tE(e, t) {
      t.updater = l0, e.stateNode = t, xc(t, e), t._reactInternalInstance = Xg;
    }
    function nE(e, t, a) {
      var i = !1, u = oi, s = oi, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === I && f._context === void 0
        );
        if (!p && !a0.has(t)) {
          a0.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === R ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", mt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = Gn(f);
      else {
        u = hf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? mf(e, u) : oi;
      }
      var g = new t(a, s);
      if (e.mode & ln) {
        Vn(!0);
        try {
          g = new t(a, s);
        } finally {
          Vn(!1);
        }
      }
      var _ = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      tE(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && _ === null) {
          var w = mt(t) || "Component";
          Zg.has(w) || (Zg.add(w), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", w, g.state === null ? "null" : "undefined", w));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var N = null, U = null, j = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? N = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (N = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? U = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (U = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? j = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (j = "UNSAFE_componentWillUpdate"), N !== null || U !== null || j !== null) {
            var le = mt(t) || "Component", Me = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            e0.has(le) || (e0.add(le), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, le, Me, N !== null ? `
  ` + N : "", U !== null ? `
  ` + U : "", j !== null ? `
  ` + j : ""));
          }
        }
      }
      return i && IS(e, u, s), g;
    }
    function Jw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ye(e) || "Component"), l0.enqueueReplaceState(t, t.state, null));
    }
    function rE(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ye(e) || "Component";
          Kg.has(s) || (Kg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        l0.enqueueReplaceState(t, t.state, null);
      }
    }
    function u0(e, t, a, i) {
      Zw(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, mg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = Gn(s);
      else {
        var f = hf(e, t, !0);
        u.context = mf(e, f);
      }
      {
        if (u.state === a) {
          var p = mt(t) || "Component";
          n0.has(p) || (n0.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & ln && ll.recordLegacyContextWarning(e, u), ll.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (i0(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Jw(e, u), Ih(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = Re;
        y |= Ua, (e.mode & Gr) !== ne && (y |= Aa), e.flags |= y;
      }
    }
    function ex(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = oi;
      if (typeof p == "object" && p !== null)
        v = Gn(p);
      else {
        var y = hf(e, t, !0);
        v = mf(e, y);
      }
      var g = t.getDerivedStateFromProps, _ = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !_ && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && rE(e, u, a, v), g1();
      var w = e.memoizedState, N = u.state = w;
      if (Ih(e, a, u, i), N = e.memoizedState, s === a && w === N && !_h() && !Qh()) {
        if (typeof u.componentDidMount == "function") {
          var U = Re;
          U |= Ua, (e.mode & Gr) !== ne && (U |= Aa), e.flags |= U;
        }
        return !1;
      }
      typeof g == "function" && (i0(e, t, g, a), N = e.memoizedState);
      var j = Qh() || eE(e, t, s, a, w, N, v);
      if (j) {
        if (!_ && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var le = Re;
          le |= Ua, (e.mode & Gr) !== ne && (le |= Aa), e.flags |= le;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Me = Re;
          Me |= Ua, (e.mode & Gr) !== ne && (Me |= Aa), e.flags |= Me;
        }
        e.memoizedProps = a, e.memoizedState = N;
      }
      return u.props = a, u.state = N, u.context = v, j;
    }
    function tx(e, t, a, i, u) {
      var s = t.stateNode;
      y1(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : sl(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, _ = oi;
      if (typeof g == "object" && g !== null)
        _ = Gn(g);
      else {
        var w = hf(t, a, !0);
        _ = mf(t, w);
      }
      var N = a.getDerivedStateFromProps, U = typeof N == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !U && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== _) && rE(t, s, i, _), g1();
      var j = t.memoizedState, le = s.state = j;
      if (Ih(t, i, s, u), le = t.memoizedState, f === v && j === le && !_h() && !Qh() && !ie)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= Re), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= Nn), !1;
      typeof N == "function" && (i0(t, a, N, i), le = t.memoizedState);
      var Me = Qh() || eE(t, a, p, i, j, le, _) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      ie;
      return Me ? (!U && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, le, _), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, le, _)), typeof s.componentDidUpdate == "function" && (t.flags |= Re), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Nn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= Re), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= Nn), t.memoizedProps = i, t.memoizedState = le), s.props = i, s.state = le, s.context = _, Me;
    }
    function oc(e, t) {
      return {
        value: e,
        source: t,
        stack: Wu(t),
        digest: null
      };
    }
    function o0(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function nx(e, t) {
      return !0;
    }
    function s0(e, t) {
      try {
        var a = nx(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === ve)
            return;
          console.error(i);
        }
        var p = u ? Ye(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === ee)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Ye(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var _ = v + `
` + f + `

` + ("" + y);
        console.error(_);
      } catch (w) {
        setTimeout(function() {
          throw w;
        });
      }
    }
    var rx = typeof WeakMap == "function" ? WeakMap : Map;
    function aE(e, t, a) {
      var i = Hu(Zt, a);
      i.tag = vg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        q_(u), s0(e, t);
      }, i;
    }
    function c0(e, t, a) {
      var i = Hu(Zt, a);
      i.tag = vg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          hC(e), s0(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        hC(e), s0(e, t), typeof u != "function" && W_(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (Xr(e.lanes, we) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ye(e) || "Unknown"));
      }), i;
    }
    function iE(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new rx(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = X_.bind(null, e, t, a);
        va && Yp(e, a), t.then(s, s);
      }
    }
    function ax(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function ix(e, t) {
      var a = e.tag;
      if ((e.mode & ke) === ne && (a === Ne || a === je || a === $e)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function lE(e) {
      var t = e;
      do {
        if (t.tag === Ce && Hw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function uE(e, t, a, i, u) {
      if ((e.mode & ke) === ne) {
        if (e === t)
          e.flags |= Jn;
        else {
          if (e.flags |= We, a.flags |= _c, a.flags &= ~(Dv | kl), a.tag === ve) {
            var s = a.alternate;
            if (s === null)
              a.tag = yn;
            else {
              var f = Hu(Zt, we);
              f.tag = Ph, jo(a, f, we);
            }
          }
          a.lanes = Ze(a.lanes, we);
        }
        return e;
      }
      return e.flags |= Jn, e.lanes = u, e;
    }
    function lx(e, t, a, i, u) {
      if (a.flags |= kl, va && Yp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        ix(a), kr() && a.mode & ke && ZS();
        var f = lE(t);
        if (f !== null) {
          f.flags &= ~Cr, uE(f, t, a, e, u), f.mode & ke && iE(e, s, u), ax(f, e, s);
          return;
        } else {
          if (!wd(u)) {
            iE(e, s, u), $0();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (kr() && a.mode & ke) {
        ZS();
        var v = lE(t);
        if (v !== null) {
          (v.flags & Jn) === Le && (v.flags |= Cr), uE(v, t, a, e, u), ng(oc(i, a));
          return;
        }
      }
      i = oc(i, a), H_(i);
      var y = t;
      do {
        switch (y.tag) {
          case ee: {
            var g = i;
            y.flags |= Jn;
            var _ = Co(u);
            y.lanes = Ze(y.lanes, _);
            var w = aE(y, g, _);
            yg(y, w);
            return;
          }
          case ve:
            var N = i, U = y.type, j = y.stateNode;
            if ((y.flags & We) === Le && (typeof U.getDerivedStateFromError == "function" || j !== null && typeof j.componentDidCatch == "function" && !lC(j))) {
              y.flags |= Jn;
              var le = Co(u);
              y.lanes = Ze(y.lanes, le);
              var Me = c0(y, N, le);
              yg(y, Me);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function ux() {
      return null;
    }
    var Dp = ct.ReactCurrentOwner, cl = !1, f0, kp, d0, p0, v0, sc, h0, mm, Op;
    f0 = {}, kp = {}, d0 = {}, p0 = {}, v0 = {}, sc = !1, h0 = {}, mm = {}, Op = {};
    function Ca(e, t, a, i) {
      e === null ? t.child = c1(t, null, a, i) : t.child = Ef(t, e.child, a, i);
    }
    function ox(e, t, a, i) {
      t.child = Ef(t, e.child, null, i), t.child = Ef(t, null, a, i);
    }
    function oE(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && al(
          s,
          i,
          // Resolved props
          "prop",
          mt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Rf(t, u), ha(t);
      {
        if (Dp.current = t, Zn(!0), v = Df(e, t, f, i, p, u), y = kf(), t.mode & ln) {
          Vn(!0);
          try {
            v = Df(e, t, f, i, p, u), y = kf();
          } finally {
            Vn(!1);
          }
        }
        Zn(!1);
      }
      return ma(), e !== null && !cl ? (w1(e, t, u), Vu(e, t, u)) : (kr() && y && Xy(t), t.flags |= ni, Ca(e, t, v, u), t.child);
    }
    function sE(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (pb(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Ff(s), t.tag = $e, t.type = f, g0(t, s), cE(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && al(
            p,
            i,
            // Resolved props
            "prop",
            mt(s)
          ), a.defaultProps !== void 0) {
            var v = mt(s) || "Unknown";
            Op[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Op[v] = !0);
          }
        }
        var y = eS(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, _ = g.propTypes;
        _ && al(
          _,
          i,
          // Resolved props
          "prop",
          mt(g)
        );
      }
      var w = e.child, N = w0(e, u);
      if (!N) {
        var U = w.memoizedProps, j = a.compare;
        if (j = j !== null ? j : Tn, j(U, i) && e.ref === t.ref)
          return Vu(e, t, u);
      }
      t.flags |= ni;
      var le = vc(w, i);
      return le.ref = t.ref, le.return = t, t.child = le, le;
    }
    function cE(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === ze) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && al(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            mt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (Tn(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (cl = !1, t.pendingProps = i = g, w0(e, u))
            (e.flags & _c) !== Le && (cl = !0);
          else return t.lanes = e.lanes, Vu(e, t, u);
      }
      return m0(e, t, a, i, u);
    }
    function fE(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || b)
        if ((t.mode & ke) === ne) {
          var f = {
            baseLanes: $,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, km(t, a);
        } else if (Xr(a, ya)) {
          var _ = {
            baseLanes: $,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = _;
          var w = s !== null ? s.baseLanes : a;
          km(t, w);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = Ze(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = ya;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, km(t, v), null;
        }
      else {
        var N;
        s !== null ? (N = Ze(s.baseLanes, a), t.memoizedState = null) : N = a, km(t, N);
      }
      return Ca(e, t, u, a), t.child;
    }
    function sx(e, t, a) {
      var i = t.pendingProps;
      return Ca(e, t, i, a), t.child;
    }
    function cx(e, t, a) {
      var i = t.pendingProps.children;
      return Ca(e, t, i, a), t.child;
    }
    function fx(e, t, a) {
      {
        t.flags |= Re;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ca(e, t, s, a), t.child;
    }
    function dE(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= fa, t.flags |= yi);
    }
    function m0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && al(
          s,
          i,
          // Resolved props
          "prop",
          mt(a)
        );
      }
      var f;
      {
        var p = hf(t, a, !0);
        f = mf(t, p);
      }
      var v, y;
      Rf(t, u), ha(t);
      {
        if (Dp.current = t, Zn(!0), v = Df(e, t, a, i, f, u), y = kf(), t.mode & ln) {
          Vn(!0);
          try {
            v = Df(e, t, a, i, f, u), y = kf();
          } finally {
            Vn(!1);
          }
        }
        Zn(!1);
      }
      return ma(), e !== null && !cl ? (w1(e, t, u), Vu(e, t, u)) : (kr() && y && Xy(t), t.flags |= ni, Ca(e, t, v, u), t.child);
    }
    function pE(e, t, a, i, u) {
      {
        switch (Db(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= We, t.flags |= Jn;
            var y = new Error("Simulated error coming from DevTools"), g = Co(u);
            t.lanes = Ze(t.lanes, g);
            var _ = c0(t, oc(y, t), g);
            yg(t, _);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var w = a.propTypes;
          w && al(
            w,
            i,
            // Resolved props
            "prop",
            mt(a)
          );
        }
      }
      var N;
      Wl(a) ? (N = !0, Dh(t)) : N = !1, Rf(t, u);
      var U = t.stateNode, j;
      U === null ? (gm(e, t), nE(t, a, i), u0(t, a, i, u), j = !0) : e === null ? j = ex(t, a, i, u) : j = tx(e, t, a, i, u);
      var le = y0(e, t, a, j, N, u);
      {
        var Me = t.stateNode;
        j && Me.props !== i && (sc || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ye(t) || "a component"), sc = !0);
      }
      return le;
    }
    function y0(e, t, a, i, u, s) {
      dE(e, t);
      var f = (t.flags & We) !== Le;
      if (!i && !f)
        return u && GS(t, a, !1), Vu(e, t, s);
      var p = t.stateNode;
      Dp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, K1();
      else {
        ha(t);
        {
          if (Zn(!0), v = p.render(), t.mode & ln) {
            Vn(!0);
            try {
              p.render();
            } finally {
              Vn(!1);
            }
          }
          Zn(!1);
        }
        ma();
      }
      return t.flags |= ni, e !== null && f ? ox(e, t, v, s) : Ca(e, t, v, s), t.memoizedState = p.state, u && GS(t, a, !0), t.child;
    }
    function vE(e) {
      var t = e.stateNode;
      t.pendingContext ? QS(e, t.pendingContext, t.pendingContext !== t.context) : t.context && QS(e, t.context, !1), gg(e, t.containerInfo);
    }
    function dx(e, t, a) {
      if (vE(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      y1(e, t), Ih(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & Cr) {
          var g = oc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return hE(e, t, p, a, g);
        } else if (p !== s) {
          var _ = oc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return hE(e, t, p, a, _);
        } else {
          hw(t);
          var w = c1(t, null, p, a);
          t.child = w;
          for (var N = w; N; )
            N.flags = N.flags & ~Gt | mi, N = N.sibling;
        }
      } else {
        if (Sf(), p === s)
          return Vu(e, t, a);
        Ca(e, t, p, a);
      }
      return t.child;
    }
    function hE(e, t, a, i, u) {
      return Sf(), ng(u), t.flags |= Cr, Ca(e, t, a, i), t.child;
    }
    function px(e, t, a) {
      C1(t), e === null && tg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Ay(i, u);
      return p ? f = null : s !== null && Ay(i, s) && (t.flags |= za), dE(e, t), Ca(e, t, f, a), t.child;
    }
    function vx(e, t) {
      return e === null && tg(t), null;
    }
    function hx(e, t, a, i) {
      gm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = vb(v), g = sl(v, u), _;
      switch (y) {
        case Ne:
          return g0(t, v), t.type = v = Ff(v), _ = m0(null, t, v, g, i), _;
        case ve:
          return t.type = v = G0(v), _ = pE(null, t, v, g, i), _;
        case je:
          return t.type = v = q0(v), _ = oE(null, t, v, g, i), _;
        case ot: {
          if (t.type !== t.elementType) {
            var w = v.propTypes;
            w && al(
              w,
              g,
              // Resolved for outer only
              "prop",
              mt(v)
            );
          }
          return _ = sE(
            null,
            t,
            v,
            sl(v.type, g),
            // The inner type can have defaults too
            i
          ), _;
        }
      }
      var N = "";
      throw v !== null && typeof v == "object" && v.$$typeof === ze && (N = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + N));
    }
    function mx(e, t, a, i, u) {
      gm(e, t), t.tag = ve;
      var s;
      return Wl(a) ? (s = !0, Dh(t)) : s = !1, Rf(t, u), nE(t, a, i), u0(t, a, i, u), y0(null, t, a, !0, s, u);
    }
    function yx(e, t, a, i) {
      gm(e, t);
      var u = t.pendingProps, s;
      {
        var f = hf(t, a, !1);
        s = mf(t, f);
      }
      Rf(t, i);
      var p, v;
      ha(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = mt(a) || "Unknown";
          f0[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), f0[y] = !0);
        }
        t.mode & ln && ll.recordLegacyContextWarning(t, null), Zn(!0), Dp.current = t, p = Df(null, t, a, u, s, i), v = kf(), Zn(!1);
      }
      if (ma(), t.flags |= ni, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = mt(a) || "Unknown";
        kp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), kp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var _ = mt(a) || "Unknown";
          kp[_] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _, _, _), kp[_] = !0);
        }
        t.tag = ve, t.memoizedState = null, t.updateQueue = null;
        var w = !1;
        return Wl(a) ? (w = !0, Dh(t)) : w = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, mg(t), tE(t, p), u0(t, a, u, i), y0(null, t, a, !0, w, i);
      } else {
        if (t.tag = Ne, t.mode & ln) {
          Vn(!0);
          try {
            p = Df(null, t, a, u, s, i), v = kf();
          } finally {
            Vn(!1);
          }
        }
        return kr() && v && Xy(t), Ca(null, t, p, i), g0(t, a), t.child;
      }
    }
    function g0(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = La();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), v0[u] || (v0[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = mt(t) || "Unknown";
          Op[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Op[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = mt(t) || "Unknown";
          p0[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), p0[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = mt(t) || "Unknown";
          d0[v] || (S("%s: Function components do not support contextType.", v), d0[v] = !0);
        }
      }
    }
    var S0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: qt
    };
    function E0(e) {
      return {
        baseLanes: e,
        cachePool: ux(),
        transitions: null
      };
    }
    function gx(e, t) {
      var a = null;
      return {
        baseLanes: Ze(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Sx(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Cg(e, Sp);
    }
    function Ex(e, t) {
      return Ro(e.childLanes, t);
    }
    function mE(e, t, a) {
      var i = t.pendingProps;
      kb(t) && (t.flags |= We);
      var u = ul.current, s = !1, f = (t.flags & We) !== Le;
      if (f || Sx(u, e) ? (s = !0, t.flags &= ~We) : (e === null || e.memoizedState !== null) && (u = jw(u, T1)), u = wf(u), Vo(t, u), e === null) {
        tg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return xx(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var _ = Cx(t, y, g, a), w = t.child;
          return w.memoizedState = E0(a), t.memoizedState = S0, _;
        } else
          return C0(t, y);
      } else {
        var N = e.memoizedState;
        if (N !== null) {
          var U = N.dehydrated;
          if (U !== null)
            return _x(e, t, f, i, U, N, a);
        }
        if (s) {
          var j = i.fallback, le = i.children, Me = Tx(e, t, le, j, a), _e = t.child, Rt = e.child.memoizedState;
          return _e.memoizedState = Rt === null ? E0(a) : gx(Rt, a), _e.childLanes = Ex(e, a), t.memoizedState = S0, Me;
        } else {
          var pt = i.children, k = Rx(e, t, pt, a);
          return t.memoizedState = null, k;
        }
      }
    }
    function C0(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = R0(u, i);
      return s.return = e, e.child = s, s;
    }
    function Cx(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & ke) === ne && s !== null ? (p = s, p.childLanes = $, p.pendingProps = f, e.mode & Ie && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Go(a, u, i, null)) : (p = R0(f, u), v = Go(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function R0(e, t, a) {
      return yC(e, t, $, null);
    }
    function yE(e, t) {
      return vc(e, t);
    }
    function Rx(e, t, a, i) {
      var u = e.child, s = u.sibling, f = yE(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & ke) === ne && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Lt) : p.push(s);
      }
      return t.child = f, f;
    }
    function Tx(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & ke) === ne && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = $, y.pendingProps = v, t.mode & Ie && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = yE(f, v), y.subtreeFlags = f.subtreeFlags & er;
      var _;
      return p !== null ? _ = vc(p, i) : (_ = Go(i, s, u, null), _.flags |= Gt), _.return = t, y.return = t, y.sibling = _, t.child = y, _;
    }
    function ym(e, t, a, i) {
      i !== null && ng(i), Ef(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = C0(t, s);
      return f.flags |= Gt, t.memoizedState = null, f;
    }
    function wx(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = R0(f, s), v = Go(i, s, u, null);
      return v.flags |= Gt, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & ke) !== ne && Ef(t, e.child, null, u), v;
    }
    function xx(e, t, a) {
      return (e.mode & ke) === ne ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = we) : Vy(t) ? e.lanes = Ji : e.lanes = ya, null;
    }
    function _x(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Cr) {
          t.flags &= ~Cr;
          var k = o0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return ym(e, t, f, k);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= We, null;
          var H = i.children, O = i.fallback, q = wx(e, t, H, O, f), pe = t.child;
          return pe.memoizedState = E0(f), t.memoizedState = S0, q;
        }
      else {
        if (pw(), (t.mode & ke) === ne)
          return ym(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Vy(u)) {
          var p, v, y;
          {
            var g = OT(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var _;
          v ? _ = new Error(v) : _ = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var w = o0(_, p, y);
          return ym(e, t, f, w);
        }
        var N = Xr(f, e.childLanes);
        if (cl || N) {
          var U = Dm();
          if (U !== null) {
            var j = Od(U, f);
            if (j !== qt && j !== s.retryLane) {
              s.retryLane = j;
              var le = Zt;
              Ba(e, j), sr(U, e, j, le);
            }
          }
          $0();
          var Me = o0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return ym(e, t, f, Me);
        } else if (VS(u)) {
          t.flags |= We, t.child = e.child;
          var _e = K_.bind(null, e);
          return LT(u, _e), null;
        } else {
          mw(t, u, s.treeContext);
          var Rt = i.children, pt = C0(t, Rt);
          return pt.flags |= mi, pt;
        }
      }
    }
    function gE(e, t, a) {
      e.lanes = Ze(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Ze(i.lanes, t)), dg(e.return, t, a);
    }
    function bx(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Ce) {
          var u = i.memoizedState;
          u !== null && gE(i, a, e);
        } else if (i.tag === gt)
          gE(i, a, e);
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
    function Dx(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && qh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function kx(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !h0[e])
        if (h0[e] = !0, typeof e == "string")
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
    function Ox(e, t) {
      e !== void 0 && !mm[e] && (e !== "collapsed" && e !== "hidden" ? (mm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (mm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function SE(e, t) {
      {
        var a = wt(e), i = !a && typeof Hr(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Lx(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (wt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!SE(e[a], a))
              return;
        } else {
          var i = Hr(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!SE(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function T0(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function EE(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      kx(u), Ox(s, u), Lx(f, u), Ca(e, t, f, a);
      var p = ul.current, v = Cg(p, Sp);
      if (v)
        p = Rg(p, Sp), t.flags |= We;
      else {
        var y = e !== null && (e.flags & We) !== Le;
        y && bx(t, t.child, a), p = wf(p);
      }
      if (Vo(t, p), (t.mode & ke) === ne)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = Dx(t.child), _;
            g === null ? (_ = t.child, t.child = null) : (_ = g.sibling, g.sibling = null), T0(
              t,
              !1,
              // isBackwards
              _,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var w = null, N = t.child;
            for (t.child = null; N !== null; ) {
              var U = N.alternate;
              if (U !== null && qh(U) === null) {
                t.child = N;
                break;
              }
              var j = N.sibling;
              N.sibling = w, w = N, N = j;
            }
            T0(
              t,
              !0,
              // isBackwards
              w,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            T0(
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
    function Mx(e, t, a) {
      gg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Ef(t, null, i, a) : Ca(e, t, i, a), t.child;
    }
    var CE = !1;
    function Nx(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || CE || (CE = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && al(v, s, "prop", "Context.Provider");
      }
      if (p1(t, u, p), f !== null) {
        var y = f.value;
        if (xe(y, p)) {
          if (f.children === s.children && !_h())
            return Vu(e, t, a);
        } else
          kw(t, u, a);
      }
      var g = s.children;
      return Ca(e, t, g, a), t.child;
    }
    var RE = !1;
    function zx(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (RE || (RE = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Rf(t, a);
      var f = Gn(i);
      ha(t);
      var p;
      return Dp.current = t, Zn(!0), p = s(f), Zn(!1), ma(), t.flags |= ni, Ca(e, t, p, a), t.child;
    }
    function Lp() {
      cl = !0;
    }
    function gm(e, t) {
      (t.mode & ke) === ne && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Gt);
    }
    function Vu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), K1(), $p(t.lanes), Xr(a, t.childLanes) ? (bw(e, t), t.child) : null;
    }
    function Ux(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Lt) : s.push(e), a.flags |= Gt, a;
      }
    }
    function w0(e, t) {
      var a = e.lanes;
      return !!Xr(a, t);
    }
    function Ax(e, t, a) {
      switch (t.tag) {
        case ee:
          vE(t), t.stateNode, Sf();
          break;
        case ue:
          C1(t);
          break;
        case ve: {
          var i = t.type;
          Wl(i) && Dh(t);
          break;
        }
        case Ue:
          gg(t, t.stateNode.containerInfo);
          break;
        case tt: {
          var u = t.memoizedProps.value, s = t.type._context;
          p1(t, s, u);
          break;
        }
        case kt:
          {
            var f = Xr(a, t.childLanes);
            f && (t.flags |= Re);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Ce: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Vo(t, wf(ul.current)), t.flags |= We, null;
            var y = t.child, g = y.childLanes;
            if (Xr(a, g))
              return mE(e, t, a);
            Vo(t, wf(ul.current));
            var _ = Vu(e, t, a);
            return _ !== null ? _.sibling : null;
          } else
            Vo(t, wf(ul.current));
          break;
        }
        case gt: {
          var w = (e.flags & We) !== Le, N = Xr(a, t.childLanes);
          if (w) {
            if (N)
              return EE(e, t, a);
            t.flags |= We;
          }
          var U = t.memoizedState;
          if (U !== null && (U.rendering = null, U.tail = null, U.lastEffect = null), Vo(t, ul.current), N)
            break;
          return null;
        }
        case He:
        case Je:
          return t.lanes = $, fE(e, t, a);
      }
      return Vu(e, t, a);
    }
    function TE(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Ux(e, t, eS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || _h() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          cl = !0;
        else {
          var s = w0(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & We) === Le)
            return cl = !1, Ax(e, t, a);
          (e.flags & _c) !== Le ? cl = !0 : cl = !1;
        }
      } else if (cl = !1, kr() && uw(t)) {
        var f = t.index, p = ow();
        KS(t, p, f);
      }
      switch (t.lanes = $, t.tag) {
        case Qe:
          return yx(e, t, t.type, a);
        case wn: {
          var v = t.elementType;
          return hx(e, t, v, a);
        }
        case Ne: {
          var y = t.type, g = t.pendingProps, _ = t.elementType === y ? g : sl(y, g);
          return m0(e, t, y, _, a);
        }
        case ve: {
          var w = t.type, N = t.pendingProps, U = t.elementType === w ? N : sl(w, N);
          return pE(e, t, w, U, a);
        }
        case ee:
          return dx(e, t, a);
        case ue:
          return px(e, t, a);
        case Ee:
          return vx(e, t);
        case Ce:
          return mE(e, t, a);
        case Ue:
          return Mx(e, t, a);
        case je: {
          var j = t.type, le = t.pendingProps, Me = t.elementType === j ? le : sl(j, le);
          return oE(e, t, j, Me, a);
        }
        case dt:
          return sx(e, t, a);
        case Fn:
          return cx(e, t, a);
        case kt:
          return fx(e, t, a);
        case tt:
          return Nx(e, t, a);
        case on:
          return zx(e, t, a);
        case ot: {
          var _e = t.type, Rt = t.pendingProps, pt = sl(_e, Rt);
          if (t.type !== t.elementType) {
            var k = _e.propTypes;
            k && al(
              k,
              pt,
              // Resolved for outer only
              "prop",
              mt(_e)
            );
          }
          return pt = sl(_e.type, pt), sE(e, t, _e, pt, a);
        }
        case $e:
          return cE(e, t, t.type, t.pendingProps, a);
        case yn: {
          var H = t.type, O = t.pendingProps, q = t.elementType === H ? O : sl(H, O);
          return mx(e, t, H, q, a);
        }
        case gt:
          return EE(e, t, a);
        case tn:
          break;
        case He:
          return fE(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Of(e) {
      e.flags |= Re;
    }
    function wE(e) {
      e.flags |= fa, e.flags |= yi;
    }
    var xE, x0, _E, bE;
    xE = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ue || u.tag === Ee)
          aT(e, u.stateNode);
        else if (u.tag !== Ue) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, x0 = function(e, t) {
    }, _E = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Sg(), v = lT(f, a, s, i, u, p);
        t.updateQueue = v, v && Of(t);
      }
    }, bE = function(e, t, a, i) {
      a !== i && Of(t);
    };
    function Mp(e, t) {
      if (!kr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Lr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = $, i = Le;
      if (t) {
        if ((e.mode & Ie) !== ne) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = Ze(a, Ze(y.lanes, y.childLanes)), i |= y.subtreeFlags & er, i |= y.flags & er, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = Ze(a, Ze(g.lanes, g.childLanes)), i |= g.subtreeFlags & er, i |= g.flags & er, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Ie) !== ne) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Ze(a, Ze(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Ze(a, Ze(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Fx(e, t, a) {
      if (Cw() && (t.mode & ke) !== ne && (t.flags & We) === Le)
        return a1(t), Sf(), t.flags |= Cr | kl | Jn, !1;
      var i = Nh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Sw(t), Lr(t), (t.mode & Ie) !== ne) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Sf(), (t.flags & We) === Le && (t.memoizedState = null), t.flags |= Re, Lr(t), (t.mode & Ie) !== ne) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return i1(), !0;
    }
    function DE(e, t, a) {
      var i = t.pendingProps;
      switch (Ky(t), t.tag) {
        case Qe:
        case wn:
        case $e:
        case Ne:
        case je:
        case dt:
        case Fn:
        case kt:
        case on:
        case ot:
          return Lr(t), null;
        case ve: {
          var u = t.type;
          return Wl(u) && bh(t), Lr(t), null;
        }
        case ee: {
          var s = t.stateNode;
          if (Tf(t), Wy(t), wg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Nh(t);
            if (f)
              Of(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Cr) !== Le) && (t.flags |= Nn, i1());
            }
          }
          return x0(e, t), Lr(t), null;
        }
        case ue: {
          Eg(t);
          var v = E1(), y = t.type;
          if (e !== null && t.stateNode != null)
            _E(e, t, y, i, v), e.ref !== t.ref && wE(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Lr(t), null;
            }
            var g = Sg(), _ = Nh(t);
            if (_)
              yw(t, v, g) && Of(t);
            else {
              var w = rT(y, i, v, g, t);
              xE(w, t, !1, !1), t.stateNode = w, iT(w, y, i, v) && Of(t);
            }
            t.ref !== null && wE(t);
          }
          return Lr(t), null;
        }
        case Ee: {
          var N = i;
          if (e && t.stateNode != null) {
            var U = e.memoizedProps;
            bE(e, t, U, N);
          } else {
            if (typeof N != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var j = E1(), le = Sg(), Me = Nh(t);
            Me ? gw(t) && Of(t) : t.stateNode = uT(N, j, le, t);
          }
          return Lr(t), null;
        }
        case Ce: {
          xf(t);
          var _e = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Rt = Fx(e, t, _e);
            if (!Rt)
              return t.flags & Jn ? t : null;
          }
          if ((t.flags & We) !== Le)
            return t.lanes = a, (t.mode & Ie) !== ne && qg(t), t;
          var pt = _e !== null, k = e !== null && e.memoizedState !== null;
          if (pt !== k && pt) {
            var H = t.child;
            if (H.flags |= Dl, (t.mode & ke) !== ne) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !B);
              O || Cg(ul.current, T1) ? j_() : $0();
            }
          }
          var q = t.updateQueue;
          if (q !== null && (t.flags |= Re), Lr(t), (t.mode & Ie) !== ne && pt) {
            var pe = t.child;
            pe !== null && (t.treeBaseDuration -= pe.treeBaseDuration);
          }
          return null;
        }
        case Ue:
          return Tf(t), x0(e, t), e === null && ew(t.stateNode.containerInfo), Lr(t), null;
        case tt:
          var oe = t.type._context;
          return fg(oe, t), Lr(t), null;
        case yn: {
          var Be = t.type;
          return Wl(Be) && bh(t), Lr(t), null;
        }
        case gt: {
          xf(t);
          var qe = t.memoizedState;
          if (qe === null)
            return Lr(t), null;
          var It = (t.flags & We) !== Le, Mt = qe.rendering;
          if (Mt === null)
            if (It)
              Mp(qe, !1);
            else {
              var Bn = V_() && (e === null || (e.flags & We) === Le);
              if (!Bn)
                for (var Nt = t.child; Nt !== null; ) {
                  var An = qh(Nt);
                  if (An !== null) {
                    It = !0, t.flags |= We, Mp(qe, !1);
                    var ea = An.updateQueue;
                    return ea !== null && (t.updateQueue = ea, t.flags |= Re), t.subtreeFlags = Le, Dw(t, a), Vo(t, Rg(ul.current, Sp)), t.child;
                  }
                  Nt = Nt.sibling;
                }
              qe.tail !== null && zn() > qE() && (t.flags |= We, It = !0, Mp(qe, !1), t.lanes = Av);
            }
          else {
            if (!It) {
              var Ar = qh(Mt);
              if (Ar !== null) {
                t.flags |= We, It = !0;
                var ci = Ar.updateQueue;
                if (ci !== null && (t.updateQueue = ci, t.flags |= Re), Mp(qe, !0), qe.tail === null && qe.tailMode === "hidden" && !Mt.alternate && !kr())
                  return Lr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              zn() * 2 - qe.renderingStartTime > qE() && a !== ya && (t.flags |= We, It = !0, Mp(qe, !1), t.lanes = Av);
            }
            if (qe.isBackwards)
              Mt.sibling = t.child, t.child = Mt;
            else {
              var wa = qe.last;
              wa !== null ? wa.sibling = Mt : t.child = Mt, qe.last = Mt;
            }
          }
          if (qe.tail !== null) {
            var xa = qe.tail;
            qe.rendering = xa, qe.tail = xa.sibling, qe.renderingStartTime = zn(), xa.sibling = null;
            var ta = ul.current;
            return It ? ta = Rg(ta, Sp) : ta = wf(ta), Vo(t, ta), xa;
          }
          return Lr(t), null;
        }
        case tn:
          break;
        case He:
        case Je: {
          B0(t);
          var Iu = t.memoizedState, jf = Iu !== null;
          if (e !== null) {
            var Gp = e.memoizedState, tu = Gp !== null;
            tu !== jf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !b && (t.flags |= Dl);
          }
          return !jf || (t.mode & ke) === ne ? Lr(t) : Xr(eu, ya) && (Lr(t), t.subtreeFlags & (Gt | Re) && (t.flags |= Dl)), null;
        }
        case Tt:
          return null;
        case et:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function jx(e, t, a) {
      switch (Ky(t), t.tag) {
        case ve: {
          var i = t.type;
          Wl(i) && bh(t);
          var u = t.flags;
          return u & Jn ? (t.flags = u & ~Jn | We, (t.mode & Ie) !== ne && qg(t), t) : null;
        }
        case ee: {
          t.stateNode, Tf(t), Wy(t), wg();
          var s = t.flags;
          return (s & Jn) !== Le && (s & We) === Le ? (t.flags = s & ~Jn | We, t) : null;
        }
        case ue:
          return Eg(t), null;
        case Ce: {
          xf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Sf();
          }
          var p = t.flags;
          return p & Jn ? (t.flags = p & ~Jn | We, (t.mode & Ie) !== ne && qg(t), t) : null;
        }
        case gt:
          return xf(t), null;
        case Ue:
          return Tf(t), null;
        case tt:
          var v = t.type._context;
          return fg(v, t), null;
        case He:
        case Je:
          return B0(t), null;
        case Tt:
          return null;
        default:
          return null;
      }
    }
    function kE(e, t, a) {
      switch (Ky(t), t.tag) {
        case ve: {
          var i = t.type.childContextTypes;
          i != null && bh(t);
          break;
        }
        case ee: {
          t.stateNode, Tf(t), Wy(t), wg();
          break;
        }
        case ue: {
          Eg(t);
          break;
        }
        case Ue:
          Tf(t);
          break;
        case Ce:
          xf(t);
          break;
        case gt:
          xf(t);
          break;
        case tt:
          var u = t.type._context;
          fg(u, t);
          break;
        case He:
        case Je:
          B0(t);
          break;
      }
    }
    var OE = null;
    OE = /* @__PURE__ */ new Set();
    var Sm = !1, Mr = !1, Hx = typeof WeakSet == "function" ? WeakSet : Set, ye = null, Lf = null, Mf = null;
    function Vx(e) {
      ti(null, function() {
        throw e;
      }), Gi();
    }
    var Px = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ie)
        try {
          Zl(), t.componentWillUnmount();
        } finally {
          Kl(e);
        }
      else
        t.componentWillUnmount();
    };
    function LE(e, t) {
      try {
        $o(rr, e);
      } catch (a) {
        un(e, t, a);
      }
    }
    function _0(e, t, a) {
      try {
        Px(e, a);
      } catch (i) {
        un(e, t, i);
      }
    }
    function Bx(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        un(e, t, i);
      }
    }
    function ME(e, t) {
      try {
        zE(e);
      } catch (a) {
        un(e, t, a);
      }
    }
    function Nf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (vt && ut && e.mode & Ie)
              try {
                Zl(), i = a(null);
              } finally {
                Kl(e);
              }
            else
              i = a(null);
          } catch (u) {
            un(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ye(e));
        } else
          a.current = null;
    }
    function Em(e, t, a) {
      try {
        a();
      } catch (i) {
        un(e, t, i);
      }
    }
    var NE = !1;
    function $x(e, t) {
      tT(e.containerInfo), ye = t, Yx();
      var a = NE;
      return NE = !1, a;
    }
    function Yx() {
      for (; ye !== null; ) {
        var e = ye, t = e.child;
        (e.subtreeFlags & Ir) !== Le && t !== null ? (t.return = e, ye = t) : Ix();
      }
    }
    function Ix() {
      for (; ye !== null; ) {
        var e = ye;
        vn(e);
        try {
          Qx(e);
        } catch (a) {
          un(e, e.return, a);
        }
        nn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ye = t;
          return;
        }
        ye = e.return;
      }
    }
    function Qx(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Nn) !== Le) {
        switch (vn(e), e.tag) {
          case Ne:
          case je:
          case $e:
            break;
          case ve: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !sc && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : sl(e.type, i), u);
              {
                var p = OE;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ye(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case ee: {
            {
              var v = e.stateNode;
              _T(v.containerInfo);
            }
            break;
          }
          case ue:
          case Ee:
          case Ue:
          case yn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        nn();
      }
    }
    function fl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Or) !== $a ? Nc(t) : (e & rr) !== $a && oo(t), (e & Gl) !== $a && Ip(!0), Em(t, a, p), (e & Gl) !== $a && Ip(!1), (e & Or) !== $a ? zv() : (e & rr) !== $a && so());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function $o(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Or) !== $a ? Mc(t) : (e & rr) !== $a && Ts(t);
            var f = s.create;
            (e & Gl) !== $a && Ip(!0), s.destroy = f(), (e & Gl) !== $a && Ip(!1), (e & Or) !== $a ? Nv() : (e & rr) !== $a && gi();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & rr) !== Le ? v = "useLayoutEffect" : (s.tag & Gl) !== Le ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Wx(e, t) {
      if ((t.flags & Re) !== Le)
        switch (t.tag) {
          case kt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = q1(), p = t.alternate === null ? "mount" : "update";
            G1() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case ee:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case kt:
                  var g = v.stateNode;
                  g.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function Gx(e, t, a, i) {
      if ((a.flags & ri) !== Le)
        switch (a.tag) {
          case Ne:
          case je:
          case $e: {
            if (!Mr)
              if (a.mode & Ie)
                try {
                  Zl(), $o(rr | nr, a);
                } finally {
                  Kl(a);
                }
              else
                $o(rr | nr, a);
            break;
          }
          case ve: {
            var u = a.stateNode;
            if (a.flags & Re && !Mr)
              if (t === null)
                if (a.type === a.elementType && !sc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(a) || "instance")), a.mode & Ie)
                  try {
                    Zl(), u.componentDidMount();
                  } finally {
                    Kl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : sl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !sc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(a) || "instance")), a.mode & Ie)
                  try {
                    Zl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Kl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !sc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(a) || "instance")), S1(a, p, u));
            break;
          }
          case ee: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ue:
                    y = a.child.stateNode;
                    break;
                  case ve:
                    y = a.child.stateNode;
                    break;
                }
              S1(a, v, y);
            }
            break;
          }
          case ue: {
            var g = a.stateNode;
            if (t === null && a.flags & Re) {
              var _ = a.type, w = a.memoizedProps;
              dT(g, _, w);
            }
            break;
          }
          case Ee:
            break;
          case Ue:
            break;
          case kt: {
            {
              var N = a.memoizedProps, U = N.onCommit, j = N.onRender, le = a.stateNode.effectDuration, Me = q1(), _e = t === null ? "mount" : "update";
              G1() && (_e = "nested-update"), typeof j == "function" && j(a.memoizedProps.id, _e, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Me);
              {
                typeof U == "function" && U(a.memoizedProps.id, _e, le, Me), I_(a);
                var Rt = a.return;
                e: for (; Rt !== null; ) {
                  switch (Rt.tag) {
                    case ee:
                      var pt = Rt.stateNode;
                      pt.effectDuration += le;
                      break e;
                    case kt:
                      var k = Rt.stateNode;
                      k.effectDuration += le;
                      break e;
                  }
                  Rt = Rt.return;
                }
              }
            }
            break;
          }
          case Ce: {
            n_(e, a);
            break;
          }
          case gt:
          case yn:
          case tn:
          case He:
          case Je:
          case et:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Mr || a.flags & fa && zE(a);
    }
    function qx(e) {
      switch (e.tag) {
        case Ne:
        case je:
        case $e: {
          if (e.mode & Ie)
            try {
              Zl(), LE(e, e.return);
            } finally {
              Kl(e);
            }
          else
            LE(e, e.return);
          break;
        }
        case ve: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Bx(e, e.return, t), ME(e, e.return);
          break;
        }
        case ue: {
          ME(e, e.return);
          break;
        }
      }
    }
    function Xx(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ue) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? RT(u) : wT(i.stateNode, i.memoizedProps);
            } catch (f) {
              un(e, e.return, f);
            }
          }
        } else if (i.tag === Ee) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? TT(s) : xT(s, i.memoizedProps);
            } catch (f) {
              un(e, e.return, f);
            }
        } else if (!((i.tag === He || i.tag === Je) && i.memoizedState !== null && i !== e)) {
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
    function zE(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ue:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Ie)
            try {
              Zl(), u = t(i);
            } finally {
              Kl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ye(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ye(e)), t.current = i;
      }
    }
    function Kx(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function UE(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, UE(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ue) {
          var a = e.stateNode;
          a !== null && rw(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Zx(e) {
      for (var t = e.return; t !== null; ) {
        if (AE(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function AE(e) {
      return e.tag === ue || e.tag === ee || e.tag === Ue;
    }
    function FE(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || AE(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== ue && t.tag !== Ee && t.tag !== Xt; ) {
          if (t.flags & Gt || t.child === null || t.tag === Ue)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Gt))
          return t.stateNode;
      }
    }
    function Jx(e) {
      var t = Zx(e);
      switch (t.tag) {
        case ue: {
          var a = t.stateNode;
          t.flags & za && (HS(a), t.flags &= ~za);
          var i = FE(e);
          D0(e, i, a);
          break;
        }
        case ee:
        case Ue: {
          var u = t.stateNode.containerInfo, s = FE(e);
          b0(e, s, u);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function b0(e, t, a) {
      var i = e.tag, u = i === ue || i === Ee;
      if (u) {
        var s = e.stateNode;
        t ? gT(a, s, t) : mT(a, s);
      } else if (i !== Ue) {
        var f = e.child;
        if (f !== null) {
          b0(f, t, a);
          for (var p = f.sibling; p !== null; )
            b0(p, t, a), p = p.sibling;
        }
      }
    }
    function D0(e, t, a) {
      var i = e.tag, u = i === ue || i === Ee;
      if (u) {
        var s = e.stateNode;
        t ? yT(a, s, t) : hT(a, s);
      } else if (i !== Ue) {
        var f = e.child;
        if (f !== null) {
          D0(f, t, a);
          for (var p = f.sibling; p !== null; )
            D0(p, t, a), p = p.sibling;
        }
      }
    }
    var Nr = null, dl = !1;
    function e_(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case ue: {
              Nr = i.stateNode, dl = !1;
              break e;
            }
            case ee: {
              Nr = i.stateNode.containerInfo, dl = !0;
              break e;
            }
            case Ue: {
              Nr = i.stateNode.containerInfo, dl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Nr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        jE(e, t, a), Nr = null, dl = !1;
      }
      Kx(a);
    }
    function Yo(e, t, a) {
      for (var i = a.child; i !== null; )
        jE(e, t, i), i = i.sibling;
    }
    function jE(e, t, a) {
      switch (dd(a), a.tag) {
        case ue:
          Mr || Nf(a, t);
        // eslint-disable-next-line-no-fallthrough
        case Ee: {
          {
            var i = Nr, u = dl;
            Nr = null, Yo(e, t, a), Nr = i, dl = u, Nr !== null && (dl ? ET(Nr, a.stateNode) : ST(Nr, a.stateNode));
          }
          return;
        }
        case Xt: {
          Nr !== null && (dl ? CT(Nr, a.stateNode) : Hy(Nr, a.stateNode));
          return;
        }
        case Ue: {
          {
            var s = Nr, f = dl;
            Nr = a.stateNode.containerInfo, dl = !0, Yo(e, t, a), Nr = s, dl = f;
          }
          return;
        }
        case Ne:
        case je:
        case ot:
        case $e: {
          if (!Mr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var _ = g, w = _.destroy, N = _.tag;
                  w !== void 0 && ((N & Gl) !== $a ? Em(a, t, w) : (N & rr) !== $a && (oo(a), a.mode & Ie ? (Zl(), Em(a, t, w), Kl(a)) : Em(a, t, w), so())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Yo(e, t, a);
          return;
        }
        case ve: {
          if (!Mr) {
            Nf(a, t);
            var U = a.stateNode;
            typeof U.componentWillUnmount == "function" && _0(a, t, U);
          }
          Yo(e, t, a);
          return;
        }
        case tn: {
          Yo(e, t, a);
          return;
        }
        case He: {
          if (
            // TODO: Remove this dead flag
            a.mode & ke
          ) {
            var j = Mr;
            Mr = j || a.memoizedState !== null, Yo(e, t, a), Mr = j;
          } else
            Yo(e, t, a);
          break;
        }
        default: {
          Yo(e, t, a);
          return;
        }
      }
    }
    function t_(e) {
      e.memoizedState;
    }
    function n_(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && VT(s);
          }
        }
      }
    }
    function HE(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Hx()), t.forEach(function(i) {
          var u = Z_.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), va)
              if (Lf !== null && Mf !== null)
                Yp(Mf, Lf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function r_(e, t, a) {
      Lf = a, Mf = e, vn(t), VE(t, e), vn(t), Lf = null, Mf = null;
    }
    function pl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            e_(e, t, s);
          } catch (v) {
            un(s, t, v);
          }
        }
      var f = rs();
      if (t.subtreeFlags & Qr)
        for (var p = t.child; p !== null; )
          vn(p), VE(p, e), p = p.sibling;
      vn(f);
    }
    function VE(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case Ne:
        case je:
        case ot:
        case $e: {
          if (pl(t, e), Jl(e), u & Re) {
            try {
              fl(Gl | nr, e, e.return), $o(Gl | nr, e);
            } catch (Be) {
              un(e, e.return, Be);
            }
            if (e.mode & Ie) {
              try {
                Zl(), fl(rr | nr, e, e.return);
              } catch (Be) {
                un(e, e.return, Be);
              }
              Kl(e);
            } else
              try {
                fl(rr | nr, e, e.return);
              } catch (Be) {
                un(e, e.return, Be);
              }
          }
          return;
        }
        case ve: {
          pl(t, e), Jl(e), u & fa && i !== null && Nf(i, i.return);
          return;
        }
        case ue: {
          pl(t, e), Jl(e), u & fa && i !== null && Nf(i, i.return);
          {
            if (e.flags & za) {
              var s = e.stateNode;
              try {
                HS(s);
              } catch (Be) {
                un(e, e.return, Be);
              }
            }
            if (u & Re) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    pT(f, g, y, v, p, e);
                  } catch (Be) {
                    un(e, e.return, Be);
                  }
              }
            }
          }
          return;
        }
        case Ee: {
          if (pl(t, e), Jl(e), u & Re) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var _ = e.stateNode, w = e.memoizedProps, N = i !== null ? i.memoizedProps : w;
            try {
              vT(_, N, w);
            } catch (Be) {
              un(e, e.return, Be);
            }
          }
          return;
        }
        case ee: {
          if (pl(t, e), Jl(e), u & Re && i !== null) {
            var U = i.memoizedState;
            if (U.isDehydrated)
              try {
                HT(t.containerInfo);
              } catch (Be) {
                un(e, e.return, Be);
              }
          }
          return;
        }
        case Ue: {
          pl(t, e), Jl(e);
          return;
        }
        case Ce: {
          pl(t, e), Jl(e);
          var j = e.child;
          if (j.flags & Dl) {
            var le = j.stateNode, Me = j.memoizedState, _e = Me !== null;
            if (le.isHidden = _e, _e) {
              var Rt = j.alternate !== null && j.alternate.memoizedState !== null;
              Rt || F_();
            }
          }
          if (u & Re) {
            try {
              t_(e);
            } catch (Be) {
              un(e, e.return, Be);
            }
            HE(e);
          }
          return;
        }
        case He: {
          var pt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & ke
          ) {
            var k = Mr;
            Mr = k || pt, pl(t, e), Mr = k;
          } else
            pl(t, e);
          if (Jl(e), u & Dl) {
            var H = e.stateNode, O = e.memoizedState, q = O !== null, pe = e;
            if (H.isHidden = q, q && !pt && (pe.mode & ke) !== ne) {
              ye = pe;
              for (var oe = pe.child; oe !== null; )
                ye = oe, i_(oe), oe = oe.sibling;
            }
            Xx(pe, q);
          }
          return;
        }
        case gt: {
          pl(t, e), Jl(e), u & Re && HE(e);
          return;
        }
        case tn:
          return;
        default: {
          pl(t, e), Jl(e);
          return;
        }
      }
    }
    function Jl(e) {
      var t = e.flags;
      if (t & Gt) {
        try {
          Jx(e);
        } catch (a) {
          un(e, e.return, a);
        }
        e.flags &= ~Gt;
      }
      t & mi && (e.flags &= ~mi);
    }
    function a_(e, t, a) {
      Lf = a, Mf = t, ye = e, PE(e, t, a), Lf = null, Mf = null;
    }
    function PE(e, t, a) {
      for (var i = (e.mode & ke) !== ne; ye !== null; ) {
        var u = ye, s = u.child;
        if (u.tag === He && i) {
          var f = u.memoizedState !== null, p = f || Sm;
          if (p) {
            k0(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Mr, _ = Sm, w = Mr;
            Sm = p, Mr = g, Mr && !w && (ye = u, l_(u));
            for (var N = s; N !== null; )
              ye = N, PE(
                N,
                // New root; bubble back up to here and stop.
                t,
                a
              ), N = N.sibling;
            ye = u, Sm = _, Mr = w, k0(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & ri) !== Le && s !== null ? (s.return = u, ye = s) : k0(e, t, a);
      }
    }
    function k0(e, t, a) {
      for (; ye !== null; ) {
        var i = ye;
        if ((i.flags & ri) !== Le) {
          var u = i.alternate;
          vn(i);
          try {
            Gx(t, u, i, a);
          } catch (f) {
            un(i, i.return, f);
          }
          nn();
        }
        if (i === e) {
          ye = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, ye = s;
          return;
        }
        ye = i.return;
      }
    }
    function i_(e) {
      for (; ye !== null; ) {
        var t = ye, a = t.child;
        switch (t.tag) {
          case Ne:
          case je:
          case ot:
          case $e: {
            if (t.mode & Ie)
              try {
                Zl(), fl(rr, t, t.return);
              } finally {
                Kl(t);
              }
            else
              fl(rr, t, t.return);
            break;
          }
          case ve: {
            Nf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && _0(t, t.return, i);
            break;
          }
          case ue: {
            Nf(t, t.return);
            break;
          }
          case He: {
            var u = t.memoizedState !== null;
            if (u) {
              BE(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ye = a) : BE(e);
      }
    }
    function BE(e) {
      for (; ye !== null; ) {
        var t = ye;
        if (t === e) {
          ye = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ye = a;
          return;
        }
        ye = t.return;
      }
    }
    function l_(e) {
      for (; ye !== null; ) {
        var t = ye, a = t.child;
        if (t.tag === He) {
          var i = t.memoizedState !== null;
          if (i) {
            $E(e);
            continue;
          }
        }
        a !== null ? (a.return = t, ye = a) : $E(e);
      }
    }
    function $E(e) {
      for (; ye !== null; ) {
        var t = ye;
        vn(t);
        try {
          qx(t);
        } catch (i) {
          un(t, t.return, i);
        }
        if (nn(), t === e) {
          ye = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ye = a;
          return;
        }
        ye = t.return;
      }
    }
    function u_(e, t, a, i) {
      ye = t, o_(t, e, a, i);
    }
    function o_(e, t, a, i) {
      for (; ye !== null; ) {
        var u = ye, s = u.child;
        (u.subtreeFlags & Wr) !== Le && s !== null ? (s.return = u, ye = s) : s_(e, t, a, i);
      }
    }
    function s_(e, t, a, i) {
      for (; ye !== null; ) {
        var u = ye;
        if ((u.flags & Yr) !== Le) {
          vn(u);
          try {
            c_(t, u, a, i);
          } catch (f) {
            un(u, u.return, f);
          }
          nn();
        }
        if (u === e) {
          ye = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, ye = s;
          return;
        }
        ye = u.return;
      }
    }
    function c_(e, t, a, i) {
      switch (t.tag) {
        case Ne:
        case je:
        case $e: {
          if (t.mode & Ie) {
            Gg();
            try {
              $o(Or | nr, t);
            } finally {
              Wg(t);
            }
          } else
            $o(Or | nr, t);
          break;
        }
      }
    }
    function f_(e) {
      ye = e, d_();
    }
    function d_() {
      for (; ye !== null; ) {
        var e = ye, t = e.child;
        if ((ye.flags & Lt) !== Le) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              ye = u, h_(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            ye = e;
          }
        }
        (e.subtreeFlags & Wr) !== Le && t !== null ? (t.return = e, ye = t) : p_();
      }
    }
    function p_() {
      for (; ye !== null; ) {
        var e = ye;
        (e.flags & Yr) !== Le && (vn(e), v_(e), nn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ye = t;
          return;
        }
        ye = e.return;
      }
    }
    function v_(e) {
      switch (e.tag) {
        case Ne:
        case je:
        case $e: {
          e.mode & Ie ? (Gg(), fl(Or | nr, e, e.return), Wg(e)) : fl(Or | nr, e, e.return);
          break;
        }
      }
    }
    function h_(e, t) {
      for (; ye !== null; ) {
        var a = ye;
        vn(a), y_(a, t), nn();
        var i = a.child;
        i !== null ? (i.return = a, ye = i) : m_(e);
      }
    }
    function m_(e) {
      for (; ye !== null; ) {
        var t = ye, a = t.sibling, i = t.return;
        if (UE(t), t === e) {
          ye = null;
          return;
        }
        if (a !== null) {
          a.return = i, ye = a;
          return;
        }
        ye = i;
      }
    }
    function y_(e, t) {
      switch (e.tag) {
        case Ne:
        case je:
        case $e: {
          e.mode & Ie ? (Gg(), fl(Or, e, t), Wg(e)) : fl(Or, e, t);
          break;
        }
      }
    }
    function g_(e) {
      switch (e.tag) {
        case Ne:
        case je:
        case $e: {
          try {
            $o(rr | nr, e);
          } catch (a) {
            un(e, e.return, a);
          }
          break;
        }
        case ve: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            un(e, e.return, a);
          }
          break;
        }
      }
    }
    function S_(e) {
      switch (e.tag) {
        case Ne:
        case je:
        case $e: {
          try {
            $o(Or | nr, e);
          } catch (t) {
            un(e, e.return, t);
          }
          break;
        }
      }
    }
    function E_(e) {
      switch (e.tag) {
        case Ne:
        case je:
        case $e: {
          try {
            fl(rr | nr, e, e.return);
          } catch (a) {
            un(e, e.return, a);
          }
          break;
        }
        case ve: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && _0(e, e.return, t);
          break;
        }
      }
    }
    function C_(e) {
      switch (e.tag) {
        case Ne:
        case je:
        case $e:
          try {
            fl(Or | nr, e, e.return);
          } catch (t) {
            un(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Np = Symbol.for;
      Np("selector.component"), Np("selector.has_pseudo_class"), Np("selector.role"), Np("selector.test_id"), Np("selector.text");
    }
    var R_ = [];
    function T_() {
      R_.forEach(function(e) {
        return e();
      });
    }
    var w_ = ct.ReactCurrentActQueue;
    function x_(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function YE() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && w_.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var __ = Math.ceil, O0 = ct.ReactCurrentDispatcher, L0 = ct.ReactCurrentOwner, zr = ct.ReactCurrentBatchConfig, vl = ct.ReactCurrentActQueue, lr = (
      /*             */
      0
    ), IE = (
      /*               */
      1
    ), Ur = (
      /*                */
      2
    ), Li = (
      /*                */
      4
    ), Pu = 0, zp = 1, cc = 2, Cm = 3, Up = 4, QE = 5, M0 = 6, Ct = lr, Ra = null, kn = null, ur = $, eu = $, N0 = zo($), or = Pu, Ap = null, Rm = $, Fp = $, Tm = $, jp = null, Ya = null, z0 = 0, WE = 500, GE = 1 / 0, b_ = 500, Bu = null;
    function Hp() {
      GE = zn() + b_;
    }
    function qE() {
      return GE;
    }
    var wm = !1, U0 = null, zf = null, fc = !1, Io = null, Vp = $, A0 = [], F0 = null, D_ = 50, Pp = 0, j0 = null, H0 = !1, xm = !1, k_ = 50, Uf = 0, _m = null, Bp = Zt, bm = $, XE = !1;
    function Dm() {
      return Ra;
    }
    function Ta() {
      return (Ct & (Ur | Li)) !== lr ? zn() : (Bp !== Zt || (Bp = zn()), Bp);
    }
    function Qo(e) {
      var t = e.mode;
      if ((t & ke) === ne)
        return we;
      if ((Ct & Ur) !== lr && ur !== $)
        return Co(ur);
      var a = ww() !== Tw;
      if (a) {
        if (zr.transition !== null) {
          var i = zr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return bm === qt && (bm = Rr()), bm;
      }
      var u = wr();
      if (u !== qt)
        return u;
      var s = oT();
      return s;
    }
    function O_(e) {
      var t = e.mode;
      return (t & ke) === ne ? we : Tr();
    }
    function sr(e, t, a, i) {
      eb(), XE && S("useInsertionEffect must not schedule updates."), H0 && (xm = !0), To(e, a, i), (Ct & Ur) !== $ && e === Ra ? rb(t) : (va && Ld(e, t, a), ab(t), e === Ra && ((Ct & Ur) === lr && (Fp = Ze(Fp, a)), or === Up && Wo(e, ur)), Ia(e, i), a === we && Ct === lr && (t.mode & ke) === ne && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !vl.isBatchingLegacy && (Hp(), XS()));
    }
    function L_(e, t, a) {
      var i = e.current;
      i.lanes = t, To(e, t, a), Ia(e, a);
    }
    function M_(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Ct & Ur) !== lr
      );
    }
    function Ia(e, t) {
      var a = e.callbackNode;
      Td(e, t);
      var i = ks(e, e === Ra ? ur : $);
      if (i === $) {
        a !== null && dC(a), e.callbackNode = null, e.callbackPriority = qt;
        return;
      }
      var u = Fl(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(vl.current !== null && a !== Q0)) {
        a == null && s !== we && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && dC(a);
      var f;
      if (u === we)
        e.tag === Uo ? (vl.isBatchingLegacy !== null && (vl.didScheduleLegacyUpdate = !0), lw(JE.bind(null, e))) : qS(JE.bind(null, e)), vl.current !== null ? vl.current.push(Ao) : cT(function() {
          (Ct & (Ur | Li)) === lr && Ao();
        }), f = null;
      else {
        var p;
        switch ($v(i)) {
          case ga:
            p = Ml;
            break;
          case Ri:
            p = lo;
            break;
          case li:
            p = Nl;
            break;
          case Us:
            p = zl;
            break;
          default:
            p = Nl;
            break;
        }
        f = W0(p, KE.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function KE(e, t) {
      if (Xw(), Bp = Zt, bm = $, (Ct & (Ur | Li)) !== lr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Yu();
      if (i && e.callbackNode !== a)
        return null;
      var u = ks(e, e === Ra ? ur : $);
      if (u === $)
        return null;
      var s = !Ls(e, u) && !Pv(e, u) && !t, f = s ? B_(e, u) : Om(e, u);
      if (f !== Pu) {
        if (f === cc) {
          var p = Os(e);
          p !== $ && (u = p, f = V0(e, p));
        }
        if (f === zp) {
          var v = Ap;
          throw dc(e, $), Wo(e, u), Ia(e, zn()), v;
        }
        if (f === M0)
          Wo(e, u);
        else {
          var y = !Ls(e, u), g = e.current.alternate;
          if (y && !z_(g)) {
            if (f = Om(e, u), f === cc) {
              var _ = Os(e);
              _ !== $ && (u = _, f = V0(e, _));
            }
            if (f === zp) {
              var w = Ap;
              throw dc(e, $), Wo(e, u), Ia(e, zn()), w;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, N_(e, f, u);
        }
      }
      return Ia(e, zn()), e.callbackNode === a ? KE.bind(null, e) : null;
    }
    function V0(e, t) {
      var a = jp;
      if (de(e)) {
        var i = dc(e, t);
        i.flags |= Cr, JT(e.containerInfo);
      }
      var u = Om(e, t);
      if (u !== cc) {
        var s = Ya;
        Ya = a, s !== null && ZE(s);
      }
      return u;
    }
    function ZE(e) {
      Ya === null ? Ya = e : Ya.push.apply(Ya, e);
    }
    function N_(e, t, a) {
      switch (t) {
        case Pu:
        case zp:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case cc: {
          pc(e, Ya, Bu);
          break;
        }
        case Cm: {
          if (Wo(e, a), _d(a) && // do not delay if we're inside an act() scope
          !pC()) {
            var i = z0 + WE - zn();
            if (i > 10) {
              var u = ks(e, $);
              if (u !== $)
                break;
              var s = e.suspendedLanes;
              if (!Hl(s, a)) {
                Ta(), Ns(e, s);
                break;
              }
              e.timeoutHandle = Fy(pc.bind(null, e, Ya, Bu), i);
              break;
            }
          }
          pc(e, Ya, Bu);
          break;
        }
        case Up: {
          if (Wo(e, a), Vv(a))
            break;
          if (!pC()) {
            var f = Fv(e, a), p = f, v = zn() - p, y = J_(v) - v;
            if (y > 10) {
              e.timeoutHandle = Fy(pc.bind(null, e, Ya, Bu), y);
              break;
            }
          }
          pc(e, Ya, Bu);
          break;
        }
        case QE: {
          pc(e, Ya, Bu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function z_(e) {
      for (var t = e; ; ) {
        if (t.flags & hu) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!xe(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & hu && v !== null) {
          v.return = t, t = v;
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
    function Wo(e, t) {
      t = Ro(t, Tm), t = Ro(t, Fp), kd(e, t);
    }
    function JE(e) {
      if (Kw(), (Ct & (Ur | Li)) !== lr)
        throw new Error("Should not already be working.");
      Yu();
      var t = ks(e, $);
      if (!Xr(t, we))
        return Ia(e, zn()), null;
      var a = Om(e, t);
      if (e.tag !== Uo && a === cc) {
        var i = Os(e);
        i !== $ && (t = i, a = V0(e, i));
      }
      if (a === zp) {
        var u = Ap;
        throw dc(e, $), Wo(e, t), Ia(e, zn()), u;
      }
      if (a === M0)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, pc(e, Ya, Bu), Ia(e, zn()), null;
    }
    function U_(e, t) {
      t !== $ && (qc(e, Ze(t, we)), Ia(e, zn()), (Ct & (Ur | Li)) === lr && (Hp(), Ao()));
    }
    function P0(e, t) {
      var a = Ct;
      Ct |= IE;
      try {
        return e(t);
      } finally {
        Ct = a, Ct === lr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !vl.isBatchingLegacy && (Hp(), XS());
      }
    }
    function A_(e, t, a, i, u) {
      var s = wr(), f = zr.transition;
      try {
        return zr.transition = null, _t(ga), e(t, a, i, u);
      } finally {
        _t(s), zr.transition = f, Ct === lr && Hp();
      }
    }
    function $u(e) {
      Io !== null && Io.tag === Uo && (Ct & (Ur | Li)) === lr && Yu();
      var t = Ct;
      Ct |= IE;
      var a = zr.transition, i = wr();
      try {
        return zr.transition = null, _t(ga), e ? e() : void 0;
      } finally {
        _t(i), zr.transition = a, Ct = t, (Ct & (Ur | Li)) === lr && Ao();
      }
    }
    function eC() {
      return (Ct & (Ur | Li)) !== lr;
    }
    function km(e, t) {
      Zr(N0, eu, e), eu = Ze(eu, t);
    }
    function B0(e) {
      eu = N0.current, Kr(N0, e);
    }
    function dc(e, t) {
      e.finishedWork = null, e.finishedLanes = $;
      var a = e.timeoutHandle;
      if (a !== jy && (e.timeoutHandle = jy, sT(a)), kn !== null)
        for (var i = kn.return; i !== null; ) {
          var u = i.alternate;
          kE(u, i), i = i.return;
        }
      Ra = e;
      var s = vc(e.current, null);
      return kn = s, ur = eu = t, or = Pu, Ap = null, Rm = $, Fp = $, Tm = $, jp = null, Ya = null, Lw(), ll.discardPendingWarnings(), s;
    }
    function tC(e, t) {
      do {
        var a = kn;
        try {
          if (Hh(), x1(), nn(), L0.current = null, a === null || a.return === null) {
            or = zp, Ap = t, kn = null;
            return;
          }
          if (vt && a.mode & Ie && vm(a, !0), nt)
            if (ma(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              hd(a, i, ur);
            } else
              Su(a, t, ur);
          lx(e, a.return, a, t, ur), iC(a);
        } catch (u) {
          t = u, kn === a && a !== null ? (a = a.return, kn = a) : a = kn;
          continue;
        }
        return;
      } while (!0);
    }
    function nC() {
      var e = O0.current;
      return O0.current = sm, e === null ? sm : e;
    }
    function rC(e) {
      O0.current = e;
    }
    function F_() {
      z0 = zn();
    }
    function $p(e) {
      Rm = Ze(e, Rm);
    }
    function j_() {
      or === Pu && (or = Cm);
    }
    function $0() {
      (or === Pu || or === Cm || or === cc) && (or = Up), Ra !== null && (xd(Rm) || xd(Fp)) && Wo(Ra, ur);
    }
    function H_(e) {
      or !== Up && (or = cc), jp === null ? jp = [e] : jp.push(e);
    }
    function V_() {
      return or === Pu;
    }
    function Om(e, t) {
      var a = Ct;
      Ct |= Ur;
      var i = nC();
      if (Ra !== e || ur !== t) {
        if (va) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Yp(e, ur), u.clear()), zs(e, t);
        }
        Bu = Ci(), dc(e, t);
      }
      ws(t);
      do
        try {
          P_();
          break;
        } catch (s) {
          tC(e, s);
        }
      while (!0);
      if (Hh(), Ct = a, rC(i), kn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return zc(), Ra = null, ur = $, or;
    }
    function P_() {
      for (; kn !== null; )
        aC(kn);
    }
    function B_(e, t) {
      var a = Ct;
      Ct |= Ur;
      var i = nC();
      if (Ra !== e || ur !== t) {
        if (va) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Yp(e, ur), u.clear()), zs(e, t);
        }
        Bu = Ci(), Hp(), dc(e, t);
      }
      ws(t);
      do
        try {
          $_();
          break;
        } catch (s) {
          tC(e, s);
        }
      while (!0);
      return Hh(), rC(i), Ct = a, kn !== null ? (yd(), Pu) : (zc(), Ra = null, ur = $, or);
    }
    function $_() {
      for (; kn !== null && !Ov(); )
        aC(kn);
    }
    function aC(e) {
      var t = e.alternate;
      vn(e);
      var a;
      (e.mode & Ie) !== ne ? (Qg(e), a = Y0(t, e, eu), vm(e, !0)) : a = Y0(t, e, eu), nn(), e.memoizedProps = e.pendingProps, a === null ? iC(e) : kn = a, L0.current = null;
    }
    function iC(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & kl) === Le) {
          vn(t);
          var u = void 0;
          if ((t.mode & Ie) === ne ? u = DE(a, t, eu) : (Qg(t), u = DE(a, t, eu), vm(t, !1)), nn(), u !== null) {
            kn = u;
            return;
          }
        } else {
          var s = jx(a, t);
          if (s !== null) {
            s.flags &= qi, kn = s;
            return;
          }
          if ((t.mode & Ie) !== ne) {
            vm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= kl, i.subtreeFlags = Le, i.deletions = null;
          else {
            or = M0, kn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          kn = v;
          return;
        }
        t = i, kn = t;
      } while (t !== null);
      or === Pu && (or = QE);
    }
    function pc(e, t, a) {
      var i = wr(), u = zr.transition;
      try {
        zr.transition = null, _t(ga), Y_(e, t, a, i);
      } finally {
        zr.transition = u, _t(i);
      }
      return null;
    }
    function Y_(e, t, a, i) {
      do
        Yu();
      while (Io !== null);
      if (tb(), (Ct & (Ur | Li)) !== lr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (pd(s), u === null)
        return vd(), null;
      if (s === $ && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = $, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = qt;
      var f = Ze(u.lanes, u.childLanes);
      ly(e, f), e === Ra && (Ra = null, kn = null, ur = $), ((u.subtreeFlags & Wr) !== Le || (u.flags & Wr) !== Le) && (fc || (fc = !0, F0 = a, W0(Nl, function() {
        return Yu(), null;
      })));
      var p = (u.subtreeFlags & (Ir | Qr | ri | Wr)) !== Le, v = (u.flags & (Ir | Qr | ri | Wr)) !== Le;
      if (p || v) {
        var y = zr.transition;
        zr.transition = null;
        var g = wr();
        _t(ga);
        var _ = Ct;
        Ct |= Li, L0.current = null, $x(e, u), X1(), r_(e, u, s), nT(e.containerInfo), e.current = u, co(s), a_(u, e, s), Uv(), io(), Ct = _, _t(g), zr.transition = y;
      } else
        e.current = u, X1();
      var w = fc;
      if (fc ? (fc = !1, Io = e, Vp = s) : (Uf = 0, _m = null), f = e.pendingLanes, f === $ && (zf = null), w || sC(e.current, !1), Ha(u.stateNode, i), va && e.memoizedUpdaters.clear(), T_(), Ia(e, zn()), t !== null)
        for (var N = e.onRecoverableError, U = 0; U < t.length; U++) {
          var j = t[U], le = j.stack, Me = j.digest;
          N(j.value, {
            componentStack: le,
            digest: Me
          });
        }
      if (wm) {
        wm = !1;
        var _e = U0;
        throw U0 = null, _e;
      }
      return Xr(Vp, we) && e.tag !== Uo && Yu(), f = e.pendingLanes, Xr(f, we) ? (qw(), e === j0 ? Pp++ : (Pp = 0, j0 = e)) : Pp = 0, Ao(), vd(), null;
    }
    function Yu() {
      if (Io !== null) {
        var e = $v(Vp), t = Xc(li, e), a = zr.transition, i = wr();
        try {
          return zr.transition = null, _t(t), Q_();
        } finally {
          _t(i), zr.transition = a;
        }
      }
      return !1;
    }
    function I_(e) {
      A0.push(e), fc || (fc = !0, W0(Nl, function() {
        return Yu(), null;
      }));
    }
    function Q_() {
      if (Io === null)
        return !1;
      var e = F0;
      F0 = null;
      var t = Io, a = Vp;
      if (Io = null, Vp = $, (Ct & (Ur | Li)) !== lr)
        throw new Error("Cannot flush passive effects while already rendering.");
      H0 = !0, xm = !1, md(a);
      var i = Ct;
      Ct |= Li, f_(t.current), u_(t, t.current, a, e);
      {
        var u = A0;
        A0 = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Wx(t, f);
        }
      }
      hn(), sC(t.current, !0), Ct = i, Ao(), xm ? t === _m ? Uf++ : (Uf = 0, _m = t) : Uf = 0, H0 = !1, xm = !1, gu(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function lC(e) {
      return zf !== null && zf.has(e);
    }
    function W_(e) {
      zf === null ? zf = /* @__PURE__ */ new Set([e]) : zf.add(e);
    }
    function G_(e) {
      wm || (wm = !0, U0 = e);
    }
    var q_ = G_;
    function uC(e, t, a) {
      var i = oc(a, t), u = aE(e, i, we), s = jo(e, u, we), f = Ta();
      s !== null && (To(s, we, f), Ia(s, f));
    }
    function un(e, t, a) {
      if (Vx(a), Ip(!1), e.tag === ee) {
        uC(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === ee) {
          uC(i, e, a);
          return;
        } else if (i.tag === ve) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !lC(s)) {
            var f = oc(a, e), p = c0(i, f, we), v = jo(i, p, we), y = Ta();
            v !== null && (To(v, we, y), Ia(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function X_(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ta();
      Ns(e, a), ib(e), Ra === e && Hl(ur, a) && (or === Up || or === Cm && _d(ur) && zn() - z0 < WE ? dc(e, $) : Tm = Ze(Tm, a)), Ia(e, u);
    }
    function oC(e, t) {
      t === qt && (t = O_(e));
      var a = Ta(), i = Ba(e, t);
      i !== null && (To(i, t, a), Ia(i, a));
    }
    function K_(e) {
      var t = e.memoizedState, a = qt;
      t !== null && (a = t.retryLane), oC(e, a);
    }
    function Z_(e, t) {
      var a = qt, i;
      switch (e.tag) {
        case Ce:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case gt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), oC(e, a);
    }
    function J_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : __(e / 1960) * 1960;
    }
    function eb() {
      if (Pp > D_)
        throw Pp = 0, j0 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Uf > k_ && (Uf = 0, _m = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function tb() {
      ll.flushLegacyContextWarning(), ll.flushPendingUnsafeLifecycleWarnings();
    }
    function sC(e, t) {
      vn(e), Lm(e, Aa, E_), t && Lm(e, mu, C_), Lm(e, Aa, g_), t && Lm(e, mu, S_), nn();
    }
    function Lm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Le ? i = i.child : ((i.flags & t) !== Le && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Mm = null;
    function cC(e) {
      {
        if ((Ct & Ur) !== lr || !(e.mode & ke))
          return;
        var t = e.tag;
        if (t !== Qe && t !== ee && t !== ve && t !== Ne && t !== je && t !== ot && t !== $e)
          return;
        var a = Ye(e) || "ReactComponent";
        if (Mm !== null) {
          if (Mm.has(a))
            return;
          Mm.add(a);
        } else
          Mm = /* @__PURE__ */ new Set([a]);
        var i = pn;
        try {
          vn(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? vn(e) : nn();
        }
      }
    }
    var Y0;
    {
      var nb = null;
      Y0 = function(e, t, a) {
        var i = gC(nb, t);
        try {
          return TE(e, t, a);
        } catch (s) {
          if (vw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Hh(), x1(), kE(e, t), gC(t, i), t.mode & Ie && Qg(t), ti(null, TE, null, e, t, a), ty()) {
            var u = Gi();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var fC = !1, I0;
    I0 = /* @__PURE__ */ new Set();
    function rb(e) {
      if (Pr && !Qw())
        switch (e.tag) {
          case Ne:
          case je:
          case $e: {
            var t = kn && Ye(kn) || "Unknown", a = t;
            if (!I0.has(a)) {
              I0.add(a);
              var i = Ye(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case ve: {
            fC || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), fC = !0);
            break;
          }
        }
    }
    function Yp(e, t) {
      if (va) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Ld(e, i, t);
        });
      }
    }
    var Q0 = {};
    function W0(e, t) {
      {
        var a = vl.current;
        return a !== null ? (a.push(t), Q0) : cd(e, t);
      }
    }
    function dC(e) {
      if (e !== Q0)
        return Oc(e);
    }
    function pC() {
      return vl.current !== null;
    }
    function ab(e) {
      {
        if (e.mode & ke) {
          if (!YE())
            return;
        } else if (!x_() || Ct !== lr || e.tag !== Ne && e.tag !== je && e.tag !== $e)
          return;
        if (vl.current === null) {
          var t = pn;
          try {
            vn(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ye(e));
          } finally {
            t ? vn(e) : nn();
          }
        }
      }
    }
    function ib(e) {
      e.tag !== Uo && YE() && vl.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Ip(e) {
      XE = e;
    }
    var Mi = null, Af = null, lb = function(e) {
      Mi = e;
    };
    function Ff(e) {
      {
        if (Mi === null)
          return e;
        var t = Mi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function G0(e) {
      return Ff(e);
    }
    function q0(e) {
      {
        if (Mi === null)
          return e;
        var t = Mi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Ff(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: W,
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
    function vC(e, t) {
      {
        if (Mi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case ve: {
            typeof i == "function" && (u = !0);
            break;
          }
          case Ne: {
            (typeof i == "function" || s === ze) && (u = !0);
            break;
          }
          case je: {
            (s === W || s === ze) && (u = !0);
            break;
          }
          case ot:
          case $e: {
            (s === Et || s === ze) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Mi(a);
          if (f !== void 0 && f === Mi(i))
            return !0;
        }
        return !1;
      }
    }
    function hC(e) {
      {
        if (Mi === null || typeof WeakSet != "function")
          return;
        Af === null && (Af = /* @__PURE__ */ new WeakSet()), Af.add(e);
      }
    }
    var ub = function(e, t) {
      {
        if (Mi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Yu(), $u(function() {
          X0(e.current, i, a);
        });
      }
    }, ob = function(e, t) {
      {
        if (e.context !== oi)
          return;
        Yu(), $u(function() {
          Qp(t, e, null, null);
        });
      }
    };
    function X0(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case Ne:
          case $e:
          case ve:
            v = p;
            break;
          case je:
            v = p.render;
            break;
        }
        if (Mi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var _ = Mi(v);
          _ !== void 0 && (a.has(_) ? g = !0 : t.has(_) && (f === ve ? g = !0 : y = !0));
        }
        if (Af !== null && (Af.has(e) || i !== null && Af.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var w = Ba(e, we);
          w !== null && sr(w, e, we, Zt);
        }
        u !== null && !g && X0(u, t, a), s !== null && X0(s, t, a);
      }
    }
    var sb = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return K0(e.current, i, a), a;
      }
    };
    function K0(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case Ne:
          case $e:
          case ve:
            p = f;
            break;
          case je:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? cb(e, a) : i !== null && K0(i, t, a), u !== null && K0(u, t, a);
      }
    }
    function cb(e, t) {
      {
        var a = fb(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ue:
              t.add(i.stateNode);
              return;
            case Ue:
              t.add(i.stateNode.containerInfo);
              return;
            case ee:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function fb(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ue)
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
    var Z0;
    {
      Z0 = !1;
      try {
        var mC = Object.preventExtensions({});
      } catch {
        Z0 = !0;
      }
    }
    function db(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Le, this.subtreeFlags = Le, this.deletions = null, this.lanes = $, this.childLanes = $, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !Z0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var si = function(e, t, a, i) {
      return new db(e, t, a, i);
    };
    function J0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function pb(e) {
      return typeof e == "function" && !J0(e) && e.defaultProps === void 0;
    }
    function vb(e) {
      if (typeof e == "function")
        return J0(e) ? ve : Ne;
      if (e != null) {
        var t = e.$$typeof;
        if (t === W)
          return je;
        if (t === Et)
          return ot;
      }
      return Qe;
    }
    function vc(e, t) {
      var a = e.alternate;
      a === null ? (a = si(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Le, a.subtreeFlags = Le, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & er, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Qe:
        case Ne:
        case $e:
          a.type = Ff(e.type);
          break;
        case ve:
          a.type = G0(e.type);
          break;
        case je:
          a.type = q0(e.type);
          break;
      }
      return a;
    }
    function hb(e, t) {
      e.flags &= er | Gt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = $, e.lanes = t, e.child = null, e.subtreeFlags = Le, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Le, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function mb(e, t, a) {
      var i;
      return e === kh ? (i = ke, t === !0 && (i |= ln, i |= Gr)) : i = ne, va && (i |= Ie), si(ee, null, null, i);
    }
    function eS(e, t, a, i, u, s) {
      var f = Qe, p = e;
      if (typeof e == "function")
        J0(e) ? (f = ve, p = G0(p)) : p = Ff(p);
      else if (typeof e == "string")
        f = ue;
      else
        e: switch (e) {
          case oa:
            return Go(a.children, u, s, t);
          case zi:
            f = Fn, u |= ln, (u & ke) !== ne && (u |= Gr);
            break;
          case yl:
            return yb(a, u, s, t);
          case Oe:
            return gb(a, u, s, t);
          case st:
            return Sb(a, u, s, t);
          case Qt:
            return yC(a, u, s, t);
          case cn:
          // eslint-disable-next-line no-fallthrough
          case at:
          // eslint-disable-next-line no-fallthrough
          case vr:
          // eslint-disable-next-line no-fallthrough
          case At:
          // eslint-disable-next-line no-fallthrough
          case Ln:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case R:
                  f = tt;
                  break e;
                case I:
                  f = on;
                  break e;
                case W:
                  f = je, p = q0(p);
                  break e;
                case Et:
                  f = ot;
                  break e;
                case ze:
                  f = wn, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Ye(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = si(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function tS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = eS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Go(e, t, a, i) {
      var u = si(dt, e, i, t);
      return u.lanes = a, u;
    }
    function yb(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = si(kt, e, i, t | Ie);
      return u.elementType = yl, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function gb(e, t, a, i) {
      var u = si(Ce, e, i, t);
      return u.elementType = Oe, u.lanes = a, u;
    }
    function Sb(e, t, a, i) {
      var u = si(gt, e, i, t);
      return u.elementType = st, u.lanes = a, u;
    }
    function yC(e, t, a, i) {
      var u = si(He, e, i, t);
      u.elementType = Qt, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function nS(e, t, a) {
      var i = si(Ee, e, null, t);
      return i.lanes = a, i;
    }
    function Eb() {
      var e = si(ue, null, null, ne);
      return e.elementType = "DELETED", e;
    }
    function Cb(e) {
      var t = si(Xt, null, null, ne);
      return t.stateNode = e, t;
    }
    function rS(e, t, a) {
      var i = e.children !== null ? e.children : [], u = si(Ue, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function gC(e, t) {
      return e === null && (e = si(Qe, null, null, ne)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Rb(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = jy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = qt, this.eventTimes = Ms($), this.expirationTimes = Ms(Zt), this.pendingLanes = $, this.suspendedLanes = $, this.pingedLanes = $, this.expiredLanes = $, this.mutableReadLanes = $, this.finishedLanes = $, this.entangledLanes = $, this.entanglements = Ms($), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < xs; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case kh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Uo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function SC(e, t, a, i, u, s, f, p, v, y) {
      var g = new Rb(e, t, a, p, v), _ = mb(t, s);
      g.current = _, _.stateNode = g;
      {
        var w = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        _.memoizedState = w;
      }
      return mg(_), g;
    }
    var aS = "18.3.1";
    function Tb(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return fr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: jr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var iS, lS;
    iS = !1, lS = {};
    function EC(e) {
      if (!e)
        return oi;
      var t = hi(e), a = iw(t);
      if (t.tag === ve) {
        var i = t.type;
        if (Wl(i))
          return WS(t, i, a);
      }
      return a;
    }
    function wb(e, t) {
      {
        var a = hi(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = ud(a);
        if (u === null)
          return null;
        if (u.mode & ln) {
          var s = Ye(a) || "Component";
          if (!lS[s]) {
            lS[s] = !0;
            var f = pn;
            try {
              vn(u), a.mode & ln ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? vn(f) : nn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function CC(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return SC(e, t, v, y, a, i, u, s, f);
    }
    function RC(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, _ = SC(a, i, g, e, u, s, f, p, v);
      _.context = EC(null);
      var w = _.current, N = Ta(), U = Qo(w), j = Hu(N, U);
      return j.callback = t ?? null, jo(w, j, U), L_(_, U, N), _;
    }
    function Qp(e, t, a, i) {
      uo(t, e);
      var u = t.current, s = Ta(), f = Qo(u);
      Uc(f);
      var p = EC(a);
      t.context === null ? t.context = p : t.pendingContext = p, Pr && pn !== null && !iS && (iS = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ye(pn) || "Unknown"));
      var v = Hu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = jo(u, v, f);
      return y !== null && (sr(y, u, f, s), Yh(y, u, f)), f;
    }
    function Nm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ue:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function xb(e) {
      switch (e.tag) {
        case ee: {
          var t = e.stateNode;
          if (de(t)) {
            var a = Eo(t);
            U_(t, a);
          }
          break;
        }
        case Ce: {
          $u(function() {
            var u = Ba(e, we);
            if (u !== null) {
              var s = Ta();
              sr(u, e, we, s);
            }
          });
          var i = we;
          uS(e, i);
          break;
        }
      }
    }
    function TC(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Dd(a.retryLane, t));
    }
    function uS(e, t) {
      TC(e, t);
      var a = e.alternate;
      a && TC(a, t);
    }
    function _b(e) {
      if (e.tag === Ce) {
        var t = yo, a = Ba(e, t);
        if (a !== null) {
          var i = Ta();
          sr(a, e, t, i);
        }
        uS(e, t);
      }
    }
    function bb(e) {
      if (e.tag === Ce) {
        var t = Qo(e), a = Ba(e, t);
        if (a !== null) {
          var i = Ta();
          sr(a, e, t, i);
        }
        uS(e, t);
      }
    }
    function wC(e) {
      var t = sd(e);
      return t === null ? null : t.stateNode;
    }
    var xC = function(e) {
      return null;
    };
    function Db(e) {
      return xC(e);
    }
    var _C = function(e) {
      return !1;
    };
    function kb(e) {
      return _C(e);
    }
    var bC = null, DC = null, kC = null, OC = null, LC = null, MC = null, NC = null, zC = null, UC = null;
    {
      var AC = function(e, t, a) {
        var i = t[a], u = wt(e) ? e.slice() : Ke({}, e);
        return a + 1 === t.length ? (wt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = AC(e[i], t, a + 1), u);
      }, FC = function(e, t) {
        return AC(e, t, 0);
      }, jC = function(e, t, a, i) {
        var u = t[i], s = wt(e) ? e.slice() : Ke({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], wt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = jC(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, HC = function(e, t, a) {
        if (t.length !== a.length) {
          lt("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              lt("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return jC(e, t, a, 0);
      }, VC = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = wt(e) ? e.slice() : Ke({}, e);
        return s[u] = VC(e[u], t, a + 1, i), s;
      }, PC = function(e, t, a) {
        return VC(e, t, 0, a);
      }, oS = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      bC = function(e, t, a, i) {
        var u = oS(e, t);
        if (u !== null) {
          var s = PC(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ke({}, e.memoizedProps);
          var f = Ba(e, we);
          f !== null && sr(f, e, we, Zt);
        }
      }, DC = function(e, t, a) {
        var i = oS(e, t);
        if (i !== null) {
          var u = FC(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Ke({}, e.memoizedProps);
          var s = Ba(e, we);
          s !== null && sr(s, e, we, Zt);
        }
      }, kC = function(e, t, a, i) {
        var u = oS(e, t);
        if (u !== null) {
          var s = HC(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ke({}, e.memoizedProps);
          var f = Ba(e, we);
          f !== null && sr(f, e, we, Zt);
        }
      }, OC = function(e, t, a) {
        e.pendingProps = PC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, we);
        i !== null && sr(i, e, we, Zt);
      }, LC = function(e, t) {
        e.pendingProps = FC(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ba(e, we);
        a !== null && sr(a, e, we, Zt);
      }, MC = function(e, t, a) {
        e.pendingProps = HC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, we);
        i !== null && sr(i, e, we, Zt);
      }, NC = function(e) {
        var t = Ba(e, we);
        t !== null && sr(t, e, we, Zt);
      }, zC = function(e) {
        xC = e;
      }, UC = function(e) {
        _C = e;
      };
    }
    function Ob(e) {
      var t = ud(e);
      return t === null ? null : t.stateNode;
    }
    function Lb(e) {
      return null;
    }
    function Mb() {
      return pn;
    }
    function Nb(e) {
      var t = e.findFiberByHostInstance, a = ct.ReactCurrentDispatcher;
      return fd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: bC,
        overrideHookStateDeletePath: DC,
        overrideHookStateRenamePath: kC,
        overrideProps: OC,
        overridePropsDeletePath: LC,
        overridePropsRenamePath: MC,
        setErrorHandler: zC,
        setSuspenseHandler: UC,
        scheduleUpdate: NC,
        currentDispatcherRef: a,
        findHostInstanceByFiber: Ob,
        findFiberByHostInstance: t || Lb,
        // React Refresh
        findHostInstancesForRefresh: sb,
        scheduleRefresh: ub,
        scheduleRoot: ob,
        setRefreshHandler: lb,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: Mb,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: aS
      });
    }
    var BC = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function sS(e) {
      this._internalRoot = e;
    }
    zm.prototype.render = sS.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Um(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Sn) {
          var i = wC(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Qp(e, t, null, null);
    }, zm.prototype.unmount = sS.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        eC() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), $u(function() {
          Qp(null, e, null, null);
        }), BS(t);
      }
    };
    function zb(e, t) {
      if (!Um(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      $C(e);
      var a = !1, i = !1, u = "", s = BC;
      t != null && (t.hydrate ? lt("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Sr && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = CC(e, kh, null, a, i, u, s);
      Rh(f.current, e);
      var p = e.nodeType === Sn ? e.parentNode : e;
      return Zd(p), new sS(f);
    }
    function zm(e) {
      this._internalRoot = e;
    }
    function Ub(e) {
      e && Kc(e);
    }
    zm.prototype.unstable_scheduleHydration = Ub;
    function Ab(e, t, a) {
      if (!Um(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      $C(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = BC;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = RC(t, null, e, kh, i, s, f, p, v);
      if (Rh(y.current, e), Zd(e), u)
        for (var g = 0; g < u.length; g++) {
          var _ = u[g];
          Vw(y, _);
        }
      return new zm(y);
    }
    function Um(e) {
      return !!(e && (e.nodeType === $r || e.nodeType === sa || e.nodeType === Yf || !De));
    }
    function Wp(e) {
      return !!(e && (e.nodeType === $r || e.nodeType === sa || e.nodeType === Yf || e.nodeType === Sn && e.nodeValue === " react-mount-point-unstable "));
    }
    function $C(e) {
      e.nodeType === $r && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), sp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Fb = ct.ReactCurrentOwner, YC;
    YC = function(e) {
      if (e._reactRootContainer && e.nodeType !== Sn) {
        var t = wC(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = cS(e), u = !!(i && No(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === $r && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function cS(e) {
      return e ? e.nodeType === sa ? e.documentElement : e.firstChild : null;
    }
    function IC() {
    }
    function jb(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var w = Nm(f);
            s.call(w);
          };
        }
        var f = RC(
          t,
          i,
          e,
          Uo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          IC
        );
        e._reactRootContainer = f, Rh(f.current, e);
        var p = e.nodeType === Sn ? e.parentNode : e;
        return Zd(p), $u(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var w = Nm(g);
            y.call(w);
          };
        }
        var g = CC(
          e,
          Uo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          IC
        );
        e._reactRootContainer = g, Rh(g.current, e);
        var _ = e.nodeType === Sn ? e.parentNode : e;
        return Zd(_), $u(function() {
          Qp(t, g, a, i);
        }), g;
      }
    }
    function Hb(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Am(e, t, a, i, u) {
      YC(a), Hb(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = jb(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Nm(f);
            p.call(v);
          };
        }
        Qp(t, f, e, u);
      }
      return Nm(f);
    }
    var QC = !1;
    function Vb(e) {
      {
        QC || (QC = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = Fb.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", mt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === $r ? e : wb(e, "findDOMNode");
    }
    function Pb(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Wp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = sp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Am(null, e, t, !0, a);
    }
    function Bb(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Wp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = sp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Am(null, e, t, !1, a);
    }
    function $b(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Wp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !ao(e))
        throw new Error("parentComponent must be a valid React Component");
      return Am(e, t, a, !1, i);
    }
    var WC = !1;
    function Yb(e) {
      if (WC || (WC = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Wp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = sp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = cS(e), i = a && !No(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return $u(function() {
          Am(null, null, e, !1, function() {
            e._reactRootContainer = null, BS(e);
          });
        }), !0;
      } else {
        {
          var u = cS(e), s = !!(u && No(u)), f = e.nodeType === $r && Wp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Md(xb), As(_b), zd(bb), Iv(wr), Fd(uy), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Zf(QR), wc(P0, A_, $u);
    function Ib(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Um(t))
        throw new Error("Target container is not a DOM element.");
      return Tb(e, t, null, a);
    }
    function Qb(e, t, a, i) {
      return $b(e, t, a, i);
    }
    var fS = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [No, vf, Th, ro, pu, P0]
    };
    function Wb(e, t) {
      return fS.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), zb(e, t);
    }
    function Gb(e, t, a) {
      return fS.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Ab(e, t, a);
    }
    function qb(e) {
      return eC() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), $u(e);
    }
    var Xb = Nb({
      findFiberByHostInstance: Js,
      bundleType: 1,
      version: aS,
      rendererPackageName: "react-dom"
    });
    if (!Xb && gn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var GC = window.location.protocol;
      /^(https?|file):$/.test(GC) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (GC === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fS, Wa.createPortal = Ib, Wa.createRoot = Wb, Wa.findDOMNode = Vb, Wa.flushSync = qb, Wa.hydrate = Pb, Wa.hydrateRoot = Gb, Wa.render = Bb, Wa.unmountComponentAtNode = Yb, Wa.unstable_batchedUpdates = P0, Wa.unstable_renderSubtreeIntoContainer = Qb, Wa.version = aS, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Wa;
}
var lR;
function oD() {
  if (lR) return Hm.exports;
  lR = 1;
  var Z = {};
  function ae() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (Z.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ae);
      } catch (A) {
        console.error(A);
      }
    }
  }
  return Z.NODE_ENV === "production" ? (ae(), Hm.exports = lD()) : Hm.exports = uD(), Hm.exports;
}
var uR;
function sD() {
  if (uR) return Hf;
  uR = 1;
  var Z = {}, ae = oD();
  if (Z.NODE_ENV === "production")
    Hf.createRoot = ae.createRoot, Hf.hydrateRoot = ae.hydrateRoot;
  else {
    var A = ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    Hf.createRoot = function(ct, xt) {
      A.usingClientEntryPoint = !0;
      try {
        return ae.createRoot(ct, xt);
      } finally {
        A.usingClientEntryPoint = !1;
      }
    }, Hf.hydrateRoot = function(ct, xt, en) {
      A.usingClientEntryPoint = !0;
      try {
        return ae.hydrateRoot(ct, xt, en);
      } finally {
        A.usingClientEntryPoint = !1;
      }
    };
  }
  return Hf;
}
var cD = sD();
const fD = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='35.93'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20228'%3e%3cpath%20fill='%2300D8FF'%20d='M210.483%2073.824a171.49%20171.49%200%200%200-8.24-2.597c.465-1.9.893-3.777%201.273-5.621c6.238-30.281%202.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254%2019.526a171.23%20171.23%200%200%200-6.375%205.848a155.866%20155.866%200%200%200-4.241-3.917C100.759%203.829%2077.587-4.822%2063.673%203.233C50.33%2010.957%2046.379%2033.89%2051.995%2062.588a170.974%20170.974%200%200%200%201.892%208.48c-3.28.932-6.445%201.924-9.474%202.98C17.309%2083.498%200%2098.307%200%20113.668c0%2015.865%2018.582%2031.778%2046.812%2041.427a145.52%20145.52%200%200%200%206.921%202.165a167.467%20167.467%200%200%200-2.01%209.138c-5.354%2028.2-1.173%2050.591%2012.134%2058.266c13.744%207.926%2036.812-.22%2059.273-19.855a145.567%20145.567%200%200%200%205.342-4.923a168.064%20168.064%200%200%200%206.92%206.314c21.758%2018.722%2043.246%2026.282%2056.54%2018.586c13.731-7.949%2018.194-32.003%2012.4-61.268a145.016%20145.016%200%200%200-1.535-6.842c1.62-.48%203.21-.974%204.76-1.488c29.348-9.723%2048.443-25.443%2048.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365%2070.984c-1.4.463-2.836.91-4.3%201.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11%209.31-21.767%2012.459-31.957c2.619.758%205.16%201.557%207.61%202.4c23.69%208.156%2038.14%2020.213%2038.14%2029.504c0%209.896-15.606%2022.743-40.946%2031.14Zm-10.514%2020.834c2.562%2012.94%202.927%2024.64%201.23%2033.787c-1.524%208.219-4.59%2013.698-8.382%2015.893c-8.067%204.67-25.32-1.4-43.927-17.412a156.726%20156.726%200%200%201-6.437-5.87c7.214-7.889%2014.423-17.06%2021.459-27.246c12.376-1.098%2024.068-2.894%2034.671-5.345a134.17%20134.17%200%200%201%201.386%206.193ZM87.276%20214.515c-7.882%202.783-14.16%202.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923%20156.923%200%200%201%201.869-8.499c10.486%202.32%2022.093%203.988%2034.498%204.994c7.084%209.967%2014.501%2019.128%2021.976%2027.15a134.668%20134.668%200%200%201-4.877%204.492c-9.933%208.682-19.886%2014.842-28.658%2017.94ZM50.35%20144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322%2013.897-21.212%2037.076-29.293c2.813-.98%205.757-1.905%208.812-2.773c3.204%2010.42%207.406%2021.315%2012.477%2032.332c-5.137%2011.18-9.399%2022.249-12.634%2032.792a134.718%20134.718%200%200%201-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134%206.425-47.789c8.564-4.958%2027.502%202.111%2047.463%2019.835a144.318%20144.318%200%200%201%203.841%203.545c-7.438%207.987-14.787%2017.08-21.808%2026.988c-12.04%201.116-23.565%202.908-34.161%205.309a160.342%20160.342%200%200%201-1.76-7.887Zm110.427%2027.268a347.8%20347.8%200%200%200-7.785-12.803c8.168%201.033%2015.994%202.404%2023.343%204.08c-2.206%207.072-4.956%2014.465-8.193%2022.045a381.151%20381.151%200%200%200-7.365-13.322Zm-45.032-43.861c5.044%205.465%2010.096%2011.566%2015.065%2018.186a322.04%20322.04%200%200%200-30.257-.006c4.974-6.559%2010.069-12.652%2015.192-18.18ZM82.802%2087.83a323.167%20323.167%200%200%200-7.227%2013.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634%2015.093-2.97%2023.209-3.984a321.524%20321.524%200%200%200-7.848%2012.897Zm8.081%2065.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3%205.045-14.885%208.298-22.6a321.187%20321.187%200%200%200%207.257%2013.246c2.594%204.48%205.28%208.868%208.038%2013.147Zm37.542%2031.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192%209.899.29%2014.978.29c5.218%200%2010.376-.117%2015.453-.343c-4.985%206.774-10.018%2012.97-15.028%2018.486Zm52.198-57.817c3.422%207.8%206.306%2015.345%208.596%2022.52c-7.422%201.694-15.436%203.058-23.88%204.071a382.417%20382.417%200%200%200%207.859-13.026a347.403%20347.403%200%200%200%207.425-13.565Zm-16.898%208.101a358.557%20358.557%200%200%201-12.281%2019.815a329.4%20329.4%200%200%201-23.444.823c-7.967%200-15.716-.248-23.178-.732a310.202%20310.202%200%200%201-12.513-19.846h.001a307.41%20307.41%200%200%201-10.923-20.627a310.278%20310.278%200%200%201%2010.89-20.637l-.001.001a307.318%20307.318%200%200%201%2012.413-19.761c7.613-.576%2015.42-.876%2023.31-.876H128c7.926%200%2015.743.303%2023.354.883a329.357%20329.357%200%200%201%2012.335%2019.695a358.489%20358.489%200%200%201%2011.036%2020.54a329.472%20329.472%200%200%201-11%2020.722Zm22.56-122.124c8.572%204.944%2011.906%2024.881%206.52%2051.026c-.344%201.668-.73%203.367-1.15%205.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789%20160.789%200%200%201%205.888-5.4c18.9-16.447%2036.564-22.941%2044.612-18.3ZM128%2090.808c12.625%200%2022.86%2010.235%2022.86%2022.86s-10.235%2022.86-22.86%2022.86s-22.86-10.235-22.86-22.86s10.235-22.86%2022.86-22.86Z'%3e%3c/path%3e%3c/svg%3e", dD = "/vite.svg";
function pD() {
  const [Z, ae] = oR.useState(0);
  return /* @__PURE__ */ _a.jsxs(_a.Fragment, { children: [
    /* @__PURE__ */ _a.jsxs("div", { children: [
      /* @__PURE__ */ _a.jsx("a", { href: "https://vite.dev", target: "_blank", children: /* @__PURE__ */ _a.jsx("img", { src: dD, className: "logo", alt: "Vite logo" }) }),
      /* @__PURE__ */ _a.jsx("a", { href: "https://react.dev", target: "_blank", children: /* @__PURE__ */ _a.jsx("img", { src: fD, className: "logo react", alt: "React logo" }) })
    ] }),
    /* @__PURE__ */ _a.jsx("h1", { children: "Vite + Reactasdfsa" }),
    /* @__PURE__ */ _a.jsxs("div", { className: "card", children: [
      /* @__PURE__ */ _a.jsxs("button", { onClick: () => ae((A) => A + 1), children: [
        "count is ",
        Z
      ] }),
      /* @__PURE__ */ _a.jsxs("p", { children: [
        "Edit ",
        /* @__PURE__ */ _a.jsx("code", { children: "src/App.tsx" }),
        " and save to test HMR"
      ] })
    ] }),
    /* @__PURE__ */ _a.jsx("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" })
  ] });
}
cD.createRoot(document.getElementById("tsfm-manage-apps")).render(
  /* @__PURE__ */ _a.jsx(oR.StrictMode, { children: /* @__PURE__ */ _a.jsx(pD, {}) })
);
