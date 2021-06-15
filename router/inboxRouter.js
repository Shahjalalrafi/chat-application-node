// external import
const express = require('express')

// internal import
const { getInbox } = require('../controller/inboxController')

const router = express.Router()

router.get('/', getInbox)

module.exports = router