function openMenu() {
  document.body.classList.add('menu--open');
  const menuBackdrop = document.querySelector('.menu_backdrop');
  if (menuBackdrop) {
    menuBackdrop.style.visibility = 'visible';
    menuBackdrop.style.opacity = '1';
    menuBackdrop.style.transform = 'translateX(0)';
  }
}

function closeMenu() {
  document.body.classList.remove('menu--open');
  const menuBackdrop = document.querySelector('.menu_backdrop');
  if (menuBackdrop) {
    menuBackdrop.style.visibility = 'hidden';
    menuBackdrop.style.opacity = '0';
    menuBackdrop.style.transform = 'translateX(100%)';
  }
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   