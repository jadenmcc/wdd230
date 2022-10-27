const visitDisplay = document.querySelector('.last-visit');

const msInDay = 1000 * 3600 * 24;

if (window.localStorage.length < 2) {

    const daysElapsed = 'This is your first visit!';

    localStorage.setItem('last-time-stamp', Date.now());
    localStorage.setItem('current-time-stamp', localStorage.getItem('last-time-stamp'));

    visitDisplay.textContent = daysElapsed;

} else {
    localStorage.setItem('last-time-stamp', localStorage.getItem('current-time-stamp'));
    localStorage.setItem('current-time-stamp', Date.now());

    let lastTimeStamp = Number(window.localStorage.getItem('last-time-stamp'));
    let currentTimeStamp = Number(window.localStorage.getItem('current-time-stamp'));

    let lastConverted = lastTimeStamp / msInDay;
    let currentConverted = currentTimeStamp / msInDay;

    let diff = currentConverted - lastConverted;

    if (diff < 1) {
        daysElapsed = 0;
        visitDisplay.textContent = daysElapsed;
    } else {
        daysElapsed = Math.floor(diff);
        visitDisplay.textContent = daysElapsed;
    }
}