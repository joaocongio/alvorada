(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{202:function(t,e,n){var content=n(229);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(79).default)("3bb879fd",content,!0,{sourceMap:!1})},222:function(t,e,n){t.exports=n.p+"img/galeria1-min.f6844d1.jpg"},223:function(t,e,n){t.exports=n.p+"img/galeria2-min.3c0124d.jpg"},224:function(t,e,n){t.exports=n.p+"img/galeria3-min.1961793.jpg"},225:function(t,e,n){t.exports=n.p+"img/galeria4-min.823bae3.jpg"},226:function(t,e,n){t.exports=n.p+"img/galeria5-min.3cb9fa4.jpg"},227:function(t,e,n){t.exports=n.p+"img/galeria6-min.de1f6cb.jpg"},228:function(t,e,n){"use strict";n(202)},229:function(t,e,n){var r=n(78)(!1);r.push([t.i,'.galery[data-v-1811b336]{margin-top:80px}@media(min-width:800px){.galery[data-v-1811b336]{margin-top:140px}}.galery .container[data-v-1811b336]{max-width:95%;margin:0 auto}@media(min-width:800px){.galery .container[data-v-1811b336]{max-width:75%}}.galery .container .title[data-v-1811b336]{text-align:center;font:700 2rem "Mate SC",serif;letter-spacing:3px;color:var(--secondary)}@media(min-width:800px){.galery .container .title[data-v-1811b336]{font:700 5.3rem "Mate SC",serif}}.galery .container .images[data-v-1811b336]{padding-top:60px;display:flex;flex-wrap:wrap;align-items:center;justify-content:center}.galery .container .images__item[data-v-1811b336]{width:48%;margin:0 5px 3px 0;cursor:pointer}@media(min-width:800px){.galery .container .images__item[data-v-1811b336]{width:32%}}.galery .container .images__item img[data-v-1811b336]{max-width:100%;height:auto}@media(min-width:800px){.galery .container .images__item img[data-v-1811b336]:hover{opacity:.8}}.galery .container .modal[data-v-1811b336]{display:none;position:fixed;z-index:1;padding-top:150px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,.9)}.galery .container .close[data-v-1811b336]{position:absolute;top:100px;right:35px;color:#f1f1f1;font-size:40px;font-weight:700;transition:.3s}.galery .container .close[data-v-1811b336]:focus,.galery .container .close[data-v-1811b336]:hover{color:#bbb;text-decoration:none;cursor:pointer}.galery .container #img[data-v-1811b336]{margin:auto;display:block;width:80%;max-width:700px}@media(max-width:700px){.galery .container #img[data-v-1811b336]{width:100%}}',""]),t.exports=r},242:function(t,e,n){"use strict";n.r(e);var r={methods:{abrirImagem:function(){for(var img=document.getElementsByClassName("images__item"),t=document.getElementById("myModal"),e=document.getElementById("img"),n=document.getElementsByClassName("close")[0],i=0;i<img.length;i++)img[i].addEventListener("click",(function(){(t.style.display="none")?(t.style.display="block",e.src=event.target.currentSrc):t.style.display="block"}));n.addEventListener("click",(function(){t.style.display="none"}))}}},o=(n(228),n(34)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"galery",attrs:{id:"galeria"}},[r("div",{staticClass:"container"},[r("h2",{staticClass:"title"},[t._v("GALERIA")]),t._v(" "),r("div",{staticClass:"images"},[r("div",{staticClass:"images__item"},[r("img",{attrs:{src:n(222),alt:"Imagem"},on:{click:t.abrirImagem}})]),t._v(" "),r("div",{staticClass:"images__item"},[r("img",{attrs:{src:n(223),alt:"Imagem"},on:{click:t.abrirImagem}})]),t._v(" "),r("div",{staticClass:"images__item"},[r("img",{attrs:{src:n(224),alt:"Imagem"},on:{click:t.abrirImagem}})]),t._v(" "),r("div",{staticClass:"images__item"},[r("img",{attrs:{src:n(225),alt:"Imagem"},on:{click:t.abrirImagem}})]),t._v(" "),r("div",{staticClass:"images__item"},[r("img",{attrs:{src:n(226),alt:"Imagem"},on:{click:t.abrirImagem}})]),t._v(" "),r("div",{staticClass:"images__item"},[r("img",{attrs:{src:n(227),alt:"Imagem"},on:{click:t.abrirImagem}})])]),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal",attrs:{id:"myModal"}},[n("span",{staticClass:"close"},[t._v("×")]),t._v(" "),n("div",{attrs:{id:"imageModal"}},[n("img",{attrs:{id:"img"}})])])}],!1,null,"1811b336",null);e.default=component.exports}}]);