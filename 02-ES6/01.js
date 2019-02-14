console.log(a); // undefined

var a = 1;
var a = 11;

function a() {

}

//console.log(b); // Referrence Error

let b = 2;
//let b = 3; // Syntax Error

{
    let b = 4;

    console.log(b); // 块级作用域  3
}