(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?a.a.createElement(m,l(l({ref:t},p),{},{components:n})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),i=(n(0),n(106)),o={id:"integration",title:"Library Integration"},l={unversionedId:"integration",id:"integration",isDocsHomePage:!1,title:"Library Integration",description:"Available Library Distributions",source:"@site/docs/integration.md",slug:"/integration",permalink:"/PptxGenJS/docs/integration",version:"current",lastUpdatedBy:"Brent Ely",lastUpdatedAt:1616291282,formattedLastUpdatedAt:"3/20/2021",sidebar:"docs",previous:{title:"HTML to PowerPoint",permalink:"/PptxGenJS/docs/html-to-powerpoint"},next:{title:"Masters and Placeholders",permalink:"/PptxGenJS/docs/masters"}},c=[{value:"Available Library Distributions",id:"available-library-distributions",children:[]},{value:"Integration with Angular/React",id:"integration-with-angularreact",children:[{value:"React Example",id:"react-example",children:[]}]},{value:"Webpack Troubleshooting",id:"webpack-troubleshooting",children:[{value:"Related Issues",id:"related-issues",children:[]}]}],p={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"available-library-distributions"},"Available Library Distributions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Browser ",Object(i.b)("inlineCode",{parentName:"li"},"dist/pptxgen.min.js")),Object(i.b)("li",{parentName:"ul"},"CommonJS ",Object(i.b)("inlineCode",{parentName:"li"},"dist/pptxgen.cjs.js")),Object(i.b)("li",{parentName:"ul"},"ES6 Module ",Object(i.b)("inlineCode",{parentName:"li"},"dist/pptxgen.es.js"))),Object(i.b)("h2",{id:"integration-with-angularreact"},"Integration with Angular/React"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Working React demo under ",Object(i.b)("a",{parentName:"li",href:"https://github.com/gitbrent/PptxGenJS/tree/master/demos/react-demo"},"demos/react-demo"))),Object(i.b)("h3",{id:"react-example"},"React Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},'import pptxgen from "pptxgenjs";\n\nlet pptx = new pptxgen();\nlet slide = pptx.addSlide();\n\nslide.addText(\n  "React Demo!",\n  { x:1, y:1, w:10, fontSize:36, fill:{ color:\'F1F1F1\' }, align:\'center\' }\n);\npptx.writeFile("react-demo.pptx");\n')),Object(i.b)("h2",{id:"webpack-troubleshooting"},"Webpack Troubleshooting"),Object(i.b)("p",null,"Some users have modified their webpack config to avoid a module resolution error using:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'node: { fs: "empty" }'))),Object(i.b)("h3",{id:"related-issues"},"Related Issues"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/gitbrent/PptxGenJS/issues/72"},"See Issue #72 for more information")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/gitbrent/PptxGenJS/issues/220"},"See Issue #220 for more information")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/gitbrent/PptxGenJS/issues/308"},"See Issue #308 for more information"))))}s.isMDXComponent=!0}}]);