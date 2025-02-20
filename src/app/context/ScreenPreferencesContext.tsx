"use client";

import { createContext, useContext } from "react";
import { useScreenPreferences } from "../hooks/useScreenPreferences";

interface ScreenPreferencesContextType {
  per_page_values: { label: string; value: number }[];
  preferences: { density: string; theme: string; per_page: number };
}

const ScreenPreferencesContext = createContext<ScreenPreferencesContextType | null>(null);

export const ScreenPreferencesProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading, error } = useScreenPreferences();

  if (isLoading) return <div>Loading preferences...</div>;
  if (error) return <div>Error loading preferences</div>;
  if (!data) return <div>No preferences found</div>; // Handle case when data is undefined

  return (
    <ScreenPreferencesContext.Provider value={data.data}>
      {children}
    </ScreenPreferencesContext.Provider>
  );
};

export const useScreenPreferencesContext = () => {
  const context = useContext(ScreenPreferencesContext);
  if (!context) throw new Error("useScreenPreferencesContext must be used within a ScreenPreferencesProvider");
  return context;
};
