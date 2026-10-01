/* Site behavior — leave this file alone.
   - Footer year
   - Mobile menu open/close
   - Highlights the nav link for the section you're viewing
*/
(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const top = document.querySelector(".site-top");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  const toggleText = toggle?.querySelector(".nav-toggle-text");

  const setOpen = (open) => {
    if (!top || !toggle) return;
    top.classList.toggle("is-open", open);
    document.body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    if (toggleText) toggleText.textContent = open ? "Close" : "Menu";
  };

  toggle?.addEventListener("click", () => {
    setOpen(!top.classList.contains("is-open"));
  });

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });

  const links = [...document.querySelectorAll(".jump a")];
  const sections = links
    .map((link) => {
      const id = link.getAttribute("href")?.slice(1);
      const el = id ? document.getElementById(id) : null;
      return el ? { link, el } : null;
    })
    .filter(Boolean);

  if (!sections.length || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const id = visible.target.id;
      links.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
      });
    },
    {
      rootMargin: "-30% 0px -55% 0px",
      threshold: [0.1, 0.35, 0.6],
    }
  );

  sections.forEach(({ el }) => observer.observe(el));
})();
