const express = require('express')
const router = express.Router()
const {home} = require('../controllers/CredController')

router.get('/', home)

module.exports =  router;