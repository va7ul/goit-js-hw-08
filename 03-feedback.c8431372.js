var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,c=u||f||Function("return this")(),l=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return c.Date.now()};function v(e,t,n){var o,r,i,a,u,f,c=0,l=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function x(e){return c=e,u=setTimeout(j,t),l?y(e):a}function h(e){var n=e-f;return void 0===f||n>=t||n<0||v&&e-c>=i}function j(){var e=d();if(h(e))return S(e);u=setTimeout(j,function(e){var n=t-(e-f);return v?m(n,i-(e-c)):n}(e))}function S(e){return u=void 0,b&&o?y(e):(o=r=void 0,a)}function T(){var e=d(),n=h(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return x(f);if(v)return u=setTimeout(j,t),y(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=g(t)||0,p(n)&&(l=!!n.leading,i=(v="maxWait"in n)?s(g(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=r=u=void 0},T.flush=function(){return void 0===u?a:S(d())},T}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=r.test(e);return u||i.test(e)?a(e.slice(2),u?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const b={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")},y={email:"",message:""};b.form.addEventListener("input",t((function(){y.email=b.input.value,y.message=b.textarea.value;const e=JSON.stringify(y);localStorage.setItem("feedback-form-state",e)}),500)),b.form.addEventListener("submit",(function(e){e.preventDefault(),""===b.input.value||""===b.textarea.value?alert("Не всі поля заповнені!"):(console.log(y),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"))})),function(){const e=localStorage.getItem("feedback-form-state");let t={};if(e){try{t=JSON.parse(e)}catch(e){console.log(e.name),console.log(e.message)}b.input.value=t.email,b.textarea.value=t.message,y.email=b.input.value,y.message=b.textarea.value}}();
//# sourceMappingURL=03-feedback.c8431372.js.map