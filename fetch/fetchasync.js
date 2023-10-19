async function getdata(){
    const jsondata=await fetch('https://api.openweathermap.org/data/2.5/weather?q=Bengaluru,IN&units=metric&appid=9fc7c4e3076998d8edc44474770ddcef');
    const jsdata=await jsondata.json();
    
    console.log(jsdata)
}
getdata()