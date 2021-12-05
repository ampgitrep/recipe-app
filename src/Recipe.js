
const Recipe = ({ clickedId, recipe }) => {
  let name = '';
  let ingredients = '';
  let instructions = '';
  let image = '';
  let difficulty = '';

  const getStars = (rate) => {
    switch (rate) {
      case rate = 1:
        return `★☆☆☆☆`;
      case rate = 2:
        return `★★☆☆☆`;
      case rate = 3:
        return `★★★☆☆`;
      case rate = 4:
        return `★★★★☆`;
      case rate = 5:
        return `★★★★★`;
      default:
        break;
    }
  }
  return (
    <div>
      <p class="title"> Recipe:</p>
      <div style={{
        backgroundImage: `repeating-linear-gradient(to top, #00FF3C, #00FF3C 1px, #FFFFFF 1px, #FFFFFF 20px)`,
        textAlign: "center",
        border: "1px solid",
        borderRadius: "2px",
      }}>
        {recipe.forEach(e => {
          if (e.id === clickedId) {
            name = `${e.recipeName}`;
            ingredients = e.ingredients.map(({ ingredient }) => (
              <li key={ingredient}>{ingredient}</li>
            ))
            instructions = e.instructions.map(({ instruction }) => (
              <li key={instruction}>{instruction}</li>
            ));
            image = e.image;
            difficulty = getStars(e.rating);
          }
        })}
        name: {name}
        <br />
        ingredients: {ingredients}
        <br />
        instructions: {instructions}
        <br />
        <img src={image} />
        <br />
        difficulty: {difficulty}

      </div>
    </div>
  )

};

export default Recipe;