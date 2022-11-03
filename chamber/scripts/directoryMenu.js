const gridbutton = document.querySelector("#directoryGrid");
const listbutton = document.querySelector("#directoryList");
const directoryDisplay = document.querySelector("article");


gridbutton.addEventListener("click", () => {
	// example using arrow function
	directoryDisplay.classList.add("grid");
	directoryDisplay.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
	directoryDisplay.classList.add("list");
	directoryDisplay.classList.remove("grid");
}