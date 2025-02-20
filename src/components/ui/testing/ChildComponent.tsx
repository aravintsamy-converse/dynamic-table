"use client";

import { useScreenPreferencesContext } from "@/app/context/ScreenPreferencesContext";


export default function ChildComponent() {
  const preferences = useScreenPreferencesContext();

  return (
    <div>
      <h2>Theme: {preferences?.preferences.theme}</h2>
      <h3>Density: {preferences?.preferences.density}</h3>
      <h4>Per Page: {preferences?.preferences.per_page}</h4>
      <h5>Page Options:</h5>
      <ul>
        {preferences?.per_page_values.map((option: any) => (
          <li key={option.value}>
            {option.label} ({option.value})
          </li>
        ))}
      </ul>
    </div>
  );
}
