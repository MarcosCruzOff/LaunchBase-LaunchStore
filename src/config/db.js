const { Pool } = require('pg')

module.exports = new Pool({
	user: '123',
	password: '123',
	host: 'localhost',
	port: 5432,
	database: 'launchstore',
})
