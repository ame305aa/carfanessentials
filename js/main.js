(function () {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (header) {
    const onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const page = document.body.dataset.page;
  if (page) {
    document.querySelectorAll(".site-nav a").forEach(function (link) {
      if (link.dataset.nav === page) link.classList.add("is-active");
    });
  }

  const form = document.querySelector("#enquiry");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const interest = String(data.get("interest") || "the range").trim();
      const message = String(data.get("message") || "").trim();
      const lines = [
        "Hello Carfan Essentials,",
        name ? "My name is " + name + "." : "",
        "I am asking about " + interest + ".",
        message
      ].filter(Boolean);
      const url = "https://wa.me/251910778002?text=" + encodeURIComponent(lines.join("\n"));
      window.open(url, "_blank", "noopener");
    });
  }
})();
