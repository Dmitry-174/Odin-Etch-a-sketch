const containerEl = document.querySelector('.container');

const grid = 16 * 16;
for (let i = 0; i < grid; i++) {
    squareEl = document.createElement('div');
    squareEl.classList.add('square');
    containerEl.appendChild(squareEl);
}

containerEl.addEventListener('mouseover', (e) => {
    if (!e.target.classList.contains('square')) return;
    e.target.classList.add('colored');
})