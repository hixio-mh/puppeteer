"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[34296],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(r),m=p,h=d["".concat(u,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function m(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:p,o[1]=l;for(var i=2;i<a;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},60998:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return c},default:function(){return d}});var n=r(87462),p=r(63366),a=(r(67294),r(3905)),o=["components"],l={},u=void 0,i={unversionedId:"puppeteer.puppeteernode",id:"puppeteer.puppeteernode",isDocsHomePage:!1,title:"puppeteer.puppeteernode",description:"Home &gt; puppeteer &gt; PuppeteerNode",source:"@site/docs/puppeteer.puppeteernode.md",sourceDirName:".",slug:"/puppeteer.puppeteernode",permalink:"/puppeteer/docs/next/puppeteer.puppeteernode",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/docs/puppeteer.puppeteernode.md",version:"current",frontMatter:{}},c=[{value:"PuppeteerNode class",id:"puppeteernode-class",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}],s={toc:c};function d(e){var t=e.components,r=(0,p.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.puppeteernode"},"PuppeteerNode")),(0,a.kt)("h2",{id:"puppeteernode-class"},"PuppeteerNode class"),(0,a.kt)("p",null,"Extends the main ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.puppeteer"},"Puppeteer")," class with Node specific behaviour for fetching and downloading browsers."),(0,a.kt)("p",null,"If you're using Puppeteer in a Node environment, this is the class you'll get when you run ",(0,a.kt)("inlineCode",{parentName:"p"},"require('puppeteer')")," (or the equivalent ES ",(0,a.kt)("inlineCode",{parentName:"p"},"import"),")."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class PuppeteerNode extends Puppeteer \n")),(0,a.kt)("b",null,"Extends:")," [Puppeteer](/puppeteer/docs/next/puppeteer.puppeteer)",(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"The most common method to use is ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.puppeteernode.launch"},"launch"),", which is used to launch and connect to a new browser instance."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.puppeteer"},"the main Puppeteer class")," for methods common to all environments, such as ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.puppeteer.connect"},"Puppeteer.connect()"),"."),(0,a.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,a.kt)("inlineCode",{parentName:"p"},"PuppeteerNode")," class."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"The following is a typical example of using Puppeteer to drive automation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const puppeteer = require('puppeteer');\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.goto('https://www.google.com');\n  // other actions...\n  await browser.close();\n})();\n\n")),(0,a.kt)("p",null,"Once you have created a ",(0,a.kt)("inlineCode",{parentName:"p"},"page")," you have access to a large API to interact with the page, navigate, or find certain elements in that page. The ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.page"},"`","page","`"," documentation")," lists all the available methods."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.puppeteernode.product"},"product")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the browser that is under automation (",(0,a.kt)("code",null,'"',"chrome",'"')," or ",(0,a.kt)("code",null,'"',"firefox",'"'),")")))),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Method"),(0,a.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.puppeteernode.connect"},"connect(options)")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"This method attaches Puppeteer to an existing browser instance.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.puppeteernode.createbrowserfetcher"},"createBrowserFetcher(options)")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.puppeteernode.defaultargs"},"defaultArgs(options)")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.puppeteernode.executablepath"},"executablePath(channel)")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.puppeteernode.launch"},"launch(options)")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Launches puppeteer and launches a browser instance with given arguments and options when specified.")))))}d.isMDXComponent=!0}}]);