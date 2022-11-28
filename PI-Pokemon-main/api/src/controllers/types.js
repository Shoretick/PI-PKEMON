
const express = require('express')
const router = express.Router();
const { Type} = require('../db');
const {allTypes} = require('../controllers/funtions');


// get /types
//--------------------------------
router.get  ('/types', async (req, res)=>{
    const infoApi = await allTypes();
    infoApi.map(e =>{
        Type.findOrCreate({ where:{name:e}})
    })
    
    const allType= await Type.findAll();
    console.log(allType);
    res.status(200).send(allType);
    
    
    
    });

module.exports = router;