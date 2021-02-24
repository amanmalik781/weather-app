window.addEventListener("load", () => {
    let longitude;
    let latitude;
    let temeperatureDegree = document.querySelector(".temperature-degree");
    let temeperatureDescription = document.querySelector(".temperature-description");
    let locationTimezone = document.querySelector(".location-timezone");
    let atmPresssure = document.querySelector(".pressure");



    let APIkey = "fdae04fb2421a36862ac9877c93c93b4";
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                longitude = position.coords.longitude;
                latitude = position.coords.latitude;
                const proxy = "https://cors-anywhere.herokuapp.com/";
                const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIkey}`;
                fetch(api)
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        console.log(data);
                        const { description } = data.weather[0];
                        const { temp, temp_min, temp_max, pressure } = data.main;

                        temeperatureDescription.textContent = description.toUpperCase();
                        locationTimezone.textContent = data.name;
                        temeperatureDegree.textContent = (temp - 273.15).toFixed(2);
                        atmPresssure.textContent = pressure;
                    })
            }
        );
        function setIcons(icon,iconID){
            const skycons=new Skycons({color:"white"});
            
        }

    }

});