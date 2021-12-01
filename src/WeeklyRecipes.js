import { useState } from "react";
import Recipe from "./Recipe";
import RecipeList from "./RecipeList";
import { Columns } from "react-bulma-components";
import SlideShow from "./Slideshow";



export const fakeDatabase = [{
    id: 0,
    recipeName: "test1",
    ingredients: [{
        ingredient: "pineapple",
        measure: "cups",
        quantity: 4
    }],
    image: 'https://c.pxhere.com/images/94/2d/5eac8104f9aa89ca0f07abc57298-1620737.jpg!d',
    instructions: [{ id: 1, instruction: "blah blah" }, { id: 2, instruction: "test blah" },],
    rating: 4,
}, {
    id: 1,
    recipeName: "test2",
    image: "",
    ingredients: [{
        ingredient: "onions",
        measure: "each",
        quantity: 2
    }],
    instructions: [{ id: 1, instruction: "blah blah" }, { id: 2, instruction: "test blah" },],
    rating: 3,
}, {
    id: 2,
    recipeName: "test3",
    image: "applepie.JPG",
    ingredients: [{
        ingredient: "pineapple",
        measure: "cups",
        quantity: 6
    }, {
        ingredient: "spinach",
        measure: "oz",
        quantity: 10
    }
    ],
    instructions: [{ id: 1, instruction: "blah blah" }, { id: 2, instruction: "test blah" },],
    rating: 5,
}, {
    id: 3,
    recipeName: "test4",
    image: "applepie.JPG",
    ingredients: [{
        ingredient: "spinach",
        measure: "oz",
        quantity: 10
    }, {
        ingredient: "applesauce",
        measure: "tbps",
        quantity: 2
    }],
    instructions: [{ id: 1, instruction: "blah blah" }, { id: 2, instruction: "test blah" },],
    rating: 2,
}, {
    id: 4,
    recipeName: "test5",
    image: "applepie.JPG",
    ingredients: [{
        ingredient: "potatoes",
        measure: "each",
        quantity: 3
    }, {
        ingredient: "spinach",
        measure: "oz",
        quantity: 10
    }],
    instructions: [{ id: 1, instruction: "blah blah" }, { id: 2, instruction: "test blah" },],
    rating: 3,
}, {
    id: 5,
    recipeName: "test6",
    image: "applepie.JPG",
    ingredients: [{
        ingredient: "tomatoes",
        measure: "each",
        quantity: 4
    }],
    instructions: [{ id: 1, instruction: "blah blah" }, { id: 2, instruction: "test blah" },],
    rating: 5,
}, {
    id: 6,
    recipeName: "test7",
    image: "applepie.JPG",
    ingredients: [{
        ingredient: "applesauce",
        measure: "tbps",
        quantity: 2
    }],
    instructions: [{ id: 1, instruction: "blah blah" }, { id: 2, instruction: "test blah" },],
    rating: 2,
}, {
    id: 7,
    recipeName: "test8",
    image: "applepie.JPG",
    ingredients: [{
        ingredient: "carrots",
        measure: "cups",
        quantity: 2
    }],
    instructions: [{ id: 1, instruction: "blah blah" }, { id: 2, instruction: "test blah" },],
    rating: 4,
}]


const WeeklyRecipes = () => {
    const [weekList, setWeekList] = useState([])
    const [clickedId, setClickedId] = useState(null);
    const [showRecipe, setShowRecipe] = useState(false);
    const [finalShoppingList, setFinalShoppingList] = useState([])

    const handleClick = () => {
        const recipeArray = [];
        for (let i = 1; i <= 5; i++) {
            let randNum = Math.floor((Math.random(fakeDatabase.length) * fakeDatabase.length - 1) + 1);

            recipeArray.push(fakeDatabase[randNum])
        }
        setWeekList(recipeArray);
    }
    const addToList = (id) => {
        setClickedId(id);
        toggleVisibility(id);
        const currentArray = [...weekList];
        if (currentArray.length <= 5) {
            currentArray.push(fakeDatabase[id]);
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
                    ingredientMeasureObj[measureKey] += quantity;
                } else {
                    ingredientMeasureObj[measureKey] = quantity;
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
                                        <p class="title">Pick your recipes for the week, or pick them at random</p>
                                        {fakeDatabase.map(({ rating, recipeName, id, image }) => {
                                            if (clickedId === id && showRecipe === true) {
                                                return <div class="tile is-child box" onClick={toggleVisibility}>
                                                    <article class="tile is-child notification is-warning">
                                                        <Recipe clickedId={clickedId} recipe={fakeDatabase} />
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
                        <div class="tile is-4">
                            {weekList.length >= 1 ? <RecipeList recipeList={weekList} onClick={toggleVisibility} /> : null}

                        </div>
                        <button onClick={createShoppingList}>Create Shopping List </button>
                    </Columns.Column>
                    <Columns.Column>
                        <SlideShow recipeList={fakeDatabase}/>
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