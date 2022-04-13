const express = require('express')
const nunjucks = require('nunjucks')
const router = require('./Router')
const methodOverride = require('method-override')

const server = express()

server.use(express.static('public'))
server.use(express.urlencoded({ extended: true }))
server.use(methodOverride('_method'))
server.use(router)

server.set('view engine', 'njk')
nunjucks.configure('src/app/views', {
	express: server,
	autoescape: false,
	noCache: true,
})

server.listen(4000, function () {
	console.log('server On!')
})
