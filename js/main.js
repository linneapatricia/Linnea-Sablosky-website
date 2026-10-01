/* Site behavior — leave this file alone.
   - Footer year
   - Mobile menu open/close (focus trap + inert while open)
   - Auto-hide shows 3 days after their <time datetime>; sort soonest first
   - Highlights the nav link for the section you're viewing
*/
(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const top = document.querySelector(".site-top");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  const toggleText = toggle?.querySelector(".nav-toggle-text");
  const brand = document.querySelector(".brand");
  const main = document.querySelector("main");
  const footer = document.querySelector(".site-footer");
  const skip = document.querySelector(".skip-link");
  const mobileNav = window.matchMedia("(max-width: 720px)");

  const menuFocusables = () =>
    [toggle, ...(nav ? [...nav.querySelectorAll("a")] : [])].filter(Boolean);

  const setBackdropInert = (inert) => {
    [main, footer, brand, skip].forEach((el) => {
      if (el) el.inert = inert;
    });
  };

  const setOpen = (open) => {
    if (!top || !toggle) return;
    const wasOpen = top.classList.contains("is-open");
    top.classList.toggle("is-open", open);
    document.body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    if (toggleText) toggleText.textContent = open ? "Close" : "Menu";

    if (!mobileNav.matches) {
      setBackdropInert(false);
      return;
    }

    setBackdropInert(open);

    if (open) {
      requestAnimationFrame(() => nav?.querySelector("a")?.focus());
    } else if (wasOpen) {
      toggle.focus();
    }
  };

  toggle?.addEventListener("click", () => {
    setOpen(!top.classList.contains("is-open"));
  });

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    const menuOpen = top?.classList.contains("is-open") && mobileNav.matches;

    if (event.key === "Escape" && menuOpen) {
      setOpen(false);
      return;
    }

    if (event.key !== "Tab" || !menuOpen) return;

    const focusables = menuFocusables();
    if (focusables.length < 2) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  mobileNav.addEventListener("change", () => {
    if (!mobileNav.matches) setOpen(false);
  });

  // Keep each show through its datetime + 3 calendar days, then remove it.
  const today = new Date();
  const todayIso = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  const addDaysIso = (iso, days) => {
    const [y, m, d] = iso.split("-").map(Number);
    if (!y || !m || !d) return null;
    const date = new Date(y, m - 1, d);
    date.setDate(date.getDate() + days);
    return [
      date.getFullYear(),
      String(date.getMonth() + 1).padStart(2, "0"),
      String(date.getDate()).padStart(2, "0"),
    ].join("-");
  };

  const showList = document.querySelector(".show-list");
  if (showList) {
    const items = [...showList.querySelectorAll("li")];
    items.forEach((item) => {
      const iso = item.querySelector("time")?.getAttribute("datetime");
      const lastVisible = iso ? addDaysIso(iso, 3) : null;
      if (!lastVisible || todayIso > lastVisible) item.remove();
    });

    const remaining = [...showList.querySelectorAll("li")].sort((a, b) => {
      const aIso = a.querySelector("time")?.getAttribute("datetime") || "";
      const bIso = b.querySelector("time")?.getAttribute("datetime") || "";
      return aIso.localeCompare(bIso);
    });
    remaining.forEach((item) => showList.appendChild(item));

    if (!remaining.length) {
      const empty = document.createElement("p");
      empty.className = "show-empty";
      empty.textContent = "Check back soon";
      showList.replaceWith(empty);
    }
  }

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
        const active = link.getAttribute("href") === `#${id}`;
        link.classList.toggle("is-active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    },
    {
      rootMargin: "-30% 0px -55% 0px",
      threshold: [0.1, 0.35, 0.6],
    }
  );

  sections.forEach(({ el }) => observer.observe(el));
})();
