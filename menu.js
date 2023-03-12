const navbar = document.querySelector('.navbar');
const toggleNavbarButton = document.querySelector('#toggleNavbarButton');

toggleNavbarButton.addEventListener('click', function() {
  navbar.classList.toggle('hidden');
});