import React from 'react';

export const GifGtid = ({ category }) => {

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

  getGifs();


  return (
    <div>
        <h3> { category } </h3>
    </div>
  )
}
