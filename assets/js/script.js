console.log("Funziono");
const openModal = document.getElementById('openModal');
const closeModal = document.querySelector('.closeModal');
const overlay = document.querySelector('.overlay');

openModal.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.classList.add('active');
});

closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.classList.remove('active');
});

