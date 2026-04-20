// Smooth scroll for anchor links (vanilla JS replacement for jQuery version)
document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('a[href*="#"]');
  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    if (link.getAttribute('href') === '#' || link.getAttribute('href') === '#0') continue;
    link.addEventListener('click', function(event) {
      // On-page links only
      if (
        location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
        location.hostname === this.hostname
      ) {
        var hash = this.hash;
        var target = document.querySelector(hash) || document.querySelector('[name=' + hash.slice(1) + ']');
        if (target) {
          event.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
          // Focus management for accessibility
          setTimeout(function() {
            target.focus();
            if (document.activeElement !== target) {
              target.setAttribute('tabindex', '-1');
              target.focus();
            }
          }, 1000);
        }
      }
    });
  }
});
