(()=>{"use strict";var e=document.querySelectorAll(".menu__link[data-goto]"),t=document.querySelector(".menu__icon"),o=document.querySelector(".menu__container"),n=document.querySelector(".main");if(t&&t.addEventListener("click",(function(){t.classList.toggle("menu__icon_active"),o.classList.toggle("menu__container_active"),n.classList.toggle("main_lock")})),e.length>0){function _(e){var c=e.target;if(c.dataset.goto&&document.querySelector(c.dataset.goto)){var r=document.querySelector(c.dataset.goto).getBoundingClientRect().top+scrollY-document.querySelector("header").offsetHeight;t.classList.contains("menu__icon_active")&&(t.classList.remove("menu__icon_active"),o.classList.remove("menu__container_active"),n.classList.remove("main_lock")),window.scrollTo({top:r,behavior:"smooth"}),e.preventDefault()}}e.forEach((function(e){e.addEventListener("click",_)}))}var c=document.querySelectorAll(".popup"),r=document.querySelector(".popup-html"),u=document.querySelector(".popup-css"),i=document.querySelector(".popup-js"),l=document.querySelector(".popup-react"),s=document.querySelector(".popup-node"),a=document.querySelector(".popup-github"),d=document.querySelector(".popup-api"),m=document.querySelector(".popup-figma");function p(e){document.addEventListener("keydown",v),e.classList.add("popup_opened"),document.querySelector(".main").classList.add("main_lock")}function v(e){"Escape"===e.key&&(y(document.querySelector(".popup_opened")),document.querySelector(".main").classList.remove("main_lock"))}function y(e){document.removeEventListener("keydown",v),e.classList.remove("popup_opened"),document.querySelector(".main").classList.remove("main_lock")}document.querySelector(".tools-html").addEventListener("click",(function(){p(r)})),document.querySelector(".tools-css").addEventListener("click",(function(){p(u)})),document.querySelector(".tools-js").addEventListener("click",(function(){p(i)})),document.querySelector(".tools-react").addEventListener("click",(function(){p(l)})),document.querySelector(".tools-node").addEventListener("click",(function(){p(s)})),document.querySelector(".tools-github").addEventListener("click",(function(){p(a)})),document.querySelector(".tools-api").addEventListener("click",(function(){p(d)})),document.querySelector(".tools-figma").addEventListener("click",(function(){p(m)})),c.forEach((function(e){return e.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__close-button"))&&y(e)}))})),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&document.querySelector(".portfolio").querySelectorAll(".portfolio__cover-link").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault()}))}))})();