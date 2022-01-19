const balance = document.getElementById('balance');
const moneyPlus = document.getElementById('money-plus');
const moneyMinus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));


let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

function addTransaction(e) {
    e.preventDefault();
    if (!text.value.trim() || !amount.value.trim()) {
        alert('Please add a text and amount');
    } else {
        const transaction = {
            id: generateId(),
            text: text.value,
            amount: parseInt(amount.value, 10)
        };
        transactions.push(transaction);
        addTransactionDOM(transaction);
        updateValues();
        updateLocalStorage();
        text.value = '';
        amount.value = '';
    }
}

function generateId() {
    return Math.floor(Math.random() * 10000000);
}

function addTransactionDOM(transaction) {
    const sign = transaction.amount > 0 ? '+' : '-';
    const item = document.createElement('li');
    item.classList.add(sign === '+' ? 'plus' : 'minus');
    item.innerHTML = `
        ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span><button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
    `;
    list.appendChild(item);
}

function updateValues() {
    const amounts = transactions.map(item => item.amount);
    const balanceAmount = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    balance.innerHTML = `$${balanceAmount}`;
    const expense = amounts.filter(amount => amount < 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const income = amounts.filter(amount => amount > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    moneyMinus.innerText = `-$${Math.abs(expense)}`;
    moneyPlus.innerText = `$${income}`;
}

function removeTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);
    updateLocalStorage();
    init();
}

function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

function init() {
    list.innerHTML = '';
    transactions.forEach(addTransactionDOM);
    updateValues();
}

init();

form.addEventListener('submit', addTransaction);
