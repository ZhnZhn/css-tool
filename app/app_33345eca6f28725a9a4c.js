(()=>{var n={905:(n,e,t)=>{n.exports=t(548)(400)},548:n=>{"use strict";n.exports=lib_vendor}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return n[r](o,o.exports,t),o.exports}(()=>{"use strict";var n,e,r,i,o=t(905),a=0,c=[],u=o.options.__b,l=o.options.__r,s=o.options.diffed,d=o.options.__c,f=o.options.unmount;function h(n,t){o.options.__h&&o.options.__h(e,n,a||t),a=0;var r=e.__H||(e.__H={__:[],__h:[]});return n>=r.__.length&&r.__.push({}),r.__[n]}function p(n){return a=1,v(S,n)}function v(t,r,i){var o=h(n++,2);return o.t=t,o.__c||(o.__=[i?i(r):S(void 0,r),function(n){var e=o.t(o.__[0],n);o.__[0]!==e&&(o.__=[e,o.__[1]],o.__c.setState({}))}],o.__c=e),o.__}function g(t,r){var i=h(n++,4);!o.options.__s&&N(i.__H,r)&&(i.__=t,i.u=r,e.__h.push(i))}function b(n){return a=5,m((function(){return{current:n}}),[])}function _(n,e,t){a=6,g((function(){return"function"==typeof n?(n(e()),function(){return n(null)}):n?(n.current=e(),function(){return n.current=null}):void 0}),null==t?t:t.concat(n))}function m(e,t){var r=h(n++,7);return N(r.__H,t)?(r.o=e(),r.u=t,r.__h=e,r.o):r.__}function x(n,e){return a=8,m((function(){return n}),e)}function y(){for(var n;n=c.shift();)if(n.__P)try{n.__H.__h.forEach(k),n.__H.__h.forEach(C),n.__H.__h=[]}catch(e){n.__H.__h=[],o.options.__e(e,n.__v)}}o.options.__b=function(n){e=null,u&&u(n)},o.options.__r=function(t){l&&l(t),n=0;var i=(e=t.__c).__H;i&&(r===e?(i.__h=[],e.__h=[],i.__.forEach((function(n){n.o=n.u=void 0}))):(i.__.forEach((function(n){n.u&&(n.__H=n.u),n.o&&(n.__=n.o),n.o=n.u=void 0})),i.__h.forEach(k),i.__h.forEach(C),i.__h=[])),r=e},o.options.diffed=function(n){s&&s(n);var t=n.__c;t&&t.__H&&t.__H.__h.length&&(1!==c.push(t)&&i===o.options.requestAnimationFrame||((i=o.options.requestAnimationFrame)||function(n){var e,t=function(){clearTimeout(r),w&&cancelAnimationFrame(e),setTimeout(n)},r=setTimeout(t,100);w&&(e=requestAnimationFrame(t))})(y)),e=null,r=null},o.options.__c=function(n,e){e.some((function(n){try{n.__H&&n.__H.__.forEach((function(n){n.u&&(n.__H=n.u),n.o&&(n.__=n.o),n.o=n.u=void 0})),n.__h.forEach(k),n.__h=n.__h.filter((function(n){return!n.__||C(n)}))}catch(t){e.some((function(n){n.__h&&(n.__h=[])})),e=[],o.options.__e(t,n.__v)}})),d&&d(n,e)},o.options.unmount=function(n){f&&f(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach((function(n){try{k(n)}catch(n){e=n}})),e&&o.options.__e(e,t.__v))};var w="function"==typeof requestAnimationFrame;function k(n){var t=e,r=n.__c;"function"==typeof r&&(n.__c=void 0,r()),e=t}function C(n){var t=e;n.__c=n.__(),e=t}function N(n,e){return!n||n.length!==e.length||e.some((function(e,t){return e!==n[t]}))}function S(n,e){return"function"==typeof e?e(n):e}function I(n){return n.current}const E=function(n){var e=p((function(){return!!n})),t=e[0],r=e[1],i=x((function(){return r((function(n){return!n}))}),[]);return[t,i]};function R(){return R=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},R.apply(this,arguments)}var A=document&&"ontouchstart"in document.documentElement,B=Array.isArray,H=function(n){return B(n)?n[0]?n[1]:"":n||""};const V=function(){var n=H(arguments.length<=0?void 0:arguments[0]),e=H(arguments.length<=1?void 0:arguments[1]);return n?e?n+" "+e:n:e||void 0};var F=0;function L(n,e,t,r,i){var a,c,u={};for(c in e)"ref"==c?a=e[c]:u[c]=e[c];var l={type:n,props:u,key:t,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--F,__source:i,__self:r};if("function"==typeof n&&(a=n.defaultProps))for(c in a)void 0===u[c]&&(u[c]=a[c]);return o.options.vnode&&o.options.vnode(l),l}var M={textDecoration:"underline"},T=function(n){var e=n.caption,t=function(n,e){return e?n.toLowerCase().indexOf(e):-1}(e,n.hotKey);if(-1===t)return L(o.Fragment,{children:e});var r=e.slice(0,t),i=e.slice(t,t+1),a=e.slice(t+1);return L(o.Fragment,{children:[L("span",{children:r}),L("span",{style:M,children:i}),L("span",{children:a})]})};const D=function(n){var e=n.className,t=n.caption,r=n.hotKey,i=n.children;return t?L("span",{className:e,children:[L(T,{caption:t,hotKey:r}),i]}):null};var U={color:"#607d8b"};const O=function(n){var e=n.className,t=n.style,r=n.clDiv,i=void 0===r?"bt-flat__div":r,o=n.isPrimary,a=n.title,c=void 0===a?"":a,u=n.caption,l=n.accessKey,s=n.timeout,d=void 0===s?3e3:s,f=n.onClick,h=n.children,p=b(null),v=b(0),g=x((function(n){if(0!==d){var e=v.current,t=n.timeStamp;e&&t-e>d&&f(n),v.current=t}else f(n)}),[d,f]),_=o?R({},t,U):t,m=V("bt-flat",e),y=A?void 0:l;return L("button",{ref:p,className:m,style:_,accessKey:y,tabIndex:0,title:y?c+" ["+l+"]":c,onClick:g,children:L("div",{className:i,children:[L(D,{className:"bt-flat__span",caption:u,hotKey:y}),h]})})};const q=function(n){var e=n.className,t=n.title;return L("span",{className:e,title:t,children:L("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2","stroke-width":"2",children:[L("title",{children:t}),L("rect",{ry:"1.8825414",rx:"194.14471",y:"1.434558",x:"19.176462",height:"12.460618",width:"10.85316",fill:"#8ecc2d",stroke:"#8ecc2d"}),L("rect",{ry:"1.87537",rx:"204.478",y:"16.639841",x:"8.8410215",height:"13.752699",width:"18.307165",fill:"#232f3b",stroke:"#232f3b"}),L("rect",{ry:"1.87537",rx:"204.478",y:"3.4229634",x:"2.5897937",height:"10.894996",width:"10.001963",fill:"#a487d4",stroke:"#a487d4"})]})})};const K=function(n){return L("span",{className:n.className,style:n.style,children:n.caption})};const z=function(n){return L("a",{className:n.className,title:n.title,href:n.href,children:L("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"1.414",children:[L("title",{children:"GitHub Logo"}),L("path",{d:"M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"})]})})};var P="CSS Tool v0.2.0";const j=function(n){var e=n.onShadow,t=n.onBox;return L("div",{className:"header",children:[L(q,{className:"header__icon-app",title:P}),L("div",{className:"header__icon-gap"}),L(K,{className:"header__label-app",caption:P}),L(O,{caption:"Box",title:"Click to toggle css box inputs",accessKey:"b",timeout:0,onClick:t}),L(O,{caption:"Shadow",title:"Click to toggle css shadow-box inputs",accessKey:"h",timeout:0,onClick:e}),L(z,{className:"header__github-link",title:"GitHub Repository",href:"https://github.com/zhnzhn/css-tool/"})]})};const G=function(n){return void 0===n&&(n=""),Math.random().toString(36).slice(2,11).toUpperCase()+n};var W="SET_CURRENT_SHADOW",$="UPDATE_SHADOWS",Y="ADD_SHADOW",X="REMOVE_SHADOW",J="UPDATE_CONFIG",Q={currentIndex:0,boxShadows:[{isInset:!1,gLength:10,vLength:10,blurR:5,spreadR:0,color:"#000000",opacity:.75,id:G()}],configStyle:{bgColor:"gray",boxColor:"#e7a61a",boxBorderRadius:"0px"}},Z=function(n,e,t){return void 0===n&&(n=[]),[].concat(n.slice(0,e),[t],n.slice(e))},nn=function(n,e,t){return void 0===n&&(n=[]),n[e]=t,[].concat(n)},en=function(n,e,t){return n[e]=t,R({},n)},tn=function(n){return"number"==typeof n};const rn=function(n,e){switch(e.type){case W:var t=e.editIndex;return tn(t)?R({},n,{currentIndex:t}):n;case $:var r=e.boxShadow;if(!r)return n;var i=n.boxShadows,o=n.currentIndex;return R({},n,{boxShadows:nn(i,o,r)});case Y:var a=e.fromIndex;if(!tn(a))return n;var c=n.boxShadows,u=n.currentIndex,l=R({},c[a]),s=u+1;return l.id=G(""+s),R({},n,{currentIndex:s,boxShadows:Z(c,s,l)});case X:var d=e.removeIndex;if(!tn(d)||0===d)return n;var f=n.boxShadows;return R({},n,{currentIndex:d-1,boxShadows:(g=f,b=d,void 0===g&&(g=[]),[].concat(g.slice(0,b),g.slice(b+1)))});case J:var h=e.propName,p=e.value;if("string"!=typeof h)return n;var v=n.configStyle;return R({},n,{configStyle:en(v,h,p)});default:throw new Error("Unsupported action type: "+e.type)}var g,b};function on(n,e){function t(n){var t=this.props.ref,r=t==n.ref;return!r&&t&&(t.call?t(null):t.current=null),e?!e(this.props,n)||!r:function(n,e){for(var t in n)if("__source"!==t&&!(t in e))return!0;for(var r in e)if("__source"!==r&&n[r]!==e[r])return!0;return!1}(this.props,n)}function r(e){return this.shouldComponentUpdate=t,(0,o.createElement)(n,function(n,e){for(var t in e)n[t]=e[t];return n}({},e))}return r.prototype.isReactComponent=!0,r.displayName="Memo("+(n.displayName||n.name)+")",r._forwarded=!0,r}var an="input-text box-shadow",cn=function(){},un=function(n){return[n,!0]};function ln(n,e){void 0===e&&(e=un);var t=n.innerRef,r=n.id,i=n.initialValue,o=n.onEnter,a=void 0===o?cn:o,c=n.onChange,u=void 0===c?cn:c,l=b(r||G()),s=p((function(){return{value:i}})),d=s[0].value,f=s[1],h=x((function(n){return f({value:n})}),[]),v=x((function(n){13===n.keyCode&&a(n.currentTarget.value)}),[a]),g=x((function(n){var t=n.currentTarget.value,r=e(t),i=r[0],o=r[1];h(i),o&&u(i)}),[e,u]);return _(t,(function(){return{setValue:function(n){var t=e(n),r=t[0];t[1]&&h(r)}}}),[e]),[l.current,d,v,g]}const sn=function(n){var e=n.style,t=ln(n),r=t[0],i=t[1],o=t[2],a=t[3];return L("input",{type:"text",id:r,className:an,style:e,value:i,autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",translate:"no",maxLength:25,onInput:a,onKeyDown:o})};var dn="row",fn="row__caption",hn={float:"right"},pn={float:"right",marginRight:16},vn={float:"right",width:80};const gn=function(n){var e=n.styleInput,t=n.caption,r=n.initValue,i=n.onEnter;return L("div",{className:dn,children:L("label",{className:fn,children:[L("span",{children:t}),L(sn,{style:R({},vn,e),initialValue:r,onEnter:i})]})})};var bn="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",_n="[\\s|\\(]+("+bn+")[,|\\s]+("+bn+")[,|\\s]+("+bn+")\\s*\\)?",mn="[\\s|\\(]+("+bn+")[,|\\s]+("+bn+")[,|\\s]+("+bn+")[,|\\s]+("+bn+")\\s*\\)?";const xn={CSS_UNIT:new RegExp(bn),rgb:new RegExp("rgb"+_n),rgba:new RegExp("rgba"+mn),hsl:new RegExp("hsl"+_n),hsla:new RegExp("hsla"+mn),hsv:new RegExp("hsv"+_n),hsva:new RegExp("hsva"+mn),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};const yn={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};var wn=Math.min,kn=Math.max,Cn=Math.round,Nn=Math.abs;function Sn(n){return parseInt(n,16)}function In(n){return Sn(n)/255}function En(n,e){(function(n){return"string"==typeof n&&-1!=n.indexOf(".")&&1===parseFloat(n)})(n)&&(n="100%");var t=function(n){return"string"==typeof n&&-1!=n.indexOf("%")}(n);return n=wn(e,kn(0,parseFloat(n))),t&&(n=parseInt(""+n*e,10)/100),Nn(n-e)<1e-6?1:n%e/parseFloat(e)}function Rn(n){return function(n){return 1==n.length?"0"+n:n}(Cn(n).toString(16))}var An=/^\s+/,Bn=/\s+$/;function Hn(n){return!!xn.CSS_UNIT.exec(n)}function Vn(n){return n<=1&&(n=100*n+"%"),n}var Fn=Math.max,Ln=Math.min,Mn=Math.round;var Tn=Math.min,Dn=Math.max,Un=Object.prototype.hasOwnProperty;const On=function(n){var e={r:0,g:0,b:0},t=1,r=null,i=null,o=null,a=!1,c=!1;return"string"==typeof n&&(n=function(n){n=n.replace(An,"").replace(Bn,"").toLowerCase();var e,t=!1;if(yn[n])n=yn[n],t=!0;else if("transparent"==n)return{r:0,g:0,b:0,a:0,format:"name"};return(e=xn.rgb.exec(n))?{r:e[1],g:e[2],b:e[3]}:(e=xn.rgba.exec(n))?{r:e[1],g:e[2],b:e[3],a:e[4]}:(e=xn.hsl.exec(n))?{h:e[1],s:e[2],l:e[3]}:(e=xn.hsla.exec(n))?{h:e[1],s:e[2],l:e[3],a:e[4]}:(e=xn.hsv.exec(n))?{h:e[1],s:e[2],v:e[3]}:(e=xn.hsva.exec(n))?{h:e[1],s:e[2],v:e[3],a:e[4]}:(e=xn.hex8.exec(n))?{r:Sn(e[1]),g:Sn(e[2]),b:Sn(e[3]),a:In(e[4]),format:t?"name":"hex8"}:(e=xn.hex6.exec(n))?{r:Sn(e[1]),g:Sn(e[2]),b:Sn(e[3]),format:t?"name":"hex"}:(e=xn.hex4.exec(n))?{r:Sn(e[1]+""+e[1]),g:Sn(e[2]+""+e[2]),b:Sn(e[3]+""+e[3]),a:In(e[4]+""+e[4]),format:t?"name":"hex8"}:!!(e=xn.hex3.exec(n))&&{r:Sn(e[1]+""+e[1]),g:Sn(e[2]+""+e[2]),b:Sn(e[3]+""+e[3]),format:t?"name":"hex"}}(n)),"object"==typeof n&&(!function(n){return Hn(n.r)&&Hn(n.g)&&Hn(n.b)}(n)?function(n){return Hn(n.h)&&Hn(n.s)}(n)&&(Hn(n.v)?(r=Vn(n.s),i=Vn(n.v),e=function(n,e,t){n=6*En(n,360),e=En(e,100),t=En(t,100);var r=Math.floor(n),i=n-r,o=t*(1-e),a=t*(1-i*e),c=t*(1-(1-i)*e),u=r%6;return{r:255*[t,a,o,o,c,t][u],g:255*[c,t,t,a,o,o][u],b:255*[o,o,c,t,t,a][u]}}(n.h,r,i),a=!0,c="hsv"):Hn(n.l)&&(r=Vn(n.s),o=Vn(n.l),e=function(n,e,t){var r,i,o;function a(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+(e-n)*(2/3-t)*6:n}if(n=En(n,360),e=En(e,100),t=En(t,100),0===e)r=i=o=t;else{var c=t<.5?t*(1+e):t+e-t*e,u=2*t-c;r=a(u,c,n+1/3),i=a(u,c,n),o=a(u,c,n-1/3)}return{r:255*r,g:255*i,b:255*o}}(n.h,r,o),a=!0,c="hsl")):(e=function(n,e,t){return{r:255*En(n,255),g:255*En(e,255),b:255*En(t,255)}}(n.r,n.g,n.b),a=!0,c="%"===String(n.r).slice(-1)?"prgb":"rgb"),Un.call(n,"a")&&(t=n.a)),t=function(n){return n=parseFloat(n),(isNaN(n)||n<0||n>1)&&(n=1),n}(t),{ok:a,format:n.format||c,r:Tn(255,Dn(e.r,0)),g:Tn(255,Dn(e.g,0)),b:Tn(255,Dn(e.b,0)),a:t}};var qn=Math.round,Kn=0,zn=function(n){return n<1?qn(n):n};function Pn(n,e){e=e||{};var t=On(n=n||"");this._originalInput=n,this._r=zn(t.r),this._g=zn(t.g),this._b=zn(t.b),this._a=t.a,this._roundA=qn(100*this._a)/100,this._format=e.format||t.format,this._gradientType=e.gradientType,this._ok=t.ok,this._tc_id=Kn++}Pn.prototype={isValid:function(){return this._ok},toRgb:function(){return{r:qn(this._r),g:qn(this._g),b:qn(this._b),a:this._a}},toHex:function(n){return function(n,e,t,r){var i=[Rn(n),Rn(e),Rn(t)];return r&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}(this._r,this._g,this._b,n)},toHexString:function(n){return"#"+this.toHex(n)},toHsl:function(){var n=function(n,e,t){n=En(n,255),e=En(e,255),t=En(t,255);var r,i,o=Fn(n,e,t),a=Ln(n,e,t),c=(o+a)/2;if(o==a)r=i=0;else{var u=o-a;switch(i=c>.5?u/(2-o-a):u/(o+a),o){case n:r=(e-t)/u+(e<t?6:0);break;case e:r=(t-n)/u+2;break;case t:r=(n-e)/u+4}r/=6}return{h:Mn(360*r),s:Mn(100*i),l:Mn(100*c)}}(this._r,this._g,this._b);return{h:n.h,s:n.s,l:n.l,a:this._a}}};const jn=function(n,e){return new Pn(n,e)};const Gn=function(n){var e=b();return void 0===e.current&&(e.current=n()),e};const Wn=function(n){var e=n.style,t=n.value,r=n.onClick;return L("button",{className:"box-color box-shadow",style:R({},e,t?{backgroundColor:t}:null),onClick:r})};var $n={display:"block"},Yn={display:"none"};const Xn=function(n){var e=n.is,t=n.style,r=n.children;return L("div",{style:R({},t,e?$n:Yn),children:r})};var Jn=Number.isNaN||isNaN;const Qn=function(n,e,t){if(""===n||"-"===n)return[n,!1];var r=parseFloat(""+n);return[Jn(r)?e:r>t?t:r<e?e:r,!0]};const Zn=function(n){var e=n.style,t=n.step,r=void 0===t?1:t,i=n.min,o=n.max,a=x((function(n){return Qn(n,i,o)}),[i,o]),c=ln(n,a),u=c[0],l=c[1],s=c[2],d=c[3];return L("input",{type:"number",id:u,className:an,style:e,value:l,min:i,max:o,step:r,onInput:d,onKeyDown:s})};var ne={paddingTop:12,paddingBottom:12,borderBottom:"1px solid rgba(0, 0, 0, 0.2)"},ee={color:"rgba(0, 0, 0, 0.5)",paddingRight:14},te={width:50},re=function(){},ie=function(n,e,t,r){return function(i){var o=I(e);if(o){o[n]=i;var a=jn(o);if(a&&a.isValid()){var c=a.toHexString();t(c,a),r(c)}}}};const oe=function(n){var e=n.id,t=n.styleInput,r=n.caption,i=n.inputId,o=n.initValue,a=n.onEnter,c=void 0===a?re:a,u=b(null),l=b(null),s=b(null),d=b(null),f=Gn((function(){return jn(o).toHsl()})),h=E(),v=h[0],g=h[1],_=p(o),x=_[0],y=_[1],w=m((function(){return function(n){var e=jn(n);if(e&&e.isValid()){var t,r,i,o=e.toHsl();null==(t=I(l))||t.setValue(o.h),null==(r=I(s))||r.setValue(o.s),null==(i=I(d))||i.setValue(o.l),f.current=o,c(n,e),y(e.toHexString())}}}),[c]),k=m((function(){return[ie("h",f,c,y),ie("s",f,c,y),ie("l",f,c,y)]}),[c]),C=k[0],N=k[1],S=k[2],A=m((function(){return function(){var n;null==(n=u.current)||n.setValue(x)}}),[x]),B=m((function(){return f.current}),[]),H=B.h,V=B.s,F=B.l;return L("div",{className:dn,children:[L("label",{className:fn,children:[L("span",{children:r}),L(sn,{innerRef:u,id:e,style:R({},vn,t),initialValue:x,onEnter:w},i),L(Wn,{style:pn,value:x,onClick:g})]}),L(Xn,{is:v,children:L("div",{style:ne,children:[L("span",{style:ee,children:"HSL"}),L(Zn,{innerRef:l,style:te,initialValue:H,min:0,max:360,onChange:C,onEnter:A}),L(Zn,{innerRef:s,style:te,initialValue:V,min:0,max:100,onChange:N,onEnter:A}),L(Zn,{innerRef:d,style:te,initialValue:F,min:0,max:100,onChange:S,onEnter:A})]})})]})};var ae={marginBottom:32},ce={color:"brown"},ue=function(){};const le=on((function(n){var e=n.isBox,t=n.configStyle,r=n.onEnter,i=void 0===r?ue:r,o=x((function(n,e){i(n,e)}),[]);if(!e)return L("div",{});var a=t.bgColor,c=t.boxColor,u=t.boxBorderRadius;return L("div",{style:ae,children:[L(oe,{styleInput:ce,caption:"Background",initValue:a,onEnter:function(n){return o("bgColor",n)}}),L(oe,{styleInput:ce,caption:"Box Background",initValue:c,onEnter:function(n){return o("boxColor",n)}}),L(gn,{styleInput:ce,caption:"Box Border Radius",initValue:u,onEnter:function(n){return o("boxBorderRadius",n)}})]})}),(function(n,e){var t=n.isBox,r=n.configStyle;return t===e.isBox&&r===e.configStyle}));var se=Number.isNaN||isNaN,de=function(n,e){if(null===e)return NaN;if(n=+n,e=+e,isNaN(n)||"number"!=typeof e||e%1!=0)return NaN;var t=n.toString().split("e");return+((t=(n=Math.round(+(t[0]+"e"+(t[1]?+t[1]-e:-e)))).toString().split("e"))[0]+"e"+(t[1]?+t[1]+e:e))};const fe=function(n){var e=p((function(){return!!n})),t=e[0],r=e[1],i=m((function(){return[function(){return r(!0)},function(){return r(!1)}]}),[]);return[t,i[0],i[1]]};var he=A?["touchmove","touchend"]:["mousemove","mouseup"],pe=he[0],ve=he[1];const ge=function(n){var e=fe(!1),t=e[0],r=e[1],i=e[2],o=b(!1),a=function(e){I(o)||(o.current=!0,requestAnimationFrame((function(){o.current=!1,n(e)})))},c=function n(){document.removeEventListener(pe,a),document.removeEventListener(ve,n),i()};return[t,function(n){A||n.preventDefault(),document.addEventListener(pe,a),document.addEventListener(ve,c),r()}]};var be={position:"absolute",top:0,left:0,width:12,height:12,overflow:"visible"},_e={position:"absolute",top:-12,left:-12,width:"300%",height:36,borderRadius:"50%",backgroundColor:"rgba(0, 188, 212, 0.16)"};const me=function(n){var e=n.is,t=n.circleStyle,r=n.emberStyle;return L("div",{style:R({},be,t),children:e?L("div",{style:R({},_e,r)}):null})};var xe={position:"relative",width:"100%",height:18,margin:"8px 0",userSelect:"none",cursor:"default"},ye={position:"absolute",top:8,left:0,width:"100%",height:2},we={position:"absolute",left:0,width:"calc(15%)",height:"100%",marginRight:6,backgroundColor:"#00bcd4",transition:"margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms"},ke={position:"absolute",right:0,width:"calc(85%)",height:"100%",marginLeft:6,backgroundColor:"#bdbdbd",transition:"margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms"},Ce=R({},ke,{backgroundColor:"#9e9e9e"}),Ne={boxSizing:"border-box",zIndex:"1",position:"absolute",top:0,left:"15%",width:12,height:12,cursor:"pointer",pointerEvents:"inherit",margin:"1px 0px 0px",backgroundColor:"#00bcd4",backgroundClip:"padding-box",border:"0px solid transparent",borderRadius:"50%",transform:"translate(-50%, -50%)",overflow:"visible",outline:"none",transition:"background 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms"},Se={width:20,height:20},Ie={top:-12,left:-12,width:"220%",height:44,border:"1px solid #4caf50"},Ee=function(n){},Re=function(n){return{width:"calc("+n+"%)"}},Ae=A?function(n){return(((n||{}).touches||[])[0]||{}).clientX||0}:function(n){return n.clientX},Be=function(n){return"number"==typeof n&&n-n==0};const He=function(n){var e=n.innerRef,t=n.initialValue,r=void 0===t?4:t,i=n.step,o=void 0===i?1:i,a=n.min,c=void 0===a?0:a,u=n.max,l=void 0===u?20:u,s=n.onChange,d=void 0===s?Ee:s,f=Gn((function(){var n=(""+o).split(".");return n[1]?-1*n[1].length:0})),h=b(null),v=fe(!1),g=v[0],m=v[1],x=v[2],y=p(r),w=y[0],k=y[1],C=function(n){var e=function(n,e,t){return t>e?e:t<n?n:t}(c,l,n);k(e),d(e)},N=ge((function(n){var e,t,r=null==(e=I(h))?void 0:e.clientWidth,i=function(n){var e,t=null==(e=I(h))?void 0:e.getBoundingClientRect().left;return Be(t)?Ae(n)-t:NaN}(n);Be(r)&&Be(i)&&(i<0?i=0:i>r&&(i=r),t=i/r*(l-c),t=Math.round(t/o)*o+c,t=de(t,I(f)),C(t))})),S=N[0],E=N[1];_(e,(function(){return{setValue:k}}),[]);var B=A?[{onTouchStart:E},void 0]:[{onMouseDown:E,onMouseEnter:m,onMouseLeave:x},{onFocus:m,onKeyDown:function(n){var e=n.keyCode,t=function(n,e,t){return function(n){return 39===n||38===n}(t)?n+e:function(n){return 37===n||40===n}(t)?n-e:void 0}(w,o,e);null!=t&&(n.preventDefault(),C(t))},onBlur:x}],H=B[0],V=B[1],F=g?Ce:ke,M=S?[Se,Ie]:[],T=M[0],D=M[1],U=function(n,e,t){var r=(n-e)/(t-e);return se(r)?0:100*r}(w,c,l),O=Re(U),q=Re(100-U),K=function(n){return{left:n+"%"}}(U);return L("div",R({style:xe},H,{children:L("div",{ref:h,style:ye,children:[L("div",{style:R({},we,O)}),L("div",{style:R({},F,q)}),L("input",{type:"hidden",step:o,min:c,max:l,value:w,required:!0}),L("div",R({role:"slider",tabIndex:0,"aria-valuenow":w,"aria-valuemin":c,"aria-valuemax":l,"aria-orientation":"horizontal","aria-labelledby":"discrete-slider-custom",style:R({},Ne,T,K)},V,{children:L(me,{is:g||S,circleStyle:T,emberStyle:D})}))]})}))};var Ve=function(){};const Fe=function(n){var e=n.id,t=n.unit,r=void 0===t?"px":t,i=n.step,o=void 0===i?1:i,a=n.min,c=n.max,u=n.styleInput,l=n.caption,s=n.initValue,d=n.inputId,f=n.onChange,h=void 0===f?Ve:f,p=b(null),v=b(),g=b(function(n){var e=(""+n).split(".");return e[1]?-1*e[1].length:0}(o)),_=x((function(n){var e;null==(e=p.current)||e.setValue(n),h(""+n)}),[h]),m=x((function(n){var e,t=function(n,e){return 0!==n?de(parseFloat(""+e),n):e}(g.current,n);t>=a&&t<=c&&(null==(e=v.current)||e.setValue(t),h(""+n))}),[a,c,h]),y=E(),w=y[0],k=y[1];return L("div",{className:dn,children:[L("label",{className:fn,children:[L("span",{children:l}),L("span",{style:hn,children:r}),L(Zn,{id:e,innerRef:p,style:R({},hn,u),initialValue:s,step:o,min:a,max:c,onChange:m,onEnter:k},d)]}),L(Xn,{is:w,children:L(He,{innerRef:v,initialValue:s,step:o,min:a,max:c,onChange:_},"sl-"+d)})]})};const Le=function(n){return x((function(e){(function(n){var e=n.keyCode;return 13===e||32===e})(e)&&(e.preventDefault(),n(e))}),[n])};const Me={BG_GREY:"grey",INPUT_BLUE:"#00bcd4",INPUT_GREY:"#bdbdbd",BLANK:"rgba(0, 0, 0, 0)"};var Te={display:"inline-block"},De=function(n){return L("path",{d:"M 2,5 L 8,14 14,1",stroke:n.stroke,fill:Me.BLANK})},Ue=function(){};const Oe=function(n){var e=n.id,t=n.style,r=n.checkedRestStroke,i=void 0===r?Me.INPUT_BLUE:r,o=n.checkedRestFill,a=void 0===o?Me.INPUT_BLUE:o,c=n.checkedColor,u=void 0===c?Me.BG_GREY:c,l=n.value,s=n.onCheck,d=void 0===s?Ue:s,f=n.onUnCheck,h=void 0===f?Ue:f,p=x((function(){(l?h:d)()}),[l,d,h]),v=Le(p),g=l?[i,a]:[Me.INPUT_GREY,Me.BLANK];return L("div",{id:e,role:"checkbox",tabIndex:0,"aria-checked":l,className:"chb",style:t,onClick:p,onKeyDown:v,children:L("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",viewBox:"0 0 16 16",width:"100%",height:"100%",style:Te,"stroke-width":"2","stroke-linecap":"round",children:[L("rect",{x:"1",y:"1",height:"14",width:"14",rx:"3",stroke:g[0],fill:g[1]}),l?L(De,{stroke:u}):null]})})};var qe={lineHeight:"unset",marginTop:6};const Ke=function(n){var e=n.id,t=n.value,r=n.caption,i=n.onCheck,o=n.onUnCheck,a=x((function(){t?o():i()}),[t,o,i]);return L("div",{className:dn,style:qe,children:[L(Oe,{id:e,value:t,onCheck:i,onUnCheck:o}),r&&L("button",{className:"bt-chb row__caption",tabIndex:-1,onClick:a,children:r})]})};var ze=function(n){return n.caption.toLowerCase().replace(" ","-")},Pe=[{caption:"Horizontal Length",min:-30,max:30,step:1,unit:"px"},{caption:"Vertical Length",min:-30,max:30,step:1,unit:"px"},{caption:"Blur Radius",min:0,max:20,step:1,unit:"px"},{caption:"Spread Radius",min:-10,max:20,step:1,unit:"px"},{styleInput:{width:55},caption:"Opacity",min:0,max:1,step:.01,unit:""}].map((function(n){return R({id:ze(n)},n)})),je=function(n,e,t){return x(n.bind(null,e,t),[])},Ge=function(){};const We=on((function(t){var r=t.id,i=t.isShadow,a=t.isInset,c=t.initValue,u=t.onChange,l=void 0===u?Ge:u,s=b({}),d=x((function(n,e){s.current[n]=e,l(s.current)}),[]),f=x((function(n,e){s.current.color=e.toHexString(),l(s.current)}),[]),p=je(d,"isInset",!0),v=je(d,"isInset",!1);if(function(t,r){var i=h(n++,3);!o.options.__s&&N(i.__H,r)&&(i.__=t,i.u=r,e.__H.__h.push(i))}((function(){s.current=c}),[r,a]),!i)return L("div",{});var g=c.vLength,_=c.gLength,m=c.blurR,y=c.spreadR,w=c.opacity,k=c.color;return L(o.Fragment,{children:[L(Fe,R({},Pe[0],{inputId:r,initValue:_,onChange:function(n){return d("gLength",n)}})),L(Fe,R({},Pe[1],{inputId:r,initValue:g,onChange:function(n){return d("vLength",n)}})),L(Fe,R({},Pe[2],{inputId:r,initValue:m,onChange:function(n){return d("blurR",n)}})),L(Fe,R({},Pe[3],{inputId:r,initValue:y,onChange:function(n){return d("spreadR",n)}})),L(oe,{id:"shadow-color",caption:"Shadow Color",initValue:k,onEnter:f}),L(Fe,R({},Pe[4],{inputId:r,initValue:w,onChange:function(n){return d("opacity",n)}})),L(Ke,{id:"inset",caption:"Inset",value:a,onCheck:p,onUnCheck:v})]})}),(function(n,e){var t=n.isShadow,r=n.id,i=n.isInset;return r===e.id&&i===e.isInset&&t===e.isShadow}));var $e=function(n){return jn(n).toRgb()},Ye=function(n){var e=n.color,t=$e(e);return"rgba("+t.r+", "+t.g+", "+t.b+","},Xe=function(n){var e=n.isInset,t=n.vLength,r=n.gLength,i=n.blurR,o=n.spreadR,a=n.color,c=n.opacity,u=[r+"px",t+"px",i+"px",o+"px"].join(" "),l=e?"inset "+u:u,s=$e(a);return l+" rgba("+s.r+", "+s.g+", "+s.b+", "+c+")"};const Je=function(n){var e=n.title,t=n.id;return L("span",{tabIndex:-1,className:"css-token",onClick:function(){return n=t,void(null==(e=document.getElementById(n))||e.focus());var n,e},children:e})};const Qe=function(n){var e=n.item,t=n.sufix,r=e.isInset,i=e.gLength,a=e.vLength,c=e.blurR,u=e.spreadR,l=e.opacity;return L(o.Fragment,{children:[r&&L(Je,{title:"inset",id:"inset"}),L(Je,{title:i+"px",id:"horizontal-length"}),L(Je,{title:a+"px",id:"vertical-length"}),L(Je,{title:c+"px",id:"blur-radius"}),L(Je,{title:u+"px",id:"spread-radius"}),L(Je,{title:Ye(e),id:"shadow-color"}),L(Je,{title:l+")"+t,id:"opacity"})]})};var Ze="bt-raised";const nt=function(n){var e=n.caption,t=n.onClick;return L("div",{className:"wrapper__bt-raised",children:L("button",{className:Ze,onClick:t,children:L("div",{className:"bt-raised__div",children:L("span",{className:"bt-raised__caption",children:e})})})})};var et={borderBottom:"2px solid green"},tt=function(n){var e=n.boxShadows,t=void 0===e?[]:e,r=n.currentIndex,i=n.onAdd,o=n.onEdit,a=n.onRemove,c=t.length-1;return t.map((function(n,e){return L("div",{children:[L("span",{tabIndex:-1,className:"css-value",style:e===r?et:void 0,onClick:function(){return o(e)},children:L(Qe,{item:n,sufix:e!==c?",":";"})}),L(nt,{caption:"ADD",onClick:function(){return i(e)}}),0!==e&&L(nt,{caption:"REMOVE",onClick:function(){return a(e)}})]},e)}))};const rt=function(n){return L("div",{className:"page-sb__css",children:[L("div",{className:"css-property",children:"BOX-SHADOW:"}),tt(n)]})};const it=function(n){var e=n.boxShadows,t=void 0===e?[]:e,r=n.configStyle,i=void 0===r?{}:r,o=function(n){return{boxShadow:n.map(Xe).join(",")}}(t);return L("div",{className:"page-sb__preview",style:{backgroundColor:i.bgColor},children:L("div",{className:"page-sb__preview__inner",style:R({},{backgroundColor:i.boxColor,borderRadius:i.boxBorderRadius},o)})})};const ot=on((function(n){var e=n.boxShadows,t=n.currentIndex,r=n.configStyle,i=n.onAdd,a=n.onEdit,c=n.onRemove;return L(o.Fragment,{children:[L(it,{boxShadows:e,configStyle:r}),L(rt,{currentIndex:t,boxShadows:e,onAdd:i,onEdit:a,onRemove:c})]})}),(function(n,e){var t=n.boxShadows,r=n.currentIndex,i=n.configStyle;return t===e.boxShadows&&r===e.currentIndex&&i===e.configStyle}));const at=function(n){var e=n.isShadow,t=n.isBox,r=v(rn,Q),i=r[0],o=r[1],a=i.currentIndex,c=i.boxShadows,u=i.configStyle,l=c[a],s=l.id,d=l.isInset,f=x((function(n){return o({type:$,boxShadow:n})}),[]),h=x((function(n,e){return o({type:J,propName:n,value:e})}),[]),p=x((function(n){return o({type:Y,fromIndex:n})}),[]),g=x((function(n){return o({type:W,editIndex:n})}),[]),b=x((function(n){return o({type:X,removeIndex:n})}),[]);return L("div",{className:"page-sb",children:[L("div",{className:"page-sb__inputs",children:[L(le,{isBox:t,configStyle:u,onEnter:h},"input-box"),L(We,{id:s,isShadow:e,isInset:d,initValue:l,onChange:f},"input-shadow")]}),L("div",{className:"page-sb__views",children:L(ot,{currentIndex:a,boxShadows:c,configStyle:u,onAdd:p,onEdit:g,onRemove:b})})]})};const ct=function(){var n=E(!0),e=n[0],t=n[1],r=E(!1),i=r[0],o=r[1];return L("div",{children:[L(j,{onShadow:t,onBox:o}),L(at,{isShadow:e,isBox:i})]})};(0,o.render)(L(ct,{}),document.getElementById("app"))})()})();