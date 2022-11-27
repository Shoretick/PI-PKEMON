const { Router } = require('express');
const pokemon = require('./pokemons');
const express = require('express');
const type= require('./types');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/pokemons',pokemon);
router.use('/types',pokemon);


module.exports = router;
