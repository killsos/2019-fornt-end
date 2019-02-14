// toString()  valueOf()

// 如果只重写了toString， 对象转换时会无视valueOf的存在来进行转换。 但是， 如果只重写了valueOf方法
// 在要转换为字符串的时候会优先考虑valueOf方法。 在不能调用toString的情况下， 只能让valueOf上阵了
// 对于那个奇怪的字符串拼接问题， 可能是出于操作符上， 翻开ECMA262 - 5 发现都有一个getValue操作
// 嗯， 那么谜底应该是揭开了。 重写会加大它们调用的优化高
// 而在有操作符的情况下， valueOf的优先级本来就比toString的高



var bbb = {
    i: 10,
    toString: function() {
        console.log('toString');
        return this.i;
    },
    valueOf: function() {
        console.log('valueOf');
        return this.i;
    }
}

alert(bbb); // 10 toString
alert(+bbb); // 10 valueOf
alert('' + bbb); // 10 valueOf
alert(String(bbb)); // 10 toString
alert(Number(bbb)); // 10  valueOf
alert(bbb == '10'); // true valueOf
alert(bbb === '10'); // false

// 乍一看结果，大抵给人的感觉是，如果转换为字符串时调用toString方法
// 如果是转换为数值时则调用valueOf方法，但其中有两个很不和谐。一个是alert(''+bbb)
// 字符串合拼应该是调用toString方法……另一个我们暂时可以理解为===操作符不进行隐式转换，因此不调用它们