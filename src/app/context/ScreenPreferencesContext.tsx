"use client";

import { createContext, useContext } from "react";
import { useScreenPreferences } from "../hooks/useScreenPreferences";

const ScreenPreferencesContext = createContext<any>(null);

export const ScreenPreferencesProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading, error } = useScreenPreferences();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading preferences</div>;

  return (
    <ScreenPreferencesContext.Provider value={data.data}>
      {children}
    </ScreenPreferencesContext.Provider>
  );
};

export const useScreenPreferencesContext = () => {
  return useContext(ScreenPreferencesContext);
};
