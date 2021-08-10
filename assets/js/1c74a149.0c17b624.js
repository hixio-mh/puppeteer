"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[31968],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),d=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(r),m=a,f=c["".concat(i,".").concat(m)]||c[m]||s[m]||p;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<p;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},42051:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var n=r(87462),a=r(63366),p=(r(67294),r(3905)),o=["components"],l={},i=void 0,d={unversionedId:"puppeteer.frame.addstyletag",id:"version-10.1.0/puppeteer.frame.addstyletag",isDocsHomePage:!1,title:"puppeteer.frame.addstyletag",description:"Home &gt; puppeteer &gt; Frame &gt; addStyleTag",source:"@site/versioned_docs/version-10.1.0/puppeteer.frame.addstyletag.md",sourceDirName:".",slug:"/puppeteer.frame.addstyletag",permalink:"/puppeteer/docs/10.1.0/puppeteer.frame.addstyletag",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-10.1.0/puppeteer.frame.addstyletag.md",version:"10.1.0",frontMatter:{},sidebar:"version-10.1.0/docs",previous:{title:"puppeteer.frame.addscripttag",permalink:"/puppeteer/docs/10.1.0/puppeteer.frame.addscripttag"},next:{title:"puppeteer.frame.childframes",permalink:"/puppeteer/docs/10.1.0/puppeteer.frame.childframes"}},u=[{value:"Frame.addStyleTag() method",id:"frameaddstyletag-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],s={toc:u};function c(e){var t=e.components,r=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer"},"puppeteer")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer.frame"},"Frame")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer.frame.addstyletag"},"addStyleTag")),(0,p.kt)("h2",{id:"frameaddstyletag-method"},"Frame.addStyleTag() method"),(0,p.kt)("p",null,"Adds a ",(0,p.kt)("inlineCode",{parentName:"p"},'<link rel="stylesheet">')," tag into the page with the desired url or a ",(0,p.kt)("inlineCode",{parentName:"p"},'<style type="text/css">')," tag with the content."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"addStyleTag(options: FrameAddStyleTagOptions): Promise<ElementHandle>;\n")),(0,p.kt)("h2",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"options"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.1.0/puppeteer.frameaddstyletagoptions"},"FrameAddStyleTagOptions")),(0,p.kt)("td",{parentName:"tr",align:null},"configure the CSS to add to the page.")))),(0,p.kt)("b",null,"Returns:"),(0,p.kt)("p",null,"Promise","<",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer.elementhandle"},"ElementHandle"),">"),(0,p.kt)("p",null,"a promise that resolves to the added tag when the stylesheets's ",(0,p.kt)("inlineCode",{parentName:"p"},"onload")," event fires or when the CSS content was injected into the frame."))}c.isMDXComponent=!0}}]);