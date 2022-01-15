//html에 div에 들어있는 login-form이라는 클래스 명을 통해
    // 내부에 있는 다른 element에 접근해보기
const loginForm = document.querySelector(".login-form");
//loginForm을 재활용해서 접근할 수도 있다.
    //document.querySelector("div.user-panel.main input[name=login]");
    //document.querySelector("selector[myAttribute='aValue']");
    //document.querySelectorAll("selector[myAttribute='aValue']");
const loginInput = loginForm.querySelector("input[type=text]");
const loginSubmit = loginForm.querySelector("input[type=submit]")
const greetingTitle = document.querySelector("h1.greeting")

const HIDE_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintGreeting(_userName) {
    greetingTitle.innerText = `Hello ${_userName}`;
    greetingTitle.classList.remove(HIDE_CLASSNAME);
}

function handleLoginSubmit(_E) {
    _E.preventDefault();
    const userName = loginInput.value; 
    localStorage.setItem(USERNAME_KEY, userName);
    loginForm.classList.add(HIDE_CLASSNAME);
    paintGreeting(userName);
}

if(savedUsername === null){
    greetingTitle.classList.add(HIDE_CLASSNAME);
    loginForm.classList.remove(HIDE_CLASSNAME);
    loginForm.addEventListener("submit", handleLoginSubmit)
}
else {
    loginForm.classList.add(HIDE_CLASSNAME);
    greetingTitle.classList.remove(HIDE_CLASSNAME);
    paintGreeting(savedUsername);
}