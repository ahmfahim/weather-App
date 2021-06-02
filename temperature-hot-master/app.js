// get api and api key
const apiKey = '1870e14facd50a1fcc986d29a0962b81';
const apiBase = 'https://api.openweathermap.org/data/2.5/weather'

const getWeatherValue = city =>{
    const url = `${apiBase}?q=${city}&appid=${apiKey}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        updateUI(data)
        console.log(data)
    })
}

// search location 
const btn = document.getElementById('search-btn');
btn.addEventListener('click', ()=>{
    const inputCity = document.getElementById('city').value;
    getWeatherValue(inputCity);
})

const updateUI = data =>{
    document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.getElementById('city').value ="";
    document.getElementById('show-city').innerText = data.name || "Unknown Location";
    const c = document.getElementById('temperature').innerText = data.main.temp;
    document.getElementById('weather-status').innerText = data.weather[0].main;

}



getWeatherValue('Bogra');