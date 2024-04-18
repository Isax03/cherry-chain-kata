import { add } from "../src/stringCalculator";

describe('Step 1', () => {
	test('should return 0 if input is empty', () => {
		expect(add("")).toBe(0);
	}),
	test('should return 1 if input is 1', () => {
		expect(add("1")).toBe(1);
	}),
	test('should return 3 if input is 1,2', () => {
		expect(add("1,2")).toBe(3);
	}),
	test('should return 4 if input is 2,2', () => {
		expect(add("2,2")).toBe(4);
	})
});