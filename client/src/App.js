/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import Index from "./components/Index";
import "./App.css";
class Card {
  constructor() {
    this.deck = [];
    this.cardNumber = 1;
    this.cardSymbol = 0;
    this.card = 0;
    this.symb = 0;
    // Creating a deck of card
    for (this.card = 1; this.card <= 13; this.card++) {
      for (this.symb = 0; this.symb < 4; this.symb++) {
        var temp = this.card + "." + this.symb;
        this.deck.push(temp);
        console.log("card :" + this.card + ", symb :" + this.symb);
      }
    }
  }
  // Shuffle the deck up
  shuffle() {
    for (let i = 52 - 1; i > 0; i--) {
      let index = Math.floor(Math.random() * i);
      var temp = this.deck[index];
      this.deck[index] = this.deck[i];
      this.deck[i] = temp;
    }
  }

  show() {
    for (var i = 0; i < 52; i++) {
      console.log(this.deck[i]);
    }
  }
};
class App extends Component {

  render() {
    // Black Jack
    var deck = new Card();
    deck.shuffle();
    deck.show();
    return <Index />;
  }
}

export default App;
