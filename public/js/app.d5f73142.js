(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);v&&v(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var s=a[i];0!==r[s]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},i={app:0},r={app:0},o=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d0daef6":"4834b1e7","chunk-2d20f90b":"9ebe3346","chunk-2d210f3d":"b71b303d","chunk-3792cbb8":"90acf9ea","chunk-1e786969":"2be8dd01","chunk-3024aa30":"692e763d","chunk-342a3ee2":"99f2aa8b","chunk-419cb920":"747eaa42","chunk-551c4128":"9c8f6f2c","chunk-6ac52a38":"02066ea9","chunk-72b0010a":"53b7a93a","chunk-2d216214":"4700c1d8","chunk-2d216257":"256ee085","chunk-461b141f":"d60795fa"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-3792cbb8":1,"chunk-1e786969":1,"chunk-3024aa30":1,"chunk-342a3ee2":1,"chunk-419cb920":1,"chunk-551c4128":1,"chunk-6ac52a38":1,"chunk-72b0010a":1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise((function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-2d0daef6":"31d6cfe0","chunk-2d20f90b":"31d6cfe0","chunk-2d210f3d":"31d6cfe0","chunk-3792cbb8":"70162804","chunk-1e786969":"f95274f4","chunk-3024aa30":"7c238af7","chunk-342a3ee2":"f95274f4","chunk-419cb920":"f95274f4","chunk-551c4128":"f95274f4","chunk-6ac52a38":"f95274f4","chunk-72b0010a":"7c238af7","chunk-2d216214":"31d6cfe0","chunk-2d216257":"31d6cfe0","chunk-461b141f":"31d6cfe0"}[t]+".css",r=c.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===r))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===n||u===r)return e()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=e,v.onerror=function(e){var n=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete i[t],v.parentNode.removeChild(v),a(o)},v.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(v)})).then((function(){i[t]=0})));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(v);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",d.name="ChunkLoadError",d.type=n,d.request=i,a[1](d)}r[t]=void 0}};var v=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var v=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("Menu")],1)],1)},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-toolbar",{attrs:{dark:""}},[a("v-toolbar-title",[t._v("FullStoreck Welcome")]),a("v-spacer"),"ADMIN_ROL"===this.$store.state.rol||"ALMACENISTA_ROL"===this.$store.state.rol||"VENDEDOR_ROL"===this.$store.state.rol?[a("v-btn",{on:{click:function(e){return t.salir()}}},[a("v-btn-icon",[a("v-icon",[t._v("mdi-exit-to-app")])],1),t._v(" Salir ")],1)]:t._e()],2),a("v-app",[a("v-divider"),a("router-view"),"ADMIN_ROL"===this.$store.state.rol||"ALMACENISTA_ROL"===this.$store.state.rol||"VENDEDOR_ROL"===this.$store.state.rol?[a("v-navigation-drawer",{attrs:{app:"",permanent:"","expand-on-hover":"",navigation:"",dark:""}},[a("v-list",[a("v-list-item",{staticClass:"px-2"},[a("v-list-item-avatar",[a("v-img",{attrs:{src:"https://i.pinimg.com/originals/f0/dd/ec/f0ddec76cda8ee2756e663924856f81e.png"}})],1)],1),a("v-list-item",{attrs:{color:"blue",link:""}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(this.$store.state.email)+" ")]),a("v-list-item-subtitle",[t._v(" "+t._s(this.$store.state.nombre))]),a("v-list-item-subtitle",[t._v(" "+t._s(this.$store.state.rol))])],1)],1)],1),a("v-divider"),a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item",{attrs:{to:{name:"Home"}}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-home")])],1),a("v-list-item-title",[t._v("Inicio")])],1),"ADMIN_ROL"===this.$store.state.rol||"ALMACENISTA_ROL"===this.$store.state.rol?[a("v-list-group",[a("v-list-item",{attrs:{slot:"activator"},slot:"activator"},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-store")])],1),a("v-list-item-title",[t._v("Almacén")])],1),a("v-list-item",{attrs:{to:{name:"categorias"}}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-clipboard-list")])],1),a("v-list-item-title",[t._v("Categoria")])],1),a("v-list-item",{attrs:{to:{name:"articulos"}}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-view-list-outline")])],1),a("v-list-item-title",[t._v("Articulos")])],1)],1)]:t._e(),"ADMIN_ROL"===this.$store.state.rol||"ALMACENISTA_ROL"===this.$store.state.rol?[a("v-list-group",[a("v-list-item",{attrs:{slot:"activator"},slot:"activator"},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-shopping")])],1),a("v-list-item-title",[t._v("Compras")])],1),a("v-list-item",{attrs:{to:{name:"ingresos"}}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-store")])],1),a("v-list-item-title",[t._v("Ingresos")])],1),a("v-list-item",{attrs:{to:{name:"proveedores"}}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-account-group")])],1),a("v-list-item-title",[t._v("Proveedores")])],1)],1)]:t._e(),"ADMIN_ROL"===this.$store.state.rol||"VENDEDOR_ROL"===this.$store.state.rol?[a("v-list-group",[a("v-list-item",{attrs:{slot:"activator"},slot:"activator"},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-card-text")])],1),a("v-list-item-title",[t._v("Ventas")])],1),a("v-list-item",{attrs:{to:{name:"ventas"}}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-cart-arrow-up")])],1),a("v-list-item-title",[t._v("Ventas")])],1),a("v-list-item",{attrs:{to:{name:"cliente"}}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-clipboard-account")])],1),a("v-list-item-title",[t._v("Clientes")])],1)],1)]:t._e(),"ADMIN_ROL"===this.$store.state.rol?[a("v-list-group",[a("v-list-item",{attrs:{slot:"activator"},slot:"activator"},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-account-multiple")])],1),a("v-list-item-title",[t._v("Accesos")])],1),a("v-list-item",{attrs:{to:{name:"usuarios"}}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-account-group")])],1),a("v-list-item-title",[t._v("Usuarios")])],1)],1)]:t._e(),a("v-list-group",[a("v-list-item",{attrs:{slot:"activator"},slot:"activator"},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-feature-search")])],1),a("v-list-item-title",[t._v("Consultas")])],1),a("v-list-item",{attrs:{to:{name:"consultacompras"}}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-feature-search")])],1),a("v-list-item-title",[t._v("Consultas Compras")])],1),a("v-list-item",{attrs:{to:{name:"consultaventas"}}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-feature-search")])],1),a("v-list-item-title",[t._v("Consultas Ventas")])],1)],1)],2)],1)]:t._e()],2)],1)},s=[],c={data:function(){return{usurio:this.$store.state.email,estado:"",Nombre:this.$store.state.nombre}},created:function(){this.crearnombre()},methods:{crearnombre:function(){this.Nombre=this.$store.state.nombre,this.usurio=this.$store.state.email},salir:function(){this.$store.dispatch("setToken",""),this.$store.dispatch("Nombre",""),this.$store.dispatch("usuario",""),this.$store.dispatch("rol",""),this.$router.push("/login")}}},l=c,u=a("2877"),d=a("6544"),v=a.n(d),m=a("7496"),p=a("8336"),h=a("ce7e"),f=a("132d"),b=a("adda"),k=a("8860"),_=a("56b0"),g=a("da13"),w=a("8270"),x=a("5d23"),V=a("34c3"),y=a("f774"),C=a("2fa4"),$=a("71d9"),A=a("2a7f"),L=Object(u["a"])(l,o,s,!1,null,null,null),O=L.exports;v()(L,{VApp:m["a"],VBtn:p["a"],VDivider:h["a"],VIcon:f["a"],VImg:b["a"],VList:k["a"],VListGroup:_["a"],VListItem:g["a"],VListItemAvatar:w["a"],VListItemContent:x["a"],VListItemIcon:V["a"],VListItemSubtitle:x["b"],VListItemTitle:x["c"],VNavigationDrawer:y["a"],VSpacer:C["a"],VToolbar:$["a"],VToolbarTitle:A["a"]});var E={name:"App",components:{Menu:O},data:function(){return{}}},N=E,T=a("f6c4"),I=Object(u["a"])(N,i,r,!1,null,null,null),S=I.exports;v()(I,{VApp:m["a"],VMain:T["a"]});a("d3b7"),a("3ca3"),a("ddb0");var M=a("8c4f"),P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{app:"",dark:""}},[a("br"),a("br"),a("v-main",{attrs:{dark:""}},[a("v-card",{staticClass:"mx-auto mt-5",attrs:{width:"500"}},[a("v-card-title",[t._v("Login")]),a("v-card-text",{attrs:{v:""}},[a("v-text-field",{attrs:{required:"",rules:t.nameRules,label:"Username","prepend-icon":"mdi-account-circle"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{required:"",rules:t.password,label:"Password",type:t.showpasword?"text":"password","prepend-icon":"mdi-lock","append-icon":t.showpasword?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(e){t.showpasword=!t.showpasword}},model:{value:t.pass,callback:function(e){t.pass=e},expression:"pass"}})],1),a("v-divider"),t.errorM?a("v-flex",{staticClass:"red--text"},[t._v(" "+t._s(t.errorM)+" ")]):t._e(),a("v-divider"),a("v-card-actions",[a("v-btn",{attrs:{dark:""},on:{click:function(e){return t.ingresar()}}},[t._v("Iniciar")])],1)],1)],1),[a("v-footer",[a("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[a("v-card-title",{staticClass:"teal"},[a("strong",{staticClass:"subheading",attrs:{color:"blue"}},[t._v("Empresa dedicada a la venta de todo tipo de articulos!")]),a("v-spacer"),t._l(t.icons,(function(e){return a("v-btn",{key:e,staticClass:"mx-4",attrs:{blue:"",icon:""}},[a("v-icon",{attrs:{size:"24px"}},[t._v(" "+t._s(e)+" ")])],1)}))],2),a("v-card-text",{staticClass:"py-2 white--text text-center"},[t._v(" "+t._s((new Date).getFullYear())+" —"),a("strong",[t._v("FullStoreck")])])],1)],1)]],2)},R=[],D=a("bc3a"),j=a.n(D),F={name:"App",components:{},data:function(){return{nameRules:[function(t){return!!t||"Usuario es requerido"}],password:[function(t){return!!t||"La contraseña es rerequerida"}],pass:"",email:"",errorM:null,icons:["mdi-thumb-up","mdi-thumb-down","mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"],showpasword:!1}},methods:{ingresar:function(){var t=this;j.a.post("usuario/login",{email:this.email,password:this.pass}).then((function(e){t.$store.dispatch("setToken",e.data.token),t.$store.dispatch("Nombre",e.data.usuario.email),t.$store.dispatch("usuario",e.data.usuario.nombre),t.$store.dispatch("rol",e.data.usuario.rol),t.$router.push("/home")})).catch((function(e){console.log(e),400==e.response.status||200==e.response.status?t.errorM="El Username y / o Password son incorectas corigelas por favor":t.errorM="usted no puedo ingresar al sistema por problemas en el servidor "}))}}},B=F,q=(a("d6db"),a("b0af")),U=a("99d9"),H=a("0e8f"),G=a("553a"),J=a("8654"),W=Object(u["a"])(B,P,R,!1,null,null,null),z=W.exports;v()(W,{VApp:m["a"],VBtn:p["a"],VCard:q["a"],VCardActions:U["a"],VCardText:U["b"],VCardTitle:U["c"],VDivider:h["a"],VFlex:H["a"],VFooter:G["a"],VIcon:f["a"],VMain:T["a"],VSpacer:C["a"],VTextField:J["a"]});var K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{staticClass:"mx-auto text-center",attrs:{color:"dark",dark:"","max-width":"1900"}},[a("svg",{attrs:{dark:"",viewBox:"0 0 250 30",xmlns:"http://www.w3.org/2000/svg"}},[a("text",{staticClass:"small",attrs:{x:"20",y:"15"}},[t._v("Welcome")]),a("text",{staticClass:"Rrrrr",attrs:{x:"65",y:"25"}},[t._v("FullStarck!")])]),a("v-card-text",[a("v-sheet",{attrs:{color:"rgba(0, 0, 0, .12)"}},[a("v-sparkline",{attrs:{value:t.value,color:"white",height:"150",padding:"14","stroke-linecap":"round",smooth:""},scopedSlots:t._u([{key:"label",fn:function(e){return[t._v(" $"+t._s(e.value)+" ")]}}])})],1)],1),a("v-card-text",[a("div",{staticClass:"text-h4 font-weight-thin"},[t._v(" ventas ")])]),a("v-divider"),a("v-card-actions",{staticClass:"justify-center"},[a("v-btn",{attrs:{block:"",text:""}},[t._v(" Genear reporte ")])],1)],1),a("br"),a("br")],1)},Y=[],Q=(a("d81d"),{data:function(){return{value:[1e3,1500,1700,2e3,1400]}},created:function(){this.listarVentas()},methods:{listarVentas:function(){var t=[],e={headers:{token:this.$store.state.token}};j.a.get("Venta",e).then((function(e){t=e.data.ventas,t.map((function(t){this.value.push({text:t.total})}))})).catch((function(t){console.log(t.response)}))}}}),X=Q,Z=(a("cccb"),a("8dd9")),tt=a("7f2e"),et=Object(u["a"])(X,K,Y,!1,null,null,null),at=et.exports;v()(et,{VBtn:p["a"],VCard:q["a"],VCardActions:U["a"],VCardText:U["b"],VDivider:h["a"],VSheet:Z["a"],VSparkline:tt["a"]}),n["a"].use(M["a"]);var nt=[{path:"/",name:"Login",component:z},{path:"/login",name:"Login",component:z},{path:"/home",name:"Home",component:at},{path:"/compras",name:"compras",component:function(){return a.e("chunk-2d20f90b").then(a.bind(null,"b3bf"))}},{path:"/ingresos",name:"ingresos",component:function(){return Promise.all([a.e("chunk-3792cbb8"),a.e("chunk-3024aa30")]).then(a.bind(null,"c9d1"))}},{path:"/proveedores",name:"proveedores",component:function(){return Promise.all([a.e("chunk-3792cbb8"),a.e("chunk-551c4128")]).then(a.bind(null,"28a7"))}},{path:"/ventas",name:"ventas",component:function(){return Promise.all([a.e("chunk-3792cbb8"),a.e("chunk-72b0010a")]).then(a.bind(null,"29b9"))}},{path:"/clientes",name:"cliente",component:function(){return Promise.all([a.e("chunk-3792cbb8"),a.e("chunk-1e786969")]).then(a.bind(null,"d2a1"))}},{path:"/usuarios",name:"usuarios",component:function(){return Promise.all([a.e("chunk-3792cbb8"),a.e("chunk-419cb920")]).then(a.bind(null,"af8c"))}},{path:"/consultacompras",name:"consultacompras",component:function(){return a.e("chunk-2d0daef6").then(a.bind(null,"6e5f"))}},{path:"/consultaventas",name:"consultaventas",component:function(){return a.e("chunk-2d210f3d").then(a.bind(null,"b9a1"))}},{path:"/articulos",name:"articulos",component:function(){return Promise.all([a.e("chunk-3792cbb8"),a.e("chunk-342a3ee2")]).then(a.bind(null,"2714"))}},{path:"/categorias",name:"categorias",component:function(){return Promise.all([a.e("chunk-3792cbb8"),a.e("chunk-6ac52a38")]).then(a.bind(null,"5f99"))}}],it=new M["a"]({mode:"history",base:"/",routes:nt}),rt=it,ot=a("2f62");n["a"].use(ot["a"]);var st=new ot["a"].Store({state:{token:"",nombre:"",email:"",rol:""},mutations:{setToken:function(t,e){t.token=e},Nombre:function(t,e){t.nombre=e},usuario:function(t,e){t.email=e},rol:function(t,e){t.rol=e}},actions:{setToken:function(t,e){t.commit("setToken",e)},Nombre:function(t,e){t.commit("Nombre",e)},usuario:function(t,e){t.commit("usuario",e)},rol:function(t,e){t.commit("rol",e)}},modules:{}}),ct=a("f309");n["a"].use(ct["a"]);var lt=new ct["a"]({});n["a"].config.productionTip=!1,j.a.defaults.baseURL="https://fullstoeck2067725.herokuapp.com/api/",new n["a"]({router:rt,store:st,vuetify:lt,render:function(t){return t(S)}}).$mount("#app"),rt.beforeEach((function(t,e,a){st.state.token||"/login"==t.path?a():a("/login")}))},"5ced":function(t,e,a){},cccb:function(t,e,a){"use strict";a("5ced")},d6db:function(t,e,a){"use strict";a("e67a")},e67a:function(t,e,a){}});
//# sourceMappingURL=app.d5f73142.js.map