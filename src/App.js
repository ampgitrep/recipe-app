import RecipeControl from "./RecipeControl";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App"
    style={{
      marginLeft: "5%",
      marginRight: "5%",
      marginTop: "5%",
      marginBottom: "5%", 
      backgroundPosition: "center",
     }}
      >
      <header className="App-header">
        </header>
      <nav
        style={{borderBottom: "solid 1px",
                paddingBottom: "1rem"}}>  
        
        <Link to="/AddRecipes" element={<RecipeControl/>}>Add New Recipe </Link>
        </nav>
    </div>
  );
}

export default App;
