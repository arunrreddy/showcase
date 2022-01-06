const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

function showError(element, message) {
    const formControlElem = element.parentElement;
    formControlElem.className = 'form-control error';
    const errorElem = formControlElem.querySelector('small');
    errorElem.innerText = message;
}

function showSuccess(element) {
    const formControlElem = element.parentElement;
    formControlElem.className = 'form-control success';
}

function checkEmail(email) {
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(String(email.value.trim()).toLowerCase())) {
        showSuccess(email);
    } else {
        showError(input, `${email.name} is not valid`);
    }
}

function checkRequired(inputs) {
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            showError(input, `${input.name} is required`);
        } else {
            showError(input);
        }
    })
}

function checkLength(input, min, max) {
    if (input.value.trim().length < min) {
        showError(input, `${input.name} must be at least ${min} characters`);
    } else if (input.value.trim().length > max) {
        showError(input, `${input.name} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input1, 'Passwords do not match');
        showError(input2, `Passwords do not match`);
    } else {
        showSuccess(input2);
        showSuccess(input1);
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 3, 6);
    checkEmail(email);
    checkPasswordMatch(password, password2);
});
