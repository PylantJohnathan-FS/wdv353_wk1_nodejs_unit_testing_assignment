const express = require("express");
const router = express.Router();

// http://localhost:3000/excercise
router.get("/", (req,res, next)=>{
    res.status(200).json({
        message: 'Successful - GET',
        metadata:{
            hostname: req.hostname,
            method: req.method,
        },
    });
});

module.exports = router;