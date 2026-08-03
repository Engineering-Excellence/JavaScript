'use strict'

let session = prompt("관심 세션을 선택해 주세요. 1-마케팅, 2-개발, 3-디자인", "1");

switch (session) {
    case "1":
        document.writeln("<p>마케팅 세션은 <strong>201호</strong>에서 진행됩니다.</p>");
        break;
    case "2":
        document.writeln("<p>개발 세션은 <strong>202호</strong>에서 진행됩니다.</p>");
        break;
    case "3":
        document.writeln("<p>디자인 세션은 <strong>205호</strong>에서 진행됩니다.</p>");
        break;
    default:
        alert("잘못된 선택입니다. 1, 2, 3 중에서 선택해 주세요.");
}