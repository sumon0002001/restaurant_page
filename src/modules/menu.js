const createMenu = (className) => {
  const parentDiv = document.createElement('div');
  parentDiv.className = 'menu-parent';
  const menu = document.createElement('img');
  menu.setAttribute('class', className);
  menu.src = '../dist/images/res_3.jpg';
  parentDiv.appendChild(menu);

  return parentDiv;
};

const createMobileMenu = () => {
  const mobileMenuDiv = document.createElement('div');
  mobileMenuDiv.setAttribute('class', 'mobile-menu');
  const lunchMenu = document.createElement('img');
  lunchMenu.src = '../dist/images/res_2.jpg';
  lunchMenu.setAttribute('id', 'lunch');
  const dinnerMenu = document.createElement('img');
  dinnerMenu.src = '../dist/images/res_3.jpg';
  dinnerMenu.setAttribute('id', 'dinner');
  const drinksMenu = document.createElement('img');
  drinksMenu.src = '../dist/images/res_4.jpg';
  drinksMenu.setAttribute('id', 'drinks');
  mobileMenuDiv.appendChild(lunchMenu);
  mobileMenuDiv.appendChild(dinnerMenu);
  mobileMenuDiv.appendChild(drinksMenu);

  return mobileMenuDiv;
};

const loadMenu = () => {
  const homeMenu = document.getElementById('homeMenu');
  const contactMenu = document.getElementById('contactUsMenu');
  homeMenu.innerHTML = '';
  contactMenu.innerHTML = '';
  homeMenu.style.display = 'none';
  contactMenu.style.display = 'none';
  const menuTab = document.getElementById('menuMenu');
  menuTab.innerHTML = '';
  menuTab.style.display = 'flex';
  const menuGrid = createMenu('menu-img');
  menuTab.appendChild(menuGrid);
  const mobileMenus = createMobileMenu();
  menuTab.appendChild(mobileMenus);
};

export default loadMenu;
