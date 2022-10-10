const shoppinglist = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');


// MY CODE
// button.addEventListener('click', function() {
//     inputValue = input.value;
//     input.value = '';
//     const listItemNew = document.createElement('li');
//     const spanNew = document.createElement('span');
//     const buttonNew = document.createElement('button');
//     listItemNew.appendChild(spanNew);
//     listItemNew.appendChild(buttonNew);
//     spanNew.textContent = inputValue;
//     buttonNew.textContent = 'Delete';
//     shoppinglist.appendChild(listItemNew);
//     buttonNew.addEventListener('click', listItemNew.remove());
//     focus(input);
// })

// SOLUTION CODE APPLIED TO MY CODE
button.addEventListener('click', function() {
    const myItem = input.value;
    input.value = '';

    const listItemNew = document.createElement('li');
    const spanNew = document.createElement('span');
    const buttonNew = document.createElement('button');
    
    listItemNew.appendChild(spanNew);
    listItemNew.appendChild(buttonNew);
    spanNew.textContent = myItem;
    buttonNew.textContent = 'Delete';
    shoppinglist.appendChild(listItemNew);

    buttonNew.addEventListener('click', function() {
        shoppinglist.remove(listItemNew);
    });

    input.focus();
});