let expression = "";

function calculate(event, input) {
    event.preventDefault();
    let screen = document.getElementById("screen");

    if (input === "=") {
        try {
            screen.textContent = eval(expression);
            expression = screen.textContent; 
        } catch (error) {
            screen.textContent = "Error";
        }
    } else if (input === "sqrt") {
        expression = Math.sqrt(eval(expression)).toString();
        screen.textContent = expression;
    } else if (input === "^") {
        expression += "**"; 
        screen.textContent = expression;
    } else {
        expression += input;
        screen.textContent = expression;
    }
}


function clearScreen() {
    expression = expression.slice(0, -1); 
    document.getElementById("screen").textContent = expression;
}


function allClear() {
    expression = "";
    document.getElementById("screen").textContent = expression;
}
