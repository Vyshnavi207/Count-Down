const express = require("express");
const router = express.Router();
const {jwtVerify} = require("../../middlewares/jwt");
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

router.get("/faqs",(req,res)=>{
    res.render("faqs");
})

router.get("/login",(req,res)=>{
    res.render("login");
})

router.get("/register",(req,res)=>{
    res.render("register");
})

router.get("/verify_email",(req,res)=>{
    res.render("email_verification");
})
module.exports = router;