import './css/index.css';

var display = document.getElementById("output");
var buttons = document.getElementsByClassName("button");

Array.prototype.forEach.call(buttons, function (button) {
    button.addEventListener("click", function () {
        if (button.textContent != "=" && button.textContent != "C" && button.textContent != "x" && button.textContent != "÷" && button.textContent != "sqrt" && button.textContent != "sq" && button.textContent != "%" && button.textContent != "<=" && button.textContent != "+/-" && button.textContent != "sin" && button.textContent != "cos" && button.textContent != "tan" && button.textContent != "log" && button.textContent != "ln" && button.textContent != "^" && button.textContent != "n!" && button.textContent != "π" && button.textContent != "exp" && button.textContent != "radians" && button.textContent != "degrees") {
            display.value += button.textContent;
        } else if (button.textContent === "=") {
            equals();
        } else if (button.textContent === "C") {
            clear();
        } else if (button.textContent === "x") {
            multiply();
        } else if (button.textContent === "÷") {
            divide();
        } else if (button.textContent === "+/-") {
            plusMinus();
        } else if (button.textContent === "%") {
            percent();
        }
    });
});

// function nextLine() {
//   if(display.value.length > 19) {
//     document.write("\n");
//   }
// }
// ***button functions***
function checkLength() {
    if (display.value.length >= 23) {
        display.value = "Overload Error";
    }
}

function syntaxError() {
    if (eval(display.value) == SyntaxError) {
        display.value = "Syntax Error";
    }
}

function equals() {
    if ((display.value).indexOf("^") > -1) {
        var base = (display.value).slice(0, (display.value).indexOf("^"));
        var exponent = (display.value).slice((display.value).indexOf("^") + 1);
        display.value = eval("Math.pow(" + base + "," + exponent + ")");
    } else {
        display.value = eval(display.value);
        checkLength();
        syntaxError();
    }
}

function clear() {
    display.value = "";
}

function backspace() {
    display.value = display.value.substring(0, display.value.length - 1);
}

function multiply() {
    display.value = display.value + "*";
}

function divide() {
    display.value = display.value + "/";
}

function plusMinus() {
    if (display.value.charAt(0) === "-") {
        display.value = display.value.slice(1);
    } else {
        display.value = "-" + display.value;
    }
}

function factorial() {
    var result = 1;
    if (display.value === 0) {
        display.value = "1";
    } else if (display.value < 0) {
        display.value = "undefined";
    } else {
        var result = 1;
        for (var i = display.value; i > 0; i--) {
            result = result * i;
        }
        display.value = result;
    }
}

function percent() {
    display.value = display.value / 100;
}





