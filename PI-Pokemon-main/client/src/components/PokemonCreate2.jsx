import React from 'react';
import {useState,useEffect} from 'react'
import { Link} from 'react-router-dom';
import { PostPokemonCreate,GetTypes } from "../actions";
import { useDispatch,useSelector } from 'react-redux';



function validate(input) {
    let errors = {};

    if (!input.name) {
        errors.name = 'Name required';
    }else if (!input.type) {
        errors.hp = 'Type required';
    }
    return errors;
    

};

export default function PokemonCreate(){
    const dispatch= useDispatch();
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
    console.log(input)


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
}

    

    return(

        <div>
            <Link to='/pokemons'><button>return</button> </Link>
            <h1>Create Pokemon</h1>

            <form onSubmit={(e)=>handleSubmit(e)}>
            <div>
                <label>Nombre</label>
                <input type="text" value={input.name} name="name" onChange={(e)=>handleChange(e)}></input>
                {errors.name && (
                        <p className='error'> {errors.name}</p>
                    )}
            </div>
            <div>
                <label>Hp</label>
                <input type="number" value={input.hp} name="hp" onChange={(e)=>handleChange(e)}></input>
            </div>
            <div>
                <label>Attack</label>
                <input type="number" value={input.attack} name="attack" onChange={(e)=>handleChange(e)}></input>
            </div>
            <div>
                <label>Defense</label>
                <input type="number" value={input.defense} name="defense" onChange={(e)=>handleChange(e)}></input>
            </div>
            <div>
                <label>imge</label>
                <input type="text" value={input.img} name="img" onChange={(e)=>handleChange(e)}></input>
            </div>
            <div>
                <label>speed</label>
                <input type="number" value={input.speed} name="speed" onChange={(e)=>handleChange(e)}></input>
            </div>
            <div>
                <label>height</label>
                <input type="number" value={input.height} name="height" onChange={(e)=>handleChange(e)}></input>
            </div>
            <div>
                <label>weight</label>
                <input type="number" value={input.weight} name="weight" onChange={(e)=>handleChange(e)}></input>
            </div>
                
                    <select onChange={(e)=>handleSelect(e)}>
                    { Types.map((d)=>(
                        <option value={d.name} >{d.name}</option>
                    ))}
                    </select>
                { !errors.name && !errors.hp  && (<button type="submit"> Create Pokemon</button>)}
                
                
            </form>
            {input.type.map(e=> 
            <div>
                <button className= "buttonX " onClick={()=> handleDelete(e)}> </button>
                <p>{e}</p>
                
            </div>
                )}

        </div>
        )


}