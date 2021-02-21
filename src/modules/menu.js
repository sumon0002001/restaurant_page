function createMenu(className) {
    const parentDiv = document.createElement('div');
    parentDiv.className = 'menu-parent';

    const menu = document.createElement('img');
    menu.setAttribute('class', className);
    menu.src = '../dist/images/Menu-Desktop.svg';

    parentDiv.appendChild(menu);
    return parentDiv;
}

function createMobileMenu() {
    const mobileMenuDiv = document.createElement('div');
    mobileMenuDiv.setAttribute('class', 'mobile-menu');

    const lunchMenu = document.createElement('img');
    lunchMenu.src = '../dist/images/res_2';
    lunchMenu.setAttribute('id', 'lunch');

    const dinnerMenu = document.createElement('img');
    dinnerMenu.src = '../dist/images/res_3';
    dinnerMenu.setAttribute('id', 'dinner');

    const drinksMenu = document.createElement('img');
    drinksMenu.src = '../dist/images/res_4';
    drinksMenu.setAttribute('id', 'drinks');

    mobileMenuDiv.appendChild(lunchMenu);
    mobileMenuDiv.appendChild(dinnerMenu);
    mobileMenuDiv.appendChild(drinksMenu);

    return mobileMenuDiv;
}

function loadMenu() {
    // Close and clear other menus
    const homeMenu = document.getElementById('homeMenu');
    const contactMenu = document.getElementById('contactUsMenu');
    homeMenu.innerHTML = '';
    contactMenu.innerHTML = '';
    homeMenu.style.display = 'none';
    contactMenu.style.display = 'none';
    // open and clear this tab
    const menuTab = document.getElementById('menuMenu'); 
    menuTab.innerHTML = '';
    menuTab.style.display = 'flex';

    //normal menu
    const menuGrid = createMenu('menu-img');
    menuTab.appendChild(menuGrid);

    //mobile menus
    const mobileMenus = createMobileMenu();
    menuTab.appendChild(mobileMenus);
}

export default loadMenu;
