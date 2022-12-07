import React, { Fragment }  from "react";
import {Link} from 'react-router-dom';
import styles from './styles/LandingPage.module.css'
import pokemon from '../assets/pokemon.png'
import enter from '../assets/enter.png'


export default function LandingPage (){
return (
    <div className={styles.containerPime}>
        <div className={styles.container}>
            
            <img className={styles.title} src={pokemon} alt="No found"></img>
           
            <fragment>

            <Link to = '/pokemons'>
            <button className={styles.button} ><img className={styles.enter} src={enter} alt="No found"></img></button>
            
            </Link>
            </fragment>
    </div>
    </div>
)



};