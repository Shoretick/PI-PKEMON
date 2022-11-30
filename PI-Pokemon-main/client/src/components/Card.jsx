import React  from "react";
import styles from '../components/styles/Card.module.css'

export default function Card ({name,img,type}){

    return (
        <div className={styles.div0}>
        <div className={styles.div1}>
            <h3 className={styles.h3}>{name}</h3>
            <div className={styles.divImg}> 
            <img className={styles.img} src={img} alt="img not found"    />
            <h4>{type}</h4>
            </div>
        </div>
</div>
    )

}