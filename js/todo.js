const todoForm = document.querySelector("#todo__form");
const todoInput = document.querySelector("#todo__form input");
const toDoList = document.querySelector("#todo__list");

const todoArray = [];

const TODOS_KEY = "todos";

function saveTodo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todoArray));
}
function deleteTodo(e){
    const li = e.target.parentElement;
    li.remove();
} 
function addTodo(newTodo){
    const liCreate = document.createElement("li");
    const spanCreate = document.createElement("span");
    const deleteBtn = document.createElement("button");

    liCreate.appendChild(spanCreate);
    spanCreate.innerText = newTodo;
    liCreate.appendChild(deleteBtn);
    deleteBtn.innerText = "❌";
    toDoList.appendChild(liCreate);

    deleteBtn.addEventListener("click", deleteTodo);
}

function todoSubmit(e){
    e.preventDefault();
    
    const newTodo = todoInput.value;
    todoInput.value = "";
    todoArray.push(newTodo);
    addTodo(newTodo);
    saveTodo();
}
todoForm.addEventListener("submit", todoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); // string

if( savedToDos !== null ){
    const parsedToDos = JSON.parse(savedToDos); // array
    parsedToDos.forEach(addTodo);
}