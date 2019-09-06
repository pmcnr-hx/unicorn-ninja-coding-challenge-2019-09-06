const getAscendingAndDescendingInts = (number) => {
  let parts = []

  while (number) {
    parts.push(number % 10);
    number = Math.floor(number / 10);
  }

  if (parts.length < 4) {
    parts.length = 4
    parts = Array.from(parts, p => p || 0)
  }

  let ascParts = parts.sort()
  let descParts = [].concat(ascParts).reverse()

  const asc = (ascParts[0] * 1000) + (ascParts[1] * 100) + (ascParts[2] * 10) + ascParts[3]
  const desc = (descParts[0] * 1000) + (descParts[1] * 100) + (descParts[2] * 10) + descParts[3]

  return { asc, desc }
}

const kaprekarsConstantSteps = number => {
  let totalIterations = 0;
  let ascDescObj;
  let result = number;

  while (result !== 6174) {
    totalIterations++
    ascDescObj = getAscendingAndDescendingInts(result)
    result = ascDescObj.desc - ascDescObj.asc
  }

  return totalIterations
}

module.exports = { kaprekarsConstantSteps }
