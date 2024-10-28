export interface IPlayer {
  id: number;
  name: string;
  str: number;
  hp: number;
  attack: number;
  gold: number;
  isSelected: boolean;
}

export const characters: IPlayer[] = [
  {
    id: 0,
    name: "Big",
    str: 30,
    hp: 30,
    attack: 5,
    gold: 10,
    isSelected: false,
  },
  {
    id: 1,
    name: "Small",
    hp: 20,
    str: 20,
    attack: 6,
    gold: 0,
    isSelected: false,
  },
  {
    id: 2,
    name: "Huy",
    hp: 35,
    str: 35,
    attack: 3,
    gold: 0,
    isSelected: false,
  },
  {
    id: 3,
    name: "Pizda",
    hp: 15,
    str: 15,
    attack: 8,
    gold: 0,
    isSelected: false,
  },
  {
    id: 4,
    name: "Goga",
    hp: 25,
    str: 25,
    attack: 4,
    gold: 0,
    isSelected: false,
  },
  {
    id: 5,
    name: "Juuba",
    hp: 40,
    str: 40,
    attack: 2,
    gold: 0,
    isSelected: false,
  },
];
