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

  let ascMultiplier = 1000
  let descMultiplier = 1000
  let ascParts = parts.sort()
  let descParts = [].concat(ascParts).reverse()

  const asc = ascParts.reduce((total, part) => {
    total += (part * ascMultiplier)
    ascMultiplier /= 10
    return total
  }, 0)

  let desc = descParts.reduce((total, part) => {
    total += (part * descMultiplier)
    descMultiplier /= 10
    return total
  }, 0)

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
