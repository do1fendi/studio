(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6363:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(628)}])},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,l=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);a=!0);}catch(c){i=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var l,a=(l=r(7294))&&l.__esModule?l:{default:l},i=r(6273),c=r(387),u=r(7190);var s={};function f(e,t,r,n){if(e&&i.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=c.useRouter(),l=a.default.useMemo((function(){var t=o(i.resolveHref(n,e.href,!0),2),r=t[0],l=t[1];return{href:r,as:e.as?i.resolveHref(n,e.as):l||r}}),[n,e.href,e.as]),d=l.href,h=l.as,p=e.children,v=e.replace,m=e.shallow,g=e.scroll,b=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var y=(t=a.default.Children.only(p))&&"object"===typeof t&&t.ref,x=o(u.useIntersection({rootMargin:"200px"}),2),w=x[0],j=x[1],k=a.default.useCallback((function(e){w(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,w]);a.default.useEffect((function(){var e=j&&r&&i.isLocalURL(d),t="undefined"!==typeof b?b:n&&n.locale,o=s[d+"%"+h+(t?"%"+t:"")];e&&!o&&f(n,d,h,{locale:t})}),[h,d,j,b,r,n]);var N={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,l,a,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:l,locale:c,scroll:a}))}(e,n,d,h,v,m,g,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&f(n,d,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof b?b:n&&n.locale,M=n&&n.isLocaleDomain&&i.getDomainLocale(h,E,n&&n.locales,n&&n.domainLocales);N.href=M||i.addBasePath(i.addLocale(h,E,n&&n.defaultLocale))}return a.default.cloneElement(t,N)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,l=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);a=!0);}catch(c){i=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!i,s=l.useRef(),f=o(l.useState(!1),2),d=f[0],h=f[1],p=o(l.useState(t?t.current:null),2),v=p[0],m=p[1],g=l.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=u.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=c.get(n):(t=c.get(r),u.push(r));if(t)return t;var o=new Map,l=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(r,t={id:r,observer:l,elements:o}),t}(r),o=n.id,l=n.observer,a=n.elements;return a.set(e,t),l.observe(e),function(){if(a.delete(e),l.unobserve(e),0===a.size){l.disconnect(),c.delete(o);var t=u.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&u.splice(t,1)}}}(e,(function(e){return e&&h(e)}),{root:v,rootMargin:r}))}),[n,v,r,d]);return l.useEffect((function(){if(!i&&!d){var e=a.requestIdleCallback((function(){return h(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),l.useEffect((function(){t&&m(t.current)}),[t]),[g,d]};var l=r(7294),a=r(9311),i="undefined"!==typeof IntersectionObserver;var c=new Map,u=[]},628:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(5893),o=(r(906),function(){return(0,n.jsx)("div",{className:"w-58 bg-gray-800",children:(0,n.jsx)("h1",{children:"Footer"})})}),l=r(1664),a=r(7294),i=function(){var e=(0,a.useState)(!1),t=e[0],r=e[1];return(0,n.jsxs)("nav",{className:"flex items-center justify-between flex-wrap bg-teal-500 p-6",children:[(0,n.jsxs)("div",{className:"flex items-center flex-shrink-0 text-white mr-6",children:[(0,n.jsx)("svg",{className:"fill-current h-8 w-8 mr-2",width:"54",height:"54",viewBox:"0 0 54 54",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"})}),(0,n.jsx)("span",{className:"font-semibold text-xl tracking-tight",children:"STUDIO"})]}),(0,n.jsx)("div",{className:"block lg:hidden",children:(0,n.jsx)("button",{className:"flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white",onClick:function(){r(!t)},children:(0,n.jsxs)("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("title",{children:"Menu"}),(0,n.jsx)("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})]})})}),(0,n.jsx)("div",{className:t?"block w-full lg:block lg:flex lg:items-center lg:w-auto":"hidden w-full lg:block lg:flex lg:items-center lg:w-auto",children:(0,n.jsxs)("nav",{className:"flex gap-2 text-sm",children:[(0,n.jsx)(l.default,{href:"/",children:(0,n.jsx)("a",{className:"block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white",children:"Home"})}),(0,n.jsx)(l.default,{href:"/project",children:(0,n.jsx)("a",{className:"block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white",children:"Project"})}),(0,n.jsx)(l.default,{href:"/about",children:(0,n.jsx)("a",{className:"block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white",children:"About"})})]})})]})},c=function(e){var t=e.children;return(0,n.jsxs)("div",{children:[(0,n.jsx)(i,{}),t,(0,n.jsx)(o,{})]})};function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){u(e,t,r[t])}))}return e}var f=function(e){var t=e.Component,r=e.pageProps;return(0,n.jsx)(c,{children:(0,n.jsx)(t,s({},r))})}},906:function(){},1664:function(e,t,r){e.exports=r(8418)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(387)}));var r=e.O();_N_E=r}]);