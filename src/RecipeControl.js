import Recipe from "./Recipe";
import RecipeList from "./RecipeList";
import AddRecipe from "./AddRecipe";
import { useState } from "react";



// const newName = (currentName) => {
//   return currentName;
// }

const currentRecipe = (currentNewRecipe) => {
  return currentNewRecipe;
}

// const newIngr = (currentIngr) => {
//   if (currentIngr !== ingredients) {
//     return currentIngr;
//   }
//   return ingredients;
// };

// const newRating = (currentRating) => {
//   if (currentRating !== rating) {
//     return currentRating;
//   }
//   return rating;
// };

const RecipeControl = () => {
  const [recipe, setRecipe] = useState({})
  // const [ingredients, setIngredients] = useState('');
  // const [rating, setRating] = useState('');


  const getNewId = (currentId) => {
    currentId += 1;
    return currentId;
  }

  // const getNewName = (newRName) => {
  //   const currentNewName = newName(newRName);
  //   setRecipeName(currentNewName);
  //   return currentNewName;
  // }

  const getRecipe = (getNewRecipe) => {
    const newRecipe = currentRecipe({...getNewRecipe});
    setRecipe(newRecipe);
    return newRecipe;
  }

  // const getIngredients = () => {
  //   const newIngredients = newIngr(ingredients);
  //   setIngredients(newIngredients);
  // }

  // const getRating = () => {
  //   const newRating = newRate(rating);
  //   setRating(newRating);
  // }

  const onSubmit = () => {  
   console.log(recipe) 
  }
  return (
    <div>
      <AddRecipe onSubmit={onSubmit} id={getNewId} recipe={getRecipe}  />
      <Recipe />
    </div>
  )
};

export default RecipeControl;