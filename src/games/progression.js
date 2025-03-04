import getRandomInRange from '../utils.js';
import mainEngine from '../mainEngine.js';

const generateRound = () => {
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
  const answer = Number(mass[index - 1]) - Number(mass[index - 2]) + Number(mass[index - 1]);

  const question = `Question: ${toStr.toString()} `;
  return [question, String(answer)];
};

export default () => {
  const questionPhrase = 'What number is missing in the progression?';
  mainEngine(questionPhrase, generateRound);
};
