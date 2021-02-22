const createHeader = (id) => {
  const header = document.createElement('header');
  header.setAttribute('id', id);
  const logo = document.createElement('img');
  logo.setAttribute('id', 'logo');
  logo.src = '../dist/images/logo.png';
  header.appendChild(logo);

  return header;
}

const createNavRadio = (id, text) => {
  const tab = document.createElement('input');
  tab.type = 'radio';
  tab.checked = true;
  tab.name = 'tabs';
  tab.setAttribute('id', id);
  tab.textContent = text;

  return tab;
}

const createLabel = (id, text) => {
  const label = document.createElement('label');
  label.setAttribute('for', id);
  label.innerText = text;

  return label;
}

const createMenuDiv = (className, id) => {
  const menuDiv = document.createElement('div');
  menuDiv.setAttribute('id', id);
  menuDiv.setAttribute('class', className);
  const menuHeading = document.createElement('h3');
  menuDiv.appendChild(menuHeading);

  return menuDiv;
}

const createNavAndMenus = (className) => {
  const nav = document.createElement('div');
  nav.setAttribute('class', className);
  const homeLink = createNavRadio('home', 'Home');
  const menuLink = createNavRadio('menu', 'Menu');
  const contactUsLink = createNavRadio('contact-us', 'Contact Us');
  const homeLabel = createLabel('home', 'Home');
  homeLabel.id = 'home-tab';
  const menuLabel = createLabel('menu', 'Menu');
  menuLabel.id = 'menu-tab';
  const contactUsLabel = createLabel('contact-us', 'Contact Us');
  contactUsLabel.id = 'contact-tab';
  const homeMenu = createMenuDiv('tab', 'homeMenu');
  const menuMenu = createMenuDiv('tab', 'menuMenu');
  const contactUsMenu = createMenuDiv('tab', 'contactUsMenu');
  nav.appendChild(homeLink);
  nav.appendChild(homeLabel);
  nav.appendChild(homeMenu);
  nav.appendChild(menuLink);
  nav.appendChild(menuLabel);
  nav.appendChild(menuMenu);
  nav.appendChild(contactUsLink);
  nav.appendChild(contactUsLabel);
  nav.appendChild(contactUsMenu);

  return nav;
}

const createFooter = (id) => {
  const footer = document.createElement('footer');
  footer.setAttribute('id', id);

  return footer;
}

const pageLoad = () => {
  const content = document.querySelector('.content');
  const header = createHeader('header');
  const navBar = createNavAndMenus('tabs');
  header.appendChild(navBar);
  content.appendChild(header);
  const footer = createFooter('footer');
  content.appendChild(footer);
}

export default pageLoad;