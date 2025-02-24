import readlineSync from 'readline-sync';

// eslint-disable-next-line import/no-mutable-exports
export default function makeWelcome() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
}
