#!/usr/bin/env node
import readlineSync from 'readline-sync';
import engine from '../src/engine.js';
import getRandomInRange from '../src/utils.js';

engine(
  'What number is missing in the progression?',
  () => {
    const array = [];
    array[0] = getRandomInRange(1, 10);
    const plus = getRandomInRange(1, 10);
    for (let i = 1; i < 10; i += 1) {
      array[i] = array[i - 1] + plus;
    }
    array[getRandomInRange(5, 10)] = '..';
    const toStr = array.join(' ');

    const mass = Array.from(toStr.split(' '));
    const index = mass.findIndex((item) => item === '..');
    const question = Number(mass[index - 1]) - Number(mass[index - 2]) + Number(mass[index - 1]);

    console.log(question);
    console.log(`Question: ${toStr.toString()} `);
    const answer = readlineSync.question('Your answer: ').toLowerCase();

    return [question, Number(answer)];
  },
);
