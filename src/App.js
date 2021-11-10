import RecipeControl from "./RecipeControl";
function App() {
  return (
    <div className="App"
    style={{
      marginLeft: "5%",
      marginRight: "5%",
      marginTop: "5%",
      backgroundPosition: "center",
     }}
      >
      <header className="App-header">
      <h3 ><center>Phoenix poops</center></h3>
      </header>
        <RecipeControl/>
    </div>
  );
}

export default App;
