// external import
const express = require('express')

// internal import
const { getUsers } = require('../controller/usersController')

const router = express.Router()

router.get('/', getUsers)

module.exports = router