import readlineSync from 'readline-sync';

// eslint-disable-next-line import/no-mutable-exports
let name = '';
function helloGuest() {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
}

function getRand() {
  return Math.round(Math.random() * 10);
}
export { name, helloGuest, getRand };
