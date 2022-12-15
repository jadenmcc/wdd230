// === CURRENT YEAR FOR FOOTER COPYRIGHT ===
// Create instance of the date object.
const todaysDateCopyrightYear = new Date();

// Create variable that pulls the year from that date object.
let copyrightYear = todaysDateCopyrightYear.getFullYear();

// Select the <span> tag with the copyright symbol.
let copyrightContainer = document.getElementById('copyright-year');

// Put the year at the end of the tag after the copyright symbol.
copyrightContainer.insertAdjacentText('afterend', copyrightYear);


// === LAST MODIFIED DATE FOR FOOTER ===
document.getElementById('last-modified').textContent = `Last Updated: ${document.lastModified}`;


// === DRINKS ORDERED COUNTER ===
document.querySelector('.n-drinks').textContent = Number(window.localStorage.getItem('numDrinks-ls'));