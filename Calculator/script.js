let display = document.getElementById("display");

function appendCharacter(char) {
    display.value += char;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        let result = eval(display.value.replace(/\^/g, "**"));
        display.value = result;
    } catch (error) {
        alert("Invalid Expression");
        clearDisplay();
    }
}
