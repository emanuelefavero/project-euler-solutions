// * 1. Multiples of 3 and 5

// If we list all the natural numbers below $10$ that are multiples of 3 or 5, we get 3, 5, 6 and 9 The sum of these multiples is 23
// Find the sum of all the multiples of 3 or 5 below 1000

/**
 * @returns {number}
 */

// O(n) time | O(1) space
function main() {
  let n = 1000
  let sum = 0

  for (let i = 0; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i
  }

  return sum
}

// --- Tests ---

console.log(main()) // 233168
