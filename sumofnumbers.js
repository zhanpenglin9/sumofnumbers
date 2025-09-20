"use strict";
function sumFor(list) {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        sum += list[i];
    }
    return sum;
}
function sumWhile(list) {
    let sum = 0;
    let i = 0;
    while (i < list.length) {
        sum += list[i];
        i++;
    }
    return sum;
}
function sumRecursion(list) {
    if (list.length === 0) {
        return 0;
    }
    return list[0] + sumRecursion(list.slice(1));
}
function sumTheFunctionalWay(list) {
    return list.reduce((acc, cur) => acc + cur, 0);
}
console.log(sumFor([1, 2, 3, 4, 5]));
console.log(sumWhile([1, 2, 3, 4]));
console.log(sumRecursion([1, 2, 3, 4, 5, 6]));
console.log(sumTheFunctionalWay([1, 2, 3, 4, 5, 6, 7]));
