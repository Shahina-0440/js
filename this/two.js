class Parent{
    a=100;
    constructor(){
        console.log(this.a)
    }
}
class child extends Parent{
    a=10;
    constructor(){
        super()
        console.log(this.a)
    }
    
}
let r1=new child()

