
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
               // img: url.data.sprites.other.dream_world.front_default,
                img: apiUrl.data.sprites.front_default,
                type: apiUrl.data.types.map((tipo) => tipo.type.name),
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
//----------------------------------------------------------------


//GET /pokemons
//------------------------------


router.get('/pokemons', async (req,res)=>{
    const name = req.query.name;
    let pokemonsTotal = await getAllPokemons();

    if (name) {
        let pokemonName = await pokemonsTotal.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));
        pokemonName.length?
            res.status(200).send(pokemonName):
            res.status(404).send('no results');
        
    } else{
            
            res.status(200).send(pokemonsTotal);
    }
});

router.get('/pokemons/:id', async (req,res)=>{
    const id=req.params.id;
    const pokemonsTotal= await getAllPokemons();
    if (id) {
        let pokemonId = pokemonsTotal.filter(e=> e.id == id)
        pokemonId.length? 
        res.status(200).json(pokemonId):
        res.status(404).send('0 results');
    }


});

//----------------------------------------------------------------

//POST /pokemons
//------------------------------

router.post('/pokemons', async (req,res)=>{
    let{ 
        id,
        name,
        hp,
        attack,
        defense,
        img,
        speed,
        height,
        weight,
        createdInDB,
        types
    }=req.body;
    let pokemonCreate = await Pokemon.create({
        id,
        name,
        hp,
        attack,
        defense,
        img,
        speed,
        height,
        weight,
        createdInDB

    })
    let typesDb= await Type.findAll({where:{name:types}});
    pokemonCreate.addType(typesDb)
    res.send('Pokemon Created In DB');


});

// get /types
//--------------------------------
router.get  ('/types', async (req, res)=>{
const infoApi = await getApiInfo();
const pokemonsTypes = infoApi.map(e => e.type);
const typesMap= pokemonsTypes.map(e => {
for (let i = 0; i < pokemonsTypes.length; i++) return e[i]});
typesMap.map(e =>{
    Type.findOrCreate({ where:{name:e}})
})
const allTypes= await Type.findAll();
res.send(allTypes);



});


module.exports= router