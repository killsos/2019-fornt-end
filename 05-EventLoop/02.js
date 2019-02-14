Promise.resolve().then(data => {
    console.log('p1');
    setTimeout(() => {
        console.log('定时器2');
    });
})


setTimeout(() => {
    console.log('定时器1');
    Promise.resolve().then(data => {
        console.log('p2');
    })
}, 0)

// 运行结果是 p1 定时器1 p2 定时器2

/****
 * 分析
 * Promise.resolve()是同步代码
 * 将then的代码放到微任务队列里面
 * 然后执行setTimeout定时器1
 * 将定时器1的代码放到宏任务队列里面
 * 这时候执行完所有同步代码
 * 调用栈是空 先去微任务队列 去任务
 * 所以执行 then代码 输出 p1
 * 同时将定时器2 放到宏任务队列里面
 * 此时微任务队列为空
 * 取出宏任务队列里面第一个任务 定时器1 去执行
 * 输出 定时器1
 * 同时将promise2放到微任务队列里面
 * 此时 调用栈 为空了
 * 然后 去 微任务队列里面 取出 promise2 执行
 * 输出 p2
 * 此时 调用栈 为空了
 * 微任务队列为空
 * 然后去 宏任务队列 取出 定时器2
 * 执行 输出 定时器2
 */