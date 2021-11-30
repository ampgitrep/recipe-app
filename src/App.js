import RecipeControl from "./RecipeControl";
import Login from "./Login.js";
function App() {
  return (
    <div className="App"
    >
      <section class="hero has-background-primary">
        <div class="hero-header">
          <p class="title has-text-black has-text-centered">
            Homemade & Heartfelt
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
