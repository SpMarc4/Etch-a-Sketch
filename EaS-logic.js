const body = document.querySelector("body"); 
console.log(body)
const squares = document.createElement("div");
squares.classList.add("squares");
squares.setAttribute("style", "border: solid black 2px");


for (let i = 0; i <= 16*16; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute("style", "border: solid black 1px, background-color: white");
    squares.appendChild(square)
}


body.appendChild(squares);