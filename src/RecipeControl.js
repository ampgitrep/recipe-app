import Recipe from "./Recipe";
import RecipeList from "./RecipeList";
import AddRecipe from "./AddRecipe";
import { useState, useEffect } from "react";
import { Columns, Container } from "react-bulma-components";
import WeeklyRecipes from "./WeeklyRecipes";



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
  const [prevArray, setPrevArray] = useState('');
  const [recipeList, setRecipeList] = useState([...prevArray]);
  const [clickedId, setClickedId] = useState(0)
  const [selectedFile, setSelectedFile] = useState();
  const [isFileSelected, setIsFileSelected] = useState(false);

  const uploadFileHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setIsFileSelected(true);
  }

  const handleFileSubmission = () => {
    const reader = new FileReader();
    reader.onload = ({ target }) => {
      if (target.result) {
        const fileToUpload = JSON.parse(target.result);  
        getRecipe(fileToUpload)        
      } else {
        alert("error, no file found");
      }
    };
    reader.readAsText(selectedFile)
    setSelectedFile(null)
    setIsFileSelected(false)
  }

  const getRecipe = (getNewRecipe) => {
    if(!getNewRecipe.length){
    setRecipe(getNewRecipe);
    const newArray = [...prevArray];
    newArray.push(getNewRecipe);
    setPrevArray(newArray);
    setRecipeList(newArray);
    }else{
      const newArray = [...prevArray];
      newArray.push(getNewRecipe);
      setPrevArray(newArray.flat())
      setRecipeList(newArray.flat());
    }
    return getNewRecipe;
  }
  console.log(recipeList)
  const toggleVisibility = (id) => {
    if (id !== clickedId || isActive === false) {
      setClickedId(id);
      return setIsActive(true);
    }
    if (id === clickedId) {
      return setIsActive(false);
    }
  }

  const deleteRecipe = () => {
    const newList = [...recipeList].filter(recipes => {return recipes.id != clickedId});
    setRecipeList(newList);
  }

  const downloadFile = ({ data, fileName, fileType }) => {
    const blob = new Blob([data], { type: fileType });
    const a = document.createElement('a');
    a.download = fileName;
    a.href = window.URL.createObjectURL(blob);
    const clickEvent = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    a.dispatchEvent(clickEvent);
    a.remove();
  }

  const exportToJson = (e) => {
    e.preventDefault();
    downloadFile({
      data: JSON.stringify(recipeList),
      fileName: 'userRecipe.json',
      fileType: 'text/json',
    })
  }

  return (
    <div>
      <Container class="box notification is-primary">
        <Container class="box notification is-warning">
          <Columns>
            <Columns.Column>
              <div class="tile is-vertical box is-12 ">
                {isActive ?
                  <Recipe recipe={recipeList} clickedId={clickedId} deleteRecipe={deleteRecipe} /> :
                  <figure class="image is-4by3">
                    <img src="https://cdn9.dissolve.com/p/D2115_189_697/D2115_189_697_1200.jpg" />
                  </figure>
                }
              </div>
            </Columns.Column>
            <Columns.Column>
              <AddRecipe recipe={getRecipe} recipeList={recipeList} />
            </Columns.Column>
            <Columns.Column>
              <div class="tile is-vertical box is-12">
                <p class="title">Recipe List</p>
                <RecipeList onClick={toggleVisibility} recipeList={recipeList} />
                <label class="label">import recipes</label>
                {isFileSelected === false ?
                  <div>
                    <input type="file" name="userRecipes" onChange={uploadFileHandler} />
                  </div> :
                  <div>
                    <button onClick={handleFileSubmission}>import recipes</button>
                  </div>}
                <br />
                <button onClick={exportToJson}>export my recipes</button>
              </div>
            </Columns.Column>
          </Columns>
          <WeeklyRecipes recipeList={recipeList} />
        </Container>
      </Container>
    </div>
  )
};

export default RecipeControl;