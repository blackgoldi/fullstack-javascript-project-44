/* eslint-disable no-console */
import readlineSync from 'readline-sync';

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}`);

function getRand() {
  return Math.round(Math.random() * 10);
}
export { name, getRand };
