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

  const getRecipe = (getNewRecipe) => {
    setRecipe(getNewRecipe);
    const newArray = [...prevArray];
    newArray.push(getNewRecipe);
     setPrevArray(newArray);
    setRecipeList(newArray);
    console.log(getNewRecipe)
    return getNewRecipe;
  }
  
  const handleHide = () => {
    setIsActive(false);
  }
  const handleShow = () => {
    setIsActive(true);
  }

  return (
    <div style={{
    display: "flex",
    flexWrap: "wrap",}}>
      <AddRecipe recipe={getRecipe} /><RecipeList recipeList={recipeList} />
      {isActive ? 
      <Recipe recipe={recipe} /> : null}
      
    </div>
  )
};

export default RecipeControl;