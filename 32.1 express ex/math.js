function mean(nums) {
    return nums.reduce((a, b) => (a + b)) / nums.length;
  }
  
  function median(nums) {
    nums.sort((a, b) => a - b);
  
    let middleIndex = Math.floor(nums.length / 2);
    let median;
  
    if (nums.length % 2 === 0) {
      median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
    } else {
      median = nums[middleIndex];
    }
    return median
  }
  
  function numCount(arr) {
    return arr.reduce(function (a, b) {
      a[b] = (a[b] || 0) + 1;
      return a;
    }, {});
  }
  
  function mode(nums) {
    let freqCounter = numCount(nums);
  
    let count = 0;
    let mostFrequent;
  
    for (let key in freqCounter) {
      if (freqCounter[key] > count) {
        mostFrequent = key;
        count = freqCounter[key];
      }
    }
  
    return +mostFrequent;
  }
  
  function convertAndValidateNumsArray(numsAsStrings) {
    let result = [];
  
    for (let i = 0; i < numsAsStrings.length; i++) {
      let valToNumber = Number(numsAsStrings[i]);
  
      if (Number.isNaN(valToNumber)) {
        return new Error(
          `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
        );
      }
  
      result.push(valToNumber);
    }
    return result;
  }
  
  module.exports = {
    mean,
    median,
    mode,
    convertAndValidateNumsArray,
    numCount
  }