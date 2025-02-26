#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getRandomInRange from '../src/utils.js';
import engine from '../src/engine.js';

const isEven = (num) => num % 2 === 0;

engine(
  'Answer "yes" if the number is even, otherwise answer "no".',
  () => {
    const num = getRandomInRange();
    const question = isEven(num) ? 'yes' : 'no';
    console.log(`Question: ${num} `);
    const answer = readlineSync.question('Your answer: ').toLowerCase();

    return [question, answer];
  },
);
