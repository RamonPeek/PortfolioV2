(function(t){function e(e){for(var a,o,r=e[0],c=e[1],u=e[2],m=0,p=[];m<r.length;m++)o=r[m],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},s=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"08ed":function(t,e,n){},"0cc1":function(t,e,n){},1388:function(t,e,n){},"305e":function(t,e,n){"use strict";var a=n("4c50"),i=n.n(a);i.a},"332c":function(t,e,n){"use strict";var a=n("0cc1"),i=n.n(a);i.a},"3da0":function(t,e,n){"use strict";var a=n("08ed"),i=n.n(a);i.a},"4c50":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-app",[n("router-view")],1)],1)},s=[],o=(n("5c0b"),n("2877")),r=n("6544"),c=n.n(r),u=n("7496"),l={},m=Object(o["a"])(l,i,s,!1,null,null,null),p=m.exports;c()(m,{VApp:u["a"]});var d=n("f309");a["a"].use(d["a"]);var v=new d["a"]({}),_=n("8c4f"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"background"},[n("div",{staticClass:"top_navigation_container"},[n("TopNavigationComponent")],1),n("div",{staticClass:"content_container",attrs:{id:"site_container"}},[n("div",{staticClass:"home"},[n("HomeComponent",{attrs:{id:"HOME"}})],1),n("div",{staticClass:"about_component_container"},[n("div",{staticClass:"about_component"},[n("AboutComponent",{attrs:{id:"ABOUT_ME"}})],1)]),n("div",{staticClass:"projects_component_container"},[n("div",{staticClass:"projects_component"},[n("ProjectsComponent",{attrs:{id:"PROJECTS"}})],1)])])])},f=[],h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"placeholder_space"}),n("div",{staticClass:"profile_picture_container"}),n("p",{staticClass:"name_title"},[t._v(" Ramon Peek ")]),n("p",{staticClass:"function_under_title"},[t._v(" Software Engineer ")]),n("div",{staticClass:"download_resume"},[n("p",{staticClass:"download_resume_text"},[t._v("Download Resume")])]),n("div",{staticClass:"placeholder"})])}],C={name:"HomeComponent",components:{},data:function(){return{}}},y=C,j=(n("a8c8"),Object(o["a"])(y,h,g,!1,null,"2b9ffa29",null)),x=j.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("p",{staticClass:"component_title"},[t._v("About me")]),t._m(0),n("div",{staticClass:"hobbies_container"},t._l(t.hobbies,(function(e){return n("v-card",{key:e.index,staticClass:"hobby_item_container"},[n("div",{staticClass:"hobby_item_thumbnail_container"},[n("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:e.thumbnail}}),n("p",[t._v(t._s(e.text))])])])})),1)])},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about_description_container"},[n("p",{staticClass:"about_description"},[t._v(" Hi, my name is Ramon. I am a Dutch student following the Delta-program (IT & Software Engineering) at Fontys Hogescholen, Eindhoven. I have been interested in IT and programming in general since I was about twelve years old. I built my first computer when I was in my last year of primary school and I have broadened my experience since then to the software-sector. ")])])}],I={name:"AboutComponent",components:{},data:function(){return{hobbies:[{title:"Marvel/Avengers",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis tempus mauris, ut placerat nisl aliquam euismod. Nam urna ex, pharetra nec nulla vitae, elementum cursus nisl. Nam eget ipsum scelerisque, bibendum orci et, auctor nunc. Morbi at sodales dui, sed iaculis lacus. Fusce suscipit, diam ut bibendum luctus, neque sapien rutrum lectus, quis dignissim ex sapien a urna.",thumbnail:"/images/hobbies/marvel_avengers.jpg"},{title:"Gaming",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis tempus mauris, ut placerat nisl aliquam euismod. Nam urna ex, pharetra nec nulla vitae, elementum cursus nisl. Nam eget ipsum scelerisque, bibendum orci et, auctor nunc. Morbi at sodales dui, sed iaculis lacus. Fusce suscipit, diam ut bibendum luctus, neque sapien rutrum lectus, quis dignissim ex sapien a urna.",thumbnail:"/images/hobbies/games.jpg"},{title:"Tech",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis tempus mauris, ut placerat nisl aliquam euismod. Nam urna ex, pharetra nec nulla vitae, elementum cursus nisl. Nam eget ipsum scelerisque, bibendum orci et, auctor nunc. Morbi at sodales dui, sed iaculis lacus. Fusce suscipit, diam ut bibendum luctus, neque sapien rutrum lectus, quis dignissim ex sapien a urna.",thumbnail:"/images/hobbies/tech.jpg"}]}}},S=I,P=(n("3da0"),n("b0af")),E=Object(o["a"])(S,w,O,!1,null,"700d65c8",null),T=E.exports;c()(E,{VCard:P["a"]});var k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top_navigation"},t._l(t.menuItems,(function(e){return n("div",{key:e.index},[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:e.componentId,expression:"menuItem.componentId"}],staticClass:"top_navigation_item",attrs:{href:"#"}},[t._v(t._s(e.text))])])})),0)},q=[],M={name:"TopNavigationComponent",data:function(){return{menuItems:[{componentId:"#HOME",text:"Home"},{componentId:"#ABOUT_ME",text:"About me"},{componentId:"#PROJECTS",text:"Projects"},{componentId:"#SKILLS",text:"Skills"},{componentId:"#CONTACT",text:"Contact"}]}},methods:{}},N=M,A=(n("de47"),Object(o["a"])(N,k,q,!1,null,"3a4cdc07",null)),H=A.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"projects"},[n("p",{staticClass:"component_title"},[t._v("Projects")]),n("p",{staticClass:"component_under_title"},[t._v("Click on the tiles to expand")]),t._l(t.projects,(function(e){return n("div",{key:e.index,staticClass:"project_container"},[n("img",{staticClass:"project_thumbnail",attrs:{src:e.thumbnail}}),n("div",{staticClass:"project_content"},[n("p",{staticClass:"project_title"},[t._v(t._s(e.title))]),n("p",{staticClass:"project_state"},[t._v(t._s(e.state))])]),n("div",{staticClass:"project_links_container"},[n("v-btn",{staticClass:"project_link_button",attrs:{tile:"",color:"primary"}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-earth")]),t._v(" View online ")],1),n("v-btn",{staticClass:"project_link_button",attrs:{tile:"",color:"secondary"}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-github")]),t._v(" Github ")],1)],1)])})),n("div",{staticClass:"toggle_project_display_container"},[t._v(" Show all ")])],2)},D=[],L={name:"ProjectsComponent",components:{},data:function(){return{projects:[{title:"PSV Swimming Prototype",thumbnail:"https://i.imgur.com/lPGPlml.png",state:"Finished"},{title:"Smart Light (Strijp S)",thumbnail:"https://i.imgur.com/BD3uZyO.png",state:"Implemented in OpenSource"},{title:"Digital Excellence",thumbnail:"https://i.imgur.com/JNcBOQY.png",state:"Released beta"},{title:"TamaCoachee",thumbnail:"https://i.imgur.com/44GTOeD.png",state:"Finished"}]}}},F=L,R=(n("332c"),n("8336")),V=n("132d"),B=Object(o["a"])(F,$,D,!1,null,"31e41250",null),J=B.exports;c()(B,{VBtn:R["a"],VIcon:V["a"]});var G={name:"Home",components:{TopNavigationComponent:H,HomeComponent:x,AboutComponent:T,ProjectsComponent:J}},U=G,K=(n("305e"),Object(o["a"])(U,b,f,!1,null,"0224b3c5",null)),Q=K.exports;a["a"].use(_["a"]);var Y=[{path:"/",name:"Landing",component:Q}],Z=new _["a"]({mode:"history",base:"/",routes:Y}),z=Z,W=n("f13c"),X=n.n(W);a["a"].config.productionTip=!1,a["a"].use(X.a,{container:"#site_container",duration:700,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),new a["a"]({vuetify:v,router:z,render:function(t){return t(p)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),i=n.n(a);i.a},"6c35":function(t,e,n){},"9c0c":function(t,e,n){},a8c8:function(t,e,n){"use strict";var a=n("6c35"),i=n.n(a);i.a},de47:function(t,e,n){"use strict";var a=n("1388"),i=n.n(a);i.a}});
//# sourceMappingURL=app.81119ccb.js.map