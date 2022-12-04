
import React, { Fragment,useState } from 'react';

import { useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { GetPokemons,filterTypes,filterApiOrDb,orderByName,orderByAttack} from "../actions/index";
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
    const [order,setOrder] = useState('');
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
        setCurrentPage(1)
    }

    function handleSortAttack(e){
        e.preventDefault();
        dispatch(orderByAttack(e.target.value))
        setOrder( `Order ${e.target.value}`)
        setCurrentPage(1)

    }
    
    function handleSortTo_AZ_ZA(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setOrder( `Order ${e.target.value}`)
        
        setCurrentPage(1)
    }
    
    function handleFilterTypes(e) {
        e.preventDefault();
        dispatch(filterTypes(e.target.value));
        setCurrentPage(1)

        
    }

    function handleFilterCreated(e) {
        dispatch(filterApiOrDb(e.target.value));
        setCurrentPage(1)

        
    }

    return(
        <div>
            <Link to='/pokemons'>Crear Pokemon</Link>
            <h1> POKEMON HOME</h1>
            <button value='All'onClick={e=>{handleClick(e)}}>all pokemons</button>
            <button value='Created'onClick={e=>{handleFilterCreated(e)}}>Pokemons created</button>
            <button value='Existing'onClick={e=>{handleFilterCreated(e)}}>Existing pokemon</button>
            
            <div>
            <select onChange={e=> handleSortTo_AZ_ZA(e)} >
                <option  value='All'>Order</option>
                <option  value='A-Z'>A-Z</option>
                <option  value='Z-A'>Z-A</option>
                
            </select>

            <select onChange={e=>handleFilterTypes(e)} >
            <option value='All' >All Types</option>
            <option value='poison'>poison</option>
            <option value='bug'>bug</option>
            <option value='grass'>grass</option>
            <option value='dark'>dark</option>
            <option value='fighting'>fighting</option>
            <option value='ground'>ground</option>
            <option value='steel'>steel</option>
            <option value='fire'>fire</option>
            <option value='electric'>electric</option>
            <option value='ice'>ice</option>
            <option value='flying'>flying</option>
            <option value='ghost'>ghost</option>
            <option value='psychic'>psychic</option>
            <option value='normal'>normal</option>
            <option value='rock'>rock</option>
            <option value='water'>water</option>
            <option value='fairy'>fairy</option>
            <option value='unknown'>unknownn</option>
            <option value='dragon'>dragon</option>
            <option value='shadow'>shadow</option>
            
            </select>
            

            <select onChange={e=>handleSortAttack(e)}>
                <option value='All'>Order by attack</option>
                <option value='Max'> Attack Max</option>
                <option value='Min'>Attack Min</option>
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
                    type={!e.createdInDB? e.types.map(e => {var arr=[]; arr.push(e + '  '); return arr }) :  e.types.map(e => {var arr=[]; arr.push(e.name + '  '); return arr })} />
                    
                    </Fragment>

                    )})
                    }
                </div>
                

            </div>
        </div>

    )
    
}