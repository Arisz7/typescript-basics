"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
}
String.prototype.endsWith = function (suffix) {
    var str = this;
    return str && str.indexOf(suffix, str.length - suffix.length) !== -1;
};
console.log("wenas wenas nochis".endsWith("wenas wenas nochis"));
console.log("mananar".endsWith("mananas"));
