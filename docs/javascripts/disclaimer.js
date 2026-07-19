/*
 * K Global Operations Manual — one-time "this is fictional" acknowledgement.
 * Shows a full-screen notice on first visit until the reader confirms they
 * understand this is a flight-simulation manual, not real-world aviation
 * guidance. Choice is remembered in localStorage, so members see it once.
 * Works with Material's instant navigation via the document$ observable.
 */
(function () {
  var KEY = "kg-disclaimer-ack";
  var VERSION = "v1";

  function show() {
    try {
      if (localStorage.getItem(KEY) === VERSION) return;
    } catch (e) { /* private mode: fall through and show it */ }
    if (document.getElementById("kg-disclaimer")) return;

    var overlay = document.createElement("div");
    overlay.id = "kg-disclaimer";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-labelledby", "kg-disclaimer-title");
    overlay.innerHTML =
      '<div class="kg-disclaimer__card">' +
        '<div class="kg-disclaimer__eyebrow">K Global &middot; Operations Manual</div>' +
        '<h2 id="kg-disclaimer-title">A fictional flight-simulation manual</h2>' +
        "<p>This is the operations manual for <strong>K Global</strong>, a " +
        "fictional virtual airline flown on VATSIM. It is for " +
        "<strong>flight-simulation use only</strong> and is <strong>not</strong> " +
        "real-world aviation, operational, or advisory information &mdash; do not " +
        "use it for real flight operations.</p>" +
        '<button type="button" id="kg-disclaimer-ok" class="kg-disclaimer__btn">' +
        "I understand &mdash; enter</button>" +
      "</div>";
    document.body.appendChild(overlay);
    document.documentElement.classList.add("kg-noscroll");

    var btn = document.getElementById("kg-disclaimer-ok");
    function dismiss() {
      try { localStorage.setItem(KEY, VERSION); } catch (e) { /* ignore */ }
      overlay.remove();
      document.documentElement.classList.remove("kg-noscroll");
    }
    btn.addEventListener("click", dismiss);
    btn.focus();
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(show);
  } else if (document.readyState !== "loading") {
    show();
  } else {
    document.addEventListener("DOMContentLoaded", show);
  }
})();
