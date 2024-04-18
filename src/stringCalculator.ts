function add(numbers: string): number {
	if (numbers == "")
		return 0;

	let delim: string = '';
	if(numbers.startsWith("//")){
		delim = numbers.charAt(2);
		numbers = numbers.substring(4);
	}
	
	// added '\\' to RegExp to escape the delimiter and make it work for most regex reserved characters
	let re: RegExp = new RegExp(`,|\n${delim !== '' ? '|\\' + delim : ''}`,'g');
	let numList = numbers.split(re)

	let sum = 0;

	for(let n of numList){
		sum += parseInt(n);
	}

	return sum;
}

export { add };