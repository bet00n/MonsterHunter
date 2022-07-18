const monsterHealthBar = document.getElementById('monster-health');
const monsterHealthCounter = document.getElementById('monster-health-counter');
const playerHealthBar = document.getElementById('player-health');
const playerHealthCounter = document.getElementById('player-health-counter');
const manaBar = document.getElementById('player-mana');
const manaBarCounter = document.getElementById('mana-counter');

const attackBtn = document.getElementById('attack-btn');
const strongAttackBtn = document.getElementById('strong-attack-btn');
const healBtn = document.getElementById('heal-btn');
const logBtn = document.getElementById('log-btn');

function setCounters(){
  playerHealthCounter.innerHTML = playerHealthBar.value;
  monsterHealthCounter.innerHTML = monsterHealthBar.value;
  manaBarCounter.innerHTML = manaBar.value;
}
function adjustHealthBars(maxLife) {
  monsterHealthBar.max = maxLife;
  monsterHealthBar.value = maxLife;
  playerHealthBar.max = maxLife;
  playerHealthBar.value = maxLife;
}

function dealMonsterDamage(damage) {
  const dealtDamage = parseInt(Math.random() * damage);
  monsterHealthBar.value = +monsterHealthBar.value - dealtDamage;
  return dealtDamage;
}

function dealPlayerDamage(damage) {
  const dealtDamage = parseInt(Math.random() * damage) + 1;
  playerHealthBar.value = +playerHealthBar.value - dealtDamage;
  return dealtDamage;
}

function spendMana(manaValue){
  if (manaBar.value < manaValue){
    console.log('You don\'t have enough mana!');
    return 0;
  } else {
    manaBar.value -= manaValue;
  }
}

function resetGame(value) {
  playerHealthBar.value = value;
  monsterHealthBar.value = value;
  manaBar.value = 50;
  setCounters();
}



