#!/usr/bin/env node
import { getRand, helloGuest } from '../src/cli.js';
import checker from '../src/index.js';

helloGuest();
console.log('What number is missing in the progression?');
checker(
  () => {
    const array = [];
    array[0] = getRand();
    const plus = getRand();
    for (let i = 1; i < 10; i += 1) {
      array[i] = array[i - 1] + plus;
    }
    array[getRand()] = '...';
    const toStr = array.join(' ');
    return toStr.toString();
  },
  (expression) => {
    const mass = Array.from(expression.split(' '));
    const index = mass.findIndex((item) => item === '...');
    return Number(mass[index - 1]) - Number(mass[index - 2]) + Number(mass[index - 1]);
  },
);
