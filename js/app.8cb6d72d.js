(function(t){function e(e){for(var o,c,l=e[0],r=e[1],u=e[2],d=0,h=[];d<l.length;d++)c=l[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&h.push(a[c][0]),a[c]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);s&&s(e);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,l=1;l<n.length;l++){var r=n[l];0!==a[r]&&(o=!1)}o&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},a={app:0},i=[];function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/virtual-table-list-demo/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var s=r;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("9085")},"0710":function(t,e,n){"use strict";n("3c1e")},"1e94":function(t,e,n){"use strict";n("9864")},"31ce":function(t,e,n){"use strict";n("45ee")},"3c1e":function(t,e,n){},"45ee":function(t,e,n){},"460d":function(t,e,n){"use strict";n("7424")},"493d":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"app",attrs:{id:"app"}},[n("cn-table",{ref:"cnTable",attrs:{dataSource:t.dataSource,columns:t.columns},on:{boundaryTop:t.handleBoundaryTop,boundaryBottom:t.handleBoundaryBottom},scopedSlots:t._u([{key:"colcaption",fn:function(e){return[n(e.caption.slot,t._b({tag:"component",attrs:{action:t.handleAction}},"component",e,!1))]}},{key:"header",fn:function(e){return[n(e.column.header.slot,t._b({tag:"component",attrs:{action:t.handleAction}},"component",e,!1))]}},{key:"body",fn:function(e){return[n(e.column.body.slot,t._b({tag:"component",attrs:{action:t.handleAction}},"component",e,!1))]}},t.isLoading?{key:"loading",fn:function(){return[n("div",{staticClass:"lds-ellipsis"},[n("div"),n("div"),n("div"),n("div")])]},proxy:!0}:null,{key:"empty",fn:function(e){return[n("div",t._b({},"div",e,!1),[t._v(" data empty ")])]}}],null,!0)}),n("br"),n("div",{staticClass:"dispaly-box"},[n("button",{on:{click:t.fetchData}},[t._v("fetch data")]),n("button",{on:{click:t.toggelFullscreen}},[t._v("fullscreen")]),n("span",[t._v("total:"+t._s(t.dataSource.length))])])],1)},i=[],c=n("2909"),l=n("5530"),r=(n("d81d"),n("99af"),n("b0c0"),n("4de4"),n("4e82"),n("c740"),n("a434"),n("c46f")),u=n("93bf"),s=n.n(u),d=n("359c"),h=n.n(d),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"cnTable",staticClass:"cn-table",style:{width:t.width+"px",height:t.height+"px"}},[n("div",{ref:"headerStaticTable",staticClass:"cn-table-fixed-header",on:{scroll:function(e){return e.preventDefault(),t.handleBodyScrollLeft.apply(null,arguments)}}},[n("cn-table-header",{ref:"cnTableHeader",attrs:{columns:t.sortFixedColumns},scopedSlots:t._u([{key:"colcaption",fn:function(e){return[t._t("colcaption",null,null,e)]}},{key:"header",fn:function(e){return[t._t("header",null,null,e)]}}],null,!0)}),t.dataSource.length?n("cn-table-body",{ref:"cnTableBody",attrs:{height:t.tableBodyHeight,columns:t.sortFixedColumns,dataSource:t.dataSource},on:{onScroll:t.handleTableScroll,"hook:mounted":t.calculateTableBodyHeight},scopedSlots:t._u([{key:"body",fn:function(e){return[t._t("body",null,null,e)]}}],null,!0)}):t._e()],1),n("div",{ref:"leftStaticTable",staticClass:"table-fixed-left"},[n("cn-table-header",{attrs:{columns:t.sortFixedColumns},scopedSlots:t._u([{key:"colcaption",fn:function(e){return[t._t("colcaption",null,null,e)]}},{key:"header",fn:function(e){return[t._t("header",null,null,e)]}}],null,!0)}),t.dataSource.length?n("cn-table-body",{ref:"fixedBody",attrs:{height:t.tableBodyHeight,columns:t.sortFixedColumns,dataSource:t.dataSource},on:{onScroll:t.handleTableScroll},scopedSlots:t._u([{key:"body",fn:function(e){return[t._t("body",null,null,e)]}}],null,!0)}):t._e()],1),t._t("loading"),t.dataSource.length?t._e():n("div",{staticClass:"cn-table-data-empty"},[t._t("empty")],2)],2)},p=[],m=(n("a9e3"),n("c7cd"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"cn-table-header"},[n("colgroup",t._l(t.columns,(function(t,e){return n("col",{key:e,attrs:{width:t.width||""}})})),0),n("thead",[t.withColumnCaption?n("tr",{staticClass:"cn-table-header-caption"},[t._l(t.columns,(function(e){return[e.caption?[e.caption.slot?t._t("colcaption",null,{namekey:e.key,caption:e.caption}):t._e()]:n("th",{key:e.name})]}))],2):t._e(),n("tr",t._l(t.columns,(function(e){return n("th",{key:e.key,class:{"fixed-th":e.fixed}},[e.header?t._t("header",null,{column:e}):n("span",[t._v(t._s(e.title))])],2)})),0)])])}),b=[],y={name:"cn-table-header",props:{columns:{type:Array,default:function(){return[]}}},computed:{withColumnCaption:function(){return this.columns.some((function(t){return t.caption}))}},mounted:function(){}},g=y,v=(n("e3cf"),n("2877")),S=Object(v["a"])(g,m,b,!1,null,null,null),_=S.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"cnTableBody",staticClass:"cn-table-body",style:{height:t.TableBodyheight+"px"},on:{scroll:t.handleBodyScrollTop}},[n("div",{ref:"phantom",staticClass:"cn-table-body-phantom",style:{height:t.phantomHeight}}),n("table",{ref:"tablebox",style:{transform:t.transform}},[n("colgroup",t._l(t.columns,(function(t,e){return n("col",{key:e,attrs:{width:t.width||""}})})),0),n("tbody",t._l(t.visibleData,(function(e,o){return n("tr",{key:o,attrs:{id:e.id}},t._l(t.columns,(function(o){return n("td",{key:o.key},[n("div",{staticClass:"td-container"},[o.body?t._t("body",null,{data:e,column:o}):n("span",[t._v(" "+t._s(e[o.key])+" ")])],2)])})),0)})),0)])])},C=[],x=(n("fb6a"),n("7db0"),{name:"cn-table-body",props:{height:{type:Number,default:0},columns:{type:Array,default:function(){return[]}},dataSource:{type:Array,default:function(){return[]}},onScroll:{type:Function,default:function(){}}},data:function(){return{start:0,end:2,itemHeight:0,transform:"",visibleCount:2,TableBodyheight:0,scrollTopCache:[],scrollTop:0}},computed:{visibleData:function(){if(this.visibleCount>this.dataSource.length){var t=this.$refs["cnTableBody"];t.scrollTop=0}return this.dataSource.slice(Math.max(this.start,0),Math.min(this.end,this.dataSource.length))},phantomHeight:function(){return Math.ceil(this.dataSource.length*this.itemHeight)+"px"}},watch:{height:function(t){this.setUpComp(t)}},methods:{handleBodyScrollTop:r["a"].throttle((function(t){var e=t.target.scrollTop;this.itemHeight=Math.min(this.itemHeight,this.getTrHeight(t.target));var n=this.$refs["tablebox"],o=t.target.getBoundingClientRect(),a=o.top,i=o.bottom,c=n.getBoundingClientRect(),l=c.bottom,r=c.top;this.$emit("onScroll",e,this.itemHeight,l-i===0,r-a===0),this.setUpPositionForUncertainRowHeight(e,t.target)}),0,{leading:!0}),setUpPositionForUncertainRowHeight:function(t,e){var n=e.querySelector("tr:first-child"),o=e.querySelector("tr:last-child"),a=e.getBoundingClientRect(),i=a.top,c=a.bottom,l=n.getBoundingClientRect(),r=l.height,u=l.bottom,s=o.getBoundingClientRect(),d=s.top;t<=0&&this.clearCache(),this.scrollTop<t?i>=u&&(this.addCache({scrollTop:t,id:n.id,start:this.start,height:r,transform:t}),this.setTransform({cache:this.scrollTopCache,scrollTop:t,multiple:Math.ceil((i-u)/this.height)})):this.scrollTop>t&&c<=d&&this.setTransform({cache:this.scrollTopCache,scrollTop:t,extr:-1}),this.scrollTop=t},setTransform:function(t){var e=t.cache,n=void 0===e?[]:e,o=t.scrollTop,a=void 0===o?0:o,i=t.extr,c=void 0===i?1:i,l=t.multiple,r=void 0===l?1:l,u=n.find((function(t){return t.scrollTop>=a}));if(u){var s=0,d=Math.max(u.start+c,0);n.slice(0,d).forEach((function(t){s+=t.height})),this.transform="translate3d(0,".concat(s,"px,0)"),console.log(s,a),this.start=d,this.end=this.start+this.visibleCount*Math.max(r,1)}},addCache:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.scrollTopCache.findIndex((function(e){return e.id===t.id}))<0&&this.scrollTopCache.push(t)},clearCache:function(){this.scrollTopCache=[],this.start=0,this.end=this.start+this.visibleCount,this.transform=""},setUpPositionWithBuf:function(t,e){var n=Math.floor(t/this.itemHeight),o=0;n>=e?(this.start=n-e,o=this.itemHeight*(n-e)):this.start=0,this.transform="translate3d(0,".concat(o,"px,0)"),this.end=n+this.visibleCount+e},setUpPositionNormal:function(t){var e=Math.floor(t/this.itemHeight),n=e*this.itemHeight;this.start=e,this.end=e+this.visibleCount,this.transform="translate3d(0,".concat(n,"px,0)")},getTrHeight:function(t){var e=[60],n=t.querySelectorAll("tr:nth-child(-n+5)")||[];return n.forEach((function(t){var n=t.getBoundingClientRect(),o=n.height;e.push(o)})),Math.min.apply(Math,e)},setUpComp:function(t){var e=this.$refs["cnTableBody"];this.itemHeight=this.getTrHeight(e),this.visibleCount=Math.max(Math.ceil(t/this.itemHeight),10),this.end=this.start+this.visibleCount,this.TableBodyheight=t,e.scrollTop=0}},mounted:function(){}}),T=x,B=(n("bd48"),Object(v["a"])(T,k,C,!1,null,null,null)),w=B.exports,O={name:"cn-table",components:{CnTableHeader:_,CnTableBody:w},props:{dataSource:{type:Array,default:function(){return[]}},columns:{type:Array,default:function(){return[]}},width:{type:Number,default:500},height:{type:Number,default:300}},data:function(){return{tableBodyHeight:0}},computed:{sortFixedColumns:function(){var t=this.columns;return t.filter((function(t){return t.fixed})).concat(t.filter((function(t){return!t.fixed})))}},methods:{handleTableScroll:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=this.$refs["fixedBody"].$el,i=this.$refs["cnTableBody"].$el;this.setBoundaryEmitter(e,n,o),a.scrollTop=t,i.scrollTop=t},setBoundaryEmitter:r["a"].debounce((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];n?this.$emit("boundaryTop"):e&&(this.$emit("boundaryBottom"),this.calculateTableBodyHeight(t))}),50),handleBodyScrollLeft:r["a"].throttle((function(t){this.setStaticWidth(this.$refs["leftStaticTable"])}),10,{leading:!0}),setStaticWidth:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;n?(t.classList.add("table-fixed-left-scroll"),t.style.width=Math.floor(e)+"px"):(t.classList.remove("table-fixed-left-scroll"),t.style.width="0px")},n=this.$refs["headerStaticTable"],o=0;t.querySelectorAll(".fixed-th").forEach((function(t){var e=t.getBoundingClientRect(),n=e.width;o+=n})),e(t,o,n.scrollLeft)},calculateTableBodyHeight:function(){var t=this.$el.getBoundingClientRect(),e=t.height,n=this.$refs["cnTableHeader"].$el,o=n.getBoundingClientRect(),a=o.height,i=o.top;document.fullscreenElement&&(a+=2*i);var c=e-a;this.dataSource.length&&(this.tableBodyHeight=c)}},mounted:function(){var t=this;document.addEventListener("fullscreenchange",(function(){setTimeout((function(){var e=t.$refs["leftStaticTable"];t.setStaticWidth(e),t.calculateTableBodyHeight()}),500)}))}},$=O,H=(n("31ce"),Object(v["a"])($,f,p,!1,null,null,null)),j=H.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",[n("input",{attrs:{type:"checkbox"},on:{change:t.handleClick}}),n("span",[t._v(" "+t._s(t.renderLabel())+" ")])])},M=[],D={name:"checkbox-header",props:{column:{type:Object,default:function(){return{}}},action:{type:Function,default:function(){}}},data:function(){return{}},methods:{handleClick:function(t){this.action(this.column.header.action,(function(e){return e.checked=t.target.checked,e}))},renderLabel:function(){return this.column.title}},mounted:function(){}},E=D,F=Object(v["a"])(E,L,M,!1,null,null,null),U=F.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",[n("input",{attrs:{type:"checkbox"},domProps:{value:t.$attrs.data.checked,checked:t.$attrs.data.checked},on:{change:function(e){return e.preventDefault(),t.handleClick.apply(null,arguments)}}}),n("span",[t._v(" "+t._s(t.renderLabel())+" ")])])},A=[],P={name:"checkbox-body",props:{column:{type:Object,default:function(){return{}}},action:{type:Function,default:function(){}}},data:function(){return{}},methods:{handleClick:function(t){this.action(this.column.body.action,Object(l["a"])(Object(l["a"])({},this.$attrs.data),{checked:t.target.checked}))},renderLabel:function(){return this.$attrs.data.index}},mounted:function(){}},z=P,N=Object(v["a"])(z,R,A,!1,null,null,null),q=N.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("th",{staticClass:"caption"},[n("span",[t._v(t._s(t.caption.text))])])},I=[],J={name:"text-caption",props:{caption:{type:Object,default:function(){}},namekey:{type:String,default:""},action:{type:Function,default:function(){}}}},K=J,G=(n("e1bc"),Object(v["a"])(K,W,I,!1,null,"7aaeda22",null)),Q=G.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("th",[n("input",{attrs:{type:"text"},on:{input:t.handleSearch}})])},X=[],Y=(n("caad"),n("2532"),n("498a"),{name:"search-caption",props:{caption:{type:Object,default:function(){}},namekey:{type:String,default:""},action:{type:Function,default:function(){}}},data:function(){return{}},methods:{handleSearch:function(t){var e=this;this.action(this.caption.action,(function(n){return n[e.namekey].toUpperCase().includes(t.target.value.trim().toUpperCase())}))}}}),Z=Y,tt=(n("1e94"),Object(v["a"])(Z,V,X,!1,null,"979e41a2",null)),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"filter-container"},[n("div",[t._v(t._s(t.renderLabel()))]),n("div",{staticClass:"filters"},[n("a",{on:{click:t.handleUp}},[t._v(" ↑")]),n("a",{on:{click:t.handleDown}},[t._v("↓")])])])},ot=[],at={name:"filter-header",props:{column:{type:Object,default:function(){return{}}},action:{type:Function,default:function(){}}},methods:{renderLabel:function(){return this.column.title},handleUp:function(){var t=this;this.action(this.column.header.actions.up,(function(e,n){return e[t.column.key]-n[t.column.key]}))},handleDown:function(){var t=this;this.action(this.column.header.actions.down,(function(e,n){return n[t.column.key]-e[t.column.key]}))}}},it=at,ct=(n("460d"),Object(v["a"])(it,nt,ot,!1,null,"ef3408d8",null)),lt=ct.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"operation"},[n("button",{on:{click:t.handleUpdate}},[t._v("修改")]),n("button",{on:{click:t.handleDelete}},[t._v("删除")])])},ut=[],st={name:"operation-body",props:{column:{type:Object,default:function(){return{}}},action:{type:Function,default:function(){}}},methods:{handleUpdate:function(){this.action(this.column.body.actions.update,this.$attrs.data)},handleDelete:function(){this.action(this.column.body.actions.delete,this.$attrs.data)}}},dt=st,ht=(n("0710"),Object(v["a"])(dt,rt,ut,!1,null,"0e0d5261",null)),ft=ht.exports,pt=[{id:0,province:"C",city:"S",name:"O",zip:"6",age:6,address:"4"},{id:1,province:"Ohio",city:"Lake Sydnee Lake Sydnee Lake Sydnee Lake Sydnee Lake Sydnee Lake Sydnee Lake Sydnee Lake Sydnee Lake Sydnee Lake Sydnee ",name:"Kieran Thompson",zip:"03930",age:234,address:"674 Stanton Locks"}],mt={name:"App",components:{CnTable:j,CheckboxHeader:U,CheckboxBody:q,TextCaption:Q,SearchCaption:et,FilterHeader:lt,OperationBody:ft},data:function(){return{dataSource:[],columns:[],isLoading:!1}},methods:{updateCol:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.dataSource=this.dataSource.map((function(e){return e.id===t.id?t:e}))},updateRow:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.dataSource=t},handleAction:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];return t.apply(this,n)},handleBoundaryTop:function(){console.log("reach top")},handleBoundaryBottom:function(){console.log("reach bottom"),this.fetchData()},createDataSource:function(t){for(var e=t.size,n=void 0===e?100:e,o=t.isUseDefaultDataSource,a=void 0!==o&&o,i=[],c=Math.ceil(this.dataSource.length/n),r=0;r<n;r++)a?i.push(Object(l["a"])(Object(l["a"])({},pt[Math.ceil(Math.random()*pt.length-1)]),{},{index:"".concat(c,"-").concat(r),id:h.a.datatype.uuid()})):i.push({index:"".concat(c,"-").concat(r),id:h.a.datatype.uuid(),province:h.a.address.state(),city:h.a.address.city(),name:h.a.name.findName(),zip:h.a.address.zipCode(),age:h.a.datatype.number(100),address:h.a.address.streetAddress()});return i},fetchData:function(){var t=this.dataSource,e=this;setTimeout((function(){e.dataSource=[].concat(Object(c["a"])(t),Object(c["a"])(e.createDataSource({isUseDefaultDataSource:!0}))),e.isLoading=!1}),1e3),this.isLoading=!0},toggelFullscreen:function(){var t=this.$refs["cnTable"].$el;s.a.isEnabled&&s.a.toggle(t)},createColumns:function(){this.columns=[{title:"No.",key:"index",width:100,fixed:"left",header:{slot:"CheckboxHeader",action:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},e=this.dataSource;this.updateRow(e.map(t))}},body:{slot:"CheckboxBody",action:function(t){this.updateCol(t)}}},{title:"姓名",key:"name",fixed:"left",width:150,caption:{slot:"SearchCaption",action:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},e=this.createDataSource();this.dataSource=e.filter(t)}}},{title:"年龄",key:"age",width:100,header:{slot:"FilterHeader",actions:{up:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},e=this.dataSource;this.updateRow(e.sort(t))},down:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},e=this.dataSource;this.updateRow(e.sort(t))}}},caption:{slot:"TextCaption",text:"Bonus Items"}},{title:"省份",key:"province",width:100},{title:"市区",key:"city",width:200},{title:"地址",key:"address",width:200},{title:"邮编",key:"zip",width:100},{title:"操作",key:"action",width:150,body:{slot:"OperationBody",actions:{update:function(){console.log("update")},delete:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.dataSource,n=e.findIndex((function(e){return e.id===t.id}));e.splice(n,1)}}}}]}},mounted:function(){this.createColumns()},created:function(){}},bt=mt,yt=(n("034f"),Object(v["a"])(bt,a,i,!1,null,null,null)),gt=yt.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(gt)}}).$mount("#app")},7424:function(t,e,n){},9085:function(t,e,n){},9864:function(t,e,n){},b769:function(t,e,n){},bd48:function(t,e,n){"use strict";n("b769")},bf89:function(t,e,n){},e1bc:function(t,e,n){"use strict";n("bf89")},e3cf:function(t,e,n){"use strict";n("493d")}});
//# sourceMappingURL=app.8cb6d72d.js.map