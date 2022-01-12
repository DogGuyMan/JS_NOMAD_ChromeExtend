alert("HI");
const clickMe_element = document.querySelector("h1.clickMe");
let clickMe_color_changed = false;
let clickMe_color_current = clickMe_element.style.color;
console.log(clickMe_element);

function handleWindowResize() {
    document.querySelector("body").style.backgroundColor = "tomato";
}


document.addEventListener("click", 
        ()=>{
            if(!clickMe_color_changed){
                clickMe_element.style.color = "blue";
                clickMe_color_changed = true;
            }
            else {
                clickMe_element.style.color = clickMe_color_current;
                clickMe_color_changed = false;
            }
        }
    );
document.addEventListener("click", ()=>{console.log("You Clicked Me!");});
document.addEventListener("mouseenter", ()=>{clickMe_element.innerText = "Mouse is Here";});
document.addEventListener("mouseleave", ()=>{clickMe_element.innerText = "Mouse is Gone";;});

window.addEventListener("resize", handleWindowResize);

window.addEventListener("copy", ()=>{alert("너 카피했구나?")})
window.addEventListener("paste", ()=>{alert("너 붙여넣기 했구나?")})