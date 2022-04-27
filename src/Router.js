const express = require('express')
const productsController = require('./app/controllers/ProductsController')
const homeController = require('./app/controllers/HomeController')
const searchController = require('./app/controllers/SearchController.js')
const multer = require('./app/middlesware/multer')

const router = express.Router()

//Home
router.get('/', homeController.index)

//Search
router.get('/products/search', searchController.index)

//Products
router.get('/products/create', productsController.create)
router.get('/products/:id', productsController.show)
router.get('/products/:id/edit', productsController.edit)

router.post('/products', multer.array('photos', 6), productsController.post)
router.put('/products', multer.array('photos', 6), productsController.put)
router.delete('/products', productsController.delete)

//Alias
router.get('/ads/create', function (req, res) {
	return res.redirect(`/products/create`)
})



module.exports = router
