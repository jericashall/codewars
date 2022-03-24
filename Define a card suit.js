// March 24th - 8 kyu
/*You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
        '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
        '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
        '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'*/

function defineSuit(card) {
    // split every character in the string intp an array and create an empty type variables
    let numTypes = card.split(''), type = '';
    //compares the 2nd item in the array to the various card types and sets type variable equal to it's match
    switch (numTypes[numTypes.length-1]) {
        case '♣':
          type = 'clubs'
          break
        case '♦':
          type = 'diamonds'
          break
        case '♥':
          type = 'hearts'
          break
        case '♠':
          type = 'spades'
          break
        default:
          type = 'not in deck'
          break
    }
    return type;
  }