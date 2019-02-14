// proxy + reflect

// mobx 使用 proxy 

// defineProperty 无法监控数组  proxy 可以监控数组

let obj = { name: '000' };

let p = new Proxy(obj, {
    get(target, key, proxy) { // 第三个属性是代理对象 一般不用
        // return target[key];
        return Reflect.get(target, key);
    },
    set(target, key, value) {
        if (key === 'length') {
            return true;
        }
        return Reflect.set(target, key, value);
    }
})

console.log(p.name = '123');