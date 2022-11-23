// Menu fade animation
const nav = document.querySelector(".navbar");
const music = document.querySelector(".music-card");
const handleHover = function(e) {
    if (e.target.classList.contains('nav-text')) {
        const link = e.target;
        const siblings = link.closest('.navbar').querySelectorAll('.nav-text');
        siblings.forEach((el)=>{
            if (el !== link) el.style.opacity = this;
        });
    }
};
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));
const tuneHover = function(e) {
    if (e.target.classList.contains('tune-text')) {
        const link = e.target;
        const tunes = document.querySelectorAll('.tune-text');
        tunes.forEach((el)=>{
            if (el !== link) el.style.opacity = this;
        });
    }
};
music.addEventListener('mouseover', tuneHover.bind(0.5));
music.addEventListener('mouseout', tuneHover.bind(1));
// ///////////////////////////////////////
// Hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-item");
function closeMenu() {
    // console.log('test');
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
navLink.forEach((n)=>n.addEventListener("click", closeMenu)
);
//////////////////////////////////////
// Sticky header
// const nav = document.querySelector('.navbar');
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height * 2;
const stickyNav = function(entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `${navHeight}px`
});
headerObserver.observe(header);

//# sourceMappingURL=index.ccb7574e.js.map
