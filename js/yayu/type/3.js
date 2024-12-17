console.log(1 / +0); // Infinity 正无穷大 
console.log(1 / -0); // -Infinity 负无穷大
console.log(Object.is(5, 5));
console.log(Object.is(+0, -0));
// NaN  Not a Number
// 2 + "a" 会做隐式类型转换
console.log(2 * "a", 2 + "a");
console.log(typeof NaN);
console.log(parseInt("abc"))
console.log(parseInt("123abc"));
console.log(NaN === NaN); // NaN 不等于任何值
console.log(isNaN(NaN), isNaN(parseInt("abc")))