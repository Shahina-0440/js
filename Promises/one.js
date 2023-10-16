const obj1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let roll_no=[1,2,3,4,5];
        resolve(roll_no)
        reject("error handling")
    },2000)
})
//promise consume

obj1.then((roll_no)=>{
    console.log(roll_no)
}).catch((error)=>{
    console.log(error)
})