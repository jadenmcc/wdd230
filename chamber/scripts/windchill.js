let currentTemp = parseFloat(document.getElementById('currentTemp').innerHTML, 10);

let currentWind = parseFloat(document.getElementById('currentWind').innerHTML, 10);

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

    return windChill;
};

const windChillCell = document.getElementById('windChillCell');

if (windChillStatus == true) {
    const masterWindChill = parseInt(calculateWindChill(currentTemp, currentWind));

    // windChillCell.textContent = masterWindChill;
    windChillCell.insertAdjacentText('afterbegin', masterWindChill);
} else {
    windChillCell.textContent = 'N/A';
}

