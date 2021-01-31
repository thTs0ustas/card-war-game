import * as React from "react";
import { cardReducer } from "../../model/cardReducer";
import { winners } from "../../utils/utils";
import { POINT_SYSTEM } from "../../misc/staticValues";

export const useCard = ({
  reducer = cardReducer,
  message = "Turn the Card",
  ...args
} = {}) => {
  const [state, dispatch] = React.useReducer(
    reducer,
    { message, ...args },
    (val) => val
  );
  const winnerFn = React.useMemo(
    () =>
      winners(POINT_SYSTEM, state.player1card?.value, state.player2card?.value),
    [state.player1card?.value, state.player2card?.value]
  );

  React.useEffect(() => {
    if (state.player1card && state.player2card) {
      dispatch({
        type: "winner",
        payload: winnerFn,
      });
    }
  }, [dispatch, state.player1card, state.player2card, winnerFn]);

  return [state, dispatch];
};
