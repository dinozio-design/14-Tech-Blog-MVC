const router = require('express').Router();
const {User, Post, Comment} = require('../models');
// need to add withAuth here after I write the auth.js in utils

router.get('/', async (req,res)=>{
    try{
// get all posts and JOIN with user data

// serialize data so the template can read it

// pass serialized datata and session flad into template
    } catch(err) {
        res.status(500).json(err);
    }
});
