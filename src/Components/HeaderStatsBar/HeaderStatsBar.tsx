import { FC } from "react";
import { useAppSelector } from "../../store/hook";

import s from "./HeaderStatsBar.module.css";

interface IProps {}
export const HeaderStatsBar: FC<IProps> = () => {
  const store = useAppSelector((state) => state);

  return (
    <div className={s.statsbar}>
      <div className={s.stat}>
        {store.playerStore.player[0]
          ? store?.playerStore.player[0].name
          : "Fight Game"}
      </div>
      <div className={s.stat}>
        HP:
        {store.playerStore.player[0] ? store.playerStore.player[0].hp : null}
      </div>
      <div className={s.stat}>
        GOLD:
        {store.playerStore.player[0] ? store.playerStore.player[0].gold : 0}
      </div>
    </div>
  );
};
