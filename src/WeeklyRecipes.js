import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RecipeControl from "./RecipeControl";
import Recipe from "./Recipe";
import RecipeList from "./RecipeList";
import { Columns, Container } from "react-bulma-components";


const _ = require("lodash");
export const fakeDatabase = [{
    id: 0,
    recipeName: "test1",
    ingredients: [{
        ingredient: "pineapple",
        measure: "cups",
        quantity: 4
    }],
    image: "blob:http://localhost:3000/9215c2fa-1a3f-4c75-8758-c725165950ba",
    instructions: [{ id: 1, instruction: "blah blah" }, { id: 2, instruction: "test blah" },],
    rating: 4,
}, {
    id: 1,
    recipeName: "test2",
    image: "blob:http://localhost:3000/9215c2fa-1a3f-4c75-8758-c725165950ba",
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
    image: "blob:http://localhost:3000/9215c2fa-1a3f-4c75-8758-c725165950ba",
    ingredients: [{
        ingredient: "pineapple",
        measure: "cups",
        quantity: 6
    }],
    instructions: [{ id: 1, instruction: "blah blah" }, { id: 2, instruction: "test blah" },],
    rating: 5,
}, {
    id: 3,
    recipeName: "test4",
    image: "blob:http://localhost:3000/9215c2fa-1a3f-4c75-8758-c725165950ba",
    ingredients: [{
        ingredient: "spinach",
        measure: "oz",
        quantity: 10
    }],
    instructions: [{ id: 1, instruction: "blah blah" }, { id: 2, instruction: "test blah" },],
    rating: 2,
}, {
    id: 4,
    recipeName: "test5",
    image: "blob:http://localhost:3000/9215c2fa-1a3f-4c75-8758-c725165950ba",
    ingredients: [{
        ingredient: "potatoes",
        measure: "each",
        quantity: 3
    }],
    instructions: [{ id: 1, instruction: "blah blah" }, { id: 2, instruction: "test blah" },],
    rating: 3,
}, {
    id: 5,
    recipeName: "test6",
    image: "blob:http://localhost:3000/9215c2fa-1a3f-4c75-8758-c725165950ba",
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
    image: "blob:http://localhost:3000/d508cfff-be6e-49df-acf3-d3d4874049eb",
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
    image: "blob:http://localhost:3000/9215c2fa-1a3f-4c75-8758-c725165950ba",
    ingredients: [{
        ingredient: "carrots",
        measure: "cups",
        quantity: 2
    }],
    instructions: [{ id: 1, instruction: "blah blah" }, { id: 2, instruction: "test blah" },],
    rating: 4,
}]


