let displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = 0;
}

function calculateResult() {
    try {
        const result = eval(displayValue);
        if (isNaN(result)) {
            document.getElementById("display").value = "Error";
        } else {
            document.getElementById("display").value = result;
            displayValue = "";
        }
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
