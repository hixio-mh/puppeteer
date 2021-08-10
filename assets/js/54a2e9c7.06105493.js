"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[15963],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,p=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=u(n),s=o,f=m["".concat(i,".").concat(s)]||m[s]||d[s]||p;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=n.length,l=new Array(p);l[0]=m;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var u=2;u<p;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39947:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(87462),o=n(63366),p=(n(67294),n(3905)),l=["components"],a={},i=void 0,u={unversionedId:"puppeteer.elementhandle.boxmodel",id:"version-9.1.1/puppeteer.elementhandle.boxmodel",isDocsHomePage:!1,title:"puppeteer.elementhandle.boxmodel",description:"Home &gt; puppeteer &gt; ElementHandle &gt; boxModel",source:"@site/versioned_docs/version-9.1.1/puppeteer.elementhandle.boxmodel.md",sourceDirName:".",slug:"/puppeteer.elementhandle.boxmodel",permalink:"/puppeteer/docs/puppeteer.elementhandle.boxmodel",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-9.1.1/puppeteer.elementhandle.boxmodel.md",version:"9.1.1",frontMatter:{},sidebar:"version-9.1.1/docs",previous:{title:"puppeteer.elementhandle.boundingbox",permalink:"/puppeteer/docs/puppeteer.elementhandle.boundingbox"},next:{title:"puppeteer.elementhandle.click",permalink:"/puppeteer/docs/puppeteer.elementhandle.click"}},c=[{value:"ElementHandle.boxModel() method",id:"elementhandleboxmodel-method",children:[]},{value:"Remarks",id:"remarks",children:[]}],d={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,p.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.elementhandle"},"ElementHandle")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.elementhandle.boxmodel"},"boxModel")),(0,p.kt)("h2",{id:"elementhandleboxmodel-method"},"ElementHandle.boxModel() method"),(0,p.kt)("p",null,"This method returns boxes of the element, or ",(0,p.kt)("inlineCode",{parentName:"p"},"null")," if the element is not visible."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"boxModel(): Promise<BoxModel | null>;\n")),(0,p.kt)("b",null,"Returns:"),(0,p.kt)("p",null,"Promise","<",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.boxmodel"},"BoxModel")," ","|"," null",">"),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"Boxes are represented as an array of points; Each Point is an object ",(0,p.kt)("inlineCode",{parentName:"p"},"{x, y}"),". Box points are sorted clock-wise."))}m.isMDXComponent=!0}}]);