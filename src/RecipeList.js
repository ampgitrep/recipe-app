import Recipe from "./Recipe";

const RecipeList = ({ recipeList }) => {
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
  };
  const showRecipe = (recipeName) => {
    console.log(recipeName)
      return (
        <Recipe recipe={recipeList.recipeName}/>
      )
    
  }
  return (
    <div style={{
      backgroundImage: `repeating-linear-gradient(to bottom, #00FF3C, #00FF3C 1px, #FFFFFF 1px, #FFFFFF 20px)`,
      textAlign: "center",
      border: "1px solid",
      borderRadius: "2px",
      width: '30%',
    }}>
      recipe list:
      <ul
        style={{ textAlign: "left" }}>
        {recipeList.map(({ recipeName, rating }) => (
          <li>{recipeName} - {getStars(rating)}</li>
        ))}
      </ul>
    </div>
  )
}



export default RecipeList;