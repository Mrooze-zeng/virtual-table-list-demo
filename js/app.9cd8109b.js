(function(t){function e(e){for(var o,c,r=e[0],l=e[1],s=e[2],h=0,d=[];h<r.length;h++)c=r[h],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&d.push(i[c][0]),i[c]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,r=1;r<n.length;r++){var l=n[r];0!==i[l]&&(o=!1)}o&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},i={app:0},a=[];function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/virtual-table-list-demo/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var s=0;s<r.length;s++)e(r[s]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0710":function(t,e,n){"use strict";n("3c1e")},"19ac":function(t,e,n){},"31ce":function(t,e,n){"use strict";n("45ee")},"3c1e":function(t,e,n){},"45ee":function(t,e,n){},"460d":function(t,e,n){"use strict";n("7424")},"493d":function(t,e,n){},5241:function(t,e,n){"use strict";n("b9ad")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-table",{attrs:{rowHeight:46}},[n("h1",{staticClass:"title"},[t._v("with row height set")])]),n("v-table",[n("h1",{staticClass:"title"},[t._v("with row height unset")])])],1)},a=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"table"},[t._t("default"),n("cn-table",{ref:"cnTable",attrs:{mod:t.mod,height:500,width:800,rowHeight:t.rowHeight,dataSource:t.dataSource,columns:t.columns},on:{boundaryTop:t.handleBoundaryTop,boundaryBottom:t.handleBoundaryBottom},scopedSlots:t._u([{key:"colcaption",fn:function(e){return[n(e.caption.slot,t._b({tag:"component",attrs:{action:t.handleAction}},"component",e,!1))]}},{key:"header",fn:function(e){return[n(e.column.header.slot,t._b({tag:"component",attrs:{action:t.handleAction}},"component",e,!1))]}},{key:"body",fn:function(e){return[n(e.column.body.slot,t._b({tag:"component",attrs:{action:t.handleAction}},"component",e,!1))]}},t.isLoading?{key:"loading",fn:function(){return[n("div",{staticClass:"lds-ellipsis"},[n("div"),n("div"),n("div"),n("div")])]},proxy:!0}:null,{key:"empty",fn:function(){return[n("div",[t._v(" data empty ")])]},proxy:!0}],null,!0)}),n("br"),n("div",{staticClass:"dispaly-box"},[n("button",{on:{click:t.fetchData}},[t._v("fetch data")]),n("button",{on:{click:t.toggelFullscreen}},[t._v("fullscreen")]),n("span",[t._v("total:"+t._s(t.dataSource.length))])])],2)},r=[],l=n("2909"),s=n("5530"),u=(n("a9e3"),n("d81d"),n("99af"),n("b0c0"),n("4de4"),n("4e82"),n("c740"),n("a434"),n("c46f")),h=n("93bf"),d=n.n(h),f=n("359c"),p=n.n(f),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"cnTable",staticClass:"cn-table",style:{width:t.width+"px",height:t.height+"px"}},[n("div",{ref:"headerStaticTable",staticClass:"cn-table-fixed-header",on:{scroll:function(e){return e.preventDefault(),t.handleBodyScrollLeft.apply(null,arguments)}}},[n("cn-table-header",{ref:"cnTableHeader",attrs:{columns:t.sortFixedColumns},scopedSlots:t._u([{key:"colcaption",fn:function(e){return[t._t("colcaption",null,null,e)]}},{key:"header",fn:function(e){return[t._t("header",null,null,e)]}}],null,!0)}),t.dataSource.length?n("cn-table-body",{ref:"cnTableBody",attrs:{mod:t.mod,height:t.tableBodyHeight,rowHeight:t.rowHeight,columns:t.sortFixedColumns,dataSource:t.dataSource,target:"fixedBody"},on:{onScroll:t.handleTableScroll,"hook:mounted":t.calculateTableBodyHeight},scopedSlots:t._u([{key:"body",fn:function(e){return[t._t("body",null,null,e)]}}],null,!0)}):t._e()],1),n("div",{ref:"leftStaticTable",staticClass:"table-fixed-left"},[n("cn-table-header",{attrs:{columns:t.sortFixedColumns},scopedSlots:t._u([{key:"colcaption",fn:function(e){return[t._t("colcaption",null,null,e)]}},{key:"header",fn:function(e){return[t._t("header",null,null,e)]}}],null,!0)}),t.dataSource.length?n("cn-table-body",{ref:"fixedBody",attrs:{mod:t.mod,height:t.tableBodyHeight,rowHeight:t.rowHeight,columns:t.sortFixedColumns,dataSource:t.dataSource,target:"cnTableBody"},on:{onScroll:t.handleTableScroll},scopedSlots:t._u([{key:"body",fn:function(e){return[t._t("body",null,null,e)]}}],null,!0)}):t._e()],1),t._t("loading"),t.dataSource.length?t._e():n("div",{staticClass:"cn-table-data-empty"},[t._t("empty")],2)],2)},g=[],b=(n("c7cd"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"cn-table-header"},[n("colgroup",t._l(t.columns,(function(t,e){return n("col",{key:e,attrs:{width:t.width||""}})})),0),n("thead",[t.withColumnCaption.length?n("tr",{staticClass:"cn-table-header-caption"},[t._l(t.withColumnCaption,(function(e){return[n("th",{key:e.name,staticClass:"th-caption",class:{"fixed-th":e.fixed},attrs:{colspan:e.caption&&e.caption.colspan}},[e.caption&&e.caption.slot?t._t("colcaption",null,{namekey:e.key,caption:e.caption}):t._e()],2)]}))],2):t._e(),n("tr",t._l(t.columns,(function(e){return n("th",{key:e.key},[e.header?t._t("header",null,{column:e}):n("span",[t._v(t._s(e.title))])],2)})),0)])])}),y=[],v={name:"cn-table-header",props:{columns:{type:Array,default:function(){return[]}}},computed:{withColumnCaption:function(){var t=Object(l["a"])(this.columns),e=t.some((function(t){return t.caption})),n=[];return this.columns.reduce((function(t,e,o,i){return t>=o?console.log(o):e.caption&&e.caption.colspan?(t=o+e.caption.colspan-1,n.push(e)):t<o&&(t=o,n.push(e)),t}),-1),e?n:[]}},mounted:function(){}},C=v,S=(n("e3cf"),n("2877")),k=Object(S["a"])(C,b,y,!1,null,null,null),x=k.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"cnTableBody",staticClass:"cn-table-body",style:{"max-height":t.TableBodyheight+"px"},attrs:{"data-sign":t._uid},on:{scroll:t.handleBodyScrollTop,mouseenter:t.setCurrentTarget,mouseleave:t.setCurrentTarget}},[n("div",{ref:"phantom",staticClass:"cn-table-body-phantom",style:{"min-height":t.phantomHeight+"px"}}),n("table",{ref:"tablebox",style:{transform:t.transform}},[n("colgroup",t._l(t.columns,(function(t,e){return n("col",{key:e,attrs:{width:t.width||""}})})),0),n("tbody",t._l(t.visibleData,(function(e,o){return n("tr",{key:o,attrs:{id:e.id}},t._l(t.columns,(function(o){return n("td",{key:o.key,class:{uncertainRowHeight:!t.rowHeight}},[n("div",{class:{"td-container":t.rowHeight},style:t.rowHeight>0?{height:t.rowHeight+"px"}:{}},[o.body?t._t("body",null,{data:e,column:o}):n("span",[t._v(" "+t._s(e[o.key])+" ")])],2)])})),0)})),0)])])},_=[],w=(n("fb6a"),n("7db0"),{name:"cn-table-body",props:{mod:{type:Number,default:0},height:{type:Number,default:0},columns:{type:Array,default:function(){return[]}},dataSource:{type:Array,default:function(){return[]}},onScroll:{type:Function,default:function(){}},target:{type:String,default:""},rowHeight:{type:Number,default:0}},data:function(){return{start:0,end:2,itemHeight:0,transform:"",visibleCount:2,TableBodyheight:0,scrollTopCache:[],scrollTop:0,sign:""}},computed:{visibleData:function(){return this.dataSource.slice(Math.max(this.start,0),Math.min(this.end,this.dataSource.length))},phantomHeight:function(){var t=Math.min(this.end*this.itemHeight,this.dataSource.length*this.itemHeight);return Math.ceil(t)+1}},watch:{height:function(t){this.setUpComp(t)}},methods:{handleBodyScrollTop:u["a"].throttle((function(t){var e=t.target.scrollTop;if(this.itemHeight=Math.min(this.itemHeight,this.getTrHeight(t.target)),this.rowHeight)this.setUpPositionWithBuf(e,this.visibleCount);else switch(this.mod){case 0:this.setPositionForUncertainRowHeightWithStack(e,t.target);break;case 1:this.setPositionForUncertainRowHeightWithCache(e,t.target);break}this.syncScroll(e,t.target)}),0,{leading:!0}),isMaxCount:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.end;return t>=this.dataSource.length},setCurrentTarget:function(t){"mouseenter"===t.type?this.sign=t.target.dataset.sign:this.sign=""},syncScroll:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0,n=this.$parent.$refs[this.target]||{};n.$el&&this.sign&&(n.$el.scrollTop=t,this.$emit("onScroll",t,e,this.isMaxCount(),this.end-this.start))},setPositionForUncertainRowHeightWithStack:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0;t<=0&&this.clearCache(),this.setScrollTopCacheStack({scrollTop:t,container:e,isRollingDown:this.scrollTop<=t}),this.setTransform2(),this.scrollTop=t},setScrollTopCacheStack:function(t){var e=t.scrollTop,n=void 0===e?0:e,o=t.container,i=t.bufSize,a=void 0===i?this.height/2:i,c=t.isRollingDown,r=void 0===c||c,l=o.getBoundingClientRect(),s=l.top,u=l.bottom,h=o.querySelector("tr:first-child"),d=o.querySelector("tr:last-child"),f=h.getBoundingClientRect(),p=f.height,m=f.top,g=d.getBoundingClientRect(),b=g.top;r?this.cachePush(m,s,a,h,p):this.cachePop(b,u,a,n)},cachePush:function(t,e,n,o,i){var a=this.scrollTopCache,c=Math.max(0,this.start);if(t+n<=e){var r=a.findIndex((function(t){return t.id===o.id}));r<0&&!this.isMaxCount(this.end-1)&&this.scrollTopCache.push({id:o.id,start:c,height:i})}},cachePop:function(t,e,n,o){e<=t-n&&this.scrollTopCache.pop();for(var i=this.scrollTopCache,a=n,c=0;c<i.length;c++)if(a+=i[c].height,o<=a){this.scrollTopCache=i.slice(0,c);break}},setTransform2:function(){var t=0,e=this.scrollTopCache;this.start=e.length,e.slice(0,this.start).forEach((function(e){t+=e.height})),this.transform="translate3d(0,".concat(t,"px,0)"),this.end=this.start+2*this.visibleCount},setPositionForUncertainRowHeightWithCache:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0,n=e.querySelector("tr:first-child"),o=e.getBoundingClientRect(),i=o.top,a=n.getBoundingClientRect(),c=a.height,r=a.bottom,l=a.top;t<=0&&this.clearCache(),this.scrollTop<t?(i>=r&&this.addCache({scrollTop:t,id:n.id,start:this.start,height:c}),this.setTransform({cache:this.scrollTopCache,scrollTop:t,multiple:Math.ceil((i-l)/this.height)})):this.scrollTop>t&&this.setTransform({cache:this.scrollTopCache,scrollTop:t,extr:-1}),this.scrollTop=t},setTransform:function(t){var e=t.cache,n=void 0===e?[]:e,o=t.scrollTop,i=void 0===o?0:o,a=t.extr,c=void 0===a?1:a,r=t.multiple,l=void 0===r?1:r,s=n.find((function(t){return t.scrollTop>=i}));if(s){var u=0,h=Math.max(s.start+c,0);n.slice(0,h).forEach((function(t){u+=t.height})),this.transform="translate3d(0,".concat(u,"px,0)"),this.start=h,this.end=h+this.visibleCount*Math.max(l,1)}},addCache:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.scrollTopCache.findIndex((function(e){return e.id===t.id}))<0&&this.scrollTopCache.push(t)},clearCache:function(){this.scrollTopCache=[],this.start=0,this.end=this.start+this.visibleCount,this.transform=""},setUpPositionWithBuf:function(t,e){var n=Math.floor(t/this.itemHeight),o=0;n>=e&&(e-=1,o+=1),this.start=Math.max(n-e,0),this.end=this.start+this.visibleCount+e+o,this.transform="translate3d(0,".concat(this.itemHeight*this.start,"px,0)")},getTrHeight:function(t){var e=[60],n=t.querySelectorAll("tr:nth-child(-n+5)")||[];return n.forEach((function(t){var n=t.getBoundingClientRect(),o=n.height;e.push(o)})),Math.min.apply(Math,e)},setUpComp:function(t){var e=this.$refs["cnTableBody"];this.itemHeight=this.getTrHeight(e),this.visibleCount=Math.max(Math.ceil(t/this.itemHeight),10),this.end=this.start+this.visibleCount,this.TableBodyheight=t,e.scrollTop=0}},mounted:function(){}}),B=w,H=(n("bd48"),Object(S["a"])(B,T,_,!1,null,null,null)),O=H.exports,$={name:"cn-table",components:{CnTableHeader:x,CnTableBody:O},props:{mod:{type:Number,default:0},dataSource:{type:Array,default:function(){return[]}},columns:{type:Array,default:function(){return[]}},width:{type:Number,default:500},height:{type:Number,default:300},rowHeight:{type:Number,default:0}},data:function(){return{tableBodyHeight:0}},computed:{sortFixedColumns:function(){var t=this.columns;return t.filter((function(t){return t.fixed})).concat(t.filter((function(t){return!t.fixed})))}},methods:{handleTableScroll:u["a"].debounce((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=e.getBoundingClientRect(),a=i.bottom,c=e.querySelector("table"),r=c.getBoundingClientRect(),l=r.bottom;0===t&&this.$emit("boundaryTop",o),l<=a&&n&&(this.$emit("boundaryBottom",o),this.calculateTableBodyHeight())}),50),handleBodyScrollLeft:u["a"].throttle((function(t){this.setStaticWidth(this.$refs["leftStaticTable"])}),10,{leading:!0}),setStaticWidth:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;n?(t.classList.add("table-fixed-left-scroll"),t.style.width=Math.floor(e)+"px"):(t.classList.remove("table-fixed-left-scroll"),t.style.width="0px")},n=this.$refs["headerStaticTable"],o=0;t.querySelectorAll(".fixed-th").forEach((function(t){var e=t.getBoundingClientRect(),n=e.width;o+=n})),e(t,o,n.scrollLeft)},calculateTableBodyHeight:function(){var t=this.$el.getBoundingClientRect(),e=t.height,n=this.$refs["cnTableHeader"].$el,o=n.getBoundingClientRect(),i=o.height,a=o.top;document.fullscreenElement&&(i+=2*a);var c=e-i;this.dataSource.length&&(this.tableBodyHeight=c)}},mounted:function(){var t=this;document.addEventListener("fullscreenchange",(function(){setTimeout((function(){var e=t.$refs["leftStaticTable"];t.setStaticWidth(e),t.calculateTableBodyHeight()}),500)}))}},j=$,L=(n("31ce"),Object(S["a"])(j,m,g,!1,null,null,null)),M=L.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",[n("input",{attrs:{type:"checkbox"},on:{change:t.handleClick}}),n("span",[t._v(" "+t._s(t.renderLabel())+" ")])])},D=[],F={name:"checkbox-header",props:{column:{type:Object,default:function(){return{}}},action:{type:Function,default:function(){}}},data:function(){return{}},methods:{handleClick:function(t){this.action(this.column.header.action,(function(e){return e.checked=t.target.checked,e}))},renderLabel:function(){return this.column.title}},mounted:function(){}},E=F,P=Object(S["a"])(E,R,D,!1,null,null,null),U=P.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",[n("input",{attrs:{type:"checkbox"},domProps:{value:t.$attrs.data.checked,checked:t.$attrs.data.checked},on:{change:function(e){return e.preventDefault(),t.handleClick.apply(null,arguments)}}}),n("span",[t._v(" "+t._s(t.renderLabel())+" ")])])},N=[],W={name:"checkbox-body",props:{column:{type:Object,default:function(){return{}}},action:{type:Function,default:function(){}}},data:function(){return{}},methods:{handleClick:function(t){this.action(this.column.body.action,Object(s["a"])(Object(s["a"])({},this.$attrs.data),{checked:t.target.checked}))},renderLabel:function(){return this.$attrs.data.index}},mounted:function(){}},z=W,q=Object(S["a"])(z,A,N,!1,null,null,null),I=q.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"caption",style:t.caption.style},[n("span",[t._v(t._s(t.caption.text))])])},K=[],G={name:"text-caption",props:{caption:{type:Object,default:function(){}},namekey:{type:String,default:""},action:{type:Function,default:function(){}}}},Q=G,V=(n("6193"),Object(S["a"])(Q,J,K,!1,null,"7db22bf7",null)),X=V.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",{attrs:{type:"text"},on:{input:t.handleSearch}})},Z=[],tt=(n("caad"),n("2532"),n("498a"),{name:"search-caption",props:{caption:{type:Object,default:function(){}},namekey:{type:String,default:""},action:{type:Function,default:function(){}}},data:function(){return{}},methods:{handleSearch:function(t){var e=this;this.action(this.caption.action,(function(n){return n[e.namekey].toUpperCase().includes(t.target.value.trim().toUpperCase())}))}}}),et=tt,nt=(n("5241"),Object(S["a"])(et,Y,Z,!1,null,"be6065d4",null)),ot=nt.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"filter-container"},[n("div",[t._v(t._s(t.renderLabel()))]),n("div",{staticClass:"filters"},[n("a",{on:{click:t.handleUp}},[t._v(" ↑")]),n("a",{on:{click:t.handleDown}},[t._v("↓")])])])},at=[],ct={name:"filter-header",props:{column:{type:Object,default:function(){return{}}},action:{type:Function,default:function(){}}},methods:{renderLabel:function(){return this.column.title},handleUp:function(){var t=this;this.action(this.column.header.actions.up,(function(e,n){return e[t.column.key]-n[t.column.key]}))},handleDown:function(){var t=this;this.action(this.column.header.actions.down,(function(e,n){return n[t.column.key]-e[t.column.key]}))}}},rt=ct,lt=(n("460d"),Object(S["a"])(rt,it,at,!1,null,"ef3408d8",null)),st=lt.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"operation"},[n("button",{on:{click:t.handleUpdate}},[t._v("修改")]),n("button",{on:{click:t.handleDelete}},[t._v("删除")])])},ht=[],dt={name:"operation-body",props:{column:{type:Object,default:function(){return{}}},action:{type:Function,default:function(){}}},methods:{handleUpdate:function(){this.action(this.column.body.actions.update,this.$attrs.data)},handleDelete:function(){this.action(this.column.body.actions.delete,this.$attrs.data)}}},ft=dt,pt=(n("0710"),Object(S["a"])(ft,ut,ht,!1,null,"0e0d5261",null)),mt=pt.exports,gt=[{id:0,province:"C",city:"S",name:"O",zip:"6",age:6,address:"4"},{id:1,province:"Ohio",city:"Lake Sydnee Lake Sydnee Lake Sydnee Lake Sydnee Lake Sydnee Lake Sydnee Lake Sydnee Lake Sydnee Lake Sydnee Lake Sydnee ",name:"Kieran Thompson",zip:"03930",age:234,address:"674 Stanton Locks"}],bt={name:"v-table",components:{CnTable:M,CheckboxHeader:U,CheckboxBody:I,TextCaption:X,SearchCaption:ot,FilterHeader:st,OperationBody:mt},props:{rowHeight:{type:Number,default:0},mod:{type:Number,default:0}},data:function(){return{dataSource:[],columns:[],isLoading:!1}},methods:{updateCol:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.dataSource=this.dataSource.map((function(e){return e.id===t.id?t:e}))},updateRow:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.dataSource=t},handleAction:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];return t.apply(this,n)},handleBoundaryTop:function(){console.log("reach top")},handleBoundaryBottom:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;console.log("reach bottom",t),this.fetchData({count:t})},createDataSource:function(t){for(var e=t.size,n=void 0===e?2:e,o=t.isUseDefaultDataSource,i=void 0!==o&&o,a=[],c=Math.ceil(this.dataSource.length/n),r=0;r<n;r++)i?a.push(Object(s["a"])(Object(s["a"])({},gt[Math.ceil(Math.random()*gt.length-1)]),{},{index:"".concat(c,"-").concat(r),id:p.a.datatype.uuid()})):a.push({index:"".concat(c,"-").concat(r),id:p.a.datatype.uuid(),province:p.a.address.state(),city:p.a.address.city(),name:p.a.name.findName(),zip:p.a.address.zipCode(),age:p.a.datatype.number(100),description:p.a.lorem.sentence(),address:p.a.address.streetAddress()});return a},fetchData:function(t){var e=t.count,n=this.dataSource,o=this;setTimeout((function(){o.dataSource=[].concat(Object(l["a"])(n),Object(l["a"])(o.createDataSource({size:e,isUseDefaultDataSource:!1}))),o.isLoading=!1}),1e3),this.isLoading=!0},toggelFullscreen:function(){var t=this.$refs["cnTable"].$el;d.a.isEnabled&&d.a.toggle(t)},createColumns:function(){this.columns=[{title:"No.",key:"index",width:100,fixed:"left",header:{slot:"CheckboxHeader",action:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},e=this.dataSource;this.updateRow(e.map(t))}},body:{slot:"CheckboxBody",action:function(t){this.updateCol(t)}}},{title:"姓名",key:"name",fixed:"left",width:150,caption:{slot:"SearchCaption",action:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},e=this.createDataSource();this.dataSource=e.filter(t)}}},{title:"年龄",key:"age",width:100,header:{slot:"FilterHeader",actions:{up:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},e=this.dataSource;this.updateRow(e.sort(t))},down:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},e=this.dataSource;this.updateRow(e.sort(t))}}},caption:{slot:"TextCaption",text:"Bonus 1",colspan:2}},{title:"省份",key:"province",width:100},{title:"市区",key:"city",width:200,caption:{slot:"TextCaption",text:"Bonus 3",colspan:2,style:"background-color:#8e929c;"}},{title:"地址",key:"address",width:200},{title:"邮编",key:"zip",width:100},{title:"说明",key:"description",width:200},{title:"操作",key:"action",width:150,body:{slot:"OperationBody",actions:{update:function(){console.log("update")},delete:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.dataSource,n=e.findIndex((function(e){return e.id===t.id}));e.splice(n,1)}}}}]}},mounted:function(){this.createColumns()},created:function(){}},yt=bt,vt=(n("691c0"),Object(S["a"])(yt,c,r,!1,null,null,null)),Ct=vt.exports,St={name:"app",components:{"v-table":Ct}},kt=St,xt=(n("e0f1"),Object(S["a"])(kt,i,a,!1,null,"f973ee96",null)),Tt=xt.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(Tt)}}).$mount("#app")},6193:function(t,e,n){"use strict";n("9ffc")},"691c0":function(t,e,n){"use strict";n("19ac")},7424:function(t,e,n){},"9ffc":function(t,e,n){},b769:function(t,e,n){},b9ad:function(t,e,n){},bd48:function(t,e,n){"use strict";n("b769")},e0f1:function(t,e,n){"use strict";n("f032")},e3cf:function(t,e,n){"use strict";n("493d")},f032:function(t,e,n){}});
//# sourceMappingURL=app.9cd8109b.js.map