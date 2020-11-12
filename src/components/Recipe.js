import React, { useContext, useState } from 'react';
import {ContextModal} from '../context/ContextModal';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Recipe = ({recipe}) => {

    const [ modalStyle ] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();
    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const showIngredients = data => {
        let ingredients = [];
        for(let i = 1; i < 16; i++) {
            if(data[`strIngredient${i}`])
                ingredients.push(
                    <li>{data[`strIngredient${i}`]} {data[`strMeasure${i}`]}</li>
                );
        }
        return ingredients;
    };

    const {fullRecipe, setFullRecipe, setDrinkId} = useContext(ContextModal);

    return ( 
        <div className="col-md-4">
            <div className="card">
                <h2 className="card-header">
                    {recipe.strDrink}
                </h2>
                <img className="card-img-top" src={recipe.strDrinkThumb} alt={`Receta de ${recipe.strDrink}`} />
                <div className="card-body">
                    <button type="button" 
                        className="btn btn-block btn-primary"
                        onClick={ () => {
                            setDrinkId(recipe.idDrink);
                            handleOpen();
                        }}>Ver receta</button>

                    <Modal
                        open={open}
                        onClose={() => {
                            handleClose();
                            setDrinkId(null);
                            setFullRecipe({});
                        }}>
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{fullRecipe.strDrink}</h2>
                            <h3 className="mt-4">Instrucciones</h3>
                            <p>{fullRecipe.strInstructions}</p>
                            <img className="img-fluid my-4" src={fullRecipe.strDrinkThumb} />

                            <h3>Ingredients and Quantities</h3>
                            <ul>
                                { showIngredients(fullRecipe) }
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
}
 
export default Recipe;