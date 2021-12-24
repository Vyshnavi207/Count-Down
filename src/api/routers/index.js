const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.render("index");
});

router.get("/articles",(req,res)=>{
    res.render("articles");
})

router.get("/webinar",(req,res)=>{
    res.render("webinar");
})

router.get("/covid-tech",(req,res)=>{
    res.render("covid_tech");
})
module.exports = router;