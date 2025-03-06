// StringCalculator.js

function add(numbers) {
    if (numbers === '') {
      return 0;
    }
    
    const nums = numbers.split(',');
    let sum = 0;
    
    for (const num of nums) {
      sum += parseInt(num);
    }
    
    return sum;
  }
  
  module.exports = { add };