import * as React from 'react';
import { Box, TextField, Button } from '@mui/material';
import { EditProps, initialFormValues } from '../Types/Types';

function EditRecipeForm({recipe, ingredients, hideForm}: EditProps) {
    const {
        id,
        strMeal,
        strArea,
        strMealThumb,
        strInstructions,
    } = recipe;

    const initialValues = {
        id: id,
        strMeal: strMeal,
        strArea: strArea,
        strMealThumb: strMealThumb,
        ingredients: ingredients,
        strInstructions: strInstructions,
    };

    const [formValues, setFormValues] = React.useState<initialFormValues>(initialValues);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues({
          ...formValues,
          [name]: value,
        });
    };

    const handleIngredientChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const index = parseInt(name.charAt(13))
        const changeIngredient = formValues.ingredients
        changeIngredient[index] = value
        setFormValues({
            ...formValues,
            ingredients: changeIngredient
        });
    };

    const editIngredients = ingredients.map((ingredient, index) => (
        <TextField 
            key={index}
            id="standard-helperText" 
            name={`strIngredient${index}`}
            label={`Ingredient ${index + 1}`}
            value={formValues.ingredients[index]} 
            onChange={handleIngredientChange}
            variant="standard" 
        />
    ));

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const iCount = formValues.ingredients.length;
        const recipeObj: { [key: string]: string } = {};
            recipeObj.strMeal= formValues.strMeal;
            recipeObj.strArea= formValues.strArea;
            recipeObj.strMealThumb= formValues.strMealThumb;
            recipeObj.strInstructions= formValues.strInstructions;

        for (let i=0; i<iCount; i++) {
            let key = `strIngredient${i+1}`;
            let val = formValues.ingredients[i];
            recipeObj[key]= val;
        };

        fetch(`https://djangorecipes.onrender.com/recipes/${recipe.id}/edit/`, {
            method: 'PATCH',
            body: JSON.stringify(recipeObj),
            headers: {'Content-type': 'application/json'},
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.status === 'ok') {
                hideForm()
            } else {
                alert(data.message)
            }
        });
    };
    
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField 
                id="standard-helperText" 
                label="Recipe Name"
                variant="standard"
                name="strMeal"
                value={formValues.strMeal} 
                onChange={handleInputChange}
            />
            <TextField 
                id="standard-helperText" 
                label="Area"
                name="strArea"
                value={formValues.strArea} 
                onChange={handleInputChange}
                variant="standard" 
            />
            <TextField 
                id="standard-helperText" 
                label="Image Url"
                name="strMealThumb"
                value={formValues.strMealThumb} 
                onChange={handleInputChange}
                variant="standard" 
            />
            <br/>
            <br/>
            { editIngredients }
            <br/>
            <br/>
            <TextField 
                id="standard-helperText" 
                label="Instructions"
                name="strInstructions"
                value={formValues.strInstructions} 
                onChange={handleInputChange}
                variant="standard" 
                multiline
                style = {{width: '50ch'}}
            />
            <br/>
            <Button 
                // type="submit"
                variant="contained" 
                value={id}
                onClick={handleSubmit}
            >
                Submit
            </Button>
            <br/>
            <br/>
        </Box>
    )
};

export default EditRecipeForm;