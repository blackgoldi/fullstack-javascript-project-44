#!/usr/bin/env node
import makeWelcome from '../src/cli.js';
import checker from '../src/index.js';
import getRandomInRange from '../src/utils.js';

function gcd(a, b) {
  if (a === 0) {
    return b;
  }
  return gcd(b % a, a);
}
const name = makeWelcome();
console.log('Find the greatest common divisor of given numbers.');
checker(
  name,
  () => {
    const num1 = getRandomInRange() + getRandomInRange();
    const num2 = getRandomInRange() + getRandomInRange();
    return `${num1} ${num2}`;
  },
  (expression) => {
    const [num1, num2] = expression.split(' ');
    return gcd(num1, num2);
  },
);
