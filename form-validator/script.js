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


form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (username.value === '') {
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }

    if (email.value === '') {
        showError(email, 'Email is required');
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Email is invalid');
    } else {
        showSuccess(email);
    }
    if (password.value === '') {
        showError(password, 'Password is required');
    } else {
        showSuccess(password);
    }
    if (password2.value === '') {
        showError(password2, 'Confirm password is required');
    } else {
        showSuccess(password2);
    }
});
