const createContactCopy = () => {
  const copyTextDiv = document.createElement('div');
  copyTextDiv.setAttribute('id', 'contact-copy-div');
  copyTextDiv.setAttribute('class', 'fade-in-right');
  const contactUsHeading = document.createElement('h1');
  contactUsHeading.textContent = 'We Are Here.';
  contactUsHeading.setAttribute('id', 'contact-us-heading');
  const days = document.createElement('p');
  const hours = document.createElement('p');
  const address = document.createElement('p');
  days.setAttribute('id', 'days');
  hours.setAttribute('id', 'hours');
  address.setAttribute('id', 'address');
  days.textContent = 'Friday - Thursday';
  hours.textContent = 'Lunch: 12pm - 4pm  |  Dinner: 6pm - 11pm';
  address.textContent = '127 Satmasjid Road, Dhanmondi, Dhaka';
  copyTextDiv.appendChild(contactUsHeading);
  copyTextDiv.appendChild(days);
  copyTextDiv.appendChild(hours);
  copyTextDiv.appendChild(address);

  return copyTextDiv;
};

const addImage = () => {
  const contactUsImg = document.createElement('img');
  contactUsImg.setAttribute('id', 'contact-img');
  contactUsImg.src = '../dist/images/res_8.jpg';
  return contactUsImg;
};

const loadContactPage = () => {
  const homeMenu = document.getElementById('homeMenu');
  const menuMenu = document.getElementById('menuMenu');
  homeMenu.innerHTML = '';
  menuMenu.innerHTML = '';
  homeMenu.style.display = 'none';
  menuMenu.style.display = 'none';
  const contactUsTab = document.getElementById('contactUsMenu');
  contactUsTab.innerHTML = '';
  contactUsTab.style.display = 'flex';
  const textBox = createContactCopy();
  contactUsTab.appendChild(textBox);
  const rooftopBarImg = addImage();
  rooftopBarImg.setAttribute('id', 'bar-img');
  contactUsTab.appendChild(rooftopBarImg);
  const mobileImg = document.createElement('img');
  mobileImg.setAttribute('id', 'mobile-img');
  mobileImg.src = '../dist/imgages/rooftop-bar.jpg';

  contactUsTab.appendChild(mobileImg);
};

export default loadContactPage;
