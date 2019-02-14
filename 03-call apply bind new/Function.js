/** 
 * Function
 * 语法:
 * var func = new Function(arg1, arg2, ..., functionBody);
 */

var add = new Function('a', 'b', 'return a+b;');

console.log(add(2, 3)); // 5

// 由于其形参使用字符串的方式表示，也可以使用1个字符串来描述多个形参。

var add = new Function('a, b', 'return a+b;');

console.log(add(2, 3)); // 5


// 在转换JSON的实际应用中，只需要这么做

var jsonStr = '{ "age": 20, "name": "jack" }',
    json = (new Function('return ' + jsonStr))();

console.log(json);


// eval 与 Function 都有着动态编译js代码的作用