import getRandomInRange from '../utils.js';
import mainEngine from '../mainEngine.js';

function isEven(num) {
  return num % 2 === 0;
}

const generateRound = () => {
  const question = getRandomInRange();
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  const questionPhrase = 'Answer "yes" if the number is even, otherwise answer "no".';
  mainEngine(questionPhrase, generateRound);
};
