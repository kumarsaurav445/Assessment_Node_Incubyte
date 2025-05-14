const { add } = require('../calculator');

// Test: Empty string returns 0
test('it should return 0 for empty string', () => {
  expect(add('')).toBe(0);
});

// Test: Single number returns that number
test('it should return number for a single number string', () => {
  expect(add('5')).toBe(5);
});

// Test: Single number with a negative sign, expect error
test('it should throw error for negative numbers', () => {
  expect(() => add('1,-2')).toThrowError('negative numbers not allowed -2');
});

// Test: Newline and comma-separated numbers
test('it should return sum of numbers separated by newline or comma', () => {
  expect(add('1\n2,3')).toBe(6);
});

// Test: Custom delimiter
test('it should return sum when using custom delimiter', () => {
  expect(add('//;\n1;2')).toBe(3);
});

// Test: Sum of two numbers
test('it should return sum of two numbers', () => {
  expect(add('1,2')).toBe(3);
});

// Test: Ignore numbers greater than 1000
test('it should ignore numbers greater than 1000', () => {
  expect(add('2,1001')).toBe(2);
});
