const iconHamburguer = document.querySelector('.hamburguer');
const iconClose = document.querySelector('.close');
const sidebar = document.querySelector('.aside_div');

iconHamburguer.addEventListener('click', () => {
sidebar.classList.toggle('active');
  iconHamburguer.style.display = 'none';
  iconClose.style.display = 'block';
});

iconClose.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  iconHamburguer.style.display = 'block';
  iconClose.style.display = 'none';
});