import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RecipeControl from "./RecipeControl";
 import Recipe from "./Recipe";
import RecipeList from "./RecipeList";
const fakeDatabase = [{
    id: 0,
    recipeName: "test1",
    ingredients: ["4 cups tests",],
    image: "blob:http://localhost:3000/9215c2fa-1a3f-4c75-8758-c725165950ba",
    instructions: [{ id: 1, instruction: "blah blah" }, { id: 2, instruction: "test blah" },],
    rating: 4,
}, {
    id: 1,
    recipeName: "test2",
    image: "blob:http://localhost:3000/9215c2fa-1a3f-4c75-8758-c725165950ba",
    ingredients: ["4 cups tests",],
    instructions: [{ id: 1, instruction: "blah blah" }, { id: 2, instruction: "test blah" },],
    rating: 3,
}, {
    id: 2,
    recipeName: "test3",
    image: "blob:http://localhost:3000/9215c2fa-1a3f-4c75-8758-c725165950ba",
    ingredients: ["4 cups tests",],
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

    const toggleVisibility = (id) => {
        if (id !== clickedId || showRecipe === false) {
          setClickedId(id);
          return setShowRecipe(true);
        }
        if(id === clickedId && showRecipe === true){
        return setShowRecipe(false);
      }
    }

    console.log(weekList);
    return (
        <div 
    >
            <ul>
                <p>Pick your recipes for the week, or pick them at random</p>
                {fakeDatabase.map(({ rating, recipeName, id, image }) => {
                   
                   if(clickedId === id && showRecipe === true){
                       return <div  onClick={toggleVisibility}
                                    style={{width:'50%',
                                            }} ><Recipe clickedId={clickedId} recipe={fakeDatabase}/><button onClick={()=>addToList(id)}>add to list</button></div>
                       }
                   return (
                   <li key={id}       
                        onClick={() => toggleVisibility(id)}>{recipeName} - {rating} stars</li>
                )})}
            </ul>
            <button onClick={handleClick}>pick recipes for me</button>
            <br/>
            <RecipeList recipeList={weekList} onClick={toggleVisibility}/>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <Link to="/AddRecipes" element={<RecipeControl />}>Add New Recipe </Link>
            <Link to="/WeeklyRecipes" element={<WeeklyRecipes />}>Pick your weekly recipes</Link>
        </div>
    )
}

export default WeeklyRecipes;