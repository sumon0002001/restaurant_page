import loadHome from './modules/home';

function init() {
    loadHome();

    const homeButton = document.getElementById('home-tab');
    homeButton.addEventListener('click', loadHome);

}