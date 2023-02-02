import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './Header';
import RecipeGrid from './RecipeGrid';
import MyRecipes from './MyRecipes';
import Resume from './Resume';
import Footer from './Footer';
import { Meal } from '../Types/Types';


function App() {
  const [recipes, setRecipes] = React.useState<Meal[]>([]);

  const getMyRecipes = async () => {
      try {
        const res = await fetch('https://djangorecipes.onrender.com/recipes/');
        const data = await res.json();
        setRecipes(data);
      }
      catch (e) {
        alert(e)
      }
    }
    
  React.useEffect(() => {
      getMyRecipes();
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />        
      <Header />
      <br />
      <RecipeGrid getMyRecipes={getMyRecipes} />
      <br />
      <MyRecipes recipes={recipes} getMyRecipes={getMyRecipes} />
      <br />
      <Resume />
      <br />
      <Footer />
    </React.Fragment>
  );
};

export default App;
