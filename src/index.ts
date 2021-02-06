import { colorsTs } from "../deps/deps.ts";

export function foo(input: number): string {
	const number = Math.floor(Math.random() * 2);
	const result = `the result is ${number + input}`;
	console.log(colorsTs.bgBrightGreen(colorsTs.black(result)));
	return result;
}
