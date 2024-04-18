function add(numbers: string): number {
	if (numbers == "")
		return 0;

	let numList = numbers.split(/,|\n/);
	let sum = 0;

	for(let n of numList){
		sum += parseInt(n);
	}

	return sum;
}

export { add };