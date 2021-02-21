function createTextDiv(id) {
    const homeMenuText =  document.createElement('div');
    homeMenuText.setAttribute('id', id);
    return homeMenuText;
}

function createHomePageHeading(id) {
    const headingDiv = document.createElement('div');
    headingDiv.className = 'heading-div';

    const heading = document.createElement('h2');
    heading.innerHTML = 'This is the best Banglafeshi ';
    heading.setAttribute('id', id)
    heading.setAttribute('class', 'heading');

    const niceUnderline = document.createElement('span');
    niceUnderline.className = 'underline-magical';
    niceUnderline.textContent = 'BD-Food';

    headingDiv.appendChild(heading);
    headingDiv.appendChild(niceUnderline);

    return headingDiv;
}

function craeteCopyContent(id) {
    const copy = document.createElement('p');
    copy.setAttribute('id', id)
    copy.textContent = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

    return copy;
}

function addImagesToHome(className) {
    const imgDiv = document.createElement('div');
    imgDiv.setAttribute('class', 'images');

    const imgOne = document.createElement('img');
    
    imgOne.setAttribute('class', className)
    imgOne.setAttribute('id', 'images');

    imgOne.src = '../dist/images/combined-images.svg';

    imgDiv.appendChild(imgOne);

    return imgDiv;
}

function addReservationButton(className) {
    const reservationButton = document.createElement('button');
    reservationButton.className = className;
    reservationButton.innerHTML = 'Make a Reservation';
    reservationButton.id = 'reservation-button'
    return reservationButton;
}

function loadHome() {
    const menuMenu = document.getElementById('menuMenu');
    const contactMenu = document.getElementById('contactUsMenu');
    menuMenu.innerHTML = '';
    contactMenu.innerHTML = '';
    menuMenu.style.display = none;
    contactMenu.style.display = none;

    const openTab = document.getElementById('homeMenu');
    openTab.innerHTML = '';
    openTab.style.display = 'flex';

    const textDiv = createTextDiv('home-text-box');
    const copy = craeteCopyContent('home-copy');
    const heading = createHomePageHeading('home-heading');
    const imgs= addImagesToHome('home-img');
    const button = addReservationButton('reservation');

    textDiv.appendChild(heading);
    textDiv.appendChild(copy);
    textDiv.appendChild(button);
    openTab.appendChild(imgs);
    openTab.appendChild(textDiv);
}

export default loadHome;