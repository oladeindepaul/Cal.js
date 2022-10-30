alert("Hello Dear! This is my calculator! press ok to start")

const num1 = parseFloat(prompt("Enter first number: "));
const operators = prompt("Enter operators(either +,-,* or /)");
const num2 = parseFloat(prompt("Enter second number:"));

let result;
if (operators == "+") {
  result = num1 + num2;
} else if (operators == "-") {
  result = num1 - num2;
} else if (operators == "*") {
  result = num1 * num2;
} else if (operators == "/") {
  result = num1 / num2;
}
alert(result);