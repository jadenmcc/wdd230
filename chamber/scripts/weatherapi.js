// select HTML elements in the document
const newCurrentTemp = document.querySelector('#currentTemp');
const weatherIcon = document.querySelector('#weatherIcon');
const captionDesc = document.getElementById('currentForecast');
const windSpeed = document.getElementById('currentWind');

// Farmington, UT
// const url = 'http://api.openweathermap.org/geo/1.0/direct?q=Fairbanks,AK,USA&limit=1&units=imperial&appid=1157f36a52164b93b327dd19914f8b96'; This gives just geographical info.
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.9804423&lon=-111.8874688&units=imperial&appid=1157f36a52164b93b327dd19914f8b96';
// Cheyenne, WY
// const url = 'http://api.openweathermap.org/geo/1.0/direct?q=Cheyenne,WY,USA&limit=1&units=imperial&appid=1157f36a52164b93b327dd19914f8b96';
// const url = 'https://api.openweathermap.org/data/2.5/weather?lat=41.139981&lon=-104.820246&units=imperial&appid=1157f36a52164b93b327dd19914f8b96';
// Fairbanks, AK
// const url = 'http://api.openweathermap.org/geo/1.0/direct?q=Farmington,UT,USA&limit=1&units=imperial&appid=1157f36a52164b93b327dd19914f8b96';
// const url = 'https://api.openweathermap.org/data/2.5/weather?lat=64.837845&lon=-147.716675&units=imperial&appid=1157f36a52164b93b327dd19914f8b96';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      // Below is for testing the call:
      console.log(data);
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
  captionDesc.textContent = titleCase(desc);

  windSpeed.textContent = weatherData.wind.speed.toFixed(0);
};

function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
};