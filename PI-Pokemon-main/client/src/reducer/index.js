


const initialState = {
    pokemons:[],
    allPokemon:[],
    allTypes:[],
    detail:[],
    
};


function rootReducer(state=initialState,action){
    switch (action.type) {
    
// Gets
//--------------------------------
        case 'GET_POKEMONS':
            return{
                ...state,
                pokemons: action.payload,
                allPokemon:action.payload
            }
        case 'GET_NAME_POKEMON':
            return{
                ...state,
                pokemons:action.payload
            }

        case'GET_TYPES':
            return {
                ...state,
                allTypes: action.payload

                }
        case 'GET_DETAILS_ID':
            return{
                ...state,
                detail: action.payload
            }


//----------------------------------------------------------------

// Post
//--------------------------------
        case 'POST_POKEMON_CREATE':
            return {
                ...state,
            }
//----------------------------------------------------------------


// Sorts
//--------------------------------
            case 'ORDER_BY_NAME':
                if (action.payload !=='All'){ 

                    const sortArr = action.payload ==='A-Z' ? 
                    state.pokemons.sort(function(a,b){
                        if (a.name > b.name) { return 1;};
                            if (b.name>a.name) {return -1;};
                            return 0;
                    }) :
                    state.pokemons.sort(function(a,b){
                        if (a.name > b.name) {return -1;};
                            if (b.name> a.name) {return 1;};
                            return 0;
                        })
                    return{ 
                        ...state,
                        pokemons:sortArr,
                        
                        };
                    }else{
                        return{ 
                        ...state,
                        pokemons: state.allPokemon
                        } }
            case 'ORDER_BY_ATTACK':
                if (action.payload !=='All'){ 

                    const sortArr = action.payload ==='Min' ? 
                    state.pokemons.sort(function(a,b){
                        if (a.attack > b.attack) { return 1;};
                            if (b.attack>a.attack) {return -1;};
                            return 0;
                    }) :
                    state.pokemons.sort(function(a,b){
                        if (a.attack > b.attack) {return -1;};
                            if (b.attack> a.attack) {return 1;};
                            return 0;
                        })
                    return{ 
                        ...state,
                        pokemons: sortArr
                        };
                    }else{
                        return{ 
                        ...state,
                        pokemons: state.allPokemon
                        } }
//----------------------------------------------------------------


//Filters
//--------------------------------

        case'FILTER_TYPES':
            const allTypes = state.allPokemon;
        const typesFilterApi= action.payload ==='All'? allTypes: allTypes.filter(e=> e.types.includes(action.payload)  );
        const typesFilterDb= allTypes.filter(e=>e.types.map(e=>e.name).includes(action.payload))
        const typesFilter= typesFilterApi.concat(typesFilterDb);
        return{
            ...state,
            pokemons: typesFilter
        }

        case 'FILTER_DB':
            const allPokemon = state.allPokemon;
            const createdFilters = action.payload ==='Created'? allPokemon.filter(e => e.createdInDB):allPokemon.filter(e=> !e.createdInDB);

            return{
                ...state,
                pokemons: action.payload === 'All'? allPokemon : createdFilters 
                        }
//----------------------------------------------------------------            

            
    
            default: return state;
    }

}

export default rootReducer;