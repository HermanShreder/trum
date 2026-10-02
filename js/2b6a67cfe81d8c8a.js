(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  18566,
  (e, t, o) => {
    t.exports = e.r(76562);
  },
  43880,
  (e) => {
    "use strict";
    var t = e.i(47167),
      o = e.i(71645);
    function n() {
      return "u" > typeof window;
    }
    function r() {
      return "production";
    }
    function i() {
      return (n() ? window.vam : r()) || "production";
    }
    function a() {
      return "production" === i();
    }
    function l() {
      return "development" === i();
    }
    function s(e, t, o) {
      var r, i;
      if (!n()) {
        let e =
          "[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment";
        if (a()) console.warn(e);
        else throw Error(e);
        return;
      }
      if (!t) {
        null == (r = window.va) ||
          r.call(window, "event", { name: e, options: o });
        return;
      }
      try {
        let n = (function (e, t) {
          if (!e) return;
          let o = e,
            n = [];
          for (let [r, i] of Object.entries(e))
            "object" == typeof i &&
              null !== i &&
              (t.strip
                ? (o = (function (e, { [e]: t, ...o }) {
                    return o;
                  })(r, o))
                : n.push(r));
          if (n.length > 0 && !t.strip)
            throw Error(
              `The following properties are not valid: ${n.join(", ")}. Only strings, numbers, booleans, and null are allowed.`,
            );
          return o;
        })(t, { strip: a() });
        null == (i = window.va) ||
          i.call(window, "event", { name: e, data: n, options: o });
      } catch (e) {
        e instanceof Error && l() && console.error(e);
      }
    }
    function c(e) {
      return (
        (0, o.useEffect)(() => {
          var t;
          e.beforeSend &&
            (null == (t = window.va) ||
              t.call(window, "beforeSend", e.beforeSend));
        }, [e.beforeSend]),
        (0, o.useEffect)(() => {
          !(function (e = { debug: !0 }) {
            var t;
            if (!n()) return;
            (!(function (e = "auto") {
              if ("auto" === e) {
                window.vam = r();
                return;
              }
              window.vam = e;
            })(e.mode),
              window.va ||
                (window.va = function (...e) {
                  (window.vaq = window.vaq || []).push(e);
                }),
              e.beforeSend &&
                (null == (t = window.va) ||
                  t.call(window, "beforeSend", e.beforeSend)));
            let o = e.scriptSrc
              ? e.scriptSrc
              : l()
                ? "https://va.vercel-scripts.com/v1/script.debug.js"
                : e.basePath
                  ? `${e.basePath}/insights/script.js`
                  : "/_vercel/insights/script.js";
            if (document.head.querySelector(`script[src*="${o}"]`)) return;
            let i = document.createElement("script");
            ((i.src = o),
              (i.defer = !0),
              (i.dataset.sdkn =
                "@vercel/analytics" + (e.framework ? `/${e.framework}` : "")),
              (i.dataset.sdkv = "1.6.1"),
              e.disableAutoTrack && (i.dataset.disableAutoTrack = "1"),
              e.endpoint
                ? (i.dataset.endpoint = e.endpoint)
                : e.basePath && (i.dataset.endpoint = `${e.basePath}/insights`),
              e.dsn && (i.dataset.dsn = e.dsn),
              (i.onerror = () => {
                let e = l()
                  ? "Please check if any ad blockers are enabled and try again."
                  : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
                console.log(
                  `[Vercel Web Analytics] Failed to load script from ${o}. ${e}`,
                );
              }),
              l() && !1 === e.debug && (i.dataset.debug = "false"),
              document.head.appendChild(i));
          })({
            framework: e.framework || "react",
            basePath:
              e.basePath ??
              (function () {
                if (void 0 !== t.default && void 0 !== t.default.env)
                  return t.default.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
              })(),
            ...(void 0 !== e.route && { disableAutoTrack: !0 }),
            ...e,
          });
        }, []),
        (0, o.useEffect)(() => {
          e.route &&
            e.path &&
            (function ({ route: e, path: t }) {
              var o;
              null == (o = window.va) ||
                o.call(window, "pageview", { route: e, path: t });
            })({ route: e.route, path: e.path });
        }, [e.route, e.path]),
        null
      );
    }
    e.s(["Analytics", () => c, "track", () => s]);
  },
  37564,
  (e) => {
    "use strict";
    e.i(47167);
    var t = e.i(43476),
      o = e.i(4570),
      n = e.i(71645),
      r = (0, n.createContext)({ client: o.default, bootstrap: void 0 });
    function i(e) {
      var t,
        i,
        a = e.children,
        l = e.client,
        s = e.apiKey,
        c = e.options,
        u = (0, n.useRef)(null),
        d = (0, n.useMemo)(
          function () {
            return l
              ? (s &&
                  console.warn(
                    "[PostHog.js] You have provided both `client` and `apiKey` to `PostHogProvider`. `apiKey` will be ignored in favour of `client`.",
                  ),
                c &&
                  console.warn(
                    "[PostHog.js] You have provided both `client` and `options` to `PostHogProvider`. `options` will be ignored in favour of `client`.",
                  ),
                l)
              : (s ||
                  console.warn(
                    "[PostHog.js] No `apiKey` or `client` were provided to `PostHogProvider`. Using default global `window.posthog` instance. You must initialize it manually. This is not recommended behavior.",
                  ),
                o.default);
          },
          [l, s, JSON.stringify(c)],
        );
      return (
        (0, n.useEffect)(
          function () {
            if (!l) {
              var e = u.current;
              (e
                ? (s !== e.apiKey &&
                    console.warn(
                      "[PostHog.js] You have provided a different `apiKey` to `PostHogProvider` than the one that was already initialized. This is not supported by our provider and we'll keep using the previous key. If you need to toggle between API Keys you need to control the `client` yourself and pass it in as a prop rather than an `apiKey` prop.",
                    ),
                  c &&
                    !(function e(t, o, n) {
                      if ((void 0 === n && (n = new WeakMap()), t === o))
                        return !0;
                      if (
                        "object" != typeof t ||
                        null === t ||
                        "object" != typeof o ||
                        null === o
                      )
                        return !1;
                      if (n.has(t) && n.get(t) === o) return !0;
                      n.set(t, o);
                      var r = Object.keys(t),
                        i = Object.keys(o);
                      if (r.length !== i.length) return !1;
                      for (var a = 0; a < r.length; a++) {
                        var l = r[a];
                        if (!i.includes(l) || !e(t[l], o[l], n)) return !1;
                      }
                      return !0;
                    })(c, e.options) &&
                    o.default.set_config(c))
                : (o.default.__loaded &&
                    console.warn(
                      "[PostHog.js] `posthog` was already loaded elsewhere. This may cause issues.",
                    ),
                  o.default.init(s, c)),
                (u.current = { apiKey: s, options: null != c ? c : {} }));
            }
          },
          [l, s, JSON.stringify(c)],
        ),
        n.default.createElement(
          r.Provider,
          {
            value: {
              client: d,
              bootstrap:
                null != (t = null == c ? void 0 : c.bootstrap)
                  ? t
                  : null == (i = null == l ? void 0 : l.config)
                    ? void 0
                    : i.bootstrap,
            },
          },
          a,
        )
      );
    }
    var a = function (e) {
        return "function" == typeof e;
      },
      l = function (e, t) {
        return (l =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var o in t)
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          })(e, t);
      };
    "function" == typeof SuppressedError && SuppressedError;
    var s = { componentStack: null, exceptionEvent: null, error: null },
      c = n.default.Component;
    if ("function" != typeof c && null !== c)
      throw TypeError(
        "Class extends value " + String(c) + " is not a constructor or null",
      );
    function u() {
      this.constructor = d;
    }
    function d(e) {
      var t = c.call(this, e) || this;
      return ((t.state = s), t);
    }
    (l(d, c),
      (d.prototype =
        null === c ? Object.create(c) : ((u.prototype = c.prototype), new u())),
      (d.prototype.componentDidCatch = function (e, t) {
        var o,
          n = this.props.additionalProperties;
        a(n) ? (o = n(e)) : "object" == typeof n && (o = n);
        var r = this.context.client.captureException(e, o),
          i = t.componentStack;
        this.setState({
          error: e,
          componentStack: null != i ? i : null,
          exceptionEvent: r,
        });
      }),
      (d.prototype.render = function () {
        var e = this.props,
          t = e.children,
          o = e.fallback,
          r = this.state;
        if (null == r.componentStack) return a(t) ? t() : t;
        var i = a(o)
          ? n.default.createElement(o, {
              error: r.error,
              componentStack: r.componentStack,
              exceptionEvent: r.exceptionEvent,
            })
          : o;
        return n.default.isValidElement(i)
          ? i
          : (console.warn(
              "[PostHog.js][PostHogErrorBoundary] Invalid fallback prop, provide a valid React element or a function that returns a valid React element.",
            ),
            n.default.createElement(n.default.Fragment, null));
      }),
      (d.contextType = r));
    var p = e.i(18566);
    {
      try {
        Object.keys(localStorage)
          .filter(
            (e) =>
              e.includes("posthog") &&
              (e.includes("toolbar") || e.includes("__phc")),
          )
          .forEach((e) => localStorage.removeItem(e));
      } catch (e) {}
      (window.location.hash.includes("__posthog") &&
        history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search,
        ),
        o.default.init("phc_uvmphDqLUetkX5FLRVyhfTLHianE9yQEvggbsLYUV2KE", {
          api_host: "https://eu.i.posthog.com",
          advanced_disable_remote_config: true,
          person_profiles: "identified_only",
          capture_pageview: true,
          capture_pageleave: true,
          persistence: "localStorage",
          opt_in_site_apps: !1,
          advanced_disable_toolbar_metrics: !0,
          loaded: (e) => {
            e.set_config({ disable_session_recording: !0 });
          },
        }));
      let e = document.createElement("style");
      ((e.textContent = `
    [id*="posthog"], [class*="posthog"], [data-posthog], 
    .__POSTHOG_TOOLBAR__, .PostHogToolbar, #__POSTHOG_TOOLBAR__,
    [id*="__ph"], [class*="__ph"] {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      pointer-events: none !important;
    }
  `),
        document.head.appendChild(e));
    }
    function f({ children: e }) {
      return (0, t.jsx)(i, { client: o.default, children: e });
    }
    function v() {
      let e = (0, p.usePathname)(),
        t = (0, p.useSearchParams)(),
        o = (0, n.useContext)(r).client;
      return (
        (0, n.useEffect)(() => {
          if (e && o) {
            let n = window.origin + e;
            (t?.toString() && (n = n + "?" + t.toString()),
              o.capture("$pageview", { $current_url: n }));
          }
        }, [e, t, o]),
        null
      );
    }
    e.s(["PostHogPageview", () => v, "PostHogProvider", () => f], 37564);
  },
]);
