class Car {
	constructor(engine, seats, doors, engineVolume, year, key) {
		this.engine = engine
		this.seats = seats
		this.doors = doors
		this.engineVolume = engineVolume
		this.year = year
		this.#key = key
	}
	#key
	signal() {
		console.log('Beep!!??/..')
	}
	#start() {
		console.log('Car is starting...')
	}
	get(key) {
		if (key === this.#key) {
			this.#start()
		}
	}
	stop() {
		console.log('Car stoped.')
	}
	getAlInfoForCar() {
		console.log(
			`Эта машина ${this.year} года. У нее ${this.seats} мест(а), ${this.doors} двери(ей), двигатель ${this.engine} с объемом в ${this.engineVolume}.`
		)
	}
}

class Mercedes extends Car {
	constructor(engine, seats, doors, engineVolume, year, key) {
		super(engine, seats, doors, engineVolume, year, key)
		this.brand = 'Mercedes'
	}
	getAlInfoForCar() {
		console.log(
			`Эта машина марки ${this.brand}, ${this.year} года. У нее ${this.seats} мест(а), ${this.doors} двери(ей), двигатель ${this.engine} с объемом в ${this.engineVolume}.`
		)
	}
}

class BMW extends Car {
	constructor(engine, seats, doors, engineVolume, year, key) {
		super(engine, seats, doors, engineVolume, year, key)
		this.brand = 'BMW'
	}
	getAlInfoForCar() {
		console.log(
			`Эта машина марки ${this.brand}, ${this.year} года. У нее ${this.seats} мест(а), ${this.doors} двери(ей), двигатель ${this.engine} с объемом в ${this.engineVolume}.`
		)
	}
}

class AUDI extends Car {
	constructor(engine, seats, doors, engineVolume, year, key) {
		super(engine, seats, doors, engineVolume, year, key)
		this.brand = 'AUDI'
	}
	getAlInfoForCar() {
		console.log(
			`Эта машина марки ${this.brand}, ${this.year} года. У нее ${this.seats} мест(а), ${this.doors} двери(ей), двигатель ${this.engine} с объемом в ${this.engineVolume}.`
		)
	}
}

let car1 = new Car('123', 2, 2, '30 oz', 2009, 'boomboom')
car1.getAlInfoForCar()
car1.get('boomboom')
let car2 = new Mercedes('engine1', 4, 4, '35 oz', 2014, 'boomshook')
car2.getAlInfoForCar()
car2.get('boomshook')
let car3 = new BMW('engine2', 2, 2, '34 oz', 2016, 'shookboom')
car3.getAlInfoForCar()
car3.get('shookboom')
let car4 = new AUDI('engine3', 4, 4, '40 oz', 2020, 'shookshook')
car4.getAlInfoForCar()
car4.get('shookshook')
