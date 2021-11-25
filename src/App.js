import RecipeControl from "./RecipeControl";
import { Link } from "react-router-dom";
import WeeklyRecipes from "./WeeklyRecipes";

function App() {
  return (
    <div className="App"
    >
      <header className="App-header">
      </header>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}>

        <Link to="/AddRecipes" element={<RecipeControl />}>Add New Recipe </Link>
        <Link to="/WeeklyRecipes" element={<WeeklyRecipes />}>Pick your weekly recipes</Link>
      </nav>
    </div>
  );
}

export default App;
