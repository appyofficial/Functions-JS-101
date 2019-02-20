//Declaring variables
let tempDegree = document.querySelector('.tempdegree');
let tempDiscription = document.querySelector('.tempdiscription');
let locationTimezone = document.querySelector('.location-timezone');

//Events
window.addEventListener("load", getWeatherReport());



//Getting weather report
function getWeatherReport() {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            //Incase if you are trying to run in the local server.
            //Read more here: https://cors-anywhere.herokuapp.com/
            const proxy = `https://cors-anywhere.herokuapp.com/`;
            //DarkSky Weather API.
            //You can go to their website and paste the api link here.
            //const api = `${proxy}YOUR LINK HERE(NO SPACE)/${lat},${long}`;
            //Fetching the data from API.
            fetch(api).then(response => {
                return response.json()
            }).then(data => {
                console.log(data)
                const { //Decontructing object
                    temperature,
                    summary,
                    icon
                } = data.currently;
                //Setting DOM element
                tempDegree.textContent = temperature;
                tempDiscription.textContent = summary;
                locationTimezone.textContent = data.timezone;
                //Running Icons
                setIcons(icon, document.querySelector(".icon"));
            });
        });

    }

}

//Displaying Icons from skycons
function setIcons(icon, iconID) {
    const skycons = new Skycons({
        color: "white"
    });
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);
};