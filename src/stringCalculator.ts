function add(s: string){
	if (s == "")
		return 0;

	let numbers = s.split(",");
	if(numbers.length == 1){
		return parseInt(numbers[0]);
	}
	else{
		return parseInt(numbers[0]) + parseInt(numbers[1]);
	}
}

export { add };