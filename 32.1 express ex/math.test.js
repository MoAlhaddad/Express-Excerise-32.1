const {
    mean,
    median,
    mode,
  } = require("./math");
  
  describe("median function", function () {
    test("finds the median of an even set", function () {
      expect(median([1, 4, 2, 3])).toEqual(2.5)
    })
    test("find median of an odd set", function () {
      expect(median([1, 1, 4, 3, 2])).toEqual(2)
    })
  })
  
  describe("mean function", function () {
    test("find the mean of an array of numbers", function () {
      expect(mean([1, 2, 3, 4, 5])).toEqual(3)
    })
  })
  
  describe("mode function", function () {
    test("find mode", function () {
      expect(mode([1, 3, 1, 1, 2, 2])).toEqual(1)
    })
  })