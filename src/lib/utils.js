module.exports = {
	age(timestamp) {
		const today = new Date()
		const birthDate = new Date(timestamp)

		let age = today.getFullYear() - birthDate.getFullYear()
		const month = today.getMonth() - birthDate.getMonth()

		if (month < 0 || (month == 0 && today.getDate() <= birthDate.getDate())) {
			age = age - 1
		}

		return age
	},
	date(timestamp) {
		const date = new Date(timestamp)

		//yyyy -- Ano --
		const year = date.getUTCFullYear()

		//mm -- Mês --
		const month = `0${date.getUTCMonth() + 1}`.slice(-2)

		//dd -- Dia --
		const day = `0${date.getUTCDate()}`.slice(-2)

		const hour = date.getHours()

		const minutes = date.getMinutes()
		
		return {
			day,
			month,
			year,
			hour,
			minutes,
			iso: `${year}-${month}-${day}`,
			birthDay: `${day}/${month}`,
			format: `${day}/${month}/${year}`,
		} // iso
	},
	formatPrice(price) {
		return new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		}).format(price / 100)
	},
}
