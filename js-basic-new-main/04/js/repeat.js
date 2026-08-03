'use strict'

let sum = 0;

for (let i = 0; i < 6; i++) {   // i = 1부터 i = 5까지 총 5번 반복
    sum += i;   // sum = sum + i; 를 줄여서 표현
}

document.writeln(`1부터 5까지 더하면 ${sum}`);