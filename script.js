const containerEl = document.querySelector('.container');

function makeGrid(gridSize) {
    const cells = gridSize ** 2
    for (let i = 0; i < cells; i++) {
        squareEl = document.createElement('div');
        squareEl.classList.add('square');
        squareEl.style.cssText = (`width: ${600 / gridSize + 2}px; \
        height: ${600 / gridSize + 2}px`);
        containerEl.appendChild(squareEl);
    }
}

function setNewGridSize() {
    let gridSize;
    do {
        gridSize = prompt('Please input new grid size (maximum 100)')
    } while (!(gridSize > 0 && gridSize <= 100))
    return gridSize;
}

function paintBlack(e) {
    if (!e.target.classList.contains('square')) return;
    e.target.classList.add('colored');
}

function paintRainbow(e) {
    if (!e.target.classList.contains('square')) return;
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    e.target.style.backgroundColor = `rgb(${r},${g}, ${b})`;
}

function toggleButtons() {
    blackBtn.classList.toggle('active');
    rainbowBtn.classList.toggle('active');
}

makeGrid(16);

containerEl.addEventListener('mouseover', paintBlack)

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
    containerEl.innerHTML = '';
    gridSize = setNewGridSize();
    makeGrid(gridSize);
});

const rainbowBtn = document.querySelector('.rainbow');
rainbowBtn.addEventListener('click', () => {
    const coloredElements = document.querySelectorAll('.colored');
    coloredElements.forEach(element => {
        element.classList.remove('colored');
    });
    containerEl.removeEventListener('mouseover', paintBlack);
    containerEl.addEventListener('mouseover', paintRainbow)
    toggleButtons();
})

const blackBtn = document.querySelector('.black');
blackBtn.addEventListener('click', () => {
    const squareElements = document.querySelectorAll('.square');
    squareElements.forEach(element => {
        element.style.backgroundColor = '';
    });
    containerEl.removeEventListener('mouseover', paintRainbow);
    containerEl.addEventListener('mouseover', paintBlack);
    toggleButtons();
})