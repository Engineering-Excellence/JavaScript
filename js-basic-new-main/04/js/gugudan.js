'use strict'

for (let i = 2; i < 10; i++) {
    document.writeln("<div>");
    document.writeln(`<h3>${i}단</h3>`);
    for (let j = 1; j < 10; j++) {
        document.writeln(`<p>${i} x ${j} = ${i * j}</p><br/>`);
    }
    document.writeln("</div>");
}