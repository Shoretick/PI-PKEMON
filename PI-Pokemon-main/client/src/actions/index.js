import axios from 'axios';


// Actions Gets
//------------------------------
export function GetPokemons(){
    return async function (dispatch) {
        var json = await axios('http://localhost:3001/pokemons');
        return dispatch({
            type:'GET_POKEMONS',
            payload: json.data
        })
    }
    
};
export function GetNamePokemon(name){
        return async function (dispatch) {
    try {
        var json = await axios(`http://localhost:3001/pokemons?name=${name}`);
        return dispatch({ 
            type:'GET_NAME_POKEMON',
            payload: json.data
            })
    } catch (error) {
        console.log(error);
    }
        }
}
export function GetTypes(){
    return async function (dispatch) {
        var json = await axios('http://localhost:3001/types');
        return dispatch({
            type:'GET_TYPES',
            payload: json.data
        })
    }
    
};
export function GetDetails(id){
    return async function (dispatch) {
        try {
            var json = await axios(`http://localhost:3001/pokemons/${id}`);
        return dispatch({
            type:'GET_DETAILS_ID',
            payload: json.data
        })
        } catch (error) {
             console.log(error)
        }
       
    }

}
//----------------------------------------------------------------

// Post
//------------------------------
export function PostPokemonCreate(payload){
    return async function (dispatch) {
        var json = await axios.post('http://localhost:3001/pokemons',payload);
       
        return{
        json
       }
    }
    
};
//----------------------------------------------------------------

// Actions Filters 
//------------------------------
export function filterTypes(payload){
    return{
        type:'FILTER_TYPES',
        payload
    }      
    };
    export function filterApiOrDb(payload){
        return {
            type:'FILTER_DB',
            payload
        }
    }
    //----------------------------------------------------------------


    // Actions Order
    //------------------------------
    export function orderByName(payload){
        return {
            type:'ORDER_BY_NAME' ,
            payload
        }
    }
    export function orderByAttack(payload){
        return {type: 'ORDER_BY_ATTACK',
        payload
    }

    }
    
