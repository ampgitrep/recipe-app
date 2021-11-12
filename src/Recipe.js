
const Recipe = ({ recipe }) => {

  return (
    <div style={{
        backgroundImage:`repeating-linear-gradient(to bottom, #00FF3C, #00FF3C 1px, #FFFFFF 1px, #FFFFFF 22px)`,
        textAlign: "center",
        border: "1px solid",
        borderRadius: "2px",
        width:'50%'
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
      rating:   {recipe.rating}
    </div>
  )

};

export default Recipe;