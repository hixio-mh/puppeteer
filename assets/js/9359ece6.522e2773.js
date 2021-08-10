"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72775],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=l(r),m=a,g=s["".concat(i,".").concat(m)]||s[m]||d[m]||p;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=s;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var l=2;l<p;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},92467:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var n=r(87462),a=r(63366),p=(r(67294),r(3905)),o=["components"],u={},i=void 0,l={unversionedId:"puppeteer.mouse.dragenter",id:"version-10.1.0/puppeteer.mouse.dragenter",isDocsHomePage:!1,title:"puppeteer.mouse.dragenter",description:"Home &gt; puppeteer &gt; Mouse &gt; dragEnter",source:"@site/versioned_docs/version-10.1.0/puppeteer.mouse.dragenter.md",sourceDirName:".",slug:"/puppeteer.mouse.dragenter",permalink:"/puppeteer/docs/10.1.0/puppeteer.mouse.dragenter",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-10.1.0/puppeteer.mouse.dragenter.md",version:"10.1.0",frontMatter:{},sidebar:"version-10.1.0/docs",previous:{title:"puppeteer.mouse.draganddrop",permalink:"/puppeteer/docs/10.1.0/puppeteer.mouse.draganddrop"},next:{title:"puppeteer.mouse.dragover",permalink:"/puppeteer/docs/10.1.0/puppeteer.mouse.dragover"}},c=[{value:"Mouse.dragEnter() method",id:"mousedragenter-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],d={toc:c};function s(e){var t=e.components,r=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer"},"puppeteer")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer.mouse"},"Mouse")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer.mouse.dragenter"},"dragEnter")),(0,p.kt)("h2",{id:"mousedragenter-method"},"Mouse.dragEnter() method"),(0,p.kt)("p",null,"Dispatches a ",(0,p.kt)("inlineCode",{parentName:"p"},"dragenter")," event."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"dragEnter(target: Point, data: Protocol.Input.DragData): Promise<void>;\n")),(0,p.kt)("h2",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"target"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.1.0/puppeteer.point"},"Point")),(0,p.kt)("td",{parentName:"tr",align:null},"point for emitting ",(0,p.kt)("code",null,"dragenter")," event")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"data"),(0,p.kt)("td",{parentName:"tr",align:null},"Protocol.Input.DragData"),(0,p.kt)("td",{parentName:"tr",align:null})))),(0,p.kt)("b",null,"Returns:"),(0,p.kt)("p",null,"Promise","<","void",">"))}s.isMDXComponent=!0}}]);