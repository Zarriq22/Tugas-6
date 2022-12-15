//navigasi humburger
const menuToggle = document.querySelector('#menu-toggle input');
const nav= document.querySelector('.navbar-humburger');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('hidden')
})

//button pop-up
const btnPopUp = document.querySelectorAll('.btn-get');
const tampil = document.querySelector('.get-start');
const keluar = document.querySelector('.btn-close');

for (let i = 0; i < btnPopUp.length; i++) {
    btnPopUp[i].addEventListener('click', function (){
        tampil.classList.remove('hidden')
    });
};

keluar.addEventListener('click', function() {
    tampil.classList.add('hidden')
})

//search pop-up
const search = document.querySelectorAll('.btn-search');
const cari = document.querySelector('.get-search');

for (let i = 0; i < search.length; i++) {
    search[i].addEventListener('click', function() {
        cari.classList.toggle('hidden')
    })
};


