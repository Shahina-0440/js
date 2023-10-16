const obj1=new Promise((resolve,reject)=>{
    //dsiplaying id after 5 sec
    setTimeout(()=>{
        let ids=[101,102,103];
        resolve(ids)
        reject("Error handling")
    },5000);
});
//everything is promise so creating another promise another task
const getdata=(id)=>{
    return new Promise((resolve,reject)=>{
        setTimeout((id)=>{
            let data={
                name:"shahina"
            }
            resolve(`My roll number is ${id} and my name is ${data.name}`)
        },2000,id)
    })
};
//promise consume
obj1.then((ids)=>{
    console.log(ids[1]);
    return getdata(ids[1]);
}).then ((xyz)=>{
    console.log(xyz)
}).catch((error)=>{
    console.log(error)
})