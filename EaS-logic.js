// Se crea selector del cuerpo del documento.
const body = document.querySelector("body"); 
console.log(body)

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

// Bucle que crea cada uno de los cuadrados, se añade clase
// y los inserta en el contenedor principal

// const minWidth = 600;
const width = 720;
const squaresBorder = 1;
btnGrid.addEventListener("click", function () {
    squares.remove()
    gridNum = prompt("Select the number o cells n<100 - nxn: ")
    if (gridNum > 100) {
        gridNum = 100;
    };
    createGrid(gridNum,width,squaresBorder)

});

function createGrid(gridNum,boxWidth,squaresBorder) {
    // Se crea contenedor de todos los cuadrados y se añade clase
    squares = document.createElement("div");
    squares.classList.add("squares");
    /* Se crea lógica del contenedor, se aplican tamaños min y max
,    además de wrap para que se cambien de fila los cuadrados*/

    squares.setAttribute("style", `margin: 10px; display: flex; flex: 1 1 0; align-self: center; flex-direction: row; flex-wrap: wrap; border: black 2px solid; width: ${width}px`)
        
    // Se inserta contenedor principal en el cuerpo
    body.appendChild(squares);

    for (let i = 0; i < gridNum*gridNum; i++) {
    // Se crea variable para almacenar el tamaño de la grid y una grid
    // predeterminada
        const square = document.createElement("div");
        square.classList.add("square");
        square.style["aspect-ratio"] = 1/1;
        square.style["border"] = `red solid ${squaresBorder}px`
        console.log((100*(width-2))/(width*gridNum));
        square.style["flex-basis"] = `${((100*(width-(squaresBorder*2*gridNum)))/(width*gridNum))}%`;
        squares.appendChild(square);
    // Lógica hover (rastro) del mouse en el grid
    
    let squareSelector = document.querySelectorAll(".square")
    squareSelector.forEach ( (elem) =>
        elem.addEventListener("mouseover", (event) => 
            elem.style["background-color"]="black")
    )
}
}



