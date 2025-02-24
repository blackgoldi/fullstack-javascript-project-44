#!/usr/bin/env node
import makeWelcome from '../src/cli.js';
import getRandomInRange from '../src/utils.js';
import checker from '../src/index.js';

const name = makeWelcome();
console.log('What is the result of the expression?');
checker(
  name,
  () => {
    const num1 = getRandomInRange();
    const num2 = getRandomInRange();
    const operation = ['+', '-', '*'][Math.floor(Math.random() * 3)];
    return `${num1} ${operation} ${num2}`;
  },
  (expression) => {
    const [num1, operation, num2] = expression.split(' ');
    switch (operation) {
      case '+':
        return Number(num1) + Number(num2);
      case '-':
        return Number(num1) - Number(num2);
      case '*':
        return Number(num1) * Number(num2);
      default:
        return null;
    }
  },
);
