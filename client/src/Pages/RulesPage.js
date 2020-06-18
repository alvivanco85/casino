import React from 'react';

import Jumbo from '../Components/Jumbotron/Jumbo'
import Content from '../Components/Content/Content'

function RulesPage(props) {

    return (
    <div className='rules'>
      <Jumbo title={props.title}/>
      <Content>
        <h1 className='a-text'>Game Rules.</h1> 

        <p className='a-text'>The goal of blackjack is to beat the dealer's hand without going over 21.
          Face cards (Kings, Queens and Jacks) are worth 10. Aces are worth 1 or 11, whichever makes a better hand.
          Each player starts with two cards, one of the dealer's cards is hidden until the end.
          To 'Hit' is to ask for another card. To 'Stand' is to hold your total and end your turn.
          If you go over 21 you bust, and the dealer wins regardless of the dealer's hand.
          If you are dealt 21 from the start (Ace & 10), you got a blackjack.
          Blackjack usually means you win 1.5 the amount of your bet. Depends on the casino.
          Dealer will hit until his/her cards total 17 or higher.
          Doubling is like a hit, only the bet is doubled and you only get one more card.
          Split can be done when you have two of the same card - the pair is split into two hands.
          Splitting also doubles the bet, because each new hand is worth the original bet.
          You can only double/split on the first move, or first move of a hand created by a split.
          You cannot play on two aces after they are split.
          You can double on a hand resulting from a split, tripling or quadrupling your bet.
        </p> 

        <h2 className='a-text'>Getting Started</h2>

        <p className='a-text'>Start by inputing a starting bid on the input field and click 'Place bid'. Look at the 
          total on your hand and decide if you want to 'Hit' or 'Stand'. Wait for results, rinse and repeat until you 
          lose all of the funds in your wallet. 
          If you wish to conntinue playing after a gameover, click on 'New Game'.
        </p>

      </Content>
  </div>
)

}

export default RulesPage;