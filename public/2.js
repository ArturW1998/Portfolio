webpackJsonp([2],{"2MKv":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".tooltip-wrapper{display:inline-block;position:relative}.target-element{cursor:pointer}.tooltip{background-color:#232323;border:1px solid rgba(49,49,49,.26);border-radius:2px;box-shadow:2px 2px 10px rgba(70,70,70,.06);box-sizing:border-box;color:hsla(0,0%,87%,.73);font-size:16px;max-width:300px;overflow:hidden;padding:10px;pointer-events:none;position:absolute;transition:opacity .25s ease;width:300px;width:max-content;z-index:9999}.tooltip.top{bottom:80%}.tooltip.bottom,.tooltip.top{left:50%;transform:translateX(-50%)}.tooltip.bottom{top:80%}.tooltip.right{left:80%}.tooltip.left,.tooltip.right{top:50%;transform:translateY(-50%)}.tooltip.left{right:80%}@media (max-width:800px){.tooltip{font-size:12px;max-width:120px}}",""])},"3roa":function(t,e,n){var i=n("2MKv");"string"==typeof i&&(i=[[t.i,i,""]]);var s={transform:void 0};n("MTIv")(i,s);i.locals&&(t.exports=i.locals)},DJLH:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="M33,0h41c0,0,0,9.871,0,29.871C74,49.871,74,60,74,60H32.666h-0.125H6c0,0,0-10,0-30S6,0,6,0H33",s="M33,0h41c0,0,5,9.871,5,29.871C79,49.871,74,60,74,60H32.666h-0.125H6c0,0,5-10,5-30S6,0,6,0H33",r="M33,0h41c0,0-5,9.871-5,29.871C69,49.871,74,60,74,60H32.666h-0.125H6c0,0-5-10-5-30S6,0,6,0H33",a=function(){var t=this;this._morphSVGs=function(e){var n=t.options,i=n.paths,s=i.rect,r=i.curve,a=r.left,o=r.right,l=n.speed,c=t.old<t.curr?"right":"left",d=t.items,u=d[t.old].path,p=d[t.curr];u.stop().animate({path:"right"===c?a:o},.5*l,mina.easeout),setTimeout(function(){return e()},.2*l),p.querySelector("path").setAttribute("d","right"===c?a:o),setTimeout(function(){return p.path.stop().animate({path:s},3*l,mina.elastic)},.5*l)},this.extend=function(t,e){var n=t;return Object.keys(e).forEach(function(t){return Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])}),n},this.init=function(){t._init(),t._initEvents()},this._init=function(){t.itemsList=t.el.querySelector("ul");var e=t.itemsList.querySelectorAll("li");if(t.items=[].slice.call(e),t.itemsCount=t.items.length,t.curr=t.old=0,t.isAnimating=!1,t.itemsList.style.width=100*t.itemsCount+"%",t.support){var n=t.options,i=n.speed,s=n.easing;t.itemsList.style.WebkitTransition="-webkit-transform "+i+"ms "+s,t.itemsList.style.transition="transform "+i+"ms "+s}if(t.items.forEach(function(e){e.style.width=100/t.itemsCount+"%"}),t.itemsCount>1){var r=document.createElement("nav"),a=function(t,e,n){var i=document.createElement("span");return i.className=t,i.innerHTML=e,n&&i.classList.add("disabled"),r.appendChild(i),i};t.navPrev=a("prev","&lt;",!0),t.navNext=a("next","&gt;"),t.el.appendChild(r),t.items.forEach(function(e){var n=function(t){var e=document.createDocumentFragment(),n=document.createElement("div");for(n.innerHTML=t;n.firstChild;)e.appendChild(n.firstChild);return e}('<svg\n            xmlns="http://www.w3.org/2000/svg"\n            width="100%"\n            height="100%"\n            viewBox="0 0 80 60"\n            preserveAspectRatio="none"\n          >\n            <path d="'+t.options.paths.rect+'" />\n          </svg>'),i=e.childNodes[0];e.insertBefore(n,i);var s=e.querySelector("svg"),r=Snap(s);e.path=r.select("path")})}},this._initEvents=function(){if(t.itemsCount>1){t.navPrev.addEventListener("click",function(){t._navigate("prev")}),t.navNext.addEventListener("click",function(){t._navigate("next")});var e=function(){return t.isAnimating=!1};t.support?t.itemsList.addEventListener(transEndEventName,e):e(),document.addEventListener("keydown",function(e){var n=e.key,i=e.code;switch(n||i){case"ArrowLeft":t._navigate("prev");break;case"ArrowRight":t._navigate("next")}})}},this._navigate=function(e){if(t.isAnimating||"next"===e&&t.curr>=t.itemsCount-1||"prev"===e&&t.curr<=0)return!1;t.isAnimating=!0,t.direction=e,t.old=t.curr,"next"===e&&t.curr<t.itemsCount-1?++t.curr:"prev"===e&&t.curr>0&&--t.curr,t._slide()},this._slide=function(){t._morphSVGs(function(){t._toggleNavControls();var e=-1*t.curr*100/t.itemsCount;t.itemsList.style.WebkitTransform="translate3d("+e+"%,0,0)",t.itemsList.style.transform="translate3d("+e+"%,0,0)"})},this._toggleNavControls=function(){switch(t.curr){case 0:t.navNext.classList.remove("disabled"),t.navPrev.classList.add("disabled");break;case t.itemsCount-1:t.navNext.classList.add("disabled"),t.navPrev.classList.remove("disabled");break;default:t.navNext.classList.remove("disabled"),t.navPrev.classList.remove("disabled")}}};e.default=function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),a.call(this),this.Modernizr=window.Modernizr,window.transEndEventNames={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"};var o=window.Modernizr,l=o.cssanimations,c=(0,o.prefixed)("transition");window.transEndEventName=window.transEndEventNames[c],this.support={cssanimations:l},this.el=e,this.optionsDefault={speed:500,easing:"ease",paths:{rect:i,curve:{right:s,left:r}}},this.options=this.extend({},this.optionsDefault),this.extend(this.options,n)}},DlCd:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=n("GiK3"),a=c(r),o=c(n("KSGD")),l=c(n("HW6M"));function c(t){return t&&t.__esModule?t:{default:t}}function d(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}n("3roa");var u=function(t){function e(){var t,n,i;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var s=arguments.length,r=Array(s),a=0;a<s;a++)r[a]=arguments[a];return n=i=d(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(r))),i.state={visible:!1},i.show=function(){return i.setVisibility(!0)},i.hide=function(){return i.setVisibility(!1)},i.setVisibility=function(t){return i.setState({visible:t})},d(i,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,r.Component),s(e,[{key:"render",value:function(){var t=this.state.visible,e=this.props,n=e.children,s=e.content,r=e.style,o=e.position,c=e.wrapperClassName,d=(0,l.default)("tooltip",o),u=(0,l.default)("tooltip-wrapper",c);return a.default.createElement("span",{className:u},a.default.createElement("span",{className:d,style:i({},r,{opacity:+t})},s),a.default.createElement("span",{className:"target-element",onMouseEnter:this.show,onMouseLeave:this.hide},n))}}]),e}();u.propTypes={children:o.default.node.isRequired,content:o.default.string,position:o.default.oneOf(["top","right","bottom","left"]),style:o.default.objectOf(o.default.string),wrapperClassName:o.default.string},u.defaultProps={content:"Tooltip content",style:{},position:"top",wrapperClassName:""},e.default=u},RGgI:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s=n("GiK3"),r=c(s),a=c(n("brts")),o=c(n("DJLH")),l=c(n("DlCd"));function c(t){return t&&t.__esModule?t:{default:t}}function d(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}n("ytYe");var u=(0,a.default)(),p=function(t){function e(){var t,n,i;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,a=Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=i=d(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(a))),i.slideshow=(0,s.createRef)(),i.SliderFx=null,d(i,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,s.Component),i(e,[{key:"componentDidMount",value:function(){var t=this.slideshow.current;this.SliderFx=new o.default(t,{easing:"cubic-bezier(.8,0,.2,1)"}),(0,this.SliderFx.init)()}},{key:"render",value:function(){return r.default.createElement("div",{ref:this.slideshow,className:"for_fade",id:"Skills_slideshow"},r.default.createElement("ul",null,u.map(function(t,e){return r.default.createElement("li",{key:"skillSlide_"+e},r.default.createElement("div",{className:"slide"},r.default.createElement("div",null,t.map(function(t,e){return r.default.createElement("div",{key:"skillRow_"+e},t.map(function(t){var n=t.src,i=t.alt;return r.default.createElement(l.default,{key:i,content:i,position:0===e?"bottom":"top",wrapperClassName:"slide-item"},r.default.createElement("img",{alt:i,className:"slide-img",src:n}))}))}))))})))}}]),e}();e.default=p},brts:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.chunkArray=void 0;var i,s=n("g7gI"),r=(i=s)&&i.__esModule?i:{default:i};var a=e.chunkArray=function(t,e){for(var n=[];t.length;){var i=t.splice(0,e);n.push(i)}return n};e.default=function(){return a(r.default,15).map(function(t){return a(t,5)})}},"c7+X":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,'#Skills_slideshow{height:100vh;margin:0;overflow:hidden;padding:0;position:relative}#Skills_slideshow ul{list-style-type:none;margin:0;padding:0}#Skills_slideshow ul li{display:block;float:left;height:100vh!important;margin:0;position:relative;-webkit-transform:translateZ(0);transform:translateZ(0)}#Skills_slideshow ul li>svg{fill:#1b242e;position:relative;z-index:-1}#Skills_slideshow>nav span{border-radius:50%;bottom:30px;color:#fff;cursor:pointer;font-family:Flamenco,Arial,sans-serif;font-size:50px;font-weight:400;height:50px;line-height:47px;opacity:.8;position:absolute;text-align:center;-webkit-touch-callout:none;transition:opacity .5s;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:50px}#Skills_slideshow>nav span:hover{opacity:1}#Skills_slideshow>nav span.disabled,#Skills_slideshow>nav span.disabled:hover{cursor:default;opacity:.2}#Skills_slideshow>nav span.next{right:50%;-webkit-transform:translateX(120%);transform:translateX(120%)}#Skills_slideshow>nav span.prev{left:50%;-webkit-transform:translateX(-120%);transform:translateX(-120%)}.slide{left:16%;padding:1em;position:absolute;right:16%;text-align:center;top:0;white-space:normal}.slide div{flex-direction:column;height:90vh;justify-content:center}.slide div,.slide div div{align-items:center;display:flex;width:100%}.slide div div{flex-direction:row;height:auto;justify-content:space-between;margin-bottom:45px}.slide div div:last-child{margin-bottom:0}.slide div div .slide-item{width:15%}.slide div div .slide-item .slide-img{cursor:auto;width:100%}.slide blockquote,.slide h1{font-family:Flamenco,Arial,sans-serif;font-size:3em;font-size:3vw;font-weight:400;margin:0;padding-top:3%;text-shadow:0 1px 1px rgba(0,0,0,.05)}.slide h1{margin-bottom:4%}.slide>p{font-size:.85em;font-weight:700;line-height:1.5}.slide blockquote{margin:0;padding:1em 10% 0;position:relative}.slide blockquote:before{color:rgba(43,65,77,.1);content:"\\201C";display:block;font-size:3em;left:0;position:absolute;top:0;width:100%;z-index:-1}.slide blockquote p{line-height:1.2;margin:0}.slide blockquote+p{color:rgba(43,65,77,.3)}.icon{display:block;margin:0 auto 50px;max-width:160px;padding-top:3%;position:relative;width:50%}@media screen and (max-width:32em){.slide blockquote,.slide h1{font-size:2em}}@media screen and (max-width:650px) and (orientation:portrait){.slide{left:6%!important;right:6%!important}}@media screen and (max-width:450px){.slide div div{margin-bottom:25px}}@media screen and (max-height:500px) and (orientation:landscape){.slide{left:16%;right:16%}.slide .slide-item{width:18%}#Skills_slideshow>nav span{background:none;margin-top:-25px;top:50%}#Skills_slideshow>nav span.next{right:10px;-webkit-transform:translateX(0);transform:translateX(0)}#Skills_slideshow>nav span.prev{left:10px;-webkit-transform:translateX(0);transform:translateX(0)}}',""])},g7gI:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,s=n("q4RZ"),r=(i=s)&&i.__esModule?i:{default:i};var a=r.default.imgPathBack,o=r.default.imgPathFront,l=r.default.imgPathOther,c=[{src:o+"html.png",alt:"HTML"},{src:o+"css.png",alt:"CSS"},{src:o+"js.png",alt:"JavaScript"},{src:o+"ts.png",alt:"TypeScript and Flow"},{src:o+"react.png",alt:"React and Preact"},{src:o+"redux.png",alt:"Recoil and Redux, as well as technologies such as Redux-Saga and Redux-Thunk"},{src:o+"mobx.png",alt:"MobX"},{src:o+"graphql.png",alt:"GraphQL and Apollo"},{src:o+"next.png",alt:"Next.js"},{src:o+"react_native.png",alt:"React Native"},{src:o+"vue.png",alt:"Vue, as well as technologies such as Nuxt.js and Vuex"},{src:o+"rxjs.png",alt:"RxJS"},{src:o+"web_components.png",alt:"Web Components, as well as technologies such as Stencil.js, Polymer, Bit, Lit-html, LitElement, Skate.js, Slim.js and Clarity Core"},{src:o+"jquery.png",alt:"jQuery"},{src:o+"storybook.png",alt:"Storybook and JSDoc"},{src:o+"html_template_engines.png",alt:"HTML template engines such as Pug, EJS and Blade"},{src:o+"css_preprocessors.png",alt:"CSS preprocessors such as SASS, LESS, Stylus and PostCSS"},{src:o+"css_frameworks.png",alt:"CSS utilities such as Styled Components, Emotion, Styled JSX, Material-UI, Ant Design, Tailwind CSS, Bootstrap, Materialize, Foundation and Skeleton"},{src:o+"bundlers.png",alt:"Bundlers and task managers such as Webpack, Gulp, Rollup.js, Parcel Snowpack and Bower"},{src:o+"js_testing_frameworks.png",alt:"JS testing utilities such as Jest, Enzyme, Testing Library (RTL), Cypress, Puppeteer, Mocha, Karma, Jasmine and Chai"},{src:o+"pwa.png",alt:"PWA and AMP"},{src:l+"git.png",alt:"Git, as well as technologies such as GitHub, GitLab and Bitbucket"},{src:l+"docker.png",alt:"Docker"},{src:l+"linters.png",alt:"Linters and code formatters such as ESLint, Stylelint and Prettier"},{src:l+"serverless_&_servers.png",alt:"Serverless and servers such as AWS, Azure, GCP, Firebase, Nginx and Apache"},{src:l+"cms.png",alt:"CMS's such as Expression.Cloud and WordPress"},{src:a+"nodejs.png",alt:"Node.js"},{src:a+"php.png",alt:"PHP"},{src:a+"laravel.png",alt:"Laravel"},{src:a+"databases.png",alt:"Databases such as MySQL, PostgreSQL, MongoDB and Firebase"}];e.default=c},ytYe:function(t,e,n){var i=n("c7+X");"string"==typeof i&&(i=[[t.i,i,""]]);var s={transform:void 0};n("MTIv")(i,s);i.locals&&(t.exports=i.locals)}});