const { kaprekarsConstantSteps } = require('./challenge')

const ARGUMENTS_RESULTS = [
  [6174, 0],
  [1234, 3],
  [4321, 3],
  [1476, 1],
  [378, 2],
  [9184, 2],
  [3524, 3],
  [5678, 3],
  [8532, 1]
]

for (const [number, count] of ARGUMENTS_RESULTS) {
  test(`Steps to Kaprekar's constant starting from ${number}`, () => {
    expect(kaprekarsConstantSteps(number)).toBe(count)
  })
}
