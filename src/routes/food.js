const express=require('express');
const router =express.Router();


// const {implementations}=require('../handlers/routers-implementation');

const {getHelloHandler,
    createFood,
    getFoodHandler,
    getAllFood,
    updateFood,
    deleteFood,
    


}=require('../handlers/routers-implementation');

router.get('/',getHelloHandler);


router.post('/food',createFood);
router.get('/food',getAllFood);

router.get('/food/:id', getFoodHandler);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);

module.exports=router;



