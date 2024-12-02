const cy = {
    name: '陈炎',
    palyBasketball: function() {
        console.log('我在打篮球');
    }
}

function Person(name,age) {
    console.log(this);
    this.name = name;
    this.age = age;
}
// 原型  cy
Person.prototype = cy;

const wu = new Person('武',19);
wu.palyBasketball();
console.log(wu.__proto__ === cy);