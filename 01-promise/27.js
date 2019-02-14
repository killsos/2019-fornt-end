/****
 * 回调写法
 */

let move = function(ele, pos, callback) {
    // requestAnimation
    let start = 0;
    let timer = setInterval(() => {
        start += 5;
        if (start >= pos) {
            ele.style.left = pos + 'px';
            clearInterval(timer);
            callback();
        }
        ele.style.left = start + 'px';
    }, 13);
}
let $ = document.querySelector.bind(document);
move($('.ball1'), 300, function() {
    move($('.ball2'), 300, function() {
        move($('.ball3'), 300, function() {
            alert('成功')
        })
    })
})

/**
 * promise实现
 */

let movePromise = function(ele, pos) {
    return new Promise(function(resolve, reject) {
        // requestAnimation
        let start = 0;
        let timer = setInterval(() => {
            start += 5;
            if (start >= pos) {
                ele.style.left = pos + 'px';
                clearInterval(timer);
                resolve();
            }
            ele.style.left = start + 'px';
        }, 13);
    })
}

async function m1(params) { // √
    await move($('.ball1'), 300);
    await move($('.ball2'), 200)
    await move($('.ball3'), 100)
}

function* m(params) { // +co
    yield move($('.ball1'), 300);
    yield move($('.ball2'), 200);
    yield move($('.ball3'), 100);
}