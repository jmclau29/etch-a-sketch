//make divs for grid and attach to containerDiv
for (i = 1; i < 257; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.setAttribute('class', 'gridSquare');
    squareDiv.setAttribute('id', `square${i}`);
    containerDiv.appendChild(squareDiv);
}


const squares = document.querySelectorAll('.gridSquare');

squares.forEach((square) => {

    square.addEventListener('mouseover', () => {
        square.style.cssText = "background-color: black;"; 
    });
});