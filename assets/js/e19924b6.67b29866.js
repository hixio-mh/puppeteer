"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[69129],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,p(p({ref:t},l),{},{components:n})):r.createElement(h,p({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var c=2;c<o;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},60989:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),p=["components"],s={},i=void 0,c={unversionedId:"puppeteer.cdpsession",id:"version-9.1.1/puppeteer.cdpsession",isDocsHomePage:!1,title:"puppeteer.cdpsession",description:"Home &gt; puppeteer &gt; CDPSession",source:"@site/versioned_docs/version-9.1.1/puppeteer.cdpsession.md",sourceDirName:".",slug:"/puppeteer.cdpsession",permalink:"/puppeteer/docs/puppeteer.cdpsession",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-9.1.1/puppeteer.cdpsession.md",version:"9.1.1",frontMatter:{},sidebar:"version-9.1.1/docs",previous:{title:"puppeteer.target.worker",permalink:"/puppeteer/docs/puppeteer.target.worker"},next:{title:"puppeteer.cdpsession.detach",permalink:"/puppeteer/docs/puppeteer.cdpsession.detach"}},l=[{value:"CDPSession class",id:"cdpsession-class",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]},{value:"Methods",id:"methods",children:[]}],d={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.cdpsession"},"CDPSession")),(0,o.kt)("h2",{id:"cdpsession-class"},"CDPSession class"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"CDPSession")," instances are used to talk raw Chrome Devtools Protocol."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class CDPSession extends EventEmitter\n")),(0,o.kt)("b",null,"Extends:")," [EventEmitter](/puppeteer/docs/puppeteer.eventemitter)",(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"Protocol methods can be called with ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.cdpsession.send"},"CDPSession.send()")," method and protocol events can be subscribed to with ",(0,o.kt)("inlineCode",{parentName:"p"},"CDPSession.on")," method."),(0,o.kt)("p",null,"Useful links: ",(0,o.kt)("a",{parentName:"p",href:"https://chromedevtools.github.io/devtools-protocol/"},"DevTools Protocol Viewer")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aslushnikov/getting-started-with-cdp/blob/master/README.md"},"Getting Started with DevTools Protocol"),"."),(0,o.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,o.kt)("inlineCode",{parentName:"p"},"CDPSession")," class."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const client = await page.target().createCDPSession();\nawait client.send('Animation.enable');\nclient.on('Animation.animationCreated', () => console.log('Animation created!'));\nconst response = await client.send('Animation.getPlaybackRate');\nconsole.log('playback rate is ' + response.playbackRate);\nawait client.send('Animation.setPlaybackRate', {\n  playbackRate: response.playbackRate / 2\n});\n\n")),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Method"),(0,o.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.cdpsession.detach"},"detach()")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Detaches the cdpSession from the target. Once detached, the cdpSession object won't emit any events and can't be used to send messages.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.cdpsession.send"},"send(method, paramArgs)")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);