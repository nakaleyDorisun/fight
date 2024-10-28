import { Fight } from "../../Components/Fight/Fight";
import { GameStatsBar } from "../../Components/GameStatsBar/GameStatsBar";

type Props = {};
export const Game = ({}: Props) => {
  return (
    <div>
      <Fight></Fight>
      <GameStatsBar></GameStatsBar>
    </div>
  );
};
