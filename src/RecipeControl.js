import Recipe from "./Recipe";
import RecipeList from "./RecipeList";
import AddRecipe from "./AddRecipe";
import { useState } from "react";




const RecipeControl = () => {
  const [recipe, setRecipe] = useState(
    {
      recipeName: "",
      instructions: [],
      ingredients: [],
      rating: "",
    }
  )
  const [prevArray, setPrevArray] = useState("");
  const [recipeList, setRecipeList] = useState([...prevArray]);

  const getRecipe = (getNewRecipe) => {
    setRecipe(getNewRecipe);
    const newArray = [...prevArray];
    newArray.push(getNewRecipe);
    console.log(newArray)
     setPrevArray(newArray);
    setRecipeList([...prevArray]);
    return getNewRecipe;
  }
  
  const onSubmit = () => {
    // console.log(recipe)
    
  }

  return (
    <div>
      <AddRecipe onSubmit={onSubmit} recipe={getRecipe} />
      <Recipe recipe={recipe} />
      <RecipeList recipeList={recipeList} />
    </div>
  )
};

export default RecipeControl;