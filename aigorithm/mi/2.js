// 求x的n次方
// x
// x x
// x x x
function fun1(x,n){
    // 退出条件
    if(n === 0) {
        return 1;
    }else {
        return x * fun1(x, n - 1);
    }
}