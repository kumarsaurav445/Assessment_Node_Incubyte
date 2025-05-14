const { add } = require('../calculator');

test('it should return 0 for  empty string', () => {
  expect(add('')).toBe(0);
});

test('it should return number for a single number string', () => {
    expect(add('5')).toBe(5);
});

test('returns sum of two numbers', () => {
    expect(add('1,2')).toBe(3);
});