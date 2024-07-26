document.getElementById('get-weather').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2ac160ae8516ec3279c4862de42617dc&units=metric`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('city-name').textContent = data.name;
                document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
                document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
                document.querySelector('.weather-result').style.display = 'block';
            })
            .catch(error => alert('City not found'));
    } else {
        alert('Please enter a city name');
    }
});
