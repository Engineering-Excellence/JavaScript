'use strict'

let cnt = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        document.writeln(`${cnt === 0 ? '' : ', '}${i}`);
        cnt++;
    }
}

document.writeln(`<br/><br/><p>3의 배수의 갯수: ${cnt}</p>`);