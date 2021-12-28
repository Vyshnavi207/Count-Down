const express = require("express");
const router = express.Router();
const {jwtVerify} = require("../../middlewares/jwt");
const {getJSON,firstName,lastName} = require("../../helpers")
const Events = require("../../database/models/Events");
router.get("/",(req,res)=>{
    console.log(req.user);
		const contactIndex = [3, 4, 5];
		let contactDetails = [];
		const teamDetails = getJSON("sensors22.json");

		contactIndex.forEach(value => {
			contactDetails.push(teamDetails[value]);
		})

    res.render("index", {data:{contactDetails}});
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

router.get("/logout",(req,res)=>{
    req.flash("success","Logged Out");
    res.json({
        status:1,
        msg:"User Logged Out"
    });
});

router.get("/register",(req,res)=>{
    res.render("register");
})

router.get("/verify_email",(req,res)=>{
    res.render("email_verification");
})

router.get("/events",async (req, res) => {
    const events = await Events.find();
    // console.log(req.user);
    res.render("events",{events});
});

router.get("/team",(req, res)=>{
		const teamData = getJSON("sensors22.json")
		console.log(teamData);
    res.render("team", {data:teamData, helper:{firstName,lastName}});
})
module.exports = router;