const express = require('express')
const router = express.Router()
const {createItems} = require('../controllers/CredController')
const { signup, login } = require('../controllers/authController')

router.post('/createItems', createItems)
router.post('/login', login)
router.post('/signup', signup)

module.exports =  router;