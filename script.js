const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c8dc19c918msh7b322e7b5fa2f46p1af50djsnaf9f431dd595',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const GetWeather = (city) => {
    cityName.innerHTML=city;

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
        .then(response => response.json())
        .then(response => {


            console.log(response)
            // cloud_pct.innerHTML = response.cloud_pct
            temp2.innerHTML = response.temp
            temp.innerHTML = response.temp
            // feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        }
        )
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    GetWeather(city.value)
})

GetWeather("Delhi")