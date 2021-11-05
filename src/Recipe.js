import AddRecipe from "./AddRecipe";
import react from "react";
import _ from "lodash";

const Recipe = ({ recipe }) => {
  if (recipe !== null) {
    return (
      <div>
        {recipe.id} - {recipe.recipeName}
        <br />
        ingredients: {_.forEach(recipe.ingredients, ((e) => {
          return (
            <ol>
              <li>
                {e}
              </li>
            </ol>
          )
        }
        ))}
        <br />
        instructions: {recipe.instructions}
      </div>
    )
  }
};

export default Recipe;