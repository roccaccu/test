function sumFinder(numbers, sum) {
	let count = 0
	let numbersOfSum = []
	for (let i = 0; i < numbers.length; i++) {
		count += numbers[i]
		numbersOfSum.push(numbers[i])
	}
	if (count === sum) {
		return numbersOfSum
	} else {
		count = 0
		numbersOfSum = []
		for (let i = 0; i < numbers.length; i++) {
			let newArray = numbers.slice(0, i).push(numbers.slice(i + 1))
			sumFinder(newArray, sum)
		}
		return false
	}
}

console.log(sumFinder([1, 2, 3], 5))
