// initialize array to hold recipes
const recipes = [];

// select add button and set up event listener
document.getElementById('add-recipe-btn').addEventListener('click', function() {

    // DOM Selectors for inputted values
    const title = document.getElementById('title').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;
    
    // check if edit flag present 
    const index = this.getAttribute('data-index');
    
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

// clear the form's input fields
function clearInputFields() {
    document.getElementById('title').value = '';
    document.getElementById('ingredients').value = '';
    document.getElementById('instructions').value = '';
}

// add the new recipe to the recipes array
function addRecipe(recipe) {
    recipes.push(recipe);
}

// display Recipes
function displayRecipes() {
    // DOM selector for ul of recopies
    const recipesListEl = document.getElementById('recipes');
    // clear list for new display of current recipes list
    recipesListEl.innerHTML = '';
    // iterate over recipes and create list items
    recipes.forEach((recipe, index) => {
        const recipesListItem = document.createElement('li');
        recipesListItem.innerHTML =
`
<li data-index="${index}">
    <h3>${recipe.title}</h3>
    <p><b>Ingredients: </b>${recipe.ingredients}</p>
    <p><b>Instructions: </b>${recipe.instructions}</p>
    <button onclick="editRecipe(${index});">Edit</button>
    <button onclick="deleteRecipe(${index});">Delete</button>
</li>
<hr />        
` 
    recipesListEl.appendChild(recipesListItem);
    })
}

// edit the recipe object when the Edit button is clicked
function editRecipe(index) {
    // Set a flag to indicate that we are in edit mode
    document.getElementById('add-recipe-btn').setAttribute('data-index', index);
    // get selected recipe and display in form
    const selectedRecipe = recipes[index];
    console.log(selectedRecipe);
    document.getElementById('title').value = selectedRecipe.title;
    document.getElementById('ingredients').value = selectedRecipe.ingredients;
    document.getElementById('instructions').value = selectedRecipe.instructions;
}

// Delete the recipe object when the Delete button is clicked
function deleteRecipe(index){
    if (index >= 0 && index < recipes.length) {
        recipes.splice(index, 1); // Remove 1 element at the specified index
        displayRecipes();
    }
}