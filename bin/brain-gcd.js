import { getRand } from '../src/cli.js';
import checker from '../src/index.js';

function gcd(a, b) {
  if (a === 0) {
    return b;
  }
  return gcd(b % a, a);
}

console.log('Find the greatest common divisor of given numbers.');
checker(
  () => {
    const num1 = getRand() * 10 + getRand();
    const num2 = getRand() * 10 + getRand();
    return `${num1} ${num2}`;
  },
  (expression) => {
    const [num1, num2] = expression.split(' ');
    return gcd(num1, num2);
  },
);
