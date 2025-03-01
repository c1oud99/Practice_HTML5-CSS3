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


function clearDisplay() {
    display.innerText = "";
}

document.querySelector(".clear").addEventListener("click", clearDisplay);


document.querySelector(".clear").addEventListener("click", () => {
    display.innerText = "";
});

document.addEventListener("keydown", (event) => {
    const key = event.key;
    
    if (!isNaN(key) || ["+", "-", "*", "/"].includes(key)) {
        display.innerText += key;
    } else if (key === "Enter") {
        try {
            display.innerText = eval(display.innerText);
        } catch {
            display.innerText = "Error";
        }
    } else if (key === "Backspace") {
        display.innerText = display.innerText.slice(0, -1);
    } else if (key === "Escape") {
        display.innerText = "";
    }
});