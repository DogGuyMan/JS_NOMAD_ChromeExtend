const todoFormElement = document.querySelector("form.todo-form");
const todoListElement = document.querySelector("ul.todo-list");
const todoFormInputElement = todoFormElement.querySelector("input[type=text]")

const TODOLIST_KEY = "todolist";

// X 버튼 누를때마다 실행됨
function deleteTODO(_E){
    if(_E.target.localName === "button" || _E.target.innerText === "❌"){
        const deleteTarget = _E.target.parentElement.parentElement;
        deleteTarget.remove();
    }
}

//li에 todolist 하나하나 추가하기
    //ToDo 리스트 실행마다 실행됨
function paintTODO (_todoValue){
    const AddLiTODO = document.createElement("li");
    const AddSpanTODO = document.createElement("span");
    const AddSpanBtn = document.createElement("span");
    const AddBtn = document.createElement("button");

    AddLiTODO.appendChild(AddSpanTODO);
    AddSpanTODO.innerText=_todoValue;
    AddLiTODO.appendChild(AddSpanBtn);
    AddBtn.innerText="❌"; 
    AddSpanBtn.appendChild(AddBtn);
    todoListElement.appendChild(AddLiTODO);
}

//Todo list 입력할때매다 이벤트
function handleTodoSubmit(_E) {
    _E.preventDefault();
    const todoValue = todoFormInputElement.value;
    todosData.push(todoValue);
    localStorage.setItem(TODOLIST_KEY, JSON.stringify(todosData));
    paintTODO(todoValue);
    todoFormInputElement.value = "";
}

// 제출과 X클릭 이벤트 리스너
todoFormElement.addEventListener("submit", handleTodoSubmit);
todoListElement.addEventListener("click", deleteTODO)

//DATA.js 저장할 todosData 형식 변경
function todosDataPush(_todoValue) {
    let todoMap = new idMap(_todoValue);
    todosData.push(todoMap.Get());
}

function todoDataDelete() {

}

//데이터 불러오기
let savedTODOs = localStorage.getItem(TODOLIST_KEY);
if(savedTODOs !== null){
    todosData = JSON.parse(savedTODOs);
    todosData.forEach( (i)=> {
        paintTODO(i)
    });
}

/*
데이터 저장방식 변경
데이터 삭제
    데이터 MAP을 통해서 삭제
*/
