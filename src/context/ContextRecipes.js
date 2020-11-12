import Axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const ContextRecipes = createContext();

const RecipesProvider = (props) => {

    const [recipes, setRecipes] = useState([]);
    const [recipesSearchData, setRecipesSearchData] = useState({
        ingredient: '',
        category: ''
    });
    const [consultado, setConsultado] = useState(false)

    const {ingredient, category} = recipesSearchData;

    useEffect(() => {
        if(consultado) {
            const getRecipes = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}&c=${category}`;
                const resp = await Axios(url);
                setRecipes(resp.data.drinks);
            }
            getRecipes();
        }
    }, [consultado]);

    return ( 
        <ContextRecipes.Provider
            value={{
                recipes,
                setRecipesSearchData,
                setConsultado
            }}>
            {props.children}
        </ContextRecipes.Provider>
    );
}
 
export default RecipesProvider;