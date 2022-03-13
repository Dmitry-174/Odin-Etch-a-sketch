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

makeGrid(16);

containerEl.addEventListener('mouseover', (e) => {
    if (!e.target.classList.contains('square')) return;
    e.target.classList.add('colored');
})

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    containerEl.innerHTML = '';
    grid = prompt('Please input new grid size (maximum 100)');
    makeGrid(grid);
});