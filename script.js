// SELECTORS
const signInForm = document.querySelector('#signInForm')
const signUpForm = document.querySelector('#signUpForm')
const tabs = document.querySelectorAll('.heading');
const signInInputs = document.querySelectorAll('.signIn-input');
const signUpInputs = document.querySelectorAll('.signUp-input');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const signInBtn = document.querySelector('#signInBtn');
const signUpBtn = document.querySelector('#signUpBtn');

// VARIABLE
const data = []

// REGEXES
const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(otherTab => {
            if (tab !== otherTab) {
                otherTab.classList.remove('border-bottom');
                const form = otherTab.dataset.id
                if (form === 'signInForm') {
                    signInForm.style.display = 'none'
                    signUpForm.style.display = 'grid'
                } else {
                    signInForm.style.display = 'grid'
                    signUpForm.style.display = 'none'

                }
            }
        })
        tab.classList.add('border-bottom');
    })
})

// EVENTLISTNER TO PUSH DATA INTO ARRAY OF OBJECT
signUpBtn.addEventListener('click', () => {
    const value = getData(name, email, password, confirmPassword)
    console.log(emailRegex.test(value.email));
    if (value.password === value.confirmPassword) {
        data.push(value);
    }
    checkInput(signUpInputs, signUpBtn);
})

// EVENT LISTENERS FOR SIGN IN INPUT FIELDS
signInInputs.forEach(input => {
    input.addEventListener('input', () => checkInput(signInInputs, signInBtn))
});

// EVENT LISTENERS FOR SIGN UP INPUT FIELDS
signUpInputs.forEach(input => {
    input.addEventListener('input', () => checkInput(signUpInputs, signUpBtn))
});

// INITAIL CHECK TO DISABLE BUTTON IF FIELDS ARE EMPTY
checkInput(signInInputs, signInBtn);
checkInput(signUpInputs, signUpBtn);

function checkInput(input, btn) {
    let allFilled = true;
    input.forEach(input => {
        if (!input.value.trim()) {
            allFilled = false;
            btn.classList.remove('enabled')
        }
    });
    btn.disabled = !allFilled;
    if (!btn.disabled) {
        btn.classList.add('enabled')
    }
    console.log(btn.disabled);
}

// FUNCTION TO GET DATA FROM INPUT FIELDS
function getData(name, email, password, confirmPassword) {
    const values = {
        name: name.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value
    }

    name.value = ''
    email.value = ''
    password.value = ''
    confirmPassword.value = ''
    return values
}