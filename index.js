const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Функция для генерации случайного числа в заданном диапазоне
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Загадываем число
const secretNumber = generateRandomNumber(1, 100);
let guessCount = 0;

console.log('Добро пожаловать в игру "Загадай число"!');
console.log('Я загадал число в диапазоне от 1 до 100. Попробуйте отгадать его.');

// Функция для обработки попытки пользователя
function handleGuess(guess) {
  const parsedGuess = parseInt(guess);

  if (isNaN(parsedGuess)) {
    console.log('Пожалуйста, введите число.');
  } else {
    guessCount++;

    if (parsedGuess === secretNumber) {
      console.log(`Поздравляю! Вы угадали число ${secretNumber} за ${guessCount} попыток.`);
      rl.close();
    } else if (parsedGuess < secretNumber) {
      console.log('Загаданное число больше.');
    } else {
      console.log('Загаданное число меньше.');
    }
  }

  rl.prompt();
}

rl.prompt();

rl.on('line', handleGuess).on('close', () => {
  console.log('Спасибо за игру. До свидания!');
});