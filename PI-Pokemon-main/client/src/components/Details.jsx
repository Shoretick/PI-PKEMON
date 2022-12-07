import React from 'react';
import {useState,useEffect} from 'react'
import { Link} from 'react-router-dom';
import { GetDetails } from "../actions";
import { useDispatch,useSelector } from 'react-redux';
import styles from './styles/Details.module.css';

export default function Details(props) {
    const dispatch= useDispatch();
     
    useEffect(()=>{
        dispatch(GetDetails(props.match.params.id));},[dispatch]);
const myPokemon= useSelector((state)=> state.detail);

return( <div onChange={myPokemon} className={styles.containerPime}>
        { 
        myPokemon.length>0?
        
       
        <div className={styles.container}>
            
                <div className={styles.divImg}>
                <img className={styles.Img} src={myPokemon[0].img} alt="No found" ></img>
                {
                }
            </div>
        <div className={styles.linea1}></div>
        <div className={styles.linea2}> </div>
        <div className={styles.centro1}> </div>
        <div className={styles.centro2}> </div>
        <div className={styles.centro3}> </div>
        <div className={styles.centro4}> </div>
        <div className={styles.divName}>
        <h1> {myPokemon[0].name }</h1>
        </div> 
        <div className= {styles.continerH5}> 
        
           <div className={styles.divH5}  > {}
        <h5 className={styles.h5} >Id: { (!myPokemon[0].createdInDB? myPokemon[0].id:"unknown")}</h5>
        <h5 className={styles.h5} >Hp: {(myPokemon[0].hp)}</h5>        
        <h5 className={styles.h5}>Height: {(myPokemon[0].height)}</h5>
        <h5 className={styles.h5}>Weight: {(myPokemon[0].weight)}</h5>
        </div>

        <div className={styles.divH52}>
        <h5 className={styles.h5}>Attack: {(myPokemon[0].attack)}</h5>
        <h5 className={styles.h5}>Defense: {(myPokemon[0].defense)}</h5>
        <h5 className={styles.h5}>Speed: {(myPokemon[0].speed)}</h5>

        </div>
       </div>
        
        <div className={styles.divButton}> 
        <Link to='/pokemons'>
        <button className={styles.button} >Back</button>
        </Link>
        </div>

        </div> :
        <img height="200px" width="200" src="https://media.baamboozle.com/uploads/images/125978/1629738053_29014_gif-url.gif" alt ="Loading" /> 
        
        } 


</div>


)
    
}