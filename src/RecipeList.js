
const RecipeList = ({ recipeList, onClick }) => {
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
    <div
      class="tile is-child is-vertical has-background-primary-light box"
      >

      <ul
        style={{ textAlign: "left" }}>
        {recipeList.map(({ recipeName, rating, id }) => (
          <li onClick={() => onClick(id)}>{recipeName} - {getStars(rating)}</li>
        ))}
      </ul>
    </div>
  )
}



export default RecipeList;