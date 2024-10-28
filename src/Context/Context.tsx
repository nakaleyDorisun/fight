import { FC, ReactNode, createContext, useState } from "react";

interface IProps {
  children: ReactNode;
}

interface IThemeContext {
  nightTheme: boolean;
  setNightTheme: React.Dispatch<React.SetStateAction<boolean>>;

}

export const ThemeContext = createContext<IThemeContext | null>(null);

export const ThemeContextProvider: FC<IProps> = ({ children }) => {
  const [nightTheme, setNightTheme] = useState(false);


  return (
    <ThemeContext.Provider
      value={{ nightTheme, setNightTheme,  }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
