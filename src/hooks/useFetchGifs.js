import { useState , useEffect}  from 'react';
import  getGifs  from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //Se ejecuta cuando el componente es renderizados por primera vez, como lo hacia el component didmounth
    useEffect( ()=> {
        getGifs(category).then( img => {
            setState({
                data: img,
                loading: false
            });
        }) 
    }, [category]);
    
    return state;
}