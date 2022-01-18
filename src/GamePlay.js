import React, { useContext, useEffect } from "react";
import CardList from "./CardList";
import CardContext from "./contexts/CardContext";
import "./GamePlay.css";

const VERSUS_MAP = new Map([
  ["Green,Red", "Red"],
  ["Brown,Green", "Green"],
  ["Blue,Brown", "Brown"],
  ["Blue,Red", "Blue"],
]);
function getResultByCardName(playerCard, systemCard) {
  const key = [playerCard, systemCard].sort().join();
  const result = VERSUS_MAP.get(key);
  return !result ? "D" : result === playerCard ? "W" : "L";
}

const GamePlay = () => {
  const {
    cards,
    playerSelectedCard,
    history,
    setHistory,
    gameState,
    setGameState,
    setPlayerSelectedCard,
  } = useContext(CardContext);

  const playGame = () => {
    const rnd = Math.floor(Math.random()*4);
    const systemRndCard = cards[rnd];
    const result = getResultByCardName(
      playerSelectedCard.name,
      systemRndCard.name
    );

    const newHistory = {
      playerCard: playerSelectedCard,
      systemCard: systemRndCard,
      playerResult: result,
    };
    setHistory([...history, newHistory]);
    setPlayerSelectedCard(null);
  };

  const handleClick = () => {
    playGame();
    setGameState(2);
  };

  return (
    <>
      <CardList />
      <br />
      <button
        disabled={!playerSelectedCard}
        type="button"
        onClick={handleClick}
      >
        Play
      </button>
    </>
  );
};

export default GamePlay;
