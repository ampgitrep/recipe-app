
const Recipe = ({ recipe }) => {

  return (
    <div style={{
      backgroundColor: "#f0f8ff",
      border: "3px solid",
      borderRadius: "6px",
    }}>
      id:  {recipe.id} - name: {recipe.recipeName}
      <br />
      instructions:   
          {recipe.instructions.map(({instruction, id}) => (
            <li 
            style={{marginLeft: "15px"}}
            key={instruction}>{instruction}</li>
          ))}
        <br/>
        ingredients:    
          {recipe.ingredients.map(({ingredient, id}) => (
            <li 
            onClick={()=>console.log(ingredient)}
            style={{marginLeft: "15px"}}
            key={ingredient}>{ingredient}</li>
          ))}
        <br/>
      rating: 
      {recipe.rating}
    </div>
  )

};

export default Recipe;