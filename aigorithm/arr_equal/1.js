const scores = [83, 73, 92, 67, 55];
// 高于90 的分数
// array es6 新增的方法
const hasHigherScore = scores.some(score => score > 90);
console.log(hasHigherScore); // true
console.log(scores.every(score => score > 90)); // false

const hasEvenNumber = scores.some(score => score % 2 === 0);
console.log(hasEvenNumber); // true

console.log([1, 2, 3].indexOf(2), [1, 2, 3].indexOf(4), [1, 2, 3].indexOf(1));