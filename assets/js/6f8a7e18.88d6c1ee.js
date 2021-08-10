"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[45589],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=c(r),d=p,h=m["".concat(i,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(h,a(a({ref:t},l),{},{components:r})):n.createElement(h,a({ref:t},l))}));function d(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=r.length,a=new Array(o);a[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:p,a[1]=u;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},19643:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var n=r(87462),p=r(63366),o=(r(67294),r(3905)),a=["components"],u={},i=void 0,c={unversionedId:"puppeteer.puppeteernode.launch",id:"version-9.1.1/puppeteer.puppeteernode.launch",isDocsHomePage:!1,title:"puppeteer.puppeteernode.launch",description:"Home &gt; puppeteer &gt; PuppeteerNode &gt; launch",source:"@site/versioned_docs/version-9.1.1/puppeteer.puppeteernode.launch.md",sourceDirName:".",slug:"/puppeteer.puppeteernode.launch",permalink:"/puppeteer/docs/puppeteer.puppeteernode.launch",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-9.1.1/puppeteer.puppeteernode.launch.md",version:"9.1.1",frontMatter:{}},l=[{value:"PuppeteerNode.launch() method",id:"puppeteernodelaunch-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]}],s={toc:l};function m(e){var t=e.components,r=(0,p.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.puppeteernode"},"PuppeteerNode")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.puppeteernode.launch"},"launch")),(0,o.kt)("h2",{id:"puppeteernodelaunch-method"},"PuppeteerNode.launch() method"),(0,o.kt)("p",null,"Launches puppeteer and launches a browser instance with given arguments and options when specified."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"launch(options?: LaunchOptions & BrowserLaunchArgumentOptions & BrowserConnectOptions & {\n        product?: Product;\n        extraPrefsFirefox?: Record<string, unknown>;\n    }): Promise<Browser>;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"options"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.launchoptions"},"LaunchOptions")," ","&"," ",(0,o.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.browserlaunchargumentoptions"},"BrowserLaunchArgumentOptions")," ","&"," ",(0,o.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.browserconnectoptions"},"BrowserConnectOptions")," ","&"," { product?: ",(0,o.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.product"},"Product"),"; extraPrefsFirefox?: Record","<","string, unknown",">","; }"),(0,o.kt)("td",{parentName:"tr",align:null},"Set of configurable options to set on the browser.")))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"Promise","<",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.browser"},"Browser"),">"),(0,o.kt)("p",null,"Promise which resolves to browser instance."),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"ignoreDefaultArgs")," to filter out ",(0,o.kt)("inlineCode",{parentName:"p"},"--mute-audio")," from default arguments:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const browser = await puppeteer.launch({\n  ignoreDefaultArgs: ['--mute-audio']\n});\n\n")),(0,o.kt)("p",null,"*","*","NOTE","*","*"," Puppeteer can also be used to control the Chrome browser, but it works best with the version of Chromium it is bundled with. There is no guarantee it will work with any other version. Use ",(0,o.kt)("inlineCode",{parentName:"p"},"executablePath")," option with extreme caution. If Google Chrome (rather than Chromium) is preferred, a ",(0,o.kt)("a",{parentName:"p",href:"https://www.google.com/chrome/browser/canary.html"},"Chrome Canary")," or ",(0,o.kt)("a",{parentName:"p",href:"https://www.chromium.org/getting-involved/dev-channel"},"Dev Channel")," build is suggested. In ",(0,o.kt)("inlineCode",{parentName:"p"},"puppeteer.launch([options])"),", any mention of Chromium also applies to Chrome. See ",(0,o.kt)("a",{parentName:"p",href:"https://www.howtogeek.com/202825/what%E2%80%99s-the-difference-between-chromium-and-chrome/"},"this article")," for a description of the differences between Chromium and Chrome. ",(0,o.kt)("a",{parentName:"p",href:"https://chromium.googlesource.com/chromium/src/+/lkgr/docs/chromium_browser_vs_google_chrome.md"},"This article")," describes some differences for Linux users."))}m.isMDXComponent=!0}}]);