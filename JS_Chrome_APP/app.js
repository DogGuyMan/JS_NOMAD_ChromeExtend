//html에 div에 들어있는 login-form이라는 클래스 명을 통해
    // 내부에 있는 다른 element에 접근해보기
const loginForm = document.querySelector(".login-form");
//loginForm을 재활용해서 접근할 수도 있다.
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");


function handleLoginBtnClick(){
    if(loginInput.value === ""){
        alert("아이디를 입력해줘");
    }
    else {
        console.log(loginInput.value);
    }
}

loginButton.addEventListener("click", handleLoginBtnClick);

console.dir(loginInput);