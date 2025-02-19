import { getRand } from '../src/cli.js';
import checker from '../src/index.js';

const isEven = (num) => num % 2 === 0;

console.log('Answer "yes" if the number is even, otherwise answer "no".');
checker(
  () => getRand(),
  (num) => (isEven(num) ? 'yes' : 'no'),
);
