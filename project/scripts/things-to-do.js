document.querySelector('#year').textContent = new Date().getFullYear();

let lastModified = new Date(document.lastModified);

document.querySelector('#lastModified').textContent = lastModified;

const url = 'data/things-to-do.json';
const seciton1 = document.querySelector('#things-to-do');
const mydialog = document.querySelector('#things-to-do dialog');
const h = document.querySelector('#things-to-do dialog h2');
const p = document.querySelector('#things-to-do dialog p');
const myclose = document.querySelector('#closebutton');
myclose.addEventListener('click', () => mydialog.close());

async function displayActivities() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    createActivities(data.activities);
}


displayActivities();

function createActivities(data) {
    data.forEach((activity) => {
        let photo = document.createElement('img');
        photo.src = activity.image;
        photo.alt = activity.name;
        photo.loading = 'lazy';

        photo.addEventListener('click', () => showInfo(activity));

        seciton1.appendChild(photo);
    })

}

function showInfo(interest) {
    h.innerHTML = interest.name;
    p.innerHTML = interest.description;
    mydialog.showModal();
}
