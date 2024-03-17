/* 

Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway

*/

export function noBoringZeros(n: number): number {
	if (n === 0) return n;

	let str = n.toString();

	let len = str.length - 1;

	let counter = 0;

	for (let i = len; i >= 0; i--) {
		if (str[i] === "0") {
			counter++;
		} else {
			return Number(str.slice(0, len + 1 - counter));
		}
	}

	return n;
}
