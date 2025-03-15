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
const businesses = document.querySelector('.businesses');
const url = 

async function getBusinessData(){
    const response

}
const createGrid = (data)