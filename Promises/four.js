const myPromise=new Promise((resolved,rejected)=>{
    const a=5;
    if(a%2===0){
        resolved(`yes! ${a} is even`)
    }else{
        rejected(`no! ${a} is not even`)
    }
});
myPromise.then((msg)=>{
    console.log(msg)
}).catch((error)=>{
    console.log(error)
})