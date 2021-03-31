const passport  = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;
const mongoose =require('mongoose');
const User = mongoose.model("githubusers");
require("dotenv").config();
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

passport.serializeUser((user,done) => {
    done(null,user);
})
passport.deserializeUser((obj,done) => {
    done(null,obj);
})

passport.use(
    new GitHubStrategy(
        {
            clientID: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET,
            callbackURL: ""
        },
        async (accessToken,refreshToken,profile,done) => {
            try{
                const newUser = new User({
                    githubId:profile._json.id
                });
                //! what to search 
                const currUser = await User.findOne({githubId: profile.id});
                if(currUser) {
                    const savedUser = await newUser.update();
                    return done(null,savedUser);
                }else{
                    //! what to put in DB
                    const savedUser = await newUser.save();
                    return done(null,savedUser);
                }
            }
            catch(err){
                console.log(err);
            }
        }
    )
)