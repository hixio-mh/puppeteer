"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[83480],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return y}});var n=t(67294);function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,p=function(e,r){if(null==e)return{};var t,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(p[t]=e[t]);return p}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var a=n.createContext({}),i=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=i(e.components);return n.createElement(a.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,p=e.mdxType,o=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=i(t),y=p,d=f["".concat(a,".").concat(y)]||f[y]||l[y]||o;return t?n.createElement(d,c(c({ref:r},s),{},{components:t})):n.createElement(d,c({ref:r},s))}));function y(e,r){var t=arguments,p=r&&r.mdxType;if("string"==typeof e||p){var o=t.length,c=new Array(o);c[0]=f;var u={};for(var a in r)hasOwnProperty.call(r,a)&&(u[a]=r[a]);u.originalType=e,u.mdxType="string"==typeof e?e:p,c[1]=u;for(var i=2;i<o;i++)c[i]=t[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},20366:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return u},contentTitle:function(){return a},metadata:function(){return i},toc:function(){return s},default:function(){return f}});var n=t(87462),p=t(63366),o=(t(67294),t(3905)),c=["components"],u={},a=void 0,i={unversionedId:"puppeteer.resourcetype",id:"version-10.1.0/puppeteer.resourcetype",isDocsHomePage:!1,title:"puppeteer.resourcetype",description:"Home &gt; puppeteer &gt; ResourceType",source:"@site/versioned_docs/version-10.1.0/puppeteer.resourcetype.md",sourceDirName:".",slug:"/puppeteer.resourcetype",permalink:"/puppeteer/docs/10.1.0/puppeteer.resourcetype",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-10.1.0/puppeteer.resourcetype.md",version:"10.1.0",frontMatter:{}},s=[{value:"ResourceType type",id:"resourcetype-type",children:[]}],l={toc:s};function f(e){var r=e.components,t=(0,p.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer"},"puppeteer")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer.resourcetype"},"ResourceType")),(0,o.kt)("h2",{id:"resourcetype-type"},"ResourceType type"),(0,o.kt)("p",null,"Resource types for HTTPRequests as perceived by the rendering engine."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type ResourceType = Lowercase<Protocol.Network.ResourceType>;\n")))}f.isMDXComponent=!0}}]);