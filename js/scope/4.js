var a = 1;
var b = 4;
function foo() {
    // 编译阶段 完成申明，undefined未定义
    console.log(a,b);

    var a = 2;
    //console.log(a);
    var a = 3;
    function bar(){
        return a + b;
    }   
    //console.log(bar());

    //console.log(a,b);
}
foo();