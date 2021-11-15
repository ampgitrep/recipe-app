import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RecipeControl from "./RecipeControl";

const fakeDatabase = [{
    id: 0,
    image:"blob:http://localhost:3000/9215c2fa-1a3f-4c75-8758-c725165950ba",
    ingredients: ["4 cups tests",],
    instructions: [{ id: 1, instruction: "blah blah" }, { id: 2, instruction: "test blah" },],
    rating: 4,
},]


const WeeklyRecipes = ({recipes}) => {

    //we can store our weekly recipes in this array
    const [recipeList, setRecipeList] = useState();
        //Wont work until RecipeList is importing recipes from a database. Right now Recipelists "recipe" is undefined because it isn't given anything
    return (
        <div>
            <p>Pick your recipes for the week, or pick them at random</p>
            
            <Link to="/AddRecipes" element={<RecipeControl/>}>Add New Recipe </Link>
        <Link to="/WeeklyRecipes" element={<WeeklyRecipes/>}>Pick your weekly recipes</Link>
        </div>
    )
}

export default WeeklyRecipes;