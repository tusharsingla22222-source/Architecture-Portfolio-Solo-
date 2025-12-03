
window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");

    if (window.scrollY > 400) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});




const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// window.addEventListener("scroll", () => {
//     const nav = document.querySelector("nav");

//     if (window.scrollY > 50) {
//         nav.classList.add("scrolled");
//     } else {
//         nav.classList.remove("scrolled");
//     }
// });

// Scroll to top button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.classList.add("visible");
  } else {
    scrollTopBtn.classList.remove("visible");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});




