// StringCalculator.js

/**
 * Extracts delimiter and number string from the input
 * @param {string} numbers - Input string
 * @returns {Object} - Object containing delimiter and numbersString
 */
function extractDelimiterInfo(numbers) {
    let delimiter = ',';
    let numbersString = numbers;
    
    if (numbers.startsWith('//')) {
      const delimiterEndIndex = numbers.indexOf('\n');
      delimiter = numbers.substring(2, delimiterEndIndex);
      numbersString = numbers.substring(delimiterEndIndex + 1);
    }
    
    return { delimiter, numbersString };
  }
  
  /**
   * Validates for negative numbers and throws if found
   * @param {Array} numbers - Array of parsed numbers
   */
  function validateNegativeNumbers(numbers) {
    const negativeNumbers = numbers.filter(n => n < 0);
    
    if (negativeNumbers.length > 0) {
      throw new Error(`negative numbers not allowed ${negativeNumbers.join(',')}`);
    }
  }
  
  /**
   * Adds numbers from a comma-separated string
   * @param {string} numbers - Input string with numbers
   * @returns {number} - Sum of numbers
   */
  function add(numbers) {
    if (numbers === '') {
      return 0;
    }
    
    const { delimiter, numbersString } = extractDelimiterInfo(numbers);
    
    // Replace newlines with the delimiter, then split by the delimiter
    const numStrings = numbersString.replace(/\n/g, delimiter).split(delimiter);
    const nums = numStrings.map(n => parseInt(n));
    
    validateNegativeNumbers(nums);
    
    return nums.reduce((sum, num) => sum + num, 0);
  }
  
  module.exports = { add };