/*
의문점 
    //1. 아~ input값을 가져오려면 innerText가 아니라 value 써야하는구나
    //2. NaN은 논리 비교연산으로 비교 안된다.
        NaN도 number이다
        isNaN()으로 판별하자
    //3. 아니 
*/
//HTML 전체
const resultTextElement = document.querySelector("div.resultText")

//form 전체
const gameFormElement = document.querySelector("form._gameForm");

//form 내부 range
const rangeNumElement = gameFormElement.querySelector(
  "div._rangeNumDiv input._rangeNumInput"
);

//form 내부 submit
const guessNumSubmitElement = gameFormElement.querySelector(
  "div._guessNumDiv button"
);

//form 내부 guess
const guessNumElement = gameFormElement.querySelector(
  "div._guessNumDiv input._guessNumInput"
);

//range가 문자열도 아니고 음수도 아닌지 판단
function isValidateRange(_range) {
    //2. NaN은 논리 비교연산으로 비교 안된다.
    if(isNaN(_range)){
        return false;
    }
    else {
        return (_range < 0) ? false : true;
    }
}

//유저 입력값이 0보다크고 range보단 작은지
function isValidateUservalue(_range, _User) {
    if(isNaN(_range)){
        return false;
    }
    else {
        return ((_User >= 0) && (_User <= _range)) ? true : false;
    }
  }

function ClearInnerDiv(){
    let TextList = resultTextElement.querySelectorAll("div")
    TextList.forEach(element => {
        element.remove()
    });
}

function getRandomText(_range, _User){
    const getRandomNum = Math.round(Math.random() * _range);
    let checkCorrect = "You lost!";
    if(_User === getRandomNum){checkCorrect = "You win!"};

    const genereate = {
        Text : `You chose: ${_User}, the machine chose : ${getRandomNum}`, WinOrLostText : checkCorrect}

    return genereate
}

function DrawResult(){
    //1. 아~ input값을 가져오려면 innerText가 아니라 value 써야하는구나
    const rangeInt = parseInt(rangeNumElement.value)
    const guessInt = parseInt(guessNumElement.value)
    
    let stateText = document.createElement("div");
    let resultText = document.createElement("div");
    resultText.style.fontWeight = "bold";

    if(isValidateRange(rangeInt) && isValidateUservalue(rangeInt,guessInt)){
        ClearInnerDiv()//이전에 있던 div 삭제
        const resulteELement = getRandomText(rangeInt, guessInt)
        stateText.appendChild(document.createTextNode(resulteELement.Text));
        resultText.appendChild(document.createTextNode(resulteELement.WinOrLostText));
    }
    else {
        ClearInnerDiv()//이전에 있던 div 삭제
        stateText.appendChild(document.createTextNode("Error! Please check your inputs"));
        stateText.style.fontWeight = "bold";
        stateText.style.color = "red";
    }
    resultTextElement.appendChild(stateText)
    resultTextElement.appendChild(resultText)
}


gameFormElement.addEventListener("submit", function (_E) {
  console.log(_E);
  _E.preventDefault();
  DrawResult()
});
