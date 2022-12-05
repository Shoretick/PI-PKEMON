
const express = require('express')
const router = express.Router();
const { Pokemon,Type } = require('../db');
const axios = require('axios');
const {getAllPokemons,getAllNamesPokemons,getAllIdsPokemons } = require('./funtions');



//GET /pokemons
//------------------------------


router.get('/pokemons', async (req,res)=>{
    const name = req.query.name;
    let pokemonsTotal = await getAllPokemons();
    
    if (name) {
        let pokemonsNameTotal = await getAllNamesPokemons(name.toLowerCase());
        let pokemonName = pokemonsNameTotal.filter(e => e.name.toLowerCase()===name.toLowerCase());
        pokemonName.length?
            res.status(200).send(pokemonName):
            res.status(404).send('no results');
        
    } else{
            
            res.status(200).send(pokemonsTotal);
    }
});

router.get('/pokemons/:id', async (req,res)=>{
    const id=req.params.id;
    const pokemonsTotal= await getAllIdsPokemons(id);
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
router.use(express.json());
router.post('/pokemons', async (req,res)=>{
    const{ 
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
        type
    }=req.body;

    const pokemonCreate = await Pokemon.create({
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
    const typesDb= await Type.findAll({ where: {name: type}});
    
    pokemonCreate.addType(typesDb)
    res.status(200).json('Pokemon Created In DB');


});

module.exports= router;