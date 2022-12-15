// // drinkButton.onclick = displayInputs;

// function displayInputs (event) {
//     // fNameDisplay.textContent = fName;
//     fNameDisplay.textContent = fName;
//     event.preventDefault();
// }

// const form = document.getElementById('order-drink');
// const fNameDisplay = document.querySelector('#f-name-display');
// let fName = document.querySelector('#f-name').value;
// form.addEventListener('submit', displayInputs);
// // console.log(fName);

// // const drinkButton = document.getElementById('submit-button');








// function getData(form) {
//     var formData = new FormData(form);
  
//     // iterate through entries...
//     for (var pair of formData.entries()) {
//       console.log(pair[0] + ": " + pair[1]);
//     }
  
//     // ...or output as an object
//     console.log(Object.fromEntries(formData));
//   }
  
//   document.getElementById("order-drink").addEventListener("submit", function (e) {
//     e.preventDefault();
//     getData(e.target);
//   });

const fNameOutput = document.getElementById('f-name-output');
const eMailOutput = document.getElementById('e-mail-output');
const phoneOutput = document.getElementById('phone-output');
const fruitOutput1 = document.getElementById('fr-choice1-output');
const fruitOutput2 = document.getElementById('fr-choice2-output');
const fruitOutput3 = document.getElementById('fr-choice3-output');
const instructionsOutput = document.getElementById('sp-instructions-output');
const dateOrderedOutput = document.getElementById('date-ordered-output');


const orderForm = document.getElementById("order-drink"); 
orderForm.addEventListener("submit", handleOrder);

function handleOrder(order) {
    order.preventDefault();
    const formData = new FormData(order.target);
    // console.log(formData);

    const formObject = Object.fromEntries(formData);
    console.log(formObject);
    // console.log(`${formObject}.${'f-name'}.${value}`); <-- this doesn't work
    // console.log(formObject['f-name']);
    // console.log(formObject.phone);
    // // return formInputs;
    displayOrder(formObject);
    // console.log(formObject[1])
    // fNameOutput.textContent = formObject[1];
};

function displayOrder(form) {
    fNameOutput.textContent = form['f-name'];
    eMailOutput.textContent = form['e-mail'];
    phoneOutput.textContent = form.phone;
    fruitOutput1.textContent = form['fruits-selection-1'];
    fruitOutput2.textContent = form['fruits-selection-2'];
    fruitOutput3.textContent = form['fruits-selection-3'];
    instructionsOutput.textContent = form['order-instructions'];
    dateOrderedOutput.textContent = timeStamp();
};

function timeStamp() {
    // const d = new Date();

    // const hiddenDate = d.toDateString()

    // const hours = d.getHours();
    // const mins = d.getMinutes();
    // const seconds = d.getSeconds();

    // document.getElementById("hidden-time-stamp").value = `${hiddenDate}, ${hours}:${mins}:${seconds}`;


    const d = new Date();

    let date = d.toDateString()

    const hours = d.getHours();
    const mins = d.getMinutes();
    const seconds = d.getSeconds();


    let timeToDisplay = `${date}, ${hours}:${mins}:${seconds}`;;

    return timeToDisplay;
}

function calculateCarbs (fruit1, fruit2, fruit3) {
    const carbs = 'poop';
}





// const orderForm = document.getElementById("order-drink"); 
// orderForm.addEventListener("submit", myFunction);

// function myFunction() {
//     var x = document.getElementById("order-drink").elements[0].value;
//     // document.getElementById("f-name-output").innerHTML = x;
//     console.log(x);
// }






// function logSubmit(event) {
//     log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
//     event.preventDefault();
// };
  
// const form = document.getElementById('order-drink'); 
// const log = document.getElementById('f-name-output');
// form.addEventListener('submit', logSubmit);








// const orderForm = document.getElementById("order-drink"); 
// orderForm.addEventListener("formdata", handleOrder);

// function handleOrder(order) {
//     console.log('formdata fired');
//     const data = order.formData;
//     console.log(data);
//     for (const value of data.values()) {
//         console.log(value);
//     }


//     console.log('wait!');
//     // order.preventDefault();

//     // order.preventDefault();
//     // const formData = new FormData(order.target);
//     // // const formObject = Object.fromEntries(formData);
//     // // const formObject = formData.getAll();
//     // const formObject = formData.entries();
//     // console.log(formObject);
//     // // return formInputs;
//     // // displayOrder(formObject);
//     // console.log(formObject[1])
//     // // fNameOutput.textContent = formObject[1];
// };