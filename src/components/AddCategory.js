import React, { useState } from 'react';
import PropTypes from 'prop-types';


  export const AddCategory = ({ setCategories }) => {
    
    const initialState ='';
    const [inputValue, setInputValue] = useState(initialState);

    const handleInputChange = ( e ) => {
      setInputValue(e.target.value);
      //console.log(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();

      if(inputValue.trim().length > 2){
        setCategories(categories => [ inputValue, ...categories ]);
        console.log('Submit hecho');
      }  
    
    }

    return (
      <form onSubmit= { handleSubmit } >
        <input 
          type="text"
          value={ inputValue }
          onChange = { handleInputChange }
        />
      </form>
    )
  }

  AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
  }