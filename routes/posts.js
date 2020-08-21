// This route exists solely to test authentication middleware

const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
    res.json({ 
        posts: { 
            title: 'Test Post', 
            post: 'This is just a test of the auth middleware.'
        }
    });
});

module.exports = router;
