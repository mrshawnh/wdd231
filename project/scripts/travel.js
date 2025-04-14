document.querySelector('#year').textContent = new Date().getFullYear();

let lastModified = new Date(document.lastModified);

document.querySelector('#lastModified').textContent = lastModified;



const url = 'data/transportation.json';
const travel = document.querySelector('.travel');

async function displayActivities() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    createActivities(data.vehicles);
}


displayActivities();

function createActivities(data) {
    data.forEach((activity) => {
        let div = document.createElement('div');
        let h = document.createElement('h3');
        let p = document.createElement('p');
        let photo = document.createElement('img');
        photo.src = activity.picture;
        photo.alt = activity.name;
        photo.loading = 'lazy';

        p.textContent = activity.description;
        h.textContent = activity.name;

        div.appendChild(h);
        div.appendChild(photo);
        div.appendChild(p);

        travel.appendChild(div);
    });

};
