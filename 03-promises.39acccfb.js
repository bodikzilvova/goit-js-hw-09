!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var u=r("6JpON");var i=document.querySelector(".form"),a=document.querySelector("input[name = delay]"),c=document.querySelector("input[name = step]"),l=document.querySelector("input[name = amount]");i.addEventListener("submit",(function(n){var t=function(n){var t=n;(function(e,n){return new Promise((function(t,o){var r=Math.random()>.3;setTimeout((function(){r?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))})(t,d).then((function(n){e(u).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(n.delay,"ms"))})).catch((function(n){e(u).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(n.delay,"ms"))})),d+=r};n.preventDefault();for(var o=Number(a.value),r=Number(c.value),i=Number(l.value),d=o,f=1;f<=i;f+=1)t(f)}))}();
//# sourceMappingURL=03-promises.39acccfb.js.map