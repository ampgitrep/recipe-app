import Recipe from "./Recipe";
import RecipeList from "./RecipeList";
import AddRecipe from "./AddRecipe";
import { useState } from "react";
import { Link } from "react-router-dom";
import WeeklyRecipes from "./WeeklyRecipes";
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
    console.log(recipeList);
    return getNewRecipe;
  }
  
  
  const toggleVisibility = (id) => {
    if (id !== clickedId || isActive === false) {
      setClickedId(id);
      return setIsActive(true);
    }
    if(id === clickedId){
    return setIsActive(false);
  }
}


  return (
    <div>
      <AddRecipe recipe={getRecipe} />
      <RecipeList onClick={toggleVisibility} recipeList={recipeList} />
      {isActive ?
        <Recipe recipe={recipeList} clickedId={clickedId} /> : null}
       <Link to="/AddRecipes" element={<RecipeControl/>}>Add New Recipe </Link>
        <Link to="/WeeklyRecipes" element={<WeeklyRecipes/>}>Pick your weekly recipes</Link>
    </div>
  )
};

export default RecipeControl;