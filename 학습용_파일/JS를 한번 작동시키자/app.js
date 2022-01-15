const clickMe_Element = document.querySelector(".clickMe");

//타겟 엘리먼트 : clickMe
//타겟이 클릭되었을떄 CSS style의 클래스 명칭이 
    //clicked와 
    // 없음으로 분류된다/
//그래서 클릭이라는 이벤트가 받아지면 폰트 색깔을변경하는것, 
function handleTitleClicked() {
    const clickedClass = "clicked";
    const noneclickedClass = "";

    if(clickMe_Element.className === clickedClass){
        clickMe_Element.className = noneclickedClass;
    }
    else {
        clickMe_Element.className = clickedClass;
    }
}
clickMe_Element.addEventListener("click", handleTitleClicked);

console.log(clickMe_Element.classList[1]);