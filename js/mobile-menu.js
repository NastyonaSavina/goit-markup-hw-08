
(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu-open-btn'),
    closeMenuBtn: document.querySelector('.close-mob-btn'),
    menu: document.querySelector('.mob-menu-block'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();