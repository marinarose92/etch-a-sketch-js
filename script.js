function renderCanvas() {
    let containerSelector = document.getElementById('container');

    x = 0;

    while (x <= 255) {
        let div = document.createElement('div');
        containerSelector.appendChild(div);
        div.id = x;
        div.classList.add("grid");
        x++
    }

    const gridSelector = document.querySelectorAll('.grid');

    drawingLogic(gridSelector);
}

function drawingLogic(gridSelector) {
    gridSelector.forEach(div => {
        div.addEventListener('mouseover', event => {
            console.log(event.target.classList.add('blue'));
        })
    });
}

renderCanvas();