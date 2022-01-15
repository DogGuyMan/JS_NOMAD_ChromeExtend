const backDivElement = document.querySelector("div.background-div");

const bgImage = document.createElement("img")
bgImage.src = `img/img_(${randomIndex(imagesData)}).jpg`;

backDivElement.appendChild(bgImage);

console.log(backDivElement);
console.log(bgImage)
