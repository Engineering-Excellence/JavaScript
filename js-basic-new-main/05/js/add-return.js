const num1 = Number.parseInt(prompt("첫 번째 숫자 : "));
const num2 = Number.parseInt(prompt("두 번째 숫자 : "));
let result = addNumber(num1, num2);
alert("두 수를 더한 값은 " + result + "입니다.");

function addNumber(a, b) {
    return a + b;
}
