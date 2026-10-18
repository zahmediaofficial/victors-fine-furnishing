// Victor's Fine Furnishing — small interactions, no dependencies.
(function () {
  // Sticky header shadow
  var header = document.querySelector('.site-header');
  var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  var toggle = document.getElementById('menuToggle');
  var nav = document.getElementById('mainNav');
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Reveal on scroll (arm the hidden state from JS so content is never
  // invisible without it)
  document.documentElement.classList.add('js-reveal');
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  // Details filter pills (oak / walnut / finishing touches)
  var pills = document.querySelectorAll('.pill');
  var details = document.querySelectorAll('.detail');
  pills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      pills.forEach(function (p) { p.classList.remove('is-active'); });
      pill.classList.add('is-active');
      var f = pill.getAttribute('data-filter');
      details.forEach(function (d) {
        d.classList.toggle('is-dim', f !== 'all' && d.getAttribute('data-material') !== f);
      });
    });
  });

  // Quote form — opens the visitor's email app, pre-addressed to the workshop.
  var form = document.getElementById('quoteForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = new FormData(form);
    var subject = encodeURIComponent("Quote request — " + (data.get('type') || 'Custom work') + " — Victor's Fine Furnishing");
    var body = encodeURIComponent(
      'Name: ' + (data.get('name') || '') + '\n' +
      'Reach me at: ' + (data.get('contact') || '') + '\n' +
      'What I want made: ' + (data.get('type') || '') + '\n\n' +
      (data.get('message') || '')
    );
    window.location.href = 'mailto:vffurnishings@gmail.com?subject=' + subject + '&body=' + body;
  });
})();
