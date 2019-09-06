const compose = function (parts) {
  let number = 0
  for (const part of parts) {
    number = (number * 10) + part
  }
  return number
}

const decompose = function (number) {
  const parts = [ ]
  while (number > 0) {
    parts.push(number % 10)
    number = Math.floor(number / 10)
  }
  return parts
}

const kaprekarsConstantSteps = number => {
  let steps = 0
  while (number !== 6174) {
    let bigger = compose(decompose(number).sort((a, b) => b - a))
    if (bigger < 1000) bigger *= 10
    const smaller = compose(decompose(number).sort((a, b) => a - b))
    number = bigger - smaller
    steps++
  }
  return steps
}

module.exports = { kaprekarsConstantSteps }
