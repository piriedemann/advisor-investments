document.documentElement.classList.add("js");

const header = document.querySelector(".site-header");
const toggle = document.querySelector(".menu-toggle");

toggle.addEventListener("click", () => {
  const open = document.body.classList.toggle("menu-open");
  toggle.setAttribute("aria-expanded", open);
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

document.querySelectorAll(".nav a").forEach((link) =>
  link.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      }
    }),
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${(i % 3) * 80}ms`;
  observer.observe(el);
});

document.getElementById("year").textContent = new Date().getFullYear();
