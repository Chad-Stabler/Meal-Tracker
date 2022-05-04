## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

HTML:
--whatever introduction in header
-->section containing a form to get input for ingredient and amount needed
--dropdown for type of measurement(cups, ounces, tablespoons, etc.)
--then prints ingredients list to the document
--also a remove button to remove the last ingredient from the list
-->section containing a save meal input that takes the name of the meal
-- then prints it in the list of meals with the number of ingredients in another section
js:
--grab form and input from the DOM
--add event listener for form that pushes the ingredient to an array and then prints the array to the document
--add event listener for save meal to clear the document and print the name of the meal with the number of ingredients.
--PURE functions when calling to render imported from a utils file
