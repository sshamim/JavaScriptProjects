// Get relevant DOM elements that needs to be worked upon

const container = document.querySelector('.container'); // Use querySelector to get the single element by its class
const seats = document.querySelectorAll('.row .seat:not(.reserved)'); // Use querySelectorAll to get multiple elements by its class
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value; // Adding '+' sign infront to convert string value to number

populateUI(); // Calling a Function to populate the UI upon page load based on local storage data
updateSelectedCount(); // Calling a Function to calculate initial number of seats and total price based on local storage data



// Function to pull data from local storage to build UI 
function populateUI() {

    // Getting values from local Storage using conversion of String into Array
    // through JSON.parse
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach( (seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

// Function to update counts for selected seats
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const countSelectedSeats = selectedSeats.length;
    
    // Converting Nodelist into Array to be able to use them as Strings for 
    // local storage using Spread operator [...] and another high order Array
    // method (map) and then using its function which should return the index of 
    // selected seat.
    // Note: We can remove return keyword from arrow function along with curly
    // braces if the function is returning a single value
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

    // Storing values in local Storage in key/value pair using conversion of Array
    // into String through JSON.stringify
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    // Update counts to show the changed values based on selection
    count.innerText = countSelectedSeats;  
    total.innerText = ticketPrice * countSelectedSeats;
}

// Function to save selected movie and its price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}


// Create an Event Listener on Available Seats using arrow function
container.addEventListener('click', (e) => {
    
    // Check which element inside of the container is clicked
    // console.log(e.target);

    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {
        e.target.classList.toggle('selected');
        updateSelectedCount(); // Call Update function
    }
    
})


// Create an Event Listener on Movie Selection
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value; 

    setMovieData(e.target.selectedIndex, e.target.value); // Calling a function and passing index value & price of selected movie using selectedIndex method
    
    updateSelectedCount(); // Call Update function
})

