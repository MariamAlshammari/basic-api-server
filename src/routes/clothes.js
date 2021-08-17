const express=require('express');
const router =express.Router();


// const {implementations}=require('../handlers/routers-implementation');

const {createClothes,
    getClothesHandler,
    getAllClothes,
    updateClothes,
    deleteClothes,


}=require('../handlers/routers-implementation');

// router.get('/',getHelloHandler);
router.post('/clothes',createClothes);
router.get('/clothes',getAllClothes);


router.get('/clothes/:id', getClothesHandler);
router.put('/clothes/:id', updateClothes);
router.delete('/clothes/:id', deleteClothes);


module.exports=router;


