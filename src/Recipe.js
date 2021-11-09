import react from "react";


const Recipe = ({ recipe }) => {
  {
    return (
      <div  style={{backgroundColor: "#f0f8ff",
                    border: "3px solid",
                    borderRadius: "10px", }}>
        id:  {recipe.id} - name: {recipe.recipeName}
        <br />
        instructions:   <ol>
          {recipe.instructions.map((instructions) => (
            <li>{instructions}</li>
          ))}
        </ol>
        ingredients:    <ol>
          {recipe.ingredients.map((ingredients) => (
            <li>{ingredients}</li>
          ))}
        </ol>
        rating: 
        {recipe.rating}
      </div>
    )
  }
};

export default Recipe;