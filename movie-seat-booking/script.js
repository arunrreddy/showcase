const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.querySelector('#count');
const total = document.querySelector('#total');
const movieSelect = document.querySelector('#movie');
populateUI();
let ticketPrice = parseInt(movieSelect.value, 10);

function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const seatsIndex = [...selectedSeats].map(seat => {
        return [...seats].indexOf(seat)
    });
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));


    count.innerText = selectedSeats.length;
    total.innerText = selectedSeats.length * ticketPrice;
}

function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    if (selectedSeats != null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        })
    }
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}
container.addEventListener('click', function(e) {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        const movieIndex = movieSelect.selectedIndex;
        const moviePrice = movieSelect.value;
        setMovieData(movieIndex, moviePrice);
        updateSelectedCount();
    }
});

movieSelect.addEventListener('change', e => {
    ticketPrice = e.target.value;
    updateSelectedCount();
})

updateSelectedCount();