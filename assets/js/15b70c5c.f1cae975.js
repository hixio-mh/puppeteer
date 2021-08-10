"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[94850],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(n),s=a,y=c["".concat(i,".").concat(s)]||c[s]||d[s]||p;return n?r.createElement(y,l(l({ref:t},m),{},{components:n})):r.createElement(y,l({ref:t},m))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<p;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},32977:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return m},default:function(){return c}});var r=n(87462),a=n(63366),p=(n(67294),n(3905)),l=["components"],o={},i=void 0,u={unversionedId:"puppeteer.elementhandle.type",id:"version-9.1.1/puppeteer.elementhandle.type",isDocsHomePage:!1,title:"puppeteer.elementhandle.type",description:"Home &gt; puppeteer &gt; ElementHandle &gt; type",source:"@site/versioned_docs/version-9.1.1/puppeteer.elementhandle.type.md",sourceDirName:".",slug:"/puppeteer.elementhandle.type",permalink:"/puppeteer/docs/puppeteer.elementhandle.type",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-9.1.1/puppeteer.elementhandle.type.md",version:"9.1.1",frontMatter:{},sidebar:"version-9.1.1/docs",previous:{title:"puppeteer.elementhandle.tap",permalink:"/puppeteer/docs/puppeteer.elementhandle.tap"},next:{title:"puppeteer.elementhandle.uploadfile",permalink:"/puppeteer/docs/puppeteer.elementhandle.uploadfile"}},m=[{value:"ElementHandle.type() method",id:"elementhandletype-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]}],d={toc:m};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,p.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.elementhandle"},"ElementHandle")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.elementhandle.type"},"type")),(0,p.kt)("h2",{id:"elementhandletype-method"},"ElementHandle.type() method"),(0,p.kt)("p",null,"Focuses the element, and then sends a ",(0,p.kt)("inlineCode",{parentName:"p"},"keydown"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"keypress"),"/",(0,p.kt)("inlineCode",{parentName:"p"},"input"),", and ",(0,p.kt)("inlineCode",{parentName:"p"},"keyup")," event for each character in the text."),(0,p.kt)("p",null,"To press a special key, like ",(0,p.kt)("inlineCode",{parentName:"p"},"Control")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"ArrowDown"),", use ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.elementhandle.press"},"ElementHandle.press()"),"."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"type(text: string, options?: {\n        delay: number;\n    }): Promise<void>;\n")),(0,p.kt)("h2",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"text"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null})),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"options"),(0,p.kt)("td",{parentName:"tr",align:null},"{ delay: number; }"),(0,p.kt)("td",{parentName:"tr",align:null})))),(0,p.kt)("b",null,"Returns:"),(0,p.kt)("p",null,"Promise","<","void",">"),(0,p.kt)("h2",{id:"example-1"},"Example 1"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"await elementHandle.type('Hello'); // Types instantly\nawait elementHandle.type('World', {delay: 100}); // Types slower, like a user\n\n")),(0,p.kt)("h2",{id:"example-2"},"Example 2"),(0,p.kt)("p",null,"An example of typing into a text field and then submitting the form:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"const elementHandle = await page.$('input');\nawait elementHandle.type('some text');\nawait elementHandle.press('Enter');\n\n")))}c.isMDXComponent=!0}}]);