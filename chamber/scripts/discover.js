document.querySelector('#year').textContent = new Date().getFullYear();

let lastModified = new Date(document.lastModified);

document.querySelector('#lastModified').textContent = lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const mydialog = document.querySelector('#mydialog');
const interests = document.querySelector('#interests');
const url = 'data/discover.json';
const h = document.querySelector('#mydialog h2');
const address = document.querySelector('#mydialog address');
const p = document.querySelector('#mydialog p');
const myclose = document.querySelector('#mydialog button');
myclose.addEventListener('click', () => mydialog.close());

async function displayInterests() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    createCards(data.places);
}


function createCards(data) {
    data.forEach((interest) => {
        let card = document.createElement('div');
        let photo = document.createElement('img');
        let openButton = document.createElement('button');
        openButton.innerHTML = 'Learn more';
        photo.src = interest.image;
        photo.alt = interest.name;
        photo.loading = 'lazy';

        openButton.addEventListener('click', () => showInfo(interest));

        card.appendChild(photo);
        card.appendChild(openButton);
        interests.appendChild(card);
    });
};

function showInfo(interest) {
    h.innerHTML = interest.name;
    address.innerHTML = interest.address;
    p.innerHTML = interest.description;
    mydialog.showModal();
}

displayInterests();