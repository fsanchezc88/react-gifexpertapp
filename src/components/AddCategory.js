import React, { useState } from 'react';

export const AddCategory = () => {
  
  const initialState ='Hola Mundo';
  const [inputValue, setInputValue] = useState(initialState);

  const handleInputChange = ( e ) => {
    setInputValue(e.target.value);
    //console.log(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Submit hecho');
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
