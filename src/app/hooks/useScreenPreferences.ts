import { useQuery } from "@tanstack/react-query";

interface PerPageValue {
  label: string;
  value: number;
}

interface Preferences {
  density: string;
  theme: string;
  per_page: number;
}

interface ScreenPreferencesData {
  per_page_values: PerPageValue[];
  preferences: Preferences;
}

interface ScreenPreferencesResponse {
  success: boolean;
  data: ScreenPreferencesData;
}

const mockScreenPreferences = {
  success: true,
  data: {
    per_page_values: [
      { label: "10", value: 10 },
      { label: "20", value: 20 },
      { label: "50", value: 50 },
      { label: "100", value: 100 },
    ],
    preferences: {
      density: "comfortable",
      theme: "dark",
      per_page: 50,
    },
  },
};

const fetchScreenPreferences = async (): Promise<ScreenPreferencesResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockScreenPreferences), 500); // Simulate API delay
  });
};

export const useScreenPreferences = () => {
  return useQuery<ScreenPreferencesResponse>({
    queryKey: ["screenPreferences"],
    queryFn: fetchScreenPreferences,
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });
};