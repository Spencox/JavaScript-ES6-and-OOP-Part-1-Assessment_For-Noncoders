const recipes = [];

// Update a recipe when the "Add Recipe" button is clicked
// If the recipe is new, then add the recipe to the recipes array 
// Use addRecipes() function to add the new recipe
// Else edit the recipe in the recipes array
// Clear the form's input fields using the clearInputFields() function
// Finally, display the recipes using the displayRecipes() function


document.getElementById('add-recipe-btn').addEventListener('click', function() {
    console.log("Button Clicked")
    const title = document.getElementById('title').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;
    
    const index = this.getAttribute('data-index');
    console.log(index);
    
    if (index !== null) {
        // Update an existing recipe
        recipes[index] = { title, ingredients, instructions };
        // Clear input fields
        clearInputFields();
        this.removeAttribute('data-index');
    } else {
        // If the data-index attribute is not set, it's a new recipe
        if (title && ingredients && instructions) {
            addRecipe({ title, ingredients, instructions });
            clearInputFields();
        }
    }

    displayRecipes();
});

// TODO: Clear the form's input fields
function clearInputFields() {
    // Write your code here for task 1
    document.getElementById('title').value = '';
    document.getElementById('ingredients').value = '';
    document.getElementById('instructions').value = '';
}

// TODO:Add the new recipe to the recipes array
function addRecipe(recipe) {
    // Write your code here for task 2
    recipes.push(recipe);
    displayRecipes(recipes);
}

// TODO: Display Recipes
function displayRecipes() {
    // Write your code here for task 3
    console.log("Display Recipies");
       
}

// Edit the recipe object when the Edit button is clicked
function editRecipe(index) {
    // Set a flag to indicate that we are in edit mode
    document.getElementById('add-recipe-btn').setAttribute('data-index', index);
    // Write your code here for task 4
}

// Delete the recipe object when the Delete button is clicked
function deleteRecipe(index){
    if (index >= 0 && index < recipes.length) {
        recipes.splice(index, 1); // Remove 1 element at the specified index
        displayRecipes();
    }
}