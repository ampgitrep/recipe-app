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
  const [isActive, setIsActive] = useState(false);
  const [prevArray, setPrevArray] = useState("");
  const [recipeList, setRecipeList] = useState([...prevArray]);
  const [clickedId, setClickedId] = useState("")
  const getRecipe = (getNewRecipe) => {
    setRecipe(getNewRecipe);
    const newArray = [...prevArray];
    newArray.push(getNewRecipe);
    setPrevArray(newArray);
    setRecipeList(newArray);
    return getNewRecipe;
  }
  
  
  const toggleVisibility = (id) => {
    setClickedId(id);
    if (isActive === true) {
      return setIsActive(false);
    }
    console.log(clickedId)
    return setIsActive(true);
  }


  return (
    <div>
      <AddRecipe recipe={getRecipe} />
      <RecipeList onClick={toggleVisibility} recipeList={recipeList} />
      {isActive ?
        <Recipe recipe={recipe} /> : null}

    </div>
  )
};

export default RecipeControl;