const WeeklyRecipes = ({ }) => {
    const [weekList, setWeekList] = useState([])
    const [clickedId, setClickedId] = useState(null);
    const [showRecipe, setShowRecipe] = useState(false);
    const [finalShoppingList, setFinalShoppingList] = useState({})
    const handleClick = () => {
        const tempArr = [];
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
        const shoppingList = {};
        let num = 0;
        Object.entries(ingredientsObj).forEach(entryArray => {
            const [entryKey, entryValue] = entryArray;
            entryValue.forEach(e => {
                if (!shoppingList[e.measure]) {
                    shoppingList[e.measure] = [e];
                } else {
                    shoppingList[e.measure].push(e)
                }
            })
        });
        // shoppingList.forEach(measure => {
        //     console.log(measure)
        // })
        console.log(shoppingList);
        const shoppingListString = Object.entries(shoppingList).reduce((accumulator, currentEntryArray) => {
            const measure = currentEntryArray[0];
            const amount = currentEntryArray[1];
            let ingredientString = '';
            let duplicateIngredient = '';
            let prevString = '';
            let newString = '';
            const ingredientsArr = [];
            const duplicateArr = [];
            let num = 0;
            amount.forEach(innerArray => {
                newString = `${innerArray.measure} ${innerArray.ingredient}`
                if (newString === prevString) {
                    num += innerArray.quantity;
                    duplicateIngredient = ` ${innerArray.quantity + num} ${innerArray.measure} ${innerArray.ingredient}`
                    console.log(duplicateIngredient);
                    ingredientsArr.push(duplicateIngredient)
                    ingredientString = ingredientsArr.pop();
                }else {
                    ingredientString += (` ${innerArray.quantity} ${innerArray.measure} ${innerArray.ingredient}`);
                }
                prevString = newString;

            });
            if (accumulator.length) {
                return `${accumulator} and ${ingredientString} `;
            } else {
                return `${accumulator} ${ingredientString}`;
            }
            //}else{
            //      return `${amount}`;
            //}
        }, '');
        console.log(shoppingListString)
        // shoppingList.reduce((uniqueArr, item) => {
        //     console.log(item, uniqueArr);
        //     if(uniqueArr.indexOf(item) === -1){
        //         uniqueArr.push(item);
        //     }
        // }, []);

        //     const sList = [];
        //     Object.entries(shoppingList).forEach((element) => {
        //         const [measure, ingredient] = element;
        //         let num = 0;
        //         ingredient.forEach((ing, index) => {
        //           ingredient.forEach((el, i) => {
        //             if(index === i){
        //                 return null;
        //             }
        //             if(el.ingredient === ing.ingredient){
        //                 num += ing.quantity;
        //                 console.log(num);
        //                 const item = {ingredient: ing.ingredient, measure: ing.measure, quantity: num}
        //                 if(!sList.includes(item.ingredient)){
        //                 sList.push(item);
        //                 }
        //             }else{
        //                 sList.push({ingredient: ing.ingredient, measure: ing.measure, quantity:ing.quantity})
        //             }
        //         });
        //     });
        // });

        //     console.log(sList);


        // console.log(shoppingListString)
    }

    // item.forEach(ingredient => {
    //     if(ingredient.length > 1){
    //         console.log(ingredient)
    //     }
    // })

    // const entryKey = entryArray[0]; // "pineapple"
    //   const entryValue = entryArray[1]; // []
    //     const measures = {
    //         cups: 10,
    // can: 1,
    // };

    //  entryValue.forEach(amount => {
    //          if (measures[amount.measure]) {
    // //                 measures[amount.measure] += amount.quantity;
    // console.log(measures[amount.measure]);
    //          }});// else {
    //                     measures[amount.measure] = amount.quantity;
    //                 }
    //             });

    // shoppingList[entryKey] = shoppingListArray.push(`10 cups and 1 can ${entryKey}`);



    // const recipeArray = [...weekList];
    // const dupArray = []
    // const shoppingList = []
    // const notDup = []
    // //make an array of just ingredients
    // recipeArray.forEach(e => {
    //     shoppingList.push(e.ingredients)
    // })
    // //flatten out excess arrays to 1 array
    // const flatList = shoppingList.flat();
    // let num = 0;
    // console.log(flatList)
    // for (let i = 0; i < flatList.length; i++) {
    //     for (let k = i + 1; k < flatList.length; k++) {
    //         //if any two elements contain the same ingredient
    //         if (flatList[i].ingredient === flatList[k].ingredient) {
    //             //add the quantity of that ingredient up
    //             num = flatList[i].quantity + flatList[k].quantity
    //             //push dups to new array    
    //             dupArray.push({ingredient: flatList[i].ingredient, measure: flatList[i].measure, quantity: num})
    //         }
    //         if(flatList[i].ingredient !== flatList[k].ingredient && notDup.length < flatList.length){
    //            console.log(`[${i}] ${flatList[i].ingredient} !== [${k}] ${flatList[k].ingredient}`)
    //            notDup.push({ingredient: flatList[i].ingredient, measure: flatList[i].measure, quantity: flatList[i].quantity})
    //            flatList.shift();
    //         }
    //         // if(flatList[i].ingredient !== flatList[k].ingredient){
    //         //     console.log(flatList[i].ingredient)
    //         // }
    //     }
    // }
    // const set1 = new Set(notDup);
    // setFinalShoppingList(dupArray)
    // console.log(dupArray, notDup);

    // weekList.forEach(e => {
    //     ingredients = {...ingredients, ingredient: ingredient.name = weekList.}
    // })
    //  const shoppingList = [];
    //  const condensedList = [];
    //  const listArray = [];
    // // const filteredList = [];
    //  let num1 = 0;
    //  let num2 = 0;
    //  let num3 = 0;
    //  let num4 = 0;
    //  let num5 = 0;
    //  let s;
    //  let split;

    //  weekList.forEach(e => {
    //      shoppingList.push(e.ingredients)
    //  });
    //  shoppingList.forEach(e => {
    //      s = e.toString();
    //      split = s.split(' ');
    //      listArray.push(split);
    //  })

    // console.log(shoppingList)

    //  //  const list = [];
    // //  for(let i = 0; i < listArray.length; i++){
    // //    list[i] = listArray[i].join(" ");
    // //  console.log(list[i])
    // // }

    // for (let number = 0; number < listArray.length; number++) {
    //     if (listArray[0][2] === listArray[number][2]) {
    //         num1 += parseInt(listArray[number][0]);
    //         condensedList.push(num1+ " " + listArray[0][1] + " " + listArray[0][2])

    //     }
    //     if (listArray[1][2] === listArray[number][2]) {
    //         num2 += parseInt(listArray[number][0]);
    //         condensedList.push(num2+ " " + listArray[1][1] + " " + listArray[1][2])
    //     }
    //     if (listArray[2][2] === listArray[number][2]) {
    //         num3 += parseInt(listArray[number][0]);
    //         condensedList.push(num3+ " " + listArray[2][1] + " " + listArray[2][2])
    //     }
    //     if (listArray[3][2] === listArray[number][2]) {
    //         num4 += parseInt(listArray[number][0]);
    //         condensedList.push(num4+ " " + listArray[3][1] + " " + listArray[3][2])
    //     }
    //     if (listArray[4][2] === listArray[number][2]) {
    //         num5 += parseInt(listArray[number][0]);
    //         condensedList.push(num5+ " " + listArray[4][1] + " " + listArray[4][2])
    //     }
    // }
    // const final = []
    // const reducedList = _.union(condensedList)
    // console.log(reducedList)
    // for(let i = 0; i < splitList.length; i++){
    //     if(splitList[i][0] < splitList[splitList.length][0] && splitList[i][2] === splitList.length[2]){
    //         final.push(splitList.slice(splitList[i]));
    //     }
    // }
    // console.log(final)


    return (
        <div>
            <section class="section is-medium">
                <div class="tile">
                    <div class="tile is-parent is-vertical is-4 is-primary">
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
                <br />
            </section>
        </div>
    )
}

export default WeeklyRecipes;