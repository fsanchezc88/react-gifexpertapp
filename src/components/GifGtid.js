import React, { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGtid = ({ category }) => {

  const [images, setImages] = useState([])

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
    });

    console.log(gifs);
    setImages(gifs);

  }

  const liImages = images.map( img => {
    return (<li key={ img.id } >{ img.title }</li>);
  });
  
  /*const liImagesx = images.map( ({id, title }) => {
    return (<li key={ id } >{ title }</li>);
  });*/

  return (
    <div>
        <h3> { category } </h3>
        <ol>
        { /*liImages*/ }
        {
          images.map( ( img ) => (
            <GifGridItem 
              key={ img.id }
              /*img = { img }*/
              { ...img }
            />
          ))
        }
        </ol>
    </div>
  )
}
