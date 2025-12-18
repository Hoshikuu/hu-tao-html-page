/* header-scroll.js
   Adds the 'scrolled' class to the fixed header after a small scroll threshold.
   This keeps behavior consistent across pages without duplicating inline scripts.
*/

(function () {
  const header = document.getElementById('main-header');
  if (!header) return;

  const THRESHOLD = 50;

  function onScroll() {
    const y = window.pageYOffset || document.documentElement.scrollTop || 0;
    header.classList.toggle('scrolled', y > THRESHOLD);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
