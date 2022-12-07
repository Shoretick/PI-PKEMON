import React from 'react';
import {useState,useEffect} from 'react'
import { Link,useHistory } from "react-router-dom";
import { PostPokemonCreate,GetTypes } from "../actions";
import { useDispatch,useSelector } from 'react-redux';
import styles from './styles/PokemonCreate.module.css';
import createPokemon from '../assets/createPokemon.png'


//validate form
//------------------------
function validate(input) {
    let errors = {};
    let regExp = new RegExp(/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/);
    if (!input.name) {
        errors.name = 'Name required';
    
    }else if (input.name.length > 8) {
        errors.name = 'Name max length must be 8 characters';
    }
    else if (input.img &&!regExp.test(input.img)) {
        errors.img = 'invalid url image';
    }
    else if ( input.hp >200 ) {
        errors.hp = 'a value less than 200 is required';
    }
    else if ( input.attack >200 ) {
        errors.attack = 'a value less than 200 is required';
    }
    else if ( input.defense >200 ) {
        errors.defense = 'a value less than 200 is required';
    }
    else if ( input.speed >200 ) {
        errors.speed = 'a value less than 200 is required';
    }
    else if ( input.height >200 ) {
        errors.height = 'a value less than 200 is required';
    }
    else if ( input.weight >200 ) {
        errors.weight = 'a value less than 200 is required';
    }

    

    return errors;
    

};
//----------------------------------------------------------------
export default function PokemonCreate(){
    const dispatch= useDispatch();
    const history= useHistory();
    const Types = useSelector((state)=> state.allTypes)
    const [errors,setErrors] = useState({});

    
    const [input,setInput] = useState({                                
        name:"",
        hp:"",
        attack:"",
        defense:"",
        img:"",
        speed:"",
        height:"",
        weight:"",
        type:[]
    });

    useEffect(() => {
        dispatch(GetTypes());
    },[dispatch]);



function handleChange(e){
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
    setErrors(validate({ 
        ...input,
        [e.target.name]: e.target.value
    }));


}
function handleSelect(e){
    var type=e.target.value;
    
    
    if (!input.type.includes(type)) {
        console.log(input.type);
        console.log(input.name);

        setInput({
            ...input,
            type: input.type.concat(type)
        })
    }
}
function handleDelete(e){
    setInput({
        ...input,
        type:input.type.filter(dts => dts !== e)
    })
}


function handleSubmit(e){
    e.preventDefault();
   
    dispatch(PostPokemonCreate(input))
    alert("POKEMON CREATED!")
    setInput({
        name:"",
        hp:"",
        attack:"",
        defense:"",
        img:"",
        speed:"",
        height:"",
        weight:"",
        type:[]

    })
    history.push('/pokemons')
}

    

    return(

        <div className={styles.container} >
            <Link to='/pokemons'><button className={styles.button1}>Back</button> </Link>
            <img className={styles.createPokemon} src={createPokemon} alt= "Create Pokemon"></img>

            <form onSubmit={(e)=>handleSubmit(e)} className={styles.form} >
            <div>
                <p className={styles.labels}>Name</p>
                <input placeholder='Name' className={styles.inputs} type="text" value={input.name} name="name" onChange={(e)=>handleChange(e)}></input>
                {errors.name && (
                        <p className={styles.errors}> {errors.name}</p>
                    )}
            </div>
            <div>
                <p className={styles.labels}>Hpoints     </p>
                <input placeholder='123...' className={styles.inputs} type="number" value={input.hp} name="hp" onChange={(e)=>handleChange(e)}></input>
                {errors.hp && (
                        <p className={styles.errors}> {errors.hp}</p>
                    )}
            </div>
            <div>
                <p className={styles.labels}> Attack</p>
                <input placeholder='123...' className={styles.inputs} type="number" value={input.attack} name="attack" onChange={(e)=>handleChange(e)}></input>
                {errors.attack && (
                        <p className={styles.errors}> {errors.attack}</p>
                    )}
            </div>
            <div>
                <p className={styles.labels}>Defense</p>
                <input placeholder='123...' className={styles.inputs} type="number" value={input.defense} name="defense" onChange={(e)=>handleChange(e)}></input>
                {errors.defense && (
                        <p className={styles.errors}> {errors.defense}</p>
                    )}
            </div>
            <div>
                <p className={styles.labels}>Image</p>
                <input placeholder='http//...' className={styles.inputs} type="text" value={input.img} name="img" onChange={(e)=>handleChange(e)}></input>
                {errors.img && (
                        <p className={styles.errors}> {errors.img}</p>
                    )}
            </div>
            <div>
                <p className={styles.labels}>speed</p>
                <input placeholder='123...' className={styles.inputs} type="number" value={input.speed} name="speed" onChange={(e)=>handleChange(e)}></input>
                {errors.speed && (
                        <p className={styles.errors}> {errors.speed}</p>
                    )}
            </div>
            <div>
                <p className={styles.labels}>Height</p>
                <input placeholder='123...' className={styles.inputs} type="number" value={input.height} name="height" onChange={(e)=>handleChange(e)}></input>
                {errors.height && (
                        <p className={styles.errors}> {errors.height}</p>
                    )}
            </div>
            <div>
                <p className={styles.labels}>weight</p>
                <input placeholder='123...' className={styles.inputs} type="number" value={input.weight} name="weight" onChange={(e)=>handleChange(e)}></input>
                {errors.weight && (
                        <p className={styles.errors}> {errors.weight}</p>
                    )}
            </div>
                
                    <select className={styles.select} onChange={(e)=>handleSelect(e)}>
                        <option>Types</option>
                    { Types.map((d)=>(
                        <option value={d.name} >{d.name}</option>
                    ))}
                    </select>
                {input.img.length>0&& input.name.length>0 && input.type.length >0 && !errors.name && !errors.img &&!errors.attack &&!errors.defense &&!errors.speed &&!errors.height &&!errors.weight && (<button className={styles.buttonCreate} type="submit" onChange={errors}> Create Pokemon</button>)}
                
                
            </form>
            {input.type.map(e=> 
            <div className={styles.divButonX}>
                <button className= {styles.buttonX}  onClick={()=> handleDelete(e)}>{e} </button>
                
            </div>
                )}

        </div>
        )


}