(window.webpackJsonp=window.webpackJsonp||[]).push([[10,4,6],{229:function(t,e,o){"use strict";o.r(e);var r={props:{cl:String}},l=o(20),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("svg",{class:t.cl,attrs:{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 324.25 8.5"}},[o("defs",[o("style",[t._v("\n      .cls-1 {\n        fill: none;\n        stroke: #fcd3a8;\n        stroke-miterlimit: 10;\n        stroke-width: 0.5px;\n      }\n      .cls-2 {\n        fill: #fcd3a8;\n      }\n    ")])]),t._v(" "),o("path",{staticClass:"cls-1",attrs:{d:"M0,4.33H316.21",transform:"translate(0 -0.08)"}}),t._v(" "),o("circle",{staticClass:"cls-2",attrs:{cx:"320",cy:"4.25",r:"2.5"}}),t._v(" "),o("circle",{staticClass:"cls-1",attrs:{cx:"320",cy:"4.25",r:"4"}})])}),[],!1,null,null,null);e.default=component.exports},230:function(t,e,o){var content=o(233);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(48).default)("287d3e78",content,!0,{sourceMap:!1})},232:function(t,e,o){"use strict";o(230)},233:function(t,e,o){var r=o(47)(!1);r.push([t.i,".mobileHide[data-v-28b7cadb]{display:none}@media (min-width:768px){.mobileHide[data-v-28b7cadb]{display:block}}",""]),t.exports=r},234:function(t,e,o){"use strict";o.r(e);var r={components:{Hsvg:o(229).default},props:{title:String,category:String,description:String,thumb:Array,slug:String}},l=(o(232),o(20)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nuxt-link",{staticClass:"\n    pt-10\n    md:pt-3\n    pb-3\n    pl-3\n    flex\n    w-full\n    border\n    border-custom__border_c\n    rounded-xl\n    border-opacity-0\n    hover:border-opacity-100\n  ",attrs:{to:"/projetos/"+t.slug}},[o("div",{staticClass:"flex flex-col justify-center w-8/12"},[o("p",[t._v(t._s(t.category))]),t._v(" "),o("Hsvg",{attrs:{cl:"w-11/12"}}),t._v(" "),o("p",{staticClass:"semi_bold"},[t._v(t._s(t.title))]),t._v(" "),o("p",[t._v(t._s(t.description))])],1),t._v(" "),o("div",{staticClass:"flex justify-end w-4/12"},t._l(t.thumb,(function(e,i){return o("img",{key:t.slug+i,staticClass:"w-16 lg:w-24 xl:w-32 h-16 lg:h-24 xl:h-32 ml-6",class:{mobileHide:0!=i},attrs:{src:e,alt:t.slug}})})),0)])}),[],!1,null,"28b7cadb",null);e.default=component.exports;installComponents(component,{Hsvg:o(229).default})},235:function(t,e,o){var content=o(237);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(48).default)("10f19e0a",content,!0,{sourceMap:!1})},236:function(t,e,o){"use strict";o(235)},237:function(t,e,o){var r=o(47)(!1);r.push([t.i,".active[data-v-77aab696]{opacity:.5}.projects_photo[data-v-77aab696]{padding-right:2rem;padding-top:2rem}.projects_videos[data-v-77aab696]{position:relative;overflow-x:scroll;overflow-y:hidden}.scroller[data-v-77aab696]{scrollbar-color:#000 #ff9c6c;scrollbar-width:thin}[data-v-77aab696]::-webkit-scrollbar{height:12px;background:#ff9c6c}[data-v-77aab696]::-webkit-scrollbar-thumb{background:#000;height:5px;border-radius:1ex;border:2px solid #ff9c6c;outline:2px solid #ff9c6c;outline-offset:-2px}[data-v-77aab696]::-webkit-scrollbar-corner{background:#000}",""]),t.exports=r},244:function(t,e,o){"use strict";o.r(e);var r=o(6),l=(o(46),o(13),o(28),o(33),o(37),o(234),{mounted:function(){var t=this;this.windowWidth=window.innerWidth,this.width=this.$refs.tamanho.clientWidth,window.addEventListener("resize",this.resizeHandler),this.$on("hook:beforeDestroy",(function(){window.removeEventListener("resize",t.resizeHandler)}))},data:function(){return{entry_id:this.$route.params.id,projeto:[],next_projeto:[],title:"",active_el:0,width:"",videos_key:0,windowWidth:""}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.e(1).then(o.t.bind(null,239,3)).then((function(t){return t.default||t}));case 2:t.projeto=e.sent;case 3:case"end":return e.stop()}}),e)})))()},computed:{getProjeto:function(){var t=this;return this.projeto.filter((function(e,i){if(e.projeto.slug===t.entry_id)return t.$nuxt.$emit("title",e.projeto.slug),t.$nuxt.$emit("number",e.id),t.$nuxt.$emit("background",!1),i+1>t.projeto.length-1?t.next_projeto=t.projeto[0]:t.next_projeto=t.projeto[i+1],e}))}},methods:{activate:function(t){this.active_el=t},resizeHandler:function(){this.windowWidth=window.innerWidth,this.width=this.$refs.tamanho.clientWidth,this.videos_key+=1}}}),c=(o(236),o(20)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"tamanho",staticClass:"flex md:flex-row flex-col mb-16"},t._l(t.getProjeto,(function(e){return o("div",{key:e.id,staticClass:"w-full pt-24"},[o("img",{staticClass:"w-full",attrs:{src:e.projeto.main_image,alt:e.projeto.slug}}),t._v(" "),o("div",{staticClass:"flex pt-16 lg:pt-52 flex-col xl:flex-row"},[o("div",{staticClass:"w-full xl:w-1/2 xl:pr-16"},[o("h3",{staticClass:"text-md xl:text-xl text-custom__tx"},[t._v("\n          "+t._s(e.projeto.type)+"\n        ")]),t._v(" "),o("h1",{staticClass:"text-4xl xl:text-5xl"},[t._v(t._s(e.projeto.title))]),t._v(" "),t._l(e.projeto.description,(function(desc,i){return o("p",{key:"desc"+i,staticClass:"mt-8"},[t._v("\n          "+t._s(desc)+"\n        ")])}))],2),t._v(" "),o("div",{staticClass:"w-full xl:w-1/2 mt-8 xl:mt-0"},[o("img",{staticClass:"w-full",attrs:{src:e.projeto.description_image,alt:e.projeto.slug}})])]),t._v(" "),o("div",{staticClass:"flex pt-16 lg:pt-52 flex-col xl:flex-row"},[o("div",{staticClass:"w-full xl:w-2/6 pr-0 xl:pr-16"},[o("h3",{staticClass:"text-4xl york text-custom__tx"},[t._v(".palavras-chave")]),t._v(" "),o("div",{staticClass:"mt-5 flex"},[o("div",{},t._l(e.projeto.keywords.slice(0,Math.ceil(e.projeto.keywords.length/2)),(function(e){return o("p",{key:e,staticClass:"mr-5"},[t._v("\n              - "+t._s(e)+"\n            ")])})),0),t._v(" "),o("div",{},[o("div",{},t._l(e.projeto.keywords.slice(Math.ceil(e.projeto.keywords.length/2)),(function(e){return o("p",{key:e},[t._v("\n                - "+t._s(e)+"\n              ")])})),0)])]),t._v(" "),o("div",{staticClass:"w-full mt-10"},t._l(e.projeto.colors,(function(t){return o("img",{key:t,staticClass:"w-1/3 float-left pt-5 pr-5",attrs:{src:t,alt:t}})})),0)]),t._v(" "),o("div",{staticClass:"w-full xl:w-4/6 mt-16 xl:mt-0"},[o("img",{staticClass:"w-full",attrs:{src:e.projeto.keywords_image,alt:e.projeto.slug}})])]),t._v(" "),!0===e.projeto.fotografia_active||!0===e.projeto.design_active||!0===e.projeto.videos_active?o("div",{staticClass:"filters mt-52"},[o("ul",{staticClass:"flex"},[!0===e.projeto.fotografia_active||!0===e.projeto.design_active||!0===e.projeto.videos_active?o("li",{staticClass:"mr-2 xl:mr-5",class:{active:0==t.active_el},on:{click:function(e){return t.activate(0)}}},[o("h1",{staticClass:"cursor-pointer york text-2xl xl:text-4xl"},[t._v("Todos .")])]):t._e(),t._v(" "),!0===e.projeto.design_active?o("li",{staticClass:"ml-2 xl:ml-5 mr-2 xl:mr-5",class:{active:1==t.active_el},on:{click:function(e){return t.activate(1)}}},[o("h1",{staticClass:"cursor-pointer york text-2xl xl:text-4xl"},[t._v("Design .")])]):t._e(),t._v(" "),!0===e.projeto.videos_active&&!0===e.projeto.fotografia_active?o("li",{staticClass:"ml-2 xl:ml-5",class:{active:2==t.active_el},on:{click:function(e){return t.activate(2)}}},[o("h1",{staticClass:"cursor-pointer york text-2xl xl:text-4xl"},[t._v("\n            Fotografia & Videos\n          ")])]):t._e(),t._v(" "),!0===e.projeto.videos_active&&!1===e.projeto.fotografia_active?o("li",{staticClass:"ml-2 xl:ml-5",class:{active:2==t.active_el},on:{click:function(e){return t.activate(2)}}},[o("h1",{staticClass:"cursor-pointer york text-2xl xl:text-4xl"},[t._v("Videos")])]):t._e(),t._v(" "),!0===e.projeto.fotografia_active&&!1===e.projeto.videos_active?o("li",{staticClass:"ml-2 xl:ml-5",class:{active:2==t.active_el},on:{click:function(e){return t.activate(2)}}},[o("h1",{staticClass:"cursor-pointer york text-2xl xl:text-4xl"},[t._v("Fotografia")])]):t._e()])]):t._e(),t._v(" "),0==t.active_el||1==t.active_el?o("div",t._l(e.projeto.design,(function(image){return o("img",{key:image,staticClass:"w-full pt-16",attrs:{src:image,alt:image}})})),0):t._e(),t._v(" "),0==t.active_el||2==t.active_el?o("div",[o("div",{staticClass:"w-full flex flex-col xl:flex-row items-start"},[o("div",{staticClass:"w-full xl:w-2/4 xl:pr-0 mr-10"},[!0===e.projeto.fotografia_active&&!0===e.projeto.videos_active?o("h1",{staticClass:"york text-2xl xl:text-4xl pt-52"},[t._v("\n            .Fotografia e Videos\n          ")]):t._e(),t._v(" "),!0===e.projeto.fotografia_active||!0===e.projeto.videos_active?o("p",{staticClass:"mt-6"},[t._v("\n            Para acompanhar a comunicação e lançamento da marca, produzi\n            alguns conteúdos quer de fotografia quer de vídeo.\n          ")]):t._e(),t._v(" "),!0===e.projeto.fotografia_active||!0===e.projeto.videos_active?o("p",{staticClass:"mt-6 mb-6 xl:mb-0"},[t._v("\n            Ver projeto no\n            "),o("a",{attrs:{href:e.projeto.behance,target:"_blank"}},[t._v("Behance →")])]):t._e()]),t._v(" "),!0===e.projeto.videos_active?o("div",{staticClass:"w-full xl:w-2/4 flex projects_videos scroller pt-16"},t._l(e.projeto.videos,(function(e){return o("div",{key:e+t.videos_key,staticClass:"w-full mr-16"},[t.windowWidth>1024?o("vimeo-player",{ref:"player",refInFor:!0,attrs:{"video-id":e,"player-width":t.width/2,"player-height":"auto"}}):o("vimeo-player",{ref:"player",refInFor:!0,attrs:{"video-id":e,"player-width":t.width,"player-height":"auto"}})],1)})),0):t._e()]),t._v(" "),!0===e.projeto.videos_active?o("div",{staticClass:"controls flex w-full justify-end mt-4"},[t._m(0,!0)]):t._e(),t._v(" "),!0===e.projeto.fotografia_active?o("div",{staticClass:"pt-16 flex flex-wrap"},t._l(e.projeto.fotografia,(function(image){return o("div",{key:image,staticClass:"w-1/3 projects_photo"},[o("img",{staticClass:"w-full",attrs:{src:image,alt:image}})])})),0):t._e()]):t._e(),t._v(" "),o("h1",{staticClass:"cursor-pointer york text-2xl xl:text-4xl mt-48"},[t._v("\n      Ver Mais Projetos\n    ")]),t._v(" "),o("div",{staticClass:"block sm:flex mt-0 md:mt-6"},t._l(t.projeto,(function(e){return o("nuxt-link",{key:e.id,staticClass:"\n          flex flex-col\n          items-start\n          sm:items-center\n          mr-10\n          p-3\n          border\n          border-custom__border_c\n          rounded-xl\n          border-opacity-0\n          hover:border-opacity-100\n        ",attrs:{to:"/projetos/"+e.projeto.slug}},[o("div",{},[o("img",{staticClass:"w-16 lg:w-24 xl:w-32 h-16 lg:h-24 xl:h-32",attrs:{src:e.projeto.thumb[0],alt:e.projeto.thumb[0]}})]),t._v(" "),o("div",{staticClass:"mt-2"},[o("p",{staticClass:"semi_bold"},[t._v(t._s(e.projeto.title.split("-")[0]))])])])})),1)])})),0)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"xl:w-2/4 w-full flex justify-end"},[o("h1",{staticClass:"text-custom__tx"},[t._v("Scroll")])])}],!1,null,"77aab696",null);e.default=component.exports}}]);