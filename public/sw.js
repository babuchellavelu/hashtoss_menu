importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

if (!self.define) {
    const e = e => {
            "require" !== e && (e += ".js");
            let r = Promise.resolve();
            return s[e] || (r = new Promise((async r => {
                if ("document" in self) {
                    const s = document.createElement("script");
                    s.src = e, document.head.appendChild(s), s.onload = r
                } else importScripts(e), r()
            }))), r.then((() => {
                if (!s[e]) throw new Error(`Module ${e} didn’t register its module`);
                return s[e]
            }))
        },
        r = (r, s) => {
            Promise.all(r.map(e)).then((e => s(1 === e.length ? e[0] : e)))
        },
        s = {
            require: Promise.resolve(r)
        };
    self.define = (r, i, o) => {
        s[r] || (s[r] = Promise.resolve().then((() => {
            let s = {};
            const t = {
                uri: location.origin + r.slice(1)
            };
            return Promise.all(i.map((r => {
                switch (r) {
                    case "exports":
                        return s;
                    case "module":
                        return t;
                    default:
                        return e(r)
                }
            }))).then((e => {
                const r = o(...e);
                return s.default || (s.default = r), s
            }))
        })))
    }
}
define("./sw.js", ["./workbox-8260947c"], (function (e) {
    "use strict";
    self.addEventListener("message", (e => {
        e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting()
    })), e.precacheAndRoute([{"revision":"2651f2265d6613947b1cc23282b21735","url":"App.css"},{"revision":"6c2104b8d219ed99234ae2d6329f4357","url":"app/layout/styles.css"},{"revision":"225bd72ca7c435ba4ad130c72482b267","url":"index.js"},{"revision":"ee780d5bd6cfe5089b17a31f8346ad5a","url":"reportWebVitals.js"},{"revision":"38a7df1dbf951646ed6e18d7e1d3dd2f","url":"service-worker.js"},{"revision":"a0bf88f839f198ec05b66d601c6b7da1","url":"serviceWorkerRegistration.js"}])
}));
//# sourceMappingURL=sw.js.map