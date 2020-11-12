import React, {useContext, useState} from 'react';
import { ContextCategories } from '../context/ContextCategories';
import { ContextRecipes } from '../context/ContextRecipes';

const Formulario = () => {

    const [search, setSearch] = useState({
        ingredient: '',
        category: ''
    });
    const {categories} = useContext(ContextCategories);
    const {setRecipesSearchData, setConsultado} = useContext(ContextRecipes);
    const [error, setError] = useState(false);

    // Function to read the contents
    const handleChange = evt => {
        setSearch({
            ...search,
            [evt.target.name]: evt.target.value
        });
    }

    return ( 
        <form className="col-12"
            onSubmit={ evt => {
                evt.preventDefault();

                if(search.ingredient.trim() === '' || search.category.trim() === '') {
                    setError(true);
                    return;
                }
                setError(false);
                setRecipesSearchData(search);
                setConsultado(true);
            }}>
            <fieldset className="text-center">
                <legend>Search drinks by main ingredient and its category</legend>
                { error ? (<p className="alert alert-primary text-center">Both ingredient and category values must be provided</p>) : null}
                <div className="row mt-4">
                    <div className="col-md-4">
                        <input
                            name="ingredient"
                            className="form-control"
                            type="text"
                            placeholder="Busca por ingrediente"
                            onChange={handleChange} />
                    </div>
                    <div className="col-md-4">
                        <select
                            className="form-control"
                            name="category"
                            onChange={handleChange}>
                                <option value="">Select category</option>
                                {categories.map(c => (
                                    <option key={c.strCategory} value={c.strCategory}>{c.strCategory}</option>
                                ))}
                        </select>
                    </div>
                    <div className="col-md-4">
                        <input type="submit"
                            className="btn btn-block btn-primary"
                            value="Buscar recetas" />
                    </div>
                </div>
            </fieldset>
        </form>
    );
}
 
export default Formulario;