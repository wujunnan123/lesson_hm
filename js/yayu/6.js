function Person(name,age) {
    this.name = name;
    this.age = age;
}

const wu = new Person('吴',19);
console.log(wu.name);
delete wu.name;
console.log(wu.name);