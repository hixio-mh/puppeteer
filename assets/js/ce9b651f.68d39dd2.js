"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89783],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(67294);function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,p=function(e,r){if(null==e)return{};var t,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(p[t]=e[t]);return p}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,p=e.mdxType,o=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=c(t),f=p,d=m["".concat(u,".").concat(f)]||m[f]||l[f]||o;return t?n.createElement(d,i(i({ref:r},s),{},{components:t})):n.createElement(d,i({ref:r},s))}));function f(e,r){var t=arguments,p=r&&r.mdxType;if("string"==typeof e||p){var o=t.length,i=new Array(o);i[0]=m;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a.mdxType="string"==typeof e?e:p,i[1]=a;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},40124:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var n=t(87462),p=t(63366),o=(t(67294),t(3905)),i=["components"],a={},u=void 0,c={unversionedId:"puppeteer.unwrappromiselike",id:"version-9.1.1/puppeteer.unwrappromiselike",isDocsHomePage:!1,title:"puppeteer.unwrappromiselike",description:"Home &gt; puppeteer &gt; UnwrapPromiseLike",source:"@site/versioned_docs/version-9.1.1/puppeteer.unwrappromiselike.md",sourceDirName:".",slug:"/puppeteer.unwrappromiselike",permalink:"/puppeteer/docs/puppeteer.unwrappromiselike",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-9.1.1/puppeteer.unwrappromiselike.md",version:"9.1.1",frontMatter:{}},s=[{value:"UnwrapPromiseLike type",id:"unwrappromiselike-type",children:[]}],l={toc:s};function m(e){var r=e.components,t=(0,p.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.unwrappromiselike"},"UnwrapPromiseLike")),(0,o.kt)("h2",{id:"unwrappromiselike-type"},"UnwrapPromiseLike type"),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type UnwrapPromiseLike<T> = T extends PromiseLike<infer U> ? U : T;\n")))}m.isMDXComponent=!0}}]);