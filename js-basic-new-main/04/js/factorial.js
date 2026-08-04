'use strict'

let n = parseInt(prompt('숫자를 입력하세요.:'));

let factorial = (k) => {
    let nFact = 1;  // 1을 기본값으로 설정
    while (k > 1) {
        nFact *= k;
        k--;
    }
    return nFact;
};

document.writeln(`${n}! = ${factorial(n)}`)