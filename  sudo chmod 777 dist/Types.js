"use strict";
function log(message) {
    console.log(message);
}
function reverse(items) {
    var toreturn = [];
    for (let i = items.length - 1; i >= 0; i--) {
        toreturn.push(items[i]);
    }
    return toreturn;
}
var sample = [1, 2, 3];
var reversed = reverse(sample);
console.log(reversed);
