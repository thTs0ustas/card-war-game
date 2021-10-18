import { uniqueValue } from "../utils/utils";

const reset = (state, payload) => ({
  history: { ...state.history },
  winner: [...state.winner],
  message: payload,
});

export const cardReducer = (state, { type, payload }) => {
  const newValue = uniqueValue(state.history.player1Hist);
  switch (type) {
    case "player1newCard":
      return {
        ...state,
        player1card: newValue,
        history: {
          ...state.history,
          player1Hist: [...state.history.player1Hist, newValue],
        },
      };
    case "player2newCard":
      return {
        ...state,
        player2card: newValue,
        history: {
          ...state.history,
          player2Hist: [...state.history.player2Hist, newValue],
        },
      };
    case "winner":
      return { ...state, winner: [...state.winner, payload] };
    case "reset":
      return reset(state, payload);
    default:
      return state;
  }
};
