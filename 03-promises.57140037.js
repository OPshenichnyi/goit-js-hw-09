!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("h6c0i"),i=document.querySelector(".form"),u=i.elements,c=u.delay,a=u.step,f=u.amount;i.addEventListener("submit",(function(e){for(var n=function(e){setTimeout((function(){var n,t;(n=e,t=u,Math.random()>.3?new Promise((function(e,o){e("Fulfilled promise ".concat(n," in ").concat(t))})):new Promise((function(e,o){o("Rejected promise ".concat(n," in ").concat(t))}))).then((function(e){r.Notify.success(e)})).catch((function(e){r.Notify.failure(e)})),u+=o}),t),t+=o},t=Number(c.value),o=Number(a.value),u=Number(c.value),l=1;l<=Number(f.value);l+=1)n(l);e.preventDefault(),i.reset()}))}();
//# sourceMappingURL=03-promises.57140037.js.map
