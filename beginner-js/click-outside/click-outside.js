const cardButtons = document.querySelectorAll('.card');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');
function handleCardButtonClick(event) {
    const button = event.currentTarget;
    const card = button.closest('.card');
    const imgSrc = card.querySelector('img').src;
    const desc = card.dataset.description;
    const name = card.querySelector('h2').textContent;

    modalInner.innerHTML = `
    <img width="600" height="600" src="${imgSrc.replace(200, 600)}" alt="${name}"/>
    <p>${desc}</p>`;

    modalOuter.classList.add('open');
}

cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick));

function closeModal() {
    modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', event => {
    const isInside = event.target.closest('.modal-inner');
    if (!isInside) {
        closeModal();
    }
});

window.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Learnings
// Modal outer and inner to make a modal
// Hide modal using opacity as 0 and pointer-events as none. Can use display as none as well
// Show modal using opacity as 1 and pointer-events as all
// Use .closest to find closest element of kind
// If no closet element returns null

