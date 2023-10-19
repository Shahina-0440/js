let counter1=createCounter();
let counter2=createCounter();
function createCounter(){
    return{
    count:0,
    increment:function(){
        this.count++;
        console.log(this)
    }
}
}

counter1.increment()
counter2.increment()