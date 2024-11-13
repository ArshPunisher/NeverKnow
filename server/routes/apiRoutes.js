const express = require('express')
const router = express.Router()

router.get('/megha', (req, res)=>{
    res.send("Heola")
})

module.exports = router