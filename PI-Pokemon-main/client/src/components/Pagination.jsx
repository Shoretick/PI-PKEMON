import React from 'react';
import styles from '../components/styles/Pagination.module.css';

export  function Pagination({pokemonsPerPage,allPokemons,pagination}){
const pageNumber= []; 

for (var i = 0; i <= Math.ceil(allPokemons/pokemonsPerPage)-1 ; i++) {
    pageNumber.push(i+1);
}
return(
    <nav className={styles.nav}>
        <ul className={styles.ul} key={i}>
            {pageNumber &&
            pageNumber.map(e =>(
                <div className={styles.div}>
                <li className={styles.li} key={e}>
                    <button className={styles.buttons} href onClick = {()=> pagination(e)}> {e}</button>
                </li>
                </div>
            ))

            }

        </ul>
    </nav>
)

} ;