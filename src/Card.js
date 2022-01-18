import React, { useContext } from "react";
import CardContext from "./contexts/CardContext";
import "./Card.css";

const Card = ({ card, disabled }) => {
  const { playerSelectedCard, setPlayerSelectedCard } = useContext(CardContext);

  const handleClick = () => {
    if(!disabled){
      setPlayerSelectedCard(card);
    }
  };

  return (
    <>
      <div
        className={`Card-box ${
          playerSelectedCard?.name === card.name ? "Card-selected" : ""
        }`}
        style={{ backgroundColor: card.color }}
        onClick={handleClick}
      >
      </div>
    </>
  );
};

export default Card;
