const quoteDivElement = document.querySelector("div.quote-div");

const quoteElement = quoteDivElement.querySelector("span.quote");
const authorElement = quoteDivElement.querySelector("span.author");

const resIndex = randomIndex(quotesData);
console.log(resIndex);

quoteElement.innerText = quotesData[resIndex].quote;
authorElement.innerText = quotesData[resIndex].author;

//리팩토링
    // 꼭 로컬 코드상에 명언데이터를 넣어야하는가?
    // DB를 통해서 불러올수는 없나.