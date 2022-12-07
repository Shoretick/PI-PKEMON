import React  from "react";
import styles from '../styles/Cards/Card_7.module.css'
import { Link } from "react-router-dom";

export default function Card_7 ({name,img,type,id}){

    return (
        <div className={styles.div0}>
            
        <div className={styles.div1}>
            <h3 className={styles.h3}>{name}</h3>
            <div className={styles.divImg}> 
            <Link to={"/detail/"+ id}>
            <img className={styles.img} src={img} alt="img not found"    />
            </Link>
            </div>
            <h6>Type: {type}</h6>
        </div>
</div>
    )

}