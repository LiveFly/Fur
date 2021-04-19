(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{165:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return s})),r.d(n,"toc",(function(){return l})),r.d(n,"default",(function(){return p}));var t=r(3),i=r(7),o=(r(0),r(209)),a=r(10),c={id:"process-service",title:"25. \u8f85\u52a9\u89d2\u8272\u670d\u52a1",sidebar_label:"25. \u8f85\u52a9\u89d2\u8272\u670d\u52a1 (Worker Service)"},s={unversionedId:"process-service",id:"process-service",isDocsHomePage:!1,title:"25. \u8f85\u52a9\u89d2\u8272\u670d\u52a1",description:"25.1 \u5173\u4e8e\u8f85\u52a9\u89d2\u8272\u670d\u52a1",source:"@site/docs/process-service.mdx",sourceDirName:".",slug:"/process-service",permalink:"/furion/docs/process-service",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/docs/process-service.mdx",version:"current",lastUpdatedBy:"Monk",lastUpdatedAt:1618803530,formattedLastUpdatedAt:"4/19/2021",sidebar_label:"25. \u8f85\u52a9\u89d2\u8272\u670d\u52a1 (Worker Service)",frontMatter:{id:"process-service",title:"25. \u8f85\u52a9\u89d2\u8272\u670d\u52a1",sidebar_label:"25. \u8f85\u52a9\u89d2\u8272\u670d\u52a1 (Worker Service)"},sidebar:"docs",previous:{title:"24. \u5373\u65f6\u901a\u8baf",permalink:"/furion/docs/signalr"},next:{title:"26. \u5b9a\u65f6\u4efb\u52a1/\u540e\u53f0\u4efb\u52a1",permalink:"/furion/docs/job"}},l=[{value:"25.1 \u5173\u4e8e\u8f85\u52a9\u89d2\u8272\u670d\u52a1",id:"251-\u5173\u4e8e\u8f85\u52a9\u89d2\u8272\u670d\u52a1",children:[]},{value:"25.2 \u5982\u4f55\u521b\u5efa <code>Worker Service</code>",id:"252-\u5982\u4f55\u521b\u5efa-worker-service",children:[]},{value:"25.3 \u521b\u5efa <code>Worker</code>",id:"253-\u521b\u5efa-worker",children:[{value:"25.3.1 \u591a\u4e2a <code>Worker</code>",id:"2531-\u591a\u4e2a-worker",children:[]},{value:"25.3.2 \u751f\u547d\u5468\u671f",id:"2532-\u751f\u547d\u5468\u671f",children:[]}]},{value:"25.4 \u96c6\u6210 <code>Furion</code>",id:"254-\u96c6\u6210-furion",children:[]},{value:"25.5 \u5b9e\u73b0\u5b9a\u65f6\u4efb\u52a1",id:"255-\u5b9e\u73b0\u5b9a\u65f6\u4efb\u52a1",children:[{value:"26.5.1 \u95f4\u9694\u6267\u884c\u65b9\u5f0f",id:"2651-\u95f4\u9694\u6267\u884c\u65b9\u5f0f",children:[]},{value:"26.5.2 <code>Cron</code> \u8868\u8fbe\u5f0f\u683c\u5f0f\u5316\u65b9\u5f0f\uff0c",id:"2652-cron-\u8868\u8fbe\u5f0f\u683c\u5f0f\u5316\u65b9\u5f0f\uff0c",children:[]}]},{value:"25.6 \u4f9d\u8d56\u6ce8\u5165\u4f7f\u7528",id:"256-\u4f9d\u8d56\u6ce8\u5165\u4f7f\u7528",children:[]},{value:"25.7 \u90e8\u7f72\u5230\u64cd\u4f5c\u7cfb\u7edf",id:"257-\u90e8\u7f72\u5230\u64cd\u4f5c\u7cfb\u7edf",children:[{value:"25.7.1 \u90e8\u7f72\u5230 <code>Windows Service</code>",id:"2571-\u90e8\u7f72\u5230-windows-service",children:[]},{value:"25.7.2 \u90e8\u7f72\u5230 <code>Linux \u5b88\u62a4\u7a0b\u5e8f</code>",id:"2572-\u90e8\u7f72\u5230-linux-\u5b88\u62a4\u7a0b\u5e8f",children:[]}]},{value:"25.8 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"258-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],b={toc:l};function p(e){var n=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},b,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"251-\u5173\u4e8e\u8f85\u52a9\u89d2\u8272\u670d\u52a1"},"25.1 \u5173\u4e8e\u8f85\u52a9\u89d2\u8272\u670d\u52a1"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},".NET Core 3.0")," \u65b0\u589e\u4e86 ",Object(o.b)("inlineCode",{parentName:"p"},"Worker Service")," \u7684\u65b0\u9879\u76ee\u6a21\u677f\uff0c",Object(o.b)("strong",{parentName:"p"},"\u53ef\u4ee5\u7f16\u5199\u957f\u65f6\u95f4\u8fd0\u884c\u7684\u540e\u53f0\u670d\u52a1\uff0c\u5e76\u4e14\u80fd\u8f7b\u677e\u7684\u90e8\u7f72\u6210 ",Object(o.b)("inlineCode",{parentName:"strong"},"Windows\u670d\u52a1")," \u6216 ",Object(o.b)("inlineCode",{parentName:"strong"},"Linux \u5b88\u62a4\u7a0b\u5e8f")),"\u3002"),Object(o.b)("h2",{id:"252-\u5982\u4f55\u521b\u5efa-worker-service"},"25.2 \u5982\u4f55\u521b\u5efa ",Object(o.b)("inlineCode",{parentName:"h2"},"Worker Service")),Object(o.b)("p",null,"\u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"Visual Studio 2019")," \u63d0\u4f9b\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"Worker Service")," \u53ef\u76f4\u63a5\u521b\u5efa\u3002\u5982\u56fe\uff1a"),Object(o.b)("img",{src:Object(a.a)("img/wk.png")}),Object(o.b)("h2",{id:"253-\u521b\u5efa-worker"},"25.3 \u521b\u5efa ",Object(o.b)("inlineCode",{parentName:"h2"},"Worker")),Object(o.b)("p",null,"\u5f53\u6211\u4eec\u521b\u5efa\u597d ",Object(o.b)("inlineCode",{parentName:"p"},"Worker Service")," \u9879\u76ee\u65f6\uff0c\u5df2\u7ecf\u81ea\u5e26\u4e86\u4e00\u4e2a ",Object(o.b)("inlineCode",{parentName:"p"},"Worker")," \u7c7b\u5e76\u7ee7\u627f\u81ea ",Object(o.b)("inlineCode",{parentName:"p"},"BackgroundService")," \u57fa\u7c7b\u3002"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Worker")," \u6b63\u662f\u6211\u4eec\u8f85\u52a9\u89d2\u8272\u7684\u4e3b\u8981\u5de5\u4f5c\u7c7b\uff0c\u5728\u8fd9\u91cc\u6211\u4eec\u7f16\u5199\u6211\u4eec\u6240\u6709\u7684\u4e1a\u52a1\u903b\u8f91\u3002\u901a\u5e38 ",Object(o.b)("inlineCode",{parentName:"p"},"Worker")," \u9ed8\u8ba4\u683c\u5f0f\u4e3a\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs",metastring:"{9,18}","{9,18}":!0},'using Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\n\nnamespace FurionWorkers\n{\n    public class Worker : BackgroundService\n    {\n        private readonly ILogger<Worker> _logger;\n\n        public Worker(ILogger<Worker> logger)\n        {\n            _logger = logger;\n        }\n\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            while (!stoppingToken.IsCancellationRequested)\n            {\n                _logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);\n                await Task.Delay(1000, stoppingToken);\n            }\n        }\n    }\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u5f53\u6211\u4eec\u521b\u5efa\u4e86 ",Object(o.b)("inlineCode",{parentName:"strong"},"Worker")," \u7c7b\u4e4b\u540e\uff0c\u9700\u8981\u5728 ",Object(o.b)("inlineCode",{parentName:"strong"},"Program.cs")," \u4e2d\u8fdb\u884c\u6ce8\u518c"),"\uff0c\u5982\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs",metastring:"{17}","{17}":!0},"using Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\nnamespace FurionWorkers\n{\n    public class Program\n    {\n        public static void Main(string[] args)\n        {\n            CreateHostBuilder(args).Build().Run();\n        }\n\n        public static IHostBuilder CreateHostBuilder(string[] args) =>\n            Host.CreateDefaultBuilder(args)\n                .ConfigureServices((hostContext, services) =>\n                {\n                    services.AddHostedService<Worker>();\n                });\n    }\n}\n")),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u5c0f\u77e5\u8bc6")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"\u5982\u679c\u4f7f\u7528\u4e86 ",Object(o.b)("inlineCode",{parentName:"p"},"Furion")," \u5305\u540e\u53ef\u5b9e\u73b0\u81ea\u52a8\u6ce8\u518c\u3002"))),Object(o.b)("h3",{id:"2531-\u591a\u4e2a-worker"},"25.3.1 \u591a\u4e2a ",Object(o.b)("inlineCode",{parentName:"h3"},"Worker")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Worker Service")," \u662f\u652f\u6301\u5b9a\u4e49\u591a\u4e2a ",Object(o.b)("inlineCode",{parentName:"p"},"Worker")," \u8fdb\u884c\u534f\u8c03\u5de5\u4f5c\u7684\uff0c\u6bcf\u4e2a ",Object(o.b)("inlineCode",{parentName:"p"},"Worker")," \u662f\u5b8c\u5168\u72ec\u7acb\u7684\u5de5\u4f5c\u73af\u5883\uff0c\u4f46\u53ef\u5171\u4eab\u540c\u4e00\u4e3b\u8fdb\u7a0b\u4fe1\u606f\u3002"),Object(o.b)("h3",{id:"2532-\u751f\u547d\u5468\u671f"},"25.3.2 \u751f\u547d\u5468\u671f"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Worker Service")," \u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"Worker")," \u63d0\u4f9b\u4e86\u4e09\u4e2a\u6267\u884c\u65b9\u6cd5\uff0c\u5206\u522b\u4ee3\u8868\u4e09\u4e2a\u751f\u547d\u5468\u671f\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"StartAsync"),"\uff1a\u8d1f\u8d23\u542f\u52a8 ",Object(o.b)("inlineCode",{parentName:"li"},"Worker Service"),"\uff0c\u5982\u679c\u8c03\u7528 ",Object(o.b)("inlineCode",{parentName:"li"},"StartAsync")," \u65b9\u6cd5\u7684\u7ebf\u7a0b\u88ab\u4e00\u76f4\u963b\u585e\u4e86\uff0c\u90a3\u4e48 ",Object(o.b)("inlineCode",{parentName:"li"},"Worker Service")," \u7684\u542f\u52a8\u5c31\u4e00\u76f4\u5b8c\u6210\u4e0d\u4e86"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ExecuteAsync"),"\uff1a",Object(o.b)("inlineCode",{parentName:"li"},"Worker Service")," \u771f\u6b63\u5b9e\u73b0\u4e1a\u52a1\u903b\u8f91\u7684\u5730\u65b9\uff0c\u8fd9\u91cc\u4e0d\u80fd\u8c03\u7528\u963b\u585e\u4ee3\u7801\uff01\uff01\uff01"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"StopAsync"),"\uff1a\u8d1f\u8d23\u7ed3\u675f ",Object(o.b)("inlineCode",{parentName:"li"},"Worker Service"),"\uff0c\u5982\u679c\u8c03\u7528 ",Object(o.b)("inlineCode",{parentName:"li"},"StopAsync")," \u65b9\u6cd5\u7684\u7ebf\u7a0b\u88ab\u4e00\u76f4\u963b\u585e\u4e86\uff0c\u90a3\u4e48 ",Object(o.b)("inlineCode",{parentName:"li"},"Worker Service")," \u7684\u7ed3\u675f\u5c31\u4e00\u76f4\u5b8c\u6210\u4e0d\u4e86")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs",metastring:"{19,25,35}","{19,25,35}":!0},'using Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\n\nnamespace FurionWorkers\n{\n    public class Worker : BackgroundService\n    {\n        private readonly ILogger<Worker> _logger;\n\n        public Worker(ILogger<Worker> logger)\n        {\n            _logger = logger;\n        }\n\n        // \u542f\u52a8\n        public override Task StartAsync(CancellationToken cancellationToken)\n        {\n            return base.StartAsync(cancellationToken);\n        }\n\n        // \u6267\u884c\u903b\u8f91\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            while (!stoppingToken.IsCancellationRequested)\n            {\n                _logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);\n                await Task.Delay(1000, stoppingToken);\n            }\n        }\n\n        // \u505c\u6b62\n        public override Task StopAsync(CancellationToken cancellationToken)\n        {\n            return base.StopAsync(cancellationToken);\n        }\n    }\n}\n')),Object(o.b)("h2",{id:"254-\u96c6\u6210-furion"},"25.4 \u96c6\u6210 ",Object(o.b)("inlineCode",{parentName:"h2"},"Furion")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Worker Service")," \u96c6\u6210 ",Object(o.b)("inlineCode",{parentName:"p"},"Furion")," \u975e\u5e38\u65b9\u4fbf\uff0c\u53ea\u9700\u8981\u5b89\u88c5 ",Object(o.b)("inlineCode",{parentName:"p"},"Furion")," \u7684\u5305\u5373\u53ef\uff0c\u5e76\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"Program.cs")," \u4e2d\u8c03\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},".Inject()")," \u65b9\u6cd5\uff0c\u5982\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs",metastring:"{15}","{15}":!0},"using Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\nnamespace FurionWorkers\n{\n    public class Program\n    {\n        public static void Main(string[] args)\n        {\n            CreateHostBuilder(args).Build().Run();\n        }\n\n        public static IHostBuilder CreateHostBuilder(string[] args) =>\n            Host.CreateDefaultBuilder(args)\n                .Inject()\n                .ConfigureServices((hostContext, services) =>\n                {\n                    // \u4ee5\u4e0b\u4ee3\u7801\u53ef\u4e0d\u7528\u7f16\u5199\uff0cFurion \u5df2\u5b9e\u73b0\u81ea\u52a8\u6ce8\u518c Worker;\n                    // services.AddHostedService<Worker>();\n                });\n    }\n}\n")),Object(o.b)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"Inject()")," \u65b9\u6cd5\u6ce8\u518c\u4e86 ",Object(o.b)("inlineCode",{parentName:"p"},"\u65e5\u5fd7\u3001\u7f13\u5b58\u3001\u4f9d\u8d56\u6ce8\u5165\u3001\u52a0\u8f7d\u914d\u7f6e\u3001\u81ea\u5b9a\u4e49 Startup")," \u529f\u80fd\u3002"),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5c0f\u77e5\u8bc6")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"\u96c6\u6210 ",Object(o.b)("inlineCode",{parentName:"p"},"Furion")," \u540e\u4f1a\u81ea\u52a8\u626b\u63cf ",Object(o.b)("inlineCode",{parentName:"p"},"Worker")," \u7c7b\u5e76\u5b9e\u73b0\u81ea\u52a8\u6ce8\u518c\u3002"))),Object(o.b)("h2",{id:"255-\u5b9e\u73b0\u5b9a\u65f6\u4efb\u52a1"},"25.5 \u5b9e\u73b0\u5b9a\u65f6\u4efb\u52a1"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u540c\u65f6\u4e5f\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"Worker Service")," \u63d0\u4f9b\u4e86\u5b9a\u65f6\u4efb\u52a1\u7684\u652f\u6301\u3002"),Object(o.b)("h3",{id:"2651-\u95f4\u9694\u6267\u884c\u65b9\u5f0f"},"26.5.1 \u95f4\u9694\u6267\u884c\u65b9\u5f0f"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs",metastring:"{23-27}","{23-27}":!0},'using Furion.TaskScheduler;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\n\nnamespace WorkerService1\n{\n    public class Worker : BackgroundService\n    {\n        private readonly ILogger<Worker> _logger;\n\n        public Worker(ILogger<Worker> logger)\n        {\n            _logger = logger;\n        }\n\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            while (!stoppingToken.IsCancellationRequested)\n            {\n                // \u95f4\u9694\u6267\u884c\u4efb\u52a1\n                await SpareTime.DoAsync(1000, () =>\n                {\n                    _logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);\n                }, stoppingToken);\n            }\n        }\n    }\n}\n')),Object(o.b)("h3",{id:"2652-cron-\u8868\u8fbe\u5f0f\u683c\u5f0f\u5316\u65b9\u5f0f\uff0c"},"26.5.2 ",Object(o.b)("inlineCode",{parentName:"h3"},"Cron")," \u8868\u8fbe\u5f0f\u683c\u5f0f\u5316\u65b9\u5f0f\uff0c"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs",metastring:"{23-27}","{23-27}":!0},'using Furion.TaskScheduler;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\n\nnamespace WorkerService1\n{\n    public class Worker : BackgroundService\n    {\n        private readonly ILogger<Worker> _logger;\n\n        public Worker(ILogger<Worker> logger)\n        {\n            _logger = logger;\n        }\n\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            while (!stoppingToken.IsCancellationRequested)\n            {\n                // \u6267\u884c Cron \u8868\u8fbe\u5f0f\u4efb\u52a1\n                await SpareTime.DoAsync("*/5 * * * * *", () =>\n                {\n                    _logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);\n                }, stoppingToken, CronFormat.IncludeSeconds);\n            }\n        }\n    }\n}\n')),Object(o.b)("h2",{id:"256-\u4f9d\u8d56\u6ce8\u5165\u4f7f\u7528"},"25.6 \u4f9d\u8d56\u6ce8\u5165\u4f7f\u7528"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Worker Service")," \u53ea\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"Worker")," \u63d0\u4f9b\u4e86",Object(o.b)("strong",{parentName:"p"},"\u5355\u4f8b\u4f5c\u7528\u57df"),"\u7684\u670d\u52a1\u6ce8\u5165\uff0c\u5982\u679c\u9700\u8981\u6ce8\u5165\u77ac\u65f6\u6216\u4f5c\u7528\u57df\u5bf9\u8c61\uff0c\u9700\u624b\u52a8\u521b\u5efa\u4f5c\u7528\u57df\uff0c\u5982\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs",metastring:"{7-8,19-31}","{7-8,19-31}":!0},"public class Worker : BackgroundService\n{\n    // \u65e5\u5fd7\u5bf9\u8c61\n    private readonly ILogger<JobService> _logger;\n\n    // \u670d\u52a1\u5de5\u5382\n    private readonly IServiceScopeFactory _scopeFactory;\n    public Worker(ILogger<Worker> logger\n        , IServiceScopeFactory scopeFactory)\n    {\n        _logger = logger;\n        _scopeFactory = scopeFactory;\n    }\n\n    protected override Task ExecuteAsync(CancellationToken stoppingToken)\n    {\n        while (!stoppingToken.IsCancellationRequested)\n        {\n            using (var scope = _scopeFactory.CreateScope())\n            {\n                var services = scope.ServiceProvider;\n\n                // \u83b7\u53d6\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\n                var dbContext = Db.GetDbContext(services);\n\n                // \u83b7\u53d6\u4ed3\u50a8\n                var respository = Db.GetRepository<Person>(services);\n\n                // \u89e3\u6790\u5176\u4ed6\u670d\u52a1\n                var otherService = services.GetService<XXX>();\n            }\n        }\n\n        return Task.CompletedTask;\n    }\n}\n")),Object(o.b)("h2",{id:"257-\u90e8\u7f72\u5230\u64cd\u4f5c\u7cfb\u7edf"},"25.7 \u90e8\u7f72\u5230\u64cd\u4f5c\u7cfb\u7edf"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Worker Service")," \u652f\u6301\u90e8\u7f72\u5230 ",Object(o.b)("inlineCode",{parentName:"p"},"Windows Service")," \u4e2d \u6216 ",Object(o.b)("inlineCode",{parentName:"p"},"Linux \u5b88\u62a4\u8fdb\u7a0b\u4e2d")),Object(o.b)("h3",{id:"2571-\u90e8\u7f72\u5230-windows-service"},"25.7.1 \u90e8\u7f72\u5230 ",Object(o.b)("inlineCode",{parentName:"h3"},"Windows Service")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"\u7b2c\u4e00\u6b65"))),Object(o.b)("p",null,"\u5b89\u88c5 ",Object(o.b)("inlineCode",{parentName:"p"},"Microsoft.Extensions.Hosting.WindowsServices")," \u62d3\u5c55\u5305"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"\u7b2c\u4e8c\u6b65"))),Object(o.b)("p",null,"\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"Program.cs")," \u4e2d\u6dfb\u52a0 ",Object(o.b)("inlineCode",{parentName:"p"},".UseWindowsService()")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs",metastring:"{15}","{15}":!0},"using Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\nnamespace FurionWorkers\n{\n    public class Program\n    {\n        public static void Main(string[] args)\n        {\n            CreateHostBuilder(args).Build().Run();\n        }\n\n        public static IHostBuilder CreateHostBuilder(string[] args) =>\n            Host.CreateDefaultBuilder(args)\n                .UseWindowsService()\n                .Inject()\n                .ConfigureServices((hostContext, services) =>\n                {\n                    // \u4ee5\u4e0b\u4ee3\u7801\u53ef\u4e0d\u7528\u7f16\u5199\uff0cFurion \u5df2\u5b9e\u73b0\u81ea\u52a8\u6ce8\u518c Worker;\n                    // services.AddHostedService<Worker>();\n                });\n    }\n}\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"\u7b2c\u4e09\u6b65"))),Object(o.b)("p",null,"\u53d1\u5e03 ",Object(o.b)("inlineCode",{parentName:"p"},"Worker Service"),"\uff0c\u53ef\u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"dotnet publish -c Release -o C:\\FurionWorker")," \u547d\u4ee4\u53d1\u5e03\u6216\u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"Visual Studio 2019")," \u53d1\u5e03\u3002"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"\u7b2c\u56db\u6b65"))),Object(o.b)("p",null,"\u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"sc.exe")," \u5de5\u5177\u6765\u7ba1\u7406\u5e76\u521b\u5efa ",Object(o.b)("inlineCode",{parentName:"p"},"Windows")," \u670d\u52a1\uff0c\u901a\u8fc7 ",Object(o.b)("strong",{parentName:"p"},"\u7ba1\u7406\u5458\u6a21\u5f0f")," \u5e76\u6253\u5f00\u63a7\u5236\u53f0\uff0c\u8f93\u5165\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cmd"},"sc.exe create FurionWorkerServices binPath=C:\\FurionWorker\\FurionWorker.exe\n")),Object(o.b)("p",null,"\u521b\u5efa\u6210\u529f\u540e\u53ef\u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"sc.exe query FurionWorkerServices")," \u67e5\u770b\u670d\u52a1\u72b6\u6001\u3002"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"\u7b2c\u4e94\u6b65"))),Object(o.b)("p",null,"\u542f\u52a8\u670d\u52a1\uff1a",Object(o.b)("inlineCode",{parentName:"p"},"sc.exe start FurionWorkerServices"),"\uff0c\u542f\u52a8\u4e4b\u540e\u5c31\u53ef\u4ee5\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"Windows")," \u670d\u52a1\u5de5\u5177\u4e2d\u67e5\u770b\u4e86\u3002"),Object(o.b)("p",null,"\u505c\u6b62\u670d\u52a1\uff1a",Object(o.b)("inlineCode",{parentName:"p"},"sc.exe stop NETCoreDemoWorkerService")),Object(o.b)("p",null,"\u5220\u9664\u670d\u52a1\uff1a",Object(o.b)("inlineCode",{parentName:"p"},"sc.exe delete NETCoreDemoWorkerService")),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u7279\u522b\u63d0\u9192")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"\u4ee5\u4e0a\u6240\u6709 ",Object(o.b)("inlineCode",{parentName:"p"},"sc.exe")," \u547d\u4ee4\u5fc5\u987b\u5728 ",Object(o.b)("strong",{parentName:"p"},"\u7ba1\u7406\u5458")," \u6a21\u5f0f\u4e0b\u8fdb\u884c\u3002"))),Object(o.b)("h3",{id:"2572-\u90e8\u7f72\u5230-linux-\u5b88\u62a4\u7a0b\u5e8f"},"25.7.2 \u90e8\u7f72\u5230 ",Object(o.b)("inlineCode",{parentName:"h3"},"Linux \u5b88\u62a4\u7a0b\u5e8f")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"\u7b2c\u4e00\u6b65"))),Object(o.b)("p",null,"\u5b89\u88c5 ",Object(o.b)("inlineCode",{parentName:"p"},"Microsoft.Extensions.Hosting.Systemd")," \u62d3\u5c55\u5305"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"\u7b2c\u4e8c\u6b65"))),Object(o.b)("p",null,"\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"Program.cs")," \u4e2d\u6dfb\u52a0 ",Object(o.b)("inlineCode",{parentName:"p"},".UseSystemd()")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs",metastring:"{15}","{15}":!0},"using Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\nnamespace FurionWorkers\n{\n    public class Program\n    {\n        public static void Main(string[] args)\n        {\n            CreateHostBuilder(args).Build().Run();\n        }\n\n        public static IHostBuilder CreateHostBuilder(string[] args) =>\n            Host.CreateDefaultBuilder(args)\n                .UseSystemd()\n                .Inject()\n                .ConfigureServices((hostContext, services) =>\n                {\n                    // \u4ee5\u4e0b\u4ee3\u7801\u53ef\u4e0d\u7528\u7f16\u5199\uff0cFurion \u5df2\u5b9e\u73b0\u81ea\u52a8\u6ce8\u518c Worker;\n                    // services.AddHostedService<Worker>();\n                });\n    }\n}\n")),Object(o.b)("p",null,"\u90e8\u7f72\u5230 ",Object(o.b)("inlineCode",{parentName:"p"},"Linux \u5b88\u62a4\u8fdb\u7a0b")," \u5c31\u662f\u8fd9\u4e48\u7b80\u5355\u3002"),Object(o.b)("h2",{id:"258-\u53cd\u9988\u4e0e\u5efa\u8bae"},"25.8 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",Object(o.b)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))))}p.isMDXComponent=!0},209:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return m}));var t=r(0),i=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),b=function(e){var n=i.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},p=function(e){var n=b(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(r),u=t,m=p["".concat(a,".").concat(u)]||p[u]||d[u]||o;return r?i.a.createElement(m,c(c({ref:n},l),{},{components:r})):i.a.createElement(m,c({ref:n},l))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,a=new Array(o);a[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);