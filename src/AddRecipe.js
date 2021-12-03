import { useState } from "react";
import GetRating from "./Rating.js";
import QuantityBox from "./QuantityBox.js";
import Select from "react-select";
import UserRecipes from "./UserRecipes.json";

const AddRecipe = ({ recipe, }) => {

  const [newRecipe, setRecipe] = useState({
    id: 7,
    recipeName: "",
    instructions: [],
    quantity: 0,
    ingredients: [{
      ingredient: "",
      measure: "",
      quantity: 0,
    }],
    image: "",
    rating: "",
  });
  const [instructionsList, setInstructionsList] = useState([{
    id: 0,
    instruction: "",
  }]);
  const [ingredientsList, setIngredientsList] = useState([{
    ingredient: "",
    measure: "",
    quantity: 0,
  }]);
  const [ingredientsFieldEntry, setIngredientsFieldEntry] = useState("");
  const [instructionsFieldEntry, setInstructionsFieldEntry] = useState("");
  const [rating, setRating] = useState(0);
  const [idNumIns, setIdNumIns] = useState(1)
  const [idNumIng, setIdNumIng] = useState(1)
  const [quantity, setQuantity] = useState(1);
  const [dropDown, setDropDown] = useState({ value: 'each', label: 'each' });
  const [image, setImage] = useState(null);
  const [resetFlag, setResetFlag] = useState(false);
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      setResetFlag(true);
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    //onSubmit handler, increase id # and set array to state object
    setRecipe({ ...newRecipe, id: newRecipe.id  += 1,  ingredients: newRecipe.ingredients = [...ingredientsList], instructions: newRecipe.instructions = [...instructionsList], rating: newRecipe.rating = rating, image: newRecipe.image = image })
    recipe(newRecipe);
    clearInputFields();
  };

  const options = [
    { value: 'oz', label: 'oz' },
    { value: 'cups', label: 'cups' },
    { value: 'tsps', label: 'tsps' },
    { value: 'tbs', label: 'tbs' },
    { value: 'each', label: 'each' },
    { value: 'pinch', label: 'pinch' },
    { value: 'taste', label: 'taste' },
  ];

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

  const getQuantity = (amt) => {
    setQuantity(amt);

  }

  const getIngredientsList = (e) => {
    e.preventDefault();
    const newId = getIdIng(idNumIng);
    const currentList = [...ingredientsList];
    currentList.push({ id: ingredientsList.id = newId, ingredient: ingredientsList.ingredient = ingredientsFieldEntry, measure: ingredientsList.measure = dropDown.value, quantity: ingredientsList.quantity = quantity })
    const newList = currentList.filter((e) => {
      return e.id > 0;
    });

    setIngredientsList(newList);;
    setIngredientsFieldEntry("");
  };
  const filteredIngredientList = ingredientsList.filter((e) => {
    return e.id > 0;
  }).map(({ id, ingredient, measure, quantity }) => {
    return (
      <li
        style={{ marginLeft: "15px" }}
        key={ingredient} >{quantity} {measure} {ingredient} <button onClick={() => handleDeleteIngredient(id)}>delete</button></li>)
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

    setInstructionsFieldEntry("");
  };

  const handleDeleteIngredient = (id) => {
    const currentList = [...ingredientsList].filter(entry => { return entry.id !== id });
    // filteredInstructionList.splice(id, 1);
    setIngredientsList(currentList);
  };
  const handleDeleteInstruction = (id) => {
    const currentList = [...instructionsList].filter(entry => { return entry.id !== id });
    // filteredInstructionList.splice(id, 1);
    setInstructionsList(currentList);
  };

  const styles = {
    select: {
      width: '50%',
      maxWidth: 600,
      alignItems: 'center',
      justifyItems: 'center'
    }
  }

  //we want to run once initially, then run without filter
  const filteredInstructionList = instructionsList.filter((e) => {
    return e.id > 0;
  }).map(({ id, instruction }) => {
    return (
      <li
        key={instruction}
        style={{ marginLeft: "15px" }}
      >{instruction} <button onClick={() => handleDeleteInstruction(id)}>delete</button></li>
    );
  });

 

  
  const clearInputFields = () => {
    setRecipe({
      id: newRecipe.id,
      recipeName: "",
      instructions: [],
      ingredients: [],
      rating: "",
      image: null,
    })
    setInstructionsList([{
      id: 0,
      instruction: "",
    }]);
    setIngredientsList([{
      id: 0,
      ingredient: "",
    }]);
    setIdNumIng(1);
    setIdNumIns(1);
    setResetFlag(false);
  }
  return (
    <div class="tile box is-vertical is-child">
      <p class="label"> Add Recipe </p>
      <form onSubmit={handleSubmit}
        style={{
          backgroundColor: "#CFFFFF",
          textAlign: "center"
        }}>
        <label class="label">
          Recipe Name
        </label>
        <input
          type="text"
          name="recipeName"
          placeholder="recipe name"
          value={newRecipe.recipeName}
          onChange={(e) => setRecipe({ ...newRecipe, recipeName: newRecipe.recipeName = e.target.value })}
        />
        <label class="label">
          Ingredients
        </label>


        <div style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Select className="dd1" style={styles.select} options={options} placeholder={'each'} defaultValue={dropDown} openonclick={true} value={dropDown} autofocus={true} onChange={setDropDown} />
        </div>
        <QuantityBox getQuantity={getQuantity} /><input

          type="text"
          name="ingredients"
          placeholder="ingredients"
          value={ingredientsFieldEntry}
          onChange={(e) => setIngredientsFieldEntry(e.target.value)}
        />

        <button
          style={{ marginLeft: "2px" }}
          onClick={getIngredientsList}> Add ingredient </button>
        <ul style={{ textAlign: "left" }}>
          {filteredIngredientList}
        </ul>
        <label class="label">

          Instructions
        </label>
        <input
          type="text"
          name="instructions"
          placeholder="instructions"
          value={instructionsFieldEntry}
          onChange={(e) => setInstructionsFieldEntry(e.target.value)}
        />
        <button
          style={{ marginLeft: "2px" }}
          onClick={getInstructionsList}> Add next step </button>
        <ul style={{ textAlign: "left" }}>
          {filteredInstructionList}
        </ul>
        {resetFlag === false ?
          <input type="file" onChange={onImageChange} className="filetype" />
          :
          `✅ image uploaded successfully `}
      <p class="label"> Difficulty:</p> <GetRating getRating={getRating} />
        <button>Submit Recipe</button>
       
      </form>
    </div>
  )

};

export default AddRecipe;