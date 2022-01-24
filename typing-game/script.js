const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

const words = [
  'flash',
  'punish',
  'leak',
  'scan',
  'aunt',
  'sell',
  'clothe',
  'bleed',
  'shiver',
  'difficult',
  'wind',
  'process',
  'bat',
  'immure',
  'mark',
  'solid',
  'error',
  'zippy',
  'hour',
  'woman',
  'moult',
  'impossible',
  'squeamish',
  'oceanic',
  'attraction',
  'forgive',
  'please',
  'reduce',
  'fact',
  'latch',
  'army',
  'bust',
  'glove',
  'suffer',
  'coordinated',
  'mind',
  'save',
  'narrow',
  'suit',
  'chair',
  'longing',
  'befall',
  'recall',
  'dance',
  'report',
  'inform',
  'fantastic',
  'military',
  'bereave',
  'sad',
  'wrathful',
  'accept',
  'obedient',
  'sashay',
  'sticky',
  'snail',
  'scabble',
  'detail',
  'cause',
  'office',
  'educat',
  'gate',
  'material',
  'lyrical',
  'glamorous',
  'spade',
  'lock',
  'cross',
  'evanescent',
  'sag',
  'erratic',
  'zippy',
];

let randomWord;
let score = 0;
let time = 10;

const difficulty = localStorage.getItem('difficulty') || 'medium';

difficultySelect.value = difficulty;

text.focus();

const timeInterval = setInterval(updateTime, 1000);

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

function updateTime() {
  time--;
  timeEl.innerHTML = `${time}s`
  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

function gameOver() {
  endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Play Again</button>
  `;
  endgameEl.style.display = 'flex';

}

function incrementTime() {
  switch(difficulty) {
    case 'easy':
      time += 5;
    break;
    case 'medium':
      time += 3;
    break;
    case 'hard':
      time += 2;
    break;
    default:
      console.log('Error');
  }
  updateTime();
}

addWordToDOM();

text.addEventListener('input', e => {
  const insertedText = e.target.value;
  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();
    incrementTime();
    e.target.value = '';
  }
});

settingsBtn.addEventListener('click', () => settings.classList.toggle('hide'));

settingsForm.addEventListener('change', e => {
  difficulty = e.target.value;
  localStorage.setItem('difficulty', difficulty);
})