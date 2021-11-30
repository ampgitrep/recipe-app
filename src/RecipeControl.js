import Recipe from "./Recipe";
import RecipeList from "./RecipeList";
import AddRecipe from "./AddRecipe";
import { useState } from "react";
import { Columns, Container } from "react-bulma-components";
import WeeklyRecipes from "./WeeklyRecipes";
import { fakeDatabase } from "./WeeklyRecipes";
const RecipeControl = () => {
  const [recipe, setRecipe] = useState(
    {
      id: 10,
      recipeName: "",
      instructions: [],
      ingredients: [],
      rating: "",
    }
  )
  const [isActive, setIsActive] = useState(false);
  const [prevArray, setPrevArray] = useState(fakeDatabase);
  const [recipeList, setRecipeList] = useState([...prevArray]);
  const [clickedId, setClickedId] = useState(0)
  
  
  const getRecipe = (getNewRecipe) => {
    setRecipe(getNewRecipe);
    const newArray = [...prevArray];
    newArray.push(getNewRecipe);
    setPrevArray(newArray);
    setRecipeList(newArray);
    return getNewRecipe;
  }


  const toggleVisibility = (id) => {
    if (id !== clickedId || isActive === false) {
      setClickedId(id);
      return setIsActive(true);
    }
    if (id === clickedId) {
      return setIsActive(false);
    }
  }


  return (
    <div>
      <Container class="box notification is-primary">
      <Container class="box notification is-warning">
        <Columns>
          <Columns.Column>
            <div class="tile is-vertical box is-12 ">
              {isActive ?
                <Recipe recipe={recipeList} clickedId={clickedId} /> :
                <figure class="image is-4by3">
                <img src="https://cdn9.dissolve.com/p/D2115_189_697/D2115_189_697_1200.jpg" />
                </figure>
              }
            </div>
          </Columns.Column>
          <Columns.Column>
            <AddRecipe recipe={getRecipe} />
          </Columns.Column>
          <Columns.Column>
            <div class="tile is-vertical box is-12">
              <p class="title">Recipe List</p>
              <RecipeList onClick={toggleVisibility} recipeList={recipeList} fakeDatabase={fakeDatabase} />
            </div>
          </Columns.Column>
        </Columns>
        <WeeklyRecipes />
      </Container>
      </Container>
    </div>
  )
};

export default RecipeControl;