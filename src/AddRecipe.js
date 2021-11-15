import { useState } from "react";
import GetRating from "./Rating.js";
import QuantityBox from "./QuantityBox.js";
import Select from "react-select";

const AddRecipe = ({ recipe }) => {

  const [newRecipe, setRecipe] = useState({
    id: 0,
    recipeName: "",
    instructions: [],
    quantity: 0,
    ingredients: [],
    image: "",
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
  const [quantity, setQuantity] = useState(1);
  const [dropDown, setDropDown] = useState(null);
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
    setRecipe({ ...newRecipe, ingredients: newRecipe.ingredients = [...ingredientsList], instructions: newRecipe.instructions = [...instructionsList], rating: newRecipe.rating = rating, image: newRecipe.image = image })
    recipe(newRecipe);
    clearInputFields();
    console.log(newRecipe)
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
    currentList.push({ id: ingredientsList.id = newId, ingredient: ingredientsList.ingredient = quantity + " " + dropDown.value + " " + ingredientsFieldEntry, })
    const newList = currentList.filter((e) => {
      return e.id > 0;
    });

    setIngredientsList(newList);;
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
  //we want to run once initially, then run without filter
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
    <div>
      <p style={{
        marginLeft: "200px",
      }}>Add New Recipe</p>
      <form onSubmit={handleSubmit}
        style={{
          backgroundColor: "#C7F9FF",
          textAlign: "center",
          border: "1px solid",
          borderRadius: "2px",
          marginRight: "390px",
          width: "80%"
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

          <QuantityBox getQuantity={getQuantity} />
          <div style={{
            width: "100px",
            marginLeft: "45%"
          }}>
            <Select options={options} openonclick={true} value={dropDown} autofocus={true} onChange={setDropDown} />
          </div>
          <input

            type="text"
            name="ingredients"
            placeholder="ingredients"
            value={ingredientsFieldEntry}
            onChange={(e) => setIngredientsFieldEntry(e.target.value)}
          />

        </label>
        <button
          style={{ marginLeft: "2px" }}
          onClick={getIngredientsList}> Add ingredient </button>
        <ul style={{ textAlign: "left" }}>
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
          style={{ marginLeft: "2px" }}
          onClick={getInstructionsList}> Add next step </button>
        <ol style={{ textAlign: "left" }}>
          {filteredInstructionList}
        </ol>
          
        <div>
          {resetFlag === false ?
             <input type="file" onChange={onImageChange} className="filetype" />
          : 
            `✅ image uploaded successfully ` }
          </div>

        <GetRating getRating={getRating} />
        <button>Submit Recipe</button>
      </form>
    </div>
  )

};

export default AddRecipe;