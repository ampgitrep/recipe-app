import { useState } from "react";
import AddRecipe from "./AddRecipe";

const RecipeList = ( { recipe } ) => {
  const [recipeIsClicked, setRecipeIsClicked] = useState('');
  const recipeList = [];
  if(recipe){
  recipe.forEach((val, index) => {
    recipeList.push({value: val, id: index});
  })
}
  return (
    <div>
      {recipeList}
    </div>
  )
};


export default RecipeList;