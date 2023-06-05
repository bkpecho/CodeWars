/* 

You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'

*/

function defineSuit(card) {
  let x = card[card.length - 1];
  if (x === '♣') {
    return 'clubs';
  } else if (x === '♦') {
    return 'diamonds';
  } else if (x === '♥') {
    return 'hearts';
  } else {
    return 'spades';
  }
}
