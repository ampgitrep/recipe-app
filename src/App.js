import RecipeControl from "./RecipeControl";
import { Link } from "react-router-dom";
import WeeklyRecipes from "./WeeklyRecipes";
import Login from "./Login.js";
function App() {
  return (
    <div className="App"
    >
      <section class="hero has-background-primary">
        <div class="hero-header">
          <p class="title has-text-black has-text-centered">
            Recipe-App
            </p>
          </div>
        <div class="hero-body">
     <Login />
     </div>
      </section>
       <RecipeControl />
    </div>
  );
}

export default App;
