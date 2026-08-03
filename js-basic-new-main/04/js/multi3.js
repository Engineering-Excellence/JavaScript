"use strict";

let userNumber = prompt("숫자를 입력하세요.");
let diplayArea = document.querySelector('#result');

if (userNumber != null) {   // '취소' 버튼을 클릭하지 않았다면
    if (userNumber % 3 === 0) {
        diplayArea.innerHTML = `${userNumber}은(는) 3의 배수입니다.`;
    } else {
        diplayArea.innerHTML = `${userNumber}은(는) 3의 배수가 아닙니다.`;
    }
} else {    // '취소' 버튼을 클릭했다면'
    alert("입력이 취소됐습니다.");
}