const requestPath = 'json/fruit.json';

let numDrinksOrdered = Number(window.localStorage.getItem('numDrinks-ls'));

// Fetch
fetch('json/fruit.json')
  .then(function(resp) {
    return resp.json();
  })
  .then(function(data) {
    let fruitsObject = {};
    fruitsObject = data;
    console.log(fruitsObject);
    
    let shuffledFruits = fruitsObject.sort(shuffleFruits);
    
    let optionTagsAll = document.querySelectorAll('option');

    optionTagsAll[1].textContent = shuffledFruits[0].name;
    optionTagsAll[8].textContent = shuffledFruits[0].name;
    optionTagsAll[15].textContent = shuffledFruits[0].name;
    
    optionTagsAll[2].textContent = shuffledFruits[1].name;
    optionTagsAll[9].textContent = shuffledFruits[1].name;
    optionTagsAll[16].textContent = shuffledFruits[1].name;
    
    optionTagsAll[3].textContent = shuffledFruits[2].name;
    optionTagsAll[10].textContent = shuffledFruits[2].name;
    optionTagsAll[17].textContent = shuffledFruits[2].name;
    
    optionTagsAll[4].textContent = shuffledFruits[3].name;
    optionTagsAll[11].textContent = shuffledFruits[3].name;
    optionTagsAll[18].textContent = shuffledFruits[3].name;
    
    optionTagsAll[5].textContent = shuffledFruits[4].name;
    optionTagsAll[12].textContent = shuffledFruits[4].name;
    optionTagsAll[19].textContent = shuffledFruits[4].name;
    
    optionTagsAll[6].textContent = shuffledFruits[5].name;
    optionTagsAll[13].textContent = shuffledFruits[5].name;
    optionTagsAll[20].textContent = shuffledFruits[5].name;


    function shuffleFruits(fruitA, fruitB) {
      return 0.5 - Math.random();
    };

    const outputContainer = document.querySelector('.output-area-card');
    const fNameOutput = document.getElementById('f-name-output');
    const eMailOutput = document.getElementById('e-mail-output');
    const phoneOutput = document.getElementById('phone-output');
    const fruitOutput1 = document.getElementById('fr-choice1-output');
    const fruitOutput2 = document.getElementById('fr-choice2-output');
    const fruitOutput3 = document.getElementById('fr-choice3-output');
    const instructionsOutput = document.getElementById('sp-instructions-output');
    const dateOrderedOutput = document.getElementById('date-ordered-output');
    const carbsOutput = document.getElementById('carbs-output');
    const proteinOutput = document.getElementById('protein-output');
    const fatOutput = document.getElementById('fat-output');
    const sugarOutput = document.getElementById('sugar-output');    
    const caloriesOutput = document.getElementById('calories-output');      
    
    
    const orderForm = document.getElementById("order-drink"); 
    orderForm.addEventListener("submit", handleOrder);

  
    function handleOrder(order) {
        order.preventDefault();
        const formData = new FormData(order.target);
    
        const formObject = Object.fromEntries(formData);
        // console.log(formObject);
        let nutritions = sumNutritions(formObject);
        displayOrder(formObject, nutritions);
        
        let inputsToClear = document.querySelectorAll('#f-name, #e-mail, #phone, #fruits-select-1, #fruits-select-2, #fruits-select-3, #order-instructions');

        inputsToClear.forEach(input => {
          input.value = '';
        });

        outputContainer.classList.add("displayed");
        outputContainer.classList.remove("hidden");

        numDrinksOrdered++;
        localStorage.setItem('numDrinks-ls', numDrinksOrdered);
    };
    
    function displayOrder(form, nutritions) {
        fNameOutput.textContent = form['f-name'];
        eMailOutput.textContent = form['e-mail'];
        phoneOutput.textContent = form.phone;
        fruitOutput1.textContent = form['fruits-selection-1'];
        fruitOutput2.textContent = form['fruits-selection-2'];
        fruitOutput3.textContent = form['fruits-selection-3'];
        instructionsOutput.textContent = form['order-instructions'];
        dateOrderedOutput.textContent = timeStamp();
        carbsOutput.textContent = nutritions.carbs;
        proteinOutput.textContent = nutritions.protein;
        fatOutput.textContent = nutritions.fat;
        sugarOutput.textContent = nutritions.sugar;        
        caloriesOutput.textContent = nutritions.calories;            
    };

    function sumNutritions(form) {
      let nutritions = {};

      // carbs
      let carbs1 = getNutritions(form, 1, 'carbohydrates');
      let carbs2 = getNutritions(form, 2, 'carbohydrates');
      let carbs3 = getNutritions(form, 3, 'carbohydrates');

      let sumCarbs = parseFloat(carbs1) + parseFloat(carbs2) + parseFloat(carbs3);

      nutritions.carbs = sumCarbs;

      // protein
      let proteins1 = getNutritions(form, 1, 'protein');            
      let proteins2 = getNutritions(form, 2, 'protein');          
      let proteins3 = getNutritions(form, 3, 'protein');
      
      let sumProteins = parseFloat(proteins1) + parseFloat(proteins2) + parseFloat(proteins3);

      nutritions.protein = sumProteins;

      // fat
      let fats1 = getNutritions(form, 1, 'fat');            
      let fats2 = getNutritions(form, 2, 'fat');          
      let fats3 = getNutritions(form, 3, 'fat');
      
      let sumFats = parseFloat(fats1) + parseFloat(fats2) + parseFloat(fats3);

      nutritions.fat = sumFats;

      // sugar
      let sugars1 = getNutritions(form, 1, 'sugar');            
      let sugars2 = getNutritions(form, 2, 'sugar');          
      let sugars3 = getNutritions(form, 3, 'sugar');
      
      let sumSugars = parseFloat(sugars1) + parseFloat(sugars2) + parseFloat(sugars3);

      nutritions.sugar = sumSugars;

      // calories
      let calories1 = getNutritions(form, 1, 'calories');            
      let calories2 = getNutritions(form, 2, 'calories');          
      let calories3 = getNutritions(form, 3, 'calories');
      
      let sumCalories = parseFloat(calories1) + parseFloat(calories2) + parseFloat(calories3);

      nutritions.calories = sumCalories;

      return nutritions;
    };

    function getNutritions(form, fruitSelectionNum, nutritionType) {
      let z = 0;

      if (nutritionType == 'carbohydrates') {
        for (fruit in fruitsObject) {
          if (form[`fruits-selection-${fruitSelectionNum}`] == fruitsObject[z].name) {
            const nutritionNum = parseFloat(fruitsObject[z].nutritions.carbohydrates);
            return nutritionNum;
          } else {
            z += 1;
          };
        };
      } else if (nutritionType == 'protein') {
        for (fruit in fruitsObject) {
          if (form[`fruits-selection-${fruitSelectionNum}`] == fruitsObject[z].name) {
            const nutritionNum = parseFloat(fruitsObject[z].nutritions.protein);
            return nutritionNum;
          } else {
            z += 1;
          };
        };
      } else if (nutritionType == 'fat') {
        for (fruit in fruitsObject) {
          if (form[`fruits-selection-${fruitSelectionNum}`] == fruitsObject[z].name) {
            const nutritionNum = parseFloat(fruitsObject[z].nutritions.fat);
            return nutritionNum;
          } else {
            z += 1;
          };
        };
      } else if (nutritionType == 'sugar') {
        for (fruit in fruitsObject) {
          if (form[`fruits-selection-${fruitSelectionNum}`] == fruitsObject[z].name) {
            const nutritionNum = parseFloat(fruitsObject[z].nutritions.sugar);
            return nutritionNum;
          } else {
            z += 1;
          };
        };
      } else if (nutritionType == 'calories') {
        for (fruit in fruitsObject) {
          if (form[`fruits-selection-${fruitSelectionNum}`] == fruitsObject[z].name) {
            const nutritionNum = parseFloat(fruitsObject[z].nutritions.calories);
            return nutritionNum;
          } else {
            z += 1;
          };
        };
      }
    };
    
    function timeStamp() {
        const d = new Date();
        let date = d.toDateString()
    
        const hours = d.getHours();
        const mins = d.getMinutes();
        const seconds = d.getSeconds();
    
        let timeToDisplay = `${date}, ${hours}:${mins}:${seconds}`;;
    
        return timeToDisplay;
    }
});

// // Tried to find a way to make the option tags
// // self-create, but ran out of time. Breakdown
// // is somewhere around "selectTag.appendChild(optionTagSelectable);"
// let selectTagsAll = document.querySelectorAll('select');

// for (selectTag in selectTagsAll) {
//   let optionTag = document.createElement('option');
//   optionTag.setAttribute('value', '');
//   optionTag.textContent = 'Please Select An Option';
//   for (prop in mainObj) {
//     let i = 0;
//     let optionTagSelectable = document.createElement('option');
//     optionTagSelectable.textContent = prop.name;
//     selectTag.appendChild(optionTagSelectable);
//   };
// };