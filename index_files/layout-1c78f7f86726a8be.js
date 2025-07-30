(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    2374: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          cancelIdleCallback: function () {
            return n;
          },
          requestIdleCallback: function () {
            return r;
          },
        });
      let r =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        n =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    2714: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "setAttributesFromProps", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let r = {
          acceptCharset: "accept-charset",
          className: "class",
          htmlFor: "for",
          httpEquiv: "http-equiv",
          noModule: "noModule",
        },
        n = [
          "onLoad",
          "onReady",
          "dangerouslySetInnerHTML",
          "children",
          "onError",
          "strategy",
          "stylesheets",
        ];
      function a(e) {
        return ["async", "defer", "noModule"].includes(e);
      }
      function l(e, t) {
        for (let [l, i] of Object.entries(t)) {
          if (!t.hasOwnProperty(l) || n.includes(l) || void 0 === i) continue;
          let s = r[l] || l.toLowerCase();
          "SCRIPT" === e.tagName && a(s)
            ? (e[s] = !!i)
            : e.setAttribute(s, String(i)),
            (!1 === i ||
              ("SCRIPT" === e.tagName && a(s) && (!i || "false" === i))) &&
              (e.setAttribute(s, ""), e.removeAttribute(s));
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5299: (e) => {
      e.exports = {
        style: { fontFamily: "'Inter', 'Inter Fallback'", fontStyle: "normal" },
        className: "__className_e8ce0c",
      };
    },
    6950: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 7567)),
        Promise.resolve().then(r.bind(r, 8267)),
        Promise.resolve().then(r.t.bind(r, 9243, 23)),
        Promise.resolve().then(r.t.bind(r, 5299, 23)),
        Promise.resolve().then(r.t.bind(r, 9324, 23));
    },
    7567: (e, t, r) => {
      "use strict";
      r.d(t, { FixedOfferHeader: () => i });
      var n = r(5155),
        a = r(2115);
      let l = (0, r(9946).A)("Clock", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
      ]);
      function i() {
        let [e, t] = (0, a.useState)("");
        return (
          (0, a.useEffect)(() => {
            let e = new Date(),
              r = String(e.getDate()).padStart(2, "0"),
              n = String(e.getMonth() + 1).padStart(2, "0");
            t("".concat(r, "/").concat(n));
          }, []),
          (0, n.jsxs)("div", {
            className:
              "",
            children: [],
          })
        );
      }
    },
    8267: (e, t, r) => {
      "use strict";
      r.d(t, { ReadingProgressBar: () => l });
      var n = r(5155),
        a = r(2115);
      function l() {
        let [e, t] = (0, a.useState)(0),
          r = () => {
            let {
              scrollTop: e,
              scrollHeight: r,
              clientHeight: n,
            } = document.documentElement;
            t((e / (r - n)) * 100);
          };
        return (
          (0, a.useEffect)(
            () => (
              window.addEventListener("scroll", r),
              () => window.removeEventListener("scroll", r)
            ),
            []
          ),
          (0, n.jsx)("div", {
            className:
              "fixed top-0 left-0 h-1 bg-green-500 z-[99999] transition-all duration-100 ease-out",
            style: { width: "".concat(e, "%") },
          })
        );
      }
    },
    9243: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return b;
          },
          handleClientScriptLoad: function () {
            return y;
          },
          initScriptLoader: function () {
            return h;
          },
        });
      let n = r(8229),
        a = r(6966),
        l = r(5155),
        i = n._(r(7650)),
        s = a._(r(2115)),
        o = r(2830),
        c = r(2714),
        d = r(2374),
        u = new Map(),
        f = new Set(),
        p = (e) => {
          if (i.default.preinit) {
            e.forEach((e) => {
              i.default.preinit(e, { as: "style" });
            });
            return;
          }
          {
            let t = document.head;
            e.forEach((e) => {
              let r = document.createElement("link");
              (r.type = "text/css"),
                (r.rel = "stylesheet"),
                (r.href = e),
                t.appendChild(r);
            });
          }
        },
        m = (e) => {
          let {
              src: t,
              id: r,
              onLoad: n = () => {},
              onReady: a = null,
              dangerouslySetInnerHTML: l,
              children: i = "",
              strategy: s = "afterInteractive",
              onError: o,
              stylesheets: d,
            } = e,
            m = r || t;
          if (m && f.has(m)) return;
          if (u.has(t)) {
            f.add(m), u.get(t).then(n, o);
            return;
          }
          let y = () => {
              a && a(), f.add(m);
            },
            h = document.createElement("script"),
            g = new Promise((e, t) => {
              h.addEventListener("load", function (t) {
                e(), n && n.call(this, t), y();
              }),
                h.addEventListener("error", function (e) {
                  t(e);
                });
            }).catch(function (e) {
              o && o(e);
            });
          l
            ? ((h.innerHTML = l.__html || ""), y())
            : i
            ? ((h.textContent =
                "string" == typeof i ? i : Array.isArray(i) ? i.join("") : ""),
              y())
            : t && ((h.src = t), u.set(t, g)),
            (0, c.setAttributesFromProps)(h, e),
            "worker" === s && h.setAttribute("type", "text/partytown"),
            h.setAttribute("data-nscript", s),
            d && p(d),
            document.body.appendChild(h);
        };
      function y(e) {
        let { strategy: t = "afterInteractive" } = e;
        "lazyOnload" === t
          ? window.addEventListener("load", () => {
              (0, d.requestIdleCallback)(() => m(e));
            })
          : m(e);
      }
      function h(e) {
        e.forEach(y),
          [
            ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
            ...document.querySelectorAll('[data-nscript="beforePageRender"]'),
          ].forEach((e) => {
            let t = e.id || e.getAttribute("src");
            f.add(t);
          });
      }
      function g(e) {
        let {
            id: t,
            src: r = "",
            onLoad: n = () => {},
            onReady: a = null,
            strategy: c = "afterInteractive",
            onError: u,
            stylesheets: p,
            ...y
          } = e,
          {
            updateScripts: h,
            scripts: g,
            getIsSsr: b,
            appDir: _,
            nonce: v,
          } = (0, s.useContext)(o.HeadManagerContext),
          w = (0, s.useRef)(!1);
        (0, s.useEffect)(() => {
          let e = t || r;
          w.current || (a && e && f.has(e) && a(), (w.current = !0));
        }, [a, t, r]);
        let x = (0, s.useRef)(!1);
        if (
          ((0, s.useEffect)(() => {
            if (!x.current) {
              if ("afterInteractive" === c) m(e);
              else if ("lazyOnload" === c)
                "complete" === document.readyState
                  ? (0, d.requestIdleCallback)(() => m(e))
                  : window.addEventListener("load", () => {
                      (0, d.requestIdleCallback)(() => m(e));
                    });
              x.current = !0;
            }
          }, [e, c]),
          ("beforeInteractive" === c || "worker" === c) &&
            (h
              ? ((g[c] = (g[c] || []).concat([
                  { id: t, src: r, onLoad: n, onReady: a, onError: u, ...y },
                ])),
                h(g))
              : b && b()
              ? f.add(t || r)
              : b && !b() && m(e)),
          _)
        ) {
          if (
            (p &&
              p.forEach((e) => {
                i.default.preinit(e, { as: "style" });
              }),
            "beforeInteractive" === c)
          )
            return r
              ? (i.default.preload(
                  r,
                  y.integrity
                    ? {
                        as: "script",
                        integrity: y.integrity,
                        nonce: v,
                        crossOrigin: y.crossOrigin,
                      }
                    : { as: "script", nonce: v, crossOrigin: y.crossOrigin }
                ),
                (0, l.jsx)("script", {
                  nonce: v,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([r, { ...y, id: t }]) +
                      ")",
                  },
                }))
              : (y.dangerouslySetInnerHTML &&
                  ((y.children = y.dangerouslySetInnerHTML.__html),
                  delete y.dangerouslySetInnerHTML),
                (0, l.jsx)("script", {
                  nonce: v,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([0, { ...y, id: t }]) +
                      ")",
                  },
                }));
          "afterInteractive" === c &&
            r &&
            i.default.preload(
              r,
              y.integrity
                ? {
                    as: "script",
                    integrity: y.integrity,
                    nonce: v,
                    crossOrigin: y.crossOrigin,
                  }
                : { as: "script", nonce: v, crossOrigin: y.crossOrigin }
            );
        }
        return null;
      }
      Object.defineProperty(g, "__nextScript", { value: !0 });
      let b = g;
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    9324: () => {},
    9946: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => o });
      var n = r(2115);
      let a = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        l = function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return t
            .filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t)
            .join(" ")
            .trim();
        };
      var i = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      let s = (0, n.forwardRef)((e, t) => {
          let {
            color: r = "currentColor",
            size: a = 24,
            strokeWidth: s = 2,
            absoluteStrokeWidth: o,
            className: c = "",
            children: d,
            iconNode: u,
            ...f
          } = e;
          return (0, n.createElement)(
            "svg",
            {
              ref: t,
              ...i,
              width: a,
              height: a,
              stroke: r,
              strokeWidth: o ? (24 * Number(s)) / Number(a) : s,
              className: l("lucide", c),
              ...f,
            },
            [
              ...u.map((e) => {
                let [t, r] = e;
                return (0, n.createElement)(t, r);
              }),
              ...(Array.isArray(d) ? d : [d]),
            ]
          );
        }),
        o = (e, t) => {
          let r = (0, n.forwardRef)((r, i) => {
            let { className: o, ...c } = r;
            return (0, n.createElement)(s, {
              ref: i,
              iconNode: t,
              className: l("lucide-".concat(a(e)), o),
              ...c,
            });
          });
          return (r.displayName = "".concat(e)), r;
        };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [618, 441, 684, 358], () => t(6950)), (_N_E = e.O());
  },
]);
