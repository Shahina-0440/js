function x(){
    var a=7;
    function y(){
        console.log(a)
    }
    return y;
}
let d=x();
console.log(d)
console.log(a)