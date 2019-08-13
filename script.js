function UI() {
    let containerSelector = document.getElementById('container');
    let clearButton = document.getElementById('clear');

    clearButton.addEventListener('click', event => {
        let userInput = window.prompt("What size grid do you want?");
        renderCustomCanvas(userInput);
    })

    renderInitialCanvas(containerSelector);
}

function renderInitialCanvas (containerSelector) {
    let y = 256;
    x = 0;
    while (x <= y) {
        let div = document.createElement('div');
        containerSelector.appendChild(div);
        div.id = x;
        div.classList.add("grid");
        x++
    }

    const gridSelector = document.querySelectorAll('.grid');

    drawingLogic(gridSelector)
}

function renderCustomCanvas (userInput) {
    console.log(userInput);
}

function drawingLogic(gridSelector) {
    gridSelector.forEach(div => {
        div.addEventListener('mouseover', event => {
            console.log(event.target.classList.add('blue'));
        })
    });
}

UI();