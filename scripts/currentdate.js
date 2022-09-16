// Formatting for time display.
const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};

// Access DOM object for inserting the date.
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

// Create instance of date object.
const todaysdate = new Date();

// Create array for 