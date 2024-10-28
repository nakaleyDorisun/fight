import { useContext } from "react";
import { useAppDispatch } from "../../store/hook";
import { decreaseHp, restoreHP } from "../../store/playerSlice";

import s from "./Fight.module.css";
import { ThemeContext } from "../../Context/Context";

export const Fight = () => {
  const dispatch = useAppDispatch();

  const themeContext = useContext(ThemeContext);
  const themeToggle = themeContext?.nightTheme ? s.wrp + " " + s.nigth : s.wrp;

  return (
    <div className={themeToggle}>
      <button onClick={() => dispatch(decreaseHp(1))}>damage</button>
      <button onClick={() => dispatch(restoreHP())}>heal</button>
    </div>
  );
};
