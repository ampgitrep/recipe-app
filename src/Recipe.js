
const Recipe = ({ clickedId, recipe }) => {
  return (
    <div>
      <p class="title"> Recipe:</p>
    <div style={{
      backgroundImage: `repeating-linear-gradient(to top, #00FF3C, #00FF3C 1px, #FFFFFF 1px, #FFFFFF 20px)`,
      textAlign: "center",
      border: "1px solid",
      borderRadius: "2px",
    }}>
        id:  {recipe[clickedId].id} - name: {recipe[clickedId].recipeName}
        <br />
        ingredients:
        {recipe[clickedId].ingredients.map(({ ingredient, measure, quantity }) => (
          <li
            style={{ marginLeft: "15px" }}
            key={ingredient}>{quantity} {measure} {ingredient}</li>
        ))}
        <br />
        instructions:
        {recipe[clickedId].instructions.map(({ instruction, id }) => (
          <li
            style={{ marginLeft: "15px" }}
            key={instruction}>{instruction}</li>
        ))}
        <br />
        <img 
        
        src={recipe[clickedId].image}/>
        <br />
        rating:   {recipe[clickedId].rating}
      </div>
    </div>
  )

};

export default Recipe;