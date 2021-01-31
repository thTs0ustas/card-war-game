import { SUITS, VALUES } from "../misc/staticValues";
import { isEqual } from "lodash";

const fullDeck = (suits, values) =>
  suits.flatMap((suit) =>
    values.map((value) => ({
      suit,
      value,
    }))
  );

const len = fullDeck(SUITS, VALUES).length;

export const randomValue = () =>
  fullDeck(SUITS, VALUES)[Math.floor(Math.random() * len)];

export const uniqueValue = (history, len = 52) => {
  const randomNumber = randomValue();
  const exist = !history.every(
    (historyElem) => !isEqual(historyElem, randomNumber)
  );
  if (history.length === len) return alert("No more Cards");
  if (exist) {
    return uniqueValue(history);
  } else {
    return randomNumber;
  }
};

export const statusFn = (initMessage, player1Exist, player2Exist, winner) => {
  let status = initMessage;
  if (player1Exist && player2Exist) {
    status = winner[winner.length - 1];
  } else if (player1Exist || player2Exist) {
    status = "Now Playing";
  }
  return status;
};

export const winners = (point, player1, player2) => {
  let winner = "";
  const points = [point[player1], point[player2]];
  if (points[0] > points[1]) winner = "player1";
  if (points[0] < points[1]) winner = "player2";
  if (points[0] === points[1] && points[0] && points[1]) winner = "draw";
  return winner;
};
