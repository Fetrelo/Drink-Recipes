import React, {useContext} from 'react';
import {ContextRecipes} from '../context/ContextRecipes';
import Recipe from './Recipe';

const RecipesList = () => {

    const {recipes} = useContext(ContextRecipes);

    if(!recipes) return;
    
    return (
        <div className="row mt-5">
            {recipes.map(r => (
                <Recipe 
                    key={r.idDrink}
                    recipe={r} />
            ))}
        </div>
    );
}
 
export default RecipesList;