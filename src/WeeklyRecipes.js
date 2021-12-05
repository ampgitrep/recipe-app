import { useState } from "react";
import Recipe from "./Recipe";
import RecipeList from "./RecipeList";
import { Columns } from "react-bulma-components";
import SlideShow from "./Slideshow";

const WeeklyRecipes = ({ recipeList }) => {
    const [weekList, setWeekList] = useState([])
    const [clickedId, setClickedId] = useState(null);
    const [showRecipe, setShowRecipe] = useState(false);
    const [finalShoppingList, setFinalShoppingList] = useState([])
    const [servingSize, setServingSize] = useState('')

    const handleClick = () => {
        const recipeArray = [];
        for (let i = 1; i <= 5; i++) {
            let randNum = Math.floor((Math.random(recipeList.length) * recipeList.length - 1) + 1);

            recipeArray.push(recipeList[randNum])
        }
        setWeekList(recipeArray);
    }
    const addToList = (id) => {
        setClickedId(id);
        toggleVisibility(id);
        const currentArray = [...weekList];
        if (currentArray.length <= 5) {
            currentArray.push(recipeList[id]);
            setWeekList(currentArray);
        }
        if (currentArray.length > 5) {
            alert("5 recipes have already been selected for the week.")
        }
    }
    const removeFromList = (id) => {
        setClickedId(id);
        const currentArray = [...weekList].filter((recipe) => { return recipe.id !== id; });
        setWeekList(currentArray);

        // const currentArray = [...weekList];
        // const indexToDelete = currentArray.findIndex(recipe => recipe.id === id);

        // currentArray.slice(indexToDelete, 1);

    }

    const toggleVisibility = (id) => {
        if (id !== clickedId || showRecipe === false) {
            setClickedId(id);
            return setShowRecipe(true);
        }
        if (id === clickedId && showRecipe === true) {
            return setShowRecipe(false);
        }
    }
    const createShoppingList = () => {
        const ingredientsObj = {};
        const recipeArray = [...weekList];

        recipeArray.forEach(recipe => {
            const { ingredients } = recipe;
            ingredients.forEach(singleIngred => {
                if (!ingredientsObj[singleIngred.ingredient]) {
                    ingredientsObj[singleIngred.ingredient] = [singleIngred];
                } else {
                    ingredientsObj[singleIngred.ingredient].push(singleIngred);
                }
            });
        });
        const ingredientsByMeasure = {};
        Object.entries(ingredientsObj).forEach(entryArray => {
            const [entryKey, entryValue] = entryArray;
            entryValue.forEach(e => {
                if (!ingredientsByMeasure[e.measure]) {
                    ingredientsByMeasure[e.measure] = [e];
                } else {
                    ingredientsByMeasure[e.measure].push(e)
                }
            })
        });

        const ingredientMeasureObj = {
        };

        Object.values(ingredientsByMeasure).forEach(measuresArray => {
            measuresArray.forEach(ingredientObj => {
                const { measure, ingredient, quantity } = ingredientObj;
                const measureKey = `${measure} ${ingredient}`;

                if (ingredientMeasureObj[measureKey]) {
                    ingredientMeasureObj[measureKey] += quantity*servingSize;
                } else {
                    ingredientMeasureObj[measureKey] = quantity*servingSize;
                }
            });
        });

        const listArr = Object.entries(ingredientMeasureObj).reduce((accum, curr) => {
            const [description, amount] = curr;
            if (accum.length) {
                accum.push(`${amount} ${description} `);
            } else {
                accum.push(`${amount} ${description}`);
            }
            return accum;
        }, []);
        console.log(listArr)
        setFinalShoppingList(listArr);
    }


    return (
        <div>
            <section class="section is-medium">
                <Columns>
                    <Columns.Column>
                        <div class="tile is-flex">
                            <div class="tile is-parent is-12 is-primary">
                                <article class="tile is-child notification is-primary">
                                    <ul>
                                        <p class="title">Pick your recipes for the week</p>
                                        <p class="subtitle">How many people are you cooking for?</p>
                                        <div class="control">
          <label class="radio">
            <input type="radio" name="servingSizeOpt" value={1} onClick={(e)=>setServingSize(e.target.value)}/>
              1
          </label>
          <label class="radio">
          <input type="radio" name="servingSizeOpt" value={2} onClick={(e)=>setServingSize(e.target.value)}/>
              2
            
          </label>
          <label class="radio">
          <input type="radio" name="servingSizeOpt" value={3} onClick={(e)=>setServingSize(e.target.value)}/>
              3
           
          </label>
          <label class="radio">
          <input type="radio" name="servingSizeOpt" value={4} onClick={(e)=>setServingSize(e.target.value)}/>
              4
        
          </label>
          <label class="radio">
          <input type="radio" name="servingSizeOpt" value={5} onClick={(e)=>setServingSize(e.target.value)}/>
              5
          
          </label>
        </div>
                                        {recipeList.map(({ rating, recipeName, id, image }) => {
                                            if (clickedId === id && showRecipe === true) {
                                                return <div class="tile is-child box" onClick={toggleVisibility}>
                                                    <article class="tile is-child notification is-warning">
                                                        <Recipe clickedId={clickedId} recipe={recipeList} />
                                                    </article>
                                                    <button onClick={() => addToList(id)}>
                                                        add to list
                                                    </button>
                                                    <button onClick={() => removeFromList(id)}>
                                                        remove from list
                                                    </button>
                                                </div>
                                            }
                                            return (
                                                <li key={id}
                                                    onClick={() => toggleVisibility(id)}>{recipeName} - {rating} stars</li>
                                            )
                                        })}
                                    </ul>
                                </article>

                            </div>
                        </div>
                        
                        <button onClick={handleClick}>pick recipes for me</button>
                        <br />
                            <label class="label">Weekly Recipes</label>
                        <div class="tile is-4">
                            {weekList.length >= 1 ? <RecipeList recipeList={weekList} onClick={toggleVisibility} /> : null}

                        </div>
                        <button onClick={createShoppingList}>Create Shopping List </button>
                    </Columns.Column>
                    <Columns.Column>
                        <SlideShow recipeList={recipeList} />
                    </Columns.Column>
                    <Columns.Column>
                        <div class="level">
                            <div class="card level-item has-text-centered has-background-primary">
                                <div class="box has-background-primary-light">
                                    <p class="title">Shopping list</p>
                                    {finalShoppingList.map(e => {
                                        return <div> {e} </div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </Columns.Column>
                </Columns>
            </section>
        </div>
    )



}

export default WeeklyRecipes;