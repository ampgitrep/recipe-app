
const Recipe = ({ clickedId, recipe }) => {

  return (
    <div style={{
      backgroundImage: `repeating-linear-gradient(to bottom, #00FF3C, #00FF3C 1px, #FFFFFF 1px, #FFFFFF 20px)`,
      textAlign: "center",
      border: "1px solid",
      borderRadius: "2px",
      width: '50%'
    }}> Recipe:<div>
        id:  {recipe[clickedId].id} - name: {recipe[clickedId].recipeName}
        <br />
        ingredients:
        {recipe[clickedId].ingredients.map(({ ingredient, id }) => (
          <li
            onClick={() => console.log(ingredient)}
            style={{ marginLeft: "15px" }}
            key={ingredient}>{ingredient}</li>
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
        style={{width: "50%",
                height: "50%",
                }}
        src={recipe[clickedId].image}/>
        <br />
        rating:   {recipe[clickedId].rating}
      </div>
    </div>
  )

};

export default Recipe;