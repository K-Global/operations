/* ==========================================================================
   Back-to-top button
   A floating, brand-styled button that appears once the reader has scrolled
   down and smooth-scrolls back to the top. Written to survive Material's
   instant navigation: the button is appended to <body> (which is not swapped
   on instant load) and the scroll listener is bound to window once — tracked
   by a data-attribute on the button itself, not a global — so the idempotent
   init below is safe to run again on every page change.
   ========================================================================== */
(function () {
  "use strict";

  var SHOW_AFTER = 400; // px scrolled before the button appears

  function init() {
    var btn = document.querySelector(".kg-to-top");
    if (!btn) {
      btn = document.createElement("button");
      btn.className = "kg-to-top";
      btn.type = "button";
      btn.setAttribute("aria-label", "Back to top");
      btn.title = "Back to top";
      btn.innerHTML =
        '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
        '<path d="M12 7.4 5.4 14 6.8 15.4 12 10.2l5.2 5.2L18.6 14z"/></svg>';
      btn.addEventListener("click", function () {
        var reduce = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      });
      document.body.appendChild(btn);
    }

    function onScroll() {
      var y = window.scrollY || document.documentElement.scrollTop || 0;
      btn.classList.toggle("kg-to-top--visible", y > SHOW_AFTER);
    }

    // Bind the window scroll listener once. The flag lives on the (persistent)
    // button element, keeping the state local instead of on window.
    if (!btn.dataset.kgBound) {
      window.addEventListener("scroll", onScroll, { passive: true });
      btn.dataset.kgBound = "1";
    }
    onScroll();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
