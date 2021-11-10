
const RecipeList = ( { recipeList } ) => {
  // const [recipeIsClicked, setRecipeIsClicked] = useState('');
  return (
    <div style={{backgroundColor: "#f0f8ff",
    border: "3px solid",
    borderRadius: "6px", }}>
        recipe list: 
      <ul>
      {recipeList.map(({recipeName, id}) => ( 
        <li>{id} - {recipeName}</li>
      ))}
      </ul>
    </div>
  )
}



export default RecipeList;