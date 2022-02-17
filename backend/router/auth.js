const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require ('jsonwebtoken');
const authenticate = require('../middleware/authenticate');


const url = 'mongodb://localhost:27017/leadmanagementAgent';

const mongo = require('mongodb');
const assert = require('assert');


require('../db/conn');
const User = require('../model/userSchema');
const LeadStatus = require("../model/leadsSchema");

router.get('/', (req, res) => {
    res.send(`hello world from server router`)
})

//Registration route
router.post('/signup', async (req, res) => {

    const { name, email, password, cpassword, number} = req.body;

    if( !name || !email ||!password || !cpassword|| !number ){
        return res.status(422).json({error : "Please fill out all the fields correctly."});
    }


    try{

        //if we find a matching mail, user exists.
        const userExists = await User.findOne({email: email});

        if(userExists) {
            return res.status(422).json({error: "Already registered!"})
        } else if( password !== cpassword){
            return res.status(422).json({error: "Your passwords don't match."})
        } else {
            // if the user doesn't exist:
            //get data
            const user = new User({name, email,number , password, cpassword   });
            //hash data
            await user.save();
        }

        res.status(201).json({message: "User Registered Successfully!"});

    } catch(err) {
        console.log(err);
    }



});


//Login route
router.post('/signin', async (req, res) => {


    try{
        let token;
        const { email, password } = req.body;

        if( !email || !password ){
            return res.status(400).json({error : "Please fill out all the fields."});
        }

        // compare database email with user typed email
        const userLogin = await User.findOne({ email: email });
        //console.log(userLogin);
        if(userLogin){
            // compare  database password with user typed password
            const isMatch = await bcrypt.compare(password, userLogin.password);

            //console.log("Login Credentials matched. Allow login.")

            //Generate and store JWT token and store it in db
            token = await userLogin.generateAuthToken();
            //console.log(`The token for user ID: ${userLogin._id} is - ${token}`);
            console.log(`token: ${token}`);

            //converting tokens to cookies
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 7776000000 ), //token set to expire in 90 days
                httpOnly: true
            });

            if(!isMatch){
                //password error
                res.status(400).json({error: "Unable to Sign in, Invalid credentials."});
            } else {
                res.json({message: "Signed in successfully!"});
            }
        } else {
            res.status(400).json({error: "Unable to Sign in."});
        }



    } catch(err) {
        console.log(err);
    }
});


router.post('/leadstatus',  async (req,res) => {


    const { firstname, lastname, email, phonenumber, interestedcourse, collegename, status, date, time, note } = req.body;


    try{
            const agent = new LeadStatus ({ firstname, lastname, email, phonenumber, interestedcourse, collegename, status, date, time, note  });
            await agent.save();

            res.status(201).json({message: "Updated Successfully!"});

    } catch(err) {
        console.log(err);
    }




});


//update leads
router.put('/leads/postleadstatus/:id',  async (req,res) => {
    console.log("id:", req.params.id);


    await LeadStatus.findByIdAndUpdate({ _id: req.params.id }, {
        $set:{
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phonenumber: req.body.phonenumber,
            interestedcourse: req.body.interestedcourse,
            collegename: req.body.collegename,
            status: req.body.status,
            date: req.body.date,
            time: req.body.time,
            note: req.body.note
        }
    })
    .then((agent) => {
        console.log("updated");
        return res.status(200).json({
            // updated_agent: agent,
            message: "Updated successfully."
        })
        // .send(agent);
    })
    .catch((error) => {
        console.log("update failed");
        console.log(error);
        return res.status(500)
        // .send(error);
    })



});







//leads

router.get('/leads', (req, res) => {

    LeadStatus.find({}).then((agent) => {
        res.send(agent);
    }).catch((error) => {
        res.status(500).send(error);
    })

})



router.get('/leads/leadstatus/:id', (req, res) => {

    LeadStatus.findById(req.params.id).then((agent) => {
        res.send(agent);
        console.log("agent: ",agent);
    }).catch((error) => {
        res.status(500).send(error);
    })

})

router.get('/reports', (req, res) => {

    LeadStatus.find({}).then((agent) => {
        res.send(agent);
    }).catch((error) => {
        res.status(500).send(error);
    })

})


module.exports = router;

