(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{197:function(e,t,n){e.exports=n.p+"img/logo.7e4629f.png"},198:function(e,t,n){var content=n(210);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(79).default)("f13757c6",content,!0,{sourceMap:!1})},206:function(e,t,n){"use strict";n.r(t);var r=[function(){var e=this.$createElement,t=this._self._c||e;return t("a",{attrs:{href:"/"}},[t("img",{staticClass:"navbar__logo",attrs:{src:n(197),alt:"Logo Barbearia Alvorada"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"schedule"},[n("a",{attrs:{href:"https://api.whatsapp.com/send/?phone=5518998076397&text&app_absent=0",target:"_blank",rel:"noopener"}},[e._v("AGENDAR HORÁRIO")])])}],d=(n(30),{data:function(){return{isActive:!1}},methods:{openMenu:function(){this.isActive=!0},closeMenu:function(){this.isActive=!1},menu:function(){function e(e){e.preventDefault();var r=t(e.target);n(r)}document.querySelectorAll(".nav__item").forEach((function(t){return t.addEventListener("click",e)}));var t=function(element){var e=element.getAttribute("href");return document.querySelector(e).offsetTop},n=function(e){window.scroll({top:e-85,behavior:"smooth"})}}}}),o=(n(209),n(34)),component=Object(o.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"header"},[r("nav",{staticClass:"navbar"},[e._m(0),e._v(" "),r("svg",{attrs:{id:"icon-menu",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"none",width:"40px",stroke:"#fff","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},on:{click:e.openMenu}},[r("path",{attrs:{d:"M4 8 L28 8 M4 16 L28 16 M4 24 L28 24"}})]),e._v(" "),e.isActive?r("div",{staticClass:"overlay",on:{click:e.closeMenu}}):e._e(),e._v(" "),r("div",{class:{active:e.isActive},attrs:{id:"menu"}},[r("img",{staticClass:"logo-menu",attrs:{src:n(197),alt:"Logo Barbearia Alvorada"}}),e._v(" "),r("ul",{staticClass:"nav"},[r("li",{staticClass:"nav__item"},[r("a",{staticClass:"nav__link",attrs:{href:"#quemSomos"},on:{click:e.menu}},[e._v("QUEM SOMOS")])]),e._v(" "),r("li",{staticClass:"nav__item"},[r("a",{staticClass:"nav__link",attrs:{href:"#servicos"},on:{click:e.menu}},[e._v("SERVIÇOS")])]),e._v(" "),r("li",{staticClass:"nav__item"},[r("a",{staticClass:"nav__link",attrs:{href:"#galeria"},on:{click:e.menu}},[e._v("GALERIA")])]),e._v(" "),r("li",{staticClass:"nav__item"},[r("a",{staticClass:"nav__link",attrs:{href:"#barbeiros"},on:{click:e.menu}},[e._v("BARBEIROS")])]),e._v(" "),r("li",{staticClass:"nav__item"},[r("a",{staticClass:"nav__link",attrs:{href:"#contato"},on:{click:e.menu}},[e._v("CONTATO")])])]),e._v(" "),e._m(1)])])])}),r,!1,null,"d274c038",null);t.default=component.exports;installComponents(component,{Header:n(206).default})},209:function(e,t,n){"use strict";n(198)},210:function(e,t,n){var r=n(78)(!1);r.push([e.i,'.header[data-v-d274c038]{background:var(--primary);position:sticky;top:0;width:100%;z-index:99999999}.header .navbar[data-v-d274c038]{display:flex;justify-content:space-between;align-items:center;max-width:95%;margin:0 auto;height:100px}@media(min-width:800px){.header .navbar[data-v-d274c038]{max-width:75%}}.header .navbar__logo[data-v-d274c038]{width:70px}@media(min-width:800px){.header .navbar #icon-menu[data-v-d274c038]{display:none}}.header .navbar .overlay[data-v-d274c038]{position:fixed;top:0;left:0;width:40%;height:100vh;background:rgba(0,0,0,.8)}@media(min-width:800px){.header .navbar .overlay[data-v-d274c038]{display:none}}.header .navbar #menu[data-v-d274c038]{position:fixed;top:0;right:0;background:var(--primary);width:60%;height:100vh;display:none}@media(min-width:800px){.header .navbar #menu[data-v-d274c038]{position:static;display:flex;height:80px;width:auto}}.header .navbar #menu .logo-menu[data-v-d274c038]{width:60px;margin-top:30px}@media(min-width:800px){.header .navbar #menu .logo-menu[data-v-d274c038]{display:none}}.header .navbar #menu .nav[data-v-d274c038]{margin-top:35px}@media(min-width:800px){.header .navbar #menu .nav[data-v-d274c038]{display:flex;align-items:center;margin:0 50px 0 0}}.header .navbar #menu .nav__item[data-v-d274c038]{list-style:none;padding:8px 0;text-align:center}@media(min-width:800px){.header .navbar #menu .nav__item[data-v-d274c038]{margin:0 20px}}.header .navbar #menu .nav__link[data-v-d274c038]{text-decoration:none;color:var(--white);font:700 1.1rem "Mate SC",serif;letter-spacing:2.3px;transition:.3s}.header .navbar #menu .nav__link[data-v-d274c038]:hover{color:var(--secondary)}.header .navbar #menu .schedule[data-v-d274c038]{margin-top:40px;display:flex;align-items:center}.header .navbar #menu .schedule a[data-v-d274c038]{background:var(--secondary);padding:10px;border-radius:10px;color:var(--white);text-decoration:none;box-shadow:5px 5px 10px var(--black-500);font:700 1rem "Mate SC",serif;letter-spacing:1.3px}.header .navbar #menu .schedule a[data-v-d274c038]:hover{background:#07b9f0}@media(min-width:800px){.header .navbar #menu .schedule[data-v-d274c038]{margin-top:0}}.header .navbar .active[data-v-d274c038]{display:flex!important;flex-direction:column;align-items:center}',""]),e.exports=r}}]);