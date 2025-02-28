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