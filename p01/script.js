// Get Form Elements into constant variables
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// All Functions
// Function to check if requireds fields have data
function checkRequired(inputArray){
    //Calling high ordered array method forEach
    inputArray.forEach(function(input){
        if( input.value === '' ){

            // Calling Error function using Template Literals
            showError(input,`${getFieldId(input)} is required`);
        } else {
            showSuccess(input);
        }
    })
}

// Function to get the id of the input field with proper case
function getFieldId(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

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
function checkEmail(input) {

    // Using regular expression to check email format
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ( re.test(input.value.trim().toLowerCase()) ) {
        showSuccess(input);
    } else {
        showError(input,'Please provide a valid Email');
    }
}

// Function for ensuring proper length of fields
function checkLength(input, min, max) {
    if( input.value.length < min ) {
        showError(input, `${getFieldId(input)} cannot be less than ${min} characters`);
    } else if( input.value.length > max ) {
        showError(input, `${getFieldId(input)} cannot be more than ${max} characters`);
    } else {
        showSuccess(input);
    }
      
}

// Function to check Password and Confirm Password match
function checkPasswordsMatch(input1, input2) {
    if ( input1.value !== input2.value) {
        showError(input2, "Passwords don't match")
    } 
}



// Adding Event Listener for form on Submit event
form.addEventListener ('submit', function(e){

    // Stopping the reload of form upon submit event 
    e.preventDefault();

    //Calling a function using Array to check fields are not empty
    checkRequired([username,email,password,password2]);

    //Calling a function to check minimum and maximum length of fields
    checkLength(username, 3, 10);
    checkLength(password, 6, 30);
    checkEmail(email);
    checkPasswordsMatch(password,password2);
})