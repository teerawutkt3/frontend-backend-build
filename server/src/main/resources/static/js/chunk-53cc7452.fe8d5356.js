(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53cc7452"],{3846:function(e,t,r){r("9e1e")&&"g"!=/./g.flags&&r("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:r("0bfb")})},"469f":function(e,t,r){r("6c1c"),r("1654"),e.exports=r("7d7b")},"504c":function(e,t,r){var n=r("9e1e"),i=r("0d58"),a=r("6821"),s=r("52a7").f;e.exports=function(e){return function(t){var r,o=a(t),u=i(o),c=u.length,d=0,l=[];while(c>d)r=u[d++],n&&!s.call(o,r)||l.push(e?[r,o[r]]:o[r]);return l}}},"50ed":function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},"54a1":function(e,t,r){r("6c1c"),r("1654"),e.exports=r("95d5")},"5d73":function(e,t,r){e.exports=r("469f")},"6b54":function(e,t,r){"use strict";r("3846");var n=r("cb7c"),i=r("0bfb"),a=r("9e1e"),s="toString",o=/./[s],u=function(e){r("2aba")(RegExp.prototype,s,e,!0)};r("79e5")((function(){return"/a/b"!=o.call({source:"a",flags:"b"})}))?u((function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!a&&e instanceof RegExp?i.call(e):void 0)})):o.name!=s&&u((function(){return o.call(this)}))},"6c1c":function(e,t,r){r("c367");for(var n=r("e53d"),i=r("35e8"),a=r("481b"),s=r("5168")("toStringTag"),o="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<o.length;u++){var c=o[u],d=n[c],l=d&&d.prototype;l&&!l[s]&&i(l,s,c),a[c]=a.Array}},"7d7b":function(e,t,r){var n=r("e4ae"),i=r("7cd6");e.exports=r("584a").getIterator=function(e){var t=i(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return n(t.call(e))}},8436:function(e,t){e.exports=function(){}},"95d5":function(e,t,r){var n=r("40c3"),i=r("5168")("iterator"),a=r("481b");e.exports=r("584a").isIterable=function(e){var t=Object(e);return void 0!==t[i]||"@@iterator"in t||a.hasOwnProperty(n(t))}},a745:function(e,t,r){e.exports=r("f410")},bd76:function(e,t,r){"use strict";var n=[{id:0,name:"John Doe",registered:"2018/01/01",role:"Guest",status:"Pending"},{id:1,name:"Samppa Nori",registered:"2018/01/01",role:"Member",status:"Active"},{id:2,name:"Estavan Lykos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:3,name:"Chetan Mohamed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:4,name:"Derick Maximinus",registered:"2018/03/01",role:"Member",status:"Pending"},{id:5,name:"Friderik Dávid",registered:"2018/01/21",role:"Staff",status:"Active"},{id:6,name:"Yiorgos Avraamu",registered:"2018/01/01",role:"Member",status:"Active"},{id:7,name:"Avram Tarasios",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:8,name:"Quintin Ed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:9,name:"Enéas Kwadwo",registered:"2018/03/01",role:"Member",status:"Pending"},{id:10,name:"Agapetus Tadeáš",registered:"2018/01/21",role:"Staff",status:"Active"},{id:11,name:"Carwyn Fachtna",registered:"2018/01/01",role:"Member",status:"Active"},{id:12,name:"Nehemiah Tatius",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:13,name:"Ebbe Gemariah",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:14,name:"Eustorgios Amulius",registered:"2018/03/01",role:"Member",status:"Pending"},{id:15,name:"Leopold Gáspár",registered:"2018/01/21",role:"Staff",status:"Active"},{id:16,name:"Pompeius René",registered:"2018/01/01",role:"Member",status:"Active"},{id:17,name:"Paĉjo Jadon",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:18,name:"Micheal Mercurius",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:19,name:"Ganesha Dubhghall",registered:"2018/03/01",role:"Member",status:"Pending"},{id:20,name:"Hiroto Šimun",registered:"2018/01/21",role:"Staff",status:"Active"},{id:21,name:"Vishnu Serghei",registered:"2018/01/01",role:"Member",status:"Active"},{id:22,name:"Zbyněk Phoibos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:23,name:"Einar Randall",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:24,name:"Félix Troels",registered:"2018/03/21",role:"Staff",status:"Active"},{id:25,name:"Aulus Agmundr",registered:"2018/01/01",role:"Member",status:"Pending"},{id:42,name:"Ford Prefex",registered:"2001/05/21",role:"Alien",status:"Don't panic!"}];t["a"]=n},c367:function(e,t,r){"use strict";var n=r("8436"),i=r("50ed"),a=r("481b"),s=r("36c3");e.exports=r("30f1")(Array,"Array",(function(e,t){this._t=s(e),this._i=0,this._k=t}),(function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,i(1)):i(0,"keys"==t?r:"values"==t?e[r]:[r,e[r]])}),"values"),a.Arguments=a.Array,n("keys"),n("values"),n("entries")},c8bb:function(e,t,r){e.exports=r("54a1")},eeca:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-row",[r("b-col",{attrs:{cols:"12",lg:"6"}},[r("b-card",{attrs:{"no-header":""}},[r("template",{slot:"header"},[e._v("\n        User id:  "+e._s(e.$route.params.id)+"\n      ")]),r("b-table",{attrs:{striped:"",small:"",fixed:"",responsive:"sm",items:e.items(e.$route.params.id),fields:e.fields},scopedSlots:e._u([{key:"value",fn:function(t){return[r("strong",[e._v(e._s(t.item.value))])]}}])}),r("template",{slot:"footer"},[r("b-button",{on:{click:e.goBack}},[e._v("Back")])],1)],2)],1)],1)},i=[],a=r("a745"),s=r.n(a);function o(e){if(s()(e))return e}var u=r("5d73"),c=r.n(u),d=r("c8bb"),l=r.n(d);function f(e,t){if(l()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,i=!1,a=void 0;try{for(var s,o=c()(e);!(n=(s=o.next()).done);n=!0)if(r.push(s.value),t&&r.length===t)break}catch(u){i=!0,a=u}finally{try{n||null==o["return"]||o["return"]()}finally{if(i)throw a}}return r}}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function g(e,t){return o(e)||f(e,t)||m()}r("ac6a"),r("cadf"),r("ffc1"),r("6b54");var v=r("bd76"),b={name:"User",props:{caption:{type:String,default:"User id"}},data:function(){return{items:function(e){var t=v["a"].find((function(t){return t.id.toString()===e})),r=t?Object.entries(t):[["id","Not found"]];return r.map((function(e){var t=g(e,2),r=t[0],n=t[1];return{key:r,value:n}}))},fields:[{key:"key"},{key:"value"}]}},methods:{goBack:function(){this.$router.go(-1)}}},p=b,h=r("2877"),S=Object(h["a"])(p,n,i,!1,null,null,null);t["default"]=S.exports},ffc1:function(e,t,r){var n=r("5ca1"),i=r("504c")(!0);n(n.S,"Object",{entries:function(e){return i(e)}})}}]);
//# sourceMappingURL=chunk-53cc7452.fe8d5356.js.map