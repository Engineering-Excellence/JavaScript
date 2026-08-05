'use strict'

let n = parseInt(prompt('숫자를 입력하세요.:'));

if (n != null) {
    document.writeln(`${n}은(는) ${n % 2 === 0 ? '짝수' : '홀수'}입니다.`);
}
