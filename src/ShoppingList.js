
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RecipeControl from "./RecipeControl";
import WeeklyRecipes from "./WeeklyRecipes";

const ShoppingList = ({weekList}) => {
  const [shoppingList, setShoppingList] = useState([])
  return (
    <div>
       <Link to="/AddRecipes" element={<RecipeControl />}>Add New Recipe </Link>
            <Link to="/WeeklyRecipes" element={<WeeklyRecipes />}>Pick your weekly recipes</Link>
    </div>
  )
}


export default ShoppingList