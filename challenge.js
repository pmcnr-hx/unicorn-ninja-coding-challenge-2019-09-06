const kaprekarsConstantSteps = number => countSteps(number)

const countSteps = (number, steps = 0) => {
  if (number === 6174) return steps

  const sortedNumbers = ('0000' + number).slice(-4).split('').sort()
  const reversedNumbers = [...sortedNumbers].reverse()
  const result = reversedNumbers.join('') - sortedNumbers.join('')

  return countSteps(result, ++steps)
}

module.exports = { kaprekarsConstantSteps }
