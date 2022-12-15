// Weather HTML elements
const weatherIcon = document.getElementById('weather-icon');
const currentTemp = document.getElementById('current-temp');
const captionDesc = document.getElementById('current-condition');
const currentHumidity = document.getElementById('current-humidity');

// Morrow Forecast HTML elements
const morrowDate = document.getElementById('morrow-date');
const morrowIcon = document.getElementById('morrow-icon');
const morrowHighTemp = document.getElementById('morrow-high-temp');
const morrowLowTemp = document.getElementById('morrow-low-temp');

// Overmorrow Forecast HTML elements
const overmorrowDate = document.getElementById('overmorrow-date');
const overmorrowIcon = document.getElementById('overmorrow-icon');
const overmorrowHighTemp = document.getElementById('overmorrow-high-temp');
const overmorrowLowTemp = document.getElementById('overmorrow-low-temp');

// Thirdmorrow Forecast HTML elements
const thirdmorrowDate = document.getElementById('thirdmorrow-date');
const thirdmorrowIcon = document.getElementById('thirdmorrow-icon');
const thirdmorrowHighTemp = document.getElementById('thirdmorrow-high-temp');
const thirdmorrowLowTemp = document.getElementById('thirdmorrow-low-temp');


// Carlsbad, CA - Uses {lat} {lon}
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.166039&lon=-117.337929&appid=1157f36a52164b93b327dd19914f8b96&units=imperial';
const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.166039&lon=-117.337929&appid=1157f36a52164b93b327dd19914f8b96&units=imperial';

// Farmington, UT
// const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.9804423&lon=-111.8874688&units=imperial&appid=1157f36a52164b93b327dd19914f8b96';


// Current Weather API Fetch
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      // Below is for testing the call:
      console.log(data);
      displayResultsWeather(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
};

// Forecast API Fetch
async function apiFetchForecast() {
  try {
    const responseForecast = await fetch(urlForecast);
    if (responseForecast.ok) {
      const dataForecast = await responseForecast.json();
      console.log(dataForecast);
      displayResultsForecast(dataForecast);
    } else {
        throw Error(await responseForecast.text());
    } 
  } catch (error) {
      console.log(error);
  }
};


apiFetch();
apiFetchForecast();

function displayResultsWeather(weatherData) {
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', titleCase(desc));
  weatherIcon.setAttribute('loading', 'lazy');
  captionDesc.textContent = titleCase(desc);
  
  
  currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}`;
  
  // currentHumidity.insertAdjacentText('afterbegin', weatherData.main.humidity);
  currentHumidity.innerHTML = `${weatherData.main.humidity}`;
};

function displayResultsForecast(forecastData) {
  // Date
  morrowDate.innerHTML = secondsToDate(parseInt(forecastData.list[8].dt));
  overmorrowDate.innerHTML = secondsToDate(parseInt(forecastData.list[16].dt));
  thirdmorrowDate.innerHTML = secondsToDate(parseInt(forecastData.list[24].dt));
  
  // High / Low Temp
  morrowHighTemp.insertAdjacentText('afterbegin', forecastData.list[8].main.temp_max.toFixed(0));  
  morrowLowTemp.insertAdjacentText('afterbegin', forecastData.list[8].main.temp_min.toFixed(0));
  overmorrowHighTemp.insertAdjacentText('afterbegin', forecastData.list[16].main.temp_max.toFixed(0));
  overmorrowLowTemp.insertAdjacentText('afterbegin', forecastData.list[16].main.temp_min.toFixed(0));
  thirdmorrowHighTemp.insertAdjacentText('afterbegin', forecastData.list[24].main.temp_max.toFixed(0));
  thirdmorrowLowTemp.insertAdjacentText('afterbegin', forecastData.list[24].main.temp_min.toFixed(0));

  // Icon
  const iconSrcMorrow = `https://openweathermap.org/img/w/${forecastData.list[8].weather[0].icon}.png`;
  const iconSrcOvermorrow = `https://openweathermap.org/img/w/${forecastData.list[16].weather[0].icon}.png`;
  const iconSrcThirdmorrow = `https://openweathermap.org/img/w/${forecastData.list[24].weather[0].icon}.png`;

  // pull "description" text
  const descMorrow = forecastData.list[8].weather[0].description;
  const descOvermorrow = forecastData.list[16].weather[0].description;
  const descThirdmorrow = forecastData.list[24].weather[0].description;

  // Src
  morrowIcon.setAttribute('src', iconSrcMorrow);
  overmorrowIcon.setAttribute('src', iconSrcOvermorrow);  
  thirdmorrowIcon.setAttribute('src', iconSrcThirdmorrow);

  // Alt
  morrowIcon.setAttribute('alt', titleCase(descMorrow));
  overmorrowIcon.setAttribute('alt', titleCase(descOvermorrow));
  thirdmorrowIcon.setAttribute('alt', titleCase(descThirdmorrow));

  // Loading = Lazy
  morrowIcon.setAttribute('loading', 'lazy');
  overmorrowIcon.setAttribute('loading', 'lazy');
  thirdmorrowIcon.setAttribute('loading', 'lazy');
};

function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
};

function secondsToDate(seconds) {
  let milliseconds = seconds * 1000;
  
  let dateObject = new Date(milliseconds);
  console.log(dateObject);

  let optionsDayOfWeek = {weekday: 'long'};
  let longDayOfWeek = new Intl.DateTimeFormat("en-US", optionsDayOfWeek).format(dateObject);
  
  return longDayOfWeek;
};