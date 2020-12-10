import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import  GifGrid  from './components/GifGrid';

const GifExpertApp = () => {

    //const [categories, setCategories] = useState( ['One Punch','Samurai X','Dragon Ball']);
    // const handleAdd = () => {
    //     setCategories([...categories,'Dead Note']);
    // }

    const [categories, setCategories] = useState( ['One Punch']);

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories}></AddCategory>
            <hr></hr>

            {/* <button onClick={handleAdd}>Nueva Categoria</button> */}

            <ol>
                { categories.map( category => (
                        <GifGrid 
                            key = {category}
                            category={category}
                        ></GifGrid>
                    ))
                }
            </ol>
        </div>
    )
};

export default GifExpertApp