async function getWeather() {
    const apiKey = 'eb12cb6c4288e6b876050cc039623882';
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('City not found');
        const weatherData = await response.json();
        displayWeather(weatherData);
    } catch (error) {
        document.getElementById('weather').innerText = error.message;
    }
}

function displayWeather(data) {
    const weatherElement = document.getElementById('weather');
    const { name, main, weather } = data;
    weatherElement.innerHTML = `
        <h2>Weather in ${name}</h2>
        <p>Temperature: ${main.temp} °C</p>
        <p>Weather: ${weather[0].description}</p>
        <p>Humidity: ${main.humidity}%</p>
        <p>Pressure: ${main.pressure} hPa</p>`;
}