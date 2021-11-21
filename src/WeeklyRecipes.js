import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RecipeControl from "./RecipeControl";
import Recipe from "./Recipe";
import RecipeList from "./RecipeList";


const _ = require("lodash");  
const fakeDatabase = [{
    id: 0,
    recipeName: "test1",
    ingredients: [{
        ingredient: "pineapple",
        measure: "cups",
        quantity:4
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
        quantity:2
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
        quantity:6
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
        quantity:10
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
        quantity:3
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
        quantity:4
    }],
    instructions: [{ id: 1, instruction: "blah blah" }, { id: 2, instruction: "test blah" },],
    rating: 5,
}, {
    id: 6,
    recipeName: "test7",
    image: "blob:http://localhost:3000/9215c2fa-1a3f-4c75-8758-c725165950ba",
    ingredients: [{
        ingredient: "applesauce",
        measure: "tbps",
        quantity:2
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
        quantity:2
    }],
    instructions: [{ id: 1, instruction: "blah blah" }, { id: 2, instruction: "test blah" },],
    rating: 4,
}]


const WeeklyRecipes = ({ }) => {
    const [weekList, setWeekList] = useState([])
    const [clickedId, setClickedId] = useState(null);
    const [showRecipe, setShowRecipe] = useState(false);

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
        const currentArray = [...weekList];
        setClickedId(id);
        if (currentArray.includes(fakeDatabase[id])) {
            currentArray.slice(id);
            console.log("match")
        }
        setWeekList(currentArray);
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
       const recipeArray = [...weekList];
       const shoppingList = [];
       recipeArray.forEach(e => {
           shoppingList.push(e.ingredients)
       }) 
       const flatList = shoppingList.flat();
       console.log(flatList)

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
    }

    return (
        <div
        >
            <ul>
                <p>Pick your recipes for the week, or pick them at random</p>
                {fakeDatabase.map(({ rating, recipeName, id, image }) => {

                    if (clickedId === id && showRecipe === true) {
                        return <div onClick={toggleVisibility}
                            style={{
                                width: '50%',
                            }} ><Recipe clickedId={clickedId} recipe={fakeDatabase} /><button onClick={() => addToList(id)}>add to list</button><button onClick={() => removeFromList(id)}>remove from list</button></div>
                    }
                    return (
                        <li key={id}
                            onClick={() => toggleVisibility(id)}>{recipeName} - {rating} stars</li>
                    )
                })}
            </ul>
            <button onClick={handleClick}>pick recipes for me</button>
            <br />
            <div>
                {weekList.length >= 1 ? <RecipeList recipeList={weekList} onClick={toggleVisibility} /> : null}

            </div>
            <button onClick={createShoppingList}>Create Shopping List </button>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <Link to="/AddRecipes" element={<RecipeControl />}>Add New Recipe </Link>
            <Link to="/WeeklyRecipes" element={<WeeklyRecipes />}>Pick your weekly recipes</Link>
        </div>
    )
}

export default WeeklyRecipes;