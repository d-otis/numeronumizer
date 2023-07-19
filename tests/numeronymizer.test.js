const numeronymizer = require('../src/numeronymizer')

describe("numeronymizer", () => {
  describe("when word is more than 3 letters", () => {
    it("it returns expected result", () => {
      const word = 'hello'
      const expectedResult = 'h3o'
      const result = numeronymizer(word)

      expect(result).toBe(expectedResult)
    })
  })
})