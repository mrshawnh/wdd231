document.querySelector('#year').textContent = new Date().getFullYear();

let lastModified = new Date(document.lastModified);

document.querySelector('#lastModified').textContent = lastModified;

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const button4 = document.querySelector('#button4');

const mydialog = document.querySelector('#mydialog')
const dialogtext = document.querySelector('#mydialog p');
const closeButton = document.querySelector('#closeButton');



button1.addEventListener('click', () => {
    dialogtext.innerHTML = `Bronze Members get special event postings on our website.`;
    mydialog.showModal();

});

button2.addEventListener('click', () => {
    dialogtext.innerHTML = `Silver Members get special event postings on our website,
                    and event coverage via a page.`;
    mydialog.showModal();
});

button3.addEventListener('click', () => {
    dialogtext.innerHTML = `Gold Members get special event postings on our website,
                    event coverage via a page, and event spotlights on our homepage.`;
    mydialog.showModal();
});

button4.addEventListener('click', () => {
    dialogtext.innerHTML = `The NP Membership a.k.a. "The Non-Profit Membership" is our
                    special membership designed for Non-Profits and has the same
                    perks as Gold members.`;
    mydialog.showModal();
});

closeButton.addEventListener('click', () => {
    mydialog.close()
});

