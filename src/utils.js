export default function getRandomInRange(min = 0, max = 100) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

export function isNumPrime(num) {
  let isPrime = true;
  if (num <= 1) {
    isPrime = false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      isPrime = false;
    }
  }
  return isPrime;
}

export function generateProgression(start, step, length) {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
}
