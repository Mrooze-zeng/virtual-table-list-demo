(function(t){function e(e){for(var o,r,l=e[0],c=e[1],u=e[2],s=0,h=[];s<l.length;s++)r=l[s],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,l=1;l<n.length;l++){var c=n[l];0!==a[c]&&(o=!1)}o&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},a={app:0},i=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/virtual-table-list-demo/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("9085")},"31ce":function(t,e,n){"use strict";n("45ee")},"45ee":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("cn-table",{attrs:{dataSource:t.dataSource,columns:t.columns},on:{boundaryTop:t.handleBoundaryTop,boundaryBottom:t.handleBoundaryBottom},scopedSlots:t._u([{key:"header",fn:function(e){return[n(e.column.slot.header,t._b({tag:"component",attrs:{data:t.dataSource,updateCol:t.updateCol,updateRow:t.updateRow}},"component",e,!1))]}},{key:"body",fn:function(e){return[n(e.column.slot.body,t._b({tag:"component",attrs:{updateCol:t.updateCol,updateRow:t.updateRow}},"component",e,!1))]}},{key:"loading",fn:function(){return[n("div",{staticClass:"lds-ellipsis"},[n("div"),n("div"),n("div"),n("div")])]},proxy:!0}])})],1)},i=[],r=n("5530"),l=n("2909"),c=(n("d81d"),n("99af"),n("c46f")),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"cnTable",staticClass:"cn-table"},[n("div",{ref:"headerStaticTable",staticClass:"cn-table-fixed-header",on:{scroll:function(e){return e.preventDefault(),t.handleBodyScrollLeft.apply(null,arguments)}}},[n("cn-table-header",{attrs:{columns:t.sortFixedColumns},scopedSlots:t._u([{key:"header",fn:function(e){return[t._t("header",null,null,e)]}}],null,!0)}),n("cn-table-body",{ref:"cnTableBody",attrs:{columns:t.sortFixedColumns,dataSource:t.dataSource,onScroll:t.handleTableScroll},scopedSlots:t._u([{key:"body",fn:function(e){return[t._t("body",null,null,e)]}}],null,!0)})],1),n("div",{ref:"leftStaticTable",staticClass:"table-fixed-left",style:{width:t.staticWidth}},[n("cn-table-header",{attrs:{columns:t.sortFixedColumns},scopedSlots:t._u([{key:"header",fn:function(e){return[t._t("header",null,null,e)]}}],null,!0)}),n("cn-table-body",{ref:"fixedBody",attrs:{columns:t.sortFixedColumns,dataSource:t.dataSource,onScroll:t.handleTableScroll},scopedSlots:t._u([{key:"body",fn:function(e){return[t._t("body",null,null,e)]}}],null,!0)})],1),t.isLoading?t._t("loading"):t._e()],2)},d=[],s=(n("4de4"),n("c7cd"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"cn-table-header"},[n("colgroup",t._l(t.columns,(function(t,e){return n("col",{key:e,attrs:{width:t.width||""}})})),0),n("thead",[n("tr",t._l(t.columns,(function(e){return n("th",{key:e.name},[e.slot?t._t("header",null,{column:e}):n("span",[t._v(t._s(e.title))])],2)})),0)])])}),h=[],f={name:"cn-table-header",props:{columns:{type:Array,default:function(){return[]}}},mounted:function(){}},p=f,y=n("2877"),m=Object(y["a"])(p,s,h,!1,null,null,null),b=m.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"cnTableBody",staticClass:"cn-table-body",on:{scroll:t.handleBodyScrollTop}},[n("div",{ref:"phantom",staticClass:"cn-table-body-phantom",style:{height:t.phantomHeight}}),n("table",{style:{transform:t.transform}},[n("colgroup",t._l(t.columns,(function(t,e){return n("col",{key:e,attrs:{width:t.width||""}})})),0),n("tbody",t._l(t.visibleData,(function(e,o){return n("tr",{key:o},t._l(t.columns,(function(o){return n("td",{key:o.key},[o.slot?t._t("body",null,{data:e,column:o}):n("span",[t._v(" "+t._s(e[o.key])+" ")])],2)})),0)})),0)])])},g=[],S=(n("fb6a"),{name:"cn-table-body",props:{columns:{type:Array,default:function(){return[]}},dataSource:{type:Array,default:function(){return[]}},onScroll:{type:Function,default:function(){}}},data:function(){return{start:0,end:1,itemHeight:0,visibleCount:0,transform:""}},computed:{visibleData:function(){return this.dataSource.slice(Math.max(this.start,0),Math.min(this.end,this.dataSource.length))},phantomHeight:function(){return this.dataSource.length*this.itemHeight+"px"}},methods:{handleBodyScrollTop:c["a"].throttle((function(t){var e=t.target.scrollTop;this.onScroll(e,t.target,this.itemHeight),this.setUpPositionWithBuf(e,this.visibleCount)}),0,{trailing:!0}),setUpPositionWithBuf:function(t,e){var n=Math.floor(t/this.itemHeight),o=0;n>=e?(o=this.itemHeight*(n-e),this.start=n-e):this.start=0,this.transform="translate3d(0,".concat(o,"px,0)"),this.end=n+this.visibleCount+e},setUpPositionNormal:function(t){var e=Math.floor(t/this.itemHeight),n=e*this.itemHeight;this.start=e,this.end=e+this.visibleCount,this.transform="translate3d(0,".concat(n,"px,0)")}},mounted:function(){var t=this.$refs["cnTableBody"],e=t.querySelector("tr:first-child"),n=t.getBoundingClientRect(),o=n.height,a=e.getBoundingClientRect(),i=a.height;this.itemHeight=i,this.visibleCount=Math.ceil(o/i),this.end=this.start+this.visibleCount}}),k=S,_=(n("bd48"),Object(y["a"])(k,v,g,!1,null,null,null)),C=_.exports,x={name:"cn-table",components:{CnTableHeader:b,CnTableBody:C},props:{dataSource:{type:Array,default:function(){return[]}},columns:{type:Array,default:function(){return[]}}},data:function(){return{isLoading:!1}},computed:{sortFixedColumns:function(){var t=this.columns;return t.filter((function(t){return t.fixed})).concat(t.filter((function(t){return!t.fixed})))},staticWidth:function(){var t=0;return this.columns.forEach((function(e){e.fixed&&(t+=e.width)})),t+"px"}},methods:{handleTableScroll:c["a"].throttle((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=this.$refs["fixedBody"].$el,a=this.$refs["cnTableBody"].$el,i=a.getBoundingClientRect(),r=i.height;this.setBoundaryEmitter(t,e,n),o.scrollTop=t,a.scrollTop=t,o.style.height=r+"px"}),0,{leading:!0}),setBoundaryEmitter:c["a"].debounce((function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0;0===e?this.$emit("boundaryTop"):Math.floor(o*this.dataSource.length-e-n.getBoundingClientRect().height)<2&&(this.$emit("boundaryBottom",{done:function(){t.isLoading=!1}}),this.isLoading=!0)}),50),handleBodyScrollLeft:c["a"].throttle((function(t){var e=this.$refs["leftStaticTable"];t.target.scrollLeft?e.classList.add("table-fixed-left-scroll"):e.classList.remove("table-fixed-left-scroll")}),10,{leading:!0})},mounted:function(){}},w=x,T=(n("31ce"),Object(y["a"])(w,u,d,!1,null,null,null)),B=T.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",[n("input",{attrs:{type:"checkbox"},domProps:{value:t.data.checked,checked:t.data.checked},on:{change:t.handleClick}}),n("span",[t._v(" "+t._s(t.renderLabel())+" ")])])},j=[],L={name:"hello",props:{data:{type:Array,default:function(){return[]}},column:{type:Object,default:function(){return{}}},updateRow:{type:Function,default:function(){}},updateCol:{type:Function,default:function(){}}},data:function(){return{}},methods:{handleClick:function(t){var e=this.data;this.updateRow(e.map((function(e){return e.checked=t.target.checked,e})))},renderLabel:function(){return this.column.title}},mounted:function(){}},$=L,A=Object(y["a"])($,O,j,!1,null,null,null),R=A.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",[n("input",{attrs:{type:"checkbox"},domProps:{value:t.$attrs.data.checked,checked:t.$attrs.data.checked},on:{change:function(e){return e.preventDefault(),t.handleClick.apply(null,arguments)}}}),n("span",[t._v(" "+t._s(t.renderLabel())+" ")])])},z=[],P={name:"hello",props:{column:{type:Object,default:function(){return{}}},updateRow:{type:Function,default:function(){}},updateCol:{type:Function,default:function(){}}},data:function(){return{}},methods:{handleClick:function(t){this.updateCol(Object(r["a"])(Object(r["a"])({},this.$attrs.data),{checked:t.target.checked}))},renderLabel:function(){return this.$attrs.data.id}},mounted:function(){}},E=P,H=Object(y["a"])(E,M,z,!1,null,null,null),F=H.exports,W=[{id:0,province:"Connecticut",city:"South Anastacio",name:"Oswaldo Considine",zip:"62352",age:689,address:"49967 Lloyd Ridge"},{id:1,province:"Ohio",city:"Lake Sydnee",name:"Kieran Thompson",zip:"03930",age:234,address:"674 Stanton Locks"},{id:2,province:"Montana",city:"South Alexzanderfort",name:"Lynn Willms",zip:"32615-1991",age:595,address:"40564 Alysha Mill"},{id:3,province:"Virginia",city:"Lynnmouth",name:"Gwendolyn Mohr Jr.",zip:"15517",age:593,address:"573 Hegmann Gardens"},{id:4,province:"Nevada",city:"Smithamtown",name:"Kobe Tillman",zip:"49700",age:942,address:"85408 Gustave Key"},{id:5,province:"Louisiana",city:"Durganberg",name:"Cletus Rempel",zip:"41996",age:647,address:"009 Wintheiser Extensions"},{id:6,province:"Pennsylvania",city:"South Mattfurt",name:"Stephany Erdman",zip:"72236",age:266,address:"2123 Rolfson Cliff"},{id:7,province:"Vermont",city:"South Nicolas",name:"Thad Stark",zip:"53975-4801",age:920,address:"102 Katelyn Lodge"},{id:8,province:"Oklahoma",city:"West Syble",name:"Shayne Block",zip:"77066",age:199,address:"61061 Terry Orchard"},{id:9,province:"Tennessee",city:"Austenborough",name:"Giovanna Yost",zip:"55889-8053",age:605,address:"0964 Reynolds Junction"},{id:10,province:"Hawaii",city:"Timmyborough",name:"Norene Will II",zip:"63035-1193",age:74,address:"812 Zachariah Extensions"},{id:11,province:"Wisconsin",city:"North Theresa",name:"Ila Ruecker",zip:"92413-8438",age:935,address:"84530 Corkery Plains"},{id:12,province:"Michigan",city:"East Akeemstad",name:"Gina Schaden I",zip:"36035",age:393,address:"24068 Karley Path"},{id:13,province:"Illinois",city:"Velmahaven",name:"Raoul Bailey",zip:"84101-0326",age:871,address:"02314 Tracy Tunnel"}],D={name:"App",components:{CnTable:B,AC:R,AB:F},data:function(){return{dataSource:[],columns:[{title:"No.",key:"id",width:100,fixed:"left",slot:{header:"AC",body:"AB"}},{title:"姓名",key:"name",fixed:"left",width:100},{title:"年龄",key:"age",width:100},{title:"省份",key:"province",width:100},{title:"市区",key:"city",width:200},{title:"地址",key:"address",width:200},{title:"邮编",key:"zip",width:100},{title:"操作",key:"action",width:100,slot:{header:"AC",body:"AB"},action:function(){console.log("action")}}]}},methods:{updateCol:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.dataSource=this.dataSource.map((function(e){return e.id===t.id?t:e}))},updateRow:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.dataSource=t},handleBoundaryTop:function(){console.log("reach top")},handleBoundaryBottom:function(t){var e=t.done,n=void 0===e?function(){}:e;console.log("reach bottom");var o=this.dataSource,a=this;setTimeout((function(){a.dataSource=[].concat(Object(l["a"])(o),Object(l["a"])(a.createDataSource(o.length))),n(1)}),1e3)},createDataSource:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=[],o=0;o<e;o++){var a=W[Math.floor(Math.random()*W.length)];n.push(Object(r["a"])(Object(r["a"])({},a),{id:o+t}))}return n}},created:function(){this.dataSource=this.createDataSource()}},N=D,G=(n("034f"),Object(y["a"])(N,a,i,!1,null,null,null)),I=G.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(I)}}).$mount("#app")},9085:function(t,e,n){},b769:function(t,e,n){},bd48:function(t,e,n){"use strict";n("b769")}});
//# sourceMappingURL=app.7fd600d2.js.map