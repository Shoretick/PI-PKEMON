
import React from 'react';

import { useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { GetPokemons } from "../actions/index";
import { Link } from 'react-router-dom';
import Card from './Card';


export default function Home() {
    const dispatch = useDispatch();
    const allPokemons = useSelector((state)=> state.pokemons);

    useEffect(()=>{ dispatch(GetPokemons());
    },[dispatch])

    function handleClick(e){
        e.preventDefault();
        dispatch(GetPokemons())
    }

    function handleSort(e){
        e.preventDefault();

    }
    
    function handleSort2(e){
        e.preventDefault();
        
    }
    
    function handleFilter(e){
        e.preventDefault();
        
    }

    return(
        <div>
            <Link to='/pokemons'>Crear Pokemon</Link>
            <h1> POKEMON HOME</h1>
            <button onClick={e=>{handleClick(e)}}>volver a cagar todos los Pokemones</button>
            <div>
            <select onChange={e=> handleSort(e)} >
                <option  value='---'>---</option>
                <option  value='A-Z'>A-Z</option>
                <option  value='Z-A'>Z-A</option>
                
            </select>
            <select onChange={e=> handleFilter(e)} >
            <option value='All'>All</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            
            </select>
            <select onChange={e=>handleSort2(e)}>
                <option value='max'> Max  </option>
                <option value='min'>Min   </option>
                </select>
                <div>

                    {
                allPokemons?.map( (e) =>{
                    return( 
                        <fragment>
                    
                    <Card name={e.name} img={e.img} type={e.type} />
                    
                    </fragment>

                    )})
                    }
                </div>
                

            </div>
        </div>

    )
    
}