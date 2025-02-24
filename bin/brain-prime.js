#!/usr/bin/env node
import makeWelcome from '../src/cli.js';
import checker from '../src/index.js';
import getRandomInRange from '../src/utils.js';

const name = makeWelcome();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
checker(
  name,
  () => getRandomInRange(),
  (expression) => {
    const number = expression;
    if (number <= 1) return 'no';
    for (let i = 2; i <= Math.sqrt(number); i += 1) {
      if (number % i === 0) return 'no';
    }
    return 'yes';
  },
);
