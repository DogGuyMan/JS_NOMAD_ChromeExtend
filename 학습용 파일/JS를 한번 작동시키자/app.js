alert("HI");

const clickMe_element = document.querySelector("h1.clickMe");
let clickMe_color_changed = false;
let clickMe_color_current = clickMe_element.style.color;
console.log(clickMe_element);

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