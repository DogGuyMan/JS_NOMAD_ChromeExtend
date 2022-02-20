function expTokenList(num){
    if(num === "one"){
        const span = document.querySelector(`div.${num} > span`);
        const classes = span.classList;
        span.classList.add("d", "e", "f");
        span.textContent = classes;
        return;
    }
    if(num === "two"){
        const span = document.querySelector(`div.${num} > span`);
        const classes = span.classList;
        span.classList.remove("b", "d" ,"e")
        span.textContent = classes;
        return;
    }
    if(num === "three"){
        const span = document.querySelector(`div.${num} > span`);
        const classes = span.classList;
        const toggleTriger = classes.toggle("toggled")
        if(toggleTriger){
            span.textContent = classes + `On`;
        }
        else {
            span.textContent = classes + `Off`;
        }
        return;
    }
    if(num === "four"){
        const span = document.querySelector(`div.${num} > span`);
        const classes = span.classList;
        
        span.textContent += `
        `;

        const valueiterator = classes.values();
        const keyiterator = classes.keys();

        for(let value of valueiterator) {
          span.textContent += `(${value}) `;
        }
        for(let key of keyiterator) {
          span.textContent += `(${key}) `;
        }

        return;
    }
    if(num === "five"){
        const bodyElement = document.querySelector("body");
        const newDiv = document.createElement("div");
        const newBtn = document.createElement("input");
        const newTA = document.createElement("input");
        console.log(newBtn)
        console.log(newTA)
        newBtn.setAttribute("type", "button");
        newTA.setAttribute("type", "text");
        newDiv.appendChild(newBtn)
        newDiv.appendChild(newTA)
        bodyElement.appendChild(newDiv)
        return;
    }
}

spanSerise = document.querySelectorAll("span")

spanSerise.forEach(element => {
    element.textContent = element.classList
});