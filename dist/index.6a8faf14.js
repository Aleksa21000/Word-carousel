!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},r=t.parcelRequirec966;function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}null==r&&((r=function(t){if(t in e)return e[t].exports;if(t in n){var r=n[t];delete n[t];var i={id:t,exports:{}};return e[t]=i,r.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){n[t]=e},t.parcelRequirec966=r);function o(t,e){t.style.webkitTransform=e,t.style.msTransform=e,t.style.transform=e}function u(t,e,n){return(1-n)*t+n*e}r.register("cFZ9T",(function(t,e){r("ysC4v"),t.exports=r("5hevL").parseFloat})),r.register("ysC4v",(function(t,e){var n=r("3JwMu"),i=r("lcDkg");n(n.G+n.F*(parseFloat!=i),{parseFloat:i})})),r.register("3JwMu",(function(t,e){var n=r("7BN1o"),i=r("5hevL"),o=r("3ywqz"),u=r("eRARK"),c=r("cJkpZ"),s=function(t,e,r){var a,f,l,h=t&s.F,p=t&s.G,d=t&s.S,g=t&s.P,v=t&s.B,y=t&s.W,w=p?i:i[e]||(i[e]={}),m=w.prototype,x=p?n:d?n[e]:(n[e]||{}).prototype;for(a in p&&(r=e),r)(f=!h&&x&&void 0!==x[a])&&c(w,a)||(l=f?x[a]:r[a],w[a]=p&&"function"!=typeof x[a]?r[a]:v&&f?o(l,n):y&&x[a]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):g&&"function"==typeof l?o(Function.call,l):l,g&&((w.virtual||(w.virtual={}))[a]=l,t&s.R&&m&&!m[a]&&u(m,a,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s})),r.register("7BN1o",(function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)})),r.register("5hevL",(function(t,e){var n=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=n)})),r.register("3ywqz",(function(t,e){var n=r("32t4M");t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}})),r.register("32t4M",(function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}})),r.register("eRARK",(function(t,e){var n=r("aL95V"),i=r("eaNiW");t.exports=r("4r2KQ")?function(t,e,r){return n.f(t,e,i(1,r))}:function(t,e,n){return t[e]=n,t}})),r.register("aL95V",(function(t,e){var n,i,o,u,c;n=t.exports,i="f",o=function(){return c},u=function(t){return c=t},Object.defineProperty(n,i,{get:o,set:u,enumerable:!0,configurable:!0});var s=r("faFFr"),a=r("gE6ib"),f=r("f91mS"),l=Object.defineProperty;c=r("4r2KQ")?Object.defineProperty:function(t,e,n){if(s(t),e=f(e,!0),s(n),a)try{return l(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}})),r.register("faFFr",(function(t,e){var n=r("hrZMO");t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}})),r.register("hrZMO",(function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}})),r.register("gE6ib",(function(t,e){t.exports=!r("4r2KQ")&&!r("itmy9")((function(){return 7!=Object.defineProperty(r("4bfUf")("div"),"a",{get:function(){return 7}}).a}))})),r.register("4r2KQ",(function(t,e){t.exports=!r("itmy9")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))})),r.register("itmy9",(function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}})),r.register("4bfUf",(function(t,e){var n=r("hrZMO"),i=r("7BN1o").document,o=n(i)&&n(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}})),r.register("f91mS",(function(t,e){var n=r("hrZMO");t.exports=function(t,e){if(!n(t))return t;var r,i;if(e&&"function"==typeof(r=t.toString)&&!n(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!n(i=r.call(t)))return i;if(!e&&"function"==typeof(r=t.toString)&&!n(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")}})),r.register("eaNiW",(function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}})),r.register("cJkpZ",(function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}})),r.register("lcDkg",(function(t,e){var n=r("7BN1o").parseFloat,i=r("5B50J").trim;t.exports=1/n(r("cnveW")+"-0")!=-1/0?function(t){var e=i(String(t),3),r=n(e);return 0===r&&"-"==e.charAt(0)?-0:r}:n})),r.register("5B50J",(function(t,e){var n=r("3JwMu"),i=r("7BN3R"),o=r("itmy9"),u=r("cnveW"),c="["+u+"]",s=RegExp("^"+c+c+"*"),a=RegExp(c+c+"*$"),f=function(t,e,r){var i={},c=o((function(){return!!u[t]()||"​"!="​"[t]()})),s=i[t]=c?e(l):u[t];r&&(i[r]=s),n(n.P+n.F*c,"String",i)},l=f.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(s,"")),2&e&&(t=t.replace(a,"")),t};t.exports=f})),r.register("7BN3R",(function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}})),r.register("cnveW",(function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"})),r("cFZ9T");(function(){var t=document.querySelectorAll(".js-carousel"),e=[],n=function(){"use strict";function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.carousel=e,this.containerInner=e.querySelector(".js-carousel-inner"),this.containerOuter=e.querySelector(".js-carousel-outer"),this.direction=n,this.width=this.containerInner.getBoundingClientRect().width,this.currentWidth=window.innerWidth,this.counter=this.width/4,this.lastScrollTop=0,this.currentDirection,this.outerMovementPercentage=0,this.lerpOuterMovementPercentage=0,this.init()}var e,n,r;return e=t,(n=[{key:"init",value:function(){var t=this,e=this;window.addEventListener("resize",(function(){t.resizedWidth=window.innerWidth,t.currentWidth!==t.resizedWidth&&(t.width=t.containerInner.getBoundingClientRect().width,t.counter=t.width/3)})),window.addEventListener("scroll",(function(){var t=window.pageYOffset||document.body.scrollTop;t>e.lastScrollTop?e.currentDirection="down":e.currentDirection="up",e.lastScrollTop=t}))}},{key:"updateInner",value:function(){this.counter>=this.width/3?this.counter=0:this.counter<=0&&(this.counter=this.width/3),o(this.containerInner,"translate3d(".concat(-this.counter,"px, 0px, 0px)")),"down"===this.currentDirection?("right"===this.direction&&(this.counter+=1),"left"===this.direction&&(this.counter-=1)):("right"===this.direction&&(this.counter-=1),"left"===this.direction&&(this.counter+=1))}},{key:"updateOuter",value:function(){this.position=this.carousel.getBoundingClientRect().top-innerHeight,this.carouselHeight=this.carousel.getBoundingClientRect().height,this.maxHeight=this.carouselHeight+innerHeight,this.outerMovementPercentage=this.position/this.maxHeight,this.lerpOuterMovementPercentage=u(this.lerpOuterMovementPercentage,this.outerMovementPercentage,.1),"right"===this.direction&&o(this.containerOuter,"translate3d(".concat(1400*+this.lerpOuterMovementPercentage,"px, 0px, 0px)")),"left"===this.direction&&o(this.containerOuter,"translate3d(".concat(1400*-this.lerpOuterMovementPercentage,"px, 0px, 0px)"))}},{key:"updateOuterMobile",value:function(){this.position=this.carousel.getBoundingClientRect().top-innerHeight,this.carouselHeight=this.carousel.getBoundingClientRect().height,this.maxHeight=this.carouselHeight+innerHeight,this.outerMovementPercentage=this.position/this.maxHeight,this.lerpOuterMovementPercentage=u(this.lerpOuterMovementPercentage,this.outerMovementPercentage,.1),"right"===this.direction&&o(this.containerOuter,"translate3d(".concat(200*+this.lerpOuterMovementPercentage,"px, 0px, 0px)")),"left"===this.direction&&o(this.containerOuter,"translate3d(".concat(200*-this.lerpOuterMovementPercentage,"px, 0px, 0px)"))}}])&&i(e.prototype,n),r&&i(e,r),t}(),r=function(){t.forEach((function(t){var r=t.getAttribute("data-direction");e.push(new n(t,r))}))};"loaded"===document.fonts.status?r():document.fonts.onloadingdone=function(){r()};var c=function(){e.forEach((function(t){t.updateInner(),window.innerWidth>=768?t.updateOuter():t.updateOuterMobile()})),requestAnimationFrame(c)};c()})()}();
//# sourceMappingURL=index.6a8faf14.js.map
