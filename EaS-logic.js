// Se crea selector del cuerpo del documento.
const body = document.querySelector("body"); 

// Se crea contenedor de todos los cuadrados y se añade clase
let squares = document.createElement("div");
squares.classList.add("squares");


// Creación botón
const btnGrid = document.createElement("button");
btnGrid.classList.add("btnGrid");
btnGrid.textContent = "Select Grid Extension" ;
body.appendChild(btnGrid);



body.appendChild(squares);

// Se crea evento para la selección de la grid

// Se establecen constantes que se pueden modificar
const width = 720;

// Se añade el evento para crear las dimesiones de la grid
btnGrid.addEventListener("click", function () {
    squares.remove()
    gridNum = prompt("Select the number o cells n<100 - nxn: ")
    if (gridNum > 100) {
        gridNum = 100;
    };
    createGrid(gridNum,width)

});


// Se crea una función para elegir un colo RGB al azar

function randomColor() {
    const randomValue = Math.random()
    if (0<=randomValue && randomValue<1/3) {
        return "red"
    }

    else if (1/3<=randomValue && randomValue<=2/3) {
        return "green"
    }

    else {
        return "blue"
    }

};

// Se crea lógica para colorear los cuadrados, se tiene en cuenta si el 
// cuadrado ya está pintado.

function colorizeAndDarkness (square) {
    
    // Solo cambia el color si no existe previamente
    if (square.style["background-color"] == "") {
        square.style["background-color"]=randomColor();
    }

    // Añade una primera capa de opacidad del 0.1 en caso de no tener
    if (!square.style["opacity"] ) {
        square.style["opacity"] = 0.1;

    }

    // Incrementa la opacidad en 0.1
    
    else if (parseFloat(square.style["opacity"])<1) {
        square.style["opacity"] = parseFloat(square.style["opacity"]) + 0.1;
        

    }

};

// Función que crea la grid

function createGrid(gridNum,boxWidth) {
    // Se crea contenedor de todos los cuadrados y se añade clase
    squares = document.createElement("div");
    squares.classList.add("squares");
    /* Se crea lógica del contenedor, se aplican tamaños min y max
,    además de wrap para que se cambien de fila los cuadrados*/

    squares.setAttribute("style", `margin: 100px; display: flex; flex: 1 1 auto; align-self: center; flex-direction: row; flex-wrap: wrap; border: black 2px solid; ;min-width: ${width}px`)
        
    for (let i = 0; i < gridNum*gridNum; i++) {
    // Se crea variable para almacenar el tamaño de la grid y una grid
    // predeterminada
        const square = document.createElement("div");
        square.classList.add("square");
        square.style["aspect-ratio"] = 1/1;
        square.style["box-sizing"] = "border-box";
        square.style["border"] = `red solid 1px`
        square.style["flex-basis"] = `${((100/gridNum))}%`;
        squares.appendChild(square);
    // Lógica hover (rastro) del mouse en el grid
    
        square.addEventListener("mouseover", function () { 
            colorizeAndDarkness (square)} 
    )

    // Se inserta contenedor principal en el cuerpo
    body.appendChild(squares);
}
}

