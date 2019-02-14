// 宏任务
setTimeout(() => {
    console.log('定时器');

}, 0)

// 微任务
Promise.resolve().then(data => {
    console.log(123);

})

// 运行结果是  123  定时器