var x = 100;

test();

function test() {
    document.write("x is " + x + ", y is " + y);    // x is 100, y is undefined
    var y = 200;
}