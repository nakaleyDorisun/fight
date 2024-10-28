import { IPlayer } from "./../data/characters";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { characters } from "../data/characters";

interface IPlayerState {
  player: IPlayer[];
}

const initialState: IPlayerState = {
  player: [],
};

const playerSlice = createSlice({
  name: "player",
  initialState,

  reducers: {
    chooseHero: (state, action: PayloadAction<number>) => {
      const choosenPlayer = characters[action.payload];
      if (choosenPlayer) {
        console.log(choosenPlayer, "choosenPlayer");
        state.player = [choosenPlayer];
      }
    },
    removeHero: (state) => {
      state.player = [];
    },
    decreaseHp: (state, action: PayloadAction<number>) => {
      state.player = state.player.map((player) => ({
        ...player,
        hp: player.hp - action.payload < 0 ? 0 : player.hp - action.payload,
      }));
    },
    restoreHP: (state) => {
      if (state.player[0].hp < 35 && state.player[0].gold >= 3) {
        state.player = state.player.map((p) => ({
          ...p,
          hp: p.hp + 10 <= p.str ? (p.hp += 10) : p.str,
          gold: p.gold - 3,
        }));
      }
    },
  },
});

export const { chooseHero, removeHero, decreaseHp, restoreHP } =
  playerSlice.actions;

export const reducerPlayer = playerSlice.reducer;
