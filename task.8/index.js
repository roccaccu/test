function removeDuplicates(text) {
	let newText = ''
	for (let i = 0; i < text.length; i++) {
		let duplicate
		for (let j = text.length - 1; j > i; j--) {
			if (text[j] === text[i]) {
				text = text.slice(0, j) + text.slice(j + 1)
				j--
			}
		}
		newText = newText + text[i]
	}
	return newText
}
console.log(removeDuplicates('Hello!'))
console.log(removeDuplicates('SSlliiccee'))
console.log(removeDuplicates('Helo!Helo!'))
