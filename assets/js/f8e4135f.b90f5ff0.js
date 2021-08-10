"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[15668],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||p;return r?n.createElement(h,o(o({ref:t},l),{},{components:r})):n.createElement(h,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<p;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70432:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var n=r(87462),a=r(63366),p=(r(67294),r(3905)),o=["components"],s={},i=void 0,u={unversionedId:"puppeteer.page.setextrahttpheaders",id:"version-9.1.1/puppeteer.page.setextrahttpheaders",isDocsHomePage:!1,title:"puppeteer.page.setextrahttpheaders",description:"Home &gt; puppeteer &gt; Page &gt; setExtraHTTPHeaders",source:"@site/versioned_docs/version-9.1.1/puppeteer.page.setextrahttpheaders.md",sourceDirName:".",slug:"/puppeteer.page.setextrahttpheaders",permalink:"/puppeteer/docs/puppeteer.page.setextrahttpheaders",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-9.1.1/puppeteer.page.setextrahttpheaders.md",version:"9.1.1",frontMatter:{},sidebar:"version-9.1.1/docs",previous:{title:"puppeteer.page.setdefaulttimeout",permalink:"/puppeteer/docs/puppeteer.page.setdefaulttimeout"},next:{title:"puppeteer.page.setgeolocation",permalink:"/puppeteer/docs/puppeteer.page.setgeolocation"}},l=[{value:"Page.setExtraHTTPHeaders() method",id:"pagesetextrahttpheaders-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],c={toc:l};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.page"},"Page")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.page.setextrahttpheaders"},"setExtraHTTPHeaders")),(0,p.kt)("h2",{id:"pagesetextrahttpheaders-method"},"Page.setExtraHTTPHeaders() method"),(0,p.kt)("p",null,"The extra HTTP headers will be sent with every request the page initiates. NOTE: All HTTP header names are lowercased. (HTTP headers are case-insensitive, so this shouldn\u2019t impact your server code.) NOTE: page.setExtraHTTPHeaders does not guarantee the order of headers in the outgoing requests."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"setExtraHTTPHeaders(headers: Record<string, string>): Promise<void>;\n")),(0,p.kt)("h2",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"headers"),(0,p.kt)("td",{parentName:"tr",align:null},"Record","<","string, string",">"),(0,p.kt)("td",{parentName:"tr",align:null},"An object containing additional HTTP headers to be sent with every request. All header values must be strings.")))),(0,p.kt)("b",null,"Returns:"),(0,p.kt)("p",null,"Promise","<","void",">"))}d.isMDXComponent=!0}}]);