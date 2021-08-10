"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6848],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||p;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,l=new Array(p);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<p;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1033:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var n=r(87462),a=r(63366),p=(r(67294),r(3905)),l=["components"],o={},i=void 0,c={unversionedId:"puppeteer.frame.select",id:"version-10.1.0/puppeteer.frame.select",isDocsHomePage:!1,title:"puppeteer.frame.select",description:"Home &gt; puppeteer &gt; Frame &gt; select",source:"@site/versioned_docs/version-10.1.0/puppeteer.frame.select.md",sourceDirName:".",slug:"/puppeteer.frame.select",permalink:"/puppeteer/docs/10.1.0/puppeteer.frame.select",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-10.1.0/puppeteer.frame.select.md",version:"10.1.0",frontMatter:{},sidebar:"version-10.1.0/docs",previous:{title:"puppeteer.frame.parentframe",permalink:"/puppeteer/docs/10.1.0/puppeteer.frame.parentframe"},next:{title:"puppeteer.frame.setcontent",permalink:"/puppeteer/docs/10.1.0/puppeteer.frame.setcontent"}},s=[{value:"Frame.select() method",id:"frameselect-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]}],u={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,p.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer"},"puppeteer")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer.frame"},"Frame")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer.frame.select"},"select")),(0,p.kt)("h2",{id:"frameselect-method"},"Frame.select() method"),(0,p.kt)("p",null,"Triggers a ",(0,p.kt)("inlineCode",{parentName:"p"},"change")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"input")," event once all the provided options have been selected."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"select(selector: string, ...values: string[]): Promise<string[]>;\n")),(0,p.kt)("h2",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"selector"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null},"a selector to query the frame for")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"values"),(0,p.kt)("td",{parentName:"tr",align:null},"string","[","]"),(0,p.kt)("td",{parentName:"tr",align:null},"an array of values to select. If the ",(0,p.kt)("code",null,"<","select",">")," has the ",(0,p.kt)("code",null,"multiple")," attribute, all values are considered, otherwise only the first one is taken into account.")))),(0,p.kt)("b",null,"Returns:"),(0,p.kt)("p",null,"Promise","<","string","[","]",">"),(0,p.kt)("p",null,"the list of values that were successfully selected."),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"If there's no ",(0,p.kt)("inlineCode",{parentName:"p"},"<select>")," element matching ",(0,p.kt)("inlineCode",{parentName:"p"},"selector"),", the method throws an error."),(0,p.kt)("h2",{id:"example"},"Example"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"frame.select('select#colors', 'blue'); // single selection\nframe.select('select#colors', 'red', 'green', 'blue'); // multiple selections\n\n")))}m.isMDXComponent=!0}}]);