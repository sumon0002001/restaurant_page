
function createTextDiv(id) {
    const homeMenuText = document.createElement('div');
    homeMenuText.setAttribute('id', id);
    return homeMenuText;
}

function createHomePageHeading(id) {
    const headingDiv = document.createElement('div');
    headingDiv.className = "heading-div";
    
    const heading = document.createElement('h2');
    heading.innerText = "This is "; 
    heading.setAttribute('id', id);
    heading.setAttribute('class', 'heading');

    const niceUnderline = document.createElement('span');
    niceUnderline.className = "underline--magical";
    niceUnderline.textContent = "The Pizza Bar";

    headingDiv.appendChild(heading);
    headingDiv.appendChild(niceUnderline);    

    return headingDiv;
}

function createCopyContent(id) {
    const copy = document.createElement('p');
    copy.setAttribute('id', id);
    copy.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum efficitur maximus. " + 
                        "Nulla mollis leo dui, et volutpat nulla ultrices ac. Ut venenatis quis felis aliquam porta. " + 
                        "Morbi eu vulputate nulla. Mauris pulvinar, urna id rhoncus tempor, enim mauris porta mi, eget " 
                        "dignissim neque magna in arcu. Curabitur convallis nunc ac sollicitudin consectetur.";
    return copy;
}

function addImagesToHome(className) {
    const imgDiv = document.createElement('div');
    imgDiv.setAttribute('class', 'images');

    const imgOne = document.createElement('img');

    imgOne.setAttribute('class', className);
    imgOne.setAttribute('id', 'images');

    imgOne.src = '../dist/imgs/combined-images.svg';

    imgDiv.appendChild(imgOne);
   
    return imgDiv;
}

function addReservationButton(className) {
    const reservationButton = document.createElement('button');
    reservationButton.className = className;
    reservationButton.innerHTML = "Make a Reservation";
    reservationButton.id = "reservation-button"
    return reservationButton;
}

function loadHome() {
    // Close and clear other menus
    const menuMenu = document.getElementById('menuMenu');
    const contactMenu = document.getElementById('contactUsMenu');
    menuMenu.innerHTML = "";
    contactMenu.innerHTML = "";
    menuMenu.style.display = 'none';
    contactMenu.style.display = 'none';
    
    // open and clear this tab
    const openTab = document.getElementById('homeMenu');
    openTab.innerHTML = "";
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
}

export default loadHome;
