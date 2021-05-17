import { SUITS, VALUES } from "../misc/staticValues";
import { find, random, flatMap, map } from "lodash/fp";

type Point = {
	[x: string]: any;
	ace?: number;
	2?: number;
	3?: number;
	4?: number;
	5?: number;
	6?: number;
	7?: number;
	8?: number;
	9?: number;
	10?: number;
	jack?: number;
	queen?: number;
	king?: number;
};

type FullDeck = (
	arg1: string[],
	arg2: string[]
) => { suit: string; value: string }[];

type RandomValue = () => { suit: string; value: string };

type Status = (
	arg1: string,
	arg2: boolean,
	arg3: boolean,
	arg4: string
) => string;

const fullDeck: FullDeck = (suits, values) => {
	return flatMap((suit: string) =>
		map((value: string) => ({
			suit,
			value,
		}))(values)
	)(suits);
};

const len: number = fullDeck(SUITS, VALUES).length;

export const randomValue: RandomValue = () =>
	fullDeck(SUITS, VALUES)[random(0, len - 1)];

export const uniqueValue = (
	history: any[],
	len = 52
): void | { suit: string; value: string } => {
	const randomNumber = randomValue();
	// const exist = !history.every(
	// 	(historyElem) => !isEqual(historyElem, randomNumber)
	// );

	const exist = !!find(randomNumber)(history);
	console.log(exist);
	if (history.length === len) return alert("No more Cards");
	if (exist) return uniqueValue(history);
	else return randomNumber;
};

export const statusFn: Status = (
	initMessage,
	player1Exist,
	player2Exist,
	winner
) => {
	let status = initMessage;
	if (player1Exist && player2Exist) {
		status = winner[winner.length - 1];
	} else if (player1Exist || player2Exist) {
		status = "Now Playing";
	}
	return status;
};

export const winners = (
	point: Point,
	player1: string,
	player2: string
) => {
	let winner = "";
	const points = [point[player1], point[player2]];
	if (points[0] > points[1]) winner = "player1";
	if (points[0] < points[1]) winner = "player2";
	if (points[0] === points[1] && points[0] && points[1])
		winner = "draw";
	return winner;
};
