#!/usr/bin/env node
import { getRand, helloGuest } from '../src/cli.js';
import checker from '../src/index.js';

helloGuest();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
checker(
  () => getRand(),
  (expression) => {
    const number = expression;
    if (number <= 1) return 'no';
    for (let i = 2; i <= Math.sqrt(number); i += 1) {
      if (number % i === 0) return 'no';
    }
    return 'yes';
  },
);
