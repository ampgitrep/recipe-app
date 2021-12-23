
import {useState} from 'react';


const Recipe = ({ clickedId, recipe, deleteRecipe }) => {
  const [deleteFlag, setDeleteFlag] = useState(false);

  let name = '';
  let ingredients = '';
  let instructions = '';
  let image = '';
  let difficulty = '';

  const handleClick = () => {
    if(deleteFlag === false){
    setDeleteFlag(true);
    }else{
      setDeleteFlag(false);
    }
  }

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
    <div onClick={handleClick}>
      <p class="title"> Recipe:</p>
      <div style={{
        backgroundImage: `repeating-linear-gradient(to top, #00FF3C, #00FF3C 1px, #FFFFFF 1px, #FFFFFF 20px)`,
        textAlign: "center",
        border: "1px solid",
        borderRadius: "2px",
      }} >
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
      
     
        <div>
        <p class="subtitle"> name:</p> {name}
        <br />
        <p class="subtitle">ingredients:</p> {ingredients}
        <br />
        <p class="subtitle">instructions:</p> {instructions}
        <br />
        <img src={image} />
        <br />
        <p class="subtitle">difficulty:</p> {difficulty} </div>
            {deleteFlag === false ? null
      : <button onClick={deleteRecipe}>delete recipe?</button>
  }
    </div>
</div>
  )
};

export default Recipe;