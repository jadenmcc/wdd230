const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};

document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US', options);


const todaysDate = new Date();

let copyrightYear = todaysDate.getFullYear();

let footer = document.querySelector('footer');
let span = footer.querySelector('span');
span.insertAdjacentText('beforeend', copyrightYear);



document.querySelector('#last-modified').textContent = `Last Updated: ${document.lastModified}`;

const mainTag = document.querySelector('main');


if (mainTag.classList.contains('home')) {

    const dayOfTheWeek = todaysDate.getDay();

    const meetingBanner = document.getElementById('meeting-banner');

    if (dayOfTheWeek != 1 && dayOfTheWeek != 2) {
        meetingBanner.style.display = "none";
    } else {
        meetingBanner.style.display = "block";
    };
} else {
    const dummyVariableThatDoesNothing = "this doesn't do anything."
};
