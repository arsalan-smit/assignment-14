var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");
var operation = prompt("Enter operation (+, -, *, /, %):");
var result;
if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else if (operation === "*") {
    result = num1 * num2;
} else if (operation === "/") {
    result = num1 / num2;
} else if (operation === "%") {
    result = num1 % num2;
}
alert("The result is: " + result);