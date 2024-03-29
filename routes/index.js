const express = require('express')
const router = express.Router()

router.get("/", (req, res)=>{
    res.render("home")
})
router.get("/resister", (req, res)=>{
    res.render("resister");
})

router.get("/gatesyllab", (req, res) =>{
    res.render("gatesyllab")
})

router.get("/psusyllab",(req,res)=>{
    res.render("psusyllab")
})

module.exports = router;