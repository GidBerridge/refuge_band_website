const nav=document.querySelector(".navbar"),music=document.querySelector(".music-card"),handleHover=function(e){if(e.target.classList.contains("nav-text")){const t=e.target;t.closest(".navbar").querySelectorAll(".nav-text").forEach((e=>{e!==t&&(e.style.opacity=this)}))}};nav.addEventListener("mouseover",handleHover.bind(.5)),nav.addEventListener("mouseout",handleHover.bind(1));const tuneHover=function(e){if(e.target.classList.contains("tune-text")){const t=e.target;document.querySelectorAll(".tune-text").forEach((e=>{e!==t&&(e.style.opacity=this)}))}};music.addEventListener("mouseover",tuneHover.bind(.5)),music.addEventListener("mouseout",tuneHover.bind(1));const hamburger=document.querySelector(".hamburger"),navMenu=document.querySelector(".nav-menu");function mobileMenu(){hamburger.classList.toggle("active"),navMenu.classList.toggle("active")}hamburger.addEventListener("click",mobileMenu);const navLink=document.querySelectorAll(".nav-item");function closeMenu(){hamburger.classList.remove("active"),navMenu.classList.remove("active")}navLink.forEach((e=>e.addEventListener("click",closeMenu)));const header=document.querySelector(".header"),navHeight=2*nav.getBoundingClientRect().height,stickyNav=function(e){const[t]=e;t.isIntersecting?nav.classList.remove("sticky"):nav.classList.add("sticky")},headerObserver=new IntersectionObserver(stickyNav,{root:null,threshold:0,rootMargin:`${navHeight}px`});headerObserver.observe(header);
//# sourceMappingURL=index.645f4c0f.js.map
