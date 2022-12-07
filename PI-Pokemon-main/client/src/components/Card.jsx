import React  from "react";
import styles from '../components/styles/Card.module.css'
import { Link } from "react-router-dom";
import Card_1 from "./Cards/Card_1";
import Card_2 from "./Cards/Card_2";
import Card_3 from "./Cards/Card_3";
import Card_4 from "./Cards/Card_4";
import Card_5 from "./Cards/Card_5";
import Card_6 from "./Cards/Card_6";
import Card_7 from "./Cards/Card_7";
import Card_8 from "./Cards/Card_8";
import Card_9 from "./Cards/Card_9";

export default function Card ({name,img,type,id}){

    if (type[0]=='fire  '||type[1]=="fire  ") 
{
    return (
    Card_1({name,img,type,id})
    )}
    if (type[0]=="normal  "||type[1]=="normal  ") 
    {
        return (
        Card_2({name,img,type,id})
        )}
        if (type[0]=="grass  "||type[1]=="grass  ") 
        {
            return (
            Card_3({name,img,type,id})
            )}
            if (type[0]=="water  ") 
        {
            return (
            Card_4({name,img,type,id})
            )}
            if (type[0]=="bug  ") 
        {
            return (
            Card_5({name,img,type,id})
            )}
            if (type[0]=="electric  ") 
        {
            return (
            Card_6({name,img,type,id})
            )}
            if (type[0]=="poison  ") 
        {
            return (
            Card_7({name,img,type,id})
            )}
            if (type[0]=="fairy  ") 
        {
            return (
            Card_8({name,img,type,id})
            )}
            if (type[0]=="ground  ") 
        {
            return (
            Card_9({name,img,type,id})
            )}
            

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