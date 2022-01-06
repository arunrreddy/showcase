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

function isValidEmail(email) {
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
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

form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkRequired([username, email, password, password2]);

});
