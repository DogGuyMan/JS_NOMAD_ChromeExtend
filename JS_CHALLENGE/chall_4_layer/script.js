const colorSet = [
    {first : "#0F2027", second :"#2c5364"},
    {first : "#12c2e9", second :"##c471ed"},
    {first : "##6DD5FA", second :"#FFF"},
    {first : "#1f4037", second :"#99f2c8"},
    {first : "#f12711", second :"##f5af19"},
    {first : "#3e5151", second :"#decba4"},
    {first : "rgba(0,0,0,0)", second : "rgba(0,0,0,0)" }
];

const gradientElement = document.querySelector("section.layer:nth-child(1)")
const randomIndex = Math.floor(Math.random() * colorSet.length);
const getColorRandom = colorSet[randomIndex];

console.log( randomIndex,  getColorRandom)

gradientElement.style.background =  `linear-gradient(${getColorRandom.first}, ${getColorRandom.second})`;