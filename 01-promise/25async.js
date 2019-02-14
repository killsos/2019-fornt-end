/**
 * async await
 * 实现并发执行
 * 
 */
const fs = require("mz/fs");


async function read1() {
    let value = await fs.readFile('age.txt', 'utf8');
    return value;
}

async function read2() {
    let value = await fs.readFile('name.txt', 'utf8');
    return value;
}

// 并发执行
async function Read() {
    read1();
    read2();
}

//Read();


async function ReadAll() {
    let all = await Promise.all([read1(), read2()]);
    console.log(all);
    return all;
}

ReadAll().then(function(data) {
    console.log('success ', data);
}, function(err) {
    console.log(err);
})