function Person(name, age) {
    console.log(this);
    this.name = name;
    this.age = age;
}

Person('昌总', 19) // 以普通函数方式运行  没有对象产生
const dys = new Person('昌总', 19) // 以构造函数方式运行  产生对象
const dyf = new Person('啊威', 20)