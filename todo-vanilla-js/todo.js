var list = document.getElementById('todoList');

list.addEventListener('click', function(evt){
    checkClickedElement(evt);
});

function addTodo(){
    var todo = document.getElementById('todoText');
    var todoText = todo.value;
    if(todoText){
        var li = document.createElement('li');
        var textNode = document.createTextNode(todoText);
        var checkbox = createCheckbox();
        var span = document.createElement('span');
        var closeSymbol = document.createTextNode('X');
        span.appendChild(closeSymbol);
        li.appendChild(checkbox);
        li.appendChild(textNode);
        li.appendChild(span);
        list.appendChild(li);
        todo.value = '';
     } else {
        alert('Todo item should not be empty');
     }
}

function createCheckbox(){
    var input = document.createElement('input');
    input.type = 'checkbox';
    return input;
}

function deleteTodo(evt){
    var todoItem = evt.target.parentElement;
    list.removeChild(todoItem);
}

function completeTodo(evt){
    var todoItem = evt.target.parentElement;
    if(todoItem.style['text-decoration'] === 'line-through'){
        todoItem.style['text-decoration'] = 'none';
    } else {
        todoItem.style['text-decoration'] = 'line-through';
    }
}

function checkClickedElement(evt){
    var clickedElem = evt.target;
    var clickedNode = clickedElem.nodeName;
    if(clickedNode === 'INPUT'){
        completeTodo(evt);
    }
    if(clickedNode === 'SPAN'){
        deleteTodo(evt);
    }
}

