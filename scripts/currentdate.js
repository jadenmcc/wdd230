// Formatting for time display.
const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};

// Access DOM object for inserting the date.
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

// Create instance of date object.
const todaysdate = new Date();

// COPYRIGHT - For inserting current year next to Copyright Symbol.
let copyrightYear = todaysdate.getFullYear();

let footer = document.querySelector("footer");
let span = footer.querySelector("span");
span.insertAdjacentText("beforeend", copyrightYear);