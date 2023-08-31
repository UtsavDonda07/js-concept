function x() {

    for (let i = 0; i <= 5; i++) {

        setTimeout(function () {
            console.log(i)

        }, i * 2000)
    }
}
x()


// function statement or function declaration
console.log(a) // store function definition
console.log(b) // undefined
a()
function a() {
    // statements
    console.log("a called")
}

// b() error of b is not a function

// function expression - function acts like a value
var b = function c() {
    // c(); //here only c() is valid
    console.log("b called")
}
b()
// c()   -ReferenceError: c is not defined

// so dif b/w function statement and function expression is hoisting
// function statement is hoisted and function expression is not hoisted

// *********************

// Anonymous function
// function used as a value and no name is given to it

var d = function () {
    // statements
    console.log("anonymous function called")
}
d()

function fun(para) {
    return function () {

    }
}
fun(function () {
    console.log("pass as value")
});

// *********************

// parameter vs argument
// parameter is a variable in the declaration of function
function e(param1, param2) {
    // statements
    console.log(param1)
}
// argument is the actual value of this variable that gets passed to function

e("agu1", "agu2")

// first class function or first class citizens


// function use as value pass in argument is first class function
// ref anonyous function ex.


// ************************

// Arrow Functions


// #################################

// Callback Function
// to achieve Async function
function x(y) {
    y()
}
x(function y() { })

// ex

setTimeout(function () { }, 5000); // callback after 5 second

// synchronous

function a() {
    setTimeout(() => {
        for (var i = 0; i < 6; i++) {
            console.log(i);
        }
    }, 2 * 1000);
}
a();





let arr = [1, 2, 3];
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);

let usv = {
    name: "usv",
    age: 21,
}

let drl = {
    name: "drl",
}

drl.__proto__ = usv;

console.log('name :>> ', drl.__proto__.name);
console.log('name :>> ', drl.age);

function fun() {

}







var i = new Date().getSeconds();
var second = i + 2;
console.log(i);

while (true) {
    if (i > second) {
        console.log("hello");
        console.log(i);
        break;
    }
    else {
        i = new Date().getSeconds();
    }
}

