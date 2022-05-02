// import functions and grab DOM elements
import {renderIngredient, renderMeal} from './utils.js';
const ingredientForm = document.getElementById('ingredient-form');
const ingredientList = document.getElementById('ingredient-list');
const removeButton = document.getElementById('remove');

// let state
let ingredients = [];
// set event listeners
function renderIngredients() {
    ingredientList.textContent = '';
    for (let ingredient of ingredients) {
        const li = renderIngredient(ingredient);
        ingredientList.append(li);
    }
}

function removeIngredient() {
    ingredients.pop();
    renderIngredients();
}

ingredientForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const ingredientData = new FormData(ingredientForm);
    let ingredient = {
        ingredient: ingredientData.get('ingredient'),
        quantity: ingredientData.get('quantity'),
        measurement: ingredientData.get('measurement'),
    };
    ingredients.push(ingredient);
    renderIngredients();
    ingredientForm.reset();
});

removeButton.addEventListener('click', () => {removeIngredient();});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
