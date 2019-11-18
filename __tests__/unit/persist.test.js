const { saveState, loadState, destroyState } = require('../../src/utils/persist')

describe('Persist data', () => {

	beforeEach(() => {
		localStorage.removeItem('test')
	})

	it('should save strings', () => {
		const text = 'aloalo'
		saveState('test', text)

		const result = loadState('test')
		expect(result).toBe(text)

	})

	it('should destroy data', () => {
		const text = 'alolo'
		saveState('test', text)
		
		let result = loadState('test')
		expect(result).toBe(text)
		
		destroyState('test')
		result = loadState('test', null)
		expect(result).toBeNull()
	})

	it('should return null on non-existent states', () => {
		let result = loadState('test')
		expect(result).toBeNull()
	})

	it('should save objects', () => {
		let test = {
			test1: 'banana',
			test2: 2048,
			test3: {
				test: true
			}
		}

		saveState('test', test)

		const result = loadState('test')
		expect(result).toEqual(test)
	})
})