const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
	return res.render(`layout`)
})

module.exports = router
