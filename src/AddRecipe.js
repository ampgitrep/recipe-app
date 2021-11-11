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
  const [ingredientsFieldEntry, setIngredientsFieldEntry] = useState("");
  const [instructionsFieldEntry, setInstructionsFieldEntry] = useState("");
  const [rating, setRating] = useState(0);
  const [idNumIns, setIdNumIns] = useState(1)
  const [idNumIng, setIdNumIng] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault();
    //onSubmit handler, increase id # and set array to state object
    setRecipe({ ...newRecipe, ingredients: newRecipe.ingredients = [...ingredientsList], instructions: newRecipe.instructions = [...instructionsList], rating: newRecipe.rating = rating })
    recipe(newRecipe);
    clearInputFields();
  };

  const getIdIns = (idNumIns) => {
    let count = idNumIns + 1;
    setIdNumIns(count);
    return idNumIns;
  };

  const getIdIng = (idNumIng) => {
    let count = idNumIng + 1;
    setIdNumIng(count);
    return idNumIng;
  };

  const getRating = (rate) => {
    setRating(rate);
    return rating;
  };

  const getIngredientsList = (e) => {
    e.preventDefault();
    const newId = getIdIng(idNumIng);
    const currentList = [...ingredientsList];
    currentList.push({ id: ingredientsList.id = newId, ingredient: ingredientsList.ingredient = ingredientsFieldEntry })
    const newList = currentList.filter((e) => {
      return e.id > 0;
    });

    setIngredientsList(newList);
    console.log(ingredientsList);
    setIngredientsFieldEntry("");
  };

  const filteredIngredientList = ingredientsList.filter((e) => {
    return e.id > 0;
  }).map(({ id, ingredient }) => {
    return (
      <li
        style={{ marginLeft: "15px" }}
        key={ingredient} onClick={() => handleDelete(id)}> {ingredient} </li>)
  });

  const getInstructionsList = (e) => {
    e.preventDefault();
    const newId = getIdIns(idNumIns);
    const currentList = [...instructionsList];
    currentList.push({ id: instructionsList.id = newId, instruction: instructionsList.instruction = instructionsFieldEntry })
    const newList = currentList.filter((e) => {
      return e.id > 0;
    });
    setInstructionsList(newList);
    console.log(instructionsList);
    setInstructionsFieldEntry("");
  };

  const filteredInstructionList = instructionsList.filter((e) => {
    return e.id > 0;
  }).map(({ id, instruction }) => {
    return (
      <li
        key={instruction}
        style={{ marginLeft: "15px" }}
        onClick={() => handleDelete(id)}
      >{instruction} </li>
    );
  });
  
  const handleDelete = (id) => {
    console.log("The id you clicked is ", id)
    // filteredInstructionList.splice(id, 1);
  };

  const clearInputFields = () => {
    setRecipe({
      id: newRecipe.id + 1,
      recipeName: "",
      instructions: [],
      ingredients: [],
      rating: "",
    })
    setInstructionsList([]);
    setIngredientsList([]);
    setIdNumIng(0);
    setIdNumIns(0);
  }


  return (
    <div>
      <p style={{marginLeft:"200px",
                 }}>Add New Recipe</p>
      <form onSubmit={handleSubmit}
        style={{
          backgroundColor: "#C7F9FF",
          textAlign: "center",
          border: "1px solid",
          borderRadius: "2px",
          marginRight: "390px",
          width:"80%"
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
        <button 
        style={{marginLeft:"2px"}}
        onClick={getIngredientsList}> Add ingredient </button>
        <ul style={{textAlign:"left"}}>
        {filteredIngredientList}
        </ul>
        <label>
          <br />
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
        <button 
        style={{marginLeft:"2px"}}
        onClick={getInstructionsList}> Add next step </button>
        <ol style={{ textAlign: "left" }}>
          {filteredInstructionList}
        </ol>
        <GetRating getRating={getRating} />
        <button>Submit Recipe</button>
      </form>
    </div>
  )

};

export default AddRecipe;