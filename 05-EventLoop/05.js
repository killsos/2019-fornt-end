process.argv.forEach(function(item) {
    console.log(item);
});

process.on('exit', function() {
    console.log('clear');
});

process.on('uncaughtException', function(err) {
    console.log(err);
})

console.log(process.memoryUsage());
console.log(process.cwd());
console.log(__dirname);
process.chdir('..');
console.log(process.cwd());
console.log(__dirname);

function err() {
    throw new Error('报错了');
}
err();