const DIGITS_COUNT = 4

function* digitsGenerator(number) {
  let remaining = number
  let count = DIGITS_COUNT
  while (count--) {
    yield remaining % 10
    remaining = Math.floor(remaining / 10)
  }
}

const digitsToNumber = digits => {
  return digits.reverse().reduce((number, digit) => number * 10 + digit, 0)
}

const sorted = (digits, reverse = false) => {
  const direction = reverse ? -1 : 1
  const cmp = (a, b) => direction * (b - a)
  return digits.sort(cmp)
}

const kaprekarsConstantSteps = (number, count = 0) => {
  if (number === 6174) return count
  const digits = [...digitsGenerator(number)]
  const subtrahend = digitsToNumber(sorted(digits, true))
  const minuend = digitsToNumber(sorted(digits))
  const result = subtrahend - minuend
  return kaprekarsConstantSteps(result, count + 1)
}

module.exports = { kaprekarsConstantSteps }
