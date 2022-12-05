import React from 'react';
import {useState,useEffect} from 'react'
import { Link} from 'react-router-dom';
import { GetDetails } from "../actions";
import { useDispatch,useSelector } from 'react-redux';

export default function Details(props) {
    const dispatch= useDispatch();
    
    useEffect(()=>{
        dispatch(GetDetails(props.match.params.id));},[dispatch]);
const myPokemon= useSelector((state)=> state.detail);

return( <div onChange={myPokemon}>
        { 
        myPokemon.length>0?
        
        <div>
            <img src={myPokemon[0].img} ></img>
        <h1> {myPokemon[0].name }</h1>
        <h5>Hp: {(myPokemon[0].hp)}</h5>
        <h5>attack: {(myPokemon[0].attack)}</h5>
        <h5>defense: {(myPokemon[0].defense)}</h5>
        <h5>speed: {(myPokemon[0].speed)}</h5>
        <h5>heigh: {(myPokemon[0].heigh)}</h5>
        <h5>weight: {(myPokemon[0].weight)}</h5>
        
        <div> 
        <Link to='/pokemons'>
        <button >volver</button>
        </Link>
        </div>
        </div> :
        <img src='https://cdn.dribbble.com/users/139899/screenshots/968095/media/87390a0a43c5c0b352382b5d8418fc3c.gif' /> 
        
        } 


</div>


)
    
}