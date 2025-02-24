import readlineSync from 'readline-sync';

function checker(name, getExpression, getCorrectAnswer) {
  let counter = 0;
  do {
    const expression = getExpression();
    const correctAnswer = getCorrectAnswer(expression);

    console.log(`Question: ${expression} `);
    const answer = readlineSync.question('Your answer: ').toLowerCase();

    if (String(correctAnswer) !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      break;
    }

    counter += 1;
    console.log('Correct');
  } while (counter < 3);

  if (counter === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}

export default checker;
