#!/usr/bin/env node
import makeWelcome from '../src/cli.js';
import getRandomInRange from '../src/utils.js';
import checker from '../src/index.js';

const isEven = (num) => num % 2 === 0;
const name = makeWelcome();

console.log('Answer "yes" if the number is even, otherwise answer "no".');
checker(
  name,
  () => getRandomInRange(),
  (num) => (isEven(num) ? 'yes' : 'no'),
);
