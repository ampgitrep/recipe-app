import RecipeControl from "./RecipeControl";
import { Link } from "react-router-dom";
import WeeklyRecipes from "./WeeklyRecipes";
import Login from "./Login.js";
function App() {
  return (
    <div className="App"
    >
      <header className="App-header">
     <Login />
      </header>
       <RecipeControl />
    </div>
  );
}

export default App;
