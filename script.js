// SELECTORS
const signUpInputs = document.querySelectorAll('.signUp-inputs');
const name = document.querySelector('#name');
const signUpEmail = document.querySelector('#signUpEmail');
const signUpPassword = document.querySelector('#signUpPassword');
const confirmPassword = document.querySelector('#confirmPassword');
const signUpBtn = document.querySelector('#signUpBtn');

signUpBtn.addEventListener('click', () => {
    const getValues = getData(name, signUpEmail, signUpPassword, confirmPassword);

    data.push(getValues);

})



// FUNCTION TO GET DATA FROM SIGN UP INPUTS
function getData(n, se, sp, cp) {
    const value = {
        name: n.value,
        email: se.value,
        password: sp.value,
        confirmPassword: cp.value
    }

    n.value = ''
    se.value = ''
    sp.value = ''
    cp.value = ''

    return value
}