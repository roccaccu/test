function reverse(text) {
	let reversed = ''
	for (let i = text.length - 1; i >= 0; i--) {
		reversed += text[i]
	}
	return reversed
}
console.log(reverse('Hello!'))
console.log(reverse('Gruwl'))
