import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RecipeControl from "./RecipeControl";
import Recipe from "./Recipe";
import RecipeList from "./RecipeList";
import ShoppingList from "./ShoppingList";
const fakeDatabase = [{
    id: 0,
    recipeName: "test1",
    ingredients: ["4 oz pepperoni",],
    image: "blob:http://localhost:3000/9215c2fa-1a3f-4c75-8758-c725165950ba",
    instructions: [{ id: 1, instruction: "blah blah" }, { id: 2, instruction: "test blah" },],
    rating: 4,
}, {
    id: 1,
    recipeName: "test2",
    image: "blob:http://localhost:3000/9215c2fa-1a3f-4c75-8758-c725165950ba",
    ingredients: ["6 each onions",],
    instructions: [{ id: 1, instruction: "blah blah" }, { id: 2, instruction: "test blah" },],
    rating: 3,
}, {
    id: 2,
    recipeName: "test3",
    image: "blob:http://localhost:3000/9215c2fa-1a3f-4c75-8758-c725165950ba",
    ingredients: ["9 tsps butter",],
    instructions: [{ id: 1, instruction: "blah blah" }, { id: 2, instruction: "test blah" },],
    rating: 5,
}, {
    id: 3,
    recipeName: "test4",
    image: "blob:http://localhost:3000/9215c2fa-1a3f-4c75-8758-c725165950ba",
    ingredients: ["4 cups tests",],
    instructions: [{ id: 1, instruction: "blah blah" }, { id: 2, instruction: "test blah" },],
    rating: 2,
}, {
    id: 4,
    recipeName: "test5",
    image: "blob:http://localhost:3000/9215c2fa-1a3f-4c75-8758-c725165950ba",
    ingredients: ["4 cups tests",],
    instructions: [{ id: 1, instruction: "blah blah" }, { id: 2, instruction: "test blah" },],
    rating: 3,
}, {
    id: 5,
    recipeName: "test6",
    image: "blob:http://localhost:3000/9215c2fa-1a3f-4c75-8758-c725165950ba",
    ingredients: ["4 cups tests",],
    instructions: [{ id: 1, instruction: "blah blah" }, { id: 2, instruction: "test blah" },],
    rating: 5,
}, {
    id: 6,
    recipeName: "test7",
    image: "blob:http://localhost:3000/9215c2fa-1a3f-4c75-8758-c725165950ba",
    ingredients: ["4 cups tests",],
    instructions: [{ id: 1, instruction: "blah blah" }, { id: 2, instruction: "test blah" },],
    rating: 2,
}, {
    id: 7,
    recipeName: "test8",
    image: "blob:http://localhost:3000/9215c2fa-1a3f-4c75-8758-c725165950ba",
    ingredients: ["4 cups tests",],
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
        const shoppingList = [];
        const condensedList = [];
        const listArray = [];
        let num1 = 0;
        let num2 = 0;
        let num3 = 0;
        let num4 = 0;
        let num5 = 0;
        let s;
        let split;
        weekList.forEach(e => {
            shoppingList.push(e.ingredients)
        });
        shoppingList.forEach(e => {
            s = e.toString();
            split = s.split(' ');
            listArray.push(split);
        })
        console.log(listArray)
        for (let number = 0; number < listArray.length; number++) {
            //switch case instead of if statement
            if (listArray[0][2] === listArray[number][2]) {
                num1 = parseInt(listArray[0][0])
                num1 += parseInt(listArray[number][0]);
            }
            if (listArray[1][2] === listArray[number][2]) {
                num2 = parseInt(listArray[1][0])
                num2 += parseInt(listArray[number][0]);
            }
            if (listArray[2][2] === listArray[number][2]) {
                num3 = parseInt(listArray[2][0])
                num3 += parseInt(listArray[number][0]);
            }
            if (listArray[3][2] === listArray[number][2]) {
                num4 = parseInt(listArray[3][0])
                num4 += parseInt(listArray[number][0]);
            }
            if (listArray[4][2] === listArray[number][2]) {
                num5 = parseInt(listArray[4][0])
                num5 += parseInt(listArray[number][0]);
            }
        }
        console.log(num1, num2, num3, num4, num5)
        
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