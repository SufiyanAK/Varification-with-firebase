// SELECTORS
// SIGN UP SELECTORS
const signUpInputs = document.querySelectorAll('.signUp-inputs');
const name = document.querySelector('#name');
const signUpEmail = document.querySelector('#signUpEmail');
const signUpPassword = document.querySelector('#signUpPassword');
const confirmPassword = document.querySelector('#confirmPassword');
const signUpBtn = document.querySelector('#signUpBtn');
const signUpForm = document.querySelector('#signUpForm');
const signUpFormBtn = document.querySelector('#signUpFormBtn');

// SIGN IN SELECTORS
const signInInputs = document.querySelectorAll('.signIn-inputs');
const signInEmail = document.querySelector('#signInEmail');
const signInPassword = document.querySelector('#signInPassword');
const signInBtn = document.querySelector('#signInBtn');
const signInForm = document.querySelector('#signInForm');
const signInFormBtn = document.querySelector('#signInFormBtn');

// VARIABLES
const data = []
const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// SIGNUP INPUTS EVENTLISTNER TO CHECK FOR EMPTY INPUT
signUpInputs.forEach(input => {
    input.addEventListener('input', () => checkInput(signUpInputs, signUpBtn))
})

// SIGNUP BTN EVENTLISTNER
signUpBtn.addEventListener('click', () => {
    const getValues = getData(name, signUpEmail, signUpPassword, confirmPassword);

    const valid = checkValidation(getValues);

    if (valid) {
        data.push(getValues);

        name.value = '';
        signUpEmail.value = '';
        signUpPassword.value = '';
        confirmPassword.value = '';
    }

})

// FUNCTION TO GET DATA FROM SIGN UP INPUTS
function getData(n, se, sp, cp) {
    return {
        name: n.value,
        email: se.value,
        password: sp.value,
        confirmPassword: cp.value
    }
}

// FUNCTION TO CHECK EMPTY SIGN UP INPUTS
function checkInput(input, btn) {
    let allFilled = true;

    input.forEach(input => {
        if (!input.value.trim()) {
            allFilled = false;
            btn.classList.add('not-filled');
        }
    });

    btn.disabled = !allFilled;

    if (!btn.disabled) {
        btn.classList.remove('not-filled')
    }
}

// FUNCTION TO CHECK EMAIL VALIDATION AND PASSWORD CONFIRMATION
function checkValidation(data) {

    const { email, password, confirmPassword } = data;

    if (!emailRegEx.test(email) || password !== confirmPassword) {
        return false;
    }

    return true;
}