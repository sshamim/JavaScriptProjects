// Get Form Elements into constant variables
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// All Functions
// Function to show Error
function showError(input, message) {

    // Getting Parent Element of input field
    const formControl = input.parentElement;

    // Overriding Parent Element's class name
    formControl.className = 'form-control error';

    // Getting child Element small for Error Message
    const small = formControl.querySelector('small');

    // Assigning message to small Element's text
    small.innerText = message;
}

// Functon to show Success  
function showSuccess(input) {
    // Getting Parent Element of input field
    const formControl = input.parentElement;

    // Overriding Parent Element's class name
    formControl.className = 'form-control success';
}

// Function to check if Email is Valid
function isValidEmail (email){

    // Using regular expression to check email format
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



// Adding Event Listener for form on Submit event
form.addEventListener ('submit', function(e){

    // Stopping the reload of form upon submit event 
    e.preventDefault();

    // Checking if fields are empty and display error message accordingly
    if ( username.value === '' ) {
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }     
    
    if ( email.value === '' ) {
        showError(email, 'Email is required');
    } else if ( !isValidEmail(email.value)) {
        showError(email, 'Email is invalid');
    } else {
        showSuccess(email);
    } 

    if ( password.value === '' ) {
        showError(password, 'Password is required');
    } else {
        showSuccess(password);
    } 

    if ( password2.value === '' ) {
        showError(password2, 'Password2 is required');
    } else {
        showSuccess(password2);
    } 

})






