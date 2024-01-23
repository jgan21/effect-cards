import React, { useState, useEffect } from "react";

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
  const [deck, setDeck] = useState(null);
  const [currCard, setCurrCard] = useState([]);

  useEffect(function fetchDeckWhenMounted() {
    async function fetchDeck(){
      const response = await fetch(`${BASE_URL}/new/shuffle/`);
      const deckData = await response.json();
      setDeck(deckData);
    }
    fetchDeck()
  }, [ ])




  //remaining state??
}

export default Deck;