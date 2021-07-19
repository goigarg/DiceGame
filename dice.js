
function diceGame() {
    
  let player1 = Math.floor(Math.random() * 6) + 1;

  let player2 = Math.floor(Math.random() * 6) + 1;

  let dice1 = 'images/dice' + player1 + '.png';

  let dice2 = 'images/dice' + player2 + '.png';

  let img1 = document.querySelectorAll('img')[0];

  img1.setAttribute('src', dice1);


  let img2 = document.querySelectorAll('img')[1];

  img2.setAttribute('src', dice2);


  console.log('player1 = ' + player1 + ' player2 = ' + player2);

  let h1 = document.querySelector('h1');

  if (player1 > player2) {
    h1.innerText = 'Player 1 Wins';
  }
  else if(player1 < player2) {
    h1.innerText = 'Player 2 Wins';
  }
  else if (player1 == player2) {
    h1.innerText = 'Draw';
  }
  
}


