/* Micro-crèches Loupiala — scripts légers (chargés en defer) */
(function () {
  var doc = document.documentElement;
  doc.classList.add('js');

  // En-tête : ombre au défilement
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 8); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Menu mobile
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav-principale');
  if (burger && nav) {
    var fermer = function () {
      burger.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
      document.body.classList.remove('nav-ouverte');
    };
    burger.addEventListener('click', function () {
      var ouvert = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!ouvert));
      nav.classList.toggle('is-open', !ouvert);
      document.body.classList.toggle('nav-ouverte', !ouvert);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) { fermer(); burger.focus(); }
    });
    window.addEventListener('resize', function () { if (window.innerWidth > 1120) fermer(); });
  }

  // Apparition douce des blocs
  var blocs = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && blocs.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    blocs.forEach(function (b) { io.observe(b); });
  } else {
    blocs.forEach(function (b) { b.classList.add('is-visible'); });
  }

  // Année du pied de page
  var annee = document.getElementById('annee');
  if (annee) annee.textContent = new Date().getFullYear();
})();
