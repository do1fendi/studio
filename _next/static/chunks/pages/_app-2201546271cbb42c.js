(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6363:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(628)}])},8045:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==r.return||r.return()}finally{if(l)throw i}}return o}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}t.default=function(e){var t=e.src,r=e.sizes,n=e.unoptimized,l=void 0!==n&&n,c=e.priority,h=void 0!==c&&c,v=e.loading,A=e.lazyRoot,S=void 0===A?null:A,O=e.lazyBoundary,E=void 0===O?"200px":O,I=e.className,z=e.quality,N=e.width,P=e.height,_=e.objectFit,R=e.objectPosition,L=e.onLoadingComplete,M=e.loader,C=void 0===M?k:M,D=e.placeholder,U=void 0===D?"empty":D,q=e.blurDataURL,T=function(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),H=u.useRef(null),W=u.useContext(g.ImageConfigContext),B=u.useMemo((function(){var e=m||W||f.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),r=e.deviceSizes.sort((function(e,t){return e-t}));return p({},e,{allSizes:t,deviceSizes:r})}),[W]),G=T,V=r?"responsive":"intrinsic";"layout"in G&&(G.layout&&(V=G.layout),delete G.layout);var F="";if(function(e){return"object"===typeof e&&(w(e)||function(e){return void 0!==e.src}(e))}(t)){var K=w(t)?t.default:t;if(!K.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(K)));if(q=q||K.blurDataURL,F=K.src,(!V||"fill"!==V)&&(P=P||K.height,N=N||K.width,!K.height||!K.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(K)))}t="string"===typeof t?t:F;var $=j(N),J=j(P),X=j(z),Q=!h&&("lazy"===v||"undefined"===typeof v);(t.startsWith("data:")||t.startsWith("blob:"))&&(l=!0,Q=!1);y.has(t)&&(Q=!1);0;var Y,Z=o(d.useIntersection({rootRef:S,rootMargin:E,disabled:!Q}),2),ee=Z[0],te=Z[1],re=!Q||te,ne={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ie={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},oe=!1,ae={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:_,objectPosition:R},le="blur"===U?{filter:"blur(20px)",backgroundSize:_||"cover",backgroundImage:'url("'.concat(q,'")'),backgroundPosition:R||"0% 0%"}:{};if("fill"===V)ne.display="block",ne.position="absolute",ne.top=0,ne.left=0,ne.bottom=0,ne.right=0;else if("undefined"!==typeof $&&"undefined"!==typeof J){var ce=J/$,ue=isNaN(ce)?"100%":"".concat(100*ce,"%");"responsive"===V?(ne.display="block",ne.position="relative",oe=!0,ie.paddingTop=ue):"intrinsic"===V?(ne.display="inline-block",ne.position="relative",ne.maxWidth="100%",oe=!0,ie.maxWidth="100%",Y="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat($,"%27%20height=%27").concat(J,"%27/%3e")):"fixed"===V&&(ne.display="inline-block",ne.position="relative",ne.width=$,ne.height=J)}else 0;var se={src:b,srcSet:void 0,sizes:void 0};re&&(se=x({config:B,src:t,unoptimized:l,layout:V,width:$,quality:X,sizes:r,loader:C}));var fe=t;0;var de;0;var ge=(i(de={},"imagesrcset",se.srcSet),i(de,"imagesizes",se.sizes),de),he=u.default.useLayoutEffect,pe=u.useRef(L);return u.useEffect((function(){pe.current=L}),[L]),he((function(){ee(H.current)}),[ee]),u.useEffect((function(){!function(e,t,r,n,i){var o=function(){var r=e.current;r&&(r.src!==b&&("decode"in r?r.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.current&&(y.add(t),"blur"===n&&(r.style.filter="",r.style.backgroundSize="",r.style.backgroundImage="",r.style.backgroundPosition=""),i.current)){var o=r.naturalWidth,a=r.naturalHeight;i.current({naturalWidth:o,naturalHeight:a})}})))};e.current&&(e.current.complete?o():e.current.onload=o)}(H,fe,0,U,pe)}),[fe,V,U,re]),u.default.createElement("span",{style:ne},oe?u.default.createElement("span",{style:ie},Y?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:Y}):null):null,u.default.createElement("img",Object.assign({},G,se,{decoding:"async","data-nimg":V,className:I,ref:H,style:p({},ae,le)})),Q&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},G,x({config:B,src:t,unoptimized:l,layout:V,width:$,quality:X,sizes:r,loader:C}),{decoding:"async","data-nimg":V,style:ae,className:I,loading:v||"lazy"}))),h?u.default.createElement(s.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+se.src+se.srcSet+se.sizes,rel:"preload",as:"image",href:se.srcSet?void 0:se.src},ge))):null)};var c,u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),s=(c=r(5443))&&c.__esModule?c:{default:c},f=r(5809),d=r(7190),g=r(9977);function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){for(var t=arguments,r=function(r){var n=null!=t[r]?t[r]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){h(e,t,n[t])}))},n=1;n<arguments.length;n++)r(n);return e}var m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"imgix"},y=new Set,b=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var v=new Map([["default",function(e){var t=e.config,r=e.src,n=e.width,i=e.quality;0;if(r.endsWith(".svg")&&!t.dangerouslyAllowSVG)return r;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,r=e.src,n=e.width,i=e.quality,o=new URL("".concat(t.path).concat(A(r))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.config,r=e.src,n=e.width,i=e.quality,o=["f_auto","c_limit","w_"+n,"q_"+(i||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(A(r))}],["akamai",function(e){var t=e.config,r=e.src,n=e.width;return"".concat(t.path).concat(A(r),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function w(e){return void 0!==e.default}function x(e){var t=e.config,r=e.src,n=e.unoptimized,i=e.layout,o=e.width,l=e.quality,c=e.sizes,u=e.loader;if(n)return{src:r,srcSet:void 0,sizes:void 0};var s=function(e,t,r,n){var i=e.deviceSizes,o=e.allSizes;if(n&&("fill"===r||"responsive"===r)){for(var l,c=/(^|\s)(1?\d?\d)vw/g,u=[];l=c.exec(n);l)u.push(parseInt(l[2]));if(u.length){var s,f=.01*(s=Math).min.apply(s,a(u));return{widths:o.filter((function(e){return e>=i[0]*f})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof t||"fill"===r||"responsive"===r?{widths:i,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return o.find((function(t){return t>=e}))||o[o.length-1]})))),kind:"x"}}(t,o,i,c),f=s.widths,d=s.kind,g=f.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:f.map((function(e,n){return"".concat(u({config:t,src:r,quality:l,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:u({config:t,src:r,quality:l,width:f[g]})}}function j(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function k(e){var t,r=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",n=v.get(r);if(n)return n(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(r))}function A(e){return"/"===e[0]?e.slice(1):e}},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==r.return||r.return()}finally{if(l)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var o,a=(o=r(7294))&&o.__esModule?o:{default:o},l=r(6273),c=r(387),u=r(7190);var s={};function f(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var i=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(i?"%"+i:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=c.useRouter(),o=a.default.useMemo((function(){var t=i(l.resolveHref(n,e.href,!0),2),r=t[0],o=t[1];return{href:r,as:e.as?l.resolveHref(n,e.as):o||r}}),[n,e.href,e.as]),d=o.href,g=o.as,h=e.children,p=e.replace,m=e.shallow,y=e.scroll,b=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var v=(t=a.default.Children.only(h))&&"object"===typeof t&&t.ref,w=i(u.useIntersection({rootMargin:"200px"}),2),x=w[0],j=w[1],k=a.default.useCallback((function(e){x(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,x]);a.default.useEffect((function(){var e=j&&r&&l.isLocalURL(d),t="undefined"!==typeof b?b:n&&n.locale,i=s[d+"%"+g+(t?"%"+t:"")];e&&!i&&f(n,d,g,{locale:t})}),[g,d,j,b,r,n]);var A={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,i,o,a,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),t[i?"replace":"push"](r,n,{shallow:o,locale:c,scroll:a}))}(e,n,d,g,p,m,y,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(d)&&f(n,d,g,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var S="undefined"!==typeof b?b:n&&n.locale,O=n&&n.isLocaleDomain&&l.getDomainLocale(g,S,n&&n.locales,n&&n.domainLocales);A.href=O||l.addBasePath(l.addLocale(g,S,n&&n.defaultLocale))}return a.default.cloneElement(t,A)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==r.return||r.return()}finally{if(l)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!l,s=o.useRef(),f=i(o.useState(!1),2),d=f[0],g=f[1],h=i(o.useState(t?t.current:null),2),p=h[0],m=h[1],y=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=u.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=c.get(n):(t=c.get(r),u.push(r));if(t)return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(r,t={id:r,observer:o,elements:i}),t}(r),i=n.id,o=n.observer,a=n.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),c.delete(i);var t=u.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&u.splice(t,1)}}}(e,(function(e){return e&&g(e)}),{root:p,rootMargin:r}))}),[n,p,r,d]);return o.useEffect((function(){if(!l&&!d){var e=a.requestIdleCallback((function(){return g(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){t&&m(t.current)}),[t]),[y,d]};var o=r(7294),a=r(9311),l="undefined"!==typeof IntersectionObserver;var c=new Map,u=[]},628:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(5893),i=(r(906),r(5675)),o=function(){return(0,n.jsxs)("div",{className:"w-58 bg-gray-200",children:[(0,n.jsx)("div",{className:"flex justify-center p-3",children:(0,n.jsx)(i.default,{src:"".concat("https://do1fendi.github.io/studio","/images/logo/logoGrey.webp"),width:"150",height:"60"})}),(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)("h3",{className:"text-gray-600 text-sm p-5",children:"\xa9 Copyright 2021 \u73a9\u73a9\u5275\u610f All Rights Reserved"})})]})},a=r(1664),l=r(7294),c=function(){(0,l.useEffect)((function(){console.log("https://do1fendi.github.io/studio")}),[]);var e=(0,l.useState)(!1),t=e[0],r=e[1];return(0,n.jsxs)("nav",{className:"sticky top-0 flex items-center justify-between flex-wrap p-6",children:[(0,n.jsxs)("div",{className:"flex items-center flex-shrink-0 text-white mr-6",children:[(0,n.jsx)(i.default,{src:"".concat("https://do1fendi.github.io/studio","/images/logo/logo.webp"),width:"40",height:"40"}),(0,n.jsx)("span",{className:"font-semibold text-xl tracking-tight",children:"STUDIO"})]}),(0,n.jsx)("div",{className:"block lg:hidden",children:(0,n.jsx)("button",{className:"flex items-center px-3 py-2 border rounded text-gray-600 border-gray-600 hover:text-gray-900 hover:border-gray-900",onClick:function(){r(!t)},children:(0,n.jsxs)("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("title",{children:"Menu"}),(0,n.jsx)("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})]})})}),(0,n.jsx)("div",{className:t?"block w-full lg:block lg:flex lg:items-center lg:w-auto":"hidden w-full lg:block lg:flex lg:items-center lg:w-auto",children:(0,n.jsxs)("nav",{className:"text-sm",children:[(0,n.jsx)(a.default,{href:"/",children:(0,n.jsx)("a",{className:"block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-gray-900 lg:mr-3",children:"HOME"})}),(0,n.jsx)(a.default,{href:"/uiDesign",children:(0,n.jsx)("a",{className:"block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-gray-900 lg:mr-3",children:"UI DESIGN"})}),(0,n.jsx)(a.default,{href:"/illustration",children:(0,n.jsx)("a",{className:"block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-gray-900 lg:mr-3",children:"ILLUSTRATION"})}),(0,n.jsx)(a.default,{href:"/webDev",children:(0,n.jsx)("a",{className:"block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-gray-900 lg:mr-3",children:"WEB DEVELOPMENT"})}),(0,n.jsx)(a.default,{href:"/film",children:(0,n.jsx)("a",{className:"block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-gray-900",children:"FILM EDITING"})})]})})]})},u=function(e){var t=e.children;return(0,n.jsxs)("div",{children:[(0,n.jsx)(c,{}),t,(0,n.jsx)(o,{})]})};function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}var d=function(e){var t=e.Component,r=e.pageProps;return(0,n.jsx)(u,{children:(0,n.jsx)(t,f({},r))})}},906:function(){},5675:function(e,t,r){e.exports=r(8045)},1664:function(e,t,r){e.exports=r(8418)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(387)}));var r=e.O();_N_E=r}]);