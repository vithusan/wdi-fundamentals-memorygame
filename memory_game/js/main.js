var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		console.log('You found a match');
	}else{
		console.log('sorry, try again.');
	}
}
function flipCard(cardId){
	checkForMatch();
	cardsInPlay.push(cards[cardId]);
	console.log('User flipped ' + cards[cardId]);
}
flipCard(0);
flipCard(2);
