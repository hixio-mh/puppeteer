"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[35118],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=p,h=m["".concat(l,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(h,a(a({ref:t},c),{},{components:r})):n.createElement(h,a({ref:t},c))}));function d(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:p,a[1]=i;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},87901:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var n=r(87462),p=r(63366),o=(r(67294),r(3905)),a=["components"],i={},l=void 0,u={unversionedId:"puppeteer.page.hover",id:"version-10.1.0/puppeteer.page.hover",isDocsHomePage:!1,title:"puppeteer.page.hover",description:"Home &gt; puppeteer &gt; Page &gt; hover",source:"@site/versioned_docs/version-10.1.0/puppeteer.page.hover.md",sourceDirName:".",slug:"/puppeteer.page.hover",permalink:"/puppeteer/docs/10.1.0/puppeteer.page.hover",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-10.1.0/puppeteer.page.hover.md",version:"10.1.0",frontMatter:{},sidebar:"version-10.1.0/docs",previous:{title:"puppeteer.page.goto",permalink:"/puppeteer/docs/10.1.0/puppeteer.page.goto"},next:{title:"puppeteer.page.isclosed",permalink:"/puppeteer/docs/10.1.0/puppeteer.page.isclosed"}},c=[{value:"Page.hover() method",id:"pagehover-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],s={toc:c};function m(e){var t=e.components,r=(0,p.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer"},"puppeteer")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer.page"},"Page")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer.page.hover"},"hover")),(0,o.kt)("h2",{id:"pagehover-method"},"Page.hover() method"),(0,o.kt)("p",null,"This method fetches an element with ",(0,o.kt)("inlineCode",{parentName:"p"},"selector"),", scrolls it into view if needed, and then uses ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer.page.mouse"},"Page.mouse")," to hover over the center of the element. If there's no element matching ",(0,o.kt)("inlineCode",{parentName:"p"},"selector"),", the method throws an error."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"hover(selector: string): Promise<void>;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"selector"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"A ",(0,o.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors"},"selector")," to search for element to hover. If there are multiple elements satisfying the selector, the first will be hovered.")))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"Promise","<","void",">"),(0,o.kt)("p",null,"Promise which resolves when the element matching ",(0,o.kt)("inlineCode",{parentName:"p"},"selector")," is successfully hovered. Promise gets rejected if there's no element matching ",(0,o.kt)("inlineCode",{parentName:"p"},"selector"),"."),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"Shortcut for ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer.page.hover"},"page.mainFrame().hover(selector)"),"."))}m.isMDXComponent=!0}}]);