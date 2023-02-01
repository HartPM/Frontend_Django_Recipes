import '../Styles/MyRecipes.css';
import Typography from '@mui/material/Typography';
import { RecipesProps } from '../Types/Types';
import RecipeAccordion from './RecipeAccordion';


export default function MyRecipes({recipes, getMyRecipes}: RecipesProps) {

    const recipeRow = recipes?.map((recipe) => (
        <RecipeAccordion key={recipe.id} recipe={recipe} getMyRecipes={getMyRecipes} />
    ));

  return (
    <div className="myRecipes">
        <Typography variant="h4" align="center" gutterBottom>
            My Favorites
        </Typography>
        { recipeRow }
    </div>
  );
};