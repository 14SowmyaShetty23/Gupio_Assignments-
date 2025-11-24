let display = document.querySelector(".display input");

let buttons = document.querySelectorAll("button");


buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        let value = btn.textContent;

        if (value === "AC") {
            display.value = "";
        }
        else if (value === "=") {
            display.value = eval(display.value);
        }
        else if (value === "X") {
            display.value += "*"; 
        }
        else {
            display.value += value;
        }
    });
});
