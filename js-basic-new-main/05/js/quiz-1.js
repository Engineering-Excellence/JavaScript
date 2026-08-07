"use strict";

const sumMulti = (x, y) => x === y ? x ** 2 : x + y;    // 두 수가 같으면 제곱, 다르면 합을 반환
console.log(sumMulti(5, 10));
console.log(sumMulti(10, 10));