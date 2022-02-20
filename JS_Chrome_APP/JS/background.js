const BGElement = document.querySelectorAll("section.background")

const gradientElement = BGElement[0];
const BGimgElement = BGElement[2];

const gradientRandomIndex = randomIndex(colorSet);
const getColorRandom = colorSet[gradientRandomIndex];

console.log(getColorRandom);

gradientElement.style.background =  `linear-gradient(${getColorRandom.first}, ${getColorRandom.second})`;

BGimgElement.style.background = `center no-repeat url("./img/${imagesData[Math.floor(Math.random() * imagesData.length)]}")`;
console.log(`center no-repeat url(./img/${imagesData[Math.floor(Math.random() * imagesData.length)]}))`)
BGimgElement.style.backgroundSize = "cover " ;
BGimgElement.style.backgroundAttachment = "fixed";

document.querySelector("h2.clock").animate([
    {       
        color : "#00000060",
        boxShadow: "none",
        textShadow: `0px 0px 0px ${getColorRandom.first+"80"}`
    },
    {
        color: "#FFF",
        textShadow: `10px 10px 50px ${getColorRandom.second}`
    }  
], {
    duration : 5000,
    easing : "cubic-bezier(0, 0.5, 0, 1)",
    iterations : Infinity
}
)
const todoGlowing = document.querySelector("form.todo-form input");

todoGlowing.style.boxShadow = `0px 0px 50px ${getColorRandom.second}`;