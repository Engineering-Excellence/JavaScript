function calcSum(n) {
    sum = 0;  // 전역 변수 선언(var/let/const 예약어 미사용)

    for (let i = 1; i < n + 1; i++) {
        sum += i;
    }
}

calcSum(10);
console.log(sum);  // 전역 변수 사용