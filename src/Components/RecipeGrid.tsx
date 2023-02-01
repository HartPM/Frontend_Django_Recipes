import { styled } from '@mui/material/styles';
import { 
  Box,
  Paper,
  Grid,
  Typography,
} from '@mui/material';
import RecipeCard from './RecipeCard';
import { RecipesProps } from '../Types/Types';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RecipeGrid({getMyRecipes}: RecipesProps) {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <Typography variant="h4" align="center" gutterBottom>
        New Recipes
      </Typography>
      <Grid container spacing={2} >
        <Grid item xs={4}>
          <Item>
            <RecipeCard getMyRecipes={getMyRecipes} />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <RecipeCard getMyRecipes={getMyRecipes} />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <RecipeCard getMyRecipes={getMyRecipes} />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};