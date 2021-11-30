import "./style.scss";

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  const mobileMenu = document.querySelector(".hamburger.is-active + .menu");
  if (mobileMenu) {
    mobileMenu.addEventListener("mouseleave", () =>
      hamburger.classList.remove("is-active")
    );
  }
});
