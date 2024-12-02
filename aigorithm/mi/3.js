function fun1(x,n) {
    if(n === 0) {
        return 1;    
    }
    // 自顶向下
    let t = fun1(x, Math.floor(n / 2));
    if(n % 2 === 1) {
        return t * t * x; // 奇数 t * t * x
    }else {
        return t * t;// 偶数 t * t
    }
}

