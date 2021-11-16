import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RecipeControl from "./RecipeControl";

const fakeDatabase = [{
    id: 0,
    name: "test1",
    ingredients: ["4 cups tests",],
    image: "blob:http://localhost:3000/9215c2fa-1a3f-4c75-8758-c725165950ba",
    instructions: [{ id: 1, instruction: "blah blah" }, { id: 2, instruction: "test blah" },],
    rating: 4,
}, {
    id: 1,
    name: "test2",
    image: "blob:http://localhost:3000/9215c2fa-1a3f-4c75-8758-c725165950ba",
    ingredients: ["4 cups tests",],
    instructions: [{ id: 1, instruction: "blah blah" }, { id: 2, instruction: "test blah" },],
    rating: 3,
}, {
    id: 2,
    name: "test3",
    image: "blob:http://localhost:3000/9215c2fa-1a3f-4c75-8758-c725165950ba",
    ingredients: ["4 cups tests",],
    instructions: [{ id: 1, instruction: "blah blah" }, { id: 2, instruction: "test blah" },],
    rating: 5,
}, {
    id: 3,
    name: "test4",
    image: "blob:http://localhost:3000/9215c2fa-1a3f-4c75-8758-c725165950ba",
    ingredients: ["4 cups tests",],
    instructions: [{ id: 1, instruction: "blah blah" }, { id: 2, instruction: "test blah" },],
    rating: 2,
}, {
    id: 4,
    name: "test5",
    image: "blob:http://localhost:3000/9215c2fa-1a3f-4c75-8758-c725165950ba",
    ingredients: ["4 cups tests",],
    instructions: [{ id: 1, instruction: "blah blah" }, { id: 2, instruction: "test blah" },],
    rating: 3,
}, {
    id: 5,
    name: "test6",
    image: "blob:http://localhost:3000/9215c2fa-1a3f-4c75-8758-c725165950ba",
    ingredients: ["4 cups tests",],
    instructions: [{ id: 1, instruction: "blah blah" }, { id: 2, instruction: "test blah" },],
    rating: 5,
}, {
    id: 6,
    name: "test7",
    image: "blob:http://localhost:3000/9215c2fa-1a3f-4c75-8758-c725165950ba",
    ingredients: ["4 cups tests",],
    instructions: [{ id: 1, instruction: "blah blah" }, { id: 2, instruction: "test blah" },],
    rating: 2,
}, {
    id: 7,
    name: "test8",
    image: "blob:http://localhost:3000/9215c2fa-1a3f-4c75-8758-c725165950ba",
    ingredients: ["4 cups tests",],
    instructions: [{ id: 1, instruction: "blah blah" }, { id: 2, instruction: "test blah" },],
    rating: 4,
}]


const WeeklyRecipes = ({ }) => {
    const [weekList, setWeekList] = useState([])

    const handleClick = () => {
        const recipeArray = [];
        for (let i = 1; i <= 5; i++) {
            let randNum = Math.floor((Math.random(fakeDatabase.length) * fakeDatabase.length - 1) + 1);
            recipeArray.push(fakeDatabase[randNum])
        }
        setWeekList(recipeArray);
    }
    const addToList = (id) => {
        const currentArray = [...weekList];
        if (currentArray.length <= 5) {
            currentArray.push(fakeDatabase[id]);
            setWeekList(currentArray);
        }
        if (currentArray.length > 5) {
            alert("5 recipes have already been selected for the week.")
        }
    }

    console.log(weekList);
    return (
        <div style={{
            color: "#FFFFFF",
            backgroundColor: "black"
        }}>
            <ul>
                <p style={{ color: "#FFFFFF", }}>Pick your recipes for the week, or pick them at random</p>
                {fakeDatabase.map(({ rating, name, id, image }) => (
                    <li key={id}
                        style={{
                            width: "20%",
                            height: "20%"
                        }}
                        onClick={() => addToList(id)}>{name} - {rating} stars</li>
                ))}
            </ul>
            <button onClick={handleClick}>pick recipes for me</button>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <Link to="/AddRecipes" element={<RecipeControl />}>Add New Recipe </Link>
            <Link to="/WeeklyRecipes" element={<WeeklyRecipes />}>Pick your weekly recipes</Link>
        </div>
    )
}

export default WeeklyRecipes;