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
                setRecipesSearchData(search);
                setConsultado(true);
            }}>
            <fieldset className="text-center">
                <legend>Busca bebidas por categoría o ingrediente</legend>
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