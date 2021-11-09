import { useState, useEffect } from "react";
import GetRating from "./Rating.js";

const AddRecipe = ({ recipe, onSubmit}) => {
  const [newRecipe, setRecipe] = useState({
    id: 0,
    recipeName: "",
    instructions: [],
    ingredients: [],
    rating: "",
  });

  //separate state slice for what I am trying to accomplish
  const [ingredientsArray, setIngredientsArray] = useState('');
  const [instructionsArray, setInstructionsArray] = useState('')
  const [ingredientsFieldEntry, setIngredientsFieldEntry] = useState("");
  const [instructionsFieldEntry, setInstructionsFieldEntry] = useState("");
  const [outputIngredientsList, setOutputIngredientsList] = useState([...ingredientsArray]);
  const [outputInstructionsList, setOutputInstructionsList] = useState([...instructionsArray]);
  const [rating, setRating] = useState(0);
  // //This is the old way of setting my ingredients array
  // const makeArray = () => {
  //   const ingredientsString = newRecipe.ingredients + '';
  //   ingredientsArray.push(ingredientsString.split(","));
  //   return ingredientsArray;
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
  //  const rating = getRating();
    //onSubmit handler, increase id # and set array to state object
    setRecipe({ ...newRecipe, ingredients: newRecipe.ingredients = [...outputIngredientsList], instructions: newRecipe.instructions = [...outputInstructionsList], rating: newRecipe.rating = rating})
    recipe(newRecipe);
    onSubmit();
    clearInputFields();
  };

  const getRating = (rate) => {
    setRating(rate);
    return rating;
  }

  //new idea, onClick for button
  const setIngredientsList = (e) => {
    e.preventDefault();
    //make a local copy of state array to not overwrite other ingredients
    const newEntry = [...ingredientsArray];
    newEntry.push(ingredientsFieldEntry);
    //update the list in state
    setIngredientsArray([...newEntry]);
    setOutputIngredientsList([...newEntry]);
    setIngredientsFieldEntry("");
  }
  //new idea, onClick for button
  const setInstructionsList = (event) => {
    event.preventDefault();
    //make a local copy of state array to not overwrite other ingredients
    const newEntry = [...instructionsArray];
    newEntry.push(instructionsFieldEntry);
    //update the list in state
    setInstructionsArray([...newEntry]);
    setOutputInstructionsList([...newEntry]);
    setInstructionsFieldEntry("")
  }

  const clearInputFields = () => {
    setRecipe({
      id: newRecipe.id + 1,
      recipeName: "",
      instructions: [],
      ingredients: [],
      rating: "",
    })
    setInstructionsArray([]);
    setIngredientsArray([]);
    setOutputIngredientsList([]);
    setOutputInstructionsList([])
  }


  return (
    <div style={{
     
      backgroundColor: "#f0f8ff",
      border: "3px solid",
      borderRadius: "10px"
    }}>
      <form onSubmit={handleSubmit}
        style={{ backgroundColor: "#f0f8ff",
        backgroundColor: "#f0f8ff",
        }}>
        <label>
          Recipe name
          <br />
          <input
            type="text"
            name="recipeName"
            placeholder="recipe name"
            value={newRecipe.recipeName}
            onChange={(e) => setRecipe({ ...newRecipe, recipeName: newRecipe.recipeName = e.target.value })}
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
            value={instructionsFieldEntry}
            onChange={(e) => setInstructionsFieldEntry(e.target.value)}
          />
        </label>
        <button onClick={setInstructionsList}> Add next step </button>
        <ol
          style={{
            textAlign: "left",
            border: "2px solid",
            borderRadius: "10px",
            width: "200px",
            backgroundColor: "#FBCEB1"
          }}>
          {outputInstructionsList.map((instructions) => (
            <li key={outputInstructionsList.indexOf(instructions)}>{instructions}</li>
          ))}
        </ol>
        <br />
        <label>
          ingredients
          <br />
          <input
            type="text"
            name="ingredients"
            placeholder="ingredients"
            value={ingredientsFieldEntry}
            onChange={(e) => setIngredientsFieldEntry(e.target.value)}

          />
        </label>
        <button onClick={setIngredientsList}> Add ingredient </button>
        <ol
          style={{
            textAlign: "left",
            border: "2px solid",
            borderRadius: "10px",
            width: "200px",
            backgroundColor: "#FBCEB1"
          }}>
          {outputIngredientsList.map((ingredient) => (
            <li>{ingredient}</li>
          ))}
        </ol>
        <GetRating getRating={getRating} />
        <button>Submit Recipe</button>
      </form>
      <br />
    </div>
  )

};

export default AddRecipe;