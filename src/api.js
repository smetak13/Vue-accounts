const save = (body, key) => {
	localStorage.setItem(key, body)
}

const load = (key) => {
	return localStorage.getItem(key)
}

function getRandomNumber(start, range) {
	return Math.round((Math.random() * (range-start)) + start);
}

const api = {
	fetch(url, options) {
		return new Promise((res, rej) => {
			setTimeout(() => {
				/*if (getRandomNumber(1, 10) <=1) {
					rej(new Error('Náhodný error'));
				}*/
				const method = (!options || !options.method) ? 'get' : options.method.toLowerCase()
				if (method === 'get') {
					res(load(url))
				} else if (method === 'put') {
					res(save(options.body, url))
				}
			}, 1500)
		})
	}
}

export default api
