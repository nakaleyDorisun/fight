import { Link } from "react-router-dom";
import { Button } from "../../ui/Button";

import s from "./Main.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../Context/Context";

const Main = () => {
  const themeContext = useContext(ThemeContext);
  const themeToggle = themeContext?.nightTheme ? s.wrp + " " + s.nigth : s.wrp;

  return (
    <div className={themeToggle}>
      <Link to={"/menu"}>
        <Button>Start Game </Button>
      </Link>
    </div>
  );
};

export default Main;
