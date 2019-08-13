function UI() {
    let containerSelector = document.getElementById('container');
    let clearButton = document.getElementById('clear');
    clearButton.addEventListener('click', event => {
        let userInput = window.prompt("What size grid do you want?");
        userInput = Number(userInput);
        renderCanvas(containerSelector, userInput);
    })
    renderCanvas(containerSelector);
}

function renderCanvas (containerSelector, userInput) {
    let defaultSize = 16;
        if (userInput === undefined) {
            defaultSize = 16;
        } else {
            defaultSize = userInput;
            if (defaultSize > 100) {
                defaultSize = 100;
            }
            console.log(defaultSize);
            containerSelector.innerHTML = "";
        }
        x = 0;
        let square = Math.pow(defaultSize, 2)
        while (x <= square) {
            let div = document.createElement('div');
            containerSelector.appendChild(div);
            div.id = x;
            div.style.width = (800 / defaultSize) + 'px';
            div.style.height = (800 / defaultSize) + 'px';
            div.style.display = "inline-block";
            div.classList.add("grid");
            x++
        }
        const gridSelector = document.querySelectorAll('.grid');
        drawingColors(gridSelector)
}

function drawingColors(gridSelector) {
    gridSelector.forEach(div => {
        div.addEventListener('mouseover', event => {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            div.style.backgroundColor = '#' + randomColor;
        })
    });
}

UI();