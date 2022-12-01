const newCurrentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.getElementById('current-forecast');
const windSpeed = document.getElementById('current-wind');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.9804423&lon=-111.8874688&units=imperial&appid=1157f36a52164b93b327dd19914f8b96';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
};

apiFetch();

function displayResults(weatherData) {
  newCurrentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  weatherIcon.setAttribute('loading', 'lazy');
  captionDesc.textContent = titleCase(desc);

  windSpeed.textContent = weatherData.wind.speed.toFixed(0);
};

function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
};