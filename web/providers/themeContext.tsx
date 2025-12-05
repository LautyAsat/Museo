"use client";

import { useCallback, useMemo, useState, createContext } from "react";

interface ThemeContextProps {
  isDark: boolean;
  handleThemeToggle: VoidFunction;
}

const ThemeContext = createContext<ThemeContextProps | null>(null);

const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  const handleThemeToggle = useCallback(() => setIsDark((prev) => !prev), []);

  const contextValue = useMemo<ThemeContextProps>(
    () => ({ isDark, handleThemeToggle }),
    [isDark, handleThemeToggle]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider, ThemeContext };