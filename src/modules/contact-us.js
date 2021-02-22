function createContactCopy() {
    const copyTextDiv = document.createElement('div');
    copyTextDiv.setAttribute('id', 'contact-copy-div');
    copyTextDiv.setAttribute('class', 'fade-in-right');

    const contactUsHeading = document.createElement('h1');
    contactUsHeading.textContent = "Find Us Here"
    contactUsHeading.setAttribute('id', 'contact-us-heading')
    const days = document.createElement('p');
    const hours = document.createElement('p');
    const address = document.createElement('p');
    days.setAttribute('id', 'days')
    hours.setAttribute('id', 'hours');
    address.setAttribute('id', 'address');
    days.textContent = "Saturday - Friday";
    hours.textContent = "Lunch: 1pm - 4pm  |  Dinner: 7pm - 10pm"
    address.textContent = "34/3, Satmasjid Road, Dhanmondi, Dhaka, Bangladesh."

    copyTextDiv.appendChild(contactUsHeading);
    copyTextDiv.appendChild(days);
    copyTextDiv.appendChild(hours);
    copyTextDiv.appendChild(address);

  return copyTextDiv;
}

function addImage() {
  const contatctUsImg = document.createElement('img');
  contatctUsImg.setAttribute('id', 'contact-img');
  contatctUsImg.src = '../dist/images/res_4.jpg';

  return contatctUsImg;
}

function loadContactPage() {
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
    contatctUsImg.appendChild(rooftopBarImg);
    const mobileImg = document.createElement('img');
    mobileImg.setAttribute('id', 'mobile-img');
    mobileImg.src = '../dist/imgs/rooftop-bar.jpg';
    contactUsTab.appendChild(mobileImg)
}

export default loadContactPage;