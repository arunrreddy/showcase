const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.querySelector('#count');
const total = document.querySelector('#total');
const movieSelect = document.querySelector('#movie');

let ticketPrice = parseInt(movieSelect.value, 10);

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    count.innerText = selectedSeats.length;
    total.innerText = selectedSeats.length * ticketPrice;
}

container.addEventListener('click', function(e) {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});

movieSelect.addEventListener('change', e => {
    ticketPrice = e.target.value;
    updateSelectedCount();
})