import getRandomInRange, { generateProgression } from '../utils.js';
import mainEngine from '../mainEngine.js';

const generateRound = () => {
  const array = generateProgression(getRandomInRange(1, 10), getRandomInRange(1, 10), 10);
  const index = getRandomInRange(5, 10);
  const answer = array[index];
  array[index] = '..';
  const question = `Question: ${array.join(' ').toString()} `;

  return [question, String(answer)];
};

export default () => {
  const questionPhrase = 'What number is missing in the progression?';
  mainEngine(questionPhrase, generateRound);
};
