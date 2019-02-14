/**
 * 数据的响应变化
 * 
 * 双向绑定  = 数据劫持  +   观察者模式 +   模板的编译
 * 
 * 
 */

function update() {
    console.log("数据更新了");
}

let school = { name: "killsos", age: 12 };

function obeserver(obj) {
    if (typeof obj !== 'object') return obj;
    for (const key in obj) {
        defineReactive(obj, key, obj[key]);
    }
}

function defineReactive(obj, key, value) {
    obeserver(value); // 递归解析对象
    Object.defineProperty(obj, key, {
        get() {
            return value;
        },
        set(v) {
            if (value != v) {
                obeserver(v); // 保证新设置的属性也可以被观察
                value = v;
                update();
            }
        }
    })
}

obeserver(school);
school.age = 21;