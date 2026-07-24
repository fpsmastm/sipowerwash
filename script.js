// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');
if (navToggle && mobileNav) {
  navToggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Before / after sliders
function setupSlider(root) {
  const range = root.querySelector('.ba-range');
  const beforeWrap = root.querySelector('.ba-before-wrap');
  const beforeImg = root.querySelector('.ba-before');
  const handle = root.querySelector('.ba-handle');

  function sizeBeforeImage() {
    // Make the "before" image always span the full slider width,
    // even though its wrapper is clipped to a percentage.
    const fullWidth = root.getBoundingClientRect().width;
    beforeImg.style.width = fullWidth + 'px';
  }

  function update(value) {
    beforeWrap.style.width = value + '%';
    handle.style.left = value + '%';
    root.style.setProperty('--pos', value + '%');
  }

  sizeBeforeImage();
  update(range.value);

  range.addEventListener('input', (e) => update(e.target.value));
  window.addEventListener('resize', sizeBeforeImage);
}

document.querySelectorAll('[data-ba-slider]').forEach(setupSlider);
