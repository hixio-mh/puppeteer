"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86487],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,g=c["".concat(i,".").concat(d)]||c[d]||m[d]||p;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<p;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},97313:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return s},default:function(){return c}});var r=n(87462),a=n(63366),p=(n(67294),n(3905)),l=["components"],o={},i=void 0,u={unversionedId:"puppeteer.page.__eval",id:"version-10.1.0/puppeteer.page.__eval",isDocsHomePage:!1,title:"puppeteer.page.__eval",description:"Home &gt; puppeteer &gt; Page &gt; $$eval",source:"@site/versioned_docs/version-10.1.0/puppeteer.page.__eval.md",sourceDirName:".",slug:"/puppeteer.page.__eval",permalink:"/puppeteer/docs/10.1.0/puppeteer.page.__eval",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-10.1.0/puppeteer.page.__eval.md",version:"10.1.0",frontMatter:{},sidebar:"version-10.1.0/docs",previous:{title:"puppeteer.page.__",permalink:"/puppeteer/docs/10.1.0/puppeteer.page.__"},next:{title:"puppeteer.page._eval",permalink:"/puppeteer/docs/10.1.0/puppeteer.page._eval"}},s=[{value:"Page.$$eval() method",id:"pageeval-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]},{value:"Example 3",id:"example-3",children:[]}],m={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,p.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer"},"puppeteer")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer.page"},"Page")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer.page.__eval"},"$$eval")),(0,p.kt)("h2",{id:"pageeval-method"},"Page.$$eval() method"),(0,p.kt)("p",null,"This method runs ",(0,p.kt)("inlineCode",{parentName:"p"},"Array.from(document.querySelectorAll(selector))")," within the page and passes the result as the first argument to the ",(0,p.kt)("inlineCode",{parentName:"p"},"pageFunction"),"."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"$$eval<ReturnType>(selector: string, pageFunction: (elements: Element[], ...args: unknown[]) => ReturnType | Promise<ReturnType>, ...args: SerializableOrJSHandle[]): Promise<WrapElementHandle<ReturnType>>;\n")),(0,p.kt)("h2",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"selector"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null},"the ",(0,p.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors"},"selector")," to query for")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"pageFunction"),(0,p.kt)("td",{parentName:"tr",align:null},"(elements: Element","[","]",", ...args: unknown","[","]",") =",">"," ReturnType ","|"," Promise","<","ReturnType",">"),(0,p.kt)("td",{parentName:"tr",align:null},"the function to be evaluated in the page context. Will be passed the result of ",(0,p.kt)("code",null,"Array.from(document.querySelectorAll(selector))")," as its first argument.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"args"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.1.0/puppeteer.serializableorjshandle"},"SerializableOrJSHandle"),"[","]"),(0,p.kt)("td",{parentName:"tr",align:null},"any additional arguments to pass through to ",(0,p.kt)("code",null,"pageFunction"),".")))),(0,p.kt)("b",null,"Returns:"),(0,p.kt)("p",null,"Promise","<",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer.wrapelementhandle"},"WrapElementHandle"),"<","ReturnType",">",">"),(0,p.kt)("p",null,"The result of calling ",(0,p.kt)("inlineCode",{parentName:"p"},"pageFunction"),". If it returns an element it is wrapped in an ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer.elementhandle"},"ElementHandle"),", else the raw value itself is returned."),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"If ",(0,p.kt)("inlineCode",{parentName:"p"},"pageFunction")," returns a promise ",(0,p.kt)("inlineCode",{parentName:"p"},"$$eval")," will wait for the promise to resolve and then return its value."),(0,p.kt)("h2",{id:"example-1"},"Example 1"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"// get the amount of divs on the page\nconst divCount = await page.$$eval('div', divs => divs.length);\n\n// get the text content of all the `.options` elements:\nconst options = await page.$$eval('div > span.options', options => {\n  return options.map(option => option.textContent)\n});\n\n")),(0,p.kt)("p",null,"If you are using TypeScript, you may have to provide an explicit type to the first argument of the ",(0,p.kt)("inlineCode",{parentName:"p"},"pageFunction"),". By default it is typed as ",(0,p.kt)("inlineCode",{parentName:"p"},"Element[]"),", but you may need to provide a more specific sub-type:"),(0,p.kt)("h2",{id:"example-2"},"Example 2"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"// if you don't provide HTMLInputElement here, TS will error\n// as `value` is not on `Element`\nawait page.$$eval('input', (elements: HTMLInputElement[]) => {\n  return elements.map(e => e.value);\n});\n\n")),(0,p.kt)("p",null,"The compiler should be able to infer the return type from the ",(0,p.kt)("inlineCode",{parentName:"p"},"pageFunction")," you provide. If it is unable to, you can use the generic type to tell the compiler what return type you expect from ",(0,p.kt)("inlineCode",{parentName:"p"},"$$eval"),":"),(0,p.kt)("h2",{id:"example-3"},"Example 3"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"// The compiler can infer the return type in this case, but if it can't\n// or if you want to be more explicit, provide it as the generic type.\nconst allInputValues = await page.$$eval<string[]>(\n 'input', (elements: HTMLInputElement[]) => elements.map(e => e.textContent)\n);\n\n")))}c.isMDXComponent=!0}}]);