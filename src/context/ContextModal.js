import Axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';

export const ContextModal = createContext();

const ModalProvider = ({children}) => {
    
    const [drinkId, setDrinkId] = useState(null);
    const [fullRecipe, setFullRecipe] = useState({});

    useEffect(() => {
        const getFullRecipe = async () => {
            if(!drinkId) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
            const response = await Axios.get(url);

            setFullRecipe(response.data.drinks[0]);
        }

        getFullRecipe();
    }, [drinkId]);

    return ( 
        <ContextModal.Provider
            value={{
                fullRecipe,
                setDrinkId,
                setFullRecipe
            }}>
            {children}
        </ContextModal.Provider>
    );
}
 
export default ModalProvider;