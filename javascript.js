function makeGrid(cellsPerSide) {
    let totalCells = cellsPerSide ** 2;

    for (let i = 0; i < totalCells; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.setAttribute('class', 'square');
        containerDiv.appendChild(squareDiv);
        let squareHeight = 512 / cellsPerSide;
        let squareWidth = 512 / cellsPerSide;
        squareDiv.setAttribute('style', `height: ${squareWidth}px; width: ${squareHeight}px;`);
    }
    //etch-a-sketch functionality: change background color when moused over
    const squares = document.querySelectorAll('.square');

    squares.forEach((square) => {

        square.addEventListener('mouseover', () => {
            square.classList.add('coloredSquare');
        });
    });
}

function deleteGrid() {
    const squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.remove();
    })
}

makeGrid(16);

const changeButton = document.querySelector('button');
changeButton.addEventListener('click', function () {
    let gridSize = prompt('How big do you want your grid to be?', '16');
    if (gridSize > 100) {
        deleteGrid();
        makeGrid(16);
        alert('Too big! Try again!');
        return;
    }

    deleteGrid();
    makeGrid(gridSize);
});

