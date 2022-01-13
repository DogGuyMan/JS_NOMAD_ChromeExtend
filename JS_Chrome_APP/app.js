//html에 div에 들어있는 login-form이라는 클래스 명을 통해
    // 내부에 있는 다른 element에 접근해보기
const loginForm = document.querySelector(".login-form");
//loginForm을 재활용해서 접근할 수도 있다.
    //document.querySelector("div.user-panel.main input[name=login]");
    //document.querySelector("selector[myAttribute='aValue']");
    //document.querySelectorAll("selector[myAttribute='aValue']");
const loginInput = loginForm.querySelector("input[type=text]");
const loginSubmit = loginForm.querySelector("input[type=submit]")
const blogLink = document.querySelector("a");

console.log(loginForm);
console.log(loginInput);
console.dir(loginSubmit);
console.log(blogLink);

function onLoginSubmit(event){
    event.preventDefault();
    console.log("YouSubmit");
}
loginForm.addEventListener("submit", onLoginSubmit);

function handleLinkClick(event) {
    console.log(event);
    event.preventDefault();
    alert("you Clicked");
}
blogLink.addEventListener("click", handleLinkClick);