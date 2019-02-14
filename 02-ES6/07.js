/**
 * Map Set WeakMap WeakSet 遍历
 */

/**
 * set  类数组  值的唯一
 * forEach
 * forof
 * keys() + forof
 * values() + forof
 * entries() + forof
 */


const s = new Set([1, 2, 3, 4, 6]);

s.forEach(x => console.log(x));

for (const iterator of s) {
    console.log(iterator)
}

// forin 不可以 
for (const key in s) {
    console.log(s[key])
}

/**
 * map  值-值 hash
 * forEach
 * forof
 * keys() + forof
 * values() + forof
 * entries() + forof
 */