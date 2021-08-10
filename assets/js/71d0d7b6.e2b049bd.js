"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[99968],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(n),s=a,f=c["".concat(i,".").concat(s)]||c[s]||d[s]||l;return n?r.createElement(f,p(p({ref:t},m),{},{components:n})):r.createElement(f,p({ref:t},m))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var u=2;u<l;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},67396:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return m},default:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),p=["components"],o={},i=void 0,u={unversionedId:"puppeteer.elementhandle.__eval",id:"version-10.1.0/puppeteer.elementhandle.__eval",isDocsHomePage:!1,title:"puppeteer.elementhandle.__eval",description:"Home &gt; puppeteer &gt; ElementHandle &gt; $$eval",source:"@site/versioned_docs/version-10.1.0/puppeteer.elementhandle.__eval.md",sourceDirName:".",slug:"/puppeteer.elementhandle.__eval",permalink:"/puppeteer/docs/10.1.0/puppeteer.elementhandle.__eval",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-10.1.0/puppeteer.elementhandle.__eval.md",version:"10.1.0",frontMatter:{},sidebar:"version-10.1.0/docs",previous:{title:"puppeteer.elementhandle.__",permalink:"/puppeteer/docs/10.1.0/puppeteer.elementhandle.__"},next:{title:"puppeteer.elementhandle._eval",permalink:"/puppeteer/docs/10.1.0/puppeteer.elementhandle._eval"}},m=[{value:"ElementHandle.$$eval() method",id:"elementhandleeval-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]}],d={toc:m};function c(e){var t=e.components,n=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/index"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer"},"puppeteer")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer.elementhandle"},"ElementHandle")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer.elementhandle.__eval"},"$$eval")),(0,l.kt)("h2",{id:"elementhandleeval-method"},"ElementHandle.$$eval() method"),(0,l.kt)("p",null,"This method runs ",(0,l.kt)("inlineCode",{parentName:"p"},"document.querySelectorAll")," within the element and passes it as the first argument to ",(0,l.kt)("inlineCode",{parentName:"p"},"pageFunction"),". If there's no element matching ",(0,l.kt)("inlineCode",{parentName:"p"},"selector"),", the method throws an error."),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"pageFunction")," returns a Promise, then ",(0,l.kt)("inlineCode",{parentName:"p"},"frame.$$eval")," would wait for the promise to resolve and return its value."),(0,l.kt)("b",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"$$eval<ReturnType>(selector: string, pageFunction: (elements: Element[], ...args: unknown[]) => ReturnType | Promise<ReturnType>, ...args: SerializableOrJSHandle[]): Promise<WrapElementHandle<ReturnType>>;\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"selector"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pageFunction"),(0,l.kt)("td",{parentName:"tr",align:null},"(elements: Element","[","]",", ...args: unknown","[","]",") =",">"," ReturnType ","|"," Promise","<","ReturnType",">"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"args"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.1.0/puppeteer.serializableorjshandle"},"SerializableOrJSHandle"),"[","]"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("b",null,"Returns:"),(0,l.kt)("p",null,"Promise","<",(0,l.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer.wrapelementhandle"},"WrapElementHandle"),"<","ReturnType",">",">"),(0,l.kt)("h2",{id:"example-1"},"Example 1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<div class="feed">\n  <div class="tweet">Hello!</div>\n  <div class="tweet">Hi!</div>\n</div>\n\n')),(0,l.kt)("h2",{id:"example-2"},"Example 2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const feedHandle = await page.$('.feed');\nexpect(await feedHandle.$$eval('.tweet', nodes => nodes.map(n => n.innerText)))\n .toEqual(['Hello!', 'Hi!']);\n\n")))}c.isMDXComponent=!0}}]);