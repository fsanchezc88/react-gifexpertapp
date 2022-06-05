import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";


 
 export const useFetchGifs = ( category ) => {
  
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    
    useEffect( () => {
    
    console.log(' <== useEffect()');

    getGifs(category).then( imags => {
        setState({
            data: imags,
            loading: false
        });
    });

    console.log(' ==> useEffect()');

  }, [category]); 

    return state; // { data: [], loading: true };

 }
 