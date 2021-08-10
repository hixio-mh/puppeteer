"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[79769],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=i(r),m=p,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function m(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:p,a[1]=s;for(var i=2;i<o;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},43023:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return l},default:function(){return d}});var n=r(87462),p=r(63366),o=(r(67294),r(3905)),a=["components"],s={},u=void 0,i={unversionedId:"puppeteer.httprequest.respond",id:"version-10.1.0/puppeteer.httprequest.respond",isDocsHomePage:!1,title:"puppeteer.httprequest.respond",description:"Home &gt; puppeteer &gt; HTTPRequest &gt; respond",source:"@site/versioned_docs/version-10.1.0/puppeteer.httprequest.respond.md",sourceDirName:".",slug:"/puppeteer.httprequest.respond",permalink:"/puppeteer/docs/10.1.0/puppeteer.httprequest.respond",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-10.1.0/puppeteer.httprequest.respond.md",version:"10.1.0",frontMatter:{},sidebar:"version-10.1.0/docs",previous:{title:"puppeteer.httprequest.resourcetype",permalink:"/puppeteer/docs/10.1.0/puppeteer.httprequest.resourcetype"},next:{title:"puppeteer.httprequest.response",permalink:"/puppeteer/docs/10.1.0/puppeteer.httprequest.response"}},l=[{value:"HTTPRequest.respond() method",id:"httprequestrespond-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]}],c={toc:l};function d(e){var t=e.components,r=(0,p.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer"},"puppeteer")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer.httprequest"},"HTTPRequest")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer.httprequest.respond"},"respond")),(0,o.kt)("h2",{id:"httprequestrespond-method"},"HTTPRequest.respond() method"),(0,o.kt)("p",null,"Fulfills a request with the given response."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"respond(response: Partial<ResponseForRequest>, priority?: number): Promise<void>;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"response"),(0,o.kt)("td",{parentName:"tr",align:null},"Partial","<",(0,o.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.1.0/puppeteer.responseforrequest"},"ResponseForRequest"),">"),(0,o.kt)("td",{parentName:"tr",align:null},"the response to fulfill the request with.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"priority"),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"If provided, intercept is resolved using cooperative handling rules. Otherwise, intercept is resolved immediately.")))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"Promise","<","void",">"),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"To use this, request interception should be enabled with ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer.page.setrequestinterception"},"Page.setRequestInterception()"),"."),(0,o.kt)("p",null,"Exception is immediately thrown if the request interception is not enabled."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"An example of fulfilling all requests with 404 responses:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await page.setRequestInterception(true);\npage.on('request', request => {\n  request.respond({\n    status: 404,\n    contentType: 'text/plain',\n    body: 'Not Found!'\n  });\n});\n\n")),(0,o.kt)("p",null,"NOTE: Mocking responses for dataURL requests is not supported. Calling ",(0,o.kt)("inlineCode",{parentName:"p"},"request.respond")," for a dataURL request is a noop."))}d.isMDXComponent=!0}}]);