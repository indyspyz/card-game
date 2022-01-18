import React from "react";
import Card from "./Card";

const cards = [
  { name: "Red", color: "#FF0000" },
  { name: "Blue", color: "#00E5F0" },
  { name: "Green", color: "#00CF00" },
  { name: "Brown", color: "#C48C00" },
];

const CardList = () => {
  return (
    <>
    <h1>Color card game</h1>
      <div>
        {cards.map((item, index) => (
          <Card key={index} card={item} />
        ))}
      </div>
    </>
  );
};

export default CardList;
