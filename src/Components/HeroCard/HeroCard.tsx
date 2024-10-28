import { FC, useContext, useState } from "react";
import s from "./HeroCard.module.css";
import { ThemeContext } from "../../Context/Context";
import { Button } from "../../ui/Button";
import { Link } from "react-router-dom";
import { chooseHero } from "../../store/playerSlice";
import { useAppDispatch } from "../../store/hook";

type IProps = {
  name: string;
  hp: number;
  attack: number;
  isSelected: boolean;
  id: number;
};
export const HeroCard: FC<IProps> = ({ name, hp, attack, isSelected, id }) => {
  const themeContext = useContext(ThemeContext);
  const [isOnHover, setIsOnHover] = useState(isSelected);

  const themeToggleCard = themeContext?.nightTheme
    ? s.card + " " + s.nigthBorder
    : s.card;

  const dispatch = useAppDispatch();

  return (
    <div
      className={themeToggleCard}
      onMouseEnter={() => {
        setIsOnHover(true);
      }}
      onMouseLeave={() => {
        setIsOnHover(false);
      }}
    >
      <h2>{name}</h2>
      <p>HP: {hp}</p>
      <p>Attack: {attack}</p>
      {isOnHover ? (
        <Link to={"/game"}>
          <Button
            onClick={() => {
              console.log(id, "id");
              dispatch(chooseHero(id));
            }}
          >
            Play
          </Button>
        </Link>
      ) : null}
    </div>
  );
};
