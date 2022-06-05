import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

const {data:images, loading} = useFetchGifs( category );

console.log(loading);
console.log(images);

  return (
   <>
    <h3 className='animate__animate animate__fadeIn'> { category } </h3>

    { loading && <p className='animate__animate animate__flash'>Loading</p> }

    <div className="card-grid">    
        <ol>
        {
          images.map( ( img ) => (
            <GifGridItem 
              key={ img.id }
              { ...img }
            />
          ))
        }
        </ol>
    </div>
   </>
  )
}
