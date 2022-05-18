//May 18th - 7kyu
/*Given an integer, if the length of it's digits is a perfect square, return a square block of sqroot(length) * sqroot(length). If not, simply return "Not a perfect square!".

Examples:

1212 returns:

12
12 

Note: 4 digits so 2 squared (2x2 perfect square). 2 digits on each line.

123123123 returns:

123
123
123

Note: 9 digits so 3 squared (3x3 perfect square). 3 digits on each line.*/

function squareIt(int) {
    int = String(int)
    let rowLength = Math.sqrt(int.length)
    if (!Number.isInteger(Math.sqrt(int.length))) return 'Not a perfect square!'
    let string = ''
    for(let i = 0; i < int.length; i+= rowLength) {
      string += int.slice(i, i+rowLength) + '\n'
    }
    return string.trim()
  }

/*tests*/


function doTest (input, expected) {
	const actual = squareIt(input);
	strictEqual(actual, expected, `for ${input}\n`);
}

describe("tests suite", function() {
	it("sample tests", function() {
		doTest(1, "1");
		doTest(222, "Not a perfect square!");
		doTest(234562342342, "Not a perfect square!");
		doTest(88989, "Not a perfect square!");
		doTest(112141568, "112\n141\n568");
	});
});