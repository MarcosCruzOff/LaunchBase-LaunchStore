const express = require('express')
const productsController = require('./app/controllers/products')

const router = express.Router()

router.get('/', function (req, res) {
	return res.render(`layout`)
})

router.get('/products/create', productsController.create)
router.get('/products/:id/edit', productsController.edit)

router.post('/products', productsController.post)
router.put('/products', productsController.put)
router.delete('/products', productsController.delete)

router.get('/ads/create', function (req, res) {
	return res.redirect(`/products/create`)
})

module.exports = router
