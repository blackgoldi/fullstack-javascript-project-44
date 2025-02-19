import { getRand } from '../src/cli.js';
import checker from '../src/index.js';

console.log('What is the result of the expression?');
checker(
  () => {
    const num1 = getRand();
    const num2 = getRand();
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
