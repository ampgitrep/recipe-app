import { useState } from "react";
import AddRecipe from "./AddRecipe";
import _ from "lodash";

const RecipeList = ( { recipeList } ) => {
  const [recipeIsClicked, setRecipeIsClicked] = useState('');
  return (
    <div style={{backgroundColor: "#f0f8ff",
    border: "2px solid",
    borderRadius: "10px", }}>
        RecipeList - 
      <ul>
      {recipeList.map((recipe) => ( 
        <li>{recipe.id} - {recipe.recipeName}</li>
      ))}
      </ul>
    </div>
  )
}



export default RecipeList;