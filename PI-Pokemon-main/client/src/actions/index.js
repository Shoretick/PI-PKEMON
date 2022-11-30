import axios from 'axios';



export function GetPokemons(){
    return async function (dispatch) {
        var json = await axios('http://localhost:3001/pokemons');
        return dispatch({
            type:'GET_POKEMONS',
            payload: json.data
        })
    }
    
}