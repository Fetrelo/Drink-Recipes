import Axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

// Crear context
export const ContextCategories = createContext();

// Provider es donde se encuentran las funciones y state
const CategoriesProvider = (props) => {
    
    // Create context state
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        
        const queryAPI = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
            const resp = await Axios(url);
            setCategories(resp.data.drinks);
        }
        queryAPI();

    }, [])

    return (
        <ContextCategories.Provider
            value={{categories}}>
            {props.children}
        </ContextCategories.Provider>
    );
}

export default CategoriesProvider;
