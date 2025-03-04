import getRandomInRange from '../utils.js';
import mainEngine from '../mainEngine.js';

function gcd(a, b) {
  if (a === 0) {
    return b;
  }
  return gcd(b % a, a);
}

const generateRound = () => {
  const num1 = getRandomInRange() + getRandomInRange();
  const num2 = getRandomInRange() + getRandomInRange();

  const question = `Question: ${num1} ${num2} ${gcd(num1, num2)}`;
  const answer = gcd(num1, num2);

  return [question, String(answer)];
};

export default () => {
  const questionPhrase = 'Find the greatest common divisor of given numbers.';
  mainEngine(questionPhrase, generateRound);
};
