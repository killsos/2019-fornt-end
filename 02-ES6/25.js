// reduce

Array.prototype.reduce = function(cb, init) {
    for (let index = 0; index < this.length; index++) {
        if (init != undefined || init != null) {
            init = cb(init, this[index], index, this);
        } else {
            init = cb(this[index], this[index + 1], index, this);
            index++;
        }
    }
    return init;
}

let r = [1, 2, 17].reduce((a, b) => { return a + b }, 23);

console.log(r);