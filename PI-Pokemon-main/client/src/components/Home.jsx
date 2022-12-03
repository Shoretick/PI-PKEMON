
import React, { Fragment,useState } from 'react';

import { useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { GetPokemons } from "../actions/index";
import { Link } from 'react-router-dom';
import Card from './Card';
import {Pagination}  from "./Pagination";


export default function Home() {
    const dispatch = useDispatch();
    const allPokemons = useSelector((state)=> state.pokemons);
    
    //Pagination
    //------------------------

    const [currentPage,setCurrentPage] = useState(1) ;
    const  [pokemonsPerPage,setPokemonsPerPage] = useState(12);
    //const [order,setOrder] = useState('');
    const indexOfLastPokemons = currentPage*pokemonsPerPage ;
    const indexOfFirstPokemons = indexOfLastPokemons- pokemonsPerPage ;
    const currentPokemons = allPokemons.slice(indexOfFirstPokemons, indexOfLastPokemons);
    

    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
//----------------------------------------------------------------------


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
                    <Pagination 
                    pokemonsPerPage={pokemonsPerPage}
                    allPokemons= {allPokemons.length}
                    pagination={ pagination } >
                        
                    </Pagination>

                    {
                currentPokemons?.map( (e) =>{
                    console.log(e.type);
                    return( 
                        <Fragment >
                    
                    <Card id={e.id} name={e.name} img={e.img} key={e.id}
                    type={!e.createdInDB? e.type.map(e => {var arr=[]; arr.push(e.type.name + '  '); return arr }) :  e.types.map(e => {var arr=[]; arr.push(e.name + '  '); return arr })} />
                    
                    </Fragment>

                    )})
                    }
                </div>
                

            </div>
        </div>

    )
    
}