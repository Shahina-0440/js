const obj1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let id=1;
        resolve(id);
        reject("Error")
    },2000)
})

const obj2=(id)=>{
    return new Promise((resolve,reject)=>{
        setTimeout((id)=>{
            resolve(`my roll no ${id} and my name is shahina`)
        },2000,id)
    })
}
//promise consume

obj1.then((id)=>{
    console.log(id);
    return obj2(id)
}).then((xyz)=>{
    console.log(xyz)
}).catch((error)=>{
    console.log(error)
})