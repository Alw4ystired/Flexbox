console.log("Funziono");

const overlay     = document.querySelector('.overlay');
const openModalBtn = document.getElementById('openModal');  
const closeBtn     = document.querySelector('.redCross'); 

// Apertura
function openModal(e) {
    if (e) e.preventDefault();
    overlay.classList.remove('closing'); // sicurezza se riaperto durante chiusura
    overlay.classList.add('active');
}

// Chiusura con animazione
function closeModal(e) {
    if (e) e.preventDefault();
    if (!overlay.classList.contains('active')) return; // già chiuso
    if (overlay.classList.contains('closing')) return; // già in chiusura

    overlay.classList.add('closing');

    overlay.addEventListener('animationend', function handler(ev) {
        if (ev.target !== overlay) return; // ignora eventi bubbled dal modal
        overlay.classList.remove('closing', 'active');
        overlay.removeEventListener('animationend', handler);
    });
}

openModalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);