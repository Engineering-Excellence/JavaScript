var x = 100;

test();

function test() {
    document.write("x is " + x + ", y is " + y);    // ReferenceError: Cannot access 'y' before initialization
    let y = 200;
}