"use strict";
function padding(a, b, c, d) {
    if (b === undefined && c === undefined && d === undefined) {
        b = c = d = a;
    }
    else if (c === undefined && d === undefined) {
        c = a;
        d = b;
    }
    return {
        top: a,
        right: b,
        bottom: c,
        left: d,
    };
}
function whatever(n, s = "hello") {
}
let overload = (str) => str;
console.log(overload("This is a string using typescript"));
console.log(overload(123));
let foo = (str) => str;
