// StringCalculator.test.js
const { add } = require('./StringCalculator');

describe('String Calculator', () => {
  test('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });
  
  test('should return the number for a single number', () => {
    expect(add('1')).toBe(1);
  });
  
  test('should return the sum for two comma separated numbers', () => {
    expect(add('1,5')).toBe(6);
  });
  
  test('should return the sum for any amount of numbers', () => {
    expect(add('1,2,3,4')).toBe(10);
    expect(add('5,7,8,9,10')).toBe(39);
  });
});