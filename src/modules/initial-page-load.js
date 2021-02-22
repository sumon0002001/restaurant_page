function createHeader(id) {
  const header = document.createElement('header');
  header.setAttribute('id', id);
  const logo = document.createElement('img');
  logo,setAttribute('id', logo);
  logo.src = '../dist/images/logo.png';
  header.appendChild(logo);

  return header;
}

function createNavRadio(id, text) {
  const tab = document.createElement('input');
  tab.type = 'radio';
  tab.checked = true;
  tab.name = 'tabs';
  tab.setAttribute('id', id);
  tab.textContent = text;
  return tab;    
}

