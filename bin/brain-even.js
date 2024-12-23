import readlineSync from 'readline-sync';
import name from '../src/cli.js';

const isEven = (num) => num % 2 == 0;
let counter = 0;
do {
	let rnd = Math.round(Math.random() * 10);
	console.log(`Question: ${rnd}`);
	let correctAnswer = isEven(rnd) ? 'yes' : 'no';
	let answer = readlineSync.question('Your answer: ').toLowerCase();
	if (correctAnswer == answer) {
		counter++;
		console.log('Correct');
	}
	else {
		console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
		console.log(`Let's try again, ${name}!`);
		break;
	}
} while (counter < 3);
if (counter == 3) console.log(`Congratulations, ${name}!`);
