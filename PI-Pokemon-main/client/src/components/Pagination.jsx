import React from 'react';
import styles from '../components/styles/Pagination.module.css';

export  function Pagination({pokemonsPerPage,allPokemons,pagination}){
const pageNumber= []; 

for (let i = 0; i <= Math.ceil(allPokemons/pokemonsPerPage)-1 ; i++) {
    pageNumber.push(i+1);
}
return(
    <nav className={styles.nav}>
        <ul className={styles.ul} key={10}>
            {pageNumber &&
            pageNumber.map(e =>(
                <div className={styles.div}>
                <li className={styles.li} key={e}>
                    <button href onClick = {()=> pagination(e)}> {e}</button>
                </li>
                </div>
            ))

            }

        </ul>
    </nav>
)

} ;