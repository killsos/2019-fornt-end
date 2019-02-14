// reduce reduceRight
// 把结果聚合在一起

let a1 = [1, 2, 4, 9].reduce(function(prevValue, curValue, curIndex) {
    return prevValue + curValue;
});

console.log(a1);

let a2 = [{ price: 1, count: 2 }, { price: 5, count: 3 }, { price: 6, count: 2 }].reduce(function(prevValue, curValue, curIndex, array) {
    return prevValue + curValue.price * curValue.count;
}, 0);

// prev 是指 后面赋值的 0

console.log(a2);

// compose 组合

function sum(a, b) {
    return a + b;
}

function toUpper(str) {
    return str.toUpperCase();
}

function add(str) {
    return 'killsos' + str;
}

let r = add(toUpper(sum('a', 'b')));

console.log(r);

// let compose = (...fns) => (...args) => {
//     let fn = fns.pop();
//     let r = fn(...args);
//     return fns.reduceRight((prev, cur, ) => next(prev), r);
// };

let compose = (...fns) => {
    return fns.reduce((a, b) => (...args) => {
        a(b(...args));
    });
}

let composeFn = compose(add, toUpper, sum);

composeFn('a', 'b');