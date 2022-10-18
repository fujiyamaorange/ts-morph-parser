"use strict";
exports.__esModule = true;
exports.eratosthenes = void 0;
/**
 *
 * @param num 求めたい数字
 * @returns numより小さい素数をまとめた配列
 */
var eratosthenes = function (num) {
    var n = Array.from(Array(num).keys());
    var root_n = Math.pow(num, 0.5);
    for (var i = 2; i < num; i++) {
        if (i > root_n)
            break;
        if (n[i] !== 0) {
            for (var j = n[i] * 2; j < num; j += n[i]) {
                n[j] = 0;
            }
        }
    }
    // 0と1を除く
    n.splice(0, 2);
    return n.filter(function (v) { return v !== 0; });
};
exports.eratosthenes = eratosthenes;
