(function(t){function e(e){for(var o,r,c=e[0],l=e[1],u=e[2],d=0,h=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);s&&s(e);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(o=!1)}o&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},a={app:0},i=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/virtual-table-list-demo/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var s=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("9085")},"0710":function(t,e,n){"use strict";n("3c1e")},"1e94":function(t,e,n){"use strict";n("9864")},"31ce":function(t,e,n){"use strict";n("45ee")},"3c1e":function(t,e,n){},"45ee":function(t,e,n){},"460d":function(t,e,n){"use strict";n("7424")},"493d":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"app",attrs:{id:"app"}},[n("cn-table",{ref:"cnTable",attrs:{dataSource:t.dataSource,columns:t.columns},on:{boundaryTop:t.handleBoundaryTop,boundaryBottom:t.handleBoundaryBottom},scopedSlots:t._u([{key:"colcaption",fn:function(e){return[n(e.caption.slot,t._b({tag:"component",attrs:{action:t.handleAction}},"component",e,!1))]}},{key:"header",fn:function(e){return[n(e.column.header.slot,t._b({tag:"component",attrs:{action:t.handleAction}},"component",e,!1))]}},{key:"body",fn:function(e){return[n(e.column.body.slot,t._b({tag:"component",attrs:{action:t.handleAction}},"component",e,!1))]}},t.isLoading?{key:"loading",fn:function(){return[n("div",{staticClass:"lds-ellipsis"},[n("div"),n("div"),n("div"),n("div")])]},proxy:!0}:null,{key:"empty",fn:function(e){return[n("div",t._b({},"div",e,!1),[t._v(" data empty ")])]}}],null,!0)}),n("br"),n("div",{staticClass:"dispaly-box"},[n("button",{on:{click:t.fetchData}},[t._v("fetch data")]),n("button",{on:{click:t.toggelFullscreen}},[t._v("fullscreen")]),n("span",[t._v("total:"+t._s(t.dataSource.length))])])],1)},i=[],r=n("2909"),c=n("5530"),l=(n("d81d"),n("99af"),n("d3b7"),n("25f0"),n("fb6a"),n("4de4"),n("4e82"),n("c740"),n("a434"),n("c46f")),u=n("93bf"),s=n.n(u),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"cnTable",staticClass:"cn-table",style:{width:t.width+"px",height:t.height+"px"}},[n("div",{ref:"headerStaticTable",staticClass:"cn-table-fixed-header",on:{scroll:function(e){return e.preventDefault(),t.handleBodyScrollLeft.apply(null,arguments)}}},[n("cn-table-header",{attrs:{columns:t.sortFixedColumns},scopedSlots:t._u([{key:"colcaption",fn:function(e){return[t._t("colcaption",null,null,e)]}},{key:"header",fn:function(e){return[t._t("header",null,null,e)]}}],null,!0)}),t.dataSource.length?n("cn-table-body",{ref:"cnTableBody",attrs:{columns:t.sortFixedColumns,dataSource:t.dataSource,onScroll:t.handleTableScroll},scopedSlots:t._u([{key:"body",fn:function(e){return[t._t("body",null,null,e)]}}],null,!0)}):t._e()],1),n("div",{ref:"leftStaticTable",staticClass:"table-fixed-left",style:{width:t.staticWidth}},[n("cn-table-header",{attrs:{columns:t.sortFixedColumns},scopedSlots:t._u([{key:"colcaption",fn:function(e){return[t._t("colcaption",null,null,e)]}},{key:"header",fn:function(e){return[t._t("header",null,null,e)]}}],null,!0)}),t.dataSource.length?n("cn-table-body",{ref:"fixedBody",attrs:{columns:t.sortFixedColumns,dataSource:t.dataSource,onScroll:t.handleTableScroll},scopedSlots:t._u([{key:"body",fn:function(e){return[t._t("body",null,null,e)]}}],null,!0)}):t._e()],1),t._t("loading"),t.dataSource.length?t._e():n("div",{staticClass:"cn-table-data-empty"},[t._t("empty")],2)],2)},h=[],f=(n("a9e3"),n("c7cd"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"cn-table-header"},[n("colgroup",t._l(t.columns,(function(t,e){return n("col",{key:e,attrs:{width:t.width||""}})})),0),n("thead",[t.withColumnCaption?n("tr",{staticClass:"cn-table-header-caption"},[t._l(t.columns,(function(e){return[e.caption?[e.caption.slot?t._t("colcaption",null,{namekey:e.key,caption:e.caption}):t._e()]:n("th",{key:e.name})]}))],2):t._e(),n("tr",t._l(t.columns,(function(e){return n("th",{key:e.key},[e.header?t._t("header",null,{column:e}):n("span",[t._v(t._s(e.title))])],2)})),0)])])}),p=[],m={name:"cn-table-header",props:{columns:{type:Array,default:function(){return[]}}},computed:{withColumnCaption:function(){return this.columns.some((function(t){return t.caption}))}},mounted:function(){}},y=m,b=(n("e3cf"),n("2877")),v=Object(b["a"])(y,f,p,!1,null,null,null),g=v.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"cnTableBody",staticClass:"cn-table-body",on:{scroll:t.handleBodyScrollTop}},[n("div",{ref:"phantom",staticClass:"cn-table-body-phantom",style:{height:t.phantomHeight}}),n("table",{style:{transform:t.transform}},[n("colgroup",t._l(t.columns,(function(t,e){return n("col",{key:e,attrs:{width:t.width||""}})})),0),n("tbody",t._l(t.visibleData,(function(e,o){return n("tr",{key:o},t._l(t.columns,(function(o){return n("td",{key:o.key},[o.body?t._t("body",null,{data:e,column:o}):n("span",[t._v(" "+t._s(e[o.key])+" ")])],2)})),0)})),0)])])},S=[],k={name:"cn-table-body",props:{columns:{type:Array,default:function(){return[]}},dataSource:{type:Array,default:function(){return[]}},onScroll:{type:Function,default:function(){}}},data:function(){return{start:0,end:2,itemHeight:0,transform:""}},computed:{visibleData:function(){return this.dataSource.slice(Math.max(this.start,0),Math.min(this.end,this.dataSource.length))},phantomHeight:function(){return this.dataSource.length*this.itemHeight+"px"}},methods:{handleBodyScrollTop:l["a"].throttle((function(t){var e=t.target.scrollTop;this.itemHeight=Math.min(this.itemHeight,this.getTrHeight(t.target)),this.onScroll(e,t.target,this.itemHeight),this.setUpPositionWithBuf(e,this.visibleCount)}),0,{trailing:!0}),setUpPositionWithBuf:function(t,e){var n=Math.floor(t/this.itemHeight),o=0;n>=e?(o=this.itemHeight*(n-e),this.start=n-e):this.start=0,this.transform="translate3d(0,".concat(o,"px,0)"),this.end=n+this.visibleCount+e},setUpPositionNormal:function(t){var e=Math.floor(t/this.itemHeight),n=e*this.itemHeight;this.start=e,this.end=e+this.visibleCount,this.transform="translate3d(0,".concat(n,"px,0)")},getTrHeight:function(t){var e=t.querySelector("tr:first-child"),n=e.getBoundingClientRect(),o=n.height;return o},initComp:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.$refs["cnTableBody"],n=e.getBoundingClientRect(),o=n.top,a=this.$parent.$el.getBoundingClientRect(),i=a.top,r=a.height;t&&(r=window.innerHeight);var c=r-o+i;e.style.height=c+"px",this.itemHeight=this.getTrHeight(e),this.bodyHeight=c,this.visibleCount=Math.floor(this.bodyHeight/this.itemHeight),this.end=this.start+2*this.visibleCount}},mounted:function(){var t=this;this.initComp(),window.matchMedia("(display-mode: fullscreen)").addEventListener("change",(function(e){var n=e.matches;setTimeout((function(){t.initComp(n),t.$refs["cnTableBody"].scrollTop=0}),500)}))}},x=k,C=(n("bd48"),Object(b["a"])(x,_,S,!1,null,null,null)),w=C.exports,T={name:"cn-table",components:{CnTableHeader:g,CnTableBody:w},props:{dataSource:{type:Array,default:function(){return[]}},columns:{type:Array,default:function(){return[]}},width:{type:Number,default:500},height:{type:Number,default:300}},data:function(){return{}},computed:{sortFixedColumns:function(){var t=this.columns;return t.filter((function(t){return t.fixed})).concat(t.filter((function(t){return!t.fixed})))},staticWidth:function(){var t=0;return this.columns.forEach((function(e){e.fixed&&(t+=e.width)})),t+"px"}},methods:{handleTableScroll:l["a"].throttle((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=this.$refs["fixedBody"].$el,a=this.$refs["cnTableBody"].$el;this.setBoundaryEmitter(t,e,n),o.scrollTop=t,a.scrollTop=t}),0,{leading:!0}),setBoundaryEmitter:l["a"].debounce((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;0===t?this.$emit("boundaryTop"):Math.floor(n*this.dataSource.length-t-e.getBoundingClientRect().height)<2&&this.$emit("boundaryBottom")}),50),handleBodyScrollLeft:l["a"].throttle((function(t){var e=this.$refs["leftStaticTable"];t.target.scrollLeft?e.classList.add("table-fixed-left-scroll"):e.classList.remove("table-fixed-left-scroll")}),10,{leading:!0})},mounted:function(){}},O=T,B=(n("31ce"),Object(b["a"])(O,d,h,!1,null,null,null)),j=B.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",[n("input",{attrs:{type:"checkbox"},on:{change:t.handleClick}}),n("span",[t._v(" "+t._s(t.renderLabel())+" ")])])},H=[],L={name:"checkbox-header",props:{column:{type:Object,default:function(){return{}}},action:{type:Function,default:function(){}}},data:function(){return{}},methods:{handleClick:function(t){this.action(this.column.header.action,(function(e){return e.checked=t.target.checked,e}))},renderLabel:function(){return this.column.title}},mounted:function(){}},M=L,E=Object(b["a"])(M,$,H,!1,null,null,null),z=E.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",[n("input",{attrs:{type:"checkbox"},domProps:{value:t.$attrs.data.checked,checked:t.$attrs.data.checked},on:{change:function(e){return e.preventDefault(),t.handleClick.apply(null,arguments)}}}),n("span",[t._v(" "+t._s(t.renderLabel())+" ")])])},D=[],F={name:"checkbox-body",props:{column:{type:Object,default:function(){return{}}},action:{type:Function,default:function(){}}},data:function(){return{}},methods:{handleClick:function(t){this.action(this.column.body.action,Object(c["a"])(Object(c["a"])({},this.$attrs.data),{checked:t.target.checked}))},renderLabel:function(){return this.$attrs.data.index}},mounted:function(){}},P=F,R=Object(b["a"])(P,A,D,!1,null,null,null),U=R.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("th",{staticClass:"caption"},[n("span",[t._v(t._s(t.caption.text))])])},N=[],I={name:"text-caption",props:{caption:{type:Object,default:function(){}},namekey:{type:String,default:""},action:{type:Function,default:function(){}}}},G=I,K=(n("e1bc"),Object(b["a"])(G,W,N,!1,null,"7aaeda22",null)),J=K.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("th",[n("input",{attrs:{type:"text"},on:{input:t.handleSearch}})])},q=[],Y=(n("caad"),n("2532"),n("498a"),{name:"search-caption",props:{caption:{type:Object,default:function(){}},namekey:{type:String,default:""},action:{type:Function,default:function(){}}},data:function(){return{}},methods:{handleSearch:function(t){var e=this;this.action(this.caption.action,(function(n){return n[e.namekey].toUpperCase().includes(t.target.value.trim().toUpperCase())}))}}}),Z=Y,Q=(n("1e94"),Object(b["a"])(Z,V,q,!1,null,"979e41a2",null)),X=Q.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"filter-container"},[n("div",[t._v(t._s(t.renderLabel()))]),n("div",{staticClass:"filters"},[n("a",{on:{click:t.handleUp}},[t._v(" ↑")]),n("a",{on:{click:t.handleDown}},[t._v("↓")])])])},et=[],nt={name:"filter-header",props:{column:{type:Object,default:function(){return{}}},action:{type:Function,default:function(){}}},methods:{renderLabel:function(){return this.column.title},handleUp:function(){var t=this;this.action(this.column.header.actions.up,(function(e,n){return e[t.column.key]-n[t.column.key]}))},handleDown:function(){var t=this;this.action(this.column.header.actions.down,(function(e,n){return n[t.column.key]-e[t.column.key]}))}}},ot=nt,at=(n("460d"),Object(b["a"])(ot,tt,et,!1,null,"ef3408d8",null)),it=at.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"operation"},[n("button",{on:{click:t.handleUpdate}},[t._v("修改")]),n("button",{on:{click:t.handleDelete}},[t._v("删除")])])},ct=[],lt={name:"operation-body",props:{column:{type:Object,default:function(){return{}}},action:{type:Function,default:function(){}}},methods:{handleUpdate:function(){this.action(this.column.body.actions.update,this.$attrs.data)},handleDelete:function(){this.action(this.column.body.actions.delete,this.$attrs.data)}}},ut=lt,st=(n("0710"),Object(b["a"])(ut,rt,ct,!1,null,"0e0d5261",null)),dt=st.exports,ht=[{id:0,province:"Connecticut",city:"South Anastacio",name:"Oswaldo Considine",zip:"62352",age:689,address:"49967 Lloyd Ridge"},{id:1,province:"Ohio",city:"Lake Sydnee",name:"Kieran Thompson",zip:"03930",age:234,address:"674 Stanton Locks"},{id:2,province:"Montana",city:"South Alexzanderfort",name:"Lynn Willms",zip:"32615-1991",age:595,address:"40564 Alysha Mill"},{id:3,province:"Virginia",city:"Lynnmouth",name:"Gwendolyn Mohr Jr.",zip:"15517",age:593,address:"573 Hegmann Gardens"},{id:4,province:"Nevada",city:"Smithamtown",name:"Kobe Tillman",zip:"49700",age:942,address:"85408 Gustave Key"},{id:5,province:"Louisiana",city:"Durganberg",name:"Cletus Rempel",zip:"41996",age:647,address:"009 Wintheiser Extensions"},{id:6,province:"Pennsylvania",city:"South Mattfurt",name:"Stephany Erdman",zip:"72236",age:266,address:"2123 Rolfson Cliff"},{id:7,province:"Vermont",city:"South Nicolas",name:"Thad Stark",zip:"53975-4801",age:920,address:"102 Katelyn Lodge"},{id:8,province:"Oklahoma",city:"West Syble",name:"Shayne Block",zip:"77066",age:199,address:"61061 Terry Orchard"},{id:9,province:"Tennessee",city:"Austenborough",name:"Giovanna Yost",zip:"55889-8053",age:605,address:"0964 Reynolds Junction"},{id:10,province:"Hawaii",city:"Timmyborough",name:"Norene Will II",zip:"63035-1193",age:74,address:"812 Zachariah Extensions"},{id:11,province:"Wisconsin",city:"North Theresa",name:"Ila Ruecker",zip:"92413-8438",age:935,address:"84530 Corkery Plains"},{id:12,province:"Michigan",city:"East Akeemstad",name:"Gina Schaden I",zip:"36035",age:393,address:"24068 Karley Path"},{id:13,province:"Illinois",city:"Velmahaven",name:"Raoul Bailey",zip:"84101-0326",age:871,address:"02314 Tracy Tunnel"}],ft={name:"App",components:{CnTable:j,CheckboxHeader:z,CheckboxBody:U,TextCaption:J,SearchCaption:X,FilterHeader:it,OperationBody:dt},data:function(){return{dataSource:[],columns:[],isLoading:!1}},methods:{updateCol:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.dataSource=this.dataSource.map((function(e){return e.id===t.id?t:e}))},updateRow:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.dataSource=t},handleAction:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];return t.apply(this,n)},handleBoundaryTop:function(){console.log("reach top")},handleBoundaryBottom:function(){console.log("reach bottom"),this.fetchData()},createDataSource:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,e=[],n=Math.ceil(this.dataSource.length/t),o=0;o<t;o++){var a=ht[Math.floor(Math.random()*ht.length)];e.push(Object(c["a"])(Object(c["a"])({},a),{index:"".concat(n,"-").concat(o),id:Date.now().toString(36)+Math.random().toString(36).slice(2)}))}return e},fetchData:function(){var t=this.dataSource,e=this;setTimeout((function(){e.dataSource=[].concat(Object(r["a"])(t),Object(r["a"])(e.createDataSource())),e.isLoading=!1}),1e3),this.isLoading=!0},toggelFullscreen:function(){var t=this.$refs["cnTable"].$el;s.a.isEnabled&&s.a.toggle(t)},createColumns:function(){this.columns=[{title:"No.",key:"index",width:100,fixed:"left",header:{slot:"CheckboxHeader",action:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},e=this.dataSource;this.updateRow(e.map(t))}},body:{slot:"CheckboxBody",action:function(t){this.updateCol(t)}}},{title:"姓名",key:"name",fixed:"left",width:150,caption:{slot:"SearchCaption",action:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},e=this.createDataSource();this.dataSource=e.filter(t)}}},{title:"年龄",key:"age",width:100,header:{slot:"FilterHeader",actions:{up:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},e=this.dataSource;this.updateRow(e.sort(t))},down:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},e=this.dataSource;this.updateRow(e.sort(t))}}},caption:{slot:"TextCaption",text:"Bonus Items"}},{title:"省份",key:"province",width:100},{title:"市区",key:"city",width:200},{title:"地址",key:"address",width:200},{title:"邮编",key:"zip",width:100},{title:"操作",key:"action",width:150,body:{slot:"OperationBody",actions:{update:function(){console.log("update")},delete:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.dataSource,n=e.findIndex((function(e){return e.id===t.id}));e.splice(n,1)}}}}]}},mounted:function(){this.createColumns()},created:function(){}},pt=ft,mt=(n("034f"),Object(b["a"])(pt,a,i,!1,null,null,null)),yt=mt.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(yt)}}).$mount("#app")},7424:function(t,e,n){},9085:function(t,e,n){},9864:function(t,e,n){},b769:function(t,e,n){},bd48:function(t,e,n){"use strict";n("b769")},bf89:function(t,e,n){},e1bc:function(t,e,n){"use strict";n("bf89")},e3cf:function(t,e,n){"use strict";n("493d")}});
//# sourceMappingURL=app.9d17e655.js.map