// import functions and grab DOM elements
const ingredientForm = document.getElementById('ingredient-form');

// let state
let ingredients = [];
// set event listeners 
ingredientForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const ingredientData = new FormData(ingredientForm);
    let ingredient = {
        ingredient: ingredientData.get('ingredient'),
        quantity: ingredientData.get('quantity'),
        measurement: ingredientData.get('measurement'),
    };
    ingredients.push(ingredient);
    ingredientForm.reset();
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
