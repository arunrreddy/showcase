const draggableList = document.getElementById('draggable-list');
const checkBtn = document.getElementById('check');
const richestPeople = [
    'Jeff Bezos',
    'Bill Gates',
    'Warren Buffet',
    'Bernard Arnault',
    'Carlos Slim Helu',
    'Amancio Ortega',
    'Larry Ellison',
    'Mark Zuckerberg',
    'Michael Bloomberg',
    'Larry Page'
];

const listItems = [];

let dragStartIndex;

function createList() {
    [...richestPeople]
        .map(a => ({ value: a, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value)
        .forEach((person, index) => {
            const listItem = document.createElement('li');
            listItem.setAttribute('data-index', index);
            listItem.innerHTML = `
                <span class="number">${index + 1}</span>
                <div class="draggable" draggable="true">
                    <p class="person-name">${person}</p>
                    <i class="fas fa-grip-lines"></i>
                </div>
            `;
            listItems.push(listItem);
            draggableList.appendChild(listItem);
        });

        addEventListeners();
}

function dragStart() {
    dragStartIndex = +this.closest('li').getAttribute('data-index');
}

function dragEnter() {
    this.classList.add('over');
}

function dragLeave() {
    this.classList.remove('over');
}

function dragOver(e) {
    e.preventDefault();
}

function dragDrop() {
    const dragEndIndex = +this.getAttribute('data-index');
    swapItems(dragStartIndex, dragEndIndex);
    this.classList.remove('over');
}

function swapItems(from, to) {
    const itemOne = listItems[from].querySelector('.draggable');
    const itemTwo = listItems[to].querySelector('.draggable');
    listItems[from].appendChild(itemTwo);
    listItems[to].appendChild(itemOne);
}

function checkOrder() {
    richestPeople.forEach((person, index) => {
        const listItem = listItems[index].querySelector('.draggable');
        const personName = listItem.querySelector('.person-name');
        if (personName.innerText.trim('') === person) {
            listItems[index].className = 'right';
        } else {
            listItems[index].className = 'wrong';
        }
    });
}

function addEventListeners() {
    const draggables = document.querySelectorAll('draggable');
    const dragListItems = document.querySelectorAll('.draggable-list li');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart);
    });

    dragListItems.forEach(item => {
        item.addEventListener('dragstart', dragStart);
        item.addEventListener('dragover', dragOver);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragleave', dragLeave);
    });
}

createList();

checkBtn.addEventListener('click', checkOrder);