const weather = document.querySelector("#weather");

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    const API__KEY = 'ec5d49a89a53968f0d40ba0d2892006c';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API__KEY}&units=metric`;
    
    fetch(url)
    .then( response => response.json())
    .then( data => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");

        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} , ${data.main.temp}℃`;
    });
}
function onGeoError(){
    alert("당신의 위치를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);