(()=>{"use strict";const e=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","details","summary","iframe","object","embed","[contenteditable]"].join(","),t=27,n=9;function o(e,t){Array.from(document.getElementById("site").children).forEach((function(n){n!==t&&(n.inert=e)}))}function r(t){const o=t.currentTarget.querySelectorAll(e),r=o[0],c=o[o.length-1];t.keyCode===n&&(t.shiftKey?document.activeElement===r&&(t.preventDefault(),c.focus()):document.activeElement===c&&(t.preventDefault(),r.focus()))}function c(t,n){if("add"===t)setTimeout((function(){n.querySelectorAll(e)[0].focus()}),100),n.addEventListener("keydown",r);else{if("remove"!==t)throw new Error("The action options for trapFocus are only 'add' or 'remove'");n.removeEventListener("keydown",r)}}function i(e){return document.querySelector(e)}function a(e,t){const n=Element.prototype;return(n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||function(e){return-1!==[].indexOf.call(document.querySelectorAll(e),this)}).call(e,t)}const d=document.body,s=i("#demo-engine"),l=i("#demo-engine-content"),m=i("#demo-engine__btn"),u=(f=".demo-engine__color-btn",document.querySelectorAll(f));var f;const g=i("#page-color-style");function b(){return!!s&&s.classList.contains("open")}function h(){m.setAttribute("aria-expanded",!1),m.setAttribute("aria-label","Open theme options dialog"),s.classList.remove("open"),l.inert=!0,o(!1,document.getElementById("demo-engine")),c("remove",document.getElementById("demo-engine")),m.focus()}function v(e){const t=e.currentTarget,n=t.dataset.color,o=g.getAttribute("href"),r=o.slice(0,o.lastIndexOf("/"));u.forEach((e=>{e.classList.remove("demo-engine__color-btn--active")})),t.classList.add("demo-engine__color-btn--active"),g.setAttribute("href",r+"/"+n+".css")}u.forEach((e=>e.addEventListener("click",v))),m.addEventListener("click",(function(){b()?h():(m.setAttribute("aria-expanded",!0),m.setAttribute("aria-label","Close theme options dialog"),s.classList.add("open"),l.inert=!1,o(!0,document.getElementById("demo-engine")),c("add",document.getElementById("demo-engine")))})),function(){const e=g.getAttribute("href");i(".demo-engine__color-btn[data-color="+e.slice(e.lastIndexOf("/")+1,e.indexOf(".css"))+"]").classList.add("demo-engine__color-btn--active")}(),"rtl"===getComputedStyle(document.body).direction?i("#rtl-link").classList.add("active"):i("#ltr-link").classList.add("active"),localStorage.getItem("isTemplateDarkTheme")&&(s&&"true"===localStorage.getItem("isTemplateDarkTheme")?d.classList.add("dark-theme").removeClass("default-theme"):d.classList.add("default-theme").removeClass("dark-theme")),document.addEventListener("keydown",(function(e){e.keyCode===t&&(e.preventDefault(),b()&&h())})),d.addEventListener("click",(function(e){b()&&(function(e,t){for(;e&&!a(e,t);)e=e.parentElement;return e}(e.target,".demo-engine")||h())})),b()||(l.inert=!0)})();