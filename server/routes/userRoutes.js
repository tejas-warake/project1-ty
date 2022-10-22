const express = require("express");
const { createUser, logoutUser, loginUser } = require("../controllers/auth.js");

const router = express.Router();

router.get('/sign-up', (req, res) => {
    res.render('sign_up');
})
router.post('/sign-up', createUser);

router.get('/logout', logoutUser);

router.get('/login', (req, res) => {
    res.render('login');
})
router.post('/login', loginUser);

module.exports = router;