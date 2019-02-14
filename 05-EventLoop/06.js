setImmediate(function() {
    console.log('4');
});
setImmediate(function() {
    console.log('5');
});

setTimeout(function() {
    console.log('Timeout');
}, 0);

process.nextTick(function() {
    console.log('1');
    process.nextTick(function() {
        console.log('2');
        process.nextTick(function() {
            console.log('3');
        });
    });
});

console.log('next');