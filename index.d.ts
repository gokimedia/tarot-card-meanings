export type YesNoAnswer = "yes" | "no" | "maybe";

export interface TarotCard {
  number: number;
  name: string;
  element: string;
  planet: string;
  upright: string;
  reversed: string;
  love: string;
  career: string;
  yesNo: YesNoAnswer;
  keywords: string[];
}

export interface YesNoResult {
  card: string;
  answer: YesNoAnswer;
  meaning: string;
}

export const majorArcana: TarotCard[];
export function getAllCards(): TarotCard[];
export function getMajorArcana(): TarotCard[];
export function getCard(name: string): TarotCard | null;
export function getRandomCard(): TarotCard;
export function getYesOrNo(): YesNoResult;
export function getYesCards(): TarotCard[];
export function getNoCards(): TarotCard[];
