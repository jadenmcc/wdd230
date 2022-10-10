const input = document.querySelector('input');
const button = document.querySelector('button');
const listChapters = document.querySelector('ul');

button.addEventListener('click', function() {
    if (input.value.length == 0) {
        alert("Please insert a chapter reference and try again.");
    } else {
        const listItem = document.createElement('li');
        const deleteBtn = document.createElement('button');
        const myChapter = input.value;

        listItem.textContent = myChapter;
        deleteBtn.textContent = "❌";

        listItem.appendChild(deleteBtn);
        listChapters.appendChild(listItem);

        deleteBtn.addEventListener('click', function() {
            listItem.remove();
        });
    }

    input.value = '';

    input.focus();
});