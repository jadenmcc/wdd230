// === CURRENT DATE FOR HEADER ===
// Set the formatting for the parameter to be passed into 
// "toLocaleDateString" to format the date appearance.
const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};

// Access the <p> tag by its ID and insert the date using the formatting created above.
document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-US', options);


// === CURRENT YEAR FOR FOOTER ===
// Create another instance of the date object.
const todaysDate = new Date();

// Create variable that pulls the year from that date object.
let copyrightYear = todaysDate.getFullYear();

let footer = document.querySelector('footer');
let span = footer.querySelector('span');
span.insertAdjacentText('beforeend', copyrightYear);


// === LAST MODIFIED DATE FOR FOOTER ===
// Next two lines also work, but I wanted to try using the more succinct code this time.
// let dateLastModified = new Date(document.lastModified);
// document.getElementById('last-modified').textContent = dateLastModified.toLocaleString('en-US');

document.querySelector('#last-modified').textContent = `Last Updated: ${document.lastModified}`;