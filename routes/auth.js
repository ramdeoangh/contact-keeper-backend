const express = require('express');

const router = express.Router();

//@route GET api/auth
//@desc       Get the logged in user
//@access     private
router.post('/', (req, res) => {
  res.json({ msg: 'get logged in user.' });
});

//@route POST api/auth
//@desc       Auth
//@access     private
router.post('/', (req, res) => {
  res.json({ msg: 'post  logged in user.' });
});

module.exports = router;
