import getRandomInRange from '../utils.js';
import mainEngine from '../mainEngine.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomInRange(0, operators.length - 1)];
};

const calculation = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Invalid operator - ${operator}`);
  }
};

const generateRound = () => {
  const num1 = getRandomInRange();
  const num2 = getRandomInRange();
  const operator = getRandomOperator();

  const question = `Question: ${num1} ${operator} ${num2}`;
  const answer = String(calculation(num1, num2, operator));

  return [question, answer];
};

export default () => {
  const questionPhrase = 'What is the result of the expression?';
  mainEngine(questionPhrase, generateRound);
};
