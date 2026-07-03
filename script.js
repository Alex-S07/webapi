const apiKey = "4fc9c50eb63c917d16a3ed70ff490a3a";

window.onload = function () {
    const lastCity = localStorage.getItem("city");

    if (lastCity) {
        document.getElementById("city").value = lastCity;
        getWeather();
    }
};

async function getWeather() {

    const city = document.getElementById("city").value;

    if(city===""){
        alert("Please enter a city name");
        return;
    }

    localStorage.setItem("city",city);

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{

        const response=await fetch(url);

        const data=await response.json();

        if(data.cod!=200){
            alert("City not found");
            return;
        }

        document.getElementById("cityName").innerHTML=
        `${data.name}, ${data.sys.country}`;

        document.getElementById("temp").innerHTML=
        `${data.main.temp} °C`;

        document.getElementById("condition").innerHTML=
        data.weather[0].main;

        document.getElementById("humidity").innerHTML=
        `Humidity : ${data.main.humidity}%`;

        document.getElementById("wind").innerHTML=
        `Wind : ${data.wind.speed} km/h`;

    }

    catch(error){

        alert("Something went wrong!");

    }

}
