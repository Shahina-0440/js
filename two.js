/*let obj={
    "id":"name",
    "fun":function(){
        console.log(this)
    }
}
console.log(obj.fun())*/
let obj={
    "id":"name",
    "fun":()=>{
        console.log("hi")
    }
}
console.log(obj.fun())