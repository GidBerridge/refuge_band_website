// Menu fade animation
// const nav = document.querySelector(".navbar");

// const handleHover = function (e) {
//   if (e.target.classList.contains('navbar__text')) {
//     const link = e.target;
    
//     const siblings = link.closest('.navbar').querySelectorAll('.navbar__text');
//     siblings.forEach(el => {
//       if (el !== link) el.style.opacity = this;
//     });
    
//   }
// };
// nav.addEventListener('mouseover', handleHover.bind(0.7));
// nav.addEventListener('mouseout', handleHover.bind(1));

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
  console.log('test');
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

navLink.forEach(n => n.addEventListener("click", closeMenu));

