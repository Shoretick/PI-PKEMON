const { Router } = require('express');
const pokemons = require('../controllers/pokemons.js');
const types= require('../controllers/types.js');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/pokemons',pokemons);
router.get('/pokemons/:id',pokemons);
router.post('/pokemons',pokemons);
router.get('/types',types);



module.exports = router;
