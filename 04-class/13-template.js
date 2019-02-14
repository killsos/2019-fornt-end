// `` 就是

let name = "killsos";

let age = 12;

let str = "name is ${name} age is ${age}";

str = str.replace(/\$\{([^}]*)\}/g, function() {
    console.log(arguments[1]);
    return eval(arguments[1]);
});

console.log(str);