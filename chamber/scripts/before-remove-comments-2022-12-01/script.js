// === CURRENT DATE FOR HEADER ===
// Set the formatting for the parameter to be passed into 
// "toLocaleDateString" to format the date appearance.
const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};

// Access the <p> tag by its ID and insert the date using the formatting created above.
document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US', options);


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

// === MEETING BANNER ===
const mainTag = document.querySelector('main');

// For testing if the mainTag.classList... works.
// let tester = mainTag.classList.contains('home');

if (mainTag.classList.contains('home')) {
    // console.log('It does');

    const dayOfTheWeek = todaysDate.getDay();

    const meetingBanner = document.getElementById('meeting-banner');

    // Next two lines are for testing the banner condition:
    // const fakeDate = new Date('October 18, 2022 23:15:30');
    // const dayOfTheWeek = fakeDate.getDay();

    if (dayOfTheWeek != 1 && dayOfTheWeek != 2) {
        meetingBanner.style.display = "none";
    } else {
        meetingBanner.style.display = "block";
    };
} else {
    // console.log('It does not.');
};
