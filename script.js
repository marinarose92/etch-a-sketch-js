let containerSelector = document.getElementById('container');
x = 0;

while (x <= 255) {
    let div = document.createElement('div');
    containerSelector.appendChild(div);
    div.id = x;
    div.classList.add("grid");
    x++
}