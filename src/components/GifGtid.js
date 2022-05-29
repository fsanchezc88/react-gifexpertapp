import React, { useState, useEffect } from 'react';

export const GifGtid = ({ category }) => {

  const [count, setCount] = useState(0);

  // Segundo argumento del useEffect es un arreglo de dependencias.
  // 2do arg vacio [] : componentDidMount(); solo se ejecuta la vez q se monta el componente. 
  useEffect( () => {
    getGifs();
  }, []); 

  const getGifs = async() => {

    const url = 'https://api.giphy.com/v1/gifs/search?q=Richy+and+Morty&limit=10&api_key=i9yc8x4Sg1uQN0SuFjQjylNX8pivoxNi';
    const resp = await fetch( url );
    const { data } = await resp.json();    

    const gifs = data.map( img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    })

    console.log(gifs);

  }


  return (
    <div>
        <h3> { category } </h3>
        <h3> { count } </h3>
        <button onClick={ () => setCount ( count + 1 ) }>X</button>
    </div>
  )
}
