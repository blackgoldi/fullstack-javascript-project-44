import getRandomInRange from '../utils.js';
import mainEngine from '../mainEngine.js';

const generateRound = () => {
  const num = getRandomInRange();
  let answer = 'yes';
  if (num <= 1) {
    answer = 'no';
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      answer = 'no';
    }
  }
  const question = `Question: ${num} `;

  return [question, answer];
};

export default () => {
  const questionPhrase = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  mainEngine(questionPhrase, generateRound);
};
