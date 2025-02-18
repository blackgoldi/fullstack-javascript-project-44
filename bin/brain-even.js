import readlineSync from 'readline-sync';
import name from '../src/cli.js';

const isEven = (num) => num % 2 === 0;
let counter = 0;
do {
  const rnd = Math.round(Math.random() * 10);
  console.log(`Question: ${rnd}`);
  const correctAnswer = isEven(rnd) ? 'yes' : 'no';
  const answer = readlineSync.question('Your answer: ').toLowerCase();
  if (correctAnswer === answer) {
    counter += 1;
    console.log('Correct');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
} while (counter < 3);
if (counter === 3) console.log(`Congratulations, ${name}!`);
