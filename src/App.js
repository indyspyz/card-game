import "./App.css";
import GamePlay from "./GamePlay";
import { useState } from "react";
import GameFinished from "./GameFinished";
import CardContext from "./contexts/CardContext";

const CARD_LIST = [
  { name: "Red", color: "#FF0000" },
  { name: "Blue", color: "#00E5F0" },
  { name: "Green", color: "#00CF00" },
  { name: "Brown", color: "#C48C00" },
];

function App() {
  const [cards, setCards] = useState(CARD_LIST);
  const [gameState, setGameState] = useState(1);
  const [playerSelectedCard, setPlayerSelectedCard] = useState(null);
  const [history, setHistory] = useState([]);

  return (
    <CardContext.Provider
      value={{
        cards,
        setCards,
        gameState,
        setGameState,
        playerSelectedCard,
        setPlayerSelectedCard,
        history,
        setHistory,
      }}
    >
      <div className="App">
        {gameState === 1 ? <GamePlay /> : <GameFinished />}
      </div>
    </CardContext.Provider>
  );
}

export default App;
