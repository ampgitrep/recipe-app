import { useState } from "react";

const AddRecipe = ({ id, recipe, onSubmit, }) => {
  const [newRecipe, setRecipe] = useState({
    id: 0,
    recipeName: "",
    newInstructions: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    setRecipe({...newRecipe, id:newRecipe.id+1})
   console.log(newRecipe)
   clearInputs();
  };

  const clearInputs = () => {
    setRecipe({...newRecipe, recipeName: "", newInstructions: "",})
  }

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
            name="newInstructions"
            placeholder="instructions"
            onChange={handleChange}
          />
        </label>
        <br/>
        <button>Submit Recipe</button>
      </form>
    </div>
  )

};

export default AddRecipe;