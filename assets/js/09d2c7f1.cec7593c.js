"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88017],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var p=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,p)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,p,n=function(e,t){if(null==e)return{};var r,p,n={},a=Object.keys(e);for(p=0;p<a.length;p++)r=a[p],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(p=0;p<a.length;p++)r=a[p],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=p.createContext({}),l=function(e){var t=p.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return p.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return p.createElement(p.Fragment,{},t)}},m=p.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=n,g=m["".concat(u,".").concat(d)]||m[d]||c[d]||a;return r?p.createElement(g,o(o({ref:t},s),{},{components:r})):p.createElement(g,o({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<a;l++)o[l]=r[l];return p.createElement.apply(null,o)}return p.createElement.apply(null,r)}m.displayName="MDXCreateElement"},20900:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var p=r(87462),n=r(63366),a=(r(67294),r(3905)),o=["components"],i={},u=void 0,l={unversionedId:"puppeteer.page.emulate",id:"version-9.1.1/puppeteer.page.emulate",isDocsHomePage:!1,title:"puppeteer.page.emulate",description:"Home &gt; puppeteer &gt; Page &gt; emulate",source:"@site/versioned_docs/version-9.1.1/puppeteer.page.emulate.md",sourceDirName:".",slug:"/puppeteer.page.emulate",permalink:"/puppeteer/docs/puppeteer.page.emulate",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-9.1.1/puppeteer.page.emulate.md",version:"9.1.1",frontMatter:{},sidebar:"version-9.1.1/docs",previous:{title:"puppeteer.page.deletecookie",permalink:"/puppeteer/docs/puppeteer.page.deletecookie"},next:{title:"puppeteer.page.emulateidlestate",permalink:"/puppeteer/docs/puppeteer.page.emulateidlestate"}},s=[{value:"Page.emulate() method",id:"pageemulate-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]}],c={toc:s};function m(e){var t=e.components,r=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,p.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.page"},"Page")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.page.emulate"},"emulate")),(0,a.kt)("h2",{id:"pageemulate-method"},"Page.emulate() method"),(0,a.kt)("p",null,"Emulates given device metrics and user agent. This method is a shortcut for calling two methods: ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.page.setuseragent"},"Page.setUserAgent()")," and ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.page.setviewport"},"Page.setViewport()")," To aid emulation, Puppeteer provides a list of device descriptors that can be obtained via the ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.puppeteer.devices"},"Puppeteer.devices")," ",(0,a.kt)("inlineCode",{parentName:"p"},"page.emulate")," will resize the page. A lot of websites don't expect phones to change size, so you should emulate before navigating to the page."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"emulate(options: {\n        viewport: Viewport;\n        userAgent: string;\n    }): Promise<void>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},"{ viewport: ",(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.viewport"},"Viewport"),"; userAgent: string; }"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,"Promise","<","void",">"),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"List of all available devices is available in the source code: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/src/common/DeviceDescriptors.ts"},"src/common/DeviceDescriptors.ts"),"."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const puppeteer = require('puppeteer');\nconst iPhone = puppeteer.devices['iPhone 6'];\n(async () => {\nconst browser = await puppeteer.launch();\nconst page = await browser.newPage();\nawait page.emulate(iPhone);\nawait page.goto('https://www.google.com');\n// other actions...\nawait browser.close();\n})();\n\n")))}m.isMDXComponent=!0}}]);