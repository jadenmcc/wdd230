const d = new Date();

const hiddenDate = d.toDateString()

const hours = d.getHours();
const mins = d.getMinutes();
const seconds = d.getSeconds();

document.getElementById("hidden-time-stamp").value = `${hiddenDate}, ${hours}:${mins}:${seconds}`;