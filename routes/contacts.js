const express = require('express');

const router = express.Router();

//@route GET  api/contacts
//@desc       Get user contacts
//@access     private
router.get('/', (req, res) => {
  res.json({ msg: 'get Get user contacts.' });
});

//@route POST api/contact
//@desc       add new user contacts.
//@access     private
router.post('/', (req, res) => {
  res.json({ msg: 'add user contacts.' });
});

//@route PUT api/contact/:id
//@desc       update user contacts.
//@access     private
router.put('/:id', (req, res) => {
  res.json({ msg: 'update user contacts.' });
});

//@route DELETE api/delete/:id
//@desc       delete user contacts.
//@access     private
router.delete('/:id', (req, res) => {
  res.json({ msg: 'delete user contacts.' });
});

module.exports = router;
