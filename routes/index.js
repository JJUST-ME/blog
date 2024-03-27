const express = require('express')
const router = express.Router()

router.get("/", (req, res)=>{
    res.render("home")
})
router.get("/resister", (req, res)=>{
    res.render("resister");
})

module.exports = router;