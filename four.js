const p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise")
    },5000)
})
function getData(){
    p.then((msg)=>{
        console.log(msg);
    })
    console.log("outside")
}
getData()