(function () {
  'use strict';

  // PUBLIC helpers (kept for compatibility with earlier auto-generated assets)
  function setAbs(el, left, top, width, height, z) {
    if (!el) return;
    el.style.position = 'absolute';
    if (left !== undefined) el.style.left = left + 'px';
    if (top !== undefined) el.style.top = top + 'px';
    if (width !== undefined) el.style.width = width + 'px';
    if (height !== undefined) el.style.height = height + 'px';
    if (z !== undefined) el.style.zIndex = String(z);
  }
  window.FigmaRenderUtils = { setAbs };

  // Progressive enhancement: focus outline and basic validation hinting
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.glass-form');
    if (!form) return;

    form.addEventListener('invalid', function (e) {
      const target = e.target;
      if (target && target.classList && target.classList.add) {
        target.classList.add('is-invalid');
      }
    }, true);

    form.addEventListener('input', function (e) {
      const el = e.target;
      if (el && el.classList && el.classList.remove) {
        el.classList.remove('is-invalid');
      }
    });
  });
})();
