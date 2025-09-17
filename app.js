document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
        top:
          targetElement.offsetTop -
          document.querySelector("header").offsetHeight,
        behavior: "smooth",
      });
    });
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const profileImg = document.querySelector(".home-img img");
  profileImg.classList.add("show");
});

const cards = document.querySelectorAll(".project-content-1");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      } else {
        entry.target.classList.remove("animate");
      }
    });
  },
  { threshold: 0.2 }
);

cards.forEach((card) => observer.observe(card));
