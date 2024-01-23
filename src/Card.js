import React from "react";

/** Card display.
 *
 * State:
 *
 *
 * Props:
 *
 *
 * Deck -> Card
 */

function Card({ card }){

  if(!card) return

  return(
    <div className="Card">
      <img src={card.image} alt={`${card.value} ${card.suit}`}/>
    </div>
  )

}

export default Card;