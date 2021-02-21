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