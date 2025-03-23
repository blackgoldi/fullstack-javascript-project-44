import getRandomInRange, { isNumPrime } from '../utils.js';
import mainEngine from '../mainEngine.js';

const generateRound = () => {
  const num = getRandomInRange();
  const answer = isNumPrime(num) ? 'yes' : 'no';
  const question = `Question: ${num}`;
  return [question, answer];
};

export default () => {
  const questionPhrase = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  mainEngine(questionPhrase, generateRound);
};
