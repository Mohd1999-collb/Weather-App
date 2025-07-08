"use client";
import { useGlobalContext } from "@/app/Context/globalContext";
import { kelvinToCelsius } from "@/app/utils/misc";
import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  cloudy,
  drizzleIcon,
  navigation,
  rain,
  snow,
  clearSky,
} from "@/app/utils/Icons";
import { Skeleton } from "@/components/ui/skeleton";

const Temperature = () => {
  const { forecast } = useGlobalContext();
  const [localTime, setLocalTime] = useState<string>("");
  const [currentDay, setCurrentDay] = useState<string>("");

  const { main, timezone, name, weather } = forecast;
  const temp = kelvinToCelsius(main?.temp);
  const minTemp = kelvinToCelsius(main?.temp_min);
  const maxTemp = kelvinToCelsius(main?.temp_max);

  useEffect(() => {
    if (!forecast) return; // Don't run effect if forecast is unavailable
    const interval = setInterval(() => {
      const localMoment = moment().utcOffset(timezone / 60);
      const formattedTime = localMoment.format("HH:mm:ss");
      const day = localMoment.format("dddd");
      setLocalTime(formattedTime);
      setCurrentDay(day);
    }, 1000);
    return () => clearInterval(interval);
  }, [forecast]);

  if (!forecast || !forecast?.weather) {
    return <Skeleton className="h-96 w-full border border-gray-500 rounded-lg" />;    
  } else {
    var { main: weatherMain, description } = weather[0];
  }

  const getIcon = () => {
    switch (weatherMain) {
      case "Drizzle":
        return drizzleIcon;
      case "Rain":
        return rain;
      case "Snow":
        return snow;
      case "Clear":
        return clearSky;
      case "Clouds":
        return cloudy;
      default:
        return clearSky;
    }
  };

  return (
    <div
      className="pt-6 pb-5 px-4 border rounded-lg flex flex-col 
        justify-between dark:bg-dark-grey shadow-sm dark:shadow-none"
    >
      <p className="flex justify-between items-center">
        <span className="font-medium">{currentDay}</span>
        <span className="font-medium">{localTime}</span>
      </p>
      <p className="pt-2 font-bold flex gap-1">
        <span>{name}</span>
        <span>{navigation}</span>
      </p>
      <p className="py-10 text-9xl font-bold self-center">{temp}°</p>
      <div>
        <div>
          <span>{getIcon()}</span>
          <p className="pt-2 capitalize text-lg font-medium">{description}</p>
        </div>
        <p className="flex items-center gap-2">
          <span>Low: {minTemp}°</span>
          <span>High: {maxTemp}°</span>
        </p>
      </div>
    </div>
  );
};

export default Temperature;
