const p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise")
    },5000)
})

async function getData(){
    const val=await p;
    console.log("hi")
    console.log(val)
}
getData()