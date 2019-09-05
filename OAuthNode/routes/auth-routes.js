const express = require('express');
const router = express.Router();

//auth login

router.get('/login', (req, res) => {
    res.render('loginScreen')
})

// user logout
router.get('/logout', (req, res) => {
    //TODO Handle Passport 
    res.send('logging out')
})

//auth google login

router.get('/provider', (req, res) => {
    //TODO Handle Passport 
    res.send('googleLogin')
})

module.exports = router;