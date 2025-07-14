"use client";
import { useGlobalContext } from "@/app/Context/globalContext";
import { calender } from "@/app/utils/Icons";
import { processData } from "@/app/utils/misc";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const FiveDayForecast = () => {
  const { fiveDaysForecast } = useGlobalContext();
  const { city, list } = fiveDaysForecast;

  if (!fiveDaysForecast || !city || !list) {
    return <Skeleton className="h-[12rem] w-full" />;
  }

  const dailyForecasts = [];
  for (let i = 0; i < 40; i += 8) {
    const dailyData = list.slice(i, i + 5);
    dailyForecasts.push(processData(dailyData));
  }

  return (
    <div
      className="pt-6 pb-4 px-4 flex-1 border rounded-lg flex flex-col
        justify-between dark:bg-dark-grey shadow-sm dark:shadow-none"
    >
      <h2 className="flex items-center gap-2 font-medium">
        {calender} 5 Days Forecast of {city.name}
      </h2>
      <div className="forecast-list pt-3">
        {dailyForecasts.map((day, index) => {
          return (
            <div
              className="daily-forecast py-2 flex flex-col justify-evenly border-b-2"
              key={index}
            >
              <p className="text-xl text-center min-w-[3.5rem]">{day.day}</p>
              <p className="text-sm flex justify-between">
                <span>Low</span>
                <span>High</span>
              </p>
              <div className="flex-1 flex items-center justify-between gap-4">
                <p className="font-bold">{day.minTemp}°C</p>
                <div className="temperature flex-1 w-full h-2 rounded-lg"></div>
                <p className="font-bold">{day.maxTemp}°C</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FiveDayForecast;
