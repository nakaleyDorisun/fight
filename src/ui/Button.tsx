import { FC, ReactNode, useContext } from "react";
import { ThemeContext } from "../Context/Context";

import s from "./Button.module.css";

interface IProps {
  children: ReactNode;
  onClick?: any;
}

export const Button: FC<IProps> = ({ children, onClick }) => {
  const themeContext = useContext(ThemeContext);
  return (
    <button
      className={themeContext?.nightTheme ? s.nigth : ""}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
