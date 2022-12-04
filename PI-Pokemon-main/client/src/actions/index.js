import axios from 'axios';



export function GetPokemons(){
    return async function (dispatch) {
        var json = await axios('http://localhost:3001/pokemons');
        return dispatch({
            type:'GET_POKEMONS',
            payload: json.data
        })
    }
    
};

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
    
