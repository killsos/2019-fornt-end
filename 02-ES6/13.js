// proxy + reflect

let obj = { age: 12 }

let a;

Object.defineProperty(obj, "age", {
    get() {
        return a;
    },
    set(v) {
        a = v;
    }
});

console.log(obj.age);