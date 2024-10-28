import { useContext, useState } from "react";
import { HeroCard } from "../../Components/HeroCard/HeroCard";
import { characters } from "../../data/characters";
import { ThemeContext } from "../../Context/Context";

import s from "./Menu.module.css";

export const Menu = () => {
  const themeContext = useContext(ThemeContext);
  const themeToggle = themeContext?.nightTheme ? s.wrp + " " + s.nigth : s.wrp;

  return (
    <div className={themeToggle}>
      {characters.map((char) => (
        <HeroCard key={char.id} {...char}></HeroCard>
      ))}
    </div>
  );
};
