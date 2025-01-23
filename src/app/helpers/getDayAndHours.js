import { format } from "date-fns";
import { pl } from "date-fns/locale";

// import workingHoursData from "../data/officeWorkingHours.json";

// import { format } from "date-fns";
// import { pl } from "date-fns/locale";

import workingHoursData from "../data/officeWorkingHours.json";

export const getDayDetails = () => {
  const todayDate = new Date();
  const today = format(todayDate, "EEEE", { locale: pl });

  // Pobierz godziny pracy dla aktualnego dnia
  const workingHours = workingHoursData[today.toLowerCase()];

  // Sprawdzenie, czy godziny pracy dla tego dnia istnieją
  if (!workingHours) {
    return {
      day: today,
      home: null,
      away: null,
    };
  }

  // Zwróć dane
  return {
    day: today,
    home: workingHours[0] || null,
    away: workingHours[1] || null,
  };
};
