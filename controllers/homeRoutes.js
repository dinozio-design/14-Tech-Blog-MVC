const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        // get all posts and JOIN with user data
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['userName'],
                },
            ],
        });
        // serialize data so the template can read it
        const posts = postData.map((post) => post.get({ plain: true }));
        // pass serialized datata and session flad into template
        res.render('homepage', {
            posts,
            // logged_in: req.session.logged_in // commenting this out for now
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
