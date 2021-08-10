"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44457],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},i=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),i=u(n),c=a,h=i["".concat(d,".").concat(c)]||i[c]||s[c]||l;return n?r.createElement(h,p(p({ref:t},m),{},{components:n})):r.createElement(h,p({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=i;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var u=2;u<l;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}i.displayName="MDXCreateElement"},8707:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return m},default:function(){return i}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),p=["components"],o={},d=void 0,u={unversionedId:"puppeteer.elementhandle",id:"version-10.1.0/puppeteer.elementhandle",isDocsHomePage:!1,title:"puppeteer.elementhandle",description:"Home &gt; puppeteer &gt; ElementHandle",source:"@site/versioned_docs/version-10.1.0/puppeteer.elementhandle.md",sourceDirName:".",slug:"/puppeteer.elementhandle",permalink:"/puppeteer/docs/10.1.0/puppeteer.elementhandle",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-10.1.0/puppeteer.elementhandle.md",version:"10.1.0",frontMatter:{},sidebar:"version-10.1.0/docs",previous:{title:"puppeteer.jshandle.jsonvalue",permalink:"/puppeteer/docs/10.1.0/puppeteer.jshandle.jsonvalue"},next:{title:"puppeteer.elementhandle._",permalink:"/puppeteer/docs/10.1.0/puppeteer.elementhandle._"}},m=[{value:"ElementHandle class",id:"elementhandle-class",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Methods",id:"methods",children:[]}],s={toc:m};function i(e){var t=e.components,n=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/index"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer"},"puppeteer")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer.elementhandle"},"ElementHandle")),(0,l.kt)("h2",{id:"elementhandle-class"},"ElementHandle class"),(0,l.kt)("p",null,"ElementHandle represents an in-page DOM element."),(0,l.kt)("b",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class ElementHandle<ElementType extends Element = Element> extends JSHandle<ElementType> \n")),(0,l.kt)("b",null,"Extends:")," [JSHandle](/puppeteer/docs/10.1.0/puppeteer.jshandle)<ElementType>",(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"ElementHandles can be created with the ",(0,l.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer.page._"},"Page.$()")," method."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const puppeteer = require('puppeteer');\n\n(async () => {\n const browser = await puppeteer.launch();\n const page = await browser.newPage();\n await page.goto('https://example.com');\n const hrefElement = await page.$('a');\n await hrefElement.click();\n // ...\n})();\n\n")),(0,l.kt)("p",null,"ElementHandle prevents the DOM element from being garbage-collected unless the handle is ",(0,l.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer.jshandle.dispose"},"disposed"),". ElementHandles are auto-disposed when their origin frame gets navigated."),(0,l.kt)("p",null,"ElementHandle instances can be used as arguments in ",(0,l.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer.page._eval"},"Page.$eval()")," and ",(0,l.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.1.0/puppeteer.page.evaluate"},"Page.evaluate()")," methods."),(0,l.kt)("p",null,"If you're using TypeScript, ElementHandle takes a generic argument that denotes the type of element the handle is holding within. For example, if you have a handle to a ",(0,l.kt)("inlineCode",{parentName:"p"},"<select>")," element, you can type it as ",(0,l.kt)("inlineCode",{parentName:"p"},"ElementHandle<HTMLSelectElement>")," and you get some nicer type checks."),(0,l.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,l.kt)("inlineCode",{parentName:"p"},"ElementHandle")," class."),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.1.0/puppeteer.elementhandle._"},"$(selector)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Runs ",(0,l.kt)("code",null,"element.querySelector")," within the page. If no element matches the selector, the return value resolves to ",(0,l.kt)("code",null,"null"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.1.0/puppeteer.elementhandle.__"},"$$(selector)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Runs ",(0,l.kt)("code",null,"element.querySelectorAll")," within the page. If no elements match the selector, the return value resolves to ",(0,l.kt)("code",null,"[]"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.1.0/puppeteer.elementhandle.__eval"},"$$eval(selector, pageFunction, args)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"This method runs ",(0,l.kt)("code",null,"document.querySelectorAll")," within the element and passes it as the first argument to ",(0,l.kt)("code",null,"pageFunction"),". If there's no element matching ",(0,l.kt)("code",null,"selector"),", the method throws an error.If ",(0,l.kt)("code",null,"pageFunction")," returns a Promise, then ",(0,l.kt)("code",null,"frame.$$eval")," would wait for the promise to resolve and return its value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.1.0/puppeteer.elementhandle._eval"},"$eval(selector, pageFunction, args)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"This method runs ",(0,l.kt)("code",null,"document.querySelector")," within the element and passes it as the first argument to ",(0,l.kt)("code",null,"pageFunction"),". If there's no element matching ",(0,l.kt)("code",null,"selector"),", the method throws an error.If ",(0,l.kt)("code",null,"pageFunction")," returns a Promise, then ",(0,l.kt)("code",null,"frame.$eval")," would wait for the promise to resolve and return its value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.1.0/puppeteer.elementhandle._x"},"$x(expression)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The method evaluates the XPath expression relative to the elementHandle. If there are no such elements, the method will resolve to an empty array.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.1.0/puppeteer.elementhandle.aselement"},"asElement()")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.1.0/puppeteer.elementhandle.boundingbox"},"boundingBox()")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"This method returns the bounding box of the element (relative to the main frame), or ",(0,l.kt)("code",null,"null")," if the element is not visible.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.1.0/puppeteer.elementhandle.boxmodel"},"boxModel()")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"This method returns boxes of the element, or ",(0,l.kt)("code",null,"null")," if the element is not visible.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.1.0/puppeteer.elementhandle.click"},"click(options)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"This method scrolls element into view if needed, and then uses ",(0,l.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.1.0/puppeteer.page.mouse"},"Page.mouse")," to click in the center of the element. If the element is detached from DOM, the method throws an error.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.1.0/puppeteer.elementhandle.clickablepoint"},"clickablePoint()")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.1.0/puppeteer.elementhandle.contentframe"},"contentFrame()")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Resolves to the content frame for element handles referencing iframe nodes, or null otherwise")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.1.0/puppeteer.elementhandle.drag"},"drag(target)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"This method creates and captures a dragevent from the element.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.1.0/puppeteer.elementhandle.draganddrop"},"dragAndDrop(target, options)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"This method triggers a dragenter, dragover, and drop on the element.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.1.0/puppeteer.elementhandle.dragenter"},"dragEnter(data)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"This method creates a ",(0,l.kt)("code",null,"dragenter")," event on the element.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.1.0/puppeteer.elementhandle.dragover"},"dragOver(data)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"This method creates a ",(0,l.kt)("code",null,"dragover")," event on the element.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.1.0/puppeteer.elementhandle.drop"},"drop(data)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"This method triggers a drop on the element.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.1.0/puppeteer.elementhandle.focus"},"focus()")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Calls ",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus"},"focus")," on the element.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.1.0/puppeteer.elementhandle.hover"},"hover()")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"This method scrolls element into view if needed, and then uses ",(0,l.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.1.0/puppeteer.page.mouse"},"Page.mouse")," to hover over the center of the element. If the element is detached from DOM, the method throws an error.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.1.0/puppeteer.elementhandle.isintersectingviewport"},"isIntersectingViewport()")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Resolves to true if the element is visible in the current viewport.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.1.0/puppeteer.elementhandle.press"},"press(key, options)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Focuses the element, and then uses ",(0,l.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.1.0/puppeteer.keyboard.down"},"Keyboard.down()")," and ",(0,l.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.1.0/puppeteer.keyboard.up"},"Keyboard.up()"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.1.0/puppeteer.elementhandle.screenshot"},"screenshot(options)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"This method scrolls element into view if needed, and then uses ",(0,l.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.1.0/puppeteer.page.screenshot"},"Page.screenshot()")," to take a screenshot of the element. If the element is detached from DOM, the method throws an error.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.1.0/puppeteer.elementhandle.select"},"select(values)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Triggers a ",(0,l.kt)("code",null,"change")," and ",(0,l.kt)("code",null,"input")," event once all the provided options have been selected. If there's no ",(0,l.kt)("code",null,"<","select",">")," element matching ",(0,l.kt)("code",null,"selector"),", the method throws an error.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.1.0/puppeteer.elementhandle.tap"},"tap()")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"This method scrolls element into view if needed, and then uses ",(0,l.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.1.0/puppeteer.touchscreen.tap"},"Touchscreen.tap()")," to tap in the center of the element. If the element is detached from DOM, the method throws an error.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.1.0/puppeteer.elementhandle.type"},"type(text, options)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Focuses the element, and then sends a ",(0,l.kt)("code",null,"keydown"),", ",(0,l.kt)("code",null,"keypress"),"/",(0,l.kt)("code",null,"input"),", and ",(0,l.kt)("code",null,"keyup")," event for each character in the text.To press a special key, like ",(0,l.kt)("code",null,"Control")," or ",(0,l.kt)("code",null,"ArrowDown"),", use ",(0,l.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.1.0/puppeteer.elementhandle.press"},"ElementHandle.press()"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.1.0/puppeteer.elementhandle.uploadfile"},"uploadFile(filePaths)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"This method expects ",(0,l.kt)("code",null,"elementHandle")," to point to an ",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"},"input element"),".")))))}i.isMDXComponent=!0}}]);