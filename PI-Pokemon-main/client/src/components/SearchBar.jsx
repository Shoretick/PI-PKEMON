import React, { useState } from 'react';
import { useEffect} from "react";
import { useDispatch} from "react-redux";
import { GetNamePokemon } from '../actions';
import handleRender from './Home';

export default function SearchBar(){
    const dispatch = useDispatch();
    const [name,setName]= useState("");
    

function handleInputCharge(e) {
    e.preventDefault();
    setName(e.target.value);
    console.log(name);
    
}
function handleSubmit(e) {
    e.preventDefault();
    dispatch(GetNamePokemon(name));
   
}

    
    return (
        <div>
            <input type="text" placeholder='Search' onChange={(e)=> handleInputCharge(e)}></input>
             <button type='submit' onClick={(e)=> handleSubmit(e)}></button>

        </div>
    )
    
}