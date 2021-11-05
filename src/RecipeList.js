import { useState } from "react";
import AddRecipe from "./AddRecipe";
import _ from "lodash";

const RecipeList = ( { recipe } ) => {
  const [recipeIsClicked, setRecipeIsClicked] = useState('');
  const recipeList = [];
  return (
    <div>
      {_.forEach(...recipeList, (e)=> {return (<div>{e}</div>)})}
    </div>
  )
}



export default RecipeList;