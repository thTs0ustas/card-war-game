import React from "react";
import { useScore } from "./useScore";

export const Score = () => {
  const score = useScore();
  return (
    <table>
      <thead>
        <tr>
          <th>Player 1</th>
          <th>Player 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{score.Player1} times</td>
          <td>{score.Player2} times</td>
        </tr>
      </tbody>
    </table>
  );
};
