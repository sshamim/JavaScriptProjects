// Getting DOM Elements
const counOnePicker = document.getElementById("country-one");
const counTwoPicker = document.getElementById("country-two");
const counAmountOne = document.getElementById("amount-one");
const counAmountTwo = document.getElementById("amount-two");
const flipButton = document.getElementById("flip");
const rate = document.getElementById("rate");



// Function to fetch exchange rate from 3rd party API and update DOM accordingly
// www.exchangerate-api.com
function calculate() {
    const currencyOneCode = counOnePicker.value;
    const currencyTwoCode = counTwoPicker.value;

  fetch(
    `https://v6.exchangerate-api.com/v6/3ad96735c5ff3277ba8a670e/latest/${currencyOneCode}`) 
        .then( res => res.json() )
        .then( data => {

            // Get the Exchange Rate from API data
            const exchangeRate = data.conversion_rates[currencyTwoCode];

            // Display Conversion Rates
            rate.innerText = `1 ${currencyOneCode} = ${exchangeRate} ${currencyTwoCode}`;
            
            // Apply Conversion Rates & Update Target Currency Amount
            counAmountTwo.value = (counAmountOne.value * `${exchangeRate}`).toFixed(2);
            
            }
        );
        
}

// Function to swap currencies
function flip(){
    const temp = counOnePicker.value;
    counOnePicker.value = counTwoPicker.value;
    counTwoPicker.value = temp;

   
    calculate();
    
}



// Event Listeners
counOnePicker.addEventListener("change", calculate);
counTwoPicker.addEventListener("change", calculate);
counAmountOne.addEventListener("change", calculate);
counAmountTwo.addEventListener("change", calculate);
flipButton.addEventListener("click", flip);


calculate();
