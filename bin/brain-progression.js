#!/usr/bin/env node
import makeWelcome from '../src/cli.js';
import checker from '../src/index.js';
import getRandomInRange from '../src/utils.js';

const name = makeWelcome();
console.log('What number is missing in the progression?');
checker(
  name,
  () => {
    const array = [];
    array[0] = getRandomInRange();
    const plus = getRandomInRange();
    for (let i = 1; i < 10; i += 1) {
      array[i] = array[i - 1] + plus;
    }
    array[getRandomInRange(0, 10)] = '..';
    const toStr = array.join(' ');
    return toStr.toString();
  },
  (expression) => {
    const mass = Array.from(expression.split(' '));
    const index = mass.findIndex((item) => item === '..');
    return Number(mass[index - 1]) - Number(mass[index - 2]) + Number(mass[index - 1]);
  },
);
