const d = new Date();

const hiddenDate = d.toDateString()

const hours = d.getHours();
const mins = d.getMinutes();
const seconds = d.getSeconds();

document.getElementById("hidden-time-stamp").value = `${hiddenDate}, ${hours}:${mins}:${seconds}`;
// document.getElementById("time").value = hours + ":" + mins + ":" + seconds;

// For testing the method:
// console.log(document.getElementById("hiddenTimeStamp").value);