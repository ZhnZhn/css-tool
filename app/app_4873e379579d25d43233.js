(()=>{var n={905:(n,e,t)=>{n.exports=t(548)(400)},548:n=>{"use strict";n.exports=lib_vendor}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return n[r](o,o.exports,t),o.exports}(()=>{"use strict";var n,e,r,i=t(905),o=0,a=[],c=i.options.__b,u=i.options.__r,l=i.options.diffed,s=i.options.__c,d=i.options.unmount;function f(n,t){i.options.__h&&i.options.__h(e,n,o||t),o=0;var r=e.__H||(e.__H={__:[],__h:[]});return n>=r.__.length&&r.__.push({}),r.__[n]}function h(n){return o=1,p(S,n)}function p(t,r,i){var o=f(n++,2);return o.t=t,o.__c||(o.__=[i?i(r):S(void 0,r),function(n){var e=o.t(o.__[0],n);o.__[0]!==e&&(o.__=[e,o.__[1]],o.__c.setState({}))}],o.__c=e),o.__}function v(t,r){var o=f(n++,4);!i.options.__s&&C(o.__H,r)&&(o.__=t,o.__H=r,e.__h.push(o))}function g(n){return o=5,_((function(){return{current:n}}),[])}function b(n,e,t){o=6,v((function(){return"function"==typeof n?(n(e()),function(){return n(null)}):n?(n.current=e(),function(){return n.current=null}):void 0}),null==t?t:t.concat(n))}function _(e,t){var r=f(n++,7);return C(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function m(n,e){return o=8,_((function(){return n}),e)}function x(){for(var n;n=a.shift();)if(n.__P)try{n.__H.__h.forEach(w),n.__H.__h.forEach(k),n.__H.__h=[]}catch(e){n.__H.__h=[],i.options.__e(e,n.__v)}}i.options.__b=function(n){e=null,c&&c(n)},i.options.__r=function(t){u&&u(t),n=0;var r=(e=t.__c).__H;r&&(r.__h.forEach(w),r.__h.forEach(k),r.__h=[])},i.options.diffed=function(n){l&&l(n);var t=n.__c;t&&t.__H&&t.__H.__h.length&&(1!==a.push(t)&&r===i.options.requestAnimationFrame||((r=i.options.requestAnimationFrame)||function(n){var e,t=function(){clearTimeout(r),y&&cancelAnimationFrame(e),setTimeout(n)},r=setTimeout(t,100);y&&(e=requestAnimationFrame(t))})(x)),e=null},i.options.__c=function(n,e){e.some((function(n){try{n.__h.forEach(w),n.__h=n.__h.filter((function(n){return!n.__||k(n)}))}catch(t){e.some((function(n){n.__h&&(n.__h=[])})),e=[],i.options.__e(t,n.__v)}})),s&&s(n,e)},i.options.unmount=function(n){d&&d(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach((function(n){try{w(n)}catch(n){e=n}})),e&&i.options.__e(e,t.__v))};var y="function"==typeof requestAnimationFrame;function w(n){var t=e,r=n.__c;"function"==typeof r&&(n.__c=void 0,r()),e=t}function k(n){var t=e;n.__c=n.__(),e=t}function C(n,e){return!n||n.length!==e.length||e.some((function(e,t){return e!==n[t]}))}function S(n,e){return"function"==typeof e?e(n):e}function N(n){return n.current}const I=function(n){var e=h((function(){return!!n})),t=e[0],r=e[1],i=m((function(){return r((function(n){return!n}))}),[]);return[t,i]};function E(){return E=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},E.apply(this,arguments)}var R=document&&"ontouchstart"in document.documentElement,A=Array.isArray,B=function(n){return A(n)?n[0]?n[1]:"":n||""};const H=function(){var n=B(arguments.length<=0?void 0:arguments[0]),e=B(arguments.length<=1?void 0:arguments[1]);return n?e?n+" "+e:n:e||void 0};var V=0;function F(n,e,t,r,o){var a,c,u={};for(c in e)"ref"==c?a=e[c]:u[c]=e[c];var l={type:n,props:u,key:t,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--V,__source:o,__self:r};if("function"==typeof n&&(a=n.defaultProps))for(c in a)void 0===u[c]&&(u[c]=a[c]);return i.options.vnode&&i.options.vnode(l),l}var L={textDecoration:"underline"},M=function(n){var e=n.caption,t=function(n,e){return e?n.toLowerCase().indexOf(e):-1}(e,n.hotKey);if(-1===t)return F(i.Fragment,{children:e});var r=e.slice(0,t),o=e.slice(t,t+1),a=e.slice(t+1);return F(i.Fragment,{children:[F("span",{children:r}),F("span",{style:L,children:o}),F("span",{children:a})]})};const T=function(n){var e=n.className,t=n.caption,r=n.hotKey,i=n.children;return t?F("span",{className:e,children:[F(M,{caption:t,hotKey:r}),i]}):null};var D={color:"#607d8b"};const U=function(n){var e=n.className,t=n.style,r=n.clDiv,i=void 0===r?"bt-flat__div":r,o=n.isPrimary,a=n.title,c=void 0===a?"":a,u=n.caption,l=n.accessKey,s=n.timeout,d=void 0===s?3e3:s,f=n.onClick,h=n.children,p=g(null),v=g(0),b=m((function(n){if(0!==d){var e=v.current,t=n.timeStamp;e&&t-e>d&&f(n),v.current=t}else f(n)}),[d,f]),_=o?E({},t,D):t,x=H("bt-flat",e),y=R?void 0:l;return F("button",{ref:p,className:x,style:_,accessKey:y,tabIndex:0,title:y?c+" ["+l+"]":c,onClick:b,children:F("div",{className:i,children:[F(T,{className:"bt-flat__span",caption:u,hotKey:y}),h]})})};const O=function(n){var e=n.className,t=n.title;return F("span",{className:e,title:t,children:F("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2","stroke-width":"2",children:[F("title",{children:t}),F("rect",{ry:"1.8825414",rx:"194.14471",y:"1.434558",x:"19.176462",height:"12.460618",width:"10.85316",fill:"#8ecc2d",stroke:"#8ecc2d"}),F("rect",{ry:"1.87537",rx:"204.478",y:"16.639841",x:"8.8410215",height:"13.752699",width:"18.307165",fill:"#232f3b",stroke:"#232f3b"}),F("rect",{ry:"1.87537",rx:"204.478",y:"3.4229634",x:"2.5897937",height:"10.894996",width:"10.001963",fill:"#a487d4",stroke:"#a487d4"})]})})};const q=function(n){return F("span",{className:n.className,style:n.style,children:n.caption})};const K=function(n){return F("a",{className:n.className,title:n.title,href:n.href,children:F("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"1.414",children:[F("title",{children:"GitHub Logo"}),F("path",{d:"M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"})]})})};var z="CSS Tool v0.2.0";const P=function(n){var e=n.onShadow,t=n.onBox;return F("div",{className:"header",children:[F(O,{className:"header__icon-app",title:z}),F("div",{className:"header__icon-gap"}),F(q,{className:"header__label-app",caption:z}),F(U,{caption:"Box",title:"Click to toggle css box inputs",accessKey:"b",timeout:0,onClick:t}),F(U,{caption:"Shadow",title:"Click to toggle css shadow-box inputs",accessKey:"h",timeout:0,onClick:e}),F(K,{className:"header__github-link",title:"GitHub Repository",href:"https://github.com/zhnzhn/css-tool/"})]})};const j=function(n){return void 0===n&&(n=""),Math.random().toString(36).slice(2,11).toUpperCase()+n};var G="SET_CURRENT_SHADOW",W="UPDATE_SHADOWS",$="ADD_SHADOW",Y="REMOVE_SHADOW",X="UPDATE_CONFIG",J={currentIndex:0,boxShadows:[{isInset:!1,gLength:10,vLength:10,blurR:5,spreadR:0,color:"#000000",opacity:.75,id:j()}],configStyle:{bgColor:"gray",boxColor:"#e7a61a",boxBorderRadius:"0px"}};const Q={insert:function(n,e,t){return void 0===n&&(n=[]),[].concat(n.slice(0,e),[t],n.slice(e))},update:function(n,e,t){return void 0===n&&(n=[]),n[e]=t,[].concat(n)},remove:function(n,e){return void 0===n&&(n=[]),[].concat(n.slice(0,e),n.slice(e+1))}};const Z={create:function(n){return E({},n)},update:function(n,e,t){return n[e]=t,E({},n)}};var nn=function(n){return"number"==typeof n};const en=function(n,e){switch(e.type){case G:var t=e.editIndex;return nn(t)?E({},n,{currentIndex:t}):n;case W:var r=e.boxShadow;if(!r)return n;var i=n.boxShadows,o=n.currentIndex;return E({},n,{boxShadows:Q.update(i,o,r)});case $:var a=e.fromIndex;if(!nn(a))return n;var c=n.boxShadows,u=n.currentIndex,l=Z.create(c[a]),s=u+1;return l.id=j(""+s),E({},n,{currentIndex:s,boxShadows:Q.insert(c,s,l)});case Y:var d=e.removeIndex;if(!nn(d)||0===d)return n;var f=n.boxShadows;return E({},n,{currentIndex:d-1,boxShadows:Q.remove(f,d)});case X:var h=e.propName,p=e.value;if("string"!=typeof h)return n;var v=n.configStyle;return E({},n,{configStyle:Z.update(v,h,p)});default:throw new Error("Unsupported action type: "+e.type)}};function tn(n,e){function t(n){var t=this.props.ref,r=t==n.ref;return!r&&t&&(t.call?t(null):t.current=null),e?!e(this.props,n)||!r:function(n,e){for(var t in n)if("__source"!==t&&!(t in e))return!0;for(var r in e)if("__source"!==r&&n[r]!==e[r])return!0;return!1}(this.props,n)}function r(e){return this.shouldComponentUpdate=t,(0,i.createElement)(n,function(n,e){for(var t in e)n[t]=e[t];return n}({},e))}return r.prototype.isReactComponent=!0,r.displayName="Memo("+(n.displayName||n.name)+")",r._forwarded=!0,r}var rn="input-text box-shadow",on=function(){},an=function(n){return[n,!0]};function cn(n,e){void 0===e&&(e=an);var t=n.innerRef,r=n.id,i=n.initialValue,o=n.onEnter,a=void 0===o?on:o,c=n.onChange,u=void 0===c?on:c,l=g(r||j()),s=h((function(){return{value:i}})),d=s[0].value,f=s[1],p=m((function(n){return f({value:n})}),[]),v=m((function(n){13===n.keyCode&&a(n.currentTarget.value)}),[a]),_=m((function(n){var t=n.currentTarget.value,r=e(t),i=r[0],o=r[1];p(i),o&&u(i)}),[e,u]);return b(t,(function(){return{setValue:function(n){var t=e(n),r=t[0];t[1]&&p(r)}}}),[e]),[l.current,d,v,_]}const un=function(n){var e=n.style,t=cn(n),r=t[0],i=t[1],o=t[2],a=t[3];return F("input",{type:"text",id:r,className:rn,style:e,value:i,autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",translate:"no",maxLength:25,onInput:a,onKeyDown:o})};var ln="row",sn="row__caption",dn={float:"right"},fn={float:"right",marginRight:16},hn={float:"right",width:80};const pn=function(n){var e=n.styleInput,t=n.caption,r=n.initValue,i=n.onEnter;return F("div",{className:ln,children:F("label",{className:sn,children:[F("span",{children:t}),F(un,{style:E({},hn,e),initialValue:r,onEnter:i})]})})};var vn="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",gn="[\\s|\\(]+("+vn+")[,|\\s]+("+vn+")[,|\\s]+("+vn+")\\s*\\)?",bn="[\\s|\\(]+("+vn+")[,|\\s]+("+vn+")[,|\\s]+("+vn+")[,|\\s]+("+vn+")\\s*\\)?";const _n={CSS_UNIT:new RegExp(vn),rgb:new RegExp("rgb"+gn),rgba:new RegExp("rgba"+bn),hsl:new RegExp("hsl"+gn),hsla:new RegExp("hsla"+bn),hsv:new RegExp("hsv"+gn),hsva:new RegExp("hsva"+bn),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};const mn={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};var xn=Math.min,yn=Math.max,wn=Math.round,kn=Math.abs;function Cn(n){return parseInt(n,16)}function Sn(n){return Cn(n)/255}function Nn(n,e){(function(n){return"string"==typeof n&&-1!=n.indexOf(".")&&1===parseFloat(n)})(n)&&(n="100%");var t=function(n){return"string"==typeof n&&-1!=n.indexOf("%")}(n);return n=xn(e,yn(0,parseFloat(n))),t&&(n=parseInt(""+n*e,10)/100),kn(n-e)<1e-6?1:n%e/parseFloat(e)}function In(n){return function(n){return 1==n.length?"0"+n:n}(wn(n).toString(16))}var En=/^\s+/,Rn=/\s+$/;function An(n){return!!_n.CSS_UNIT.exec(n)}function Bn(n){return n<=1&&(n=100*n+"%"),n}var Hn=Math.max,Vn=Math.min,Fn=Math.round;var Ln=Math.min,Mn=Math.max,Tn=Object.prototype.hasOwnProperty;const Dn=function(n){var e={r:0,g:0,b:0},t=1,r=null,i=null,o=null,a=!1,c=!1;return"string"==typeof n&&(n=function(n){n=n.replace(En,"").replace(Rn,"").toLowerCase();var e,t=!1;if(mn[n])n=mn[n],t=!0;else if("transparent"==n)return{r:0,g:0,b:0,a:0,format:"name"};return(e=_n.rgb.exec(n))?{r:e[1],g:e[2],b:e[3]}:(e=_n.rgba.exec(n))?{r:e[1],g:e[2],b:e[3],a:e[4]}:(e=_n.hsl.exec(n))?{h:e[1],s:e[2],l:e[3]}:(e=_n.hsla.exec(n))?{h:e[1],s:e[2],l:e[3],a:e[4]}:(e=_n.hsv.exec(n))?{h:e[1],s:e[2],v:e[3]}:(e=_n.hsva.exec(n))?{h:e[1],s:e[2],v:e[3],a:e[4]}:(e=_n.hex8.exec(n))?{r:Cn(e[1]),g:Cn(e[2]),b:Cn(e[3]),a:Sn(e[4]),format:t?"name":"hex8"}:(e=_n.hex6.exec(n))?{r:Cn(e[1]),g:Cn(e[2]),b:Cn(e[3]),format:t?"name":"hex"}:(e=_n.hex4.exec(n))?{r:Cn(e[1]+""+e[1]),g:Cn(e[2]+""+e[2]),b:Cn(e[3]+""+e[3]),a:Sn(e[4]+""+e[4]),format:t?"name":"hex8"}:!!(e=_n.hex3.exec(n))&&{r:Cn(e[1]+""+e[1]),g:Cn(e[2]+""+e[2]),b:Cn(e[3]+""+e[3]),format:t?"name":"hex"}}(n)),"object"==typeof n&&(!function(n){return An(n.r)&&An(n.g)&&An(n.b)}(n)?function(n){return An(n.h)&&An(n.s)}(n)&&(An(n.v)?(r=Bn(n.s),i=Bn(n.v),e=function(n,e,t){n=6*Nn(n,360),e=Nn(e,100),t=Nn(t,100);var r=Math.floor(n),i=n-r,o=t*(1-e),a=t*(1-i*e),c=t*(1-(1-i)*e),u=r%6;return{r:255*[t,a,o,o,c,t][u],g:255*[c,t,t,a,o,o][u],b:255*[o,o,c,t,t,a][u]}}(n.h,r,i),a=!0,c="hsv"):An(n.l)&&(r=Bn(n.s),o=Bn(n.l),e=function(n,e,t){var r,i,o;function a(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+(e-n)*(2/3-t)*6:n}if(n=Nn(n,360),e=Nn(e,100),t=Nn(t,100),0===e)r=i=o=t;else{var c=t<.5?t*(1+e):t+e-t*e,u=2*t-c;r=a(u,c,n+1/3),i=a(u,c,n),o=a(u,c,n-1/3)}return{r:255*r,g:255*i,b:255*o}}(n.h,r,o),a=!0,c="hsl")):(e=function(n,e,t){return{r:255*Nn(n,255),g:255*Nn(e,255),b:255*Nn(t,255)}}(n.r,n.g,n.b),a=!0,c="%"===String(n.r).slice(-1)?"prgb":"rgb"),Tn.call(n,"a")&&(t=n.a)),t=function(n){return n=parseFloat(n),(isNaN(n)||n<0||n>1)&&(n=1),n}(t),{ok:a,format:n.format||c,r:Ln(255,Mn(e.r,0)),g:Ln(255,Mn(e.g,0)),b:Ln(255,Mn(e.b,0)),a:t}};var Un=Math.round,On=0,qn=function(n){return n<1?Un(n):n};function Kn(n,e){e=e||{};var t=Dn(n=n||"");this._originalInput=n,this._r=qn(t.r),this._g=qn(t.g),this._b=qn(t.b),this._a=t.a,this._roundA=Un(100*this._a)/100,this._format=e.format||t.format,this._gradientType=e.gradientType,this._ok=t.ok,this._tc_id=On++}Kn.prototype={isValid:function(){return this._ok},toRgb:function(){return{r:Un(this._r),g:Un(this._g),b:Un(this._b),a:this._a}},toHex:function(n){return function(n,e,t,r){var i=[In(n),In(e),In(t)];return r&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}(this._r,this._g,this._b,n)},toHexString:function(n){return"#"+this.toHex(n)},toHsl:function(){var n=function(n,e,t){n=Nn(n,255),e=Nn(e,255),t=Nn(t,255);var r,i,o=Hn(n,e,t),a=Vn(n,e,t),c=(o+a)/2;if(o==a)r=i=0;else{var u=o-a;switch(i=c>.5?u/(2-o-a):u/(o+a),o){case n:r=(e-t)/u+(e<t?6:0);break;case e:r=(t-n)/u+2;break;case t:r=(n-e)/u+4}r/=6}return{h:Fn(360*r),s:Fn(100*i),l:Fn(100*c)}}(this._r,this._g,this._b);return{h:n.h,s:n.s,l:n.l,a:this._a}}};const zn=function(n,e){return new Kn(n,e)};const Pn=function(n){var e=g();return void 0===e.current&&(e.current=n()),e};const jn=function(n){var e=n.style,t=n.value,r=n.onClick;return F("button",{className:"box-color box-shadow",style:E({},e,t?{backgroundColor:t}:null),onClick:r})};var Gn={display:"block"},Wn={display:"none"};const $n=function(n){var e=n.is,t=n.style,r=n.children;return F("div",{style:E({},t,e?Gn:Wn),children:r})};var Yn=Number.isNaN||isNaN;const Xn=function(n,e,t){if(""===n||"-"===n)return[n,!1];var r=parseFloat(""+n);return[Yn(r)?e:r>t?t:r<e?e:r,!0]};const Jn=function(n){var e=n.style,t=n.step,r=void 0===t?1:t,i=n.min,o=n.max,a=m((function(n){return Xn(n,i,o)}),[i,o]),c=cn(n,a),u=c[0],l=c[1],s=c[2],d=c[3];return F("input",{type:"number",id:u,className:rn,style:e,value:l,min:i,max:o,step:r,onInput:d,onKeyDown:s})};var Qn={paddingTop:12,paddingBottom:12,borderBottom:"1px solid rgba(0, 0, 0, 0.2)"},Zn={color:"rgba(0, 0, 0, 0.5)",paddingRight:14},ne={width:50},ee=function(){},te=function(n,e,t,r){return function(i){var o=N(e);if(o){o[n]=i;var a=zn(o);if(a&&a.isValid()){var c=a.toHexString();t(c,a),r(c)}}}};const re=function(n){var e=n.id,t=n.styleInput,r=n.caption,i=n.inputId,o=n.initValue,a=n.onEnter,c=void 0===a?ee:a,u=g(null),l=g(null),s=g(null),d=g(null),f=Pn((function(){return zn(o).toHsl()})),p=I(),v=p[0],b=p[1],m=h(o),x=m[0],y=m[1],w=_((function(){return function(n){var e=zn(n);if(e&&e.isValid()){var t,r,i,o=e.toHsl();null==(t=N(l))||t.setValue(o.h),null==(r=N(s))||r.setValue(o.s),null==(i=N(d))||i.setValue(o.l),f.current=o,c(n,e),y(e.toHexString())}}}),[c]),k=_((function(){return[te("h",f,c,y),te("s",f,c,y),te("l",f,c,y)]}),[c]),C=k[0],S=k[1],R=k[2],A=_((function(){return function(){var n;null==(n=u.current)||n.setValue(x)}}),[x]),B=_((function(){return f.current}),[]),H=B.h,V=B.s,L=B.l;return F("div",{className:ln,children:[F("label",{className:sn,children:[F("span",{children:r}),F(un,{innerRef:u,id:e,style:E({},hn,t),initialValue:x,onEnter:w},i),F(jn,{style:fn,value:x,onClick:b})]}),F($n,{is:v,children:F("div",{style:Qn,children:[F("span",{style:Zn,children:"HSL"}),F(Jn,{innerRef:l,style:ne,initialValue:H,min:0,max:360,onChange:C,onEnter:A}),F(Jn,{innerRef:s,style:ne,initialValue:V,min:0,max:100,onChange:S,onEnter:A}),F(Jn,{innerRef:d,style:ne,initialValue:L,min:0,max:100,onChange:R,onEnter:A})]})})]})};var ie={marginBottom:32},oe={color:"brown"},ae=function(){};const ce=tn((function(n){var e=n.isBox,t=n.configStyle,r=n.onEnter,i=void 0===r?ae:r,o=m((function(n,e){i(n,e)}),[]);if(!e)return F("div",{});var a=t.bgColor,c=t.boxColor,u=t.boxBorderRadius;return F("div",{style:ie,children:[F(re,{styleInput:oe,caption:"Background",initValue:a,onEnter:function(n){return o("bgColor",n)}}),F(re,{styleInput:oe,caption:"Box Background",initValue:c,onEnter:function(n){return o("boxColor",n)}}),F(pn,{styleInput:oe,caption:"Box Border Radius",initValue:u,onEnter:function(n){return o("boxBorderRadius",n)}})]})}),(function(n,e){var t=n.isBox,r=n.configStyle;return t===e.isBox&&r===e.configStyle}));var ue=Number.isNaN||isNaN,le=function(n,e){if(null===e)return NaN;if(n=+n,e=+e,isNaN(n)||"number"!=typeof e||e%1!=0)return NaN;var t=n.toString().split("e");return+((t=(n=Math.round(+(t[0]+"e"+(t[1]?+t[1]-e:-e)))).toString().split("e"))[0]+"e"+(t[1]?+t[1]+e:e))};const se=function(n){var e=h((function(){return!!n})),t=e[0],r=e[1],i=_((function(){return[function(){return r(!0)},function(){return r(!1)}]}),[]);return[t,i[0],i[1]]};var de=R?["touchmove","touchend"]:["mousemove","mouseup"],fe=de[0],he=de[1];const pe=function(n){var e=se(!1),t=e[0],r=e[1],i=e[2],o=g(!1),a=function(e){N(o)||(o.current=!0,requestAnimationFrame((function(){o.current=!1,n(e)})))},c=function n(){document.removeEventListener(fe,a),document.removeEventListener(he,n),i()};return[t,function(n){R||n.preventDefault(),document.addEventListener(fe,a),document.addEventListener(he,c),r()}]};var ve={position:"absolute",top:0,left:0,width:12,height:12,overflow:"visible"},ge={position:"absolute",top:-12,left:-12,width:"300%",height:36,borderRadius:"50%",backgroundColor:"rgba(0, 188, 212, 0.16)"};const be=function(n){var e=n.is,t=n.circleStyle,r=n.emberStyle;return F("div",{style:E({},ve,t),children:e?F("div",{style:E({},ge,r)}):null})};var _e={position:"relative",width:"100%",height:18,margin:"8px 0",userSelect:"none",cursor:"default"},me={position:"absolute",top:8,left:0,width:"100%",height:2},xe={position:"absolute",left:0,width:"calc(15%)",height:"100%",marginRight:6,backgroundColor:"#00bcd4",transition:"margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms"},ye={position:"absolute",right:0,width:"calc(85%)",height:"100%",marginLeft:6,backgroundColor:"#bdbdbd",transition:"margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms"},we=E({},ye,{backgroundColor:"#9e9e9e"}),ke={boxSizing:"border-box",zIndex:"1",position:"absolute",top:0,left:"15%",width:12,height:12,cursor:"pointer",pointerEvents:"inherit",margin:"1px 0px 0px",backgroundColor:"#00bcd4",backgroundClip:"padding-box",border:"0px solid transparent",borderRadius:"50%",transform:"translate(-50%, -50%)",overflow:"visible",outline:"none",transition:"background 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms"},Ce={width:20,height:20},Se={top:-12,left:-12,width:"220%",height:44,border:"1px solid #4caf50"},Ne=function(n){},Ie=function(n){return{width:"calc("+n+"%)"}},Ee=R?function(n){return(((n||{}).touches||[])[0]||{}).clientX||0}:function(n){return n.clientX},Re=function(n){return"number"==typeof n&&n-n==0};const Ae=function(n){var e=n.innerRef,t=n.initialValue,r=void 0===t?4:t,i=n.step,o=void 0===i?1:i,a=n.min,c=void 0===a?0:a,u=n.max,l=void 0===u?20:u,s=n.onChange,d=void 0===s?Ne:s,f=Pn((function(){var n=(""+o).split(".");return n[1]?-1*n[1].length:0})),p=g(null),v=se(!1),_=v[0],m=v[1],x=v[2],y=h(r),w=y[0],k=y[1],C=function(n){var e=function(n,e,t){return t>e?e:t<n?n:t}(c,l,n);k(e),d(e)},S=pe((function(n){var e,t,r=null==(e=N(p))?void 0:e.clientWidth,i=function(n){var e,t=null==(e=N(p))?void 0:e.getBoundingClientRect().left;return Ee(n)-t}(n);Re(r)&&Re(i)&&(i<0?i=0:i>r&&(i=r),t=i/r*(l-c),t=Math.round(t/o)*o+c,t=le(t,N(f)),C(t))})),I=S[0],A=S[1];b(e,(function(){return{setValue:k}}),[]);var B=R?[{onTouchStart:A},void 0]:[{onMouseDown:A,onMouseEnter:m,onMouseLeave:x},{onFocus:m,onKeyDown:function(n){var e=n.keyCode,t=function(n,e,t){return function(n){return 39===n||38===n}(t)?n+e:function(n){return 37===n||40===n}(t)?n-e:void 0}(w,o,e);null!=t&&(n.preventDefault(),C(t))},onBlur:x}],H=B[0],V=B[1],L=_?we:ye,M=I?[Ce,Se]:[],T=M[0],D=M[1],U=function(n,e,t){var r=(n-e)/(t-e);return ue(r)?0:100*r}(w,c,l),O=Ie(U),q=Ie(100-U),K=function(n){return{left:n+"%"}}(U);return F("div",E({style:_e},H,{children:F("div",{ref:p,style:me,children:[F("div",{style:E({},xe,O)}),F("div",{style:E({},L,q)}),F("input",{type:"hidden",step:o,min:c,max:l,value:w,required:!0}),F("div",E({role:"slider",tabIndex:0,"aria-valuenow":w,"aria-valuemin":c,"aria-valuemax":l,"aria-orientation":"horizontal","aria-labelledby":"discrete-slider-custom",style:E({},ke,T,K)},V,{children:F(be,{is:_||I,circleStyle:T,emberStyle:D})}))]})}))};var Be=function(){};const He=function(n){var e=n.id,t=n.unit,r=void 0===t?"px":t,i=n.step,o=void 0===i?1:i,a=n.min,c=n.max,u=n.styleInput,l=n.caption,s=n.initValue,d=n.inputId,f=n.onChange,h=void 0===f?Be:f,p=g(null),v=g(),b=g(function(n){var e=(""+n).split(".");return e[1]?-1*e[1].length:0}(o)),_=m((function(n){var e;null==(e=p.current)||e.setValue(n),h(""+n)}),[h]),x=m((function(n){var e,t=function(n,e){return 0!==n?le(parseFloat(""+e),n):e}(b.current,n);t>=a&&t<=c&&(null==(e=v.current)||e.setValue(t),h(""+n))}),[a,c,h]),y=I(),w=y[0],k=y[1];return F("div",{className:ln,children:[F("label",{className:sn,children:[F("span",{children:l}),F("span",{style:dn,children:r}),F(Jn,{id:e,innerRef:p,style:E({},dn,u),initialValue:s,step:o,min:a,max:c,onChange:x,onEnter:k},d)]}),F($n,{is:w,children:F(Ae,{innerRef:v,initialValue:s,step:o,min:a,max:c,onChange:_},"sl-"+d)})]})};const Ve=function(n){return m((function(e){(function(n){var e=n.keyCode;return 13===e||32===e})(e)&&(e.preventDefault(),n(e))}),[n])};const Fe={BG_GREY:"grey",INPUT_BLUE:"#00bcd4",INPUT_GREY:"#bdbdbd",BLANK:"rgba(0, 0, 0, 0)"};var Le={display:"inline-block"},Me=function(n){return F("path",{d:"M 2,5 L 8,14 14,1",stroke:n.stroke,fill:Fe.BLANK})},Te=function(){};const De=function(n){var e=n.id,t=n.style,r=n.checkedRestStroke,i=void 0===r?Fe.INPUT_BLUE:r,o=n.checkedRestFill,a=void 0===o?Fe.INPUT_BLUE:o,c=n.checkedColor,u=void 0===c?Fe.BG_GREY:c,l=n.value,s=n.onCheck,d=void 0===s?Te:s,f=n.onUnCheck,h=void 0===f?Te:f,p=m((function(){(l?h:d)()}),[l,d,h]),v=Ve(p),g=l?[i,a]:[Fe.INPUT_GREY,Fe.BLANK];return F("div",{id:e,role:"checkbox",tabIndex:0,"aria-checked":l,className:"chb",style:t,onClick:p,onKeyDown:v,children:F("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",viewBox:"0 0 16 16",width:"100%",height:"100%",style:Le,"stroke-width":"2","stroke-linecap":"round",children:[F("rect",{x:"1",y:"1",height:"14",width:"14",rx:"3",stroke:g[0],fill:g[1]}),l?F(Me,{stroke:u}):null]})})};var Ue={lineHeight:"unset",marginTop:6};const Oe=function(n){var e=n.id,t=n.value,r=n.caption,i=n.onCheck,o=n.onUnCheck,a=m((function(){t?o():i()}),[t,o,i]);return F("div",{className:ln,style:Ue,children:[F(De,{id:e,value:t,onCheck:i,onUnCheck:o}),r&&F("button",{className:"bt-chb row__caption",tabIndex:-1,onClick:a,children:r})]})};var qe=function(n){return n.caption.toLowerCase().replace(" ","-")},Ke=[{caption:"Horizontal Length",min:-30,max:30,step:1,unit:"px"},{caption:"Vertical Length",min:-30,max:30,step:1,unit:"px"},{caption:"Blur Radius",min:0,max:20,step:1,unit:"px"},{caption:"Spread Radius",min:-10,max:20,step:1,unit:"px"},{styleInput:{width:55},caption:"Opacity",min:0,max:1,step:.01,unit:""}].map((function(n){return E({id:qe(n)},n)})),ze=function(n,e,t){return m(n.bind(null,e,t),[])},Pe=function(){};const je=tn((function(t){var r=t.id,o=t.isShadow,a=t.isInset,c=t.initValue,u=t.onChange,l=void 0===u?Pe:u,s=g({}),d=m((function(n,e){s.current[n]=e,l(s.current)}),[]),h=m((function(n,e){s.current.color=e.toHexString(),l(s.current)}),[]),p=ze(d,"isInset",!0),v=ze(d,"isInset",!1);if(function(t,r){var o=f(n++,3);!i.options.__s&&C(o.__H,r)&&(o.__=t,o.__H=r,e.__H.__h.push(o))}((function(){s.current=c}),[r,a]),!o)return F("div",{});var b=c.vLength,_=c.gLength,x=c.blurR,y=c.spreadR,w=c.opacity,k=c.color;return F(i.Fragment,{children:[F(He,E({},Ke[0],{inputId:r,initValue:_,onChange:function(n){return d("gLength",n)}})),F(He,E({},Ke[1],{inputId:r,initValue:b,onChange:function(n){return d("vLength",n)}})),F(He,E({},Ke[2],{inputId:r,initValue:x,onChange:function(n){return d("blurR",n)}})),F(He,E({},Ke[3],{inputId:r,initValue:y,onChange:function(n){return d("spreadR",n)}})),F(re,{id:"shadow-color",caption:"Shadow Color",initValue:k,onEnter:h}),F(He,E({},Ke[4],{inputId:r,initValue:w,onChange:function(n){return d("opacity",n)}})),F(Oe,{id:"inset",caption:"Inset",value:a,onCheck:p,onUnCheck:v})]})}),(function(n,e){var t=n.isShadow,r=n.id,i=n.isInset;return r===e.id&&i===e.isInset&&t===e.isShadow}));var Ge=function(n){return zn(n).toRgb()},We=function(n){var e=n.color,t=Ge(e);return"rgba("+t.r+", "+t.g+", "+t.b+","},$e=function(n){var e=n.isInset,t=n.vLength,r=n.gLength,i=n.blurR,o=n.spreadR,a=n.color,c=n.opacity,u=[r+"px",t+"px",i+"px",o+"px"].join(" "),l=e?"inset "+u:u,s=Ge(a);return l+" rgba("+s.r+", "+s.g+", "+s.b+", "+c+")"};const Ye=function(n){var e=n.title,t=n.id;return F("span",{tabIndex:-1,className:"css-token",onClick:function(){return n=t,void(null==(e=document.getElementById(n))||e.focus());var n,e},children:e})};const Xe=function(n){var e=n.item,t=n.sufix,r=e.isInset,o=e.gLength,a=e.vLength,c=e.blurR,u=e.spreadR,l=e.opacity;return F(i.Fragment,{children:[r&&F(Ye,{title:"inset",id:"inset"}),F(Ye,{title:o+"px",id:"horizontal-length"}),F(Ye,{title:a+"px",id:"vertical-length"}),F(Ye,{title:c+"px",id:"blur-radius"}),F(Ye,{title:u+"px",id:"spread-radius"}),F(Ye,{title:We(e),id:"shadow-color"}),F(Ye,{title:l+")"+t,id:"opacity"})]})};var Je="bt-raised";const Qe=function(n){var e=n.caption,t=n.onClick;return F("div",{className:"wrapper__bt-raised",children:F("button",{className:Je,onClick:t,children:F("div",{className:"bt-raised__div",children:F("span",{className:"bt-raised__caption",children:e})})})})};var Ze={borderBottom:"2px solid green"},nt=function(n){var e=n.boxShadows,t=void 0===e?[]:e,r=n.currentIndex,i=n.onAdd,o=n.onEdit,a=n.onRemove,c=t.length-1;return t.map((function(n,e){return F("div",{children:[F("span",{tabIndex:-1,className:"css-value",style:e===r?Ze:void 0,onClick:function(){return o(e)},children:F(Xe,{item:n,sufix:e!==c?",":";"})}),F(Qe,{caption:"ADD",onClick:function(){return i(e)}}),0!==e&&F(Qe,{caption:"REMOVE",onClick:function(){return a(e)}})]},e)}))};const et=function(n){return F("div",{className:"page-sb__css",children:[F("div",{className:"css-property",children:"BOX-SHADOW:"}),nt(n)]})};const tt=function(n){var e=n.boxShadows,t=void 0===e?[]:e,r=n.configStyle,i=void 0===r?{}:r,o=function(n){return{boxShadow:n.map($e).join(",")}}(t);return F("div",{className:"page-sb__preview",style:{backgroundColor:i.bgColor},children:F("div",{className:"page-sb__preview__inner",style:E({},{backgroundColor:i.boxColor,borderRadius:i.boxBorderRadius},o)})})};const rt=tn((function(n){var e=n.boxShadows,t=n.currentIndex,r=n.configStyle,o=n.onAdd,a=n.onEdit,c=n.onRemove;return F(i.Fragment,{children:[F(tt,{boxShadows:e,configStyle:r}),F(et,{currentIndex:t,boxShadows:e,onAdd:o,onEdit:a,onRemove:c})]})}),(function(n,e){var t=n.boxShadows,r=n.currentIndex,i=n.configStyle;return t===e.boxShadows&&r===e.currentIndex&&i===e.configStyle}));const it=function(n){var e=n.isShadow,t=n.isBox,r=p(en,J),i=r[0],o=r[1],a=i.currentIndex,c=i.boxShadows,u=i.configStyle,l=c[a],s=l.id,d=l.isInset,f=m((function(n){return o({type:W,boxShadow:n})}),[]),h=m((function(n,e){return o({type:X,propName:n,value:e})}),[]),v=m((function(n){return o({type:$,fromIndex:n})}),[]),g=m((function(n){return o({type:G,editIndex:n})}),[]),b=m((function(n){return o({type:Y,removeIndex:n})}),[]);return F("div",{className:"page-sb",children:[F("div",{className:"page-sb__inputs",children:[F(ce,{isBox:t,configStyle:u,onEnter:h},"input-box"),F(je,{id:s,isShadow:e,isInset:d,initValue:l,onChange:f},"input-shadow")]}),F("div",{className:"page-sb__views",children:F(rt,{currentIndex:a,boxShadows:c,configStyle:u,onAdd:v,onEdit:g,onRemove:b})})]})};const ot=function(){var n=I(!0),e=n[0],t=n[1],r=I(!1),i=r[0],o=r[1];return F("div",{children:[F(P,{onShadow:t,onBox:o}),F(it,{isShadow:e,isBox:i})]})};(0,i.render)(F(ot,{}),document.getElementById("app"))})()})();