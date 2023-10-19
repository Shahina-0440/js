fetch("https://api.openweathermap.org/data/2.5/weather?q=Bengaluru,IN&units=metric&appid=9fc7c4e3076998d8edc44474770ddcef")
.then((response) => {
    return response.json(); // Parse the JSON data
})
.then((data) => {
    console.log(data); // Log the parsed JSON data
    console.log(data.weather[0].main);//we will get clouds
})
.catch((error) => {
    console.log(`error in fetching data`);
});
