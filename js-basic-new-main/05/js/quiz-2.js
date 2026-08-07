"use strict";

const num1 = Number.parseInt(prompt("비교할 첫 번째 숫자: "));
const num2 = Number.parseInt(prompt("비교할 두 번째 숫자: "));

if (!isNaN(num1) && !isNaN(num2)) {
    if (num1 === num2) {
        alert("두 숫자의 크기가 같습니다.");
    } else {
        let nums = [num1, num2];
        nums.sort();
        alert(`${nums[1]}(이)가 ${nums[0]}보다 큽니다.`);
    }
}