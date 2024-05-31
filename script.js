// SELECTORS
const inputs = document.querySelectorAll('.input')
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const signUpBtn = document.querySelector('#signUpBtn');

// VARIABLE
const data = []

// FUNCTION TO GET DATA FROM INPUT FIELDS
function getData(name, email, password, confirmPassword) {
    const values = {
        name: name.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value
    }
    return values
}

// EVENTLISTNER TO PUSH DATA INTO ARRAY OF OBJECT
signUpBtn.addEventListener('click', () => {
    const value = getData(name, email, password, confirmPassword)
    console.log(value);
    if (value.password === value.confirmPassword) {
        data.push(value);
        console.log(data);
    }

    console.log(password);
    console.log(confirmPassword);

})

function checkInput() {
    let allFilled = true;
    inputs.forEach(input => {
        if (!input.value.trim()) {
            allFilled = false;
            signUpBtn.classList.remove('enabled')
        }
    });
    signUpBtn.disabled = !allFilled;
    if (!signUpBtn.disabled) {
        signUpBtn.classList.add('enabled')
    }
    console.log(signUpBtn.disabled);
}

// EVENT LISTENERS FOR INPUT FIELDS
inputs.forEach(input => {
    input.addEventListener('input', checkInput)
});

// INITIAL CHECK TO DISABLE BUTTON IF FIELDS ARE EMPTY
checkInput();