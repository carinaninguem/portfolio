(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{111:function(t,e,r){"use strict";r.r(e);var o=r(20),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"justify-start flex md:justify-between items-center md:items-start md:flex-row"},[r("div",{staticClass:"flex flex-col text-white self-start"},[r("a",{staticClass:"text-xs md:text-base"},[t._v("aniracleitaoc@gmail.com")]),t._v(" "),r("a",{staticClass:"text-xs md:text-base"},[t._v("linkedin.com/in/carina-leitao")])]),t._v(" "),r("div",{staticClass:"flex flex-col text-white self-start"},[r("a",{staticClass:"text-xs md:text-base"},[t._v("behance.net/carina-leito")]),t._v(" "),r("a",{staticClass:"text-xs md:text-base"},[t._v("vimeo.com/carinaninguem")])])])])}],!1,null,null,null);e.default=component.exports},115:function(t,e,r){"use strict";var o=r(1),n=r(161);o.a.use(n.a)},157:function(t,e,r){var content=r(227);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(48).default)("56b15182",content,!0,{sourceMap:!1})},166:function(t,e,r){"use strict";r(26),r(36),r(44);var o=r(83),n=r(111),l={components:{Navbar:o.default,Bottom:n.default},created:function(){var t=this;this.$nuxt.$on("number",(function(data){t.number=data})),this.$nuxt.$on("background",(function(data){t.hasBackground=data}))},mounted:function(){this.setTitle()},watch:{$route:function(){this.hasBackground=!0,this.isActive=!1,this.setTitle()}},data:function(){return{title:"",head_title:"Home",number:"",isActive:!1,isHome:!0,hasBackground:!0}},methods:{setTitle:function(){var t;"index"!=this.$route.name?(t="projetos-id"!=this.$route.name&&"outros-id"!=this.$route.name?this.$route.name.replace("-"," "):this.$route.params.id.replace("-"," "),this.title=t.replace(/(^\w{1})|(\s+\w{1})/g,(function(t){return t.toUpperCase()})),this.head_title=this.title,this.isHome=!1):(this.title="",this.head_title="Home",this.isHome=!0)},handleSecMenu:function(){this.isActive=!this.isActive}},head:function(){return{title:this.head_title}}},m=(r(226),r(20)),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"h-screen p-4 md:p-8 lg:p-16 flex flex-col justify-between",class:{background:t.hasBackground}},[o("div",{staticClass:"justify-between flex"},[!1===t.isHome?o("h1",{staticClass:"text-custom__tx text-4xl"},[t._v("\n      "+t._s(t.title)+"\n    ")]):t._e(),t._v(" "),o("div",{staticClass:"flex flex-col items-end"},[!1===t.isHome?o("h1",{staticClass:"text-custom__tx text-4xl flex"},[!1===t.isHome?o("span",{class:{active:t.isActive},on:{click:t.handleSecMenu}},[!1===t.isActive?o("img",{staticClass:"secMenu",attrs:{src:r(221)}}):o("img",{staticClass:"secMenu",attrs:{src:r(222)}})]):t._e(),t._v("\n        "+t._s(t.number)+"\n      ")]):t._e(),t._v(" "),t.isActive?o("div",{staticClass:"flex bg-custom__bg border border-custom__border_c rounded-3xl px-16 py-24 mt-16 absolute z-10 right-14"},[o("Navbar")],1):t._e()])]),t._v(" "),o("Nuxt"),t._v(" "),o("Bottom")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Navbar:r(83).default,Bottom:r(111).default})},167:function(t,e,r){r(168),t.exports=r(169)},211:function(t,e,r){var content=r(212);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(48).default)("38dfa7e4",content,!0,{sourceMap:!1})},212:function(t,e,r){var o=r(47)(!1);o.push([t.i,'/*! tailwindcss v2.2.9 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */html{-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,"Segoe UI",Helvetica,Arial,"Apple Color Emoji","Segoe UI Emoji"}hr{height:0;color:inherit}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Consolas,"Liberation Mono",Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],button{-webkit-appearance:button}legend{padding:0}progress{vertical-align:baseline}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}fieldset,ol,ul{margin:0;padding:0}ol,ul{list-style:none}html{font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}body{font-family:inherit;line-height:inherit}*,:after,:before{box-sizing:border-box;border:0 solid}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder,textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:after,:before{--tw-border-opacity:1;border-color:rgba(229,231,235,var(--tw-border-opacity))}.static{position:static}.absolute{position:absolute}.right-14{right:3.5rem}.z-10{z-index:10}.float-left{float:left}.m-2{margin:.5rem}.m-3{margin:.75rem}.my-2{margin-top:.5rem;margin-bottom:.5rem}.mt-4{margin-top:1rem}.mt-5{margin-top:1.25rem}.mt-6{margin-top:1.5rem}.mt-8{margin-top:2rem}.mt-10{margin-top:2.5rem}.mt-16{margin-top:4rem}.mt-52{margin-top:13rem}.mr-2{margin-right:.5rem}.mr-5{margin-right:1.25rem}.mr-10{margin-right:2.5rem}.mr-16{margin-right:4rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.mb-16{margin-bottom:4rem}.ml-2{margin-left:.5rem}.ml-6{margin-left:1.5rem}.ml-32{margin-left:8rem}.flex{display:flex}.table{display:table}.hidden{display:none}.h-16{height:4rem}.h-32{height:8rem}.h-full{height:100%}.h-screen{height:100vh}.w-16{width:4rem}.w-32{width:8rem}.w-1\\/2{width:50%}.w-1\\/3{width:33.333333%}.w-3\\/12{width:25%}.w-4\\/12{width:33.333333%}.w-8\\/12{width:66.666667%}.w-11\\/12{width:91.666667%}.w-full{width:100%}.transform{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@-webkit-keyframes spin{to{transform:rotate(1turn)}}@keyframes spin{to{transform:rotate(1turn)}}@-webkit-keyframes ping{75%,to{transform:scale(2);opacity:0}}@keyframes ping{75%,to{transform:scale(2);opacity:0}}@-webkit-keyframes pulse{50%{opacity:.5}}@keyframes pulse{50%{opacity:.5}}@-webkit-keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}.cursor-pointer{cursor:pointer}.resize{resize:both}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.content-center{align-content:center}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.self-start{align-self:flex-start}.self-end{align-self:flex-end}.rounded-xl{border-radius:.75rem}.rounded-3xl{border-radius:1.5rem}.border{border-width:1px}.border-custom__border_c{--tw-border-opacity:1;border-color:rgba(255,156,108,var(--tw-border-opacity))}.border-opacity-0{--tw-border-opacity:0}.hover\\:border-opacity-100:hover{--tw-border-opacity:1}.bg-custom__bg{--tw-bg-opacity:1;background-color:rgba(2,2,2,var(--tw-bg-opacity))}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.px-16{padding-left:4rem;padding-right:4rem}.py-24{padding-top:6rem;padding-bottom:6rem}.pt-2{padding-top:.5rem}.pt-4{padding-top:1rem}.pt-5{padding-top:1.25rem}.pt-9{padding-top:2.25rem}.pt-16{padding-top:4rem}.pt-24{padding-top:6rem}.pt-52{padding-top:13rem}.pr-0{padding-right:0}.pr-2{padding-right:.5rem}.pr-5{padding-right:1.25rem}.pb-2{padding-bottom:.5rem}.pb-4{padding-bottom:1rem}.pl-2{padding-left:.5rem}.text-xs{font-size:.75rem;line-height:1rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-7xl{font-size:4.5rem;line-height:1}.text-white{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.text-red-400{--tw-text-opacity:1;color:rgba(248,113,113,var(--tw-text-opacity))}.text-custom__tx{--tw-text-opacity:1;color:rgba(255,156,108,var(--tw-text-opacity))}*,:after,:before{--tw-shadow:0 0 transparent;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,0.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent}.filter{--tw-blur:var(--tw-empty,/*!*/ /*!*/);--tw-brightness:var(--tw-empty,/*!*/ /*!*/);--tw-contrast:var(--tw-empty,/*!*/ /*!*/);--tw-grayscale:var(--tw-empty,/*!*/ /*!*/);--tw-hue-rotate:var(--tw-empty,/*!*/ /*!*/);--tw-invert:var(--tw-empty,/*!*/ /*!*/);--tw-saturate:var(--tw-empty,/*!*/ /*!*/);--tw-sepia:var(--tw-empty,/*!*/ /*!*/);--tw-drop-shadow:var(--tw-empty,/*!*/ /*!*/);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}@media (min-width:768px){.md\\:my-6{margin-top:1.5rem;margin-bottom:1.5rem}.md\\:block{display:block}.md\\:w-1\\/2{width:50%}.md\\:w-2\\/6{width:33.333333%}.md\\:w-4\\/6{width:66.666667%}.md\\:flex-row{flex-direction:row}.md\\:items-start{align-items:flex-start}.md\\:justify-start{justify-content:flex-start}.md\\:justify-center{justify-content:center}.md\\:justify-between{justify-content:space-between}.md\\:self-center{align-self:center}.md\\:p-8{padding:2rem}.md\\:pt-0{padding-top:0}.md\\:pr-10{padding-right:2.5rem}.md\\:pb-1{padding-bottom:.25rem}.md\\:pl-10{padding-left:2.5rem}.md\\:text-base{font-size:1rem;line-height:1.5rem}.md\\:text-3xl{font-size:1.875rem;line-height:2.25rem}.md\\:text-5xl{font-size:3rem;line-height:1}}@media (min-width:1024px){.lg\\:h-24{height:6rem}.lg\\:w-24{width:6rem}.lg\\:w-1\\/2{width:50%}.lg\\:p-16{padding:4rem}.lg\\:text-5xl{font-size:3rem;line-height:1}.lg\\:text-7xl{font-size:4.5rem;line-height:1}}@media (min-width:1280px){.xl\\:mt-0{margin-top:0}.xl\\:mr-5{margin-right:1.25rem}.xl\\:mb-0{margin-bottom:0}.xl\\:ml-5{margin-left:1.25rem}.xl\\:h-32{height:8rem}.xl\\:w-32{width:8rem}.xl\\:w-1\\/2,.xl\\:w-2\\/4{width:50%}.xl\\:w-2\\/6{width:33.333333%}.xl\\:w-4\\/6{width:66.666667%}.xl\\:flex-row{flex-direction:row}.xl\\:pr-0{padding-right:0}.xl\\:pr-16{padding-right:4rem}.xl\\:text-xl{font-size:1.25rem;line-height:1.75rem}.xl\\:text-4xl{font-size:2.25rem;line-height:2.5rem}.xl\\:text-5xl{font-size:3rem;line-height:1}}',""]),t.exports=o},213:function(t,e,r){var content=r(214);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(48).default)("f52d43e0",content,!0,{sourceMap:!1})},214:function(t,e,r){var o=r(47),n=r(155),l=r(215),m=r(216),d=r(217),c=r(218),f=r(219),h=r(220),x=o(!1),w=n(l),y=n(m),v=n(d),I=n(c),_=n(f),k=n(h);x.push([t.i,'@font-face{font-family:"montserrat-extra-light";src:url('+w+') format("truetype")}@font-face{font-family:"montserrat-medium";src:url('+y+') format("truetype")}@font-face{font-family:"montserrat-medium-italic";src:url('+v+') format("truetype")}@font-face{font-family:"montserrat-semi-bold";src:url('+I+') format("truetype")}@font-face{font-family:"new-york";src:url('+_+') format("truetype")}@font-face{font-family:"myriad-regular";src:url('+k+') format("truetype")}.extra_light{font-family:"montserrat-extra-light"}.medium{font-family:"montserrat-medium"}.medium_italic{font-family:"montserrat-medium-italic"}.semi_bold{font-family:"montserrat-semi-bold"}.york{font-family:"new-york"}.myriad{font-family:"myriad-regular"}',""]),t.exports=x},215:function(t,e,r){t.exports=r.p+"fonts/Montserrat-ExtraLight_1.d056d0b.ttf"},216:function(t,e,r){t.exports=r.p+"fonts/Montserrat-Medium_1.88fe7a2.ttf"},217:function(t,e,r){t.exports=r.p+"fonts/Montserrat-MediumItalic_1.eefe84d.ttf"},218:function(t,e,r){t.exports=r.p+"fonts/Montserrat-SemiBold_1.164d638.ttf"},219:function(t,e,r){t.exports=r.p+"fonts/NewYork.86e747d.otf"},220:function(t,e,r){t.exports=r.p+"fonts/MyriadPro-Regular.31fe6e6.otf"},221:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCIgdmlld0JveD0iMCAwIDY0IDY0IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA2NCA2NCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB4MT0iMTIiIHkxPSIyMSIgeDI9IjUyIiB5Mj0iMjEiLz4NCjxsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHgxPSIxMiIgeTE9IjMzIiB4Mj0iNTIiIHkyPSIzMyIvPg0KPGxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgeDE9IjEyIiB5MT0iNDUiIHgyPSI1MiIgeTI9IjQ1Ii8+DQo8L3N2Zz4NCg=="},222:function(t,e){t.exports="data:image/svg+xml;base64,IDxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkYXRhLW5hbWU9IkxheWVyIDEiIHZpZXdCb3g9IjAgMCA2NCA2NCI+PGxpbmUgeDE9IjkuMzciIHgyPSI1NC42MyIgeTE9IjkuMzciIHkyPSI1NC42MyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iNCIvPjxsaW5lIHgxPSI5LjM3IiB4Mj0iNTQuNjMiIHkxPSI1NC42MyIgeTI9IjkuMzciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjQiLz48L3N2Zz4="},226:function(t,e,r){"use strict";r(157)},227:function(t,e,r){var o=r(47),n=r(155),l=r(228),m=o(!1),d=n(l);m.push([t.i,'html{font-family:"montserrat-medium",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}body{background-color:#000}h1,h2,span{font-family:new-york}.title,a{font-family:montserrat-extra-light}h1,h2,p{--tw-text-opacity:1;color:rgba(255,156,108,var(--tw-text-opacity))}.secMenu{height:40px;cursor:pointer}.background{background:url('+d+");background-repeat:no-repeat;background-position:50%;background-size:cover}@media only screen and (max-width:1024px){.background{background:transparent}}",""]),t.exports=m},228:function(t,e,r){t.exports=r.p+"img/home.68b4662.jpg"},83:function(t,e,r){"use strict";r.r(e);r(223),r(36),r(44),r(149),r(81);var o={mounted:function(){var t=this;this.width=window.innerWidth,window.addEventListener("resize",this.resizeHandler),this.$on("hook:beforeDestroy",(function(){window.removeEventListener("resize",t.resizeHandler)}))},data:function(){return{width:0,menu_primary:["Sobre Mim","Projetos"],menu_secundary:[]}},methods:{resizeHandler:function(){this.width=window.innerWidth},stringuify:function(t){var map={a:"á|à|ã|â|À|Á|Ã|Â",e:"é|è|ê|É|È|Ê",i:"í|ì|î|Í|Ì|Î",o:"ó|ò|ô|õ|Ó|Ò|Ô|Õ",u:"ú|ù|û|ü|Ú|Ù|Û|Ü",c:"ç|Ç",n:"ñ|Ñ","":"-"};for(var pattern in map)t=t.replace(new RegExp(map[pattern],"g"),pattern).trim();return t.toLowerCase().replace(/ +(?= )/g,"").replace(/\s/g,"-")}}},n=r(20),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",[r("ul",[t._l(t.menu_primary,(function(e,i){return r("li",{key:e+i,staticClass:"flex items-end justify-end md:justify-start text-custom__tx my-2 md:my-6 p-2 border border-custom__border_c rounded-xl border-opacity-0 hover:border-opacity-100"},[r("nuxt-link",{staticClass:"flex",attrs:{to:"/"+t.stringuify(e)}},[r("span",{staticClass:"text-1xl md:text-3xl lg:text-5xl md:pb-1 pr-2 self-end"},[t._v("00"+t._s(i+1)+".\n        ")]),t._v(" "),r("h1",{staticClass:"pl-2 text-3xl md:text-5xl lg:text-7xl"},[t._v("\n          "+t._s(e)+"\n        ")])])],1)})),t._v(" "),t.width>640||0!=t.menu_secundary.length?r("ul",t._l(t.menu_secundary,(function(e,i){return r("li",{key:e+i,staticClass:"flex items-end text-custom__tx ml-32"},[r("nuxt-link",{staticClass:"flex",attrs:{to:"/"+t.stringuify(e)}},[r("h3",[t._v(t._s(e))])])],1)})),0):t._e()],2)])}),[],!1,null,null,null);e.default=component.exports}},[[167,13,3,14]]]);