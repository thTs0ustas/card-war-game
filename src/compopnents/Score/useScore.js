// @ts-ignore
import { useCard } from "../Deck/useCard";
import React from "react";
import { winners } from "../../utils/utils";
import { POINT_SYSTEM } from "../../misc/staticValues";

export const useScore = () => {
  const [state, dispatch] = useCard();
  const [score, setScore] = React.useState({ Player1: 0, Player2: 0 });

  const { player1card, player2card } = state;
  const winnerFn = winners(
    POINT_SYSTEM,
    player1card?.value,
    player2card?.value
  );

  React.useEffect(() => {
    if (player1card && player2card) {
      dispatch({
        type: "winner",
        payload: winnerFn,
      });
    }
  }, [dispatch, player1card, player2card, winnerFn]);

  React.useEffect(() => {
    state.winner[state.winner.length - 1] === "player1" &&
      setScore((n) => ({
        ...n,
        Player1: n.Player1 + 1,
      }));
    state.winner[state.winner.length - 1] === "player2" &&
      setScore((n) => ({
        ...n,
        Player2: n.Player2 + 1,
      }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.winner.length]);
  return score;
};
