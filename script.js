document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("calc-display");
    const buttons = document.querySelectorAll(".btn");
    const themeToggle = document.querySelector(".theme-toggle");
    let currentInput = "";
    let operator = "";
    let previousInput = "";
    let resultDisplayed = false;
    
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const action = button.getAttribute("data-action");
            const value = button.getAttribute("data-value");
            
            if (value) {
                if (resultDisplayed) {
                    currentInput = value;
                    resultDisplayed = false;
                } else {
                    currentInput += value;
                }
                display.value = currentInput;
            }
            
            if (action === "clear") {
                currentInput = "";
                previousInput = "";
                operator = "";
                display.value = "";
            }
            
            if (action === "backspace") {
                currentInput = currentInput.slice(0, -1);
                display.value = currentInput;
            }
            
            if (["add", "subtract", "multiply", "divide"].includes(action)) {
                if (currentInput === "") return;
                operator = action;
                previousInput = currentInput;
                currentInput = "";
            }
            
            if (action === "calculate") {
                if (previousInput === "" || currentInput === "") return;
                let result;
                const num1 = parseFloat(previousInput);
                const num2 = parseFloat(currentInput);
                
                switch (operator) {
                    case "add": result = num1 + num2; break;
                    case "subtract": result = num1 - num2; break;
                    case "multiply": result = num1 * num2; break;
                    case "divide": result = num2 !== 0 ? num1 / num2 : "Error"; break;
                }
                display.value = result;
                currentInput = result.toString();
                previousInput = "";
                resultDisplayed = true;
            }
            
            if (action === "sqrt") {
                display.value = Math.sqrt(parseFloat(currentInput)).toFixed(5);
                currentInput = display.value;
            }
            
            if (action === "decimal" && !currentInput.includes(".")) {
                currentInput += ".";
                display.value = currentInput;
            }
        });
    });
    
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        themeToggle.textContent = document.body.classList.contains("dark-theme") ? "🌙" : "🌞";
    });
});
