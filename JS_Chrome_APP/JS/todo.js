const todoFormElement = document.querySelector("form.todo-form");
const todoListElement = document.querySelector("ul.todo-list");
const todoFormInputElement = todoFormElement.querySelector("input[type=text]")

console.log(todoFormElement);
console.log(todoListElement);
console.log(todoFormInputElement);

function handleTodoSubmit(_E) {
    _E.preventDefault();
    const todoValue = todoFormInputElement.value;
    todoFormInputElement.value = "";
}

todoFormElement.addEventListener("submit", handleTodoSubmit);