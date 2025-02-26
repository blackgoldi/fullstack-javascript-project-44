#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getRandomInRange from '../src/utils.js';
import engine from '../src/engine.js';

engine(
  'What is the result of the expression?',
  () => {
    const num1 = getRandomInRange();
    const num2 = getRandomInRange();
    const operation = ['+', '-', '*'][Math.floor(Math.random() * 3)];
    const expression = (`${num1} ${operation} ${num2}`);
    let question = 0;
    switch (operation) {
      case '+':
        question = Number(num1) + Number(num2);
        break;
      case '-':
        question = Number(num1) - Number(num2);
        break;
      case '*':
        question = Number(num1) * Number(num2);
        break;
      default:
        break;
    }

    console.log(`Question: ${expression} `);
    const answer = readlineSync.question('Your answer: ').toLowerCase();

    return [question, Number(answer)];
  },
);
