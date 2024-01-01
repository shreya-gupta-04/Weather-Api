const search = document.querySelector(".search-btn");
const inp = document.querySelector(".input");
const weather_img = document.querySelector(".weather-icon");
const ci = document.querySelector(".city");
const temp = document.querySelector(".temp");
const hum = document.querySelector(".humidity");
const wind= document.querySelector(".wind");
const error= document.querySelector(".error");

async function checkweather(city)
{
     const api_key="148beb4f52f822e5670d23eae11b27b0";
     const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=148beb4f52f822e5670d23eae11b27b0`;
     const weather_data = await fetch(`${url}`).then(response=> response.json());
     console.log(weather_data);
     if(weather_data.cod == 404)
     {
        console.log("location not found");
        error.style.display= "block";
        document.querySelector(".weather").style.display="none";

     }
     ci.innerHTML=`${weather_data.name}`;
     temp.innerHTML=`${Math.round(weather_data.main.temp-273.15)}<sup>°C</sup>`;
     hum.innerHTML=`${weather_data.main.humidity}%`;
     wind.innerHTML=`${weather_data.wind.speed}km/hr`;
     switch(weather_data.weather[0].main)
     {
        case'Clouds':
        weather_img.src = "images/clouds.png";
        break;
        case'Clear':
        weather_img.src = "images/clear.png";
        break;
        case"Drizzle":
        weather_img.src = "images/drizzle.png";
        break;
        case"Mist":
        weather_img.src = "images/mist.png";
        break;
        case"Snow":
        weather_img.src = "images/snow.png";
        break;
        case"Rain":
        weather_img.src = "images/rain.png";
        break;
     }
     document.querySelector(".weather").style.display="block";
    }
search.addEventListener("click",()=>
{
   checkweather(inp.value);
   inp.value="";
});