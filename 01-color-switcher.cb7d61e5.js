!function(){var t={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]"),bodyColorChange:document.querySelector("body")};t.start.addEventListener("click",(function(){e.start()})),t.stop.addEventListener("click",(function(){e.stop()}));var e={start:function(){this.isActive||(t.start.setAttribute("disabled",!0),this.isActive=!0,this.idInterval=setInterval((function(){var e="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));t.bodyColorChange.style.backgroundColor="".concat(e)}),1e3))},stop:function(){clearInterval(this.idInterval),t.start.removeAttribute("disabled"),this.isActive=!1}}}();
//# sourceMappingURL=01-color-switcher.cb7d61e5.js.map
