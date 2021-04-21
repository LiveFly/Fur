(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(214)),i={id:"json",title:"10. JSON \u9759\u6001\u7c7b",sidebar_label:"10. JSON \u9759\u6001\u7c7b"},c={unversionedId:"global/json",id:"global/json",isDocsHomePage:!1,title:"10. JSON \u9759\u6001\u7c7b",description:"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 Furion 1.16.0 + \u7248\u672c\u4f7f\u7528\u3002",source:"@site/docs/global/json.mdx",sourceDirName:"global",slug:"/global/json",permalink:"/docs/global/json",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/docs/global/json.mdx",version:"current",lastUpdatedBy:"Monk",lastUpdatedAt:1618998449,formattedLastUpdatedAt:"4/21/2021",sidebar_label:"10. JSON \u9759\u6001\u7c7b",frontMatter:{id:"json",title:"10. JSON \u9759\u6001\u7c7b",sidebar_label:"10. JSON \u9759\u6001\u7c7b"},sidebar:"global",previous:{title:"9. MessageCenter \u9759\u6001\u7c7b",permalink:"/docs/global/messagecenter"},next:{title:"11. Scoped \u9759\u6001\u7c7b",permalink:"/docs/global/scoped"}},l=[{value:"10.1 \u83b7\u53d6\u5e8f\u5217\u5316\u63d0\u4f9b\u5668",id:"101-\u83b7\u53d6\u5e8f\u5217\u5316\u63d0\u4f9b\u5668",children:[]},{value:"10.2 \u5e8f\u5217\u5316",id:"102-\u5e8f\u5217\u5316",children:[]},{value:"10.3 \u53cd\u5e8f\u5217\u5316",id:"103-\u53cd\u5e8f\u5217\u5316",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u7248\u672c\u8bf4\u660e")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",Object(o.b)("inlineCode",{parentName:"p"},"Furion 1.16.0 +")," \u7248\u672c\u4f7f\u7528\u3002"))),Object(o.b)("h2",{id:"101-\u83b7\u53d6\u5e8f\u5217\u5316\u63d0\u4f9b\u5668"},"10.1 \u83b7\u53d6\u5e8f\u5217\u5316\u63d0\u4f9b\u5668"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"var http = JSON.GetJsonSerializer();\n")),Object(o.b)("h2",{id:"102-\u5e8f\u5217\u5316"},"10.2 \u5e8f\u5217\u5316"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"var str = JSON.Serialize(obj, [options]);\n")),Object(o.b)("h2",{id:"103-\u53cd\u5e8f\u5217\u5316"},"10.3 \u53cd\u5e8f\u5217\u5316"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"var obj = JSON.Deserialize<T>(str, [options]);\n")))}p.isMDXComponent=!0},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),u=r,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);