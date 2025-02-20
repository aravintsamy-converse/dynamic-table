import { useQuery } from "@tanstack/react-query";

const fetchScreenPreferences = async () => {
  const response = await fetch("/api/preferences"); // Replace with your actual API endpoint
  if (!response.ok) {
    throw new Error("Failed to fetch screen preferences");
  }
  return response.json();
};

export const useScreenPreferences = () => {
  return useQuery({
    queryKey: ["screenPreferences"],
    queryFn: fetchScreenPreferences,
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });
};
