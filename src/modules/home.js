const createTextDiv = (id) => {
  const homeMenuText = document.createElement('div');
  homeMenuText.setAttribute('id', id);
  return homeMenuText;
};

const createHomePageHeading = (id) => {
  const headingDiv = document.createElement('div');
  headingDiv.className = 'heading-div';
  const heading = document.createElement('h2');
  heading.setAttribute('id', id);
  heading.setAttribute('class', 'heading');
  const niceUnderline = document.createElement('span');
  niceUnderline.className = 'underline--magical';
  niceUnderline.textContent = 'The Best Bangladeshi Restaurant';
  headingDiv.appendChild(niceUnderline);
  headingDiv.appendChild(heading);

  return headingDiv;
};

const createCopyContent = (id) => {
  const copy = document.createElement('p');
  copy.setAttribute('id', id);
  copy.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum efficitur maximus. '
  + 'Nulla mollis leo dui, et volutpat nulla ultrices ac. Ut venenatis quis felis aliquam porta. '
  + 'Morbi eu vulputate nulla. Mauris pulvinar, urna id rhoncus tempor, enim mauris porta mi, eget '
  + 'dignissim neque magna in arcu. Curabitur convallis nunc ac sollicitudin consectetur.';
  return copy;
};

const addImagesToHome = (className) => {
  const imgDiv = document.createElement('div');
  imgDiv.setAttribute('class', 'images');
  const imgOne = document.createElement('img');
  imgOne.setAttribute('class', className);
  imgOne.setAttribute('id', 'images');
  imgOne.src = '../dist/images/res_11.jpg';
  imgDiv.appendChild(imgOne);

  return imgDiv;
};

const addReservationButton = () => {
  const reservationButton = document.createElement('button');
  reservationButton.innerHTML = 'Make a Reservation';
  reservationButton.id = 'reservation-button';

  return reservationButton;
};

const loadHome = () => {
  const menuMenu = document.getElementById('menuMenu');
  const contactMenu = document.getElementById('contactUsMenu');
  menuMenu.innerHTML = '';
  contactMenu.innerHTML = '';
  menuMenu.style.display = 'none';
  contactMenu.style.display = 'none';
  const openTab = document.getElementById('homeMenu');
  openTab.innerHTML = '';
  openTab.style.display = 'flex';

  const textDiv = createTextDiv('home-text-box');
  const copy = createCopyContent('home-copy');
  const heading = createHomePageHeading('home-heading');
  const imgs = addImagesToHome('home-img');
  const button = addReservationButton('reservation');
  textDiv.appendChild(heading);
  textDiv.appendChild(copy);
  textDiv.appendChild(button);
  openTab.appendChild(imgs);
  openTab.appendChild(textDiv);
};

export default loadHome;
