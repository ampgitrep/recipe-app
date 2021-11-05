import AddRecipe from "./AddRecipe";
import react from "react";

const Recipe = ({id, recipeName, instructions, ingredients, rating}) => {


  return (
    <div>
      {id} - {recipeName}
      <br/>
      instructions: {instructions}
      </div>
  )
};

export default Recipe;