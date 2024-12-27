// es6 + 数组
class ArrayQueue {
    // 类的私有属性通常使用哈希符号 (#) 来声明，这是 ECMAScript 2022 引入的新特性。
    #nums; // 数组（存储队列元素） 私有属性  
    #front = 0; // 队首指针 内存优化
    #queSize = 0; // 队列长度
    constructor(capacity) {
        this.#nums = new Array(capacity);
    }
    // ADT
    get size() {
        return this.#queSize;
    }
    push(num) {
        if (this.size === this.capacity) {
            console.log('队列已满');
        }
    }
    pop() {
        const num = this.peek();
        this.#front = (this.#front + 1) % this.capacity;
        return num;
    }

    peek() {
        if (this.isEmpty()) {
            console.log('队列为空');
        }
        return this.#nums[this.#front];
    }
    isEmpty() {
        return this.#queSize === 0;
    }
}