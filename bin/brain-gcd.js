#!/usr/bin/env node
import readlineSync from 'readline-sync';
import engine from '../src/engine.js';
import getRandomInRange from '../src/utils.js';

function gcd(a, b) {
  if (a === 0) {
    return b;
  }
  return gcd(b % a, a);
}

engine(
  'Find the greatest common divisor of given numbers.',
  () => {
    const num1 = getRandomInRange() + getRandomInRange();
    const num2 = getRandomInRange() + getRandomInRange();

    const question = gcd(num1, num2);
    console.log(`Question: ${num1} ${num2} `);
    const answer = readlineSync.question('Your answer: ').toLowerCase();

    return [question, Number(answer)];
  },
);
