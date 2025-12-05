"use client";

import { useContext } from "react";
import { ThemeContext } from "../providers/themeContext";

export default function useTheme() {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}