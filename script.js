document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("calc-display");
    const buttons = document.querySelectorAll(".btn");
    const themeToggle = document.querySelector(".theme-toggle");
    let currentInput = "";
    let operator = "";
    let previousInput = "";
    let resultDisplayed = false;
    