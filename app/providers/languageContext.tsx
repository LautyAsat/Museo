"use client";

import { useCallback, useMemo, useState, createContext } from "react";

type Language = 'es' | 'en';

interface LanguageContextProps {
  language: Language;
  handleLanguage: (newLanguage: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | null>(null);

const LanguageContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>('es');

  const handleLanguage = useCallback((newLanguage: Language) => setLanguage(newLanguage), []);

  const contextValue = useMemo<LanguageContextProps>(
    () => ({ language, handleLanguage  }),
    [language, handleLanguage]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageContextProvider, LanguageContext };