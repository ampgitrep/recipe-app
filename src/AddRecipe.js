import { useState } from "react";

const AddRecipe = ({ recipe, onSubmit, }) => {
  const [newRecipe, setRecipe] = useState({
    id: 0,
    recipeName: "",
    instructions: "",
    ingredients: [],

  });
  const ingredientsArray = [];
  
  const makeArray = () => {
  const ingredientsString = newRecipe.ingredients + '';
  console.log(ingredientsString);
  ingredientsArray.push(ingredientsString.split(","));
  return ingredientsArray;  
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    makeArray();
    setRecipe({...newRecipe, id:newRecipe.id+1,ingredients:newRecipe.ingredients = [...ingredientsArray] })
    recipe(newRecipe);
  };


  const handleChange = (event) => {
    setRecipe({
      ...newRecipe,
      [event.target.name]: event.target.value,
    });

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Recipe name
          <br />
          <input
            type="text"
            name="recipeName"
            placeholder="recipe name"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Instructions
          <br />
          <input
            type="text"
            name="instructions"
            placeholder="instructions"
            onChange={handleChange}
          />
        </label>
        <br/>
        <label>
        ingredients
        <br/>
        <input
            type="text"
            name="ingredients"
            placeholder="ingredients"
            onChange={handleChange}
          />
        </label>
        <br/>
        
          rating
          <br />
          <input
            type="radio"
            id="rating1"
            name="rating"
            value="1"
            ></input>
            <label for="rating1">1</label>
        
        <button>Submit Recipe</button>
      </form>
    </div>
  )

};

export default AddRecipe;