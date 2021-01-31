import React from "react";

import "./cardComponent.css";

export const CardComponent = ({
  state: { message, player2card, player1card },
  onClick,
  player,
  disabled,
  value,
  suit,
}) => {
  return (
    <div
      className="card"
      style={{
        width: 100,
        height: 150,
        backgroundImage: `url(pic/${value}_of_${suit}.png)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <button onClick={onClick} disabled={disabled}>
        {player === 1 && player1card
          ? null
          : player === 2 && player2card
          ? null
          : message}
      </button>
    </div>
  );
};
