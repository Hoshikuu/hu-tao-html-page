/* 
  nav-fix.js
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
