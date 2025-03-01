const display = document.querySelector(".display");  

function appendNumber(num) {
    display.innerText += num;
}

const buttons = document.querySelectorAll(".number");
buttons.forEach(buttons => {
    buttons.addEventListener("click", () => {
        appendNumber(buttons.innerText);
    });
});

document.querySelector(".equal").addEventListener("click", () => {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = "Error";
    }
});