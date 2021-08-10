"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14394],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),i=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=i(a),m=r,g=d["".concat(o,".").concat(m)]||d[m]||c[m]||p;return a?n.createElement(g,l(l({ref:t},s),{},{components:a})):n.createElement(g,l({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,l=new Array(p);l[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var i=2;i<p;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},73392:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return i},toc:function(){return s},default:function(){return d}});var n=a(87462),r=a(63366),p=(a(67294),a(3905)),l=["components"],u={},o=void 0,i={unversionedId:"puppeteer.page.evaluate",id:"version-10.1.0/puppeteer.page.evaluate",isDocsHomePage:!1,title:"puppeteer.page.evaluate",description:"Home &gt; puppeteer &gt; Page &gt; evaluate",source:"@site/versioned_docs/version-10.1.0/puppeteer.page.evaluate.md",sourceDirName:".",slug:"/puppeteer.page.evaluate",permalink:"/puppeteer/docs/10.1.0/puppeteer.page.evaluate",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-10.1.0/puppeteer.page.evaluate.md",version:"10.1.0",frontMatter:{},sidebar:"version-10.1.0/docs",previous:{title:"puppeteer.page.emulatevisiondeficiency",permalink:"/puppeteer/docs/10.1.0/puppeteer.page.emulatevisiondeficiency"},next:{title:"puppeteer.page.evaluatehandle",permalink:"/puppeteer/docs/10.1.0/puppeteer.page.evaluatehandle"}},s=[{value:"Page.evaluate() method",id:"pageevaluate-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]},{value:"Example 3",id:"example-3",children:[]}],c={toc:s};function d(e){var t=e.components,a=(0,r.Z)(e,l);return(0,p.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer"},"puppeteer")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer.page"},"Page")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer.page.evaluate"},"evaluate")),(0,p.kt)("h2",{id:"pageevaluate-method"},"Page.evaluate() method"),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"evaluate<T extends EvaluateFn>(pageFunction: T, ...args: SerializableOrJSHandle[]): Promise<UnwrapPromiseLike<EvaluateFnReturnType<T>>>;\n")),(0,p.kt)("h2",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"pageFunction"),(0,p.kt)("td",{parentName:"tr",align:null},"T"),(0,p.kt)("td",{parentName:"tr",align:null},"a function that is run within the page")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"args"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.1.0/puppeteer.serializableorjshandle"},"SerializableOrJSHandle"),"[","]"),(0,p.kt)("td",{parentName:"tr",align:null},"arguments to be passed to the pageFunction")))),(0,p.kt)("b",null,"Returns:"),(0,p.kt)("p",null,"Promise","<",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer.unwrappromiselike"},"UnwrapPromiseLike"),"<",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer.evaluatefnreturntype"},"EvaluateFnReturnType"),"<","T",">",">",">"),(0,p.kt)("p",null,"the return value of ",(0,p.kt)("inlineCode",{parentName:"p"},"pageFunction"),"."),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"Evaluates a function in the page's context and returns the result."),(0,p.kt)("p",null,"If the function passed to ",(0,p.kt)("inlineCode",{parentName:"p"},"page.evaluteHandle")," returns a Promise, the function will wait for the promise to resolve and return its value."),(0,p.kt)("h2",{id:"example-1"},"Example 1"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},'const result = await frame.evaluate(() => {\n  return Promise.resolve(8 * 7);\n});\nconsole.log(result); // prints "56"\n\n')),(0,p.kt)("p",null,"You can pass a string instead of a function (although functions are recommended as they are easier to debug and use with TypeScript):"),(0,p.kt)("h2",{id:"example-2"},"Example 2"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"const aHandle = await page.evaluate('1 + 2');\n\n")),(0,p.kt)("p",null,"To get the best TypeScript experience, you should pass in as the generic the type of ",(0,p.kt)("inlineCode",{parentName:"p"},"pageFunction"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"const aHandle = await page.evaluate<() => number>(() => 2);\n\n")),(0,p.kt)("h2",{id:"example-3"},"Example 3"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer.elementhandle"},"ElementHandle")," instances (including ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer.jshandle"},"JSHandle"),"s) can be passed as arguments to the ",(0,p.kt)("inlineCode",{parentName:"p"},"pageFunction"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"const bodyHandle = await page.$('body');\nconst html = await page.evaluate(body => body.innerHTML, bodyHandle);\nawait bodyHandle.dispose();\n\n")))}d.isMDXComponent=!0}}]);