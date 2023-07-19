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
   
  describe("when word is less than 3 letters", () => {
    it("it returns expected result", () => {
      const word = 'hi'
      const expectedResult = 'hi'
      const result = numeronymizer(word)

      expect(result).toBe(expectedResult)
    })
  })

  describe("when word is exactly 3 letters", () => {
    it("it returns expected result", () => {
      const word = 'bye'
      const expectedResult = 'bye'
      const result = numeronymizer(word)

      expect(result).toBe(expectedResult)
    })
  })

  describe("when word is empty", () => {
    it("it returns expected result", () => {
      const word = ''
      const expectedResult = ''
      const result = numeronymizer(word)

      expect(result).toBe(expectedResult)
    })
  })

  describe("when supplied a full sentence", () => {
    it("numeronymizes each word", () => {
      const sentence = 'hello world'
      const expectedResult = 'h3o w3d'
      const result = numeronymizer(sentence)

      expect(result).toBe(expectedResult)
    })
  })
})