const main = document.getElementById('main');
const addUser = document.getElementById('add-user');
const doubleMoney = document.getElementById('double');
const showMillionaires = document.getElementById('show-millionaires');
const sortPeople = document.getElementById('sort');
const calculateWealth = document.getElementById('calculate-wealth');

let data = [];

async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    const user = data.results[0];
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    };
    addData(newUser);
}

function addData(obj) {
    data.push(obj);
    updateDom();
}

function updateDom(providedData = data) {
    main.innerHTML = '<h2><strong>Person</strong>Wealth</h2>';
    providedData.forEach((item, index) => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
        main.appendChild(element);
    });
}

function formatMoney(number) {
    return (number.toFixed(2)).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
}

function doubleUserMoney() {
    data = data.map(item => ({ ...item, money: item.money * 2 }));
    updateDom(data);
}

function sortMoney() {
    data = data.sort((itemA, itemB) => itemB.money - itemA.money);
    updateDom();
}

function showMillionairePeople() {
    const filterData = data.filter(item => item.money > 1000000);
    updateDom(filterData);
}

function calculateEntireWealth() {
    const total = data.reduce((sum, curr) => sum += curr.money, 0);
    const wealthElem = document.createElement('div');
    wealthElem.innerHTML = `<h3>Total Wealth: <strong>${total}</strong></h3>`;
    main.appendChild(wealthElem);
}

doubleMoney.addEventListener('click', doubleUserMoney);
addUser.addEventListener('click', getRandomUser);
sortPeople.addEventListener('click', sortMoney);
showMillionaires.addEventListener('click', showMillionairePeople);
calculateWealth.addEventListener('click', calculateEntireWealth);