async function fn() {
    let x = await 1;
    let y = await 2;
    return [x, y];
}

fn().then(function(data) {
    console.log(data);

})