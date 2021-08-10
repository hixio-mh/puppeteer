"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76095],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=i(r),d=p,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||a;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function d(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=r.length,o=new Array(a);o[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:p,o[1]=u;for(var i=2;i<a;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},29582:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return l},default:function(){return m}});var n=r(87462),p=r(63366),a=(r(67294),r(3905)),o=["components"],u={},c=void 0,i={unversionedId:"puppeteer.launch",id:"version-9.1.1/puppeteer.launch",isDocsHomePage:!1,title:"puppeteer.launch",description:"Home &gt; puppeteer &gt; launch",source:"@site/versioned_docs/version-9.1.1/puppeteer.launch.md",sourceDirName:".",slug:"/puppeteer.launch",permalink:"/puppeteer/docs/puppeteer.launch",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-9.1.1/puppeteer.launch.md",version:"9.1.1",frontMatter:{}},l=[{value:"launch() function",id:"launch-function",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],s={toc:l};function m(e){var t=e.components,r=(0,p.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.launch"},"launch")),(0,a.kt)("h2",{id:"launch-function"},"launch() function"),(0,a.kt)("p",null,"Launches puppeteer and launches a browser instance with given arguments and options when specified."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare function launch(options?: LaunchOptions & BrowserLaunchArgumentOptions & BrowserConnectOptions & {\n    product?: Product;\n    extraPrefsFirefox?: Record<string, unknown>;\n}): Promise<Browser>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.launchoptions"},"LaunchOptions")," ","&"," ",(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.browserlaunchargumentoptions"},"BrowserLaunchArgumentOptions")," ","&"," ",(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.browserconnectoptions"},"BrowserConnectOptions")," ","&"," { product?: ",(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.product"},"Product"),"; extraPrefsFirefox?: Record","<","string, unknown",">","; }"),(0,a.kt)("td",{parentName:"tr",align:null},"Set of configurable options to set on the browser.")))),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,"Promise","<",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.browser"},"Browser"),">"),(0,a.kt)("p",null,"Promise which resolves to browser instance."),(0,a.kt)("h2",{id:"remarks"},"Remarks"))}m.isMDXComponent=!0}}]);