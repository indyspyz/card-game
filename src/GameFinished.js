import React, { useContext } from "react";
import Card from "./Card";
import CardContext from "./contexts/CardContext";

const GameFinished = () => {
  const { history, setGameState } = useContext(CardContext);

  const result = history[history.length - 1];

  if (!history && history.length <= 0) {
    setGameState(1);
    return;
  } else {
    return (
      <>
        <h1>Result</h1>
        <div>
          {result.playerResult === "W" ? (
            <h2 style={{ color: "green" }}>Win</h2>
          ) : result.playerResult === "L" ? (
            <h2 style={{ color: "red" }}>Lose</h2>
          ) : (
            <h2 style={{ color: "gray" }}>Draw</h2>
          )}
        </div>

        <div style={{ display: "inline-block"}}>
          <h2>Player</h2>
          <Card card={result.playerCard} disabled={true} />
        </div>

        <div style={{ display: "inline-block" }}>
          <h2>System</h2>
          <Card card={result.systemCard} disabled={true} />
        </div>

        <br />
        <br />

        <button
          type="button"
          onClick={(e) => {
            setGameState(1);
          }}
        >
          Play again
        </button>

        <h2>History Result</h2>

        <div style={{ width: "15%", margin: "0 auto" }}>
          <table>
            <thead>
              <tr>
                <th style={{ width: "40%", margin: "0 auto" }}>Player</th>
                <th style={{ width: "40%", margin: "0 auto" }}>System</th>
                <th style={{ width: "40%", margin: "0 auto" }}>Result</th>
              </tr>
            </thead>
            <tbody>
              {history.length > 0 && 
                history
                .slice(0)
                .reverse()
                .map((item) => (
                  <tr>
                    <td>{item.playerCard.name}</td>
                    <td>{item.systemCard.name}</td>
                    <td>{item.playerResult}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
};

export default GameFinished;
