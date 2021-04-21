const express = require('express');

const router = express.Router();

//@route POST api/users
//@desc       Register the user
//@access     Public
router.post('/', (req, res) => {
  res.json({ msg: 'register the user.' });
});

module.exports = router;
