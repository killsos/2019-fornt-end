// Promise.resolve(100).finally(function() {
//     console.log("finally");
// }).then(function(val) {
//     console.log(val);

// }, function(error) {
//    console.error('error', error);
// })

Promise.reject(200).finally(function() {
    console.log("finally");
}).then(function(val) {
    console.log(val);
}, function(error) {
    console.error('error', error);
})