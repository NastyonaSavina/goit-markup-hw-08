(() => {
  const refs = {
    openMenuBtn: document.querySelector("[mob-menu-open]"),
    closeMenuBtn: document.querySelector("[mob-menu-close]"),
    modal: document.querySelector("[mob-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleModal);
  refs.closeMenuBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();