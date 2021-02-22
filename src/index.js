import pageLoad from './modules/initial-page-load';
import loadHome from './modules/home';
import loadMenu from './modules/menu';
import loadContactPage from './modules/contact-us';

function init() {
    
  pageLoad();
  loadHome();

  const homeButton = document.getElementById('home-tab');
  homeButton.addEventListener('click', loadHome);

  const menuButton = document.getElementById('menu-tab');
  menuButton.addEventListener('click', loadMenu);

  const contactButton = document.getElementById('contact-tab');
  contactButton.addEventListener('click', loadContactPage);

}

init();