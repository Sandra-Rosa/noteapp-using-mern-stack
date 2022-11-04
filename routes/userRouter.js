const router = require('express').Router()






//user register
router.get('/',(req,res)=>{
    res.json({msg: "Register a user"})
})


module.exports = router