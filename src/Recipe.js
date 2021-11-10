
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
          {recipe.instructions.map(({instructions, id}) => (
            <li key={id}>{instructions}</li>
          ))}
        <br/>
        ingredients:    
          {recipe.ingredients.map(({ingredients, id}) => (
            <li key={id}>{ingredients}</li>
          ))}
        <br/>
      rating: 
      {recipe.rating}
    </div>
  )

};

export default Recipe;