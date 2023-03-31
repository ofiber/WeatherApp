let lon;
let lat;
let temperature = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let loc = document.querySelector(".location");
let icon = document.querySelector(".icon");

const kelv = 273;

window.addEventListener("load", () => {
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
            lon = position.coords.longitude;
            lat = position.coords.latitude;

            // API key
            const API = "3aac43a9fcbfb07314148566767dd151";

            // URL
            const base = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
            `lon=${lon}&appid=3aac43a9fcbfb07314148566767dd151`;


            // call api here
            fetch(base).then((respone) => 
            {
                return respone.json();
            }).then((data) => 
            {
                console.log(data);

                temperature.textContent = Math.floor(data.main.temp - kelv) + "°C";

                summary.textContent = data.weather[0].description;

                loc.textContent = data.name + "," + data.sys.country;

                let icon1 = data.weather[0].icon;

                icon.innerHTML = `<img src="icons/${icon}.svg" style='height:10rem'/>`;
            });

        });
    }
});