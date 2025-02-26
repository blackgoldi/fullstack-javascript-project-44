#!/usr/bin/env node
import readlineSync from 'readline-sync';
import engine from '../src/engine.js';
import getRandomInRange from '../src/utils.js';

engine(
  'Answer "yes" if given number is prime. Otherwise answer "no".',
  () => {
    const num = getRandomInRange();
    let question = 'yes';
    if (num <= 1) {
      question = 'no';
    }
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
      if (num % i === 0) {
        question = 'no';
      }
    }
    console.log(question);
    console.log(`Question: ${num} `);
    const answer = readlineSync.question('Your answer: ').toLowerCase();

    return [question, answer];
  },
);
