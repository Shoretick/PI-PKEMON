import React  from "react";
import {Link} from 'react-router-dom';
import styles from './styles/LandingPage.module.css'


export default function LandingPage (){
return (
    <div className={styles.containerPime}>
        <div className={styles.container}>
            <h1 className={styles.title}> hola</h1>
            <Link to = '/pokemons'>
            <button className={styles.button}>Ingresar</button>
            </Link>
    </div>
    </div>
)



};