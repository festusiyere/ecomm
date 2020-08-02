const toggler = document.querySelector('#toggler');
const header = document.querySelector('header');

toggler.addEventListener('click', () => {
    header.classList.toggle('open');
});