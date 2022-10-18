"use strict";
exports.__esModule = true;
var eratosthenes_1 = require("./eratosthenes");
var main = function () {
    console.log('Hello World!');
};
var willFail = function (name) {
    console.log("Hello ".concat(name, "!"));
};
main();
var result = (0, eratosthenes_1.eratosthenes)(100);
console.log(result);
console.log('素数の個数: ', result.length);
// willFail(100)
