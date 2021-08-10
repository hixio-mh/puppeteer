"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[78158],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=l(r),d=a,f=s["".concat(u,".").concat(d)]||s[d]||c[d]||p;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<p;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},57866:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return m},default:function(){return s}});var n=r(87462),a=r(63366),p=(r(67294),r(3905)),o=["components"],i={},u=void 0,l={unversionedId:"puppeteer.page.emulatetimezone",id:"version-10.1.0/puppeteer.page.emulatetimezone",isDocsHomePage:!1,title:"puppeteer.page.emulatetimezone",description:"Home &gt; puppeteer &gt; Page &gt; emulateTimezone",source:"@site/versioned_docs/version-10.1.0/puppeteer.page.emulatetimezone.md",sourceDirName:".",slug:"/puppeteer.page.emulatetimezone",permalink:"/puppeteer/docs/10.1.0/puppeteer.page.emulatetimezone",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-10.1.0/puppeteer.page.emulatetimezone.md",version:"10.1.0",frontMatter:{},sidebar:"version-10.1.0/docs",previous:{title:"puppeteer.page.emulatenetworkconditions",permalink:"/puppeteer/docs/10.1.0/puppeteer.page.emulatenetworkconditions"},next:{title:"puppeteer.page.emulatevisiondeficiency",permalink:"/puppeteer/docs/10.1.0/puppeteer.page.emulatevisiondeficiency"}},m=[{value:"Page.emulateTimezone() method",id:"pageemulatetimezone-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],c={toc:m};function s(e){var t=e.components,r=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer"},"puppeteer")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer.page"},"Page")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer.page.emulatetimezone"},"emulateTimezone")),(0,p.kt)("h2",{id:"pageemulatetimezone-method"},"Page.emulateTimezone() method"),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"emulateTimezone(timezoneId?: string): Promise<void>;\n")),(0,p.kt)("h2",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"timezoneId"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null},"Changes the timezone of the page. See ",(0,p.kt)("a",{parentName:"td",href:"https://source.chromium.org/chromium/chromium/deps/icu.git/+/faee8bc70570192d82d2978a71e2a615788597d1:source/data/misc/metaZones.txt"},"ICU\u2019s metaZones.txt")," for a list of supported timezone IDs. Passing ",(0,p.kt)("code",null,"null")," disables timezone emulation.")))),(0,p.kt)("b",null,"Returns:"),(0,p.kt)("p",null,"Promise","<","void",">"))}s.isMDXComponent=!0}}]);