const router = require('express').Router()






//user register
router.post('/',(req,res)=>{
    res.json({msg: "Register a user"})
})


module.exports = router