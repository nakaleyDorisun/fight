import { useContext, useState } from "react";
import { characters } from "../../../data/characters";

import s from "./HeroCard.module.css";
import { ThemeContext } from "../../../Context/Context";
import { Button } from "../../../ui/Button";

export const HeroCard = () => {
  const [isSelected, setIsSelected] = useState(false);

  const themeContext = useContext(ThemeContext);
  const themeToggle = themeContext?.nightTheme ? s.wrp + " " + s.nigth : s.wrp;
  const themeToggleCard = themeContext?.nightTheme
    ? s.card + " " + s.nigthBorder
    : s.card;

  return (
    <div className={themeToggle}>
      {characters.map((char) => (
        <div
          key={char.id}
          className={themeToggleCard}
          onMouseEnter={() => {
            setIsSelected(true);
          }}
          onMouseLeave={() => {
            setIsSelected(false);
          }}
        >
          <h2>{char.name}</h2>
          <p>HP: {char.hp}</p>
          <p>Attack: {char.attack}</p>
          {isSelected ? <Button>Play</Button> : null}
        </div>
      ))}
    </div>
  );
};
