// Given given a string of parens and return true if the parens are balanced. If a string has no length it's technically balanced (Edge cases are the worst don't even). Please keep in mind time and space complexity.
// TIME: O(n)
// SPACE: O(1)
// For example
// const parens = "()(())()" // should be true
// const parens = "()(())(" // should be false

const balancedParens = (expression) => {
	let singles = [];

	expression.split('').forEach(single => {
		if (single === '(') {
			singles.push(single);
		}

		if (single === ')' && single !== singles.pop()) {
			return;
		}
	})

	return singles.length === 0;
}

module.exports = balancedParens;
