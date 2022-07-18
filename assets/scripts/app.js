const attackValue = 10;
const monsterAttackValue = 15;
let battleLog = []; // TODO

let chosenMaxLife = 100;

adjustHealthBars(chosenMaxLife);

function attackHandler (playersAttack) {
    const damage = dealMonsterDamage(playersAttack);
    const monsterDamage = dealPlayerDamage(monsterAttackValue);
    console.log('Damage dealt: ' + damage + '\nDamage received: ' + monsterDamage);

    if (monsterHealthBar.value <= 0 && playerHealthBar.value <= 0){
        console.log('DRAW');
        resetGame(chosenMaxLife);
    } else if (monsterHealthBar.value <= 0){
        console.log('Oi! Looks like you killed the twat!');
        resetGame(chosenMaxLife);
    } else if(playerHealthBar.value <= 0){
        console.log('You lost you cunt!');
        resetGame(chosenMaxLife);        
    }
    setCounters();

}
function executeAttack(){
    manaBar.value += 5;
    attackHandler(attackValue);
}

function executeStrongAttack(){
    if(spendMana(30) == 0){
        return;
    }
    attackHandler(attackValue * 3); 
}

function healPlayer(){
    if (spendMana(60) == 0){
        return;
    }
    playerHealthBar.value += 20;
    setCounters();
}

attackBtn.addEventListener('click', executeAttack)
strongAttackBtn.addEventListener('click', executeStrongAttack)
healBtn.addEventListener('click', healPlayer)