(function(t){function e(e){for(var a,c,r=e[0],l=e[1],u=e[2],d=0,h=[];d<r.length;d++)c=r[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&h.push(o[c][0]),o[c]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);s&&s(e);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var l=n[r];0!==o[l]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},o={app:0},i=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/virtual-table-list-demo/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var s=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("9085")},"31ce":function(t,e,n){"use strict";n("45ee")},"3fef":function(t,e,n){},"45ee":function(t,e,n){},"493d":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("cn-table",{attrs:{dataSource:t.dataSource,columns:t.columns},on:{boundaryTop:t.handleBoundaryTop,boundaryBottom:t.handleBoundaryBottom},scopedSlots:t._u([{key:"colcaption",fn:function(e){return[n(e.caption.slot,t._b({tag:"component",attrs:{action:t.handleAction}},"component",e,!1))]}},{key:"header",fn:function(e){return[n(e.column.header.slot,t._b({tag:"component",attrs:{data:t.dataSource,action:t.handleAction}},"component",e,!1))]}},{key:"body",fn:function(e){return[n(e.column.body.slot,t._b({tag:"component",attrs:{action:t.handleAction}},"component",e,!1))]}},t.isLoading?{key:"loading",fn:function(){return[n("div",{staticClass:"lds-ellipsis"},[n("div"),n("div"),n("div"),n("div")])]},proxy:!0}:null,{key:"empty",fn:function(e){return[n("div",t._b({},"div",e,!1),[t._v(" data empty ")])]}}],null,!0)}),n("br"),n("div",{staticClass:"dispaly-box"},[n("button",{on:{click:t.fetchData}},[t._v("fetch data")]),n("span",[t._v("total:"+t._s(t.dataSource.length))])])],1)},i=[],c=n("2909"),r=n("5530"),l=(n("d81d"),n("99af"),n("4de4"),n("caad"),n("2532"),n("b0c0"),n("498a"),n("c46f")),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"cnTable",staticClass:"cn-table",style:{width:t.width+"px",height:t.height+"px"}},[n("div",{ref:"headerStaticTable",staticClass:"cn-table-fixed-header",on:{scroll:function(e){return e.preventDefault(),t.handleBodyScrollLeft.apply(null,arguments)}}},[n("cn-table-header",{attrs:{columns:t.sortFixedColumns},scopedSlots:t._u([{key:"colcaption",fn:function(e){return[t._t("colcaption",null,null,e)]}},{key:"header",fn:function(e){return[t._t("header",null,null,e)]}}],null,!0)}),t.dataSource.length?n("cn-table-body",{ref:"cnTableBody",attrs:{columns:t.sortFixedColumns,dataSource:t.dataSource,onScroll:t.handleTableScroll},scopedSlots:t._u([{key:"body",fn:function(e){return[t._t("body",null,null,e)]}}],null,!0)}):t._e()],1),n("div",{ref:"leftStaticTable",staticClass:"table-fixed-left",style:{width:t.staticWidth}},[n("cn-table-header",{attrs:{columns:t.sortFixedColumns},scopedSlots:t._u([{key:"colcaption",fn:function(e){return[t._t("colcaption",null,null,e)]}},{key:"header",fn:function(e){return[t._t("header",null,null,e)]}}],null,!0)}),t.dataSource.length?n("cn-table-body",{ref:"fixedBody",attrs:{columns:t.sortFixedColumns,dataSource:t.dataSource,onScroll:t.handleTableScroll},scopedSlots:t._u([{key:"body",fn:function(e){return[t._t("body",null,null,e)]}}],null,!0)}):t._e()],1),t._t("loading"),t.dataSource.length?t._e():n("div",{staticClass:"cn-table-data-empty"},[t._t("empty")],2)],2)},s=[],d=(n("a9e3"),n("c7cd"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"cn-table-header"},[n("colgroup",t._l(t.columns,(function(t,e){return n("col",{key:e,attrs:{width:t.width||""}})})),0),n("thead",[t.withColumnCaption?n("tr",{staticClass:"cn-table-header-caption"},[t._l(t.columns,(function(e){return[e.caption?[e.caption.slot?t._t("colcaption",null,{namekey:e.key,caption:e.caption}):t._e()]:n("th",{key:e.name})]}))],2):t._e(),n("tr",t._l(t.columns,(function(e){return n("th",{key:e.key},[e.header?t._t("header",null,{column:e}):n("span",[t._v(t._s(e.title))])],2)})),0)])])}),h=[],f={name:"cn-table-header",props:{columns:{type:Array,default:function(){return[]}}},computed:{withColumnCaption:function(){return this.columns.some((function(t){return t.caption}))}},mounted:function(){}},p=f,m=(n("e3cf"),n("2877")),y=Object(m["a"])(p,d,h,!1,null,null,null),b=y.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"cnTableBody",staticClass:"cn-table-body",on:{scroll:t.handleBodyScrollTop}},[n("div",{ref:"phantom",staticClass:"cn-table-body-phantom",style:{height:t.phantomHeight}}),n("table",{style:{transform:t.transform}},[n("colgroup",t._l(t.columns,(function(t,e){return n("col",{key:e,attrs:{width:t.width||""}})})),0),n("tbody",t._l(t.visibleData,(function(e,a){return n("tr",{key:a},t._l(t.columns,(function(a){return n("td",{key:a.key},[a.body?t._t("body",null,{data:e,column:a}):n("span",[t._v(" "+t._s(e[a.key])+" ")])],2)})),0)})),0)])])},g=[],_=(n("fb6a"),{name:"cn-table-body",props:{columns:{type:Array,default:function(){return[]}},dataSource:{type:Array,default:function(){return[]}},onScroll:{type:Function,default:function(){}}},data:function(){return{start:0,end:1,itemHeight:0,visibleCount:0,transform:""}},computed:{visibleData:function(){return this.dataSource.slice(Math.max(this.start,0),Math.min(this.end,this.dataSource.length))},phantomHeight:function(){return this.dataSource.length*this.itemHeight+"px"}},methods:{handleBodyScrollTop:l["a"].throttle((function(t){var e=t.target.scrollTop;this.onScroll(e,t.target,this.itemHeight),this.setUpPositionWithBuf(e,this.visibleCount)}),0,{trailing:!0}),setUpPositionWithBuf:function(t,e){var n=Math.floor(t/this.itemHeight),a=0;n>=e?(a=this.itemHeight*(n-e),this.start=n-e):this.start=0,this.transform="translate3d(0,".concat(a,"px,0)"),this.end=n+this.visibleCount+e},setUpPositionNormal:function(t){var e=Math.floor(t/this.itemHeight),n=e*this.itemHeight;this.start=e,this.end=e+this.visibleCount,this.transform="translate3d(0,".concat(n,"px,0)")}},mounted:function(){var t=this.$refs["cnTableBody"],e=t.querySelector("tr:first-child"),n=t.getBoundingClientRect(),a=n.top,o=e.getBoundingClientRect(),i=o.height,c=this.$parent.$el.getBoundingClientRect(),r=c.top,l=c.height,u=l-a+r;t.style.height=u+"px",this.itemHeight=i,this.visibleCount=Math.ceil(u/i),this.end=this.start+this.visibleCount}}),k=_,S=(n("bd48"),Object(m["a"])(k,v,g,!1,null,null,null)),x=S.exports,C={name:"cn-table",components:{CnTableHeader:b,CnTableBody:x},props:{dataSource:{type:Array,default:function(){return[]}},columns:{type:Array,default:function(){return[]}},width:{type:Number,default:500},height:{type:Number,default:300}},data:function(){return{}},computed:{sortFixedColumns:function(){var t=this.columns;return t.filter((function(t){return t.fixed})).concat(t.filter((function(t){return!t.fixed})))},staticWidth:function(){var t=0;return this.columns.forEach((function(e){e.fixed&&(t+=e.width)})),t+"px"}},methods:{handleTableScroll:l["a"].throttle((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=this.$refs["fixedBody"].$el,o=this.$refs["cnTableBody"].$el;this.setBoundaryEmitter(t,e,n),a.scrollTop=t,o.scrollTop=t}),0,{leading:!0}),setBoundaryEmitter:l["a"].debounce((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;0===t?this.$emit("boundaryTop"):Math.floor(n*this.dataSource.length-t-e.getBoundingClientRect().height)<2&&this.$emit("boundaryBottom")}),50),handleBodyScrollLeft:l["a"].throttle((function(t){var e=this.$refs["leftStaticTable"];t.target.scrollLeft?e.classList.add("table-fixed-left-scroll"):e.classList.remove("table-fixed-left-scroll")}),10,{leading:!0})},mounted:function(){}},w=C,O=(n("31ce"),Object(m["a"])(w,u,s,!1,null,null,null)),T=O.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",[n("input",{attrs:{type:"checkbox"},domProps:{value:t.data.checked,checked:t.data.checked},on:{change:t.handleClick}}),n("span",[t._v(" "+t._s(t.renderLabel())+" ")])])},j=[],$={name:"checkbox-header",props:{data:{type:Array,default:function(){return[]}},column:{type:Object,default:function(){return{}}},action:{type:Function,default:function(){}}},data:function(){return{}},methods:{handleClick:function(t){var e=this.data;this.action(e.map((function(e){return e.checked=t.target.checked,e})),this.column.header.action)},renderLabel:function(){return this.column.title}},mounted:function(){}},L=$,A=Object(m["a"])(L,B,j,!1,null,null,null),E=A.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",[n("input",{attrs:{type:"checkbox"},domProps:{value:t.$attrs.data.checked,checked:t.$attrs.data.checked},on:{change:function(e){return e.preventDefault(),t.handleClick.apply(null,arguments)}}}),n("span",[t._v(" "+t._s(t.renderLabel())+" ")])])},M=[],z={name:"checkbox-body",props:{column:{type:Object,default:function(){return{}}},action:{type:Function,default:function(){}}},data:function(){return{}},methods:{handleClick:function(t){this.action(Object(r["a"])(Object(r["a"])({},this.$attrs.data),{checked:t.target.checked}),this.column.body.action)},renderLabel:function(){return this.$attrs.data.id}},mounted:function(){}},D=z,P=Object(m["a"])(D,H,M,!1,null,null,null),F=P.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("th",{staticClass:"caption"},[n("span",[t._v(t._s(t.caption.text))])])},U=[],W={name:"text-caption",props:{caption:{type:Object,default:function(){}},namekey:{type:String,default:""},action:{type:Function,default:function(){}}}},N=W,I=(n("e1bc"),Object(m["a"])(N,R,U,!1,null,"7aaeda22",null)),G=I.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("th",[n("input",{attrs:{type:"text"},on:{input:t.handleSearch}})])},J=[],V={name:"search-caption",props:{caption:{type:Object,default:function(){}},namekey:{type:String,default:""},action:{type:Function,default:function(){}}},data:function(){return{}},methods:{handleSearch:function(t){this.action(t.target.value,this.caption.action)}}},q=V,Y=(n("a274"),Object(m["a"])(q,K,J,!1,null,"02d74139",null)),Z=Y.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"filter-container"},[n("div",[t._v(t._s(t.renderLabel()))]),n("div",{staticClass:"filters"},[n("a",{on:{click:t.handleUp}},[t._v(" ↑")]),n("a",{on:{click:t.handleDown}},[t._v("↓")])])])},X=[],tt=(n("4e82"),{name:"filter-header",props:{data:{type:Array,default:function(){return[]}},column:{type:Object,default:function(){return{}}},action:{type:Function,default:function(){}}},methods:{renderLabel:function(){return this.column.title},handleUp:function(){var t=this,e=this.data;this.action(e.sort((function(e,n){return e[t.column.key]-n[t.column.key]})),this.column.header.action)},handleDown:function(){var t=this,e=this.data;this.action(e.sort((function(e,n){return n[t.column.key]-e[t.column.key]})),this.column.header.action)}}}),et=tt,nt=(n("d49b"),Object(m["a"])(et,Q,X,!1,null,"e487d632",null)),at=nt.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"operation"},[n("button",{on:{click:t.handleUpdate}},[t._v("修改")]),n("button",{on:{click:t.handleDelete}},[t._v("删除")])])},it=[],ct={name:"operation-body",props:{column:{type:Object,default:function(){return{}}},action:{type:Function,default:function(){}}},methods:{handleUpdate:function(){this.action(this.$attrs.data,this.column.body.actions.update)},handleDelete:function(){this.action(this.$attrs.data,this.column.body.actions.delete)}}},rt=ct,lt=(n("c3de"),Object(m["a"])(rt,ot,it,!1,null,"34fa5b59",null)),ut=lt.exports,st=[{id:0,province:"Connecticut",city:"South Anastacio",name:"Oswaldo Considine",zip:"62352",age:689,address:"49967 Lloyd Ridge"},{id:1,province:"Ohio",city:"Lake Sydnee",name:"Kieran Thompson",zip:"03930",age:234,address:"674 Stanton Locks"},{id:2,province:"Montana",city:"South Alexzanderfort",name:"Lynn Willms",zip:"32615-1991",age:595,address:"40564 Alysha Mill"},{id:3,province:"Virginia",city:"Lynnmouth",name:"Gwendolyn Mohr Jr.",zip:"15517",age:593,address:"573 Hegmann Gardens"},{id:4,province:"Nevada",city:"Smithamtown",name:"Kobe Tillman",zip:"49700",age:942,address:"85408 Gustave Key"},{id:5,province:"Louisiana",city:"Durganberg",name:"Cletus Rempel",zip:"41996",age:647,address:"009 Wintheiser Extensions"},{id:6,province:"Pennsylvania",city:"South Mattfurt",name:"Stephany Erdman",zip:"72236",age:266,address:"2123 Rolfson Cliff"},{id:7,province:"Vermont",city:"South Nicolas",name:"Thad Stark",zip:"53975-4801",age:920,address:"102 Katelyn Lodge"},{id:8,province:"Oklahoma",city:"West Syble",name:"Shayne Block",zip:"77066",age:199,address:"61061 Terry Orchard"},{id:9,province:"Tennessee",city:"Austenborough",name:"Giovanna Yost",zip:"55889-8053",age:605,address:"0964 Reynolds Junction"},{id:10,province:"Hawaii",city:"Timmyborough",name:"Norene Will II",zip:"63035-1193",age:74,address:"812 Zachariah Extensions"},{id:11,province:"Wisconsin",city:"North Theresa",name:"Ila Ruecker",zip:"92413-8438",age:935,address:"84530 Corkery Plains"},{id:12,province:"Michigan",city:"East Akeemstad",name:"Gina Schaden I",zip:"36035",age:393,address:"24068 Karley Path"},{id:13,province:"Illinois",city:"Velmahaven",name:"Raoul Bailey",zip:"84101-0326",age:871,address:"02314 Tracy Tunnel"}],dt={name:"App",components:{CnTable:T,CheckboxHeader:E,CheckboxBody:F,TextCaption:G,SearchCaption:Z,FilterHeader:at,OperationBody:ut},data:function(){return{dataSource:[],columns:[],isLoading:!1}},methods:{updateCol:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.dataSource=this.dataSource.map((function(e){return e.id===t.id?t:e}))},updateRow:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.dataSource=t},handleAction:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};e.call(this,t)},handleBoundaryTop:function(){console.log("reach top")},handleBoundaryBottom:function(){console.log("reach bottom"),this.fetchData()},createDataSource:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=[],a=0;a<e;a++){var o=st[Math.floor(Math.random()*st.length)];n.push(Object(r["a"])(Object(r["a"])({},o),{id:a+t}))}return n},fetchData:function(){var t=this.dataSource,e=this;setTimeout((function(){e.dataSource=[].concat(Object(c["a"])(t),Object(c["a"])(e.createDataSource(t.length))),e.isLoading=!1}),1e3),this.isLoading=!0},createColumns:function(){this.columns=[{title:"No.",key:"id",width:100,fixed:"left",header:{slot:"CheckboxHeader",action:function(t){this.updateRow(t)}},body:{slot:"CheckboxBody",action:function(t){this.updateCol(t)}}},{title:"姓名",key:"name",fixed:"left",width:150,caption:{slot:"SearchCaption",action:function(t){var e=this.createDataSource();this.dataSource=e.filter((function(e){return e["name"].toUpperCase().includes(t.trim().toUpperCase())}))}}},{title:"年龄",key:"age",width:100,header:{slot:"FilterHeader",action:function(t){this.updateRow(t)}},caption:{slot:"TextCaption",text:"Bonus Items"}},{title:"省份",key:"province",width:100},{title:"市区",key:"city",width:200},{title:"地址",key:"address",width:200},{title:"邮编",key:"zip",width:100},{title:"操作",key:"action",width:150,body:{slot:"OperationBody",actions:{update:function(){console.log("update")},delete:function(){console.log("delete")}}}}]}},mounted:function(){this.createColumns(),this.fetchData()},created:function(){}},ht=dt,ft=(n("034f"),Object(m["a"])(ht,o,i,!1,null,null,null)),pt=ft.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(pt)}}).$mount("#app")},9085:function(t,e,n){},a274:function(t,e,n){"use strict";n("f559")},b769:function(t,e,n){},bd48:function(t,e,n){"use strict";n("b769")},bf89:function(t,e,n){},c3de:function(t,e,n){"use strict";n("f670")},d49b:function(t,e,n){"use strict";n("3fef")},e1bc:function(t,e,n){"use strict";n("bf89")},e3cf:function(t,e,n){"use strict";n("493d")},f559:function(t,e,n){},f670:function(t,e,n){}});
//# sourceMappingURL=app.196879c3.js.map