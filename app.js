// const url =
//   'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
const options = {
  method: "GET",
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": "1f99de00f9msh75455d9a38b8e28p1a5ee9jsn6447dd6d069a",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

// async function main() {
//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();

//     console.log(result);

//     cloud_pct.innerHTML = result.cloud_pct;

//     temp.innerHTML = result.temp;

//     feels_like.innerHTML = result.feels_like;

//     humidity.innerHTML = result.humidity;

//     min_temp.innerHTML = result.min_temp;

//     max_temp.innerHTML = result.max_temp;

//     wind_speed.innerHTML = result.wind_speed;

//     wind_degrees.innerHTML = result.wind_degrees;

//     sunrise.innerHTML = result.sunrise;

//     sunset.innerHTML = result.sunset;
//   } catch (error) {
//     console.error(error);
//   }
// }

// main();

const getWeather = (city) => {
cityName.innerHTML = city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct.innerHTML = response.cloud_pct;

      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;

      feels_like.innerHTML = response.feels_like;

      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;

      min_temp.innerHTML = response.min_temp;

      max_temp.innerHTML = response.max_temp;

      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;

      wind_degrees.innerHTML = response.wind_degrees;

      sunrise.innerHTML = response.sunrise;

      sunset.innerHTML = response.sunset;
    })
    .catch((error) => {
      console.log(error);
    });
};



submit.addEventListener('click', (e)=>{
	e.preventDefault();
	getWeather(city.value);
});

getWeather('Delhi');