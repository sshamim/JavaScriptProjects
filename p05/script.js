// Getting DOM Elements
const main = document.getElementById('main');
const addUserButton = document.getElementById('add-user');
const doubleMoneyButton = document.getElementById('double');
const sortButton = document.getElementById('sort');
const filterMillionairesButton = document.getElementById('show-millionaire');
const totalButton = document.getElementById('calculate-total');



// Initializing Data Array of Objects
let data = [];

// Create Initial Users
generateRandomUser();
generateRandomUser();
generateRandomUser();


// Using Async-Await Function to Fetch data to populate the UI through random user generator API
// API: randomuser.me/api
async function generateRandomUser() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();

    const user = data.results[0];
   
  
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        worth: Math.round(Math.random() * 1000000)
    };

    // Calling a function to populate the Data Array
    addData(newUser);

};



// Add Newly Generated User into Data Array
function addData(newUser) {
    data.push(newUser);

  updateDOM();
};

// Function to Update the UI with DOM
// Without passing any parameter and hence using default value for the argument
function updateDOM(inputData = data) {

    // Refreshing existing data (if any)
    main.innerHTML = '<h2><strong>Name</strong>Net Worth</h2>';

    // Using For Each loop populate the UI with fetched data
    inputData.forEach( item => {

        // Adding a div element and assigning it to a constant variable
        const element = document.createElement('div');

        // Assigning a class to div element for css style application
        element.classList.add('name');

        // Adding HTML to Element
        element.innerHTML =  `<strong>${item.name}</strong>${formatCurrency(item.worth)}`;

        // Appending child element to make it visible on UI
        main.appendChild(element);
        
        
    });
        
};


// Function to format a number as Currency
function formatCurrency(num) {
    return 'PKR ' + (num).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

// Functions to use High Order Array Methods
// Function to double the Net Worth of each Individual 
function doubleWorth() {
    // Using map function
    data = data.map( item => {
        // Returning same Object using Spread Operator and overriding item's worth
        return { ...item, worth: item.worth*2 }
    })

    updateDOM();
}; 


// Function to sort the users by Richest
function sortRichest() {
    // Using Sort with Compare function to sort numeric values in Descending Order
    data.sort( ( a, b ) => b.worth - a.worth);

    updateDOM();

};


// Function to filter the users and only show Millionaires
function showMillionaires() {
    data = data.filter(
        item => item.worth > 1000000
    );

    updateDOM();
};


// Function to calculate the total Net Worth of all users 
function calculateTotalNetWorth() {

    // Using reduce method (which returns a single value instead of an array)
    const totalWorth = data.reduce(
        (acc, item) => (acc += item.worth), 0
    );

    const totalNetWorthElement = document.createElement('div');
    totalNetWorthElement.innerHTML = `<h3> Total Net Worth: <strong>${formatCurrency(totalWorth)}</strong></h3>`;
    main.appendChild(totalNetWorthElement);
  
};



// Event Listeners
// 1. Add User Event Listener
addUserButton.addEventListener('click', generateRandomUser);

// 2. Add Double Money Event Listener
doubleMoneyButton.addEventListener('click',doubleWorth );

// 3. Add Sort Event Listener
sortButton.addEventListener('click', sortRichest);

// 4. Add Show Millionaire Event Listener
filterMillionairesButton.addEventListener('click', showMillionaires);

// 5. Add Calculat Total Wealth Event Listener
totalButton.addEventListener('click', calculateTotalNetWorth);

