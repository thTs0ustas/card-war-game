import * as React from "react";
import { CardComponent } from "../Cards";
import { statusFn } from "../../utils/utils";

const actionTypes = {
  playerOneCard: "player1newCard",
  playerTwoCard: "player2newCard",
  reset: "reset",
};

export const DeckComponent: React.FC<String> = ({ value }) => {
  const [state, dispatch] = value;
  const { player1card, player2card, winner, message } = state;

  const status = statusFn(message, player1card, player2card, winner);

  return (
    <div>
      <h2>{status}</h2>
      <div style={{ display: "inline-block" }}>
        <CardComponent
          suit={player1card?.suit}
          value={player1card?.value}
          disabled={player1card}
          player={1}
          state={state}
          onClick={() => dispatch({ type: actionTypes.playerOneCard })}
        />
      </div>
      <div style={{ display: "inline-block" }}>
        <CardComponent
          suit={player2card?.suit}
          value={player2card?.value}
          disabled={player2card}
          player={2}
          state={state}
          onClick={() => dispatch({ type: actionTypes.playerTwoCard })}
        />
      </div>
      <button
        disabled={!winner}
        style={{ display: "block" }}
        onClick={() =>
          dispatch({ type: actionTypes.reset, payload: "Turn the Card" })
        }
      >
        Reset
      </button>
    </div>
  );
};
