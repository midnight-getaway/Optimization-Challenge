/**
 * Ensures skip links move keyboard focus to #main (required for WebKit/Safari
 * and when the target is a non-interactive element like <main>).
 */
(function () {
  "use strict";

  document.querySelectorAll(".skip-link[href^='#']").forEach(function (link) {
    link.addEventListener("click", function () {
      var id = link.getAttribute("href").slice(1);
      var target = id ? document.getElementById(id) : null;
      if (!target) return;
      if (!target.hasAttribute("tabindex")) {
        target.setAttribute("tabindex", "-1");
      }
      window.requestAnimationFrame(function () {
        target.focus();
      });
    });
  });
})();
