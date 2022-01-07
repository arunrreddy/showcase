const currencyElemOne = document.querySelector('#currency-one');
const amountElemOne = document.querySelector('#amount-one');
const currencyElemTwo = document.querySelector('#currency-two');
const amountElemTwo = document.querySelector('#amount-two');
const rateElem = document.querySelector('#rate');
const swap = document.getElementById('swap');

function calculate() {
    const currency_one = currencyElemOne.value;
    const currency_two = currencyElemTwo.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`).then(res => res.json())
    .then(data => {
       const rate = data.rates[currency_two];
       rateElem.innerText = `1 ${currency_one} = ${rate} ${currency_two}`; 
       amountElemTwo.value = (amountElemOne.value * rate).toFixed(2);
    });
}

currencyElemOne.addEventListener('change', calculate);
amountElemOne.addEventListener('input', calculate);
currencyElemTwo.addEventListener('change', calculate);
amountElemTwo.addEventListener('input', calculate);
swap.addEventListener('click', () => {
    const temp = currencyElemOne.value;
    currencyElemOne.value = currencyElemTwo.value;
    currencyElemTwo.value = temp;
    calculate();
});

calculate();