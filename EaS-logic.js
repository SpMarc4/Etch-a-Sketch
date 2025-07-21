// Se crea selector del cuerpo del documento.
const body = document.querySelector("body"); 
console.log(body)

// Se crea contenedor de todos los cuadrados y se añade clase
const squares = document.createElement("div");
squares.classList.add("squares");

// Bucle que crea cada uno de los cuadrados, se añade clase
// y los inserta en el contenedor principal
for (let i = 0; i < 16*16; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    squares.appendChild(square)
}

// Se inserta contenedor principal en el cuerpo
body.appendChild(squares);