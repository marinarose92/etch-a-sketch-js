function renderCanvas() {
    let containerSelector = document.getElementById('container');
    let clearButton = document.getElementById('clear');
    let y = 256;

    clearButton.addEventListener('click', event => {
        y = window.prompt("What size grid do you want?");
        console.log(y);
    })

    x = 0;



    while (x <= y) {
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