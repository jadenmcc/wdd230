// Create instance of date object.
const todaysdate = new Date();

// COPYRIGHT - For inserting current year next to Copyright Symbol.
let copyrightYear = todaysdate.getFullYear();

let footer = document.querySelector("footer");
let span = footer.querySelector("span");
span.insertAdjacentText("beforeend", copyrightYear);

// LAST MODIFIED DATE - For inserting the date the page was last modified.
let oLastModif = new Date(document.lastModified);
document.getElementById("last-modified").textContent = oLastModif;