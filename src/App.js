import React from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import RecipesList from './components/RecipesList';

import CategoriesProvider from './context/ContextCategories';
import RecipesProvider from './context/ContextRecipes';
import ModalProvider from './context/ContextModal';

function App() {
  	return (
	  	<CategoriesProvider>
			<RecipesProvider>
				<ModalProvider>
					<Header />
					<div className="container mt-5">
						<div className="row">
							<Formulario />
						</div>
						<RecipesList />
					</div>
				</ModalProvider>
			</RecipesProvider>
	  	</CategoriesProvider>
  	);
}

export default App;
