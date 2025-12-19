window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("aktif");
  } else {
    header.classList.remove("aktif");
  }
});

window.addEventListener("load", () => {
  if (window.scrollY > 50) {
    document.querySelector("header").classList.add("aktif");
  } else {
    document.querySelector("header").classList.remove("aktif");
  }
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("acik");
  });
}
