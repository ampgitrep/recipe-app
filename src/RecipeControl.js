import Recipe from "./Recipe";
import RecipeList from "./RecipeList";
import AddRecipe from "./AddRecipe";
import { useState } from "react";



const currentRecipe = (currentNewRecipe) => {
  return currentNewRecipe;
}

const RecipeControl = () => {
  const [recipe, setRecipe] = useState({})
  const [recipeList, setRecipeList] = useState([]);
  const currentRecipeList = [];
  const getRecipe = (getNewRecipe) => {
    const newRecipe = currentRecipe(getNewRecipe);
    setRecipe(newRecipe);
    setRecipeList([...recipeList], newRecipe);
    return newRecipe;
  }
  
  const onSubmit = () => {  
    console.log(recipe);
    console.log(recipeList);
  }

  return (
    <div>
      <AddRecipe onSubmit={onSubmit} recipe={getRecipe}  />
      <Recipe recipe={recipe}/>
      <RecipeList recipe={recipe}/>
    </div>
  )
};

export default RecipeControl;