import RecipeControl from "./RecipeControl";
function App() {
  return (
    <div className="App"
    style={{backgroundColor: "#f0f8ff",
                    border: "2px solid",
                    borderRadius: "10px", }}>
      <header className="App-header">
        <RecipeControl/>
      </header>
    </div>
  );
}

export default App;
