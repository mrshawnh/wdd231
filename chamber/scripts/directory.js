document.querySelector('#year').textContent = new Date().getFullYear();

let lastModified = new Date(document.lastModified);

document.querySelector('#lastModified').textContent = lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');
const businessGrid = document.querySelector('#businessGrid');
const businessList = document.querySelector('#businessList');
const url = "data/members.json"

async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);



    gridButton.addEventListener('click', () => {
        displayGrid(data.businesses);
    });

    listButton.addEventListener('click', () => {
        displayList(data.businesses);
    });





}




const displayGrid = (data) => {
    businessList.innerHTML = '';
    data.forEach((business) => {
        let div = document.createElement('div');

        div.innerHTML = `
            <h1>${business.name}</h1>
            <p>${business.address}</p>
            <p>${business.number}</p>
            <img src="${business.image}" alt=${business.name}>
            <a href="${business.url}">${business.url}</a>
        `;

        businessGrid.appendChild(div);
    });
};

getBusinessData();

const displayList = (data) => {
    businessGrid.innerHTML = '';
    data.forEach((business) => {
        let table = document.createElement('div');

        table.innerHTML = `
            <div>${business.name}</div>
            <div>${business.address}</div>
            <div>${business.number}</div>
            <div>${business.url}</div>
        `
        businessList.appendChild(table);


    });
}


