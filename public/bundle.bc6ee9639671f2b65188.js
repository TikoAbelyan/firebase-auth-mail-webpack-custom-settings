!function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=4)}([function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var r=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([r]).join("\n")}var a,s,c;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);o&&r[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},function(n,e,t){var o=t(2),r=t(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[n.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);n.exports=r.locals||{}},function(n,e,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function s(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},o=[],r=0;r<n.length;r++){var i=n[r],c=e.base?i[0]+e.base:i[0],u=t[c]||0,l="".concat(c," ").concat(u);t[c]=u+1;var d=s(l),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:l,updater:v(f,e),references:1}),o.push(l)}return o}function u(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,d=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function f(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=d(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var m=null,h=0;function v(n,e){var t,o,r;if(e.singleton){var i=h++;t=m||(m=u(e)),o=f.bind(null,t,i,!1),r=f.bind(null,t,i,!0)}else t=u(e),o=p.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=s(t[o]);a[r].references--}for(var i=c(n,e),u=0;u<t.length;u++){var l=s(t[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=i}}}},function(n,e,t){"use strict";t.r(e);var o=t(0),r=t.n(o)()(!1);r.push([n.i,"/**\n * Body CSS\n */\n\nhtml,\nbody {\n  height: 100%;\n}\n\nhtml,\nbody,\ninput,\ntextarea,\nbutton {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n}\n\n/**\n  * Sidebar CSS\n  */\n\n#sidebar {\n  background-color: #2196f3;\n  padding: 15px;\n}\n\n@media (min-width: 768px) {\n  #sidebar {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    width: 180px;\n    height: 100%;\n    padding-top: 30px;\n  }\n}\n\n/**\n  * Content CSS\n  */\n@media (min-width: 768px) {\n  #content {\n    margin-left: 180px;\n  }\n}\n.floating-btn {\n  position: fixed;\n  right: 50px;\n  bottom: 50px;\n}\n.modal {\n  max-width: 600px;\n  max-height: 300px;\n  margin: 100px auto;\n  overflow-y: auto;\n  background: #fff;\n}\n.modal > h1 {\n  text-align: center;\n}\n.modal .modal-content {\n  padding: 1rem;\n}\n.error {\n  color: red;\n}\n",""]),e.default=r},function(n,e,t){"use strict";t.r(e);class o{static create(n){return fetch("https://podcast--app-44f3b.firebaseio.com/question.json",{method:"POST",body:JSON.stringify(n),header:{"Content-Type":"application/json"}}).then(n=>n.json()).then(e=>(n.id=e.name,n)).then(r).then(o.renderList)}static fetch(n){return n?fetch("https://podcast--app-44f3b.firebaseio.com/question.json?auth="+n).then(n=>n.json()).then(n=>n&&n.error?`<p class='error'>${n.error}</p>`:n?Object.keys(n).map(e=>({...n[e],id:e})):[]):Promise.resolve("<p class='error'>Could'nt have token</p>")}static renderList(){const n=i(),e=n.length?n.map(a).join(" "):'<div class="mui--text-headline">you don\'t ask one question</div>';document.getElementById("list").innerHTML=e}static listToHtml(n){return n.length?`<ol>${n.map(n=>`<li>${n.text}</li>`).join(" ")}</ol>`:"<p>no questions</p>"}}function r(n){const e=i();e.push(n),localStorage.setItem("questions",JSON.stringify(e))}function i(){return JSON.parse(localStorage.getItem("questions")||"[]")}function a(n){return`\n  <div class="mui--text-black-54">\n  ${new Date(n.date).toLocaleDateString()}\n  ${new Date(n.date).toLocaleTimeString()}\n  </div>\n  <div>${n.text}</div>\n  <br>\n  `}function s(n){return n.length>=10}function c(n,e){const t=document.createElement("div");t.classList.add("modal");const o=`\n    <h1>${n}</h1>\n    <div class="modal-content">${e}</div>\n  `;t.innerHTML=o,mui.overlay("on",t)}t(1);const u=document.getElementById("form"),l=document.querySelector("#modal-btn"),d=u.querySelector("#question-input"),f=u.querySelector("#submit");function p(n){n.preventDefault();const e=n.target.querySelector("button"),t=n.target.querySelector("#email").value,r=n.target.querySelector("#password").value;e.disabled=!0,function(n,e){return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCPd2JHxmYudGcXwWI07aVdJFw9wldLQOI\n    ",{method:"POST",body:JSON.stringify({email:n,password:e,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then(n=>n.json()).then(n=>n.idToken)}(t,r).then(o.fetch).then(m).then(()=>e.disabled=!1)}function m(n){"string"==typeof n?c("error",n):c("uray",o.listToHtml(n))}window.addEventListener("load",o.renderList),l.addEventListener("click",(function(){c("avtorizacia",'\n    <form class="mui-form" id="auth-form">\n    <div class="mui-textfield mui-textfield--float-label">\n      <input\n        type="email"\n        id="email"\n        required\n      />\n      <label for="email">Email</label>\n    </div>\n    <div class="mui-textfield mui-textfield--float-label">\n    <input\n      type="password"\n      id="password"\n      required\n    />\n    <label for="password">password</label>\n  </div>\n    <button\n      type="submit"\n      class="mui-btn mui-btn--raised mui-btn--primary"\n    >\n      Login\n    </button>\n  </form>\n    '),document.getElementById("auth-form").addEventListener("submit",p,{once:!0})})),d.addEventListener("input",()=>{f.disabled=!s(d.value)}),u.addEventListener("submit",(function(n){if(n.preventDefault(),s(d.value)){const n={text:d.value.trim(),date:(new Date).toJSON()};f.disabled=!0,o.create(n).then(()=>{d.value="",d.className="",f.disabled=!1})}}))}]);