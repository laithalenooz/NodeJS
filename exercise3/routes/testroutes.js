const express = require('express');
const router = express.Router();

// @route     GET api/testroutes
// @desc      Get all users
// @access    Private
router.get('/', (req, res) => {
    res.send('Get all users');
});

// @route     POST api/testroutes
// @desc      Add new users
// @access    Private
router.post('/', (req, res) => {
    res.send('Add users');
});

// @route     PUT api/testroutes/:id
// @desc      Update users
// @access    Private
router.put('/:id', (req, res) => {
    res.send('Update user');
});

// @route     DELETE api/testroutes/:id
// @desc      Delete users
// @access    Private
router.delete('/:id', (req, res) => {
    res.send('Delete user');
});

module.exports = router;