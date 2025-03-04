import readlineSync from 'readline-sync';
import makeWelcome from './cli.js';

const roundsCount = 3;

const mainEngine = (rules, generateRound) => {
  const name = makeWelcome();
  console.log(rules);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = generateRound();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    if (userAnswer === answer) {
      console.log('Correct');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default mainEngine;
