import { useState } from "react";
import GetRating from "./Rating.js";
const AddRecipe = ({ recipe }) => {


  const [newRecipe, setRecipe] = useState({
    id: 0,
    recipeName: "",
    instructions: [],
    ingredients: [],
    rating: "",
  });
  const [instructionsList, setInstructionsList] = useState([{
    id: 0,
    instruction: "",
  }]);
  const [ingredientsList, setIngredientsList] = useState([{
    id: 0,
    instruction: ""
  }]);
  const [ingredientsArray, setIngredientsArray] = useState("");
  const [instructionsArray, setInstructionsArray] = useState(instructionsList)
  const [ingredientsFieldEntry, setIngredientsFieldEntry] = useState("");
  const [instructionsFieldEntry, setInstructionsFieldEntry] = useState("");
  const [outputIngredientsList, setOutputIngredientsList] = useState([...ingredientsArray] || "");
  const [outputInstructionsList, setOutputInstructionsList] = useState(instructionsArray || "");
  const [rating, setRating] = useState(0);
  const [idNum, setIdNum] = useState(1)
  const [currentInstructionsList, setCurrentInstructionsList] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    //onSubmit handler, increase id # and set array to state object
    setRecipe({ ...newRecipe, ingredients: newRecipe.ingredients = [...ingredientsList], instructions: newRecipe.instructions = [...instructionsList], rating: newRecipe.rating = rating })
    recipe(newRecipe);
    clearInputFields();
  };

  const getId = (idNum) => {
    let count = idNum + 1;
    setIdNum(count);
    return idNum;
  }

  const getRating = (rate) => {
    setRating(rate);
    return rating;
  }

  const getIngredientsList = (e) => {
    e.preventDefault();
    const newId = getId(idNum);
    const currentList = [...ingredientsList];
    currentList.push({ id: ingredientsList.id = newId, ingredient: ingredientsList.ingredient = ingredientsFieldEntry })
    const newList = currentList.filter((e)=> {
     return e.id > 0;
    })
    setIngredientsList(newList);
    console.log(ingredientsList);
    setIngredientsFieldEntry("");
  }
  const filteredIngredientList = ingredientsList.filter((e) => {
    return e.id > 0;
  }).map(({ id, ingredient }) => {
    return (
    <li
    style={{marginLeft: "15px"}} 
    key={ingredient} onClick={() => handleDelete(id)}> {ingredient} </li>)
  })

  const getInstructionsList = (e) => {
    e.preventDefault();
    const newId = getId(idNum);
    const currentList = [...instructionsList];
    currentList.push({ id: instructionsList.id = newId, instruction: instructionsList.instruction = instructionsFieldEntry })
    const newList = currentList.filter((e)=> {
      return e.id > 0;
    })
    setInstructionsList(newList);
    console.log(instructionsList);
    setInstructionsFieldEntry("");
  }
  const filteredInstructionList = instructionsList.filter((e) => {
    return e.id > 0;
  }).map(({ id, instruction }) => {
    return (
    <ol>
      <li 
      key={instruction} 
      onClick={() => handleDelete(id)}
      > {instruction} </li>
      </ol>)
  })

  const handleDelete = (id) => {
    console.log("The id you clicked is ", id)
   // filteredInstructionList.splice(id, 1);
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
      borderRadius: "6px"
    }}>
      <form onSubmit={handleSubmit}
        style={{
          backgroundColor: "#f0f8ff",
        }}>
        <label>
          Recipe Name
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
          Ingredients
          <br />
          <input
            type="text"
            name="ingredients"
            placeholder="ingredients"
            value={ingredientsFieldEntry}
            onChange={(e) => setIngredientsFieldEntry(e.target.value)}

          />
        </label>
        <button onClick={getIngredientsList}> Add ingredient </button>
        {filteredIngredientList}
        <label>
          <br/>
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
        <button onClick={getInstructionsList}> Add next step </button>
        {filteredInstructionList}
        <br />
        <GetRating getRating={getRating} />
        <button>Submit Recipe</button>
      </form>
      <br />
    </div>
  )

};

export default AddRecipe;