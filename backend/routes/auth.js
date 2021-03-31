const express = require("express");
const passport = require("passport");
const router= express.Router();

router.get("/auth/github",passport.authenticate("github",{scope:["profile"]}),(req,res)=>{
    console.log("wasnt ment to run");
})
router.get("/auth/github/dashboard",passport.authenticate("github", { failureRedirect: "http://localhost:3000/" }),(req,res) => {
    console.log("successful callback");
    res.redirect("/success");
})
module.exports = router;