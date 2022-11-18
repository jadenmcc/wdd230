// Farmington, UT
// const url2 = 'http://api.openweathermap.org/geo/1.0/direct?q=Fairbanks,AK,USA&limit=1&units=imperial&appid=1157f36a52164b93b327dd19914f8b96'; This gives just geographical info.
const url2 = 'https://api.openweathermap.org/data/2.5/weather?lat=40.9804423&lon=-111.8874688&units=imperial&appid=1157f36a52164b93b327dd19914f8b96';
// Cheyenne, WY
// const url2 = 'http://api.openweathermap.org/geo/1.0/direct?q=Cheyenne,WY,USA&limit=1&units=imperial&appid=1157f36a52164b93b327dd19914f8b96';
// const url2 = 'https://api.openweathermap.org/data/2.5/weather?lat=41.139981&lon=-104.820246&units=imperial&appid=1157f36a52164b93b327dd19914f8b96';
// Fairbanks, AK
// const url2 = 'http://api.openweathermap.org/geo/1.0/direct?q=Farmington,UT,USA&limit=1&units=imperial&appid=1157f36a52164b93b327dd19914f8b96';
// const url2 = 'https://api.openweathermap.org/data/2.5/weather?lat=64.837845&lon=-147.716675&units=imperial&appid=1157f36a52164b93b327dd19914f8b96';

async function apiFetch() {
    try {
      const response = await fetch(url2);
      if (response.ok) {
        const data = await response.json();
        // Below is for testing the call:
        console.log(data);
        showResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  };

apiFetch()

function showResults(weatherData) {
    // let currentTemp = parseFloat(weatherData.main.temp.toFixed(0), 10);

    // let currentWind = parseFloat(weatherData.wind.speed.toFixed(0), 10);

    let currentTemp = parseFloat(weatherData.main.temp);

    let currentWind = parseFloat(weatherData.wind.speed);

    function checkTempRequirements (temperature, windSpeed) {
        if (temperature <= 50 && windSpeed > 3.0) {
            return true;
        } else {
            return false;
        }
    };
    
    const windChillStatus = checkTempRequirements(currentTemp, currentWind);
    
    function calculateWindChill (temperature, windSpeed) {
        const windChill = 35.74 + 0.6215 * temperature - 35.75 * currentWind ** 0.16 + 0.4275 * temperature * windSpeed ** 0.16;
        // const windChill = 35.74 + (0.6215 * temperature) - (35.75 * (currentWind ** 0.16)) + (0.4275 * temperature * (windSpeed ** 0.16));
    
        return windChill;
    };
    
    const windChillCell = document.getElementById('windChillCell');
    
    if (windChillStatus == true) {
        // const masterWindChill = parseInt(calculateWindChill(currentTemp, currentWind));
        const masterWindChill = calculateWindChill(currentTemp, currentWind).toFixed(1);
    
        // windChillCell.textContent = masterWindChill;
        windChillCell.insertAdjacentText('afterbegin', masterWindChill);
    } else {
        windChillCell.textContent = 'N/A';
    };
};



