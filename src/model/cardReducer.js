import { uniqueValue } from "../utils/utils";

export const cardReducer = (state, { type, payload }) => {
  switch (type) {
    case "player1newCard":
      const newValue1 = uniqueValue(state.history.player1Hist);
      return {
        ...state,
        player1card: newValue1,
        history: {
          ...state.history,
          player1Hist: [...state.history.player1Hist, newValue1],
        },
      };
    case "player2newCard":
      const newValue2 = uniqueValue(state.history.player2Hist);
      return {
        ...state,
        player2card: newValue2,
        history: {
          ...state.history,
          player2Hist: [...state.history.player2Hist, newValue2],
        },
      };
    case "reset":
      return { history: { ...state.history }, message: payload };
    default:
      return state;
  }
};
