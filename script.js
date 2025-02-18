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