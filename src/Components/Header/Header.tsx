import { useContext } from "react";
import { Button } from "../../ui/Button";

import s from "./Header.module.css";
import { ThemeContext } from "../../Context/Context";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeHero } from "../../store/playerSlice";
import { HeaderStatsBar } from "../HeaderStatsBar/HeaderStatsBar";

export const Header = () => {
  const themeContext = useContext(ThemeContext);
  const themeToggle = themeContext?.nightTheme ? s.wrp + " " + s.nigth : s.wrp;
  const store: any = useSelector((state) => state);
  console.log(store, "store");
  const dispatch = useDispatch();
  return (
    <div className={themeToggle}>
      <HeaderStatsBar />
      <Button onClick={() => themeContext?.setNightTheme((prev) => !prev)}>
        Day/Night
      </Button>
      <Link to={"/"}>
        <Button
          onClick={() => {
            dispatch(removeHero());
          }}
        >
          Back
        </Button>
      </Link>
    </div>
  );
};
