// StringCalculator.js

function add(numbers) {
    if (numbers === '') {
      return 0;
    }
    
    let delimiter = ',';
    let numbersString = numbers;
    
    if (numbers.startsWith('//')) {
      const delimiterEndIndex = numbers.indexOf('\n');
      delimiter = numbers.substring(2, delimiterEndIndex);
      numbersString = numbers.substring(delimiterEndIndex + 1);
    }
    
    // Replace newlines with the delimiter, then split by the delimiter
    const nums = numbersString.replace(/\n/g, delimiter).split(delimiter);
    let sum = 0;
    const negativeNumbers = [];
    
    for (const num of nums) {
      const n = parseInt(num);
      if (n < 0) {
        negativeNumbers.push(n);
      }
      sum += n;
    }
    
    if (negativeNumbers.length > 0) {
      throw new Error(`negative numbers not allowed ${negativeNumbers.join(',')}`);
    }
    
    return sum;
  }
  
  module.exports = { add };