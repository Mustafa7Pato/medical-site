let navItems = document.querySelector("#nav__items");
let openBtn = document.querySelector("#open__nav-btn");
let closeBtn = document.querySelector("#close__nav-btn");

openBtn.addEventListener("click", () => {
  navItems.style.display = "flex";
  openBtn.style.display = "none";
  closeBtn.style.display = "inline-block";
});
closeBtn.addEventListener("click", () => {
  navItems.style.display = "none";
  openBtn.style.display = "inline-block";
  closeBtn.style.display = "none";
});

const closeNav = () => {
  navItems.style.display = "none";
  openBtn.style.display = "inline-block";
  closeBtn.style.display = "none";
};
if (window.innerWidth < 1024) {
  document.querySelectorAll("#nav__items li a").forEach((navItem) => {
    navItem.addEventListener("click", () => {
      closeNav();
    });
  });
}

//nav change color
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Responsive Breakpoints
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
