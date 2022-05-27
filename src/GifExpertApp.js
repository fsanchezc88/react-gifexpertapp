//rafc
import React, { useState } from 'react';

const GifExpertApp = ({ category }) => {


    const initialState =  ['One Punch', 'Samurai', 'Dragon Ball'];
    const [categories, setCategories] = useState(initialState);
    
    const handleAdd = () => {
        const category = 'HunterxHunter';
        setCategories(categories => [...categories, category]);  
    }

    return(
        <>
            <h2>GifExpertApp</h2>
            <hr/>

            <button onClick={ handleAdd }>Agregar</button>

            <ol>
                {
                    categories.map((category, i) => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>
    );
}

export default GifExpertApp;