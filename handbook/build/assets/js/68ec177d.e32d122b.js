(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{131:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return i})),n.d(r,"toc",(function(){return l})),n.d(r,"default",(function(){return b}));var t=n(3),a=n(7),o=(n(0),n(209)),c={id:"sparetime",title:"12. SpareTime \u9759\u6001\u7c7b",sidebar_label:"12. SpareTime \u9759\u6001\u7c7b"},i={unversionedId:"global/sparetime",id:"global/sparetime",isDocsHomePage:!1,title:"12. SpareTime \u9759\u6001\u7c7b",description:"SpareTime \u9759\u6001\u7c7b\u63d0\u4f9b\u4e86\u4e00\u4e9b\u65b9\u6cd5\u65b9\u4fbf\u521d\u59cb\u5316\u548c\u7ba1\u7406\u4efb\u52a1",source:"@site/docs/global/sparetime.mdx",sourceDirName:"global",slug:"/global/sparetime",permalink:"/furion/docs/global/sparetime",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/docs/global/sparetime.mdx",version:"current",lastUpdatedBy:"Monk",lastUpdatedAt:1618803530,formattedLastUpdatedAt:"4/19/2021",sidebar_label:"12. SpareTime \u9759\u6001\u7c7b",frontMatter:{id:"sparetime",title:"12. SpareTime \u9759\u6001\u7c7b",sidebar_label:"12. SpareTime \u9759\u6001\u7c7b"},sidebar:"global",previous:{title:"11. Scoped \u9759\u6001\u7c7b",permalink:"/furion/docs/global/scoped"}},l=[{value:"12.1 \u521d\u59cb\u5316\u4efb\u52a1",id:"121-\u521d\u59cb\u5316\u4efb\u52a1",children:[]},{value:"12.2 \u5b9e\u73b0\u540e\u53f0\u6267\u884c",id:"122-\u5b9e\u73b0\u540e\u53f0\u6267\u884c",children:[]},{value:"12.3 \u5f00\u59cb\u4e00\u4e2a\u4efb\u52a1",id:"123-\u5f00\u59cb\u4e00\u4e2a\u4efb\u52a1",children:[]},{value:"12.4 \u6682\u505c\u4e00\u4e2a\u4efb\u52a1",id:"124-\u6682\u505c\u4e00\u4e2a\u4efb\u52a1",children:[]},{value:"12.5 \u53d6\u6d88\u4e00\u4e2a\u4efb\u52a1",id:"125-\u53d6\u6d88\u4e00\u4e2a\u4efb\u52a1",children:[]},{value:"12.6 \u9500\u6bc1\u6240\u6709\u4efb\u52a1",id:"126-\u9500\u6bc1\u6240\u6709\u4efb\u52a1",children:[]},{value:"12.7 \u83b7\u53d6\u6240\u6709\u4efb\u52a1",id:"127-\u83b7\u53d6\u6240\u6709\u4efb\u52a1",children:[]},{value:"12.8 \u89e3\u6790 <code>Cron</code> \u8868\u8fbe\u5f0f",id:"128-\u89e3\u6790-cron-\u8868\u8fbe\u5f0f",children:[]},{value:"12.9 <code>BackgroundService</code> \u95f4\u9694\u5b9a\u65f6\u4efb\u52a1",id:"129-backgroundservice-\u95f4\u9694\u5b9a\u65f6\u4efb\u52a1",children:[]},{value:"12.10 <code>BackgroundService</code> <code>Cron</code> \u5b9a\u65f6\u4efb\u52a1",id:"1210-backgroundservice-cron-\u5b9a\u65f6\u4efb\u52a1",children:[]}],p={toc:l};function b(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"SpareTime")," \u9759\u6001\u7c7b\u63d0\u4f9b\u4e86\u4e00\u4e9b\u65b9\u6cd5\u65b9\u4fbf\u521d\u59cb\u5316\u548c\u7ba1\u7406\u4efb\u52a1"),Object(o.b)("h2",{id:"121-\u521d\u59cb\u5316\u4efb\u52a1"},"12.1 \u521d\u59cb\u5316\u4efb\u52a1"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"// \u5f00\u542f\u95f4\u9694\u4efb\u52a1\nSpareTime.Do(interval, [options]);\n\n// \u5f00\u542f Cron \u8868\u8fbe\u5f0f\u4efb\u52a1\nSpareTime.Do(expression, [options]);\n\n// \u53ea\u6267\u884c\u4e00\u6b21\u4efb\u52a1\nSpareTime.DoOnce(interval, [options]);\n\n// \u5b9e\u73b0\u81ea\u5b9a\u4e49\u4efb\u52a1\nSpareTime.Do(()=>{\n    return DateTime.Now.AddMinutes(10);\n},[options]);\n")),Object(o.b)("h2",{id:"122-\u5b9e\u73b0\u540e\u53f0\u6267\u884c"},"12.2 \u5b9e\u73b0\u540e\u53f0\u6267\u884c"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"// \u5b9e\u73b0\u540e\u53f0\u6267\u884c\nSpareTime.DoIt(()=>{});\n")),Object(o.b)("h2",{id:"123-\u5f00\u59cb\u4e00\u4e2a\u4efb\u52a1"},"12.3 \u5f00\u59cb\u4e00\u4e2a\u4efb\u52a1"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},'SpareTime.Start("\u4efb\u52a1\u6807\u8bc6");\n')),Object(o.b)("h2",{id:"124-\u6682\u505c\u4e00\u4e2a\u4efb\u52a1"},"12.4 \u6682\u505c\u4e00\u4e2a\u4efb\u52a1"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},'SpareTime.Stop("\u4efb\u52a1\u6807\u8bc6");\n// \u8fd8\u53ef\u4ee5\u6807\u8bb0\u4e00\u4e2a\u4efb\u52a1\u6267\u884c\u5931\u8d25\nSpareTime.Stop("\u4efb\u52a1\u6807\u8bc6", true);\n')),Object(o.b)("h2",{id:"125-\u53d6\u6d88\u4e00\u4e2a\u4efb\u52a1"},"12.5 \u53d6\u6d88\u4e00\u4e2a\u4efb\u52a1"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},'SpareTime.Cancel("\u4efb\u52a1\u540d\u79f0");\n')),Object(o.b)("h2",{id:"126-\u9500\u6bc1\u6240\u6709\u4efb\u52a1"},"12.6 \u9500\u6bc1\u6240\u6709\u4efb\u52a1"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"SpareTime.Dispose();\n")),Object(o.b)("h2",{id:"127-\u83b7\u53d6\u6240\u6709\u4efb\u52a1"},"12.7 \u83b7\u53d6\u6240\u6709\u4efb\u52a1"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"var workers = SpareTime.GetWorkers();\n")),Object(o.b)("h2",{id:"128-\u89e3\u6790-cron-\u8868\u8fbe\u5f0f"},"12.8 \u89e3\u6790 ",Object(o.b)("inlineCode",{parentName:"h2"},"Cron")," \u8868\u8fbe\u5f0f"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},'var nextTime = SpareTime.GetCronNextOccurrence("* * * * *");\n')),Object(o.b)("h2",{id:"129-backgroundservice-\u95f4\u9694\u5b9a\u65f6\u4efb\u52a1"},"12.9 ",Object(o.b)("inlineCode",{parentName:"h2"},"BackgroundService")," \u95f4\u9694\u5b9a\u65f6\u4efb\u52a1"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},'// \u95f4\u9694\u6267\u884c\u4efb\u52a1\nawait SpareTime.DoAsync(1000, () =>\n{\n    _logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);\n}, stoppingToken);\n')),Object(o.b)("h2",{id:"1210-backgroundservice-cron-\u5b9a\u65f6\u4efb\u52a1"},"12.10 ",Object(o.b)("inlineCode",{parentName:"h2"},"BackgroundService")," ",Object(o.b)("inlineCode",{parentName:"h2"},"Cron")," \u5b9a\u65f6\u4efb\u52a1"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},' // \u6267\u884c Cron \u8868\u8fbe\u5f0f\u4efb\u52a1\nawait SpareTime.DoAsync("*/5 * * * * *", () =>\n{\n    _logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);\n}, stoppingToken, CronFormat.IncludeSeconds);\n')))}b.isMDXComponent=!0},209:function(e,r,n){"use strict";n.d(r,"a",(function(){return d})),n.d(r,"b",(function(){return m}));var t=n(0),a=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var r=a.a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},d=function(e){var r=b(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},u=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=b(n),u=t,m=d["".concat(c,".").concat(u)]||d[u]||s[u]||o;return n?a.a.createElement(m,i(i({ref:r},p),{},{components:n})):a.a.createElement(m,i({ref:r},p))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);