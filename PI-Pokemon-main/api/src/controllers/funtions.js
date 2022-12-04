const express = require('express')
const router = express.Router();
const { Pokemon,Type } = require('../db');
const axios = require('axios');



//Funciones
//-------------------------------
const getApiInfo = async () => {
    try {  
        
        var arr=[];


        for (let i = 1; i < 41; i++) {
            const apiUrl = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`, {headers: {  'Accept-Encoding': 'application/json',  } }); 
            let obj= { 
                id: apiUrl.data.id,
                name: apiUrl.data.name,
                hp: apiUrl.data.stats[0].base_stat,
                attack: apiUrl.data.stats[1].base_stat,
                defense: apiUrl.data.stats[2].base_stat,
                speed: apiUrl.data.stats[5].base_stat,
                height: apiUrl.data.height,
                weight: apiUrl.data.weight,
                img: apiUrl.data.sprites.other.dream_world.front_default,
                //img: apiUrl.data.sprites.front_default,
                types: apiUrl.data.types.map((e) => e.type.name),
            }
            arr.push(obj)
        }
        return arr;

    } catch (error) {
        console.log("no found");
        console.error(error);
        return ([]);
    }
};

const getDbInfo = async () => {
    return await Pokemon.findAll({
        include:{
            model: Type,
            attributes: ['name'],
            through:{
                attributes: [],
            }
        }

    });
    }




const getAllPokemons = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal; 


} 
const getApiNamePokemons = async (name) => { 
        

        try {  
            var arr=[];
            
    
                const apiUrl = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`, {headers: {  'Accept-Encoding': 'application/json',  } }); 
                let obj= { 
                    id: apiUrl.data.id,
                    name: apiUrl.data.name,
                    hp: apiUrl.data.stats[0].base_stat,
                    attack: apiUrl.data.stats[1].base_stat,
                    defense: apiUrl.data.stats[2].base_stat,
                    speed: apiUrl.data.stats[5].base_stat,
                    height: apiUrl.data.height,
                    weight: apiUrl.data.weight,
                    img: url.data.sprites.other.dream_world.front_default,
                    //img: apiUrl.data.sprites.front_default,
                    type: apiUrl.data.types.map((tipo) => tipo.type.name),
                }
                arr.push(obj)


            return arr;
    
        } catch (error) {
            console.log("no found");
            console.error(error);
            return ([]);
        }
    };

    const getAllNamesPokemons = async (name) => {
        const apiInfo = await getApiNamePokemons(name);
        const dbInfo = await getDbInfo();
        const infoTotal = apiInfo.concat(dbInfo);
        return infoTotal; 
    }
        const getApiIdsPokemons = async (id) => {
            try {  
                var arr=[];
        
                    const apiUrl = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`, {headers: {  'Accept-Encoding': 'application/json',  } }); 
                    let obj= { 
                        id: apiUrl.data.id,
                        name: apiUrl.data.name,
                        hp: apiUrl.data.stats[0].base_stat,
                        attack: apiUrl.data.stats[1].base_stat,
                        defense: apiUrl.data.stats[2].base_stat,
                        speed: apiUrl.data.stats[5].base_stat,
                        height: apiUrl.data.height,
                        weight: apiUrl.data.weight,
                       img: url.data.sprites.other.dream_world.front_default,
                       //img: apiUrl.data.sprites.front_default,
                        type: apiUrl.data.types.map((tipo) => tipo.type.name),
                    }
                    arr.push(obj)
    
    
                return arr;
        
            } catch (error) {
                console.log("no found");
                console.error(error);
                return ([]);
            }
        };
        const getAllIdsPokemons = async (id) => {
            const apiInfo = await getApiIdsPokemons(id);
            const dbInfo = await getDbInfo();
            const infoTotal = apiInfo.concat(dbInfo);
            return infoTotal; 
        }

        const allTypes = async () => {
            
            try {
                let arr = [];
            const apiTypesInfo = await axios.get(`https://pokeapi.co/api/v2/type`, {headers: {  'Accept-Encoding': 'application/json',  } });
            const  {results} = apiTypesInfo.data;
            if (results.length > 0) {
                arr = results.map(e=> e.name)
                
            }
            console.log(arr.length);
            return arr;

            } catch (error) {
                return ([]);
            }
            
        };

module.exports = {getApiInfo, getDbInfo ,getAllPokemons,getAllNamesPokemons,getAllIdsPokemons,allTypes}