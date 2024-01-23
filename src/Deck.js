import React, { useState, useEffect } from "react";
import Card from "./Card";

/** Deck of cards.
 *
 * State:
 * deck - which deck are we using? USE [] dependency, only mount once.
 * card - [card data]. USE dependency method.
 *
 * Props:
 *
 *
 * App -> Deck
 */

const BASE_URL = "https://deckofcardsapi.com/api/deck";

function Deck(){

  //FIXME: NEED TO DO THE THING WHERE WE RUN OUT OF CARDS
  const [deck, setDeck] = useState(null);
  const [currCard, setCurrCard] = useState(null);

  console.log("DECK >> Deck:", deck, "Card:",currCard);

  useEffect(function fetchDeckWhenMounted() {
    async function fetchDeck(){
      const response = await fetch(`${BASE_URL}/new/shuffle/`);
      const deckData = await response.json();
      setDeck(deckData);
    }
    fetchDeck()
  }, [ ]);

  //if(!currCard) return <i>loooooooooooooooooading</i>

  async function handleFetchCard(evt){
    const response = await fetch(`${BASE_URL}/${deck.deck_id}/draw?count=1`);
    const { cards } = await response.json();
    setCurrCard(cards[0]);
  }

  return (
    <div className="Deck">
      <button onClick={handleFetchCard}>CARD ME!</button>
      <Card card={currCard}/>
    </div>
  )
}

export default Deck;