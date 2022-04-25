const express = require('express')
const productsController = require('./app/controllers/products')
const multer = require('./app/middlesware/multer')

const router = express.Router()

router.get('/', function (req, res) {
	return res.render(`layout`)
})

router.get('/products/create', productsController.create)
router.get('/products/:id', productsController.show)
router.get('/products/:id/edit', productsController.edit)

router.post('/products', multer.array('photos', 6), productsController.post)
router.put('/products', multer.array('photos', 6), productsController.put)
router.delete('/products', productsController.delete)

router.get('/ads/create', function (req, res) {
	return res.redirect(`/products/create`)
})

module.exports = router
